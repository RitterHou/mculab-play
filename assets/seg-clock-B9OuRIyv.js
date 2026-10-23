import{f as e,i as t,n,o as r,p as i,r as a,s as o,u as s}from"./template-D5wLESjO.js";import{t as c}from"./lcd1602-font-a00-D2wjjHmX.js";import{n as l}from"./drivers-Dn-GEBgI.js";var u=(e,t,n,r)=>({from:e,to:t,color:n,route:r}),d=e=>Math.round(e*100)/100;function ee(e,t,n,r,i){let a=n.map(({route:e,...t})=>({...t,route:typeof e==`function`?`straight`:e})),c=s({parts:[o(e),...t],wires:a,files:r},i);return n.forEach((e,t)=>{if(typeof e.route!=`function`)return;let n=i?.(e.from,c.parts),r=i?.(e.to,c.parts);n&&r&&(c.wires[t].points=e.route(n,r).map(([e,t])=>[d(e),d(t)]))}),c}var te={x:37.585,y:-16.895};function ne(t,n,r,i=`red`){let a=[],o=[];return t.forEach((s,c)=>{a.push(e(s,`led`,n[c],r,{color:i})),o.push(u(`r_${s}:2`,`${s}:A`,`orange`,`straight`)),c>0&&o.push(u(`r_${t[c-1]}:1`,`r_${s}:1`,`red`,`straight`))}),t.forEach((t,i)=>a.push(e(`r_${t}`,`resistor`,n[i]+8,r+7,{ohms:1e3},90))),{parts:a,lines:o}}var re=`sbit SER   = P3^4;      /* 595 的 SER（也叫 DS）：串行数据，一次送一位 */
sbit LATCH = P3^5;      /* 595 的 RCLK（也叫 ST_CP）：锁存时钟，上升沿把 8 位一起送到输出脚。
                           reg52.h 里已经有一个叫 RCLK 的位（定时器 2 用的），重名会报错，所以换个名字 */
sbit SRCLK = P3^6;      /* 595 的 SRCLK（也叫 SH_CP）：移位时钟，每个上升沿收进一位 */

/* 把一个字节送进 595：从最高位（第 7 位）开始，一位一位地送，一共送 8 次 */
void hc595_send(unsigned char dat)
{
    unsigned char i;
    for (i = 0; i < 8; i++) {
        if (dat & 0x80)         /* dat & 1000 0000：只看最高位，不是 0 就说明最高位是 1 */
            SER = 1;
        else
            SER = 0;
        SRCLK = 0;
        SRCLK = 1;              /* 移位时钟上升沿：595 收下 SER 上的这一位，已经收到的各位往后挪一格 */
        dat <<= 1;              /* 左移一位：原来的第 6 位变成最高位，准备下一次送 */
    }
    LATCH = 0;
    LATCH = 1;                  /* 锁存时钟上升沿：刚收齐的 8 位一起出现在 QA~QH 上 */
}`,f={x:590,y:130};function ie(){return[u(`mcu:P3.4`,`u595:SER`,`green`,{lane:690}),u(`mcu:P3.5`,`u595:RCLK`,`blue`,{lane:698}),u(`mcu:P3.6`,`u595:SRCLK`,`orange`,{lane:706}),u(`u595:OE`,`mcu:GND`,`black`,(e,t)=>[[714,e.y],[714,38],[t.x,38]]),u(`u595:SRCLR`,`mcu:VCC`,`red`,(e,t)=>[[722,e.y],[722,30],[t.x,30]]),u(`u595:GND`,`mcu:GND`,`black`,(e,t)=>[[250,e.y],[250,56],[t.x,56]])]}var ae=`/*
 * 【实验】74HC595 扩展 8 个 LED
 * 【现象】8 个 LED 按花样变化：两头的灯往中间收拢、再展开，然后全亮、全灭、隔一个亮一个地交替，
 *        每 0.3 秒换一次，一直循环
 * 【接线】74HC595：SER（DS）接 P3.4，RCLK（ST_CP）接 P3.5，SRCLK（SH_CP）接 P3.6；
 *        OE 接 GND（输出一直打开），SRCLR（MR）接 VCC（不清零），VCC、GND 接电源。
 *        8 个 LED：VCC → 1kΩ 电阻 → LED 正极（长脚）→ LED 负极 → 595 的输出脚，
 *        从左到右依次接 QH、QG、QF、QE、QD、QC、QB、QA
 * 【原理】74HC595 是"串入并出"的移位寄存器，作用是用 3 根线控制 8 个输出：
 *        单片机把一个字节一位一位地放到 SER 上，每给 SRCLK 一个上升沿（0 变 1），
 *        595 就收进一位，已经收到的位往后挪一格，像排队一样。8 位都收齐以后，
 *        再给 RCLK 一个上升沿，595 才把这 8 位一起送到 QA~QH 八个输出脚上（"并出"）。
 *        送的过程中输出脚不变，所以灯不会乱闪。先送的最高位最后停在 QH，最后送的最低位停在 QA。
 *        电流方向：595 的输出脚既能输出高电平，也能把电流"吸"进来。这里 LED 接在 VCC 和输出脚之间，
 *        输出 0 时电流从 VCC 经电阻、LED 流进 595，灯亮；输出 1 时 LED 两端都是高电平，没有电流，灯灭。
 *        所以和 P1 口流水灯一样是"写 0 亮"。电阻用来限制电流：595 每个脚最多只能通过 35 毫安左右，
 *        不串电阻会烧坏芯片和 LED。
 *        LED 从左到右对应字节的第 7 位到第 0 位，和二进制的书写顺序一样：0111 1110 就是两头的灯亮。
 * 【试着改改】
 *   1. 把 delay_ms(300) 改成 100，花样变得更快。
 *   2. 在 pattern 里加上你自己设计的花样，比如 0x0F（0000 1111，左边 4 个亮）。
 *   3. 把 595 的 OE 从 GND 改接到 VCC：OE 是"输出使能"，为高电平时 595 的输出全部断开，灯全灭。
 */
#include <reg52.h>      /* 52 单片机的寄存器定义 */

${re}

/* 花样表：每个字节是一种花样，0 亮 1 灭。code 表示放在程序存储器（Flash）里 */
unsigned char code pattern[] = {
    0x7E,   /* 0111 1110：两头两个亮 */
    0xBD,   /* 1011 1101：往中间收一格 */
    0xDB,   /* 1101 1011 */
    0xE7,   /* 1110 0111：中间两个亮 */
    0xDB,   /* 1101 1011：再往外展开 */
    0xBD,   /* 1011 1101 */
    0x00,   /* 0000 0000：全亮 */
    0xFF,   /* 1111 1111：全灭 */
    0x55,   /* 0101 0101：隔一个亮一个 */
    0xAA    /* 1010 1010：换另外一半亮 */
};

${t}

void main(void)
{
    unsigned char i;
    while (1) {                                 /* 永远重复 */
        for (i = 0; i < sizeof(pattern); i++) { /* sizeof(pattern) 是数组占的字节数，这里就是花样的个数 */
            hc595_send(pattern[i]);             /* 把第 i 个花样送进 595，灯马上变成这个样子 */
            delay_ms(300);                      /* 保持 0.3 秒 */
        }
    }
}
`,oe=[`QH`,`QG`,`QF`,`QE`,`QD`,`QC`,`QB`,`QA`],se={id:`hc595-led`,title:`74HC595 扩展 8 个 LED`,group:`display`,description:`74HC595 的 SER/RCLK/SRCLK 接 P3.4/P3.5/P3.6，8 个 LED 接 QH~QA（低电平亮）。只用 3 根线控制 8 个灯，按花样变化。`,create:t=>{let r=oe.map((e,t)=>`led${t+1}`),i=ne(r,r.map((e,t)=>260+t*36),64);return ee(n,[...i.parts,e(`u595`,`74hc595`,f.x,f.y)],[u(`r_led1:1`,`mcu:VCC`,`red`,`hv`),...i.lines,...r.slice(0,7).map((e,t)=>u(`${e}:C`,`u595:${oe[t]}`,`green`,`vh`)),u(`led8:C`,`u595:QA`,`green`,(e,t)=>[[e.x,120],[682,120],[682,t.y]]),u(`u595:VCC`,`r_led8:1`,`red`,(e,t)=>[[674,e.y],[674,t.y]]),...ie()],{"main.c":ae},t)}},p=(e,t,n,r)=>({from:e,to:t,color:n,route:r}),ce=64,m=e=>/^led\d+$/.test(e)?`r${e.slice(3)}`:`r_${e}`;function le(t){return{parts:[...t.map(t=>e(t.id,t.type??`led`,t.x,ce,t.type?{}:{color:t.color??`red`})),...t.map(t=>e(m(t.id),`resistor`,t.x+8,71,{ohms:1e3},90))],wires:t.flatMap((e,n)=>{let r=m(e.id);return[n===0?p(`${r}:1`,`mcu:VCC`,`red`,`hv`):p(`${m(t[n-1].id)}:1`,`${r}:1`,`red`,`straight`),p(`${r}:2`,`${e.id}:A`,`orange`,`straight`),p(`${e.id}:C`,`mcu:${e.pin}`,`green`,`vh`)]})}}var ue=e=>le(Array.from({length:e},(e,t)=>({id:`led${t+1}`,pin:`P1.${t}`,x:250+t*36}))),de=(e,t)=>p(`mcu:GND`,e,`black`,{lane:t,drop:-44}),fe=()=>e(`keypad`,`keypad4x4`,680,30),pe=()=>[`R1`,`R2`,`R3`,`R4`,`C1`,`C2`,`C3`,`C4`].map((e,t)=>({from:`keypad:${e}`,to:`mcu:P1.${7-t}`,color:t<4?`blue`:`green`,route:{lane:596+t*8,drop:14+t*6}})),me=e=>Math.round(e*100)/100;function he(e,t,n){let r=s(e,n);for(let e of t){let t=n?.(e.from,r.parts),i=n?.(e.to,r.parts),a=t&&i?e.points(t,i).map(([e,t])=>[me(e),me(t)]):[];r.wires.push({from:e.from,to:e.to,color:e.color,points:a})}return r}var ge=`#define NO_KEY 0xFF      /* key_scan 没找到按下的键时返回这个值 */

/* 扫描一遍矩阵键盘：有键按下就等松手，返回键号 0~15；没有键按下返回 NO_KEY。
   键号按行数：第 1 行（1 2 3 A）是 0~3，第 2 行（4 5 6 B）是 4~7，以此类推。 */
unsigned char key_scan(void)
{
    unsigned char row, col, cols;
    for (row = 0; row < 4; row++) {                 /* 第 1~4 行轮流检查，row = 0 是第 1 行 */
        P1 = ~(0x80 >> row);                        /* 只让这一行输出 0。row = 0 时 0x80 >> 0 = 1000 0000，
                                                       ~ 取反得 0111 1111：只有 P1.7（第 1 行）是 0。
                                                       其余行和 4 根列线都写 1：51 的引脚要先写 1 才能当输入读 */
        cols = P1 & 0x0F;                           /* 读 P1，& 0x0F（0000 1111）只留低 4 位，也就是 4 根列线 */
        if (cols != 0x0F) {                         /* 不是 1111：这一行上有键按下，把它那根列线拉成了 0 */
            delay_ms(10);                           /* 等 10 毫秒，躲过按键抖动 */
            cols = P1 & 0x0F;                       /* 再读一次 */
            if (cols != 0x0F) {                     /* 还是有 0：确认真的按下了 */
                for (col = 0; col < 4; col++)       /* 找是哪一列：第 1 列接 P1.3 …… 第 4 列接 P1.0 */
                    if ((cols & (0x08 >> col)) == 0)    /* 0x08 = 0000 1000 对应 P1.3，右移 col 位依次是 P1.2、P1.1、P1.0 */
                        break;                      /* 这一位是 0：就是这一列，跳出 for，col 留着列号 */
                while ((P1 & 0x0F) != 0x0F);        /* 一直等到松手（列线全变回 1），这样按一次只算一次 */
                return row * 4 + col;               /* 每行 4 个键，所以键号 = 行号 × 4 + 列号 */
            }
        }
    }
    return NO_KEY;                                  /* 4 行都查完了，没有键按下 */
}`,_e=`/*
 * 【实验】矩阵键盘 + 数码管
 * 【现象】上电数码管显示一条横线 "-"；按下键盘上的键，数码管显示键上的字：
 *        0~9 显示数字，A~D 显示 A、b、C、d，* 显示 E，# 显示 F
 * 【接线】4×4 矩阵键盘：行 R1~R4 接 P1.7~P1.4，列 C1~C4 接 P1.3~P1.0；
 *        一位共阴数码管：段 A~G、DP 接 P0.0~P0.7，公共端 COM 接 GND
 * 【原理】16 个按键如果每个单独接一根线，要占 16 个引脚；排成 4 行 × 4 列只要 8 根线：
 *        每个键接在一根行线和一根列线的交叉处，按下就把这两根线接通。
 *        怎么知道按的是哪个？让一行输出 0、其余行输出 1，再读 4 根列线：
 *        这一行上的键按下了，它那根列线就被拉成 0；别的行都是 1，上面的键按了也拉不低列线。
 *        如果 4 行同时输出 0，读到某列是 0 只知道是哪一列，分不出是哪一行，
 *        所以要一行一行地查，这叫"逐行扫描"。扫一遍只要几十微秒，人按一下键至少几十毫秒，不会漏掉。
 *        找到键号后先查 key_value 表得到键上的数字，再查段码表送到 P0，数码管就显示出来。
 * 【试着改改】
 *   1. 把 key_value 里的 0x0E（* 键）改成 0，按 * 也显示 0。
 *   2. 把 P0 = 0x40 改成 P0 = 0x00，上电时数码管全灭，按了键才亮。
 *   3. 把 key_scan 里的 0x80 >> row 改成 0x10 << row（从第 4 行往第 1 行扫），
 *      row 和真正的行号对不上了，按 5 会显示 8，体会键号是怎么由"哪一行是 0"决定的。
 */
#include <reg52.h>      /* 52 单片机的寄存器定义：P0、P1 这些名字都在里面 */

/* 共阴段码表 0~F：段输出 1 才亮，第 0 位是 A 段 …… 第 7 位是小数点 DP。
   比如 table[5] = 0x6D = 0110 1101，点亮 A、C、D、F、G 五段，就是 "5"。
   code 表示放在程序存储器（Flash）里，不占内存（RAM） */
unsigned char code table[16] = { 0x3F, 0x06, 0x5B, 0x4F, 0x66, 0x6D, 0x7D, 0x07,
                                 0x7F, 0x6F, 0x77, 0x7C, 0x39, 0x5E, 0x79, 0x71 };

/* 键号 → 要显示的数字。键盘上印的字按行是：1 2 3 A / 4 5 6 B / 7 8 9 C / * 0 # D，
   0x0A~0x0F 是十六进制的 10~15，对应段码表里的 A b C d E F；* 显示 E（0x0E），# 显示 F（0x0F） */
unsigned char code key_value[16] = { 1, 2, 3, 0x0A,
                                     4, 5, 6, 0x0B,
                                     7, 8, 9, 0x0C,
                                     0x0E, 0, 0x0F, 0x0D };

${t}

${ge}

void main(void)
{
    unsigned char k;                        /* 扫到的键号 */
    P0 = 0x40;                              /* 0100 0000：只亮 G 段，显示一条横线，表示还没按键 */
    while (1) {                             /* 一直重复：不停地扫键盘 */
        k = key_scan();                     /* 扫一遍，有键就拿到键号 */
        if (k != NO_KEY)                    /* 真的按了键才换显示，没按就保持原样 */
            P0 = table[key_value[k]];       /* 先查出键上的数字，再查它的段码，送给数码管 */
    }
}
`,h={x:240,y:112},ve=[{from:`seg:B`,to:`mcu:P0.1`,color:`green`,route:{lane:304,drop:-10}},{from:`seg:A`,to:`mcu:P0.0`,color:`green`,route:{lane:310,drop:-16}},{from:`seg:F`,to:`mcu:P0.5`,color:`green`,route:{lane:316,drop:-22}},{from:`seg:G`,to:`mcu:P0.6`,color:`green`,route:{lane:322,drop:-28}},{from:`seg:DP`,to:`mcu:P0.7`,color:`green`,route:{lane:334,drop:14}},{from:`seg:C`,to:`mcu:P0.2`,color:`green`,route:{lane:340,drop:20}},{from:`seg:D`,to:`mcu:P0.3`,color:`green`,route:{lane:346,drop:26}},{from:`seg:E`,to:`mcu:P0.4`,color:`green`,route:{lane:352,drop:32}}],ye={from:`seg:COM`,to:`mcu:GND`,color:`black`,points:(e,t)=>[[e.x,e.y+40],[h.x-14,e.y+40],[h.x-14,36],[t.x,36]]},be={id:`keypad-seg`,title:`矩阵键盘 + 数码管`,group:`input`,description:`4×4 矩阵键盘接 P1（行 P1.7~P1.4、列 P1.3~P1.0），逐行扫描找出按下的键；一位共阴数码管（段接 P0）显示键上的字。`,create:t=>he({parts:[o(a),e(`seg`,`seg7`,h.x,h.y,{common:`cathode`,color:`red`}),fe()],wires:[...ve,...pe()],files:{"main.c":_e}},[ye],t)},g=(e,t,n,r)=>({from:e,to:t,color:n,route:r}),_=(e,t,n={row:t})=>g(e,`mcu:VCC`,`red`,n),v=(e,t,n={row:t})=>g(e,`mcu:GND`,`black`,n),xe=(e,t,r,a=n)=>g(`mcu:VCC`,e,`red`,{lane:r,drop:t-i(`VCC`,a)[1]}),Se=(e,t,r,a=n)=>g(`mcu:GND`,e,`black`,{lane:r,drop:t-i(`GND`,a)[1]}),Ce=e=>Math.round(e*100)/100,y=(t,n,r,i)=>e(t,`resistor`,Ce(r-29.585),Ce(i-34.905),{ohms:n},90);function b(t,n){return{parts:[e(`usb`,`usb-serial`,t.x+220,130,{baud:9600},270)],wires:[g(`usb:TXD`,`mcu:P3.0`,`blue`,{lane:t.x+222,drop:-14}),g(`usb:RXD`,`mcu:P3.1`,`orange`,{lane:t.x+212,drop:-22}),v(`usb:GND`,n)]}}function we(e,t,n,r){return{parts:[y(`rscl`,4700,280,t),y(`rsda`,4700,310,n)],wires:[g(`${e}:SCL`,`rscl:2`,`orange`,`straight`),g(`${e}:SDA`,`rsda:2`,`green`,`straight`),g(`rscl:2`,`mcu:P2.1`,`orange`,`vh`),g(`rsda:2`,`mcu:P2.0`,`green`,`vh`),_(`rscl:1`,r),_(`rsda:1`,r)]}}function Te(t){let n=we(`pcf`,167.6,177.2,48);return{parts:[e(`pcf`,`pcf8591`,150,100,t),...n.parts],wires:[...n.wires,_(`pcf:VDD`,48),Se(`pcf:VSS`,40,138,a)]}}var x=`/* ---------- 串口：9600 波特，和"串口收发"示例一样 ---------- */
void uart_init(void)
{
    SCON = 0x50;        /* 0101 0000：串口方式 1（8 位数据，波特率可变），REN = 1 允许接收 */
    TMOD &= 0x0F;       /* TMOD 高 4 位管 T1：先清零 */
    TMOD |= 0x20;       /* 高 4 位写 0010：T1 方式 2，8 位自动重装（溢出后自动从 TH1 装回初值） */
    TH1 = 0xFD;         /* 0xFD 对应 9600 波特（11.0592MHz） */
    TL1 = 0xFD;
    TR1 = 1;            /* 启动 T1，串口就有了节拍 */
}

void send_byte(unsigned char c)
{
    SBUF = c;           /* 写进 SBUF，硬件开始一位一位地发 */
    while (!TI);        /* 等发送完成：TI 变成 1 */
    TI = 0;             /* TI 要软件自己清零，否则下次判断不了 */
}

void send_string(char *s)
{
    while (*s)              /* 一个字符一个字符地发，遇到字符串末尾的 0 停止 */
        send_byte(*s++);
}`,S=`/* 把数 n 按十进制一位一位发出去，比如 1234 依次发出字符 '1' '2' '3' '4' */
void send_number(unsigned int n)
{
    unsigned char buf[5];           /* unsigned int 最大 65535，最多 5 位 */
    unsigned char i = 0;
    do {
        buf[i++] = n % 10 + '0';    /* n % 10 取出个位；加上字符 '0'（ASCII 码 48）就变成对应的数字字符 */
        n /= 10;                    /* 去掉个位，原来的十位变成个位 */
    } while (n != 0);               /* do...while 至少做一次，所以 n = 0 时也会发出 "0" */
    while (i > 0)
        send_byte(buf[--i]);        /* 先算出来的是个位，所以要倒着发 */
}`;function C(t={}){return{parts:[e(`oled`,`ssd1306`,180,150,t)],wires:[g(`oled:SCL`,`mcu:P2.1`,`orange`,{lane:340,drop:-14}),g(`oled:SDA`,`mcu:P2.0`,`green`,{lane:350,drop:-8}),v(`oled:GND`,40),_(`oled:VCC`,48)]}}var w=`/* ---------- OLED（SSD1306）：I2C 地址 0x3C，写的时候发 0x78 ---------- */
#define OLED_ADDR 0x78      /* 7 位地址 0x3C 左移一位、最低位补 0（写），很多资料直接写成 0x78 */

/* 给 OLED 发一个字节：和 i2c_send 一样高位在前，只是去掉了每一步之间的等待，也不看应答。
   OLED 支持 400kHz 的快速模式，51 怎么跑都不会超速；刷一屏要发 1024 个字节，省下的时间很可观 */
void oled_send(unsigned char dat)
{
    unsigned char i;
    for (i = 0; i < 8; i++) {
        if (dat & 0x80)
            SDA = 1;
        else
            SDA = 0;
        dat <<= 1;
        SCL = 1;            /* 上升沿：OLED 收下这一位 */
        SCL = 0;
    }
    SDA = 1;                /* 第 9 个时钟是 OLED 的应答，这里不看 */
    SCL = 1;
    SCL = 0;
}

/* 写一条指令：地址 + 控制字节 0x00（表示后面是指令）+ 指令 */
void oled_cmd(unsigned char c)
{
    i2c_start();
    oled_send(OLED_ADDR);
    oled_send(0x00);
    oled_send(c);
    i2c_stop();
}

/* 开始连续写显存：地址 + 控制字节 0x40（表示后面全是显示数据）。
   之后每 oled_send 一个字节就画 8 个竖着的点，写完调用 i2c_stop() */
void oled_data_begin(void)
{
    i2c_start();
    oled_send(OLED_ADDR);
    oled_send(0x40);
}

/* 把写入位置移到第 page 页（0~7，每页 8 行像素）、第 col 列（0~127） */
void oled_pos(unsigned char page, unsigned char col)
{
    oled_cmd(0xB0 + page);          /* B0~B7：选页 */
    oled_cmd(col & 0x0F);           /* 00~0F：列地址的低 4 位 */
    oled_cmd(0x10 | (col >> 4));    /* 10~17：列地址的高 4 位 */
}

/* 清屏：8 页，每页 128 个字节都写 0 */
void oled_clear(void)
{
    unsigned char page, col;
    for (page = 0; page < 8; page++) {
        oled_pos(page, 0);
        oled_data_begin();
        for (col = 0; col < 128; col++)
            oled_send(0x00);
        i2c_stop();
    }
}

void oled_init(void)
{
    delay_ms(100);          /* 上电后等 OLED 稳定 */
    oled_cmd(0xAE);         /* 先关显示 */
    oled_cmd(0x20);         /* 寻址方式，后面跟一个参数 */
    oled_cmd(0x02);         /* 02 = 页寻址：写满一页的 128 列不会自动换页 */
    oled_cmd(0x81);         /* 对比度，后面跟一个参数 */
    oled_cmd(0xCF);         /* 0x00~0xFF，越大越亮 */
    oled_cmd(0xA1);         /* 左右方向：A1 正常，A0 左右反过来 */
    oled_cmd(0xC8);         /* 上下方向：C8 正常，C0 上下反过来 */
    oled_cmd(0xA8);         /* 多路复用（用几行），后面跟一个参数 */
    oled_cmd(0x3F);         /* 64 行 */
    oled_cmd(0xD3);         /* 显示偏移，后面跟一个参数 */
    oled_cmd(0x00);         /* 不偏移 */
    oled_cmd(0x40);         /* 起始行 0 */
    oled_cmd(0xD5);         /* 时钟分频，后面跟一个参数 */
    oled_cmd(0x80);
    oled_cmd(0xD9);         /* 预充电周期，后面跟一个参数 */
    oled_cmd(0xF1);
    oled_cmd(0xDA);         /* COM 引脚配置，后面跟一个参数 */
    oled_cmd(0x12);         /* 128×64 的屏用 0x12 */
    oled_cmd(0xDB);         /* VCOMH 电压，后面跟一个参数 */
    oled_cmd(0x40);
    oled_cmd(0x8D);         /* 电荷泵，后面跟一个参数 */
    oled_cmd(0x14);         /* 0x14 = 打开。不开电荷泵，屏幕不会亮！ */
    oled_cmd(0xA4);         /* 按显存内容显示（A5 是不管显存、全部点亮） */
    oled_cmd(0xA6);         /* 正常显示（A7 是反色：亮的变暗、暗的变亮） */
    oled_clear();           /* 上电时显存里是随机内容，不清屏会看到一屏雪花点 */
    oled_cmd(0xAF);         /* 开显示 */
}`,T=e=>`0x${e.toString(16).toUpperCase().padStart(2,`0`)}`;function Ee(e){let t=c.slice(e*8,e*8+8);return[...[0,1,2,3,4].map(e=>t.reduce((t,n,r)=>t|(n>>e&1)<<r,0)),0]}var E=`/* 6×8 字库：每个字符 6 列，每列 1 个字节（竖着 8 个像素，低位在上，和 OLED 显存的排法一样），
   从空格（ASCII 0x20）排到 ~（0x7E），一共 95 个字符、570 字节，放在程序存储器（code）里。
   字形取自 LCD1602 的字库，所以 \\ 显示成 ¥、~ 显示成 →。也可以用「工具 → 字模生成」自己做 */
unsigned char code font6x8[95][6] = {
${Array.from({length:95},(e,t)=>`    { ${Ee(32+t).map(T).join(`, `)} }${t<94?`,`:` `}  /* '${String.fromCharCode(32+t)}' */`).join(`
`)}
};

/* 在第 page 页、第 col 列显示一个字符（6×8） */
void oled_char(unsigned char page, unsigned char col, char c)
{
    unsigned char i;
    if (c < ' ' || c > '~')
        c = ' ';                            /* 字库里没有的字符显示成空格 */
    oled_pos(page, col);
    oled_data_begin();
    for (i = 0; i < 6; i++)
        oled_send(font6x8[c - ' '][i]);      /* 字库从空格开始排，所以第 c - ' ' 个就是字符 c */
    i2c_stop();
}

/* 从第 page 页、第 col 列开始显示一串字符，每个字符占 6 列 */
void oled_string(unsigned char page, unsigned char col, char *s)
{
    while (*s) {
        oled_char(page, col, *s++);
        col += 6;
    }
}`;function De(e){let t=(t,n)=>+(e[n]?.[t]===`#`),n=[];for(let e of[0,1])for(let r=0;r<16;r++)n.push([0,1,2,3,4,5,6,7].reduce((n,i)=>n|t(r,e*8+i)<<i,0));return n}var D=(e,t=`    `)=>`${t}${e.slice(0,16).map(T).join(`, `)},\n${t}${e.slice(16).map(T).join(`, `)}`;function Oe(t,n,r,i,a={}){return{parts:[e(t,n,r,i,a)],wires:[g(`${t}:SCL`,`mcu:P2.1`,`orange`,{lane:340,drop:-14}),g(`${t}:SDA`,`mcu:P2.0`,`green`,{lane:350,drop:-8}),_(`${t}:VCC`,40),v(`${t}:GND`,48)]}}var O=`/* ---------- BH1750 光照传感器：I2C 地址 0x23（ADDR 不接或接地），写 0x46、读 0x47 ---------- */
#define BH1750_W 0x46       /* 0x23 左移一位，最低位 0 = 写 */
#define BH1750_R 0x47       /* 最低位 1 = 读 */

/* 给 BH1750 发一条指令（都是一个字节） */
void bh1750_cmd(unsigned char c)
{
    i2c_start();
    i2c_send(BH1750_W);
    i2c_send(c);
    i2c_stop();
}

void bh1750_init(void)
{
    bh1750_cmd(0x01);       /* 上电（刚通电时 BH1750 处在断电状态，不测量） */
    bh1750_cmd(0x10);       /* 连续高分辨率测量：分辨率 1 lx，每 120ms 测一次，测完自动接着测 */
    delay_ms(200);          /* 第一次测量要 120ms（最长 180ms），等它测完再读，不然读到的是 0 */
}

/* 读光照强度（lx）：先读高字节、再读低字节，拼成 16 位读数，lux = 读数 ÷ 1.2 */
unsigned int bh1750_read(void)
{
    unsigned int raw;
    i2c_start();
    i2c_send(BH1750_R);
    raw = i2c_recv(1) << 8;             /* 高字节，回应答：还要读下一个 */
    raw |= i2c_recv(0);                 /* 低字节，不应答：读够了 */
    i2c_stop();
    return (unsigned long)raw * 5 / 6;  /* ÷ 1.2 就是 × 5 ÷ 6；先转成 unsigned long，65535 × 5 超出了 unsigned int */
}`,ke=`/* ---------- AHT20 温湿度传感器：I2C 地址 0x38，写 0x70、读 0x71 ---------- */
#define AHT20_W 0x70        /* 0x38 左移一位，最低位 0 = 写 */
#define AHT20_R 0x71        /* 最低位 1 = 读 */

unsigned char aht_buf[7];   /* 读到的 7 个字节：状态、湿度和温度（各 20 位，共 5 个字节）、CRC 校验 */

/* CRC8 校验：多项式 x^8 + x^5 + x^4 + 1（写成 0x31），初值 0xFF。
   一个字节一个字节地算，每个字节再一位一位地算：最高位是 1 就左移后异或 0x31，是 0 就只左移 */
unsigned char aht20_crc(unsigned char *p, unsigned char n)
{
    unsigned char crc = 0xFF;
    unsigned char i;
    while (n--) {
        crc ^= *p++;
        for (i = 0; i < 8; i++) {
            if (crc & 0x80)
                crc = (crc << 1) ^ 0x31;
            else
                crc <<= 1;
        }
    }
    return crc;
}

/* 测一次：发 AC 33 00 触发测量，等 80ms 以上，再读 7 个字节。
   成功返回 1；没应答、还在忙、CRC 对不上返回 0 */
unsigned char aht20_measure(void)
{
    unsigned char i;
    i2c_start();
    if (!i2c_send(AHT20_W)) {       /* 地址没人应答：没接好，或者上电还不到 40ms */
        i2c_stop();
        return 0;
    }
    i2c_send(0xAC);                 /* 触发测量：AC 33 00 */
    i2c_send(0x33);
    i2c_send(0x00);
    i2c_stop();
    delay_ms(100);                  /* 测量要 80ms；delay_ms 实际偏短一点，写 100 */
    i2c_start();
    i2c_send(AHT20_R);
    for (i = 0; i < 7; i++)
        aht_buf[i] = i2c_recv(i < 6);       /* 前 6 个字节回应答，最后一个不应答 */
    i2c_stop();
    if (aht_buf[0] & 0x80)          /* 状态字节第 7 位是 1：还在测，数据是旧的 */
        return 0;
    return aht20_crc(aht_buf, 6) == aht_buf[6];     /* 前 6 个字节算出的 CRC 要等于第 7 个字节 */
}

/* 温度，单位 0.1℃（比如 253 就是 25.3℃）。20 位读数在 aht_buf[3] 的低 4 位、aht_buf[4]、aht_buf[5]，
   温度 = 读数 ÷ 2^20 × 200 − 50，乘 10 变成 0.1℃：读数 × 2000 ÷ 2^20 − 500。
   ÷ 2^20 就是右移 20 位；右移前先加上 2^19（0x80000，除数的一半），结果就是四舍五入而不是直接舍掉小数 */
int aht20_temperature(void)
{
    unsigned long raw = ((unsigned long)(aht_buf[3] & 0x0F) << 16) | ((unsigned long)aht_buf[4] << 8) | aht_buf[5];
    return (int)((raw * 2000 + 0x80000) >> 20) - 500;
}

/* 湿度，单位 0.1%。20 位读数在 aht_buf[1]、aht_buf[2]、aht_buf[3] 的高 4 位，
   湿度 = 读数 ÷ 2^20 × 100%，乘 10：读数 × 1000 ÷ 2^20，同样四舍五入 */
unsigned int aht20_humidity(void)
{
    unsigned long raw = ((unsigned long)aht_buf[1] << 12) | ((unsigned long)aht_buf[2] << 4) | (aht_buf[3] >> 4);
    return (raw * 1000 + 0x80000) >> 20;
}`,Ae=`/* 发一个以 0.1 为单位的数：253 发成 "25.3"，-56 发成 "-5.6" */
void send_tenths(int v)
{
    if (v < 0) {
        send_byte('-');
        v = -v;
    }
    send_number(v / 10);            /* 整数部分 */
    send_byte('.');
    send_byte('0' + v % 10);        /* 小数点后一位 */
}`,k=`/* 4 位 → 8 位：每一位重复两次。比如 0101 → 0011 0011，字形竖着就放大了一倍 */
unsigned char stretch(unsigned char n)
{
    unsigned char i, r = 0;
    for (i = 0; i < 4; i++)
        if (n & (1 << i))
            r |= 3 << (i * 2);      /* 第 i 位是 1：结果的第 2i、2i+1 两位都置 1 */
    return r;
}

/* 在第 page、page+1 两页显示一个放大一倍的字符（12×16）：
   字形每列 8 个点，上 4 个点放大成上面一页，下 4 个点放大成下面一页；每列再写两遍，横着也放大一倍 */
void oled_big_char(unsigned char page, unsigned char col, char c)
{
    unsigned char i, half, b;
    for (half = 0; half < 2; half++) {
        oled_pos(page + half, col);
        oled_data_begin();
        for (i = 0; i < 6; i++) {
            b = font6x8[c - ' '][i];
            b = stretch(half ? b >> 4 : b & 0x0F);  /* 上半页取低 4 位（上面 4 个点），下半页取高 4 位 */
            oled_send(b);
            oled_send(b);
        }
        i2c_stop();
    }
}

/* 用大号字显示 0~65535：右对齐占 5 位，前面不够的位显示空格 */
void oled_big_number(unsigned char page, unsigned char col, unsigned int n)
{
    char buf[5];
    signed char i;
    for (i = 4; i >= 0; i--) {              /* 从个位开始往前填 */
        if (n != 0 || i == 4)
            buf[i] = '0' + n % 10;          /* n 等于 0 时个位也要显示 "0" */
        else
            buf[i] = ' ';
        n /= 10;
    }
    for (i = 0; i < 5; i++)
        oled_big_char(page, col + i * 12, buf[i]);
}`,je=`/*
 * 【实验】OLED 显示字符和数字
 * 【现象】OLED 第一行显示 Hello, mculab!，中间用大号字显示一个数，每 0.5 秒加一；最下面一行显示 SSD1306 128x64
 * 【接线】0.96 寸 OLED（I2C，4 针）：SCL 接 P2.1，SDA 接 P2.0，VCC 接 VCC，GND 接 GND。
 *        模块背面自带上拉电阻，不用另接
 * 【原理】OLED 每个像素自己发光，不用背光。屏幕 128 列 × 64 行，控制芯片 SSD1306 里有一块 1KB 的显存：
 *        64 行分成 8 页（page），每页 8 行；每页 128 列，每列一个字节，这个字节竖着管 8 个像素，
 *        最低位在最上面。往显存里写一个字节，屏上就有一小竖条 8 个点跟着变。
 *        所以显示一个 6×8 的字符，就是在某一页连续写 6 个字节，这 6 个字节就是这个字的"字模"。
 *        单片机通过 I2C 和它说话：先发地址 0x78，再发一个控制字节——0x00 表示后面是指令，0x40 表示后面是显示数据。
 *        初始化里最容易漏的是 8DH, 14H（打开电荷泵）：不开的话屏幕一直是黑的。
 * 【试着改改】
 *   1. 改 oled_string 里的文字，或者换个位置：oled_string(4, 0, "Hi") 显示在第 4 页最左边。
 *   2. 把 oled_init 里的 0xA6 改成 0xA7，变成黑字白底（反色）。
 *   3. 把 0xA1、0xC8 改成 0xA0、0xC0，画面左右、上下都反过来——有的模块装反了就这样调。
 *   4. 把对比度 0xCF 改成 0x10，屏幕变暗。
 */
#include <reg52.h>      /* 52 单片机的寄存器定义 */
#include <intrins.h>    /* _nop_() 在这个头文件里 */

${t}

${l}

${w}

${E}

${k}

void main(void)
{
    unsigned int count = 0;
    oled_init();
    oled_string(0, 22, "Hello, mculab!");       /* 14 个字符 × 6 列 = 84 列，从第 22 列开始正好居中 */
    oled_string(2, 4, "count:");
    oled_string(7, 22, "SSD1306 128x64");
    while (1) {
        oled_big_number(3, 34, count);          /* 第 3、4 页显示大号数字：5 位 × 12 列 = 60 列，从第 34 列开始居中 */
        count++;
        delay_ms(500);
    }
}
`,Me={id:`oled-text`,title:`OLED 显示字符和数字`,group:`display`,description:`0.96 寸 OLED（SSD1306）的 SCL、SDA 接 P2.1、P2.0。用 6×8 字库显示英文和数字，再把字形放大一倍显示一个不断加一的大号数字。`,create:e=>{let t=C();return s({parts:[o(a),...t.parts],wires:t.wires,files:{"main.c":je}},e)}},A=`#include <reg52.h>      /* 52 单片机的寄存器定义 */
#include <intrins.h>    /* _nop_() 在这个头文件里 */
`,Ne=`${A}
void main(void)
{
    while (1);
}
`,Pe=`sbit LAMP = P3^7;       /* 台灯：输出 0 亮 */

unsigned char level = 3;    /* 亮度档位 0~10：0 灭，10 最亮 */
unsigned char tick = 0;     /* PWM 一个周期分 10 份，现在走到第几份（0~9） */

/* 定时器 0 中断：每 1 毫秒一次。一个周期 10 份（10 毫秒，每秒 100 个周期，眼睛看不出闪），前 level 份亮、剩下的灭。
   中断里只做比较和加一，很快就做完，不耽误主程序读传感器、刷屏 */
void timer0_isr(void) interrupt 1
{
    TH0 = 0xFC;             /* 重装初值：65536 - 922 = 0xFC66，数 922 下约 1 毫秒 */
    TL0 = 0x66;
    if (tick < level)
        LAMP = 0;
    else
        LAMP = 1;
    if (++tick >= 10)
        tick = 0;
}

void timer0_init(void)
{
    TMOD &= 0xF0;           /* 低 4 位管定时器 0：先清零 */
    TMOD |= 0x01;           /* 方式 1：16 位定时器 */
    TH0 = 0xFC;
    TL0 = 0x66;
    ET0 = 1;                /* 允许定时器 0 中断 */
    EA = 1;                 /* 打开中断总开关 */
    TR0 = 1;                /* 启动定时器 0 */
}`,Fe=`${A}
${Pe}

void main(void)
{
    timer0_init();          /* 亮灭全在中断里完成 */
    while (1);
}
`,Ie=`${A}
${`${Pe}

