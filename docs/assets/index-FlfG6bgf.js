(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(r){if(r.ep)return;r.ep=!0;const l=o(r);fetch(r.href,l)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const co=globalThis,vn=co.ShadowRoot&&(co.ShadyCSS===void 0||co.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,xn=Symbol(),_s=new WeakMap;let Vs=class{constructor(i,o,s){if(this._$cssResult$=!0,s!==xn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this.t=o}get styleSheet(){let i=this.o;const o=this.t;if(vn&&i===void 0){const s=o!==void 0&&o.length===1;s&&(i=_s.get(o)),i===void 0&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),s&&_s.set(o,i))}return i}toString(){return this.cssText}};const $r=h=>new Vs(typeof h=="string"?h:h+"",void 0,xn),zt=(h,...i)=>{const o=h.length===1?h[0]:i.reduce((s,r,l)=>s+(c=>{if(c._$cssResult$===!0)return c.cssText;if(typeof c=="number")return c;throw Error("Value passed to 'css' function must be a 'css' function result: "+c+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+h[l+1],h[0]);return new Vs(o,h,xn)},Pr=(h,i)=>{if(vn)h.adoptedStyleSheets=i.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet);else for(const o of i){const s=document.createElement("style"),r=co.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=o.cssText,h.appendChild(s)}},Fs=vn?h=>h:h=>h instanceof CSSStyleSheet?(i=>{let o="";for(const s of i.cssRules)o+=s.cssText;return $r(o)})(h):h;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Sr,defineProperty:Tr,getOwnPropertyDescriptor:Lr,getOwnPropertyNames:Cr,getOwnPropertySymbols:Er,getPrototypeOf:zr}=Object,ue=globalThis,ks=ue.trustedTypes,Ar=ks?ks.emptyScript:"",Xo=ue.reactiveElementPolyfillSupport,Ti=(h,i)=>h,ho={toAttribute(h,i){switch(i){case Boolean:h=h?Ar:null;break;case Object:case Array:h=h==null?h:JSON.stringify(h)}return h},fromAttribute(h,i){let o=h;switch(i){case Boolean:o=h!==null;break;case Number:o=h===null?null:Number(h);break;case Object:case Array:try{o=JSON.parse(h)}catch{o=null}}return o}},bn=(h,i)=>!Sr(h,i),$s={attribute:!0,type:String,converter:ho,reflect:!1,useDefault:!1,hasChanged:bn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ue.litPropertyMetadata??(ue.litPropertyMetadata=new WeakMap);let je=class extends HTMLElement{static addInitializer(i){this._$Ei(),(this.l??(this.l=[])).push(i)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(i,o=$s){if(o.state&&(o.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(i)&&((o=Object.create(o)).wrapped=!0),this.elementProperties.set(i,o),!o.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(i,s,o);r!==void 0&&Tr(this.prototype,i,r)}}static getPropertyDescriptor(i,o,s){const{get:r,set:l}=Lr(this.prototype,i)??{get(){return this[o]},set(c){this[o]=c}};return{get:r,set(c){const u=r==null?void 0:r.call(this);l==null||l.call(this,c),this.requestUpdate(i,u,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(i){return this.elementProperties.get(i)??$s}static _$Ei(){if(this.hasOwnProperty(Ti("elementProperties")))return;const i=zr(this);i.finalize(),i.l!==void 0&&(this.l=[...i.l]),this.elementProperties=new Map(i.elementProperties)}static finalize(){if(this.hasOwnProperty(Ti("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ti("properties"))){const o=this.properties,s=[...Cr(o),...Er(o)];for(const r of s)this.createProperty(r,o[r])}const i=this[Symbol.metadata];if(i!==null){const o=litPropertyMetadata.get(i);if(o!==void 0)for(const[s,r]of o)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[o,s]of this.elementProperties){const r=this._$Eu(o,s);r!==void 0&&this._$Eh.set(r,o)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(i){const o=[];if(Array.isArray(i)){const s=new Set(i.flat(1/0).reverse());for(const r of s)o.unshift(Fs(r))}else i!==void 0&&o.push(Fs(i));return o}static _$Eu(i,o){const s=o.attribute;return s===!1?void 0:typeof s=="string"?s:typeof i=="string"?i.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var i;this._$ES=new Promise(o=>this.enableUpdating=o),this._$AL=new Map,this._$E_(),this.requestUpdate(),(i=this.constructor.l)==null||i.forEach(o=>o(this))}addController(i){var o;(this._$EO??(this._$EO=new Set)).add(i),this.renderRoot!==void 0&&this.isConnected&&((o=i.hostConnected)==null||o.call(i))}removeController(i){var o;(o=this._$EO)==null||o.delete(i)}_$E_(){const i=new Map,o=this.constructor.elementProperties;for(const s of o.keys())this.hasOwnProperty(s)&&(i.set(s,this[s]),delete this[s]);i.size>0&&(this._$Ep=i)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Pr(i,this.constructor.elementStyles),i}connectedCallback(){var i;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(i=this._$EO)==null||i.forEach(o=>{var s;return(s=o.hostConnected)==null?void 0:s.call(o)})}enableUpdating(i){}disconnectedCallback(){var i;(i=this._$EO)==null||i.forEach(o=>{var s;return(s=o.hostDisconnected)==null?void 0:s.call(o)})}attributeChangedCallback(i,o,s){this._$AK(i,s)}_$ET(i,o){var l;const s=this.constructor.elementProperties.get(i),r=this.constructor._$Eu(i,s);if(r!==void 0&&s.reflect===!0){const c=(((l=s.converter)==null?void 0:l.toAttribute)!==void 0?s.converter:ho).toAttribute(o,s.type);this._$Em=i,c==null?this.removeAttribute(r):this.setAttribute(r,c),this._$Em=null}}_$AK(i,o){var l,c;const s=this.constructor,r=s._$Eh.get(i);if(r!==void 0&&this._$Em!==r){const u=s.getPropertyOptions(r),f=typeof u.converter=="function"?{fromAttribute:u.converter}:((l=u.converter)==null?void 0:l.fromAttribute)!==void 0?u.converter:ho;this._$Em=r;const v=f.fromAttribute(o,u.type);this[r]=v??((c=this._$Ej)==null?void 0:c.get(r))??v,this._$Em=null}}requestUpdate(i,o,s,r=!1,l){var c;if(i!==void 0){const u=this.constructor;if(r===!1&&(l=this[i]),s??(s=u.getPropertyOptions(i)),!((s.hasChanged??bn)(l,o)||s.useDefault&&s.reflect&&l===((c=this._$Ej)==null?void 0:c.get(i))&&!this.hasAttribute(u._$Eu(i,s))))return;this.C(i,o,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(i,o,{useDefault:s,reflect:r,wrapped:l},c){s&&!(this._$Ej??(this._$Ej=new Map)).has(i)&&(this._$Ej.set(i,c??o??this[i]),l!==!0||c!==void 0)||(this._$AL.has(i)||(this.hasUpdated||s||(o=void 0),this._$AL.set(i,o)),r===!0&&this._$Em!==i&&(this._$Eq??(this._$Eq=new Set)).add(i))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(o){Promise.reject(o)}const i=this.scheduleUpdate();return i!=null&&await i,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[l,c]of this._$Ep)this[l]=c;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[l,c]of r){const{wrapped:u}=c,f=this[l];u!==!0||this._$AL.has(l)||f===void 0||this.C(l,void 0,c,f)}}let i=!1;const o=this._$AL;try{i=this.shouldUpdate(o),i?(this.willUpdate(o),(s=this._$EO)==null||s.forEach(r=>{var l;return(l=r.hostUpdate)==null?void 0:l.call(r)}),this.update(o)):this._$EM()}catch(r){throw i=!1,this._$EM(),r}i&&this._$AE(o)}willUpdate(i){}_$AE(i){var o;(o=this._$EO)==null||o.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(i)),this.updated(i)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(i){return!0}update(i){this._$Eq&&(this._$Eq=this._$Eq.forEach(o=>this._$ET(o,this[o]))),this._$EM()}updated(i){}firstUpdated(i){}};je.elementStyles=[],je.shadowRootOptions={mode:"open"},je[Ti("elementProperties")]=new Map,je[Ti("finalized")]=new Map,Xo==null||Xo({ReactiveElement:je}),(ue.reactiveElementVersions??(ue.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Li=globalThis,Ps=h=>h,po=Li.trustedTypes,Ss=po?po.createPolicy("lit-html",{createHTML:h=>h}):void 0,Ys="$lit$",pe=`lit$${Math.random().toFixed(9).slice(2)}$`,Js="?"+pe,Mr=`<${Js}>`,Ee=document,Ci=()=>Ee.createComment(""),Ei=h=>h===null||typeof h!="object"&&typeof h!="function",yn=Array.isArray,Dr=h=>yn(h)||typeof(h==null?void 0:h[Symbol.iterator])=="function",tn=`[ 	
\f\r]`,$i=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ts=/-->/g,Ls=/>/g,Pe=RegExp(`>|${tn}(?:([^\\s"'>=/]+)(${tn}*=${tn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Cs=/'/g,Es=/"/g,Qs=/^(?:script|style|textarea|title)$/i,Br=h=>(i,...o)=>({_$litType$:h,strings:i,values:o}),b=Br(1),ri=Symbol.for("lit-noChange"),Et=Symbol.for("lit-nothing"),zs=new WeakMap,Te=Ee.createTreeWalker(Ee,129);function Xs(h,i){if(!yn(h)||!h.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ss!==void 0?Ss.createHTML(i):i}const Nr=(h,i)=>{const o=h.length-1,s=[];let r,l=i===2?"<svg>":i===3?"<math>":"",c=$i;for(let u=0;u<o;u++){const f=h[u];let v,w,x=-1,_=0;for(;_<f.length&&(c.lastIndex=_,w=c.exec(f),w!==null);)_=c.lastIndex,c===$i?w[1]==="!--"?c=Ts:w[1]!==void 0?c=Ls:w[2]!==void 0?(Qs.test(w[2])&&(r=RegExp("</"+w[2],"g")),c=Pe):w[3]!==void 0&&(c=Pe):c===Pe?w[0]===">"?(c=r??$i,x=-1):w[1]===void 0?x=-2:(x=c.lastIndex-w[2].length,v=w[1],c=w[3]===void 0?Pe:w[3]==='"'?Es:Cs):c===Es||c===Cs?c=Pe:c===Ts||c===Ls?c=$i:(c=Pe,r=void 0);const T=c===Pe&&h[u+1].startsWith("/>")?" ":"";l+=c===$i?f+Mr:x>=0?(s.push(v),f.slice(0,x)+Ys+f.slice(x)+pe+T):f+pe+(x===-2?u:T)}return[Xs(h,l+(h[o]||"<?>")+(i===2?"</svg>":i===3?"</math>":"")),s]};class zi{constructor({strings:i,_$litType$:o},s){let r;this.parts=[];let l=0,c=0;const u=i.length-1,f=this.parts,[v,w]=Nr(i,o);if(this.el=zi.createElement(v,s),Te.currentNode=this.el.content,o===2||o===3){const x=this.el.content.firstChild;x.replaceWith(...x.childNodes)}for(;(r=Te.nextNode())!==null&&f.length<u;){if(r.nodeType===1){if(r.hasAttributes())for(const x of r.getAttributeNames())if(x.endsWith(Ys)){const _=w[c++],T=r.getAttribute(x).split(pe),$=/([.?@])?(.*)/.exec(_);f.push({type:1,index:l,name:$[2],strings:T,ctor:$[1]==="."?Ir:$[1]==="?"?Rr:$[1]==="@"?Hr:mo}),r.removeAttribute(x)}else x.startsWith(pe)&&(f.push({type:6,index:l}),r.removeAttribute(x));if(Qs.test(r.tagName)){const x=r.textContent.split(pe),_=x.length-1;if(_>0){r.textContent=po?po.emptyScript:"";for(let T=0;T<_;T++)r.append(x[T],Ci()),Te.nextNode(),f.push({type:2,index:++l});r.append(x[_],Ci())}}}else if(r.nodeType===8)if(r.data===Js)f.push({type:2,index:l});else{let x=-1;for(;(x=r.data.indexOf(pe,x+1))!==-1;)f.push({type:7,index:l}),x+=pe.length-1}l++}}static createElement(i,o){const s=Ee.createElement("template");return s.innerHTML=i,s}}function li(h,i,o=h,s){var c,u;if(i===ri)return i;let r=s!==void 0?(c=o._$Co)==null?void 0:c[s]:o._$Cl;const l=Ei(i)?void 0:i._$litDirective$;return(r==null?void 0:r.constructor)!==l&&((u=r==null?void 0:r._$AO)==null||u.call(r,!1),l===void 0?r=void 0:(r=new l(h),r._$AT(h,o,s)),s!==void 0?(o._$Co??(o._$Co=[]))[s]=r:o._$Cl=r),r!==void 0&&(i=li(h,r._$AS(h,i.values),r,s)),i}class Or{constructor(i,o){this._$AV=[],this._$AN=void 0,this._$AD=i,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(i){const{el:{content:o},parts:s}=this._$AD,r=((i==null?void 0:i.creationScope)??Ee).importNode(o,!0);Te.currentNode=r;let l=Te.nextNode(),c=0,u=0,f=s[0];for(;f!==void 0;){if(c===f.index){let v;f.type===2?v=new Ni(l,l.nextSibling,this,i):f.type===1?v=new f.ctor(l,f.name,f.strings,this,i):f.type===6&&(v=new jr(l,this,i)),this._$AV.push(v),f=s[++u]}c!==(f==null?void 0:f.index)&&(l=Te.nextNode(),c++)}return Te.currentNode=Ee,r}p(i){let o=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(i,s,o),o+=s.strings.length-2):s._$AI(i[o])),o++}}class Ni{get _$AU(){var i;return((i=this._$AM)==null?void 0:i._$AU)??this._$Cv}constructor(i,o,s,r){this.type=2,this._$AH=Et,this._$AN=void 0,this._$AA=i,this._$AB=o,this._$AM=s,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let i=this._$AA.parentNode;const o=this._$AM;return o!==void 0&&(i==null?void 0:i.nodeType)===11&&(i=o.parentNode),i}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(i,o=this){i=li(this,i,o),Ei(i)?i===Et||i==null||i===""?(this._$AH!==Et&&this._$AR(),this._$AH=Et):i!==this._$AH&&i!==ri&&this._(i):i._$litType$!==void 0?this.$(i):i.nodeType!==void 0?this.T(i):Dr(i)?this.k(i):this._(i)}O(i){return this._$AA.parentNode.insertBefore(i,this._$AB)}T(i){this._$AH!==i&&(this._$AR(),this._$AH=this.O(i))}_(i){this._$AH!==Et&&Ei(this._$AH)?this._$AA.nextSibling.data=i:this.T(Ee.createTextNode(i)),this._$AH=i}$(i){var l;const{values:o,_$litType$:s}=i,r=typeof s=="number"?this._$AC(i):(s.el===void 0&&(s.el=zi.createElement(Xs(s.h,s.h[0]),this.options)),s);if(((l=this._$AH)==null?void 0:l._$AD)===r)this._$AH.p(o);else{const c=new Or(r,this),u=c.u(this.options);c.p(o),this.T(u),this._$AH=c}}_$AC(i){let o=zs.get(i.strings);return o===void 0&&zs.set(i.strings,o=new zi(i)),o}k(i){yn(this._$AH)||(this._$AH=[],this._$AR());const o=this._$AH;let s,r=0;for(const l of i)r===o.length?o.push(s=new Ni(this.O(Ci()),this.O(Ci()),this,this.options)):s=o[r],s._$AI(l),r++;r<o.length&&(this._$AR(s&&s._$AB.nextSibling,r),o.length=r)}_$AR(i=this._$AA.nextSibling,o){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,o);i!==this._$AB;){const r=Ps(i).nextSibling;Ps(i).remove(),i=r}}setConnected(i){var o;this._$AM===void 0&&(this._$Cv=i,(o=this._$AP)==null||o.call(this,i))}}class mo{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(i,o,s,r,l){this.type=1,this._$AH=Et,this._$AN=void 0,this.element=i,this.name=o,this._$AM=r,this.options=l,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=Et}_$AI(i,o=this,s,r){const l=this.strings;let c=!1;if(l===void 0)i=li(this,i,o,0),c=!Ei(i)||i!==this._$AH&&i!==ri,c&&(this._$AH=i);else{const u=i;let f,v;for(i=l[0],f=0;f<l.length-1;f++)v=li(this,u[s+f],o,f),v===ri&&(v=this._$AH[f]),c||(c=!Ei(v)||v!==this._$AH[f]),v===Et?i=Et:i!==Et&&(i+=(v??"")+l[f+1]),this._$AH[f]=v}c&&!r&&this.j(i)}j(i){i===Et?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,i??"")}}class Ir extends mo{constructor(){super(...arguments),this.type=3}j(i){this.element[this.name]=i===Et?void 0:i}}let Rr=class extends mo{constructor(){super(...arguments),this.type=4}j(i){this.element.toggleAttribute(this.name,!!i&&i!==Et)}};class Hr extends mo{constructor(i,o,s,r,l){super(i,o,s,r,l),this.type=5}_$AI(i,o=this){if((i=li(this,i,o,0)??Et)===ri)return;const s=this._$AH,r=i===Et&&s!==Et||i.capture!==s.capture||i.once!==s.once||i.passive!==s.passive,l=i!==Et&&(s===Et||r);r&&this.element.removeEventListener(this.name,this,s),l&&this.element.addEventListener(this.name,this,i),this._$AH=i}handleEvent(i){var o;typeof this._$AH=="function"?this._$AH.call(((o=this.options)==null?void 0:o.host)??this.element,i):this._$AH.handleEvent(i)}}class jr{constructor(i,o,s){this.element=i,this.type=6,this._$AN=void 0,this._$AM=o,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(i){li(this,i)}}const en=Li.litHtmlPolyfillSupport;en==null||en(zi,Ni),(Li.litHtmlVersions??(Li.litHtmlVersions=[])).push("3.3.3");const Wr=(h,i,o)=>{const s=(o==null?void 0:o.renderBefore)??i;let r=s._$litPart$;if(r===void 0){const l=(o==null?void 0:o.renderBefore)??null;s._$litPart$=r=new Ni(i.insertBefore(Ci(),l),l,void 0,o??{})}return r._$AI(h),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Le=globalThis;class yt extends je{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var o;const i=super.createRenderRoot();return(o=this.renderOptions).renderBefore??(o.renderBefore=i.firstChild),i}update(i){const o=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(i),this._$Do=Wr(o,this.renderRoot,this.renderOptions)}connectedCallback(){var i;super.connectedCallback(),(i=this._$Do)==null||i.setConnected(!0)}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this._$Do)==null||i.setConnected(!1)}render(){return ri}}var Ks;yt._$litElement$=!0,yt.finalized=!0,(Ks=Le.litElementHydrateSupport)==null||Ks.call(Le,{LitElement:yt});const on=Le.litElementPolyfillSupport;on==null||on({LitElement:yt});(Le.litElementVersions??(Le.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const At=h=>(i,o)=>{o!==void 0?o.addInitializer(()=>{customElements.define(h,i)}):customElements.define(h,i)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ur={attribute:!0,type:String,converter:ho,reflect:!1,hasChanged:bn},Zr=(h=Ur,i,o)=>{const{kind:s,metadata:r}=o;let l=globalThis.litPropertyMetadata.get(r);if(l===void 0&&globalThis.litPropertyMetadata.set(r,l=new Map),s==="setter"&&((h=Object.create(h)).wrapped=!0),l.set(o.name,h),s==="accessor"){const{name:c}=o;return{set(u){const f=i.get.call(this);i.set.call(this,u),this.requestUpdate(c,f,h,!0,u)},init(u){return u!==void 0&&this.C(c,void 0,h,u),u}}}if(s==="setter"){const{name:c}=o;return function(u){const f=this[c];i.call(this,u),this.requestUpdate(c,f,h,!0,u)}}throw Error("Unsupported decorator location: "+s)};function Oi(h){return(i,o)=>typeof o=="object"?Zr(h,i,o):((s,r,l)=>{const c=r.hasOwnProperty(l);return r.constructor.createProperty(l,s),c?Object.getOwnPropertyDescriptor(r,l):void 0})(h,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function z(h){return Oi({...h,state:!0,attribute:!1})}const Gr=[{id:"Zoomy",name:"Zoomy",nameKo:"우다다"},{id:"Regal",name:"Regal",nameKo:"도도함"},{id:"Guilty",name:"Guilty",nameKo:"눈치봄"},{id:"Unbothered",name:"Unbothered",nameKo:"무덤덤"},{id:"Feral",name:"Feral",nameKo:"천방지축"},{id:"Happy",name:"Happy",nameKo:"행복함"},{id:"Calm",name:"Calm",nameKo:"차분함"}],qr={Zoomy:"우다다",Regal:"도도함",Guilty:"눈치봄",Unbothered:"무덤덤",Feral:"천방지축",Happy:"행복함",Calm:"차분함"},Kr={en:{appName:"Dooty",tagline:"Track your pet’s daily potty, walks, meals, and health.",nav:{today:"Today",map:"Map",analytics:"Analytics",settings:"Settings",import:"Import"},events:{poop:{name:"Poop",action:"Log Poop",desc:"Bathroom break"},pee:{name:"Pee",action:"Log Pee",desc:"Bathroom break"},walk:{name:"Walk",action:"Log Walk",desc:"Outdoor exercise"},food:{name:"Food",action:"Log Food",desc:"Meals & kibble"},water:{name:"Water",action:"Log Water",desc:"Fresh hydration"},medicine:{name:"Medicine",action:"Log Medicine",desc:"Pills & treatments"},grooming:{name:"Grooming",action:"Log Grooming",desc:"Bath & brushing"},playing:{name:"Playing",action:"Log Play",desc:"Fetch & fun"},vomit:{name:"Vomit",action:"Log Vomit",desc:"Upset stomach"},weight:{name:"Weight",action:"Log Weight",desc:"Body mass tracking"},vet:{name:"Vet visit",action:"Log Vet Visit",desc:"Appointments & checkups"},symptom:{name:"Symptom",action:"Log Symptom",desc:"Health anomalies & issues"},nap:{name:"Nap / Sleep",action:"Log Nap",desc:"Sleep & rest"},training:{name:"Training",action:"Log Training",desc:"Commands & practice"}},streak:{badge:h=>`${h} DAY STREAK`,subtitle:"Keep logging daily to build your pet’s routine!"},home:{greeting:h=>`Hey, ${h}! 🐾`,vibeLine:"Ready for another great day together.",todayStats:"Today’s Log",quickLog:"Quick Log",recentActivity:"Recent Timeline",noEventsToday:"No logs yet today!",tapToLogFirst:"Tap any icon above to record your first entry.",offlineMode:"Offline Mode",pendingSync:h=>`${h} pending offline sync`},logger:{title:h=>`Log ${h}`,time:"Time of Event",notesPlaceholder:"Add optional details (e.g. consistency, brand, dosage)...",locationTag:"Location",addLocation:"Add GPS Coordinates",save:"Save Log",cancel:"Cancel",saving:"Saving...",loggedSuccess:h=>`${h} logged successfully!`},analytics:{title:"Pet Analytics & Habits",subtitle:"Understand your pet’s daily rhythm and health trends",clock24hTitle:"24-Hour Potty Clock",clock24hDesc:"Most frequent hours of the day for bathroom breaks",frequencyTitle:"Activity Breakdown",periods:{days7:"Last 7 Days",days30:"Last 30 Days",allTime:"All Time"},healthWatch:"Health Watch",vomitCount:h=>`${h} vomiting incidents recorded`,medCount:h=>`${h} medications administered`,daysNoPoop:h=>`${h} days without poop recorded`,streakTitle:"Consistency Streak",totalLogs:"Total Logged Events"},map:{title:"Potty & Walk Map",startWalk:"Start Walk",pauseWalk:"Pause Walk",resumeWalk:"Resume Walk",stopWalk:"Finish Walk",distance:"Distance",duration:"Duration",logPoopOnWalk:"💩 Poop Here",logPeeOnWalk:"💧 Pee Here",noLocationsYet:"No geo-tagged events yet. Start a walk or tag your next log!"},importer:{title:"Import History",subtitle:"From a spreadsheet, Notion, or another tracker",dropText:"Drop your CSV or JSON file here, or click to browse",selectFile:"Select File",dryRunTitle:"Import Preview (Dry-Run)",totalEvents:"Total Records Detected",targetPet:"Target Pet",dateSpan:"Date Span",confirmImport:"Import All Events",importing:"Importing records...",success:h=>`Successfully imported ${h} historical events!`},settings:{back:"Today",title:"Settings",signedInPlan:"Signed in · free plan",language:"Language",english:"English",korean:"한국어",household:"Household",householdCount:(h,i)=>`${h} ${h===1?"person":"people"} · ${i} ${i===1?"pet":"pets"}`,invite:"Invite",people:"People",inviteSomeone:"+ Invite someone",pets:"Pets",addPet:"+ Add a pet",nudges:"Nudges",walkReminders:"Walk reminders",walkRemindersSub:"Nudge me at the usual times",weeklyDigest:"Weekly digest",weeklyDigestSub:"Sunday night, one card",unusualGap:"Unusual gap alert",unusualGapSub:"If nothing for 20 hours",vetShare:"Share with my vet",vetShareSub:"Read-only link to the summary",yourData:"Your data",importCsv:"Import from CSV",importCsvSub:"From a spreadsheet, Notion, or another tracker",exportCsv:"Export all data (CSV)",exportCsvSub:"Everything, including photos",signOut:"Sign out",version:"Dooty v0.4 · installable PWA",logsUnit:"logs",activeHousehold:"Active Household",switchHousehold:"Switch Household",members:"Family Members",invitePartner:"Invite Partner / Roommate",inviteDesc:"Share this code so they can view and log for this pet from their phone:",copyCode:"Copy Invite Code",copied:"Copied!",joinHousehold:"Join Existing Household",joinAnotherHousehold:"+ Join Another Household",enterCode:"Enter 6-digit Invite Code",joinBtn:"Join Household",currentPet:"Pet Profile",syncStatus:"Cloud Sync Status",online:"Connected & Live",offline:"Offline (Queued locally)",signedOutSuccess:"Signed out. See you next walk!"},invite:{back:"Settings",title:"Invite to",subtitle:"Share the code below. It works once, then it's dead.",theyJoinAs:"They join as",roles:{full:{name:"Full member",sub:"Log, edit, see everything"},logOnly:{name:"Log only",sub:"Can add events, cannot see history"}},inviteCode:"Invite code",expiresIn7Days:"Expires in 7 days",copyCode:"Copy code",shareLink:"Share link",pending:"Pending",revoke:"Revoke",pendingHelp:"Anyone with the code can log events. Only you can rename the household or remove people.",codeCopied:"Code copied",codeCopiedSub:h=>`${h} · expires in 7 days`,inviteRevoked:"Invite revoked",inviteRevokedSub:h=>`${h} will no longer work.`},auth:{welcomeTitle:"Dooty",welcomeSubtitle:"Poop, pills and everything else. One tap, then get on with the walk.",tagline:"Simple, tactile pet habit tracking for your family.",tabLogIn:"Log In",tabSignUp:"Sign Up",emailLabel:"Email",emailPlaceholder:"sam@jellyfish.dog",passwordLabel:"Password",passwordPlaceholder:"••••••••",logInBtn:"Log in",loggingIn:"Logging in...",forgotPassword:"Forgot your password?",or:"OR",googleBtn:"Continue with Google",newHere:"New here?",makeAccount:"Make an account",gotInviteCode:"Got an invite code?",show:"Show",hide:"Hide",signupStep1:{back:"Back",stepCount:"1 / 2",title:"Let's get you set up",subtitle:"Takes about forty seconds. Faster than the average walk.",yourName:"Your name",yourNamePlaceholder:"Sam",email:"Email",emailPlaceholder:"sam@jellyfish.dog",password:"Password",passwordPlaceholder:"••••••••",weak:"Weak",good:"Good",strong:"Strong",nextTheDog:"Next: the dog",disclaimer:"By continuing you agree we will store an unreasonable amount of data about your dog’s bowels."},signupStep2:{back:"Back",stepCount:"2 / 2",title:"Who are we tracking?",subtitle:"You can add more dogs later. We will not judge you for it.",photo:"photo",name:"Name",namePlaceholder:"Nacho",householdName:"Household name",householdNamePlaceholder:"The Nacho Household",householdHelp:"Everyone you invite joins this household and can log for any pet in it.",size:"Size",sizes:{S:{label:"S",kg:"– 10kg"},M:{label:"M",kg:"10–20"},L:{label:"L",kg:"20–35"},XL:{label:"XL",kg:"35kg +"}},whatTrack:"What should we track?",trackingOptions:{poop:"Poop",pee:"Pee",vomit:"Vomit",meds:"Medicine",weight:"Weight",walk:"Walks",vet:"Vet visits",symptom:"Symptoms"},startTracking:"Start tracking",alreadyTracking:"Already tracking somewhere else?",importHistory:"Import your history"},joinStep1:{back:"Back",title:"Join a household",subtitle:"Whoever set it up can find the code in Settings, under People.",enterCode:"Enter the code",continueBtn:"Continue",perksTitle:"What you’ll be able to do",perks:["Log poops, walks, meds and everything else","See the streak, the map and the stats","Get the same reminders as everyone else"]},joinStep2:{back:"Code",codeAccepted:"Code accepted · joining",summarySubtitle:(h,i)=>`${h} · you'll be ${i}`,title:"Tell them who you are",subtitle:"Your name shows up next to every event you log, so pick what the household will recognise.",yourName:"Your name",yourNamePlaceholder:"Dan",email:"Email",emailPlaceholder:"dan@thewalks.co",password:"Password",passwordPlaceholder:"••••••••",howTheySeeYou:"How they’ll see you",joinHouseholdBtn:"Join the household",footerDisclaimer:"The owner will be told you joined. You can leave the household at any time."},signUpBtn:"Create Account",signingUp:"Creating account...",signUpModeCreate:"✨ Create New Household",signUpModeJoin:"🔑 Join with Invite Code",noAccountPrompt:"Don’t have an account? Sign Up",hasAccountPrompt:"Already have an account? Log In",ownerNameLabel:"Your Name",ownerNamePlaceholder:"e.g. Reynold",householdNameLabel:"Household Name",householdNamePlaceholder:"e.g. Happy Paws Family",petNameLabel:"Pet Name",petNamePlaceholder:"e.g. Jjols",speciesLabel:"Pet Type",speciesDog:"Dog 🐶",speciesCat:"Cat 🐱",speciesOther:"Other 🐾",breedLabel:"Breed (Optional)",breedPlaceholder:"e.g. Golden Retriever",inviteCodeLabel:"6-Digit Invite Code",inviteCodePlaceholder:"e.g. AB12CD",inviteCodeHint:"Ask your household owner to generate an invite code from their Settings > Family Members tab.",yourNameLabel:"Your Name",yourNamePlaceholder:"e.g. Alex, Sarah",yourRoleLabel:"Role / Relationship (Optional)",yourRolePlaceholder:"e.g. Partner, Mom, Dog Walker",errors:{emailRequired:"Please enter your email address",invalidEmail:"Please enter a valid email address",passwordRequired:"Please enter your password",passwordTooShort:"Password must be at least 6 characters",logInFailed:"Invalid email or password",signUpFailed:"Could not complete sign up. Please try again.",ownerNameRequired:"Please enter your name",householdNameRequired:"Please enter a household name",petNameRequired:"Please enter your pet’s name",inviteCodeRequired:"Please enter a 6-digit invite code",yourNameRequired:"Please enter your name",joinFailed:"Invalid invite code or server error",createFailed:"Failed to create household. Please check connection."}}},ko:{appName:"두티 (Dooty)",tagline:"반려견의 배변, 산책, 식사, 건강을 쉽고 재미있게 기록하세요.",nav:{today:"오늘",map:"지도",analytics:"통계",settings:"설정",import:"불러오기"},events:{poop:{name:"응가",action:"응가 기록",desc:"배변 활동"},pee:{name:"쉬야",action:"쉬야 기록",desc:"배뇨 활동"},walk:{name:"산책",action:"산책 기록",desc:"야외 산책"},food:{name:"밥/사료",action:"식사 기록",desc:"사료 및 간식"},water:{name:"물",action:"물 마심",desc:"수분 섭취"},medicine:{name:"약",action:"투약 기록",desc:"영양제 및 처방약"},grooming:{name:"목욕/미용",action:"목욕/미용",desc:"위생 케어"},playing:{name:"놀이",action:"놀이 기록",desc:"터그놀이 & 공놀이"},vomit:{name:"토/구토",action:"구토 기록",desc:"소화 이상"},weight:{name:"몸무게",action:"몸무게 기록",desc:"체중 변화 측정"},vet:{name:"병원 진료",action:"진료 기록",desc:"정기 검진 및 진료"},symptom:{name:"증상 메모",action:"증상 기록",desc:"이상 징후 기록"},nap:{name:"수면/낮잠",action:"낮잠 기록",desc:"수면 및 휴식"},training:{name:"훈련/교육",action:"훈련 기록",desc:"훈련 및 기본 교육"}},streak:{badge:h=>`${h}일 연속 기록 중!`,subtitle:"매일 꾸준히 기록해서 건강한 루틴을 만들어요!"},home:{greeting:h=>`안녕, ${h}! 🐾`,vibeLine:"오늘도 건강하고 행복한 하루 보내요.",todayStats:"오늘의 기록",quickLog:"빠른 기록",recentActivity:"최근 활동 타임라인",noEventsToday:"오늘 아직 등록된 기록이 없어요!",tapToLogFirst:"위 아이콘을 눌러 첫 번째 활동을 기록해보세요.",offlineMode:"오프라인 모드",pendingSync:h=>`${h}개 항목 동기화 대기 중`},logger:{title:h=>`${h} 기록하기`,time:"기록 시간",notesPlaceholder:"메모를 입력하세요 (변 상태, 사료량, 약 종류 등)...",locationTag:"위치 정보",addLocation:"현재 GPS 위치 추가",save:"저장하기",cancel:"취소",saving:"저장 중...",loggedSuccess:h=>`${h} 기록이 저장되었습니다!`},analytics:{title:"배변 및 활동 분석",subtitle:"반려견의 일일 생활 패턴과 건강 추이를 확인하세요",clock24hTitle:"24시간 배변 시계",clock24hDesc:"하루 중 가장 응가/쉬야를 많이 하는 시간대",frequencyTitle:"활동별 통계",periods:{days7:"최근 7일",days30:"최근 30일",allTime:"전체 기간"},healthWatch:"건강 모니터링",vomitCount:h=>`최근 구토 ${h}회 발생`,medCount:h=>`최근 투약 ${h}회 완료`,daysNoPoop:h=>`응가 미기록 ${h}일째`,streakTitle:"연속 기록 스트릭",totalLogs:"총 기록 건수"},map:{title:"배변 & 산책 지도",startWalk:"산책 시작",pauseWalk:"일시정지",resumeWalk:"산책 재개",stopWalk:"산책 종료",distance:"산책 거리",duration:"산책 시간",logPoopOnWalk:"💩 여기서 응가",logPeeOnWalk:"💧 여기서 쉬야",noLocationsYet:"위치 기록이 아직 없습니다. 산책을 시작하거나 위치를 태그해보세요!"},importer:{title:"데이터 불러오기",subtitle:"스프레드시트, 노션, 다른 트래커에서 데이터 이전",dropText:"CSV 또는 JSON 파일을 여기에 끌어다 놓거나 클릭하여 선택하세요",selectFile:"파일 선택",dryRunTitle:"가져오기 미리보기 (검증)",totalEvents:"총 감지된 기록 수",targetPet:"대상 반려견",dateSpan:"기록 기간",confirmImport:"데이터 일괄 가져오기",importing:"데이터를 가져오는 중...",success:h=>`${h}개의 과거 기록을 성공적으로 가져왔습니다!`},settings:{back:"오늘",title:"설정",signedInPlan:"로그인됨 · 무료 플랜",language:"언어",english:"English",korean:"한국어",household:"가족 공간",householdCount:(h,i)=>`${h}명 · 반려견 ${i}마리`,invite:"초대",people:"구성원",inviteSomeone:"+ 초대하기",pets:"반려동물",addPet:"+ 반려동물 추가",nudges:"알림 설정",walkReminders:"산책 알림",walkRemindersSub:"평소 산책 시간에 알려드려요",weeklyDigest:"주간 요약",weeklyDigestSub:"일요일 밤 한 장의 요약 카드",unusualGap:"이상 공백 알림",unusualGapSub:"20시간 동안 기록이 없으면 알림",vetShare:"수의사와 공유",vetShareSub:"수의사용 읽기 전용 요약 링크",yourData:"내 데이터",importCsv:"CSV에서 가져오기",importCsvSub:"스프레드시트, 노션, 다른 트래커에서 이전",exportCsv:"전체 데이터 내보내기 (CSV)",exportCsvSub:"사진을 포함한 모든 기록 다운로드",signOut:"로그아웃",version:"Dooty v0.4 · 설치형 PWA",logsUnit:"회",activeHousehold:"현재 가족 공간",switchHousehold:"가족 공간 변경",members:"참여 멤버",invitePartner:"가족/동거인 초대하기",inviteDesc:"이 초대 코드를 공유하면 가족도 함께 기록을 확인하고 추가할 수 있습니다:",copyCode:"초대 코드 복사",copied:"복사 완료!",joinHousehold:"기존 가족에 참여하기",joinAnotherHousehold:"+ 다른 가족 공간 참가하기",enterCode:"6자리 초대 코드 입력",joinBtn:"가족 참여",currentPet:"반려견 프로필",syncStatus:"클라우드 동기화 상태",online:"정상 연결됨",offline:"오프라인 (로컬 저장 중)",signedOutSuccess:"로그아웃되었습니다. 다음 산책 때 만나요!"},invite:{back:"설정",title:"초대하기",subtitle:"아래 코드를 공유하세요. 한 번 사용하면 만료됩니다.",theyJoinAs:"초대 권한",roles:{full:{name:"전체 멤버",sub:"기록, 수정, 전체 내역 확인 가능"},logOnly:{name:"기록 전용",sub:"기록 추가만 가능, 과거 내역 열람 불가"}},inviteCode:"초대 코드",expiresIn7Days:"7일 후 만료",copyCode:"코드 복사",shareLink:"링크 공유",pending:"대기 중인 초대",revoke:"취소",pendingHelp:"코드를 가진 사람은 누구나 기록할 수 있습니다. 가족 관리자만 이름을 바꾸거나 구성원을 삭제할 수 있습니다.",codeCopied:"코드 복사 완료",codeCopiedSub:h=>`${h} · 7일 후 만료`,inviteRevoked:"초대 취소됨",inviteRevokedSub:h=>`${h} 코드는 더 이상 사용할 수 없습니다.`},auth:{welcomeTitle:"Dooty",welcomeSubtitle:"응가, 약, 그 외 모든 것. 한 번만 누르고 산책을 계속하세요.",tagline:"직관적이고 재미있는 우리 가족 펫 다이어리",tabLogIn:"로그인",tabSignUp:"회원가입",emailLabel:"이메일",emailPlaceholder:"sam@jellyfish.dog",passwordLabel:"비밀번호",passwordPlaceholder:"••••••••",logInBtn:"로그인",loggingIn:"로그인 중...",forgotPassword:"비밀번호를 잊으셨나요?",or:"또는",googleBtn:"Google로 계속하기",newHere:"처음이신가요?",makeAccount:"계정 만들기",gotInviteCode:"초대 코드가 있나요?",show:"보기",hide:"숨기기",signupStep1:{back:"뒤로",stepCount:"1 / 2",title:"시작해 볼까요",subtitle:"40초쯤 걸립니다. 평균 산책보다 빠릅니다.",yourName:"이름",yourNamePlaceholder:"Sam",email:"이메일",emailPlaceholder:"sam@jellyfish.dog",password:"비밀번호",passwordPlaceholder:"••••••••",weak:"취약",good:"적정",strong:"안전",nextTheDog:"다음: 강아지",disclaimer:"계속 진행하면 강아지의 배변에 관한 상당한 양의 데이터를 저장하는 데 동의하게 됩니다."},signupStep2:{back:"뒤로",stepCount:"2 / 2",title:"누구를 추적할까요?",subtitle:"나중에 강아지를 더 추가할 수 있습니다.",photo:"사진",name:"이름",namePlaceholder:"나초 (Nacho)",householdName:"가족(Household) 이름",householdNamePlaceholder:"나초네 가족",householdHelp:"초대한 모든 사람이 이 가족에 합류하여 모든 반려동물에 대해 기록할 수 있습니다.",size:"크기",sizes:{S:{label:"S",kg:"– 10kg"},M:{label:"M",kg:"10–20"},L:{label:"L",kg:"20–35"},XL:{label:"XL",kg:"35kg +"}},whatTrack:"어떤 항목을 추적할까요?",trackingOptions:{poop:"응가",pee:"쉬야",vomit:"구토",meds:"약",weight:"체중",walk:"산책",vet:"병원 진료",symptom:"이상 증상"},startTracking:"추적 시작하기",alreadyTracking:"다른 곳에서 이미 추적 중이신가요?",importHistory:"기록 가져오기"},joinStep1:{back:"뒤로",title:"가족에 참여하기",subtitle:"설정한 사람은 설정의 구성원에서 코드를 찾을 수 있습니다.",enterCode:"코드 입력",continueBtn:"계속",perksTitle:"할 수 있는 일",perks:["응가, 산책, 약 및 기타 모든 활동 기록","연속 스트릭, 산책 지도, 통계 확인","가족 구성원과 동일한 실시간 알림 수신"]},joinStep2:{back:"코드",codeAccepted:"코드 승인됨 · 참여 중",summarySubtitle:(h,i)=>`${h} · 역할: ${i}`,title:"자신을 알려주세요",subtitle:"내가 기록한 모든 활동 옆에 내 이름이 표시되므로 가족이 알아볼 수 있는 이름을 선택하세요.",yourName:"이름",yourNamePlaceholder:"민지 (Dan)",email:"이메일",emailPlaceholder:"dan@thewalks.co",password:"비밀번호",passwordPlaceholder:"••••••••",howTheySeeYou:"가족에게 표시될 호칭",joinHouseholdBtn:"가족에 참여하기",footerDisclaimer:"가족 관리자에게 참여 알림이 전송됩니다. 언제든지 가족에서 나갈 수 있습니다."},signUpBtn:"회원가입 완료",signingUp:"가입 처리 중...",signUpModeCreate:"✨ 새 가족 공간 만들기",signUpModeJoin:"🔑 초대 코드로 참여하기",noAccountPrompt:"계정이 없으신가요? 회원가입",hasAccountPrompt:"이미 계정이 있으신가요? 로그인",ownerNameLabel:"보호자 이름",ownerNamePlaceholder:"예: 레이놀드",householdNameLabel:"가족(Household) 이름",householdNamePlaceholder:"예: 우리집 강아지네",petNameLabel:"반려동물 이름",petNamePlaceholder:"예: 쪼올스",speciesLabel:"종류",speciesDog:"강아지 🐶",speciesCat:"고양이 🐱",speciesOther:"기타 🐾",breedLabel:"품종 (선택)",breedPlaceholder:"예: 골든 리트리버",inviteCodeLabel:"6자리 초대 코드",inviteCodePlaceholder:"예: AB12CD",inviteCodeHint:"가족 관리자의 [설정 > 가족 멤버]에서 생성한 6자리 초대 코드를 입력하세요.",yourNameLabel:"내 이름",yourNamePlaceholder:"예: 민지, 준호",yourRoleLabel:"역할 / 호칭 (선택)",yourRolePlaceholder:"예: 엄마, 아빠, 산책도우미, 룸메이트",errors:{emailRequired:"이메일 주소를 입력해주세요",invalidEmail:"올바른 이메일 형식을 입력해주세요",passwordRequired:"비밀번호를 입력해주세요",passwordTooShort:"비밀번호는 6자 이상이어야 합니다",logInFailed:"이메일 또는 비밀번호가 올바르지 않습니다",signUpFailed:"회원가입에 실패했습니다. 다시 시도해주세요.",ownerNameRequired:"보호자 이름을 입력해주세요",householdNameRequired:"가족 이름을 입력해주세요",petNameRequired:"반려동물 이름을 입력해주세요",inviteCodeRequired:"6자리 초대 코드를 입력해주세요",yourNameRequired:"이름을 입력해주세요",joinFailed:"유효하지 않은 초대 코드이거나 서버 오류가 발생했습니다",createFailed:"가족 생성에 실패했습니다. 네트워크를 확인해주세요."}}}};function uo(h,i,o){if(!h)return o?`${{poop:"응가",pee:"쉬야",walk:"산책",food:"밥/사료",water:"물",medicine:"약/영양제",grooming:"목욕/미용",playing:"놀이",vomit:"구토",weight:"몸무게",vet:"병원 진료",symptom:"증상 메모",nap:"수면/낮잠",training:"훈련/교육"}[i]||i} · 기록됨`:`${i.toUpperCase()} · Logged`;if(o){let s=h;return s=s.replace(/\bZoomy\b/g,"우다다"),s=s.replace(/\bRegal\b/g,"도도함"),s=s.replace(/\bGuilty\b/g,"눈치봄"),s=s.replace(/\bUnbothered\b/g,"무덤덤"),s=s.replace(/\bFeral\b/g,"천방지축"),s=s.replace(/\bHappy\b/g,"행복함"),s=s.replace(/\bCalm\b/g,"차분함"),s=s.replace(/^Type\s+(\d+)/,"응가 $1단계"),s=s.replace(/^Pee\b/,"쉬야"),s=s.replace(/^Vomit\s+·\s+Type\s+(\d+)/,"구토 · $1단계"),s=s.replace(/^Vomit\b/,"구토"),s=s.replace(/^Walk\b/,"산책"),s=s.replace(/^Meal:\s*/,"식사: "),s=s.replace(/^Vet visit:\s*/,"병원 진료: "),s=s.replace(/^Symptom:\s*/,"증상: "),s=s.replace(/^Weigh-in:\s*/,"체중 측정: "),s=s.replace(/hard pellets/g,"단단한 토끼똥"),s=s.replace(/lumpy log/g,"울퉁불퉁한 변"),s=s.replace(/cracked log/g,"약간 갈라진 변"),s=s.replace(/textbook — the dream/g,"완벽한 황금변 (최고)"),s=s.replace(/soft blobs/g,"무른 덩어리변"),s=s.replace(/mushy/g,"형태 없는 묽은변"),s=s.replace(/liquid/g,"설사/수분성 액체"),s=s.replace(/Annual check-up/g,"정기 검진"),s=s.replace(/Vaccination booster/g,"예방 접종"),s=s.replace(/Loose stool consult/g,"배변/설사 진료"),s=s.replace(/Dental scaling/g,"치과/스케일링"),s=s.replace(/Medication renewal/g,"처방약 재발급"),s=s.replace(/Follow-up exam/g,"재진/경과 관찰"),s=s.replace(/Itch \/ Scratch/g,"가려움 / 긁음"),s=s.replace(/Limping \/ Joint/g,"절뚝임 / 관절"),s=s.replace(/Lethargic \/ Low energy/g,"기력 저하"),s=s.replace(/Coughing \/ Reverse sneeze/g,"기침 / 역재채기"),s=s.replace(/Loss of Appetite/g,"식욕 부진"),s=s.replace(/Skin redness \/ Rash/g,"피부 발진 / 붉어짐"),s=s.replace(/Ear shaking/g,"귀 털기 / 귓병"),s=s.replace(/0\.5 cup/g,"0.5 컵"),s=s.replace(/1\.0 cup/g,"1.0 컵"),s=s.replace(/1\.5 cups/g,"1.5 컵"),s=s.replace(/2\.0 cups/g,"2.0 컵"),s=s.replace(/Full bowl/g,"한 그릇 가득"),s=s.replace(/Special treats/g,"특별 간식"),s}else{let s=h;return s=s.replace(/우다다/g,"Zoomy"),s=s.replace(/도도함/g,"Regal"),s=s.replace(/눈치봄/g,"Guilty"),s=s.replace(/무덤덤/g,"Unbothered"),s=s.replace(/천방지축/g,"Feral"),s=s.replace(/행복함/g,"Happy"),s=s.replace(/차분함/g,"Calm"),s=s.replace(/^응가\s+(\d+)단계/,"Type $1"),s=s.replace(/^쉬야\b/,"Pee"),s=s.replace(/^구토\s+·\s+(\d+)단계/,"Vomit · Type $1"),s=s.replace(/^구토\b/,"Vomit"),s=s.replace(/^산책\b/,"Walk"),s=s.replace(/^식사:\s*/,"Meal: "),s=s.replace(/^병원 진료:\s*/,"Vet visit: "),s=s.replace(/^증상:\s*/,"Symptom: "),s=s.replace(/^체중 측정:\s*/,"Weigh-in: "),s=s.replace(/단단한 토끼똥/g,"hard pellets"),s=s.replace(/울퉁불퉁한 변/g,"lumpy log"),s=s.replace(/약간 갈라진 변/g,"cracked log"),s=s.replace(/완벽한 황금변 \(최고\)/g,"textbook — the dream"),s=s.replace(/무른 덩어리변/g,"soft blobs"),s=s.replace(/형태 없는 묽은변/g,"mushy"),s=s.replace(/설사\/수분성 액체/g,"liquid"),s}}function Vr(h){const i=[];let o=[],s="",r=!1;for(let l=0;l<h.length;l++){const c=h[l],u=h[l+1];r?c==='"'?u==='"'?(s+='"',l++):r=!1:s+=c:c==='"'?r=!0:c===","?(o.push(s),s=""):c==="\r"?(u===`
`&&l++,o.push(s),i.push(o),o=[],s=""):c===`
`?(o.push(s),i.push(o),o=[],s=""):s+=c}return(s.length>0||o.length>0)&&(o.push(s),i.push(o)),i}function Ii(h){const i=(h||"").trim(),o=i.toLowerCase();return o==="reynold"||o==="reynold ismail"||o==="reyn"?"reyn":o==="youngrok lee"||o==="youngrok"||o==="young lee"||o==="young"?"youngrok":i||"reyn"}function wn(h){const i=(h||"").trim(),o=i.toLowerCase();return o==="watson"||o==="jjols"?"jjols":i||"jjols"}function Yr(h){switch((h||"").trim().toLowerCase()){case"poop":return"poop";case"pee":return"pee";case"walk":return"walk";case"food":case"treat":return"food";case"water":return"water";case"nap":case"sleep":case"play":case"playing":case"playpen":case"daycare":case"training":return"playing";case"medicine":case"medication":return"medicine";case"vomit":case"throwup":return"vomit";case"weight":case"weigh":return"weight";case"grooming":case"bath":case"teeth brushing":return"grooming";case"hospital":case"vet":case"clinic":case"doctor":return"vet";case"accident":return"pee";case"eat grass":case"temperature":case"crying":case"coughing":case"symptom":case"illness":case"scratch":return"symptom";default:return"playing"}}function ta(h,i){const o=(h||"").trim(),s=(i||"").trim();if(!o&&!s)return new Date().toISOString();if(o&&s){const r=`${o} ${s} UTC`,l=new Date(r);if(!isNaN(l.getTime()))return l.toISOString()}if(o){const r=new Date(o);if(!isNaN(r.getTime()))return r.toISOString()}return new Date().toISOString()}function Jr(h){const i=Vr(h);if(i.length<2)throw new Error("CSV file is empty or missing data rows.");const o=i[0].map(u=>u.trim()),s={};o.forEach((u,f)=>{s[u.toLowerCase()]=f});const r=(u,f)=>{const v=s[f.toLowerCase()];if(v===void 0||v>=u.length)return"";let w=(u[v]||"").trim();return w.startsWith('"')&&w.endsWith('"')&&(w=w.slice(1,-1).trim()),w},l=(u,f)=>{const v=r(u,f);if(!v||v==="-"||v==="0"||v==="0.0")return;const w=parseFloat(v);return isNaN(w)?void 0:w},c=[];for(let u=1;u<i.length;u++){const f=i[u];if(f.length<=1&&(!f[0]||f[0].trim()===""))continue;const v=r(f,"Pet"),w=wn(v),x=r(f,"Event_Type"),_=r(f,"Log_Date"),T=r(f,"Log_Time (UTC+00:00)")||r(f,"Log_Time"),$=r(f,"User_Name"),S=r(f,"Comment");if(!x&&!_&&!T)continue;const D={pet:w,eventType:x||"Unknown",logDate:_,logTime:T,userName:$||"reyn",comment:S||void 0,startDate:r(f,"Start_Date")||void 0,startTime:r(f,"Start_Time (UTC+00:00)")||r(f,"Start_Time")||void 0,endDate:r(f,"End_Date")||void 0,endTime:r(f,"End_Time (UTC+00:00)")||r(f,"End_Time")||void 0,duration:r(f,"Duration")||void 0,quantityNumber:l(f,"Quantity_Number"),quantityUnit:r(f,"Quantity_Unit")||void 0,temperatureC:l(f,"Temperature_(C)"),temperatureF:l(f,"Temperature_(F)"),weightKg:l(f,"Weight_(Kg)"),weightLbs:l(f,"Weight_(P)")||l(f,"Weight_(Lbs)"),medicineType:r(f,"Medicine_Type")||void 0,stoolQuality:r(f,"Stool_Quality")||void 0,vaccineName:r(f,"Vaccine_Name")||void 0,vaccineExpiration:r(f,"Vaccine_Expiration")||void 0,bloodGlucoseNumber:l(f,"Blood_Glucose_Number"),bloodGlucoseUnit:r(f,"Blood_Glucose_Unit")||void 0};c.push(D)}return c}function Qr(h){if(h.length===0)return{sourceType:"csv",totalCount:0,petName:"Unknown",earliestDate:"",latestDate:"",countsByType:{},countsByUser:{},sampleItems:[]};const i={},o={},s={};let r="",l="";const c=[];for(let v=0;v<h.length;v++){const w=h[v],x=w.eventType||"Unknown";i[x]=(i[x]||0)+1;const _=Ii(w.userName);o[_]=(o[_]||0)+1;const T=wn(w.pet);s[T]=(s[T]||0)+1;const $=ta(w.logDate,w.logTime);(!r||$<r)&&(r=$),(!l||$>l)&&(l=$),c.length<5&&c.push({timestamp:$,pet:T,eventType:w.eventType,user:_,note:w.comment})}let u="jjols",f=0;for(const[v,w]of Object.entries(s))w>f&&(f=w,u=v);return{sourceType:"csv",totalCount:h.length,petName:u,earliestDate:r,latestDate:l,countsByType:i,countsByUser:o,sampleItems:c}}function Xr(h,i,o){return h.map(s=>{const r=Yr(s.eventType),l=Ii(s.userName),c=wn(s.pet),u=ta(s.logDate,s.logTime),f={originalEvent:s.eventType,originalUserName:s.userName,originalPetName:s.pet,petName:c,source:"csv_import",importedAt:new Date().toISOString()},v=(s.eventType||"").trim().toLowerCase();return v==="nap"||v==="sleep"?f.subcategory="nap":v==="training"?f.subcategory="training":v==="bath"?f.subcategory="bath":v==="teeth brushing"?f.subcategory="teeth_brushing":v==="treat"?f.subcategory="treat":v==="hospital"?f.visitReason="Hospital":v==="accident"?f.isAccident=!0:v==="eat grass"?f.symptom="Eat grass":v==="temperature"?f.symptom="Temperature":v==="crying"?f.symptom="Crying":v==="coughing"?f.symptom="Coughing":v==="playpen"?f.locationName="Playpen":v==="daycare"&&(f.locationName="Daycare"),s.weightKg!==void 0&&(f.weightKg=s.weightKg),s.weightLbs!==void 0&&(f.weightLbs=s.weightLbs),s.temperatureC!==void 0&&(f.temperatureC=s.temperatureC),s.temperatureF!==void 0&&(f.temperatureF=s.temperatureF),s.medicineType&&(f.medication=s.medicineType),s.stoolQuality&&(f.stoolQuality=s.stoolQuality),s.vaccineName&&(f.vaccineName=s.vaccineName),s.vaccineExpiration&&(f.vaccineExpiration=s.vaccineExpiration),s.bloodGlucoseNumber!==void 0&&(f.bloodGlucoseNumber=s.bloodGlucoseNumber),s.bloodGlucoseUnit&&(f.bloodGlucoseUnit=s.bloodGlucoseUnit),s.duration&&s.duration!=="0"&&(f.duration=s.duration),s.quantityNumber!==void 0&&(f.quantityNumber=s.quantityNumber),s.quantityUnit&&(f.quantityUnit=s.quantityUnit),{householdId:i,petId:o,eventType:r,loggedByName:l,timestamp:u,notes:s.comment||"",metadata:f}})}const tl={poop:"poop",pee:"pee",walk:"walk",food:"food",water:"water",medicine:"medicine",medication:"medicine",grooming:"grooming",playing:"playing",play:"playing",vomit:"vomit",throwup:"vomit",weight:"weight",weigh:"weight",vet:"vet",clinic:"vet",doctor:"vet",symptom:"symptom",illness:"symptom",scratch:"symptom"};function el(h){const i=(h||"").trim().toLowerCase();return tl[i]||"playing"}function il(h){let i;try{i=JSON.parse(h)}catch{throw new Error("Invalid JSON format: Unable to parse file.")}if(!Array.isArray(i))throw new Error("Invalid DogNotes format: Root must be an array of event records.");const o=[];for(const s of i)s&&typeof s=="object"&&"Time"in s&&"Event"in s&&o.push({Time:String(s.Time||new Date().toISOString()),"Pet Name":String(s["Pet Name"]||"Pet"),Event:String(s.Event||""),Note:String(s.Note||""),"Logged by":String(s["Logged by"]||"Owner")});return o}function ol(h){if(h.length===0)return{totalCount:0,petName:"Unknown",earliestDate:"",latestDate:"",countsByType:{},sampleItems:[]};const i={};let o=h[0].Time,s=h[0].Time;const r={};for(const u of h){const f=u.Event||"Unknown";i[f]=(i[f]||0)+1;const v=u["Pet Name"]||"Pet";r[v]=(r[v]||0)+1,u.Time<o&&(o=u.Time),u.Time>s&&(s=u.Time)}let l="Pet",c=0;for(const[u,f]of Object.entries(r))f>c&&(c=f,l=u);return{totalCount:h.length,petName:l,earliestDate:o,latestDate:s,countsByType:i,sampleItems:h.slice(0,5)}}function nl(h,i,o){return h.map(s=>({householdId:i,petId:o,eventType:el(s.Event),loggedByName:Ii(s["Logged by"]||"Owner"),timestamp:s.Time,notes:s.Note||"",metadata:{originalDogNotesEvent:s.Event,originalUserName:s["Logged by"]||"",importedAt:new Date().toISOString()}}))}function sl(h,i){const o=h.trim();if(i&&i.toLowerCase().endsWith(".json")||o.startsWith("[")||o.startsWith("{"))try{const r=il(o),l=ol(r),c={},u=[];for(const v of r){const w=Ii(v["Logged by"]);c[w]=(c[w]||0)+1,u.length<5&&u.push({timestamp:v.Time,pet:v["Pet Name"],eventType:v.Event,user:w,note:v.Note})}const f={sourceType:"json",totalCount:l.totalCount,petName:l.petName,earliestDate:l.earliestDate,latestDate:l.latestDate,countsByType:l.countsByType,countsByUser:c,sampleItems:u};return{type:"json",rawItems:r,summary:f}}catch(r){if(i&&i.toLowerCase().endsWith(".json"))throw r}try{const r=Jr(o),l=Qr(r);return{type:"csv",rawItems:r,summary:l}}catch(r){throw new Error(`Failed to parse import file. Supported formats are CSV (e.g. report.csv) and DogNotes JSON. Detail: ${r.message}`)}}function al(h,i,o){return h.type==="csv"?Xr(h.rawItems,i,o):nl(h.rawItems,i,o).map(r=>({...r,loggedByName:Ii(r.loggedByName)}))}function ea(h,i,o=new Date){var J;const s=h.filter(B=>B.petId===i&&B.eventType==="poop").map(B=>({...B,date:new Date(B.timestamp)})).filter(B=>!isNaN(B.date.getTime())).sort((B,X)=>B.date.getTime()-X.date.getTime());if(s.length===0)return{hasData:!1,predictedTimestamp:null,timeDisplay:"Log to predict",timeDisplayKo:"기록 대기 중",subtext:"Record events to unlock AI timing prediction.",subtextKo:"이벤트를 기록하면 다음 배변 시간을 예측합니다.",progressPercent:0,isOverdue:!1,isTomorrow:!1,confidence:"low"};const l=s[s.length-1].date,c=o.getTime(),u=l.getTime(),v=Math.max(0,c-u)/(1e3*60*60),w=new Set;for(const B of s)w.add(B.date.toISOString().split("T")[0]);const x=Math.max(1,w.size),_=s.length/x,T=new Date(o.getFullYear(),o.getMonth(),o.getDate(),0,0,0,0),S=s.filter(B=>B.date>=T).length,D=[];for(let B=1;B<s.length;B++){const X=s[B-1].date,It=(s[B].date.getTime()-X.getTime())/(1e3*60*60);It>=.33&&It<=16&&D.push(It)}let M=6;if(D.length>0){const B=D.reduce((X,Gt)=>X+Gt,0);M=Math.max(2.5,Math.min(12,B/D.length))}else _<=1.2?M=24:M=Math.max(4,24/_);const Z=new Array(24).fill(0);for(const B of s)Z[B.date.getHours()]++;const W=[];for(let B=0;B<24;B++)Z[B]>0&&W.push({hour:B,count:Z[B]});const O=((J=[...W].sort((B,X)=>X.count-B.count)[0])==null?void 0:J.count)||0,V=W.filter(B=>B.count>=Math.max(1,Math.ceil(O*.2))).map(B=>B.hour).sort((B,X)=>B-X),at=V.length>0?V:[8],A=o.getHours()+o.getMinutes()/60,k=Math.min(2.5,M*.4);let R,U="routine_today",C=!1,et=!1;const it=at.filter(B=>{const X=new Date(o.getFullYear(),o.getMonth(),o.getDate(),B,0,0,0),Gt=(X.getTime()-c)/(1e3*60*60),It=(X.getTime()-u)/(1e3*60*60);return Gt>.1&&It>=k});if(_>1.2&&v>M*1.35&&A>=7&&A<=22||_<=1.2&&S===0&&A>=14&&v>=20)if(et=!0,U="overdue",it.length>0&&it[0]-A<=2)R=new Date(o.getFullYear(),o.getMonth(),o.getDate(),it[0],0,0,0);else{const B=new Date(c+18e5),X=Math.round(B.getMinutes()/15)*15;B.setMinutes(X,0,0),R=B}else if(it.length>0&&(S<Math.ceil(_)||S===0)){const B=it[0];R=new Date(o.getFullYear(),o.getMonth(),o.getDate(),B,0,0,0),U="routine_today"}else if(S<Math.ceil(_)&&_>1.2&&u+M*36e5>c&&new Date(u+M*36e5).getDate()===o.getDate()&&new Date(u+M*36e5).getHours()<=21){const B=new Date(u+M*36e5),X=Math.round(B.getMinutes()/15)*15;B.setMinutes(X,0,0),R=B,U="interval_today"}else{C=!0,U="routine_tomorrow";const B=at[0]??8;R=new Date(o.getFullYear(),o.getMonth(),o.getDate()+1,B,0,0,0)}let lt=50;const Ft=R.getTime()-u;if(Ft>0){const B=c-u;lt=Math.round(B/Ft*100),lt=Math.max(5,Math.min(100,lt))}et&&(lt=95);const H=B=>{const X=B.getHours(),Gt=B.getMinutes(),It=Gt===0?":00":`:${Gt.toString().padStart(2,"0")}`,ge=X>=12?"pm":"am",oe=X%12===0?12:X%12,me=`${oe}${It} ${ge}`,ve=`${X>=12?"오후":"오전"} ${oe}${It}`;return{timeEn:me,timeKo:ve}},Nt=H(R),q=C?`Tomorrow ${Nt.timeEn}`:Nt.timeEn,ct=C?`내일 ${Nt.timeKo}`:Nt.timeKo;let mt="Calculated from historical routine.",vt="기록 데이터 기반 다음 예상 시간대입니다.";if(et)mt=`Due anytime · ~${v.toFixed(1)}h since last poop`,vt=`배변 주기(${M.toFixed(1)}시간) 경과 · 곧 예상`;else if(C)mt="Next routine window tomorrow morning.",vt="내일 아침 루틴 예상 시간대입니다.";else if(U==="interval_today"){const B=H(l);mt=`~${M.toFixed(1)}h interval after ${B.timeEn} poop.`,vt=`마지막 기록(${B.timeKo}) 기준 약 ${M.toFixed(1)}시간 후.`}else U==="routine_today"&&(mt="Calculated from historical routine.",vt="기록 데이터 기반 다음 루틴 예상입니다.");let ht="low";s.length>=10?ht="high":s.length>=3&&(ht="medium");const ot=Math.max(0,(R.getTime()-c)/(1e3*60*60));return{hasData:!0,predictedTimestamp:R.toISOString(),timeDisplay:q,timeDisplayKo:ct,subtext:mt,subtextKo:vt,progressPercent:lt,isOverdue:et,isTomorrow:C,confidence:ht,estimatedHoursRemaining:Math.round(ot*10)/10}}function rl(h,i,o=new Date){const s=h.filter(O=>O.petId===i),r=Array.from({length:24},(O,V)=>({hour:V,poopCount:0,peeCount:0,totalCount:0})),l={poop:0,pee:0,walk:0,food:0,water:0,medicine:0,grooming:0,playing:0,vomit:0,weight:0,vet:0,symptom:0,nap:0,training:0},c={},u=new Map,f=new Set,v=new Date(o.getTime()-10080*60*1e3);let w=0,x=0,_=null;for(const O of s){const V=new Date(O.timestamp);if(isNaN(V.getTime()))continue;const at=V.getHours(),A=V.toISOString().split("T")[0];f.add(A),r[at]&&(r[at].totalCount++,O.eventType==="poop"&&r[at].poopCount++,O.eventType==="pee"&&r[at].peeCount++),O.eventType in l&&l[O.eventType]++,(!c[O.eventType]||new Date(c[O.eventType].timestamp)<V)&&(c[O.eventType]=O),u.has(A)||u.set(A,{date:A,poop:0,pee:0,food:0,walk:0,medicine:0,vomit:0,other:0,total:0});const k=u.get(A);k.total++,O.eventType==="poop"?k.poop++:O.eventType==="pee"?k.pee++:O.eventType==="food"?k.food++:O.eventType==="walk"?k.walk++:O.eventType==="medicine"?k.medicine++:O.eventType==="vomit"?k.vomit++:k.other++,V>=v&&(O.eventType==="vomit"&&w++,O.eventType==="medicine"&&x++),O.eventType==="poop"&&(!_||V>_)&&(_=V)}const T=Array.from(f).sort();let $=0,S=0,D=0,M=null;for(const O of T){const V=new Date(O);if(!M)D=1;else{const at=Math.round((V.getTime()-M.getTime())/864e5);at===1?D++:at>1&&(D=1)}D>S&&(S=D),M=V}if(T.length>0){const O=new Date(o).toISOString().split("T")[0],V=new Date(o.getTime()-1440*60*1e3).toISOString().split("T")[0],at=T[T.length-1];at===O||at===V?$=D:$=0}let Z=0;_&&(Z=Math.max(0,Math.floor((o.getTime()-_.getTime())/(1440*60*1e3))));const W=Array.from(u.values()).sort((O,V)=>O.date.localeCompare(V.date)),st=ea(h,i,o);return{petId:i,currentStreakDays:$,longestStreakDays:S,totalEventsLogged:s.length,hourlyDistribution:r,dailyFrequencies:W,eventCountsByType:l,lastEventByType:c,nextPoopPrediction:st,walkStats:{totalWalks:l.walk||0,totalDistanceMeters:0,avgWalkMinutes:25},healthAlerts:{vomitsLast7Days:w,medicinesLast7Days:x,daysWithoutPoop:Z}}}const dn=(h,i)=>i.some(o=>h instanceof o);let As,Ms;function ll(){return As||(As=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dl(){return Ms||(Ms=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cn=new WeakMap,nn=new WeakMap,vo=new WeakMap;function cl(h){const i=new Promise((o,s)=>{const r=()=>{h.removeEventListener("success",l),h.removeEventListener("error",c)},l=()=>{o(Ce(h.result)),r()},c=()=>{s(h.error),r()};h.addEventListener("success",l),h.addEventListener("error",c)});return vo.set(i,h),i}function hl(h){if(cn.has(h))return;const i=new Promise((o,s)=>{const r=()=>{h.removeEventListener("complete",l),h.removeEventListener("error",c),h.removeEventListener("abort",c)},l=()=>{o(),r()},c=()=>{s(h.error||new DOMException("AbortError","AbortError")),r()};h.addEventListener("complete",l),h.addEventListener("error",c),h.addEventListener("abort",c)});cn.set(h,i)}let hn={get(h,i,o){if(h instanceof IDBTransaction){if(i==="done")return cn.get(h);if(i==="store")return o.objectStoreNames[1]?void 0:o.objectStore(o.objectStoreNames[0])}return Ce(h[i])},set(h,i,o){return h[i]=o,!0},has(h,i){return h instanceof IDBTransaction&&(i==="done"||i==="store")?!0:i in h}};function ia(h){hn=h(hn)}function pl(h){return dl().includes(h)?function(...i){return h.apply(pn(this),i),Ce(this.request)}:function(...i){return Ce(h.apply(pn(this),i))}}function ul(h){return typeof h=="function"?pl(h):(h instanceof IDBTransaction&&hl(h),dn(h,ll())?new Proxy(h,hn):h)}function Ce(h){if(h instanceof IDBRequest)return cl(h);if(nn.has(h))return nn.get(h);const i=ul(h);return i!==h&&(nn.set(h,i),vo.set(i,h)),i}const pn=h=>vo.get(h);function fl(h,i,{blocked:o,upgrade:s,blocking:r,terminated:l}={}){const c=indexedDB.open(h,i),u=Ce(c);return s&&c.addEventListener("upgradeneeded",f=>{s(Ce(c.result),f.oldVersion,f.newVersion,Ce(c.transaction),f)}),o&&c.addEventListener("blocked",f=>o(f.oldVersion,f.newVersion,f)),u.then(f=>{l&&f.addEventListener("close",()=>l()),r&&f.addEventListener("versionchange",v=>r(v.oldVersion,v.newVersion,v))}).catch(()=>{}),u}const gl=["get","getKey","getAll","getAllKeys","count"],ml=["put","add","delete","clear"],sn=new Map;function Ds(h,i){if(!(h instanceof IDBDatabase&&!(i in h)&&typeof i=="string"))return;if(sn.get(i))return sn.get(i);const o=i.replace(/FromIndex$/,""),s=i!==o,r=ml.includes(o);if(!(o in(s?IDBIndex:IDBObjectStore).prototype)||!(r||gl.includes(o)))return;const l=async function(c,...u){const f=this.transaction(c,r?"readwrite":"readonly");let v=f.store;return s&&(v=v.index(u.shift())),(await Promise.all([v[o](...u),r&&f.done]))[0]};return sn.set(i,l),l}ia(h=>({...h,get:(i,o,s)=>Ds(i,o)||h.get(i,o,s),has:(i,o)=>!!Ds(i,o)||h.has(i,o)}));const vl=["continue","continuePrimaryKey","advance"],Bs={},un=new WeakMap,oa=new WeakMap,xl={get(h,i){if(!vl.includes(i))return h[i];let o=Bs[i];return o||(o=Bs[i]=function(...s){un.set(this,oa.get(this)[i](...s))}),o}};async function*bl(...h){let i=this;if(i instanceof IDBCursor||(i=await i.openCursor(...h)),!i)return;i=i;const o=new Proxy(i,xl);for(oa.set(o,i),vo.set(o,pn(i));i;)yield o,i=await(un.get(o)||i.continue()),un.delete(o)}function Ns(h,i){return i===Symbol.asyncIterator&&dn(h,[IDBIndex,IDBObjectStore,IDBCursor])||i==="iterate"&&dn(h,[IDBIndex,IDBObjectStore])}ia(h=>({...h,get(i,o,s){return Ns(i,o)?bl:h.get(i,o,s)},has(i,o){return Ns(i,o)||h.has(i,o)}}));const yl="dooty-offline-db",wl=1;let an=null;function le(){return an||(an=fl(yl,wl,{upgrade(h){if(!h.objectStoreNames.contains("events")){const i=h.createObjectStore("events",{keyPath:"id"});i.createIndex("by-pet","petId"),i.createIndex("by-timestamp","timestamp")}h.objectStoreNames.contains("pending_events")||h.createObjectStore("pending_events",{keyPath:"localId"}),h.objectStoreNames.contains("meta")||h.createObjectStore("meta")}})),an}async function Pi(h){try{const o=(await le()).transaction("events","readwrite");for(const s of h)await o.store.put(s);await o.done}catch(i){console.warn("Could not save events offline:",i)}}async function Ut(h,i){try{let s=await(await le()).getAllFromIndex("events","by-pet",h);return i!=null&&i.startDate,i!=null&&i.endDate,s.sort((r,l)=>new Date(l.timestamp).getTime()-new Date(r.timestamp).getTime()),i!=null&&i.limit&&i.limit>0,s}catch(o){return console.warn("Could not retrieve offline events:",o),[]}}async function _l(h){try{return await(await le()).get("meta",`last_sync_${h}`)||null}catch{return null}}async function Os(h,i){try{await(await le()).put("meta",i,`last_sync_${h}`)}catch(o){console.warn("Failed to set last sync timestamp:",o)}}async function Is(h){const i="offline-"+Date.now()+"-"+Math.random().toString(36).substring(2,7);try{const o=await le();await o.put("pending_events",{localId:i,dto:h,createdAt:new Date().toISOString()});const s={id:i,householdId:h.householdId,petId:h.petId,eventType:h.eventType,loggedByName:h.loggedByName||"Me",timestamp:h.timestamp,notes:h.notes,latitude:h.latitude,longitude:h.longitude,metadata:h.metadata,createdAt:new Date().toISOString(),isOfflinePending:!0,localId:i};await o.put("events",s)}catch(o){console.warn("Failed to enqueue pending offline event:",o)}return i}async function na(){try{return await(await le()).getAll("pending_events")}catch{return[]}}async function Fl(h){try{const i=await le();await i.delete("pending_events",h),await i.delete("events",h)}catch(i){console.warn("Failed to remove pending event:",i)}}async function kl(h){try{const i=await le();await i.delete("events",h),await i.delete("pending_events",h)}catch(i){console.warn("Failed to delete offline event:",i)}}async function Rs(h){try{await(await le()).put("events",h)}catch(i){console.warn("Failed to update offline event:",i)}}const rn={},$l="https://watslog-bff.warmsynthsiloveyou.workers.dev/api";function Pl(){const h=rn==null?void 0:rn.VITE_API_URL;if(h)return h.replace(/\/+$/,"");if(typeof window<"u"){const i=window.location.hostname;if(i.endsWith("github.io")||!i.includes("localhost")&&!i.includes("127.0.0.1"))return $l}return"/api"}const ut=Pl();let Se=0;const fn=new Set;let lo=null;function ln(){const h=Se;fn.forEach(i=>{try{i(h)}catch(o){console.error("API activity listener error:",o)}})}function Sl(h){return fn.add(h),h(Se),()=>{fn.delete(h)}}async function ft(h,i){lo&&(clearTimeout(lo),lo=null),Se++,ln();try{return await fetch(h,i)}finally{Se=Math.max(0,Se-1),Se===0?lo=setTimeout(()=>{Se===0&&ln()},250):ln()}}function bt(){const h={"Content-Type":"application/json"},i=localStorage.getItem("dooty_auth_token");return i&&(h.Authorization=`Bearer ${i}`),h}class Tt{static async signUp(i){const o=await ft(`${ut}/auth/signup`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!o.ok){const s=await o.json().catch(()=>({}));throw new Error(s.error||"Failed to sign up")}return o.json()}static async signIn(i){const o=await ft(`${ut}/auth/signin`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!o.ok){const s=await o.json().catch(()=>({}));throw new Error(s.error||"Invalid email or password")}return o.json()}static async getMe(){const i=await ft(`${ut}/auth/me`,{headers:bt()});if(!i.ok)throw new Error("Unauthorized");return i.json()}static async joinAuthenticated(i,o){const s=await ft(`${ut}/households/join-authenticated`,{method:"POST",headers:bt(),body:JSON.stringify({code:i,role:o})});if(!s.ok){const r=await s.json().catch(()=>({}));throw new Error(r.error||"Failed to join household")}return s.json()}static async claimHousehold(i,o){const s=await ft(`${ut}/households/claim`,{method:"POST",headers:bt(),body:JSON.stringify({householdId:i,role:o})});if(!s.ok){const r=await s.json().catch(()=>({}));throw new Error(r.error||"Failed to claim household")}return s.json()}static async createHousehold(i){const o=await ft(`${ut}/households`,{method:"POST",headers:bt(),body:JSON.stringify(i)});if(!o.ok){const s=await o.json().catch(()=>({}));throw new Error(s.error||"Failed to create household")}return o.json()}static async getHousehold(i){const o=await ft(`${ut}/households/${i}`,{headers:bt()});if(!o.ok)throw new Error("Failed to fetch household");return o.json()}static async removeMember(i,o){if(!(await ft(`${ut}/households/${i}/members/${o}`,{method:"DELETE",headers:bt()})).ok)throw new Error("Failed to remove member")}static async createInviteCode(i){const o=await ft(`${ut}/households/${i}/invites`,{method:"POST",headers:bt()});if(!o.ok)throw new Error("Failed to create invite code");return o.json()}static async joinHousehold(i,o,s){const r=await ft(`${ut}/households/join`,{method:"POST",headers:bt(),body:JSON.stringify({code:i,displayName:o,role:s})});if(!r.ok){const l=await r.json().catch(()=>({}));throw new Error(l.error||"Failed to join household")}return r.json()}static async getPets(i){const o=await ft(`${ut}/households/${i}/pets`,{headers:bt()});if(!o.ok)throw new Error("Failed to fetch pets");return o.json()}static async updatePet(i,o){const s=await ft(`${ut}/pets/${i}`,{method:"PATCH",headers:bt(),body:JSON.stringify(o)});if(!s.ok)throw new Error("Failed to update pet");return s.json()}static async updateMember(i,o,s){const r=await ft(`${ut}/households/${i}/members/${o}`,{method:"PATCH",headers:bt(),body:JSON.stringify(s)});if(!r.ok)throw new Error("Failed to update member");return r.json()}static async getEvents(i,o){if(!navigator.onLine)return Ut(i);try{const s=typeof o=="number"?{limit:o}:o||{},r=new URLSearchParams;s.limit&&r.set("limit",s.limit.toString()),s.offset&&r.set("offset",s.offset.toString()),s.since&&r.set("since",s.since),s.startDate&&r.set("startDate",s.startDate),s.endDate&&r.set("endDate",s.endDate);const l=r.toString(),c=l?`${ut}/pets/${i}/events?${l}`:`${ut}/pets/${i}/events`,u=await ft(c,{headers:bt()});if(!u.ok)throw new Error("Failed to fetch events from server");const f=await u.json();return await Pi(f),f}catch{return Ut(i)}}static async syncEvents(i,o){if(!navigator.onLine)return Ut(i);try{const s=await _l(i),r=new Date().toISOString();if(s){const l=await this.getEvents(i,{since:s,limit:1e3});return l&&l.length>0&&await Pi(l),await Os(i,r),Ut(i)}else{const l=new Date(Date.now()-7776e6).toISOString(),c=await this.getEvents(i,{startDate:l,limit:500});return c&&c.length>0&&(await Pi(c),o==null||o(c.length)),await Os(i,r),this.backfillOlderEvents(i,l,o).catch(u=>{console.warn("Background historical backfill error:",u)}),Ut(i)}}catch(s){return console.warn("Sync failed, using offline fallback:",s),Ut(i)}}static async backfillOlderEvents(i,o,s){if(navigator.onLine)try{let r=o,l=!0;const c=500;for(;l;){const u=await this.getEvents(i,{endDate:r,limit:c});if(!u||u.length===0){l=!1;break}if(await Pi(u),s==null||s(u.length),u.length<c)l=!1;else{const f=u[u.length-1];f&&f.timestamp&&f.timestamp!==r?r=f.timestamp:l=!1}}}catch(r){console.warn("Backfill chunk failed:",r)}}static async createEvent(i){if(!navigator.onLine){const o=await Is(i);return{id:o,householdId:i.householdId,petId:i.petId,eventType:i.eventType,loggedByName:i.loggedByName||"Me",timestamp:i.timestamp,notes:i.notes,latitude:i.latitude,longitude:i.longitude,metadata:i.metadata,createdAt:new Date().toISOString(),isOfflinePending:!0,localId:o}}try{const o=await ft(`${ut}/events`,{method:"POST",headers:bt(),body:JSON.stringify(i)});if(!o.ok)throw new Error("Server returned error creating event");const s=await o.json();return await Pi([s]),s}catch(o){console.warn("Network request failed, falling back to offline queue:",o);const s=await Is(i);return{id:s,householdId:i.householdId,petId:i.petId,eventType:i.eventType,loggedByName:i.loggedByName||"Me",timestamp:i.timestamp,notes:i.notes,latitude:i.latitude,longitude:i.longitude,metadata:i.metadata,createdAt:new Date().toISOString(),isOfflinePending:!0,localId:s}}}static async updateEvent(i,o){if(!navigator.onLine){const r=(await Ut("")).find(l=>l.id===i);if(r){const l={...r,...o,eventType:o.eventType??r.eventType,notes:o.notes!==void 0?o.notes:r.notes,latitude:o.latitude!==void 0?o.latitude??void 0:r.latitude,longitude:o.longitude!==void 0?o.longitude??void 0:r.longitude,metadata:o.metadata!==void 0?o.metadata:r.metadata};return await Rs(l),l}}try{const s=await ft(`${ut}/events/${i}`,{method:"PATCH",headers:bt(),body:JSON.stringify(o)});if(!s.ok)throw new Error("Server returned error updating event");const r=await s.json();return await Rs(r),r}catch(s){throw console.warn("Network update failed:",s),s}}static async deleteEvent(i){if(await kl(i),!!navigator.onLine)try{const o=await ft(`${ut}/events/${i}`,{method:"DELETE",headers:bt()});if(!o.ok&&o.status!==404)throw new Error("Server returned error deleting event")}catch(o){console.warn("Network delete warning:",o)}}static async flushOfflineQueue(){if(!navigator.onLine)return 0;const i=await na();if(i.length===0)return 0;try{const o=i.map(r=>r.dto);if((await ft(`${ut}/events/batch-sync`,{method:"POST",headers:bt(),body:JSON.stringify({events:o})})).ok){for(const r of i)await Fl(r.localId);return i.length}}catch(o){console.warn("Failed to flush offline queue:",o)}return 0}static async importEvents(i){let s=0;for(let r=0;r<i.length;r+=500){const l=i.slice(r,r+500);let c=await ft(`${ut}/import/events`,{method:"POST",headers:bt(),body:JSON.stringify({events:l})});if(c.status===404&&(c=await ft(`${ut}/events/batch-sync`,{method:"POST",headers:bt(),body:JSON.stringify({events:l})})),!c.ok){const f=await c.json().catch(()=>({}));throw new Error(f.error||`Import batch failed (${c.status})`)}const u=await c.json();s+=u.importedCount||u.syncedCount||l.length}return{importedCount:s}}static async importDogNotes(i,o,s){const r=await ft(`${ut}/import/dognotes`,{method:"POST",headers:bt(),body:JSON.stringify({householdId:i,petId:o,items:s})});if(!r.ok)throw new Error("DogNotes import failed");return r.json()}static async getAnalytics(i,o){const s=new URLSearchParams;o!=null&&o.startDate&&s.set("startDate",o.startDate),o!=null&&o.endDate&&s.set("endDate",o.endDate);const r=s.toString(),l=r?`${ut}/pets/${i}/analytics?${r}`:`${ut}/pets/${i}/analytics`,c=await ft(l,{headers:bt()});if(!c.ok)throw new Error("Failed to fetch analytics");return c.json()}static async saveWalkRoute(i){const o=await ft(`${ut}/walks`,{method:"POST",headers:bt(),body:JSON.stringify(i)});if(!o.ok)throw new Error("Failed to save walk route");return o.json()}static async getWalkRoutes(i){const o=await ft(`${ut}/pets/${i}/walks`,{headers:bt()});if(!o.ok)throw new Error("Failed to fetch walk routes");return o.json()}}class Tl{constructor(){this.listeners=new Set,this.currentUser=null,this.currentHousehold=null,this.userHouseholds=[],this.currentPet=null,this.pets=[],this.events=[],this.activeTab="today",this.authView="signin",this.currentLocale="en",this.isOnline=navigator.onLine,this.pendingSyncCount=0,this.isSyncing=!1,this.isApiActive=!1,this.activeApiRequests=0,this.analyticsTimeRange="30d",this.userAvatar=localStorage.getItem("dooty_user_avatar")||"",this.track={poop:!0,pee:!0,vomit:!0,meds:!0,weight:!0,walk:!0,vet:!1,symptom:!1},this.nudges={push:!0,weekly:!0,gap:!0,vet:!1},this.pendingInvites=[],this.loggerModalOpen=!1,this.loggerEventType=null,this.editingEvent=null,this.photoModalOpen=!1,this.photoModalTarget="pet",this.photoModalTargetId="",this.photoModalCurrentAvatar="",this.photoModalTitle="",this.isLoading=!1,this.petSwitcherOpen=!1,this.historyMonthOffset=0,this.historySelectedDay=null,this.historyTypeFilters=[],this.historyMemberFilter="all",this.historySearchOpen=!1,this.historySearchQuery="",this.activeWalk=null,this.walkView=null,this.walkHomeAsk=!1,this.homeAsked=!1,this.walkSummaryData=null;const i=localStorage.getItem("dooty_locale");if(i&&(i==="en"||i==="ko"))this.currentLocale=i;else{const c=typeof navigator<"u"&&navigator.language||"";this.currentLocale=c.startsWith("ko")?"ko":"en"}typeof document<"u"&&(document.documentElement.lang=this.currentLocale,document.body.classList.toggle("lang-ko",this.currentLocale==="ko"));const o=localStorage.getItem("dooty_track_prefs");if(o)try{this.track={...this.track,...JSON.parse(o)}}catch(c){console.warn("Failed to parse track prefs:",c)}const s=localStorage.getItem("dooty_nudge_prefs");if(s)try{this.nudges={...this.nudges,...JSON.parse(s)}}catch(c){console.warn("Failed to parse nudge prefs:",c)}const r=localStorage.getItem("dooty_analytics_timerange");r&&["7d","30d","1y","all"].includes(r)&&(this.analyticsTimeRange=r);const l=localStorage.getItem("dooty_household_data");if(l)try{const c=JSON.parse(l);if(this.currentHousehold=c,this.pets=c.pets||[],this.pets.length>0){const u=localStorage.getItem("dooty_pet_id");this.currentPet=this.pets.find(f=>f.id===u)||this.pets[0],Ut(this.currentPet.id).then(f=>{f.length>0&&this.events.length===0&&(this.events=f,this.notify())})}this.loadPendingInvites()}catch(c){console.warn("Failed to parse cached household data:",c)}window.addEventListener("online",()=>this.handleNetworkChange(!0)),window.addEventListener("offline",()=>this.handleNetworkChange(!1)),Sl(c=>{this.activeApiRequests=c,this.isApiActive=c>0,this.notify()})}subscribe(i){return this.listeners.add(i),()=>this.listeners.delete(i)}notify(){this.listeners.forEach(i=>i())}get t(){return Kr[this.currentLocale]}setLocale(i){this.currentLocale=i,localStorage.setItem("dooty_locale",i),typeof document<"u"&&(document.documentElement.lang=i,document.body.classList.toggle("lang-ko",i==="ko")),this.notify()}setActiveTab(i){this.activeTab=i,this.notify()}openPetSwitcher(){this.petSwitcherOpen=!0,this.notify()}closePetSwitcher(){this.petSwitcherOpen=!1,this.notify()}selectPetById(i){const o=this.pets.find(s=>s.id===i);o&&(this.selectPet(o),this.closePetSwitcher())}setHistoryMonthOffset(i){this.historyMonthOffset=i,this.historySelectedDay=null,this.notify()}setHistorySelectedDay(i){this.historySelectedDay=i,this.notify()}toggleHistoryTypeFilter(i){this.historyTypeFilters.includes(i)?this.historyTypeFilters=this.historyTypeFilters.filter(o=>o!==i):this.historyTypeFilters=[...this.historyTypeFilters,i],this.notify()}setHistoryMemberFilter(i){this.historyMemberFilter=i,this.notify()}clearHistoryFilters(){this.historyTypeFilters=[],this.historyMemberFilter="all",this.historySearchQuery="",this.notify()}setHistorySearchOpen(i){this.historySearchOpen=i,this.notify()}setHistorySearchQuery(i){this.historySearchQuery=i,this.notify()}startLiveWalk(i){this.walkTimerInterval&&clearInterval(this.walkTimerInterval);const o=i&&i.length>0?i:this.currentPet?[this.currentPet.id]:[];this.activeWalk={startTime:Date.now(),pausedTotal:0,pausedAt:null,route:[],petIds:o},this.walkView="live",this.walkHomeAsk=!1,this.homeAsked=!1,this.walkSummaryData=null,this.notify(),this.walkTimerInterval=setInterval(()=>{if(!this.activeWalk||this.activeWalk.pausedAt)return;const s=this.getWalkSeconds();!this.homeAsked&&s>=120&&(this.walkHomeAsk=!0,this.homeAsked=!0),this.notify()},1e3)}getWalkSeconds(){if(!this.activeWalk)return 0;const i=Date.now(),o=this.activeWalk.pausedTotal+(this.activeWalk.pausedAt?i-this.activeWalk.pausedAt:0);return Math.max(0,Math.floor((i-this.activeWalk.startTime-o)/1e3))}getWalkDistanceKm(){return(this.getWalkSeconds()/3600*4.8).toFixed(2)}getWalkPace(){const i=this.getWalkSeconds();if(i<60)return`9'40"`;const o=i/3600*4.8;if(o<=0)return`9'40"`;const s=i/60/o,r=Math.floor(s),l=Math.round((s-r)*60);return`${r}'${String(l).padStart(2,"0")}"`}pauseLiveWalk(){if(!this.activeWalk)return;const i=Date.now();this.activeWalk.pausedAt?(this.activeWalk.pausedTotal+=i-this.activeWalk.pausedAt,this.activeWalk.pausedAt=null):this.activeWalk.pausedAt=i,this.notify()}minimizeWalk(){this.walkView=null,this.notify()}expandWalk(){this.walkView="live",this.notify()}keepWalking(){this.walkHomeAsk=!1,this.notify()}endLiveWalk(){var f;if(this.walkTimerInterval&&clearInterval(this.walkTimerInterval),!this.activeWalk)return;const i=this.getWalkSeconds(),o=parseFloat(this.getWalkDistanceKm()),s=this.getWalkPace(),r=this.activeWalk.petIds.map(v=>{var w;return(w=this.pets.find(x=>x.id===v))==null?void 0:w.name}).filter(Boolean),l=new Date(this.activeWalk.startTime),c=new Date,u=v=>v.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"});this.walkSummaryData={durationSec:i,distanceKm:o,pace:s,route:this.activeWalk.route,petNames:r.length>0?r:[((f=this.currentPet)==null?void 0:f.name)||"Pet"],startTime:u(l),endTime:u(c)},this.walkView="summary",this.walkHomeAsk=!1,this.notify()}async saveLiveWalk(i="",o=""){if(!this.walkSummaryData)return;const s=this.walkSummaryData,r=Math.max(1,Math.round(s.durationSec/60))+" min",l=s.distanceKm+" km";await this.logEvent("walk",i||`Walk · ${r} · ${l}`,{walkDuration:r,walkDistance:l,photoUrl:o,petNames:s.petNames}),this.activeWalk=null,this.walkView=null,this.walkSummaryData=null,this.walkHomeAsk=!1,this.homeAsked=!1,this.notify()}discardLiveWalk(){this.walkTimerInterval&&clearInterval(this.walkTimerInterval),this.activeWalk=null,this.walkView=null,this.walkSummaryData=null,this.walkHomeAsk=!1,this.homeAsked=!1,this.notify()}setAuthView(i){this.authView=i,this.notify()}setTrackingPreference(i,o){this.track={...this.track,[i]:o},localStorage.setItem("dooty_track_prefs",JSON.stringify(this.track)),this.notify()}setNudgePreference(i,o){this.nudges={...this.nudges,[i]:o},localStorage.setItem("dooty_nudge_prefs",JSON.stringify(this.nudges)),this.notify()}setAnalyticsTimeRange(i){this.analyticsTimeRange=i,localStorage.setItem("dooty_analytics_timerange",i),this.notify()}openLogger(i){this.editingEvent=null,this.loggerEventType=i||null,this.loggerModalOpen=!0,this.notify()}openLoggerForEdit(i){this.editingEvent=i,this.loggerEventType=i.eventType,this.loggerModalOpen=!0,this.notify()}closeLogger(){this.loggerModalOpen=!1,this.loggerEventType=null,this.editingEvent=null,this.notify()}openPhotoModal(i){this.photoModalTarget=i.target,this.photoModalTargetId=i.targetId||"",this.photoModalCurrentAvatar=i.currentAvatar||"",this.photoModalTitle=i.title||"",this.photoModalOpen=!0,this.notify()}closePhotoModal(){this.photoModalOpen=!1,this.notify()}async updatePetAvatar(i,o){await this.updatePetProfile(i,{avatarUrl:o})}async updatePetProfile(i,o){if(this.currentPet&&this.currentPet.id===i&&(this.currentPet={...this.currentPet,...o}),this.pets=this.pets.map(s=>s.id===i?{...s,...o}:s),this.currentHousehold&&(this.currentHousehold={...this.currentHousehold,pets:this.pets},localStorage.setItem("dooty_household_data",JSON.stringify(this.currentHousehold))),o.avatarUrl!==void 0&&localStorage.setItem(`dooty_pet_avatar_${i}`,o.avatarUrl),this.notify(),navigator.onLine)try{await Tt.updatePet(i,o)}catch(s){console.warn("Could not sync pet profile to server:",s)}}async updateUserAvatar(i){var o;if(this.userAvatar=i,localStorage.setItem("dooty_user_avatar",i),this.notify(),this.currentHousehold&&((o=this.currentHousehold.members)!=null&&o.length)){const s=this.currentHousehold.members[0];if(s&&(s.avatarUrl=i,navigator.onLine))try{await Tt.updateMember(this.currentHousehold.id,s.id,{avatarUrl:i})}catch(r){console.warn("Could not sync member avatar to server:",r)}}}async updateMemberAvatar(i,o){if(this.currentHousehold&&this.currentHousehold.members){const s=this.currentHousehold.members.find(r=>r.id===i);if(s&&(s.avatarUrl=o,localStorage.setItem(`dooty_member_avatar_${i}`,o),this.notify(),navigator.onLine))try{await Tt.updateMember(this.currentHousehold.id,i,{avatarUrl:o})}catch(r){console.warn("Could not sync member avatar to server:",r)}}}loadPendingInvites(){if(!this.currentHousehold)return;const i=localStorage.getItem(`dooty_pending_invites_${this.currentHousehold.id}`);if(i)try{this.pendingInvites=JSON.parse(i)}catch{this.pendingInvites=[]}else this.pendingInvites=[{code:"H3P8",role:"Log only",when:"sent to Dan · expires in 6 days",expiresAt:new Date(Date.now()+6*864e5).toISOString()},{code:"B9XT",role:"Full member",when:"unsent · expires in 7 days",expiresAt:new Date(Date.now()+7*864e5).toISOString()}],localStorage.setItem(`dooty_pending_invites_${this.currentHousehold.id}`,JSON.stringify(this.pendingInvites))}async createInvite(i="Full member"){let o="";if(this.currentHousehold){try{o=(await Tt.createInviteCode(this.currentHousehold.id)).code}catch(r){console.warn("Could not generate invite code from server, creating locally:",r);const l="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";o=Array.from({length:6},()=>l.charAt(Math.floor(Math.random()*l.length))).join("")}const s={code:o,role:i,when:"just created · expires in 7 days",expiresAt:new Date(Date.now()+7*864e5).toISOString()};this.pendingInvites=[s,...this.pendingInvites],localStorage.setItem(`dooty_pending_invites_${this.currentHousehold.id}`,JSON.stringify(this.pendingInvites)),this.notify()}return o}async revokeInvite(i){this.currentHousehold&&(this.pendingInvites=this.pendingInvites.filter(o=>o.code!==i),localStorage.setItem(`dooty_pending_invites_${this.currentHousehold.id}`,JSON.stringify(this.pendingInvites)),this.notify())}exportEventsCsv(){var f;const i=((f=this.currentPet)==null?void 0:f.name)||"Pet",o=["Timestamp","Pet Name","Event Type","Logged By","Notes","Latitude","Longitude"],s=(this.events||[]).map(v=>[`"${v.timestamp||""}"`,`"${i}"`,`"${v.eventType||""}"`,`"${(v.loggedByName||"").replace(/"/g,'""')}"`,`"${(v.notes||"").replace(/"/g,'""')}"`,v.latitude!==void 0&&v.latitude!==null?v.latitude:"",v.longitude!==void 0&&v.longitude!==null?v.longitude:""]),r=[o.join(","),...s.map(v=>v.join(","))].join(`
`),l=new Blob([r],{type:"text/csv;charset=utf-8;"}),c=URL.createObjectURL(l),u=document.createElement("a");u.setAttribute("href",c),u.setAttribute("download",`dooty-${i.toLowerCase()}-events.csv`),document.body.appendChild(u),u.click(),document.body.removeChild(u),URL.revokeObjectURL(c)}async init(){var i,o;this.isLoading=!0,this.notify();try{if(typeof window<"u"){if(window.location.hash&&window.location.hash.includes("access_token=")){const r=window.location.hash.substring(1),c=new URLSearchParams(r).get("access_token");c&&(localStorage.setItem("dooty_auth_token",c),window.history.replaceState(null,"",window.location.pathname+window.location.search))}else if(window.location.search&&window.location.search.includes("access_token=")){const l=new URLSearchParams(window.location.search).get("access_token");l&&(localStorage.setItem("dooty_auth_token",l),window.history.replaceState(null,"",window.location.pathname))}}if(localStorage.getItem("dooty_auth_token"))try{const r=await Tt.getMe();this.currentUser=r.user,this.userHouseholds=r.households||[],r.activeHousehold&&(this.currentHousehold=r.activeHousehold,localStorage.setItem("dooty_household_id",r.activeHousehold.id),localStorage.setItem("dooty_household_data",JSON.stringify(r.activeHousehold)))}catch(r){if(console.warn("Network sync for auth session failed, using cached session:",r),(i=r.message)!=null&&i.includes("Unauthorized")||(o=r.message)!=null&&o.includes("expired")){this.signOut();return}}else{const r=localStorage.getItem("dooty_household_id");if(r)try{const l=await Tt.getHousehold(r);l&&(this.currentHousehold=l,localStorage.setItem("dooty_household_data",JSON.stringify(l)))}catch(l){console.warn("Network sync for household failed, using cached session:",l)}}if(this.currentHousehold){const r=this.currentHousehold.pets||await Tt.getPets(this.currentHousehold.id);if(this.pets=r.map(l=>{const c=localStorage.getItem(`dooty_pet_avatar_${l.id}`);return{...l,avatarUrl:l.avatarUrl||c||""}}),this.currentHousehold.members&&(this.currentHousehold.members=this.currentHousehold.members.map(l=>{const c=localStorage.getItem(`dooty_member_avatar_${l.id}`);return{...l,avatarUrl:l.avatarUrl||c||(l.role==="owner"?this.userAvatar:"")}})),this.pets.length>0){const l=localStorage.getItem("dooty_pet_id");this.currentPet=this.pets.find(c=>c.id===l)||this.pets[0]}else this.currentPet=null;this.loadPendingInvites()}this.currentPet?await this.refreshEvents():this.events=[],await this.checkPendingSync()}catch(s){console.warn("Init loaded with local fallback:",s)}finally{this.isLoading=!1,this.notify()}}async selectPet(i){this.currentPet=i,localStorage.setItem("dooty_pet_id",i.id),this.events=await Ut(i.id),this.notify(),this.syncEvents()}async selectHousehold(i){const o=this.userHouseholds.find(r=>r.id===i);if(!o)return;this.currentHousehold=o,localStorage.setItem("dooty_household_id",o.id),localStorage.setItem("dooty_household_data",JSON.stringify(o));const s=o.pets||await Tt.getPets(o.id);this.pets=s,s.length>0?(this.currentPet=s[0],localStorage.setItem("dooty_pet_id",this.currentPet.id),this.events=await Ut(this.currentPet.id),this.syncEvents()):(this.currentPet=null,this.events=[]),this.loadPendingInvites(),this.notify()}async refreshEvents(){if(!this.currentPet){this.events=[],this.notify();return}this.events=await Ut(this.currentPet.id),this.notify(),await this.syncEvents()}async syncEvents(){var o;if(!this.currentPet)return;const i=this.currentPet.id;this.isSyncing=!0,this.notify();try{const s=await Tt.syncEvents(i,async()=>{var r;((r=this.currentPet)==null?void 0:r.id)===i&&(this.events=await Ut(i),this.notify())});((o=this.currentPet)==null?void 0:o.id)===i&&(this.events=s,this.notify())}catch(s){console.warn("Sync events warning:",s)}finally{this.isSyncing=!1,this.notify()}}async logEvent(i,o="",s,r,l,c){var v,w,x,_;if(!this.currentHousehold||!this.currentPet)return;const u=((v=this.currentUser)==null?void 0:v.displayName)||((x=(w=this.currentHousehold.members)==null?void 0:w[0])==null?void 0:x.displayName)||"Owner",f=await Tt.createEvent({householdId:this.currentHousehold.id,petId:this.currentPet.id,eventType:i,loggedByName:u,loggedByUserId:(_=this.currentUser)==null?void 0:_.id,timestamp:c||new Date().toISOString(),notes:o,latitude:r,longitude:l,metadata:s||{}});this.events=[f,...this.events],await this.checkPendingSync(),this.notify()}async updateEvent(i,o,s="",r,l,c,u){const f={eventType:o,notes:s,metadata:r||{},latitude:l,longitude:c};u&&(f.timestamp=u);try{const v=await Tt.updateEvent(i,f);this.events=this.events.map(w=>w.id===i?{...w,...v}:w)}catch{this.events=this.events.map(w=>w.id===i?{...w,eventType:o,notes:s,metadata:r||w.metadata,latitude:l!==void 0?l:w.latitude,longitude:c!==void 0?c:w.longitude,...u?{timestamp:u}:{}}:w)}this.notify()}async deleteEvent(i){try{await Tt.deleteEvent(i)}catch(o){console.warn("Failed to delete event on backend:",o)}this.events=this.events.filter(o=>o.id!==i&&o.localId!==i),this.notify()}async handleNetworkChange(i){this.isOnline=i,i&&await Tt.flushOfflineQueue()>0&&await this.refreshEvents(),await this.checkPendingSync(),this.notify()}get isAuthenticated(){return this.currentHousehold!==null}signOut(){localStorage.removeItem("dooty_auth_token"),localStorage.removeItem("dooty_household_id"),localStorage.removeItem("dooty_household_data"),localStorage.removeItem("dooty_pet_id"),localStorage.removeItem("dooty_user_avatar"),this.currentUser=null,this.currentHousehold=null,this.userHouseholds=[],this.currentPet=null,this.pets=[],this.events=[],this.userAvatar="",this.activeTab="today",this.authView="signin",this.notify()}async signUp(i){this.isLoading=!0,this.notify();try{!i.redirectTo&&typeof window<"u"&&(i.redirectTo=window.location.origin+window.location.pathname);const o=await Tt.signUp(i);if(this.currentUser=o.user,this.currentHousehold=o.activeHousehold,this.userHouseholds=o.households||(o.activeHousehold?[o.activeHousehold]:[]),o.token&&localStorage.setItem("dooty_auth_token",o.token),o.activeHousehold){localStorage.setItem("dooty_household_id",o.activeHousehold.id),localStorage.setItem("dooty_household_data",JSON.stringify(o.activeHousehold));const s=o.activeHousehold.pets||[];this.pets=s,s.length>0?(this.currentPet=s[0],localStorage.setItem("dooty_pet_id",this.currentPet.id),await this.refreshEvents()):this.currentPet=null,this.loadPendingInvites()}this.authView="signin"}finally{this.isLoading=!1,this.notify()}}async signIn(i){this.isLoading=!0,this.notify();try{const o=await Tt.signIn(i);if(this.currentUser=o.user,this.currentHousehold=o.activeHousehold,this.userHouseholds=o.households||(o.activeHousehold?[o.activeHousehold]:[]),o.token&&localStorage.setItem("dooty_auth_token",o.token),o.activeHousehold){localStorage.setItem("dooty_household_id",o.activeHousehold.id),localStorage.setItem("dooty_household_data",JSON.stringify(o.activeHousehold));const s=o.activeHousehold.pets||[];this.pets=s,s.length>0?(this.currentPet=s[0],localStorage.setItem("dooty_pet_id",this.currentPet.id),await this.refreshEvents()):this.currentPet=null,this.loadPendingInvites()}this.authView="signin"}finally{this.isLoading=!1,this.notify()}}async joinAuthenticated(i,o){this.isLoading=!0,this.notify();try{const s=await Tt.joinAuthenticated(i,o);if(this.userHouseholds=s.households||[],s.activeHousehold){this.currentHousehold=s.activeHousehold,localStorage.setItem("dooty_household_id",s.activeHousehold.id),localStorage.setItem("dooty_household_data",JSON.stringify(s.activeHousehold));const r=s.activeHousehold.pets||[];this.pets=r,r.length>0&&(this.currentPet=r[0],localStorage.setItem("dooty_pet_id",this.currentPet.id),await this.refreshEvents()),this.loadPendingInvites()}}finally{this.isLoading=!1,this.notify()}}async claimHousehold(i,o){this.isLoading=!0,this.notify();try{const s=await Tt.claimHousehold(i,o);if(this.userHouseholds=s.households||[],s.activeHousehold){this.currentHousehold=s.activeHousehold,localStorage.setItem("dooty_household_id",s.activeHousehold.id),localStorage.setItem("dooty_household_data",JSON.stringify(s.activeHousehold));const r=s.activeHousehold.pets||[];this.pets=r,r.length>0&&(this.currentPet=r[0],localStorage.setItem("dooty_pet_id",this.currentPet.id),await this.refreshEvents()),this.loadPendingInvites()}}finally{this.isLoading=!1,this.notify()}}async removeMember(i){if(this.currentHousehold){this.isLoading=!0,this.notify();try{await Tt.removeMember(this.currentHousehold.id,i),this.currentHousehold.members=(this.currentHousehold.members||[]).filter(o=>o.id!==i),localStorage.setItem("dooty_household_data",JSON.stringify(this.currentHousehold))}finally{this.isLoading=!1,this.notify()}}}async checkPendingSync(){const i=await na();this.pendingSyncCount=i.length,this.notify()}}const g=new Tl;var Ll=function(h,i,o,s){var r=arguments.length,l=r<3?i:s===null?s=Object.getOwnPropertyDescriptor(i,o):s,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,i,o,s);else for(var u=h.length-1;u>=0;u--)(c=h[u])&&(l=(r<3?c(l):r>3?c(i,o,l):c(i,o))||l);return r>3&&l&&Object.defineProperty(i,o,l),l},We;let Hs=(We=class extends yt{connectedCallback(){super.connectedCallback(),this.unsubscribe=g.subscribe(()=>this.requestUpdate())}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.unsubscribe)==null||i.call(this)}render(){const i=g.currentLocale==="ko",o=g.activeTab;return b`
      <div class="dock-container">
        <!-- 1. Today Tab -->
        <div
          class="dock-tab ${o==="today"?"active":""}"
          @click=${()=>g.setActiveTab("today")}
        >
          <div class="icon-today">
            <div class="icon-today-bar"></div>
          </div>
          <div class="dock-label">${i?"오늘":"Today"}</div>
        </div>

        <!-- 2. Map Tab -->
        <div
          class="dock-tab ${o==="map"?"active":""}"
          @click=${()=>g.setActiveTab("map")}
        >
          <div class="icon-map-wrap">
            <div class="icon-map-pin">
              <div class="icon-map-dot"></div>
            </div>
          </div>
          <div class="dock-label">${i?"지도":"Map"}</div>
        </div>

        <!-- 3. Center Elevated Log FAB Button -->
        <div
          class="fab-btn"
          @click=${()=>g.openLogger()}
          title=${i?"기록하기":"Log event"}
        >
          <div class="fab-inner">
            <div class="fab-l1"></div>
            <div class="fab-l2"></div>
            <div class="fab-l3"></div>
          </div>
        </div>

        <!-- 4. History Tab -->
        <div
          class="dock-tab ${o==="history"?"active":""}"
          @click=${()=>g.setActiveTab("history")}
        >
          <div class="icon-history">
            <div class="grid-cell dark"></div>
            <div class="grid-cell dark"></div>
            <div class="grid-cell muted"></div>
            <div class="grid-cell dark"></div>
            <div class="grid-cell muted"></div>
            <div class="grid-cell dark"></div>
            <div class="grid-cell muted"></div>
            <div class="grid-cell dark"></div>
            <div class="grid-cell dark"></div>
          </div>
          <div class="dock-label">${i?"기록":"History"}</div>
        </div>

        <!-- 5. Numbers Tab -->
        <div
          class="dock-tab ${o==="analytics"?"active":""}"
          @click=${()=>g.setActiveTab("analytics")}
        >
          <div class="icon-numbers">
            <div class="bar bar-1"></div>
            <div class="bar bar-2"></div>
            <div class="bar bar-3"></div>
          </div>
          <div class="dock-label">${i?"숫자":"Numbers"}</div>
        </div>
      </div>
    `}},We.styles=zt`
    :host {
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 24px;
      width: 100%;
      padding: 0 16px;
      box-sizing: border-box;
      z-index: 70;
      pointer-events: none;
    }

    .dock-container {
      pointer-events: auto;
      display: flex;
      align-items: center;
      gap: 6px;
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 26px;
      padding: 8px;
      box-shadow: 5px 5px 0 #17140F;
      box-sizing: border-box;
    }

    .dock-tab {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 4px;
      min-height: 50px;
      border-radius: 19px;
      cursor: pointer;
      background: #FFF;
      border: 2.5px solid transparent;
      transition: all 0.15s ease;
      user-select: none;
      box-sizing: border-box;
    }

    .dock-tab:hover {
      background: #FFFDF7;
    }

    .dock-tab.active {
      background: #FFCE2E;
      border: 2.5px solid #17140F;
    }

    .dock-tab:active {
      transform: translateY(1px);
    }

    .dock-label {
      font-size: 9.5px;
      font-weight: 800;
      color: #17140F;
      letter-spacing: 0.2px;
      line-height: 1;
      font-family: var(--font-body);
    }

    :host-context(body.lang-ko) .dock-label {
      font-size: 10px;
      letter-spacing: 0;
    }

    /* Today Icon */
    .icon-today {
      width: 17px;
      height: 16px;
      border: 2.5px solid #17140F;
      border-radius: 5px;
      box-sizing: border-box;
      background: #FFF;
      position: relative;
      overflow: hidden;
      flex: none;
    }

    .icon-today-bar {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4.5px;
      background: #17140F;
    }

    /* Map Icon */
    .icon-map-wrap {
      width: 16px;
      height: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex: none;
    }

    .icon-map-pin {
      width: 14px;
      height: 14px;
      border: 2.5px solid #17140F;
      background: #FFF;
      border-radius: 50% 50% 50% 2px;
      transform: rotate(-45deg);
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .icon-map-dot {
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: #17140F;
    }

    /* History 3x3 Grid Icon */
    .icon-history {
      width: 17px;
      height: 16px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr);
      gap: 1.5px;
      flex: none;
    }

    .grid-cell {
      border-radius: 1px;
    }

    .grid-cell.dark {
      background: #17140F;
    }

    .grid-cell.muted {
      background: #C9C0AE;
    }

    /* Numbers Icon */
    .icon-numbers {
      display: flex;
      align-items: flex-end;
      gap: 2.5px;
      height: 16px;
      flex: none;
    }

    .bar {
      width: 4px;
      background: #17140F;
      border-radius: 2px;
    }

    .bar-1 { height: 8px; }
    .bar-2 { height: 16px; }
    .bar-3 { height: 11px; }

    /* Central Elevated Log FAB */
    .fab-btn {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      flex: none;
      align-self: flex-start;
      margin: -20px 3px 0;
      border: 3px solid #17140F;
      background: #FF5A3C;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2px;
      padding-bottom: 5px;
      box-sizing: border-box;
      cursor: pointer;
      box-shadow: 3px 4px 0 #17140F;
      transition: background 0.15s ease, transform 0.1s ease, box-shadow 0.1s ease;
      user-select: none;
    }

    .fab-btn:hover {
      background: #FF7659;
    }

    .fab-btn:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 2px 0 #17140F;
    }

    .fab-inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
      animation: tb-breathe 3.2s ease-in-out infinite;
    }

    .fab-l1 {
      width: 11px;
      height: 5px;
      border-radius: 50%;
      background: #FFF;
    }

    .fab-l2 {
      width: 17px;
      height: 6px;
      border-radius: 50%;
      background: #FFF;
    }

    .fab-l3 {
      width: 23px;
      height: 7px;
      border-radius: 50%;
      background: #FFF;
    }
  `,We);Hs=Ll([At("dooty-dock")],Hs);var sa=function(h,i,o,s){var r=arguments.length,l=r<3?i:s===null?s=Object.getOwnPropertyDescriptor(i,o):s,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,i,o,s);else for(var u=h.length-1;u>=0;u--)(c=h[u])&&(l=(r<3?c(l):r>3?c(i,o,l):c(i,o))||l);return r>3&&l&&Object.defineProperty(i,o,l),l},Ue;let gn=(Ue=class extends yt{connectedCallback(){super.connectedCallback(),this.unsubscribe=g.subscribe(()=>this.requestUpdate())}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.unsubscribe)==null||i.call(this)}formatTime(i){const o=new Date(i);return isNaN(o.getTime())?"":o.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}).toLowerCase()}getEventVisuals(i){switch(i){case"poop":return{tag:"P",bg:"#FFCE2E"};case"pee":return{tag:"U",bg:"#BFD0FF"};case"walk":return{tag:"W",bg:"#9EC6E8"};case"medicine":return{tag:"M",bg:"#1FC99B"};case"vomit":return{tag:"V",bg:"#FF9A3C"};case"weight":return{tag:"KG",bg:"#2B5BE8"};case"vet":return{tag:"D",bg:"#FFD15C"};case"symptom":return{tag:"S",bg:"#FF5A3C"};case"food":return{tag:"F",bg:"#FFB800"};case"water":return{tag:"H",bg:"#60A5FA"};case"playing":return{tag:"T",bg:"#FBBF24"};case"grooming":return{tag:"G",bg:"#F472B6"};default:return{tag:"E",bg:"#FFCE2E"}}}render(){var V,at,A,k;const i=g.currentLocale==="ko",o=((V=g.currentPet)==null?void 0:V.name)||(i?"반려견":"My Pet"),s=((at=g.currentPet)==null?void 0:at.id)||"",r=g.events||[],l=rl(r,s),c=r.length,u=new Date;u.setHours(0,0,0,0);const f=r.filter(R=>new Date(R.timestamp)>=u);let v=0;if(r.length>=2){const R=[...r].sort((U,C)=>new Date(U.timestamp).getTime()-new Date(C.timestamp).getTime());for(let U=1;U<R.length;U++){const C=(new Date(R[U].timestamp).getTime()-new Date(R[U-1].timestamp).getTime())/36e5;C>v&&(v=C)}}const w=new Date().getHours(),x=w<12?i?`좋은 아침, ${o}!`:`Morning, ${o}.`:w<18?i?`안녕, ${o}!`:`Hey ${o}!`:i?`좋은 저녁, ${o}!`:`Evening, ${o}.`,_=f.length===0?i?"오늘의 첫 기록을 시작해볼까요?":"Ready for today’s first log.":i?`오늘 ${f.length}번 완료.`:`${f.length} down today.`,T=l.currentStreakDays,$=l.nextPoopPrediction||ea(r,s),S=i?$.timeDisplayKo:$.timeDisplay,D=i?$.subtextKo:$.subtext,M=$.progressPercent,Z=Math.max(1,l.dailyFrequencies.length),W=c>0?(c/Z).toFixed(1):"0.0",st=(A=g.currentPet)==null?void 0:A.avatarUrl,O=(((k=g.currentUser)==null?void 0:k.displayName)||"S").charAt(0).toUpperCase();return b`
      <!-- Top Header Row -->
      <div class="top-header-row">
        <div
          class="dog-avatar-btn"
          @click=${()=>g.openPetSwitcher()}
        >
          ${st?b`<img src="${st}" class="dog-avatar-img" alt="Pet" />`:b`<div>${i?`강아지
사진`:`dog
pic`}</div>`}
          ${g.pets.length>1?b`
                <div class="pet-chevron-badge">
                  <div class="pet-chevron-icon"></div>
                </div>
              `:null}
        </div>

        <div class="greeting-col">
          <div class="greeting-text">${x}</div>
          <div style="display: flex; align-items: center; gap: 6px; margin-top: 1px;">
            <span class="vibe-text">${_}</span>
            ${g.isSyncing?b`
                  <span class="sync-pill">
                    <span class="sync-spin"></span>
                    <span>${i?"동기화 중":"Syncing"}</span>
                  </span>
                `:null}
          </div>
        </div>

        <div
          class="user-initial-btn"
          @click=${()=>g.setActiveTab("settings")}
        >
          ${O}
        </div>
      </div>


      <!-- Streak & Next Prediction Card -->
      <div class="prediction-card">
        <div class="streak-badge">
          ${i?`${T}일 연속`:`${T} DAY STREAK`}
        </div>
        <div class="pred-label">
          ${i?"다음은 아마도":"Next one, probably"}
        </div>
        <div class="pred-time">${S}</div>
        <div class="pred-sub">${D}</div>
        <div class="pred-progress-bar">
          <div class="pred-progress-fill" style="width: ${M}%;"></div>
        </div>
      </div>

      <!-- 3 KPI Cards -->
      <div class="kpi-row">
        <div class="kpi-card" style="background: #FFF;">
          <div class="kpi-val" style="color: #17140F;">${W}</div>
          <div class="kpi-lbl" style="color: #6A6152;">${i?"일일 평균":"a day, avg"}</div>
        </div>
        <div class="kpi-card" style="background: #FFF;">
          <div class="kpi-val" style="color: #17140F;">
            ${v>0?`${Math.round(v)}h`:i?"기록 없음":"0h"}
          </div>
          <div class="kpi-lbl" style="color: #6A6152;">${i?"최대 공백":"longest gap"}</div>
        </div>
        <div class="kpi-card" style="background: #2B5BE8;">
          <div class="kpi-val" style="color: #FFF;">${c}</div>
          <div class="kpi-lbl" style="color: #BFD0FF;">${i?"전체 기록":"all time"}</div>
        </div>
      </div>

      <!-- Today Feed Header -->
      <div class="section-row">
        <div class="section-title">${i?"오늘":"Today"}</div>
        <div class="section-count">
          ${i?`${f.length}건`:`${f.length} THINGS`}
        </div>
      </div>

      <!-- Feed List -->
      <div class="feed-list">
        ${f.length>0?f.map(R=>{const{tag:U,bg:C}=this.getEventVisuals(R.eventType);return b`
                <div class="feed-card" @click=${()=>g.openLoggerForEdit(R)}>
                  <div class="feed-badge" style="background: ${C};">${U}</div>
                  <div class="feed-content">
                    <div class="feed-title">
                      ${uo(R.notes,R.eventType,i)}
                    </div>
                    <div class="feed-detail">
                      ${i?`기록자: ${R.loggedByName}`:`logged by ${R.loggedByName}`}
                    </div>
                  </div>
                  <div class="feed-time">${this.formatTime(R.timestamp)}</div>
                </div>
              `}):r.length>0?b`
              <!-- Recent fallback if no logs today -->
              <div style="font-size: 11px; font-weight: 800; color: #9A9080; text-transform: uppercase; margin-bottom: 4px;">
                ${i?"최근 기록":"Recent logs"}
              </div>
              ${r.slice(0,4).map(R=>{const{tag:U,bg:C}=this.getEventVisuals(R.eventType);return b`
                  <div class="feed-card" @click=${()=>g.openLoggerForEdit(R)}>
                    <div class="feed-badge" style="background: ${C};">${U}</div>
                    <div class="feed-content">
                      <div class="feed-title">
                        ${uo(R.notes,R.eventType,i)}
                      </div>
                      <div class="feed-detail">
                        ${new Date(R.timestamp).toLocaleDateString()} · ${R.loggedByName}
                      </div>
                    </div>
                    <div class="feed-time">${this.formatTime(R.timestamp)}</div>
                  </div>
                `})}
            `:b`
              <div class="empty-card">
                <div style="font-family: var(--font-heading); font-weight: 800; font-size: 16px; color: #17140F;">
                  ${i?"아직 기록이 없습니다":"No logs recorded yet"}
                </div>
                <div style="font-size: 12px; line-height: 1.45;">
                  ${i?"하단의 주황색 버튼을 눌러 첫 배변, 식사 또는 산책을 기록해보세요!":"Tap the orange button at the bottom to log your pet’s first poop, walk, or meal!"}
                </div>
              </div>
            `}
      </div>

      <!-- Wrapped Banner Card -->
      <div
        class="wrapped-card"
        @click=${()=>this.dispatchEvent(new CustomEvent("dooty-navigate",{bubbles:!0,composed:!0,detail:"wrapped"}))}
      >
        <div style="flex: 1;">
          <div class="wrapped-title">
            ${i?"Dooty 결산 2026":"Dooty Wrapped 2026"}
          </div>
          <div class="wrapped-sub">
            ${i?`올해 ${c}번, 기록을 확인하세요.`:`${c} logs so far. Tap to view records.`}
          </div>
        </div>
        <div class="wrapped-arrow">›</div>
      </div>
    `}},Ue.styles=zt`
    :host {
      display: block;
      padding: 58px 18px 140px;
      box-sizing: border-box;
    }

    .top-header-row {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 14px;
    }

    .dog-avatar-btn {
      position: relative;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      flex: none;
      border: 3px solid #17140F;
      background: #FFFFFF;
      overflow: visible;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 8.5px;
      font-weight: 800;
      color: #8A7F68;
      text-align: center;
      cursor: pointer;
      box-shadow: 3px 3px 0 #17140F;
      line-height: 1.15;
      user-select: none;
      transition: transform 0.13s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.13s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .dog-avatar-btn:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .dog-avatar-img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      display: block;
    }

    .pet-chevron-badge {
      position: absolute;
      right: -3px;
      bottom: -3px;
      width: 21px;
      height: 21px;
      border-radius: 50%;
      border: 2.5px solid #17140F;
      background: #FFCE2E;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .pet-chevron-icon {
      width: 0;
      height: 0;
      border-top: 5px solid #17140F;
      border-left: 4.5px solid transparent;
      border-right: 4.5px solid transparent;
    }

    .greeting-col {
      flex: 1;
      min-width: 0;
    }

    .greeting-text {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 24px;
      color: #17140F;
      line-height: 1.1;
      letter-spacing: -0.7px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .vibe-text {
      font-size: 12.5px;
      color: #6A6152;
      font-weight: 600;
      margin-top: 1px;
    }

    .user-initial-btn {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 3px solid #17140F;
      background: #FFCE2E;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 3px 3px 0 #17140F;
      flex: none;
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 16px;
      color: #17140F;
      user-select: none;
      transition: transform 0.13s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.13s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .user-initial-btn:hover {
      transform: translate(-1px, -1px);
      box-shadow: 4px 4px 0 #17140F;
    }

    .user-initial-btn:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }


    .sync-pill {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      background: #FFF9E9;
      border: 1.5px solid #17140F;
      border-radius: 10px;
      padding: 2px 7px;
      font-size: 10px;
      font-weight: 800;
      color: #6A6152;
      box-shadow: 1.5px 1.5px 0 #17140F;
    }

    .sync-spin {
      width: 8px;
      height: 8px;
      border: 1.5px solid #17140F;
      border-top-color: transparent;
      border-radius: 50%;
      animation: spin-sync 0.7s linear infinite;
    }

    @keyframes spin-sync {
      to { transform: rotate(360deg); }
    }

    /* Prediction Card */
    .prediction-card {
      background: #FFCE2E;
      border: 3px solid #17140F;
      border-radius: 24px;
      padding: 17px 18px;
      box-shadow: 5px 5px 0 #17140F;
      position: relative;
      margin-bottom: 14px;
    }

    .streak-badge {
      position: absolute;
      right: 14px;
      top: -11px;
      background: #FF5A3C;
      border: 3px solid #17140F;
      border-radius: 11px;
      padding: 3px 9px;
      transform: rotate(4deg);
      font-size: 11px;
      font-weight: 800;
      color: #FFF;
      letter-spacing: 0.4px;
    }

    .pred-label {
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 1.6px;
      color: #7A5C00;
      text-transform: uppercase;
    }

    .pred-time {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: clamp(28px, 8vw, 38px);
      color: #17140F;
      line-height: 1.08;
      letter-spacing: -1.2px;
      margin-top: 3px;
      word-break: keep-all;
    }

    .pred-sub {
      font-size: 12.5px;
      font-weight: 700;
      color: #7A5C00;
      margin-top: 3px;
    }

    .pred-progress-bar {
      margin-top: 14px;
      height: 14px;
      border-radius: 14px;
      border: 2.5px solid #17140F;
      background: #FFF;
      overflow: hidden;
    }

    .pred-progress-fill {
      height: 100%;
      background: #FF5A3C;
      border-right: 2.5px solid #17140F;
      box-sizing: border-box;
      transition: width 0.3s ease;
    }

    /* KPI Row */
    .kpi-row {
      display: flex;
      gap: 10px;
      margin-bottom: 14px;
    }

    .kpi-card {
      flex: 1;
      border: 3px solid #17140F;
      border-radius: 18px;
      padding: 12px;
      box-shadow: 3px 3px 0 #17140F;
    }

    .kpi-val {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 20px;
      line-height: 1;
      letter-spacing: -0.8px;
    }

    .kpi-lbl {
      font-size: 10px;
      font-weight: 700;
      margin-top: 4px;
      line-height: 1.3;
    }

    /* Feed */
    .section-row {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      margin-top: 5px;
      margin-bottom: 10px;
    }

    .section-title {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 20px;
      color: #17140F;
      letter-spacing: -0.5px;
    }

    .section-count {
      font-size: 11.5px;
      font-weight: 800;
      color: #9A9080;
      letter-spacing: 0.5px;
    }

    .feed-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 14px;
    }

    .feed-card {
      display: flex;
      gap: 12px;
      align-items: center;
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 20px;
      padding: 12px 14px;
      box-shadow: 3px 3px 0 #17140F;
      cursor: pointer;
      user-select: none;
      transition: transform 0.1s ease, box-shadow 0.1s ease;
    }

    .feed-card:hover {
      transform: translate(-1px, -1px);
      box-shadow: 4px 4px 0 #17140F;
    }

    .feed-card:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .feed-badge {
      width: 40px;
      height: 40px;
      border-radius: 14px;
      flex: none;
      border: 2.5px solid #17140F;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 16px;
      color: #17140F;
    }

    .feed-content {
      flex: 1;
      min-width: 0;
    }

    .feed-title {
      font-size: 14.5px;
      font-weight: 800;
      color: #17140F;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .feed-detail {
      font-size: 12px;
      color: #6A6152;
      font-weight: 600;
      margin-top: 1px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .feed-time {
      font-size: 12px;
      font-weight: 800;
      color: #9A9080;
      flex: none;
    }

    .empty-card {
      background: #FFF;
      border: 3px dashed #17140F;
      border-radius: 20px;
      padding: 24px 18px;
      text-align: center;
      color: #6A6152;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }

    /* Wrapped Banner */
    .wrapped-card {
      margin-top: 6px;
      background: #2B5BE8;
      border: 3px solid #17140F;
      border-radius: 22px;
      padding: 16px 18px;
      display: flex;
      align-items: center;
      gap: 13px;
      cursor: pointer;
      box-shadow: 5px 5px 0 #17140F;
      transition: transform 0.1s ease, box-shadow 0.1s ease;
    }

    .wrapped-card:hover {
      transform: translate(-1px, -1px);
      box-shadow: 7px 7px 0 #17140F;
    }

    .wrapped-title {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 19px;
      color: #FFF;
      letter-spacing: -0.4px;
    }

    .wrapped-sub {
      font-size: 12px;
      font-weight: 700;
      color: #BFD0FF;
      margin-top: 2px;
    }

    .wrapped-arrow {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      border: 2.5px solid #17140F;
      background: #FFCE2E;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 17px;
      font-weight: 800;
      color: #17140F;
      flex: none;
    }
  `,Ue);sa([z()],gn.prototype,"unsubscribe",void 0);gn=sa([At("dooty-home")],gn);var _n=function(h,i,o,s){var r=arguments.length,l=r<3?i:s===null?s=Object.getOwnPropertyDescriptor(i,o):s,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,i,o,s);else for(var u=h.length-1;u>=0;u--)(c=h[u])&&(l=(r<3?c(l):r>3?c(i,o,l):c(i,o))||l);return r>3&&l&&Object.defineProperty(i,o,l),l},Ze;let fo=(Ze=class extends yt{constructor(){super(...arguments),this.searchSheetOpen=!1,this.searchQuery=""}connectedCallback(){super.connectedCallback(),this.unsubscribe=g.subscribe(()=>this.requestUpdate())}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.unsubscribe)==null||i.call(this)}getTypeColor(i){switch(i){case"poop":return"#FFCE2E";case"pee":return"#BFD0FF";case"medicine":case"meds":return"#1FC99B";case"walk":return"#9EC6E8";case"weight":return"#FFB39A";case"vomit":return"#FF9F9F";case"vet":return"#FFEAA0";default:return"#E3D8BE"}}getTypeTag(i,o){switch(i){case"poop":return o?"응가":"P";case"pee":return o?"쉬야":"U";case"medicine":case"meds":return o?"약":"M";case"walk":return o?"산책":"W";case"weight":return o?"체중":"K";case"vomit":return o?"구토":"V";case"vet":return o?"병원":"H";default:return o?"기록":"E"}}getTypeName(i,o){switch(i){case"poop":return o?"응가":"Poop";case"pee":return o?"쉬야":"Pee";case"medicine":case"meds":return o?"약":"Meds";case"walk":return o?"산책":"Walk";case"weight":return o?"체중":"Weight";case"vomit":return o?"구토":"Vomit";case"vet":return o?"병원":"Vet";default:return o?"기타":"Other"}}getEventsForDay(i,o,s){return(g.events||[]).filter(r=>{const l=new Date(r.timestamp);return!(l.getFullYear()!==i||l.getMonth()!==o||l.getDate()!==s||g.historyTypeFilters.length>0&&!g.historyTypeFilters.some(u=>u==="meds"||u==="medicine"?r.eventType==="medicine":r.eventType===u)||g.historyMemberFilter!=="all"&&(r.loggedByName||"Me")!==g.historyMemberFilter)})}render(){var R,U;const i=g.currentLocale==="ko",o=g.currentPet,s=(o==null?void 0:o.name)||(i?"반려견":"Pet"),r=s.charAt(0).toUpperCase(),l=(((R=g.currentUser)==null?void 0:R.displayName)||"S").charAt(0).toUpperCase(),c=new Date,u=new Date(c.getFullYear(),c.getMonth()+g.historyMonthOffset,1),f=u.getFullYear(),v=u.getMonth(),w=["January","February","March","April","May","June","July","August","September","October","November","December"],_=i?`${f}년 ${["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"][v]}`:`${w[v]} ${f}`,T=new Date(f,v+1,0).getDate(),$=(new Date(f,v,1).getDay()+6)%7,S=g.historyMonthOffset===0,D=c.getDate(),M=(g.events||[]).filter(C=>{const et=new Date(C.timestamp);return et.getFullYear()===f&&et.getMonth()===v}).length,Z=["poop","pee","meds","walk","weight","vomit"],W=Array.from(new Set((((U=g.currentHousehold)==null?void 0:U.members)||[]).map(C=>C.displayName).concat(["Me"]))),st=g.historyTypeFilters.length>0||g.historyMemberFilter!=="all"||this.searchQuery!=="",O=g.historySelectedDay,V=O!==null?this.getEventsForDay(f,v,O):[],at=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],A=["일요일","월요일","화요일","수요일","목요일","금요일","토요일"];let k="";if(O!==null){const C=new Date(f,v,O),et=at[C.getDay()],it=A[C.getDay()];k=i?`${v+1}월 ${O}일 ${it}`:`${et} ${O} ${w[v].substring(0,3)}`}return b`
      <div class="history-container">
        <!-- Top Bar -->
        <div class="top-bar">
          <div class="title-area">
            <div class="main-title">${i?"기록":"The record"}</div>
            <div class="sub-title">${i?`${_}에 ${M}건`:`${M} logs in ${_}`}</div>
          </div>
          <div class="pet-btn" @click=${()=>g.openPetSwitcher()}>
            <div class="pet-avatar-dot">${r}</div>
            <div class="pet-btn-name">${s}</div>
            ${g.pets.length>1?b`<div class="chevron-down"></div>`:null}
          </div>
          <div class="settings-btn" @click=${()=>g.setActiveTab("settings")}>
            ${l}
          </div>
        </div>

        <!-- Search Bar -->
        <div class="search-box" @click=${()=>this.searchSheetOpen=!0}>
          <div class="glass-icon">
            <div class="glass-handle"></div>
          </div>
          <div class="search-text ${this.searchQuery?"active":""}">
            ${this.searchQuery?`"${this.searchQuery}"`:i?"메모 및 캡션 검색":"Search notes & photo captions..."}
          </div>
          ${st?b`
                <div
                  class="clear-badge"
                  @click=${C=>{C.stopPropagation(),this.searchQuery="",g.clearHistoryFilters()}}
                >
                  ${i?"초기화":"CLEAR"}
                </div>
              `:null}
        </div>

        <!-- Event Type Filter Chips -->
        <div class="chip-scroll">
          ${Z.map(C=>{const et=g.historyTypeFilters.includes(C);return b`
              <div
                class="filter-chip ${et?"active":""}"
                @click=${()=>g.toggleHistoryTypeFilter(C)}
              >
                <div class="chip-dot" style="background: ${this.getTypeColor(C)};"></div>
                <div class="chip-label">${this.getTypeName(C,i)}</div>
              </div>
            `})}
        </div>

        <!-- By Member Filter Row -->
        <div class="by-row">
          <div class="by-tag">${i?"작성자":"BY"}</div>
          <div class="chip-scroll" style="margin: 0; padding: 2px 0;">
            <div
              class="member-chip ${g.historyMemberFilter==="all"?"active":""}"
              @click=${()=>g.setHistoryMemberFilter("all")}
            >
              <div class="chip-label">${i?"전체":"All"}</div>
            </div>
            ${W.map(C=>{const et=g.historyMemberFilter===C;return b`
                <div
                  class="member-chip ${et?"active":""}"
                  @click=${()=>g.setHistoryMemberFilter(et?"all":C)}
                >
                  <div class="member-dot">${C.charAt(0).toUpperCase()}</div>
                  <div class="chip-label">${C}</div>
                </div>
              `})}
          </div>
        </div>

        <!-- Month Calendar Grid Card -->
        <div class="calendar-card">
          <!-- Calendar Header -->
          <div class="cal-header">
            <div
              class="cal-nav-btn"
              @click=${()=>g.setHistoryMonthOffset(g.historyMonthOffset-1)}
            >
              &#8249;
            </div>
            <div class="cal-month-title">${_}</div>
            <div
              class="cal-nav-btn ${S?"disabled":""}"
              @click=${()=>{S||g.setHistoryMonthOffset(g.historyMonthOffset+1)}}
            >
              &#8250;
            </div>
          </div>

          <!-- Day of Week Names (M T W T F S S) -->
          <div class="day-names-row">
            ${(i?["월","화","수","목","금","토","일"]:["M","T","W","T","F","S","S"]).map(C=>b`<div class="day-name">${C}</div>`)}
          </div>

          <!-- 7-Column Days Grid -->
          <div class="cal-grid">
            <!-- Empty offset cells -->
            ${Array.from({length:$},()=>b`<div class="cal-cell empty"></div>`)}
            <!-- Month days -->
            ${Array.from({length:T},(C,et)=>{const it=et+1,Dt=this.getEventsForDay(f,v,it),lt=S&&it===D,Ft=O===it,H=Dt.slice(0,3).map(Nt=>this.getTypeColor(Nt.eventType));return b`
                <div
                  class="cal-cell ${lt?"today":""} ${Ft?"selected":""}"
                  style="animation-delay: ${et*.015}s;"
                  @click=${()=>{O===it?g.setHistorySelectedDay(null):g.setHistorySelectedDay(it)}}
                >
                  <div class="cell-num">${it}</div>
                  <div class="cell-dots">
                    ${H.map(Nt=>b`<div class="event-dot" style="background: ${Nt};"></div>`)}
                  </div>
                </div>
              `})}
          </div>
        </div>

        <!-- Selected Day Expanded Accordion -->
        ${O!==null&&V.length>0?b`
              <div class="day-detail-card">
                <div class="day-detail-header">
                  <div style="flex: 1; min-width: 0;">
                    <div class="day-detail-title">${k}</div>
                    <div class="day-detail-sub">
                      ${i?`${V.length}건의 기록`:`${V.length} events logged`}
                    </div>
                  </div>
                  <div class="close-btn" @click=${()=>g.setHistorySelectedDay(null)}>
                    &#10005;
                  </div>
                </div>

                <div style="display: flex; flex-direction: column; gap: 8px;">
                  ${V.map(C=>{const it=new Date(C.timestamp).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),Dt=this.getTypeTag(C.eventType,i),lt=this.getTypeColor(C.eventType),Ft=C.metadata||{};let H=C.notes||"";return C.eventType==="poop"?H=`Type ${Ft.consistency||4} · ${Ft.size||"M"} · ${Ft.mood||"Normal"}`:C.eventType==="medicine"?H=`${Ft.medication||"Medication"} · ${Ft.dosage||"1 dose"}`:C.eventType==="walk"&&(H=`${Ft.walkDuration||"30 min"} · ${Ft.walkDistance||"2.0 km"}`),b`
                      <div class="event-row" @click=${()=>g.openLoggerForEdit(C)}>
                        <div class="event-tag-badge" style="background: ${lt};">${Dt}</div>
                        <div class="event-body">
                          <div class="event-title">${C.notes||this.getTypeName(C.eventType,i)}</div>
                          <div class="event-detail">${H}</div>
                        </div>
                        <div class="event-time-col">
                          <div class="event-time">${it}</div>
                          <div class="event-who">${C.loggedByName||"Me"}</div>
                        </div>
                      </div>
                    `})}
                </div>
              </div>
            `:O!==null&&V.length===0?b`
              <div class="empty-day-card">
                <div class="empty-day-title">${k}</div>
                <div class="empty-day-sub">${i?"기록이 없습니다. 수상하군요.":"Nothing logged. Suspicious."}</div>
              </div>
            `:null}


        <!-- Bottom Safe Space for Dock -->
        <div style="height: 100px;"></div>
      </div>

      <!-- Quick Search Modal Sheet -->
      ${this.searchSheetOpen?b`
            <div class="search-modal-backdrop" @click=${()=>this.searchSheetOpen=!1}>
              <div class="search-modal" @click=${C=>C.stopPropagation()}>
                <div style="display: flex; align-items: center; justify-content: space-between;">
                  <div style="font-family: var(--font-heading); font-weight: 800; font-size: 20px; color: #17140F;">
                    ${i?"기록 검색":"Search records"}
                  </div>
                  <div class="close-btn" @click=${()=>this.searchSheetOpen=!1}>&#10005;</div>
                </div>

                <div class="search-input-box">
                  <div class="glass-icon"><div class="glass-handle"></div></div>
                  <input
                    type="text"
                    class="search-input"
                    placeholder=${i?"메모나 캡션 검색...":"Search notes or captions..."}
                    .value=${this.searchQuery}
                    @input=${C=>{this.searchQuery=C.target.value}}
                  />
                </div>

                <div class="search-results-list">
                  ${(g.events||[]).filter(C=>{if(!this.searchQuery)return!0;const et=this.searchQuery.toLowerCase();return C.notes&&C.notes.toLowerCase().includes(et)||C.eventType&&C.eventType.toLowerCase().includes(et)||C.loggedByName&&C.loggedByName.toLowerCase().includes(et)}).slice(0,15).map(C=>{const et=new Date(C.timestamp),it=et.toLocaleDateString([],{month:"short",day:"numeric"}),Dt=et.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"});return b`
                        <div
                          class="event-row"
                          @click=${()=>{this.searchSheetOpen=!1,g.openLoggerForEdit(C)}}
                        >
                          <div class="event-tag-badge" style="background: ${this.getTypeColor(C.eventType)};">
                            ${this.getTypeTag(C.eventType,i)}
                          </div>
                          <div class="event-body">
                            <div class="event-title">${C.notes||this.getTypeName(C.eventType,i)}</div>
                            <div class="event-detail">${it} · ${Dt}</div>
                          </div>
                          <div class="event-who">${C.loggedByName||"Me"}</div>
                        </div>
                      `})}
                </div>
              </div>
            </div>
          `:null}
    `}},Ze.styles=zt`
    :host {
      display: block;
      width: 100%;
      min-height: 100%;
      background: var(--color-cream-light, #FFFBF2);
      box-sizing: border-box;
      animation: tb-screen 0.24s cubic-bezier(0.23, 1, 0.32, 1) both;
    }

    .history-container {
      padding: 56px 18px 24px;
      display: flex;
      flex-direction: column;
      gap: 13px;
      box-sizing: border-box;
    }

    /* Top Bar */
    .top-bar {
      display: flex;
      align-items: flex-start;
      gap: 12px;
    }

    .title-area {
      flex: 1;
      min-width: 0;
    }

    .main-title {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 29px;
      color: #17140F;
      letter-spacing: -1px;
      line-height: 1.1;
    }

    .sub-title {
      font-size: 12px;
      font-weight: 600;
      color: #6A6152;
      margin-top: 2px;
    }

    .pet-btn {
      display: flex;
      align-items: center;
      gap: 6px;
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 17px;
      padding: 4px 9px 4px 4px;
      cursor: pointer;
      box-shadow: 3px 3px 0 #17140F;
      flex: none;
      transition: transform 0.13s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.13s cubic-bezier(0.23, 1, 0.32, 1);
      user-select: none;
    }

    .pet-btn:hover {
      transform: translate(-1px, -1px);
      box-shadow: 4px 4px 0 #17140F;
    }

    .pet-btn:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .pet-avatar-dot {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      border: 2.5px solid #17140F;
      background: #FFCE2E;
      flex: none;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 12px;
      color: #17140F;
    }

    .pet-btn-name {
      font-size: 12.5px;
      font-weight: 800;
      color: #17140F;
      max-width: 70px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .chevron-down {
      width: 0;
      height: 0;
      border-top: 5px solid #17140F;
      border-left: 4.5px solid transparent;
      border-right: 4.5px solid transparent;
      flex: none;
      margin-right: 1px;
    }

    .settings-btn {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 3px solid #17140F;
      background: #FFCE2E;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 3px 3px 0 #17140F;
      flex: none;
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 16px;
      color: #17140F;
      transition: transform 0.13s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.13s cubic-bezier(0.23, 1, 0.32, 1);
      user-select: none;
    }

    .settings-btn:hover {
      transform: translate(-1px, -1px);
      box-shadow: 4px 4px 0 #17140F;
    }

    .settings-btn:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    /* Search Bar */
    .search-box {
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 18px;
      padding: 11px 14px;
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      box-shadow: 3px 3px 0 #17140F;
      transition: transform 0.13s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.13s cubic-bezier(0.23, 1, 0.32, 1);
      user-select: none;
    }

    .search-box:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .glass-icon {
      width: 15px;
      height: 15px;
      border: 2.5px solid #17140F;
      border-radius: 50%;
      flex: none;
      position: relative;
      box-sizing: border-box;
    }

    .glass-handle {
      position: absolute;
      right: -4px;
      bottom: -4px;
      width: 7px;
      height: 2.5px;
      background: #17140F;
      border-radius: 2px;
      transform: rotate(45deg);
    }

    .search-text {
      flex: 1;
      min-width: 0;
      font-size: 13px;
      font-weight: 700;
      color: #9A9080;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .search-text.active {
      color: #17140F;
    }

    .clear-badge {
      background: #FF5A3C;
      border: 2.5px solid #17140F;
      border-radius: 11px;
      padding: 3px 9px;
      font-size: 10px;
      font-weight: 800;
      color: #FFF;
      flex: none;
      cursor: pointer;
    }

    .clear-badge:active {
      transform: scale(0.965);
    }

    /* Scrollable Filter Chips */
    .chip-scroll {
      display: flex;
      gap: 7px;
      overflow-x: auto;
      overflow-y: hidden;
      scrollbar-width: none;
      -ms-overflow-style: none;
      padding: 2px 18px 3px;
      margin: 0 -18px;
    }

    .chip-scroll::-webkit-scrollbar {
      display: none;
    }

    .filter-chip {
      flex: none;
      display: flex;
      align-items: center;
      gap: 6px;
      background: #FFF;
      border: 2.5px solid #17140F;
      border-radius: 15px;
      padding: 7px 11px;
      cursor: pointer;
      box-shadow: 3px 3px 0 #17140F;
      transition: transform 0.13s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.13s cubic-bezier(0.23, 1, 0.32, 1);
      user-select: none;
    }

    .filter-chip.active {
      background: #FFCE2E;
      box-shadow: 1px 1px 0 #17140F;
    }

    .filter-chip:active {
      transform: scale(0.965);
    }

    .chip-dot {
      width: 9px;
      height: 9px;
      border-radius: 50%;
      border: 2px solid #17140F;
      box-sizing: border-box;
      flex: none;
    }

    .chip-label {
      font-size: 11.5px;
      font-weight: 800;
      color: #17140F;
      white-space: nowrap;
    }

    /* By Members Filter Row */
    .by-row {
      display: flex;
      gap: 8px;
      align-items: center;
    }

    .by-tag {
      font-size: 9.5px;
      font-weight: 800;
      letter-spacing: 1.2px;
      color: #9A9080;
      flex: none;
    }

    .member-chip {
      flex: none;
      display: flex;
      align-items: center;
      gap: 6px;
      background: #FFF;
      border: 2.5px solid #17140F;
      border-radius: 14px;
      padding: 7px 11px 7px 7px;
      cursor: pointer;
      box-shadow: 3px 3px 0 #17140F;
      transition: transform 0.13s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.13s cubic-bezier(0.23, 1, 0.32, 1);
      user-select: none;
    }

    .member-chip.active {
      background: #FFCE2E;
      box-shadow: 1px 1px 0 #17140F;
    }

    .member-chip:active {
      transform: scale(0.965);
    }

    .member-dot {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      border: 2px solid #17140F;
      background: #FFCE2E;
      flex: none;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 9.5px;
      font-weight: 900;
      color: #17140F;
    }

    /* Calendar Card */
    .calendar-card {
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 24px;
      padding: 14px;
      box-shadow: 5px 5px 0 #17140F;
      box-sizing: border-box;
    }

    .cal-header {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 12px;
    }

    .cal-nav-btn {
      width: 32px;
      height: 32px;
      border-radius: 11px;
      border: 2.5px solid #17140F;
      background: #FFFBF2;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      font-weight: 800;
      color: #17140F;
      cursor: pointer;
      flex: none;
      user-select: none;
      transition: transform 0.13s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .cal-nav-btn.disabled {
      opacity: 0.35;
      cursor: default;
      pointer-events: none;
    }

    .cal-nav-btn:active {
      transform: scale(0.965);
    }

    .cal-month-title {
      flex: 1;
      text-align: center;
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 19px;
      color: #17140F;
      letter-spacing: -0.5px;
    }

    .day-names-row {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 4px;
      margin-bottom: 6px;
    }

    .day-name {
      text-align: center;
      font-size: 9px;
      font-weight: 800;
      color: #9A9080;
      letter-spacing: 0.4px;
    }

    .cal-grid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 4px;
    }

    .cal-cell {
      aspect-ratio: 1;
      border-radius: 11px;
      border: 2px solid transparent;
      background: #FFFBF2;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2px;
      cursor: pointer;
      user-select: none;
      animation: tb-cell 0.3s cubic-bezier(0.23, 1, 0.32, 1) both;
      box-sizing: border-box;
      transition: transform 0.1s ease;
    }

    .cal-cell.empty {
      background: transparent;
      cursor: default;
      pointer-events: none;
      opacity: 0;
    }

    .cal-cell.today {
      border: 2.5px solid #17140F;
      background: #FFF;
    }

    .cal-cell.selected {
      border: 2.5px solid #17140F;
      background: #FFCE2E;
      transform: scale(1.04);
    }

    .cal-cell:active {
      transform: scale(0.96);
    }

    .cell-num {
      font-size: 11.5px;
      font-weight: 800;
      color: #17140F;
      line-height: 1;
    }

    .cell-dots {
      display: flex;
      gap: 1.5px;
      height: 4px;
      align-items: center;
    }

    .event-dot {
      width: 4px;
      height: 4px;
      border-radius: 50%;
    }

    /* Day Detail Card */
    .day-detail-card {
      background: #FFCE2E;
      border: 3px solid #17140F;
      border-radius: 24px;
      padding: 15px;
      box-shadow: 5px 5px 0 #17140F;
      display: flex;
      flex-direction: column;
      gap: 11px;
      animation: tb-screen 0.24s cubic-bezier(0.23, 1, 0.32, 1) both;
    }

    .day-detail-header {
      display: flex;
      align-items: center;
      gap: 11px;
    }

    .day-detail-title {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 22px;
      color: #17140F;
      letter-spacing: -0.7px;
      line-height: 1.1;
    }

    .day-detail-sub {
      font-size: 11.5px;
      font-weight: 700;
      color: #7A5C00;
      margin-top: 1px;
    }

    .close-btn {
      width: 32px;
      height: 32px;
      border-radius: 11px;
      border: 2.5px solid #17140F;
      background: #FFFBF2;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      font-weight: 800;
      color: #17140F;
      cursor: pointer;
      flex: none;
      user-select: none;
    }

    .close-btn:active {
      transform: scale(0.965);
    }

    .event-row {
      display: flex;
      gap: 11px;
      align-items: center;
      background: #FFF;
      border: 2.5px solid #17140F;
      border-radius: 16px;
      padding: 10px 12px;
      cursor: pointer;
      box-sizing: border-box;
      transition: transform 0.13s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.13s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .event-row:hover {
      transform: translate(-1px, -1px);
      box-shadow: 3px 3px 0 #17140F;
    }

    .event-row:active {
      transform: scale(0.965);
    }

    .event-tag-badge {
      width: 34px;
      height: 34px;
      border-radius: 12px;
      flex: none;
      border: 2.5px solid #17140F;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 14px;
      color: #17140F;
    }

    .event-body {
      flex: 1;
      min-width: 0;
    }

    .event-title {
      font-size: 13.5px;
      font-weight: 800;
      color: #17140F;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .event-detail {
      font-size: 11.5px;
      font-weight: 600;
      color: #6A6152;
      margin-top: 1px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .event-time-col {
      text-align: right;
      flex: none;
    }

    .event-time {
      font-size: 11.5px;
      font-weight: 800;
      color: #17140F;
    }

    .event-who {
      font-size: 10px;
      font-weight: 700;
      color: #9A9080;
      margin-top: 1px;
    }

    .empty-day-card {
      background: #FFF;
      border: 3px dashed #17140F;
      border-radius: 24px;
      padding: 22px 18px;
      text-align: center;
      animation: tb-screen 0.24s cubic-bezier(0.23, 1, 0.32, 1) both;
    }

    .empty-day-title {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 19px;
      color: #17140F;
      letter-spacing: -0.5px;
    }

    .empty-day-sub {
      font-size: 12.5px;
      font-weight: 600;
      color: #6A6152;
      margin-top: 3px;
    }

    /* Search Modal Sheet */
    .search-modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(23, 20, 15, 0.45);
      z-index: 200;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      animation: tb-scrim 0.2s ease both;
    }

    .search-modal {
      background: #FFFBF2;
      border-top: 3px solid #17140F;
      border-radius: 28px 28px 0 0;
      padding: 20px 18px 32px;
      display: flex;
      flex-direction: column;
      gap: 14px;
      max-height: 80vh;
      animation: tb-sheet 0.25s cubic-bezier(0.23, 1, 0.32, 1) both;
      box-sizing: border-box;
    }

    .search-input-box {
      display: flex;
      align-items: center;
      gap: 10px;
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 16px;
      padding: 10px 14px;
    }

    .search-input {
      flex: 1;
      border: none;
      background: none;
      font-size: 15px;
      font-weight: 700;
      color: #17140F;
    }

    .search-results-list {
      flex: 1;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  `,Ze);_n([z()],fo.prototype,"searchSheetOpen",void 0);_n([z()],fo.prototype,"searchQuery",void 0);fo=_n([At("dooty-history")],fo);var aa=function(h,i,o,s){var r=arguments.length,l=r<3?i:s===null?s=Object.getOwnPropertyDescriptor(i,o):s,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,i,o,s);else for(var u=h.length-1;u>=0;u--)(c=h[u])&&(l=(r<3?c(l):r>3?c(i,o,l):c(i,o))||l);return r>3&&l&&Object.defineProperty(i,o,l),l},Ge;let mn=(Ge=class extends yt{connectedCallback(){super.connectedCallback(),this.unsubscribe=g.subscribe(()=>this.requestUpdate())}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.unsubscribe)==null||i.call(this)}render(){const i=g.currentLocale==="ko",o=g.analyticsTimeRange||"30d",s=g.events||[];let r=s;const l=Date.now();if(o==="7d"){const E=l-6048e5;r=s.filter(I=>new Date(I.timestamp).getTime()>=E)}else if(o==="30d"){const E=l-2592e6;r=s.filter(I=>new Date(I.timestamp).getTime()>=E)}else if(o==="1y"){const E=l-31536e6;r=s.filter(I=>new Date(I.timestamp).getTime()>=E)}const c=r,u=c.length,f=["MON","TUE","WED","THU","FRI","SAT","SUN"],v=["월","화","수","목","금","토","일"],w=Array.from({length:7},()=>Array(24).fill(0)),x=Array(24).fill(0);let _=Date.now();c.forEach(E=>{const I=new Date(E.timestamp),xt=I.getTime();if(!isNaN(xt)){xt<_&&(_=xt);const Pt=(I.getDay()+6)%7,St=I.getHours();w[Pt][St]++,x[St]++}});let T=1;w.forEach(E=>{E.forEach(I=>{I>T&&(T=I)})});const $=f.map((E,I)=>({day:i?v[I]:E,cells:Array.from({length:24},(xt,Pt)=>{const St=w[I][Pt],Jt=T>0?St/T:0,be=St===0?"#FFF":Jt<.25?"#FFE9A8":Jt<.55?"#FFCE2E":Jt<.8?"#FF9A3C":"#FF5A3C",ye=St===0?"#E6DDC8":"#17140F",Wi=Pt===0?"12 am":Pt<12?`${Pt} am`:Pt===12?"12 pm":`${Pt-12} pm`;return{bg:be,brd:ye,count:St,hourLabel:Wi,dayLabel:i?v[I]:E}})}));let S=7,D=0;x.forEach((E,I)=>{E>D&&(D=E,S=I)});const M=(E,I)=>{const xt=(E+1)%24;if(I){const Pt=E<12?`오전 ${E===0?12:E}`:`오후 ${E===12?12:E-12}`,St=xt<12?`${xt===0?12:xt}`:`${xt===12?12:xt-12}`;return`${Pt}:00–${St}:00`}else{const Pt=St=>{const Jt=St<12?"am":"pm";return`${St%12===0?12:St%12}:00 ${Jt}`};return`${Pt(E)}–${Pt(xt)}`}};let Z=1/0,W=1;for(let E=0;E<24;E++){const I=x[E]+x[(E+1)%24]+x[(E+2)%24];I<Z&&(Z=I,W=E)}const st=M(S,!1),O=M(S,!0),V=Z===0?`He has never gone between ${W%12||12} and ${(W+3)%12||12} ${W<12?"am":"pm"}. Respect.`:`Quietest around ${M(W,!1)}.`,at=Z===0?`새벽 ${W}시에서 ${(W+3)%24}시 사이에는 한 번도 없었습니다. 존경.`:`가장 한산한 시간대는 ${M(W,!0)}입니다.`,A=new Date(_),k=["January","February","March","April","May","June","July","August","September","October","November","December"],R=u>0?`${k[A.getMonth()]} ${A.getFullYear()}`:"March 2021",U=u>0?`${A.getFullYear()}년 ${A.getMonth()+1}월`:"2021년 3월",C=new Date(Date.now()-336*60*60*1e3),et=c.filter(E=>E.eventType==="poop"&&new Date(E.timestamp)>=C),it=et.filter(E=>(E.notes||"").toLowerCase().includes("4")||(E.notes||"").toLowerCase().includes("textbook")).length,Dt=et.length>0?Math.round(it/et.length*100):(u>0,82);let lt=0;if(c.length>=2){const E=[...c].sort((I,xt)=>new Date(I.timestamp).getTime()-new Date(xt.timestamp).getTime());for(let I=1;I<E.length;I++){const xt=(new Date(E[I].timestamp).getTime()-new Date(E[I-1].timestamp).getTime())/36e5;xt>lt&&(lt=xt)}}const Ft=new Date(Date.now()-10080*60*1e3),H=c.filter(E=>E.eventType==="vomit"&&new Date(E.timestamp)>=Ft).length,Nt=Array(12).fill(0),q=Date.now();c.forEach(E=>{const I=Math.floor((q-new Date(E.timestamp).getTime())/6048e5);I>=0&&I<12&&Nt[11-I]++});const ct=Math.max(1,...Nt),mt=Nt.map((E,I)=>{const xt=E===0?8:Math.round(E/ct*88)+8;return{h:`${u>0?xt:[42,58,48,70,65,82,54,76,88,72,60,96][I]}px`,bg:I===11?"#FF5A3C":"#FFCE2E",l:`W${I+1}`}}),vt=c.filter(E=>E.eventType==="walk").length,ht=c.filter(E=>E.eventType==="poop").length;c.filter(E=>E.eventType==="pee").length;const ot=Math.max(1,Math.round(ht*.18+(u>0?0:412))),J=Math.max(1.42,Number((vt*1.8).toFixed(2))),B=[{v:u>0?`${ot} kg`:"412 kg",l:i?"누적 배변량":"career tonnage",bg:"#FFCE2E",sub:"#7A5C00",rot:"-2deg"},{v:u>0?`${J} km`:"1.42 km",l:i?"총 산책 거리":"end to end",bg:"#1FC99B",sub:"#0A5A45",rot:"1.5deg"},{v:lt>0?`${Math.round(lt)} h`:"31 h",l:i?"최장 공백":"longest drought",bg:"#FFF",sub:"#6A6152",rot:"-1deg"},{v:u>0?`${ht} logs`:"62%",l:i?"동네 정복률":"block conquered",bg:"#FF5A3C",sub:"#7A1E0C",rot:"2deg"}],X=u>0?u/24:1,It=x.slice(6,12).reduce((E,I)=>E+I,0)/6,ge=u>0?Math.round((It-X)/X*100):25,me=x.slice(12,18).reduce((E,I)=>E+I,0)/6,Ri=u>0?Math.round((me-X)/X*100):10,ve=w[5].reduce((E,I)=>E+I,0)+w[6].reduce((E,I)=>E+I,0),Hi=u-ve,di=ve/2,de=Hi/5,_o=de>0&&u>0?Math.round((di-de)/de*100):u>0?0:14,ci=(x[21]+x[22]+x[23]+x[0]+x[1]+x[2]+x[3]+x[4]+x[5])/9,ji=u>0?Math.round((ci-X)/X*100):-65,xe=(E,I,xt)=>{const Pt=I>=0,St=Math.abs(I),Jt=Math.min(48,Math.max(3,Math.round(St/100*48))),be=Pt?"50%":`${50-Jt}%`,ye=I===0?"0%":`${Pt?"+":"−"}${St}%`;return{l:E,v:ye,left:be,w:`${Jt}%`,bg:xt}},ko=[xe(i?"오전 6–12시":"Morning (6–12)",ge,"#FF9A3C"),xe(i?"오후 12–18시":"Afternoon (12–18)",Ri,"#1FC99B"),xe(i?"주말 (토·일)":"Weekends",_o,"#FF5A3C"),xe(i?"심야 21–6시":"Night (21–6)",ji,"#9EC6E8")],$o=o==="7d"?i?"7일":"7 DAYS":o==="30d"?i?"30일":"30 DAYS":o==="1y"?i?"1년":"1 YEAR":i?"전체":"ALL TIME",hi=o==="7d"?i?`지난 7일간 ${u.toLocaleString()}건`:`${u.toLocaleString()} logs in last 7 days`:o==="30d"?i?`지난 30일간 ${u.toLocaleString()}건`:`${u.toLocaleString()} logs in last 30 days`:o==="1y"?i?`지난 1년간 ${u.toLocaleString()}건`:`${u.toLocaleString()} logs in last year`:i?u>0?`${U}부터 ${u.toLocaleString()}건`:"2021년 3월부터 1,204건":u>0?`${u.toLocaleString()} logs since ${R}`:"1,204 logs since March 2021";return b`
      <div class="page-header">
        <div class="page-title">${i?"숫자들":"The numbers"}</div>
        <div class="page-sub">${hi}</div>
      </div>

      <!-- Segmented Time-Range Selector -->
      <div class="time-selector-row">
        <button
          class="time-pill-btn ${o==="7d"?"active":""}"
          @click=${()=>g.setAnalyticsTimeRange("7d")}
        >
          ${i?"7일":"7D"}
        </button>
        <button
          class="time-pill-btn ${o==="30d"?"active":""}"
          @click=${()=>g.setAnalyticsTimeRange("30d")}
        >
          ${i?"30일":"30D"}
        </button>
        <button
          class="time-pill-btn ${o==="1y"?"active":""}"
          @click=${()=>g.setAnalyticsTimeRange("1y")}
        >
          ${i?"1년":"1Y"}
        </button>
        <button
          class="time-pill-btn ${o==="all"?"active":""}"
          @click=${()=>g.setAnalyticsTimeRange("all")}
        >
          ${i?"전체":"ALL"}
        </button>
      </div>

      <!-- When it happens 24h Heatmap -->
      <div class="card-block">
        <div class="card-header">
          <div class="card-title">${i?"언제 하나요":"When it happens"}</div>
          <div class="card-badge">${$o}</div>
        </div>

        <!-- Hour column markers (12a, 6a, 12p, 6p, 11p) -->
        <div class="heat-hour-labels">
          <div class="heat-day-lbl"></div>
          <div class="heat-hour-track">
            <span style="left: 0%; transform: none;">12a</span>
            <span style="left: 25%;">6a</span>
            <span style="left: 50%;">12p</span>
            <span style="left: 75%;">6p</span>
            <span style="right: 0%; transform: none;">11p</span>
          </div>
        </div>

        <div class="heat-rows">
          ${$.map(E=>b`
              <div class="heat-row">
                <div class="heat-day-lbl">${E.day}</div>
                <div class="heat-cells">
                  ${E.cells.map(I=>b`
                      <div
                        class="heat-cell"
                        style="background: ${I.bg}; border: 1px solid ${I.brd};"
                        title="${I.dayLabel} ${I.hourLabel}: ${I.count} ${I.count===1?"event":"events"}"
                      ></div>
                    `)}
                </div>
              </div>
            `)}
        </div>

        <!-- Design-faithful continuous gradient legend -->
        <div class="heat-legend">
          <div style="font-size: 9px; font-weight: 800; color: #9A9080;">${i?"쿨쿨":"ZZZ"}</div>
          <div class="heat-legend-bar"></div>
          <div style="font-size: 9px; font-weight: 800; color: #9A9080;">${i?"출발!":"GO!"}</div>
        </div>

        <!-- Contextual peak caption -->
        <div class="heat-caption">
          ${i?b`가장 많은 시간은 <strong style="color: #17140F;">${O}</strong>. ${at}`:b`Peak is <strong style="color: #17140F;">${st}</strong>. ${V}`}
        </div>
      </div>

      <!-- Gut Score Banner -->
      <div
        class="gut-card"
        @click=${()=>this.dispatchEvent(new CustomEvent("dooty-navigate",{bubbles:!0,composed:!0,detail:"deep"}))}
      >
        <div
          class="gut-ring"
          style="background: conic-gradient(#17140F 0% ${Dt}%, #FFF ${Dt}% 100%);"
        >
          <div class="gut-ring-inner">
            <div class="gut-score-num">${Dt}</div>
            <div class="gut-score-lbl">${i?"장":"GUT"}</div>
          </div>
        </div>
        <div style="flex: 1; min-width: 0;">
          <div style="font-family: var(--font-heading); font-weight: 800; font-size: 18px; color: #17140F; letter-spacing: -0.4px;">
            ${i?"탄탄합니다, 말 그대로.":"Solid. Literally."}
          </div>
          <div style="font-size: 12px; font-weight: 600; color: #0A5A45; line-height: 1.4; margin-top: 3px;">
            ${i?`${Dt}%의 날이 완벽한 4단계. 눌러서 자세히 보기.`:`Perfect 4s on ${Dt}% of days. Tap for the full breakdown.`}
          </div>
          ${H>0?b`
                <div class="flag-badge">
                  ${i?`주의 ${H}건`:`${H} FLAG`}
                </div>
              `:null}
        </div>
      </div>

      <!-- Weekly Count Bars -->
      <div class="card-block">
        <div class="card-header" style="margin-bottom: 14px;">
          <div class="card-title">${i?"주간 횟수":"Weekly count"}</div>
          <div style="font-size: 10.5px; font-weight: 800; color: #1FC99B;">
            ${i?"▲ 4% 지난달 대비":"▲ 4% vs last month"}
          </div>
        </div>
        <div style="display: flex; align-items: flex-end; gap: 5px; height: 104px;">
          ${mt.map(E=>b`
              <div
                style="flex: 1; display: flex; flex-direction: column; justify-content: flex-end; align-items: center; gap: 5px; height: 100%;"
              >
                <div
                  style="width: 100%; border-radius: 6px 6px 3px 3px; border: 2px solid #17140F; box-sizing: border-box; background: ${E.bg}; height: ${E.h};"
                ></div>
                <div style="font-size: 7.5px; font-weight: 800; color: #B5AB99;">${E.l}</div>
              </div>
            `)}
        </div>
      </div>

      <!-- Trophy Case -->
      <div class="trophy-case">
        <div class="trophy-title">${i?"트로피 보관함":"Trophy case"}</div>
        <div class="trophy-grid">
          ${B.map(E=>b`
              <div
                class="trophy-item"
                style="background: ${E.bg}; transform: rotate(${E.rot});"
              >
                <div class="trophy-val">${E.v}</div>
                <div class="trophy-sub" style="color: ${E.sub};">${E.l}</div>
              </div>
            `)}
        </div>
      </div>

      <!-- Time & Routine Patterns -->
      <div class="card-block">
        <div class="card-title">${i?"시간 & 일과 패턴":"Time & routine patterns"}</div>
        <div style="font-size: 11.5px; font-weight: 600; color: #6A6152; margin: 2px 0 13px;">
          ${i?"평균 기준 대비 시간대별 배변 주기 변화율":"Deviation from average daily baseline."}
        </div>
        <div style="display: flex; flex-direction: column; gap: 11px;">
          ${ko.map(E=>b`
              <div class="corr-row">
                <div class="corr-lbl">${E.l}</div>
                <div class="corr-bar-track">
                  <div class="corr-center-line"></div>
                  <div
                    style="position: absolute; top: 0; bottom: 0; background: ${E.bg}; left: ${E.left}; width: ${E.w};"
                  ></div>
                </div>
                <div class="corr-val">${E.v}</div>
              </div>
            `)}
        </div>
      </div>
    `}},Ge.styles=zt`
    :host {
      display: block;
      padding: 58px 18px 140px;
      box-sizing: border-box;
    }

    .page-header {
      margin-bottom: 14px;
    }

    .page-title {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 29px;
      color: #17140F;
      letter-spacing: -1px;
      line-height: 1.1;
    }

    .page-sub {
      font-size: 12px;
      font-weight: 600;
      color: #6A6152;
      margin-top: 2px;
    }

    .time-selector-row {
      display: flex;
      gap: 6px;
      margin-bottom: 16px;
      background: #E8DEC6;
      border: 3px solid #17140F;
      border-radius: 18px;
      padding: 4px;
      box-shadow: 3px 3px 0 #17140F;
    }

    .time-pill-btn {
      flex: 1;
      border: 2px solid transparent;
      border-radius: 12px;
      background: transparent;
      padding: 7px 4px;
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 12.5px;
      color: #6A6152;
      cursor: pointer;
      text-align: center;
      transition: all 0.12s ease;
      user-select: none;
    }

    .time-pill-btn.active {
      background: #FFCE2E;
      border-color: #17140F;
      color: #17140F;
      box-shadow: 2px 2px 0 #17140F;
      transform: translate(-1px, -1px);
    }

    .card-block {
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 22px;
      padding: 15px;
      box-shadow: 4px 4px 0 #17140F;
      margin-bottom: 14px;
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 12px;
    }

    .card-title {
      font-size: 15px;
      font-weight: 800;
      color: #17140F;
    }

    .card-badge {
      font-size: 10.5px;
      font-weight: 800;
      color: #9A9080;
      letter-spacing: 0.6px;
    }

    /* Heatmap Grid */
    .heat-hour-labels {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-bottom: 4px;
    }

    .heat-hour-track {
      flex: 1;
      position: relative;
      height: 12px;
      font-size: 8px;
      font-weight: 800;
      color: #B5AB99;
    }

    .heat-hour-track span {
      position: absolute;
      top: 0;
      transform: translateX(-50%);
      line-height: 1;
    }

    .heat-rows {
      display: flex;
      flex-direction: column;
      gap: 3px;
    }

    .heat-row {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .heat-day-lbl {
      width: 22px;
      font-size: 8.5px;
      font-weight: 800;
      color: #9A9080;
      flex: none;
    }

    .heat-cells {
      display: flex;
      gap: 2px;
      flex: 1;
      min-width: 0;
    }

    .heat-cell {
      flex: 1;
      aspect-ratio: 1;
      border-radius: 3px;
      box-sizing: border-box;
      cursor: pointer;
      transition: transform 0.1s ease;
    }

    .heat-cell:hover {
      transform: scale(1.3);
      z-index: 2;
    }

    .heat-legend {
      display: flex;
      align-items: center;
      gap: 7px;
      margin-top: 11px;
      padding-left: 28px;
    }

    .heat-legend-bar {
      flex: 1;
      height: 8px;
      border-radius: 8px;
      border: 2px solid #17140F;
      background: linear-gradient(90deg, #FFF, #FFE9A8, #FFCE2E, #FF9A3C, #FF5A3C);
      box-sizing: border-box;
    }

    .heat-caption {
      font-size: 12px;
      font-weight: 600;
      color: #6A6152;
      line-height: 1.45;
      margin-top: 10px;
    }

    /* Gut Score Card */
    .gut-card {
      background: #1FC99B;
      border: 3px solid #17140F;
      border-radius: 22px;
      padding: 16px;
      box-shadow: 4px 4px 0 #17140F;
      display: flex;
      gap: 15px;
      align-items: center;
      cursor: pointer;
      margin-bottom: 14px;
      transition: transform 0.1s ease, box-shadow 0.1s ease;
    }

    .gut-card:hover {
      transform: translate(-1px, -1px);
      box-shadow: 6px 6px 0 #17140F;
    }

    .gut-ring {
      width: 76px;
      height: 76px;
      border-radius: 50%;
      flex: none;
      border: 3px solid #17140F;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
    }

    .gut-ring-inner {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: #1FC99B;
      border: 2.5px solid #17140F;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
    }

    .gut-score-num {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 21px;
      color: #17140F;
      line-height: 1;
    }

    .gut-score-lbl {
      font-size: 8px;
      font-weight: 800;
      color: #0A5A45;
      letter-spacing: 0.8px;
    }

    .flag-badge {
      display: inline-flex;
      margin-top: 7px;
      align-items: center;
      gap: 6px;
      background: #FFE3DC;
      border: 2px solid #17140F;
      border-radius: 9px;
      padding: 2px 8px;
      font-size: 10px;
      font-weight: 800;
      color: #7A3325;
    }

    /* Trophy Case */
    .trophy-case {
      background: #17140F;
      border: 3px solid #17140F;
      border-radius: 22px;
      padding: 17px;
      box-shadow: 4px 4px 0 #FF5A3C;
      margin-bottom: 14px;
    }

    .trophy-title {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 19px;
      color: #FFCE2E;
      letter-spacing: -0.4px;
    }

    .trophy-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 9px;
      margin-top: 13px;
    }

    .trophy-item {
      border: 2.5px solid #17140F;
      border-radius: 14px;
      padding: 10px 12px;
      cursor: pointer;
      box-shadow: 2px 2px 0 rgba(255, 255, 255, 0.2);
      transition: transform 0.1s ease;
    }

    .trophy-item:hover {
      transform: scale(1.04) !important;
    }

    .trophy-val {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 17px;
      color: #17140F;
      line-height: 1;
    }

    .trophy-sub {
      font-size: 9.5px;
      font-weight: 700;
      margin-top: 3px;
    }

    /* Time & Routine Patterns */
    .corr-row {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .corr-lbl {
      width: 96px;
      font-size: 11px;
      color: #17140F;
      font-weight: 800;
      flex: none;
    }

    .corr-bar-track {
      flex: 1;
      height: 12px;
      border-radius: 12px;
      border: 2px solid #17140F;
      background: #FFF9E9;
      position: relative;
      overflow: hidden;
      box-sizing: border-box;
    }

    .corr-center-line {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 50%;
      width: 2px;
      background: #D8CFB6;
    }

    .corr-val {
      width: 44px;
      text-align: right;
      font-size: 11.5px;
      color: #6A6152;
      font-weight: 800;
      flex: none;
    }
  `,Ge);aa([z()],mn.prototype,"unsubscribe",void 0);mn=aa([At("dooty-numbers")],mn);function Cl(h){return h&&h.__esModule&&Object.prototype.hasOwnProperty.call(h,"default")?h.default:h}var Si={exports:{}};/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */var El=Si.exports,js;function zl(){return js||(js=1,(function(h,i){(function(o,s){s(i)})(El,(function(o){var s="1.9.4";function r(t){var e,n,a,d;for(n=1,a=arguments.length;n<a;n++){d=arguments[n];for(e in d)t[e]=d[e]}return t}var l=Object.create||(function(){function t(){}return function(e){return t.prototype=e,new t}})();function c(t,e){var n=Array.prototype.slice;if(t.bind)return t.bind.apply(t,n.call(arguments,1));var a=n.call(arguments,2);return function(){return t.apply(e,a.length?a.concat(n.call(arguments)):arguments)}}var u=0;function f(t){return"_leaflet_id"in t||(t._leaflet_id=++u),t._leaflet_id}function v(t,e,n){var a,d,p,m;return m=function(){a=!1,d&&(p.apply(n,d),d=!1)},p=function(){a?d=arguments:(t.apply(n,arguments),setTimeout(m,e),a=!0)},p}function w(t,e,n){var a=e[1],d=e[0],p=a-d;return t===a&&n?t:((t-d)%p+p)%p+d}function x(){return!1}function _(t,e){if(e===!1)return t;var n=Math.pow(10,e===void 0?6:e);return Math.round(t*n)/n}function T(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function $(t){return T(t).split(/\s+/)}function S(t,e){Object.prototype.hasOwnProperty.call(t,"options")||(t.options=t.options?l(t.options):{});for(var n in e)t.options[n]=e[n];return t.options}function D(t,e,n){var a=[];for(var d in t)a.push(encodeURIComponent(n?d.toUpperCase():d)+"="+encodeURIComponent(t[d]));return(!e||e.indexOf("?")===-1?"?":"&")+a.join("&")}var M=/\{ *([\w_ -]+) *\}/g;function Z(t,e){return t.replace(M,function(n,a){var d=e[a];if(d===void 0)throw new Error("No value provided for variable "+n);return typeof d=="function"&&(d=d(e)),d})}var W=Array.isArray||function(t){return Object.prototype.toString.call(t)==="[object Array]"};function st(t,e){for(var n=0;n<t.length;n++)if(t[n]===e)return n;return-1}var O="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function V(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}var at=0;function A(t){var e=+new Date,n=Math.max(0,16-(e-at));return at=e+n,window.setTimeout(t,n)}var k=window.requestAnimationFrame||V("RequestAnimationFrame")||A,R=window.cancelAnimationFrame||V("CancelAnimationFrame")||V("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)};function U(t,e,n){if(n&&k===A)t.call(e);else return k.call(window,c(t,e))}function C(t){t&&R.call(window,t)}var et={__proto__:null,extend:r,create:l,bind:c,get lastId(){return u},stamp:f,throttle:v,wrapNum:w,falseFn:x,formatNum:_,trim:T,splitWords:$,setOptions:S,getParamString:D,template:Z,isArray:W,indexOf:st,emptyImageUrl:O,requestFn:k,cancelFn:R,requestAnimFrame:U,cancelAnimFrame:C};function it(){}it.extend=function(t){var e=function(){S(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},n=e.__super__=this.prototype,a=l(n);a.constructor=e,e.prototype=a;for(var d in this)Object.prototype.hasOwnProperty.call(this,d)&&d!=="prototype"&&d!=="__super__"&&(e[d]=this[d]);return t.statics&&r(e,t.statics),t.includes&&(Dt(t.includes),r.apply(null,[a].concat(t.includes))),r(a,t),delete a.statics,delete a.includes,a.options&&(a.options=n.options?l(n.options):{},r(a.options,t.options)),a._initHooks=[],a.callInitHooks=function(){if(!this._initHooksCalled){n.callInitHooks&&n.callInitHooks.call(this),this._initHooksCalled=!0;for(var p=0,m=a._initHooks.length;p<m;p++)a._initHooks[p].call(this)}},e},it.include=function(t){var e=this.prototype.options;return r(this.prototype,t),t.options&&(this.prototype.options=e,this.mergeOptions(t.options)),this},it.mergeOptions=function(t){return r(this.prototype.options,t),this},it.addInitHook=function(t){var e=Array.prototype.slice.call(arguments,1),n=typeof t=="function"?t:function(){this[t].apply(this,e)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(n),this};function Dt(t){if(!(typeof L>"u"||!L||!L.Mixin)){t=W(t)?t:[t];for(var e=0;e<t.length;e++)t[e]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var lt={on:function(t,e,n){if(typeof t=="object")for(var a in t)this._on(a,t[a],e);else{t=$(t);for(var d=0,p=t.length;d<p;d++)this._on(t[d],e,n)}return this},off:function(t,e,n){if(!arguments.length)delete this._events;else if(typeof t=="object")for(var a in t)this._off(a,t[a],e);else{t=$(t);for(var d=arguments.length===1,p=0,m=t.length;p<m;p++)d?this._off(t[p]):this._off(t[p],e,n)}return this},_on:function(t,e,n,a){if(typeof e!="function"){console.warn("wrong listener type: "+typeof e);return}if(this._listens(t,e,n)===!1){n===this&&(n=void 0);var d={fn:e,ctx:n};a&&(d.once=!0),this._events=this._events||{},this._events[t]=this._events[t]||[],this._events[t].push(d)}},_off:function(t,e,n){var a,d,p;if(this._events&&(a=this._events[t],!!a)){if(arguments.length===1){if(this._firingCount)for(d=0,p=a.length;d<p;d++)a[d].fn=x;delete this._events[t];return}if(typeof e!="function"){console.warn("wrong listener type: "+typeof e);return}var m=this._listens(t,e,n);if(m!==!1){var y=a[m];this._firingCount&&(y.fn=x,this._events[t]=a=a.slice()),a.splice(m,1)}}},fire:function(t,e,n){if(!this.listens(t,n))return this;var a=r({},e,{type:t,target:this,sourceTarget:e&&e.sourceTarget||this});if(this._events){var d=this._events[t];if(d){this._firingCount=this._firingCount+1||1;for(var p=0,m=d.length;p<m;p++){var y=d[p],F=y.fn;y.once&&this.off(t,F,y.ctx),F.call(y.ctx||this,a)}this._firingCount--}}return n&&this._propagateEvent(a),this},listens:function(t,e,n,a){typeof t!="string"&&console.warn('"string" type argument expected');var d=e;typeof e!="function"&&(a=!!e,d=void 0,n=void 0);var p=this._events&&this._events[t];if(p&&p.length&&this._listens(t,d,n)!==!1)return!0;if(a){for(var m in this._eventParents)if(this._eventParents[m].listens(t,e,n,a))return!0}return!1},_listens:function(t,e,n){if(!this._events)return!1;var a=this._events[t]||[];if(!e)return!!a.length;n===this&&(n=void 0);for(var d=0,p=a.length;d<p;d++)if(a[d].fn===e&&a[d].ctx===n)return d;return!1},once:function(t,e,n){if(typeof t=="object")for(var a in t)this._on(a,t[a],e,!0);else{t=$(t);for(var d=0,p=t.length;d<p;d++)this._on(t[d],e,n,!0)}return this},addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[f(t)]=t,this},removeEventParent:function(t){return this._eventParents&&delete this._eventParents[f(t)],this},_propagateEvent:function(t){for(var e in this._eventParents)this._eventParents[e].fire(t.type,r({layer:t.target,propagatedFrom:t.target},t),!0)}};lt.addEventListener=lt.on,lt.removeEventListener=lt.clearAllEventListeners=lt.off,lt.addOneTimeEventListener=lt.once,lt.fireEvent=lt.fire,lt.hasEventListeners=lt.listens;var Ft=it.extend(lt);function H(t,e,n){this.x=n?Math.round(t):t,this.y=n?Math.round(e):e}var Nt=Math.trunc||function(t){return t>0?Math.floor(t):Math.ceil(t)};H.prototype={clone:function(){return new H(this.x,this.y)},add:function(t){return this.clone()._add(q(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(q(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},scaleBy:function(t){return new H(this.x*t.x,this.y*t.y)},unscaleBy:function(t){return new H(this.x/t.x,this.y/t.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=Nt(this.x),this.y=Nt(this.y),this},distanceTo:function(t){t=q(t);var e=t.x-this.x,n=t.y-this.y;return Math.sqrt(e*e+n*n)},equals:function(t){return t=q(t),t.x===this.x&&t.y===this.y},contains:function(t){return t=q(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+_(this.x)+", "+_(this.y)+")"}};function q(t,e,n){return t instanceof H?t:W(t)?new H(t[0],t[1]):t==null?t:typeof t=="object"&&"x"in t&&"y"in t?new H(t.x,t.y):new H(t,e,n)}function ct(t,e){if(t)for(var n=e?[t,e]:t,a=0,d=n.length;a<d;a++)this.extend(n[a])}ct.prototype={extend:function(t){var e,n;if(!t)return this;if(t instanceof H||typeof t[0]=="number"||"x"in t)e=n=q(t);else if(t=mt(t),e=t.min,n=t.max,!e||!n)return this;return!this.min&&!this.max?(this.min=e.clone(),this.max=n.clone()):(this.min.x=Math.min(e.x,this.min.x),this.max.x=Math.max(n.x,this.max.x),this.min.y=Math.min(e.y,this.min.y),this.max.y=Math.max(n.y,this.max.y)),this},getCenter:function(t){return q((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return q(this.min.x,this.max.y)},getTopRight:function(){return q(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var e,n;return typeof t[0]=="number"||t instanceof H?t=q(t):t=mt(t),t instanceof ct?(e=t.min,n=t.max):e=n=t,e.x>=this.min.x&&n.x<=this.max.x&&e.y>=this.min.y&&n.y<=this.max.y},intersects:function(t){t=mt(t);var e=this.min,n=this.max,a=t.min,d=t.max,p=d.x>=e.x&&a.x<=n.x,m=d.y>=e.y&&a.y<=n.y;return p&&m},overlaps:function(t){t=mt(t);var e=this.min,n=this.max,a=t.min,d=t.max,p=d.x>e.x&&a.x<n.x,m=d.y>e.y&&a.y<n.y;return p&&m},isValid:function(){return!!(this.min&&this.max)},pad:function(t){var e=this.min,n=this.max,a=Math.abs(e.x-n.x)*t,d=Math.abs(e.y-n.y)*t;return mt(q(e.x-a,e.y-d),q(n.x+a,n.y+d))},equals:function(t){return t?(t=mt(t),this.min.equals(t.getTopLeft())&&this.max.equals(t.getBottomRight())):!1}};function mt(t,e){return!t||t instanceof ct?t:new ct(t,e)}function vt(t,e){if(t)for(var n=e?[t,e]:t,a=0,d=n.length;a<d;a++)this.extend(n[a])}vt.prototype={extend:function(t){var e=this._southWest,n=this._northEast,a,d;if(t instanceof ot)a=t,d=t;else if(t instanceof vt){if(a=t._southWest,d=t._northEast,!a||!d)return this}else return t?this.extend(J(t)||ht(t)):this;return!e&&!n?(this._southWest=new ot(a.lat,a.lng),this._northEast=new ot(d.lat,d.lng)):(e.lat=Math.min(a.lat,e.lat),e.lng=Math.min(a.lng,e.lng),n.lat=Math.max(d.lat,n.lat),n.lng=Math.max(d.lng,n.lng)),this},pad:function(t){var e=this._southWest,n=this._northEast,a=Math.abs(e.lat-n.lat)*t,d=Math.abs(e.lng-n.lng)*t;return new vt(new ot(e.lat-a,e.lng-d),new ot(n.lat+a,n.lng+d))},getCenter:function(){return new ot((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new ot(this.getNorth(),this.getWest())},getSouthEast:function(){return new ot(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){typeof t[0]=="number"||t instanceof ot||"lat"in t?t=J(t):t=ht(t);var e=this._southWest,n=this._northEast,a,d;return t instanceof vt?(a=t.getSouthWest(),d=t.getNorthEast()):a=d=t,a.lat>=e.lat&&d.lat<=n.lat&&a.lng>=e.lng&&d.lng<=n.lng},intersects:function(t){t=ht(t);var e=this._southWest,n=this._northEast,a=t.getSouthWest(),d=t.getNorthEast(),p=d.lat>=e.lat&&a.lat<=n.lat,m=d.lng>=e.lng&&a.lng<=n.lng;return p&&m},overlaps:function(t){t=ht(t);var e=this._southWest,n=this._northEast,a=t.getSouthWest(),d=t.getNorthEast(),p=d.lat>e.lat&&a.lat<n.lat,m=d.lng>e.lng&&a.lng<n.lng;return p&&m},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t,e){return t?(t=ht(t),this._southWest.equals(t.getSouthWest(),e)&&this._northEast.equals(t.getNorthEast(),e)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function ht(t,e){return t instanceof vt?t:new vt(t,e)}function ot(t,e,n){if(isNaN(t)||isNaN(e))throw new Error("Invalid LatLng object: ("+t+", "+e+")");this.lat=+t,this.lng=+e,n!==void 0&&(this.alt=+n)}ot.prototype={equals:function(t,e){if(!t)return!1;t=J(t);var n=Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng));return n<=(e===void 0?1e-9:e)},toString:function(t){return"LatLng("+_(this.lat,t)+", "+_(this.lng,t)+")"},distanceTo:function(t){return X.distance(this,J(t))},wrap:function(){return X.wrapLatLng(this)},toBounds:function(t){var e=180*t/40075017,n=e/Math.cos(Math.PI/180*this.lat);return ht([this.lat-e,this.lng-n],[this.lat+e,this.lng+n])},clone:function(){return new ot(this.lat,this.lng,this.alt)}};function J(t,e,n){return t instanceof ot?t:W(t)&&typeof t[0]!="object"?t.length===3?new ot(t[0],t[1],t[2]):t.length===2?new ot(t[0],t[1]):null:t==null?t:typeof t=="object"&&"lat"in t?new ot(t.lat,"lng"in t?t.lng:t.lon,t.alt):e===void 0?null:new ot(t,e,n)}var B={latLngToPoint:function(t,e){var n=this.projection.project(t),a=this.scale(e);return this.transformation._transform(n,a)},pointToLatLng:function(t,e){var n=this.scale(e),a=this.transformation.untransform(t,n);return this.projection.unproject(a)},project:function(t){return this.projection.project(t)},unproject:function(t){return this.projection.unproject(t)},scale:function(t){return 256*Math.pow(2,t)},zoom:function(t){return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){if(this.infinite)return null;var e=this.projection.bounds,n=this.scale(t),a=this.transformation.transform(e.min,n),d=this.transformation.transform(e.max,n);return new ct(a,d)},infinite:!1,wrapLatLng:function(t){var e=this.wrapLng?w(t.lng,this.wrapLng,!0):t.lng,n=this.wrapLat?w(t.lat,this.wrapLat,!0):t.lat,a=t.alt;return new ot(n,e,a)},wrapLatLngBounds:function(t){var e=t.getCenter(),n=this.wrapLatLng(e),a=e.lat-n.lat,d=e.lng-n.lng;if(a===0&&d===0)return t;var p=t.getSouthWest(),m=t.getNorthEast(),y=new ot(p.lat-a,p.lng-d),F=new ot(m.lat-a,m.lng-d);return new vt(y,F)}},X=r({},B,{wrapLng:[-180,180],R:6371e3,distance:function(t,e){var n=Math.PI/180,a=t.lat*n,d=e.lat*n,p=Math.sin((e.lat-t.lat)*n/2),m=Math.sin((e.lng-t.lng)*n/2),y=p*p+Math.cos(a)*Math.cos(d)*m*m,F=2*Math.atan2(Math.sqrt(y),Math.sqrt(1-y));return this.R*F}}),Gt=6378137,It={R:Gt,MAX_LATITUDE:85.0511287798,project:function(t){var e=Math.PI/180,n=this.MAX_LATITUDE,a=Math.max(Math.min(n,t.lat),-n),d=Math.sin(a*e);return new H(this.R*t.lng*e,this.R*Math.log((1+d)/(1-d))/2)},unproject:function(t){var e=180/Math.PI;return new ot((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*e,t.x*e/this.R)},bounds:(function(){var t=Gt*Math.PI;return new ct([-t,-t],[t,t])})()};function ge(t,e,n,a){if(W(t)){this._a=t[0],this._b=t[1],this._c=t[2],this._d=t[3];return}this._a=t,this._b=e,this._c=n,this._d=a}ge.prototype={transform:function(t,e){return this._transform(t.clone(),e)},_transform:function(t,e){return e=e||1,t.x=e*(this._a*t.x+this._b),t.y=e*(this._c*t.y+this._d),t},untransform:function(t,e){return e=e||1,new H((t.x/e-this._b)/this._a,(t.y/e-this._d)/this._c)}};function oe(t,e,n,a){return new ge(t,e,n,a)}var me=r({},X,{code:"EPSG:3857",projection:It,transformation:(function(){var t=.5/(Math.PI*It.R);return oe(t,.5,-t,.5)})()}),Ri=r({},me,{code:"EPSG:900913"});function ve(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Hi(t,e){var n="",a,d,p,m,y,F;for(a=0,p=t.length;a<p;a++){for(y=t[a],d=0,m=y.length;d<m;d++)F=y[d],n+=(d?"L":"M")+F.x+" "+F.y;n+=e?j.svg?"z":"x":""}return n||"M0 0"}var di=document.documentElement.style,de="ActiveXObject"in window,_o=de&&!document.addEventListener,Fo="msLaunchUri"in navigator&&!("documentMode"in document),ci=Qt("webkit"),ji=Qt("android"),xe=Qt("android 2")||Qt("android 3"),ko=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),$o=ji&&Qt("Google")&&ko<537&&!("AudioNode"in window),hi=!!window.opera,E=!Fo&&Qt("chrome"),I=Qt("gecko")&&!ci&&!hi&&!de,xt=!E&&Qt("safari"),Pt=Qt("phantom"),St="OTransition"in di,Jt=navigator.platform.indexOf("Win")===0,be=de&&"transition"in di,ye="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!xe,Wi="MozPerspective"in di,ra=!window.L_DISABLE_3D&&(be||ye||Wi)&&!St&&!Pt,pi=typeof orientation<"u"||Qt("mobile"),la=pi&&ci,da=pi&&ye,kn=!window.PointerEvent&&window.MSPointerEvent,$n=!!(window.PointerEvent||kn),Pn="ontouchstart"in window||!!window.TouchEvent,ca=!window.L_NO_TOUCH&&(Pn||$n),ha=pi&&hi,pa=pi&&I,ua=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,fa=(function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassiveEventSupport",x,e),window.removeEventListener("testPassiveEventSupport",x,e)}catch{}return t})(),ga=(function(){return!!document.createElement("canvas").getContext})(),Po=!!(document.createElementNS&&ve("svg").createSVGRect),ma=!!Po&&(function(){var t=document.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"})(),va=!Po&&(function(){try{var t=document.createElement("div");t.innerHTML='<v:shape adj="1"/>';var e=t.firstChild;return e.style.behavior="url(#default#VML)",e&&typeof e.adj=="object"}catch{return!1}})(),xa=navigator.platform.indexOf("Mac")===0,ba=navigator.platform.indexOf("Linux")===0;function Qt(t){return navigator.userAgent.toLowerCase().indexOf(t)>=0}var j={ie:de,ielt9:_o,edge:Fo,webkit:ci,android:ji,android23:xe,androidStock:$o,opera:hi,chrome:E,gecko:I,safari:xt,phantom:Pt,opera12:St,win:Jt,ie3d:be,webkit3d:ye,gecko3d:Wi,any3d:ra,mobile:pi,mobileWebkit:la,mobileWebkit3d:da,msPointer:kn,pointer:$n,touch:ca,touchNative:Pn,mobileOpera:ha,mobileGecko:pa,retina:ua,passiveEvents:fa,canvas:ga,svg:Po,vml:va,inlineSvg:ma,mac:xa,linux:ba},Sn=j.msPointer?"MSPointerDown":"pointerdown",Tn=j.msPointer?"MSPointerMove":"pointermove",Ln=j.msPointer?"MSPointerUp":"pointerup",Cn=j.msPointer?"MSPointerCancel":"pointercancel",So={touchstart:Sn,touchmove:Tn,touchend:Ln,touchcancel:Cn},En={touchstart:$a,touchmove:Ui,touchend:Ui,touchcancel:Ui},Ae={},zn=!1;function ya(t,e,n){return e==="touchstart"&&ka(),En[e]?(n=En[e].bind(this,n),t.addEventListener(So[e],n,!1),n):(console.warn("wrong event specified:",e),x)}function wa(t,e,n){if(!So[e]){console.warn("wrong event specified:",e);return}t.removeEventListener(So[e],n,!1)}function _a(t){Ae[t.pointerId]=t}function Fa(t){Ae[t.pointerId]&&(Ae[t.pointerId]=t)}function An(t){delete Ae[t.pointerId]}function ka(){zn||(document.addEventListener(Sn,_a,!0),document.addEventListener(Tn,Fa,!0),document.addEventListener(Ln,An,!0),document.addEventListener(Cn,An,!0),zn=!0)}function Ui(t,e){if(e.pointerType!==(e.MSPOINTER_TYPE_MOUSE||"mouse")){e.touches=[];for(var n in Ae)e.touches.push(Ae[n]);e.changedTouches=[e],t(e)}}function $a(t,e){e.MSPOINTER_TYPE_TOUCH&&e.pointerType===e.MSPOINTER_TYPE_TOUCH&&Bt(e),Ui(t,e)}function Pa(t){var e={},n,a;for(a in t)n=t[a],e[a]=n&&n.bind?n.bind(t):n;return t=e,e.type="dblclick",e.detail=2,e.isTrusted=!1,e._simulated=!0,e}var Sa=200;function Ta(t,e){t.addEventListener("dblclick",e);var n=0,a;function d(p){if(p.detail!==1){a=p.detail;return}if(!(p.pointerType==="mouse"||p.sourceCapabilities&&!p.sourceCapabilities.firesTouchEvents)){var m=On(p);if(!(m.some(function(F){return F instanceof HTMLLabelElement&&F.attributes.for})&&!m.some(function(F){return F instanceof HTMLInputElement||F instanceof HTMLSelectElement}))){var y=Date.now();y-n<=Sa?(a++,a===2&&e(Pa(p))):a=1,n=y}}}return t.addEventListener("click",d),{dblclick:e,simDblclick:d}}function La(t,e){t.removeEventListener("dblclick",e.dblclick),t.removeEventListener("click",e.simDblclick)}var To=qi(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),ui=qi(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),Mn=ui==="webkitTransition"||ui==="OTransition"?ui+"End":"transitionend";function Dn(t){return typeof t=="string"?document.getElementById(t):t}function fi(t,e){var n=t.style[e]||t.currentStyle&&t.currentStyle[e];if((!n||n==="auto")&&document.defaultView){var a=document.defaultView.getComputedStyle(t,null);n=a?a[e]:null}return n==="auto"?null:n}function nt(t,e,n){var a=document.createElement(t);return a.className=e||"",n&&n.appendChild(a),a}function gt(t){var e=t.parentNode;e&&e.removeChild(t)}function Zi(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function Me(t){var e=t.parentNode;e&&e.lastChild!==t&&e.appendChild(t)}function De(t){var e=t.parentNode;e&&e.firstChild!==t&&e.insertBefore(t,e.firstChild)}function Lo(t,e){if(t.classList!==void 0)return t.classList.contains(e);var n=Gi(t);return n.length>0&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(n)}function Y(t,e){if(t.classList!==void 0)for(var n=$(e),a=0,d=n.length;a<d;a++)t.classList.add(n[a]);else if(!Lo(t,e)){var p=Gi(t);Co(t,(p?p+" ":"")+e)}}function wt(t,e){t.classList!==void 0?t.classList.remove(e):Co(t,T((" "+Gi(t)+" ").replace(" "+e+" "," ")))}function Co(t,e){t.className.baseVal===void 0?t.className=e:t.className.baseVal=e}function Gi(t){return t.correspondingElement&&(t=t.correspondingElement),t.className.baseVal===void 0?t.className:t.className.baseVal}function Ht(t,e){"opacity"in t.style?t.style.opacity=e:"filter"in t.style&&Ca(t,e)}function Ca(t,e){var n=!1,a="DXImageTransform.Microsoft.Alpha";try{n=t.filters.item(a)}catch{if(e===1)return}e=Math.round(e*100),n?(n.Enabled=e!==100,n.Opacity=e):t.style.filter+=" progid:"+a+"(opacity="+e+")"}function qi(t){for(var e=document.documentElement.style,n=0;n<t.length;n++)if(t[n]in e)return t[n];return!1}function we(t,e,n){var a=e||new H(0,0);t.style[To]=(j.ie3d?"translate("+a.x+"px,"+a.y+"px)":"translate3d("+a.x+"px,"+a.y+"px,0)")+(n?" scale("+n+")":"")}function kt(t,e){t._leaflet_pos=e,j.any3d?we(t,e):(t.style.left=e.x+"px",t.style.top=e.y+"px")}function _e(t){return t._leaflet_pos||new H(0,0)}var gi,mi,Eo;if("onselectstart"in document)gi=function(){K(window,"selectstart",Bt)},mi=function(){pt(window,"selectstart",Bt)};else{var vi=qi(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);gi=function(){if(vi){var t=document.documentElement.style;Eo=t[vi],t[vi]="none"}},mi=function(){vi&&(document.documentElement.style[vi]=Eo,Eo=void 0)}}function zo(){K(window,"dragstart",Bt)}function Ao(){pt(window,"dragstart",Bt)}var Ki,Mo;function Do(t){for(;t.tabIndex===-1;)t=t.parentNode;t.style&&(Vi(),Ki=t,Mo=t.style.outlineStyle,t.style.outlineStyle="none",K(window,"keydown",Vi))}function Vi(){Ki&&(Ki.style.outlineStyle=Mo,Ki=void 0,Mo=void 0,pt(window,"keydown",Vi))}function Bn(t){do t=t.parentNode;while((!t.offsetWidth||!t.offsetHeight)&&t!==document.body);return t}function Bo(t){var e=t.getBoundingClientRect();return{x:e.width/t.offsetWidth||1,y:e.height/t.offsetHeight||1,boundingClientRect:e}}var Ea={__proto__:null,TRANSFORM:To,TRANSITION:ui,TRANSITION_END:Mn,get:Dn,getStyle:fi,create:nt,remove:gt,empty:Zi,toFront:Me,toBack:De,hasClass:Lo,addClass:Y,removeClass:wt,setClass:Co,getClass:Gi,setOpacity:Ht,testProp:qi,setTransform:we,setPosition:kt,getPosition:_e,get disableTextSelection(){return gi},get enableTextSelection(){return mi},disableImageDrag:zo,enableImageDrag:Ao,preventOutline:Do,restoreOutline:Vi,getSizedParentNode:Bn,getScale:Bo};function K(t,e,n,a){if(e&&typeof e=="object")for(var d in e)Oo(t,d,e[d],n);else{e=$(e);for(var p=0,m=e.length;p<m;p++)Oo(t,e[p],n,a)}return this}var Xt="_leaflet_events";function pt(t,e,n,a){if(arguments.length===1)Nn(t),delete t[Xt];else if(e&&typeof e=="object")for(var d in e)Io(t,d,e[d],n);else if(e=$(e),arguments.length===2)Nn(t,function(y){return st(e,y)!==-1});else for(var p=0,m=e.length;p<m;p++)Io(t,e[p],n,a);return this}function Nn(t,e){for(var n in t[Xt]){var a=n.split(/\d/)[0];(!e||e(a))&&Io(t,a,null,null,n)}}var No={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function Oo(t,e,n,a){var d=e+f(n)+(a?"_"+f(a):"");if(t[Xt]&&t[Xt][d])return this;var p=function(y){return n.call(a||t,y||window.event)},m=p;!j.touchNative&&j.pointer&&e.indexOf("touch")===0?p=ya(t,e,p):j.touch&&e==="dblclick"?p=Ta(t,p):"addEventListener"in t?e==="touchstart"||e==="touchmove"||e==="wheel"||e==="mousewheel"?t.addEventListener(No[e]||e,p,j.passiveEvents?{passive:!1}:!1):e==="mouseenter"||e==="mouseleave"?(p=function(y){y=y||window.event,Ho(t,y)&&m(y)},t.addEventListener(No[e],p,!1)):t.addEventListener(e,m,!1):t.attachEvent("on"+e,p),t[Xt]=t[Xt]||{},t[Xt][d]=p}function Io(t,e,n,a,d){d=d||e+f(n)+(a?"_"+f(a):"");var p=t[Xt]&&t[Xt][d];if(!p)return this;!j.touchNative&&j.pointer&&e.indexOf("touch")===0?wa(t,e,p):j.touch&&e==="dblclick"?La(t,p):"removeEventListener"in t?t.removeEventListener(No[e]||e,p,!1):t.detachEvent("on"+e,p),t[Xt][d]=null}function Fe(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,this}function Ro(t){return Oo(t,"wheel",Fe),this}function xi(t){return K(t,"mousedown touchstart dblclick contextmenu",Fe),t._leaflet_disable_click=!0,this}function Bt(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}function ke(t){return Bt(t),Fe(t),this}function On(t){if(t.composedPath)return t.composedPath();for(var e=[],n=t.target;n;)e.push(n),n=n.parentNode;return e}function In(t,e){if(!e)return new H(t.clientX,t.clientY);var n=Bo(e),a=n.boundingClientRect;return new H((t.clientX-a.left)/n.x-e.clientLeft,(t.clientY-a.top)/n.y-e.clientTop)}var za=j.linux&&j.chrome?window.devicePixelRatio:j.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function Rn(t){return j.edge?t.wheelDeltaY/2:t.deltaY&&t.deltaMode===0?-t.deltaY/za:t.deltaY&&t.deltaMode===1?-t.deltaY*20:t.deltaY&&t.deltaMode===2?-t.deltaY*60:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?-t.detail*20:t.detail?t.detail/-32765*60:0}function Ho(t,e){var n=e.relatedTarget;if(!n)return!0;try{for(;n&&n!==t;)n=n.parentNode}catch{return!1}return n!==t}var Aa={__proto__:null,on:K,off:pt,stopPropagation:Fe,disableScrollPropagation:Ro,disableClickPropagation:xi,preventDefault:Bt,stop:ke,getPropagationPath:On,getMousePosition:In,getWheelDelta:Rn,isExternalTarget:Ho,addListener:K,removeListener:pt},Hn=Ft.extend({run:function(t,e,n,a){this.stop(),this._el=t,this._inProgress=!0,this._duration=n||.25,this._easeOutPower=1/Math.max(a||.5,.2),this._startPos=_e(t),this._offset=e.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=U(this._animate,this),this._step()},_step:function(t){var e=+new Date-this._startTime,n=this._duration*1e3;e<n?this._runFrame(this._easeOut(e/n),t):(this._runFrame(1),this._complete())},_runFrame:function(t,e){var n=this._startPos.add(this._offset.multiplyBy(t));e&&n._round(),kt(this._el,n),this.fire("step")},_complete:function(){C(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),tt=Ft.extend({options:{crs:me,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(t,e){e=S(this,e),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(t),this._initLayout(),this._onResize=c(this._onResize,this),this._initEvents(),e.maxBounds&&this.setMaxBounds(e.maxBounds),e.zoom!==void 0&&(this._zoom=this._limitZoom(e.zoom)),e.center&&e.zoom!==void 0&&this.setView(J(e.center),e.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=ui&&j.any3d&&!j.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),K(this._proxy,Mn,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(t,e,n){if(e=e===void 0?this._zoom:this._limitZoom(e),t=this._limitCenter(J(t),e,this.options.maxBounds),n=n||{},this._stop(),this._loaded&&!n.reset&&n!==!0){n.animate!==void 0&&(n.zoom=r({animate:n.animate},n.zoom),n.pan=r({animate:n.animate,duration:n.duration},n.pan));var a=this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,n.zoom):this._tryAnimatedPan(t,n.pan);if(a)return clearTimeout(this._sizeTimer),this}return this._resetView(t,e,n.pan&&n.pan.noMoveStart),this},setZoom:function(t,e){return this._loaded?this.setView(this.getCenter(),t,{zoom:e}):(this._zoom=t,this)},zoomIn:function(t,e){return t=t||(j.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+t,e)},zoomOut:function(t,e){return t=t||(j.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-t,e)},setZoomAround:function(t,e,n){var a=this.getZoomScale(e),d=this.getSize().divideBy(2),p=t instanceof H?t:this.latLngToContainerPoint(t),m=p.subtract(d).multiplyBy(1-1/a),y=this.containerPointToLatLng(d.add(m));return this.setView(y,e,{zoom:n})},_getBoundsCenterZoom:function(t,e){e=e||{},t=t.getBounds?t.getBounds():ht(t);var n=q(e.paddingTopLeft||e.padding||[0,0]),a=q(e.paddingBottomRight||e.padding||[0,0]),d=this.getBoundsZoom(t,!1,n.add(a));if(d=typeof e.maxZoom=="number"?Math.min(e.maxZoom,d):d,d===1/0)return{center:t.getCenter(),zoom:d};var p=a.subtract(n).divideBy(2),m=this.project(t.getSouthWest(),d),y=this.project(t.getNorthEast(),d),F=this.unproject(m.add(y).divideBy(2).add(p),d);return{center:F,zoom:d}},fitBounds:function(t,e){if(t=ht(t),!t.isValid())throw new Error("Bounds are not valid.");var n=this._getBoundsCenterZoom(t,e);return this.setView(n.center,n.zoom,e)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,e){return this.setView(t,this._zoom,{pan:e})},panBy:function(t,e){if(t=q(t).round(),e=e||{},!t.x&&!t.y)return this.fire("moveend");if(e.animate!==!0&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Hn,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),e.noMoveStart||this.fire("movestart"),e.animate!==!1){Y(this._mapPane,"leaflet-pan-anim");var n=this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane,n,e.duration||.25,e.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},flyTo:function(t,e,n){if(n=n||{},n.animate===!1||!j.any3d)return this.setView(t,e,n);this._stop();var a=this.project(this.getCenter()),d=this.project(t),p=this.getSize(),m=this._zoom;t=J(t),e=e===void 0?m:e;var y=Math.max(p.x,p.y),F=y*this.getZoomScale(m,e),P=d.distanceTo(a)||1,N=1.42,G=N*N;function Q($t){var ro=$t?-1:1,wr=$t?F:y,_r=F*F-y*y+ro*G*G*P*P,Fr=2*wr*G*P,Qo=_r/Fr,ws=Math.sqrt(Qo*Qo+1)-Qo,kr=ws<1e-9?-18:Math.log(ws);return kr}function Ot($t){return(Math.exp($t)-Math.exp(-$t))/2}function Ct($t){return(Math.exp($t)+Math.exp(-$t))/2}function Wt($t){return Ot($t)/Ct($t)}var Rt=Q(0);function He($t){return y*(Ct(Rt)/Ct(Rt+N*$t))}function vr($t){return y*(Ct(Rt)*Wt(Rt+N*$t)-Ot(Rt))/G}function xr($t){return 1-Math.pow(1-$t,1.5)}var br=Date.now(),bs=(Q(1)-Rt)/N,yr=n.duration?1e3*n.duration:1e3*bs*.8;function ys(){var $t=(Date.now()-br)/yr,ro=xr($t)*bs;$t<=1?(this._flyToFrame=U(ys,this),this._move(this.unproject(a.add(d.subtract(a).multiplyBy(vr(ro)/P)),m),this.getScaleZoom(y/He(ro),m),{flyTo:!0})):this._move(t,e)._moveEnd(!0)}return this._moveStart(!0,n.noMoveStart),ys.call(this),this},flyToBounds:function(t,e){var n=this._getBoundsCenterZoom(t,e);return this.flyTo(n.center,n.zoom,e)},setMaxBounds:function(t){return t=ht(t),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),t.isValid()?(this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(t){var e=this.options.minZoom;return this.options.minZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(t):this},setMaxZoom:function(t){var e=this.options.maxZoom;return this.options.maxZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(t):this},panInsideBounds:function(t,e){this._enforcingBounds=!0;var n=this.getCenter(),a=this._limitCenter(n,this._zoom,ht(t));return n.equals(a)||this.panTo(a,e),this._enforcingBounds=!1,this},panInside:function(t,e){e=e||{};var n=q(e.paddingTopLeft||e.padding||[0,0]),a=q(e.paddingBottomRight||e.padding||[0,0]),d=this.project(this.getCenter()),p=this.project(t),m=this.getPixelBounds(),y=mt([m.min.add(n),m.max.subtract(a)]),F=y.getSize();if(!y.contains(p)){this._enforcingBounds=!0;var P=p.subtract(y.getCenter()),N=y.extend(p).getSize().subtract(F);d.x+=P.x<0?-N.x:N.x,d.y+=P.y<0?-N.y:N.y,this.panTo(this.unproject(d),e),this._enforcingBounds=!1}return this},invalidateSize:function(t){if(!this._loaded)return this;t=r({animate:!1,pan:!0},t===!0?{animate:!0}:t);var e=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var n=this.getSize(),a=e.divideBy(2).round(),d=n.divideBy(2).round(),p=a.subtract(d);return!p.x&&!p.y?this:(t.animate&&t.pan?this.panBy(p):(t.pan&&this._rawPanBy(p),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(c(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:e,newSize:n}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(t){if(t=this._locateOptions=r({timeout:1e4,watch:!1},t),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var e=c(this._handleGeolocationResponse,this),n=c(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(e,n,t):navigator.geolocation.getCurrentPosition(e,n,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){if(this._container._leaflet_id){var e=t.code,n=t.message||(e===1?"permission denied":e===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:e,message:"Geolocation error: "+n+"."})}},_handleGeolocationResponse:function(t){if(this._container._leaflet_id){var e=t.coords.latitude,n=t.coords.longitude,a=new ot(e,n),d=a.toBounds(t.coords.accuracy*2),p=this._locateOptions;if(p.setView){var m=this.getBoundsZoom(d);this.setView(a,p.maxZoom?Math.min(m,p.maxZoom):m)}var y={latlng:a,bounds:d,timestamp:t.timestamp};for(var F in t.coords)typeof t.coords[F]=="number"&&(y[F]=t.coords[F]);this.fire("locationfound",y)}},addHandler:function(t,e){if(!e)return this;var n=this[t]=new e(this);return this._handlers.push(n),this.options[t]&&n.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),gt(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(C(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var t;for(t in this._layers)this._layers[t].remove();for(t in this._panes)gt(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(t,e){var n="leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),a=nt("div",n,e||this._mapPane);return t&&(this._panes[t]=a),a},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds(),e=this.unproject(t.getBottomLeft()),n=this.unproject(t.getTopRight());return new vt(e,n)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,e,n){t=ht(t),n=q(n||[0,0]);var a=this.getZoom()||0,d=this.getMinZoom(),p=this.getMaxZoom(),m=t.getNorthWest(),y=t.getSouthEast(),F=this.getSize().subtract(n),P=mt(this.project(y,a),this.project(m,a)).getSize(),N=j.any3d?this.options.zoomSnap:1,G=F.x/P.x,Q=F.y/P.y,Ot=e?Math.max(G,Q):Math.min(G,Q);return a=this.getScaleZoom(Ot,a),N&&(a=Math.round(a/(N/100))*(N/100),a=e?Math.ceil(a/N)*N:Math.floor(a/N)*N),Math.max(d,Math.min(p,a))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new H(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(t,e){var n=this._getTopLeftPoint(t,e);return new ct(n,n.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(t===void 0?this.getZoom():t)},getPane:function(t){return typeof t=="string"?this._panes[t]:t},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t,e){var n=this.options.crs;return e=e===void 0?this._zoom:e,n.scale(t)/n.scale(e)},getScaleZoom:function(t,e){var n=this.options.crs;e=e===void 0?this._zoom:e;var a=n.zoom(t*n.scale(e));return isNaN(a)?1/0:a},project:function(t,e){return e=e===void 0?this._zoom:e,this.options.crs.latLngToPoint(J(t),e)},unproject:function(t,e){return e=e===void 0?this._zoom:e,this.options.crs.pointToLatLng(q(t),e)},layerPointToLatLng:function(t){var e=q(t).add(this.getPixelOrigin());return this.unproject(e)},latLngToLayerPoint:function(t){var e=this.project(J(t))._round();return e._subtract(this.getPixelOrigin())},wrapLatLng:function(t){return this.options.crs.wrapLatLng(J(t))},wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(ht(t))},distance:function(t,e){return this.options.crs.distance(J(t),J(e))},containerPointToLayerPoint:function(t){return q(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return q(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var e=this.containerPointToLayerPoint(q(t));return this.layerPointToLatLng(e)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(J(t)))},mouseEventToContainerPoint:function(t){return In(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var e=this._container=Dn(t);if(e){if(e._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");K(e,"scroll",this._onScroll,this),this._containerId=f(e)},_initLayout:function(){var t=this._container;this._fadeAnimated=this.options.fadeAnimation&&j.any3d,Y(t,"leaflet-container"+(j.touch?" leaflet-touch":"")+(j.retina?" leaflet-retina":"")+(j.ielt9?" leaflet-oldie":"")+(j.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var e=fi(t,"position");e!=="absolute"&&e!=="relative"&&e!=="fixed"&&e!=="sticky"&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),kt(this._mapPane,new H(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(Y(t.markerPane,"leaflet-zoom-hide"),Y(t.shadowPane,"leaflet-zoom-hide"))},_resetView:function(t,e,n){kt(this._mapPane,new H(0,0));var a=!this._loaded;this._loaded=!0,e=this._limitZoom(e),this.fire("viewprereset");var d=this._zoom!==e;this._moveStart(d,n)._move(t,e)._moveEnd(d),this.fire("viewreset"),a&&this.fire("load")},_moveStart:function(t,e){return t&&this.fire("zoomstart"),e||this.fire("movestart"),this},_move:function(t,e,n,a){e===void 0&&(e=this._zoom);var d=this._zoom!==e;return this._zoom=e,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),a?n&&n.pinch&&this.fire("zoom",n):((d||n&&n.pinch)&&this.fire("zoom",n),this.fire("move",n)),this},_moveEnd:function(t){return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return C(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){kt(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(t){this._targets={},this._targets[f(this._container)]=this;var e=t?pt:K;e(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&e(window,"resize",this._onResize,this),j.any3d&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){C(this._resizeRequest),this._resizeRequest=U(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,e){for(var n=[],a,d=e==="mouseout"||e==="mouseover",p=t.target||t.srcElement,m=!1;p;){if(a=this._targets[f(p)],a&&(e==="click"||e==="preclick")&&this._draggableMoved(a)){m=!0;break}if(a&&a.listens(e,!0)&&(d&&!Ho(p,t)||(n.push(a),d))||p===this._container)break;p=p.parentNode}return!n.length&&!m&&!d&&this.listens(e,!0)&&(n=[this]),n},_isClickDisabled:function(t){for(;t&&t!==this._container;){if(t._leaflet_disable_click)return!0;t=t.parentNode}},_handleDOMEvent:function(t){var e=t.target||t.srcElement;if(!(!this._loaded||e._leaflet_disable_events||t.type==="click"&&this._isClickDisabled(e))){var n=t.type;n==="mousedown"&&Do(e),this._fireDOMEvent(t,n)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,e,n){if(t.type==="click"){var a=r({},t);a.type="preclick",this._fireDOMEvent(a,a.type,n)}var d=this._findEventTargets(t,e);if(n){for(var p=[],m=0;m<n.length;m++)n[m].listens(e,!0)&&p.push(n[m]);d=p.concat(d)}if(d.length){e==="contextmenu"&&Bt(t);var y=d[0],F={originalEvent:t};if(t.type!=="keypress"&&t.type!=="keydown"&&t.type!=="keyup"){var P=y.getLatLng&&(!y._radius||y._radius<=10);F.containerPoint=P?this.latLngToContainerPoint(y.getLatLng()):this.mouseEventToContainerPoint(t),F.layerPoint=this.containerPointToLayerPoint(F.containerPoint),F.latlng=P?y.getLatLng():this.layerPointToLatLng(F.layerPoint)}for(m=0;m<d.length;m++)if(d[m].fire(e,F,!0),F.originalEvent._stopped||d[m].options.bubblingMouseEvents===!1&&st(this._mouseEvents,e)!==-1)return}},_draggableMoved:function(t){return t=t.dragging&&t.dragging.enabled()?t:this,t.dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,e=this._handlers.length;t<e;t++)this._handlers[t].disable()},whenReady:function(t,e){return this._loaded?t.call(e||this,{target:this}):this.on("load",t,e),this},_getMapPanePos:function(){return _e(this._mapPane)||new H(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,e){var n=t&&e!==void 0?this._getNewPixelOrigin(t,e):this.getPixelOrigin();return n.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,e){var n=this.getSize()._divideBy(2);return this.project(t,e)._subtract(n)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,e,n){var a=this._getNewPixelOrigin(n,e);return this.project(t,e)._subtract(a)},_latLngBoundsToNewLayerBounds:function(t,e,n){var a=this._getNewPixelOrigin(n,e);return mt([this.project(t.getSouthWest(),e)._subtract(a),this.project(t.getNorthWest(),e)._subtract(a),this.project(t.getSouthEast(),e)._subtract(a),this.project(t.getNorthEast(),e)._subtract(a)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,e,n){if(!n)return t;var a=this.project(t,e),d=this.getSize().divideBy(2),p=new ct(a.subtract(d),a.add(d)),m=this._getBoundsOffset(p,n,e);return Math.abs(m.x)<=1&&Math.abs(m.y)<=1?t:this.unproject(a.add(m),e)},_limitOffset:function(t,e){if(!e)return t;var n=this.getPixelBounds(),a=new ct(n.min.add(t),n.max.add(t));return t.add(this._getBoundsOffset(a,e))},_getBoundsOffset:function(t,e,n){var a=mt(this.project(e.getNorthEast(),n),this.project(e.getSouthWest(),n)),d=a.min.subtract(t.min),p=a.max.subtract(t.max),m=this._rebound(d.x,-p.x),y=this._rebound(d.y,-p.y);return new H(m,y)},_rebound:function(t,e){return t+e>0?Math.round(t-e)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(e))},_limitZoom:function(t){var e=this.getMinZoom(),n=this.getMaxZoom(),a=j.any3d?this.options.zoomSnap:1;return a&&(t=Math.round(t/a)*a),Math.max(e,Math.min(n,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){wt(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,e){var n=this._getCenterOffset(t)._trunc();return(e&&e.animate)!==!0&&!this.getSize().contains(n)?!1:(this.panBy(n,e),!0)},_createAnimProxy:function(){var t=this._proxy=nt("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(e){var n=To,a=this._proxy.style[n];we(this._proxy,this.project(e.center,e.zoom),this.getZoomScale(e.zoom,1)),a===this._proxy.style[n]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){gt(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var t=this.getCenter(),e=this.getZoom();we(this._proxy,this.project(t,e),this.getZoomScale(e,1))},_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,e,n){if(this._animatingZoom)return!0;if(n=n||{},!this._zoomAnimated||n.animate===!1||this._nothingToAnimate()||Math.abs(e-this._zoom)>this.options.zoomAnimationThreshold)return!1;var a=this.getZoomScale(e),d=this._getCenterOffset(t)._divideBy(1-1/a);return n.animate!==!0&&!this.getSize().contains(d)?!1:(U(function(){this._moveStart(!0,n.noMoveStart||!1)._animateZoom(t,e,!0)},this),!0)},_animateZoom:function(t,e,n,a){this._mapPane&&(n&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=e,Y(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:t,zoom:e,noUpdate:a}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(c(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&wt(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function Ma(t,e){return new tt(t,e)}var qt=it.extend({options:{position:"topright"},initialize:function(t){S(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var e=this._map;return e&&e.removeControl(this),this.options.position=t,e&&e.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t;var e=this._container=this.onAdd(t),n=this.getPosition(),a=t._controlCorners[n];return Y(e,"leaflet-control"),n.indexOf("bottom")!==-1?a.insertBefore(e,a.firstChild):a.appendChild(e),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(gt(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(t){this._map&&t&&t.screenX>0&&t.screenY>0&&this._map.getContainer().focus()}}),bi=function(t){return new qt(t)};tt.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){var t=this._controlCorners={},e="leaflet-",n=this._controlContainer=nt("div",e+"control-container",this._container);function a(d,p){var m=e+d+" "+e+p;t[d+p]=nt("div",m,n)}a("top","left"),a("top","right"),a("bottom","left"),a("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)gt(this._controlCorners[t]);gt(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var jn=qt.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(t,e,n,a){return n<a?-1:a<n?1:0}},initialize:function(t,e,n){S(this,n),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var a in t)this._addLayer(t[a],a);for(a in e)this._addLayer(e[a],a,!0)},onAdd:function(t){this._initLayout(),this._update(),this._map=t,t.on("zoomend",this._checkDisabledLayers,this);for(var e=0;e<this._layers.length;e++)this._layers[e].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){return qt.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(t,e){return this._addLayer(t,e),this._map?this._update():this},addOverlay:function(t,e){return this._addLayer(t,e,!0),this._map?this._update():this},removeLayer:function(t){t.off("add remove",this._onLayerChange,this);var e=this._getLayer(f(t));return e&&this._layers.splice(this._layers.indexOf(e),1),this._map?this._update():this},expand:function(){Y(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._section.clientHeight?(Y(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=t+"px"):wt(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return wt(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",e=this._container=nt("div",t),n=this.options.collapsed;e.setAttribute("aria-haspopup",!0),xi(e),Ro(e);var a=this._section=nt("section",t+"-list");n&&(this._map.on("click",this.collapse,this),K(e,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var d=this._layersLink=nt("a",t+"-toggle",e);d.href="#",d.title="Layers",d.setAttribute("role","button"),K(d,{keydown:function(p){p.keyCode===13&&this._expandSafely()},click:function(p){Bt(p),this._expandSafely()}},this),n||this.expand(),this._baseLayersList=nt("div",t+"-base",a),this._separator=nt("div",t+"-separator",a),this._overlaysList=nt("div",t+"-overlays",a),e.appendChild(a)},_getLayer:function(t){for(var e=0;e<this._layers.length;e++)if(this._layers[e]&&f(this._layers[e].layer)===t)return this._layers[e]},_addLayer:function(t,e,n){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:e,overlay:n}),this.options.sortLayers&&this._layers.sort(c(function(a,d){return this.options.sortFunction(a.layer,d.layer,a.name,d.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;Zi(this._baseLayersList),Zi(this._overlaysList),this._layerControlInputs=[];var t,e,n,a,d=0;for(n=0;n<this._layers.length;n++)a=this._layers[n],this._addItem(a),e=e||a.overlay,t=t||!a.overlay,d+=a.overlay?0:1;return this.options.hideSingleBase&&(t=t&&d>1,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=e&&t?"":"none",this},_onLayerChange:function(t){this._handlingClick||this._update();var e=this._getLayer(f(t.target)),n=e.overlay?t.type==="add"?"overlayadd":"overlayremove":t.type==="add"?"baselayerchange":null;n&&this._map.fire(n,e)},_createRadioElement:function(t,e){var n='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(e?' checked="checked"':"")+"/>",a=document.createElement("div");return a.innerHTML=n,a.firstChild},_addItem:function(t){var e=document.createElement("label"),n=this._map.hasLayer(t.layer),a;t.overlay?(a=document.createElement("input"),a.type="checkbox",a.className="leaflet-control-layers-selector",a.defaultChecked=n):a=this._createRadioElement("leaflet-base-layers_"+f(this),n),this._layerControlInputs.push(a),a.layerId=f(t.layer),K(a,"click",this._onInputClick,this);var d=document.createElement("span");d.innerHTML=" "+t.name;var p=document.createElement("span");e.appendChild(p),p.appendChild(a),p.appendChild(d);var m=t.overlay?this._overlaysList:this._baseLayersList;return m.appendChild(e),this._checkDisabledLayers(),e},_onInputClick:function(){if(!this._preventClick){var t=this._layerControlInputs,e,n,a=[],d=[];this._handlingClick=!0;for(var p=t.length-1;p>=0;p--)e=t[p],n=this._getLayer(e.layerId).layer,e.checked?a.push(n):e.checked||d.push(n);for(p=0;p<d.length;p++)this._map.hasLayer(d[p])&&this._map.removeLayer(d[p]);for(p=0;p<a.length;p++)this._map.hasLayer(a[p])||this._map.addLayer(a[p]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var t=this._layerControlInputs,e,n,a=this._map.getZoom(),d=t.length-1;d>=0;d--)e=t[d],n=this._getLayer(e.layerId).layer,e.disabled=n.options.minZoom!==void 0&&a<n.options.minZoom||n.options.maxZoom!==void 0&&a>n.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var t=this._section;this._preventClick=!0,K(t,"click",Bt),this.expand();var e=this;setTimeout(function(){pt(t,"click",Bt),e._preventClick=!1})}}),Da=function(t,e,n){return new jn(t,e,n)},jo=qt.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(t){var e="leaflet-control-zoom",n=nt("div",e+" leaflet-bar"),a=this.options;return this._zoomInButton=this._createButton(a.zoomInText,a.zoomInTitle,e+"-in",n,this._zoomIn),this._zoomOutButton=this._createButton(a.zoomOutText,a.zoomOutTitle,e+"-out",n,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),n},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,e,n,a,d){var p=nt("a",n,a);return p.innerHTML=t,p.href="#",p.title=e,p.setAttribute("role","button"),p.setAttribute("aria-label",e),xi(p),K(p,"click",ke),K(p,"click",d,this),K(p,"click",this._refocusOnMap,this),p},_updateDisabled:function(){var t=this._map,e="leaflet-disabled";wt(this._zoomInButton,e),wt(this._zoomOutButton,e),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||t._zoom===t.getMinZoom())&&(Y(this._zoomOutButton,e),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||t._zoom===t.getMaxZoom())&&(Y(this._zoomInButton,e),this._zoomInButton.setAttribute("aria-disabled","true"))}});tt.mergeOptions({zoomControl:!0}),tt.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new jo,this.addControl(this.zoomControl))});var Ba=function(t){return new jo(t)},Wn=qt.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(t){var e="leaflet-control-scale",n=nt("div",e),a=this.options;return this._addScales(a,e+"-line",n),t.on(a.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),n},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,e,n){t.metric&&(this._mScale=nt("div",e,n)),t.imperial&&(this._iScale=nt("div",e,n))},_update:function(){var t=this._map,e=t.getSize().y/2,n=t.distance(t.containerPointToLatLng([0,e]),t.containerPointToLatLng([this.options.maxWidth,e]));this._updateScales(n)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var e=this._getRoundNum(t),n=e<1e3?e+" m":e/1e3+" km";this._updateScale(this._mScale,n,e/t)},_updateImperial:function(t){var e=t*3.2808399,n,a,d;e>5280?(n=e/5280,a=this._getRoundNum(n),this._updateScale(this._iScale,a+" mi",a/n)):(d=this._getRoundNum(e),this._updateScale(this._iScale,d+" ft",d/e))},_updateScale:function(t,e,n){t.style.width=Math.round(this.options.maxWidth*n)+"px",t.innerHTML=e},_getRoundNum:function(t){var e=Math.pow(10,(Math.floor(t)+"").length-1),n=t/e;return n=n>=10?10:n>=5?5:n>=3?3:n>=2?2:1,e*n}}),Na=function(t){return new Wn(t)},Oa='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',Wo=qt.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(j.inlineSvg?Oa+" ":"")+"Leaflet</a>"},initialize:function(t){S(this,t),this._attributions={}},onAdd:function(t){t.attributionControl=this,this._container=nt("div","leaflet-control-attribution"),xi(this._container);for(var e in t._layers)t._layers[e].getAttribution&&this.addAttribution(t._layers[e].getAttribution());return this._update(),t.on("layeradd",this._addAttribution,this),this._container},onRemove:function(t){t.off("layeradd",this._addAttribution,this)},_addAttribution:function(t){t.layer.getAttribution&&(this.addAttribution(t.layer.getAttribution()),t.layer.once("remove",function(){this.removeAttribution(t.layer.getAttribution())},this))},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):this},removeAttribution:function(t){return t?(this._attributions[t]&&(this._attributions[t]--,this._update()),this):this},_update:function(){if(this._map){var t=[];for(var e in this._attributions)this._attributions[e]&&t.push(e);var n=[];this.options.prefix&&n.push(this.options.prefix),t.length&&n.push(t.join(", ")),this._container.innerHTML=n.join(' <span aria-hidden="true">|</span> ')}}});tt.mergeOptions({attributionControl:!0}),tt.addInitHook(function(){this.options.attributionControl&&new Wo().addTo(this)});var Ia=function(t){return new Wo(t)};qt.Layers=jn,qt.Zoom=jo,qt.Scale=Wn,qt.Attribution=Wo,bi.layers=Da,bi.zoom=Ba,bi.scale=Na,bi.attribution=Ia;var te=it.extend({initialize:function(t){this._map=t},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});te.addTo=function(t,e){return t.addHandler(e,this),this};var Ra={Events:lt},Un=j.touch?"touchstart mousedown":"mousedown",ce=Ft.extend({options:{clickTolerance:3},initialize:function(t,e,n,a){S(this,a),this._element=t,this._dragStartTarget=e||t,this._preventOutline=n},enable:function(){this._enabled||(K(this._dragStartTarget,Un,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(ce._dragging===this&&this.finishDrag(!0),pt(this._dragStartTarget,Un,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){if(this._enabled&&(this._moved=!1,!Lo(this._element,"leaflet-zoom-anim"))){if(t.touches&&t.touches.length!==1){ce._dragging===this&&this.finishDrag();return}if(!(ce._dragging||t.shiftKey||t.which!==1&&t.button!==1&&!t.touches)&&(ce._dragging=this,this._preventOutline&&Do(this._element),zo(),gi(),!this._moving)){this.fire("down");var e=t.touches?t.touches[0]:t,n=Bn(this._element);this._startPoint=new H(e.clientX,e.clientY),this._startPos=_e(this._element),this._parentScale=Bo(n);var a=t.type==="mousedown";K(document,a?"mousemove":"touchmove",this._onMove,this),K(document,a?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(t){if(this._enabled){if(t.touches&&t.touches.length>1){this._moved=!0;return}var e=t.touches&&t.touches.length===1?t.touches[0]:t,n=new H(e.clientX,e.clientY)._subtract(this._startPoint);!n.x&&!n.y||Math.abs(n.x)+Math.abs(n.y)<this.options.clickTolerance||(n.x/=this._parentScale.x,n.y/=this._parentScale.y,Bt(t),this._moved||(this.fire("dragstart"),this._moved=!0,Y(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),Y(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(n),this._moving=!0,this._lastEvent=t,this._updatePosition())}},_updatePosition:function(){var t={originalEvent:this._lastEvent};this.fire("predrag",t),kt(this._element,this._newPos),this.fire("drag",t)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(t){wt(document.body,"leaflet-dragging"),this._lastTarget&&(wt(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),pt(document,"mousemove touchmove",this._onMove,this),pt(document,"mouseup touchend touchcancel",this._onUp,this),Ao(),mi();var e=this._moved&&this._moving;this._moving=!1,ce._dragging=!1,e&&this.fire("dragend",{noInertia:t,distance:this._newPos.distanceTo(this._startPos)})}});function Zn(t,e,n){var a,d=[1,4,2,8],p,m,y,F,P,N,G,Q;for(p=0,N=t.length;p<N;p++)t[p]._code=$e(t[p],e);for(y=0;y<4;y++){for(G=d[y],a=[],p=0,N=t.length,m=N-1;p<N;m=p++)F=t[p],P=t[m],F._code&G?P._code&G||(Q=Yi(P,F,G,e,n),Q._code=$e(Q,e),a.push(Q)):(P._code&G&&(Q=Yi(P,F,G,e,n),Q._code=$e(Q,e),a.push(Q)),a.push(F));t=a}return t}function Gn(t,e){var n,a,d,p,m,y,F,P,N;if(!t||t.length===0)throw new Error("latlngs not passed");jt(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var G=J([0,0]),Q=ht(t),Ot=Q.getNorthWest().distanceTo(Q.getSouthWest())*Q.getNorthEast().distanceTo(Q.getNorthWest());Ot<1700&&(G=Uo(t));var Ct=t.length,Wt=[];for(n=0;n<Ct;n++){var Rt=J(t[n]);Wt.push(e.project(J([Rt.lat-G.lat,Rt.lng-G.lng])))}for(y=F=P=0,n=0,a=Ct-1;n<Ct;a=n++)d=Wt[n],p=Wt[a],m=d.y*p.x-p.y*d.x,F+=(d.x+p.x)*m,P+=(d.y+p.y)*m,y+=m*3;y===0?N=Wt[0]:N=[F/y,P/y];var He=e.unproject(q(N));return J([He.lat+G.lat,He.lng+G.lng])}function Uo(t){for(var e=0,n=0,a=0,d=0;d<t.length;d++){var p=J(t[d]);e+=p.lat,n+=p.lng,a++}return J([e/a,n/a])}var Ha={__proto__:null,clipPolygon:Zn,polygonCenter:Gn,centroid:Uo};function qn(t,e){if(!e||!t.length)return t.slice();var n=e*e;return t=Ua(t,n),t=Wa(t,n),t}function Kn(t,e,n){return Math.sqrt(yi(t,e,n,!0))}function ja(t,e,n){return yi(t,e,n)}function Wa(t,e){var n=t.length,a=typeof Uint8Array<"u"?Uint8Array:Array,d=new a(n);d[0]=d[n-1]=1,Zo(t,d,e,0,n-1);var p,m=[];for(p=0;p<n;p++)d[p]&&m.push(t[p]);return m}function Zo(t,e,n,a,d){var p=0,m,y,F;for(y=a+1;y<=d-1;y++)F=yi(t[y],t[a],t[d],!0),F>p&&(m=y,p=F);p>n&&(e[m]=1,Zo(t,e,n,a,m),Zo(t,e,n,m,d))}function Ua(t,e){for(var n=[t[0]],a=1,d=0,p=t.length;a<p;a++)Za(t[a],t[d])>e&&(n.push(t[a]),d=a);return d<p-1&&n.push(t[p-1]),n}var Vn;function Yn(t,e,n,a,d){var p=a?Vn:$e(t,n),m=$e(e,n),y,F,P;for(Vn=m;;){if(!(p|m))return[t,e];if(p&m)return!1;y=p||m,F=Yi(t,e,y,n,d),P=$e(F,n),y===p?(t=F,p=P):(e=F,m=P)}}function Yi(t,e,n,a,d){var p=e.x-t.x,m=e.y-t.y,y=a.min,F=a.max,P,N;return n&8?(P=t.x+p*(F.y-t.y)/m,N=F.y):n&4?(P=t.x+p*(y.y-t.y)/m,N=y.y):n&2?(P=F.x,N=t.y+m*(F.x-t.x)/p):n&1&&(P=y.x,N=t.y+m*(y.x-t.x)/p),new H(P,N,d)}function $e(t,e){var n=0;return t.x<e.min.x?n|=1:t.x>e.max.x&&(n|=2),t.y<e.min.y?n|=4:t.y>e.max.y&&(n|=8),n}function Za(t,e){var n=e.x-t.x,a=e.y-t.y;return n*n+a*a}function yi(t,e,n,a){var d=e.x,p=e.y,m=n.x-d,y=n.y-p,F=m*m+y*y,P;return F>0&&(P=((t.x-d)*m+(t.y-p)*y)/F,P>1?(d=n.x,p=n.y):P>0&&(d+=m*P,p+=y*P)),m=t.x-d,y=t.y-p,a?m*m+y*y:new H(d,p)}function jt(t){return!W(t[0])||typeof t[0][0]!="object"&&typeof t[0][0]<"u"}function Jn(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),jt(t)}function Qn(t,e){var n,a,d,p,m,y,F,P;if(!t||t.length===0)throw new Error("latlngs not passed");jt(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var N=J([0,0]),G=ht(t),Q=G.getNorthWest().distanceTo(G.getSouthWest())*G.getNorthEast().distanceTo(G.getNorthWest());Q<1700&&(N=Uo(t));var Ot=t.length,Ct=[];for(n=0;n<Ot;n++){var Wt=J(t[n]);Ct.push(e.project(J([Wt.lat-N.lat,Wt.lng-N.lng])))}for(n=0,a=0;n<Ot-1;n++)a+=Ct[n].distanceTo(Ct[n+1])/2;if(a===0)P=Ct[0];else for(n=0,p=0;n<Ot-1;n++)if(m=Ct[n],y=Ct[n+1],d=m.distanceTo(y),p+=d,p>a){F=(p-a)/d,P=[y.x-F*(y.x-m.x),y.y-F*(y.y-m.y)];break}var Rt=e.unproject(q(P));return J([Rt.lat+N.lat,Rt.lng+N.lng])}var Ga={__proto__:null,simplify:qn,pointToSegmentDistance:Kn,closestPointOnSegment:ja,clipSegment:Yn,_getEdgeIntersection:Yi,_getBitCode:$e,_sqClosestPointOnSegment:yi,isFlat:jt,_flat:Jn,polylineCenter:Qn},Go={project:function(t){return new H(t.lng,t.lat)},unproject:function(t){return new ot(t.y,t.x)},bounds:new ct([-180,-90],[180,90])},qo={R:6378137,R_MINOR:6356752314245179e-9,bounds:new ct([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(t){var e=Math.PI/180,n=this.R,a=t.lat*e,d=this.R_MINOR/n,p=Math.sqrt(1-d*d),m=p*Math.sin(a),y=Math.tan(Math.PI/4-a/2)/Math.pow((1-m)/(1+m),p/2);return a=-n*Math.log(Math.max(y,1e-10)),new H(t.lng*e*n,a)},unproject:function(t){for(var e=180/Math.PI,n=this.R,a=this.R_MINOR/n,d=Math.sqrt(1-a*a),p=Math.exp(-t.y/n),m=Math.PI/2-2*Math.atan(p),y=0,F=.1,P;y<15&&Math.abs(F)>1e-7;y++)P=d*Math.sin(m),P=Math.pow((1-P)/(1+P),d/2),F=Math.PI/2-2*Math.atan(p*P)-m,m+=F;return new ot(m*e,t.x*e/n)}},qa={__proto__:null,LonLat:Go,Mercator:qo,SphericalMercator:It},Ka=r({},X,{code:"EPSG:3395",projection:qo,transformation:(function(){var t=.5/(Math.PI*qo.R);return oe(t,.5,-t,.5)})()}),Xn=r({},X,{code:"EPSG:4326",projection:Go,transformation:oe(1/180,1,-1/180,.5)}),Va=r({},B,{projection:Go,transformation:oe(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,e){var n=e.lng-t.lng,a=e.lat-t.lat;return Math.sqrt(n*n+a*a)},infinite:!0});B.Earth=X,B.EPSG3395=Ka,B.EPSG3857=me,B.EPSG900913=Ri,B.EPSG4326=Xn,B.Simple=Va;var Kt=Ft.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(t){return t.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(t){return t&&t.removeLayer(this),this},getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[f(t)]=this,this},removeInteractiveTarget:function(t){return delete this._map._targets[f(t)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var e=t.target;if(e.hasLayer(this)){if(this._map=e,this._zoomAnimated=e._zoomAnimated,this.getEvents){var n=this.getEvents();e.on(n,this),this.once("remove",function(){e.off(n,this)},this)}this.onAdd(e),this.fire("add"),e.fire("layeradd",{layer:this})}}});tt.include({addLayer:function(t){if(!t._layerAdd)throw new Error("The provided object is not a Layer.");var e=f(t);return this._layers[e]?this:(this._layers[e]=t,t._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t),this)},removeLayer:function(t){var e=f(t);return this._layers[e]?(this._loaded&&t.onRemove(this),delete this._layers[e],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null,this):this},hasLayer:function(t){return f(t)in this._layers},eachLayer:function(t,e){for(var n in this._layers)t.call(e,this._layers[n]);return this},_addLayers:function(t){t=t?W(t)?t:[t]:[];for(var e=0,n=t.length;e<n;e++)this.addLayer(t[e])},_addZoomLimit:function(t){(!isNaN(t.options.maxZoom)||!isNaN(t.options.minZoom))&&(this._zoomBoundLayers[f(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){var e=f(t);this._zoomBoundLayers[e]&&(delete this._zoomBoundLayers[e],this._updateZoomLevels())},_updateZoomLevels:function(){var t=1/0,e=-1/0,n=this._getZoomSpan();for(var a in this._zoomBoundLayers){var d=this._zoomBoundLayers[a].options;t=d.minZoom===void 0?t:Math.min(t,d.minZoom),e=d.maxZoom===void 0?e:Math.max(e,d.maxZoom)}this._layersMaxZoom=e===-1/0?void 0:e,this._layersMinZoom=t===1/0?void 0:t,n!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Be=Kt.extend({initialize:function(t,e){S(this,e),this._layers={};var n,a;if(t)for(n=0,a=t.length;n<a;n++)this.addLayer(t[n])},addLayer:function(t){var e=this.getLayerId(t);return this._layers[e]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var e=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[e]&&this._map.removeLayer(this._layers[e]),delete this._layers[e],this},hasLayer:function(t){var e=typeof t=="number"?t:this.getLayerId(t);return e in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(t){var e=Array.prototype.slice.call(arguments,1),n,a;for(n in this._layers)a=this._layers[n],a[t]&&a[t].apply(a,e);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},eachLayer:function(t,e){for(var n in this._layers)t.call(e,this._layers[n]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return f(t)}}),Ya=function(t,e){return new Be(t,e)},ne=Be.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),Be.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),Be.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new vt;for(var e in this._layers){var n=this._layers[e];t.extend(n.getBounds?n.getBounds():n.getLatLng())}return t}}),Ja=function(t,e){return new ne(t,e)},Ne=it.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(t){S(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,e){var n=this._getIconUrl(t);if(!n){if(t==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var a=this._createImg(n,e&&e.tagName==="IMG"?e:null);return this._setIconStyles(a,t),(this.options.crossOrigin||this.options.crossOrigin==="")&&(a.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),a},_setIconStyles:function(t,e){var n=this.options,a=n[e+"Size"];typeof a=="number"&&(a=[a,a]);var d=q(a),p=q(e==="shadow"&&n.shadowAnchor||n.iconAnchor||d&&d.divideBy(2,!0));t.className="leaflet-marker-"+e+" "+(n.className||""),p&&(t.style.marginLeft=-p.x+"px",t.style.marginTop=-p.y+"px"),d&&(t.style.width=d.x+"px",t.style.height=d.y+"px")},_createImg:function(t,e){return e=e||document.createElement("img"),e.src=t,e},_getIconUrl:function(t){return j.retina&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}});function Qa(t){return new Ne(t)}var wi=Ne.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){return typeof wi.imagePath!="string"&&(wi.imagePath=this._detectIconPath()),(this.options.imagePath||wi.imagePath)+Ne.prototype._getIconUrl.call(this,t)},_stripUrl:function(t){var e=function(n,a,d){var p=a.exec(n);return p&&p[d]};return t=e(t,/^url\((['"])?(.+)\1\)$/,2),t&&e(t,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var t=nt("div","leaflet-default-icon-path",document.body),e=fi(t,"background-image")||fi(t,"backgroundImage");if(document.body.removeChild(t),e=this._stripUrl(e),e)return e;var n=document.querySelector('link[href$="leaflet.css"]');return n?n.href.substring(0,n.href.length-11-1):""}}),ts=te.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new ce(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),Y(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&wt(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var e=this._marker,n=e._map,a=this._marker.options.autoPanSpeed,d=this._marker.options.autoPanPadding,p=_e(e._icon),m=n.getPixelBounds(),y=n.getPixelOrigin(),F=mt(m.min._subtract(y).add(d),m.max._subtract(y).subtract(d));if(!F.contains(p)){var P=q((Math.max(F.max.x,p.x)-F.max.x)/(m.max.x-F.max.x)-(Math.min(F.min.x,p.x)-F.min.x)/(m.min.x-F.min.x),(Math.max(F.max.y,p.y)-F.max.y)/(m.max.y-F.max.y)-(Math.min(F.min.y,p.y)-F.min.y)/(m.min.y-F.min.y)).multiplyBy(a);n.panBy(P,{animate:!1}),this._draggable._newPos._add(P),this._draggable._startPos._add(P),kt(e._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=U(this._adjustPan.bind(this,t))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&(C(this._panRequest),this._panRequest=U(this._adjustPan.bind(this,t)))},_onDrag:function(t){var e=this._marker,n=e._shadow,a=_e(e._icon),d=e._map.layerPointToLatLng(a);n&&kt(n,a),e._latlng=d,t.latlng=d,t.oldLatLng=this._oldLatLng,e.fire("move",t).fire("drag",t)},_onDragEnd:function(t){C(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),Ji=Kt.extend({options:{icon:new wi,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(t,e){S(this,e),this._latlng=J(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(t){var e=this._latlng;return this._latlng=J(t),this.update(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},getIcon:function(){return this.options.icon},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,e="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),n=t.icon.createIcon(this._icon),a=!1;n!==this._icon&&(this._icon&&this._removeIcon(),a=!0,t.title&&(n.title=t.title),n.tagName==="IMG"&&(n.alt=t.alt||"")),Y(n,e),t.keyboard&&(n.tabIndex="0",n.setAttribute("role","button")),this._icon=n,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&K(n,"focus",this._panOnFocus,this);var d=t.icon.createShadow(this._shadow),p=!1;d!==this._shadow&&(this._removeShadow(),p=!0),d&&(Y(d,e),d.alt=""),this._shadow=d,t.opacity<1&&this._updateOpacity(),a&&this.getPane().appendChild(this._icon),this._initInteraction(),d&&p&&this.getPane(t.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&pt(this._icon,"focus",this._panOnFocus,this),gt(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&gt(this._shadow),this._shadow=null},_setPos:function(t){this._icon&&kt(this._icon,t),this._shadow&&kt(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon&&(this._icon.style.zIndex=this._zIndex+t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(e)},_initInteraction:function(){if(this.options.interactive&&(Y(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),ts)){var t=this.options.draggable;this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new ts(this),t&&this.dragging.enable()}},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;this._icon&&Ht(this._icon,t),this._shadow&&Ht(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var t=this._map;if(t){var e=this.options.icon.options,n=e.iconSize?q(e.iconSize):q(0,0),a=e.iconAnchor?q(e.iconAnchor):q(0,0);t.panInside(this._latlng,{paddingTopLeft:a,paddingBottomRight:n.subtract(a)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function Xa(t,e){return new Ji(t,e)}var he=Kt.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(t){this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(t){return S(this,t),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&t&&Object.prototype.hasOwnProperty.call(t,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),Qi=he.extend({options:{fill:!0,radius:10},initialize:function(t,e){S(this,e),this._latlng=J(t),this._radius=this.options.radius},setLatLng:function(t){var e=this._latlng;return this._latlng=J(t),this.redraw(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius},setStyle:function(t){var e=t&&t.radius||this._radius;return he.prototype.setStyle.call(this,t),this.setRadius(e),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,e=this._radiusY||t,n=this._clickTolerance(),a=[t+n,e+n];this._pxBounds=new ct(this._point.subtract(a),this._point.add(a))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function tr(t,e){return new Qi(t,e)}var Ko=Qi.extend({initialize:function(t,e,n){if(typeof e=="number"&&(e=r({},n,{radius:e})),S(this,e),this._latlng=J(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(t){return this._mRadius=t,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new vt(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:he.prototype.setStyle,_project:function(){var t=this._latlng.lng,e=this._latlng.lat,n=this._map,a=n.options.crs;if(a.distance===X.distance){var d=Math.PI/180,p=this._mRadius/X.R/d,m=n.project([e+p,t]),y=n.project([e-p,t]),F=m.add(y).divideBy(2),P=n.unproject(F).lat,N=Math.acos((Math.cos(p*d)-Math.sin(e*d)*Math.sin(P*d))/(Math.cos(e*d)*Math.cos(P*d)))/d;(isNaN(N)||N===0)&&(N=p/Math.cos(Math.PI/180*e)),this._point=F.subtract(n.getPixelOrigin()),this._radius=isNaN(N)?0:F.x-n.project([P,t-N]).x,this._radiusY=F.y-m.y}else{var G=a.unproject(a.project(this._latlng).subtract([this._mRadius,0]));this._point=n.latLngToLayerPoint(this._latlng),this._radius=this._point.x-n.latLngToLayerPoint(G).x}this._updateBounds()}});function er(t,e,n){return new Ko(t,e,n)}var se=he.extend({options:{smoothFactor:1,noClip:!1},initialize:function(t,e){S(this,e),this._setLatLngs(t)},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(t){for(var e=1/0,n=null,a=yi,d,p,m=0,y=this._parts.length;m<y;m++)for(var F=this._parts[m],P=1,N=F.length;P<N;P++){d=F[P-1],p=F[P];var G=a(t,d,p,!0);G<e&&(e=G,n=a(t,d,p))}return n&&(n.distance=Math.sqrt(e)),n},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Qn(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(t,e){return e=e||this._defaultShape(),t=J(t),e.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new vt,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return jt(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(t){for(var e=[],n=jt(t),a=0,d=t.length;a<d;a++)n?(e[a]=J(t[a]),this._bounds.extend(e[a])):e[a]=this._convertLatLngs(t[a]);return e},_project:function(){var t=new ct;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t),this._bounds.isValid()&&t.isValid()&&(this._rawPxBounds=t,this._updateBounds())},_updateBounds:function(){var t=this._clickTolerance(),e=new H(t,t);this._rawPxBounds&&(this._pxBounds=new ct([this._rawPxBounds.min.subtract(e),this._rawPxBounds.max.add(e)]))},_projectLatlngs:function(t,e,n){var a=t[0]instanceof ot,d=t.length,p,m;if(a){for(m=[],p=0;p<d;p++)m[p]=this._map.latLngToLayerPoint(t[p]),n.extend(m[p]);e.push(m)}else for(p=0;p<d;p++)this._projectLatlngs(t[p],e,n)},_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}var e=this._parts,n,a,d,p,m,y,F;for(n=0,d=0,p=this._rings.length;n<p;n++)for(F=this._rings[n],a=0,m=F.length;a<m-1;a++)y=Yn(F[a],F[a+1],t,a,!0),y&&(e[d]=e[d]||[],e[d].push(y[0]),(y[1]!==F[a+1]||a===m-2)&&(e[d].push(y[1]),d++))}},_simplifyPoints:function(){for(var t=this._parts,e=this.options.smoothFactor,n=0,a=t.length;n<a;n++)t[n]=qn(t[n],e)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(t,e){var n,a,d,p,m,y,F=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(n=0,p=this._parts.length;n<p;n++)for(y=this._parts[n],a=0,m=y.length,d=m-1;a<m;d=a++)if(!(!e&&a===0)&&Kn(t,y[d],y[a])<=F)return!0;return!1}});function ir(t,e){return new se(t,e)}se._flat=Jn;var Oe=se.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Gn(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(t){var e=se.prototype._convertLatLngs.call(this,t),n=e.length;return n>=2&&e[0]instanceof ot&&e[0].equals(e[n-1])&&e.pop(),e},_setLatLngs:function(t){se.prototype._setLatLngs.call(this,t),jt(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return jt(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var t=this._renderer._bounds,e=this.options.weight,n=new H(e,e);if(t=new ct(t.min.subtract(n),t.max.add(n)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}for(var a=0,d=this._rings.length,p;a<d;a++)p=Zn(this._rings[a],t,!0),p.length&&this._parts.push(p)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(t){var e=!1,n,a,d,p,m,y,F,P;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(p=0,F=this._parts.length;p<F;p++)for(n=this._parts[p],m=0,P=n.length,y=P-1;m<P;y=m++)a=n[m],d=n[y],a.y>t.y!=d.y>t.y&&t.x<(d.x-a.x)*(t.y-a.y)/(d.y-a.y)+a.x&&(e=!e);return e||se.prototype._containsPoint.call(this,t,!0)}});function or(t,e){return new Oe(t,e)}var ae=ne.extend({initialize:function(t,e){S(this,e),this._layers={},t&&this.addData(t)},addData:function(t){var e=W(t)?t:t.features,n,a,d;if(e){for(n=0,a=e.length;n<a;n++)d=e[n],(d.geometries||d.geometry||d.features||d.coordinates)&&this.addData(d);return this}var p=this.options;if(p.filter&&!p.filter(t))return this;var m=Xi(t,p);return m?(m.feature=io(t),m.defaultOptions=m.options,this.resetStyle(m),p.onEachFeature&&p.onEachFeature(t,m),this.addLayer(m)):this},resetStyle:function(t){return t===void 0?this.eachLayer(this.resetStyle,this):(t.options=r({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this)},setStyle:function(t){return this.eachLayer(function(e){this._setLayerStyle(e,t)},this)},_setLayerStyle:function(t,e){t.setStyle&&(typeof e=="function"&&(e=e(t.feature)),t.setStyle(e))}});function Xi(t,e){var n=t.type==="Feature"?t.geometry:t,a=n?n.coordinates:null,d=[],p=e&&e.pointToLayer,m=e&&e.coordsToLatLng||Vo,y,F,P,N;if(!a&&!n)return null;switch(n.type){case"Point":return y=m(a),es(p,t,y,e);case"MultiPoint":for(P=0,N=a.length;P<N;P++)y=m(a[P]),d.push(es(p,t,y,e));return new ne(d);case"LineString":case"MultiLineString":return F=to(a,n.type==="LineString"?0:1,m),new se(F,e);case"Polygon":case"MultiPolygon":return F=to(a,n.type==="Polygon"?1:2,m),new Oe(F,e);case"GeometryCollection":for(P=0,N=n.geometries.length;P<N;P++){var G=Xi({geometry:n.geometries[P],type:"Feature",properties:t.properties},e);G&&d.push(G)}return new ne(d);case"FeatureCollection":for(P=0,N=n.features.length;P<N;P++){var Q=Xi(n.features[P],e);Q&&d.push(Q)}return new ne(d);default:throw new Error("Invalid GeoJSON object.")}}function es(t,e,n,a){return t?t(e,n):new Ji(n,a&&a.markersInheritOptions&&a)}function Vo(t){return new ot(t[1],t[0],t[2])}function to(t,e,n){for(var a=[],d=0,p=t.length,m;d<p;d++)m=e?to(t[d],e-1,n):(n||Vo)(t[d]),a.push(m);return a}function Yo(t,e){return t=J(t),t.alt!==void 0?[_(t.lng,e),_(t.lat,e),_(t.alt,e)]:[_(t.lng,e),_(t.lat,e)]}function eo(t,e,n,a){for(var d=[],p=0,m=t.length;p<m;p++)d.push(e?eo(t[p],jt(t[p])?0:e-1,n,a):Yo(t[p],a));return!e&&n&&d.length>0&&d.push(d[0].slice()),d}function Ie(t,e){return t.feature?r({},t.feature,{geometry:e}):io(e)}function io(t){return t.type==="Feature"||t.type==="FeatureCollection"?t:{type:"Feature",properties:{},geometry:t}}var Jo={toGeoJSON:function(t){return Ie(this,{type:"Point",coordinates:Yo(this.getLatLng(),t)})}};Ji.include(Jo),Ko.include(Jo),Qi.include(Jo),se.include({toGeoJSON:function(t){var e=!jt(this._latlngs),n=eo(this._latlngs,e?1:0,!1,t);return Ie(this,{type:(e?"Multi":"")+"LineString",coordinates:n})}}),Oe.include({toGeoJSON:function(t){var e=!jt(this._latlngs),n=e&&!jt(this._latlngs[0]),a=eo(this._latlngs,n?2:e?1:0,!0,t);return e||(a=[a]),Ie(this,{type:(n?"Multi":"")+"Polygon",coordinates:a})}}),Be.include({toMultiPoint:function(t){var e=[];return this.eachLayer(function(n){e.push(n.toGeoJSON(t).geometry.coordinates)}),Ie(this,{type:"MultiPoint",coordinates:e})},toGeoJSON:function(t){var e=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(e==="MultiPoint")return this.toMultiPoint(t);var n=e==="GeometryCollection",a=[];return this.eachLayer(function(d){if(d.toGeoJSON){var p=d.toGeoJSON(t);if(n)a.push(p.geometry);else{var m=io(p);m.type==="FeatureCollection"?a.push.apply(a,m.features):a.push(m)}}}),n?Ie(this,{geometries:a,type:"GeometryCollection"}):{type:"FeatureCollection",features:a}}});function is(t,e){return new ae(t,e)}var nr=is,oo=Kt.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(t,e,n){this._url=t,this._bounds=ht(e),S(this,n)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(Y(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){gt(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},bringToFront:function(){return this._map&&Me(this._image),this},bringToBack:function(){return this._map&&De(this._image),this},setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},setBounds:function(t){return this._bounds=ht(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var t=this._url.tagName==="IMG",e=this._image=t?this._url:nt("img");if(Y(e,"leaflet-image-layer"),this._zoomAnimated&&Y(e,"leaflet-zoom-animated"),this.options.className&&Y(e,this.options.className),e.onselectstart=x,e.onmousemove=x,e.onload=c(this.fire,this,"load"),e.onerror=c(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(e.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t){this._url=e.src;return}e.src=this._url,e.alt=this.options.alt},_animateZoom:function(t){var e=this._map.getZoomScale(t.zoom),n=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;we(this._image,n,e)},_reset:function(){var t=this._image,e=new ct(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),n=e.getSize();kt(t,e.min),t.style.width=n.x+"px",t.style.height=n.y+"px"},_updateOpacity:function(){Ht(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)},getCenter:function(){return this._bounds.getCenter()}}),sr=function(t,e,n){return new oo(t,e,n)},os=oo.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var t=this._url.tagName==="VIDEO",e=this._image=t?this._url:nt("video");if(Y(e,"leaflet-image-layer"),this._zoomAnimated&&Y(e,"leaflet-zoom-animated"),this.options.className&&Y(e,this.options.className),e.onselectstart=x,e.onmousemove=x,e.onloadeddata=c(this.fire,this,"load"),t){for(var n=e.getElementsByTagName("source"),a=[],d=0;d<n.length;d++)a.push(n[d].src);this._url=n.length>0?a:[e.src];return}W(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(e.style,"objectFit")&&(e.style.objectFit="fill"),e.autoplay=!!this.options.autoplay,e.loop=!!this.options.loop,e.muted=!!this.options.muted,e.playsInline=!!this.options.playsInline;for(var p=0;p<this._url.length;p++){var m=nt("source");m.src=this._url[p],e.appendChild(m)}}});function ar(t,e,n){return new os(t,e,n)}var ns=oo.extend({_initImage:function(){var t=this._image=this._url;Y(t,"leaflet-image-layer"),this._zoomAnimated&&Y(t,"leaflet-zoom-animated"),this.options.className&&Y(t,this.options.className),t.onselectstart=x,t.onmousemove=x}});function rr(t,e,n){return new ns(t,e,n)}var ee=Kt.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(t,e){t&&(t instanceof ot||W(t))?(this._latlng=J(t),S(this,e)):(S(this,t),this._source=e),this.options.content&&(this._content=this.options.content)},openOn:function(t){return t=arguments.length?t:this._source._map,t.hasLayer(this)||t.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(t){return this._map?this.close():(arguments.length?this._source=t:t=this._source,this._prepareOpen(),this.openOn(t._map)),this},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&Ht(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&Ht(this._container,1),this.bringToFront(),this.options.interactive&&(Y(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(t){t._fadeAnimated?(Ht(this._container,0),this._removeTimeout=setTimeout(c(gt,void 0,this._container),200)):gt(this._container),this.options.interactive&&(wt(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=J(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&Me(this._container),this},bringToBack:function(){return this._map&&De(this._container),this},_prepareOpen:function(t){var e=this._source;if(!e._map)return!1;if(e instanceof ne){e=null;var n=this._source._layers;for(var a in n)if(n[a]._map){e=n[a];break}if(!e)return!1;this._source=e}if(!t)if(e.getCenter)t=e.getCenter();else if(e.getLatLng)t=e.getLatLng();else if(e.getBounds)t=e.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(t),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var t=this._contentNode,e=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof e=="string")t.innerHTML=e;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(e)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),e=q(this.options.offset),n=this._getAnchor();this._zoomAnimated?kt(this._container,t.add(n)):e=e.add(t).add(n);var a=this._containerBottom=-e.y,d=this._containerLeft=-Math.round(this._containerWidth/2)+e.x;this._container.style.bottom=a+"px",this._container.style.left=d+"px"}},_getAnchor:function(){return[0,0]}});tt.include({_initOverlay:function(t,e,n,a){var d=e;return d instanceof t||(d=new t(a).setContent(e)),n&&d.setLatLng(n),d}}),Kt.include({_initOverlay:function(t,e,n,a){var d=n;return d instanceof t?(S(d,a),d._source=this):(d=e&&!a?e:new t(a,this),d.setContent(n)),d}});var no=ee.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(t){return t=arguments.length?t:this._source._map,!t.hasLayer(this)&&t._popup&&t._popup.options.autoClose&&t.removeLayer(t._popup),t._popup=this,ee.prototype.openOn.call(this,t)},onAdd:function(t){ee.prototype.onAdd.call(this,t),t.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof he||this._source.on("preclick",Fe))},onRemove:function(t){ee.prototype.onRemove.call(this,t),t.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof he||this._source.off("preclick",Fe))},getEvents:function(){var t=ee.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this.close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_initLayout:function(){var t="leaflet-popup",e=this._container=nt("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),n=this._wrapper=nt("div",t+"-content-wrapper",e);if(this._contentNode=nt("div",t+"-content",n),xi(e),Ro(this._contentNode),K(e,"contextmenu",Fe),this._tipContainer=nt("div",t+"-tip-container",e),this._tip=nt("div",t+"-tip",this._tipContainer),this.options.closeButton){var a=this._closeButton=nt("a",t+"-close-button",e);a.setAttribute("role","button"),a.setAttribute("aria-label","Close popup"),a.href="#close",a.innerHTML='<span aria-hidden="true">&#215;</span>',K(a,"click",function(d){Bt(d),this.close()},this)}},_updateLayout:function(){var t=this._contentNode,e=t.style;e.width="",e.whiteSpace="nowrap";var n=t.offsetWidth;n=Math.min(n,this.options.maxWidth),n=Math.max(n,this.options.minWidth),e.width=n+1+"px",e.whiteSpace="",e.height="";var a=t.offsetHeight,d=this.options.maxHeight,p="leaflet-popup-scrolled";d&&a>d?(e.height=d+"px",Y(t,p)):wt(t,p),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),n=this._getAnchor();kt(this._container,e.add(n))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var t=this._map,e=parseInt(fi(this._container,"marginBottom"),10)||0,n=this._container.offsetHeight+e,a=this._containerWidth,d=new H(this._containerLeft,-n-this._containerBottom);d._add(_e(this._container));var p=t.layerPointToContainerPoint(d),m=q(this.options.autoPanPadding),y=q(this.options.autoPanPaddingTopLeft||m),F=q(this.options.autoPanPaddingBottomRight||m),P=t.getSize(),N=0,G=0;p.x+a+F.x>P.x&&(N=p.x+a-P.x+F.x),p.x-N-y.x<0&&(N=p.x-y.x),p.y+n+F.y>P.y&&(G=p.y+n-P.y+F.y),p.y-G-y.y<0&&(G=p.y-y.y),(N||G)&&(this.options.keepInView&&(this._autopanning=!0),t.fire("autopanstart").panBy([N,G]))}},_getAnchor:function(){return q(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),lr=function(t,e){return new no(t,e)};tt.mergeOptions({closePopupOnClick:!0}),tt.include({openPopup:function(t,e,n){return this._initOverlay(no,t,e,n).openOn(this),this},closePopup:function(t){return t=arguments.length?t:this._popup,t&&t.close(),this}}),Kt.include({bindPopup:function(t,e){return this._popup=this._initOverlay(no,this._popup,t,e),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(t){return this._popup&&(this instanceof ne||(this._popup._source=this),this._popup._prepareOpen(t||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},getPopup:function(){return this._popup},_openPopup:function(t){if(!(!this._popup||!this._map)){ke(t);var e=t.layer||t.target;if(this._popup._source===e&&!(e instanceof he)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(t.latlng);return}this._popup._source=e,this.openPopup(t.latlng)}},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){t.originalEvent.keyCode===13&&this._openPopup(t)}});var so=ee.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(t){ee.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(t){ee.prototype.onRemove.call(this,t),t.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var t=ee.prototype.getEvents.call(this);return this.options.permanent||(t.preclick=this.close),t},_initLayout:function(){var t="leaflet-tooltip",e=t+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=nt("div",e),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+f(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var e,n,a=this._map,d=this._container,p=a.latLngToContainerPoint(a.getCenter()),m=a.layerPointToContainerPoint(t),y=this.options.direction,F=d.offsetWidth,P=d.offsetHeight,N=q(this.options.offset),G=this._getAnchor();y==="top"?(e=F/2,n=P):y==="bottom"?(e=F/2,n=0):y==="center"?(e=F/2,n=P/2):y==="right"?(e=0,n=P/2):y==="left"?(e=F,n=P/2):m.x<p.x?(y="right",e=0,n=P/2):(y="left",e=F+(N.x+G.x)*2,n=P/2),t=t.subtract(q(e,n,!0)).add(N).add(G),wt(d,"leaflet-tooltip-right"),wt(d,"leaflet-tooltip-left"),wt(d,"leaflet-tooltip-top"),wt(d,"leaflet-tooltip-bottom"),Y(d,"leaflet-tooltip-"+y),kt(d,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&Ht(this._container,t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(e)},_getAnchor:function(){return q(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),dr=function(t,e){return new so(t,e)};tt.include({openTooltip:function(t,e,n){return this._initOverlay(so,t,e,n).openOn(this),this},closeTooltip:function(t){return t.close(),this}}),Kt.include({bindTooltip:function(t,e){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(so,this._tooltip,t,e),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){if(!(!t&&this._tooltipHandlersAdded)){var e=t?"off":"on",n={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?n.add=this._openTooltip:(n.mouseover=this._openTooltip,n.mouseout=this.closeTooltip,n.click=this._openTooltip,this._map?this._addFocusListeners():n.add=this._addFocusListeners),this._tooltip.options.sticky&&(n.mousemove=this._moveTooltip),this[e](n),this._tooltipHandlersAdded=!t}},openTooltip:function(t){return this._tooltip&&(this instanceof ne||(this._tooltip._source=this),this._tooltip._prepareOpen(t)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(t){var e=typeof t.getElement=="function"&&t.getElement();e&&(K(e,"focus",function(){this._tooltip._source=t,this.openTooltip()},this),K(e,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(t){var e=typeof t.getElement=="function"&&t.getElement();e&&e.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(t){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var e=this;this._map.once("moveend",function(){e._openOnceFlag=!1,e._openTooltip(t)});return}this._tooltip._source=t.layer||t.target,this.openTooltip(this._tooltip.options.sticky?t.latlng:void 0)}},_moveTooltip:function(t){var e=t.latlng,n,a;this._tooltip.options.sticky&&t.originalEvent&&(n=this._map.mouseEventToContainerPoint(t.originalEvent),a=this._map.containerPointToLayerPoint(n),e=this._map.layerPointToLatLng(a)),this._tooltip.setLatLng(e)}});var ss=Ne.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var e=t&&t.tagName==="DIV"?t:document.createElement("div"),n=this.options;if(n.html instanceof Element?(Zi(e),e.appendChild(n.html)):e.innerHTML=n.html!==!1?n.html:"",n.bgPos){var a=q(n.bgPos);e.style.backgroundPosition=-a.x+"px "+-a.y+"px"}return this._setIconStyles(e,"icon"),e},createShadow:function(){return null}});function cr(t){return new ss(t)}Ne.Default=wi;var _i=Kt.extend({options:{tileSize:256,opacity:1,updateWhenIdle:j.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(t){S(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),gt(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(Me(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(De(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var t=this._clampZoom(this._map.getZoom());t!==this._tileZoom&&(this._tileZoom=t,this._updateLevels()),this._update()}return this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=v(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},createTile:function(){return document.createElement("div")},getTileSize:function(){var t=this.options.tileSize;return t instanceof H?t:new H(t,t)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var e=this.getPane().children,n=-t(-1/0,1/0),a=0,d=e.length,p;a<d;a++)p=e[a].style.zIndex,e[a]!==this._container&&p&&(n=t(n,+p));isFinite(n)&&(this.options.zIndex=n+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!j.ielt9){Ht(this._container,this.options.opacity);var t=+new Date,e=!1,n=!1;for(var a in this._tiles){var d=this._tiles[a];if(!(!d.current||!d.loaded)){var p=Math.min(1,(t-d.loaded)/200);Ht(d.el,p),p<1?e=!0:(d.active?n=!0:this._onOpaqueTile(d),d.active=!0)}}n&&!this._noPrune&&this._pruneTiles(),e&&(C(this._fadeFrame),this._fadeFrame=U(this._updateOpacity,this))}},_onOpaqueTile:x,_initContainer:function(){this._container||(this._container=nt("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,e=this.options.maxZoom;if(t!==void 0){for(var n in this._levels)n=Number(n),this._levels[n].el.children.length||n===t?(this._levels[n].el.style.zIndex=e-Math.abs(t-n),this._onUpdateLevel(n)):(gt(this._levels[n].el),this._removeTilesAtZoom(n),this._onRemoveLevel(n),delete this._levels[n]);var a=this._levels[t],d=this._map;return a||(a=this._levels[t]={},a.el=nt("div","leaflet-tile-container leaflet-zoom-animated",this._container),a.el.style.zIndex=e,a.origin=d.project(d.unproject(d.getPixelOrigin()),t).round(),a.zoom=t,this._setZoomTransform(a,d.getCenter(),d.getZoom()),x(a.el.offsetWidth),this._onCreateLevel(a)),this._level=a,a}},_onUpdateLevel:x,_onRemoveLevel:x,_onCreateLevel:x,_pruneTiles:function(){if(this._map){var t,e,n=this._map.getZoom();if(n>this.options.maxZoom||n<this.options.minZoom){this._removeAllTiles();return}for(t in this._tiles)e=this._tiles[t],e.retain=e.current;for(t in this._tiles)if(e=this._tiles[t],e.current&&!e.active){var a=e.coords;this._retainParent(a.x,a.y,a.z,a.z-5)||this._retainChildren(a.x,a.y,a.z,a.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}},_removeTilesAtZoom:function(t){for(var e in this._tiles)this._tiles[e].coords.z===t&&this._removeTile(e)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)gt(this._levels[t].el),this._onRemoveLevel(Number(t)),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,e,n,a){var d=Math.floor(t/2),p=Math.floor(e/2),m=n-1,y=new H(+d,+p);y.z=+m;var F=this._tileCoordsToKey(y),P=this._tiles[F];return P&&P.active?(P.retain=!0,!0):(P&&P.loaded&&(P.retain=!0),m>a?this._retainParent(d,p,m,a):!1)},_retainChildren:function(t,e,n,a){for(var d=2*t;d<2*t+2;d++)for(var p=2*e;p<2*e+2;p++){var m=new H(d,p);m.z=n+1;var y=this._tileCoordsToKey(m),F=this._tiles[y];if(F&&F.active){F.retain=!0;continue}else F&&F.loaded&&(F.retain=!0);n+1<a&&this._retainChildren(d,p,n+1,a)}},_resetView:function(t){var e=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),e,e)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var e=this.options;return e.minNativeZoom!==void 0&&t<e.minNativeZoom?e.minNativeZoom:e.maxNativeZoom!==void 0&&e.maxNativeZoom<t?e.maxNativeZoom:t},_setView:function(t,e,n,a){var d=Math.round(e);this.options.maxZoom!==void 0&&d>this.options.maxZoom||this.options.minZoom!==void 0&&d<this.options.minZoom?d=void 0:d=this._clampZoom(d);var p=this.options.updateWhenZooming&&d!==this._tileZoom;(!a||p)&&(this._tileZoom=d,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),d!==void 0&&this._update(t),n||this._pruneTiles(),this._noPrune=!!n),this._setZoomTransforms(t,e)},_setZoomTransforms:function(t,e){for(var n in this._levels)this._setZoomTransform(this._levels[n],t,e)},_setZoomTransform:function(t,e,n){var a=this._map.getZoomScale(n,t.zoom),d=t.origin.multiplyBy(a).subtract(this._map._getNewPixelOrigin(e,n)).round();j.any3d?we(t.el,d,a):kt(t.el,d)},_resetGrid:function(){var t=this._map,e=t.options.crs,n=this._tileSize=this.getTileSize(),a=this._tileZoom,d=this._map.getPixelWorldBounds(this._tileZoom);d&&(this._globalTileRange=this._pxBoundsToTileRange(d)),this._wrapX=e.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,e.wrapLng[0]],a).x/n.x),Math.ceil(t.project([0,e.wrapLng[1]],a).x/n.y)],this._wrapY=e.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([e.wrapLat[0],0],a).y/n.x),Math.ceil(t.project([e.wrapLat[1],0],a).y/n.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(t){var e=this._map,n=e._animatingZoom?Math.max(e._animateToZoom,e.getZoom()):e.getZoom(),a=e.getZoomScale(n,this._tileZoom),d=e.project(t,this._tileZoom).floor(),p=e.getSize().divideBy(a*2);return new ct(d.subtract(p),d.add(p))},_update:function(t){var e=this._map;if(e){var n=this._clampZoom(e.getZoom());if(t===void 0&&(t=e.getCenter()),this._tileZoom!==void 0){var a=this._getTiledPixelBounds(t),d=this._pxBoundsToTileRange(a),p=d.getCenter(),m=[],y=this.options.keepBuffer,F=new ct(d.getBottomLeft().subtract([y,-y]),d.getTopRight().add([y,-y]));if(!(isFinite(d.min.x)&&isFinite(d.min.y)&&isFinite(d.max.x)&&isFinite(d.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var P in this._tiles){var N=this._tiles[P].coords;(N.z!==this._tileZoom||!F.contains(new H(N.x,N.y)))&&(this._tiles[P].current=!1)}if(Math.abs(n-this._tileZoom)>1){this._setView(t,n);return}for(var G=d.min.y;G<=d.max.y;G++)for(var Q=d.min.x;Q<=d.max.x;Q++){var Ot=new H(Q,G);if(Ot.z=this._tileZoom,!!this._isValidTile(Ot)){var Ct=this._tiles[this._tileCoordsToKey(Ot)];Ct?Ct.current=!0:m.push(Ot)}}if(m.sort(function(Rt,He){return Rt.distanceTo(p)-He.distanceTo(p)}),m.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var Wt=document.createDocumentFragment();for(Q=0;Q<m.length;Q++)this._addTile(m[Q],Wt);this._level.el.appendChild(Wt)}}}},_isValidTile:function(t){var e=this._map.options.crs;if(!e.infinite){var n=this._globalTileRange;if(!e.wrapLng&&(t.x<n.min.x||t.x>n.max.x)||!e.wrapLat&&(t.y<n.min.y||t.y>n.max.y))return!1}if(!this.options.bounds)return!0;var a=this._tileCoordsToBounds(t);return ht(this.options.bounds).overlaps(a)},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var e=this._map,n=this.getTileSize(),a=t.scaleBy(n),d=a.add(n),p=e.unproject(a,t.z),m=e.unproject(d,t.z);return[p,m]},_tileCoordsToBounds:function(t){var e=this._tileCoordsToNwSe(t),n=new vt(e[0],e[1]);return this.options.noWrap||(n=this._map.wrapLatLngBounds(n)),n},_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},_keyToTileCoords:function(t){var e=t.split(":"),n=new H(+e[0],+e[1]);return n.z=+e[2],n},_removeTile:function(t){var e=this._tiles[t];e&&(gt(e.el),delete this._tiles[t],this.fire("tileunload",{tile:e.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){Y(t,"leaflet-tile");var e=this.getTileSize();t.style.width=e.x+"px",t.style.height=e.y+"px",t.onselectstart=x,t.onmousemove=x,j.ielt9&&this.options.opacity<1&&Ht(t,this.options.opacity)},_addTile:function(t,e){var n=this._getTilePos(t),a=this._tileCoordsToKey(t),d=this.createTile(this._wrapCoords(t),c(this._tileReady,this,t));this._initTile(d),this.createTile.length<2&&U(c(this._tileReady,this,t,null,d)),kt(d,n),this._tiles[a]={el:d,coords:t,current:!0},e.appendChild(d),this.fire("tileloadstart",{tile:d,coords:t})},_tileReady:function(t,e,n){e&&this.fire("tileerror",{error:e,tile:n,coords:t});var a=this._tileCoordsToKey(t);n=this._tiles[a],n&&(n.loaded=+new Date,this._map._fadeAnimated?(Ht(n.el,0),C(this._fadeFrame),this._fadeFrame=U(this._updateOpacity,this)):(n.active=!0,this._pruneTiles()),e||(Y(n.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:n.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),j.ielt9||!this._map._fadeAnimated?U(this._pruneTiles,this):setTimeout(c(this._pruneTiles,this),250)))},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var e=new H(this._wrapX?w(t.x,this._wrapX):t.x,this._wrapY?w(t.y,this._wrapY):t.y);return e.z=t.z,e},_pxBoundsToTileRange:function(t){var e=this.getTileSize();return new ct(t.min.unscaleBy(e).floor(),t.max.unscaleBy(e).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}});function hr(t){return new _i(t)}var Re=_i.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(t,e){this._url=t,e=S(this,e),e.detectRetina&&j.retina&&e.maxZoom>0?(e.tileSize=Math.floor(e.tileSize/2),e.zoomReverse?(e.zoomOffset--,e.minZoom=Math.min(e.maxZoom,e.minZoom+1)):(e.zoomOffset++,e.maxZoom=Math.max(e.minZoom,e.maxZoom-1)),e.minZoom=Math.max(0,e.minZoom)):e.zoomReverse?e.minZoom=Math.min(e.maxZoom,e.minZoom):e.maxZoom=Math.max(e.minZoom,e.maxZoom),typeof e.subdomains=="string"&&(e.subdomains=e.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(t,e){return this._url===t&&e===void 0&&(e=!0),this._url=t,e||this.redraw(),this},createTile:function(t,e){var n=document.createElement("img");return K(n,"load",c(this._tileOnLoad,this,e,n)),K(n,"error",c(this._tileOnError,this,e,n)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(n.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(n.referrerPolicy=this.options.referrerPolicy),n.alt="",n.src=this.getTileUrl(t),n},getTileUrl:function(t){var e={r:j.retina?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var n=this._globalTileRange.max.y-t.y;this.options.tms&&(e.y=n),e["-y"]=n}return Z(this._url,r(e,this.options))},_tileOnLoad:function(t,e){j.ielt9?setTimeout(c(t,this,null,e),0):t(null,e)},_tileOnError:function(t,e,n){var a=this.options.errorTileUrl;a&&e.getAttribute("src")!==a&&(e.src=a),t(n,e)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,e=this.options.maxZoom,n=this.options.zoomReverse,a=this.options.zoomOffset;return n&&(t=e-t),t+a},_getSubdomain:function(t){var e=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[e]},_abortLoading:function(){var t,e;for(t in this._tiles)if(this._tiles[t].coords.z!==this._tileZoom&&(e=this._tiles[t].el,e.onload=x,e.onerror=x,!e.complete)){e.src=O;var n=this._tiles[t].coords;gt(e),delete this._tiles[t],this.fire("tileabort",{tile:e,coords:n})}},_removeTile:function(t){var e=this._tiles[t];if(e)return e.el.setAttribute("src",O),_i.prototype._removeTile.call(this,t)},_tileReady:function(t,e,n){if(!(!this._map||n&&n.getAttribute("src")===O))return _i.prototype._tileReady.call(this,t,e,n)}});function as(t,e){return new Re(t,e)}var rs=Re.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(t,e){this._url=t;var n=r({},this.defaultWmsParams);for(var a in e)a in this.options||(n[a]=e[a]);e=S(this,e);var d=e.detectRetina&&j.retina?2:1,p=this.getTileSize();n.width=p.x*d,n.height=p.y*d,this.wmsParams=n},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var e=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[e]=this._crs.code,Re.prototype.onAdd.call(this,t)},getTileUrl:function(t){var e=this._tileCoordsToNwSe(t),n=this._crs,a=mt(n.project(e[0]),n.project(e[1])),d=a.min,p=a.max,m=(this._wmsVersion>=1.3&&this._crs===Xn?[d.y,d.x,p.y,p.x]:[d.x,d.y,p.x,p.y]).join(","),y=Re.prototype.getTileUrl.call(this,t);return y+D(this.wmsParams,y,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+m},setParams:function(t,e){return r(this.wmsParams,t),e||this.redraw(),this}});function pr(t,e){return new rs(t,e)}Re.WMS=rs,as.wms=pr;var re=Kt.extend({options:{padding:.1},initialize:function(t){S(this,t),f(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),Y(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,e){var n=this._map.getZoomScale(e,this._zoom),a=this._map.getSize().multiplyBy(.5+this.options.padding),d=this._map.project(this._center,e),p=a.multiplyBy(-n).add(d).subtract(this._map._getNewPixelOrigin(t,e));j.any3d?we(this._container,p,n):kt(this._container,p)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var t in this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){var t=this.options.padding,e=this._map.getSize(),n=this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();this._bounds=new ct(n,n.add(e.multiplyBy(1+t*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),ls=re.extend({options:{tolerance:0},getEvents:function(){var t=re.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){re.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");K(t,"mousemove",this._onMouseMove,this),K(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),K(t,"mouseout",this._handleMouseOut,this),t._leaflet_disable_events=!0,this._ctx=t.getContext("2d")},_destroyContainer:function(){C(this._redrawRequest),delete this._ctx,gt(this._container),pt(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var t;this._redrawBounds=null;for(var e in this._layers)t=this._layers[e],t._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){re.prototype._update.call(this);var t=this._bounds,e=this._container,n=t.getSize(),a=j.retina?2:1;kt(e,t.min),e.width=a*n.x,e.height=a*n.y,e.style.width=n.x+"px",e.style.height=n.y+"px",j.retina&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire("update")}},_reset:function(){re.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t),this._layers[f(t)]=t;var e=t._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=e),this._drawLast=e,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var e=t._order,n=e.next,a=e.prev;n?n.prev=a:this._drawLast=a,a?a.next=n:this._drawFirst=n,delete t._order,delete this._layers[f(t)],this._requestRedraw(t)},_updatePath:function(t){this._extendRedrawBounds(t),t._project(),t._update(),this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if(typeof t.options.dashArray=="string"){var e=t.options.dashArray.split(/[, ]+/),n=[],a,d;for(d=0;d<e.length;d++){if(a=Number(e[d]),isNaN(a))return;n.push(a)}t.options._dashArray=n}else t.options._dashArray=t.options.dashArray},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||U(this._redraw,this))},_extendRedrawBounds:function(t){if(t._pxBounds){var e=(t.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new ct,this._redrawBounds.extend(t._pxBounds.min.subtract([e,e])),this._redrawBounds.extend(t._pxBounds.max.add([e,e]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t=this._redrawBounds;if(t){var e=t.getSize();this._ctx.clearRect(t.min.x,t.min.y,e.x,e.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var t,e=this._redrawBounds;if(this._ctx.save(),e){var n=e.getSize();this._ctx.beginPath(),this._ctx.rect(e.min.x,e.min.y,n.x,n.y),this._ctx.clip()}this._drawing=!0;for(var a=this._drawFirst;a;a=a.next)t=a.layer,(!e||t._pxBounds&&t._pxBounds.intersects(e))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,e){if(this._drawing){var n,a,d,p,m=t._parts,y=m.length,F=this._ctx;if(y){for(F.beginPath(),n=0;n<y;n++){for(a=0,d=m[n].length;a<d;a++)p=m[n][a],F[a?"lineTo":"moveTo"](p.x,p.y);e&&F.closePath()}this._fillStroke(F,t)}}},_updateCircle:function(t){if(!(!this._drawing||t._empty())){var e=t._point,n=this._ctx,a=Math.max(Math.round(t._radius),1),d=(Math.max(Math.round(t._radiusY),1)||a)/a;d!==1&&(n.save(),n.scale(1,d)),n.beginPath(),n.arc(e.x,e.y/d,a,0,Math.PI*2,!1),d!==1&&n.restore(),this._fillStroke(n,t)}},_fillStroke:function(t,e){var n=e.options;n.fill&&(t.globalAlpha=n.fillOpacity,t.fillStyle=n.fillColor||n.color,t.fill(n.fillRule||"evenodd")),n.stroke&&n.weight!==0&&(t.setLineDash&&t.setLineDash(e.options&&e.options._dashArray||[]),t.globalAlpha=n.opacity,t.lineWidth=n.weight,t.strokeStyle=n.color,t.lineCap=n.lineCap,t.lineJoin=n.lineJoin,t.stroke())},_onClick:function(t){for(var e=this._map.mouseEventToLayerPoint(t),n,a,d=this._drawFirst;d;d=d.next)n=d.layer,n.options.interactive&&n._containsPoint(e)&&(!(t.type==="click"||t.type==="preclick")||!this._map._draggableMoved(n))&&(a=n);this._fireEvent(a?[a]:!1,t)},_onMouseMove:function(t){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var e=this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t,e)}},_handleMouseOut:function(t){var e=this._hoveredLayer;e&&(wt(this._container,"leaflet-interactive"),this._fireEvent([e],t,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(t,e){if(!this._mouseHoverThrottled){for(var n,a,d=this._drawFirst;d;d=d.next)n=d.layer,n.options.interactive&&n._containsPoint(e)&&(a=n);a!==this._hoveredLayer&&(this._handleMouseOut(t),a&&(Y(this._container,"leaflet-interactive"),this._fireEvent([a],t,"mouseover"),this._hoveredLayer=a)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,t),this._mouseHoverThrottled=!0,setTimeout(c(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(t,e,n){this._map._fireDOMEvent(e,n||e.type,t)},_bringToFront:function(t){var e=t._order;if(e){var n=e.next,a=e.prev;if(n)n.prev=a;else return;a?a.next=n:n&&(this._drawFirst=n),e.prev=this._drawLast,this._drawLast.next=e,e.next=null,this._drawLast=e,this._requestRedraw(t)}},_bringToBack:function(t){var e=t._order;if(e){var n=e.next,a=e.prev;if(a)a.next=n;else return;n?n.prev=a:a&&(this._drawLast=a),e.prev=null,e.next=this._drawFirst,this._drawFirst.prev=e,this._drawFirst=e,this._requestRedraw(t)}}});function ds(t){return j.canvas?new ls(t):null}var Fi=(function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch{}return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}})(),ur={_initContainer:function(){this._container=nt("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(re.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var e=t._container=Fi("shape");Y(e,"leaflet-vml-shape "+(this.options.className||"")),e.coordsize="1 1",t._path=Fi("path"),e.appendChild(t._path),this._updateStyle(t),this._layers[f(t)]=t},_addPath:function(t){var e=t._container;this._container.appendChild(e),t.options.interactive&&t.addInteractiveTarget(e)},_removePath:function(t){var e=t._container;gt(e),t.removeInteractiveTarget(e),delete this._layers[f(t)]},_updateStyle:function(t){var e=t._stroke,n=t._fill,a=t.options,d=t._container;d.stroked=!!a.stroke,d.filled=!!a.fill,a.stroke?(e||(e=t._stroke=Fi("stroke")),d.appendChild(e),e.weight=a.weight+"px",e.color=a.color,e.opacity=a.opacity,a.dashArray?e.dashStyle=W(a.dashArray)?a.dashArray.join(" "):a.dashArray.replace(/( *, *)/g," "):e.dashStyle="",e.endcap=a.lineCap.replace("butt","flat"),e.joinstyle=a.lineJoin):e&&(d.removeChild(e),t._stroke=null),a.fill?(n||(n=t._fill=Fi("fill")),d.appendChild(n),n.color=a.fillColor||a.color,n.opacity=a.fillOpacity):n&&(d.removeChild(n),t._fill=null)},_updateCircle:function(t){var e=t._point.round(),n=Math.round(t._radius),a=Math.round(t._radiusY||n);this._setPath(t,t._empty()?"M0 0":"AL "+e.x+","+e.y+" "+n+","+a+" 0,"+65535*360)},_setPath:function(t,e){t._path.v=e},_bringToFront:function(t){Me(t._container)},_bringToBack:function(t){De(t._container)}},ao=j.vml?Fi:ve,ki=re.extend({_initContainer:function(){this._container=ao("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=ao("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){gt(this._container),pt(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){re.prototype._update.call(this);var t=this._bounds,e=t.getSize(),n=this._container;(!this._svgSize||!this._svgSize.equals(e))&&(this._svgSize=e,n.setAttribute("width",e.x),n.setAttribute("height",e.y)),kt(n,t.min),n.setAttribute("viewBox",[t.min.x,t.min.y,e.x,e.y].join(" ")),this.fire("update")}},_initPath:function(t){var e=t._path=ao("path");t.options.className&&Y(e,t.options.className),t.options.interactive&&Y(e,"leaflet-interactive"),this._updateStyle(t),this._layers[f(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){gt(t._path),t.removeInteractiveTarget(t._path),delete this._layers[f(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var e=t._path,n=t.options;e&&(n.stroke?(e.setAttribute("stroke",n.color),e.setAttribute("stroke-opacity",n.opacity),e.setAttribute("stroke-width",n.weight),e.setAttribute("stroke-linecap",n.lineCap),e.setAttribute("stroke-linejoin",n.lineJoin),n.dashArray?e.setAttribute("stroke-dasharray",n.dashArray):e.removeAttribute("stroke-dasharray"),n.dashOffset?e.setAttribute("stroke-dashoffset",n.dashOffset):e.removeAttribute("stroke-dashoffset")):e.setAttribute("stroke","none"),n.fill?(e.setAttribute("fill",n.fillColor||n.color),e.setAttribute("fill-opacity",n.fillOpacity),e.setAttribute("fill-rule",n.fillRule||"evenodd")):e.setAttribute("fill","none"))},_updatePoly:function(t,e){this._setPath(t,Hi(t._parts,e))},_updateCircle:function(t){var e=t._point,n=Math.max(Math.round(t._radius),1),a=Math.max(Math.round(t._radiusY),1)||n,d="a"+n+","+a+" 0 1,0 ",p=t._empty()?"M0 0":"M"+(e.x-n)+","+e.y+d+n*2+",0 "+d+-n*2+",0 ";this._setPath(t,p)},_setPath:function(t,e){t._path.setAttribute("d",e)},_bringToFront:function(t){Me(t._path)},_bringToBack:function(t){De(t._path)}});j.vml&&ki.include(ur);function cs(t){return j.svg||j.vml?new ki(t):null}tt.include({getRenderer:function(t){var e=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer;return e||(e=this._renderer=this._createRenderer()),this.hasLayer(e)||this.addLayer(e),e},_getPaneRenderer:function(t){if(t==="overlayPane"||t===void 0)return!1;var e=this._paneRenderers[t];return e===void 0&&(e=this._createRenderer({pane:t}),this._paneRenderers[t]=e),e},_createRenderer:function(t){return this.options.preferCanvas&&ds(t)||cs(t)}});var hs=Oe.extend({initialize:function(t,e){Oe.prototype.initialize.call(this,this._boundsToLatLngs(t),e)},setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return t=ht(t),[t.getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});function fr(t,e){return new hs(t,e)}ki.create=ao,ki.pointsToPath=Hi,ae.geometryToLayer=Xi,ae.coordsToLatLng=Vo,ae.coordsToLatLngs=to,ae.latLngToCoords=Yo,ae.latLngsToCoords=eo,ae.getFeature=Ie,ae.asFeature=io,tt.mergeOptions({boxZoom:!0});var ps=te.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){K(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){pt(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){gt(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||t.which!==1&&t.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),gi(),zo(),this._startPoint=this._map.mouseEventToContainerPoint(t),K(document,{contextmenu:ke,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=nt("div","leaflet-zoom-box",this._container),Y(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var e=new ct(this._point,this._startPoint),n=e.getSize();kt(this._box,e.min),this._box.style.width=n.x+"px",this._box.style.height=n.y+"px"},_finish:function(){this._moved&&(gt(this._box),wt(this._container,"leaflet-crosshair")),mi(),Ao(),pt(document,{contextmenu:ke,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){if(!(t.which!==1&&t.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(c(this._resetState,this),0);var e=new vt(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(e).fire("boxzoomend",{boxZoomBounds:e})}},_onKeyDown:function(t){t.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});tt.addInitHook("addHandler","boxZoom",ps),tt.mergeOptions({doubleClickZoom:!0});var us=te.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var e=this._map,n=e.getZoom(),a=e.options.zoomDelta,d=t.originalEvent.shiftKey?n-a:n+a;e.options.doubleClickZoom==="center"?e.setZoom(d):e.setZoomAround(t.containerPoint,d)}});tt.addInitHook("addHandler","doubleClickZoom",us),tt.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var fs=te.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new ce(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}Y(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){wt(this._map._container,"leaflet-grab"),wt(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t=this._map;if(t._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var e=ht(this._map.options.maxBounds);this._offsetLimit=mt(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){if(this._map.options.inertia){var e=this._lastTime=+new Date,n=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(n),this._times.push(e),this._prunePositions(e)}this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){for(;this._positions.length>1&&t-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),e=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=e.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,e){return t-(t-e)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var t=this._draggable._newPos.subtract(this._draggable._startPos),e=this._offsetLimit;t.x<e.min.x&&(t.x=this._viscousLimit(t.x,e.min.x)),t.y<e.min.y&&(t.y=this._viscousLimit(t.y,e.min.y)),t.x>e.max.x&&(t.x=this._viscousLimit(t.x,e.max.x)),t.y>e.max.y&&(t.y=this._viscousLimit(t.y,e.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},_onPreDragWrap:function(){var t=this._worldWidth,e=Math.round(t/2),n=this._initialWorldOffset,a=this._draggable._newPos.x,d=(a-e+n)%t+e-n,p=(a+e+n)%t-e-n,m=Math.abs(d+n)<Math.abs(p+n)?d:p;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=m},_onDragEnd:function(t){var e=this._map,n=e.options,a=!n.inertia||t.noInertia||this._times.length<2;if(e.fire("dragend",t),a)e.fire("moveend");else{this._prunePositions(+new Date);var d=this._lastPos.subtract(this._positions[0]),p=(this._lastTime-this._times[0])/1e3,m=n.easeLinearity,y=d.multiplyBy(m/p),F=y.distanceTo([0,0]),P=Math.min(n.inertiaMaxSpeed,F),N=y.multiplyBy(P/F),G=P/(n.inertiaDeceleration*m),Q=N.multiplyBy(-G/2).round();!Q.x&&!Q.y?e.fire("moveend"):(Q=e._limitOffset(Q,e.options.maxBounds),U(function(){e.panBy(Q,{duration:G,easeLinearity:m,noMoveStart:!0,animate:!0})}))}}});tt.addInitHook("addHandler","dragging",fs),tt.mergeOptions({keyboard:!0,keyboardPanDelta:80});var gs=te.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),K(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),pt(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var t=document.body,e=document.documentElement,n=t.scrollTop||e.scrollTop,a=t.scrollLeft||e.scrollLeft;this._map._container.focus(),window.scrollTo(a,n)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){var e=this._panKeys={},n=this.keyCodes,a,d;for(a=0,d=n.left.length;a<d;a++)e[n.left[a]]=[-1*t,0];for(a=0,d=n.right.length;a<d;a++)e[n.right[a]]=[t,0];for(a=0,d=n.down.length;a<d;a++)e[n.down[a]]=[0,t];for(a=0,d=n.up.length;a<d;a++)e[n.up[a]]=[0,-1*t]},_setZoomDelta:function(t){var e=this._zoomKeys={},n=this.keyCodes,a,d;for(a=0,d=n.zoomIn.length;a<d;a++)e[n.zoomIn[a]]=t;for(a=0,d=n.zoomOut.length;a<d;a++)e[n.zoomOut[a]]=-t},_addHooks:function(){K(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){pt(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var e=t.keyCode,n=this._map,a;if(e in this._panKeys){if(!n._panAnim||!n._panAnim._inProgress)if(a=this._panKeys[e],t.shiftKey&&(a=q(a).multiplyBy(3)),n.options.maxBounds&&(a=n._limitOffset(q(a),n.options.maxBounds)),n.options.worldCopyJump){var d=n.wrapLatLng(n.unproject(n.project(n.getCenter()).add(a)));n.panTo(d)}else n.panBy(a)}else if(e in this._zoomKeys)n.setZoom(n.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[e]);else if(e===27&&n._popup&&n._popup.options.closeOnEscapeKey)n.closePopup();else return;ke(t)}}});tt.addInitHook("addHandler","keyboard",gs),tt.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var ms=te.extend({addHooks:function(){K(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){pt(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var e=Rn(t),n=this._map.options.wheelDebounceTime;this._delta+=e,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var a=Math.max(n-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(c(this._performZoom,this),a),ke(t)},_performZoom:function(){var t=this._map,e=t.getZoom(),n=this._map.options.zoomSnap||0;t._stop();var a=this._delta/(this._map.options.wheelPxPerZoomLevel*4),d=4*Math.log(2/(1+Math.exp(-Math.abs(a))))/Math.LN2,p=n?Math.ceil(d/n)*n:d,m=t._limitZoom(e+(this._delta>0?p:-p))-e;this._delta=0,this._startTime=null,m&&(t.options.scrollWheelZoom==="center"?t.setZoom(e+m):t.setZoomAround(this._lastMousePos,e+m))}});tt.addInitHook("addHandler","scrollWheelZoom",ms);var gr=600;tt.mergeOptions({tapHold:j.touchNative&&j.safari&&j.mobile,tapTolerance:15});var vs=te.extend({addHooks:function(){K(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){pt(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(clearTimeout(this._holdTimeout),t.touches.length===1){var e=t.touches[0];this._startPos=this._newPos=new H(e.clientX,e.clientY),this._holdTimeout=setTimeout(c(function(){this._cancel(),this._isTapValid()&&(K(document,"touchend",Bt),K(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",e))},this),gr),K(document,"touchend touchcancel contextmenu",this._cancel,this),K(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function t(){pt(document,"touchend",Bt),pt(document,"touchend touchcancel",t)},_cancel:function(){clearTimeout(this._holdTimeout),pt(document,"touchend touchcancel contextmenu",this._cancel,this),pt(document,"touchmove",this._onMove,this)},_onMove:function(t){var e=t.touches[0];this._newPos=new H(e.clientX,e.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(t,e){var n=new MouseEvent(t,{bubbles:!0,cancelable:!0,view:window,screenX:e.screenX,screenY:e.screenY,clientX:e.clientX,clientY:e.clientY});n._simulated=!0,e.target.dispatchEvent(n)}});tt.addInitHook("addHandler","tapHold",vs),tt.mergeOptions({touchZoom:j.touch,bounceAtZoomLimits:!0});var xs=te.extend({addHooks:function(){Y(this._map._container,"leaflet-touch-zoom"),K(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){wt(this._map._container,"leaflet-touch-zoom"),pt(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var e=this._map;if(!(!t.touches||t.touches.length!==2||e._animatingZoom||this._zooming)){var n=e.mouseEventToContainerPoint(t.touches[0]),a=e.mouseEventToContainerPoint(t.touches[1]);this._centerPoint=e.getSize()._divideBy(2),this._startLatLng=e.containerPointToLatLng(this._centerPoint),e.options.touchZoom!=="center"&&(this._pinchStartLatLng=e.containerPointToLatLng(n.add(a)._divideBy(2))),this._startDist=n.distanceTo(a),this._startZoom=e.getZoom(),this._moved=!1,this._zooming=!0,e._stop(),K(document,"touchmove",this._onTouchMove,this),K(document,"touchend touchcancel",this._onTouchEnd,this),Bt(t)}},_onTouchMove:function(t){if(!(!t.touches||t.touches.length!==2||!this._zooming)){var e=this._map,n=e.mouseEventToContainerPoint(t.touches[0]),a=e.mouseEventToContainerPoint(t.touches[1]),d=n.distanceTo(a)/this._startDist;if(this._zoom=e.getScaleZoom(d,this._startZoom),!e.options.bounceAtZoomLimits&&(this._zoom<e.getMinZoom()&&d<1||this._zoom>e.getMaxZoom()&&d>1)&&(this._zoom=e._limitZoom(this._zoom)),e.options.touchZoom==="center"){if(this._center=this._startLatLng,d===1)return}else{var p=n._add(a)._divideBy(2)._subtract(this._centerPoint);if(d===1&&p.x===0&&p.y===0)return;this._center=e.unproject(e.project(this._pinchStartLatLng,this._zoom).subtract(p),this._zoom)}this._moved||(e._moveStart(!0,!1),this._moved=!0),C(this._animRequest);var m=c(e._move,e,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=U(m,this,!0),Bt(t)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,C(this._animRequest),pt(document,"touchmove",this._onTouchMove,this),pt(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});tt.addInitHook("addHandler","touchZoom",xs),tt.BoxZoom=ps,tt.DoubleClickZoom=us,tt.Drag=fs,tt.Keyboard=gs,tt.ScrollWheelZoom=ms,tt.TapHold=vs,tt.TouchZoom=xs,o.Bounds=ct,o.Browser=j,o.CRS=B,o.Canvas=ls,o.Circle=Ko,o.CircleMarker=Qi,o.Class=it,o.Control=qt,o.DivIcon=ss,o.DivOverlay=ee,o.DomEvent=Aa,o.DomUtil=Ea,o.Draggable=ce,o.Evented=Ft,o.FeatureGroup=ne,o.GeoJSON=ae,o.GridLayer=_i,o.Handler=te,o.Icon=Ne,o.ImageOverlay=oo,o.LatLng=ot,o.LatLngBounds=vt,o.Layer=Kt,o.LayerGroup=Be,o.LineUtil=Ga,o.Map=tt,o.Marker=Ji,o.Mixin=Ra,o.Path=he,o.Point=H,o.PolyUtil=Ha,o.Polygon=Oe,o.Polyline=se,o.Popup=no,o.PosAnimation=Hn,o.Projection=qa,o.Rectangle=hs,o.Renderer=re,o.SVG=ki,o.SVGOverlay=ns,o.TileLayer=Re,o.Tooltip=so,o.Transformation=ge,o.Util=et,o.VideoOverlay=os,o.bind=c,o.bounds=mt,o.canvas=ds,o.circle=er,o.circleMarker=tr,o.control=bi,o.divIcon=cr,o.extend=r,o.featureGroup=Ja,o.geoJSON=is,o.geoJson=nr,o.gridLayer=hr,o.icon=Qa,o.imageOverlay=sr,o.latLng=J,o.latLngBounds=ht,o.layerGroup=Ya,o.map=Ma,o.marker=Xa,o.point=q,o.polygon=or,o.polyline=ir,o.popup=lr,o.rectangle=fr,o.setOptions=S,o.stamp=f,o.svg=cs,o.svgOverlay=rr,o.tileLayer=as,o.tooltip=dr,o.transformation=oe,o.version=s,o.videoOverlay=ar;var mr=window.L;o.noConflict=function(){return window.L=mr,this},window.L=o}))})(Si,Si.exports)),Si.exports}var Al=zl();const _t=Cl(Al);var xo=function(h,i,o,s){var r=arguments.length,l=r<3?i:s===null?s=Object.getOwnPropertyDescriptor(i,o):s,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,i,o,s);else for(var u=h.length-1;u>=0;u--)(c=h[u])&&(l=(r<3?c(l):r>3?c(i,o,l):c(i,o))||l);return r>3&&l&&Object.defineProperty(i,o,l),l};function Ml(h){if(h.length<=2)return h;const i=[...h].sort((l,c)=>l[0]===c[0]?l[1]-c[1]:l[0]-c[0]),o=(l,c,u)=>(c[0]-l[0])*(u[1]-l[1])-(c[1]-l[1])*(u[0]-l[0]),s=[];for(const l of i){for(;s.length>=2&&o(s[s.length-2],s[s.length-1],l)<=0;)s.pop();s.push(l)}const r=[];for(let l=i.length-1;l>=0;l--){const c=i[l];for(;r.length>=2&&o(r[r.length-2],r[r.length-1],c)<=0;)r.pop();r.push(c)}return r.pop(),s.pop(),s.concat(r)}var qe;let Ai=(qe=class extends yt{constructor(){super(...arguments),this.activeFilter="all",this.isLocating=!1,this.markerMap=new Map}connectedCallback(){super.connectedCallback(),this.unsubscribe=g.subscribe(()=>{this.requestUpdate(),this.updateMapLayers()})}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.unsubscribe)==null||i.call(this),this.destroyMap()}firstUpdated(i){super.firstUpdated(i),setTimeout(()=>{this.initMap()},60)}updated(i){super.updated(i),i.has("activeFilter")&&this.updateMapLayers(),this.map&&setTimeout(()=>{var o;return(o=this.map)==null?void 0:o.invalidateSize()},50)}destroyMap(){this.map&&(this.map.remove(),this.map=void 0,this.markersLayer=void 0,this.trailsLayer=void 0,this.territoryLayer=void 0,this.markerMap.clear())}getGeoEvents(){return(g.events||[]).filter(o=>typeof o.latitude=="number"&&typeof o.longitude=="number")}getFilteredEvents(){const i=this.getGeoEvents();return this.activeFilter==="all"?i:i.filter(o=>o.eventType===this.activeFilter)}initMap(){var l;const i=(l=this.renderRoot)==null?void 0:l.querySelector("#leaflet-map");if(!i||this.map)return;const o=this.getGeoEvents();let s=[37.5665,126.978],r=13;o.length>0&&(s=[o[0].latitude,o[0].longitude],r=15),this.map=_t.map(i,{zoomControl:!1,attributionControl:!1}).setView(s,r),_t.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png",{maxZoom:19,subdomains:"abcd"}).addTo(this.map),_t.control.zoom({position:"bottomright"}).addTo(this.map),this.territoryLayer=_t.layerGroup().addTo(this.map),this.trailsLayer=_t.layerGroup().addTo(this.map),this.markersLayer=_t.layerGroup().addTo(this.map),this.updateMapLayers(o.length>1),setTimeout(()=>{var c;(c=this.map)==null||c.invalidateSize()},150)}updateMapLayers(i=!1){var f;if(!this.map||!this.markersLayer||!this.trailsLayer||!this.territoryLayer)return;this.markersLayer.clearLayers(),this.trailsLayer.clearLayers(),this.territoryLayer.clearLayers(),this.markerMap.clear();const o=this.getFilteredEvents(),s=this.getGeoEvents(),r=g.currentLocale==="ko",l=((f=g.currentPet)==null?void 0:f.name)||(r?"우리 댕댕이":"Pet");if(s.length>=3){const v=s.map(x=>[x.latitude,x.longitude]),w=Ml(v);if(w.length>=3){const x=_t.polygon(w,{color:"#17140F",weight:2.5,dashArray:"6, 8",fillColor:"#1FC99B",fillOpacity:.16});x.bindPopup(`
          <div style="font-family: 'Bricolage Grotesque', sans-serif; font-size: 13px; font-weight: 800; color: #17140F; text-align: center; padding: 4px 6px;">
            🐾 <strong>${l}</strong>'s ${r?"영역":"Territory"}
            <div style="font-size: 10.5px; color: #6A6152; font-weight: 600; margin-top: 2px;">
              ${s.length} ${r?"개의 기록 지점":"tagged spots"}
            </div>
          </div>
        `),this.territoryLayer.addLayer(x)}}const c=[...s].sort((v,w)=>new Date(v.timestamp).getTime()-new Date(w.timestamp).getTime()).map(v=>[v.latitude,v.longitude]);if(c.length>=2){const v=_t.polyline(c,{color:"#17140F",weight:5.5,opacity:.85,lineCap:"round",lineJoin:"round"}),w=_t.polyline(c,{color:"#FF5A3C",weight:3,dashArray:"5, 6",opacity:1,lineCap:"round"});this.trailsLayer.addLayer(v),this.trailsLayer.addLayer(w)}const u=_t.latLngBounds([]);o.forEach(v=>{var O;const w=v.latitude,x=v.longitude;u.extend([w,x]);const _=v.eventType==="poop"?"💩":v.eventType==="pee"?"💧":v.eventType==="walk"?"🐾":"📍",$=`
        <div style="
          position: relative;
          transform: translate(-50%, -50%);
          cursor: pointer;
        ">
          <div style="
            background: ${v.eventType==="poop"?"#FFCE2E":v.eventType==="pee"?"#BFD0FF":v.eventType==="walk"?"#FF5A3C":"#1FC99B"};
            border: 2.5px solid #17140F;
            border-radius: 50%;
            width: 34px;
            height: 34px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 2.5px 2.5px 0 #17140F;
            font-size: 15px;
            transition: transform 0.12s cubic-bezier(0.16, 1, 0.3, 1);
          ">
            ${_}
          </div>
        </div>
      `,S=_t.divIcon({className:"dooty-map-marker-icon",html:$,iconSize:[0,0]}),D=_t.marker([w,x],{icon:S}),M=((O=v.metadata)==null?void 0:O.locationName)||(v.notes?uo(v.notes,v.eventType,r):`${w.toFixed(4)}, ${x.toFixed(4)}`),Z=new Date(v.timestamp).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),W=new Date(v.timestamp).toLocaleDateString(),st=`
        <div style="padding: 4px 6px; min-width: 140px; font-family: 'Nunito', sans-serif;">
          <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px;">
            <span style="font-size: 18px;">${_}</span>
            <div>
              <div style="font-family: 'Bricolage Grotesque', sans-serif; font-weight: 800; font-size: 14px; color: #17140F;">
                ${v.eventType.toUpperCase()}
              </div>
              <div style="font-size: 10px; font-weight: 700; color: #6A6152;">
                ${W} · ${Z}
              </div>
            </div>
          </div>
          <div style="font-size: 12px; font-weight: 800; color: #17140F; margin-bottom: 2px;">
            ${M}
          </div>
          <div style="font-size: 10.5px; color: #9A9080; font-weight: 600;">
            ${w.toFixed(5)}, ${x.toFixed(5)} · ${v.loggedByName||"Owner"}
          </div>
        </div>
      `;D.bindPopup(st),D.on("click",()=>{this.selectedEventId=v.id,this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:`${v.eventType.toUpperCase()} · ${M}`,sub:`${w.toFixed(4)}, ${x.toFixed(4)} · ${v.loggedByName}`}}))}),this.markersLayer.addLayer(D),this.markerMap.set(v.id,D)}),i&&u.isValid()&&this.map.fitBounds(u,{padding:[40,40],maxZoom:17})}handleLocateMe(){if(!navigator.geolocation||!this.map){alert("Geolocation is not supported by your browser");return}this.isLocating=!0,navigator.geolocation.getCurrentPosition(i=>{if(this.isLocating=!1,!this.map)return;const o=i.coords.latitude,s=i.coords.longitude,r=i.coords.accuracy;this.userMarker&&this.map.removeLayer(this.userMarker),this.userAccuracyCircle&&this.map.removeLayer(this.userAccuracyCircle),this.userAccuracyCircle=_t.circle([o,s],{radius:Math.min(r,200),color:"#2B5BE8",weight:1.5,fillColor:"#2B5BE8",fillOpacity:.12}).addTo(this.map),this.userMarker=_t.circleMarker([o,s],{radius:8,color:"#FFF",weight:2.5,fillColor:"#2B5BE8",fillOpacity:1}).addTo(this.map),this.map.flyTo([o,s],16,{duration:1.2})},i=>{this.isLocating=!1,console.warn("Geolocation failed:",i)},{enableHighAccuracy:!0,timeout:8e3})}handleFitAll(){if(!this.map)return;const i=this.getGeoEvents();if(i.length===0)return;const o=_t.latLngBounds(i.map(s=>[s.latitude,s.longitude]));this.map.fitBounds(o,{padding:[40,40],maxZoom:17})}handleSpotClick(i){if(this.selectedEventId=i.id,!this.map||i.latitude===void 0||i.longitude===void 0)return;this.map.flyTo([i.latitude,i.longitude],17,{duration:1});const o=this.markerMap.get(i.id);o&&setTimeout(()=>o.openPopup(),400)}render(){const i=g.currentLocale==="ko",o=this.getGeoEvents(),s=this.getFilteredEvents(),r=o.filter(u=>u.eventType==="poop").length,l=o.filter(u=>u.eventType==="pee").length,c=o.filter(u=>u.eventType==="walk").length;return b`
      <!-- Vector Map Area -->
      <div class="map-section-wrapper">
        <div id="leaflet-map"></div>

        <!-- Top Floating Filter Bar & Actions -->
        <div class="map-controls-bar">
          <div class="filter-pills-row">
            <button
              class="filter-btn ${this.activeFilter==="all"?"active":""}"
              @click=${()=>this.activeFilter="all"}
            >
              ${i?"전체":"All"} (${o.length})
            </button>
            <button
              class="filter-btn ${this.activeFilter==="poop"?"active":""}"
              @click=${()=>this.activeFilter="poop"}
            >
              💩 ${i?"응가":"Poop"} (${r})
            </button>
            <button
              class="filter-btn ${this.activeFilter==="pee"?"active":""}"
              @click=${()=>this.activeFilter="pee"}
            >
              💧 ${i?"쉬":"Pee"} (${l})
            </button>
            <button
              class="filter-btn ${this.activeFilter==="walk"?"active":""}"
              @click=${()=>this.activeFilter="walk"}
            >
              🐾 ${i?"산책":"Walk"} (${c})
            </button>
          </div>

          <div class="map-actions-group">
            <button
              class="map-action-btn"
              title="${i?"내 위치":"Locate Me"}"
              @click=${this.handleLocateMe}
            >
              ${this.isLocating?"⏳":"🎯"}
            </button>
            <button
              class="map-action-btn"
              title="${i?"모든 스팟 보기":"Fit All"}"
              @click=${this.handleFitAll}
            >
              🗺️
            </button>
          </div>
        </div>

        <!-- Territory Badge -->
        <div class="territory-badge-card">
          <div class="territory-sub">${i?"위치 기록":"Geo-tagged logs"}</div>
          <div class="territory-val">
            ${o.length>0?`${o.length} ${i?"개 지점":"spots"}`:i?"기록 없음":"0 spots"}
          </div>
        </div>
      </div>

      <!-- Favourite & Recent spots list -->
      <div class="spots-section">
        <div class="spots-header-row">
          <div class="spots-title">
            ${i?"최근 위치 기록":"Recent tagged locations"}
          </div>
          <div class="spots-count-badge">${s.length} ${i?"개":"items"}</div>
        </div>

        <div class="spots-list">
          ${s.length>0?s.slice(0,10).map((u,f)=>{var x,_,T;const v=this.selectedEventId===u.id,w=((x=u.metadata)==null?void 0:x.locationName)||(u.notes?uo(u.notes,u.eventType,i):`${u.eventType.toUpperCase()} at GPS spot`);return b`
                  <div
                    class="spot-card ${v?"selected":""}"
                    @click=${()=>this.handleSpotClick(u)}
                  >
                    <div
                      class="spot-rank"
                      style="background: ${u.eventType==="poop"?"#FFCE2E":u.eventType==="pee"?"#BFD0FF":"#FF5A3C"};"
                    >
                      ${u.eventType==="poop"?"💩":u.eventType==="pee"?"💧":"🐾"}
                    </div>
                    <div style="flex: 1; min-width: 0;">
                      <div class="spot-name">${w}</div>
                      <div class="spot-note">
                        ${new Date(u.timestamp).toLocaleDateString()} ·
                        ${(_=u.latitude)==null?void 0:_.toFixed(4)}, ${(T=u.longitude)==null?void 0:T.toFixed(4)} ·
                        ${u.loggedByName||"Owner"}
                      </div>
                    </div>
                    <div class="spot-fly-icon">📍</div>
                  </div>
                `}):b`
                <div
                  style="background: #FFF; border: 2.5px solid #17140F; border-radius: 20px; padding: 22px 18px; text-align: center; box-shadow: 3px 3px 0 #17140F;"
                >
                  <div style="font-size: 34px; margin-bottom: 6px;">🗺️</div>
                  <div
                    style="font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif); font-weight: 800; font-size: 16px; color: #17140F;"
                  >
                    ${i?"위치 태그가 아직 없습니다":"No GPS logs yet"}
                  </div>
                  <div
                    style="font-size: 12px; color: #6A6152; margin-top: 5px; line-height: 1.45;"
                  >
                    ${i?"기록할 때 위치 카드를 탭하여 GPS 좌표나 장소를 추가하면 실시간 지도에 배변 및 산책 스팟과 영역이 표시됩니다.":"When logging an entry, tap the Location card to attach GPS coordinates or spots to map your walks and potty territory!"}
                  </div>
                </div>
              `}
        </div>
      </div>
    `}},qe.styles=zt`
    :host {
      display: block;
      padding-bottom: 140px;
      position: relative;
    }

    /* Core Leaflet Shadow DOM Structural Rules */
    .leaflet-pane,
    .leaflet-tile,
    .leaflet-marker-icon,
    .leaflet-marker-shadow,
    .leaflet-tile-container,
    .leaflet-pane > svg,
    .leaflet-pane > canvas,
    .leaflet-zoom-box,
    .leaflet-image-layer,
    .leaflet-layer {
      position: absolute;
      left: 0;
      top: 0;
    }
    .leaflet-container {
      overflow: hidden;
      position: relative;
      outline: 0;
      -webkit-tap-highlight-color: transparent;
      width: 100%;
      height: 100%;
    }
    .leaflet-tile {
      filter: inherit;
      visibility: hidden;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      -webkit-user-drag: none;
    }
    .leaflet-tile-loaded {
      visibility: inherit;
    }
    .leaflet-tile-container {
      pointer-events: none;
    }
    .leaflet-marker-icon,
    .leaflet-marker-shadow {
      display: block;
    }
    .leaflet-container .leaflet-overlay-pane svg {
      max-width: none !important;
      max-height: none !important;
    }
    .leaflet-container .leaflet-marker-pane img,
    .leaflet-container .leaflet-shadow-pane img,
    .leaflet-container .leaflet-tile-pane img,
    .leaflet-container img.leaflet-image-layer,
    .leaflet-container .leaflet-tile {
      max-width: none !important;
      max-height: none !important;
      width: 256px;
      height: 256px;
      padding: 0;
    }
    .leaflet-map-pane svg {
      position: absolute;
      left: 0;
      top: 0;
    }
    .leaflet-control {
      position: relative;
      z-index: 800;
      pointer-events: visiblePainted;
      pointer-events: auto;
    }
    .leaflet-top,
    .leaflet-bottom {
      position: absolute;
      z-index: 1000;
      pointer-events: none;
    }
    .leaflet-top {
      top: 0;
    }
    .leaflet-right {
      right: 0;
    }
    .leaflet-bottom {
      bottom: 0;
    }
    .leaflet-left {
      left: 0;
    }
    .leaflet-control-zoom {
      margin-bottom: 14px;
      margin-right: 14px;
      border: 2.5px solid #17140f;
      border-radius: 12px;
      box-shadow: 2.5px 2.5px 0 #17140f;
      overflow: hidden;
      background: #fff;
    }
    .leaflet-control-zoom a {
      background: #fff;
      color: #17140f;
      display: block;
      width: 32px;
      height: 32px;
      text-align: center;
      text-decoration: none;
      font-weight: 800;
      font-size: 16px;
      line-height: 30px;
      border-bottom: 1.5px solid #17140f;
      cursor: pointer;
    }
    .leaflet-control-zoom a:last-child {
      border-bottom: none;
    }
    .leaflet-popup {
      position: absolute;
      text-align: center;
      margin-bottom: 20px;
      pointer-events: none;
    }
    .leaflet-popup-content-wrapper {
      padding: 1px;
      text-align: left;
      border-radius: 16px;
      background: #fffbf2;
      border: 2.5px solid #17140f;
      box-shadow: 4px 4px 0 #17140f;
      pointer-events: auto;
    }
    .leaflet-popup-content {
      margin: 10px 12px;
      line-height: 1.4;
    }
    .leaflet-popup-tip-container {
      width: 40px;
      height: 20px;
      position: absolute;
      left: 50%;
      margin-top: -1px;
      margin-left: -20px;
      overflow: hidden;
      pointer-events: none;
    }
    .leaflet-popup-tip {
      width: 17px;
      height: 17px;
      padding: 1px;
      margin: -10px auto 0;
      transform: rotate(45deg);
      background: #fffbf2;
      border: 2px solid #17140f;
    }
    .leaflet-popup-close-button {
      position: absolute;
      top: 6px;
      right: 8px;
      padding: 2px;
      border: none;
      text-align: center;
      width: 18px;
      height: 18px;
      font: 16px/14px Tahoma, Verdana, sans-serif;
      color: #17140f;
      text-decoration: none;
      font-weight: 800;
      background: transparent;
      cursor: pointer;
      pointer-events: auto;
    }

    /* Map container shell */
    .map-section-wrapper {
      position: relative;
      width: 100%;
      height: 440px;
      background: #e5ead9;
      border-bottom: 3px solid #17140f;
      overflow: hidden;
    }

    #leaflet-map {
      width: 100%;
      height: 100%;
      z-index: 1;
      background: #e5ead9;
    }

    /* Filter floating pills */
    .map-controls-bar {
      position: absolute;
      top: 14px;
      left: 14px;
      right: 14px;
      z-index: 400;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      pointer-events: none;
    }

    .filter-pills-row {
      display: flex;
      align-items: center;
      gap: 5px;
      background: rgba(255, 251, 242, 0.94);
      backdrop-filter: blur(8px);
      padding: 4px;
      border-radius: 14px;
      border: 2px solid #17140f;
      box-shadow: 2.5px 2.5px 0 #17140f;
      pointer-events: auto;
      overflow-x: auto;
      scrollbar-width: none;
    }

    .filter-pills-row::-webkit-scrollbar {
      display: none;
    }

    .filter-btn {
      border: none;
      background: transparent;
      padding: 5px 9px;
      border-radius: 9px;
      font-family: inherit;
      font-size: 11.5px;
      font-weight: 800;
      color: #17140f;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 4px;
      transition: all 0.1s ease;
      white-space: nowrap;
    }

    .filter-btn.active {
      background: #ffce2e;
      border: 1.5px solid #17140f;
      box-shadow: 1px 1px 0 #17140f;
    }

    /* Floating Action Buttons */
    .map-actions-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
      pointer-events: auto;
    }

    .map-action-btn {
      width: 38px;
      height: 38px;
      border-radius: 12px;
      background: #fff;
      border: 2.5px solid #17140f;
      box-shadow: 2.5px 2.5px 0 #17140f;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      cursor: pointer;
      transition: transform 0.08s ease, box-shadow 0.08s ease;
    }

    .map-action-btn:hover {
      background: #fffbf2;
    }

    .map-action-btn:active {
      transform: translate(1px, 1px);
      box-shadow: 1px 1px 0 #17140f;
    }

    /* Territory info badge */
    .territory-badge-card {
      position: absolute;
      bottom: 14px;
      left: 14px;
      z-index: 400;
      background: #fff;
      border: 2.5px solid #17140f;
      border-radius: 16px;
      padding: 8px 12px;
      box-shadow: 3px 3px 0 #17140f;
      pointer-events: auto;
    }

    .territory-sub {
      font-size: 9.5px;
      font-weight: 800;
      letter-spacing: 1.2px;
      color: #9a9080;
      text-transform: uppercase;
    }

    .territory-val {
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 18px;
      color: #17140f;
      line-height: 1.1;
    }

    /* Spots ranking list section */
    .spots-section {
      padding: 18px 18px 24px;
      display: flex;
      flex-direction: column;
      gap: 13px;
    }

    .spots-header-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .spots-title {
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 20px;
      color: #17140f;
      letter-spacing: -0.5px;
    }

    .spots-count-badge {
      font-size: 11px;
      font-weight: 800;
      background: #e8eeff;
      border: 1.5px solid #17140f;
      border-radius: 8px;
      padding: 2px 7px;
      color: #2b5be8;
    }

    .spots-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .spot-card {
      display: flex;
      align-items: center;
      gap: 12px;
      background: #fff;
      border: 2.5px solid #17140f;
      border-radius: 18px;
      padding: 11px 13px;
      box-shadow: 2.5px 2.5px 0 #17140f;
      cursor: pointer;
      transition: transform 0.1s ease, box-shadow 0.1s ease, background 0.1s ease;
    }

    .spot-card:hover {
      transform: translate(-1px, -1px);
      box-shadow: 4px 4px 0 #17140f;
      background: #fffdf7;
    }

    .spot-card.selected {
      background: #fff8e7;
      border-color: #ff5a3c;
    }

    .spot-rank {
      width: 36px;
      height: 36px;
      border-radius: 12px;
      border: 2.5px solid #17140f;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 16px;
      color: #17140f;
      flex: none;
    }

    .spot-name {
      font-size: 13.5px;
      font-weight: 800;
      color: #17140f;
      line-height: 1.2;
    }

    .spot-note {
      font-size: 11px;
      font-weight: 600;
      color: #6a6152;
      margin-top: 2px;
    }

    .spot-fly-icon {
      font-size: 15px;
      opacity: 0.6;
      transition: opacity 0.1s ease, transform 0.1s ease;
      flex: none;
    }

    .spot-card:hover .spot-fly-icon {
      opacity: 1;
      transform: scale(1.15);
    }
  `,qe);xo([z()],Ai.prototype,"activeFilter",void 0);xo([z()],Ai.prototype,"isLocating",void 0);xo([z()],Ai.prototype,"selectedEventId",void 0);Ai=xo([At("dooty-map")],Ai);var Fn=function(h,i,o,s){var r=arguments.length,l=r<3?i:s===null?s=Object.getOwnPropertyDescriptor(i,o):s,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,i,o,s);else for(var u=h.length-1;u>=0;u--)(c=h[u])&&(l=(r<3?c(l):r>3?c(i,o,l):c(i,o))||l);return r>3&&l&&Object.defineProperty(i,o,l),l},Ke;let go=(Ke=class extends yt{constructor(){super(...arguments),this.medDone={0:!0,1:!1,2:!1},this.uncheckState={}}connectedCallback(){super.connectedCallback(),this.unsubscribe=g.subscribe(()=>this.requestUpdate())}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.unsubscribe)==null||i.call(this)}toggleMedChecked(i){this.uncheckState={...this.uncheckState,[i]:!this.uncheckState[i]}}renderWeightChart(i){const o=(g.events||[]).filter(M=>{var Z;return M.eventType==="weight"&&((Z=M.metadata)==null?void 0:Z.weightKg)}).sort((M,Z)=>new Date(M.timestamp).getTime()-new Date(Z.timestamp).getTime());if(o.length===0)return b`
        <div style="padding: 16px 0; text-align: center;">
          <div style="font-size: 28px; margin-bottom: 6px;">⚖️</div>
          <div style="font-size: 14px; font-weight: 800; color: #17140F;">
            ${i?"등록된 체중 기록이 없습니다":"No weigh-ins recorded yet"}
          </div>
          <div style="font-size: 12px; font-weight: 600; color: #6A6152; margin-top: 4px; line-height: 1.4;">
            ${i?"하단 + 버튼을 눌러 첫 몸무게를 기록해보세요.":"Tap the orange + button below to log your pet’s weight."}
          </div>
        </div>
      `;const s=o.map(M=>{var O;const Z=new Date(M.timestamp),W=Z.toLocaleDateString([],{month:"short"}),st=Z.getFullYear().toString().slice(-2);return{weight:Number(((O=M.metadata)==null?void 0:O.weightKg)||parseFloat(M.notes||"0")||0),dateLabel:`${W} '${st}`}}),r=s.map(M=>M.weight),l=Math.min(...r),u=Math.max(...r)-l||1,f=320,v=110,w=22,_=v-w-24,T=s.map((M,Z)=>{const W=s.length===1?f/2:16+Z/(s.length-1)*(f-32),st=s.length===1?w+_/2:w+_-(M.weight-l)/u*_;return{x:W,y:st,...M}}),$=T.map((M,Z)=>`${Z===0?"M":"L"} ${M.x.toFixed(1)} ${M.y.toFixed(1)}`).join(" "),S=T[T.length-1],D=S.weight-T[0].weight;return b`
      <div class="weight-stat-row">
        <div>
          <span class="weight-current-val">${S.weight.toFixed(1)} kg</span>
          ${T.length>1?b`
                <span style="font-size: 11px; font-weight: 800; color: ${D>=0?"#1FC99B":"#FF5A3C"}; margin-left: 6px;">
                  ${D>=0?"+":""}${D.toFixed(1)} kg
                </span>
              `:null}
        </div>
        <div class="weight-current-date">
          ${i?`최근 측정: ${S.dateLabel}`:`Latest: ${S.dateLabel}`}
        </div>
      </div>

      <div style="height: 110px; width: 100%; position: relative;">
        <svg viewBox="0 0 ${f} ${v}" style="width: 100%; height: 100%; overflow: visible;">
          <!-- Grid lines -->
          <line x1="12" y1="${w+_}" x2="${f-12}" y2="${w+_}" stroke="#E8DFCE" stroke-width="1.5" stroke-dasharray="4,4" />
          <line x1="12" y1="${w}" x2="${f-12}" y2="${w}" stroke="#E8DFCE" stroke-width="1.5" stroke-dasharray="4,4" />

          <!-- Path -->
          ${T.length>1?b`<path d="${$}" fill="none" stroke="#17140F" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round" />`:null}

          <!-- Data Points with Actual Weights -->
          ${T.map((M,Z)=>{const W=Z===T.length-1;return b`
              <circle
                cx="${M.x}"
                cy="${M.y}"
                r="${W?6:4.5}"
                fill="${W?"#FF5A3C":"#FFCE2E"}"
                stroke="#17140F"
                stroke-width="2.5"
              />
              <rect
                x="${M.x-17}"
                y="${M.y-19}"
                width="34"
                height="14"
                rx="4"
                fill="#17140F"
              />
              <text
                x="${M.x}"
                y="${M.y-9}"
                font-size="8.5"
                font-weight="800"
                font-family="sans-serif"
                fill="#FFFFFF"
                text-anchor="middle"
              >
                ${M.weight.toFixed(1)}k
              </text>
            `})}
        </svg>
      </div>

      <div style="display: flex; justify-content: space-between; margin-top: 6px; font-size: 9.5px; font-weight: 800; color: #8A7F68; letter-spacing: 0.5px;">
        ${T.map(M=>b`<span>${M.dateLabel}</span>`)}
      </div>
    `}render(){var O,V,at;const i=g.currentLocale==="ko",o=g.currentPet,s=(o==null?void 0:o.name)||(i?"반려견":"My Pet");let r="";if(o!=null&&o.birthday){const A=new Date(o.birthday),k=new Date;if(!isNaN(A.getTime())){const R=(k.getFullYear()-A.getFullYear())*12+(k.getMonth()-A.getMonth());if(R>=12){const U=Math.floor(R/12);r=i?`${U}살`:`${U} yr${U>1?"s":""}`}else R>0?r=i?`${R}개월`:`${R} mo${R>1?"s":""}`:r=i?"신생":"puppy"}}r||(r=i?"5살":"5 yrs");const l=(g.events||[]).filter(A=>{var k;return A.eventType==="weight"&&(((k=A.metadata)==null?void 0:k.weightKg)||A.notes)}).sort((A,k)=>new Date(k.timestamp).getTime()-new Date(A.timestamp).getTime());let c=14.2;if(l.length>0){const A=l.find(k=>{var U;return Number(((U=k.metadata)==null?void 0:U.weightKg)||parseFloat(k.notes||"0")||0)>0});A&&(c=Number(((O=A.metadata)==null?void 0:O.weightKg)||parseFloat(A.notes||"0")||14.2))}const u=i?`${c.toFixed(1)}kg`:`${c.toFixed(1)} kg`,v=`${(o==null?void 0:o.breed)||(i?"비글 믹스":"Beagle mix")} · ${r} · ${u}`,w=new Date;w.setMonth(w.getMonth()-6);const x=(g.events||[]).filter(A=>A.eventType!=="medicine"?!1:new Date(A.timestamp)>=w).sort((A,k)=>new Date(k.timestamp).getTime()-new Date(A.timestamp).getTime()),_=[],T=new Set;for(const A of x){const k=(((V=A.metadata)==null?void 0:V.medication)||A.notes||"").trim().toLowerCase(),R=Math.floor(new Date(A.timestamp).getTime()/(600*1e3)),U=`${k}_${R}`;T.has(U)||(T.add(U),_.push(A))}const $=[{id:"def-med-1",title:"Apoquel",sub:`16 mg with food · ${i?"기록자":"Logged by"} Sam`,dateStr:"24 Aug 2026, 8:05 am"},{id:"def-med-2",title:"Joint chew",sub:`1 chew, evening · ${i?"기록자":"Logged by"} Sam`,dateStr:"24 Aug 2026, 6:15 pm"},{id:"def-med-3",title:"Flea & tick prevention",sub:`Topical treatment · ${i?"기록자":"Logged by"} Sam`,dateStr:"18 Aug 2026, 10:00 am"}],S=_.length>0?_.map(A=>{var it,Dt;const k=new Date(A.timestamp),R=`${k.toLocaleDateString([],{day:"numeric",month:"short",year:"numeric"})}, ${k.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}).toLowerCase()}`,U=((it=A.metadata)==null?void 0:it.medication)||A.notes||(i?"약/영양제":"Medicine"),C=[];(Dt=A.metadata)!=null&&Dt.dosage&&C.push(A.metadata.dosage),A.notes&&A.notes.trim().toLowerCase()!==U.trim().toLowerCase()&&C.push(A.notes.trim()),A.loggedByName&&C.push(`${i?"기록자":"Logged by"} ${A.loggedByName}`);const et=C.join(" · ");return{id:A.id,title:U,sub:et,dateStr:R}}):$,D=(g.events||[]).filter(A=>A.eventType==="vet").sort((A,k)=>new Date(k.timestamp).getTime()-new Date(A.timestamp).getTime()),M=[{date:"12 Jun 2024",title:"Annual check-up",note:"Weight up 0.4 kg. Teeth good. Apoquel renewed."},{date:"03 Aug 2025",title:"Loose stool consult",note:"Likely new treat brand. Bland diet 5 days."},{date:"19 Aug 2026",title:"Follow-up call",note:"Resolved. Back to normal food."}],Z=D.length>0?D.map(A=>({date:new Date(A.timestamp).toLocaleDateString([],{day:"numeric",month:"short",year:"numeric"}),title:A.notes||(i?"정기 진료":"Vet Consultation"),note:`${i?"기록자":"Logged by"}: ${A.loggedByName}`})):M,W=o==null?void 0:o.avatarUrl,st=(((at=g.currentUser)==null?void 0:at.displayName)||"S").charAt(0).toUpperCase();return b`
      <!-- Top Navigation Bar -->
      <div class="top-bar-row">
        <div class="back-btn" @click=${()=>g.setActiveTab("today")}>
          <span>‹</span>
          <span>${i?"오늘":"Today"}</span>
        </div>
        <div style="flex: 1;"></div>
        <div class="pet-switch-pill" @click=${()=>g.openPetSwitcher()}>
          <div class="pet-dot-avatar">${s.charAt(0).toUpperCase()}</div>
          <span style="font-size: 12.5px; font-weight: 800; color: #17140F;">${s}</span>
          ${g.pets.length>1?b`<span style="font-size: 9px; color: #17140F; margin-left: 2px;">▼</span>`:null}
        </div>
        <div class="user-gear-btn" @click=${()=>g.setActiveTab("settings")}>
          ${st}
        </div>
      </div>

      <!-- Pet Hero Card -->
      <div class="dog-hero-card">

        <div
          class="dog-avatar-wrapper"
          @click=${()=>g.openPhotoModal({target:"pet",targetId:o==null?void 0:o.id,currentAvatar:W,title:i?`${s} 사진 변경`:`Change ${s}'s Photo`})}
        >
          <div class="dog-pic-avatar">
            ${W?b`<img src="${W}" class="dog-pic-img" alt="${s}" />`:b`<div>${i?`반려견
사진`:`pet
pic`}</div>`}
          </div>
          <div class="avatar-edit-badge">📷</div>
        </div>
        <div style="flex: 1; min-width: 0;">
          <div class="dog-name">${s}</div>
          <div class="dog-details">
            ${v}
          </div>
          <div class="good-badge">${i?"모두 양호":"ALL GOOD"}</div>
        </div>
      </div>

      <!-- Weight Card (With Actual Weights & Dates) -->
      <div class="card-block">
        <div class="card-header">
          <div class="card-title">${i?"체중 변화":"Weight"}</div>
          <div class="card-badge">${i?"최근 12개월":"12 MONTHS"}</div>
        </div>
        ${this.renderWeightChart(i)}
      </div>

      <!-- Medications Log (History with Checked Status by Default) -->
      <div class="card-block">
        <div class="card-header">
          <div class="card-title">${i?"투약 및 영양제 기록":"Pills & Supplements"}</div>
          <div class="card-badge">${S.length} ${i?"건":"LOGGED"}</div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 11px;">
          ${S.map(A=>{const k=!this.uncheckState[A.id];return b`
              <div class="med-row">
                <div
                  class="med-check"
                  style="background: ${k?"#1FC99B":"#FFF"};"
                  @click=${()=>this.toggleMedChecked(A.id)}
                  title="${k?"Marked as completed":"Click to check"}"
                >
                  ${k?"✓":""}
                </div>
                <div style="flex: 1; min-width: 0;">
                  <div style="font-size: 14px; font-weight: 800; color: #17140F;">
                    ${A.title}
                  </div>
                  ${A.sub?b`<div style="font-size: 11.5px; font-weight: 600; color: #6A6152; margin-top: 1px;">${A.sub}</div>`:null}
                </div>
                <div style="font-size: 11px; font-weight: 800; color: #9A9080; flex: none; text-align: right;">
                  ${A.dateStr}
                </div>
              </div>
            `})}
        </div>
      </div>

      <!-- Vet History (With Explicit Year in Dates) -->
      <div class="card-block">
        <div class="card-header">
          <div class="card-title">${i?"병원 진료 내역":"Vet history"}</div>
          <div class="card-badge">${Z.length} ${i?"회":"VISITS"}</div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          ${Z.map(A=>b`
              <div class="vet-item">
                <div class="vet-date">${A.date}</div>
                <div class="vet-body">
                  <div style="font-size: 13.5px; font-weight: 800; color: #17140F;">
                    ${A.title}
                  </div>
                  <div style="font-size: 11.5px; font-weight: 600; color: #6A6152; line-height: 1.45; margin-top: 2px;">
                    ${A.note}
                  </div>
                </div>
              </div>
            `)}
        </div>
      </div>

      <!-- Export Button -->
      <div
        class="export-btn"
        @click=${()=>this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:i?"요약 준비 완료":"Summary ready",sub:i?"기록 데이터가 준비되었습니다.":"Health logs ready."}}))}
      >
        ${i?"건강 요약 내보내기":"Export health summary"}
      </div>
    `}},Ke.styles=zt`
    :host {
      display: block;
      padding: 58px 18px 140px;
      box-sizing: border-box;
      animation: tb-screen 0.24s cubic-bezier(0.23, 1, 0.32, 1) both;
    }

    .top-bar-row {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 14px;
    }

    .back-btn {
      display: flex;
      align-items: center;
      gap: 5px;
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 17px;
      padding: 8px 14px;
      font-size: 13px;
      font-weight: 800;
      color: #17140F;
      cursor: pointer;
      box-shadow: 3px 3px 0 #17140F;
      user-select: none;
      transition: transform 0.13s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.13s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .back-btn:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .pet-switch-pill {
      display: flex;
      align-items: center;
      gap: 6px;
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 17px;
      padding: 5px 10px 5px 5px;
      cursor: pointer;
      box-shadow: 3px 3px 0 #17140F;
      user-select: none;
      transition: transform 0.13s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.13s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .pet-switch-pill:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .pet-dot-avatar {
      width: 26px;
      height: 26px;
      border-radius: 50%;
      border: 2px solid #17140F;
      background: #FFCE2E;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 11px;
      color: #17140F;
    }

    .user-gear-btn {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 3px solid #17140F;
      background: #FFCE2E;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 3px 3px 0 #17140F;
      flex: none;
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 16px;
      color: #17140F;
      user-select: none;
      transition: transform 0.13s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.13s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .user-gear-btn:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .dog-hero-card {
      background: #FFCE2E;
      border: 3px solid #17140F;
      border-radius: 24px;
      padding: 17px;
      box-shadow: 5px 5px 0 #17140F;
      display: flex;
      gap: 14px;
      align-items: center;
      margin-bottom: 14px;
    }


    .dog-avatar-wrapper {
      position: relative;
      cursor: pointer;
      flex: none;
      transition: transform 0.12s;
    }

    .dog-avatar-wrapper:active {
      transform: scale(0.96);
    }

    .dog-pic-avatar {
      width: 74px;
      height: 74px;
      border-radius: 50%;
      border: 3px solid #17140F;
      box-shadow: 2px 2px 0 #17140F;
      background: #FFFFFF;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
      font-weight: 800;
      color: #8A7F68;
      text-align: center;
      line-height: 1.2;
    }

    .dog-pic-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .avatar-edit-badge {
      position: absolute;
      bottom: -2px;
      right: -2px;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: #FF5A3C;
      color: #FFFFFF;
      border: 2px solid #17140F;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 11px;
      box-shadow: 1.5px 1.5px 0 #17140F;
    }

    .dog-name {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 25px;
      color: #17140F;
      letter-spacing: -0.8px;
      line-height: 1.1;
    }

    .dog-details {
      font-size: 12px;
      font-weight: 700;
      color: #7A5C00;
      margin-top: 2px;
    }

    .good-badge {
      display: inline-flex;
      margin-top: 7px;
      align-items: center;
      gap: 6px;
      background: #1FC99B;
      border: 2.5px solid #17140F;
      border-radius: 10px;
      padding: 3px 9px;
      font-size: 10.5px;
      font-weight: 800;
      color: #17140F;
    }

    .card-block {
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 22px;
      padding: 15px;
      box-shadow: 4px 4px 0 #17140F;
      margin-bottom: 14px;
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 12px;
    }

    .card-title {
      font-size: 15px;
      font-weight: 800;
      color: #17140F;
    }

    .card-badge {
      font-size: 10.5px;
      font-weight: 800;
      color: #9A9080;
      letter-spacing: 0.6px;
    }

    /* Checklist */
    .med-row {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 11px;
    }

    .med-check {
      width: 28px;
      height: 28px;
      border-radius: 10px;
      flex: none;
      border: 2.5px solid #17140F;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 15px;
      font-weight: 800;
      color: #17140F;
    }

    /* Vet Timeline */
    .vet-item {
      display: flex;
      gap: 12px;
      margin-bottom: 14px;
    }

    .vet-date {
      font-size: 11.5px;
      font-weight: 800;
      color: #7A6F5D;
      width: 80px;
      flex: none;
      padding-top: 2px;
    }

    .vet-body {
      flex: 1;
      min-width: 0;
      border-left: 3px solid #FFCE2E;
      padding-left: 12px;
    }

    .weight-stat-row {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      margin-bottom: 12px;
    }

    .weight-current-val {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 32px;
      color: #17140F;
      letter-spacing: -1px;
      line-height: 1;
    }

    .weight-current-date {
      font-size: 12px;
      font-weight: 700;
      color: #6A6152;
    }

    .export-btn {
      background: #2B5BE8;
      border: 3px solid #17140F;
      border-radius: 20px;
      padding: 15px;
      text-align: center;
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 17px;
      color: #FFF;
      cursor: pointer;
      box-shadow: 4px 4px 0 #17140F;
      transition: transform 0.1s ease, box-shadow 0.1s ease;
    }

    .export-btn:hover {
      transform: translate(-1px, -1px);
      box-shadow: 6px 6px 0 #17140F;
    }
  `,Ke);Fn([z()],go.prototype,"medDone",void 0);Fn([z()],go.prototype,"uncheckState",void 0);go=Fn([At("dooty-dog")],go);var Dl=function(h,i,o,s){var r=arguments.length,l=r<3?i:s===null?s=Object.getOwnPropertyDescriptor(i,o):s,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,i,o,s);else for(var u=h.length-1;u>=0;u--)(c=h[u])&&(l=(r<3?c(l):r>3?c(i,o,l):c(i,o))||l);return r>3&&l&&Object.defineProperty(i,o,l),l},Ve;let Ws=(Ve=class extends yt{constructor(){super(...arguments),this.distNames=["Pellets","Lumpy","Cracked","Textbook","Soft blobs","Mushy","Liquid"],this.distCol=["#E3D8BE","#E3D8BE","#FFE9A8","#1FC99B","#FFCE2E","#FF9A3C","#FF5A3C"]}render(){const i=g.currentLocale==="ko",o=g.events||[],s=o.length,r=new Date(Date.now()-336*60*60*1e3),l=o.filter(_=>_.eventType==="poop"&&new Date(_.timestamp)>=r),c=[0,0,0,0,0,0,0];l.forEach(_=>{const T=(_.notes||"").match(/Type\s*([1-7])/i)||(_.notes||"").match(/([1-7])/);if(T){const $=parseInt(T[1],10);$>=1&&$<=7&&c[$-1]++}else c[3]++});const u=c.reduce((_,T)=>_+T,0),f=c.map(_=>u>0?Math.round(_/u*100):0),v=c[3],w=u>0?Math.round(v/u*100):s>0?100:0,x=o.filter(_=>(_.eventType==="vomit"||(_.notes||"").toLowerCase().includes("loose")||(_.notes||"").toLowerCase().includes("diarrhea"))&&new Date(_.timestamp)>=r);return b`
      <div
        class="back-btn"
        @click=${()=>this.dispatchEvent(new CustomEvent("dooty-navigate",{bubbles:!0,composed:!0,detail:"analytics"}))}
      >
        ‹ ${i?"숫자들":"Numbers"}
      </div>

      <div>
        <div class="section-tag">${i?"심층 분석":"Deep dive"}</div>
        <div class="page-title">${i?"장 건강 점수":"Gut score"}</div>
        <div class="page-sub">
          ${i?"형태, 빈도, 시간대를 종합한 14일 롤링 점수입니다.":"A rolling 14-day read on consistency, frequency and timing."}
        </div>
      </div>

      <!-- 14-Day Score Chart Card -->
      <div class="card-block">
        <div class="score-row">
          <div class="score-num">${s>0?w:"-"}</div>
          <div class="score-trend">${s>0?i?"14일 분석":"14-day rolling":i?"기록 대기 중":"No logs yet"}</div>
        </div>
        <div style="font-size: 12.5px; font-weight: 600; color: #6A6152;">
          ${u>0?i?`최근 14일 동안 ${u}건의 배변이 분석되었습니다.`:`${u} potty logs analyzed over the last 14 days.`:i?"배변을 기록하면 이상적인 형태(4단계) 비율이 산출됩니다.":"Log potty events to calculate consistency quality rating."}
        </div>
      </div>

      <!-- Consistency Spread -->
      <div class="card-block">
        <div style="font-size: 15px; font-weight: 800; color: #17140F;">
          ${i?"형태별 분포":"Consistency spread"}
        </div>
        <div style="font-size: 11.5px; font-weight: 600; color: #6A6152; margin: 2px 0 13px;">
          ${i?"7단계 척도. 4단계가 완벽한 이상형입니다.":"Seven-point scale. Four is textbook."}
        </div>
        <div>
          ${this.distNames.map((_,T)=>{const $=f[T],S=this.distCol[T];return b`
              <div class="spread-row">
                <div class="spread-num" style="background: ${S};">${T+1}</div>
                <div style="width: 66px; font-size: 11.5px; font-weight: 700; color: #6A6152; flex: none;">
                  ${_}
                </div>
                <div class="spread-track">
                  <div style="height: 100%; background: ${S}; width: ${Math.max($>0?4:0,$)}%;"></div>
                </div>
                <div style="width: 32px; text-align: right; font-size: 11px; font-weight: 800; color: #6A6152; flex: none;">
                  ${$}%
                </div>
              </div>
            `})}
        </div>
      </div>

      <!-- Flagged Warning Card / Health Status -->
      ${x.length>0?b`
            <div class="flag-card">
              <div style="display: flex; align-items: center; gap: 8px;">
                <div
                  style="width: 22px; height: 22px; border-radius: 50%; border: 2.5px solid #17140F; background: #FF5A3C; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 800; color: #FFF;"
                >
                  !
                </div>
                <div style="font-size: 15px; font-weight: 800; color: #17140F;">
                  ${i?`주의 감지: 최근 ${x.length}건 이상 반응`:`Flagged: ${x.length} symptom events`}
                </div>
              </div>
              <div style="font-size: 12.5px; font-weight: 600; color: #7A3325; line-height: 1.5; margin-top: 8px;">
                ${x.map(_=>`${new Date(_.timestamp).toLocaleDateString()}: ${_.notes||_.eventType}`).join(" · ")}
              </div>
              <div
                class="flag-send-btn"
                @click=${()=>this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:i?"기록 준비 완료":"Summary ready",sub:i?"수의사 공유용 데이터가 생성되었습니다.":"Packaged for vet consultation."}}))}
              >
                ${i?"기록 수의사에게 내보내기":"Export health records for vet"}
              </div>
            </div>
          `:b`
            <div class="card-block" style="background: #EAF8F1;">
              <div style="display: flex; align-items: center; gap: 8px;">
                <div
                  style="width: 22px; height: 22px; border-radius: 50%; border: 2px solid #17140F; background: #1FC99B; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 800; color: #17140F;"
                >
                  ✓
                </div>
                <div style="font-size: 14px; font-weight: 800; color: #0A5A45;">
                  ${i?"이상 징후 없음":"No issues detected"}
                </div>
              </div>
              <div style="font-size: 12px; font-weight: 600; color: #0A5A45; margin-top: 4px;">
                ${i?"최근 14일 동안 등록된 구토나 소화 이상 기록이 없습니다.":"No vomiting or digestive symptoms reported in the last 14 days."}
              </div>
            </div>
          `}
    `}},Ve.styles=zt`
    :host {
      display: block;
      padding: 52px 18px 140px;
      box-sizing: border-box;
    }

    .back-btn {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 14px;
      padding: 8px 13px;
      font-size: 12.5px;
      font-weight: 800;
      color: #17140F;
      cursor: pointer;
      width: fit-content;
      box-shadow: 3px 3px 0 #17140F;
      margin-bottom: 14px;
    }

    .section-tag {
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 1.8px;
      color: #9A9080;
      text-transform: uppercase;
    }

    .page-title {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 29px;
      color: #17140F;
      letter-spacing: -1px;
      line-height: 1.1;
      margin-top: 2px;
    }

    .page-sub {
      font-size: 12.5px;
      font-weight: 600;
      color: #6A6152;
      margin-top: 4px;
      line-height: 1.45;
      margin-bottom: 14px;
    }

    .card-block {
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 22px;
      padding: 15px;
      box-shadow: 4px 4px 0 #17140F;
      margin-bottom: 14px;
    }

    .score-row {
      display: flex;
      align-items: baseline;
      gap: 10px;
      margin-bottom: 12px;
    }

    .score-num {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 36px;
      color: #17140F;
      line-height: 1;
      letter-spacing: -1.4px;
    }

    .score-trend {
      font-size: 12px;
      font-weight: 800;
      color: #1FC99B;
    }

    .spread-row {
      display: flex;
      align-items: center;
      gap: 9px;
      margin-bottom: 9px;
    }

    .spread-num {
      width: 24px;
      height: 24px;
      border-radius: 8px;
      flex: none;
      border: 2.5px solid #17140F;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 11px;
      font-weight: 800;
      color: #17140F;
    }

    .spread-track {
      flex: 1;
      height: 12px;
      border-radius: 12px;
      border: 2px solid #17140F;
      background: #FFF9E9;
      overflow: hidden;
      box-sizing: border-box;
    }

    .flag-card {
      background: #FFE3DC;
      border: 3px solid #17140F;
      border-radius: 22px;
      padding: 16px;
      box-shadow: 4px 4px 0 #17140F;
    }

    .flag-send-btn {
      margin-top: 12px;
      background: #FFF;
      border: 2.5px solid #17140F;
      border-radius: 14px;
      padding: 11px;
      text-align: center;
      font-size: 13px;
      font-weight: 800;
      color: #17140F;
      cursor: pointer;
      box-shadow: 3px 3px 0 #17140F;
    }
  `,Ve);Ws=Dl([At("dooty-deep")],Ws);var Bl=function(h,i,o,s){var r=arguments.length,l=r<3?i:s===null?s=Object.getOwnPropertyDescriptor(i,o):s,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,i,o,s);else for(var u=h.length-1;u>=0;u--)(c=h[u])&&(l=(r<3?c(l):r>3?c(i,o,l):c(i,o))||l);return r>3&&l&&Object.defineProperty(i,o,l),l},Ye;let Us=(Ye=class extends yt{render(){var T;const i=g.currentLocale==="ko",o=g.events||[],s=o.length;(T=g.currentPet)!=null&&T.id;const r=o.filter($=>$.eventType==="poop"),l=o.filter($=>$.eventType==="walk"),c=Array(24).fill(0);o.forEach($=>{const S=new Date($.timestamp);isNaN(S.getTime())||c[S.getHours()]++});let u=7,f=0;c.forEach(($,S)=>{$>f&&(f=$,u=S)});const v=f>0?`${u>12?u-12:u||12}:00 ${u>=12?"pm":"am"}`:i?"기록 없음":"No data yet",w=new Set;o.forEach($=>{const S=new Date($.timestamp);isNaN(S.getTime())||w.add(`${S.getFullYear()}-${S.getMonth()+1}-${S.getDate()}`)});const x=w.size,_=[{k:i?"총 배출량":"Total output",v:i?`${r.length}회`:`${r.length} poops`,sub:i?`총 ${s}건의 이벤트가 등록되었습니다.`:`${s} total logged events recorded so far.`,bg:"#FFCE2E",fg:"#17140F",label:"#7A5C00",shadow:"#FF5A3C",rot:"-1.2deg"},{k:i?"황금 시간대":"Your golden hour",v,sub:i?"가장 많은 활동이 기록된 주요 시간대입니다.":"Most frequent hour of daily activity.",bg:"#FFFBF2",fg:"#17140F",label:"#6A6152",shadow:"#2B5BE8",rot:"0.9deg"},{k:i?"산책 세션":"Walk sessions",v:i?`${l.length}회`:`${l.length} walks`,sub:i?"반려견과 함께한 야외 산책 기록입니다.":"Outdoor exercise recorded with your pet.",bg:"#1FC99B",fg:"#17140F",label:"#0A5A45",shadow:"#FFCE2E",rot:"-0.7deg"},{k:i?"돌봄 기록 일수":"Days active",v:i?`${x}일`:`${x} days`,sub:i?"반려견의 건강한 일상을 함께 기록한 날들입니다.":"Days dedicated to tracking your pet’s wellbeing.",bg:"#FF5A3C",fg:"#FFF",label:"#FFE3DC",shadow:"#FFCE2E",rot:"1.1deg"}];return b`
      <div
        class="back-btn"
        @click=${()=>this.dispatchEvent(new CustomEvent("dooty-navigate",{bubbles:!0,composed:!0,detail:"today"}))}
      >
        ‹ ${i?"오늘":"Today"}
      </div>

      <div>
        <div class="wrapped-header-tag">
          ${i?"Dooty 연말 결산":"Dooty Wrapped"}
        </div>
        <div class="wrapped-main-title">
          ${i?`2026년,
지금까지`:`2026,
so far`}
        </div>
      </div>

      <div class="cards-col">
        ${_.map($=>b`
            <div
              class="wrapped-stat-card"
              style="background: ${$.bg}; box-shadow: 4px 4px 0 ${$.shadow}; transform: rotate(${$.rot});"
            >
              <div class="stat-label" style="color: ${$.label};">${$.k}</div>
              <div class="stat-val" style="color: ${$.fg};">${$.v}</div>
              <div class="stat-sub" style="color: ${$.label};">${$.sub}</div>
            </div>
          `)}
      </div>

      <div
        class="share-btn"
        @click=${()=>this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:"Card ready to share",sub:"Saved to photos."}}))}
      >
        ${i?"카드 공유하기":"Share the card"}
      </div>
    `}},Ye.styles=zt`
    :host {
      display: block;
      min-height: 100vh;
      background: #17140F;
      padding: 52px 18px 40px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .back-btn {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      background: #FFCE2E;
      border: 3px solid #FFCE2E;
      border-radius: 14px;
      padding: 8px 13px;
      font-size: 12.5px;
      font-weight: 800;
      color: #17140F;
      cursor: pointer;
      width: fit-content;
    }

    .wrapped-header-tag {
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 2.4px;
      color: #FF5A3C;
      text-transform: uppercase;
    }

    .wrapped-main-title {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 52px;
      line-height: 0.95;
      color: #FFFBF2;
      margin-top: 5px;
      letter-spacing: -2.5px;
    }

    .cards-col {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-top: 6px;
    }

    .wrapped-stat-card {
      border: 3px solid #17140F;
      border-radius: 22px;
      padding: 17px 18px;
    }

    .stat-label {
      font-size: 10px;
      font-weight: 800;
      letter-spacing: 1.8px;
      text-transform: uppercase;
    }

    .stat-val {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 32px;
      line-height: 1.05;
      margin-top: 4px;
      letter-spacing: -1.2px;
    }

    .stat-sub {
      font-size: 12.5px;
      font-weight: 600;
      line-height: 1.45;
      margin-top: 5px;
    }

    .share-btn {
      background: #FF5A3C;
      border: 3px solid #FFFBF2;
      border-radius: 20px;
      padding: 16px;
      text-align: center;
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 18px;
      color: #FFF;
      cursor: pointer;
      margin-top: 8px;
    }
  `,Ye);Us=Bl([At("dooty-wrapped")],Us);var Nl=function(h,i,o,s){var r=arguments.length,l=r<3?i:s===null?s=Object.getOwnPropertyDescriptor(i,o):s,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,i,o,s);else for(var u=h.length-1;u>=0;u--)(c=h[u])&&(l=(r<3?c(l):r>3?c(i,o,l):c(i,o))||l);return r>3&&l&&Object.defineProperty(i,o,l),l},Je;let Zs=(Je=class extends yt{connectedCallback(){super.connectedCallback(),this.unsubscribe=g.subscribe(()=>this.requestUpdate())}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.unsubscribe)==null||i.call(this)}setLanguage(i){g.setLocale(i),i==="ko"?document.body.classList.add("lang-ko"):document.body.classList.remove("lang-ko")}handleExportCsv(){g.t.settings,g.exportEventsCsv(),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:g.currentLocale==="ko"?"CSV 내보내기 완료":"CSV Export Complete",sub:g.currentLocale==="ko"?"모든 기록이 다운로드되었습니다.":"All event logs saved to your device."}}))}handleSignOut(){g.signOut(),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:g.currentLocale==="ko"?"로그아웃되었습니다":"Signed out",sub:g.currentLocale==="ko"?"다음에 또 만나요!":"See you on the next walk!"}}))}render(){var v,w;const i=g.currentLocale==="ko",o=g.t.settings,s=g.currentUser,r=g.currentHousehold,l=(r==null?void 0:r.members)||[{id:"1",displayName:(s==null?void 0:s.displayName)||"Sam (you)",role:"owner",avatarUrl:g.userAvatar},{id:"2",displayName:"Priya",role:"member",avatarUrl:""},{id:"3",displayName:"Dan the walker",role:"member",avatarUrl:""}],c=((v=g.pets)==null?void 0:v.length)>0?g.pets:g.currentPet?[g.currentPet]:[{id:"p1",name:"Nacho",breed:"Beagle mix · 5 yrs · 14.2 kg",species:"dog",householdId:(r==null?void 0:r.id)||"1",avatarUrl:"",birthday:"",createdAt:new Date().toISOString()}],u=((w=g.events)==null?void 0:w.length)||1204,f=((s==null?void 0:s.displayName)||"Sam").split(" ").map(x=>x[0]).join("").toUpperCase().slice(0,2);return b`
      <div class="settings-container">
        <!-- Back button -->
        <div class="back-btn" @click=${()=>g.setActiveTab("today")}>
          ‹ ${o.back}
        </div>

        <!-- Page Title -->
        <div class="page-title">${o.title}</div>

        <!-- User Profile Card -->
        <div class="user-card">
          <div
            class="user-avatar"
            @click=${()=>g.openPhotoModal({target:"user",currentAvatar:g.userAvatar,title:"Pick Profile Photo"})}
          >
            ${g.userAvatar?b`<img src="${g.userAvatar}" alt="User Avatar" />`:b`${f}`}
          </div>
          <div style="flex: 1; min-width: 0;">
            <div style="font-size: 14px; font-weight: 800; color: #17140F;">
              ${(s==null?void 0:s.email)||"sam@jellyfish.dog"}
            </div>
            <div style="font-size: 11.5px; font-weight: 600; color: #6A6152; margin-top: 1px;">
              ${o.signedInPlan}
            </div>
          </div>
        </div>

        <!-- Language Selector -->
        <div>
          <div class="section-label">${o.language}</div>
          <div class="lang-row">
            <div
              class="lang-btn ${i?"":"active"}"
              @click=${()=>this.setLanguage("en")}
            >
              <div class="lang-dot"></div>
              ${o.english}
            </div>
            <div
              class="lang-btn ${i?"active":""}"
              @click=${()=>this.setLanguage("ko")}
            >
              <div class="lang-dot"></div>
              ${o.korean}
            </div>
          </div>
        </div>

        <!-- Analytics Timeframe Preference -->
        <div>
          <div class="section-label">${i?"기본 분석 기간":"Default Analytics Range"}</div>
          <div class="lang-row">
            <div
              class="lang-btn ${g.analyticsTimeRange==="7d"?"active":""}"
              @click=${()=>g.setAnalyticsTimeRange("7d")}
            >
              7D
            </div>
            <div
              class="lang-btn ${g.analyticsTimeRange==="30d"?"active":""}"
              @click=${()=>g.setAnalyticsTimeRange("30d")}
            >
              30D
            </div>
            <div
              class="lang-btn ${g.analyticsTimeRange==="1y"?"active":""}"
              @click=${()=>g.setAnalyticsTimeRange("1y")}
            >
              1Y
            </div>
            <div
              class="lang-btn ${g.analyticsTimeRange==="all"?"active":""}"
              @click=${()=>g.setAnalyticsTimeRange("all")}
            >
              ${i?"전체":"ALL"}
            </div>
          </div>
        </div>

        <!-- Household Banner Card -->
        <div class="household-card">
          <div class="house-icon-badge">
            <div class="house-roof"></div>
            <div class="house-door"></div>
          </div>
          <div style="flex: 1; min-width: 0;">
            <div style="font-size: 10px; font-weight: 800; letter-spacing: 1.4px; color: #7A5C00; text-transform: uppercase;">
              ${o.household}
            </div>
            <div style="font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif); font-weight: 800; font-size: 20px; color: #17140F; letter-spacing: -0.6px; line-height: 1.15; margin-top: 1px;">
              ${(r==null?void 0:r.name)||"The Nacho Household"}
            </div>
            <div style="font-size: 11.5px; font-weight: 700; color: #7A5C00; margin-top: 1px;">
              ${o.householdCount(l.length,c.length)}
            </div>
          </div>
          <div
            class="btn-invite-badge"
            @click=${()=>g.setActiveTab("invite")}
          >
            ${o.invite}
          </div>
        </div>

        <!-- People Section -->
        <div>
          <div class="section-label">${o.people}</div>
          <div class="card-block">
            ${l.map((x,_)=>{const T=["#FFCE2E","#1FC99B","#BFD0FF","#FF9A3C"],$=(x.displayName||"Member")[0].toUpperCase(),S=Math.round(_===0?u*.75:u*.2);return b`
                <div class="list-row">
                  <div
                    class="member-avatar"
                    style="background: ${T[_%T.length]};"
                    @click=${()=>g.openPhotoModal({target:"member",targetId:x.id,currentAvatar:x.avatarUrl,title:`Pick Photo for ${x.displayName}`})}
                  >
                    ${x.avatarUrl?b`<img src="${x.avatarUrl}" alt="Avatar" />`:b`${$}`}
                  </div>
                  <div style="flex: 1; min-width: 0;">
                    <div style="font-size: 13.5px; font-weight: 800; color: #17140F;">
                      ${x.displayName}
                    </div>
                    <div style="font-size: 11.5px; font-weight: 600; color: #6A6152;">
                      ${x.role==="owner"?i?"소유자":"Owner":i?"가족 구성원":"Household"}
                    </div>
                  </div>
                  <div style="font-size: 11.5px; font-weight: 800; color: #9A9080; flex: none;">
                    ${S} ${o.logsUnit}
                  </div>
                </div>
              `})}
            <div
              class="add-action-link"
              @click=${()=>g.setActiveTab("invite")}
            >
              ${o.inviteSomeone}
            </div>
          </div>
        </div>

        <!-- Pets Section -->
        <div>
          <div class="section-label">${o.pets}</div>
          <div class="card-block">
            ${c.map(x=>b`
              <div
                class="list-row"
                style="cursor: pointer;"
                @click=${()=>g.setActiveTab("dog")}
              >
                <div
                  class="pet-avatar-circle"
                  @click=${_=>{_.stopPropagation(),g.openPhotoModal({target:"pet",targetId:x.id,currentAvatar:x.avatarUrl,title:`Pick Photo for ${x.name}`})}}
                >
                  ${x.avatarUrl?b`<img src="${x.avatarUrl}" alt="${x.name}" />`:b`dog<br />pic`}
                </div>
                <div style="flex: 1; min-width: 0;">
                  <div style="font-size: 13.5px; font-weight: 800; color: #17140F;">
                    ${x.name}
                  </div>
                  <div style="font-size: 11.5px; font-weight: 600; color: #6A6152;">
                    ${(()=>{var M;if(x.breed&&x.breed.includes("·"))return x.breed;let _="";if(x.birthday){const Z=new Date(x.birthday),W=new Date;if(!isNaN(Z.getTime())){const st=(W.getFullYear()-Z.getFullYear())*12+(W.getMonth()-Z.getMonth());if(st>=12){const O=Math.floor(st/12);_=i?`${O}살`:`${O} yr${O>1?"s":""}`}else st>0&&(_=i?`${st}개월`:`${st} mo${st>1?"s":""}`)}}_||(_=i?"5살":"5 yrs");const T=x.breed||(i?"비글 믹스":"Beagle mix"),$=(g.events||[]).filter(Z=>{var W;return Z.eventType==="weight"&&(((W=Z.metadata)==null?void 0:W.weightKg)||Z.notes)}).sort((Z,W)=>new Date(W.timestamp).getTime()-new Date(Z.timestamp).getTime()),S=$.length>0?Number(((M=$[0].metadata)==null?void 0:M.weightKg)||parseFloat($[0].notes||"0")||14.2):14.2,D=i?`${S.toFixed(1)}kg`:`${S.toFixed(1)} kg`;return`${T} · ${_} · ${D}`})()}
                  </div>
                </div>
                <div style="font-size: 11.5px; font-weight: 800; color: #9A9080; flex: none;">
                  ${u} ${o.logsUnit}
                </div>
              </div>
            `)}
            <div
              class="add-action-link"
              @click=${()=>g.openPhotoModal({target:"pet",title:"Add New Pet Profile"})}
            >
              ${o.addPet}
            </div>
          </div>
        </div>

        <!-- Nudges Section -->
        <div>
          <div class="section-label">${o.nudges}</div>
          <div class="card-block">
            <div class="toggle-row">
              <div style="flex: 1; min-width: 0;">
                <div style="font-size: 13.5px; font-weight: 800; color: #17140F;">
                  ${o.walkReminders}
                </div>
                <div style="font-size: 11.5px; font-weight: 600; color: #6A6152; line-height: 1.35; margin-top: 1px;">
                  ${o.walkRemindersSub}
                </div>
              </div>
              <div
                class="switch-track ${g.nudges.push?"on":"off"}"
                @click=${()=>g.setNudgePreference("push",!g.nudges.push)}
              >
                <div class="switch-thumb"></div>
              </div>
            </div>

            <div class="toggle-row">
              <div style="flex: 1; min-width: 0;">
                <div style="font-size: 13.5px; font-weight: 800; color: #17140F;">
                  ${o.weeklyDigest}
                </div>
                <div style="font-size: 11.5px; font-weight: 600; color: #6A6152; line-height: 1.35; margin-top: 1px;">
                  ${o.weeklyDigestSub}
                </div>
              </div>
              <div
                class="switch-track ${g.nudges.weekly?"on":"off"}"
                @click=${()=>g.setNudgePreference("weekly",!g.nudges.weekly)}
              >
                <div class="switch-thumb"></div>
              </div>
            </div>

            <div class="toggle-row">
              <div style="flex: 1; min-width: 0;">
                <div style="font-size: 13.5px; font-weight: 800; color: #17140F;">
                  ${o.unusualGap}
                </div>
                <div style="font-size: 11.5px; font-weight: 600; color: #6A6152; line-height: 1.35; margin-top: 1px;">
                  ${o.unusualGapSub}
                </div>
              </div>
              <div
                class="switch-track ${g.nudges.gap?"on":"off"}"
                @click=${()=>g.setNudgePreference("gap",!g.nudges.gap)}
              >
                <div class="switch-thumb"></div>
              </div>
            </div>

            <div class="toggle-row">
              <div style="flex: 1; min-width: 0;">
                <div style="font-size: 13.5px; font-weight: 800; color: #17140F;">
                  ${o.vetShare}
                </div>
                <div style="font-size: 11.5px; font-weight: 600; color: #6A6152; line-height: 1.35; margin-top: 1px;">
                  ${o.vetShareSub}
                </div>
              </div>
              <div
                class="switch-track ${g.nudges.vet?"on":"off"}"
                @click=${()=>g.setNudgePreference("vet",!g.nudges.vet)}
              >
                <div class="switch-thumb"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Your Data Section -->
        <div>
          <div class="section-label">${o.yourData}</div>
          <div class="data-tiles-column">
            <div class="data-tile" @click=${()=>g.setActiveTab("import")}>
              <div class="tile-icon" style="background: #1FC99B;">↓</div>
              <div style="flex: 1; min-width: 0;">
                <div style="font-size: 13.5px; font-weight: 800; color: #17140F;">
                  ${o.importCsv}
                </div>
                <div style="font-size: 11.5px; font-weight: 600; color: #6A6152; margin-top: 1px; line-height: 1.35;">
                  ${o.importCsvSub}
                </div>
              </div>
            </div>

            <div class="data-tile" @click=${()=>this.handleExportCsv()}>
              <div class="tile-icon" style="background: #BFD0FF;">↑</div>
              <div style="flex: 1; min-width: 0;">
                <div style="font-size: 13.5px; font-weight: 800; color: #17140F;">
                  ${o.exportCsv}
                </div>
                <div style="font-size: 11.5px; font-weight: 600; color: #6A6152; margin-top: 1px; line-height: 1.35;">
                  ${o.exportCsvSub}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sign Out Button -->
        <div class="btn-signout" @click=${()=>this.handleSignOut()}>
          ${o.signOut}
        </div>

        <!-- Version Tag -->
        <div class="version-footer">
          ${o.version}
        </div>

        <div style="height: 40px;"></div>
      </div>
    `}},Je.styles=zt`
    :host {
      display: block;
      width: 100%;
      min-height: 100%;
      box-sizing: border-box;
      padding: 52px 18px 140px;
      background: #FFFBF2;
      animation: fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(6px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .settings-container {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    .back-btn {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 14px;
      padding: 8px 13px;
      font-size: 12.5px;
      font-weight: 800;
      color: #17140F;
      cursor: pointer;
      width: fit-content;
      box-shadow: 3px 3px 0 #17140F;
      user-select: none;
      transition: transform 0.1s ease, box-shadow 0.1s ease;
    }

    .back-btn:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .page-title {
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 29px;
      color: #17140F;
      letter-spacing: -1px;
      line-height: 1.1;
    }

    /* User Profile Card */
    .user-card {
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 22px;
      padding: 15px;
      box-shadow: 4px 4px 0 #17140F;
      display: flex;
      align-items: center;
      gap: 13px;
    }

    .user-avatar {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      border: 2.5px solid #17140F;
      background: #FFCE2E;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 17px;
      color: #17140F;
      flex: none;
      overflow: hidden;
      cursor: pointer;
    }

    .user-avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .section-label {
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 1.8px;
      color: #9A9080;
      text-transform: uppercase;
      margin: 2px 0 9px 4px;
    }

    /* Language Buttons */
    .lang-row {
      display: flex;
      gap: 9px;
    }

    .lang-btn {
      flex: 1;
      min-height: 50px;
      border-radius: 18px;
      border: 3px solid #17140F;
      background: #FFF;
      box-shadow: 3px 3px 0 #17140F;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 7px;
      font-size: 14.5px;
      font-weight: 800;
      color: #17140F;
      cursor: pointer;
      user-select: none;
      transition: all 0.1s ease;
    }

    .lang-btn.active {
      background: #FFCE2E;
      box-shadow: 1px 1px 0 #17140F;
      transform: translate(2px, 2px);
    }

    .lang-dot {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      border: 2.5px solid #17140F;
      background: #FFF;
      flex: none;
    }

    .lang-btn.active .lang-dot {
      background: #FF5A3C;
    }

    /* Household Card */
    .household-card {
      background: #FFCE2E;
      border: 3px solid #17140F;
      border-radius: 22px;
      padding: 16px;
      box-shadow: 4px 4px 0 #17140F;
      display: flex;
      align-items: center;
      gap: 13px;
    }

    .house-icon-badge {
      width: 48px;
      height: 48px;
      border-radius: 16px;
      border: 3px solid #17140F;
      background: #FFF;
      flex: none;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      padding-bottom: 9px;
      box-sizing: border-box;
      position: relative;
      overflow: hidden;
    }

    .house-roof {
      position: absolute;
      top: 8px;
      left: 8px;
      right: 8px;
      height: 13px;
      background: #FF5A3C;
      border: 2.5px solid #17140F;
      border-radius: 3px 3px 0 0;
      box-sizing: border-box;
    }

    .house-door {
      width: 12px;
      height: 14px;
      border: 2.5px solid #17140F;
      border-bottom: none;
      border-radius: 2px 2px 0 0;
      background: #FFCE2E;
      box-sizing: border-box;
    }

    .btn-invite-badge {
      background: #FFF;
      border: 2.5px solid #17140F;
      border-radius: 12px;
      padding: 7px 11px;
      font-size: 12px;
      font-weight: 800;
      color: #17140F;
      cursor: pointer;
      flex: none;
      box-shadow: 2px 2px 0 #17140F;
      user-select: none;
      transition: transform 0.1s ease, box-shadow 0.1s ease;
    }

    .btn-invite-badge:active {
      transform: translate(1px, 1px);
      box-shadow: 1px 1px 0 #17140F;
    }

    /* List Card Blocks */
    .card-block {
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 22px;
      padding: 5px 15px;
      box-shadow: 4px 4px 0 #17140F;
    }

    .list-row {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 0;
      border-bottom: 2px solid #F0E7D3;
    }

    .list-row:last-child {
      border-bottom: none;
    }

    .member-avatar {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      border: 2.5px solid #17140F;
      background: #FFCE2E;
      color: #17140F;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 800;
      font-size: 13px;
      flex: none;
      overflow: hidden;
    }

    .member-avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .pet-avatar-circle {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      border: 2.5px solid #17140F;
      background: repeating-linear-gradient(45deg, #F0E7D3 0 5px, #E3D8BE 5px 10px);
      flex: none;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 7px;
      font-weight: 800;
      color: #8A7F68;
      text-align: center;
      line-height: 1.15;
      overflow: hidden;
      cursor: pointer;
    }

    .pet-avatar-circle img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .add-action-link {
      padding: 13px 0;
      font-size: 13.5px;
      font-weight: 800;
      color: #2B5BE8;
      cursor: pointer;
      user-select: none;
    }

    .add-action-link:hover {
      text-decoration: underline;
    }

    /* Toggle Switches */
    .toggle-row {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 13px 0;
      border-bottom: 2px solid #F0E7D3;
    }

    .toggle-row:last-child {
      border-bottom: none;
    }

    .switch-track {
      width: 50px;
      height: 30px;
      border-radius: 30px;
      flex: none;
      cursor: pointer;
      padding: 2px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      border: 2.5px solid #17140F;
      transition: background 0.15s ease, justify-content 0.15s ease;
    }

    .switch-track.on {
      background: #1FC99B;
      justify-content: flex-end;
    }

    .switch-track.off {
      background: #E3D8BE;
      justify-content: flex-start;
    }

    .switch-thumb {
      width: 21px;
      height: 21px;
      border-radius: 50%;
      background: #FFF;
      border: 2px solid #17140F;
      box-sizing: border-box;
    }

    /* Action Tiles */
    .data-tiles-column {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .data-tile {
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 18px;
      padding: 13px 15px;
      cursor: pointer;
      box-shadow: 3px 3px 0 #17140F;
      display: flex;
      align-items: center;
      gap: 12px;
      user-select: none;
      transition: transform 0.1s ease, box-shadow 0.1s ease;
    }

    .data-tile:hover {
      transform: translate(-1px, -1px);
      box-shadow: 5px 5px 0 #17140F;
    }

    .data-tile:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .tile-icon {
      width: 34px;
      height: 34px;
      border-radius: 12px;
      border: 2.5px solid #17140F;
      flex: none;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 17px;
      font-weight: 800;
      color: #17140F;
    }

    .btn-signout {
      background: #FF5A3C;
      border: 3px solid #17140F;
      border-radius: 18px;
      padding: 14px 16px;
      font-size: 13.5px;
      font-weight: 800;
      color: #FFF;
      cursor: pointer;
      box-shadow: 3px 3px 0 #17140F;
      text-align: center;
      user-select: none;
      transition: transform 0.1s ease, box-shadow 0.1s ease;
    }

    .btn-signout:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .version-footer {
      text-align: center;
      font-size: 10.5px;
      font-weight: 700;
      color: #B5AB99;
      padding-top: 6px;
    }
  `,Je);Zs=Nl([At("dooty-settings")],Zs);var bo=function(h,i,o,s){var r=arguments.length,l=r<3?i:s===null?s=Object.getOwnPropertyDescriptor(i,o):s,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,i,o,s);else for(var u=h.length-1;u>=0;u--)(c=h[u])&&(l=(r<3?c(l):r>3?c(i,o,l):c(i,o))||l);return r>3&&l&&Object.defineProperty(i,o,l),l},Qe;let Mi=(Qe=class extends yt{constructor(){super(...arguments),this.selectedRole="Full member",this.currentCode="K7M4Q9",this.isGenerating=!1}connectedCallback(){super.connectedCallback(),this.unsubscribe=g.subscribe(()=>this.requestUpdate()),this.generateNewCode()}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.unsubscribe)==null||i.call(this)}async generateNewCode(){this.isGenerating=!0;try{const i=await g.createInvite(this.selectedRole);i&&(this.currentCode=i)}finally{this.isGenerating=!1}}handleCopy(){const i=g.t.invite;navigator.clipboard&&navigator.clipboard.writeText(this.currentCode),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:i.codeCopied,sub:i.codeCopiedSub(this.currentCode)}}))}handleShare(){var o;g.t.invite;const i=`Join my household "${((o=g.currentHousehold)==null?void 0:o.name)||"Dooty"}" with invite code: ${this.currentCode}`;navigator.share?navigator.share({title:"Dooty Invite",text:i,url:window.location.origin}).catch(()=>this.handleCopy()):this.handleCopy()}async handleRevoke(i){const o=g.t.invite;await g.revokeInvite(i),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:o.inviteRevoked,sub:o.inviteRevokedSub(i)}}))}render(){var l;const i=g.t.invite,o=((l=g.currentHousehold)==null?void 0:l.name)||"Household",s=(this.currentCode+"      ").slice(0,6).split(""),r=g.pendingInvites||[];return b`
      <div class="invite-container">
        <div class="back-btn" @click=${()=>g.setActiveTab("settings")}>
          ‹ ${i.back}
        </div>

        <div>
          <div class="section-label">${i.title}</div>
          <div class="headline">${o}</div>
          <div class="subline">${i.subtitle}</div>
        </div>

        <div>
          <div class="section-label" style="margin-bottom: 9px;">${i.theyJoinAs}</div>
          <div class="roles-row">
            <div
              class="role-card ${this.selectedRole==="Full member"?"active":""}"
              @click=${()=>{this.selectedRole="Full member",this.generateNewCode()}}
            >
              <div class="role-name">${i.roles.full.name}</div>
              <div class="role-sub">${i.roles.full.sub}</div>
            </div>

            <div
              class="role-card ${this.selectedRole==="Log only"?"active":""}"
              @click=${()=>{this.selectedRole="Log only",this.generateNewCode()}}
            >
              <div class="role-name">${i.roles.logOnly.name}</div>
              <div class="role-sub">${i.roles.logOnly.sub}</div>
            </div>
          </div>
        </div>

        <div class="yellow-card">
          <div class="yellow-card-label">${i.inviteCode}</div>
          <div class="code-grid">
            ${s.map(c=>b`
              <div class="code-char-box">${c.trim()}</div>
            `)}
          </div>
          <div class="expiry-note">${i.expiresIn7Days}</div>
          <div class="action-btns-row">
            <div class="btn-copy" @click=${()=>this.handleCopy()}>
              ${i.copyCode}
            </div>
            <div class="btn-share" @click=${()=>this.handleShare()}>
              ${i.shareLink}
            </div>
          </div>
        </div>

        <div>
          <div class="section-label" style="margin: 2px 0 9px 4px;">${i.pending}</div>
          <div class="pending-card">
            ${r.length===0?b`
                  <div style="padding: 14px 0; font-size: 13px; font-weight: 700; color: #9A9080; text-align: center;">
                    No pending invites
                  </div>
                `:r.map(c=>b`
                  <div class="pending-row">
                    <div class="pending-code-icon">${c.code}</div>
                    <div style="flex: 1; min-width: 0;">
                      <div style="font-size: 13.5px; font-weight: 800; color: #17140F;">${c.role}</div>
                      <div style="font-size: 11.5px; font-weight: 600; color: #6A6152;">${c.when}</div>
                    </div>
                    <div class="pending-revoke" @click=${()=>this.handleRevoke(c.code)}>
                      ${i.revoke}
                    </div>
                  </div>
                `)}
            <div class="pending-footer-note">
              ${i.pendingHelp}
            </div>
          </div>
        </div>

        <div style="height: 40px;"></div>
      </div>
    `}},Qe.styles=zt`
    :host {
      display: block;
      width: 100%;
      min-height: 100%;
      box-sizing: border-box;
      padding: 52px 18px 140px;
      background: #FFFBF2;
      animation: fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(6px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .invite-container {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .back-btn {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 14px;
      padding: 8px 13px;
      font-size: 12.5px;
      font-weight: 800;
      color: #17140F;
      cursor: pointer;
      width: fit-content;
      box-shadow: 3px 3px 0 #17140F;
      user-select: none;
      transition: transform 0.1s ease, box-shadow 0.1s ease;
    }

    .back-btn:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .section-label {
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 1.8px;
      color: #9A9080;
      text-transform: uppercase;
      margin-bottom: 2px;
    }

    .headline {
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 29px;
      color: #17140F;
      letter-spacing: -1.1px;
      line-height: 1.08;
      margin-top: 2px;
    }

    .subline {
      font-size: 13px;
      font-weight: 600;
      color: #6A6152;
      margin-top: 4px;
      line-height: 1.45;
    }

    .roles-row {
      display: flex;
      gap: 9px;
    }

    .role-card {
      flex: 1;
      border-radius: 16px;
      border: 3px solid #17140F;
      background: #FFF;
      box-shadow: 3px 3px 0 #17140F;
      padding: 12px 13px;
      cursor: pointer;
      min-height: 74px;
      box-sizing: border-box;
      user-select: none;
      transition: all 0.1s ease;
    }

    .role-card.active {
      background: #FFCE2E;
      box-shadow: 1px 1px 0 #17140F;
      transform: translate(2px, 2px);
    }

    .role-name {
      font-size: 13.5px;
      font-weight: 800;
      color: #17140F;
    }

    .role-sub {
      font-size: 11px;
      font-weight: 600;
      color: #6A6152;
      margin-top: 3px;
      line-height: 1.35;
    }

    /* Yellow Code Card */
    .yellow-card {
      background: #FFCE2E;
      border: 3px solid #17140F;
      border-radius: 24px;
      padding: 18px;
      box-shadow: 5px 5px 0 #17140F;
    }

    .yellow-card-label {
      font-size: 10.5px;
      font-weight: 800;
      letter-spacing: 1.4px;
      color: #7A5C00;
      text-transform: uppercase;
      text-align: center;
    }

    .code-grid {
      display: flex;
      gap: 6px;
      margin-top: 11px;
      justify-content: center;
    }

    .code-char-box {
      flex: 1;
      max-width: 48px;
      aspect-ratio: 0.82;
      border-radius: 13px;
      border: 3px solid #17140F;
      background: #FFF;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 23px;
      color: #17140F;
      box-shadow: 2px 2px 0 #17140F;
    }

    .expiry-note {
      font-size: 11.5px;
      font-weight: 700;
      color: #7A5C00;
      text-align: center;
      margin-top: 10px;
    }

    .action-btns-row {
      display: flex;
      gap: 9px;
      margin-top: 14px;
    }

    .btn-copy {
      flex: 1;
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 16px;
      padding: 13px;
      text-align: center;
      font-size: 13.5px;
      font-weight: 800;
      color: #17140F;
      cursor: pointer;
      box-shadow: 3px 3px 0 #17140F;
      user-select: none;
      transition: transform 0.1s ease, box-shadow 0.1s ease;
    }

    .btn-copy:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .btn-share {
      flex: 1;
      background: #17140F;
      border: 3px solid #17140F;
      border-radius: 16px;
      padding: 13px;
      text-align: center;
      font-size: 13.5px;
      font-weight: 800;
      color: #FFCE2E;
      cursor: pointer;
      box-shadow: 3px 3px 0 #FF5A3C;
      user-select: none;
      transition: transform 0.1s ease, box-shadow 0.1s ease;
    }

    .btn-share:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #FF5A3C;
    }

    /* Pending Card */
    .pending-card {
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 22px;
      padding: 5px 15px;
      box-shadow: 4px 4px 0 #17140F;
    }

    .pending-row {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 0;
      border-bottom: 2px solid #F0E7D3;
    }

    .pending-code-icon {
      width: 38px;
      height: 34px;
      border-radius: 12px;
      border: 2.5px solid #17140F;
      background: #FFF9E9;
      flex: none;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 11px;
      color: #17140F;
    }

    .pending-revoke {
      font-size: 12px;
      font-weight: 800;
      color: #B93B22;
      cursor: pointer;
      flex: none;
      user-select: none;
      padding: 4px;
    }

    .pending-revoke:hover {
      text-decoration: underline;
    }

    .pending-footer-note {
      padding: 12px 0;
      font-size: 11.5px;
      font-weight: 600;
      color: #9A9080;
      line-height: 1.45;
    }
  `,Qe);bo([z()],Mi.prototype,"selectedRole",void 0);bo([z()],Mi.prototype,"currentCode",void 0);bo([z()],Mi.prototype,"isGenerating",void 0);Mi=bo([At("dooty-invite")],Mi);var ze=function(h,i,o,s){var r=arguments.length,l=r<3?i:s===null?s=Object.getOwnPropertyDescriptor(i,o):s,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,i,o,s);else for(var u=h.length-1;u>=0;u--)(c=h[u])&&(l=(r<3?c(l):r>3?c(i,o,l):c(i,o))||l);return r>3&&l&&Object.defineProperty(i,o,l),l},Xe;let fe=(Xe=class extends yt{constructor(){super(...arguments),this.isImporting=!1,this.importProgress="",this.errorMessage="",this.successMessage="",this.isDragOver=!1}async processFile(i){this.errorMessage="",this.successMessage="";try{const o=await i.text(),s=sl(o,i.name);this.parsedResult=s}catch(o){this.errorMessage=o.message||"Failed to read and parse import file.",this.parsedResult=void 0}}async handleFileSelect(i){var r;const s=(r=i.target.files)==null?void 0:r[0];s&&await this.processFile(s)}handleDragOver(i){i.preventDefault(),this.isDragOver=!0}handleDragLeave(i){i.preventDefault(),this.isDragOver=!1}async handleDrop(i){var s,r;i.preventDefault(),this.isDragOver=!1;const o=(r=(s=i.dataTransfer)==null?void 0:s.files)==null?void 0:r[0];o&&await this.processFile(o)}async handleImport(){var i,o;if(!(!this.parsedResult||this.isImporting)){this.isImporting=!0,this.errorMessage="";try{const s=(i=g.currentHousehold)==null?void 0:i.id,r=(o=g.currentPet)==null?void 0:o.id;if(!s||!r)throw new Error("Please select or configure a household and pet before importing.");this.importProgress=`Converting ${this.parsedResult.summary.totalCount} events...`;const l=al(this.parsedResult,s,r);this.importProgress=`Saving ${l.length} events to server...`;const c=await Tt.importEvents(l);this.successMessage=g.t.importer.success(c.importedCount),await g.refreshEvents(),this.parsedResult=void 0}catch(s){this.errorMessage=s.message||"Import failed on server."}finally{this.isImporting=!1,this.importProgress=""}}}render(){var r;const i=g.t.importer,o=g.currentLocale==="ko",s=(r=this.parsedResult)==null?void 0:r.summary;return b`
      <div
        class="back-btn"
        @click=${()=>g.setActiveTab("settings")}
      >
        ‹ ${o?"설정":"Settings"}
      </div>
      <h2 class="page-title">${i.title}</h2>
      <p class="page-sub">${i.subtitle}</p>

      <label
        class="dropzone ${this.isDragOver?"dragover":""}"
        @dragover=${l=>this.handleDragOver(l)}
        @dragleave=${l=>this.handleDragLeave(l)}
        @drop=${l=>this.handleDrop(l)}
      >
        <div style="font-size: 42px;">📂</div>
        <div style="font-family: var(--font-heading); font-weight: 800; font-size: 16px;">
          ${i.dropText}
        </div>
        <input
          type="file"
          accept=".csv, .json, text/csv, application/json"
          style="display: none;"
          @change=${l=>this.handleFileSelect(l)}
        />
        <div class="select-btn">
          ${i.selectFile}
        </div>
      </label>

      ${this.errorMessage?b`<div class="msg-error">${this.errorMessage}</div>`:""}
      ${this.successMessage?b`<div class="msg-success">${this.successMessage}</div>`:""}

      ${s?b`
            <div class="preview-card">
              <div class="preview-header">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span>📋 ${i.dryRunTitle}</span>
                  <span class="format-badge"
                    >${s.sourceType==="csv"?"📄 CSV Report":"📦 DogNotes JSON"}</span
                  >
                </div>
                <span style="font-size: 13px; font-weight: 800; color: var(--color-coral);"
                  >${s.totalCount.toLocaleString()} items</span
                >
              </div>

              <div style="font-size: 13px; font-weight: 700;">
                🐾 ${i.targetPet}: <span style="font-weight: 900;">${s.petName}</span>
              </div>

              <div style="font-size: 12px; color: var(--color-muted); font-weight: 600;">
                📅 ${i.dateSpan}: ${s.earliestDate.split("T")[0]} →
                ${s.latestDate.split("T")[0]}
              </div>

              <div>
                <div class="section-subtitle">👤 Logged by (Mapped)</div>
                <div class="breakdown-row">
                  ${Object.entries(s.countsByUser).map(([l,c])=>b`
                      <div class="user-chip">@${l}: ${c.toLocaleString()}</div>
                    `)}
                </div>
              </div>

              <div>
                <div class="section-subtitle">🏷️ Event Breakdown</div>
                <div class="breakdown-row">
                  ${Object.entries(s.countsByType).map(([l,c])=>b`
                      <div class="breakdown-chip">${l}: ${c.toLocaleString()}</div>
                    `)}
                </div>
              </div>

              <button
                class="import-btn"
                @click=${()=>this.handleImport()}
                ?disabled=${this.isImporting}
              >
                ${this.isImporting?this.importProgress||i.importing:`🚀 ${i.confirmImport} (${s.totalCount.toLocaleString()})`}
              </button>
            </div>
          `:""}
    `}},Xe.styles=zt`
    :host {
      display: block;
      padding: 52px 18px 140px;
      max-width: 480px;
      margin: 0 auto;
      box-sizing: border-box;
      animation: fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(6px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .back-btn {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 14px;
      padding: 8px 13px;
      font-size: 12.5px;
      font-weight: 800;
      color: #17140F;
      cursor: pointer;
      width: fit-content;
      box-shadow: 3px 3px 0 #17140F;
      user-select: none;
      transition: transform 0.1s ease, box-shadow 0.1s ease;
      margin-bottom: 14px;
    }

    .back-btn:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .page-title {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 22px;
      letter-spacing: -0.5px;
      color: var(--color-ink);
    }

    .page-sub {
      font-size: 13px;
      color: var(--color-muted);
      font-weight: 600;
      margin-top: 2px;
      margin-bottom: 16px;
    }

    .dropzone {
      background: #fff;
      border: 3px dashed var(--color-ink);
      border-radius: 22px;
      padding: 32px 18px;
      text-align: center;
      box-shadow: var(--shadow-md);
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      transition: background 0.15s ease, border-color 0.15s ease, transform 0.15s ease;
    }

    .dropzone:hover,
    .dropzone.dragover {
      background: #fffdf8;
      border-color: #ff5a3c;
      transform: translateY(-2px);
    }

    .preview-card {
      margin-top: 20px;
      background: #fff;
      border: var(--border-thick);
      border-radius: 22px;
      padding: 18px;
      box-shadow: var(--shadow-md);
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    .preview-header {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .format-badge {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-size: 11px;
      font-weight: 800;
      background: #bfd0ff;
      border: 2px solid var(--color-ink);
      border-radius: 10px;
      padding: 2px 8px;
      text-transform: uppercase;
    }

    .section-subtitle {
      font-size: 12px;
      font-weight: 800;
      color: var(--color-muted);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 4px;
    }

    .breakdown-row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .breakdown-chip {
      background: var(--color-yellow-light, #fff9e6);
      border: 2px solid var(--color-ink);
      border-radius: 12px;
      padding: 4px 10px;
      font-size: 12px;
      font-weight: 800;
    }

    .user-chip {
      background: #d1fae5;
      border: 2px solid var(--color-ink);
      border-radius: 12px;
      padding: 4px 10px;
      font-size: 12px;
      font-weight: 800;
    }

    .import-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 15px;
      padding: 14px 18px;
      border: 3px solid #17140F;
      border-radius: 18px;
      background: #FF5A3C;
      color: #FFF;
      cursor: pointer;
      box-shadow: 4px 4px 0 #17140F;
      transition: transform 0.1s ease, box-shadow 0.1s ease, background 0.15s ease;
      user-select: none;
      box-sizing: border-box;
      text-align: center;
      width: 100%;
      margin-top: 6px;
    }

    .import-btn:hover:not(:disabled) {
      transform: translate(1px, 1px);
      box-shadow: 3px 3px 0 #17140F;
    }

    .import-btn:active:not(:disabled) {
      transform: translate(3px, 3px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .import-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      box-shadow: 2px 2px 0 #17140F;
      transform: none;
    }

    .select-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 13px;
      padding: 8px 18px;
      border: 2.5px solid #17140F;
      border-radius: 14px;
      background: #FFD027;
      color: #17140F;
      cursor: pointer;
      box-shadow: 2px 2px 0 #17140F;
      transition: transform 0.1s ease, box-shadow 0.1s ease;
      user-select: none;
      width: auto;
    }

    .select-btn:hover {
      transform: translate(1px, 1px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .msg-success {
      background: #D1FAE5;
      border: var(--border-thick);
      border-radius: 14px;
      padding: 12px;
      font-weight: 700;
      color: #065F46;
      font-size: 13px;
      margin-top: 14px;
    }

    .msg-error {
      background: #FEE2E2;
      border: var(--border-thick);
      border-radius: 14px;
      padding: 12px;
      font-weight: 700;
      color: #991B1B;
      font-size: 13px;
      margin-top: 14px;
    }
  `,Xe);ze([z()],fe.prototype,"parsedResult",void 0);ze([z()],fe.prototype,"isImporting",void 0);ze([z()],fe.prototype,"importProgress",void 0);ze([z()],fe.prototype,"errorMessage",void 0);ze([z()],fe.prototype,"successMessage",void 0);ze([z()],fe.prototype,"isDragOver",void 0);fe=ze([At("dooty-importer")],fe);var Yt=function(h,i,o,s){var r=arguments.length,l=r<3?i:s===null?s=Object.getOwnPropertyDescriptor(i,o):s,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,i,o,s);else for(var u=h.length-1;u>=0;u--)(c=h[u])&&(l=(r<3?c(l):r>3?c(i,o,l):c(i,o))||l);return r>3&&l&&Object.defineProperty(i,o,l),l},ti;let Zt=(ti=class extends yt{constructor(){super(...arguments),this.open=!1,this.initialLocationName="",this.currentLocationName="",this.isLocating=!1,this.isGeocoding=!1,this.hasMovedMarker=!1,this.locationPresets=["Home / Indoor","Backyard","Park","Walk Route","Vet Clinic","Daycare"],this.locationPresetsKo=["우리집 / 실내","마당 / 배변패드","공원 / 산책로","단지 내 산책","동물병원","데이케어"]}updated(i){i.has("open")&&(this.open?(this.currentLat=this.initialLat,this.currentLng=this.initialLng,this.currentLocationName=this.initialLocationName||"",this.hasMovedMarker=!1,setTimeout(()=>{this.initOrUpdateMap()},80)):this.destroyMap())}disconnectedCallback(){super.disconnectedCallback(),this.destroyMap()}destroyMap(){this.map&&(this.map.remove(),this.map=void 0,this.marker=void 0)}initOrUpdateMap(){var u;const i=(u=this.renderRoot)==null?void 0:u.querySelector("#leaflet-map");if(!i)return;if(this.map){this.map.invalidateSize();return}const o=this.currentLat??37.5665,s=this.currentLng??126.978,r=this.currentLat&&this.currentLng?16:14;this.map=_t.map(i,{zoomControl:!1,attributionControl:!1}).setView([o,s],r),_t.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png",{maxZoom:19,subdomains:"abcd",updateWhenIdle:!0,updateWhenZooming:!1,keepBuffer:3}).addTo(this.map),_t.control.zoom({position:"bottomright"}).addTo(this.map);const c=_t.divIcon({className:"dooty-custom-leaflet-pin",html:`
      <div style="
        position: relative;
        transform: translate(-50%, -100%);
        cursor: grab;
      ">
        <div style="
          background: #FF5A3C;
          color: #FFF;
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: 16px;
          border: 3px solid #17140F;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 3px 3px 0 #17140F;
        ">
          <span style="transform: rotate(45deg); display: inline-block;">📍</span>
        </div>
      </div>
    `,iconSize:[0,0]});this.currentLat&&this.currentLng?this.marker=_t.marker([this.currentLat,this.currentLng],{icon:c,draggable:!0}).addTo(this.map):(this.marker=_t.marker([o,s],{icon:c,draggable:!0}).addTo(this.map),this.fetchUserGPS(!1)),this.marker.on("dragend",f=>{const v=f.target.getLatLng();this.onPositionSelected(v.lat,v.lng)}),this.map.on("click",f=>{const{lat:v,lng:w}=f.latlng;this.marker&&this.marker.setLatLng([v,w]),this.onPositionSelected(v,w)}),setTimeout(()=>{var f;(f=this.map)==null||f.invalidateSize()},150)}onPositionSelected(i,o){this.currentLat=i,this.currentLng=o,this.hasMovedMarker=!0,this.requestUpdate(),this.geocodeTimeout&&window.clearTimeout(this.geocodeTimeout),this.geocodeTimeout=window.setTimeout(()=>{this.tryReverseGeocode(i,o)},400)}fetchUserGPS(i=!0){typeof navigator>"u"||!navigator.geolocation||(this.isLocating=!0,this.requestUpdate(),navigator.geolocation.getCurrentPosition(o=>{const s=o.coords.latitude,r=o.coords.longitude;this.isLocating=!1,this.currentLat=s,this.currentLng=r,this.map&&(this.map.flyTo([s,r],17,{animate:!0,duration:1}),this.marker&&this.marker.setLatLng([s,r])),(!this.currentLocationName||!this.hasMovedMarker)&&this.tryReverseGeocode(s,r),this.requestUpdate()},o=>{console.warn("Geolocation error in picker:",o),this.isLocating=!1,this.requestUpdate()},{enableHighAccuracy:!0,timeout:8e3}))}async tryReverseGeocode(i,o){var s,r,l,c,u,f,v,w;this.isGeocoding=!0,this.requestUpdate();try{const x=await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${i}&lon=${o}&zoom=18&addressdetails=1`,{headers:{Accept:"application/json"}});if(x.ok){const _=await x.json(),T=((s=_.address)==null?void 0:s.road)||((r=_.address)==null?void 0:r.pedestrian)||((l=_.address)==null?void 0:l.suburb)||((c=_.address)==null?void 0:c.neighbourhood),$=((u=_.address)==null?void 0:u.city)||((f=_.address)==null?void 0:f.town)||((v=_.address)==null?void 0:v.village)||((w=_.address)==null?void 0:w.county);if(T&&$)this.currentLocationName=`${T}, ${$}`;else if(T)this.currentLocationName=T;else if(_.display_name){const S=_.display_name.split(",");this.currentLocationName=S.slice(0,2).join(",").trim()}}}catch{}finally{this.isGeocoding=!1,this.requestUpdate()}}selectPreset(i){this.currentLocationName=i,this.requestUpdate()}handleSaveSpot(){if((this.currentLat===void 0||this.currentLng===void 0)&&this.map){const i=this.map.getCenter();this.currentLat=i.lat,this.currentLng=i.lng}this.dispatchEvent(new CustomEvent("spot-selected",{bubbles:!0,composed:!0,detail:{lat:this.currentLat,lng:this.currentLng,locationName:this.currentLocationName}})),this.handleClose()}handleClose(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}render(){if(!this.open)return null;const i=g.currentLocale==="ko",o=i?this.locationPresetsKo:this.locationPresets;return b`
      <!-- Inject Leaflet core CSS into Shadow DOM -->
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      />

      <div class="modal-backdrop" @click=${()=>this.handleClose()}>
        <div class="picker-window" @click=${s=>s.stopPropagation()}>
          <!-- Header -->
          <div class="picker-header">
            <div class="picker-title-group">
              <div class="picker-title">
                <span>🗺️</span>
                <span>${i?"지도에서 위치 찾기":"Find Spot on Map"}</span>
              </div>
              <div class="picker-sub">
                ${i?"지도를 탭하거나 핀을 드래그하여 정확한 위치를 지정하세요.":"Tap the map or drag the pin to pinpoint the exact location."}
              </div>
            </div>
            <button class="picker-close-btn" @click=${()=>this.handleClose()}>✕</button>
          </div>

          <!-- Interactive Leaflet Map Container -->
          <div class="map-wrapper">
            <div id="leaflet-map"></div>

            <!-- Locate Me Floating Button -->
            <button
              class="gps-locate-fab"
              @click=${()=>this.fetchUserGPS(!0)}
              ?disabled=${this.isLocating}
            >
              <span>${this.isLocating?"⏳":"🎯"}</span>
              <span>${this.isLocating?i?"수신 중...":"Locating...":i?"내 위치":"My GPS"}</span>
            </button>

            <div class="map-hint-badge">
              ${i?"👇 지도를 탭하여 핀 이동":"👇 Tap anywhere to place pin"}
            </div>
          </div>

          <!-- Bottom Footer Details -->
          <div class="picker-footer">
            <!-- Address / Spot Name Box -->
            <div class="address-card">
              <div class="address-header-row">
                <span class="address-label">${i?"선택된 위치명":"Selected Spot"}</span>
                ${this.currentLat&&this.currentLng?b`
                      <span class="coords-tag">
                        ${this.currentLat.toFixed(4)}, ${this.currentLng.toFixed(4)}
                      </span>
                    `:null}
              </div>
              <input
                type="text"
                class="location-name-input"
                placeholder="${this.isGeocoding?i?"주소 확인 중...":"Resolving address...":i?"장소 이름을 입력하거나 칩을 선택하세요":"Enter place name or pick preset"}"
                .value=${this.currentLocationName}
                @input=${s=>this.currentLocationName=s.target.value}
              />
            </div>

            <!-- Quick Preset Chips -->
            <div class="presets-row">
              ${o.map(s=>b`
                  <div
                    class="preset-pill ${this.currentLocationName===s?"active":""}"
                    @click=${()=>this.selectPreset(s)}
                  >
                    ${s}
                  </div>
                `)}
            </div>

            <!-- Action Buttons -->
            <div class="action-buttons-row">
              <button class="btn-cancel" @click=${()=>this.handleClose()}>
                ${i?"취소":"Cancel"}
              </button>
              <button class="btn-save" @click=${()=>this.handleSaveSpot()}>
                <span>📍</span>
                <span>${i?"이 위치로 저장":"Save this Spot"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `}},ti.styles=zt`
    :host {
      display: block;
    }

    .modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(23, 20, 15, 0.6);
      backdrop-filter: blur(4px);
      z-index: 250;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 12px;
      box-sizing: border-box;
      animation: fadeIn 0.2s ease;
    }

    .picker-window {
      position: relative;
      background: #FFFBF2;
      border: 3px solid #17140F;
      border-radius: 28px;
      width: 100%;
      max-width: 520px;
      max-height: 94vh;
      display: flex;
      flex-direction: column;
      box-shadow: 0 16px 36px rgba(23, 20, 15, 0.35);
      overflow: hidden;
      animation: popIn 0.25s cubic-bezier(0.16, 1, 0.3, 1);
      box-sizing: border-box;
    }

    .picker-header {
      padding: 16px 18px 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 2.5px solid #17140F;
      background: #FFFBF2;
      flex: none;
    }

    .picker-title-group {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .picker-title {
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 20px;
      color: #17140F;
      letter-spacing: -0.5px;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .picker-sub {
      font-size: 11.5px;
      font-weight: 600;
      color: #6A6152;
    }

    .picker-close-btn {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      border: 2.5px solid #17140F;
      background: #FFF;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: 800;
      color: #17140F;
      cursor: pointer;
      box-shadow: 2px 2px 0 #17140F;
      user-select: none;
      transition: transform 0.08s ease, box-shadow 0.08s ease;
    }

    .picker-close-btn:active {
      transform: translate(1px, 1px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .map-wrapper {
      position: relative;
      height: 340px;
      width: 100%;
      background: #E5EAD9;
      overflow: hidden;
      flex: none;
    }

    #leaflet-map {
      width: 100%;
      height: 100%;
      z-index: 1;
    }

    .gps-locate-fab {
      position: absolute;
      top: 14px;
      right: 14px;
      z-index: 500;
      background: #FFCE2E;
      border: 2.5px solid #17140F;
      border-radius: 14px;
      padding: 8px 12px;
      font-family: inherit;
      font-weight: 800;
      font-size: 12.5px;
      color: #17140F;
      display: flex;
      align-items: center;
      gap: 5px;
      cursor: pointer;
      box-shadow: 2.5px 2.5px 0 #17140F;
      user-select: none;
      transition: transform 0.08s ease, box-shadow 0.08s ease, filter 0.08s ease;
    }

    .gps-locate-fab:hover {
      filter: brightness(1.05);
    }

    .gps-locate-fab:active {
      transform: translate(1px, 1px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .map-hint-badge {
      position: absolute;
      bottom: 12px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 500;
      background: rgba(23, 20, 15, 0.85);
      color: #FFFBF2;
      border-radius: 20px;
      padding: 5px 12px;
      font-size: 11px;
      font-weight: 700;
      pointer-events: none;
      white-space: nowrap;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
    }

    .picker-footer {
      padding: 14px 18px 18px;
      background: #FFFBF2;
      border-top: 2.5px solid #17140F;
      display: flex;
      flex-direction: column;
      gap: 12px;
      flex: 1;
      min-height: 0;
      box-sizing: border-box;
    }

    .address-card {
      background: #FFF;
      border: 2.5px solid #17140F;
      border-radius: 16px;
      padding: 10px 12px;
      box-shadow: 2px 2px 0 #17140F;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .address-header-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .address-label {
      font-size: 9.5px;
      font-weight: 800;
      letter-spacing: 1px;
      color: #9A9080;
      text-transform: uppercase;
    }

    .coords-tag {
      font-family: monospace;
      font-size: 11px;
      font-weight: 700;
      color: #2B5BE8;
      background: #E8EEFF;
      padding: 2px 6px;
      border-radius: 6px;
      border: 1px solid #17140F;
    }

    .location-name-input {
      border: none;
      background: transparent;
      font-size: 14px;
      font-family: inherit;
      font-weight: 800;
      color: #17140F;
      outline: none;
      padding: 2px 0 0;
      width: 100%;
    }

    .location-name-input::placeholder {
      color: #9A9080;
      font-weight: 600;
    }

    /* Quick Preset Chips */
    .presets-row {
      display: flex;
      gap: 6px;
      overflow-x: auto;
      padding-bottom: 2px;
      scrollbar-width: none;
    }

    .presets-row::-webkit-scrollbar {
      display: none;
    }

    .preset-pill {
      background: #F3EFE6;
      border: 2px solid #17140F;
      border-radius: 10px;
      padding: 5px 9px;
      font-size: 11.5px;
      font-weight: 700;
      color: #17140F;
      cursor: pointer;
      box-shadow: 1.5px 1.5px 0 #17140F;
      white-space: nowrap;
      user-select: none;
      transition: all 0.08s ease;
    }

    .preset-pill.active {
      background: #FFCE2E;
      transform: translateY(1px);
      box-shadow: 0.5px 0.5px 0 #17140F;
    }

    .action-buttons-row {
      display: flex;
      gap: 10px;
      margin-top: 2px;
    }

    .btn-cancel {
      flex: 1;
      background: #FFF;
      border: 2.5px solid #17140F;
      border-radius: 16px;
      padding: 12px;
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 15px;
      color: #17140F;
      cursor: pointer;
      box-shadow: 3px 3px 0 #17140F;
      user-select: none;
      transition: all 0.08s ease;
    }

    .btn-save {
      flex: 2;
      background: #FF5A3C;
      border: 2.5px solid #17140F;
      border-radius: 16px;
      padding: 12px;
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 16px;
      color: #FFF;
      cursor: pointer;
      box-shadow: 3px 3px 0 #17140F;
      user-select: none;
      transition: all 0.08s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
    }

    .btn-save:hover {
      background: #FF7659;
      transform: translate(-1px, -1px);
      box-shadow: 4px 4px 0 #17140F;
    }

    .btn-save:active, .btn-cancel:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes popIn {
      from { transform: scale(0.95); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
  `,ti);Yt([Oi({type:Boolean})],Zt.prototype,"open",void 0);Yt([Oi({type:Number})],Zt.prototype,"initialLat",void 0);Yt([Oi({type:Number})],Zt.prototype,"initialLng",void 0);Yt([Oi({type:String})],Zt.prototype,"initialLocationName",void 0);Yt([z()],Zt.prototype,"currentLat",void 0);Yt([z()],Zt.prototype,"currentLng",void 0);Yt([z()],Zt.prototype,"currentLocationName",void 0);Yt([z()],Zt.prototype,"isLocating",void 0);Yt([z()],Zt.prototype,"isGeocoding",void 0);Yt([z()],Zt.prototype,"hasMovedMarker",void 0);Zt=Yt([At("dooty-map-picker")],Zt);var dt=function(h,i,o,s){var r=arguments.length,l=r<3?i:s===null?s=Object.getOwnPropertyDescriptor(i,o):s,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,i,o,s);else for(var u=h.length-1;u>=0;u--)(c=h[u])&&(l=(r<3?c(l):r>3?c(i,o,l):c(i,o))||l);return r>3&&l&&Object.defineProperty(i,o,l),l},ei;let rt=(ei=class extends yt{constructor(){super(...arguments),this.selectedType=null,this.cons=4,this.size="M",this.mood="Zoomy",this.selectedMed="Apoquel",this.selectedMedDose="16 mg with food",this.customMedName="",this.weightKg=14.2,this.walkMin="30 min",this.walkKm="2.3 km",this.vetReason="Annual check-up",this.symptom="Itch / Scratch",this.portion="1 cup",this.photoUrl="",this.notes="",this.locationName="",this.lat=void 0,this.lng=void 0,this.isLocating=!1,this.showLocationPicker=!1,this.showMapPicker=!1,this.showTimePicker=!1,this.customTimestamp="",this.walkPetIds=[],this.weatherText="",this.isFetchingWeather=!1,this.isSaving=!1,this.wasOpen=!1,this.consNames=["hard pellets","lumpy log","cracked log","textbook — the dream","soft blobs","mushy","liquid"],this.consNamesKo=["단단한 토끼똥","울퉁불퉁한 변","약간 갈라진 변","완벽한 황금변 (최고)","무른 덩어리변","형태 없는 묽은변","설사/수분성 액체"],this.typeDefs=[{id:"poop",name:"Poop",nameKo:"응가",tag:"P",sub:"the main event",subKo:"주요 배변 활동",c:"#FFCE2E"},{id:"pee",name:"Pee",nameKo:"쉬야",tag:"U",sub:"quick mark",subKo:"배뇨 영역 표시",c:"#BFD0FF"},{id:"vomit",name:"Vomit",nameKo:"구토",tag:"V",sub:"we hope not",subKo:"소화 이상/토",c:"#FF9A3C"},{id:"medicine",name:"Medicine",nameKo:"약/영양제",tag:"M",sub:"3 on schedule",subKo:"투약 일정 관리",c:"#1FC99B"},{id:"weight",name:"Weight",nameKo:"몸무게",tag:"KG",sub:"last 14.2 kg",subKo:"체중 변화 기록",c:"#2B5BE8"},{id:"walk",name:"Walk",nameKo:"산책",tag:"W",sub:"2 already today",subKo:"야외 활동 & 코스",c:"#9EC6E8"},{id:"vet",name:"Vet visit",nameKo:"병원 진료",tag:"D",sub:"appointments",subKo:"검진 및 진료 예약",c:"#FFD15C"},{id:"symptom",name:"Symptom",nameKo:"증상 메모",tag:"S",sub:"itch, limp, mood",subKo:"가려움, 절뚝임 등",c:"#FF5A3C"}],this.medOptions=[{name:"Apoquel",dose:"16 mg with food"},{name:"Joint chew",dose:"1 chew, evening"},{name:"Flea & tick",dose:"topical, weekly"}],this.walkOptions=[{min:"15 min",minKo:"15분",km:"1.1 km"},{min:"30 min",minKo:"30분",km:"2.3 km"},{min:"45 min",minKo:"45분",km:"3.4 km"},{min:"1 hr",minKo:"1시간",km:"4.6 km"}],this.vetReasons=[{id:"Annual check-up",name:"Annual check-up",nameKo:"정기 검진"},{id:"Vaccination booster",name:"Vaccination booster",nameKo:"예방 접종"},{id:"Loose stool consult",name:"Loose stool consult",nameKo:"배변/설사 진료"},{id:"Dental scaling",name:"Dental scaling",nameKo:"치과/스케일링"},{id:"Medication renewal",name:"Medication renewal",nameKo:"처방약 재발급"},{id:"Follow-up exam",name:"Follow-up exam",nameKo:"재진/경과 관찰"}],this.symptomOptions=[{id:"Itch / Scratch",name:"Itch / Scratch",nameKo:"가려움 / 긁음"},{id:"Limping / Joint",name:"Limping / Joint",nameKo:"절뚝임 / 관절"},{id:"Lethargic / Low energy",name:"Lethargic / Low energy",nameKo:"기력 저하"},{id:"Coughing / Reverse sneeze",name:"Coughing / Reverse sneeze",nameKo:"기침 / 역재채기"},{id:"Loss of Appetite",name:"Loss of Appetite",nameKo:"식욕 부진"},{id:"Skin redness / Rash",name:"Skin redness / Rash",nameKo:"피부 발진 / 붉어짐"},{id:"Ear shaking",name:"Ear shaking",nameKo:"귀 털기 / 귓병"}],this.portionOptions=[{id:"0.5 cup",name:"0.5 cup",nameKo:"0.5 컵"},{id:"1.0 cup",name:"1.0 cup",nameKo:"1.0 컵"},{id:"1.5 cups",name:"1.5 cups",nameKo:"1.5 컵"},{id:"2.0 cups",name:"2.0 cups",nameKo:"2.0 컵"},{id:"Full bowl",name:"Full bowl",nameKo:"한 그릇 가득"},{id:"Special treats",name:"Special treats",nameKo:"특별 간식"}],this.moodOptions=Gr,this.locationPresets=["Home / Indoor","Backyard","Park","Walk Route","Vet Clinic","Daycare"],this.locationPresetsKo=["우리집 / 실내","마당 / 배변패드","공원 / 산책로","단지 내 산책","동물병원","데이케어"]}connectedCallback(){super.connectedCallback(),this.unsubscribe=g.subscribe(()=>{if(g.loggerModalOpen)if(this.wasOpen)g.loggerEventType&&this.selectedType!==g.loggerEventType&&!g.editingEvent&&(this.selectedType=g.loggerEventType);else{if(this.walkPetIds=g.currentPet?[g.currentPet.id]:[],g.editingEvent){const i=g.editingEvent,o=i.metadata||{};this.selectedType=i.eventType;let s=i.notes||"";const r=s.split(" · ");if(r.length>1){const l=r[r.length-1].trim();l!==o.mood&&l!==o.size&&l!==o.portion?s=l:s=""}else(s.startsWith("응가")||s.startsWith("쉬야")||s.startsWith("Type ")||s.startsWith("Pee")||s.startsWith("Vomit")||s.startsWith("구토")||s.startsWith("Weigh-in")||s.startsWith("체중"))&&(s="");this.notes=s,this.photoUrl=o.photoUrl||"",this.locationName=o.locationName||"",this.lat=i.latitude,this.lng=i.longitude,this.weatherText=o.weather||"",this.customTimestamp=i.timestamp||new Date().toISOString(),o.consistency&&(this.cons=o.consistency),o.size&&(this.size=o.size),o.mood&&(this.mood=o.mood),o.medication&&(this.selectedMed=o.medication),o.dosage&&(this.selectedMedDose=o.dosage),o.weightKg&&(this.weightKg=o.weightKg),o.walkDuration&&(this.walkMin=o.walkDuration),o.walkDistance&&(this.walkKm=o.walkDistance),o.visitReason&&(this.vetReason=o.visitReason),o.symptom&&(this.symptom=o.symptom),o.portion&&(this.portion=o.portion),this.isLocating=!1,this.showLocationPicker=!1,this.showMapPicker=!1,this.showTimePicker=!1,this.isFetchingWeather=!1}else this.selectedType=g.loggerEventType||null,this.locationName="",this.lat=void 0,this.lng=void 0,this.notes="",this.photoUrl="",this.customMedName="",this.customTimestamp=new Date().toISOString(),this.isLocating=!1,this.showLocationPicker=!1,this.showMapPicker=!1,this.showTimePicker=!1,this.weatherText="",this.isFetchingWeather=!1,this.autoFetchWeather();this.wasOpen=!0}else this.selectedType=null,this.wasOpen=!1;this.requestUpdate()})}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.unsubscribe)==null||i.call(this)}handleSelectType(i){this.selectedType=i,g.loggerEventType=i}handleBackToTypes(){this.selectedType=null,g.loggerEventType=null}triggerPhotoUpload(){this.fileInput||(this.fileInput=document.createElement("input"),this.fileInput.type="file",this.fileInput.accept="image/*",this.fileInput.style.display="none",document.body.appendChild(this.fileInput),this.fileInput.addEventListener("change",i=>{var s;const o=(s=i.target.files)==null?void 0:s[0];if(o){const r=new FileReader;r.onload=l=>{var c;this.photoUrl=(c=l.target)==null?void 0:c.result},r.readAsDataURL(o)}})),this.fileInput.click()}selectPreset(i){this.locationName=i,!this.lat&&typeof navigator<"u"&&navigator.geolocation&&navigator.geolocation.getCurrentPosition(o=>{this.lat=o.coords.latitude,this.lng=o.coords.longitude,this.requestUpdate()},()=>{},{timeout:5e3})}clearLocation(){this.locationName="",this.lat=void 0,this.lng=void 0,this.isLocating=!1}async fetchCurrentLocation(){if(typeof navigator>"u"||!navigator.geolocation){this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:g.currentLocale==="ko"?"위치 권한 필요":"GPS Unavailable",sub:g.currentLocale==="ko"?"브라우저에서 위치 정보 접근을 허용해주세요.":"Geolocation is not supported or permitted by your browser."}}));return}this.isLocating=!0,this.requestUpdate(),navigator.geolocation.getCurrentPosition(async i=>{this.lat=i.coords.latitude,this.lng=i.coords.longitude,this.isLocating=!1,this.locationName||(this.locationName=`${this.lat.toFixed(4)}, ${this.lng.toFixed(4)}`,this.tryReverseGeocode(this.lat,this.lng)),this.fetchWeather(this.lat,this.lng),this.requestUpdate(),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:g.currentLocale==="ko"?"GPS 위치 태그 완료":"GPS Location Tagged",sub:`${this.lat.toFixed(4)}, ${this.lng.toFixed(4)}`}}))},i=>{console.warn("Geolocation failed:",i),this.isLocating=!1,this.requestUpdate(),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:g.currentLocale==="ko"?"위치 확인 실패":"Location Tagging Failed",sub:i.message||(g.currentLocale==="ko"?"위치 정보를 가져올 수 없습니다.":"Could not retrieve GPS coordinates.")}}))},{enableHighAccuracy:!0,timeout:8e3})}autoFetchWeather(){typeof navigator>"u"||!navigator.geolocation||(this.isFetchingWeather=!0,this.weatherText="",this.requestUpdate(),navigator.geolocation.getCurrentPosition(i=>{this.fetchWeather(i.coords.latitude,i.coords.longitude)},()=>{this.isFetchingWeather=!1,this.weatherText="",this.requestUpdate()},{timeout:5e3}))}async fetchWeather(i,o){var s,r;this.isFetchingWeather=!0,this.requestUpdate();try{const l=`https://api.open-meteo.com/v1/forecast?latitude=${i}&longitude=${o}&current=temperature_2m,weather_code&temperature_unit=celsius`,c=await fetch(l);if(!c.ok)throw new Error("Weather API error");const u=await c.json(),f=Math.round(((s=u.current)==null?void 0:s.temperature_2m)??0),v=((r=u.current)==null?void 0:r.weather_code)??0,w=this.wmoCodeToDescription(v);this.weatherText=`${f}° ${w}`}catch(l){console.warn("Weather fetch failed:",l),this.weatherText=""}finally{this.isFetchingWeather=!1,this.requestUpdate()}}wmoCodeToDescription(i){const o=g.currentLocale==="ko",r={0:["☀️ clear","☀️ 맑음"],1:["🌤️ mostly clear","🌤️ 대체로 맑음"],2:["⛅ partly cloudy","⛅ 구름 조금"],3:["☁️ overcast","☁️ 흐림"],45:["🌫️ fog","🌫️ 안개"],48:["🌫️ rime fog","🌫️ 서리 안개"],51:["🌦️ light drizzle","🌦️ 가벼운 이슬비"],53:["🌦️ drizzle","🌦️ 이슬비"],55:["🌧️ heavy drizzle","🌧️ 강한 이슬비"],56:["🌧️ freezing drizzle","🌧️ 얼어붙는 이슬비"],57:["🌧️ heavy freezing drizzle","🌧️ 강한 결빙 이슬비"],61:["🌧️ light rain","🌧️ 약한 비"],63:["🌧️ rain","🌧️ 비"],65:["🌧️ heavy rain","🌧️ 강한 비"],66:["🌧️ freezing rain","🌧️ 얼어붙는 비"],67:["🌧️ heavy freezing rain","🌧️ 강한 결빙 비"],71:["🌨️ light snow","🌨️ 약한 눈"],73:["🌨️ snow","🌨️ 눈"],75:["❄️ heavy snow","❄️ 강한 눈"],77:["🌨️ snow grains","🌨️ 싸락눈"],80:["🌦️ light showers","🌦️ 약한 소나기"],81:["🌧️ showers","🌧️ 소나기"],82:["⛈️ heavy showers","⛈️ 강한 소나기"],85:["🌨️ light snow showers","🌨️ 약한 눈 소나기"],86:["❄️ heavy snow showers","❄️ 강한 눈 소나기"],95:["⛈️ thunderstorm","⛈️ 뇌우"],96:["⛈️ thunderstorm w/ hail","⛈️ 우박 동반 뇌우"],99:["⛈️ severe thunderstorm","⛈️ 강한 뇌우"]}[i];return r?o?r[1]:r[0]:o?"☁️ 알 수 없음":"☁️ unknown"}async tryReverseGeocode(i,o){var s,r,l,c,u,f,v,w;try{const x=await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${i}&lon=${o}&zoom=18&addressdetails=1`,{headers:{Accept:"application/json"}});if(x.ok){const _=await x.json(),T=((s=_.address)==null?void 0:s.road)||((r=_.address)==null?void 0:r.pedestrian)||((l=_.address)==null?void 0:l.suburb)||((c=_.address)==null?void 0:c.neighbourhood),$=((u=_.address)==null?void 0:u.city)||((f=_.address)==null?void 0:f.town)||((v=_.address)==null?void 0:v.village)||((w=_.address)==null?void 0:w.county);if(T&&$)this.locationName=`${T}, ${$}`;else if(T)this.locationName=T;else if(_.display_name){const S=_.display_name.split(",");this.locationName=S.slice(0,2).join(",").trim()}this.requestUpdate()}}catch{}}formatDisplayTime(i){const o=g.currentLocale==="ko",s=i||new Date().toISOString(),r=new Date(s);if(isNaN(r.getTime()))return{main:new Date().toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}).toLowerCase(),sub:o?"오늘 · 탭하여 변경":"Today · tap to edit"};const l=new Date,c=r.getFullYear()===l.getFullYear()&&r.getMonth()===l.getMonth()&&r.getDate()===l.getDate(),u=r.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}).toLowerCase();return c?{main:u,sub:o?"오늘 · 탭하여 변경":"Today · tap to edit"}:{main:`${o?`${r.getMonth()+1}월 ${r.getDate()}일`:r.toLocaleDateString([],{month:"short",day:"numeric"})}, ${u}`,sub:o?"지정된 일시 · 탭하여 변경":"Custom date · tap to edit"}}toDatetimeLocalValue(i){const o=i?new Date(i):new Date;if(isNaN(o.getTime()))return"";const s=o.getFullYear(),r=String(o.getMonth()+1).padStart(2,"0"),l=String(o.getDate()).padStart(2,"0"),c=String(o.getHours()).padStart(2,"0"),u=String(o.getMinutes()).padStart(2,"0");return`${s}-${r}-${l}T${c}:${u}`}handleCustomTimeInput(i){if(!i)this.customTimestamp=new Date().toISOString();else{const o=new Date(i);this.customTimestamp=isNaN(o.getTime())?new Date().toISOString():o.toISOString()}this.requestUpdate()}setQuickOffsetMinutes(i){const o=new Date(Date.now()-i*60*1e3);this.customTimestamp=o.toISOString(),this.requestUpdate()}setQuickOffsetDays(i){const o=new Date(Date.now()-i*24*60*60*1e3);this.customTimestamp=o.toISOString(),this.requestUpdate()}setNow(){this.customTimestamp=new Date().toISOString(),this.requestUpdate()}async handleSave(){var w,x,_,T,$,S;const i=g.currentLocale==="ko",o=this.selectedType||"poop",s=((w=g.currentPet)==null?void 0:w.name)||(i?"반려견":"Pet");let r="",l=i?"기록 완료!":"Logged it!",c="";const u=this.customTimestamp||(g.editingEvent?g.editingEvent.timestamp:new Date().toISOString()),f={timestamp:u,photoUrl:this.photoUrl||void 0,locationName:this.locationName||(this.lat?`${this.lat.toFixed(4)}, ${(x=this.lng)==null?void 0:x.toFixed(4)}`:void 0),weather:this.weatherText},v=i?qr[this.mood]||this.mood:this.mood;if(o==="poop"){const D=i?this.consNamesKo[this.cons-1]:this.consNames[this.cons-1];r=i?`응가 ${this.cons}단계 (${D}) · ${this.size} · ${v}`:`Type ${this.cons} (${this.consNames[this.cons-1]}) · ${this.size} · ${this.mood}`,this.notes&&(r+=` · ${this.notes}`),f.consistency=this.cons,f.consistencyLabel=this.consNames[this.cons-1],f.size=this.size,f.mood=this.mood,l=i?"응가 기록 완료!":"Logged it!",c=i?`${s}의 배변 기록: ${this.cons}단계 · ${this.size}`:`${s}’s log: Type ${this.cons} · ${this.size}`}else if(o==="pee")r=i?`쉬야 · ${this.size} · ${v}`:`Pee · ${this.size} · ${this.mood}`,this.notes&&(r+=` · ${this.notes}`),f.size=this.size,f.mood=this.mood,l=i?"쉬야 완료!":"Marked!",c=i?"영역 표시 기록됨.":"Territory marked.";else if(o==="vomit")r=i?`구토 · ${this.cons}단계 · ${v}`:`Vomit · Type ${this.cons} · ${this.mood}`,this.notes&&(r+=` · ${this.notes}`),f.consistency=this.cons,f.consistencyLabel=this.consNames[this.cons-1],f.mood=this.mood,l=i?"구토 기록됨 & 주의 알림":"Logged and flagged",c=i?"24시간 내 반복 발생 시 알림을 드립니다.":"Two in 48h will alert you.";else if(o==="medicine"){const D=this.customMedName||this.selectedMed;r=`${D} (${this.selectedMedDose})`,this.notes&&(r+=` · ${this.notes}`),f.medication=D,f.dosage=this.selectedMedDose,l=i?"투약 기록 완료":`${D} given`,c=i?"다음 투약 일정에 반영됩니다.":"Next dose scheduled."}else if(o==="weight")r=i?`체중 측정: ${this.weightKg.toFixed(1)} kg`:`Weigh-in: ${this.weightKg.toFixed(1)} kg`,this.notes&&(r+=` · ${this.notes}`),f.weightKg=this.weightKg,l=i?"체중 저장됨":"Weigh-in saved",c=`${this.weightKg.toFixed(1)} kg · ${i?"체중 기록 완료":"recorded"}`;else if(o==="walk"){const D=i?((_=this.walkOptions.find(M=>M.min===this.walkMin))==null?void 0:_.minKo)||this.walkMin:this.walkMin;r=i?`산책 · ${D} (${this.walkKm}) · ${v}`:`Walk · ${this.walkMin} (${this.walkKm}) · ${this.mood}`,this.notes&&(r+=` · ${this.notes}`),f.walkDuration=this.walkMin,f.walkDistance=this.walkKm,f.mood=this.mood,l=i?"산책 기록 완료":"Walk logged",c=`${D} · ${this.walkKm} · ${i?"좋은 운동이었어요!":"Good effort."}`}else if(o==="vet"){const D=i?((T=this.vetReasons.find(M=>M.id===this.vetReason))==null?void 0:T.nameKo)||this.vetReason:this.vetReason;r=i?`병원 진료: ${D}`:`Vet visit: ${this.vetReason}`,this.notes&&(r+=` · ${this.notes}`),f.visitReason=this.vetReason,l=i?"진료 기록 추가":"Visit added",c=i?"진료 내역 및 알림이 설정되었습니다.":"Reminder set."}else if(o==="symptom"){const D=i?(($=this.symptomOptions.find(M=>M.id===this.symptom))==null?void 0:$.nameKo)||this.symptom:this.symptom;r=i?`증상: ${D}`:`Symptom: ${this.symptom}`,this.notes&&(r+=` · ${this.notes}`),f.symptom=this.symptom,l=i?"증상 기록됨":"Symptom noted",c=i?"수의사 진료용 요약에 추가되었습니다.":"Added to vet-ready summary."}else if(o==="food"||o==="water"){const D=i?((S=this.portionOptions.find(M=>M.id===this.portion))==null?void 0:S.nameKo)||this.portion:this.portion;r=i?`식사: ${D}`:`Meal: ${this.portion}`,this.notes&&(r+=` · ${this.notes}`),f.portion=this.portion,l=i?"식사 기록 완료":"Meal recorded",c=`${D}`}if(!this.isSaving){this.isSaving=!0;try{g.editingEvent?(await g.updateEvent(g.editingEvent.id,o,r,f,this.lat,this.lng,u),l=i?"기록 수정 완료!":"Entry updated!",c=i?"수정사항이 저장되었습니다.":"Changes saved."):await g.logEvent(o,r,f,this.lat,this.lng,u),this.close(),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:l,sub:c}}))}catch(D){console.error("Error saving event:",D)}finally{this.isSaving=!1}}}async handleDelete(){if(!g.editingEvent)return;const i=g.currentLocale==="ko",o=i?"정말 이 기록을 삭제하시겠습니까?":"Are you sure you want to delete this entry?";if(!window.confirm(o))return;const s=g.editingEvent.id;await g.deleteEvent(s),this.close(),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:i?"기록 삭제됨":"Entry deleted",sub:i?"기록이 정상적으로 삭제되었습니다.":"The log entry has been removed."}}))}handleSpotSelected(i){this.lat=i.detail.lat,this.lng=i.detail.lng,i.detail.locationName?this.locationName=i.detail.locationName:this.lat!==void 0&&this.lng!==void 0&&(this.locationName=`${this.lat.toFixed(4)}, ${this.lng.toFixed(4)}`),this.lat!==void 0&&this.lng!==void 0&&this.fetchWeather(this.lat,this.lng),this.showMapPicker=!1,this.requestUpdate()}close(){this.selectedType=null,this.notes="",this.photoUrl="",this.customMedName="",this.locationName="",this.lat=void 0,this.lng=void 0,this.customTimestamp="",this.isLocating=!1,this.showLocationPicker=!1,this.showMapPicker=!1,this.showTimePicker=!1,g.closeLogger()}render(){var Z,W,st,O,V,at,A;if(!g.loggerModalOpen)return null;const i=!this.selectedType,o=!!this.selectedType,s=g.currentLocale==="ko",r={poop:s?["배변 세부 기록","두 번 탭으로 간단하게"]:["A fine specimen","Two taps and you’re done"],pee:s?["영역 표시 업데이트","위치와 규모"]:["Territory update","Where and how long"],vomit:s?["소화 이상 기록","수의사 진료에 도움이 됩니다"]:["Sorry, buddy","Details help the vet"],medicine:s?["투약 완료","일정에 체크하세요"]:["Dose given","Tick it off the schedule"],weight:s?["체중 측정","주기적인 측정이 중요해요"]:["Weigh-in","Monthly is plenty"],vet:s?["병원 진료","진료 내용과 날짜"]:["Vet visit","Reason and date"],walk:s?["즐거운 야외 산책","얼마나 걸었나요?"]:["Out and about","How long were you gone?"],symptom:s?["이상 징후 기록","생생할 때 기록해두세요"]:["Something’s off","Describe it while it’s fresh"],food:s?["식사 및 사료","급여량과 종류"]:["Mealtime","Portion and food"]},l=!!g.editingEvent,c=l?s?["기록 수정하기","내용을 변경하거나 삭제할 수 있습니다"]:["Edit Log Entry","Update details or delete entry"]:this.selectedType?r[this.selectedType]||(s?["기록 세부사항","확인"]:["What happened?","Confirm details"]):s?["무슨 일이 있었나요?","종류를 선택하세요"]:["What happened?","Pick a type"],u=c[0],f=c[1],v=this.selectedType==="poop"||this.selectedType==="vomit",w=this.selectedType==="poop"||this.selectedType==="pee",x=this.selectedType==="weight",_=this.selectedType==="medicine",T=this.selectedType==="walk",$=this.selectedType==="vet",S=this.selectedType==="symptom",D=this.selectedType==="food"||this.selectedType==="water",M=this.selectedType==="poop"||this.selectedType==="pee"||this.selectedType==="vomit"||this.selectedType==="walk";return b`
      <div class="sheet-overlay">
        <div class="sheet-backdrop" @click=${()=>this.close()}></div>
        <div class="sheet-body">
          <div class="sheet-top">
            <div class="sheet-handle"></div>
            <div class="sheet-header-row">
              ${o&&!l?b`
                    <div class="sheet-back-icon" @click=${()=>this.handleBackToTypes()}>‹</div>
                  `:null}
              <div style="flex: 1; min-width: 0;">
                <div class="sheet-title">${u}</div>
                <div class="sheet-sub">${f}</div>
              </div>
              <div class="sheet-close-btn" @click=${()=>this.close()}>✕</div>
            </div>
          </div>

          <div class="sheet-scroll-content">
            ${i?b`
                  <div class="type-grid">
                    ${this.typeDefs.map(k=>b`
                        <div
                          class="type-card"
                          @click=${()=>this.handleSelectType(k.id)}
                        >
                          <div class="type-icon" style="background: ${k.c};">
                            ${k.tag}
                          </div>
                          <div>
                            <div class="type-card-name">${s?k.nameKo:k.name}</div>
                            <div class="type-card-sub">${s?k.subKo:k.sub}</div>
                          </div>
                        </div>
                      `)}
                  </div>
                `:b`
                  <div class="form-col">
                    <!-- Top Pill Row: Time & Status/Weather -->
                    <div class="pill-row">
                      <div
                        class="pill-info ${this.showTimePicker?"active-picker":""}"
                        @click=${()=>{this.showTimePicker=!this.showTimePicker,this.showTimePicker&&(this.showLocationPicker=!1)}}
                      >
                        <div class="pill-label">${s?"시간":"Time"} ⏱️</div>
                        <div class="pill-val">
                          ${this.formatDisplayTime(this.customTimestamp).main}
                        </div>
                        <div class="pill-sub">
                          ${this.formatDisplayTime(this.customTimestamp).sub}
                        </div>
                      </div>
                      <div class="pill-info">
                        <div class="pill-label">${s?"상태 / 날씨":"Weather / GPS"}</div>
                        <div class="pill-val">${this.isFetchingWeather?s?"날씨 확인중…":"fetching…":this.weatherText||"—"}</div>
                        <div class="pill-sub">${this.weatherText?s?"실시간 날씨":"Live weather":s?"GPS 기반":"GPS synced"}</div>
                      </div>
                    </div>

                    <!-- Date & Time Picker Card -->
                    ${this.showTimePicker?b`
                          <div class="time-picker-card">
                            <div class="picker-header">
                              <span class="picker-title">${s?"일시 및 시간 변경":"Adjust Date & Time"}</span>
                              <button class="picker-close-btn" @click=${()=>this.showTimePicker=!1}>✕</button>
                            </div>

                            <div class="picker-section-lbl">${s?"빠른 시간 선택":"Quick Time"}</div>
                            <div class="location-chips-row">
                              <div class="location-chip" @click=${()=>this.setNow()}>
                                ⏱️ ${s?"지금":"Now"}
                              </div>
                              <div class="location-chip" @click=${()=>this.setQuickOffsetMinutes(15)}>
                                ${s?"15분 전":"15m ago"}
                              </div>
                              <div class="location-chip" @click=${()=>this.setQuickOffsetMinutes(30)}>
                                ${s?"30분 전":"30m ago"}
                              </div>
                              <div class="location-chip" @click=${()=>this.setQuickOffsetMinutes(60)}>
                                ${s?"1시간 전":"1h ago"}
                              </div>
                              <div class="location-chip" @click=${()=>this.setQuickOffsetDays(1)}>
                                ${s?"어제 이맘때":"Yesterday"}
                              </div>
                            </div>

                            <div class="picker-section-lbl">${s?"직접 날짜 & 시간 지정":"Exact Date & Time"}</div>
                            <div class="custom-loc-input-row">
                              <input
                                type="datetime-local"
                                class="custom-time-input"
                                .value=${this.toDatetimeLocalValue(this.customTimestamp)}
                                @input=${k=>this.handleCustomTimeInput(k.target.value)}
                              />
                            </div>
                          </div>
                        `:null}

                    <!-- 1. Consistency (Poop / Vomit) -->
                    ${v?b`
                          <div>
                            <div class="section-lbl">${s?"변 상태 / 형태":"Consistency"}</div>
                            <div class="section-sub">
                              Type ${this.cons} — ${s?this.consNamesKo[this.cons-1]:this.consNames[this.cons-1]}
                            </div>
                            <div class="cons-row">
                              ${[1,2,3,4,5,6,7].map(k=>b`
                                  <div
                                    class="cons-opt ${this.cons===k?"active":""}"
                                    @click=${()=>this.cons=k}
                                  >
                                    <div
                                      style="font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif); font-weight: 800; font-size: 15px; color: #17140F;"
                                    >
                                      ${k}
                                    </div>
                                    <div
                                      style="width: ${5+k*2.4}px; height: 5px; border-radius: 5px; background: #17140F;"
                                    ></div>
                                  </div>
                                `)}
                            </div>
                          </div>
                        `:null}

                    <!-- 2. Size (Poop / Pee) -->
                    ${w?b`
                          <div>
                            <div class="section-lbl" style="margin-bottom: 10px;">
                              ${s?"크기 / 양":"Size"}
                            </div>
                            <div class="size-row">
                              ${["S","M","L","XL"].map(k=>b`
                                  <div
                                    class="size-btn ${this.size===k?"active":""}"
                                    @click=${()=>this.size=k}
                                  >
                                    ${k}
                                  </div>
                                `)}
                            </div>
                          </div>
                        `:null}

                    <!-- 3. Weight Stepper (Weight) -->
                    ${x?b`
                          <div>
                            <div class="section-lbl" style="margin-bottom: 10px;">
                              ${s?"체중 측정":"Body Weight"}
                            </div>
                            <div class="weight-card">
                              <div
                                class="step-btn"
                                @click=${()=>this.weightKg=Math.max(.5,Number((this.weightKg-.1).toFixed(1)))}
                              >
                                −
                              </div>
                              <div class="weight-readout">
                                <div class="weight-val">${this.weightKg.toFixed(1)}</div>
                                <div class="weight-unit">
                                  KG · ${s?"최근":"LAST"} 14.2 KG
                                </div>
                              </div>
                              <div
                                class="step-btn"
                                @click=${()=>this.weightKg=Number((this.weightKg+.1).toFixed(1))}
                              >
                                +
                              </div>
                            </div>
                          </div>
                        `:null}

                    <!-- 4. Medicine Options (Medicine) -->
                    ${_?b`
                          <div>
                            <div class="section-lbl" style="margin-bottom: 10px;">
                              ${s?"복용 약품":"Which one"}
                            </div>
                            <div class="med-list">
                              ${this.medOptions.map(k=>b`
                                  <div
                                    class="med-item ${this.selectedMed===k.name?"active":""}"
                                    @click=${()=>{this.selectedMed=k.name,this.selectedMedDose=k.dose}}
                                  >
                                    <div class="med-dot"></div>
                                    <div class="med-name">${k.name}</div>
                                    <div class="med-dose">${k.dose}</div>
                                  </div>
                                `)}
                            </div>
                          </div>
                        `:null}

                    <!-- 5. Walk (Live tracking & Quick logs) -->
                    ${T?b`
                          <div style="display: flex; flex-direction: column; gap: 14px;">
                            <!-- Start Live Walk Button -->
                            <div
                              class="start-walk-btn"
                              @click=${()=>{g.closeLogger(),g.startLiveWalk(this.walkPetIds)}}
                            >
                              <div class="play-icon-circle">
                                <div class="play-triangle"></div>
                              </div>
                              <div style="flex: 1; min-width: 0;">
                                <div class="start-walk-title">${s?"지금 산책 시작":"Start walk now"}</div>
                                <div class="start-walk-sub">${s?"시간 측정 및 경로 기록":"Times it and traces the route"}</div>
                              </div>
                            </div>

                            <!-- Who's Coming Multi-Pet Selector -->
                            ${g.pets.length>1?b`
                                  <div>
                                    <div class="section-lbl" style="margin-bottom: 9px;">
                                      ${s?"누가 가나요?":"Who's coming"}
                                    </div>
                                    <div class="who-chips-row">
                                      ${g.pets.map(k=>{const R=this.walkPetIds.includes(k.id);return b`
                                          <div
                                            class="who-pet-chip ${R?"active":""}"
                                            @click=${()=>{R?this.walkPetIds.length>1&&(this.walkPetIds=this.walkPetIds.filter(U=>U!==k.id)):this.walkPetIds=[...this.walkPetIds,k.id]}}
                                          >
                                            <div class="who-pet-avatar">${k.name.charAt(0).toUpperCase()}</div>
                                            <div class="who-pet-name">${k.name}</div>
                                            <div class="who-tick-circle">${R?"✓":""}</div>
                                          </div>
                                        `})}
                                    </div>
                                  </div>
                                `:null}

                            <!-- Divider -->
                            <div class="walk-or-divider">
                              <div class="walk-or-line"></div>
                              <div class="walk-or-text">
                                ${s?"또는 이미 완료한 산책 기록":"OR LOG ONE YOU ALREADY DID"}
                              </div>
                              <div class="walk-or-line"></div>
                            </div>

                            <!-- Manual Walk Duration Selector -->
                            <div>
                              <div class="section-lbl" style="margin-bottom: 10px;">
                                ${s?"산책 시간":"How long"}
                              </div>
                              <div class="walk-row">
                                ${this.walkOptions.map(k=>b`
                                    <div
                                      class="walk-btn ${this.walkMin===k.min?"active":""}"
                                      @click=${()=>{this.walkMin=k.min,this.walkKm=k.km}}
                                    >
                                      <div class="walk-min">${s?k.minKo:k.min}</div>
                                      <div class="walk-km">${k.km}</div>
                                    </div>
                                  `)}
                              </div>
                            </div>
                          </div>
                        `:null}


                    <!-- 6. Vet Visit Reason (Vet) -->
                    ${$?b`
                          <div>
                            <div class="section-lbl" style="margin-bottom: 10px;">
                              ${s?"진료 내용":"Visit Reason"}
                            </div>
                            <div class="wrap-pill-row">
                              ${this.vetReasons.map(k=>b`
                                  <div
                                    class="mood-pill ${this.vetReason===k.id?"active":""}"
                                    @click=${()=>this.vetReason=k.id}
                                  >
                                    ${s?k.nameKo:k.name}
                                  </div>
                                `)}
                            </div>
                          </div>
                        `:null}

                    <!-- 7. Symptom Tags (Symptom) -->
                    ${S?b`
                          <div>
                            <div class="section-lbl" style="margin-bottom: 10px;">
                              ${s?"관찰된 증상":"Symptom observed"}
                            </div>
                            <div class="wrap-pill-row">
                              ${this.symptomOptions.map(k=>b`
                                  <div
                                    class="mood-pill ${this.symptom===k.id?"active":""}"
                                    @click=${()=>this.symptom=k.id}
                                  >
                                    ${s?k.nameKo:k.name}
                                  </div>
                                `)}
                            </div>
                          </div>
                        `:null}

                    <!-- 8. Food Portion (Food/Water) -->
                    ${D?b`
                          <div>
                            <div class="section-lbl" style="margin-bottom: 10px;">
                              ${s?"급여량":"Portion"}
                            </div>
                            <div class="wrap-pill-row">
                              ${this.portionOptions.map(k=>b`
                                  <div
                                    class="mood-pill ${this.portion===k.id?"active":""}"
                                    @click=${()=>this.portion=k.id}
                                  >
                                    ${s?k.nameKo:k.name}
                                  </div>
                                `)}
                            </div>
                          </div>
                        `:null}

                    <!-- 9. Mood on Delivery (General / Potty) -->
                    ${M?b`
                          <div>
                            <div class="section-lbl" style="margin-bottom: 10px;">
                              ${s?"기분 & 태도":"Mood on delivery"}
                            </div>
                            <div class="wrap-pill-row">
                              ${this.moodOptions.map(k=>b`
                                  <div
                                    class="mood-pill ${this.mood===k.id?"active":""}"
                                    @click=${()=>this.mood=k.id}
                                  >
                                    ${s?k.nameKo:k.name}
                                  </div>
                                `)}
                            </div>
                          </div>
                        `:null}

                    <!-- Location & Logged By -->
                    <div class="pill-row">
                      <div
                        class="pill-info ${this.showLocationPicker?"active-picker":""}"
                        @click=${()=>this.showLocationPicker=!this.showLocationPicker}
                      >
                        <div class="pill-label">${s?"위치":"Location"} 📍</div>
                        <div class="pill-val" style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                          ${this.isLocating?s?"GPS 확인 중...":"Locating GPS...":this.locationName||(this.lat?`${this.lat.toFixed(4)}, ${(Z=this.lng)==null?void 0:Z.toFixed(4)}`:s?"위치 추가":"Add location")}
                        </div>
                        <div class="pill-sub">
                          ${this.lat?s?"GPS 연결됨 · 탭하여 변경":"GPS Tagged · tap to edit":this.locationName?s?"장소 지정됨 · 탭하여 변경":"Custom spot · tap to edit":s?"탭하여 GPS/장소 태그":"Tap to tag GPS/spot"}
                        </div>
                      </div>
                      <div class="pill-info">
                        <div class="pill-label">${s?"기록자":"Logged by"}</div>
                        <div class="pill-val">
                          ${((W=g.currentUser)==null?void 0:W.displayName)||((V=(O=(st=g.currentHousehold)==null?void 0:st.members)==null?void 0:O[0])==null?void 0:V.displayName)||"Me"}
                        </div>
                        <div class="pill-sub">${s?"가족 구성원":"tap to change"}</div>
                      </div>
                    </div>

                    ${this.showLocationPicker?b`
                          <div class="location-picker-card">
                            <div class="picker-header">
                              <span class="picker-title">${s?"위치 태그 설정":"Attach Location"}</span>
                              <button class="picker-close-btn" @click=${()=>this.showLocationPicker=!1}>✕</button>
                            </div>

                            <div class="gps-btn-row">
                              <button
                                class="gps-action-btn ${this.lat?"tagged":""}"
                                @click=${()=>this.fetchCurrentLocation()}
                                ?disabled=${this.isLocating}
                              >
                                <span>${this.isLocating?"⏳":this.lat?"📍":"📡"}</span>
                                <span>
                                  ${this.isLocating?s?"GPS 위치 수신 중...":"Getting GPS...":this.lat?s?`GPS 연결됨 (${this.lat.toFixed(4)}, ${(at=this.lng)==null?void 0:at.toFixed(4)})`:`GPS Tagged (${this.lat.toFixed(4)}, ${(A=this.lng)==null?void 0:A.toFixed(4)})`:s?"현재 GPS 위치 태그하기":"Tag Current GPS"}
                                </span>
                              </button>
                              ${this.lat||this.locationName?b`
                                    <button class="gps-clear-btn" @click=${()=>this.clearLocation()}>
                                      ${s?"초기화":"Clear"}
                                    </button>
                                  `:null}
                            </div>

                            <!-- Open Interactive Map Spot Picker -->
                            <button
                              class="map-picker-trigger-btn"
                              @click=${()=>this.showMapPicker=!0}
                            >
                              <span>🗺️</span>
                              <span>${s?"지도에서 핀 찍기 / 위치 찾기":"Find / Pin Spot on Map"}</span>
                            </button>

                            <div class="picker-section-lbl">${s?"자주 쓰는 장소":"Quick Spots"}</div>
                            <div class="location-chips-row">
                              ${(s?this.locationPresetsKo:this.locationPresets).map(k=>b`
                                  <div
                                    class="location-chip ${this.locationName===k?"active":""}"
                                    @click=${()=>this.selectPreset(k)}
                                  >
                                    ${k}
                                  </div>
                                `)}
                            </div>

                            <div class="custom-loc-input-row">
                              <input
                                type="text"
                                class="custom-loc-input"
                                placeholder="${s?"직접 장소명 입력 (예: 센트럴파크 잔디밭)":"Or type custom name (e.g. Elm St & 4th)..."}"
                                .value=${this.locationName}
                                @input=${k=>this.locationName=k.target.value}
                              />
                            </div>
                          </div>
                        `:null}

                    <!-- Photo & Notes -->
                    <div class="photo-notes-row">
                      <div class="photo-box" @click=${()=>this.triggerPhotoUpload()}>
                        ${this.photoUrl?b`<img src="${this.photoUrl}" alt="Photo" />`:b`
                              <div class="photo-plus">+</div>
                              <div class="photo-lbl">${s?"사진":"photo"}</div>
                            `}
                      </div>
                      <div class="notes-box">
                        <div class="pill-label">${s?"메모":"Notes"}</div>
                        <textarea
                          style="border: none; background: transparent; font-size: 13px; font-weight: 600; color: #17140F; margin-top: 5px; line-height: 1.4; resize: none; height: 100%; font-family: inherit; outline: none;"
                          placeholder="${s?"수의사에게 전할 참고사항 입력...":"Anything the vet would want to know…"}"
                          .value=${this.notes}
                          @input=${k=>this.notes=k.target.value}
                        ></textarea>
                      </div>
                    </div>

                    <div style="height: 6px;"></div>
                  </div>
                `}
          </div>

          ${o?b`
                <div class="sheet-bottom" style="${l?"display: flex; gap: 10px; align-items: center;":""}">
                  ${l?b`
                        <button
                          class="log-delete-btn"
                          ?disabled=${this.isSaving}
                          style="${this.isSaving?"opacity: 0.5; pointer-events: none;":""}"
                          @click=${()=>this.handleDelete()}
                          title=${s?"기록 삭제":"Delete log"}
                        >
                          🗑️ ${s?"삭제":"Delete"}
                        </button>
                      `:null}
                  <div
                    class="log-submit-btn ${this.isSaving?"is-loading":""}"
                    style="flex: 1; ${this.isSaving?"pointer-events: none;":""}"
                    @click=${()=>this.handleSave()}
                  >
                    ${this.isSaving?b`
                          <div class="btn-spinner"></div>
                          <span>${l?s?"수정 저장 중...":"Saving...":s?"기록 중...":"Logging..."}</span>
                        `:l?s?"수정 완료!":"Save changes":s?"기록하기!":"Log it!"}
                  </div>
                </div>
              `:null}
        </div>

        <!-- Interactive Map Spot Picker Modal -->
        <dooty-map-picker
          .open=${this.showMapPicker}
          .initialLat=${this.lat}
          .initialLng=${this.lng}
          .initialLocationName=${this.locationName}
          @spot-selected=${k=>this.handleSpotSelected(k)}
          @close=${()=>this.showMapPicker=!1}
        ></dooty-map-picker>
      </div>
    `}},ei.styles=zt`
    :host {
      display: block;
    }

    .sheet-overlay {
      position: absolute;
      inset: 0;
      z-index: 180;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
    }

    .sheet-backdrop {
      position: absolute;
      inset: 0;
      background: rgba(23, 20, 15, 0.45);
      animation: fadeIn 0.2s ease;
    }

    .sheet-body {
      position: relative;
      background: #FFFBF2;
      border: 3px solid #17140F;
      border-bottom: none;
      border-radius: 30px 30px 0 0;
      width: 100%;
      max-width: 480px;
      max-height: 92%;
      display: flex;
      flex-direction: column;
      animation: tb-sheet 0.3s cubic-bezier(0.2, 0.85, 0.25, 1) both;
      box-shadow: 0 -10px 32px rgba(23, 20, 15, 0.2);
      overflow: hidden;
      box-sizing: border-box;
    }

    .sheet-top {
      padding: 14px 18px 8px;
      display: flex;
      flex-direction: column;
      gap: 11px;
      flex: none;
      background: #FFFBF2;
      border-bottom: 2px solid rgba(23, 20, 15, 0.06);
    }

    .sheet-handle {
      width: 52px;
      height: 5px;
      border-radius: 5px;
      background: #17140F;
      margin: 0 auto;
    }

    .sheet-header-row {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .sheet-back-icon {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: 2.5px solid #17140F;
      background: #FFF;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #17140F;
      font-size: 16px;
      font-weight: 800;
      cursor: pointer;
      flex: none;
      box-shadow: 2px 2px 0 #17140F;
      user-select: none;
    }

    .sheet-title {
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 22px;
      color: #17140F;
      line-height: 1.15;
      letter-spacing: -0.7px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .sheet-sub {
      font-size: 12px;
      font-weight: 600;
      color: #6A6152;
      margin-top: 1px;
    }

    .sheet-close-btn {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 3px solid #17140F;
      background: #FFF;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #17140F;
      font-size: 15px;
      font-weight: 800;
      cursor: pointer;
      flex: none;
      box-shadow: 2px 2px 0 #17140F;
      user-select: none;
      transition: transform 0.1s ease, box-shadow 0.1s ease;
    }

    .sheet-close-btn:active {
      transform: translate(1px, 1px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .sheet-scroll-content {
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
      padding: 14px 18px 20px;
      box-sizing: border-box;
      -webkit-overflow-scrolling: touch;
    }

    /* Step 1 Grid */
    .type-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }

    .type-card {
      border: 3px solid #17140F;
      border-radius: 20px;
      padding: 14px;
      display: flex;
      flex-direction: column;
      gap: 9px;
      cursor: pointer;
      min-height: 94px;
      box-sizing: border-box;
      background: #FFF;
      box-shadow: 3px 3px 0 #17140F;
      transition: transform 0.1s ease, box-shadow 0.1s ease;
      user-select: none;
    }

    .type-card:hover {
      transform: translate(-1px, -1px);
      box-shadow: 5px 5px 0 #17140F;
    }

    .type-card:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .type-icon {
      width: 36px;
      height: 36px;
      border-radius: 13px;
      border: 2.5px solid #17140F;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 15px;
      color: #17140F;
    }

    .type-card-name {
      font-size: 14.5px;
      font-weight: 800;
      color: #17140F;
    }

    .type-card-sub {
      font-size: 11px;
      font-weight: 600;
      color: #6A6152;
      margin-top: 2px;
      line-height: 1.3;
    }

    /* Step 2 Form */
    .form-col {
      display: flex;
      flex-direction: column;
      gap: 18px;
    }

    .pill-row {
      display: flex;
      gap: 10px;
    }

    .pill-info {
      flex: 1;
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 16px;
      padding: 11px 13px;
      box-shadow: 2px 2px 0 #17140F;
      box-sizing: border-box;
      cursor: pointer;
      user-select: none;
      transition: transform 0.1s ease, box-shadow 0.1s ease, background 0.1s ease;
    }

    .pill-info:hover {
      background: #FFFBF0;
    }

    .pill-info.active-picker {
      background: #FFE8A3;
      box-shadow: 1px 1px 0 #17140F;
      transform: translateY(1px);
    }

    .location-picker-card, .time-picker-card {
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 18px;
      padding: 14px;
      box-shadow: 3px 3px 0 #17140F;
      display: flex;
      flex-direction: column;
      gap: 10px;
      animation: fadeIn 0.15s ease-out;
    }

    .custom-time-input {
      width: 100%;
      border: 2.5px solid #17140F;
      border-radius: 12px;
      padding: 8px 12px;
      font-size: 13.5px;
      font-family: inherit;
      font-weight: 800;
      color: #17140F;
      background: #FFFBF2;
      box-sizing: border-box;
      outline: none;
    }

    .custom-time-input:focus {
      border-color: #2B5BE8;
    }

    .picker-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .picker-title {
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 14px;
      color: #17140F;
    }

    .picker-close-btn {
      background: #F3EFE6;
      border: 2px solid #17140F;
      border-radius: 8px;
      width: 26px;
      height: 26px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-weight: 800;
      font-size: 12px;
    }

    .gps-btn-row {
      display: flex;
      gap: 8px;
    }

    .gps-action-btn {
      flex: 1;
      background: #FFE485;
      border: 2.5px solid #17140F;
      border-radius: 12px;
      padding: 9px 12px;
      font-family: inherit;
      font-weight: 800;
      font-size: 13px;
      color: #17140F;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      box-shadow: 2px 2px 0 #17140F;
      transition: transform 0.08s ease, box-shadow 0.08s ease;
    }

    .gps-action-btn.tagged {
      background: #9EE0C8;
    }

    .gps-action-btn:hover {
      filter: brightness(1.03);
    }

    .gps-action-btn:active {
      transform: translate(1px, 1px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .gps-clear-btn {
      background: #FFF;
      border: 2.5px solid #17140F;
      border-radius: 12px;
      padding: 9px 12px;
      font-family: inherit;
      font-weight: 800;
      font-size: 12px;
      color: #17140F;
      cursor: pointer;
      box-shadow: 2px 2px 0 #17140F;
    }

    .map-picker-trigger-btn {
      width: 100%;
      background: #FFF;
      border: 2.5px solid #17140F;
      border-radius: 12px;
      padding: 10px 14px;
      font-family: inherit;
      font-weight: 800;
      font-size: 13px;
      color: #17140F;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 7px;
      box-shadow: 2px 2px 0 #17140F;
      transition: transform 0.08s ease, box-shadow 0.08s ease, background 0.08s ease;
      box-sizing: border-box;
    }

    .map-picker-trigger-btn:hover {
      background: #FFFBF2;
    }

    .map-picker-trigger-btn:active {
      transform: translate(1px, 1px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .picker-section-lbl {
      font-size: 10px;
      font-weight: 800;
      letter-spacing: 1px;
      color: #9A9080;
      text-transform: uppercase;
      margin-top: 2px;
    }

    .location-chips-row {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }

    .location-chip {
      background: #F3EFE6;
      border: 2px solid #17140F;
      border-radius: 10px;
      padding: 5px 9px;
      font-size: 11.5px;
      font-weight: 700;
      color: #17140F;
      cursor: pointer;
      box-shadow: 1.5px 1.5px 0 #17140F;
      transition: all 0.08s ease;
    }

    .location-chip.active {
      background: #FFCE2E;
      box-shadow: 0.5px 0.5px 0 #17140F;
      transform: translateY(1px);
    }

    .custom-loc-input-row {
      margin-top: 2px;
    }

    .custom-loc-input {
      width: 100%;
      border: 2.5px solid #17140F;
      border-radius: 12px;
      padding: 8px 12px;
      font-size: 13px;
      font-family: inherit;
      font-weight: 600;
      color: #17140F;
      background: #FFFBF2;
      box-sizing: border-box;
      outline: none;
    }

    .custom-loc-input:focus {
      border-color: #2B5BE8;
    }

    .pill-label {
      font-size: 9.5px;
      font-weight: 800;
      letter-spacing: 1.2px;
      color: #9A9080;
      text-transform: uppercase;
    }

    .pill-val {
      font-size: 14.5px;
      font-weight: 800;
      color: #17140F;
      margin-top: 3px;
    }

    .pill-sub {
      font-size: 11px;
      font-weight: 600;
      color: #6A6152;
      margin-top: 1px;
    }

    .section-lbl {
      font-size: 14.5px;
      font-weight: 800;
      color: #17140F;
    }

    .section-sub {
      font-size: 11.5px;
      font-weight: 600;
      color: #6A6152;
      margin: 2px 0 10px;
    }

    /* 7-Point Consistency Scale */
    .cons-row {
      display: flex;
      gap: 6px;
    }

    .cons-opt {
      flex: 1;
      min-height: 54px;
      border-radius: 15px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 4px;
      cursor: pointer;
      border: 3px solid #17140F;
      background: #FFF;
      box-shadow: 3px 3px 0 #17140F;
      transition: transform 0.1s ease, box-shadow 0.1s ease, background 0.1s ease;
      user-select: none;
    }

    .cons-opt.active {
      background: #FFCE2E;
      box-shadow: 1px 1px 0 #17140F;
      transform: translateY(2px);
    }

    /* Size Buttons */
    .size-row {
      display: flex;
      gap: 9px;
    }

    .size-btn {
      flex: 1;
      min-height: 48px;
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 16px;
      background: #FFF;
      color: #17140F;
      border: 3px solid #17140F;
      box-shadow: 3px 3px 0 #17140F;
      transition: transform 0.1s ease, box-shadow 0.1s ease, background 0.1s ease;
      user-select: none;
    }

    .size-btn.active {
      background: #FFCE2E;
      box-shadow: 1px 1px 0 #17140F;
      transform: translateY(2px);
    }

    /* Weight Stepper */
    .weight-card {
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 20px;
      padding: 15px;
      display: flex;
      align-items: center;
      gap: 14px;
      box-shadow: 3px 3px 0 #17140F;
    }

    .step-btn {
      width: 46px;
      height: 46px;
      border-radius: 15px;
      border: 3px solid #17140F;
      background: #FFCE2E;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      font-weight: 800;
      color: #17140F;
      cursor: pointer;
      flex: none;
      box-shadow: 2px 2px 0 #17140F;
      user-select: none;
      transition: transform 0.1s ease;
    }

    .step-btn:active {
      transform: translate(1px, 1px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .weight-readout {
      flex: 1;
      text-align: center;
    }

    .weight-val {
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 32px;
      color: #17140F;
      line-height: 1;
      letter-spacing: -1.2px;
    }

    .weight-unit {
      font-size: 10.5px;
      font-weight: 800;
      color: #9A9080;
      letter-spacing: 1px;
      margin-top: 4px;
    }

    /* Medicine List */
    .med-list {
      display: flex;
      flex-direction: column;
      gap: 9px;
    }

    .med-item {
      display: flex;
      align-items: center;
      gap: 12px;
      border-radius: 16px;
      padding: 13px 14px;
      cursor: pointer;
      background: #FFF;
      border: 3px solid #17140F;
      box-shadow: 3px 3px 0 #17140F;
      transition: transform 0.1s ease, box-shadow 0.1s ease, background 0.1s ease;
      user-select: none;
    }

    .med-item.active {
      background: #FFCE2E;
      box-shadow: 1px 1px 0 #17140F;
      transform: translateY(2px);
    }

    .med-dot {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      flex: none;
      border: 2.5px solid #17140F;
      background: #FFF;
    }

    .med-item.active .med-dot {
      background: #FF5A3C;
    }

    .med-name {
      flex: 1;
      min-width: 0;
      font-size: 13.5px;
      font-weight: 800;
      color: #17140F;
    }

    .med-dose {
      font-size: 11.5px;
      font-weight: 700;
      color: #6A6152;
      flex: none;
    }

    /* Walk Duration */
    .walk-row {
      display: flex;
      gap: 8px;
    }

    .walk-btn {
      flex: 1;
      min-height: 54px;
      border-radius: 15px;
      border: 3px solid #17140F;
      background: #FFF;
      box-shadow: 3px 3px 0 #17140F;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2px;
      cursor: pointer;
      user-select: none;
      transition: transform 0.1s ease, box-shadow 0.1s ease, background 0.1s ease;
    }

    .walk-btn.active {
      background: #FFCE2E;
      box-shadow: 1px 1px 0 #17140F;
      transform: translateY(2px);
    }

    .walk-min {
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 15px;
      color: #17140F;
    }

    .walk-km {
      font-size: 9.5px;
      font-weight: 700;
      color: #6A6152;
    }

    /* Start Walk Button & Who's coming */
    .start-walk-btn {
      background: #1FC99B;
      border: 3px solid #17140F;
      border-radius: 22px;
      padding: 15px 16px;
      display: flex;
      align-items: center;
      gap: 13px;
      cursor: pointer;
      box-shadow: 4px 4px 0 #17140F;
      user-select: none;
      box-sizing: border-box;
      transition: transform 0.13s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.13s cubic-bezier(0.23, 1, 0.32, 1), background-color 0.16s ease;
    }

    .start-walk-btn:hover {
      transform: translate(-1px, -1px);
      box-shadow: 6px 6px 0 #17140F;
    }

    .start-walk-btn:active {
      transform: translate(2px, 2px);
      box-shadow: 2px 2px 0 #17140F;
    }

    .play-icon-circle {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      border: 3px solid #17140F;
      background: #FFF;
      flex: none;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-left: 4px;
      box-sizing: border-box;
    }

    .play-triangle {
      width: 0;
      height: 0;
      border-left: 14px solid #17140F;
      border-top: 9px solid transparent;
      border-bottom: 9px solid transparent;
    }

    .start-walk-title {
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 19px;
      color: #17140F;
      letter-spacing: -0.5px;
    }

    .start-walk-sub {
      font-size: 11.5px;
      font-weight: 700;
      color: #0A5A45;
      margin-top: 1px;
    }

    .who-chips-row {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }

    .who-pet-chip {
      display: flex;
      align-items: center;
      gap: 8px;
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 18px;
      padding: 7px 12px 7px 7px;
      cursor: pointer;
      box-shadow: 3px 3px 0 #17140F;
      transition: transform 0.13s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.13s cubic-bezier(0.23, 1, 0.32, 1);
      user-select: none;
    }

    .who-pet-chip.active {
      background: #FFCE2E;
      box-shadow: 1px 1px 0 #17140F;
    }

    .who-pet-chip:active {
      transform: scale(0.965);
    }

    .who-pet-avatar {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      border: 2.5px solid #17140F;
      background: #FFF;
      flex: none;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 12px;
      color: #17140F;
    }

    .who-pet-name {
      font-size: 13px;
      font-weight: 800;
      color: #17140F;
    }

    .who-tick-circle {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      border: 2.5px solid #17140F;
      background: #FFF;
      flex: none;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
      font-weight: 800;
      color: #17140F;
    }

    .who-pet-chip.active .who-tick-circle {
      background: #17140F;
      color: #FFCE2E;
    }

    .walk-or-divider {
      display: flex;
      align-items: center;
      gap: 9px;
      margin: 4px 0;
    }

    .walk-or-line {
      flex: 1;
      height: 2.5px;
      background: #E3D8BE;
    }

    .walk-or-text {
      font-size: 8.5px;
      font-weight: 800;
      color: #9A9080;
      letter-spacing: 1.1px;
    }

    /* Mood on Delivery & Pills */
    .wrap-pill-row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }


    .mood-pill {
      border-radius: 14px;
      padding: 10px 14px;
      cursor: pointer;
      font-size: 13px;
      font-weight: 800;
      min-height: 42px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      background: #FFF;
      color: #17140F;
      border: 3px solid #17140F;
      box-shadow: 3px 3px 0 #17140F;
      user-select: none;
      transition: transform 0.1s ease, box-shadow 0.1s ease, background 0.1s ease;
    }

    .mood-pill.active {
      background: #FFCE2E;
      box-shadow: 1px 1px 0 #17140F;
      transform: translateY(2px);
    }

    /* Photo & Notes */
    .photo-notes-row {
      display: flex;
      gap: 10px;
      align-items: stretch;
    }

    .photo-box {
      width: 98px;
      height: 98px;
      border-radius: 18px;
      flex: none;
      background: repeating-linear-gradient(45deg, #F0E7D3 0 6px, #E3D8BE 6px 12px);
      border: 3px dashed #17140F;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2px;
      cursor: pointer;
      overflow: hidden;
      position: relative;
      user-select: none;
    }

    .photo-box img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .photo-plus {
      font-size: 22px;
      font-weight: 800;
      color: #8A7F68;
      line-height: 1;
    }

    .photo-lbl {
      font-size: 9.5px;
      font-weight: 800;
      color: #8A7F68;
    }

    .notes-box {
      flex: 1;
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 18px;
      padding: 12px 14px;
      display: flex;
      flex-direction: column;
      box-shadow: 2px 2px 0 #17140F;
      box-sizing: border-box;
    }

    .sheet-bottom {
      flex: none;
      padding: 14px 18px 24px;
      background: #FFFBF2;
      border-top: 2px solid rgba(23, 20, 15, 0.06);
    }

    .log-submit-btn {
      background: #FF5A3C;
      border: 3px solid #17140F;
      border-radius: 20px;
      padding: 16px;
      text-align: center;
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 18px;
      color: #FFF;
      cursor: pointer;
      box-shadow: 4px 4px 0 #17140F;
      user-select: none;
      transition: background 0.1s ease, transform 0.1s ease, box-shadow 0.1s ease;
    }

    .log-submit-btn:hover {
      background: #FF7659;
      transform: translate(-1px, -1px);
      box-shadow: 5px 5px 0 #17140F;
    }

    .log-submit-btn:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .log-submit-btn.is-loading {
      background: #E84E32;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      cursor: not-allowed;
      transform: translate(1px, 1px);
      box-shadow: 2px 2px 0 #17140F;
    }

    .btn-spinner {
      width: 18px;
      height: 18px;
      border: 2.5px solid rgba(255, 255, 255, 0.4);
      border-top-color: #FFFFFF;
      border-radius: 50%;
      animation: spin 0.65s linear infinite;
      display: inline-block;
      flex: none;
    }

    .log-delete-btn {
      background: #FFF;
      border: 3px solid #E02424;
      border-radius: 20px;
      padding: 16px 18px;
      text-align: center;
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 16px;
      color: #E02424;
      cursor: pointer;
      box-shadow: 4px 4px 0 #17140F;
      user-select: none;
      transition: background 0.1s ease, transform 0.1s ease, box-shadow 0.1s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      flex: none;
    }

    .log-delete-btn:hover {
      background: #FEE2E2;
      transform: translate(-1px, -1px);
      box-shadow: 5px 5px 0 #17140F;
    }

    .log-delete-btn:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `,ei);dt([z()],rt.prototype,"selectedType",void 0);dt([z()],rt.prototype,"cons",void 0);dt([z()],rt.prototype,"size",void 0);dt([z()],rt.prototype,"mood",void 0);dt([z()],rt.prototype,"selectedMed",void 0);dt([z()],rt.prototype,"selectedMedDose",void 0);dt([z()],rt.prototype,"customMedName",void 0);dt([z()],rt.prototype,"weightKg",void 0);dt([z()],rt.prototype,"walkMin",void 0);dt([z()],rt.prototype,"walkKm",void 0);dt([z()],rt.prototype,"vetReason",void 0);dt([z()],rt.prototype,"symptom",void 0);dt([z()],rt.prototype,"portion",void 0);dt([z()],rt.prototype,"photoUrl",void 0);dt([z()],rt.prototype,"notes",void 0);dt([z()],rt.prototype,"locationName",void 0);dt([z()],rt.prototype,"lat",void 0);dt([z()],rt.prototype,"lng",void 0);dt([z()],rt.prototype,"isLocating",void 0);dt([z()],rt.prototype,"showLocationPicker",void 0);dt([z()],rt.prototype,"showMapPicker",void 0);dt([z()],rt.prototype,"showTimePicker",void 0);dt([z()],rt.prototype,"customTimestamp",void 0);dt([z()],rt.prototype,"walkPetIds",void 0);dt([z()],rt.prototype,"weatherText",void 0);dt([z()],rt.prototype,"isFetchingWeather",void 0);dt([z()],rt.prototype,"isSaving",void 0);rt=dt([At("dooty-sheet")],rt);var ie=function(h,i,o,s){var r=arguments.length,l=r<3?i:s===null?s=Object.getOwnPropertyDescriptor(i,o):s,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,i,o,s);else for(var u=h.length-1;u>=0;u--)(c=h[u])&&(l=(r<3?c(l):r>3?c(i,o,l):c(i,o))||l);return r>3&&l&&Object.defineProperty(i,o,l),l},ii;let Vt=(ii=class extends yt{constructor(){super(...arguments),this.previewUrl="",this.urlInput="",this.activeMode="upload",this.isProcessing=!1,this.errorMessage="",this.petName="",this.petBreed="",this.petBirthday="",this.petPresets=[{emoji:"🐶",bg:"#FFE485",label:"Golden"},{emoji:"🐕",bg:"#FF9E79",label:"Shiba"},{emoji:"🦮",bg:"#B8E1D9",label:"Lab"},{emoji:"🐩",bg:"#EAD5E6",label:"Poodle"},{emoji:"🐱",bg:"#FED7AA",label:"Cat"},{emoji:"🐈‍⬛",bg:"#CBD5E1",label:"Black Cat"},{emoji:"🐾",bg:"#D1FAE5",label:"Paws"},{emoji:"🦴",bg:"#FDE68A",label:"Bone"},{emoji:"🦊",bg:"#FDBA74",label:"Fox"},{emoji:"🐻",bg:"#E2E8F0",label:"Bear"},{emoji:"🐰",bg:"#FCE7F3",label:"Bunny"},{emoji:"🦁",bg:"#FEF08A",label:"Lion"}],this.userPresets=[{emoji:"🧑‍💻",bg:"#FFE485",label:"Dev"},{emoji:"👩‍🦰",bg:"#FF9E79",label:"Redhead"},{emoji:"👨‍🦱",bg:"#B8E1D9",label:"Curly"},{emoji:"🧔",bg:"#EAD5E6",label:"Beard"},{emoji:"👩‍🎨",bg:"#FED7AA",label:"Artist"},{emoji:"🧑‍🌾",bg:"#D1FAE5",label:"Gardener"},{emoji:"🦸",bg:"#FDE68A",label:"Hero"},{emoji:"🕶️",bg:"#CBD5E1",label:"Cool"},{emoji:"⭐",bg:"#FEF08A",label:"Star"},{emoji:"👑",bg:"#FCE7F3",label:"Crown"}]}connectedCallback(){super.connectedCallback(),this.unsubscribe=g.subscribe(()=>{if(g.photoModalOpen&&(this.previewUrl||(this.previewUrl=g.photoModalCurrentAvatar||""),g.photoModalTarget==="pet")){const i=g.currentPet;if(i&&(this.petName||(this.petName=i.name||""),this.petBreed||(this.petBreed=i.breed||""),!this.petBirthday&&i.birthday))try{this.petBirthday=new Date(i.birthday).toISOString().slice(0,10)}catch{this.petBirthday=i.birthday}}this.requestUpdate()})}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.unsubscribe)==null||i.call(this)}handleClose(){this.previewUrl="",this.urlInput="",this.errorMessage="",this.petName="",this.petBreed="",this.petBirthday="",g.closePhotoModal()}triggerFileInput(){var o;const i=(o=this.shadowRoot)==null?void 0:o.querySelector("#fileInput");i==null||i.click()}setAgeInYears(i){const o=new Date;o.setFullYear(o.getFullYear()-i),this.petBirthday=o.toISOString().slice(0,10),this.requestUpdate()}async handleFileSelect(i){var r;const s=(r=i.target.files)==null?void 0:r[0];if(s){if(!s.type.startsWith("image/")){this.errorMessage="Please select a valid image file (PNG, JPG, WEBP).";return}this.isProcessing=!0,this.errorMessage="";try{const l=await this.resizeImage(s,400,400);this.previewUrl=l}catch(l){this.errorMessage="Failed to process image: "+(l.message||"Unknown error")}finally{this.isProcessing=!1}}}resizeImage(i,o,s){return new Promise((r,l)=>{const c=new FileReader;c.onload=u=>{var v;const f=new Image;f.onload=()=>{let w=f.width,x=f.height;const _=Math.min(w,x),T=(w-_)/2,$=(x-_)/2,S=document.createElement("canvas"),D=Math.min(o,_);S.width=D,S.height=D;const M=S.getContext("2d");if(!M){l(new Error("Canvas context not available"));return}M.drawImage(f,T,$,_,_,0,0,D,D),r(S.toDataURL("image/jpeg",.88))},f.onerror=()=>l(new Error("Image failed to load")),f.src=(v=u.target)==null?void 0:v.result},c.onerror=()=>l(new Error("File reader failed")),c.readAsDataURL(i)})}handleSelectPreset(i){const o=`data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="${encodeURIComponent(i.bg)}"/><text x="50" y="65" font-size="54" text-anchor="middle">${i.emoji}</text></svg>`;this.previewUrl=o,this.errorMessage=""}handleApplyUrl(){if(!this.urlInput.trim()){this.errorMessage="Please enter an image URL.";return}this.previewUrl=this.urlInput.trim(),this.errorMessage=""}handleRemovePhoto(){this.previewUrl="",this.urlInput="",this.errorMessage=""}async handleSave(){var i,o,s,r;if(!this.isProcessing){this.isProcessing=!0;try{const l=g.currentLocale==="ko",c=g.photoModalTarget,u=g.photoModalTargetId,f=this.previewUrl;if(c==="pet"){const v=u||((i=g.currentPet)==null?void 0:i.id);v&&await g.updatePetProfile(v,{name:this.petName.trim()||((o=g.currentPet)==null?void 0:o.name)||"Pet",breed:this.petBreed.trim()||((s=g.currentPet)==null?void 0:s.breed)||"",birthday:this.petBirthday||((r=g.currentPet)==null?void 0:r.birthday)||"",avatarUrl:f})}else c==="user"?await g.updateUserAvatar(f):c==="member"&&u&&await g.updateMemberAvatar(u,f);this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:c==="pet"?l?`${this.petName||"반려견"} 프로필 저장됨`:`${this.petName||"Pet"} Profile Saved`:l?"사진 업데이트됨":"Photo Updated",sub:l?"변경사항이 성공적으로 적용되었습니다.":"Changes successfully saved."}})),this.handleClose()}catch(l){this.errorMessage="Failed to save: "+(l.message||"Unknown error")}finally{this.isProcessing=!1}}}render(){if(!g.photoModalOpen)return b``;const i=g.currentLocale==="ko",o=g.photoModalTarget,s=o==="pet"?this.petPresets:this.userPresets,r=g.photoModalTitle||(o==="pet"?i?"반려동물 정보 및 사진 수정":"Edit Pet Profile & Photo":i?"프로필 사진 변경":"Change Profile Photo");return b`
      <div class="modal-overlay" @click=${l=>l.target===l.currentTarget&&this.handleClose()}>
        <div class="modal-card">
          <!-- Header -->
          <div class="modal-header">
            <div class="modal-title">${r}</div>
            <button class="close-btn" @click=${this.handleClose}>✕</button>
          </div>

          <!-- Body -->
          <div class="modal-body">
            <!-- If editing Pet, show Name, Breed, and Birthday fields -->
            ${o==="pet"?b`
                  <div class="form-group">
                    <label class="field-label">${i?"반려견 이름":"Pet Name"}</label>
                    <input
                      type="text"
                      class="input-box"
                      placeholder="${i?"반려견 이름":"e.g. Jjols, Watson"}"
                      .value=${this.petName}
                      @input=${l=>this.petName=l.target.value}
                    />
                  </div>

                  <div class="form-group">
                    <label class="field-label">${i?"품종":"Breed"}</label>
                    <input
                      type="text"
                      class="input-box"
                      placeholder="${i?"예: 스푸들, 비글 믹스":"e.g. Spoodle, Beagle mix"}"
                      .value=${this.petBreed}
                      @input=${l=>this.petBreed=l.target.value}
                    />
                  </div>

                  <div class="form-group">
                    <label class="field-label">${i?"생년월일 (나이 계산)":"Birthday (for Age calculation)"}</label>
                    <input
                      type="date"
                      class="input-box"
                      .value=${this.petBirthday}
                      @input=${l=>this.petBirthday=l.target.value}
                    />
                    <div style="font-size: 10.5px; font-weight: 700; color: #7D7362; margin-top: 4px;">
                      ${i?"빠른 나이 선택:":"Quick Age Select:"}
                    </div>
                    <div class="age-chips-container">
                      ${[1,2,3,4,5,6,7,8,9,10].map(l=>b`
                          <div class="age-chip" @click=${()=>this.setAgeInYears(l)}>
                            ${i?`${l}살`:`${l} yr${l>1?"s":""}`}
                          </div>
                        `)}
                    </div>
                  </div>
                `:null}

            <!-- Avatar Preview -->
            <div class="preview-container">
              <div class="avatar-preview-wrapper">
                ${this.previewUrl?b`<img src="${this.previewUrl}" class="avatar-preview-img" alt="Preview" />`:b`<div class="avatar-preview-emoji">${o==="pet"?"🐶":"👤"}</div>`}
              </div>
              <div class="preview-label">${i?"프로필 사진 / 아바타":"Profile Photo / Avatar"}</div>
            </div>

            <!-- Error Banner -->
            ${this.errorMessage?b`<div class="error-msg">${this.errorMessage}</div>`:""}

            <!-- Mode Selector Tabs -->
            <div class="mode-tabs">
              <div
                class="mode-tab ${this.activeMode==="upload"?"active":""}"
                @click=${()=>this.activeMode="upload"}
              >
                📷 ${i?"업로드":"Upload"}
              </div>
              <div
                class="mode-tab ${this.activeMode==="preset"?"active":""}"
                @click=${()=>this.activeMode="preset"}
              >
                🎨 ${i?"이모지":"Presets"}
              </div>
              <div
                class="mode-tab ${this.activeMode==="url"?"active":""}"
                @click=${()=>this.activeMode="url"}
              >
                🔗 ${i?"링크":"URL"}
              </div>
            </div>

            <!-- Mode Content: Upload -->
            ${this.activeMode==="upload"?b`
                  <div class="upload-dropzone" @click=${this.triggerFileInput}>
                    <div class="dropzone-icon">📷</div>
                    <div class="dropzone-text">
                      ${i?"사진 파일 선택 또는 촬영":"Choose photo or take picture"}
                    </div>
                    <div class="dropzone-subtext">
                      ${i?"JPG, PNG, WEBP (자동 최적화)":"JPG, PNG, WEBP (auto-cropped)"}
                    </div>
                    <input
                      id="fileInput"
                      type="file"
                      class="file-input"
                      accept="image/*"
                      @change=${this.handleFileSelect}
                    />
                  </div>
                `:""}

            <!-- Mode Content: Presets -->
            ${this.activeMode==="preset"?b`
                  <div class="preset-grid">
                    ${s.map(l=>b`
                        <div
                          class="preset-item"
                          style="background: ${l.bg};"
                          title="${l.label}"
                          @click=${()=>this.handleSelectPreset(l)}
                        >
                          ${l.emoji}
                        </div>
                      `)}
                  </div>
                `:""}

            <!-- Mode Content: URL -->
            ${this.activeMode==="url"?b`
                  <div class="url-input-container">
                    <input
                      type="url"
                      class="url-text-input"
                      placeholder="${"https://example.com/photo.jpg"}"
                      .value=${this.urlInput}
                      @input=${l=>this.urlInput=l.target.value}
                    />
                    <button class="url-preview-btn" @click=${this.handleApplyUrl}>
                      ${i?"미리보기 적용":"Preview URL"}
                    </button>
                  </div>
                `:""}

            <!-- Action Buttons -->
            <div class="modal-actions">
              <button class="btn-clear" @click=${this.handleClose}>
                ${i?"취소":"Cancel"}
              </button>
              <button class="btn-save" ?disabled=${this.isProcessing} @click=${this.handleSave} style="display:flex; align-items:center; justify-content:center; gap:8px;">
                ${this.isProcessing?b`<div class="btn-spinner" style="width:14px; height:14px; border-width:2px;"></div> <span>${i?"저장 중...":"Saving..."}</span>`:i?"저장하기":"Save Changes"}
              </button>
            </div>
          </div>
        </div>
      </div>
    `}},ii.styles=zt`
    :host {
      display: block;
    }

    .modal-overlay {
      position: absolute;
      inset: 0;
      background: rgba(23, 20, 15, 0.7);
      backdrop-filter: blur(4px);
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px;
      animation: fadeIn 0.15s ease-out;
      box-sizing: border-box;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .modal-card {
      background: #FFFFFF;
      border: 3px solid #17140F;
      border-radius: 24px;
      box-shadow: 6px 6px 0 #17140F;
      width: 100%;
      max-width: 440px;
      max-height: 90vh;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      animation: popIn 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-sizing: border-box;
    }

    @keyframes popIn {
      from { transform: scale(0.92); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }

    .modal-header {
      padding: 18px 20px 14px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 2px solid #F0ECE1;
    }

    .modal-title {
      font-family: var(--font-heading, sans-serif);
      font-size: 20px;
      font-weight: 800;
      color: #17140F;
    }

    .close-btn {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: #F4EFE6;
      border: 2px solid #17140F;
      font-size: 16px;
      font-weight: 800;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 2px 2px 0 #17140F;
      transition: transform 0.1s;
    }

    .close-btn:active {
      transform: translate(1px, 1px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .modal-body {
      padding: 18px 20px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      box-sizing: border-box;
    }

    /* Form Section */
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .field-label {
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 1.2px;
      text-transform: uppercase;
      color: #7D7362;
    }

    .input-box {
      width: 100%;
      box-sizing: border-box;
      border: 2.5px solid #17140F;
      border-radius: 14px;
      padding: 11px 14px;
      font-size: 14px;
      font-weight: 700;
      color: #17140F;
      background: #FFF9E9;
      outline: none;
      transition: border-color 0.15s, background 0.15s;
    }

    .input-box:focus {
      background: #FFFFFF;
      border-color: #FF5A3C;
    }

    .age-chips-container {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-top: 4px;
    }

    .age-chip {
      padding: 5px 10px;
      border-radius: 10px;
      border: 2px solid #17140F;
      background: #FFF;
      font-size: 11px;
      font-weight: 800;
      color: #17140F;
      cursor: pointer;
      box-shadow: 1.5px 1.5px 0 #17140F;
      transition: all 0.1s;
      user-select: none;
    }

    .age-chip:hover {
      background: #FFCE2E;
    }

    .age-chip:active {
      transform: translate(1px, 1px);
      box-shadow: 0.5px 0.5px 0 #17140F;
    }

    /* Preview Section */
    .preview-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 12px;
      background: #FAF7EE;
      border: 2px dashed #D6CEBE;
      border-radius: 18px;
    }

    .avatar-preview-wrapper {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      border: 3px solid #17140F;
      box-shadow: 3px 3px 0 #17140F;
      overflow: hidden;
      background: #FFCE2E;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    .avatar-preview-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .avatar-preview-emoji {
      font-size: 42px;
      line-height: 1;
    }

    .preview-label {
      font-size: 10.5px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: #7D7362;
    }

    /* Mode Tabs */
    .mode-tabs {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 6px;
      background: #F0ECE1;
      padding: 4px;
      border-radius: 14px;
      border: 2px solid #17140F;
    }

    .mode-tab {
      padding: 8px 4px;
      text-align: center;
      font-size: 12px;
      font-weight: 800;
      border-radius: 10px;
      cursor: pointer;
      border: 2px solid transparent;
      color: #6A6152;
      transition: all 0.15s;
    }

    .mode-tab.active {
      background: #FFCE2E;
      color: #17140F;
      border-color: #17140F;
      box-shadow: 1.5px 1.5px 0 #17140F;
    }

    /* Upload Mode */
    .upload-dropzone {
      border: 2px dashed #17140F;
      border-radius: 16px;
      padding: 18px 14px;
      text-align: center;
      background: #FFFFFF;
      cursor: pointer;
      transition: background 0.15s, transform 0.1s;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
    }

    .upload-dropzone:hover {
      background: #FFF9E6;
    }

    .upload-dropzone:active {
      transform: scale(0.99);
    }

    .dropzone-icon {
      font-size: 28px;
    }

    .dropzone-text {
      font-size: 13px;
      font-weight: 800;
      color: #17140F;
    }

    .dropzone-subtext {
      font-size: 10.5px;
      font-weight: 600;
      color: #8C8271;
    }

    .file-input {
      display: none;
    }

    /* Presets Grid */
    .preset-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 8px;
      max-height: 160px;
      overflow-y: auto;
      padding: 4px;
    }

    .preset-item {
      aspect-ratio: 1;
      border-radius: 14px;
      border: 2px solid #17140F;
      box-shadow: 2px 2px 0 #17140F;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      cursor: pointer;
      transition: transform 0.1s;
    }

    .preset-item:active {
      transform: translate(1px, 1px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .preset-item.selected {
      outline: 3px solid #FF5A3C;
      transform: scale(1.05);
    }

    /* URL Mode */
    .url-input-container {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .url-text-input {
      width: 100%;
      box-sizing: border-box;
      padding: 11px 13px;
      border: 2.5px solid #17140F;
      border-radius: 12px;
      font-size: 13px;
      font-weight: 600;
      background: #FAF7EE;
      color: #17140F;
      outline: none;
    }

    .url-text-input:focus {
      border-color: #FF5A3C;
      background: #FFF;
    }

    .url-preview-btn {
      align-self: flex-end;
      padding: 6px 14px;
      font-size: 12px;
      font-weight: 800;
      background: #F0ECE1;
      border: 2px solid #17140F;
      border-radius: 10px;
      cursor: pointer;
      box-shadow: 2px 2px 0 #17140F;
    }

    .error-msg {
      background: #FFE5E0;
      color: #D32F2F;
      border: 2px solid #D32F2F;
      border-radius: 10px;
      padding: 8px 12px;
      font-size: 12px;
      font-weight: 700;
    }

    /* Actions */
    .modal-actions {
      display: flex;
      gap: 10px;
      margin-top: 4px;
    }

    .btn-save {
      flex: 2;
      background: #FF5A3C;
      color: #FFFFFF;
      border: 3px solid #17140F;
      border-radius: 16px;
      padding: 13px;
      font-family: var(--font-heading, sans-serif);
      font-size: 16px;
      font-weight: 800;
      cursor: pointer;
      box-shadow: 4px 4px 0 #17140F;
      text-align: center;
      transition: transform 0.1s, background 0.15s;
    }

    .btn-save:hover {
      background: #FF7659;
    }

    .btn-save:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .btn-save:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      transform: none;
    }

    .btn-clear {
      flex: 1;
      background: #FFF;
      color: #8C8271;
      border: 2px solid #17140F;
      border-radius: 16px;
      padding: 13px;
      font-size: 13px;
      font-weight: 800;
      cursor: pointer;
      box-shadow: 2px 2px 0 #17140F;
      text-align: center;
    }

    .btn-clear:active {
      transform: translate(1px, 1px);
      box-shadow: 1px 1px 0 #17140F;
    }
  `,ii);ie([z()],Vt.prototype,"unsubscribe",void 0);ie([z()],Vt.prototype,"previewUrl",void 0);ie([z()],Vt.prototype,"urlInput",void 0);ie([z()],Vt.prototype,"activeMode",void 0);ie([z()],Vt.prototype,"isProcessing",void 0);ie([z()],Vt.prototype,"errorMessage",void 0);ie([z()],Vt.prototype,"petName",void 0);ie([z()],Vt.prototype,"petBreed",void 0);ie([z()],Vt.prototype,"petBirthday",void 0);Vt=ie([At("dooty-photo-modal")],Vt);var Ol=function(h,i,o,s){var r=arguments.length,l=r<3?i:s===null?s=Object.getOwnPropertyDescriptor(i,o):s,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,i,o,s);else for(var u=h.length-1;u>=0;u--)(c=h[u])&&(l=(r<3?c(l):r>3?c(i,o,l):c(i,o))||l);return r>3&&l&&Object.defineProperty(i,o,l),l},oi;let Gs=(oi=class extends yt{connectedCallback(){super.connectedCallback(),this.unsubscribe=g.subscribe(()=>this.requestUpdate())}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.unsubscribe)==null||i.call(this)}render(){var r;if(!g.petSwitcherOpen)return null;const i=g.currentLocale==="ko",o=g.pets||[],s=(r=g.currentPet)==null?void 0:r.id;return b`
      <div class="modal-backdrop" @click=${()=>g.closePetSwitcher()}>
        <div class="modal-sheet" @click=${l=>l.stopPropagation()}>
          <!-- Header -->
          <div class="sheet-header">
            <div class="sheet-title-area">
              <div class="sheet-title">${i?"누구의 하루인가요?":"Whose day is it?"}</div>
              <div class="sheet-sub">
                ${i?"이름을 누르면 전환됩니다. PAGE를 누르면 프로필로 이동합니다.":"Tap a name to follow them. Tap PAGE for their file."}
              </div>
            </div>
            <div class="close-btn" @click=${()=>g.closePetSwitcher()}>&#10005;</div>
          </div>

          <!-- Pets List -->
          <div class="pets-list">
            ${o.map((l,c)=>{const u=l.id===s,f=l.name||"Pet",v=f.charAt(0).toUpperCase(),w=["#FFCE2E","#BFD0FF","#1FC99B","#E7BFFF","#FFB39A"],x=w[c%w.length],_=(g.events||[]).filter($=>$.petId===l.id).length,T=(g.events||[]).filter($=>{if($.petId!==l.id)return!1;const S=new Date($.timestamp),D=new Date;return S.getDate()===D.getDate()&&S.getMonth()===D.getMonth()&&S.getFullYear()===D.getFullYear()}).length;return b`
                <div class="pet-card ${u?"active":""}">
                  ${u?b`<div class="active-bar"></div>`:null}
                  <div
                    class="pet-card-main"
                    @click=${()=>{g.selectPetById(l.id)}}
                  >
                    <div class="pet-avatar-circle" style="background: ${x};">${v}</div>
                    <div class="pet-info">
                      <div class="name-row">
                        <div class="pet-name">${f}</div>
                        ${u?b`<div class="on-screen-tag">${i?"화면 표시 중":"ON SCREEN"}</div>`:null}
                      </div>
                      <div class="pet-today-line">
                        ${i?`오늘 ${T}건 · 총 ${_}건의 기록`:`${T} logs today · ${_} total`}
                      </div>
                      <div class="pet-meta-line">
                        ${l.breed||(i?"반려견":"Dog")} ${l.birthday?`· ${l.birthday}`:""}
                      </div>
                    </div>
                  </div>

                  <div
                    class="page-btn"
                    title=${i?`${f} 프로필 보기`:`View ${f}'s profile`}
                    @click=${$=>{$.stopPropagation(),g.selectPetById(l.id),g.closePetSwitcher(),g.setActiveTab("dog")}}
                  >
                    <div class="icon-dog-head">
                      <div class="dog-ear-l"></div>
                      <div class="dog-ear-r"></div>
                      <div class="dog-snout"></div>
                    </div>
                    <div class="page-label">${i?"프로필":"PAGE"}</div>
                  </div>
                </div>
              `})}
          </div>

          <!-- Add a Pet Card -->
          <div
            class="add-pet-card"
            @click=${()=>{g.closePetSwitcher(),g.setActiveTab("settings")}}
          >
            <div class="add-icon-circle">+</div>
            <div>
              <div class="add-pet-title">${i?"반려동물 추가":"Add a pet"}</div>
              <div class="add-pet-sub">${i?"이름, 품종, 사진":"Name, breed, and a photo"}</div>
            </div>
          </div>
        </div>
      </div>
    `}},oi.styles=zt`
    :host {
      display: block;
    }

    .modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(23, 20, 15, 0.5);
      z-index: 150;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      animation: tb-scrim 0.2s ease both;
    }

    .modal-sheet {
      position: relative;
      background: #FFFBF2;
      border-top: 3px solid #17140F;
      border-radius: 30px 30px 0 0;
      padding: 18px 18px 34px;
      display: flex;
      flex-direction: column;
      gap: 13px;
      max-height: 78vh;
      box-sizing: border-box;
      animation: tb-sheet 0.25s cubic-bezier(0.23, 1, 0.32, 1) both;
    }

    .sheet-header {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .sheet-title-area {
      flex: 1;
      min-width: 0;
    }

    .sheet-title {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 23px;
      color: #17140F;
      letter-spacing: -0.8px;
      line-height: 1.1;
    }

    .sheet-sub {
      font-size: 12px;
      font-weight: 600;
      color: #6A6152;
      margin-top: 1px;
    }

    .close-btn {
      width: 34px;
      height: 34px;
      border-radius: 12px;
      border: 3px solid #17140F;
      background: #FFF;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      font-weight: 800;
      color: #17140F;
      cursor: pointer;
      flex: none;
      user-select: none;
      transition: transform 0.13s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.13s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .close-btn:active {
      transform: scale(0.965);
    }

    .pets-list {
      flex: 1;
      min-height: 0;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 3px 1px 1px;
    }

    .pet-card {
      position: relative;
      display: flex;
      align-items: stretch;
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 22px;
      box-shadow: 3px 3px 0 #17140F;
      overflow: hidden;
      box-sizing: border-box;
    }

    .pet-card.active {
      background: #FFF9E9;
      box-shadow: 4px 4px 0 #17140F;
    }

    .active-bar {
      position: absolute;
      left: -1px;
      top: 14px;
      bottom: 14px;
      width: 7px;
      background: #FF5A3C;
      border-right: 3px solid #17140F;
      border-radius: 0 5px 5px 0;
    }

    .pet-card-main {
      flex: 1;
      min-width: 0;
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 13px 12px 13px 14px;
      cursor: pointer;
      user-select: none;
      transition: opacity 0.13s ease;
    }

    .pet-card.active .pet-card-main {
      padding-left: 20px;
    }

    .pet-card-main:active {
      opacity: 0.6;
    }

    .pet-avatar-circle {
      width: 46px;
      height: 46px;
      border-radius: 50%;
      border: 3px solid #17140F;
      background: #FFCE2E;
      flex: none;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 17px;
      color: #17140F;
    }

    .pet-info {
      flex: 1;
      min-width: 0;
    }

    .name-row {
      display: flex;
      align-items: center;
      gap: 7px;
    }

    .pet-name {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 18px;
      color: #17140F;
      letter-spacing: -0.4px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .on-screen-tag {
      flex: none;
      background: #17140F;
      border-radius: 8px;
      padding: 2px 7px;
      font-size: 8.5px;
      font-weight: 800;
      color: #FFCE2E;
      letter-spacing: 0.9px;
    }

    .pet-today-line {
      font-size: 11.5px;
      font-weight: 700;
      color: #7A5C00;
      margin-top: 2px;
    }

    .pet-meta-line {
      font-size: 10.5px;
      font-weight: 600;
      color: #9A9080;
      margin-top: 1px;
    }

    .page-btn {
      flex: none;
      width: 60px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 3px;
      border-left: 3px solid #17140F;
      background: #FFFDF7;
      cursor: pointer;
      user-select: none;
      transition: background 0.13s ease, transform 0.1s ease;
    }

    .page-btn:hover {
      background: #FFCE2E;
    }

    .page-btn:active {
      transform: translateY(1px);
    }

    .icon-dog-head {
      width: 24px;
      height: 22px;
      position: relative;
      display: flex;
      align-items: flex-end;
      justify-content: center;
    }

    .dog-ear-l {
      position: absolute;
      left: 1px;
      top: 0;
      width: 8px;
      height: 11px;
      border: 2.5px solid #17140F;
      border-radius: 60% 40% 45% 45%;
      background: #FFF;
      box-sizing: border-box;
    }

    .dog-ear-r {
      position: absolute;
      right: 1px;
      top: 0;
      width: 8px;
      height: 11px;
      border: 2.5px solid #17140F;
      border-radius: 40% 60% 45% 45%;
      background: #FFF;
      box-sizing: border-box;
    }

    .dog-snout {
      position: relative;
      width: 16px;
      height: 14px;
      border: 2.5px solid #17140F;
      border-radius: 45% 45% 50% 50%;
      background: #FFF;
      box-sizing: border-box;
    }

    .page-label {
      font-size: 8px;
      font-weight: 800;
      color: #17140F;
      letter-spacing: 0.7px;
    }

    .add-pet-card {
      display: flex;
      align-items: center;
      gap: 12px;
      background: #FFF;
      border: 3px dashed #17140F;
      border-radius: 20px;
      padding: 12px 14px;
      cursor: pointer;
      user-select: none;
      transition: transform 0.13s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .add-pet-card:active {
      transform: scale(0.965);
    }

    .add-icon-circle {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      border: 2.5px dashed #17140F;
      flex: none;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 21px;
      font-weight: 800;
      color: #8A7F68;
    }

    .add-pet-title {
      font-size: 15.5px;
      font-weight: 800;
      color: #17140F;
    }

    .add-pet-sub {
      font-size: 11.5px;
      font-weight: 600;
      color: #6A6152;
      margin-top: 1px;
    }
  `,oi);Gs=Ol([At("dooty-pet-switcher")],Gs);var yo=function(h,i,o,s){var r=arguments.length,l=r<3?i:s===null?s=Object.getOwnPropertyDescriptor(i,o):s,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,i,o,s);else for(var u=h.length-1;u>=0;u--)(c=h[u])&&(l=(r<3?c(l):r>3?c(i,o,l):c(i,o))||l);return r>3&&l&&Object.defineProperty(i,o,l),l},ni;let Di=(ni=class extends yt{constructor(){super(...arguments),this.notes="",this.photoUrl="",this.isSaving=!1}connectedCallback(){super.connectedCallback(),this.unsubscribe=g.subscribe(()=>this.requestUpdate())}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.unsubscribe)==null||i.call(this)}formatSec(i){const o=Math.floor(i/60),s=i%60;return`${o}:${String(s).padStart(2,"0")}`}render(){var $;const i=g.currentLocale==="ko",o=g.activeWalk,s=g.walkView,r=g.getWalkSeconds(),l=this.formatSec(r),c=g.getWalkDistanceKm(),u=g.getWalkPace(),f=(o==null?void 0:o.pausedAt)!==null,v="M 60 220 Q 90 120 180 140 T 280 90 T 320 220 T 220 310",w=60,x=220,_=220,T=310;return b`
      <!-- 1. Floating Banner above Dock (Visible when walk is running in background) -->
      ${o&&s===null?b`
            <div class="walk-banner" @click=${()=>g.expandWalk()}>
              <div class="ping-wrap">
                <div class="ping-circle"></div>
                <div class="ping-dot"></div>
              </div>
              <div class="banner-label">${i?"실시간 산책":"LIVE WALK"}</div>
              <div style="flex: 1;"></div>
              <div class="banner-time">${l}</div>
              <div class="banner-divider"></div>
              <div class="banner-km">${c} km</div>
            </div>
          `:null}

      <!-- 2. Fullscreen Live Walk Screen -->
      ${o&&s==="live"?b`
            <div class="live-fullscreen">
              <!-- Top Map Area with GPS Trace -->
              <div class="live-map-area">
                <div class="map-grid-bg"></div>
                <div class="map-park-1"></div>
                <div class="map-park-2"></div>
                <div class="map-river"></div>

                <!-- Animated GPS Trace SVG -->
                <svg
                  viewBox="0 0 400 400"
                  preserveAspectRatio="xMidYMid meet"
                  style="position: absolute; inset: 0; width: 100%; height: 100%;"
                >
                  <path
                    d=${v}
                    fill="none"
                    stroke="#17140F"
                    stroke-width="13"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d=${v}
                    fill="none"
                    stroke="#FF5A3C"
                    stroke-width="7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <circle cx=${w} cy=${x} r="9" fill="#FFCE2E" stroke="#17140F" stroke-width="3.5"></circle>
                  <circle cx=${_} cy=${T} r="9" fill="#1FC99B" stroke="#17140F" stroke-width="3.5"></circle>
                </svg>

                <div class="minimize-btn" @click=${()=>g.minimizeWalk()}>&#8595;</div>
                <div class="live-status-pill">
                  <div
                    style="width:9px; height:9px; border-radius:50%; background:#1FC99B; animation: tb-ping 1.5s ease-out infinite;"
                  ></div>
                  <div style="font-size:10px; font-weight:800; color:#FFF; letter-spacing:1.2px;">
                    ${i?"실시간 산책":"LIVE WALK"}
                  </div>
                </div>
              </div>

              <!-- Bottom Controls Panel -->
              <div class="live-controls-panel">
                <div class="stat-row">
                  <div style="flex: 1; min-width: 0;">
                    <div style="font-size: 9.5px; font-weight: 800; letter-spacing: 1.3px; color: #9A9080; text-transform: uppercase;">
                      ${i?"경과 시간":"Elapsed Time"}
                    </div>
                    <div class="main-timer">${l}</div>
                  </div>
                  <div style="text-align: right; flex: none;">
                    <div style="font-family: var(--font-heading); font-weight: 800; font-size: 26px; color: #17140F; line-height: 1; letter-spacing: -1px;">
                      ${c}
                    </div>
                    <div style="font-size: 9.5px; font-weight: 800; letter-spacing: 1.2px; color: #9A9080;">
                      KM · ${u}/KM
                    </div>
                  </div>
                </div>

                <div class="btn-row">
                  <div class="pause-btn" @click=${()=>g.pauseLiveWalk()}>
                    ${f?i?"계속하기":"Resume":i?"일시정지":"Pause"}
                  </div>
                  <div class="end-btn" @click=${()=>g.endLiveWalk()}>
                    ${i?"산책 종료":"End walk"}
                  </div>
                </div>
              </div>
            </div>
          `:null}

      <!-- 3. Arrived Home Auto-Prompt Modal -->
      ${g.walkHomeAsk?b`
            <div class="arrived-sheet-backdrop">
              <div class="arrived-sheet">
                <div style="display: flex; align-items: center; gap: 13px;">
                  <div
                    style="width:48px; height:48px; border-radius:16px; border:3px solid #17140F; background:#FFCE2E; display:flex; align-items:flex-end; justify-content:center; padding-bottom:8px; box-sizing:border-box; position:relative; overflow:hidden;"
                  >
                    <div
                      style="position:absolute; top:7px; width:26px; height:16px; background:#17140F; clip-path:polygon(50% 0, 100% 100%, 0 100%);"
                    ></div>
                    <div style="width:9px; height:11px; background:#17140F; border-radius:2px 2px 0 0;"></div>
                  </div>
                  <div style="flex: 1; min-width: 0;">
                    <div style="font-family: var(--font-heading); font-weight: 800; font-size: 23px; color: #17140F; letter-spacing: -0.8px; line-height: 1.1;">
                      ${i?"집에 도착하신 것 같아요":"Looks like you're home"}
                    </div>
                    <div style="font-size: 12.5px; font-weight: 700; color: #6A6152; margin-top: 2px;">
                      ${i?"지금 산책을 끝낼까요?":"We can end the walk now."}
                    </div>
                  </div>
                </div>

                <div style="background:#FFF; border:3px solid #17140F; border-radius:20px; padding:14px 16px; display:flex; align-items:center; gap:14px; box-shadow:3px 3px 0 #17140F;">
                  <div style="flex: 1;">
                    <div style="font-size:9.5px; font-weight:800; letter-spacing:1.2px; color:#9A9080; text-transform:uppercase;">
                      ${i?"소요 시간":"DURATION"}
                    </div>
                    <div style="font-family:var(--font-heading); font-weight:800; font-size:22px; color:#17140F; letter-spacing:-0.8px; line-height:1.2;">
                      ${l}
                    </div>
                  </div>
                  <div style="width: 2.5px; align-self: stretch; background: #F0E7D3;"></div>
                  <div style="flex: 1;">
                    <div style="font-size:9.5px; font-weight:800; letter-spacing:1.2px; color:#9A9080; text-transform:uppercase;">
                      ${i?"거리":"DISTANCE"}
                    </div>
                    <div style="font-family:var(--font-heading); font-weight:800; font-size:22px; color:#17140F; letter-spacing:-0.8px; line-height:1.2;">
                      ${c} km
                    </div>
                  </div>
                </div>

                <div class="btn-row">
                  <div class="pause-btn" style="flex: 1; width: auto;" @click=${()=>g.keepWalking()}>
                    ${i?"아직 걷는 중":"Still walking"}
                  </div>
                  <div
                    class="end-btn"
                    style="flex: 1; background: #1FC99B;"
                    @click=${()=>g.endLiveWalk()}
                  >
                    ${i?"네, 종료할게요":"Yes, end it"}
                  </div>
                </div>
              </div>
            </div>
          `:null}

      <!-- 4. Post Walk Summary View -->
      ${s==="summary"&&g.walkSummaryData?b`
            <div class="summary-fullscreen">
              <div class="summary-scroll">
                <div>
                  <div class="summary-title">
                    ${i?`수고했어요, ${g.walkSummaryData.petNames.join(" & ")}!`:`Good effort, ${g.walkSummaryData.petNames.join(" & ")}`}
                  </div>
                  <div class="summary-sub">
                    ${g.walkSummaryData.startTime} ~ ${g.walkSummaryData.endTime} ·
                    ${i?"저장하기 전에 확인해 주세요.":"check it over before saving."}
                  </div>
                </div>

                <!-- Map Preview Box -->
                <div class="map-preview-box">
                  <div class="map-grid-bg"></div>
                  <div class="map-park-1"></div>
                  <div class="map-park-2"></div>
                  <div class="map-river"></div>
                  <svg
                    viewBox="0 0 400 400"
                    preserveAspectRatio="xMidYMid meet"
                    style="position: absolute; inset: 0; width: 100%; height: 100%;"
                  >
                    <path
                      d=${v}
                      fill="none"
                      stroke="#17140F"
                      stroke-width="13"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d=${v}
                      fill="none"
                      stroke="#FF5A3C"
                      stroke-width="7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <circle cx=${w} cy=${x} r="9" fill="#FFCE2E" stroke="#17140F" stroke-width="3.5"></circle>
                    <circle cx=${_} cy=${T} r="9" fill="#1FC99B" stroke="#17140F" stroke-width="3.5"></circle>
                  </svg>
                </div>

                <!-- 3 KPI Tiles -->
                <div class="kpis-row">
                  <div class="kpi-tile" style="background: #FFCE2E;">
                    <div class="kpi-val">${Math.max(1,Math.round(g.walkSummaryData.durationSec/60))} min</div>
                    <div class="kpi-lbl">${i?"시간":"Duration"}</div>
                  </div>
                  <div class="kpi-tile" style="background: #1FC99B;">
                    <div class="kpi-val">${g.walkSummaryData.distanceKm} km</div>
                    <div class="kpi-lbl">${i?"거리":"Distance"}</div>
                  </div>
                  <div class="kpi-tile" style="background: #BFD0FF;">
                    <div class="kpi-val">${g.walkSummaryData.pace}</div>
                    <div class="kpi-lbl">${i?"평균 페이스":"Avg Pace"}</div>
                  </div>
                </div>

                <!-- Details & Notes Box -->
                <div class="details-box">
                  <div class="detail-item">
                    <div class="detail-lbl">${i?"참여":"WHO"}</div>
                    <div class="detail-val">${g.walkSummaryData.petNames.join(" & ")}</div>
                  </div>
                  <div class="detail-item">
                    <div class="detail-lbl">${i?"작성자":"LOGGED BY"}</div>
                    <div class="detail-val">${(($=g.currentUser)==null?void 0:$.displayName)||"Me"}</div>
                  </div>
                  <div style="padding: 14px 15px;">
                    <div style="font-size: 9.5px; font-weight: 800; letter-spacing: 1.2px; color: #9A9080; text-transform: uppercase;">
                      ${i?"메모":"NOTES"}
                    </div>
                    <input
                      type="text"
                      placeholder=${i?"산책 중 특이사항을 적어주세요...":"Met three dogs, had a blast..."}
                      .value=${this.notes}
                      @input=${S=>this.notes=S.target.value}
                      style="width:100%; border:none; background:none; font-size:14px; font-weight:700; color:#17140F; margin-top:5px; outline:none;"
                    />
                  </div>
                </div>

                <div class="discard-link" @click=${()=>g.discardLiveWalk()}>
                  ${i?"이 산책 기록 취소":"Discard this walk"}
                </div>
              </div>

              <!-- Bottom Save Button -->
              <div class="save-bottom-bar">
                <div
                  class="end-btn ${this.isSaving?"is-loading":""}"
                  @click=${()=>this.handleSave()}
                >
                  ${this.isSaving?b`
                        <div class="btn-spinner"></div>
                        <span>${i?"산책 저장 중...":"Saving walk..."}</span>
                      `:i?"산책 저장":"Save walk"}
                </div>
              </div>
            </div>
          `:null}
    `}async handleSave(){if(!this.isSaving){this.isSaving=!0;try{const i=g.currentLocale==="ko",o=g.walkSummaryData,s=(o==null?void 0:o.petNames.join(" & "))||(i?"반려견":"Pet"),r=o!=null&&o.distanceKm?`${o.distanceKm} km`:"Walk";await g.saveLiveWalk(this.notes,this.photoUrl),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:i?"산책 기록 완료!":"Walk saved!",sub:i?`${s}와(과) 함께한 산책 (${r})`:`${s}'s walk logged (${r})`}}))}catch(i){console.error("Failed to save walk:",i)}finally{this.isSaving=!1}}}},ni.styles=zt`
    :host {
      display: contents;
    }

    /* Floating Banner above dock */
    .walk-banner {
      position: absolute;
      left: 16px;
      right: 16px;
      bottom: 104px;
      z-index: 75;
      background: #1FC99B;
      border: 3px solid #17140F;
      border-radius: 20px;
      padding: 10px 14px;
      box-shadow: 4px 4px 0 #17140F;
      display: flex;
      align-items: center;
      gap: 11px;
      cursor: pointer;
      box-sizing: border-box;
      animation: tb-screen 0.2s ease both;
      transition: transform 0.13s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.13s cubic-bezier(0.23, 1, 0.32, 1);
      user-select: none;
    }

    .walk-banner:active {
      transform: translate(2px, 2px);
      box-shadow: 2px 2px 0 #17140F;
    }

    .ping-wrap {
      position: relative;
      width: 13px;
      height: 13px;
      flex: none;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .ping-circle {
      position: absolute;
      width: 13px;
      height: 13px;
      border-radius: 50%;
      background: #17140F;
      animation: tb-ping 1.5s ease-out infinite;
    }

    .ping-dot {
      position: relative;
      width: 13px;
      height: 13px;
      border-radius: 50%;
      background: #17140F;
    }

    .banner-label {
      font-size: 10.5px;
      font-weight: 800;
      color: #0A5A45;
      letter-spacing: 1.2px;
      flex: none;
    }

    .banner-time {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 20px;
      color: #17140F;
      letter-spacing: -0.6px;
      font-variant-numeric: tabular-nums;
    }

    .banner-divider {
      width: 2.5px;
      height: 18px;
      background: #0A5A45;
      opacity: 0.35;
      border-radius: 2px;
      flex: none;
    }

    .banner-km {
      font-size: 13.5px;
      font-weight: 800;
      color: #17140F;
      flex: none;
    }

    /* Fullscreen Live View */
    .live-fullscreen {
      position: fixed;
      inset: 0;
      z-index: 140;
      background: #FFFBF2;
      display: flex;
      flex-direction: column;
      animation: tb-screen 0.24s cubic-bezier(0.23, 1, 0.32, 1) both;
    }

    .live-map-area {
      position: relative;
      flex: 1;
      min-height: 0;
      background: #E3E8D8;
      overflow: hidden;
      border-bottom: 3px solid #17140F;
    }

    .map-grid-bg {
      position: absolute;
      inset: 0;
      background: repeating-linear-gradient(0deg, transparent 0 60px, #D2D9C4 60px 66px),
        repeating-linear-gradient(90deg, transparent 0 76px, #D2D9C4 76px 82px);
    }

    .map-park-1 {
      position: absolute;
      left: -30px;
      top: 150px;
      width: 190px;
      height: 130px;
      border-radius: 60px;
      background: #C3DCB4;
      border: 3px solid #17140F;
    }

    .map-park-2 {
      position: absolute;
      right: -40px;
      top: 36px;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background: #C3DCB4;
      border: 3px solid #17140F;
    }

    .map-river {
      position: absolute;
      left: -4px;
      right: -4px;
      top: 250px;
      height: 20px;
      background: #9EC6E8;
      border-top: 3px solid #17140F;
      border-bottom: 3px solid #17140F;
    }

    .minimize-btn {
      position: absolute;
      z-index: 5;
      left: 16px;
      top: 58px;
      width: 40px;
      height: 40px;
      border-radius: 14px;
      border: 3px solid #17140F;
      background: #FFF;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 3px 3px 0 #17140F;
      font-size: 17px;
      font-weight: 800;
      color: #17140F;
      transition: transform 0.13s cubic-bezier(0.23, 1, 0.32, 1);
      user-select: none;
    }

    .minimize-btn:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .live-status-pill {
      position: absolute;
      z-index: 5;
      right: 16px;
      top: 58px;
      background: #17140F;
      border-radius: 13px;
      padding: 8px 12px;
      display: flex;
      align-items: center;
      gap: 7px;
    }

    .live-controls-panel {
      flex: none;
      padding: 16px 18px 34px;
      display: flex;
      flex-direction: column;
      gap: 15px;
      background: #FFFBF2;
      box-sizing: border-box;
    }

    .stat-row {
      display: flex;
      align-items: flex-end;
      gap: 14px;
    }

    .main-timer {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 54px;
      color: #17140F;
      line-height: 1;
      letter-spacing: -2.6px;
      font-variant-numeric: tabular-nums;
      margin-top: 2px;
    }

    .btn-row {
      display: flex;
      gap: 10px;
    }

    .pause-btn {
      width: 112px;
      flex: none;
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 20px;
      padding: 16px;
      text-align: center;
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 16px;
      color: #17140F;
      cursor: pointer;
      box-shadow: 4px 4px 0 #17140F;
      box-sizing: border-box;
      user-select: none;
      transition: transform 0.13s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .pause-btn:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .end-btn {
      flex: 1;
      background: #FF5A3C;
      border: 3px solid #17140F;
      border-radius: 20px;
      padding: 16px;
      text-align: center;
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 18px;
      color: #FFF;
      cursor: pointer;
      box-shadow: 4px 4px 0 #17140F;
      box-sizing: border-box;
      user-select: none;
      transition: background 0.15s ease, transform 0.13s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .end-btn:hover {
      background: #FF7659;
    }

    .end-btn:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .end-btn.is-loading {
      background: #E84E32;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      cursor: not-allowed;
      pointer-events: none;
      transform: translate(1px, 1px);
      box-shadow: 2px 2px 0 #17140F;
    }

    .end-btn .btn-spinner {
      width: 18px;
      height: 18px;
      border: 2.5px solid rgba(255, 255, 255, 0.4);
      border-top-color: #FFFFFF;
      border-radius: 50%;
      animation: spin 0.65s linear infinite;
      display: inline-block;
      flex: none;
    }

    /* Arrived Home Sheet */
    .arrived-sheet-backdrop {
      position: fixed;
      inset: 0;
      z-index: 190;
      background: rgba(23, 20, 15, 0.5);
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      animation: tb-scrim 0.2s ease both;
    }

    .arrived-sheet {
      position: relative;
      background: #FFFBF2;
      border-top: 3px solid #17140F;
      border-radius: 30px 30px 0 0;
      padding: 20px 18px 34px;
      display: flex;
      flex-direction: column;
      gap: 15px;
      animation: tb-sheet 0.25s cubic-bezier(0.23, 1, 0.32, 1) both;
      box-sizing: border-box;
    }

    /* Post Walk Summary Screen */
    .summary-fullscreen {
      position: fixed;
      inset: 0;
      z-index: 140;
      background: #FFFBF2;
      display: flex;
      flex-direction: column;
      animation: tb-screen 0.24s cubic-bezier(0.23, 1, 0.32, 1) both;
    }

    .summary-scroll {
      flex: 1;
      overflow-y: auto;
      padding: 56px 18px 20px;
      display: flex;
      flex-direction: column;
      gap: 14px;
      box-sizing: border-box;
    }

    .summary-title {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 32px;
      color: #17140F;
      letter-spacing: -1.3px;
      line-height: 1.06;
    }

    .summary-sub {
      font-size: 12.5px;
      font-weight: 600;
      color: #6A6152;
      margin-top: 3px;
    }

    .map-preview-box {
      position: relative;
      height: 196px;
      border: 3px solid #17140F;
      border-radius: 22px;
      overflow: hidden;
      background: #E3E8D8;
      box-shadow: 4px 4px 0 #17140F;
    }

    .kpis-row {
      display: flex;
      gap: 10px;
    }

    .kpi-tile {
      flex: 1;
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 18px;
      padding: 12px;
      box-shadow: 3px 3px 0 #17140F;
      box-sizing: border-box;
    }

    .kpi-val {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 21px;
      color: #17140F;
      line-height: 1;
      letter-spacing: -0.8px;
    }

    .kpi-lbl {
      font-size: 9.5px;
      font-weight: 800;
      color: #7A5C00;
      margin-top: 5px;
      letter-spacing: 0.8px;
      text-transform: uppercase;
    }

    .details-box {
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 22px;
      box-shadow: 4px 4px 0 #17140F;
      overflow: hidden;
    }

    .detail-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 13px 15px;
      border-bottom: 2.5px solid #F0E7D3;
    }

    .detail-lbl {
      font-size: 9.5px;
      font-weight: 800;
      letter-spacing: 1.2px;
      color: #9A9080;
      width: 74px;
      flex: none;
      text-transform: uppercase;
    }

    .detail-val {
      flex: 1;
      min-width: 0;
      font-size: 14px;
      font-weight: 800;
      color: #17140F;
    }

    .discard-link {
      text-align: center;
      font-size: 12.5px;
      font-weight: 800;
      color: #9A9080;
      text-decoration: underline;
      cursor: pointer;
      padding: 4px;
      user-select: none;
    }

    .discard-link:active {
      opacity: 0.5;
    }

    .save-bottom-bar {
      flex: none;
      padding: 14px 18px 26px;
      background: #FFFBF2;
      border-top: 3px solid #F0E7D3;
    }
  `,ni);yo([z()],Di.prototype,"notes",void 0);yo([z()],Di.prototype,"photoUrl",void 0);yo([z()],Di.prototype,"isSaving",void 0);Di=yo([At("dooty-walk")],Di);var Mt=function(h,i,o,s){var r=arguments.length,l=r<3?i:s===null?s=Object.getOwnPropertyDescriptor(i,o):s,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,i,o,s);else for(var u=h.length-1;u>=0;u--)(c=h[u])&&(l=(r<3?c(l):r>3?c(i,o,l):c(i,o))||l);return r>3&&l&&Object.defineProperty(i,o,l),l},si;let Lt=(si=class extends yt{constructor(){super(...arguments),this.view="signin",this.email="",this.password="",this.showPassword=!1,this.displayName="",this.userAvatar="",this.dogName="Nacho",this.dogBreed="",this.dogBirthday="",this.householdName="",this.dogAvatar="",this.setupSize="M",this.trackingPrefs={poop:!0,pee:!0,vomit:!0,meds:!0,weight:!0,walk:!0,vet:!1,symptom:!1},this.joinCode="",this.joinRole="Dan the walker",this.errorMessage="",this.isSubmitting=!1}connectedCallback(){super.connectedCallback(),this.unsubscribe=g.subscribe(()=>{this.view=g.authView,this.requestUpdate()})}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.unsubscribe)==null||i.call(this)}setView(i){this.view=i,g.setAuthView(i),this.errorMessage=""}calculateStrength(i){const o=g.t.auth.signupStep1;return!i||i.length<6?{label:o.weak,width:"25%",color:"#FF5A3C"}:i.length>=10&&/[A-Z]/.test(i)&&/[0-9]/.test(i)?{label:o.strong,width:"100%",color:"#1FC99B"}:i.length>=8?{label:o.good,width:"65%",color:"#FFCE2E"}:{label:o.weak,width:"35%",color:"#FF5A3C"}}async handleLogin(i){var s;i&&i.preventDefault(),this.errorMessage="";const o=g.t.auth.errors;if(!this.email.trim()){this.errorMessage=o.emailRequired;return}if(!this.password){this.errorMessage=o.passwordRequired;return}this.isSubmitting=!0;try{await g.signIn({email:this.email.trim(),password:this.password}),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:g.currentLocale==="ko"?"환영합니다! 👋":"Welcome back! 👋",sub:((s=g.currentHousehold)==null?void 0:s.name)||"Household"}}))}catch(r){this.errorMessage=r.message||o.logInFailed}finally{this.isSubmitting=!1}}handleGoToStep2(i){i&&i.preventDefault(),this.errorMessage="";const o=g.t.auth.errors;if(!this.displayName.trim()){this.errorMessage=o.yourNameRequired;return}if(!this.email.trim()){this.errorMessage=o.emailRequired;return}if(!this.password||this.password.length<6){this.errorMessage=o.passwordTooShort;return}this.setView("dogsetup")}async handleFinishSetup(i){i&&i.preventDefault(),this.errorMessage="";const o=g.t.auth.errors;if(!this.dogName.trim()){this.errorMessage=o.petNameRequired;return}const s=this.householdName.trim()||`${this.dogName.trim()} Household`;this.isSubmitting=!0;try{await g.signUp({email:this.email.trim(),password:this.password,displayName:this.displayName.trim(),mode:"create",householdName:s,pet:{name:this.dogName.trim(),species:"dog",breed:this.dogBreed.trim(),birthday:this.dogBirthday,size:this.setupSize,avatarUrl:this.dogAvatar},trackingPreferences:this.trackingPrefs}),Object.entries(this.trackingPrefs).forEach(([r,l])=>{g.setTrackingPreference(r,l)}),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:g.currentLocale==="ko"?"준비 완료! 🎉":"All set! 🎉",sub:g.currentLocale==="ko"?"다음 번 산책 때 주황색 버튼을 눌러보세요.":"Tap the orange button the next time he goes."}}))}catch(r){this.errorMessage=r.message||o.signUpFailed}finally{this.isSubmitting=!1}}handleGoJoinDetails(i){i&&i.preventDefault(),this.errorMessage="";const o=g.t.auth.errors;if(!this.joinCode.trim()||this.joinCode.trim().length<4){this.errorMessage=o.inviteCodeRequired;return}this.setView("joindetails")}async handleJoinSubmit(i){var s;i&&i.preventDefault(),this.errorMessage="";const o=g.t.auth.errors;if(!this.displayName.trim()){this.errorMessage=o.yourNameRequired;return}if(!this.email.trim()){this.errorMessage=o.emailRequired;return}if(!this.password||this.password.length<6){this.errorMessage=o.passwordTooShort;return}this.isSubmitting=!0;try{await g.signUp({email:this.email.trim(),password:this.password,displayName:this.displayName.trim(),mode:"join",inviteCode:this.joinCode.trim().toUpperCase(),role:this.joinRole}),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:g.currentLocale==="ko"?`${this.joinRole}님, 환영합니다! 🎉`:`You're in, ${this.joinRole}! 🎉`,sub:((s=g.currentHousehold)==null?void 0:s.name)||"Household"}}))}catch(r){this.errorMessage=r.message||o.joinFailed}finally{this.isSubmitting=!1}}render(){const i=g.t.auth;if(this.view==="signin")return b`
        <div class="view-signin">
          <div class="logo-hero">
            <div class="brand-circle">
              <div class="p1"></div>
              <div class="p2"></div>
              <div class="p3"></div>
            </div>
            <div class="brand-title">${i.welcomeTitle}</div>
            <div class="brand-subtitle">${i.welcomeSubtitle}</div>
          </div>

          ${this.errorMessage?b`<div class="error-banner">⚠️ ${this.errorMessage}</div>`:null}

          <form class="card" @submit=${o=>this.handleLogin(o)}>
            <div>
              <label class="field-label">${i.emailLabel}</label>
              <input
                type="email"
                class="input-box"
                placeholder="${i.emailPlaceholder}"
                .value=${this.email}
                @input=${o=>this.email=o.target.value}
                required
              />
            </div>

            <div>
              <label class="field-label">${i.passwordLabel}</label>
              <div class="password-wrapper">
                <input
                  type="${this.showPassword?"text":"password"}"
                  class="password-input"
                  placeholder="${i.passwordPlaceholder}"
                  .value=${this.password}
                  @input=${o=>this.password=o.target.value}
                  required
                />
                <span
                  class="show-hide-btn"
                  @click=${()=>this.showPassword=!this.showPassword}
                >
                  ${this.showPassword?i.hide:i.show}
                </span>
              </div>
            </div>

            <button
              type="submit"
              class="btn-coral"
              ?disabled=${this.isSubmitting}
            >
              ${this.isSubmitting?b`<span class="btn-spinner"></span> ${g.currentLocale==="ko"?"로그인 중...":"Logging in..."}`:i.logInBtn}
            </button>

            <div
              style="text-align: center; font-size: 12.5px; font-weight: 800; color: #6A6152; cursor: pointer; padding: 3px;"
              @click=${()=>this.handleLogin()}
            >
              ${i.forgotPassword}
            </div>
          </form>

          <div class="divider-row">
            <div class="divider-line"></div>
            <div class="divider-text">${i.or}</div>
            <div class="divider-line"></div>
          </div>

          <div class="provider-btn" @click=${()=>this.handleLogin()}>
            <div class="provider-dot"></div>
            <div class="provider-text">${i.googleBtn}</div>
          </div>

          <div style="text-align: center; font-size: 13px; font-weight: 700; color: #7A5C00;">
            ${i.newHere}
            <span
              style="color: #17140F; font-weight: 800; text-decoration: underline; cursor: pointer;"
              @click=${()=>this.setView("signup")}
            >
              ${i.makeAccount}
            </span>
          </div>

          <div
            style="text-align: center; font-size: 13px; font-weight: 800; color: #17140F; text-decoration: underline; cursor: pointer; padding: 2px;"
            @click=${()=>this.setView("join")}
          >
            ${i.gotInviteCode}
          </div>
        </div>
      `;if(this.view==="signup"){const o=i.signupStep1,s=this.calculateStrength(this.password);return b`
        <div class="view-signup">
          <div class="back-btn" @click=${()=>this.setView("signin")}>
            ‹ ${o.back}
          </div>

          <div class="step-bar-row">
            <div class="step-pill" style="background: #FFCE2E;"></div>
            <div class="step-pill" style="background: #FFF;"></div>
            <div class="step-label">${o.stepCount}</div>
          </div>

          <div>
            <div class="section-headline">${o.title}</div>
            <div class="section-subtext">${o.subtitle}</div>
          </div>

          ${this.errorMessage?b`<div class="error-banner">⚠️ ${this.errorMessage}</div>`:null}

          <form class="card" @submit=${r=>this.handleGoToStep2(r)}>
            <div>
              <label class="field-label">${o.yourName}</label>
              <input
                type="text"
                class="input-box"
                placeholder="${o.yourNamePlaceholder}"
                .value=${this.displayName}
                @input=${r=>this.displayName=r.target.value}
                required
              />
            </div>

            <div>
              <label class="field-label">${o.email}</label>
              <input
                type="email"
                class="input-box"
                placeholder="${o.emailPlaceholder}"
                .value=${this.email}
                @input=${r=>this.email=r.target.value}
                required
              />
            </div>

            <div>
              <label class="field-label">${o.password}</label>
              <div class="password-wrapper">
                <input
                  type="${this.showPassword?"text":"password"}"
                  class="password-input"
                  placeholder="${o.passwordPlaceholder}"
                  .value=${this.password}
                  @input=${r=>this.password=r.target.value}
                  required
                />
                <span
                  class="show-hide-btn"
                  @click=${()=>this.showPassword=!this.showPassword}
                >
                  ${this.showPassword?i.hide:i.show}
                </span>
              </div>
              <div class="strength-row">
                <div class="strength-track">
                  <div
                    class="strength-fill"
                    style="width: ${s.width}; background: ${s.color};"
                  ></div>
                </div>
                <div class="strength-text">${s.label}</div>
              </div>
            </div>

            <button type="submit" class="btn-coral" style="margin-top: 4px;">
              ${o.nextTheDog}
            </button>
          </form>

          <div style="font-size: 11.5px; font-weight: 600; color: #9A9080; text-align: center; line-height: 1.5;">
            ${o.disclaimer}
          </div>
        </div>
      `}if(this.view==="dogsetup"){const o=i.signupStep2,s=["S","M","L","XL"];return b`
        <div class="view-dogsetup">
          <div class="back-btn" @click=${()=>this.setView("signup")}>
            ‹ ${o.back}
          </div>

          <div class="step-bar-row">
            <div class="step-pill" style="background: #1FC99B;"></div>
            <div class="step-pill" style="background: #FFCE2E;"></div>
            <div class="step-label">${o.stepCount}</div>
          </div>

          <div>
            <div class="section-headline">${o.title}</div>
            <div class="section-subtext">${o.subtitle}</div>
          </div>

          ${this.errorMessage?b`<div class="error-banner">⚠️ ${this.errorMessage}</div>`:null}

          <form class="card" @submit=${r=>this.handleFinishSetup(r)}>
            <div style="display: flex; gap: 14px; align-items: center;">
              <div
                class="photo-upload-circle"
                @click=${()=>g.openPhotoModal({target:"pet",currentAvatar:this.dogAvatar,title:"Pick Dog Avatar"})}
              >
                ${this.dogAvatar?b`<img src="${this.dogAvatar}" alt="Dog Avatar" />`:b`
                      <div style="font-size: 20px; font-weight: 800; color: #8A7F68;">+</div>
                      <div style="font-size: 9px; font-weight: 800; color: #8A7F68;">${o.photo}</div>
                    `}
              </div>
              <div style="flex: 1; min-width: 0;">
                <label class="field-label">${o.name}</label>
                <input
                  type="text"
                  class="input-box"
                  style="font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif); font-size: 19px; letter-spacing: -0.5px;"
                  placeholder="${o.namePlaceholder}"
                  .value=${this.dogName}
                  @input=${r=>this.dogName=r.target.value}
                  required
                />
              </div>
            </div>

            <div>
              <label class="field-label">${g.currentLocale==="ko"?"품종 (선택)":"Breed (optional)"}</label>
              <input
                type="text"
                class="input-box"
                placeholder="${g.currentLocale==="ko"?"예: 스푸들, 비글 믹스":"e.g. Spoodle, Beagle mix"}"
                .value=${this.dogBreed}
                @input=${r=>this.dogBreed=r.target.value}
              />
            </div>

            <div>
              <label class="field-label">${g.currentLocale==="ko"?"생일 또는 나이":"Birthday or Age"}</label>
              <input
                type="date"
                class="input-box"
                .value=${this.dogBirthday}
                @input=${r=>this.dogBirthday=r.target.value}
              />
              <div class="age-chips-row">
                ${[1,2,3,4,5,6,7,8].map(r=>b`
                    <div
                      class="age-chip"
                      @click=${()=>{const l=new Date;l.setFullYear(l.getFullYear()-r),this.dogBirthday=l.toISOString().slice(0,10)}}
                    >
                      ${g.currentLocale==="ko"?`${r}살`:`${r} yr${r>1?"s":""}`}
                    </div>
                  `)}
              </div>
            </div>

            <div>
              <label class="field-label">${o.householdName}</label>
              <input
                type="text"
                class="input-box"
                placeholder="${o.householdNamePlaceholder}"
                .value=${this.householdName}
                @input=${r=>this.householdName=r.target.value}
              />
              <div style="font-size: 11px; font-weight: 600; color: #9A9080; margin-top: 6px; line-height: 1.4;">
                ${o.householdHelp}
              </div>
            </div>

            <div>
              <label class="field-label">${o.size}</label>
              <div class="size-grid">
                ${s.map(r=>{const l=o.sizes[r],c=this.setupSize===r;return b`
                    <div
                      class="size-tile ${c?"active":""}"
                      @click=${()=>this.setupSize=r}
                    >
                      <div style="font-size: 13.5px; font-weight: 800; color: #17140F;">${l.label}</div>
                      <div style="font-size: 9.5px; font-weight: 700; color: #6A6152;">${l.kg}</div>
                    </div>
                  `})}
              </div>
            </div>

            <div>
              <label class="field-label">${o.whatTrack}</label>
              <div class="track-chips-grid">
                ${Object.entries(o.trackingOptions).map(([r,l])=>{const c=!!this.trackingPrefs[r];return b`
                    <div
                      class="track-chip ${c?"active":""}"
                      @click=${()=>{this.trackingPrefs={...this.trackingPrefs,[r]:!this.trackingPrefs[r]}}}
                    >
                      <div class="track-dot"></div>
                      <span>${l}</span>
                    </div>
                  `})}
              </div>
            </div>

            <button
              type="submit"
              class="btn-green"
              ?disabled=${this.isSubmitting}
            >
              ${this.isSubmitting?b`<span class="btn-spinner"></span> ${g.currentLocale==="ko"?"설정 중...":"Setting up..."}`:o.startTracking}
            </button>
          </form>

          <div
            style="text-align: center; font-size: 12.5px; font-weight: 700; color: #6A6152; cursor: pointer; padding: 2px; line-height: 1.45;"
            @click=${()=>g.setActiveTab("import")}
          >
            ${o.alreadyTracking} <span style="text-decoration: underline;">${o.importHistory}</span>
          </div>
        </div>
      `}if(this.view==="join"){const o=i.joinStep1,s=(this.joinCode.toUpperCase()+"      ").slice(0,6).split("");return b`
        <div class="view-join">
          <div class="back-btn" @click=${()=>this.setView("signin")}>
            ‹ ${o.back}
          </div>

          <div>
            <div class="section-headline">${o.title}</div>
            <div class="section-subtext-mint">${o.subtitle}</div>
          </div>

          ${this.errorMessage?b`<div class="error-banner">⚠️ ${this.errorMessage}</div>`:null}

          <form class="card" @submit=${r=>this.handleGoJoinDetails(r)}>
            <div style="font-size: 10.5px; font-weight: 800; letter-spacing: 1.4px; color: #9A9080; text-transform: uppercase; text-align: center;">
              ${o.enterCode}
            </div>

            <div class="code-boxes-row">
              ${s.map(r=>b`
                <div class="code-box ${r.trim()?"filled":""}">
                  ${r.trim()}
                </div>
              `)}
              <input
                type="text"
                maxlength="6"
                class="hidden-code-input"
                .value=${this.joinCode}
                @input=${r=>this.joinCode=r.target.value.toUpperCase()}
                autofocus
              />
            </div>

            <button type="submit" class="btn-coral" style="margin-top: 10px;">
              ${o.continueBtn}
            </button>
          </form>

          <div class="perks-card">
            <div style="font-size: 13.5px; font-weight: 800; color: #FFF;">${o.perksTitle}</div>
            <div style="display: flex; flex-direction: column; gap: 7px; margin-top: 9px;">
              ${o.perks.map(r=>b`
                <div class="perk-item">
                  <div class="perk-badge"></div>
                  <div style="font-size: 12.5px; font-weight: 600; color: #CFF0E6; line-height: 1.4; flex: 1;">
                    ${r}
                  </div>
                </div>
              `)}
            </div>
          </div>
        </div>
      `}if(this.view==="joindetails"){const o=i.joinStep2,s=[this.displayName||"Dan",`${this.displayName||"Dan"} the walker`,`${this.displayName?this.displayName+" W.":"Dan W."}`,"The walker"];return b`
        <div class="view-joindetails">
          <div class="back-btn" @click=${()=>this.setView("join")}>
            ‹ ${o.back}
          </div>

          <div class="accepted-badge-card">
            <div class="checkmark-circle">✓</div>
            <div style="flex: 1; min-width: 0;">
              <div style="font-size: 10px; font-weight: 800; letter-spacing: 1.4px; color: #9A9080; text-transform: uppercase;">
                ${o.codeAccepted}
              </div>
              <div style="font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif); font-weight: 800; font-size: 18px; color: #17140F; letter-spacing: -0.5px; line-height: 1.15; margin-top: 1px;">
                ${this.householdName||"Household"}
              </div>
              <div style="font-size: 11.5px; font-weight: 700; color: #6A6152; margin-top: 1px;">
                ${o.summarySubtitle("3 people",this.joinRole)}
              </div>
            </div>
          </div>

          <div>
            <div class="section-headline">${o.title}</div>
            <div class="section-subtext-mint">${o.subtitle}</div>
          </div>

          ${this.errorMessage?b`<div class="error-banner">⚠️ ${this.errorMessage}</div>`:null}

          <form class="card" @submit=${r=>this.handleJoinSubmit(r)}>
            <div style="display: flex; gap: 13px; align-items: flex-end;">
              <div
                class="photo-upload-circle"
                style="width: 64px; height: 64px;"
                @click=${()=>g.openPhotoModal({target:"user",currentAvatar:this.userAvatar,title:"Pick Profile Photo"})}
              >
                ${this.userAvatar?b`<img src="${this.userAvatar}" alt="User Avatar" />`:b`
                      <div style="font-size: 18px; font-weight: 800; color: #8A7F68;">+</div>
                      <div style="font-size: 8.5px; font-weight: 800; color: #8A7F68;">photo</div>
                    `}
              </div>
              <div style="flex: 1; min-width: 0;">
                <label class="field-label">${o.yourName}</label>
                <input
                  type="text"
                  class="input-box"
                  placeholder="${o.yourNamePlaceholder}"
                  .value=${this.displayName}
                  @input=${r=>this.displayName=r.target.value}
                  required
                />
              </div>
            </div>

            <div>
              <label class="field-label">${o.email}</label>
              <input
                type="email"
                class="input-box"
                placeholder="${o.emailPlaceholder}"
                .value=${this.email}
                @input=${r=>this.email=r.target.value}
                required
              />
            </div>

            <div>
              <label class="field-label">${o.password}</label>
              <div class="password-wrapper">
                <input
                  type="${this.showPassword?"text":"password"}"
                  class="password-input"
                  placeholder="${o.passwordPlaceholder}"
                  .value=${this.password}
                  @input=${r=>this.password=r.target.value}
                  required
                />
                <span
                  class="show-hide-btn"
                  @click=${()=>this.showPassword=!this.showPassword}
                >
                  ${this.showPassword?i.hide:i.show}
                </span>
              </div>
            </div>

            <div>
              <label class="field-label">${o.howTheySeeYou}</label>
              <div class="role-chips-row">
                ${s.map(r=>{const l=this.joinRole===r;return b`
                    <div
                      class="role-chip ${l?"active":""}"
                      @click=${()=>this.joinRole=r}
                    >
                      <span>${r}</span>
                    </div>
                  `})}
              </div>
            </div>

            <button
              type="submit"
              class="btn-coral"
              ?disabled=${this.isSubmitting}
            >
              ${this.isSubmitting?b`<span class="btn-spinner"></span> ${g.currentLocale==="ko"?"가입 중...":"Joining..."}`:o.joinHouseholdBtn}
            </button>
          </form>

          <div style="font-size: 11.5px; font-weight: 600; color: #0A5A45; text-align: center; line-height: 1.5;">
            ${o.footerDisclaimer}
          </div>
        </div>
      `}return b``}},si.styles=zt`
    :host {
      display: block;
      width: 100%;
      min-height: 100%;
      box-sizing: border-box;
      animation: fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(6px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* Base Container Variants */
    .view-signin {
      min-height: 100%;
      box-sizing: border-box;
      padding: 74px 20px 34px;
      background: #FFCE2E;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .view-signup, .view-dogsetup {
      min-height: 100%;
      box-sizing: border-box;
      padding: 56px 20px 34px;
      background: #FFFBF2;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .view-join, .view-joindetails {
      min-height: 100%;
      box-sizing: border-box;
      padding: 56px 20px 34px;
      background: #1FC99B;
      display: flex;
      flex-direction: column;
      gap: 18px;
    }

    /* Back Button */
    .back-btn {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 14px;
      padding: 8px 13px;
      font-size: 12.5px;
      font-weight: 800;
      color: #17140F;
      cursor: pointer;
      width: fit-content;
      box-shadow: 3px 3px 0 #17140F;
      user-select: none;
      transition: transform 0.1s ease, box-shadow 0.1s ease;
    }

    .back-btn:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    /* Brand Logo & Titles */
    .logo-hero {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 9px;
      text-align: center;
    }

    .brand-circle {
      width: 82px;
      height: 82px;
      border-radius: 50%;
      border: 4px solid #17140F;
      background: #FF5A3C;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 3px;
      padding-bottom: 8px;
      box-sizing: border-box;
      box-shadow: 5px 5px 0 #17140F;
    }

    .brand-circle .p1 { width: 20px; height: 9px; border-radius: 50%; background: #FFF; }
    .brand-circle .p2 { width: 32px; height: 12px; border-radius: 50%; background: #FFF; }
    .brand-circle .p3 { width: 44px; height: 14px; border-radius: 50%; background: #FFF; }

    .brand-title {
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 44px;
      color: #17140F;
      letter-spacing: -2px;
      line-height: 1;
    }

    .brand-subtitle {
      font-size: 13.5px;
      font-weight: 700;
      color: #7A5C00;
      text-align: center;
      line-height: 1.45;
      max-width: 260px;
    }

    /* Step Indicators */
    .step-bar-row {
      display: flex;
      align-items: center;
      gap: 9px;
    }

    .step-pill {
      flex: 1;
      height: 12px;
      border-radius: 12px;
      border: 3px solid #17140F;
      box-sizing: border-box;
    }

    .step-label {
      font-size: 11px;
      font-weight: 800;
      color: #9A9080;
      letter-spacing: 0.8px;
      flex: none;
    }

    .section-headline {
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 31px;
      color: #17140F;
      letter-spacing: -1.2px;
      line-height: 1.08;
    }

    .section-subtext {
      font-size: 13px;
      font-weight: 600;
      color: #6A6152;
      margin-top: 4px;
      line-height: 1.45;
    }

    .section-subtext-mint {
      font-size: 13px;
      font-weight: 600;
      color: #0A5A45;
      margin-top: 5px;
      line-height: 1.5;
    }

    /* Cards */
    .card {
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 24px;
      padding: 17px;
      box-shadow: 5px 5px 0 #17140F;
      display: flex;
      flex-direction: column;
      gap: 13px;
      box-sizing: border-box;
    }

    .field-label {
      font-size: 10.5px;
      font-weight: 800;
      letter-spacing: 1.3px;
      color: #9A9080;
      text-transform: uppercase;
      margin-bottom: 5px;
      display: block;
    }

    .input-box {
      width: 100%;
      box-sizing: border-box;
      border: 3px solid #17140F;
      border-radius: 16px;
      padding: 13px 14px;
      font-size: 14.5px;
      font-weight: 700;
      color: #17140F;
      background: #FFF9E9;
      outline: none;
      font-family: inherit;
    }

    .input-box:focus {
      background: #FFF;
      border-color: #FF5A3C;
    }

    .password-wrapper {
      border: 3px solid #17140F;
      border-radius: 16px;
      padding: 6px 14px;
      background: #FFF9E9;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .password-input {
      flex: 1;
      border: none;
      background: transparent;
      outline: none;
      font-size: 14.5px;
      font-weight: 700;
      color: #17140F;
      font-family: inherit;
      padding: 7px 0;
    }

    .show-hide-btn {
      font-size: 12px;
      font-weight: 800;
      color: #2B5BE8;
      cursor: pointer;
      flex: none;
      user-select: none;
    }

    /* Strength Bar */
    .strength-row {
      display: flex;
      align-items: center;
      gap: 7px;
      margin-top: 8px;
    }

    .strength-track {
      flex: 1;
      height: 8px;
      border-radius: 8px;
      border: 2.5px solid #17140F;
      background: #FFF9E9;
      overflow: hidden;
      box-sizing: border-box;
    }

    .strength-fill {
      height: 100%;
      transition: width 0.2s ease, background 0.2s ease;
    }

    .strength-text {
      font-size: 11px;
      font-weight: 800;
      color: #0A5A45;
      flex: none;
    }

    /* Buttons */
    .btn-coral {
      background: #FF5A3C;
      border: 3px solid #17140F;
      border-radius: 18px;
      padding: 16px;
      text-align: center;
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 18px;
      color: #FFF;
      cursor: pointer;
      box-shadow: 4px 4px 0 #17140F;
      user-select: none;
      transition: background 0.1s ease, transform 0.1s ease, box-shadow 0.1s ease;
    }

    .btn-coral:hover {
      background: #FF7659;
    }

    .btn-coral:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .btn-green {
      background: #1FC99B;
      border: 3px solid #17140F;
      border-radius: 20px;
      padding: 17px;
      text-align: center;
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 18px;
      color: #17140F;
      cursor: pointer;
      box-shadow: 4px 4px 0 #17140F;
      user-select: none;
      transition: transform 0.1s ease, box-shadow 0.1s ease;
    }

    .btn-green:hover {
      transform: translate(-1px, -1px);
      box-shadow: 6px 6px 0 #17140F;
    }

    .btn-green:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .divider-row {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .divider-line {
      flex: 1;
      height: 3px;
      background: #D8A81E;
    }

    .divider-text {
      font-size: 11px;
      font-weight: 800;
      color: #7A5C00;
      letter-spacing: 1.2px;
    }

    .provider-btn {
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 18px;
      padding: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      cursor: pointer;
      box-shadow: 3px 3px 0 #17140F;
      user-select: none;
      transition: transform 0.1s ease, box-shadow 0.1s ease;
    }

    .provider-btn:hover {
      transform: translate(-1px, -1px);
      box-shadow: 5px 5px 0 #17140F;
    }

    .provider-dot {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      border: 2.5px solid #17140F;
      background: #2B5BE8;
      flex: none;
    }

    .provider-text {
      font-size: 14.5px;
      font-weight: 800;
      color: #17140F;
    }

    /* Photo Upload Box */
    .photo-upload-circle {
      width: 74px;
      height: 74px;
      border-radius: 50%;
      flex: none;
      border: 3px dashed #17140F;
      background: repeating-linear-gradient(45deg, #F0E7D3 0 6px, #E3D8BE 6px 12px);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2px;
      cursor: pointer;
      overflow: hidden;
      position: relative;
    }

    .photo-upload-circle img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .size-grid {
      display: flex;
      gap: 8px;
    }

    .size-tile {
      flex: 1;
      min-height: 52px;
      border-radius: 15px;
      border: 3px solid #17140F;
      background: #FFF;
      box-shadow: 3px 3px 0 #17140F;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2px;
      cursor: pointer;
      user-select: none;
      transition: all 0.1s ease;
    }

    .size-tile.active {
      background: #FFCE2E;
      box-shadow: 1px 1px 0 #17140F;
      transform: translate(2px, 2px);
    }

    .track-chips-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .track-chip {
      border-radius: 14px;
      padding: 10px 13px;
      cursor: pointer;
      font-size: 13px;
      font-weight: 800;
      min-height: 42px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      gap: 7px;
      background: #FFF;
      color: #17140F;
      border: 3px solid #17140F;
      box-shadow: 3px 3px 0 #17140F;
      user-select: none;
      transition: all 0.1s ease;
    }

    .track-chip.active {
      background: #FFCE2E;
      box-shadow: 1px 1px 0 #17140F;
    }

    .track-dot {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      border: 2px solid #17140F;
      background: #FFF;
      box-sizing: border-box;
      flex: none;
    }

    .age-chips-row {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-top: 6px;
    }

    .age-chip {
      padding: 6px 11px;
      border-radius: 12px;
      border: 2px solid #17140F;
      background: #FFF;
      font-size: 11px;
      font-weight: 800;
      color: #17140F;
      cursor: pointer;
      box-shadow: 1.5px 1.5px 0 #17140F;
      transition: all 0.1s;
      user-select: none;
    }

    .age-chip:hover {
      background: #FFCE2E;
    }

    .age-chip:active {
      transform: translate(1px, 1px);
      box-shadow: 0.5px 0.5px 0 #17140F;
    }

    .track-chip.active .track-dot {
      background: #FF5A3C;
    }

    /* Join Code Input Boxes */
    .code-boxes-row {
      display: flex;
      gap: 6px;
      margin-top: 11px;
      justify-content: center;
      position: relative;
    }

    .code-box {
      flex: 1;
      max-width: 48px;
      aspect-ratio: 0.82;
      border-radius: 13px;
      border: 3px solid #17140F;
      background: #FFF;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 23px;
      color: #17140F;
    }

    .code-box.filled {
      background: #FFF9E9;
    }

    .hidden-code-input {
      position: absolute;
      inset: 0;
      opacity: 0;
      cursor: pointer;
      width: 100%;
      height: 100%;
    }

    .perks-card {
      background: #0F7A5E;
      border: 3px solid #17140F;
      border-radius: 22px;
      padding: 16px;
      color: #FFF;
    }

    .perk-item {
      display: flex;
      gap: 9px;
      align-items: flex-start;
      margin-top: 7px;
    }

    .perk-badge {
      width: 17px;
      height: 17px;
      border-radius: 6px;
      border: 2.5px solid #17140F;
      background: #FFCE2E;
      flex: none;
      margin-top: 1px;
    }

    .accepted-badge-card {
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 22px;
      padding: 15px;
      box-shadow: 5px 5px 0 #17140F;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .checkmark-circle {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      border: 3px solid #17140F;
      background: #FFCE2E;
      flex: none;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 17px;
      font-weight: 800;
      color: #17140F;
    }

    .role-chips-row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .role-chip {
      border-radius: 14px;
      padding: 10px 13px;
      cursor: pointer;
      font-size: 13px;
      font-weight: 800;
      min-height: 42px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      background: #FFF;
      color: #17140F;
      border: 3px solid #17140F;
      box-shadow: 3px 3px 0 #17140F;
      user-select: none;
    }

    .role-chip.active {
      background: #FFCE2E;
      box-shadow: 1px 1px 0 #17140F;
      transform: translate(2px, 2px);
    }

    .error-banner {
      background: #FFE8E5;
      border: 2.5px solid #FF5A3C;
      border-radius: 16px;
      padding: 11px 14px;
      font-size: 12.5px;
      font-weight: 800;
      color: #C0260E;
      display: flex;
      align-items: center;
      gap: 8px;
      line-height: 1.4;
      margin-bottom: 4px;
    }

    .btn-spinner {
      display: inline-block;
      width: 14px;
      height: 14px;
      border: 2.5px solid #17140F;
      border-top-color: transparent;
      border-radius: 50%;
      animation: spin 0.6s linear infinite;
      vertical-align: middle;
      margin-right: 6px;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `,si);Mt([z()],Lt.prototype,"view",void 0);Mt([z()],Lt.prototype,"email",void 0);Mt([z()],Lt.prototype,"password",void 0);Mt([z()],Lt.prototype,"showPassword",void 0);Mt([z()],Lt.prototype,"displayName",void 0);Mt([z()],Lt.prototype,"userAvatar",void 0);Mt([z()],Lt.prototype,"dogName",void 0);Mt([z()],Lt.prototype,"dogBreed",void 0);Mt([z()],Lt.prototype,"dogBirthday",void 0);Mt([z()],Lt.prototype,"householdName",void 0);Mt([z()],Lt.prototype,"dogAvatar",void 0);Mt([z()],Lt.prototype,"setupSize",void 0);Mt([z()],Lt.prototype,"trackingPrefs",void 0);Mt([z()],Lt.prototype,"joinCode",void 0);Mt([z()],Lt.prototype,"joinRole",void 0);Mt([z()],Lt.prototype,"errorMessage",void 0);Mt([z()],Lt.prototype,"isSubmitting",void 0);Lt=Mt([At("dooty-auth")],Lt);var wo=function(h,i,o,s){var r=arguments.length,l=r<3?i:s===null?s=Object.getOwnPropertyDescriptor(i,o):s,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,i,o,s);else for(var u=h.length-1;u>=0;u--)(c=h[u])&&(l=(r<3?c(l):r>3?c(i,o,l):c(i,o))||l);return r>3&&l&&Object.defineProperty(i,o,l),l},ai;let Bi=(ai=class extends yt{constructor(){super(...arguments),this.activeView="today",this.toast=null,this.burstCount=0}connectedCallback(){super.connectedCallback(),this.unsubscribe=g.subscribe(()=>{this.activeView=g.activeTab,this.requestUpdate()}),this.addEventListener("dooty-navigate",i=>{this.activeView=i.detail,g.activeTab=i.detail,this.requestUpdate()}),this.addEventListener("dooty-toast",i=>{this.showToast(i.detail.title,i.detail.sub)}),g.init()}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.unsubscribe)==null||i.call(this),this.toastTimer&&clearTimeout(this.toastTimer)}showToast(i,o){this.toastTimer&&clearTimeout(this.toastTimer),this.toast={title:i,sub:o},this.burstCount++,this.requestUpdate(),this.toastTimer=setTimeout(()=>{this.toast=null,this.requestUpdate()},3200)}render(){const i=g.isAuthenticated,o=i&&this.activeView!=="wrapped",s=["#FF5A3C","#FFCE2E","#2B5BE8","#1FC99B","#17140F"];return b`
      <!-- Outer Container -->
      <div class="device-shell">
        <!-- Universal Top API Progress Bar -->
        <div class="api-progress-bar ${g.isApiActive?"active":""}"></div>

        <!-- Floating Cloud Sync Status Pill -->
        ${g.isApiActive?b`
              <div class="api-sync-badge">
                <div class="api-sync-spinner"></div>
                <span class="api-sync-text">
                  ${g.currentLocale==="ko"?"동기화 중...":"Syncing..."}
                </span>
              </div>
            `:null}

        <!-- Viewport -->
        <div class="device-viewport">
          ${i?this.activeView==="today"?b`<dooty-home></dooty-home>`:this.activeView==="history"?b`<dooty-history></dooty-history>`:this.activeView==="analytics"?b`<dooty-numbers></dooty-numbers>`:this.activeView==="map"?b`<dooty-map></dooty-map>`:this.activeView==="dog"?b`<dooty-dog></dooty-dog>`:this.activeView==="deep"?b`<dooty-deep></dooty-deep>`:this.activeView==="wrapped"?b`<dooty-wrapped></dooty-wrapped>`:this.activeView==="settings"?b`<dooty-settings></dooty-settings>`:this.activeView==="invite"?b`<dooty-invite></dooty-invite>`:this.activeView==="import"?b`<dooty-importer></dooty-importer>`:b`<dooty-home></dooty-home>`:b`<dooty-auth></dooty-auth>`}
        </div>

        <!-- Live Walk Overlay & Floating Banner Suite -->
        ${i?b`<dooty-walk></dooty-walk>`:null}

        <!-- Sticky Floating Dock (Pinned to bottom of device-shell, only when authenticated) -->
        ${o?b`<dooty-dock></dooty-dock>`:null}

        <!-- Toast Notification (Pinned over dock) -->
        ${this.toast?b`
              <div class="toast-pill">
                <div class="toast-icon">
                  <div style="width:7px; height:4px; border-radius:50%; background:#17140F;"></div>
                  <div style="width:11px; height:5px; border-radius:50%; background:#17140F;"></div>
                  <div style="width:15px; height:6px; border-radius:50%; background:#17140F;"></div>
                </div>
                <div style="flex: 1; min-width: 0;">
                  <div class="toast-title">${this.toast.title}</div>
                  <div class="toast-sub">${this.toast.sub}</div>
                </div>
              </div>
            `:null}

        <!-- Confetti Burst Layer -->
        ${this.burstCount>0&&this.toast?b`
              <div class="burst-layer">
                ${Array.from({length:26},(r,l)=>{const c=l/26*Math.PI*2,u=Math.round(Math.cos(c)*(120+l%4*40)),f=Math.round(Math.sin(c)*(120+l%4*40)-90),v=700+l%5*130;return b`
                    <div
                      class="confetti-particle"
                      style="
                        width: ${l%3?9:13}px;
                        height: ${l%3?9:13}px;
                        border-radius: ${l%2?"50%":"3px"};
                        background: ${s[l%5]};
                        --dx: ${u}px;
                        --dy: ${f}px;
                        animation: tb-burst ${v}ms cubic-bezier(.15,.7,.35,1) forwards;
                      "
                    ></div>
                  `})}
              </div>
            `:null}

        <!-- Sliding Log Sheet Modal (Covers viewport when opened) -->
        <dooty-sheet></dooty-sheet>

        <!-- Pet Switcher Bottom Sheet Modal -->
        <dooty-pet-switcher></dooty-pet-switcher>

        <!-- Photo & Avatar Customization Modal -->
        <dooty-photo-modal></dooty-photo-modal>
      </div>
    `}},ai.styles=zt`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      min-height: 100vh;
      min-height: 100dvh;
      background: var(--color-cream-light, #FFFBF2);
      box-sizing: border-box;
    }

    /* Main Container */
    .device-shell {
      width: 100%;
      max-width: 480px;
      height: 100vh;
      height: 100dvh;
      background: var(--color-cream-light, #FFFBF2);
      position: relative;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      overflow: hidden;
    }

    .device-viewport {
      flex: 1;
      width: 100%;
      height: 100%;
      position: relative;
      overflow-y: auto;
      overflow-x: hidden;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
      -ms-overflow-style: none;
    }

    .device-viewport::-webkit-scrollbar {
      display: none;
    }

    /* Green Toast */
    .toast-pill {
      position: absolute;
      left: 16px;
      right: 16px;
      bottom: 104px;
      width: auto;
      box-sizing: border-box;
      z-index: 120;
      background: #1FC99B;
      border: 3px solid #17140F;
      border-radius: 22px;
      padding: 15px 16px;
      box-shadow: 5px 5px 0 #17140F;
      animation: tb-pop 0.32s cubic-bezier(0.2, 1.4, 0.4, 1) both;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .toast-icon {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2.5px solid #17140F;
      background: #FFCE2E;
      flex: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1px;
      padding-bottom: 3px;
      box-sizing: border-box;
      animation: tb-wob 1.1s ease-in-out infinite;
    }

    .toast-title {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 17px;
      color: #17140F;
      letter-spacing: -0.3px;
    }

    .toast-sub {
      font-size: 12px;
      font-weight: 700;
      color: #0A5A45;
      margin-top: 1px;
    }

    /* Confetti Burst */
    .burst-layer {
      position: absolute;
      inset: 0;
      pointer-events: none;
      overflow: hidden;
      z-index: 115;
    }

    .confetti-particle {
      position: absolute;
      left: 50%;
      bottom: 60px;
      border: 2px solid #17140F;
      box-sizing: border-box;
    }

    /* Universal Top API Activity Progress Bar */
    .api-progress-bar {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      z-index: 300;
      background: linear-gradient(
        90deg,
        #FF5A3C 0%,
        #FFCE2E 25%,
        #1FC99B 50%,
        #2B5BE8 75%,
        #FF5A3C 100%
      );
      background-size: 200% 100%;
      animation: api-bar-slide 0.85s linear infinite;
      box-shadow: 0 1px 4px rgba(23, 20, 15, 0.25);
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.2s ease;
    }

    .api-progress-bar.active {
      opacity: 1;
    }

    /* Floating Cloud Sync Pill */
    .api-sync-badge {
      position: absolute;
      top: 14px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 290;
      background: #FFFFFF;
      border: 2.5px solid #17140F;
      border-radius: 20px;
      padding: 5px 12px;
      display: inline-flex;
      align-items: center;
      gap: 7px;
      box-shadow: 3px 3px 0 #17140F;
      pointer-events: none;
      animation: api-pill-pop 0.28s cubic-bezier(0.2, 1.4, 0.4, 1) both;
    }

    .api-sync-spinner {
      width: 12px;
      height: 12px;
      border: 2px solid #E2D9C8;
      border-top-color: #FF5A3C;
      border-radius: 50%;
      animation: spin 0.6s linear infinite;
      flex: none;
    }

    .api-sync-text {
      font-size: 11px;
      font-weight: 800;
      color: #17140F;
      letter-spacing: -0.2px;
      font-family: var(--font-body);
    }
  `,ai);wo([z()],Bi.prototype,"activeView",void 0);wo([z()],Bi.prototype,"toast",void 0);wo([z()],Bi.prototype,"burstCount",void 0);Bi=wo([At("dooty-app")],Bi);const Il="modulepreload",Rl=function(h,i){return new URL(h,i).href},qs={},Hl=function(i,o,s){let r=Promise.resolve();if(o&&o.length>0){let c=function(w){return Promise.all(w.map(x=>Promise.resolve(x).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};const u=document.getElementsByTagName("link"),f=document.querySelector("meta[property=csp-nonce]"),v=(f==null?void 0:f.nonce)||(f==null?void 0:f.getAttribute("nonce"));r=c(o.map(w=>{if(w=Rl(w,s),w in qs)return;qs[w]=!0;const x=w.endsWith(".css"),_=x?'[rel="stylesheet"]':"";if(!!s)for(let S=u.length-1;S>=0;S--){const D=u[S];if(D.href===w&&(!x||D.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${w}"]${_}`))return;const $=document.createElement("link");if($.rel=x?"stylesheet":Il,x||($.as="script"),$.crossOrigin="",$.href=w,v&&$.setAttribute("nonce",v),document.head.appendChild($),x)return new Promise((S,D)=>{$.addEventListener("load",S),$.addEventListener("error",()=>D(new Error(`Unable to preload CSS for ${w}`)))})}))}function l(c){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=c,window.dispatchEvent(u),!u.defaultPrevented)throw c}return r.then(c=>{for(const u of c||[])u.status==="rejected"&&l(u.reason);return i().catch(l)})};function jl(h={}){const{immediate:i=!1,onNeedRefresh:o,onOfflineReady:s,onRegistered:r,onRegisteredSW:l,onRegisterError:c}=h;let u,f;const v=async(x=!0)=>{await f};async function w(){if("serviceWorker"in navigator){if(u=await Hl(async()=>{const{Workbox:x}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:x}},[],import.meta.url).then(({Workbox:x})=>new x("./sw.js",{scope:"./",type:"classic"})).catch(x=>{c==null||c(x)}),!u)return;u.addEventListener("activated",x=>{(x.isUpdate||x.isExternal)&&window.location.reload()}),u.addEventListener("installed",x=>{x.isUpdate||s==null||s()}),u.register({immediate:i}).then(x=>{l?l("./sw.js",x):r==null||r(x)}).catch(x=>{c==null||c(x)})}}return f=w(),v}jl({onNeedRefresh(){console.log("New app version available.")},onOfflineReady(){console.log("App ready to work offline.")}});
