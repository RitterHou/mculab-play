import{i as e,n as t,t as n}from"./jsx-runtime-Cx0HxCDb.js";import{t as r}from"./part-meta-DZCC22S8.js";import{m as i,q as a}from"./sim-control-heHu1on9.js";import{a as o,c as s,f as c,m as l,n as u,p as d,s as f,u as p}from"./store-BfXgc25t.js";import{r as m}from"./i18n-DkINFNXl.js";import{r as ee}from"./types-DexORVjg.js";import{A as h,C as g,D as _,N as v,O as y,S as b,T as te,_ as x,b as S,d as C,f as w,i as T,l as E,m as D,n as O,r as k,s as A,t as ne,u as re,w as j,y as M}from"./template-D5wLESjO.js";import{r as ie}from"./build-Bm97g0Mz.js";import{a as N,i as P,n as ae,o as oe,r as F,s as se,t as ce}from"./checks-B1cFytsM.js";import{n as le}from"./views-cwGBMCZH.js";import{$ as ue,At as I,B as de,F as L,G as fe,H as pe,I as me,M as he,N as ge,P as R,R as _e,St as ve,Tt as ye,U as be,V as xe,W as Se,_t as Ce,a as we,c as Te,f as Ee,ft as De,gt as Oe,ht as ke,i as Ae,j as je,jt as Me,k as Ne,kt as Pe,o as Fe,pt as Ie,r as Le,s as Re,t as ze,wt as Be,yt as Ve}from"./seg-clock-B9OuRIyv.js";var z=e(t(),1);function He(e,t){let n=e.wires??[],r=P(t),i=n.filter(e=>!e.done(r,t));return{done:n.length-i.length,total:n.length,missing:[...new Set(i.flatMap(e=>e.pinsOf?.(t)??e.pins))]}}function Ue(e,t,n,r){let i=e.observe?.(t,n,r)??[];return i.every(e=>n.has(e))?n:new Set([...n,...i])}function We(e,t){if(!e.solve)return t;let n=e.solve(t);if(e.check&&!e.observe&&!e.check({project:n,compiled:!1,running:!1,seen:new Set}))throw new x(`现在的接线和教程里的不一样，没法自动完成这一步：先删掉接错的导线再试`);return n}var B=e=>ce(e.files[`main.c`]??``),V=(e,t)=>({...e,files:{...e.files,"main.c":t}}),H=e=>e.compiled&&e.running,Ge=.5;function U(e,t){return(t===void 0?void 0:e.parts[t])?.brightness??0}function Ke(e){return(t,n,r)=>U(t,F(r,e))>.5?[`on`]:[]}function qe(e){return(t,n,r)=>{let i=U(t,F(r,e));return i>.5?n.has(`off-after-on`)?[`on`,`on-after-off`]:[`on`]:i<.1&&n.has(`on`)?[`off-after-on`]:[]}}function Je(e,t){return RegExp(`\\b${t}\\s*=\\s*[!~]\\s*${t}\\b|\\b${t}\\s*\\^=\\s*1\\b`).test(e)}function Ye(e){let t=C(`P1.0`,`led1`,300,64);return D(t.parts,t.wires,{"main.c":e})}function Xe(e,t,n,r){return e&&e.x===t&&e.y===n?r:[]}var W=(e,t,n)=>({label:e,pins:[t,n],done:e=>e(t)===e(n)}),G=(e,t)=>new Set(t.map(e)).size===t.length;function K(e,t){let n=new Set(e.parts.map(e=>e.id));for(let[e,r]of t)for(let t of[e,r])if(!n.has(ee(t)?.partId??``))throw new x(`先完成前面的步骤，把要用的元件放好`);let r=e;for(let[e,n,i]of t){let t=P(r);t(e)!==t(n)&&(r=S(r,e,n,[],i))}return r}var Ze={1111110:0,"0110000":1,1101101:2,1111001:3,"0110011":4,1011011:5,1011111:6,111e4:7,1111111:8,1111011:9},Qe=(e,t=.3)=>e?Ze[e.slice(0,7).map(e=>+(e>t)).join(``)]:void 0,$e=(e,t=.1)=>!!e&&e.every(e=>e<=t);function q(e,t,n=3){for(let r=1;r<=n;r++)if(!e.has(`${t}#${r}`))return[`${t}#${r}`];return[]}var J=(e,t,n=3)=>e.has(`${t}#${n}`),Y=(e,t,n,r)=>N(e,t)[n]??r;function X(e,t,n,r,i,a){let o=e=>`${Y(e,t,n,r)}:${i}`;return{label:e,pins:[`${r}:${i}`,a],pinsOf:e=>[o(e),a],done:(e,t)=>e(o(t))===e(a)}}function Z(e,t,n,r={}){if(N(e,t).length>(r.index??0))return e;let i=M(e,t,n.x,n.y),a=i.project;for(let[e,t]of Object.entries(r.props??{}))a=v(a,i.id,e,t);for(let e=0;e<(r.rotate??0);e++)a=h(a,i.id);return a}function et(e,t,n){let[r,i]=[e(n),e(`mcu:GND`)];if(r===i)return{};let a=[`${t}:1`,`${t}:2`],o=a.find(t=>e(t)===r);return{toPort:o,toGnd:a.find(t=>t!==o&&e(t)===i)}}function tt(e,t,n,r){let i=e=>Y(e,`button`,t,n);return[{label:`${e}一只脚 → ${r.slice(4)}`,pins:[`${n}:1`,r],pinsOf:e=>[`${i(e)}:1`,r],done:(e,t)=>!!et(e,i(t),r).toPort},{label:`${e}另一只脚 → GND`,pins:[`${n}:2`,`mcu:GND`],pinsOf:e=>[`${i(e)}:2`,`mcu:GND`],done:(e,t)=>!!et(e,i(t),r).toGnd}]}function nt(e,t,n){let r=P(e),i=et(r,t,n),a=[`${t}:1`,`${t}:2`],o=i.toGnd??a.find(e=>r(e)===r(`mcu:GND`)),s=i.toPort??a.find(e=>e!==o),c=a.find(e=>e!==s);return K(e,[[s,n,`blue`],[c,`mcu:GND`,`black`]])}var rt=`#include <reg52.h>      /* 52 单片机的寄存器定义 */
`,it=`${rt}
void main(void)
{
    while (1);
}
`,at=`${rt}
${ye}

void main(void)
{
    hc595_send(0x7E);       /* 0111 1110：最高位、最低位是 0，两头的灯亮（写 0 亮） */
    while (1);
}
`,ot=`${rt}
${ye}

${T}

void main(void)
{
    unsigned char i;
    while (1) {
        for (i = 0; i < 8; i++) {           /* 从左到右 8 个灯轮一遍 */
            hc595_send(~(0x80 >> i));       /* 0x80 >> i 只有第 7-i 位是 1，取反后只有这一位是 0：只亮一个灯 */
            delay_ms(200);                  /* 亮 0.2 秒再换下一个 */
        }
    }
}
`,st=[`QH`,`QG`,`QF`,`QE`,`QD`,`QC`,`QB`,`QA`],ct=st.map((e,t)=>`led${t+1}`),lt=[W(`VCC → 电源 VCC`,`u595:VCC`,`mcu:VCC`),W(`GND → 电源 GND`,`u595:GND`,`mcu:GND`),W(`OE → GND（输出一直打开）`,`u595:OE`,`mcu:GND`),W(`SRCLR → VCC（不清零）`,`u595:SRCLR`,`mcu:VCC`)],ut=[W(`SER → P3.4`,`u595:SER`,`mcu:P3.4`),W(`RCLK → P3.5`,`u595:RCLK`,`mcu:P3.5`),W(`SRCLK → P3.6`,`u595:SRCLK`,`mcu:P3.6`)],dt=ct.map((e,t)=>W(`灯 ${t+1} 负极 → ${st[t]}`,`${e}:C`,`u595:${st[t]}`)),ft=(e,t)=>n=>{let r=P(n);return e.every(e=>e.done(r,n))&&G(r,t)},pt=ft(lt,[`mcu:VCC`,`mcu:GND`]),mt=ft(ut,[`mcu:P3.4`,`mcu:P3.5`,`mcu:P3.6`]),ht=ft(dt,st.map(e=>`u595:${e}`)),gt=e=>ct.map(t=>{let n=U(e,t);return n>.5?1:n<.1?0:-1}),_t={example:`hc595-led`,title:`74HC595 扩展 8 个 LED`,start:e=>{let t=Pe(ct,ct.map((e,t)=>260+t*36),64);return Me(O,[...t.parts,w(`u595`,`74hc595`,Be.x,Be.y)],[I(`r_led1:1`,`mcu:VCC`,`red`,`hv`),...t.lines],{"main.c":it},e)},steps:[{title:`74HC595 是什么`,text:`单片机的引脚不够用时，可以用 74HC595 扩展：只占 3 根线，就能控制 8 个输出。它是"串入并出"的移位寄存器：单片机把一个字节一位一位地放到 SER 上，每给 SRCLK 一个上升沿，595 就收进一位；8 位收齐后给 RCLK 一个上升沿，这 8 位才一起出现在 QA~QH 上。画布上 8 个灯的正极已经经电阻接好了 VCC，负极等着接 595 的输出：输出 0 时灯亮。`},{title:`给 595 接电源`,text:`芯片自己要接 VCC 和 GND 才能工作。还有两个脚要接固定的电平：OE 是"输出使能"，接 GND 让输出一直打开；SRCLR 是"清零"，接 GND 会把收到的数据清掉，所以接 VCC。`,wires:lt,check:({project:e})=>pt(e),solve:e=>K(e,[[`u595:VCC`,`mcu:VCC`,`red`],[`u595:GND`,`mcu:GND`,`black`],[`u595:OE`,`mcu:GND`,`black`],[`u595:SRCLR`,`mcu:VCC`,`red`]])},{title:`接三根控制线`,text:`SER（串行数据）接 P3.4，RCLK（锁存时钟）接 P3.5，SRCLK（移位时钟）接 P3.6。`,wires:ut,check:({project:e})=>mt(e),solve:e=>K(e,[[`u595:SER`,`mcu:P3.4`,`green`],[`u595:RCLK`,`mcu:P3.5`,`blue`],[`u595:SRCLK`,`mcu:P3.6`,`orange`]])},{title:`接 8 个灯`,text:"从左到右，8 个灯的负极依次接 QH、QG……QA。这样字节的最高位对应最左边的灯，`0111 1110` 就是两头的灯亮，和写出来的样子一样。",wires:dt,check:({project:e})=>ht(e),solve:e=>K(e,ct.map((e,t)=>[`${e}:C`,`u595:${st[t]}`,`green`]))},{title:`送一个字节，运行看看`,text:"`hc595_send` 从最高位开始，一位一位地放到 SER 上，每放一位给 SRCLK 一个上升沿；8 位送完，再给 RCLK 一个上升沿，灯一起变。注意锁存脚在程序里叫 `LATCH`：reg52.h 里已经有一个叫 `RCLK` 的位，重名会报错。在 `main` 里送 `0x7E` 后运行，应该两头的灯亮、中间 6 个灭。",diff:{before:it,after:at},solve:e=>V(e,at),observe:(e,t)=>gt(e).join()===`1,0,0,0,0,0,0,1`?q(t,`ends`,5):[],check:e=>H(e)&&J(e.seen,`ends`,5),hints:[`三根控制线要接对：SER → P3.4、RCLK → P3.5、SRCLK → P3.6`,`OE 要接 GND，SRCLR 要接 VCC；接反了灯全灭`,"`dat <<= 1;` 不能漏：不移位的话 8 次送的都是最高位",`送完 8 位要给 LATCH 一个上升沿（先 0 再 1），灯才会变`]},{title:`做成流水灯`,text:"`0x80 >> i` 只有一位是 1，取反后只有这一位是 0，也就只亮一个灯；i 从 0 到 7，亮的灯就从左走到右。每次送完停 0.2 秒。改好后重新运行，应该一个灯从左往右流动。",diff:{before:at,after:ot},solve:e=>V(e,ot),observe:(e,t)=>{let n=gt(e),r=n.indexOf(1);return r>=0&&n.every((e,t)=>t===r?e===1:e===0)?q(t,`only${r}`,3):[]},check:e=>H(e)&&[0,1,2,3].every(t=>J(e.seen,`only${t}`,3)),hints:["`hc595_send(~(0x80 >> i))` 前面的 `~` 不能漏：灯是写 0 亮","每送一次要 `delay_ms(200);`，不然快得看不清"]},{title:`试着改改`,text:"把 `0x80 >> i` 改成 `0x01 << i`，灯从右往左流。把送的值改成 `~(0x81 << i)` 看看会怎样。再把 595 的 OE 改接到 VCC：输出全部断开，灯全灭——有的电路用这个脚控制整排灯的亮灭。"}]},vt=`#include <reg52.h>      /* 52 单片机的寄存器定义：IT0、EX0、EA 这些名字也在里面 */

unsigned char count = 0;    /* 按了几次（0~255） */

void main(void)
{
    P1 = ~count;            /* 先显示 0：取反后是 1111 1111，灯全灭 */
    while (1);
}
`,yt=`#include <reg52.h>      /* 52 单片机的寄存器定义：IT0、EX0、EA 这些名字也在里面 */

unsigned char count = 0;    /* 按了几次（0~255） */

/* interrupt 0：外部中断 0 的中断函数。P3.2 一出现下降沿（按下的那一下），单片机就暂停 main 跳到这里 */
void int0_isr(void) interrupt 0
{
    count++;                /* 计数加一；255 再加一变回 0 */
    P1 = ~count;            /* 灯是低电平亮：取反后，二进制里是 1 的那几位灯亮 */
}

void main(void)
{
    P1 = ~count;            /* 先显示 0：取反后是 1111 1111，灯全灭 */
    IT0 = 1;                /* 触发方式：1 = 下降沿触发，按一下只来一次 */
    EX0 = 1;                /* 允许外部中断 0 */
    EA = 1;                 /* 打开中断总开关 */
    while (1);              /* 主程序什么都不用做，按键一按就会被中断打断 */
}
`,bt={x:300,y:240};function xt(e,t){let[n,r]=[e(`mcu:P3.2`),e(`mcu:GND`)],i=N(t,`button`)[0];if(!i||n===r)return{key:i};let a=[`${i}:1`,`${i}:2`],o=a.find(t=>e(t)===n);return{key:i,toP32:o,toGnd:a.find(t=>t!==o&&e(t)===r)}}var St=(e,t)=>{let n=xt(e,t);return!!(n.toP32&&n.toGnd)},Ct={example:`int0-count`,title:`外部中断计数`,start:e=>{let t=ve(8);return re({parts:[A(),...t.parts],wires:t.wires,files:{"main.c":vt}},e)},steps:[{title:`外部中断是什么`,text:`P3.2 除了当普通引脚，还是"外部中断 0"（INT0）的输入脚。设成"下降沿触发"后，P3.2 一从 1 变成 0（按键按下的那一瞬间），单片机就暂停 main 里正在做的事，自动跳去执行中断函数，执行完再回来接着做。主程序不用一直盯着按键，按下马上就有反应。这一课用 8 个灯显示按了几次：画布上 P1.0~P1.7 的 8 个灯已经接好了。`},{title:`放一个按键`,text:`从元件栏的「输入」里把「按键」拖到灯下面的空白处。`,check:({project:e})=>N(e,`button`).length>0,solve:e=>{let t=M(e,`button`,bt.x,bt.y);return h(t.project,t.id)}},{title:`把按键接到 P3.2 和 GND`,text:`按键一只脚接 P3.2（INT0），另一只脚接 GND。没按时 P3.2 被内部上拉成 1，按下时接到 GND 变成 0，这一下就是下降沿。`,wires:[{label:`按键一只脚 → P3.2`,pins:[`k1:2`,`mcu:P3.2`],done:(e,t)=>!!xt(e,t).toP32},{label:`另一只脚 → GND`,pins:[`k1:1`,`mcu:GND`],done:St}],check:({project:e})=>St(P(e),e),solve:e=>{let t=P(e),{key:n,toP32:r,toGnd:i}=xt(t,e);if(!n)return K(e,[[`k1:2`,`mcu:P3.2`,`blue`]]);let a=[`${n}:1`,`${n}:2`],o=i??a.find(e=>t(e)===t(`mcu:GND`)),s=r??a.find(e=>e!==o),c=a.find(e=>e!==s);return K(e,[[s,`mcu:P3.2`,`blue`],[c,`mcu:GND`,`black`]])}},{title:`写中断函数，运行后按两下按键`,text:"函数名后面写 `interrupt 0`，它就是外部中断 0 的中断函数：按一下执行一次，不用自己调用。在 `main` 里设好三个开关：`IT0 = 1` 下降沿触发，`EX0 = 1` 允许外部中断 0，`EA = 1` 打开总开关。写好后点「▶ 运行」，再用鼠标点两下按键：按第一下 P1.0 的灯亮（1 = 0000 0001），按第二下换成 P1.1 的灯亮（2 = 0000 0010）。",diff:{before:vt,after:yt},solve:e=>V(e,yt),observe:(e,t,n)=>{let r=N(n,`button`)[0],i=r!==void 0&&e.parts[r]?.pressed===!0,a=U(e,F(n,`P1.0`)),o=U(e,F(n,`P1.1`)),s=[];return a<.1&&o<.1&&!t.has(`p1`)&&s.push(`zero`),i&&t.has(`zero`)&&s.push(t.has(`r1`)?`p2`:`p1`),!i&&t.has(`p1`)&&s.push(`r1`),t.has(`p1`)&&!t.has(`p2`)&&a>.5&&o<.1&&s.push(`one`),t.has(`p2`)&&t.has(`one`)&&a<.1&&o>.5&&s.push(`two`),s},check:e=>H(e)&&e.seen.has(`two`),hints:[`按键要一只脚接 P3.2、另一只接 GND（看上一步的勾）`,"`EX0 = 1` 和 `EA = 1` 都要写，少一个中断都进不来","中断函数后面要写 `interrupt 0`：外部中断 0 的中断号是 0",`运行起来以后要用鼠标点按键，点两下`]},{title:`试着改改`,text:"把 `count++` 改成 `count = count + 2`，每按一次加二。在按键属性里打开「模拟抖动」，按一次可能会加好几次——这就是按键抖动。再把 `IT0 = 1` 改成 `IT0 = 0`（低电平触发），按住不放时计数会飞快地一直加。"}]},wt=`#include <reg52.h>      /* 52 单片机的寄存器定义 */
`,Tt=`sbit LED = P1^0;        /* P1.0 接的灯：写 0 亮，写 1 灭 */`,Et=`${wt}
${Tt}

${T}

void main(void)
{
    while (1) {
    }
}
`,Dt=`${wt}
sbit KEY = P3^2;        /* P3.2 接的按键：没按读到 1，按下读到 0 */
${Tt}

${T}

void main(void)
{
    while (1) {                     /* 一直重复：不停地检查按键 */
        if (KEY == 0) {             /* 读到 0：可能按下了，也可能是抖动 */
            delay_ms(10);           /* 等 10 毫秒，抖动过去 */
            if (KEY == 0) {         /* 还是 0，确认真的按下了 */
                LED = !LED;         /* ! 是"取反"：亮变灭、灭变亮 */
                while (KEY == 0);   /* 一直等到松手，这样按一次只翻转一次 */
            }
        }
    }
}
`,Ot={x:300,y:230};function kt(e){let t=P(e),[n,r]=[t(`mcu:P3.2`),t(`mcu:GND`)];if(n!==r)return N(e,`button`).find(e=>{let[i,a]=[t(`${e}:1`),t(`${e}:2`)];return i===n&&a===r||a===n&&i===r})}var At={example:`key-led`,title:`按键开关灯`,start:()=>Ye(Et),steps:[{title:`按键怎么接`,text:`按键（轻触开关）按下时两只脚接通，松开时断开。把一只脚接 P3.2，另一只接 GND：没按时，P3.2 被单片机内部的上拉电阻拉成高电平，读到 1；按下时 P3.2 直接接到 GND，读到 0。所以程序里"读到 0"就是按下了。`},{title:`放一个按键`,text:`从元件栏的「输入」里把「按键」拖到 LED 下面的空白处。`,check:({project:e})=>N(e,`button`).length>0,solve:e=>M(e,`button`,Ot.x,Ot.y).project},{title:`按键接 P3.2 和 GND`,text:`把按键的一只脚连到 P3.2（板子右排，P3 组的第 2 个），另一只脚连到板子上方的 GND。`,check:({project:e})=>kt(e)!==void 0,solve:e=>{let t=N(e,`button`)[0];if(t===void 0)throw new x(`先完成前面的步骤：放一个按键`);let n=P(e),[r,i]=[`${t}:1`,`${t}:2`],[a,o]=n(r)===n(`mcu:GND`)||n(i)===n(`mcu:P3.2`)?[i,r]:[r,i],s=e.parts.find(e=>e.id===t),c=e;return n(a)!==n(`mcu:P3.2`)&&(c=S(c,a,`mcu:P3.2`,a===r?Xe(s,Ot.x,Ot.y,E(`P3.2`,270)):[])),n(o)!==n(`mcu:GND`)&&(c=S(c,o,`mcu:GND`,[])),c}},{title:`读按键、翻转灯`,text:'先给 P3.2 起名字 `KEY`。循环里一直检查它：读到 0 说明按下了。机械按键按下的一瞬间触点会抖动（0 和 1 来回跳十几毫秒），所以等 10 毫秒再读一次，还是 0 才算真的按下，然后用 `LED = !LED;` 把灯翻转（`!` 是"取反"），最后等松手。',code:`sbit KEY = P3^2;                    /* 写在 main 上面 */

    while (1) {
        if (KEY == 0) {             /* 读到 0：可能按下了 */
            delay_ms(10);           /* 等 10 毫秒，躲开抖动 */
            if (KEY == 0) {         /* 还是 0，确认按下了 */
                LED = !LED;         /* 灯翻转 */
                while (KEY == 0);   /* 等松手 */
            }
        }
    }`,check:({project:e})=>{let t=B(e),n=oe(t,`P3`,2)[0];return n!==void 0&&RegExp(`\\b${n}\\s*==\\s*0\\b`).test(t)&&Je(t,`LED`)},solve:e=>V(e,Dt)},{title:`运行，按一下按键`,text:`点「▶ 运行」，然后在画布上用鼠标点一下按键（按下再松开），灯亮；再点一下，灯灭。`,observe:(e,t,n)=>{let r=kt(n),i=r!==void 0&&e.parts[r]?.pressed===!0,a=U(e,F(n,`P1.0`)),o=[];return!i&&a<.1&&!t.has(`pressed`)&&o.push(`off-before-press`),i&&t.has(`off-before-press`)&&o.push(`pressed`),t.has(`pressed`)&&a>.5&&o.push(`on-after-press`),o},check:e=>H(e)&&e.seen.has(`on-after-press`)},{title:`试着改改`,text:"点选按键，在属性里打开「模拟抖动」，再把第二个 `if (KEY == 0)` 和前面的 `delay_ms(10);` 去掉，看看灯是不是有时不听话。再试试去掉 `while (KEY == 0);`：按住不放时，灯会一直闪。"}]},jt=`#include <reg52.h>      /* 52 单片机的寄存器定义 */

/* 共阴段码表 0~F：段输出 1 才亮。table[2] = 0x5B 点亮 A、B、D、E、G，就是 "2" */
unsigned char code table[16] = { 0x3F, 0x06, 0x5B, 0x4F, 0x66, 0x6D, 0x7D, 0x07,
                                 0x7F, 0x6F, 0x77, 0x7C, 0x39, 0x5E, 0x79, 0x71 };
`,Mt=`${jt}
void main(void)
{
    P0 = 0x40;              /* 0100 0000：只亮 G 段，显示一条横线，表示还没按键 */
    while (1);
}
`,Nt=`${jt}
void main(void)
{
    unsigned char cols;     /* 读到的 4 根列线 */
    P0 = 0x40;              /* 0100 0000：只亮 G 段，显示一条横线，表示还没按键 */
    while (1) {
        P1 = 0x7F;          /* 0111 1111：只让第 1 行（P1.7）输出 0，其余写 1（51 的引脚写 1 才能当输入读） */
        cols = P1 & 0x0F;   /* & 0000 1111：只留低 4 位，就是 4 根列线 C1~C4（P1.3~P1.0） */
        if (cols == 0x07)   /* 0111：第 1 列被拉低，按的是 1 */
            P0 = table[1];
        if (cols == 0x0B)   /* 1011：第 2 列，按的是 2 */
            P0 = table[2];
        if (cols == 0x0D)   /* 1101：第 3 列，按的是 3 */
            P0 = table[3];
        if (cols == 0x0E)   /* 1110：第 4 列，按的是 A */
            P0 = table[10];
    }
}
`,Pt=`${jt}
/* 键号 → 键上的字。键盘按行是：1 2 3 A / 4 5 6 B / 7 8 9 C / * 0 # D；* 显示 E，# 显示 F */
unsigned char code key_value[16] = { 1, 2, 3, 0x0A,
                                     4, 5, 6, 0x0B,
                                     7, 8, 9, 0x0C,
                                     0x0E, 0, 0x0F, 0x0D };

${T}

${Oe}

void main(void)
{
    unsigned char k;                        /* 扫到的键号 */
    P0 = 0x40;                              /* 只亮 G 段，显示一条横线，表示还没按键 */
    while (1) {
        k = key_scan();                     /* 扫一遍，有键就拿到键号 */
        if (k != NO_KEY)                    /* 真的按了键才换显示 */
            P0 = table[key_value[k]];       /* 先查出键上的字，再查它的段码 */
    }
}
`,Ft=[`R1`,`R2`,`R3`,`R4`],It=[`C1`,`C2`,`C3`,`C4`],Lt=Ft.map((e,t)=>W(`行 ${e} → P1.${7-t}`,`keypad:${e}`,`mcu:P1.${7-t}`)),Rt=It.map((e,t)=>W(`列 ${e} → P1.${3-t}`,`keypad:${e}`,`mcu:P1.${3-t}`)),zt=(e,t)=>n=>{let r=P(n);return e.every(e=>e.done(r,n))&&G(r,t)},Bt=zt(Lt,[4,5,6,7].map(e=>`mcu:P1.${e}`)),Vt=zt(Rt,[0,1,2,3,4,5,6,7].map(e=>`mcu:P1.${e}`)),Ht=[1,2,3,10,4,5,6,11,7,8,9,12,14,0,15,13],Ut=e=>e.slice(0,7).every((e,t)=>t===6?e>.3:e<.1),Wt=(e,t,n)=>{let r=e.parts[N(n,`seg7`)[0]]?.segments,i=e.parts[N(n,`keypad4x4`)[0]]?.pressed??[],a=[];r&&Ut(r)&&!i.some(Boolean)&&![...t].some(e=>e.startsWith(`press`))&&a.push(`idle`),t.has(`idle`)&&i.forEach((e,t)=>e&&a.push(`press${t}`));let o=Qe(r);return o!==void 0&&Ht.some((e,n)=>e===o&&(t.has(`press${n}`)||a.includes(`press${n}`)))&&a.push(...q(t,`got${o}`,3)),a},Gt={example:`keypad-seg`,title:`矩阵键盘 + 数码管`,start:e=>Ve({parts:[A(k),w(`seg`,`seg7`,De.x,De.y,{common:`cathode`,color:`red`}),Ce()],wires:ke,files:{"main.c":Mt}},[Ie],e),steps:[{title:`矩阵键盘怎么工作`,text:`16 个按键每个单独接一根线要占 16 个引脚；排成 4 行 × 4 列只要 8 根线：每个键接在一根行线和一根列线的交叉处，按下就把这两根线接通。画布上左边的共阴数码管已经接好了（段 A~G、DP 接 P0），右边是 4×4 键盘，下沿 8 个引脚从左到右是 R1~R4、C1~C4。`},{title:`接 4 根行线`,text:`行 R1~R4 依次接 P1.7~P1.4。`,wires:Lt,check:({project:e})=>Bt(e),solve:e=>K(e,Ft.map((e,t)=>[`keypad:${e}`,`mcu:P1.${7-t}`,`blue`]))},{title:`接 4 根列线`,text:`列 C1~C4 依次接 P1.3~P1.0。8 根线正好占满 P1 口：高 4 位是行，低 4 位是列。`,wires:Rt,check:({project:e})=>Vt(e),solve:e=>K(e,It.map((e,t)=>[`keypad:${e}`,`mcu:P1.${3-t}`,`green`]))},{title:`先只查第 1 行，运行后按 2`,text:"让第 1 行输出 0（`P1 = 0x7F`），再读 4 根列线：第 1 行上哪个键按下了，它那根列线就被拉成 0。比如按 2，读到的低 4 位是 `1011`（0x0B）。写好后运行，用鼠标点键盘上的 2，数码管应该从横线变成 2。第 1 行以外的键现在还没反应。",diff:{before:Mt,after:Nt},solve:e=>V(e,Nt),observe:Wt,check:e=>H(e)&&J(e.seen,`got2`,3),hints:[`行线 R1 要接 P1.7、列线 C1 要接 P1.3：顺序反了，读到的列号就对不上`,"`cols = P1 & 0x0F;` 要在 `P1 = 0x7F;` 之后读",`运行起来以后要用鼠标点键盘上的 2`]},{title:`逐行扫描全部 16 个键`,text:"一行一行轮流来：第 row 行输出 0（`P1 = ~(0x80 >> row)`），读列线，找到是 0 的那一列，键号就是 `row * 4 + col`。读到有键按下后先等 10 毫秒再读一次，确认不是抖动；再等到松手才返回，这样按一次只算一次。键号查 `key_value` 得到键上的字，再查段码表送给数码管。改好后重新运行，依次点 6 和 9，数码管应该跟着变。",diff:{before:Nt,after:Pt},solve:e=>V(e,Pt),observe:Wt,check:e=>H(e)&&J(e.seen,`got6`,3)&&J(e.seen,`got9`,3),hints:["`P1 = ~(0x80 >> row);` 每次只让一行是 0，4 行都要轮到","键号是 `row * 4 + col`：每行 4 个键","`key_scan` 要等松手才返回：按住不放时数码管还不会变，松开就变了"]},{title:`试着改改`,text:'把 `key_value` 里 `*` 键对应的 `0x0E` 改成 0，按 * 也显示 0。把等松手的那行 `while` 删掉，按住一个键不放时程序会一直认为它被按着——要做"按住连加"的功能就要从这里改。'}]},Kt=`#include <reg52.h>      /* 52 单片机的寄存器定义 */
`,qt=`${Kt}
void main(void)
{
    while (1);
}
`,Jt=`#define LCD_DATA P0     /* #define 起个别名：后面写 LCD_DATA 就等于写 P0 */
sbit RS = P2^6;         /* 0 = 写指令，1 = 写字符 */
sbit RW = P2^5;         /* 0 = 写，1 = 读；这里只写 */
sbit EN = P2^7;         /* 使能：拉高再拉低，LCD 收下数据 */`,Yt=`/* 写一个字节给 LCD：rs = 0 是指令，rs = 1 是字符。bit 是 51 特有的类型，只有 0 和 1 */
void lcd_write(bit rs, unsigned char v)
{
    RS = rs;
    RW = 0;
    LCD_DATA = v;       /* 数据放到 D0~D7 */
    EN = 1;             /* E 拉高 */
    delay_ms(1);
    EN = 0;             /* E 拉低：下降沿，LCD 收下数据 */
    delay_ms(2);        /* 等 LCD 处理完；清屏要 1.52ms，其他指令 37µs，统一等 2ms */
}`,Xt=(e,t)=>`void lcd_init(void)
{
    delay_ms(15);           /* 上电后 LCD 自己要初始化，至少等 15ms */
    lcd_write(0, 0x38);     /* 功能设置：8 位数据线、两行显示、5×7 点阵 */
    lcd_write(0, ${e});     /* ${t} */
    lcd_write(0, 0x06);     /* 每写一个字符，光标自动右移一格 */
    lcd_write(0, 0x01);     /* 清屏 */
}`,Zt=`/* 从地址 addr 开始显示字符串 s。char *s 是"指向字符串的指针"，*s 取当前字符，s++ 指向下一个 */
void lcd_print(unsigned char addr, char *s)
{
    lcd_write(0, 0x80 | addr);  /* 设置光标位置：指令 0x80 加上地址 */
    while (*s)                  /* 字符串以 0 结尾，读到 0 就停 */
        lcd_write(1, *s++);     /* 写一个字符，然后指针后移 */
}`,Qt=`${Kt}
${Jt}

${T}

${Yt}

${Xt(`0x0F`,`开显示、显示光标、光标闪烁`)}

void main(void)
{
    lcd_init();
    while (1);
}
`,$t=`${Kt}
${Jt}

${T}

${Yt}

${Xt(`0x0C`,`开显示、不显示光标、光标不闪`)}

${Zt}

void main(void)
{
    lcd_init();
    lcd_print(0x00, "mculab");      /* 第一行最左边 */
    while (1);
}
`,en=$t.replace(`    lcd_print(0x00, "mculab");      /* 第一行最左边 */
`,`    lcd_print(0x00, "mculab");      /* 第一行最左边 */
    lcd_print(0x40, "Hello 51!");   /* 第二行最左边：第二行的地址从 0x40 开始 */
`),tn=[W(`VSS → GND`,`lcd:VSS`,`mcu:GND`),W(`VDD → VCC`,`lcd:VDD`,`mcu:VCC`),W(`背光 A → VCC`,`lcd:A`,`mcu:VCC`),W(`背光 K → GND`,`lcd:K`,`mcu:GND`)],nn=[W(`RS → P2.6`,`lcd:RS`,`mcu:P2.6`),W(`RW → P2.5`,`lcd:RW`,`mcu:P2.5`),W(`E → P2.7`,`lcd:E`,`mcu:P2.7`)],rn=Array.from({length:8},(e,t)=>W(`D${t} → P0.${t}`,`lcd:D${t}`,`mcu:P0.${t}`)),an=(e,t)=>n=>{let r=P(n);return e.every(e=>e.done(r,n))&&G(r,t)},on=an(tn,[`mcu:VCC`,`mcu:GND`]),sn=an(nn,[`mcu:P2.5`,`mcu:P2.6`,`mcu:P2.7`]),cn=an(rn,Array.from({length:8},(e,t)=>`mcu:P0.${t}`)),ln=(e,t)=>e.parts[N(t,`lcd1602`)[0]],un=(e,t)=>String.fromCharCode(...e.chars.slice(t*16,t*16+16)).trim(),dn={example:`lcd1602`,title:`LCD1602 显示`,start:()=>D([w(`lcd`,`lcd1602`,20,150)],[],{"main.c":qt},k),steps:[{title:`认识 LCD1602`,text:`LCD1602 能显示 2 行、每行 16 个字符。它里面有自己的控制芯片，单片机只要把"指令"（清屏、移光标……）或"字符"写给它。16 个引脚：VSS、VDD 是电源，V0 调对比度（这里可以不接），RS 选写指令还是写字符，RW 选读还是写，E 是使能，D0~D7 是 8 根数据线，A、K 是背光的正负极。`},{title:`接电源和背光`,text:`VSS 接 GND、VDD 接 VCC，屏幕才能工作；背光 A 接 VCC、K 接 GND，屏幕才会亮起来。`,wires:tn,check:({project:e})=>on(e),solve:e=>K(e,[[`lcd:VSS`,`mcu:GND`,`black`],[`lcd:VDD`,`mcu:VCC`,`red`],[`lcd:A`,`mcu:VCC`,`red`],[`lcd:K`,`mcu:GND`,`black`]])},{title:`接 RS、RW、E`,text:`RS 接 P2.6，RW 接 P2.5，E 接 P2.7。`,wires:nn,check:({project:e})=>sn(e),solve:e=>K(e,[[`lcd:RS`,`mcu:P2.6`,`orange`],[`lcd:RW`,`mcu:P2.5`,`orange`],[`lcd:E`,`mcu:P2.7`,`orange`]])},{title:`接 8 根数据线`,text:`D0~D7 依次接 P0.0~P0.7。一次送一个字节，所以要 8 根。`,wires:rn,check:({project:e})=>cn(e),solve:e=>K(e,Array.from({length:8},(e,t)=>[`lcd:D${t}`,`mcu:P0.${t}`,`green`]))},{title:`写指令函数和初始化，运行看光标`,text:"`lcd_write` 写一个字节：先用 RS 选指令还是字符，RW = 0 表示写，把数据放到 P0，再让 E 先高后低，LCD 在下降沿收下。`lcd_init` 依次写四条指令：8 位两行、开显示、光标右移、清屏。显示开关指令写 `0x0F`，会显示一个闪烁的光标。写好后运行，屏幕左上角应该有一个闪烁的光标——说明 LCD 已经听懂了单片机的指令。",diff:{before:qt,after:Qt},solve:e=>V(e,Qt),observe:(e,t,n)=>{let r=ln(e,n);return r?.on&&r.cursor?q(t,`cursor`,5):[]},check:e=>H(e)&&J(e.seen,`cursor`,5),hints:[`VSS、VDD 要接好电源，LCD 没通电什么都不认`,"RS、RW、E 要接 P2.6、P2.5、P2.7，和程序里的 `sbit` 一致","`lcd_write` 里 E 要先 `EN = 1` 再 `EN = 0`：LCD 在下降沿收数据","`main` 里要调用 `lcd_init();`"]},{title:`在第一行显示 mculab`,text:"`lcd_print` 先写指令 `0x80 | 地址` 把光标移过去，再一个字符一个字符地写。第一行的地址是 0x00~0x0F。顺便把显示开关改成 `0x0C`，不显示光标。改好后重新运行，第一行应该出现 mculab（换成你自己的名字也行）。",diff:{before:Qt,after:$t},solve:e=>V(e,$t),observe:(e,t,n)=>{let r=ln(e,n);return r?.on&&un(r,0)!==``?q(t,`row0`,5):[]},check:e=>H(e)&&J(e.seen,`row0`,5),hints:[`8 根数据线要按顺序：D0 → P0.0 …… D7 → P0.7，接乱了显示的是乱码`,"`lcd_print` 要在 `lcd_init` 之后调用"]},{title:`第二行也显示一句`,text:'第二行的地址从 0x40 开始。在 `main` 里再写一句 `lcd_print(0x40, "Hello 51!");`，重新运行。',diff:{before:$t,after:en},solve:e=>V(e,en),observe:(e,t,n)=>{let r=ln(e,n);return r?.on&&un(r,0)!==``&&un(r,1)!==``?q(t,`row1`,5):[]},check:e=>H(e)&&J(e.seen,`row1`,5),hints:["第二行的地址是 `0x40`，不是 `0x10`","初始化里的 `0x38` 设成了两行显示，不能改成 `0x30`（一行）"]},{title:`试着改改`,text:"把 `0x00` 改成 `0x05`，第一行的字往右挪 5 格。每行最多 16 个字符，写第 17 个会怎样？把显示开关改回 `0x0F`，光标会停在最后一个字后面闪：每写一个字符，光标自动右移一格（初始化里的 `0x06`）。"}]},fn=`#include <reg52.h>      /* 52 单片机的寄存器定义：P1 这些名字都在这个文件里 */

void main(void)         /* 上电后程序从 main 开始执行 */
{
    while (1) {         /* 单片机的程序不能结束，永远在这里转圈 */
    }
}
`,pn=`#include <reg52.h>      /* 52 单片机的寄存器定义：P1 这些名字都在这个文件里 */

sbit LED = P1^0;        /* 给 P1.0 起名字叫 LED */

void main(void)         /* 上电后程序从 main 开始执行 */
{
    LED = 0;            /* P1.0 输出低电平（0），电流流过 LED，灯亮 */
    while (1) {         /* 单片机的程序不能结束，永远在这里转圈 */
    }
}
`,mn={x:300,y:64},hn={x:308,y:71},gn=C(`P1.0`,`led`,mn.x,mn.y).wires,_n=(e,t)=>e.parts.find(e=>e.id===t);function vn(e){let t=P(e);for(let n of N(e,`resistor`)){if(t(`${n}:1`)===t(`mcu:VCC`))return{id:n,free:`${n}:2`};if(t(`${n}:2`)===t(`mcu:VCC`))return{id:n,free:`${n}:1`}}}function yn(e){let t=P(e);return N(e,`led`).find(n=>se(e,t,`mcu:VCC`,`${n}:A`))}function bn(e){return/\bP1\s*=\s*0x[fF][eE]\b/.test(e)?!0:oe(e,`P1`,0).some(t=>RegExp(`\\b${t}\\s*=\\s*0\\s*;`).test(e))}function xn(e,t){if(e===void 0)throw new x(`先完成前面的步骤：${t}`);return e}var Sn={example:`led-on`,title:`点亮一个 LED`,start:()=>D([],[],{"main.c":fn}),steps:[{title:`认识最小系统板`,text:`画布上这块绿色的板子就是单片机最小系统板：中间的黑色芯片是 STC89C52，晶振、复位电路都已经在板上接好了。左右两排排针是 P0~P3 四组引脚，每组 8 个，比如 P1.0 就是 P1 组的第 0 个（在右排最上面）。板子上边的 VCC 是 5V 电源正极，GND 是地（负极）。把鼠标移到排针上可以看到它的名字。`},{title:`放一个 LED`,text:`从右边元件栏的「基础元件」里，把 LED 拖到板子右边的空白处。LED 有两只脚：A 是正极（阳极），C 是负极（阴极）。电流只能从 A 流向 C，有电流流过时灯就亮。`,check:({project:e})=>N(e,`led`).length>0,solve:e=>M(e,`led`,mn.x,mn.y).project},{title:`放一个电阻`,text:`LED 不能直接接到电源上，电流太大会烧坏，要串一个电阻来"限流"。再从元件栏拖一个电阻，放在 LED 旁边，默认的 1kΩ 正合适。`,check:({project:e})=>N(e,`resistor`).length>0,solve:e=>{let{project:t,id:n}=M(e,`resistor`,hn.x,hn.y);return h(t,n)}},{title:`电阻接到 VCC`,text:`开始连线：在板子上方的 VCC 排针上按住鼠标，拖到电阻的任意一只脚上再松开，一根导线就连好了。连错了可以点一下那根导线，按 Delete 键删掉。`,check:({project:e})=>vn(e)!==void 0,solve:e=>{let t=xn(N(e,`resistor`)[0],`放一个电阻`);return ae(e,`${t}:1`)&&!ae(e,`${t}:2`)?S(e,`mcu:VCC`,`${t}:2`,[]):S(e,`mcu:VCC`,`${t}:1`,Xe(_n(e,t),hn.x,hn.y,gn[0].points))}},{title:`电阻接到 LED 的正极`,text:`把电阻的另一只脚连到 LED 的 A 脚（正极）。现在电流的路是：VCC → 电阻 → LED。`,check:({project:e})=>yn(e)!==void 0,solve:e=>{let t=xn(vn(e),`电阻接到 VCC`),n=xn(N(e,`led`)[0],`放一个 LED`);return S(e,t.free,`${n}:A`,[])}},{title:`LED 的负极接到 P1.0`,text:`最后把 LED 的 C 脚（负极）连到板子右排最上面的 P1.0。电路搭好了：P1.0 输出低电平（0）时，电流从 VCC 经过电阻、LED 流进 P1.0，灯亮；输出高电平（1）时，LED 两端都是 5V，没有电流，灯灭。`,check:({project:e})=>F(e,`P1.0`)!==void 0,solve:e=>{let t=xn(yn(e),`电阻接到 LED 的正极`);return S(e,`${t}:C`,`mcu:P1.0`,Xe(_n(e,t),mn.x,mn.y,gn[2].points))}},{title:`写代码：让 P1.0 输出 0`,text:"单片机上电后每个引脚都输出 1，所以灯现在是灭的。在编辑器里 `main` 上面加一行 `sbit LED = P1^0;`，给 P1.0 起个名字；再在 `main` 里、`while` 前面写 `LED = 0;`。",code:`sbit LED = P1^0;    /* 写在 main 上面：给 P1.0 起名字叫 LED */

    LED = 0;        /* 写在 main 里、while 前面：P1.0 输出 0，灯亮 */`,check:({project:e})=>bn(B(e)),solve:e=>V(e,pn)},{title:`运行，看灯亮`,text:`点下面的「▶ 运行」（和工具栏的「运行」一样）。代码会先编译，再开始仿真，P1.0 上的 LED 应该亮起来。编译出错的话，底部的「问题」页会告诉你哪一行有错。`,observe:Ke(`P1.0`),check:e=>H(e)&&e.seen.has(`on`)},{title:`试着改改`,text:"把 `LED = 0;` 改成 `LED = 1;` 再运行，灯就灭了。再试试把 LED 负极的线从 P1.0 改接到 P1.1：灯不亮了，因为程序控制的是 P1.0。"}]},Cn=`#include <reg52.h>      /* 52 单片机的寄存器定义 */

sbit LED = P1^0;        /* 给 P1.0 起名字叫 LED：写 0 亮，写 1 灭 */
`,wn=`${Cn}
${T}

void main(void)
{
    LED = 0;
    while (1) {
    }
}
`,Tn=`${Cn}
${T}

void main(void)
{
    while (1) {             /* 永远重复：亮、等、灭、等 */
        LED = 0;            /* 亮 */
        delay_ms(500);      /* 等 0.5 秒 */
        LED = 1;            /* 灭 */
        delay_ms(500);      /* 再等 0.5 秒 */
    }
}
`,En={example:`led-blink`,title:`LED 闪烁`,start:()=>Ye(pn),steps:[{title:`回顾上一课`,text:"电路和上一课一样：P1.0 接一个 LED，`LED = 0` 亮、`LED = 1` 灭，代码也是上一课做完的样子。这一课让它一闪一闪：亮一会儿、灭一会儿，一直重复。"},{title:`写一个延时函数`,text:'单片机执行一条语句只要一微秒左右，亮了马上就灭，眼睛根本看不出来。先写一个"空转等待"的函数 `delay_ms`：两层循环什么也不做，只是数数，数完大约是 ms 毫秒。把它放在 `main` 上面。',code:`void delay_ms(unsigned int ms)
{
    unsigned int i, j;
    for (i = ms; i > 0; i--)
        for (j = 114; j > 0; j--);
}`,check:({project:e})=>/\bvoid\s+delay_ms\s*\(/.test(B(e)),solve:e=>V(e,wn)},{title:`亮、等、灭、等`,text:"把 `main` 里的 `while (1)` 循环改成：亮、等 0.5 秒、灭、再等 0.5 秒。原来 `while` 前面的 `LED = 0;` 可以删掉了。",code:`    while (1) {
        LED = 0;            /* 亮 */
        delay_ms(500);      /* 等 0.5 秒 */
        LED = 1;            /* 灭 */
        delay_ms(500);      /* 再等 0.5 秒 */
    }`,check:({project:e})=>{let t=B(e),n=t.match(/\bdelay_ms\s*\(\s*\d+\s*\)/g)??[];return/\bLED\s*=\s*0\s*;/.test(t)&&/\bLED\s*=\s*1\s*;/.test(t)&&n.length>=2},solve:e=>V(e,Tn)},{title:`运行，看灯闪`,text:`点「▶ 运行」，LED 应该亮半秒、灭半秒地闪。看到它亮、灭、再亮一次，这一步就通过了。`,observe:qe(`P1.0`),check:e=>H(e)&&e.seen.has(`on-after-off`)},{title:`试着改改`,text:"把两个 `delay_ms(500)` 都改成 100，灯闪得更快；都改成 2000，两秒才换一次。只改第一个的话，亮的时间和灭的时间就不一样长了。"}]},Dn={x:180,y:150},On=e=>Y(e,`led`,0,`led1`),kn=e=>Y(e,`resistor`,0,`r1`),An=[{label:`电阻一端 → VCC`,pins:[`r1:1`,`mcu:VCC`],pinsOf:e=>[`${kn(e)}:1`,`mcu:VCC`],done:(e,t)=>e(`${kn(t)}:1`)===e(`mcu:VCC`)||e(`${kn(t)}:2`)===e(`mcu:VCC`)},{label:`电阻另一端 → LED 正极`,pins:[`r1:2`,`led1:A`],pinsOf:e=>[`${kn(e)}:2`,`${On(e)}:A`],done:(e,t)=>se(t,e,`mcu:VCC`,`${On(t)}:A`)},X(`LED 负极 → P3.7`,`led`,0,`led1`,`C`,`mcu:P3.7`)],jn=[X(`BH1750 SCL → P2.1`,`bh1750`,0,`light1`,`SCL`,`mcu:P2.1`),X(`BH1750 SDA → P2.0`,`bh1750`,0,`light1`,`SDA`,`mcu:P2.0`),X(`BH1750 VCC → VCC`,`bh1750`,0,`light1`,`VCC`,`mcu:VCC`),X(`BH1750 GND → GND`,`bh1750`,0,`light1`,`GND`,`mcu:GND`)],Mn=[X(`模块 RXD → P3.1（TXD）`,`usb-serial`,0,`usb1`,`RXD`,`mcu:P3.1`),X(`模块 TXD → P3.0（RXD）`,`usb-serial`,0,`usb1`,`TXD`,`mcu:P3.0`),X(`模块 GND → GND`,`usb-serial`,0,`usb1`,`GND`,`mcu:GND`)],Nn=[X(`OLED SCL → P2.1（和 BH1750 共用）`,`ssd1306`,0,`oled1`,`SCL`,`mcu:P2.1`),X(`OLED SDA → P2.0（和 BH1750 共用）`,`ssd1306`,0,`oled1`,`SDA`,`mcu:P2.0`),X(`OLED VCC → VCC`,`ssd1306`,0,`oled1`,`VCC`,`mcu:VCC`),X(`OLED GND → GND`,`ssd1306`,0,`oled1`,`GND`,`mcu:GND`)],Pn=[...tt(`模式键`,0,`k1`,`mcu:P3.2`),...tt(`加一键`,1,`k2`,`mcu:P3.3`)],Fn=(e,t)=>n=>{let r=P(n);return e.every(e=>e.done(r,n))&&G(r,t)},In=[`mcu:VCC`,`mcu:GND`,`mcu:P2.0`,`mcu:P2.1`],Ln=Fn(An,[`mcu:VCC`,`mcu:P3.7`]),Rn=Fn(jn,In),zn=Fn(Mn,[`mcu:P3.0`,`mcu:P3.1`,`mcu:GND`]),Bn=Fn(Nn,In),Vn=Fn(Pn,[`mcu:P3.2`,`mcu:P3.3`,`mcu:GND`]),Hn=(e,t)=>U(e,N(t,`led`)[0]),Un=(e,t)=>e.parts[N(t,`bh1750`)[0]]?.lux,Wn=(e,t,n)=>{let r=Hn(e,n);return r>.15&&r<.45?q(t,`pwm`,5):[]},Gn=(e,t,n)=>{let r=[];e.parts[N(n,`bh1750`)[0]]?.state===`measuring`&&r.push(`measuring`);let i=e.parts[N(n,`usb-serial`)[0]],a=0;for(;t.has(`rx#${a+1}`);)a++;let o=i&&!i.framingErrors?Math.min(i.received?.length??0,10-a):0;for(let e=0;e<o;e++)r.push(`rx#${++a}`);return r},Kn=(e,t,n)=>{let r=Un(e,n),i=Hn(e,n);return r===void 0?[]:r>=200&&i<.5?q(t,`bright`,3):r<=20&&i>.6?q(t,`dark`,3):[]},qn=e=>[0,1,2,3].reduce((t,n)=>t|(e>>n*2&1)<<n,0);function Jn(e,t,n){let r=[0,1,2,3,4,5].map(r=>qn(e[t*128+n+r*2])|qn(e[(t+1)*128+n+r*2])<<4).join();for(let e=32;e<127;e++)if(ue(e).join()===r)return String.fromCharCode(e);return`?`}var Yn=(e,t)=>Array.from({length:12},(n,r)=>Array.from({length:Math.floor((128-r)/12)},(n,i)=>Jn(e,t,r+i*12)).join(``)),Xn=e=>e.flatMap(e=>(e.match(/\d+/g)??[]).map(Number)),Zn={example:`light-lamp`,title:`光控台灯`,start:()=>D([],[],{"main.c":fe},k),steps:[{title:`光控台灯要做什么`,text:`做一个会"看天色"的台灯：环境越暗灯越亮，屏幕显示光照强度和灯的亮度；按一个键切换"自动 / 手动"，手动时按另一个键调亮度。元件：一个 LED 当台灯（加 1kΩ 电阻）、BH1750 光照传感器、0.96 寸 OLED、两个按键，再加一个 USB 转串口模块核对读数。`},{title:`阶段 1：接台灯`,text:`拖一个 LED 和一个电阻放到板子右下方：VCC → 电阻 → LED 正极，LED 负极接 P3.7。P3.7 输出 0 时灯亮。`,wires:An,check:({project:e})=>Ln(e),solve:e=>{let{x:t,y:n}=_e.lamp,r=Z(Z(e,`led`,{x:t,y:n},{props:{color:`yellow`}}),`resistor`,{x:t+8,y:n+7},{props:{ohms:1e3},rotate:1}),i=P(r),a=kn(r),o=i(`${a}:2`)===i(`mcu:VCC`)?`${a}:2`:`${a}:1`,s=o===`${a}:1`?`${a}:2`:`${a}:1`;return K(r,[[o,`mcu:VCC`,`red`],[s,`${On(r)}:A`,`orange`],[`${On(r)}:C`,`mcu:P3.7`,`green`]])}},{title:`阶段 1：用 PWM 调亮度`,text:'和"PWM 呼吸灯"一样用定时器中断做 PWM：每 1 毫秒中断一次，10 毫秒一个周期分 10 份，前 `level` 份亮——正好 0~10 档。先固定成 3 档。写好后运行，台灯应该是三成亮。试试把 `level` 改成 8，再改回 3。',diff:{before:fe,after:pe},solve:e=>V(e,pe),observe:Wn,check:e=>H(e)&&J(e.seen,`pwm`,5),hints:[`LED 负极接 P3.7，正极经电阻接 VCC`,"中断函数后面要写 `interrupt 1`，`timer0_init` 里 `ET0`、`EA`、`TR0` 都要置 1","方式 1 不会自动重装：中断里要重新写 `TH0`、`TL0`；`tick` 数到 10 要回到 0"]},{title:`阶段 2：接 BH1750`,text:`从「输入」里拖一个「BH1750 光照传感器」放到板子左下方：SCL 接 P2.1、SDA 接 P2.0，VCC、GND 接电源，ADDR 不接（地址 0x23）。`,wires:jn,check:({project:e})=>Rn(e),solve:e=>{let t=Z(e,`bh1750`,_e.light),n=Y(t,`bh1750`,0,`light1`);return K(t,[[`${n}:SCL`,`mcu:P2.1`,`orange`],[`${n}:SDA`,`mcu:P2.0`,`green`],[`${n}:VCC`,`mcu:VCC`,`red`],[`${n}:GND`,`mcu:GND`,`black`]])}},{title:`阶段 2：接串口模块`,text:`拖一个「USB 转串口」放到板子右上方：模块 RXD 接 P3.1、TXD 接 P3.0（交叉接），GND 接 GND。`,wires:Mn,check:({project:e})=>zn(e),solve:e=>{let t=Z(e,`usb-serial`,_e.usb,{props:{baud:9600},rotate:3}),n=Y(t,`usb-serial`,0,`usb1`);return K(t,[[`${n}:RXD`,`mcu:P3.1`,`orange`],[`${n}:TXD`,`mcu:P3.0`,`blue`],[`${n}:GND`,`mcu:GND`,`black`]])}},{title:`阶段 2：读光照，串口打印`,text:`加上 BH1750 的驱动（和"BH1750 光照强度"示例一样）。主循环改成每 10 毫秒转一圈，每 50 圈读一次光照、用串口打印——以后按键也在这个循环里查，10 毫秒查一次足够快。运行后看「串口终端」，读数应该和 BH1750 元件上设的一样（默认 300 lx）。`,diff:{before:pe,after:be},solve:e=>V(e,be),observe:Gn,check:e=>H(e)&&e.seen.has(`measuring`)&&J(e.seen,`rx`,10),hints:[`BH1750 的 SCL 接 P2.1、SDA 接 P2.0`,`串口模块要交叉接：模块 RXD → P3.1，模块 TXD → P3.0`,"`bh1750_init` 里要先上电（01H）再设测量方式（10H）"]},{title:`阶段 3：越暗越亮`,text:'把光照换成档位：门槛表 `levels` 从 1000 lx 到 1 lx，大约每档暗一倍，光照比几个门槛低就是几档。再加"回差"：要变亮，光照多算 10% 也还是暗才变；要变暗，少算 10% 也还是亮才变——光照正好在门槛附近抖动时灯不会一闪一闪。改好后运行，把 BH1750 的滑块拖到 5 lx 左右，台灯应该明显变亮。',diff:{before:be,after:de},solve:e=>V(e,de),observe:Kn,check:e=>H(e)&&J(e.seen,`bright`,3)&&J(e.seen,`dark`,3),hints:["读完光照要调用 `auto_level(lux);` 改档位",`门槛表要从大到小排：光照比几个门槛低就是几档`,`运行起来以后要把 BH1750 元件下面的滑块往左拖（变暗）`]},{title:`阶段 4：放 OLED，接到 I2C 总线`,text:`拖一个 OLED 放到板子左边。它和 BH1750 挂在同一对线上：SCL 接 P2.1、SDA 接 P2.0，VCC、GND 接电源。OLED 地址 0x3C、BH1750 地址 0x23，各听各的。`,wires:Nn,check:({project:e})=>Bn(e),solve:e=>{let t=Z(e,`ssd1306`,Dn),n=Y(t,`ssd1306`,0,`oled1`);return K(t,[[`${n}:SCL`,`mcu:P2.1`,`orange`],[`${n}:SDA`,`mcu:P2.0`,`green`],[`${n}:GND`,`mcu:GND`,`black`],[`${n}:VCC`,`mcu:VCC`,`red`]])}},{title:`阶段 4：显示光照和亮度`,text:`加上 OLED 的驱动和字库。开机写好不变的字："Light (lx)"、"AUTO"、"Level"；每次读完光照，用大号字显示光照，再画 10 格的亮度条，前几格涂满就是几档。改好后运行，屏上的光照应该和 BH1750 元件上设的一样。`,diff:{before:de,after:Se},solve:e=>V(e,Se),observe:(e,t,n)=>{let r=e.parts[N(n,`ssd1306`)[0]],i=Un(e,n);return!r?.lit||i===void 0?[]:Xn(Yn(r.image,2)).some(e=>Math.abs(e-i)<=Math.max(2,i*.02))?q(t,`shown`,3):[]},check:e=>H(e)&&J(e.seen,`shown`,3),hints:[`OLED 的 SCL、SDA 要和 BH1750 接在同一对引脚上（P2.1、P2.0）`,"`main` 里要调用 `oled_init();`","读完光照要调用 `show_lux(lux);`"]},{title:`阶段 5：放两个按键`,text:`拖两个按键放到台灯右边：上面的当"模式键"，一只脚接 P3.2、另一只接 GND；下面的当"加一键"，一只脚接 P3.3、另一只接 GND。`,wires:Pn,check:({project:e})=>Vn(e),solve:e=>{let t=Z(Z(e,`button`,_e.mode),`button`,_e.add,{index:1});return nt(nt(t,Y(t,`button`,0,`k1`),`mcu:P3.2`),Y(t,`button`,1,`k2`),`mcu:P3.3`)}},{title:`阶段 5：自动 / 手动`,text:"`manual` 记着现在是自动还是手动。模式键按一下切换，右上角显示 AUTO 或 MANUAL；手动的时候不再按光照改档位，加一键每按一下亮一档，到 10 档后回到 0。按键都要消抖、等松手。改好后运行：按一下模式键（变 MANUAL），按两下加一键，再把光照拖暗——台灯应该保持手动调的亮度，过一两秒也不跟着变亮。",diff:{before:Se,after:xe},solve:e=>V(e,xe),observe:(e,t,n)=>{let r=[];N(n,`button`).some(t=>e.parts[t]?.pressed)&&r.push(`pressed`);let i=Un(e,n),a=Hn(e,n);return t.has(`pressed`)&&i!==void 0&&i<=20&&a>.05&&a<.65&&r.push(...q(t,`manual`,60)),r},check:e=>H(e)&&J(e.seen,`manual`,60),hints:[`模式键接 P3.2、加一键接 P3.3`,"手动的时候不要调用 `auto_level`",`先按模式键进入手动，再按加一键`]},{title:`想一想`,text:`台灯做好了！再想想：一、真台灯的 LED 电流大，单片机引脚带不动，要经三极管或 MOS 管驱动，PWM 的原理一样。二、光照突然变化（比如有人走过挡了一下），灯马上跟着变会很晃眼——怎么让亮度慢慢过渡？（提示：每次只往目标档位挪一档）`},{title:`试着改改`,text:'改门槛表，让台灯在室内也亮 3 档。把回差的 `lux / 10` 改成 `lux / 4`，在门槛附近拖滑块，看看档位是不是更"稳"。手动模式下长按加一键连续调。'}]},Qn=`#include <reg52.h>      /* 52 单片机的寄存器定义 */

sbit LED = P1^0;        /* P1.0 接的灯：写 0 亮、写 1 灭 */
`,$n=`${Qn}
void main(void)
{
    while (1);
}
`,er=`void timer0_init(void)
{
    TMOD &= 0xF0;           /* 低 4 位管定时器 0：先清零 */
    TMOD |= 0x02;           /* 方式 2：8 位自动重装，溢出后硬件自动装回初值 */
    TH0 = 0xA4;             /* 256 - 92 = 164：数 92 下约 0.1 毫秒 */
    TL0 = 0xA4;             /* 第一次也从这里开始数 */
    ET0 = 1;                /* 允许定时器 0 中断 */
    EA = 1;                 /* 打开中断总开关 */
    TR0 = 1;                /* 启动定时器 0 */
}
`,tr=`void main(void)
{
    timer0_init();          /* 设好定时器，亮灭全在中断里完成 */
    while (1);
}
`,nr=`${Qn}
unsigned char duty = 20;    /* 占空比：一个周期 100 份里亮几份 */
unsigned char tick = 0;     /* 现在走到这个周期的第几份（0~99） */

${er}
/* 定时器 0 中断：每 0.1 毫秒一次，决定这一份灯亮还是灭 */
void timer0_isr(void) interrupt 1
{
    if (tick < duty)        /* 前 duty 份亮 */
        LED = 0;
    else                    /* 剩下的灭 */
        LED = 1;
    tick++;
    if (tick >= 100)        /* 100 份是一个周期（10 毫秒），从头再来 */
        tick = 0;
}

${tr}`,rr=`${Qn}
unsigned char duty = 0;     /* 占空比：一个周期 100 份里亮几份（0~100） */
unsigned char tick = 0;     /* 现在走到这个周期的第几份（0~99） */
unsigned char slow = 0;     /* 过了几个周期，数够 2 个就调一次亮度 */
unsigned char up = 1;       /* 1：正在变亮；0：正在变暗 */

${er}
/* 定时器 0 中断：每 0.1 毫秒一次，决定这一份灯亮还是灭，每 20 毫秒调一次亮度 */
void timer0_isr(void) interrupt 1
{
    if (tick < duty)        /* 前 duty 份亮 */
        LED = 0;
    else                    /* 剩下的灭 */
        LED = 1;
    tick++;
    if (tick >= 100) {      /* 一个周期（10 毫秒）结束 */
        tick = 0;
        if (++slow >= 2) {  /* 每 2 个周期（20 毫秒）调一次亮度 */
            slow = 0;
            if (up) {
                if (++duty >= 100)  /* 到最亮了，开始变暗 */
                    up = 0;
            } else {
                if (--duty == 0)    /* 到最暗了，开始变亮 */
                    up = 1;
            }
        }
    }
}

${tr}`,ir=(e,t,n)=>{let r=U(e,F(n,`P1.0`));return r>.05&&r<.4?q(t,`dim`,5):[]},ar=[.1,.3,.5,.7,.9],or=(e,t,n)=>{let r=U(e,F(n,`P1.0`)),i=ar.findIndex((e,t)=>t<ar.length-1&&r>=e&&r<ar[t+1]);return i<0?[]:q(t,`level${i}`,3)},sr=e=>[0,1,2,3].every(t=>J(e,`level${t}`,3)),cr={example:`pwm-breath`,title:`PWM 呼吸灯`,start:()=>Ye($n),steps:[{title:`PWM 是什么`,text:'单片机的引脚只能输出 0 或 1，灯只能全亮或全灭。要"半亮"，就让灯飞快地亮、灭交替：每 10 毫秒算一个周期，周期里亮的时间占多少叫"占空比"。亮 2 毫秒、灭 8 毫秒，占空比 20%，眼睛跟不上这么快的闪烁，看到的就是两成亮度。这种办法叫 PWM（脉冲宽度调制）。这一课用定时器 0 每 0.1 毫秒中断一次，把一个周期切成 100 份，`duty` 是亮的份数。'},{title:`让灯只亮两成，运行看看`,text:"写好定时器初始化 `timer0_init`（方式 2，每 0.1 毫秒溢出一次）和中断函数：`tick` 数到第几份，前 `duty` 份亮、剩下的灭。`duty = 20` 就是亮两成。写好后点「▶ 运行」，灯应该是暗暗的，不是全亮。",diff:{before:$n,after:nr},solve:e=>V(e,nr),observe:ir,check:e=>H(e)&&J(e.seen,`dim`,5),hints:["`timer0_init` 里要写全 `ET0 = 1`、`EA = 1`、`TR0 = 1`，而且 `main` 里要调用 `timer0_init();`","中断函数后面要写 `interrupt 1`（定时器 0 的中断号是 1）","`tick` 数到 100 要回到 0，不然一个周期会越来越长"]},{title:`让亮度慢慢变，像呼吸一样`,text:"亮度由 `duty` 决定，那就让它慢慢变：每过 2 个周期（20 毫秒）把 `duty` 加一，加到 100（最亮）以后改成每次减一，减到 0 再加。100 步正好 2 秒，灯 2 秒变亮、2 秒变暗。改好后重新运行。",diff:{before:nr,after:rr},solve:e=>V(e,rr),observe:or,check:e=>H(e)&&sr(e.seen),hints:["`duty` 要从 0 开始，在中断里慢慢加；一直是 20 的话亮度不会变","`slow` 每个周期加一，数到 2 才改一次 `duty`，改完记得清零","`up` 记着现在是变亮还是变暗：到 100 改成 0，到 0 改成 1"]},{title:`慢下来看看 PWM`,text:`把工具栏的速度改成「慢放 0.01x」，就能看清灯其实一直在一亮一灭，只是亮的时间越来越长。再在画布上放一个「逻辑分析仪」，把它的一个通道接到 P1.0，能直接看到波形里高、低电平的宽度在变。看完把速度改回「实时 1x」。`},{title:`试着改改`,text:"把 `slow >= 2` 改成 `slow >= 1`，呼吸快一倍。把 `duty >= 100` 改成 `duty >= 30`，灯最亮只到三成。把 `TH0`、`TL0` 都改成 `0x06`（一份变成约 0.27 毫秒，一个周期 27 毫秒），灯暗的时候能看出一闪一闪：PWM 频率太低就会闪烁。"}]},lr=[`A`,`B`,`C`,`D`,`E`,`F`,`G`,`DP`],ur=`#include <reg52.h>      /* 52 单片机的寄存器定义 */
`,dr=`${ur}
void main(void)
{
    while (1);
}
`,fr=`${ur}
void main(void)
{
    P0 = 0xF9;              /* 1111 1001：只有 B、C 两段是 0，这两段亮，显示 "1" */
    while (1);
}
`,pr=`${ur}
/* 共阳段码表：table[n] 就是显示数字 n 要送到 P0 的值（段输出 0 才亮）。
   code 表示放在程序存储器（Flash）里，不占内存（RAM） */
unsigned char code table[] = { 0xC0, 0xF9, 0xA4, 0xB0, 0x99, 0x92, 0x82, 0xF8, 0x80, 0x90 };

${T}

void main(void)
{
    unsigned char n = 0;    /* 现在要显示的数字 */
    while (1) {
        P0 = table[n];      /* 查表，把 n 的段码送到 P0 */
        delay_ms(500);      /* 停 0.5 秒 */
        if (++n == 10)      /* 加一；加到 10 回到 0 */
            n = 0;
    }
}
`,mr=lr.map((e,t)=>W(`段 ${e} → P0.${t}`,`seg:${e}`,`mcu:P0.${t}`)),hr=e=>{let t=P(e);return mr.every(n=>n.done(t,e))&&G(t,lr.map((e,t)=>`mcu:P0.${t}`))},gr=e=>se(e,P(e),`mcu:VCC`,`seg:COM`),_r=(e,t)=>{let n=N(t,`seg7`)[0];return Qe(e.parts[n]?.segments)},vr={example:`seg-count`,title:`数码管 0~9 计数`,start:()=>D([w(`seg`,`seg7`,200,110,{common:`anode`,color:`red`}),w(`r_com`,`resistor`,260,30,{ohms:220})],[],{"main.c":dr},k),steps:[{title:`认识数码管`,text:`数码管就是 8 个排成"日"字的 LED：A~G 七段加一个小数点 DP。画布上这个是"共阳"数码管：8 个 LED 的正极连在一起，叫公共端 COM，接到 VCC；某一段的引脚输出 0 时，电流从 COM 流过这一段，这段就亮。所以要显示 "1"，就让 B、C 两段输出 0、其余输出 1。`},{title:`公共端经电阻接 VCC`,text:`把电阻一端接板子的 VCC，另一端接数码管的 COM。电阻限制电流，免得把数码管烧了。`,wires:[{label:`电阻一端 → VCC`,pins:[`r_com:2`,`mcu:VCC`],done:e=>e(`r_com:1`)===e(`mcu:VCC`)||e(`r_com:2`)===e(`mcu:VCC`)},{label:`电阻另一端 → COM`,pins:[`r_com:1`,`seg:COM`],done:(e,t)=>gr(t)}],check:({project:e})=>gr(e),solve:e=>{let t=P(e),n=[`r_com:1`,`r_com:2`].find(e=>t(e)===t(`mcu:VCC`)),r=[`r_com:1`,`r_com:2`].find(e=>e!==n&&t(e)===t(`seg:COM`)),i=n??(r===`r_com:2`?`r_com:1`:`r_com:2`);return K(e,[[i,`mcu:VCC`,`red`],[i===`r_com:2`?`r_com:1`:`r_com:2`,`seg:COM`,`red`]])}},{title:`接 8 根段线`,text:`段 A~G、DP 依次接 P0.0~P0.7：A 接 P0.0，B 接 P0.1……DP 接 P0.7。顺序要对，后面的段码表就是按这个顺序算的。`,wires:mr,check:({project:e})=>hr(e),solve:e=>K(e,lr.map((e,t)=>[`seg:${e}`,`mcu:P0.${t}`,`green`]))},{title:`显示一个 1，运行看看`,text:'段输出 0 才亮。要显示 "1" 只亮 B、C：P0 从高位到低位是 DP G F E D C B A，写成 `1111 1001`，也就是 `0xF9`。在 `main` 里写 `P0 = 0xF9;`，然后点「▶ 运行」，数码管应该显示 1。',diff:{before:dr,after:fr},solve:e=>V(e,fr),observe:(e,t,n)=>_r(e,n)===1?q(t,`one`,5):[],check:e=>H(e)&&J(e.seen,`one`,5),hints:[`8 根段线要按顺序接：A → P0.0 …… DP → P0.7`,`公共端 COM 要经电阻接 VCC`,"共阳数码管段输出 0 才亮：显示 1 是 `P0 = 0xF9`，不是 `0x06`"]},{title:`查表，从 0 数到 9`,text:'每个数字的段码都提前算好，放进数组 `table`：`table[3]` 就是显示 3 的段码，这叫"段码表"。主程序里查表送到 P0，停 0.5 秒，数字加一，加到 10 回到 0。改好后重新运行，数码管应该 0、1、2、3……一直数下去。',diff:{before:fr,after:pr},solve:e=>V(e,pr),observe:(e,t,n)=>{let r=_r(e,n);return r===void 0?[]:q(t,`digit${r}`,3)},check:e=>H(e)&&[0,1,2,3].every(t=>J(e.seen,`digit${t}`,3)),hints:["段码表要写成 `unsigned char code table[] = { 0xC0, 0xF9, … };`，共 10 个","`P0 = table[n];` 之后要 `delay_ms(500);`，不然数得太快看不清","`n` 加到 10 要回到 0"]},{title:`试着改改`,text:"把 `delay_ms(500)` 改成 1000，一秒加一。把 `n == 10` 改成 `n == 6`，只在 0~5 之间循环。再试试倒着数：初值 `n = 9`，每次 `n--`，减到 0 以后回到 9。"}]},yr={x:180,y:150},br=[X(`OLED SCL → P2.1`,`ssd1306`,0,`oled1`,`SCL`,`mcu:P2.1`),X(`OLED SDA → P2.0`,`ssd1306`,0,`oled1`,`SDA`,`mcu:P2.0`),X(`OLED VCC → VCC`,`ssd1306`,0,`oled1`,`VCC`,`mcu:VCC`),X(`OLED GND → GND`,`ssd1306`,0,`oled1`,`GND`,`mcu:GND`)],xr=[X(`AHT20 SCL → P2.1（和 OLED 共用）`,`aht20`,0,`aht1`,`SCL`,`mcu:P2.1`),X(`AHT20 SDA → P2.0（和 OLED 共用）`,`aht20`,0,`aht1`,`SDA`,`mcu:P2.0`),X(`AHT20 VCC → VCC`,`aht20`,0,`aht1`,`VCC`,`mcu:VCC`),X(`AHT20 GND → GND`,`aht20`,0,`aht1`,`GND`,`mcu:GND`)],Sr=[X(`模块 RXD → P3.1（TXD）`,`usb-serial`,0,`usb1`,`RXD`,`mcu:P3.1`),X(`模块 TXD → P3.0（RXD）`,`usb-serial`,0,`usb1`,`TXD`,`mcu:P3.0`),X(`模块 GND → GND`,`usb-serial`,0,`usb1`,`GND`,`mcu:GND`)],Cr=e=>Y(e,`led`,0,`led1`),wr=e=>Y(e,`resistor`,0,`r1`),Tr=[{label:`电阻一端 → VCC`,pins:[`r1:1`,`mcu:VCC`],pinsOf:e=>[`${wr(e)}:1`,`mcu:VCC`],done:(e,t)=>e(`${wr(t)}:1`)===e(`mcu:VCC`)||e(`${wr(t)}:2`)===e(`mcu:VCC`)},{label:`电阻另一端 → LED 正极`,pins:[`r1:2`,`led1:A`],pinsOf:e=>[`${wr(e)}:2`,`${Cr(e)}:A`],done:(e,t)=>se(t,e,`mcu:VCC`,`${Cr(t)}:A`)},X(`LED 负极 → P3.7`,`led`,0,`led1`,`C`,`mcu:P3.7`)],Er=(e,t)=>n=>{let r=P(n);return e.every(e=>e.done(r,n))&&G(r,t)},Dr=[`mcu:VCC`,`mcu:GND`,`mcu:P2.0`,`mcu:P2.1`],Or=Er(br,Dr),kr=Er(xr,Dr),Ar=Er(Sr,[`mcu:P3.0`,`mcu:P3.1`,`mcu:GND`]),jr=Er(Tr,[`mcu:VCC`,`mcu:P3.7`]),Mr=(e,t)=>e.parts[N(t,`ssd1306`)[0]],Nr=(e,t)=>e.parts[N(t,`aht20`)[0]];function Pr(e,t,n){let r=0;for(let i=t*128;i<(n+1)*128;i++)for(let t=e[i];t;t&=t-1)r++;return r}var Fr=(e,t,n)=>{let r=Mr(e,n);return r?.lit&&Pr(r.image,0,7)<1500&&Pr(r.image,0,1)>10?q(t,`hello`,5):[]},Ir=(e,t,n)=>{let r=Mr(e,n);return r?.lit&&Pr(r.image,0,7)<3e3&&Pr(r.image,0,1)>80&&Pr(r.image,3,4)>40&&Pr(r.image,6,7)>40?q(t,`ui`,5):[]},Lr=(e,t,n)=>{let r=[];Nr(e,n)?.reading&&r.push(`measured`);let i=e.parts[N(n,`usb-serial`)[0]],a=0;for(;t.has(`rx#${a+1}`);)a++;let o=i&&!i.framingErrors?Math.min(i.received?.length??0,10-a):0;for(let e=0;e<o;e++)r.push(`rx#${++a}`);return r},Rr=e=>[0,1,2,3].reduce((t,n)=>t|(e>>n*2&1)<<n,0);function zr(e,t,n){let r=[0,1,2,3,4,5].map(r=>Rr(e[t*128+n+r*2])|Rr(e[(t+1)*128+n+r*2])<<4).join();for(let e=32;e<127;e++)if(ue(e).join()===r)return String.fromCharCode(e);return`?`}function Br(e,t){return Array.from({length:12},(n,r)=>Array.from({length:Math.floor((128-r)/12)},(n,i)=>zr(e,t,r+i*12)).join(``))}var Vr={example:`oled-thermo`,title:`OLED 温湿度计`,start:()=>D([],[],{"main.c":L},k),steps:[{title:`温湿度计要做什么`,text:`这个项目用上 OLED 和 I2C 传感器：OLED 上显示标题"温湿度计"、温度计和水滴图标、大号的温度和湿度，每秒刷新；温度超过 30℃ 时红色报警灯亮；传感器读不到时显示 --.-，程序也不会卡死。元件：0.96 寸 OLED、AHT20 温湿度传感器、红色 LED 和 1kΩ 电阻，再加一个 USB 转串口模块用来核对读数。`},{title:`阶段 1：放 OLED，接到 I2C 总线`,text:`从「显示」里拖一个「0.96 寸 OLED」放到板子左边。SCL 接 P2.1、SDA 接 P2.0，VCC、GND 接电源。模块背面自带上拉电阻，不用另接。后面的 AHT20 也接这两根线：I2C 靠地址区分芯片，一对线上能挂好几个。`,wires:br,check:({project:e})=>Or(e),solve:e=>{let t=Z(e,`ssd1306`,yr),n=Y(t,`ssd1306`,0,`oled1`);return K(t,[[`${n}:SCL`,`mcu:P2.1`,`orange`],[`${n}:SDA`,`mcu:P2.0`,`green`],[`${n}:GND`,`mcu:GND`,`black`],[`${n}:VCC`,`mcu:VCC`,`red`]])}},{title:`阶段 1：写驱动，显示 Hello`,text:'先把 I2C 和 OLED 的驱动放进来（和"OLED 显示字符和数字"示例一样）：`oled_init` 发一串初始化指令——别漏了 8DH, 14H 开电荷泵——再清屏、开显示；`oled_string` 用 6×8 字库写字。写好后运行，屏幕左上角应该出现 Hello。想看 I2C 的波形，可以放一个逻辑分析仪接到 P2.0、P2.1 上。',diff:{before:L,after:he},solve:e=>V(e,he),observe:Fr,check:e=>H(e)&&J(e.seen,`hello`,5),hints:["SCL 接 P2.1、SDA 接 P2.0，和程序里的 `sbit` 一致","初始化里要有 `0x8D, 0x14`（开电荷泵），不然屏幕不亮","初始化里要清屏（`oled_clear`），不然是一屏雪花点"]},{title:`阶段 2：画界面`,text:`界面里不变的部分开机画一次：第 0、1 页正中是 4 个 16×16 的字"温湿度计"（用「工具 → 字模生成」取模），第 3、4 页是温度计图标和单位 C，第 6、7 页是水滴图标和 %。数先用放大一倍的 12×16 大号字显示成 --.-。改好后运行，看看界面。`,diff:{before:he,after:me},solve:e=>V(e,me),observe:Ir,check:e=>H(e)&&J(e.seen,`ui`,5),hints:["`main` 里要调用 `draw_ui();`",`汉字字模要用 OLED 列行式（先上半页 16 列，再下半页 16 列）`]},{title:`阶段 3：接 AHT20`,text:`从「输入」里拖一个「AHT20 温湿度」放到 OLED 左下方。它的 SCL、SDA 也接 P2.1、P2.0（可以接到排针上，也可以接到 OLED 的同名引脚上），VCC、GND 接电源。`,wires:xr,check:({project:e})=>kr(e),solve:e=>{let t=Z(e,`aht20`,Ne.aht),n=Y(t,`aht20`,0,`aht1`);return K(t,[[`${n}:SCL`,`mcu:P2.1`,`orange`],[`${n}:SDA`,`mcu:P2.0`,`green`],[`${n}:VCC`,`mcu:VCC`,`red`],[`${n}:GND`,`mcu:GND`,`black`]])}},{title:`阶段 3：接串口模块`,text:`先把读数打印到电脑上核对，没问题了再显示到屏上。拖一个「USB 转串口」放到板子右上方：模块 RXD 接 P3.1、TXD 接 P3.0（交叉接），GND 接 GND。`,wires:Sr,check:({project:e})=>Ar(e),solve:e=>{let t=Z(e,`usb-serial`,Ne.usb,{props:{baud:9600},rotate:3}),n=Y(t,`usb-serial`,0,`usb1`);return K(t,[[`${n}:RXD`,`mcu:P3.1`,`orange`],[`${n}:TXD`,`mcu:P3.0`,`blue`],[`${n}:GND`,`mcu:GND`,`black`]])}},{title:`阶段 3：读温湿度，串口打印核对`,text:`加上 AHT20 的驱动：发 AC 33 00 触发测量，等 80ms，读 7 个字节，用 CRC 校验，再换算成以 0.1 为单位的整数（253 就是 25.3℃）。主循环每秒测一次，用串口打印。运行后看下面的「串口终端」，读数应该和 AHT20 元件上设的一样。`,diff:{before:me,after:ge},solve:e=>V(e,ge),observe:Lr,check:e=>H(e)&&e.seen.has(`measured`)&&J(e.seen,`rx`,10),hints:[`AHT20 的 SCL、SDA 要和 OLED 接在同一对引脚上（P2.1、P2.0）`,`串口模块要交叉接：模块 RXD → P3.1，模块 TXD → P3.0`,"`main` 里要先 `uart_init();`"]},{title:`阶段 4：数值显示到 OLED 上`,text:"读成功后，用 `show_tenths` 把温度、湿度用大号字画到屏上。只重画两个数，标题、图标不用每次画：软件模拟的 I2C 刷满一屏要零点几秒，只画变了的地方。改好后运行，屏上的温度应该和 AHT20 元件上设的一样；拖一下滑块，下一秒屏上跟着变。",diff:{before:ge,after:R},solve:e=>V(e,R),observe:(e,t,n)=>{let r=Mr(e,n),i=Nr(e,n);return!r?.lit||!i?[]:Br(r.image,3).flatMap(e=>(e.match(/-?\d+\.\d/g)??[]).map(Number)).some(e=>Math.abs(e-i.temperature)<.15)?q(t,`shown`,3):[]},check:e=>H(e)&&J(e.seen,`shown`,3),hints:["读成功（`aht20_measure()` 返回 1）以后再显示","温度在第 3、4 页：`show_tenths(3, 36, t);`"]},{title:`阶段 5：放报警灯`,text:`拖一个 LED 和一个电阻放到板子右下方：VCC → 电阻 → LED 正极，LED 负极接 P3.7。P3.7 输出 0 时灯亮。`,wires:Tr,check:({project:e})=>jr(e),solve:e=>{let{x:t,y:n}=Ne.led,r=Z(Z(e,`led`,{x:t,y:n},{props:{color:`red`}}),`resistor`,{x:t+8,y:n+7},{props:{ohms:1e3},rotate:1}),i=P(r),a=wr(r),o=i(`${a}:2`)===i(`mcu:VCC`)?`${a}:2`:`${a}:1`,s=o===`${a}:1`?`${a}:2`:`${a}:1`;return K(r,[[o,`mcu:VCC`,`red`],[s,`${Cr(r)}:A`,`orange`],[`${Cr(r)}:C`,`mcu:P3.7`,`green`]])}},{title:`阶段 5：太热亮红灯，加看门狗`,text:'温度超过 `HOT`（300，也就是 30.0℃）就让 P3.7 输出 0，报警灯亮。再加两样让它更可靠：传感器读不到时显示 --.-、关掉报警灯，不停在旧数上；启动看门狗，主循环每圈喂一次，程序万一卡死，2.3 秒后自动重启（见"看门狗"一课）。改好后运行，把 AHT20 的温度拖到 30℃ 以上，报警灯应该亮。',diff:{before:R,after:je},solve:e=>V(e,je),observe:(e,t,n)=>{let r=Nr(e,n);if(!r?.reading)return[];let i=U(e,N(n,`led`)[0]),a=r.reading.temperature;return a<=30&&i<.1?q(t,`cool`,3):a>30&&i>.5?q(t,`hot`,3):[]},check:e=>H(e)&&J(e.seen,`cool`,3)&&J(e.seen,`hot`,3),hints:[`LED 负极接 P3.7，正极经电阻接 VCC`,"超过 30℃ 时 `ALARM = 0;`，否则 `ALARM = 1;`",`运行起来以后要把 AHT20 元件下面的温度滑块拖到 30℃ 以上`]},{title:`想一想`,text:`温湿度计做好了！试试把 AHT20 的 SDA 线删掉：屏上变成 --.-，串口打印"读取失败"，程序照样在跑。再想一想：一、要是 OLED 也坏了（不应答），程序会怎样？二、每秒刷新一次，屏幕偶尔会看到数字一位一位地变——怎么让它看起来是一下子变的？`},{title:`试着改改`,text:`把报警温度改成 28℃。加一个湿度报警：湿度低于 30% 时让报警灯一闪一闪。用「工具 → 字模生成」把"温湿度计"换成你喜欢的标题。`}]},Hr=[`A`,`B`,`C`,`D`,`E`,`F`,`G`,`DP`],Ur={x:Ee.x-280,y:Ee.y-80},Wr=e=>Y(e,`seg7x4`,0,`disp1`),Gr=Hr.map((e,t)=>X(`段 ${e} → P0.${t}`,`seg7x4`,0,`disp1`,e,`mcu:P0.${t}`)),Kr=[1,2,3,4].map(e=>X(`位选 D${e} → P2.${e-1}`,`seg7x4`,0,`disp1`,`D${e}`,`mcu:P2.${e-1}`)),qr=[...tt(`选择键`,0,`k1`,`mcu:P3.2`),...tt(`加一键`,1,`k2`,`mcu:P3.3`)],Jr=[X(`蜂鸣器正极 → VCC`,`buzzer`,0,`buzzer1`,`+`,`mcu:VCC`),X(`负极 → P1.5`,`buzzer`,0,`buzzer1`,`-`,`mcu:P1.5`)],Yr=(e,t)=>n=>{let r=P(n);return e.every(e=>e.done(r,n))&&G(r,t)},Xr=Yr(Gr,Hr.map((e,t)=>`mcu:P0.${t}`)),Zr=Yr(Kr,[0,1,2,3].map(e=>`mcu:P2.${e}`)),Qr=Yr(qr,[`mcu:P3.2`,`mcu:P3.3`,`mcu:GND`]),$r=Yr(Jr,[`mcu:VCC`,`mcu:P1.5`]);function ei(e,t){return(e.parts[N(t,`seg7x4`)[0]]?.digits)?.map(e=>Qe(e,.12)??($e(e,.05)?` `:`?`)).join(``)}var ti=(e,t)=>N(t,`button`).some(t=>e.parts[t]?.pressed===!0),ni=e=>(t,n,r)=>ei(t,r)===e?q(n,`show${e}`,5):[],ri=(e,t,n)=>{let r=ei(e,n);return!r||!/^\d{4}$/.test(r)?[]:q(t,`t${Number(r.slice(0,2))*60+Number(r.slice(2))}`,3)},ii=e=>[...e].some(t=>{let n=/^t(\d+)#3$/.exec(t);return!!n&&e.has(`t${Number(n[1])+1}#3`)}),ai={example:`seg-clock`,title:`电子时钟`,start:()=>D([],[],{"main.c":Te},Ee),steps:[{title:`电子时钟要做什么`,text:`这是一个综合项目：用前面学过的数码管、定时器中断、按键、蜂鸣器，从空白的板子开始做一个电子时钟。要做到：四位数码管显示"时:分"，中间的冒号每秒闪一下；一个键选"调时 / 调分"，一个键加一，按住不放连续加；按键时"嘀"一声，整点响一下。元件：四位共阴数码管 1 个、按键 2 个、有源蜂鸣器 1 个。一共分六个阶段，每个阶段做完都能运行看到进展。`},{title:`阶段 1：放一个四位数码管`,text:`从元件栏「显示」里把「四位数码管」拖到板子左上方。属性里的公共端要选「共阴」（默认就是）：段输出 1 亮，位选输出 0 选中。`,check:({project:e})=>e.parts.some(e=>e.type===`seg7x4`&&e.props.common!==`anode`),solve:e=>Z(e,`seg7x4`,Ur,{props:{common:`cathode`}})},{title:`阶段 1：接 8 根段线`,text:`段 A~G、DP 依次接 P0.0~P0.7。`,wires:Gr,check:({project:e})=>Xr(e),solve:e=>K(e,Hr.map((t,n)=>[`${Wr(e)}:${t}`,`mcu:P0.${n}`,`green`]))},{title:`阶段 1：接 4 根位选线`,text:`位选 D1~D4 依次接 P2.0~P2.3。`,wires:Kr,check:({project:e})=>Zr(e),solve:e=>K(e,[1,2,3,4].map(t=>[`${Wr(e)}:D${t}`,`mcu:P2.${t-1}`,`blue`]))},{title:`阶段 1：先显示 1234`,text:'和"四位数码管动态扫描"一课一样：在主程序里轮流点亮四位，每位亮 2 毫秒。`disp` 数组放四位的段码，扫描时直接送到 P0。写好后运行，应该显示 1234。想一想：主程序被扫描占满了，还怎么数时间、读按键？',diff:{before:Te,after:Fe},solve:e=>V(e,Fe),observe:ni(`1234`),check:e=>H(e)&&J(e.seen,`show1234`,5),hints:[`段线 A~DP 接 P0.0~P0.7，位选 D1~D4 接 P2.0~P2.3`,`数码管要选共阴：段输出 1 才亮`]},{title:`阶段 2：把扫描挪进定时器中断`,text:"让定时器 0 每 2 毫秒中断一次，每次中断只点亮一位，4 次轮完一遍。初值 `0xF8CD`（数 1843 下，约 2 毫秒），方式 1 要在中断里重装。主程序只剩 `while (1);`——空出来了。运行起来还是 1234，但已经不占主程序的时间了。",diff:{before:Fe,after:Ae},solve:e=>V(e,Ae),observe:ni(`1234`),check:e=>H(e)&&J(e.seen,`show1234`,5)&&/\binterrupt\s+1\b/.test(B(e.project)),hints:["中断函数后面要写 `interrupt 1`（定时器 0）","`timer0_init` 里 `ET0 = 1`、`EA = 1`、`TR0 = 1` 都要写","方式 1 不会自动重装：中断里要重新写 `TH0`、`TL0`"]},{title:`阶段 3：数秒，让时间走起来`,text:"2 毫秒中断一次，数到 500 次就是 1 秒：秒加一，满 60 进一分，满 60 分进一时。主程序一直调用 `show` 把分、秒换成段码；第 2 位的小数点当冒号，每秒前半秒亮。改好后运行，应该显示 00:00、00:01、00:02……走起来。",diff:{before:Ae,after:Re},solve:e=>V(e,Re),observe:ri,check:e=>H(e)&&ii(e.seen),hints:["`ticks` 数到 500 要清零，秒才加一","`show(minute, second)` 要放在 `while (1)` 里一直调用","`show` 里要用 `table` 查段码，送进 `disp`"]},{title:`阶段 4：放两个按键`,text:`要能调时间：从「输入」里拖两个「按键」放到板子右边，上面的当"选择键"，下面的当"加一键"。`,check:({project:e})=>N(e,`button`).length>=2,solve:e=>Z(Z(e,`button`,ze.set),`button`,ze.add,{index:1})},{title:`阶段 4：按键接 P3.2、P3.3 和 GND`,text:`选择键一只脚接 P3.2、另一只接 GND；加一键一只脚接 P3.3、另一只接 GND。按下时引脚被拉到 0。`,wires:qr,check:({project:e})=>Qr(e),solve:e=>nt(nt(e,Y(e,`button`,0,`k1`),`mcu:P3.2`),Y(e,`button`,1,`k2`),`mcu:P3.3`)},{title:`阶段 4：用按键调时间`,text:'显示改成"时:分"，开机是 12:00。`mode` 记着现在在干什么：0 走时、1 调时、2 调分，按选择键依次切换；调时、调分的时候，正在调的两位一闪一闪。加一键按下先等 10 毫秒消抖，确认按下了再加一；按住不放超过 0.6 秒，每 0.1 秒自动加一。改好后运行，按一下选择键，再按两下加一键，时应该变成 14。',diff:{before:Re,after:we},solve:e=>V(e,we),observe:(e,t,n)=>{let r=ei(e,n),i=ti(e,n),a=[];return i&&a.push(`pressed`),!i&&!t.has(`pressed`)&&r===`1200`&&a.push(...q(t,`h12`,3)),t.has(`pressed`)&&r?.startsWith(`14`)&&a.push(...q(t,`h14`,3)),a},check:e=>H(e)&&J(e.seen,`h12`,3)&&J(e.seen,`h14`,3),hints:["选择键接 P3.2、加一键接 P3.3，和程序里的 `sbit` 一致",`先按一下选择键进入调时（时的两位开始闪），再按加一键`,"读到按下以后要等松手（`while (K_SET == 0)`），不然按一下会切好几次"]},{title:`阶段 5：放蜂鸣器`,text:`从「执行器」里拖一个「蜂鸣器」放到按键上方。属性选「有源」：通电就响，不用自己产生方波。`,check:({project:e})=>N(e,`buzzer`).length>0,solve:e=>Z(e,`buzzer`,ze.beep,{props:{kind:`active`}})},{title:`阶段 5：蜂鸣器接 VCC 和 P1.5`,text:`正极（+）接 VCC，负极（−）接 P1.5：P1.5 输出 0 时蜂鸣器两端有电压，就响。真电路里蜂鸣器电流比较大，要经三极管或 ULN2003 驱动（见"抢答器"），这里为了接线简单直接接。`,wires:Jr,check:({project:e})=>$r(e),solve:e=>{let t=Y(e,`buzzer`,0,`buzzer1`);return K(e,[[`${t}:+`,`mcu:VCC`,`red`],[`${t}:-`,`mcu:P1.5`,`orange`]])}},{title:`阶段 5：按键嘀一声，整点响一下`,text:'`beep` 记着蜂鸣器还要响几次中断：按键时设成 25（50 毫秒），整点设成 250（0.5 秒）；中断里不是 0 就让 P1.5 输出 0、倒数一次。响多久全由定时器控制，主程序不用停下来等。改好后运行，按一下选择键，应该"嘀"一声。',diff:{before:we,after:Le},solve:e=>V(e,Le),observe:(e,t,n)=>{let r=N(n,`buzzer`)[0],i=(e.parts[r]?.volume??0)>0,a=[];return ti(e,n)&&a.push(`pressed`),!i&&!t.has(`pressed`)&&a.push(`quiet`),i&&(t.has(`pressed`)||a.includes(`pressed`))&&a.push(`beep`),a},check:e=>H(e)&&e.seen.has(`quiet`)&&e.seen.has(`beep`),hints:[`蜂鸣器正极接 VCC、负极接 P1.5`,"`beep` 不是 0 时 `BEEP = 0`（响），是 0 时 `BEEP = 1`（停）","按键处理里要写 `beep = 25;`"]},{title:`想一想`,text:`时钟做好了！再想两个问题：一、断电以后时间就没了，又从 12:00 开始——真正的时钟用 DS1302 这样的时钟芯片，它自带晶振和备用电池，自己走时（见"DS1302 时钟"示例）。二、1843 个机器周期其实是 1999.8 微秒，不是正好 2 毫秒；进中断、重装初值也要花几个周期；晶振本身也有误差。一天下来会差几秒，怎么校准？`},{title:`试着改改`,text:`把开机时间改成你现在的时间。加一个"闹钟"：设一个时、分，到点了蜂鸣器响 5 秒。把调时时闪烁的两位改成只闪小数点。`}]},oi=[`A`,`B`,`C`,`D`,`E`,`F`,`G`,`DP`],si=`#include <reg52.h>      /* 52 单片机的寄存器定义 */
`,ci=`${si}
void main(void)
{
    while (1);
}
`,li=`${si}
void main(void)
{
    P2 = 0xFE;              /* 1111 1110：只有 P2.0 是 0，选中第 1 位（共阴数码管位选输出 0 才亮） */
    P0 = 0x5B;              /* 0101 1011：A、B、D、E、G 五段亮，显示 "2"（共阴段输出 1 才亮） */
    while (1);
}
`,ui=`${si}
/* 共阴段码表：段输出 1 才亮，table[2] = 0x5B 点亮 A、B、D、E、G */
unsigned char code table[] = { 0x3F, 0x06, 0x5B, 0x4F, 0x66, 0x6D, 0x7D, 0x07, 0x7F, 0x6F };
unsigned char digits[4] = { 2, 0, 2, 6 };   /* 四位要显示的数字，从左到右 */

${T}

void main(void)
{
    unsigned char i;
    while (1) {
        for (i = 0; i < 4; i++) {       /* 依次点亮第 1~4 位 */
            P0 = 0x00;                  /* 先把段全灭（消隐），免得上一位的段码串到这一位 */
            P2 = ~(0x01 << i);          /* 只让第 i 位的位选是 0：选中第 i 位 */
            P0 = table[digits[i]];      /* 送这一位的段码 */
            delay_ms(2);                /* 亮 2 毫秒，再换下一位 */
        }
    }
}
`,di=oi.map((e,t)=>W(`段 ${e} → P0.${t}`,`disp:${e}`,`mcu:P0.${t}`)),fi=[1,2,3,4].map(e=>W(`位选 D${e} → P2.${e-1}`,`disp:D${e}`,`mcu:P2.${e-1}`)),pi=(e,t)=>n=>{let r=P(n);return e.every(e=>e.done(r,n))&&G(r,t)},mi=pi(di,oi.map((e,t)=>`mcu:P0.${t}`)),hi=pi(fi,[0,1,2,3].map(e=>`mcu:P2.${e}`));function gi(e,t){let n=N(t,`seg7x4`)[0];return e.parts[n]?.digits}var _i={example:`seg-scan`,title:`四位数码管动态扫描`,start:()=>D([w(`disp`,`seg7x4`,60,120,{common:`cathode`,color:`red`})],[],{"main.c":ci},k),steps:[{title:`四位数码管怎么接`,text:`四位数码管的段线 A~G、DP 是四位共用的：P0 送一个段码，四位都收到。每一位的公共端单独引出来，叫"位选" D1~D4。画布上这个是共阴数码管：段输出 1 才亮，位选输出 0 这一位才亮。所以 12 根线就能管 32 个 LED。`},{title:`接 8 根段线`,text:`段 A~G、DP 依次接 P0.0~P0.7。`,wires:di,check:({project:e})=>mi(e),solve:e=>K(e,oi.map((e,t)=>[`disp:${e}`,`mcu:P0.${t}`,`green`]))},{title:`接 4 根位选线`,text:`位选 D1~D4 依次接 P2.0~P2.3。`,wires:fi,check:({project:e})=>hi(e),solve:e=>K(e,[1,2,3,4].map(e=>[`disp:D${e}`,`mcu:P2.${e-1}`,`blue`]))},{title:`先只让第 1 位显示 2`,text:'`P2 = 0xFE` 只让 P2.0 输出 0，选中第 1 位；`P0 = 0x5B` 点亮 A、B、D、E、G 五段，显示 "2"。写好后运行：只有最左边一位亮，显示 2。',diff:{before:ci,after:li},solve:e=>V(e,li),observe:(e,t,n)=>{let r=gi(e,n);return r&&Qe(r[0])===2&&r.slice(1).every(e=>$e(e))?q(t,`first`,5):[]},check:e=>H(e)&&J(e.seen,`first`,5),hints:["位选接 P2.0~P2.3：`P2 = 0xFE` 选中的是接 P2.0 的第 1 位","共阴数码管段输出 1 才亮：显示 2 是 `P0 = 0x5B`"]},{title:`轮流点亮四位`,text:'一次只能亮一位，那就轮流来：选中第 1 位、送它的段码、停 2 毫秒；再换第 2 位……四位轮一遍只要 8 毫秒，眼睛看不出闪，看起来四位同时亮着。这叫"动态扫描"。换位之前先 `P0 = 0x00` 把段全灭（消隐），免得上一位的段码在这一位上留下重影。改好后运行，应该显示 2026。',diff:{before:li,after:ui},solve:e=>V(e,ui),observe:(e,t,n)=>{let r=gi(e,n);return r&&r.map(e=>Qe(e,.12)).join()===`2,0,2,6`?q(t,`all`,5):[]},check:e=>H(e)&&J(e.seen,`all`,5),hints:["`P2 = ~(0x01 << i)` 让第 i 位的位选是 0，四位要轮流选中","每位亮完要停一下（`delay_ms(2)`）；太长会闪，太短会很暗","数组 `digits` 里放的是要显示的数字，送段码时要查表：`table[digits[i]]`"]},{title:`慢下来看看`,text:"把 `delay_ms(2)` 改成 `delay_ms(200)` 再运行，就能看清它其实是一位一位轮流亮的。或者不改代码，把工具栏的速度切到「慢放 0.01x」。看完改回来。"},{title:`试着改改`,text:"把 `digits` 改成 `{ 1, 2, 3, 4 }`，显示 1234。去掉 `P0 = 0x00;` 这行消隐，仔细看相邻的位有没有淡淡的重影。"}]},vi=`#include <reg52.h>      /* 52 单片机的寄存器定义 */

sbit LED = P1^0;        /* P1.0 接的灯：写 0 亮，写 1 灭 */
`,yi=`void main(void)
{
    while (1);          /* 主程序空转 */
}
`,bi=`void main(void)
{
    timer0_init();      /* 设好定时器就不用管了，后面都在中断里完成 */
    while (1);          /* 主程序空转；单片机不能"结束"，必须一直循环 */
}
`;function xi(e){let t=[`    TMOD &= 0xF0;                   /* 低 4 位管定时器 0，先清零 */`,`    TMOD |= 0x01;                   /* 方式 1：16 位定时器 */`];return e>=2&&t.push(`    TH0 = (65536 - 46080) / 256;    /* 初值高 8 位：数 46080 下溢出 = 50 毫秒 */`,`    TL0 = (65536 - 46080) % 256;    /* 初值低 8 位 */`),e>=3&&t.push(`    ET0 = 1;                        /* 允许定时器 0 中断 */`,`    EA = 1;                         /* 打开中断总开关 */`,`    TR0 = 1;                        /* 定时器 0 开始数 */`),`void timer0_init(void)\n{\n${t.join(`
`)}\n}\n`}var Si=`unsigned char count;    /* 中断了几次；全局变量上电时是 0 */

/* interrupt 1：定时器 0 的中断函数，每次溢出自动执行 */
void timer0_isr(void) interrupt 1
{
    TH0 = (65536 - 46080) / 256;    /* 方式 1 溢出后变成 0，重新装初值，下次还是 50 毫秒 */
    TL0 = (65536 - 46080) % 256;
    if (++count >= 10) {            /* 10 次 × 50 毫秒 = 0.5 秒 */
        count = 0;
        LED = !LED;                 /* 灯翻转 */
    }
}
`,Ci=(...e)=>[vi,...e].join(`
`),wi={example:`timer-blink`,title:`定时器中断闪灯`,start:()=>Ye(Ci(yi)),steps:[{title:`定时器是什么`,text:`定时器是单片机里的一个计数器，每个机器周期自动加一，不用 CPU 操心。11.0592MHz 晶振下一个机器周期约 1.085 微秒，数 46080 下就是 50 毫秒。数满"溢出"时，单片机暂停 main，自动跳去执行"中断函数"，执行完再回来。这一课让定时器 0 每 50 毫秒中断一次，数到 10 次（0.5 秒）就让灯翻转。`},{title:`设置定时器的工作方式`,text:"先在 `main` 上面写一个初始化函数 `timer0_init`。`TMOD` 寄存器设置定时器怎么工作：低 4 位管定时器 0，写 0001 就是方式 1（16 位定时器）。`TMOD &= 0xF0;` 先把低 4 位清零、不动定时器 1 的设置，再 `TMOD |= 0x01;`。把鼠标停在编辑器里的 `TMOD` 上，可以看到每一位的意思。",code:xi(1).trimEnd(),check:({project:e})=>/\bTMOD\s*(\|=|=)\s*0x0*1\b/i.test(B(e)),solve:e=>V(e,Ci(xi(1),yi))},{title:`装初值`,text:"16 位定时器从初值一直数到 65535，再加一就溢出。要数 46080 下（50 毫秒）溢出，初值就是 65536 − 46080：拆成高 8 位放进 `TH0`、低 8 位放进 `TL0`。把这两行加到 `timer0_init` 里。",code:`    TH0 = (65536 - 46080) / 256;    /* 初值高 8 位 */
    TL0 = (65536 - 46080) % 256;    /* 初值低 8 位 */`,check:({project:e})=>/\bTH0\s*=/.test(B(e))&&/\bTL0\s*=/.test(B(e)),solve:e=>V(e,Ci(xi(2),yi))},{title:`打开中断，启动定时器`,text:"接着在 `timer0_init` 里打开定时器 0 的中断开关 `ET0`、中断总开关 `EA`，最后写 `TR0 = 1` 让定时器开始数。EA 不开，哪个中断都不会发生。",code:`    ET0 = 1;            /* 允许定时器 0 中断 */
    EA = 1;             /* 打开中断总开关 */
    TR0 = 1;            /* 定时器 0 开始数 */`,check:({project:e})=>[`ET0`,`EA`,`TR0`].every(t=>RegExp(`\\b${t}\\s*=\\s*1\\b`).test(B(e))),solve:e=>V(e,Ci(xi(3),yi))},{title:`写中断函数`,text:"函数名后面写 `interrupt 1`，它就是定时器 0 的中断函数（定时器 0 的中断号是 1）：每次溢出自动执行，不用自己调用。方式 1 溢出后计数器变成 0，所以先重新装初值；再数中断了几次，满 10 次让灯翻转。把它写在 `main` 上面。",code:Si.trimEnd(),check:({project:e})=>/\binterrupt\s+1\b/.test(B(e))&&Je(B(e),`LED`),solve:e=>V(e,Ci(xi(3),Si,yi))},{title:`在 main 里调用，运行`,text:"最后在 `main` 里、`while` 前面调用 `timer0_init();`，然后点「▶ 运行」。灯应该每 0.5 秒翻转一次。注意 `main` 里什么都没做——闪灯全靠定时器中断。",code:`    timer0_init();      /* 写在 main 里、while 前面 */`,observe:qe(`P1.0`),check:e=>H(e)&&e.seen.has(`on-after-off`),solve:e=>V(e,Ci(xi(3),Si,bi))},{title:`试着改改`,text:"把 `count >= 10` 改成 `count >= 2`，灯每 0.1 秒翻转一次。运行后点「暂停」，打开底部的「寄存器」页，把鼠标停在 TMOD、IE 上，看看每一位现在是多少。"}]},Ti=`#include <reg52.h>      /* 52 单片机的寄存器定义：SCON、SBUF、TI、RI 这些名字都在里面 */
`,Ei=`${Ti}
void main(void)
{
    while (1);
}
`,Di=`void uart_init(void)
{
    SCON = 0x50;        /* 0101 0000：串口方式 1（8 位数据，波特率可变），REN = 1 允许接收 */
    TMOD &= 0x0F;       /* TMOD 高 4 位管 T1：先清零 */
    TMOD |= 0x20;       /* 高 4 位写 0010：T1 方式 2，8 位自动重装 */
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
}`,Oi=`${Ti}
${Di}

void main(void)
{
    uart_init();
    send_string("Hello, mculab!\\r\\n");    /* \\r\\n 是回车换行 */
    while (1);
}
`,ki=`${Ti}
${Di}

void main(void)
{
    unsigned char c;
    uart_init();
    send_string("Hello, mculab!\\r\\n");    /* \\r\\n 是回车换行 */
    while (1) {
        if (RI) {           /* RI = 1：收到了一个字节 */
            RI = 0;         /* 清掉标志，准备收下一个 */
            c = SBUF;       /* 从 SBUF 取出收到的字节 */
            send_byte(c);   /* 原样发回去 */
        }
    }
}
`,Ai=[W(`模块 RXD → P3.1（TXD）`,`usb:RXD`,`mcu:P3.1`),W(`模块 TXD → P3.0（RXD）`,`usb:TXD`,`mcu:P3.0`),W(`模块 GND → GND`,`usb:GND`,`mcu:GND`)],ji=e=>{let t=P(e);return Ai.every(n=>n.done(t,e))&&G(t,[`mcu:P3.0`,`mcu:P3.1`,`mcu:GND`])},Mi=(e,t)=>e.parts[N(t,`usb-serial`)[0]]??{};function Ni(e,t){let n=0;for(;e.has(`${t}#${n+1}`);)n++;return n}var Pi={example:`uart-echo`,title:`串口收发`,start:()=>D([w(`usb`,`usb-serial`,320,190,{baud:9600})],[],{"main.c":Ei}),steps:[{title:`串口是什么`,text:`串口用两根线通信：TXD 发、RXD 收，每次传一个字节，一位一位地按约定好的速度（波特率）送出去。画布上是一个 USB 转串口模块，它一头接电脑（下面的「串口终端」），一头接单片机：单片机发的字会显示在终端里，终端里输入的字会发给单片机。`},{title:`交叉接线`,text:`一边的"发"要接另一边的"收"：模块的 RXD 接单片机的 TXD（P3.1），模块的 TXD 接单片机的 RXD（P3.0）。两边还要共地：模块的 GND 接 GND，不然高低电平没有共同的参照。`,wires:Ai,check:({project:e})=>ji(e),solve:e=>K(e,[[`usb:RXD`,`mcu:P3.1`,`orange`],[`usb:TXD`,`mcu:P3.0`,`blue`],[`usb:GND`,`mcu:GND`,`black`]])},{title:`初始化串口，发一句问候`,text:"`uart_init` 把串口设成方式 1、用定时器 T1 产生 9600 波特。`send_byte` 把字节写进 `SBUF`，硬件自己一位一位地发，发完把 `TI` 置 1。`send_string` 一个字符一个字符地发。写好后运行，下面的「串口终端」里应该出现 Hello, mculab!。",diff:{before:Ei,after:Oi},solve:e=>V(e,Oi),observe:(e,t,n)=>{let r=Mi(e,n);if(r.framingErrors)return[`garbled`];let i=Ni(t,`rx`);return(r.received??[]).slice(0,5-i).map((e,t)=>`rx#${i+t+1}`)},check:e=>H(e)&&J(e.seen,`rx`,5),hints:[`接线要交叉：模块 RXD 接 P3.1，模块 TXD 接 P3.0；GND 也要接`,"`TR1 = 1` 不能漏：定时器 T1 不走，串口就没有节拍，`while (!TI)` 会一直等","`TH1`、`TL1` 都要写 `0xFD`，和模块的 9600 波特对上；对不上终端里是乱码"]},{title:`收到什么回什么`,text:"收到一个字节后，硬件把它放进 `SBUF`，并把 `RI` 置 1。主程序一直看 `RI`：是 1 就清掉、取出字节、原样发回。改好后重新运行，在串口终端下面的输入框里打几个字母，按回车或点「发送」，终端里应该原样显示出来。",diff:{before:Oi,after:ki},solve:e=>V(e,ki),observe:(e,t,n)=>{let r=Mi(e,n),i=[],a=e=>t.has(e)||i.includes(e),o=Ni(t,`sent`);for(let e of r.sent??[])o++,i.push(`sent#${o}`,`byte${o}=${e}`);let s=Ni(t,`echo`);for(let e of r.received??[])o!==0&&(s<o&&a(`byte${s+1}=${e}`)?i.push(`echo#${++s}`):a(`noise`)||i.push(`noise`));return i},check:e=>H(e)&&J(e.seen,`echo`,3)&&!e.seen.has(`noise`),hints:["`SCON = 0x50` 里的 REN = 1 允许接收；写成 `0x40` 就收不到","`RI` 要软件清零：不清的话一个字节会被发回好多次",`运行起来以后要在串口终端里输入几个字母再发送`]},{title:`试着改改`,text:"把 `send_byte(c)` 改成 `send_byte(c + 1)`，发 a 会回 b。把模块的波特率属性改成 4800，看看收到的为什么是乱码。再试试收到 1 让 P1.0 的灯亮、收到 0 让它灭——这就是用电脑遥控单片机。"}]},Fi=`#include <reg52.h>      /* 52 单片机的寄存器定义 */

${T}

void main(void)
{
    while (1) {
    }
}
`,Ii=`#include <reg52.h>      /* 52 单片机的寄存器定义 */

${T}

void main(void)
{
    P1 = 0xFE;          /* 1111 1110：只有 P1.0 是 0，第一个灯亮 */
    while (1) {
    }
}
`,Li=`#include <reg52.h>      /* 52 单片机的寄存器定义 */
#include <intrins.h>    /* _crol_（循环左移）在这里面 */

${T}

void main(void)
{
    unsigned char led = 0xFE;   /* 1111 1110：从第一个灯开始 */

    while (1) {
        P1 = led;               /* 8 位一次送到 P1 */
        delay_ms(200);          /* 停 0.2 秒 */
        led = _crol_(led, 1);   /* 循环左移一位：1111 1110 → 1111 1101，下一个灯亮 */
    }
}
`,Ri=(e,t,n)=>{let r=[0,1,2,3,4,5,6,7].filter(t=>U(e,F(n,`P1.${t}`))>Ge);return r.length===1?[`only-${r[0]}`]:[]},zi=[Sn,En,{example:`water-lamp`,title:`流水灯`,start:()=>({...ne(),files:{"main.c":Fi}}),steps:[{title:`认识 8 个灯`,text:"这次 P1 口的 8 个引脚各接了一个灯，接法和前两课一样（VCC → 电阻 → LED → 引脚），最左边的接 P1.0。P1 可以一个脚一个脚地写，也可以 8 个脚一次写：`P1 = 0xFE;` 就是把二进制 1111 1110 一次送到 P1.7~P1.0。延时函数已经写好了。"},{title:`一次点亮一个灯`,text:"0xFE 是二进制 1111 1110：只有最低位（P1.0）是 0，所以只有第一个灯亮。在 `main` 里、`while` 前面写 `P1 = 0xFE;`，然后点「▶ 运行」，看是不是只有最左边的灯亮。",code:`    P1 = 0xFE;          /* 1111 1110：只有 P1.0 是 0，第一个灯亮 */`,observe:Ri,check:e=>H(e)&&e.seen.has(`only-0`),solve:e=>V(e,Ii)},{title:`让灯流动起来`,text:'把要送的值放在变量 `led` 里：每次送到 P1、等 0.2 秒，再用 `_crol_(led, 1)` 把 8 位"循环左移"一位——1111 1110 变成 1111 1101，0 跑到了第二位，下一个灯亮；左边移出去的位补到右边，所以会一直转圈。`_crol_` 在 `intrins.h` 里，记得在文件开头加 `#include <intrins.h>`。上一步写的 `P1 = 0xFE;` 可以删掉。',code:`#include <intrins.h>        /* 写在文件开头 */

    unsigned char led = 0xFE;   /* 写在 main 的最开头 */
    while (1) {
        P1 = led;               /* 8 位一次送到 P1 */
        delay_ms(200);          /* 停 0.2 秒 */
        led = _crol_(led, 1);   /* 循环左移一位 */
    }`,check:({project:e})=>{let t=B(e);return/#\s*include\s*<intrins\.h>/i.test(t)&&/\b_crol_\s*\(/.test(t)&&/\bdelay_ms\s*\(\s*\d+\s*\)/.test(t)},solve:e=>V(e,Li)},{title:`运行，看灯流动`,text:`点「▶ 运行」，灯应该一个接一个地往后亮，像水在流。看到三个不同的灯轮流亮，这一步就通过了。`,observe:Ri,check:e=>H(e)&&[...e.seen].filter(e=>e.startsWith(`only-`)).length>=3},{title:`试着改改`,text:"把 `_crol_` 改成 `_cror_`（循环右移），灯会反着流；把初值 0xFE 改成 0xFC（1111 1100），两个灯一起流；把 `delay_ms(200)` 改成 50，流得更快。"}]},At,Ct,wi,cr,vr,_i,_t,dn,Gt,Pi,ai,Vr,Zn];function Bi(e){return zi.find(t=>t.example===e)}function Vi(e){let t=e.project.lesson;return t?.tutorial&&Bi(t.example)||null}var Hi=e=>e.project.lesson?.step??0;function Ui(e){return!!e.build&&!e.project.firmware&&e.build.key===ie(e.project.files)}var Wi=1e3,Gi=null;function Ki(e){Gi&&clearTimeout(Gi),Gi=null;let t=Vi(l.getState());if(!t)return;let n=Math.max(0,Math.min(e,t.steps.length));l.setState(e=>({project:{...e.project,lesson:{...e.project.lesson,step:n}},tutorialSeen:[],tutorialPassed:!1})),n===t.steps.length&&a(t.example,!0)}function qi(){l.subscribe((e,t)=>{let n=Vi(e),r=Hi(e),i=n?.steps[r];if(!i||e.tutorialPassed)return;if(e.loaded!==t.loaded&&e.tutorialSeen.length>0){l.setState({tutorialSeen:[]});return}if(i.observe&&e.status===`running`&&e.frame&&e.frame!==t.frame){let t=new Set(e.tutorialSeen),n=Ue(i,e.frame,t,e.project);if(n!==t){l.setState({tutorialSeen:[...n]});return}}if(!i.check||e.projectId===t.projectId&&e.project===t.project&&e.build===t.build&&e.status===t.status&&e.tutorialSeen===t.tutorialSeen&&e.tutorialPassed===t.tutorialPassed||!i.check({project:e.project,compiled:Ui(e),running:e.status===`running`,seen:new Set(e.tutorialSeen)}))return;l.setState({tutorialPassed:!0});let a=e.projectId;Gi&&clearTimeout(Gi);let o=setTimeout(()=>{Gi===o&&(Gi=null);let e=l.getState();e.projectId===a&&Hi(e)===r&&Ki(r+1)},Wi);Gi=o})}function Ji(){let{selection:e}=l.getState();e&&(e.kind===`part`?u(t=>_(t,e.id)):u(t=>y(t,e.index)))&&s(null)}function Yi(){let{selection:e}=l.getState();e?.kind===`part`&&u(t=>h(t,e.id))}function Xi(e,t){let{project:n}=l.getState(),i=b(n,e);if(i){c(i,`error`);return}let a=r(e),o=le(e).geometry(a?.defaultProps??{}),d=Math.round(t.x-o.width/2),f=Math.round(t.y-o.height/2);for(;n.parts.some(e=>Math.abs(e.x-d)<6&&Math.abs(e.y-f)<6);)d+=16,f+=16;let p=``;u(t=>{let n=M(t,e,d,f);return p=n.id,n.project})&&s({kind:`part`,id:p})}var Zi=null,Qi=0,$i=24;function ea(){let{selection:e,project:t}=l.getState();return e?.kind===`part`?t.parts.find(t=>t.id===e.id):void 0}function ta(e){return j(e.type)?(c(`每个项目只能有一块单片机板，不能复制`,`error`),!1):(Zi={type:e.type,props:structuredClone(e.props),rotate:e.rotate,x:e.x,y:e.y},Qi=0,!0)}function na(){let e=ea();return e?(ta(e)&&c(`已复制 ${e.id}，按 Ctrl+V 粘贴`),!0):!1}function ra(){if(!Zi)return!1;let e=Zi,{project:t}=l.getState();Qi++;let n=e.x+$i*Qi,r=e.y+$i*Qi;for(;t.parts.some(e=>Math.abs(e.x-n)<6&&Math.abs(e.y-r)<6);)n+=$i,r+=$i;let i=``;return u(t=>{let a=g(t,e,n,r);return i=a.id,a.project})&&s({kind:`part`,id:i}),!0}function ia(){let e=ea();e&&ta(e)&&ra()}var aa=.25;function oa(e,t,n){let r=t.width/2,i=t.height/2,a=e.x-r,o=e.y-i;switch(n){case 90:return{x:r-o,y:i+a};case 180:return{x:r-a,y:i-o};case 270:return{x:r+o,y:i-a};default:return{x:e.x,y:e.y}}}function sa(e,t,n){let r=t.pins[n];if(!r)return null;let i=oa(r,t,e.rotate);return{x:e.x+i.x,y:e.y+i.y}}function ca(e,t){let n=e.rotate===90||e.rotate===270,r=n?t.height:t.width,i=n?t.width:t.height;return{x:e.x+(t.width-r)/2,y:e.y+(t.height-i)/2,width:r,height:i}}function la(e){if(e.length===0)return null;let t=1/0,n=1/0,r=-1/0,i=-1/0;for(let a of e)t=Math.min(t,a.x),n=Math.min(n,a.y),r=Math.max(r,a.x+a.width),i=Math.max(i,a.y+a.height);return{x:t,y:n,width:r-t,height:i-n}}function ua(e,t,n){return{x:(t-e.x)/e.zoom,y:(n-e.y)/e.zoom}}function da(e,t,n){return{x:t*e.zoom+e.x,y:n*e.zoom+e.y}}var fa=e=>Math.min(4,Math.max(aa,e));function pa(e,t,n,r){let i=fa(e.zoom*t),a=ua(e,n,r);return{zoom:i,x:n-a.x*i,y:r-a.y*i}}function ma(e,t,n,r,i){let a=Math.hypot(n.x-t.x,n.y-t.y),o=Math.hypot(i.x-r.x,i.y-r.y),s={x:(t.x+n.x)/2,y:(t.y+n.y)/2},c=pa(e,a>0?o/a:1,s.x,s.y);return{zoom:c.zoom,x:c.x+(r.x+i.x)/2-s.x,y:c.y+(r.y+i.y)/2-s.y}}function ha(e,t,n,r){let i=(t.width-n*2)/Math.max(e.width,1),a=(t.height-n*2)/Math.max(e.height,1),o=fa(Math.min(i,a,r)),s=e.x+e.width/2,c=e.y+e.height/2;return{zoom:o,x:t.width/2-s*o,y:t.height/2-c*o}}var ga=e=>String(Math.round(e*100)/100);function _a(e){return e.map((e,t)=>`${t===0?`M`:`L`}${ga(e.x)} ${ga(e.y)}`).join(` `)}function va(e,t,n){let r=null,i=n*n;for(let n of e){let e=(n.pos.x-t.x)**2+(n.pos.y-t.y)**2;e<=i&&(i=e,r=n.ref)}return r}var ya=10,ba=6,xa=60,Sa=30,Ca=25,wa=8,Ta=1e-6,Ea=-1,Da=-2,Q=e=>Math.round(e*100)/100,Oa=(e,t)=>({x:e.x-t,y:e.y-t,width:e.width+t*2,height:e.height+t*2});function ka(e,t){if(!t)return{at:e,dir:0};let n=Oa(t,ba);if(e.x<=n.x||e.x>=n.x+n.width||e.y<=n.y||e.y>=n.y+n.height)return{at:e,dir:0};let r=[{d:e.x-t.x,at:{x:n.x,y:e.y},dir:1},{d:t.x+t.width-e.x,at:{x:n.x+n.width,y:e.y},dir:1},{d:e.y-t.y,at:{x:e.x,y:n.y},dir:2},{d:t.y+t.height-e.y,at:{x:e.x,y:n.y+n.height},dir:2}];return r.sort((e,t)=>e.d-t.d),{at:r[0].at,dir:r[0].dir}}var Aa=class{ids=[];fs=[];get size(){return this.ids.length}push(e,t){let{ids:n,fs:r}=this,i=n.length;for(n.push(e),r.push(t);i>0;){let e=i-1>>1;if(r[e]<=t)break;n[i]=n[e],r[i]=r[e],i=e}n[i]=e,r[i]=t}pop(){let{ids:e,fs:t}=this,n=e[0],r=e.pop(),i=t.pop();if(e.length>0){let n=0;for(;;){let r=n*2+1;if(r>=e.length)break;let a=r+1<e.length&&t[r+1]<t[r]?r+1:r;if(t[a]>=i)break;e[n]=e[a],t[n]=t[a],n=a}e[n]=r,t[n]=i}return n}};function ja(e,t,n){let r=e[t];e[t]=r===Ea||r===n?n:Da}var Ma=(e,t)=>e!==Ea&&e!==t;function Na(e,t){let n=t.obstacles.map(e=>Oa(e,ba)),r=e.map(e=>({a:ka(e.a,e.aRect),b:ka(e.b,e.bRect)})),i=new Set,a=new Set,o=e=>{i.add(Q(e.x)),a.add(Q(e.y))},s=1/0,c=1/0,l=-1/0,u=-1/0,d=(e,t)=>{s=Math.min(s,e),c=Math.min(c,t),l=Math.max(l,e),u=Math.max(u,t)};for(let e of n)i.add(Q(e.x)).add(Q(e.x+e.width)),a.add(Q(e.y)).add(Q(e.y+e.height)),d(e.x,e.y),d(e.x+e.width,e.y+e.height);e.forEach((e,t)=>{for(let n of[e.a,e.b,r[t].a.at,r[t].b.at])o(n),d(n.x,n.y)});for(let e of t.fixed)for(let t of e.points)o(t);if(!isFinite(s))return e.map(()=>null);s-=xa,c-=xa,l+=xa,u+=xa;for(let e=Math.ceil(s/ya)*ya;e<=l;e+=ya)i.add(e);for(let e=Math.ceil(c/ya)*ya;e<=u;e+=ya)a.add(e);let f=[...i].filter(e=>e>=s&&e<=l).sort((e,t)=>e-t),p=[...a].filter(e=>e>=c&&e<=u).sort((e,t)=>e-t),m=f.length,ee=p.length,h=m*ee,g=new Map(f.map((e,t)=>[e,t])),_=new Map(p.map((e,t)=>[e,t])),v=e=>{let t=g.get(Q(e.x)),n=_.get(Q(e.y));return t===void 0||n===void 0?-1:n*m+t},y=(e,t,n)=>t>e.x+Ta&&t<e.x+e.width-Ta&&n>e.y+Ta&&n<e.y+e.height-Ta,b=(e,t,n)=>{let r=0;for(;r<e.length&&e[r]<=t+Ta;)r++;let i=e.length-1;for(;i>=0&&e[i]>=n-Ta;)i--;return[r,i]},te=(e,t)=>{let r=n[e],[i,a]=b(f,r.x,r.x+r.width),[o,s]=b(p,r.y,r.y+r.height);for(let e=o;e<=s;e++)for(let n=i;n<=a;n++)t(x,e*m+n);for(let e=o;e<=s;e++)for(let n=Math.max(0,i-1);n<=Math.min(m-2,a);n++)y(r,(f[n]+f[n+1])/2,p[e])&&t(S,e*m+n);for(let e=Math.max(0,o-1);e<=Math.min(ee-2,s);e++)for(let n=i;n<=a;n++)y(r,f[n],(p[e]+p[e+1])/2)&&t(C,e*m+n)},x=new Uint16Array(h),S=new Uint16Array(h),C=new Uint16Array(h),w=(e,t)=>void e[t]++,T=(e,t)=>void e[t]--;n.forEach((e,t)=>te(t,w));let E=new Int32Array(h).fill(Ea),D=new Int32Array(h).fill(Ea),O=new Int32Array(h).fill(Ea),k=new Int32Array(h).fill(Ea),A=(e,t,n)=>{let r=v(e),i=v(t);if(r<0||i<0)return;let a=r%m,o=(r-a)/m,s=i%m,c=(i-s)/m;if(o===c)for(let e=Math.min(a,s);e<=Math.max(a,s);e++)ja(E,o*m+e,n),e<Math.max(a,s)&&ja(O,o*m+e,n);else if(a===s)for(let e=Math.min(o,c);e<=Math.max(o,c);e++)ja(D,e*m+a,n),e<Math.max(o,c)&&ja(k,e*m+a,n)};for(let e of t.fixed)for(let t=1;t<e.points.length;t++)A(e.points[t-1],e.points[t],e.net);let ne=e.map((e,t)=>t).sort((t,n)=>Pa(e[t])-Pa(e[n])),re=e.map(()=>null),j=new Float64Array(h*3),M=new Int32Array(h*3),ie=new Uint8Array(h*3);for(let i of ne){let a=e[i],o=v(r[i].a.at),s=v(r[i].b.at);if(o<0||s<0)continue;let c=new Set([a.aRect,a.bRect].filter(Boolean).map(e=>t.obstacles.indexOf(e))),l=n.map((e,t)=>t).filter(e=>!c.has(e)&&[a.a,a.b,r[i].a.at,r[i].b.at].some(t=>y(n[e],t.x,t.y)));for(let e of l)te(e,T);let u=N(i,o,s);for(let e of l)te(e,w);u&&(re[i]=u)}return re;function N(t,n,i){let a=e[t],o=r[t].a.dir,s=r[t].b.dir;j.fill(1/0),M.fill(-1),ie.fill(0);let c=new Aa,l=f[i%m],u=p[(i-i%m)/m],d=e=>Math.abs(f[e%m]-l)+Math.abs(p[(e-e%m)/m]-u),h=n*3+o;j[h]=0,c.push(h,d(n));let g=-1;for(;c.size>0;){let e=c.pop();if(ie[e])continue;ie[e]=1;let t=e/3|0,n=e%3;if(t===i){g=e;break}let r=t%m,o=(t-r)/m,l=(r,o,l,u)=>{if(x[r]>0&&r!==i)return;let f=j[e]+l;n!==0&&n!==o&&(f+=Sa),Ma(o===1?D[r]:E[r],a.net)&&(f+=Ca),n!==0&&n!==o&&Ma(n===1?E[t]:D[t],a.net)&&(f+=Ca),Ma(u,a.net)&&(f+=l*wa),r===i&&s!==0&&o!==s&&(f+=Sa);let p=r*3+o;f<j[p]&&(j[p]=f,M[p]=e,c.push(p,f+d(r)))};r+1<m&&!S[t]&&l(t+1,1,f[r+1]-f[r],O[t]),r>0&&!S[t-1]&&l(t-1,1,f[r]-f[r-1],O[t-1]),o+1<ee&&!C[t]&&l(t+m,2,p[o+1]-p[o],k[t]),o>0&&!C[t-m]&&l(t-m,2,p[o]-p[o-1],k[t-m])}if(g<0)return null;let _=[];for(let e=g;e>=0;e=M[e]){let t=e/3|0,n=t%m;_.push({x:f[n],y:p[(t-n)/m]})}_.reverse();let v=Fa([a.a,..._,a.b]);for(let e=1;e<v.length;e++)A(v[e-1],v[e],a.net);return v.slice(1,-1)}}var Pa=e=>Math.abs(e.a.x-e.b.x)+Math.abs(e.a.y-e.b.y);function Fa(e){let t=[];for(let n of e){let e={x:Q(n.x),y:Q(n.y)},r=t[t.length-1];if(!(r&&r.x===e.x&&r.y===e.y)){if(t.length>=2){let n=t[t.length-2];(n.x===r.x&&r.x===e.x||n.y===r.y&&r.y===e.y)&&t.pop()}t.push(e)}}return t}function Ia(e){let t=new Map,n=e=>{let r=t.get(e)??e;if(r===e)return e;let i=n(r);return t.set(e,i),i};for(let r of e)t.set(n(r.from),n(r.to));let r=new Map;return e.map(e=>{let t=n(e.from);return r.has(t)||r.set(t,r.size),r.get(t)})}function La(e,t,n){let r=new Map(e.parts.map(e=>[e.id,e])),i=new Map(e.parts.map(e=>[e.id,n(e)])),a=new Map(e.parts.map(e=>[e.id,ca(e,i.get(e.id))])),o=e=>{let t=ee(e),n=t&&r.get(t.partId),o=n&&sa(n,i.get(n.id),t.pin);return o?{at:o,rect:a.get(n.id)}:null},s=Ia(e.wires),c=new Set(t.filter(t=>e.wires[t]&&!e.wires[t].locked)),l=[],u=[];if(e.wires.forEach((e,t)=>{let n=o(e.from),r=o(e.to);n&&r&&(c.has(t)?l.push({index:t,wire:{a:n.at,b:r.at,aRect:n.rect,bRect:r.rect,net:s[t]}}):u.push({points:[n.at,...e.points.map(([e,t])=>({x:e,y:t})),r.at],net:s[t]}))}),l.length===0)return{project:e,changed:0};let d=Na(l.map(e=>e.wire),{obstacles:[...a.values()],fixed:u}),f=0,p=[...e.wires];return l.forEach(({index:e},t)=>{let n=d[t];if(!n)return;let r=n.map(e=>[e.x,e.y]),i=p[e].points;i.length===r.length&&i.every(([e,t],n)=>e===r[n][0]&&t===r[n][1])||(p[e]={...p[e],points:r},f++)}),{project:f?{...e,wires:p}:e,changed:f}}var Ra=[{name:`red`,label:m(`红`),hex:`#e5484d`},{name:`black`,label:m(`黑`),hex:`var(--wire-black)`},{name:`green`,label:m(`绿`),hex:`#2f9e44`},{name:`blue`,label:m(`蓝`),hex:`#3b82f6`},{name:`yellow`,label:m(`黄`),hex:`#e8b100`},{name:`orange`,label:m(`橙`),hex:`#f08c00`},{name:`purple`,label:m(`紫`),hex:`#8e4ec6`},{name:`white`,label:m(`白`),hex:`#f4f4f5`},{name:`gray`,label:m(`灰`),hex:`#8b8d98`}],za=new Map(Ra.map(e=>[e.name,e.hex]));function Ba(e){return za.get(e)??e}var Va={high:{color:`#e5484d`,label:m(`高电平`)},low:{color:`#3b6fe0`,label:m(`低电平`)},floating:{color:`#9aa0aa`,label:m(`悬空`)},conflict:{color:`#f08c00`,label:m(`冲突`)}},$=n(),Ha=`application/x-mculab-part`,Ua=e=>le(e.type).geometry(e.props),Wa=0;function Ga(e){let t=l.getState().project,{project:n,changed:r}=La(t,e===null?t.wires.map((e,t)=>t):[e],Ua);r===0?c(t.wires.length===0?m(`画布上还没有导线`):m(`导线已经很整齐了`)):(u(()=>n),c(m(`已整理 {0} 根导线`,r),`info`,{label:m(`撤销`),run:()=>{let e=l.getState().project;e.parts!==n.parts||e.wires!==n.wires?c(m(`整理以后又改过画布，用 Ctrl+Z 一步步撤销吧`),`error`):d()}}))}var Ka={},qa=20,Ja=typeof matchMedia==`function`&&matchMedia(`(pointer: coarse)`).matches;function Ya(e){return e instanceof Element&&!!e.closest(`input, textarea, select, [contenteditable="true"], .monaco-editor`)}function Xa(e,t){if(e.clientWidth>0&&e.clientHeight>0)return t(),()=>{};let n=new ResizeObserver(()=>{e.clientWidth!==0&&e.clientHeight!==0&&(n.disconnect(),t())});return n.observe(e),()=>n.disconnect()}var Za=(0,z.memo)(function(e){let{part:t,geom:n,state:r,running:a}=e,o=le(t.type),s=o.Component,c=(0,z.useCallback)(e=>i(t.id,e),[t.id]),d=(0,z.useCallback)(()=>{l.setState({envFocus:t.id}),p(`environment`)},[t.id]),f=(0,z.useCallback)((e,n)=>u(r=>v(r,t.id,e,n),{group:`prop:${t.id}:${e}`}),[t.id]),m=a&&o.interactive;return(0,$.jsx)(`div`,{className:`part${t.locked?` locked`:``}${m?` operable`:``}`,"data-part":t.id,style:{left:t.x,top:t.y,width:n.width,height:n.height,transform:t.rotate?`rotate(${t.rotate}deg)`:void 0},children:(0,$.jsx)(s,{part:t,state:r,running:a,input:c,openEnv:d,setProp:f})})});function Qa({pos:e,level:t,toggling:n}){let r=2.4;return n?(0,$.jsxs)(`g`,{className:`pin-level-dot`,children:[(0,$.jsx)(`path`,{d:`M${e.x-r} ${e.y}A${r} ${r} 0 0 1 ${e.x+r} ${e.y}Z`,fill:Va.high.color}),(0,$.jsx)(`path`,{d:`M${e.x-r} ${e.y}A${r} ${r} 0 0 0 ${e.x+r} ${e.y}Z`,fill:Va.low.color})]}):(0,$.jsx)(`circle`,{className:`pin-level-dot`,cx:e.x,cy:e.y,r,fill:Va[t].color})}function $a({pin:e,project:t,level:n,toggling:i,screen:a}){let o=t.parts.find(t=>t.id===e.partId),s=o&&r(o.type),c=s?.pins.find(t=>t.name===e.pin)?.label;return(0,$.jsxs)(`div`,{className:`pin-tip`,style:{left:a.x+12,top:a.y-12},children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`b`,{children:e.pin}),c&&c!==e.pin&&(0,$.jsxs)(`span`,{className:`muted`,children:[` `,c]})]}),(0,$.jsxs)(`div`,{className:`muted`,children:[s?.label??o?.type,` · `,e.partId]}),n&&i?(0,$.jsxs)(`div`,{className:`pin-level`,children:[(0,$.jsx)(`i`,{style:{background:`linear-gradient(${Va.high.color} 50%, ${Va.low.color} 50%)`}}),m(`在高低电平之间来回跳（PWM、动态扫描）`)]}):n&&(0,$.jsxs)(`div`,{className:`pin-level`,children:[(0,$.jsx)(`i`,{style:{background:Va[n].color}}),Va[n].label]})]})}function eo(){let e=l(e=>e.project),t=l(e=>e.projectId),n=l(e=>e.selection),r=l(e=>e.canUndo),i=l(e=>e.canRedo),a=l(e=>e.highlight),c=l(e=>e.status),p=l(e=>e.frame),ee=c===`running`,h=(0,z.useRef)(null),[g,_]=(0,z.useState)({x:40,y:40,zoom:1}),[v,y]=(0,z.useState)(null),[b,x]=(0,z.useState)(null),[C,w]=(0,z.useState)(null),T=(0,z.useRef)(null),E=(0,z.useRef)(new Map),D=(0,z.useMemo)(()=>{let t=new Map;for(let n of e.parts)t.set(n.id,le(n.type).geometry(n.props));return t},[e.parts]),O=(0,z.useMemo)(()=>{let t=[];for(let n of e.parts){let e=D.get(n.id);for(let r of Object.keys(e.pins))t.push({ref:`${n.id}:${r}`,partId:n.id,pin:r,pos:sa(n,e,r)})}return t},[e.parts,D]),k=(0,z.useMemo)(()=>new Map(O.map(e=>[e.ref,e])),[O]),A=(0,z.useRef)({view:g,wiring:v,pins:O,project:e});A.current={view:g,wiring:v,pins:O,project:e};let ne=e=>{let t=h.current.getBoundingClientRect();return{x:e.clientX-t.left,y:e.clientY-t.top}},re=(e,t=!1)=>va(A.current.pins,e,t?Math.max(9,14/A.current.view.zoom):Math.max(4.5,6/A.current.view.zoom));(0,z.useLayoutEffect)(()=>{let e=h.current;return e?(y(null),Xa(e,()=>{let{project:t}=A.current,n=la(t.parts.map(e=>ca(e,le(e.type).geometry(e.props))));n&&_(ha(n,{width:e.clientWidth,height:e.clientHeight},48,1.6))})):void 0},[t]),(0,z.useEffect)(()=>(Ka.placeAtCenter=e=>{let t=h.current;f(`canvas`),Xa(t,()=>requestAnimationFrame(()=>Xi(e,ua(A.current.view,t.clientWidth/2,t.clientHeight/2))))},()=>{Ka.placeAtCenter=void 0}),[]),(0,z.useEffect)(()=>{let e=h.current,t=e=>{e.preventDefault();let t=e.deltaMode===1?e.deltaY*16:e.deltaY,n=Math.exp(-t*(e.ctrlKey?.01:.0015)),r=ne(e);_(e=>pa(e,n,r.x,r.y))};return e.addEventListener(`wheel`,t,{passive:!1}),()=>e.removeEventListener(`wheel`,t)},[]),(0,z.useEffect)(()=>{let e=e=>{if(!(Ya(e.target)||l.getState().dialog||!h.current?.offsetParent)){if((e.metaKey||e.ctrlKey)&&!e.altKey){let t=e.key.toLowerCase();t===`z`||t===`y`?(e.preventDefault(),t===`y`||e.shiftKey?o():d()):t===`c`&&!window.getSelection()?.toString()?na()&&e.preventDefault():t===`v`?ra()&&e.preventDefault():t===`d`&&l.getState().selection?.kind===`part`&&(e.preventDefault(),ia())}else e.altKey||(e.key===`Escape`?A.current.wiring?(y(null),e.preventDefault()):l.getState().selection&&(s(null),e.preventDefault()):e.key===`Delete`||e.key===`Backspace`?(e.preventDefault(),Ji()):(e.key===`r`||e.key===`R`)&&Yi())}};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[]);let j=e=>{let t=A.current.wiring;t&&e!==t.from&&(u(n=>{let r=S(n,t.from,e,t.points);return t.points.length>0?r:La(r,[r.wires.length-1],Ua).project}),y(null))},M=(e,t)=>{let n=l.getState().project.wires.flatMap((t,n)=>!t.locked&&(t.from.startsWith(`${e}:`)||t.to.startsWith(`${e}:`))?[n]:[]);n.length>0&&u(e=>La(e,n,Ua).project,{group:t,untimed:!0})},ie=t=>{if(t.button===2&&v){y(null);return}if(t.button!==0)return;let n=t.target;if(n.closest(`.canvas-ui`))return;let r=ne(t),i=t.pointerType===`touch`;if(i){let e=[...E.current][0];if(e&&E.current.size===1){E.current.set(t.pointerId,r),T.current?.kind===`wire`&&y(null),T.current?.kind===`move`&&T.current.moved&&M(T.current.id,T.current.group),T.current={kind:`pinch`,ids:[e[0],t.pointerId],a0:e[1],b0:r,view0:g},t.currentTarget.setPointerCapture(t.pointerId);return}}let a=ua(g,r.x,r.y),o=re(a,i);if(x(o),v){o&&o!==v.from?j(o):!o&&i?(E.current.set(t.pointerId,r),T.current={kind:`tap`,sx:r.x,sy:r.y,at:a},t.currentTarget.setPointerCapture(t.pointerId)):o||y(e=>e&&{...e,points:[...e.points,[Math.round(a.x),Math.round(a.y)]],cursor:a});return}if(o){i&&E.current.set(t.pointerId,r),y({from:o,points:[],cursor:a}),T.current={kind:`wire`,sx:r.x,sy:r.y,moved:!1},t.currentTarget.setPointerCapture(t.pointerId);return}let c=n.closest(`[data-wire]`);if(c){s({kind:`wire`,index:Number(c.getAttribute(`data-wire`))});return}let l=n.closest(`[data-part]`);if(l){let n=l.getAttribute(`data-part`),o=e.parts.find(e=>e.id===n);if(ee&&le(o.type).interactive||(i&&E.current.set(t.pointerId,r),s({kind:`part`,id:n}),o.locked))return;T.current={kind:`move`,id:n,dx:a.x-o.x,dy:a.y-o.y,sx:r.x,sy:r.y,moved:!1,group:`drag:${++Wa}`},t.currentTarget.setPointerCapture(t.pointerId)}else s(null),i&&E.current.set(t.pointerId,r),T.current={kind:`pan`,sx:r.x,sy:r.y,vx:g.x,vy:g.y},t.currentTarget.setPointerCapture(t.pointerId)},N=e=>{let t=ne(e),n=ua(g,t.x,t.y),r=T.current;if(E.current.has(e.pointerId)&&E.current.set(e.pointerId,t),r?.kind===`pinch`){let e=E.current.get(r.ids[0]),t=E.current.get(r.ids[1]);e&&t&&_(ma(r.view0,r.a0,r.b0,e,t));return}if(r?.kind===`tap`&&Math.hypot(t.x-r.sx,t.y-r.sy)>6){T.current={kind:`pan`,sx:r.sx,sy:r.sy,vx:g.x,vy:g.y};return}if(r?.kind===`pan`){_({...g,x:r.vx+t.x-r.sx,y:r.vy+t.y-r.sy});return}if(r?.kind===`move`){if(!r.moved&&Math.hypot(t.x-r.sx,t.y-r.sy)<3)return;if(!l.getState().project.parts.some(e=>e.id===r.id)){T.current=null;return}r.moved=!0,u(e=>te(e,r.id,n.x-r.dx,n.y-r.dy),{group:r.group,untimed:!0});return}r?.kind===`wire`&&Math.hypot(t.x-r.sx,t.y-r.sy)>4&&(r.moved=!0),v&&y(e=>e&&{...e,cursor:n});let i=re(n);i!==b&&x(i);let a=e.target.closest(`[data-wire]`),o=a?Number(a.getAttribute(`data-wire`)):null;o!==C&&w(o)},P=e=>{E.current.delete(e.pointerId);let t=T.current;if(T.current=null,t?.kind!==`pinch`){if(t?.kind===`tap`)y(e=>e&&{...e,points:[...e.points,[Math.round(t.at.x),Math.round(t.at.y)]],cursor:t.at});else if(t?.kind===`move`&&t.moved&&M(t.id,t.group),t?.kind===`wire`&&t.moved){let t=ne(e),n=re(ua(g,t.x,t.y),e.pointerType===`touch`);n&&n!==v?.from&&j(n)}}},ae=e=>{e.dataTransfer.types.includes(`application/x-mculab-part`)&&(e.preventDefault(),e.dataTransfer.dropEffect=`copy`)},oe=e=>{let t=e.dataTransfer.getData(Ha);if(!t)return;e.preventDefault();let n=ne(e);Xi(t,ua(g,n.x,n.y))},F=(0,z.useMemo)(()=>{let t=e.parts.map(e=>ca(e,D.get(e.id)));for(let n of e.wires)for(let[e,r]of n.points)t.push({x:e,y:r,width:0,height:0});let n=la(t)??{x:0,y:0,width:0,height:0},r=3e3;return{x:n.x-r,y:n.y-r,width:n.width+r*2,height:n.height+r*2}},[e.parts,e.wires,D]),se=c===`stopped`?void 0:p?.nets,ce=(0,z.useMemo)(()=>new Set(c===`running`?p?.toggling:void 0),[p,c]),ue=n?.kind===`part`?e.parts.find(e=>e.id===n.id):void 0,I=b?k.get(b):void 0,de=v?k.get(v.from):void 0,L=(0,z.useMemo)(()=>Ia(e.wires),[e.wires]),fe=(0,z.useMemo)(()=>{if(v)return null;if(b){let t=e.wires.findIndex(e=>e.from===b||e.to===b);return t>=0?L[t]:null}return C!==null&&C<L.length?L[C]:n?.kind===`wire`&&n.index<L.length?L[n.index]:null},[v,b,C,n,e.wires,L]),pe=(0,z.useMemo)(()=>{if(fe===null)return[];let t=new Set;return e.wires.forEach((e,n)=>{L[n]===fe&&t.add(e.from).add(e.to)}),[...t].flatMap(e=>e===b?[]:k.get(e)??[])},[fe,e.wires,L,k,b]),me=l(e=>{let t=Vi(e)?.steps[Hi(e)];return t?.wires&&!e.tutorialPassed?He(t,e.project).missing.join(` `):``}),he=(0,z.useMemo)(()=>me?me.split(` `).flatMap(e=>k.get(e)??[]):[],[me,k]),ge=(e,t)=>{let n=ca(e,D.get(e.id));return(0,$.jsx)(`div`,{className:t,style:{left:n.x-4,top:n.y-4,width:n.width+8,height:n.height+8}},t+e.id)},R=qa*g.zoom;return(0,$.jsxs)(`div`,{ref:h,className:`canvas${v?` wiring`:``}`,style:{backgroundSize:`${R}px ${R}px, ${R}px ${R}px, ${R*5}px ${R*5}px, ${R*5}px ${R*5}px`,backgroundPosition:`${g.x}px ${g.y}px`},onPointerDown:ie,onPointerMove:N,onPointerUp:P,onPointerCancel:e=>{E.current.delete(e.pointerId),T.current=null},onPointerLeave:()=>{x(null),w(null)},onContextMenu:e=>e.preventDefault(),onDragOver:ae,onDrop:oe,children:[(0,$.jsxs)(`div`,{className:`world`,style:{transform:`translate(${g.x}px, ${g.y}px) scale(${g.zoom})`},children:[e.parts.map(e=>(0,$.jsx)(Za,{part:e,geom:D.get(e.id),state:p?.parts[e.id],running:ee},e.id)),ue&&ge(ue,`sel-outline`),a&&e.parts.filter(e=>e.id===a).map(e=>ge(e,`hl-outline`)),(0,$.jsxs)(`svg`,{className:`overlay`,style:{left:F.x,top:F.y,width:F.width,height:F.height},viewBox:`${F.x} ${F.y} ${F.width} ${F.height}`,children:[e.wires.map((e,t)=>{let r=k.get(e.from)?.pos,i=k.get(e.to)?.pos;if(!r||!i)return null;let a=_a([r,...e.points.map(([e,t])=>({x:e,y:t})),i]),o=n?.kind===`wire`&&n.index===t,s=Ba(e.color);return(0,$.jsxs)(`g`,{className:`wire${o?` selected`:``}${fe===null?``:L[t]===fe?` net-hl`:` net-dim`}`,"data-wire":t,children:[o&&(0,$.jsx)(`path`,{d:a,className:`wire-halo`}),(0,$.jsx)(`path`,{d:a,className:`wire-shadow`}),(0,$.jsx)(`path`,{d:a,className:`wire-line`,stroke:s}),(0,$.jsx)(`path`,{d:a,className:`wire-hit`}),(0,$.jsx)(`circle`,{cx:r.x,cy:r.y,r:`1.9`,fill:s}),(0,$.jsx)(`circle`,{cx:i.x,cy:i.y,r:`1.9`,fill:s})]},t)}),v&&de&&(0,$.jsxs)(`g`,{className:`wire-draft`,children:[(0,$.jsx)(`path`,{d:_a([de.pos,...v.points.map(([e,t])=>({x:e,y:t})),v.cursor])}),v.points.map(([e,t],n)=>(0,$.jsx)(`circle`,{cx:e,cy:t,r:`2`},n))]}),se&&O.map(e=>{let t=se[e.ref];return t?(0,$.jsx)(Qa,{pos:e.pos,level:t,toggling:ce.has(e.ref)},e.ref):null}),pe.map(e=>(0,$.jsx)(`circle`,{className:`net-pin`,cx:e.pos.x,cy:e.pos.y,r:`3.6`},e.ref)),he.map(e=>(0,$.jsx)(`circle`,{className:`tut-pin`,cx:e.pos.x,cy:e.pos.y,r:`4.6`},`tut-${e.ref}`)),I&&(0,$.jsx)(`circle`,{className:`pin-hover`,cx:I.pos.x,cy:I.pos.y,r:`4.2`}),de&&(0,$.jsx)(`circle`,{className:`pin-from`,cx:de.pos.x,cy:de.pos.y,r:`4.2`})]})]}),I&&!T.current&&(0,$.jsx)($a,{pin:I,project:e,level:se?.[I.ref],toggling:ce.has(I.ref),screen:da(g,I.pos.x,I.pos.y)}),(0,$.jsxs)(`div`,{className:`canvas-ui zoom-bar`,children:[v&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`button`,{title:m(`不连这根线了（Esc）`),onClick:()=>y(null),children:m(`取消连线`)}),(0,$.jsx)(`span`,{className:`zoom-sep`})]}),(0,$.jsx)(`button`,{title:m(`缩小`),onClick:()=>_(e=>pa(e,1/1.25,h.current.clientWidth/2,h.current.clientHeight/2)),children:`−`}),(0,$.jsxs)(`span`,{children:[Math.round(g.zoom*100),`%`]}),(0,$.jsx)(`button`,{title:m(`放大`),onClick:()=>_(e=>pa(e,1.25,h.current.clientWidth/2,h.current.clientHeight/2)),children:`+`}),(0,$.jsx)(`button`,{title:m(`显示全部元件`),onClick:()=>{let t=h.current,n=la(e.parts.map(e=>ca(e,D.get(e.id))));n&&_(ha(n,{width:t.clientWidth,height:t.clientHeight},48,1.6))},children:m(`适应`)}),(0,$.jsx)(`span`,{className:`zoom-sep`}),(0,$.jsx)(`button`,{title:m(`撤销画布上的上一步改动（Ctrl+Z）`),"aria-label":m(`撤销`),disabled:!r,onClick:()=>d(),children:`↶`}),(0,$.jsx)(`button`,{title:m(`重做（Ctrl+Shift+Z）`),"aria-label":m(`重做`),disabled:!i,onClick:()=>o(),children:`↷`}),(0,$.jsx)(`span`,{className:`zoom-sep`}),(0,$.jsx)(`button`,{title:n?.kind===`wire`?m(`把选中的这根线重新走成横平竖直、绕开元件`):m(`把所有导线重新走成横平竖直、绕开元件、互不重叠（开发板上锁定的线不动）；整理后可以撤销`),onClick:()=>Ga(n?.kind===`wire`?n.index:null),children:n?.kind===`wire`?m(`整理这根线`):m(`整理导线`)})]}),(0,$.jsx)(`div`,{className:`canvas-ui canvas-hint`,children:v?m(`连线中：点另一个引脚完成，点空白处加拐点，{0}`,m(Ja?`点右下角的"取消连线"`:`Esc 取消`)):m(ee?`运行中：可以点按键、拨码开关；接线随时可改`:Ja?`一根手指拖空白处平移，两根手指缩放；从引脚拖到另一个引脚连线，会自动绕开元件`:`拖动空白处平移，滚轮缩放；从引脚拖到另一个引脚连线，会自动绕开元件`)})]})}export{He as _,Ba as a,Ji as c,Vi as d,Ki as f,We as g,Bi as h,Ra as i,ia as l,qi as m,Ha as n,La as o,Hi as p,Ka as r,sa as s,eo as t,Yi as u};