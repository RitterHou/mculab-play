var e=`/* ================ LCD1602 驱动 ================ */
#define LCD_DATA P0     /* #define 起个别名：后面写 LCD_DATA 就等于写 P0（接 LCD 的 D0~D7） */
sbit LCD_RS = P2^6;     /* sbit 给某一个引脚起名字：LCD_RS 就是 P2 口的第 6 脚。RS：0 = 写指令，1 = 写字符 */
sbit LCD_RW = P2^5;     /* RW：0 = 写，1 = 读；这里只写 */
sbit LCD_EN = P2^7;     /* E：先拉高再拉低，LCD 在下降沿把数据收进去 */

/* 写一个字节给 LCD：rs = 0 写的是指令，rs = 1 写的是要显示的字符。bit 是 51 特有的类型，只有 0 和 1 */
void lcd_write(bit rs, unsigned char v)
{
    LCD_RS = rs;
    LCD_RW = 0;
    LCD_DATA = v;       /* 数据放到 D0~D7 */
    LCD_EN = 1;         /* E 拉高 */
    delay_ms(1);
    LCD_EN = 0;         /* E 拉低：下降沿，LCD 收下数据 */
    delay_ms(2);        /* 等 LCD 处理完；清屏最慢要 1.52ms，统一等 2ms */
}

/* 上电初始化 LCD */
void lcd_init(void)
{
    delay_ms(15);           /* 上电后 LCD 自己要准备一下，至少等 15ms */
    lcd_write(0, 0x38);     /* 功能设置：8 位数据线、两行显示、5×7 点阵 */
    lcd_write(0, 0x0C);     /* 开显示、不显示光标 */
    lcd_write(0, 0x06);     /* 每写一个字符，光标自动右移一格 */
    lcd_write(0, 0x01);     /* 清屏 */
}

/* 从地址 addr 开始显示字符串 s。第一行地址 0x00~0x0F，第二行 0x40~0x4F；
   char *s 是"指向字符串的指针"，*s 取当前字符，s++ 指向下一个 */
void lcd_print(unsigned char addr, char *s)
{
    lcd_write(0, 0x80 | addr);  /* 指令 0x80 加上地址：把光标移到 addr */
    while (*s)                  /* 字符串以 0 结尾，读到 0 就停 */
        lcd_write(1, *s++);     /* 写一个字符，然后指针后移 */
}`,t=`/* ================ DS18B20 驱动（单总线） ================ */
/* 约 n × 10 微秒的延时：单总线的时序要用微秒级的等待，delay_ms 太粗了 */
void delay_10us(unsigned char n)
{
    while (n--) {                       /* 每圈 5 个 _nop_ 加上循环本身，大约 10 微秒 */
        _nop_(); _nop_(); _nop_(); _nop_(); _nop_();
    }
}

/* 复位：返回 1 表示 DS18B20 回答了"我在" */
unsigned char ds18b20_reset(void)
{
    unsigned char ok;
    DQ = 0;                 /* 拉低总线 480 微秒以上：复位脉冲 */
    delay_10us(50);
    DQ = 1;                 /* 松开总线，上拉电阻把它拉回高电平 */
    delay_10us(7);          /* 等约 70 微秒：DS18B20 在松开后 15~60 微秒开始拉低总线回答 */
    ok = !DQ;               /* 读到 0 就是它在回答；! 取反：0 变 1 */
    delay_10us(40);         /* 等它回答完 */
    return ok;
}

/* 写一个字节，从最低位开始 */
void ds18b20_write(unsigned char dat)
{
    unsigned char i;
    for (i = 0; i < 8; i++) {
        DQ = 0;                 /* 拉低，开始一个"写时隙" */
        _nop_(); _nop_();       /* 保持 2 微秒 */
        DQ = dat & 0x01;        /* 写 1：马上松开；写 0：继续拉低 */
        delay_10us(6);          /* 整个时隙要 60 微秒以上，DS18B20 在中间看总线是高是低 */
        DQ = 1;                 /* 松开总线，这一位写完 */
        dat >>= 1;              /* 下一位挪到最低位 */
    }
}

/* 读一个字节，先读到的是最低位 */
unsigned char ds18b20_read(void)
{
    unsigned char i, dat = 0;
    for (i = 0; i < 8; i++) {
        dat >>= 1;              /* 已读到的位往右挪，空出最高位 */
        DQ = 0;                 /* 拉低一下，开始一个"读时隙" */
        _nop_();
        DQ = 1;                 /* 马上松开：DS18B20 要送 0 就会继续拉住总线 */
        _nop_(); _nop_();
        if (DQ)                 /* 15 微秒之内去看总线：高电平就是 1 */
            dat |= 0x80;
        delay_10us(5);          /* 等这个时隙结束 */
    }
    return dat;
}

/* 让 DS18B20 开始测温（要 750 毫秒才能测完，这期间可以去干别的） */
void ds18b20_convert(void)
{
    ds18b20_reset();
    ds18b20_write(0xCC);        /* 跳过 ROM：总线上只有一个 DS18B20，不用"点名" */
    ds18b20_write(0x44);        /* 开始温度转换 */
}

/* 读出上一次测到的温度，单位 1/16℃（比如 23.5℃ 读到 376） */
int ds18b20_temp(void)
{
    unsigned char lo, hi;
    ds18b20_reset();
    ds18b20_write(0xCC);        /* 跳过 ROM */
    ds18b20_write(0xBE);        /* 读暂存器：前两个字节就是温度 */
    lo = ds18b20_read();        /* 先读低 8 位 */
    hi = ds18b20_read();        /* 再读高 8 位 */
    return (int)(((unsigned int)hi << 8) | lo);  /* 拼成 16 位；负温度是补码，按 int 看正好是负数 */
}`,n=`/* ---------- I2C 总线：SDA（数据）、SCL（时钟）两根线，用普通引脚"模拟"出时序 ---------- */
sbit SDA = P2^0;        /* sbit 给某一个引脚起名字：SDA 就是 P2 口的第 0 脚，数据线 */
sbit SCL = P2^1;        /* 时钟线：由单片机（主机）产生 */

/* 每一步之间稍等几微秒，给芯片反应时间（I2C 要求 SCL 的高、低电平都要保持一小会儿） */
void i2c_delay(void)
{
    _nop_();            /* _nop_() 什么也不做，只花 1 个机器周期（约 1.085 微秒） */
    _nop_();
}

/* 起始信号：SCL 为高时，SDA 从高变低。挂在总线上的芯片看到它，就知道"主机要开始说话了" */
void i2c_start(void)
{
    SDA = 1;
    SCL = 1;
    i2c_delay();
    SDA = 0;            /* SCL 高、SDA 下降 = 起始 */
    i2c_delay();
    SCL = 0;            /* 拉低 SCL：之后才能改 SDA 放数据 */
}

/* 停止信号：SCL 为高时，SDA 从低变高，表示这次通信结束 */
void i2c_stop(void)
{
    SDA = 0;
    SCL = 1;
    i2c_delay();
    SDA = 1;            /* SCL 高、SDA 上升 = 停止 */
    i2c_delay();
}

/* 发一个字节，高位在前。返回 1 表示对方"应答"了（收到了），返回 0 表示没人理。
   bit 是 51 特有的类型，只有 0 和 1 两个值 */
bit i2c_send(unsigned char dat)
{
    unsigned char i;
    bit ack;
    for (i = 0; i < 8; i++) {
        if (dat & 0x80)     /* 0x80 = 1000 0000：看最高位是 1 还是 0 */
            SDA = 1;
        else
            SDA = 0;        /* 只能在 SCL 为低时改 SDA，否则会被当成起始或停止 */
        dat <<= 1;          /* 左移一位，下一位变成最高位 */
        SCL = 1;            /* SCL 拉高：对方在这时读走 SDA 上的这一位 */
        i2c_delay();
        SCL = 0;
        i2c_delay();
    }
    SDA = 1;                /* 第 9 个时钟：主机松开 SDA，轮到对方说话 */
    SCL = 1;
    i2c_delay();
    ack = !SDA;             /* 对方把 SDA 拉成 0 就是"应答"；没拉（读到 1）就是"不应答" */
    SCL = 0;
    i2c_delay();
    return ack;
}

/* 收一个字节，高位在前。more = 1：收完回"应答"，表示还要下一个；more = 0：回"不应答"，表示读够了 */
unsigned char i2c_recv(unsigned char more)
{
    unsigned char i, dat = 0;
    SDA = 1;                /* 松开 SDA（51 的引脚写 1 才能当输入用），由对方来送数据 */
    for (i = 0; i < 8; i++) {
        SCL = 1;            /* SCL 为高时 SDA 上的数据是稳定的，可以读 */
        i2c_delay();
        dat <<= 1;          /* 先收到的是最高位，每收一位都把已收到的往左挪 */
        if (SDA)
            dat |= 0x01;    /* 读到 1 就把最低位置 1 */
        SCL = 0;            /* SCL 拉低，对方准备下一位 */
        i2c_delay();
    }
    if (more)
        SDA = 0;            /* 第 9 个时钟：主机回话，SDA = 0 是应答 */
    else
        SDA = 1;            /* SDA = 1 是不应答 */
    SCL = 1;
    i2c_delay();
    SCL = 0;
    i2c_delay();
    SDA = 1;                /* 松开 SDA */
    return dat;
}`,r=`/* 从 addr 开始显示 n，占 width 格（最多 5），右对齐，前面补空格 */
void lcd_number(unsigned char addr, unsigned int n, unsigned char width)
{
    char s[6];
    unsigned char i = width;
    s[width] = 0;
    do {
        s[--i] = '0' + n % 10;
        n /= 10;
    } while (n && i);
    while (i)
        s[--i] = ' ';
    lcd_print(addr, s);
}`;export{r as i,n,e as r,t};