${x}

${S}

${t}

${l}

${O}`}

void main(void)
{
    unsigned int lux;
    unsigned char n = 0;    /* 主循环转了几圈：每圈 10 毫秒 */
    uart_init();            /* 串口用定时器 1，PWM 用定时器 0，互不相干 */
    timer0_init();
    bh1750_init();
    while (1) {
        if (++n >= 50) {    /* 每 50 圈（约半秒）读一次光照 */
            n = 0;
            lux = bh1750_read();
            send_string("光照 = ");
            send_number(lux);
            send_string(" lx\\r\\n");
        }
        delay_ms(10);       /* 主循环每圈停 10 毫秒：以后按键也在这个循环里读，10 毫秒查一次足够快 */
    }
}
`,Le=`/* 亮度档位的门槛（lx）：光照比几个门槛低，就是几档。越暗档位越高、灯越亮 */
unsigned int code levels[10] = { 1000, 400, 200, 100, 50, 25, 12, 6, 3, 1 };

/* 光照 lux 对应的档位 */
unsigned char level_of(unsigned int lux)
{
    unsigned char i, n = 0;
    for (i = 0; i < 10; i++)
        if (lux < levels[i])
            n++;
    return n;
}

/* 按光照调档位，带"回差"：要变亮，光照多算 10% 也还是暗；要变暗，光照少算 10% 也还是亮，才改。
   光照正好在门槛附近抖动时，档位不会来回跳，灯就不会一闪一闪 */
void auto_level(unsigned int lux)
{
    unsigned char brighter = level_of(lux + lux / 10);
    unsigned char dimmer = level_of(lux - lux / 10);
    if (brighter > level)
        level = brighter;
    else if (dimmer < level)
        level = dimmer;
}`,j=Ie.replace(O,()=>`${O}\n\n${Le}`).replace(`            send_string(" lx\\r\\n");`,`            auto_level(lux);
            send_string(" lx，亮度 ");
            send_number(level);
            send_string(" 档\\r\\n");`),Re=`/* 在第 6 页画 10 格的亮度条：前 level 格涂满 */
void show_level(void)
{
    unsigned char i, x;
    oled_pos(6, 4);
    oled_data_begin();
    for (i = 0; i < 10; i++) {          /* 10 格，每格 12 列：10 列画格子、2 列空着当间隔 */
        for (x = 0; x < 10; x++) {
            if (i < level || x == 0 || x == 9)
                oled_send(0x7E);        /* 已到的格涂满；没到的格只画两边 */
            else
                oled_send(0x42);        /* 0100 0010：上下两条边 */
        }
        oled_send(0x00);
        oled_send(0x00);
    }
    i2c_stop();
}

/* 光照用大号字显示在第 2、3 页 */
void show_lux(unsigned int lux)
{
    oled_big_number(2, 34, lux);
}`,M=j.replace(O,()=>`${O}\n\n${w}\n\n${E}\n\n${k}\n\n${Re}`).replace(`    bh1750_init();
`,`    bh1750_init();
    oled_init();
    oled_string(0, 4, "Light (lx)");
    oled_string(0, 92, "  AUTO");    /* 右上角显示模式 */
    oled_string(5, 4, "Level");
`).replace(`            auto_level(lux);
`,`            auto_level(lux);
            show_lux(lux);
            show_level();
`),N=M.replace(`${A}
`,`${A}
sbit K_MODE = P3^2;     /* 模式键：自动 ↔ 手动 */
sbit K_ADD = P3^3;      /* 加一键：手动时亮度加一档，10 档以后回到 0 */
bit manual = 0;         /* 0 = 自动（按光照调），1 = 手动（按键调） */
`).replace(`            auto_level(lux);
            show_lux(lux);`,`            if (!manual)
                auto_level(lux);        /* 手动的时候不跟着光照变 */
            show_lux(lux);`).replace(`        delay_ms(10);       /* 主循环每圈停 10 毫秒`,`        if (K_MODE == 0) {          /* 模式键：消抖，切换自动 / 手动，等松手 */
            delay_ms(10);
            if (K_MODE == 0) {
                manual = !manual;
                oled_string(0, 92, manual ? "MANUAL" : "  AUTO");
                while (K_MODE == 0);
            }
        }
        if (K_ADD == 0 && manual) { /* 手动时的加一键 */
            delay_ms(10);
            if (K_ADD == 0) {
                if (++level > 10)
                    level = 0;
                show_level();
                while (K_ADD == 0);
            }
        }
        delay_ms(10);       /* 主循环每圈停 10 毫秒`),P={light:{x:40,y:300},lamp:{x:640,y:250},mode:{x:760,y:i(`P3.2`,a)[1]-13},add:{x:760,y:290},usb:{x:a.x+220,y:130}},ze=`/*
 * 【实验】光控台灯（综合项目）
 * 【现象】环境越暗台灯越亮：室内（300 lx）台灯亮 2 档，5 lx 时亮 8 档。光照按剧本"日落再日出"变化
 *        （40 秒一轮，800 lx 慢慢降到 3 lx 再升回来），台灯跟着一档档变亮再变暗。
 *        OLED 上用大号字显示光照，下面的亮度条显示现在是几档，右上角显示 AUTO（自动）。
 *        按 P3.2 的键切换到手动（右上角变成 MANUAL），这时按 P3.3 的键一档一档调亮度，不再跟着光照变
 * 【接线】BH1750 和 OLED 挂在同一对 I2C 线上：SCL 都接 P2.1，SDA 都接 P2.0，VCC 接 VCC，GND 接 GND；
 *        台灯：VCC → 1kΩ 电阻 → LED → P3.7（低电平亮）；模式键接 P3.2 和 GND，加一键接 P3.3 和 GND；
 *        USB 转串口模块：模块 RXD 接 P3.1（TXD），模块 TXD 接 P3.0（RXD），GND 接 GND
 * 【原理】这是"分步教程"里一步步搭出来的完整程序。台灯的亮度用 PWM 调：定时器 0 每 1 毫秒中断一次，
 *        10 毫秒一个周期分 10 份，前 level 份亮，level 是 0~10 档。主循环每 10 毫秒转一圈：查按键；
 *        每 50 圈（约半秒）读一次光照，按门槛表换成档位。门槛表是按"每档暗一倍左右"排的，和人眼的感觉差不多。
 *        "回差"：光照正好在门槛附近抖动时，档位不能来回跳，所以要变亮得光照多算 10% 也还是暗，要变暗得少算 10% 也还是亮。
 * 【试着改改】
 *   1. 改门槛表 levels，比如让台灯在室内也亮 3 档。
 *   2. 把回差的 lux / 10 改成 lux / 4，在「环境」页把光照改成"固定"，再在门槛附近拖滑块，看看档位是不是更"稳"。
 *   3. 手动模式下长按加一键连续调（参考"电子时钟"的长按连加）。
 */
${N}`,Be={mode:`script`,points:[[0,800],[6,200],[12,50],[18,10],[22,3],[26,3],[30,10],[34,50],[37,200],[40,800]],loop:!0},Ve={id:`light-lamp`,title:`光控台灯`,group:`project`,description:`BH1750 测光，越暗台灯（PWM 调光，10 档）越亮，档位切换带回差；OLED 显示光照和亮度条；P3.2 切换自动/手动，手动时 P3.3 调档。`,create:t=>{let n=a,r=C(),i=b(n,40),{light:c,lamp:l,mode:u,add:d}=P;return s({parts:[o(n),...r.parts,e(`light`,`bh1750`,c.x,c.y,{env:{lux:Be}}),e(`lamp`,`led`,l.x,l.y,{color:`yellow`}),e(`r_lamp`,`resistor`,l.x+8,l.y+7,{ohms:1e3},90),e(`mode`,`button`,u.x,u.y),e(`add`,`button`,d.x,d.y),...i.parts],wires:[...r.wires,g(`light:SCL`,`mcu:P2.1`,`orange`,{lane:360,drop:-10}),g(`light:SDA`,`mcu:P2.0`,`green`,{lane:370,drop:-4}),_(`light:VCC`,24),v(`light:GND`,32),g(`r_lamp:2`,`lamp:A`,`orange`,`straight`),g(`lamp:C`,`mcu:P3.7`,`green`,`vh`),g(`r_lamp:1`,`mcu:VCC`,`red`,{row:16}),g(`mcu:P3.2`,`mode:1`,`blue`,`straight`),g(`mcu:P3.3`,`add:1`,`blue`,{lane:u.x-30}),g(`mode:2`,`add:2`,`black`,{lane:u.x-15}),g(`mcu:GND`,`add:2`,`black`,{lane:u.x-15,drop:-42}),...i.wires],files:{"main.c":ze}},t)}},He=[[`单`,[0,0,0,248,90,94,92,248,248,92,94,90,248,0,0,0,0,4,12,5,5,5,5,63,63,5,5,5,5,12,12,0]],[`片`,[0,0,0,0,222,254,32,32,32,62,62,32,32,32,0,0,0,0,32,48,31,3,1,1,1,1,1,63,0,0,0,0]],[`机`,[0,16,16,240,254,208,144,0,252,4,4,4,252,0,0,0,0,6,3,1,63,32,49,28,7,0,0,0,63,32,56,0]],[`实`,[0,0,28,76,132,164,36,71,132,252,4,4,12,28,0,0,0,2,98,34,50,19,26,14,7,11,10,18,50,34,2,0]],[`验`,[0,4,244,132,244,252,224,112,88,78,78,88,112,96,64,0,0,4,5,36,36,63,32,34,44,35,38,60,47,33,0,0]],[`室`,[0,0,28,44,172,172,110,46,44,44,236,172,44,60,0,0,0,0,32,45,37,37,37,63,63,37,37,37,37,32,0,0]]],Ue=[`.......##.......`,`......#..#......`,`......#..#.###..`,`......#..#......`,`......#..#.##...`,`......#..#......`,`......####.###..`,`......####......`,`......####.##...`,`......####......`,`.....######.....`,`....########....`,`....########....`,`....########....`,`.....######.....`,`.......##.......`],We=[`.....######.....`,`...##......##...`,`..#..........#..`,`.#............#.`,`.#...##..##...#.`,`#....##..##....#`,`#..............#`,`#..............#`,`#..#........#..#`,`#...#......#...#`,`.#...######...#.`,`.#............#.`,`..#..........#..`,`...##......##...`,`.....######.....`,`................`],Ge=[`................`,`..####....####..`,`.######..######.`,`################`,`################`,`################`,`.##############.`,`..############..`,`...##########...`,`....########....`,`.....######.....`,`......####......`,`.......##.......`,`................`,`................`,`................`];function F(e,t,n){return`/* ${t}：
${n.map(e=>`   ${e}`).join(`
`)} */
unsigned char code ${e}[32] = {
${D(De(n))}
};`}var Ke=`/* 在第 page、page+1 两页、第 col 列画一个 16×16 的字或图标：先写上半页 16 个字节，再写下半页 16 个字节 */
void oled_16x16(unsigned char page, unsigned char col, unsigned char *bmp)
{
    unsigned char half, i;
    for (half = 0; half < 2; half++) {
        oled_pos(page + half, col);
        oled_data_begin();
        for (i = 0; i < 16; i++)
            oled_send(bmp[half * 16 + i]);
        i2c_stop();
    }
}`,qe=`/*
 * 【实验】OLED 显示汉字和图标
 * 【现象】OLED 上面一行显示"单片机实验室"，下面显示温度计、笑脸两个图标，右边一颗心一闪一闪
 * 【接线】0.96 寸 OLED（I2C，4 针）：SCL 接 P2.1，SDA 接 P2.0，VCC 接 VCC，GND 接 GND
 * 【原理】单片机里没有汉字库，要显示的每个汉字都得先变成点阵（"取模"），存成数组。
 *        16×16 的字一共 256 个点，每 8 个点一个字节，正好 32 字节。取模方式要和显示的方式对上：
 *        OLED 的显存每个字节竖着管 8 个点，所以用"列行式"——先取上半截（第 0~7 行）的 16 列，
 *        每列一个字节、低位在上；再取下半截（第 8~15 行）的 16 列。画的时候也是先写上面一页，再写下面一页。
 *        图标也一样，只是点阵是自己画的。数组前面加 code，放在程序存储器里，不占内存。
 *        「工具 → 字模生成」可以把任何汉字、图片变成这样的数组。
 * 【试着改改】
 *   1. 用「工具 → 字模生成」做一个你自己名字的字模，替换 hanzi 里的某一个字。
 *   2. 把心跳的 delay_ms(500) 改成 delay_ms(150)，心跳得更快。
 *   3. 在 heart 数组注释里的图上改几个点，自己算出对应的字节改进数组，看看图标变成什么样。
 */
#include <reg52.h>      /* 52 单片机的寄存器定义 */
#include <intrins.h>    /* _nop_() 在这个头文件里 */

${t}

${l}

${w}

/* 16×16 汉字（列行式，每字 32 字节），用「工具 → 字模生成」做的，字体：黑体。
   不同电脑上的字体不一样，自己生成的笔画可能和这里略有不同 */
unsigned char code hanzi[6][32] = {
${He.map(([e,t],n)=>`    {   /* ${e} */\n${D(t,`        `)}\n    }${n<He.length-1?`,`:``}`).join(`
`)}
};

${F(`thermo`,`温度计`,Ue)}

${F(`smile`,`笑脸`,We)}

${F(`heart`,`爱心`,Ge)}

${Ke}

/* 把第 page、page+1 两页、第 col 列开始的 16×16 擦黑 */
void oled_erase16(unsigned char page, unsigned char col)
{
    unsigned char half, i;
    for (half = 0; half < 2; half++) {
        oled_pos(page + half, col);
        oled_data_begin();
        for (i = 0; i < 16; i++)
            oled_send(0x00);
        i2c_stop();
    }
}

void main(void)
{
    unsigned char i;
    bit show = 1;                               /* 这一次要不要画心 */
    oled_init();
    for (i = 0; i < 6; i++)
        oled_16x16(0, 16 + i * 16, hanzi[i]);   /* 第 0、1 页：6 个字 × 16 列 = 96 列，从第 16 列开始正好居中 */
    oled_16x16(4, 24, thermo);                  /* 第 4、5 页画图标 */
    oled_16x16(4, 56, smile);
    while (1) {
        if (show)
            oled_16x16(4, 88, heart);
        else
            oled_erase16(4, 88);
        show = !show;                           /* 画一次、擦一次，心就一闪一闪 */
        delay_ms(500);
    }
}
`,Je={id:`oled-chinese`,title:`OLED 显示汉字和图标`,group:`display`,description:`OLED 用 16×16 点阵显示"单片机实验室"，再画温度计、笑脸和一闪一闪的爱心。讲清楚汉字取模的"列行式"。`,create:e=>{let t=C();return s({parts:[o(a),...t.parts],wires:t.wires,files:{"main.c":qe}},e)}},Ye=[[`温`,[0,32,34,102,76,0,124,84,84,84,84,84,252,0,0,0,0,32,56,14,34,62,63,33,63,33,63,63,35,63,32,0]],[`湿`,[0,32,98,68,4,124,126,210,210,82,210,210,126,126,0,0,0,32,60,7,32,35,46,40,63,32,63,40,46,35,32,0]],[`度`,[0,0,252,252,36,36,252,166,166,164,188,252,36,36,0,0,0,32,63,39,32,35,51,23,27,27,31,55,32,32,32,0]],[`计`,[0,96,98,230,204,8,96,96,96,96,254,96,96,96,96,0,0,0,0,63,31,24,12,0,0,0,127,0,0,0,0,0]]],Xe=[`.......##.......`,`.......##.......`,`......####......`,`......####......`,`.....######.....`,`....########....`,`....########....`,`...##########...`,`...##########...`,`..##.########...`,`..##.#########..`,`..##..########..`,`...##.#######...`,`....##.#####....`,`.....######.....`,`................`],I=`#include <reg52.h>      /* 52 单片机的寄存器定义 */
#include <intrins.h>    /* _nop_() 在这个头文件里 */
`,Ze=`${I}
void main(void)
{
    while (1);
}
`,Qe=`${I}
${t}

${l}

${w}

${E}

void main(void)
{
    oled_init();
    oled_string(0, 0, "Hello");
    while (1);
}
`,$e=`/* 标题"温湿度计"：「工具 → 字模生成」做的 16×16 字模（黑体，OLED 列行式） */
unsigned char code title[4][32] = {
${Ye.map(([e,t],n)=>`    {   /* ${e} */\n${D(t,`        `)}\n    }${n<Ye.length-1?`,`:``}`).join(`
`)}
};

${F(`thermo`,`温度计图标`,Ue)}

${F(`drop`,`水滴图标`,Xe)}

${Ke}

${k}

/* 在第 page、page+1 页用大号字显示以 0.1 为单位的数（253 显示成 25.3），右对齐占 5 个字（60 列） */
void show_tenths(unsigned char page, unsigned char col, int v)
{
    char buf[5];
    unsigned char i, neg = 0;
    if (v < 0) {
        neg = 1;
        v = -v;
    }
    buf[4] = '0' + v % 10;                      /* 小数点后一位 */
    buf[3] = '.';
    buf[2] = '0' + v / 10 % 10;                 /* 个位 */
    buf[1] = v >= 100 ? '0' + v / 100 % 10 : ' ';   /* 十位：不到 10 就空着 */
    buf[0] = v >= 1000 ? '0' + v / 1000 : ' ';      /* 百位：只有湿度 100.0% 用得到 */
    if (neg)
        buf[v >= 100 ? 0 : 1] = '-';            /* 负号放在最前面那个数字的前面 */
    for (i = 0; i < 5; i++)
        oled_big_char(page, col + i * 12, buf[i]);
}

/* 还没读到数（或者读失败）时显示 " --.-" */
void show_dashes(unsigned char page, unsigned char col)
{
    oled_big_char(page, col, ' ');
    oled_big_char(page, col + 12, '-');
    oled_big_char(page, col + 24, '-');
    oled_big_char(page, col + 36, '.');
    oled_big_char(page, col + 48, '-');
}

/* 画界面里不变的部分：标题、图标、单位 */
void draw_ui(void)
{
    unsigned char i;
    for (i = 0; i < 4; i++)
        oled_16x16(0, 32 + i * 16, title[i]);   /* 第 0、1 页正中：4 个字 × 16 列 = 64 列 */
    oled_16x16(3, 4, thermo);                   /* 第 3、4 页：温度计，后面是温度和单位 C */
    oled_big_char(3, 96, 'C');
    oled_16x16(6, 4, drop);                     /* 第 6、7 页：水滴，后面是湿度和 % */
    oled_big_char(6, 96, '%');
}`,et=`${I}
${t}

${l}

${w}

${E}

${$e}

void main(void)
{
    oled_init();
    draw_ui();
    show_dashes(3, 36);                         /* 温度：从第 36 列开始 5 个大字，正好排到单位前面 */
    show_dashes(6, 36);                         /* 湿度 */
    while (1);
}
`,tt=`${I}
${`${x}

