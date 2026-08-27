(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const d of r)if(d.type==="childList")for(const c of d.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const d={};return r.integrity&&(d.integrity=r.integrity),r.referrerPolicy&&(d.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?d.credentials="include":r.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(r){if(r.ep)return;r.ep=!0;const d=n(r);fetch(r.href,d)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const io=globalThis,an=io.ShadowRoot&&(io.ShadyCSS===void 0||io.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,rn=Symbol(),cs=new WeakMap;let Ns=class{constructor(i,n,s){if(this._$cssResult$=!0,s!==rn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this.t=n}get styleSheet(){let i=this.o;const n=this.t;if(an&&i===void 0){const s=n!==void 0&&n.length===1;s&&(i=cs.get(n)),i===void 0&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),s&&cs.set(n,i))}return i}toString(){return this.cssText}};const pr=h=>new Ns(typeof h=="string"?h:h+"",void 0,rn),At=(h,...i)=>{const n=h.length===1?h[0]:i.reduce((s,r,d)=>s+(c=>{if(c._$cssResult$===!0)return c.cssText;if(typeof c=="number")return c;throw Error("Value passed to 'css' function must be a 'css' function result: "+c+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+h[d+1],h[0]);return new Ns(n,h,rn)},ur=(h,i)=>{if(an)h.adoptedStyleSheets=i.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of i){const s=document.createElement("style"),r=io.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=n.cssText,h.appendChild(s)}},hs=an?h=>h:h=>h instanceof CSSStyleSheet?(i=>{let n="";for(const s of i.cssRules)n+=s.cssText;return pr(n)})(h):h;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:fr,defineProperty:gr,getOwnPropertyDescriptor:mr,getOwnPropertyNames:vr,getOwnPropertySymbols:xr,getPrototypeOf:yr}=Object,pe=globalThis,ps=pe.trustedTypes,br=ps?ps.emptyScript:"",Uo=pe.reactiveElementPolyfillSupport,ki=(h,i)=>h,oo={toAttribute(h,i){switch(i){case Boolean:h=h?br:null;break;case Object:case Array:h=h==null?h:JSON.stringify(h)}return h},fromAttribute(h,i){let n=h;switch(i){case Boolean:n=h!==null;break;case Number:n=h===null?null:Number(h);break;case Object:case Array:try{n=JSON.parse(h)}catch{n=null}}return n}},ln=(h,i)=>!fr(h,i),us={attribute:!0,type:String,converter:oo,reflect:!1,useDefault:!1,hasChanged:ln};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),pe.litPropertyMetadata??(pe.litPropertyMetadata=new WeakMap);let Re=class extends HTMLElement{static addInitializer(i){this._$Ei(),(this.l??(this.l=[])).push(i)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(i,n=us){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(i)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(i,n),!n.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(i,s,n);r!==void 0&&gr(this.prototype,i,r)}}static getPropertyDescriptor(i,n,s){const{get:r,set:d}=mr(this.prototype,i)??{get(){return this[n]},set(c){this[n]=c}};return{get:r,set(c){const u=r==null?void 0:r.call(this);d==null||d.call(this,c),this.requestUpdate(i,u,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(i){return this.elementProperties.get(i)??us}static _$Ei(){if(this.hasOwnProperty(ki("elementProperties")))return;const i=yr(this);i.finalize(),i.l!==void 0&&(this.l=[...i.l]),this.elementProperties=new Map(i.elementProperties)}static finalize(){if(this.hasOwnProperty(ki("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ki("properties"))){const n=this.properties,s=[...vr(n),...xr(n)];for(const r of s)this.createProperty(r,n[r])}const i=this[Symbol.metadata];if(i!==null){const n=litPropertyMetadata.get(i);if(n!==void 0)for(const[s,r]of n)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[n,s]of this.elementProperties){const r=this._$Eu(n,s);r!==void 0&&this._$Eh.set(r,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(i){const n=[];if(Array.isArray(i)){const s=new Set(i.flat(1/0).reverse());for(const r of s)n.unshift(hs(r))}else i!==void 0&&n.push(hs(i));return n}static _$Eu(i,n){const s=n.attribute;return s===!1?void 0:typeof s=="string"?s:typeof i=="string"?i.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var i;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(i=this.constructor.l)==null||i.forEach(n=>n(this))}addController(i){var n;(this._$EO??(this._$EO=new Set)).add(i),this.renderRoot!==void 0&&this.isConnected&&((n=i.hostConnected)==null||n.call(i))}removeController(i){var n;(n=this._$EO)==null||n.delete(i)}_$E_(){const i=new Map,n=this.constructor.elementProperties;for(const s of n.keys())this.hasOwnProperty(s)&&(i.set(s,this[s]),delete this[s]);i.size>0&&(this._$Ep=i)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ur(i,this.constructor.elementStyles),i}connectedCallback(){var i;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(i=this._$EO)==null||i.forEach(n=>{var s;return(s=n.hostConnected)==null?void 0:s.call(n)})}enableUpdating(i){}disconnectedCallback(){var i;(i=this._$EO)==null||i.forEach(n=>{var s;return(s=n.hostDisconnected)==null?void 0:s.call(n)})}attributeChangedCallback(i,n,s){this._$AK(i,s)}_$ET(i,n){var d;const s=this.constructor.elementProperties.get(i),r=this.constructor._$Eu(i,s);if(r!==void 0&&s.reflect===!0){const c=(((d=s.converter)==null?void 0:d.toAttribute)!==void 0?s.converter:oo).toAttribute(n,s.type);this._$Em=i,c==null?this.removeAttribute(r):this.setAttribute(r,c),this._$Em=null}}_$AK(i,n){var d,c;const s=this.constructor,r=s._$Eh.get(i);if(r!==void 0&&this._$Em!==r){const u=s.getPropertyOptions(r),f=typeof u.converter=="function"?{fromAttribute:u.converter}:((d=u.converter)==null?void 0:d.fromAttribute)!==void 0?u.converter:oo;this._$Em=r;const v=f.fromAttribute(n,u.type);this[r]=v??((c=this._$Ej)==null?void 0:c.get(r))??v,this._$Em=null}}requestUpdate(i,n,s,r=!1,d){var c;if(i!==void 0){const u=this.constructor;if(r===!1&&(d=this[i]),s??(s=u.getPropertyOptions(i)),!((s.hasChanged??ln)(d,n)||s.useDefault&&s.reflect&&d===((c=this._$Ej)==null?void 0:c.get(i))&&!this.hasAttribute(u._$Eu(i,s))))return;this.C(i,n,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(i,n,{useDefault:s,reflect:r,wrapped:d},c){s&&!(this._$Ej??(this._$Ej=new Map)).has(i)&&(this._$Ej.set(i,c??n??this[i]),d!==!0||c!==void 0)||(this._$AL.has(i)||(this.hasUpdated||s||(n=void 0),this._$AL.set(i,n)),r===!0&&this._$Em!==i&&(this._$Eq??(this._$Eq=new Set)).add(i))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const i=this.scheduleUpdate();return i!=null&&await i,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[d,c]of this._$Ep)this[d]=c;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[d,c]of r){const{wrapped:u}=c,f=this[d];u!==!0||this._$AL.has(d)||f===void 0||this.C(d,void 0,c,f)}}let i=!1;const n=this._$AL;try{i=this.shouldUpdate(n),i?(this.willUpdate(n),(s=this._$EO)==null||s.forEach(r=>{var d;return(d=r.hostUpdate)==null?void 0:d.call(r)}),this.update(n)):this._$EM()}catch(r){throw i=!1,this._$EM(),r}i&&this._$AE(n)}willUpdate(i){}_$AE(i){var n;(n=this._$EO)==null||n.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(i)),this.updated(i)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(i){return!0}update(i){this._$Eq&&(this._$Eq=this._$Eq.forEach(n=>this._$ET(n,this[n]))),this._$EM()}updated(i){}firstUpdated(i){}};Re.elementStyles=[],Re.shadowRootOptions={mode:"open"},Re[ki("elementProperties")]=new Map,Re[ki("finalized")]=new Map,Uo==null||Uo({ReactiveElement:Re}),(pe.reactiveElementVersions??(pe.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fi=globalThis,fs=h=>h,no=Fi.trustedTypes,gs=no?no.createPolicy("lit-html",{createHTML:h=>h}):void 0,Bs="$lit$",he=`lit$${Math.random().toFixed(9).slice(2)}$`,Is="?"+he,_r=`<${Is}>`,Se=document,$i=()=>Se.createComment(""),Pi=h=>h===null||typeof h!="object"&&typeof h!="function",dn=Array.isArray,wr=h=>dn(h)||typeof(h==null?void 0:h[Symbol.iterator])=="function",Wo=`[ 	
\f\r]`,bi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ms=/-->/g,vs=/>/g,$e=RegExp(`>|${Wo}(?:([^\\s"'>=/]+)(${Wo}*=${Wo}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),xs=/'/g,ys=/"/g,Os=/^(?:script|style|textarea|title)$/i,kr=h=>(i,...n)=>({_$litType$:h,strings:i,values:n}),w=kr(1),ii=Symbol.for("lit-noChange"),Tt=Symbol.for("lit-nothing"),bs=new WeakMap,Pe=Se.createTreeWalker(Se,129);function Rs(h,i){if(!dn(h)||!h.hasOwnProperty("raw"))throw Error("invalid template strings array");return gs!==void 0?gs.createHTML(i):i}const Fr=(h,i)=>{const n=h.length-1,s=[];let r,d=i===2?"<svg>":i===3?"<math>":"",c=bi;for(let u=0;u<n;u++){const f=h[u];let v,b,x=-1,k=0;for(;k<f.length&&(c.lastIndex=k,b=c.exec(f),b!==null);)k=c.lastIndex,c===bi?b[1]==="!--"?c=ms:b[1]!==void 0?c=vs:b[2]!==void 0?(Os.test(b[2])&&(r=RegExp("</"+b[2],"g")),c=$e):b[3]!==void 0&&(c=$e):c===$e?b[0]===">"?(c=r??bi,x=-1):b[1]===void 0?x=-2:(x=c.lastIndex-b[2].length,v=b[1],c=b[3]===void 0?$e:b[3]==='"'?ys:xs):c===ys||c===xs?c=$e:c===ms||c===vs?c=bi:(c=$e,r=void 0);const S=c===$e&&h[u+1].startsWith("/>")?" ":"";d+=c===bi?f+_r:x>=0?(s.push(v),f.slice(0,x)+Bs+f.slice(x)+he+S):f+he+(x===-2?u:S)}return[Rs(h,d+(h[n]||"<?>")+(i===2?"</svg>":i===3?"</math>":"")),s]};class Ti{constructor({strings:i,_$litType$:n},s){let r;this.parts=[];let d=0,c=0;const u=i.length-1,f=this.parts,[v,b]=Fr(i,n);if(this.el=Ti.createElement(v,s),Pe.currentNode=this.el.content,n===2||n===3){const x=this.el.content.firstChild;x.replaceWith(...x.childNodes)}for(;(r=Pe.nextNode())!==null&&f.length<u;){if(r.nodeType===1){if(r.hasAttributes())for(const x of r.getAttributeNames())if(x.endsWith(Bs)){const k=b[c++],S=r.getAttribute(x).split(he),P=/([.?@])?(.*)/.exec(k);f.push({type:1,index:d,name:P[2],strings:S,ctor:P[1]==="."?Pr:P[1]==="?"?Tr:P[1]==="@"?Lr:ro}),r.removeAttribute(x)}else x.startsWith(he)&&(f.push({type:6,index:d}),r.removeAttribute(x));if(Os.test(r.tagName)){const x=r.textContent.split(he),k=x.length-1;if(k>0){r.textContent=no?no.emptyScript:"";for(let S=0;S<k;S++)r.append(x[S],$i()),Pe.nextNode(),f.push({type:2,index:++d});r.append(x[k],$i())}}}else if(r.nodeType===8)if(r.data===Is)f.push({type:2,index:d});else{let x=-1;for(;(x=r.data.indexOf(he,x+1))!==-1;)f.push({type:7,index:d}),x+=he.length-1}d++}}static createElement(i,n){const s=Se.createElement("template");return s.innerHTML=i,s}}function oi(h,i,n=h,s){var c,u;if(i===ii)return i;let r=s!==void 0?(c=n._$Co)==null?void 0:c[s]:n._$Cl;const d=Pi(i)?void 0:i._$litDirective$;return(r==null?void 0:r.constructor)!==d&&((u=r==null?void 0:r._$AO)==null||u.call(r,!1),d===void 0?r=void 0:(r=new d(h),r._$AT(h,n,s)),s!==void 0?(n._$Co??(n._$Co=[]))[s]=r:n._$Cl=r),r!==void 0&&(i=oi(h,r._$AS(h,i.values),r,s)),i}class $r{constructor(i,n){this._$AV=[],this._$AN=void 0,this._$AD=i,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(i){const{el:{content:n},parts:s}=this._$AD,r=((i==null?void 0:i.creationScope)??Se).importNode(n,!0);Pe.currentNode=r;let d=Pe.nextNode(),c=0,u=0,f=s[0];for(;f!==void 0;){if(c===f.index){let v;f.type===2?v=new Ei(d,d.nextSibling,this,i):f.type===1?v=new f.ctor(d,f.name,f.strings,this,i):f.type===6&&(v=new Sr(d,this,i)),this._$AV.push(v),f=s[++u]}c!==(f==null?void 0:f.index)&&(d=Pe.nextNode(),c++)}return Pe.currentNode=Se,r}p(i){let n=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(i,s,n),n+=s.strings.length-2):s._$AI(i[n])),n++}}class Ei{get _$AU(){var i;return((i=this._$AM)==null?void 0:i._$AU)??this._$Cv}constructor(i,n,s,r){this.type=2,this._$AH=Tt,this._$AN=void 0,this._$AA=i,this._$AB=n,this._$AM=s,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let i=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(i==null?void 0:i.nodeType)===11&&(i=n.parentNode),i}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(i,n=this){i=oi(this,i,n),Pi(i)?i===Tt||i==null||i===""?(this._$AH!==Tt&&this._$AR(),this._$AH=Tt):i!==this._$AH&&i!==ii&&this._(i):i._$litType$!==void 0?this.$(i):i.nodeType!==void 0?this.T(i):wr(i)?this.k(i):this._(i)}O(i){return this._$AA.parentNode.insertBefore(i,this._$AB)}T(i){this._$AH!==i&&(this._$AR(),this._$AH=this.O(i))}_(i){this._$AH!==Tt&&Pi(this._$AH)?this._$AA.nextSibling.data=i:this.T(Se.createTextNode(i)),this._$AH=i}$(i){var d;const{values:n,_$litType$:s}=i,r=typeof s=="number"?this._$AC(i):(s.el===void 0&&(s.el=Ti.createElement(Rs(s.h,s.h[0]),this.options)),s);if(((d=this._$AH)==null?void 0:d._$AD)===r)this._$AH.p(n);else{const c=new $r(r,this),u=c.u(this.options);c.p(n),this.T(u),this._$AH=c}}_$AC(i){let n=bs.get(i.strings);return n===void 0&&bs.set(i.strings,n=new Ti(i)),n}k(i){dn(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let s,r=0;for(const d of i)r===n.length?n.push(s=new Ei(this.O($i()),this.O($i()),this,this.options)):s=n[r],s._$AI(d),r++;r<n.length&&(this._$AR(s&&s._$AB.nextSibling,r),n.length=r)}_$AR(i=this._$AA.nextSibling,n){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,n);i!==this._$AB;){const r=fs(i).nextSibling;fs(i).remove(),i=r}}setConnected(i){var n;this._$AM===void 0&&(this._$Cv=i,(n=this._$AP)==null||n.call(this,i))}}class ro{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(i,n,s,r,d){this.type=1,this._$AH=Tt,this._$AN=void 0,this.element=i,this.name=n,this._$AM=r,this.options=d,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=Tt}_$AI(i,n=this,s,r){const d=this.strings;let c=!1;if(d===void 0)i=oi(this,i,n,0),c=!Pi(i)||i!==this._$AH&&i!==ii,c&&(this._$AH=i);else{const u=i;let f,v;for(i=d[0],f=0;f<d.length-1;f++)v=oi(this,u[s+f],n,f),v===ii&&(v=this._$AH[f]),c||(c=!Pi(v)||v!==this._$AH[f]),v===Tt?i=Tt:i!==Tt&&(i+=(v??"")+d[f+1]),this._$AH[f]=v}c&&!r&&this.j(i)}j(i){i===Tt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,i??"")}}class Pr extends ro{constructor(){super(...arguments),this.type=3}j(i){this.element[this.name]=i===Tt?void 0:i}}let Tr=class extends ro{constructor(){super(...arguments),this.type=4}j(i){this.element.toggleAttribute(this.name,!!i&&i!==Tt)}};class Lr extends ro{constructor(i,n,s,r,d){super(i,n,s,r,d),this.type=5}_$AI(i,n=this){if((i=oi(this,i,n,0)??Tt)===ii)return;const s=this._$AH,r=i===Tt&&s!==Tt||i.capture!==s.capture||i.once!==s.once||i.passive!==s.passive,d=i!==Tt&&(s===Tt||r);r&&this.element.removeEventListener(this.name,this,s),d&&this.element.addEventListener(this.name,this,i),this._$AH=i}handleEvent(i){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,i):this._$AH.handleEvent(i)}}class Sr{constructor(i,n,s){this.element=i,this.type=6,this._$AN=void 0,this._$AM=n,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(i){oi(this,i)}}const Go=Fi.litHtmlPolyfillSupport;Go==null||Go(Ti,Ei),(Fi.litHtmlVersions??(Fi.litHtmlVersions=[])).push("3.3.3");const Cr=(h,i,n)=>{const s=(n==null?void 0:n.renderBefore)??i;let r=s._$litPart$;if(r===void 0){const d=(n==null?void 0:n.renderBefore)??null;s._$litPart$=r=new Ei(i.insertBefore($i(),d),d,void 0,n??{})}return r._$AI(h),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Te=globalThis;class Ft extends Re{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const i=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=i.firstChild),i}update(i){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(i),this._$Do=Cr(n,this.renderRoot,this.renderOptions)}connectedCallback(){var i;super.connectedCallback(),(i=this._$Do)==null||i.setConnected(!0)}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this._$Do)==null||i.setConnected(!1)}render(){return ii}}var Ds;Ft._$litElement$=!0,Ft.finalized=!0,(Ds=Te.litElementHydrateSupport)==null||Ds.call(Te,{LitElement:Ft});const qo=Te.litElementPolyfillSupport;qo==null||qo({LitElement:Ft});(Te.litElementVersions??(Te.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zt=h=>(i,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(h,i)}):customElements.define(h,i)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Er={attribute:!0,type:String,converter:oo,reflect:!1,hasChanged:ln},Ar=(h=Er,i,n)=>{const{kind:s,metadata:r}=n;let d=globalThis.litPropertyMetadata.get(r);if(d===void 0&&globalThis.litPropertyMetadata.set(r,d=new Map),s==="setter"&&((h=Object.create(h)).wrapped=!0),d.set(n.name,h),s==="accessor"){const{name:c}=n;return{set(u){const f=i.get.call(this);i.set.call(this,u),this.requestUpdate(c,f,h,!0,u)},init(u){return u!==void 0&&this.C(c,void 0,h,u),u}}}if(s==="setter"){const{name:c}=n;return function(u){const f=this[c];i.call(this,u),this.requestUpdate(c,f,h,!0,u)}}throw Error("Unsupported decorator location: "+s)};function Ai(h){return(i,n)=>typeof n=="object"?Ar(h,i,n):((s,r,d)=>{const c=r.hasOwnProperty(d);return r.constructor.createProperty(d,s),c?Object.getOwnPropertyDescriptor(r,d):void 0})(h,i,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function A(h){return Ai({...h,state:!0,attribute:!1})}const zr=[{id:"Zoomy",name:"Zoomy",nameKo:"우다다"},{id:"Regal",name:"Regal",nameKo:"도도함"},{id:"Guilty",name:"Guilty",nameKo:"눈치봄"},{id:"Unbothered",name:"Unbothered",nameKo:"무덤덤"},{id:"Feral",name:"Feral",nameKo:"천방지축"},{id:"Happy",name:"Happy",nameKo:"행복함"},{id:"Calm",name:"Calm",nameKo:"차분함"}],Mr={Zoomy:"우다다",Regal:"도도함",Guilty:"눈치봄",Unbothered:"무덤덤",Feral:"천방지축",Happy:"행복함",Calm:"차분함"},Dr={en:{appName:"Dooty",tagline:"Track your pet’s daily potty, walks, meals, and health.",nav:{today:"Today",map:"Map",analytics:"Analytics",settings:"Settings",import:"Import"},events:{poop:{name:"Poop",action:"Log Poop",desc:"Bathroom break"},pee:{name:"Pee",action:"Log Pee",desc:"Bathroom break"},walk:{name:"Walk",action:"Log Walk",desc:"Outdoor exercise"},food:{name:"Food",action:"Log Food",desc:"Meals & kibble"},water:{name:"Water",action:"Log Water",desc:"Fresh hydration"},medicine:{name:"Medicine",action:"Log Medicine",desc:"Pills & treatments"},grooming:{name:"Grooming",action:"Log Grooming",desc:"Bath & brushing"},playing:{name:"Playing",action:"Log Play",desc:"Fetch & fun"},vomit:{name:"Vomit",action:"Log Vomit",desc:"Upset stomach"},weight:{name:"Weight",action:"Log Weight",desc:"Body mass tracking"},vet:{name:"Vet visit",action:"Log Vet Visit",desc:"Appointments & checkups"},symptom:{name:"Symptom",action:"Log Symptom",desc:"Health anomalies & issues"},nap:{name:"Nap / Sleep",action:"Log Nap",desc:"Sleep & rest"},training:{name:"Training",action:"Log Training",desc:"Commands & practice"}},streak:{badge:h=>`${h} DAY STREAK`,subtitle:"Keep logging daily to build your pet’s routine!"},home:{greeting:h=>`Hey, ${h}! 🐾`,vibeLine:"Ready for another great day together.",todayStats:"Today’s Log",quickLog:"Quick Log",recentActivity:"Recent Timeline",noEventsToday:"No logs yet today!",tapToLogFirst:"Tap any icon above to record your first entry.",offlineMode:"Offline Mode",pendingSync:h=>`${h} pending offline sync`},logger:{title:h=>`Log ${h}`,time:"Time of Event",notesPlaceholder:"Add optional details (e.g. consistency, brand, dosage)...",locationTag:"Location",addLocation:"Add GPS Coordinates",save:"Save Log",cancel:"Cancel",saving:"Saving...",loggedSuccess:h=>`${h} logged successfully!`},analytics:{title:"Pet Analytics & Habits",subtitle:"Understand your pet’s daily rhythm and health trends",clock24hTitle:"24-Hour Potty Clock",clock24hDesc:"Most frequent hours of the day for bathroom breaks",frequencyTitle:"Activity Breakdown",periods:{days7:"Last 7 Days",days30:"Last 30 Days",allTime:"All Time"},healthWatch:"Health Watch",vomitCount:h=>`${h} vomiting incidents recorded`,medCount:h=>`${h} medications administered`,daysNoPoop:h=>`${h} days without poop recorded`,streakTitle:"Consistency Streak",totalLogs:"Total Logged Events"},map:{title:"Potty & Walk Map",startWalk:"Start Walk",pauseWalk:"Pause Walk",resumeWalk:"Resume Walk",stopWalk:"Finish Walk",distance:"Distance",duration:"Duration",logPoopOnWalk:"💩 Poop Here",logPeeOnWalk:"💧 Pee Here",noLocationsYet:"No geo-tagged events yet. Start a walk or tag your next log!"},importer:{title:"Import History",subtitle:"From a spreadsheet, Notion, or another tracker",dropText:"Drop your CSV or JSON file here, or click to browse",selectFile:"Select File",dryRunTitle:"Import Preview (Dry-Run)",totalEvents:"Total Records Detected",targetPet:"Target Pet",dateSpan:"Date Span",confirmImport:"Import All Events",importing:"Importing records...",success:h=>`Successfully imported ${h} historical events!`},settings:{back:"Today",title:"Settings",signedInPlan:"Signed in · free plan",language:"Language",english:"English",korean:"한국어",household:"Household",householdCount:(h,i)=>`${h} ${h===1?"person":"people"} · ${i} ${i===1?"pet":"pets"}`,invite:"Invite",people:"People",inviteSomeone:"+ Invite someone",pets:"Pets",addPet:"+ Add a pet",nudges:"Nudges",walkReminders:"Walk reminders",walkRemindersSub:"Nudge me at the usual times",weeklyDigest:"Weekly digest",weeklyDigestSub:"Sunday night, one card",unusualGap:"Unusual gap alert",unusualGapSub:"If nothing for 20 hours",vetShare:"Share with my vet",vetShareSub:"Read-only link to the summary",yourData:"Your data",importCsv:"Import from CSV",importCsvSub:"From a spreadsheet, Notion, or another tracker",exportCsv:"Export all data (CSV)",exportCsvSub:"Everything, including photos",signOut:"Sign out",version:"Dooty v0.4 · installable PWA",logsUnit:"logs",activeHousehold:"Active Household",switchHousehold:"Switch Household",members:"Family Members",invitePartner:"Invite Partner / Roommate",inviteDesc:"Share this code so they can view and log for this pet from their phone:",copyCode:"Copy Invite Code",copied:"Copied!",joinHousehold:"Join Existing Household",joinAnotherHousehold:"+ Join Another Household",enterCode:"Enter 6-digit Invite Code",joinBtn:"Join Household",currentPet:"Pet Profile",syncStatus:"Cloud Sync Status",online:"Connected & Live",offline:"Offline (Queued locally)",signedOutSuccess:"Signed out. See you next walk!"},invite:{back:"Settings",title:"Invite to",subtitle:"Share the code below. It works once, then it's dead.",theyJoinAs:"They join as",roles:{full:{name:"Full member",sub:"Log, edit, see everything"},logOnly:{name:"Log only",sub:"Can add events, cannot see history"}},inviteCode:"Invite code",expiresIn7Days:"Expires in 7 days",copyCode:"Copy code",shareLink:"Share link",pending:"Pending",revoke:"Revoke",pendingHelp:"Anyone with the code can log events. Only you can rename the household or remove people.",codeCopied:"Code copied",codeCopiedSub:h=>`${h} · expires in 7 days`,inviteRevoked:"Invite revoked",inviteRevokedSub:h=>`${h} will no longer work.`},auth:{welcomeTitle:"Dooty",welcomeSubtitle:"Poop, pills and everything else. One tap, then get on with the walk.",tagline:"Simple, tactile pet habit tracking for your family.",tabLogIn:"Log In",tabSignUp:"Sign Up",emailLabel:"Email",emailPlaceholder:"sam@jellyfish.dog",passwordLabel:"Password",passwordPlaceholder:"••••••••",logInBtn:"Log in",loggingIn:"Logging in...",forgotPassword:"Forgot your password?",or:"OR",googleBtn:"Continue with Google",newHere:"New here?",makeAccount:"Make an account",gotInviteCode:"Got an invite code?",show:"Show",hide:"Hide",signupStep1:{back:"Back",stepCount:"1 / 2",title:"Let's get you set up",subtitle:"Takes about forty seconds. Faster than the average walk.",yourName:"Your name",yourNamePlaceholder:"Sam",email:"Email",emailPlaceholder:"sam@jellyfish.dog",password:"Password",passwordPlaceholder:"••••••••",weak:"Weak",good:"Good",strong:"Strong",nextTheDog:"Next: the dog",disclaimer:"By continuing you agree we will store an unreasonable amount of data about your dog’s bowels."},signupStep2:{back:"Back",stepCount:"2 / 2",title:"Who are we tracking?",subtitle:"You can add more dogs later. We will not judge you for it.",photo:"photo",name:"Name",namePlaceholder:"Nacho",householdName:"Household name",householdNamePlaceholder:"The Nacho Household",householdHelp:"Everyone you invite joins this household and can log for any pet in it.",size:"Size",sizes:{S:{label:"S",kg:"– 10kg"},M:{label:"M",kg:"10–20"},L:{label:"L",kg:"20–35"},XL:{label:"XL",kg:"35kg +"}},whatTrack:"What should we track?",trackingOptions:{poop:"Poop",pee:"Pee",vomit:"Vomit",meds:"Medicine",weight:"Weight",walk:"Walks",vet:"Vet visits",symptom:"Symptoms"},startTracking:"Start tracking",alreadyTracking:"Already tracking somewhere else?",importHistory:"Import your history"},joinStep1:{back:"Back",title:"Join a household",subtitle:"Whoever set it up can find the code in Settings, under People.",enterCode:"Enter the code",continueBtn:"Continue",perksTitle:"What you’ll be able to do",perks:["Log poops, walks, meds and everything else","See the streak, the map and the stats","Get the same reminders as everyone else"]},joinStep2:{back:"Code",codeAccepted:"Code accepted · joining",summarySubtitle:(h,i)=>`${h} · you'll be ${i}`,title:"Tell them who you are",subtitle:"Your name shows up next to every event you log, so pick what the household will recognise.",yourName:"Your name",yourNamePlaceholder:"Dan",email:"Email",emailPlaceholder:"dan@thewalks.co",password:"Password",passwordPlaceholder:"••••••••",howTheySeeYou:"How they’ll see you",joinHouseholdBtn:"Join the household",footerDisclaimer:"The owner will be told you joined. You can leave the household at any time."},signUpBtn:"Create Account",signingUp:"Creating account...",signUpModeCreate:"✨ Create New Household",signUpModeJoin:"🔑 Join with Invite Code",noAccountPrompt:"Don’t have an account? Sign Up",hasAccountPrompt:"Already have an account? Log In",ownerNameLabel:"Your Name",ownerNamePlaceholder:"e.g. Reynold",householdNameLabel:"Household Name",householdNamePlaceholder:"e.g. Happy Paws Family",petNameLabel:"Pet Name",petNamePlaceholder:"e.g. Jjols",speciesLabel:"Pet Type",speciesDog:"Dog 🐶",speciesCat:"Cat 🐱",speciesOther:"Other 🐾",breedLabel:"Breed (Optional)",breedPlaceholder:"e.g. Golden Retriever",inviteCodeLabel:"6-Digit Invite Code",inviteCodePlaceholder:"e.g. AB12CD",inviteCodeHint:"Ask your household owner to generate an invite code from their Settings > Family Members tab.",yourNameLabel:"Your Name",yourNamePlaceholder:"e.g. Alex, Sarah",yourRoleLabel:"Role / Relationship (Optional)",yourRolePlaceholder:"e.g. Partner, Mom, Dog Walker",errors:{emailRequired:"Please enter your email address",invalidEmail:"Please enter a valid email address",passwordRequired:"Please enter your password",passwordTooShort:"Password must be at least 6 characters",logInFailed:"Invalid email or password",signUpFailed:"Could not complete sign up. Please try again.",ownerNameRequired:"Please enter your name",householdNameRequired:"Please enter a household name",petNameRequired:"Please enter your pet’s name",inviteCodeRequired:"Please enter a 6-digit invite code",yourNameRequired:"Please enter your name",joinFailed:"Invalid invite code or server error",createFailed:"Failed to create household. Please check connection."}}},ko:{appName:"두티 (Dooty)",tagline:"반려견의 배변, 산책, 식사, 건강을 쉽고 재미있게 기록하세요.",nav:{today:"오늘",map:"지도",analytics:"통계",settings:"설정",import:"불러오기"},events:{poop:{name:"응가",action:"응가 기록",desc:"배변 활동"},pee:{name:"쉬야",action:"쉬야 기록",desc:"배뇨 활동"},walk:{name:"산책",action:"산책 기록",desc:"야외 산책"},food:{name:"밥/사료",action:"식사 기록",desc:"사료 및 간식"},water:{name:"물",action:"물 마심",desc:"수분 섭취"},medicine:{name:"약",action:"투약 기록",desc:"영양제 및 처방약"},grooming:{name:"목욕/미용",action:"목욕/미용",desc:"위생 케어"},playing:{name:"놀이",action:"놀이 기록",desc:"터그놀이 & 공놀이"},vomit:{name:"토/구토",action:"구토 기록",desc:"소화 이상"},weight:{name:"몸무게",action:"몸무게 기록",desc:"체중 변화 측정"},vet:{name:"병원 진료",action:"진료 기록",desc:"정기 검진 및 진료"},symptom:{name:"증상 메모",action:"증상 기록",desc:"이상 징후 기록"},nap:{name:"수면/낮잠",action:"낮잠 기록",desc:"수면 및 휴식"},training:{name:"훈련/교육",action:"훈련 기록",desc:"훈련 및 기본 교육"}},streak:{badge:h=>`${h}일 연속 기록 중!`,subtitle:"매일 꾸준히 기록해서 건강한 루틴을 만들어요!"},home:{greeting:h=>`안녕, ${h}! 🐾`,vibeLine:"오늘도 건강하고 행복한 하루 보내요.",todayStats:"오늘의 기록",quickLog:"빠른 기록",recentActivity:"최근 활동 타임라인",noEventsToday:"오늘 아직 등록된 기록이 없어요!",tapToLogFirst:"위 아이콘을 눌러 첫 번째 활동을 기록해보세요.",offlineMode:"오프라인 모드",pendingSync:h=>`${h}개 항목 동기화 대기 중`},logger:{title:h=>`${h} 기록하기`,time:"기록 시간",notesPlaceholder:"메모를 입력하세요 (변 상태, 사료량, 약 종류 등)...",locationTag:"위치 정보",addLocation:"현재 GPS 위치 추가",save:"저장하기",cancel:"취소",saving:"저장 중...",loggedSuccess:h=>`${h} 기록이 저장되었습니다!`},analytics:{title:"배변 및 활동 분석",subtitle:"반려견의 일일 생활 패턴과 건강 추이를 확인하세요",clock24hTitle:"24시간 배변 시계",clock24hDesc:"하루 중 가장 응가/쉬야를 많이 하는 시간대",frequencyTitle:"활동별 통계",periods:{days7:"최근 7일",days30:"최근 30일",allTime:"전체 기간"},healthWatch:"건강 모니터링",vomitCount:h=>`최근 구토 ${h}회 발생`,medCount:h=>`최근 투약 ${h}회 완료`,daysNoPoop:h=>`응가 미기록 ${h}일째`,streakTitle:"연속 기록 스트릭",totalLogs:"총 기록 건수"},map:{title:"배변 & 산책 지도",startWalk:"산책 시작",pauseWalk:"일시정지",resumeWalk:"산책 재개",stopWalk:"산책 종료",distance:"산책 거리",duration:"산책 시간",logPoopOnWalk:"💩 여기서 응가",logPeeOnWalk:"💧 여기서 쉬야",noLocationsYet:"위치 기록이 아직 없습니다. 산책을 시작하거나 위치를 태그해보세요!"},importer:{title:"데이터 불러오기",subtitle:"스프레드시트, 노션, 다른 트래커에서 데이터 이전",dropText:"CSV 또는 JSON 파일을 여기에 끌어다 놓거나 클릭하여 선택하세요",selectFile:"파일 선택",dryRunTitle:"가져오기 미리보기 (검증)",totalEvents:"총 감지된 기록 수",targetPet:"대상 반려견",dateSpan:"기록 기간",confirmImport:"데이터 일괄 가져오기",importing:"데이터를 가져오는 중...",success:h=>`${h}개의 과거 기록을 성공적으로 가져왔습니다!`},settings:{back:"오늘",title:"설정",signedInPlan:"로그인됨 · 무료 플랜",language:"언어",english:"English",korean:"한국어",household:"가족 공간",householdCount:(h,i)=>`${h}명 · 반려견 ${i}마리`,invite:"초대",people:"구성원",inviteSomeone:"+ 초대하기",pets:"반려동물",addPet:"+ 반려동물 추가",nudges:"알림 설정",walkReminders:"산책 알림",walkRemindersSub:"평소 산책 시간에 알려드려요",weeklyDigest:"주간 요약",weeklyDigestSub:"일요일 밤 한 장의 요약 카드",unusualGap:"이상 공백 알림",unusualGapSub:"20시간 동안 기록이 없으면 알림",vetShare:"수의사와 공유",vetShareSub:"수의사용 읽기 전용 요약 링크",yourData:"내 데이터",importCsv:"CSV에서 가져오기",importCsvSub:"스프레드시트, 노션, 다른 트래커에서 이전",exportCsv:"전체 데이터 내보내기 (CSV)",exportCsvSub:"사진을 포함한 모든 기록 다운로드",signOut:"로그아웃",version:"Dooty v0.4 · 설치형 PWA",logsUnit:"회",activeHousehold:"현재 가족 공간",switchHousehold:"가족 공간 변경",members:"참여 멤버",invitePartner:"가족/동거인 초대하기",inviteDesc:"이 초대 코드를 공유하면 가족도 함께 기록을 확인하고 추가할 수 있습니다:",copyCode:"초대 코드 복사",copied:"복사 완료!",joinHousehold:"기존 가족에 참여하기",joinAnotherHousehold:"+ 다른 가족 공간 참가하기",enterCode:"6자리 초대 코드 입력",joinBtn:"가족 참여",currentPet:"반려견 프로필",syncStatus:"클라우드 동기화 상태",online:"정상 연결됨",offline:"오프라인 (로컬 저장 중)",signedOutSuccess:"로그아웃되었습니다. 다음 산책 때 만나요!"},invite:{back:"설정",title:"초대하기",subtitle:"아래 코드를 공유하세요. 한 번 사용하면 만료됩니다.",theyJoinAs:"초대 권한",roles:{full:{name:"전체 멤버",sub:"기록, 수정, 전체 내역 확인 가능"},logOnly:{name:"기록 전용",sub:"기록 추가만 가능, 과거 내역 열람 불가"}},inviteCode:"초대 코드",expiresIn7Days:"7일 후 만료",copyCode:"코드 복사",shareLink:"링크 공유",pending:"대기 중인 초대",revoke:"취소",pendingHelp:"코드를 가진 사람은 누구나 기록할 수 있습니다. 가족 관리자만 이름을 바꾸거나 구성원을 삭제할 수 있습니다.",codeCopied:"코드 복사 완료",codeCopiedSub:h=>`${h} · 7일 후 만료`,inviteRevoked:"초대 취소됨",inviteRevokedSub:h=>`${h} 코드는 더 이상 사용할 수 없습니다.`},auth:{welcomeTitle:"Dooty",welcomeSubtitle:"응가, 약, 그 외 모든 것. 한 번만 누르고 산책을 계속하세요.",tagline:"직관적이고 재미있는 우리 가족 펫 다이어리",tabLogIn:"로그인",tabSignUp:"회원가입",emailLabel:"이메일",emailPlaceholder:"sam@jellyfish.dog",passwordLabel:"비밀번호",passwordPlaceholder:"••••••••",logInBtn:"로그인",loggingIn:"로그인 중...",forgotPassword:"비밀번호를 잊으셨나요?",or:"또는",googleBtn:"Google로 계속하기",newHere:"처음이신가요?",makeAccount:"계정 만들기",gotInviteCode:"초대 코드가 있나요?",show:"보기",hide:"숨기기",signupStep1:{back:"뒤로",stepCount:"1 / 2",title:"시작해 볼까요",subtitle:"40초쯤 걸립니다. 평균 산책보다 빠릅니다.",yourName:"이름",yourNamePlaceholder:"Sam",email:"이메일",emailPlaceholder:"sam@jellyfish.dog",password:"비밀번호",passwordPlaceholder:"••••••••",weak:"취약",good:"적정",strong:"안전",nextTheDog:"다음: 강아지",disclaimer:"계속 진행하면 강아지의 배변에 관한 상당한 양의 데이터를 저장하는 데 동의하게 됩니다."},signupStep2:{back:"뒤로",stepCount:"2 / 2",title:"누구를 추적할까요?",subtitle:"나중에 강아지를 더 추가할 수 있습니다.",photo:"사진",name:"이름",namePlaceholder:"나초 (Nacho)",householdName:"가족(Household) 이름",householdNamePlaceholder:"나초네 가족",householdHelp:"초대한 모든 사람이 이 가족에 합류하여 모든 반려동물에 대해 기록할 수 있습니다.",size:"크기",sizes:{S:{label:"S",kg:"– 10kg"},M:{label:"M",kg:"10–20"},L:{label:"L",kg:"20–35"},XL:{label:"XL",kg:"35kg +"}},whatTrack:"어떤 항목을 추적할까요?",trackingOptions:{poop:"응가",pee:"쉬야",vomit:"구토",meds:"약",weight:"체중",walk:"산책",vet:"병원 진료",symptom:"이상 증상"},startTracking:"추적 시작하기",alreadyTracking:"다른 곳에서 이미 추적 중이신가요?",importHistory:"기록 가져오기"},joinStep1:{back:"뒤로",title:"가족에 참여하기",subtitle:"설정한 사람은 설정의 구성원에서 코드를 찾을 수 있습니다.",enterCode:"코드 입력",continueBtn:"계속",perksTitle:"할 수 있는 일",perks:["응가, 산책, 약 및 기타 모든 활동 기록","연속 스트릭, 산책 지도, 통계 확인","가족 구성원과 동일한 실시간 알림 수신"]},joinStep2:{back:"코드",codeAccepted:"코드 승인됨 · 참여 중",summarySubtitle:(h,i)=>`${h} · 역할: ${i}`,title:"자신을 알려주세요",subtitle:"내가 기록한 모든 활동 옆에 내 이름이 표시되므로 가족이 알아볼 수 있는 이름을 선택하세요.",yourName:"이름",yourNamePlaceholder:"민지 (Dan)",email:"이메일",emailPlaceholder:"dan@thewalks.co",password:"비밀번호",passwordPlaceholder:"••••••••",howTheySeeYou:"가족에게 표시될 호칭",joinHouseholdBtn:"가족에 참여하기",footerDisclaimer:"가족 관리자에게 참여 알림이 전송됩니다. 언제든지 가족에서 나갈 수 있습니다."},signUpBtn:"회원가입 완료",signingUp:"가입 처리 중...",signUpModeCreate:"✨ 새 가족 공간 만들기",signUpModeJoin:"🔑 초대 코드로 참여하기",noAccountPrompt:"계정이 없으신가요? 회원가입",hasAccountPrompt:"이미 계정이 있으신가요? 로그인",ownerNameLabel:"보호자 이름",ownerNamePlaceholder:"예: 레이놀드",householdNameLabel:"가족(Household) 이름",householdNamePlaceholder:"예: 우리집 강아지네",petNameLabel:"반려동물 이름",petNamePlaceholder:"예: 쪼올스",speciesLabel:"종류",speciesDog:"강아지 🐶",speciesCat:"고양이 🐱",speciesOther:"기타 🐾",breedLabel:"품종 (선택)",breedPlaceholder:"예: 골든 리트리버",inviteCodeLabel:"6자리 초대 코드",inviteCodePlaceholder:"예: AB12CD",inviteCodeHint:"가족 관리자의 [설정 > 가족 멤버]에서 생성한 6자리 초대 코드를 입력하세요.",yourNameLabel:"내 이름",yourNamePlaceholder:"예: 민지, 준호",yourRoleLabel:"역할 / 호칭 (선택)",yourRolePlaceholder:"예: 엄마, 아빠, 산책도우미, 룸메이트",errors:{emailRequired:"이메일 주소를 입력해주세요",invalidEmail:"올바른 이메일 형식을 입력해주세요",passwordRequired:"비밀번호를 입력해주세요",passwordTooShort:"비밀번호는 6자 이상이어야 합니다",logInFailed:"이메일 또는 비밀번호가 올바르지 않습니다",signUpFailed:"회원가입에 실패했습니다. 다시 시도해주세요.",ownerNameRequired:"보호자 이름을 입력해주세요",householdNameRequired:"가족 이름을 입력해주세요",petNameRequired:"반려동물 이름을 입력해주세요",inviteCodeRequired:"6자리 초대 코드를 입력해주세요",yourNameRequired:"이름을 입력해주세요",joinFailed:"유효하지 않은 초대 코드이거나 서버 오류가 발생했습니다",createFailed:"가족 생성에 실패했습니다. 네트워크를 확인해주세요."}}}};function so(h,i,n){if(!h)return n?`${{poop:"응가",pee:"쉬야",walk:"산책",food:"밥/사료",water:"물",medicine:"약/영양제",grooming:"목욕/미용",playing:"놀이",vomit:"구토",weight:"몸무게",vet:"병원 진료",symptom:"증상 메모",nap:"수면/낮잠",training:"훈련/교육"}[i]||i} · 기록됨`:`${i.toUpperCase()} · Logged`;if(n){let s=h;return s=s.replace(/\bZoomy\b/g,"우다다"),s=s.replace(/\bRegal\b/g,"도도함"),s=s.replace(/\bGuilty\b/g,"눈치봄"),s=s.replace(/\bUnbothered\b/g,"무덤덤"),s=s.replace(/\bFeral\b/g,"천방지축"),s=s.replace(/\bHappy\b/g,"행복함"),s=s.replace(/\bCalm\b/g,"차분함"),s=s.replace(/^Type\s+(\d+)/,"응가 $1단계"),s=s.replace(/^Pee\b/,"쉬야"),s=s.replace(/^Vomit\s+·\s+Type\s+(\d+)/,"구토 · $1단계"),s=s.replace(/^Vomit\b/,"구토"),s=s.replace(/^Walk\b/,"산책"),s=s.replace(/^Meal:\s*/,"식사: "),s=s.replace(/^Vet visit:\s*/,"병원 진료: "),s=s.replace(/^Symptom:\s*/,"증상: "),s=s.replace(/^Weigh-in:\s*/,"체중 측정: "),s=s.replace(/hard pellets/g,"단단한 토끼똥"),s=s.replace(/lumpy log/g,"울퉁불퉁한 변"),s=s.replace(/cracked log/g,"약간 갈라진 변"),s=s.replace(/textbook — the dream/g,"완벽한 황금변 (최고)"),s=s.replace(/soft blobs/g,"무른 덩어리변"),s=s.replace(/mushy/g,"형태 없는 묽은변"),s=s.replace(/liquid/g,"설사/수분성 액체"),s=s.replace(/Annual check-up/g,"정기 검진"),s=s.replace(/Vaccination booster/g,"예방 접종"),s=s.replace(/Loose stool consult/g,"배변/설사 진료"),s=s.replace(/Dental scaling/g,"치과/스케일링"),s=s.replace(/Medication renewal/g,"처방약 재발급"),s=s.replace(/Follow-up exam/g,"재진/경과 관찰"),s=s.replace(/Itch \/ Scratch/g,"가려움 / 긁음"),s=s.replace(/Limping \/ Joint/g,"절뚝임 / 관절"),s=s.replace(/Lethargic \/ Low energy/g,"기력 저하"),s=s.replace(/Coughing \/ Reverse sneeze/g,"기침 / 역재채기"),s=s.replace(/Loss of Appetite/g,"식욕 부진"),s=s.replace(/Skin redness \/ Rash/g,"피부 발진 / 붉어짐"),s=s.replace(/Ear shaking/g,"귀 털기 / 귓병"),s=s.replace(/0\.5 cup/g,"0.5 컵"),s=s.replace(/1\.0 cup/g,"1.0 컵"),s=s.replace(/1\.5 cups/g,"1.5 컵"),s=s.replace(/2\.0 cups/g,"2.0 컵"),s=s.replace(/Full bowl/g,"한 그릇 가득"),s=s.replace(/Special treats/g,"특별 간식"),s}else{let s=h;return s=s.replace(/우다다/g,"Zoomy"),s=s.replace(/도도함/g,"Regal"),s=s.replace(/눈치봄/g,"Guilty"),s=s.replace(/무덤덤/g,"Unbothered"),s=s.replace(/천방지축/g,"Feral"),s=s.replace(/행복함/g,"Happy"),s=s.replace(/차분함/g,"Calm"),s=s.replace(/^응가\s+(\d+)단계/,"Type $1"),s=s.replace(/^쉬야\b/,"Pee"),s=s.replace(/^구토\s+·\s+(\d+)단계/,"Vomit · Type $1"),s=s.replace(/^구토\b/,"Vomit"),s=s.replace(/^산책\b/,"Walk"),s=s.replace(/^식사:\s*/,"Meal: "),s=s.replace(/^병원 진료:\s*/,"Vet visit: "),s=s.replace(/^증상:\s*/,"Symptom: "),s=s.replace(/^체중 측정:\s*/,"Weigh-in: "),s=s.replace(/단단한 토끼똥/g,"hard pellets"),s=s.replace(/울퉁불퉁한 변/g,"lumpy log"),s=s.replace(/약간 갈라진 변/g,"cracked log"),s=s.replace(/완벽한 황금변 \(최고\)/g,"textbook — the dream"),s=s.replace(/무른 덩어리변/g,"soft blobs"),s=s.replace(/형태 없는 묽은변/g,"mushy"),s=s.replace(/설사\/수분성 액체/g,"liquid"),s}}function Nr(h){const i=[];let n=[],s="",r=!1;for(let d=0;d<h.length;d++){const c=h[d],u=h[d+1];r?c==='"'?u==='"'?(s+='"',d++):r=!1:s+=c:c==='"'?r=!0:c===","?(n.push(s),s=""):c==="\r"?(u===`
`&&d++,n.push(s),i.push(n),n=[],s=""):c===`
`?(n.push(s),i.push(n),n=[],s=""):s+=c}return(s.length>0||n.length>0)&&(n.push(s),i.push(n)),i}function zi(h){const i=(h||"").trim(),n=i.toLowerCase();return n==="reynold"||n==="reynold ismail"||n==="reyn"?"reyn":n==="youngrok lee"||n==="youngrok"||n==="young lee"||n==="young"?"youngrok":i||"reyn"}function cn(h){const i=(h||"").trim(),n=i.toLowerCase();return n==="watson"||n==="jjols"?"jjols":i||"jjols"}function Br(h){switch((h||"").trim().toLowerCase()){case"poop":return"poop";case"pee":return"pee";case"walk":return"walk";case"food":case"treat":return"food";case"water":return"water";case"nap":case"sleep":case"play":case"playing":case"playpen":case"daycare":case"training":return"playing";case"medicine":case"medication":return"medicine";case"vomit":case"throwup":return"vomit";case"weight":case"weigh":return"weight";case"grooming":case"bath":case"teeth brushing":return"grooming";case"hospital":case"vet":case"clinic":case"doctor":return"vet";case"accident":return"pee";case"eat grass":case"temperature":case"crying":case"coughing":case"symptom":case"illness":case"scratch":return"symptom";default:return"playing"}}function Hs(h,i){const n=(h||"").trim(),s=(i||"").trim();if(!n&&!s)return new Date().toISOString();if(n&&s){const r=`${n} ${s} UTC`,d=new Date(r);if(!isNaN(d.getTime()))return d.toISOString()}if(n){const r=new Date(n);if(!isNaN(r.getTime()))return r.toISOString()}return new Date().toISOString()}function Ir(h){const i=Nr(h);if(i.length<2)throw new Error("CSV file is empty or missing data rows.");const n=i[0].map(u=>u.trim()),s={};n.forEach((u,f)=>{s[u.toLowerCase()]=f});const r=(u,f)=>{const v=s[f.toLowerCase()];if(v===void 0||v>=u.length)return"";let b=(u[v]||"").trim();return b.startsWith('"')&&b.endsWith('"')&&(b=b.slice(1,-1).trim()),b},d=(u,f)=>{const v=r(u,f);if(!v||v==="-"||v==="0"||v==="0.0")return;const b=parseFloat(v);return isNaN(b)?void 0:b},c=[];for(let u=1;u<i.length;u++){const f=i[u];if(f.length<=1&&(!f[0]||f[0].trim()===""))continue;const v=r(f,"Pet"),b=cn(v),x=r(f,"Event_Type"),k=r(f,"Log_Date"),S=r(f,"Log_Time (UTC+00:00)")||r(f,"Log_Time"),P=r(f,"User_Name"),T=r(f,"Comment");if(!x&&!k&&!S)continue;const N={pet:b,eventType:x||"Unknown",logDate:k,logTime:S,userName:P||"reyn",comment:T||void 0,startDate:r(f,"Start_Date")||void 0,startTime:r(f,"Start_Time (UTC+00:00)")||r(f,"Start_Time")||void 0,endDate:r(f,"End_Date")||void 0,endTime:r(f,"End_Time (UTC+00:00)")||r(f,"End_Time")||void 0,duration:r(f,"Duration")||void 0,quantityNumber:d(f,"Quantity_Number"),quantityUnit:r(f,"Quantity_Unit")||void 0,temperatureC:d(f,"Temperature_(C)"),temperatureF:d(f,"Temperature_(F)"),weightKg:d(f,"Weight_(Kg)"),weightLbs:d(f,"Weight_(P)")||d(f,"Weight_(Lbs)"),medicineType:r(f,"Medicine_Type")||void 0,stoolQuality:r(f,"Stool_Quality")||void 0,vaccineName:r(f,"Vaccine_Name")||void 0,vaccineExpiration:r(f,"Vaccine_Expiration")||void 0,bloodGlucoseNumber:d(f,"Blood_Glucose_Number"),bloodGlucoseUnit:r(f,"Blood_Glucose_Unit")||void 0};c.push(N)}return c}function Or(h){if(h.length===0)return{sourceType:"csv",totalCount:0,petName:"Unknown",earliestDate:"",latestDate:"",countsByType:{},countsByUser:{},sampleItems:[]};const i={},n={},s={};let r="",d="";const c=[];for(let v=0;v<h.length;v++){const b=h[v],x=b.eventType||"Unknown";i[x]=(i[x]||0)+1;const k=zi(b.userName);n[k]=(n[k]||0)+1;const S=cn(b.pet);s[S]=(s[S]||0)+1;const P=Hs(b.logDate,b.logTime);(!r||P<r)&&(r=P),(!d||P>d)&&(d=P),c.length<5&&c.push({timestamp:P,pet:S,eventType:b.eventType,user:k,note:b.comment})}let u="jjols",f=0;for(const[v,b]of Object.entries(s))b>f&&(f=b,u=v);return{sourceType:"csv",totalCount:h.length,petName:u,earliestDate:r,latestDate:d,countsByType:i,countsByUser:n,sampleItems:c}}function Rr(h,i,n){return h.map(s=>{const r=Br(s.eventType),d=zi(s.userName),c=cn(s.pet),u=Hs(s.logDate,s.logTime),f={originalEvent:s.eventType,originalUserName:s.userName,originalPetName:s.pet,petName:c,source:"csv_import",importedAt:new Date().toISOString()},v=(s.eventType||"").trim().toLowerCase();return v==="nap"||v==="sleep"?f.subcategory="nap":v==="training"?f.subcategory="training":v==="bath"?f.subcategory="bath":v==="teeth brushing"?f.subcategory="teeth_brushing":v==="treat"?f.subcategory="treat":v==="hospital"?f.visitReason="Hospital":v==="accident"?f.isAccident=!0:v==="eat grass"?f.symptom="Eat grass":v==="temperature"?f.symptom="Temperature":v==="crying"?f.symptom="Crying":v==="coughing"?f.symptom="Coughing":v==="playpen"?f.locationName="Playpen":v==="daycare"&&(f.locationName="Daycare"),s.weightKg!==void 0&&(f.weightKg=s.weightKg),s.weightLbs!==void 0&&(f.weightLbs=s.weightLbs),s.temperatureC!==void 0&&(f.temperatureC=s.temperatureC),s.temperatureF!==void 0&&(f.temperatureF=s.temperatureF),s.medicineType&&(f.medication=s.medicineType),s.stoolQuality&&(f.stoolQuality=s.stoolQuality),s.vaccineName&&(f.vaccineName=s.vaccineName),s.vaccineExpiration&&(f.vaccineExpiration=s.vaccineExpiration),s.bloodGlucoseNumber!==void 0&&(f.bloodGlucoseNumber=s.bloodGlucoseNumber),s.bloodGlucoseUnit&&(f.bloodGlucoseUnit=s.bloodGlucoseUnit),s.duration&&s.duration!=="0"&&(f.duration=s.duration),s.quantityNumber!==void 0&&(f.quantityNumber=s.quantityNumber),s.quantityUnit&&(f.quantityUnit=s.quantityUnit),{householdId:i,petId:n,eventType:r,loggedByName:d,timestamp:u,notes:s.comment||"",metadata:f}})}const Hr={poop:"poop",pee:"pee",walk:"walk",food:"food",water:"water",medicine:"medicine",medication:"medicine",grooming:"grooming",playing:"playing",play:"playing",vomit:"vomit",throwup:"vomit",weight:"weight",weigh:"weight",vet:"vet",clinic:"vet",doctor:"vet",symptom:"symptom",illness:"symptom",scratch:"symptom"};function jr(h){const i=(h||"").trim().toLowerCase();return Hr[i]||"playing"}function Zr(h){let i;try{i=JSON.parse(h)}catch{throw new Error("Invalid JSON format: Unable to parse file.")}if(!Array.isArray(i))throw new Error("Invalid DogNotes format: Root must be an array of event records.");const n=[];for(const s of i)s&&typeof s=="object"&&"Time"in s&&"Event"in s&&n.push({Time:String(s.Time||new Date().toISOString()),"Pet Name":String(s["Pet Name"]||"Pet"),Event:String(s.Event||""),Note:String(s.Note||""),"Logged by":String(s["Logged by"]||"Owner")});return n}function Ur(h){if(h.length===0)return{totalCount:0,petName:"Unknown",earliestDate:"",latestDate:"",countsByType:{},sampleItems:[]};const i={};let n=h[0].Time,s=h[0].Time;const r={};for(const u of h){const f=u.Event||"Unknown";i[f]=(i[f]||0)+1;const v=u["Pet Name"]||"Pet";r[v]=(r[v]||0)+1,u.Time<n&&(n=u.Time),u.Time>s&&(s=u.Time)}let d="Pet",c=0;for(const[u,f]of Object.entries(r))f>c&&(c=f,d=u);return{totalCount:h.length,petName:d,earliestDate:n,latestDate:s,countsByType:i,sampleItems:h.slice(0,5)}}function Wr(h,i,n){return h.map(s=>({householdId:i,petId:n,eventType:jr(s.Event),loggedByName:zi(s["Logged by"]||"Owner"),timestamp:s.Time,notes:s.Note||"",metadata:{originalDogNotesEvent:s.Event,originalUserName:s["Logged by"]||"",importedAt:new Date().toISOString()}}))}function Gr(h,i){const n=h.trim();if(i&&i.toLowerCase().endsWith(".json")||n.startsWith("[")||n.startsWith("{"))try{const r=Zr(n),d=Ur(r),c={},u=[];for(const v of r){const b=zi(v["Logged by"]);c[b]=(c[b]||0)+1,u.length<5&&u.push({timestamp:v.Time,pet:v["Pet Name"],eventType:v.Event,user:b,note:v.Note})}const f={sourceType:"json",totalCount:d.totalCount,petName:d.petName,earliestDate:d.earliestDate,latestDate:d.latestDate,countsByType:d.countsByType,countsByUser:c,sampleItems:u};return{type:"json",rawItems:r,summary:f}}catch(r){if(i&&i.toLowerCase().endsWith(".json"))throw r}try{const r=Ir(n),d=Or(r);return{type:"csv",rawItems:r,summary:d}}catch(r){throw new Error(`Failed to parse import file. Supported formats are CSV (e.g. report.csv) and DogNotes JSON. Detail: ${r.message}`)}}function qr(h,i,n){return h.type==="csv"?Rr(h.rawItems,i,n):Wr(h.rawItems,i,n).map(r=>({...r,loggedByName:zi(r.loggedByName)}))}function js(h,i,n=new Date){var V;const s=h.filter(M=>M.petId===i&&M.eventType==="poop").map(M=>({...M,date:new Date(M.timestamp)})).filter(M=>!isNaN(M.date.getTime())).sort((M,Y)=>M.date.getTime()-Y.date.getTime());if(s.length===0)return{hasData:!1,predictedTimestamp:null,timeDisplay:"Log to predict",timeDisplayKo:"기록 대기 중",subtext:"Record events to unlock AI timing prediction.",subtextKo:"이벤트를 기록하면 다음 배변 시간을 예측합니다.",progressPercent:0,isOverdue:!1,isTomorrow:!1,confidence:"low"};const d=s[s.length-1].date,c=n.getTime(),u=d.getTime(),v=Math.max(0,c-u)/(1e3*60*60),b=new Set;for(const M of s)b.add(M.date.toISOString().split("T")[0]);const x=Math.max(1,b.size),k=s.length/x,S=new Date(n.getFullYear(),n.getMonth(),n.getDate(),0,0,0,0),T=s.filter(M=>M.date>=S).length,N=[];for(let M=1;M<s.length;M++){const Y=s[M-1].date,Mt=(s[M].date.getTime()-Y.getTime())/(1e3*60*60);Mt>=.33&&Mt<=16&&N.push(Mt)}let z=6;if(N.length>0){const M=N.reduce((Y,Zt)=>Y+Zt,0);z=Math.max(2.5,Math.min(12,M/N.length))}else k<=1.2?z=24:z=Math.max(4,24/k);const W=new Array(24).fill(0);for(const M of s)W[M.date.getHours()]++;const H=[];for(let M=0;M<24;M++)W[M]>0&&H.push({hour:M,count:W[M]});const R=((V=[...H].sort((M,Y)=>Y.count-M.count)[0])==null?void 0:V.count)||0,C=H.filter(M=>M.count>=Math.max(1,Math.ceil(R*.2))).map(M=>M.hour).sort((M,Y)=>M-Y),j=C.length>0?C:[8],I=n.getHours()+n.getMinutes()/60,$=Math.min(2.5,z*.4);let it,dt="routine_today",ht=!1,Nt=!1;const St=j.filter(M=>{const Y=new Date(n.getFullYear(),n.getMonth(),n.getDate(),M,0,0,0),Zt=(Y.getTime()-c)/(1e3*60*60),Mt=(Y.getTime()-u)/(1e3*60*60);return Zt>.1&&Mt>=$});if(k>1.2&&v>z*1.35&&I>=7&&I<=22||k<=1.2&&T===0&&I>=14&&v>=20)if(Nt=!0,dt="overdue",St.length>0&&St[0]-I<=2)it=new Date(n.getFullYear(),n.getMonth(),n.getDate(),St[0],0,0,0);else{const M=new Date(c+18e5),Y=Math.round(M.getMinutes()/15)*15;M.setMinutes(Y,0,0),it=M}else if(St.length>0&&(T<Math.ceil(k)||T===0)){const M=St[0];it=new Date(n.getFullYear(),n.getMonth(),n.getDate(),M,0,0,0),dt="routine_today"}else if(T<Math.ceil(k)&&k>1.2&&u+z*36e5>c&&new Date(u+z*36e5).getDate()===n.getDate()&&new Date(u+z*36e5).getHours()<=21){const M=new Date(u+z*36e5),Y=Math.round(M.getMinutes()/15)*15;M.setMinutes(Y,0,0),it=M,dt="interval_today"}else{ht=!0,dt="routine_tomorrow";const M=j[0]??8;it=new Date(n.getFullYear(),n.getMonth(),n.getDate()+1,M,0,0,0)}let ct=50;const Kt=it.getTime()-u;if(Kt>0){const M=c-u;ct=Math.round(M/Kt*100),ct=Math.max(5,Math.min(100,ct))}Nt&&(ct=95);const Z=M=>{const Y=M.getHours(),Zt=M.getMinutes(),Mt=Zt===0?":00":`:${Zt.toString().padStart(2,"0")}`,fe=Y>=12?"pm":"am",ee=Y%12===0?12:Y%12,ge=`${ee}${Mt} ${fe}`,me=`${Y>=12?"오후":"오전"} ${ee}${Mt}`;return{timeEn:ge,timeKo:me}},jt=Z(it),G=ht?`Tomorrow ${jt.timeEn}`:jt.timeEn,ot=ht?`내일 ${jt.timeKo}`:jt.timeKo;let ut="Calculated from historical routine.",ft="기록 데이터 기반 다음 예상 시간대입니다.";if(Nt)ut=`Due anytime · ~${v.toFixed(1)}h since last poop`,ft=`배변 주기(${z.toFixed(1)}시간) 경과 · 곧 예상`;else if(ht)ut="Next routine window tomorrow morning.",ft="내일 아침 루틴 예상 시간대입니다.";else if(dt==="interval_today"){const M=Z(d);ut=`~${z.toFixed(1)}h interval after ${M.timeEn} poop.`,ft=`마지막 기록(${M.timeKo}) 기준 약 ${z.toFixed(1)}시간 후.`}else dt==="routine_today"&&(ut="Calculated from historical routine.",ft="기록 데이터 기반 다음 루틴 예상입니다.");let nt="low";s.length>=10?nt="high":s.length>=3&&(nt="medium");const Q=Math.max(0,(it.getTime()-c)/(1e3*60*60));return{hasData:!0,predictedTimestamp:it.toISOString(),timeDisplay:G,timeDisplayKo:ot,subtext:ut,subtextKo:ft,progressPercent:ct,isOverdue:Nt,isTomorrow:ht,confidence:nt,estimatedHoursRemaining:Math.round(Q*10)/10}}function Kr(h,i,n=new Date){const s=h.filter(R=>R.petId===i),r=Array.from({length:24},(R,C)=>({hour:C,poopCount:0,peeCount:0,totalCount:0})),d={poop:0,pee:0,walk:0,food:0,water:0,medicine:0,grooming:0,playing:0,vomit:0,weight:0,vet:0,symptom:0,nap:0,training:0},c={},u=new Map,f=new Set,v=new Date(n.getTime()-10080*60*1e3);let b=0,x=0,k=null;for(const R of s){const C=new Date(R.timestamp);if(isNaN(C.getTime()))continue;const j=C.getHours(),I=C.toISOString().split("T")[0];f.add(I),r[j]&&(r[j].totalCount++,R.eventType==="poop"&&r[j].poopCount++,R.eventType==="pee"&&r[j].peeCount++),R.eventType in d&&d[R.eventType]++,(!c[R.eventType]||new Date(c[R.eventType].timestamp)<C)&&(c[R.eventType]=R),u.has(I)||u.set(I,{date:I,poop:0,pee:0,food:0,walk:0,medicine:0,vomit:0,other:0,total:0});const $=u.get(I);$.total++,R.eventType==="poop"?$.poop++:R.eventType==="pee"?$.pee++:R.eventType==="food"?$.food++:R.eventType==="walk"?$.walk++:R.eventType==="medicine"?$.medicine++:R.eventType==="vomit"?$.vomit++:$.other++,C>=v&&(R.eventType==="vomit"&&b++,R.eventType==="medicine"&&x++),R.eventType==="poop"&&(!k||C>k)&&(k=C)}const S=Array.from(f).sort();let P=0,T=0,N=0,z=null;for(const R of S){const C=new Date(R);if(!z)N=1;else{const j=Math.round((C.getTime()-z.getTime())/864e5);j===1?N++:j>1&&(N=1)}N>T&&(T=N),z=C}if(S.length>0){const R=new Date(n).toISOString().split("T")[0],C=new Date(n.getTime()-1440*60*1e3).toISOString().split("T")[0],j=S[S.length-1];j===R||j===C?P=N:P=0}let W=0;k&&(W=Math.max(0,Math.floor((n.getTime()-k.getTime())/(1440*60*1e3))));const H=Array.from(u.values()).sort((R,C)=>R.date.localeCompare(C.date)),et=js(h,i,n);return{petId:i,currentStreakDays:P,longestStreakDays:T,totalEventsLogged:s.length,hourlyDistribution:r,dailyFrequencies:H,eventCountsByType:d,lastEventByType:c,nextPoopPrediction:et,walkStats:{totalWalks:d.walk||0,totalDistanceMeters:0,avgWalkMinutes:25},healthAlerts:{vomitsLast7Days:b,medicinesLast7Days:x,daysWithoutPoop:W}}}const Xo=(h,i)=>i.some(n=>h instanceof n);let _s,ws;function Vr(){return _s||(_s=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jr(){return ws||(ws=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qo=new WeakMap,Ko=new WeakMap,lo=new WeakMap;function Yr(h){const i=new Promise((n,s)=>{const r=()=>{h.removeEventListener("success",d),h.removeEventListener("error",c)},d=()=>{n(Le(h.result)),r()},c=()=>{s(h.error),r()};h.addEventListener("success",d),h.addEventListener("error",c)});return lo.set(i,h),i}function Xr(h){if(Qo.has(h))return;const i=new Promise((n,s)=>{const r=()=>{h.removeEventListener("complete",d),h.removeEventListener("error",c),h.removeEventListener("abort",c)},d=()=>{n(),r()},c=()=>{s(h.error||new DOMException("AbortError","AbortError")),r()};h.addEventListener("complete",d),h.addEventListener("error",c),h.addEventListener("abort",c)});Qo.set(h,i)}let tn={get(h,i,n){if(h instanceof IDBTransaction){if(i==="done")return Qo.get(h);if(i==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Le(h[i])},set(h,i,n){return h[i]=n,!0},has(h,i){return h instanceof IDBTransaction&&(i==="done"||i==="store")?!0:i in h}};function Zs(h){tn=h(tn)}function Qr(h){return Jr().includes(h)?function(...i){return h.apply(en(this),i),Le(this.request)}:function(...i){return Le(h.apply(en(this),i))}}function tl(h){return typeof h=="function"?Qr(h):(h instanceof IDBTransaction&&Xr(h),Xo(h,Vr())?new Proxy(h,tn):h)}function Le(h){if(h instanceof IDBRequest)return Yr(h);if(Ko.has(h))return Ko.get(h);const i=tl(h);return i!==h&&(Ko.set(h,i),lo.set(i,h)),i}const en=h=>lo.get(h);function el(h,i,{blocked:n,upgrade:s,blocking:r,terminated:d}={}){const c=indexedDB.open(h,i),u=Le(c);return s&&c.addEventListener("upgradeneeded",f=>{s(Le(c.result),f.oldVersion,f.newVersion,Le(c.transaction),f)}),n&&c.addEventListener("blocked",f=>n(f.oldVersion,f.newVersion,f)),u.then(f=>{d&&f.addEventListener("close",()=>d()),r&&f.addEventListener("versionchange",v=>r(v.oldVersion,v.newVersion,v))}).catch(()=>{}),u}const il=["get","getKey","getAll","getAllKeys","count"],ol=["put","add","delete","clear"],Vo=new Map;function ks(h,i){if(!(h instanceof IDBDatabase&&!(i in h)&&typeof i=="string"))return;if(Vo.get(i))return Vo.get(i);const n=i.replace(/FromIndex$/,""),s=i!==n,r=ol.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||il.includes(n)))return;const d=async function(c,...u){const f=this.transaction(c,r?"readwrite":"readonly");let v=f.store;return s&&(v=v.index(u.shift())),(await Promise.all([v[n](...u),r&&f.done]))[0]};return Vo.set(i,d),d}Zs(h=>({...h,get:(i,n,s)=>ks(i,n)||h.get(i,n,s),has:(i,n)=>!!ks(i,n)||h.has(i,n)}));const nl=["continue","continuePrimaryKey","advance"],Fs={},on=new WeakMap,Us=new WeakMap,sl={get(h,i){if(!nl.includes(i))return h[i];let n=Fs[i];return n||(n=Fs[i]=function(...s){on.set(this,Us.get(this)[i](...s))}),n}};async function*al(...h){let i=this;if(i instanceof IDBCursor||(i=await i.openCursor(...h)),!i)return;i=i;const n=new Proxy(i,sl);for(Us.set(n,i),lo.set(n,en(i));i;)yield n,i=await(on.get(n)||i.continue()),on.delete(n)}function $s(h,i){return i===Symbol.asyncIterator&&Xo(h,[IDBIndex,IDBObjectStore,IDBCursor])||i==="iterate"&&Xo(h,[IDBIndex,IDBObjectStore])}Zs(h=>({...h,get(i,n,s){return $s(i,n)?al:h.get(i,n,s)},has(i,n){return $s(i,n)||h.has(i,n)}}));const rl="dooty-offline-db",ll=1;let Jo=null;function ae(){return Jo||(Jo=el(rl,ll,{upgrade(h){if(!h.objectStoreNames.contains("events")){const i=h.createObjectStore("events",{keyPath:"id"});i.createIndex("by-pet","petId"),i.createIndex("by-timestamp","timestamp")}h.objectStoreNames.contains("pending_events")||h.createObjectStore("pending_events",{keyPath:"localId"}),h.objectStoreNames.contains("meta")||h.createObjectStore("meta")}})),Jo}async function _i(h){try{const n=(await ae()).transaction("events","readwrite");for(const s of h)await n.store.put(s);await n.done}catch(i){console.warn("Could not save events offline:",i)}}async function Rt(h,i){try{let s=await(await ae()).getAllFromIndex("events","by-pet",h);return i!=null&&i.startDate,i!=null&&i.endDate,s.sort((r,d)=>new Date(d.timestamp).getTime()-new Date(r.timestamp).getTime()),i!=null&&i.limit&&i.limit>0,s}catch(n){return console.warn("Could not retrieve offline events:",n),[]}}async function dl(h){try{return await(await ae()).get("meta",`last_sync_${h}`)||null}catch{return null}}async function Ps(h,i){try{await(await ae()).put("meta",i,`last_sync_${h}`)}catch(n){console.warn("Failed to set last sync timestamp:",n)}}async function Ts(h){const i="offline-"+Date.now()+"-"+Math.random().toString(36).substring(2,7);try{const n=await ae();await n.put("pending_events",{localId:i,dto:h,createdAt:new Date().toISOString()});const s={id:i,householdId:h.householdId,petId:h.petId,eventType:h.eventType,loggedByName:h.loggedByName||"Me",timestamp:h.timestamp,notes:h.notes,latitude:h.latitude,longitude:h.longitude,metadata:h.metadata,createdAt:new Date().toISOString(),isOfflinePending:!0,localId:i};await n.put("events",s)}catch(n){console.warn("Failed to enqueue pending offline event:",n)}return i}async function Ws(){try{return await(await ae()).getAll("pending_events")}catch{return[]}}async function cl(h){try{const i=await ae();await i.delete("pending_events",h),await i.delete("events",h)}catch(i){console.warn("Failed to remove pending event:",i)}}async function hl(h){try{const i=await ae();await i.delete("events",h),await i.delete("pending_events",h)}catch(i){console.warn("Failed to delete offline event:",i)}}async function Ls(h){try{await(await ae()).put("events",h)}catch(i){console.warn("Failed to update offline event:",i)}}const Yo={},pl="https://watslog-bff.warmsynthsiloveyou.workers.dev/api";function ul(){const h=Yo==null?void 0:Yo.VITE_API_URL;if(h)return h.replace(/\/+$/,"");if(typeof window<"u"){const i=window.location.hostname;if(i.endsWith("github.io")||!i.includes("localhost")&&!i.includes("127.0.0.1"))return pl}return"/api"}const rt=ul();function mt(){const h={"Content-Type":"application/json"},i=localStorage.getItem("dooty_auth_token");return i&&(h.Authorization=`Bearer ${i}`),h}class kt{static async signUp(i){const n=await fetch(`${rt}/auth/signup`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!n.ok){const s=await n.json().catch(()=>({}));throw new Error(s.error||"Failed to sign up")}return n.json()}static async signIn(i){const n=await fetch(`${rt}/auth/signin`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!n.ok){const s=await n.json().catch(()=>({}));throw new Error(s.error||"Invalid email or password")}return n.json()}static async getMe(){const i=await fetch(`${rt}/auth/me`,{headers:mt()});if(!i.ok)throw new Error("Unauthorized");return i.json()}static async joinAuthenticated(i,n){const s=await fetch(`${rt}/households/join-authenticated`,{method:"POST",headers:mt(),body:JSON.stringify({code:i,role:n})});if(!s.ok){const r=await s.json().catch(()=>({}));throw new Error(r.error||"Failed to join household")}return s.json()}static async claimHousehold(i,n){const s=await fetch(`${rt}/households/claim`,{method:"POST",headers:mt(),body:JSON.stringify({householdId:i,role:n})});if(!s.ok){const r=await s.json().catch(()=>({}));throw new Error(r.error||"Failed to claim household")}return s.json()}static async createHousehold(i){const n=await fetch(`${rt}/households`,{method:"POST",headers:mt(),body:JSON.stringify(i)});if(!n.ok){const s=await n.json().catch(()=>({}));throw new Error(s.error||"Failed to create household")}return n.json()}static async getHousehold(i){const n=await fetch(`${rt}/households/${i}`,{headers:mt()});if(!n.ok)throw new Error("Failed to fetch household");return n.json()}static async removeMember(i,n){if(!(await fetch(`${rt}/households/${i}/members/${n}`,{method:"DELETE",headers:mt()})).ok)throw new Error("Failed to remove member")}static async createInviteCode(i){const n=await fetch(`${rt}/households/${i}/invites`,{method:"POST",headers:mt()});if(!n.ok)throw new Error("Failed to create invite code");return n.json()}static async joinHousehold(i,n,s){const r=await fetch(`${rt}/households/join`,{method:"POST",headers:mt(),body:JSON.stringify({code:i,displayName:n,role:s})});if(!r.ok){const d=await r.json().catch(()=>({}));throw new Error(d.error||"Failed to join household")}return r.json()}static async getPets(i){const n=await fetch(`${rt}/households/${i}/pets`,{headers:mt()});if(!n.ok)throw new Error("Failed to fetch pets");return n.json()}static async updatePet(i,n){const s=await fetch(`${rt}/pets/${i}`,{method:"PATCH",headers:mt(),body:JSON.stringify(n)});if(!s.ok)throw new Error("Failed to update pet");return s.json()}static async updateMember(i,n,s){const r=await fetch(`${rt}/households/${i}/members/${n}`,{method:"PATCH",headers:mt(),body:JSON.stringify(s)});if(!r.ok)throw new Error("Failed to update member");return r.json()}static async getEvents(i,n){if(!navigator.onLine)return Rt(i);try{const s=typeof n=="number"?{limit:n}:n||{},r=new URLSearchParams;s.limit&&r.set("limit",s.limit.toString()),s.offset&&r.set("offset",s.offset.toString()),s.since&&r.set("since",s.since),s.startDate&&r.set("startDate",s.startDate),s.endDate&&r.set("endDate",s.endDate);const d=r.toString(),c=d?`${rt}/pets/${i}/events?${d}`:`${rt}/pets/${i}/events`,u=await fetch(c,{headers:mt()});if(!u.ok)throw new Error("Failed to fetch events from server");const f=await u.json();return await _i(f),f}catch{return Rt(i)}}static async syncEvents(i,n){if(!navigator.onLine)return Rt(i);try{const s=await dl(i),r=new Date().toISOString();if(s){const d=await this.getEvents(i,{since:s,limit:1e3});return d&&d.length>0&&await _i(d),await Ps(i,r),Rt(i)}else{const d=new Date(Date.now()-7776e6).toISOString(),c=await this.getEvents(i,{startDate:d,limit:500});return c&&c.length>0&&(await _i(c),n==null||n(c.length)),await Ps(i,r),this.backfillOlderEvents(i,d,n).catch(u=>{console.warn("Background historical backfill error:",u)}),Rt(i)}}catch(s){return console.warn("Sync failed, using offline fallback:",s),Rt(i)}}static async backfillOlderEvents(i,n,s){if(navigator.onLine)try{let r=n,d=!0;const c=500;for(;d;){const u=await this.getEvents(i,{endDate:r,limit:c});if(!u||u.length===0){d=!1;break}if(await _i(u),s==null||s(u.length),u.length<c)d=!1;else{const f=u[u.length-1];f&&f.timestamp&&f.timestamp!==r?r=f.timestamp:d=!1}}}catch(r){console.warn("Backfill chunk failed:",r)}}static async createEvent(i){if(!navigator.onLine){const n=await Ts(i);return{id:n,householdId:i.householdId,petId:i.petId,eventType:i.eventType,loggedByName:i.loggedByName||"Me",timestamp:i.timestamp,notes:i.notes,latitude:i.latitude,longitude:i.longitude,metadata:i.metadata,createdAt:new Date().toISOString(),isOfflinePending:!0,localId:n}}try{const n=await fetch(`${rt}/events`,{method:"POST",headers:mt(),body:JSON.stringify(i)});if(!n.ok)throw new Error("Server returned error creating event");const s=await n.json();return await _i([s]),s}catch(n){console.warn("Network request failed, falling back to offline queue:",n);const s=await Ts(i);return{id:s,householdId:i.householdId,petId:i.petId,eventType:i.eventType,loggedByName:i.loggedByName||"Me",timestamp:i.timestamp,notes:i.notes,latitude:i.latitude,longitude:i.longitude,metadata:i.metadata,createdAt:new Date().toISOString(),isOfflinePending:!0,localId:s}}}static async updateEvent(i,n){if(!navigator.onLine){const r=(await Rt("")).find(d=>d.id===i);if(r){const d={...r,...n,eventType:n.eventType??r.eventType,notes:n.notes!==void 0?n.notes:r.notes,latitude:n.latitude!==void 0?n.latitude??void 0:r.latitude,longitude:n.longitude!==void 0?n.longitude??void 0:r.longitude,metadata:n.metadata!==void 0?n.metadata:r.metadata};return await Ls(d),d}}try{const s=await fetch(`${rt}/events/${i}`,{method:"PATCH",headers:mt(),body:JSON.stringify(n)});if(!s.ok)throw new Error("Server returned error updating event");const r=await s.json();return await Ls(r),r}catch(s){throw console.warn("Network update failed:",s),s}}static async deleteEvent(i){if(await hl(i),!!navigator.onLine)try{const n=await fetch(`${rt}/events/${i}`,{method:"DELETE",headers:mt()});if(!n.ok&&n.status!==404)throw new Error("Server returned error deleting event")}catch(n){console.warn("Network delete warning:",n)}}static async flushOfflineQueue(){if(!navigator.onLine)return 0;const i=await Ws();if(i.length===0)return 0;try{const n=i.map(r=>r.dto);if((await fetch(`${rt}/events/batch-sync`,{method:"POST",headers:mt(),body:JSON.stringify({events:n})})).ok){for(const r of i)await cl(r.localId);return i.length}}catch(n){console.warn("Failed to flush offline queue:",n)}return 0}static async importEvents(i){let s=0;for(let r=0;r<i.length;r+=500){const d=i.slice(r,r+500);let c=await fetch(`${rt}/import/events`,{method:"POST",headers:mt(),body:JSON.stringify({events:d})});if(c.status===404&&(c=await fetch(`${rt}/events/batch-sync`,{method:"POST",headers:mt(),body:JSON.stringify({events:d})})),!c.ok){const f=await c.json().catch(()=>({}));throw new Error(f.error||`Import batch failed (${c.status})`)}const u=await c.json();s+=u.importedCount||u.syncedCount||d.length}return{importedCount:s}}static async importDogNotes(i,n,s){const r=await fetch(`${rt}/import/dognotes`,{method:"POST",headers:mt(),body:JSON.stringify({householdId:i,petId:n,items:s})});if(!r.ok)throw new Error("DogNotes import failed");return r.json()}static async getAnalytics(i,n){const s=new URLSearchParams;n!=null&&n.startDate&&s.set("startDate",n.startDate),n!=null&&n.endDate&&s.set("endDate",n.endDate);const r=s.toString(),d=r?`${rt}/pets/${i}/analytics?${r}`:`${rt}/pets/${i}/analytics`,c=await fetch(d,{headers:mt()});if(!c.ok)throw new Error("Failed to fetch analytics");return c.json()}static async saveWalkRoute(i){const n=await fetch(`${rt}/walks`,{method:"POST",headers:mt(),body:JSON.stringify(i)});if(!n.ok)throw new Error("Failed to save walk route");return n.json()}static async getWalkRoutes(i){const n=await fetch(`${rt}/pets/${i}/walks`,{headers:mt()});if(!n.ok)throw new Error("Failed to fetch walk routes");return n.json()}}class fl{constructor(){this.listeners=new Set,this.currentUser=null,this.currentHousehold=null,this.userHouseholds=[],this.currentPet=null,this.pets=[],this.events=[],this.activeTab="today",this.authView="signin",this.currentLocale="en",this.isOnline=navigator.onLine,this.pendingSyncCount=0,this.isSyncing=!1,this.analyticsTimeRange="30d",this.userAvatar=localStorage.getItem("dooty_user_avatar")||"",this.track={poop:!0,pee:!0,vomit:!0,meds:!0,weight:!0,walk:!0,vet:!1,symptom:!1},this.nudges={push:!0,weekly:!0,gap:!0,vet:!1},this.pendingInvites=[],this.loggerModalOpen=!1,this.loggerEventType=null,this.editingEvent=null,this.photoModalOpen=!1,this.photoModalTarget="pet",this.photoModalTargetId="",this.photoModalCurrentAvatar="",this.photoModalTitle="",this.isLoading=!1;const i=localStorage.getItem("dooty_locale");if(i&&(i==="en"||i==="ko"))this.currentLocale=i;else{const c=typeof navigator<"u"&&navigator.language||"";this.currentLocale=c.startsWith("ko")?"ko":"en"}typeof document<"u"&&(document.documentElement.lang=this.currentLocale,document.body.classList.toggle("lang-ko",this.currentLocale==="ko"));const n=localStorage.getItem("dooty_track_prefs");if(n)try{this.track={...this.track,...JSON.parse(n)}}catch(c){console.warn("Failed to parse track prefs:",c)}const s=localStorage.getItem("dooty_nudge_prefs");if(s)try{this.nudges={...this.nudges,...JSON.parse(s)}}catch(c){console.warn("Failed to parse nudge prefs:",c)}const r=localStorage.getItem("dooty_analytics_timerange");r&&["7d","30d","1y","all"].includes(r)&&(this.analyticsTimeRange=r);const d=localStorage.getItem("dooty_household_data");if(d)try{const c=JSON.parse(d);if(this.currentHousehold=c,this.pets=c.pets||[],this.pets.length>0){const u=localStorage.getItem("dooty_pet_id");this.currentPet=this.pets.find(f=>f.id===u)||this.pets[0],Rt(this.currentPet.id).then(f=>{f.length>0&&this.events.length===0&&(this.events=f,this.notify())})}this.loadPendingInvites()}catch(c){console.warn("Failed to parse cached household data:",c)}window.addEventListener("online",()=>this.handleNetworkChange(!0)),window.addEventListener("offline",()=>this.handleNetworkChange(!1))}subscribe(i){return this.listeners.add(i),()=>this.listeners.delete(i)}notify(){this.listeners.forEach(i=>i())}get t(){return Dr[this.currentLocale]}setLocale(i){this.currentLocale=i,localStorage.setItem("dooty_locale",i),typeof document<"u"&&(document.documentElement.lang=i,document.body.classList.toggle("lang-ko",i==="ko")),this.notify()}setActiveTab(i){this.activeTab=i,this.notify()}setAuthView(i){this.authView=i,this.notify()}setTrackingPreference(i,n){this.track={...this.track,[i]:n},localStorage.setItem("dooty_track_prefs",JSON.stringify(this.track)),this.notify()}setNudgePreference(i,n){this.nudges={...this.nudges,[i]:n},localStorage.setItem("dooty_nudge_prefs",JSON.stringify(this.nudges)),this.notify()}setAnalyticsTimeRange(i){this.analyticsTimeRange=i,localStorage.setItem("dooty_analytics_timerange",i),this.notify()}openLogger(i){this.editingEvent=null,this.loggerEventType=i||null,this.loggerModalOpen=!0,this.notify()}openLoggerForEdit(i){this.editingEvent=i,this.loggerEventType=i.eventType,this.loggerModalOpen=!0,this.notify()}closeLogger(){this.loggerModalOpen=!1,this.loggerEventType=null,this.editingEvent=null,this.notify()}openPhotoModal(i){this.photoModalTarget=i.target,this.photoModalTargetId=i.targetId||"",this.photoModalCurrentAvatar=i.currentAvatar||"",this.photoModalTitle=i.title||"",this.photoModalOpen=!0,this.notify()}closePhotoModal(){this.photoModalOpen=!1,this.notify()}async updatePetAvatar(i,n){await this.updatePetProfile(i,{avatarUrl:n})}async updatePetProfile(i,n){if(this.currentPet&&this.currentPet.id===i&&(this.currentPet={...this.currentPet,...n}),this.pets=this.pets.map(s=>s.id===i?{...s,...n}:s),this.currentHousehold&&(this.currentHousehold={...this.currentHousehold,pets:this.pets},localStorage.setItem("dooty_household_data",JSON.stringify(this.currentHousehold))),n.avatarUrl!==void 0&&localStorage.setItem(`dooty_pet_avatar_${i}`,n.avatarUrl),this.notify(),navigator.onLine)try{await kt.updatePet(i,n)}catch(s){console.warn("Could not sync pet profile to server:",s)}}async updateUserAvatar(i){var n;if(this.userAvatar=i,localStorage.setItem("dooty_user_avatar",i),this.notify(),this.currentHousehold&&((n=this.currentHousehold.members)!=null&&n.length)){const s=this.currentHousehold.members[0];if(s&&(s.avatarUrl=i,navigator.onLine))try{await kt.updateMember(this.currentHousehold.id,s.id,{avatarUrl:i})}catch(r){console.warn("Could not sync member avatar to server:",r)}}}async updateMemberAvatar(i,n){if(this.currentHousehold&&this.currentHousehold.members){const s=this.currentHousehold.members.find(r=>r.id===i);if(s&&(s.avatarUrl=n,localStorage.setItem(`dooty_member_avatar_${i}`,n),this.notify(),navigator.onLine))try{await kt.updateMember(this.currentHousehold.id,i,{avatarUrl:n})}catch(r){console.warn("Could not sync member avatar to server:",r)}}}loadPendingInvites(){if(!this.currentHousehold)return;const i=localStorage.getItem(`dooty_pending_invites_${this.currentHousehold.id}`);if(i)try{this.pendingInvites=JSON.parse(i)}catch{this.pendingInvites=[]}else this.pendingInvites=[{code:"H3P8",role:"Log only",when:"sent to Dan · expires in 6 days",expiresAt:new Date(Date.now()+6*864e5).toISOString()},{code:"B9XT",role:"Full member",when:"unsent · expires in 7 days",expiresAt:new Date(Date.now()+7*864e5).toISOString()}],localStorage.setItem(`dooty_pending_invites_${this.currentHousehold.id}`,JSON.stringify(this.pendingInvites))}async createInvite(i="Full member"){let n="";if(this.currentHousehold){try{n=(await kt.createInviteCode(this.currentHousehold.id)).code}catch(r){console.warn("Could not generate invite code from server, creating locally:",r);const d="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";n=Array.from({length:6},()=>d.charAt(Math.floor(Math.random()*d.length))).join("")}const s={code:n,role:i,when:"just created · expires in 7 days",expiresAt:new Date(Date.now()+7*864e5).toISOString()};this.pendingInvites=[s,...this.pendingInvites],localStorage.setItem(`dooty_pending_invites_${this.currentHousehold.id}`,JSON.stringify(this.pendingInvites)),this.notify()}return n}async revokeInvite(i){this.currentHousehold&&(this.pendingInvites=this.pendingInvites.filter(n=>n.code!==i),localStorage.setItem(`dooty_pending_invites_${this.currentHousehold.id}`,JSON.stringify(this.pendingInvites)),this.notify())}exportEventsCsv(){var f;const i=((f=this.currentPet)==null?void 0:f.name)||"Pet",n=["Timestamp","Pet Name","Event Type","Logged By","Notes","Latitude","Longitude"],s=(this.events||[]).map(v=>[`"${v.timestamp||""}"`,`"${i}"`,`"${v.eventType||""}"`,`"${(v.loggedByName||"").replace(/"/g,'""')}"`,`"${(v.notes||"").replace(/"/g,'""')}"`,v.latitude!==void 0&&v.latitude!==null?v.latitude:"",v.longitude!==void 0&&v.longitude!==null?v.longitude:""]),r=[n.join(","),...s.map(v=>v.join(","))].join(`
`),d=new Blob([r],{type:"text/csv;charset=utf-8;"}),c=URL.createObjectURL(d),u=document.createElement("a");u.setAttribute("href",c),u.setAttribute("download",`dooty-${i.toLowerCase()}-events.csv`),document.body.appendChild(u),u.click(),document.body.removeChild(u),URL.revokeObjectURL(c)}async init(){var i,n;this.isLoading=!0,this.notify();try{if(typeof window<"u"){if(window.location.hash&&window.location.hash.includes("access_token=")){const r=window.location.hash.substring(1),c=new URLSearchParams(r).get("access_token");c&&(localStorage.setItem("dooty_auth_token",c),window.history.replaceState(null,"",window.location.pathname+window.location.search))}else if(window.location.search&&window.location.search.includes("access_token=")){const d=new URLSearchParams(window.location.search).get("access_token");d&&(localStorage.setItem("dooty_auth_token",d),window.history.replaceState(null,"",window.location.pathname))}}if(localStorage.getItem("dooty_auth_token"))try{const r=await kt.getMe();this.currentUser=r.user,this.userHouseholds=r.households||[],r.activeHousehold&&(this.currentHousehold=r.activeHousehold,localStorage.setItem("dooty_household_id",r.activeHousehold.id),localStorage.setItem("dooty_household_data",JSON.stringify(r.activeHousehold)))}catch(r){if(console.warn("Network sync for auth session failed, using cached session:",r),(i=r.message)!=null&&i.includes("Unauthorized")||(n=r.message)!=null&&n.includes("expired")){this.signOut();return}}else{const r=localStorage.getItem("dooty_household_id");if(r)try{const d=await kt.getHousehold(r);d&&(this.currentHousehold=d,localStorage.setItem("dooty_household_data",JSON.stringify(d)))}catch(d){console.warn("Network sync for household failed, using cached session:",d)}}if(this.currentHousehold){const r=this.currentHousehold.pets||await kt.getPets(this.currentHousehold.id);if(this.pets=r.map(d=>{const c=localStorage.getItem(`dooty_pet_avatar_${d.id}`);return{...d,avatarUrl:d.avatarUrl||c||""}}),this.currentHousehold.members&&(this.currentHousehold.members=this.currentHousehold.members.map(d=>{const c=localStorage.getItem(`dooty_member_avatar_${d.id}`);return{...d,avatarUrl:d.avatarUrl||c||(d.role==="owner"?this.userAvatar:"")}})),this.pets.length>0){const d=localStorage.getItem("dooty_pet_id");this.currentPet=this.pets.find(c=>c.id===d)||this.pets[0]}else this.currentPet=null;this.loadPendingInvites()}this.currentPet?await this.refreshEvents():this.events=[],await this.checkPendingSync()}catch(s){console.warn("Init loaded with local fallback:",s)}finally{this.isLoading=!1,this.notify()}}async selectPet(i){this.currentPet=i,localStorage.setItem("dooty_pet_id",i.id),this.events=await Rt(i.id),this.notify(),this.syncEvents()}async selectHousehold(i){const n=this.userHouseholds.find(r=>r.id===i);if(!n)return;this.currentHousehold=n,localStorage.setItem("dooty_household_id",n.id),localStorage.setItem("dooty_household_data",JSON.stringify(n));const s=n.pets||await kt.getPets(n.id);this.pets=s,s.length>0?(this.currentPet=s[0],localStorage.setItem("dooty_pet_id",this.currentPet.id),this.events=await Rt(this.currentPet.id),this.syncEvents()):(this.currentPet=null,this.events=[]),this.loadPendingInvites(),this.notify()}async refreshEvents(){if(!this.currentPet){this.events=[],this.notify();return}this.events=await Rt(this.currentPet.id),this.notify(),await this.syncEvents()}async syncEvents(){var n;if(!this.currentPet)return;const i=this.currentPet.id;this.isSyncing=!0,this.notify();try{const s=await kt.syncEvents(i,async()=>{var r;((r=this.currentPet)==null?void 0:r.id)===i&&(this.events=await Rt(i),this.notify())});((n=this.currentPet)==null?void 0:n.id)===i&&(this.events=s,this.notify())}catch(s){console.warn("Sync events warning:",s)}finally{this.isSyncing=!1,this.notify()}}async logEvent(i,n="",s,r,d,c){var v,b,x,k;if(!this.currentHousehold||!this.currentPet)return;const u=((v=this.currentUser)==null?void 0:v.displayName)||((x=(b=this.currentHousehold.members)==null?void 0:b[0])==null?void 0:x.displayName)||"Owner",f=await kt.createEvent({householdId:this.currentHousehold.id,petId:this.currentPet.id,eventType:i,loggedByName:u,loggedByUserId:(k=this.currentUser)==null?void 0:k.id,timestamp:c||new Date().toISOString(),notes:n,latitude:r,longitude:d,metadata:s||{}});this.events=[f,...this.events],await this.checkPendingSync(),this.notify()}async updateEvent(i,n,s="",r,d,c,u){const f={eventType:n,notes:s,metadata:r||{},latitude:d,longitude:c};u&&(f.timestamp=u);try{const v=await kt.updateEvent(i,f);this.events=this.events.map(b=>b.id===i?{...b,...v}:b)}catch{this.events=this.events.map(b=>b.id===i?{...b,eventType:n,notes:s,metadata:r||b.metadata,latitude:d!==void 0?d:b.latitude,longitude:c!==void 0?c:b.longitude,...u?{timestamp:u}:{}}:b)}this.notify()}async deleteEvent(i){try{await kt.deleteEvent(i)}catch(n){console.warn("Failed to delete event on backend:",n)}this.events=this.events.filter(n=>n.id!==i&&n.localId!==i),this.notify()}async handleNetworkChange(i){this.isOnline=i,i&&await kt.flushOfflineQueue()>0&&await this.refreshEvents(),await this.checkPendingSync(),this.notify()}get isAuthenticated(){return this.currentHousehold!==null}signOut(){localStorage.removeItem("dooty_auth_token"),localStorage.removeItem("dooty_household_id"),localStorage.removeItem("dooty_household_data"),localStorage.removeItem("dooty_pet_id"),localStorage.removeItem("dooty_user_avatar"),this.currentUser=null,this.currentHousehold=null,this.userHouseholds=[],this.currentPet=null,this.pets=[],this.events=[],this.userAvatar="",this.activeTab="today",this.authView="signin",this.notify()}async signUp(i){this.isLoading=!0,this.notify();try{!i.redirectTo&&typeof window<"u"&&(i.redirectTo=window.location.origin+window.location.pathname);const n=await kt.signUp(i);if(this.currentUser=n.user,this.currentHousehold=n.activeHousehold,this.userHouseholds=n.households||(n.activeHousehold?[n.activeHousehold]:[]),n.token&&localStorage.setItem("dooty_auth_token",n.token),n.activeHousehold){localStorage.setItem("dooty_household_id",n.activeHousehold.id),localStorage.setItem("dooty_household_data",JSON.stringify(n.activeHousehold));const s=n.activeHousehold.pets||[];this.pets=s,s.length>0?(this.currentPet=s[0],localStorage.setItem("dooty_pet_id",this.currentPet.id),await this.refreshEvents()):this.currentPet=null,this.loadPendingInvites()}this.authView="signin"}finally{this.isLoading=!1,this.notify()}}async signIn(i){this.isLoading=!0,this.notify();try{const n=await kt.signIn(i);if(this.currentUser=n.user,this.currentHousehold=n.activeHousehold,this.userHouseholds=n.households||(n.activeHousehold?[n.activeHousehold]:[]),n.token&&localStorage.setItem("dooty_auth_token",n.token),n.activeHousehold){localStorage.setItem("dooty_household_id",n.activeHousehold.id),localStorage.setItem("dooty_household_data",JSON.stringify(n.activeHousehold));const s=n.activeHousehold.pets||[];this.pets=s,s.length>0?(this.currentPet=s[0],localStorage.setItem("dooty_pet_id",this.currentPet.id),await this.refreshEvents()):this.currentPet=null,this.loadPendingInvites()}this.authView="signin"}finally{this.isLoading=!1,this.notify()}}async joinAuthenticated(i,n){this.isLoading=!0,this.notify();try{const s=await kt.joinAuthenticated(i,n);if(this.userHouseholds=s.households||[],s.activeHousehold){this.currentHousehold=s.activeHousehold,localStorage.setItem("dooty_household_id",s.activeHousehold.id),localStorage.setItem("dooty_household_data",JSON.stringify(s.activeHousehold));const r=s.activeHousehold.pets||[];this.pets=r,r.length>0&&(this.currentPet=r[0],localStorage.setItem("dooty_pet_id",this.currentPet.id),await this.refreshEvents()),this.loadPendingInvites()}}finally{this.isLoading=!1,this.notify()}}async claimHousehold(i,n){this.isLoading=!0,this.notify();try{const s=await kt.claimHousehold(i,n);if(this.userHouseholds=s.households||[],s.activeHousehold){this.currentHousehold=s.activeHousehold,localStorage.setItem("dooty_household_id",s.activeHousehold.id),localStorage.setItem("dooty_household_data",JSON.stringify(s.activeHousehold));const r=s.activeHousehold.pets||[];this.pets=r,r.length>0&&(this.currentPet=r[0],localStorage.setItem("dooty_pet_id",this.currentPet.id),await this.refreshEvents()),this.loadPendingInvites()}}finally{this.isLoading=!1,this.notify()}}async removeMember(i){if(this.currentHousehold){this.isLoading=!0,this.notify();try{await kt.removeMember(this.currentHousehold.id,i),this.currentHousehold.members=(this.currentHousehold.members||[]).filter(n=>n.id!==i),localStorage.setItem("dooty_household_data",JSON.stringify(this.currentHousehold))}finally{this.isLoading=!1,this.notify()}}}async checkPendingSync(){const i=await Ws();this.pendingSyncCount=i.length,this.notify()}}const m=new fl;var gl=function(h,i,n,s){var r=arguments.length,d=r<3?i:s===null?s=Object.getOwnPropertyDescriptor(i,n):s,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")d=Reflect.decorate(h,i,n,s);else for(var u=h.length-1;u>=0;u--)(c=h[u])&&(d=(r<3?c(d):r>3?c(i,n,d):c(i,n))||d);return r>3&&d&&Object.defineProperty(i,n,d),d},He;let Ss=(He=class extends Ft{connectedCallback(){super.connectedCallback(),this.unsubscribe=m.subscribe(()=>this.requestUpdate())}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.unsubscribe)==null||i.call(this)}render(){var r;const i=m.currentLocale==="ko",n=((r=m.currentPet)==null?void 0:r.name)||(i?"반려견":"Pet"),s=m.activeTab;return w`
      <div class="dock-container">
        <!-- 1. Today Tab -->
        <div
          class="dock-tab ${s==="today"?"active":""}"
          @click=${()=>m.setActiveTab("today")}
        >
          <div class="icon-today">
            <div class="icon-today-bar"></div>
          </div>
          <div class="dock-label">${i?"오늘":"Today"}</div>
        </div>

        <!-- 2. Numbers Tab -->
        <div
          class="dock-tab ${s==="analytics"?"active":""}"
          @click=${()=>m.setActiveTab("analytics")}
        >
          <div class="icon-numbers">
            <div class="bar bar-1"></div>
            <div class="bar bar-2"></div>
            <div class="bar bar-3"></div>
          </div>
          <div class="dock-label">${i?"숫자":"Numbers"}</div>
        </div>

        <!-- 3. Center Elevated Log FAB Button -->
        <div
          class="fab-btn"
          @click=${()=>m.openLogger()}
          title=${i?"기록하기":"Log event"}
        >
          <div class="fab-l1"></div>
          <div class="fab-l2"></div>
          <div class="fab-l3"></div>
        </div>

        <!-- 4. Map Tab -->
        <div
          class="dock-tab ${s==="map"?"active":""}"
          @click=${()=>m.setActiveTab("map")}
        >
          <div class="icon-map-wrap">
            <div class="icon-map-pin">
              <div class="icon-map-dot"></div>
            </div>
          </div>
          <div class="dock-label">${i?"지도":"Map"}</div>
        </div>

        <!-- 5. Dog Tab -->
        <div
          class="dock-tab ${s==="dog"?"active":""}"
          @click=${()=>m.setActiveTab("dog")}
        >
          <div class="icon-dog">
            <div class="icon-dog-ear-left"></div>
            <div class="icon-dog-ear-right"></div>
            <div class="icon-dog-muzzle"></div>
          </div>
          <div class="dock-label">${n}</div>
        </div>
      </div>
    `}},He.styles=At`
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

    /* Dog Icon */
    .icon-dog {
      width: 18px;
      height: 16px;
      position: relative;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      flex: none;
    }

    .icon-dog-ear-left {
      position: absolute;
      left: 0;
      top: 0;
      width: 6.5px;
      height: 9px;
      border: 2.5px solid #17140F;
      border-radius: 60% 40% 45% 45%;
      background: #FFF;
      box-sizing: border-box;
    }

    .icon-dog-ear-right {
      position: absolute;
      right: 0;
      top: 0;
      width: 6.5px;
      height: 9px;
      border: 2.5px solid #17140F;
      border-radius: 40% 60% 45% 45%;
      background: #FFF;
      box-sizing: border-box;
    }

    .icon-dog-muzzle {
      position: relative;
      width: 12px;
      height: 11px;
      border: 2.5px solid #17140F;
      border-radius: 45% 45% 50% 50%;
      background: #FFF;
      box-sizing: border-box;
    }

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
  `,He);Ss=gl([zt("dooty-dock")],Ss);var Gs=function(h,i,n,s){var r=arguments.length,d=r<3?i:s===null?s=Object.getOwnPropertyDescriptor(i,n):s,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")d=Reflect.decorate(h,i,n,s);else for(var u=h.length-1;u>=0;u--)(c=h[u])&&(d=(r<3?c(d):r>3?c(i,n,d):c(i,n))||d);return r>3&&d&&Object.defineProperty(i,n,d),d},je;let nn=(je=class extends Ft{connectedCallback(){super.connectedCallback(),this.unsubscribe=m.subscribe(()=>this.requestUpdate())}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.unsubscribe)==null||i.call(this)}formatTime(i){const n=new Date(i);return isNaN(n.getTime())?"":n.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}).toLowerCase()}getEventVisuals(i){switch(i){case"poop":return{tag:"P",bg:"#FFCE2E"};case"pee":return{tag:"U",bg:"#BFD0FF"};case"walk":return{tag:"W",bg:"#9EC6E8"};case"medicine":return{tag:"M",bg:"#1FC99B"};case"vomit":return{tag:"V",bg:"#FF9A3C"};case"weight":return{tag:"KG",bg:"#2B5BE8"};case"vet":return{tag:"D",bg:"#FFD15C"};case"symptom":return{tag:"S",bg:"#FF5A3C"};case"food":return{tag:"F",bg:"#FFB800"};case"water":return{tag:"H",bg:"#60A5FA"};case"playing":return{tag:"T",bg:"#FBBF24"};case"grooming":return{tag:"G",bg:"#F472B6"};default:return{tag:"E",bg:"#FFCE2E"}}}render(){var R,C,j;const i=m.currentLocale==="ko",n=((R=m.currentPet)==null?void 0:R.name)||(i?"반려견":"My Pet"),s=((C=m.currentPet)==null?void 0:C.id)||"",r=m.events||[],d=Kr(r,s),c=r.length,u=new Date;u.setHours(0,0,0,0);const f=r.filter(I=>new Date(I.timestamp)>=u);let v=0;if(r.length>=2){const I=[...r].sort(($,it)=>new Date($.timestamp).getTime()-new Date(it.timestamp).getTime());for(let $=1;$<I.length;$++){const it=(new Date(I[$].timestamp).getTime()-new Date(I[$-1].timestamp).getTime())/36e5;it>v&&(v=it)}}const b=new Date().getHours(),x=b<12?i?`좋은 아침, ${n}!`:`Morning, ${n}.`:b<18?i?`안녕, ${n}!`:`Hey ${n}!`:i?`좋은 저녁, ${n}!`:`Evening, ${n}.`,k=f.length===0?i?"오늘의 첫 기록을 시작해볼까요?":"Ready for today’s first log.":i?`오늘 ${f.length}번 완료.`:`${f.length} down today.`,S=d.currentStreakDays,P=d.nextPoopPrediction||js(r,s),T=i?P.timeDisplayKo:P.timeDisplay,N=i?P.subtextKo:P.subtext,z=P.progressPercent,W=Math.max(1,d.dailyFrequencies.length),H=c>0?(c/W).toFixed(1):"0.0",et=(j=m.currentPet)==null?void 0:j.avatarUrl;return w`
      <!-- Top Header Row -->
      <div class="top-header-row">
        <div
          class="dog-avatar-btn"
          @click=${()=>this.dispatchEvent(new CustomEvent("dooty-navigate",{bubbles:!0,composed:!0,detail:"dog"}))}
        >
          ${et?w`<img src="${et}" alt="Pet" />`:w`<div>${i?`강아지
사진`:`dog
pic`}</div>`}
        </div>

        <div class="greeting-col">
          <div class="greeting-text">${x}</div>
          <div style="display: flex; align-items: center; gap: 6px; margin-top: 1px;">
            <span class="vibe-text">${k}</span>
            ${m.isSyncing?w`
                  <span class="sync-pill">
                    <span class="sync-spin"></span>
                    <span>${i?"동기화 중":"Syncing"}</span>
                  </span>
                `:null}
          </div>
        </div>

        <div
          class="hamburger-btn"
          @click=${()=>this.dispatchEvent(new CustomEvent("dooty-navigate",{bubbles:!0,composed:!0,detail:"settings"}))}
        >
          <div class="ham-line"></div>
          <div class="ham-line"></div>
          <div class="ham-line"></div>
        </div>
      </div>

      <!-- Streak & Next Prediction Card -->
      <div class="prediction-card">
        <div class="streak-badge">
          ${i?`${S}일 연속`:`${S} DAY STREAK`}
        </div>
        <div class="pred-label">
          ${i?"다음은 아마도":"Next one, probably"}
        </div>
        <div class="pred-time">${T}</div>
        <div class="pred-sub">${N}</div>
        <div class="pred-progress-bar">
          <div class="pred-progress-fill" style="width: ${z}%;"></div>
        </div>
      </div>

      <!-- 3 KPI Cards -->
      <div class="kpi-row">
        <div class="kpi-card" style="background: #FFF;">
          <div class="kpi-val" style="color: #17140F;">${H}</div>
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
        ${f.length>0?f.map(I=>{const{tag:$,bg:it}=this.getEventVisuals(I.eventType);return w`
                <div class="feed-card" @click=${()=>m.openLoggerForEdit(I)}>
                  <div class="feed-badge" style="background: ${it};">${$}</div>
                  <div class="feed-content">
                    <div class="feed-title">
                      ${so(I.notes,I.eventType,i)}
                    </div>
                    <div class="feed-detail">
                      ${i?`기록자: ${I.loggedByName}`:`logged by ${I.loggedByName}`}
                    </div>
                  </div>
                  <div class="feed-time">${this.formatTime(I.timestamp)}</div>
                </div>
              `}):r.length>0?w`
              <!-- Recent fallback if no logs today -->
              <div style="font-size: 11px; font-weight: 800; color: #9A9080; text-transform: uppercase; margin-bottom: 4px;">
                ${i?"최근 기록":"Recent logs"}
              </div>
              ${r.slice(0,4).map(I=>{const{tag:$,bg:it}=this.getEventVisuals(I.eventType);return w`
                  <div class="feed-card" @click=${()=>m.openLoggerForEdit(I)}>
                    <div class="feed-badge" style="background: ${it};">${$}</div>
                    <div class="feed-content">
                      <div class="feed-title">
                        ${so(I.notes,I.eventType,i)}
                      </div>
                      <div class="feed-detail">
                        ${new Date(I.timestamp).toLocaleDateString()} · ${I.loggedByName}
                      </div>
                    </div>
                    <div class="feed-time">${this.formatTime(I.timestamp)}</div>
                  </div>
                `})}
            `:w`
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
    `}},je.styles=At`
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
      width: 50px;
      height: 50px;
      border-radius: 50%;
      flex: none;
      border: 3px solid #17140F;
      background: #FFFFFF;
      overflow: hidden;
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
    }

    .dog-avatar-btn img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
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

    .hamburger-btn {
      width: 40px;
      height: 40px;
      border-radius: 13px;
      border: 3px solid #17140F;
      background: #FFF;
      display: flex;
      flex-direction: column;
      gap: 3px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 3px 3px 0 #17140F;
      flex: none;
    }

    .ham-line {
      width: 13px;
      height: 2.5px;
      background: #17140F;
      border-radius: 3px;
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
  `,je);Gs([A()],nn.prototype,"unsubscribe",void 0);nn=Gs([zt("dooty-home")],nn);var qs=function(h,i,n,s){var r=arguments.length,d=r<3?i:s===null?s=Object.getOwnPropertyDescriptor(i,n):s,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")d=Reflect.decorate(h,i,n,s);else for(var u=h.length-1;u>=0;u--)(c=h[u])&&(d=(r<3?c(d):r>3?c(i,n,d):c(i,n))||d);return r>3&&d&&Object.defineProperty(i,n,d),d},Ze;let sn=(Ze=class extends Ft{connectedCallback(){super.connectedCallback(),this.unsubscribe=m.subscribe(()=>this.requestUpdate())}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.unsubscribe)==null||i.call(this)}render(){const i=m.currentLocale==="ko",n=m.analyticsTimeRange||"30d",s=m.events||[];let r=s;const d=Date.now();if(n==="7d"){const E=d-6048e5;r=s.filter(B=>new Date(B.timestamp).getTime()>=E)}else if(n==="30d"){const E=d-2592e6;r=s.filter(B=>new Date(B.timestamp).getTime()>=E)}else if(n==="1y"){const E=d-31536e6;r=s.filter(B=>new Date(B.timestamp).getTime()>=E)}const c=r,u=c.length,f=["MON","TUE","WED","THU","FRI","SAT","SUN"],v=["월","화","수","목","금","토","일"],b=Array.from({length:7},()=>Array(24).fill(0)),x=Array(24).fill(0);let k=Date.now();c.forEach(E=>{const B=new Date(E.timestamp),gt=B.getTime();if(!isNaN(gt)){gt<k&&(k=gt);const _t=(B.getDay()+6)%7,wt=B.getHours();b[_t][wt]++,x[wt]++}});let S=1;b.forEach(E=>{E.forEach(B=>{B>S&&(S=B)})});const P=f.map((E,B)=>({day:i?v[B]:E,cells:Array.from({length:24},(gt,_t)=>{const wt=b[B][_t],Vt=S>0?wt/S:0,xe=wt===0?"#FFF":Vt<.25?"#FFE9A8":Vt<.55?"#FFCE2E":Vt<.8?"#FF9A3C":"#FF5A3C",ye=wt===0?"#E6DDC8":"#17140F",Bi=_t===0?"12 am":_t<12?`${_t} am`:_t===12?"12 pm":`${_t-12} pm`;return{bg:xe,brd:ye,count:wt,hourLabel:Bi,dayLabel:i?v[B]:E}})}));let T=7,N=0;x.forEach((E,B)=>{E>N&&(N=E,T=B)});const z=(E,B)=>{const gt=(E+1)%24;if(B){const _t=E<12?`오전 ${E===0?12:E}`:`오후 ${E===12?12:E-12}`,wt=gt<12?`${gt===0?12:gt}`:`${gt===12?12:gt-12}`;return`${_t}:00–${wt}:00`}else{const _t=wt=>{const Vt=wt<12?"am":"pm";return`${wt%12===0?12:wt%12}:00 ${Vt}`};return`${_t(E)}–${_t(gt)}`}};let W=1/0,H=1;for(let E=0;E<24;E++){const B=x[E]+x[(E+1)%24]+x[(E+2)%24];B<W&&(W=B,H=E)}const et=z(T,!1),R=z(T,!0),C=W===0?`He has never gone between ${H%12||12} and ${(H+3)%12||12} ${H<12?"am":"pm"}. Respect.`:`Quietest around ${z(H,!1)}.`,j=W===0?`새벽 ${H}시에서 ${(H+3)%24}시 사이에는 한 번도 없었습니다. 존경.`:`가장 한산한 시간대는 ${z(H,!0)}입니다.`,I=new Date(k),$=["January","February","March","April","May","June","July","August","September","October","November","December"],it=u>0?`${$[I.getMonth()]} ${I.getFullYear()}`:"March 2021",dt=u>0?`${I.getFullYear()}년 ${I.getMonth()+1}월`:"2021년 3월",ht=new Date(Date.now()-336*60*60*1e3),Nt=c.filter(E=>E.eventType==="poop"&&new Date(E.timestamp)>=ht),St=Nt.filter(E=>(E.notes||"").toLowerCase().includes("4")||(E.notes||"").toLowerCase().includes("textbook")).length,re=Nt.length>0?Math.round(St/Nt.length*100):(u>0,82);let ct=0;if(c.length>=2){const E=[...c].sort((B,gt)=>new Date(B.timestamp).getTime()-new Date(gt.timestamp).getTime());for(let B=1;B<E.length;B++){const gt=(new Date(E[B].timestamp).getTime()-new Date(E[B-1].timestamp).getTime())/36e5;gt>ct&&(ct=gt)}}const Kt=new Date(Date.now()-10080*60*1e3),Z=c.filter(E=>E.eventType==="vomit"&&new Date(E.timestamp)>=Kt).length,jt=Array(12).fill(0),G=Date.now();c.forEach(E=>{const B=Math.floor((G-new Date(E.timestamp).getTime())/6048e5);B>=0&&B<12&&jt[11-B]++});const ot=Math.max(1,...jt),ut=jt.map((E,B)=>{const gt=E===0?8:Math.round(E/ot*88)+8;return{h:`${u>0?gt:[42,58,48,70,65,82,54,76,88,72,60,96][B]}px`,bg:B===11?"#FF5A3C":"#FFCE2E",l:`W${B+1}`}}),ft=c.filter(E=>E.eventType==="walk").length,nt=c.filter(E=>E.eventType==="poop").length;c.filter(E=>E.eventType==="pee").length;const Q=Math.max(1,Math.round(nt*.18+(u>0?0:412))),V=Math.max(1.42,Number((ft*1.8).toFixed(2))),M=[{v:u>0?`${Q} kg`:"412 kg",l:i?"누적 배변량":"career tonnage",bg:"#FFCE2E",sub:"#7A5C00",rot:"-2deg"},{v:u>0?`${V} km`:"1.42 km",l:i?"총 산책 거리":"end to end",bg:"#1FC99B",sub:"#0A5A45",rot:"1.5deg"},{v:ct>0?`${Math.round(ct)} h`:"31 h",l:i?"최장 공백":"longest drought",bg:"#FFF",sub:"#6A6152",rot:"-1deg"},{v:u>0?`${nt} logs`:"62%",l:i?"동네 정복률":"block conquered",bg:"#FF5A3C",sub:"#7A1E0C",rot:"2deg"}],Y=u>0?u/24:1,Mt=x.slice(6,12).reduce((E,B)=>E+B,0)/6,fe=u>0?Math.round((Mt-Y)/Y*100):25,ge=x.slice(12,18).reduce((E,B)=>E+B,0)/6,Mi=u>0?Math.round((ge-Y)/Y*100):10,me=b[5].reduce((E,B)=>E+B,0)+b[6].reduce((E,B)=>E+B,0),Di=u-me,ni=me/2,le=Di/5,uo=le>0&&u>0?Math.round((ni-le)/le*100):u>0?0:14,si=(x[21]+x[22]+x[23]+x[0]+x[1]+x[2]+x[3]+x[4]+x[5])/9,Ni=u>0?Math.round((si-Y)/Y*100):-65,ve=(E,B,gt)=>{const _t=B>=0,wt=Math.abs(B),Vt=Math.min(48,Math.max(3,Math.round(wt/100*48))),xe=_t?"50%":`${50-Vt}%`,ye=B===0?"0%":`${_t?"+":"−"}${wt}%`;return{l:E,v:ye,left:xe,w:`${Vt}%`,bg:gt}},go=[ve(i?"오전 6–12시":"Morning (6–12)",fe,"#FF9A3C"),ve(i?"오후 12–18시":"Afternoon (12–18)",Mi,"#1FC99B"),ve(i?"주말 (토·일)":"Weekends",uo,"#FF5A3C"),ve(i?"심야 21–6시":"Night (21–6)",Ni,"#9EC6E8")],mo=n==="7d"?i?"7일":"7 DAYS":n==="30d"?i?"30일":"30 DAYS":n==="1y"?i?"1년":"1 YEAR":i?"전체":"ALL TIME",ai=n==="7d"?i?`지난 7일간 ${u.toLocaleString()}건`:`${u.toLocaleString()} logs in last 7 days`:n==="30d"?i?`지난 30일간 ${u.toLocaleString()}건`:`${u.toLocaleString()} logs in last 30 days`:n==="1y"?i?`지난 1년간 ${u.toLocaleString()}건`:`${u.toLocaleString()} logs in last year`:i?u>0?`${dt}부터 ${u.toLocaleString()}건`:"2021년 3월부터 1,204건":u>0?`${u.toLocaleString()} logs since ${it}`:"1,204 logs since March 2021";return w`
      <div class="page-header">
        <div class="page-title">${i?"숫자들":"The numbers"}</div>
        <div class="page-sub">${ai}</div>
      </div>

      <!-- Segmented Time-Range Selector -->
      <div class="time-selector-row">
        <button
          class="time-pill-btn ${n==="7d"?"active":""}"
          @click=${()=>m.setAnalyticsTimeRange("7d")}
        >
          ${i?"7일":"7D"}
        </button>
        <button
          class="time-pill-btn ${n==="30d"?"active":""}"
          @click=${()=>m.setAnalyticsTimeRange("30d")}
        >
          ${i?"30일":"30D"}
        </button>
        <button
          class="time-pill-btn ${n==="1y"?"active":""}"
          @click=${()=>m.setAnalyticsTimeRange("1y")}
        >
          ${i?"1년":"1Y"}
        </button>
        <button
          class="time-pill-btn ${n==="all"?"active":""}"
          @click=${()=>m.setAnalyticsTimeRange("all")}
        >
          ${i?"전체":"ALL"}
        </button>
      </div>

      <!-- When it happens 24h Heatmap -->
      <div class="card-block">
        <div class="card-header">
          <div class="card-title">${i?"언제 하나요":"When it happens"}</div>
          <div class="card-badge">${mo}</div>
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
          ${P.map(E=>w`
              <div class="heat-row">
                <div class="heat-day-lbl">${E.day}</div>
                <div class="heat-cells">
                  ${E.cells.map(B=>w`
                      <div
                        class="heat-cell"
                        style="background: ${B.bg}; border: 1px solid ${B.brd};"
                        title="${B.dayLabel} ${B.hourLabel}: ${B.count} ${B.count===1?"event":"events"}"
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
          ${i?w`가장 많은 시간은 <strong style="color: #17140F;">${R}</strong>. ${j}`:w`Peak is <strong style="color: #17140F;">${et}</strong>. ${C}`}
        </div>
      </div>

      <!-- Gut Score Banner -->
      <div
        class="gut-card"
        @click=${()=>this.dispatchEvent(new CustomEvent("dooty-navigate",{bubbles:!0,composed:!0,detail:"deep"}))}
      >
        <div
          class="gut-ring"
          style="background: conic-gradient(#17140F 0% ${re}%, #FFF ${re}% 100%);"
        >
          <div class="gut-ring-inner">
            <div class="gut-score-num">${re}</div>
            <div class="gut-score-lbl">${i?"장":"GUT"}</div>
          </div>
        </div>
        <div style="flex: 1; min-width: 0;">
          <div style="font-family: var(--font-heading); font-weight: 800; font-size: 18px; color: #17140F; letter-spacing: -0.4px;">
            ${i?"탄탄합니다, 말 그대로.":"Solid. Literally."}
          </div>
          <div style="font-size: 12px; font-weight: 600; color: #0A5A45; line-height: 1.4; margin-top: 3px;">
            ${i?`${re}%의 날이 완벽한 4단계. 눌러서 자세히 보기.`:`Perfect 4s on ${re}% of days. Tap for the full breakdown.`}
          </div>
          ${Z>0?w`
                <div class="flag-badge">
                  ${i?`주의 ${Z}건`:`${Z} FLAG`}
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
          ${ut.map(E=>w`
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
          ${M.map(E=>w`
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
          ${go.map(E=>w`
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
    `}},Ze.styles=At`
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
  `,Ze);qs([A()],sn.prototype,"unsubscribe",void 0);sn=qs([zt("dooty-numbers")],sn);function ml(h){return h&&h.__esModule&&Object.prototype.hasOwnProperty.call(h,"default")?h.default:h}var wi={exports:{}};/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */var vl=wi.exports,Cs;function xl(){return Cs||(Cs=1,(function(h,i){(function(n,s){s(i)})(vl,(function(n){var s="1.9.4";function r(t){var e,o,a,l;for(o=1,a=arguments.length;o<a;o++){l=arguments[o];for(e in l)t[e]=l[e]}return t}var d=Object.create||(function(){function t(){}return function(e){return t.prototype=e,new t}})();function c(t,e){var o=Array.prototype.slice;if(t.bind)return t.bind.apply(t,o.call(arguments,1));var a=o.call(arguments,2);return function(){return t.apply(e,a.length?a.concat(o.call(arguments)):arguments)}}var u=0;function f(t){return"_leaflet_id"in t||(t._leaflet_id=++u),t._leaflet_id}function v(t,e,o){var a,l,p,g;return g=function(){a=!1,l&&(p.apply(o,l),l=!1)},p=function(){a?l=arguments:(t.apply(o,arguments),setTimeout(g,e),a=!0)},p}function b(t,e,o){var a=e[1],l=e[0],p=a-l;return t===a&&o?t:((t-l)%p+p)%p+l}function x(){return!1}function k(t,e){if(e===!1)return t;var o=Math.pow(10,e===void 0?6:e);return Math.round(t*o)/o}function S(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function P(t){return S(t).split(/\s+/)}function T(t,e){Object.prototype.hasOwnProperty.call(t,"options")||(t.options=t.options?d(t.options):{});for(var o in e)t.options[o]=e[o];return t.options}function N(t,e,o){var a=[];for(var l in t)a.push(encodeURIComponent(o?l.toUpperCase():l)+"="+encodeURIComponent(t[l]));return(!e||e.indexOf("?")===-1?"?":"&")+a.join("&")}var z=/\{ *([\w_ -]+) *\}/g;function W(t,e){return t.replace(z,function(o,a){var l=e[a];if(l===void 0)throw new Error("No value provided for variable "+o);return typeof l=="function"&&(l=l(e)),l})}var H=Array.isArray||function(t){return Object.prototype.toString.call(t)==="[object Array]"};function et(t,e){for(var o=0;o<t.length;o++)if(t[o]===e)return o;return-1}var R="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function C(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}var j=0;function I(t){var e=+new Date,o=Math.max(0,16-(e-j));return j=e+o,window.setTimeout(t,o)}var $=window.requestAnimationFrame||C("RequestAnimationFrame")||I,it=window.cancelAnimationFrame||C("CancelAnimationFrame")||C("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)};function dt(t,e,o){if(o&&$===I)t.call(e);else return $.call(window,c(t,e))}function ht(t){t&&it.call(window,t)}var Nt={__proto__:null,extend:r,create:d,bind:c,get lastId(){return u},stamp:f,throttle:v,wrapNum:b,falseFn:x,formatNum:k,trim:S,splitWords:P,setOptions:T,getParamString:N,template:W,isArray:H,indexOf:et,emptyImageUrl:R,requestFn:$,cancelFn:it,requestAnimFrame:dt,cancelAnimFrame:ht};function St(){}St.extend=function(t){var e=function(){T(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},o=e.__super__=this.prototype,a=d(o);a.constructor=e,e.prototype=a;for(var l in this)Object.prototype.hasOwnProperty.call(this,l)&&l!=="prototype"&&l!=="__super__"&&(e[l]=this[l]);return t.statics&&r(e,t.statics),t.includes&&(re(t.includes),r.apply(null,[a].concat(t.includes))),r(a,t),delete a.statics,delete a.includes,a.options&&(a.options=o.options?d(o.options):{},r(a.options,t.options)),a._initHooks=[],a.callInitHooks=function(){if(!this._initHooksCalled){o.callInitHooks&&o.callInitHooks.call(this),this._initHooksCalled=!0;for(var p=0,g=a._initHooks.length;p<g;p++)a._initHooks[p].call(this)}},e},St.include=function(t){var e=this.prototype.options;return r(this.prototype,t),t.options&&(this.prototype.options=e,this.mergeOptions(t.options)),this},St.mergeOptions=function(t){return r(this.prototype.options,t),this},St.addInitHook=function(t){var e=Array.prototype.slice.call(arguments,1),o=typeof t=="function"?t:function(){this[t].apply(this,e)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(o),this};function re(t){if(!(typeof L>"u"||!L||!L.Mixin)){t=H(t)?t:[t];for(var e=0;e<t.length;e++)t[e]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var ct={on:function(t,e,o){if(typeof t=="object")for(var a in t)this._on(a,t[a],e);else{t=P(t);for(var l=0,p=t.length;l<p;l++)this._on(t[l],e,o)}return this},off:function(t,e,o){if(!arguments.length)delete this._events;else if(typeof t=="object")for(var a in t)this._off(a,t[a],e);else{t=P(t);for(var l=arguments.length===1,p=0,g=t.length;p<g;p++)l?this._off(t[p]):this._off(t[p],e,o)}return this},_on:function(t,e,o,a){if(typeof e!="function"){console.warn("wrong listener type: "+typeof e);return}if(this._listens(t,e,o)===!1){o===this&&(o=void 0);var l={fn:e,ctx:o};a&&(l.once=!0),this._events=this._events||{},this._events[t]=this._events[t]||[],this._events[t].push(l)}},_off:function(t,e,o){var a,l,p;if(this._events&&(a=this._events[t],!!a)){if(arguments.length===1){if(this._firingCount)for(l=0,p=a.length;l<p;l++)a[l].fn=x;delete this._events[t];return}if(typeof e!="function"){console.warn("wrong listener type: "+typeof e);return}var g=this._listens(t,e,o);if(g!==!1){var y=a[g];this._firingCount&&(y.fn=x,this._events[t]=a=a.slice()),a.splice(g,1)}}},fire:function(t,e,o){if(!this.listens(t,o))return this;var a=r({},e,{type:t,target:this,sourceTarget:e&&e.sourceTarget||this});if(this._events){var l=this._events[t];if(l){this._firingCount=this._firingCount+1||1;for(var p=0,g=l.length;p<g;p++){var y=l[p],_=y.fn;y.once&&this.off(t,_,y.ctx),_.call(y.ctx||this,a)}this._firingCount--}}return o&&this._propagateEvent(a),this},listens:function(t,e,o,a){typeof t!="string"&&console.warn('"string" type argument expected');var l=e;typeof e!="function"&&(a=!!e,l=void 0,o=void 0);var p=this._events&&this._events[t];if(p&&p.length&&this._listens(t,l,o)!==!1)return!0;if(a){for(var g in this._eventParents)if(this._eventParents[g].listens(t,e,o,a))return!0}return!1},_listens:function(t,e,o){if(!this._events)return!1;var a=this._events[t]||[];if(!e)return!!a.length;o===this&&(o=void 0);for(var l=0,p=a.length;l<p;l++)if(a[l].fn===e&&a[l].ctx===o)return l;return!1},once:function(t,e,o){if(typeof t=="object")for(var a in t)this._on(a,t[a],e,!0);else{t=P(t);for(var l=0,p=t.length;l<p;l++)this._on(t[l],e,o,!0)}return this},addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[f(t)]=t,this},removeEventParent:function(t){return this._eventParents&&delete this._eventParents[f(t)],this},_propagateEvent:function(t){for(var e in this._eventParents)this._eventParents[e].fire(t.type,r({layer:t.target,propagatedFrom:t.target},t),!0)}};ct.addEventListener=ct.on,ct.removeEventListener=ct.clearAllEventListeners=ct.off,ct.addOneTimeEventListener=ct.once,ct.fireEvent=ct.fire,ct.hasEventListeners=ct.listens;var Kt=St.extend(ct);function Z(t,e,o){this.x=o?Math.round(t):t,this.y=o?Math.round(e):e}var jt=Math.trunc||function(t){return t>0?Math.floor(t):Math.ceil(t)};Z.prototype={clone:function(){return new Z(this.x,this.y)},add:function(t){return this.clone()._add(G(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(G(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},scaleBy:function(t){return new Z(this.x*t.x,this.y*t.y)},unscaleBy:function(t){return new Z(this.x/t.x,this.y/t.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=jt(this.x),this.y=jt(this.y),this},distanceTo:function(t){t=G(t);var e=t.x-this.x,o=t.y-this.y;return Math.sqrt(e*e+o*o)},equals:function(t){return t=G(t),t.x===this.x&&t.y===this.y},contains:function(t){return t=G(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+k(this.x)+", "+k(this.y)+")"}};function G(t,e,o){return t instanceof Z?t:H(t)?new Z(t[0],t[1]):t==null?t:typeof t=="object"&&"x"in t&&"y"in t?new Z(t.x,t.y):new Z(t,e,o)}function ot(t,e){if(t)for(var o=e?[t,e]:t,a=0,l=o.length;a<l;a++)this.extend(o[a])}ot.prototype={extend:function(t){var e,o;if(!t)return this;if(t instanceof Z||typeof t[0]=="number"||"x"in t)e=o=G(t);else if(t=ut(t),e=t.min,o=t.max,!e||!o)return this;return!this.min&&!this.max?(this.min=e.clone(),this.max=o.clone()):(this.min.x=Math.min(e.x,this.min.x),this.max.x=Math.max(o.x,this.max.x),this.min.y=Math.min(e.y,this.min.y),this.max.y=Math.max(o.y,this.max.y)),this},getCenter:function(t){return G((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return G(this.min.x,this.max.y)},getTopRight:function(){return G(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var e,o;return typeof t[0]=="number"||t instanceof Z?t=G(t):t=ut(t),t instanceof ot?(e=t.min,o=t.max):e=o=t,e.x>=this.min.x&&o.x<=this.max.x&&e.y>=this.min.y&&o.y<=this.max.y},intersects:function(t){t=ut(t);var e=this.min,o=this.max,a=t.min,l=t.max,p=l.x>=e.x&&a.x<=o.x,g=l.y>=e.y&&a.y<=o.y;return p&&g},overlaps:function(t){t=ut(t);var e=this.min,o=this.max,a=t.min,l=t.max,p=l.x>e.x&&a.x<o.x,g=l.y>e.y&&a.y<o.y;return p&&g},isValid:function(){return!!(this.min&&this.max)},pad:function(t){var e=this.min,o=this.max,a=Math.abs(e.x-o.x)*t,l=Math.abs(e.y-o.y)*t;return ut(G(e.x-a,e.y-l),G(o.x+a,o.y+l))},equals:function(t){return t?(t=ut(t),this.min.equals(t.getTopLeft())&&this.max.equals(t.getBottomRight())):!1}};function ut(t,e){return!t||t instanceof ot?t:new ot(t,e)}function ft(t,e){if(t)for(var o=e?[t,e]:t,a=0,l=o.length;a<l;a++)this.extend(o[a])}ft.prototype={extend:function(t){var e=this._southWest,o=this._northEast,a,l;if(t instanceof Q)a=t,l=t;else if(t instanceof ft){if(a=t._southWest,l=t._northEast,!a||!l)return this}else return t?this.extend(V(t)||nt(t)):this;return!e&&!o?(this._southWest=new Q(a.lat,a.lng),this._northEast=new Q(l.lat,l.lng)):(e.lat=Math.min(a.lat,e.lat),e.lng=Math.min(a.lng,e.lng),o.lat=Math.max(l.lat,o.lat),o.lng=Math.max(l.lng,o.lng)),this},pad:function(t){var e=this._southWest,o=this._northEast,a=Math.abs(e.lat-o.lat)*t,l=Math.abs(e.lng-o.lng)*t;return new ft(new Q(e.lat-a,e.lng-l),new Q(o.lat+a,o.lng+l))},getCenter:function(){return new Q((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new Q(this.getNorth(),this.getWest())},getSouthEast:function(){return new Q(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){typeof t[0]=="number"||t instanceof Q||"lat"in t?t=V(t):t=nt(t);var e=this._southWest,o=this._northEast,a,l;return t instanceof ft?(a=t.getSouthWest(),l=t.getNorthEast()):a=l=t,a.lat>=e.lat&&l.lat<=o.lat&&a.lng>=e.lng&&l.lng<=o.lng},intersects:function(t){t=nt(t);var e=this._southWest,o=this._northEast,a=t.getSouthWest(),l=t.getNorthEast(),p=l.lat>=e.lat&&a.lat<=o.lat,g=l.lng>=e.lng&&a.lng<=o.lng;return p&&g},overlaps:function(t){t=nt(t);var e=this._southWest,o=this._northEast,a=t.getSouthWest(),l=t.getNorthEast(),p=l.lat>e.lat&&a.lat<o.lat,g=l.lng>e.lng&&a.lng<o.lng;return p&&g},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t,e){return t?(t=nt(t),this._southWest.equals(t.getSouthWest(),e)&&this._northEast.equals(t.getNorthEast(),e)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function nt(t,e){return t instanceof ft?t:new ft(t,e)}function Q(t,e,o){if(isNaN(t)||isNaN(e))throw new Error("Invalid LatLng object: ("+t+", "+e+")");this.lat=+t,this.lng=+e,o!==void 0&&(this.alt=+o)}Q.prototype={equals:function(t,e){if(!t)return!1;t=V(t);var o=Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng));return o<=(e===void 0?1e-9:e)},toString:function(t){return"LatLng("+k(this.lat,t)+", "+k(this.lng,t)+")"},distanceTo:function(t){return Y.distance(this,V(t))},wrap:function(){return Y.wrapLatLng(this)},toBounds:function(t){var e=180*t/40075017,o=e/Math.cos(Math.PI/180*this.lat);return nt([this.lat-e,this.lng-o],[this.lat+e,this.lng+o])},clone:function(){return new Q(this.lat,this.lng,this.alt)}};function V(t,e,o){return t instanceof Q?t:H(t)&&typeof t[0]!="object"?t.length===3?new Q(t[0],t[1],t[2]):t.length===2?new Q(t[0],t[1]):null:t==null?t:typeof t=="object"&&"lat"in t?new Q(t.lat,"lng"in t?t.lng:t.lon,t.alt):e===void 0?null:new Q(t,e,o)}var M={latLngToPoint:function(t,e){var o=this.projection.project(t),a=this.scale(e);return this.transformation._transform(o,a)},pointToLatLng:function(t,e){var o=this.scale(e),a=this.transformation.untransform(t,o);return this.projection.unproject(a)},project:function(t){return this.projection.project(t)},unproject:function(t){return this.projection.unproject(t)},scale:function(t){return 256*Math.pow(2,t)},zoom:function(t){return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){if(this.infinite)return null;var e=this.projection.bounds,o=this.scale(t),a=this.transformation.transform(e.min,o),l=this.transformation.transform(e.max,o);return new ot(a,l)},infinite:!1,wrapLatLng:function(t){var e=this.wrapLng?b(t.lng,this.wrapLng,!0):t.lng,o=this.wrapLat?b(t.lat,this.wrapLat,!0):t.lat,a=t.alt;return new Q(o,e,a)},wrapLatLngBounds:function(t){var e=t.getCenter(),o=this.wrapLatLng(e),a=e.lat-o.lat,l=e.lng-o.lng;if(a===0&&l===0)return t;var p=t.getSouthWest(),g=t.getNorthEast(),y=new Q(p.lat-a,p.lng-l),_=new Q(g.lat-a,g.lng-l);return new ft(y,_)}},Y=r({},M,{wrapLng:[-180,180],R:6371e3,distance:function(t,e){var o=Math.PI/180,a=t.lat*o,l=e.lat*o,p=Math.sin((e.lat-t.lat)*o/2),g=Math.sin((e.lng-t.lng)*o/2),y=p*p+Math.cos(a)*Math.cos(l)*g*g,_=2*Math.atan2(Math.sqrt(y),Math.sqrt(1-y));return this.R*_}}),Zt=6378137,Mt={R:Zt,MAX_LATITUDE:85.0511287798,project:function(t){var e=Math.PI/180,o=this.MAX_LATITUDE,a=Math.max(Math.min(o,t.lat),-o),l=Math.sin(a*e);return new Z(this.R*t.lng*e,this.R*Math.log((1+l)/(1-l))/2)},unproject:function(t){var e=180/Math.PI;return new Q((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*e,t.x*e/this.R)},bounds:(function(){var t=Zt*Math.PI;return new ot([-t,-t],[t,t])})()};function fe(t,e,o,a){if(H(t)){this._a=t[0],this._b=t[1],this._c=t[2],this._d=t[3];return}this._a=t,this._b=e,this._c=o,this._d=a}fe.prototype={transform:function(t,e){return this._transform(t.clone(),e)},_transform:function(t,e){return e=e||1,t.x=e*(this._a*t.x+this._b),t.y=e*(this._c*t.y+this._d),t},untransform:function(t,e){return e=e||1,new Z((t.x/e-this._b)/this._a,(t.y/e-this._d)/this._c)}};function ee(t,e,o,a){return new fe(t,e,o,a)}var ge=r({},Y,{code:"EPSG:3857",projection:Mt,transformation:(function(){var t=.5/(Math.PI*Mt.R);return ee(t,.5,-t,.5)})()}),Mi=r({},ge,{code:"EPSG:900913"});function me(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Di(t,e){var o="",a,l,p,g,y,_;for(a=0,p=t.length;a<p;a++){for(y=t[a],l=0,g=y.length;l<g;l++)_=y[l],o+=(l?"L":"M")+_.x+" "+_.y;o+=e?O.svg?"z":"x":""}return o||"M0 0"}var ni=document.documentElement.style,le="ActiveXObject"in window,uo=le&&!document.addEventListener,fo="msLaunchUri"in navigator&&!("documentMode"in document),si=Jt("webkit"),Ni=Jt("android"),ve=Jt("android 2")||Jt("android 3"),go=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),mo=Ni&&Jt("Google")&&go<537&&!("AudioNode"in window),ai=!!window.opera,E=!fo&&Jt("chrome"),B=Jt("gecko")&&!si&&!ai&&!le,gt=!E&&Jt("safari"),_t=Jt("phantom"),wt="OTransition"in ni,Vt=navigator.platform.indexOf("Win")===0,xe=le&&"transition"in ni,ye="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!ve,Bi="MozPerspective"in ni,Ks=!window.L_DISABLE_3D&&(xe||ye||Bi)&&!wt&&!_t,ri=typeof orientation<"u"||Jt("mobile"),Vs=ri&&si,Js=ri&&ye,pn=!window.PointerEvent&&window.MSPointerEvent,un=!!(window.PointerEvent||pn),fn="ontouchstart"in window||!!window.TouchEvent,Ys=!window.L_NO_TOUCH&&(fn||un),Xs=ri&&ai,Qs=ri&&B,ta=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,ea=(function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassiveEventSupport",x,e),window.removeEventListener("testPassiveEventSupport",x,e)}catch{}return t})(),ia=(function(){return!!document.createElement("canvas").getContext})(),vo=!!(document.createElementNS&&me("svg").createSVGRect),oa=!!vo&&(function(){var t=document.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"})(),na=!vo&&(function(){try{var t=document.createElement("div");t.innerHTML='<v:shape adj="1"/>';var e=t.firstChild;return e.style.behavior="url(#default#VML)",e&&typeof e.adj=="object"}catch{return!1}})(),sa=navigator.platform.indexOf("Mac")===0,aa=navigator.platform.indexOf("Linux")===0;function Jt(t){return navigator.userAgent.toLowerCase().indexOf(t)>=0}var O={ie:le,ielt9:uo,edge:fo,webkit:si,android:Ni,android23:ve,androidStock:mo,opera:ai,chrome:E,gecko:B,safari:gt,phantom:_t,opera12:wt,win:Vt,ie3d:xe,webkit3d:ye,gecko3d:Bi,any3d:Ks,mobile:ri,mobileWebkit:Vs,mobileWebkit3d:Js,msPointer:pn,pointer:un,touch:Ys,touchNative:fn,mobileOpera:Xs,mobileGecko:Qs,retina:ta,passiveEvents:ea,canvas:ia,svg:vo,vml:na,inlineSvg:oa,mac:sa,linux:aa},gn=O.msPointer?"MSPointerDown":"pointerdown",mn=O.msPointer?"MSPointerMove":"pointermove",vn=O.msPointer?"MSPointerUp":"pointerup",xn=O.msPointer?"MSPointerCancel":"pointercancel",xo={touchstart:gn,touchmove:mn,touchend:vn,touchcancel:xn},yn={touchstart:pa,touchmove:Ii,touchend:Ii,touchcancel:Ii},Ee={},bn=!1;function ra(t,e,o){return e==="touchstart"&&ha(),yn[e]?(o=yn[e].bind(this,o),t.addEventListener(xo[e],o,!1),o):(console.warn("wrong event specified:",e),x)}function la(t,e,o){if(!xo[e]){console.warn("wrong event specified:",e);return}t.removeEventListener(xo[e],o,!1)}function da(t){Ee[t.pointerId]=t}function ca(t){Ee[t.pointerId]&&(Ee[t.pointerId]=t)}function _n(t){delete Ee[t.pointerId]}function ha(){bn||(document.addEventListener(gn,da,!0),document.addEventListener(mn,ca,!0),document.addEventListener(vn,_n,!0),document.addEventListener(xn,_n,!0),bn=!0)}function Ii(t,e){if(e.pointerType!==(e.MSPOINTER_TYPE_MOUSE||"mouse")){e.touches=[];for(var o in Ee)e.touches.push(Ee[o]);e.changedTouches=[e],t(e)}}function pa(t,e){e.MSPOINTER_TYPE_TOUCH&&e.pointerType===e.MSPOINTER_TYPE_TOUCH&&Ct(e),Ii(t,e)}function ua(t){var e={},o,a;for(a in t)o=t[a],e[a]=o&&o.bind?o.bind(t):o;return t=e,e.type="dblclick",e.detail=2,e.isTrusted=!1,e._simulated=!0,e}var fa=200;function ga(t,e){t.addEventListener("dblclick",e);var o=0,a;function l(p){if(p.detail!==1){a=p.detail;return}if(!(p.pointerType==="mouse"||p.sourceCapabilities&&!p.sourceCapabilities.firesTouchEvents)){var g=Pn(p);if(!(g.some(function(_){return _ instanceof HTMLLabelElement&&_.attributes.for})&&!g.some(function(_){return _ instanceof HTMLInputElement||_ instanceof HTMLSelectElement}))){var y=Date.now();y-o<=fa?(a++,a===2&&e(ua(p))):a=1,o=y}}}return t.addEventListener("click",l),{dblclick:e,simDblclick:l}}function ma(t,e){t.removeEventListener("dblclick",e.dblclick),t.removeEventListener("click",e.simDblclick)}var yo=Hi(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),li=Hi(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),wn=li==="webkitTransition"||li==="OTransition"?li+"End":"transitionend";function kn(t){return typeof t=="string"?document.getElementById(t):t}function di(t,e){var o=t.style[e]||t.currentStyle&&t.currentStyle[e];if((!o||o==="auto")&&document.defaultView){var a=document.defaultView.getComputedStyle(t,null);o=a?a[e]:null}return o==="auto"?null:o}function tt(t,e,o){var a=document.createElement(t);return a.className=e||"",o&&o.appendChild(a),a}function pt(t){var e=t.parentNode;e&&e.removeChild(t)}function Oi(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function Ae(t){var e=t.parentNode;e&&e.lastChild!==t&&e.appendChild(t)}function ze(t){var e=t.parentNode;e&&e.firstChild!==t&&e.insertBefore(t,e.firstChild)}function bo(t,e){if(t.classList!==void 0)return t.classList.contains(e);var o=Ri(t);return o.length>0&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(o)}function K(t,e){if(t.classList!==void 0)for(var o=P(e),a=0,l=o.length;a<l;a++)t.classList.add(o[a]);else if(!bo(t,e)){var p=Ri(t);_o(t,(p?p+" ":"")+e)}}function vt(t,e){t.classList!==void 0?t.classList.remove(e):_o(t,S((" "+Ri(t)+" ").replace(" "+e+" "," ")))}function _o(t,e){t.className.baseVal===void 0?t.className=e:t.className.baseVal=e}function Ri(t){return t.correspondingElement&&(t=t.correspondingElement),t.className.baseVal===void 0?t.className:t.className.baseVal}function Bt(t,e){"opacity"in t.style?t.style.opacity=e:"filter"in t.style&&va(t,e)}function va(t,e){var o=!1,a="DXImageTransform.Microsoft.Alpha";try{o=t.filters.item(a)}catch{if(e===1)return}e=Math.round(e*100),o?(o.Enabled=e!==100,o.Opacity=e):t.style.filter+=" progid:"+a+"(opacity="+e+")"}function Hi(t){for(var e=document.documentElement.style,o=0;o<t.length;o++)if(t[o]in e)return t[o];return!1}function be(t,e,o){var a=e||new Z(0,0);t.style[yo]=(O.ie3d?"translate("+a.x+"px,"+a.y+"px)":"translate3d("+a.x+"px,"+a.y+"px,0)")+(o?" scale("+o+")":"")}function yt(t,e){t._leaflet_pos=e,O.any3d?be(t,e):(t.style.left=e.x+"px",t.style.top=e.y+"px")}function _e(t){return t._leaflet_pos||new Z(0,0)}var ci,hi,wo;if("onselectstart"in document)ci=function(){q(window,"selectstart",Ct)},hi=function(){at(window,"selectstart",Ct)};else{var pi=Hi(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);ci=function(){if(pi){var t=document.documentElement.style;wo=t[pi],t[pi]="none"}},hi=function(){pi&&(document.documentElement.style[pi]=wo,wo=void 0)}}function ko(){q(window,"dragstart",Ct)}function Fo(){at(window,"dragstart",Ct)}var ji,$o;function Po(t){for(;t.tabIndex===-1;)t=t.parentNode;t.style&&(Zi(),ji=t,$o=t.style.outlineStyle,t.style.outlineStyle="none",q(window,"keydown",Zi))}function Zi(){ji&&(ji.style.outlineStyle=$o,ji=void 0,$o=void 0,at(window,"keydown",Zi))}function Fn(t){do t=t.parentNode;while((!t.offsetWidth||!t.offsetHeight)&&t!==document.body);return t}function To(t){var e=t.getBoundingClientRect();return{x:e.width/t.offsetWidth||1,y:e.height/t.offsetHeight||1,boundingClientRect:e}}var xa={__proto__:null,TRANSFORM:yo,TRANSITION:li,TRANSITION_END:wn,get:kn,getStyle:di,create:tt,remove:pt,empty:Oi,toFront:Ae,toBack:ze,hasClass:bo,addClass:K,removeClass:vt,setClass:_o,getClass:Ri,setOpacity:Bt,testProp:Hi,setTransform:be,setPosition:yt,getPosition:_e,get disableTextSelection(){return ci},get enableTextSelection(){return hi},disableImageDrag:ko,enableImageDrag:Fo,preventOutline:Po,restoreOutline:Zi,getSizedParentNode:Fn,getScale:To};function q(t,e,o,a){if(e&&typeof e=="object")for(var l in e)So(t,l,e[l],o);else{e=P(e);for(var p=0,g=e.length;p<g;p++)So(t,e[p],o,a)}return this}var Yt="_leaflet_events";function at(t,e,o,a){if(arguments.length===1)$n(t),delete t[Yt];else if(e&&typeof e=="object")for(var l in e)Co(t,l,e[l],o);else if(e=P(e),arguments.length===2)$n(t,function(y){return et(e,y)!==-1});else for(var p=0,g=e.length;p<g;p++)Co(t,e[p],o,a);return this}function $n(t,e){for(var o in t[Yt]){var a=o.split(/\d/)[0];(!e||e(a))&&Co(t,a,null,null,o)}}var Lo={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function So(t,e,o,a){var l=e+f(o)+(a?"_"+f(a):"");if(t[Yt]&&t[Yt][l])return this;var p=function(y){return o.call(a||t,y||window.event)},g=p;!O.touchNative&&O.pointer&&e.indexOf("touch")===0?p=ra(t,e,p):O.touch&&e==="dblclick"?p=ga(t,p):"addEventListener"in t?e==="touchstart"||e==="touchmove"||e==="wheel"||e==="mousewheel"?t.addEventListener(Lo[e]||e,p,O.passiveEvents?{passive:!1}:!1):e==="mouseenter"||e==="mouseleave"?(p=function(y){y=y||window.event,Ao(t,y)&&g(y)},t.addEventListener(Lo[e],p,!1)):t.addEventListener(e,g,!1):t.attachEvent("on"+e,p),t[Yt]=t[Yt]||{},t[Yt][l]=p}function Co(t,e,o,a,l){l=l||e+f(o)+(a?"_"+f(a):"");var p=t[Yt]&&t[Yt][l];if(!p)return this;!O.touchNative&&O.pointer&&e.indexOf("touch")===0?la(t,e,p):O.touch&&e==="dblclick"?ma(t,p):"removeEventListener"in t?t.removeEventListener(Lo[e]||e,p,!1):t.detachEvent("on"+e,p),t[Yt][l]=null}function we(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,this}function Eo(t){return So(t,"wheel",we),this}function ui(t){return q(t,"mousedown touchstart dblclick contextmenu",we),t._leaflet_disable_click=!0,this}function Ct(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}function ke(t){return Ct(t),we(t),this}function Pn(t){if(t.composedPath)return t.composedPath();for(var e=[],o=t.target;o;)e.push(o),o=o.parentNode;return e}function Tn(t,e){if(!e)return new Z(t.clientX,t.clientY);var o=To(e),a=o.boundingClientRect;return new Z((t.clientX-a.left)/o.x-e.clientLeft,(t.clientY-a.top)/o.y-e.clientTop)}var ya=O.linux&&O.chrome?window.devicePixelRatio:O.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function Ln(t){return O.edge?t.wheelDeltaY/2:t.deltaY&&t.deltaMode===0?-t.deltaY/ya:t.deltaY&&t.deltaMode===1?-t.deltaY*20:t.deltaY&&t.deltaMode===2?-t.deltaY*60:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?-t.detail*20:t.detail?t.detail/-32765*60:0}function Ao(t,e){var o=e.relatedTarget;if(!o)return!0;try{for(;o&&o!==t;)o=o.parentNode}catch{return!1}return o!==t}var ba={__proto__:null,on:q,off:at,stopPropagation:we,disableScrollPropagation:Eo,disableClickPropagation:ui,preventDefault:Ct,stop:ke,getPropagationPath:Pn,getMousePosition:Tn,getWheelDelta:Ln,isExternalTarget:Ao,addListener:q,removeListener:at},Sn=Kt.extend({run:function(t,e,o,a){this.stop(),this._el=t,this._inProgress=!0,this._duration=o||.25,this._easeOutPower=1/Math.max(a||.5,.2),this._startPos=_e(t),this._offset=e.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=dt(this._animate,this),this._step()},_step:function(t){var e=+new Date-this._startTime,o=this._duration*1e3;e<o?this._runFrame(this._easeOut(e/o),t):(this._runFrame(1),this._complete())},_runFrame:function(t,e){var o=this._startPos.add(this._offset.multiplyBy(t));e&&o._round(),yt(this._el,o),this.fire("step")},_complete:function(){ht(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),X=Kt.extend({options:{crs:ge,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(t,e){e=T(this,e),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(t),this._initLayout(),this._onResize=c(this._onResize,this),this._initEvents(),e.maxBounds&&this.setMaxBounds(e.maxBounds),e.zoom!==void 0&&(this._zoom=this._limitZoom(e.zoom)),e.center&&e.zoom!==void 0&&this.setView(V(e.center),e.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=li&&O.any3d&&!O.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),q(this._proxy,wn,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(t,e,o){if(e=e===void 0?this._zoom:this._limitZoom(e),t=this._limitCenter(V(t),e,this.options.maxBounds),o=o||{},this._stop(),this._loaded&&!o.reset&&o!==!0){o.animate!==void 0&&(o.zoom=r({animate:o.animate},o.zoom),o.pan=r({animate:o.animate,duration:o.duration},o.pan));var a=this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,o.zoom):this._tryAnimatedPan(t,o.pan);if(a)return clearTimeout(this._sizeTimer),this}return this._resetView(t,e,o.pan&&o.pan.noMoveStart),this},setZoom:function(t,e){return this._loaded?this.setView(this.getCenter(),t,{zoom:e}):(this._zoom=t,this)},zoomIn:function(t,e){return t=t||(O.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+t,e)},zoomOut:function(t,e){return t=t||(O.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-t,e)},setZoomAround:function(t,e,o){var a=this.getZoomScale(e),l=this.getSize().divideBy(2),p=t instanceof Z?t:this.latLngToContainerPoint(t),g=p.subtract(l).multiplyBy(1-1/a),y=this.containerPointToLatLng(l.add(g));return this.setView(y,e,{zoom:o})},_getBoundsCenterZoom:function(t,e){e=e||{},t=t.getBounds?t.getBounds():nt(t);var o=G(e.paddingTopLeft||e.padding||[0,0]),a=G(e.paddingBottomRight||e.padding||[0,0]),l=this.getBoundsZoom(t,!1,o.add(a));if(l=typeof e.maxZoom=="number"?Math.min(e.maxZoom,l):l,l===1/0)return{center:t.getCenter(),zoom:l};var p=a.subtract(o).divideBy(2),g=this.project(t.getSouthWest(),l),y=this.project(t.getNorthEast(),l),_=this.unproject(g.add(y).divideBy(2).add(p),l);return{center:_,zoom:l}},fitBounds:function(t,e){if(t=nt(t),!t.isValid())throw new Error("Bounds are not valid.");var o=this._getBoundsCenterZoom(t,e);return this.setView(o.center,o.zoom,e)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,e){return this.setView(t,this._zoom,{pan:e})},panBy:function(t,e){if(t=G(t).round(),e=e||{},!t.x&&!t.y)return this.fire("moveend");if(e.animate!==!0&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Sn,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),e.noMoveStart||this.fire("movestart"),e.animate!==!1){K(this._mapPane,"leaflet-pan-anim");var o=this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane,o,e.duration||.25,e.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},flyTo:function(t,e,o){if(o=o||{},o.animate===!1||!O.any3d)return this.setView(t,e,o);this._stop();var a=this.project(this.getCenter()),l=this.project(t),p=this.getSize(),g=this._zoom;t=V(t),e=e===void 0?g:e;var y=Math.max(p.x,p.y),_=y*this.getZoomScale(g,e),F=l.distanceTo(a)||1,D=1.42,U=D*D;function J(bt){var eo=bt?-1:1,lr=bt?_:y,dr=_*_-y*y+eo*U*U*F*F,cr=2*lr*U*F,Zo=dr/cr,ds=Math.sqrt(Zo*Zo+1)-Zo,hr=ds<1e-9?-18:Math.log(ds);return hr}function Et(bt){return(Math.exp(bt)-Math.exp(-bt))/2}function Pt(bt){return(Math.exp(bt)+Math.exp(-bt))/2}function Ot(bt){return Et(bt)/Pt(bt)}var Dt=J(0);function Oe(bt){return y*(Pt(Dt)/Pt(Dt+D*bt))}function nr(bt){return y*(Pt(Dt)*Ot(Dt+D*bt)-Et(Dt))/U}function sr(bt){return 1-Math.pow(1-bt,1.5)}var ar=Date.now(),rs=(J(1)-Dt)/D,rr=o.duration?1e3*o.duration:1e3*rs*.8;function ls(){var bt=(Date.now()-ar)/rr,eo=sr(bt)*rs;bt<=1?(this._flyToFrame=dt(ls,this),this._move(this.unproject(a.add(l.subtract(a).multiplyBy(nr(eo)/F)),g),this.getScaleZoom(y/Oe(eo),g),{flyTo:!0})):this._move(t,e)._moveEnd(!0)}return this._moveStart(!0,o.noMoveStart),ls.call(this),this},flyToBounds:function(t,e){var o=this._getBoundsCenterZoom(t,e);return this.flyTo(o.center,o.zoom,e)},setMaxBounds:function(t){return t=nt(t),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),t.isValid()?(this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(t){var e=this.options.minZoom;return this.options.minZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(t):this},setMaxZoom:function(t){var e=this.options.maxZoom;return this.options.maxZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(t):this},panInsideBounds:function(t,e){this._enforcingBounds=!0;var o=this.getCenter(),a=this._limitCenter(o,this._zoom,nt(t));return o.equals(a)||this.panTo(a,e),this._enforcingBounds=!1,this},panInside:function(t,e){e=e||{};var o=G(e.paddingTopLeft||e.padding||[0,0]),a=G(e.paddingBottomRight||e.padding||[0,0]),l=this.project(this.getCenter()),p=this.project(t),g=this.getPixelBounds(),y=ut([g.min.add(o),g.max.subtract(a)]),_=y.getSize();if(!y.contains(p)){this._enforcingBounds=!0;var F=p.subtract(y.getCenter()),D=y.extend(p).getSize().subtract(_);l.x+=F.x<0?-D.x:D.x,l.y+=F.y<0?-D.y:D.y,this.panTo(this.unproject(l),e),this._enforcingBounds=!1}return this},invalidateSize:function(t){if(!this._loaded)return this;t=r({animate:!1,pan:!0},t===!0?{animate:!0}:t);var e=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var o=this.getSize(),a=e.divideBy(2).round(),l=o.divideBy(2).round(),p=a.subtract(l);return!p.x&&!p.y?this:(t.animate&&t.pan?this.panBy(p):(t.pan&&this._rawPanBy(p),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(c(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:e,newSize:o}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(t){if(t=this._locateOptions=r({timeout:1e4,watch:!1},t),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var e=c(this._handleGeolocationResponse,this),o=c(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(e,o,t):navigator.geolocation.getCurrentPosition(e,o,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){if(this._container._leaflet_id){var e=t.code,o=t.message||(e===1?"permission denied":e===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:e,message:"Geolocation error: "+o+"."})}},_handleGeolocationResponse:function(t){if(this._container._leaflet_id){var e=t.coords.latitude,o=t.coords.longitude,a=new Q(e,o),l=a.toBounds(t.coords.accuracy*2),p=this._locateOptions;if(p.setView){var g=this.getBoundsZoom(l);this.setView(a,p.maxZoom?Math.min(g,p.maxZoom):g)}var y={latlng:a,bounds:l,timestamp:t.timestamp};for(var _ in t.coords)typeof t.coords[_]=="number"&&(y[_]=t.coords[_]);this.fire("locationfound",y)}},addHandler:function(t,e){if(!e)return this;var o=this[t]=new e(this);return this._handlers.push(o),this.options[t]&&o.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),pt(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(ht(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var t;for(t in this._layers)this._layers[t].remove();for(t in this._panes)pt(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(t,e){var o="leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),a=tt("div",o,e||this._mapPane);return t&&(this._panes[t]=a),a},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds(),e=this.unproject(t.getBottomLeft()),o=this.unproject(t.getTopRight());return new ft(e,o)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,e,o){t=nt(t),o=G(o||[0,0]);var a=this.getZoom()||0,l=this.getMinZoom(),p=this.getMaxZoom(),g=t.getNorthWest(),y=t.getSouthEast(),_=this.getSize().subtract(o),F=ut(this.project(y,a),this.project(g,a)).getSize(),D=O.any3d?this.options.zoomSnap:1,U=_.x/F.x,J=_.y/F.y,Et=e?Math.max(U,J):Math.min(U,J);return a=this.getScaleZoom(Et,a),D&&(a=Math.round(a/(D/100))*(D/100),a=e?Math.ceil(a/D)*D:Math.floor(a/D)*D),Math.max(l,Math.min(p,a))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new Z(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(t,e){var o=this._getTopLeftPoint(t,e);return new ot(o,o.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(t===void 0?this.getZoom():t)},getPane:function(t){return typeof t=="string"?this._panes[t]:t},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t,e){var o=this.options.crs;return e=e===void 0?this._zoom:e,o.scale(t)/o.scale(e)},getScaleZoom:function(t,e){var o=this.options.crs;e=e===void 0?this._zoom:e;var a=o.zoom(t*o.scale(e));return isNaN(a)?1/0:a},project:function(t,e){return e=e===void 0?this._zoom:e,this.options.crs.latLngToPoint(V(t),e)},unproject:function(t,e){return e=e===void 0?this._zoom:e,this.options.crs.pointToLatLng(G(t),e)},layerPointToLatLng:function(t){var e=G(t).add(this.getPixelOrigin());return this.unproject(e)},latLngToLayerPoint:function(t){var e=this.project(V(t))._round();return e._subtract(this.getPixelOrigin())},wrapLatLng:function(t){return this.options.crs.wrapLatLng(V(t))},wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(nt(t))},distance:function(t,e){return this.options.crs.distance(V(t),V(e))},containerPointToLayerPoint:function(t){return G(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return G(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var e=this.containerPointToLayerPoint(G(t));return this.layerPointToLatLng(e)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(V(t)))},mouseEventToContainerPoint:function(t){return Tn(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var e=this._container=kn(t);if(e){if(e._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");q(e,"scroll",this._onScroll,this),this._containerId=f(e)},_initLayout:function(){var t=this._container;this._fadeAnimated=this.options.fadeAnimation&&O.any3d,K(t,"leaflet-container"+(O.touch?" leaflet-touch":"")+(O.retina?" leaflet-retina":"")+(O.ielt9?" leaflet-oldie":"")+(O.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var e=di(t,"position");e!=="absolute"&&e!=="relative"&&e!=="fixed"&&e!=="sticky"&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),yt(this._mapPane,new Z(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(K(t.markerPane,"leaflet-zoom-hide"),K(t.shadowPane,"leaflet-zoom-hide"))},_resetView:function(t,e,o){yt(this._mapPane,new Z(0,0));var a=!this._loaded;this._loaded=!0,e=this._limitZoom(e),this.fire("viewprereset");var l=this._zoom!==e;this._moveStart(l,o)._move(t,e)._moveEnd(l),this.fire("viewreset"),a&&this.fire("load")},_moveStart:function(t,e){return t&&this.fire("zoomstart"),e||this.fire("movestart"),this},_move:function(t,e,o,a){e===void 0&&(e=this._zoom);var l=this._zoom!==e;return this._zoom=e,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),a?o&&o.pinch&&this.fire("zoom",o):((l||o&&o.pinch)&&this.fire("zoom",o),this.fire("move",o)),this},_moveEnd:function(t){return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return ht(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){yt(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(t){this._targets={},this._targets[f(this._container)]=this;var e=t?at:q;e(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&e(window,"resize",this._onResize,this),O.any3d&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){ht(this._resizeRequest),this._resizeRequest=dt(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,e){for(var o=[],a,l=e==="mouseout"||e==="mouseover",p=t.target||t.srcElement,g=!1;p;){if(a=this._targets[f(p)],a&&(e==="click"||e==="preclick")&&this._draggableMoved(a)){g=!0;break}if(a&&a.listens(e,!0)&&(l&&!Ao(p,t)||(o.push(a),l))||p===this._container)break;p=p.parentNode}return!o.length&&!g&&!l&&this.listens(e,!0)&&(o=[this]),o},_isClickDisabled:function(t){for(;t&&t!==this._container;){if(t._leaflet_disable_click)return!0;t=t.parentNode}},_handleDOMEvent:function(t){var e=t.target||t.srcElement;if(!(!this._loaded||e._leaflet_disable_events||t.type==="click"&&this._isClickDisabled(e))){var o=t.type;o==="mousedown"&&Po(e),this._fireDOMEvent(t,o)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,e,o){if(t.type==="click"){var a=r({},t);a.type="preclick",this._fireDOMEvent(a,a.type,o)}var l=this._findEventTargets(t,e);if(o){for(var p=[],g=0;g<o.length;g++)o[g].listens(e,!0)&&p.push(o[g]);l=p.concat(l)}if(l.length){e==="contextmenu"&&Ct(t);var y=l[0],_={originalEvent:t};if(t.type!=="keypress"&&t.type!=="keydown"&&t.type!=="keyup"){var F=y.getLatLng&&(!y._radius||y._radius<=10);_.containerPoint=F?this.latLngToContainerPoint(y.getLatLng()):this.mouseEventToContainerPoint(t),_.layerPoint=this.containerPointToLayerPoint(_.containerPoint),_.latlng=F?y.getLatLng():this.layerPointToLatLng(_.layerPoint)}for(g=0;g<l.length;g++)if(l[g].fire(e,_,!0),_.originalEvent._stopped||l[g].options.bubblingMouseEvents===!1&&et(this._mouseEvents,e)!==-1)return}},_draggableMoved:function(t){return t=t.dragging&&t.dragging.enabled()?t:this,t.dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,e=this._handlers.length;t<e;t++)this._handlers[t].disable()},whenReady:function(t,e){return this._loaded?t.call(e||this,{target:this}):this.on("load",t,e),this},_getMapPanePos:function(){return _e(this._mapPane)||new Z(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,e){var o=t&&e!==void 0?this._getNewPixelOrigin(t,e):this.getPixelOrigin();return o.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,e){var o=this.getSize()._divideBy(2);return this.project(t,e)._subtract(o)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,e,o){var a=this._getNewPixelOrigin(o,e);return this.project(t,e)._subtract(a)},_latLngBoundsToNewLayerBounds:function(t,e,o){var a=this._getNewPixelOrigin(o,e);return ut([this.project(t.getSouthWest(),e)._subtract(a),this.project(t.getNorthWest(),e)._subtract(a),this.project(t.getSouthEast(),e)._subtract(a),this.project(t.getNorthEast(),e)._subtract(a)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,e,o){if(!o)return t;var a=this.project(t,e),l=this.getSize().divideBy(2),p=new ot(a.subtract(l),a.add(l)),g=this._getBoundsOffset(p,o,e);return Math.abs(g.x)<=1&&Math.abs(g.y)<=1?t:this.unproject(a.add(g),e)},_limitOffset:function(t,e){if(!e)return t;var o=this.getPixelBounds(),a=new ot(o.min.add(t),o.max.add(t));return t.add(this._getBoundsOffset(a,e))},_getBoundsOffset:function(t,e,o){var a=ut(this.project(e.getNorthEast(),o),this.project(e.getSouthWest(),o)),l=a.min.subtract(t.min),p=a.max.subtract(t.max),g=this._rebound(l.x,-p.x),y=this._rebound(l.y,-p.y);return new Z(g,y)},_rebound:function(t,e){return t+e>0?Math.round(t-e)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(e))},_limitZoom:function(t){var e=this.getMinZoom(),o=this.getMaxZoom(),a=O.any3d?this.options.zoomSnap:1;return a&&(t=Math.round(t/a)*a),Math.max(e,Math.min(o,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){vt(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,e){var o=this._getCenterOffset(t)._trunc();return(e&&e.animate)!==!0&&!this.getSize().contains(o)?!1:(this.panBy(o,e),!0)},_createAnimProxy:function(){var t=this._proxy=tt("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(e){var o=yo,a=this._proxy.style[o];be(this._proxy,this.project(e.center,e.zoom),this.getZoomScale(e.zoom,1)),a===this._proxy.style[o]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){pt(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var t=this.getCenter(),e=this.getZoom();be(this._proxy,this.project(t,e),this.getZoomScale(e,1))},_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,e,o){if(this._animatingZoom)return!0;if(o=o||{},!this._zoomAnimated||o.animate===!1||this._nothingToAnimate()||Math.abs(e-this._zoom)>this.options.zoomAnimationThreshold)return!1;var a=this.getZoomScale(e),l=this._getCenterOffset(t)._divideBy(1-1/a);return o.animate!==!0&&!this.getSize().contains(l)?!1:(dt(function(){this._moveStart(!0,o.noMoveStart||!1)._animateZoom(t,e,!0)},this),!0)},_animateZoom:function(t,e,o,a){this._mapPane&&(o&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=e,K(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:t,zoom:e,noUpdate:a}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(c(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&vt(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function _a(t,e){return new X(t,e)}var Ut=St.extend({options:{position:"topright"},initialize:function(t){T(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var e=this._map;return e&&e.removeControl(this),this.options.position=t,e&&e.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t;var e=this._container=this.onAdd(t),o=this.getPosition(),a=t._controlCorners[o];return K(e,"leaflet-control"),o.indexOf("bottom")!==-1?a.insertBefore(e,a.firstChild):a.appendChild(e),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(pt(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(t){this._map&&t&&t.screenX>0&&t.screenY>0&&this._map.getContainer().focus()}}),fi=function(t){return new Ut(t)};X.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){var t=this._controlCorners={},e="leaflet-",o=this._controlContainer=tt("div",e+"control-container",this._container);function a(l,p){var g=e+l+" "+e+p;t[l+p]=tt("div",g,o)}a("top","left"),a("top","right"),a("bottom","left"),a("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)pt(this._controlCorners[t]);pt(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Cn=Ut.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(t,e,o,a){return o<a?-1:a<o?1:0}},initialize:function(t,e,o){T(this,o),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var a in t)this._addLayer(t[a],a);for(a in e)this._addLayer(e[a],a,!0)},onAdd:function(t){this._initLayout(),this._update(),this._map=t,t.on("zoomend",this._checkDisabledLayers,this);for(var e=0;e<this._layers.length;e++)this._layers[e].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){return Ut.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(t,e){return this._addLayer(t,e),this._map?this._update():this},addOverlay:function(t,e){return this._addLayer(t,e,!0),this._map?this._update():this},removeLayer:function(t){t.off("add remove",this._onLayerChange,this);var e=this._getLayer(f(t));return e&&this._layers.splice(this._layers.indexOf(e),1),this._map?this._update():this},expand:function(){K(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._section.clientHeight?(K(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=t+"px"):vt(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return vt(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",e=this._container=tt("div",t),o=this.options.collapsed;e.setAttribute("aria-haspopup",!0),ui(e),Eo(e);var a=this._section=tt("section",t+"-list");o&&(this._map.on("click",this.collapse,this),q(e,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var l=this._layersLink=tt("a",t+"-toggle",e);l.href="#",l.title="Layers",l.setAttribute("role","button"),q(l,{keydown:function(p){p.keyCode===13&&this._expandSafely()},click:function(p){Ct(p),this._expandSafely()}},this),o||this.expand(),this._baseLayersList=tt("div",t+"-base",a),this._separator=tt("div",t+"-separator",a),this._overlaysList=tt("div",t+"-overlays",a),e.appendChild(a)},_getLayer:function(t){for(var e=0;e<this._layers.length;e++)if(this._layers[e]&&f(this._layers[e].layer)===t)return this._layers[e]},_addLayer:function(t,e,o){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:e,overlay:o}),this.options.sortLayers&&this._layers.sort(c(function(a,l){return this.options.sortFunction(a.layer,l.layer,a.name,l.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;Oi(this._baseLayersList),Oi(this._overlaysList),this._layerControlInputs=[];var t,e,o,a,l=0;for(o=0;o<this._layers.length;o++)a=this._layers[o],this._addItem(a),e=e||a.overlay,t=t||!a.overlay,l+=a.overlay?0:1;return this.options.hideSingleBase&&(t=t&&l>1,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=e&&t?"":"none",this},_onLayerChange:function(t){this._handlingClick||this._update();var e=this._getLayer(f(t.target)),o=e.overlay?t.type==="add"?"overlayadd":"overlayremove":t.type==="add"?"baselayerchange":null;o&&this._map.fire(o,e)},_createRadioElement:function(t,e){var o='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(e?' checked="checked"':"")+"/>",a=document.createElement("div");return a.innerHTML=o,a.firstChild},_addItem:function(t){var e=document.createElement("label"),o=this._map.hasLayer(t.layer),a;t.overlay?(a=document.createElement("input"),a.type="checkbox",a.className="leaflet-control-layers-selector",a.defaultChecked=o):a=this._createRadioElement("leaflet-base-layers_"+f(this),o),this._layerControlInputs.push(a),a.layerId=f(t.layer),q(a,"click",this._onInputClick,this);var l=document.createElement("span");l.innerHTML=" "+t.name;var p=document.createElement("span");e.appendChild(p),p.appendChild(a),p.appendChild(l);var g=t.overlay?this._overlaysList:this._baseLayersList;return g.appendChild(e),this._checkDisabledLayers(),e},_onInputClick:function(){if(!this._preventClick){var t=this._layerControlInputs,e,o,a=[],l=[];this._handlingClick=!0;for(var p=t.length-1;p>=0;p--)e=t[p],o=this._getLayer(e.layerId).layer,e.checked?a.push(o):e.checked||l.push(o);for(p=0;p<l.length;p++)this._map.hasLayer(l[p])&&this._map.removeLayer(l[p]);for(p=0;p<a.length;p++)this._map.hasLayer(a[p])||this._map.addLayer(a[p]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var t=this._layerControlInputs,e,o,a=this._map.getZoom(),l=t.length-1;l>=0;l--)e=t[l],o=this._getLayer(e.layerId).layer,e.disabled=o.options.minZoom!==void 0&&a<o.options.minZoom||o.options.maxZoom!==void 0&&a>o.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var t=this._section;this._preventClick=!0,q(t,"click",Ct),this.expand();var e=this;setTimeout(function(){at(t,"click",Ct),e._preventClick=!1})}}),wa=function(t,e,o){return new Cn(t,e,o)},zo=Ut.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(t){var e="leaflet-control-zoom",o=tt("div",e+" leaflet-bar"),a=this.options;return this._zoomInButton=this._createButton(a.zoomInText,a.zoomInTitle,e+"-in",o,this._zoomIn),this._zoomOutButton=this._createButton(a.zoomOutText,a.zoomOutTitle,e+"-out",o,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),o},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,e,o,a,l){var p=tt("a",o,a);return p.innerHTML=t,p.href="#",p.title=e,p.setAttribute("role","button"),p.setAttribute("aria-label",e),ui(p),q(p,"click",ke),q(p,"click",l,this),q(p,"click",this._refocusOnMap,this),p},_updateDisabled:function(){var t=this._map,e="leaflet-disabled";vt(this._zoomInButton,e),vt(this._zoomOutButton,e),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||t._zoom===t.getMinZoom())&&(K(this._zoomOutButton,e),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||t._zoom===t.getMaxZoom())&&(K(this._zoomInButton,e),this._zoomInButton.setAttribute("aria-disabled","true"))}});X.mergeOptions({zoomControl:!0}),X.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new zo,this.addControl(this.zoomControl))});var ka=function(t){return new zo(t)},En=Ut.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(t){var e="leaflet-control-scale",o=tt("div",e),a=this.options;return this._addScales(a,e+"-line",o),t.on(a.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),o},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,e,o){t.metric&&(this._mScale=tt("div",e,o)),t.imperial&&(this._iScale=tt("div",e,o))},_update:function(){var t=this._map,e=t.getSize().y/2,o=t.distance(t.containerPointToLatLng([0,e]),t.containerPointToLatLng([this.options.maxWidth,e]));this._updateScales(o)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var e=this._getRoundNum(t),o=e<1e3?e+" m":e/1e3+" km";this._updateScale(this._mScale,o,e/t)},_updateImperial:function(t){var e=t*3.2808399,o,a,l;e>5280?(o=e/5280,a=this._getRoundNum(o),this._updateScale(this._iScale,a+" mi",a/o)):(l=this._getRoundNum(e),this._updateScale(this._iScale,l+" ft",l/e))},_updateScale:function(t,e,o){t.style.width=Math.round(this.options.maxWidth*o)+"px",t.innerHTML=e},_getRoundNum:function(t){var e=Math.pow(10,(Math.floor(t)+"").length-1),o=t/e;return o=o>=10?10:o>=5?5:o>=3?3:o>=2?2:1,e*o}}),Fa=function(t){return new En(t)},$a='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',Mo=Ut.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(O.inlineSvg?$a+" ":"")+"Leaflet</a>"},initialize:function(t){T(this,t),this._attributions={}},onAdd:function(t){t.attributionControl=this,this._container=tt("div","leaflet-control-attribution"),ui(this._container);for(var e in t._layers)t._layers[e].getAttribution&&this.addAttribution(t._layers[e].getAttribution());return this._update(),t.on("layeradd",this._addAttribution,this),this._container},onRemove:function(t){t.off("layeradd",this._addAttribution,this)},_addAttribution:function(t){t.layer.getAttribution&&(this.addAttribution(t.layer.getAttribution()),t.layer.once("remove",function(){this.removeAttribution(t.layer.getAttribution())},this))},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):this},removeAttribution:function(t){return t?(this._attributions[t]&&(this._attributions[t]--,this._update()),this):this},_update:function(){if(this._map){var t=[];for(var e in this._attributions)this._attributions[e]&&t.push(e);var o=[];this.options.prefix&&o.push(this.options.prefix),t.length&&o.push(t.join(", ")),this._container.innerHTML=o.join(' <span aria-hidden="true">|</span> ')}}});X.mergeOptions({attributionControl:!0}),X.addInitHook(function(){this.options.attributionControl&&new Mo().addTo(this)});var Pa=function(t){return new Mo(t)};Ut.Layers=Cn,Ut.Zoom=zo,Ut.Scale=En,Ut.Attribution=Mo,fi.layers=wa,fi.zoom=ka,fi.scale=Fa,fi.attribution=Pa;var Xt=St.extend({initialize:function(t){this._map=t},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Xt.addTo=function(t,e){return t.addHandler(e,this),this};var Ta={Events:ct},An=O.touch?"touchstart mousedown":"mousedown",de=Kt.extend({options:{clickTolerance:3},initialize:function(t,e,o,a){T(this,a),this._element=t,this._dragStartTarget=e||t,this._preventOutline=o},enable:function(){this._enabled||(q(this._dragStartTarget,An,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(de._dragging===this&&this.finishDrag(!0),at(this._dragStartTarget,An,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){if(this._enabled&&(this._moved=!1,!bo(this._element,"leaflet-zoom-anim"))){if(t.touches&&t.touches.length!==1){de._dragging===this&&this.finishDrag();return}if(!(de._dragging||t.shiftKey||t.which!==1&&t.button!==1&&!t.touches)&&(de._dragging=this,this._preventOutline&&Po(this._element),ko(),ci(),!this._moving)){this.fire("down");var e=t.touches?t.touches[0]:t,o=Fn(this._element);this._startPoint=new Z(e.clientX,e.clientY),this._startPos=_e(this._element),this._parentScale=To(o);var a=t.type==="mousedown";q(document,a?"mousemove":"touchmove",this._onMove,this),q(document,a?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(t){if(this._enabled){if(t.touches&&t.touches.length>1){this._moved=!0;return}var e=t.touches&&t.touches.length===1?t.touches[0]:t,o=new Z(e.clientX,e.clientY)._subtract(this._startPoint);!o.x&&!o.y||Math.abs(o.x)+Math.abs(o.y)<this.options.clickTolerance||(o.x/=this._parentScale.x,o.y/=this._parentScale.y,Ct(t),this._moved||(this.fire("dragstart"),this._moved=!0,K(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),K(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(o),this._moving=!0,this._lastEvent=t,this._updatePosition())}},_updatePosition:function(){var t={originalEvent:this._lastEvent};this.fire("predrag",t),yt(this._element,this._newPos),this.fire("drag",t)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(t){vt(document.body,"leaflet-dragging"),this._lastTarget&&(vt(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),at(document,"mousemove touchmove",this._onMove,this),at(document,"mouseup touchend touchcancel",this._onUp,this),Fo(),hi();var e=this._moved&&this._moving;this._moving=!1,de._dragging=!1,e&&this.fire("dragend",{noInertia:t,distance:this._newPos.distanceTo(this._startPos)})}});function zn(t,e,o){var a,l=[1,4,2,8],p,g,y,_,F,D,U,J;for(p=0,D=t.length;p<D;p++)t[p]._code=Fe(t[p],e);for(y=0;y<4;y++){for(U=l[y],a=[],p=0,D=t.length,g=D-1;p<D;g=p++)_=t[p],F=t[g],_._code&U?F._code&U||(J=Ui(F,_,U,e,o),J._code=Fe(J,e),a.push(J)):(F._code&U&&(J=Ui(F,_,U,e,o),J._code=Fe(J,e),a.push(J)),a.push(_));t=a}return t}function Mn(t,e){var o,a,l,p,g,y,_,F,D;if(!t||t.length===0)throw new Error("latlngs not passed");It(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var U=V([0,0]),J=nt(t),Et=J.getNorthWest().distanceTo(J.getSouthWest())*J.getNorthEast().distanceTo(J.getNorthWest());Et<1700&&(U=Do(t));var Pt=t.length,Ot=[];for(o=0;o<Pt;o++){var Dt=V(t[o]);Ot.push(e.project(V([Dt.lat-U.lat,Dt.lng-U.lng])))}for(y=_=F=0,o=0,a=Pt-1;o<Pt;a=o++)l=Ot[o],p=Ot[a],g=l.y*p.x-p.y*l.x,_+=(l.x+p.x)*g,F+=(l.y+p.y)*g,y+=g*3;y===0?D=Ot[0]:D=[_/y,F/y];var Oe=e.unproject(G(D));return V([Oe.lat+U.lat,Oe.lng+U.lng])}function Do(t){for(var e=0,o=0,a=0,l=0;l<t.length;l++){var p=V(t[l]);e+=p.lat,o+=p.lng,a++}return V([e/a,o/a])}var La={__proto__:null,clipPolygon:zn,polygonCenter:Mn,centroid:Do};function Dn(t,e){if(!e||!t.length)return t.slice();var o=e*e;return t=Ea(t,o),t=Ca(t,o),t}function Nn(t,e,o){return Math.sqrt(gi(t,e,o,!0))}function Sa(t,e,o){return gi(t,e,o)}function Ca(t,e){var o=t.length,a=typeof Uint8Array<"u"?Uint8Array:Array,l=new a(o);l[0]=l[o-1]=1,No(t,l,e,0,o-1);var p,g=[];for(p=0;p<o;p++)l[p]&&g.push(t[p]);return g}function No(t,e,o,a,l){var p=0,g,y,_;for(y=a+1;y<=l-1;y++)_=gi(t[y],t[a],t[l],!0),_>p&&(g=y,p=_);p>o&&(e[g]=1,No(t,e,o,a,g),No(t,e,o,g,l))}function Ea(t,e){for(var o=[t[0]],a=1,l=0,p=t.length;a<p;a++)Aa(t[a],t[l])>e&&(o.push(t[a]),l=a);return l<p-1&&o.push(t[p-1]),o}var Bn;function In(t,e,o,a,l){var p=a?Bn:Fe(t,o),g=Fe(e,o),y,_,F;for(Bn=g;;){if(!(p|g))return[t,e];if(p&g)return!1;y=p||g,_=Ui(t,e,y,o,l),F=Fe(_,o),y===p?(t=_,p=F):(e=_,g=F)}}function Ui(t,e,o,a,l){var p=e.x-t.x,g=e.y-t.y,y=a.min,_=a.max,F,D;return o&8?(F=t.x+p*(_.y-t.y)/g,D=_.y):o&4?(F=t.x+p*(y.y-t.y)/g,D=y.y):o&2?(F=_.x,D=t.y+g*(_.x-t.x)/p):o&1&&(F=y.x,D=t.y+g*(y.x-t.x)/p),new Z(F,D,l)}function Fe(t,e){var o=0;return t.x<e.min.x?o|=1:t.x>e.max.x&&(o|=2),t.y<e.min.y?o|=4:t.y>e.max.y&&(o|=8),o}function Aa(t,e){var o=e.x-t.x,a=e.y-t.y;return o*o+a*a}function gi(t,e,o,a){var l=e.x,p=e.y,g=o.x-l,y=o.y-p,_=g*g+y*y,F;return _>0&&(F=((t.x-l)*g+(t.y-p)*y)/_,F>1?(l=o.x,p=o.y):F>0&&(l+=g*F,p+=y*F)),g=t.x-l,y=t.y-p,a?g*g+y*y:new Z(l,p)}function It(t){return!H(t[0])||typeof t[0][0]!="object"&&typeof t[0][0]<"u"}function On(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),It(t)}function Rn(t,e){var o,a,l,p,g,y,_,F;if(!t||t.length===0)throw new Error("latlngs not passed");It(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var D=V([0,0]),U=nt(t),J=U.getNorthWest().distanceTo(U.getSouthWest())*U.getNorthEast().distanceTo(U.getNorthWest());J<1700&&(D=Do(t));var Et=t.length,Pt=[];for(o=0;o<Et;o++){var Ot=V(t[o]);Pt.push(e.project(V([Ot.lat-D.lat,Ot.lng-D.lng])))}for(o=0,a=0;o<Et-1;o++)a+=Pt[o].distanceTo(Pt[o+1])/2;if(a===0)F=Pt[0];else for(o=0,p=0;o<Et-1;o++)if(g=Pt[o],y=Pt[o+1],l=g.distanceTo(y),p+=l,p>a){_=(p-a)/l,F=[y.x-_*(y.x-g.x),y.y-_*(y.y-g.y)];break}var Dt=e.unproject(G(F));return V([Dt.lat+D.lat,Dt.lng+D.lng])}var za={__proto__:null,simplify:Dn,pointToSegmentDistance:Nn,closestPointOnSegment:Sa,clipSegment:In,_getEdgeIntersection:Ui,_getBitCode:Fe,_sqClosestPointOnSegment:gi,isFlat:It,_flat:On,polylineCenter:Rn},Bo={project:function(t){return new Z(t.lng,t.lat)},unproject:function(t){return new Q(t.y,t.x)},bounds:new ot([-180,-90],[180,90])},Io={R:6378137,R_MINOR:6356752314245179e-9,bounds:new ot([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(t){var e=Math.PI/180,o=this.R,a=t.lat*e,l=this.R_MINOR/o,p=Math.sqrt(1-l*l),g=p*Math.sin(a),y=Math.tan(Math.PI/4-a/2)/Math.pow((1-g)/(1+g),p/2);return a=-o*Math.log(Math.max(y,1e-10)),new Z(t.lng*e*o,a)},unproject:function(t){for(var e=180/Math.PI,o=this.R,a=this.R_MINOR/o,l=Math.sqrt(1-a*a),p=Math.exp(-t.y/o),g=Math.PI/2-2*Math.atan(p),y=0,_=.1,F;y<15&&Math.abs(_)>1e-7;y++)F=l*Math.sin(g),F=Math.pow((1-F)/(1+F),l/2),_=Math.PI/2-2*Math.atan(p*F)-g,g+=_;return new Q(g*e,t.x*e/o)}},Ma={__proto__:null,LonLat:Bo,Mercator:Io,SphericalMercator:Mt},Da=r({},Y,{code:"EPSG:3395",projection:Io,transformation:(function(){var t=.5/(Math.PI*Io.R);return ee(t,.5,-t,.5)})()}),Hn=r({},Y,{code:"EPSG:4326",projection:Bo,transformation:ee(1/180,1,-1/180,.5)}),Na=r({},M,{projection:Bo,transformation:ee(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,e){var o=e.lng-t.lng,a=e.lat-t.lat;return Math.sqrt(o*o+a*a)},infinite:!0});M.Earth=Y,M.EPSG3395=Da,M.EPSG3857=ge,M.EPSG900913=Mi,M.EPSG4326=Hn,M.Simple=Na;var Wt=Kt.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(t){return t.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(t){return t&&t.removeLayer(this),this},getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[f(t)]=this,this},removeInteractiveTarget:function(t){return delete this._map._targets[f(t)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var e=t.target;if(e.hasLayer(this)){if(this._map=e,this._zoomAnimated=e._zoomAnimated,this.getEvents){var o=this.getEvents();e.on(o,this),this.once("remove",function(){e.off(o,this)},this)}this.onAdd(e),this.fire("add"),e.fire("layeradd",{layer:this})}}});X.include({addLayer:function(t){if(!t._layerAdd)throw new Error("The provided object is not a Layer.");var e=f(t);return this._layers[e]?this:(this._layers[e]=t,t._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t),this)},removeLayer:function(t){var e=f(t);return this._layers[e]?(this._loaded&&t.onRemove(this),delete this._layers[e],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null,this):this},hasLayer:function(t){return f(t)in this._layers},eachLayer:function(t,e){for(var o in this._layers)t.call(e,this._layers[o]);return this},_addLayers:function(t){t=t?H(t)?t:[t]:[];for(var e=0,o=t.length;e<o;e++)this.addLayer(t[e])},_addZoomLimit:function(t){(!isNaN(t.options.maxZoom)||!isNaN(t.options.minZoom))&&(this._zoomBoundLayers[f(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){var e=f(t);this._zoomBoundLayers[e]&&(delete this._zoomBoundLayers[e],this._updateZoomLevels())},_updateZoomLevels:function(){var t=1/0,e=-1/0,o=this._getZoomSpan();for(var a in this._zoomBoundLayers){var l=this._zoomBoundLayers[a].options;t=l.minZoom===void 0?t:Math.min(t,l.minZoom),e=l.maxZoom===void 0?e:Math.max(e,l.maxZoom)}this._layersMaxZoom=e===-1/0?void 0:e,this._layersMinZoom=t===1/0?void 0:t,o!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Me=Wt.extend({initialize:function(t,e){T(this,e),this._layers={};var o,a;if(t)for(o=0,a=t.length;o<a;o++)this.addLayer(t[o])},addLayer:function(t){var e=this.getLayerId(t);return this._layers[e]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var e=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[e]&&this._map.removeLayer(this._layers[e]),delete this._layers[e],this},hasLayer:function(t){var e=typeof t=="number"?t:this.getLayerId(t);return e in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(t){var e=Array.prototype.slice.call(arguments,1),o,a;for(o in this._layers)a=this._layers[o],a[t]&&a[t].apply(a,e);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},eachLayer:function(t,e){for(var o in this._layers)t.call(e,this._layers[o]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return f(t)}}),Ba=function(t,e){return new Me(t,e)},ie=Me.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),Me.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),Me.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new ft;for(var e in this._layers){var o=this._layers[e];t.extend(o.getBounds?o.getBounds():o.getLatLng())}return t}}),Ia=function(t,e){return new ie(t,e)},De=St.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(t){T(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,e){var o=this._getIconUrl(t);if(!o){if(t==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var a=this._createImg(o,e&&e.tagName==="IMG"?e:null);return this._setIconStyles(a,t),(this.options.crossOrigin||this.options.crossOrigin==="")&&(a.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),a},_setIconStyles:function(t,e){var o=this.options,a=o[e+"Size"];typeof a=="number"&&(a=[a,a]);var l=G(a),p=G(e==="shadow"&&o.shadowAnchor||o.iconAnchor||l&&l.divideBy(2,!0));t.className="leaflet-marker-"+e+" "+(o.className||""),p&&(t.style.marginLeft=-p.x+"px",t.style.marginTop=-p.y+"px"),l&&(t.style.width=l.x+"px",t.style.height=l.y+"px")},_createImg:function(t,e){return e=e||document.createElement("img"),e.src=t,e},_getIconUrl:function(t){return O.retina&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}});function Oa(t){return new De(t)}var mi=De.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){return typeof mi.imagePath!="string"&&(mi.imagePath=this._detectIconPath()),(this.options.imagePath||mi.imagePath)+De.prototype._getIconUrl.call(this,t)},_stripUrl:function(t){var e=function(o,a,l){var p=a.exec(o);return p&&p[l]};return t=e(t,/^url\((['"])?(.+)\1\)$/,2),t&&e(t,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var t=tt("div","leaflet-default-icon-path",document.body),e=di(t,"background-image")||di(t,"backgroundImage");if(document.body.removeChild(t),e=this._stripUrl(e),e)return e;var o=document.querySelector('link[href$="leaflet.css"]');return o?o.href.substring(0,o.href.length-11-1):""}}),jn=Xt.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new de(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),K(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&vt(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var e=this._marker,o=e._map,a=this._marker.options.autoPanSpeed,l=this._marker.options.autoPanPadding,p=_e(e._icon),g=o.getPixelBounds(),y=o.getPixelOrigin(),_=ut(g.min._subtract(y).add(l),g.max._subtract(y).subtract(l));if(!_.contains(p)){var F=G((Math.max(_.max.x,p.x)-_.max.x)/(g.max.x-_.max.x)-(Math.min(_.min.x,p.x)-_.min.x)/(g.min.x-_.min.x),(Math.max(_.max.y,p.y)-_.max.y)/(g.max.y-_.max.y)-(Math.min(_.min.y,p.y)-_.min.y)/(g.min.y-_.min.y)).multiplyBy(a);o.panBy(F,{animate:!1}),this._draggable._newPos._add(F),this._draggable._startPos._add(F),yt(e._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=dt(this._adjustPan.bind(this,t))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&(ht(this._panRequest),this._panRequest=dt(this._adjustPan.bind(this,t)))},_onDrag:function(t){var e=this._marker,o=e._shadow,a=_e(e._icon),l=e._map.layerPointToLatLng(a);o&&yt(o,a),e._latlng=l,t.latlng=l,t.oldLatLng=this._oldLatLng,e.fire("move",t).fire("drag",t)},_onDragEnd:function(t){ht(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),Wi=Wt.extend({options:{icon:new mi,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(t,e){T(this,e),this._latlng=V(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(t){var e=this._latlng;return this._latlng=V(t),this.update(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},getIcon:function(){return this.options.icon},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,e="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),o=t.icon.createIcon(this._icon),a=!1;o!==this._icon&&(this._icon&&this._removeIcon(),a=!0,t.title&&(o.title=t.title),o.tagName==="IMG"&&(o.alt=t.alt||"")),K(o,e),t.keyboard&&(o.tabIndex="0",o.setAttribute("role","button")),this._icon=o,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&q(o,"focus",this._panOnFocus,this);var l=t.icon.createShadow(this._shadow),p=!1;l!==this._shadow&&(this._removeShadow(),p=!0),l&&(K(l,e),l.alt=""),this._shadow=l,t.opacity<1&&this._updateOpacity(),a&&this.getPane().appendChild(this._icon),this._initInteraction(),l&&p&&this.getPane(t.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&at(this._icon,"focus",this._panOnFocus,this),pt(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&pt(this._shadow),this._shadow=null},_setPos:function(t){this._icon&&yt(this._icon,t),this._shadow&&yt(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon&&(this._icon.style.zIndex=this._zIndex+t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(e)},_initInteraction:function(){if(this.options.interactive&&(K(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),jn)){var t=this.options.draggable;this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new jn(this),t&&this.dragging.enable()}},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;this._icon&&Bt(this._icon,t),this._shadow&&Bt(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var t=this._map;if(t){var e=this.options.icon.options,o=e.iconSize?G(e.iconSize):G(0,0),a=e.iconAnchor?G(e.iconAnchor):G(0,0);t.panInside(this._latlng,{paddingTopLeft:a,paddingBottomRight:o.subtract(a)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function Ra(t,e){return new Wi(t,e)}var ce=Wt.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(t){this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(t){return T(this,t),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&t&&Object.prototype.hasOwnProperty.call(t,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),Gi=ce.extend({options:{fill:!0,radius:10},initialize:function(t,e){T(this,e),this._latlng=V(t),this._radius=this.options.radius},setLatLng:function(t){var e=this._latlng;return this._latlng=V(t),this.redraw(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius},setStyle:function(t){var e=t&&t.radius||this._radius;return ce.prototype.setStyle.call(this,t),this.setRadius(e),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,e=this._radiusY||t,o=this._clickTolerance(),a=[t+o,e+o];this._pxBounds=new ot(this._point.subtract(a),this._point.add(a))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function Ha(t,e){return new Gi(t,e)}var Oo=Gi.extend({initialize:function(t,e,o){if(typeof e=="number"&&(e=r({},o,{radius:e})),T(this,e),this._latlng=V(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(t){return this._mRadius=t,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new ft(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:ce.prototype.setStyle,_project:function(){var t=this._latlng.lng,e=this._latlng.lat,o=this._map,a=o.options.crs;if(a.distance===Y.distance){var l=Math.PI/180,p=this._mRadius/Y.R/l,g=o.project([e+p,t]),y=o.project([e-p,t]),_=g.add(y).divideBy(2),F=o.unproject(_).lat,D=Math.acos((Math.cos(p*l)-Math.sin(e*l)*Math.sin(F*l))/(Math.cos(e*l)*Math.cos(F*l)))/l;(isNaN(D)||D===0)&&(D=p/Math.cos(Math.PI/180*e)),this._point=_.subtract(o.getPixelOrigin()),this._radius=isNaN(D)?0:_.x-o.project([F,t-D]).x,this._radiusY=_.y-g.y}else{var U=a.unproject(a.project(this._latlng).subtract([this._mRadius,0]));this._point=o.latLngToLayerPoint(this._latlng),this._radius=this._point.x-o.latLngToLayerPoint(U).x}this._updateBounds()}});function ja(t,e,o){return new Oo(t,e,o)}var oe=ce.extend({options:{smoothFactor:1,noClip:!1},initialize:function(t,e){T(this,e),this._setLatLngs(t)},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(t){for(var e=1/0,o=null,a=gi,l,p,g=0,y=this._parts.length;g<y;g++)for(var _=this._parts[g],F=1,D=_.length;F<D;F++){l=_[F-1],p=_[F];var U=a(t,l,p,!0);U<e&&(e=U,o=a(t,l,p))}return o&&(o.distance=Math.sqrt(e)),o},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Rn(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(t,e){return e=e||this._defaultShape(),t=V(t),e.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new ft,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return It(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(t){for(var e=[],o=It(t),a=0,l=t.length;a<l;a++)o?(e[a]=V(t[a]),this._bounds.extend(e[a])):e[a]=this._convertLatLngs(t[a]);return e},_project:function(){var t=new ot;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t),this._bounds.isValid()&&t.isValid()&&(this._rawPxBounds=t,this._updateBounds())},_updateBounds:function(){var t=this._clickTolerance(),e=new Z(t,t);this._rawPxBounds&&(this._pxBounds=new ot([this._rawPxBounds.min.subtract(e),this._rawPxBounds.max.add(e)]))},_projectLatlngs:function(t,e,o){var a=t[0]instanceof Q,l=t.length,p,g;if(a){for(g=[],p=0;p<l;p++)g[p]=this._map.latLngToLayerPoint(t[p]),o.extend(g[p]);e.push(g)}else for(p=0;p<l;p++)this._projectLatlngs(t[p],e,o)},_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}var e=this._parts,o,a,l,p,g,y,_;for(o=0,l=0,p=this._rings.length;o<p;o++)for(_=this._rings[o],a=0,g=_.length;a<g-1;a++)y=In(_[a],_[a+1],t,a,!0),y&&(e[l]=e[l]||[],e[l].push(y[0]),(y[1]!==_[a+1]||a===g-2)&&(e[l].push(y[1]),l++))}},_simplifyPoints:function(){for(var t=this._parts,e=this.options.smoothFactor,o=0,a=t.length;o<a;o++)t[o]=Dn(t[o],e)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(t,e){var o,a,l,p,g,y,_=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(o=0,p=this._parts.length;o<p;o++)for(y=this._parts[o],a=0,g=y.length,l=g-1;a<g;l=a++)if(!(!e&&a===0)&&Nn(t,y[l],y[a])<=_)return!0;return!1}});function Za(t,e){return new oe(t,e)}oe._flat=On;var Ne=oe.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Mn(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(t){var e=oe.prototype._convertLatLngs.call(this,t),o=e.length;return o>=2&&e[0]instanceof Q&&e[0].equals(e[o-1])&&e.pop(),e},_setLatLngs:function(t){oe.prototype._setLatLngs.call(this,t),It(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return It(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var t=this._renderer._bounds,e=this.options.weight,o=new Z(e,e);if(t=new ot(t.min.subtract(o),t.max.add(o)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}for(var a=0,l=this._rings.length,p;a<l;a++)p=zn(this._rings[a],t,!0),p.length&&this._parts.push(p)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(t){var e=!1,o,a,l,p,g,y,_,F;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(p=0,_=this._parts.length;p<_;p++)for(o=this._parts[p],g=0,F=o.length,y=F-1;g<F;y=g++)a=o[g],l=o[y],a.y>t.y!=l.y>t.y&&t.x<(l.x-a.x)*(t.y-a.y)/(l.y-a.y)+a.x&&(e=!e);return e||oe.prototype._containsPoint.call(this,t,!0)}});function Ua(t,e){return new Ne(t,e)}var ne=ie.extend({initialize:function(t,e){T(this,e),this._layers={},t&&this.addData(t)},addData:function(t){var e=H(t)?t:t.features,o,a,l;if(e){for(o=0,a=e.length;o<a;o++)l=e[o],(l.geometries||l.geometry||l.features||l.coordinates)&&this.addData(l);return this}var p=this.options;if(p.filter&&!p.filter(t))return this;var g=qi(t,p);return g?(g.feature=Ji(t),g.defaultOptions=g.options,this.resetStyle(g),p.onEachFeature&&p.onEachFeature(t,g),this.addLayer(g)):this},resetStyle:function(t){return t===void 0?this.eachLayer(this.resetStyle,this):(t.options=r({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this)},setStyle:function(t){return this.eachLayer(function(e){this._setLayerStyle(e,t)},this)},_setLayerStyle:function(t,e){t.setStyle&&(typeof e=="function"&&(e=e(t.feature)),t.setStyle(e))}});function qi(t,e){var o=t.type==="Feature"?t.geometry:t,a=o?o.coordinates:null,l=[],p=e&&e.pointToLayer,g=e&&e.coordsToLatLng||Ro,y,_,F,D;if(!a&&!o)return null;switch(o.type){case"Point":return y=g(a),Zn(p,t,y,e);case"MultiPoint":for(F=0,D=a.length;F<D;F++)y=g(a[F]),l.push(Zn(p,t,y,e));return new ie(l);case"LineString":case"MultiLineString":return _=Ki(a,o.type==="LineString"?0:1,g),new oe(_,e);case"Polygon":case"MultiPolygon":return _=Ki(a,o.type==="Polygon"?1:2,g),new Ne(_,e);case"GeometryCollection":for(F=0,D=o.geometries.length;F<D;F++){var U=qi({geometry:o.geometries[F],type:"Feature",properties:t.properties},e);U&&l.push(U)}return new ie(l);case"FeatureCollection":for(F=0,D=o.features.length;F<D;F++){var J=qi(o.features[F],e);J&&l.push(J)}return new ie(l);default:throw new Error("Invalid GeoJSON object.")}}function Zn(t,e,o,a){return t?t(e,o):new Wi(o,a&&a.markersInheritOptions&&a)}function Ro(t){return new Q(t[1],t[0],t[2])}function Ki(t,e,o){for(var a=[],l=0,p=t.length,g;l<p;l++)g=e?Ki(t[l],e-1,o):(o||Ro)(t[l]),a.push(g);return a}function Ho(t,e){return t=V(t),t.alt!==void 0?[k(t.lng,e),k(t.lat,e),k(t.alt,e)]:[k(t.lng,e),k(t.lat,e)]}function Vi(t,e,o,a){for(var l=[],p=0,g=t.length;p<g;p++)l.push(e?Vi(t[p],It(t[p])?0:e-1,o,a):Ho(t[p],a));return!e&&o&&l.length>0&&l.push(l[0].slice()),l}function Be(t,e){return t.feature?r({},t.feature,{geometry:e}):Ji(e)}function Ji(t){return t.type==="Feature"||t.type==="FeatureCollection"?t:{type:"Feature",properties:{},geometry:t}}var jo={toGeoJSON:function(t){return Be(this,{type:"Point",coordinates:Ho(this.getLatLng(),t)})}};Wi.include(jo),Oo.include(jo),Gi.include(jo),oe.include({toGeoJSON:function(t){var e=!It(this._latlngs),o=Vi(this._latlngs,e?1:0,!1,t);return Be(this,{type:(e?"Multi":"")+"LineString",coordinates:o})}}),Ne.include({toGeoJSON:function(t){var e=!It(this._latlngs),o=e&&!It(this._latlngs[0]),a=Vi(this._latlngs,o?2:e?1:0,!0,t);return e||(a=[a]),Be(this,{type:(o?"Multi":"")+"Polygon",coordinates:a})}}),Me.include({toMultiPoint:function(t){var e=[];return this.eachLayer(function(o){e.push(o.toGeoJSON(t).geometry.coordinates)}),Be(this,{type:"MultiPoint",coordinates:e})},toGeoJSON:function(t){var e=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(e==="MultiPoint")return this.toMultiPoint(t);var o=e==="GeometryCollection",a=[];return this.eachLayer(function(l){if(l.toGeoJSON){var p=l.toGeoJSON(t);if(o)a.push(p.geometry);else{var g=Ji(p);g.type==="FeatureCollection"?a.push.apply(a,g.features):a.push(g)}}}),o?Be(this,{geometries:a,type:"GeometryCollection"}):{type:"FeatureCollection",features:a}}});function Un(t,e){return new ne(t,e)}var Wa=Un,Yi=Wt.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(t,e,o){this._url=t,this._bounds=nt(e),T(this,o)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(K(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){pt(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},bringToFront:function(){return this._map&&Ae(this._image),this},bringToBack:function(){return this._map&&ze(this._image),this},setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},setBounds:function(t){return this._bounds=nt(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var t=this._url.tagName==="IMG",e=this._image=t?this._url:tt("img");if(K(e,"leaflet-image-layer"),this._zoomAnimated&&K(e,"leaflet-zoom-animated"),this.options.className&&K(e,this.options.className),e.onselectstart=x,e.onmousemove=x,e.onload=c(this.fire,this,"load"),e.onerror=c(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(e.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t){this._url=e.src;return}e.src=this._url,e.alt=this.options.alt},_animateZoom:function(t){var e=this._map.getZoomScale(t.zoom),o=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;be(this._image,o,e)},_reset:function(){var t=this._image,e=new ot(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),o=e.getSize();yt(t,e.min),t.style.width=o.x+"px",t.style.height=o.y+"px"},_updateOpacity:function(){Bt(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)},getCenter:function(){return this._bounds.getCenter()}}),Ga=function(t,e,o){return new Yi(t,e,o)},Wn=Yi.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var t=this._url.tagName==="VIDEO",e=this._image=t?this._url:tt("video");if(K(e,"leaflet-image-layer"),this._zoomAnimated&&K(e,"leaflet-zoom-animated"),this.options.className&&K(e,this.options.className),e.onselectstart=x,e.onmousemove=x,e.onloadeddata=c(this.fire,this,"load"),t){for(var o=e.getElementsByTagName("source"),a=[],l=0;l<o.length;l++)a.push(o[l].src);this._url=o.length>0?a:[e.src];return}H(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(e.style,"objectFit")&&(e.style.objectFit="fill"),e.autoplay=!!this.options.autoplay,e.loop=!!this.options.loop,e.muted=!!this.options.muted,e.playsInline=!!this.options.playsInline;for(var p=0;p<this._url.length;p++){var g=tt("source");g.src=this._url[p],e.appendChild(g)}}});function qa(t,e,o){return new Wn(t,e,o)}var Gn=Yi.extend({_initImage:function(){var t=this._image=this._url;K(t,"leaflet-image-layer"),this._zoomAnimated&&K(t,"leaflet-zoom-animated"),this.options.className&&K(t,this.options.className),t.onselectstart=x,t.onmousemove=x}});function Ka(t,e,o){return new Gn(t,e,o)}var Qt=Wt.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(t,e){t&&(t instanceof Q||H(t))?(this._latlng=V(t),T(this,e)):(T(this,t),this._source=e),this.options.content&&(this._content=this.options.content)},openOn:function(t){return t=arguments.length?t:this._source._map,t.hasLayer(this)||t.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(t){return this._map?this.close():(arguments.length?this._source=t:t=this._source,this._prepareOpen(),this.openOn(t._map)),this},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&Bt(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&Bt(this._container,1),this.bringToFront(),this.options.interactive&&(K(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(t){t._fadeAnimated?(Bt(this._container,0),this._removeTimeout=setTimeout(c(pt,void 0,this._container),200)):pt(this._container),this.options.interactive&&(vt(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=V(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&Ae(this._container),this},bringToBack:function(){return this._map&&ze(this._container),this},_prepareOpen:function(t){var e=this._source;if(!e._map)return!1;if(e instanceof ie){e=null;var o=this._source._layers;for(var a in o)if(o[a]._map){e=o[a];break}if(!e)return!1;this._source=e}if(!t)if(e.getCenter)t=e.getCenter();else if(e.getLatLng)t=e.getLatLng();else if(e.getBounds)t=e.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(t),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var t=this._contentNode,e=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof e=="string")t.innerHTML=e;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(e)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),e=G(this.options.offset),o=this._getAnchor();this._zoomAnimated?yt(this._container,t.add(o)):e=e.add(t).add(o);var a=this._containerBottom=-e.y,l=this._containerLeft=-Math.round(this._containerWidth/2)+e.x;this._container.style.bottom=a+"px",this._container.style.left=l+"px"}},_getAnchor:function(){return[0,0]}});X.include({_initOverlay:function(t,e,o,a){var l=e;return l instanceof t||(l=new t(a).setContent(e)),o&&l.setLatLng(o),l}}),Wt.include({_initOverlay:function(t,e,o,a){var l=o;return l instanceof t?(T(l,a),l._source=this):(l=e&&!a?e:new t(a,this),l.setContent(o)),l}});var Xi=Qt.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(t){return t=arguments.length?t:this._source._map,!t.hasLayer(this)&&t._popup&&t._popup.options.autoClose&&t.removeLayer(t._popup),t._popup=this,Qt.prototype.openOn.call(this,t)},onAdd:function(t){Qt.prototype.onAdd.call(this,t),t.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof ce||this._source.on("preclick",we))},onRemove:function(t){Qt.prototype.onRemove.call(this,t),t.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof ce||this._source.off("preclick",we))},getEvents:function(){var t=Qt.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this.close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_initLayout:function(){var t="leaflet-popup",e=this._container=tt("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),o=this._wrapper=tt("div",t+"-content-wrapper",e);if(this._contentNode=tt("div",t+"-content",o),ui(e),Eo(this._contentNode),q(e,"contextmenu",we),this._tipContainer=tt("div",t+"-tip-container",e),this._tip=tt("div",t+"-tip",this._tipContainer),this.options.closeButton){var a=this._closeButton=tt("a",t+"-close-button",e);a.setAttribute("role","button"),a.setAttribute("aria-label","Close popup"),a.href="#close",a.innerHTML='<span aria-hidden="true">&#215;</span>',q(a,"click",function(l){Ct(l),this.close()},this)}},_updateLayout:function(){var t=this._contentNode,e=t.style;e.width="",e.whiteSpace="nowrap";var o=t.offsetWidth;o=Math.min(o,this.options.maxWidth),o=Math.max(o,this.options.minWidth),e.width=o+1+"px",e.whiteSpace="",e.height="";var a=t.offsetHeight,l=this.options.maxHeight,p="leaflet-popup-scrolled";l&&a>l?(e.height=l+"px",K(t,p)):vt(t,p),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),o=this._getAnchor();yt(this._container,e.add(o))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var t=this._map,e=parseInt(di(this._container,"marginBottom"),10)||0,o=this._container.offsetHeight+e,a=this._containerWidth,l=new Z(this._containerLeft,-o-this._containerBottom);l._add(_e(this._container));var p=t.layerPointToContainerPoint(l),g=G(this.options.autoPanPadding),y=G(this.options.autoPanPaddingTopLeft||g),_=G(this.options.autoPanPaddingBottomRight||g),F=t.getSize(),D=0,U=0;p.x+a+_.x>F.x&&(D=p.x+a-F.x+_.x),p.x-D-y.x<0&&(D=p.x-y.x),p.y+o+_.y>F.y&&(U=p.y+o-F.y+_.y),p.y-U-y.y<0&&(U=p.y-y.y),(D||U)&&(this.options.keepInView&&(this._autopanning=!0),t.fire("autopanstart").panBy([D,U]))}},_getAnchor:function(){return G(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Va=function(t,e){return new Xi(t,e)};X.mergeOptions({closePopupOnClick:!0}),X.include({openPopup:function(t,e,o){return this._initOverlay(Xi,t,e,o).openOn(this),this},closePopup:function(t){return t=arguments.length?t:this._popup,t&&t.close(),this}}),Wt.include({bindPopup:function(t,e){return this._popup=this._initOverlay(Xi,this._popup,t,e),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(t){return this._popup&&(this instanceof ie||(this._popup._source=this),this._popup._prepareOpen(t||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},getPopup:function(){return this._popup},_openPopup:function(t){if(!(!this._popup||!this._map)){ke(t);var e=t.layer||t.target;if(this._popup._source===e&&!(e instanceof ce)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(t.latlng);return}this._popup._source=e,this.openPopup(t.latlng)}},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){t.originalEvent.keyCode===13&&this._openPopup(t)}});var Qi=Qt.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(t){Qt.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(t){Qt.prototype.onRemove.call(this,t),t.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var t=Qt.prototype.getEvents.call(this);return this.options.permanent||(t.preclick=this.close),t},_initLayout:function(){var t="leaflet-tooltip",e=t+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=tt("div",e),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+f(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var e,o,a=this._map,l=this._container,p=a.latLngToContainerPoint(a.getCenter()),g=a.layerPointToContainerPoint(t),y=this.options.direction,_=l.offsetWidth,F=l.offsetHeight,D=G(this.options.offset),U=this._getAnchor();y==="top"?(e=_/2,o=F):y==="bottom"?(e=_/2,o=0):y==="center"?(e=_/2,o=F/2):y==="right"?(e=0,o=F/2):y==="left"?(e=_,o=F/2):g.x<p.x?(y="right",e=0,o=F/2):(y="left",e=_+(D.x+U.x)*2,o=F/2),t=t.subtract(G(e,o,!0)).add(D).add(U),vt(l,"leaflet-tooltip-right"),vt(l,"leaflet-tooltip-left"),vt(l,"leaflet-tooltip-top"),vt(l,"leaflet-tooltip-bottom"),K(l,"leaflet-tooltip-"+y),yt(l,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&Bt(this._container,t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(e)},_getAnchor:function(){return G(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),Ja=function(t,e){return new Qi(t,e)};X.include({openTooltip:function(t,e,o){return this._initOverlay(Qi,t,e,o).openOn(this),this},closeTooltip:function(t){return t.close(),this}}),Wt.include({bindTooltip:function(t,e){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Qi,this._tooltip,t,e),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){if(!(!t&&this._tooltipHandlersAdded)){var e=t?"off":"on",o={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?o.add=this._openTooltip:(o.mouseover=this._openTooltip,o.mouseout=this.closeTooltip,o.click=this._openTooltip,this._map?this._addFocusListeners():o.add=this._addFocusListeners),this._tooltip.options.sticky&&(o.mousemove=this._moveTooltip),this[e](o),this._tooltipHandlersAdded=!t}},openTooltip:function(t){return this._tooltip&&(this instanceof ie||(this._tooltip._source=this),this._tooltip._prepareOpen(t)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(t){var e=typeof t.getElement=="function"&&t.getElement();e&&(q(e,"focus",function(){this._tooltip._source=t,this.openTooltip()},this),q(e,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(t){var e=typeof t.getElement=="function"&&t.getElement();e&&e.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(t){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var e=this;this._map.once("moveend",function(){e._openOnceFlag=!1,e._openTooltip(t)});return}this._tooltip._source=t.layer||t.target,this.openTooltip(this._tooltip.options.sticky?t.latlng:void 0)}},_moveTooltip:function(t){var e=t.latlng,o,a;this._tooltip.options.sticky&&t.originalEvent&&(o=this._map.mouseEventToContainerPoint(t.originalEvent),a=this._map.containerPointToLayerPoint(o),e=this._map.layerPointToLatLng(a)),this._tooltip.setLatLng(e)}});var qn=De.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var e=t&&t.tagName==="DIV"?t:document.createElement("div"),o=this.options;if(o.html instanceof Element?(Oi(e),e.appendChild(o.html)):e.innerHTML=o.html!==!1?o.html:"",o.bgPos){var a=G(o.bgPos);e.style.backgroundPosition=-a.x+"px "+-a.y+"px"}return this._setIconStyles(e,"icon"),e},createShadow:function(){return null}});function Ya(t){return new qn(t)}De.Default=mi;var vi=Wt.extend({options:{tileSize:256,opacity:1,updateWhenIdle:O.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(t){T(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),pt(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(Ae(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(ze(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var t=this._clampZoom(this._map.getZoom());t!==this._tileZoom&&(this._tileZoom=t,this._updateLevels()),this._update()}return this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=v(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},createTile:function(){return document.createElement("div")},getTileSize:function(){var t=this.options.tileSize;return t instanceof Z?t:new Z(t,t)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var e=this.getPane().children,o=-t(-1/0,1/0),a=0,l=e.length,p;a<l;a++)p=e[a].style.zIndex,e[a]!==this._container&&p&&(o=t(o,+p));isFinite(o)&&(this.options.zIndex=o+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!O.ielt9){Bt(this._container,this.options.opacity);var t=+new Date,e=!1,o=!1;for(var a in this._tiles){var l=this._tiles[a];if(!(!l.current||!l.loaded)){var p=Math.min(1,(t-l.loaded)/200);Bt(l.el,p),p<1?e=!0:(l.active?o=!0:this._onOpaqueTile(l),l.active=!0)}}o&&!this._noPrune&&this._pruneTiles(),e&&(ht(this._fadeFrame),this._fadeFrame=dt(this._updateOpacity,this))}},_onOpaqueTile:x,_initContainer:function(){this._container||(this._container=tt("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,e=this.options.maxZoom;if(t!==void 0){for(var o in this._levels)o=Number(o),this._levels[o].el.children.length||o===t?(this._levels[o].el.style.zIndex=e-Math.abs(t-o),this._onUpdateLevel(o)):(pt(this._levels[o].el),this._removeTilesAtZoom(o),this._onRemoveLevel(o),delete this._levels[o]);var a=this._levels[t],l=this._map;return a||(a=this._levels[t]={},a.el=tt("div","leaflet-tile-container leaflet-zoom-animated",this._container),a.el.style.zIndex=e,a.origin=l.project(l.unproject(l.getPixelOrigin()),t).round(),a.zoom=t,this._setZoomTransform(a,l.getCenter(),l.getZoom()),x(a.el.offsetWidth),this._onCreateLevel(a)),this._level=a,a}},_onUpdateLevel:x,_onRemoveLevel:x,_onCreateLevel:x,_pruneTiles:function(){if(this._map){var t,e,o=this._map.getZoom();if(o>this.options.maxZoom||o<this.options.minZoom){this._removeAllTiles();return}for(t in this._tiles)e=this._tiles[t],e.retain=e.current;for(t in this._tiles)if(e=this._tiles[t],e.current&&!e.active){var a=e.coords;this._retainParent(a.x,a.y,a.z,a.z-5)||this._retainChildren(a.x,a.y,a.z,a.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}},_removeTilesAtZoom:function(t){for(var e in this._tiles)this._tiles[e].coords.z===t&&this._removeTile(e)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)pt(this._levels[t].el),this._onRemoveLevel(Number(t)),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,e,o,a){var l=Math.floor(t/2),p=Math.floor(e/2),g=o-1,y=new Z(+l,+p);y.z=+g;var _=this._tileCoordsToKey(y),F=this._tiles[_];return F&&F.active?(F.retain=!0,!0):(F&&F.loaded&&(F.retain=!0),g>a?this._retainParent(l,p,g,a):!1)},_retainChildren:function(t,e,o,a){for(var l=2*t;l<2*t+2;l++)for(var p=2*e;p<2*e+2;p++){var g=new Z(l,p);g.z=o+1;var y=this._tileCoordsToKey(g),_=this._tiles[y];if(_&&_.active){_.retain=!0;continue}else _&&_.loaded&&(_.retain=!0);o+1<a&&this._retainChildren(l,p,o+1,a)}},_resetView:function(t){var e=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),e,e)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var e=this.options;return e.minNativeZoom!==void 0&&t<e.minNativeZoom?e.minNativeZoom:e.maxNativeZoom!==void 0&&e.maxNativeZoom<t?e.maxNativeZoom:t},_setView:function(t,e,o,a){var l=Math.round(e);this.options.maxZoom!==void 0&&l>this.options.maxZoom||this.options.minZoom!==void 0&&l<this.options.minZoom?l=void 0:l=this._clampZoom(l);var p=this.options.updateWhenZooming&&l!==this._tileZoom;(!a||p)&&(this._tileZoom=l,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),l!==void 0&&this._update(t),o||this._pruneTiles(),this._noPrune=!!o),this._setZoomTransforms(t,e)},_setZoomTransforms:function(t,e){for(var o in this._levels)this._setZoomTransform(this._levels[o],t,e)},_setZoomTransform:function(t,e,o){var a=this._map.getZoomScale(o,t.zoom),l=t.origin.multiplyBy(a).subtract(this._map._getNewPixelOrigin(e,o)).round();O.any3d?be(t.el,l,a):yt(t.el,l)},_resetGrid:function(){var t=this._map,e=t.options.crs,o=this._tileSize=this.getTileSize(),a=this._tileZoom,l=this._map.getPixelWorldBounds(this._tileZoom);l&&(this._globalTileRange=this._pxBoundsToTileRange(l)),this._wrapX=e.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,e.wrapLng[0]],a).x/o.x),Math.ceil(t.project([0,e.wrapLng[1]],a).x/o.y)],this._wrapY=e.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([e.wrapLat[0],0],a).y/o.x),Math.ceil(t.project([e.wrapLat[1],0],a).y/o.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(t){var e=this._map,o=e._animatingZoom?Math.max(e._animateToZoom,e.getZoom()):e.getZoom(),a=e.getZoomScale(o,this._tileZoom),l=e.project(t,this._tileZoom).floor(),p=e.getSize().divideBy(a*2);return new ot(l.subtract(p),l.add(p))},_update:function(t){var e=this._map;if(e){var o=this._clampZoom(e.getZoom());if(t===void 0&&(t=e.getCenter()),this._tileZoom!==void 0){var a=this._getTiledPixelBounds(t),l=this._pxBoundsToTileRange(a),p=l.getCenter(),g=[],y=this.options.keepBuffer,_=new ot(l.getBottomLeft().subtract([y,-y]),l.getTopRight().add([y,-y]));if(!(isFinite(l.min.x)&&isFinite(l.min.y)&&isFinite(l.max.x)&&isFinite(l.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var F in this._tiles){var D=this._tiles[F].coords;(D.z!==this._tileZoom||!_.contains(new Z(D.x,D.y)))&&(this._tiles[F].current=!1)}if(Math.abs(o-this._tileZoom)>1){this._setView(t,o);return}for(var U=l.min.y;U<=l.max.y;U++)for(var J=l.min.x;J<=l.max.x;J++){var Et=new Z(J,U);if(Et.z=this._tileZoom,!!this._isValidTile(Et)){var Pt=this._tiles[this._tileCoordsToKey(Et)];Pt?Pt.current=!0:g.push(Et)}}if(g.sort(function(Dt,Oe){return Dt.distanceTo(p)-Oe.distanceTo(p)}),g.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var Ot=document.createDocumentFragment();for(J=0;J<g.length;J++)this._addTile(g[J],Ot);this._level.el.appendChild(Ot)}}}},_isValidTile:function(t){var e=this._map.options.crs;if(!e.infinite){var o=this._globalTileRange;if(!e.wrapLng&&(t.x<o.min.x||t.x>o.max.x)||!e.wrapLat&&(t.y<o.min.y||t.y>o.max.y))return!1}if(!this.options.bounds)return!0;var a=this._tileCoordsToBounds(t);return nt(this.options.bounds).overlaps(a)},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var e=this._map,o=this.getTileSize(),a=t.scaleBy(o),l=a.add(o),p=e.unproject(a,t.z),g=e.unproject(l,t.z);return[p,g]},_tileCoordsToBounds:function(t){var e=this._tileCoordsToNwSe(t),o=new ft(e[0],e[1]);return this.options.noWrap||(o=this._map.wrapLatLngBounds(o)),o},_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},_keyToTileCoords:function(t){var e=t.split(":"),o=new Z(+e[0],+e[1]);return o.z=+e[2],o},_removeTile:function(t){var e=this._tiles[t];e&&(pt(e.el),delete this._tiles[t],this.fire("tileunload",{tile:e.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){K(t,"leaflet-tile");var e=this.getTileSize();t.style.width=e.x+"px",t.style.height=e.y+"px",t.onselectstart=x,t.onmousemove=x,O.ielt9&&this.options.opacity<1&&Bt(t,this.options.opacity)},_addTile:function(t,e){var o=this._getTilePos(t),a=this._tileCoordsToKey(t),l=this.createTile(this._wrapCoords(t),c(this._tileReady,this,t));this._initTile(l),this.createTile.length<2&&dt(c(this._tileReady,this,t,null,l)),yt(l,o),this._tiles[a]={el:l,coords:t,current:!0},e.appendChild(l),this.fire("tileloadstart",{tile:l,coords:t})},_tileReady:function(t,e,o){e&&this.fire("tileerror",{error:e,tile:o,coords:t});var a=this._tileCoordsToKey(t);o=this._tiles[a],o&&(o.loaded=+new Date,this._map._fadeAnimated?(Bt(o.el,0),ht(this._fadeFrame),this._fadeFrame=dt(this._updateOpacity,this)):(o.active=!0,this._pruneTiles()),e||(K(o.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:o.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),O.ielt9||!this._map._fadeAnimated?dt(this._pruneTiles,this):setTimeout(c(this._pruneTiles,this),250)))},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var e=new Z(this._wrapX?b(t.x,this._wrapX):t.x,this._wrapY?b(t.y,this._wrapY):t.y);return e.z=t.z,e},_pxBoundsToTileRange:function(t){var e=this.getTileSize();return new ot(t.min.unscaleBy(e).floor(),t.max.unscaleBy(e).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}});function Xa(t){return new vi(t)}var Ie=vi.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(t,e){this._url=t,e=T(this,e),e.detectRetina&&O.retina&&e.maxZoom>0?(e.tileSize=Math.floor(e.tileSize/2),e.zoomReverse?(e.zoomOffset--,e.minZoom=Math.min(e.maxZoom,e.minZoom+1)):(e.zoomOffset++,e.maxZoom=Math.max(e.minZoom,e.maxZoom-1)),e.minZoom=Math.max(0,e.minZoom)):e.zoomReverse?e.minZoom=Math.min(e.maxZoom,e.minZoom):e.maxZoom=Math.max(e.minZoom,e.maxZoom),typeof e.subdomains=="string"&&(e.subdomains=e.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(t,e){return this._url===t&&e===void 0&&(e=!0),this._url=t,e||this.redraw(),this},createTile:function(t,e){var o=document.createElement("img");return q(o,"load",c(this._tileOnLoad,this,e,o)),q(o,"error",c(this._tileOnError,this,e,o)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(o.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(o.referrerPolicy=this.options.referrerPolicy),o.alt="",o.src=this.getTileUrl(t),o},getTileUrl:function(t){var e={r:O.retina?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var o=this._globalTileRange.max.y-t.y;this.options.tms&&(e.y=o),e["-y"]=o}return W(this._url,r(e,this.options))},_tileOnLoad:function(t,e){O.ielt9?setTimeout(c(t,this,null,e),0):t(null,e)},_tileOnError:function(t,e,o){var a=this.options.errorTileUrl;a&&e.getAttribute("src")!==a&&(e.src=a),t(o,e)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,e=this.options.maxZoom,o=this.options.zoomReverse,a=this.options.zoomOffset;return o&&(t=e-t),t+a},_getSubdomain:function(t){var e=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[e]},_abortLoading:function(){var t,e;for(t in this._tiles)if(this._tiles[t].coords.z!==this._tileZoom&&(e=this._tiles[t].el,e.onload=x,e.onerror=x,!e.complete)){e.src=R;var o=this._tiles[t].coords;pt(e),delete this._tiles[t],this.fire("tileabort",{tile:e,coords:o})}},_removeTile:function(t){var e=this._tiles[t];if(e)return e.el.setAttribute("src",R),vi.prototype._removeTile.call(this,t)},_tileReady:function(t,e,o){if(!(!this._map||o&&o.getAttribute("src")===R))return vi.prototype._tileReady.call(this,t,e,o)}});function Kn(t,e){return new Ie(t,e)}var Vn=Ie.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(t,e){this._url=t;var o=r({},this.defaultWmsParams);for(var a in e)a in this.options||(o[a]=e[a]);e=T(this,e);var l=e.detectRetina&&O.retina?2:1,p=this.getTileSize();o.width=p.x*l,o.height=p.y*l,this.wmsParams=o},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var e=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[e]=this._crs.code,Ie.prototype.onAdd.call(this,t)},getTileUrl:function(t){var e=this._tileCoordsToNwSe(t),o=this._crs,a=ut(o.project(e[0]),o.project(e[1])),l=a.min,p=a.max,g=(this._wmsVersion>=1.3&&this._crs===Hn?[l.y,l.x,p.y,p.x]:[l.x,l.y,p.x,p.y]).join(","),y=Ie.prototype.getTileUrl.call(this,t);return y+N(this.wmsParams,y,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+g},setParams:function(t,e){return r(this.wmsParams,t),e||this.redraw(),this}});function Qa(t,e){return new Vn(t,e)}Ie.WMS=Vn,Kn.wms=Qa;var se=Wt.extend({options:{padding:.1},initialize:function(t){T(this,t),f(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),K(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,e){var o=this._map.getZoomScale(e,this._zoom),a=this._map.getSize().multiplyBy(.5+this.options.padding),l=this._map.project(this._center,e),p=a.multiplyBy(-o).add(l).subtract(this._map._getNewPixelOrigin(t,e));O.any3d?be(this._container,p,o):yt(this._container,p)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var t in this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){var t=this.options.padding,e=this._map.getSize(),o=this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();this._bounds=new ot(o,o.add(e.multiplyBy(1+t*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Jn=se.extend({options:{tolerance:0},getEvents:function(){var t=se.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){se.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");q(t,"mousemove",this._onMouseMove,this),q(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),q(t,"mouseout",this._handleMouseOut,this),t._leaflet_disable_events=!0,this._ctx=t.getContext("2d")},_destroyContainer:function(){ht(this._redrawRequest),delete this._ctx,pt(this._container),at(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var t;this._redrawBounds=null;for(var e in this._layers)t=this._layers[e],t._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){se.prototype._update.call(this);var t=this._bounds,e=this._container,o=t.getSize(),a=O.retina?2:1;yt(e,t.min),e.width=a*o.x,e.height=a*o.y,e.style.width=o.x+"px",e.style.height=o.y+"px",O.retina&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire("update")}},_reset:function(){se.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t),this._layers[f(t)]=t;var e=t._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=e),this._drawLast=e,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var e=t._order,o=e.next,a=e.prev;o?o.prev=a:this._drawLast=a,a?a.next=o:this._drawFirst=o,delete t._order,delete this._layers[f(t)],this._requestRedraw(t)},_updatePath:function(t){this._extendRedrawBounds(t),t._project(),t._update(),this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if(typeof t.options.dashArray=="string"){var e=t.options.dashArray.split(/[, ]+/),o=[],a,l;for(l=0;l<e.length;l++){if(a=Number(e[l]),isNaN(a))return;o.push(a)}t.options._dashArray=o}else t.options._dashArray=t.options.dashArray},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||dt(this._redraw,this))},_extendRedrawBounds:function(t){if(t._pxBounds){var e=(t.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new ot,this._redrawBounds.extend(t._pxBounds.min.subtract([e,e])),this._redrawBounds.extend(t._pxBounds.max.add([e,e]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t=this._redrawBounds;if(t){var e=t.getSize();this._ctx.clearRect(t.min.x,t.min.y,e.x,e.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var t,e=this._redrawBounds;if(this._ctx.save(),e){var o=e.getSize();this._ctx.beginPath(),this._ctx.rect(e.min.x,e.min.y,o.x,o.y),this._ctx.clip()}this._drawing=!0;for(var a=this._drawFirst;a;a=a.next)t=a.layer,(!e||t._pxBounds&&t._pxBounds.intersects(e))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,e){if(this._drawing){var o,a,l,p,g=t._parts,y=g.length,_=this._ctx;if(y){for(_.beginPath(),o=0;o<y;o++){for(a=0,l=g[o].length;a<l;a++)p=g[o][a],_[a?"lineTo":"moveTo"](p.x,p.y);e&&_.closePath()}this._fillStroke(_,t)}}},_updateCircle:function(t){if(!(!this._drawing||t._empty())){var e=t._point,o=this._ctx,a=Math.max(Math.round(t._radius),1),l=(Math.max(Math.round(t._radiusY),1)||a)/a;l!==1&&(o.save(),o.scale(1,l)),o.beginPath(),o.arc(e.x,e.y/l,a,0,Math.PI*2,!1),l!==1&&o.restore(),this._fillStroke(o,t)}},_fillStroke:function(t,e){var o=e.options;o.fill&&(t.globalAlpha=o.fillOpacity,t.fillStyle=o.fillColor||o.color,t.fill(o.fillRule||"evenodd")),o.stroke&&o.weight!==0&&(t.setLineDash&&t.setLineDash(e.options&&e.options._dashArray||[]),t.globalAlpha=o.opacity,t.lineWidth=o.weight,t.strokeStyle=o.color,t.lineCap=o.lineCap,t.lineJoin=o.lineJoin,t.stroke())},_onClick:function(t){for(var e=this._map.mouseEventToLayerPoint(t),o,a,l=this._drawFirst;l;l=l.next)o=l.layer,o.options.interactive&&o._containsPoint(e)&&(!(t.type==="click"||t.type==="preclick")||!this._map._draggableMoved(o))&&(a=o);this._fireEvent(a?[a]:!1,t)},_onMouseMove:function(t){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var e=this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t,e)}},_handleMouseOut:function(t){var e=this._hoveredLayer;e&&(vt(this._container,"leaflet-interactive"),this._fireEvent([e],t,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(t,e){if(!this._mouseHoverThrottled){for(var o,a,l=this._drawFirst;l;l=l.next)o=l.layer,o.options.interactive&&o._containsPoint(e)&&(a=o);a!==this._hoveredLayer&&(this._handleMouseOut(t),a&&(K(this._container,"leaflet-interactive"),this._fireEvent([a],t,"mouseover"),this._hoveredLayer=a)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,t),this._mouseHoverThrottled=!0,setTimeout(c(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(t,e,o){this._map._fireDOMEvent(e,o||e.type,t)},_bringToFront:function(t){var e=t._order;if(e){var o=e.next,a=e.prev;if(o)o.prev=a;else return;a?a.next=o:o&&(this._drawFirst=o),e.prev=this._drawLast,this._drawLast.next=e,e.next=null,this._drawLast=e,this._requestRedraw(t)}},_bringToBack:function(t){var e=t._order;if(e){var o=e.next,a=e.prev;if(a)a.next=o;else return;o?o.prev=a:a&&(this._drawLast=a),e.prev=null,e.next=this._drawFirst,this._drawFirst.prev=e,this._drawFirst=e,this._requestRedraw(t)}}});function Yn(t){return O.canvas?new Jn(t):null}var xi=(function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch{}return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}})(),tr={_initContainer:function(){this._container=tt("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(se.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var e=t._container=xi("shape");K(e,"leaflet-vml-shape "+(this.options.className||"")),e.coordsize="1 1",t._path=xi("path"),e.appendChild(t._path),this._updateStyle(t),this._layers[f(t)]=t},_addPath:function(t){var e=t._container;this._container.appendChild(e),t.options.interactive&&t.addInteractiveTarget(e)},_removePath:function(t){var e=t._container;pt(e),t.removeInteractiveTarget(e),delete this._layers[f(t)]},_updateStyle:function(t){var e=t._stroke,o=t._fill,a=t.options,l=t._container;l.stroked=!!a.stroke,l.filled=!!a.fill,a.stroke?(e||(e=t._stroke=xi("stroke")),l.appendChild(e),e.weight=a.weight+"px",e.color=a.color,e.opacity=a.opacity,a.dashArray?e.dashStyle=H(a.dashArray)?a.dashArray.join(" "):a.dashArray.replace(/( *, *)/g," "):e.dashStyle="",e.endcap=a.lineCap.replace("butt","flat"),e.joinstyle=a.lineJoin):e&&(l.removeChild(e),t._stroke=null),a.fill?(o||(o=t._fill=xi("fill")),l.appendChild(o),o.color=a.fillColor||a.color,o.opacity=a.fillOpacity):o&&(l.removeChild(o),t._fill=null)},_updateCircle:function(t){var e=t._point.round(),o=Math.round(t._radius),a=Math.round(t._radiusY||o);this._setPath(t,t._empty()?"M0 0":"AL "+e.x+","+e.y+" "+o+","+a+" 0,"+65535*360)},_setPath:function(t,e){t._path.v=e},_bringToFront:function(t){Ae(t._container)},_bringToBack:function(t){ze(t._container)}},to=O.vml?xi:me,yi=se.extend({_initContainer:function(){this._container=to("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=to("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){pt(this._container),at(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){se.prototype._update.call(this);var t=this._bounds,e=t.getSize(),o=this._container;(!this._svgSize||!this._svgSize.equals(e))&&(this._svgSize=e,o.setAttribute("width",e.x),o.setAttribute("height",e.y)),yt(o,t.min),o.setAttribute("viewBox",[t.min.x,t.min.y,e.x,e.y].join(" ")),this.fire("update")}},_initPath:function(t){var e=t._path=to("path");t.options.className&&K(e,t.options.className),t.options.interactive&&K(e,"leaflet-interactive"),this._updateStyle(t),this._layers[f(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){pt(t._path),t.removeInteractiveTarget(t._path),delete this._layers[f(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var e=t._path,o=t.options;e&&(o.stroke?(e.setAttribute("stroke",o.color),e.setAttribute("stroke-opacity",o.opacity),e.setAttribute("stroke-width",o.weight),e.setAttribute("stroke-linecap",o.lineCap),e.setAttribute("stroke-linejoin",o.lineJoin),o.dashArray?e.setAttribute("stroke-dasharray",o.dashArray):e.removeAttribute("stroke-dasharray"),o.dashOffset?e.setAttribute("stroke-dashoffset",o.dashOffset):e.removeAttribute("stroke-dashoffset")):e.setAttribute("stroke","none"),o.fill?(e.setAttribute("fill",o.fillColor||o.color),e.setAttribute("fill-opacity",o.fillOpacity),e.setAttribute("fill-rule",o.fillRule||"evenodd")):e.setAttribute("fill","none"))},_updatePoly:function(t,e){this._setPath(t,Di(t._parts,e))},_updateCircle:function(t){var e=t._point,o=Math.max(Math.round(t._radius),1),a=Math.max(Math.round(t._radiusY),1)||o,l="a"+o+","+a+" 0 1,0 ",p=t._empty()?"M0 0":"M"+(e.x-o)+","+e.y+l+o*2+",0 "+l+-o*2+",0 ";this._setPath(t,p)},_setPath:function(t,e){t._path.setAttribute("d",e)},_bringToFront:function(t){Ae(t._path)},_bringToBack:function(t){ze(t._path)}});O.vml&&yi.include(tr);function Xn(t){return O.svg||O.vml?new yi(t):null}X.include({getRenderer:function(t){var e=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer;return e||(e=this._renderer=this._createRenderer()),this.hasLayer(e)||this.addLayer(e),e},_getPaneRenderer:function(t){if(t==="overlayPane"||t===void 0)return!1;var e=this._paneRenderers[t];return e===void 0&&(e=this._createRenderer({pane:t}),this._paneRenderers[t]=e),e},_createRenderer:function(t){return this.options.preferCanvas&&Yn(t)||Xn(t)}});var Qn=Ne.extend({initialize:function(t,e){Ne.prototype.initialize.call(this,this._boundsToLatLngs(t),e)},setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return t=nt(t),[t.getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});function er(t,e){return new Qn(t,e)}yi.create=to,yi.pointsToPath=Di,ne.geometryToLayer=qi,ne.coordsToLatLng=Ro,ne.coordsToLatLngs=Ki,ne.latLngToCoords=Ho,ne.latLngsToCoords=Vi,ne.getFeature=Be,ne.asFeature=Ji,X.mergeOptions({boxZoom:!0});var ts=Xt.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){q(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){at(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){pt(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||t.which!==1&&t.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),ci(),ko(),this._startPoint=this._map.mouseEventToContainerPoint(t),q(document,{contextmenu:ke,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=tt("div","leaflet-zoom-box",this._container),K(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var e=new ot(this._point,this._startPoint),o=e.getSize();yt(this._box,e.min),this._box.style.width=o.x+"px",this._box.style.height=o.y+"px"},_finish:function(){this._moved&&(pt(this._box),vt(this._container,"leaflet-crosshair")),hi(),Fo(),at(document,{contextmenu:ke,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){if(!(t.which!==1&&t.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(c(this._resetState,this),0);var e=new ft(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(e).fire("boxzoomend",{boxZoomBounds:e})}},_onKeyDown:function(t){t.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});X.addInitHook("addHandler","boxZoom",ts),X.mergeOptions({doubleClickZoom:!0});var es=Xt.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var e=this._map,o=e.getZoom(),a=e.options.zoomDelta,l=t.originalEvent.shiftKey?o-a:o+a;e.options.doubleClickZoom==="center"?e.setZoom(l):e.setZoomAround(t.containerPoint,l)}});X.addInitHook("addHandler","doubleClickZoom",es),X.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var is=Xt.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new de(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}K(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){vt(this._map._container,"leaflet-grab"),vt(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t=this._map;if(t._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var e=nt(this._map.options.maxBounds);this._offsetLimit=ut(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){if(this._map.options.inertia){var e=this._lastTime=+new Date,o=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(o),this._times.push(e),this._prunePositions(e)}this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){for(;this._positions.length>1&&t-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),e=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=e.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,e){return t-(t-e)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var t=this._draggable._newPos.subtract(this._draggable._startPos),e=this._offsetLimit;t.x<e.min.x&&(t.x=this._viscousLimit(t.x,e.min.x)),t.y<e.min.y&&(t.y=this._viscousLimit(t.y,e.min.y)),t.x>e.max.x&&(t.x=this._viscousLimit(t.x,e.max.x)),t.y>e.max.y&&(t.y=this._viscousLimit(t.y,e.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},_onPreDragWrap:function(){var t=this._worldWidth,e=Math.round(t/2),o=this._initialWorldOffset,a=this._draggable._newPos.x,l=(a-e+o)%t+e-o,p=(a+e+o)%t-e-o,g=Math.abs(l+o)<Math.abs(p+o)?l:p;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=g},_onDragEnd:function(t){var e=this._map,o=e.options,a=!o.inertia||t.noInertia||this._times.length<2;if(e.fire("dragend",t),a)e.fire("moveend");else{this._prunePositions(+new Date);var l=this._lastPos.subtract(this._positions[0]),p=(this._lastTime-this._times[0])/1e3,g=o.easeLinearity,y=l.multiplyBy(g/p),_=y.distanceTo([0,0]),F=Math.min(o.inertiaMaxSpeed,_),D=y.multiplyBy(F/_),U=F/(o.inertiaDeceleration*g),J=D.multiplyBy(-U/2).round();!J.x&&!J.y?e.fire("moveend"):(J=e._limitOffset(J,e.options.maxBounds),dt(function(){e.panBy(J,{duration:U,easeLinearity:g,noMoveStart:!0,animate:!0})}))}}});X.addInitHook("addHandler","dragging",is),X.mergeOptions({keyboard:!0,keyboardPanDelta:80});var os=Xt.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),q(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),at(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var t=document.body,e=document.documentElement,o=t.scrollTop||e.scrollTop,a=t.scrollLeft||e.scrollLeft;this._map._container.focus(),window.scrollTo(a,o)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){var e=this._panKeys={},o=this.keyCodes,a,l;for(a=0,l=o.left.length;a<l;a++)e[o.left[a]]=[-1*t,0];for(a=0,l=o.right.length;a<l;a++)e[o.right[a]]=[t,0];for(a=0,l=o.down.length;a<l;a++)e[o.down[a]]=[0,t];for(a=0,l=o.up.length;a<l;a++)e[o.up[a]]=[0,-1*t]},_setZoomDelta:function(t){var e=this._zoomKeys={},o=this.keyCodes,a,l;for(a=0,l=o.zoomIn.length;a<l;a++)e[o.zoomIn[a]]=t;for(a=0,l=o.zoomOut.length;a<l;a++)e[o.zoomOut[a]]=-t},_addHooks:function(){q(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){at(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var e=t.keyCode,o=this._map,a;if(e in this._panKeys){if(!o._panAnim||!o._panAnim._inProgress)if(a=this._panKeys[e],t.shiftKey&&(a=G(a).multiplyBy(3)),o.options.maxBounds&&(a=o._limitOffset(G(a),o.options.maxBounds)),o.options.worldCopyJump){var l=o.wrapLatLng(o.unproject(o.project(o.getCenter()).add(a)));o.panTo(l)}else o.panBy(a)}else if(e in this._zoomKeys)o.setZoom(o.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[e]);else if(e===27&&o._popup&&o._popup.options.closeOnEscapeKey)o.closePopup();else return;ke(t)}}});X.addInitHook("addHandler","keyboard",os),X.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var ns=Xt.extend({addHooks:function(){q(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){at(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var e=Ln(t),o=this._map.options.wheelDebounceTime;this._delta+=e,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var a=Math.max(o-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(c(this._performZoom,this),a),ke(t)},_performZoom:function(){var t=this._map,e=t.getZoom(),o=this._map.options.zoomSnap||0;t._stop();var a=this._delta/(this._map.options.wheelPxPerZoomLevel*4),l=4*Math.log(2/(1+Math.exp(-Math.abs(a))))/Math.LN2,p=o?Math.ceil(l/o)*o:l,g=t._limitZoom(e+(this._delta>0?p:-p))-e;this._delta=0,this._startTime=null,g&&(t.options.scrollWheelZoom==="center"?t.setZoom(e+g):t.setZoomAround(this._lastMousePos,e+g))}});X.addInitHook("addHandler","scrollWheelZoom",ns);var ir=600;X.mergeOptions({tapHold:O.touchNative&&O.safari&&O.mobile,tapTolerance:15});var ss=Xt.extend({addHooks:function(){q(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){at(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(clearTimeout(this._holdTimeout),t.touches.length===1){var e=t.touches[0];this._startPos=this._newPos=new Z(e.clientX,e.clientY),this._holdTimeout=setTimeout(c(function(){this._cancel(),this._isTapValid()&&(q(document,"touchend",Ct),q(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",e))},this),ir),q(document,"touchend touchcancel contextmenu",this._cancel,this),q(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function t(){at(document,"touchend",Ct),at(document,"touchend touchcancel",t)},_cancel:function(){clearTimeout(this._holdTimeout),at(document,"touchend touchcancel contextmenu",this._cancel,this),at(document,"touchmove",this._onMove,this)},_onMove:function(t){var e=t.touches[0];this._newPos=new Z(e.clientX,e.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(t,e){var o=new MouseEvent(t,{bubbles:!0,cancelable:!0,view:window,screenX:e.screenX,screenY:e.screenY,clientX:e.clientX,clientY:e.clientY});o._simulated=!0,e.target.dispatchEvent(o)}});X.addInitHook("addHandler","tapHold",ss),X.mergeOptions({touchZoom:O.touch,bounceAtZoomLimits:!0});var as=Xt.extend({addHooks:function(){K(this._map._container,"leaflet-touch-zoom"),q(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){vt(this._map._container,"leaflet-touch-zoom"),at(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var e=this._map;if(!(!t.touches||t.touches.length!==2||e._animatingZoom||this._zooming)){var o=e.mouseEventToContainerPoint(t.touches[0]),a=e.mouseEventToContainerPoint(t.touches[1]);this._centerPoint=e.getSize()._divideBy(2),this._startLatLng=e.containerPointToLatLng(this._centerPoint),e.options.touchZoom!=="center"&&(this._pinchStartLatLng=e.containerPointToLatLng(o.add(a)._divideBy(2))),this._startDist=o.distanceTo(a),this._startZoom=e.getZoom(),this._moved=!1,this._zooming=!0,e._stop(),q(document,"touchmove",this._onTouchMove,this),q(document,"touchend touchcancel",this._onTouchEnd,this),Ct(t)}},_onTouchMove:function(t){if(!(!t.touches||t.touches.length!==2||!this._zooming)){var e=this._map,o=e.mouseEventToContainerPoint(t.touches[0]),a=e.mouseEventToContainerPoint(t.touches[1]),l=o.distanceTo(a)/this._startDist;if(this._zoom=e.getScaleZoom(l,this._startZoom),!e.options.bounceAtZoomLimits&&(this._zoom<e.getMinZoom()&&l<1||this._zoom>e.getMaxZoom()&&l>1)&&(this._zoom=e._limitZoom(this._zoom)),e.options.touchZoom==="center"){if(this._center=this._startLatLng,l===1)return}else{var p=o._add(a)._divideBy(2)._subtract(this._centerPoint);if(l===1&&p.x===0&&p.y===0)return;this._center=e.unproject(e.project(this._pinchStartLatLng,this._zoom).subtract(p),this._zoom)}this._moved||(e._moveStart(!0,!1),this._moved=!0),ht(this._animRequest);var g=c(e._move,e,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=dt(g,this,!0),Ct(t)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,ht(this._animRequest),at(document,"touchmove",this._onTouchMove,this),at(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});X.addInitHook("addHandler","touchZoom",as),X.BoxZoom=ts,X.DoubleClickZoom=es,X.Drag=is,X.Keyboard=os,X.ScrollWheelZoom=ns,X.TapHold=ss,X.TouchZoom=as,n.Bounds=ot,n.Browser=O,n.CRS=M,n.Canvas=Jn,n.Circle=Oo,n.CircleMarker=Gi,n.Class=St,n.Control=Ut,n.DivIcon=qn,n.DivOverlay=Qt,n.DomEvent=ba,n.DomUtil=xa,n.Draggable=de,n.Evented=Kt,n.FeatureGroup=ie,n.GeoJSON=ne,n.GridLayer=vi,n.Handler=Xt,n.Icon=De,n.ImageOverlay=Yi,n.LatLng=Q,n.LatLngBounds=ft,n.Layer=Wt,n.LayerGroup=Me,n.LineUtil=za,n.Map=X,n.Marker=Wi,n.Mixin=Ta,n.Path=ce,n.Point=Z,n.PolyUtil=La,n.Polygon=Ne,n.Polyline=oe,n.Popup=Xi,n.PosAnimation=Sn,n.Projection=Ma,n.Rectangle=Qn,n.Renderer=se,n.SVG=yi,n.SVGOverlay=Gn,n.TileLayer=Ie,n.Tooltip=Qi,n.Transformation=fe,n.Util=Nt,n.VideoOverlay=Wn,n.bind=c,n.bounds=ut,n.canvas=Yn,n.circle=ja,n.circleMarker=Ha,n.control=fi,n.divIcon=Ya,n.extend=r,n.featureGroup=Ia,n.geoJSON=Un,n.geoJson=Wa,n.gridLayer=Xa,n.icon=Oa,n.imageOverlay=Ga,n.latLng=V,n.latLngBounds=nt,n.layerGroup=Ba,n.map=_a,n.marker=Ra,n.point=G,n.polygon=Ua,n.polyline=Za,n.popup=Va,n.rectangle=er,n.setOptions=T,n.stamp=f,n.svg=Xn,n.svgOverlay=Ka,n.tileLayer=Kn,n.tooltip=Ja,n.transformation=ee,n.version=s,n.videoOverlay=qa;var or=window.L;n.noConflict=function(){return window.L=or,this},window.L=n}))})(wi,wi.exports)),wi.exports}var yl=xl();const xt=ml(yl);var co=function(h,i,n,s){var r=arguments.length,d=r<3?i:s===null?s=Object.getOwnPropertyDescriptor(i,n):s,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")d=Reflect.decorate(h,i,n,s);else for(var u=h.length-1;u>=0;u--)(c=h[u])&&(d=(r<3?c(d):r>3?c(i,n,d):c(i,n))||d);return r>3&&d&&Object.defineProperty(i,n,d),d};function bl(h){if(h.length<=2)return h;const i=[...h].sort((d,c)=>d[0]===c[0]?d[1]-c[1]:d[0]-c[0]),n=(d,c,u)=>(c[0]-d[0])*(u[1]-d[1])-(c[1]-d[1])*(u[0]-d[0]),s=[];for(const d of i){for(;s.length>=2&&n(s[s.length-2],s[s.length-1],d)<=0;)s.pop();s.push(d)}const r=[];for(let d=i.length-1;d>=0;d--){const c=i[d];for(;r.length>=2&&n(r[r.length-2],r[r.length-1],c)<=0;)r.pop();r.push(c)}return r.pop(),s.pop(),s.concat(r)}var Ue;let Li=(Ue=class extends Ft{constructor(){super(...arguments),this.activeFilter="all",this.isLocating=!1,this.markerMap=new Map}connectedCallback(){super.connectedCallback(),this.unsubscribe=m.subscribe(()=>{this.requestUpdate(),this.updateMapLayers()})}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.unsubscribe)==null||i.call(this),this.destroyMap()}firstUpdated(i){super.firstUpdated(i),setTimeout(()=>{this.initMap()},60)}updated(i){super.updated(i),i.has("activeFilter")&&this.updateMapLayers(),this.map&&setTimeout(()=>{var n;return(n=this.map)==null?void 0:n.invalidateSize()},50)}destroyMap(){this.map&&(this.map.remove(),this.map=void 0,this.markersLayer=void 0,this.trailsLayer=void 0,this.territoryLayer=void 0,this.markerMap.clear())}getGeoEvents(){return(m.events||[]).filter(n=>typeof n.latitude=="number"&&typeof n.longitude=="number")}getFilteredEvents(){const i=this.getGeoEvents();return this.activeFilter==="all"?i:i.filter(n=>n.eventType===this.activeFilter)}initMap(){var d;const i=(d=this.renderRoot)==null?void 0:d.querySelector("#leaflet-map");if(!i||this.map)return;const n=this.getGeoEvents();let s=[37.5665,126.978],r=13;n.length>0&&(s=[n[0].latitude,n[0].longitude],r=15),this.map=xt.map(i,{zoomControl:!1,attributionControl:!1}).setView(s,r),xt.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png",{maxZoom:19,subdomains:"abcd"}).addTo(this.map),xt.control.zoom({position:"bottomright"}).addTo(this.map),this.territoryLayer=xt.layerGroup().addTo(this.map),this.trailsLayer=xt.layerGroup().addTo(this.map),this.markersLayer=xt.layerGroup().addTo(this.map),this.updateMapLayers(n.length>1),setTimeout(()=>{var c;(c=this.map)==null||c.invalidateSize()},150)}updateMapLayers(i=!1){var f;if(!this.map||!this.markersLayer||!this.trailsLayer||!this.territoryLayer)return;this.markersLayer.clearLayers(),this.trailsLayer.clearLayers(),this.territoryLayer.clearLayers(),this.markerMap.clear();const n=this.getFilteredEvents(),s=this.getGeoEvents(),r=m.currentLocale==="ko",d=((f=m.currentPet)==null?void 0:f.name)||(r?"우리 댕댕이":"Pet");if(s.length>=3){const v=s.map(x=>[x.latitude,x.longitude]),b=bl(v);if(b.length>=3){const x=xt.polygon(b,{color:"#17140F",weight:2.5,dashArray:"6, 8",fillColor:"#1FC99B",fillOpacity:.16});x.bindPopup(`
          <div style="font-family: 'Bricolage Grotesque', sans-serif; font-size: 13px; font-weight: 800; color: #17140F; text-align: center; padding: 4px 6px;">
            🐾 <strong>${d}</strong>'s ${r?"영역":"Territory"}
            <div style="font-size: 10.5px; color: #6A6152; font-weight: 600; margin-top: 2px;">
              ${s.length} ${r?"개의 기록 지점":"tagged spots"}
            </div>
          </div>
        `),this.territoryLayer.addLayer(x)}}const c=[...s].sort((v,b)=>new Date(v.timestamp).getTime()-new Date(b.timestamp).getTime()).map(v=>[v.latitude,v.longitude]);if(c.length>=2){const v=xt.polyline(c,{color:"#17140F",weight:5.5,opacity:.85,lineCap:"round",lineJoin:"round"}),b=xt.polyline(c,{color:"#FF5A3C",weight:3,dashArray:"5, 6",opacity:1,lineCap:"round"});this.trailsLayer.addLayer(v),this.trailsLayer.addLayer(b)}const u=xt.latLngBounds([]);n.forEach(v=>{var R;const b=v.latitude,x=v.longitude;u.extend([b,x]);const k=v.eventType==="poop"?"💩":v.eventType==="pee"?"💧":v.eventType==="walk"?"🐾":"📍",P=`
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
            ${k}
          </div>
        </div>
      `,T=xt.divIcon({className:"dooty-map-marker-icon",html:P,iconSize:[0,0]}),N=xt.marker([b,x],{icon:T}),z=((R=v.metadata)==null?void 0:R.locationName)||(v.notes?so(v.notes,v.eventType,r):`${b.toFixed(4)}, ${x.toFixed(4)}`),W=new Date(v.timestamp).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),H=new Date(v.timestamp).toLocaleDateString(),et=`
        <div style="padding: 4px 6px; min-width: 140px; font-family: 'Nunito', sans-serif;">
          <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px;">
            <span style="font-size: 18px;">${k}</span>
            <div>
              <div style="font-family: 'Bricolage Grotesque', sans-serif; font-weight: 800; font-size: 14px; color: #17140F;">
                ${v.eventType.toUpperCase()}
              </div>
              <div style="font-size: 10px; font-weight: 700; color: #6A6152;">
                ${H} · ${W}
              </div>
            </div>
          </div>
          <div style="font-size: 12px; font-weight: 800; color: #17140F; margin-bottom: 2px;">
            ${z}
          </div>
          <div style="font-size: 10.5px; color: #9A9080; font-weight: 600;">
            ${b.toFixed(5)}, ${x.toFixed(5)} · ${v.loggedByName||"Owner"}
          </div>
        </div>
      `;N.bindPopup(et),N.on("click",()=>{this.selectedEventId=v.id,this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:`${v.eventType.toUpperCase()} · ${z}`,sub:`${b.toFixed(4)}, ${x.toFixed(4)} · ${v.loggedByName}`}}))}),this.markersLayer.addLayer(N),this.markerMap.set(v.id,N)}),i&&u.isValid()&&this.map.fitBounds(u,{padding:[40,40],maxZoom:17})}handleLocateMe(){if(!navigator.geolocation||!this.map){alert("Geolocation is not supported by your browser");return}this.isLocating=!0,navigator.geolocation.getCurrentPosition(i=>{if(this.isLocating=!1,!this.map)return;const n=i.coords.latitude,s=i.coords.longitude,r=i.coords.accuracy;this.userMarker&&this.map.removeLayer(this.userMarker),this.userAccuracyCircle&&this.map.removeLayer(this.userAccuracyCircle),this.userAccuracyCircle=xt.circle([n,s],{radius:Math.min(r,200),color:"#2B5BE8",weight:1.5,fillColor:"#2B5BE8",fillOpacity:.12}).addTo(this.map),this.userMarker=xt.circleMarker([n,s],{radius:8,color:"#FFF",weight:2.5,fillColor:"#2B5BE8",fillOpacity:1}).addTo(this.map),this.map.flyTo([n,s],16,{duration:1.2})},i=>{this.isLocating=!1,console.warn("Geolocation failed:",i)},{enableHighAccuracy:!0,timeout:8e3})}handleFitAll(){if(!this.map)return;const i=this.getGeoEvents();if(i.length===0)return;const n=xt.latLngBounds(i.map(s=>[s.latitude,s.longitude]));this.map.fitBounds(n,{padding:[40,40],maxZoom:17})}handleSpotClick(i){if(this.selectedEventId=i.id,!this.map||i.latitude===void 0||i.longitude===void 0)return;this.map.flyTo([i.latitude,i.longitude],17,{duration:1});const n=this.markerMap.get(i.id);n&&setTimeout(()=>n.openPopup(),400)}render(){const i=m.currentLocale==="ko",n=this.getGeoEvents(),s=this.getFilteredEvents(),r=n.filter(u=>u.eventType==="poop").length,d=n.filter(u=>u.eventType==="pee").length,c=n.filter(u=>u.eventType==="walk").length;return w`
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
              ${i?"전체":"All"} (${n.length})
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
              💧 ${i?"쉬":"Pee"} (${d})
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
            ${n.length>0?`${n.length} ${i?"개 지점":"spots"}`:i?"기록 없음":"0 spots"}
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
          ${s.length>0?s.slice(0,10).map((u,f)=>{var x,k,S;const v=this.selectedEventId===u.id,b=((x=u.metadata)==null?void 0:x.locationName)||(u.notes?so(u.notes,u.eventType,i):`${u.eventType.toUpperCase()} at GPS spot`);return w`
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
                      <div class="spot-name">${b}</div>
                      <div class="spot-note">
                        ${new Date(u.timestamp).toLocaleDateString()} ·
                        ${(k=u.latitude)==null?void 0:k.toFixed(4)}, ${(S=u.longitude)==null?void 0:S.toFixed(4)} ·
                        ${u.loggedByName||"Owner"}
                      </div>
                    </div>
                    <div class="spot-fly-icon">📍</div>
                  </div>
                `}):w`
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
    `}},Ue.styles=At`
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
  `,Ue);co([A()],Li.prototype,"activeFilter",void 0);co([A()],Li.prototype,"isLocating",void 0);co([A()],Li.prototype,"selectedEventId",void 0);Li=co([zt("dooty-map")],Li);var hn=function(h,i,n,s){var r=arguments.length,d=r<3?i:s===null?s=Object.getOwnPropertyDescriptor(i,n):s,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")d=Reflect.decorate(h,i,n,s);else for(var u=h.length-1;u>=0;u--)(c=h[u])&&(d=(r<3?c(d):r>3?c(i,n,d):c(i,n))||d);return r>3&&d&&Object.defineProperty(i,n,d),d},We;let ao=(We=class extends Ft{constructor(){super(...arguments),this.medDone={0:!0,1:!1,2:!1},this.uncheckState={}}connectedCallback(){super.connectedCallback(),this.unsubscribe=m.subscribe(()=>this.requestUpdate())}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.unsubscribe)==null||i.call(this)}toggleMedChecked(i){this.uncheckState={...this.uncheckState,[i]:!this.uncheckState[i]}}renderWeightChart(i){const n=(m.events||[]).filter(z=>{var W;return z.eventType==="weight"&&((W=z.metadata)==null?void 0:W.weightKg)}).sort((z,W)=>new Date(z.timestamp).getTime()-new Date(W.timestamp).getTime());if(n.length===0)return w`
        <div style="padding: 16px 0; text-align: center;">
          <div style="font-size: 28px; margin-bottom: 6px;">⚖️</div>
          <div style="font-size: 14px; font-weight: 800; color: #17140F;">
            ${i?"등록된 체중 기록이 없습니다":"No weigh-ins recorded yet"}
          </div>
          <div style="font-size: 12px; font-weight: 600; color: #6A6152; margin-top: 4px; line-height: 1.4;">
            ${i?"하단 + 버튼을 눌러 첫 몸무게를 기록해보세요.":"Tap the orange + button below to log your pet’s weight."}
          </div>
        </div>
      `;const s=n.map(z=>{var R;const W=new Date(z.timestamp),H=W.toLocaleDateString([],{month:"short"}),et=W.getFullYear().toString().slice(-2);return{weight:Number(((R=z.metadata)==null?void 0:R.weightKg)||parseFloat(z.notes||"0")||0),dateLabel:`${H} '${et}`}}),r=s.map(z=>z.weight),d=Math.min(...r),u=Math.max(...r)-d||1,f=320,v=110,b=22,k=v-b-24,S=s.map((z,W)=>{const H=s.length===1?f/2:16+W/(s.length-1)*(f-32),et=s.length===1?b+k/2:b+k-(z.weight-d)/u*k;return{x:H,y:et,...z}}),P=S.map((z,W)=>`${W===0?"M":"L"} ${z.x.toFixed(1)} ${z.y.toFixed(1)}`).join(" "),T=S[S.length-1],N=T.weight-S[0].weight;return w`
      <div class="weight-stat-row">
        <div>
          <span class="weight-current-val">${T.weight.toFixed(1)} kg</span>
          ${S.length>1?w`
                <span style="font-size: 11px; font-weight: 800; color: ${N>=0?"#1FC99B":"#FF5A3C"}; margin-left: 6px;">
                  ${N>=0?"+":""}${N.toFixed(1)} kg
                </span>
              `:null}
        </div>
        <div class="weight-current-date">
          ${i?`최근 측정: ${T.dateLabel}`:`Latest: ${T.dateLabel}`}
        </div>
      </div>

      <div style="height: 110px; width: 100%; position: relative;">
        <svg viewBox="0 0 ${f} ${v}" style="width: 100%; height: 100%; overflow: visible;">
          <!-- Grid lines -->
          <line x1="12" y1="${b+k}" x2="${f-12}" y2="${b+k}" stroke="#E8DFCE" stroke-width="1.5" stroke-dasharray="4,4" />
          <line x1="12" y1="${b}" x2="${f-12}" y2="${b}" stroke="#E8DFCE" stroke-width="1.5" stroke-dasharray="4,4" />

          <!-- Path -->
          ${S.length>1?w`<path d="${P}" fill="none" stroke="#17140F" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round" />`:null}

          <!-- Data Points with Actual Weights -->
          ${S.map((z,W)=>{const H=W===S.length-1;return w`
              <circle
                cx="${z.x}"
                cy="${z.y}"
                r="${H?6:4.5}"
                fill="${H?"#FF5A3C":"#FFCE2E"}"
                stroke="#17140F"
                stroke-width="2.5"
              />
              <rect
                x="${z.x-17}"
                y="${z.y-19}"
                width="34"
                height="14"
                rx="4"
                fill="#17140F"
              />
              <text
                x="${z.x}"
                y="${z.y-9}"
                font-size="8.5"
                font-weight="800"
                font-family="sans-serif"
                fill="#FFFFFF"
                text-anchor="middle"
              >
                ${z.weight.toFixed(1)}k
              </text>
            `})}
        </svg>
      </div>

      <div style="display: flex; justify-content: space-between; margin-top: 6px; font-size: 9.5px; font-weight: 800; color: #8A7F68; letter-spacing: 0.5px;">
        ${S.map(z=>w`<span>${z.dateLabel}</span>`)}
      </div>
    `}render(){var et,R;const i=m.currentLocale==="ko",n=m.currentPet,s=(n==null?void 0:n.name)||(i?"반려견":"My Pet");let r="";if(n!=null&&n.birthday){const C=new Date(n.birthday),j=new Date;if(!isNaN(C.getTime())){const I=(j.getFullYear()-C.getFullYear())*12+(j.getMonth()-C.getMonth());if(I>=12){const $=Math.floor(I/12);r=i?`${$}살`:`${$} yr${$>1?"s":""}`}else I>0?r=i?`${I}개월`:`${I} mo${I>1?"s":""}`:r=i?"신생":"puppy"}}r||(r=i?"5살":"5 yrs");const d=(m.events||[]).filter(C=>{var j;return C.eventType==="weight"&&(((j=C.metadata)==null?void 0:j.weightKg)||C.notes)}).sort((C,j)=>new Date(j.timestamp).getTime()-new Date(C.timestamp).getTime());let c=14.2;if(d.length>0){const C=d.find(j=>{var $;return Number((($=j.metadata)==null?void 0:$.weightKg)||parseFloat(j.notes||"0")||0)>0});C&&(c=Number(((et=C.metadata)==null?void 0:et.weightKg)||parseFloat(C.notes||"0")||14.2))}const u=i?`${c.toFixed(1)}kg`:`${c.toFixed(1)} kg`,v=`${(n==null?void 0:n.breed)||(i?"비글 믹스":"Beagle mix")} · ${r} · ${u}`,b=new Date;b.setMonth(b.getMonth()-6);const x=(m.events||[]).filter(C=>C.eventType!=="medicine"?!1:new Date(C.timestamp)>=b).sort((C,j)=>new Date(j.timestamp).getTime()-new Date(C.timestamp).getTime()),k=[],S=new Set;for(const C of x){const j=(((R=C.metadata)==null?void 0:R.medication)||C.notes||"").trim().toLowerCase(),I=Math.floor(new Date(C.timestamp).getTime()/(600*1e3)),$=`${j}_${I}`;S.has($)||(S.add($),k.push(C))}const P=[{id:"def-med-1",title:"Apoquel",sub:`16 mg with food · ${i?"기록자":"Logged by"} Sam`,dateStr:"24 Aug 2026, 8:05 am"},{id:"def-med-2",title:"Joint chew",sub:`1 chew, evening · ${i?"기록자":"Logged by"} Sam`,dateStr:"24 Aug 2026, 6:15 pm"},{id:"def-med-3",title:"Flea & tick prevention",sub:`Topical treatment · ${i?"기록자":"Logged by"} Sam`,dateStr:"18 Aug 2026, 10:00 am"}],T=k.length>0?k.map(C=>{var ht,Nt;const j=new Date(C.timestamp),I=`${j.toLocaleDateString([],{day:"numeric",month:"short",year:"numeric"})}, ${j.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}).toLowerCase()}`,$=((ht=C.metadata)==null?void 0:ht.medication)||C.notes||(i?"약/영양제":"Medicine"),it=[];(Nt=C.metadata)!=null&&Nt.dosage&&it.push(C.metadata.dosage),C.notes&&C.notes.trim().toLowerCase()!==$.trim().toLowerCase()&&it.push(C.notes.trim()),C.loggedByName&&it.push(`${i?"기록자":"Logged by"} ${C.loggedByName}`);const dt=it.join(" · ");return{id:C.id,title:$,sub:dt,dateStr:I}}):P,N=(m.events||[]).filter(C=>C.eventType==="vet").sort((C,j)=>new Date(j.timestamp).getTime()-new Date(C.timestamp).getTime()),z=[{date:"12 Jun 2024",title:"Annual check-up",note:"Weight up 0.4 kg. Teeth good. Apoquel renewed."},{date:"03 Aug 2025",title:"Loose stool consult",note:"Likely new treat brand. Bland diet 5 days."},{date:"19 Aug 2026",title:"Follow-up call",note:"Resolved. Back to normal food."}],W=N.length>0?N.map(C=>({date:new Date(C.timestamp).toLocaleDateString([],{day:"numeric",month:"short",year:"numeric"}),title:C.notes||(i?"정기 진료":"Vet Consultation"),note:`${i?"기록자":"Logged by"}: ${C.loggedByName}`})):z,H=n==null?void 0:n.avatarUrl;return w`
      <!-- Pet Hero Card -->
      <div class="dog-hero-card">
        <div
          class="dog-avatar-wrapper"
          @click=${()=>m.openPhotoModal({target:"pet",targetId:n==null?void 0:n.id,currentAvatar:H,title:i?`${s} 사진 변경`:`Change ${s}'s Photo`})}
        >
          <div class="dog-pic-avatar">
            ${H?w`<img src="${H}" class="dog-pic-img" alt="${s}" />`:w`<div>${i?`반려견
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
          <div class="card-badge">${T.length} ${i?"건":"LOGGED"}</div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 11px;">
          ${T.map(C=>{const j=!this.uncheckState[C.id];return w`
              <div class="med-row">
                <div
                  class="med-check"
                  style="background: ${j?"#1FC99B":"#FFF"};"
                  @click=${()=>this.toggleMedChecked(C.id)}
                  title="${j?"Marked as completed":"Click to check"}"
                >
                  ${j?"✓":""}
                </div>
                <div style="flex: 1; min-width: 0;">
                  <div style="font-size: 14px; font-weight: 800; color: #17140F;">
                    ${C.title}
                  </div>
                  ${C.sub?w`<div style="font-size: 11.5px; font-weight: 600; color: #6A6152; margin-top: 1px;">${C.sub}</div>`:null}
                </div>
                <div style="font-size: 11px; font-weight: 800; color: #9A9080; flex: none; text-align: right;">
                  ${C.dateStr}
                </div>
              </div>
            `})}
        </div>
      </div>

      <!-- Vet History (With Explicit Year in Dates) -->
      <div class="card-block">
        <div class="card-header">
          <div class="card-title">${i?"병원 진료 내역":"Vet history"}</div>
          <div class="card-badge">${W.length} ${i?"회":"VISITS"}</div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          ${W.map(C=>w`
              <div class="vet-item">
                <div class="vet-date">${C.date}</div>
                <div class="vet-body">
                  <div style="font-size: 13.5px; font-weight: 800; color: #17140F;">
                    ${C.title}
                  </div>
                  <div style="font-size: 11.5px; font-weight: 600; color: #6A6152; line-height: 1.45; margin-top: 2px;">
                    ${C.note}
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
    `}},We.styles=At`
    :host {
      display: block;
      padding: 58px 18px 140px;
      box-sizing: border-box;
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
  `,We);hn([A()],ao.prototype,"medDone",void 0);hn([A()],ao.prototype,"uncheckState",void 0);ao=hn([zt("dooty-dog")],ao);var _l=function(h,i,n,s){var r=arguments.length,d=r<3?i:s===null?s=Object.getOwnPropertyDescriptor(i,n):s,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")d=Reflect.decorate(h,i,n,s);else for(var u=h.length-1;u>=0;u--)(c=h[u])&&(d=(r<3?c(d):r>3?c(i,n,d):c(i,n))||d);return r>3&&d&&Object.defineProperty(i,n,d),d},Ge;let Es=(Ge=class extends Ft{constructor(){super(...arguments),this.distNames=["Pellets","Lumpy","Cracked","Textbook","Soft blobs","Mushy","Liquid"],this.distCol=["#E3D8BE","#E3D8BE","#FFE9A8","#1FC99B","#FFCE2E","#FF9A3C","#FF5A3C"]}render(){const i=m.currentLocale==="ko",n=m.events||[],s=n.length,r=new Date(Date.now()-336*60*60*1e3),d=n.filter(k=>k.eventType==="poop"&&new Date(k.timestamp)>=r),c=[0,0,0,0,0,0,0];d.forEach(k=>{const S=(k.notes||"").match(/Type\s*([1-7])/i)||(k.notes||"").match(/([1-7])/);if(S){const P=parseInt(S[1],10);P>=1&&P<=7&&c[P-1]++}else c[3]++});const u=c.reduce((k,S)=>k+S,0),f=c.map(k=>u>0?Math.round(k/u*100):0),v=c[3],b=u>0?Math.round(v/u*100):s>0?100:0,x=n.filter(k=>(k.eventType==="vomit"||(k.notes||"").toLowerCase().includes("loose")||(k.notes||"").toLowerCase().includes("diarrhea"))&&new Date(k.timestamp)>=r);return w`
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
          <div class="score-num">${s>0?b:"-"}</div>
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
          ${this.distNames.map((k,S)=>{const P=f[S],T=this.distCol[S];return w`
              <div class="spread-row">
                <div class="spread-num" style="background: ${T};">${S+1}</div>
                <div style="width: 66px; font-size: 11.5px; font-weight: 700; color: #6A6152; flex: none;">
                  ${k}
                </div>
                <div class="spread-track">
                  <div style="height: 100%; background: ${T}; width: ${Math.max(P>0?4:0,P)}%;"></div>
                </div>
                <div style="width: 32px; text-align: right; font-size: 11px; font-weight: 800; color: #6A6152; flex: none;">
                  ${P}%
                </div>
              </div>
            `})}
        </div>
      </div>

      <!-- Flagged Warning Card / Health Status -->
      ${x.length>0?w`
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
                ${x.map(k=>`${new Date(k.timestamp).toLocaleDateString()}: ${k.notes||k.eventType}`).join(" · ")}
              </div>
              <div
                class="flag-send-btn"
                @click=${()=>this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:i?"기록 준비 완료":"Summary ready",sub:i?"수의사 공유용 데이터가 생성되었습니다.":"Packaged for vet consultation."}}))}
              >
                ${i?"기록 수의사에게 내보내기":"Export health records for vet"}
              </div>
            </div>
          `:w`
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
    `}},Ge.styles=At`
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
  `,Ge);Es=_l([zt("dooty-deep")],Es);var wl=function(h,i,n,s){var r=arguments.length,d=r<3?i:s===null?s=Object.getOwnPropertyDescriptor(i,n):s,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")d=Reflect.decorate(h,i,n,s);else for(var u=h.length-1;u>=0;u--)(c=h[u])&&(d=(r<3?c(d):r>3?c(i,n,d):c(i,n))||d);return r>3&&d&&Object.defineProperty(i,n,d),d},qe;let As=(qe=class extends Ft{render(){var S;const i=m.currentLocale==="ko",n=m.events||[],s=n.length;(S=m.currentPet)!=null&&S.id;const r=n.filter(P=>P.eventType==="poop"),d=n.filter(P=>P.eventType==="walk"),c=Array(24).fill(0);n.forEach(P=>{const T=new Date(P.timestamp);isNaN(T.getTime())||c[T.getHours()]++});let u=7,f=0;c.forEach((P,T)=>{P>f&&(f=P,u=T)});const v=f>0?`${u>12?u-12:u||12}:00 ${u>=12?"pm":"am"}`:i?"기록 없음":"No data yet",b=new Set;n.forEach(P=>{const T=new Date(P.timestamp);isNaN(T.getTime())||b.add(`${T.getFullYear()}-${T.getMonth()+1}-${T.getDate()}`)});const x=b.size,k=[{k:i?"총 배출량":"Total output",v:i?`${r.length}회`:`${r.length} poops`,sub:i?`총 ${s}건의 이벤트가 등록되었습니다.`:`${s} total logged events recorded so far.`,bg:"#FFCE2E",fg:"#17140F",label:"#7A5C00",shadow:"#FF5A3C",rot:"-1.2deg"},{k:i?"황금 시간대":"Your golden hour",v,sub:i?"가장 많은 활동이 기록된 주요 시간대입니다.":"Most frequent hour of daily activity.",bg:"#FFFBF2",fg:"#17140F",label:"#6A6152",shadow:"#2B5BE8",rot:"0.9deg"},{k:i?"산책 세션":"Walk sessions",v:i?`${d.length}회`:`${d.length} walks`,sub:i?"반려견과 함께한 야외 산책 기록입니다.":"Outdoor exercise recorded with your pet.",bg:"#1FC99B",fg:"#17140F",label:"#0A5A45",shadow:"#FFCE2E",rot:"-0.7deg"},{k:i?"돌봄 기록 일수":"Days active",v:i?`${x}일`:`${x} days`,sub:i?"반려견의 건강한 일상을 함께 기록한 날들입니다.":"Days dedicated to tracking your pet’s wellbeing.",bg:"#FF5A3C",fg:"#FFF",label:"#FFE3DC",shadow:"#FFCE2E",rot:"1.1deg"}];return w`
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
        ${k.map(P=>w`
            <div
              class="wrapped-stat-card"
              style="background: ${P.bg}; box-shadow: 4px 4px 0 ${P.shadow}; transform: rotate(${P.rot});"
            >
              <div class="stat-label" style="color: ${P.label};">${P.k}</div>
              <div class="stat-val" style="color: ${P.fg};">${P.v}</div>
              <div class="stat-sub" style="color: ${P.label};">${P.sub}</div>
            </div>
          `)}
      </div>

      <div
        class="share-btn"
        @click=${()=>this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:"Card ready to share",sub:"Saved to photos."}}))}
      >
        ${i?"카드 공유하기":"Share the card"}
      </div>
    `}},qe.styles=At`
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
  `,qe);As=wl([zt("dooty-wrapped")],As);var kl=function(h,i,n,s){var r=arguments.length,d=r<3?i:s===null?s=Object.getOwnPropertyDescriptor(i,n):s,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")d=Reflect.decorate(h,i,n,s);else for(var u=h.length-1;u>=0;u--)(c=h[u])&&(d=(r<3?c(d):r>3?c(i,n,d):c(i,n))||d);return r>3&&d&&Object.defineProperty(i,n,d),d},Ke;let zs=(Ke=class extends Ft{connectedCallback(){super.connectedCallback(),this.unsubscribe=m.subscribe(()=>this.requestUpdate())}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.unsubscribe)==null||i.call(this)}setLanguage(i){m.setLocale(i),i==="ko"?document.body.classList.add("lang-ko"):document.body.classList.remove("lang-ko")}handleExportCsv(){m.t.settings,m.exportEventsCsv(),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:m.currentLocale==="ko"?"CSV 내보내기 완료":"CSV Export Complete",sub:m.currentLocale==="ko"?"모든 기록이 다운로드되었습니다.":"All event logs saved to your device."}}))}handleSignOut(){m.signOut(),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:m.currentLocale==="ko"?"로그아웃되었습니다":"Signed out",sub:m.currentLocale==="ko"?"다음에 또 만나요!":"See you on the next walk!"}}))}render(){var v,b;const i=m.currentLocale==="ko",n=m.t.settings,s=m.currentUser,r=m.currentHousehold,d=(r==null?void 0:r.members)||[{id:"1",displayName:(s==null?void 0:s.displayName)||"Sam (you)",role:"owner",avatarUrl:m.userAvatar},{id:"2",displayName:"Priya",role:"member",avatarUrl:""},{id:"3",displayName:"Dan the walker",role:"member",avatarUrl:""}],c=((v=m.pets)==null?void 0:v.length)>0?m.pets:m.currentPet?[m.currentPet]:[{id:"p1",name:"Nacho",breed:"Beagle mix · 5 yrs · 14.2 kg",species:"dog",householdId:(r==null?void 0:r.id)||"1",avatarUrl:"",birthday:"",createdAt:new Date().toISOString()}],u=((b=m.events)==null?void 0:b.length)||1204,f=((s==null?void 0:s.displayName)||"Sam").split(" ").map(x=>x[0]).join("").toUpperCase().slice(0,2);return w`
      <div class="settings-container">
        <!-- Back button -->
        <div class="back-btn" @click=${()=>m.setActiveTab("today")}>
          ‹ ${n.back}
        </div>

        <!-- Page Title -->
        <div class="page-title">${n.title}</div>

        <!-- User Profile Card -->
        <div class="user-card">
          <div
            class="user-avatar"
            @click=${()=>m.openPhotoModal({target:"user",currentAvatar:m.userAvatar,title:"Pick Profile Photo"})}
          >
            ${m.userAvatar?w`<img src="${m.userAvatar}" alt="User Avatar" />`:w`${f}`}
          </div>
          <div style="flex: 1; min-width: 0;">
            <div style="font-size: 14px; font-weight: 800; color: #17140F;">
              ${(s==null?void 0:s.email)||"sam@jellyfish.dog"}
            </div>
            <div style="font-size: 11.5px; font-weight: 600; color: #6A6152; margin-top: 1px;">
              ${n.signedInPlan}
            </div>
          </div>
        </div>

        <!-- Language Selector -->
        <div>
          <div class="section-label">${n.language}</div>
          <div class="lang-row">
            <div
              class="lang-btn ${i?"":"active"}"
              @click=${()=>this.setLanguage("en")}
            >
              <div class="lang-dot"></div>
              ${n.english}
            </div>
            <div
              class="lang-btn ${i?"active":""}"
              @click=${()=>this.setLanguage("ko")}
            >
              <div class="lang-dot"></div>
              ${n.korean}
            </div>
          </div>
        </div>

        <!-- Analytics Timeframe Preference -->
        <div>
          <div class="section-label">${i?"기본 분석 기간":"Default Analytics Range"}</div>
          <div class="lang-row">
            <div
              class="lang-btn ${m.analyticsTimeRange==="7d"?"active":""}"
              @click=${()=>m.setAnalyticsTimeRange("7d")}
            >
              7D
            </div>
            <div
              class="lang-btn ${m.analyticsTimeRange==="30d"?"active":""}"
              @click=${()=>m.setAnalyticsTimeRange("30d")}
            >
              30D
            </div>
            <div
              class="lang-btn ${m.analyticsTimeRange==="1y"?"active":""}"
              @click=${()=>m.setAnalyticsTimeRange("1y")}
            >
              1Y
            </div>
            <div
              class="lang-btn ${m.analyticsTimeRange==="all"?"active":""}"
              @click=${()=>m.setAnalyticsTimeRange("all")}
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
              ${n.household}
            </div>
            <div style="font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif); font-weight: 800; font-size: 20px; color: #17140F; letter-spacing: -0.6px; line-height: 1.15; margin-top: 1px;">
              ${(r==null?void 0:r.name)||"The Nacho Household"}
            </div>
            <div style="font-size: 11.5px; font-weight: 700; color: #7A5C00; margin-top: 1px;">
              ${n.householdCount(d.length,c.length)}
            </div>
          </div>
          <div
            class="btn-invite-badge"
            @click=${()=>m.setActiveTab("invite")}
          >
            ${n.invite}
          </div>
        </div>

        <!-- People Section -->
        <div>
          <div class="section-label">${n.people}</div>
          <div class="card-block">
            ${d.map((x,k)=>{const S=["#FFCE2E","#1FC99B","#BFD0FF","#FF9A3C"],P=(x.displayName||"Member")[0].toUpperCase(),T=Math.round(k===0?u*.75:u*.2);return w`
                <div class="list-row">
                  <div
                    class="member-avatar"
                    style="background: ${S[k%S.length]};"
                    @click=${()=>m.openPhotoModal({target:"member",targetId:x.id,currentAvatar:x.avatarUrl,title:`Pick Photo for ${x.displayName}`})}
                  >
                    ${x.avatarUrl?w`<img src="${x.avatarUrl}" alt="Avatar" />`:w`${P}`}
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
                    ${T} ${n.logsUnit}
                  </div>
                </div>
              `})}
            <div
              class="add-action-link"
              @click=${()=>m.setActiveTab("invite")}
            >
              ${n.inviteSomeone}
            </div>
          </div>
        </div>

        <!-- Pets Section -->
        <div>
          <div class="section-label">${n.pets}</div>
          <div class="card-block">
            ${c.map(x=>w`
              <div
                class="list-row"
                style="cursor: pointer;"
                @click=${()=>m.setActiveTab("dog")}
              >
                <div
                  class="pet-avatar-circle"
                  @click=${k=>{k.stopPropagation(),m.openPhotoModal({target:"pet",targetId:x.id,currentAvatar:x.avatarUrl,title:`Pick Photo for ${x.name}`})}}
                >
                  ${x.avatarUrl?w`<img src="${x.avatarUrl}" alt="${x.name}" />`:w`dog<br />pic`}
                </div>
                <div style="flex: 1; min-width: 0;">
                  <div style="font-size: 13.5px; font-weight: 800; color: #17140F;">
                    ${x.name}
                  </div>
                  <div style="font-size: 11.5px; font-weight: 600; color: #6A6152;">
                    ${(()=>{var z;if(x.breed&&x.breed.includes("·"))return x.breed;let k="";if(x.birthday){const W=new Date(x.birthday),H=new Date;if(!isNaN(W.getTime())){const et=(H.getFullYear()-W.getFullYear())*12+(H.getMonth()-W.getMonth());if(et>=12){const R=Math.floor(et/12);k=i?`${R}살`:`${R} yr${R>1?"s":""}`}else et>0&&(k=i?`${et}개월`:`${et} mo${et>1?"s":""}`)}}k||(k=i?"5살":"5 yrs");const S=x.breed||(i?"비글 믹스":"Beagle mix"),P=(m.events||[]).filter(W=>{var H;return W.eventType==="weight"&&(((H=W.metadata)==null?void 0:H.weightKg)||W.notes)}).sort((W,H)=>new Date(H.timestamp).getTime()-new Date(W.timestamp).getTime()),T=P.length>0?Number(((z=P[0].metadata)==null?void 0:z.weightKg)||parseFloat(P[0].notes||"0")||14.2):14.2,N=i?`${T.toFixed(1)}kg`:`${T.toFixed(1)} kg`;return`${S} · ${k} · ${N}`})()}
                  </div>
                </div>
                <div style="font-size: 11.5px; font-weight: 800; color: #9A9080; flex: none;">
                  ${u} ${n.logsUnit}
                </div>
              </div>
            `)}
            <div
              class="add-action-link"
              @click=${()=>m.openPhotoModal({target:"pet",title:"Add New Pet Profile"})}
            >
              ${n.addPet}
            </div>
          </div>
        </div>

        <!-- Nudges Section -->
        <div>
          <div class="section-label">${n.nudges}</div>
          <div class="card-block">
            <div class="toggle-row">
              <div style="flex: 1; min-width: 0;">
                <div style="font-size: 13.5px; font-weight: 800; color: #17140F;">
                  ${n.walkReminders}
                </div>
                <div style="font-size: 11.5px; font-weight: 600; color: #6A6152; line-height: 1.35; margin-top: 1px;">
                  ${n.walkRemindersSub}
                </div>
              </div>
              <div
                class="switch-track ${m.nudges.push?"on":"off"}"
                @click=${()=>m.setNudgePreference("push",!m.nudges.push)}
              >
                <div class="switch-thumb"></div>
              </div>
            </div>

            <div class="toggle-row">
              <div style="flex: 1; min-width: 0;">
                <div style="font-size: 13.5px; font-weight: 800; color: #17140F;">
                  ${n.weeklyDigest}
                </div>
                <div style="font-size: 11.5px; font-weight: 600; color: #6A6152; line-height: 1.35; margin-top: 1px;">
                  ${n.weeklyDigestSub}
                </div>
              </div>
              <div
                class="switch-track ${m.nudges.weekly?"on":"off"}"
                @click=${()=>m.setNudgePreference("weekly",!m.nudges.weekly)}
              >
                <div class="switch-thumb"></div>
              </div>
            </div>

            <div class="toggle-row">
              <div style="flex: 1; min-width: 0;">
                <div style="font-size: 13.5px; font-weight: 800; color: #17140F;">
                  ${n.unusualGap}
                </div>
                <div style="font-size: 11.5px; font-weight: 600; color: #6A6152; line-height: 1.35; margin-top: 1px;">
                  ${n.unusualGapSub}
                </div>
              </div>
              <div
                class="switch-track ${m.nudges.gap?"on":"off"}"
                @click=${()=>m.setNudgePreference("gap",!m.nudges.gap)}
              >
                <div class="switch-thumb"></div>
              </div>
            </div>

            <div class="toggle-row">
              <div style="flex: 1; min-width: 0;">
                <div style="font-size: 13.5px; font-weight: 800; color: #17140F;">
                  ${n.vetShare}
                </div>
                <div style="font-size: 11.5px; font-weight: 600; color: #6A6152; line-height: 1.35; margin-top: 1px;">
                  ${n.vetShareSub}
                </div>
              </div>
              <div
                class="switch-track ${m.nudges.vet?"on":"off"}"
                @click=${()=>m.setNudgePreference("vet",!m.nudges.vet)}
              >
                <div class="switch-thumb"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Your Data Section -->
        <div>
          <div class="section-label">${n.yourData}</div>
          <div class="data-tiles-column">
            <div class="data-tile" @click=${()=>m.setActiveTab("import")}>
              <div class="tile-icon" style="background: #1FC99B;">↓</div>
              <div style="flex: 1; min-width: 0;">
                <div style="font-size: 13.5px; font-weight: 800; color: #17140F;">
                  ${n.importCsv}
                </div>
                <div style="font-size: 11.5px; font-weight: 600; color: #6A6152; margin-top: 1px; line-height: 1.35;">
                  ${n.importCsvSub}
                </div>
              </div>
            </div>

            <div class="data-tile" @click=${()=>this.handleExportCsv()}>
              <div class="tile-icon" style="background: #BFD0FF;">↑</div>
              <div style="flex: 1; min-width: 0;">
                <div style="font-size: 13.5px; font-weight: 800; color: #17140F;">
                  ${n.exportCsv}
                </div>
                <div style="font-size: 11.5px; font-weight: 600; color: #6A6152; margin-top: 1px; line-height: 1.35;">
                  ${n.exportCsvSub}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sign Out Button -->
        <div class="btn-signout" @click=${()=>this.handleSignOut()}>
          ${n.signOut}
        </div>

        <!-- Version Tag -->
        <div class="version-footer">
          ${n.version}
        </div>

        <div style="height: 40px;"></div>
      </div>
    `}},Ke.styles=At`
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
  `,Ke);zs=kl([zt("dooty-settings")],zs);var ho=function(h,i,n,s){var r=arguments.length,d=r<3?i:s===null?s=Object.getOwnPropertyDescriptor(i,n):s,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")d=Reflect.decorate(h,i,n,s);else for(var u=h.length-1;u>=0;u--)(c=h[u])&&(d=(r<3?c(d):r>3?c(i,n,d):c(i,n))||d);return r>3&&d&&Object.defineProperty(i,n,d),d},Ve;let Si=(Ve=class extends Ft{constructor(){super(...arguments),this.selectedRole="Full member",this.currentCode="K7M4Q9",this.isGenerating=!1}connectedCallback(){super.connectedCallback(),this.unsubscribe=m.subscribe(()=>this.requestUpdate()),this.generateNewCode()}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.unsubscribe)==null||i.call(this)}async generateNewCode(){this.isGenerating=!0;try{const i=await m.createInvite(this.selectedRole);i&&(this.currentCode=i)}finally{this.isGenerating=!1}}handleCopy(){const i=m.t.invite;navigator.clipboard&&navigator.clipboard.writeText(this.currentCode),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:i.codeCopied,sub:i.codeCopiedSub(this.currentCode)}}))}handleShare(){var n;m.t.invite;const i=`Join my household "${((n=m.currentHousehold)==null?void 0:n.name)||"Dooty"}" with invite code: ${this.currentCode}`;navigator.share?navigator.share({title:"Dooty Invite",text:i,url:window.location.origin}).catch(()=>this.handleCopy()):this.handleCopy()}async handleRevoke(i){const n=m.t.invite;await m.revokeInvite(i),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:n.inviteRevoked,sub:n.inviteRevokedSub(i)}}))}render(){var d;const i=m.t.invite,n=((d=m.currentHousehold)==null?void 0:d.name)||"Household",s=(this.currentCode+"      ").slice(0,6).split(""),r=m.pendingInvites||[];return w`
      <div class="invite-container">
        <div class="back-btn" @click=${()=>m.setActiveTab("settings")}>
          ‹ ${i.back}
        </div>

        <div>
          <div class="section-label">${i.title}</div>
          <div class="headline">${n}</div>
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
            ${s.map(c=>w`
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
            ${r.length===0?w`
                  <div style="padding: 14px 0; font-size: 13px; font-weight: 700; color: #9A9080; text-align: center;">
                    No pending invites
                  </div>
                `:r.map(c=>w`
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
    `}},Ve.styles=At`
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
  `,Ve);ho([A()],Si.prototype,"selectedRole",void 0);ho([A()],Si.prototype,"currentCode",void 0);ho([A()],Si.prototype,"isGenerating",void 0);Si=ho([zt("dooty-invite")],Si);var Ce=function(h,i,n,s){var r=arguments.length,d=r<3?i:s===null?s=Object.getOwnPropertyDescriptor(i,n):s,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")d=Reflect.decorate(h,i,n,s);else for(var u=h.length-1;u>=0;u--)(c=h[u])&&(d=(r<3?c(d):r>3?c(i,n,d):c(i,n))||d);return r>3&&d&&Object.defineProperty(i,n,d),d},Je;let ue=(Je=class extends Ft{constructor(){super(...arguments),this.isImporting=!1,this.importProgress="",this.errorMessage="",this.successMessage="",this.isDragOver=!1}async processFile(i){this.errorMessage="",this.successMessage="";try{const n=await i.text(),s=Gr(n,i.name);this.parsedResult=s}catch(n){this.errorMessage=n.message||"Failed to read and parse import file.",this.parsedResult=void 0}}async handleFileSelect(i){var r;const s=(r=i.target.files)==null?void 0:r[0];s&&await this.processFile(s)}handleDragOver(i){i.preventDefault(),this.isDragOver=!0}handleDragLeave(i){i.preventDefault(),this.isDragOver=!1}async handleDrop(i){var s,r;i.preventDefault(),this.isDragOver=!1;const n=(r=(s=i.dataTransfer)==null?void 0:s.files)==null?void 0:r[0];n&&await this.processFile(n)}async handleImport(){var i,n;if(!(!this.parsedResult||this.isImporting)){this.isImporting=!0,this.errorMessage="";try{const s=(i=m.currentHousehold)==null?void 0:i.id,r=(n=m.currentPet)==null?void 0:n.id;if(!s||!r)throw new Error("Please select or configure a household and pet before importing.");this.importProgress=`Converting ${this.parsedResult.summary.totalCount} events...`;const d=qr(this.parsedResult,s,r);this.importProgress=`Saving ${d.length} events to server...`;const c=await kt.importEvents(d);this.successMessage=m.t.importer.success(c.importedCount),await m.refreshEvents(),this.parsedResult=void 0}catch(s){this.errorMessage=s.message||"Import failed on server."}finally{this.isImporting=!1,this.importProgress=""}}}render(){var r;const i=m.t.importer,n=m.currentLocale==="ko",s=(r=this.parsedResult)==null?void 0:r.summary;return w`
      <div
        class="back-btn"
        @click=${()=>m.setActiveTab("settings")}
      >
        ‹ ${n?"설정":"Settings"}
      </div>
      <h2 class="page-title">${i.title}</h2>
      <p class="page-sub">${i.subtitle}</p>

      <label
        class="dropzone ${this.isDragOver?"dragover":""}"
        @dragover=${d=>this.handleDragOver(d)}
        @dragleave=${d=>this.handleDragLeave(d)}
        @drop=${d=>this.handleDrop(d)}
      >
        <div style="font-size: 42px;">📂</div>
        <div style="font-family: var(--font-heading); font-weight: 800; font-size: 16px;">
          ${i.dropText}
        </div>
        <input
          type="file"
          accept=".csv, .json, text/csv, application/json"
          style="display: none;"
          @change=${d=>this.handleFileSelect(d)}
        />
        <div class="select-btn">
          ${i.selectFile}
        </div>
      </label>

      ${this.errorMessage?w`<div class="msg-error">${this.errorMessage}</div>`:""}
      ${this.successMessage?w`<div class="msg-success">${this.successMessage}</div>`:""}

      ${s?w`
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
                  ${Object.entries(s.countsByUser).map(([d,c])=>w`
                      <div class="user-chip">@${d}: ${c.toLocaleString()}</div>
                    `)}
                </div>
              </div>

              <div>
                <div class="section-subtitle">🏷️ Event Breakdown</div>
                <div class="breakdown-row">
                  ${Object.entries(s.countsByType).map(([d,c])=>w`
                      <div class="breakdown-chip">${d}: ${c.toLocaleString()}</div>
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
    `}},Je.styles=At`
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
  `,Je);Ce([A()],ue.prototype,"parsedResult",void 0);Ce([A()],ue.prototype,"isImporting",void 0);Ce([A()],ue.prototype,"importProgress",void 0);Ce([A()],ue.prototype,"errorMessage",void 0);Ce([A()],ue.prototype,"successMessage",void 0);Ce([A()],ue.prototype,"isDragOver",void 0);ue=Ce([zt("dooty-importer")],ue);var qt=function(h,i,n,s){var r=arguments.length,d=r<3?i:s===null?s=Object.getOwnPropertyDescriptor(i,n):s,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")d=Reflect.decorate(h,i,n,s);else for(var u=h.length-1;u>=0;u--)(c=h[u])&&(d=(r<3?c(d):r>3?c(i,n,d):c(i,n))||d);return r>3&&d&&Object.defineProperty(i,n,d),d},Ye;let Ht=(Ye=class extends Ft{constructor(){super(...arguments),this.open=!1,this.initialLocationName="",this.currentLocationName="",this.isLocating=!1,this.isGeocoding=!1,this.hasMovedMarker=!1,this.locationPresets=["Home / Indoor","Backyard","Park","Walk Route","Vet Clinic","Daycare"],this.locationPresetsKo=["우리집 / 실내","마당 / 배변패드","공원 / 산책로","단지 내 산책","동물병원","데이케어"]}updated(i){i.has("open")&&(this.open?(this.currentLat=this.initialLat,this.currentLng=this.initialLng,this.currentLocationName=this.initialLocationName||"",this.hasMovedMarker=!1,setTimeout(()=>{this.initOrUpdateMap()},80)):this.destroyMap())}disconnectedCallback(){super.disconnectedCallback(),this.destroyMap()}destroyMap(){this.map&&(this.map.remove(),this.map=void 0,this.marker=void 0)}initOrUpdateMap(){var u;const i=(u=this.renderRoot)==null?void 0:u.querySelector("#leaflet-map");if(!i)return;if(this.map){this.map.invalidateSize();return}const n=this.currentLat??37.5665,s=this.currentLng??126.978,r=this.currentLat&&this.currentLng?16:14;this.map=xt.map(i,{zoomControl:!1,attributionControl:!1}).setView([n,s],r),xt.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png",{maxZoom:19,subdomains:"abcd",updateWhenIdle:!0,updateWhenZooming:!1,keepBuffer:3}).addTo(this.map),xt.control.zoom({position:"bottomright"}).addTo(this.map);const c=xt.divIcon({className:"dooty-custom-leaflet-pin",html:`
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
    `,iconSize:[0,0]});this.currentLat&&this.currentLng?this.marker=xt.marker([this.currentLat,this.currentLng],{icon:c,draggable:!0}).addTo(this.map):(this.marker=xt.marker([n,s],{icon:c,draggable:!0}).addTo(this.map),this.fetchUserGPS(!1)),this.marker.on("dragend",f=>{const v=f.target.getLatLng();this.onPositionSelected(v.lat,v.lng)}),this.map.on("click",f=>{const{lat:v,lng:b}=f.latlng;this.marker&&this.marker.setLatLng([v,b]),this.onPositionSelected(v,b)}),setTimeout(()=>{var f;(f=this.map)==null||f.invalidateSize()},150)}onPositionSelected(i,n){this.currentLat=i,this.currentLng=n,this.hasMovedMarker=!0,this.requestUpdate(),this.geocodeTimeout&&window.clearTimeout(this.geocodeTimeout),this.geocodeTimeout=window.setTimeout(()=>{this.tryReverseGeocode(i,n)},400)}fetchUserGPS(i=!0){typeof navigator>"u"||!navigator.geolocation||(this.isLocating=!0,this.requestUpdate(),navigator.geolocation.getCurrentPosition(n=>{const s=n.coords.latitude,r=n.coords.longitude;this.isLocating=!1,this.currentLat=s,this.currentLng=r,this.map&&(this.map.flyTo([s,r],17,{animate:!0,duration:1}),this.marker&&this.marker.setLatLng([s,r])),(!this.currentLocationName||!this.hasMovedMarker)&&this.tryReverseGeocode(s,r),this.requestUpdate()},n=>{console.warn("Geolocation error in picker:",n),this.isLocating=!1,this.requestUpdate()},{enableHighAccuracy:!0,timeout:8e3}))}async tryReverseGeocode(i,n){var s,r,d,c,u,f,v,b;this.isGeocoding=!0,this.requestUpdate();try{const x=await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${i}&lon=${n}&zoom=18&addressdetails=1`,{headers:{Accept:"application/json"}});if(x.ok){const k=await x.json(),S=((s=k.address)==null?void 0:s.road)||((r=k.address)==null?void 0:r.pedestrian)||((d=k.address)==null?void 0:d.suburb)||((c=k.address)==null?void 0:c.neighbourhood),P=((u=k.address)==null?void 0:u.city)||((f=k.address)==null?void 0:f.town)||((v=k.address)==null?void 0:v.village)||((b=k.address)==null?void 0:b.county);if(S&&P)this.currentLocationName=`${S}, ${P}`;else if(S)this.currentLocationName=S;else if(k.display_name){const T=k.display_name.split(",");this.currentLocationName=T.slice(0,2).join(",").trim()}}}catch{}finally{this.isGeocoding=!1,this.requestUpdate()}}selectPreset(i){this.currentLocationName=i,this.requestUpdate()}handleSaveSpot(){if((this.currentLat===void 0||this.currentLng===void 0)&&this.map){const i=this.map.getCenter();this.currentLat=i.lat,this.currentLng=i.lng}this.dispatchEvent(new CustomEvent("spot-selected",{bubbles:!0,composed:!0,detail:{lat:this.currentLat,lng:this.currentLng,locationName:this.currentLocationName}})),this.handleClose()}handleClose(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}render(){if(!this.open)return null;const i=m.currentLocale==="ko",n=i?this.locationPresetsKo:this.locationPresets;return w`
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
                ${this.currentLat&&this.currentLng?w`
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
              ${n.map(s=>w`
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
    `}},Ye.styles=At`
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
  `,Ye);qt([Ai({type:Boolean})],Ht.prototype,"open",void 0);qt([Ai({type:Number})],Ht.prototype,"initialLat",void 0);qt([Ai({type:Number})],Ht.prototype,"initialLng",void 0);qt([Ai({type:String})],Ht.prototype,"initialLocationName",void 0);qt([A()],Ht.prototype,"currentLat",void 0);qt([A()],Ht.prototype,"currentLng",void 0);qt([A()],Ht.prototype,"currentLocationName",void 0);qt([A()],Ht.prototype,"isLocating",void 0);qt([A()],Ht.prototype,"isGeocoding",void 0);qt([A()],Ht.prototype,"hasMovedMarker",void 0);Ht=qt([zt("dooty-map-picker")],Ht);var lt=function(h,i,n,s){var r=arguments.length,d=r<3?i:s===null?s=Object.getOwnPropertyDescriptor(i,n):s,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")d=Reflect.decorate(h,i,n,s);else for(var u=h.length-1;u>=0;u--)(c=h[u])&&(d=(r<3?c(d):r>3?c(i,n,d):c(i,n))||d);return r>3&&d&&Object.defineProperty(i,n,d),d},Xe;let st=(Xe=class extends Ft{constructor(){super(...arguments),this.selectedType=null,this.cons=4,this.size="M",this.mood="Zoomy",this.selectedMed="Apoquel",this.selectedMedDose="16 mg with food",this.customMedName="",this.weightKg=14.2,this.walkMin="30 min",this.walkKm="2.3 km",this.vetReason="Annual check-up",this.symptom="Itch / Scratch",this.portion="1 cup",this.photoUrl="",this.notes="",this.locationName="",this.lat=void 0,this.lng=void 0,this.isLocating=!1,this.showLocationPicker=!1,this.showMapPicker=!1,this.showTimePicker=!1,this.customTimestamp="",this.weatherText="",this.isFetchingWeather=!1,this.wasOpen=!1,this.consNames=["hard pellets","lumpy log","cracked log","textbook — the dream","soft blobs","mushy","liquid"],this.consNamesKo=["단단한 토끼똥","울퉁불퉁한 변","약간 갈라진 변","완벽한 황금변 (최고)","무른 덩어리변","형태 없는 묽은변","설사/수분성 액체"],this.typeDefs=[{id:"poop",name:"Poop",nameKo:"응가",tag:"P",sub:"the main event",subKo:"주요 배변 활동",c:"#FFCE2E"},{id:"pee",name:"Pee",nameKo:"쉬야",tag:"U",sub:"quick mark",subKo:"배뇨 영역 표시",c:"#BFD0FF"},{id:"vomit",name:"Vomit",nameKo:"구토",tag:"V",sub:"we hope not",subKo:"소화 이상/토",c:"#FF9A3C"},{id:"medicine",name:"Medicine",nameKo:"약/영양제",tag:"M",sub:"3 on schedule",subKo:"투약 일정 관리",c:"#1FC99B"},{id:"weight",name:"Weight",nameKo:"몸무게",tag:"KG",sub:"last 14.2 kg",subKo:"체중 변화 기록",c:"#2B5BE8"},{id:"walk",name:"Walk",nameKo:"산책",tag:"W",sub:"2 already today",subKo:"야외 활동 & 코스",c:"#9EC6E8"},{id:"vet",name:"Vet visit",nameKo:"병원 진료",tag:"D",sub:"appointments",subKo:"검진 및 진료 예약",c:"#FFD15C"},{id:"symptom",name:"Symptom",nameKo:"증상 메모",tag:"S",sub:"itch, limp, mood",subKo:"가려움, 절뚝임 등",c:"#FF5A3C"}],this.medOptions=[{name:"Apoquel",dose:"16 mg with food"},{name:"Joint chew",dose:"1 chew, evening"},{name:"Flea & tick",dose:"topical, weekly"}],this.walkOptions=[{min:"15 min",minKo:"15분",km:"1.1 km"},{min:"30 min",minKo:"30분",km:"2.3 km"},{min:"45 min",minKo:"45분",km:"3.4 km"},{min:"1 hr",minKo:"1시간",km:"4.6 km"}],this.vetReasons=[{id:"Annual check-up",name:"Annual check-up",nameKo:"정기 검진"},{id:"Vaccination booster",name:"Vaccination booster",nameKo:"예방 접종"},{id:"Loose stool consult",name:"Loose stool consult",nameKo:"배변/설사 진료"},{id:"Dental scaling",name:"Dental scaling",nameKo:"치과/스케일링"},{id:"Medication renewal",name:"Medication renewal",nameKo:"처방약 재발급"},{id:"Follow-up exam",name:"Follow-up exam",nameKo:"재진/경과 관찰"}],this.symptomOptions=[{id:"Itch / Scratch",name:"Itch / Scratch",nameKo:"가려움 / 긁음"},{id:"Limping / Joint",name:"Limping / Joint",nameKo:"절뚝임 / 관절"},{id:"Lethargic / Low energy",name:"Lethargic / Low energy",nameKo:"기력 저하"},{id:"Coughing / Reverse sneeze",name:"Coughing / Reverse sneeze",nameKo:"기침 / 역재채기"},{id:"Loss of Appetite",name:"Loss of Appetite",nameKo:"식욕 부진"},{id:"Skin redness / Rash",name:"Skin redness / Rash",nameKo:"피부 발진 / 붉어짐"},{id:"Ear shaking",name:"Ear shaking",nameKo:"귀 털기 / 귓병"}],this.portionOptions=[{id:"0.5 cup",name:"0.5 cup",nameKo:"0.5 컵"},{id:"1.0 cup",name:"1.0 cup",nameKo:"1.0 컵"},{id:"1.5 cups",name:"1.5 cups",nameKo:"1.5 컵"},{id:"2.0 cups",name:"2.0 cups",nameKo:"2.0 컵"},{id:"Full bowl",name:"Full bowl",nameKo:"한 그릇 가득"},{id:"Special treats",name:"Special treats",nameKo:"특별 간식"}],this.moodOptions=zr,this.locationPresets=["Home / Indoor","Backyard","Park","Walk Route","Vet Clinic","Daycare"],this.locationPresetsKo=["우리집 / 실내","마당 / 배변패드","공원 / 산책로","단지 내 산책","동물병원","데이케어"]}connectedCallback(){super.connectedCallback(),this.unsubscribe=m.subscribe(()=>{if(m.loggerModalOpen)if(this.wasOpen)m.loggerEventType&&this.selectedType!==m.loggerEventType&&!m.editingEvent&&(this.selectedType=m.loggerEventType);else{if(m.editingEvent){const i=m.editingEvent,n=i.metadata||{};this.selectedType=i.eventType;let s=i.notes||"";const r=s.split(" · ");if(r.length>1){const d=r[r.length-1].trim();d!==n.mood&&d!==n.size&&d!==n.portion?s=d:s=""}else(s.startsWith("응가")||s.startsWith("쉬야")||s.startsWith("Type ")||s.startsWith("Pee")||s.startsWith("Vomit")||s.startsWith("구토")||s.startsWith("Weigh-in")||s.startsWith("체중"))&&(s="");this.notes=s,this.photoUrl=n.photoUrl||"",this.locationName=n.locationName||"",this.lat=i.latitude,this.lng=i.longitude,this.weatherText=n.weather||"",this.customTimestamp=i.timestamp||new Date().toISOString(),n.consistency&&(this.cons=n.consistency),n.size&&(this.size=n.size),n.mood&&(this.mood=n.mood),n.medication&&(this.selectedMed=n.medication),n.dosage&&(this.selectedMedDose=n.dosage),n.weightKg&&(this.weightKg=n.weightKg),n.walkDuration&&(this.walkMin=n.walkDuration),n.walkDistance&&(this.walkKm=n.walkDistance),n.visitReason&&(this.vetReason=n.visitReason),n.symptom&&(this.symptom=n.symptom),n.portion&&(this.portion=n.portion),this.isLocating=!1,this.showLocationPicker=!1,this.showMapPicker=!1,this.showTimePicker=!1,this.isFetchingWeather=!1}else this.selectedType=m.loggerEventType||null,this.locationName="",this.lat=void 0,this.lng=void 0,this.notes="",this.photoUrl="",this.customMedName="",this.customTimestamp=new Date().toISOString(),this.isLocating=!1,this.showLocationPicker=!1,this.showMapPicker=!1,this.showTimePicker=!1,this.weatherText="",this.isFetchingWeather=!1,this.autoFetchWeather();this.wasOpen=!0}else this.selectedType=null,this.wasOpen=!1;this.requestUpdate()})}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.unsubscribe)==null||i.call(this)}handleSelectType(i){this.selectedType=i,m.loggerEventType=i}handleBackToTypes(){this.selectedType=null,m.loggerEventType=null}triggerPhotoUpload(){this.fileInput||(this.fileInput=document.createElement("input"),this.fileInput.type="file",this.fileInput.accept="image/*",this.fileInput.style.display="none",document.body.appendChild(this.fileInput),this.fileInput.addEventListener("change",i=>{var s;const n=(s=i.target.files)==null?void 0:s[0];if(n){const r=new FileReader;r.onload=d=>{var c;this.photoUrl=(c=d.target)==null?void 0:c.result},r.readAsDataURL(n)}})),this.fileInput.click()}selectPreset(i){this.locationName=i,!this.lat&&typeof navigator<"u"&&navigator.geolocation&&navigator.geolocation.getCurrentPosition(n=>{this.lat=n.coords.latitude,this.lng=n.coords.longitude,this.requestUpdate()},()=>{},{timeout:5e3})}clearLocation(){this.locationName="",this.lat=void 0,this.lng=void 0,this.isLocating=!1}async fetchCurrentLocation(){if(typeof navigator>"u"||!navigator.geolocation){this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:m.currentLocale==="ko"?"위치 권한 필요":"GPS Unavailable",sub:m.currentLocale==="ko"?"브라우저에서 위치 정보 접근을 허용해주세요.":"Geolocation is not supported or permitted by your browser."}}));return}this.isLocating=!0,this.requestUpdate(),navigator.geolocation.getCurrentPosition(async i=>{this.lat=i.coords.latitude,this.lng=i.coords.longitude,this.isLocating=!1,this.locationName||(this.locationName=`${this.lat.toFixed(4)}, ${this.lng.toFixed(4)}`,this.tryReverseGeocode(this.lat,this.lng)),this.fetchWeather(this.lat,this.lng),this.requestUpdate(),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:m.currentLocale==="ko"?"GPS 위치 태그 완료":"GPS Location Tagged",sub:`${this.lat.toFixed(4)}, ${this.lng.toFixed(4)}`}}))},i=>{console.warn("Geolocation failed:",i),this.isLocating=!1,this.requestUpdate(),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:m.currentLocale==="ko"?"위치 확인 실패":"Location Tagging Failed",sub:i.message||(m.currentLocale==="ko"?"위치 정보를 가져올 수 없습니다.":"Could not retrieve GPS coordinates.")}}))},{enableHighAccuracy:!0,timeout:8e3})}autoFetchWeather(){typeof navigator>"u"||!navigator.geolocation||(this.isFetchingWeather=!0,this.weatherText="",this.requestUpdate(),navigator.geolocation.getCurrentPosition(i=>{this.fetchWeather(i.coords.latitude,i.coords.longitude)},()=>{this.isFetchingWeather=!1,this.weatherText="",this.requestUpdate()},{timeout:5e3}))}async fetchWeather(i,n){var s,r;this.isFetchingWeather=!0,this.requestUpdate();try{const d=`https://api.open-meteo.com/v1/forecast?latitude=${i}&longitude=${n}&current=temperature_2m,weather_code&temperature_unit=celsius`,c=await fetch(d);if(!c.ok)throw new Error("Weather API error");const u=await c.json(),f=Math.round(((s=u.current)==null?void 0:s.temperature_2m)??0),v=((r=u.current)==null?void 0:r.weather_code)??0,b=this.wmoCodeToDescription(v);this.weatherText=`${f}° ${b}`}catch(d){console.warn("Weather fetch failed:",d),this.weatherText=""}finally{this.isFetchingWeather=!1,this.requestUpdate()}}wmoCodeToDescription(i){const n=m.currentLocale==="ko",r={0:["☀️ clear","☀️ 맑음"],1:["🌤️ mostly clear","🌤️ 대체로 맑음"],2:["⛅ partly cloudy","⛅ 구름 조금"],3:["☁️ overcast","☁️ 흐림"],45:["🌫️ fog","🌫️ 안개"],48:["🌫️ rime fog","🌫️ 서리 안개"],51:["🌦️ light drizzle","🌦️ 가벼운 이슬비"],53:["🌦️ drizzle","🌦️ 이슬비"],55:["🌧️ heavy drizzle","🌧️ 강한 이슬비"],56:["🌧️ freezing drizzle","🌧️ 얼어붙는 이슬비"],57:["🌧️ heavy freezing drizzle","🌧️ 강한 결빙 이슬비"],61:["🌧️ light rain","🌧️ 약한 비"],63:["🌧️ rain","🌧️ 비"],65:["🌧️ heavy rain","🌧️ 강한 비"],66:["🌧️ freezing rain","🌧️ 얼어붙는 비"],67:["🌧️ heavy freezing rain","🌧️ 강한 결빙 비"],71:["🌨️ light snow","🌨️ 약한 눈"],73:["🌨️ snow","🌨️ 눈"],75:["❄️ heavy snow","❄️ 강한 눈"],77:["🌨️ snow grains","🌨️ 싸락눈"],80:["🌦️ light showers","🌦️ 약한 소나기"],81:["🌧️ showers","🌧️ 소나기"],82:["⛈️ heavy showers","⛈️ 강한 소나기"],85:["🌨️ light snow showers","🌨️ 약한 눈 소나기"],86:["❄️ heavy snow showers","❄️ 강한 눈 소나기"],95:["⛈️ thunderstorm","⛈️ 뇌우"],96:["⛈️ thunderstorm w/ hail","⛈️ 우박 동반 뇌우"],99:["⛈️ severe thunderstorm","⛈️ 강한 뇌우"]}[i];return r?n?r[1]:r[0]:n?"☁️ 알 수 없음":"☁️ unknown"}async tryReverseGeocode(i,n){var s,r,d,c,u,f,v,b;try{const x=await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${i}&lon=${n}&zoom=18&addressdetails=1`,{headers:{Accept:"application/json"}});if(x.ok){const k=await x.json(),S=((s=k.address)==null?void 0:s.road)||((r=k.address)==null?void 0:r.pedestrian)||((d=k.address)==null?void 0:d.suburb)||((c=k.address)==null?void 0:c.neighbourhood),P=((u=k.address)==null?void 0:u.city)||((f=k.address)==null?void 0:f.town)||((v=k.address)==null?void 0:v.village)||((b=k.address)==null?void 0:b.county);if(S&&P)this.locationName=`${S}, ${P}`;else if(S)this.locationName=S;else if(k.display_name){const T=k.display_name.split(",");this.locationName=T.slice(0,2).join(",").trim()}this.requestUpdate()}}catch{}}formatDisplayTime(i){const n=m.currentLocale==="ko",s=i||new Date().toISOString(),r=new Date(s);if(isNaN(r.getTime()))return{main:new Date().toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}).toLowerCase(),sub:n?"오늘 · 탭하여 변경":"Today · tap to edit"};const d=new Date,c=r.getFullYear()===d.getFullYear()&&r.getMonth()===d.getMonth()&&r.getDate()===d.getDate(),u=r.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}).toLowerCase();return c?{main:u,sub:n?"오늘 · 탭하여 변경":"Today · tap to edit"}:{main:`${n?`${r.getMonth()+1}월 ${r.getDate()}일`:r.toLocaleDateString([],{month:"short",day:"numeric"})}, ${u}`,sub:n?"지정된 일시 · 탭하여 변경":"Custom date · tap to edit"}}toDatetimeLocalValue(i){const n=i?new Date(i):new Date;if(isNaN(n.getTime()))return"";const s=n.getFullYear(),r=String(n.getMonth()+1).padStart(2,"0"),d=String(n.getDate()).padStart(2,"0"),c=String(n.getHours()).padStart(2,"0"),u=String(n.getMinutes()).padStart(2,"0");return`${s}-${r}-${d}T${c}:${u}`}handleCustomTimeInput(i){if(!i)this.customTimestamp=new Date().toISOString();else{const n=new Date(i);this.customTimestamp=isNaN(n.getTime())?new Date().toISOString():n.toISOString()}this.requestUpdate()}setQuickOffsetMinutes(i){const n=new Date(Date.now()-i*60*1e3);this.customTimestamp=n.toISOString(),this.requestUpdate()}setQuickOffsetDays(i){const n=new Date(Date.now()-i*24*60*60*1e3);this.customTimestamp=n.toISOString(),this.requestUpdate()}setNow(){this.customTimestamp=new Date().toISOString(),this.requestUpdate()}async handleSave(){var b,x,k,S,P,T;const i=m.currentLocale==="ko",n=this.selectedType||"poop",s=((b=m.currentPet)==null?void 0:b.name)||(i?"반려견":"Pet");let r="",d=i?"기록 완료!":"Logged it!",c="";const u=this.customTimestamp||(m.editingEvent?m.editingEvent.timestamp:new Date().toISOString()),f={timestamp:u,photoUrl:this.photoUrl||void 0,locationName:this.locationName||(this.lat?`${this.lat.toFixed(4)}, ${(x=this.lng)==null?void 0:x.toFixed(4)}`:void 0),weather:this.weatherText},v=i?Mr[this.mood]||this.mood:this.mood;if(n==="poop"){const N=i?this.consNamesKo[this.cons-1]:this.consNames[this.cons-1];r=i?`응가 ${this.cons}단계 (${N}) · ${this.size} · ${v}`:`Type ${this.cons} (${this.consNames[this.cons-1]}) · ${this.size} · ${this.mood}`,this.notes&&(r+=` · ${this.notes}`),f.consistency=this.cons,f.consistencyLabel=this.consNames[this.cons-1],f.size=this.size,f.mood=this.mood,d=i?"응가 기록 완료!":"Logged it!",c=i?`${s}의 배변 기록: ${this.cons}단계 · ${this.size}`:`${s}’s log: Type ${this.cons} · ${this.size}`}else if(n==="pee")r=i?`쉬야 · ${this.size} · ${v}`:`Pee · ${this.size} · ${this.mood}`,this.notes&&(r+=` · ${this.notes}`),f.size=this.size,f.mood=this.mood,d=i?"쉬야 완료!":"Marked!",c=i?"영역 표시 기록됨.":"Territory marked.";else if(n==="vomit")r=i?`구토 · ${this.cons}단계 · ${v}`:`Vomit · Type ${this.cons} · ${this.mood}`,this.notes&&(r+=` · ${this.notes}`),f.consistency=this.cons,f.consistencyLabel=this.consNames[this.cons-1],f.mood=this.mood,d=i?"구토 기록됨 & 주의 알림":"Logged and flagged",c=i?"24시간 내 반복 발생 시 알림을 드립니다.":"Two in 48h will alert you.";else if(n==="medicine"){const N=this.customMedName||this.selectedMed;r=`${N} (${this.selectedMedDose})`,this.notes&&(r+=` · ${this.notes}`),f.medication=N,f.dosage=this.selectedMedDose,d=i?"투약 기록 완료":`${N} given`,c=i?"다음 투약 일정에 반영됩니다.":"Next dose scheduled."}else if(n==="weight")r=i?`체중 측정: ${this.weightKg.toFixed(1)} kg`:`Weigh-in: ${this.weightKg.toFixed(1)} kg`,this.notes&&(r+=` · ${this.notes}`),f.weightKg=this.weightKg,d=i?"체중 저장됨":"Weigh-in saved",c=`${this.weightKg.toFixed(1)} kg · ${i?"체중 기록 완료":"recorded"}`;else if(n==="walk"){const N=i?((k=this.walkOptions.find(z=>z.min===this.walkMin))==null?void 0:k.minKo)||this.walkMin:this.walkMin;r=i?`산책 · ${N} (${this.walkKm}) · ${v}`:`Walk · ${this.walkMin} (${this.walkKm}) · ${this.mood}`,this.notes&&(r+=` · ${this.notes}`),f.walkDuration=this.walkMin,f.walkDistance=this.walkKm,f.mood=this.mood,d=i?"산책 기록 완료":"Walk logged",c=`${N} · ${this.walkKm} · ${i?"좋은 운동이었어요!":"Good effort."}`}else if(n==="vet"){const N=i?((S=this.vetReasons.find(z=>z.id===this.vetReason))==null?void 0:S.nameKo)||this.vetReason:this.vetReason;r=i?`병원 진료: ${N}`:`Vet visit: ${this.vetReason}`,this.notes&&(r+=` · ${this.notes}`),f.visitReason=this.vetReason,d=i?"진료 기록 추가":"Visit added",c=i?"진료 내역 및 알림이 설정되었습니다.":"Reminder set."}else if(n==="symptom"){const N=i?((P=this.symptomOptions.find(z=>z.id===this.symptom))==null?void 0:P.nameKo)||this.symptom:this.symptom;r=i?`증상: ${N}`:`Symptom: ${this.symptom}`,this.notes&&(r+=` · ${this.notes}`),f.symptom=this.symptom,d=i?"증상 기록됨":"Symptom noted",c=i?"수의사 진료용 요약에 추가되었습니다.":"Added to vet-ready summary."}else if(n==="food"||n==="water"){const N=i?((T=this.portionOptions.find(z=>z.id===this.portion))==null?void 0:T.nameKo)||this.portion:this.portion;r=i?`식사: ${N}`:`Meal: ${this.portion}`,this.notes&&(r+=` · ${this.notes}`),f.portion=this.portion,d=i?"식사 기록 완료":"Meal recorded",c=`${N}`}m.editingEvent?(await m.updateEvent(m.editingEvent.id,n,r,f,this.lat,this.lng,u),d=i?"기록 수정 완료!":"Entry updated!",c=i?"수정사항이 저장되었습니다.":"Changes saved."):await m.logEvent(n,r,f,this.lat,this.lng,u),this.close(),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:d,sub:c}}))}async handleDelete(){if(!m.editingEvent)return;const i=m.currentLocale==="ko",n=i?"정말 이 기록을 삭제하시겠습니까?":"Are you sure you want to delete this entry?";if(!window.confirm(n))return;const s=m.editingEvent.id;await m.deleteEvent(s),this.close(),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:i?"기록 삭제됨":"Entry deleted",sub:i?"기록이 정상적으로 삭제되었습니다.":"The log entry has been removed."}}))}handleSpotSelected(i){this.lat=i.detail.lat,this.lng=i.detail.lng,i.detail.locationName?this.locationName=i.detail.locationName:this.lat!==void 0&&this.lng!==void 0&&(this.locationName=`${this.lat.toFixed(4)}, ${this.lng.toFixed(4)}`),this.lat!==void 0&&this.lng!==void 0&&this.fetchWeather(this.lat,this.lng),this.showMapPicker=!1,this.requestUpdate()}close(){this.selectedType=null,this.notes="",this.photoUrl="",this.customMedName="",this.locationName="",this.lat=void 0,this.lng=void 0,this.customTimestamp="",this.isLocating=!1,this.showLocationPicker=!1,this.showMapPicker=!1,this.showTimePicker=!1,m.closeLogger()}render(){var W,H,et,R,C,j,I;if(!m.loggerModalOpen)return null;const i=!this.selectedType,n=!!this.selectedType,s=m.currentLocale==="ko",r={poop:s?["배변 세부 기록","두 번 탭으로 간단하게"]:["A fine specimen","Two taps and you’re done"],pee:s?["영역 표시 업데이트","위치와 규모"]:["Territory update","Where and how long"],vomit:s?["소화 이상 기록","수의사 진료에 도움이 됩니다"]:["Sorry, buddy","Details help the vet"],medicine:s?["투약 완료","일정에 체크하세요"]:["Dose given","Tick it off the schedule"],weight:s?["체중 측정","주기적인 측정이 중요해요"]:["Weigh-in","Monthly is plenty"],vet:s?["병원 진료","진료 내용과 날짜"]:["Vet visit","Reason and date"],walk:s?["즐거운 야외 산책","얼마나 걸었나요?"]:["Out and about","How long were you gone?"],symptom:s?["이상 징후 기록","생생할 때 기록해두세요"]:["Something’s off","Describe it while it’s fresh"],food:s?["식사 및 사료","급여량과 종류"]:["Mealtime","Portion and food"]},d=!!m.editingEvent,c=d?s?["기록 수정하기","내용을 변경하거나 삭제할 수 있습니다"]:["Edit Log Entry","Update details or delete entry"]:this.selectedType?r[this.selectedType]||(s?["기록 세부사항","확인"]:["What happened?","Confirm details"]):s?["무슨 일이 있었나요?","종류를 선택하세요"]:["What happened?","Pick a type"],u=c[0],f=c[1],v=this.selectedType==="poop"||this.selectedType==="vomit",b=this.selectedType==="poop"||this.selectedType==="pee",x=this.selectedType==="weight",k=this.selectedType==="medicine",S=this.selectedType==="walk",P=this.selectedType==="vet",T=this.selectedType==="symptom",N=this.selectedType==="food"||this.selectedType==="water",z=this.selectedType==="poop"||this.selectedType==="pee"||this.selectedType==="vomit"||this.selectedType==="walk";return w`
      <div class="sheet-overlay">
        <div class="sheet-backdrop" @click=${()=>this.close()}></div>
        <div class="sheet-body">
          <div class="sheet-top">
            <div class="sheet-handle"></div>
            <div class="sheet-header-row">
              ${n&&!d?w`
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
            ${i?w`
                  <div class="type-grid">
                    ${this.typeDefs.map($=>w`
                        <div
                          class="type-card"
                          @click=${()=>this.handleSelectType($.id)}
                        >
                          <div class="type-icon" style="background: ${$.c};">
                            ${$.tag}
                          </div>
                          <div>
                            <div class="type-card-name">${s?$.nameKo:$.name}</div>
                            <div class="type-card-sub">${s?$.subKo:$.sub}</div>
                          </div>
                        </div>
                      `)}
                  </div>
                `:w`
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
                    ${this.showTimePicker?w`
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
                                @input=${$=>this.handleCustomTimeInput($.target.value)}
                              />
                            </div>
                          </div>
                        `:null}

                    <!-- 1. Consistency (Poop / Vomit) -->
                    ${v?w`
                          <div>
                            <div class="section-lbl">${s?"변 상태 / 형태":"Consistency"}</div>
                            <div class="section-sub">
                              Type ${this.cons} — ${s?this.consNamesKo[this.cons-1]:this.consNames[this.cons-1]}
                            </div>
                            <div class="cons-row">
                              ${[1,2,3,4,5,6,7].map($=>w`
                                  <div
                                    class="cons-opt ${this.cons===$?"active":""}"
                                    @click=${()=>this.cons=$}
                                  >
                                    <div
                                      style="font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif); font-weight: 800; font-size: 15px; color: #17140F;"
                                    >
                                      ${$}
                                    </div>
                                    <div
                                      style="width: ${5+$*2.4}px; height: 5px; border-radius: 5px; background: #17140F;"
                                    ></div>
                                  </div>
                                `)}
                            </div>
                          </div>
                        `:null}

                    <!-- 2. Size (Poop / Pee) -->
                    ${b?w`
                          <div>
                            <div class="section-lbl" style="margin-bottom: 10px;">
                              ${s?"크기 / 양":"Size"}
                            </div>
                            <div class="size-row">
                              ${["S","M","L","XL"].map($=>w`
                                  <div
                                    class="size-btn ${this.size===$?"active":""}"
                                    @click=${()=>this.size=$}
                                  >
                                    ${$}
                                  </div>
                                `)}
                            </div>
                          </div>
                        `:null}

                    <!-- 3. Weight Stepper (Weight) -->
                    ${x?w`
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
                    ${k?w`
                          <div>
                            <div class="section-lbl" style="margin-bottom: 10px;">
                              ${s?"복용 약품":"Which one"}
                            </div>
                            <div class="med-list">
                              ${this.medOptions.map($=>w`
                                  <div
                                    class="med-item ${this.selectedMed===$.name?"active":""}"
                                    @click=${()=>{this.selectedMed=$.name,this.selectedMedDose=$.dose}}
                                  >
                                    <div class="med-dot"></div>
                                    <div class="med-name">${$.name}</div>
                                    <div class="med-dose">${$.dose}</div>
                                  </div>
                                `)}
                            </div>
                          </div>
                        `:null}

                    <!-- 5. Walk Duration (Walk) -->
                    ${S?w`
                          <div>
                            <div class="section-lbl" style="margin-bottom: 10px;">
                              ${s?"산책 시간 & 거리":"How long"}
                            </div>
                            <div class="walk-row">
                              ${this.walkOptions.map($=>w`
                                  <div
                                    class="walk-btn ${this.walkMin===$.min?"active":""}"
                                    @click=${()=>{this.walkMin=$.min,this.walkKm=$.km}}
                                  >
                                    <div class="walk-min">${s?$.minKo:$.min}</div>
                                    <div class="walk-km">${$.km}</div>
                                  </div>
                                `)}
                            </div>
                          </div>
                        `:null}

                    <!-- 6. Vet Visit Reason (Vet) -->
                    ${P?w`
                          <div>
                            <div class="section-lbl" style="margin-bottom: 10px;">
                              ${s?"진료 내용":"Visit Reason"}
                            </div>
                            <div class="wrap-pill-row">
                              ${this.vetReasons.map($=>w`
                                  <div
                                    class="mood-pill ${this.vetReason===$.id?"active":""}"
                                    @click=${()=>this.vetReason=$.id}
                                  >
                                    ${s?$.nameKo:$.name}
                                  </div>
                                `)}
                            </div>
                          </div>
                        `:null}

                    <!-- 7. Symptom Tags (Symptom) -->
                    ${T?w`
                          <div>
                            <div class="section-lbl" style="margin-bottom: 10px;">
                              ${s?"관찰된 증상":"Symptom observed"}
                            </div>
                            <div class="wrap-pill-row">
                              ${this.symptomOptions.map($=>w`
                                  <div
                                    class="mood-pill ${this.symptom===$.id?"active":""}"
                                    @click=${()=>this.symptom=$.id}
                                  >
                                    ${s?$.nameKo:$.name}
                                  </div>
                                `)}
                            </div>
                          </div>
                        `:null}

                    <!-- 8. Food Portion (Food/Water) -->
                    ${N?w`
                          <div>
                            <div class="section-lbl" style="margin-bottom: 10px;">
                              ${s?"급여량":"Portion"}
                            </div>
                            <div class="wrap-pill-row">
                              ${this.portionOptions.map($=>w`
                                  <div
                                    class="mood-pill ${this.portion===$.id?"active":""}"
                                    @click=${()=>this.portion=$.id}
                                  >
                                    ${s?$.nameKo:$.name}
                                  </div>
                                `)}
                            </div>
                          </div>
                        `:null}

                    <!-- 9. Mood on Delivery (General / Potty) -->
                    ${z?w`
                          <div>
                            <div class="section-lbl" style="margin-bottom: 10px;">
                              ${s?"기분 & 태도":"Mood on delivery"}
                            </div>
                            <div class="wrap-pill-row">
                              ${this.moodOptions.map($=>w`
                                  <div
                                    class="mood-pill ${this.mood===$.id?"active":""}"
                                    @click=${()=>this.mood=$.id}
                                  >
                                    ${s?$.nameKo:$.name}
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
                          ${this.isLocating?s?"GPS 확인 중...":"Locating GPS...":this.locationName||(this.lat?`${this.lat.toFixed(4)}, ${(W=this.lng)==null?void 0:W.toFixed(4)}`:s?"위치 추가":"Add location")}
                        </div>
                        <div class="pill-sub">
                          ${this.lat?s?"GPS 연결됨 · 탭하여 변경":"GPS Tagged · tap to edit":this.locationName?s?"장소 지정됨 · 탭하여 변경":"Custom spot · tap to edit":s?"탭하여 GPS/장소 태그":"Tap to tag GPS/spot"}
                        </div>
                      </div>
                      <div class="pill-info">
                        <div class="pill-label">${s?"기록자":"Logged by"}</div>
                        <div class="pill-val">
                          ${((H=m.currentUser)==null?void 0:H.displayName)||((C=(R=(et=m.currentHousehold)==null?void 0:et.members)==null?void 0:R[0])==null?void 0:C.displayName)||"Me"}
                        </div>
                        <div class="pill-sub">${s?"가족 구성원":"tap to change"}</div>
                      </div>
                    </div>

                    ${this.showLocationPicker?w`
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
                                  ${this.isLocating?s?"GPS 위치 수신 중...":"Getting GPS...":this.lat?s?`GPS 연결됨 (${this.lat.toFixed(4)}, ${(j=this.lng)==null?void 0:j.toFixed(4)})`:`GPS Tagged (${this.lat.toFixed(4)}, ${(I=this.lng)==null?void 0:I.toFixed(4)})`:s?"현재 GPS 위치 태그하기":"Tag Current GPS"}
                                </span>
                              </button>
                              ${this.lat||this.locationName?w`
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
                              ${(s?this.locationPresetsKo:this.locationPresets).map($=>w`
                                  <div
                                    class="location-chip ${this.locationName===$?"active":""}"
                                    @click=${()=>this.selectPreset($)}
                                  >
                                    ${$}
                                  </div>
                                `)}
                            </div>

                            <div class="custom-loc-input-row">
                              <input
                                type="text"
                                class="custom-loc-input"
                                placeholder="${s?"직접 장소명 입력 (예: 센트럴파크 잔디밭)":"Or type custom name (e.g. Elm St & 4th)..."}"
                                .value=${this.locationName}
                                @input=${$=>this.locationName=$.target.value}
                              />
                            </div>
                          </div>
                        `:null}

                    <!-- Photo & Notes -->
                    <div class="photo-notes-row">
                      <div class="photo-box" @click=${()=>this.triggerPhotoUpload()}>
                        ${this.photoUrl?w`<img src="${this.photoUrl}" alt="Photo" />`:w`
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
                          @input=${$=>this.notes=$.target.value}
                        ></textarea>
                      </div>
                    </div>

                    <div style="height: 6px;"></div>
                  </div>
                `}
          </div>

          ${n?w`
                <div class="sheet-bottom" style="${d?"display: flex; gap: 10px; align-items: center;":""}">
                  ${d?w`
                        <button
                          class="log-delete-btn"
                          @click=${()=>this.handleDelete()}
                          title=${s?"기록 삭제":"Delete log"}
                        >
                          🗑️ ${s?"삭제":"Delete"}
                        </button>
                      `:null}
                  <div class="log-submit-btn" style="flex: 1;" @click=${()=>this.handleSave()}>
                    ${d?s?"수정 완료!":"Save changes":s?"기록하기!":"Log it!"}
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
          @spot-selected=${$=>this.handleSpotSelected($)}
          @close=${()=>this.showMapPicker=!1}
        ></dooty-map-picker>
      </div>
    `}},Xe.styles=At`
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
  `,Xe);lt([A()],st.prototype,"selectedType",void 0);lt([A()],st.prototype,"cons",void 0);lt([A()],st.prototype,"size",void 0);lt([A()],st.prototype,"mood",void 0);lt([A()],st.prototype,"selectedMed",void 0);lt([A()],st.prototype,"selectedMedDose",void 0);lt([A()],st.prototype,"customMedName",void 0);lt([A()],st.prototype,"weightKg",void 0);lt([A()],st.prototype,"walkMin",void 0);lt([A()],st.prototype,"walkKm",void 0);lt([A()],st.prototype,"vetReason",void 0);lt([A()],st.prototype,"symptom",void 0);lt([A()],st.prototype,"portion",void 0);lt([A()],st.prototype,"photoUrl",void 0);lt([A()],st.prototype,"notes",void 0);lt([A()],st.prototype,"locationName",void 0);lt([A()],st.prototype,"lat",void 0);lt([A()],st.prototype,"lng",void 0);lt([A()],st.prototype,"isLocating",void 0);lt([A()],st.prototype,"showLocationPicker",void 0);lt([A()],st.prototype,"showMapPicker",void 0);lt([A()],st.prototype,"showTimePicker",void 0);lt([A()],st.prototype,"customTimestamp",void 0);lt([A()],st.prototype,"weatherText",void 0);lt([A()],st.prototype,"isFetchingWeather",void 0);st=lt([zt("dooty-sheet")],st);var te=function(h,i,n,s){var r=arguments.length,d=r<3?i:s===null?s=Object.getOwnPropertyDescriptor(i,n):s,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")d=Reflect.decorate(h,i,n,s);else for(var u=h.length-1;u>=0;u--)(c=h[u])&&(d=(r<3?c(d):r>3?c(i,n,d):c(i,n))||d);return r>3&&d&&Object.defineProperty(i,n,d),d},Qe;let Gt=(Qe=class extends Ft{constructor(){super(...arguments),this.previewUrl="",this.urlInput="",this.activeMode="upload",this.isProcessing=!1,this.errorMessage="",this.petName="",this.petBreed="",this.petBirthday="",this.petPresets=[{emoji:"🐶",bg:"#FFE485",label:"Golden"},{emoji:"🐕",bg:"#FF9E79",label:"Shiba"},{emoji:"🦮",bg:"#B8E1D9",label:"Lab"},{emoji:"🐩",bg:"#EAD5E6",label:"Poodle"},{emoji:"🐱",bg:"#FED7AA",label:"Cat"},{emoji:"🐈‍⬛",bg:"#CBD5E1",label:"Black Cat"},{emoji:"🐾",bg:"#D1FAE5",label:"Paws"},{emoji:"🦴",bg:"#FDE68A",label:"Bone"},{emoji:"🦊",bg:"#FDBA74",label:"Fox"},{emoji:"🐻",bg:"#E2E8F0",label:"Bear"},{emoji:"🐰",bg:"#FCE7F3",label:"Bunny"},{emoji:"🦁",bg:"#FEF08A",label:"Lion"}],this.userPresets=[{emoji:"🧑‍💻",bg:"#FFE485",label:"Dev"},{emoji:"👩‍🦰",bg:"#FF9E79",label:"Redhead"},{emoji:"👨‍🦱",bg:"#B8E1D9",label:"Curly"},{emoji:"🧔",bg:"#EAD5E6",label:"Beard"},{emoji:"👩‍🎨",bg:"#FED7AA",label:"Artist"},{emoji:"🧑‍🌾",bg:"#D1FAE5",label:"Gardener"},{emoji:"🦸",bg:"#FDE68A",label:"Hero"},{emoji:"🕶️",bg:"#CBD5E1",label:"Cool"},{emoji:"⭐",bg:"#FEF08A",label:"Star"},{emoji:"👑",bg:"#FCE7F3",label:"Crown"}]}connectedCallback(){super.connectedCallback(),this.unsubscribe=m.subscribe(()=>{if(m.photoModalOpen&&(this.previewUrl||(this.previewUrl=m.photoModalCurrentAvatar||""),m.photoModalTarget==="pet")){const i=m.currentPet;if(i&&(this.petName||(this.petName=i.name||""),this.petBreed||(this.petBreed=i.breed||""),!this.petBirthday&&i.birthday))try{this.petBirthday=new Date(i.birthday).toISOString().slice(0,10)}catch{this.petBirthday=i.birthday}}this.requestUpdate()})}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.unsubscribe)==null||i.call(this)}handleClose(){this.previewUrl="",this.urlInput="",this.errorMessage="",this.petName="",this.petBreed="",this.petBirthday="",m.closePhotoModal()}triggerFileInput(){var n;const i=(n=this.shadowRoot)==null?void 0:n.querySelector("#fileInput");i==null||i.click()}setAgeInYears(i){const n=new Date;n.setFullYear(n.getFullYear()-i),this.petBirthday=n.toISOString().slice(0,10),this.requestUpdate()}async handleFileSelect(i){var r;const s=(r=i.target.files)==null?void 0:r[0];if(s){if(!s.type.startsWith("image/")){this.errorMessage="Please select a valid image file (PNG, JPG, WEBP).";return}this.isProcessing=!0,this.errorMessage="";try{const d=await this.resizeImage(s,400,400);this.previewUrl=d}catch(d){this.errorMessage="Failed to process image: "+(d.message||"Unknown error")}finally{this.isProcessing=!1}}}resizeImage(i,n,s){return new Promise((r,d)=>{const c=new FileReader;c.onload=u=>{var v;const f=new Image;f.onload=()=>{let b=f.width,x=f.height;const k=Math.min(b,x),S=(b-k)/2,P=(x-k)/2,T=document.createElement("canvas"),N=Math.min(n,k);T.width=N,T.height=N;const z=T.getContext("2d");if(!z){d(new Error("Canvas context not available"));return}z.drawImage(f,S,P,k,k,0,0,N,N),r(T.toDataURL("image/jpeg",.88))},f.onerror=()=>d(new Error("Image failed to load")),f.src=(v=u.target)==null?void 0:v.result},c.onerror=()=>d(new Error("File reader failed")),c.readAsDataURL(i)})}handleSelectPreset(i){const n=`data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="${encodeURIComponent(i.bg)}"/><text x="50" y="65" font-size="54" text-anchor="middle">${i.emoji}</text></svg>`;this.previewUrl=n,this.errorMessage=""}handleApplyUrl(){if(!this.urlInput.trim()){this.errorMessage="Please enter an image URL.";return}this.previewUrl=this.urlInput.trim(),this.errorMessage=""}handleRemovePhoto(){this.previewUrl="",this.urlInput="",this.errorMessage=""}async handleSave(){var d,c,u,f;const i=m.currentLocale==="ko",n=m.photoModalTarget,s=m.photoModalTargetId,r=this.previewUrl;if(n==="pet"){const v=s||((d=m.currentPet)==null?void 0:d.id);v&&await m.updatePetProfile(v,{name:this.petName.trim()||((c=m.currentPet)==null?void 0:c.name)||"Pet",breed:this.petBreed.trim()||((u=m.currentPet)==null?void 0:u.breed)||"",birthday:this.petBirthday||((f=m.currentPet)==null?void 0:f.birthday)||"",avatarUrl:r})}else n==="user"?await m.updateUserAvatar(r):n==="member"&&s&&await m.updateMemberAvatar(s,r);this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:n==="pet"?i?`${this.petName||"반려견"} 프로필 저장됨`:`${this.petName||"Pet"} Profile Saved`:i?"사진 업데이트됨":"Photo Updated",sub:i?"변경사항이 성공적으로 적용되었습니다.":"Changes successfully saved."}})),this.handleClose()}render(){if(!m.photoModalOpen)return w``;const i=m.currentLocale==="ko",n=m.photoModalTarget,s=n==="pet"?this.petPresets:this.userPresets,r=m.photoModalTitle||(n==="pet"?i?"반려동물 정보 및 사진 수정":"Edit Pet Profile & Photo":i?"프로필 사진 변경":"Change Profile Photo");return w`
      <div class="modal-overlay" @click=${d=>d.target===d.currentTarget&&this.handleClose()}>
        <div class="modal-card">
          <!-- Header -->
          <div class="modal-header">
            <div class="modal-title">${r}</div>
            <button class="close-btn" @click=${this.handleClose}>✕</button>
          </div>

          <!-- Body -->
          <div class="modal-body">
            <!-- If editing Pet, show Name, Breed, and Birthday fields -->
            ${n==="pet"?w`
                  <div class="form-group">
                    <label class="field-label">${i?"반려견 이름":"Pet Name"}</label>
                    <input
                      type="text"
                      class="input-box"
                      placeholder="${i?"반려견 이름":"e.g. Jjols, Watson"}"
                      .value=${this.petName}
                      @input=${d=>this.petName=d.target.value}
                    />
                  </div>

                  <div class="form-group">
                    <label class="field-label">${i?"품종":"Breed"}</label>
                    <input
                      type="text"
                      class="input-box"
                      placeholder="${i?"예: 스푸들, 비글 믹스":"e.g. Spoodle, Beagle mix"}"
                      .value=${this.petBreed}
                      @input=${d=>this.petBreed=d.target.value}
                    />
                  </div>

                  <div class="form-group">
                    <label class="field-label">${i?"생년월일 (나이 계산)":"Birthday (for Age calculation)"}</label>
                    <input
                      type="date"
                      class="input-box"
                      .value=${this.petBirthday}
                      @input=${d=>this.petBirthday=d.target.value}
                    />
                    <div style="font-size: 10.5px; font-weight: 700; color: #7D7362; margin-top: 4px;">
                      ${i?"빠른 나이 선택:":"Quick Age Select:"}
                    </div>
                    <div class="age-chips-container">
                      ${[1,2,3,4,5,6,7,8,9,10].map(d=>w`
                          <div class="age-chip" @click=${()=>this.setAgeInYears(d)}>
                            ${i?`${d}살`:`${d} yr${d>1?"s":""}`}
                          </div>
                        `)}
                    </div>
                  </div>
                `:null}

            <!-- Avatar Preview -->
            <div class="preview-container">
              <div class="avatar-preview-wrapper">
                ${this.previewUrl?w`<img src="${this.previewUrl}" class="avatar-preview-img" alt="Preview" />`:w`<div class="avatar-preview-emoji">${n==="pet"?"🐶":"👤"}</div>`}
              </div>
              <div class="preview-label">${i?"프로필 사진 / 아바타":"Profile Photo / Avatar"}</div>
            </div>

            <!-- Error Banner -->
            ${this.errorMessage?w`<div class="error-msg">${this.errorMessage}</div>`:""}

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
            ${this.activeMode==="upload"?w`
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
            ${this.activeMode==="preset"?w`
                  <div class="preset-grid">
                    ${s.map(d=>w`
                        <div
                          class="preset-item"
                          style="background: ${d.bg};"
                          title="${d.label}"
                          @click=${()=>this.handleSelectPreset(d)}
                        >
                          ${d.emoji}
                        </div>
                      `)}
                  </div>
                `:""}

            <!-- Mode Content: URL -->
            ${this.activeMode==="url"?w`
                  <div class="url-input-container">
                    <input
                      type="url"
                      class="url-text-input"
                      placeholder="${"https://example.com/photo.jpg"}"
                      .value=${this.urlInput}
                      @input=${d=>this.urlInput=d.target.value}
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
              <button class="btn-save" ?disabled=${this.isProcessing} @click=${this.handleSave}>
                ${this.isProcessing?i?"저장 중...":"Saving...":i?"저장하기":"Save Changes"}
              </button>
            </div>
          </div>
        </div>
      </div>
    `}},Qe.styles=At`
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
  `,Qe);te([A()],Gt.prototype,"unsubscribe",void 0);te([A()],Gt.prototype,"previewUrl",void 0);te([A()],Gt.prototype,"urlInput",void 0);te([A()],Gt.prototype,"activeMode",void 0);te([A()],Gt.prototype,"isProcessing",void 0);te([A()],Gt.prototype,"errorMessage",void 0);te([A()],Gt.prototype,"petName",void 0);te([A()],Gt.prototype,"petBreed",void 0);te([A()],Gt.prototype,"petBirthday",void 0);Gt=te([zt("dooty-photo-modal")],Gt);var Lt=function(h,i,n,s){var r=arguments.length,d=r<3?i:s===null?s=Object.getOwnPropertyDescriptor(i,n):s,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")d=Reflect.decorate(h,i,n,s);else for(var u=h.length-1;u>=0;u--)(c=h[u])&&(d=(r<3?c(d):r>3?c(i,n,d):c(i,n))||d);return r>3&&d&&Object.defineProperty(i,n,d),d},ti;let $t=(ti=class extends Ft{constructor(){super(...arguments),this.view="signin",this.email="",this.password="",this.showPassword=!1,this.displayName="",this.userAvatar="",this.dogName="Nacho",this.dogBreed="",this.dogBirthday="",this.householdName="",this.dogAvatar="",this.setupSize="M",this.trackingPrefs={poop:!0,pee:!0,vomit:!0,meds:!0,weight:!0,walk:!0,vet:!1,symptom:!1},this.joinCode="",this.joinRole="Dan the walker",this.errorMessage="",this.isSubmitting=!1}connectedCallback(){super.connectedCallback(),this.unsubscribe=m.subscribe(()=>{this.view=m.authView,this.requestUpdate()})}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.unsubscribe)==null||i.call(this)}setView(i){this.view=i,m.setAuthView(i),this.errorMessage=""}calculateStrength(i){const n=m.t.auth.signupStep1;return!i||i.length<6?{label:n.weak,width:"25%",color:"#FF5A3C"}:i.length>=10&&/[A-Z]/.test(i)&&/[0-9]/.test(i)?{label:n.strong,width:"100%",color:"#1FC99B"}:i.length>=8?{label:n.good,width:"65%",color:"#FFCE2E"}:{label:n.weak,width:"35%",color:"#FF5A3C"}}async handleLogin(i){var s;i&&i.preventDefault(),this.errorMessage="";const n=m.t.auth.errors;if(!this.email.trim()){this.errorMessage=n.emailRequired;return}if(!this.password){this.errorMessage=n.passwordRequired;return}this.isSubmitting=!0;try{await m.signIn({email:this.email.trim(),password:this.password}),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:m.currentLocale==="ko"?"환영합니다! 👋":"Welcome back! 👋",sub:((s=m.currentHousehold)==null?void 0:s.name)||"Household"}}))}catch(r){this.errorMessage=r.message||n.logInFailed}finally{this.isSubmitting=!1}}handleGoToStep2(i){i&&i.preventDefault(),this.errorMessage="";const n=m.t.auth.errors;if(!this.displayName.trim()){this.errorMessage=n.yourNameRequired;return}if(!this.email.trim()){this.errorMessage=n.emailRequired;return}if(!this.password||this.password.length<6){this.errorMessage=n.passwordTooShort;return}this.setView("dogsetup")}async handleFinishSetup(i){i&&i.preventDefault(),this.errorMessage="";const n=m.t.auth.errors;if(!this.dogName.trim()){this.errorMessage=n.petNameRequired;return}const s=this.householdName.trim()||`${this.dogName.trim()} Household`;this.isSubmitting=!0;try{await m.signUp({email:this.email.trim(),password:this.password,displayName:this.displayName.trim(),mode:"create",householdName:s,pet:{name:this.dogName.trim(),species:"dog",breed:this.dogBreed.trim(),birthday:this.dogBirthday,size:this.setupSize,avatarUrl:this.dogAvatar},trackingPreferences:this.trackingPrefs}),Object.entries(this.trackingPrefs).forEach(([r,d])=>{m.setTrackingPreference(r,d)}),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:m.currentLocale==="ko"?"준비 완료! 🎉":"All set! 🎉",sub:m.currentLocale==="ko"?"다음 번 산책 때 주황색 버튼을 눌러보세요.":"Tap the orange button the next time he goes."}}))}catch(r){this.errorMessage=r.message||n.signUpFailed}finally{this.isSubmitting=!1}}handleGoJoinDetails(i){i&&i.preventDefault(),this.errorMessage="";const n=m.t.auth.errors;if(!this.joinCode.trim()||this.joinCode.trim().length<4){this.errorMessage=n.inviteCodeRequired;return}this.setView("joindetails")}async handleJoinSubmit(i){var s;i&&i.preventDefault(),this.errorMessage="";const n=m.t.auth.errors;if(!this.displayName.trim()){this.errorMessage=n.yourNameRequired;return}if(!this.email.trim()){this.errorMessage=n.emailRequired;return}if(!this.password||this.password.length<6){this.errorMessage=n.passwordTooShort;return}this.isSubmitting=!0;try{await m.signUp({email:this.email.trim(),password:this.password,displayName:this.displayName.trim(),mode:"join",inviteCode:this.joinCode.trim().toUpperCase(),role:this.joinRole}),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:m.currentLocale==="ko"?`${this.joinRole}님, 환영합니다! 🎉`:`You're in, ${this.joinRole}! 🎉`,sub:((s=m.currentHousehold)==null?void 0:s.name)||"Household"}}))}catch(r){this.errorMessage=r.message||n.joinFailed}finally{this.isSubmitting=!1}}render(){const i=m.t.auth;if(this.view==="signin")return w`
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

          ${this.errorMessage?w`<div class="error-banner">⚠️ ${this.errorMessage}</div>`:null}

          <form class="card" @submit=${n=>this.handleLogin(n)}>
            <div>
              <label class="field-label">${i.emailLabel}</label>
              <input
                type="email"
                class="input-box"
                placeholder="${i.emailPlaceholder}"
                .value=${this.email}
                @input=${n=>this.email=n.target.value}
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
                  @input=${n=>this.password=n.target.value}
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
              ${this.isSubmitting?w`<span class="btn-spinner"></span> ${m.currentLocale==="ko"?"로그인 중...":"Logging in..."}`:i.logInBtn}
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
      `;if(this.view==="signup"){const n=i.signupStep1,s=this.calculateStrength(this.password);return w`
        <div class="view-signup">
          <div class="back-btn" @click=${()=>this.setView("signin")}>
            ‹ ${n.back}
          </div>

          <div class="step-bar-row">
            <div class="step-pill" style="background: #FFCE2E;"></div>
            <div class="step-pill" style="background: #FFF;"></div>
            <div class="step-label">${n.stepCount}</div>
          </div>

          <div>
            <div class="section-headline">${n.title}</div>
            <div class="section-subtext">${n.subtitle}</div>
          </div>

          ${this.errorMessage?w`<div class="error-banner">⚠️ ${this.errorMessage}</div>`:null}

          <form class="card" @submit=${r=>this.handleGoToStep2(r)}>
            <div>
              <label class="field-label">${n.yourName}</label>
              <input
                type="text"
                class="input-box"
                placeholder="${n.yourNamePlaceholder}"
                .value=${this.displayName}
                @input=${r=>this.displayName=r.target.value}
                required
              />
            </div>

            <div>
              <label class="field-label">${n.email}</label>
              <input
                type="email"
                class="input-box"
                placeholder="${n.emailPlaceholder}"
                .value=${this.email}
                @input=${r=>this.email=r.target.value}
                required
              />
            </div>

            <div>
              <label class="field-label">${n.password}</label>
              <div class="password-wrapper">
                <input
                  type="${this.showPassword?"text":"password"}"
                  class="password-input"
                  placeholder="${n.passwordPlaceholder}"
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
              ${n.nextTheDog}
            </button>
          </form>

          <div style="font-size: 11.5px; font-weight: 600; color: #9A9080; text-align: center; line-height: 1.5;">
            ${n.disclaimer}
          </div>
        </div>
      `}if(this.view==="dogsetup"){const n=i.signupStep2,s=["S","M","L","XL"];return w`
        <div class="view-dogsetup">
          <div class="back-btn" @click=${()=>this.setView("signup")}>
            ‹ ${n.back}
          </div>

          <div class="step-bar-row">
            <div class="step-pill" style="background: #1FC99B;"></div>
            <div class="step-pill" style="background: #FFCE2E;"></div>
            <div class="step-label">${n.stepCount}</div>
          </div>

          <div>
            <div class="section-headline">${n.title}</div>
            <div class="section-subtext">${n.subtitle}</div>
          </div>

          ${this.errorMessage?w`<div class="error-banner">⚠️ ${this.errorMessage}</div>`:null}

          <form class="card" @submit=${r=>this.handleFinishSetup(r)}>
            <div style="display: flex; gap: 14px; align-items: center;">
              <div
                class="photo-upload-circle"
                @click=${()=>m.openPhotoModal({target:"pet",currentAvatar:this.dogAvatar,title:"Pick Dog Avatar"})}
              >
                ${this.dogAvatar?w`<img src="${this.dogAvatar}" alt="Dog Avatar" />`:w`
                      <div style="font-size: 20px; font-weight: 800; color: #8A7F68;">+</div>
                      <div style="font-size: 9px; font-weight: 800; color: #8A7F68;">${n.photo}</div>
                    `}
              </div>
              <div style="flex: 1; min-width: 0;">
                <label class="field-label">${n.name}</label>
                <input
                  type="text"
                  class="input-box"
                  style="font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif); font-size: 19px; letter-spacing: -0.5px;"
                  placeholder="${n.namePlaceholder}"
                  .value=${this.dogName}
                  @input=${r=>this.dogName=r.target.value}
                  required
                />
              </div>
            </div>

            <div>
              <label class="field-label">${m.currentLocale==="ko"?"품종 (선택)":"Breed (optional)"}</label>
              <input
                type="text"
                class="input-box"
                placeholder="${m.currentLocale==="ko"?"예: 스푸들, 비글 믹스":"e.g. Spoodle, Beagle mix"}"
                .value=${this.dogBreed}
                @input=${r=>this.dogBreed=r.target.value}
              />
            </div>

            <div>
              <label class="field-label">${m.currentLocale==="ko"?"생일 또는 나이":"Birthday or Age"}</label>
              <input
                type="date"
                class="input-box"
                .value=${this.dogBirthday}
                @input=${r=>this.dogBirthday=r.target.value}
              />
              <div class="age-chips-row">
                ${[1,2,3,4,5,6,7,8].map(r=>w`
                    <div
                      class="age-chip"
                      @click=${()=>{const d=new Date;d.setFullYear(d.getFullYear()-r),this.dogBirthday=d.toISOString().slice(0,10)}}
                    >
                      ${m.currentLocale==="ko"?`${r}살`:`${r} yr${r>1?"s":""}`}
                    </div>
                  `)}
              </div>
            </div>

            <div>
              <label class="field-label">${n.householdName}</label>
              <input
                type="text"
                class="input-box"
                placeholder="${n.householdNamePlaceholder}"
                .value=${this.householdName}
                @input=${r=>this.householdName=r.target.value}
              />
              <div style="font-size: 11px; font-weight: 600; color: #9A9080; margin-top: 6px; line-height: 1.4;">
                ${n.householdHelp}
              </div>
            </div>

            <div>
              <label class="field-label">${n.size}</label>
              <div class="size-grid">
                ${s.map(r=>{const d=n.sizes[r],c=this.setupSize===r;return w`
                    <div
                      class="size-tile ${c?"active":""}"
                      @click=${()=>this.setupSize=r}
                    >
                      <div style="font-size: 13.5px; font-weight: 800; color: #17140F;">${d.label}</div>
                      <div style="font-size: 9.5px; font-weight: 700; color: #6A6152;">${d.kg}</div>
                    </div>
                  `})}
              </div>
            </div>

            <div>
              <label class="field-label">${n.whatTrack}</label>
              <div class="track-chips-grid">
                ${Object.entries(n.trackingOptions).map(([r,d])=>{const c=!!this.trackingPrefs[r];return w`
                    <div
                      class="track-chip ${c?"active":""}"
                      @click=${()=>{this.trackingPrefs={...this.trackingPrefs,[r]:!this.trackingPrefs[r]}}}
                    >
                      <div class="track-dot"></div>
                      <span>${d}</span>
                    </div>
                  `})}
              </div>
            </div>

            <button
              type="submit"
              class="btn-green"
              ?disabled=${this.isSubmitting}
            >
              ${this.isSubmitting?w`<span class="btn-spinner"></span> ${m.currentLocale==="ko"?"설정 중...":"Setting up..."}`:n.startTracking}
            </button>
          </form>

          <div
            style="text-align: center; font-size: 12.5px; font-weight: 700; color: #6A6152; cursor: pointer; padding: 2px; line-height: 1.45;"
            @click=${()=>m.setActiveTab("import")}
          >
            ${n.alreadyTracking} <span style="text-decoration: underline;">${n.importHistory}</span>
          </div>
        </div>
      `}if(this.view==="join"){const n=i.joinStep1,s=(this.joinCode.toUpperCase()+"      ").slice(0,6).split("");return w`
        <div class="view-join">
          <div class="back-btn" @click=${()=>this.setView("signin")}>
            ‹ ${n.back}
          </div>

          <div>
            <div class="section-headline">${n.title}</div>
            <div class="section-subtext-mint">${n.subtitle}</div>
          </div>

          ${this.errorMessage?w`<div class="error-banner">⚠️ ${this.errorMessage}</div>`:null}

          <form class="card" @submit=${r=>this.handleGoJoinDetails(r)}>
            <div style="font-size: 10.5px; font-weight: 800; letter-spacing: 1.4px; color: #9A9080; text-transform: uppercase; text-align: center;">
              ${n.enterCode}
            </div>

            <div class="code-boxes-row">
              ${s.map(r=>w`
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
              ${n.continueBtn}
            </button>
          </form>

          <div class="perks-card">
            <div style="font-size: 13.5px; font-weight: 800; color: #FFF;">${n.perksTitle}</div>
            <div style="display: flex; flex-direction: column; gap: 7px; margin-top: 9px;">
              ${n.perks.map(r=>w`
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
      `}if(this.view==="joindetails"){const n=i.joinStep2,s=[this.displayName||"Dan",`${this.displayName||"Dan"} the walker`,`${this.displayName?this.displayName+" W.":"Dan W."}`,"The walker"];return w`
        <div class="view-joindetails">
          <div class="back-btn" @click=${()=>this.setView("join")}>
            ‹ ${n.back}
          </div>

          <div class="accepted-badge-card">
            <div class="checkmark-circle">✓</div>
            <div style="flex: 1; min-width: 0;">
              <div style="font-size: 10px; font-weight: 800; letter-spacing: 1.4px; color: #9A9080; text-transform: uppercase;">
                ${n.codeAccepted}
              </div>
              <div style="font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif); font-weight: 800; font-size: 18px; color: #17140F; letter-spacing: -0.5px; line-height: 1.15; margin-top: 1px;">
                ${this.householdName||"Household"}
              </div>
              <div style="font-size: 11.5px; font-weight: 700; color: #6A6152; margin-top: 1px;">
                ${n.summarySubtitle("3 people",this.joinRole)}
              </div>
            </div>
          </div>

          <div>
            <div class="section-headline">${n.title}</div>
            <div class="section-subtext-mint">${n.subtitle}</div>
          </div>

          ${this.errorMessage?w`<div class="error-banner">⚠️ ${this.errorMessage}</div>`:null}

          <form class="card" @submit=${r=>this.handleJoinSubmit(r)}>
            <div style="display: flex; gap: 13px; align-items: flex-end;">
              <div
                class="photo-upload-circle"
                style="width: 64px; height: 64px;"
                @click=${()=>m.openPhotoModal({target:"user",currentAvatar:this.userAvatar,title:"Pick Profile Photo"})}
              >
                ${this.userAvatar?w`<img src="${this.userAvatar}" alt="User Avatar" />`:w`
                      <div style="font-size: 18px; font-weight: 800; color: #8A7F68;">+</div>
                      <div style="font-size: 8.5px; font-weight: 800; color: #8A7F68;">photo</div>
                    `}
              </div>
              <div style="flex: 1; min-width: 0;">
                <label class="field-label">${n.yourName}</label>
                <input
                  type="text"
                  class="input-box"
                  placeholder="${n.yourNamePlaceholder}"
                  .value=${this.displayName}
                  @input=${r=>this.displayName=r.target.value}
                  required
                />
              </div>
            </div>

            <div>
              <label class="field-label">${n.email}</label>
              <input
                type="email"
                class="input-box"
                placeholder="${n.emailPlaceholder}"
                .value=${this.email}
                @input=${r=>this.email=r.target.value}
                required
              />
            </div>

            <div>
              <label class="field-label">${n.password}</label>
              <div class="password-wrapper">
                <input
                  type="${this.showPassword?"text":"password"}"
                  class="password-input"
                  placeholder="${n.passwordPlaceholder}"
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
              <label class="field-label">${n.howTheySeeYou}</label>
              <div class="role-chips-row">
                ${s.map(r=>{const d=this.joinRole===r;return w`
                    <div
                      class="role-chip ${d?"active":""}"
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
              ${this.isSubmitting?w`<span class="btn-spinner"></span> ${m.currentLocale==="ko"?"가입 중...":"Joining..."}`:n.joinHouseholdBtn}
            </button>
          </form>

          <div style="font-size: 11.5px; font-weight: 600; color: #0A5A45; text-align: center; line-height: 1.5;">
            ${n.footerDisclaimer}
          </div>
        </div>
      `}return w``}},ti.styles=At`
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
  `,ti);Lt([A()],$t.prototype,"view",void 0);Lt([A()],$t.prototype,"email",void 0);Lt([A()],$t.prototype,"password",void 0);Lt([A()],$t.prototype,"showPassword",void 0);Lt([A()],$t.prototype,"displayName",void 0);Lt([A()],$t.prototype,"userAvatar",void 0);Lt([A()],$t.prototype,"dogName",void 0);Lt([A()],$t.prototype,"dogBreed",void 0);Lt([A()],$t.prototype,"dogBirthday",void 0);Lt([A()],$t.prototype,"householdName",void 0);Lt([A()],$t.prototype,"dogAvatar",void 0);Lt([A()],$t.prototype,"setupSize",void 0);Lt([A()],$t.prototype,"trackingPrefs",void 0);Lt([A()],$t.prototype,"joinCode",void 0);Lt([A()],$t.prototype,"joinRole",void 0);Lt([A()],$t.prototype,"errorMessage",void 0);Lt([A()],$t.prototype,"isSubmitting",void 0);$t=Lt([zt("dooty-auth")],$t);var po=function(h,i,n,s){var r=arguments.length,d=r<3?i:s===null?s=Object.getOwnPropertyDescriptor(i,n):s,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")d=Reflect.decorate(h,i,n,s);else for(var u=h.length-1;u>=0;u--)(c=h[u])&&(d=(r<3?c(d):r>3?c(i,n,d):c(i,n))||d);return r>3&&d&&Object.defineProperty(i,n,d),d},ei;let Ci=(ei=class extends Ft{constructor(){super(...arguments),this.activeView="today",this.toast=null,this.burstCount=0}connectedCallback(){super.connectedCallback(),this.unsubscribe=m.subscribe(()=>{this.activeView=m.activeTab,this.requestUpdate()}),this.addEventListener("dooty-navigate",i=>{this.activeView=i.detail,m.activeTab=i.detail,this.requestUpdate()}),this.addEventListener("dooty-toast",i=>{this.showToast(i.detail.title,i.detail.sub)}),m.init()}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.unsubscribe)==null||i.call(this),this.toastTimer&&clearTimeout(this.toastTimer)}showToast(i,n){this.toastTimer&&clearTimeout(this.toastTimer),this.toast={title:i,sub:n},this.burstCount++,this.requestUpdate(),this.toastTimer=setTimeout(()=>{this.toast=null,this.requestUpdate()},3200)}render(){const i=m.isAuthenticated,n=i&&this.activeView!=="wrapped",s=["#FF5A3C","#FFCE2E","#2B5BE8","#1FC99B","#17140F"];return w`
      <!-- Outer Container -->
      <div class="device-shell">
        <!-- Viewport -->
        <div class="device-viewport">
          ${i?this.activeView==="today"?w`<dooty-home></dooty-home>`:this.activeView==="analytics"?w`<dooty-numbers></dooty-numbers>`:this.activeView==="map"?w`<dooty-map></dooty-map>`:this.activeView==="dog"?w`<dooty-dog></dooty-dog>`:this.activeView==="deep"?w`<dooty-deep></dooty-deep>`:this.activeView==="wrapped"?w`<dooty-wrapped></dooty-wrapped>`:this.activeView==="settings"?w`<dooty-settings></dooty-settings>`:this.activeView==="invite"?w`<dooty-invite></dooty-invite>`:this.activeView==="import"?w`<dooty-importer></dooty-importer>`:w`<dooty-home></dooty-home>`:w`<dooty-auth></dooty-auth>`}
        </div>

        <!-- Sticky Floating Dock (Pinned to bottom of device-shell, only when authenticated) -->
        ${n?w`<dooty-dock></dooty-dock>`:null}

        <!-- Toast Notification (Pinned over dock) -->
        ${this.toast?w`
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
        ${this.burstCount>0&&this.toast?w`
              <div class="burst-layer">
                ${Array.from({length:26},(r,d)=>{const c=d/26*Math.PI*2,u=Math.round(Math.cos(c)*(120+d%4*40)),f=Math.round(Math.sin(c)*(120+d%4*40)-90),v=700+d%5*130;return w`
                    <div
                      class="confetti-particle"
                      style="
                        width: ${d%3?9:13}px;
                        height: ${d%3?9:13}px;
                        border-radius: ${d%2?"50%":"3px"};
                        background: ${s[d%5]};
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

        <!-- Photo & Avatar Customization Modal -->
        <dooty-photo-modal></dooty-photo-modal>
      </div>
    `}},ei.styles=At`
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
  `,ei);po([A()],Ci.prototype,"activeView",void 0);po([A()],Ci.prototype,"toast",void 0);po([A()],Ci.prototype,"burstCount",void 0);Ci=po([zt("dooty-app")],Ci);const Fl="modulepreload",$l=function(h,i){return new URL(h,i).href},Ms={},Pl=function(i,n,s){let r=Promise.resolve();if(n&&n.length>0){let c=function(b){return Promise.all(b.map(x=>Promise.resolve(x).then(k=>({status:"fulfilled",value:k}),k=>({status:"rejected",reason:k}))))};const u=document.getElementsByTagName("link"),f=document.querySelector("meta[property=csp-nonce]"),v=(f==null?void 0:f.nonce)||(f==null?void 0:f.getAttribute("nonce"));r=c(n.map(b=>{if(b=$l(b,s),b in Ms)return;Ms[b]=!0;const x=b.endsWith(".css"),k=x?'[rel="stylesheet"]':"";if(!!s)for(let T=u.length-1;T>=0;T--){const N=u[T];if(N.href===b&&(!x||N.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${b}"]${k}`))return;const P=document.createElement("link");if(P.rel=x?"stylesheet":Fl,x||(P.as="script"),P.crossOrigin="",P.href=b,v&&P.setAttribute("nonce",v),document.head.appendChild(P),x)return new Promise((T,N)=>{P.addEventListener("load",T),P.addEventListener("error",()=>N(new Error(`Unable to preload CSS for ${b}`)))})}))}function d(c){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=c,window.dispatchEvent(u),!u.defaultPrevented)throw c}return r.then(c=>{for(const u of c||[])u.status==="rejected"&&d(u.reason);return i().catch(d)})};function Tl(h={}){const{immediate:i=!1,onNeedRefresh:n,onOfflineReady:s,onRegistered:r,onRegisteredSW:d,onRegisterError:c}=h;let u,f;const v=async(x=!0)=>{await f};async function b(){if("serviceWorker"in navigator){if(u=await Pl(async()=>{const{Workbox:x}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:x}},[],import.meta.url).then(({Workbox:x})=>new x("./sw.js",{scope:"./",type:"classic"})).catch(x=>{c==null||c(x)}),!u)return;u.addEventListener("activated",x=>{(x.isUpdate||x.isExternal)&&window.location.reload()}),u.addEventListener("installed",x=>{x.isUpdate||s==null||s()}),u.register({immediate:i}).then(x=>{d?d("./sw.js",x):r==null||r(x)}).catch(x=>{c==null||c(x)})}}return f=b(),v}Tl({onNeedRefresh(){console.log("New app version available.")},onOfflineReady(){console.log("App ready to work offline.")}});
