import{n as e,o as t}from"./part-meta-DZCC22S8.js";import{c as n,f as r,g as i,h as a,i as o,m as s,r as c,w as l}from"./template-D5wLESjO.js";var u=[`STC89C52`,`STC15`,`STC12`,`STC8`,`Arduino Uno`],d=new Set([`单片机`,`基础元件`]),f=e=>!d.has(t(e).category),p={query:``,mcu:``,part:``,group:``};function m(e){if(e===`ATmega328P`)return`Arduino Uno`;if(/^(STC|IAP)15/.test(e))return`STC15`;if(/^STC12/.test(e))return`STC12`;if(/^STC8[A-Z]/.test(e))return`STC8`;if(/^(STC|AT)89/.test(e))return`STC89C52`}function h(e,n){let r=n.parts.filter(e=>!l(e.type)).map(e=>t(e.type).label);return[e.title,e.description,...new Set(r)].join(` `).toLowerCase()}function g(t){let n=t.create(),r=[...new Set(n.parts.map(e=>e.type))].filter(f);return{example:t,keywords:h(t,n),mcu:m(e(n.parts).chip),parts:r}}function _(e,t,n){return t.query.trim().toLowerCase().split(/\s+/).filter(Boolean).every(t=>e.keywords.includes(t))&&(n===`mcu`||!t.mcu||e.mcu===t.mcu)&&(n===`part`||!t.part||e.parts.includes(t.part))&&(n===`group`||!t.group||e.example.group===t.group)}function v(e,t,n){let r=new Map([[``,0]]),i=e=>r.set(e,(r.get(e)??0)+1);for(let r of e)_(r,t,n)&&(i(``),n===`mcu`?r.mcu&&i(r.mcu):n===`group`?i(r.example.group):r.parts.forEach(i));return r}var y=`/*
 * 【实验】LCD1602 显示
 * 【现象】液晶第一行显示 mculab，第二行显示 Hello 51!
 * 【接线】数据线 D0~D7 接 P0.0~P0.7；RS 接 P2.6、RW 接 P2.5、E 接 P2.7；
 *        VSS、K 接 GND，VDD、A 接 VCC（A、K 是背光）
 * 【原理】LCD1602 里面有自己的控制芯片，单片机只要把"指令"或"字符"写给它。
 *        RS = 0 时写的是指令（清屏、设光标位置等），RS = 1 时写的是要显示的字符；
 *        RW = 0 表示写；数据放到 D0~D7 后，E 先拉高再拉低，LCD 就在 E 的下降沿把数据收进去。
 *        显示位置：第一行地址 0x00~0x0F，第二行 0x40~0x4F，写指令 0x80 | 地址 就把光标移过去。
 * 【试着改改】
 *   1. 改 lcd_print 里的文字（每行最多 16 个英文字符，不支持中文）。
 *   2. 把 0x00 改成 0x05，第一行的字往右挪 5 格。
 *   3. 把初始化里的 0x0C 改成 0x0F，会显示一个闪烁的光标。
 */
#include <reg52.h>

#define LCD_DATA P0     /* #define 起个别名：后面写 LCD_DATA 就等于写 P0 */
sbit RS = P2^6;         /* 0 = 写指令，1 = 写字符 */
sbit RW = P2^5;         /* 0 = 写，1 = 读；这里只写 */
sbit EN = P2^7;         /* 使能：拉高再拉低，LCD 收下数据 */

${o}

/* 写一个字节给 LCD：rs = 0 是指令，rs = 1 是字符。bit 是 51 特有的类型，只有 0 和 1 */
void lcd_write(bit rs, unsigned char v)
{
    RS = rs;
    RW = 0;
    LCD_DATA = v;       /* 数据放到 D0~D7 */
    EN = 1;             /* E 拉高 */
    delay_ms(1);
    EN = 0;             /* E 拉低：下降沿，LCD 收下数据 */
    delay_ms(2);        /* 等 LCD 处理完；清屏要 1.52ms，其他指令 37µs，统一等 2ms */
}

void lcd_init(void)
{
    delay_ms(15);           /* 上电后 LCD 自己要初始化，至少等 15ms */
    lcd_write(0, 0x38);     /* 功能设置：8 位数据线、两行显示、5×7 点阵 */
    lcd_write(0, 0x0C);     /* 开显示、不显示光标、光标不闪 */
    lcd_write(0, 0x06);     /* 每写一个字符，光标自动右移一格 */
    lcd_write(0, 0x01);     /* 清屏 */
}

/* 从地址 addr 开始显示字符串 s。char *s 是"指向字符串的指针"，*s 取当前字符，s++ 指向下一个 */
void lcd_print(unsigned char addr, char *s)
{
    lcd_write(0, 0x80 | addr);  /* 设置光标位置：指令 0x80 加上地址 */
    while (*s)                  /* 字符串以 0 结尾，读到 0 就停 */
        lcd_write(1, *s++);     /* 写一个字符，然后指针后移 */
}

void main(void)
{
    lcd_init();
    lcd_print(0x00, "mculab");      /* 第一行最左边 */
    lcd_print(0x40, "Hello 51!");   /* 第二行最左边 */
    while (1);                      /* 写完就不用管了，LCD 会一直显示 */
}
`,b={id:`lcd1602`,title:`LCD1602 显示`,group:`display`,description:`8 位接口：数据 D0~D7 接 P0，RS、RW、E 接 P2.6、P2.5、P2.7。第一行显示 mculab，第二行显示 Hello 51!`,create:()=>s([r(`lcd`,`lcd1602`,20,150)],[a(`lcd:VSS`,`mcu:GND`,`black`),a(`lcd:VDD`,`mcu:VCC`,`red`),a(`lcd:A`,`mcu:VCC`,`red`),a(`lcd:K`,`mcu:GND`,`black`),a(`lcd:RS`,`mcu:P2.6`,`orange`,n(`P2.6`,360)),a(`lcd:RW`,`mcu:P2.5`,`orange`,n(`P2.5`,356)),a(`lcd:E`,`mcu:P2.7`,`orange`,n(`P2.7`,364)),...Array.from({length:8},(e,t)=>a(`lcd:D${t}`,`mcu:P0.${t}`,`green`,n(`P0.${t}`,340-t*4)))],{"main.c":y},c)},x=`/* 普中风格学习板：8 位数码管从左到右显示 0~7 */
#include <reg52.h>

typedef unsigned int u16;
typedef unsigned char u8;

sbit LSA = P2^2;
sbit LSB = P2^3;
sbit LSC = P2^4;

u8 code smgduan[] = { 0x3f, 0x06, 0x5b, 0x4f, 0x66, 0x6d, 0x7d, 0x07,
                      0x7f, 0x6f, 0x77, 0x7c, 0x39, 0x5e, 0x79, 0x71 };

void delay(u16 i)
{
    while (i--);
}

/* 第 i 位（0 是最左边）：138 的地址是 7 - i */
void select(u8 i)
{
    u8 y = 7 - i;
    LSA = y & 1;
    LSB = (y >> 1) & 1;
    LSC = (y >> 2) & 1;
}

void main(void)
{
    u8 i;
    while (1) {
        for (i = 0; i < 8; i++) {
            select(i);
            P0 = smgduan[i];
            delay(100);
            P0 = 0x00;      /* 消隐 */
        }
    }
}
`,S=760,C=420,w=[`A`,`B`,`C`,`D`,`E`,`F`,`G`,`DP`],T=(e,t,n,r,i={},a=0)=>({id:e,type:t,x:n,y:r,rotate:a,props:i}),E=(e,t,n,r)=>({from:e,to:t,color:n,route:r}),D=(e,t={row:400})=>E(e,`mcu:VCC`,`red`,t),O=(e,t={row:408})=>E(e,`mcu:GND`,`black`,t);function k(e=!1){let t=[T(`mcu`,`stc89c52-min`,S,C,{chip:`STC89C52`,clockHz:11059200,p0Pullup:!0})],n=[];for(let e=0;e<8;e++){let r=100+e*36;t.push(T(`led${e+1}`,`led`,r,120,{color:`red`}),T(`rl${e+1}`,`resistor`,r+8,127,{ohms:1e3},90)),n.push(e===0?D(`rl1:1`,`hv`):E(`rl${e}:1`,`rl${e+1}:1`,`red`,`straight`),E(`rl${e+1}:2`,`led${e+1}:A`,`orange`,`straight`),E(`led${e+1}:C`,`mcu:P2.${e}`,`green`))}e&&t.push(T(`lcd`,`lcd1602`,420,230)),e&&n.push(E(`lcd:A`,`lcd:VDD`,`red`,`straight`),E(`lcd:K`,`lcd:VSS`,`black`,`straight`),D(`lcd:VDD`),O(`lcd:VSS`),E(`lcd:RS`,`mcu:P2.6`,`orange`),E(`lcd:RW`,`mcu:P2.5`,`orange`),E(`lcd:E`,`mcu:P2.7`,`orange`),...Array.from({length:8},(e,t)=>E(`lcd:D${t}`,`mcu:P0.${t}`,`blue`))),t.push(T(`u245`,`74hc245`,430,700),T(`u138`,`74hc138`,600,700),T(`disp1`,`seg7x4`,60,900,{common:`cathode`,color:`red`}),T(`disp2`,`seg7x4`,260,900,{common:`cathode`,color:`red`})),n.push(...Array.from({length:8},(e,t)=>E(`u245:A${t+1}`,`mcu:P0.${t}`,`blue`)),D(`u245:DIR`),O(`u245:OE`),D(`u245:VCC`),O(`u245:GND`),E(`u138:A0`,`mcu:P2.2`,`purple`),E(`u138:A1`,`mcu:P2.3`,`purple`),E(`u138:A2`,`mcu:P2.4`,`purple`),D(`u138:E3`),O(`u138:E1`),O(`u138:E2`),D(`u138:VCC`),O(`u138:GND`)),w.forEach((e,r)=>{t.push(T(`rs${r}`,`resistor`,120+r*30,800,{ohms:100},90)),n.push(E(`u245:B${r+1}`,`rs${r}:1`,`green`,`straight`),E(`rs${r}:2`,`disp1:${e}`,`green`,`straight`),E(`rs${r}:2`,`disp2:${e}`,`green`,`straight`))});for(let e=0;e<8;e++){let t=e<4?`disp1`:`disp2`;n.push(E(`u138:Y${7-e}`,`${t}:D${e%4+1}`,`purple`,`straight`))}t.push(T(`eeprom`,`at24c02`,640,900),T(`rsda`,`resistor`,620,860,{ohms:1e4}),T(`rscl`,`resistor`,620,880,{ohms:1e4})),n.push(E(`eeprom:SDA`,`mcu:P2.0`,`yellow`),E(`eeprom:SCL`,`mcu:P2.1`,`yellow`),E(`rsda:2`,`eeprom:SDA`,`yellow`,`straight`),E(`rscl:2`,`eeprom:SCL`,`yellow`,`straight`),D(`rsda:1`),D(`rscl:1`),...[`A0`,`A1`,`A2`,`WP`].map(e=>E(`eeprom:${e}`,`eeprom:GND`,`black`,`straight`)),D(`eeprom:VCC`),O(`eeprom:GND`)),t.push(T(`keypad`,`keypad4x4`,1180,240));for(let e=1;e<=4;e++)n.push(E(`keypad:R${e}`,`mcu:P1.${8-e}`,`blue`,{lane:1010+e*8,drop:14+e*6}));for(let e=1;e<=4;e++)n.push(E(`keypad:C${e}`,`mcu:P1.${4-e}`,`blue`,{lane:1050+e*8,drop:40+e*6}));[[`k1`,`P3.1`],[`k2`,`P3.0`],[`k3`,`P3.2`],[`k4`,`P3.3`]].forEach(([e,r],i)=>{t.push(T(e,`button`,1e3+i*76,700)),n.push(E(`${e}:1`,`mcu:${r}`,`blue`),O(`${e}:2`))}),t.push(T(`usb`,`usb-serial`,1e3,110,{baud:9600}),T(`rtx`,`resistor`,1112,119,{ohms:1e3})),n.push(E(`usb:TXD`,`rtx:1`,`orange`),E(`rtx:2`,`mcu:P3.0`,`orange`),E(`usb:RXD`,`mcu:P3.1`,`orange`),O(`usb:GND`)),t.push(T(`temp`,`ds18b20`,1020,800),T(`rdq`,`resistor`,1080,790,{ohms:1e4})),n.push(E(`temp:DQ`,`mcu:P3.7`,`yellow`),E(`rdq:2`,`temp:DQ`,`yellow`,`straight`),D(`rdq:1`),D(`temp:VCC`),O(`temp:GND`)),t.push(T(`rtc`,`ds1302`,1160,800)),n.push(E(`rtc:IO`,`mcu:P3.4`,`yellow`),E(`rtc:CE`,`mcu:P3.5`,`yellow`),E(`rtc:SCLK`,`mcu:P3.6`,`yellow`),D(`rtc:VCC`),O(`rtc:GND`)),t.push(T(`uln`,`uln2003`,1320,800),T(`beep`,`buzzer`,1460,800,{kind:`passive`})),n.push(E(`uln:IN5`,`mcu:P1.5`,`blue`),E(`uln:OUT5`,`beep:-`,`black`,`auto`),D(`beep:+`),D(`uln:COM`),O(`uln:GND`));let r=(e,t,n)=>E(e,t,n,`auto`);return t.push(T(`motor`,`stepper`,1580,790)),n.push(...[0,1,2,3].map(e=>r(`uln:IN${e+1}`,`mcu:P1.${e}`,`blue`)),...[`A`,`B`,`C`,`D`].map((e,t)=>r(`uln:OUT${t+1}`,`motor:${e}`,`orange`)),r(`motor:COM`,`uln:COM`,`red`)),t.push(T(`ir`,`ir-receiver`,960,215)),n.push(r(`ir:DAT`,`mcu:P3.2`,`orange`),r(`ir:VCC`,`mcu:VCC`,`red`),r(`ir:GND`,`mcu:GND`,`black`)),t.push(T(`adc`,`xpt2046`,1160,935,{ain0:2.5,ain1:2.5,ain2:2.5,ain3:0})),n.push(r(`adc:DIN`,`mcu:P3.4`,`yellow`),r(`adc:CS`,`mcu:P3.5`,`yellow`),r(`adc:DCLK`,`mcu:P3.6`,`yellow`),r(`adc:DOUT`,`mcu:P3.7`,`yellow`),r(`adc:VCC`,`mcu:VCC`,`red`),r(`adc:VREF`,`adc:VCC`,`red`),r(`adc:IOVDD`,`adc:VCC`,`red`),r(`adc:GND`,`mcu:GND`,`black`)),t.push(T(`u595`,`74hc595`,905,795),T(`matrix`,`led-matrix`,760,790,{color:`red`,resistors:!0})),n.push(...Array.from({length:8},(e,t)=>r(`u595:Q${`HGFEDCBA`[t]}`,`matrix:R${t+1}`,`green`)),...Array.from({length:8},(e,t)=>r(`matrix:C${t+1}`,`mcu:P0.${7-t}`,`blue`)),r(`u595:SER`,`mcu:P3.4`,`yellow`),r(`u595:RCLK`,`mcu:P3.5`,`yellow`),r(`u595:SRCLK`,`mcu:P3.6`,`yellow`),r(`u595:OE`,`mcu:GND`,`black`),r(`u595:SRCLR`,`mcu:VCC`,`red`),r(`u595:VCC`,`mcu:VCC`,`red`),r(`u595:GND`,`mcu:GND`,`black`)),{parts:t,wires:n,files:{"main.c":e?y:x}}}var A=`/* 蓝桥杯 CT107D：数码管显示 1~8，L1~L8 每 0.5 秒流水一次；T0 1ms 中断扫描数码管 */
#include <STC15F2K60S2.H>

unsigned char code seg[] = { 0xc0, 0xf9, 0xa4, 0xb0, 0x99, 0x92, 0x82, 0xf8, 0x80, 0x90, 0xbf, 0xff };
unsigned char buf[8] = { 1, 2, 3, 4, 5, 6, 7, 8 };
unsigned char pos, led;
unsigned int ms;

/* 选通 138 的 Yn 把 dat 打进对应的 573：4 LED、5 蜂鸣器/继电器、6 位选、7 段码 */
void latch(unsigned char n, unsigned char dat)
{
    P2 = (P2 & 0x1f) | (n << 5);
    P0 = dat;
    P2 &= 0x1f;
}

void Timer0Init(void)       /* 1 毫秒@12.000MHz */
{
    AUXR |= 0x80;           /* 定时器时钟 1T 模式 */
    TMOD &= 0xF0;           /* 16 位自动重装 */
    TL0 = 0x20;
    TH0 = 0xD1;
    TF0 = 0;
    TR0 = 1;
}

void timer0(void) interrupt 1
{
    latch(7, 0xff);                     /* 消隐 */
    latch(6, 0x01 << pos);
    latch(7, seg[buf[pos]]);
    if (++pos == 8) pos = 0;

    if (++ms == 500) {
        ms = 0;
        latch(4, ~(0x01 << led));
        if (++led == 8) led = 0;
    }
}

void main(void)
{
    latch(4, 0xff);         /* 关 LED */
    latch(5, 0x00);         /* 关蜂鸣器、继电器 */
    Timer0Init();
    ET0 = 1;
    EA = 1;
    while (1);
}
`,j=`stc15f2k60s2-min`,M=760,N=420,P=[`A`,`B`,`C`,`D`,`E`,`F`,`G`,`DP`],F=[0,1,2,3].flatMap(e=>[0,1,2,3].map(t=>`S${4*t+7-e}`)),I=(e,t,n,r,i={},a=0)=>({id:e,type:t,x:n,y:r,rotate:a,props:i}),L=(e,t,n,r)=>({from:e,to:t,color:n,route:r}),R=(e,t={row:400})=>L(e,`mcu:VCC`,`red`,t),z=(e,t={row:408})=>L(e,`mcu:GND`,`black`,t),B=[{id:`u7`,x:-250,y:250,note:`Y7 段码`},{id:`u6`,x:-90,y:250,note:`Y6 位选`},{id:`u4`,x:200,y:250,note:`Y4 LED`},{id:`u5`,x:470,y:250,note:`Y5 蜂鸣器/继电器`}],V=[[4,1,`u4`],[5,2,`u5`],[6,3,`u6`],[7,4,`u7`]];function H(e=`matrix`){let t=[I(`mcu`,j,M,N,{clockHz:12e6})],n=[];t.push(I(`u02`,`74hc02`,610,130,{},270),I(`u138`,`74hc138`,790,130,{},270)),n.push(L(`u138:A0`,`mcu:P2.5`,`purple`,{lane:744,drop:30}),L(`u138:A1`,`mcu:P2.6`,`purple`,{lane:738,drop:36}),L(`u138:A2`,`mcu:P2.7`,`purple`,{lane:732,drop:42}),L(`u138:E1`,`mcu:GND`,`black`,{row:262}),L(`u138:E2`,`mcu:GND`,`black`,{row:262}),L(`u138:E3`,`mcu:VCC`,`red`,{row:256}),L(`u138:VCC`,`mcu:VCC`,`red`,{row:110}),L(`u138:GND`,`mcu:GND`,`black`,{row:262}),L(`u02:VCC`,`mcu:VCC`,`red`,{row:110}),L(`u02:GND`,`mcu:GND`,`black`,{row:262})),V.forEach(([e,t,r],i)=>{n.push(L(`u138:Y${e}`,`u02:${t}A`,`purple`,{row:t<=2?236+i*6:116-i*6}),L(`u02:${t}B`,`mcu:GND`,`black`,{row:t<=2?262:100}),L(`u02:${t}Y`,`${r}:LE`,`purple`,{row:200+i*6}))});for(let e of B)t.push(I(e.id,`74hc573`,e.x,e.y,{},270)),n.push(...Array.from({length:8},(t,n)=>L(`${e.id}:D${n}`,`mcu:P0.${n}`,`blue`)),z(`${e.id}:OE`),z(`${e.id}:GND`),R(`${e.id}:VCC`,{row:230}));for(let e=0;e<8;e++){let r=120+e*36;t.push(I(`led${e+1}`,`led`,r,60,{color:`red`}),I(`rl${e+1}`,`resistor`,r+8,67,{ohms:1e3},90)),n.push(e===0?R(`rl1:1`,`hv`):L(`rl${e}:1`,`rl${e+1}:1`,`red`,`straight`),L(`rl${e+1}:2`,`led${e+1}:A`,`orange`,`straight`),L(`led${e+1}:C`,`u4:Q${e}`,`green`,{row:170-e*6}))}t.push(I(`uln`,`uln2003`,480,130,{},270),I(`relay`,`relay`,430,-10),I(`beep`,`buzzer`,545,-10,{kind:`active`})),n.push(L(`u5:Q4`,`uln:IN5`,`green`),L(`u5:Q6`,`uln:IN7`,`green`),L(`uln:OUT5`,`relay:-`,`black`),L(`uln:OUT7`,`beep:-`,`black`),R(`relay:+`,{row:-24}),R(`beep:+`,{row:-24}),R(`uln:COM`,{row:-24}),z(`uln:GND`,{row:236})),t.push(I(`disp1`,`seg7x4`,-380,20,{common:`anode`,color:`red`}),I(`disp2`,`seg7x4`,-180,20,{common:`anode`,color:`red`})),P.forEach((e,r)=>{t.push(I(`rs${r}`,`resistor`,-330+r*24,160,{ohms:100},90)),n.push(L(`u7:Q${r}`,`rs${r}:2`,`green`,{row:230-r*4}),L(`rs${r}:1`,`disp1:${e}`,`green`,`straight`),L(`rs${r}:1`,`disp2:${e}`,`green`,`straight`))});for(let e=0;e<8;e++)n.push(L(`u6:Q${e}`,`${e<4?`disp1`:`disp2`}:D${e%4+1}`,`purple`,{row:140-e*4}));t.push(I(`eeprom`,`at24c02`,600,800),I(`adc`,`pcf8591`,420,800,{ain0:0,ain1:2.5,ain2:0,ain3:2.5}),I(`rscl`,`resistor`,560,740,{ohms:1e4}),I(`rsda`,`resistor`,560,760,{ohms:1e4})),n.push(L(`eeprom:SCL`,`mcu:P2.0`,`yellow`),L(`eeprom:SDA`,`mcu:P2.1`,`yellow`),L(`adc:SCL`,`eeprom:SCL`,`yellow`,{row:780}),L(`adc:SDA`,`eeprom:SDA`,`yellow`,{row:786}),L(`rscl:2`,`eeprom:SCL`,`yellow`),L(`rsda:2`,`eeprom:SDA`,`yellow`),R(`rscl:1`,`vh`),R(`rsda:1`,`vh`),...[`A0`,`A1`,`A2`,`WP`].map(e=>L(`eeprom:${e}`,`eeprom:GND`,`black`,`straight`)),R(`eeprom:VCC`),z(`eeprom:GND`),...[`A0`,`A1`,`A2`,`EXT`,`AGND`].map(e=>L(`adc:${e}`,`adc:VSS`,`black`,`straight`)),L(`adc:VREF`,`adc:VDD`,`red`,`straight`),R(`adc:VDD`),z(`adc:VSS`)),t.push(I(`rtc`,`ds1302`,800,800)),n.push(L(`rtc:SCLK`,`mcu:P1.7`,`yellow`,{lane:990,drop:0}),L(`rtc:CE`,`mcu:P1.3`,`yellow`,{lane:996,drop:0}),L(`rtc:IO`,`mcu:P2.3`,`yellow`,{lane:740,drop:0}),R(`rtc:VCC`),z(`rtc:GND`)),t.push(I(`temp`,`ds18b20`,1020,760),I(`rdq`,`resistor`,1080,740,{ohms:1e4})),n.push(L(`temp:DQ`,`mcu:P1.4`,`yellow`),L(`rdq:2`,`temp:DQ`,`yellow`,`straight`),R(`rdq:1`),R(`temp:VCC`),z(`temp:GND`)),t.push(I(`keypad`,`keypad4x4`,1200,240,{keys:F}));for(let e=1;e<=4;e++)n.push(L(`keypad:R${e}`,`mcu:P3.${e-1}`,`blue`,{lane:1010+e*8,drop:14+e*6}));return e===`matrix`?[`P4.4`,`P4.2`,`P3.5`,`P3.4`].forEach((e,t)=>n.push(L(`keypad:C${t+1}`,`mcu:${e}`,`blue`,{lane:1050+t*8,drop:40+t*6}))):n.push(z(`keypad:C1`)),t.push(I(`ne555`,`ne555`,1160,760,{freq:1e3})),n.push(R(`ne555:VCC`),z(`ne555:GND`)),e===`buttons`&&n.push(L(`ne555:OUT`,`mcu:P3.4`,`orange`,{lane:1100,drop:-20})),t.push(I(`usb`,`usb-serial`,1e3,90,{baud:9600}),I(`rtx`,`resistor`,1112,99,{ohms:1e3})),n.push(L(`usb:TXD`,`rtx:1`,`orange`),L(`rtx:2`,`mcu:P3.0`,`orange`),L(`usb:RXD`,`mcu:P3.1`,`orange`),z(`usb:GND`)),{parts:t,wires:n,files:{"main.c":A}}}var U=`#include <reg52.h>

void main(void)
{
    while (1) {
    }
}
`,W=`// Arduino Uno：板载的 L 灯（接在 D13 上）一秒闪一次
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);     // D13 设成输出
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);  // 亮
  delay(500);                       // 等 500 毫秒
  digitalWrite(LED_BUILTIN, LOW);   // 灭
  delay(500);
}
`,G=[{id:`blank`,title:`空白项目`,description:`只有一块 STC89C52 最小系统板，外设自己从元件栏拖出来接。`,spec:()=>({parts:[{id:`mcu`,type:`stc89c52-min`,x:40,y:60,rotate:0,props:{chip:`STC89C52`,clockHz:11059200,p0Pullup:!0}}],wires:[],files:{"main.c":U}})},{id:`arduino-uno`,title:`Arduino Uno（试用）`,description:`ATmega328P @16MHz，用 Arduino 的写法（setup、loop、digitalWrite、Serial……）写 .ino，在浏览器里编译。串口终端、I2C/SPI 模块、断点和条件断点、单步、看变量、寄存器和往回退都能用；还在试用。`,spec:()=>({parts:[{id:`uno`,type:`arduino-uno`,x:40,y:60,rotate:0,props:{}}],wires:[],files:{"main.ino":W}})},{id:`puzhong`,title:`普中风格 51 学习板`,description:`按普中 A2 / HC6800 系列教程的接法：P2 接 8 个 LED、P1 矩阵键盘、P3 独立按键、138+245 驱动 8 位数码管、DS18B20、DS1302、AT24C02、XPT2046 AD（AIN0~AIN3）、74HC595 + 8×8 点阵、红外接收头（P3.2）、ULN2003 驱动的蜂鸣器（P1.5）和步进电机（P1.0~P1.3）、串口。教程代码不用改就能跑；有的板型蜂鸣器在 P2.5，以自己板子的原理图为准。和真板子一样（595 的 OE 接地），点阵和 DS1302、XPT2046 共用 P3.4~P3.6，做时钟实验时点阵会跟着乱亮。`,spec:()=>k(!1)},{id:`puzhong-lcd`,title:`普中风格 51 学习板（插上 LCD1602）`,description:`同上，再插上 LCD1602（D0~D7 = P0，RS = P2.6，RW = P2.5，E = P2.7）。和真板子一样，LCD 和数码管共用 P0，做液晶实验时数码管会乱闪，做数码管实验请用不插 LCD 的版本。`,spec:()=>k(!0)},{id:`ct107d`,title:`蓝桥杯 CT107D（矩阵键盘）`,description:`IAP15F2K61S2 @12MHz，按比赛底层驱动的接法：138 的 Y4~Y7 经 74HC02 选通四片 573，P0 分别送 LED、蜂鸣器/继电器（ULN2003）、数码管位选、段码；矩阵键盘 S4~S19（J5 接 KBD，列用到 P4.4/P4.2）、DS18B20、DS1302、AT24C02、PCF8591、串口。NE555 和键盘第 4 列共用 P3.4，这里没接，测频率用独立按键版本。`,spec:()=>H(`matrix`)},{id:`ct107d-btn`,title:`蓝桥杯 CT107D（独立按键 + NE555）`,description:`同上，J5 接 BTN：S7~S4 = P3.0~P3.3 当独立按键用，NE555 输出接到 P3.4，可用 T0 计数测频率（频率在 NE555 上调）。`,spec:()=>H(`buttons`)}];function K(e,t,n){let r=e.spec();return r.parts.length===1?{version:1,parts:r.parts,wires:[],files:r.files,firmware:null}:i(r,t,!0,n)}export{p as a,f as c,u as i,_ as l,K as n,g as o,b as r,v as s,G as t,h as u};