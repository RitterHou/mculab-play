var e=`/* 把 dat 送到第 n 片 74HC573 锁存器：n = 4 是 L1~L8，5 是蜂鸣器和继电器，6 是数码管位选，7 是数码管段码。
   板上 4 片 573 的输入都接在 P0 上，靠 P2 的高 3 位（P2.7 P2.6 P2.5）选通哪一片：
   ① P2 高 3 位写 n，74HC138 译码器的 Yn 脚就输出低电平（138 把 3 位二进制"翻译"成 8 根线里的一根）；
   ② Yn 经 74HC02 或非门（另一个输入接 WR，IO 模式下 WR 接地）反相成高电平，送到第 n 片 573 的 LE；
   ③ LE 为高，573 "开门"，P0 上的数据直接出现在它的输出上；
   ④ P2 高 3 位清零，LE 变低，573 "关门"，把数据锁住，之后 P0 怎么变它都不变。
   这样 8 根 P0 就能分时管 4 × 8 = 32 路输出。 */
void latch(unsigned char n, unsigned char dat)
{
    P0 = dat;                       /* 先把数据放到 P0 上 */
    P2 = (P2 & 0x1F) | (n << 5);    /* 0x1F = 0001 1111：保留 P2 低 5 位；n << 5 把 n 挪到第 7~5 位，选通第 n 片 573 */
    P2 &= 0x1F;                     /* 高 3 位清零（选到没接东西的 Y0），573 关门锁住数据。
                                       不用等：138、02 只要十几纳秒就把选通信号送到 573，比一条指令快得多 */
}`,t=`/* 软件延时，约 ms 毫秒（12MHz）。while 里面那几行是 STC-ISP 软件的"软件延时计算器"生成的 1 毫秒延时。
   STC15 是 1T 单片机：一条指令大多只要 1~4 个时钟周期；89C52 是 12T 单片机：
   一个"机器周期"就要 12 个时钟，一条指令要 12~48 个时钟。同样的空循环，STC15 快 8~12 倍，
   所以 89C52 教程里的延时函数搬到 STC15 上会短很多，要按芯片和晶振重新算。 */
void Delay_ms(unsigned int ms)
{
    unsigned char i, j;
    while (ms--) {              /* 每转一圈延时 1 毫秒，ms 减到 0 就结束 */
        i = 12;
        j = 169;
        do {
            while (--j);        /* --j 先减一再判断：不为 0 就接着空转 */
        } while (--i);          /* 两层一共空转约 3000 次，每次 4 个时钟，约 12000 个时钟 = 1 毫秒 */
    }
}`,n=[{title:`点亮 LED`,lessons:[`led-on`,`led-blink`,`water-lamp`,`water-lamp-asm`,`led-pattern`,`traffic-light`,`rgb-colors`]},{title:`按键`,lessons:[`key-led`,`keys-4`,`dip-switch`,`key-long-press`]},{title:`中断与定时器`,lessons:[`int0-count`,`timer-blink`,`pwm-breath`,`rgb-fade`]},{title:`数码管`,lessons:[`seg-count`,`seg-hex`,`seg-scan`]},{title:`74HC 系列芯片`,lessons:[`hc595-led`,`hc595-seg`,`hc138-led`,`hc573-latch`,`matrix-heart`,`matrix-scroll`]},{title:`LCD 与矩阵键盘`,lessons:[`lcd1602`,`lcd-scroll`,`keypad-seg`,`keypad-lcd`]},{title:`声音与电机`,lessons:[`buzzer-alarm`,`buzzer-music`,`speaker-pwm`,`transistor-switch`,`relay`,`stepper`,`stepper-speed`,`servo-sweep`,`servo-keys`]},{title:`串口`,lessons:[`uart-echo`,`uart-led`,`uart-printf`]},{title:`无线通信`,lessons:[`bt-led`,`wifi-led`,`ir-send`]},{title:`中断进阶`,lessons:[`irq-priority`,`irq-shared`,`watchdog`,`timeout`]},{title:`传感器与芯片`,lessons:[`ds18b20-uart`,`ds1302-uart`,`at24c02-count`,`pcf8591-adc`,`pcf8591-dac`,`ne555-freq`,`dht11-uart`,`dht11-lcd`,`hcsr04-uart`,`sensor-filter`,`sonar-retry`,`ir-uart`,`ir-seg`]},{title:`OLED 与 I2C 传感器`,lessons:[`oled-text`,`oled-chinese`,`oled-curve`,`bh1750-uart`,`bh1750-leds`,`aht20-uart`,`aht20-dht11`]},{title:`老教材芯片`,lessons:[`dac0832-wave`,`adc0832-lcd`]},{title:`显示模块`,lessons:[`tm1637-clock`,`tm1638-keys`,`max7219-heart`,`lcd12864-chinese`,`st7735-colors`]},{title:`更多传感器`,lessons:[`pir-light`,`clap-light`,`touch-lamp`,`hall-count`,`gas-alarm`,`flame-alarm`,`encoder-count`,`joystick-lcd`,`ntc-thermo`,`thermocouple`,`scale`]},{title:`综合项目`,lessons:`seg-clock.oled-thermo.light-lamp.stopwatch.quiz-buzzer.password-lock.calculator.clock-lcd.thermometer.fan-control.fan-loop.thermostat.pid-temp.grow-light.auto-water.tank-level.low-battery.gravity.voltmeter.freq-meter.conveyor-count.motor-speed.pid-speed.hcsr04-radar.sonar-scan.auto-door.line-car.avoid-car.encoder-speed.logic-pwm.smart-traffic`.split(`.`)},{title:`系统程序`,lessons:[`uart-shell`,`data-logger`,`multitask`,`low-power`]},{title:`小游戏与音乐`,lessons:[`snake`,`tetris`,`music-box`,`keyboard`]},{title:`STC12 单片机（选学）`,lessons:[`stc12-adc`,`stc12-pwm`,`stc12-eeprom`]},{title:`STC8H 单片机（选学）`,lessons:[`stc8-io`,`stc8-uart`,`stc8-adc`,`stc8-pwm`]},{title:`开发板实验（选学）`,lessons:[`pz-led`,`pz-seg8`,`pz-keypad`,`pz-lcd`,`pz-ds18b20`,`pz-clock`,`lq-init`,`lq-seg`,`lq-keypad`,`lq-ne555`]},{title:`Arduino Uno（选学）`,lessons:[`arduino-blink`,`arduino-button`,`arduino-pot`,`arduino-fade`,`arduino-serial`,`arduino-lcd`,`arduino-oled`,`arduino-dht11`,`arduino-servo`]}],r=n.flatMap(e=>e.lessons);function i(e){return r.indexOf(e)+1}function a(e,t){let n=r.indexOf(e);return n<0?null:r[n+t]??null}export{t as a,a as i,r as n,e as o,i as r,n as t};