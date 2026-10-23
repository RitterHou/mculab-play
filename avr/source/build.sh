#!/usr/bin/env bash
# 用 Emscripten 把 avr-gcc 7.3.0 的 cc1plus 和 binutils 的 as、ld、objcopy 编成 WASM，输出到 public/avr/。
# 源码、补丁、配置参数和 Arduino 官方的 avr-gcc 7.3.0-atmel3.6.1-arduino7 一样
# （github.com/arduino/toolchain-avr 的同名标签：gcc.build.bash、binutils.build.bash、build.conf）：
#   GCC 7.3.0 + Atmel/Arduino 的补丁，Atmel 3.6.1 的 binutils 2.26.20160125 + Arduino 的补丁，GMP 5.0.2、MPFR 3.1.0、MPC 0.9
# 编出来的和官方原生版逐字节对比见 compare.ts。Mac（Apple 芯片）和 Linux（Ubuntu 24.04 x86_64，和部署用的 GitHub Actions 一样）上都验证过：
# 两边编出的 WASM 逐字节一样，只有 cc1plus 里差 4 条永远匹配不上的指令模式——GCC 构建时用本机编译器判断哪些条件恒为假，
# clang 和 gcc 判断得不一样，官方的 Mac 版和 Linux 版也是这样差的；编出来的程序都一模一样
#   build.sh            全部
#   build.sh binutils   只编 binutils（gmp、gcc 同理）
set -euo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
ROOT="$(cd "$HERE/../.." && pwd)"
WORK="$HERE/work"
DL="$WORK/downloads"
# GMP、MPFR、MPC 的 WASM 静态库装在这里，GCC 链接它们
PREFIX="$WORK/prefix"
OUT="$ROOT/public/avr"
J=-j"$(getconf _NPROCESSORS_ONLN)"
BUILD="$("$HERE/config/config.guess")"
HOST=wasm32-unknown-emscripten

command -v emcc >/dev/null || { echo "缺少 emcc：brew install emscripten" >&2; exit 1; }
mkdir -p "$DL" "$PREFIX" "$OUT"
# Emscripten 的 libc 已声明 psignal，别让 libiberty 再定义一份
export ac_cv_func_psignal=yes

# 2016 年前后的 C 代码：新版 clang 默认把隐式声明函数、指针类型不匹配当成错误，降回警告（再用 -w 关掉）
OLD_C="-w -Wno-error=implicit-function-declaration -Wno-error=implicit-int -Wno-error=int-conversion \
-Wno-error=incompatible-pointer-types -Wno-error=incompatible-function-pointer-types"
# GCC 7 是按 C++98 写的（C++17 不许用 register 这类）
OLD_CXX="-w -std=gnu++98"
# 本机编译器（编构建时要跑的小程序）只给它认识的：Mac 上是 clang 都认识；Linux 上是 gcc，
# 没有 incompatible-function-pointer-types 这一项，-Wno-error= 后面跟不认识的名字会直接报错
NATIVE_C="-w"
for f in $OLD_C; do
  [ "$f" = -w ] && continue
  if echo 'int x;' | cc "$f" -x c -c -o /dev/null - 2>/dev/null; then NATIVE_C="$NATIVE_C $f"; fi
done
# 本机的 C++ 编译器（编生成器）用 gnu++14：GCC 7 自己默认就是它，也还允许 register；
# Linux 上新的 g++ 在 gnu++98 下不会顺带包含 std::swap 要的头文件（Mac 的 libc++ 会）
NATIVE_CXX="-w -std=gnu++14"
# 编成 WASM 的代码：源码路径（__FILE__，内部出错时打印）记成相对 work/ 的，在哪台机器、哪个目录编出来都一样
OPT="-O2 -g0 -ffile-prefix-map=$WORK/="

# 第二遍链接的参数：和 SDCC 的一样做成按需调用 main 的 ES 模块；$1 栈大小，$2 另加的参数。
# 内存不够时一次多长 16MB：默认按比例长（MEMORY_GROWTH_GEOMETRIC_STEP=0.2），可 emsdk 的 6.0.12 会把这个小数变成 0
# （Homebrew 的不会），每次只长到刚好够用、要长很多次，两边编出来的也不一样；整数的步长两边一样
link_flags() {
  echo "${2:-} -O2 -g0 -sMODULARIZE=1 -sEXPORT_ES6=1 -sINVOKE_RUN=0 -sEXIT_RUNTIME=1 -sALLOW_MEMORY_GROWTH=1 \
-sMEMORY_GROWTH_LINEAR_STEP=16777216 -sSTACK_SIZE=$1 -sFORCE_FILESYSTEM=1 -sENVIRONMENT=web,worker,node -sEXPORTED_RUNTIME_METHODS=callMain,FS"
}

