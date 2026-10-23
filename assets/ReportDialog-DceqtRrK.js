const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/bom-DZQ2Bj27.js","assets/bom-BsT_Wdtk.js","assets/part-meta-DZCC22S8.js","assets/types-DexORVjg.js","assets/headers-DZTnK8Af.js","assets/views-jkeJw19H.js","assets/views-cwGBMCZH.js","assets/jsx-runtime-Cx0HxCDb.js","assets/layout-Doi9LJDZ.js","assets/lcd1602-font-a00-D2wjjHmX.js","assets/export-image-CN288rST.js","assets/i18n-DkINFNXl.js"])))=>i.map(i=>d[i]);
import{i as e,n as t,t as n}from"./jsx-runtime-Cx0HxCDb.js";import{n as r,t as i}from"./part-meta-DZCC22S8.js";import{m as a,r as o}from"./store-BfXgc25t.js";import{r as s,t as c}from"./i18n-DkINFNXl.js";import{r as l}from"./build-Bm97g0Mz.js";import{t as u}from"./preload-helper-BLdHbfdN.js";import{a as d,i as f,o as p,r as m}from"./serial-format-eLN0zGRE.js";import{t as h}from"./Modal-oqZiSrr7.js";var g=e(t(),1),_={name:``,number:``,className:``,date:``,purpose:``,principle:``,observation:``,conclusion:``,answers:[]},v=[`name`,`number`,`className`],y=e=>e.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),b=e=>y(e).replace(/\n/g,`<br>`),x=[`一`,`二`,`三`,`四`,`五`,`六`,`七`,`八`,`九`,`十`];function S(e){return`${+(e/1e6).toFixed(4)}MHz`}function C(e){let t=e=>String(e).padStart(2,`0`);return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}`}function w(e,t,n,r=3){return`<div class="fill" contenteditable="true" data-note="${e}" data-placeholder="${y(n)}" style="min-height:${r*1.8}em">${b(t)}</div>`}function T(e){return e.split(`
`).filter(e=>e.trim()).map(e=>`<p>${y(e)}</p>`).join(``)}function E(e,t){let n=t.replace(/\n$/,``).split(`
`),r=String(n.length).length,i=n.map((e,t)=>`<span class="ln">${String(t+1).padStart(r,` `)}</span>${y(e.replace(/\t/g,`    `))}`).join(`
`);return`<h3>${y(e)}</h3><pre class="code">${i}</pre>`}function D(e,t){let{lesson:n}=e,r=[];r.push([s(`实验目的`),w(`purpose`,t.purpose,s(`写下这次实验要学会什么`))]);let i=e.parts.map(e=>`<tr><td>${y(s(e.label))}</td><td>${y(e.spec)}</td><td class="n">${e.ids.length}</td><td>${y(e.ids.join(` `))}</td></tr>`).join(``);r.push([s(`实验器材`),`<p>${y(s(`仿真平台：mculab 网页单片机实验室（{0}，晶振 {1}）`,e.chip,S(e.clockHz)))}</p>`+(i?`<table><thead><tr><th>${y(s(`元件`))}</th><th>${y(s(`规格`))}</th><th>${y(s(`数量`))}</th><th>${y(s(`编号`))}</th></tr></thead><tbody>${i}</tbody></table>`:``)]),r.push([s(`实验原理`),n?.principle?T(n.principle):w(`principle`,t.principle,s(`写下用到的原理`),4)]);let a=e.pins.map(e=>`<tr><td>${y(e.pin)}${e.alt?` <span class="alt">${y(e.alt)}</span>`:``}</td><td>${y(e.to.join(`；`))}</td></tr>`).join(``);r.push([s(`电路连接`),(n?.wiring?T(n.wiring):``)+(e.diagram?`<figure class="diagram">${e.diagram}<figcaption>${y(s(`接线图`))}</figcaption></figure>`:`<p class="muted">${y(s(`生成报告时画布没有显示，没截到接线图`))}</p>`)+(a?`<table class="pins"><thead><tr><th>${y(s(`单片机引脚`))}</th><th>${y(s(`接到`))}</th></tr></thead><tbody>${a}</tbody></table>`:``)]);let o=e.build?`<p class="muted">${y(s(`编译通过，程序 {0} 字节（共 {1} 字节）`,e.build.size,e.build.flashBytes))}</p>`:`<p class="muted">${y(s(`生成报告时还没有编译`))}</p>`;r.push([s(`程序代码`),Object.entries(e.files).map(([e,t])=>E(e,t)).join(``)+o]);let l=e.serial.map(({label:e,text:t})=>{let n=t.length>3e3?`…${t.slice(-3e3)}`:t;return`<h3>${y(s(`串口输出：{0}`,e))}</h3><pre class="serial">${y(n)}</pre>`}).join(``),u=e.problems.length?`<h3>${y(s(`仿真中发现的问题`))}</h3><ul>${e.problems.map(e=>`<li>${y(e.message)}${e.where?` <span class="muted">（${y(e.where)}）</span>`:``}</li>`).join(``)}</ul>`:``;if(r.push([s(`实验现象与结果`),(n?.phenomenon?`<h3>${y(s(`预期现象`))}</h3>${T(n.phenomenon)}`:``)+l+u+`<h3>${y(s(`观察记录`))}</h3>${w(`observation`,t.observation,s(`写下运行时看到的现象、测到的数据`),4)}`]),n?.tryIt.length){let e=n.tryIt.map((e,n)=>`<li><div>${b(e)}</div>${w(`answers.${n}`,t.answers[n]??``,s(`写下你的做法和结果`),2)}</li>`).join(``);r.push([s(`思考题`),`<ol class="questions">${e}</ol>`])}r.push([s(`实验结论`),w(`conclusion`,t.conclusion,s(`写下这次实验的结论和体会`),4)]);let d=r.map(([e,t],n)=>`<section><h2>${c===`en`?`${n+1}. `:`${x[n]}、`}${y(e)}</h2>${t}</section>`).join(`
`),f=(e,t,n)=>`<label>${y(e)}<input data-note="${t}" value="${y(n)}"></label>`;return`<!doctype html>
<html lang="${c===`en`?`en`:`zh-CN`}">
<head>
<meta charset="utf-8">
<title>${y(s(`{0} 实验报告`,e.title))}</title>
<style>${O}</style>
</head>
<body>
<div class="toolbar">
  <button type="button" data-action="print">${y(s(`打印 / 存成 PDF`))}</button>
  <span>${y(s(`灰色框里可以直接填写，填的内容记在这台电脑的浏览器里；打印时这一栏不会印出来`))}</span>
