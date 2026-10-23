# mculab · 网页单片机实验室

在浏览器里写 51 单片机（和 Arduino Uno）程序、编译、接线、仿真：**https://mculab.nosuchfield.com**

这个仓库只放打包好的网页，由源码仓库的 GitHub Actions 自动部署，请勿直接修改。

## 版权

© mculab · mculab.nosuchfield.com，保留所有权利。网页的代码、元件模型、开发板模板和界面是原创作品，**未经许可不得复制、转载、修改后再发布，或部署到其他网站**。网页只在官方网站上运行。

All rights reserved. You may use mculab at https://mculab.nosuchfield.com, but you may not copy, redistribute, modify, or host it elsewhere without permission.

上面的保留条款不适用于下面列出的第三方组件，它们按各自的协议授权。

## 第三方组件

- **SDCC 4.6.0**（GPL）：网页里的 C 编译器，用 Emscripten 编成 WASM，放在 `sdcc/` 目录，可以按 GPL 自由使用和再分发。对应源码是官方的 [sdcc-src-4.6.0.tar.bz2](https://sourceforge.net/projects/sdcc/files/sdcc/4.6.0/)，加上 `sdcc/source/` 里的补丁和构建脚本。编译出的程序链接的是 SDCC 的运行库，运行库带链接例外，不受 GPL 影响。
- **avr-gcc 7.3.0、GNU binutils 2.26**（GPL）：Arduino Uno 程序的编译器、汇编器和链接器，用 Emscripten 编成 WASM，放在 `avr/` 目录，可以按 GPL 自由使用和再分发。对应源码是官方的 [gcc-7.3.0.tar.xz](https://ftp.gnu.org/gnu/gcc/gcc-7.3.0/)、Atmel AVR 工具链 3.6.1 的 [avr-binutils.tar.bz2](https://downloads.arduino.cc/tools/opensource/Atmel-AVR-GNU-Toolchain/3.6.1/)、[GMP 5.0.2](https://ftp.gnu.org/gnu/gmp/)、[MPFR 3.1.0](https://ftp.gnu.org/gnu/mpfr/)、[MPC 0.9](https://www.multiprecision.org/downloads/)，加上 `avr/source/` 里的补丁（取自 Arduino 官方的 [toolchain-avr](https://github.com/arduino/toolchain-avr/tree/7.3.0-atmel3.6.1-arduino7)）和构建脚本。`avr/share.tar` 里的 libgcc、avr-libc 取自 Arduino 官方发布的 avr-gcc 7.3.0-atmel3.6.1-arduino7；编出的程序链接的 libgcc 带 GCC 运行库例外，avr-libc 是 BSD 协议，都不受 GPL 影响。
- **Arduino AVR 核心 1.8.7** 和它自带的 Wire、SPI、EEPROM、SoftwareSerial（LGPL-2.1），库管理器里的 Servo、LiquidCrystal、Firmata（LGPL-2.1）、Adafruit 的 GFX、SSD1306、BusIO、Unified Sensor、BMP085（BSD）、DHT sensor library（MIT）、Pololu 的 VL53L0X：没有修改，预编译后放在 `avr/share.tar`，源码在 [Arduino 的下载站](https://downloads.arduino.cc/)（核心库 avr-1.8.7.tar.bz2，库按名字和版本）。各自的许可证，和 GPLv3、GCC 运行库例外、LGPL-2.1、avr-libc 的许可证全文，在 share.tar 的 `licenses/` 里。
- `assets/` 下以 `sdcc-`、`avr-` 开头、名字里带一串版本号的文件（如 `avr-cc1plus.<版本号>.wasm`）是上面 `sdcc/`、`avr/` 里编译器文件的副本：按内容取名，网站更新时浏览器和缓存不会把新页面和旧编译器配在一起，协议和对应源码同上。其中 `share.tar` 的副本按文件名排序、去掉打包时间重新打过包，里面的文件一样。
- **Monaco Editor**（MIT）：代码编辑器
- **React**、**zustand**（MIT）：界面
- **@wokwi/elements**（MIT）：部分元件的外观