# 下载（已经下过就不再下）并校验 SHA-256。GCC、GMP、MPFR 写在这里的 SHA-256 是拿 GNU 的公钥验过签名的那一份；
# Atmel 的 binutils（Arduino 的下载站转存的）和 MPC 0.9 没有签名，只能固定 SHA-256
# shasum 在 Mac 和多数 Linux 上都有；精简的 Linux 上没有时用 sha256sum
sha256_of() {
  if command -v shasum >/dev/null; then shasum -a 256 "$1"; else sha256sum "$1"; fi | cut -d' ' -f1
}
fetch() {
  local file=$1 url=$2 sha=$3
  if [ ! -f "$DL/$file" ]; then
    curl -fsSL --retry 3 -o "$DL/$file.part" "$url"
    # 先校验再改名：下坏了的不留在下载目录里
    [ "$(sha256_of "$DL/$file.part")" = "$sha" ] || { rm -f "$DL/$file.part"; echo "$file 的 SHA-256 不对" >&2; exit 1; }
    mv "$DL/$file.part" "$DL/$file"
  fi
  [ "$(sha256_of "$DL/$file")" = "$sha" ] || { echo "$DL/$file 的 SHA-256 不对，删掉重新下载" >&2; exit 1; }
}

# 源码里自带的 config.sub、config.guess 太旧，不认识 wasm32-unknown-emscripten 和 Apple 芯片的 Mac
fresh_config() {
  find "$1" -name config.sub -o -name config.guess | while read -r f; do cp "$HERE/config/$(basename "$f")" "$f"; done
}

# 产物在 dir 下，名字是 name（Emscripten 链接出 name 或 name.js 加 name.wasm）：拷成 public/avr/<as>.mjs、.wasm
collect() {
  local dir=$1 name=$2 as=$3 js=""
  [ -f "$dir/$name.wasm" ] || { echo "构建产物里找不到 $dir/$name.wasm" >&2; exit 1; }
  for c in "$dir/$name.js" "$dir/$name.mjs" "$dir/$name"; do
    if [ -f "$c" ]; then js=$c; break; fi
  done
  [ -n "$js" ] || { echo "找不到 $name 的 JS 文件（$dir）" >&2; exit 1; }
  cp "$dir/$name.wasm" "$OUT/$as.wasm"
  cp "$js" "$OUT/$as.mjs"
}

binutils_source() {
  fetch avr-binutils.tar.bz2 \
    https://downloads.arduino.cc/tools/opensource/Atmel-AVR-GNU-Toolchain/3.6.1/avr-binutils.tar.bz2 \
    7f2ee50c3867ca13be47aee7925c4c9182b15cb5fe6ace23849ee9005081a340
  local src="$WORK/binutils"
  if [ ! -f "$src/.patched" ]; then
    rm -rf "$src"
    tar -xjf "$DL/avr-binutils.tar.bz2" -C "$WORK"
    # 只改了链接脚本模板（avr.sc），不用像官方脚本那样重新 autoconf
    patch -d "$src" -p1 < "$HERE/patches/binutils-data_region_length.patch"
    fresh_config "$src"
    touch "$src/.patched"
  fi
}

# MAKEINFO=true：不编文档（binutils 2.26 不认 --disable-doc，没装 texinfo 时编文档那一步会失败）
BINUTILS_OPTS=(--target=avr --disable-nls --disable-doc --disable-werror --disable-gdb --disable-readline --disable-sim
  --disable-libdecnumber --disable-plugins --disable-shared MAKEINFO=true)

# 同一份 binutils 编一个本机的 avr-as、avr-ld：GCC 配置时要拿真的汇编器、链接器试它们支持什么
# （.loc、.cfi、可合并的字符串段 SHF_MERGE……）。官方构建时 binutils 已经装好了，试得出来；
# 试不出来 GCC 就按都不支持来生成：汇编里自己写行号表、字符串不放进可合并段，和官方的不一样
build_native_binutils() {
  binutils_source
  local b="$WORK/build-native-binutils"
  [ -x "$WORK/native/bin/avr-as" ] && return
  rm -rf "$b"
  mkdir -p "$b"
  # 自带的 2016 年的 zlib 在新版 macOS 上编不过（把 fdopen 定义成宏，和系统头文件冲突），本机的用系统的
  (unset EMCC_CFLAGS && cd "$b" && "$WORK/binutils/configure" --prefix="$WORK/native" "${BINUTILS_OPTS[@]}" --with-system-zlib \
    CC=cc CXX=c++ CFLAGS="-O2 $NATIVE_C" CXXFLAGS="-O2 $NATIVE_CXX" &&
    make "$J" all-gas all-ld all-binutils && make install-gas install-ld install-binutils)
}

