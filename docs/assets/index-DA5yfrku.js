(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const et=globalThis,Dt=et.ShadowRoot&&(et.ShadyCSS===void 0||et.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,zt=Symbol(),It=new WeakMap;let lo=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==zt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Dt&&e===void 0){const o=t!==void 0&&t.length===1;o&&(e=It.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&It.set(t,e))}return e}toString(){return this.cssText}};const Do=n=>new lo(typeof n=="string"?n:n+"",void 0,zt),q=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((o,i,s)=>o+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[s+1],n[0]);return new lo(t,n,zt)},zo=(n,e)=>{if(Dt)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const o=document.createElement("style"),i=et.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=t.cssText,n.appendChild(o)}},jt=Dt?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return Do(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:_o,defineProperty:No,getOwnPropertyDescriptor:Mo,getOwnPropertyNames:Lo,getOwnPropertySymbols:Io,getPrototypeOf:jo}=Object,ie=globalThis,Ot=ie.trustedTypes,Oo=Ot?Ot.emptyScript:"",ft=ie.reactiveElementPolyfillSupport,Be=(n,e)=>n,tt={toAttribute(n,e){switch(e){case Boolean:n=n?Oo:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},_t=(n,e)=>!_o(n,e),Bt={attribute:!0,type:String,converter:tt,reflect:!1,useDefault:!1,hasChanged:_t};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ie.litPropertyMetadata??(ie.litPropertyMetadata=new WeakMap);let we=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Bt){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(e,o,t);i!==void 0&&No(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){const{get:i,set:s}=Mo(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:i,set(a){const r=i==null?void 0:i.call(this);s==null||s.call(this,a),this.requestUpdate(e,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Bt}static _$Ei(){if(this.hasOwnProperty(Be("elementProperties")))return;const e=jo(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Be("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Be("properties"))){const t=this.properties,o=[...Lo(t),...Io(t)];for(const i of o)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[o,i]of t)this.elementProperties.set(o,i)}this._$Eh=new Map;for(const[t,o]of this.elementProperties){const i=this._$Eu(t,o);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const i of o)t.unshift(jt(i))}else e!==void 0&&t.push(jt(e));return t}static _$Eu(e,t){const o=t.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return zo(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var o;return(o=t.hostConnected)==null?void 0:o.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var o;return(o=t.hostDisconnected)==null?void 0:o.call(t)})}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){var s;const o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(i!==void 0&&o.reflect===!0){const a=(((s=o.converter)==null?void 0:s.toAttribute)!==void 0?o.converter:tt).toAttribute(t,o.type);this._$Em=e,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(e,t){var s,a;const o=this.constructor,i=o._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const r=o.getPropertyOptions(i),l=typeof r.converter=="function"?{fromAttribute:r.converter}:((s=r.converter)==null?void 0:s.fromAttribute)!==void 0?r.converter:tt;this._$Em=i;const c=l.fromAttribute(t,r.type);this[i]=c??((a=this._$Ej)==null?void 0:a.get(i))??c,this._$Em=null}}requestUpdate(e,t,o,i=!1,s){var a;if(e!==void 0){const r=this.constructor;if(i===!1&&(s=this[e]),o??(o=r.getPropertyOptions(e)),!((o.hasChanged??_t)(s,t)||o.useDefault&&o.reflect&&s===((a=this._$Ej)==null?void 0:a.get(e))&&!this.hasAttribute(r._$Eu(e,o))))return;this.C(e,t,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:i,wrapped:s},a){o&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,a??t??this[e]),s!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,a]of this._$Ep)this[s]=a;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,a]of i){const{wrapped:r}=a,l=this[s];r!==!0||this._$AL.has(s)||l===void 0||this.C(s,void 0,a,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(o=this._$EO)==null||o.forEach(i=>{var s;return(s=i.hostUpdate)==null?void 0:s.call(i)}),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(o=>{var i;return(i=o.hostUpdated)==null?void 0:i.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};we.elementStyles=[],we.shadowRootOptions={mode:"open"},we[Be("elementProperties")]=new Map,we[Be("finalized")]=new Map,ft==null||ft({ReactiveElement:we}),(ie.reactiveElementVersions??(ie.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Re=globalThis,Rt=n=>n,ot=Re.trustedTypes,Ht=ot?ot.createPolicy("lit-html",{createHTML:n=>n}):void 0,co="$lit$",oe=`lit$${Math.random().toFixed(9).slice(2)}$`,po="?"+oe,Bo=`<${po}>`,ge=document,He=()=>ge.createComment(""),Ue=n=>n===null||typeof n!="object"&&typeof n!="function",Nt=Array.isArray,Ro=n=>Nt(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",vt=`[ 	
\f\r]`,je=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ut=/-->/g,Wt=/>/g,ce=RegExp(`>|${vt}(?:([^\\s"'>=/]+)(${vt}*=${vt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),qt=/'/g,Vt=/"/g,ho=/^(?:script|style|textarea|title)$/i,Ho=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),p=Ho(1),Le=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),Gt=new WeakMap,pe=ge.createTreeWalker(ge,129);function uo(n,e){if(!Nt(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ht!==void 0?Ht.createHTML(e):e}const Uo=(n,e)=>{const t=n.length-1,o=[];let i,s=e===2?"<svg>":e===3?"<math>":"",a=je;for(let r=0;r<t;r++){const l=n[r];let c,g,h=-1,u=0;for(;u<l.length&&(a.lastIndex=u,g=a.exec(l),g!==null);)u=a.lastIndex,a===je?g[1]==="!--"?a=Ut:g[1]!==void 0?a=Wt:g[2]!==void 0?(ho.test(g[2])&&(i=RegExp("</"+g[2],"g")),a=ce):g[3]!==void 0&&(a=ce):a===ce?g[0]===">"?(a=i??je,h=-1):g[1]===void 0?h=-2:(h=a.lastIndex-g[2].length,c=g[1],a=g[3]===void 0?ce:g[3]==='"'?Vt:qt):a===Vt||a===qt?a=ce:a===Ut||a===Wt?a=je:(a=ce,i=void 0);const y=a===ce&&n[r+1].startsWith("/>")?" ":"";s+=a===je?l+Bo:h>=0?(o.push(c),l.slice(0,h)+co+l.slice(h)+oe+y):l+oe+(h===-2?r:y)}return[uo(n,s+(n[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]};class We{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let s=0,a=0;const r=e.length-1,l=this.parts,[c,g]=Uo(e,t);if(this.el=We.createElement(c,o),pe.currentNode=this.el.content,t===2||t===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=pe.nextNode())!==null&&l.length<r;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(co)){const u=g[a++],y=i.getAttribute(h).split(oe),w=/([.?@])?(.*)/.exec(u);l.push({type:1,index:s,name:w[2],strings:y,ctor:w[1]==="."?qo:w[1]==="?"?Vo:w[1]==="@"?Go:it}),i.removeAttribute(h)}else h.startsWith(oe)&&(l.push({type:6,index:s}),i.removeAttribute(h));if(ho.test(i.tagName)){const h=i.textContent.split(oe),u=h.length-1;if(u>0){i.textContent=ot?ot.emptyScript:"";for(let y=0;y<u;y++)i.append(h[y],He()),pe.nextNode(),l.push({type:2,index:++s});i.append(h[u],He())}}}else if(i.nodeType===8)if(i.data===po)l.push({type:2,index:s});else{let h=-1;for(;(h=i.data.indexOf(oe,h+1))!==-1;)l.push({type:7,index:s}),h+=oe.length-1}s++}}static createElement(e,t){const o=ge.createElement("template");return o.innerHTML=e,o}}function Ie(n,e,t=n,o){var a,r;if(e===Le)return e;let i=o!==void 0?(a=t._$Co)==null?void 0:a[o]:t._$Cl;const s=Ue(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==s&&((r=i==null?void 0:i._$AO)==null||r.call(i,!1),s===void 0?i=void 0:(i=new s(n),i._$AT(n,t,o)),o!==void 0?(t._$Co??(t._$Co=[]))[o]=i:t._$Cl=i),i!==void 0&&(e=Ie(n,i._$AS(n,e.values),i,o)),e}class Wo{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,i=((e==null?void 0:e.creationScope)??ge).importNode(t,!0);pe.currentNode=i;let s=pe.nextNode(),a=0,r=0,l=o[0];for(;l!==void 0;){if(a===l.index){let c;l.type===2?c=new Ge(s,s.nextSibling,this,e):l.type===1?c=new l.ctor(s,l.name,l.strings,this,e):l.type===6&&(c=new Ko(s,this,e)),this._$AV.push(c),l=o[++r]}a!==(l==null?void 0:l.index)&&(s=pe.nextNode(),a++)}return pe.currentNode=ge,i}p(e){let t=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class Ge{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,o,i){this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ie(this,e,t),Ue(e)?e===L||e==null||e===""?(this._$AH!==L&&this._$AR(),this._$AH=L):e!==this._$AH&&e!==Le&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ro(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==L&&Ue(this._$AH)?this._$AA.nextSibling.data=e:this.T(ge.createTextNode(e)),this._$AH=e}$(e){var s;const{values:t,_$litType$:o}=e,i=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=We.createElement(uo(o.h,o.h[0]),this.options)),o);if(((s=this._$AH)==null?void 0:s._$AD)===i)this._$AH.p(t);else{const a=new Wo(i,this),r=a.u(this.options);a.p(t),this.T(r),this._$AH=a}}_$AC(e){let t=Gt.get(e.strings);return t===void 0&&Gt.set(e.strings,t=new We(e)),t}k(e){Nt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,i=0;for(const s of e)i===t.length?t.push(o=new Ge(this.O(He()),this.O(He()),this,this.options)):o=t[i],o._$AI(s),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,t);e!==this._$AB;){const i=Rt(e).nextSibling;Rt(e).remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class it{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,i,s){this.type=1,this._$AH=L,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=L}_$AI(e,t=this,o,i){const s=this.strings;let a=!1;if(s===void 0)e=Ie(this,e,t,0),a=!Ue(e)||e!==this._$AH&&e!==Le,a&&(this._$AH=e);else{const r=e;let l,c;for(e=s[0],l=0;l<s.length-1;l++)c=Ie(this,r[o+l],t,l),c===Le&&(c=this._$AH[l]),a||(a=!Ue(c)||c!==this._$AH[l]),c===L?e=L:e!==L&&(e+=(c??"")+s[l+1]),this._$AH[l]=c}a&&!i&&this.j(e)}j(e){e===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class qo extends it{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===L?void 0:e}}class Vo extends it{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==L)}}class Go extends it{constructor(e,t,o,i,s){super(e,t,o,i,s),this.type=5}_$AI(e,t=this){if((e=Ie(this,e,t,0)??L)===Le)return;const o=this._$AH,i=e===L&&o!==L||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,s=e!==L&&(o===L||i);i&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Ko{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Ie(this,e)}}const mt=Re.litHtmlPolyfillSupport;mt==null||mt(We,Ge),(Re.litHtmlVersions??(Re.litHtmlVersions=[])).push("3.3.3");const Jo=(n,e,t)=>{const o=(t==null?void 0:t.renderBefore)??e;let i=o._$litPart$;if(i===void 0){const s=(t==null?void 0:t.renderBefore)??null;o._$litPart$=i=new Ge(e.insertBefore(He(),s),s,void 0,t??{})}return i._$AI(n),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const he=globalThis;class I extends we{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Jo(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Le}}var ro;I._$litElement$=!0,I.finalized=!0,(ro=he.litElementHydrateSupport)==null||ro.call(he,{LitElement:I});const xt=he.litElementPolyfillSupport;xt==null||xt({LitElement:I});(he.litElementVersions??(he.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=n=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(n,e)}):customElements.define(n,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yo={attribute:!0,type:String,converter:tt,reflect:!1,hasChanged:_t},Qo=(n=Yo,e,t)=>{const{kind:o,metadata:i}=t;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),o==="setter"&&((n=Object.create(n)).wrapped=!0),s.set(t.name,n),o==="accessor"){const{name:a}=t;return{set(r){const l=e.get.call(this);e.set.call(this,r),this.requestUpdate(a,l,n,!0,r)},init(r){return r!==void 0&&this.C(a,void 0,n,r),r}}}if(o==="setter"){const{name:a}=t;return function(r){const l=this[a];e.call(this,r),this.requestUpdate(a,l,n,!0,r)}}throw Error("Unsupported decorator location: "+o)};function Xo(n){return(e,t)=>typeof t=="object"?Qo(n,e,t):((o,i,s)=>{const a=i.hasOwnProperty(s);return i.constructor.createProperty(s,o),a?Object.getOwnPropertyDescriptor(i,s):void 0})(n,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function b(n){return Xo({...n,state:!0,attribute:!1})}const Zo={en:{appName:"Dooty",tagline:"Track your pet’s daily potty, walks, meals, and health.",nav:{today:"Today",map:"Map",analytics:"Analytics",settings:"Settings",import:"Import"},events:{poop:{name:"Poop",action:"Log Poop",desc:"Bathroom break"},pee:{name:"Pee",action:"Log Pee",desc:"Bathroom break"},walk:{name:"Walk",action:"Log Walk",desc:"Outdoor exercise"},food:{name:"Food",action:"Log Food",desc:"Meals & kibble"},water:{name:"Water",action:"Log Water",desc:"Fresh hydration"},medicine:{name:"Medicine",action:"Log Medicine",desc:"Pills & treatments"},grooming:{name:"Grooming",action:"Log Grooming",desc:"Bath & brushing"},playing:{name:"Playing",action:"Log Play",desc:"Fetch & fun"},vomit:{name:"Vomit",action:"Log Vomit",desc:"Upset stomach"},weight:{name:"Weight",action:"Log Weight",desc:"Body mass tracking"},vet:{name:"Vet visit",action:"Log Vet Visit",desc:"Appointments & checkups"},symptom:{name:"Symptom",action:"Log Symptom",desc:"Health anomalies & issues"},nap:{name:"Nap / Sleep",action:"Log Nap",desc:"Sleep & rest"},training:{name:"Training",action:"Log Training",desc:"Commands & practice"}},streak:{badge:n=>`${n} DAY STREAK`,subtitle:"Keep logging daily to build your pet’s routine!"},home:{greeting:n=>`Hey, ${n}! 🐾`,vibeLine:"Ready for another great day together.",todayStats:"Today’s Log",quickLog:"Quick Log",recentActivity:"Recent Timeline",noEventsToday:"No logs yet today!",tapToLogFirst:"Tap any icon above to record your first entry.",offlineMode:"Offline Mode",pendingSync:n=>`${n} pending offline sync`},logger:{title:n=>`Log ${n}`,time:"Time of Event",notesPlaceholder:"Add optional details (e.g. consistency, brand, dosage)...",locationTag:"Location",addLocation:"Add GPS Coordinates",save:"Save Log",cancel:"Cancel",saving:"Saving...",loggedSuccess:n=>`${n} logged successfully!`},analytics:{title:"Pet Analytics & Habits",subtitle:"Understand your pet’s daily rhythm and health trends",clock24hTitle:"24-Hour Potty Clock",clock24hDesc:"Most frequent hours of the day for bathroom breaks",frequencyTitle:"Activity Breakdown",periods:{days7:"Last 7 Days",days30:"Last 30 Days",allTime:"All Time"},healthWatch:"Health Watch",vomitCount:n=>`${n} vomiting incidents recorded`,medCount:n=>`${n} medications administered`,daysNoPoop:n=>`${n} days without poop recorded`,streakTitle:"Consistency Streak",totalLogs:"Total Logged Events"},map:{title:"Potty & Walk Map",startWalk:"Start Walk",pauseWalk:"Pause Walk",resumeWalk:"Resume Walk",stopWalk:"Finish Walk",distance:"Distance",duration:"Duration",logPoopOnWalk:"💩 Poop Here",logPeeOnWalk:"💧 Pee Here",noLocationsYet:"No geo-tagged events yet. Start a walk or tag your next log!"},importer:{title:"Import History",subtitle:"From a spreadsheet, Notion, or another tracker",dropText:"Drop your CSV or JSON file here, or click to browse",selectFile:"Select File",dryRunTitle:"Import Preview (Dry-Run)",totalEvents:"Total Records Detected",targetPet:"Target Pet",dateSpan:"Date Span",confirmImport:"Import All Events",importing:"Importing records...",success:n=>`Successfully imported ${n} historical events!`},settings:{back:"Today",title:"Settings",signedInPlan:"Signed in · free plan",language:"Language",english:"English",korean:"한국어",household:"Household",householdCount:(n,e)=>`${n} ${n===1?"person":"people"} · ${e} ${e===1?"pet":"pets"}`,invite:"Invite",people:"People",inviteSomeone:"+ Invite someone",pets:"Pets",addPet:"+ Add a pet",nudges:"Nudges",walkReminders:"Walk reminders",walkRemindersSub:"Nudge me at the usual times",weeklyDigest:"Weekly digest",weeklyDigestSub:"Sunday night, one card",unusualGap:"Unusual gap alert",unusualGapSub:"If nothing for 20 hours",vetShare:"Share with my vet",vetShareSub:"Read-only link to the summary",yourData:"Your data",importCsv:"Import from CSV",importCsvSub:"From a spreadsheet, Notion, or another tracker",exportCsv:"Export all data (CSV)",exportCsvSub:"Everything, including photos",signOut:"Sign out",version:"Dooty v0.4 · installable PWA",logsUnit:"logs",activeHousehold:"Active Household",switchHousehold:"Switch Household",members:"Family Members",invitePartner:"Invite Partner / Roommate",inviteDesc:"Share this code so they can view and log for this pet from their phone:",copyCode:"Copy Invite Code",copied:"Copied!",joinHousehold:"Join Existing Household",joinAnotherHousehold:"+ Join Another Household",enterCode:"Enter 6-digit Invite Code",joinBtn:"Join Household",currentPet:"Pet Profile",syncStatus:"Cloud Sync Status",online:"Connected & Live",offline:"Offline (Queued locally)",signedOutSuccess:"Signed out. See you next walk!"},invite:{back:"Settings",title:"Invite to",subtitle:"Share the code below. It works once, then it's dead.",theyJoinAs:"They join as",roles:{full:{name:"Full member",sub:"Log, edit, see everything"},logOnly:{name:"Log only",sub:"Can add events, cannot see history"}},inviteCode:"Invite code",expiresIn7Days:"Expires in 7 days",copyCode:"Copy code",shareLink:"Share link",pending:"Pending",revoke:"Revoke",pendingHelp:"Anyone with the code can log events. Only you can rename the household or remove people.",codeCopied:"Code copied",codeCopiedSub:n=>`${n} · expires in 7 days`,inviteRevoked:"Invite revoked",inviteRevokedSub:n=>`${n} will no longer work.`},auth:{welcomeTitle:"Dooty",welcomeSubtitle:"Poop, pills and everything else. One tap, then get on with the walk.",tagline:"Simple, tactile pet habit tracking for your family.",tabLogIn:"Log In",tabSignUp:"Sign Up",emailLabel:"Email",emailPlaceholder:"sam@jellyfish.dog",passwordLabel:"Password",passwordPlaceholder:"••••••••",logInBtn:"Log in",loggingIn:"Logging in...",forgotPassword:"Forgot your password?",or:"OR",googleBtn:"Continue with Google",newHere:"New here?",makeAccount:"Make an account",gotInviteCode:"Got an invite code?",show:"Show",hide:"Hide",signupStep1:{back:"Back",stepCount:"1 / 2",title:"Let's get you set up",subtitle:"Takes about forty seconds. Faster than the average walk.",yourName:"Your name",yourNamePlaceholder:"Sam",email:"Email",emailPlaceholder:"sam@jellyfish.dog",password:"Password",passwordPlaceholder:"••••••••",weak:"Weak",good:"Good",strong:"Strong",nextTheDog:"Next: the dog",disclaimer:"By continuing you agree we will store an unreasonable amount of data about your dog’s bowels."},signupStep2:{back:"Back",stepCount:"2 / 2",title:"Who are we tracking?",subtitle:"You can add more dogs later. We will not judge you for it.",photo:"photo",name:"Name",namePlaceholder:"Nacho",householdName:"Household name",householdNamePlaceholder:"The Nacho Household",householdHelp:"Everyone you invite joins this household and can log for any pet in it.",size:"Size",sizes:{S:{label:"S",kg:"– 10kg"},M:{label:"M",kg:"10–20"},L:{label:"L",kg:"20–35"},XL:{label:"XL",kg:"35kg +"}},whatTrack:"What should we track?",trackingOptions:{poop:"Poop",pee:"Pee",vomit:"Vomit",meds:"Medicine",weight:"Weight",walk:"Walks",vet:"Vet visits",symptom:"Symptoms"},startTracking:"Start tracking",alreadyTracking:"Already tracking somewhere else?",importHistory:"Import your history"},joinStep1:{back:"Back",title:"Join a household",subtitle:"Whoever set it up can find the code in Settings, under People.",enterCode:"Enter the code",continueBtn:"Continue",perksTitle:"What you’ll be able to do",perks:["Log poops, walks, meds and everything else","See the streak, the map and the stats","Get the same reminders as everyone else"]},joinStep2:{back:"Code",codeAccepted:"Code accepted · joining",summarySubtitle:(n,e)=>`${n} · you'll be ${e}`,title:"Tell them who you are",subtitle:"Your name shows up next to every event you log, so pick what the household will recognise.",yourName:"Your name",yourNamePlaceholder:"Dan",email:"Email",emailPlaceholder:"dan@thewalks.co",password:"Password",passwordPlaceholder:"••••••••",howTheySeeYou:"How they’ll see you",joinHouseholdBtn:"Join the household",footerDisclaimer:"The owner will be told you joined. You can leave the household at any time."},signUpBtn:"Create Account",signingUp:"Creating account...",signUpModeCreate:"✨ Create New Household",signUpModeJoin:"🔑 Join with Invite Code",noAccountPrompt:"Don’t have an account? Sign Up",hasAccountPrompt:"Already have an account? Log In",ownerNameLabel:"Your Name",ownerNamePlaceholder:"e.g. Reynold",householdNameLabel:"Household Name",householdNamePlaceholder:"e.g. Happy Paws Family",petNameLabel:"Pet Name",petNamePlaceholder:"e.g. Jjols",speciesLabel:"Pet Type",speciesDog:"Dog 🐶",speciesCat:"Cat 🐱",speciesOther:"Other 🐾",breedLabel:"Breed (Optional)",breedPlaceholder:"e.g. Golden Retriever",inviteCodeLabel:"6-Digit Invite Code",inviteCodePlaceholder:"e.g. AB12CD",inviteCodeHint:"Ask your household owner to generate an invite code from their Settings > Family Members tab.",yourNameLabel:"Your Name",yourNamePlaceholder:"e.g. Alex, Sarah",yourRoleLabel:"Role / Relationship (Optional)",yourRolePlaceholder:"e.g. Partner, Mom, Dog Walker",errors:{emailRequired:"Please enter your email address",invalidEmail:"Please enter a valid email address",passwordRequired:"Please enter your password",passwordTooShort:"Password must be at least 6 characters",logInFailed:"Invalid email or password",signUpFailed:"Could not complete sign up. Please try again.",ownerNameRequired:"Please enter your name",householdNameRequired:"Please enter a household name",petNameRequired:"Please enter your pet’s name",inviteCodeRequired:"Please enter a 6-digit invite code",yourNameRequired:"Please enter your name",joinFailed:"Invalid invite code or server error",createFailed:"Failed to create household. Please check connection."}}},ko:{appName:"두티 (Dooty)",tagline:"반려견의 배변, 산책, 식사, 건강을 쉽고 재미있게 기록하세요.",nav:{today:"오늘",map:"지도",analytics:"통계",settings:"설정",import:"불러오기"},events:{poop:{name:"응가",action:"응가 기록",desc:"배변 활동"},pee:{name:"쉬야",action:"쉬야 기록",desc:"배뇨 활동"},walk:{name:"산책",action:"산책 기록",desc:"야외 산책"},food:{name:"밥/사료",action:"식사 기록",desc:"사료 및 간식"},water:{name:"물",action:"물 마심",desc:"수분 섭취"},medicine:{name:"약",action:"투약 기록",desc:"영양제 및 처방약"},grooming:{name:"목욕/미용",action:"목욕/미용",desc:"위생 케어"},playing:{name:"놀이",action:"놀이 기록",desc:"터그놀이 & 공놀이"},vomit:{name:"토/구토",action:"구토 기록",desc:"소화 이상"},weight:{name:"몸무게",action:"몸무게 기록",desc:"체중 변화 측정"},vet:{name:"병원 진료",action:"진료 기록",desc:"정기 검진 및 진료"},symptom:{name:"증상 메모",action:"증상 기록",desc:"이상 징후 기록"},nap:{name:"수면/낮잠",action:"낮잠 기록",desc:"수면 및 휴식"},training:{name:"훈련/교육",action:"훈련 기록",desc:"훈련 및 기본 교육"}},streak:{badge:n=>`${n}일 연속 기록 중!`,subtitle:"매일 꾸준히 기록해서 건강한 루틴을 만들어요!"},home:{greeting:n=>`안녕, ${n}! 🐾`,vibeLine:"오늘도 건강하고 행복한 하루 보내요.",todayStats:"오늘의 기록",quickLog:"빠른 기록",recentActivity:"최근 활동 타임라인",noEventsToday:"오늘 아직 등록된 기록이 없어요!",tapToLogFirst:"위 아이콘을 눌러 첫 번째 활동을 기록해보세요.",offlineMode:"오프라인 모드",pendingSync:n=>`${n}개 항목 동기화 대기 중`},logger:{title:n=>`${n} 기록하기`,time:"기록 시간",notesPlaceholder:"메모를 입력하세요 (변 상태, 사료량, 약 종류 등)...",locationTag:"위치 정보",addLocation:"현재 GPS 위치 추가",save:"저장하기",cancel:"취소",saving:"저장 중...",loggedSuccess:n=>`${n} 기록이 저장되었습니다!`},analytics:{title:"배변 및 활동 분석",subtitle:"반려견의 일일 생활 패턴과 건강 추이를 확인하세요",clock24hTitle:"24시간 배변 시계",clock24hDesc:"하루 중 가장 응가/쉬야를 많이 하는 시간대",frequencyTitle:"활동별 통계",periods:{days7:"최근 7일",days30:"최근 30일",allTime:"전체 기간"},healthWatch:"건강 모니터링",vomitCount:n=>`최근 구토 ${n}회 발생`,medCount:n=>`최근 투약 ${n}회 완료`,daysNoPoop:n=>`응가 미기록 ${n}일째`,streakTitle:"연속 기록 스트릭",totalLogs:"총 기록 건수"},map:{title:"배변 & 산책 지도",startWalk:"산책 시작",pauseWalk:"일시정지",resumeWalk:"산책 재개",stopWalk:"산책 종료",distance:"산책 거리",duration:"산책 시간",logPoopOnWalk:"💩 여기서 응가",logPeeOnWalk:"💧 여기서 쉬야",noLocationsYet:"위치 기록이 아직 없습니다. 산책을 시작하거나 위치를 태그해보세요!"},importer:{title:"데이터 불러오기",subtitle:"스프레드시트, 노션, 다른 트래커에서 데이터 이전",dropText:"CSV 또는 JSON 파일을 여기에 끌어다 놓거나 클릭하여 선택하세요",selectFile:"파일 선택",dryRunTitle:"가져오기 미리보기 (검증)",totalEvents:"총 감지된 기록 수",targetPet:"대상 반려견",dateSpan:"기록 기간",confirmImport:"데이터 일괄 가져오기",importing:"데이터를 가져오는 중...",success:n=>`${n}개의 과거 기록을 성공적으로 가져왔습니다!`},settings:{back:"오늘",title:"설정",signedInPlan:"로그인됨 · 무료 플랜",language:"언어",english:"English",korean:"한국어",household:"가족 공간",householdCount:(n,e)=>`${n}명 · 반려견 ${e}마리`,invite:"초대",people:"구성원",inviteSomeone:"+ 초대하기",pets:"반려동물",addPet:"+ 반려동물 추가",nudges:"알림 설정",walkReminders:"산책 알림",walkRemindersSub:"평소 산책 시간에 알려드려요",weeklyDigest:"주간 요약",weeklyDigestSub:"일요일 밤 한 장의 요약 카드",unusualGap:"이상 공백 알림",unusualGapSub:"20시간 동안 기록이 없으면 알림",vetShare:"수의사와 공유",vetShareSub:"수의사용 읽기 전용 요약 링크",yourData:"내 데이터",importCsv:"CSV에서 가져오기",importCsvSub:"스프레드시트, 노션, 다른 트래커에서 이전",exportCsv:"전체 데이터 내보내기 (CSV)",exportCsvSub:"사진을 포함한 모든 기록 다운로드",signOut:"로그아웃",version:"Dooty v0.4 · 설치형 PWA",logsUnit:"회",activeHousehold:"현재 가족 공간",switchHousehold:"가족 공간 변경",members:"참여 멤버",invitePartner:"가족/동거인 초대하기",inviteDesc:"이 초대 코드를 공유하면 가족도 함께 기록을 확인하고 추가할 수 있습니다:",copyCode:"초대 코드 복사",copied:"복사 완료!",joinHousehold:"기존 가족에 참여하기",joinAnotherHousehold:"+ 다른 가족 공간 참가하기",enterCode:"6자리 초대 코드 입력",joinBtn:"가족 참여",currentPet:"반려견 프로필",syncStatus:"클라우드 동기화 상태",online:"정상 연결됨",offline:"오프라인 (로컬 저장 중)",signedOutSuccess:"로그아웃되었습니다. 다음 산책 때 만나요!"},invite:{back:"설정",title:"초대하기",subtitle:"아래 코드를 공유하세요. 한 번 사용하면 만료됩니다.",theyJoinAs:"초대 권한",roles:{full:{name:"전체 멤버",sub:"기록, 수정, 전체 내역 확인 가능"},logOnly:{name:"기록 전용",sub:"기록 추가만 가능, 과거 내역 열람 불가"}},inviteCode:"초대 코드",expiresIn7Days:"7일 후 만료",copyCode:"코드 복사",shareLink:"링크 공유",pending:"대기 중인 초대",revoke:"취소",pendingHelp:"코드를 가진 사람은 누구나 기록할 수 있습니다. 가족 관리자만 이름을 바꾸거나 구성원을 삭제할 수 있습니다.",codeCopied:"코드 복사 완료",codeCopiedSub:n=>`${n} · 7일 후 만료`,inviteRevoked:"초대 취소됨",inviteRevokedSub:n=>`${n} 코드는 더 이상 사용할 수 없습니다.`},auth:{welcomeTitle:"Dooty",welcomeSubtitle:"응가, 약, 그 외 모든 것. 한 번만 누르고 산책을 계속하세요.",tagline:"직관적이고 재미있는 우리 가족 펫 다이어리",tabLogIn:"로그인",tabSignUp:"회원가입",emailLabel:"이메일",emailPlaceholder:"sam@jellyfish.dog",passwordLabel:"비밀번호",passwordPlaceholder:"••••••••",logInBtn:"로그인",loggingIn:"로그인 중...",forgotPassword:"비밀번호를 잊으셨나요?",or:"또는",googleBtn:"Google로 계속하기",newHere:"처음이신가요?",makeAccount:"계정 만들기",gotInviteCode:"초대 코드가 있나요?",show:"보기",hide:"숨기기",signupStep1:{back:"뒤로",stepCount:"1 / 2",title:"시작해 볼까요",subtitle:"40초쯤 걸립니다. 평균 산책보다 빠릅니다.",yourName:"이름",yourNamePlaceholder:"Sam",email:"이메일",emailPlaceholder:"sam@jellyfish.dog",password:"비밀번호",passwordPlaceholder:"••••••••",weak:"취약",good:"적정",strong:"안전",nextTheDog:"다음: 강아지",disclaimer:"계속 진행하면 강아지의 배변에 관한 상당한 양의 데이터를 저장하는 데 동의하게 됩니다."},signupStep2:{back:"뒤로",stepCount:"2 / 2",title:"누구를 추적할까요?",subtitle:"나중에 강아지를 더 추가할 수 있습니다.",photo:"사진",name:"이름",namePlaceholder:"나초 (Nacho)",householdName:"가족(Household) 이름",householdNamePlaceholder:"나초네 가족",householdHelp:"초대한 모든 사람이 이 가족에 합류하여 모든 반려동물에 대해 기록할 수 있습니다.",size:"크기",sizes:{S:{label:"S",kg:"– 10kg"},M:{label:"M",kg:"10–20"},L:{label:"L",kg:"20–35"},XL:{label:"XL",kg:"35kg +"}},whatTrack:"어떤 항목을 추적할까요?",trackingOptions:{poop:"응가",pee:"쉬야",vomit:"구토",meds:"약",weight:"체중",walk:"산책",vet:"병원 진료",symptom:"이상 증상"},startTracking:"추적 시작하기",alreadyTracking:"다른 곳에서 이미 추적 중이신가요?",importHistory:"기록 가져오기"},joinStep1:{back:"뒤로",title:"가족에 참여하기",subtitle:"설정한 사람은 설정의 구성원에서 코드를 찾을 수 있습니다.",enterCode:"코드 입력",continueBtn:"계속",perksTitle:"할 수 있는 일",perks:["응가, 산책, 약 및 기타 모든 활동 기록","연속 스트릭, 산책 지도, 통계 확인","가족 구성원과 동일한 실시간 알림 수신"]},joinStep2:{back:"코드",codeAccepted:"코드 승인됨 · 참여 중",summarySubtitle:(n,e)=>`${n} · 역할: ${e}`,title:"자신을 알려주세요",subtitle:"내가 기록한 모든 활동 옆에 내 이름이 표시되므로 가족이 알아볼 수 있는 이름을 선택하세요.",yourName:"이름",yourNamePlaceholder:"민지 (Dan)",email:"이메일",emailPlaceholder:"dan@thewalks.co",password:"비밀번호",passwordPlaceholder:"••••••••",howTheySeeYou:"가족에게 표시될 호칭",joinHouseholdBtn:"가족에 참여하기",footerDisclaimer:"가족 관리자에게 참여 알림이 전송됩니다. 언제든지 가족에서 나갈 수 있습니다."},signUpBtn:"회원가입 완료",signingUp:"가입 처리 중...",signUpModeCreate:"✨ 새 가족 공간 만들기",signUpModeJoin:"🔑 초대 코드로 참여하기",noAccountPrompt:"계정이 없으신가요? 회원가입",hasAccountPrompt:"이미 계정이 있으신가요? 로그인",ownerNameLabel:"보호자 이름",ownerNamePlaceholder:"예: 레이놀드",householdNameLabel:"가족(Household) 이름",householdNamePlaceholder:"예: 우리집 강아지네",petNameLabel:"반려동물 이름",petNamePlaceholder:"예: 쪼올스",speciesLabel:"종류",speciesDog:"강아지 🐶",speciesCat:"고양이 🐱",speciesOther:"기타 🐾",breedLabel:"품종 (선택)",breedPlaceholder:"예: 골든 리트리버",inviteCodeLabel:"6자리 초대 코드",inviteCodePlaceholder:"예: AB12CD",inviteCodeHint:"가족 관리자의 [설정 > 가족 멤버]에서 생성한 6자리 초대 코드를 입력하세요.",yourNameLabel:"내 이름",yourNamePlaceholder:"예: 민지, 준호",yourRoleLabel:"역할 / 호칭 (선택)",yourRolePlaceholder:"예: 엄마, 아빠, 산책도우미, 룸메이트",errors:{emailRequired:"이메일 주소를 입력해주세요",invalidEmail:"올바른 이메일 형식을 입력해주세요",passwordRequired:"비밀번호를 입력해주세요",passwordTooShort:"비밀번호는 6자 이상이어야 합니다",logInFailed:"이메일 또는 비밀번호가 올바르지 않습니다",signUpFailed:"회원가입에 실패했습니다. 다시 시도해주세요.",ownerNameRequired:"보호자 이름을 입력해주세요",householdNameRequired:"가족 이름을 입력해주세요",petNameRequired:"반려동물 이름을 입력해주세요",inviteCodeRequired:"6자리 초대 코드를 입력해주세요",yourNameRequired:"이름을 입력해주세요",joinFailed:"유효하지 않은 초대 코드이거나 서버 오류가 발생했습니다",createFailed:"가족 생성에 실패했습니다. 네트워크를 확인해주세요."}}}};function ei(n){const e=[];let t=[],o="",i=!1;for(let s=0;s<n.length;s++){const a=n[s],r=n[s+1];i?a==='"'?r==='"'?(o+='"',s++):i=!1:o+=a:a==='"'?i=!0:a===","?(t.push(o),o=""):a==="\r"?(r===`
`&&s++,t.push(o),e.push(t),t=[],o=""):a===`
`?(t.push(o),e.push(t),t=[],o=""):o+=a}return(o.length>0||t.length>0)&&(t.push(o),e.push(t)),e}function Ke(n){const e=(n||"").trim(),t=e.toLowerCase();return t==="reynold"||t==="reynold ismail"||t==="reyn"?"reyn":t==="youngrok lee"||t==="youngrok"||t==="young lee"||t==="young"?"youngrok":e||"reyn"}function Mt(n){const e=(n||"").trim(),t=e.toLowerCase();return t==="watson"||t==="jjols"?"jjols":e||"jjols"}function ti(n){switch((n||"").trim().toLowerCase()){case"poop":return"poop";case"pee":return"pee";case"walk":return"walk";case"food":case"treat":return"food";case"water":return"water";case"nap":case"sleep":case"play":case"playing":case"playpen":case"daycare":case"training":return"playing";case"medicine":case"medication":return"medicine";case"vomit":case"throwup":return"vomit";case"weight":case"weigh":return"weight";case"grooming":case"bath":case"teeth brushing":return"grooming";case"hospital":case"vet":case"clinic":case"doctor":return"vet";case"accident":return"pee";case"eat grass":case"temperature":case"crying":case"coughing":case"symptom":case"illness":case"scratch":return"symptom";default:return"playing"}}function go(n,e){const t=(n||"").trim(),o=(e||"").trim();if(!t&&!o)return new Date().toISOString();if(t&&o){const i=`${t} ${o} UTC`,s=new Date(i);if(!isNaN(s.getTime()))return s.toISOString()}if(t){const i=new Date(t);if(!isNaN(i.getTime()))return i.toISOString()}return new Date().toISOString()}function oi(n){const e=ei(n);if(e.length<2)throw new Error("CSV file is empty or missing data rows.");const t=e[0].map(r=>r.trim()),o={};t.forEach((r,l)=>{o[r.toLowerCase()]=l});const i=(r,l)=>{const c=o[l.toLowerCase()];if(c===void 0||c>=r.length)return"";let g=(r[c]||"").trim();return g.startsWith('"')&&g.endsWith('"')&&(g=g.slice(1,-1).trim()),g},s=(r,l)=>{const c=i(r,l);if(!c||c==="-"||c==="0"||c==="0.0")return;const g=parseFloat(c);return isNaN(g)?void 0:g},a=[];for(let r=1;r<e.length;r++){const l=e[r];if(l.length<=1&&(!l[0]||l[0].trim()===""))continue;const c=i(l,"Pet"),g=Mt(c),h=i(l,"Event_Type"),u=i(l,"Log_Date"),y=i(l,"Log_Time (UTC+00:00)")||i(l,"Log_Time"),w=i(l,"User_Name"),$=i(l,"Comment");if(!h&&!u&&!y)continue;const k={pet:g,eventType:h||"Unknown",logDate:u,logTime:y,userName:w||"reyn",comment:$||void 0,startDate:i(l,"Start_Date")||void 0,startTime:i(l,"Start_Time (UTC+00:00)")||i(l,"Start_Time")||void 0,endDate:i(l,"End_Date")||void 0,endTime:i(l,"End_Time (UTC+00:00)")||i(l,"End_Time")||void 0,duration:i(l,"Duration")||void 0,quantityNumber:s(l,"Quantity_Number"),quantityUnit:i(l,"Quantity_Unit")||void 0,temperatureC:s(l,"Temperature_(C)"),temperatureF:s(l,"Temperature_(F)"),weightKg:s(l,"Weight_(Kg)"),weightLbs:s(l,"Weight_(P)")||s(l,"Weight_(Lbs)"),medicineType:i(l,"Medicine_Type")||void 0,stoolQuality:i(l,"Stool_Quality")||void 0,vaccineName:i(l,"Vaccine_Name")||void 0,vaccineExpiration:i(l,"Vaccine_Expiration")||void 0,bloodGlucoseNumber:s(l,"Blood_Glucose_Number"),bloodGlucoseUnit:i(l,"Blood_Glucose_Unit")||void 0};a.push(k)}return a}function ii(n){if(n.length===0)return{sourceType:"csv",totalCount:0,petName:"Unknown",earliestDate:"",latestDate:"",countsByType:{},countsByUser:{},sampleItems:[]};const e={},t={},o={};let i="",s="";const a=[];for(let c=0;c<n.length;c++){const g=n[c],h=g.eventType||"Unknown";e[h]=(e[h]||0)+1;const u=Ke(g.userName);t[u]=(t[u]||0)+1;const y=Mt(g.pet);o[y]=(o[y]||0)+1;const w=go(g.logDate,g.logTime);(!i||w<i)&&(i=w),(!s||w>s)&&(s=w),a.length<5&&a.push({timestamp:w,pet:y,eventType:g.eventType,user:u,note:g.comment})}let r="jjols",l=0;for(const[c,g]of Object.entries(o))g>l&&(l=g,r=c);return{sourceType:"csv",totalCount:n.length,petName:r,earliestDate:i,latestDate:s,countsByType:e,countsByUser:t,sampleItems:a}}function si(n,e,t){return n.map(o=>{const i=ti(o.eventType),s=Ke(o.userName),a=Mt(o.pet),r=go(o.logDate,o.logTime),l={originalEvent:o.eventType,originalUserName:o.userName,originalPetName:o.pet,petName:a,source:"csv_import",importedAt:new Date().toISOString()},c=(o.eventType||"").trim().toLowerCase();return c==="nap"||c==="sleep"?l.subcategory="nap":c==="training"?l.subcategory="training":c==="bath"?l.subcategory="bath":c==="teeth brushing"?l.subcategory="teeth_brushing":c==="treat"?l.subcategory="treat":c==="hospital"?l.visitReason="Hospital":c==="accident"?l.isAccident=!0:c==="eat grass"?l.symptom="Eat grass":c==="temperature"?l.symptom="Temperature":c==="crying"?l.symptom="Crying":c==="coughing"?l.symptom="Coughing":c==="playpen"?l.locationName="Playpen":c==="daycare"&&(l.locationName="Daycare"),o.weightKg!==void 0&&(l.weightKg=o.weightKg),o.weightLbs!==void 0&&(l.weightLbs=o.weightLbs),o.temperatureC!==void 0&&(l.temperatureC=o.temperatureC),o.temperatureF!==void 0&&(l.temperatureF=o.temperatureF),o.medicineType&&(l.medication=o.medicineType),o.stoolQuality&&(l.stoolQuality=o.stoolQuality),o.vaccineName&&(l.vaccineName=o.vaccineName),o.vaccineExpiration&&(l.vaccineExpiration=o.vaccineExpiration),o.bloodGlucoseNumber!==void 0&&(l.bloodGlucoseNumber=o.bloodGlucoseNumber),o.bloodGlucoseUnit&&(l.bloodGlucoseUnit=o.bloodGlucoseUnit),o.duration&&o.duration!=="0"&&(l.duration=o.duration),o.quantityNumber!==void 0&&(l.quantityNumber=o.quantityNumber),o.quantityUnit&&(l.quantityUnit=o.quantityUnit),{householdId:e,petId:t,eventType:i,loggedByName:s,timestamp:r,notes:o.comment||"",metadata:l}})}const ni={poop:"poop",pee:"pee",walk:"walk",food:"food",water:"water",medicine:"medicine",medication:"medicine",grooming:"grooming",playing:"playing",play:"playing",vomit:"vomit",throwup:"vomit",weight:"weight",weigh:"weight",vet:"vet",clinic:"vet",doctor:"vet",symptom:"symptom",illness:"symptom",scratch:"symptom"};function ai(n){const e=(n||"").trim().toLowerCase();return ni[e]||"playing"}function ri(n){let e;try{e=JSON.parse(n)}catch{throw new Error("Invalid JSON format: Unable to parse file.")}if(!Array.isArray(e))throw new Error("Invalid DogNotes format: Root must be an array of event records.");const t=[];for(const o of e)o&&typeof o=="object"&&"Time"in o&&"Event"in o&&t.push({Time:String(o.Time||new Date().toISOString()),"Pet Name":String(o["Pet Name"]||"Pet"),Event:String(o.Event||""),Note:String(o.Note||""),"Logged by":String(o["Logged by"]||"Owner")});return t}function li(n){if(n.length===0)return{totalCount:0,petName:"Unknown",earliestDate:"",latestDate:"",countsByType:{},sampleItems:[]};const e={};let t=n[0].Time,o=n[0].Time;const i={};for(const r of n){const l=r.Event||"Unknown";e[l]=(e[l]||0)+1;const c=r["Pet Name"]||"Pet";i[c]=(i[c]||0)+1,r.Time<t&&(t=r.Time),r.Time>o&&(o=r.Time)}let s="Pet",a=0;for(const[r,l]of Object.entries(i))l>a&&(a=l,s=r);return{totalCount:n.length,petName:s,earliestDate:t,latestDate:o,countsByType:e,sampleItems:n.slice(0,5)}}function di(n,e,t){return n.map(o=>({householdId:e,petId:t,eventType:ai(o.Event),loggedByName:Ke(o["Logged by"]||"Owner"),timestamp:o.Time,notes:o.Note||"",metadata:{originalDogNotesEvent:o.Event,originalUserName:o["Logged by"]||"",importedAt:new Date().toISOString()}}))}function ci(n,e){const t=n.trim();if(e&&e.toLowerCase().endsWith(".json")||t.startsWith("[")||t.startsWith("{"))try{const i=ri(t),s=li(i),a={},r=[];for(const c of i){const g=Ke(c["Logged by"]);a[g]=(a[g]||0)+1,r.length<5&&r.push({timestamp:c.Time,pet:c["Pet Name"],eventType:c.Event,user:g,note:c.Note})}const l={sourceType:"json",totalCount:s.totalCount,petName:s.petName,earliestDate:s.earliestDate,latestDate:s.latestDate,countsByType:s.countsByType,countsByUser:a,sampleItems:r};return{type:"json",rawItems:i,summary:l}}catch(i){if(e&&e.toLowerCase().endsWith(".json"))throw i}try{const i=oi(t),s=ii(i);return{type:"csv",rawItems:i,summary:s}}catch(i){throw new Error(`Failed to parse import file. Supported formats are CSV (e.g. report.csv) and DogNotes JSON. Detail: ${i.message}`)}}function pi(n,e,t){return n.type==="csv"?si(n.rawItems,e,t):di(n.rawItems,e,t).map(i=>({...i,loggedByName:Ke(i.loggedByName)}))}function fo(n,e,t=new Date){var Ye;const o=n.filter(m=>m.petId===e&&m.eventType==="poop").map(m=>({...m,date:new Date(m.timestamp)})).filter(m=>!isNaN(m.date.getTime())).sort((m,C)=>m.date.getTime()-C.date.getTime());if(o.length===0)return{hasData:!1,predictedTimestamp:null,timeDisplay:"Log to predict",timeDisplayKo:"기록 대기 중",subtext:"Record events to unlock AI timing prediction.",subtextKo:"이벤트를 기록하면 다음 배변 시간을 예측합니다.",progressPercent:0,isOverdue:!1,isTomorrow:!1,confidence:"low"};const s=o[o.length-1].date,a=t.getTime(),r=s.getTime(),c=Math.max(0,a-r)/(1e3*60*60),g=new Set;for(const m of o)g.add(m.date.toISOString().split("T")[0]);const h=Math.max(1,g.size),u=o.length/h,y=new Date(t.getFullYear(),t.getMonth(),t.getDate(),0,0,0,0),$=o.filter(m=>m.date>=y).length,k=[];for(let m=1;m<o.length;m++){const C=o[m-1].date,Y=(o[m].date.getTime()-C.getTime())/(1e3*60*60);Y>=.33&&Y<=16&&k.push(Y)}let S=6;if(k.length>0){const m=k.reduce((C,ee)=>C+ee,0);S=Math.max(2.5,Math.min(12,m/k.length))}else u<=1.2?S=24:S=Math.max(4,24/u);const R=new Array(24).fill(0);for(const m of o)R[m.date.getHours()]++;const _=[];for(let m=0;m<24;m++)R[m]>0&&_.push({hour:m,count:R[m]});const v=((Ye=[..._].sort((m,C)=>C.count-m.count)[0])==null?void 0:Ye.count)||0,E=_.filter(m=>m.count>=Math.max(1,Math.ceil(v*.2))).map(m=>m.hour).sort((m,C)=>m-C),M=E.length>0?E:[8],F=t.getHours()+t.getMinutes()/60,P=Math.min(2.5,S*.4);let T,Q="routine_today",ae=!1,X=!1;const re=M.filter(m=>{const C=new Date(t.getFullYear(),t.getMonth(),t.getDate(),m,0,0,0),ee=(C.getTime()-a)/(1e3*60*60),Y=(C.getTime()-r)/(1e3*60*60);return ee>.1&&Y>=P});if(u>1.2&&c>S*1.35&&F>=7&&F<=22||u<=1.2&&$===0&&F>=14&&c>=20)if(X=!0,Q="overdue",re.length>0&&re[0]-F<=2)T=new Date(t.getFullYear(),t.getMonth(),t.getDate(),re[0],0,0,0);else{const m=new Date(a+18e5),C=Math.round(m.getMinutes()/15)*15;m.setMinutes(C,0,0),T=m}else if(re.length>0&&($<Math.ceil(u)||$===0)){const m=re[0];T=new Date(t.getFullYear(),t.getMonth(),t.getDate(),m,0,0,0),Q="routine_today"}else if($<Math.ceil(u)&&u>1.2&&r+S*36e5>a&&new Date(r+S*36e5).getDate()===t.getDate()&&new Date(r+S*36e5).getHours()<=21){const m=new Date(r+S*36e5),C=Math.round(m.getMinutes()/15)*15;m.setMinutes(C,0,0),T=m,Q="interval_today"}else{ae=!0,Q="routine_tomorrow";const m=M[0]??8;T=new Date(t.getFullYear(),t.getMonth(),t.getDate()+1,m,0,0,0)}let J=50;const Je=T.getTime()-r;if(Je>0){const m=a-r;J=Math.round(m/Je*100),J=Math.max(5,Math.min(100,J))}X&&(J=95);const be=m=>{const C=m.getHours(),ee=m.getMinutes(),Y=ee===0?":00":`:${ee.toString().padStart(2,"0")}`,ct=C>=12?"pm":"am",pt=C%12===0?12:C%12,ht=`${pt}${Y} ${ct}`,Qe=`${C>=12?"오후":"오전"} ${pt}${Y}`;return{timeEn:ht,timeKo:Qe}},Z=be(T),rt=ae?`Tomorrow ${Z.timeEn}`:Z.timeEn,lt=ae?`내일 ${Z.timeKo}`:Z.timeKo;let le="Calculated from historical routine.",de="기록 데이터 기반 다음 예상 시간대입니다.";if(X)le=`Due anytime · ~${c.toFixed(1)}h since last poop`,de=`배변 주기(${S.toFixed(1)}시간) 경과 · 곧 예상`;else if(ae)le="Next routine window tomorrow morning.",de="내일 아침 루틴 예상 시간대입니다.";else if(Q==="interval_today"){const m=be(s);le=`~${S.toFixed(1)}h interval after ${m.timeEn} poop.`,de=`마지막 기록(${m.timeKo}) 기준 약 ${S.toFixed(1)}시간 후.`}else Q==="routine_today"&&(le="Calculated from historical routine.",de="기록 데이터 기반 다음 루틴 예상입니다.");let ye="low";o.length>=10?ye="high":o.length>=3&&(ye="medium");const dt=Math.max(0,(T.getTime()-a)/(1e3*60*60));return{hasData:!0,predictedTimestamp:T.toISOString(),timeDisplay:rt,timeDisplayKo:lt,subtext:le,subtextKo:de,progressPercent:J,isOverdue:X,isTomorrow:ae,confidence:ye,estimatedHoursRemaining:Math.round(dt*10)/10}}function hi(n,e,t=new Date){const o=n.filter(v=>v.petId===e),i=Array.from({length:24},(v,E)=>({hour:E,poopCount:0,peeCount:0,totalCount:0})),s={poop:0,pee:0,walk:0,food:0,water:0,medicine:0,grooming:0,playing:0,vomit:0,weight:0,vet:0,symptom:0,nap:0,training:0},a={},r=new Map,l=new Set,c=new Date(t.getTime()-10080*60*1e3);let g=0,h=0,u=null;for(const v of o){const E=new Date(v.timestamp);if(isNaN(E.getTime()))continue;const M=E.getHours(),F=E.toISOString().split("T")[0];l.add(F),i[M]&&(i[M].totalCount++,v.eventType==="poop"&&i[M].poopCount++,v.eventType==="pee"&&i[M].peeCount++),v.eventType in s&&s[v.eventType]++,(!a[v.eventType]||new Date(a[v.eventType].timestamp)<E)&&(a[v.eventType]=v),r.has(F)||r.set(F,{date:F,poop:0,pee:0,food:0,walk:0,medicine:0,vomit:0,other:0,total:0});const P=r.get(F);P.total++,v.eventType==="poop"?P.poop++:v.eventType==="pee"?P.pee++:v.eventType==="food"?P.food++:v.eventType==="walk"?P.walk++:v.eventType==="medicine"?P.medicine++:v.eventType==="vomit"?P.vomit++:P.other++,E>=c&&(v.eventType==="vomit"&&g++,v.eventType==="medicine"&&h++),v.eventType==="poop"&&(!u||E>u)&&(u=E)}const y=Array.from(l).sort();let w=0,$=0,k=0,S=null;for(const v of y){const E=new Date(v);if(!S)k=1;else{const M=Math.round((E.getTime()-S.getTime())/864e5);M===1?k++:M>1&&(k=1)}k>$&&($=k),S=E}if(y.length>0){const v=new Date(t).toISOString().split("T")[0],E=new Date(t.getTime()-1440*60*1e3).toISOString().split("T")[0],M=y[y.length-1];M===v||M===E?w=k:w=0}let R=0;u&&(R=Math.max(0,Math.floor((t.getTime()-u.getTime())/(1440*60*1e3))));const _=Array.from(r.values()).sort((v,E)=>v.date.localeCompare(E.date)),K=fo(n,e,t);return{petId:e,currentStreakDays:w,longestStreakDays:$,totalEventsLogged:o.length,hourlyDistribution:i,dailyFrequencies:_,eventCountsByType:s,lastEventByType:a,nextPoopPrediction:K,walkStats:{totalWalks:s.walk||0,totalDistanceMeters:0,avgWalkMinutes:25},healthAlerts:{vomitsLast7Days:g,medicinesLast7Days:h,daysWithoutPoop:R}}}const $t=(n,e)=>e.some(t=>n instanceof t);let Kt,Jt;function ui(){return Kt||(Kt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gi(){return Jt||(Jt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kt=new WeakMap,bt=new WeakMap,st=new WeakMap;function fi(n){const e=new Promise((t,o)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(ue(n.result)),i()},a=()=>{o(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return st.set(e,n),e}function vi(n){if(kt.has(n))return;const e=new Promise((t,o)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{o(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});kt.set(n,e)}let St={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return kt.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ue(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function vo(n){St=n(St)}function mi(n){return gi().includes(n)?function(...e){return n.apply(Ct(this),e),ue(this.request)}:function(...e){return ue(n.apply(Ct(this),e))}}function xi(n){return typeof n=="function"?mi(n):(n instanceof IDBTransaction&&vi(n),$t(n,ui())?new Proxy(n,St):n)}function ue(n){if(n instanceof IDBRequest)return fi(n);if(bt.has(n))return bt.get(n);const e=xi(n);return e!==n&&(bt.set(n,e),st.set(e,n)),e}const Ct=n=>st.get(n);function bi(n,e,{blocked:t,upgrade:o,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),r=ue(a);return o&&a.addEventListener("upgradeneeded",l=>{o(ue(a.result),l.oldVersion,l.newVersion,ue(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),r.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),r}const yi=["get","getKey","getAll","getAllKeys","count"],wi=["put","add","delete","clear"],yt=new Map;function Yt(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(yt.get(e))return yt.get(e);const t=e.replace(/FromIndex$/,""),o=e!==t,i=wi.includes(t);if(!(t in(o?IDBIndex:IDBObjectStore).prototype)||!(i||yi.includes(t)))return;const s=async function(a,...r){const l=this.transaction(a,i?"readwrite":"readonly");let c=l.store;return o&&(c=c.index(r.shift())),(await Promise.all([c[t](...r),i&&l.done]))[0]};return yt.set(e,s),s}vo(n=>({...n,get:(e,t,o)=>Yt(e,t)||n.get(e,t,o),has:(e,t)=>!!Yt(e,t)||n.has(e,t)}));const Fi=["continue","continuePrimaryKey","advance"],Qt={},Et=new WeakMap,mo=new WeakMap,$i={get(n,e){if(!Fi.includes(e))return n[e];let t=Qt[e];return t||(t=Qt[e]=function(...o){Et.set(this,mo.get(this)[e](...o))}),t}};async function*ki(...n){let e=this;if(e instanceof IDBCursor||(e=await e.openCursor(...n)),!e)return;e=e;const t=new Proxy(e,$i);for(mo.set(t,e),st.set(t,Ct(e));e;)yield t,e=await(Et.get(t)||e.continue()),Et.delete(t)}function Xt(n,e){return e===Symbol.asyncIterator&&$t(n,[IDBIndex,IDBObjectStore,IDBCursor])||e==="iterate"&&$t(n,[IDBIndex,IDBObjectStore])}vo(n=>({...n,get(e,t,o){return Xt(e,t)?ki:n.get(e,t,o)},has(e,t){return Xt(e,t)||n.has(e,t)}}));const Si="watslog-offline-db",Ci=1;let wt=null;function fe(){return wt||(wt=bi(Si,Ci,{upgrade(n){if(!n.objectStoreNames.contains("events")){const e=n.createObjectStore("events",{keyPath:"id"});e.createIndex("by-pet","petId"),e.createIndex("by-timestamp","timestamp")}n.objectStoreNames.contains("pending_events")||n.createObjectStore("pending_events",{keyPath:"localId"}),n.objectStoreNames.contains("meta")||n.createObjectStore("meta")}})),wt}async function Oe(n){try{const t=(await fe()).transaction("events","readwrite");for(const o of n)await t.store.put(o);await t.done}catch(e){console.warn("Could not save events offline:",e)}}async function G(n,e){try{let o=await(await fe()).getAllFromIndex("events","by-pet",n);return e!=null&&e.startDate,e!=null&&e.endDate,o.sort((i,s)=>new Date(s.timestamp).getTime()-new Date(i.timestamp).getTime()),e!=null&&e.limit&&e.limit>0,o}catch(t){return console.warn("Could not retrieve offline events:",t),[]}}async function Ei(n){try{return await(await fe()).get("meta",`last_sync_${n}`)||null}catch{return null}}async function Zt(n,e){try{await(await fe()).put("meta",e,`last_sync_${n}`)}catch(t){console.warn("Failed to set last sync timestamp:",t)}}async function eo(n){const e="offline-"+Date.now()+"-"+Math.random().toString(36).substring(2,7);try{const t=await fe();await t.put("pending_events",{localId:e,dto:n,createdAt:new Date().toISOString()});const o={id:e,householdId:n.householdId,petId:n.petId,eventType:n.eventType,loggedByName:n.loggedByName||"Me",timestamp:n.timestamp,notes:n.notes,latitude:n.latitude,longitude:n.longitude,metadata:n.metadata,createdAt:new Date().toISOString(),isOfflinePending:!0,localId:e};await t.put("events",o)}catch(t){console.warn("Failed to enqueue pending offline event:",t)}return e}async function xo(){try{return await(await fe()).getAll("pending_events")}catch{return[]}}async function Ai(n){try{const e=await fe();await e.delete("pending_events",n),await e.delete("events",n)}catch(e){console.warn("Failed to remove pending event:",e)}}const Ft={},Pi="https://watslog-bff.warmsynthsiloveyou.workers.dev/api";function Ti(){const n=Ft==null?void 0:Ft.VITE_API_URL;if(n)return n.replace(/\/+$/,"");if(typeof window<"u"){const e=window.location.hostname;if(e.endsWith("github.io")||!e.includes("localhost")&&!e.includes("127.0.0.1"))return Pi}return"/api"}const A=Ti();function z(){const n={"Content-Type":"application/json"},e=localStorage.getItem("dooty_auth_token");return e&&(n.Authorization=`Bearer ${e}`),n}class O{static async signUp(e){const t=await fetch(`${A}/auth/signup`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok){const o=await t.json().catch(()=>({}));throw new Error(o.error||"Failed to sign up")}return t.json()}static async signIn(e){const t=await fetch(`${A}/auth/signin`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok){const o=await t.json().catch(()=>({}));throw new Error(o.error||"Invalid email or password")}return t.json()}static async getMe(){const e=await fetch(`${A}/auth/me`,{headers:z()});if(!e.ok)throw new Error("Unauthorized");return e.json()}static async joinAuthenticated(e,t){const o=await fetch(`${A}/households/join-authenticated`,{method:"POST",headers:z(),body:JSON.stringify({code:e,role:t})});if(!o.ok){const i=await o.json().catch(()=>({}));throw new Error(i.error||"Failed to join household")}return o.json()}static async claimHousehold(e,t){const o=await fetch(`${A}/households/claim`,{method:"POST",headers:z(),body:JSON.stringify({householdId:e,role:t})});if(!o.ok){const i=await o.json().catch(()=>({}));throw new Error(i.error||"Failed to claim household")}return o.json()}static async createHousehold(e){const t=await fetch(`${A}/households`,{method:"POST",headers:z(),body:JSON.stringify(e)});if(!t.ok){const o=await t.json().catch(()=>({}));throw new Error(o.error||"Failed to create household")}return t.json()}static async getHousehold(e){const t=await fetch(`${A}/households/${e}`,{headers:z()});if(!t.ok)throw new Error("Failed to fetch household");return t.json()}static async removeMember(e,t){if(!(await fetch(`${A}/households/${e}/members/${t}`,{method:"DELETE",headers:z()})).ok)throw new Error("Failed to remove member")}static async createInviteCode(e){const t=await fetch(`${A}/households/${e}/invites`,{method:"POST",headers:z()});if(!t.ok)throw new Error("Failed to create invite code");return t.json()}static async joinHousehold(e,t,o){const i=await fetch(`${A}/households/join`,{method:"POST",headers:z(),body:JSON.stringify({code:e,displayName:t,role:o})});if(!i.ok){const s=await i.json().catch(()=>({}));throw new Error(s.error||"Failed to join household")}return i.json()}static async getPets(e){const t=await fetch(`${A}/households/${e}/pets`,{headers:z()});if(!t.ok)throw new Error("Failed to fetch pets");return t.json()}static async updatePet(e,t){const o=await fetch(`${A}/pets/${e}`,{method:"PATCH",headers:z(),body:JSON.stringify(t)});if(!o.ok)throw new Error("Failed to update pet");return o.json()}static async updateMember(e,t,o){const i=await fetch(`${A}/households/${e}/members/${t}`,{method:"PATCH",headers:z(),body:JSON.stringify(o)});if(!i.ok)throw new Error("Failed to update member");return i.json()}static async getEvents(e,t){if(!navigator.onLine)return G(e);try{const o=typeof t=="number"?{limit:t}:t||{},i=new URLSearchParams;o.limit&&i.set("limit",o.limit.toString()),o.offset&&i.set("offset",o.offset.toString()),o.since&&i.set("since",o.since),o.startDate&&i.set("startDate",o.startDate),o.endDate&&i.set("endDate",o.endDate);const s=i.toString(),a=s?`${A}/pets/${e}/events?${s}`:`${A}/pets/${e}/events`,r=await fetch(a,{headers:z()});if(!r.ok)throw new Error("Failed to fetch events from server");const l=await r.json();return await Oe(l),l}catch{return G(e)}}static async syncEvents(e,t){if(!navigator.onLine)return G(e);try{const o=await Ei(e),i=new Date().toISOString();if(o){const s=await this.getEvents(e,{since:o,limit:1e3});return s&&s.length>0&&await Oe(s),await Zt(e,i),G(e)}else{const s=new Date(Date.now()-7776e6).toISOString(),a=await this.getEvents(e,{startDate:s,limit:500});return a&&a.length>0&&(await Oe(a),t==null||t(a.length)),await Zt(e,i),this.backfillOlderEvents(e,s,t).catch(r=>{console.warn("Background historical backfill error:",r)}),G(e)}}catch(o){return console.warn("Sync failed, using offline fallback:",o),G(e)}}static async backfillOlderEvents(e,t,o){if(navigator.onLine)try{let i=t,s=!0;const a=500;for(;s;){const r=await this.getEvents(e,{endDate:i,limit:a});if(!r||r.length===0){s=!1;break}if(await Oe(r),o==null||o(r.length),r.length<a)s=!1;else{const l=r[r.length-1];l&&l.timestamp&&l.timestamp!==i?i=l.timestamp:s=!1}}}catch(i){console.warn("Backfill chunk failed:",i)}}static async createEvent(e){if(!navigator.onLine){const t=await eo(e);return{id:t,householdId:e.householdId,petId:e.petId,eventType:e.eventType,loggedByName:e.loggedByName||"Me",timestamp:e.timestamp,notes:e.notes,latitude:e.latitude,longitude:e.longitude,metadata:e.metadata,createdAt:new Date().toISOString(),isOfflinePending:!0,localId:t}}try{const t=await fetch(`${A}/events`,{method:"POST",headers:z(),body:JSON.stringify(e)});if(!t.ok)throw new Error("Server returned error creating event");const o=await t.json();return await Oe([o]),o}catch(t){console.warn("Network request failed, falling back to offline queue:",t);const o=await eo(e);return{id:o,householdId:e.householdId,petId:e.petId,eventType:e.eventType,loggedByName:e.loggedByName||"Me",timestamp:e.timestamp,notes:e.notes,latitude:e.latitude,longitude:e.longitude,metadata:e.metadata,createdAt:new Date().toISOString(),isOfflinePending:!0,localId:o}}}static async flushOfflineQueue(){if(!navigator.onLine)return 0;const e=await xo();if(e.length===0)return 0;try{const t=e.map(i=>i.dto);if((await fetch(`${A}/events/batch-sync`,{method:"POST",headers:z(),body:JSON.stringify({events:t})})).ok){for(const i of e)await Ai(i.localId);return e.length}}catch(t){console.warn("Failed to flush offline queue:",t)}return 0}static async importEvents(e){let o=0;for(let i=0;i<e.length;i+=500){const s=e.slice(i,i+500);let a=await fetch(`${A}/import/events`,{method:"POST",headers:z(),body:JSON.stringify({events:s})});if(a.status===404&&(a=await fetch(`${A}/events/batch-sync`,{method:"POST",headers:z(),body:JSON.stringify({events:s})})),!a.ok){const l=await a.json().catch(()=>({}));throw new Error(l.error||`Import batch failed (${a.status})`)}const r=await a.json();o+=r.importedCount||r.syncedCount||s.length}return{importedCount:o}}static async importDogNotes(e,t,o){const i=await fetch(`${A}/import/dognotes`,{method:"POST",headers:z(),body:JSON.stringify({householdId:e,petId:t,items:o})});if(!i.ok)throw new Error("DogNotes import failed");return i.json()}static async getAnalytics(e,t){const o=new URLSearchParams;t!=null&&t.startDate&&o.set("startDate",t.startDate),t!=null&&t.endDate&&o.set("endDate",t.endDate);const i=o.toString(),s=i?`${A}/pets/${e}/analytics?${i}`:`${A}/pets/${e}/analytics`,a=await fetch(s,{headers:z()});if(!a.ok)throw new Error("Failed to fetch analytics");return a.json()}static async saveWalkRoute(e){const t=await fetch(`${A}/walks`,{method:"POST",headers:z(),body:JSON.stringify(e)});if(!t.ok)throw new Error("Failed to save walk route");return t.json()}static async getWalkRoutes(e){const t=await fetch(`${A}/pets/${e}/walks`,{headers:z()});if(!t.ok)throw new Error("Failed to fetch walk routes");return t.json()}}class Di{constructor(){this.listeners=new Set,this.currentUser=null,this.currentHousehold=null,this.userHouseholds=[],this.currentPet=null,this.pets=[],this.events=[],this.activeTab="today",this.authView="signin",this.currentLocale="en",this.isOnline=navigator.onLine,this.pendingSyncCount=0,this.isSyncing=!1,this.analyticsTimeRange="30d",this.userAvatar=localStorage.getItem("dooty_user_avatar")||"",this.track={poop:!0,pee:!0,vomit:!0,meds:!0,weight:!0,walk:!0,vet:!1,symptom:!1},this.nudges={push:!0,weekly:!0,gap:!0,vet:!1},this.pendingInvites=[],this.loggerModalOpen=!1,this.loggerEventType=null,this.photoModalOpen=!1,this.photoModalTarget="pet",this.photoModalTargetId="",this.photoModalCurrentAvatar="",this.photoModalTitle="",this.isLoading=!1;const e=localStorage.getItem("dooty_locale");if(e&&(e==="en"||e==="ko"))this.currentLocale=e;else{const a=navigator.language||"";this.currentLocale=a.startsWith("ko")?"ko":"en"}const t=localStorage.getItem("dooty_track_prefs");if(t)try{this.track={...this.track,...JSON.parse(t)}}catch(a){console.warn("Failed to parse track prefs:",a)}const o=localStorage.getItem("dooty_nudge_prefs");if(o)try{this.nudges={...this.nudges,...JSON.parse(o)}}catch(a){console.warn("Failed to parse nudge prefs:",a)}const i=localStorage.getItem("dooty_analytics_timerange");i&&["7d","30d","1y","all"].includes(i)&&(this.analyticsTimeRange=i);const s=localStorage.getItem("dooty_household_data");if(s)try{const a=JSON.parse(s);if(this.currentHousehold=a,this.pets=a.pets||[],this.pets.length>0){const r=localStorage.getItem("dooty_pet_id");this.currentPet=this.pets.find(l=>l.id===r)||this.pets[0],G(this.currentPet.id).then(l=>{l.length>0&&this.events.length===0&&(this.events=l,this.notify())})}this.loadPendingInvites()}catch(a){console.warn("Failed to parse cached household data:",a)}window.addEventListener("online",()=>this.handleNetworkChange(!0)),window.addEventListener("offline",()=>this.handleNetworkChange(!1))}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}notify(){this.listeners.forEach(e=>e())}get t(){return Zo[this.currentLocale]}setLocale(e){this.currentLocale=e,localStorage.setItem("dooty_locale",e),this.notify()}setActiveTab(e){this.activeTab=e,this.notify()}setAuthView(e){this.authView=e,this.notify()}setTrackingPreference(e,t){this.track={...this.track,[e]:t},localStorage.setItem("dooty_track_prefs",JSON.stringify(this.track)),this.notify()}setNudgePreference(e,t){this.nudges={...this.nudges,[e]:t},localStorage.setItem("dooty_nudge_prefs",JSON.stringify(this.nudges)),this.notify()}setAnalyticsTimeRange(e){this.analyticsTimeRange=e,localStorage.setItem("dooty_analytics_timerange",e),this.notify()}openLogger(e){this.loggerEventType=e||null,this.loggerModalOpen=!0,this.notify()}closeLogger(){this.loggerModalOpen=!1,this.loggerEventType=null,this.notify()}openPhotoModal(e){this.photoModalTarget=e.target,this.photoModalTargetId=e.targetId||"",this.photoModalCurrentAvatar=e.currentAvatar||"",this.photoModalTitle=e.title||"",this.photoModalOpen=!0,this.notify()}closePhotoModal(){this.photoModalOpen=!1,this.notify()}async updatePetAvatar(e,t){if(this.currentPet&&this.currentPet.id===e&&(this.currentPet={...this.currentPet,avatarUrl:t}),this.pets=this.pets.map(o=>o.id===e?{...o,avatarUrl:t}:o),localStorage.setItem(`dooty_pet_avatar_${e}`,t),this.notify(),navigator.onLine)try{await O.updatePet(e,{avatarUrl:t})}catch(o){console.warn("Could not sync pet avatar to server:",o)}}async updateUserAvatar(e){var t;if(this.userAvatar=e,localStorage.setItem("dooty_user_avatar",e),this.notify(),this.currentHousehold&&((t=this.currentHousehold.members)!=null&&t.length)){const o=this.currentHousehold.members[0];if(o&&(o.avatarUrl=e,navigator.onLine))try{await O.updateMember(this.currentHousehold.id,o.id,{avatarUrl:e})}catch(i){console.warn("Could not sync member avatar to server:",i)}}}async updateMemberAvatar(e,t){if(this.currentHousehold&&this.currentHousehold.members){const o=this.currentHousehold.members.find(i=>i.id===e);if(o&&(o.avatarUrl=t,localStorage.setItem(`dooty_member_avatar_${e}`,t),this.notify(),navigator.onLine))try{await O.updateMember(this.currentHousehold.id,e,{avatarUrl:t})}catch(i){console.warn("Could not sync member avatar to server:",i)}}}loadPendingInvites(){if(!this.currentHousehold)return;const e=localStorage.getItem(`dooty_pending_invites_${this.currentHousehold.id}`);if(e)try{this.pendingInvites=JSON.parse(e)}catch{this.pendingInvites=[]}else this.pendingInvites=[{code:"H3P8",role:"Log only",when:"sent to Dan · expires in 6 days",expiresAt:new Date(Date.now()+6*864e5).toISOString()},{code:"B9XT",role:"Full member",when:"unsent · expires in 7 days",expiresAt:new Date(Date.now()+7*864e5).toISOString()}],localStorage.setItem(`dooty_pending_invites_${this.currentHousehold.id}`,JSON.stringify(this.pendingInvites))}async createInvite(e="Full member"){let t="";if(this.currentHousehold){try{t=(await O.createInviteCode(this.currentHousehold.id)).code}catch(i){console.warn("Could not generate invite code from server, creating locally:",i);const s="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";t=Array.from({length:6},()=>s.charAt(Math.floor(Math.random()*s.length))).join("")}const o={code:t,role:e,when:"just created · expires in 7 days",expiresAt:new Date(Date.now()+7*864e5).toISOString()};this.pendingInvites=[o,...this.pendingInvites],localStorage.setItem(`dooty_pending_invites_${this.currentHousehold.id}`,JSON.stringify(this.pendingInvites)),this.notify()}return t}async revokeInvite(e){this.currentHousehold&&(this.pendingInvites=this.pendingInvites.filter(t=>t.code!==e),localStorage.setItem(`dooty_pending_invites_${this.currentHousehold.id}`,JSON.stringify(this.pendingInvites)),this.notify())}exportEventsCsv(){var l;const e=((l=this.currentPet)==null?void 0:l.name)||"Pet",t=["Timestamp","Pet Name","Event Type","Logged By","Notes","Latitude","Longitude"],o=(this.events||[]).map(c=>[`"${c.timestamp||""}"`,`"${e}"`,`"${c.eventType||""}"`,`"${(c.loggedByName||"").replace(/"/g,'""')}"`,`"${(c.notes||"").replace(/"/g,'""')}"`,c.latitude!==void 0&&c.latitude!==null?c.latitude:"",c.longitude!==void 0&&c.longitude!==null?c.longitude:""]),i=[t.join(","),...o.map(c=>c.join(","))].join(`
`),s=new Blob([i],{type:"text/csv;charset=utf-8;"}),a=URL.createObjectURL(s),r=document.createElement("a");r.setAttribute("href",a),r.setAttribute("download",`dooty-${e.toLowerCase()}-events.csv`),document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(a)}async init(){var e,t;this.isLoading=!0,this.notify();try{if(localStorage.getItem("dooty_auth_token"))try{const i=await O.getMe();this.currentUser=i.user,this.userHouseholds=i.households||[],i.activeHousehold&&(this.currentHousehold=i.activeHousehold,localStorage.setItem("dooty_household_id",i.activeHousehold.id),localStorage.setItem("dooty_household_data",JSON.stringify(i.activeHousehold)))}catch(i){if(console.warn("Network sync for auth session failed, using cached session:",i),(e=i.message)!=null&&e.includes("Unauthorized")||(t=i.message)!=null&&t.includes("expired")){this.signOut();return}}else{const i=localStorage.getItem("dooty_household_id");if(i)try{const s=await O.getHousehold(i);s&&(this.currentHousehold=s,localStorage.setItem("dooty_household_data",JSON.stringify(s)))}catch(s){console.warn("Network sync for household failed, using cached session:",s)}}if(this.currentHousehold){const i=this.currentHousehold.pets||await O.getPets(this.currentHousehold.id);if(this.pets=i.map(s=>{const a=localStorage.getItem(`dooty_pet_avatar_${s.id}`);return{...s,avatarUrl:s.avatarUrl||a||""}}),this.currentHousehold.members&&(this.currentHousehold.members=this.currentHousehold.members.map(s=>{const a=localStorage.getItem(`dooty_member_avatar_${s.id}`);return{...s,avatarUrl:s.avatarUrl||a||(s.role==="owner"?this.userAvatar:"")}})),this.pets.length>0){const s=localStorage.getItem("dooty_pet_id");this.currentPet=this.pets.find(a=>a.id===s)||this.pets[0]}else this.currentPet=null;this.loadPendingInvites()}this.currentPet?await this.refreshEvents():this.events=[],await this.checkPendingSync()}catch(o){console.warn("Init loaded with local fallback:",o)}finally{this.isLoading=!1,this.notify()}}async selectPet(e){this.currentPet=e,localStorage.setItem("dooty_pet_id",e.id),this.events=await G(e.id),this.notify(),this.syncEvents()}async selectHousehold(e){const t=this.userHouseholds.find(i=>i.id===e);if(!t)return;this.currentHousehold=t,localStorage.setItem("dooty_household_id",t.id),localStorage.setItem("dooty_household_data",JSON.stringify(t));const o=t.pets||await O.getPets(t.id);this.pets=o,o.length>0?(this.currentPet=o[0],localStorage.setItem("dooty_pet_id",this.currentPet.id),this.events=await G(this.currentPet.id),this.syncEvents()):(this.currentPet=null,this.events=[]),this.loadPendingInvites(),this.notify()}async refreshEvents(){if(!this.currentPet){this.events=[],this.notify();return}this.events=await G(this.currentPet.id),this.notify(),await this.syncEvents()}async syncEvents(){var t;if(!this.currentPet)return;const e=this.currentPet.id;this.isSyncing=!0,this.notify();try{const o=await O.syncEvents(e,async()=>{var i;((i=this.currentPet)==null?void 0:i.id)===e&&(this.events=await G(e),this.notify())});((t=this.currentPet)==null?void 0:t.id)===e&&(this.events=o,this.notify())}catch(o){console.warn("Sync events warning:",o)}finally{this.isSyncing=!1,this.notify()}}async logEvent(e,t="",o,i,s){var l,c,g,h;if(!this.currentHousehold||!this.currentPet)return;const a=((l=this.currentUser)==null?void 0:l.displayName)||((g=(c=this.currentHousehold.members)==null?void 0:c[0])==null?void 0:g.displayName)||"Owner",r=await O.createEvent({householdId:this.currentHousehold.id,petId:this.currentPet.id,eventType:e,loggedByName:a,loggedByUserId:(h=this.currentUser)==null?void 0:h.id,timestamp:new Date().toISOString(),notes:t,latitude:i,longitude:s,metadata:o||{}});this.events=[r,...this.events],await this.checkPendingSync(),this.notify()}async handleNetworkChange(e){this.isOnline=e,e&&await O.flushOfflineQueue()>0&&await this.refreshEvents(),await this.checkPendingSync(),this.notify()}get isAuthenticated(){return this.currentHousehold!==null}signOut(){localStorage.removeItem("dooty_auth_token"),localStorage.removeItem("dooty_household_id"),localStorage.removeItem("dooty_household_data"),localStorage.removeItem("dooty_pet_id"),localStorage.removeItem("dooty_user_avatar"),this.currentUser=null,this.currentHousehold=null,this.userHouseholds=[],this.currentPet=null,this.pets=[],this.events=[],this.userAvatar="",this.activeTab="today",this.authView="signin",this.notify()}async signUp(e){this.isLoading=!0,this.notify();try{const t=await O.signUp(e);if(this.currentUser=t.user,this.currentHousehold=t.activeHousehold,this.userHouseholds=t.households||(t.activeHousehold?[t.activeHousehold]:[]),t.token&&localStorage.setItem("dooty_auth_token",t.token),t.activeHousehold){localStorage.setItem("dooty_household_id",t.activeHousehold.id),localStorage.setItem("dooty_household_data",JSON.stringify(t.activeHousehold));const o=t.activeHousehold.pets||[];this.pets=o,o.length>0?(this.currentPet=o[0],localStorage.setItem("dooty_pet_id",this.currentPet.id),await this.refreshEvents()):this.currentPet=null,this.loadPendingInvites()}this.authView="signin"}finally{this.isLoading=!1,this.notify()}}async signIn(e){this.isLoading=!0,this.notify();try{const t=await O.signIn(e);if(this.currentUser=t.user,this.currentHousehold=t.activeHousehold,this.userHouseholds=t.households||(t.activeHousehold?[t.activeHousehold]:[]),t.token&&localStorage.setItem("dooty_auth_token",t.token),t.activeHousehold){localStorage.setItem("dooty_household_id",t.activeHousehold.id),localStorage.setItem("dooty_household_data",JSON.stringify(t.activeHousehold));const o=t.activeHousehold.pets||[];this.pets=o,o.length>0?(this.currentPet=o[0],localStorage.setItem("dooty_pet_id",this.currentPet.id),await this.refreshEvents()):this.currentPet=null,this.loadPendingInvites()}this.authView="signin"}finally{this.isLoading=!1,this.notify()}}async joinAuthenticated(e,t){this.isLoading=!0,this.notify();try{const o=await O.joinAuthenticated(e,t);if(this.userHouseholds=o.households||[],o.activeHousehold){this.currentHousehold=o.activeHousehold,localStorage.setItem("dooty_household_id",o.activeHousehold.id),localStorage.setItem("dooty_household_data",JSON.stringify(o.activeHousehold));const i=o.activeHousehold.pets||[];this.pets=i,i.length>0&&(this.currentPet=i[0],localStorage.setItem("dooty_pet_id",this.currentPet.id),await this.refreshEvents()),this.loadPendingInvites()}}finally{this.isLoading=!1,this.notify()}}async claimHousehold(e,t){this.isLoading=!0,this.notify();try{const o=await O.claimHousehold(e,t);if(this.userHouseholds=o.households||[],o.activeHousehold){this.currentHousehold=o.activeHousehold,localStorage.setItem("dooty_household_id",o.activeHousehold.id),localStorage.setItem("dooty_household_data",JSON.stringify(o.activeHousehold));const i=o.activeHousehold.pets||[];this.pets=i,i.length>0&&(this.currentPet=i[0],localStorage.setItem("dooty_pet_id",this.currentPet.id),await this.refreshEvents()),this.loadPendingInvites()}}finally{this.isLoading=!1,this.notify()}}async removeMember(e){if(this.currentHousehold){this.isLoading=!0,this.notify();try{await O.removeMember(this.currentHousehold.id,e),this.currentHousehold.members=(this.currentHousehold.members||[]).filter(t=>t.id!==e),localStorage.setItem("dooty_household_data",JSON.stringify(this.currentHousehold))}finally{this.isLoading=!1,this.notify()}}}async checkPendingSync(){const e=await xo();this.pendingSyncCount=e.length,this.notify()}}const d=new Di;var zi=function(n,e,t,o){var i=arguments.length,s=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,o);else for(var r=n.length-1;r>=0;r--)(a=n[r])&&(s=(i<3?a(s):i>3?a(e,t,s):a(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s},Fe;let to=(Fe=class extends I{connectedCallback(){super.connectedCallback(),this.unsubscribe=d.subscribe(()=>this.requestUpdate())}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.unsubscribe)==null||e.call(this)}render(){var i;const e=d.currentLocale==="ko",t=((i=d.currentPet)==null?void 0:i.name)||(e?"설정":"Settings"),o=d.activeTab;return p`
      <div class="dock-container">
        <div
          class="dock-tab ${o==="today"?"active":""}"
          @click=${()=>d.setActiveTab("today")}
        >
          ${e?"오늘":"Today"}
        </div>

        <div
          class="dock-tab ${o==="analytics"?"active":""}"
          @click=${()=>d.setActiveTab("analytics")}
        >
          ${e?"숫자들":"Numbers"}
        </div>

        <div
          class="dock-tab ${o==="map"?"active":""}"
          @click=${()=>d.setActiveTab("map")}
        >
          ${e?"지도":"Map"}
        </div>

        <div
          class="dock-tab ${o==="settings"?"active":""}"
          @click=${()=>d.setActiveTab("settings")}
        >
          ${t}
        </div>

        <div class="fab-btn" @click=${()=>d.openLogger()}>
          <div class="fab-l1"></div>
          <div class="fab-l2"></div>
          <div class="fab-l3"></div>
        </div>
      </div>
    `}},Fe.styles=q`
    :host {
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 20px;
      width: 100%;
      padding: 0 16px;
      box-sizing: border-box;
      z-index: 90;
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
    }

    .dock-tab {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 44px;
      border-radius: 19px;
      cursor: pointer;
      font-family: var(--font-body);
      font-size: 11.5px;
      font-weight: 800;
      color: #17140F;
      border: 2.5px solid transparent;
      background: #FFF;
      transition: all 0.15s ease;
      user-select: none;
    }

    .dock-tab.active {
      background: #FFCE2E;
      border-color: #17140F;
    }

    .dock-tab:active {
      transform: scale(0.95);
    }

    .fab-btn {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      flex: none;
      border: 3px solid #17140F;
      background: #FF5A3C;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2px;
      padding-bottom: 4px;
      box-sizing: border-box;
      cursor: pointer;
      box-shadow: 3px 3px 0 #17140F;
      transition: background 0.15s ease, transform 0.1s ease, box-shadow 0.1s ease;
    }

    .fab-btn:hover {
      background: #FF7659;
    }

    .fab-btn:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .fab-l1 { width: 10px; height: 5px; border-radius: 50%; background: #FFF; }
    .fab-l2 { width: 16px; height: 6px; border-radius: 50%; background: #FFF; }
    .fab-l3 { width: 22px; height: 7px; border-radius: 50%; background: #FFF; }
  `,Fe);to=zi([V("dooty-dock")],to);var bo=function(n,e,t,o){var i=arguments.length,s=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,o);else for(var r=n.length-1;r>=0;r--)(a=n[r])&&(s=(i<3?a(s):i>3?a(e,t,s):a(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s},$e;let At=($e=class extends I{connectedCallback(){super.connectedCallback(),this.unsubscribe=d.subscribe(()=>this.requestUpdate())}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.unsubscribe)==null||e.call(this)}formatTime(e){const t=new Date(e);return isNaN(t.getTime())?"":t.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}).toLowerCase()}getEventVisuals(e){switch(e){case"poop":return{tag:"P",bg:"#FFCE2E"};case"pee":return{tag:"U",bg:"#BFD0FF"};case"walk":return{tag:"W",bg:"#9EC6E8"};case"medicine":return{tag:"M",bg:"#1FC99B"};case"vomit":return{tag:"V",bg:"#FF9A3C"};case"weight":return{tag:"KG",bg:"#2B5BE8"};case"vet":return{tag:"D",bg:"#FFD15C"};case"symptom":return{tag:"S",bg:"#FF5A3C"};case"food":return{tag:"F",bg:"#FFB800"};case"water":return{tag:"H",bg:"#60A5FA"};case"playing":return{tag:"T",bg:"#FBBF24"};case"grooming":return{tag:"G",bg:"#F472B6"};default:return{tag:"E",bg:"#FFCE2E"}}}render(){var v,E,M;const e=d.currentLocale==="ko",t=((v=d.currentPet)==null?void 0:v.name)||(e?"반려견":"My Pet"),o=((E=d.currentPet)==null?void 0:E.id)||"",i=d.events||[],s=hi(i,o),a=i.length,r=new Date;r.setHours(0,0,0,0);const l=i.filter(F=>new Date(F.timestamp)>=r);let c=0;if(i.length>=2){const F=[...i].sort((P,T)=>new Date(P.timestamp).getTime()-new Date(T.timestamp).getTime());for(let P=1;P<F.length;P++){const T=(new Date(F[P].timestamp).getTime()-new Date(F[P-1].timestamp).getTime())/36e5;T>c&&(c=T)}}const g=new Date().getHours(),h=g<12?e?`좋은 아침, ${t}!`:`Morning, ${t}.`:g<18?e?`안녕, ${t}!`:`Hey ${t}!`:e?`좋은 저녁, ${t}!`:`Evening, ${t}.`,u=l.length===0?e?"오늘의 첫 기록을 시작해볼까요?":"Ready for today’s first log.":e?`오늘 ${l.length}번 완료.`:`${l.length} down today.`,y=s.currentStreakDays,w=s.nextPoopPrediction||fo(i,o),$=e?w.timeDisplayKo:w.timeDisplay,k=e?w.subtextKo:w.subtext,S=w.progressPercent,R=Math.max(1,s.dailyFrequencies.length),_=a>0?(a/R).toFixed(1):"0.0",K=(M=d.currentPet)==null?void 0:M.avatarUrl;return p`
      <!-- Top Header Row -->
      <div class="top-header-row">
        <div
          class="dog-avatar-btn"
          @click=${()=>this.dispatchEvent(new CustomEvent("dooty-navigate",{bubbles:!0,composed:!0,detail:"dog"}))}
        >
          ${K?p`<img src="${K}" alt="Pet" />`:p`<div>${e?`강아지
사진`:`dog
pic`}</div>`}
        </div>

        <div class="greeting-col">
          <div class="greeting-text">${h}</div>
          <div style="display: flex; align-items: center; gap: 6px; margin-top: 1px;">
            <span class="vibe-text">${u}</span>
            ${d.isSyncing?p`
                  <span class="sync-pill">
                    <span class="sync-spin"></span>
                    <span>${e?"동기화 중":"Syncing"}</span>
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
          ${e?`${y}일 연속`:`${y} DAY STREAK`}
        </div>
        <div class="pred-label">
          ${e?"다음은 아마도":"Next one, probably"}
        </div>
        <div class="pred-time">${$}</div>
        <div class="pred-sub">${k}</div>
        <div class="pred-progress-bar">
          <div class="pred-progress-fill" style="width: ${S}%;"></div>
        </div>
      </div>

      <!-- 3 KPI Cards -->
      <div class="kpi-row">
        <div class="kpi-card" style="background: #FFF;">
          <div class="kpi-val" style="color: #17140F;">${_}</div>
          <div class="kpi-lbl" style="color: #6A6152;">${e?"일일 평균":"a day, avg"}</div>
        </div>
        <div class="kpi-card" style="background: #FFF;">
          <div class="kpi-val" style="color: #17140F;">
            ${c>0?`${Math.round(c)}h`:e?"기록 없음":"0h"}
          </div>
          <div class="kpi-lbl" style="color: #6A6152;">${e?"최대 공백":"longest gap"}</div>
        </div>
        <div class="kpi-card" style="background: #2B5BE8;">
          <div class="kpi-val" style="color: #FFF;">${a}</div>
          <div class="kpi-lbl" style="color: #BFD0FF;">${e?"전체 기록":"all time"}</div>
        </div>
      </div>

      <!-- Today Feed Header -->
      <div class="section-row">
        <div class="section-title">${e?"오늘":"Today"}</div>
        <div class="section-count">
          ${e?`${l.length}건`:`${l.length} THINGS`}
        </div>
      </div>

      <!-- Feed List -->
      <div class="feed-list">
        ${l.length>0?l.map(F=>{const{tag:P,bg:T}=this.getEventVisuals(F.eventType);return p`
                <div class="feed-card" @click=${()=>d.openLogger(F.eventType)}>
                  <div class="feed-badge" style="background: ${T};">${P}</div>
                  <div class="feed-content">
                    <div class="feed-title">
                      ${F.notes||`${F.eventType.toUpperCase()} · ${e?"기록됨":"Logged"}`}
                    </div>
                    <div class="feed-detail">
                      ${e?`기록자: ${F.loggedByName}`:`logged by ${F.loggedByName}`}
                    </div>
                  </div>
                  <div class="feed-time">${this.formatTime(F.timestamp)}</div>
                </div>
              `}):i.length>0?p`
              <!-- Recent fallback if no logs today -->
              <div style="font-size: 11px; font-weight: 800; color: #9A9080; text-transform: uppercase; margin-bottom: 4px;">
                ${e?"최근 기록":"Recent logs"}
              </div>
              ${i.slice(0,4).map(F=>{const{tag:P,bg:T}=this.getEventVisuals(F.eventType);return p`
                  <div class="feed-card" @click=${()=>d.openLogger(F.eventType)}>
                    <div class="feed-badge" style="background: ${T};">${P}</div>
                    <div class="feed-content">
                      <div class="feed-title">
                        ${F.notes||`${F.eventType.toUpperCase()} · ${e?"기록":"Logged"}`}
                      </div>
                      <div class="feed-detail">
                        ${new Date(F.timestamp).toLocaleDateString()} · ${F.loggedByName}
                      </div>
                    </div>
                    <div class="feed-time">${this.formatTime(F.timestamp)}</div>
                  </div>
                `})}
            `:p`
              <div class="empty-card">
                <div style="font-family: var(--font-heading); font-weight: 800; font-size: 16px; color: #17140F;">
                  ${e?"아직 기록이 없습니다":"No logs recorded yet"}
                </div>
                <div style="font-size: 12px; line-height: 1.45;">
                  ${e?"하단의 주황색 버튼을 눌러 첫 배변, 식사 또는 산책을 기록해보세요!":"Tap the orange button at the bottom to log your pet’s first poop, walk, or meal!"}
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
            ${e?"Dooty 결산 2026":"Dooty Wrapped 2026"}
          </div>
          <div class="wrapped-sub">
            ${e?`올해 ${a}번, 기록을 확인하세요.`:`${a} logs so far. Tap to view records.`}
          </div>
        </div>
        <div class="wrapped-arrow">›</div>
      </div>
    `}},$e.styles=q`
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
  `,$e);bo([b()],At.prototype,"unsubscribe",void 0);At=bo([V("dooty-home")],At);var yo=function(n,e,t,o){var i=arguments.length,s=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,o);else for(var r=n.length-1;r>=0;r--)(a=n[r])&&(s=(i<3?a(s):i>3?a(e,t,s):a(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s},ke;let Pt=(ke=class extends I{connectedCallback(){super.connectedCallback(),this.unsubscribe=d.subscribe(()=>this.requestUpdate())}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.unsubscribe)==null||e.call(this)}render(){const e=d.currentLocale==="ko",t=d.analyticsTimeRange||"30d",o=d.events||[];let i=o;const s=Date.now();if(t==="7d"){const f=s-6048e5;i=o.filter(x=>new Date(x.timestamp).getTime()>=f)}else if(t==="30d"){const f=s-2592e6;i=o.filter(x=>new Date(x.timestamp).getTime()>=f)}else if(t==="1y"){const f=s-31536e6;i=o.filter(x=>new Date(x.timestamp).getTime()>=f)}const a=i,r=a.length,l=["MON","TUE","WED","THU","FRI","SAT","SUN"],c=["월","화","수","목","금","토","일"],g=Array.from({length:7},()=>Array(24).fill(0)),h=Array(24).fill(0);let u=Date.now();a.forEach(f=>{const x=new Date(f.timestamp),D=x.getTime();if(!isNaN(D)){D<u&&(u=D);const H=(x.getDay()+6)%7,U=x.getHours();g[H][U]++,h[U]++}});let y=1;g.forEach(f=>{f.forEach(x=>{x>y&&(y=x)})});const w=l.map((f,x)=>({day:e?c[x]:f,cells:Array.from({length:24},(D,H)=>{const U=g[x][H],te=y>0?U/y:0,Ze=U===0?"#FFF":te<.25?"#FFE9A8":te<.55?"#FFCE2E":te<.8?"#FF9A3C":"#FF5A3C",gt=U===0?"#E6DDC8":"#17140F",To=H===0?"12 am":H<12?`${H} am`:H===12?"12 pm":`${H-12} pm`;return{bg:Ze,brd:gt,count:U,hourLabel:To,dayLabel:e?c[x]:f}})}));let $=7,k=0;h.forEach((f,x)=>{f>k&&(k=f,$=x)});const S=(f,x)=>{const D=(f+1)%24;if(x){const H=f<12?`오전 ${f===0?12:f}`:`오후 ${f===12?12:f-12}`,U=D<12?`${D===0?12:D}`:`${D===12?12:D-12}`;return`${H}:00–${U}:00`}else{const H=U=>{const te=U<12?"am":"pm";return`${U%12===0?12:U%12}:00 ${te}`};return`${H(f)}–${H(D)}`}};let R=1/0,_=1;for(let f=0;f<24;f++){const x=h[f]+h[(f+1)%24]+h[(f+2)%24];x<R&&(R=x,_=f)}const K=S($,!1),v=S($,!0),E=R===0?`He has never gone between ${_%12||12} and ${(_+3)%12||12} ${_<12?"am":"pm"}. Respect.`:`Quietest around ${S(_,!1)}.`,M=R===0?`새벽 ${_}시에서 ${(_+3)%24}시 사이에는 한 번도 없었습니다. 존경.`:`가장 한산한 시간대는 ${S(_,!0)}입니다.`,F=new Date(u),P=["January","February","March","April","May","June","July","August","September","October","November","December"],T=r>0?`${P[F.getMonth()]} ${F.getFullYear()}`:"March 2021",Q=r>0?`${F.getFullYear()}년 ${F.getMonth()+1}월`:"2021년 3월",ae=new Date(Date.now()-336*60*60*1e3),X=a.filter(f=>f.eventType==="poop"&&new Date(f.timestamp)>=ae),re=X.filter(f=>(f.notes||"").toLowerCase().includes("4")||(f.notes||"").toLowerCase().includes("textbook")).length,xe=X.length>0?Math.round(re/X.length*100):(r>0,82);let J=0;if(a.length>=2){const f=[...a].sort((x,D)=>new Date(x.timestamp).getTime()-new Date(D.timestamp).getTime());for(let x=1;x<f.length;x++){const D=(new Date(f[x].timestamp).getTime()-new Date(f[x-1].timestamp).getTime())/36e5;D>J&&(J=D)}}const Je=new Date(Date.now()-10080*60*1e3),be=a.filter(f=>f.eventType==="vomit"&&new Date(f.timestamp)>=Je).length,Z=Array(12).fill(0),rt=Date.now();a.forEach(f=>{const x=Math.floor((rt-new Date(f.timestamp).getTime())/6048e5);x>=0&&x<12&&Z[11-x]++});const lt=Math.max(1,...Z),le=Z.map((f,x)=>{const D=f===0?8:Math.round(f/lt*88)+8;return{h:`${r>0?D:[42,58,48,70,65,82,54,76,88,72,60,96][x]}px`,bg:x===11?"#FF5A3C":"#FFCE2E",l:`W${x+1}`}}),de=a.filter(f=>f.eventType==="walk").length,ye=a.filter(f=>f.eventType==="poop").length;a.filter(f=>f.eventType==="pee").length;const dt=Math.max(1,Math.round(ye*.18+(r>0?0:412))),Ye=Math.max(1.42,Number((de*1.8).toFixed(2))),m=[{v:r>0?`${dt} kg`:"412 kg",l:e?"누적 배변량":"career tonnage",bg:"#FFCE2E",sub:"#7A5C00",rot:"-2deg"},{v:r>0?`${Ye} km`:"1.42 km",l:e?"총 산책 거리":"end to end",bg:"#1FC99B",sub:"#0A5A45",rot:"1.5deg"},{v:J>0?`${Math.round(J)} h`:"31 h",l:e?"최장 공백":"longest drought",bg:"#FFF",sub:"#6A6152",rot:"-1deg"},{v:r>0?`${ye} logs`:"62%",l:e?"동네 정복률":"block conquered",bg:"#FF5A3C",sub:"#7A1E0C",rot:"2deg"}],C=r>0?r/24:1,Y=h.slice(6,12).reduce((f,x)=>f+x,0)/6,ct=r>0?Math.round((Y-C)/C*100):25,ht=h.slice(12,18).reduce((f,x)=>f+x,0)/6,Lt=r>0?Math.round((ht-C)/C*100):10,Qe=g[5].reduce((f,x)=>f+x,0)+g[6].reduce((f,x)=>f+x,0),Fo=r-Qe,$o=Qe/2,ut=Fo/5,ko=ut>0&&r>0?Math.round(($o-ut)/ut*100):r>0?0:14,So=(h[21]+h[22]+h[23]+h[0]+h[1]+h[2]+h[3]+h[4]+h[5])/9,Co=r>0?Math.round((So-C)/C*100):-65,Xe=(f,x,D)=>{const H=x>=0,U=Math.abs(x),te=Math.min(48,Math.max(3,Math.round(U/100*48))),Ze=H?"50%":`${50-te}%`,gt=x===0?"0%":`${H?"+":"−"}${U}%`;return{l:f,v:gt,left:Ze,w:`${te}%`,bg:D}},Eo=[Xe(e?"오전 6–12시":"Morning (6–12)",ct,"#FF9A3C"),Xe(e?"오후 12–18시":"Afternoon (12–18)",Lt,"#1FC99B"),Xe(e?"주말 (토·일)":"Weekends",ko,"#FF5A3C"),Xe(e?"심야 21–6시":"Night (21–6)",Co,"#9EC6E8")],Ao=t==="7d"?e?"7일":"7 DAYS":t==="30d"?e?"30일":"30 DAYS":t==="1y"?e?"1년":"1 YEAR":e?"전체":"ALL TIME",Po=t==="7d"?e?`지난 7일간 ${r.toLocaleString()}건`:`${r.toLocaleString()} logs in last 7 days`:t==="30d"?e?`지난 30일간 ${r.toLocaleString()}건`:`${r.toLocaleString()} logs in last 30 days`:t==="1y"?e?`지난 1년간 ${r.toLocaleString()}건`:`${r.toLocaleString()} logs in last year`:e?r>0?`${Q}부터 ${r.toLocaleString()}건`:"2021년 3월부터 1,204건":r>0?`${r.toLocaleString()} logs since ${T}`:"1,204 logs since March 2021";return p`
      <div class="page-header">
        <div class="page-title">${e?"숫자들":"The numbers"}</div>
        <div class="page-sub">${Po}</div>
      </div>

      <!-- Segmented Time-Range Selector -->
      <div class="time-selector-row">
        <button
          class="time-pill-btn ${t==="7d"?"active":""}"
          @click=${()=>d.setAnalyticsTimeRange("7d")}
        >
          ${e?"7일":"7D"}
        </button>
        <button
          class="time-pill-btn ${t==="30d"?"active":""}"
          @click=${()=>d.setAnalyticsTimeRange("30d")}
        >
          ${e?"30일":"30D"}
        </button>
        <button
          class="time-pill-btn ${t==="1y"?"active":""}"
          @click=${()=>d.setAnalyticsTimeRange("1y")}
        >
          ${e?"1년":"1Y"}
        </button>
        <button
          class="time-pill-btn ${t==="all"?"active":""}"
          @click=${()=>d.setAnalyticsTimeRange("all")}
        >
          ${e?"전체":"ALL"}
        </button>
      </div>

      <!-- When it happens 24h Heatmap -->
      <div class="card-block">
        <div class="card-header">
          <div class="card-title">${e?"언제 하나요":"When it happens"}</div>
          <div class="card-badge">${Ao}</div>
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
          ${w.map(f=>p`
              <div class="heat-row">
                <div class="heat-day-lbl">${f.day}</div>
                <div class="heat-cells">
                  ${f.cells.map(x=>p`
                      <div
                        class="heat-cell"
                        style="background: ${x.bg}; border: 1px solid ${x.brd};"
                        title="${x.dayLabel} ${x.hourLabel}: ${x.count} ${x.count===1?"event":"events"}"
                      ></div>
                    `)}
                </div>
              </div>
            `)}
        </div>

        <!-- Design-faithful continuous gradient legend -->
        <div class="heat-legend">
          <div style="font-size: 9px; font-weight: 800; color: #9A9080;">${e?"쿨쿨":"ZZZ"}</div>
          <div class="heat-legend-bar"></div>
          <div style="font-size: 9px; font-weight: 800; color: #9A9080;">${e?"출발!":"GO!"}</div>
        </div>

        <!-- Contextual peak caption -->
        <div class="heat-caption">
          ${e?p`가장 많은 시간은 <strong style="color: #17140F;">${v}</strong>. ${M}`:p`Peak is <strong style="color: #17140F;">${K}</strong>. ${E}`}
        </div>
      </div>

      <!-- Gut Score Banner -->
      <div
        class="gut-card"
        @click=${()=>this.dispatchEvent(new CustomEvent("dooty-navigate",{bubbles:!0,composed:!0,detail:"deep"}))}
      >
        <div
          class="gut-ring"
          style="background: conic-gradient(#17140F 0% ${xe}%, #FFF ${xe}% 100%);"
        >
          <div class="gut-ring-inner">
            <div class="gut-score-num">${xe}</div>
            <div class="gut-score-lbl">${e?"장":"GUT"}</div>
          </div>
        </div>
        <div style="flex: 1; min-width: 0;">
          <div style="font-family: var(--font-heading); font-weight: 800; font-size: 18px; color: #17140F; letter-spacing: -0.4px;">
            ${e?"탄탄합니다, 말 그대로.":"Solid. Literally."}
          </div>
          <div style="font-size: 12px; font-weight: 600; color: #0A5A45; line-height: 1.4; margin-top: 3px;">
            ${e?`${xe}%의 날이 완벽한 4단계. 눌러서 자세히 보기.`:`Perfect 4s on ${xe}% of days. Tap for the full breakdown.`}
          </div>
          ${be>0?p`
                <div class="flag-badge">
                  ${e?`주의 ${be}건`:`${be} FLAG`}
                </div>
              `:null}
        </div>
      </div>

      <!-- Weekly Count Bars -->
      <div class="card-block">
        <div class="card-header" style="margin-bottom: 14px;">
          <div class="card-title">${e?"주간 횟수":"Weekly count"}</div>
          <div style="font-size: 10.5px; font-weight: 800; color: #1FC99B;">
            ${e?"▲ 4% 지난달 대비":"▲ 4% vs last month"}
          </div>
        </div>
        <div style="display: flex; align-items: flex-end; gap: 5px; height: 104px;">
          ${le.map(f=>p`
              <div
                style="flex: 1; display: flex; flex-direction: column; justify-content: flex-end; align-items: center; gap: 5px; height: 100%;"
              >
                <div
                  style="width: 100%; border-radius: 6px 6px 3px 3px; border: 2px solid #17140F; box-sizing: border-box; background: ${f.bg}; height: ${f.h};"
                ></div>
                <div style="font-size: 7.5px; font-weight: 800; color: #B5AB99;">${f.l}</div>
              </div>
            `)}
        </div>
      </div>

      <!-- Trophy Case -->
      <div class="trophy-case">
        <div class="trophy-title">${e?"트로피 보관함":"Trophy case"}</div>
        <div class="trophy-grid">
          ${m.map(f=>p`
              <div
                class="trophy-item"
                style="background: ${f.bg}; transform: rotate(${f.rot});"
              >
                <div class="trophy-val">${f.v}</div>
                <div class="trophy-sub" style="color: ${f.sub};">${f.l}</div>
              </div>
            `)}
        </div>
      </div>

      <!-- Time & Routine Patterns -->
      <div class="card-block">
        <div class="card-title">${e?"시간 & 일과 패턴":"Time & routine patterns"}</div>
        <div style="font-size: 11.5px; font-weight: 600; color: #6A6152; margin: 2px 0 13px;">
          ${e?"평균 기준 대비 시간대별 배변 주기 변화율":"Deviation from average daily baseline."}
        </div>
        <div style="display: flex; flex-direction: column; gap: 11px;">
          ${Eo.map(f=>p`
              <div class="corr-row">
                <div class="corr-lbl">${f.l}</div>
                <div class="corr-bar-track">
                  <div class="corr-center-line"></div>
                  <div
                    style="position: absolute; top: 0; bottom: 0; background: ${f.bg}; left: ${f.left}; width: ${f.w};"
                  ></div>
                </div>
                <div class="corr-val">${f.v}</div>
              </div>
            `)}
        </div>
      </div>
    `}},ke.styles=q`
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
  `,ke);yo([b()],Pt.prototype,"unsubscribe",void 0);Pt=yo([V("dooty-numbers")],Pt);var _i=function(n,e,t,o){var i=arguments.length,s=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,o);else for(var r=n.length-1;r>=0;r--)(a=n[r])&&(s=(i<3?a(s):i>3?a(e,t,s):a(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s},Se;let oo=(Se=class extends I{render(){const e=d.currentLocale==="ko",t=(d.events||[]).filter(o=>typeof o.latitude=="number"&&typeof o.longitude=="number");return d.events.length,p`
      <!-- Map Canvas Area -->
      <div class="map-canvas-container">
        <div class="map-grid-overlay"></div>
        <div class="map-park-1"></div>
        <div class="map-park-2"></div>
        <div class="map-river"></div>

        <!-- Dynamic Pins from real events -->
        ${t.map((o,i)=>{const s=20+i*29%60,a=25+i*37%55,r=o.eventType==="poop"?"#FFCE2E":o.eventType==="pee"?"#BFD0FF":"#FF5A3C";return p`
            <div
              class="map-pin"
              style="left: ${s}%; top: ${a}%; width: 38px; height: 38px; background: ${r}; font-size: 13px;"
              @click=${()=>{var l,c;return this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:`${o.eventType.toUpperCase()} Log`,sub:`${(l=o.latitude)==null?void 0:l.toFixed(4)}, ${(c=o.longitude)==null?void 0:c.toFixed(4)} · ${o.loggedByName}`}}))}}
            >
              ${o.eventType==="poop"?"💩":o.eventType==="pee"?"💧":"📍"}
            </div>
          `})}

        <!-- Territory Badge -->
        <div class="territory-card">
          <div class="territory-sub">${e?"위치 기록":"Geo-tagged logs"}</div>
          <div class="territory-val">
            ${t.length>0?`${t.length} spots`:e?"기록 없음":"0 spots"}
          </div>
        </div>
      </div>

      <!-- Favourite spots ranking list -->
      <div class="spots-section">
        <div class="spots-title">${e?"최근 위치 기록":"Recent tagged locations"}</div>
        <div class="spots-list">
          ${t.length>0?t.slice(0,5).map((o,i)=>p`
                  <div
                    class="spot-card"
                    @click=${()=>{var s,a;return this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:`${o.eventType.toUpperCase()} Tag`,sub:`${(s=o.latitude)==null?void 0:s.toFixed(5)}, ${(a=o.longitude)==null?void 0:a.toFixed(5)}`}}))}}
                  >
                    <div class="spot-rank" style="background: ${o.eventType==="poop"?"#FFCE2E":"#1FC99B"};">
                      ${i+1}
                    </div>
                    <div style="flex: 1; min-width: 0;">
                      <div class="spot-name">${o.notes||`${o.eventType} at tagged location`}</div>
                      <div class="spot-note">
                        ${new Date(o.timestamp).toLocaleDateString()} · ${o.loggedByName}
                      </div>
                    </div>
                    <div class="spot-count">📍</div>
                  </div>
                `):p`
                <div style="background: #FFF; border: 3px solid #17140F; border-radius: 20px; padding: 20px; text-align: center; box-shadow: 3px 3px 0 #17140F;">
                  <div style="font-size: 32px; margin-bottom: 6px;">🗺️</div>
                  <div style="font-family: var(--font-heading); font-weight: 800; font-size: 15px; color: #17140F;">
                    ${e?"위치 태그가 아직 없습니다":"No GPS logs yet"}
                  </div>
                  <div style="font-size: 12px; color: #6A6152; margin-top: 4px; line-height: 1.4;">
                    ${e?"기록할 때 GPS 위치 추가를 활성화하면 지도에 배변 및 산책 스팟이 표시됩니다.":'When recording an entry, tap "Add GPS Coordinates" to map your pet’s favorite potty spots!'}
                  </div>
                </div>
              `}
        </div>
      </div>
    `}},Se.styles=q`
    :host {
      display: block;
      padding-bottom: 140px;
    }

    .map-canvas-container {
      position: relative;
      height: 420px;
      background: #E3E8D8;
      overflow: hidden;
      border-bottom: 3px solid #17140F;
    }

    .map-grid-overlay {
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

    .map-pin {
      position: absolute;
      z-index: 3;
      transform: translate(-50%, -50%);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      border: 3px solid #17140F;
      box-shadow: 3px 3px 0 #17140F;
      font-family: var(--font-heading);
      font-weight: 800;
      color: #17140F;
      transition: transform 0.1s ease;
    }

    .map-pin:hover {
      transform: translate(-50%, -50%) scale(1.1);
    }

    .territory-card {
      position: absolute;
      z-index: 4;
      left: 16px;
      top: 62px;
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 18px;
      padding: 11px 14px;
      box-shadow: 4px 4px 0 #17140F;
    }

    .territory-sub {
      font-size: 10px;
      font-weight: 800;
      letter-spacing: 1.4px;
      color: #9A9080;
      text-transform: uppercase;
    }

    .territory-val {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 23px;
      color: #17140F;
      line-height: 1.1;
      letter-spacing: -0.7px;
    }

    /* Spots List */
    .spots-section {
      padding: 18px 18px 24px;
      display: flex;
      flex-direction: column;
      gap: 13px;
    }

    .spots-title {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 22px;
      color: #17140F;
      letter-spacing: -0.6px;
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
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 20px;
      padding: 12px 14px;
      box-shadow: 3px 3px 0 #17140F;
      cursor: pointer;
      transition: transform 0.1s ease, box-shadow 0.1s ease;
    }

    .spot-card:hover {
      transform: translate(-1px, -1px);
      box-shadow: 5px 5px 0 #17140F;
    }

    .spot-rank {
      width: 36px;
      height: 36px;
      border-radius: 12px;
      border: 2.5px solid #17140F;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 15px;
      color: #17140F;
      flex: none;
    }

    .spot-name {
      font-size: 14px;
      font-weight: 800;
      color: #17140F;
    }

    .spot-note {
      font-size: 11.5px;
      font-weight: 600;
      color: #6A6152;
      margin-top: 1px;
    }

    .spot-count {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 18px;
      color: #17140F;
      flex: none;
    }
  `,Se);oo=_i([V("dooty-map")],oo);var wo=function(n,e,t,o){var i=arguments.length,s=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,o);else for(var r=n.length-1;r>=0;r--)(a=n[r])&&(s=(i<3?a(s):i>3?a(e,t,s):a(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s},Ce;let Tt=(Ce=class extends I{constructor(){super(...arguments),this.medDone={0:!0,1:!1,2:!1}}connectedCallback(){super.connectedCallback(),this.unsubscribe=d.subscribe(()=>this.requestUpdate())}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.unsubscribe)==null||e.call(this)}toggleMed(e){this.medDone={...this.medDone,[e]:!this.medDone[e]}}render(){const e=d.currentLocale==="ko",t=d.currentPet,o=(t==null?void 0:t.name)||(e?"반려견":"My Pet"),i=(t==null?void 0:t.breed)||(e?"품종 미설정":"Breed unlisted"),s=t!=null&&t.birthday?new Date(t.birthday).toLocaleDateString():"",a=(d.events||[]).filter(c=>c.eventType==="medicine"),r=(d.events||[]).filter(c=>c.eventType==="vomit"||c.eventType==="medicine"||c.notes&&c.notes.toLowerCase().includes("vet")),l=t==null?void 0:t.avatarUrl;return p`
      <!-- Pet Hero Card -->
      <div class="dog-hero-card">
        <div
          class="dog-avatar-wrapper"
          @click=${()=>d.openPhotoModal({target:"pet",targetId:t==null?void 0:t.id,currentAvatar:l,title:e?`${o} 사진 변경`:`Change ${o}'s Photo`})}
        >
          <div class="dog-pic-avatar">
            ${l?p`<img src="${l}" class="dog-pic-img" alt="${o}" />`:p`<div>${e?`반려견
사진`:`pet
pic`}</div>`}
          </div>
          <div class="avatar-edit-badge">📷</div>
        </div>
        <div style="flex: 1; min-width: 0;">
          <div class="dog-name">${o}</div>
          <div class="dog-details">
            ${i}${s?` · ${s}`:""}
          </div>
          <div class="good-badge">${e?"프로필 활성":"ACTIVE"}</div>
        </div>
      </div>

      <!-- Medications Log -->
      <div class="card-block">
        <div class="card-title" style="margin-bottom: 13px;">
          ${e?"투약 및 영양제 기록":"Medication & Supplements"}
        </div>
        <div>
          ${a.length>0?a.slice(0,5).map((c,g)=>{const h=!!this.medDone[g];return p`
                  <div class="med-row">
                    <div
                      class="med-check"
                      style="background: ${h?"#1FC99B":"#FFF"};"
                      @click=${()=>this.toggleMed(g)}
                    >
                      ${h?"✓":""}
                    </div>
                    <div style="flex: 1; min-width: 0;">
                      <div style="font-size: 14px; font-weight: 800; color: #17140F;">
                        ${c.notes||(e?"투약 기록":"Medication")}
                      </div>
                      <div style="font-size: 11.5px; font-weight: 600; color: #6A6152;">
                        ${new Date(c.timestamp).toLocaleDateString()} · ${c.loggedByName}
                      </div>
                    </div>
                    <div style="font-size: 11.5px; font-weight: 800; color: #9A9080; flex: none;">
                      ${new Date(c.timestamp).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})}
                    </div>
                  </div>
                `}):p`
                <div style="font-size: 12.5px; font-weight: 600; color: #6A6152; padding: 6px 0;">
                  ${e?"아직 등록된 투약 기록이 없습니다. 하단 버튼에서 약을 기록해보세요.":"No medications logged yet. Tap the log button below to record medicine."}
                </div>
              `}
        </div>
      </div>

      <!-- Health Events History -->
      <div class="card-block">
        <div class="card-title" style="margin-bottom: 13px;">
          ${e?"건강 및 이상 반응 기록":"Health & Symptom History"}
        </div>
        <div>
          ${r.length>0?r.slice(0,5).map(c=>p`
                  <div class="vet-item">
                    <div class="vet-date">
                      ${new Date(c.timestamp).toLocaleDateString([],{month:"short",day:"numeric"})}
                    </div>
                    <div class="vet-body">
                      <div style="font-size: 13.5px; font-weight: 800; color: #17140F;">
                        ${c.eventType.toUpperCase()} · ${c.notes||(e?"상태 기록":"Logged")}
                      </div>
                      <div style="font-size: 11.5px; font-weight: 600; color: #6A6152; line-height: 1.45; margin-top: 2px;">
                        ${e?`기록자: ${c.loggedByName}`:`Logged by ${c.loggedByName}`}
                      </div>
                    </div>
                  </div>
                `):p`
                <div style="font-size: 12.5px; font-weight: 600; color: #6A6152; padding: 6px 0;">
                  ${e?"이상 징후나 구토 기록이 없습니다. 건강한 상태입니다!":"No symptoms or issues logged. Looking healthy!"}
                </div>
              `}
        </div>
      </div>

      <!-- Export Button -->
      <div
        class="export-btn"
        @click=${()=>this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:e?"요약 준비 완료":"Summary ready",sub:e?"기록 데이터가 준비되었습니다.":"Health logs ready."}}))}
      >
        ${e?"건강 요약 내보내기":"Export health summary"}
      </div>
    `}},Ce.styles=q`
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
      margin-bottom: 12px;
    }

    .vet-date {
      font-size: 11px;
      font-weight: 800;
      color: #9A9080;
      width: 48px;
      flex: none;
      padding-top: 2px;
    }

    .vet-body {
      flex: 1;
      min-width: 0;
      border-left: 3px solid #FFCE2E;
      padding-left: 12px;
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
  `,Ce);wo([b()],Tt.prototype,"medDone",void 0);Tt=wo([V("dooty-dog")],Tt);var Ni=function(n,e,t,o){var i=arguments.length,s=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,o);else for(var r=n.length-1;r>=0;r--)(a=n[r])&&(s=(i<3?a(s):i>3?a(e,t,s):a(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s},Ee;let io=(Ee=class extends I{constructor(){super(...arguments),this.distNames=["Pellets","Lumpy","Cracked","Textbook","Soft blobs","Mushy","Liquid"],this.distCol=["#E3D8BE","#E3D8BE","#FFE9A8","#1FC99B","#FFCE2E","#FF9A3C","#FF5A3C"]}render(){const e=d.currentLocale==="ko",t=d.events||[],o=t.length,i=new Date(Date.now()-336*60*60*1e3),s=t.filter(u=>u.eventType==="poop"&&new Date(u.timestamp)>=i),a=[0,0,0,0,0,0,0];s.forEach(u=>{const y=(u.notes||"").match(/Type\s*([1-7])/i)||(u.notes||"").match(/([1-7])/);if(y){const w=parseInt(y[1],10);w>=1&&w<=7&&a[w-1]++}else a[3]++});const r=a.reduce((u,y)=>u+y,0),l=a.map(u=>r>0?Math.round(u/r*100):0),c=a[3],g=r>0?Math.round(c/r*100):o>0?100:0,h=t.filter(u=>(u.eventType==="vomit"||(u.notes||"").toLowerCase().includes("loose")||(u.notes||"").toLowerCase().includes("diarrhea"))&&new Date(u.timestamp)>=i);return p`
      <div
        class="back-btn"
        @click=${()=>this.dispatchEvent(new CustomEvent("dooty-navigate",{bubbles:!0,composed:!0,detail:"analytics"}))}
      >
        ‹ ${e?"숫자들":"Numbers"}
      </div>

      <div>
        <div class="section-tag">${e?"심층 분석":"Deep dive"}</div>
        <div class="page-title">${e?"장 건강 점수":"Gut score"}</div>
        <div class="page-sub">
          ${e?"형태, 빈도, 시간대를 종합한 14일 롤링 점수입니다.":"A rolling 14-day read on consistency, frequency and timing."}
        </div>
      </div>

      <!-- 14-Day Score Chart Card -->
      <div class="card-block">
        <div class="score-row">
          <div class="score-num">${o>0?g:"-"}</div>
          <div class="score-trend">${o>0?e?"14일 분석":"14-day rolling":e?"기록 대기 중":"No logs yet"}</div>
        </div>
        <div style="font-size: 12.5px; font-weight: 600; color: #6A6152;">
          ${r>0?e?`최근 14일 동안 ${r}건의 배변이 분석되었습니다.`:`${r} potty logs analyzed over the last 14 days.`:e?"배변을 기록하면 이상적인 형태(4단계) 비율이 산출됩니다.":"Log potty events to calculate consistency quality rating."}
        </div>
      </div>

      <!-- Consistency Spread -->
      <div class="card-block">
        <div style="font-size: 15px; font-weight: 800; color: #17140F;">
          ${e?"형태별 분포":"Consistency spread"}
        </div>
        <div style="font-size: 11.5px; font-weight: 600; color: #6A6152; margin: 2px 0 13px;">
          ${e?"7단계 척도. 4단계가 완벽한 이상형입니다.":"Seven-point scale. Four is textbook."}
        </div>
        <div>
          ${this.distNames.map((u,y)=>{const w=l[y],$=this.distCol[y];return p`
              <div class="spread-row">
                <div class="spread-num" style="background: ${$};">${y+1}</div>
                <div style="width: 66px; font-size: 11.5px; font-weight: 700; color: #6A6152; flex: none;">
                  ${u}
                </div>
                <div class="spread-track">
                  <div style="height: 100%; background: ${$}; width: ${Math.max(w>0?4:0,w)}%;"></div>
                </div>
                <div style="width: 32px; text-align: right; font-size: 11px; font-weight: 800; color: #6A6152; flex: none;">
                  ${w}%
                </div>
              </div>
            `})}
        </div>
      </div>

      <!-- Flagged Warning Card / Health Status -->
      ${h.length>0?p`
            <div class="flag-card">
              <div style="display: flex; align-items: center; gap: 8px;">
                <div
                  style="width: 22px; height: 22px; border-radius: 50%; border: 2.5px solid #17140F; background: #FF5A3C; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 800; color: #FFF;"
                >
                  !
                </div>
                <div style="font-size: 15px; font-weight: 800; color: #17140F;">
                  ${e?`주의 감지: 최근 ${h.length}건 이상 반응`:`Flagged: ${h.length} symptom events`}
                </div>
              </div>
              <div style="font-size: 12.5px; font-weight: 600; color: #7A3325; line-height: 1.5; margin-top: 8px;">
                ${h.map(u=>`${new Date(u.timestamp).toLocaleDateString()}: ${u.notes||u.eventType}`).join(" · ")}
              </div>
              <div
                class="flag-send-btn"
                @click=${()=>this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:e?"기록 준비 완료":"Summary ready",sub:e?"수의사 공유용 데이터가 생성되었습니다.":"Packaged for vet consultation."}}))}
              >
                ${e?"기록 수의사에게 내보내기":"Export health records for vet"}
              </div>
            </div>
          `:p`
            <div class="card-block" style="background: #EAF8F1;">
              <div style="display: flex; align-items: center; gap: 8px;">
                <div
                  style="width: 22px; height: 22px; border-radius: 50%; border: 2px solid #17140F; background: #1FC99B; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 800; color: #17140F;"
                >
                  ✓
                </div>
                <div style="font-size: 14px; font-weight: 800; color: #0A5A45;">
                  ${e?"이상 징후 없음":"No issues detected"}
                </div>
              </div>
              <div style="font-size: 12px; font-weight: 600; color: #0A5A45; margin-top: 4px;">
                ${e?"최근 14일 동안 등록된 구토나 소화 이상 기록이 없습니다.":"No vomiting or digestive symptoms reported in the last 14 days."}
              </div>
            </div>
          `}
    `}},Ee.styles=q`
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
  `,Ee);io=Ni([V("dooty-deep")],io);var Mi=function(n,e,t,o){var i=arguments.length,s=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,o);else for(var r=n.length-1;r>=0;r--)(a=n[r])&&(s=(i<3?a(s):i>3?a(e,t,s):a(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s},Ae;let so=(Ae=class extends I{render(){var h;const e=d.currentLocale==="ko",t=d.events||[],o=t.length;(h=d.currentPet)!=null&&h.id;const i=t.filter(u=>u.eventType==="poop"),s=t.filter(u=>u.eventType==="walk"),a=Array(24).fill(0);t.forEach(u=>{const y=new Date(u.timestamp);isNaN(y.getTime())||a[y.getHours()]++});let r=7,l=0;a.forEach((u,y)=>{u>l&&(l=u,r=y)});const c=l>0?`${r>12?r-12:r||12}:00 ${r>=12?"pm":"am"}`:e?"기록 없음":"No data yet",g=[{k:e?"총 배출량":"Total output",v:e?`${i.length}회`:`${i.length} poops`,sub:e?`총 ${o}건의 이벤트가 등록되었습니다.`:`${o} total logged events recorded so far.`,bg:"#FFCE2E",fg:"#17140F",label:"#7A5C00",shadow:"#FF5A3C",rot:"-1.2deg"},{k:e?"황금 시간대":"Your golden hour",v:c,sub:e?"가장 많은 활동이 기록된 주요 시간대입니다.":"Most frequent hour of daily activity.",bg:"#FFFBF2",fg:"#17140F",label:"#6A6152",shadow:"#2B5BE8",rot:"0.9deg"},{k:e?"산책 세션":"Walk sessions",v:e?`${s.length}회`:`${s.length} walks`,sub:e?"반려견과 함께한 야외 산책 기록입니다.":"Outdoor exercise recorded with your pet.",bg:"#1FC99B",fg:"#17140F",label:"#0A5A45",shadow:"#FFCE2E",rot:"-0.7deg"},{k:e?"기록 데이터":"Database Status",v:o>0?e?"실시간 동기화":"Synced Live":e?"대기 중":"Waiting",sub:e?"Cloudflare & Supabase 클라우드에 안전하게 보관됩니다.":"Securely saved to Cloudflare & Supabase.",bg:"#FF5A3C",fg:"#FFF",label:"#FFE3DC",shadow:"#FFCE2E",rot:"1.1deg"}];return p`
      <div
        class="back-btn"
        @click=${()=>this.dispatchEvent(new CustomEvent("dooty-navigate",{bubbles:!0,composed:!0,detail:"today"}))}
      >
        ‹ ${e?"오늘":"Today"}
      </div>

      <div>
        <div class="wrapped-header-tag">
          ${e?"Dooty 연말 결산":"Dooty Wrapped"}
        </div>
        <div class="wrapped-main-title">
          ${e?`2026년,
지금까지`:`2026,
so far`}
        </div>
      </div>

      <div class="cards-col">
        ${g.map(u=>p`
            <div
              class="wrapped-stat-card"
              style="background: ${u.bg}; box-shadow: 4px 4px 0 ${u.shadow}; transform: rotate(${u.rot});"
            >
              <div class="stat-label" style="color: ${u.label};">${u.k}</div>
              <div class="stat-val" style="color: ${u.fg};">${u.v}</div>
              <div class="stat-sub" style="color: ${u.label};">${u.sub}</div>
            </div>
          `)}
      </div>

      <div
        class="share-btn"
        @click=${()=>this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:"Card ready to share",sub:"Saved to photos."}}))}
      >
        ${e?"카드 공유하기":"Share the card"}
      </div>
    `}},Ae.styles=q`
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
  `,Ae);so=Mi([V("dooty-wrapped")],so);var Li=function(n,e,t,o){var i=arguments.length,s=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,o);else for(var r=n.length-1;r>=0;r--)(a=n[r])&&(s=(i<3?a(s):i>3?a(e,t,s):a(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s},Pe;let no=(Pe=class extends I{connectedCallback(){super.connectedCallback(),this.unsubscribe=d.subscribe(()=>this.requestUpdate())}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.unsubscribe)==null||e.call(this)}setLanguage(e){d.setLocale(e),e==="ko"?document.body.classList.add("lang-ko"):document.body.classList.remove("lang-ko")}handleExportCsv(){d.t.settings,d.exportEventsCsv(),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:d.currentLocale==="ko"?"CSV 내보내기 완료":"CSV Export Complete",sub:d.currentLocale==="ko"?"모든 기록이 다운로드되었습니다.":"All event logs saved to your device."}}))}handleSignOut(){d.signOut(),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:d.currentLocale==="ko"?"로그아웃되었습니다":"Signed out",sub:d.currentLocale==="ko"?"다음에 또 만나요!":"See you on the next walk!"}}))}render(){var c,g;const e=d.currentLocale==="ko",t=d.t.settings,o=d.currentUser,i=d.currentHousehold,s=(i==null?void 0:i.members)||[{id:"1",displayName:(o==null?void 0:o.displayName)||"Sam (you)",role:"owner",avatarUrl:d.userAvatar},{id:"2",displayName:"Priya",role:"member",avatarUrl:""},{id:"3",displayName:"Dan the walker",role:"member",avatarUrl:""}],a=((c=d.pets)==null?void 0:c.length)>0?d.pets:d.currentPet?[d.currentPet]:[{id:"p1",name:"Nacho",breed:"Beagle mix · 5 yrs · 14.2 kg",species:"dog",householdId:(i==null?void 0:i.id)||"1",avatarUrl:"",createdAt:new Date().toISOString()}],r=((g=d.events)==null?void 0:g.length)||1204,l=((o==null?void 0:o.displayName)||"Sam").split(" ").map(h=>h[0]).join("").toUpperCase().slice(0,2);return p`
      <div class="settings-container">
        <!-- Back button -->
        <div class="back-btn" @click=${()=>d.setActiveTab("today")}>
          ‹ ${t.back}
        </div>

        <!-- Page Title -->
        <div class="page-title">${t.title}</div>

        <!-- User Profile Card -->
        <div class="user-card">
          <div
            class="user-avatar"
            @click=${()=>d.openPhotoModal({target:"user",currentAvatar:d.userAvatar,title:"Pick Profile Photo"})}
          >
            ${d.userAvatar?p`<img src="${d.userAvatar}" alt="User Avatar" />`:p`${l}`}
          </div>
          <div style="flex: 1; min-width: 0;">
            <div style="font-size: 14px; font-weight: 800; color: #17140F;">
              ${(o==null?void 0:o.email)||"sam@jellyfish.dog"}
            </div>
            <div style="font-size: 11.5px; font-weight: 600; color: #6A6152; margin-top: 1px;">
              ${t.signedInPlan}
            </div>
          </div>
        </div>

        <!-- Language Selector -->
        <div>
          <div class="section-label">${t.language}</div>
          <div class="lang-row">
            <div
              class="lang-btn ${e?"":"active"}"
              @click=${()=>this.setLanguage("en")}
            >
              <div class="lang-dot"></div>
              ${t.english}
            </div>
            <div
              class="lang-btn ${e?"active":""}"
              @click=${()=>this.setLanguage("ko")}
            >
              <div class="lang-dot"></div>
              ${t.korean}
            </div>
          </div>
        </div>

        <!-- Analytics Timeframe Preference -->
        <div>
          <div class="section-label">${e?"기본 분석 기간":"Default Analytics Range"}</div>
          <div class="lang-row">
            <div
              class="lang-btn ${d.analyticsTimeRange==="7d"?"active":""}"
              @click=${()=>d.setAnalyticsTimeRange("7d")}
            >
              7D
            </div>
            <div
              class="lang-btn ${d.analyticsTimeRange==="30d"?"active":""}"
              @click=${()=>d.setAnalyticsTimeRange("30d")}
            >
              30D
            </div>
            <div
              class="lang-btn ${d.analyticsTimeRange==="1y"?"active":""}"
              @click=${()=>d.setAnalyticsTimeRange("1y")}
            >
              1Y
            </div>
            <div
              class="lang-btn ${d.analyticsTimeRange==="all"?"active":""}"
              @click=${()=>d.setAnalyticsTimeRange("all")}
            >
              ${e?"전체":"ALL"}
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
              ${t.household}
            </div>
            <div style="font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif); font-weight: 800; font-size: 20px; color: #17140F; letter-spacing: -0.6px; line-height: 1.15; margin-top: 1px;">
              ${(i==null?void 0:i.name)||"The Nacho Household"}
            </div>
            <div style="font-size: 11.5px; font-weight: 700; color: #7A5C00; margin-top: 1px;">
              ${t.householdCount(s.length,a.length)}
            </div>
          </div>
          <div
            class="btn-invite-badge"
            @click=${()=>d.setActiveTab("invite")}
          >
            ${t.invite}
          </div>
        </div>

        <!-- People Section -->
        <div>
          <div class="section-label">${t.people}</div>
          <div class="card-block">
            ${s.map((h,u)=>{const y=["#FFCE2E","#1FC99B","#BFD0FF","#FF9A3C"],w=(h.displayName||"Member")[0].toUpperCase(),$=Math.round(u===0?r*.75:r*.2);return p`
                <div class="list-row">
                  <div
                    class="member-avatar"
                    style="background: ${y[u%y.length]};"
                    @click=${()=>d.openPhotoModal({target:"member",targetId:h.id,currentAvatar:h.avatarUrl,title:`Pick Photo for ${h.displayName}`})}
                  >
                    ${h.avatarUrl?p`<img src="${h.avatarUrl}" alt="Avatar" />`:p`${w}`}
                  </div>
                  <div style="flex: 1; min-width: 0;">
                    <div style="font-size: 13.5px; font-weight: 800; color: #17140F;">
                      ${h.displayName}
                    </div>
                    <div style="font-size: 11.5px; font-weight: 600; color: #6A6152;">
                      ${h.role==="owner"?e?"소유자":"Owner":e?"가족 구성원":"Household"}
                    </div>
                  </div>
                  <div style="font-size: 11.5px; font-weight: 800; color: #9A9080; flex: none;">
                    ${$} ${t.logsUnit}
                  </div>
                </div>
              `})}
            <div
              class="add-action-link"
              @click=${()=>d.setActiveTab("invite")}
            >
              ${t.inviteSomeone}
            </div>
          </div>
        </div>

        <!-- Pets Section -->
        <div>
          <div class="section-label">${t.pets}</div>
          <div class="card-block">
            ${a.map(h=>p`
              <div
                class="list-row"
                style="cursor: pointer;"
                @click=${()=>d.setActiveTab("dog")}
              >
                <div
                  class="pet-avatar-circle"
                  @click=${u=>{u.stopPropagation(),d.openPhotoModal({target:"pet",targetId:h.id,currentAvatar:h.avatarUrl,title:`Pick Photo for ${h.name}`})}}
                >
                  ${h.avatarUrl?p`<img src="${h.avatarUrl}" alt="${h.name}" />`:p`dog<br />pic`}
                </div>
                <div style="flex: 1; min-width: 0;">
                  <div style="font-size: 13.5px; font-weight: 800; color: #17140F;">
                    ${h.name}
                  </div>
                  <div style="font-size: 11.5px; font-weight: 600; color: #6A6152;">
                    ${h.breed||(e?"비글 믹스 · 5살 · 14.2 kg":"Beagle mix · 5 yrs · 14.2 kg")}
                  </div>
                </div>
                <div style="font-size: 11.5px; font-weight: 800; color: #9A9080; flex: none;">
                  ${r} ${t.logsUnit}
                </div>
              </div>
            `)}
            <div
              class="add-action-link"
              @click=${()=>d.openPhotoModal({target:"pet",title:"Add New Pet Profile"})}
            >
              ${t.addPet}
            </div>
          </div>
        </div>

        <!-- Nudges Section -->
        <div>
          <div class="section-label">${t.nudges}</div>
          <div class="card-block">
            <div class="toggle-row">
              <div style="flex: 1; min-width: 0;">
                <div style="font-size: 13.5px; font-weight: 800; color: #17140F;">
                  ${t.walkReminders}
                </div>
                <div style="font-size: 11.5px; font-weight: 600; color: #6A6152; line-height: 1.35; margin-top: 1px;">
                  ${t.walkRemindersSub}
                </div>
              </div>
              <div
                class="switch-track ${d.nudges.push?"on":"off"}"
                @click=${()=>d.setNudgePreference("push",!d.nudges.push)}
              >
                <div class="switch-thumb"></div>
              </div>
            </div>

            <div class="toggle-row">
              <div style="flex: 1; min-width: 0;">
                <div style="font-size: 13.5px; font-weight: 800; color: #17140F;">
                  ${t.weeklyDigest}
                </div>
                <div style="font-size: 11.5px; font-weight: 600; color: #6A6152; line-height: 1.35; margin-top: 1px;">
                  ${t.weeklyDigestSub}
                </div>
              </div>
              <div
                class="switch-track ${d.nudges.weekly?"on":"off"}"
                @click=${()=>d.setNudgePreference("weekly",!d.nudges.weekly)}
              >
                <div class="switch-thumb"></div>
              </div>
            </div>

            <div class="toggle-row">
              <div style="flex: 1; min-width: 0;">
                <div style="font-size: 13.5px; font-weight: 800; color: #17140F;">
                  ${t.unusualGap}
                </div>
                <div style="font-size: 11.5px; font-weight: 600; color: #6A6152; line-height: 1.35; margin-top: 1px;">
                  ${t.unusualGapSub}
                </div>
              </div>
              <div
                class="switch-track ${d.nudges.gap?"on":"off"}"
                @click=${()=>d.setNudgePreference("gap",!d.nudges.gap)}
              >
                <div class="switch-thumb"></div>
              </div>
            </div>

            <div class="toggle-row">
              <div style="flex: 1; min-width: 0;">
                <div style="font-size: 13.5px; font-weight: 800; color: #17140F;">
                  ${t.vetShare}
                </div>
                <div style="font-size: 11.5px; font-weight: 600; color: #6A6152; line-height: 1.35; margin-top: 1px;">
                  ${t.vetShareSub}
                </div>
              </div>
              <div
                class="switch-track ${d.nudges.vet?"on":"off"}"
                @click=${()=>d.setNudgePreference("vet",!d.nudges.vet)}
              >
                <div class="switch-thumb"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Your Data Section -->
        <div>
          <div class="section-label">${t.yourData}</div>
          <div class="data-tiles-column">
            <div class="data-tile" @click=${()=>d.setActiveTab("import")}>
              <div class="tile-icon" style="background: #1FC99B;">↓</div>
              <div style="flex: 1; min-width: 0;">
                <div style="font-size: 13.5px; font-weight: 800; color: #17140F;">
                  ${t.importCsv}
                </div>
                <div style="font-size: 11.5px; font-weight: 600; color: #6A6152; margin-top: 1px; line-height: 1.35;">
                  ${t.importCsvSub}
                </div>
              </div>
            </div>

            <div class="data-tile" @click=${()=>this.handleExportCsv()}>
              <div class="tile-icon" style="background: #BFD0FF;">↑</div>
              <div style="flex: 1; min-width: 0;">
                <div style="font-size: 13.5px; font-weight: 800; color: #17140F;">
                  ${t.exportCsv}
                </div>
                <div style="font-size: 11.5px; font-weight: 600; color: #6A6152; margin-top: 1px; line-height: 1.35;">
                  ${t.exportCsvSub}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sign Out Button -->
        <div class="btn-signout" @click=${()=>this.handleSignOut()}>
          ${t.signOut}
        </div>

        <!-- Version Tag -->
        <div class="version-footer">
          ${t.version}
        </div>

        <div style="height: 40px;"></div>
      </div>
    `}},Pe.styles=q`
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
  `,Pe);no=Li([V("dooty-settings")],no);var nt=function(n,e,t,o){var i=arguments.length,s=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,o);else for(var r=n.length-1;r>=0;r--)(a=n[r])&&(s=(i<3?a(s):i>3?a(e,t,s):a(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s},Te;let qe=(Te=class extends I{constructor(){super(...arguments),this.selectedRole="Full member",this.currentCode="K7M4Q9",this.isGenerating=!1}connectedCallback(){super.connectedCallback(),this.unsubscribe=d.subscribe(()=>this.requestUpdate()),this.generateNewCode()}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.unsubscribe)==null||e.call(this)}async generateNewCode(){this.isGenerating=!0;try{const e=await d.createInvite(this.selectedRole);e&&(this.currentCode=e)}finally{this.isGenerating=!1}}handleCopy(){const e=d.t.invite;navigator.clipboard&&navigator.clipboard.writeText(this.currentCode),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:e.codeCopied,sub:e.codeCopiedSub(this.currentCode)}}))}handleShare(){var t;d.t.invite;const e=`Join my household "${((t=d.currentHousehold)==null?void 0:t.name)||"Dooty"}" with invite code: ${this.currentCode}`;navigator.share?navigator.share({title:"Dooty Invite",text:e,url:window.location.origin}).catch(()=>this.handleCopy()):this.handleCopy()}async handleRevoke(e){const t=d.t.invite;await d.revokeInvite(e),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:t.inviteRevoked,sub:t.inviteRevokedSub(e)}}))}render(){var s;const e=d.t.invite,t=((s=d.currentHousehold)==null?void 0:s.name)||"Household",o=(this.currentCode+"      ").slice(0,6).split(""),i=d.pendingInvites||[];return p`
      <div class="invite-container">
        <div class="back-btn" @click=${()=>d.setActiveTab("settings")}>
          ‹ ${e.back}
        </div>

        <div>
          <div class="section-label">${e.title}</div>
          <div class="headline">${t}</div>
          <div class="subline">${e.subtitle}</div>
        </div>

        <div>
          <div class="section-label" style="margin-bottom: 9px;">${e.theyJoinAs}</div>
          <div class="roles-row">
            <div
              class="role-card ${this.selectedRole==="Full member"?"active":""}"
              @click=${()=>{this.selectedRole="Full member",this.generateNewCode()}}
            >
              <div class="role-name">${e.roles.full.name}</div>
              <div class="role-sub">${e.roles.full.sub}</div>
            </div>

            <div
              class="role-card ${this.selectedRole==="Log only"?"active":""}"
              @click=${()=>{this.selectedRole="Log only",this.generateNewCode()}}
            >
              <div class="role-name">${e.roles.logOnly.name}</div>
              <div class="role-sub">${e.roles.logOnly.sub}</div>
            </div>
          </div>
        </div>

        <div class="yellow-card">
          <div class="yellow-card-label">${e.inviteCode}</div>
          <div class="code-grid">
            ${o.map(a=>p`
              <div class="code-char-box">${a.trim()}</div>
            `)}
          </div>
          <div class="expiry-note">${e.expiresIn7Days}</div>
          <div class="action-btns-row">
            <div class="btn-copy" @click=${()=>this.handleCopy()}>
              ${e.copyCode}
            </div>
            <div class="btn-share" @click=${()=>this.handleShare()}>
              ${e.shareLink}
            </div>
          </div>
        </div>

        <div>
          <div class="section-label" style="margin: 2px 0 9px 4px;">${e.pending}</div>
          <div class="pending-card">
            ${i.length===0?p`
                  <div style="padding: 14px 0; font-size: 13px; font-weight: 700; color: #9A9080; text-align: center;">
                    No pending invites
                  </div>
                `:i.map(a=>p`
                  <div class="pending-row">
                    <div class="pending-code-icon">${a.code}</div>
                    <div style="flex: 1; min-width: 0;">
                      <div style="font-size: 13.5px; font-weight: 800; color: #17140F;">${a.role}</div>
                      <div style="font-size: 11.5px; font-weight: 600; color: #6A6152;">${a.when}</div>
                    </div>
                    <div class="pending-revoke" @click=${()=>this.handleRevoke(a.code)}>
                      ${e.revoke}
                    </div>
                  </div>
                `)}
            <div class="pending-footer-note">
              ${e.pendingHelp}
            </div>
          </div>
        </div>

        <div style="height: 40px;"></div>
      </div>
    `}},Te.styles=q`
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
  `,Te);nt([b()],qe.prototype,"selectedRole",void 0);nt([b()],qe.prototype,"currentCode",void 0);nt([b()],qe.prototype,"isGenerating",void 0);qe=nt([V("dooty-invite")],qe);var ve=function(n,e,t,o){var i=arguments.length,s=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,o);else for(var r=n.length-1;r>=0;r--)(a=n[r])&&(s=(i<3?a(s):i>3?a(e,t,s):a(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s},De;let se=(De=class extends I{constructor(){super(...arguments),this.isImporting=!1,this.importProgress="",this.errorMessage="",this.successMessage="",this.isDragOver=!1}async processFile(e){this.errorMessage="",this.successMessage="";try{const t=await e.text(),o=ci(t,e.name);this.parsedResult=o}catch(t){this.errorMessage=t.message||"Failed to read and parse import file.",this.parsedResult=void 0}}async handleFileSelect(e){var i;const o=(i=e.target.files)==null?void 0:i[0];o&&await this.processFile(o)}handleDragOver(e){e.preventDefault(),this.isDragOver=!0}handleDragLeave(e){e.preventDefault(),this.isDragOver=!1}async handleDrop(e){var o,i;e.preventDefault(),this.isDragOver=!1;const t=(i=(o=e.dataTransfer)==null?void 0:o.files)==null?void 0:i[0];t&&await this.processFile(t)}async handleImport(){var e,t;if(!(!this.parsedResult||this.isImporting)){this.isImporting=!0,this.errorMessage="";try{const o=(e=d.currentHousehold)==null?void 0:e.id,i=(t=d.currentPet)==null?void 0:t.id;if(!o||!i)throw new Error("Please select or configure a household and pet before importing.");this.importProgress=`Converting ${this.parsedResult.summary.totalCount} events...`;const s=pi(this.parsedResult,o,i);this.importProgress=`Saving ${s.length} events to server...`;const a=await O.importEvents(s);this.successMessage=d.t.importer.success(a.importedCount),await d.refreshEvents(),this.parsedResult=void 0}catch(o){this.errorMessage=o.message||"Import failed on server."}finally{this.isImporting=!1,this.importProgress=""}}}render(){var i;const e=d.t.importer,t=d.currentLocale==="ko",o=(i=this.parsedResult)==null?void 0:i.summary;return p`
      <div
        class="back-btn"
        @click=${()=>d.setActiveTab("settings")}
      >
        ‹ ${t?"설정":"Settings"}
      </div>
      <h2 class="page-title">${e.title}</h2>
      <p class="page-sub">${e.subtitle}</p>

      <label
        class="dropzone ${this.isDragOver?"dragover":""}"
        @dragover=${s=>this.handleDragOver(s)}
        @dragleave=${s=>this.handleDragLeave(s)}
        @drop=${s=>this.handleDrop(s)}
      >
        <div style="font-size: 42px;">📂</div>
        <div style="font-family: var(--font-heading); font-weight: 800; font-size: 16px;">
          ${e.dropText}
        </div>
        <input
          type="file"
          accept=".csv, .json, text/csv, application/json"
          style="display: none;"
          @change=${s=>this.handleFileSelect(s)}
        />
        <div class="select-btn">
          ${e.selectFile}
        </div>
      </label>

      ${this.errorMessage?p`<div class="msg-error">${this.errorMessage}</div>`:""}
      ${this.successMessage?p`<div class="msg-success">${this.successMessage}</div>`:""}

      ${o?p`
            <div class="preview-card">
              <div class="preview-header">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span>📋 ${e.dryRunTitle}</span>
                  <span class="format-badge"
                    >${o.sourceType==="csv"?"📄 CSV Report":"📦 DogNotes JSON"}</span
                  >
                </div>
                <span style="font-size: 13px; font-weight: 800; color: var(--color-coral);"
                  >${o.totalCount.toLocaleString()} items</span
                >
              </div>

              <div style="font-size: 13px; font-weight: 700;">
                🐾 ${e.targetPet}: <span style="font-weight: 900;">${o.petName}</span>
              </div>

              <div style="font-size: 12px; color: var(--color-muted); font-weight: 600;">
                📅 ${e.dateSpan}: ${o.earliestDate.split("T")[0]} →
                ${o.latestDate.split("T")[0]}
              </div>

              <div>
                <div class="section-subtitle">👤 Logged by (Mapped)</div>
                <div class="breakdown-row">
                  ${Object.entries(o.countsByUser).map(([s,a])=>p`
                      <div class="user-chip">@${s}: ${a.toLocaleString()}</div>
                    `)}
                </div>
              </div>

              <div>
                <div class="section-subtitle">🏷️ Event Breakdown</div>
                <div class="breakdown-row">
                  ${Object.entries(o.countsByType).map(([s,a])=>p`
                      <div class="breakdown-chip">${s}: ${a.toLocaleString()}</div>
                    `)}
                </div>
              </div>

              <button
                class="import-btn"
                @click=${()=>this.handleImport()}
                ?disabled=${this.isImporting}
              >
                ${this.isImporting?this.importProgress||e.importing:`🚀 ${e.confirmImport} (${o.totalCount.toLocaleString()})`}
              </button>
            </div>
          `:""}
    `}},De.styles=q`
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
  `,De);ve([b()],se.prototype,"parsedResult",void 0);ve([b()],se.prototype,"isImporting",void 0);ve([b()],se.prototype,"importProgress",void 0);ve([b()],se.prototype,"errorMessage",void 0);ve([b()],se.prototype,"successMessage",void 0);ve([b()],se.prototype,"isDragOver",void 0);se=ve([V("dooty-importer")],se);var j=function(n,e,t,o){var i=arguments.length,s=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,o);else for(var r=n.length-1;r>=0;r--)(a=n[r])&&(s=(i<3?a(s):i>3?a(e,t,s):a(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s},ze;let N=(ze=class extends I{constructor(){super(...arguments),this.selectedType=null,this.cons=4,this.size="M",this.mood="Zoomy",this.selectedMed="Apoquel",this.selectedMedDose="16 mg with food",this.customMedName="",this.weightKg=14.2,this.walkMin="30 min",this.walkKm="2.3 km",this.vetReason="Annual check-up",this.symptom="Itch / Scratch",this.portion="1 cup",this.photoUrl="",this.notes="",this.locationName="Elm St & 4th",this.weatherText="18° drizzle",this.wasOpen=!1,this.consNames=["hard pellets","lumpy log","cracked log","textbook — the dream","soft blobs","mushy","liquid"],this.consNamesKo=["단단한 토끼똥","울퉁불퉁한 변","약간 갈라진 변","완벽한 황금변 (최고)","무른 덩어리변","형태 없는 묽은변","설사/수분성 액체"],this.typeDefs=[{id:"poop",name:"Poop",nameKo:"응가",tag:"P",sub:"the main event",subKo:"주요 배변 활동",c:"#FFCE2E"},{id:"pee",name:"Pee",nameKo:"쉬야",tag:"U",sub:"quick mark",subKo:"배뇨 영역 표시",c:"#BFD0FF"},{id:"vomit",name:"Vomit",nameKo:"구토",tag:"V",sub:"we hope not",subKo:"소화 이상/토",c:"#FF9A3C"},{id:"medicine",name:"Medicine",nameKo:"약/영양제",tag:"M",sub:"3 on schedule",subKo:"투약 일정 관리",c:"#1FC99B"},{id:"weight",name:"Weight",nameKo:"몸무게",tag:"KG",sub:"last 14.2 kg",subKo:"체중 변화 기록",c:"#2B5BE8"},{id:"walk",name:"Walk",nameKo:"산책",tag:"W",sub:"2 already today",subKo:"야외 활동 & 코스",c:"#9EC6E8"},{id:"vet",name:"Vet visit",nameKo:"병원 진료",tag:"D",sub:"appointments",subKo:"검진 및 진료 예약",c:"#FFD15C"},{id:"symptom",name:"Symptom",nameKo:"증상 메모",tag:"S",sub:"itch, limp, mood",subKo:"가려움, 절뚝임 등",c:"#FF5A3C"}],this.medOptions=[{name:"Apoquel",dose:"16 mg with food"},{name:"Joint chew",dose:"1 chew, evening"},{name:"Flea & tick",dose:"topical, weekly"}],this.walkOptions=[{min:"15 min",km:"1.1 km"},{min:"30 min",km:"2.3 km"},{min:"45 min",km:"3.4 km"},{min:"1 hr",km:"4.6 km"}],this.vetReasons=["Annual check-up","Vaccination booster","Loose stool consult","Dental scaling","Medication renewal","Follow-up exam"],this.symptomOptions=["Itch / Scratch","Limping / Joint","Lethargic / Low energy","Coughing / Reverse sneeze","Loss of Appetite","Skin redness / Rash","Ear shaking"],this.portionOptions=["0.5 cup","1.0 cup","1.5 cups","2.0 cups","Full bowl","Special treats"],this.moodOptions=["Zoomy","Regal","Guilty","Unbothered","Feral","Happy","Calm"]}connectedCallback(){super.connectedCallback(),this.unsubscribe=d.subscribe(()=>{d.loggerModalOpen?this.wasOpen?d.loggerEventType&&this.selectedType!==d.loggerEventType&&(this.selectedType=d.loggerEventType):(this.selectedType=d.loggerEventType||null,this.wasOpen=!0):(this.selectedType=null,this.wasOpen=!1),this.requestUpdate()})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.unsubscribe)==null||e.call(this)}handleSelectType(e){this.selectedType=e,d.loggerEventType=e}handleBackToTypes(){this.selectedType=null,d.loggerEventType=null}triggerPhotoUpload(){this.fileInput||(this.fileInput=document.createElement("input"),this.fileInput.type="file",this.fileInput.accept="image/*",this.fileInput.style.display="none",document.body.appendChild(this.fileInput),this.fileInput.addEventListener("change",e=>{var o;const t=(o=e.target.files)==null?void 0:o[0];if(t){const i=new FileReader;i.onload=s=>{var a;this.photoUrl=(a=s.target)==null?void 0:a.result},i.readAsDataURL(t)}})),this.fileInput.click()}async handleSave(){var l;const e=d.currentLocale==="ko",t=this.selectedType||"poop",o=((l=d.currentPet)==null?void 0:l.name)||(e?"반려견":"Pet");let i="",s=e?"기록 완료!":"Logged it!",a="";const r={timestamp:new Date().toISOString(),photoUrl:this.photoUrl||void 0,locationName:this.locationName,weather:this.weatherText};if(t==="poop")i=`Type ${this.cons} (${this.consNames[this.cons-1]}) · ${this.size} · ${this.mood}`,this.notes&&(i+=` · ${this.notes}`),r.consistency=this.cons,r.consistencyLabel=this.consNames[this.cons-1],r.size=this.size,r.mood=this.mood,s=e?"응가 기록 완료!":"Logged it!",a=e?`${o}의 배변 기록: ${this.cons}단계 · ${this.size}`:`${o}’s log: Type ${this.cons} · ${this.size}`;else if(t==="pee")i=`Pee · ${this.size} · ${this.mood}`,this.notes&&(i+=` · ${this.notes}`),r.size=this.size,r.mood=this.mood,s=e?"쉬야 완료!":"Marked!",a=e?"영역 표시 기록됨.":"Territory marked.";else if(t==="vomit")i=`Vomit · Type ${this.cons} · ${this.mood}`,this.notes&&(i+=` · ${this.notes}`),r.consistency=this.cons,r.consistencyLabel=this.consNames[this.cons-1],r.mood=this.mood,s=e?"구토 기록됨 & 주의 알림":"Logged and flagged",a=e?"24시간 내 반복 발생 시 알림을 드립니다.":"Two in 48h will alert you.";else if(t==="medicine"){const c=this.customMedName||this.selectedMed;i=`${c} (${this.selectedMedDose})`,this.notes&&(i+=` · ${this.notes}`),r.medication=c,r.dosage=this.selectedMedDose,s=e?"투약 기록 완료":`${c} given`,a=e?"다음 투약 일정에 반영됩니다.":"Next dose scheduled."}else t==="weight"?(i=`Weigh-in: ${this.weightKg.toFixed(1)} kg`,this.notes&&(i+=` · ${this.notes}`),r.weightKg=this.weightKg,s=e?"체중 저장됨":"Weigh-in saved",a=`${this.weightKg.toFixed(1)} kg · ${e?"체중 기록 완료":"recorded"}`):t==="walk"?(i=`Walk · ${this.walkMin} (${this.walkKm})`,this.notes&&(i+=` · ${this.notes}`),r.walkDuration=this.walkMin,r.walkDistance=this.walkKm,s=e?"산책 기록 완료":"Walk logged",a=`${this.walkMin} · ${this.walkKm} · ${e?"좋은 운동이었어요!":"Good effort."}`):t==="vet"?(i=`Vet visit: ${this.vetReason}`,this.notes&&(i+=` · ${this.notes}`),r.visitReason=this.vetReason,s=e?"진료 기록 추가":"Visit added",a=e?"진료 내역 및 알림이 설정되었습니다.":"Reminder set."):t==="symptom"?(i=`Symptom: ${this.symptom}`,this.notes&&(i+=` · ${this.notes}`),r.symptom=this.symptom,s=e?"증상 기록됨":"Symptom noted",a=e?"수의사 진료용 요약에 추가되었습니다.":"Added to vet-ready summary."):(t==="food"||t==="water")&&(i=`Meal: ${this.portion}`,this.notes&&(i+=` · ${this.notes}`),r.portion=this.portion,s=e?"식사 기록 완료":"Meal recorded",a=`${this.portion}`);await d.logEvent(t,i,r),this.close(),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:s,sub:a}}))}close(){this.selectedType=null,this.notes="",this.photoUrl="",this.customMedName="",d.closeLogger()}render(){var S,R,_,K;if(!d.loggerModalOpen)return null;const e=!this.selectedType,t=!!this.selectedType,o=d.currentLocale==="ko",i={poop:o?["배변 세부 기록","두 번 탭으로 간단하게"]:["A fine specimen","Two taps and you’re done"],pee:o?["영역 표시 업데이트","위치와 규모"]:["Territory update","Where and how long"],vomit:o?["소화 이상 기록","수의사 진료에 도움이 됩니다"]:["Sorry, buddy","Details help the vet"],medicine:o?["투약 완료","일정에 체크하세요"]:["Dose given","Tick it off the schedule"],weight:o?["체중 측정","주기적인 측정이 중요해요"]:["Weigh-in","Monthly is plenty"],vet:o?["병원 진료","진료 내용과 날짜"]:["Vet visit","Reason and date"],walk:o?["즐거운 야외 산책","얼마나 걸었나요?"]:["Out and about","How long were you gone?"],symptom:o?["이상 징후 기록","생생할 때 기록해두세요"]:["Something’s off","Describe it while it’s fresh"],food:o?["식사 및 사료","급여량과 종류"]:["Mealtime","Portion and food"]},s=this.selectedType?i[this.selectedType]||(o?["기록 세부사항","확인"]:["What happened?","Confirm details"]):o?["무슨 일이 있었나요?","종류를 선택하세요"]:["What happened?","Pick a type"],a=s[0],r=s[1],l=this.selectedType==="poop"||this.selectedType==="vomit",c=this.selectedType==="poop"||this.selectedType==="pee",g=this.selectedType==="weight",h=this.selectedType==="medicine",u=this.selectedType==="walk",y=this.selectedType==="vet",w=this.selectedType==="symptom",$=this.selectedType==="food"||this.selectedType==="water",k=this.selectedType==="poop"||this.selectedType==="pee"||this.selectedType==="vomit"||this.selectedType==="walk";return p`
      <div class="sheet-overlay">
        <div class="sheet-backdrop" @click=${()=>this.close()}></div>
        <div class="sheet-body">
          <div class="sheet-top">
            <div class="sheet-handle"></div>
            <div class="sheet-header-row">
              ${t?p`
                    <div class="sheet-back-icon" @click=${()=>this.handleBackToTypes()}>‹</div>
                  `:null}
              <div style="flex: 1; min-width: 0;">
                <div class="sheet-title">${a}</div>
                <div class="sheet-sub">${r}</div>
              </div>
              <div class="sheet-close-btn" @click=${()=>this.close()}>✕</div>
            </div>
          </div>

          <div class="sheet-scroll-content">
            ${e?p`
                  <div class="type-grid">
                    ${this.typeDefs.map(v=>p`
                        <div
                          class="type-card"
                          @click=${()=>this.handleSelectType(v.id)}
                        >
                          <div class="type-icon" style="background: ${v.c};">
                            ${v.tag}
                          </div>
                          <div>
                            <div class="type-card-name">${o?v.nameKo:v.name}</div>
                            <div class="type-card-sub">${o?v.subKo:v.sub}</div>
                          </div>
                        </div>
                      `)}
                  </div>
                `:p`
                  <div class="form-col">
                    <!-- Top Pill Row: Time & Status/Weather -->
                    <div class="pill-row">
                      <div class="pill-info">
                        <div class="pill-label">${o?"시간":"Time"}</div>
                        <div class="pill-val">
                          ${new Date().toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}).toLowerCase()}
                        </div>
                      </div>
                      <div class="pill-info">
                        <div class="pill-label">${o?"상태 / 날씨":"Weather / GPS"}</div>
                        <div class="pill-val">${this.weatherText}</div>
                      </div>
                    </div>

                    <!-- 1. Consistency (Poop / Vomit) -->
                    ${l?p`
                          <div>
                            <div class="section-lbl">${o?"변 상태 / 형태":"Consistency"}</div>
                            <div class="section-sub">
                              Type ${this.cons} — ${o?this.consNamesKo[this.cons-1]:this.consNames[this.cons-1]}
                            </div>
                            <div class="cons-row">
                              ${[1,2,3,4,5,6,7].map(v=>p`
                                  <div
                                    class="cons-opt ${this.cons===v?"active":""}"
                                    @click=${()=>this.cons=v}
                                  >
                                    <div
                                      style="font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif); font-weight: 800; font-size: 15px; color: #17140F;"
                                    >
                                      ${v}
                                    </div>
                                    <div
                                      style="width: ${5+v*2.4}px; height: 5px; border-radius: 5px; background: #17140F;"
                                    ></div>
                                  </div>
                                `)}
                            </div>
                          </div>
                        `:null}

                    <!-- 2. Size (Poop / Pee) -->
                    ${c?p`
                          <div>
                            <div class="section-lbl" style="margin-bottom: 10px;">
                              ${o?"크기 / 양":"Size"}
                            </div>
                            <div class="size-row">
                              ${["S","M","L","XL"].map(v=>p`
                                  <div
                                    class="size-btn ${this.size===v?"active":""}"
                                    @click=${()=>this.size=v}
                                  >
                                    ${v}
                                  </div>
                                `)}
                            </div>
                          </div>
                        `:null}

                    <!-- 3. Weight Stepper (Weight) -->
                    ${g?p`
                          <div>
                            <div class="section-lbl" style="margin-bottom: 10px;">
                              ${o?"체중 측정":"Body Weight"}
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
                                  KG · ${o?"최근":"LAST"} 14.2 KG
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
                    ${h?p`
                          <div>
                            <div class="section-lbl" style="margin-bottom: 10px;">
                              ${o?"복용 약품":"Which one"}
                            </div>
                            <div class="med-list">
                              ${this.medOptions.map(v=>p`
                                  <div
                                    class="med-item ${this.selectedMed===v.name?"active":""}"
                                    @click=${()=>{this.selectedMed=v.name,this.selectedMedDose=v.dose}}
                                  >
                                    <div class="med-dot"></div>
                                    <div class="med-name">${v.name}</div>
                                    <div class="med-dose">${v.dose}</div>
                                  </div>
                                `)}
                            </div>
                          </div>
                        `:null}

                    <!-- 5. Walk Duration (Walk) -->
                    ${u?p`
                          <div>
                            <div class="section-lbl" style="margin-bottom: 10px;">
                              ${o?"산책 시간 & 거리":"How long"}
                            </div>
                            <div class="walk-row">
                              ${this.walkOptions.map(v=>p`
                                  <div
                                    class="walk-btn ${this.walkMin===v.min?"active":""}"
                                    @click=${()=>{this.walkMin=v.min,this.walkKm=v.km}}
                                  >
                                    <div class="walk-min">${v.min}</div>
                                    <div class="walk-km">${v.km}</div>
                                  </div>
                                `)}
                            </div>
                          </div>
                        `:null}

                    <!-- 6. Vet Visit Reason (Vet) -->
                    ${y?p`
                          <div>
                            <div class="section-lbl" style="margin-bottom: 10px;">
                              ${o?"진료 내용":"Visit Reason"}
                            </div>
                            <div class="wrap-pill-row">
                              ${this.vetReasons.map(v=>p`
                                  <div
                                    class="mood-pill ${this.vetReason===v?"active":""}"
                                    @click=${()=>this.vetReason=v}
                                  >
                                    ${v}
                                  </div>
                                `)}
                            </div>
                          </div>
                        `:null}

                    <!-- 7. Symptom Tags (Symptom) -->
                    ${w?p`
                          <div>
                            <div class="section-lbl" style="margin-bottom: 10px;">
                              ${o?"관찰된 증상":"Symptom observed"}
                            </div>
                            <div class="wrap-pill-row">
                              ${this.symptomOptions.map(v=>p`
                                  <div
                                    class="mood-pill ${this.symptom===v?"active":""}"
                                    @click=${()=>this.symptom=v}
                                  >
                                    ${v}
                                  </div>
                                `)}
                            </div>
                          </div>
                        `:null}

                    <!-- 8. Food Portion (Food/Water) -->
                    ${$?p`
                          <div>
                            <div class="section-lbl" style="margin-bottom: 10px;">
                              ${o?"급여량":"Portion"}
                            </div>
                            <div class="wrap-pill-row">
                              ${this.portionOptions.map(v=>p`
                                  <div
                                    class="mood-pill ${this.portion===v?"active":""}"
                                    @click=${()=>this.portion=v}
                                  >
                                    ${v}
                                  </div>
                                `)}
                            </div>
                          </div>
                        `:null}

                    <!-- 9. Mood on Delivery (General / Potty) -->
                    ${k?p`
                          <div>
                            <div class="section-lbl" style="margin-bottom: 10px;">
                              ${o?"기분 & 태도":"Mood on delivery"}
                            </div>
                            <div class="wrap-pill-row">
                              ${this.moodOptions.map(v=>p`
                                  <div
                                    class="mood-pill ${this.mood===v?"active":""}"
                                    @click=${()=>this.mood=v}
                                  >
                                    ${v}
                                  </div>
                                `)}
                            </div>
                          </div>
                        `:null}

                    <!-- Location & Logged By -->
                    <div class="pill-row">
                      <div class="pill-info">
                        <div class="pill-label">${o?"위치":"Location"}</div>
                        <div class="pill-val">${this.locationName}</div>
                        <div class="pill-sub">${o?"GPS 핀 연결됨":"pin dropped"}</div>
                      </div>
                      <div class="pill-info">
                        <div class="pill-label">${o?"기록자":"Logged by"}</div>
                        <div class="pill-val">
                          ${((S=d.currentUser)==null?void 0:S.displayName)||((K=(_=(R=d.currentHousehold)==null?void 0:R.members)==null?void 0:_[0])==null?void 0:K.displayName)||"Me"}
                        </div>
                        <div class="pill-sub">${o?"가족 구성원":"tap to change"}</div>
                      </div>
                    </div>

                    <!-- Photo & Notes -->
                    <div class="photo-notes-row">
                      <div class="photo-box" @click=${()=>this.triggerPhotoUpload()}>
                        ${this.photoUrl?p`<img src="${this.photoUrl}" alt="Photo" />`:p`
                              <div class="photo-plus">+</div>
                              <div class="photo-lbl">${o?"사진":"photo"}</div>
                            `}
                      </div>
                      <div class="notes-box">
                        <div class="pill-label">${o?"메모":"Notes"}</div>
                        <textarea
                          style="border: none; background: transparent; font-size: 13px; font-weight: 600; color: #17140F; margin-top: 5px; line-height: 1.4; resize: none; height: 100%; font-family: inherit; outline: none;"
                          placeholder="${o?"수의사에게 전할 참고사항 입력...":"Anything the vet would want to know…"}"
                          .value=${this.notes}
                          @input=${v=>this.notes=v.target.value}
                        ></textarea>
                      </div>
                    </div>

                    <div style="height: 6px;"></div>
                  </div>
                `}
          </div>

          ${t?p`
                <div class="sheet-bottom">
                  <div class="log-submit-btn" @click=${()=>this.handleSave()}>
                    ${o?"기록하기!":"Log it!"}
                  </div>
                </div>
              `:null}
        </div>
      </div>
    `}},ze.styles=q`
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

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `,ze);j([b()],N.prototype,"selectedType",void 0);j([b()],N.prototype,"cons",void 0);j([b()],N.prototype,"size",void 0);j([b()],N.prototype,"mood",void 0);j([b()],N.prototype,"selectedMed",void 0);j([b()],N.prototype,"selectedMedDose",void 0);j([b()],N.prototype,"customMedName",void 0);j([b()],N.prototype,"weightKg",void 0);j([b()],N.prototype,"walkMin",void 0);j([b()],N.prototype,"walkKm",void 0);j([b()],N.prototype,"vetReason",void 0);j([b()],N.prototype,"symptom",void 0);j([b()],N.prototype,"portion",void 0);j([b()],N.prototype,"photoUrl",void 0);j([b()],N.prototype,"notes",void 0);j([b()],N.prototype,"locationName",void 0);j([b()],N.prototype,"weatherText",void 0);N=j([V("dooty-sheet")],N);var me=function(n,e,t,o){var i=arguments.length,s=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,o);else for(var r=n.length-1;r>=0;r--)(a=n[r])&&(s=(i<3?a(s):i>3?a(e,t,s):a(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s},_e;let ne=(_e=class extends I{constructor(){super(...arguments),this.previewUrl="",this.urlInput="",this.activeMode="upload",this.isProcessing=!1,this.errorMessage="",this.petPresets=[{emoji:"🐶",bg:"#FFE485",label:"Golden"},{emoji:"🐕",bg:"#FF9E79",label:"Shiba"},{emoji:"🦮",bg:"#B8E1D9",label:"Lab"},{emoji:"🐩",bg:"#EAD5E6",label:"Poodle"},{emoji:"🐱",bg:"#FED7AA",label:"Cat"},{emoji:"🐈‍⬛",bg:"#CBD5E1",label:"Black Cat"},{emoji:"🐾",bg:"#D1FAE5",label:"Paws"},{emoji:"🦴",bg:"#FDE68A",label:"Bone"},{emoji:"🦊",bg:"#FDBA74",label:"Fox"},{emoji:"🐻",bg:"#E2E8F0",label:"Bear"},{emoji:"🐰",bg:"#FCE7F3",label:"Bunny"},{emoji:"🦁",bg:"#FEF08A",label:"Lion"}],this.userPresets=[{emoji:"🧑‍💻",bg:"#FFE485",label:"Dev"},{emoji:"👩‍🦰",bg:"#FF9E79",label:"Redhead"},{emoji:"👨‍🦱",bg:"#B8E1D9",label:"Curly"},{emoji:"🧔",bg:"#EAD5E6",label:"Beard"},{emoji:"👩‍🎨",bg:"#FED7AA",label:"Artist"},{emoji:"🧑‍🌾",bg:"#D1FAE5",label:"Gardener"},{emoji:"🦸",bg:"#FDE68A",label:"Hero"},{emoji:"🕶️",bg:"#CBD5E1",label:"Cool"},{emoji:"⭐",bg:"#FEF08A",label:"Star"},{emoji:"👑",bg:"#FCE7F3",label:"Crown"}]}connectedCallback(){super.connectedCallback(),this.unsubscribe=d.subscribe(()=>{d.photoModalOpen&&!this.previewUrl&&(this.previewUrl=d.photoModalCurrentAvatar||""),this.requestUpdate()})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.unsubscribe)==null||e.call(this)}handleClose(){this.previewUrl="",this.urlInput="",this.errorMessage="",d.closePhotoModal()}triggerFileInput(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("#fileInput");e==null||e.click()}async handleFileSelect(e){var i;const o=(i=e.target.files)==null?void 0:i[0];if(o){if(!o.type.startsWith("image/")){this.errorMessage="Please select a valid image file (PNG, JPG, WEBP).";return}this.isProcessing=!0,this.errorMessage="";try{const s=await this.resizeImage(o,400,400);this.previewUrl=s}catch(s){this.errorMessage="Failed to process image: "+(s.message||"Unknown error")}finally{this.isProcessing=!1}}}resizeImage(e,t,o){return new Promise((i,s)=>{const a=new FileReader;a.onload=r=>{var c;const l=new Image;l.onload=()=>{let g=l.width,h=l.height;const u=Math.min(g,h),y=(g-u)/2,w=(h-u)/2,$=document.createElement("canvas"),k=Math.min(t,u);$.width=k,$.height=k;const S=$.getContext("2d");if(!S){s(new Error("Canvas context not available"));return}S.drawImage(l,y,w,u,u,0,0,k,k),i($.toDataURL("image/jpeg",.88))},l.onerror=()=>s(new Error("Image failed to load")),l.src=(c=r.target)==null?void 0:c.result},a.onerror=()=>s(new Error("File reader failed")),a.readAsDataURL(e)})}handleSelectPreset(e){const t=`data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="${encodeURIComponent(e.bg)}"/><text x="50" y="65" font-size="54" text-anchor="middle">${e.emoji}</text></svg>`;this.previewUrl=t,this.errorMessage=""}handleApplyUrl(){if(!this.urlInput.trim()){this.errorMessage="Please enter an image URL.";return}this.previewUrl=this.urlInput.trim(),this.errorMessage=""}handleRemovePhoto(){this.previewUrl="",this.urlInput="",this.errorMessage=""}async handleSave(){var s;const e=d.currentLocale==="ko",t=d.photoModalTarget,o=d.photoModalTargetId,i=this.previewUrl;if(t==="pet"){const a=o||((s=d.currentPet)==null?void 0:s.id);a&&await d.updatePetAvatar(a,i)}else t==="user"?await d.updateUserAvatar(i):t==="member"&&o&&await d.updateMemberAvatar(o,i);this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:e?"사진 업데이트됨":"Photo Updated",subtitle:e?"프로필 사진이 저장되었습니다.":"Avatar successfully updated.",badge:"📸"}})),this.handleClose()}render(){if(!d.photoModalOpen)return p``;const e=d.currentLocale==="ko",t=d.photoModalTarget,o=t==="pet"?this.petPresets:this.userPresets,i=d.photoModalTitle||(t==="pet"?e?"반려동물 사진 변경":"Change Pet Photo":e?"프로필 사진 변경":"Change Profile Photo");return p`
      <div class="modal-overlay" @click=${s=>s.target===s.currentTarget&&this.handleClose()}>
        <div class="modal-card">
          <!-- Header -->
          <div class="modal-header">
            <div class="modal-title">${i}</div>
            <button class="close-btn" @click=${this.handleClose}>✕</button>
          </div>

          <!-- Body -->
          <div class="modal-body">
            <!-- Avatar Preview -->
            <div class="preview-container">
              <div class="avatar-preview-wrapper">
                ${this.previewUrl?p`<img src="${this.previewUrl}" class="avatar-preview-img" alt="Preview" />`:p`<div class="avatar-preview-emoji">${t==="pet"?"🐶":"👤"}</div>`}
              </div>
              <div class="preview-label">${e?"현재 미리보기":"Current Preview"}</div>
            </div>

            <!-- Error Banner -->
            ${this.errorMessage?p`<div class="error-msg">${this.errorMessage}</div>`:""}

            <!-- Mode Selector Tabs -->
            <div class="mode-tabs">
              <div
                class="mode-tab ${this.activeMode==="upload"?"active":""}"
                @click=${()=>this.activeMode="upload"}
              >
                📷 ${e?"업로드":"Upload"}
              </div>
              <div
                class="mode-tab ${this.activeMode==="preset"?"active":""}"
                @click=${()=>this.activeMode="preset"}
              >
                🎨 ${e?"이모지":"Presets"}
              </div>
              <div
                class="mode-tab ${this.activeMode==="url"?"active":""}"
                @click=${()=>this.activeMode="url"}
              >
                🔗 ${e?"링크":"URL"}
              </div>
            </div>

            <!-- Mode Content: Upload -->
            ${this.activeMode==="upload"?p`
                  <div class="upload-dropzone" @click=${this.triggerFileInput}>
                    <div class="dropzone-icon">📷</div>
                    <div class="dropzone-text">
                      ${e?"사진 파일 선택 또는 촬영":"Choose photo or take picture"}
                    </div>
                    <div class="dropzone-subtext">
                      ${e?"JPG, PNG, WEBP (자동 최적화)":"JPG, PNG, WEBP (auto-cropped)"}
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
            ${this.activeMode==="preset"?p`
                  <div class="preset-grid">
                    ${o.map(s=>p`
                        <div
                          class="preset-item"
                          style="background: ${s.bg};"
                          title="${s.label}"
                          @click=${()=>this.handleSelectPreset(s)}
                        >
                          ${s.emoji}
                        </div>
                      `)}
                  </div>
                `:""}

            <!-- Mode Content: URL -->
            ${this.activeMode==="url"?p`
                  <div class="url-input-container">
                    <input
                      type="url"
                      class="url-text-input"
                      placeholder="${"https://example.com/photo.jpg"}"
                      .value=${this.urlInput}
                      @input=${s=>this.urlInput=s.target.value}
                    />
                    <button class="url-preview-btn" @click=${this.handleApplyUrl}>
                      ${e?"미리보기 적용":"Preview URL"}
                    </button>
                  </div>
                `:""}

            <!-- Action Buttons -->
            <div class="modal-actions">
              <button class="btn-clear" @click=${this.handleRemovePhoto}>
                ${e?"제거":"Remove"}
              </button>
              <button class="btn-save" ?disabled=${this.isProcessing} @click=${this.handleSave}>
                ${this.isProcessing?e?"처리 중...":"Processing...":e?"저장하기":"Save Photo"}
              </button>
            </div>
          </div>
        </div>
      </div>
    `}},_e.styles=q`
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
      max-width: 420px;
      max-height: 90vh;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      animation: popIn 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
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
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    /* Preview Section */
    .preview-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 14px;
      background: #FAF7EE;
      border: 2px dashed #D6CEBE;
      border-radius: 18px;
    }

    .avatar-preview-wrapper {
      width: 100px;
      height: 100px;
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
      font-size: 48px;
      line-height: 1;
    }

    .preview-label {
      font-size: 11px;
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
      padding: 24px 16px;
      text-align: center;
      background: #FFFFFF;
      cursor: pointer;
      transition: background 0.15s, transform 0.1s;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }

    .upload-dropzone:hover {
      background: #FFF9E6;
    }

    .upload-dropzone:active {
      transform: scale(0.99);
    }

    .dropzone-icon {
      font-size: 32px;
    }

    .dropzone-text {
      font-size: 13.5px;
      font-weight: 800;
      color: #17140F;
    }

    .dropzone-subtext {
      font-size: 11px;
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
      gap: 10px;
      max-height: 180px;
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
      font-size: 26px;
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
      padding: 12px 14px;
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
      margin-top: 6px;
    }

    .btn-save {
      flex: 2;
      background: #FFCE2E;
      color: #17140F;
      border: 3px solid #17140F;
      border-radius: 14px;
      padding: 12px;
      font-family: var(--font-heading, sans-serif);
      font-size: 15px;
      font-weight: 800;
      cursor: pointer;
      box-shadow: 3px 3px 0 #17140F;
      text-align: center;
      transition: transform 0.1s;
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
      border-radius: 14px;
      padding: 12px;
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
  `,_e);me([b()],ne.prototype,"unsubscribe",void 0);me([b()],ne.prototype,"previewUrl",void 0);me([b()],ne.prototype,"urlInput",void 0);me([b()],ne.prototype,"activeMode",void 0);me([b()],ne.prototype,"isProcessing",void 0);me([b()],ne.prototype,"errorMessage",void 0);ne=me([V("dooty-photo-modal")],ne);var W=function(n,e,t,o){var i=arguments.length,s=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,o);else for(var r=n.length-1;r>=0;r--)(a=n[r])&&(s=(i<3?a(s):i>3?a(e,t,s):a(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s},Ne;let B=(Ne=class extends I{constructor(){super(...arguments),this.view="signin",this.email="",this.password="",this.showPassword=!1,this.displayName="",this.userAvatar="",this.dogName="",this.householdName="",this.dogAvatar="",this.setupSize="M",this.trackingPrefs={poop:!0,pee:!0,vomit:!0,meds:!0,weight:!0,walk:!0,vet:!1,symptom:!1},this.joinCode="",this.joinRole="Dan the walker",this.errorMessage="",this.isSubmitting=!1}connectedCallback(){super.connectedCallback(),this.unsubscribe=d.subscribe(()=>{this.view=d.authView,this.requestUpdate()})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.unsubscribe)==null||e.call(this)}setView(e){this.view=e,d.setAuthView(e),this.errorMessage=""}calculateStrength(e){const t=d.t.auth.signupStep1;return!e||e.length<6?{label:t.weak,width:"25%",color:"#FF5A3C"}:e.length>=10&&/[A-Z]/.test(e)&&/[0-9]/.test(e)?{label:t.strong,width:"100%",color:"#1FC99B"}:e.length>=8?{label:t.good,width:"65%",color:"#FFCE2E"}:{label:t.weak,width:"35%",color:"#FF5A3C"}}async handleLogin(e){var o;e&&e.preventDefault(),this.errorMessage="";const t=d.t.auth.errors;if(!this.email.trim()){this.errorMessage=t.emailRequired;return}if(!this.password){this.errorMessage=t.passwordRequired;return}this.isSubmitting=!0;try{await d.signIn({email:this.email.trim(),password:this.password}),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:d.currentLocale==="ko"?"환영합니다! 👋":"Welcome back! 👋",sub:((o=d.currentHousehold)==null?void 0:o.name)||"Household"}}))}catch(i){this.errorMessage=i.message||t.logInFailed}finally{this.isSubmitting=!1}}handleGoToStep2(e){e&&e.preventDefault(),this.errorMessage="";const t=d.t.auth.errors;if(!this.displayName.trim()){this.errorMessage=t.yourNameRequired;return}if(!this.email.trim()){this.errorMessage=t.emailRequired;return}if(!this.password||this.password.length<6){this.errorMessage=t.passwordTooShort;return}this.setView("dogsetup")}async handleFinishSetup(e){e&&e.preventDefault(),this.errorMessage="";const t=d.t.auth.errors;if(!this.dogName.trim()){this.errorMessage=t.petNameRequired;return}const o=this.householdName.trim()||`${this.dogName.trim()} Household`;this.isSubmitting=!0;try{await d.signUp({email:this.email.trim(),password:this.password,displayName:this.displayName.trim(),mode:"create",householdName:o,pet:{name:this.dogName.trim(),species:"dog",size:this.setupSize,avatarUrl:this.dogAvatar},trackingPreferences:this.trackingPrefs}),Object.entries(this.trackingPrefs).forEach(([i,s])=>{d.setTrackingPreference(i,s)}),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:d.currentLocale==="ko"?"준비 완료! 🎉":"All set! 🎉",sub:d.currentLocale==="ko"?"다음 번 산책 때 주황색 버튼을 눌러보세요.":"Tap the orange button the next time he goes."}}))}catch(i){this.errorMessage=i.message||t.signUpFailed}finally{this.isSubmitting=!1}}handleGoJoinDetails(e){e&&e.preventDefault(),this.errorMessage="";const t=d.t.auth.errors;if(!this.joinCode.trim()||this.joinCode.trim().length<4){this.errorMessage=t.inviteCodeRequired;return}this.setView("joindetails")}async handleJoinSubmit(e){var o;e&&e.preventDefault(),this.errorMessage="";const t=d.t.auth.errors;if(!this.displayName.trim()){this.errorMessage=t.yourNameRequired;return}if(!this.email.trim()){this.errorMessage=t.emailRequired;return}if(!this.password||this.password.length<6){this.errorMessage=t.passwordTooShort;return}this.isSubmitting=!0;try{await d.signUp({email:this.email.trim(),password:this.password,displayName:this.displayName.trim(),mode:"join",inviteCode:this.joinCode.trim().toUpperCase(),role:this.joinRole}),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:d.currentLocale==="ko"?`${this.joinRole}님, 환영합니다! 🎉`:`You're in, ${this.joinRole}! 🎉`,sub:((o=d.currentHousehold)==null?void 0:o.name)||"Household"}}))}catch(i){this.errorMessage=i.message||t.joinFailed}finally{this.isSubmitting=!1}}render(){const e=d.t.auth;if(this.view==="signin")return p`
        <div class="view-signin">
          <div class="logo-hero">
            <div class="brand-circle">
              <div class="p1"></div>
              <div class="p2"></div>
              <div class="p3"></div>
            </div>
            <div class="brand-title">${e.welcomeTitle}</div>
            <div class="brand-subtitle">${e.welcomeSubtitle}</div>
          </div>

          ${this.errorMessage?p`<div class="error-banner">⚠️ ${this.errorMessage}</div>`:null}

          <form class="card" @submit=${t=>this.handleLogin(t)}>
            <div>
              <label class="field-label">${e.emailLabel}</label>
              <input
                type="email"
                class="input-box"
                placeholder="${e.emailPlaceholder}"
                .value=${this.email}
                @input=${t=>this.email=t.target.value}
                required
              />
            </div>

            <div>
              <label class="field-label">${e.passwordLabel}</label>
              <div class="password-wrapper">
                <input
                  type="${this.showPassword?"text":"password"}"
                  class="password-input"
                  placeholder="${e.passwordPlaceholder}"
                  .value=${this.password}
                  @input=${t=>this.password=t.target.value}
                  required
                />
                <span
                  class="show-hide-btn"
                  @click=${()=>this.showPassword=!this.showPassword}
                >
                  ${this.showPassword?e.hide:e.show}
                </span>
              </div>
            </div>

            <button
              type="submit"
              class="btn-coral"
              ?disabled=${this.isSubmitting}
            >
              ${this.isSubmitting?p`<span class="btn-spinner"></span> ${d.currentLocale==="ko"?"로그인 중...":"Logging in..."}`:e.logInBtn}
            </button>

            <div
              style="text-align: center; font-size: 12.5px; font-weight: 800; color: #6A6152; cursor: pointer; padding: 3px;"
              @click=${()=>this.handleLogin()}
            >
              ${e.forgotPassword}
            </div>
          </form>

          <div class="divider-row">
            <div class="divider-line"></div>
            <div class="divider-text">${e.or}</div>
            <div class="divider-line"></div>
          </div>

          <div class="provider-btn" @click=${()=>this.handleLogin()}>
            <div class="provider-dot"></div>
            <div class="provider-text">${e.googleBtn}</div>
          </div>

          <div style="text-align: center; font-size: 13px; font-weight: 700; color: #7A5C00;">
            ${e.newHere}
            <span
              style="color: #17140F; font-weight: 800; text-decoration: underline; cursor: pointer;"
              @click=${()=>this.setView("signup")}
            >
              ${e.makeAccount}
            </span>
          </div>

          <div
            style="text-align: center; font-size: 13px; font-weight: 800; color: #17140F; text-decoration: underline; cursor: pointer; padding: 2px;"
            @click=${()=>this.setView("join")}
          >
            ${e.gotInviteCode}
          </div>
        </div>
      `;if(this.view==="signup"){const t=e.signupStep1,o=this.calculateStrength(this.password);return p`
        <div class="view-signup">
          <div class="back-btn" @click=${()=>this.setView("signin")}>
            ‹ ${t.back}
          </div>

          <div class="step-bar-row">
            <div class="step-pill" style="background: #FFCE2E;"></div>
            <div class="step-pill" style="background: #FFF;"></div>
            <div class="step-label">${t.stepCount}</div>
          </div>

          <div>
            <div class="section-headline">${t.title}</div>
            <div class="section-subtext">${t.subtitle}</div>
          </div>

          ${this.errorMessage?p`<div class="error-banner">⚠️ ${this.errorMessage}</div>`:null}

          <form class="card" @submit=${i=>this.handleGoToStep2(i)}>
            <div>
              <label class="field-label">${t.yourName}</label>
              <input
                type="text"
                class="input-box"
                placeholder="${t.yourNamePlaceholder}"
                .value=${this.displayName}
                @input=${i=>this.displayName=i.target.value}
                required
              />
            </div>

            <div>
              <label class="field-label">${t.email}</label>
              <input
                type="email"
                class="input-box"
                placeholder="${t.emailPlaceholder}"
                .value=${this.email}
                @input=${i=>this.email=i.target.value}
                required
              />
            </div>

            <div>
              <label class="field-label">${t.password}</label>
              <div class="password-wrapper">
                <input
                  type="${this.showPassword?"text":"password"}"
                  class="password-input"
                  placeholder="${t.passwordPlaceholder}"
                  .value=${this.password}
                  @input=${i=>this.password=i.target.value}
                  required
                />
                <span
                  class="show-hide-btn"
                  @click=${()=>this.showPassword=!this.showPassword}
                >
                  ${this.showPassword?e.hide:e.show}
                </span>
              </div>
              <div class="strength-row">
                <div class="strength-track">
                  <div
                    class="strength-fill"
                    style="width: ${o.width}; background: ${o.color};"
                  ></div>
                </div>
                <div class="strength-text">${o.label}</div>
              </div>
            </div>

            <button type="submit" class="btn-coral" style="margin-top: 4px;">
              ${t.nextTheDog}
            </button>
          </form>

          <div style="font-size: 11.5px; font-weight: 600; color: #9A9080; text-align: center; line-height: 1.5;">
            ${t.disclaimer}
          </div>
        </div>
      `}if(this.view==="dogsetup"){const t=e.signupStep2,o=["S","M","L","XL"];return p`
        <div class="view-dogsetup">
          <div class="back-btn" @click=${()=>this.setView("signup")}>
            ‹ ${t.back}
          </div>

          <div class="step-bar-row">
            <div class="step-pill" style="background: #1FC99B;"></div>
            <div class="step-pill" style="background: #FFCE2E;"></div>
            <div class="step-label">${t.stepCount}</div>
          </div>

          <div>
            <div class="section-headline">${t.title}</div>
            <div class="section-subtext">${t.subtitle}</div>
          </div>

          ${this.errorMessage?p`<div class="error-banner">⚠️ ${this.errorMessage}</div>`:null}

          <form class="card" @submit=${i=>this.handleFinishSetup(i)}>
            <div style="display: flex; gap: 14px; align-items: center;">
              <div
                class="photo-upload-circle"
                @click=${()=>d.openPhotoModal({target:"pet",currentAvatar:this.dogAvatar,title:"Pick Dog Avatar"})}
              >
                ${this.dogAvatar?p`<img src="${this.dogAvatar}" alt="Dog Avatar" />`:p`
                      <div style="font-size: 20px; font-weight: 800; color: #8A7F68;">+</div>
                      <div style="font-size: 9px; font-weight: 800; color: #8A7F68;">${t.photo}</div>
                    `}
              </div>
              <div style="flex: 1; min-width: 0;">
                <label class="field-label">${t.name}</label>
                <input
                  type="text"
                  class="input-box"
                  style="font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif); font-size: 19px; letter-spacing: -0.5px;"
                  placeholder="${t.namePlaceholder}"
                  .value=${this.dogName}
                  @input=${i=>this.dogName=i.target.value}
                  required
                />
              </div>
            </div>

            <div>
              <label class="field-label">${t.householdName}</label>
              <input
                type="text"
                class="input-box"
                placeholder="${t.householdNamePlaceholder}"
                .value=${this.householdName}
                @input=${i=>this.householdName=i.target.value}
              />
              <div style="font-size: 11px; font-weight: 600; color: #9A9080; margin-top: 6px; line-height: 1.4;">
                ${t.householdHelp}
              </div>
            </div>

            <div>
              <label class="field-label">${t.size}</label>
              <div class="size-grid">
                ${o.map(i=>{const s=t.sizes[i],a=this.setupSize===i;return p`
                    <div
                      class="size-tile ${a?"active":""}"
                      @click=${()=>this.setupSize=i}
                    >
                      <div style="font-size: 13.5px; font-weight: 800; color: #17140F;">${s.label}</div>
                      <div style="font-size: 9.5px; font-weight: 700; color: #6A6152;">${s.kg}</div>
                    </div>
                  `})}
              </div>
            </div>

            <div>
              <label class="field-label">${t.whatTrack}</label>
              <div class="track-chips-grid">
                ${Object.entries(t.trackingOptions).map(([i,s])=>{const a=!!this.trackingPrefs[i];return p`
                    <div
                      class="track-chip ${a?"active":""}"
                      @click=${()=>{this.trackingPrefs={...this.trackingPrefs,[i]:!this.trackingPrefs[i]}}}
                    >
                      <div class="track-dot"></div>
                      <span>${s}</span>
                    </div>
                  `})}
              </div>
            </div>

            <button
              type="submit"
              class="btn-green"
              ?disabled=${this.isSubmitting}
            >
              ${this.isSubmitting?p`<span class="btn-spinner"></span> ${d.currentLocale==="ko"?"설정 중...":"Setting up..."}`:t.startTracking}
            </button>
          </form>

          <div
            style="text-align: center; font-size: 12.5px; font-weight: 700; color: #6A6152; cursor: pointer; padding: 2px; line-height: 1.45;"
            @click=${()=>d.setActiveTab("import")}
          >
            ${t.alreadyTracking} <span style="text-decoration: underline;">${t.importHistory}</span>
          </div>
        </div>
      `}if(this.view==="join"){const t=e.joinStep1,o=(this.joinCode.toUpperCase()+"      ").slice(0,6).split("");return p`
        <div class="view-join">
          <div class="back-btn" @click=${()=>this.setView("signin")}>
            ‹ ${t.back}
          </div>

          <div>
            <div class="section-headline">${t.title}</div>
            <div class="section-subtext-mint">${t.subtitle}</div>
          </div>

          ${this.errorMessage?p`<div class="error-banner">⚠️ ${this.errorMessage}</div>`:null}

          <form class="card" @submit=${i=>this.handleGoJoinDetails(i)}>
            <div style="font-size: 10.5px; font-weight: 800; letter-spacing: 1.4px; color: #9A9080; text-transform: uppercase; text-align: center;">
              ${t.enterCode}
            </div>

            <div class="code-boxes-row">
              ${o.map(i=>p`
                <div class="code-box ${i.trim()?"filled":""}">
                  ${i.trim()}
                </div>
              `)}
              <input
                type="text"
                maxlength="6"
                class="hidden-code-input"
                .value=${this.joinCode}
                @input=${i=>this.joinCode=i.target.value.toUpperCase()}
                autofocus
              />
            </div>

            <button type="submit" class="btn-coral" style="margin-top: 10px;">
              ${t.continueBtn}
            </button>
          </form>

          <div class="perks-card">
            <div style="font-size: 13.5px; font-weight: 800; color: #FFF;">${t.perksTitle}</div>
            <div style="display: flex; flex-direction: column; gap: 7px; margin-top: 9px;">
              ${t.perks.map(i=>p`
                <div class="perk-item">
                  <div class="perk-badge"></div>
                  <div style="font-size: 12.5px; font-weight: 600; color: #CFF0E6; line-height: 1.4; flex: 1;">
                    ${i}
                  </div>
                </div>
              `)}
            </div>
          </div>
        </div>
      `}if(this.view==="joindetails"){const t=e.joinStep2,o=[this.displayName||"Dan",`${this.displayName||"Dan"} the walker`,`${this.displayName?this.displayName+" W.":"Dan W."}`,"The walker"];return p`
        <div class="view-joindetails">
          <div class="back-btn" @click=${()=>this.setView("join")}>
            ‹ ${t.back}
          </div>

          <div class="accepted-badge-card">
            <div class="checkmark-circle">✓</div>
            <div style="flex: 1; min-width: 0;">
              <div style="font-size: 10px; font-weight: 800; letter-spacing: 1.4px; color: #9A9080; text-transform: uppercase;">
                ${t.codeAccepted}
              </div>
              <div style="font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif); font-weight: 800; font-size: 18px; color: #17140F; letter-spacing: -0.5px; line-height: 1.15; margin-top: 1px;">
                ${this.householdName||"Household"}
              </div>
              <div style="font-size: 11.5px; font-weight: 700; color: #6A6152; margin-top: 1px;">
                ${t.summarySubtitle("3 people",this.joinRole)}
              </div>
            </div>
          </div>

          <div>
            <div class="section-headline">${t.title}</div>
            <div class="section-subtext-mint">${t.subtitle}</div>
          </div>

          ${this.errorMessage?p`<div class="error-banner">⚠️ ${this.errorMessage}</div>`:null}

          <form class="card" @submit=${i=>this.handleJoinSubmit(i)}>
            <div style="display: flex; gap: 13px; align-items: flex-end;">
              <div
                class="photo-upload-circle"
                style="width: 64px; height: 64px;"
                @click=${()=>d.openPhotoModal({target:"user",currentAvatar:this.userAvatar,title:"Pick Profile Photo"})}
              >
                ${this.userAvatar?p`<img src="${this.userAvatar}" alt="User Avatar" />`:p`
                      <div style="font-size: 18px; font-weight: 800; color: #8A7F68;">+</div>
                      <div style="font-size: 8.5px; font-weight: 800; color: #8A7F68;">photo</div>
                    `}
              </div>
              <div style="flex: 1; min-width: 0;">
                <label class="field-label">${t.yourName}</label>
                <input
                  type="text"
                  class="input-box"
                  placeholder="${t.yourNamePlaceholder}"
                  .value=${this.displayName}
                  @input=${i=>this.displayName=i.target.value}
                  required
                />
              </div>
            </div>

            <div>
              <label class="field-label">${t.email}</label>
              <input
                type="email"
                class="input-box"
                placeholder="${t.emailPlaceholder}"
                .value=${this.email}
                @input=${i=>this.email=i.target.value}
                required
              />
            </div>

            <div>
              <label class="field-label">${t.password}</label>
              <div class="password-wrapper">
                <input
                  type="${this.showPassword?"text":"password"}"
                  class="password-input"
                  placeholder="${t.passwordPlaceholder}"
                  .value=${this.password}
                  @input=${i=>this.password=i.target.value}
                  required
                />
                <span
                  class="show-hide-btn"
                  @click=${()=>this.showPassword=!this.showPassword}
                >
                  ${this.showPassword?e.hide:e.show}
                </span>
              </div>
            </div>

            <div>
              <label class="field-label">${t.howTheySeeYou}</label>
              <div class="role-chips-row">
                ${o.map(i=>{const s=this.joinRole===i;return p`
                    <div
                      class="role-chip ${s?"active":""}"
                      @click=${()=>this.joinRole=i}
                    >
                      <span>${i}</span>
                    </div>
                  `})}
              </div>
            </div>

            <button
              type="submit"
              class="btn-coral"
              ?disabled=${this.isSubmitting}
            >
              ${this.isSubmitting?p`<span class="btn-spinner"></span> ${d.currentLocale==="ko"?"가입 중...":"Joining..."}`:t.joinHouseholdBtn}
            </button>
          </form>

          <div style="font-size: 11.5px; font-weight: 600; color: #0A5A45; text-align: center; line-height: 1.5;">
            ${t.footerDisclaimer}
          </div>
        </div>
      `}return p``}},Ne.styles=q`
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
      width: 16px;
      height: 16px;
      border-radius: 5px;
      border: 2.5px solid #17140F;
      background: #FFF;
      flex: none;
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
  `,Ne);W([b()],B.prototype,"view",void 0);W([b()],B.prototype,"email",void 0);W([b()],B.prototype,"password",void 0);W([b()],B.prototype,"showPassword",void 0);W([b()],B.prototype,"displayName",void 0);W([b()],B.prototype,"userAvatar",void 0);W([b()],B.prototype,"dogName",void 0);W([b()],B.prototype,"householdName",void 0);W([b()],B.prototype,"dogAvatar",void 0);W([b()],B.prototype,"setupSize",void 0);W([b()],B.prototype,"trackingPrefs",void 0);W([b()],B.prototype,"joinCode",void 0);W([b()],B.prototype,"joinRole",void 0);W([b()],B.prototype,"errorMessage",void 0);W([b()],B.prototype,"isSubmitting",void 0);B=W([V("dooty-auth")],B);var at=function(n,e,t,o){var i=arguments.length,s=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,o);else for(var r=n.length-1;r>=0;r--)(a=n[r])&&(s=(i<3?a(s):i>3?a(e,t,s):a(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s},Me;let Ve=(Me=class extends I{constructor(){super(...arguments),this.activeView="today",this.toast=null,this.burstCount=0}connectedCallback(){super.connectedCallback(),this.unsubscribe=d.subscribe(()=>{this.activeView=d.activeTab,this.requestUpdate()}),this.addEventListener("dooty-navigate",e=>{this.activeView=e.detail,d.activeTab=e.detail,this.requestUpdate()}),this.addEventListener("dooty-toast",e=>{this.showToast(e.detail.title,e.detail.sub)}),d.init()}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.unsubscribe)==null||e.call(this),this.toastTimer&&clearTimeout(this.toastTimer)}showToast(e,t){this.toastTimer&&clearTimeout(this.toastTimer),this.toast={title:e,sub:t},this.burstCount++,this.requestUpdate(),this.toastTimer=setTimeout(()=>{this.toast=null,this.requestUpdate()},3200)}render(){const e=d.isAuthenticated,t=e&&this.activeView!=="wrapped",o=["#FF5A3C","#FFCE2E","#2B5BE8","#1FC99B","#17140F"];return p`
      <!-- Outer Container -->
      <div class="device-shell">
        <!-- Viewport -->
        <div class="device-viewport">
          ${e?this.activeView==="today"?p`<dooty-home></dooty-home>`:this.activeView==="analytics"?p`<dooty-numbers></dooty-numbers>`:this.activeView==="map"?p`<dooty-map></dooty-map>`:this.activeView==="dog"?p`<dooty-dog></dooty-dog>`:this.activeView==="deep"?p`<dooty-deep></dooty-deep>`:this.activeView==="wrapped"?p`<dooty-wrapped></dooty-wrapped>`:this.activeView==="settings"?p`<dooty-settings></dooty-settings>`:this.activeView==="invite"?p`<dooty-invite></dooty-invite>`:this.activeView==="import"?p`<dooty-importer></dooty-importer>`:p`<dooty-home></dooty-home>`:p`<dooty-auth></dooty-auth>`}
        </div>

        <!-- Sticky Floating Dock (Pinned to bottom of device-shell, only when authenticated) -->
        ${t?p`<dooty-dock></dooty-dock>`:null}

        <!-- Toast Notification (Pinned over dock) -->
        ${this.toast?p`
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
        ${this.burstCount>0&&this.toast?p`
              <div class="burst-layer">
                ${Array.from({length:26},(i,s)=>{const a=s/26*Math.PI*2,r=Math.round(Math.cos(a)*(120+s%4*40)),l=Math.round(Math.sin(a)*(120+s%4*40)-90),c=700+s%5*130;return p`
                    <div
                      class="confetti-particle"
                      style="
                        width: ${s%3?9:13}px;
                        height: ${s%3?9:13}px;
                        border-radius: ${s%2?"50%":"3px"};
                        background: ${o[s%5]};
                        --dx: ${r}px;
                        --dy: ${l}px;
                        animation: tb-burst ${c}ms cubic-bezier(.15,.7,.35,1) forwards;
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
    `}},Me.styles=q`
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
  `,Me);at([b()],Ve.prototype,"activeView",void 0);at([b()],Ve.prototype,"toast",void 0);at([b()],Ve.prototype,"burstCount",void 0);Ve=at([V("watslog-app")],Ve);const Ii="modulepreload",ji=function(n,e){return new URL(n,e).href},ao={},Oi=function(e,t,o){let i=Promise.resolve();if(t&&t.length>0){let a=function(g){return Promise.all(g.map(h=>Promise.resolve(h).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};const r=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));i=a(t.map(g=>{if(g=ji(g,o),g in ao)return;ao[g]=!0;const h=g.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(!!o)for(let $=r.length-1;$>=0;$--){const k=r[$];if(k.href===g&&(!h||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${g}"]${u}`))return;const w=document.createElement("link");if(w.rel=h?"stylesheet":Ii,h||(w.as="script"),w.crossOrigin="",w.href=g,c&&w.setAttribute("nonce",c),document.head.appendChild(w),h)return new Promise(($,k)=>{w.addEventListener("load",$),w.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${g}`)))})}))}function s(a){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=a,window.dispatchEvent(r),!r.defaultPrevented)throw a}return i.then(a=>{for(const r of a||[])r.status==="rejected"&&s(r.reason);return e().catch(s)})};function Bi(n={}){const{immediate:e=!1,onNeedRefresh:t,onOfflineReady:o,onRegistered:i,onRegisteredSW:s,onRegisterError:a}=n;let r,l;const c=async(h=!0)=>{await l};async function g(){if("serviceWorker"in navigator){if(r=await Oi(async()=>{const{Workbox:h}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:h}},[],import.meta.url).then(({Workbox:h})=>new h("./sw.js",{scope:"./",type:"classic"})).catch(h=>{a==null||a(h)}),!r)return;r.addEventListener("activated",h=>{(h.isUpdate||h.isExternal)&&window.location.reload()}),r.addEventListener("installed",h=>{h.isUpdate||o==null||o()}),r.register({immediate:e}).then(h=>{s?s("./sw.js",h):i==null||i(h)}).catch(h=>{a==null||a(h)})}}return l=g(),c}Bi({onNeedRefresh(){console.log("New app version available.")},onOfflineReady(){console.log("App ready to work offline.")}});
