#!/usr/bin/env bash
# 用 Emscripten 把 SDCC 4.6.0 的 cc1（预处理）、sdcc、sdas8051、sdld 编成 WASM，输出到 public/sdcc/
# Mac 和 Linux（部署用的 GitHub Actions）都能跑
set -euo pipefail

VERSION=4.6.0
REVISION=16555
SHA256=5fd6a93e5997ce01756868fe35e441095cfb637894a80c262514a634094973b6
HERE="$(cd "$(dirname "$0")" && pwd)"
ROOT="$(cd "$HERE/../.." && pwd)"
WORK="$HERE/work"
SRC="$WORK/sdcc-$VERSION"
OUT="$ROOT/public/sdcc"
J=-j"$(getconf _NPROCESSORS_ONLN)"
PORTS_OFF=()
for p in z80 z180 r2k r2ka r3ka r4k r5k r6k sm83 tlcs90 ez80 z80n r800 ds390 ds400 \
         pic14 pic16 hc08 s08 stm8 pdk13 pdk14 pdk15 mos6502 mos65c02 f8 f8l; do
  PORTS_OFF+=("--disable-$p-port")
done

command -v emcc >/dev/null || { echo "缺少 emcc：brew install emscripten" >&2; exit 1; }
mkdir -p "$WORK" "$OUT"
# 头文件和 small 模型的库要同版本 SDCC 的：Mac 上取自 brew 装的；
# Linux 上 apt 的 SDCC 版本太旧，后面用同一份源码编一个只带 8051 的（带 s51 模拟器，部署前跑 Keil 兼容层的测试也用它）
if [ "$(uname)" = Darwin ]; then
  sdcc -v 2>/dev/null | grep -q "$VERSION #$REVISION" || {
    echo "需要本机 SDCC $VERSION #$REVISION（brew install sdcc），头文件和库取自它" >&2; exit 1;
  }
  BOOST_INC="$(brew --prefix boost)/include"
else
  # 不能直接 -I/usr/include，Emscripten 会混进本机的 glibc 头文件，只链 boost 一个目录进来
  BOOST_INC="$WORK/boost-include"
  mkdir -p "$BOOST_INC"
  ln -sfn /usr/include/boost "$BOOST_INC/boost"
fi
[ -f "$BOOST_INC/boost/graph/adjacency_list.hpp" ] || {
  echo "缺少 boost：brew install boost（Linux 上 apt install libboost-dev）" >&2; exit 1;
}

# sdcpp 需要 zlib，用 Emscripten 自带的移植
embuilder build zlib >/dev/null

TARBALL="$WORK/sdcc-src-$VERSION.tar.bz2"
[ -f "$TARBALL" ] || curl -fsSL -o "$TARBALL" \
  "https://downloads.sourceforge.net/project/sdcc/sdcc/$VERSION/sdcc-src-$VERSION.tar.bz2"
echo "$SHA256  $TARBALL" | shasum -a 256 -c -

if [ ! -f "$SRC/.configured" ]; then
  rm -rf "$SRC"
  tar -xjf "$TARBALL" -C "$WORK"
  cd "$SRC"
  patch -p1 < "$HERE/patches/c1mode-debug.patch"
  # 顶层的 config.sub/config.guess 太旧，不认识 wasm32-unknown-emscripten
  cp support/cpp/config.sub support/cpp/config.guess .
  # 构建期要运行的生成器（gcc 的 build/gen*）必须用本机编译器
  emconfigure ./configure \
    --build="$(sh ./config.guess)" --host=wasm32-unknown-emscripten \
    --disable-ucsim --disable-device-lib --disable-packihx --disable-sdcdb \
    --disable-non-free --disable-werror --without-ccache \
    "${PORTS_OFF[@]}" \
    CPPFLAGS="-I$BOOST_INC" CC_FOR_BUILD=cc CXX_FOR_BUILD=c++
  touch .configured
fi

