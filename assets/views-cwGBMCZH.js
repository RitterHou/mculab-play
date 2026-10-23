import{i as e,n as t,t as n}from"./jsx-runtime-Cx0HxCDb.js";import{C as r,D as i,F as a,O as o,P as s,c,d as l,f as u,k as d,l as f,p,s as ee,t as te,u as ne,w as re}from"./part-meta-DZCC22S8.js";import{a as ie,i as ae,n as oe,r as se,t as ce}from"./layout-Doi9LJDZ.js";import{t as le}from"./lcd1602-font-a00-D2wjjHmX.js";var m=n();function ue(e){let t=Math.max(72,e.pins.length*12+12),n={};return e.pins.forEach((e,t)=>n[e.name]={x:12+t*12,y:50}),{geometry:()=>({width:t,height:56,pins:n}),Component:()=>(0,m.jsxs)(`svg`,{width:t,height:56,viewBox:`0 0 ${t} 56`,style:{display:`block`},children:[(0,m.jsx)(`rect`,{x:`0.5`,y:`0.5`,width:t-1,height:55,rx:`4`,fill:`#f4f5f7`,stroke:`#9aa1ab`}),(0,m.jsx)(`text`,{x:t/2,y:`20`,fontSize:`10`,fill:`#333`,textAnchor:`middle`,children:e.label}),e.pins.map(e=>(0,m.jsxs)(`g`,{children:[(0,m.jsx)(`text`,{x:n[e.name].x,y:43,fontSize:`5`,fill:`#666`,textAnchor:`middle`,children:e.name}),(0,m.jsx)(`rect`,{x:n[e.name].x-1.8,y:48.2,width:`3.6`,height:`3.6`,fill:`#b08d2c`})]},e.name))]})}}var h=e(t(),1),de=`ui-monospace, SFMono-Regular, Menlo, monospace`;function fe({names:e,side:t,pins:n,alt:r,pitch:i}){let a=n[e[0]],o=t===`left`;return(0,m.jsxs)(`g`,{children:[(0,m.jsx)(`rect`,{x:a.x-5,y:a.y-5,width:`10`,height:(e.length-1)*i+10,rx:`1`,fill:`#141414`}),e.map(e=>{let t=n[e];return(0,m.jsxs)(`g`,{children:[(0,m.jsx)(`rect`,{x:t.x-1.8,y:t.y-1.8,width:`3.6`,height:`3.6`,fill:`#d4af37`}),(0,m.jsx)(`text`,{x:o?t.x+9:t.x-9,y:t.y+2.2,fontSize:`6.5`,fill:`#ffffff`,fontFamily:de,textAnchor:o?`start`:`end`,children:e}),r[e]&&(0,m.jsx)(`text`,{x:o?t.x+31:t.x-31,y:t.y+2,fontSize:`5`,fill:`#a8dcbf`,fontFamily:`ui-monospace, SFMono-Regular, Menlo, monospace`,textAnchor:o?`start`:`end`,children:r[e]})]},e)})]})}function pe({pins:e}){return(0,m.jsxs)(`g`,{children:[(0,m.jsx)(`rect`,{x:`117`,y:`11`,width:`7`,height:`4`,rx:`1`,fill:`#ff4a3d`}),(0,m.jsx)(`text`,{x:`120.5`,y:`23`,fontSize:`5`,fill:`#cfe9dc`,textAnchor:`middle`,children:`PWR`}),(0,m.jsx)(`rect`,{x:e.VCC.x-5,y:e.VCC.y-5,width:e.GND.x-e.VCC.x+10,height:`10`,rx:`1`,fill:`#141414`}),Object.entries(e).map(([e,t])=>(0,m.jsxs)(`g`,{children:[(0,m.jsx)(`rect`,{x:t.x-1.8,y:t.y-1.8,width:`3.6`,height:`3.6`,fill:`#d4af37`}),(0,m.jsx)(`text`,{x:t.x,y:t.y+14,fontSize:`6`,fill:`#ffffff`,textAnchor:`middle`,fontFamily:de,children:e})]},e))]})}function me({x:e,y:t,labelColor:n,running:r,input:i}){let[a,o]=(0,h.useState)(!1),s=e=>{e!==a&&(o(e),i({reset:e}))};return(0,m.jsxs)(`g`,{className:`canvas-ui`,style:{cursor:r?`pointer`:`default`},onPointerDown:()=>r&&s(!0),onPointerUp:()=>s(!1),onPointerLeave:()=>s(!1),onPointerCancel:()=>s(!1),children:[(0,m.jsx)(`title`,{children:r?`复位键：按住时单片机停在复位状态（引脚都是高电平），松开后程序从头运行；外面接的元件（LCD 这类）不会跟着复位`:`运行时按这里复位单片机`}),(0,m.jsx)(`rect`,{x:e,y:t,width:`20`,height:`20`,rx:`1.5`,fill:`#2a2a2c`}),(0,m.jsx)(`circle`,{cx:e+10,cy:t+10,r:a?4.8:5.5,fill:a?`#3c3c40`:`#56565a`}),(0,m.jsx)(`text`,{x:e+10,y:t+30,fontSize:`5.5`,fill:n,textAnchor:`middle`,children:`RST`})]})}var he={"P3.0":`RXD`,"P3.1":`TXD`,"P3.2":`INT0`,"P3.3":`INT1`,"P3.4":`T0`,"P3.5":`T1`,"P3.6":`WR`,"P3.7":`RD`},ge={STC89C52:{"P1.0":`T2`,"P1.1":`T2EX`,...he},AT89C51:he,STC12C5A60S2:{"P1.3":`PWM0`,"P1.4":`PWM1`,...he},STC8H8K64U:{"P1.0":`PWM1P`,"P1.1":`PWM1N`,...he,"P3.6":`INT2`,"P3.7":`INT3`}},g={x:74,y:36,w:52,h:200},_e={STC89C52:[`STC89C52RC`,`40I-PDIP40`],AT89C51:[`AT89C51`,`24PU`],STC12C5A60S2:[`STC12C5A60S2`,`35I-PDIP40`],STC8H8K64U:[`STC8H8K64U`,`45I-LQFP64`]};function ve({chip:e}){let[t,n]=_e[e]??_e.STC89C52,r=Array.from({length:20},(e,t)=>g.y+8+t*se);return(0,m.jsxs)(`g`,{children:[r.map(e=>(0,m.jsxs)(`g`,{children:[(0,m.jsx)(`rect`,{x:g.x-5,y:e-1.6,width:`5`,height:`3.2`,fill:`#c3c7cc`}),(0,m.jsx)(`rect`,{x:g.x+g.w,y:e-1.6,width:`5`,height:`3.2`,fill:`#c3c7cc`})]},e)),(0,m.jsx)(`rect`,{x:g.x,y:g.y,width:g.w,height:g.h,rx:`2`,fill:`#1c1c1e`}),(0,m.jsx)(`path`,{d:`M${g.x+g.w/2-6} ${g.y} a6 6 0 0 0 12 0`,fill:`#0e0e0f`}),(0,m.jsx)(`circle`,{cx:g.x+7,cy:g.y+10,r:`2`,fill:`#2e2e31`}),(0,m.jsxs)(`g`,{transform:`translate(${g.x+g.w/2} ${g.y+g.h/2}) rotate(-90)`,children:[(0,m.jsx)(`text`,{y:`-3`,fontSize:`10`,fill:`#e6e6e6`,textAnchor:`middle`,fontFamily:de,fontWeight:`600`,children:t}),(0,m.jsx)(`text`,{y:`10`,fontSize:`6`,fill:`#9a9a9e`,textAnchor:`middle`,fontFamily:de,children:n})]})]})}function ye({chip:e,clockHz:t,p0Pullup:n,running:r,input:i}){let a=ce[`P0.0`];return(0,m.jsxs)(`svg`,{width:200,height:290,viewBox:`0 0 200 290`,style:{display:`block`},children:[(0,m.jsx)(`rect`,{x:`0.5`,y:`0.5`,width:199,height:289,rx:`6`,fill:`#1e6b4a`,stroke:`#14513a`}),[[8,8],[192,282],[8,282]].map(([e,t])=>(0,m.jsx)(`circle`,{cx:e,cy:t,r:`4`,fill:`#f3f3f0`,stroke:`#b9bdb5`},`${e},${t}`)),(0,m.jsx)(`text`,{x:`18`,y:`17`,fontSize:`9`,fill:`#ffffff`,fontWeight:`600`,fontFamily:de,children:e in _e?e:`STC89C52`}),(0,m.jsx)(`text`,{x:`18`,y:`28`,fontSize:`7`,fill:`#cfe9dc`,children:`最小系统板`}),(0,m.jsx)(pe,{pins:ae}),(0,m.jsx)(fe,{names:oe,side:`left`,pins:ce,alt:ge[e]??ge.STC89C52,pitch:se}),(0,m.jsx)(fe,{names:ie,side:`right`,pins:ce,alt:ge[e]??ge.STC89C52,pitch:se}),n&&(0,m.jsxs)(`g`,{children:[(0,m.jsx)(`rect`,{x:`53`,y:a.y-4,width:`7`,height:75.2,rx:`1.2`,fill:`#202022`}),(0,m.jsx)(`text`,{transform:`translate(58.5 ${a.y+33.6}) rotate(-90)`,fontSize:`5`,fill:`#e0e0e0`,textAnchor:`middle`,fontFamily:`ui-monospace, SFMono-Regular, Menlo, monospace`,children:`103`})]}),(0,m.jsx)(ve,{chip:e}),(0,m.jsx)(`rect`,{x:`24`,y:`250`,width:`34`,height:`13`,rx:`6.5`,fill:`#cfd3d8`,stroke:`#8c9198`}),(0,m.jsx)(`text`,{x:`41`,y:`258.6`,fontSize:`5.5`,fill:`#33373c`,textAnchor:`middle`,fontFamily:de,children:t===12e6?`12.000`:`11.0592`}),(0,m.jsx)(`rect`,{x:`62`,y:`251`,width:`5`,height:`10`,rx:`1`,fill:`#c8a24a`}),(0,m.jsx)(`rect`,{x:`70`,y:`251`,width:`5`,height:`10`,rx:`1`,fill:`#c8a24a`}),(0,m.jsx)(`text`,{x:`41`,y:`274`,fontSize:`5`,fill:`#cfe9dc`,textAnchor:`middle`,children:`晶振`}),(0,m.jsx)(me,{x:142,y:246,labelColor:`#cfe9dc`,running:r,input:i})]})}var be={geometry:()=>({width:200,height:290,pins:ce}),Component:({part:e,running:t,input:n})=>(0,m.jsx)(ye,{chip:String(e.props.chip??`STC89C52`),clockHz:Number(e.props.clockHz),p0Pullup:e.props.p0Pullup===!0,running:t,input:n})},xe=9.6,Se=60,Ce=12,we=188,Te=e=>Array.from({length:8},(t,n)=>`P${e}.${n}`),Ee=[...Te(0),...Te(2)],De=[...Te(1),...Te(3),...Te(4)],Oe={VCC:{x:150,y:14},GND:{x:169.2,y:14}},ke={...Object.fromEntries(Ee.map((e,t)=>[e,{x:Ce,y:Se+t*xe}])),...Object.fromEntries(De.map((e,t)=>[e,{x:we,y:Se+t*xe}])),...Oe},Ae={x:68,y:96,size:52};function je(){let{x:e,y:t,size:n}=Ae,r=(n-8)/10,i=Array.from({length:11},(e,t)=>4+t*r);return(0,m.jsxs)(`g`,{children:[i.map(r=>(0,m.jsxs)(`g`,{fill:`#c3c7cc`,children:[(0,m.jsx)(`rect`,{x:e-4,y:t+r-.9,width:`4`,height:`1.8`}),(0,m.jsx)(`rect`,{x:e+n,y:t+r-.9,width:`4`,height:`1.8`}),(0,m.jsx)(`rect`,{x:e+r-.9,y:t-4,width:`1.8`,height:`4`}),(0,m.jsx)(`rect`,{x:e+r-.9,y:t+n,width:`1.8`,height:`4`})]},r)),(0,m.jsx)(`rect`,{x:e,y:t,width:n,height:n,rx:`1.5`,fill:`#1c1c1e`}),(0,m.jsx)(`circle`,{cx:e+5,cy:t+n-5,r:`1.6`,fill:`#2e2e31`}),(0,m.jsx)(`text`,{x:e+n/2,y:t+n/2-1,fontSize:`6.2`,fill:`#e6e6e6`,textAnchor:`middle`,fontFamily:de,fontWeight:`600`,children:`STC15F2K60S2`}),(0,m.jsx)(`text`,{x:e+n/2,y:t+n/2+8,fontSize:`4.5`,fill:`#9a9a9e`,textAnchor:`middle`,fontFamily:de,children:`28I-LQFP44`})]})}function Me({clockHz:e,running:t,input:n}){return(0,m.jsxs)(`svg`,{width:200,height:340,viewBox:`0 0 200 340`,style:{display:`block`},children:[(0,m.jsx)(`rect`,{x:`0.5`,y:`0.5`,width:199,height:339,rx:`6`,fill:`#1d4f8c`,stroke:`#143a68`}),[[8,332],[192,332]].map(([e,t])=>(0,m.jsx)(`circle`,{cx:e,cy:t,r:`4`,fill:`#f3f3f0`,stroke:`#b9bdb5`},`${e},${t}`)),(0,m.jsx)(`text`,{x:`12`,y:`17`,fontSize:`9`,fill:`#ffffff`,fontWeight:`600`,fontFamily:de,children:`STC15F2K60S2`}),(0,m.jsx)(`text`,{x:`12`,y:`28`,fontSize:`7`,fill:`#cfe0f2`,children:`最小系统板（1T）`}),(0,m.jsx)(pe,{pins:Oe}),(0,m.jsx)(fe,{names:Ee,side:`left`,pins:ke,alt:a,pitch:xe}),(0,m.jsx)(fe,{names:De,side:`right`,pins:ke,alt:a,pitch:xe}),(0,m.jsx)(je,{}),(0,m.jsx)(`rect`,{x:`22`,y:`296`,width:`44`,height:`13`,rx:`2`,fill:`#2a2a2c`}),(0,m.jsxs)(`text`,{x:`44`,y:`304.6`,fontSize:`5.5`,fill:`#e6e6e6`,textAnchor:`middle`,fontFamily:de,children:[e===11059200?`11.0592`:`12.000`,` MHz`]}),(0,m.jsx)(`text`,{x:`44`,y:`319`,fontSize:`5`,fill:`#cfe0f2`,textAnchor:`middle`,children:`内部 RC 时钟`}),(0,m.jsx)(me,{x:88,y:293,labelColor:`#cfe0f2`,running:t,input:n})]})}var Ne={geometry:()=>({width:200,height:340,pins:ke}),Component:({part:e,running:t,input:n})=>(0,m.jsx)(Me,{clockHz:Number(e.props.clockHz),running:t,input:n})},Pe=globalThis,Fe=Pe.ShadowRoot&&(Pe.ShadyCSS===void 0||Pe.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,Ie=Symbol(),Le=new WeakMap,Re=class{constructor(e,t,n){
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
if(this._$cssResult$=!0,n!==Ie)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Fe&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Le.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Le.set(t,e))}return e}toString(){return this.cssText}},ze=e=>new Re(typeof e==`string`?e:e+``,void 0,Ie),Be=(e,...t)=>new Re(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,Ie),Ve=(e,t)=>{if(Fe)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=Pe.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},He=Fe?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return ze(t)})(e):e,{is:Ue,defineProperty:We,getOwnPropertyDescriptor:Ge,getOwnPropertyNames:Ke,getOwnPropertySymbols:qe,getPrototypeOf:Je}=Object,Ye=globalThis,Xe=Ye.trustedTypes,Ze=Xe?Xe.emptyScript:``,Qe=Ye.reactiveElementPolyfillSupport,$e=(e,t)=>e,et={toAttribute(e,t){
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
switch(t){case Boolean:e=e?Ze:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},tt=(e,t)=>!Ue(e,t),nt={attribute:!0,type:String,converter:et,reflect:!1,useDefault:!1,hasChanged:tt};Symbol.metadata??=Symbol(`metadata`),Ye.litPropertyMetadata??=new WeakMap;var rt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=nt){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&We(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=Ge(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??nt}static _$Ei(){if(this.hasOwnProperty($e(`elementProperties`)))return;let e=Je(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty($e(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($e(`properties`))){let e=this.properties,t=[...Ke(e),...qe(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(He(e))}else e!==void 0&&t.push(He(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ve(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?et:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?et:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??tt)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};rt.elementStyles=[],rt.shadowRootOptions={mode:`open`},rt[$e(`elementProperties`)]=new Map,rt[$e(`finalized`)]=new Map,Qe?.({ReactiveElement:rt}),(Ye.reactiveElementVersions??=[]).push(`2.1.2`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
var it=globalThis,at=e=>e,ot=it.trustedTypes,st=ot?ot.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,ct=`$lit$`,lt=`lit$${Math.random().toFixed(9).slice(2)}$`,ut=`?`+lt,dt=`<${ut}>`,ft=document,pt=()=>ft.createComment(``),mt=e=>e===null||typeof e!=`object`&&typeof e!=`function`,ht=Array.isArray,gt=e=>ht(e)||typeof e?.[Symbol.iterator]==`function`,_t=`[ 	
\f\r]`,vt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,yt=/-->/g,bt=/>/g,xt=RegExp(`>|${_t}(?:([^\\s"'>=/]+)(${_t}*=${_t}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),St=/'/g,Ct=/"/g,wt=/^(?:script|style|textarea|title)$/i,Tt=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),_=Tt(1),v=Tt(2),Et=Symbol.for(`lit-noChange`),y=Symbol.for(`lit-nothing`),Dt=new WeakMap,Ot=ft.createTreeWalker(ft,129);function kt(e,t){if(!ht(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return st===void 0?t:st.createHTML(t)}var At=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=vt;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===vt?c[1]===`!--`?o=yt:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=xt):(wt.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=xt):o=bt:o===xt?c[0]===`>`?(o=i??vt,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?xt:c[3]===`"`?Ct:St):o===Ct||o===St?o=xt:o===yt||o===bt?o=vt:(o=xt,i=void 0);let d=o===xt&&e[t+1].startsWith(`/>`)?` `:``;a+=o===vt?n+dt:l>=0?(r.push(s),n.slice(0,l)+ct+n.slice(l)+lt+d):n+lt+(l===-2?t:d)}return[kt(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},jt=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=At(t,n);if(this.el=e.createElement(l,r),Ot.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Ot.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(ct)){let t=u[o++],n=i.getAttribute(e).split(lt),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?It:r[1]===`?`?Lt:r[1]===`@`?Rt:Ft}),i.removeAttribute(e)}else e.startsWith(lt)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(wt.test(i.tagName)){let e=i.textContent.split(lt),t=e.length-1;if(t>0){i.textContent=ot?ot.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],pt()),Ot.nextNode(),c.push({type:2,index:++a});i.append(e[t],pt())}}}else if(i.nodeType===8){if(i.data===ut)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(lt,e+1))!==-1;)c.push({type:7,index:a}),e+=lt.length-1}}a++}}static createElement(e,t){let n=ft.createElement(`template`);return n.innerHTML=e,n}};function Mt(e,t,n=e,r){if(t===Et)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=mt(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=Mt(e,i._$AS(e,t.values),i,r)),t}var Nt=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??ft).importNode(t,!0);Ot.currentNode=r;let i=Ot.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Pt(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new zt(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Ot.nextNode(),a++)}return Ot.currentNode=ft,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Pt=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Mt(this,e,t),mt(e)?e===y||e==null||e===``?(this._$AH!==y&&this._$AR(),this._$AH=y):e!==this._$AH&&e!==Et&&this._(e):e._$litType$===void 0?e.nodeType===void 0?gt(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==y&&mt(this._$AH)?this._$AA.nextSibling.data=e:this.T(ft.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=jt.createElement(kt(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Nt(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Dt.get(e.strings);return t===void 0&&Dt.set(e.strings,t=new jt(e)),t}k(t){ht(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(pt()),this.O(pt()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=at(e).nextSibling;at(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Ft=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=y}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=Mt(this,e,t,0),a=!mt(e)||e!==this._$AH&&e!==Et,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=Mt(this,r[n+o],t,o),s===Et&&(s=this._$AH[o]),a||=!mt(s)||s!==this._$AH[o],s===y?e=y:e!==y&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},It=class extends Ft{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===y?void 0:e}},Lt=class extends Ft{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==y)}},Rt=class extends Ft{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Mt(this,e,t,0)??y)===Et)return;let n=this._$AH,r=e===y&&n!==y||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==y&&(n===y||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},zt=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Mt(this,e)}},Bt=it.litHtmlPolyfillSupport;Bt?.(jt,Pt),(it.litHtmlVersions??=[]).push(`3.3.3`);var Vt=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Pt(t.insertBefore(pt(),e),e,void 0,n??{})}return i._$AI(e),i},Ht=globalThis,b=class extends rt{constructor(){
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Vt(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Et}};b._$litElement$=!0,b.finalized=!0,Ht.litElementHydrateSupport?.({LitElement:b});var Ut=Ht.litElementPolyfillSupport;Ut?.({LitElement:b}),(Ht.litElementVersions??=[]).push(`4.2.2`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
var x=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},Wt={attribute:!0,type:String,converter:et,reflect:!1,hasChanged:tt},Gt=(e=Wt,t,n)=>{
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function S(e){return(t,n)=>typeof n==`object`?Gt(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
var Kt=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function qt(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return Kt(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return Kt(n,r,{get(){return a(this)}})}}var Jt=v`
  <pattern id="pins-female" width="2.54" height="2.54" patternUnits="userSpaceOnUse">
    <rect x="0" y="0" width="2.54" height="2.54" fill="#333"></rect>
    <rect x="1.079" y="0.896" width="0.762" height="0.762" style="fill: #191919"></rect>
    <path
      transform="translate(1.079, 1.658) rotate(180 0 0)"
      d="m 0 0 v 0.762 l 0.433,0.433 c 0.046,-0.046 0.074,-0.109 0.074,-0.179 v -1.27 c 0,-0.070 -0.028,-0.133 -0.074,-0.179 z"
      style="opacity: 0.25"
    ></path>
    <path
      transform="translate(1.841, 1.658) rotate(90 0 0)"
      d="m 0 0 v 0.762 l 0.433,0.433 c 0.046,-0.046 0.074,-0.109 0.074,-0.179 v -1.27 c 0,-0.070 -0.028,-0.133 -0.074,-0.179 z"
      style="opacity: 0.3; fill: #fff"
    ></path>
    <path
      transform="translate(1.841, 0.896)"
      d="m 0 0 v 0.762 l 0.433,0.433 c 0.046,-0.046 0.074,-0.109 0.074,-0.179 v -1.27 c 0,-0.070 -0.028,-0.133 -0.074,-0.179 z"
      style="opacity: 0.15; fill: #fff"
    ></path>
    <path
      transform="translate(1.079, 0.896) rotate(270 0 0)"
      d="m 0 0 v 0.762 l 0.433,0.433 c 0.046,-0.046 0.074,-0.109 0.074,-0.179 v -1.27 c 0,-0.070 -0.028,-0.133 -0.074,-0.179 z"
      style="opacity: 0.35"
    ></path>
  </pattern>
`,Yt=e=>({type:`analog`,channel:e}),Xt=(e,t=0)=>({type:`i2c`,signal:e,bus:t}),Zt=(e,t=0)=>({type:`spi`,signal:e,bus:t}),Qt=(e,t=0)=>({type:`usart`,signal:e,bus:t}),$t=()=>({type:`power`,signal:`GND`}),en=e=>({type:`power`,signal:`VCC`,voltage:e}),tn=[` `,`Spacebar`];function nn(){return typeof navigator==`object`?navigator.userAgent:``}function rn(){return nn().indexOf(`Macintosh`)>=0}function an(e){return rn()?e.metaKey:e.ctrlKey}var on=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},sn=class extends b{constructor(){super(...arguments),this.led13=!1,this.ledRX=!1,this.ledTX=!1,this.ledPower=!1,this.resetPressed=!1,this.pinInfo=[{name:`A5.2`,x:87,y:9,signals:[Yt(5),Xt(`SCL`)]},{name:`A4.2`,x:97,y:9,signals:[Yt(4),Xt(`SDA`)]},{name:`AREF`,x:106,y:9,signals:[]},{name:`GND.1`,x:115.5,y:9,signals:[{type:`power`,signal:`GND`}]},{name:`13`,x:125,y:9,signals:[Zt(`SCK`)]},{name:`12`,x:134.5,y:9,signals:[Zt(`MISO`)]},{name:`11`,x:144,y:9,signals:[Zt(`MOSI`),{type:`pwm`}]},{name:`10`,x:153.5,y:9,signals:[Zt(`SS`),{type:`pwm`}]},{name:`9`,x:163,y:9,signals:[{type:`pwm`}]},{name:`8`,x:173,y:9,signals:[]},{name:`7`,x:189,y:9,signals:[]},{name:`6`,x:198.5,y:9,signals:[{type:`pwm`}]},{name:`5`,x:208,y:9,signals:[{type:`pwm`}]},{name:`4`,x:217.5,y:9,signals:[]},{name:`3`,x:227,y:9,signals:[{type:`pwm`}]},{name:`2`,x:236.5,y:9,signals:[]},{name:`1`,x:246,y:9,signals:[Qt(`TX`)]},{name:`0`,x:255.5,y:9,signals:[Qt(`RX`)]},{name:`IOREF`,x:131,y:191.5,signals:[]},{name:`RESET`,x:140.5,y:191.5,signals:[]},{name:`3.3V`,x:150,y:191.5,signals:[{type:`power`,signal:`VCC`,voltage:3.3}]},{name:`5V`,x:160,y:191.5,signals:[{type:`power`,signal:`VCC`,voltage:5}]},{name:`GND.2`,x:169.5,y:191.5,signals:[{type:`power`,signal:`GND`}]},{name:`GND.3`,x:179,y:191.5,signals:[{type:`power`,signal:`GND`}]},{name:`VIN`,x:188.5,y:191.5,signals:[{type:`power`,signal:`VCC`}]},{name:`A0`,x:208,y:191.5,signals:[Yt(0)]},{name:`A1`,x:217.5,y:191.5,signals:[Yt(1)]},{name:`A2`,x:227,y:191.5,signals:[Yt(2)]},{name:`A3`,x:236.5,y:191.5,signals:[Yt(3)]},{name:`A4`,x:246,y:191.5,signals:[Yt(4),Xt(`SDA`)]},{name:`A5`,x:255.5,y:191.5,signals:[Yt(5),Xt(`SCL`)]}]}static get styles(){return Be`
      text {
        font-size: 2px;
        font-family: monospace;
        user-select: none;
      }

      circle[tabindex]:hover,
      circle[tabindex]:focus {
        stroke: white;
        outline: none;
      }
    `}render(){let{ledPower:e,led13:t,ledRX:n,ledTX:r}=this;return _`
      <svg
        width="72.58mm"
        height="53.34mm"
        version="1.1"
        viewBox="-4 0 72.58 53.34"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <g id="led-body" fill="#eee">
            <rect x="0" y="0" height="1.2" width="2.6" fill="#c6c6c6" />
            <rect x="0.6" y="-0.1" width="1.35" height="1.4" stroke="#aaa" stroke-width="0.05" />
          </g>
        </defs>

        <filter id="ledFilter" x="-0.8" y="-0.8" height="2.2" width="2.8">
          <feGaussianBlur stdDeviation="0.5" />
        </filter>

        ${Jt}

        <pattern id="pin-male" width="2.54" height="4.80" patternUnits="userSpaceOnUse">
          <rect ry="0.3" rx="0.3" width="2.12" height="4.80" fill="#565656" />
          <ellipse cx="1" cy="1.13" rx="0.5" ry="0.5" fill="#aaa"></ellipse>
          <ellipse cx="1" cy="3.67" rx="0.5" ry="0.5" fill="#aaa"></ellipse>
        </pattern>

        <pattern id="mcu-leads" width="2.54" height="0.508" patternUnits="userSpaceOnUse">
          <path
            d="M 0.254,0 C 0.114,0 0,0.114 0,0.254 v 0 c 0,0.139 0,0.253 0,0.253 h 1.523 c 0,0 0,-0.114 0,-0.253 v 0 C 1.523,0.114 1.409,0 1.269,0 Z"
            fill="#ddd"
          />
        </pattern>

        <!-- PCB -->
        <path
          d="m0.999 0a1 1 0 0 0-0.999 0.999v51.34a1 1 0 0 0 0.999 0.999h64.04a1 1 0 0 0 0.999-0.999v-1.54l2.539-2.539v-32.766l-2.539-2.539v-11.43l-1.524-1.523zm14.078 0.835h0.325l0.212 0.041h0l0.105 0.021 0.300 0.124 0.270 0.180 0.229 0.229 0.180 0.270 0.017 0.042 0.097 0.234 0.01 0.023 0.050 0.252 0.013 0.066v0.325l-0.063 0.318-0.040 0.097-0.083 0.202-0 0.001-0.180 0.270-0.229 0.229-0.270 0.180-0.300 0.124-0.106 0.020-0.212 0.042h-0.325l-0.212-0.042-0.106-0.020-0.300-0.124-0.270-0.180-0.229-0.229-0.180-0.270-0 -0.001-0.083-0.202-0.040-0.097-0.063-0.318v-0.325l0.013-0.066 0.050-0.252 0.01-0.023 0.097-0.234 0.017-0.042 0.180-0.270 0.229-0.229 0.270-0.180 0.300-0.124 0.105-0.021zm50.799 15.239h0.325l0.212 0.042 0.105 0.021 0.300 0.124 0.270 0.180 0.229 0.229 0.180 0.270 0.014 0.035 0.110 0.264 0.01 0.051 0.053 0.267v0.325l-0.03 0.152-0.033 0.166-0.037 0.089-0.079 0.191-0 0.020-0.180 0.270-0.229 0.229-0.270 0.180-0.071 0.029-0.228 0.094-0.106 0.021-0.212 0.042h-0.325l-0.212-0.042-0.106-0.021-0.228-0.094-0.071-0.029-0.270-0.180-0.229-0.229-0.180-0.270-0 -0.020-0.079-0.191-0.036-0.089-0.033-0.166-0.030-0.152v-0.325l0.053-0.267 0.010-0.051 0.109-0.264 0.014-0.035 0.180-0.270 0.229-0.229 0.270-0.180 0.300-0.124 0.105-0.021zm0 27.94h0.325l0.180 0.036 0.138 0.027 0.212 0.087 0.058 0.024 0.029 0.012 0.270 0.180 0.229 0.229 0.180 0.270 0.124 0.300 0.063 0.319v0.325l-0.063 0.318-0.124 0.300-0.180 0.270-0.229 0.229-0.270 0.180-0.300 0.124-0.106 0.021-0.212 0.042h-0.325l-0.212-0.042-0.105-0.021-0.300-0.124-0.270-0.180-0.229-0.229-0.180-0.270-0.124-0.300-0.063-0.318v-0.325l0.063-0.319 0.124-0.300 0.180-0.270 0.229-0.229 0.270-0.180 0.029-0.012 0.058-0.024 0.212-0.087 0.137-0.027zm-52.07 5.080h0.325l0.212 0.041 0.106 0.021 0.300 0.124 0.270 0.180 0.229 0.229 0.121 0.182 0.058 0.087h0l0.114 0.275 0.01 0.023 0.063 0.318v0.325l-0.035 0.179-0.027 0.139-0.01 0.023-0.114 0.275h-0l-0.180 0.270-0.229 0.229-0.270 0.180-0.300 0.124-0.106 0.020-0.212 0.042h-0.325l-0.212-0.042-0.105-0.020-0.300-0.124-0.270-0.180-0.229-0.229-0.180-0.270-0.114-0.275-0.01-0.023-0.027-0.139-0.036-0.179v-0.325l0.063-0.318 0.01-0.023 0.114-0.275 0.058-0.087 0.121-0.182 0.229-0.229 0.270-0.180 0.300-0.124 0.105-0.021z"
          fill="#2b6b99"
        />

        <!-- reset button -->
        <rect x="3.816" y="1.4125" width="6.2151" height="6.0268" fill="#9b9b9b" />
        <g fill="#e6e6e6">
          <rect x="2.1368" y="1.954" width="1.695" height=".84994" />
          <rect x="2.121" y="3.8362" width="1.695" height=".84994" />
          <rect x="2.0974" y="5.8608" width="1.695" height=".84994" />
          <rect x="10.031" y="6.0256" width="1.695" height=".84994" />
          <rect x="10.008" y="1.9528" width="1.695" height=".84994" />
        </g>
        <circle
          id="reset-button"
          cx="6.9619"
          cy="4.5279"
          r="1.5405"
          fill="#960000"
          stroke="#777"
          stroke-width="0.15"
          tabindex="0"
          @mousedown=${()=>this.down()}
          @touchstart=${()=>this.down()}
          @mouseup=${()=>this.up()}
          @mouseleave=${()=>this.leave()}
          @touchend=${()=>this.leave()}
          @keydown=${e=>tn.includes(e.key)&&this.down()}
          @keyup=${e=>tn.includes(e.key)&&this.up()}
        />

        <!-- USB Connector -->
        <g style="fill:#b3b2b2;stroke:#b3b2b2;stroke-width:0.010">
          <ellipse cx="3.84" cy="9.56" rx="1.12" ry="1.03" />
          <ellipse cx="3.84" cy="21.04" rx="1.12" ry="1.03" />
          <g fill="#000">
            <rect width="11" height="11.93" x="-0.05" y="9.72" rx="0.2" ry="0.2" opacity="0.24" />
          </g>
          <rect x="-4" y="9.37" height="11.85" width="14.46" />
          <rect x="-4" y="9.61" height="11.37" width="14.05" fill="#706f6f" />
          <rect x="-4" y="9.71" height="11.17" width="13.95" fill="#9d9d9c" />
        </g>

        <!-- Power jack -->
        <g stroke-width=".254" fill="black">
          <path
            d="m-2.58 48.53v2.289c0 0.279 0.228 0.508 0.508 0.508h1.722c0.279 0 0.508-0.228 0.508-0.508v-2.289z"
            fill="#252728"
            opacity=".3"
          />
          <path
            d="m11.334 42.946c0-0.558-0.509-1.016-1.132-1.016h-10.043v9.652h10.043c0.622 0 1.132-0.457 1.132-1.016z"
            opacity=".3"
          />
          <path
            d="m-2.072 40.914c-0.279 0-0.507 0.204-0.507 0.454v8.435c0 0.279 0.228 0.507 0.507 0.507h1.722c0.279 0 0.507-0.228 0.507-0.507v-8.435c0-0.249-0.228-0.454-0.507-0.454z"
          />
          <path
            d="m-2.58 48.784v1.019c0 0.279 0.228 0.508 0.508 0.508h1.722c0.279 0 0.508-0.228 0.508-0.508v-1.019z"
            opacity=".3"
          />
          <path
            d="m11.334 43.327c0.139 0 0.254 0.114 0.254 0.254v4.064c0 0.139-0.114 0.254-0.254 0.254"
          />
          <path
            d="m11.334 42.438c0-0.558-0.457-1.016-1.016-1.016h-10.16v8.382h10.16c0.558 0 1.016-0.457 1.016-1.016z"
          />
          <path
            d="m10.064 49.804h-9.906v-8.382h1.880c-1.107 0-1.363 1.825-1.363 3.826 0 1.765 1.147 3.496 3.014 3.496h6.374z"
            opacity=".3"
          />
          <rect x="10.064" y="41.422" width=".254" height="8.382" fill="#ffffff" opacity=".2" />
          <path
            d="m10.318 48.744v1.059c0.558 0 1.016-0.457 1.016-1.016v-0.364c0 0.313-1.016 0.320-1.016 0.320z"
            opacity=".3"
          />
        </g>

        <!-- Pin Headers -->
        <g transform="translate(17.497 1.27)">
          <rect width="${.38+25.4}" height="2.54" fill="url(#pins-female)"></rect>
        </g>
        <g transform="translate(44.421 1.27)">
          <rect width="${20.7}" height="2.54" fill="url(#pins-female)"></rect>
        </g>
        <g transform="translate(26.641 49.53)">
          <rect width="${20.7}" height="2.54" fill="url(#pins-female)"></rect>
        </g>
        <g transform="translate(49.501 49.53)">
          <rect width="${.38+15.24}" height="2.54" fill="url(#pins-female)"></rect>
        </g>

        <!-- MCU -->
        <g>
          <path
            d="m64.932 41.627h-36.72c-0.209 0-0.379-0.170-0.379-0.379v-8.545c0-0.209 0.170-0.379 0.379-0.379h36.72c0.209 0 0.379 0.170 0.379 0.379v8.545c0 0.209-0.169 0.379-0.379 0.379z"
            fill="#292c2d"
          />
          <path
            d="m65.019 40.397c0 0.279-0.228 0.508-0.508 0.508h-35.879c-0.279 0-0.507 0.025-0.507-0.254v-6.338c0-0.279 0.228-0.508 0.507-0.508h35.879c0.279 0 0.508 0.228 0.508 0.508z"
            opacity=".3"
          />
          <path
            d="m65.019 40.016c0 0.279-0.228 0.508-0.508 0.508h-35.879c-0.279 0-0.507 0.448-0.507-0.508v-6.084c0-0.279 0.228-0.508 0.507-0.508h35.879c0.279 0 0.508 0.228 0.508 0.508z"
            fill="#3c4042"
          />
          <rect
            transform="translate(29.205, 32.778)"
            fill="url(#mcu-leads)"
            height="0.508"
            width="35.56"
          ></rect>
          <rect
            transform="translate(29.205, 41.159) scale(1 -1)"
            fill="url(#mcu-leads)"
            height="0.508"
            width="35.56"
          ></rect>
          <g fill="#252728">
            <circle cx="33.269" cy="36.847" r="1" />
            <circle cx="59.939" cy="36.847" r="1" />
            <path d="M65 38.05a1.13 1.13 0 010-2.26v2.27z" />
          </g>
        </g>

        <!-- Programming Headers -->
        <g transform="translate(14.1 4.4)">
          <rect width="7" height="4.80" fill="url(#pin-male)" />
        </g>

        <g transform="translate(63 27.2) rotate(270 0 0)">
          <rect width="7" height="4.80" fill="url(#pin-male)" />
        </g>

        <!-- LEDs -->
        <g transform="translate(57.3, 16.21)">
          <use xlink:href="#led-body" />
          ${e&&v`<circle cx="1.3" cy="0.55" r="1.3" fill="#80ff80" filter="url(#ledFilter)" />`}
        </g>

        <text fill="#fff">
          <tspan x="60.88" y="17.5">ON</tspan>
        </text>

        <g transform="translate(26.87,11.69)">
          <use xlink:href="#led-body" />
          ${t&&v`<circle cx="1.3" cy="0.55" r="1.3" fill="#ff8080" filter="url(#ledFilter)" />`}
        </g>

        <g transform="translate(26.9, 16.2)">
          <use xlink:href="#led-body" />
          ${r&&v`<circle cx="0.975" cy="0.55" r="1.3" fill="yellow" filter="url(#ledFilter)" />`}
        </g>

        <g transform="translate(26.9, 18.5)">
          <use xlink:href="#led-body" />
          ${n&&v`<circle cx="0.975" cy="0.55" r="1.3" fill="yellow" filter="url(#ledFilter)" />`}
        </g>

        <text fill="#fff" style="text-anchor: end">
          <tspan x="26.5" y="13">L</tspan>
          <tspan x="26.5" y="17.5">TX</tspan>
          <tspan x="26.5" y="19.8">RX</tspan>
          <tspan x="26.5" y="20">&#160;</tspan>
        </text>

        <!-- Pin Labels -->
        <rect x="28.27" y="10.34" width="36.5" height="0.16" fill="#fff"></rect>
        <text fill="#fff" style="font-weight: 900">
          <tspan x="40.84" y="9.48">DIGITAL (PWM ~)</tspan>
        </text>
        <text
          transform="translate(22.6 4) rotate(270 0 0)"
          fill="#fff"
          style="font-size: 2px; text-anchor: end; font-family: monospace"
        >
          <tspan x="0" dy="2.54">AREF</tspan>
          <tspan x="0" dy="2.54">GND</tspan>
          <tspan x="0" dy="2.54">13</tspan>
          <tspan x="0" dy="2.54">12</tspan>
          <tspan x="0" dy="2.54">~11</tspan>
          <tspan x="0" dy="2.54">~10</tspan>
          <tspan x="0" dy="2.54">~9</tspan>
          <tspan x="0" dy="2.54">8</tspan>
          <tspan x="0" dy="4.08">7</tspan>
          <tspan x="0" dy="2.54">~6</tspan>
          <tspan x="0" dy="2.54">~5</tspan>
          <tspan x="0" dy="2.54">4</tspan>
          <tspan x="0" dy="2.54">~3</tspan>
          <tspan x="0" dy="2.54">2</tspan>
          <tspan x="0" dy="2.54">TX→1</tspan>
          <tspan x="0" dy="2.54">RX←0</tspan>
          <tspan x="0" dy="2.54">&#160;</tspan>
        </text>

        <rect x="33.90" y="42.76" width="12.84" height="0.16" fill="#fff"></rect>
        <rect x="49.48" y="42.76" width="14.37" height="0.16" fill="#fff"></rect>
        <text fill="#fff" style="font-weight: 900">
          <tspan x="41" y="44.96">POWER</tspan>
          <tspan x="53.5" y="44.96">ANALOG IN</tspan>
        </text>
        <text transform="translate(29.19 49) rotate(270 0 0)" fill="#fff" style="font-weight: 700">
          <tspan x="0" dy="2.54">IOREF</tspan>
          <tspan x="0" dy="2.54">RESET</tspan>
          <tspan x="0" dy="2.54">3.3V</tspan>
          <tspan x="0" dy="2.54">5V</tspan>
          <tspan x="0" dy="2.54">GND</tspan>
          <tspan x="0" dy="2.54">GND</tspan>
          <tspan x="0" dy="2.54">Vin</tspan>
          <tspan x="0" dy="4.54">A0</tspan>
          <tspan x="0" dy="2.54">A1</tspan>
          <tspan x="0" dy="2.54">A2</tspan>
          <tspan x="0" dy="2.54">A3</tspan>
          <tspan x="0" dy="2.54">A4</tspan>
          <tspan x="0" dy="2.54">A5</tspan>
        </text>

        <!-- Logo -->
        <path
          style="fill:none;stroke:#fff;stroke-width:1.03"
          d="m 34.21393,12.01079 c -1.66494,-0.13263 -3.06393,1.83547 -2.37559,3.36182 0.66469,1.65332 3.16984,2.10396 4.36378,0.77797 1.15382,-1.13053 1.59956,-2.86476 3.00399,-3.75901 1.43669,-0.9801 3.75169,-0.0547 4.02384,1.68886 0.27358,1.66961 -1.52477,3.29596 -3.15725,2.80101 -1.20337,-0.27199 -2.06928,-1.29866 -2.56193,-2.37788 -0.6046,-1.0328 -1.39499,-2.13327 -2.62797,-2.42367 -0.2191,-0.0497 -0.44434,-0.0693 -0.66887,-0.0691 z"
        />
        <path
          style="fill:none;stroke:#fff;stroke-width:0.56"
          d="m 39.67829,14.37519 h 1.75141 m -0.89321,-0.8757 v 1.7514 m -7.30334,-0.8757 h 2.10166"
        />
        <text x="31" y="20.2" style="font-size:2.8px;font-weight:bold;line-height:1.25;fill:#fff">
          ARDUINO
        </text>

        <rect
          style="fill:none;stroke:#fff;stroke-width:0.1;stroke-dasharray:0.1, 0.1"
          width="11"
          height="5.45"
          x="45.19"
          y="11.83"
          rx="1"
          ry="1"
        />

        <text x="46.5" y="16" style="font-size:5px; line-height:1.25" fill="#fff">UNO</text>
      </svg>
    `}down(){this.resetPressed||(this.resetPressed=!0,this.resetButton.style.stroke=`#333`,this.dispatchEvent(new CustomEvent(`button-press`,{detail:`reset`})))}up(){this.resetPressed&&(this.resetPressed=!1,this.resetButton.style.stroke=``,this.dispatchEvent(new CustomEvent(`button-release`,{detail:`reset`})))}leave(){this.resetButton.blur(),this.up()}};on([S()],sn.prototype,`led13`,void 0),on([S()],sn.prototype,`ledRX`,void 0),on([S()],sn.prototype,`ledTX`,void 0),on([S()],sn.prototype,`ledPower`,void 0),on([S()],sn.prototype,`resetPressed`,void 0),on([qt(`#reset-button`)],sn.prototype,`resetButton`,void 0),sn=on([x(`wokwi-arduino-uno`)],sn);function C({tag:e,props:t,events:n,onUpdated:r,style:i}){let a=(0,h.useRef)(null),o=(0,h.useRef)(null),s=(0,h.useRef)({events:n,onUpdated:r});return s.current={events:n,onUpdated:r},(0,h.useLayoutEffect)(()=>{let t=document.createElement(e);a.current.appendChild(t),o.current=t;let n=Object.keys(s.current.events??{}).map(e=>{let n=t=>s.current.events?.[e]?.(t);return t.addEventListener(e,n),[e,n]});return()=>{for(let[e,r]of n)t.removeEventListener(e,r);t.remove(),o.current=null}},[e]),(0,h.useLayoutEffect)(()=>{let e=o.current;if(!e)return;Object.assign(e,t);let n=e.updateComplete;s.current.onUpdated&&n?.then(()=>o.current===e&&s.current.onUpdated?.(e))}),(0,m.jsx)(`div`,{ref:a,style:{lineHeight:0,...i}})}var cn=new Map;function w(e,t,n){let r=`${e}|${JSON.stringify(n??{})}`,i=cn.get(r);if(!i){let a=document.createElement(e);n&&Object.assign(a,n),i={};for(let[e,n]of Object.entries(t)){let t=a.pinInfo?.find(e=>e.name===n);t&&(i[e]={x:t.x,y:t.y})}Object.keys(i).length===Object.keys(t).length&&cn.set(r,i)}return i}var T=96/25.4,ln=72.58*T,un=53.34*T,dn={...Object.fromEntries(Array.from({length:14},(e,t)=>[`D${t}`,String(t)])),...Object.fromEntries(Array.from({length:6},(e,t)=>[`A${t}`,`A${t}`])),"5V":`5V`,"3V3":`3.3V`,GND:`GND.1`,GND2:`GND.2`},fn=()=>w(`wokwi-arduino-uno`,dn),pn={geometry:()=>({width:ln,height:un,pins:fn()}),Component:({state:e})=>(0,m.jsx)(C,{tag:`wokwi-arduino-uno`,props:{led13:e?.led13??!1,ledTX:e?.tx??!1,ledRX:e?.rx??!1,ledPower:!0}})},mn=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},hn={red:`#ff8080`,green:`#80ff80`,blue:`#8080ff`,yellow:`#ffff80`,orange:`#ffcf80`,white:`#ffffff`,purple:`#ff80ff`},gn=class extends b{constructor(){super(...arguments),this.value=!1,this.brightness=1,this.color=`red`,this.lightColor=null,this.label=``,this.flip=!1}get pinInfo(){let e=this.flip?15:25,t=this.flip?25:15;return[{name:`A`,x:e,y:42,signals:[],description:`Anode`},{name:`C`,x:t,y:42,signals:[],description:`Cathode`}]}static get styles(){return Be`
      :host {
        display: inline-block;
      }

      .led-container {
        display: flex;
        flex-direction: column;
        width: 40px;
      }

      .led-label {
        font-size: 10px;
        text-align: center;
        color: gray;
        position: relative;
        line-height: 1;
        top: -8px;
      }
    `}update(e){e.has(`flip`)&&this.dispatchEvent(new CustomEvent(`pininfo-change`)),super.update(e)}renderSVG(){let{color:e,lightColor:t,flip:n}=this,r=t||hn[e?.toLowerCase()]||e,i=this.brightness?.3+this.brightness*.7:0,a=this.value&&this.brightness>2**-52;return _`<svg
      width="40"
      height="50"
      transform="scale(${n?-1:1} 1)"
      version="1.2"
      viewBox="-10 -5 35.456 39.618"
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter id="light1" x="-0.8" y="-0.8" height="2.2" width="2.8">
        <feGaussianBlur stdDeviation="2" />
      </filter>
      <filter id="light2" x="-0.8" y="-0.8" height="2.2" width="2.8">
        <feGaussianBlur stdDeviation="4" />
      </filter>
      <rect x="2.5099" y="20.382" width="2.1514" height="9.8273" fill="#8c8c8c" />
      <path
        d="m12.977 30.269c0-1.1736-0.86844-2.5132-1.8916-3.4024-0.41616-0.3672-1.1995-1.0015-1.1995-1.4249v-5.4706h-2.1614v5.7802c0 1.0584 0.94752 1.8785 1.9462 2.7482 0.44424 0.37584 1.3486 1.2496 1.3486 1.7694"
        fill="#8c8c8c"
      />

      <path
        d="m14.173 13.001v-5.9126c0-3.9132-3.168-7.0884-7.0855-7.0884-3.9125 0-7.0877 3.1694-7.0877 7.0884v13.649c1.4738 1.651 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8594v-1.5235c-7.4e-4 -1.1426-0.47444-2.2039-1.283-3.1061z"
        opacity=".3"
      />
      <path
        d="m14.173 13.001v-5.9126c0-3.9132-3.168-7.0884-7.0855-7.0884-3.9125 0-7.0877 3.1694-7.0877 7.0884v13.649c1.4738 1.651 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8594v-1.5235c-7.4e-4 -1.1426-0.47444-2.2039-1.283-3.1061z"
        fill="#e6e6e6"
        opacity=".5"
      />
      <path
        d="m14.173 13.001v3.1054c0 2.7389-3.1658 4.9651-7.0855 4.9651-3.9125 2e-5 -7.0877-2.219-7.0877-4.9651v4.6296c1.4738 1.6517 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8586l-4e-5 -1.5235c-7e-4 -1.1419-0.4744-2.2032-1.283-3.1054z"
        fill="#d1d1d1"
        opacity=".9"
      />
      <g>
        <path
          d="m14.173 13.001v3.1054c0 2.7389-3.1658 4.9651-7.0855 4.9651-3.9125 2e-5 -7.0877-2.219-7.0877-4.9651v4.6296c1.4738 1.6517 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8586l-4e-5 -1.5235c-7e-4 -1.1419-0.4744-2.2032-1.283-3.1054z"
          opacity=".7"
        />
        <path
          d="m14.173 13.001v3.1054c0 2.7389-3.1658 4.9651-7.0855 4.9651-3.9125 2e-5 -7.0877-2.219-7.0877-4.9651v3.1054c1.4738 1.6502 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8586-7.4e-4 -1.1412-0.47444-2.2025-1.283-3.1047z"
          opacity=".25"
        />
        <ellipse cx="7.0877" cy="16.106" rx="7.087" ry="4.9608" opacity=".25" />
      </g>
      <polygon
        points="2.2032 16.107 3.1961 16.107 3.1961 13.095 6.0156 13.095 10.012 8.8049 3.407 8.8049 2.2032 9.648"
        fill="#666666"
      />
      <polygon
        points="11.215 9.0338 7.4117 13.095 11.06 13.095 11.06 16.107 11.974 16.107 11.974 8.5241 10.778 8.5241"
        fill="#666666"
      />
      <path
        d="m14.173 13.001v-5.9126c0-3.9132-3.168-7.0884-7.0855-7.0884-3.9125 0-7.0877 3.1694-7.0877 7.0884v13.649c1.4738 1.651 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8594v-1.5235c-7.4e-4 -1.1426-0.47444-2.2039-1.283-3.1061z"
        fill="${e}"
        opacity=".65"
      />
      <g fill="#ffffff">
        <path
          d="m10.388 3.7541 1.4364-0.2736c-0.84168-1.1318-2.0822-1.9577-3.5417-2.2385l0.25416 1.0807c0.76388 0.27072 1.4068 0.78048 1.8511 1.4314z"
          opacity=".5"
        />
        <path
          d="m0.76824 19.926v1.5199c0.64872 0.5292 1.4335 0.97632 2.3076 1.3169v-1.525c-0.8784-0.33624-1.6567-0.78194-2.3076-1.3118z"
          opacity=".5"
        />
        <path
          d="m11.073 20.21c-0.2556 0.1224-0.52992 0.22968-0.80568 0.32976-0.05832 0.01944-0.11736 0.04032-0.17784 0.05832-0.56376 0.17928-1.1614 0.31896-1.795 0.39456-0.07488 0.0094-0.1512 0.01872-0.22464 0.01944-0.3204 0.03024-0.64368 0.05832-0.97056 0.05832-0.14832 0-0.30744-0.01512-0.4716-0.02376-1.2002-0.05688-2.3306-0.31464-3.2976-0.73944l-2e-5 -8.3895v-4.8254c0-1.471 0.84816-2.7295 2.0736-3.3494l-0.02232-0.05328-1.2478-1.512c-1.6697 1.003-2.79 2.8224-2.79 4.9118v11.905c-0.04968-0.04968-0.30816-0.30888-0.48024-0.52992l-0.30744 0.6876c1.4011 1.4818 3.8088 2.4617 6.5426 2.4617 1.6798 0 3.2371-0.37368 4.5115-1.0022l-0.52704-0.40896-0.01006 0.0072z"
          opacity=".5"
        />
      </g>
      <g class="light" style="display: ${a?``:`none`}">
        <ellipse
          cx="8"
          cy="10"
          rx="10"
          ry="10"
          fill="${r}"
          filter="url(#light2)"
          style="opacity: ${i}"
        ></ellipse>
        <ellipse cx="8" cy="10" rx="2" ry="2" fill="white" filter="url(#light1)"></ellipse>
        <ellipse
          cx="8"
          cy="10"
          rx="3"
          ry="3"
          fill="white"
          filter="url(#light1)"
          style="opacity: ${i}"
        ></ellipse>
      </g>
    </svg> `}render(){return _`
      <div class="led-container">
        ${this.renderSVG()}
        <span class="led-label">${this.label}</span>
      </div>
    `}};mn([S()],gn.prototype,`value`,void 0),mn([S()],gn.prototype,`brightness`,void 0),mn([S()],gn.prototype,`color`,void 0),mn([S()],gn.prototype,`lightColor`,void 0),mn([S()],gn.prototype,`label`,void 0),mn([S({type:Boolean})],gn.prototype,`flip`,void 0),gn=mn([x(`wokwi-led`)],gn);var _n=.004;function vn(e,t,n){let r=1-Math.exp(-Math.max(0,n)/50);return t.map((t,n)=>{let i=e[n];if(i===void 0||Math.abs(t-i)>.3)return t;let a=i+(t-i)*r;return t===0&&a<_n?0:a})}function E(e,t,n){let r=(0,h.useRef)({state:void 0,shown:[],at:0}).current;if(e!==r.state){let i=e===void 0?[]:t(e),a=performance.now();r.shown=n&&r.state!==void 0?vn(r.shown,i,a-r.at):i,r.state=e,r.at=a}return r.shown}function D(e){return e>0?Math.sqrt(Math.min(1,e)):0}var yn={geometry:()=>({width:40,height:50,pins:w(`wokwi-led`,{A:`A`,C:`C`})}),Component({part:e,state:t,running:n}){let[r=0]=E(t,e=>[e.brightness],n),i=D(r);return(0,m.jsx)(C,{tag:`wokwi-led`,props:{color:String(e.props.color??`red`),value:i>0,brightness:i}})}},bn=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},xn={[-2]:`#C3C7C0`,[-1]:`#F1D863`,0:`#000000`,1:`#8F4814`,2:`#FB0000`,3:`#FC9700`,4:`#FCF800`,5:`#00B800`,6:`#0000FF`,7:`#A803D6`,8:`#808080`,9:`#FCFCFC`},Sn=class extends b{constructor(){super(...arguments),this.value=`1000`,this.pinInfo=[{name:`1`,x:0,y:5.65,signals:[]},{name:`2`,x:58.8,y:5.65,signals:[]}]}static get styles(){return Be`
      :host {
        display: flex;
      }
    `}breakValue(e){let t=e>=1e10?9:e>=1e9?8:e>=1e8?7:e>=1e7?6:e>=1e6?5:e>=1e5?4:e>=1e4?3:e>=1e3?2:e>=100?1:e>=10?0:e>=1?-1:-2,n=Math.round(e/10**t);return e===0?[0,0]:[Math.round(n%100),t]}render(){let{value:e}=this,t=parseFloat(e),[n,r]=this.breakValue(t);return _`
      <svg
        width="15.645mm"
        height="3mm"
        version="1.1"
        viewBox="0 0 15.645 3"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <linearGradient
            id="a"
            x2="0"
            y1="22.332"
            y2="38.348"
            gradientTransform="matrix(.14479 0 0 .14479 -23.155 -4.0573)"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
          >
            <stop stop-color="#323232" offset="0" />
            <stop stop-color="#fff" stop-opacity=".42268" offset="1" />
          </linearGradient>
        </defs>
        <rect y="1.1759" width="15.558" height=".63826" fill="#aaa" />
        <g stroke-width=".14479" fill="#d5b597">
          <path
            id="body"
            d="m4.6918 0c-1.0586 0-1.9185 0.67468-1.9185 1.5022 0 0.82756 0.85995 1.4978 1.9185 1.4978 0.4241 0 0.81356-0.11167 1.1312-0.29411h4.0949c0.31802 0.18313 0.71075 0.29411 1.1357 0.29411 1.0586 0 1.9185-0.67015 1.9185-1.4978 0-0.8276-0.85995-1.5022-1.9185-1.5022-0.42499 0-0.81773 0.11098-1.1357 0.29411h-4.0949c-0.31765-0.18244-0.7071-0.29411-1.1312-0.29411z"
          />
          <use xlink:href="#body" fill="url(#a)" opacity=".44886" />
          <rect x="4" y="0" width="1" height="3" fill="${xn[Math.floor(n/10)]}" clip-path="url(#g)" />

          <path d="m6 0.29411v2.4117h0.96v-2.4117z" fill="${xn[n%10]}" />
          <path d="m7.8 0.29411v2.4117h0.96v-2.4117z" fill="${xn[r]}" />

          <rect x="10.69" y="0" width="1" height="3" fill="#F1D863" clip-path="url(#g)" />
          <clippath id="g">
            <use xlink:href="#body" />
          </clippath>
        </g>
      </svg>
    `}};bn([S()],Sn.prototype,`value`,void 0),Sn=bn([x(`wokwi-resistor`)],Sn);var Cn={geometry:()=>({width:15.645*T,height:3*T,pins:w(`wokwi-resistor`,{1:`1`,2:`2`})}),Component({part:e}){return(0,m.jsx)(C,{tag:`wokwi-resistor`,props:{value:String(e.props.ohms??1e3)}})}},wn=9.6,Tn=7,En=10,Dn=e=>Math.round(e*100)/100;function On(e,t=64){if(e.length===0||e.length%2)throw Error(`DIP 引脚数必须是正偶数`);let n=e.length/2,r=t+14,i=Dn(20+(n-1)*wn),a=e.map((t,i)=>{let a=i<n,o=a?i:e.length-1-i;return{pin:t,number:i+1,side:a?`left`:`right`,x:a?2:r-2,y:Dn(En+o*wn)}}),o={};for(let e of a)e.pin.nc||(o[e.pin.name]={x:e.x,y:e.y});return{width:r,height:i,body:{x:Tn,y:1,w:t,h:i-2},legs:a,pins:o}}function kn(e,t,n){let r={};return e.forEach((e,i)=>r[e]=n?t>>i&1?`high`:`low`:`z`),r}var O=e=>`0x${(e&255).toString(16).toUpperCase().padStart(2,`0`)}`,k=`ui-monospace, SFMono-Regular, Menlo, monospace`,An={high:`#e5484d`,low:`#3b6fe0`,z:`#8e8e93`};function jn({layout:e,name:t,marks:n}){let{body:r,legs:i}=e,a=r.x+r.w/2;return(0,m.jsxs)(`g`,{children:[i.map(e=>(0,m.jsx)(`rect`,{x:e.side===`left`?0:r.x+r.w,y:e.y-1.6,width:r.x,height:`3.2`,fill:e.pin.nc?`var(--ink-3)`:`var(--lead)`},e.number)),(0,m.jsx)(`rect`,{x:r.x,y:r.y,width:r.w,height:r.h,rx:`2`,fill:`#1c1c1e`}),(0,m.jsx)(`path`,{d:`M${a-5} ${r.y} a5 5 0 0 0 10 0`,fill:`#0e0e0f`}),(0,m.jsx)(`text`,{transform:`translate(${a} ${r.y+r.h/2}) rotate(-90)`,y:`2.6`,fontSize:`7.5`,fill:`#e6e6e6`,textAnchor:`middle`,fontFamily:k,fontWeight:`600`,children:t}),i.map(e=>{let t=e.side===`left`,i=n?.[e.pin.name];return(0,m.jsxs)(`g`,{children:[i&&(0,m.jsx)(`circle`,{cx:t?r.x+4.5:r.x+r.w-4.5,cy:e.y,r:`1.7`,fill:i===`z`?`none`:An[i],stroke:i===`z`?An.z:`none`,strokeWidth:`0.6`}),(0,m.jsx)(`text`,{x:t?r.x+8.5:r.x+r.w-8.5,y:e.y+1.9,fontSize:`5.5`,fill:e.pin.nc?`#6e6e73`:`#d0d0d4`,textAnchor:t?`start`:`end`,fontFamily:k,children:e.pin.text??e.pin.name})]},e.number)})]})}function A(e){let t=On(e.pins,e.bodyWidth),n=t.width,r=t.height+(e.status?10:0);return{geometry:()=>({width:n,height:r,pins:t.pins}),Component:({state:i})=>(0,m.jsxs)(`svg`,{width:n,height:r,viewBox:`0 0 ${n} ${r}`,style:{display:`block`},children:[(0,m.jsx)(jn,{layout:t,name:e.name,marks:i&&e.marks?.(i)}),e.status&&(0,m.jsx)(`text`,{x:n/2,y:t.height+7,fontSize:`5.5`,fill:`var(--ink-2)`,textAnchor:`middle`,children:e.status(i)})]})}}var Mn=30,Nn=46,Pn=9.6,Fn=27,In={E:{x:Mn/2-Pn,y:Nn},B:{x:Mn/2,y:Nn},C:{x:24.6,y:Nn}};function Ln({kind:e,state:t}){let n=e===`pnp`,r=t?.on===!0;return(0,m.jsxs)(`svg`,{width:Mn,height:Nn,viewBox:`0 0 ${Mn} ${Nn}`,style:{display:`block`},children:[Object.entries(In).map(([e,t])=>(0,m.jsx)(`rect`,{x:t.x-.8,y:Fn,width:`1.6`,height:19,fill:`var(--lead)`},e)),(0,m.jsx)(`path`,{d:`M2 ${Fn} L2 13 A13 13 0 0 1 28 13 L28 ${Fn} Z`,fill:`#1c1c1e`,stroke:r?`#2f9e44`:`#1c1c1e`,strokeWidth:`1.2`}),(0,m.jsx)(`text`,{x:Mn/2,y:`10`,fontSize:`4.4`,fill:`#e6e6e6`,textAnchor:`middle`,fontFamily:k,children:n?`S8550`:`S8050`}),(0,m.jsx)(`text`,{x:Mn/2,y:`16`,fontSize:`3.8`,fill:`#a0a0a6`,textAnchor:`middle`,fontFamily:k,children:n?`PNP`:`NPN`}),t&&(0,m.jsx)(`text`,{x:Mn/2,y:`21.5`,fontSize:`3.8`,fill:r?`#5fd37a`:`#8e8e93`,textAnchor:`middle`,children:r?`导通`:`截止`}),Object.entries(In).map(([e,t])=>(0,m.jsx)(`text`,{x:t.x,y:25.5,fontSize:`3.6`,fill:`#c8c8cc`,textAnchor:`middle`,fontFamily:k,children:e},e))]})}var Rn={geometry:()=>({width:Mn,height:Nn,pins:In}),Component:({part:e,state:t})=>(0,m.jsx)(Ln,{kind:String(e.props.kind??`npn`),state:t})},zn=40,Bn=62,Vn=9.6,Hn=40,Un={G:{x:zn/2-Vn,y:Bn},D:{x:zn/2,y:Bn},S:{x:29.6,y:Bn}};function Wn({kind:e,state:t}){let n=e===`p`,r=t?.on===!0;return(0,m.jsxs)(`svg`,{width:zn,height:Bn,viewBox:`0 0 ${zn} ${Bn}`,style:{display:`block`},children:[Object.entries(Un).map(([e,t])=>(0,m.jsx)(`rect`,{x:t.x-1,y:Hn,width:`2`,height:22,fill:`var(--lead)`},e)),(0,m.jsx)(`rect`,{x:`4`,y:`1`,width:`32`,height:`15`,rx:`1`,fill:`#b8bcc4`,stroke:`#8e939c`,strokeWidth:`0.6`}),(0,m.jsx)(`circle`,{cx:zn/2,cy:`8`,r:`3.4`,fill:`var(--canvas, #fff)`,stroke:`#8e939c`,strokeWidth:`0.6`}),(0,m.jsx)(`rect`,{x:`4`,y:`15`,width:`32`,height:25,rx:`1`,fill:`#1c1c1e`,stroke:r?`#2f9e44`:`#1c1c1e`,strokeWidth:`1.2`}),(0,m.jsx)(`text`,{x:zn/2,y:`23`,fontSize:`4.6`,fill:`#e6e6e6`,textAnchor:`middle`,fontFamily:k,children:n?`P-MOS`:`N-MOS`}),t&&(0,m.jsx)(`text`,{x:zn/2,y:`30`,fontSize:`4.2`,fill:r?`#5fd37a`:`#8e8e93`,textAnchor:`middle`,children:r?`导通`:`截止`}),Object.entries(Un).map(([e,t])=>(0,m.jsx)(`text`,{x:t.x,y:38,fontSize:`3.8`,fill:`#c8c8cc`,textAnchor:`middle`,fontFamily:k,children:e},e))]})}var Gn={geometry:()=>({width:zn,height:Bn,pins:Un}),Component:({part:e,state:t})=>(0,m.jsx)(Wn,{kind:String(e.props.kind??`n`),state:t})},Kn=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},qn,Jn=class extends b{static{qn=this}static{this.pushbuttonCounter=0}constructor(){super(),this.color=`red`,this.pressed=!1,this.label=``,this.xray=!1,this.sticky=!1,this.pinInfo=[{name:`1.l`,x:0,y:13,signals:[]},{name:`2.l`,x:0,y:32,signals:[]},{name:`1.r`,x:67,y:13,signals:[]},{name:`2.r`,x:67,y:32,signals:[]}],this.uniqueId=`pushbutton`+qn.pushbuttonCounter++}static get styles(){return Be`
      :host {
        display: inline-flex;
        flex-direction: column;
      }

      button {
        border: none;
        background: none;
        padding: 0;
        margin: 0;
        text-decoration: none;
        -webkit-appearance: none;
        -moz-appearance: none;
      }

      .button-active-circle {
        opacity: 0;
      }

      button:active .button-active-circle {
        opacity: 1;
      }

      .clickable-element {
        cursor: pointer;
      }

      .label {
        width: 0;
        min-width: 100%;
        font-size: 12px;
        text-align: center;
        color: gray;
        position: relative;
        line-height: 1;
        top: -2px;
      }
    `}renderSVG(){let{color:e,uniqueId:t,xray:n}=this,r=this.pressed?`url(#grad-down-${t})`:`url(#grad-up-${t})`;return _`<svg
      width="17.802mm"
      height="12mm"
      version="1.1"
      viewBox="-3 0 18 12"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <linearGradient id="grad-up-${t}" x1="0" x2="1" y1="0" y2="1">
          <stop stop-color="#ffffff" offset="0" />
          <stop stop-color="${e}" offset="0.3" />
          <stop stop-color="${e}" offset="0.5" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient id="grad-down-${t}" x1="1" x2="0" y1="1" y2="0">
          <stop stop-color="#ffffff" offset="0" />
          <stop stop-color="${e}" offset="0.3" />
          <stop stop-color="${e}" offset="0.5" />
          <stop offset="1" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="12" height="12" rx=".44" ry=".44" fill="#464646" />
      <rect x=".75" y=".75" width="10.5" height="10.5" rx=".211" ry=".211" fill="#eaeaea" />
      ${n?v`
      <rect
        style="opacity:0.3;fill:#999999;stroke-width:0.563001;paint-order:stroke markers fill"
        id="rect17"
        width="12.087865"
        height="1.0371729"
        x="-0.00075517414"
        y="2.9106798"
      />
      <rect
        style="opacity:0.3;fill:#999999;stroke-width:0.534365;paint-order:stroke markers fill"
        id="rect17-3"
        width="12.087865"
        height="0.93434691"
        x="-0.071111664"
        y="8.0458994"
      />
    `:``}
      <g fill="#1b1b1">
        <circle cx="1.767" cy="1.7916" r=".37" />
        <circle cx="10.161" cy="1.7916" r=".37" />
        <circle cx="10.161" cy="10.197" r=".37" />
        <circle cx="1.767" cy="10.197" r=".37" />
      </g>
      <g fill="#999" stroke-width="1.0154">
        <path
          d="m12.365 2.426c0.06012 0 0.10849 0.0469 0.1085 0.10522v0.38698h2.2173c0.12023 0 0.217 0.0938 0.217 0.21045v0.50721c0 0.1166-0.09677 0.21045-0.217 0.21045h-2.2173v0.40101c0 0.0583-0.0484 0.10528-0.1085 0.10528h-0.36835v-1.9266z"
        />
        <path
          d="m12.365 7.5c0.06012 0 0.10849 0.0469 0.1085 0.10522v0.38698h2.2173c0.12023 0 0.217 0.0938 0.217 0.21045v0.50721c0 0.1166-0.09677 0.21045-0.217 0.21045h-2.2173v0.40101c0 0.0583-0.0484 0.10528-0.1085 0.10528h-0.36835v-1.9266z"
        />
        <path
          d="m-0.35085 4.3526c-0.06012 0-0.10849-0.0469-0.1085-0.10522v-0.38698h-2.2173c-0.12023 0-0.217-0.0938-0.217-0.21045v-0.50721c0-0.1166 0.09677-0.21045 0.217-0.21045h2.2173v-0.40101c0-0.0583 0.0484-0.10528 0.1085-0.10528h0.36835v1.9266z"
        />
        <path
          d="m-0.35085 9.4266c-0.06012 0-0.10849-0.0469-0.1085-0.10522v-0.38698h-2.2173c-0.12023 0-0.217-0.0938-0.217-0.21045v-0.50721c0-0.1166 0.09677-0.21045 0.217-0.21045h2.2173v-0.40101c0-0.0583 0.0484-0.10528 0.1085-0.10528h0.36835v1.9266z"
        />
      </g>
      <g class="clickable-element">
        <circle cx="6" cy="6" r="3.822" fill="${r}" />
        <circle
          class="button-active-circle"
          cx="6"
          cy="6"
          r="3.822"
          fill="url(#grad-down-${t})"
        />
        <circle
          cx="6"
          cy="6"
          r="2.9"
          fill="${e}"
          stroke="#2f2f2f"
          stroke-opacity=".47"
          stroke-width=".08"
        />
      </g>
    </svg>`}render(){let{color:e,label:t}=this;return _`
      <button
        aria-label="${t} ${e} pushbutton"
        @mousedown=${this.down}
        @mouseup=${this.up}
        @touchstart=${this.down}
        @touchend=${this.up}
        @pointerleave=${this.leave}
        @keydown=${e=>tn.includes(e.key)&&this.down()}
        @keyup=${e=>tn.includes(e.key)&&this.up(e)}
      >
        ${this.renderSVG()}
      </button>
      <span class="label">${this.label}</span>
    `}down(){this.pressed||(this.pressed=!0,this.dispatchEvent(new Event(`button-press`)))}up(e){this.pressed&&(an(e)?this.sticky=!0:(this.sticky=!1,this.pressed=!1,this.dispatchEvent(new Event(`button-release`))))}leave(e){this.sticky||this.up(e)}};Kn([S()],Jn.prototype,`color`,void 0),Kn([S()],Jn.prototype,`pressed`,void 0),Kn([S()],Jn.prototype,`label`,void 0),Kn([S({type:Boolean,attribute:`xray`})],Jn.prototype,`xray`,void 0),Jn=qn=Kn([x(`wokwi-pushbutton`)],Jn);var Yn={interactive:!0,geometry:()=>({width:17.802*T,height:12*T,pins:w(`wokwi-pushbutton`,{1:`1.l`,2:`2.l`})}),Component({state:e,running:t,input:n}){let[r,i]=(0,h.useState)(!1),a=e=>{i(e),n({pressed:e})};return(0,m.jsx)(C,{tag:`wokwi-pushbutton`,props:{color:`red`,pressed:r||(e?.pressed??!1)},events:{"button-press":()=>a(!0),"button-release":()=>a(!1)},style:{pointerEvents:t?`auto`:`none`}})}},Xn=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Zn=class extends b{constructor(){super(...arguments),this.values=[0,0,0,0,0,0,0,0],this.pinInfo=[{name:`1a`,number:1,y:51.3,x:8.1,signals:[]},{name:`2a`,number:2,y:51.3,x:17.7,signals:[]},{name:`3a`,number:3,y:51.3,x:27.3,signals:[]},{name:`4a`,number:4,y:51.3,x:36.9,signals:[]},{name:`5a`,number:5,y:51.3,x:46.5,signals:[]},{name:`6a`,number:6,y:51.3,x:56.1,signals:[]},{name:`7a`,number:7,y:51.3,x:65.7,signals:[]},{name:`8a`,number:8,y:51.3,x:75.3,signals:[]},{name:`8b`,number:9,y:3,x:75.3,signals:[]},{name:`7b`,number:10,y:3,x:65.7,signals:[]},{name:`6b`,number:11,y:3,x:56.1,signals:[]},{name:`5b`,number:12,y:3,x:46.5,signals:[]},{name:`4b`,number:13,y:3,x:36.9,signals:[]},{name:`3b`,number:14,y:3,x:27.3,signals:[]},{name:`2b`,number:15,y:3,x:17.7,signals:[]},{name:`1b`,number:16,y:3,x:8.1,signals:[]}]}toggleSwitch(e){this.values[e]=+!this.values[e],this.dispatchEvent(new InputEvent(`switch-change`,{detail:e})),this.requestUpdate()}onKeyDown(e){e.stopPropagation();let t=[`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`].indexOf(e.key);t!==-1&&this.toggleSwitch(t)}drawSwitch(e,t){return v` 
        <rect
        @click=${()=>this.toggleSwitch(e)}
        x="${t+4.693}"
        y="21.2"
        width="5.8168"
        height="13"
      />
      <use
        @click=${()=>this.toggleSwitch(e)}
        xlink:href="#switch"
        x="${t}"
        y=${this.values[e]?-7.2:0}
      />`}preventTextSelection(e){e.detail>1&&e.preventDefault()}render(){return _`
      <svg
        tabindex="0"
        @keydown=${this.onKeyDown}
        @mousedown=${this.preventTextSelection}
        width="82.87"
        height="55.355"
        version="1.1"
        viewBox="0 0 82.87 55.355"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <path
            id="switch"
            transform="translate(-66.856 -41.367)"
            fill="#fffef4"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".77094"
            d="m72.096 69.764s1.3376 0.38247 2.1066 0.39196c0.76893 0.0095 2.44-0.39196 2.44-0.39196 0.39596-0.06361 0.72389 0.32286 0.72389 0.72389v4.3678c0 0.40104-0.52337 0.72389-0.72389 0.72389s-1.6592-0.41225-2.4288-0.40316c-0.76958 0.0091-2.1177 0.40316-2.1177 0.40316-0.39396 0.075-0.72389-0.32286-0.72389-0.72389v-4.3678c0-0.40104 0.32286-0.72389 0.72389-0.72389z"
          />
        </defs>

        <!-- Pins -->
        <g
          transform="translate(-66.856 -41.367)"
          fill="#454837"
          fill-opacity=".49194"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width=".76744"
        >
          <rect x="73" y="87" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="82.6" y="87" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="92.2" y="87" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="101.8" y="87" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="111.4" y="87" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="121" y="87" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="130.6" y="87" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="140.2" y="87" width="2" height="6.5" rx=".7" ry=".7" />

          <rect x="73" y="44.4" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="82.6" y="44.4" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="92.2" y="44.4" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="101.8" y="44.4" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="111.4" y="44.4" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="121" y="44.4" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="130.6" y="44.4" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="140.2" y="44.4" width="2" height="6.5" rx=".7" ry=".7" />
        </g>

        <!-- Board -->
        <rect x="0" y="8.5" width="90.5" height="38.0831" fill="#d72c2c" />

        <!-- Text -->
        <text fill="#fffef4" font-family="sans-serif" font-size="7.66px" style="line-height:1.25">
          <tspan x="6.340" y="18.03">ON</tspan>
          <tspan x="4.35" y="43.28">1</tspan>
          <tspan x="14.485" y="43.28">2</tspan>
          <tspan x="23.956" y="43.28">3</tspan>
          <tspan x="33.57" y="43.28">4</tspan>
          <tspan x="43.05" y="43.28">5</tspan>
          <tspan x="52.36" y="43.28">6</tspan>
          <tspan x="62.45" y="43.28">7</tspan>
          <tspan x="71.92" y="43.28">8</tspan>
        </text>

        <!-- Switches -->
        <g fill="#917c6f" stroke-width=".77094">
          ${this.drawSwitch(0,0)}<!-- -->
          ${this.drawSwitch(1,9.6)}<!-- -->
          ${this.drawSwitch(2,19.4)}<!-- -->
          ${this.drawSwitch(3,29.1)}<!-- -->
          ${this.drawSwitch(4,38.5)}<!-- -->
          ${this.drawSwitch(5,48.1)}<!-- -->
          ${this.drawSwitch(6,57.7)}<!-- -->
          ${this.drawSwitch(7,67.3)}<!-- -->
        </g>
      </svg>
    `}};Xn([S({type:Array})],Zn.prototype,`values`,void 0),Zn=Xn([x(`wokwi-dip-switch-8`)],Zn);var Qn=Object.fromEntries(Array.from({length:8},(e,t)=>[[`A${t+1}`,`${t+1}a`],[`B${t+1}`,`${t+1}b`]]).flat()),$n={interactive:!0,geometry:()=>({width:82.87,height:55.355,pins:w(`wokwi-dip-switch-8`,Qn)}),Component({state:e,running:t,input:n}){let[r,i]=(0,h.useState)(()=>Array(8).fill(!1)),a=(0,h.useRef)(0);return(0,h.useEffect)(()=>{!e?.on||performance.now()-a.current<200||i(t=>t.every((t,n)=>t===!!e.on[n])?t:e.on.map(Boolean))},[e?.on]),(0,m.jsx)(C,{tag:`wokwi-dip-switch-8`,props:{values:r.map(e=>+!!e)},events:{"switch-change":e=>{let t=e.detail,o=r.map((e,n)=>n===t?!e:e);a.current=performance.now(),i(o),n({index:t,on:o[t]})}},style:{pointerEvents:t?`auto`:`none`}})}},er=3.78,tr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},nr=class extends b{constructor(){super(...arguments),this.color=`red`,this.offColor=`#444`,this.background=`black`,this.digits=1,this.colon=!1,this.colonValue=!1,this.pins=`top`,this.values=[0,0,0,0,0,0,0,0]}get pinInfo(){let e=e=>{let{startX:t,cols:n,bottomY:r}=this.pinPositions,i=(e-1)%n,a=1-Math.floor((e-1)/n),o=t+1.27+(a?i:n-i-1)*2.54,s=this.pins===`top`?a?r+1:1:a?r+2:0;return{number:e,x:o*er,y:s*er}};switch(this.digits){case 4:return[{name:`A`,...e(13),signals:[],description:`Segment A`},{name:`B`,...e(9),signals:[],description:`Segment B`},{name:`C`,...e(4),signals:[],description:`Segment C`},{name:`D`,...e(2),signals:[],description:`Segment D`},{name:`E`,...e(1),signals:[],description:`Segment E`},{name:`F`,...e(12),signals:[],description:`Segment F`},{name:`G`,...e(5),signals:[],description:`Segment G`},{name:`DP`,...e(3),signals:[],description:`Decimal Point`},{name:`DIG1`,...e(14),signals:[],description:`Digit 1 Common`},{name:`DIG2`,...e(11),signals:[],description:`Digit 2 Common`},{name:`DIG3`,...e(10),signals:[],description:`Digit 3 Common`},{name:`DIG4`,...e(6),signals:[],description:`Digit 4 Common`},{name:`COM`,...e(7),signals:[],description:`Common pin`},{name:`CLN`,...e(8),signals:[],description:`Colon`}];case 3:return[{name:`A`,...e(11),signals:[],description:`Segment A`},{name:`B`,...e(7),signals:[],description:`Segment B`},{name:`C`,...e(4),signals:[],description:`Segment C`},{name:`D`,...e(2),signals:[],description:`Segment D`},{name:`E`,...e(1),signals:[],description:`Segment E`},{name:`F`,...e(10),signals:[],description:`Segment F`},{name:`G`,...e(5),signals:[],description:`Segment G`},{name:`DP`,...e(3),signals:[],description:`Decimal Point`},{name:`DIG1`,...e(12),signals:[],description:`Digit 1 Common`},{name:`DIG2`,...e(9),signals:[],description:`Digit 2 Common`},{name:`DIG3`,...e(8),signals:[],description:`Digit 3 Common`}];case 2:return[{name:`DIG1`,...e(8),signals:[],description:`Digit 1 Common`},{name:`DIG2`,...e(7),signals:[],description:`Digit 2 Common`},{name:`A`,...e(10),signals:[],description:`Segment A`},{name:`B`,...e(9),signals:[],description:`Segment B`},{name:`C`,...e(1),signals:[],description:`Segment C`},{name:`D`,...e(4),signals:[],description:`Segment D`},{name:`E`,...e(3),signals:[],description:`Segment E`},{name:`F`,...e(6),signals:[],description:`Segment F`},{name:`G`,...e(5),signals:[],description:`Segment G`},{name:`DP`,...e(2),signals:[],description:`Decimal Point`}];default:return[{name:`COM.1`,...e(3),signals:[],description:`Common`},{name:`COM.2`,...e(8),signals:[],description:`Common`},{name:`A`,...e(7),signals:[],description:`Segment A`},{name:`B`,...e(6),signals:[],description:`Segment B`},{name:`C`,...e(4),signals:[],description:`Segment C`},{name:`D`,...e(2),signals:[],description:`Segment D`},{name:`E`,...e(1),signals:[],description:`Segment E`},{name:`F`,...e(9),signals:[],description:`Segment F`},{name:`G`,...e(10),signals:[],description:`Segment G`},{name:`DP`,...e(5),signals:[],description:`Decimal Point`}]}}static get styles(){return Be`
      polygon {
        transform: scale(0.9);
        transform-origin: 50% 50%;
        transform-box: fill-box;
      }
    `}get pinPositions(){let{digits:e}=this,t=Math.ceil((e===4?14:e===3?12:10)/2);return{startX:(12.55*e-t*2.54)/2,bottomY:this.pins===`extend`?21:18,cols:t}}get yOffset(){return this.pins===`extend`?2:0}update(e){(e.has(`digits`)||e.has(`pins`))&&this.dispatchEvent(new CustomEvent(`pininfo-change`)),super.update(e)}renderDigit(e,t){let n=e=>this.values[t+e]?this.color:this.offColor;return v`
      <g transform="skewX(-8) translate(${e}, ${this.yOffset+2.4}) scale(0.81)">
        <polygon points="2 0 8 0 9 1 8 2 2 2 1 1" fill="${n(0)}" />
        <polygon points="10 2 10 8 9 9 8 8 8 2 9 1" fill="${n(1)}" />
        <polygon points="10 10 10 16 9 17 8 16 8 10 9 9" fill="${n(2)}" />
        <polygon points="8 18 2 18 1 17 2 16 8 16 9 17" fill="${n(3)}" />
        <polygon points="0 16 0 10 1 9 2 10 2 16 1 17" fill="${n(4)}" />
        <polygon points="0 8 0 2 1 1 2 2 2 8 1 9" fill=${n(5)} />
        <polygon points="2 8 8 8 9 9 8 10 2 10 1 9" fill=${n(6)} />
      </g>
      <circle cx="${e+7.4}" cy="${this.yOffset+16}" r="0.89" fill="${n(7)}" />
    `}renderColon(){let{yOffset:e}=this,t=1.5+12.7*Math.round(this.digits/2);return v`
      <g transform="skewX(-8)"  fill="${this.colonValue?this.color:this.offColor}">
        <circle cx="${t}" cy="${e+5.75}" r="0.89" />
        <circle cx="${t}" cy="${e+13.25}" r="0.89" />
      </g>
    `}renderPins(){let{cols:e,bottomY:t,startX:n}=this.pinPositions;return v`
      <g fill="url(#pin-pattern)" transform="translate(${n}, 0)">
        <rect height="2" width=${e*2.54} />
        <rect height="2" width=${e*2.54} transform="translate(0, ${t})" />
      </g>
    `}render(){let{digits:e,colon:t,pins:n,yOffset:r}=this,i=12.55*e,a=n===`extend`?23:22,o=[];for(let t=0;t<e;t++)o.push(this.renderDigit(3.5+t*12.7,t*8));return _`
      <svg
        width="${i}mm"
        height="${a}mm"
        version="1.1"
        viewBox="0 0 ${i} ${a}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="pin-pattern" height="2" width="2.54" patternUnits="userSpaceOnUse">
            ${n===`extend`?v`<rect x="1.02" y="0" height="2" width="0.5" fill="#aaa" />`:v`<circle cx="1.27" cy="1" r="0.5" fill="#aaa" />`}
          </pattern>
        </defs>
        <rect x="0" y="${r}" width="${i}" height="20.5" />
        ${o}<!-- -->
        ${t?this.renderColon():null}<!-- -->
        ${n===`none`?null:this.renderPins()}
      </svg>
    `}};tr([S()],nr.prototype,`color`,void 0),tr([S()],nr.prototype,`offColor`,void 0),tr([S()],nr.prototype,`background`,void 0),tr([S({type:Number})],nr.prototype,`digits`,void 0),tr([S({type:Boolean})],nr.prototype,`colon`,void 0),tr([S({type:Boolean})],nr.prototype,`colonValue`,void 0),tr([S()],nr.prototype,`pins`,void 0),tr([S({type:Array})],nr.prototype,`values`,void 0),nr=tr([x(`wokwi-7segment`)],nr);var rr=`#3a3a3a`,ir={red:[255,40,40],green:[60,230,90],blue:[80,140,255],yellow:[255,220,40],white:[245,245,245]};function ar(e,t){let[n,r,i]=ir[e]??ir.red,a=(e,n)=>Math.round(e+(n-e)*t);return`rgb(${a(58,n)}, ${a(58,r)}, ${a(58,i)})`}function or(e,t,n){let r=e.shadowRoot;if(!r)return;let i=r.querySelectorAll(`svg > g[transform^="skewX(-8) translate"]`),a=r.querySelectorAll(`svg > circle`);i.forEach((e,r)=>{[...e.querySelectorAll(`polygon`),a[r]??null].forEach((e,i)=>{if(!e)return;let a=D(t[r*8+i]??0);e.style.fill=a>0?ar(n,a):``})})}function sr({digits:e,levels:t,color:n,colon:r}){return(0,m.jsx)(C,{tag:`wokwi-7segment`,props:{digits:e,color:ar(n,1),offColor:rr,values:t.map(e=>+(e>0)),colon:r!==void 0,colonValue:r===!0},onUpdated:e=>or(e,t,n)})}var cr=e=>({width:12.55*e*T,height:22*T}),lr={geometry:()=>({...cr(1),pins:w(`wokwi-7segment`,{...Object.fromEntries(s.map(e=>[e,e])),COM:`COM.1`},{digits:1})}),Component({part:e,state:t,running:n}){let r=E(t,e=>e.segments,n),i=r.length>0?r:Array(8).fill(0);return(0,m.jsx)(sr,{digits:1,levels:i,color:String(e.props.color??`red`)})}},ur={...Object.fromEntries(s.map(e=>[e,e])),...Object.fromEntries([1,2,3,4].map(e=>[`D${e}`,`DIG${e}`]))},dr={geometry:()=>({...cr(4),pins:w(`wokwi-7segment`,ur,{digits:4})}),Component({part:e,state:t,running:n}){let r=E(t,e=>Array.from({length:32},(t,n)=>e.digits?.[n>>3]?.[n&7]??0),n),i=r.length>0?r:Array(32).fill(0);return(0,m.jsx)(sr,{digits:4,levels:i,color:String(e.props.color??`red`)})}},fr=e=>({send:e}),pr=112,mr=48,hr={TXD:{x:104,y:14.4},RXD:{x:104,y:24},GND:{x:104,y:33.6}};function gr({state:e}){let[t,n]=(0,h.useState)(!1),r=(0,h.useRef)(void 0),i=(e?.received?.length??0)>0;return(0,h.useEffect)(()=>{i&&(n(!0),clearTimeout(r.current),r.current=setTimeout(()=>n(!1),80))},[e,i]),(0,h.useEffect)(()=>()=>clearTimeout(r.current),[]),(0,m.jsxs)(`svg`,{width:pr,height:mr,viewBox:`0 0 ${pr} ${mr}`,style:{display:`block`},children:[(0,m.jsx)(`rect`,{x:`0`,y:`12`,width:`26`,height:`24`,rx:`1.5`,fill:`#c9ccd1`,stroke:`#8e939b`}),(0,m.jsx)(`rect`,{x:`3`,y:`17`,width:`16`,height:`14`,fill:`#8e939b`}),(0,m.jsx)(`rect`,{x:`20`,y:`2`,width:`92`,height:`44`,rx:`3`,fill:`#1d5fa6`,stroke:`#164a82`}),(0,m.jsx)(`rect`,{x:`36`,y:`15`,width:`24`,height:`18`,rx:`1`,fill:`#1e1e1e`}),(0,m.jsx)(`text`,{x:`48`,y:`26`,fontSize:`5`,fill:`#cfd3d8`,textAnchor:`middle`,fontFamily:`monospace`,children:`CH340`}),(0,m.jsx)(`rect`,{x:`68`,y:`10`,width:`6`,height:`3.5`,rx:`0.8`,fill:`#ff4a3d`}),(0,m.jsx)(`text`,{x:`77`,y:`13.2`,fontSize:`5`,fill:`#dbe7f5`,children:`PWR`}),(0,m.jsx)(`rect`,{x:`68`,y:`34.5`,width:`6`,height:`3.5`,rx:`0.8`,fill:t?`#3ee66b`:`#2c3e2f`}),(0,m.jsx)(`text`,{x:`77`,y:`37.6`,fontSize:`5`,fill:`#dbe7f5`,children:`RX`}),(0,m.jsx)(`rect`,{x:`99.5`,y:`9.6`,width:`9`,height:`28.8`,rx:`1`,fill:`#141414`}),Object.entries(hr).map(([e,t])=>(0,m.jsxs)(`g`,{children:[(0,m.jsx)(`rect`,{x:t.x-1.8,y:t.y-1.8,width:`3.6`,height:`3.6`,fill:`#d4af37`}),(0,m.jsx)(`text`,{x:t.x-7,y:t.y+2,fontSize:`6`,fill:`#ffffff`,textAnchor:`end`,fontFamily:`monospace`,children:e})]},e))]})}var _r={geometry:()=>({width:pr,height:mr,pins:hr}),Component:({state:e})=>(0,m.jsx)(gr,{state:e})},j={W:72,LEG:10,BODY_H:44},M=j.LEG+j.BODY_H+16,vr=e=>Object.fromEntries(e.map((e,t)=>[e,{x:j.W/2-9.6+t*9.6,y:2}]));function yr({pins:e,color:t,children:n}){return(0,m.jsxs)(m.Fragment,{children:[Object.entries(e).map(([e,t])=>(0,m.jsxs)(`g`,{children:[(0,m.jsx)(`rect`,{x:t.x-1,y:t.y,width:`2`,height:j.LEG,fill:`var(--lead)`}),(0,m.jsx)(`text`,{x:t.x,y:j.LEG+6,fontSize:`3.4`,fill:`#ffffff`,textAnchor:`middle`,fontFamily:k,children:e})]},e)),(0,m.jsx)(`rect`,{x:4,y:j.LEG,width:j.W-8,height:j.BODY_H,rx:`3`,fill:t,style:{mixBlendMode:`normal`}}),n]})}function br(e){return(0,m.jsxs)(`g`,{className:`canvas-ui`,role:`button`,"aria-pressed":e.on,style:{cursor:`pointer`},onClick:t=>{t.stopPropagation(),e.onClick?.()},onPointerDown:t=>{e.onPress&&(t.stopPropagation(),t.target.setPointerCapture?.(t.pointerId),e.onPress(!0))},onPointerUp:()=>e.onPress?.(!1),onPointerCancel:()=>e.onPress?.(!1),children:[(0,m.jsx)(`title`,{children:e.title}),(0,m.jsx)(`rect`,{x:e.x,y:e.y,width:e.w,height:11,rx:11/2,fill:e.on?`#2563eb`:`var(--chip)`,stroke:e.on?`#2563eb`:`var(--chip-line)`,strokeWidth:`0.6`}),(0,m.jsx)(`text`,{x:e.x+e.w/2,y:e.y+7.6,fontSize:`5.2`,fill:e.on?`#ffffff`:`var(--ink)`,textAnchor:`middle`,children:e.label})]})}var xr=9.6,Sr=14,Cr=[`VCC`,`GND`,`TXD`,`RXD`,`STATE`,`EN`],wr=Object.fromEntries(Cr.map((e,t)=>[e,{x:2,y:Sr+t*xr}])),Tr=120,Er=Sr+Cr.length*xr+10,Dr={geometry:()=>({width:Tr,height:Er,pins:wr}),Component({state:e,running:t,input:n}){let r=e?.powered?e.at?`AT 指令模式`:e.connected?`手机已连接`:`等待手机连接`:`未通电`;return(0,m.jsxs)(`svg`,{width:Tr,height:Er,viewBox:`0 0 ${Tr} ${Er}`,style:{display:`block`},children:[(0,m.jsx)(`rect`,{x:10,y:2,width:108,height:Er-4,rx:`3`,fill:`#1f5fa8`}),Cr.map(e=>(0,m.jsxs)(`g`,{children:[(0,m.jsx)(`rect`,{x:wr[e].x-1,y:wr[e].y-1,width:`10`,height:`2`,fill:`var(--lead)`}),(0,m.jsx)(`text`,{x:13,y:wr[e].y+1.6,fontSize:`4`,fill:`#ffffff`,fontFamily:k,children:e})]},e)),(0,m.jsx)(`rect`,{x:44,y:8,width:64,height:34,rx:`2`,fill:`#2b8a3e`}),(0,m.jsx)(`path`,{d:`M92 12 h12 v4 h-10 v4 h10 v4 h-10 v4 h10`,fill:`none`,stroke:`#e9c46a`,strokeWidth:`1.2`}),(0,m.jsx)(`text`,{x:66,y:28,fontSize:`6`,fill:`#ffffff`,textAnchor:`middle`,fontFamily:k,children:`HC-05`}),(0,m.jsx)(`circle`,{cx:50,cy:50,r:`2.2`,fill:e?.powered?`#ff6b6b`:`#5c1d1d`,opacity:e?.powered&&!e.connected?.6:1}),(0,m.jsx)(`text`,{x:56,y:52,fontSize:`5`,fill:`#ffffff`,children:r}),t&&e?.powered&&!e.at&&(0,m.jsx)(br,{x:56,y:Er-18,w:54,label:e.connected?`手机断开`:`手机连上`,title:e.connected?`让手机断开蓝牙（STATE 变低，单片机发的数据没人收）`:`让手机连上蓝牙（STATE 变高）`,on:e.connected,onClick:()=>n({connected:!e.connected})})]})}},Or=9.6,kr=14,Ar=[`VCC`,`GND`,`TX`,`RX`,`EN`,`RST`],jr=Object.fromEntries(Ar.map((e,t)=>[e,{x:2,y:kr+t*Or}])),Mr=150,Nr=kr+Ar.length*Or+30,Pr={geometry:()=>({width:Mr,height:Nr,pins:jr}),Component({state:e}){let t=e?.powered?e.wifi?`WiFi 已连上`:`WiFi 没连`:`未通电`,n=e?.server==null?e?.linked?`TCP 已连接`:``:`服务器 :${e.server}${e.linked?` · 手机已连上`:``}`;return(0,m.jsxs)(`svg`,{width:Mr,height:Nr,viewBox:`0 0 ${Mr} ${Nr}`,style:{display:`block`},children:[(0,m.jsx)(`rect`,{x:10,y:2,width:138,height:Nr-4,rx:`3`,fill:`#1c1c1e`}),Ar.map(e=>(0,m.jsxs)(`g`,{children:[(0,m.jsx)(`rect`,{x:jr[e].x-1,y:jr[e].y-1,width:`10`,height:`2`,fill:`var(--lead)`}),(0,m.jsx)(`text`,{x:13,y:jr[e].y+1.6,fontSize:`4`,fill:`#e9ecef`,fontFamily:k,children:e})]},e)),(0,m.jsx)(`rect`,{x:40,y:10,width:30,height:22,rx:`1`,fill:`#868e96`}),(0,m.jsx)(`text`,{x:55,y:23,fontSize:`4.4`,fill:`#212529`,textAnchor:`middle`,fontFamily:k,children:`ESP8266`}),(0,m.jsx)(`path`,{d:`M110 8 h28 v6 h-24 v6 h24 v6 h-24 v6 h24`,fill:`none`,stroke:`#c9a227`,strokeWidth:`1.2`}),(0,m.jsx)(`circle`,{cx:80,cy:14,r:`2`,fill:e?.powered?`#ff6b6b`:`#5c1d1d`}),(0,m.jsx)(`circle`,{cx:88,cy:14,r:`2`,fill:e?.wifi?`#4dabf7`:`#1b3a57`}),(0,m.jsx)(`text`,{x:40,y:44,fontSize:`5`,fill:`#ffffff`,children:t}),(0,m.jsx)(`text`,{x:40,y:51,fontSize:`4.4`,fill:`#ced4da`,children:n}),(e?.log??[]).map((e,t)=>(0,m.jsx)(`text`,{x:14,y:Nr-26+t*6,fontSize:`4.2`,fill:e.startsWith(`→`)?`#ffd43b`:`#8ce99a`,fontFamily:k,children:e.length>34?`${e.slice(0,33)}…`:e},t))]})}},Fr=40,Ir=44,Lr={C:{x:15,y:42},A:{x:25,y:42}},Rr={geometry:()=>({width:Fr,height:Ir,pins:Lr}),Component:({state:e})=>{let t=e?.duty??0;return(0,m.jsxs)(`svg`,{width:Fr,height:Ir,viewBox:`0 0 ${Fr} ${Ir}`,style:{display:`block`},children:[(0,m.jsx)(`rect`,{x:14,y:24,width:`2`,height:20,fill:`var(--lead)`}),(0,m.jsx)(`rect`,{x:24,y:24,width:`2`,height:20,fill:`var(--lead)`}),t>0&&(0,m.jsx)(`circle`,{cx:20,cy:13,r:12,fill:`rgba(170, 120, 255, 0.4)`}),(0,m.jsx)(`path`,{d:`M13 25 V13 A7 7 0 0 1 27 13 V25 Z`,fill:`#9fd3f5`,stroke:`#5aa9d6`,strokeWidth:`0.6`,opacity:`0.9`}),(0,m.jsx)(`rect`,{x:12,y:23,width:`16`,height:`3`,fill:`#7dbbe0`}),(0,m.jsx)(`text`,{x:20,y:6,fontSize:`4.5`,fill:`var(--ink-2)`,textAnchor:`middle`,children:`IR`})]})}},N=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},zr=3.55,Br=5.95,Vr={green:`#6cb201`,blue:`#000eff`},P=class extends b{constructor(){super(...arguments),this.color=`black`,this.background=`green`,this.characters=new Uint8Array(32),this.font=le,this.cursor=!1,this.blink=!1,this.cursorX=0,this.cursorY=0,this.backlight=!0,this.pins=`full`,this.screenOnly=!1,this.numCols=16,this.numRows=2}get text(){return Array.from(this.characters).map(e=>String.fromCharCode(e)).join(``)}set text(e){this.characters=new Uint8Array(e.split(``).map(e=>e.charCodeAt(0)))}static get styles(){return Be`
      .cursor-blink {
        animation: cursor-blink;
      }

      @keyframes cursor-blink {
        from {
          opacity: 0;
        }
        25% {
          opacity: 1;
        }
        75% {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }
    `}get panelHeight(){return this.rows*5.75}get pinInfo(){let{panelHeight:e}=this,t=87.5+e*er;switch(this.pins){case`i2c`:return[{name:`GND`,x:4,y:32,number:1,signals:[{type:`power`,signal:`GND`}]},{name:`VCC`,x:4,y:41.5,number:2,signals:[{type:`power`,signal:`VCC`}]},{name:`SDA`,x:4,y:51,number:3,signals:[Xt(`SDA`)]},{name:`SCL`,x:4,y:60.5,number:4,signals:[Xt(`SCL`)]}];default:return[{name:`VSS`,x:32,y:t,number:1,signals:[{type:`power`,signal:`GND`}]},{name:`VDD`,x:41.5,y:t,number:2,signals:[{type:`power`,signal:`VCC`}]},{name:`V0`,x:51.5,y:t,number:3,signals:[]},{name:`RS`,x:60.5,y:t,number:4,signals:[]},{name:`RW`,x:70.5,y:t,number:5,signals:[]},{name:`E`,x:80,y:t,number:6,signals:[]},{name:`D0`,x:89.5,y:t,number:7,signals:[]},{name:`D1`,x:99.5,y:t,number:8,signals:[]},{name:`D2`,x:109,y:t,number:9,signals:[]},{name:`D3`,x:118.5,y:t,number:10,signals:[]},{name:`D4`,x:128,y:t,number:11,signals:[]},{name:`D5`,x:137.5,y:t,number:12,signals:[]},{name:`D6`,x:147,y:t,number:13,signals:[]},{name:`D7`,x:156.5,y:t,number:14,signals:[]},{name:`A`,x:166.5,y:t,number:15,signals:[]},{name:`K`,x:176,y:t,number:16,signals:[]}]}}get cols(){return this.numCols}get rows(){return this.numRows}update(e){e.has(`pins`)&&this.dispatchEvent(new CustomEvent(`pininfo-change`)),super.update(e)}path(e){let t=[],{cols:n}=this;for(let r=0;r<e.length;r++){let i=r%n*zr,a=Math.floor(r/n)*Br;for(let n=0;n<8;n++){let o=this.font[e[r]*8+n];for(let e=0;e<5;e++)if(o&1<<e){let r=(i+e*.6).toFixed(2),o=(a+n*.7).toFixed(2);t.push(`M ${r} ${o}h0.55v0.65h-0.55Z`)}}}return t.join(` `)}renderCursor(){let{cols:e,rows:t,cursor:n,cursorX:r,cursorY:i,blink:a,color:o}=this,s=12.45+r*zr,c=12.55+i*Br;if(r<0||r>=e||i<0||i>=t)return null;let l=[];if(a&&l.push(v`
        <rect x="${s}" y="${c}" width="2.95" height="5.55" fill="${o}">
          <animate
            attributeName="opacity"
            values="0;0;0;0;1;1;0;0;0;0"
            dur="1s"
            fill="freeze"
            repeatCount="indefinite"
          />
        </rect>
      `),n){let e=c+.7*7;l.push(v`<rect x="${s}" y="${e}" width="2.95" height="0.65" fill="${o}" />`)}return l}renderI2CPins(){return v`
      <rect x="7.55" y="-2.5" height="2.5" width="10.16" fill="url(#pins)" transform="rotate(90)" />
      <text fill="white" font-size="1.5px" font-family= "monospace">
      <tspan y="6.8" x="0.7" fill="white">1</tspan>
      <tspan y="8.9" x="2.3" fill="white">GND</tspan>
      <tspan y="11.4" x="2.3" fill="white">VCC</tspan>
      <tspan y="14" x="2.3" fill="white">SDA</tspan>
      <tspan y="16.6" x="2.3" fill="white">SCL</tspan>
      </text>
    `}renderPins(e){return v`
      <g transform="translate(0, ${e+21.1})">
        <rect x="7.55" y="1" height="2.5" width="40.64" fill="url(#pins)" />
        <text fill="white" font-size="1.5px" font-family= "monospace">
          <tspan x="6" y="2.7">1</tspan>
          <tspan x="7.2" y="0.7">VSS</tspan>
          <tspan x="9.9" y="0.7">VDD</tspan>
          <tspan x="12.7" y="0.7">V0</tspan>
          <tspan x="15.2" y="0.7">RS</tspan>
          <tspan x="17.8" y="0.7">RW</tspan>
          <tspan x="20.8" y="0.7">E</tspan>
          <tspan x="22.7" y="0.7">D0</tspan>
          <tspan x="25.3" y="0.7">D1</tspan>
          <tspan x="27.9" y="0.7">D2</tspan>
          <tspan x="30.4" y="0.7">D3</tspan>
          <tspan x="33" y="0.7">D4</tspan>
          <tspan x="35.6" y="0.7">D5</tspan>
          <tspan x="38.2" y="0.7">D6</tspan>
          <tspan x="40.8" y="0.7">D7</tspan>
          <tspan x="43.6" y="0.7">A</tspan>
          <tspan x="46.2" y="0.7">K</tspan>
          <tspan x="48" y="2.7">16</tspan>
        </text>
      </g>
    `}render(){let{color:e,characters:t,background:n,pins:r,panelHeight:i,cols:a}=this,o=this.backlight?0:.5,s=n in Vr?Vr[n]:Vr,c=a*3.5125,l=this.screenOnly?c:c+23.8,u=this.screenOnly?i:i+24.5,d=12.45,f=12.55;return _`
      <svg
        width="${l}mm"
        height="${u}mm"
        version="1.1"
        viewBox="${this.screenOnly?`${d} ${f} ${c} ${i}`:`0 0 ${l} ${u}`}"
        style="font-size: 1.5px; font-family: monospace"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="characters"
            width="3.55"
            height="5.95"
            patternUnits="userSpaceOnUse"
            x="12.45"
            y="12.55"
          >
            <rect width="2.95" height="5.55" fill-opacity="0.05" />
          </pattern>
          <pattern id="pins" width="2.54" height="3.255" patternUnits="userSpaceOnUse" y="1.1">
            <path
              fill="#92926d"
              d="M0,0.55c0,0 0.21,-0.52 0.87,-0.52 0.67,0 0.81,0.51 0.81,0.51v1.81h-1.869z"
            />
            <circle r="0.45" cx="0.827" cy="0.9" color="black" />
          </pattern>
        </defs>
        <rect width="${l}" height="${u}" fill="#087f45" />
        <rect x="4.95" y="5.7" width="${c+15}" height="${i+13.7}" />
        <rect
          x="7.55"
          y="10.3"
          width="${c+9.8}"
          height="${i+4.5}"
          rx="1.5"
          ry="1.5"
          fill="${s}"
        />
        <rect
          x="7.55"
          y="10.3"
          width="${c+9.8}"
          height="${i+4.5}"
          rx="1.5"
          ry="1.5"
          opacity="${o}"
        />
        ${r===`i2c`?this.renderI2CPins():null}
        ${r===`full`?this.renderPins(i):null}
        <rect
          x="${d}"
          y="${f}"
          width="${c}"
          height="${i}"
          fill="url(#characters)"
        />
        <path
          d="${this.path(t)}"
          transform="translate(${d}, ${f})"
          fill="${e}"
        />
        ${this.renderCursor()}
      </svg>
    `}};N([S()],P.prototype,`color`,void 0),N([S()],P.prototype,`background`,void 0),N([S({type:Array})],P.prototype,`characters`,void 0),N([S()],P.prototype,`font`,void 0),N([S()],P.prototype,`cursor`,void 0),N([S()],P.prototype,`blink`,void 0),N([S()],P.prototype,`cursorX`,void 0),N([S()],P.prototype,`cursorY`,void 0),N([S()],P.prototype,`backlight`,void 0),N([S()],P.prototype,`pins`,void 0),N([S()],P.prototype,`screenOnly`,void 0),N([S()],P.prototype,`text`,null),P=N([x(`wokwi-lcd1602`)],P);function Hr(e){let t=0;for(let n=0;n<5;n++)e&1<<n&&(t|=1<<4-n);return t}function Ur(e){let t=new Uint8Array(le);if(!e)return t;for(let n=0;n<16;n++)for(let r=0;r<8;r++)t[n*8+r]=Hr((e[(n&7)*8+r]??0)&31);return t}function Wr(e){let t=new Uint8Array(32).fill(32);if(e)for(let n=0;n<32;n++)t[n]=(e[n]??32)&255;return t}var Gr=[`VSS`,`VDD`,`V0`,`RS`,`RW`,`E`,...Array.from({length:8},(e,t)=>`D${t}`),`A`,`K`],Kr=Object.fromEntries(Gr.map(e=>[e,e]));function qr(e,t){let n=e.shadowRoot?.querySelector(`svg > rect[opacity]`);n&&(n.style.opacity=String(.5*(1-D(t))))}var Jr={geometry:()=>({width:80*T,height:36*T,pins:w(`wokwi-lcd1602`,Kr)}),Component({state:e,running:t}){let n=e?.on===!0,[r=0]=E(e,e=>[e.backlight],t),i=n?(e.chars??[]).join(`,`):``,a=(0,h.useMemo)(()=>Wr(n?e.chars:void 0),[i]),o=e?.cgram?.join(`,`)??``,s=(0,h.useMemo)(()=>Ur(e?.cgram),[o]),c=n?e.cursor:null;return(0,m.jsx)(C,{tag:`wokwi-lcd1602`,props:{characters:a,font:s,backlight:r>0,cursor:!!c?.underline,blink:!!c?.blink,cursorX:c?.col??0,cursorY:c?.row??0},onUpdated:e=>qr(e,r)})}},Yr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Xr=[10.7,25,39.3,53.6],Zr=[7,22,37,52];function Qr(e){return!isNaN(parseFloat(e))}var $r=class extends b{constructor(){super(...arguments),this.columns=`4`,this.connector=!1,this.keys=[`1`,`2`,`3`,`A`,`4`,`5`,`6`,`B`,`7`,`8`,`9`,`C`,`*`,`0`,`#`,`D`],this.pressedKeys=new Set}get pinInfo(){switch(this.columns){case`3`:return[{name:`R1`,x:76.5,y:338,signals:[]},{name:`R2`,x:86,y:338,signals:[]},{name:`R3`,x:95.75,y:338,signals:[]},{name:`R4`,x:105.25,y:338,signals:[]},{name:`C1`,x:115,y:338,signals:[]},{name:`C2`,x:124.5,y:338,signals:[]},{name:`C3`,x:134,y:338,signals:[]}];default:return[{name:`R1`,x:100,y:338,signals:[]},{name:`R2`,x:110,y:338,signals:[]},{name:`R3`,x:119.5,y:338,signals:[]},{name:`R4`,x:129,y:338,signals:[]},{name:`C1`,x:138.5,y:338,signals:[]},{name:`C2`,x:148,y:338,signals:[]},{name:`C3`,x:157.75,y:338,signals:[]},{name:`C4`,x:167.5,y:338,signals:[]}]}}static get styles(){return Be`
      text {
        fill: #dfe2e5;
        user-select: none;
      }

      g[tabindex] {
        cursor: pointer;
      }

      g[tabindex]:focus,
      g[tabindex]:active {
        stroke: white;
        outline: none;
      }

      .blue-key:focus,
      .red-key:focus {
        filter: url(#shadow);
      }

      .blue-key:active,
      .blue-key.pressed {
        fill: #4e50d7;
      }

      .red-key:active,
      .red-key.pressed {
        fill: #ab040b;
      }

      g[tabindex]:focus text {
        stroke: none;
      }

      g[tabindex]:active text,
      .blue-key.pressed text,
      .red-key.pressed text {
        fill: white;
        stroke: none;
      }
    `}update(e){e.has(`columns`)&&this.dispatchEvent(new CustomEvent(`pininfo-change`)),super.update(e)}renderKey(e,t){let n=this.keys[e*4+t]??``,r=Qr(n)?`blue-key`:`red-key`,i=n.toUpperCase();return v`<g
      transform="translate(${Zr[t]} ${Xr[e]})"
      tabindex="0"
      class=${r}
      data-key-name=${i}
      @blur=${e=>{this.up(n,e.currentTarget)}}
      @mousedown=${()=>this.down(n)}
      @mouseup=${()=>this.up(n)}
      @touchstart=${()=>this.down(n)}
      @touchend=${()=>this.up(n)}
      @keydown=${e=>tn.includes(e.key)&&this.down(n,e.currentTarget)}
      @keyup=${e=>tn.includes(e.key)&&this.up(n,e.currentTarget)}
    >
      <rect width="11.2" height="11" rx="1.4" ry="1.4" stroke="#b1b5b9" stroke-width=".75" />
      <text x="5.6" y="8.1">${n}</text>
    </g>`}render(){let{connector:e}=this,t=this.columns===`4`,n=2.54,r=t?70.336:55.336,i=t?n*8:n*7,a=76+(e?15:0);return _`
      <svg
        width="${r}mm"
        height="${a}mm"
        version="1.1"
        viewBox="0 0 ${r} ${a}"
        font-family="sans-serif"
        font-size="8.2px"
        text-anchor="middle"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        @keydown=${e=>this.keyStrokeDown(e.key)}
        @keyup=${e=>this.keyStrokeUp(e.key)}
      >
        <defs>
          <pattern id="wires" width="2.54" height="8" patternUnits="userSpaceOnUse">
            <rect width="2.54" height="8" fill="#eee" />
            <rect x="0.77" width="1" height="6" fill="#d9d5bc" />
            <circle cx="1.27" cy="6" r="0.75" fill="#d9d5bc" />
            <rect x="0.52" y="6" width="1.5" height="2" fill="#d9d5bc" />
          </pattern>
          <pattern id="wires-marks" width="2.54" height="8" patternUnits="userSpaceOnUse">
            <rect x="0.52" y="6" width="1.5" height="2" fill="#746d41" />
          </pattern>
          ${Jt}
          <filter id="shadow">
            <feDropShadow dx="0" dy="0" stdDeviation="0.5" flood-color="#ffff99" />
          </filter>
        </defs>

        <!-- Keypad outline -->
        <rect x="0" y="0" width="${r}" height="76" rx="5" ry="5" fill="#454449" />
        <rect
          x="2.78"
          y="3.25"
          width="${t?65:50}"
          height="68.6"
          rx="3.5"
          ry="3.5"
          fill="none"
          stroke="#b1b5b9"
          stroke-width="1"
        />

        <!-- Connector -->
        ${e?v`
            <g transform="translate(${(r-i)/2}, 76)">
              <rect width="${i}" height="8" fill="url(#wires)" />
              <rect width="10.16" height="8" fill="url(#wires-marks)" />
              <rect y="8" width="${i}" height="7" fill="#333" />
              <rect transform="translate(0, 12)" width="${i}" height="2.54" fill="url(#pins-female)" />
            </g>
          `:null}

        <!-- Blue keys -->
        <g fill="#4e90d7">
          <g>${this.renderKey(0,0)}</g>
          <g>${this.renderKey(0,1)}</g>
          <g>${this.renderKey(0,2)}</g>
          <g>${this.renderKey(1,0)}</g>
          <g>${this.renderKey(1,1)}</g>
          <g>${this.renderKey(1,2)}</g>
          <g>${this.renderKey(2,0)}</g>
          <g>${this.renderKey(2,1)}</g>
          <g>${this.renderKey(2,2)}</g>
          <g>${this.renderKey(3,1)}</g>
        </g>

        <!-- Red keys -->
        <g fill="#e94541">
          <g>${this.renderKey(3,0)}</g>
          <g>${this.renderKey(3,2)}</g>
          ${t&&v`
              <g>${this.renderKey(0,3)}</g>
              <g>${this.renderKey(1,3)}</g>
              <g>${this.renderKey(2,3)}</g>
              <g>${this.renderKey(3,3)}</g>
          `}
        </g>
      </svg>
    `}keyIndex(e){let t=this.keys.indexOf(e);return{row:Math.floor(t/4),column:t%4}}down(e,t){this.pressedKeys.has(e)||(t&&t.classList.add(`pressed`),this.pressedKeys.add(e),this.dispatchEvent(new CustomEvent(`button-press`,{detail:{key:e,...this.keyIndex(e)}})))}up(e,t){this.pressedKeys.has(e)&&(t&&t.classList.remove(`pressed`),this.pressedKeys.delete(e),this.dispatchEvent(new CustomEvent(`button-release`,{detail:{key:e,...this.keyIndex(e)}})))}keyStrokeDown(e){let t=e.toUpperCase(),n=this.shadowRoot?.querySelector(`[data-key-name="${t}"]`);n&&this.down(t,n)}keyStrokeUp(e){let t=e.toUpperCase(),n=this.shadowRoot?.querySelector(`[data-key-name="${t}"]`),r=this.shadowRoot?.querySelectorAll(`.pressed`);e===`Shift`&&r?.forEach(e=>{let t=e.dataset.keyName;t&&this.up(t,e)}),n&&this.up(t,n)}};Yr([S()],$r.prototype,`columns`,void 0),Yr([S()],$r.prototype,`connector`,void 0),Yr([S({type:Array})],$r.prototype,`keys`,void 0),$r=Yr([x(`wokwi-membrane-keypad`)],$r);var ei=Object.fromEntries([`R1`,`R2`,`R3`,`R4`,`C1`,`C2`,`C3`,`C4`].map(e=>[e,e])),ti=e=>Array.isArray(e)&&e.length===16?{keys:e.map(String)}:{},ni={interactive:!0,geometry:()=>({width:70.336*T,height:91*T,pins:w(`wokwi-membrane-keypad`,ei,{connector:!0})}),Component({part:e,running:t,input:n}){let r=(0,h.useRef)(null),i=(0,h.useRef)(new Set),a=(e,t)=>{r.current=e.currentTarget;let{row:a,column:o}=e.detail,s=a*4+o;t?i.current.add(s):i.current.delete(s),n({key:s,pressed:t})};return(0,h.useEffect)(()=>{let e=()=>{if(i.current.size===0)return;let e=r.current?.shadowRoot?.activeElement;(e instanceof SVGElement||e instanceof HTMLElement)&&e.blur()};return t||e(),window.addEventListener(`pointerup`,e),()=>window.removeEventListener(`pointerup`,e)},[t]),(0,m.jsx)(C,{tag:`wokwi-membrane-keypad`,props:{connector:!0,...ti(e.props.keys)},events:{"button-press":e=>a(e,!0),"button-release":e=>a(e,!1)},style:{pointerEvents:t?`auto`:`none`}})}},ri=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ii=class extends b{constructor(){super(...arguments),this.hasSignal=!1,this.pinInfo=[{name:`1`,x:27,y:84,signals:[]},{name:`2`,x:37,y:84,signals:[]}]}static get styles(){return Be`
      :host {
        display: inline-block;
      }

      .buzzer-container {
        display: flex;
        flex-direction: column;
        width: 75px;
      }

      .music-note {
        position: relative;
        left: 40px;
        animation-duration: 1.5s;
        animation-name: animate-note;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        transform: scale(1.5);
        fill: blue;
        offset-path: path(
          'm0 0c-0.9-0.92-1.8-1.8-2.4-2.8-0.56-0.92-0.78-1.8-0.58-2.8 0.2-0.92 0.82-1.8 1.6-2.8 0.81-0.92 1.8-1.8 2.6-2.8 0.81-0.92 1.4-1.8 1.6-2.8 0.2-0.92-0.02-1.8-0.58-2.8-0.56-0.92-1.5-1.8-2.4-2.8'
        );
        offset-rotate: 0deg;
      }

      @keyframes animate-note {
        0% {
          offset-distance: 0%;
          opacity: 0;
        }
        10% {
          offset-distance: 10%;
          opacity: 1;
        }
        75% {
          offset-distance: 75%;
          opacity: 1;
        }
        100% {
          offset-distance: 100%;
          opacity: 0;
        }
      }
    `}renderSVG(){return _`<svg
      width="17mm"
      height="20mm"
      version="1.1"
      viewBox="0 0 17 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m7.23 16.5v3.5" fill="none" stroke="#000" stroke-width=".5" />
      <path d="m9.77 16.5v3.5" fill="#f00" stroke="#f00" stroke-width=".5" />
      <g stroke="#000">
        <g>
          <ellipse cx="8.5" cy="8.5" rx="8.15" ry="8.15" fill="#1a1a1a" stroke-width=".7" />
          <circle
            cx="8.5"
            cy="8.5"
            r="6.3472"
            fill="none"
            stroke-width=".3"
            style="paint-order:normal"
          />
          <circle
            cx="8.5"
            cy="8.5"
            r="4.3488"
            fill="none"
            stroke-width=".3"
            style="paint-order:normal"
          />
        </g>
        <circle cx="8.5" cy="8.5" r="1.3744" fill="#ccc" stroke-width=".25" />
      </g>
    </svg>`}render(){return _`
      <div class="buzzer-container">
        <svg
          class="music-note"
          style="visibility: ${this.hasSignal?``:`hidden`}"
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 8 8"
        >
          <path
            d="M8 0c-5 0-6 1-6 1v4.09c-.15-.05-.33-.09-.5-.09-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5v-3.97c.73-.23 1.99-.44 4-.5v2.06c-.15-.05-.33-.09-.5-.09-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5v-5.5z"
          />
        </svg>
        ${this.renderSVG()}
      </div>
    `}};ri([S()],ii.prototype,`hasSignal`,void 0),ii=ri([x(`wokwi-buzzer`)],ii);var ai=`mculab.muted`,oi=[`pointerdown`,`keydown`],F=null,si=null,ci=0,li=di(),ui=new Set;function di(){try{return localStorage.getItem(ai)===`1`}catch{return!1}}function fi(){try{F||(F=new AudioContext,si=F.createGain(),si.gain.value=+!li,si.connect(F.destination)),F.state===`suspended`&&F.resume()}catch{}}function pi(){if(ci++===0)for(let e of oi)document.addEventListener(e,fi,!0);let e=!1;return()=>{if(!e&&(e=!0,--ci===0))for(let e of oi)document.removeEventListener(e,fi,!0)}}function mi(){return!F||!si||F.state!==`running`||li?null:{ctx:F,out:si}}var hi=()=>li;function gi(e){if(e!==li){li=e;try{localStorage.setItem(ai,e?`1`:`0`)}catch{}F&&si&&si.gain.setTargetAtTime(+!e,F.currentTime,.01);for(let e of ui)e()}}function _i(e){return ui.add(e),()=>ui.delete(e)}function vi(){return(0,h.useSyncExternalStore)(_i,hi,()=>!1)}var yi=new WeakMap;function bi(e){let t=yi.get(e);if(t)return t;let n=e.sampleRate*2;t=e.createBuffer(1,n,e.sampleRate);let r=t.getChannelData(0),i=0,a=0,o=0;for(let e=0;e<n;e++){let t=Math.random()*2-1;i=.99765*i+t*.099046,a=.963*a+t*.2965164,o=.57*o+t*1.0526913,r[e]=(i+a+o+t*.1848)*.2}return yi.set(e,t),t}var xi=.05;function Si(e,t,n){return!t||n||!e||!(e.volume>0)||!(e.freq>=20)?{freq:0,gain:0}:{freq:Math.min(2e4,Math.round(e.freq)),gain:xi*Math.min(1,e.volume)}}var Ci=class{osc=null;gain=null;freq=-1;level=-1;set(e,t){let n=mi();if(!(t>0)||!n){this.stop();return}let r=n.ctx,i=r.currentTime;if(!this.osc||!this.gain){let t=r.createGain();t.gain.value=0,t.connect(n.out);let i=r.createOscillator();i.type=`square`,i.frequency.value=e,i.connect(t),i.start(),this.osc=i,this.gain=t,this.freq=e,this.level=-1}e!==this.freq&&this.osc.frequency.setTargetAtTime(e,i,.002),t!==this.level&&this.gain.gain.setTargetAtTime(t,i,.004),this.freq=e,this.level=t}stop(){let e=this.osc,t=this.gain;if(this.osc=null,this.gain=null,this.freq=-1,this.level=-1,!e||!t)return;let n=e.context.currentTime;t.gain.setTargetAtTime(0,n,.004),e.onended=()=>{e.disconnect(),t.disconnect()},e.stop(n+.03)}},wi=75,Ti=84;function Ei({muted:e,onToggle:t}){return(0,m.jsxs)(`svg`,{className:`canvas-ui`,width:`14`,height:`14`,viewBox:`0 0 14 14`,style:{position:`absolute`,right:0,top:2,cursor:`pointer`},onClick:t,children:[(0,m.jsx)(`title`,{children:e?`已静音，点击恢复声音`:`点击静音`}),(0,m.jsx)(`circle`,{cx:`7`,cy:`7`,r:`6.5`,fill:`var(--chip)`,stroke:e?`#d92d20`:`var(--chip-line)`}),(0,m.jsx)(`path`,{d:`M2.8 5.6h1.8l2.6-2.2v7.2L4.6 8.4H2.8z`,fill:e?`#d92d20`:`var(--ink-2)`}),e?(0,m.jsx)(`path`,{d:`M8.8 5.3l3 3.4M11.8 5.3l-3 3.4`,stroke:`#d92d20`,strokeWidth:`1.1`,strokeLinecap:`round`}):(0,m.jsx)(`path`,{d:`M8.9 5.2a2.6 2.6 0 0 1 0 3.6M10.4 3.8a4.6 4.6 0 0 1 0 6.4`,fill:`none`,stroke:`var(--ink-2)`,strokeWidth:`1`,strokeLinecap:`round`})]})}var Di={geometry:()=>({width:wi,height:Ti,pins:w(`wokwi-buzzer`,{"+":`2`,"-":`1`})}),Component({state:e,running:t}){let[n,r]=(0,h.useState)(!1),i=(0,h.useRef)(null);(0,h.useEffect)(()=>{let e=pi(),t=new Ci;return i.current=t,()=>{t.stop(),i.current=null,e()}},[]);let{freq:a,gain:o}=Si(e,t,n);(0,h.useEffect)(()=>i.current?.set(a,o),[e,a,o]);let s=t&&!!e&&e.volume>0&&e.freq>0;return(0,m.jsxs)(`div`,{style:{position:`relative`,width:wi,height:Ti},children:[(0,m.jsx)(C,{tag:`wokwi-buzzer`,props:{hasSignal:s}}),(0,m.jsx)(Ei,{muted:n,onToggle:()=>r(e=>!e)})]})}};function I(e,t,n){let r=e?.env?.[t];return{value:r?r.value:n,auto:r!==void 0&&r.mode!==`fixed`,mode:r?.mode}}function L({shown:e,open:t}){return e.auto?(0,m.jsxs)(`tspan`,{className:`canvas-ui`,fill:`var(--accent)`,style:{cursor:`pointer`},onClick:e=>{e.stopPropagation(),t?.()},children:[(0,m.jsx)(`title`,{children:`${e.mode===`body`?`跟着热体（加热片、风扇）`:e.mode===`script`?`按剧本`:e.mode===`cycle`?`周期`:`自然波动`}变化中，点一下在「环境」页查看`}),`~`]}):null}var Oi=`按剧本变化中，在「环境」页修改`,ki={pinch:`捏`,breath:`哈气`,cover:`挡光`,flashlight:`手电`,near:`靠近`,clap:`拍手`,leak:`漏气`,fire:`点火`},Ai=8,ji=5,Mi=e=>ki[e].length*ji+4;function Ni(e){if(!e.state||!e.running)return null;let t=e.state.gestures??[],n=e.x,i=e.y;return(0,m.jsx)(`g`,{className:`canvas-ui`,children:r(e.type).map(r=>{let a=Mi(r.kind),o=t.includes(r.kind),s={x:n,y:i};return e.dir===`row`?n+=a+2:i+=10,(0,m.jsxs)(`g`,{role:`button`,"aria-label":r.label,"aria-pressed":r.toggle?o:void 0,style:{cursor:`pointer`},onClick:t=>{t.stopPropagation(),e.input({gesture:r.kind})},children:[(0,m.jsx)(`title`,{children:r.title}),(0,m.jsx)(`rect`,{x:s.x,y:s.y,width:a,height:Ai,rx:Ai/2,fill:o?`#2563eb`:`var(--chip)`,stroke:o?`#2563eb`:`var(--chip-line)`,strokeWidth:`0.6`}),(0,m.jsx)(`text`,{x:s.x+a/2,y:s.y+5.8,fontSize:`5`,fill:o?`#ffffff`:`var(--ink)`,textAnchor:`middle`,children:ki[r.kind]})]},r.kind)})})}var Pi=64,Fi=92,Ii={GND:{x:22.4,y:88},DQ:{x:32,y:88},VCC:{x:41.6,y:88}},Li=25,Ri=e=>Math.min(125,Math.max(-55,Math.round(e*100)/100));function zi(e){let t=Math.round(e*100);return`${(t/100).toFixed(t%10==0?1:2)}℃`}function Bi(e){let t=e.toFixed(2);return`${t===`-0.00`?`0.00`:t}℃`}function Vi(e){let t=Number.parseFloat(e);return Number.isFinite(t)?Ri(t):null}function Hi({value:e,onDone:t}){let[n,r]=(0,h.useState)(String(e)),i=(0,h.useRef)(null);return(0,h.useEffect)(()=>{i.current?.focus({preventScroll:!0}),i.current?.select()},[]),(0,m.jsx)(`input`,{ref:i,className:`canvas-ui`,type:`number`,step:`0.5`,min:`-55`,max:`125`,value:n,onChange:e=>r(e.target.value),onBlur:()=>t(Vi(n)),onKeyDown:e=>{e.key===`Enter`?t(Vi(n)):e.key===`Escape`&&t(null)},style:{position:`absolute`,left:6,top:2,width:52,height:15,boxSizing:`border-box`,padding:`0 3px`,font:`9px ${k}`,border:`1px solid #2563eb`,borderRadius:3,outline:`none`,background:`var(--chip)`,color:`var(--ink)`}})}function Ui(e){let{base:t,state:n,input:r,openEnv:i}=e,[a,o]=(0,h.useState)(!1),s=I(n,`temperature`,t),c=s.mode===`script`,l=t=>{o(!1),t!==null&&e.setProp?.(`temperature`,t)},u=n?.powered===!0;return(0,m.jsxs)(`div`,{style:{position:`relative`,width:Pi,height:Fi},children:[(0,m.jsxs)(`svg`,{width:Pi,height:Fi,viewBox:`0 0 ${Pi} ${Fi}`,style:{display:`block`},children:[(0,m.jsxs)(`g`,{className:`canvas-ui`,style:{cursor:c?`default`:`pointer`},onClick:()=>!c&&o(!0),children:[(0,m.jsx)(`title`,{children:c?Oi:s.auto?`此刻的环境温度（点击设置基准）`:`环境温度（点击设置）`}),(0,m.jsx)(`rect`,{x:`6`,y:`2`,width:`52`,height:`15`,rx:`7.5`,fill:`var(--chip)`,stroke:`var(--chip-line)`}),(0,m.jsxs)(`text`,{x:`32`,y:`12.6`,fontSize:`8.5`,fill:`var(--ink)`,textAnchor:`middle`,fontFamily:k,children:[(0,m.jsx)(L,{shown:s,open:i}),zi(s.value)]})]}),(0,m.jsx)(Ni,{type:`ds18b20`,x:52,y:22,state:n,running:e.running,input:r}),[Ii.GND,Ii.DQ,Ii.VCC].map(e=>(0,m.jsx)(`rect`,{x:e.x-1,y:`60`,width:`2`,height:e.y-58,fill:`var(--lead)`},e.x)),(0,m.jsx)(`path`,{d:`M14 62V28a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v34z`,fill:`#1c1c1e`}),(0,m.jsx)(`text`,{x:`32`,y:`30`,fontSize:`5.5`,fill:`#e6e6e6`,textAnchor:`middle`,fontFamily:k,fontWeight:`600`,children:`DS18B20`}),(0,m.jsx)(`text`,{x:`32`,y:`38.5`,fontSize:`4.5`,fill:`#9a9a9e`,textAnchor:`middle`,children:`读数`}),(0,m.jsx)(`text`,{x:`32`,y:`47`,fontSize:`6.5`,fill:u?`#8fe3a8`:`#6e6e73`,textAnchor:`middle`,fontFamily:k,children:u?Bi(n.reading):`--.--℃`}),n?.converting&&(0,m.jsx)(`circle`,{cx:`45`,cy:`25`,r:`1.4`,fill:`#3ee66b`}),Object.entries(Ii).map(([e,t])=>(0,m.jsx)(`text`,{x:t.x,y:`58`,fontSize:`4`,fill:`#bfbfc4`,textAnchor:`middle`,fontFamily:k,children:e},e))]}),a&&(0,m.jsx)(Hi,{value:t,onDone:l})]})}var Wi={geometry:()=>({width:Pi,height:Fi,pins:Ii}),Component:({part:e,state:t,running:n,input:r,openEnv:i,setProp:a})=>(0,m.jsx)(Ui,{base:Vi(String(e.props.temperature??Li))??Li,state:t,running:n,input:r,openEnv:i,setProp:a})},Gi=A({name:`AT24C02`,pins:[`A0`,`A1`,`A2`,`GND`,`SDA`,`SCL`,`WP`,`VCC`].map(e=>({name:e})),status:e=>e?e.powered?`地址 ${O(e.device)} ${e.busy?`写入中…`:`指针 ${O(e.address)}`}`:`未通电`:``}),Ki=On([{name:`VCC`},{name:`X1`,nc:!0},{name:`X2`,nc:!0},{name:`GND`},{name:`CE`},{name:`IO`,text:`I/O`},{name:`SCLK`},{name:`BAT`,text:`BAT`,nc:!0}]),qi=Ki.width,Ji={y:Ki.height+3,h:38},Yi=Ji.y+Ji.h+1,Xi=[`周一`,`周二`,`周三`,`周四`,`周五`,`周六`,`周日`],Zi=e=>String(e).padStart(2,`0`),Qi=e=>Xi[e-1]??`星期${e}`,$i=e=>`${e.year}-${Zi(e.month)}-${Zi(e.date)}`,ea=e=>`${Zi(e.hours)}:${Zi(e.minutes)}:${Zi(e.seconds)}`,ta=e=>`${$i(e)}T${ea(e)}`;function na(e){let t=/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})(?::(\d{2}))?/.exec(e);if(!t)return null;let[n,r,i,a,o,s=0]=t.slice(1).map(e=>e===void 0?0:Number(e));return n<2e3||n>2099||r<1||r>12||i<1||a>23||o>59||s>59||i>new Date(Date.UTC(n,r,0)).getUTCDate()?null:{year:n,month:r,date:i,hours:a,minutes:o,seconds:s}}function ra(e){return{year:e.getFullYear(),month:e.getMonth()+1,date:e.getDate(),hours:e.getHours(),minutes:e.getMinutes(),seconds:e.getSeconds()}}var ia=(e,t)=>e.clock?ra(t):e.time,aa={font:`10px system-ui, sans-serif`,padding:`1px 6px`,border:`1px solid var(--chip-line)`,borderRadius:3,background:`var(--chip)`,color:`var(--ink)`,cursor:`pointer`},oa=e=>e.preventDefault();function sa({initial:e,onDone:t}){let[n,r]=(0,h.useState)(ta(e)),i=na(n),a=(0,h.useRef)(null);return(0,h.useEffect)(()=>a.current?.focus({preventScroll:!0}),[]),(0,m.jsxs)(`div`,{className:`canvas-ui`,onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||t(null)},onKeyDown:e=>{e.key===`Escape`?t(null):e.key===`Enter`&&i&&t({time:i,clock:!1})},style:{position:`absolute`,left:0,top:Ji.y,width:168,padding:4,display:`flex`,flexDirection:`column`,gap:4,background:`var(--chip)`,border:`1px solid var(--chip-line)`,borderRadius:4,boxShadow:`0 2px 6px rgba(0, 0, 0, 0.12)`,zIndex:1},children:[(0,m.jsx)(`input`,{type:`datetime-local`,step:`1`,min:`2000-01-01T00:00:00`,max:`2099-12-31T23:59:59`,ref:a,value:n,onChange:e=>r(e.target.value),style:{font:`11px system-ui, sans-serif`,border:`1px solid ${i?`var(--chip-line)`:`#d92d20`}`,borderRadius:3,padding:`1px 3px`}}),(0,m.jsxs)(`div`,{style:{display:`flex`,gap:4,justifyContent:`flex-end`},children:[(0,m.jsx)(`button`,{style:aa,title:`把芯片里的时间设成这台电脑现在的时间`,onMouseDown:oa,onClick:()=>t({time:ra(new Date),clock:!0}),children:`电脑时间`}),(0,m.jsx)(`button`,{style:aa,onMouseDown:oa,onClick:()=>t(null),children:`取消`}),(0,m.jsx)(`button`,{style:{...aa,borderColor:`#2563eb`,color:`#2563eb`},disabled:!i,onMouseDown:oa,onClick:()=>i&&t({time:i,clock:!1}),children:`确定`})]})]})}function ca(e){return e?e.running?e.powered?e.writeProtect?`走时中 · 写保护`:`走时中`:`未通电（备用电池走时）`:`振荡器停止（秒寄存器 CH=1）`:`点击设置时间`}function la({state:e,input:t}){let[n,r]=(0,h.useState)(!1),i=(0,h.useRef)(null),a=(0,h.useRef)(!1);e||(a.current=!1),(0,h.useEffect)(()=>{e&&i.current&&!a.current&&(a.current=!0,t(ia(i.current,new Date)))},[e,t]);let o=n=>{r(!1),n&&(i.current=n,a.current=!!e,e&&t(n.time))},s=!e&&i.current?i.current.time:null,c=s??e?.time??null,l=e?.time??null;return(0,m.jsxs)(`div`,{style:{position:`relative`,width:qi,height:Yi},children:[(0,m.jsxs)(`svg`,{width:qi,height:Yi,viewBox:`0 0 ${qi} ${Yi}`,style:{display:`block`},children:[(0,m.jsx)(jn,{layout:Ki,name:`DS1302`}),(0,m.jsxs)(`g`,{className:`canvas-ui`,style:{cursor:`pointer`},onClick:()=>r(!0),children:[(0,m.jsx)(`title`,{children:`点击设置时间`}),(0,m.jsx)(`rect`,{x:`1`,y:Ji.y,width:qi-2,height:Ji.h,rx:`3`,fill:`var(--chip)`,stroke:`var(--chip-line)`}),(0,m.jsxs)(`text`,{x:qi/2,y:Ji.y+9,fontSize:`6.5`,fill:`var(--ink-2)`,textAnchor:`middle`,fontFamily:k,children:[c?$i(c):`----------`,l?` ${Qi(l.day)}`:``]}),(0,m.jsx)(`text`,{x:qi/2,y:Ji.y+22,fontSize:`11`,fill:`var(--ink)`,textAnchor:`middle`,fontFamily:k,fontWeight:`600`,children:c?ea(c):`--:--:--`}),(0,m.jsx)(`text`,{x:qi/2,y:Ji.y+32,fontSize:`5`,fill:`var(--ink-3)`,textAnchor:`middle`,children:s?`运行后生效`:ca(e)})]})]}),n&&(0,m.jsx)(sa,{initial:c??ra(new Date),onDone:o})]})}var ua={geometry:()=>({width:qi,height:Yi,pins:Ki.pins}),Component:({state:e,input:t})=>(0,m.jsx)(la,{state:e,input:t})},da=[`QA`,`QB`,`QC`,`QD`,`QE`,`QF`,`QG`,`QH`],fa=A({name:`74HC595`,pins:[`QB`,`QC`,`QD`,`QE`,`QF`,`QG`,`QH`,`GND`,`QH'`,`SRCLR`,`SRCLK`,`RCLK`,`OE`,`SER`,`QA`,`VCC`].map(e=>({name:e})),marks:e=>e.powered?{...kn(da,e.latch,e.enabled),"QH'":e.shift&128?`high`:`low`}:{},status:e=>e?e.powered?`锁存 ${O(e.latch)} 移位 ${O(e.shift)}${e.enabled?``:` 输出关`}`:`未通电`:``}),pa=A({name:`74HC165`,pins:[`SH/LD`,`CLK`,`E`,`F`,`G`,`H`,`QH'`,`GND`,`QH`,`SER`,`A`,`B`,`C`,`D`,`CLK INH`,`VCC`].map(e=>({name:e,text:e===`CLK INH`?`INH`:e===`SH/LD`?`LD`:void 0})),marks:e=>e.powered?{QH:e.shift&128?`high`:`low`,"QH'":e.shift&128?`low`:`high`}:{},status:e=>e?e.powered?`${e.loading?`装入中 `:``}寄存器 ${O(e.shift)}`:`未通电`:``}),ma=[`QA`,`QB`,`QC`,`QD`,`QE`,`QF`,`QG`,`QH`],ha=A({name:`74HC164`,pins:[`A`,`B`,`QA`,`QB`,`QC`,`QD`,`GND`,`CLK`,`CLR`,`QE`,`QF`,`QG`,`QH`,`VCC`].map(e=>({name:e})),marks:e=>e.powered?kn(ma,e.shift,!0):{},status:e=>e?e.powered?`输出 ${O(e.shift)}`:`未通电`:``}),ga=A({name:`ADC0832`,pins:[`CS`,`CH0`,`CH1`,`GND`,`DI`,`DO`,`CLK`,`VCC`].map(e=>({name:e})),status:e=>e?e.powered?e.last?`CH${e.last.ch} → ${e.last.value}`:`等待转换`:`未通电`:``}),_a=A({name:`ADC0809`,pins:`IN3.IN4.IN5.IN6.IN7.START.EOC.D3.OE.CLOCK.VCC.REF+.GND.D1.D2.REF-.D0.D4.D5.D6.D7.ALE.ADDC.ADDB.ADDA.IN0.IN1.IN2`.split(`.`).map(e=>({name:e})),status:e=>e?e.powered?`IN${e.channel} ${e.converting?`转换中`:`→ ${e.result}`}`:`未通电`:``}),va=[[[0,null],[1,null],[2,null],[3,null]],[[0,3],[1,3],[2,3]],[[0,null],[1,null],[2,3]],[[0,1],[2,3]]];function ya(e,t){let n=va[e&3];return n[t%n.length]}function ba(e,t){let[n,r]=ya(e,t);return r===null?`AIN${n}`:`AIN${n}−AIN${r}`}var xa=On(ne.pins.map(({name:e})=>({name:e})),72),Sa=xa.width,Ca=11,wa=xa.height+1,Ta=wa+66+1,Ea={x:20,w:40},Da=[0,1,2,3],Oa=[``,`光敏电阻`,``,`电位器`],ka=e=>Number.isFinite(e)?Math.min(5,Math.max(0,Math.round(e*100)/100)):0,Aa=e=>`${e.toFixed(2)}V`;function ja(e,t){return ka(Number(e[`ain${t}`]??ne.defaultProps[`ain${t}`]))}function Ma(e){return e?e.powered?`地址 ${O(e.device)} · ${ba(e.mode,e.channel)}${e.autoIncrement?` 自增`:``}`:`未通电`:``}function Na(e){return e?.powered?e.aout===null?`DA 关 (${O(e.dac)})`:`DA ${Aa(e.aout)} (${O(e.dac)})`:`DA --`}function Pa({part:e,state:t,openEnv:n,setProp:r}){let i=Da.map(t=>ja(e.props,t)),a=Da.map(e=>I(t,`ain${e}`,i[e])),o=t?.powered===!0,s=o&&t.aout!=null,c=new Set(t&&o?ya(t.mode,t.channel):[]),l=e=>wa+Ca*e+Ca/2;return(0,m.jsxs)(`div`,{style:{position:`relative`,width:Sa,height:Ta},children:[(0,m.jsxs)(`svg`,{width:Sa,height:Ta,viewBox:`0 0 ${Sa} ${Ta}`,style:{display:`block`},children:[(0,m.jsx)(jn,{layout:xa,name:`PCF8591`}),(0,m.jsx)(`text`,{x:Sa/2,y:l(0)+2,fontSize:`5.5`,fill:`var(--ink-2)`,textAnchor:`middle`,children:Ma(t)}),Da.map(e=>{let t=c.has(e),r=l(e+1)+2;return(0,m.jsxs)(`g`,{children:[(0,m.jsxs)(`text`,{x:`2`,y:r,fontSize:`5.5`,fill:t?`var(--accent)`:`var(--ink-2)`,fontWeight:t?700:400,fontFamily:k,children:[`AIN`,e]}),(0,m.jsxs)(`text`,{x:Sa-2,y:r,fontSize:`5.5`,fill:`var(--ink)`,textAnchor:`end`,fontFamily:k,children:[(0,m.jsx)(L,{shown:a[e],open:n}),Aa(a[e].value)]})]},e)}),(0,m.jsxs)(`g`,{children:[(0,m.jsx)(`title`,{children:`${Na(t)}：AOUT 的电压只显示在这里，不驱动电路（接 LED 不会亮）`}),(0,m.jsx)(`text`,{x:`2`,y:l(5)+2,fontSize:`5.5`,fill:s?`var(--ink-2)`:`var(--ink-3)`,fontFamily:k,children:`AOUT`}),(0,m.jsx)(`rect`,{x:Ea.x,y:l(5)-1.5,width:Ea.w,height:`3`,rx:`1.5`,fill:`var(--chip-line)`,opacity:`0.35`}),s&&(0,m.jsx)(`rect`,{x:Ea.x,y:l(5)-1.5,width:Ea.w*t.aout/5,height:`3`,rx:`1.5`,fill:`var(--accent)`}),(0,m.jsx)(`text`,{x:Sa-2,y:l(5)+2,fontSize:`5.5`,fill:s?`var(--ink)`:`var(--ink-3)`,textAnchor:`end`,fontFamily:k,children:o?s?Aa(t.aout):`关`:`--`})]})]}),Da.map(e=>(0,m.jsx)(`input`,{className:`canvas-ui`,type:`range`,min:`0`,max:`5`,step:`0.01`,title:a[e].mode===`script`?Oi:`AIN${e} 电压${Oa[e]?`（${Oa[e]}）`:``}`,value:i[e],disabled:a[e].mode===`script`,onChange:t=>r?.(`ain${e}`,ka(Number(t.target.value))),style:{position:`absolute`,left:Ea.x,top:l(e+1)-4,width:Ea.w*2,height:16,margin:0,transform:`scale(0.5)`,transformOrigin:`0 0`,accentColor:`#2563eb`,cursor:a[e].mode===`script`?`default`:`pointer`}},e))]})}var Fa={geometry:()=>({width:Sa,height:Ta,pins:xa.pins}),Component:({part:e,state:t,openEnv:n,setProp:r})=>(0,m.jsx)(Pa,{part:e,state:t,openEnv:n,setProp:r})},Ia=[{input:`TEMP0`,pin:null,ain:null,scale:1,volts:.6},{input:`X+`,pin:`X+`,ain:0,scale:1},{input:`VBAT`,pin:`VBAT`,ain:2,scale:1/4},{input:`Z1`,pin:`X+`,ain:0,scale:1},{input:`Z2`,pin:`Y-`,ain:null,scale:1},{input:`Y+`,pin:`Y+`,ain:1,scale:1},{input:`AUX`,pin:`AUX`,ain:3,scale:1},{input:`TEMP1`,pin:null,ain:null,scale:1,volts:.716}],La=On(o.pins.map(({name:e})=>({name:e})),72),Ra=La.width,za=11,Ba=La.height+1,Va=Ba+55+1,Ha={x:26,w:30},Ua=[0,1,2,3];function Wa(e){return e?e.powered?e.last?`${e.last.input} → ${e.last.value}（${e.last.bits} 位）`:`等待命令字`:`未通电`:``}function Ga(e,t){return ka(Number(e[`ain${t}`]??o.defaultProps[`ain${t}`]))}function Ka({part:e,state:t,openEnv:n,setProp:r}){let a=Ua.map(t=>Ga(e.props,t)),o=Ua.map(e=>I(t,`ain${e}`,a[e])),s=t?.powered&&t.last?Ia.find(e=>e.input===t.last.input)?.ain:void 0,c=e=>Ba+za*e+za/2;return(0,m.jsxs)(`div`,{style:{position:`relative`,width:Ra,height:Va},children:[(0,m.jsxs)(`svg`,{width:Ra,height:Va,viewBox:`0 0 ${Ra} ${Va}`,style:{display:`block`},children:[(0,m.jsx)(jn,{layout:La,name:`XPT2046`}),(0,m.jsx)(`text`,{x:Ra/2,y:c(0)+2,fontSize:`5.5`,fill:`var(--ink-2)`,textAnchor:`middle`,children:Wa(t)}),Ua.map(e=>{let t=s===e,r=c(e+1)+2;return(0,m.jsxs)(`g`,{children:[(0,m.jsx)(`text`,{x:`2`,y:r,fontSize:`5.5`,fill:t?`var(--accent)`:`var(--ink-2)`,fontWeight:t?700:400,fontFamily:k,children:i[e].pin}),(0,m.jsxs)(`text`,{x:Ra-2,y:r,fontSize:`5.5`,fill:`var(--ink)`,textAnchor:`end`,fontFamily:k,children:[(0,m.jsx)(L,{shown:o[e],open:n}),Aa(o[e].value)]})]},e)})]}),Ua.map(e=>(0,m.jsx)(`input`,{className:`canvas-ui`,type:`range`,min:`0`,max:`5`,step:`0.01`,title:o[e].mode===`script`?Oi:`AIN${e}（${i[e].pin}，${i[e].note}）的电压`,value:a[e],disabled:o[e].mode===`script`,onChange:t=>r?.(`ain${e}`,ka(Number(t.target.value))),style:{position:`absolute`,left:Ha.x,top:c(e+1)-4,width:Ha.w*2,height:16,margin:0,transform:`scale(0.5)`,transformOrigin:`0 0`,accentColor:`#2563eb`,cursor:o[e].mode===`script`?`default`:`pointer`}},e))]})}var qa={geometry:()=>({width:Ra,height:Va,pins:La.pins}),Component:({part:e,state:t,openEnv:n,setProp:r})=>(0,m.jsx)(Ka,{part:e,state:t,openEnv:n,setProp:r})},Ja=A({name:`DAC0832`,pins:[`CS`,`WR1`,`AGND`,`DI3`,`DI2`,`DI1`,`DI0`,`VREF`,`RFB`,`GND`,`IOUT1`,`IOUT2`,`DI7`,`DI6`,`DI5`,`DI4`,`XFER`,`WR2`,`ILE`,`VCC`].map(e=>({name:e,text:e===`GND`?`DGND`:void 0})),status:e=>e?e.powered?`${e.dac} → ${e.volts.toFixed(2)}V`:`未通电`:``}),Ya=A({name:`8255A`,pins:`PA3.PA2.PA1.PA0.RD.CS.GND.A1.A0.PC7.PC6.PC5.PC4.PC0.PC1.PC2.PC3.PB0.PB1.PB2.PB3.PB4.PB5.PB6.PB7.VCC.D7.D6.D5.D4.D3.D2.D1.D0.RESET.WR.PA7.PA6.PA5.PA4`.split(`.`).map(e=>({name:e})),status:e=>{if(!e)return``;if(!e.powered)return`未通电`;let t=(e,t)=>e?`入`:O(t);return`A ${t(e.input.a,e.latch[0])} B ${t(e.input.b,e.latch[1])} C ${O(e.latch[2])}`}}),Xa=Array.from({length:8},(e,t)=>`D${t}`),Za=Array.from({length:8},(e,t)=>`Q${t}`),Qa=A({name:`74HC573`,pins:[`OE`,...Xa,`GND`,`LE`,...[...Za].reverse(),`VCC`].map(e=>({name:e})),marks:e=>e.powered?kn(Za,e.latch,e.enabled):{},status:e=>e?e.powered?`${e.transparent?`直通`:`锁存`} ${O(e.latch)}${e.enabled?``:` 输出关`}`:`未通电`:``}),$a=Array.from({length:8},(e,t)=>`Y${t}`),eo=A({name:`74HC138`,pins:[`A0`,`A1`,`A2`,`E1`,`E2`,`E3`,`Y7`,`GND`,`Y6`,`Y5`,`Y4`,`Y3`,`Y2`,`Y1`,`Y0`,`VCC`].map(e=>({name:e})),marks:e=>e.powered?Object.fromEntries($a.map((t,n)=>[t,n===e.selected?`low`:`high`])):{},status:e=>e?e.powered?e.selected===null?`未使能，全部输出高`:`选中 Y${e.selected}（输出低）`:`未通电`:``}),to=Array.from({length:8},(e,t)=>`A${t+1}`),no=Array.from({length:8},(e,t)=>`B${t+1}`),ro=A({name:`74HC245`,pins:[`DIR`,...to,`GND`,...[...no].reverse(),`OE`,`VCC`].map(e=>({name:e})),status:e=>e?e.powered?e.enabled?`${e.direction} 导通`:`输出关（两侧高阻）`:`未通电`:``}),io=Array.from({length:7},(e,t)=>`IN${t+1}`),ao=Array.from({length:7},(e,t)=>`OUT${t+1}`),oo=A({name:`ULN2003`,pins:[...io,`GND`,`COM`,...[...ao].reverse()].map(e=>({name:e})),marks:e=>Object.fromEntries(ao.map((t,n)=>[t,e.on[n]?`low`:`z`])),status:e=>{if(!e)return``;let t=e.on.flatMap((e,t)=>e?[t+1]:[]);return t.length?`导通 ${t.join(` `)}`:`全部截止`}}),so=.05,co=e=>Math.min(8e3,Math.max(20,e)),lo=class{nodes=null;wave;constructor(e=`triangle`){this.wave=e}set(e){let t=mi();if(!t||!e||!(e.noise>0||e.tone>0)){this.stop();return}let n=t.ctx;if(!this.nodes){let r=n.createBufferSource();r.buffer=bi(n),r.loop=!0;let i=n.createBiquadFilter();i.type=`bandpass`,i.Q.value=.8,i.frequency.value=co(e.noiseHz);let a=n.createGain();a.gain.value=0,r.connect(i).connect(a).connect(t.out);let o=n.createOscillator();o.type=this.wave,o.frequency.value=co(e.toneHz);let s=n.createGain();s.gain.value=0,o.connect(s).connect(t.out),r.start(),o.start(),this.nodes={src:r,filter:i,noiseGain:a,osc:o,toneGain:s}}let r=this.nodes,i=n.currentTime;r.filter.frequency.setTargetAtTime(co(e.noiseHz),i,so),r.noiseGain.gain.setTargetAtTime(Math.max(0,e.noise),i,so),r.osc.frequency.setTargetAtTime(co(e.toneHz),i,so),r.toneGain.gain.setTargetAtTime(e.toneHz>=20?Math.max(0,e.tone):0,i,so)}stop(){let e=this.nodes;if(this.nodes=null,!e)return;let t=e.osc.context.currentTime;e.noiseGain.gain.setTargetAtTime(0,t,.03),e.toneGain.gain.setTargetAtTime(0,t,.03),e.osc.onended=()=>{for(let t of Object.values(e))t.disconnect()},e.src.stop(t+.2),e.osc.stop(t+.2)}};function uo(e,t){let n=(0,h.useRef)(null);(0,h.useEffect)(()=>{let e=pi(),r=new lo(t);return n.current=r,()=>{r.stop(),n.current=null,e()}},[t]),(0,h.useEffect)(()=>n.current?.set(e),[e])}function fo(e,t,n=5){let r=Math.min(1,Math.abs(e)/t);return r<.01?null:{noise:.09*r**1.5,noiseHz:250+2e3*r,tone:.02*r,toneHz:Math.abs(e)/60*n}}function po(e,t){return Math.abs(e)<.05?null:{noise:.012,noiseHz:1800,tone:.03,toneHz:Math.abs(e)/60*t}}function mo(e){return e?{noise:.035,noiseHz:1400,tone:.02,toneHz:140}:null}var ho=120,go=146,_o={x:60,y:60,r:40},vo={x:60,y:38},yo=128,bo=[{pin:`A`,color:`#3b82f6`},{pin:`B`,color:`#f783ac`},{pin:`C`,color:`#e8b100`},{pin:`D`,color:`#f08c00`},{pin:`COM`,color:`#e5484d`}],xo=Object.fromEntries(bo.map((e,t)=>[e.pin,{x:40.8+t*9.6,y:yo}]));function So(e,t,n=.15){let r=e+(t-e)*n;return Math.abs(r)<.05?0:r}function Co(e){return e===0?`停止`:`${e>0?`↻`:`↺`} ${Math.abs(e).toFixed(1)} 转/分`}function wo({state:e,running:t}){let n=(0,h.useRef)({value:0,from:void 0});e!==n.current.from&&(n.current={value:e&&t?So(n.current.value,e.rpm):e?n.current.value:0,from:e});let r=e?.angle??0,i=E(e,e=>e.phaseDuty??e.phases.map(Number),t),a=i.length>0?i:[0,0,0,0];return uo(t&&e?po(n.current.value,e.mode===`half`?4096:2048):null,`sawtooth`),(0,m.jsxs)(`svg`,{width:ho,height:go,viewBox:`0 0 ${ho} ${go}`,style:{display:`block`},children:[bo.map((e,t)=>{let n=50+t*5,r=xo[e.pin].x;return(0,m.jsx)(`path`,{d:`M${n} 102C${n} 112 ${r} 112 ${r} 122`,fill:`none`,stroke:e.color,strokeWidth:`2.2`},e.pin)}),(0,m.jsx)(`rect`,{x:`6`,y:`51`,width:`108`,height:`18`,rx:`9`,fill:`#c9ccd1`,stroke:`#9aa1ab`}),(0,m.jsx)(`circle`,{cx:`14`,cy:`60`,r:`3.5`,fill:`#fbfcfd`,stroke:`#9aa1ab`}),(0,m.jsx)(`circle`,{cx:`106`,cy:`60`,r:`3.5`,fill:`#fbfcfd`,stroke:`#9aa1ab`}),(0,m.jsx)(`circle`,{cx:_o.x,cy:_o.y,r:_o.r,fill:`#d5d8dc`,stroke:`#9aa1ab`}),(0,m.jsx)(`circle`,{cx:_o.x,cy:_o.y,r:_o.r-5,fill:`none`,stroke:`#c3c7cc`}),(0,m.jsx)(`rect`,{x:`40`,y:`88`,width:`40`,height:`15`,rx:`2`,fill:`#2f6fd1`,stroke:`#1f56a8`}),a.map((e,t)=>(0,m.jsxs)(`g`,{children:[(0,m.jsx)(`circle`,{cx:48+t*8,cy:`95.5`,r:`2.2`,fill:`#1f4f99`}),e>0&&(0,m.jsx)(`circle`,{cx:48+t*8,cy:`95.5`,r:`2.2`,fill:`#ffd43b`,opacity:D(e)})]},t)),(0,m.jsx)(`text`,{x:_o.x,y:`73`,fontSize:`5.5`,fill:`#5b6068`,textAnchor:`middle`,fontFamily:k,children:`28BYJ-48`}),(0,m.jsx)(`text`,{x:_o.x,y:`84`,fontSize:`7`,fill:`#1f2328`,textAnchor:`middle`,children:Co(n.current.value)}),(0,m.jsx)(`circle`,{cx:vo.x,cy:vo.y,r:`9`,fill:`#e6e8eb`,stroke:`#9aa1ab`}),(0,m.jsxs)(`g`,{transform:`rotate(${r.toFixed(2)} ${vo.x} ${vo.y})`,children:[(0,m.jsx)(`path`,{d:`M${vo.x} ${vo.y+7}V${vo.y-28}`,stroke:`#e5484d`,strokeWidth:`2.4`,strokeLinecap:`round`}),(0,m.jsx)(`circle`,{cx:vo.x,cy:vo.y,r:`3.5`,fill:`#b9bdc3`,stroke:`#80858c`,strokeWidth:`0.6`})]}),(0,m.jsx)(`rect`,{x:`34`,y:`121`,width:`52`,height:`13`,rx:`1.5`,fill:`#f4f4f0`,stroke:`#b9bdc3`}),bo.map(e=>{let t=xo[e.pin];return(0,m.jsxs)(`g`,{children:[(0,m.jsx)(`rect`,{x:t.x-1.8,y:t.y-1.8,width:`3.6`,height:`3.6`,fill:`#d4af37`}),(0,m.jsx)(`text`,{x:t.x,y:141,fontSize:`5.5`,fill:`var(--ink-2)`,textAnchor:`middle`,fontFamily:k,children:e.pin})]},e.pin)})]})}var To={geometry:()=>({width:ho,height:go,pins:xo}),Component:({state:e,running:t})=>(0,m.jsx)(wo,{state:e,running:t})},Eo=.4,Do=e=>{let t=Number(e);return Number.isFinite(t)?Math.min(2e4,Math.max(100,t)):3e3},Oo=e=>{let t=Math.round(Number(e));return Number.isFinite(t)?Math.min(100,Math.max(0,t)):0},ko=84,Ao=108,R={x:42,y:40,r:30},jo=104,Mo={"+":{x:37.2,y:jo},"-":{x:46.8,y:jo}};function No(e){return e===0?`停止`:`${e>0?`↻`:`↺`} ${Math.round(Math.abs(e)/10)*10} 转/分`}var Po=4.5,Fo=Po*60,Io=3e3,Lo=30,Ro=[1,2,3];function zo(e){let t=Math.abs(e),n=t<=Fo?0:Math.min(1,Math.log(t/Fo)/Math.log(Io/Fo));return{rps:Math.sign(e)*Math.min(t/60,Po),blur:n}}function Bo(e){let t=(0,h.useRef)(null),n=(0,h.useRef)(e),r=(0,h.useRef)(0);(0,h.useEffect)(()=>{n.current=e});let i=e!==0;return(0,h.useEffect)(()=>{if(!i)return;let e=performance.now(),a=0,o=i=>{let s=Math.max(-30,Math.min(Lo,n.current*360*(i-e)/1e3));e=i,r.current=((r.current+s)%360+360)%360,t.current?.setAttribute(`transform`,`rotate(${r.current.toFixed(1)} ${R.x} ${R.y})`),a=requestAnimationFrame(o)};return a=requestAnimationFrame(o),()=>cancelAnimationFrame(a)},[i]),t}var Vo=`M${R.x} ${R.y-8}C${R.x+11} ${R.y-12} ${R.x+17} ${R.y-22} ${R.x+7} ${R.y-28}C${R.x+1} ${R.y-22} ${R.x-3} ${R.y-15} ${R.x} ${R.y-8}Z`,Ho=33.5;function Uo({slots:e}){let t=Math.PI*Ho/e;return(0,m.jsx)(`circle`,{cx:R.x,cy:R.y,r:Ho,fill:`none`,stroke:`#c9a227`,strokeWidth:`2.6`,strokeDasharray:`${t} ${t}`,children:(0,m.jsx)(`title`,{children:`码盘：${e} 个缺口，每转一圈从光电门的槽里过 ${e} 个`})})}function Wo({running:e,input:t}){let[n,r]=(0,h.useState)(!1),i=e=>{e!==n&&(r(e),t({brake:e}))};return(0,m.jsxs)(`g`,{className:`canvas-ui`,style:{cursor:e?`pointer`:`default`},onPointerDown:()=>e&&i(!0),onPointerUp:()=>i(!1),onPointerLeave:()=>i(!1),onPointerCancel:()=>i(!1),children:[(0,m.jsx)(`title`,{children:e?`按住：用手拖住叶片，转速会掉 ${Eo*100}%（像负载变大）`:`运行时按住这里拖慢风扇`}),(0,m.jsx)(`rect`,{x:`8.5`,y:`6.5`,width:`20`,height:`9`,rx:`2`,fill:n?`#c9ccd1`:`#eef0f3`,stroke:`#9aa1ab`,strokeWidth:`0.6`,opacity:e?1:.6}),(0,m.jsx)(`text`,{x:`18.5`,y:`12.8`,fontSize:`5`,fill:`#1f2328`,textAnchor:`middle`,opacity:e?1:.6,children:`按住`})]})}function Go({state:e,running:t,full:n,slots:r,input:i}){let a=e?.meanRpm??e?.rpm??0;uo(t&&e?fo(a,n):null);let{rps:o,blur:s}=zo(a),c=Bo(t?o:0),l=(e,t=0)=>(0,m.jsx)(`g`,{opacity:e,transform:t?`rotate(${t.toFixed(1)} ${R.x} ${R.y})`:void 0,children:[0,1,2,3,4].map(e=>(0,m.jsx)(`path`,{d:Vo,transform:`rotate(${e*72} ${R.x} ${R.y})`,fill:`#c9ccd1`,stroke:`#8a8f96`,strokeWidth:`0.5`},e))});return(0,m.jsxs)(`svg`,{width:ko,height:Ao,viewBox:`0 0 ${ko} ${Ao}`,style:{display:`block`},children:[(0,m.jsx)(`path`,{d:`M14 76V93C14 97 ${Mo[`+`].x} 95 ${Mo[`+`].x} 100`,fill:`none`,stroke:`#e5484d`,strokeWidth:`2`}),(0,m.jsx)(`path`,{d:`M70 76V93C70 97 ${Mo[`-`].x} 95 ${Mo[`-`].x} 100`,fill:`none`,stroke:`var(--wire-black)`,strokeWidth:`2`}),(0,m.jsx)(`rect`,{x:`7`,y:`5`,width:`70`,height:`70`,rx:`6`,fill:`#3a3d42`,stroke:`#24262a`}),[[13,11],[71,11],[13,69],[71,69]].map(([e,t])=>(0,m.jsx)(`circle`,{cx:e,cy:t,r:`2.6`,fill:`#fbfcfd`,stroke:`#24262a`,strokeWidth:`0.6`},`${e}-${t}`)),(0,m.jsx)(`circle`,{cx:R.x,cy:R.y,r:R.r+1,fill:`#1f2125`}),s>0&&(0,m.jsx)(`circle`,{cx:R.x,cy:R.y,r:R.r-2,fill:`#c9ccd1`,opacity:.3*s}),(0,m.jsxs)(`g`,{ref:c,children:[r>0&&(0,m.jsx)(Uo,{slots:r}),s>0&&Ro.map(e=>(0,m.jsx)(`g`,{children:l(.4*s/e,-Math.sign(o)*e*9*s)},e)),l(1-.6*s)]}),(0,m.jsx)(`circle`,{cx:R.x,cy:R.y,r:`9`,fill:`#2f3237`,stroke:`#5b6068`}),(0,m.jsx)(`circle`,{cx:R.x,cy:R.y,r:`2`,fill:`#5b6068`}),!!e?.duty&&(0,m.jsx)(`circle`,{cx:R.x,cy:R.y,r:`2`,fill:`#3ee66b`,opacity:.35+.65*e.duty}),(0,m.jsx)(`text`,{x:R.x,y:`86`,fontSize:`6`,fill:`var(--ink)`,textAnchor:`middle`,children:No(a)}),(0,m.jsx)(Wo,{running:t,input:i}),(0,m.jsx)(`rect`,{x:Mo[`+`].x-7,y:99,width:`19.6`,height:`8`,rx:`1.5`,fill:`#f4f4f0`,stroke:`#b9bdc3`}),Object.entries(Mo).map(([e,t])=>(0,m.jsxs)(`g`,{children:[(0,m.jsx)(`rect`,{x:t.x-1.8,y:t.y-1.8,width:`3.6`,height:`3.6`,fill:`#d4af37`}),(0,m.jsx)(`text`,{x:e===`+`?t.x-4.5:t.x+4.5,y:t.y+2,fontSize:`5.5`,fill:`#4b5058`,textAnchor:`middle`,fontFamily:k,children:e})]},e))]})}var Ko={geometry:()=>({width:ko,height:Ao,pins:Mo}),Component:({part:e,state:t,running:n,input:r})=>(0,m.jsx)(Go,{state:t,running:n,full:Do(e.props.rpm??3e3),slots:Oo(e.props.slots),input:r})},qo=110,Jo=64,Yo={VCC:{x:3,y:22.4},GND:{x:3,y:32},DO:{x:3,y:41.6}},Xo={x0:86,x1:96,y:32},Zo=30;function Qo({state:e,running:t,mode:n,input:r}){let i=n===`objects`,[a,o]=(0,h.useState)(!1),s=e=>{e!==a&&(o(e),r({held:e}))},c=e?.powered===!0,l=a||e?.blocked===!0,u=e?.object===!0,d=n===`disc`,f=e?.disc??0;return(0,m.jsxs)(`svg`,{width:qo,height:Jo,viewBox:`0 0 ${qo} ${Jo}`,style:{display:`block`},children:[Object.values(Yo).map(e=>(0,m.jsx)(`rect`,{x:e.x,y:e.y-1,width:12-e.x,height:`2`,fill:`var(--lead)`},e.y)),(0,m.jsx)(`rect`,{x:`12`,y:`6`,width:`88`,height:`52`,rx:`3`,fill:`#2f6fd1`,stroke:`#1f56a8`}),(0,m.jsx)(`g`,{fontSize:`4.5`,fill:`#dbe7ff`,fontFamily:k,children:Object.entries(Yo).map(([e,t])=>(0,m.jsx)(`text`,{x:`15`,y:t.y+1.6,children:e},e))}),(0,m.jsx)(`circle`,{cx:`38`,cy:`14`,r:`2.2`,fill:c?`#ff4d4f`:`#5b3a3a`}),(0,m.jsx)(`circle`,{cx:`52`,cy:`14`,r:`2.2`,fill:c&&!l?`#3ee66b`:`#2f4f3a`}),(0,m.jsxs)(`g`,{fontSize:`4`,fill:`#dbe7ff`,textAnchor:`middle`,fontFamily:k,children:[(0,m.jsx)(`text`,{x:`38`,y:`21.5`,children:`PWR`}),(0,m.jsx)(`text`,{x:`52`,y:`21.5`,children:`DO`})]}),(0,m.jsx)(`text`,{x:`51`,y:`34`,fontSize:`5`,fill:`#fff`,textAnchor:`middle`,children:c?d?`码盘 ${Math.round(f)} 个/秒`:`${l?`挡住`:`透光`} · 挡光 ${e?.count??0} 次`:`未通电`}),(0,m.jsxs)(`g`,{className:`canvas-ui`,style:{cursor:t?`pointer`:`default`},onPointerDown:()=>t&&s(!0),onPointerUp:()=>s(!1),onPointerLeave:()=>s(!1),onPointerCancel:()=>s(!1),children:[(0,m.jsx)(`title`,{children:t?i?`按住：用手指挡住光（物体照样会自动经过）`:`按住：用手指挡住光`:`运行时按住这里挡光`}),(0,m.jsx)(`rect`,{x:`26`,y:`40`,width:`50`,height:`12`,rx:`3`,fill:a?`#c9ccd1`:`#eef0f3`,stroke:`#9aa1ab`,opacity:t?1:.6}),(0,m.jsx)(`text`,{x:`51`,y:`48`,fontSize:`5.5`,fill:`#1f2328`,textAnchor:`middle`,opacity:t?1:.6,children:`按住挡光`})]}),(0,m.jsx)(`rect`,{x:`76`,y:`2`,width:`10`,height:`60`,rx:`2`,fill:`#1c1c1e`}),(0,m.jsx)(`rect`,{x:`96`,y:`2`,width:`10`,height:`60`,rx:`2`,fill:`#1c1c1e`}),c&&!l&&(0,m.jsx)(`line`,{x1:Xo.x0,y1:Xo.y,x2:Xo.x1,y2:Xo.y,stroke:`#ff4d4f`,strokeWidth:`1`,strokeDasharray:`2 1.5`,opacity:`0.85`}),d&&f>=Zo&&(0,m.jsx)(`rect`,{x:`88`,y:`0`,width:`6`,height:`64`,fill:`#c9a227`,opacity:`0.55`}),d&&f<Zo&&l&&!a&&(0,m.jsx)(`rect`,{x:`88`,y:`10`,width:`6`,height:`44`,fill:`#c9a227`,stroke:`#8a6d12`,strokeWidth:`0.5`}),u&&(0,m.jsx)(`rect`,{x:`88`,y:`14`,width:`6`,height:`36`,rx:`1`,fill:`#b08850`,stroke:`#7a5a30`,strokeWidth:`0.6`}),(a||n===`manual`&&l)&&(0,m.jsx)(`rect`,{x:`87`,y:`0`,width:`8`,height:`40`,rx:`4`,fill:`#e8b48f`,stroke:`#c48b66`,strokeWidth:`0.6`})]})}var $o={geometry:()=>({width:qo,height:Jo,pins:Yo}),Component:({part:e,state:t,running:n,input:r})=>(0,m.jsx)(Qo,{state:t,running:n,mode:String(e.props.mode??`manual`),input:r})},es=e=>{let t=Number(e);return Number.isFinite(t)?Math.min(100,Math.max(1,t)):30},ts=84,ns=112,rs=108,is={"+":{x:37.2,y:rs},"-":{x:46.8,y:rs}},as={x:14,y:78,w:56};function os(e){let t=D(e),n=(e,n)=>Math.round(e+(n-e)*t);return`rgb(${n(58,255)}, ${n(61,90)}, ${n(66,31)})`}function ss({state:e,running:t,rise:n,setProp:r}){let[i=0]=E(e,e=>[e.duty],t);return(0,m.jsxs)(`div`,{style:{position:`relative`,width:ts,height:ns},children:[(0,m.jsxs)(`svg`,{width:ts,height:ns,viewBox:`0 0 ${ts} ${ns}`,style:{display:`block`},children:[Object.values(is).map(e=>(0,m.jsx)(`rect`,{x:e.x-1,y:`90`,width:`2`,height:18,fill:`var(--lead)`},e.x)),(0,m.jsx)(`text`,{x:is[`+`].x-4,y:`100`,fontSize:`5.5`,fill:`var(--ink-2)`,textAnchor:`middle`,fontFamily:k,children:`+`}),(0,m.jsx)(`text`,{x:is[`-`].x+4,y:`100`,fontSize:`5.5`,fill:`var(--ink-2)`,textAnchor:`middle`,fontFamily:k,children:`-`}),(0,m.jsx)(`rect`,{x:`8`,y:`4`,width:`68`,height:`52`,rx:`3`,fill:`#b9bec6`,stroke:`#8a919c`}),[14,22,30,38,46,54,62,70].map(e=>(0,m.jsx)(`line`,{x1:e,y1:`6`,x2:e,y2:`54`,stroke:`#9aa1ab`,strokeWidth:`1.2`},e)),(0,m.jsx)(`rect`,{x:`18`,y:`14`,width:`48`,height:`32`,rx:`2`,fill:os(i),stroke:`#5b6068`}),(0,m.jsx)(`text`,{x:`42`,y:`33`,fontSize:`6`,fill:i>.3?`#fff`:`#c9ccd1`,textAnchor:`middle`,fontFamily:k,children:`PTC`}),(0,m.jsx)(`rect`,{x:`40`,y:`56`,width:`4`,height:`34`,fill:`#5b6068`}),(0,m.jsx)(`text`,{x:ts/2,y:`65`,fontSize:`5.5`,fill:`var(--ink)`,textAnchor:`middle`,children:e?`发热 ${Math.round(e.duty*100)}% · 热体${e.bodyId>1?` ${e.bodyId}`:``} ${e.body.toFixed(1)}℃`:`加热片`}),(0,m.jsxs)(`text`,{x:ts/2,y:`74`,fontSize:`5`,fill:`var(--ink-2)`,textAnchor:`middle`,children:[`全功率升温 `,n,`℃`]})]}),(0,m.jsx)(`input`,{className:`canvas-ui`,type:`range`,min:1,max:100,step:`1`,title:`全功率升温：只开加热片、不吹风，热体最后比外界高多少度。运行中调大就像负载变大`,value:n,onChange:e=>r?.(`rise`,es(Number(e.target.value))),style:{position:`absolute`,left:as.x,top:as.y,width:as.w*2,height:16,margin:0,transform:`scale(0.5)`,transformOrigin:`0 0`,accentColor:`#e5484d`,cursor:`pointer`}})]})}var cs={geometry:()=>({width:ts,height:ns,pins:is}),Component:({part:e,state:t,running:n,setProp:r})=>(0,m.jsx)(ss,{state:t,running:n,rise:es(e.props.rise),setProp:r})},ls=11059200,us=ls/60,ds=e=>e*ls/1e3,fs={low:1,high:2,floating:4,conflict:8};function ps(e){return e===0?fs.low:e===1?fs.high:e===`floating`?fs.floating:fs.conflict}var ms=e=>[...e].sort((e,t)=>e-t)[e.length>>1],hs=class{now=0;perFrame=us;tracks=[];res;frame=0;lastEdgeFrame=-1;lastEdgeTime=0;latest=-1/0;samples=[];window;constructor(e,t=320){this.window=e,this.res=e/t}push(e,t=!0){let n=e.channels,r=1/0,i=-1/0;for(let e of n)for(let t of e.edges)t.time<r&&(r=t.time),t.time>i&&(i=t.time);(this.tracks.length!==n.length||r<this.latest)&&this.restart(e),this.frame++;let a=i>-1/0;if(a){if(this.lastEdgeFrame>=0){let e=(i-this.lastEdgeTime)/(this.frame-this.lastEdgeFrame);e>0&&(this.samples.push(e),this.samples.length>9&&this.samples.shift(),this.perFrame=ms(this.samples))}this.lastEdgeFrame=this.frame,this.lastEdgeTime=i,this.latest=i}let o=t?this.now+this.perFrame:this.now;this.now=a?r<this.now?i:Math.max(o,i):o,n.forEach((e,t)=>{let n=this.tracks[t];for(let t of e.edges)this.add(n,t.time,t.level);n.level!==e.level&&this.add(n,this.now,e.level)}),this.prune()}columns(e,t){let n=this.tracks[e];if(!n)return[];let r=this.now-this.window,i=n.marks,a=n.before,o=0,s=Math.floor(r/this.res);for(;o<i.length&&i[o].q<s;)a=i[o++].end;let c=[];for(let e=0;e<t;e++){let n=e===t-1?1/0:Math.floor((r+(e+1)*this.window/t)/this.res),s=ps(a);for(;o<i.length&&i[o].q<n;)s|=i[o].mask,a=i[o++].end;c.push(s)}return c}restart(e){this.tracks=e.channels.map(e=>({before:e.initial,level:e.initial,marks:[]})),this.now=0,this.latest=-1/0,this.lastEdgeFrame=-1}add(e,t,n){if(n===e.level)return;let r=e.marks[e.marks.length-1],i=Math.max(Math.floor(t/this.res),r?.q??-1/0);r&&r.q===i?(r.mask|=ps(n),r.end=n):e.marks.push({q:i,mask:ps(e.level)|ps(n),end:n}),e.level=n}prune(){let e=Math.floor((this.now-this.window)/this.res)-2;for(let t of this.tracks){let n=0;for(;n<t.marks.length&&t.marks[n].q<e;)n++;n!==0&&(t.before=t.marks[n-1].end,t.marks.splice(0,n))}}},gs=e=>String(Math.round(e*100)/100);function _s(e,t,n,r,i){let a={line:``,band:``,floating:``,conflict:``},o=(r+i)/2,s=null;for(let c=0;c<e.length;){let l=e[c],u=c+1;for(;u<e.length&&e[u]===l;)u++;let d=gs(t+c*n),f=gs(t+u*n);if(l===fs.low||l===fs.high){let e=l===fs.high?r:i;s===null?a.line+=`M${d} ${gs(e)}`:s!==e&&(a.line+=`V${gs(e)}`),a.line+=`H${f}`,s=e}else s=null,l===fs.floating?a.floating+=`M${d} ${gs(o)}H${f}`:l===fs.conflict?a.conflict+=`M${d} ${gs(o)}H${f}`:a.band+=`M${d} ${gs(r)}H${f}V${gs(i)}H${d}Z`;c=u}return a}var vs=200,ys=108,bs=9.6,xs=22,Ss=8,Cs={x:34,w:160},ws=[1,10,100,1e3],Ts=[`#2b2d31`,`#8d5a2b`,`#e5484d`,`#f08c00`,`#e8b100`,`#2f9e44`,`#3b82f6`,`#8e4ec6`],Es=[...Array.from({length:Ss},(e,t)=>`CH${t}`),`GND`],Ds=Object.fromEntries(Es.map((e,t)=>[e,{x:5,y:xs+t*bs}])),Os=e=>Math.round((xs+e*bs)*100)/100,ks=e=>e>=1e3?`${e/1e3}s`:`${e}ms`;function As({state:e,running:t}){let[n,r]=(0,h.useState)(100),i=(0,h.useRef)(null);(!i.current||i.current.h.window!==ds(n)||!e&&i.current.from)&&(i.current={h:new hs(ds(n)),from:void 0});let a=i.current;e&&e!==a.from&&(a.h.push(e,t),a.from=e);let o=Os(7)+6;return(0,m.jsxs)(`svg`,{width:vs,height:ys,viewBox:`0 0 ${vs} ${ys}`,style:{display:`block`},children:[(0,m.jsx)(`rect`,{x:`10.5`,y:`0.5`,width:189,height:107,rx:`4`,fill:`#f4f5f7`,stroke:`#9aa1ab`}),(0,m.jsx)(`text`,{x:`16`,y:`11`,fontSize:`7`,fill:`#1f2328`,children:`逻辑分析仪`}),(0,m.jsxs)(`g`,{className:`canvas-ui`,style:{cursor:`pointer`},onClick:()=>r(e=>ws[(ws.indexOf(e)+1)%ws.length]),children:[(0,m.jsx)(`title`,{children:`显示最近多长时间（点击切换）`}),(0,m.jsx)(`rect`,{x:156,y:`3.5`,width:`38`,height:`11`,rx:`2`,fill:`#ffffff`,stroke:`#c8cdd4`}),(0,m.jsx)(`text`,{x:175,y:`11.3`,fontSize:`6`,fill:`#1f2328`,textAnchor:`middle`,fontFamily:k,children:`最近 ${ks(n)}`})]}),(0,m.jsx)(`rect`,{x:Cs.x-1,y:16,width:Cs.w+2,height:o-16,fill:`#ffffff`,stroke:`#dde1e6`}),Array.from({length:9},(e,t)=>{let n=Cs.x+(t+1)*Cs.w/10;return(0,m.jsx)(`path`,{d:`M${n} 16.5V${o-.5}`,stroke:`#eef0f3`},t)}),Array.from({length:Ss},(e,t)=>{let n=Os(t),r=_s(a.h.columns(t,Cs.w),Cs.x,1,n-3.2,n+3.2);return(0,m.jsxs)(`g`,{children:[(0,m.jsx)(`rect`,{x:`13`,y:n-3,width:`2.5`,height:`6`,fill:Ts[t]}),(0,m.jsx)(`text`,{x:`18`,y:n+2,fontSize:`5.5`,fill:`#4b5058`,fontFamily:k,children:`CH${t}`}),r.band&&(0,m.jsx)(`path`,{d:r.band,fill:`#1f2328`,opacity:`0.35`}),r.line&&(0,m.jsx)(`path`,{d:r.line,fill:`none`,stroke:`#1f2328`,strokeWidth:`0.8`}),r.floating&&(0,m.jsx)(`path`,{d:r.floating,fill:`none`,stroke:`#9aa0aa`,strokeWidth:`0.8`,strokeDasharray:`1.5 1`}),r.conflict&&(0,m.jsx)(`path`,{d:r.conflict,fill:`none`,stroke:`#f08c00`,strokeWidth:`1`})]},t)}),(0,m.jsx)(`text`,{x:`18`,y:Os(Ss)+2,fontSize:`5.5`,fill:`#4b5058`,fontFamily:k,children:`GND`}),(0,m.jsx)(`rect`,{x:`0`,y:17,width:`10`,height:86.8,rx:`1`,fill:`#141414`}),Es.map(e=>(0,m.jsx)(`rect`,{x:Ds[e].x-1.8,y:Ds[e].y-1.8,width:`3.6`,height:`3.6`,fill:`#d4af37`},e))]})}var js={geometry:()=>({width:vs,height:ys,pins:Ds}),Component:({state:e,running:t})=>(0,m.jsx)(As,{state:e,running:t})},Ms=class{now=0;clockHz=11059200;tracks=[];keep=0;push(e,t){this.clockHz=e.clockHz,(this.tracks.length!==e.channels.length||e.to<this.now)&&(this.tracks=e.channels.map(e=>({before:e.initial,points:[]}))),e.channels.forEach((e,t)=>{for(let n of e.changes)this.tracks[t].points.push(n)}),this.now=e.to,this.keep=t*e.clockHz;let n=this.now-this.keep;for(let e of this.tracks){let t=Fs(e.points,n);t&&(e.before=e.points[t-1].volts,e.points.splice(0,t))}}get channels(){return this.tracks.length}at(e,t){let n=this.tracks[e];if(!n)return null;let r=Is(n.points,t)-1;return r<0?n.before:n.points[r].volts}segment(e,t,n){let r=this.tracks[e];if(!r)return[];let i=[{time:t,volts:this.at(e,t)}];for(let e=Is(r.points,t);e<r.points.length&&r.points[e].time<=n;e++)i.push(r.points[e]);return i}filtered(e,t,n){let r=this.tracks[e];if(!r||!n.length)return[];let i=t*this.clockHz,a=r.before,o=a??0,s=this.now-this.keep,c=e=>{a!==null&&e>s&&(o=a+(o-a)*Math.exp(-(e-s)/i)),s=Math.max(s,e)},l=[],u=0;for(let e of n){for(;u<r.points.length&&r.points[u].time<=e;)c(r.points[u].time),a=r.points[u].volts,u++;c(e),l.push(o)}return l}};function Ns(e,t,n){let r=0,i=0,a=0,o=null,s=null,c=0,l=0,u=0,d=5/2;for(let n=0;n<e.length;n++){let f=e[n],p=(e[n+1]?.time??t)-f.time;if(f.volts===null||p<=0)continue;r+=f.volts*p,i+=p,f.volts>d&&(a+=p),o=o===null?f.volts:Math.max(o,f.volts),s=s===null?f.volts:Math.min(s,f.volts);let ee=e[n-1]?.volts;n>0&&ee!=null&&ee<=d&&f.volts>d&&(u||(c=f.time),l=f.time,u++)}let f=u>=2?(u-1)*n/(l-c):null;return{average:i?r/i:null,max:o,min:s,freq:f!==null&&o!==null&&s!==null&&o-s>1?f:null,duty:f!==null&&i?a/i:null}}function Ps(e){return e>=1e6?`${+(e/1e6).toPrecision(3)}MHz`:e>=1e3?`${+(e/1e3).toPrecision(3)}kHz`:`${+e.toPrecision(3)}Hz`}function Fs(e,t){let n=0,r=e.length;for(;n<r;){let i=n+r>>1;e[i].time<t?n=i+1:r=i}return n}function Is(e,t){let n=0,r=e.length;for(;n<r;){let i=n+r>>1;e[i].time<=t?n=i+1:r=i}return n}var Ls=230,Rs=150,z={x:42,y:18,w:180,h:98},zs=[1,10,100,1e3],Bs=[`#ffd43b`,`#3bc9db`],Vs={CH1:{x:5,y:40},CH2:{x:5,y:64},GND:{x:5,y:88}},Hs=180,Us=e=>e>=1e3?`${e/1e3}s`:`${e}ms`,Ws=e=>z.y+z.h-Math.max(-.2,Math.min(5.2,e))/5*z.h;function Gs(e,t,n){let r=e=>z.x+(e-t)/(n-t)*z.w,i=``,a=null;return e.forEach((o,s)=>{let c=e[s+1]?.time??n,l=r(Math.max(t,o.time)).toFixed(1),u=r(c).toFixed(1);if(o.volts===null){a=null;return}let d=Ws(o.volts).toFixed(1);i+=a===null?`M${l} ${d}`:`V${d}`,i+=`H${u}`,a=o.volts}),i}function Ks({state:e,filter:t}){let[n,r]=(0,h.useState)(10),i=(0,h.useRef)(null);(!i.current||!e&&i.current.from)&&(i.current={h:new Ms,from:void 0});let a=i.current;e&&e!==a.from&&(a.h.push(e,n/1e3+5*t),a.from=e);let o=a.h,s=n/1e3*o.clockHz,c=o.now,l=c-s,u=!!e&&o.channels>0,d=u?[0,1].map(e=>o.segment(e,l,c)):[];return(0,m.jsxs)(`svg`,{width:Ls,height:Rs,viewBox:`0 0 ${Ls} ${Rs}`,style:{display:`block`},children:[(0,m.jsx)(`rect`,{x:`10.5`,y:`0.5`,width:219,height:149,rx:`4`,fill:`#e9ecef`,stroke:`#9aa1ab`}),(0,m.jsx)(`text`,{x:`16`,y:`11`,fontSize:`7`,fill:`#1f2328`,children:`示波器`}),(0,m.jsx)(`text`,{x:`48`,y:`11`,fontSize:`5.5`,fill:`#6b7380`,children:t?`RC ${t*1e3}ms`:`5V 满格`}),(0,m.jsxs)(`g`,{className:`canvas-ui`,style:{cursor:`pointer`},onClick:()=>r(e=>zs[(zs.indexOf(e)+1)%zs.length]),children:[(0,m.jsx)(`title`,{children:`显示最近多长时间（点击切换）`}),(0,m.jsx)(`rect`,{x:180,y:`3.5`,width:`42`,height:`11`,rx:`2`,fill:`#ffffff`,stroke:`#c8cdd4`}),(0,m.jsx)(`text`,{x:201,y:`11.3`,fontSize:`6`,fill:`#1f2328`,textAnchor:`middle`,fontFamily:k,children:`最近 ${Us(n)}`})]}),(0,m.jsx)(`rect`,{x:z.x,y:z.y,width:z.w,height:z.h,rx:`2`,fill:`#0f1a14`}),Array.from({length:9},(e,t)=>{let n=z.x+(t+1)*z.w/10;return(0,m.jsx)(`path`,{d:`M${n} ${z.y}V${z.y+z.h}`,stroke:`#22392c`,strokeWidth:`0.5`},`v${t}`)}),Array.from({length:3},(e,t)=>{let n=z.y+(t+1)*z.h/4;return(0,m.jsx)(`path`,{d:`M${z.x} ${n}H${z.x+z.w}`,stroke:`#22392c`,strokeWidth:`0.5`},`h${t}`)}),[5,5/2,0].map(e=>(0,m.jsxs)(`text`,{x:z.x-2,y:Ws(e)+2,fontSize:`5`,fill:`#6b7380`,textAnchor:`end`,fontFamily:k,children:[e,`V`]},e)),u&&[0,1].map(e=>{let n=Gs(d[e],l,c),r=``;if(t){let n=Array.from({length:181},(e,t)=>l+t/Hs*s);r=o.filtered(e,t,n).map((e,t)=>`${t?`L`:`M`}${(z.x+t/Hs*z.w).toFixed(1)} ${Ws(e).toFixed(1)}`).join(``)}return(0,m.jsxs)(`g`,{children:[n&&(0,m.jsx)(`path`,{d:n,fill:`none`,stroke:Bs[e],strokeWidth:`0.8`,opacity:t?.3:1}),r&&(0,m.jsx)(`path`,{d:r,fill:`none`,stroke:Bs[e],strokeWidth:`1.3`})]},e)}),[0,1].map(e=>{let n=u?Ns(d[e],c,o.clockHz):null,r=t&&u?o.filtered(e,t,[c])[0]:n?.average,i=!n||n.average===null?[`悬空`]:[`${t?`滤波后`:`平均`} ${r.toFixed(2)}V`,n.freq===null?`${n.min.toFixed(2)}~${n.max.toFixed(2)}V`:Ps(n.freq)];return n?.duty!==null&&n?.duty!==void 0&&i.push(`占空比 ${(n.duty*100).toFixed(0)}%`),(0,m.jsxs)(`text`,{x:z.x,y:z.y+z.h+11+e*9,fontSize:`6`,fill:`#1f2328`,fontFamily:k,children:[(0,m.jsx)(`tspan`,{fill:e?`#1098ad`:`#c99a00`,children:`CH${e+1} `}),u?i.join(`  `):`—`]},e)}),(0,m.jsx)(`rect`,{x:`0`,y:`32`,width:`10`,height:`64`,rx:`1`,fill:`#141414`}),Object.entries(Vs).map(([e,t])=>(0,m.jsxs)(`g`,{children:[(0,m.jsx)(`rect`,{x:t.x-1.8,y:t.y-1.8,width:`3.6`,height:`3.6`,fill:`#d4af37`}),(0,m.jsx)(`text`,{x:14,y:t.y+2,fontSize:`5`,fill:`#4b5058`,fontFamily:k,children:e})]},e))]})}var qs={geometry:()=>({width:Ls,height:Rs,pins:Vs}),Component:({part:e,state:t})=>(0,m.jsx)(Ks,{state:t,filter:Number(e.props.filter)||0})},Js=e=>{let t=Number(e);return Number.isFinite(t)?Math.min(re,Math.max(10,t)):500},Ys=84,Xs=112,Zs=108,Qs={"+":{x:37.2,y:Zs},"-":{x:46.8,y:Zs}},$s={x:14,y:78,w:56};function ec({state:e,running:t,lux:n,target:r,setProp:i}){let[a=0]=E(e,e=>[e.duty],t),o=D(a);return(0,m.jsxs)(`div`,{style:{position:`relative`,width:Ys,height:Xs},children:[(0,m.jsxs)(`svg`,{width:Ys,height:Xs,viewBox:`0 0 ${Ys} ${Xs}`,style:{display:`block`},children:[Object.values(Qs).map(e=>(0,m.jsx)(`rect`,{x:e.x-1,y:`90`,width:`2`,height:18,fill:`var(--lead)`},e.x)),(0,m.jsx)(`text`,{x:Qs[`+`].x-4,y:`100`,fontSize:`5.5`,fill:`var(--ink-2)`,textAnchor:`middle`,fontFamily:k,children:`+`}),(0,m.jsx)(`text`,{x:Qs[`-`].x+4,y:`100`,fontSize:`5.5`,fill:`var(--ink-2)`,textAnchor:`middle`,fontFamily:k,children:`-`}),(0,m.jsx)(`path`,{d:`M14 30 L4 58 H80 L70 30 Z`,fill:`#fff4c2`,opacity:.85*o}),(0,m.jsx)(`rect`,{x:`10`,y:`8`,width:`64`,height:`22`,rx:`4`,fill:`#3a3f47`,stroke:`#22262c`}),[18,28,38,48,58,66].map(e=>(0,m.jsx)(`circle`,{cx:e,cy:`24`,r:`3`,fill:o>.05?`rgba(255, 236, 170, ${.35+.65*o})`:`#5b6068`,stroke:`#22262c`,strokeWidth:`0.5`},e)),(0,m.jsx)(`rect`,{x:`40`,y:`58`,width:`4`,height:`32`,fill:`#5b6068`}),(0,m.jsx)(`text`,{x:Ys/2,y:`65`,fontSize:`5.5`,fill:`var(--ink)`,textAnchor:`middle`,children:e?`亮 ${Math.round(e.duty*100)}% · ${Math.round(e.lux)} lx`:`补光灯`}),(0,m.jsx)(`text`,{x:Ys/2,y:`74`,fontSize:`5`,fill:r?`var(--ink-2)`:`#d92d20`,textAnchor:`middle`,children:r?`照着 ${r}，全亮 ${n} lx`:`没选照着哪个传感器`})]}),(0,m.jsx)(`input`,{className:`canvas-ui`,type:`range`,min:10,max:re,step:`10`,title:`全亮时照到传感器上多亮：灯离传感器近就亮、远就暗`,value:n,onChange:e=>i?.(`lux`,Js(Number(e.target.value))),style:{position:`absolute`,left:$s.x,top:$s.y,width:$s.w*2,height:16,margin:0,transform:`scale(0.5)`,transformOrigin:`0 0`,accentColor:`#e8b100`,cursor:`pointer`}})]})}var tc={geometry:()=>({width:Ys,height:Xs,pins:Qs}),Component:({part:e,state:t,running:n,setProp:r})=>(0,m.jsx)(ec,{state:t,running:n,lux:Js(e.props.lux),target:typeof e.props.target==`string`?e.props.target:``,setProp:r})},nc=84,rc=112,ic=108,ac={"+":{x:37.2,y:ic},"-":{x:46.8,y:ic}};function oc({state:e,running:t,target:n,flow:r}){let[i=0]=E(e,e=>[e.duty],t);return(0,m.jsxs)(`svg`,{width:nc,height:rc,viewBox:`0 0 ${nc} ${rc}`,style:{display:`block`},children:[Object.values(ac).map(e=>(0,m.jsx)(`rect`,{x:e.x-1,y:`88`,width:`2`,height:20,fill:`var(--lead)`},e.x)),(0,m.jsx)(`text`,{x:ac[`+`].x-4,y:`98`,fontSize:`5.5`,fill:`var(--ink-2)`,textAnchor:`middle`,fontFamily:k,children:`+`}),(0,m.jsx)(`text`,{x:ac[`-`].x+4,y:`98`,fontSize:`5.5`,fill:`var(--ink-2)`,textAnchor:`middle`,fontFamily:k,children:`-`}),(0,m.jsx)(`path`,{d:`M52 22 H70 V8 H76 V28 H52 Z`,fill:`#9aa1ab`}),(0,m.jsx)(`rect`,{x:`22`,y:`16`,width:`32`,height:`40`,rx:`6`,fill:`#2b6cb0`,stroke:`#1d4f86`}),(0,m.jsx)(`circle`,{cx:`38`,cy:`36`,r:`9`,fill:`#3b82c4`,stroke:`#1d4f86`}),(0,m.jsx)(`circle`,{cx:`38`,cy:`36`,r:`3`,fill:`#cfe3f7`,opacity:.4+.6*i}),i>.05&&(0,m.jsxs)(`g`,{fill:`#4dabf7`,opacity:Math.min(1,i*1.5),children:[(0,m.jsx)(`circle`,{cx:`73`,cy:`34`,r:`1.8`}),(0,m.jsx)(`circle`,{cx:`73`,cy:`41`,r:`1.8`}),(0,m.jsx)(`circle`,{cx:`73`,cy:`48`,r:`1.8`})]}),(0,m.jsx)(`rect`,{x:`40`,y:`56`,width:`4`,height:`32`,fill:`#5b6068`}),(0,m.jsx)(`text`,{x:nc/2,y:`65`,fontSize:`5.5`,fill:`var(--ink)`,textAnchor:`middle`,children:e?`抽水 ${Math.round(e.duty*100)}% · ${r} ml/s`:`水泵 ${r} ml/s`}),(0,m.jsx)(`text`,{x:nc/2,y:`74`,fontSize:`5`,fill:n?`var(--ink-2)`:`#d92d20`,textAnchor:`middle`,children:n?`往 ${n} 里抽水`:`没选往哪里抽水`})]})}var sc={geometry:()=>({width:nc,height:rc,pins:ac}),Component:({part:e,state:t,running:n})=>(0,m.jsx)(oc,{state:t,running:n,target:typeof e.props.target==`string`?e.props.target:``,flow:Number(e.props.flow)||30})},cc=84,lc=112,uc=108,dc={"+":{x:37.2,y:uc},"-":{x:46.8,y:uc}};function fc({state:e,running:t,target:n}){let[r=0]=E(e,e=>[e.duty],t);return(0,m.jsxs)(`svg`,{width:cc,height:lc,viewBox:`0 0 ${cc} ${lc}`,style:{display:`block`},children:[Object.values(dc).map(e=>(0,m.jsx)(`rect`,{x:e.x-1,y:`88`,width:`2`,height:20,fill:`var(--lead)`},e.x)),(0,m.jsx)(`text`,{x:dc[`+`].x-4,y:`98`,fontSize:`5.5`,fill:`var(--ink-2)`,textAnchor:`middle`,fontFamily:k,children:`+`}),(0,m.jsx)(`text`,{x:dc[`-`].x+4,y:`98`,fontSize:`5.5`,fill:`var(--ink-2)`,textAnchor:`middle`,fontFamily:k,children:`-`}),(0,m.jsxs)(`g`,{fill:`#cfe3f7`,opacity:.9*r,children:[(0,m.jsx)(`ellipse`,{cx:`36`,cy:`12`,rx:`7`,ry:`4`}),(0,m.jsx)(`ellipse`,{cx:`46`,cy:`7`,rx:`8`,ry:`4.5`}),(0,m.jsx)(`ellipse`,{cx:`42`,cy:`16`,rx:`6`,ry:`3.5`})]}),(0,m.jsx)(`path`,{d:`M26 56 C 22 40, 26 24, 42 22 C 58 24, 62 40, 58 56 Z`,fill:`#f4f6f8`,stroke:`#9aa1ab`}),(0,m.jsx)(`rect`,{x:`38`,y:`20`,width:`8`,height:`4`,rx:`1`,fill:`#9aa1ab`}),(0,m.jsx)(`circle`,{cx:`42`,cy:`44`,r:`3`,fill:r>.05?`#4dabf7`:`#c8cdd4`}),(0,m.jsx)(`rect`,{x:`40`,y:`56`,width:`4`,height:`32`,fill:`#5b6068`}),(0,m.jsx)(`text`,{x:cc/2,y:`65`,fontSize:`5.5`,fill:`var(--ink)`,textAnchor:`middle`,children:e?`加湿 ${Math.round(e.duty*100)}% · +${e.added.toFixed(1)}%RH`:`加湿器`}),(0,m.jsx)(`text`,{x:cc/2,y:`74`,fontSize:`5`,fill:n?`var(--ink-2)`:`#d92d20`,textAnchor:`middle`,fontFamily:k,children:n?`在 ${n} 旁边`:`没选在哪个传感器旁边`})]})}var pc={geometry:()=>({width:cc,height:lc,pins:dc}),Component:({part:e,state:t,running:n})=>(0,m.jsx)(fc,{state:t,running:n,target:typeof e.props.target==`string`?e.props.target:``})};function mc(e){return(0,m.jsx)(`input`,{className:`canvas-ui`,type:`range`,min:e.min,max:e.max,step:e.step,title:e.disabled?Oi:e.title,value:e.value,disabled:e.disabled,onChange:t=>e.onChange(Number(t.target.value)),style:{position:`absolute`,left:e.left,top:e.top,width:e.width*2,height:18,margin:0,transform:`scale(0.5)`,transformOrigin:`0 0`,accentColor:`#2563eb`,cursor:e.disabled?`default`:`pointer`}})}var hc=84,gc=120,_c=[`AO`,`DO`,`GND`,`VCC`],vc=Object.fromEntries(_c.map((e,t)=>[e,{x:hc/2-14.4+t*9.6,y:2}]));function yc(e){let t=Math.min(1,Math.max(0,e/100)),n=(e,n)=>Math.round(e+(n-e)*t);return`rgb(${n(196,74)}, ${n(160,50)}, ${n(112,30)})`}function bc({state:e,running:t,start:n,input:r}){let i=e?.moisture??n,a=i<25;return(0,m.jsxs)(`div`,{style:{position:`relative`,width:hc,height:gc},children:[(0,m.jsxs)(`svg`,{width:hc,height:gc,viewBox:`0 0 ${hc} ${gc}`,style:{display:`block`},children:[_c.map(e=>(0,m.jsxs)(`g`,{children:[(0,m.jsx)(`rect`,{x:vc[e].x-1,y:vc[e].y,width:`2`,height:`8`,fill:`var(--lead)`}),(0,m.jsx)(`text`,{x:vc[e].x,y:`20`,fontSize:`3.6`,fill:`#e9f5ec`,textAnchor:`middle`,fontFamily:k,children:e})]},e)),(0,m.jsx)(`rect`,{x:hc/2-22,y:`10`,width:`44`,height:`14`,rx:`1.5`,fill:`#1f6f43`}),(0,m.jsx)(`rect`,{x:hc/2-8,y:`24`,width:`4`,height:`40`,fill:`#c8a24a`}),(0,m.jsx)(`rect`,{x:46,y:`24`,width:`4`,height:`40`,fill:`#c8a24a`}),(0,m.jsx)(`path`,{d:a?`M60 44 C 60 36, 66 34, 70 38`:`M60 44 C 60 34, 62 30, 64 26`,stroke:`#3d8b3d`,strokeWidth:`1.5`,fill:`none`}),(0,m.jsx)(`ellipse`,{cx:a?70:66,cy:a?39:27,rx:`4`,ry:`2`,fill:`#5bb35b`,transform:a?`rotate(30 70 39)`:`rotate(-20 66 27)`}),(0,m.jsx)(`path`,{d:`M12 44 H72 L66 84 H18 Z`,fill:`#b5653a`,stroke:`#8a4a28`}),(0,m.jsx)(`path`,{d:`M13.5 48 H70.5 L69.8 52 H14.2 Z`,fill:yc(i)}),(0,m.jsx)(`rect`,{x:`14`,y:`44`,width:`56`,height:`8`,fill:yc(i)}),e?.watering&&(0,m.jsxs)(`g`,{fill:`#4dabf7`,children:[(0,m.jsx)(`circle`,{cx:`30`,cy:`40`,r:`1.6`}),(0,m.jsx)(`circle`,{cx:`36`,cy:`36`,r:`1.6`}),(0,m.jsx)(`circle`,{cx:`33`,cy:`31`,r:`1.6`})]}),(0,m.jsxs)(`text`,{x:hc/2,y:`94`,fontSize:`6`,fill:`var(--ink)`,textAnchor:`middle`,children:[`土壤湿度 `,Math.round(i),`%`]}),(0,m.jsx)(`text`,{x:hc/2,y:`103`,fontSize:`5`,fill:`var(--ink-2)`,textAnchor:`middle`,fontFamily:k,children:e?.powered?`AO ${e.ao.toFixed(2)}V · DO ${e.do}`:`没通电`})]}),(0,m.jsx)(mc,{left:12,top:107,width:60,min:0,max:100,step:1,value:Math.round(i),title:t?`直接把土的湿度改成多少（像手动浇了水，或者晒干了）`:`开始时的土壤湿度`,onChange:e=>r({moisture:e})})]})}var xc={geometry:()=>({width:hc,height:gc,pins:vc}),Component:({part:e,state:t,running:n,input:r,setProp:i})=>(0,m.jsx)(bc,{state:t,running:n,start:Number(e.props.moisture)||0,input:e=>n?r(e):i?.(`moisture`,e.moisture)})},Sc=96,Cc=128,B={x:30,y:10,w:56,h:88},wc={COM:{x:2,y:20},H:{x:2,y:29.6},L:{x:2,y:39.2},AO:{x:2,y:48.8}};function Tc({state:e,running:t,start:n,highMark:r,lowMark:i,use:a,input:o}){let s=e?.level??n,c=e=>B.y+B.h*(1-e/100),l=(e,t,n)=>(0,m.jsxs)(`g`,{children:[(0,m.jsx)(`line`,{x1:B.x-6,y1:c(e),x2:B.x+4,y2:c(e),stroke:`#5b6068`,strokeWidth:`0.8`,strokeDasharray:`1.5 1`}),(0,m.jsx)(`circle`,{cx:B.x+8,cy:t?Math.min(c(e),c(s))-3:c(e)+3,r:`3.2`,fill:t?`#2f9e44`:`#c8cdd4`,stroke:`#5b6068`,strokeWidth:`0.5`}),(0,m.jsxs)(`text`,{x:B.x+B.w+3,y:c(e)+2,fontSize:`4.5`,fill:`var(--ink-2)`,fontFamily:k,children:[n,` `,e,`%`]})]});return(0,m.jsxs)(`div`,{style:{position:`relative`,width:Sc,height:Cc},children:[(0,m.jsxs)(`svg`,{width:Sc,height:Cc,viewBox:`0 0 ${Sc} ${Cc}`,style:{display:`block`},children:[Object.entries(wc).map(([e,t])=>(0,m.jsxs)(`g`,{children:[(0,m.jsx)(`rect`,{x:t.x-1,y:t.y-1,width:`10`,height:`2`,fill:`var(--lead)`}),(0,m.jsx)(`text`,{x:t.x+12,y:t.y+1.8,fontSize:`4.5`,fill:`var(--ink-2)`,fontFamily:k,children:e})]},e)),(0,m.jsx)(`rect`,{x:B.x,y:B.y,width:B.w,height:B.h,rx:`2`,fill:`#f1f6fb`,stroke:`#8a919c`}),(0,m.jsx)(`rect`,{x:B.x+.5,y:c(s),width:B.w-1,height:B.h*(s/100),fill:`#74c0fc`,opacity:`0.85`}),e?.filling&&(0,m.jsx)(`g`,{fill:`#4dabf7`,children:(0,m.jsx)(`rect`,{x:B.x+B.w-14,y:B.y-6,width:`3`,height:Math.max(2,c(s)-B.y+6),opacity:`0.7`})}),l(r,e?.high??s>=r,`H`),l(i,e?.low??s>=i,`L`),(0,m.jsxs)(`text`,{x:B.x+B.w/2,y:B.y+B.h+9,fontSize:`6`,fill:`var(--ink)`,textAnchor:`middle`,children:[`水位 `,Math.round(s),`%`]}),(0,m.jsxs)(`text`,{x:B.x+B.w/2,y:B.y+B.h+17,fontSize:`4.8`,fill:`var(--ink-2)`,textAnchor:`middle`,children:[`一直在用水 `,a,` ml/s`]})]}),(0,m.jsx)(mc,{left:B.x,top:B.y+B.h+20,width:B.w,min:0,max:100,step:1,value:Math.round(s),title:t?`直接把水位改成多少（像一下子倒进或放掉一桶水）`:`开始时的水位`,onChange:e=>o({level:e})})]})}var Ec={geometry:()=>({width:Sc,height:Cc,pins:wc}),Component:({part:e,state:t,running:n,input:r,setProp:i})=>(0,m.jsx)(Tc,{state:t,running:n,start:Number(e.props.level)||0,highMark:Number(e.props.high)||80,lowMark:Number(e.props.low)||0,use:Number(e.props.use)||0,input:e=>n?r(e):e.level!==void 0&&i?.(`level`,e.level)})},Dc=84,Oc=10,V={x:6,y:Oc,w:72,h:46},kc=14,Ac=V.y+V.h+4+kc,jc=[`AO`,`DO`,`GND`,`VCC`],Mc=Object.fromEntries(jc.map((e,t)=>[e,{x:Dc/2-14.4+t*9.6,y:2}])),Nc={x:46,w:36,y:V.y+V.h+4};function Pc(e){return{geometry:()=>({width:Dc,height:Ac,pins:Mc}),Component({part:t,state:n,running:r,input:i,openEnv:a,setProp:o}){let s=Number(t.props[e.q]),c=Number.isFinite(s)?s:e.fallback,l=I(n,e.q,c),u=Dc/2,d=V.y+24,f=n?.do===0;return(0,m.jsxs)(`div`,{style:{position:`relative`,width:Dc,height:Ac},children:[(0,m.jsxs)(`svg`,{width:Dc,height:Ac,viewBox:`0 0 ${Dc} ${Ac}`,style:{display:`block`},children:[jc.map(e=>(0,m.jsx)(`rect`,{x:Mc[e].x-1,y:Mc[e].y,width:`2`,height:Oc,fill:`var(--lead)`},e)),(0,m.jsx)(`rect`,{x:V.x,y:V.y,width:V.w,height:V.h,rx:`3`,fill:e.color}),jc.map(e=>(0,m.jsx)(`text`,{x:Mc[e].x,y:V.y+6,fontSize:`3.2`,fill:`#ffffff`,textAnchor:`middle`,fontFamily:k,children:e},e)),(0,m.jsx)(`g`,{transform:`translate(${u} ${d})`,children:e.probe(l.value)}),(0,m.jsx)(`circle`,{cx:V.x+V.w-6,cy:V.y+11,r:`2`,fill:f?`#ff4d4f`:`#5c1d1d`}),(0,m.jsx)(`rect`,{x:V.x+4,y:V.y+9,width:`7`,height:`7`,rx:`1`,fill:`#2563eb`}),(0,m.jsx)(`circle`,{cx:V.x+7.5,cy:V.y+12.5,r:`2`,fill:`#e8e8e8`}),(0,m.jsx)(`text`,{x:u,y:V.y+V.h-4,fontSize:`4.4`,fill:`#ffffff`,textAnchor:`middle`,fontFamily:k,children:n?.powered===!1?`未通电`:n?.ao==null?e.name:`${e.name} AO ${n.ao.toFixed(2)}V`}),(0,m.jsxs)(`text`,{x:`2`,y:Nc.y+kc-4,fontSize:`6`,fill:`var(--ink)`,fontFamily:k,children:[(0,m.jsx)(L,{shown:l,open:a}),e.text(l.value)]}),(0,m.jsx)(Ni,{type:e.type,x:V.x+14,y:V.y+8,dir:`row`,state:n,running:r,input:i})]}),(0,m.jsx)(mc,{left:Nc.x,top:Nc.y+2,width:Nc.w,min:e.slider.min,max:e.slider.max,step:e.slider.step,value:c,disabled:l.mode===`script`,title:l.mode===`script`?Oi:e.slider.title,onChange:t=>o?.(e.q,t)})]})}}}var Fc=Pc({type:`sound-sensor`,q:`sound`,color:`#1f5fa8`,name:`SOUND`,fallback:40,probe:e=>(0,m.jsxs)(`g`,{children:[(0,m.jsx)(`circle`,{r:`7`,fill:`#c7cdd4`,stroke:`#7d858f`,strokeWidth:`0.8`}),(0,m.jsx)(`circle`,{r:`4.5`,fill:`#3b3f45`}),e>=70&&(0,m.jsx)(`path`,{d:`M10 -6 A 9 9 0 0 1 10 6 M14 -9 A 13 13 0 0 1 14 9`,fill:`none`,stroke:`#ffe066`,strokeWidth:`1`})]}),text:e=>`${Math.round(e)} dB`,slider:{min:30,max:120,step:1,title:`周围的声音有多响：安静的房间约 40dB，说话约 60dB`}}),Ic=Pc({type:`mq2`,q:`gas`,color:`#1f6f43`,name:`MQ-2`,fallback:200,probe:e=>(0,m.jsxs)(`g`,{children:[(0,m.jsx)(`circle`,{r:`9`,fill:`#b9bec5`,stroke:`#7d858f`,strokeWidth:`0.8`}),(0,m.jsx)(`circle`,{r:`6.5`,fill:e>=1e3?`#f08c00`:`#868e96`,opacity:`0.9`}),[-4,-2,0,2,4].map(e=>(0,m.jsxs)(`g`,{stroke:`#495057`,strokeWidth:`0.4`,children:[(0,m.jsx)(`line`,{x1:-6,y1:e,x2:6,y2:e}),(0,m.jsx)(`line`,{x1:e,y1:-6,x2:e,y2:6})]},e))]}),text:e=>`${Math.round(e)} ppm`,slider:{min:0,max:1e4,step:50,title:`烟雾、可燃气体的浓度：干净空气约 200ppm`}}),Lc=Pc({type:`flame-sensor`,q:`flame`,color:`#1f5fa8`,name:`FLAME`,fallback:0,probe:e=>(0,m.jsxs)(`g`,{children:[(0,m.jsx)(`rect`,{x:`-3`,y:`-2`,width:`6`,height:`10`,fill:`#212529`}),(0,m.jsx)(`ellipse`,{cy:`-2`,rx:`3`,ry:`3.5`,fill:`#212529`}),e>=10&&(0,m.jsx)(`path`,{d:`M14 8 C 8 2, 12 -4, 14 -9 C 16 -4, 20 2, 14 8 Z`,fill:`#ff922b`,opacity:Math.min(1,.3+e/100)})]}),text:e=>`火焰 ${Math.round(e)}%`,slider:{min:0,max:100,step:1,title:`火焰有多强：0 是没有火`}}),Rc=Pc({type:`ntc`,q:`temperature`,color:`#1f5fa8`,name:`NTC`,fallback:25,probe:e=>(0,m.jsxs)(`g`,{children:[(0,m.jsx)(`line`,{x1:`-2`,y1:`0`,x2:`-2`,y2:`9`,stroke:`#adb5bd`,strokeWidth:`0.8`}),(0,m.jsx)(`line`,{x1:`2`,y1:`0`,x2:`2`,y2:`9`,stroke:`#adb5bd`,strokeWidth:`0.8`}),(0,m.jsx)(`ellipse`,{rx:`4`,ry:`3`,fill:e>=60?`#c92a2a`:`#212529`})]}),text:e=>`${e.toFixed(1)}℃`,slider:{min:-40,max:125,step:.5,title:`温度`}}),zc=vr([`OUT`,`GND`,`VCC`]),Bc={geometry:()=>({width:j.W,height:M,pins:zc}),Component:({state:e,running:t,input:n})=>(0,m.jsxs)(`svg`,{width:j.W,height:M,viewBox:`0 0 ${j.W} ${M}`,style:{display:`block`},children:[(0,m.jsxs)(yr,{pins:zc,color:`#2f9e44`,children:[(0,m.jsx)(`circle`,{cx:j.W/2,cy:j.LEG+26,r:`14`,fill:`#f8f9fa`,stroke:`#ced4da`}),[-8,-3,3,8].map(e=>(0,m.jsx)(`line`,{x1:j.W/2+e,y1:j.LEG+14,x2:j.W/2+e,y2:j.LEG+38,stroke:`#dee2e6`,strokeWidth:`0.6`},e)),(0,m.jsx)(`circle`,{cx:j.W-10,cy:j.LEG+8,r:`2`,fill:e?.out===1?`#ff4d4f`:`#5c1d1d`}),e?.motion&&(0,m.jsxs)(`g`,{transform:`translate(${j.W/2-4} ${j.LEG+18})`,fill:`#495057`,children:[(0,m.jsx)(`circle`,{cx:`4`,cy:`2`,r:`2`}),(0,m.jsx)(`path`,{d:`M4 4 L4 10 M4 6 L0 9 M4 6 L8 9 M4 10 L1 15 M4 10 L7 15`,stroke:`#495057`,strokeWidth:`1.2`,fill:`none`})]})]}),(0,m.jsx)(`text`,{x:`4`,y:M-4,fontSize:`5`,fill:`var(--ink)`,children:e?e.out===null?`未通电`:`OUT ${e.out}`:`HC-SR501`}),t&&e&&(0,m.jsx)(br,{x:j.W-40,y:M-13,w:38,label:e.motion?`人停下`:`有人走动`,title:`有人在传感器前面走动；再点一下停下来（或走开）`,on:e.motion,onClick:()=>n({motion:!e.motion})})]})},Vc=vr([`OUT`,`GND`,`VCC`]),Hc={cx:j.W/2,cy:j.LEG+26,r:13},Uc={geometry:()=>({width:j.W,height:M,pins:Vc}),Component:({state:e,running:t,input:n})=>(0,m.jsxs)(`svg`,{width:j.W,height:M,viewBox:`0 0 ${j.W} ${M}`,style:{display:`block`},children:[(0,m.jsx)(yr,{pins:Vc,color:`#c92a2a`}),(0,m.jsxs)(`g`,{className:t?`canvas-ui`:void 0,style:{cursor:t?`pointer`:`default`},onPointerDown:e=>{t&&(e.stopPropagation(),e.target.setPointerCapture?.(e.pointerId),n({touched:!0}))},onPointerUp:()=>t&&n({touched:!1}),onPointerCancel:()=>t&&n({touched:!1}),children:[(0,m.jsx)(`title`,{children:`按住感应片：手指摸着`}),(0,m.jsx)(`circle`,{cx:Hc.cx,cy:Hc.cy,r:Hc.r,fill:e?.touched?`#ffc9c9`:`#f1f3f5`,stroke:`#ced4da`}),(0,m.jsx)(`circle`,{cx:Hc.cx,cy:Hc.cy,r:Hc.r-5,fill:`none`,stroke:`#adb5bd`,strokeWidth:`0.6`})]}),(0,m.jsx)(`circle`,{cx:j.W-10,cy:j.LEG+8,r:`2`,fill:e?.out===1?`#ff4d4f`:`#5c1d1d`}),(0,m.jsx)(`text`,{x:`4`,y:M-4,fontSize:`5`,fill:`var(--ink)`,children:e?e.out===null?`未通电`:`OUT ${e.out}${e.touched?` · 摸着`:``}`:`TTP223`})]})},Wc=vr([`DO`,`GND`,`VCC`]),Gc={geometry:()=>({width:j.W,height:M,pins:Wc}),Component:({part:e,state:t,running:n,input:r})=>{let i=e.props.kind===`reed`,a=t?.near??!1,o=j.LEG+26;return(0,m.jsxs)(`svg`,{width:j.W,height:M,viewBox:`0 0 ${j.W} ${M}`,style:{display:`block`},children:[(0,m.jsxs)(yr,{pins:Wc,color:`#1f5fa8`,children:[i?(0,m.jsxs)(`g`,{children:[(0,m.jsx)(`rect`,{x:j.W/2-16,y:o-4,width:`32`,height:`8`,rx:`4`,fill:`#e7f5ff`,stroke:`#a5d8ff`}),(0,m.jsx)(`line`,{x1:j.W/2-14,y1:o,x2:j.W/2+1,y2:a?o:o-2,stroke:`#868e96`,strokeWidth:`1.2`}),(0,m.jsx)(`line`,{x1:j.W/2+14,y1:o,x2:j.W/2-1,y2:a?o:o+2,stroke:`#868e96`,strokeWidth:`1.2`})]}):(0,m.jsxs)(`g`,{children:[(0,m.jsx)(`rect`,{x:j.W/2-5,y:o-6,width:`10`,height:`8`,rx:`1`,fill:`#212529`}),[-3,0,3].map(e=>(0,m.jsx)(`line`,{x1:j.W/2+e,y1:o+2,x2:j.W/2+e,y2:o+9,stroke:`#adb5bd`,strokeWidth:`0.8`},e))]}),a&&(0,m.jsxs)(`g`,{transform:`translate(${j.W/2+12} ${o-16})`,children:[(0,m.jsx)(`rect`,{width:`14`,height:`7`,fill:`#e03131`}),(0,m.jsx)(`rect`,{x:`7`,width:`7`,height:`7`,fill:`#1971c2`})]}),(0,m.jsx)(`circle`,{cx:j.W-10,cy:j.LEG+8,r:`2`,fill:t?.out===0?`#ff4d4f`:`#5c1d1d`})]}),(0,m.jsx)(`text`,{x:`4`,y:M-4,fontSize:`5`,fill:`var(--ink)`,children:t?t.out===null?`未通电`:`DO ${t.out}`:i?`干簧管`:`霍尔`}),n&&t&&(0,m.jsx)(br,{x:j.W-40,y:M-13,w:38,label:a?`拿开磁铁`:`磁铁靠近`,title:`把磁铁靠近传感器；再点一下拿开`,on:a,onClick:()=>r({near:!a})})]})}},Kc=84,qc=10,H={x:6,y:qc,w:72,h:50},Jc=H.y+H.h+16,Yc=[`SW`,`DT`,`CLK`,`GND`,`VCC`],Xc=Object.fromEntries(Yc.map((e,t)=>[e,{x:Kc/2-19.2+t*9.6,y:2}])),Zc={geometry:()=>({width:Kc,height:Jc,pins:Xc}),Component({state:e,running:t,input:n}){let r=e?.position??0,i=Kc/2,a=H.y+28;return(0,m.jsxs)(`svg`,{width:Kc,height:Jc,viewBox:`0 0 ${Kc} ${Jc}`,style:{display:`block`},children:[Yc.map(e=>(0,m.jsx)(`rect`,{x:Xc[e].x-1,y:Xc[e].y,width:`2`,height:qc,fill:`var(--lead)`},e)),(0,m.jsx)(`rect`,{x:H.x,y:H.y,width:H.w,height:H.h,rx:`3`,fill:`#1f5fa8`}),Yc.map(e=>(0,m.jsx)(`text`,{x:Xc[e].x,y:H.y+6,fontSize:`3.1`,fill:`#ffffff`,textAnchor:`middle`,fontFamily:k,children:e},e)),(0,m.jsxs)(`g`,{transform:`translate(${i} ${a}) rotate(${r*18})`,children:[(0,m.jsx)(`circle`,{r:`14`,fill:e?.pressed?`#868e96`:`#adb5bd`,stroke:`#495057`}),(0,m.jsx)(`circle`,{r:`10`,fill:`#ced4da`}),(0,m.jsx)(`rect`,{x:`-1`,y:`-13`,width:`2`,height:`9`,fill:`#ffffff`})]}),(0,m.jsx)(`text`,{x:`4`,y:Jc-4,fontSize:`5`,fill:`var(--ink)`,fontFamily:k,children:e?`第 ${r} 格`:`EC11`}),t&&e&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(br,{x:H.x+2,y:H.y+9,w:12,label:`↺`,title:`逆时针转一格`,on:!1,onClick:()=>n({turn:-1})}),(0,m.jsx)(br,{x:H.x+H.w-14,y:H.y+9,w:12,label:`↻`,title:`顺时针转一格`,on:!1,onClick:()=>n({turn:1})}),(0,m.jsx)(br,{x:54,y:Jc-13,w:28,label:`按下`,title:`按住旋钮（SW 接到 GND）`,on:e.pressed,onPress:e=>n({pressed:e})})]})]})}},Qc=84,$c=10,el={x:6,y:$c,w:72,h:58},tl=el.y+el.h+16,nl=[`VRX`,`VRY`,`SW`,`GND`,`VCC`],rl=Object.fromEntries(nl.map((e,t)=>[e,{x:Qc/2-19.2+t*9.6,y:2}])),il={cx:Qc/2,cy:el.y+32,r:20},al=8,ol={geometry:()=>({width:Qc,height:tl,pins:rl}),Component({state:e,running:t,input:n}){let[r,i]=(0,h.useState)(!1),a=e?.x??0,o=e?.y??0,s=il.r-al/2,c=e=>{let t=(e.currentTarget.ownerSVGElement??e.currentTarget).getBoundingClientRect(),r=(e.clientX-t.left)/t.width*Qc-il.cx,i=(e.clientY-t.top)/t.height*tl-il.cy,a=Math.min(1,s/Math.max(1e-9,Math.hypot(r,i)));n({x:r*a/s,y:i*a/s})};return(0,m.jsxs)(`svg`,{width:Qc,height:tl,viewBox:`0 0 ${Qc} ${tl}`,style:{display:`block`},children:[nl.map(e=>(0,m.jsx)(`rect`,{x:rl[e].x-1,y:rl[e].y,width:`2`,height:$c,fill:`var(--lead)`},e)),(0,m.jsx)(`rect`,{x:el.x,y:el.y,width:el.w,height:el.h,rx:`3`,fill:`#1c1c1e`}),nl.map(e=>(0,m.jsx)(`text`,{x:rl[e].x,y:el.y+6,fontSize:`3.1`,fill:`#ffffff`,textAnchor:`middle`,fontFamily:k,children:e},e)),(0,m.jsx)(`circle`,{cx:il.cx,cy:il.cy,r:il.r,fill:`#343a40`,stroke:`#495057`}),(0,m.jsxs)(`g`,{className:t?`canvas-ui`:void 0,style:{cursor:t?r?`grabbing`:`grab`:`default`},onPointerDown:e=>{t&&(e.stopPropagation(),e.target.setPointerCapture?.(e.pointerId),i(!0),c(e))},onPointerMove:e=>r&&c(e),onPointerUp:()=>{r&&(i(!1),n({x:0,y:0}))},onPointerCancel:()=>{i(!1),n({x:0,y:0})},children:[(0,m.jsx)(`title`,{children:`按住拖动摇杆，松手弹回中间`}),(0,m.jsx)(`circle`,{cx:il.cx,cy:il.cy,r:il.r,fill:`transparent`}),(0,m.jsx)(`circle`,{cx:il.cx+a*s,cy:il.cy+o*s,r:al,fill:e?.pressed?`#868e96`:`#5c5f66`,stroke:`#adb5bd`})]}),(0,m.jsx)(`text`,{x:`4`,y:tl-4,fontSize:`5`,fill:`var(--ink)`,fontFamily:k,children:e?`X ${a.toFixed(2)} Y ${o.toFixed(2)}`:`摇杆`}),t&&e&&(0,m.jsx)(br,{x:56,y:tl-13,w:26,label:`按下`,title:`把摇杆按下去（SW 接到 GND）`,on:e.pressed,onPress:e=>n({pressed:e})})]})}},sl=5,cl=e=>{let t=Number(e);return Number.isFinite(t)?Math.min(100,Math.max(0,t)):50},ll=e=>sl*cl(e)/100,ul=72,dl=10,U={x:6,y:dl,w:60,h:44},fl=U.y+U.h+26,pl=[`VCC`,`OUT`,`GND`],ml=Object.fromEntries(pl.map((e,t)=>[e,{x:ul/2-9.6+t*9.6,y:2}])),W={cx:ul/2,cy:U.y+26,r:12},hl={geometry:()=>({width:ul,height:fl,pins:ml}),Component({part:e,state:t,setProp:n}){let r=t?.position??cl(e.props.position??50),i=t?t.volts:ll(r),a=(-135+2.7*r)*Math.PI/180,o={x:W.cx+Math.sin(a)*(W.r-2),y:W.cy-Math.cos(a)*(W.r-2)};return(0,m.jsxs)(`div`,{style:{position:`relative`,width:ul,height:fl},children:[(0,m.jsxs)(`svg`,{width:ul,height:fl,viewBox:`0 0 ${ul} ${fl}`,style:{display:`block`},children:[pl.map(e=>(0,m.jsx)(`rect`,{x:ml[e].x-1,y:ml[e].y,width:`2`,height:dl,fill:`var(--lead)`},e)),(0,m.jsx)(`rect`,{x:U.x,y:U.y,width:U.w,height:U.h,rx:`3`,fill:`#1f4e8c`}),pl.map(e=>(0,m.jsx)(`text`,{x:ml[e].x,y:U.y+6,fontSize:`3.1`,fill:`#ffffff`,textAnchor:`middle`,fontFamily:k,children:e},e)),(0,m.jsx)(`circle`,{cx:W.cx,cy:W.cy,r:W.r+2.5,fill:`#6c757d`}),(0,m.jsx)(`circle`,{cx:W.cx,cy:W.cy,r:W.r,fill:`#dee2e6`,stroke:`#adb5bd`}),(0,m.jsx)(`line`,{x1:W.cx,y1:W.cy,x2:o.x,y2:o.y,stroke:`#343a40`,strokeWidth:`2`,strokeLinecap:`round`}),(0,m.jsxs)(`text`,{x:ul/2,y:U.y+U.h+8,fontSize:`6`,fill:`var(--ink)`,textAnchor:`middle`,fontFamily:k,children:[i.toFixed(2),`V · `,Math.round(r),`%`]})]}),(0,m.jsx)(mc,{left:8,top:U.y+U.h+12,width:56,min:0,max:100,step:1,value:Math.round(r),title:`转旋钮：往左电压变小，往右变大`,onChange:e=>n?.(`position`,e)})]})}},gl=110,_l=74,vl=9.6,yl=14,bl=[`VCC`,`GND`,`SO`,`CS`,`SCK`],xl=Object.fromEntries(bl.map((e,t)=>[e,{x:2,y:yl+t*vl}])),Sl={geometry:()=>({width:gl,height:_l,pins:xl}),Component({part:e,state:t,running:n,input:r,openEnv:i,setProp:a}){let o=Number(e.props.temperature??25),s=I(t,`temperature`,o);return(0,m.jsxs)(`div`,{style:{position:`relative`,width:gl,height:_l},children:[(0,m.jsxs)(`svg`,{width:gl,height:_l,viewBox:`0 0 ${gl} ${_l}`,style:{display:`block`},children:[(0,m.jsx)(`rect`,{x:10,y:6,width:58,height:56,rx:`3`,fill:`#5b3fa8`}),bl.map(e=>(0,m.jsxs)(`g`,{children:[(0,m.jsx)(`rect`,{x:xl[e].x-1,y:xl[e].y-1,width:`10`,height:`2`,fill:`var(--lead)`}),(0,m.jsx)(`text`,{x:14,y:xl[e].y+1.6,fontSize:`4.2`,fill:`#efe9ff`,fontFamily:k,children:e})]},e)),(0,m.jsx)(`rect`,{x:34,y:24,width:`14`,height:`10`,rx:`1`,fill:`#1c1c1e`}),(0,m.jsx)(`text`,{x:41,y:44,fontSize:`4.6`,fill:`#efe9ff`,textAnchor:`middle`,fontFamily:k,children:`MAX6675`}),(0,m.jsx)(`rect`,{x:56,y:18,width:`12`,height:`22`,rx:`1`,fill:`#2b8a3e`}),(0,m.jsx)(`path`,{d:`M68 24 C 82 24, 82 30, 104 30 M68 34 C 82 34, 82 30, 104 31`,fill:`none`,stroke:t?.open?`#adb5bd`:`#e8590c`,strokeWidth:`1.4`,strokeDasharray:t?.open?`2 2`:void 0}),(0,m.jsx)(`circle`,{cx:105,cy:30.5,r:`2.4`,fill:`#868e96`}),(0,m.jsxs)(`text`,{x:`2`,y:71,fontSize:`6`,fill:`var(--ink)`,fontFamily:k,children:[(0,m.jsx)(L,{shown:s,open:i}),t?.powered===!1?`未通电`:`${Math.round(s.value)}℃`]}),(0,m.jsx)(Ni,{type:`max6675`,x:72,y:8,state:t,running:n,input:r})]}),(0,m.jsx)(mc,{left:52,top:62,width:54,min:0,max:1023,step:1,value:o,disabled:s.mode===`script`,title:s.mode===`script`?Oi:`热电偶测温端的温度`,onChange:e=>a?.(`temperature`,e)})]})}},Cl=150,wl=80,Tl=9.6,El=14,Dl=[`VCC`,`GND`,`DT`,`SCK`],Ol=Object.fromEntries(Dl.map((e,t)=>[e,{x:2,y:El+t*Tl}])),kl={geometry:()=>({width:Cl,height:wl,pins:Ol}),Component({part:e,state:t,openEnv:n,setProp:r}){let i=Number(e.props.weight??0),a=I(t,`weight`,i),o=a.value,s=o>0?6+Math.min(18,Math.sqrt(o)/3):0;return(0,m.jsxs)(`div`,{style:{position:`relative`,width:Cl,height:wl},children:[(0,m.jsxs)(`svg`,{width:Cl,height:wl,viewBox:`0 0 ${Cl} ${wl}`,style:{display:`block`},children:[(0,m.jsx)(`rect`,{x:10,y:6,width:44,height:50,rx:`3`,fill:`#1f6f43`}),Dl.map(e=>(0,m.jsxs)(`g`,{children:[(0,m.jsx)(`rect`,{x:Ol[e].x-1,y:Ol[e].y-1,width:`10`,height:`2`,fill:`var(--lead)`}),(0,m.jsx)(`text`,{x:14,y:Ol[e].y+1.6,fontSize:`4.2`,fill:`#e9f5ec`,fontFamily:k,children:e})]},e)),(0,m.jsx)(`rect`,{x:30,y:20,width:`16`,height:`12`,rx:`1`,fill:`#1c1c1e`}),(0,m.jsx)(`text`,{x:32,y:48,fontSize:`4.6`,fill:`#e9f5ec`,textAnchor:`middle`,fontFamily:k,children:`HX711`}),[`#e03131`,`#212529`,`#f8f9fa`,`#2f9e44`].map((e,t)=>(0,m.jsx)(`path`,{d:`M54 ${16+t*4} C 66 ${16+t*4}, 66 46, 76 46`,fill:`none`,stroke:e,strokeWidth:`0.9`},e)),(0,m.jsx)(`rect`,{x:74,y:42,width:`60`,height:`9`,rx:`1`,fill:`#ced4da`,stroke:`#868e96`}),(0,m.jsx)(`rect`,{x:98,y:44,width:`10`,height:`5`,fill:`#f1f3f5`,stroke:`#adb5bd`,strokeWidth:`0.4`}),(0,m.jsx)(`rect`,{x:120,y:51,width:`12`,height:`10`,fill:`#868e96`}),(0,m.jsx)(`rect`,{x:84,y:36,width:`48`,height:`4`,rx:`1`,fill:`#adb5bd`}),s>0&&(0,m.jsx)(`rect`,{x:108-s/2,y:36-s,width:s,height:s,rx:`1`,fill:`#e8b86d`,stroke:`#8a6d3b`,strokeWidth:`0.5`}),(0,m.jsxs)(`text`,{x:`2`,y:77,fontSize:`6`,fill:`var(--ink)`,fontFamily:k,children:[(0,m.jsx)(L,{shown:a,open:n}),t?.powered===!1?`未通电`:`${Math.round(o)} g`]})]}),(0,m.jsx)(mc,{left:60,top:68,width:86,min:0,max:5e3,step:10,value:i,disabled:a.mode===`script`,title:a.mode===`script`?Oi:`秤上放了多重的东西（0~5000g）`,onChange:e=>r?.(`weight`,e)})]})}},Al=150,jl=112,Ml={A:{x:2,y:16},B:{x:2,y:25.6}},G={x:46,y:22},Nl=78;function Pl({state:e,running:t,input:n}){let r=e?.opening??0,i=!e||e.closed,a=e?.blocked??!1,o=r*Math.PI/180,s={x:G.x+Nl*Math.cos(o),y:G.y+Nl*Math.sin(o)},c=`M ${G.x+Nl} ${G.y} A ${Nl} ${Nl} 0 0 1 ${G.x} ${G.y+Nl}`,l={x:98,y:92,w:46,h:13};return(0,m.jsxs)(`svg`,{width:Al,height:jl,viewBox:`0 0 ${Al} ${jl}`,style:{display:`block`},children:[Object.entries(Ml).map(([e,t])=>(0,m.jsxs)(`g`,{children:[(0,m.jsx)(`rect`,{x:t.x-1,y:t.y-1,width:`10`,height:`2`,fill:`var(--lead)`}),(0,m.jsx)(`text`,{x:t.x+12,y:t.y+1.8,fontSize:`4.5`,fill:`var(--ink-2)`,fontFamily:k,children:e})]},e)),(0,m.jsx)(`rect`,{x:16,y:4,width:132,height:106,rx:`3`,fill:`var(--chip)`,stroke:`var(--chip-line)`,strokeWidth:`0.6`}),(0,m.jsx)(`rect`,{x:28,y:18,width:G.x-28,height:`6`,fill:`#adb5bd`}),(0,m.jsx)(`rect`,{x:G.x+Nl+2,y:18,width:Al-(G.x+Nl+2)-4,height:`6`,fill:`#adb5bd`}),(0,m.jsx)(`path`,{d:c,fill:`none`,stroke:`#ced4da`,strokeWidth:`0.6`,strokeDasharray:`2 1.5`}),a&&(0,m.jsxs)(`g`,{children:[(0,m.jsx)(`rect`,{x:G.x+49,y:28,width:`22`,height:`16`,rx:`1.5`,fill:`#e8b86d`,stroke:`#8a6d3b`,strokeWidth:`0.6`}),(0,m.jsx)(`text`,{x:G.x+60,y:38.5,fontSize:`5`,fill:`#5c4422`,textAnchor:`middle`,children:`箱子`})]}),(0,m.jsx)(`rect`,{x:G.x+Nl-6,y:12,width:`12`,height:`4`,rx:`1`,fill:i?`#2f9e44`:`#868e96`}),(0,m.jsx)(`text`,{x:G.x+Nl,y:10,fontSize:`4.5`,fill:`var(--ink-2)`,textAnchor:`middle`,children:`门磁`}),(0,m.jsx)(`line`,{x1:G.x,y1:G.y,x2:s.x,y2:s.y,stroke:`#8d5a2b`,strokeWidth:`4`,strokeLinecap:`round`}),(0,m.jsx)(`circle`,{cx:s.x,cy:s.y,r:`2.6`,fill:`#c92a2a`}),(0,m.jsx)(`circle`,{cx:G.x,cy:G.y,r:`2.4`,fill:`#495057`}),(0,m.jsx)(`text`,{x:6,y:90,fontSize:`6`,fill:`var(--ink)`,fontFamily:k,children:i?`门关好了`:`门开着 ${Math.round(r)}°`}),(0,m.jsx)(`text`,{x:6,y:100,fontSize:`4.8`,fill:`var(--ink-2)`,children:e&&!e.linked?`属性里选带动门的舵机`:i?`门磁接通（开不到 5°）`:`门磁断开`}),t&&e&&(0,m.jsxs)(`g`,{className:`canvas-ui`,role:`button`,"aria-pressed":a,style:{cursor:`pointer`},onClick:e=>{e.stopPropagation(),n({blocked:!a})},children:[(0,m.jsx)(`title`,{children:a?`把门口的箱子搬走`:`在门口放一个箱子：门关到一半就被挡住，门磁一直断开`}),(0,m.jsx)(`rect`,{x:l.x,y:l.y,width:l.w,height:l.h,rx:l.h/2,fill:a?`#2563eb`:`var(--chip)`,stroke:a?`#2563eb`:`var(--chip-line)`,strokeWidth:`0.6`}),(0,m.jsx)(`text`,{x:l.x+l.w/2,y:l.y+8.6,fontSize:`5.5`,fill:a?`#ffffff`:`var(--ink)`,textAnchor:`middle`,children:a?`搬走箱子`:`门口放箱子`})]})]})}var Fl={geometry:()=>({width:Al,height:jl,pins:Ml}),Component:({state:e,running:t,input:n})=>(0,m.jsx)(Pl,{state:e,running:t,input:n})},Il=100,Ll=92,Rl=9.6,zl=14,Bl=[`IN1`,`IN2`,`IN3`,`IN4`,`ENA`,`ENB`],Vl=[`OUT1`,`OUT2`,`OUT3`,`OUT4`],Hl={...Object.fromEntries(Bl.map((e,t)=>[e,{x:2,y:zl+t*Rl}])),...Object.fromEntries(Vl.map((e,t)=>[e,{x:98,y:zl+t*Rl}])),GND:{x:44,y:2},VS:{x:56,y:2}},Ul={1:`正转`,"-1":`反转`,0:`刹车`,null:`停`};function Wl({state:e}){return(0,m.jsxs)(`svg`,{width:Il,height:Ll,viewBox:`0 0 ${Il} ${Ll}`,style:{display:`block`},children:[(0,m.jsx)(`rect`,{x:10,y:10,width:80,height:78,rx:`3`,fill:`#b3261e`,stroke:`#7a1712`,strokeWidth:`0.8`}),[0,1,2,3,4,5].map(e=>(0,m.jsx)(`rect`,{x:36+e*5,y:18,width:`3`,height:`26`,fill:`#5f6368`},e)),(0,m.jsx)(`text`,{x:Il/2,y:56,fontSize:`7`,fill:`#ffffff`,textAnchor:`middle`,fontFamily:k,children:`L298N`}),(0,m.jsxs)(`text`,{x:Il/2,y:67,fontSize:`4.6`,fill:`#ffd8d4`,textAnchor:`middle`,children:[`A：`,e?Ul[String(e.a)]:`—`,` · B：`,e?Ul[String(e.b)]:`—`]}),(0,m.jsx)(`circle`,{cx:82,cy:80,r:`2`,fill:e?.powered?`#ff6b6b`:`#5c1410`}),Object.entries(Hl).map(([e,t])=>{let n=t.y===2,r=t.x===98;return(0,m.jsxs)(`g`,{children:[n?(0,m.jsx)(`rect`,{x:t.x-1,y:t.y-1,width:`2`,height:`10`,fill:`var(--lead)`}):(0,m.jsx)(`rect`,{x:r?t.x-9:t.x-1,y:t.y-1,width:`10`,height:`2`,fill:`var(--lead)`}),(0,m.jsx)(`text`,{x:n?t.x:r?t.x-11:t.x+11,y:n?16:t.y+1.7,fontSize:`4.4`,fill:`#ffffff`,textAnchor:n?`middle`:r?`end`:`start`,fontFamily:k,children:e})]},e)})]})}var Gl={geometry:()=>({width:Il,height:Ll,pins:Hl}),Component:({state:e})=>(0,m.jsx)(Wl,{state:e})},Kl={front:10,rear:4,half:5.5},ql={ahead:7,side:1.6},Jl={ahead:9.5,side:4,angle:15*Math.PI/180,range:20},Yl=14,Xl=1.4,Zl=44,Ql=18,$l=Zl+u.w*Xl+6,eu=Ql+u.h*Xl+30,tu={"ML+":{x:2,y:Yl},"ML-":{x:2,y:23.6},"MR+":{x:2,y:33.2},"MR-":{x:2,y:42.8},L:{x:2,y:110},R:{x:2,y:119.6},OL:{x:2,y:129.2},OR:{x:2,y:138.8}},nu=e=>Zl+e*Xl,ru=e=>Ql+e*Xl;function iu({state:e,mapId:t,running:n,input:r}){let i=p(e?.map??t),a=e??i.start,o=a.heading*180/Math.PI,s=e?.sensors,c={x:$l-58,y:eu-20,w:52,h:13};return(0,m.jsxs)(`svg`,{width:$l,height:eu,viewBox:`0 0 ${$l} ${eu}`,style:{display:`block`},children:[Object.entries(tu).map(([e,t])=>(0,m.jsxs)(`g`,{children:[(0,m.jsx)(`rect`,{x:t.x-1,y:t.y-1,width:`10`,height:`2`,fill:`var(--lead)`}),(0,m.jsx)(`text`,{x:t.x+12,y:t.y+1.8,fontSize:`4.5`,fill:`var(--ink-2)`,fontFamily:k,children:e})]},e)),(0,m.jsx)(`rect`,{x:nu(0),y:ru(0),width:u.w*Xl,height:u.h*Xl,fill:`#f8f9fa`,stroke:`#495057`,strokeWidth:`1.5`}),i.line&&(0,m.jsx)(`polyline`,{points:i.line.map(([e,t])=>`${nu(e)},${ru(t)}`).join(` `),fill:`none`,stroke:`#212529`,strokeWidth:2*Xl,strokeLinejoin:`round`}),i.boxes.map(([e,t,n,r],i)=>(0,m.jsx)(`rect`,{x:nu(e),y:ru(t),width:n*Xl,height:r*Xl,fill:`#e8b86d`,stroke:`#8a6d3b`,strokeWidth:`0.6`},i)),e&&e.trail.length>1&&(0,m.jsx)(`polyline`,{points:e.trail.map(([e,t])=>`${nu(e)},${ru(t)}`).join(` `),fill:`none`,stroke:`#4dabf7`,strokeWidth:`0.8`,opacity:`0.7`}),(0,m.jsxs)(`g`,{transform:`translate(${nu(a.x)} ${ru(a.y)}) rotate(${o}) scale(${Xl})`,children:[(0,m.jsx)(`rect`,{x:-2.5,y:-Kl.half-1.6,width:`5`,height:`1.8`,rx:`0.5`,fill:`#343a40`}),(0,m.jsx)(`rect`,{x:-2.5,y:Kl.half-.2,width:`5`,height:`1.8`,rx:`0.5`,fill:`#343a40`}),(0,m.jsx)(`rect`,{x:-Kl.rear,y:-Kl.half,width:Kl.front+Kl.rear,height:Kl.half*2,rx:`1.5`,fill:`#1c7ed6`,stroke:`#0b4f8a`,strokeWidth:`0.3`}),(0,m.jsx)(`rect`,{x:Kl.front-3,y:-Kl.half+1,width:`2`,height:Kl.half*2-2,fill:`#a5d8ff`}),(0,m.jsx)(`circle`,{cx:ql.ahead,cy:-ql.side,r:`0.8`,fill:s?.L?`#fa5252`:`#dee2e6`}),(0,m.jsx)(`circle`,{cx:ql.ahead,cy:ql.side,r:`0.8`,fill:s?.R?`#fa5252`:`#dee2e6`}),[`OL`,`OR`].map(e=>{let t=e===`OL`?-Jl.side:Jl.side,n=e===`OL`?-Jl.angle:Jl.angle,r=s?!s[e]:!1;return(0,m.jsxs)(`g`,{children:[r&&(0,m.jsx)(`line`,{x1:Jl.ahead,y1:t,x2:Jl.ahead+Jl.range*Math.cos(n),y2:t+Jl.range*Math.sin(n),stroke:`#fa5252`,strokeWidth:`0.4`,strokeDasharray:`1 0.8`}),(0,m.jsx)(`rect`,{x:Jl.ahead-.8,y:t-.8,width:`1.6`,height:`1.6`,fill:r?`#fa5252`:`#40c057`})]},e)})]}),(0,m.jsx)(`text`,{x:Zl,y:eu-10,fontSize:`5.2`,fill:`var(--ink)`,fontFamily:k,children:e?`左轮 ${Math.round(e.left*100)}% 右轮 ${Math.round(e.right*100)}%${e.bumps?` · 撞了 ${e.bumps} 次`:``}`:i.label}),n&&e&&(0,m.jsxs)(`g`,{className:`canvas-ui`,role:`button`,style:{cursor:`pointer`},onClick:e=>{e.stopPropagation(),r({reset:!0})},children:[(0,m.jsx)(`title`,{children:`把小车放回起点`}),(0,m.jsx)(`rect`,{x:c.x,y:c.y,width:c.w,height:c.h,rx:c.h/2,fill:`var(--chip)`,stroke:`var(--chip-line)`,strokeWidth:`0.6`}),(0,m.jsx)(`text`,{x:c.x+c.w/2,y:c.y+8.8,fontSize:`5.5`,fill:`var(--ink)`,textAnchor:`middle`,children:`放回起点`})]})]})}var au={geometry:()=>({width:$l,height:eu,pins:tu}),Component:({part:e,state:t,running:n,input:r})=>(0,m.jsx)(iu,{state:t,mapId:e.props.map,running:n,input:r})},ou=84,su=64,cu=9.6,lu=14,uu=[`A-IA`,`A-IB`,`B-IA`,`B-IB`],du=[`OA1`,`OA2`,`OB1`,`OB2`],fu={...Object.fromEntries(uu.map((e,t)=>[e,{x:2,y:lu+t*cu}])),...Object.fromEntries(du.map((e,t)=>[e,{x:82,y:lu+t*cu}])),GND:{x:36,y:2},VCC:{x:48,y:2}},pu={1:`正转`,"-1":`反转`,0:`停`},mu={geometry:()=>({width:ou,height:su,pins:fu}),Component:({state:e})=>(0,m.jsxs)(`svg`,{width:ou,height:su,viewBox:`0 0 ${ou} ${su}`,style:{display:`block`},children:[(0,m.jsx)(`rect`,{x:10,y:10,width:64,height:50,rx:`3`,fill:`#212529`}),(0,m.jsx)(`rect`,{x:30,y:22,width:`10`,height:`8`,fill:`#495057`}),(0,m.jsx)(`rect`,{x:44,y:22,width:`10`,height:`8`,fill:`#495057`}),(0,m.jsx)(`text`,{x:ou/2,y:42,fontSize:`5.5`,fill:`#ffffff`,textAnchor:`middle`,fontFamily:k,children:`L9110`}),(0,m.jsxs)(`text`,{x:ou/2,y:51,fontSize:`4.2`,fill:`#ced4da`,textAnchor:`middle`,children:[`A:`,e?pu[String(e.a)]:`—`,` B:`,e?pu[String(e.b)]:`—`]}),Object.entries(fu).map(([e,t])=>{let n=t.y===2,r=t.x===82;return(0,m.jsxs)(`g`,{children:[n?(0,m.jsx)(`rect`,{x:t.x-1,y:t.y-1,width:`2`,height:`10`,fill:`var(--lead)`}):(0,m.jsx)(`rect`,{x:r?t.x-9:t.x-1,y:t.y-1,width:`10`,height:`2`,fill:`var(--lead)`}),(0,m.jsx)(`text`,{x:n?t.x:r?t.x-11:t.x+11,y:n?16:t.y+1.7,fontSize:`3.8`,fill:`#ffffff`,textAnchor:n?`middle`:r?`end`:`start`,fontFamily:k,children:e})]},e)})]})},hu=9.6,gu=14,_u=[`VCC`,`GND`,`A`,`B`,`M+`,`M-`],vu=Object.fromEntries(_u.map((e,t)=>[e,{x:2,y:gu+t*hu}])),yu=150,bu=gu+_u.length*hu+8,xu={geometry:()=>({width:yu,height:bu,pins:vu}),Component({state:e}){let t=(0,h.useRef)(0);e&&(t.current=e.count/(4*e.ppr)*360%360);let n=bu/2;return(0,m.jsxs)(`svg`,{width:yu,height:bu,viewBox:`0 0 ${yu} ${bu}`,style:{display:`block`},children:[_u.map(e=>(0,m.jsxs)(`g`,{children:[(0,m.jsx)(`rect`,{x:vu[e].x-1,y:vu[e].y-1,width:`10`,height:`2`,fill:`var(--lead)`}),(0,m.jsx)(`text`,{x:13,y:vu[e].y+1.6,fontSize:`3.8`,fill:`var(--ink-2)`,fontFamily:k,children:e})]},e)),(0,m.jsx)(`rect`,{x:28,y:n-22,width:`10`,height:`44`,rx:`1`,fill:`#2b8a3e`}),(0,m.jsx)(`rect`,{x:38,y:n-14,width:`6`,height:`28`,fill:`#495057`}),(0,m.jsx)(`rect`,{x:44,y:n-18,width:`50`,height:`36`,rx:`4`,fill:`#ced4da`,stroke:`#868e96`}),(0,m.jsx)(`rect`,{x:94,y:n-20,width:`30`,height:`40`,rx:`2`,fill:`#e9c46a`,stroke:`#b08d2c`}),(0,m.jsx)(`rect`,{x:124,y:n-3,width:`16`,height:`6`,fill:`#adb5bd`}),(0,m.jsxs)(`g`,{transform:`translate(132 ${n}) rotate(${t.current})`,children:[(0,m.jsx)(`circle`,{r:`7`,fill:`none`,stroke:`#868e96`,strokeWidth:`0.8`}),(0,m.jsx)(`rect`,{x:`-1`,y:`-7`,width:`2`,height:`7`,fill:`#e03131`})]}),(0,m.jsx)(`text`,{x:69,y:n+2,fontSize:`5`,fill:`#212529`,textAnchor:`middle`,fontFamily:k,children:e?`${Math.round(e.meanRpm)} rpm`:`MOTOR`}),(0,m.jsx)(`text`,{x:69,y:n+10,fontSize:`4`,fill:`#495057`,textAnchor:`middle`,fontFamily:k,children:e?`计数 ${e.count}`:`AB 编码器`})]})}},Su=16e3,Cu=.25,wu=.06,Tu=.3,Eu=class{next=0;play(e,t){let n=mi();if(!n||e.length===0||!(t>0))return;let r=n.ctx,i=r.currentTime;if(this.next>i+Tu)return;this.next<i+.01&&(this.next=i+wu);let a=r.createBuffer(1,e.length,Su),o=a.getChannelData(0);for(let n=0;n<e.length;n++)o[n]=e[n]*t*Cu;let s=r.createBufferSource();s.buffer=a,s.connect(n.out),s.start(this.next),this.next+=e.length/Su}stop(){this.next=0}},Du=9.6,Ou=14,ku=[`VCC`,`GND`,`IN`],Au=Object.fromEntries(ku.map((e,t)=>[e,{x:2,y:Ou+t*Du}])),ju=110,Mu=70,Nu={geometry:()=>({width:ju,height:Mu,pins:Au}),Component({state:e,running:t}){let n=vi(),r=(0,h.useRef)(null);(0,h.useEffect)(()=>{let e=pi();return r.current=new Eu,()=>{r.current?.stop(),r.current=null,e()}},[]),(0,h.useEffect)(()=>{!t||n||!e?.powered?r.current?.stop():r.current?.play(e.samples,e.volume/100)},[e,t,n]);let i=t&&e?.powered?e.level:0;return(0,m.jsxs)(`svg`,{width:ju,height:Mu,viewBox:`0 0 ${ju} ${Mu}`,style:{display:`block`},children:[(0,m.jsx)(`rect`,{x:10,y:4,width:34,height:40,rx:`2`,fill:`#2b8a3e`}),ku.map(e=>(0,m.jsxs)(`g`,{children:[(0,m.jsx)(`rect`,{x:Au[e].x-1,y:Au[e].y-1,width:`10`,height:`2`,fill:`var(--lead)`}),(0,m.jsx)(`text`,{x:13,y:Au[e].y+1.6,fontSize:`4`,fill:`#ffffff`,fontFamily:k,children:e})]},e)),(0,m.jsx)(`rect`,{x:26,y:30,width:`12`,height:`8`,fill:`#1c1c1e`}),(0,m.jsx)(`text`,{x:32,y:36,fontSize:`3.2`,fill:`#ced4da`,textAnchor:`middle`,fontFamily:k,children:`LM386`}),(0,m.jsx)(`path`,{d:`M44 20 C 52 20, 52 28, 58 28`,fill:`none`,stroke:`#e03131`,strokeWidth:`1`}),(0,m.jsx)(`path`,{d:`M44 24 C 52 24, 52 32, 58 32`,fill:`none`,stroke:`#212529`,strokeWidth:`1`}),(0,m.jsx)(`circle`,{cx:80,cy:32,r:24,fill:`#343a40`,stroke:`#868e96`}),(0,m.jsx)(`circle`,{cx:80,cy:32,r:18+i*2,fill:`#495057`}),(0,m.jsx)(`circle`,{cx:80,cy:32,r:6,fill:`#212529`}),i>.05&&(0,m.jsx)(`path`,{d:`M106 20 A 14 14 0 0 1 106 44 M101 24 A 9 9 0 0 1 101 40`,fill:`none`,stroke:`#ffd43b`,strokeWidth:`1`,opacity:Math.min(1,i*2)}),(0,m.jsxs)(`text`,{x:4,y:66,fontSize:`4.6`,fill:`var(--ink-2)`,children:[`音量 `,e?.volume??60,`%`]})]})}},Pu=[[0,3],[5,3.4],[10,3.55],[20,3.68],[40,3.76],[60,3.85],[80,3.98],[90,4.06],[100,4.2]];function Fu(e){let t=Math.min(100,Math.max(0,e));for(let e=1;e<Pu.length;e++){let[n,r]=Pu[e];if(t<=n){let[i,a]=Pu[e-1];return a+(r-a)*(t-i)/(n-i)}}return Pu[Pu.length-1][1]}var Iu=84,Lu=80,Ru={AO:{x:37.2,y:2},GND:{x:46.8,y:2}};function zu({state:e,running:t,start:n,input:r}){let i=e?.charge??n,a=e?.volts??Fu(n),o=i<10?`#e5484d`:i<25?`#f08c00`:`#2f9e44`;return(0,m.jsxs)(`div`,{style:{position:`relative`,width:Iu,height:Lu},children:[(0,m.jsxs)(`svg`,{width:Iu,height:Lu,viewBox:`0 0 ${Iu} ${Lu}`,style:{display:`block`},children:[Object.entries(Ru).map(([e,t])=>(0,m.jsxs)(`g`,{children:[(0,m.jsx)(`rect`,{x:t.x-1,y:t.y,width:`2`,height:`10`,fill:`var(--lead)`}),(0,m.jsx)(`text`,{x:t.x,y:`17`,fontSize:`4.5`,fill:`var(--ink-2)`,textAnchor:`middle`,fontFamily:k,children:e})]},e)),(0,m.jsx)(`rect`,{x:`10`,y:`20`,width:`62`,height:`26`,rx:`5`,fill:`#2b4a7a`,stroke:`#1b2f4f`}),(0,m.jsx)(`rect`,{x:`72`,y:`28`,width:`4`,height:`10`,rx:`1`,fill:`#9aa1ab`}),(0,m.jsx)(`rect`,{x:`14`,y:`24`,width:i/100*54,height:`18`,rx:`2`,fill:o}),(0,m.jsx)(`text`,{x:`41`,y:`36`,fontSize:`6`,fill:`#fff`,textAnchor:`middle`,fontFamily:k,children:`18650 Li-ion`}),(0,m.jsxs)(`text`,{x:Iu/2,y:`56`,fontSize:`6`,fill:`var(--ink)`,textAnchor:`middle`,fontFamily:k,children:[a.toFixed(2),`V · `,Math.round(i),`%`]}),e&&(0,m.jsxs)(`text`,{x:Iu/2,y:`64`,fontSize:`4.8`,fill:`var(--ink-2)`,textAnchor:`middle`,children:[`用电 `,e.load,` mA`]})]}),(0,m.jsx)(mc,{left:10,top:67,width:64,min:0,max:100,step:1,value:Math.round(i),title:t?`把电量改成多少（像换了一块电池、充了电）`:`开始时还剩多少电`,onChange:e=>r({charge:e})})]})}var Bu={geometry:()=>({width:Iu,height:Lu,pins:Ru}),Component:({part:e,state:t,running:n,input:r,setProp:i})=>(0,m.jsx)(zu,{state:t,running:n,start:Number(e.props.charge)||0,input:e=>n?r(e):i?.(`charge`,e.charge)})},Vu=110,Hu=230,Uu={GND:{x:2,y:24},MAG:{x:2,y:33.6},G1:{x:2,y:129.6},G2:{x:2,y:139.2}},K={x:70,top:18,bottom:216},Wu=(K.bottom-K.top-20)/115;function Gu({state:e,h1:t,h2:n,ball:r,g:i}){let a=e=>K.top+12+e*Wu,o=a(e?.y??0),s=e?.held??!0,c=(e,t,n)=>(0,m.jsxs)(`g`,{children:[(0,m.jsx)(`rect`,{x:K.x-14,y:a(e)-3,width:`6`,height:`6`,fill:t?`#e5484d`:`#2b2d31`}),(0,m.jsx)(`rect`,{x:K.x+8,y:a(e)-3,width:`6`,height:`6`,fill:`#2b2d31`}),(0,m.jsx)(`line`,{x1:K.x-8,y1:a(e),x2:K.x+8,y2:a(e),stroke:t?`#e5484d`:`#e5484d55`,strokeWidth:`0.6`,strokeDasharray:`1 1`}),(0,m.jsxs)(`text`,{x:K.x+17,y:a(e)+2,fontSize:`5`,fill:`var(--ink-2)`,fontFamily:k,children:[n,` `,e,`cm`]})]});return(0,m.jsxs)(`svg`,{width:Vu,height:Hu,viewBox:`0 0 ${Vu} ${Hu}`,style:{display:`block`},children:[Object.entries(Uu).map(([e,t])=>(0,m.jsxs)(`g`,{children:[(0,m.jsx)(`rect`,{x:t.x-1,y:t.y-1,width:`10`,height:`2`,fill:`var(--lead)`}),(0,m.jsx)(`text`,{x:t.x+12,y:t.y+1.8,fontSize:`4.5`,fill:`var(--ink-2)`,fontFamily:k,children:e})]},e)),(0,m.jsx)(`rect`,{x:`8`,y:`14`,width:`26`,height:`140`,rx:`2`,fill:`none`,stroke:`#c8cdd4`,strokeDasharray:`2 2`}),(0,m.jsx)(`rect`,{x:K.x+22,y:K.top-6,width:`4`,height:K.bottom-K.top+8,fill:`#9aa1ab`}),(0,m.jsx)(`rect`,{x:K.x-10,y:K.top-6,width:`36`,height:`6`,rx:`1`,fill:`#9aa1ab`}),(0,m.jsx)(`rect`,{x:K.x-6,y:K.top,width:`12`,height:`8`,rx:`1.5`,fill:s?`#b85c00`:`#5b6068`}),c(t,e?.blocked[0]??!1,`G1`),c(n,e?.blocked[1]??!1,`G2`),(0,m.jsx)(`rect`,{x:K.x-18,y:K.bottom,width:`44`,height:`4`,fill:`#5b6068`}),(0,m.jsx)(`circle`,{cx:K.x,cy:o,r:Math.max(1.5,r/2*Wu),fill:`#c3c7cc`,stroke:`#5b6068`,strokeWidth:`0.6`}),(0,m.jsxs)(`text`,{x:Vu/2,y:228,fontSize:`5`,fill:`var(--ink-2)`,textAnchor:`middle`,children:[`g = `,i,` m/s²`,s?`　电磁铁吸着`:`　落下`]})]})}var Ku={geometry:()=>({width:Vu,height:Hu,pins:Uu}),Component:({part:e,state:t})=>(0,m.jsx)(Gu,{state:t,h1:Number(e.props.h1)||20,h2:Number(e.props.h2)||80,ball:Number(e.props.ball)||2,g:Number(e.props.g)||9.8})},qu=[1,2,3,4],Ju=A({name:`74HC02`,pins:l.pins.map(({name:e})=>({name:e})),marks:e=>{if(!e.powered)return{};let t={};return qu.forEach((n,r)=>t[`${n}Y`]=e.y>>r&1?`high`:`low`),t},status:e=>e?e.powered?`1Y~4Y ${qu.map((t,n)=>e.y>>n&1).join(``)}`:`未通电`:``}),Yu=null;function Xu(e){let t=Math.round(e.sampleRate*.012),n=e.createBuffer(1,t,e.sampleRate),r=n.getChannelData(0),i=e.sampleRate*.0015;for(let e=0;e<t;e++)r[e]=(Math.random()*2-1)*Math.exp(-e/i);return n}function Zu(e=.2){let t=mi();if(!t)return;let n=t.ctx;Yu?.sampleRate!==n.sampleRate&&(Yu=Xu(n));let r=n.createBufferSource();r.buffer=Yu;let i=n.createGain();i.gain.value=e,r.connect(i),i.connect(t.out),r.onended=()=>{r.disconnect(),i.disconnect()},r.start()}var Qu=96,$u=82,ed=80,td={"+":{x:14.4,y:ed},"-":{x:28.8,y:ed},NC:{x:52.8,y:ed},COM:{x:67.2,y:ed},NO:{x:81.6,y:ed}},nd=64,rd=60,id={x:td.COM.x,y:46},ad=24,od={x:58,y:ad},sd={x:76.4,y:ad},cd=(e,t)=>e!==void 0&&t!==void 0&&t>e;function ld({muted:e,onToggle:t}){return(0,m.jsxs)(`svg`,{className:`canvas-ui`,width:`14`,height:`14`,viewBox:`0 0 14 14`,style:{position:`absolute`,right:0,top:0,cursor:`pointer`},onClick:t,children:[(0,m.jsx)(`title`,{children:e?`已静音，点击恢复声音`:`点击静音`}),(0,m.jsx)(`circle`,{cx:`7`,cy:`7`,r:`6.5`,fill:`var(--chip)`,stroke:e?`#d92d20`:`var(--chip-line)`}),(0,m.jsx)(`path`,{d:`M2.8 5.6h1.8l2.6-2.2v7.2L4.6 8.4H2.8z`,fill:e?`#d92d20`:`var(--ink-2)`}),e?(0,m.jsx)(`path`,{d:`M8.8 5.3l3 3.4M11.8 5.3l-3 3.4`,stroke:`#d92d20`,strokeWidth:`1.1`,strokeLinecap:`round`}):(0,m.jsx)(`path`,{d:`M8.9 5.2a2.6 2.6 0 0 1 0 3.6M10.4 3.8a4.6 4.6 0 0 1 0 6.4`,fill:`none`,stroke:`var(--ink-2)`,strokeWidth:`1`,strokeLinecap:`round`})]})}function ud({state:e,running:t}){let[n,r]=(0,h.useState)(!1),i=(0,h.useRef)(void 0);(0,h.useEffect)(()=>pi(),[]);let a=e?.clicks;(0,h.useEffect)(()=>{let e=i.current;i.current=a,t&&!n&&cd(e,a)&&Zu()},[a,t,n]);let o=e?.closed===!0,s=e?.energized===!0,c=o?sd:od,l={x:c.x+(o?-.6:.6),y:c.y+1.4},u={x:(id.x+l.x)/2,y:(id.y+l.y)/2},d={stroke:`#4b5058`,strokeWidth:1,fill:`none`};return(0,m.jsxs)(`div`,{style:{position:`relative`,width:Qu,height:$u},children:[(0,m.jsxs)(`svg`,{width:Qu,height:$u,viewBox:`0 0 ${Qu} ${$u}`,style:{display:`block`},children:[Object.entries(td).map(([e,t])=>(0,m.jsx)(`rect`,{x:t.x-1,y:nd,width:`2`,height:16,fill:`var(--lead)`},e)),(0,m.jsx)(`rect`,{x:`4`,y:`4`,width:`88`,height:60,rx:`3`,fill:`#1f5fae`,stroke:`#174a8a`}),(0,m.jsx)(`text`,{x:`9`,y:`11.8`,fontSize:`6`,fill:`#ffffff`,fontFamily:k,fontWeight:`600`,children:`RELAY`}),(0,m.jsx)(`circle`,{cx:`38`,cy:`9.8`,r:`2`,fill:o?`#51cf66`:`#5c7cab`}),(0,m.jsx)(`text`,{x:`42`,y:`11.8`,fontSize:`6`,fill:o?`#d3f9d8`:`#c5d3e8`,children:o?`吸合`:`释放`}),(0,m.jsx)(`rect`,{x:`8`,y:`15`,width:`80`,height:45,rx:`2`,fill:`#eef2f7`}),(0,m.jsx)(`path`,{d:`M${td[`+`].x} ${rd}V44M${td[`-`].x} ${rd}V44`,...d}),(0,m.jsx)(`rect`,{x:`11`,y:`22`,width:`21`,height:`22`,fill:s?`#ffd8a8`:`#ffffff`,stroke:s?`#e8590c`:`#4b5058`,strokeWidth:`1`}),(0,m.jsx)(`path`,{d:`M11 44L32 22`,stroke:s?`#e8590c`:`#4b5058`,strokeWidth:`0.8`}),(0,m.jsx)(`path`,{d:`M${td.NC.x} ${rd}V${ad}H${od.x}`,...d}),(0,m.jsx)(`path`,{d:`M${td.NO.x} ${rd}V${ad}H${sd.x}`,...d}),(0,m.jsx)(`path`,{d:`M${id.x} ${rd}V${id.y}`,...d}),(0,m.jsx)(`path`,{d:`M32 33L${u.x.toFixed(2)} ${u.y.toFixed(2)}`,stroke:`#8e8e93`,strokeWidth:`0.7`,strokeDasharray:`1.6 1.2`}),(0,m.jsx)(`path`,{d:`M${id.x} ${id.y}L${l.x} ${l.y}`,stroke:o?`#2f9e44`:`#1f2328`,strokeWidth:`1.6`,strokeLinecap:`round`}),(0,m.jsx)(`circle`,{cx:id.x,cy:id.y,r:`1.6`,fill:`#1f2328`}),(0,m.jsx)(`circle`,{cx:od.x,cy:od.y,r:`1.1`,fill:`#4b5058`}),(0,m.jsx)(`circle`,{cx:sd.x,cy:sd.y,r:`1.1`,fill:`#4b5058`}),Object.entries(td).map(([e,t])=>(0,m.jsx)(`text`,{x:t.x-1.8,y:58,fontSize:`4.5`,fill:`#4b5058`,textAnchor:`end`,fontFamily:k,children:e},e))]}),(0,m.jsx)(ld,{muted:n,onToggle:()=>r(e=>!e)})]})}var dd={geometry:()=>({width:Qu,height:$u,pins:td}),Component:({state:e,running:t})=>(0,m.jsx)(ud,{state:e,running:t})},fd=On([{name:`GND`},{name:`TRIG`,nc:!0},{name:`OUT`},{name:`RST`,nc:!0},{name:`CV`,nc:!0},{name:`THR`,nc:!0},{name:`DIS`,nc:!0},{name:`VCC`}]),pd=fd.width,q={x:9,y:fd.height+7.5,r:5.5},md={x:18,w:pd-21},hd=fd.height+25,gd=Math.log(f/100),_d=e=>Math.min(1,Math.max(0,Math.log(e/100)/gd)),vd=e=>Number((100*Math.exp(Math.min(1,Math.max(0,e))*gd)).toPrecision(3));function yd(e){return e<1e3?`${Math.round(e)} Hz`:`${(e/1e3).toFixed(e<1e4?2:1)} kHz`}function bd(e){let t=Number(e.freq??1e3);return Number.isFinite(t)?Math.round(Math.min(f,Math.max(100,t))):c}function xd({part:e,state:t,input:n}){let[r,i]=(0,h.useState)(null),a=bd(e.props),o=r&&r.base===a?r.freq:null;(0,h.useEffect)(()=>{t&&o!==null&&t.freq!==o&&n({freq:o})},[t,o,n]);let s=o??t?.freq??a,c=_d(s),l=t?.powered===!0;return(0,m.jsxs)(`div`,{style:{position:`relative`,width:pd,height:hd},children:[(0,m.jsxs)(`svg`,{width:pd,height:hd,viewBox:`0 0 ${pd} ${hd}`,style:{display:`block`},children:[(0,m.jsx)(jn,{layout:fd,name:`NE555`}),(0,m.jsxs)(`g`,{children:[(0,m.jsx)(`title`,{children:`频率旋钮`}),(0,m.jsx)(`rect`,{x:q.x-q.r-1,y:q.y-q.r-1,width:q.r*2+2,height:q.r*2+2,rx:`1.5`,fill:`#2f6fd1`}),(0,m.jsx)(`circle`,{cx:q.x,cy:q.y,r:q.r-.8,fill:`#f1f3f5`,stroke:`#9aa1ab`,strokeWidth:`0.6`}),(0,m.jsx)(`path`,{d:`M${q.x} ${q.y}v${-(q.r-1.6)}`,stroke:`#1f2328`,strokeWidth:`1.2`,strokeLinecap:`round`,transform:`rotate(${(c*270-135).toFixed(1)} ${q.x} ${q.y})`})]}),(0,m.jsx)(`text`,{x:pd/2,y:hd-3,fontSize:`5.5`,fill:l?`var(--ink)`:`var(--ink-3)`,textAnchor:`middle`,children:t&&!l?`未通电 · ${yd(s)}`:`方波 ${yd(s)}`})]}),(0,m.jsx)(`input`,{className:`canvas-ui`,type:`range`,min:`0`,max:`1000`,step:`1`,title:`输出频率 ${yd(s)}（${yd(100)}~${yd(f)}）`,value:Math.round(c*1e3),onChange:e=>i({base:a,freq:vd(Number(e.target.value)/1e3)}),style:{position:`absolute`,left:md.x,top:q.y-4,width:md.w*2,height:16,margin:0,transform:`scale(0.5)`,transformOrigin:`0 0`,accentColor:`#2f6fd1`,cursor:`pointer`}})]})}var Sd={geometry:()=>({width:pd,height:hd,pins:fd.pins}),Component:({part:e,state:t,input:n})=>(0,m.jsx)(xd,{part:e,state:t,input:n})},Cd=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},wd=class extends b{constructor(){super(...arguments),this.ledRed=0,this.ledGreen=0,this.ledBlue=0,this.pinInfo=[{name:`R`,x:8.5,y:44,signals:[]},{name:`COM`,x:18,y:54,signals:[]},{name:`G`,x:26.4,y:44,signals:[]},{name:`B`,x:35.7,y:44,signals:[]}]}render(){let{ledRed:e,ledGreen:t,ledBlue:n}=this,r=Math.max(e,t,n),i=r?.2+r*.6:0;return _`
      <svg
        width="42.129"
        height="72.582"
        version="1.2"
        viewBox="-17 -10 37.3425 57.5115"
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- LED Legs -->
        <g fill="none" stroke="#9D9999" stroke-linecap="round" stroke-width="1.5px">
          <path d="m4.1 15.334 3.0611 9.971" />
          <path d="m8 14.4 5.9987 4.0518 1.1777 6.5679" stroke-linejoin="round" />
          <path d="m-4.3 14.184-5.0755 5.6592-0.10206 6.1694" stroke-linejoin="round" />
          <path d="m-1.1 15.607-0.33725 18.4" />
        </g>

        <!-- LED Body -->
        <path
          d="m8.3435 5.65v-5.9126c0-3.9132-3.168-7.0884-7.0855-7.0884-3.9125 0-7.0877 3.1694-7.0877 7.0884v13.649c1.4738 1.651 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8594v-1.5235c-7.4e-4 -1.1426-0.47444-2.2039-1.283-3.1061z"
          opacity=".3"
        />
        <path
          d="m8.3435 5.65v-5.9126c0-3.9132-3.168-7.0884-7.0855-7.0884-3.9125 0-7.0877 3.1694-7.0877 7.0884v13.649c1.4738 1.651 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8594v-1.5235c-7.4e-4 -1.1426-0.47444-2.2039-1.283-3.1061z"
          fill="#e6e6e6"
          opacity=".5"
        />
        <path
          d="m8.3435 5.65v3.1054c0 2.7389-3.1658 4.9651-7.0855 4.9651-3.9125 2e-5 -7.0877-2.219-7.0877-4.9651v4.6296c1.4738 1.6517 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8586l-4e-5 -1.5235c-7e-4 -1.1419-0.4744-2.2032-1.283-3.1054z"
          fill="#d1d1d1"
          opacity=".9"
        />
        <g transform="translate(-5.8295 -7.351)">
          <path
            d="m14.173 13.001v3.1054c0 2.7389-3.1658 4.9651-7.0855 4.9651-3.9125 2e-5 -7.0877-2.219-7.0877-4.9651v4.6296c1.4738 1.6517 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8586l-4e-5 -1.5235c-7e-4 -1.1419-0.4744-2.2032-1.283-3.1054z"
            opacity=".7"
          />
          <path
            d="m14.173 13.001v3.1054c0 2.7389-3.1658 4.9651-7.0855 4.9651-3.9125 2e-5 -7.0877-2.219-7.0877-4.9651v3.1054c1.4738 1.6502 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8586-7.4e-4 -1.1412-0.47444-2.2025-1.283-3.1047z"
            opacity=".25"
          />
          <ellipse cx="7.0877" cy="16.106" rx="7.087" ry="4.9608" opacity=".25" />
        </g>
        <polygon
          transform="translate(-5.8295 -7.351)"
          points="3.1961 13.095 6.0156 13.095 10.012 8.8049 3.407 8.8049 2.2032 9.648 2.2032 16.107 3.1961 16.107"
          fill="#666"
        />
        <polygon
          transform="translate(-5.8295 -7.351)"
          points="11.06 13.095 11.06 16.107 11.974 16.107 11.974 8.5241 10.778 8.5241 11.215 9.0338 7.4117 13.095"
          fill="#666"
        />
        <path
          d="m8.3435 5.65v-5.9126c0-3.9132-3.168-7.0884-7.0855-7.0884-3.9125 0-7.0877 3.1694-7.0877 7.0884v13.649c1.4738 1.651 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8594v-1.5235c-7.4e-4 -1.1426-0.47444-2.2039-1.283-3.1061z"
          fill="white"
          opacity=".65"
        />
        <g transform="translate(-5.8295 -7.351)" fill="#fff">
          <path
            d="m10.388 3.7541 1.4364-0.2736c-0.84168-1.1318-2.0822-1.9577-3.5417-2.2385l0.25416 1.0807c0.76388 0.27072 1.4068 0.78048 1.8511 1.4314z"
            opacity=".5"
          />
          <path
            d="m0.76824 19.926v1.5199c0.64872 0.5292 1.4335 0.97632 2.3076 1.3169v-1.525c-0.8784-0.33624-1.6567-0.78194-2.3076-1.3118z"
            opacity=".5"
          />
          <path
            d="m11.073 20.21c-0.2556 0.1224-0.52992 0.22968-0.80568 0.32976-0.05832 0.01944-0.11736 0.04032-0.17784 0.05832-0.56376 0.17928-1.1614 0.31896-1.795 0.39456-0.07488 0.0094-0.1512 0.01872-0.22464 0.01944-0.3204 0.03024-0.64368 0.05832-0.97056 0.05832-0.14832 0-0.30744-0.01512-0.4716-0.02376-1.2002-0.05688-2.3306-0.31464-3.2976-0.73944l-2e-5 -8.3895v-4.8254c0-1.471 0.84816-2.7295 2.0736-3.3494l-0.02232-0.05328-1.2478-1.512c-1.6697 1.003-2.79 2.8224-2.79 4.9118v11.905c-0.04968-0.04968-0.30816-0.30888-0.48024-0.52992l-0.30744 0.6876c1.4011 1.4818 3.8088 2.4617 6.5426 2.4617 1.6798 0 3.2371-0.37368 4.5115-1.0022l-0.52704-0.40896-0.01006 0.0072z"
            opacity=".5"
          />
        </g>

        <filter id="ledFilter" x="-0.8" y="-0.8" height="5.2" width="5.8">
          <feGaussianBlur stdDeviation="4" />
        </filter>
        <filter id="ledFilterRed" x="-0.8" y="-0.8" height="5.2" width="5.8">
          <feGaussianBlur stdDeviation="${e*3}" />
        </filter>
        <filter id="ledFilterGreen" x="-0.8" y="-0.8" height="5.2" width="5.8">
          <feGaussianBlur stdDeviation="${t*3}" />
        </filter>
        <filter id="ledFilterBlue" x="-0.8" y="-0.8" height="5.2" width="5.8">
          <feGaussianBlur stdDeviation="${n*3}" />
        </filter>

        <circle
          cx="1.7"
          cy="3"
          r="${e*5+2}"
          fill="rgb(255, 0, 0)"
          opacity="${Math.min(e*20,.3)}"
          filter="url(#ledFilterRed)"
        />
        <circle
          cx="2.7"
          cy="5"
          r="${t*5+2}"
          fill="rgb(0, 255, 0)"
          opacity="${Math.min(t*20,.3)}"
          filter="url(#ledFilterGreen)"
        />
        <circle
          cx="0.7"
          cy="5"
          r="${n*5+2}"
          fill="rgb(1,85,253)"
          opacity="${Math.min(n*20,.3)}"
          filter="url(#ledFilterBlue)"
        />

        <circle
          cx="1.7"
          cy="4"
          r="10"
          fill="rgb(${e*255}, ${t*255+n*90}, ${n*255})"
          filter="url(#ledFilter)"
          opacity="${i}"
        />

        <!-- Grey hollow around the LED -->
        <circle
          cx="1.7"
          cy="4"
          r="13"
          stroke="#666"
          stroke-width="1"
          fill="none"
          filter="url(#ledFilter)"
          opacity="${i}"
        />
      </svg>
    `}};Cd([S()],wd.prototype,`ledRed`,void 0),Cd([S()],wd.prototype,`ledGreen`,void 0),Cd([S()],wd.prototype,`ledBlue`,void 0),wd=Cd([x(`wokwi-rgb-led`)],wd);var Td={geometry:()=>({width:42,height:73,pins:w(`wokwi-rgb-led`,{R:`R`,G:`G`,B:`B`,COM:`COM`})}),Component({state:e,running:t}){let[n=0,r=0,i=0]=E(e,e=>[e.r,e.g,e.b],t);return(0,m.jsx)(C,{tag:`wokwi-rgb-led`,props:{ledRed:D(n),ledGreen:D(r),ledBlue:D(i)}})}},Ed=12,Dd=8,Od=117,kd=117,Ad={w:109,h:109},jd=[0,1,2,3,4,5,6,7],Md=e=>10+e*Ed,Nd=e=>10+e*Ed,Pd=Object.fromEntries([...jd.map(e=>[`R${e+1}`,{x:115,y:Nd(e)}]),...jd.map(e=>[`C${e+1}`,{x:Md(e),y:115}])]),Fd={red:[255,40,40],green:[60,230,90]},Id=[58,58,58];function Ld(e,t){let n=Fd[e]??Fd.red,r=e=>Math.round(Id[e]+(n[e]-Id[e])*t);return`rgb(${r(0)}, ${r(1)}, ${r(2)})`}var Rd={geometry:()=>({width:Od,height:kd,pins:Pd}),Component({part:e,state:t,running:n}){let r=String(e.props.color??`red`),i=E(t,e=>e.brightness,n);return(0,m.jsxs)(`svg`,{width:Od,height:kd,viewBox:`0 0 ${Od} ${kd}`,style:{display:`block`},children:[jd.map(e=>(0,m.jsx)(`rect`,{x:Ad.w,y:Nd(e)-1.2,width:Dd,height:`2.4`,fill:`var(--lead)`},`r${e}`)),jd.map(e=>(0,m.jsx)(`rect`,{x:Md(e)-1.2,y:Ad.h,width:`2.4`,height:Dd,fill:`var(--lead)`},`c${e}`)),(0,m.jsx)(`rect`,{x:`0`,y:`0`,width:Ad.w,height:Ad.h,rx:`2`,fill:`#1c1c1e`}),jd.map(e=>(0,m.jsxs)(`text`,{x:Ad.w-1.5,y:Nd(e)+1.6,fontSize:`4.5`,fill:`#8e8e93`,textAnchor:`end`,fontFamily:k,children:[`R`,e+1]},`tr${e}`)),jd.map(e=>(0,m.jsxs)(`text`,{x:Md(e),y:Ad.h-2.5,fontSize:`4.5`,fill:`#8e8e93`,textAnchor:`middle`,fontFamily:k,children:[`C`,e+1]},`tc${e}`)),jd.flatMap(e=>jd.map(t=>{let n=D(2*(i[e*8+t]??0));return(0,m.jsx)(`circle`,{cx:Md(t),cy:Nd(e),r:`4.5`,fill:Ld(r,n)},`${e}-${t}`)}))]})}},zd=9.6,Bd=14,Vd=[`VCC`,`GND`,`CLK`,`DIO`],Hd=Object.fromEntries(Vd.map((e,t)=>[e,{x:2,y:Bd+t*zd}])),Ud=cr(4),Wd=30,Gd=Wd+Ud.width+6,Kd=Math.max(Ud.height+12,56.4),qd={geometry:()=>({width:Gd,height:Kd,pins:Hd}),Component({part:e,state:t,running:n}){let r=E(t,e=>e.digits.flatMap((e,t)=>e.map((e,n)=>t===1&&n===7?0:e)),n),i=r.length>0?r:Array(32).fill(0);return(0,m.jsxs)(`div`,{style:{position:`relative`,width:Gd,height:Kd},children:[(0,m.jsxs)(`svg`,{width:Gd,height:Kd,viewBox:`0 0 ${Gd} ${Kd}`,style:{position:`absolute`,left:0,top:0},children:[(0,m.jsx)(`rect`,{x:10,y:2,width:Gd-12,height:Kd-4,rx:`3`,fill:`#1f5fa8`}),Vd.map(e=>(0,m.jsxs)(`g`,{children:[(0,m.jsx)(`rect`,{x:Hd[e].x-1,y:Hd[e].y-1,width:`10`,height:`2`,fill:`var(--lead)`}),(0,m.jsx)(`text`,{x:13,y:Hd[e].y+1.6,fontSize:`4`,fill:`#ffffff`,fontFamily:k,children:e})]},e))]}),(0,m.jsx)(`div`,{style:{position:`absolute`,left:Wd,top:6},children:(0,m.jsx)(sr,{digits:4,levels:i,color:String(e.props.color??`red`),colon:(t?.colon??0)>0})})]})}},Jd=9.6,Yd=14,Xd=[`VCC`,`GND`,`STB`,`CLK`,`DIO`],Zd=Object.fromEntries(Xd.map((e,t)=>[e,{x:2,y:Yd+t*Jd}])),Qd=.55,$d=cr(8),ef=30,tf=ef+$d.width*Qd+8,nf=12,rf=22,af=rf+$d.height*Qd+6,of=af+24,sf=$d.width*Qd/8,cf={interactive:!0,geometry:()=>({width:tf,height:of,pins:Zd}),Component({state:e,running:t,input:n}){let r=E(e,e=>[...e.digits.flat(),...e.leds],t),i=r.length>0?r:Array(72).fill(0);return(0,m.jsxs)(`div`,{style:{position:`relative`,width:tf,height:of},children:[(0,m.jsxs)(`svg`,{width:tf,height:of,viewBox:`0 0 ${tf} ${of}`,style:{position:`absolute`,left:0,top:0},children:[(0,m.jsx)(`rect`,{x:10,y:2,width:tf-12,height:of-4,rx:`3`,fill:`#b3261e`}),Xd.map(e=>(0,m.jsxs)(`g`,{children:[(0,m.jsx)(`rect`,{x:Zd[e].x-1,y:Zd[e].y-1,width:`10`,height:`2`,fill:`var(--lead)`}),(0,m.jsx)(`text`,{x:13,y:Zd[e].y+1.6,fontSize:`4`,fill:`#ffffff`,fontFamily:k,children:e})]},e)),Array.from({length:8},(e,t)=>{let n=D(i[64+t]??0);return(0,m.jsx)(`circle`,{cx:ef+sf*(t+.5),cy:nf,r:`3`,fill:n>0?`rgba(255, 70, 70, ${.35+.65*n})`:`#5c1410`},t)}),Array.from({length:8},(r,i)=>{let a=e?.keys[i]??!1,o=ef+sf*(i+.5);return(0,m.jsxs)(`g`,{className:t?`canvas-ui`:void 0,style:{cursor:t?`pointer`:`default`},onPointerDown:e=>{t&&(e.stopPropagation(),e.target.setPointerCapture?.(e.pointerId),n({key:i+1,pressed:!0}))},onPointerUp:()=>t&&n({key:i+1,pressed:!1}),onPointerCancel:()=>t&&n({key:i+1,pressed:!1}),children:[(0,m.jsx)(`title`,{children:`按住 S${i+1}`}),(0,m.jsx)(`rect`,{x:o-7,y:af,width:`14`,height:`14`,rx:`2`,fill:`#343a40`}),(0,m.jsx)(`circle`,{cx:o,cy:af+7,r:`4.5`,fill:a?`#adb5bd`:`#212529`,stroke:`#868e96`,strokeWidth:`0.6`}),(0,m.jsxs)(`text`,{x:o,y:af+21,fontSize:`4.2`,fill:`#ffffff`,textAnchor:`middle`,fontFamily:k,children:[`S`,i+1]})]},i)})]}),(0,m.jsx)(`div`,{style:{position:`absolute`,left:ef,top:rf,transform:`scale(${Qd})`,transformOrigin:`0 0`,pointerEvents:`none`},children:(0,m.jsx)(sr,{digits:8,levels:i.slice(0,64),color:`red`})})]})}},lf=9.6,uf=14,df=[`VCC`,`GND`,`DIN`,`CS`,`CLK`],ff=Object.fromEntries(df.map((e,t)=>[e,{x:2,y:uf+t*lf}])),pf=11,mf=34,hf=8,gf=130,_f=104,vf={red:[255,40,40],green:[60,230,90]};function yf(e,t){let n=vf[e]??vf.red,r=e=>Math.round(58+(n[e]-58)*t);return`rgb(${r(0)}, ${r(1)}, ${r(2)})`}var bf={geometry:()=>({width:gf,height:_f,pins:ff}),Component({part:e,state:t,running:n}){let r=String(e.props.color??`red`),i=E(t,e=>e.dots.flat(),n);return(0,m.jsxs)(`svg`,{width:gf,height:_f,viewBox:`0 0 ${gf} ${_f}`,style:{display:`block`},children:[(0,m.jsx)(`rect`,{x:10,y:2,width:118,height:100,rx:`3`,fill:`#1f5fa8`}),df.map(e=>(0,m.jsxs)(`g`,{children:[(0,m.jsx)(`rect`,{x:ff[e].x-1,y:ff[e].y-1,width:`10`,height:`2`,fill:`var(--lead)`}),(0,m.jsx)(`text`,{x:13,y:ff[e].y+1.6,fontSize:`4`,fill:`#ffffff`,fontFamily:k,children:e})]},e)),(0,m.jsx)(`rect`,{x:31,y:5,width:94,height:94,rx:`2`,fill:`#1c1c1e`}),Array.from({length:64},(e,t)=>{let n=t>>3,a=t&7;return(0,m.jsx)(`circle`,{cx:mf+pf*(a+.5),cy:hf+pf*(n+.5),r:pf*.38,fill:yf(r,D(i[t]??0))},t)})]})}},xf=[0,16,8,24],Sf=1.8,J={x:11,y:10,w:128*Sf,h:64*Sf},Cf=J.w+22,wf=10,Tf=J.y+J.h+16+wf,Ef=ee.pins.map(e=>e.name),Df=Object.fromEntries(Ef.map((e,t)=>[e,{x:26+t*9.6,y:Tf-2}])),Of={blue:{bg:[40,82,214],on:[235,244,255]},green:{bg:[181,201,52],on:[28,38,10]}},kf=null;function Af(e,t){try{return kf??=new TextDecoder(`gb18030`),kf.decode(new Uint8Array([e,t]))}catch{return``}}function jf(e,t){let n=[],r=t.getContext(`2d`,{willReadFrequently:!0});r.fillStyle=`#fff`,r.fillRect(0,0,128,64),r.fillStyle=`#000`,r.textBaseline=`top`;for(let t=0;t<4;t++)for(let i=0;i<8;i++){let a=e[xf[t]+i]??8224,o=a>>8,s=a&255,c=i*16,l=t*16;if(o>=161&&s>=161)r.font=`15px "SimSun", "Songti SC", "STSong", "Noto Serif CJK SC", serif`,r.fillText(Af(o,s),c,l+1,16);else for(let[e,t]of[o,s].entries())t>32&&t<128&&n.push([t,c+e*8,l])}let i=r.getImageData(0,0,128,64).data,a=new Uint8Array(8192);for(let e=0;e<a.length;e++)a[e]=+(i[e*4]<140);for(let[e,t,r]of n)for(let n=0;n<8;n++){let i=le[e*8+n];for(let e=0;e<5;e++)i>>e&1&&(a[(r+n*2)*128+t+1+e]=1,a[(r+n*2+1)*128+t+1+e]=1)}return a}function Mf({state:e,color:t}){let n=(0,h.useRef)(null),r=(0,h.useRef)(null),i=(0,h.useRef)(null);return(0,h.useEffect)(()=>{let a=n.current;if(!a)return;let o=a.getContext(`2d`),s=Of[t],c=e?.backlight??0,l=s.bg.map(e=>Math.round(e*(.35+.65*c))),u=o.createImageData(128,64),d=null;if(e?.on){let t=e.text.join(`,`);i.current?.key!==t&&(r.current??=Object.assign(document.createElement(`canvas`),{width:128,height:64}),i.current={key:t,bits:jf(e.text,r.current)}),d=i.current.bits}for(let t=0;t<64;t++)for(let n=0;n<128;n++){let r=d?d[t*128+n]===1:!1,i=e?.on?e.gdram:null;i&&(t<32?i[t*16+(n>>4)]:i[(t-32)*16+8+(n>>4)])>>15-(n&15)&1&&(r=!0);let a=(t*128+n)*4,o=r?s.on:l;u.data[a]=o[0],u.data[a+1]=o[1],u.data[a+2]=o[2],u.data[a+3]=255}if(e?.on&&e.cursor&&(!e.cursor.blink||Math.floor(performance.now()/500)%2==0)){let{row:t,col:n}=e.cursor;for(let e=n*16;e<n*16+16;e++){let n=((t*16+15)*128+e)*4;u.data.set([...s.on,255],n)}}o.putImageData(u,0,0)},[e,t]),(0,m.jsx)(`canvas`,{ref:n,width:128,height:64,style:{position:`absolute`,left:J.x,top:J.y,width:J.w,height:J.h,imageRendering:`pixelated`}})}var Nf={geometry:()=>({width:Cf,height:Tf,pins:Df}),Component({part:e,state:t}){let n=e.props.color===`green`?`green`:`blue`;return(0,m.jsxs)(`div`,{style:{position:`relative`,width:Cf,height:Tf},children:[(0,m.jsxs)(`svg`,{width:Cf,height:Tf,viewBox:`0 0 ${Cf} ${Tf}`,style:{position:`absolute`,left:0,top:0},children:[(0,m.jsx)(`rect`,{x:0,y:0,width:Cf,height:Tf-wf,rx:`3`,fill:`#2d7a3a`}),(0,m.jsx)(`rect`,{x:J.x-4,y:J.y-4,width:J.w+8,height:J.h+8,rx:`2`,fill:`#1c1c1e`}),Ef.map(e=>(0,m.jsxs)(`g`,{children:[(0,m.jsx)(`rect`,{x:Df[e].x-1,y:Tf-wf,width:`2`,height:wf,fill:`var(--lead)`}),(0,m.jsx)(`text`,{x:Df[e].x,y:Tf-wf-3,fontSize:`3.2`,fill:`#e9f5ec`,textAnchor:`middle`,fontFamily:k,children:e})]},e)),(0,m.jsx)(`text`,{x:Cf-6,y:J.y+J.h+12,fontSize:`4.4`,fill:`#e9f5ec`,textAnchor:`end`,fontFamily:k,children:`LCD12864 ST7920`})]}),(0,m.jsx)(Mf,{state:t,color:n})]})}},Pf={w:128,h:160},Ff=1.25,If=9.6,Lf=14,Rf=[`VCC`,`GND`,`SCL`,`SDA`,`RES`,`DC`,`CS`,`BLK`],zf=Object.fromEntries(Rf.map((e,t)=>[e,{x:2,y:Lf+t*If}])),Y={x:34,y:8,w:Pf.w*Ff,h:Pf.h*Ff},Bf=Y.x+Y.w+8,Vf=Y.y+Y.h+8,Hf=e=>[(e>>11&31)*8.226,(e>>5&63)*4.048,(e&31)*8.226];function Uf({state:e}){let t=(0,h.useRef)(null),n=(0,h.useRef)(null);return(0,h.useEffect)(()=>{let r=t.current;if(!r)return;e?.pixels&&(n.current=e.pixels);let i=r.getContext(`2d`),a=i.createImageData(Pf.w,Pf.h),o=n.current,s=e?.backlight?1:.12;for(let t=0;t<Pf.w*Pf.h;t++){let[n,r,i]=e?.on&&o?Hf(o[t]):[255,255,255];e?.on&&e.inverted&&([n,r,i]=[255-n,255-r,255-i]),e?.powered||([n,r,i]=[20,20,24]),a.data[t*4]=n*s,a.data[t*4+1]=r*s,a.data[t*4+2]=i*s,a.data[t*4+3]=255}i.putImageData(a,0,0)},[e]),(0,m.jsx)(`canvas`,{ref:t,width:Pf.w,height:Pf.h,style:{position:`absolute`,left:Y.x,top:Y.y,width:Y.w,height:Y.h,imageRendering:`pixelated`}})}var Wf={geometry:()=>({width:Bf,height:Vf,pins:zf}),Component:({state:e})=>(0,m.jsxs)(`div`,{style:{position:`relative`,width:Bf,height:Vf},children:[(0,m.jsxs)(`svg`,{width:Bf,height:Vf,viewBox:`0 0 ${Bf} ${Vf}`,style:{position:`absolute`,left:0,top:0},children:[(0,m.jsx)(`rect`,{x:10,y:2,width:Bf-12,height:Vf-4,rx:`3`,fill:`#b3261e`}),(0,m.jsx)(`rect`,{x:Y.x-3,y:Y.y-3,width:Y.w+6,height:Y.h+6,rx:`2`,fill:`#1c1c1e`}),Rf.map(e=>(0,m.jsxs)(`g`,{children:[(0,m.jsx)(`rect`,{x:zf[e].x-1,y:zf[e].y-1,width:`10`,height:`2`,fill:`var(--lead)`}),(0,m.jsx)(`text`,{x:13,y:zf[e].y+1.6,fontSize:`4`,fill:`#ffffff`,fontFamily:k,children:e})]},e))]}),(0,m.jsx)(Uf,{state:e})]})},Gf=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Kf=class extends b{constructor(){super(...arguments),this.angle=0,this.horn=`single`,this.hornColor=`#ccc`,this.pinInfo=[{name:`GND`,x:0,y:50,signals:[{type:`power`,signal:`GND`}]},{name:`V+`,x:0,y:59.5,signals:[{type:`power`,signal:`VCC`}]},{name:`PWM`,x:0,y:69,signals:[{type:`pwm`}]}]}hornPath(){switch(this.horn){case`cross`:return`m119.54 50.354h-18.653v-18.653a8.4427 8.4427 0 0 0-8.4427-8.4427h-1.9537a8.4427 8.4427 0 0 0-8.4427 8.4427v18.653h-18.653a8.4427 8.4427 0 0 0-8.4427 8.4427v1.9537a8.4427 8.4427 0 0 0 8.4427 8.4427h18.653v18.653a8.4427 8.4427 0 0 0 8.4427 8.4427h1.9537a8.4427 8.4427 0 0 0 8.4427-8.4427v-18.653h18.653a8.4427 8.4427 0 0 0 8.4426-8.4427v-1.9537a8.4427 8.4427 0 0 0-8.4426-8.4427zm-57.447 12.136a2.7165 2.7165 0 1 1 2.7119-2.7165 2.7165 2.7165 0 0 1-2.7165 2.7165zm8.7543 0a2.7165 2.7165 0 1 1 2.7119-2.7165 2.7165 2.7165 0 0 1-2.7165 2.7165zm20.621-34.813a2.7165 2.7165 0 1 1-2.7165 2.7165 2.7165 2.7165 0 0 1 2.7165-2.7165zm0 8.7543a2.7165 2.7165 0 1 1-2.7165 2.7165 2.7165 2.7165 0 0 1 2.7165-2.7165zm0 55.438a2.7165 2.7165 0 1 1 2.7165-2.7165 2.7165 2.7165 0 0 1-2.7165 2.7165zm0-8.7543a2.7165 2.7165 0 1 1 2.7165-2.7165 2.7165 2.7165 0 0 1-2.7165 2.7165zm5.9215-17.42a8.3729 8.3729 0 1 1 0-11.843 8.3729 8.3729 0 0 1 0 11.843zm14.704-3.205a2.7165 2.7165 0 1 1 2.7165-2.7165 2.7165 2.7165 0 0 1-2.7165 2.7165zm8.7543 0a2.7165 2.7165 0 1 1 2.7165-2.7165 2.7165 2.7165 0 0 1-2.7165 2.7165z`;case`double`:return`m101.63 57.808c-0.0768-0.48377-0.16978-0.8838-0.23258-1.1629l-4.112-51.454c0-2.8654-2.6026-5.1912-5.8145-5.1912s-5.8145 2.3258-5.8145 5.1912l-4.1004 51.447c-0.07443 0.28607-0.16746 0.69774-0.24421 1.1629a12.473 12.473 0 0 0 0 3.9306c0.07675 0.48377 0.16978 0.8838 0.24421 1.1629l4.1004 51.461c0 2.8654 2.6026 5.1912 5.8145 5.1912s5.8145-2.3258 5.8145-5.1912l4.1004-51.447c0.0744-0.28607 0.16746-0.69774 0.23258-1.1629a12.473 12.473 0 0 0 0.0116-3.9376zm-4.2376 7.8868a8.3426 8.3426 0 0 1-3.5375 2.1072c-0.25816 0.07443-0.52098 0.13955-0.7838 0.19072a8.7217 8.7217 0 0 1-1.1978 0.1442c-0.26747 0.01163-0.53726 0.01163-0.80473 0a8.7217 8.7217 0 0 1-1.1978-0.1442c-0.26282-0.05117-0.52563-0.11629-0.78379-0.19072a8.3729 8.3729 0 0 1 0-16.048c0.25816-0.07675 0.52098-0.13955 0.78379-0.19072a8.7217 8.7217 0 0 1 1.1978-0.1442c0.26747-0.01163 0.53726-0.01163 0.80473 0a8.7217 8.7217 0 0 1 1.1978 0.1442c0.26282 0.05117 0.52563 0.11396 0.7838 0.19072a8.3729 8.3729 0 0 1 3.5375 13.955zm-5.9215-54.996a2.791 2.791 0 1 1-2.791 2.791 2.791 2.791 0 0 1 2.791-2.791zm0 8.6055a2.791 2.791 0 1 1-2.791 2.791 2.791 2.791 0 0 1 2.791-2.791zm0 8.3729a2.791 2.791 0 1 1-2.791 2.791 2.791 2.791 0 0 1 2.791-2.791zm0 8.6055a2.791 2.791 0 1 1-2.791 2.791 2.791 2.791 0 0 1 2.791-2.791zm0 72.565a2.791 2.791 0 1 1 2.791-2.791 2.791 2.791 0 0 1-2.791 2.791zm0-8.6055a2.791 2.791 0 1 1 2.791-2.791 2.791 2.791 0 0 1-2.791 2.791zm0-8.3729a2.791 2.791 0 1 1 2.791-2.791 2.791 2.791 0 0 1-2.791 2.791zm0-8.6055a2.791 2.791 0 1 1 2.791-2.791 2.791 2.791 0 0 1-2.791 2.791z`;default:return`m101.6 59.589-4.3167-54.166c0-2.8654-2.6026-5.1912-5.8145-5.1912s-5.8145 2.3258-5.8145 5.1912l-4.3167 54.166a8.3264 8.3264 0 0 0-0.10234 1.2792c0 5.047 4.5818 9.1381 10.234 9.1381s10.234-4.0911 10.234-9.1381a8.3264 8.3264 0 0 0-0.10233-1.2792zm-10.131-48.658a2.791 2.791 0 1 1-2.791 2.791 2.791 2.791 0 0 1 2.791-2.791zm0 8.6055a2.791 2.791 0 1 1-2.791 2.791 2.791 2.791 0 0 1 2.791-2.791zm0 8.3729a2.791 2.791 0 1 1-2.791 2.791 2.791 2.791 0 0 1 2.791-2.791zm0 8.6055a2.791 2.791 0 1 1-2.791 2.791 2.791 2.791 0 0 1 2.791-2.791zm5.9215 29.412a8.3729 8.3729 0 1 1 0-11.843 8.3729 8.3729 0 0 1 0 11.843z`}}render(){return _`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="45mm"
        height="31.63mm"
        version="1.1"
        viewBox="0 0 170.08 119.55"
      >
        <defs>
          <g id="pin">
            <rect x="0" y="-1.91" width="3.72" height="3.71" />
            <path d="m2.026 -1.91h13.532l-13.425 0.51865z" />
            <path d="m2.026 1.80h13.532l-13.425-0.50702z" />
            <rect fill="#ccc" x="0.33" y="-1.23" width="3.04" height="2.46" rx=".15" />
          </g>
        </defs>
        <g stroke-width="2.7" fill="none">
          <path
            stroke="#b44200"
            d="m 83.32,56.6 c0,0 -32.99,0.96 -43.32,0 -6.20,-0.58 -10.60,-6.20 -14.87,-6.31"
          />
          <path stroke="#ff2300" d="m83.326 59.6h-62.971" />
          <path
            stroke="#f47b00"
            d="m 83.32,62.6 c0,0 -32.60,-0.61 -43.33,-0.15 -6.87,0.29 -12.01,6.82 -14.77,6.73"
          />
        </g>
        <rect fill="#666" y="45.5" width="25.71" height="28" rx="1.14" />
        <use xlink:href="#pin" x="4.7" y="50.06" />
        <use xlink:href="#pin" x="4.7" y="59.66" />
        <use xlink:href="#pin" x="4.7" y="69.26" />
        <path
          fill="#4d4d4d"
          d="m163.92 66.867a7.09 7.09 0 1 1 5.8145-11.136 0.18 0.18 0 0 0 0.33-0.10234v-14.346h-17.664v36.98h17.676v-14.346a0.18 0.18 0 0 0-0.333-0.107 7.08 7.08 0 0 1-5.83 3.06z"
        />
        <path
          fill="#4d4d4d"
          d="m55.068 66.75a7.09 7.09 0 1 0-5.8261-11.136 0.18 0.18 0 0 1-0.33-0.10234v-14.346h17.676v36.98h-17.676v-14.346a0.18 0.18 0 0 1 0.333-0.107 7.08 7.08 0 0 0 5.83 3.06z"
        />
        <rect fill="#666" x="64.255" y="37.911" width="90.241" height="43.725" rx="5.3331" />
        <path fill="gray" d="m110.07 50.005h-14.42v19.537h14.42a9.7684 9.7684 0 0 0 0-19.537z" />
        <circle fill="#999" cx="91.467" cy="59.773" r="18.606" />
        <path
          fill=${this.hornColor}
          transform="translate(91.467 59.773) rotate(${this.angle??0}) translate(-91.467 -59.773)"
          d="${this.hornPath()}"
        />
        <circle fill="gray" cx="91.467" cy="59.773" r="8.3729" />
        <circle fill="#ccc" cx="91.467" cy="59.773" r="6.2494" />
        <path
          fill="#666"
          d="m94.911 62.543-2.3839-2.4165a0.42562 0.42562 0 0 1 0-0.60471l2.4281-2.3863a0.64657 0.64657 0 0 0 0.06512-0.8652 0.62797 0.62797 0 0 0-0.93032-0.05117l-2.4351 2.4049a0.4326 0.4326 0 0 1-0.60703 0l-2.3863-2.4165a0.6489 0.6489 0 0 0-0.8652-0.06512 0.63262 0.63262 0 0 0-0.05117 0.93032l2.4049 2.4328a0.42795 0.42795 0 0 1 0 0.60703l-2.4142 2.3863a0.65122 0.65122 0 0 0-0.06745 0.8652 0.63029 0.63029 0 0 0 0.93032 0.05117l2.4351-2.4049a0.42562 0.42562 0 0 1 0.60471 0l2.3863 2.4398a0.63262 0.63262 0 0 0 0.93032-0.04186 0.64657 0.64657 0 0 0-0.04419-0.8652z"
        />
      </svg>
    `}};Gf([S()],Kf.prototype,`angle`,void 0),Gf([S()],Kf.prototype,`horn`,void 0),Gf([S()],Kf.prototype,`hornColor`,void 0),Kf=Gf([x(`wokwi-servo`)],Kf);var qf=45*T,Jf=31.63*T,Yf={geometry:()=>({width:qf,height:Jf,pins:w(`wokwi-servo`,{PWM:`PWM`,"V+":`V+`,GND:`GND`})}),Component({state:e,running:t}){let n=e?.angle??90;return uo(t&&e?.powered?mo(Math.abs(e.angle-e.target)>.5):null,`sawtooth`),(0,m.jsxs)(`div`,{style:{position:`relative`,width:qf,height:Jf},children:[(0,m.jsx)(C,{tag:`wokwi-servo`,props:{angle:n}}),(0,m.jsx)(`svg`,{width:qf,height:Jf,style:{position:`absolute`,left:0,top:0,pointerEvents:`none`},children:(0,m.jsx)(`text`,{x:`4`,y:`16`,fontSize:`9`,fill:e?.powered===!1?`var(--ink-3)`:`var(--ink)`,fontFamily:k,children:e?.powered===!1?`未通电`:`${Math.round(n)}°`})})]})}},Xf=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Zf=class extends b{constructor(){super(...arguments),this.pinInfo=[{name:`VCC`,x:71.3,y:94.5,signals:[{type:`power`,signal:`VCC`,voltage:5}]},{name:`TRIG`,x:81.3,y:94.5,signals:[]},{name:`ECHO`,x:91.3,y:94.5,signals:[]},{name:`GND`,x:101.3,y:94.5,signals:[{type:`power`,signal:`GND`}]}]}render(){return _`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 45 25"
        height="25mm"
        width="45mm"
        font-family="monospace"
      >
        <defs>
          <pattern patternUnits="userSpaceOnUse" width="2" height="2" id="checkerboard">
            <path d="M0 0h1v1H0zM1 1h1v1H1z" />
          </pattern>
          <radialGradient id="grad1" cx="8.96" cy="10.04" r="3.58" gradientUnits="userSpaceOnUse">
            <stop stop-color="#777" offset="0" />
            <stop stop-color="#b9b9b9" offset="1" />
          </radialGradient>
          <g id="sensor-unit">
            <circle cx="8.98" cy="10" r="8.61" fill="#dcdcdc" />
            <circle cx="8.98" cy="10" r="7.17" fill="#222" />
            <circle cx="8.98" cy="10" r="5.53" fill="#777" fill-opacity=".992" />
            <circle cx="8.98" cy="10" r="3.59" fill="url(#grad1)" />
            <circle cx="8.99" cy="10" r=".277" fill="#777" fill-opacity=".818" />
            <circle cx="8.98" cy="10" r="5.53" fill="url(#checkerboard)" opacity=".397" />
          </g>
        </defs>
        <path
          d="M0 0v20.948h45V0zm1.422.464a1 1 0 01.004 0 1 1 0 011 1 1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 01.996-1zm41.956 0a1 1 0 01.004 0 1 1 0 011 1 1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 01.996-1zM1.422 18.484a1 1 0 01.004 0 1 1 0 011 1 1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 01.996-1zm41.956 0a1 1 0 01.004 0 1 1 0 011 1 1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 01.996-1z"
          fill="#456f93"
        />
        <path
          d="M15.293 5.888l2.934-2.934v3.124l2.944 2.943v10.143M23.269 19.037v-2.473l-.966-.965v-12.5l2.577 1.488 4.741 4.741"
          fill="none"
          stroke="#355a7c"
          stroke-width=".858"
        />
        <use xlink:href="#sensor-unit" />
        <use xlink:href="#sensor-unit" x="27.12" />
        <g fill="none" stroke="#505132" stroke-width=".368">
          <circle cx="43.4" cy="1.46" r="1" />
          <circle cx="43.4" cy="19.5" r="1" />
          <circle cx="1.43" cy="1.46" r="1" />
          <circle cx="1.43" cy="19.5" r="1" />
        </g>
        <rect
          ry="2.07"
          y=".626"
          x="17.111"
          height="4.139"
          width="10.272"
          fill="#878787"
          stroke="#424242"
          stroke-width=".368"
        />
        <g fill="black">
          <rect x="17.87" y="18" ry=".568" width="2.25" height="2.271" />
          <rect x="20.41" y="18" ry=".568" width="2.25" height="2.271" />
          <rect x="22.95" y="18" ry=".568" width="2.25" height="2.271" />
          <rect x="25.49" y="18" ry=".568" width="2.25" height="2.271" />
        </g>
        <g fill="#ccc" stroke-linecap="round" stroke-width=".21">
          <rect x="18.61" y="19" width=".75" height="7" rx=".2" />
          <rect x="21.15" y="19" width=".75" height="7" rx=".2" />
          <rect x="23.69" y="19" width=".75" height="7" rx=".2" />
          <rect x="26.23" y="19" width=".75" height="7" rx=".2" />
        </g>
        <text font-weight="400" font-size="2.2" fill="#e6e6e6" stroke-width=".055">
          <tspan y="8" x="17.6">HC-SR04</tspan>
        </text>
        <text
          transform="rotate(-90)"
          font-weight="400"
          font-size="1.55"
          fill="#e6e6e6"
          stroke-width=".039"
        >
          <tspan x="-17.591" y="19.561">VCC</tspan>
          <tspan x="-17.591" y="22.101">TRIG</tspan>
          <tspan x="-17.591" y="24.641">ECHO</tspan>
          <tspan x="-17.591" y="27.181">GND</tspan>
        </text>
      </svg>
    `}};Zf=Xf([x(`wokwi-hc-sr04`)],Zf);function Qf(e){let t=Number(e);return Number.isFinite(t)&&typeof e!=`string`?Math.min(500,Math.max(2,Math.round(t))):100}var $f=45*T,ep=20,tp=ep+25*T,np={x:78,w:86},rp=e=>e>400?`${e}cm（超出量程）`:`${e}cm`;function ip(){let e=w(`wokwi-hc-sr04`,{VCC:`VCC`,TRIG:`TRIG`,ECHO:`ECHO`,GND:`GND`});return Object.fromEntries(Object.entries(e).map(([e,t])=>[e,{x:t.x,y:t.y+ep}]))}var ap={geometry:()=>({width:$f,height:tp,pins:ip()}),Component({part:e,state:t,running:n,input:r,openEnv:i,setProp:a}){let o=Qf(e.props.distance??100),s=e=>a?.(`distance`,e),c=I(t,`distance`,o),l=!!t?.mapped,u=c.mode===`script`,d=u||l;return(0,m.jsxs)(`div`,{style:{position:`relative`,width:$f,height:tp},children:[(0,m.jsxs)(`svg`,{width:$f,height:ep,style:{display:`block`},children:[(0,m.jsxs)(`text`,{x:`2`,y:`13`,fontSize:`8.5`,fill:`var(--ink)`,fontFamily:k,children:[l?`地图 `:`距离 `,!l&&(0,m.jsx)(L,{shown:c,open:i}),rp(Math.round(l?t.distance:c.value))]}),(0,m.jsx)(Ni,{type:`hc-sr04`,x:62,y:6,state:t,running:n,input:r})]}),(0,m.jsx)(`input`,{className:`canvas-ui`,type:`range`,min:`2`,max:`500`,step:`1`,title:l?`装在舵机上：按房间地图里舵机朝的方向测距（属性里可以换房间或取消）`:u?Oi:`障碍物距离（cm），超过 400cm 收不到回波`,value:o,disabled:d,onChange:e=>s(Qf(Number(e.target.value))),style:{position:`absolute`,left:np.x,top:3,width:np.w*2,height:24,margin:0,transform:`scale(0.5)`,transformOrigin:`0 0`,accentColor:`#2563eb`,cursor:d?`default`:`pointer`}}),(0,m.jsx)(C,{tag:`wokwi-hc-sr04`,props:{}})]})}},op=e=>e===`dht22`?`dht22`:`dht11`,sp=(e,[t,n])=>Math.min(n,Math.max(t,e)),cp=(e,t)=>Math.round(e/t)*t,lp=e=>Math.round(e*10)/10;function up(e,t,n){let r=d[e],i=Number.isFinite(t)?t:25,a=Number.isFinite(n)?n:60;return{temperature:lp(sp(i,r.t)),humidity:lp(cp(sp(a,r.h),r.hStep))}}var dp=80,fp=13,X={x:18,y:32,w:44,h:56},pp=12,mp=X.y+X.h+pp,hp=[`VCC`,`DATA`,`NC`,`GND`],gp=Object.fromEntries(hp.map((e,t)=>[e,{x:dp/2-14.4+t*9.6,y:mp-2}])),_p={x:40,w:38},vp={dht11:{body:`#2f7fc8`,grille:`#1d5a94`,text:`#e8f1fb`},dht22:{body:`#f2f2f2`,grille:`#c9cdd2`,text:`#4b5058`}},yp=e=>`${e.toFixed(1)}℃`,bp=(e,t)=>`${t===`dht22`?e.toFixed(1):Math.round(e)}%`;function xp(e){return(0,m.jsx)(`input`,{className:`canvas-ui`,type:`range`,min:e.min,max:e.max,step:e.step,title:e.disabled?Oi:e.title,value:e.value,disabled:e.disabled,onChange:t=>e.onChange(Number(t.target.value)),style:{position:`absolute`,left:_p.x,top:2+e.row*fp,width:_p.w*2,height:18,margin:0,transform:`scale(0.5)`,transformOrigin:`0 0`,accentColor:`#2563eb`,cursor:e.disabled?`default`:`pointer`}})}var Sp={geometry:()=>({width:dp,height:mp,pins:gp}),Component({part:e,state:t,running:n,input:r,openEnv:i,setProp:a}){let o=op(e.props.variant??`dht11`),{temperature:s,humidity:c}=up(o,Number(e.props.temperature??25),Number(e.props.humidity??60)),l=e=>a?.(`temperature`,e),u=e=>a?.(`humidity`,e),d=I(t,`temperature`,s),f=I(t,`humidity`,c),p=vp[o],ee=dp/2,te=(e,t)=>up(o,e,t);return(0,m.jsxs)(`div`,{style:{position:`relative`,width:dp,height:mp},children:[(0,m.jsxs)(`svg`,{width:dp,height:mp,viewBox:`0 0 ${dp} ${mp}`,style:{display:`block`},children:[(0,m.jsxs)(`text`,{x:`2`,y:10,fontSize:`6.5`,fill:`var(--ink)`,fontFamily:k,children:[(0,m.jsx)(L,{shown:d,open:i}),yp(d.value)]}),(0,m.jsxs)(`text`,{x:`2`,y:23,fontSize:`6.5`,fill:`var(--ink)`,fontFamily:k,children:[(0,m.jsx)(L,{shown:f,open:i}),bp(f.value,o)]}),hp.map(e=>(0,m.jsx)(`rect`,{x:gp[e].x-1,y:X.y+X.h,width:`2`,height:pp,fill:`var(--lead)`},e)),(0,m.jsx)(`rect`,{x:X.x,y:X.y,width:X.w,height:X.h,rx:`3`,fill:p.body}),[0,1,2,3,4,5].map(e=>[0,1,2,3,4].map(t=>(0,m.jsx)(`rect`,{x:X.x+5+t*7.4,y:X.y+4+e*6.4,width:`5`,height:`4.2`,rx:`0.8`,fill:p.grille},`${e}-${t}`))),(0,m.jsx)(`text`,{x:ee,y:X.y+X.h-6,fontSize:`6`,fill:p.text,textAnchor:`middle`,fontFamily:k,fontWeight:`600`,children:t?.powered===!1?`未通电`:o.toUpperCase()}),hp.map(e=>(0,m.jsx)(`text`,{x:gp[e].x,y:X.y+X.h+7,fontSize:`3.4`,fill:`var(--ink-2)`,textAnchor:`middle`,fontFamily:k,children:e},e)),(0,m.jsx)(Ni,{type:`dht11`,x:X.x+X.w+2,y:X.y+2,state:t,running:n,input:r})]}),(0,m.jsx)(xp,{row:0,min:o===`dht22`?-40:0,max:o===`dht22`?80:50,step:o===`dht22`?.1:1,value:s,title:`环境温度（℃）`,disabled:d.mode===`script`,onChange:e=>l(te(e,c).temperature)}),(0,m.jsx)(xp,{row:1,min:o===`dht22`?0:20,max:o===`dht22`?100:90,step:o===`dht22`?.1:1,value:c,title:`环境湿度（%）`,disabled:f.mode===`script`,onChange:e=>u(te(s,e).humidity)})]})}},Cp=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},wp=class extends b{constructor(){super(...arguments),this.pinInfo=[{name:`GND`,y:87.75,x:20.977,number:1,signals:[$t()]},{name:`VCC`,y:87.75,x:30.578,number:2,signals:[en()]},{name:`DAT`,y:87.75,x:40.18,number:3,signals:[]}]}render(){return _`
      <svg
        version="1.1"
        viewBox="0 0 61.1 88.7"
        width="16.178mm"
        height="23.482mm"
        font-family="sans-serif"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#171514">
          <path
            d="m61.1 4.85c0-2.68-2.17-4.85-4.85-4.85h-51.4c-2.68 0-4.85 2.17-4.85 4.85v61c0 2.68 2.17 4.85 4.85 4.85h51.4c2.68 0 4.85-2.17 4.85-4.85zm-7.43 53.3c2.29 0 4.14 1.86 4.14 4.14 0 2.28-1.85 4.14-4.14 4.14s-4.14-1.86-4.14-4.14c0-2.29 1.85-4.14 4.14-4.14zm-46.3 0c2.29 0 4.14 1.86 4.14 4.14 0 2.28-1.85 4.14-4.14 4.14-2.29 0-4.14-1.86-4.14-4.14 0-2.29 1.85-4.14 4.14-4.14z"
            stroke-width=".987"
          />
          <rect x="16.5" y="58.2" width="28.2" height="8.28" stroke="#fff" stroke-width=".888px" />
          <rect x="14.2" y="23" width="11.3" height="4.66" stroke="#fff" stroke-width=".888px" />
        </g>
        <rect x="15.2" y="23.7" width="9.44" height="3.23" fill="#a19e9e" stroke-width=".987" />
        <g fill="#171514" stroke="#fff" stroke-width=".888px">
          <rect x="14.2" y="33" width="11.3" height="4.66" />
          <rect x="31.6" y="23" width="11.3" height="4.66" />
          <rect x="31.6" y="33" width="11.3" height="4.66" />
        </g>
        <g fill="#433b38" stroke-width=".987">
          <rect x="17.7" y="59.1" width="6.47" height="6.47" />
          <rect x="27.3" y="59.1" width="6.47" height="6.47" />
          <rect x="37" y="59.1" width="6.47" height="6.47" />
        </g>
        <g fill="#9f9f9f" stroke-width=".987">
          <path
            d="m22.4 62.5c0-0.377-0.149-0.739-0.416-1.01-0.268-0.267-0.629-0.417-1.01-0.417-0.377 0-0.739 0.15-1.01 0.417s-0.417 0.629-0.417 1.01v25.8c0 0.231 0.188 0.419 0.418 0.419h2.01c0.231 0 0.418-0.188 0.418-0.419v-25.8z"
          />
          <path
            d="m32 62.5c0-0.377-0.149-0.739-0.416-1.01-0.268-0.267-0.629-0.417-1.01-0.417-0.377 0-0.739 0.15-1.01 0.417s-0.417 0.629-0.417 1.01v25.8c0 0.231 0.188 0.419 0.418 0.419h2.01c0.231 0 0.418-0.188 0.418-0.419v-25.8z"
          />
          <path
            d="m41.6 62.5c0-0.377-0.15-0.739-0.417-1.01s-0.629-0.417-1.01-0.417c-0.377 0-0.739 0.15-1.01 0.417s-0.417 0.629-0.417 1.01v25.8c0 0.231 0.188 0.419 0.419 0.419h2.01c0.231 0 0.419-0.188 0.419-0.419v-25.8z"
          />
        </g>
        <text transform="rotate(90)" fill="#ffffff" font-size="5px">
          <tspan x="45.369" y="-37.601">DAT</tspan>
          <tspan x="45.609" y="-28.801">VCC</tspan>
          <tspan x="45.359" y="-20.2">GND</tspan>
          <text font-size="5.71px">
            <tspan
              x="16.234 18.076 22.422 24.263 28.608 32.018 35.112 36.639 40.05 43.144 46.553"
              y="-52.266"
            >
              IR Reciever
            </tspan>
          </text>
        </text>
        <g fill="none" stroke="#fff">
          <path
            d="m56.3 6.32c-0.654 0.514-1.48 0.82-2.37 0.82-0.895 0-1.72-0.306-2.37-0.82"
            stroke-width=".316px"
          />
          <path
            d="m57.4 7.97c-0.949 0.745-2.14 1.19-3.44 1.19-1.3 0-2.49-0.445-3.44-1.19"
            stroke-width=".395px"
          />
          <path
            d="m58.9 9.32c-1.38 1.08-3.11 1.73-5 1.73s-3.62-0.646-5-1.73"
            stroke-width=".395px"
          />
        </g>
        <path
          d="m20.4 10.2h-6.13c-0.382 0-0.691 0.309-0.691 0.691v6.2c0 0.382 0.309 0.691 0.691 0.691h13c0.931 0.0563 1.88 0.0563 2.81 0h12.7c0.381 0 0.691-0.309 0.691-0.691v-6.2c0-0.382-0.31-0.691-0.691-0.691h-5.88c-1.39-3.12-4.55-5.31-8.23-5.31-3.68 0-6.84 2.19-8.23 5.31zm0.463 0.691c1.18-3.1 4.21-5.31 7.77-5.31 3.55 0 6.59 2.21 7.76 5.31h6.35v6.2h-12.7c-0.914 0.0563-1.85 0.0563-2.77 0h-13v-6.2z"
          fill="#fff"
          stroke-width=".987"
        />
        <path
          d="m28.6 6.32c4.01 0 7.27 3.26 7.27 7.27 0 4.01-14.5 4.01-14.5 0 0-4.01 3.26-7.27 7.27-7.27z"
          fill="#2d2624"
          stroke-width=".987"
        />
        <clipPath id="b">
          <path
            d="m37.2 14.5c4.06 0 7.36 3.3 7.36 7.36 0 4.06-14.7 4.06-14.7 0 0-4.06 3.3-7.36 7.36-7.36z"
          />
        </clipPath>
        <g transform="matrix(.987 0 0 .987 -8.13 -8.03)" clip-path="url(#b)">
          <path
            d="m37.2 12.3c-0.069 0.303 0.377 0.714 0.536 0.965 0.504 0.799 0.744 1.43 1.07 2.3 1.01 2.7 0.775 5.41 0.775 8.2 0 0.121 0.155-0.196 0.262-0.254 0.233-0.126 0.484-0.232 0.724-0.345 0.727-0.341 1.47-0.602 2.24-0.833 2.84-0.852 4.9-0.521 6.1-3.77 0.26-0.704 0.404-1.57 0.22-2.31-0.225-0.9-2.44-3.28-3.27-3.7-1.35-0.675-3.05-0.667-4.43-1.01-1.3-0.326-3.08-0.498-4.11 0.524"
            fill="#483f3c"
          />
        </g>
        <rect x="19.1" y="11" width="19.1" height="5.51" fill="#2d2624" stroke-width=".987" />
        <clipPath id="a"><rect x="27.6" y="19.3" width="19.3" height="5.58" /></clipPath>
        <g transform="matrix(.987 0 0 .987 -8.13 -8.03)" clip-path="url(#a)">
          <path
            d="m38.1 18.8c0.144 0.284 0.197 0.749 0.286 1.07 0.466 1.68 0.509 3.53 0.399 5.27-0.041 0.653-0.374 1.31-0.374 1.96 0 0.041 0.076-0.032 0.116-0.043 0.154-0.042 0.14-0.034 0.29-0.06 0.375-0.063 0.754-0.104 1.13-0.153 0.884-0.115 1.77-0.241 2.66-0.34 2.32-0.26 5.58 0.4 6.53-2.44 0.185-0.557 0.236-1.13 0.289-1.72 0.054-0.587 0.14-1.38-0.037-1.95-0.922-3-4.9-1.81-7.22-1.81-0.773 0-1.54 0.084-2.3 0.236-0.055 0.011-0.659 0.108-0.659 0.114"
            fill="#483f3c"
          />
        </g>
        <g fill="#a19e9e" stroke-width=".987">
          <circle cx="16.5" cy="14" r="1.44" />
          <circle cx="40.5" cy="14" r="1.44" />
          <rect x="15.2" y="33.7" width="9.44" height="3.23" />
          <rect x="32.5" y="23.7" width="9.44" height="3.23" />
          <rect x="32.5" y="33.7" width="9.44" height="3.23" />
        </g>
        <g stroke-width=".987">
          <rect x="17.9" y="23.7" width="3.93" height="3.23" fill="#8e7147" />
          <rect x="34.8" y="24.1" width="4.88" height="2.44" fill="#171514" />
          <rect x="34.8" y="34.1" width="4.88" height="2.44" fill="#171514" />
          <text fill="#ffffff" font-size="2.2px" stroke-width=".987">
            <tspan x="35.267719 36.591557 37.915394" y="26.1">103</tspan>
            <tspan x="35.267719 36.591557 37.915394" y="36.12">102</tspan>
          </text>
          <rect x="17.9" y="33.7" width="3.93" height="3.23" fill="#ccf9f9" />
        </g>
      </svg>
    `}};wp=Cp([x(`wokwi-ir-receiver`)],wp);var Tp=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ep={power:162,menu:226,test:34,plus:2,back:194,prev:224,play:168,next:144,0:104,minus:152,c:176,1:48,2:24,3:122,4:16,5:56,6:90,7:66,8:74,9:82},Dp={o:`power`,m:`menu`,t:`test`,"+":`plus`,b:`back`,arrowleft:`prev`,p:`play`,arrowright:`next`,0:`0`,"-":`minus`,c:`c`,1:`1`,2:`2`,3:`3`,4:`4`,5:`5`,6:`6`,7:`7`,8:`8`,9:`9`},Op=class extends b{static get styles(){return Be`
      use {
        fill: #fff;
      }

      use.red {
        fill: #e6252e;
      }

      use.black {
        fill: #121115;
      }

      use[tabindex] {
        cursor: pointer;
      }

      use.active {
        fill: #8c8;
      }

      use.red.active,
      use.black.active {
        fill: green;
      }

      use:focus {
        --circle-stroke-color: cyan;
        outline: none;
      }
    `}eventHandler(e,t,n){e.focus();let r=Ep[t];switch(n){case`up`:e.classList.remove(`active`),this.dispatchEvent(new CustomEvent(`button-release`,{detail:{key:t,irCode:r}}));break;case`down`:e.classList.add(`active`),this.dispatchEvent(new CustomEvent(`button-press`,{detail:{key:t,irCode:r}}))}}buttonEvent(e,t){let n=e.target;if(!(n instanceof SVGElement))return null;let r=n.dataset.btn??``;r!=null&&(e.preventDefault(),this.eventHandler(n,r,t))}keyboardEvent(e,t){tn.includes(e.key)&&this.buttonEvent(e,t);let n=e.target,r=Dp[e.key.toLowerCase()];if(!(n instanceof SVGElement)||r==null)return;let i=this.shadowRoot?.querySelector(`use[data-btn="${r}"]`);i&&i instanceof SVGElement&&this.eventHandler(i,r,t)}render(){return _`
      <svg
        version="1.1"
        viewBox="0 0 151 316"
        width="40mm"
        height="83.653mm"
        font-family="sans-serif"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        @mousedown=${e=>this.buttonEvent(e,`down`)}
        @mouseup=${e=>this.buttonEvent(e,`up`)}
        @touchstart=${e=>this.buttonEvent(e,`down`)}
        @touchend=${e=>this.buttonEvent(e,`up`)}
        @keydown=${e=>this.keyboardEvent(e,`down`)}
        @keyup=${e=>this.keyboardEvent(e,`up`)}
      >
        <defs>
          <g id="button" stroke-width="1.29">
            <path
              fill="#272726"
              d="m0 -17.5c-9.73 0-17.6 7.9-17.6 17.6 0 9.73 7.9 17.6 17.6 17.6 9.73 0 17.6-7.9 17.6-17.6 0-9.73-7.9-17.6-17.6-17.6zm0 1.29c9.01 0 16.3 7.32 16.3 16.3 0 9.01-7.32 16.3-16.3 16.3-9.02 0-16.3-7.32-16.3-16.3 0-9.02 7.32-16.3 16.3-16.3z"
            />
            <circle r="16.3" style="stroke: var(--circle-stroke-color)" />
          </g>
          <circle id="button2" r="16.3" style="stroke: var(--circle-stroke-color)" />
        </defs>
        <path
          d="m149 21.3c0-10.5-8.52-19-19-19h-109c-10.5 0-19 8.52-19 19v274c0 10.5 8.52 19 19 19h109c10.5 0 19-8.52 19-19z"
          fill="#fff"
          stroke="#272726"
          stroke-width="4.53px"
        />
        <use xlink:href="#button2" x="29.6" y="37.9" data-btn="power" class="red" tabindex="0" />
        <use xlink:href="#button" x="121.4" y="37.9" data-btn="menu" tabindex="0" fill="#fff" />
        <use xlink:href="#button" x="29.6" y="75.2" data-btn="test" tabindex="0" fill="#fff" />
        <use xlink:href="#button2" x="75.5" y="75.2" data-btn="plus" class="black" tabindex="0" />
        <use xlink:href="#button" x="121.4" y="75.2" data-btn="back" tabindex="0" fill="#fff" />
        <use xlink:href="#button2" x="29.6" y="113" data-btn="prev" class="black" tabindex="0" />
        <use xlink:href="#button" x="75.5" y="113" data-btn="play" tabindex="0" fill="#fff" />
        <use xlink:href="#button2" x="121.4" y="113" data-btn="next" class="black" tabindex="0" />
        <use xlink:href="#button" x="29.6" y="152" data-btn="0" tabindex="0" fill="#fff" />
        <use xlink:href="#button2" x="75.5" y="152" data-btn="minus" class="black" tabindex="0" />
        <use xlink:href="#button" x="121.4" y="152" data-btn="c" tabindex="0" fill="#fff" />
        <use xlink:href="#button" x="29.6" y="190" data-btn="1" tabindex="0" fill="#fff" />
        <use xlink:href="#button" x="75.5" y="190" data-btn="2" tabindex="0" fill="#fff" />
        <use xlink:href="#button" x="121.4" y="190" data-btn="3" tabindex="0" fill="#fff" />
        <use xlink:href="#button" x="29.6" y="228" data-btn="4" tabindex="0" fill="#fff" />
        <use xlink:href="#button" x="75.5" y="228" data-btn="5" tabindex="0" fill="#fff" />
        <use xlink:href="#button" x="121.4" y="228" data-btn="6" tabindex="0" fill="#fff" />
        <use xlink:href="#button" x="29.6" y="266" data-btn="7" tabindex="0" fill="#fff" />
        <use xlink:href="#button" x="75.5" y="266" data-btn="8" tabindex="0" fill="#fff" />
        <use xlink:href="#button" x="121.4" y="266" data-btn="9" tabindex="0" fill="#fff" />
        <g style="pointer-events: none">
          <g fill="none" stroke="#fff" stroke-width="1.94px">
            <path
              d="m33.5 33c2.05 1.28 3.42 3.56 3.42 6.16 0 4.01-3.26 7.26-7.26 7.26-4.01 0-7.26-3.25-7.26-7.26 0-2.49 1.26-4.69 3.17-6"
            />
            <path d="m29.6 29.3v7.41" />
          </g>
          <path d="m80.9 113-9.58 4.79v-9.58z" fill="#121115" stroke-width="1.29" />
          <path d="m123.4 113-9.58 4.79v-9.58z" fill="#fff" stroke-width="1.29" />
          <path d="m129.4 113-8.95 4.79v-9.58z" fill="#fff" stroke-width="1.29" />
          <path d="m129.4 109v9.58" fill="none" stroke="#fff" stroke-width="1.29" />
          <path d="m27.9 113 9.58 4.79v-9.58z" fill="#fff" stroke-width="1.29" />
          <path d="m21.8 113 8.95 4.79v-9.58z" fill="#fff" stroke-width="1.29" />
          <path d="m22.4 109v9.58" fill="none" stroke="#fff" stroke-width="1.29" />
          <text fill="#e6252e" font-size="9.72px" font-weight="700" stroke-width="1.29">
            <tspan x="106.892 115.469 122.432 129.931" y="41.288">MENU</tspan>
            <tspan x="16.488 22.904 29.866 36.829" y="78.679">TEST</tspan>
          </text>
          <g fill="none" stroke="#fff" stroke-width="1.29">
            <path d="m67.7 152h15.5" />
            <path d="m67.7 75.2h15.5M75.5 67.4v15.5" />
          </g>
          <g fill="#121115" stroke-width="1.29">
            <path
              d="m119.4 70.7v -3.25l-6.95 4.84 6.71 4.45 0.111-2.2s6.65-0.357 7.05 3.15c0.397 3.51-6.66 5.21-6.66 5.21s10.9-2.33 10.7-6.82c-0.276-5.4-10.9-5.39-10.9-5.39z"
            />
            <text font-size="13.9px" font-weight="700">
              <tspan x="25.312" y="156.434">0</tspan>
              <tspan x="116.973" y="156.498">C</tspan>
              <tspan x="25.312" y="194.685">1</tspan>
              <tspan x="71.776" y="194.685">2</tspan>
              <tspan x="118.06" y="194.6">3</tspan>
              <tspan x="25.312" y="232.851">4</tspan>
              <tspan x="71.776" y="232.679">5</tspan>
              <tspan x="118.199" y="232.767">6</tspan>
              <tspan x="25.312" y="270.931">7</tspan>
              <tspan x="71.776" y="270.931">8</tspan>
              <tspan x="118.124" y="270.931">9</tspan>
            </text>
          </g>
          <g fill="#fff" stroke-width="1.29">
            <path
              d="m18 28.5c0.687-0.757 1.5-1.41 2.39-1.99 1.26-0.814 2.7-1.43 4.22-1.87 0.974-0.281 1.98-0.481 3-0.607 0.673-0.0828 1.35-0.129 2.03-0.147 0.68-0.0181 1.36-0.0078 2.03 0.0427 1.02 0.0789 2.03 0.243 3 0.511 2.48 0.686 4.72 2.02 6.31 4.19 0.0323 0.0479 0.097 0.0608 0.145 0.0298 0.0479-0.0323 0.0621-0.097 0.0298-0.145-0.846-1.45-1.96-2.62-3.27-3.53-0.894-0.623-1.87-1.12-2.91-1.5-1.19-0.433-2.45-0.709-3.73-0.828-0.543-0.0504-1.09-0.0698-1.64-0.0582-0.728 0.0155-1.46 0.0841-2.18 0.202-1.08 0.177-2.14 0.46-3.16 0.839-0.772 0.288-1.51 0.632-2.21 1.03-1.7 0.965-3.16 2.22-4.22 3.7-0.0362 0.0453-0.0298 0.111 0.0155 0.146 0.0453 0.0362 0.11 0.0298 0.146-0.0155z"
            />
            <path
              d="m64 65.5c0.687-0.757 1.5-1.41 2.39-1.99 1.26-0.814 2.7-1.43 4.22-1.87 0.974-0.281 1.98-0.481 3-0.607 0.673-0.0815 1.35-0.129 2.03-0.147 0.679-0.0181 1.36-0.0078 2.03 0.044 1.02 0.0776 2.03 0.242 3 0.51 2.48 0.686 4.72 2.02 6.31 4.19 0.031 0.0479 0.0957 0.0621 0.145 0.0298 0.0479-0.031 0.0608-0.0957 0.0297-0.145-0.847-1.45-1.97-2.62-3.27-3.53-0.892-0.623-1.87-1.12-2.91-1.5-1.19-0.433-2.45-0.709-3.73-0.828-0.545-0.0504-1.09-0.0698-1.64-0.0582-0.728 0.0155-1.46 0.0841-2.18 0.202-1.08 0.177-2.14 0.46-3.16 0.839-0.772 0.288-1.51 0.632-2.22 1.03-1.7 0.965-3.16 2.22-4.22 3.7-0.0362 0.0453-0.0285 0.111 0.0155 0.147 0.0453 0.0362 0.111 0.0285 0.147-0.0168z"
            />
            <path
              d="m18 104c0.687-0.757 1.5-1.42 2.39-1.99 1.26-0.814 2.7-1.43 4.22-1.87 0.974-0.281 1.98-0.481 3-0.607 0.673-0.0815 1.35-0.129 2.03-0.147 0.68-0.0181 1.36-8e-3 2.03 0.044 1.02 0.0776 2.03 0.242 3 0.51 2.48 0.686 4.72 2.02 6.31 4.19 0.0323 0.0478 0.097 0.0621 0.145 0.0297 0.0479-0.031 0.0621-0.0957 0.0298-0.145-0.846-1.45-1.96-2.62-3.27-3.53-0.894-0.623-1.87-1.12-2.91-1.5-1.19-0.433-2.45-0.709-3.73-0.828-0.543-0.0504-1.09-0.0698-1.64-0.0582-0.728 0.0155-1.46 0.0841-2.18 0.202-1.08 0.177-2.14 0.46-3.16 0.839-0.772 0.288-1.51 0.632-2.21 1.03-1.7 0.965-3.16 2.22-4.22 3.7-0.0362 0.0453-0.0298 0.111 0.0155 0.147 0.0453 0.0362 0.11 0.0285 0.146-0.0168z"
            />
            <path
              d="m110.4 104c0.687-0.757 1.5-1.42 2.39-1.99 1.26-0.814 2.7-1.43 4.22-1.87 0.974-0.281 1.98-0.481 3-0.607 0.673-0.0815 1.35-0.129 2.03-0.147 0.68-0.0181 1.36-8e-3 2.03 0.044 1.02 0.0776 2.03 0.242 3 0.51 2.48 0.686 4.72 2.02 6.31 4.19 0.031 0.0478 0.0957 0.0621 0.145 0.0297 0.0479-0.031 0.0608-0.0957 0.0298-0.145-0.847-1.45-1.97-2.62-3.27-3.53-0.892-0.623-1.87-1.12-2.91-1.5-1.19-0.433-2.45-0.709-3.73-0.828-0.545-0.0504-1.09-0.0698-1.64-0.0582-0.728 0.0155-1.46 0.0841-2.18 0.202-1.08 0.177-2.14 0.46-3.16 0.839-0.772 0.288-1.51 0.632-2.22 1.03-1.7 0.965-3.16 2.22-4.22 3.7-0.0362 0.0453-0.0285 0.111 0.0155 0.147 0.0453 0.0362 0.111 0.0285 0.147-0.0168z"
            />
            <path
              d="m64 142c0.687-0.758 1.5-1.42 2.39-1.99 1.26-0.815 2.7-1.43 4.22-1.87 0.974-0.279 1.98-0.481 3-0.605 0.673-0.0828 1.35-0.129 2.03-0.147 0.679-0.0181 1.36-9e-3 2.03 0.0427 1.02 0.0789 2.03 0.243 3 0.511 2.48 0.686 4.72 2.02 6.31 4.19 0.031 0.0491 0.0957 0.0621 0.145 0.031 0.0479-0.0323 0.0608-0.097 0.0297-0.145-0.847-1.45-1.97-2.62-3.27-3.54-0.892-0.623-1.87-1.12-2.91-1.5-1.19-0.435-2.45-0.71-3.73-0.829-0.545-0.0504-1.09-0.0698-1.64-0.0569-0.728 0.0155-1.46 0.0841-2.18 0.202-1.08 0.177-2.14 0.459-3.16 0.838-0.772 0.29-1.51 0.632-2.22 1.03-1.7 0.965-3.16 2.22-4.22 3.7-0.0362 0.044-0.0285 0.11 0.0155 0.146 0.0453 0.0362 0.111 0.0284 0.147-0.0155z"
            />
          </g>
        </g>
      </svg>
    `}};Op=Tp([x(`wokwi-ir-remote`)],Op);var kp={w:16.178*T,h:23.482*T},Ap=.5,jp={x:kp.w+6,w:40*T*Ap,h:83.653*T*Ap},Mp=jp.x+jp.w,Np=Math.ceil(jp.h)+2,Pp=Np-kp.h;function Fp(){let e=w(`wokwi-ir-receiver`,{DAT:`DAT`,VCC:`VCC`,GND:`GND`});return Object.fromEntries(Object.entries(e).map(([e,t])=>[e,{x:t.x,y:t.y+Pp}]))}var Ip=e=>String(e.detail.key),Lp={geometry:()=>({width:Mp,height:Np,pins:Fp()}),Component({state:e,input:t}){let n=e?.lastCode;return(0,m.jsxs)(`div`,{style:{position:`relative`,width:Mp,height:Np},children:[(0,m.jsxs)(`svg`,{width:kp.w,height:Pp,style:{position:`absolute`,left:0,top:0},children:[(0,m.jsx)(`text`,{x:kp.w/2,y:Pp-22,fontSize:`7`,fill:`var(--ink-2)`,textAnchor:`middle`,children:e?.powered===!1?`未通电`:`键码`}),(0,m.jsx)(`text`,{x:kp.w/2,y:Pp-9,fontSize:`10`,fill:e?.sending?`#e5484d`:`var(--ink)`,textAnchor:`middle`,fontFamily:k,children:n==null?`--`:O(n)})]}),(0,m.jsx)(`div`,{style:{position:`absolute`,left:0,top:Pp},children:(0,m.jsx)(C,{tag:`wokwi-ir-receiver`,props:{}})}),(0,m.jsx)(`div`,{className:`canvas-ui`,title:`遥控器：运行时点按键，按住不放会发重复码`,style:{position:`absolute`,left:jp.x,top:0,transform:`scale(${Ap})`,transformOrigin:`0 0`},children:(0,m.jsx)(C,{tag:`wokwi-ir-remote`,props:{},events:{"button-press":e=>t({key:Ip(e),pressed:!0}),"button-release":e=>t({key:Ip(e),pressed:!1})}})})]})}},Rp=148,zp=118,Bp={x:6,y:22,w:136,h:84},Z={x:10,y:32,w:128,h:64},Vp=[`GND`,`VCC`,`SCL`,`SDA`],Hp=Object.fromEntries(Vp.map((e,t)=>[e,{x:Rp/2-14.4+t*9.6,y:4}])),Up=[10,13,18],Wp={white:[236,244,255],blue:[86,182,255],yellow:[255,212,70]};function Gp(e,t){return e===`yellow-blue`?t<16?Wp.yellow:Wp.blue:Wp[e]??Wp.white}function Kp(e,t){if(!e?.lit)return`off:${t}`;let n=2166136261;for(let t of e.image)n=Math.imul(n^t,16777619);return`${n}:${e.contrast}:${t}`}function qp(e,t,n){let r=e.getContext(`2d`);if(!r)return;let i=r.createImageData(Z.w,Z.h),a=.45+.55*((t?.contrast??127)/255);for(let e=0;e<Z.h;e++){let r=Gp(n,e).map((e,t)=>Math.round(Up[t]+(e-Up[t])*a));for(let n=0;n<Z.w;n++){let[a,o,s]=t?.lit&&t.image[(e>>3)*Z.w+n]>>(e&7)&1?r:Up,c=(e*Z.w+n)*4;i.data[c]=a,i.data[c+1]=o,i.data[c+2]=s,i.data[c+3]=255}}r.putImageData(i,0,0)}var Jp={geometry:()=>({width:Rp,height:zp,pins:Hp}),Component({part:e,state:t}){let n=String(e.props.color??`white`),r=(0,h.useRef)(null),i=(0,h.useRef)(``);(0,h.useEffect)(()=>{let e=Kp(t,n);r.current&&e!==i.current&&(i.current=e,qp(r.current,t,n))});let a=Number(e.props.address)===61?`0x3D`:`0x3C`;return(0,m.jsxs)(`div`,{style:{position:`relative`,width:Rp,height:zp},children:[(0,m.jsxs)(`svg`,{width:Rp,height:zp,viewBox:`0 0 ${Rp} ${zp}`,style:{display:`block`},children:[(0,m.jsx)(`rect`,{x:`0.5`,y:`0.5`,width:147,height:117,rx:`5`,fill:`#1d5fae`,stroke:`#174d8f`}),[[6,6],[142,6],[6,112],[142,112]].map(([e,t])=>(0,m.jsx)(`circle`,{cx:e,cy:t,r:`3.2`,fill:`#f4f1e8`,stroke:`#c9a94f`,strokeWidth:`1`},`${e},${t}`)),Vp.map(e=>(0,m.jsxs)(`g`,{children:[(0,m.jsx)(`circle`,{cx:Hp[e].x,cy:Hp[e].y,r:`2.6`,fill:`#c9a94f`}),(0,m.jsx)(`text`,{x:Hp[e].x,y:Hp[e].y+11,fontSize:`4.6`,fill:`#e8f1fb`,textAnchor:`middle`,fontFamily:k,children:e})]},e)),(0,m.jsx)(`rect`,{x:Bp.x,y:Bp.y,width:Bp.w,height:Bp.h,rx:`2`,fill:`#05070a`}),(0,m.jsx)(`rect`,{x:Bp.x+2,y:Bp.y+Bp.h-6,width:Bp.w-4,height:`4`,fill:`#11161d`}),(0,m.jsx)(`text`,{x:Rp/2,y:114,fontSize:`4.6`,fill:`#cfe0f5`,textAnchor:`middle`,fontFamily:k,children:t?.powered===!1?`未通电`:`OLED 128×64 · ${a}`})]}),(0,m.jsx)(`canvas`,{ref:r,width:Z.w,height:Z.h,style:{position:`absolute`,left:Z.x,top:Z.y,width:Z.w,height:Z.h,imageRendering:`pixelated`,pointerEvents:`none`}})]})}},Yp=e=>Number.isFinite(e)?Math.min(65535,Math.max(0,e)):300,Xp=84,Zp=10,Q={x:6,y:Zp,w:72,h:46},Qp=14,$p=Q.y+Q.h+4+Qp,em=[`VCC`,`GND`,`SCL`,`SDA`,`ADDR`],tm=Object.fromEntries(em.map((e,t)=>[e,{x:Xp/2-19.2+t*9.6,y:2}])),nm={x:44,w:38,y:Q.y+Q.h+4},rm=e=>e<0?0:Math.round(10**e),im=e=>e<=0?-.5:Math.log10(e);function am(e){return e<10?`夜晚`:e<500?`室内`:e<1e4?`阴天`:`晴天`}var om=e=>`${e} lx`,sm={geometry:()=>({width:Xp,height:$p,pins:tm}),Component({part:e,state:t,running:n,input:r,openEnv:i,setProp:a}){let o=Yp(Number(e.props.lux??300)),s=e=>a?.(`lux`,e),c=I(t,`lux`,o),l=Math.round(c.value),u=Xp/2;return(0,m.jsxs)(`div`,{style:{position:`relative`,width:Xp,height:$p},children:[(0,m.jsxs)(`svg`,{width:Xp,height:$p,viewBox:`0 0 ${Xp} ${$p}`,style:{display:`block`},children:[em.map(e=>(0,m.jsx)(`rect`,{x:tm[e].x-1,y:tm[e].y,width:`2`,height:Zp,fill:`var(--lead)`},e)),(0,m.jsx)(`rect`,{x:Q.x,y:Q.y,width:Q.w,height:Q.h,rx:`3`,fill:`#5b3fa8`}),em.map(e=>(0,m.jsx)(`text`,{x:tm[e].x,y:Q.y+6,fontSize:`3.2`,fill:`#efe9ff`,textAnchor:`middle`,fontFamily:k,children:e},e)),(0,m.jsx)(`rect`,{x:33,y:Q.y+11,width:`18`,height:`12`,rx:`1.5`,fill:`#1c1c1e`}),(0,m.jsx)(`rect`,{x:38,y:Q.y+14,width:`8`,height:`6`,rx:`1`,fill:t?.state===`measuring`?`#f5d76e`:`#8a7f5a`}),(0,m.jsx)(`text`,{x:u,y:Q.y+33,fontSize:`6`,fill:`#efe9ff`,textAnchor:`middle`,fontFamily:k,fontWeight:`600`,children:t?.powered===!1?`未通电`:`BH1750`}),(0,m.jsx)(`text`,{x:u,y:Q.y+41,fontSize:`4.6`,fill:`#d5cbf5`,textAnchor:`middle`,children:am(l)}),(0,m.jsxs)(`text`,{x:`2`,y:nm.y+Qp-4,fontSize:`6.5`,fill:`var(--ink)`,fontFamily:k,children:[(0,m.jsx)(L,{shown:c,open:i}),l>=1e4?`${Math.round(l/1e3)}k lx`:om(l)]}),(0,m.jsx)(Ni,{type:`bh1750`,x:Q.x+2,y:Q.y+10,state:t,running:n,input:r})]}),(0,m.jsx)(mc,{left:nm.x,top:nm.y+2,width:nm.w,min:-.5,max:4.8,step:.01,value:im(o),disabled:c.mode===`script`,title:`环境光照（对数刻度）：夜晚约 1 lx，室内约 300 lx，阴天约 1000 lx，晴天可达 50000 lx 以上`,onChange:e=>s(rm(e))})]})}},cm=(e,t,n,r)=>Number.isFinite(e)?Math.min(n,Math.max(t,e)):r,lm=e=>Math.round(e*10)/10,um=e=>lm(cm(e,-40,85,25)),dm=e=>lm(cm(e,0,100,50)),fm=80,pm=10,$={x:10,y:pm,w:60,h:40},mm=13,hm=$.y+$.h+4,gm=hm+26,_m=[`VCC`,`GND`,`SCL`,`SDA`],vm=Object.fromEntries(_m.map((e,t)=>[e,{x:fm/2-14.4+t*9.6,y:2}])),ym={x:40,w:38},bm={"stc89c52-min":be,"stc15f2k60s2-min":Ne,"arduino-uno":pn,led:yn,resistor:Cn,transistor:Rn,mosfet:Gn,button:Yn,"dip-switch-8":$n,seg7:lr,seg7x4:dr,"usb-serial":_r,hc05:Dr,esp8266:Pr,"ir-led":Rr,lcd1602:Jr,keypad4x4:ni,buzzer:Di,ds18b20:Wi,at24c02:Gi,ds1302:ua,"74hc595":fa,"74hc165":pa,"74hc164":ha,adc0832:ga,adc0809:_a,xpt2046:qa,dac0832:Ja,8255:Ya,"74hc573":Qa,"74hc138":eo,"74hc245":ro,uln2003:oo,stepper:To,"dc-motor":Ko,photogate:$o,heater:cs,"logic-analyzer":js,oscilloscope:qs,"grow-lamp":tc,"water-pump":sc,humidifier:pc,"soil-moisture":xc,"water-tank":Ec,"sound-sensor":Fc,mq2:Ic,"flame-sensor":Lc,ntc:Rc,pir:Bc,touch:Uc,"magnet-sensor":Gc,encoder:Zc,joystick:ol,potentiometer:hl,max6675:Sl,hx711:kl,door:Fl,l298n:Gl,car:au,l9110:mu,"encoder-motor":xu,speaker:Nu,battery:Bu,"drop-rig":Ku,"74hc02":Ju,pcf8591:Fa,relay:dd,ne555:Sd,"rgb-led":Td,"led-matrix":Rd,tm1637:qd,tm1638:cf,max7219:bf,lcd12864:Nf,st7735:Wf,servo:Yf,"hc-sr04":ap,dht11:Sp,"ir-receiver":Lp,ssd1306:Jp,bh1750:sm,aht20:{geometry:()=>({width:fm,height:gm,pins:vm}),Component({part:e,state:t,running:n,input:r,openEnv:i,setProp:a}){let o=um(Number(e.props.temperature??25)),s=dm(Number(e.props.humidity??50)),c=o,l=s,u=e=>a?.(`temperature`,e),d=e=>a?.(`humidity`,e),f=I(t,`temperature`,c),p=I(t,`humidity`,l),ee=fm/2;return(0,m.jsxs)(`div`,{style:{position:`relative`,width:fm,height:gm},children:[(0,m.jsxs)(`svg`,{width:fm,height:gm,viewBox:`0 0 ${fm} ${gm}`,style:{display:`block`},children:[_m.map(e=>(0,m.jsx)(`rect`,{x:vm[e].x-1,y:vm[e].y,width:`2`,height:pm,fill:`var(--lead)`},e)),(0,m.jsx)(`rect`,{x:$.x,y:$.y,width:$.w,height:$.h,rx:`3`,fill:`#1f6fb8`}),_m.map(e=>(0,m.jsx)(`text`,{x:vm[e].x,y:$.y+6,fontSize:`3.4`,fill:`#e8f1fb`,textAnchor:`middle`,fontFamily:k,children:e},e)),(0,m.jsx)(`rect`,{x:32,y:$.y+10,width:`16`,height:`16`,rx:`1.5`,fill:`#d9d4c7`}),(0,m.jsx)(`circle`,{cx:ee,cy:$.y+18,r:`3`,fill:t?.busy?`#3ee66b`:`#5f5a4f`}),(0,m.jsx)(`text`,{x:ee,y:$.y+35,fontSize:`6`,fill:`#e8f1fb`,textAnchor:`middle`,fontFamily:k,fontWeight:`600`,children:t?.powered===!1?`未通电`:`AHT20`}),(0,m.jsxs)(`text`,{x:`2`,y:hm+mm-3,fontSize:`6.5`,fill:`var(--ink)`,fontFamily:k,children:[(0,m.jsx)(L,{shown:f,open:i}),`${f.value.toFixed(1)}℃`]}),(0,m.jsxs)(`text`,{x:`2`,y:hm+26-3,fontSize:`6.5`,fill:`var(--ink)`,fontFamily:k,children:[(0,m.jsx)(L,{shown:p,open:i}),`${p.value.toFixed(1)}%`]}),(0,m.jsx)(Ni,{type:`aht20`,x:$.x+2,y:$.y+10,state:t,running:n,input:r})]}),(0,m.jsx)(mc,{left:ym.x,top:hm+2,width:ym.w,min:-40,max:85,step:.1,value:c,title:`环境温度（℃）`,disabled:f.mode===`script`,onChange:e=>u(um(e))}),(0,m.jsx)(mc,{left:ym.x,top:hm+2+mm,width:ym.w,min:0,max:100,step:.1,value:l,title:`环境湿度（%）`,disabled:p.mode===`script`,onChange:e=>d(dm(e))})]})}}},xm=new Map;function Sm(e){return e in bm}function Cm(e){let t=bm[e];if(t)return t;let n=xm.get(e);return n||(n=ue(te(e)??{type:e,label:e,category:`基础元件`,pins:[],defaultProps:{},props:[]}),xm.set(e,n)),n}export{fr as a,vi as i,Cm as n,gi as r,Sm as t};