build_binutils() {
  binutils_source
  local src="$WORK/binutils" b="$WORK/build-binutils"
  if [ ! -f "$b/.configured" ]; then
    rm -rf "$b"
    mkdir -p "$b"
    (cd "$b" && emconfigure "$src/configure" --build="$BUILD" --host="$HOST" "${BINUTILS_OPTS[@]}" \
      CC_FOR_BUILD=cc CXX_FOR_BUILD=c++ CFLAGS_FOR_BUILD="-O2 $NATIVE_C" \
      CFLAGS="$OPT $OLD_C" CXXFLAGS="$OPT $OLD_CXX")
    touch "$b/.configured"
  fi
  local targets=(all-gas all-ld all-binutils)
  unset EMCC_CFLAGS
  emmake make "$J" -C "$b" "${targets[@]}"
  rm -f "$b/gas/as-new"{,.js,.wasm} "$b/ld/ld-new"{,.js,.wasm} "$b/binutils/objcopy"{,.js,.wasm}
  # binutils 2.26 的老代码里有不少强转了类型的函数指针（gas 把返回 char * 的 dwarf2_directive_file 当成 void (*)(int) 放进伪指令表），
  # 本机上照样能调，WASM 的间接调用要求类型完全一致，会直接报 function signature mismatch：让 Emscripten 统一垫一层
  EMCC_CFLAGS="$(link_flags 1MB -sEMULATE_FUNCTION_POINTER_CASTS=1)" emmake make "$J" -C "$b" "${targets[@]}"
  collect "$b/gas" as-new avr-as
  collect "$b/ld" ld-new avr-ld
  collect "$b/binutils" objcopy avr-objcopy
}

# GCC 算常数（浮点、复数）要用的 GMP、MPFR、MPC：编成 WASM 静态库装进 $PREFIX
build_gmp() {
  fetch gmp-5.0.2.tar.bz2 https://ftp.gnu.org/gnu/gmp/gmp-5.0.2.tar.bz2 \
    dbc2db76fdd4e99f85d5e35aa378ed62c283e0d586b91bd8703aff75a7804c28
  fetch mpfr-3.1.0.tar.bz2 https://ftp.gnu.org/gnu/mpfr/mpfr-3.1.0.tar.bz2 \
    74a7bbbad168dd1cc414f1c9210b8fc16ccfc8e422d34b3371a8978e31eab680
  fetch mpc-0.9.tar.gz https://www.multiprecision.org/downloads/mpc-0.9.tar.gz \
    fd3efe422f0d454592059e80f2c00d1a2e381bf2beda424c5094abd4deb049ac
  unset EMCC_CFLAGS
  # 构建时要跑的小程序（GMP 的 gen-fac 这类）用本机编译器；emconfigure 给的 HOST_CC 用不了
  local common=(--build="$BUILD" --prefix="$PREFIX" --disable-shared --enable-static "CC_FOR_BUILD=cc $NATIVE_C" "HOST_CC=cc $NATIVE_C")
  if [ ! -f "$PREFIX/.gmp" ]; then
    rm -rf "$WORK/gmp-5.0.2"
    tar -xjf "$DL/gmp-5.0.2.tar.bz2" -C "$WORK"
    # GMP 自己的 config.sub 是个包装，里面调的 configfsf.sub 才是 GNU 的那份
    cp "$HERE/config/config.sub" "$WORK/gmp-5.0.2/configfsf.sub"
    cp "$HERE/config/config.guess" "$WORK/gmp-5.0.2/configfsf.guess"
    # CPU 写 none：不用汇编，全用通用的 C 代码（GMP 的说明里这样写）
    (cd "$WORK/gmp-5.0.2" && emconfigure ./configure "${common[@]}" --host=none-unknown-linux CFLAGS="$OPT $OLD_C" &&
      emmake make "$J" && emmake make install)
    touch "$PREFIX/.gmp"
  fi
  if [ ! -f "$PREFIX/.mpfr" ]; then
    rm -rf "$WORK/mpfr-3.1.0"
    tar -xjf "$DL/mpfr-3.1.0.tar.bz2" -C "$WORK"
    fresh_config "$WORK/mpfr-3.1.0"
    (cd "$WORK/mpfr-3.1.0" && emconfigure ./configure "${common[@]}" --host="$HOST" --with-gmp="$PREFIX" CFLAGS="$OPT $OLD_C" &&
      emmake make "$J" && emmake make install)
    touch "$PREFIX/.mpfr"
  fi
  if [ ! -f "$PREFIX/.mpc" ]; then
    rm -rf "$WORK/mpc-0.9"
    tar -xzf "$DL/mpc-0.9.tar.gz" -C "$WORK"
    fresh_config "$WORK/mpc-0.9"
    (cd "$WORK/mpc-0.9" && emconfigure ./configure "${common[@]}" --host="$HOST" --with-gmp="$PREFIX" --with-mpfr="$PREFIX" CFLAGS="$OPT $OLD_C" &&
      emmake make "$J" && emmake make install)
    touch "$PREFIX/.mpc"
  fi
}