cd "$SRC"
TOOLS=(cc1 sdcc sdas8051 sdld)
# 只构建需要的部分；sdbinutils 里只要 cc1 依赖的 libiberty
build() {
  emmake make "$J" -C support/sdbinutils all-libiberty
  emmake make "$J" -C support/cpp
  emmake make "$J" -C src
  emmake make "$J" -C sdas/as8051
  emmake make "$J" -C sdas/linksrc sdcc-ld8051
}
# 第一遍不带链接参数：有些子目录在 make 时才跑 configure，
# 链接参数会让 emcc 往 stderr 打警告，autoconf 会误判头文件不存在
unset EMCC_CFLAGS
# Emscripten 的 libc 已声明 psignal，别让 libiberty 再定义一份
export ac_cv_func_psignal=yes
build
# 第二遍删掉四个工具的产物，只重新链接，带上模块化参数
for t in "${TOOLS[@]}"; do
  find "$SRC" -name "$t.wasm" -type f | while read -r w; do
    d=$(dirname "$w")
    rm -f "$w" "$d/$t" "$d/$t.js" "$d/$t.mjs"
  done
done
# SDCC 的 Makefile 自带 -g，-g0 放最后覆盖掉，否则 wasm 带调试信息大好几倍
export EMCC_CFLAGS="-O2 -g0 -sMODULARIZE=1 -sEXPORT_ES6=1 -sINVOKE_RUN=0 -sEXIT_RUNTIME=1 \
-sALLOW_MEMORY_GROWTH=1 -sSTACK_SIZE=4MB -sFORCE_FILESYSTEM=1 -sENVIRONMENT=web,worker,node \
-sEXPORTED_RUNTIME_METHODS=callMain,FS"
build

# 产物位置因子项目而异：找到 <name>.wasm，旁边同名（无后缀/.js/.mjs）的就是 JS 胶水
collect() {
  local name=$1 wasm dir js=""
  wasm=$(find "$SRC" -name "$name.wasm" -type f | head -n 1)
  [ -n "$wasm" ] || { echo "构建产物里找不到 $name.wasm" >&2; exit 1; }
  dir=$(dirname "$wasm")
  for c in "$dir/$name.js" "$dir/$name.mjs" "$dir/$name"; do
    if [ -f "$c" ]; then js=$c; break; fi
  done
  [ -n "$js" ] || { echo "找不到 $name 的 JS 文件（$dir）" >&2; exit 1; }
  cp "$wasm" "$OUT/$name.wasm"
  cp "$js" "$OUT/$name.mjs"
}
for t in "${TOOLS[@]}"; do collect "$t"; done

# 头文件和 small 模型的库取自本机同版本 SDCC（WASM 构建关掉了 device-lib）
if [ "$(uname)" = Darwin ]; then
  SHARE="$(brew --prefix sdcc)/share/sdcc"
else
  NATIVE="$WORK/native"
  if [ ! -f "$NATIVE/.installed" ]; then
    rm -rf "$NATIVE"
    mkdir -p "$NATIVE"
    tar -xjf "$TARBALL" -C "$NATIVE"
    # 上面给 WASM 构建设的环境变量别带进来
    (unset EMCC_CFLAGS ac_cv_func_psignal && cd "$NATIVE/sdcc-$VERSION" &&
      ./configure --prefix="$NATIVE/prefix" \
        --disable-packihx --disable-sdcdb \
        --disable-non-free --disable-werror --without-ccache "${PORTS_OFF[@]}" &&
      make "$J" && make install)
    touch "$NATIVE/.installed"
  fi
  "$NATIVE/prefix/bin/sdcc" -v | grep -q "$VERSION #$REVISION" || { echo "原生 SDCC 版本不对" >&2; exit 1; }
  [ -x "$NATIVE/prefix/bin/s51" ] || { echo "原生 SDCC 里没有 s51" >&2; exit 1; }
  SHARE="$NATIVE/prefix/share/sdcc"
fi
(cd "$SHARE" && COPYFILE_DISABLE=1 tar --format ustar -cf "$OUT/share.tar" \
  include/*.h include/mcs51 include/asm/default include/asm/mcs51 lib/small)
# Keil 兼容库（默认 putchar 等），由 scripts/build-keil-lib.ts 生成并提交在仓库里
# 改名参数：Mac 自带的 bsdtar 用 -s，Linux 的 GNU tar 用 --transform
if tar --version | grep -q GNU; then KEIL_NAME=(--transform 's,^,lib/keil/,'); else KEIL_NAME=(-s ',^,lib/keil/,'); fi
(cd "$ROOT/src/compiler/keil/lib" && COPYFILE_DISABLE=1 tar --format ustar -rf "$OUT/share.tar" "${KEIL_NAME[@]}" keilcompat.lib)

ls -l "$OUT"