</div>
<main>
<h1>${y(s(`单片机实验报告`))}</h1>
<div class="info">
  <div class="title">${y(s(`实验名称`))}：<b>${y(e.title)}</b></div>
  ${f(s(`姓名`),`name`,t.name)}${f(s(`学号`),`number`,t.number)}${f(s(`班级`),`className`,t.className)}${f(s(`日期`),`date`,t.date||C(e.generatedAt))}
</div>
${d}
<footer>${y(s(`由 mculab 生成于 {0}`,`${C(e.generatedAt)} ${e.generatedAt.toTimeString().slice(0,5)}`))}</footer>
</main>
</body>
</html>
`}var O=`
:root { color-scheme: light; }
* { box-sizing: border-box; }
body { margin: 0; background: #f2f2f4; color: #1d1d1f; font: 14px/1.7 -apple-system, "PingFang SC", "Microsoft YaHei", "Noto Sans CJK SC", sans-serif; }
.toolbar { position: sticky; top: 0; z-index: 1; display: flex; gap: 12px; align-items: center; padding: 10px 16px; background: #fff; border-bottom: 1px solid #ddd; font-size: 13px; color: #555; }
.toolbar button { font: inherit; padding: 6px 14px; border: 0; border-radius: 6px; background: #2563eb; color: #fff; cursor: pointer; }
main { max-width: 210mm; margin: 16px auto; padding: 18mm 16mm; background: #fff; box-shadow: 0 1px 4px rgba(0,0,0,.12); }
h1 { margin: 0 0 12px; text-align: center; font-size: 22px; letter-spacing: 2px; }
h2 { margin: 22px 0 8px; font-size: 16px; border-bottom: 1px solid #ccc; padding-bottom: 2px; }
h3 { margin: 12px 0 4px; font-size: 14px; }
p { margin: 4px 0; }
.info { display: flex; flex-wrap: wrap; gap: 6px 18px; padding: 8px 0 4px; border-bottom: 2px solid #1d1d1f; }
.info .title { flex-basis: 100%; }
.info label { display: flex; gap: 4px; align-items: baseline; }
.info input { width: 9em; font: inherit; border: 0; border-bottom: 1px solid #999; background: #f6f6f8; padding: 0 4px; }
.fill { border: 1px dashed #bbb; background: #f6f6f8; border-radius: 4px; padding: 4px 8px; white-space: pre-wrap; outline: none; }
.fill:empty::before { content: attr(data-placeholder); color: #999; }
table { width: 100%; border-collapse: collapse; margin: 6px 0; font-size: 13px; }
th, td { border: 1px solid #bbb; padding: 3px 6px; text-align: left; vertical-align: top; }
th { background: #f0f0f2; }
td.n { text-align: center; width: 4em; }
.alt { color: #777; font-size: 12px; }
.muted { color: #777; font-size: 13px; }
.diagram { margin: 8px 0; text-align: center; }
.diagram svg { width: 100%; height: auto; max-height: 200mm; }
figcaption { font-size: 12px; color: #777; }
pre { margin: 4px 0; padding: 6px 8px; border: 1px solid #ddd; border-radius: 4px; background: #fafafa; font: 12px/1.5 ui-monospace, Menlo, Consolas, monospace; white-space: pre-wrap; word-break: break-all; }
.code .ln { color: #aaa; margin-right: 10px; user-select: none; }
.questions li { margin-bottom: 8px; }
footer { margin-top: 24px; text-align: right; font-size: 12px; color: #999; }
@media print {
  @page { size: A4; margin: 14mm 12mm; }
  body { background: #fff; }
  .toolbar { display: none; }
  main { max-width: none; margin: 0; padding: 0; box-shadow: none; }
  .fill { border: 0; background: none; padding: 0 0 0 2px; border-bottom: 1px solid #bbb; border-radius: 0; }
  .fill:empty::before { content: ''; }
  .info input { background: none; }
  h2, h3 { break-after: avoid; }
  table, figure, li { break-inside: avoid; }
}
`,k=`mculab.report.student`,A=e=>`mculab.report.${e}`;function j(e){try{let t=JSON.parse(localStorage.getItem(e)??`null`);return t&&typeof t==`object`?t:{}}catch{return{}}}function M(e){let t={...j(A(e)),...j(k)},n={..._,answers:[]};for(let e of Object.keys(_)){let r=t[e];e===`answers`?n.answers=Array.isArray(r)?r.map(e=>typeof e==`string`?e:``):[]:typeof r==`string`&&(n[e]=r)}return n}function N(e,t){let n={},r={...t};for(let e of v)n[e]=t[e],delete r[e];try{localStorage.setItem(k,JSON.stringify(n)),localStorage.setItem(A(e),JSON.stringify(r))}catch{}}async function P(){let{project:e}=a.getState(),t=e.lesson?.example;if(t){let e=(await p()).EXAMPLES.find(e=>e.id===t);if(e)return d(f(e.create().files))}return d(f(e.files))}async function F(){let[{partsList:e,pinTable:t},{partView:n},{captureCanvasSvg:o}]=await Promise.all([u(()=>import(`./bom-DZQ2Bj27.js`),__vite__mapDeps([0,1,2,3,4])),u(()=>import(`./views-jkeJw19H.js`),__vite__mapDeps([5,6,7,2,8,9])),u(()=>import(`./export-image-CN288rST.js`),__vite__mapDeps([10,11]))]),c=await P(),d=a.getState(),{project:f}=d,p=r(f.parts),h=document.querySelector(`.canvas .world`),g=h&&f.parts.length?o(h,f.parts.map(e=>({id:e.id,x:e.x,y:e.y,rotate:e.rotate,...n(e.type).geometry(e.props)}))):null,_=e=>{let t=f.parts.find(t=>t.id===e),n=t&&i(t.type);return n?`${e}（${s(n.label)}）`:e};return{title:c?.title??d.projectName,chip:p.chip,clockHz:p.clockHz,lesson:c,parts:e(f),pins:t(f),files:f.files,build:d.build&&d.build.key===l(f.files)?{size:d.build.size,flashBytes:p.flashBytes}:null,serial:Object.entries(d.serial).filter(([,e])=>e.bytes.length>0).map(([e,t])=>({label:_(e),text:m(t.bytes)})),problems:d.problems.map(e=>({message:e.hint??e.message,where:e.file?`${e.file}${e.line?`:${e.line}`:``}`:e.source})),diagram:g,generatedAt:new Date}}async function I(){let e=await F(),t=a.getState().projectId,n=M(t);return{html:D(e,n),projectId:t,notes:n}}function L(e,t,n){let r=e.document,i={...n,answers:[...n.answers]};for(let e of r.querySelectorAll(`[data-note]`))e.addEventListener(`input`,()=>{let n=e.dataset.note,r=e.tagName===`INPUT`?e.value:e.innerText.replace(/\n$/,``);n.startsWith(`answers.`)?i.answers[Number(n.slice(8))]=r:n in _&&(i[n]=r),N(t,i)});r.querySelector(`[data-action="print"]`)?.addEventListener(`click`,()=>e.print())}var R=n();function z({onClose:e}){let[t,n]=(0,g.useState)(null),r=(0,g.useRef)(null);return(0,g.useEffect)(()=>{let e=!0;return I().then(t=>e&&n(t),t=>e&&n({error:o(t)})),()=>{e=!1}},[]),(0,R.jsxs)(h,{title:s(`实验报告`),onClose:e,className:`report`,children:[t===null&&(0,R.jsx)(`p`,{className:`muted`,children:s(`正在生成实验报告…`)}),t&&`error`in t&&(0,R.jsx)(`p`,{className:`muted`,children:s(`实验报告生成失败：{0}`,t.error)}),t&&`html`in t&&(0,R.jsx)(`iframe`,{ref:r,className:`report-frame`,title:s(`实验报告`),srcDoc:t.html,onLoad:()=>{let e=r.current?.contentWindow;e&&L(e,t.projectId,t.notes)}})]})}export{z as ReportDialog};