${S}

${Ae}

${t}

${l}

${ke}

${w}

${E}

${$e}`}

void main(void)
{
    int t;
    unsigned int h;
    uart_init();
    oled_init();
    draw_ui();
    show_dashes(3, 36);
    show_dashes(6, 36);
    while (1) {
        if (aht20_measure()) {                  /* 测一次：触发、等 80ms、读 7 个字节、校验 */
            t = aht20_temperature();            /* 0.1℃ 为单位 */
            h = aht20_humidity();               /* 0.1% 为单位 */
            send_string("温度 ");
            send_tenths(t);
            send_string("℃，湿度 ");
            send_tenths(h);
            send_string("%\\r\\n");
        } else {
            send_string("读取失败\\r\\n");
        }
        delay_ms(900);                          /* 加上测量的 100 毫秒，差不多每秒一次 */
    }
}
`,L=tt.replace(`            send_string("温度 ");`,`            show_tenths(3, 36, t);              /* 显示到 OLED 上：只重画数字，标题、图标不用每次画 */
            show_tenths(6, 36, h);
            send_string("温度 ");`),nt=L.replace(`#include <intrins.h>    /* _nop_() 在这个头文件里 */
`,`#include <intrins.h>    /* _nop_() 在这个头文件里 */

sfr WDT_CONTR = 0xE1;   /* STC89 的看门狗控制寄存器：reg52.h 里没有，自己声明 */
sbit ALARM = P3^7;      /* 报警灯：输出 0 亮 */
#define HOT 300         /* 报警温度：30.0℃（0.1℃ 为单位） */
`).replace(`    show_dashes(6, 36);
    while (1) {`,`    show_dashes(6, 36);
    WDT_CONTR = 0x35;                           /* 启动看门狗：PS = 5，约 2.3 秒数满就复位单片机 */
    while (1) {
        WDT_CONTR = 0x35;                       /* 喂狗：每圈清零一次。程序哪里卡死了，2.3 秒后自动重启 */`).replace(`            show_tenths(6, 36, h);
`,`            show_tenths(6, 36, h);
            if (t > HOT)
                ALARM = 0;                      /* 太热了：报警灯亮 */
            else
                ALARM = 1;
`).replace(`        } else {
            send_string("读取失败\\r\\n");`,`        } else {
            show_dashes(3, 36);                 /* 读不到：显示 --.-，而不是一直停在旧的数上 */
            show_dashes(6, 36);
            ALARM = 1;
            send_string("读取失败\\r\\n");`),rt={aht:{x:40,y:300},led:{x:640,y:250},usb:{x:a.x+220,y:130}},it=`/*
 * 【实验】OLED 温湿度计（综合项目）
 * 【现象】OLED 上面是"温湿度计"四个字，下面左边是温度计、水滴两个图标，右边用大号字显示温度和湿度，每秒刷新一次；
 *        串口终端里也每秒打印一行。环境设成了周期变化：温度一分钟一个来回（18~32℃），超过 30℃ 时红色报警灯亮，
 *        降下来就灭
 * 【接线】OLED 和 AHT20 挂在同一对 I2C 线上：两个的 SCL 都接 P2.1，SDA 都接 P2.0，VCC 接 VCC，GND 接 GND
 *        （两个模块上都有上拉电阻，不用另接）；
 *        报警灯：VCC → 1kΩ 电阻 → LED → P3.7（低电平亮）；
 *        USB 转串口模块：模块 RXD 接 P3.1（TXD），模块 TXD 接 P3.0（RXD），GND 接 GND
 * 【原理】这是"分步教程"里一步步搭出来的完整程序。OLED（地址 0x3C）和 AHT20（地址 0x38）挂在同一对线上，
 *        单片机发地址时只有地址对上的那个芯片应答，所以两根线就能接好几个 I2C 器件。
 *        界面里不变的部分（标题、图标、单位）开机画一次，之后每秒只重画两个数——软件模拟的 I2C 刷满一屏要零点几秒，只画变了的地方。
 *        温湿度都用 0.1 为单位的整数（253 就是 25.3℃），51 算小数太慢。
 *        看门狗：主循环每圈喂一次，程序万一卡在哪里，2.3 秒后自动复位重启；传感器读不到（没应答、CRC 不对）时显示 --.-，而不是停在旧数上。
 * 【试着改改】
 *   1. 把 HOT 改成 280，28℃ 就报警。
 *   2. 用「工具 → 字模生成」给湿度换一个图标，替换 drop 数组。
 *   3. 把 AHT20 的 SDA 线删掉，看看屏上是不是变成 --.-；再接回去，又能读到。
 */
${nt}`,at={id:`oled-thermo`,title:`OLED 温湿度计`,group:`project`,description:`OLED 和 AHT20 挂在同一对 I2C 线上：OLED 显示标题、图标和大号温湿度，每秒刷新；超过 30℃ 报警灯亮；看门狗防卡死，读不到显示 --.-，串口同时打印。`,create:t=>{let n=a,i=C(),c=b(n,40),{aht:l,led:u}=rt;return s({parts:[o(n),...i.parts,e(`aht`,`aht20`,l.x,l.y,{env:{temperature:{mode:`cycle`,amp:7,period:60},humidity:r.humidity}}),e(`alarm`,`led`,u.x,u.y,{color:`red`}),e(`r_alarm`,`resistor`,u.x+8,u.y+7,{ohms:1e3},90),...c.parts],wires:[...i.wires,g(`aht:SCL`,`mcu:P2.1`,`orange`,{lane:360,drop:-10}),g(`aht:SDA`,`mcu:P2.0`,`green`,{lane:370,drop:-4}),_(`aht:VCC`,24),v(`aht:GND`,32),g(`r_alarm:2`,`alarm:A`,`orange`,`straight`),g(`alarm:C`,`mcu:P3.7`,`green`,`vh`),g(`r_alarm:1`,`mcu:VCC`,`red`,{row:16}),...c.wires],files:{"main.c":it}},t)}},R={x:400,y:380},ot=R.y+60,z=e=>{let[t,n]=e.slice(1).split(`.`).map(Number);return ot+((t===0||t===1?0:8)+n)*9.6},st={x:R.x+150,y:R.y+14},ct={x:R.x+169.2,y:R.y+14},B=R.y-18,V=R.y-10,H=(e,t,n,r,i={},a=0)=>({id:e,type:t,x:n,y:r,rotate:a,props:i}),U=(e,t,n,r)=>({from:e,to:t,color:n,route:r}),lt=(e,t={row:B})=>U(e,`mcu:VCC`,`red`,t),W=(e,t={row:V})=>U(e,`mcu:GND`,`black`,t),ut=()=>H(`mcu`,`stc89c52-min`,R.x,R.y,{chip:`STC89C52`,clockHz:11059200,p0Pullup:!0});function dt(e=40){return[H(`lcd`,`lcd1602`,e,R.y-160)]}function ft(){return[lt(`lcd:VDD`),W(`lcd:VSS`),lt(`lcd:A`),W(`lcd:K`),U(`lcd:RS`,`mcu:P2.6`,`orange`),U(`lcd:RW`,`mcu:P2.5`,`orange`),U(`lcd:E`,`mcu:P2.7`,`orange`),...Array.from({length:8},(e,t)=>U(`lcd:D${t}`,`mcu:P0.${t}`,`green`))]}var pt=`LCD1602：数据线 D0~D7 接 P0.0~P0.7，RS 接 P2.6、RW 接 P2.5、E 接 P2.7，
 *        VSS、K 接 GND，VDD、A 接 VCC（A、K 是背光）`;function mt(){return[H(`keypad`,`keypad4x4`,R.x+260,R.y-300)]}function ht(){return[...[1,2,3,4].map(e=>U(`keypad:R${e}`,`mcu:P1.${e-1}`,`blue`)),...[1,2,3,4].map(e=>U(`keypad:C${e}`,`mcu:P1.${e+3}`,`green`))]}var gt=`4×4 矩阵键盘：行 R1~R4 接 P1.0~P1.3，列 C1~C4 接 P1.4~P1.7`,_t=`/* ================ 4×4 矩阵键盘驱动 ================ */
/* 16 个键排成 4 行 4 列，第 r 行和第 c 列交叉的地方是一个键，按下时这一行和这一列接通。
   行 R1~R4 接 P1.0~P1.3，列 C1~C4 接 P1.4~P1.7。
   扫描方法：一次只把一行拉低，其余行和 4 根列线都是高电平（P1 内部有上拉）；
   这时如果某根列线读到 0，说明这一行、这一列交叉处的键被按住了。 */

/* 扫描一次：返回按下的键号 0~15（第 r 行第 c 列是 r * 4 + c），没有键按下返回 0xFF */
unsigned char key_scan(void)
{
    unsigned char r, c, cols;
    for (r = 0; r < 4; r++) {
        P1 = ~(0x01 << r);          /* 0x01 << r 只有第 r 位是 1，~ 取反后只有它是 0：只拉低第 r 行 */
        cols = P1 >> 4;             /* 读 P1，右移 4 位：高 4 位（4 根列线）挪到低 4 位 */
        for (c = 0; c < 4; c++)
            if ((cols & (0x01 << c)) == 0)  /* 第 c 根列线是 0：这个键按下了 */
                return r * 4 + c;
    }
    return 0xFF;
}

/* 等用户按下一个键再松开，返回键号；读到按下后等 10ms 再确认一次，躲开按键抖动 */
unsigned char key_get(void)
{
    unsigned char k;
    while (1) {                             /* while (1) 是"永远循环"，直到 return 才出来 */
        k = key_scan();
        if (k != 0xFF) {                    /* 有键按下（也可能只是抖动） */
            delay_ms(10);                   /* 等 10 毫秒，抖动过去 */
            if (key_scan() == k) {          /* 还是同一个键：确认真的按下了 */
                while (key_scan() != 0xFF); /* 一直等到松手，这样按一次只算一次 */
                return k;
            }
        }
    }
}`,vt={x:R.x-280,y:R.y-80},yt=[[`D1`,`P2.0`,-36],[`A`,`P0.0`,-30],[`F`,`P0.5`,-24],[`D2`,`P2.1`,-18],[`D3`,`P2.2`,-12],[`B`,`P0.1`,-6],[`E`,`P0.4`,42],[`D`,`P0.3`,36],[`DP`,`P0.7`,30],[`C`,`P0.2`,24],[`G`,`P0.6`,18],[`D4`,`P2.3`,12]],bt=[`P0.0`,`P0.1`,`P0.2`,`P0.3`,`P0.4`,`P0.5`,`P0.6`,`P0.7`,`P2.0`,`P2.1`,`P2.2`,`P2.3`];function xt(){return[H(`disp`,`seg7x4`,vt.x,vt.y,{common:`cathode`,color:`red`})]}function St(){return yt.map(([e,t,n])=>{let r=R.x-5-bt.indexOf(t)*5;return U(`disp:${e}`,`mcu:${t}`,e.startsWith(`D`)&&e!==`D`&&e!==`DP`?`blue`:`green`,{lane:r,drop:n})})}var Ct=`四位共阴数码管：段 A~G、DP 接 P0.0~P0.7，位选 D1~D4 接 P2.0~P2.3`,G=`#include <reg52.h>      /* 52 单片机的寄存器定义 */
`,K=`/* 共阴段码表 0~9：段输出 1 才亮，第 0 位是 A 段 …… 第 7 位是小数点 DP */
unsigned char code table[10] = { 0x3F, 0x06, 0x5B, 0x4F, 0x66, 0x6D, 0x7D, 0x07, 0x7F, 0x6F };
unsigned char disp[4];          /* 四位要显示的段码：扫描的时候直接送到 P0 */`,wt=`${G}
void main(void)
{
    while (1);
}
`,Tt=`${G}
${K}

${t}

void main(void)
{
    unsigned char pos;
    disp[0] = table[1];
    disp[1] = table[2];
    disp[2] = table[3];
    disp[3] = table[4];
    while (1) {
        for (pos = 0; pos < 4; pos++) {     /* 依次点亮第 1~4 位 */
            P0 = 0x00;                      /* 先把段全灭（消隐），免得上一位的段码串过来 */
            P2 = ~(0x01 << pos);            /* 只让第 pos 位的位选是 0：选中这一位 */
            P0 = disp[pos];                 /* 送这一位的段码 */
            delay_ms(2);                    /* 亮 2 毫秒再换下一位 */
        }
    }
}
`,q=`unsigned char pos = 0;          /* 下一次中断扫第几位 */`,J=`    TH0 = 0xF8;                 /* 重装初值：65536 - 1843 = 0xF8CD，数 1843 下约 2 毫秒 */
    TL0 = 0xCD;`,Y=`    P0 = 0x00;                  /* 先消隐 */
    P2 = ~(0x01 << pos);        /* 选中第 pos 位 */
    P0 = disp[pos];             /* 送段码 */
    if (++pos >= 4)             /* 四位轮完一遍，从头再来 */
        pos = 0;`,X=`void timer0_init(void)
{
    TMOD &= 0xF0;               /* 低 4 位管定时器 0：先清零 */
    TMOD |= 0x01;               /* 方式 1：16 位定时器 */
${J}
    ET0 = 1;                    /* 允许定时器 0 中断 */
    EA = 1;                     /* 打开中断总开关 */
    TR0 = 1;                    /* 启动定时器 0 */
}`,Et=`${G}
${K}
${q}

${t}

/* 定时器 0 中断：每 2 毫秒一次，每次点亮一位，4 次轮完一遍（8 毫秒），眼睛看起来四位一直亮着 */
void timer0_isr(void) interrupt 1
{
${J}
${Y}
}

${X}

void main(void)
{
    disp[0] = table[1];
    disp[1] = table[2];
    disp[2] = table[3];
    disp[3] = table[4];
    timer0_init();
    while (1);                  /* 扫描全在中断里，主程序空出来了，以后可以做别的事 */
}
`,Z=`unsigned char hour = 12, minute = 0, second = 0;   /* 现在的时间 */
unsigned int ticks = 0;         /* 这一秒里中断了几次：2 毫秒一次，数到 500 就是 1 秒 */`,Q=`    if (++ticks >= 500) {       /* 满 1 秒 */
        ticks = 0;
        if (++second >= 60) {   /* 满 60 秒进一分 */
            second = 0;
            if (++minute >= 60) {
                minute = 0;
                if (++hour >= 24)
                    hour = 0;
            }
        }
    }`,Dt=`${G}
${K}
${q}
${Z}

${t}

/* 定时器 0 中断：每 2 毫秒一次，扫一位数码管，顺便数时间 */
void timer0_isr(void) interrupt 1
{
${J}
${Y}
${Q}
}

${X}

/* 把 a、b 两个两位数（比如分、秒）换成四位的段码；第 2 位的小数点当冒号，每秒前半秒亮 */
void show(unsigned char a, unsigned char b)
{
    disp[0] = table[a / 10];    /* 十位 */
    disp[1] = table[a % 10];    /* 个位 */
    if (ticks < 250)
        disp[1] |= 0x80;        /* 小数点 DP 是最高位：| 0x80 把它点亮 */
    disp[2] = table[b / 10];
    disp[3] = table[b % 10];
}

void main(void)
{
    timer0_init();
    while (1)
        show(minute, second);   /* 主程序一直把时间换成段码；扫描和计时都在中断里 */
}
`,Ot=`sbit K_SET = P3^2;      /* 选择键：走时 → 调时 → 调分 → 走时 */
sbit K_ADD = P3^3;      /* 加一键：调时、调分的时候加一，按住不放连续加 */`,kt=`unsigned char mode = 0;         /* 0 = 走时，1 = 调时，2 = 调分 */`,At=`/* 显示时:分。调时间的时候，正在调的两位每 0.25 秒闪一下 */
void show(void)
{
    unsigned char flash = (ticks % 250) < 125;     /* 每秒里有两段 0.25 秒是 1 */
    disp[0] = table[hour / 10];
    disp[1] = table[hour % 10];
    if (ticks < 250)
        disp[1] |= 0x80;        /* 冒号：每秒前半秒亮 */
    disp[2] = table[minute / 10];
    disp[3] = table[minute % 10];
    if (mode == 1 && flash) {   /* 调时：时的两位灭一下 */
        disp[0] = 0x00;
        disp[1] = 0x00;
    }
    if (mode == 2 && flash) {   /* 调分：分的两位灭一下 */
        disp[2] = 0x00;
        disp[3] = 0x00;
    }
}

/* 加一：调时的时候时加一，调分的时候分加一（秒清零，方便对时） */
void add_one(void)
{
    if (mode == 1) {
        if (++hour >= 24)
            hour = 0;
    } else if (mode == 2) {
        if (++minute >= 60)
            minute = 0;
        second = 0;
    }
}`,jt=e=>`void main(void)
{
    unsigned char hold;         /* 加一键按住了多久（10 毫秒一格） */
    timer0_init();
    while (1) {
        show();
        if (K_SET == 0) {                       /* 选择键按下了 */
            delay_ms(10);                       /* 等 10 毫秒躲过抖动 */
            if (K_SET == 0) {
                if (++mode > 2)                 /* 走时 → 调时 → 调分 → 走时 */
                    mode = 0;${e?`
                beep = 25;                      /* 嘀 50 毫秒 */`:``}
                while (K_SET == 0)              /* 等松手，松手前一直刷新显示 */
                    show();
            }
        }
        if (K_ADD == 0 && mode != 0) {          /* 调时间的时候按了加一键 */
            delay_ms(10);
            if (K_ADD == 0) {
                add_one();${e?`
                beep = 25;`:``}
                hold = 0;
                while (K_ADD == 0) {            /* 按住不放 */
                    show();
                    delay_ms(10);
                    if (++hold >= 60) {         /* 按住超过 0.6 秒：每 0.1 秒自动加一 */
                        hold = 50;
                        add_one();
                    }
                }
            }
        }
    }
}`,Mt=`${G}
${Ot}

${K}
${q}
${Z}
${kt}

${t}

/* 定时器 0 中断：每 2 毫秒一次，扫一位数码管，顺便数时间 */
void timer0_isr(void) interrupt 1
{
${J}
${Y}
${Q}
}

${X}

${At}

${jt(!1)}
`,Nt=`${G}
${Ot}
sbit BEEP = P1^5;       /* 蜂鸣器：一端接 VCC，一端接 P1.5，输出 0 响 */

${K}
${q}
${Z}
${kt}
unsigned int beep = 0;          /* 蜂鸣器还要响几次中断（2 毫秒一次）；0 就不响 */

${t}

/* 定时器 0 中断：每 2 毫秒一次，扫一位数码管，数时间，管蜂鸣器 */
void timer0_isr(void) interrupt 1
{
${J}
${Y}
${Q.replace(`            if (++minute >= 60) {
                minute = 0;
                if (++hour >= 24)
                    hour = 0;
            }`,`            if (++minute >= 60) {
                minute = 0;
                if (++hour >= 24)
                    hour = 0;
                beep = 250;     /* 整点：响 0.5 秒 */
            }`)}
    if (beep) {                 /* 还要响：输出 0，倒数一次 */
        BEEP = 0;
        beep--;
    } else {
        BEEP = 1;
    }
}

${X}

${At}

${jt(!0)}
`,$={set:{x:680,y:z(`P3.2`)-13},add:{x:680,y:z(`P3.3`)+44},beep:{x:700,y:380}},Pt=`/*
 * 【实验】电子时钟（综合项目）
 * 【现象】四位数码管显示 12:00，中间的冒号（第 2 位的小数点）每秒闪一下，时间一分一分地走。
 *        按 P3.2 的键进入"调时"（时的两位一闪一闪），再按进入"调分"，再按回到走时；
 *        调时、调分的时候按 P3.3 的键加一，按住不放连续加。每次按键蜂鸣器"嘀"一声，整点响半秒
 * 【接线】${Ct}；
 *        选择键：一只脚接 P3.2，另一只接 GND；加一键：一只脚接 P3.3，另一只接 GND；
 *        有源蜂鸣器：正极接 VCC，负极接 P1.5（真电路里蜂鸣器电流大，要经三极管或 ULN2003 驱动，见"抢答器"）
 * 【原理】这是"分步教程"里一步步搭出来的完整程序。定时器 0 每 2 毫秒中断一次，在中断里做三件事：
 *        扫一位数码管（4 次轮完一遍）、数时间（500 次是 1 秒）、管蜂鸣器（还要响几次）。
 *        主程序只管把时间换成段码、读按键：按键要消抖（等 10 毫秒再读一次），等松手才算按完一次；
 *        加一键按住超过 0.6 秒以后，每 0.1 秒自动加一。
 * 【试着改改】
 *   1. 把开机时间 hour = 12 改成你现在的时间。
 *   2. 把整点的 beep = 250 改成 500，整点响 1 秒。
 *   3. 断电以后时间就没了，从 12:00 重新开始。真正的时钟用 DS1302 这样的时钟芯片自己走时（见"DS1302 时钟"示例），
 *      想想怎么把两个程序合起来。
 */
${Nt}`,Ft={id:`seg-clock`,title:`电子时钟`,group:`project`,description:`四位数码管显示时:分，定时器 2 毫秒中断里扫描、数时间、管蜂鸣器；P3.2 选择调时/调分，P3.3 加一（按住连加），整点蜂鸣。`,create:e=>s({parts:[ut(),...xt(),H(`set`,`button`,$.set.x,$.set.y),H(`add`,`button`,$.add.x,$.add.y),H(`beep`,`buzzer`,$.beep.x,$.beep.y,{kind:`active`})],wires:[...St(),U(`mcu:P3.2`,`set:1`,`blue`,`straight`),U(`mcu:P3.3`,`add:1`,`blue`,{lane:$.set.x-40}),U(`mcu:GND`,`set:2`,`black`,{lane:$.set.x-20,drop:V-ct.y}),U(`set:2`,`add:2`,`black`,{lane:$.set.x-20}),U(`beep:-`,`mcu:P1.5`,`orange`,`vh`),U(`mcu:VCC`,`beep:+`,`red`,{lane:$.beep.x+90,drop:B-st.y})],files:{"main.c":Pt}},e)};export{Ee as $,at as A,u as At,j as B,ht as C,p as Ct,z as D,ie as Dt,H as E,se as Et,Ze as F,Ne as G,Fe as H,et as I,O as J,Me as K,Je as L,Qe as M,tt as N,U as O,te as Ot,L as P,w as Q,P as R,mt as S,ue as St,ft as T,re as Tt,Ie as U,N as V,M as W,Oe as X,Ae as Y,E as Z,pt as _,fe as _t,Mt as a,Te as at,ut as b,de as bt,wt as c,_ as ct,St as d,g as dt,C as et,R as f,h as ft,gt as g,ge as gt,_t as h,ve as ht,Et as i,we as it,nt as j,ee as jt,rt as k,ne as kt,Ct as l,b as lt,V as m,be as mt,Ft as n,x as nt,Tt as o,y as ot,ct as p,ye as pt,ke as q,Nt as r,Se as rt,Dt as s,v as st,$ as t,S as tt,xt as u,xe as ut,st as v,pe as vt,dt as w,f as wt,W as x,le as xt,B as y,he as yt,Ve as z};