# GCC 只要 cc1plus（C++ 编译器本体）：.ino 合成的 C++ 由它编成汇编，预处理也在里面；gcc 驱动程序靠 fork/exec 调别的程序，WASM 里没有
build_gcc() {
  build_gmp
  build_native_binutils
  fetch gcc-7.3.0.tar.xz https://ftp.gnu.org/gnu/gcc/gcc-7.3.0/gcc-7.3.0.tar.xz \
    832ca6ae04636adbb430e865a1451adf6979ab44ca1c8374f61fba65645ce15c
  local src="$WORK/gcc-7.3.0" b="$WORK/build-gcc"
  if [ ! -f "$src/.patched" ]; then
    rm -rf "$src"
    tar -xJf "$DL/gcc-7.3.0.tar.xz" -C "$WORK"
    patch -d "$src" -p1 < "$HERE/patches/gcc-7.3.0-atmel-arduino2.patch"
    fresh_config "$src"
    touch "$src/.patched"
  fi
  if [ ! -f "$b/.configured" ]; then
    rm -rf "$b"
    mkdir -p "$b"
    # 参数和官方 gcc.build.bash 一样，另加：--disable-plugin（WASM 不能加载插件），GMP 这些用上面编好的；
    # 构建时要运行的生成器（build/gen*）用本机编译器；配置时拿本机的 avr-as、avr-ld 试功能
    local tools="$WORK/native/bin"
    (cd "$b" && emconfigure "$src/configure" --build="$BUILD" --host="$HOST" --target=avr \
      --enable-fixed-point --enable-languages=c,c++ --disable-nls --disable-libssp --disable-libada \
      --disable-shared --with-avrlibc=yes --with-dwarf2 --disable-doc \
      --disable-plugin --with-gmp="$PREFIX" --with-mpfr="$PREFIX" --with-mpc="$PREFIX" \
      "CC_FOR_BUILD=cc $NATIVE_C" "CXX_FOR_BUILD=c++ $NATIVE_CXX" \
      AS_FOR_TARGET="$tools/avr-as" LD_FOR_TARGET="$tools/avr-ld" NM_FOR_TARGET="$tools/avr-nm" \
      OBJDUMP_FOR_TARGET="$tools/avr-objdump" READELF_FOR_TARGET="$tools/avr-readelf" \
      CFLAGS="$OPT $OLD_C" CXXFLAGS="$OPT $OLD_CXX")
    touch "$b/.configured"
  fi
  unset EMCC_CFLAGS
  emmake make "$J" -C "$b" all-build-libiberty all-build-libcpp all-libiberty all-libcpp all-libdecnumber \
    all-libbacktrace all-zlib configure-gcc
  # 直接在 gcc 子目录里 make 时，顶层 Makefile 平时传下来的变量要自己给：本机编译器（不然生成器会被编成 WASM），
  # 和优化参数（gcc/configure 特意把 CFLAGS 里的 -O 去掉了，等顶层传；不给就是不优化，编译慢好几倍）
  local vars=("CC_FOR_BUILD=cc $NATIVE_C" "CXX_FOR_BUILD=c++ $NATIVE_CXX" CFLAGS_FOR_BUILD=-O2 CXXFLAGS_FOR_BUILD=-O2 LDFLAGS_FOR_BUILD=
    "CFLAGS=$OPT $OLD_C" "CXXFLAGS=$OPT $OLD_CXX")
  emmake make "$J" -C "$b/gcc" "${vars[@]}" cc1plus
  rm -f "$b/gcc/cc1plus"{,.js,.wasm}
  # cc1plus 递归很深（模板、长表达式），栈给大一些
  EMCC_CFLAGS="$(link_flags 8MB)" emmake make "$J" -C "$b/gcc" "${vars[@]}" cc1plus
  collect "$b/gcc" cc1plus cc1plus
}

case "${1:-all}" in
  binutils) build_binutils ;;
  gmp) build_gmp ;;
  gcc) build_gcc ;;
  all)
    build_binutils
    build_gcc
    ;;
  *) echo "用法：build.sh [binutils|gmp|gcc|all]" >&2; exit 1 ;;
esac
ls -l "$OUT"
