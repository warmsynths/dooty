(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function o(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(a){if(a.ep)return;a.ep=!0;const l=o(a);fetch(a.href,l)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bo=globalThis,kn=bo.ShadowRoot&&(bo.ShadyCSS===void 0||bo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Fn=Symbol(),Ss=new WeakMap;let ea=class{constructor(e,o,n){if(this._$cssResult$=!0,n!==Fn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=o}get styleSheet(){let e=this.o;const o=this.t;if(kn&&e===void 0){const n=o!==void 0&&o.length===1;n&&(e=Ss.get(o)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Ss.set(o,e))}return e}toString(){return this.cssText}};const Cr=h=>new ea(typeof h=="string"?h:h+"",void 0,Fn),At=(h,...e)=>{const o=h.length===1?h[0]:e.reduce((n,a,l)=>n+(d=>{if(d._$cssResult$===!0)return d.cssText;if(typeof d=="number")return d;throw Error("Value passed to 'css' function must be a 'css' function result: "+d+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+h[l+1],h[0]);return new ea(o,h,Fn)},Er=(h,e)=>{if(kn)h.adoptedStyleSheets=e.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet);else for(const o of e){const n=document.createElement("style"),a=bo.litNonce;a!==void 0&&n.setAttribute("nonce",a),n.textContent=o.cssText,h.appendChild(n)}},Ts=kn?h=>h:h=>h instanceof CSSStyleSheet?(e=>{let o="";for(const n of e.cssRules)o+=n.cssText;return Cr(o)})(h):h;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:zr,defineProperty:Ar,getOwnPropertyDescriptor:Mr,getOwnPropertyNames:Dr,getOwnPropertySymbols:Nr,getPrototypeOf:Ir}=Object,$e=globalThis,Cs=$e.trustedTypes,Br=Cs?Cs.emptyScript:"",an=$e.reactiveElementPolyfillSupport,Oi=(h,e)=>h,yo={toAttribute(h,e){switch(e){case Boolean:h=h?Br:null;break;case Object:case Array:h=h==null?h:JSON.stringify(h)}return h},fromAttribute(h,e){let o=h;switch(e){case Boolean:o=h!==null;break;case Number:o=h===null?null:Number(h);break;case Object:case Array:try{o=JSON.parse(h)}catch{o=null}}return o}},$n=(h,e)=>!zr(h,e),Es={attribute:!0,type:String,converter:yo,reflect:!1,useDefault:!1,hasChanged:$n};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),$e.litPropertyMetadata??($e.litPropertyMetadata=new WeakMap);let ei=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,o=Es){if(o.state&&(o.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((o=Object.create(o)).wrapped=!0),this.elementProperties.set(e,o),!o.noAccessor){const n=Symbol(),a=this.getPropertyDescriptor(e,n,o);a!==void 0&&Ar(this.prototype,e,a)}}static getPropertyDescriptor(e,o,n){const{get:a,set:l}=Mr(this.prototype,e)??{get(){return this[o]},set(d){this[o]=d}};return{get:a,set(d){const p=a==null?void 0:a.call(this);l==null||l.call(this,d),this.requestUpdate(e,p,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Es}static _$Ei(){if(this.hasOwnProperty(Oi("elementProperties")))return;const e=Ir(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Oi("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Oi("properties"))){const o=this.properties,n=[...Dr(o),...Nr(o)];for(const a of n)this.createProperty(a,o[a])}const e=this[Symbol.metadata];if(e!==null){const o=litPropertyMetadata.get(e);if(o!==void 0)for(const[n,a]of o)this.elementProperties.set(n,a)}this._$Eh=new Map;for(const[o,n]of this.elementProperties){const a=this._$Eu(o,n);a!==void 0&&this._$Eh.set(a,o)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const o=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const a of n)o.unshift(Ts(a))}else e!==void 0&&o.push(Ts(e));return o}static _$Eu(e,o){const n=o.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(o=>this.enableUpdating=o),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(o=>o(this))}addController(e){var o;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((o=e.hostConnected)==null||o.call(e))}removeController(e){var o;(o=this._$EO)==null||o.delete(e)}_$E_(){const e=new Map,o=this.constructor.elementProperties;for(const n of o.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Er(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(o=>{var n;return(n=o.hostConnected)==null?void 0:n.call(o)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(o=>{var n;return(n=o.hostDisconnected)==null?void 0:n.call(o)})}attributeChangedCallback(e,o,n){this._$AK(e,n)}_$ET(e,o){var l;const n=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,n);if(a!==void 0&&n.reflect===!0){const d=(((l=n.converter)==null?void 0:l.toAttribute)!==void 0?n.converter:yo).toAttribute(o,n.type);this._$Em=e,d==null?this.removeAttribute(a):this.setAttribute(a,d),this._$Em=null}}_$AK(e,o){var l,d;const n=this.constructor,a=n._$Eh.get(e);if(a!==void 0&&this._$Em!==a){const p=n.getPropertyOptions(a),f=typeof p.converter=="function"?{fromAttribute:p.converter}:((l=p.converter)==null?void 0:l.fromAttribute)!==void 0?p.converter:yo;this._$Em=a;const m=f.fromAttribute(o,p.type);this[a]=m??((d=this._$Ej)==null?void 0:d.get(a))??m,this._$Em=null}}requestUpdate(e,o,n,a=!1,l){var d;if(e!==void 0){const p=this.constructor;if(a===!1&&(l=this[e]),n??(n=p.getPropertyOptions(e)),!((n.hasChanged??$n)(l,o)||n.useDefault&&n.reflect&&l===((d=this._$Ej)==null?void 0:d.get(e))&&!this.hasAttribute(p._$Eu(e,n))))return;this.C(e,o,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,o,{useDefault:n,reflect:a,wrapped:l},d){n&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,d??o??this[e]),l!==!0||d!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(o=void 0),this._$AL.set(e,o)),a===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(o){Promise.reject(o)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[l,d]of this._$Ep)this[l]=d;this._$Ep=void 0}const a=this.constructor.elementProperties;if(a.size>0)for(const[l,d]of a){const{wrapped:p}=d,f=this[l];p!==!0||this._$AL.has(l)||f===void 0||this.C(l,void 0,d,f)}}let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),(n=this._$EO)==null||n.forEach(a=>{var l;return(l=a.hostUpdate)==null?void 0:l.call(a)}),this.update(o)):this._$EM()}catch(a){throw e=!1,this._$EM(),a}e&&this._$AE(o)}willUpdate(e){}_$AE(e){var o;(o=this._$EO)==null||o.forEach(n=>{var a;return(a=n.hostUpdated)==null?void 0:a.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(o=>this._$ET(o,this[o]))),this._$EM()}updated(e){}firstUpdated(e){}};ei.elementStyles=[],ei.shadowRootOptions={mode:"open"},ei[Oi("elementProperties")]=new Map,ei[Oi("finalized")]=new Map,an==null||an({ReactiveElement:ei}),($e.reactiveElementVersions??($e.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ri=globalThis,zs=h=>h,wo=Ri.trustedTypes,As=wo?wo.createPolicy("lit-html",{createHTML:h=>h}):void 0,ia="$lit$",Fe=`lit$${Math.random().toFixed(9).slice(2)}$`,oa="?"+Fe,Or=`<${oa}>`,Oe=document,Wi=()=>Oe.createComment(""),ji=h=>h===null||typeof h!="object"&&typeof h!="function",Pn=Array.isArray,Rr=h=>Pn(h)||typeof(h==null?void 0:h[Symbol.iterator])=="function",rn=`[ 	
\f\r]`,Ii=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ms=/-->/g,Ds=/>/g,Me=RegExp(`>|${rn}(?:([^\\s"'>=/]+)(${rn}*=${rn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ns=/'/g,Is=/"/g,na=/^(?:script|style|textarea|title)$/i,Wr=h=>(e,...o)=>({_$litType$:h,strings:e,values:o}),b=Wr(1),wi=Symbol.for("lit-noChange"),Bt=Symbol.for("lit-nothing"),Bs=new WeakMap,Ne=Oe.createTreeWalker(Oe,129);function sa(h,e){if(!Pn(h)||!h.hasOwnProperty("raw"))throw Error("invalid template strings array");return As!==void 0?As.createHTML(e):e}const jr=(h,e)=>{const o=h.length-1,n=[];let a,l=e===2?"<svg>":e===3?"<math>":"",d=Ii;for(let p=0;p<o;p++){const f=h[p];let m,y,x=-1,_=0;for(;_<f.length&&(d.lastIndex=_,y=d.exec(f),y!==null);)_=d.lastIndex,d===Ii?y[1]==="!--"?d=Ms:y[1]!==void 0?d=Ds:y[2]!==void 0?(na.test(y[2])&&(a=RegExp("</"+y[2],"g")),d=Me):y[3]!==void 0&&(d=Me):d===Me?y[0]===">"?(d=a??Ii,x=-1):y[1]===void 0?x=-2:(x=d.lastIndex-y[2].length,m=y[1],d=y[3]===void 0?Me:y[3]==='"'?Is:Ns):d===Is||d===Ns?d=Me:d===Ms||d===Ds?d=Ii:(d=Me,a=void 0);const F=d===Me&&h[p+1].startsWith("/>")?" ":"";l+=d===Ii?f+Or:x>=0?(n.push(m),f.slice(0,x)+ia+f.slice(x)+Fe+F):f+Fe+(x===-2?p:F)}return[sa(h,l+(h[o]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]};class Hi{constructor({strings:e,_$litType$:o},n){let a;this.parts=[];let l=0,d=0;const p=e.length-1,f=this.parts,[m,y]=jr(e,o);if(this.el=Hi.createElement(m,n),Ne.currentNode=this.el.content,o===2||o===3){const x=this.el.content.firstChild;x.replaceWith(...x.childNodes)}for(;(a=Ne.nextNode())!==null&&f.length<p;){if(a.nodeType===1){if(a.hasAttributes())for(const x of a.getAttributeNames())if(x.endsWith(ia)){const _=y[d++],F=a.getAttribute(x).split(Fe),P=/([.?@])?(.*)/.exec(_);f.push({type:1,index:l,name:P[2],strings:F,ctor:P[1]==="."?Ur:P[1]==="?"?Zr:P[1]==="@"?Gr:$o}),a.removeAttribute(x)}else x.startsWith(Fe)&&(f.push({type:6,index:l}),a.removeAttribute(x));if(na.test(a.tagName)){const x=a.textContent.split(Fe),_=x.length-1;if(_>0){a.textContent=wo?wo.emptyScript:"";for(let F=0;F<_;F++)a.append(x[F],Wi()),Ne.nextNode(),f.push({type:2,index:++l});a.append(x[_],Wi())}}}else if(a.nodeType===8)if(a.data===oa)f.push({type:2,index:l});else{let x=-1;for(;(x=a.data.indexOf(Fe,x+1))!==-1;)f.push({type:7,index:l}),x+=Fe.length-1}l++}}static createElement(e,o){const n=Oe.createElement("template");return n.innerHTML=e,n}}function _i(h,e,o=h,n){var d,p;if(e===wi)return e;let a=n!==void 0?(d=o._$Co)==null?void 0:d[n]:o._$Cl;const l=ji(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((p=a==null?void 0:a._$AO)==null||p.call(a,!1),l===void 0?a=void 0:(a=new l(h),a._$AT(h,o,n)),n!==void 0?(o._$Co??(o._$Co=[]))[n]=a:o._$Cl=a),a!==void 0&&(e=_i(h,a._$AS(h,e.values),a,n)),e}class Hr{constructor(e,o){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:o},parts:n}=this._$AD,a=((e==null?void 0:e.creationScope)??Oe).importNode(o,!0);Ne.currentNode=a;let l=Ne.nextNode(),d=0,p=0,f=n[0];for(;f!==void 0;){if(d===f.index){let m;f.type===2?m=new Ki(l,l.nextSibling,this,e):f.type===1?m=new f.ctor(l,f.name,f.strings,this,e):f.type===6&&(m=new qr(l,this,e)),this._$AV.push(m),f=n[++p]}d!==(f==null?void 0:f.index)&&(l=Ne.nextNode(),d++)}return Ne.currentNode=Oe,a}p(e){let o=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,o),o+=n.strings.length-2):n._$AI(e[o])),o++}}class Ki{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,o,n,a){this.type=2,this._$AH=Bt,this._$AN=void 0,this._$AA=e,this._$AB=o,this._$AM=n,this.options=a,this._$Cv=(a==null?void 0:a.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const o=this._$AM;return o!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=o.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,o=this){e=_i(this,e,o),ji(e)?e===Bt||e==null||e===""?(this._$AH!==Bt&&this._$AR(),this._$AH=Bt):e!==this._$AH&&e!==wi&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Rr(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Bt&&ji(this._$AH)?this._$AA.nextSibling.data=e:this.T(Oe.createTextNode(e)),this._$AH=e}$(e){var l;const{values:o,_$litType$:n}=e,a=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Hi.createElement(sa(n.h,n.h[0]),this.options)),n);if(((l=this._$AH)==null?void 0:l._$AD)===a)this._$AH.p(o);else{const d=new Hr(a,this),p=d.u(this.options);d.p(o),this.T(p),this._$AH=d}}_$AC(e){let o=Bs.get(e.strings);return o===void 0&&Bs.set(e.strings,o=new Hi(e)),o}k(e){Pn(this._$AH)||(this._$AH=[],this._$AR());const o=this._$AH;let n,a=0;for(const l of e)a===o.length?o.push(n=new Ki(this.O(Wi()),this.O(Wi()),this,this.options)):n=o[a],n._$AI(l),a++;a<o.length&&(this._$AR(n&&n._$AB.nextSibling,a),o.length=a)}_$AR(e=this._$AA.nextSibling,o){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,o);e!==this._$AB;){const a=zs(e).nextSibling;zs(e).remove(),e=a}}setConnected(e){var o;this._$AM===void 0&&(this._$Cv=e,(o=this._$AP)==null||o.call(this,e))}}class $o{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,o,n,a,l){this.type=1,this._$AH=Bt,this._$AN=void 0,this.element=e,this.name=o,this._$AM=a,this.options=l,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Bt}_$AI(e,o=this,n,a){const l=this.strings;let d=!1;if(l===void 0)e=_i(this,e,o,0),d=!ji(e)||e!==this._$AH&&e!==wi,d&&(this._$AH=e);else{const p=e;let f,m;for(e=l[0],f=0;f<l.length-1;f++)m=_i(this,p[n+f],o,f),m===wi&&(m=this._$AH[f]),d||(d=!ji(m)||m!==this._$AH[f]),m===Bt?e=Bt:e!==Bt&&(e+=(m??"")+l[f+1]),this._$AH[f]=m}d&&!a&&this.j(e)}j(e){e===Bt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ur extends $o{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Bt?void 0:e}}let Zr=class extends $o{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Bt)}};class Gr extends $o{constructor(e,o,n,a,l){super(e,o,n,a,l),this.type=5}_$AI(e,o=this){if((e=_i(this,e,o,0)??Bt)===wi)return;const n=this._$AH,a=e===Bt&&n!==Bt||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,l=e!==Bt&&(n===Bt||a);a&&this.element.removeEventListener(this.name,this,n),l&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var o;typeof this._$AH=="function"?this._$AH.call(((o=this.options)==null?void 0:o.host)??this.element,e):this._$AH.handleEvent(e)}}class qr{constructor(e,o,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=o,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){_i(this,e)}}const ln=Ri.litHtmlPolyfillSupport;ln==null||ln(Hi,Ki),(Ri.litHtmlVersions??(Ri.litHtmlVersions=[])).push("3.3.3");const Kr=(h,e,o)=>{const n=(o==null?void 0:o.renderBefore)??e;let a=n._$litPart$;if(a===void 0){const l=(o==null?void 0:o.renderBefore)??null;n._$litPart$=a=new Ki(e.insertBefore(Wi(),l),l,void 0,o??{})}return a._$AI(h),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ie=globalThis;class Ft extends ei{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var o;const e=super.createRenderRoot();return(o=this.renderOptions).renderBefore??(o.renderBefore=e.firstChild),e}update(e){const o=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Kr(o,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return wi}}var ta;Ft._$litElement$=!0,Ft.finalized=!0,(ta=Ie.litElementHydrateSupport)==null||ta.call(Ie,{LitElement:Ft});const dn=Ie.litElementPolyfillSupport;dn==null||dn({LitElement:Ft});(Ie.litElementVersions??(Ie.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mt=h=>(e,o)=>{o!==void 0?o.addInitializer(()=>{customElements.define(h,e)}):customElements.define(h,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vr={attribute:!0,type:String,converter:yo,reflect:!1,hasChanged:$n},Jr=(h=Vr,e,o)=>{const{kind:n,metadata:a}=o;let l=globalThis.litPropertyMetadata.get(a);if(l===void 0&&globalThis.litPropertyMetadata.set(a,l=new Map),n==="setter"&&((h=Object.create(h)).wrapped=!0),l.set(o.name,h),n==="accessor"){const{name:d}=o;return{set(p){const f=e.get.call(this);e.set.call(this,p),this.requestUpdate(d,f,h,!0,p)},init(p){return p!==void 0&&this.C(d,void 0,h,p),p}}}if(n==="setter"){const{name:d}=o;return function(p){const f=this[d];e.call(this,p),this.requestUpdate(d,f,h,!0,p)}}throw Error("Unsupported decorator location: "+n)};function Vi(h){return(e,o)=>typeof o=="object"?Jr(h,e,o):((n,a,l)=>{const d=a.hasOwnProperty(l);return a.constructor.createProperty(l,n),d?Object.getOwnPropertyDescriptor(a,l):void 0})(h,e,o)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function E(h){return Vi({...h,state:!0,attribute:!1})}const Yr=[{id:"Zoomy",name:"Zoomy",nameKo:"우다다"},{id:"Regal",name:"Regal",nameKo:"도도함"},{id:"Guilty",name:"Guilty",nameKo:"눈치봄"},{id:"Unbothered",name:"Unbothered",nameKo:"무덤덤"},{id:"Feral",name:"Feral",nameKo:"천방지축"},{id:"Happy",name:"Happy",nameKo:"행복함"},{id:"Calm",name:"Calm",nameKo:"차분함"}],Qr={Zoomy:"우다다",Regal:"도도함",Guilty:"눈치봄",Unbothered:"무덤덤",Feral:"천방지축",Happy:"행복함",Calm:"차분함"},Xr={en:{appName:"Dooty",tagline:"Track your pet’s daily potty, walks, meals, and health.",nav:{today:"Today",map:"Map",analytics:"Analytics",settings:"Settings",import:"Import"},events:{poop:{name:"Poop",action:"Log Poop",desc:"Bathroom break"},pee:{name:"Pee",action:"Log Pee",desc:"Bathroom break"},walk:{name:"Walk",action:"Log Walk",desc:"Outdoor exercise"},food:{name:"Food",action:"Log Food",desc:"Meals & kibble"},water:{name:"Water",action:"Log Water",desc:"Fresh hydration"},medicine:{name:"Medicine",action:"Log Medicine",desc:"Pills & treatments"},grooming:{name:"Grooming",action:"Log Grooming",desc:"Bath & brushing"},playing:{name:"Playing",action:"Log Play",desc:"Fetch & fun"},vomit:{name:"Vomit",action:"Log Vomit",desc:"Upset stomach"},weight:{name:"Weight",action:"Log Weight",desc:"Body mass tracking"},vet:{name:"Vet visit",action:"Log Vet Visit",desc:"Appointments & checkups"},symptom:{name:"Symptom",action:"Log Symptom",desc:"Health anomalies & issues"},nap:{name:"Nap / Sleep",action:"Log Nap",desc:"Sleep & rest"},training:{name:"Training",action:"Log Training",desc:"Commands & practice"}},streak:{badge:h=>`${h} DAY STREAK`,subtitle:"Keep logging daily to build your pet’s routine!"},home:{greeting:h=>`Hey, ${h}! 🐾`,vibeLine:"Ready for another great day together.",todayStats:"Today’s Log",quickLog:"Quick Log",recentActivity:"Recent Timeline",noEventsToday:"No logs yet today!",tapToLogFirst:"Tap any icon above to record your first entry.",offlineMode:"Offline Mode",pendingSync:h=>`${h} pending offline sync`},logger:{title:h=>`Log ${h}`,time:"Time of Event",notesPlaceholder:"Add optional details (e.g. consistency, brand, dosage)...",locationTag:"Location",addLocation:"Add GPS Coordinates",save:"Save Log",cancel:"Cancel",saving:"Saving...",loggedSuccess:h=>`${h} logged successfully!`},analytics:{title:"Pet Analytics & Habits",subtitle:"Understand your pet’s daily rhythm and health trends",clock24hTitle:"24-Hour Potty Clock",clock24hDesc:"Most frequent hours of the day for bathroom breaks",frequencyTitle:"Activity Breakdown",periods:{days7:"Last 7 Days",days30:"Last 30 Days",allTime:"All Time"},healthWatch:"Health Watch",vomitCount:h=>`${h} vomiting incidents recorded`,medCount:h=>`${h} medications administered`,daysNoPoop:h=>`${h} days without poop recorded`,streakTitle:"Consistency Streak",totalLogs:"Total Logged Events"},map:{title:"Potty & Walk Map",startWalk:"Start Walk",pauseWalk:"Pause Walk",resumeWalk:"Resume Walk",stopWalk:"Finish Walk",distance:"Distance",duration:"Duration",logPoopOnWalk:"💩 Poop Here",logPeeOnWalk:"💧 Pee Here",noLocationsYet:"No geo-tagged events yet. Start a walk or tag your next log!"},importer:{title:"Import History",subtitle:"From a spreadsheet, Notion, or another tracker",dropText:"Drop your CSV or JSON file here, or click to browse",selectFile:"Select File",dryRunTitle:"Import Preview (Dry-Run)",totalEvents:"Total Records Detected",targetPet:"Target Pet",dateSpan:"Date Span",confirmImport:"Import All Events",importing:"Importing records...",success:h=>`Successfully imported ${h} historical events!`},settings:{back:"Today",title:"Settings",signedInPlan:"Signed in · free plan",language:"Language",english:"English",korean:"한국어",household:"Household",householdCount:(h,e)=>`${h} ${h===1?"person":"people"} · ${e} ${e===1?"pet":"pets"}`,invite:"Invite",people:"People",inviteSomeone:"+ Invite someone",pets:"Pets",addPet:"+ Add a pet",nudges:"Nudges",walkReminders:"Walk reminders",walkRemindersSub:"Nudge me at the usual times",weeklyDigest:"Weekly digest",weeklyDigestSub:"Sunday night, one card",unusualGap:"Unusual gap alert",unusualGapSub:"If nothing for 20 hours",vetShare:"Share with my vet",vetShareSub:"Read-only link to the summary",yourData:"Your data",importCsv:"Import from CSV",importCsvSub:"From a spreadsheet, Notion, or another tracker",exportCsv:"Export all data (CSV)",exportCsvSub:"Everything, including photos",signOut:"Sign out",version:"Dooty v0.4 · installable PWA",logsUnit:"logs",activeHousehold:"Active Household",switchHousehold:"Switch Household",members:"Family Members",invitePartner:"Invite Partner / Roommate",inviteDesc:"Share this code so they can view and log for this pet from their phone:",copyCode:"Copy Invite Code",copied:"Copied!",joinHousehold:"Join Existing Household",joinAnotherHousehold:"+ Join Another Household",enterCode:"Enter 6-digit Invite Code",joinBtn:"Join Household",currentPet:"Pet Profile",syncStatus:"Cloud Sync Status",online:"Connected & Live",offline:"Offline (Queued locally)",signedOutSuccess:"Signed out. See you next walk!"},invite:{back:"Settings",title:"Invite to",subtitle:"Share the code below. It works once, then it's dead.",theyJoinAs:"They join as",roles:{full:{name:"Full member",sub:"Log, edit, see everything"},logOnly:{name:"Log only",sub:"Can add events, cannot see history"}},inviteCode:"Invite code",expiresIn7Days:"Expires in 7 days",copyCode:"Copy code",shareLink:"Share link",pending:"Pending",revoke:"Revoke",pendingHelp:"Anyone with the code can log events. Only you can rename the household or remove people.",codeCopied:"Code copied",codeCopiedSub:h=>`${h} · expires in 7 days`,inviteRevoked:"Invite revoked",inviteRevokedSub:h=>`${h} will no longer work.`},auth:{welcomeTitle:"Dooty",welcomeSubtitle:"Poop, pills and everything else. One tap, then get on with the walk.",tagline:"Simple, tactile pet habit tracking for your family.",tabLogIn:"Log In",tabSignUp:"Sign Up",emailLabel:"Email",emailPlaceholder:"sam@jellyfish.dog",passwordLabel:"Password",passwordPlaceholder:"••••••••",logInBtn:"Log in",loggingIn:"Logging in...",forgotPassword:"Forgot your password?",or:"OR",googleBtn:"Continue with Google",newHere:"New here?",makeAccount:"Make an account",gotInviteCode:"Got an invite code?",show:"Show",hide:"Hide",signupStep1:{back:"Back",stepCount:"1 / 2",title:"Let's get you set up",subtitle:"Takes about forty seconds. Faster than the average walk.",yourName:"Your name",yourNamePlaceholder:"Sam",email:"Email",emailPlaceholder:"sam@jellyfish.dog",password:"Password",passwordPlaceholder:"••••••••",weak:"Weak",good:"Good",strong:"Strong",nextTheDog:"Next: the dog",disclaimer:"By continuing you agree we will store an unreasonable amount of data about your dog’s bowels."},signupStep2:{back:"Back",stepCount:"2 / 2",title:"Who are we tracking?",subtitle:"You can add more dogs later. We will not judge you for it.",photo:"photo",name:"Name",namePlaceholder:"Nacho",householdName:"Household name",householdNamePlaceholder:"The Nacho Household",householdHelp:"Everyone you invite joins this household and can log for any pet in it.",size:"Size",sizes:{S:{label:"S",kg:"– 10kg"},M:{label:"M",kg:"10–20"},L:{label:"L",kg:"20–35"},XL:{label:"XL",kg:"35kg +"}},whatTrack:"What should we track?",trackingOptions:{poop:"Poop",pee:"Pee",vomit:"Vomit",meds:"Medicine",weight:"Weight",walk:"Walks",vet:"Vet visits",symptom:"Symptoms"},startTracking:"Start tracking",alreadyTracking:"Already tracking somewhere else?",importHistory:"Import your history"},joinStep1:{back:"Back",title:"Join a household",subtitle:"Whoever set it up can find the code in Settings, under People.",enterCode:"Enter the code",continueBtn:"Continue",perksTitle:"What you’ll be able to do",perks:["Log poops, walks, meds and everything else","See the streak, the map and the stats","Get the same reminders as everyone else"]},joinStep2:{back:"Code",codeAccepted:"Code accepted · joining",summarySubtitle:(h,e)=>`${h} · you'll be ${e}`,title:"Tell them who you are",subtitle:"Your name shows up next to every event you log, so pick what the household will recognise.",yourName:"Your name",yourNamePlaceholder:"Dan",email:"Email",emailPlaceholder:"dan@thewalks.co",password:"Password",passwordPlaceholder:"••••••••",howTheySeeYou:"How they’ll see you",joinHouseholdBtn:"Join the household",footerDisclaimer:"The owner will be told you joined. You can leave the household at any time."},signUpBtn:"Create Account",signingUp:"Creating account...",signUpModeCreate:"✨ Create New Household",signUpModeJoin:"🔑 Join with Invite Code",noAccountPrompt:"Don’t have an account? Sign Up",hasAccountPrompt:"Already have an account? Log In",ownerNameLabel:"Your Name",ownerNamePlaceholder:"e.g. Reynold",householdNameLabel:"Household Name",householdNamePlaceholder:"e.g. Happy Paws Family",petNameLabel:"Pet Name",petNamePlaceholder:"e.g. Jjols",speciesLabel:"Pet Type",speciesDog:"Dog 🐶",speciesCat:"Cat 🐱",speciesOther:"Other 🐾",breedLabel:"Breed (Optional)",breedPlaceholder:"e.g. Golden Retriever",inviteCodeLabel:"6-Digit Invite Code",inviteCodePlaceholder:"e.g. AB12CD",inviteCodeHint:"Ask your household owner to generate an invite code from their Settings > Family Members tab.",yourNameLabel:"Your Name",yourNamePlaceholder:"e.g. Alex, Sarah",yourRoleLabel:"Role / Relationship (Optional)",yourRolePlaceholder:"e.g. Partner, Mom, Dog Walker",errors:{emailRequired:"Please enter your email address",invalidEmail:"Please enter a valid email address",passwordRequired:"Please enter your password",passwordTooShort:"Password must be at least 6 characters",logInFailed:"Invalid email or password",signUpFailed:"Could not complete sign up. Please try again.",ownerNameRequired:"Please enter your name",householdNameRequired:"Please enter a household name",petNameRequired:"Please enter your pet’s name",inviteCodeRequired:"Please enter a 6-digit invite code",yourNameRequired:"Please enter your name",joinFailed:"Invalid invite code or server error",createFailed:"Failed to create household. Please check connection."}}},ko:{appName:"두티 (Dooty)",tagline:"반려견의 배변, 산책, 식사, 건강을 쉽고 재미있게 기록하세요.",nav:{today:"오늘",map:"지도",analytics:"통계",settings:"설정",import:"불러오기"},events:{poop:{name:"응가",action:"응가 기록",desc:"배변 활동"},pee:{name:"쉬야",action:"쉬야 기록",desc:"배뇨 활동"},walk:{name:"산책",action:"산책 기록",desc:"야외 산책"},food:{name:"밥/사료",action:"식사 기록",desc:"사료 및 간식"},water:{name:"물",action:"물 마심",desc:"수분 섭취"},medicine:{name:"약",action:"투약 기록",desc:"영양제 및 처방약"},grooming:{name:"목욕/미용",action:"목욕/미용",desc:"위생 케어"},playing:{name:"놀이",action:"놀이 기록",desc:"터그놀이 & 공놀이"},vomit:{name:"토/구토",action:"구토 기록",desc:"소화 이상"},weight:{name:"몸무게",action:"몸무게 기록",desc:"체중 변화 측정"},vet:{name:"병원 진료",action:"진료 기록",desc:"정기 검진 및 진료"},symptom:{name:"증상 메모",action:"증상 기록",desc:"이상 징후 기록"},nap:{name:"수면/낮잠",action:"낮잠 기록",desc:"수면 및 휴식"},training:{name:"훈련/교육",action:"훈련 기록",desc:"훈련 및 기본 교육"}},streak:{badge:h=>`${h}일 연속 기록 중!`,subtitle:"매일 꾸준히 기록해서 건강한 루틴을 만들어요!"},home:{greeting:h=>`안녕, ${h}! 🐾`,vibeLine:"오늘도 건강하고 행복한 하루 보내요.",todayStats:"오늘의 기록",quickLog:"빠른 기록",recentActivity:"최근 활동 타임라인",noEventsToday:"오늘 아직 등록된 기록이 없어요!",tapToLogFirst:"위 아이콘을 눌러 첫 번째 활동을 기록해보세요.",offlineMode:"오프라인 모드",pendingSync:h=>`${h}개 항목 동기화 대기 중`},logger:{title:h=>`${h} 기록하기`,time:"기록 시간",notesPlaceholder:"메모를 입력하세요 (변 상태, 사료량, 약 종류 등)...",locationTag:"위치 정보",addLocation:"현재 GPS 위치 추가",save:"저장하기",cancel:"취소",saving:"저장 중...",loggedSuccess:h=>`${h} 기록이 저장되었습니다!`},analytics:{title:"배변 및 활동 분석",subtitle:"반려견의 일일 생활 패턴과 건강 추이를 확인하세요",clock24hTitle:"24시간 배변 시계",clock24hDesc:"하루 중 가장 응가/쉬야를 많이 하는 시간대",frequencyTitle:"활동별 통계",periods:{days7:"최근 7일",days30:"최근 30일",allTime:"전체 기간"},healthWatch:"건강 모니터링",vomitCount:h=>`최근 구토 ${h}회 발생`,medCount:h=>`최근 투약 ${h}회 완료`,daysNoPoop:h=>`응가 미기록 ${h}일째`,streakTitle:"연속 기록 스트릭",totalLogs:"총 기록 건수"},map:{title:"배변 & 산책 지도",startWalk:"산책 시작",pauseWalk:"일시정지",resumeWalk:"산책 재개",stopWalk:"산책 종료",distance:"산책 거리",duration:"산책 시간",logPoopOnWalk:"💩 여기서 응가",logPeeOnWalk:"💧 여기서 쉬야",noLocationsYet:"위치 기록이 아직 없습니다. 산책을 시작하거나 위치를 태그해보세요!"},importer:{title:"데이터 불러오기",subtitle:"스프레드시트, 노션, 다른 트래커에서 데이터 이전",dropText:"CSV 또는 JSON 파일을 여기에 끌어다 놓거나 클릭하여 선택하세요",selectFile:"파일 선택",dryRunTitle:"가져오기 미리보기 (검증)",totalEvents:"총 감지된 기록 수",targetPet:"대상 반려견",dateSpan:"기록 기간",confirmImport:"데이터 일괄 가져오기",importing:"데이터를 가져오는 중...",success:h=>`${h}개의 과거 기록을 성공적으로 가져왔습니다!`},settings:{back:"오늘",title:"설정",signedInPlan:"로그인됨 · 무료 플랜",language:"언어",english:"English",korean:"한국어",household:"가족 공간",householdCount:(h,e)=>`${h}명 · 반려견 ${e}마리`,invite:"초대",people:"구성원",inviteSomeone:"+ 초대하기",pets:"반려동물",addPet:"+ 반려동물 추가",nudges:"알림 설정",walkReminders:"산책 알림",walkRemindersSub:"평소 산책 시간에 알려드려요",weeklyDigest:"주간 요약",weeklyDigestSub:"일요일 밤 한 장의 요약 카드",unusualGap:"이상 공백 알림",unusualGapSub:"20시간 동안 기록이 없으면 알림",vetShare:"수의사와 공유",vetShareSub:"수의사용 읽기 전용 요약 링크",yourData:"내 데이터",importCsv:"CSV에서 가져오기",importCsvSub:"스프레드시트, 노션, 다른 트래커에서 이전",exportCsv:"전체 데이터 내보내기 (CSV)",exportCsvSub:"사진을 포함한 모든 기록 다운로드",signOut:"로그아웃",version:"Dooty v0.4 · 설치형 PWA",logsUnit:"회",activeHousehold:"현재 가족 공간",switchHousehold:"가족 공간 변경",members:"참여 멤버",invitePartner:"가족/동거인 초대하기",inviteDesc:"이 초대 코드를 공유하면 가족도 함께 기록을 확인하고 추가할 수 있습니다:",copyCode:"초대 코드 복사",copied:"복사 완료!",joinHousehold:"기존 가족에 참여하기",joinAnotherHousehold:"+ 다른 가족 공간 참가하기",enterCode:"6자리 초대 코드 입력",joinBtn:"가족 참여",currentPet:"반려견 프로필",syncStatus:"클라우드 동기화 상태",online:"정상 연결됨",offline:"오프라인 (로컬 저장 중)",signedOutSuccess:"로그아웃되었습니다. 다음 산책 때 만나요!"},invite:{back:"설정",title:"초대하기",subtitle:"아래 코드를 공유하세요. 한 번 사용하면 만료됩니다.",theyJoinAs:"초대 권한",roles:{full:{name:"전체 멤버",sub:"기록, 수정, 전체 내역 확인 가능"},logOnly:{name:"기록 전용",sub:"기록 추가만 가능, 과거 내역 열람 불가"}},inviteCode:"초대 코드",expiresIn7Days:"7일 후 만료",copyCode:"코드 복사",shareLink:"링크 공유",pending:"대기 중인 초대",revoke:"취소",pendingHelp:"코드를 가진 사람은 누구나 기록할 수 있습니다. 가족 관리자만 이름을 바꾸거나 구성원을 삭제할 수 있습니다.",codeCopied:"코드 복사 완료",codeCopiedSub:h=>`${h} · 7일 후 만료`,inviteRevoked:"초대 취소됨",inviteRevokedSub:h=>`${h} 코드는 더 이상 사용할 수 없습니다.`},auth:{welcomeTitle:"Dooty",welcomeSubtitle:"응가, 약, 그 외 모든 것. 한 번만 누르고 산책을 계속하세요.",tagline:"직관적이고 재미있는 우리 가족 펫 다이어리",tabLogIn:"로그인",tabSignUp:"회원가입",emailLabel:"이메일",emailPlaceholder:"sam@jellyfish.dog",passwordLabel:"비밀번호",passwordPlaceholder:"••••••••",logInBtn:"로그인",loggingIn:"로그인 중...",forgotPassword:"비밀번호를 잊으셨나요?",or:"또는",googleBtn:"Google로 계속하기",newHere:"처음이신가요?",makeAccount:"계정 만들기",gotInviteCode:"초대 코드가 있나요?",show:"보기",hide:"숨기기",signupStep1:{back:"뒤로",stepCount:"1 / 2",title:"시작해 볼까요",subtitle:"40초쯤 걸립니다. 평균 산책보다 빠릅니다.",yourName:"이름",yourNamePlaceholder:"Sam",email:"이메일",emailPlaceholder:"sam@jellyfish.dog",password:"비밀번호",passwordPlaceholder:"••••••••",weak:"취약",good:"적정",strong:"안전",nextTheDog:"다음: 강아지",disclaimer:"계속 진행하면 강아지의 배변에 관한 상당한 양의 데이터를 저장하는 데 동의하게 됩니다."},signupStep2:{back:"뒤로",stepCount:"2 / 2",title:"누구를 추적할까요?",subtitle:"나중에 강아지를 더 추가할 수 있습니다.",photo:"사진",name:"이름",namePlaceholder:"나초 (Nacho)",householdName:"가족(Household) 이름",householdNamePlaceholder:"나초네 가족",householdHelp:"초대한 모든 사람이 이 가족에 합류하여 모든 반려동물에 대해 기록할 수 있습니다.",size:"크기",sizes:{S:{label:"S",kg:"– 10kg"},M:{label:"M",kg:"10–20"},L:{label:"L",kg:"20–35"},XL:{label:"XL",kg:"35kg +"}},whatTrack:"어떤 항목을 추적할까요?",trackingOptions:{poop:"응가",pee:"쉬야",vomit:"구토",meds:"약",weight:"체중",walk:"산책",vet:"병원 진료",symptom:"이상 증상"},startTracking:"추적 시작하기",alreadyTracking:"다른 곳에서 이미 추적 중이신가요?",importHistory:"기록 가져오기"},joinStep1:{back:"뒤로",title:"가족에 참여하기",subtitle:"설정한 사람은 설정의 구성원에서 코드를 찾을 수 있습니다.",enterCode:"코드 입력",continueBtn:"계속",perksTitle:"할 수 있는 일",perks:["응가, 산책, 약 및 기타 모든 활동 기록","연속 스트릭, 산책 지도, 통계 확인","가족 구성원과 동일한 실시간 알림 수신"]},joinStep2:{back:"코드",codeAccepted:"코드 승인됨 · 참여 중",summarySubtitle:(h,e)=>`${h} · 역할: ${e}`,title:"자신을 알려주세요",subtitle:"내가 기록한 모든 활동 옆에 내 이름이 표시되므로 가족이 알아볼 수 있는 이름을 선택하세요.",yourName:"이름",yourNamePlaceholder:"민지 (Dan)",email:"이메일",emailPlaceholder:"dan@thewalks.co",password:"비밀번호",passwordPlaceholder:"••••••••",howTheySeeYou:"가족에게 표시될 호칭",joinHouseholdBtn:"가족에 참여하기",footerDisclaimer:"가족 관리자에게 참여 알림이 전송됩니다. 언제든지 가족에서 나갈 수 있습니다."},signUpBtn:"회원가입 완료",signingUp:"가입 처리 중...",signUpModeCreate:"✨ 새 가족 공간 만들기",signUpModeJoin:"🔑 초대 코드로 참여하기",noAccountPrompt:"계정이 없으신가요? 회원가입",hasAccountPrompt:"이미 계정이 있으신가요? 로그인",ownerNameLabel:"보호자 이름",ownerNamePlaceholder:"예: 레이놀드",householdNameLabel:"가족(Household) 이름",householdNamePlaceholder:"예: 우리집 강아지네",petNameLabel:"반려동물 이름",petNamePlaceholder:"예: 쪼올스",speciesLabel:"종류",speciesDog:"강아지 🐶",speciesCat:"고양이 🐱",speciesOther:"기타 🐾",breedLabel:"품종 (선택)",breedPlaceholder:"예: 골든 리트리버",inviteCodeLabel:"6자리 초대 코드",inviteCodePlaceholder:"예: AB12CD",inviteCodeHint:"가족 관리자의 [설정 > 가족 멤버]에서 생성한 6자리 초대 코드를 입력하세요.",yourNameLabel:"내 이름",yourNamePlaceholder:"예: 민지, 준호",yourRoleLabel:"역할 / 호칭 (선택)",yourRolePlaceholder:"예: 엄마, 아빠, 산책도우미, 룸메이트",errors:{emailRequired:"이메일 주소를 입력해주세요",invalidEmail:"올바른 이메일 형식을 입력해주세요",passwordRequired:"비밀번호를 입력해주세요",passwordTooShort:"비밀번호는 6자 이상이어야 합니다",logInFailed:"이메일 또는 비밀번호가 올바르지 않습니다",signUpFailed:"회원가입에 실패했습니다. 다시 시도해주세요.",ownerNameRequired:"보호자 이름을 입력해주세요",householdNameRequired:"가족 이름을 입력해주세요",petNameRequired:"반려동물 이름을 입력해주세요",inviteCodeRequired:"6자리 초대 코드를 입력해주세요",yourNameRequired:"이름을 입력해주세요",joinFailed:"유효하지 않은 초대 코드이거나 서버 오류가 발생했습니다",createFailed:"가족 생성에 실패했습니다. 네트워크를 확인해주세요."}}}};function _o(h,e,o){if(!h)return o?`${{poop:"응가",pee:"쉬야",walk:"산책",food:"밥/사료",water:"물",medicine:"약/영양제",grooming:"목욕/미용",playing:"놀이",vomit:"구토",weight:"몸무게",vet:"병원 진료",symptom:"증상 메모",nap:"수면/낮잠",training:"훈련/교육"}[e]||e} · 기록됨`:`${e.toUpperCase()} · Logged`;if(o){let n=h;return n=n.replace(/\bZoomy\b/g,"우다다"),n=n.replace(/\bRegal\b/g,"도도함"),n=n.replace(/\bGuilty\b/g,"눈치봄"),n=n.replace(/\bUnbothered\b/g,"무덤덤"),n=n.replace(/\bFeral\b/g,"천방지축"),n=n.replace(/\bHappy\b/g,"행복함"),n=n.replace(/\bCalm\b/g,"차분함"),n=n.replace(/^Type\s+(\d+)/,"응가 $1단계"),n=n.replace(/^Pee\b/,"쉬야"),n=n.replace(/^Vomit\s+·\s+Type\s+(\d+)/,"구토 · $1단계"),n=n.replace(/^Vomit\b/,"구토"),n=n.replace(/^Walk\b/,"산책"),n=n.replace(/^Meal:\s*/,"식사: "),n=n.replace(/^Vet visit:\s*/,"병원 진료: "),n=n.replace(/^Symptom:\s*/,"증상: "),n=n.replace(/^Weigh-in:\s*/,"체중 측정: "),n=n.replace(/hard pellets/g,"단단한 토끼똥"),n=n.replace(/lumpy log/g,"울퉁불퉁한 변"),n=n.replace(/cracked log/g,"약간 갈라진 변"),n=n.replace(/textbook — the dream/g,"완벽한 황금변 (최고)"),n=n.replace(/soft blobs/g,"무른 덩어리변"),n=n.replace(/mushy/g,"형태 없는 묽은변"),n=n.replace(/liquid/g,"설사/수분성 액체"),n=n.replace(/Annual check-up/g,"정기 검진"),n=n.replace(/Vaccination booster/g,"예방 접종"),n=n.replace(/Loose stool consult/g,"배변/설사 진료"),n=n.replace(/Dental scaling/g,"치과/스케일링"),n=n.replace(/Medication renewal/g,"처방약 재발급"),n=n.replace(/Follow-up exam/g,"재진/경과 관찰"),n=n.replace(/Itch \/ Scratch/g,"가려움 / 긁음"),n=n.replace(/Limping \/ Joint/g,"절뚝임 / 관절"),n=n.replace(/Lethargic \/ Low energy/g,"기력 저하"),n=n.replace(/Coughing \/ Reverse sneeze/g,"기침 / 역재채기"),n=n.replace(/Loss of Appetite/g,"식욕 부진"),n=n.replace(/Skin redness \/ Rash/g,"피부 발진 / 붉어짐"),n=n.replace(/Ear shaking/g,"귀 털기 / 귓병"),n=n.replace(/0\.5 cup/g,"0.5 컵"),n=n.replace(/1\.0 cup/g,"1.0 컵"),n=n.replace(/1\.5 cups/g,"1.5 컵"),n=n.replace(/2\.0 cups/g,"2.0 컵"),n=n.replace(/Full bowl/g,"한 그릇 가득"),n=n.replace(/Special treats/g,"특별 간식"),n}else{let n=h;return n=n.replace(/우다다/g,"Zoomy"),n=n.replace(/도도함/g,"Regal"),n=n.replace(/눈치봄/g,"Guilty"),n=n.replace(/무덤덤/g,"Unbothered"),n=n.replace(/천방지축/g,"Feral"),n=n.replace(/행복함/g,"Happy"),n=n.replace(/차분함/g,"Calm"),n=n.replace(/^응가\s+(\d+)단계/,"Type $1"),n=n.replace(/^쉬야\b/,"Pee"),n=n.replace(/^구토\s+·\s+(\d+)단계/,"Vomit · Type $1"),n=n.replace(/^구토\b/,"Vomit"),n=n.replace(/^산책\b/,"Walk"),n=n.replace(/^식사:\s*/,"Meal: "),n=n.replace(/^병원 진료:\s*/,"Vet visit: "),n=n.replace(/^증상:\s*/,"Symptom: "),n=n.replace(/^체중 측정:\s*/,"Weigh-in: "),n=n.replace(/단단한 토끼똥/g,"hard pellets"),n=n.replace(/울퉁불퉁한 변/g,"lumpy log"),n=n.replace(/약간 갈라진 변/g,"cracked log"),n=n.replace(/완벽한 황금변 \(최고\)/g,"textbook — the dream"),n=n.replace(/무른 덩어리변/g,"soft blobs"),n=n.replace(/형태 없는 묽은변/g,"mushy"),n=n.replace(/설사\/수분성 액체/g,"liquid"),n}}function tl(h){const e=[];let o=[],n="",a=!1;for(let l=0;l<h.length;l++){const d=h[l],p=h[l+1];a?d==='"'?p==='"'?(n+='"',l++):a=!1:n+=d:d==='"'?a=!0:d===","?(o.push(n),n=""):d==="\r"?(p===`
`&&l++,o.push(n),e.push(o),o=[],n=""):d===`
`?(o.push(n),e.push(o),o=[],n=""):n+=d}return(n.length>0||o.length>0)&&(o.push(n),e.push(o)),e}function Ji(h){const e=(h||"").trim(),o=e.toLowerCase();return o==="reynold"||o==="reynold ismail"||o==="reyn"?"reyn":o==="youngrok lee"||o==="youngrok"||o==="young lee"||o==="young"?"youngrok":e||"reyn"}function Ln(h){const e=(h||"").trim(),o=e.toLowerCase();return o==="watson"||o==="jjols"?"jjols":e||"jjols"}function el(h){switch((h||"").trim().toLowerCase()){case"poop":return"poop";case"pee":return"pee";case"walk":return"walk";case"food":case"treat":return"food";case"water":return"water";case"nap":case"sleep":case"play":case"playing":case"playpen":case"daycare":case"training":return"playing";case"medicine":case"medication":return"medicine";case"vomit":case"throwup":return"vomit";case"weight":case"weigh":return"weight";case"grooming":case"bath":case"teeth brushing":return"grooming";case"hospital":case"vet":case"clinic":case"doctor":return"vet";case"accident":return"pee";case"eat grass":case"temperature":case"crying":case"coughing":case"symptom":case"illness":case"scratch":return"symptom";default:return"playing"}}function aa(h,e){const o=(h||"").trim(),n=(e||"").trim();if(!o&&!n)return new Date().toISOString();if(o&&n){const a=`${o} ${n} UTC`,l=new Date(a);if(!isNaN(l.getTime()))return l.toISOString()}if(o){const a=new Date(o);if(!isNaN(a.getTime()))return a.toISOString()}return new Date().toISOString()}function il(h){const e=tl(h);if(e.length<2)throw new Error("CSV file is empty or missing data rows.");const o=e[0].map(p=>p.trim()),n={};o.forEach((p,f)=>{n[p.toLowerCase()]=f});const a=(p,f)=>{const m=n[f.toLowerCase()];if(m===void 0||m>=p.length)return"";let y=(p[m]||"").trim();return y.startsWith('"')&&y.endsWith('"')&&(y=y.slice(1,-1).trim()),y},l=(p,f)=>{const m=a(p,f);if(!m||m==="-"||m==="0"||m==="0.0")return;const y=parseFloat(m);return isNaN(y)?void 0:y},d=[];for(let p=1;p<e.length;p++){const f=e[p];if(f.length<=1&&(!f[0]||f[0].trim()===""))continue;const m=a(f,"Pet"),y=Ln(m),x=a(f,"Event_Type"),_=a(f,"Log_Date"),F=a(f,"Log_Time (UTC+00:00)")||a(f,"Log_Time"),P=a(f,"User_Name"),$=a(f,"Comment");if(!x&&!_&&!F)continue;const N={pet:y,eventType:x||"Unknown",logDate:_,logTime:F,userName:P||"reyn",comment:$||void 0,startDate:a(f,"Start_Date")||void 0,startTime:a(f,"Start_Time (UTC+00:00)")||a(f,"Start_Time")||void 0,endDate:a(f,"End_Date")||void 0,endTime:a(f,"End_Time (UTC+00:00)")||a(f,"End_Time")||void 0,duration:a(f,"Duration")||void 0,quantityNumber:l(f,"Quantity_Number"),quantityUnit:a(f,"Quantity_Unit")||void 0,temperatureC:l(f,"Temperature_(C)"),temperatureF:l(f,"Temperature_(F)"),weightKg:l(f,"Weight_(Kg)"),weightLbs:l(f,"Weight_(P)")||l(f,"Weight_(Lbs)"),medicineType:a(f,"Medicine_Type")||void 0,stoolQuality:a(f,"Stool_Quality")||void 0,vaccineName:a(f,"Vaccine_Name")||void 0,vaccineExpiration:a(f,"Vaccine_Expiration")||void 0,bloodGlucoseNumber:l(f,"Blood_Glucose_Number"),bloodGlucoseUnit:a(f,"Blood_Glucose_Unit")||void 0};d.push(N)}return d}function ol(h){if(h.length===0)return{sourceType:"csv",totalCount:0,petName:"Unknown",earliestDate:"",latestDate:"",countsByType:{},countsByUser:{},sampleItems:[]};const e={},o={},n={};let a="",l="";const d=[];for(let m=0;m<h.length;m++){const y=h[m],x=y.eventType||"Unknown";e[x]=(e[x]||0)+1;const _=Ji(y.userName);o[_]=(o[_]||0)+1;const F=Ln(y.pet);n[F]=(n[F]||0)+1;const P=aa(y.logDate,y.logTime);(!a||P<a)&&(a=P),(!l||P>l)&&(l=P),d.length<5&&d.push({timestamp:P,pet:F,eventType:y.eventType,user:_,note:y.comment})}let p="jjols",f=0;for(const[m,y]of Object.entries(n))y>f&&(f=y,p=m);return{sourceType:"csv",totalCount:h.length,petName:p,earliestDate:a,latestDate:l,countsByType:e,countsByUser:o,sampleItems:d}}function nl(h,e,o){return h.map(n=>{const a=el(n.eventType),l=Ji(n.userName),d=Ln(n.pet),p=aa(n.logDate,n.logTime),f={originalEvent:n.eventType,originalUserName:n.userName,originalPetName:n.pet,petName:d,source:"csv_import",importedAt:new Date().toISOString()},m=(n.eventType||"").trim().toLowerCase();return m==="nap"||m==="sleep"?f.subcategory="nap":m==="training"?f.subcategory="training":m==="bath"?f.subcategory="bath":m==="teeth brushing"?f.subcategory="teeth_brushing":m==="treat"?f.subcategory="treat":m==="hospital"?f.visitReason="Hospital":m==="accident"?f.isAccident=!0:m==="eat grass"?f.symptom="Eat grass":m==="temperature"?f.symptom="Temperature":m==="crying"?f.symptom="Crying":m==="coughing"?f.symptom="Coughing":m==="playpen"?f.locationName="Playpen":m==="daycare"&&(f.locationName="Daycare"),n.weightKg!==void 0&&(f.weightKg=n.weightKg),n.weightLbs!==void 0&&(f.weightLbs=n.weightLbs),n.temperatureC!==void 0&&(f.temperatureC=n.temperatureC),n.temperatureF!==void 0&&(f.temperatureF=n.temperatureF),n.medicineType&&(f.medication=n.medicineType),n.stoolQuality&&(f.stoolQuality=n.stoolQuality),n.vaccineName&&(f.vaccineName=n.vaccineName),n.vaccineExpiration&&(f.vaccineExpiration=n.vaccineExpiration),n.bloodGlucoseNumber!==void 0&&(f.bloodGlucoseNumber=n.bloodGlucoseNumber),n.bloodGlucoseUnit&&(f.bloodGlucoseUnit=n.bloodGlucoseUnit),n.duration&&n.duration!=="0"&&(f.duration=n.duration),n.quantityNumber!==void 0&&(f.quantityNumber=n.quantityNumber),n.quantityUnit&&(f.quantityUnit=n.quantityUnit),{householdId:e,petId:o,eventType:a,loggedByName:l,timestamp:p,notes:n.comment||"",metadata:f}})}const sl={poop:"poop",pee:"pee",walk:"walk",food:"food",water:"water",medicine:"medicine",medication:"medicine",grooming:"grooming",playing:"playing",play:"playing",vomit:"vomit",throwup:"vomit",weight:"weight",weigh:"weight",vet:"vet",clinic:"vet",doctor:"vet",symptom:"symptom",illness:"symptom",scratch:"symptom"};function al(h){const e=(h||"").trim().toLowerCase();return sl[e]||"playing"}function rl(h){let e;try{e=JSON.parse(h)}catch{throw new Error("Invalid JSON format: Unable to parse file.")}if(!Array.isArray(e))throw new Error("Invalid DogNotes format: Root must be an array of event records.");const o=[];for(const n of e)n&&typeof n=="object"&&"Time"in n&&"Event"in n&&o.push({Time:String(n.Time||new Date().toISOString()),"Pet Name":String(n["Pet Name"]||"Pet"),Event:String(n.Event||""),Note:String(n.Note||""),"Logged by":String(n["Logged by"]||"Owner")});return o}function ll(h){if(h.length===0)return{totalCount:0,petName:"Unknown",earliestDate:"",latestDate:"",countsByType:{},sampleItems:[]};const e={};let o=h[0].Time,n=h[0].Time;const a={};for(const p of h){const f=p.Event||"Unknown";e[f]=(e[f]||0)+1;const m=p["Pet Name"]||"Pet";a[m]=(a[m]||0)+1,p.Time<o&&(o=p.Time),p.Time>n&&(n=p.Time)}let l="Pet",d=0;for(const[p,f]of Object.entries(a))f>d&&(d=f,l=p);return{totalCount:h.length,petName:l,earliestDate:o,latestDate:n,countsByType:e,sampleItems:h.slice(0,5)}}function dl(h,e,o){return h.map(n=>({householdId:e,petId:o,eventType:al(n.Event),loggedByName:Ji(n["Logged by"]||"Owner"),timestamp:n.Time,notes:n.Note||"",metadata:{originalDogNotesEvent:n.Event,originalUserName:n["Logged by"]||"",importedAt:new Date().toISOString()}}))}function cl(h,e){const o=h.trim();if(e&&e.toLowerCase().endsWith(".json")||o.startsWith("[")||o.startsWith("{"))try{const a=rl(o),l=ll(a),d={},p=[];for(const m of a){const y=Ji(m["Logged by"]);d[y]=(d[y]||0)+1,p.length<5&&p.push({timestamp:m.Time,pet:m["Pet Name"],eventType:m.Event,user:y,note:m.Note})}const f={sourceType:"json",totalCount:l.totalCount,petName:l.petName,earliestDate:l.earliestDate,latestDate:l.latestDate,countsByType:l.countsByType,countsByUser:d,sampleItems:p};return{type:"json",rawItems:a,summary:f}}catch(a){if(e&&e.toLowerCase().endsWith(".json"))throw a}try{const a=il(o),l=ol(a);return{type:"csv",rawItems:a,summary:l}}catch(a){throw new Error(`Failed to parse import file. Supported formats are CSV (e.g. report.csv) and DogNotes JSON. Detail: ${a.message}`)}}function hl(h,e,o){return h.type==="csv"?nl(h.rawItems,e,o):dl(h.rawItems,e,o).map(a=>({...a,loggedByName:Ji(a.loggedByName)}))}function pl(h,e){const o=Math.abs(h-e)%1440;return o>720?1440-o:o}function vo(h){const e=h.getHours(),o=h.getMinutes(),n=o===0?":00":`:${o.toString().padStart(2,"0")}`,a=e>=12?"pm":"am",l=e%12===0?12:e%12,d=`${l}${n} ${a}`,f=`${e>=12?"오후":"오전"} ${l}${n}`,m=`${l}${n}`,y=`${l}${n}`;return{en:d,ko:f,hmEn:m,hmKo:y}}function ra(h,e,o=new Date){const n=o.getTime(),a=h.filter(M=>M.petId===e).map(M=>({...M,date:new Date(M.timestamp)})).filter(M=>!isNaN(M.date.getTime())).sort((M,K)=>M.date.getTime()-K.date.getTime()),l=a.filter(M=>M.eventType==="poop"),d=a.filter(M=>M.eventType==="food"),p=a.filter(M=>M.eventType==="walk");if(l.length===0)return{hasData:!1,predictedTimestamp:null,timeDisplay:"Log to predict",timeDisplayKo:"기록 대기 중",subtext:"Record events to unlock AI timing prediction.",subtextKo:"이벤트를 기록하면 다음 배변 시간을 예측합니다.",progressPercent:0,isOverdue:!1,isTomorrow:!1,confidence:"low",predictionReason:"cold_start"};const y=l[l.length-1].date.getTime(),_=Math.max(0,n-y)/(1e3*60*60),F=new Set;for(const M of l)F.add(M.date.toISOString().split("T")[0]);const P=Math.max(1,F.size),$=l.length/P,N=[];for(let M=1;M<l.length;M++){const K=(l[M].date.getTime()-l[M-1].date.getTime())/36e5;K>=.33&&K<=36&&N.push(K)}let R=12,Z=2;if(N.length>0){const M=[...N].sort((pt,Pt)=>pt-Pt);R=M[Math.floor(M.length*.5)];const K=M[Math.max(0,Math.floor(M.length*.1))];Z=Math.max(1.5,Math.min(3.5,K))}else $<=1.2?(R=24,Z=2.5):(R=Math.max(4,24/$),Z=Math.min(2.5,R*.25));const j=new Array(96).fill(0),rt=45,I=21;for(const M of l){const K=Math.max(0,(n-M.date.getTime())/864e5),pt=Math.max(.08,Math.exp(-Math.LN2*K/I)),Pt=M.date.getHours()*60+M.date.getMinutes();for(let Rt=0;Rt<96;Rt++){const Jt=Rt*15,de=pl(Jt,Pt),T=pt*Math.exp(-(de*de)/(2*rt*rt));j[Rt]+=T}}const S=Math.max(...j,.001),ct=[];for(let M=0;M<96;M++){const K=j[(M-1+96)%96],pt=j[M],Pt=j[(M+1)%96];if(pt>K&&pt>=Pt&&pt>=S*.25){const Rt=2*(2*pt-K-Pt),Jt=Rt>1e-6?(Pt-K)/Rt:0,T=(Math.round((M+Jt)*15)%1440+1440)%1440;ct.push({minuteOfDay:T,density:pt})}}ct.sort((M,K)=>M.minuteOfDay-K.minuteOfDay);const A=ct.length>0?ct.map(M=>M.minuteOfDay):l.length>0?[l[l.length-1].date.getHours()*60+l[l.length-1].date.getMinutes()]:[480],O=[];for(const M of l){const K=d.filter(pt=>pt.date.getTime()<M.date.getTime()&&M.date.getTime()-pt.date.getTime()<=126e5);if(K.length>0){const pt=K[K.length-1];O.push((M.date.getTime()-pt.date.getTime())/6e4)}}const mt=O.length>=2?Math.max(20,Math.min(75,Math.round(O.sort((M,K)=>M-K)[Math.floor(O.length/2)]))):35,Y=[];for(const M of l){const K=p.filter(pt=>z(pt.date,M.date,0,90));if(K.length>0){const pt=K[K.length-1];Y.push((M.date.getTime()-pt.date.getTime())/6e4)}}function z(M,K,pt,Pt){const Rt=(K.getTime()-M.getTime())/6e4;return Rt>=pt&&Rt<=Pt}const lt=Y.length>=2?Math.max(10,Math.min(45,Math.round(Y.sort((M,K)=>M-K)[Math.floor(Y.length/2)]))):15,G=d.filter(M=>M.date.getTime()>y),dt=G[G.length-1],nt=p.filter(M=>M.date.getTime()>y),$t=nt[nt.length-1],H=y+Z*36e5;let xt,W="routine_peak",st=!1,wt=!1,St=!1,vt=null;if($t&&(n-$t.date.getTime())/6e4<=90){const K=new Date($t.date.getTime()+lt*6e4);K.getTime()>=H-15*6e4&&(vt=K)}let ot=null;if(dt&&(n-dt.date.getTime())/6e4<=210){const K=new Date(dt.date.getTime()+mt*6e4);K.getTime()>=H-15*6e4&&(ot=K)}if(vt&&vt.getTime()>n-45*6e4)xt=vt,W="walk_boost",n>xt.getTime()+20*6e4&&(st=!0);else if(ot&&ot.getTime()>n-60*6e4)xt=ot,W="meal_boost",n>xt.getTime()+30*6e4&&(st=!0);else{const M=new Date(o.getFullYear(),o.getMonth(),o.getDate(),0,0,0,0),K=new Date(o.getFullYear(),o.getMonth(),o.getDate()+1,0,0,0,0),pt=A.map(T=>new Date(M.getTime()+T*6e4)),Pt=A.map(T=>new Date(K.getTime()+T*6e4)),Rt=pt.find(T=>T.getTime()<=n&&n-T.getTime()<=2.5*36e5&&T.getTime()>=H-30*6e4),Jt=pt.find(T=>T.getTime()>n&&T.getTime()>=H),de=$>1.2&&_>R*1.35&&o.getHours()>=7&&o.getHours()<=22||$<=1.2&&_>=20&&o.getHours()>=14;if(Rt)xt=Rt,st=!0,W="overdue";else if(Jt)xt=Jt,W="routine_peak",pt.some(B=>B.getTime()<n&&n-B.getTime()>2.5*36e5)&&(St=!0);else if(de)if(st=!0,W="overdue",Pt[0]&&Pt[0].getTime()-n<=2*36e5)xt=Pt[0];else{const T=new Date(n+12e5);T.setMinutes(Math.round(T.getMinutes()/15)*15,0,0),xt=T}else wt=!0,xt=Pt[0],W="routine_peak",pt.some(B=>B.getTime()<n)&&(St=!0)}let J="low",Dt=30;l.length>=10?(J="high",Dt=15):l.length>=3?(J="medium",Dt=25):(J="low",Dt=45),(W==="walk_boost"||W==="meal_boost")&&(Dt=15);const Zt=new Date(xt.getTime()-Dt*6e4),Vt=new Date(xt.getTime()+Dt*6e4),Gt=vo(xt),be=vo(Zt),le=vo(Vt),Le=`${be.hmEn}–${le.en}`,We=`${be.hmKo}–${le.hmKo}`;let Se=wt?`Tomorrow ~${Gt.en} (${Le})`:`~${Gt.en} (${Le})`,ye=wt?`내일 ~${Gt.ko} (${We})`:`~${Gt.ko} (${We})`;st&&(Se=`Due now (~${Gt.en})`,ye=`곧 배변 예상 (~${Gt.ko})`);let qt="Regular routine peak window.",Ht="규칙적인 일과 시간대입니다.";if(st)qt=`Due anytime · ~${_.toFixed(1)}h since last poop.`,Ht=`배변 주기 경과 · 마지막 배변 후 ~${_.toFixed(1)}시간 경과.`;else if(W==="walk_boost")qt="Walk activity boost · High probability during or after walk.",Ht="산책 활동 반영 · 산책 중 또는 직후 배변 확률 높음.";else if(W==="meal_boost"&&dt){const M=vo(dt.date);qt=`Expected ~${mt}m after ${M.en} meal.`,Ht=`${M.ko} 식사 후 약 ${mt}분 내 예상.`}else St?(qt=wt?"Earlier routine windows passed · Next window tomorrow morning.":`Earlier routine window elapsed · Next expected ~${Gt.en}.`,Ht=wt?"오늘 루틴 시간 경과 · 내일 아침 예상 시간대입니다.":`이전 루틴 시간 경과 · 다음 예상 시간대 ~${Gt.ko}.`):wt?(qt="Next routine window tomorrow morning.",Ht="내일 아침 루틴 예상 시간대입니다."):l.length>=3&&(qt=`Routine peak based on ${l.length} recorded events.`,Ht=`기록 데이터 ${l.length}개 기반 루틴 분석.`);let ie=50;if(st)ie=95;else{const M=xt.getTime()-y;if(M>0){const K=n-y;ie=Math.round(K/M*100),ie=Math.max(5,Math.min(95,ie))}}const je=Math.max(0,(xt.getTime()-n)/(1e3*60*60));return{hasData:!0,predictedTimestamp:xt.toISOString(),windowStart:Zt.toISOString(),windowEnd:Vt.toISOString(),timeDisplay:Se,timeDisplayKo:ye,subtext:qt,subtextKo:Ht,progressPercent:ie,isOverdue:st,isTomorrow:wt,confidence:J,estimatedHoursRemaining:Math.round(je*10)/10,predictionReason:W}}function ul(h,e,o=new Date){const n=h.filter(I=>I.petId===e),a=Array.from({length:24},(I,S)=>({hour:S,poopCount:0,peeCount:0,totalCount:0})),l={poop:0,pee:0,walk:0,food:0,water:0,medicine:0,grooming:0,playing:0,vomit:0,weight:0,vet:0,symptom:0,nap:0,training:0},d={},p=new Map,f=new Set,m=new Date(o.getTime()-10080*60*1e3);let y=0,x=0,_=null;for(const I of n){const S=new Date(I.timestamp);if(isNaN(S.getTime()))continue;const ct=S.getHours(),A=S.toISOString().split("T")[0];f.add(A),a[ct]&&(a[ct].totalCount++,I.eventType==="poop"&&a[ct].poopCount++,I.eventType==="pee"&&a[ct].peeCount++),I.eventType in l&&l[I.eventType]++,(!d[I.eventType]||new Date(d[I.eventType].timestamp)<S)&&(d[I.eventType]=I),p.has(A)||p.set(A,{date:A,poop:0,pee:0,food:0,walk:0,medicine:0,vomit:0,other:0,total:0});const O=p.get(A);O.total++,I.eventType==="poop"?O.poop++:I.eventType==="pee"?O.pee++:I.eventType==="food"?O.food++:I.eventType==="walk"?O.walk++:I.eventType==="medicine"?O.medicine++:I.eventType==="vomit"?O.vomit++:O.other++,S>=m&&(I.eventType==="vomit"&&y++,I.eventType==="medicine"&&x++),I.eventType==="poop"&&(!_||S>_)&&(_=S)}const F=Array.from(f).sort();let P=0,$=0,N=0,R=null;for(const I of F){const S=new Date(I);if(!R)N=1;else{const ct=Math.round((S.getTime()-R.getTime())/864e5);ct===1?N++:ct>1&&(N=1)}N>$&&($=N),R=S}if(F.length>0){const I=new Date(o).toISOString().split("T")[0],S=new Date(o.getTime()-1440*60*1e3).toISOString().split("T")[0],ct=F[F.length-1];ct===I||ct===S?P=N:P=0}let Z=0;_&&(Z=Math.max(0,Math.floor((o.getTime()-_.getTime())/(1440*60*1e3))));const j=Array.from(p.values()).sort((I,S)=>I.date.localeCompare(S.date)),rt=ra(h,e,o);return{petId:e,currentStreakDays:P,longestStreakDays:$,totalEventsLogged:n.length,hourlyDistribution:a,dailyFrequencies:j,eventCountsByType:l,lastEventByType:d,nextPoopPrediction:rt,walkStats:{totalWalks:l.walk||0,totalDistanceMeters:0,avgWalkMinutes:25},healthAlerts:{vomitsLast7Days:y,medicinesLast7Days:x,daysWithoutPoop:Z}}}const gn=(h,e)=>e.some(o=>h instanceof o);let Os,Rs;function fl(){return Os||(Os=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gl(){return Rs||(Rs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mn=new WeakMap,cn=new WeakMap,Po=new WeakMap;function ml(h){const e=new Promise((o,n)=>{const a=()=>{h.removeEventListener("success",l),h.removeEventListener("error",d)},l=()=>{o(Be(h.result)),a()},d=()=>{n(h.error),a()};h.addEventListener("success",l),h.addEventListener("error",d)});return Po.set(e,h),e}function vl(h){if(mn.has(h))return;const e=new Promise((o,n)=>{const a=()=>{h.removeEventListener("complete",l),h.removeEventListener("error",d),h.removeEventListener("abort",d)},l=()=>{o(),a()},d=()=>{n(h.error||new DOMException("AbortError","AbortError")),a()};h.addEventListener("complete",l),h.addEventListener("error",d),h.addEventListener("abort",d)});mn.set(h,e)}let vn={get(h,e,o){if(h instanceof IDBTransaction){if(e==="done")return mn.get(h);if(e==="store")return o.objectStoreNames[1]?void 0:o.objectStore(o.objectStoreNames[0])}return Be(h[e])},set(h,e,o){return h[e]=o,!0},has(h,e){return h instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in h}};function la(h){vn=h(vn)}function xl(h){return gl().includes(h)?function(...e){return h.apply(xn(this),e),Be(this.request)}:function(...e){return Be(h.apply(xn(this),e))}}function bl(h){return typeof h=="function"?xl(h):(h instanceof IDBTransaction&&vl(h),gn(h,fl())?new Proxy(h,vn):h)}function Be(h){if(h instanceof IDBRequest)return ml(h);if(cn.has(h))return cn.get(h);const e=bl(h);return e!==h&&(cn.set(h,e),Po.set(e,h)),e}const xn=h=>Po.get(h);function yl(h,e,{blocked:o,upgrade:n,blocking:a,terminated:l}={}){const d=indexedDB.open(h,e),p=Be(d);return n&&d.addEventListener("upgradeneeded",f=>{n(Be(d.result),f.oldVersion,f.newVersion,Be(d.transaction),f)}),o&&d.addEventListener("blocked",f=>o(f.oldVersion,f.newVersion,f)),p.then(f=>{l&&f.addEventListener("close",()=>l()),a&&f.addEventListener("versionchange",m=>a(m.oldVersion,m.newVersion,m))}).catch(()=>{}),p}const wl=["get","getKey","getAll","getAllKeys","count"],_l=["put","add","delete","clear"],hn=new Map;function Ws(h,e){if(!(h instanceof IDBDatabase&&!(e in h)&&typeof e=="string"))return;if(hn.get(e))return hn.get(e);const o=e.replace(/FromIndex$/,""),n=e!==o,a=_l.includes(o);if(!(o in(n?IDBIndex:IDBObjectStore).prototype)||!(a||wl.includes(o)))return;const l=async function(d,...p){const f=this.transaction(d,a?"readwrite":"readonly");let m=f.store;return n&&(m=m.index(p.shift())),(await Promise.all([m[o](...p),a&&f.done]))[0]};return hn.set(e,l),l}la(h=>({...h,get:(e,o,n)=>Ws(e,o)||h.get(e,o,n),has:(e,o)=>!!Ws(e,o)||h.has(e,o)}));const kl=["continue","continuePrimaryKey","advance"],js={},bn=new WeakMap,da=new WeakMap,Fl={get(h,e){if(!kl.includes(e))return h[e];let o=js[e];return o||(o=js[e]=function(...n){bn.set(this,da.get(this)[e](...n))}),o}};async function*$l(...h){let e=this;if(e instanceof IDBCursor||(e=await e.openCursor(...h)),!e)return;e=e;const o=new Proxy(e,Fl);for(da.set(o,e),Po.set(o,xn(e));e;)yield o,e=await(bn.get(o)||e.continue()),bn.delete(o)}function Hs(h,e){return e===Symbol.asyncIterator&&gn(h,[IDBIndex,IDBObjectStore,IDBCursor])||e==="iterate"&&gn(h,[IDBIndex,IDBObjectStore])}la(h=>({...h,get(e,o,n){return Hs(e,o)?$l:h.get(e,o,n)},has(e,o){return Hs(e,o)||h.has(e,o)}}));const Pl="dooty-offline-db",Ll=1;let pn=null;function ee(){return pn||(pn=yl(Pl,Ll,{upgrade(h){if(!h.objectStoreNames.contains("events")){const e=h.createObjectStore("events",{keyPath:"id"});e.createIndex("by-pet","petId"),e.createIndex("by-timestamp","timestamp")}h.objectStoreNames.contains("pending_events")||h.createObjectStore("pending_events",{keyPath:"localId"}),h.objectStoreNames.contains("meta")||h.createObjectStore("meta")}})),pn}async function Xe(h){try{const o=(await ee()).transaction("events","readwrite");for(const n of h)await o.store.put(n);await o.done}catch(e){console.warn("Could not save events offline:",e)}}async function Kt(h,e){try{const o=await ee();let n=await o.getAllFromIndex("events","by-pet",h);const l=(await o.getAll("events")).filter(d=>d.petId!==h&&(d.isOfflinePending||d.id.startsWith("offline-")));if(l.length>0){const d=o.transaction("events","readwrite");for(const p of l)p.petId=h,await d.store.put(p),n.some(f=>f.id===p.id)||n.push(p);await d.done}return e!=null&&e.startDate,e!=null&&e.endDate,n.sort((d,p)=>new Date(p.timestamp).getTime()-new Date(d.timestamp).getTime()),e!=null&&e.limit&&e.limit>0,n}catch(o){return console.warn("Could not retrieve offline events:",o),[]}}async function Sl(h){try{return await(await ee()).get("meta",`last_sync_${h}`)||null}catch{return null}}async function Us(h,e){try{await(await ee()).put("meta",e,`last_sync_${h}`)}catch(o){console.warn("Failed to set last sync timestamp:",o)}}async function Tl(h){try{await(await ee()).delete("meta",`last_sync_${h}`)}catch(e){console.warn("Failed to clear last sync timestamp:",e)}}async function Zs(h){const e="offline-"+Date.now()+"-"+Math.random().toString(36).substring(2,7);try{const o=await ee();await o.put("pending_events",{localId:e,dto:h,createdAt:new Date().toISOString()});const n={id:e,householdId:h.householdId,petId:h.petId,eventType:h.eventType,loggedByName:h.loggedByName||"Me",timestamp:h.timestamp,notes:h.notes,latitude:h.latitude,longitude:h.longitude,metadata:h.metadata,createdAt:new Date().toISOString(),isOfflinePending:!0,localId:e};await o.put("events",n)}catch(o){console.warn("Failed to enqueue pending offline event:",o)}return e}async function ca(){try{return await(await ee()).getAll("pending_events")}catch{return[]}}async function Cl(h){try{const e=await ee();await e.delete("pending_events",h),await e.delete("events",h)}catch(e){console.warn("Failed to remove pending event:",e)}}async function El(h,e){try{const o=await ee();await o.delete("pending_events",h),await o.delete("events",h),await o.put("events",e)}catch(o){console.warn("Failed to replace pending event with server event:",o)}}async function ti(h,e,o,n){try{const a=await ee(),l=await a.getAll("pending_events");for(const d of l)if((!o||d.dto.petId===o)&&(!n||d.dto.householdId===n)){d.dto.petId=h,d.dto.householdId=e,await a.put("pending_events",d);const f=await a.get("events",d.localId);f&&(f.petId=h,f.householdId=e,await a.put("events",f))}}catch(a){console.warn("Failed to rekey pending events:",a)}}async function zl(h){try{const e=await ee();await e.delete("events",h),await e.delete("pending_events",h)}catch(e){console.warn("Failed to delete offline event:",e)}}async function Gs(h){try{await(await ee()).put("events",h)}catch(e){console.warn("Failed to update offline event:",e)}}const un={},Al="https://watslog-bff.warmsynthsiloveyou.workers.dev/api";function Ml(){const h=un==null?void 0:un.VITE_API_URL;if(h)return h.replace(/\/+$/,"");if(typeof window<"u"){const e=window.location.hostname;if(e.endsWith("github.io")||!e.includes("localhost")&&!e.includes("127.0.0.1"))return Al}return"/api"}const ut=Ml();let De=0;const yn=new Set;let xo=null;function fn(){const h=De;yn.forEach(e=>{try{e(h)}catch(o){console.error("API activity listener error:",o)}})}function Dl(h){return yn.add(h),h(De),()=>{yn.delete(h)}}async function gt(h,e){xo&&(clearTimeout(xo),xo=null),De++,fn();try{return await fetch(h,e)}finally{De=Math.max(0,De-1),De===0?xo=setTimeout(()=>{De===0&&fn()},250):fn()}}function yt(){const h={"Content-Type":"application/json"},e=localStorage.getItem("dooty_auth_token");return e&&(h.Authorization=`Bearer ${e}`),h}class ft{static async signUp(e){const o=await gt(`${ut}/auth/signup`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!o.ok){const n=await o.json().catch(()=>({}));throw new Error(n.error||"Failed to sign up")}return o.json()}static async signIn(e){const o=await gt(`${ut}/auth/signin`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!o.ok){const n=await o.json().catch(()=>({}));throw new Error(n.error||"Invalid email or password")}return o.json()}static async getMe(){const e=await gt(`${ut}/auth/me`,{headers:yt()});if(!e.ok)throw new Error("Unauthorized");return e.json()}static async joinAuthenticated(e,o){const n=await gt(`${ut}/households/join-authenticated`,{method:"POST",headers:yt(),body:JSON.stringify({code:e,role:o})});if(!n.ok){const a=await n.json().catch(()=>({}));throw new Error(a.error||"Failed to join household")}return n.json()}static async claimHousehold(e,o){const n=await gt(`${ut}/households/claim`,{method:"POST",headers:yt(),body:JSON.stringify({householdId:e,role:o})});if(!n.ok){const a=await n.json().catch(()=>({}));throw new Error(a.error||"Failed to claim household")}return n.json()}static async createHousehold(e){const o=await gt(`${ut}/households`,{method:"POST",headers:yt(),body:JSON.stringify(e)});if(!o.ok){const n=await o.json().catch(()=>({}));throw new Error(n.error||"Failed to create household")}return o.json()}static async getHousehold(e){const o=await gt(`${ut}/households/${e}`,{headers:yt()});if(!o.ok)throw new Error("Failed to fetch household");return o.json()}static async removeMember(e,o){if(!(await gt(`${ut}/households/${e}/members/${o}`,{method:"DELETE",headers:yt()})).ok)throw new Error("Failed to remove member")}static async createInviteCode(e){const o=await gt(`${ut}/households/${e}/invites`,{method:"POST",headers:yt()});if(!o.ok)throw new Error("Failed to create invite code");return o.json()}static async joinHousehold(e,o,n){const a=await gt(`${ut}/households/join`,{method:"POST",headers:yt(),body:JSON.stringify({code:e,displayName:o,role:n})});if(!a.ok){const l=await a.json().catch(()=>({}));throw new Error(l.error||"Failed to join household")}return a.json()}static async getPets(e){const o=await gt(`${ut}/households/${e}/pets`,{headers:yt()});if(!o.ok)throw new Error("Failed to fetch pets");return o.json()}static async updatePet(e,o){const n=await gt(`${ut}/pets/${e}`,{method:"PATCH",headers:yt(),body:JSON.stringify(o)});if(!n.ok)throw new Error("Failed to update pet");return n.json()}static async updateMember(e,o,n){const a=await gt(`${ut}/households/${e}/members/${o}`,{method:"PATCH",headers:yt(),body:JSON.stringify(n)});if(!a.ok)throw new Error("Failed to update member");return a.json()}static async getEvents(e,o){if(!navigator.onLine)return Kt(e);try{const n=typeof o=="number"?{limit:o}:o||{},a=new URLSearchParams;n.limit&&a.set("limit",n.limit.toString()),n.offset&&a.set("offset",n.offset.toString()),n.since&&a.set("since",n.since),n.startDate&&a.set("startDate",n.startDate),n.endDate&&a.set("endDate",n.endDate);const l=a.toString(),d=l?`${ut}/pets/${e}/events?${l}`:`${ut}/pets/${e}/events`,p=await gt(d,{headers:yt()});if(!p.ok)throw new Error("Failed to fetch events from server");const f=await p.json();return await Xe(f),f}catch{return Kt(e)}}static async syncEvents(e,o){if(!navigator.onLine)return Kt(e);try{const n=await Sl(e),a=new Date().toISOString();if(n){const l=await this.getEvents(e,{since:n,limit:1e3});return l&&l.length>0&&await Xe(l),await Us(e,a),Kt(e)}else{const l=new Date(Date.now()-7776e6).toISOString(),d=await this.getEvents(e,{startDate:l,limit:500});return d&&d.length>0&&(await Xe(d),o==null||o(d.length)),await Us(e,a),this.backfillOlderEvents(e,l,o).catch(p=>{console.warn("Background historical backfill error:",p)}),Kt(e)}}catch(n){return console.warn("Sync failed, using offline fallback:",n),Kt(e)}}static async backfillOlderEvents(e,o,n){if(navigator.onLine)try{let a=o,l=!0;const d=500;for(;l;){const p=await this.getEvents(e,{endDate:a,limit:d});if(!p||p.length===0){l=!1;break}if(await Xe(p),n==null||n(p.length),p.length<d)l=!1;else{const f=p[p.length-1];f&&f.timestamp&&f.timestamp!==a?a=f.timestamp:l=!1}}}catch(a){console.warn("Backfill chunk failed:",a)}}static async createEvent(e){if(!navigator.onLine){const o=await Zs(e);return{id:o,householdId:e.householdId,petId:e.petId,eventType:e.eventType,loggedByName:e.loggedByName||"Me",timestamp:e.timestamp,notes:e.notes,latitude:e.latitude,longitude:e.longitude,metadata:e.metadata,createdAt:new Date().toISOString(),isOfflinePending:!0,localId:o}}try{const o=await gt(`${ut}/events`,{method:"POST",headers:yt(),body:JSON.stringify(e)});if(!o.ok)throw new Error("Server returned error creating event");const n=await o.json();return await Xe([n]),n}catch(o){console.warn("Network request failed, falling back to offline queue:",o);const n=await Zs(e);return{id:n,householdId:e.householdId,petId:e.petId,eventType:e.eventType,loggedByName:e.loggedByName||"Me",timestamp:e.timestamp,notes:e.notes,latitude:e.latitude,longitude:e.longitude,metadata:e.metadata,createdAt:new Date().toISOString(),isOfflinePending:!0,localId:n}}}static async updateEvent(e,o){if(!navigator.onLine){const a=(await Kt("")).find(l=>l.id===e);if(a){const l={...a,...o,eventType:o.eventType??a.eventType,notes:o.notes!==void 0?o.notes:a.notes,latitude:o.latitude!==void 0?o.latitude??void 0:a.latitude,longitude:o.longitude!==void 0?o.longitude??void 0:a.longitude,metadata:o.metadata!==void 0?o.metadata:a.metadata};return await Gs(l),l}}try{const n=await gt(`${ut}/events/${e}`,{method:"PATCH",headers:yt(),body:JSON.stringify(o)});if(!n.ok)throw new Error("Server returned error updating event");const a=await n.json();return await Gs(a),a}catch(n){throw console.warn("Network update failed:",n),n}}static async deleteEvent(e){if(await zl(e),!!navigator.onLine)try{const o=await gt(`${ut}/events/${e}`,{method:"DELETE",headers:yt()});if(!o.ok&&o.status!==404)throw new Error("Server returned error deleting event")}catch(o){console.warn("Network delete warning:",o)}}static async flushOfflineQueue(){if(!navigator.onLine)return 0;const e=await ca();if(e.length===0)return 0;try{const o=e.map(a=>a.dto),n=await gt(`${ut}/events/batch-sync`,{method:"POST",headers:yt(),body:JSON.stringify({events:o})});if(n.ok){const l=(await n.json().catch(()=>({}))).events||[];for(let p=0;p<e.length;p++){const f=e[p],m=l[p];m?await El(f.localId,m):await Cl(f.localId)}l.length>e.length&&await Xe(l.slice(e.length));const d=Array.from(new Set(e.map(p=>p.dto.petId)));for(const p of d)p&&await Tl(p);return e.length}}catch(o){console.warn("Failed to flush offline queue:",o)}return 0}static async importEvents(e){let n=0;for(let a=0;a<e.length;a+=500){const l=e.slice(a,a+500);let d=await gt(`${ut}/import/events`,{method:"POST",headers:yt(),body:JSON.stringify({events:l})});if(d.status===404&&(d=await gt(`${ut}/events/batch-sync`,{method:"POST",headers:yt(),body:JSON.stringify({events:l})})),!d.ok){const f=await d.json().catch(()=>({}));throw new Error(f.error||`Import batch failed (${d.status})`)}const p=await d.json();n+=p.importedCount||p.syncedCount||l.length}return{importedCount:n}}static async importDogNotes(e,o,n){const a=await gt(`${ut}/import/dognotes`,{method:"POST",headers:yt(),body:JSON.stringify({householdId:e,petId:o,items:n})});if(!a.ok)throw new Error("DogNotes import failed");return a.json()}static async getAnalytics(e,o){const n=new URLSearchParams;o!=null&&o.startDate&&n.set("startDate",o.startDate),o!=null&&o.endDate&&n.set("endDate",o.endDate);const a=n.toString(),l=a?`${ut}/pets/${e}/analytics?${a}`:`${ut}/pets/${e}/analytics`,d=await gt(l,{headers:yt()});if(!d.ok)throw new Error("Failed to fetch analytics");return d.json()}static async saveWalkRoute(e){const o=await gt(`${ut}/walks`,{method:"POST",headers:yt(),body:JSON.stringify(e)});if(!o.ok)throw new Error("Failed to save walk route");return o.json()}static async getWalkRoutes(e){const o=await gt(`${ut}/pets/${e}/walks`,{headers:yt()});if(!o.ok)throw new Error("Failed to fetch walk routes");return o.json()}static async getTreatmentSchedules(e){const o=await gt(`${ut}/pets/${e}/treatments`,{headers:yt()});if(!o.ok)throw new Error("Failed to fetch treatment schedules");return o.json()}static async createTreatmentSchedule(e,o){const n=await gt(`${ut}/pets/${e}/treatments`,{method:"POST",headers:yt(),body:JSON.stringify(o)});if(!n.ok)throw new Error("Failed to create treatment schedule");return n.json()}static async updateTreatmentSchedule(e,o){const n=await gt(`${ut}/treatments/${e}`,{method:"PATCH",headers:yt(),body:JSON.stringify(o)});if(!n.ok)throw new Error("Failed to update treatment schedule");return n.json()}static async deleteTreatmentSchedule(e){const o=await gt(`${ut}/treatments/${e}`,{method:"DELETE",headers:yt()});if(!o.ok)throw new Error("Failed to delete treatment schedule");return o.json()}}class Nl{constructor(){this.listeners=new Set,this.currentUser=null,this.currentHousehold=null,this.userHouseholds=[],this.currentPet=null,this.pets=[],this.events=[],this.activeTab="today",this.authView="signin",this.currentLocale="en",this.isOnline=navigator.onLine,this.pendingSyncCount=0,this.isSyncing=!1,this.isApiActive=!1,this.activeApiRequests=0,this.analyticsTimeRange="30d",this.userAvatar=localStorage.getItem("dooty_user_avatar")||"",this.track={poop:!0,pee:!0,vomit:!0,meds:!0,weight:!0,walk:!0,vet:!1,symptom:!1},this.nudges={push:!0,weekly:!0,gap:!0,vet:!1},this.pendingInvites=[],this.loggerModalOpen=!1,this.loggerEventType=null,this.editingEvent=null,this.photoModalOpen=!1,this.photoModalTarget="pet",this.photoModalTargetId="",this.photoModalCurrentAvatar="",this.photoModalTitle="",this.isLoading=!1,this.petSwitcherOpen=!1,this.treatmentsDrawerOpen=!1,this.treatments=[],this.historyMonthOffset=0,this.historySelectedDay=null,this.historyTypeFilters=[],this.historyMemberFilter="all",this.historySearchOpen=!1,this.historySearchQuery="",this.activeWalk=null,this.walkView=null,this.walkHomeAsk=!1,this.homeAsked=!1,this.walkSummaryData=null;const e=localStorage.getItem("dooty_locale");if(e&&(e==="en"||e==="ko"))this.currentLocale=e;else{const d=typeof navigator<"u"&&navigator.language||"";this.currentLocale=d.startsWith("ko")?"ko":"en"}typeof document<"u"&&(document.documentElement.lang=this.currentLocale,document.body.classList.toggle("lang-ko",this.currentLocale==="ko"));const o=localStorage.getItem("dooty_track_prefs");if(o)try{this.track={...this.track,...JSON.parse(o)}}catch(d){console.warn("Failed to parse track prefs:",d)}const n=localStorage.getItem("dooty_nudge_prefs");if(n)try{this.nudges={...this.nudges,...JSON.parse(n)}}catch(d){console.warn("Failed to parse nudge prefs:",d)}const a=localStorage.getItem("dooty_analytics_timerange");a&&["7d","30d","1y","all"].includes(a)&&(this.analyticsTimeRange=a);const l=localStorage.getItem("dooty_household_data");if(l)try{const d=JSON.parse(l);if(this.currentHousehold=d,this.pets=d.pets||[],this.pets.length>0){const p=localStorage.getItem("dooty_pet_id");this.currentPet=this.pets.find(f=>f.id===p)||this.pets[0],Kt(this.currentPet.id).then(f=>{f.length>0&&this.events.length===0&&(this.events=f,this.notify())})}this.loadPendingInvites(),this.loadTreatmentsForPet()}catch(d){console.warn("Failed to parse cached household data:",d)}window.addEventListener("online",()=>this.handleNetworkChange(!0)),window.addEventListener("offline",()=>this.handleNetworkChange(!1)),Dl(d=>{this.activeApiRequests=d,this.isApiActive=d>0,this.notify()})}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}notify(){this.listeners.forEach(e=>e())}get t(){return Xr[this.currentLocale]}setLocale(e){this.currentLocale=e,localStorage.setItem("dooty_locale",e),typeof document<"u"&&(document.documentElement.lang=e,document.body.classList.toggle("lang-ko",e==="ko")),this.notify()}setActiveTab(e){this.activeTab=e,this.notify()}openPetSwitcher(){this.petSwitcherOpen=!0,this.notify()}closePetSwitcher(){this.petSwitcherOpen=!1,this.notify()}selectPetById(e){const o=this.pets.find(n=>n.id===e);o&&(this.selectPet(o),this.closePetSwitcher())}openTreatmentsDrawer(){this.treatmentsDrawerOpen=!0,this.notify()}closeTreatmentsDrawer(){this.treatmentsDrawerOpen=!1,this.notify()}async loadTreatmentsForPet(e){var l;const o=e||((l=this.currentPet)==null?void 0:l.id)||"default",n=`dooty_treatments_${o}`,a=localStorage.getItem(n);if(a)try{const d=JSON.parse(a),p=new Date;p.setHours(0,0,0,0),this.treatments=d.map(f=>{if(f.nextDueAt){const m=new Date(f.nextDueAt);m.setHours(0,0,0,0);const y=Math.round((m.getTime()-p.getTime())/864e5);return{...f,due:y}}return f})}catch(d){console.warn("Failed to parse stored treatments:",d)}else{const d=new Date;d.setHours(0,0,0,0),this.treatments=[{id:"trt_flea_tick",petId:o,name:"Flea & tick",dose:"Bravecto spot-on",every:90,due:2,nextDueAt:new Date(d.getTime()+2*864e5).toISOString()},{id:"trt_heartworm",petId:o,name:"Heartworm",dose:"Milbemax chew",every:30,due:12,nextDueAt:new Date(d.getTime()+12*864e5).toISOString()},{id:"trt_dewormer",petId:o,name:"Dewormer",dose:"Panacur, 3 days",every:90,due:-3,nextDueAt:new Date(d.getTime()-3*864e5).toISOString()}],this.saveTreatments()}if(this.isAuthenticated&&o&&o!=="default")try{const d=await ft.getTreatmentSchedules(o);d&&d.length>0&&(this.treatments=d,this.saveTreatments(),this.notify())}catch(d){console.warn("Could not sync treatment schedules from cloud:",d)}}saveTreatments(){var n;const o=`dooty_treatments_${((n=this.currentPet)==null?void 0:n.id)||"default"}`;localStorage.setItem(o,JSON.stringify(this.treatments))}formatTreatmentLeft(e){const o=this.currentLocale==="ko";if(e<0){const n=Math.abs(e);return o?`${n}일 지남`:`${n} ${n===1?"day late":"days late"}`}return e===0?o?"오늘":"Today":e===1?o?"내일":"Tomorrow":o?`${e}일 후`:`in ${e} days`}formatTreatmentDueDate(e){const o=new Date;o.setDate(o.getDate()+e);const n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return this.currentLocale==="ko"?`${o.getMonth()+1}월 ${o.getDate()}일`:`${o.getDate()} ${n[o.getMonth()]}`}getTreatmentEveryLabel(e){const o=this.currentLocale==="ko";switch(e){case 7:return o?"1주일":"week";case 30:return o?"1개월":"month";case 90:return o?"3개월":"3 months";case 180:return o?"6개월":"6 months";case 365:return o?"1년":"year";default:return o?`${e}일`:`${e} days`}}getTreatmentSkin(e){const o=e<0,n=e>=0&&e<=3;return{bg:o?"#FF5A3C":n?"#FF9A3C":"#FFF",chip:o||n?"#FFF":"#BFD0FF",fg:o?"#FFF":"#17140F",sub:o?"rgba(255,255,255,0.82)":n?"#7A3F00":"#6A6152",anim:o?"tb-nudge 3s ease-in-out infinite":"none"}}getNextTreatment(){const e=this.currentLocale==="ko",o=this.treatments.slice().sort((a,l)=>a.due-l.due);if(o.length===0)return{item:null,name:e?"등록된 일정 없음":"Nothing scheduled",tag:"M",left:"—",date:e?"일정 추가":"add one",skin:{bg:"#FFFBF2",chip:"#E8DFCB",fg:"#17140F",sub:"#9A9080",anim:"none"}};const n=o[0];return{item:n,name:n.name,tag:n.name.trim().charAt(0).toUpperCase()||"M",left:this.formatTreatmentLeft(n.due),date:this.formatTreatmentDueDate(n.due),skin:this.getTreatmentSkin(n.due)}}giveTreatment(e){const o=this.currentLocale==="ko",n=this.treatments.find(p=>p.id===e);if(!n)return{title:"",sub:""};const a=new Date(Date.now()+n.every*864e5).toISOString();this.treatments=this.treatments.map(p=>p.id===e?{...p,due:p.every,lastGivenAt:new Date().toISOString(),nextDueAt:a}:p),this.saveTreatments(),this.currentHousehold&&this.currentPet&&this.logEvent("medicine",`${n.name}${n.dose?" · "+n.dose:""}`,{medication:n.name,dosage:n.dose,treatmentScheduleId:n.id}).catch(p=>console.warn("Could not auto-log treatment event:",p)),this.isAuthenticated&&ft.updateTreatmentSchedule(e,{nextDueAt:a,lastGivenAt:new Date().toISOString()}).catch(p=>console.warn("Could not sync treatment update to server:",p));const l=o?`${n.name} 투약 완료`:`${n.name} given`,d=o?`다음 예정일: ${this.formatTreatmentDueDate(n.every)}`:`Next one due ${this.formatTreatmentDueDate(n.every)}.`;return this.notify(),{title:l,sub:d}}addTreatment(e){var m;const o=this.currentLocale==="ko",n=e.name.trim();if(!n)return{title:"",sub:""};const a="trt_"+Date.now(),l=new Date(Date.now()+e.every*864e5).toISOString(),d={id:a,petId:(m=this.currentPet)==null?void 0:m.id,name:n,dose:e.dose.trim()||(o?"복용량 미입력":"no dose noted"),every:e.every,due:e.every,nextDueAt:l};this.treatments=[...this.treatments,d],this.saveTreatments(),this.isAuthenticated&&this.currentPet&&ft.createTreatmentSchedule(this.currentPet.id,{name:d.name,dose:d.dose,every:d.every,nextDueAt:d.nextDueAt}).then(y=>{y&&y.id&&(this.treatments=this.treatments.map(x=>x.id===a?y:x),this.saveTreatments(),this.notify())}).catch(y=>console.warn("Could not sync treatment creation to server:",y));const p=o?`${d.name} 추가됨`:`${d.name} added`,f=o?`첫 투약 예정일: ${this.formatTreatmentDueDate(e.every)}`:`First one due ${this.formatTreatmentDueDate(e.every)}.`;return this.notify(),{title:p,sub:f}}removeTreatment(e){const o=this.currentLocale==="ko",n=this.treatments.find(a=>a.id===e);return this.treatments=this.treatments.filter(a=>a.id!==e),this.saveTreatments(),this.isAuthenticated&&ft.deleteTreatmentSchedule(e).catch(a=>console.warn("Could not sync treatment deletion to server:",a)),this.notify(),{title:o?`${(n==null?void 0:n.name)||"일정"} 삭제됨`:`${(n==null?void 0:n.name)||"Treatment"} removed`,sub:o?"반복 일정에서 제외되었습니다.":"Removed from repeating schedule."}}setHistoryMonthOffset(e){this.historyMonthOffset=e,this.historySelectedDay=null,this.notify()}setHistorySelectedDay(e){this.historySelectedDay=e,this.notify()}toggleHistoryTypeFilter(e){this.historyTypeFilters.includes(e)?this.historyTypeFilters=this.historyTypeFilters.filter(o=>o!==e):this.historyTypeFilters=[...this.historyTypeFilters,e],this.notify()}setHistoryMemberFilter(e){this.historyMemberFilter=e,this.notify()}clearHistoryFilters(){this.historyTypeFilters=[],this.historyMemberFilter="all",this.historySearchQuery="",this.notify()}setHistorySearchOpen(e){this.historySearchOpen=e,this.notify()}setHistorySearchQuery(e){this.historySearchQuery=e,this.notify()}startLiveWalk(e){var n;this.walkTimerInterval&&clearInterval(this.walkTimerInterval),((n=this.activeWalk)==null?void 0:n.geoWatchId)!==void 0&&typeof navigator<"u"&&navigator.geolocation&&navigator.geolocation.clearWatch(this.activeWalk.geoWatchId);const o=e&&e.length>0?e:this.currentPet?[this.currentPet.id]:[];this.activeWalk={startTime:Date.now(),pausedTotal:0,pausedAt:null,route:[],petIds:o,distanceMeters:0},this.walkView="live",this.walkHomeAsk=!1,this.homeAsked=!1,this.walkSummaryData=null,typeof navigator<"u"&&navigator.geolocation&&(this.activeWalk.geoWatchId=navigator.geolocation.watchPosition(a=>{if(!this.activeWalk||this.activeWalk.pausedAt)return;const l=a.coords.latitude,d=a.coords.longitude;if(typeof l!="number"||typeof d!="number"||isNaN(l)||isNaN(d))return;const p=this.activeWalk.route;if(p.length===0)this.activeWalk.startLat=l,this.activeWalk.startLng=d,this.activeWalk.currentLat=l,this.activeWalk.currentLng=d,this.activeWalk.route=[[l,d]],this.tryReverseGeocodeForWalk(l,d,!0);else{const f=p[p.length-1],m=this.computeDistanceMeters(f[0],f[1],l,d);m>=1.5&&m<500&&(this.activeWalk.distanceMeters+=m,this.activeWalk.route=[...p,[l,d]]),this.activeWalk.currentLat=l,this.activeWalk.currentLng=d}this.notify()},a=>{console.warn("Live walk GPS tracking error:",a)},{enableHighAccuracy:!0,maximumAge:2e3,timeout:1e4})),this.notify(),this.walkTimerInterval=setInterval(()=>{if(!this.activeWalk||this.activeWalk.pausedAt)return;const a=this.getWalkSeconds();!this.homeAsked&&a>=120&&(this.walkHomeAsk=!0,this.homeAsked=!0),this.notify()},1e3)}computeDistanceMeters(e,o,n,a){const d=e*Math.PI/180,p=n*Math.PI/180,f=(n-e)*Math.PI/180,m=(a-o)*Math.PI/180,y=Math.sin(f/2)*Math.sin(f/2)+Math.cos(d)*Math.cos(p)*Math.sin(m/2)*Math.sin(m/2);return 6371e3*(2*Math.atan2(Math.sqrt(y),Math.sqrt(1-y)))}async tryReverseGeocodeForWalk(e,o,n){var a,l,d,p,f,m,y,x;try{const _=await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${e}&lon=${o}&zoom=18&addressdetails=1`,{headers:{Accept:"application/json"}});if(_.ok){const F=await _.json(),P=((a=F.address)==null?void 0:a.road)||((l=F.address)==null?void 0:l.pedestrian)||((d=F.address)==null?void 0:d.suburb)||((p=F.address)==null?void 0:p.neighbourhood),$=((f=F.address)==null?void 0:f.city)||((m=F.address)==null?void 0:m.town)||((y=F.address)==null?void 0:y.village)||((x=F.address)==null?void 0:x.county),N=P&&$?`${P}, ${$}`:P||(F.display_name?F.display_name.split(",").slice(0,2).join(",").trim():"");N&&this.activeWalk&&(n?this.activeWalk.startLocationName=N:this.activeWalk.endLocationName=N,this.notify())}}catch{}}getWalkSeconds(){if(!this.activeWalk)return 0;const e=Date.now(),o=this.activeWalk.pausedTotal+(this.activeWalk.pausedAt?e-this.activeWalk.pausedAt:0);return Math.max(0,Math.floor((e-this.activeWalk.startTime-o)/1e3))}getWalkDistanceKm(){return this.activeWalk&&this.activeWalk.distanceMeters>0?(this.activeWalk.distanceMeters/1e3).toFixed(2):(this.getWalkSeconds()/3600*4.8).toFixed(2)}getWalkPace(){const e=this.getWalkSeconds();if(e<20)return`9'40"`;const o=parseFloat(this.getWalkDistanceKm());if(o<=.01)return`9'40"`;const n=e/60/o;if(n>35)return`35'00"`;const a=Math.floor(n),l=Math.round((n-a)*60);return`${a}'${String(l).padStart(2,"0")}"`}pauseLiveWalk(){if(!this.activeWalk)return;const e=Date.now();this.activeWalk.pausedAt?(this.activeWalk.pausedTotal+=e-this.activeWalk.pausedAt,this.activeWalk.pausedAt=null):this.activeWalk.pausedAt=e,this.notify()}minimizeWalk(){this.walkView=null,this.notify()}expandWalk(){this.walkView="live",this.notify()}keepWalking(){this.walkHomeAsk=!1,this.notify()}endLiveWalk(){var y;if(this.walkTimerInterval&&clearInterval(this.walkTimerInterval),!this.activeWalk)return;this.activeWalk.geoWatchId!==void 0&&typeof navigator<"u"&&navigator.geolocation&&navigator.geolocation.clearWatch(this.activeWalk.geoWatchId);const e=this.getWalkSeconds(),o=parseFloat(this.getWalkDistanceKm()),n=this.getWalkPace(),a=this.activeWalk.petIds.map(x=>{var _;return(_=this.pets.find(F=>F.id===x))==null?void 0:_.name}).filter(Boolean),l=new Date(this.activeWalk.startTime),d=new Date,p=x=>x.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),f=this.activeWalk.currentLat??(this.activeWalk.route.length>0?this.activeWalk.route[this.activeWalk.route.length-1][0]:void 0),m=this.activeWalk.currentLng??(this.activeWalk.route.length>0?this.activeWalk.route[this.activeWalk.route.length-1][1]:void 0);this.activeWalk.endLat=f,this.activeWalk.endLng=m,f!==void 0&&m!==void 0&&!this.activeWalk.endLocationName&&this.tryReverseGeocodeForWalk(f,m,!1),this.walkSummaryData={durationSec:e,distanceKm:o,pace:n,route:this.activeWalk.route,petNames:a.length>0?a:[((y=this.currentPet)==null?void 0:y.name)||"Pet"],startTime:p(l),endTime:p(d),startLat:this.activeWalk.startLat,startLng:this.activeWalk.startLng,startLocationName:this.activeWalk.startLocationName,endLat:f,endLng:m,endLocationName:this.activeWalk.endLocationName},this.walkView="summary",this.walkHomeAsk=!1,this.notify()}async saveLiveWalk(e="",o=""){var d;if(!this.walkSummaryData)return;const n=this.walkSummaryData,a=Math.max(1,Math.round(n.durationSec/60))+" min",l=n.distanceKm+" km";((d=this.activeWalk)==null?void 0:d.geoWatchId)!==void 0&&typeof navigator<"u"&&navigator.geolocation&&navigator.geolocation.clearWatch(this.activeWalk.geoWatchId),await this.logEvent("walk",e||`Walk · ${a} · ${l}`,{walkDuration:a,walkDistance:l,photoUrl:o,petNames:n.petNames,startLat:n.startLat,startLng:n.startLng,startLocationName:n.startLocationName,endLat:n.endLat,endLng:n.endLng,endLocationName:n.endLocationName,route:n.route},n.startLat,n.startLng),this.activeWalk=null,this.walkView=null,this.walkSummaryData=null,this.walkHomeAsk=!1,this.homeAsked=!1,this.notify()}discardLiveWalk(){var e;this.walkTimerInterval&&clearInterval(this.walkTimerInterval),((e=this.activeWalk)==null?void 0:e.geoWatchId)!==void 0&&typeof navigator<"u"&&navigator.geolocation&&navigator.geolocation.clearWatch(this.activeWalk.geoWatchId),this.activeWalk=null,this.walkView=null,this.walkSummaryData=null,this.walkHomeAsk=!1,this.homeAsked=!1,this.notify()}setAuthView(e){this.authView=e,this.notify()}setTrackingPreference(e,o){this.track={...this.track,[e]:o},localStorage.setItem("dooty_track_prefs",JSON.stringify(this.track)),this.notify()}setNudgePreference(e,o){this.nudges={...this.nudges,[e]:o},localStorage.setItem("dooty_nudge_prefs",JSON.stringify(this.nudges)),this.notify()}setAnalyticsTimeRange(e){this.analyticsTimeRange=e,localStorage.setItem("dooty_analytics_timerange",e),this.notify()}openLogger(e){this.editingEvent=null,this.loggerEventType=e||null,this.loggerModalOpen=!0,this.notify()}openLoggerForEdit(e){this.editingEvent=e,this.loggerEventType=e.eventType,this.loggerModalOpen=!0,this.notify()}closeLogger(){this.loggerModalOpen=!1,this.loggerEventType=null,this.editingEvent=null,this.notify()}openPhotoModal(e){this.photoModalTarget=e.target,this.photoModalTargetId=e.targetId||"",this.photoModalCurrentAvatar=e.currentAvatar||"",this.photoModalTitle=e.title||"",this.photoModalOpen=!0,this.notify()}closePhotoModal(){this.photoModalOpen=!1,this.notify()}async updatePetAvatar(e,o){await this.updatePetProfile(e,{avatarUrl:o})}async updatePetProfile(e,o){if(this.currentPet&&this.currentPet.id===e&&(this.currentPet={...this.currentPet,...o}),this.pets=this.pets.map(n=>n.id===e?{...n,...o}:n),this.currentHousehold&&(this.currentHousehold={...this.currentHousehold,pets:this.pets},localStorage.setItem("dooty_household_data",JSON.stringify(this.currentHousehold))),o.avatarUrl!==void 0&&localStorage.setItem(`dooty_pet_avatar_${e}`,o.avatarUrl),this.notify(),navigator.onLine)try{await ft.updatePet(e,o)}catch(n){console.warn("Could not sync pet profile to server:",n)}}async updateUserAvatar(e){var o;if(this.userAvatar=e,localStorage.setItem("dooty_user_avatar",e),this.notify(),this.currentHousehold&&((o=this.currentHousehold.members)!=null&&o.length)){const n=this.currentHousehold.members[0];if(n&&(n.avatarUrl=e,navigator.onLine))try{await ft.updateMember(this.currentHousehold.id,n.id,{avatarUrl:e})}catch(a){console.warn("Could not sync member avatar to server:",a)}}}async updateMemberAvatar(e,o){if(this.currentHousehold&&this.currentHousehold.members){const n=this.currentHousehold.members.find(a=>a.id===e);if(n&&(n.avatarUrl=o,localStorage.setItem(`dooty_member_avatar_${e}`,o),this.notify(),navigator.onLine))try{await ft.updateMember(this.currentHousehold.id,e,{avatarUrl:o})}catch(a){console.warn("Could not sync member avatar to server:",a)}}}loadPendingInvites(){if(!this.currentHousehold)return;const e=localStorage.getItem(`dooty_pending_invites_${this.currentHousehold.id}`);if(e)try{this.pendingInvites=JSON.parse(e)}catch{this.pendingInvites=[]}else this.pendingInvites=[{code:"H3P8",role:"Log only",when:"sent to Dan · expires in 6 days",expiresAt:new Date(Date.now()+6*864e5).toISOString()},{code:"B9XT",role:"Full member",when:"unsent · expires in 7 days",expiresAt:new Date(Date.now()+7*864e5).toISOString()}],localStorage.setItem(`dooty_pending_invites_${this.currentHousehold.id}`,JSON.stringify(this.pendingInvites))}async createInvite(e="Full member"){let o="";if(this.currentHousehold){try{o=(await ft.createInviteCode(this.currentHousehold.id)).code}catch(a){console.warn("Could not generate invite code from server, creating locally:",a);const l="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";o=Array.from({length:6},()=>l.charAt(Math.floor(Math.random()*l.length))).join("")}const n={code:o,role:e,when:"just created · expires in 7 days",expiresAt:new Date(Date.now()+7*864e5).toISOString()};this.pendingInvites=[n,...this.pendingInvites],localStorage.setItem(`dooty_pending_invites_${this.currentHousehold.id}`,JSON.stringify(this.pendingInvites)),this.notify()}return o}async revokeInvite(e){this.currentHousehold&&(this.pendingInvites=this.pendingInvites.filter(o=>o.code!==e),localStorage.setItem(`dooty_pending_invites_${this.currentHousehold.id}`,JSON.stringify(this.pendingInvites)),this.notify())}exportEventsCsv(){var f;const e=((f=this.currentPet)==null?void 0:f.name)||"Pet",o=["Timestamp","Pet Name","Event Type","Logged By","Notes","Latitude","Longitude"],n=(this.events||[]).map(m=>[`"${m.timestamp||""}"`,`"${e}"`,`"${m.eventType||""}"`,`"${(m.loggedByName||"").replace(/"/g,'""')}"`,`"${(m.notes||"").replace(/"/g,'""')}"`,m.latitude!==void 0&&m.latitude!==null?m.latitude:"",m.longitude!==void 0&&m.longitude!==null?m.longitude:""]),a=[o.join(","),...n.map(m=>m.join(","))].join(`
`),l=new Blob([a],{type:"text/csv;charset=utf-8;"}),d=URL.createObjectURL(l),p=document.createElement("a");p.setAttribute("href",d),p.setAttribute("download",`dooty-${e.toLowerCase()}-events.csv`),document.body.appendChild(p),p.click(),document.body.removeChild(p),URL.revokeObjectURL(d)}exportFullBackupJson(){var f;const e={app:"Dooty",version:"1.0",exportedAt:new Date().toISOString(),household:this.currentHousehold,pets:this.pets,currentPet:this.currentPet,treatments:this.treatments,events:this.events},o=JSON.stringify(e,null,2),n=new Blob([o],{type:"application/json;charset=utf-8;"}),a=URL.createObjectURL(n),l=document.createElement("a");l.setAttribute("href",a);const d=new Date().toISOString().split("T")[0],p=(((f=this.currentPet)==null?void 0:f.name)||"dooty").toLowerCase();l.setAttribute("download",`dooty-${p}-backup-${d}.json`),document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(a)}async init(){var e,o;this.isLoading=!0,this.notify();try{if(typeof window<"u"){if(window.location.hash&&window.location.hash.includes("access_token=")){const a=window.location.hash.substring(1),d=new URLSearchParams(a).get("access_token");d&&(localStorage.setItem("dooty_auth_token",d),window.history.replaceState(null,"",window.location.pathname+window.location.search))}else if(window.location.search&&window.location.search.includes("access_token=")){const l=new URLSearchParams(window.location.search).get("access_token");l&&(localStorage.setItem("dooty_auth_token",l),window.history.replaceState(null,"",window.location.pathname))}}if(localStorage.getItem("dooty_auth_token"))try{const a=await ft.getMe();this.currentUser=a.user,this.userHouseholds=a.households||[],a.activeHousehold&&(this.currentHousehold=a.activeHousehold,localStorage.setItem("dooty_household_id",a.activeHousehold.id),localStorage.setItem("dooty_household_data",JSON.stringify(a.activeHousehold)))}catch(a){if(console.warn("Network sync for auth session failed, using cached session:",a),(e=a.message)!=null&&e.includes("Unauthorized")||(o=a.message)!=null&&o.includes("expired")){this.signOut();return}}else{const a=localStorage.getItem("dooty_household_id");if(a)try{const l=await ft.getHousehold(a);l&&(this.currentHousehold=l,localStorage.setItem("dooty_household_data",JSON.stringify(l)))}catch(l){console.warn("Network sync for household failed, using cached session:",l)}}if(this.currentHousehold){const a=this.currentHousehold.pets||await ft.getPets(this.currentHousehold.id);if(this.pets=a.map(l=>{const d=localStorage.getItem(`dooty_pet_avatar_${l.id}`);return{...l,avatarUrl:l.avatarUrl||d||""}}),this.currentHousehold.members&&(this.currentHousehold.members=this.currentHousehold.members.map(l=>{const d=localStorage.getItem(`dooty_member_avatar_${l.id}`);return{...l,avatarUrl:l.avatarUrl||d||(l.role==="owner"?this.userAvatar:"")}})),this.pets.length>0){const l=localStorage.getItem("dooty_pet_id");this.currentPet=this.pets.find(d=>d.id===l)||this.pets[0]}else this.currentPet=null;this.loadPendingInvites()}this.currentPet?(this.currentHousehold&&await ti(this.currentPet.id,this.currentHousehold.id),await ft.flushOfflineQueue(),await this.refreshEvents()):this.events=[],await this.checkPendingSync()}catch(n){console.warn("Init loaded with local fallback:",n)}finally{this.isLoading=!1,this.notify()}}async selectPet(e){this.currentPet=e,localStorage.setItem("dooty_pet_id",e.id),this.loadTreatmentsForPet(e.id),this.events=await Kt(e.id),this.notify(),this.syncEvents()}async selectHousehold(e){const o=this.userHouseholds.find(a=>a.id===e);if(!o)return;this.currentHousehold=o,localStorage.setItem("dooty_household_id",o.id),localStorage.setItem("dooty_household_data",JSON.stringify(o));const n=o.pets||await ft.getPets(o.id);this.pets=n,n.length>0?(this.currentPet=n[0],localStorage.setItem("dooty_pet_id",this.currentPet.id),await ti(this.currentPet.id,o.id),await ft.flushOfflineQueue(),this.events=await Kt(this.currentPet.id),this.syncEvents()):(this.currentPet=null,this.events=[]),this.loadPendingInvites(),this.notify()}async refreshEvents(){if(!this.currentPet){this.events=[],this.notify();return}this.events=await Kt(this.currentPet.id),this.notify(),await this.syncEvents()}async syncEvents(){var o,n;if(!this.currentPet)return;const e=this.currentPet.id;this.isSyncing=!0,this.notify();try{if(navigator.onLine){const l=await ft.flushOfflineQueue();await this.checkPendingSync(),l>0&&((o=this.currentPet)==null?void 0:o.id)===e&&(this.events=await Kt(e),this.notify())}const a=await ft.syncEvents(e,async()=>{var l;((l=this.currentPet)==null?void 0:l.id)===e&&(this.events=await Kt(e),this.notify())});((n=this.currentPet)==null?void 0:n.id)===e&&(this.events=a,this.notify())}catch(a){console.warn("Sync events warning:",a)}finally{this.isSyncing=!1,this.notify()}}async logEvent(e,o="",n,a,l,d){var m,y,x,_;if(!this.currentHousehold||!this.currentPet)return;const p=((m=this.currentUser)==null?void 0:m.displayName)||((x=(y=this.currentHousehold.members)==null?void 0:y[0])==null?void 0:x.displayName)||"Owner",f=await ft.createEvent({householdId:this.currentHousehold.id,petId:this.currentPet.id,eventType:e,loggedByName:p,loggedByUserId:(_=this.currentUser)==null?void 0:_.id,timestamp:d||new Date().toISOString(),notes:o,latitude:a,longitude:l,metadata:n||{}});this.events=[f,...this.events],await this.checkPendingSync(),this.notify()}async updateEvent(e,o,n="",a,l,d,p){const f={eventType:o,notes:n,metadata:a||{},latitude:l,longitude:d};p&&(f.timestamp=p);try{const m=await ft.updateEvent(e,f);this.events=this.events.map(y=>y.id===e?{...y,...m}:y)}catch{this.events=this.events.map(y=>y.id===e?{...y,eventType:o,notes:n,metadata:a||y.metadata,latitude:l!==void 0?l:y.latitude,longitude:d!==void 0?d:y.longitude,...p?{timestamp:p}:{}}:y)}this.notify()}async deleteEvent(e){try{await ft.deleteEvent(e)}catch(o){console.warn("Failed to delete event on backend:",o)}this.events=this.events.filter(o=>o.id!==e&&o.localId!==e),this.notify()}async handleNetworkChange(e){this.isOnline=e,e&&await ft.flushOfflineQueue()>0&&await this.refreshEvents(),await this.checkPendingSync(),this.notify()}get isAuthenticated(){return this.currentHousehold!==null}signOut(){localStorage.removeItem("dooty_auth_token"),localStorage.removeItem("dooty_household_id"),localStorage.removeItem("dooty_household_data"),localStorage.removeItem("dooty_pet_id"),localStorage.removeItem("dooty_user_avatar"),this.currentUser=null,this.currentHousehold=null,this.userHouseholds=[],this.currentPet=null,this.pets=[],this.events=[],this.userAvatar="",this.activeTab="today",this.authView="signin",this.notify()}async signUp(e){this.isLoading=!0,this.notify();try{!e.redirectTo&&typeof window<"u"&&(e.redirectTo=window.location.origin+window.location.pathname);const o=await ft.signUp(e);if(this.currentUser=o.user,this.currentHousehold=o.activeHousehold,this.userHouseholds=o.households||(o.activeHousehold?[o.activeHousehold]:[]),o.token&&localStorage.setItem("dooty_auth_token",o.token),o.activeHousehold){localStorage.setItem("dooty_household_id",o.activeHousehold.id),localStorage.setItem("dooty_household_data",JSON.stringify(o.activeHousehold));const n=o.activeHousehold.pets||[];this.pets=n,n.length>0?(this.currentPet=n[0],localStorage.setItem("dooty_pet_id",this.currentPet.id),await ti(this.currentPet.id,o.activeHousehold.id),await ft.flushOfflineQueue(),await this.refreshEvents()):this.currentPet=null,this.loadPendingInvites()}this.authView="signin"}finally{this.isLoading=!1,this.notify()}}async signIn(e){this.isLoading=!0,this.notify();try{const o=await ft.signIn(e);if(this.currentUser=o.user,this.currentHousehold=o.activeHousehold,this.userHouseholds=o.households||(o.activeHousehold?[o.activeHousehold]:[]),o.token&&localStorage.setItem("dooty_auth_token",o.token),o.activeHousehold){localStorage.setItem("dooty_household_id",o.activeHousehold.id),localStorage.setItem("dooty_household_data",JSON.stringify(o.activeHousehold));const n=o.activeHousehold.pets||[];this.pets=n,n.length>0?(this.currentPet=n[0],localStorage.setItem("dooty_pet_id",this.currentPet.id),await ti(this.currentPet.id,o.activeHousehold.id),await ft.flushOfflineQueue(),await this.refreshEvents()):this.currentPet=null,this.loadPendingInvites()}this.authView="signin"}finally{this.isLoading=!1,this.notify()}}async joinAuthenticated(e,o){this.isLoading=!0,this.notify();try{const n=await ft.joinAuthenticated(e,o);if(this.userHouseholds=n.households||[],n.activeHousehold){this.currentHousehold=n.activeHousehold,localStorage.setItem("dooty_household_id",n.activeHousehold.id),localStorage.setItem("dooty_household_data",JSON.stringify(n.activeHousehold));const a=n.activeHousehold.pets||[];this.pets=a,a.length>0&&(this.currentPet=a[0],localStorage.setItem("dooty_pet_id",this.currentPet.id),await ti(this.currentPet.id,n.activeHousehold.id),await ft.flushOfflineQueue(),await this.refreshEvents()),this.loadPendingInvites()}}finally{this.isLoading=!1,this.notify()}}async claimHousehold(e,o){this.isLoading=!0,this.notify();try{const n=await ft.claimHousehold(e,o);if(this.userHouseholds=n.households||[],n.activeHousehold){this.currentHousehold=n.activeHousehold,localStorage.setItem("dooty_household_id",n.activeHousehold.id),localStorage.setItem("dooty_household_data",JSON.stringify(n.activeHousehold));const a=n.activeHousehold.pets||[];this.pets=a,a.length>0&&(this.currentPet=a[0],localStorage.setItem("dooty_pet_id",this.currentPet.id),await ti(this.currentPet.id,n.activeHousehold.id),await ft.flushOfflineQueue(),await this.refreshEvents()),this.loadPendingInvites()}}finally{this.isLoading=!1,this.notify()}}async removeMember(e){if(this.currentHousehold){this.isLoading=!0,this.notify();try{await ft.removeMember(this.currentHousehold.id,e),this.currentHousehold.members=(this.currentHousehold.members||[]).filter(o=>o.id!==e),localStorage.setItem("dooty_household_data",JSON.stringify(this.currentHousehold))}finally{this.isLoading=!1,this.notify()}}}async checkPendingSync(){const e=await ca();this.pendingSyncCount=e.length,this.notify()}}const g=new Nl;var Il=function(h,e,o,n){var a=arguments.length,l=a<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,o):n,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,e,o,n);else for(var p=h.length-1;p>=0;p--)(d=h[p])&&(l=(a<3?d(l):a>3?d(e,o,l):d(e,o))||l);return a>3&&l&&Object.defineProperty(e,o,l),l},ii;let qs=(ii=class extends Ft{connectedCallback(){super.connectedCallback(),this.unsubscribe=g.subscribe(()=>this.requestUpdate())}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.unsubscribe)==null||e.call(this)}render(){const e=g.currentLocale==="ko",o=g.activeTab;return b`
      <div class="dock-container">
        <!-- 1. Today Tab -->
        <div
          class="dock-tab ${o==="today"?"active":""}"
          @click=${()=>g.setActiveTab("today")}
        >
          <div class="icon-today">
            <div class="icon-today-bar"></div>
          </div>
          <div class="dock-label">${e?"오늘":"Today"}</div>
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
          <div class="dock-label">${e?"지도":"Map"}</div>
        </div>

        <!-- 3. Center Elevated Log FAB Button -->
        <div
          class="fab-btn"
          @click=${()=>g.openLogger()}
          title=${e?"기록하기":"Log event"}
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
          <div class="dock-label">${e?"기록":"History"}</div>
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
          <div class="dock-label">${e?"숫자":"Numbers"}</div>
        </div>
      </div>
    `}},ii.styles=At`
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
  `,ii);qs=Il([Mt("dooty-dock")],qs);var ha=function(h,e,o,n){var a=arguments.length,l=a<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,o):n,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,e,o,n);else for(var p=h.length-1;p>=0;p--)(d=h[p])&&(l=(a<3?d(l):a>3?d(e,o,l):d(e,o))||l);return a>3&&l&&Object.defineProperty(e,o,l),l},oi;let wn=(oi=class extends Ft{connectedCallback(){super.connectedCallback(),this.unsubscribe=g.subscribe(()=>this.requestUpdate())}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.unsubscribe)==null||e.call(this)}formatTime(e){const o=new Date(e);return isNaN(o.getTime())?"":o.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}).toLowerCase()}getEventVisuals(e){switch(e){case"poop":return{tag:"P",bg:"#FFCE2E"};case"pee":return{tag:"U",bg:"#BFD0FF"};case"walk":return{tag:"W",bg:"#9EC6E8"};case"medicine":return{tag:"M",bg:"#1FC99B"};case"vomit":return{tag:"V",bg:"#FF9A3C"};case"weight":return{tag:"KG",bg:"#2B5BE8"};case"vet":return{tag:"D",bg:"#FFD15C"};case"symptom":return{tag:"S",bg:"#FF5A3C"};case"food":return{tag:"F",bg:"#FFB800"};case"water":return{tag:"H",bg:"#60A5FA"};case"playing":return{tag:"T",bg:"#FBBF24"};case"grooming":return{tag:"G",bg:"#F472B6"};default:return{tag:"E",bg:"#FFCE2E"}}}render(){var mt,Y,z,lt;const e=g.currentLocale==="ko",o=((mt=g.currentPet)==null?void 0:mt.name)||(e?"반려견":"My Pet"),n=((Y=g.currentPet)==null?void 0:Y.id)||"",a=g.events||[],l=ul(a,n),d=a.length,p=new Date;p.setHours(0,0,0,0);const f=a.filter(G=>new Date(G.timestamp)>=p);let m=0;if(a.length>=2){const G=[...a].sort((dt,nt)=>new Date(dt.timestamp).getTime()-new Date(nt.timestamp).getTime());for(let dt=1;dt<G.length;dt++){const nt=(new Date(G[dt].timestamp).getTime()-new Date(G[dt-1].timestamp).getTime())/36e5;nt>m&&(m=nt)}}const y=new Date().getHours(),x=y<12?e?`좋은 아침, ${o}!`:`Morning, ${o}.`:y<18?e?`안녕, ${o}!`:`Hey ${o}!`:e?`좋은 저녁, ${o}!`:`Evening, ${o}.`,_=f.length===0?e?"오늘의 첫 기록을 시작해볼까요?":"Ready for today’s first log.":e?`오늘 ${f.length}번 완료.`:`${f.length} down today.`,F=l.currentStreakDays,P=l.nextPoopPrediction||ra(a,n),$=e?P.timeDisplayKo:P.timeDisplay,N=e?P.subtextKo:P.subtext,R=P.progressPercent,Z=$.includes(" (")?$.split(" ("):[$],j=Z[0],rt=Z[1]?`(${Z[1]}`:null,I=Math.max(1,l.dailyFrequencies.length),S=d>0?(d/I).toFixed(1):"0.0",ct=(z=g.currentPet)==null?void 0:z.avatarUrl,A=(((lt=g.currentUser)==null?void 0:lt.displayName)||"S").charAt(0).toUpperCase(),O=g.getNextTreatment();return b`
      <!-- Top Header Row -->
      <div class="top-header-row">
        <div
          class="dog-avatar-btn"
          @click=${()=>g.openPetSwitcher()}
        >
          ${ct?b`<img src="${ct}" class="dog-avatar-img" alt="Pet" />`:b`<div>${e?`강아지
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
                    <span>${e?"동기화 중":"Syncing"}</span>
                  </span>
                `:null}
          </div>
        </div>

        <div
          class="user-initial-btn"
          @click=${()=>g.setActiveTab("settings")}
        >
          ${A}
        </div>
      </div>


      <!-- Streak & Next Prediction Card -->
      <div class="prediction-card">
        <div class="streak-badge">
          ${e?`${F}일 연속`:`${F} DAY STREAK`}
        </div>
        <div class="pred-label">
          ${e?"다음은 아마도":"Next one, probably"}
        </div>
        <div class="pred-time">
          ${j}
          ${rt?b`<span class="pred-window-tag">${rt}</span>`:""}
        </div>
        <div class="pred-sub">${N}</div>
        <div class="pred-progress-bar">
          <div class="pred-progress-fill" style="width: ${R}%;"></div>
        </div>

        <!-- Next Medicine / Treatment Info Pill -->
        <div
          class="next-treatment-pill"
          style="background: ${O.skin.bg};"
          @click=${()=>g.openTreatmentsDrawer()}
        >
          <div
            class="treatment-pill-chip ${O.skin.anim!=="none"?"animated":""}"
            style="background: ${O.skin.chip};"
          >
            ${O.tag}
          </div>
          <div class="treatment-pill-body">
            <div
              class="treatment-pill-sub"
              style="color: ${O.skin.sub};"
            >
              ${e?"다음 투약 / 치료":"Next treatment"}
            </div>
            <div
              class="treatment-pill-name"
              style="color: ${O.skin.fg};"
            >
              ${O.name}
            </div>
          </div>
          <div class="treatment-pill-meta">
            <div
              class="treatment-pill-left"
              style="color: ${O.skin.fg};"
            >
              ${O.left}
            </div>
            <div
              class="treatment-pill-date"
              style="color: ${O.skin.sub};"
            >
              ${O.date}
            </div>
          </div>
          <div
            class="treatment-pill-arrow"
            style="color: ${O.skin.sub};"
          >
            &#8250;
          </div>
        </div>
      </div>

      <!-- 3 KPI Cards -->
      <div class="kpi-row">
        <div class="kpi-card" style="background: #FFF;">
          <div class="kpi-val" style="color: #17140F;">${S}</div>
          <div class="kpi-lbl" style="color: #6A6152;">${e?"일일 평균":"a day, avg"}</div>
        </div>
        <div class="kpi-card" style="background: #FFF;">
          <div class="kpi-val" style="color: #17140F;">
            ${m>0?`${Math.round(m)}h`:e?"기록 없음":"0h"}
          </div>
          <div class="kpi-lbl" style="color: #6A6152;">${e?"최대 공백":"longest gap"}</div>
        </div>
        <div class="kpi-card" style="background: #2B5BE8;">
          <div class="kpi-val" style="color: #FFF;">${d}</div>
          <div class="kpi-lbl" style="color: #BFD0FF;">${e?"전체 기록":"all time"}</div>
        </div>
      </div>

      <!-- Today Feed Header -->
      <div class="section-row">
        <div class="section-title">${e?"오늘":"Today"}</div>
        <div class="section-count">
          ${e?`${f.length}건`:`${f.length} THINGS`}
        </div>
      </div>

      <!-- Feed List -->
      <div class="feed-list">
        ${f.length>0?f.map(G=>{const{tag:dt,bg:nt}=this.getEventVisuals(G.eventType);return b`
                <div class="feed-card" @click=${()=>g.openLoggerForEdit(G)}>
                  <div class="feed-badge" style="background: ${nt};">${dt}</div>
                  <div class="feed-content">
                    <div class="feed-title">
                      ${_o(G.notes,G.eventType,e)}
                    </div>
                    <div class="feed-detail">
                      ${e?`기록자: ${G.loggedByName}`:`logged by ${G.loggedByName}`}
                    </div>
                  </div>
                  <div class="feed-time">${this.formatTime(G.timestamp)}</div>
                </div>
              `}):a.length>0?b`
              <!-- Recent fallback if no logs today -->
              <div style="font-size: 11px; font-weight: 800; color: #9A9080; text-transform: uppercase; margin-bottom: 4px;">
                ${e?"최근 기록":"Recent logs"}
              </div>
              ${a.slice(0,4).map(G=>{const{tag:dt,bg:nt}=this.getEventVisuals(G.eventType);return b`
                  <div class="feed-card" @click=${()=>g.openLoggerForEdit(G)}>
                    <div class="feed-badge" style="background: ${nt};">${dt}</div>
                    <div class="feed-content">
                      <div class="feed-title">
                        ${_o(G.notes,G.eventType,e)}
                      </div>
                      <div class="feed-detail">
                        ${new Date(G.timestamp).toLocaleDateString()} · ${G.loggedByName}
                      </div>
                    </div>
                    <div class="feed-time">${this.formatTime(G.timestamp)}</div>
                  </div>
                `})}
            `:b`
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
            ${e?`올해 ${d}번, 기록을 확인하세요.`:`${d} logs so far. Tap to view records.`}
          </div>
        </div>
        <div class="wrapped-arrow">›</div>
      </div>
    `}},oi.styles=At`
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
      font-size: clamp(34px, 10vw, 44px);
      color: #17140F;
      line-height: 1;
      letter-spacing: -2px;
      margin-top: 3px;
      word-break: keep-all;
    }

    .pred-window-tag {
      font-size: 0.58em;
      font-weight: 700;
      opacity: 0.85;
      letter-spacing: -0.3px;
      margin-left: 6px;
      vertical-align: baseline;
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

    /* Next Medicine / Treatment Info Pill */
    .next-treatment-pill {
      margin-top: 13px;
      display: flex;
      align-items: center;
      gap: 10px;
      border: 2.5px solid #17140F;
      border-radius: 15px;
      padding: 8px 10px;
      cursor: pointer;
      box-shadow: 2px 2px 0 #17140F;
      user-select: none;
      transition: transform 0.13s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.13s cubic-bezier(0.23, 1, 0.32, 1), background-color 0.16s ease;
    }

    .next-treatment-pill:hover {
      transform: translate(-1px, -1px);
      box-shadow: 3px 3px 0 #17140F;
    }

    .next-treatment-pill:active {
      transform: translate(1px, 1px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .treatment-pill-chip {
      width: 26px;
      height: 26px;
      border-radius: 9px;
      flex: none;
      border: 2.5px solid #17140F;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 12px;
      color: #17140F;
    }

    .treatment-pill-chip.animated {
      animation: tb-nudge 3s ease-in-out infinite;
    }

    .treatment-pill-body {
      flex: 1;
      min-width: 0;
    }

    .treatment-pill-sub {
      font-size: 9.5px;
      font-weight: 800;
      letter-spacing: 1.1px;
      text-transform: uppercase;
      line-height: 1;
    }

    .treatment-pill-name {
      font-size: 13px;
      font-weight: 800;
      margin-top: 1px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 1.2;
    }

    .treatment-pill-meta {
      flex: none;
      text-align: right;
    }

    .treatment-pill-left {
      font-size: 12.5px;
      font-weight: 800;
      line-height: 1.1;
    }

    .treatment-pill-date {
      font-size: 10px;
      font-weight: 700;
      margin-top: 1px;
      line-height: 1.1;
    }

    .treatment-pill-arrow {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 17px;
      flex: none;
      line-height: 1;
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
  `,oi);ha([E()],wn.prototype,"unsubscribe",void 0);wn=ha([Mt("dooty-home")],wn);var Sn=function(h,e,o,n){var a=arguments.length,l=a<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,o):n,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,e,o,n);else for(var p=h.length-1;p>=0;p--)(d=h[p])&&(l=(a<3?d(l):a>3?d(e,o,l):d(e,o))||l);return a>3&&l&&Object.defineProperty(e,o,l),l},ni;let ko=(ni=class extends Ft{constructor(){super(...arguments),this.searchSheetOpen=!1,this.searchQuery=""}connectedCallback(){super.connectedCallback(),this.unsubscribe=g.subscribe(()=>this.requestUpdate())}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.unsubscribe)==null||e.call(this)}getTypeColor(e){switch(e){case"poop":return"#FFCE2E";case"pee":return"#BFD0FF";case"medicine":case"meds":return"#1FC99B";case"walk":return"#9EC6E8";case"weight":return"#FFB39A";case"vomit":return"#FF9F9F";case"vet":return"#FFEAA0";default:return"#E3D8BE"}}getTypeTag(e,o){switch(e){case"poop":return o?"응가":"P";case"pee":return o?"쉬야":"U";case"medicine":case"meds":return o?"약":"M";case"walk":return o?"산책":"W";case"weight":return o?"체중":"K";case"vomit":return o?"구토":"V";case"vet":return o?"병원":"H";default:return o?"기록":"E"}}getTypeName(e,o){switch(e){case"poop":return o?"응가":"Poop";case"pee":return o?"쉬야":"Pee";case"medicine":case"meds":return o?"약":"Meds";case"walk":return o?"산책":"Walk";case"weight":return o?"체중":"Weight";case"vomit":return o?"구토":"Vomit";case"vet":return o?"병원":"Vet";default:return o?"기타":"Other"}}getEventsForDay(e,o,n){return(g.events||[]).filter(a=>{const l=new Date(a.timestamp);return!(l.getFullYear()!==e||l.getMonth()!==o||l.getDate()!==n||g.historyTypeFilters.length>0&&!g.historyTypeFilters.some(p=>p==="meds"||p==="medicine"?a.eventType==="medicine":a.eventType===p)||g.historyMemberFilter!=="all"&&(a.loggedByName||"Me")!==g.historyMemberFilter)})}render(){var mt,Y;const e=g.currentLocale==="ko",o=g.currentPet,n=(o==null?void 0:o.name)||(e?"반려견":"Pet"),a=n.charAt(0).toUpperCase(),l=(((mt=g.currentUser)==null?void 0:mt.displayName)||"S").charAt(0).toUpperCase(),d=new Date,p=new Date(d.getFullYear(),d.getMonth()+g.historyMonthOffset,1),f=p.getFullYear(),m=p.getMonth(),y=["January","February","March","April","May","June","July","August","September","October","November","December"],_=e?`${f}년 ${["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"][m]}`:`${y[m]} ${f}`,F=new Date(f,m+1,0).getDate(),P=(new Date(f,m,1).getDay()+6)%7,$=g.historyMonthOffset===0,N=d.getDate(),R=(g.events||[]).filter(z=>{const lt=new Date(z.timestamp);return lt.getFullYear()===f&&lt.getMonth()===m}).length,Z=["poop","pee","meds","walk","weight","vomit"],j=Array.from(new Set((((Y=g.currentHousehold)==null?void 0:Y.members)||[]).map(z=>z.displayName).concat(["Me"]))),rt=g.historyTypeFilters.length>0||g.historyMemberFilter!=="all"||this.searchQuery!=="",I=g.historySelectedDay,S=I!==null?this.getEventsForDay(f,m,I):[],ct=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],A=["일요일","월요일","화요일","수요일","목요일","금요일","토요일"];let O="";if(I!==null){const z=new Date(f,m,I),lt=ct[z.getDay()],G=A[z.getDay()];O=e?`${m+1}월 ${I}일 ${G}`:`${lt} ${I} ${y[m].substring(0,3)}`}return b`
      <div class="history-container">
        <!-- Top Bar -->
        <div class="top-bar">
          <div class="title-area">
            <div class="main-title">${e?"기록":"The record"}</div>
            <div class="sub-title">${e?`${_}에 ${R}건`:`${R} logs in ${_}`}</div>
          </div>
          <div class="pet-btn" @click=${()=>g.openPetSwitcher()}>
            <div class="pet-avatar-dot">${a}</div>
            <div class="pet-btn-name">${n}</div>
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
            ${this.searchQuery?`"${this.searchQuery}"`:e?"메모 및 캡션 검색":"Search notes & photo captions..."}
          </div>
          ${rt?b`
                <div
                  class="clear-badge"
                  @click=${z=>{z.stopPropagation(),this.searchQuery="",g.clearHistoryFilters()}}
                >
                  ${e?"초기화":"CLEAR"}
                </div>
              `:null}
        </div>

        <!-- Event Type Filter Chips -->
        <div class="chip-scroll">
          ${Z.map(z=>{const lt=g.historyTypeFilters.includes(z);return b`
              <div
                class="filter-chip ${lt?"active":""}"
                @click=${()=>g.toggleHistoryTypeFilter(z)}
              >
                <div class="chip-dot" style="background: ${this.getTypeColor(z)};"></div>
                <div class="chip-label">${this.getTypeName(z,e)}</div>
              </div>
            `})}
        </div>

        <!-- By Member Filter Row -->
        <div class="by-row">
          <div class="by-tag">${e?"작성자":"BY"}</div>
          <div class="chip-scroll" style="margin: 0; padding: 2px 0;">
            <div
              class="member-chip ${g.historyMemberFilter==="all"?"active":""}"
              @click=${()=>g.setHistoryMemberFilter("all")}
            >
              <div class="chip-label">${e?"전체":"All"}</div>
            </div>
            ${j.map(z=>{const lt=g.historyMemberFilter===z;return b`
                <div
                  class="member-chip ${lt?"active":""}"
                  @click=${()=>g.setHistoryMemberFilter(lt?"all":z)}
                >
                  <div class="member-dot">${z.charAt(0).toUpperCase()}</div>
                  <div class="chip-label">${z}</div>
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
              class="cal-nav-btn ${$?"disabled":""}"
              @click=${()=>{$||g.setHistoryMonthOffset(g.historyMonthOffset+1)}}
            >
              &#8250;
            </div>
          </div>

          <!-- Day of Week Names (M T W T F S S) -->
          <div class="day-names-row">
            ${(e?["월","화","수","목","금","토","일"]:["M","T","W","T","F","S","S"]).map(z=>b`<div class="day-name">${z}</div>`)}
          </div>

          <!-- 7-Column Days Grid -->
          <div class="cal-grid">
            <!-- Empty offset cells -->
            ${Array.from({length:P},()=>b`<div class="cal-cell empty"></div>`)}
            <!-- Month days -->
            ${Array.from({length:F},(z,lt)=>{const G=lt+1,dt=this.getEventsForDay(f,m,G),nt=$&&G===N,$t=I===G,H=dt.slice(0,3).map(xt=>this.getTypeColor(xt.eventType));return b`
                <div
                  class="cal-cell ${nt?"today":""} ${$t?"selected":""}"
                  style="animation-delay: ${lt*.015}s;"
                  @click=${()=>{I===G?g.setHistorySelectedDay(null):g.setHistorySelectedDay(G)}}
                >
                  <div class="cell-num">${G}</div>
                  <div class="cell-dots">
                    ${H.map(xt=>b`<div class="event-dot" style="background: ${xt};"></div>`)}
                  </div>
                </div>
              `})}
          </div>
        </div>

        <!-- Selected Day Expanded Accordion -->
        ${I!==null&&S.length>0?b`
              <div class="day-detail-card">
                <div class="day-detail-header">
                  <div style="flex: 1; min-width: 0;">
                    <div class="day-detail-title">${O}</div>
                    <div class="day-detail-sub">
                      ${e?`${S.length}건의 기록`:`${S.length} events logged`}
                    </div>
                  </div>
                  <div class="close-btn" @click=${()=>g.setHistorySelectedDay(null)}>
                    &#10005;
                  </div>
                </div>

                <div style="display: flex; flex-direction: column; gap: 8px;">
                  ${S.map(z=>{const G=new Date(z.timestamp).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),dt=this.getTypeTag(z.eventType,e),nt=this.getTypeColor(z.eventType),$t=z.metadata||{};let H=z.notes||"";return z.eventType==="poop"?H=`Type ${$t.consistency||4} · ${$t.size||"M"} · ${$t.mood||"Normal"}`:z.eventType==="medicine"?H=`${$t.medication||"Medication"} · ${$t.dosage||"1 dose"}`:z.eventType==="walk"&&(H=`${$t.walkDuration||"30 min"} · ${$t.walkDistance||"2.0 km"}`),b`
                      <div class="event-row" @click=${()=>g.openLoggerForEdit(z)}>
                        <div class="event-tag-badge" style="background: ${nt};">${dt}</div>
                        <div class="event-body">
                          <div class="event-title">${z.notes||this.getTypeName(z.eventType,e)}</div>
                          <div class="event-detail">${H}</div>
                        </div>
                        <div class="event-time-col">
                          <div class="event-time">${G}</div>
                          <div class="event-who">${z.loggedByName||"Me"}</div>
                        </div>
                      </div>
                    `})}
                </div>
              </div>
            `:I!==null&&S.length===0?b`
              <div class="empty-day-card">
                <div class="empty-day-title">${O}</div>
                <div class="empty-day-sub">${e?"기록이 없습니다. 수상하군요.":"Nothing logged. Suspicious."}</div>
              </div>
            `:null}


        <!-- Bottom Safe Space for Dock -->
        <div style="height: 100px;"></div>
      </div>

      <!-- Quick Search Modal Sheet -->
      ${this.searchSheetOpen?b`
            <div class="search-modal-backdrop" @click=${()=>this.searchSheetOpen=!1}>
              <div class="search-modal" @click=${z=>z.stopPropagation()}>
                <div style="display: flex; align-items: center; justify-content: space-between;">
                  <div style="font-family: var(--font-heading); font-weight: 800; font-size: 20px; color: #17140F;">
                    ${e?"기록 검색":"Search records"}
                  </div>
                  <div class="close-btn" @click=${()=>this.searchSheetOpen=!1}>&#10005;</div>
                </div>

                <div class="search-input-box">
                  <div class="glass-icon"><div class="glass-handle"></div></div>
                  <input
                    type="text"
                    class="search-input"
                    placeholder=${e?"메모나 캡션 검색...":"Search notes or captions..."}
                    .value=${this.searchQuery}
                    @input=${z=>{this.searchQuery=z.target.value}}
                  />
                </div>

                <div class="search-results-list">
                  ${(g.events||[]).filter(z=>{if(!this.searchQuery)return!0;const lt=this.searchQuery.toLowerCase();return z.notes&&z.notes.toLowerCase().includes(lt)||z.eventType&&z.eventType.toLowerCase().includes(lt)||z.loggedByName&&z.loggedByName.toLowerCase().includes(lt)}).slice(0,15).map(z=>{const lt=new Date(z.timestamp),G=lt.toLocaleDateString([],{month:"short",day:"numeric"}),dt=lt.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"});return b`
                        <div
                          class="event-row"
                          @click=${()=>{this.searchSheetOpen=!1,g.openLoggerForEdit(z)}}
                        >
                          <div class="event-tag-badge" style="background: ${this.getTypeColor(z.eventType)};">
                            ${this.getTypeTag(z.eventType,e)}
                          </div>
                          <div class="event-body">
                            <div class="event-title">${z.notes||this.getTypeName(z.eventType,e)}</div>
                            <div class="event-detail">${G} · ${dt}</div>
                          </div>
                          <div class="event-who">${z.loggedByName||"Me"}</div>
                        </div>
                      `})}
                </div>
              </div>
            </div>
          `:null}
    `}},ni.styles=At`
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
  `,ni);Sn([E()],ko.prototype,"searchSheetOpen",void 0);Sn([E()],ko.prototype,"searchQuery",void 0);ko=Sn([Mt("dooty-history")],ko);var pa=function(h,e,o,n){var a=arguments.length,l=a<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,o):n,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,e,o,n);else for(var p=h.length-1;p>=0;p--)(d=h[p])&&(l=(a<3?d(l):a>3?d(e,o,l):d(e,o))||l);return a>3&&l&&Object.defineProperty(e,o,l),l},si;let _n=(si=class extends Ft{connectedCallback(){super.connectedCallback(),this.unsubscribe=g.subscribe(()=>this.requestUpdate())}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.unsubscribe)==null||e.call(this)}render(){const e=g.currentLocale==="ko",o=g.analyticsTimeRange||"30d",n=g.events||[];let a=n;const l=Date.now();if(o==="7d"){const T=l-6048e5;a=n.filter(B=>new Date(B.timestamp).getTime()>=T)}else if(o==="30d"){const T=l-2592e6;a=n.filter(B=>new Date(B.timestamp).getTime()>=T)}else if(o==="1y"){const T=l-31536e6;a=n.filter(B=>new Date(B.timestamp).getTime()>=T)}const d=a,p=d.length,f=["MON","TUE","WED","THU","FRI","SAT","SUN"],m=["월","화","수","목","금","토","일"],y=Array.from({length:7},()=>Array(24).fill(0)),x=Array(24).fill(0);let _=Date.now();d.forEach(T=>{const B=new Date(T.timestamp),_t=B.getTime();if(!isNaN(_t)){_t<_&&(_=_t);const Et=(B.getDay()+6)%7,Nt=B.getHours();y[Et][Nt]++,x[Nt]++}});let F=1;y.forEach(T=>{T.forEach(B=>{B>F&&(F=B)})});const P=f.map((T,B)=>({day:e?m[B]:T,cells:Array.from({length:24},(_t,Et)=>{const Nt=y[B][Et],oe=F>0?Nt/F:0,we=Nt===0?"#FFF":oe<.25?"#FFE9A8":oe<.55?"#FFCE2E":oe<.8?"#FF9A3C":"#FF5A3C",He=Nt===0?"#E6DDC8":"#17140F",Eo=Et===0?"12 am":Et<12?`${Et} am`:Et===12?"12 pm":`${Et-12} pm`;return{bg:we,brd:He,count:Nt,hourLabel:Eo,dayLabel:e?m[B]:T}})}));let $=7,N=0;x.forEach((T,B)=>{T>N&&(N=T,$=B)});const R=(T,B)=>{const _t=(T+1)%24;if(B){const Et=T<12?`오전 ${T===0?12:T}`:`오후 ${T===12?12:T-12}`,Nt=_t<12?`${_t===0?12:_t}`:`${_t===12?12:_t-12}`;return`${Et}:00–${Nt}:00`}else{const Et=Nt=>{const oe=Nt<12?"am":"pm";return`${Nt%12===0?12:Nt%12}:00 ${oe}`};return`${Et(T)}–${Et(_t)}`}};let Z=1/0,j=1;for(let T=0;T<24;T++){const B=x[T]+x[(T+1)%24]+x[(T+2)%24];B<Z&&(Z=B,j=T)}const rt=R($,!1),I=R($,!0),S=Z===0?`He has never gone between ${j%12||12} and ${(j+3)%12||12} ${j<12?"am":"pm"}. Respect.`:`Quietest around ${R(j,!1)}.`,ct=Z===0?`새벽 ${j}시에서 ${(j+3)%24}시 사이에는 한 번도 없었습니다. 존경.`:`가장 한산한 시간대는 ${R(j,!0)}입니다.`,A=new Date(_),O=["January","February","March","April","May","June","July","August","September","October","November","December"],mt=p>0?`${O[A.getMonth()]} ${A.getFullYear()}`:"March 2021",Y=p>0?`${A.getFullYear()}년 ${A.getMonth()+1}월`:"2021년 3월",z=new Date(Date.now()-336*60*60*1e3),lt=d.filter(T=>T.eventType==="poop"&&new Date(T.timestamp)>=z),G=lt.filter(T=>(T.notes||"").toLowerCase().includes("4")||(T.notes||"").toLowerCase().includes("textbook")).length,dt=lt.length>0?Math.round(G/lt.length*100):(p>0,82);let nt=0;const $t=d.filter(T=>T.eventType==="poop");if($t.length>=2){const T=[...$t].sort((B,_t)=>new Date(B.timestamp).getTime()-new Date(_t.timestamp).getTime());for(let B=1;B<T.length;B++){const _t=(new Date(T[B].timestamp).getTime()-new Date(T[B-1].timestamp).getTime())/36e5;_t>nt&&(nt=_t)}}const H=new Date(Date.now()-10080*60*1e3),xt=d.filter(T=>T.eventType==="vomit"&&new Date(T.timestamp)>=H).length,W=Array(12).fill(0),st=Date.now();d.forEach(T=>{const B=Math.floor((st-new Date(T.timestamp).getTime())/6048e5);B>=0&&B<12&&W[11-B]++});const wt=Math.max(1,...W),St=W.map((T,B)=>{const _t=T===0?8:Math.round(T/wt*88)+8;return{h:`${p>0?_t:[42,58,48,70,65,82,54,76,88,72,60,96][B]}px`,bg:B===11?"#FF5A3C":"#FFCE2E",l:`W${B+1}`}}),vt=d.filter(T=>T.eventType==="walk").length,ot=d.filter(T=>T.eventType==="poop").length;d.filter(T=>T.eventType==="pee").length;const J=Math.max(1,Math.round(ot*.18+(p>0?0:412))),Dt=Math.max(1.42,Number((vt*1.8).toFixed(2))),Zt=[{v:p>0?`${J} kg`:"412 kg",l:e?"누적 배변량":"career tonnage",bg:"#FFCE2E",sub:"#7A5C00",rot:"-2deg"},{v:p>0?`${Dt} km`:"1.42 km",l:e?"총 산책 거리":"end to end",bg:"#1FC99B",sub:"#0A5A45",rot:"1.5deg"},{v:nt>0?`${Math.round(nt)} h`:"31 h",l:e?"최장 공백":"longest drought",bg:"#FFF",sub:"#6A6152",rot:"-1deg"},{v:p>0?`${ot} logs`:"62%",l:e?"동네 정복률":"block conquered",bg:"#FF5A3C",sub:"#7A1E0C",rot:"2deg"}],Vt=p>0?p/24:1,be=x.slice(6,12).reduce((T,B)=>T+B,0)/6,le=p>0?Math.round((be-Vt)/Vt*100):25,We=x.slice(12,18).reduce((T,B)=>T+B,0)/6,Se=p>0?Math.round((We-Vt)/Vt*100):10,ye=y[5].reduce((T,B)=>T+B,0)+y[6].reduce((T,B)=>T+B,0),qt=p-ye,Ht=ye/2,ie=qt/5,je=ie>0&&p>0?Math.round((Ht-ie)/ie*100):p>0?0:14,K=(x[21]+x[22]+x[23]+x[0]+x[1]+x[2]+x[3]+x[4]+x[5])/9,pt=p>0?Math.round((K-Vt)/Vt*100):-65,Pt=(T,B,_t)=>{const Et=B>=0,Nt=Math.abs(B),oe=Math.min(48,Math.max(3,Math.round(Nt/100*48))),we=Et?"50%":`${50-oe}%`,He=B===0?"0%":`${Et?"+":"−"}${Nt}%`;return{l:T,v:He,left:we,w:`${oe}%`,bg:_t}},Rt=[Pt(e?"오전 6–12시":"Morning (6–12)",le,"#FF9A3C"),Pt(e?"오후 12–18시":"Afternoon (12–18)",Se,"#1FC99B"),Pt(e?"주말 (토·일)":"Weekends",je,"#FF5A3C"),Pt(e?"심야 21–6시":"Night (21–6)",pt,"#9EC6E8")],Jt=o==="7d"?e?"7일":"7 DAYS":o==="30d"?e?"30일":"30 DAYS":o==="1y"?e?"1년":"1 YEAR":e?"전체":"ALL TIME",de=o==="7d"?e?`지난 7일간 ${p.toLocaleString()}건`:`${p.toLocaleString()} logs in last 7 days`:o==="30d"?e?`지난 30일간 ${p.toLocaleString()}건`:`${p.toLocaleString()} logs in last 30 days`:o==="1y"?e?`지난 1년간 ${p.toLocaleString()}건`:`${p.toLocaleString()} logs in last year`:e?p>0?`${Y}부터 ${p.toLocaleString()}건`:"2021년 3월부터 1,204건":p>0?`${p.toLocaleString()} logs since ${mt}`:"1,204 logs since March 2021";return b`
      <div class="page-header">
        <div class="page-title">${e?"숫자들":"The numbers"}</div>
        <div class="page-sub">${de}</div>
      </div>

      <!-- Segmented Time-Range Selector -->
      <div class="time-selector-row">
        <button
          class="time-pill-btn ${o==="7d"?"active":""}"
          @click=${()=>g.setAnalyticsTimeRange("7d")}
        >
          ${e?"7일":"7D"}
        </button>
        <button
          class="time-pill-btn ${o==="30d"?"active":""}"
          @click=${()=>g.setAnalyticsTimeRange("30d")}
        >
          ${e?"30일":"30D"}
        </button>
        <button
          class="time-pill-btn ${o==="1y"?"active":""}"
          @click=${()=>g.setAnalyticsTimeRange("1y")}
        >
          ${e?"1년":"1Y"}
        </button>
        <button
          class="time-pill-btn ${o==="all"?"active":""}"
          @click=${()=>g.setAnalyticsTimeRange("all")}
        >
          ${e?"전체":"ALL"}
        </button>
      </div>

      <!-- When it happens 24h Heatmap -->
      <div class="card-block">
        <div class="card-header">
          <div class="card-title">${e?"언제 하나요":"When it happens"}</div>
          <div class="card-badge">${Jt}</div>
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
          ${P.map(T=>b`
              <div class="heat-row">
                <div class="heat-day-lbl">${T.day}</div>
                <div class="heat-cells">
                  ${T.cells.map(B=>b`
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
          <div style="font-size: 9px; font-weight: 800; color: #9A9080;">${e?"쿨쿨":"ZZZ"}</div>
          <div class="heat-legend-bar"></div>
          <div style="font-size: 9px; font-weight: 800; color: #9A9080;">${e?"출발!":"GO!"}</div>
        </div>

        <!-- Contextual peak caption -->
        <div class="heat-caption">
          ${e?b`가장 많은 시간은 <strong style="color: #17140F;">${I}</strong>. ${ct}`:b`Peak is <strong style="color: #17140F;">${rt}</strong>. ${S}`}
        </div>
      </div>

      <!-- Gut Score Banner -->
      <div
        class="gut-card"
        @click=${()=>this.dispatchEvent(new CustomEvent("dooty-navigate",{bubbles:!0,composed:!0,detail:"deep"}))}
      >
        <div
          class="gut-ring"
          style="background: conic-gradient(#17140F 0% ${dt}%, #FFF ${dt}% 100%);"
        >
          <div class="gut-ring-inner">
            <div class="gut-score-num">${dt}</div>
            <div class="gut-score-lbl">${e?"장":"GUT"}</div>
          </div>
        </div>
        <div style="flex: 1; min-width: 0;">
          <div style="font-family: var(--font-heading); font-weight: 800; font-size: 18px; color: #17140F; letter-spacing: -0.4px;">
            ${e?"탄탄합니다, 말 그대로.":"Solid. Literally."}
          </div>
          <div style="font-size: 12px; font-weight: 600; color: #0A5A45; line-height: 1.4; margin-top: 3px;">
            ${e?`${dt}%의 날이 완벽한 4단계. 눌러서 자세히 보기.`:`Perfect 4s on ${dt}% of days. Tap for the full breakdown.`}
          </div>
          ${xt>0?b`
                <div class="flag-badge">
                  ${e?`주의 ${xt}건`:`${xt} FLAG`}
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
          ${St.map(T=>b`
              <div
                style="flex: 1; display: flex; flex-direction: column; justify-content: flex-end; align-items: center; gap: 5px; height: 100%;"
              >
                <div
                  style="width: 100%; border-radius: 6px 6px 3px 3px; border: 2px solid #17140F; box-sizing: border-box; background: ${T.bg}; height: ${T.h};"
                ></div>
                <div style="font-size: 7.5px; font-weight: 800; color: #B5AB99;">${T.l}</div>
              </div>
            `)}
        </div>
      </div>

      <!-- Trophy Case -->
      <div class="trophy-case">
        <div class="trophy-title">${e?"트로피 보관함":"Trophy case"}</div>
        <div class="trophy-grid">
          ${Zt.map(T=>b`
              <div
                class="trophy-item"
                style="background: ${T.bg}; transform: rotate(${T.rot});"
              >
                <div class="trophy-val">${T.v}</div>
                <div class="trophy-sub" style="color: ${T.sub};">${T.l}</div>
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
          ${Rt.map(T=>b`
              <div class="corr-row">
                <div class="corr-lbl">${T.l}</div>
                <div class="corr-bar-track">
                  <div class="corr-center-line"></div>
                  <div
                    style="position: absolute; top: 0; bottom: 0; background: ${T.bg}; left: ${T.left}; width: ${T.w};"
                  ></div>
                </div>
                <div class="corr-val">${T.v}</div>
              </div>
            `)}
        </div>
      </div>
    `}},si.styles=At`
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
  `,si);pa([E()],_n.prototype,"unsubscribe",void 0);_n=pa([Mt("dooty-numbers")],_n);function Bl(h){return h&&h.__esModule&&Object.prototype.hasOwnProperty.call(h,"default")?h.default:h}var Bi={exports:{}};/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */var Ol=Bi.exports,Ks;function Rl(){return Ks||(Ks=1,(function(h,e){(function(o,n){n(e)})(Ol,(function(o){var n="1.9.4";function a(t){var i,s,r,c;for(s=1,r=arguments.length;s<r;s++){c=arguments[s];for(i in c)t[i]=c[i]}return t}var l=Object.create||(function(){function t(){}return function(i){return t.prototype=i,new t}})();function d(t,i){var s=Array.prototype.slice;if(t.bind)return t.bind.apply(t,s.call(arguments,1));var r=s.call(arguments,2);return function(){return t.apply(i,r.length?r.concat(s.call(arguments)):arguments)}}var p=0;function f(t){return"_leaflet_id"in t||(t._leaflet_id=++p),t._leaflet_id}function m(t,i,s){var r,c,u,v;return v=function(){r=!1,c&&(u.apply(s,c),c=!1)},u=function(){r?c=arguments:(t.apply(s,arguments),setTimeout(v,i),r=!0)},u}function y(t,i,s){var r=i[1],c=i[0],u=r-c;return t===r&&s?t:((t-c)%u+u)%u+c}function x(){return!1}function _(t,i){if(i===!1)return t;var s=Math.pow(10,i===void 0?6:i);return Math.round(t*s)/s}function F(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function P(t){return F(t).split(/\s+/)}function $(t,i){Object.prototype.hasOwnProperty.call(t,"options")||(t.options=t.options?l(t.options):{});for(var s in i)t.options[s]=i[s];return t.options}function N(t,i,s){var r=[];for(var c in t)r.push(encodeURIComponent(s?c.toUpperCase():c)+"="+encodeURIComponent(t[c]));return(!i||i.indexOf("?")===-1?"?":"&")+r.join("&")}var R=/\{ *([\w_ -]+) *\}/g;function Z(t,i){return t.replace(R,function(s,r){var c=i[r];if(c===void 0)throw new Error("No value provided for variable "+s);return typeof c=="function"&&(c=c(i)),c})}var j=Array.isArray||function(t){return Object.prototype.toString.call(t)==="[object Array]"};function rt(t,i){for(var s=0;s<t.length;s++)if(t[s]===i)return s;return-1}var I="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function S(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}var ct=0;function A(t){var i=+new Date,s=Math.max(0,16-(i-ct));return ct=i+s,window.setTimeout(t,s)}var O=window.requestAnimationFrame||S("RequestAnimationFrame")||A,mt=window.cancelAnimationFrame||S("CancelAnimationFrame")||S("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)};function Y(t,i,s){if(s&&O===A)t.call(i);else return O.call(window,d(t,i))}function z(t){t&&mt.call(window,t)}var lt={__proto__:null,extend:a,create:l,bind:d,get lastId(){return p},stamp:f,throttle:m,wrapNum:y,falseFn:x,formatNum:_,trim:F,splitWords:P,setOptions:$,getParamString:N,template:Z,isArray:j,indexOf:rt,emptyImageUrl:I,requestFn:O,cancelFn:mt,requestAnimFrame:Y,cancelAnimFrame:z};function G(){}G.extend=function(t){var i=function(){$(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},s=i.__super__=this.prototype,r=l(s);r.constructor=i,i.prototype=r;for(var c in this)Object.prototype.hasOwnProperty.call(this,c)&&c!=="prototype"&&c!=="__super__"&&(i[c]=this[c]);return t.statics&&a(i,t.statics),t.includes&&(dt(t.includes),a.apply(null,[r].concat(t.includes))),a(r,t),delete r.statics,delete r.includes,r.options&&(r.options=s.options?l(s.options):{},a(r.options,t.options)),r._initHooks=[],r.callInitHooks=function(){if(!this._initHooksCalled){s.callInitHooks&&s.callInitHooks.call(this),this._initHooksCalled=!0;for(var u=0,v=r._initHooks.length;u<v;u++)r._initHooks[u].call(this)}},i},G.include=function(t){var i=this.prototype.options;return a(this.prototype,t),t.options&&(this.prototype.options=i,this.mergeOptions(t.options)),this},G.mergeOptions=function(t){return a(this.prototype.options,t),this},G.addInitHook=function(t){var i=Array.prototype.slice.call(arguments,1),s=typeof t=="function"?t:function(){this[t].apply(this,i)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(s),this};function dt(t){if(!(typeof L>"u"||!L||!L.Mixin)){t=j(t)?t:[t];for(var i=0;i<t.length;i++)t[i]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var nt={on:function(t,i,s){if(typeof t=="object")for(var r in t)this._on(r,t[r],i);else{t=P(t);for(var c=0,u=t.length;c<u;c++)this._on(t[c],i,s)}return this},off:function(t,i,s){if(!arguments.length)delete this._events;else if(typeof t=="object")for(var r in t)this._off(r,t[r],i);else{t=P(t);for(var c=arguments.length===1,u=0,v=t.length;u<v;u++)c?this._off(t[u]):this._off(t[u],i,s)}return this},_on:function(t,i,s,r){if(typeof i!="function"){console.warn("wrong listener type: "+typeof i);return}if(this._listens(t,i,s)===!1){s===this&&(s=void 0);var c={fn:i,ctx:s};r&&(c.once=!0),this._events=this._events||{},this._events[t]=this._events[t]||[],this._events[t].push(c)}},_off:function(t,i,s){var r,c,u;if(this._events&&(r=this._events[t],!!r)){if(arguments.length===1){if(this._firingCount)for(c=0,u=r.length;c<u;c++)r[c].fn=x;delete this._events[t];return}if(typeof i!="function"){console.warn("wrong listener type: "+typeof i);return}var v=this._listens(t,i,s);if(v!==!1){var w=r[v];this._firingCount&&(w.fn=x,this._events[t]=r=r.slice()),r.splice(v,1)}}},fire:function(t,i,s){if(!this.listens(t,s))return this;var r=a({},i,{type:t,target:this,sourceTarget:i&&i.sourceTarget||this});if(this._events){var c=this._events[t];if(c){this._firingCount=this._firingCount+1||1;for(var u=0,v=c.length;u<v;u++){var w=c[u],k=w.fn;w.once&&this.off(t,k,w.ctx),k.call(w.ctx||this,r)}this._firingCount--}}return s&&this._propagateEvent(r),this},listens:function(t,i,s,r){typeof t!="string"&&console.warn('"string" type argument expected');var c=i;typeof i!="function"&&(r=!!i,c=void 0,s=void 0);var u=this._events&&this._events[t];if(u&&u.length&&this._listens(t,c,s)!==!1)return!0;if(r){for(var v in this._eventParents)if(this._eventParents[v].listens(t,i,s,r))return!0}return!1},_listens:function(t,i,s){if(!this._events)return!1;var r=this._events[t]||[];if(!i)return!!r.length;s===this&&(s=void 0);for(var c=0,u=r.length;c<u;c++)if(r[c].fn===i&&r[c].ctx===s)return c;return!1},once:function(t,i,s){if(typeof t=="object")for(var r in t)this._on(r,t[r],i,!0);else{t=P(t);for(var c=0,u=t.length;c<u;c++)this._on(t[c],i,s,!0)}return this},addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[f(t)]=t,this},removeEventParent:function(t){return this._eventParents&&delete this._eventParents[f(t)],this},_propagateEvent:function(t){for(var i in this._eventParents)this._eventParents[i].fire(t.type,a({layer:t.target,propagatedFrom:t.target},t),!0)}};nt.addEventListener=nt.on,nt.removeEventListener=nt.clearAllEventListeners=nt.off,nt.addOneTimeEventListener=nt.once,nt.fireEvent=nt.fire,nt.hasEventListeners=nt.listens;var $t=G.extend(nt);function H(t,i,s){this.x=s?Math.round(t):t,this.y=s?Math.round(i):i}var xt=Math.trunc||function(t){return t>0?Math.floor(t):Math.ceil(t)};H.prototype={clone:function(){return new H(this.x,this.y)},add:function(t){return this.clone()._add(W(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(W(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},scaleBy:function(t){return new H(this.x*t.x,this.y*t.y)},unscaleBy:function(t){return new H(this.x/t.x,this.y/t.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=xt(this.x),this.y=xt(this.y),this},distanceTo:function(t){t=W(t);var i=t.x-this.x,s=t.y-this.y;return Math.sqrt(i*i+s*s)},equals:function(t){return t=W(t),t.x===this.x&&t.y===this.y},contains:function(t){return t=W(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+_(this.x)+", "+_(this.y)+")"}};function W(t,i,s){return t instanceof H?t:j(t)?new H(t[0],t[1]):t==null?t:typeof t=="object"&&"x"in t&&"y"in t?new H(t.x,t.y):new H(t,i,s)}function st(t,i){if(t)for(var s=i?[t,i]:t,r=0,c=s.length;r<c;r++)this.extend(s[r])}st.prototype={extend:function(t){var i,s;if(!t)return this;if(t instanceof H||typeof t[0]=="number"||"x"in t)i=s=W(t);else if(t=wt(t),i=t.min,s=t.max,!i||!s)return this;return!this.min&&!this.max?(this.min=i.clone(),this.max=s.clone()):(this.min.x=Math.min(i.x,this.min.x),this.max.x=Math.max(s.x,this.max.x),this.min.y=Math.min(i.y,this.min.y),this.max.y=Math.max(s.y,this.max.y)),this},getCenter:function(t){return W((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return W(this.min.x,this.max.y)},getTopRight:function(){return W(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var i,s;return typeof t[0]=="number"||t instanceof H?t=W(t):t=wt(t),t instanceof st?(i=t.min,s=t.max):i=s=t,i.x>=this.min.x&&s.x<=this.max.x&&i.y>=this.min.y&&s.y<=this.max.y},intersects:function(t){t=wt(t);var i=this.min,s=this.max,r=t.min,c=t.max,u=c.x>=i.x&&r.x<=s.x,v=c.y>=i.y&&r.y<=s.y;return u&&v},overlaps:function(t){t=wt(t);var i=this.min,s=this.max,r=t.min,c=t.max,u=c.x>i.x&&r.x<s.x,v=c.y>i.y&&r.y<s.y;return u&&v},isValid:function(){return!!(this.min&&this.max)},pad:function(t){var i=this.min,s=this.max,r=Math.abs(i.x-s.x)*t,c=Math.abs(i.y-s.y)*t;return wt(W(i.x-r,i.y-c),W(s.x+r,s.y+c))},equals:function(t){return t?(t=wt(t),this.min.equals(t.getTopLeft())&&this.max.equals(t.getBottomRight())):!1}};function wt(t,i){return!t||t instanceof st?t:new st(t,i)}function St(t,i){if(t)for(var s=i?[t,i]:t,r=0,c=s.length;r<c;r++)this.extend(s[r])}St.prototype={extend:function(t){var i=this._southWest,s=this._northEast,r,c;if(t instanceof ot)r=t,c=t;else if(t instanceof St){if(r=t._southWest,c=t._northEast,!r||!c)return this}else return t?this.extend(J(t)||vt(t)):this;return!i&&!s?(this._southWest=new ot(r.lat,r.lng),this._northEast=new ot(c.lat,c.lng)):(i.lat=Math.min(r.lat,i.lat),i.lng=Math.min(r.lng,i.lng),s.lat=Math.max(c.lat,s.lat),s.lng=Math.max(c.lng,s.lng)),this},pad:function(t){var i=this._southWest,s=this._northEast,r=Math.abs(i.lat-s.lat)*t,c=Math.abs(i.lng-s.lng)*t;return new St(new ot(i.lat-r,i.lng-c),new ot(s.lat+r,s.lng+c))},getCenter:function(){return new ot((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new ot(this.getNorth(),this.getWest())},getSouthEast:function(){return new ot(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){typeof t[0]=="number"||t instanceof ot||"lat"in t?t=J(t):t=vt(t);var i=this._southWest,s=this._northEast,r,c;return t instanceof St?(r=t.getSouthWest(),c=t.getNorthEast()):r=c=t,r.lat>=i.lat&&c.lat<=s.lat&&r.lng>=i.lng&&c.lng<=s.lng},intersects:function(t){t=vt(t);var i=this._southWest,s=this._northEast,r=t.getSouthWest(),c=t.getNorthEast(),u=c.lat>=i.lat&&r.lat<=s.lat,v=c.lng>=i.lng&&r.lng<=s.lng;return u&&v},overlaps:function(t){t=vt(t);var i=this._southWest,s=this._northEast,r=t.getSouthWest(),c=t.getNorthEast(),u=c.lat>i.lat&&r.lat<s.lat,v=c.lng>i.lng&&r.lng<s.lng;return u&&v},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t,i){return t?(t=vt(t),this._southWest.equals(t.getSouthWest(),i)&&this._northEast.equals(t.getNorthEast(),i)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function vt(t,i){return t instanceof St?t:new St(t,i)}function ot(t,i,s){if(isNaN(t)||isNaN(i))throw new Error("Invalid LatLng object: ("+t+", "+i+")");this.lat=+t,this.lng=+i,s!==void 0&&(this.alt=+s)}ot.prototype={equals:function(t,i){if(!t)return!1;t=J(t);var s=Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng));return s<=(i===void 0?1e-9:i)},toString:function(t){return"LatLng("+_(this.lat,t)+", "+_(this.lng,t)+")"},distanceTo:function(t){return Zt.distance(this,J(t))},wrap:function(){return Zt.wrapLatLng(this)},toBounds:function(t){var i=180*t/40075017,s=i/Math.cos(Math.PI/180*this.lat);return vt([this.lat-i,this.lng-s],[this.lat+i,this.lng+s])},clone:function(){return new ot(this.lat,this.lng,this.alt)}};function J(t,i,s){return t instanceof ot?t:j(t)&&typeof t[0]!="object"?t.length===3?new ot(t[0],t[1],t[2]):t.length===2?new ot(t[0],t[1]):null:t==null?t:typeof t=="object"&&"lat"in t?new ot(t.lat,"lng"in t?t.lng:t.lon,t.alt):i===void 0?null:new ot(t,i,s)}var Dt={latLngToPoint:function(t,i){var s=this.projection.project(t),r=this.scale(i);return this.transformation._transform(s,r)},pointToLatLng:function(t,i){var s=this.scale(i),r=this.transformation.untransform(t,s);return this.projection.unproject(r)},project:function(t){return this.projection.project(t)},unproject:function(t){return this.projection.unproject(t)},scale:function(t){return 256*Math.pow(2,t)},zoom:function(t){return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){if(this.infinite)return null;var i=this.projection.bounds,s=this.scale(t),r=this.transformation.transform(i.min,s),c=this.transformation.transform(i.max,s);return new st(r,c)},infinite:!1,wrapLatLng:function(t){var i=this.wrapLng?y(t.lng,this.wrapLng,!0):t.lng,s=this.wrapLat?y(t.lat,this.wrapLat,!0):t.lat,r=t.alt;return new ot(s,i,r)},wrapLatLngBounds:function(t){var i=t.getCenter(),s=this.wrapLatLng(i),r=i.lat-s.lat,c=i.lng-s.lng;if(r===0&&c===0)return t;var u=t.getSouthWest(),v=t.getNorthEast(),w=new ot(u.lat-r,u.lng-c),k=new ot(v.lat-r,v.lng-c);return new St(w,k)}},Zt=a({},Dt,{wrapLng:[-180,180],R:6371e3,distance:function(t,i){var s=Math.PI/180,r=t.lat*s,c=i.lat*s,u=Math.sin((i.lat-t.lat)*s/2),v=Math.sin((i.lng-t.lng)*s/2),w=u*u+Math.cos(r)*Math.cos(c)*v*v,k=2*Math.atan2(Math.sqrt(w),Math.sqrt(1-w));return this.R*k}}),Vt=6378137,Gt={R:Vt,MAX_LATITUDE:85.0511287798,project:function(t){var i=Math.PI/180,s=this.MAX_LATITUDE,r=Math.max(Math.min(s,t.lat),-s),c=Math.sin(r*i);return new H(this.R*t.lng*i,this.R*Math.log((1+c)/(1-c))/2)},unproject:function(t){var i=180/Math.PI;return new ot((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*i,t.x*i/this.R)},bounds:(function(){var t=Vt*Math.PI;return new st([-t,-t],[t,t])})()};function be(t,i,s,r){if(j(t)){this._a=t[0],this._b=t[1],this._c=t[2],this._d=t[3];return}this._a=t,this._b=i,this._c=s,this._d=r}be.prototype={transform:function(t,i){return this._transform(t.clone(),i)},_transform:function(t,i){return i=i||1,t.x=i*(this._a*t.x+this._b),t.y=i*(this._c*t.y+this._d),t},untransform:function(t,i){return i=i||1,new H((t.x/i-this._b)/this._a,(t.y/i-this._d)/this._c)}};function le(t,i,s,r){return new be(t,i,s,r)}var Le=a({},Zt,{code:"EPSG:3857",projection:Gt,transformation:(function(){var t=.5/(Math.PI*Gt.R);return le(t,.5,-t,.5)})()}),We=a({},Le,{code:"EPSG:900913"});function Se(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function ye(t,i){var s="",r,c,u,v,w,k;for(r=0,u=t.length;r<u;r++){for(w=t[r],c=0,v=w.length;c<v;c++)k=w[c],s+=(c?"L":"M")+k.x+" "+k.y;s+=i?U.svg?"z":"x":""}return s||"M0 0"}var qt=document.documentElement.style,Ht="ActiveXObject"in window,ie=Ht&&!document.addEventListener,je="msLaunchUri"in navigator&&!("documentMode"in document),M=ce("webkit"),K=ce("android"),pt=ce("android 2")||ce("android 3"),Pt=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),Rt=K&&ce("Google")&&Pt<537&&!("AudioNode"in window),Jt=!!window.opera,de=!je&&ce("chrome"),T=ce("gecko")&&!M&&!Jt&&!Ht,B=!de&&ce("safari"),_t=ce("phantom"),Et="OTransition"in qt,Nt=navigator.platform.indexOf("Win")===0,oe=Ht&&"transition"in qt,we="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!pt,He="MozPerspective"in qt,Eo=!window.L_DISABLE_3D&&(oe||we||He)&&!Et&&!_t,Fi=typeof orientation<"u"||ce("mobile"),ua=Fi&&M,fa=Fi&&we,Cn=!window.PointerEvent&&window.MSPointerEvent,En=!!(window.PointerEvent||Cn),zn="ontouchstart"in window||!!window.TouchEvent,ga=!window.L_NO_TOUCH&&(zn||En),ma=Fi&&Jt,va=Fi&&T,xa=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,ba=(function(){var t=!1;try{var i=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassiveEventSupport",x,i),window.removeEventListener("testPassiveEventSupport",x,i)}catch{}return t})(),ya=(function(){return!!document.createElement("canvas").getContext})(),zo=!!(document.createElementNS&&Se("svg").createSVGRect),wa=!!zo&&(function(){var t=document.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"})(),_a=!zo&&(function(){try{var t=document.createElement("div");t.innerHTML='<v:shape adj="1"/>';var i=t.firstChild;return i.style.behavior="url(#default#VML)",i&&typeof i.adj=="object"}catch{return!1}})(),ka=navigator.platform.indexOf("Mac")===0,Fa=navigator.platform.indexOf("Linux")===0;function ce(t){return navigator.userAgent.toLowerCase().indexOf(t)>=0}var U={ie:Ht,ielt9:ie,edge:je,webkit:M,android:K,android23:pt,androidStock:Rt,opera:Jt,chrome:de,gecko:T,safari:B,phantom:_t,opera12:Et,win:Nt,ie3d:oe,webkit3d:we,gecko3d:He,any3d:Eo,mobile:Fi,mobileWebkit:ua,mobileWebkit3d:fa,msPointer:Cn,pointer:En,touch:ga,touchNative:zn,mobileOpera:ma,mobileGecko:va,retina:xa,passiveEvents:ba,canvas:ya,svg:zo,vml:_a,inlineSvg:wa,mac:ka,linux:Fa},An=U.msPointer?"MSPointerDown":"pointerdown",Mn=U.msPointer?"MSPointerMove":"pointermove",Dn=U.msPointer?"MSPointerUp":"pointerup",Nn=U.msPointer?"MSPointerCancel":"pointercancel",Ao={touchstart:An,touchmove:Mn,touchend:Dn,touchcancel:Nn},In={touchstart:Ca,touchmove:Qi,touchend:Qi,touchcancel:Qi},Ue={},Bn=!1;function $a(t,i,s){return i==="touchstart"&&Ta(),In[i]?(s=In[i].bind(this,s),t.addEventListener(Ao[i],s,!1),s):(console.warn("wrong event specified:",i),x)}function Pa(t,i,s){if(!Ao[i]){console.warn("wrong event specified:",i);return}t.removeEventListener(Ao[i],s,!1)}function La(t){Ue[t.pointerId]=t}function Sa(t){Ue[t.pointerId]&&(Ue[t.pointerId]=t)}function On(t){delete Ue[t.pointerId]}function Ta(){Bn||(document.addEventListener(An,La,!0),document.addEventListener(Mn,Sa,!0),document.addEventListener(Dn,On,!0),document.addEventListener(Nn,On,!0),Bn=!0)}function Qi(t,i){if(i.pointerType!==(i.MSPOINTER_TYPE_MOUSE||"mouse")){i.touches=[];for(var s in Ue)i.touches.push(Ue[s]);i.changedTouches=[i],t(i)}}function Ca(t,i){i.MSPOINTER_TYPE_TOUCH&&i.pointerType===i.MSPOINTER_TYPE_TOUCH&&Wt(i),Qi(t,i)}function Ea(t){var i={},s,r;for(r in t)s=t[r],i[r]=s&&s.bind?s.bind(t):s;return t=i,i.type="dblclick",i.detail=2,i.isTrusted=!1,i._simulated=!0,i}var za=200;function Aa(t,i){t.addEventListener("dblclick",i);var s=0,r;function c(u){if(u.detail!==1){r=u.detail;return}if(!(u.pointerType==="mouse"||u.sourceCapabilities&&!u.sourceCapabilities.firesTouchEvents)){var v=Un(u);if(!(v.some(function(k){return k instanceof HTMLLabelElement&&k.attributes.for})&&!v.some(function(k){return k instanceof HTMLInputElement||k instanceof HTMLSelectElement}))){var w=Date.now();w-s<=za?(r++,r===2&&i(Ea(u))):r=1,s=w}}}return t.addEventListener("click",c),{dblclick:i,simDblclick:c}}function Ma(t,i){t.removeEventListener("dblclick",i.dblclick),t.removeEventListener("click",i.simDblclick)}var Mo=eo(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),$i=eo(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),Rn=$i==="webkitTransition"||$i==="OTransition"?$i+"End":"transitionend";function Wn(t){return typeof t=="string"?document.getElementById(t):t}function Pi(t,i){var s=t.style[i]||t.currentStyle&&t.currentStyle[i];if((!s||s==="auto")&&document.defaultView){var r=document.defaultView.getComputedStyle(t,null);s=r?r[i]:null}return s==="auto"?null:s}function ht(t,i,s){var r=document.createElement(t);return r.className=i||"",s&&s.appendChild(r),r}function kt(t){var i=t.parentNode;i&&i.removeChild(t)}function Xi(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function Ze(t){var i=t.parentNode;i&&i.lastChild!==t&&i.appendChild(t)}function Ge(t){var i=t.parentNode;i&&i.firstChild!==t&&i.insertBefore(t,i.firstChild)}function Do(t,i){if(t.classList!==void 0)return t.classList.contains(i);var s=to(t);return s.length>0&&new RegExp("(^|\\s)"+i+"(\\s|$)").test(s)}function Q(t,i){if(t.classList!==void 0)for(var s=P(i),r=0,c=s.length;r<c;r++)t.classList.add(s[r]);else if(!Do(t,i)){var u=to(t);No(t,(u?u+" ":"")+i)}}function Lt(t,i){t.classList!==void 0?t.classList.remove(i):No(t,F((" "+to(t)+" ").replace(" "+i+" "," ")))}function No(t,i){t.className.baseVal===void 0?t.className=i:t.className.baseVal=i}function to(t){return t.correspondingElement&&(t=t.correspondingElement),t.className.baseVal===void 0?t.className:t.className.baseVal}function Yt(t,i){"opacity"in t.style?t.style.opacity=i:"filter"in t.style&&Da(t,i)}function Da(t,i){var s=!1,r="DXImageTransform.Microsoft.Alpha";try{s=t.filters.item(r)}catch{if(i===1)return}i=Math.round(i*100),s?(s.Enabled=i!==100,s.Opacity=i):t.style.filter+=" progid:"+r+"(opacity="+i+")"}function eo(t){for(var i=document.documentElement.style,s=0;s<t.length;s++)if(t[s]in i)return t[s];return!1}function Te(t,i,s){var r=i||new H(0,0);t.style[Mo]=(U.ie3d?"translate("+r.x+"px,"+r.y+"px)":"translate3d("+r.x+"px,"+r.y+"px,0)")+(s?" scale("+s+")":"")}function Tt(t,i){t._leaflet_pos=i,U.any3d?Te(t,i):(t.style.left=i.x+"px",t.style.top=i.y+"px")}function Ce(t){return t._leaflet_pos||new H(0,0)}var Li,Si,Io;if("onselectstart"in document)Li=function(){V(window,"selectstart",Wt)},Si=function(){bt(window,"selectstart",Wt)};else{var Ti=eo(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Li=function(){if(Ti){var t=document.documentElement.style;Io=t[Ti],t[Ti]="none"}},Si=function(){Ti&&(document.documentElement.style[Ti]=Io,Io=void 0)}}function Bo(){V(window,"dragstart",Wt)}function Oo(){bt(window,"dragstart",Wt)}var io,Ro;function Wo(t){for(;t.tabIndex===-1;)t=t.parentNode;t.style&&(oo(),io=t,Ro=t.style.outlineStyle,t.style.outlineStyle="none",V(window,"keydown",oo))}function oo(){io&&(io.style.outlineStyle=Ro,io=void 0,Ro=void 0,bt(window,"keydown",oo))}function jn(t){do t=t.parentNode;while((!t.offsetWidth||!t.offsetHeight)&&t!==document.body);return t}function jo(t){var i=t.getBoundingClientRect();return{x:i.width/t.offsetWidth||1,y:i.height/t.offsetHeight||1,boundingClientRect:i}}var Na={__proto__:null,TRANSFORM:Mo,TRANSITION:$i,TRANSITION_END:Rn,get:Wn,getStyle:Pi,create:ht,remove:kt,empty:Xi,toFront:Ze,toBack:Ge,hasClass:Do,addClass:Q,removeClass:Lt,setClass:No,getClass:to,setOpacity:Yt,testProp:eo,setTransform:Te,setPosition:Tt,getPosition:Ce,get disableTextSelection(){return Li},get enableTextSelection(){return Si},disableImageDrag:Bo,enableImageDrag:Oo,preventOutline:Wo,restoreOutline:oo,getSizedParentNode:jn,getScale:jo};function V(t,i,s,r){if(i&&typeof i=="object")for(var c in i)Uo(t,c,i[c],s);else{i=P(i);for(var u=0,v=i.length;u<v;u++)Uo(t,i[u],s,r)}return this}var he="_leaflet_events";function bt(t,i,s,r){if(arguments.length===1)Hn(t),delete t[he];else if(i&&typeof i=="object")for(var c in i)Zo(t,c,i[c],s);else if(i=P(i),arguments.length===2)Hn(t,function(w){return rt(i,w)!==-1});else for(var u=0,v=i.length;u<v;u++)Zo(t,i[u],s,r);return this}function Hn(t,i){for(var s in t[he]){var r=s.split(/\d/)[0];(!i||i(r))&&Zo(t,r,null,null,s)}}var Ho={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function Uo(t,i,s,r){var c=i+f(s)+(r?"_"+f(r):"");if(t[he]&&t[he][c])return this;var u=function(w){return s.call(r||t,w||window.event)},v=u;!U.touchNative&&U.pointer&&i.indexOf("touch")===0?u=$a(t,i,u):U.touch&&i==="dblclick"?u=Aa(t,u):"addEventListener"in t?i==="touchstart"||i==="touchmove"||i==="wheel"||i==="mousewheel"?t.addEventListener(Ho[i]||i,u,U.passiveEvents?{passive:!1}:!1):i==="mouseenter"||i==="mouseleave"?(u=function(w){w=w||window.event,qo(t,w)&&v(w)},t.addEventListener(Ho[i],u,!1)):t.addEventListener(i,v,!1):t.attachEvent("on"+i,u),t[he]=t[he]||{},t[he][c]=u}function Zo(t,i,s,r,c){c=c||i+f(s)+(r?"_"+f(r):"");var u=t[he]&&t[he][c];if(!u)return this;!U.touchNative&&U.pointer&&i.indexOf("touch")===0?Pa(t,i,u):U.touch&&i==="dblclick"?Ma(t,u):"removeEventListener"in t?t.removeEventListener(Ho[i]||i,u,!1):t.detachEvent("on"+i,u),t[he][c]=null}function Ee(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,this}function Go(t){return Uo(t,"wheel",Ee),this}function Ci(t){return V(t,"mousedown touchstart dblclick contextmenu",Ee),t._leaflet_disable_click=!0,this}function Wt(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}function ze(t){return Wt(t),Ee(t),this}function Un(t){if(t.composedPath)return t.composedPath();for(var i=[],s=t.target;s;)i.push(s),s=s.parentNode;return i}function Zn(t,i){if(!i)return new H(t.clientX,t.clientY);var s=jo(i),r=s.boundingClientRect;return new H((t.clientX-r.left)/s.x-i.clientLeft,(t.clientY-r.top)/s.y-i.clientTop)}var Ia=U.linux&&U.chrome?window.devicePixelRatio:U.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function Gn(t){return U.edge?t.wheelDeltaY/2:t.deltaY&&t.deltaMode===0?-t.deltaY/Ia:t.deltaY&&t.deltaMode===1?-t.deltaY*20:t.deltaY&&t.deltaMode===2?-t.deltaY*60:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?-t.detail*20:t.detail?t.detail/-32765*60:0}function qo(t,i){var s=i.relatedTarget;if(!s)return!0;try{for(;s&&s!==t;)s=s.parentNode}catch{return!1}return s!==t}var Ba={__proto__:null,on:V,off:bt,stopPropagation:Ee,disableScrollPropagation:Go,disableClickPropagation:Ci,preventDefault:Wt,stop:ze,getPropagationPath:Un,getMousePosition:Zn,getWheelDelta:Gn,isExternalTarget:qo,addListener:V,removeListener:bt},qn=$t.extend({run:function(t,i,s,r){this.stop(),this._el=t,this._inProgress=!0,this._duration=s||.25,this._easeOutPower=1/Math.max(r||.5,.2),this._startPos=Ce(t),this._offset=i.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=Y(this._animate,this),this._step()},_step:function(t){var i=+new Date-this._startTime,s=this._duration*1e3;i<s?this._runFrame(this._easeOut(i/s),t):(this._runFrame(1),this._complete())},_runFrame:function(t,i){var s=this._startPos.add(this._offset.multiplyBy(t));i&&s._round(),Tt(this._el,s),this.fire("step")},_complete:function(){z(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),at=$t.extend({options:{crs:Le,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(t,i){i=$(this,i),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(t),this._initLayout(),this._onResize=d(this._onResize,this),this._initEvents(),i.maxBounds&&this.setMaxBounds(i.maxBounds),i.zoom!==void 0&&(this._zoom=this._limitZoom(i.zoom)),i.center&&i.zoom!==void 0&&this.setView(J(i.center),i.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=$i&&U.any3d&&!U.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),V(this._proxy,Rn,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(t,i,s){if(i=i===void 0?this._zoom:this._limitZoom(i),t=this._limitCenter(J(t),i,this.options.maxBounds),s=s||{},this._stop(),this._loaded&&!s.reset&&s!==!0){s.animate!==void 0&&(s.zoom=a({animate:s.animate},s.zoom),s.pan=a({animate:s.animate,duration:s.duration},s.pan));var r=this._zoom!==i?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,i,s.zoom):this._tryAnimatedPan(t,s.pan);if(r)return clearTimeout(this._sizeTimer),this}return this._resetView(t,i,s.pan&&s.pan.noMoveStart),this},setZoom:function(t,i){return this._loaded?this.setView(this.getCenter(),t,{zoom:i}):(this._zoom=t,this)},zoomIn:function(t,i){return t=t||(U.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+t,i)},zoomOut:function(t,i){return t=t||(U.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-t,i)},setZoomAround:function(t,i,s){var r=this.getZoomScale(i),c=this.getSize().divideBy(2),u=t instanceof H?t:this.latLngToContainerPoint(t),v=u.subtract(c).multiplyBy(1-1/r),w=this.containerPointToLatLng(c.add(v));return this.setView(w,i,{zoom:s})},_getBoundsCenterZoom:function(t,i){i=i||{},t=t.getBounds?t.getBounds():vt(t);var s=W(i.paddingTopLeft||i.padding||[0,0]),r=W(i.paddingBottomRight||i.padding||[0,0]),c=this.getBoundsZoom(t,!1,s.add(r));if(c=typeof i.maxZoom=="number"?Math.min(i.maxZoom,c):c,c===1/0)return{center:t.getCenter(),zoom:c};var u=r.subtract(s).divideBy(2),v=this.project(t.getSouthWest(),c),w=this.project(t.getNorthEast(),c),k=this.unproject(v.add(w).divideBy(2).add(u),c);return{center:k,zoom:c}},fitBounds:function(t,i){if(t=vt(t),!t.isValid())throw new Error("Bounds are not valid.");var s=this._getBoundsCenterZoom(t,i);return this.setView(s.center,s.zoom,i)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,i){return this.setView(t,this._zoom,{pan:i})},panBy:function(t,i){if(t=W(t).round(),i=i||{},!t.x&&!t.y)return this.fire("moveend");if(i.animate!==!0&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new qn,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),i.noMoveStart||this.fire("movestart"),i.animate!==!1){Q(this._mapPane,"leaflet-pan-anim");var s=this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane,s,i.duration||.25,i.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},flyTo:function(t,i,s){if(s=s||{},s.animate===!1||!U.any3d)return this.setView(t,i,s);this._stop();var r=this.project(this.getCenter()),c=this.project(t),u=this.getSize(),v=this._zoom;t=J(t),i=i===void 0?v:i;var w=Math.max(u.x,u.y),k=w*this.getZoomScale(v,i),C=c.distanceTo(r)||1,D=1.42,q=D*D;function tt(Ct){var mo=Ct?-1:1,Pr=Ct?k:w,Lr=k*k-w*w+mo*q*q*C*C,Sr=2*Pr*q*C,sn=Lr/Sr,Ls=Math.sqrt(sn*sn+1)-sn,Tr=Ls<1e-9?-18:Math.log(Ls);return Tr}function jt(Ct){return(Math.exp(Ct)-Math.exp(-Ct))/2}function It(Ct){return(Math.exp(Ct)+Math.exp(-Ct))/2}function Xt(Ct){return jt(Ct)/It(Ct)}var Ut=tt(0);function Qe(Ct){return w*(It(Ut)/It(Ut+D*Ct))}function _r(Ct){return w*(It(Ut)*Xt(Ut+D*Ct)-jt(Ut))/q}function kr(Ct){return 1-Math.pow(1-Ct,1.5)}var Fr=Date.now(),$s=(tt(1)-Ut)/D,$r=s.duration?1e3*s.duration:1e3*$s*.8;function Ps(){var Ct=(Date.now()-Fr)/$r,mo=kr(Ct)*$s;Ct<=1?(this._flyToFrame=Y(Ps,this),this._move(this.unproject(r.add(c.subtract(r).multiplyBy(_r(mo)/C)),v),this.getScaleZoom(w/Qe(mo),v),{flyTo:!0})):this._move(t,i)._moveEnd(!0)}return this._moveStart(!0,s.noMoveStart),Ps.call(this),this},flyToBounds:function(t,i){var s=this._getBoundsCenterZoom(t,i);return this.flyTo(s.center,s.zoom,i)},setMaxBounds:function(t){return t=vt(t),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),t.isValid()?(this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(t){var i=this.options.minZoom;return this.options.minZoom=t,this._loaded&&i!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(t):this},setMaxZoom:function(t){var i=this.options.maxZoom;return this.options.maxZoom=t,this._loaded&&i!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(t):this},panInsideBounds:function(t,i){this._enforcingBounds=!0;var s=this.getCenter(),r=this._limitCenter(s,this._zoom,vt(t));return s.equals(r)||this.panTo(r,i),this._enforcingBounds=!1,this},panInside:function(t,i){i=i||{};var s=W(i.paddingTopLeft||i.padding||[0,0]),r=W(i.paddingBottomRight||i.padding||[0,0]),c=this.project(this.getCenter()),u=this.project(t),v=this.getPixelBounds(),w=wt([v.min.add(s),v.max.subtract(r)]),k=w.getSize();if(!w.contains(u)){this._enforcingBounds=!0;var C=u.subtract(w.getCenter()),D=w.extend(u).getSize().subtract(k);c.x+=C.x<0?-D.x:D.x,c.y+=C.y<0?-D.y:D.y,this.panTo(this.unproject(c),i),this._enforcingBounds=!1}return this},invalidateSize:function(t){if(!this._loaded)return this;t=a({animate:!1,pan:!0},t===!0?{animate:!0}:t);var i=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var s=this.getSize(),r=i.divideBy(2).round(),c=s.divideBy(2).round(),u=r.subtract(c);return!u.x&&!u.y?this:(t.animate&&t.pan?this.panBy(u):(t.pan&&this._rawPanBy(u),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(d(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:i,newSize:s}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(t){if(t=this._locateOptions=a({timeout:1e4,watch:!1},t),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var i=d(this._handleGeolocationResponse,this),s=d(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(i,s,t):navigator.geolocation.getCurrentPosition(i,s,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){if(this._container._leaflet_id){var i=t.code,s=t.message||(i===1?"permission denied":i===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:i,message:"Geolocation error: "+s+"."})}},_handleGeolocationResponse:function(t){if(this._container._leaflet_id){var i=t.coords.latitude,s=t.coords.longitude,r=new ot(i,s),c=r.toBounds(t.coords.accuracy*2),u=this._locateOptions;if(u.setView){var v=this.getBoundsZoom(c);this.setView(r,u.maxZoom?Math.min(v,u.maxZoom):v)}var w={latlng:r,bounds:c,timestamp:t.timestamp};for(var k in t.coords)typeof t.coords[k]=="number"&&(w[k]=t.coords[k]);this.fire("locationfound",w)}},addHandler:function(t,i){if(!i)return this;var s=this[t]=new i(this);return this._handlers.push(s),this.options[t]&&s.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),kt(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(z(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var t;for(t in this._layers)this._layers[t].remove();for(t in this._panes)kt(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(t,i){var s="leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),r=ht("div",s,i||this._mapPane);return t&&(this._panes[t]=r),r},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds(),i=this.unproject(t.getBottomLeft()),s=this.unproject(t.getTopRight());return new St(i,s)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,i,s){t=vt(t),s=W(s||[0,0]);var r=this.getZoom()||0,c=this.getMinZoom(),u=this.getMaxZoom(),v=t.getNorthWest(),w=t.getSouthEast(),k=this.getSize().subtract(s),C=wt(this.project(w,r),this.project(v,r)).getSize(),D=U.any3d?this.options.zoomSnap:1,q=k.x/C.x,tt=k.y/C.y,jt=i?Math.max(q,tt):Math.min(q,tt);return r=this.getScaleZoom(jt,r),D&&(r=Math.round(r/(D/100))*(D/100),r=i?Math.ceil(r/D)*D:Math.floor(r/D)*D),Math.max(c,Math.min(u,r))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new H(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(t,i){var s=this._getTopLeftPoint(t,i);return new st(s,s.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(t===void 0?this.getZoom():t)},getPane:function(t){return typeof t=="string"?this._panes[t]:t},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t,i){var s=this.options.crs;return i=i===void 0?this._zoom:i,s.scale(t)/s.scale(i)},getScaleZoom:function(t,i){var s=this.options.crs;i=i===void 0?this._zoom:i;var r=s.zoom(t*s.scale(i));return isNaN(r)?1/0:r},project:function(t,i){return i=i===void 0?this._zoom:i,this.options.crs.latLngToPoint(J(t),i)},unproject:function(t,i){return i=i===void 0?this._zoom:i,this.options.crs.pointToLatLng(W(t),i)},layerPointToLatLng:function(t){var i=W(t).add(this.getPixelOrigin());return this.unproject(i)},latLngToLayerPoint:function(t){var i=this.project(J(t))._round();return i._subtract(this.getPixelOrigin())},wrapLatLng:function(t){return this.options.crs.wrapLatLng(J(t))},wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(vt(t))},distance:function(t,i){return this.options.crs.distance(J(t),J(i))},containerPointToLayerPoint:function(t){return W(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return W(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var i=this.containerPointToLayerPoint(W(t));return this.layerPointToLatLng(i)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(J(t)))},mouseEventToContainerPoint:function(t){return Zn(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var i=this._container=Wn(t);if(i){if(i._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");V(i,"scroll",this._onScroll,this),this._containerId=f(i)},_initLayout:function(){var t=this._container;this._fadeAnimated=this.options.fadeAnimation&&U.any3d,Q(t,"leaflet-container"+(U.touch?" leaflet-touch":"")+(U.retina?" leaflet-retina":"")+(U.ielt9?" leaflet-oldie":"")+(U.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var i=Pi(t,"position");i!=="absolute"&&i!=="relative"&&i!=="fixed"&&i!=="sticky"&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),Tt(this._mapPane,new H(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(Q(t.markerPane,"leaflet-zoom-hide"),Q(t.shadowPane,"leaflet-zoom-hide"))},_resetView:function(t,i,s){Tt(this._mapPane,new H(0,0));var r=!this._loaded;this._loaded=!0,i=this._limitZoom(i),this.fire("viewprereset");var c=this._zoom!==i;this._moveStart(c,s)._move(t,i)._moveEnd(c),this.fire("viewreset"),r&&this.fire("load")},_moveStart:function(t,i){return t&&this.fire("zoomstart"),i||this.fire("movestart"),this},_move:function(t,i,s,r){i===void 0&&(i=this._zoom);var c=this._zoom!==i;return this._zoom=i,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),r?s&&s.pinch&&this.fire("zoom",s):((c||s&&s.pinch)&&this.fire("zoom",s),this.fire("move",s)),this},_moveEnd:function(t){return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return z(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){Tt(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(t){this._targets={},this._targets[f(this._container)]=this;var i=t?bt:V;i(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&i(window,"resize",this._onResize,this),U.any3d&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){z(this._resizeRequest),this._resizeRequest=Y(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,i){for(var s=[],r,c=i==="mouseout"||i==="mouseover",u=t.target||t.srcElement,v=!1;u;){if(r=this._targets[f(u)],r&&(i==="click"||i==="preclick")&&this._draggableMoved(r)){v=!0;break}if(r&&r.listens(i,!0)&&(c&&!qo(u,t)||(s.push(r),c))||u===this._container)break;u=u.parentNode}return!s.length&&!v&&!c&&this.listens(i,!0)&&(s=[this]),s},_isClickDisabled:function(t){for(;t&&t!==this._container;){if(t._leaflet_disable_click)return!0;t=t.parentNode}},_handleDOMEvent:function(t){var i=t.target||t.srcElement;if(!(!this._loaded||i._leaflet_disable_events||t.type==="click"&&this._isClickDisabled(i))){var s=t.type;s==="mousedown"&&Wo(i),this._fireDOMEvent(t,s)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,i,s){if(t.type==="click"){var r=a({},t);r.type="preclick",this._fireDOMEvent(r,r.type,s)}var c=this._findEventTargets(t,i);if(s){for(var u=[],v=0;v<s.length;v++)s[v].listens(i,!0)&&u.push(s[v]);c=u.concat(c)}if(c.length){i==="contextmenu"&&Wt(t);var w=c[0],k={originalEvent:t};if(t.type!=="keypress"&&t.type!=="keydown"&&t.type!=="keyup"){var C=w.getLatLng&&(!w._radius||w._radius<=10);k.containerPoint=C?this.latLngToContainerPoint(w.getLatLng()):this.mouseEventToContainerPoint(t),k.layerPoint=this.containerPointToLayerPoint(k.containerPoint),k.latlng=C?w.getLatLng():this.layerPointToLatLng(k.layerPoint)}for(v=0;v<c.length;v++)if(c[v].fire(i,k,!0),k.originalEvent._stopped||c[v].options.bubblingMouseEvents===!1&&rt(this._mouseEvents,i)!==-1)return}},_draggableMoved:function(t){return t=t.dragging&&t.dragging.enabled()?t:this,t.dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,i=this._handlers.length;t<i;t++)this._handlers[t].disable()},whenReady:function(t,i){return this._loaded?t.call(i||this,{target:this}):this.on("load",t,i),this},_getMapPanePos:function(){return Ce(this._mapPane)||new H(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,i){var s=t&&i!==void 0?this._getNewPixelOrigin(t,i):this.getPixelOrigin();return s.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,i){var s=this.getSize()._divideBy(2);return this.project(t,i)._subtract(s)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,i,s){var r=this._getNewPixelOrigin(s,i);return this.project(t,i)._subtract(r)},_latLngBoundsToNewLayerBounds:function(t,i,s){var r=this._getNewPixelOrigin(s,i);return wt([this.project(t.getSouthWest(),i)._subtract(r),this.project(t.getNorthWest(),i)._subtract(r),this.project(t.getSouthEast(),i)._subtract(r),this.project(t.getNorthEast(),i)._subtract(r)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,i,s){if(!s)return t;var r=this.project(t,i),c=this.getSize().divideBy(2),u=new st(r.subtract(c),r.add(c)),v=this._getBoundsOffset(u,s,i);return Math.abs(v.x)<=1&&Math.abs(v.y)<=1?t:this.unproject(r.add(v),i)},_limitOffset:function(t,i){if(!i)return t;var s=this.getPixelBounds(),r=new st(s.min.add(t),s.max.add(t));return t.add(this._getBoundsOffset(r,i))},_getBoundsOffset:function(t,i,s){var r=wt(this.project(i.getNorthEast(),s),this.project(i.getSouthWest(),s)),c=r.min.subtract(t.min),u=r.max.subtract(t.max),v=this._rebound(c.x,-u.x),w=this._rebound(c.y,-u.y);return new H(v,w)},_rebound:function(t,i){return t+i>0?Math.round(t-i)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(i))},_limitZoom:function(t){var i=this.getMinZoom(),s=this.getMaxZoom(),r=U.any3d?this.options.zoomSnap:1;return r&&(t=Math.round(t/r)*r),Math.max(i,Math.min(s,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){Lt(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,i){var s=this._getCenterOffset(t)._trunc();return(i&&i.animate)!==!0&&!this.getSize().contains(s)?!1:(this.panBy(s,i),!0)},_createAnimProxy:function(){var t=this._proxy=ht("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(i){var s=Mo,r=this._proxy.style[s];Te(this._proxy,this.project(i.center,i.zoom),this.getZoomScale(i.zoom,1)),r===this._proxy.style[s]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){kt(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var t=this.getCenter(),i=this.getZoom();Te(this._proxy,this.project(t,i),this.getZoomScale(i,1))},_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,i,s){if(this._animatingZoom)return!0;if(s=s||{},!this._zoomAnimated||s.animate===!1||this._nothingToAnimate()||Math.abs(i-this._zoom)>this.options.zoomAnimationThreshold)return!1;var r=this.getZoomScale(i),c=this._getCenterOffset(t)._divideBy(1-1/r);return s.animate!==!0&&!this.getSize().contains(c)?!1:(Y(function(){this._moveStart(!0,s.noMoveStart||!1)._animateZoom(t,i,!0)},this),!0)},_animateZoom:function(t,i,s,r){this._mapPane&&(s&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=i,Q(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:t,zoom:i,noUpdate:r}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(d(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&Lt(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function Oa(t,i){return new at(t,i)}var ne=G.extend({options:{position:"topright"},initialize:function(t){$(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var i=this._map;return i&&i.removeControl(this),this.options.position=t,i&&i.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t;var i=this._container=this.onAdd(t),s=this.getPosition(),r=t._controlCorners[s];return Q(i,"leaflet-control"),s.indexOf("bottom")!==-1?r.insertBefore(i,r.firstChild):r.appendChild(i),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(kt(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(t){this._map&&t&&t.screenX>0&&t.screenY>0&&this._map.getContainer().focus()}}),Ei=function(t){return new ne(t)};at.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){var t=this._controlCorners={},i="leaflet-",s=this._controlContainer=ht("div",i+"control-container",this._container);function r(c,u){var v=i+c+" "+i+u;t[c+u]=ht("div",v,s)}r("top","left"),r("top","right"),r("bottom","left"),r("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)kt(this._controlCorners[t]);kt(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Kn=ne.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(t,i,s,r){return s<r?-1:r<s?1:0}},initialize:function(t,i,s){$(this,s),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var r in t)this._addLayer(t[r],r);for(r in i)this._addLayer(i[r],r,!0)},onAdd:function(t){this._initLayout(),this._update(),this._map=t,t.on("zoomend",this._checkDisabledLayers,this);for(var i=0;i<this._layers.length;i++)this._layers[i].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){return ne.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(t,i){return this._addLayer(t,i),this._map?this._update():this},addOverlay:function(t,i){return this._addLayer(t,i,!0),this._map?this._update():this},removeLayer:function(t){t.off("add remove",this._onLayerChange,this);var i=this._getLayer(f(t));return i&&this._layers.splice(this._layers.indexOf(i),1),this._map?this._update():this},expand:function(){Q(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._section.clientHeight?(Q(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=t+"px"):Lt(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return Lt(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",i=this._container=ht("div",t),s=this.options.collapsed;i.setAttribute("aria-haspopup",!0),Ci(i),Go(i);var r=this._section=ht("section",t+"-list");s&&(this._map.on("click",this.collapse,this),V(i,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var c=this._layersLink=ht("a",t+"-toggle",i);c.href="#",c.title="Layers",c.setAttribute("role","button"),V(c,{keydown:function(u){u.keyCode===13&&this._expandSafely()},click:function(u){Wt(u),this._expandSafely()}},this),s||this.expand(),this._baseLayersList=ht("div",t+"-base",r),this._separator=ht("div",t+"-separator",r),this._overlaysList=ht("div",t+"-overlays",r),i.appendChild(r)},_getLayer:function(t){for(var i=0;i<this._layers.length;i++)if(this._layers[i]&&f(this._layers[i].layer)===t)return this._layers[i]},_addLayer:function(t,i,s){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:i,overlay:s}),this.options.sortLayers&&this._layers.sort(d(function(r,c){return this.options.sortFunction(r.layer,c.layer,r.name,c.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;Xi(this._baseLayersList),Xi(this._overlaysList),this._layerControlInputs=[];var t,i,s,r,c=0;for(s=0;s<this._layers.length;s++)r=this._layers[s],this._addItem(r),i=i||r.overlay,t=t||!r.overlay,c+=r.overlay?0:1;return this.options.hideSingleBase&&(t=t&&c>1,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=i&&t?"":"none",this},_onLayerChange:function(t){this._handlingClick||this._update();var i=this._getLayer(f(t.target)),s=i.overlay?t.type==="add"?"overlayadd":"overlayremove":t.type==="add"?"baselayerchange":null;s&&this._map.fire(s,i)},_createRadioElement:function(t,i){var s='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(i?' checked="checked"':"")+"/>",r=document.createElement("div");return r.innerHTML=s,r.firstChild},_addItem:function(t){var i=document.createElement("label"),s=this._map.hasLayer(t.layer),r;t.overlay?(r=document.createElement("input"),r.type="checkbox",r.className="leaflet-control-layers-selector",r.defaultChecked=s):r=this._createRadioElement("leaflet-base-layers_"+f(this),s),this._layerControlInputs.push(r),r.layerId=f(t.layer),V(r,"click",this._onInputClick,this);var c=document.createElement("span");c.innerHTML=" "+t.name;var u=document.createElement("span");i.appendChild(u),u.appendChild(r),u.appendChild(c);var v=t.overlay?this._overlaysList:this._baseLayersList;return v.appendChild(i),this._checkDisabledLayers(),i},_onInputClick:function(){if(!this._preventClick){var t=this._layerControlInputs,i,s,r=[],c=[];this._handlingClick=!0;for(var u=t.length-1;u>=0;u--)i=t[u],s=this._getLayer(i.layerId).layer,i.checked?r.push(s):i.checked||c.push(s);for(u=0;u<c.length;u++)this._map.hasLayer(c[u])&&this._map.removeLayer(c[u]);for(u=0;u<r.length;u++)this._map.hasLayer(r[u])||this._map.addLayer(r[u]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var t=this._layerControlInputs,i,s,r=this._map.getZoom(),c=t.length-1;c>=0;c--)i=t[c],s=this._getLayer(i.layerId).layer,i.disabled=s.options.minZoom!==void 0&&r<s.options.minZoom||s.options.maxZoom!==void 0&&r>s.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var t=this._section;this._preventClick=!0,V(t,"click",Wt),this.expand();var i=this;setTimeout(function(){bt(t,"click",Wt),i._preventClick=!1})}}),Ra=function(t,i,s){return new Kn(t,i,s)},Ko=ne.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(t){var i="leaflet-control-zoom",s=ht("div",i+" leaflet-bar"),r=this.options;return this._zoomInButton=this._createButton(r.zoomInText,r.zoomInTitle,i+"-in",s,this._zoomIn),this._zoomOutButton=this._createButton(r.zoomOutText,r.zoomOutTitle,i+"-out",s,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),s},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,i,s,r,c){var u=ht("a",s,r);return u.innerHTML=t,u.href="#",u.title=i,u.setAttribute("role","button"),u.setAttribute("aria-label",i),Ci(u),V(u,"click",ze),V(u,"click",c,this),V(u,"click",this._refocusOnMap,this),u},_updateDisabled:function(){var t=this._map,i="leaflet-disabled";Lt(this._zoomInButton,i),Lt(this._zoomOutButton,i),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||t._zoom===t.getMinZoom())&&(Q(this._zoomOutButton,i),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||t._zoom===t.getMaxZoom())&&(Q(this._zoomInButton,i),this._zoomInButton.setAttribute("aria-disabled","true"))}});at.mergeOptions({zoomControl:!0}),at.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new Ko,this.addControl(this.zoomControl))});var Wa=function(t){return new Ko(t)},Vn=ne.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(t){var i="leaflet-control-scale",s=ht("div",i),r=this.options;return this._addScales(r,i+"-line",s),t.on(r.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),s},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,i,s){t.metric&&(this._mScale=ht("div",i,s)),t.imperial&&(this._iScale=ht("div",i,s))},_update:function(){var t=this._map,i=t.getSize().y/2,s=t.distance(t.containerPointToLatLng([0,i]),t.containerPointToLatLng([this.options.maxWidth,i]));this._updateScales(s)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var i=this._getRoundNum(t),s=i<1e3?i+" m":i/1e3+" km";this._updateScale(this._mScale,s,i/t)},_updateImperial:function(t){var i=t*3.2808399,s,r,c;i>5280?(s=i/5280,r=this._getRoundNum(s),this._updateScale(this._iScale,r+" mi",r/s)):(c=this._getRoundNum(i),this._updateScale(this._iScale,c+" ft",c/i))},_updateScale:function(t,i,s){t.style.width=Math.round(this.options.maxWidth*s)+"px",t.innerHTML=i},_getRoundNum:function(t){var i=Math.pow(10,(Math.floor(t)+"").length-1),s=t/i;return s=s>=10?10:s>=5?5:s>=3?3:s>=2?2:1,i*s}}),ja=function(t){return new Vn(t)},Ha='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',Vo=ne.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(U.inlineSvg?Ha+" ":"")+"Leaflet</a>"},initialize:function(t){$(this,t),this._attributions={}},onAdd:function(t){t.attributionControl=this,this._container=ht("div","leaflet-control-attribution"),Ci(this._container);for(var i in t._layers)t._layers[i].getAttribution&&this.addAttribution(t._layers[i].getAttribution());return this._update(),t.on("layeradd",this._addAttribution,this),this._container},onRemove:function(t){t.off("layeradd",this._addAttribution,this)},_addAttribution:function(t){t.layer.getAttribution&&(this.addAttribution(t.layer.getAttribution()),t.layer.once("remove",function(){this.removeAttribution(t.layer.getAttribution())},this))},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):this},removeAttribution:function(t){return t?(this._attributions[t]&&(this._attributions[t]--,this._update()),this):this},_update:function(){if(this._map){var t=[];for(var i in this._attributions)this._attributions[i]&&t.push(i);var s=[];this.options.prefix&&s.push(this.options.prefix),t.length&&s.push(t.join(", ")),this._container.innerHTML=s.join(' <span aria-hidden="true">|</span> ')}}});at.mergeOptions({attributionControl:!0}),at.addInitHook(function(){this.options.attributionControl&&new Vo().addTo(this)});var Ua=function(t){return new Vo(t)};ne.Layers=Kn,ne.Zoom=Ko,ne.Scale=Vn,ne.Attribution=Vo,Ei.layers=Ra,Ei.zoom=Wa,Ei.scale=ja,Ei.attribution=Ua;var pe=G.extend({initialize:function(t){this._map=t},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});pe.addTo=function(t,i){return t.addHandler(i,this),this};var Za={Events:nt},Jn=U.touch?"touchstart mousedown":"mousedown",_e=$t.extend({options:{clickTolerance:3},initialize:function(t,i,s,r){$(this,r),this._element=t,this._dragStartTarget=i||t,this._preventOutline=s},enable:function(){this._enabled||(V(this._dragStartTarget,Jn,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(_e._dragging===this&&this.finishDrag(!0),bt(this._dragStartTarget,Jn,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){if(this._enabled&&(this._moved=!1,!Do(this._element,"leaflet-zoom-anim"))){if(t.touches&&t.touches.length!==1){_e._dragging===this&&this.finishDrag();return}if(!(_e._dragging||t.shiftKey||t.which!==1&&t.button!==1&&!t.touches)&&(_e._dragging=this,this._preventOutline&&Wo(this._element),Bo(),Li(),!this._moving)){this.fire("down");var i=t.touches?t.touches[0]:t,s=jn(this._element);this._startPoint=new H(i.clientX,i.clientY),this._startPos=Ce(this._element),this._parentScale=jo(s);var r=t.type==="mousedown";V(document,r?"mousemove":"touchmove",this._onMove,this),V(document,r?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(t){if(this._enabled){if(t.touches&&t.touches.length>1){this._moved=!0;return}var i=t.touches&&t.touches.length===1?t.touches[0]:t,s=new H(i.clientX,i.clientY)._subtract(this._startPoint);!s.x&&!s.y||Math.abs(s.x)+Math.abs(s.y)<this.options.clickTolerance||(s.x/=this._parentScale.x,s.y/=this._parentScale.y,Wt(t),this._moved||(this.fire("dragstart"),this._moved=!0,Q(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),Q(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(s),this._moving=!0,this._lastEvent=t,this._updatePosition())}},_updatePosition:function(){var t={originalEvent:this._lastEvent};this.fire("predrag",t),Tt(this._element,this._newPos),this.fire("drag",t)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(t){Lt(document.body,"leaflet-dragging"),this._lastTarget&&(Lt(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),bt(document,"mousemove touchmove",this._onMove,this),bt(document,"mouseup touchend touchcancel",this._onUp,this),Oo(),Si();var i=this._moved&&this._moving;this._moving=!1,_e._dragging=!1,i&&this.fire("dragend",{noInertia:t,distance:this._newPos.distanceTo(this._startPos)})}});function Yn(t,i,s){var r,c=[1,4,2,8],u,v,w,k,C,D,q,tt;for(u=0,D=t.length;u<D;u++)t[u]._code=Ae(t[u],i);for(w=0;w<4;w++){for(q=c[w],r=[],u=0,D=t.length,v=D-1;u<D;v=u++)k=t[u],C=t[v],k._code&q?C._code&q||(tt=no(C,k,q,i,s),tt._code=Ae(tt,i),r.push(tt)):(C._code&q&&(tt=no(C,k,q,i,s),tt._code=Ae(tt,i),r.push(tt)),r.push(k));t=r}return t}function Qn(t,i){var s,r,c,u,v,w,k,C,D;if(!t||t.length===0)throw new Error("latlngs not passed");Qt(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var q=J([0,0]),tt=vt(t),jt=tt.getNorthWest().distanceTo(tt.getSouthWest())*tt.getNorthEast().distanceTo(tt.getNorthWest());jt<1700&&(q=Jo(t));var It=t.length,Xt=[];for(s=0;s<It;s++){var Ut=J(t[s]);Xt.push(i.project(J([Ut.lat-q.lat,Ut.lng-q.lng])))}for(w=k=C=0,s=0,r=It-1;s<It;r=s++)c=Xt[s],u=Xt[r],v=c.y*u.x-u.y*c.x,k+=(c.x+u.x)*v,C+=(c.y+u.y)*v,w+=v*3;w===0?D=Xt[0]:D=[k/w,C/w];var Qe=i.unproject(W(D));return J([Qe.lat+q.lat,Qe.lng+q.lng])}function Jo(t){for(var i=0,s=0,r=0,c=0;c<t.length;c++){var u=J(t[c]);i+=u.lat,s+=u.lng,r++}return J([i/r,s/r])}var Ga={__proto__:null,clipPolygon:Yn,polygonCenter:Qn,centroid:Jo};function Xn(t,i){if(!i||!t.length)return t.slice();var s=i*i;return t=Va(t,s),t=Ka(t,s),t}function ts(t,i,s){return Math.sqrt(zi(t,i,s,!0))}function qa(t,i,s){return zi(t,i,s)}function Ka(t,i){var s=t.length,r=typeof Uint8Array<"u"?Uint8Array:Array,c=new r(s);c[0]=c[s-1]=1,Yo(t,c,i,0,s-1);var u,v=[];for(u=0;u<s;u++)c[u]&&v.push(t[u]);return v}function Yo(t,i,s,r,c){var u=0,v,w,k;for(w=r+1;w<=c-1;w++)k=zi(t[w],t[r],t[c],!0),k>u&&(v=w,u=k);u>s&&(i[v]=1,Yo(t,i,s,r,v),Yo(t,i,s,v,c))}function Va(t,i){for(var s=[t[0]],r=1,c=0,u=t.length;r<u;r++)Ja(t[r],t[c])>i&&(s.push(t[r]),c=r);return c<u-1&&s.push(t[u-1]),s}var es;function is(t,i,s,r,c){var u=r?es:Ae(t,s),v=Ae(i,s),w,k,C;for(es=v;;){if(!(u|v))return[t,i];if(u&v)return!1;w=u||v,k=no(t,i,w,s,c),C=Ae(k,s),w===u?(t=k,u=C):(i=k,v=C)}}function no(t,i,s,r,c){var u=i.x-t.x,v=i.y-t.y,w=r.min,k=r.max,C,D;return s&8?(C=t.x+u*(k.y-t.y)/v,D=k.y):s&4?(C=t.x+u*(w.y-t.y)/v,D=w.y):s&2?(C=k.x,D=t.y+v*(k.x-t.x)/u):s&1&&(C=w.x,D=t.y+v*(w.x-t.x)/u),new H(C,D,c)}function Ae(t,i){var s=0;return t.x<i.min.x?s|=1:t.x>i.max.x&&(s|=2),t.y<i.min.y?s|=4:t.y>i.max.y&&(s|=8),s}function Ja(t,i){var s=i.x-t.x,r=i.y-t.y;return s*s+r*r}function zi(t,i,s,r){var c=i.x,u=i.y,v=s.x-c,w=s.y-u,k=v*v+w*w,C;return k>0&&(C=((t.x-c)*v+(t.y-u)*w)/k,C>1?(c=s.x,u=s.y):C>0&&(c+=v*C,u+=w*C)),v=t.x-c,w=t.y-u,r?v*v+w*w:new H(c,u)}function Qt(t){return!j(t[0])||typeof t[0][0]!="object"&&typeof t[0][0]<"u"}function os(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),Qt(t)}function ns(t,i){var s,r,c,u,v,w,k,C;if(!t||t.length===0)throw new Error("latlngs not passed");Qt(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var D=J([0,0]),q=vt(t),tt=q.getNorthWest().distanceTo(q.getSouthWest())*q.getNorthEast().distanceTo(q.getNorthWest());tt<1700&&(D=Jo(t));var jt=t.length,It=[];for(s=0;s<jt;s++){var Xt=J(t[s]);It.push(i.project(J([Xt.lat-D.lat,Xt.lng-D.lng])))}for(s=0,r=0;s<jt-1;s++)r+=It[s].distanceTo(It[s+1])/2;if(r===0)C=It[0];else for(s=0,u=0;s<jt-1;s++)if(v=It[s],w=It[s+1],c=v.distanceTo(w),u+=c,u>r){k=(u-r)/c,C=[w.x-k*(w.x-v.x),w.y-k*(w.y-v.y)];break}var Ut=i.unproject(W(C));return J([Ut.lat+D.lat,Ut.lng+D.lng])}var Ya={__proto__:null,simplify:Xn,pointToSegmentDistance:ts,closestPointOnSegment:qa,clipSegment:is,_getEdgeIntersection:no,_getBitCode:Ae,_sqClosestPointOnSegment:zi,isFlat:Qt,_flat:os,polylineCenter:ns},Qo={project:function(t){return new H(t.lng,t.lat)},unproject:function(t){return new ot(t.y,t.x)},bounds:new st([-180,-90],[180,90])},Xo={R:6378137,R_MINOR:6356752314245179e-9,bounds:new st([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(t){var i=Math.PI/180,s=this.R,r=t.lat*i,c=this.R_MINOR/s,u=Math.sqrt(1-c*c),v=u*Math.sin(r),w=Math.tan(Math.PI/4-r/2)/Math.pow((1-v)/(1+v),u/2);return r=-s*Math.log(Math.max(w,1e-10)),new H(t.lng*i*s,r)},unproject:function(t){for(var i=180/Math.PI,s=this.R,r=this.R_MINOR/s,c=Math.sqrt(1-r*r),u=Math.exp(-t.y/s),v=Math.PI/2-2*Math.atan(u),w=0,k=.1,C;w<15&&Math.abs(k)>1e-7;w++)C=c*Math.sin(v),C=Math.pow((1-C)/(1+C),c/2),k=Math.PI/2-2*Math.atan(u*C)-v,v+=k;return new ot(v*i,t.x*i/s)}},Qa={__proto__:null,LonLat:Qo,Mercator:Xo,SphericalMercator:Gt},Xa=a({},Zt,{code:"EPSG:3395",projection:Xo,transformation:(function(){var t=.5/(Math.PI*Xo.R);return le(t,.5,-t,.5)})()}),ss=a({},Zt,{code:"EPSG:4326",projection:Qo,transformation:le(1/180,1,-1/180,.5)}),tr=a({},Dt,{projection:Qo,transformation:le(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,i){var s=i.lng-t.lng,r=i.lat-t.lat;return Math.sqrt(s*s+r*r)},infinite:!0});Dt.Earth=Zt,Dt.EPSG3395=Xa,Dt.EPSG3857=Le,Dt.EPSG900913=We,Dt.EPSG4326=ss,Dt.Simple=tr;var se=$t.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(t){return t.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(t){return t&&t.removeLayer(this),this},getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[f(t)]=this,this},removeInteractiveTarget:function(t){return delete this._map._targets[f(t)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var i=t.target;if(i.hasLayer(this)){if(this._map=i,this._zoomAnimated=i._zoomAnimated,this.getEvents){var s=this.getEvents();i.on(s,this),this.once("remove",function(){i.off(s,this)},this)}this.onAdd(i),this.fire("add"),i.fire("layeradd",{layer:this})}}});at.include({addLayer:function(t){if(!t._layerAdd)throw new Error("The provided object is not a Layer.");var i=f(t);return this._layers[i]?this:(this._layers[i]=t,t._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t),this)},removeLayer:function(t){var i=f(t);return this._layers[i]?(this._loaded&&t.onRemove(this),delete this._layers[i],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null,this):this},hasLayer:function(t){return f(t)in this._layers},eachLayer:function(t,i){for(var s in this._layers)t.call(i,this._layers[s]);return this},_addLayers:function(t){t=t?j(t)?t:[t]:[];for(var i=0,s=t.length;i<s;i++)this.addLayer(t[i])},_addZoomLimit:function(t){(!isNaN(t.options.maxZoom)||!isNaN(t.options.minZoom))&&(this._zoomBoundLayers[f(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){var i=f(t);this._zoomBoundLayers[i]&&(delete this._zoomBoundLayers[i],this._updateZoomLevels())},_updateZoomLevels:function(){var t=1/0,i=-1/0,s=this._getZoomSpan();for(var r in this._zoomBoundLayers){var c=this._zoomBoundLayers[r].options;t=c.minZoom===void 0?t:Math.min(t,c.minZoom),i=c.maxZoom===void 0?i:Math.max(i,c.maxZoom)}this._layersMaxZoom=i===-1/0?void 0:i,this._layersMinZoom=t===1/0?void 0:t,s!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var qe=se.extend({initialize:function(t,i){$(this,i),this._layers={};var s,r;if(t)for(s=0,r=t.length;s<r;s++)this.addLayer(t[s])},addLayer:function(t){var i=this.getLayerId(t);return this._layers[i]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var i=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[i]&&this._map.removeLayer(this._layers[i]),delete this._layers[i],this},hasLayer:function(t){var i=typeof t=="number"?t:this.getLayerId(t);return i in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(t){var i=Array.prototype.slice.call(arguments,1),s,r;for(s in this._layers)r=this._layers[s],r[t]&&r[t].apply(r,i);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},eachLayer:function(t,i){for(var s in this._layers)t.call(i,this._layers[s]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return f(t)}}),er=function(t,i){return new qe(t,i)},ge=qe.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),qe.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),qe.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new St;for(var i in this._layers){var s=this._layers[i];t.extend(s.getBounds?s.getBounds():s.getLatLng())}return t}}),ir=function(t,i){return new ge(t,i)},Ke=G.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(t){$(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,i){var s=this._getIconUrl(t);if(!s){if(t==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var r=this._createImg(s,i&&i.tagName==="IMG"?i:null);return this._setIconStyles(r,t),(this.options.crossOrigin||this.options.crossOrigin==="")&&(r.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),r},_setIconStyles:function(t,i){var s=this.options,r=s[i+"Size"];typeof r=="number"&&(r=[r,r]);var c=W(r),u=W(i==="shadow"&&s.shadowAnchor||s.iconAnchor||c&&c.divideBy(2,!0));t.className="leaflet-marker-"+i+" "+(s.className||""),u&&(t.style.marginLeft=-u.x+"px",t.style.marginTop=-u.y+"px"),c&&(t.style.width=c.x+"px",t.style.height=c.y+"px")},_createImg:function(t,i){return i=i||document.createElement("img"),i.src=t,i},_getIconUrl:function(t){return U.retina&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}});function or(t){return new Ke(t)}var Ai=Ke.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){return typeof Ai.imagePath!="string"&&(Ai.imagePath=this._detectIconPath()),(this.options.imagePath||Ai.imagePath)+Ke.prototype._getIconUrl.call(this,t)},_stripUrl:function(t){var i=function(s,r,c){var u=r.exec(s);return u&&u[c]};return t=i(t,/^url\((['"])?(.+)\1\)$/,2),t&&i(t,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var t=ht("div","leaflet-default-icon-path",document.body),i=Pi(t,"background-image")||Pi(t,"backgroundImage");if(document.body.removeChild(t),i=this._stripUrl(i),i)return i;var s=document.querySelector('link[href$="leaflet.css"]');return s?s.href.substring(0,s.href.length-11-1):""}}),as=pe.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new _e(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),Q(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&Lt(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var i=this._marker,s=i._map,r=this._marker.options.autoPanSpeed,c=this._marker.options.autoPanPadding,u=Ce(i._icon),v=s.getPixelBounds(),w=s.getPixelOrigin(),k=wt(v.min._subtract(w).add(c),v.max._subtract(w).subtract(c));if(!k.contains(u)){var C=W((Math.max(k.max.x,u.x)-k.max.x)/(v.max.x-k.max.x)-(Math.min(k.min.x,u.x)-k.min.x)/(v.min.x-k.min.x),(Math.max(k.max.y,u.y)-k.max.y)/(v.max.y-k.max.y)-(Math.min(k.min.y,u.y)-k.min.y)/(v.min.y-k.min.y)).multiplyBy(r);s.panBy(C,{animate:!1}),this._draggable._newPos._add(C),this._draggable._startPos._add(C),Tt(i._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=Y(this._adjustPan.bind(this,t))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&(z(this._panRequest),this._panRequest=Y(this._adjustPan.bind(this,t)))},_onDrag:function(t){var i=this._marker,s=i._shadow,r=Ce(i._icon),c=i._map.layerPointToLatLng(r);s&&Tt(s,r),i._latlng=c,t.latlng=c,t.oldLatLng=this._oldLatLng,i.fire("move",t).fire("drag",t)},_onDragEnd:function(t){z(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),so=se.extend({options:{icon:new Ai,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(t,i){$(this,i),this._latlng=J(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(t){var i=this._latlng;return this._latlng=J(t),this.update(),this.fire("move",{oldLatLng:i,latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},getIcon:function(){return this.options.icon},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,i="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),s=t.icon.createIcon(this._icon),r=!1;s!==this._icon&&(this._icon&&this._removeIcon(),r=!0,t.title&&(s.title=t.title),s.tagName==="IMG"&&(s.alt=t.alt||"")),Q(s,i),t.keyboard&&(s.tabIndex="0",s.setAttribute("role","button")),this._icon=s,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&V(s,"focus",this._panOnFocus,this);var c=t.icon.createShadow(this._shadow),u=!1;c!==this._shadow&&(this._removeShadow(),u=!0),c&&(Q(c,i),c.alt=""),this._shadow=c,t.opacity<1&&this._updateOpacity(),r&&this.getPane().appendChild(this._icon),this._initInteraction(),c&&u&&this.getPane(t.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&bt(this._icon,"focus",this._panOnFocus,this),kt(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&kt(this._shadow),this._shadow=null},_setPos:function(t){this._icon&&Tt(this._icon,t),this._shadow&&Tt(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon&&(this._icon.style.zIndex=this._zIndex+t)},_animateZoom:function(t){var i=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(i)},_initInteraction:function(){if(this.options.interactive&&(Q(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),as)){var t=this.options.draggable;this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new as(this),t&&this.dragging.enable()}},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;this._icon&&Yt(this._icon,t),this._shadow&&Yt(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var t=this._map;if(t){var i=this.options.icon.options,s=i.iconSize?W(i.iconSize):W(0,0),r=i.iconAnchor?W(i.iconAnchor):W(0,0);t.panInside(this._latlng,{paddingTopLeft:r,paddingBottomRight:s.subtract(r)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function nr(t,i){return new so(t,i)}var ke=se.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(t){this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(t){return $(this,t),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&t&&Object.prototype.hasOwnProperty.call(t,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),ao=ke.extend({options:{fill:!0,radius:10},initialize:function(t,i){$(this,i),this._latlng=J(t),this._radius=this.options.radius},setLatLng:function(t){var i=this._latlng;return this._latlng=J(t),this.redraw(),this.fire("move",{oldLatLng:i,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius},setStyle:function(t){var i=t&&t.radius||this._radius;return ke.prototype.setStyle.call(this,t),this.setRadius(i),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,i=this._radiusY||t,s=this._clickTolerance(),r=[t+s,i+s];this._pxBounds=new st(this._point.subtract(r),this._point.add(r))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function sr(t,i){return new ao(t,i)}var tn=ao.extend({initialize:function(t,i,s){if(typeof i=="number"&&(i=a({},s,{radius:i})),$(this,i),this._latlng=J(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(t){return this._mRadius=t,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new St(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:ke.prototype.setStyle,_project:function(){var t=this._latlng.lng,i=this._latlng.lat,s=this._map,r=s.options.crs;if(r.distance===Zt.distance){var c=Math.PI/180,u=this._mRadius/Zt.R/c,v=s.project([i+u,t]),w=s.project([i-u,t]),k=v.add(w).divideBy(2),C=s.unproject(k).lat,D=Math.acos((Math.cos(u*c)-Math.sin(i*c)*Math.sin(C*c))/(Math.cos(i*c)*Math.cos(C*c)))/c;(isNaN(D)||D===0)&&(D=u/Math.cos(Math.PI/180*i)),this._point=k.subtract(s.getPixelOrigin()),this._radius=isNaN(D)?0:k.x-s.project([C,t-D]).x,this._radiusY=k.y-v.y}else{var q=r.unproject(r.project(this._latlng).subtract([this._mRadius,0]));this._point=s.latLngToLayerPoint(this._latlng),this._radius=this._point.x-s.latLngToLayerPoint(q).x}this._updateBounds()}});function ar(t,i,s){return new tn(t,i,s)}var me=ke.extend({options:{smoothFactor:1,noClip:!1},initialize:function(t,i){$(this,i),this._setLatLngs(t)},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(t){for(var i=1/0,s=null,r=zi,c,u,v=0,w=this._parts.length;v<w;v++)for(var k=this._parts[v],C=1,D=k.length;C<D;C++){c=k[C-1],u=k[C];var q=r(t,c,u,!0);q<i&&(i=q,s=r(t,c,u))}return s&&(s.distance=Math.sqrt(i)),s},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return ns(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(t,i){return i=i||this._defaultShape(),t=J(t),i.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new St,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return Qt(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(t){for(var i=[],s=Qt(t),r=0,c=t.length;r<c;r++)s?(i[r]=J(t[r]),this._bounds.extend(i[r])):i[r]=this._convertLatLngs(t[r]);return i},_project:function(){var t=new st;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t),this._bounds.isValid()&&t.isValid()&&(this._rawPxBounds=t,this._updateBounds())},_updateBounds:function(){var t=this._clickTolerance(),i=new H(t,t);this._rawPxBounds&&(this._pxBounds=new st([this._rawPxBounds.min.subtract(i),this._rawPxBounds.max.add(i)]))},_projectLatlngs:function(t,i,s){var r=t[0]instanceof ot,c=t.length,u,v;if(r){for(v=[],u=0;u<c;u++)v[u]=this._map.latLngToLayerPoint(t[u]),s.extend(v[u]);i.push(v)}else for(u=0;u<c;u++)this._projectLatlngs(t[u],i,s)},_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}var i=this._parts,s,r,c,u,v,w,k;for(s=0,c=0,u=this._rings.length;s<u;s++)for(k=this._rings[s],r=0,v=k.length;r<v-1;r++)w=is(k[r],k[r+1],t,r,!0),w&&(i[c]=i[c]||[],i[c].push(w[0]),(w[1]!==k[r+1]||r===v-2)&&(i[c].push(w[1]),c++))}},_simplifyPoints:function(){for(var t=this._parts,i=this.options.smoothFactor,s=0,r=t.length;s<r;s++)t[s]=Xn(t[s],i)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(t,i){var s,r,c,u,v,w,k=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(s=0,u=this._parts.length;s<u;s++)for(w=this._parts[s],r=0,v=w.length,c=v-1;r<v;c=r++)if(!(!i&&r===0)&&ts(t,w[c],w[r])<=k)return!0;return!1}});function rr(t,i){return new me(t,i)}me._flat=os;var Ve=me.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Qn(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(t){var i=me.prototype._convertLatLngs.call(this,t),s=i.length;return s>=2&&i[0]instanceof ot&&i[0].equals(i[s-1])&&i.pop(),i},_setLatLngs:function(t){me.prototype._setLatLngs.call(this,t),Qt(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return Qt(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var t=this._renderer._bounds,i=this.options.weight,s=new H(i,i);if(t=new st(t.min.subtract(s),t.max.add(s)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}for(var r=0,c=this._rings.length,u;r<c;r++)u=Yn(this._rings[r],t,!0),u.length&&this._parts.push(u)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(t){var i=!1,s,r,c,u,v,w,k,C;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(u=0,k=this._parts.length;u<k;u++)for(s=this._parts[u],v=0,C=s.length,w=C-1;v<C;w=v++)r=s[v],c=s[w],r.y>t.y!=c.y>t.y&&t.x<(c.x-r.x)*(t.y-r.y)/(c.y-r.y)+r.x&&(i=!i);return i||me.prototype._containsPoint.call(this,t,!0)}});function lr(t,i){return new Ve(t,i)}var ve=ge.extend({initialize:function(t,i){$(this,i),this._layers={},t&&this.addData(t)},addData:function(t){var i=j(t)?t:t.features,s,r,c;if(i){for(s=0,r=i.length;s<r;s++)c=i[s],(c.geometries||c.geometry||c.features||c.coordinates)&&this.addData(c);return this}var u=this.options;if(u.filter&&!u.filter(t))return this;var v=ro(t,u);return v?(v.feature=ho(t),v.defaultOptions=v.options,this.resetStyle(v),u.onEachFeature&&u.onEachFeature(t,v),this.addLayer(v)):this},resetStyle:function(t){return t===void 0?this.eachLayer(this.resetStyle,this):(t.options=a({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this)},setStyle:function(t){return this.eachLayer(function(i){this._setLayerStyle(i,t)},this)},_setLayerStyle:function(t,i){t.setStyle&&(typeof i=="function"&&(i=i(t.feature)),t.setStyle(i))}});function ro(t,i){var s=t.type==="Feature"?t.geometry:t,r=s?s.coordinates:null,c=[],u=i&&i.pointToLayer,v=i&&i.coordsToLatLng||en,w,k,C,D;if(!r&&!s)return null;switch(s.type){case"Point":return w=v(r),rs(u,t,w,i);case"MultiPoint":for(C=0,D=r.length;C<D;C++)w=v(r[C]),c.push(rs(u,t,w,i));return new ge(c);case"LineString":case"MultiLineString":return k=lo(r,s.type==="LineString"?0:1,v),new me(k,i);case"Polygon":case"MultiPolygon":return k=lo(r,s.type==="Polygon"?1:2,v),new Ve(k,i);case"GeometryCollection":for(C=0,D=s.geometries.length;C<D;C++){var q=ro({geometry:s.geometries[C],type:"Feature",properties:t.properties},i);q&&c.push(q)}return new ge(c);case"FeatureCollection":for(C=0,D=s.features.length;C<D;C++){var tt=ro(s.features[C],i);tt&&c.push(tt)}return new ge(c);default:throw new Error("Invalid GeoJSON object.")}}function rs(t,i,s,r){return t?t(i,s):new so(s,r&&r.markersInheritOptions&&r)}function en(t){return new ot(t[1],t[0],t[2])}function lo(t,i,s){for(var r=[],c=0,u=t.length,v;c<u;c++)v=i?lo(t[c],i-1,s):(s||en)(t[c]),r.push(v);return r}function on(t,i){return t=J(t),t.alt!==void 0?[_(t.lng,i),_(t.lat,i),_(t.alt,i)]:[_(t.lng,i),_(t.lat,i)]}function co(t,i,s,r){for(var c=[],u=0,v=t.length;u<v;u++)c.push(i?co(t[u],Qt(t[u])?0:i-1,s,r):on(t[u],r));return!i&&s&&c.length>0&&c.push(c[0].slice()),c}function Je(t,i){return t.feature?a({},t.feature,{geometry:i}):ho(i)}function ho(t){return t.type==="Feature"||t.type==="FeatureCollection"?t:{type:"Feature",properties:{},geometry:t}}var nn={toGeoJSON:function(t){return Je(this,{type:"Point",coordinates:on(this.getLatLng(),t)})}};so.include(nn),tn.include(nn),ao.include(nn),me.include({toGeoJSON:function(t){var i=!Qt(this._latlngs),s=co(this._latlngs,i?1:0,!1,t);return Je(this,{type:(i?"Multi":"")+"LineString",coordinates:s})}}),Ve.include({toGeoJSON:function(t){var i=!Qt(this._latlngs),s=i&&!Qt(this._latlngs[0]),r=co(this._latlngs,s?2:i?1:0,!0,t);return i||(r=[r]),Je(this,{type:(s?"Multi":"")+"Polygon",coordinates:r})}}),qe.include({toMultiPoint:function(t){var i=[];return this.eachLayer(function(s){i.push(s.toGeoJSON(t).geometry.coordinates)}),Je(this,{type:"MultiPoint",coordinates:i})},toGeoJSON:function(t){var i=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(i==="MultiPoint")return this.toMultiPoint(t);var s=i==="GeometryCollection",r=[];return this.eachLayer(function(c){if(c.toGeoJSON){var u=c.toGeoJSON(t);if(s)r.push(u.geometry);else{var v=ho(u);v.type==="FeatureCollection"?r.push.apply(r,v.features):r.push(v)}}}),s?Je(this,{geometries:r,type:"GeometryCollection"}):{type:"FeatureCollection",features:r}}});function ls(t,i){return new ve(t,i)}var dr=ls,po=se.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(t,i,s){this._url=t,this._bounds=vt(i),$(this,s)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(Q(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){kt(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},bringToFront:function(){return this._map&&Ze(this._image),this},bringToBack:function(){return this._map&&Ge(this._image),this},setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},setBounds:function(t){return this._bounds=vt(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var t=this._url.tagName==="IMG",i=this._image=t?this._url:ht("img");if(Q(i,"leaflet-image-layer"),this._zoomAnimated&&Q(i,"leaflet-zoom-animated"),this.options.className&&Q(i,this.options.className),i.onselectstart=x,i.onmousemove=x,i.onload=d(this.fire,this,"load"),i.onerror=d(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(i.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t){this._url=i.src;return}i.src=this._url,i.alt=this.options.alt},_animateZoom:function(t){var i=this._map.getZoomScale(t.zoom),s=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;Te(this._image,s,i)},_reset:function(){var t=this._image,i=new st(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),s=i.getSize();Tt(t,i.min),t.style.width=s.x+"px",t.style.height=s.y+"px"},_updateOpacity:function(){Yt(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)},getCenter:function(){return this._bounds.getCenter()}}),cr=function(t,i,s){return new po(t,i,s)},ds=po.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var t=this._url.tagName==="VIDEO",i=this._image=t?this._url:ht("video");if(Q(i,"leaflet-image-layer"),this._zoomAnimated&&Q(i,"leaflet-zoom-animated"),this.options.className&&Q(i,this.options.className),i.onselectstart=x,i.onmousemove=x,i.onloadeddata=d(this.fire,this,"load"),t){for(var s=i.getElementsByTagName("source"),r=[],c=0;c<s.length;c++)r.push(s[c].src);this._url=s.length>0?r:[i.src];return}j(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(i.style,"objectFit")&&(i.style.objectFit="fill"),i.autoplay=!!this.options.autoplay,i.loop=!!this.options.loop,i.muted=!!this.options.muted,i.playsInline=!!this.options.playsInline;for(var u=0;u<this._url.length;u++){var v=ht("source");v.src=this._url[u],i.appendChild(v)}}});function hr(t,i,s){return new ds(t,i,s)}var cs=po.extend({_initImage:function(){var t=this._image=this._url;Q(t,"leaflet-image-layer"),this._zoomAnimated&&Q(t,"leaflet-zoom-animated"),this.options.className&&Q(t,this.options.className),t.onselectstart=x,t.onmousemove=x}});function pr(t,i,s){return new cs(t,i,s)}var ue=se.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(t,i){t&&(t instanceof ot||j(t))?(this._latlng=J(t),$(this,i)):($(this,t),this._source=i),this.options.content&&(this._content=this.options.content)},openOn:function(t){return t=arguments.length?t:this._source._map,t.hasLayer(this)||t.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(t){return this._map?this.close():(arguments.length?this._source=t:t=this._source,this._prepareOpen(),this.openOn(t._map)),this},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&Yt(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&Yt(this._container,1),this.bringToFront(),this.options.interactive&&(Q(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(t){t._fadeAnimated?(Yt(this._container,0),this._removeTimeout=setTimeout(d(kt,void 0,this._container),200)):kt(this._container),this.options.interactive&&(Lt(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=J(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&Ze(this._container),this},bringToBack:function(){return this._map&&Ge(this._container),this},_prepareOpen:function(t){var i=this._source;if(!i._map)return!1;if(i instanceof ge){i=null;var s=this._source._layers;for(var r in s)if(s[r]._map){i=s[r];break}if(!i)return!1;this._source=i}if(!t)if(i.getCenter)t=i.getCenter();else if(i.getLatLng)t=i.getLatLng();else if(i.getBounds)t=i.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(t),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var t=this._contentNode,i=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof i=="string")t.innerHTML=i;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(i)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),i=W(this.options.offset),s=this._getAnchor();this._zoomAnimated?Tt(this._container,t.add(s)):i=i.add(t).add(s);var r=this._containerBottom=-i.y,c=this._containerLeft=-Math.round(this._containerWidth/2)+i.x;this._container.style.bottom=r+"px",this._container.style.left=c+"px"}},_getAnchor:function(){return[0,0]}});at.include({_initOverlay:function(t,i,s,r){var c=i;return c instanceof t||(c=new t(r).setContent(i)),s&&c.setLatLng(s),c}}),se.include({_initOverlay:function(t,i,s,r){var c=s;return c instanceof t?($(c,r),c._source=this):(c=i&&!r?i:new t(r,this),c.setContent(s)),c}});var uo=ue.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(t){return t=arguments.length?t:this._source._map,!t.hasLayer(this)&&t._popup&&t._popup.options.autoClose&&t.removeLayer(t._popup),t._popup=this,ue.prototype.openOn.call(this,t)},onAdd:function(t){ue.prototype.onAdd.call(this,t),t.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof ke||this._source.on("preclick",Ee))},onRemove:function(t){ue.prototype.onRemove.call(this,t),t.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof ke||this._source.off("preclick",Ee))},getEvents:function(){var t=ue.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this.close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_initLayout:function(){var t="leaflet-popup",i=this._container=ht("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),s=this._wrapper=ht("div",t+"-content-wrapper",i);if(this._contentNode=ht("div",t+"-content",s),Ci(i),Go(this._contentNode),V(i,"contextmenu",Ee),this._tipContainer=ht("div",t+"-tip-container",i),this._tip=ht("div",t+"-tip",this._tipContainer),this.options.closeButton){var r=this._closeButton=ht("a",t+"-close-button",i);r.setAttribute("role","button"),r.setAttribute("aria-label","Close popup"),r.href="#close",r.innerHTML='<span aria-hidden="true">&#215;</span>',V(r,"click",function(c){Wt(c),this.close()},this)}},_updateLayout:function(){var t=this._contentNode,i=t.style;i.width="",i.whiteSpace="nowrap";var s=t.offsetWidth;s=Math.min(s,this.options.maxWidth),s=Math.max(s,this.options.minWidth),i.width=s+1+"px",i.whiteSpace="",i.height="";var r=t.offsetHeight,c=this.options.maxHeight,u="leaflet-popup-scrolled";c&&r>c?(i.height=c+"px",Q(t,u)):Lt(t,u),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var i=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),s=this._getAnchor();Tt(this._container,i.add(s))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var t=this._map,i=parseInt(Pi(this._container,"marginBottom"),10)||0,s=this._container.offsetHeight+i,r=this._containerWidth,c=new H(this._containerLeft,-s-this._containerBottom);c._add(Ce(this._container));var u=t.layerPointToContainerPoint(c),v=W(this.options.autoPanPadding),w=W(this.options.autoPanPaddingTopLeft||v),k=W(this.options.autoPanPaddingBottomRight||v),C=t.getSize(),D=0,q=0;u.x+r+k.x>C.x&&(D=u.x+r-C.x+k.x),u.x-D-w.x<0&&(D=u.x-w.x),u.y+s+k.y>C.y&&(q=u.y+s-C.y+k.y),u.y-q-w.y<0&&(q=u.y-w.y),(D||q)&&(this.options.keepInView&&(this._autopanning=!0),t.fire("autopanstart").panBy([D,q]))}},_getAnchor:function(){return W(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),ur=function(t,i){return new uo(t,i)};at.mergeOptions({closePopupOnClick:!0}),at.include({openPopup:function(t,i,s){return this._initOverlay(uo,t,i,s).openOn(this),this},closePopup:function(t){return t=arguments.length?t:this._popup,t&&t.close(),this}}),se.include({bindPopup:function(t,i){return this._popup=this._initOverlay(uo,this._popup,t,i),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(t){return this._popup&&(this instanceof ge||(this._popup._source=this),this._popup._prepareOpen(t||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},getPopup:function(){return this._popup},_openPopup:function(t){if(!(!this._popup||!this._map)){ze(t);var i=t.layer||t.target;if(this._popup._source===i&&!(i instanceof ke)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(t.latlng);return}this._popup._source=i,this.openPopup(t.latlng)}},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){t.originalEvent.keyCode===13&&this._openPopup(t)}});var fo=ue.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(t){ue.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(t){ue.prototype.onRemove.call(this,t),t.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var t=ue.prototype.getEvents.call(this);return this.options.permanent||(t.preclick=this.close),t},_initLayout:function(){var t="leaflet-tooltip",i=t+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=ht("div",i),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+f(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var i,s,r=this._map,c=this._container,u=r.latLngToContainerPoint(r.getCenter()),v=r.layerPointToContainerPoint(t),w=this.options.direction,k=c.offsetWidth,C=c.offsetHeight,D=W(this.options.offset),q=this._getAnchor();w==="top"?(i=k/2,s=C):w==="bottom"?(i=k/2,s=0):w==="center"?(i=k/2,s=C/2):w==="right"?(i=0,s=C/2):w==="left"?(i=k,s=C/2):v.x<u.x?(w="right",i=0,s=C/2):(w="left",i=k+(D.x+q.x)*2,s=C/2),t=t.subtract(W(i,s,!0)).add(D).add(q),Lt(c,"leaflet-tooltip-right"),Lt(c,"leaflet-tooltip-left"),Lt(c,"leaflet-tooltip-top"),Lt(c,"leaflet-tooltip-bottom"),Q(c,"leaflet-tooltip-"+w),Tt(c,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&Yt(this._container,t)},_animateZoom:function(t){var i=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(i)},_getAnchor:function(){return W(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),fr=function(t,i){return new fo(t,i)};at.include({openTooltip:function(t,i,s){return this._initOverlay(fo,t,i,s).openOn(this),this},closeTooltip:function(t){return t.close(),this}}),se.include({bindTooltip:function(t,i){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(fo,this._tooltip,t,i),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){if(!(!t&&this._tooltipHandlersAdded)){var i=t?"off":"on",s={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?s.add=this._openTooltip:(s.mouseover=this._openTooltip,s.mouseout=this.closeTooltip,s.click=this._openTooltip,this._map?this._addFocusListeners():s.add=this._addFocusListeners),this._tooltip.options.sticky&&(s.mousemove=this._moveTooltip),this[i](s),this._tooltipHandlersAdded=!t}},openTooltip:function(t){return this._tooltip&&(this instanceof ge||(this._tooltip._source=this),this._tooltip._prepareOpen(t)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(t){var i=typeof t.getElement=="function"&&t.getElement();i&&(V(i,"focus",function(){this._tooltip._source=t,this.openTooltip()},this),V(i,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(t){var i=typeof t.getElement=="function"&&t.getElement();i&&i.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(t){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var i=this;this._map.once("moveend",function(){i._openOnceFlag=!1,i._openTooltip(t)});return}this._tooltip._source=t.layer||t.target,this.openTooltip(this._tooltip.options.sticky?t.latlng:void 0)}},_moveTooltip:function(t){var i=t.latlng,s,r;this._tooltip.options.sticky&&t.originalEvent&&(s=this._map.mouseEventToContainerPoint(t.originalEvent),r=this._map.containerPointToLayerPoint(s),i=this._map.layerPointToLatLng(r)),this._tooltip.setLatLng(i)}});var hs=Ke.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var i=t&&t.tagName==="DIV"?t:document.createElement("div"),s=this.options;if(s.html instanceof Element?(Xi(i),i.appendChild(s.html)):i.innerHTML=s.html!==!1?s.html:"",s.bgPos){var r=W(s.bgPos);i.style.backgroundPosition=-r.x+"px "+-r.y+"px"}return this._setIconStyles(i,"icon"),i},createShadow:function(){return null}});function gr(t){return new hs(t)}Ke.Default=Ai;var Mi=se.extend({options:{tileSize:256,opacity:1,updateWhenIdle:U.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(t){$(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),kt(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(Ze(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(Ge(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var t=this._clampZoom(this._map.getZoom());t!==this._tileZoom&&(this._tileZoom=t,this._updateLevels()),this._update()}return this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=m(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},createTile:function(){return document.createElement("div")},getTileSize:function(){var t=this.options.tileSize;return t instanceof H?t:new H(t,t)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var i=this.getPane().children,s=-t(-1/0,1/0),r=0,c=i.length,u;r<c;r++)u=i[r].style.zIndex,i[r]!==this._container&&u&&(s=t(s,+u));isFinite(s)&&(this.options.zIndex=s+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!U.ielt9){Yt(this._container,this.options.opacity);var t=+new Date,i=!1,s=!1;for(var r in this._tiles){var c=this._tiles[r];if(!(!c.current||!c.loaded)){var u=Math.min(1,(t-c.loaded)/200);Yt(c.el,u),u<1?i=!0:(c.active?s=!0:this._onOpaqueTile(c),c.active=!0)}}s&&!this._noPrune&&this._pruneTiles(),i&&(z(this._fadeFrame),this._fadeFrame=Y(this._updateOpacity,this))}},_onOpaqueTile:x,_initContainer:function(){this._container||(this._container=ht("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,i=this.options.maxZoom;if(t!==void 0){for(var s in this._levels)s=Number(s),this._levels[s].el.children.length||s===t?(this._levels[s].el.style.zIndex=i-Math.abs(t-s),this._onUpdateLevel(s)):(kt(this._levels[s].el),this._removeTilesAtZoom(s),this._onRemoveLevel(s),delete this._levels[s]);var r=this._levels[t],c=this._map;return r||(r=this._levels[t]={},r.el=ht("div","leaflet-tile-container leaflet-zoom-animated",this._container),r.el.style.zIndex=i,r.origin=c.project(c.unproject(c.getPixelOrigin()),t).round(),r.zoom=t,this._setZoomTransform(r,c.getCenter(),c.getZoom()),x(r.el.offsetWidth),this._onCreateLevel(r)),this._level=r,r}},_onUpdateLevel:x,_onRemoveLevel:x,_onCreateLevel:x,_pruneTiles:function(){if(this._map){var t,i,s=this._map.getZoom();if(s>this.options.maxZoom||s<this.options.minZoom){this._removeAllTiles();return}for(t in this._tiles)i=this._tiles[t],i.retain=i.current;for(t in this._tiles)if(i=this._tiles[t],i.current&&!i.active){var r=i.coords;this._retainParent(r.x,r.y,r.z,r.z-5)||this._retainChildren(r.x,r.y,r.z,r.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}},_removeTilesAtZoom:function(t){for(var i in this._tiles)this._tiles[i].coords.z===t&&this._removeTile(i)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)kt(this._levels[t].el),this._onRemoveLevel(Number(t)),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,i,s,r){var c=Math.floor(t/2),u=Math.floor(i/2),v=s-1,w=new H(+c,+u);w.z=+v;var k=this._tileCoordsToKey(w),C=this._tiles[k];return C&&C.active?(C.retain=!0,!0):(C&&C.loaded&&(C.retain=!0),v>r?this._retainParent(c,u,v,r):!1)},_retainChildren:function(t,i,s,r){for(var c=2*t;c<2*t+2;c++)for(var u=2*i;u<2*i+2;u++){var v=new H(c,u);v.z=s+1;var w=this._tileCoordsToKey(v),k=this._tiles[w];if(k&&k.active){k.retain=!0;continue}else k&&k.loaded&&(k.retain=!0);s+1<r&&this._retainChildren(c,u,s+1,r)}},_resetView:function(t){var i=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),i,i)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var i=this.options;return i.minNativeZoom!==void 0&&t<i.minNativeZoom?i.minNativeZoom:i.maxNativeZoom!==void 0&&i.maxNativeZoom<t?i.maxNativeZoom:t},_setView:function(t,i,s,r){var c=Math.round(i);this.options.maxZoom!==void 0&&c>this.options.maxZoom||this.options.minZoom!==void 0&&c<this.options.minZoom?c=void 0:c=this._clampZoom(c);var u=this.options.updateWhenZooming&&c!==this._tileZoom;(!r||u)&&(this._tileZoom=c,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),c!==void 0&&this._update(t),s||this._pruneTiles(),this._noPrune=!!s),this._setZoomTransforms(t,i)},_setZoomTransforms:function(t,i){for(var s in this._levels)this._setZoomTransform(this._levels[s],t,i)},_setZoomTransform:function(t,i,s){var r=this._map.getZoomScale(s,t.zoom),c=t.origin.multiplyBy(r).subtract(this._map._getNewPixelOrigin(i,s)).round();U.any3d?Te(t.el,c,r):Tt(t.el,c)},_resetGrid:function(){var t=this._map,i=t.options.crs,s=this._tileSize=this.getTileSize(),r=this._tileZoom,c=this._map.getPixelWorldBounds(this._tileZoom);c&&(this._globalTileRange=this._pxBoundsToTileRange(c)),this._wrapX=i.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,i.wrapLng[0]],r).x/s.x),Math.ceil(t.project([0,i.wrapLng[1]],r).x/s.y)],this._wrapY=i.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([i.wrapLat[0],0],r).y/s.x),Math.ceil(t.project([i.wrapLat[1],0],r).y/s.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(t){var i=this._map,s=i._animatingZoom?Math.max(i._animateToZoom,i.getZoom()):i.getZoom(),r=i.getZoomScale(s,this._tileZoom),c=i.project(t,this._tileZoom).floor(),u=i.getSize().divideBy(r*2);return new st(c.subtract(u),c.add(u))},_update:function(t){var i=this._map;if(i){var s=this._clampZoom(i.getZoom());if(t===void 0&&(t=i.getCenter()),this._tileZoom!==void 0){var r=this._getTiledPixelBounds(t),c=this._pxBoundsToTileRange(r),u=c.getCenter(),v=[],w=this.options.keepBuffer,k=new st(c.getBottomLeft().subtract([w,-w]),c.getTopRight().add([w,-w]));if(!(isFinite(c.min.x)&&isFinite(c.min.y)&&isFinite(c.max.x)&&isFinite(c.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var C in this._tiles){var D=this._tiles[C].coords;(D.z!==this._tileZoom||!k.contains(new H(D.x,D.y)))&&(this._tiles[C].current=!1)}if(Math.abs(s-this._tileZoom)>1){this._setView(t,s);return}for(var q=c.min.y;q<=c.max.y;q++)for(var tt=c.min.x;tt<=c.max.x;tt++){var jt=new H(tt,q);if(jt.z=this._tileZoom,!!this._isValidTile(jt)){var It=this._tiles[this._tileCoordsToKey(jt)];It?It.current=!0:v.push(jt)}}if(v.sort(function(Ut,Qe){return Ut.distanceTo(u)-Qe.distanceTo(u)}),v.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var Xt=document.createDocumentFragment();for(tt=0;tt<v.length;tt++)this._addTile(v[tt],Xt);this._level.el.appendChild(Xt)}}}},_isValidTile:function(t){var i=this._map.options.crs;if(!i.infinite){var s=this._globalTileRange;if(!i.wrapLng&&(t.x<s.min.x||t.x>s.max.x)||!i.wrapLat&&(t.y<s.min.y||t.y>s.max.y))return!1}if(!this.options.bounds)return!0;var r=this._tileCoordsToBounds(t);return vt(this.options.bounds).overlaps(r)},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var i=this._map,s=this.getTileSize(),r=t.scaleBy(s),c=r.add(s),u=i.unproject(r,t.z),v=i.unproject(c,t.z);return[u,v]},_tileCoordsToBounds:function(t){var i=this._tileCoordsToNwSe(t),s=new St(i[0],i[1]);return this.options.noWrap||(s=this._map.wrapLatLngBounds(s)),s},_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},_keyToTileCoords:function(t){var i=t.split(":"),s=new H(+i[0],+i[1]);return s.z=+i[2],s},_removeTile:function(t){var i=this._tiles[t];i&&(kt(i.el),delete this._tiles[t],this.fire("tileunload",{tile:i.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){Q(t,"leaflet-tile");var i=this.getTileSize();t.style.width=i.x+"px",t.style.height=i.y+"px",t.onselectstart=x,t.onmousemove=x,U.ielt9&&this.options.opacity<1&&Yt(t,this.options.opacity)},_addTile:function(t,i){var s=this._getTilePos(t),r=this._tileCoordsToKey(t),c=this.createTile(this._wrapCoords(t),d(this._tileReady,this,t));this._initTile(c),this.createTile.length<2&&Y(d(this._tileReady,this,t,null,c)),Tt(c,s),this._tiles[r]={el:c,coords:t,current:!0},i.appendChild(c),this.fire("tileloadstart",{tile:c,coords:t})},_tileReady:function(t,i,s){i&&this.fire("tileerror",{error:i,tile:s,coords:t});var r=this._tileCoordsToKey(t);s=this._tiles[r],s&&(s.loaded=+new Date,this._map._fadeAnimated?(Yt(s.el,0),z(this._fadeFrame),this._fadeFrame=Y(this._updateOpacity,this)):(s.active=!0,this._pruneTiles()),i||(Q(s.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:s.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),U.ielt9||!this._map._fadeAnimated?Y(this._pruneTiles,this):setTimeout(d(this._pruneTiles,this),250)))},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var i=new H(this._wrapX?y(t.x,this._wrapX):t.x,this._wrapY?y(t.y,this._wrapY):t.y);return i.z=t.z,i},_pxBoundsToTileRange:function(t){var i=this.getTileSize();return new st(t.min.unscaleBy(i).floor(),t.max.unscaleBy(i).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}});function mr(t){return new Mi(t)}var Ye=Mi.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(t,i){this._url=t,i=$(this,i),i.detectRetina&&U.retina&&i.maxZoom>0?(i.tileSize=Math.floor(i.tileSize/2),i.zoomReverse?(i.zoomOffset--,i.minZoom=Math.min(i.maxZoom,i.minZoom+1)):(i.zoomOffset++,i.maxZoom=Math.max(i.minZoom,i.maxZoom-1)),i.minZoom=Math.max(0,i.minZoom)):i.zoomReverse?i.minZoom=Math.min(i.maxZoom,i.minZoom):i.maxZoom=Math.max(i.minZoom,i.maxZoom),typeof i.subdomains=="string"&&(i.subdomains=i.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(t,i){return this._url===t&&i===void 0&&(i=!0),this._url=t,i||this.redraw(),this},createTile:function(t,i){var s=document.createElement("img");return V(s,"load",d(this._tileOnLoad,this,i,s)),V(s,"error",d(this._tileOnError,this,i,s)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(s.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(s.referrerPolicy=this.options.referrerPolicy),s.alt="",s.src=this.getTileUrl(t),s},getTileUrl:function(t){var i={r:U.retina?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var s=this._globalTileRange.max.y-t.y;this.options.tms&&(i.y=s),i["-y"]=s}return Z(this._url,a(i,this.options))},_tileOnLoad:function(t,i){U.ielt9?setTimeout(d(t,this,null,i),0):t(null,i)},_tileOnError:function(t,i,s){var r=this.options.errorTileUrl;r&&i.getAttribute("src")!==r&&(i.src=r),t(s,i)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,i=this.options.maxZoom,s=this.options.zoomReverse,r=this.options.zoomOffset;return s&&(t=i-t),t+r},_getSubdomain:function(t){var i=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[i]},_abortLoading:function(){var t,i;for(t in this._tiles)if(this._tiles[t].coords.z!==this._tileZoom&&(i=this._tiles[t].el,i.onload=x,i.onerror=x,!i.complete)){i.src=I;var s=this._tiles[t].coords;kt(i),delete this._tiles[t],this.fire("tileabort",{tile:i,coords:s})}},_removeTile:function(t){var i=this._tiles[t];if(i)return i.el.setAttribute("src",I),Mi.prototype._removeTile.call(this,t)},_tileReady:function(t,i,s){if(!(!this._map||s&&s.getAttribute("src")===I))return Mi.prototype._tileReady.call(this,t,i,s)}});function ps(t,i){return new Ye(t,i)}var us=Ye.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(t,i){this._url=t;var s=a({},this.defaultWmsParams);for(var r in i)r in this.options||(s[r]=i[r]);i=$(this,i);var c=i.detectRetina&&U.retina?2:1,u=this.getTileSize();s.width=u.x*c,s.height=u.y*c,this.wmsParams=s},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var i=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[i]=this._crs.code,Ye.prototype.onAdd.call(this,t)},getTileUrl:function(t){var i=this._tileCoordsToNwSe(t),s=this._crs,r=wt(s.project(i[0]),s.project(i[1])),c=r.min,u=r.max,v=(this._wmsVersion>=1.3&&this._crs===ss?[c.y,c.x,u.y,u.x]:[c.x,c.y,u.x,u.y]).join(","),w=Ye.prototype.getTileUrl.call(this,t);return w+N(this.wmsParams,w,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+v},setParams:function(t,i){return a(this.wmsParams,t),i||this.redraw(),this}});function vr(t,i){return new us(t,i)}Ye.WMS=us,ps.wms=vr;var xe=se.extend({options:{padding:.1},initialize:function(t){$(this,t),f(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),Q(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,i){var s=this._map.getZoomScale(i,this._zoom),r=this._map.getSize().multiplyBy(.5+this.options.padding),c=this._map.project(this._center,i),u=r.multiplyBy(-s).add(c).subtract(this._map._getNewPixelOrigin(t,i));U.any3d?Te(this._container,u,s):Tt(this._container,u)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var t in this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){var t=this.options.padding,i=this._map.getSize(),s=this._map.containerPointToLayerPoint(i.multiplyBy(-t)).round();this._bounds=new st(s,s.add(i.multiplyBy(1+t*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),fs=xe.extend({options:{tolerance:0},getEvents:function(){var t=xe.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){xe.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");V(t,"mousemove",this._onMouseMove,this),V(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),V(t,"mouseout",this._handleMouseOut,this),t._leaflet_disable_events=!0,this._ctx=t.getContext("2d")},_destroyContainer:function(){z(this._redrawRequest),delete this._ctx,kt(this._container),bt(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var t;this._redrawBounds=null;for(var i in this._layers)t=this._layers[i],t._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){xe.prototype._update.call(this);var t=this._bounds,i=this._container,s=t.getSize(),r=U.retina?2:1;Tt(i,t.min),i.width=r*s.x,i.height=r*s.y,i.style.width=s.x+"px",i.style.height=s.y+"px",U.retina&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire("update")}},_reset:function(){xe.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t),this._layers[f(t)]=t;var i=t._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=i),this._drawLast=i,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var i=t._order,s=i.next,r=i.prev;s?s.prev=r:this._drawLast=r,r?r.next=s:this._drawFirst=s,delete t._order,delete this._layers[f(t)],this._requestRedraw(t)},_updatePath:function(t){this._extendRedrawBounds(t),t._project(),t._update(),this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if(typeof t.options.dashArray=="string"){var i=t.options.dashArray.split(/[, ]+/),s=[],r,c;for(c=0;c<i.length;c++){if(r=Number(i[c]),isNaN(r))return;s.push(r)}t.options._dashArray=s}else t.options._dashArray=t.options.dashArray},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||Y(this._redraw,this))},_extendRedrawBounds:function(t){if(t._pxBounds){var i=(t.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new st,this._redrawBounds.extend(t._pxBounds.min.subtract([i,i])),this._redrawBounds.extend(t._pxBounds.max.add([i,i]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t=this._redrawBounds;if(t){var i=t.getSize();this._ctx.clearRect(t.min.x,t.min.y,i.x,i.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var t,i=this._redrawBounds;if(this._ctx.save(),i){var s=i.getSize();this._ctx.beginPath(),this._ctx.rect(i.min.x,i.min.y,s.x,s.y),this._ctx.clip()}this._drawing=!0;for(var r=this._drawFirst;r;r=r.next)t=r.layer,(!i||t._pxBounds&&t._pxBounds.intersects(i))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,i){if(this._drawing){var s,r,c,u,v=t._parts,w=v.length,k=this._ctx;if(w){for(k.beginPath(),s=0;s<w;s++){for(r=0,c=v[s].length;r<c;r++)u=v[s][r],k[r?"lineTo":"moveTo"](u.x,u.y);i&&k.closePath()}this._fillStroke(k,t)}}},_updateCircle:function(t){if(!(!this._drawing||t._empty())){var i=t._point,s=this._ctx,r=Math.max(Math.round(t._radius),1),c=(Math.max(Math.round(t._radiusY),1)||r)/r;c!==1&&(s.save(),s.scale(1,c)),s.beginPath(),s.arc(i.x,i.y/c,r,0,Math.PI*2,!1),c!==1&&s.restore(),this._fillStroke(s,t)}},_fillStroke:function(t,i){var s=i.options;s.fill&&(t.globalAlpha=s.fillOpacity,t.fillStyle=s.fillColor||s.color,t.fill(s.fillRule||"evenodd")),s.stroke&&s.weight!==0&&(t.setLineDash&&t.setLineDash(i.options&&i.options._dashArray||[]),t.globalAlpha=s.opacity,t.lineWidth=s.weight,t.strokeStyle=s.color,t.lineCap=s.lineCap,t.lineJoin=s.lineJoin,t.stroke())},_onClick:function(t){for(var i=this._map.mouseEventToLayerPoint(t),s,r,c=this._drawFirst;c;c=c.next)s=c.layer,s.options.interactive&&s._containsPoint(i)&&(!(t.type==="click"||t.type==="preclick")||!this._map._draggableMoved(s))&&(r=s);this._fireEvent(r?[r]:!1,t)},_onMouseMove:function(t){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var i=this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t,i)}},_handleMouseOut:function(t){var i=this._hoveredLayer;i&&(Lt(this._container,"leaflet-interactive"),this._fireEvent([i],t,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(t,i){if(!this._mouseHoverThrottled){for(var s,r,c=this._drawFirst;c;c=c.next)s=c.layer,s.options.interactive&&s._containsPoint(i)&&(r=s);r!==this._hoveredLayer&&(this._handleMouseOut(t),r&&(Q(this._container,"leaflet-interactive"),this._fireEvent([r],t,"mouseover"),this._hoveredLayer=r)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,t),this._mouseHoverThrottled=!0,setTimeout(d(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(t,i,s){this._map._fireDOMEvent(i,s||i.type,t)},_bringToFront:function(t){var i=t._order;if(i){var s=i.next,r=i.prev;if(s)s.prev=r;else return;r?r.next=s:s&&(this._drawFirst=s),i.prev=this._drawLast,this._drawLast.next=i,i.next=null,this._drawLast=i,this._requestRedraw(t)}},_bringToBack:function(t){var i=t._order;if(i){var s=i.next,r=i.prev;if(r)r.next=s;else return;s?s.prev=r:r&&(this._drawLast=r),i.prev=null,i.next=this._drawFirst,this._drawFirst.prev=i,this._drawFirst=i,this._requestRedraw(t)}}});function gs(t){return U.canvas?new fs(t):null}var Di=(function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch{}return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}})(),xr={_initContainer:function(){this._container=ht("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(xe.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var i=t._container=Di("shape");Q(i,"leaflet-vml-shape "+(this.options.className||"")),i.coordsize="1 1",t._path=Di("path"),i.appendChild(t._path),this._updateStyle(t),this._layers[f(t)]=t},_addPath:function(t){var i=t._container;this._container.appendChild(i),t.options.interactive&&t.addInteractiveTarget(i)},_removePath:function(t){var i=t._container;kt(i),t.removeInteractiveTarget(i),delete this._layers[f(t)]},_updateStyle:function(t){var i=t._stroke,s=t._fill,r=t.options,c=t._container;c.stroked=!!r.stroke,c.filled=!!r.fill,r.stroke?(i||(i=t._stroke=Di("stroke")),c.appendChild(i),i.weight=r.weight+"px",i.color=r.color,i.opacity=r.opacity,r.dashArray?i.dashStyle=j(r.dashArray)?r.dashArray.join(" "):r.dashArray.replace(/( *, *)/g," "):i.dashStyle="",i.endcap=r.lineCap.replace("butt","flat"),i.joinstyle=r.lineJoin):i&&(c.removeChild(i),t._stroke=null),r.fill?(s||(s=t._fill=Di("fill")),c.appendChild(s),s.color=r.fillColor||r.color,s.opacity=r.fillOpacity):s&&(c.removeChild(s),t._fill=null)},_updateCircle:function(t){var i=t._point.round(),s=Math.round(t._radius),r=Math.round(t._radiusY||s);this._setPath(t,t._empty()?"M0 0":"AL "+i.x+","+i.y+" "+s+","+r+" 0,"+65535*360)},_setPath:function(t,i){t._path.v=i},_bringToFront:function(t){Ze(t._container)},_bringToBack:function(t){Ge(t._container)}},go=U.vml?Di:Se,Ni=xe.extend({_initContainer:function(){this._container=go("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=go("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){kt(this._container),bt(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){xe.prototype._update.call(this);var t=this._bounds,i=t.getSize(),s=this._container;(!this._svgSize||!this._svgSize.equals(i))&&(this._svgSize=i,s.setAttribute("width",i.x),s.setAttribute("height",i.y)),Tt(s,t.min),s.setAttribute("viewBox",[t.min.x,t.min.y,i.x,i.y].join(" ")),this.fire("update")}},_initPath:function(t){var i=t._path=go("path");t.options.className&&Q(i,t.options.className),t.options.interactive&&Q(i,"leaflet-interactive"),this._updateStyle(t),this._layers[f(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){kt(t._path),t.removeInteractiveTarget(t._path),delete this._layers[f(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var i=t._path,s=t.options;i&&(s.stroke?(i.setAttribute("stroke",s.color),i.setAttribute("stroke-opacity",s.opacity),i.setAttribute("stroke-width",s.weight),i.setAttribute("stroke-linecap",s.lineCap),i.setAttribute("stroke-linejoin",s.lineJoin),s.dashArray?i.setAttribute("stroke-dasharray",s.dashArray):i.removeAttribute("stroke-dasharray"),s.dashOffset?i.setAttribute("stroke-dashoffset",s.dashOffset):i.removeAttribute("stroke-dashoffset")):i.setAttribute("stroke","none"),s.fill?(i.setAttribute("fill",s.fillColor||s.color),i.setAttribute("fill-opacity",s.fillOpacity),i.setAttribute("fill-rule",s.fillRule||"evenodd")):i.setAttribute("fill","none"))},_updatePoly:function(t,i){this._setPath(t,ye(t._parts,i))},_updateCircle:function(t){var i=t._point,s=Math.max(Math.round(t._radius),1),r=Math.max(Math.round(t._radiusY),1)||s,c="a"+s+","+r+" 0 1,0 ",u=t._empty()?"M0 0":"M"+(i.x-s)+","+i.y+c+s*2+",0 "+c+-s*2+",0 ";this._setPath(t,u)},_setPath:function(t,i){t._path.setAttribute("d",i)},_bringToFront:function(t){Ze(t._path)},_bringToBack:function(t){Ge(t._path)}});U.vml&&Ni.include(xr);function ms(t){return U.svg||U.vml?new Ni(t):null}at.include({getRenderer:function(t){var i=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer;return i||(i=this._renderer=this._createRenderer()),this.hasLayer(i)||this.addLayer(i),i},_getPaneRenderer:function(t){if(t==="overlayPane"||t===void 0)return!1;var i=this._paneRenderers[t];return i===void 0&&(i=this._createRenderer({pane:t}),this._paneRenderers[t]=i),i},_createRenderer:function(t){return this.options.preferCanvas&&gs(t)||ms(t)}});var vs=Ve.extend({initialize:function(t,i){Ve.prototype.initialize.call(this,this._boundsToLatLngs(t),i)},setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return t=vt(t),[t.getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});function br(t,i){return new vs(t,i)}Ni.create=go,Ni.pointsToPath=ye,ve.geometryToLayer=ro,ve.coordsToLatLng=en,ve.coordsToLatLngs=lo,ve.latLngToCoords=on,ve.latLngsToCoords=co,ve.getFeature=Je,ve.asFeature=ho,at.mergeOptions({boxZoom:!0});var xs=pe.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){V(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){bt(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){kt(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||t.which!==1&&t.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Li(),Bo(),this._startPoint=this._map.mouseEventToContainerPoint(t),V(document,{contextmenu:ze,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=ht("div","leaflet-zoom-box",this._container),Q(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var i=new st(this._point,this._startPoint),s=i.getSize();Tt(this._box,i.min),this._box.style.width=s.x+"px",this._box.style.height=s.y+"px"},_finish:function(){this._moved&&(kt(this._box),Lt(this._container,"leaflet-crosshair")),Si(),Oo(),bt(document,{contextmenu:ze,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){if(!(t.which!==1&&t.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(d(this._resetState,this),0);var i=new St(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(i).fire("boxzoomend",{boxZoomBounds:i})}},_onKeyDown:function(t){t.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});at.addInitHook("addHandler","boxZoom",xs),at.mergeOptions({doubleClickZoom:!0});var bs=pe.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var i=this._map,s=i.getZoom(),r=i.options.zoomDelta,c=t.originalEvent.shiftKey?s-r:s+r;i.options.doubleClickZoom==="center"?i.setZoom(c):i.setZoomAround(t.containerPoint,c)}});at.addInitHook("addHandler","doubleClickZoom",bs),at.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var ys=pe.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new _e(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}Q(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){Lt(this._map._container,"leaflet-grab"),Lt(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t=this._map;if(t._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var i=vt(this._map.options.maxBounds);this._offsetLimit=wt(this._map.latLngToContainerPoint(i.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(i.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){if(this._map.options.inertia){var i=this._lastTime=+new Date,s=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(s),this._times.push(i),this._prunePositions(i)}this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){for(;this._positions.length>1&&t-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),i=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=i.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,i){return t-(t-i)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var t=this._draggable._newPos.subtract(this._draggable._startPos),i=this._offsetLimit;t.x<i.min.x&&(t.x=this._viscousLimit(t.x,i.min.x)),t.y<i.min.y&&(t.y=this._viscousLimit(t.y,i.min.y)),t.x>i.max.x&&(t.x=this._viscousLimit(t.x,i.max.x)),t.y>i.max.y&&(t.y=this._viscousLimit(t.y,i.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},_onPreDragWrap:function(){var t=this._worldWidth,i=Math.round(t/2),s=this._initialWorldOffset,r=this._draggable._newPos.x,c=(r-i+s)%t+i-s,u=(r+i+s)%t-i-s,v=Math.abs(c+s)<Math.abs(u+s)?c:u;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=v},_onDragEnd:function(t){var i=this._map,s=i.options,r=!s.inertia||t.noInertia||this._times.length<2;if(i.fire("dragend",t),r)i.fire("moveend");else{this._prunePositions(+new Date);var c=this._lastPos.subtract(this._positions[0]),u=(this._lastTime-this._times[0])/1e3,v=s.easeLinearity,w=c.multiplyBy(v/u),k=w.distanceTo([0,0]),C=Math.min(s.inertiaMaxSpeed,k),D=w.multiplyBy(C/k),q=C/(s.inertiaDeceleration*v),tt=D.multiplyBy(-q/2).round();!tt.x&&!tt.y?i.fire("moveend"):(tt=i._limitOffset(tt,i.options.maxBounds),Y(function(){i.panBy(tt,{duration:q,easeLinearity:v,noMoveStart:!0,animate:!0})}))}}});at.addInitHook("addHandler","dragging",ys),at.mergeOptions({keyboard:!0,keyboardPanDelta:80});var ws=pe.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),V(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),bt(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var t=document.body,i=document.documentElement,s=t.scrollTop||i.scrollTop,r=t.scrollLeft||i.scrollLeft;this._map._container.focus(),window.scrollTo(r,s)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){var i=this._panKeys={},s=this.keyCodes,r,c;for(r=0,c=s.left.length;r<c;r++)i[s.left[r]]=[-1*t,0];for(r=0,c=s.right.length;r<c;r++)i[s.right[r]]=[t,0];for(r=0,c=s.down.length;r<c;r++)i[s.down[r]]=[0,t];for(r=0,c=s.up.length;r<c;r++)i[s.up[r]]=[0,-1*t]},_setZoomDelta:function(t){var i=this._zoomKeys={},s=this.keyCodes,r,c;for(r=0,c=s.zoomIn.length;r<c;r++)i[s.zoomIn[r]]=t;for(r=0,c=s.zoomOut.length;r<c;r++)i[s.zoomOut[r]]=-t},_addHooks:function(){V(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){bt(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var i=t.keyCode,s=this._map,r;if(i in this._panKeys){if(!s._panAnim||!s._panAnim._inProgress)if(r=this._panKeys[i],t.shiftKey&&(r=W(r).multiplyBy(3)),s.options.maxBounds&&(r=s._limitOffset(W(r),s.options.maxBounds)),s.options.worldCopyJump){var c=s.wrapLatLng(s.unproject(s.project(s.getCenter()).add(r)));s.panTo(c)}else s.panBy(r)}else if(i in this._zoomKeys)s.setZoom(s.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[i]);else if(i===27&&s._popup&&s._popup.options.closeOnEscapeKey)s.closePopup();else return;ze(t)}}});at.addInitHook("addHandler","keyboard",ws),at.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var _s=pe.extend({addHooks:function(){V(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){bt(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var i=Gn(t),s=this._map.options.wheelDebounceTime;this._delta+=i,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var r=Math.max(s-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(d(this._performZoom,this),r),ze(t)},_performZoom:function(){var t=this._map,i=t.getZoom(),s=this._map.options.zoomSnap||0;t._stop();var r=this._delta/(this._map.options.wheelPxPerZoomLevel*4),c=4*Math.log(2/(1+Math.exp(-Math.abs(r))))/Math.LN2,u=s?Math.ceil(c/s)*s:c,v=t._limitZoom(i+(this._delta>0?u:-u))-i;this._delta=0,this._startTime=null,v&&(t.options.scrollWheelZoom==="center"?t.setZoom(i+v):t.setZoomAround(this._lastMousePos,i+v))}});at.addInitHook("addHandler","scrollWheelZoom",_s);var yr=600;at.mergeOptions({tapHold:U.touchNative&&U.safari&&U.mobile,tapTolerance:15});var ks=pe.extend({addHooks:function(){V(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){bt(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(clearTimeout(this._holdTimeout),t.touches.length===1){var i=t.touches[0];this._startPos=this._newPos=new H(i.clientX,i.clientY),this._holdTimeout=setTimeout(d(function(){this._cancel(),this._isTapValid()&&(V(document,"touchend",Wt),V(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",i))},this),yr),V(document,"touchend touchcancel contextmenu",this._cancel,this),V(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function t(){bt(document,"touchend",Wt),bt(document,"touchend touchcancel",t)},_cancel:function(){clearTimeout(this._holdTimeout),bt(document,"touchend touchcancel contextmenu",this._cancel,this),bt(document,"touchmove",this._onMove,this)},_onMove:function(t){var i=t.touches[0];this._newPos=new H(i.clientX,i.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(t,i){var s=new MouseEvent(t,{bubbles:!0,cancelable:!0,view:window,screenX:i.screenX,screenY:i.screenY,clientX:i.clientX,clientY:i.clientY});s._simulated=!0,i.target.dispatchEvent(s)}});at.addInitHook("addHandler","tapHold",ks),at.mergeOptions({touchZoom:U.touch,bounceAtZoomLimits:!0});var Fs=pe.extend({addHooks:function(){Q(this._map._container,"leaflet-touch-zoom"),V(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){Lt(this._map._container,"leaflet-touch-zoom"),bt(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var i=this._map;if(!(!t.touches||t.touches.length!==2||i._animatingZoom||this._zooming)){var s=i.mouseEventToContainerPoint(t.touches[0]),r=i.mouseEventToContainerPoint(t.touches[1]);this._centerPoint=i.getSize()._divideBy(2),this._startLatLng=i.containerPointToLatLng(this._centerPoint),i.options.touchZoom!=="center"&&(this._pinchStartLatLng=i.containerPointToLatLng(s.add(r)._divideBy(2))),this._startDist=s.distanceTo(r),this._startZoom=i.getZoom(),this._moved=!1,this._zooming=!0,i._stop(),V(document,"touchmove",this._onTouchMove,this),V(document,"touchend touchcancel",this._onTouchEnd,this),Wt(t)}},_onTouchMove:function(t){if(!(!t.touches||t.touches.length!==2||!this._zooming)){var i=this._map,s=i.mouseEventToContainerPoint(t.touches[0]),r=i.mouseEventToContainerPoint(t.touches[1]),c=s.distanceTo(r)/this._startDist;if(this._zoom=i.getScaleZoom(c,this._startZoom),!i.options.bounceAtZoomLimits&&(this._zoom<i.getMinZoom()&&c<1||this._zoom>i.getMaxZoom()&&c>1)&&(this._zoom=i._limitZoom(this._zoom)),i.options.touchZoom==="center"){if(this._center=this._startLatLng,c===1)return}else{var u=s._add(r)._divideBy(2)._subtract(this._centerPoint);if(c===1&&u.x===0&&u.y===0)return;this._center=i.unproject(i.project(this._pinchStartLatLng,this._zoom).subtract(u),this._zoom)}this._moved||(i._moveStart(!0,!1),this._moved=!0),z(this._animRequest);var v=d(i._move,i,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=Y(v,this,!0),Wt(t)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,z(this._animRequest),bt(document,"touchmove",this._onTouchMove,this),bt(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});at.addInitHook("addHandler","touchZoom",Fs),at.BoxZoom=xs,at.DoubleClickZoom=bs,at.Drag=ys,at.Keyboard=ws,at.ScrollWheelZoom=_s,at.TapHold=ks,at.TouchZoom=Fs,o.Bounds=st,o.Browser=U,o.CRS=Dt,o.Canvas=fs,o.Circle=tn,o.CircleMarker=ao,o.Class=G,o.Control=ne,o.DivIcon=hs,o.DivOverlay=ue,o.DomEvent=Ba,o.DomUtil=Na,o.Draggable=_e,o.Evented=$t,o.FeatureGroup=ge,o.GeoJSON=ve,o.GridLayer=Mi,o.Handler=pe,o.Icon=Ke,o.ImageOverlay=po,o.LatLng=ot,o.LatLngBounds=St,o.Layer=se,o.LayerGroup=qe,o.LineUtil=Ya,o.Map=at,o.Marker=so,o.Mixin=Za,o.Path=ke,o.Point=H,o.PolyUtil=Ga,o.Polygon=Ve,o.Polyline=me,o.Popup=uo,o.PosAnimation=qn,o.Projection=Qa,o.Rectangle=vs,o.Renderer=xe,o.SVG=Ni,o.SVGOverlay=cs,o.TileLayer=Ye,o.Tooltip=fo,o.Transformation=be,o.Util=lt,o.VideoOverlay=ds,o.bind=d,o.bounds=wt,o.canvas=gs,o.circle=ar,o.circleMarker=sr,o.control=Ei,o.divIcon=gr,o.extend=a,o.featureGroup=ir,o.geoJSON=ls,o.geoJson=dr,o.gridLayer=mr,o.icon=or,o.imageOverlay=cr,o.latLng=J,o.latLngBounds=vt,o.layerGroup=er,o.map=Oa,o.marker=nr,o.point=W,o.polygon=lr,o.polyline=rr,o.popup=ur,o.rectangle=br,o.setOptions=$,o.stamp=f,o.svg=ms,o.svgOverlay=pr,o.tileLayer=ps,o.tooltip=fr,o.transformation=le,o.version=n,o.videoOverlay=hr;var wr=window.L;o.noConflict=function(){return window.L=wr,this},window.L=o}))})(Bi,Bi.exports)),Bi.exports}var Wl=Rl();const X=Bl(Wl);var Lo=function(h,e,o,n){var a=arguments.length,l=a<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,o):n,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,e,o,n);else for(var p=h.length-1;p>=0;p--)(d=h[p])&&(l=(a<3?d(l):a>3?d(e,o,l):d(e,o))||l);return a>3&&l&&Object.defineProperty(e,o,l),l};function jl(h){if(h.length<=2)return h;const e=[...h].sort((l,d)=>l[0]===d[0]?l[1]-d[1]:l[0]-d[0]),o=(l,d,p)=>(d[0]-l[0])*(p[1]-l[1])-(d[1]-l[1])*(p[0]-l[0]),n=[];for(const l of e){for(;n.length>=2&&o(n[n.length-2],n[n.length-1],l)<=0;)n.pop();n.push(l)}const a=[];for(let l=e.length-1;l>=0;l--){const d=e[l];for(;a.length>=2&&o(a[a.length-2],a[a.length-1],d)<=0;)a.pop();a.push(d)}return a.pop(),n.pop(),n.concat(a)}var ai;let Ui=(ai=class extends Ft{constructor(){super(...arguments),this.activeFilter="all",this.isLocating=!1,this.markerMap=new Map}connectedCallback(){super.connectedCallback(),this.unsubscribe=g.subscribe(()=>{this.requestUpdate(),this.updateMapLayers()})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.unsubscribe)==null||e.call(this),this.destroyMap()}firstUpdated(e){super.firstUpdated(e),setTimeout(()=>{this.initMap()},60)}updated(e){super.updated(e),e.has("activeFilter")&&this.updateMapLayers(),this.map&&setTimeout(()=>{var o;return(o=this.map)==null?void 0:o.invalidateSize()},50)}destroyMap(){this.map&&(this.map.remove(),this.map=void 0,this.markersLayer=void 0,this.trailsLayer=void 0,this.territoryLayer=void 0,this.markerMap.clear())}getGeoEvents(){return(g.events||[]).filter(o=>typeof o.latitude=="number"&&typeof o.longitude=="number")}getFilteredEvents(){const e=this.getGeoEvents();return this.activeFilter==="all"?e:e.filter(o=>o.eventType===this.activeFilter)}initMap(){var l;const e=(l=this.renderRoot)==null?void 0:l.querySelector("#leaflet-map");if(!e||this.map)return;const o=this.getGeoEvents();let n=[37.5665,126.978],a=13;o.length>0&&(n=[o[0].latitude,o[0].longitude],a=15),this.map=X.map(e,{zoomControl:!1,attributionControl:!1}).setView(n,a),X.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png",{maxZoom:19,subdomains:"abcd"}).addTo(this.map),X.control.zoom({position:"bottomright"}).addTo(this.map),this.territoryLayer=X.layerGroup().addTo(this.map),this.trailsLayer=X.layerGroup().addTo(this.map),this.markersLayer=X.layerGroup().addTo(this.map),this.updateMapLayers(o.length>1),setTimeout(()=>{var d;(d=this.map)==null||d.invalidateSize()},150)}updateMapLayers(e=!1){var f;if(!this.map||!this.markersLayer||!this.trailsLayer||!this.territoryLayer)return;this.markersLayer.clearLayers(),this.trailsLayer.clearLayers(),this.territoryLayer.clearLayers(),this.markerMap.clear();const o=this.getFilteredEvents(),n=this.getGeoEvents(),a=g.currentLocale==="ko",l=((f=g.currentPet)==null?void 0:f.name)||(a?"우리 댕댕이":"Pet");if(n.length>=3){const m=n.map(x=>[x.latitude,x.longitude]),y=jl(m);if(y.length>=3){const x=X.polygon(y,{color:"#17140F",weight:2.5,dashArray:"6, 8",fillColor:"#1FC99B",fillOpacity:.16});x.bindPopup(`
          <div style="font-family: 'Bricolage Grotesque', sans-serif; font-size: 13px; font-weight: 800; color: #17140F; text-align: center; padding: 4px 6px;">
            🐾 <strong>${l}</strong>'s ${a?"영역":"Territory"}
            <div style="font-size: 10.5px; color: #6A6152; font-weight: 600; margin-top: 2px;">
              ${n.length} ${a?"개의 기록 지점":"tagged spots"}
            </div>
          </div>
        `),this.territoryLayer.addLayer(x)}}const d=[...n].sort((m,y)=>new Date(m.timestamp).getTime()-new Date(y.timestamp).getTime()).map(m=>[m.latitude,m.longitude]);if(d.length>=2){const m=X.polyline(d,{color:"#17140F",weight:5.5,opacity:.85,lineCap:"round",lineJoin:"round"}),y=X.polyline(d,{color:"#FF5A3C",weight:3,dashArray:"5, 6",opacity:1,lineCap:"round"});this.trailsLayer.addLayer(m),this.trailsLayer.addLayer(y)}const p=X.latLngBounds([]);o.forEach(m=>{var I;const y=m.latitude,x=m.longitude;p.extend([y,x]);const _=m.eventType==="poop"?"💩":m.eventType==="pee"?"💧":m.eventType==="walk"?"🐾":"📍",P=`
        <div style="
          position: relative;
          transform: translate(-50%, -50%);
          cursor: pointer;
        ">
          <div style="
            background: ${m.eventType==="poop"?"#FFCE2E":m.eventType==="pee"?"#BFD0FF":m.eventType==="walk"?"#FF5A3C":"#1FC99B"};
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
      `,$=X.divIcon({className:"dooty-map-marker-icon",html:P,iconSize:[0,0]}),N=X.marker([y,x],{icon:$}),R=((I=m.metadata)==null?void 0:I.locationName)||(m.notes?_o(m.notes,m.eventType,a):`${y.toFixed(4)}, ${x.toFixed(4)}`),Z=new Date(m.timestamp).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),j=new Date(m.timestamp).toLocaleDateString(),rt=`
        <div style="padding: 4px 6px; min-width: 140px; font-family: 'Nunito', sans-serif;">
          <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px;">
            <span style="font-size: 18px;">${_}</span>
            <div>
              <div style="font-family: 'Bricolage Grotesque', sans-serif; font-weight: 800; font-size: 14px; color: #17140F;">
                ${m.eventType.toUpperCase()}
              </div>
              <div style="font-size: 10px; font-weight: 700; color: #6A6152;">
                ${j} · ${Z}
              </div>
            </div>
          </div>
          <div style="font-size: 12px; font-weight: 800; color: #17140F; margin-bottom: 2px;">
            ${R}
          </div>
          <div style="font-size: 10.5px; color: #9A9080; font-weight: 600;">
            ${y.toFixed(5)}, ${x.toFixed(5)} · ${m.loggedByName||"Owner"}
          </div>
        </div>
      `;N.bindPopup(rt),N.on("click",()=>{this.selectedEventId=m.id,this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:`${m.eventType.toUpperCase()} · ${R}`,sub:`${y.toFixed(4)}, ${x.toFixed(4)} · ${m.loggedByName}`}}))}),this.markersLayer.addLayer(N),this.markerMap.set(m.id,N)}),e&&p.isValid()&&this.map.fitBounds(p,{padding:[40,40],maxZoom:17})}handleLocateMe(){if(!navigator.geolocation||!this.map){alert("Geolocation is not supported by your browser");return}this.isLocating=!0,navigator.geolocation.getCurrentPosition(e=>{if(this.isLocating=!1,!this.map)return;const o=e.coords.latitude,n=e.coords.longitude,a=e.coords.accuracy;this.userMarker&&this.map.removeLayer(this.userMarker),this.userAccuracyCircle&&this.map.removeLayer(this.userAccuracyCircle),this.userAccuracyCircle=X.circle([o,n],{radius:Math.min(a,200),color:"#2B5BE8",weight:1.5,fillColor:"#2B5BE8",fillOpacity:.12}).addTo(this.map),this.userMarker=X.circleMarker([o,n],{radius:8,color:"#FFF",weight:2.5,fillColor:"#2B5BE8",fillOpacity:1}).addTo(this.map),this.map.flyTo([o,n],16,{duration:1.2})},e=>{this.isLocating=!1,console.warn("Geolocation failed:",e)},{enableHighAccuracy:!0,timeout:8e3})}handleFitAll(){if(!this.map)return;const e=this.getGeoEvents();if(e.length===0)return;const o=X.latLngBounds(e.map(n=>[n.latitude,n.longitude]));this.map.fitBounds(o,{padding:[40,40],maxZoom:17})}handleSpotClick(e){if(this.selectedEventId=e.id,!this.map||e.latitude===void 0||e.longitude===void 0)return;this.map.flyTo([e.latitude,e.longitude],17,{duration:1});const o=this.markerMap.get(e.id);o&&setTimeout(()=>o.openPopup(),400)}render(){const e=g.currentLocale==="ko",o=this.getGeoEvents(),n=this.getFilteredEvents(),a=o.filter(p=>p.eventType==="poop").length,l=o.filter(p=>p.eventType==="pee").length,d=o.filter(p=>p.eventType==="walk").length;return b`
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
              ${e?"전체":"All"} (${o.length})
            </button>
            <button
              class="filter-btn ${this.activeFilter==="poop"?"active":""}"
              @click=${()=>this.activeFilter="poop"}
            >
              💩 ${e?"응가":"Poop"} (${a})
            </button>
            <button
              class="filter-btn ${this.activeFilter==="pee"?"active":""}"
              @click=${()=>this.activeFilter="pee"}
            >
              💧 ${e?"쉬":"Pee"} (${l})
            </button>
            <button
              class="filter-btn ${this.activeFilter==="walk"?"active":""}"
              @click=${()=>this.activeFilter="walk"}
            >
              🐾 ${e?"산책":"Walk"} (${d})
            </button>
          </div>

          <div class="map-actions-group">
            <button
              class="map-action-btn"
              title="${e?"내 위치":"Locate Me"}"
              @click=${this.handleLocateMe}
            >
              ${this.isLocating?"⏳":"🎯"}
            </button>
            <button
              class="map-action-btn"
              title="${e?"모든 스팟 보기":"Fit All"}"
              @click=${this.handleFitAll}
            >
              🗺️
            </button>
          </div>
        </div>

        <!-- Territory Badge -->
        <div class="territory-badge-card">
          <div class="territory-sub">${e?"위치 기록":"Geo-tagged logs"}</div>
          <div class="territory-val">
            ${o.length>0?`${o.length} ${e?"개 지점":"spots"}`:e?"기록 없음":"0 spots"}
          </div>
        </div>
      </div>

      <!-- Favourite & Recent spots list -->
      <div class="spots-section">
        <div class="spots-header-row">
          <div class="spots-title">
            ${e?"최근 위치 기록":"Recent tagged locations"}
          </div>
          <div class="spots-count-badge">${n.length} ${e?"개":"items"}</div>
        </div>

        <div class="spots-list">
          ${n.length>0?n.slice(0,10).map((p,f)=>{var x,_,F;const m=this.selectedEventId===p.id,y=((x=p.metadata)==null?void 0:x.locationName)||(p.notes?_o(p.notes,p.eventType,e):`${p.eventType.toUpperCase()} at GPS spot`);return b`
                  <div
                    class="spot-card ${m?"selected":""}"
                    @click=${()=>this.handleSpotClick(p)}
                  >
                    <div
                      class="spot-rank"
                      style="background: ${p.eventType==="poop"?"#FFCE2E":p.eventType==="pee"?"#BFD0FF":"#FF5A3C"};"
                    >
                      ${p.eventType==="poop"?"💩":p.eventType==="pee"?"💧":"🐾"}
                    </div>
                    <div style="flex: 1; min-width: 0;">
                      <div class="spot-name">${y}</div>
                      <div class="spot-note">
                        ${new Date(p.timestamp).toLocaleDateString()} ·
                        ${(_=p.latitude)==null?void 0:_.toFixed(4)}, ${(F=p.longitude)==null?void 0:F.toFixed(4)} ·
                        ${p.loggedByName||"Owner"}
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
                    ${e?"위치 태그가 아직 없습니다":"No GPS logs yet"}
                  </div>
                  <div
                    style="font-size: 12px; color: #6A6152; margin-top: 5px; line-height: 1.45;"
                  >
                    ${e?"기록할 때 위치 카드를 탭하여 GPS 좌표나 장소를 추가하면 실시간 지도에 배변 및 산책 스팟과 영역이 표시됩니다.":"When logging an entry, tap the Location card to attach GPS coordinates or spots to map your walks and potty territory!"}
                  </div>
                </div>
              `}
        </div>
      </div>
    `}},ai.styles=At`
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
  `,ai);Lo([E()],Ui.prototype,"activeFilter",void 0);Lo([E()],Ui.prototype,"isLocating",void 0);Lo([E()],Ui.prototype,"selectedEventId",void 0);Ui=Lo([Mt("dooty-map")],Ui);var Tn=function(h,e,o,n){var a=arguments.length,l=a<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,o):n,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,e,o,n);else for(var p=h.length-1;p>=0;p--)(d=h[p])&&(l=(a<3?d(l):a>3?d(e,o,l):d(e,o))||l);return a>3&&l&&Object.defineProperty(e,o,l),l},ri;let Fo=(ri=class extends Ft{constructor(){super(...arguments),this.medDone={0:!0,1:!1,2:!1},this.uncheckState={}}connectedCallback(){super.connectedCallback(),this.unsubscribe=g.subscribe(()=>this.requestUpdate())}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.unsubscribe)==null||e.call(this)}toggleMedChecked(e){this.uncheckState={...this.uncheckState,[e]:!this.uncheckState[e]}}renderWeightChart(e){const o=(g.events||[]).filter(R=>{var Z;return R.eventType==="weight"&&((Z=R.metadata)==null?void 0:Z.weightKg)}).sort((R,Z)=>new Date(R.timestamp).getTime()-new Date(Z.timestamp).getTime());if(o.length===0)return b`
        <div style="padding: 16px 0; text-align: center;">
          <div style="font-size: 28px; margin-bottom: 6px;">⚖️</div>
          <div style="font-size: 14px; font-weight: 800; color: #17140F;">
            ${e?"등록된 체중 기록이 없습니다":"No weigh-ins recorded yet"}
          </div>
          <div style="font-size: 12px; font-weight: 600; color: #6A6152; margin-top: 4px; line-height: 1.4;">
            ${e?"하단 + 버튼을 눌러 첫 몸무게를 기록해보세요.":"Tap the orange + button below to log your pet’s weight."}
          </div>
        </div>
      `;const n=o.map(R=>{var I;const Z=new Date(R.timestamp),j=Z.toLocaleDateString([],{month:"short"}),rt=Z.getFullYear().toString().slice(-2);return{weight:Number(((I=R.metadata)==null?void 0:I.weightKg)||parseFloat(R.notes||"0")||0),dateLabel:`${j} '${rt}`}}),a=n.map(R=>R.weight),l=Math.min(...a),p=Math.max(...a)-l||1,f=320,m=110,y=22,_=m-y-24,F=n.map((R,Z)=>{const j=n.length===1?f/2:16+Z/(n.length-1)*(f-32),rt=n.length===1?y+_/2:y+_-(R.weight-l)/p*_;return{x:j,y:rt,...R}}),P=F.map((R,Z)=>`${Z===0?"M":"L"} ${R.x.toFixed(1)} ${R.y.toFixed(1)}`).join(" "),$=F[F.length-1],N=$.weight-F[0].weight;return b`
      <div class="weight-stat-row">
        <div>
          <span class="weight-current-val">${$.weight.toFixed(1)} kg</span>
          ${F.length>1?b`
                <span style="font-size: 11px; font-weight: 800; color: ${N>=0?"#1FC99B":"#FF5A3C"}; margin-left: 6px;">
                  ${N>=0?"+":""}${N.toFixed(1)} kg
                </span>
              `:null}
        </div>
        <div class="weight-current-date">
          ${e?`최근 측정: ${$.dateLabel}`:`Latest: ${$.dateLabel}`}
        </div>
      </div>

      <div style="height: 110px; width: 100%; position: relative;">
        <svg viewBox="0 0 ${f} ${m}" style="width: 100%; height: 100%; overflow: visible;">
          <!-- Grid lines -->
          <line x1="12" y1="${y+_}" x2="${f-12}" y2="${y+_}" stroke="#E8DFCE" stroke-width="1.5" stroke-dasharray="4,4" />
          <line x1="12" y1="${y}" x2="${f-12}" y2="${y}" stroke="#E8DFCE" stroke-width="1.5" stroke-dasharray="4,4" />

          <!-- Path -->
          ${F.length>1?b`<path d="${P}" fill="none" stroke="#17140F" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round" />`:null}

          <!-- Data Points with Actual Weights -->
          ${F.map((R,Z)=>{const j=Z===F.length-1;return b`
              <circle
                cx="${R.x}"
                cy="${R.y}"
                r="${j?6:4.5}"
                fill="${j?"#FF5A3C":"#FFCE2E"}"
                stroke="#17140F"
                stroke-width="2.5"
              />
              <rect
                x="${R.x-17}"
                y="${R.y-19}"
                width="34"
                height="14"
                rx="4"
                fill="#17140F"
              />
              <text
                x="${R.x}"
                y="${R.y-9}"
                font-size="8.5"
                font-weight="800"
                font-family="sans-serif"
                fill="#FFFFFF"
                text-anchor="middle"
              >
                ${R.weight.toFixed(1)}k
              </text>
            `})}
        </svg>
      </div>

      <div style="display: flex; justify-content: space-between; margin-top: 6px; font-size: 9.5px; font-weight: 800; color: #8A7F68; letter-spacing: 0.5px;">
        ${F.map(R=>b`<span>${R.dateLabel}</span>`)}
      </div>
    `}render(){var I,S,ct;const e=g.currentLocale==="ko",o=g.currentPet,n=(o==null?void 0:o.name)||(e?"반려견":"My Pet");let a="";if(o!=null&&o.birthday){const A=new Date(o.birthday),O=new Date;if(!isNaN(A.getTime())){const mt=(O.getFullYear()-A.getFullYear())*12+(O.getMonth()-A.getMonth());if(mt>=12){const Y=Math.floor(mt/12);a=e?`${Y}살`:`${Y} yr${Y>1?"s":""}`}else mt>0?a=e?`${mt}개월`:`${mt} mo${mt>1?"s":""}`:a=e?"신생":"puppy"}}a||(a=e?"5살":"5 yrs");const l=(g.events||[]).filter(A=>{var O;return A.eventType==="weight"&&(((O=A.metadata)==null?void 0:O.weightKg)||A.notes)}).sort((A,O)=>new Date(O.timestamp).getTime()-new Date(A.timestamp).getTime());let d=14.2;if(l.length>0){const A=l.find(O=>{var Y;return Number(((Y=O.metadata)==null?void 0:Y.weightKg)||parseFloat(O.notes||"0")||0)>0});A&&(d=Number(((I=A.metadata)==null?void 0:I.weightKg)||parseFloat(A.notes||"0")||14.2))}const p=e?`${d.toFixed(1)}kg`:`${d.toFixed(1)} kg`,m=`${(o==null?void 0:o.breed)||(e?"비글 믹스":"Beagle mix")} · ${a} · ${p}`,y=new Date;y.setMonth(y.getMonth()-6);const x=(g.events||[]).filter(A=>A.eventType!=="medicine"?!1:new Date(A.timestamp)>=y).sort((A,O)=>new Date(O.timestamp).getTime()-new Date(A.timestamp).getTime()),_=[],F=new Set;for(const A of x){const O=(((S=A.metadata)==null?void 0:S.medication)||A.notes||"").trim().toLowerCase(),mt=Math.floor(new Date(A.timestamp).getTime()/(600*1e3)),Y=`${O}_${mt}`;F.has(Y)||(F.add(Y),_.push(A))}const P=[{id:"def-med-1",title:"Apoquel",sub:`16 mg with food · ${e?"기록자":"Logged by"} Sam`,dateStr:"24 Aug 2026, 8:05 am"},{id:"def-med-2",title:"Joint chew",sub:`1 chew, evening · ${e?"기록자":"Logged by"} Sam`,dateStr:"24 Aug 2026, 6:15 pm"},{id:"def-med-3",title:"Flea & tick prevention",sub:`Topical treatment · ${e?"기록자":"Logged by"} Sam`,dateStr:"18 Aug 2026, 10:00 am"}],$=_.length>0?_.map(A=>{var G,dt;const O=new Date(A.timestamp),mt=`${O.toLocaleDateString([],{day:"numeric",month:"short",year:"numeric"})}, ${O.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}).toLowerCase()}`,Y=((G=A.metadata)==null?void 0:G.medication)||A.notes||(e?"약/영양제":"Medicine"),z=[];(dt=A.metadata)!=null&&dt.dosage&&z.push(A.metadata.dosage),A.notes&&A.notes.trim().toLowerCase()!==Y.trim().toLowerCase()&&z.push(A.notes.trim()),A.loggedByName&&z.push(`${e?"기록자":"Logged by"} ${A.loggedByName}`);const lt=z.join(" · ");return{id:A.id,title:Y,sub:lt,dateStr:mt}}):P,N=(g.events||[]).filter(A=>A.eventType==="vet").sort((A,O)=>new Date(O.timestamp).getTime()-new Date(A.timestamp).getTime()),R=[{date:"12 Jun 2024",title:"Annual check-up",note:"Weight up 0.4 kg. Teeth good. Apoquel renewed."},{date:"03 Aug 2025",title:"Loose stool consult",note:"Likely new treat brand. Bland diet 5 days."},{date:"19 Aug 2026",title:"Follow-up call",note:"Resolved. Back to normal food."}],Z=N.length>0?N.map(A=>({date:new Date(A.timestamp).toLocaleDateString([],{day:"numeric",month:"short",year:"numeric"}),title:A.notes||(e?"정기 진료":"Vet Consultation"),note:`${e?"기록자":"Logged by"}: ${A.loggedByName}`})):R,j=o==null?void 0:o.avatarUrl,rt=(((ct=g.currentUser)==null?void 0:ct.displayName)||"S").charAt(0).toUpperCase();return b`
      <!-- Top Navigation Bar -->
      <div class="top-bar-row">
        <div class="back-btn" @click=${()=>g.setActiveTab("today")}>
          <span>‹</span>
          <span>${e?"오늘":"Today"}</span>
        </div>
        <div style="flex: 1;"></div>
        <div class="pet-switch-pill" @click=${()=>g.openPetSwitcher()}>
          <div class="pet-dot-avatar">${n.charAt(0).toUpperCase()}</div>
          <span style="font-size: 12.5px; font-weight: 800; color: #17140F;">${n}</span>
          ${g.pets.length>1?b`<span style="font-size: 9px; color: #17140F; margin-left: 2px;">▼</span>`:null}
        </div>
        <div class="user-gear-btn" @click=${()=>g.setActiveTab("settings")}>
          ${rt}
        </div>
      </div>

      <!-- Pet Hero Card -->
      <div class="dog-hero-card">

        <div
          class="dog-avatar-wrapper"
          @click=${()=>g.openPhotoModal({target:"pet",targetId:o==null?void 0:o.id,currentAvatar:j,title:e?`${n} 사진 변경`:`Change ${n}'s Photo`})}
        >
          <div class="dog-pic-avatar">
            ${j?b`<img src="${j}" class="dog-pic-img" alt="${n}" />`:b`<div>${e?`반려견
사진`:`pet
pic`}</div>`}
          </div>
          <div class="avatar-edit-badge">📷</div>
        </div>
        <div style="flex: 1; min-width: 0;">
          <div class="dog-name">${n}</div>
          <div class="dog-details">
            ${m}
          </div>
          <div class="good-badge">${e?"모두 양호":"ALL GOOD"}</div>
        </div>
      </div>

      <!-- Weight Card (With Actual Weights & Dates) -->
      <div class="card-block">
        <div class="card-header">
          <div class="card-title">${e?"체중 변화":"Weight"}</div>
          <div class="card-badge">${e?"최근 12개월":"12 MONTHS"}</div>
        </div>
        ${this.renderWeightChart(e)}
      </div>

      <!-- Medications Log (History with Checked Status by Default) -->
      <div class="card-block">
        <div class="card-header">
          <div class="card-title">${e?"투약 및 영양제 기록":"Pills & Supplements"}</div>
          <div class="card-badge">${$.length} ${e?"건":"LOGGED"}</div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 11px;">
          ${$.map(A=>{const O=!this.uncheckState[A.id];return b`
              <div class="med-row">
                <div
                  class="med-check"
                  style="background: ${O?"#1FC99B":"#FFF"};"
                  @click=${()=>this.toggleMedChecked(A.id)}
                  title="${O?"Marked as completed":"Click to check"}"
                >
                  ${O?"✓":""}
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
          <div class="card-title">${e?"병원 진료 내역":"Vet history"}</div>
          <div class="card-badge">${Z.length} ${e?"회":"VISITS"}</div>
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
        @click=${()=>this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:e?"요약 준비 완료":"Summary ready",sub:e?"기록 데이터가 준비되었습니다.":"Health logs ready."}}))}
      >
        ${e?"건강 요약 내보내기":"Export health summary"}
      </div>
    `}},ri.styles=At`
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
  `,ri);Tn([E()],Fo.prototype,"medDone",void 0);Tn([E()],Fo.prototype,"uncheckState",void 0);Fo=Tn([Mt("dooty-dog")],Fo);var Hl=function(h,e,o,n){var a=arguments.length,l=a<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,o):n,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,e,o,n);else for(var p=h.length-1;p>=0;p--)(d=h[p])&&(l=(a<3?d(l):a>3?d(e,o,l):d(e,o))||l);return a>3&&l&&Object.defineProperty(e,o,l),l},li;let Vs=(li=class extends Ft{constructor(){super(...arguments),this.distNames=["Pellets","Lumpy","Cracked","Textbook","Soft blobs","Mushy","Liquid"],this.distCol=["#E3D8BE","#E3D8BE","#FFE9A8","#1FC99B","#FFCE2E","#FF9A3C","#FF5A3C"]}render(){const e=g.currentLocale==="ko",o=g.events||[],n=o.length,a=new Date(Date.now()-336*60*60*1e3),l=o.filter(_=>_.eventType==="poop"&&new Date(_.timestamp)>=a),d=[0,0,0,0,0,0,0];l.forEach(_=>{const F=(_.notes||"").match(/Type\s*([1-7])/i)||(_.notes||"").match(/([1-7])/);if(F){const P=parseInt(F[1],10);P>=1&&P<=7&&d[P-1]++}else d[3]++});const p=d.reduce((_,F)=>_+F,0),f=d.map(_=>p>0?Math.round(_/p*100):0),m=d[3],y=p>0?Math.round(m/p*100):n>0?100:0,x=o.filter(_=>(_.eventType==="vomit"||(_.notes||"").toLowerCase().includes("loose")||(_.notes||"").toLowerCase().includes("diarrhea"))&&new Date(_.timestamp)>=a);return b`
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
          <div class="score-num">${n>0?y:"-"}</div>
          <div class="score-trend">${n>0?e?"14일 분석":"14-day rolling":e?"기록 대기 중":"No logs yet"}</div>
        </div>
        <div style="font-size: 12.5px; font-weight: 600; color: #6A6152;">
          ${p>0?e?`최근 14일 동안 ${p}건의 배변이 분석되었습니다.`:`${p} potty logs analyzed over the last 14 days.`:e?"배변을 기록하면 이상적인 형태(4단계) 비율이 산출됩니다.":"Log potty events to calculate consistency quality rating."}
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
          ${this.distNames.map((_,F)=>{const P=f[F],$=this.distCol[F];return b`
              <div class="spread-row">
                <div class="spread-num" style="background: ${$};">${F+1}</div>
                <div style="width: 66px; font-size: 11.5px; font-weight: 700; color: #6A6152; flex: none;">
                  ${_}
                </div>
                <div class="spread-track">
                  <div style="height: 100%; background: ${$}; width: ${Math.max(P>0?4:0,P)}%;"></div>
                </div>
                <div style="width: 32px; text-align: right; font-size: 11px; font-weight: 800; color: #6A6152; flex: none;">
                  ${P}%
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
                  ${e?`주의 감지: 최근 ${x.length}건 이상 반응`:`Flagged: ${x.length} symptom events`}
                </div>
              </div>
              <div style="font-size: 12.5px; font-weight: 600; color: #7A3325; line-height: 1.5; margin-top: 8px;">
                ${x.map(_=>`${new Date(_.timestamp).toLocaleDateString()}: ${_.notes||_.eventType}`).join(" · ")}
              </div>
              <div
                class="flag-send-btn"
                @click=${()=>this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:e?"기록 준비 완료":"Summary ready",sub:e?"수의사 공유용 데이터가 생성되었습니다.":"Packaged for vet consultation."}}))}
              >
                ${e?"기록 수의사에게 내보내기":"Export health records for vet"}
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
                  ${e?"이상 징후 없음":"No issues detected"}
                </div>
              </div>
              <div style="font-size: 12px; font-weight: 600; color: #0A5A45; margin-top: 4px;">
                ${e?"최근 14일 동안 등록된 구토나 소화 이상 기록이 없습니다.":"No vomiting or digestive symptoms reported in the last 14 days."}
              </div>
            </div>
          `}
    `}},li.styles=At`
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
  `,li);Vs=Hl([Mt("dooty-deep")],Vs);var Ul=function(h,e,o,n){var a=arguments.length,l=a<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,o):n,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,e,o,n);else for(var p=h.length-1;p>=0;p--)(d=h[p])&&(l=(a<3?d(l):a>3?d(e,o,l):d(e,o))||l);return a>3&&l&&Object.defineProperty(e,o,l),l},di;let Js=(di=class extends Ft{render(){var F;const e=g.currentLocale==="ko",o=g.events||[],n=o.length;(F=g.currentPet)!=null&&F.id;const a=o.filter(P=>P.eventType==="poop"),l=o.filter(P=>P.eventType==="walk"),d=Array(24).fill(0);o.forEach(P=>{const $=new Date(P.timestamp);isNaN($.getTime())||d[$.getHours()]++});let p=7,f=0;d.forEach((P,$)=>{P>f&&(f=P,p=$)});const m=f>0?`${p>12?p-12:p||12}:00 ${p>=12?"pm":"am"}`:e?"기록 없음":"No data yet",y=new Set;o.forEach(P=>{const $=new Date(P.timestamp);isNaN($.getTime())||y.add(`${$.getFullYear()}-${$.getMonth()+1}-${$.getDate()}`)});const x=y.size,_=[{k:e?"총 배출량":"Total output",v:e?`${a.length}회`:`${a.length} poops`,sub:e?`총 ${n}건의 이벤트가 등록되었습니다.`:`${n} total logged events recorded so far.`,bg:"#FFCE2E",fg:"#17140F",label:"#7A5C00",shadow:"#FF5A3C",rot:"-1.2deg"},{k:e?"황금 시간대":"Your golden hour",v:m,sub:e?"가장 많은 활동이 기록된 주요 시간대입니다.":"Most frequent hour of daily activity.",bg:"#FFFBF2",fg:"#17140F",label:"#6A6152",shadow:"#2B5BE8",rot:"0.9deg"},{k:e?"산책 세션":"Walk sessions",v:e?`${l.length}회`:`${l.length} walks`,sub:e?"반려견과 함께한 야외 산책 기록입니다.":"Outdoor exercise recorded with your pet.",bg:"#1FC99B",fg:"#17140F",label:"#0A5A45",shadow:"#FFCE2E",rot:"-0.7deg"},{k:e?"돌봄 기록 일수":"Days active",v:e?`${x}일`:`${x} days`,sub:e?"반려견의 건강한 일상을 함께 기록한 날들입니다.":"Days dedicated to tracking your pet’s wellbeing.",bg:"#FF5A3C",fg:"#FFF",label:"#FFE3DC",shadow:"#FFCE2E",rot:"1.1deg"}];return b`
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
        ${_.map(P=>b`
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
        ${e?"카드 공유하기":"Share the card"}
      </div>
    `}},di.styles=At`
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
  `,di);Js=Ul([Mt("dooty-wrapped")],Js);var Zl=function(h,e,o,n){var a=arguments.length,l=a<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,o):n,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,e,o,n);else for(var p=h.length-1;p>=0;p--)(d=h[p])&&(l=(a<3?d(l):a>3?d(e,o,l):d(e,o))||l);return a>3&&l&&Object.defineProperty(e,o,l),l},ci;let Ys=(ci=class extends Ft{connectedCallback(){super.connectedCallback(),this.unsubscribe=g.subscribe(()=>this.requestUpdate())}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.unsubscribe)==null||e.call(this)}setLanguage(e){g.setLocale(e),e==="ko"?document.body.classList.add("lang-ko"):document.body.classList.remove("lang-ko")}handleExportCsv(){g.t.settings,g.exportEventsCsv(),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:g.currentLocale==="ko"?"CSV 내보내기 완료":"CSV Export Complete",sub:g.currentLocale==="ko"?"모든 기록이 다운로드되었습니다.":"All event logs saved to your device."}}))}handleExportJson(){g.exportFullBackupJson(),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:g.currentLocale==="ko"?"전체 백업 다운로드 완료":"Full Backup Downloaded",sub:g.currentLocale==="ko"?"반려동물, 기록, 산책 및 투약 일정이 JSON으로 저장되었습니다.":"Complete JSON backup saved to your device."}}))}handleSignOut(){g.signOut(),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:g.currentLocale==="ko"?"로그아웃되었습니다":"Signed out",sub:g.currentLocale==="ko"?"다음에 또 만나요!":"See you on the next walk!"}}))}render(){var m,y;const e=g.currentLocale==="ko",o=g.t.settings,n=g.currentUser,a=g.currentHousehold,l=(a==null?void 0:a.members)||[{id:"1",displayName:(n==null?void 0:n.displayName)||"Sam (you)",role:"owner",avatarUrl:g.userAvatar},{id:"2",displayName:"Priya",role:"member",avatarUrl:""},{id:"3",displayName:"Dan the walker",role:"member",avatarUrl:""}],d=((m=g.pets)==null?void 0:m.length)>0?g.pets:g.currentPet?[g.currentPet]:[{id:"p1",name:"Nacho",breed:"Beagle mix · 5 yrs · 14.2 kg",species:"dog",householdId:(a==null?void 0:a.id)||"1",avatarUrl:"",birthday:"",createdAt:new Date().toISOString()}],p=((y=g.events)==null?void 0:y.length)||1204,f=((n==null?void 0:n.displayName)||"Sam").split(" ").map(x=>x[0]).join("").toUpperCase().slice(0,2);return b`
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
              ${(n==null?void 0:n.email)||"sam@jellyfish.dog"}
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
              class="lang-btn ${e?"":"active"}"
              @click=${()=>this.setLanguage("en")}
            >
              <div class="lang-dot"></div>
              ${o.english}
            </div>
            <div
              class="lang-btn ${e?"active":""}"
              @click=${()=>this.setLanguage("ko")}
            >
              <div class="lang-dot"></div>
              ${o.korean}
            </div>
          </div>
        </div>

        <!-- Analytics Timeframe Preference -->
        <div>
          <div class="section-label">${e?"기본 분석 기간":"Default Analytics Range"}</div>
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
              ${o.household}
            </div>
            <div style="font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif); font-weight: 800; font-size: 20px; color: #17140F; letter-spacing: -0.6px; line-height: 1.15; margin-top: 1px;">
              ${(a==null?void 0:a.name)||"The Nacho Household"}
            </div>
            <div style="font-size: 11.5px; font-weight: 700; color: #7A5C00; margin-top: 1px;">
              ${o.householdCount(l.length,d.length)}
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
            ${l.map((x,_)=>{const F=["#FFCE2E","#1FC99B","#BFD0FF","#FF9A3C"],P=(x.displayName||"Member")[0].toUpperCase(),$=Math.round(_===0?p*.75:p*.2);return b`
                <div class="list-row">
                  <div
                    class="member-avatar"
                    style="background: ${F[_%F.length]};"
                    @click=${()=>g.openPhotoModal({target:"member",targetId:x.id,currentAvatar:x.avatarUrl,title:`Pick Photo for ${x.displayName}`})}
                  >
                    ${x.avatarUrl?b`<img src="${x.avatarUrl}" alt="Avatar" />`:b`${P}`}
                  </div>
                  <div style="flex: 1; min-width: 0;">
                    <div style="font-size: 13.5px; font-weight: 800; color: #17140F;">
                      ${x.displayName}
                    </div>
                    <div style="font-size: 11.5px; font-weight: 600; color: #6A6152;">
                      ${x.role==="owner"?e?"소유자":"Owner":e?"가족 구성원":"Household"}
                    </div>
                  </div>
                  <div style="font-size: 11.5px; font-weight: 800; color: #9A9080; flex: none;">
                    ${$} ${o.logsUnit}
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
            ${d.map(x=>b`
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
                    ${(()=>{var R;if(x.breed&&x.breed.includes("·"))return x.breed;let _="";if(x.birthday){const Z=new Date(x.birthday),j=new Date;if(!isNaN(Z.getTime())){const rt=(j.getFullYear()-Z.getFullYear())*12+(j.getMonth()-Z.getMonth());if(rt>=12){const I=Math.floor(rt/12);_=e?`${I}살`:`${I} yr${I>1?"s":""}`}else rt>0&&(_=e?`${rt}개월`:`${rt} mo${rt>1?"s":""}`)}}_||(_=e?"5살":"5 yrs");const F=x.breed||(e?"비글 믹스":"Beagle mix"),P=(g.events||[]).filter(Z=>{var j;return Z.eventType==="weight"&&(((j=Z.metadata)==null?void 0:j.weightKg)||Z.notes)}).sort((Z,j)=>new Date(j.timestamp).getTime()-new Date(Z.timestamp).getTime()),$=P.length>0?Number(((R=P[0].metadata)==null?void 0:R.weightKg)||parseFloat(P[0].notes||"0")||14.2):14.2,N=e?`${$.toFixed(1)}kg`:`${$.toFixed(1)} kg`;return`${F} · ${_} · ${N}`})()}
                  </div>
                </div>
                <div style="font-size: 11.5px; font-weight: 800; color: #9A9080; flex: none;">
                  ${p} ${o.logsUnit}
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

            <div class="data-tile" @click=${()=>this.handleExportJson()}>
              <div class="tile-icon" style="background: #FFD8A8;">💾</div>
              <div style="flex: 1; min-width: 0;">
                <div style="font-size: 13.5px; font-weight: 800; color: #17140F;">
                  ${e?"전체 데이터 백업 (JSON)":"Full Backup (JSON)"}
                </div>
                <div style="font-size: 11.5px; font-weight: 600; color: #6A6152; margin-top: 1px; line-height: 1.35;">
                  ${e?"반려동물, 기록, 산책 GPS 및 투약 일정 전체를 백업합니다.":"Download complete backup of pets, logs, walks & schedules."}
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
    `}},ci.styles=At`
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
  `,ci);Ys=Zl([Mt("dooty-settings")],Ys);var So=function(h,e,o,n){var a=arguments.length,l=a<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,o):n,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,e,o,n);else for(var p=h.length-1;p>=0;p--)(d=h[p])&&(l=(a<3?d(l):a>3?d(e,o,l):d(e,o))||l);return a>3&&l&&Object.defineProperty(e,o,l),l},hi;let Zi=(hi=class extends Ft{constructor(){super(...arguments),this.selectedRole="Full member",this.currentCode="K7M4Q9",this.isGenerating=!1}connectedCallback(){super.connectedCallback(),this.unsubscribe=g.subscribe(()=>this.requestUpdate()),this.generateNewCode()}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.unsubscribe)==null||e.call(this)}async generateNewCode(){this.isGenerating=!0;try{const e=await g.createInvite(this.selectedRole);e&&(this.currentCode=e)}finally{this.isGenerating=!1}}handleCopy(){const e=g.t.invite;navigator.clipboard&&navigator.clipboard.writeText(this.currentCode),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:e.codeCopied,sub:e.codeCopiedSub(this.currentCode)}}))}handleShare(){var o;g.t.invite;const e=`Join my household "${((o=g.currentHousehold)==null?void 0:o.name)||"Dooty"}" with invite code: ${this.currentCode}`;navigator.share?navigator.share({title:"Dooty Invite",text:e,url:window.location.origin}).catch(()=>this.handleCopy()):this.handleCopy()}async handleRevoke(e){const o=g.t.invite;await g.revokeInvite(e),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:o.inviteRevoked,sub:o.inviteRevokedSub(e)}}))}render(){var l;const e=g.t.invite,o=((l=g.currentHousehold)==null?void 0:l.name)||"Household",n=(this.currentCode+"      ").slice(0,6).split(""),a=g.pendingInvites||[];return b`
      <div class="invite-container">
        <div class="back-btn" @click=${()=>g.setActiveTab("settings")}>
          ‹ ${e.back}
        </div>

        <div>
          <div class="section-label">${e.title}</div>
          <div class="headline">${o}</div>
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
            ${n.map(d=>b`
              <div class="code-char-box">${d.trim()}</div>
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
            ${a.length===0?b`
                  <div style="padding: 14px 0; font-size: 13px; font-weight: 700; color: #9A9080; text-align: center;">
                    No pending invites
                  </div>
                `:a.map(d=>b`
                  <div class="pending-row">
                    <div class="pending-code-icon">${d.code}</div>
                    <div style="flex: 1; min-width: 0;">
                      <div style="font-size: 13.5px; font-weight: 800; color: #17140F;">${d.role}</div>
                      <div style="font-size: 11.5px; font-weight: 600; color: #6A6152;">${d.when}</div>
                    </div>
                    <div class="pending-revoke" @click=${()=>this.handleRevoke(d.code)}>
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
    `}},hi.styles=At`
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
  `,hi);So([E()],Zi.prototype,"selectedRole",void 0);So([E()],Zi.prototype,"currentCode",void 0);So([E()],Zi.prototype,"isGenerating",void 0);Zi=So([Mt("dooty-invite")],Zi);var Re=function(h,e,o,n){var a=arguments.length,l=a<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,o):n,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,e,o,n);else for(var p=h.length-1;p>=0;p--)(d=h[p])&&(l=(a<3?d(l):a>3?d(e,o,l):d(e,o))||l);return a>3&&l&&Object.defineProperty(e,o,l),l},pi;let Pe=(pi=class extends Ft{constructor(){super(...arguments),this.isImporting=!1,this.importProgress="",this.errorMessage="",this.successMessage="",this.isDragOver=!1}async processFile(e){this.errorMessage="",this.successMessage="";try{const o=await e.text(),n=cl(o,e.name);this.parsedResult=n}catch(o){this.errorMessage=o.message||"Failed to read and parse import file.",this.parsedResult=void 0}}async handleFileSelect(e){var a;const n=(a=e.target.files)==null?void 0:a[0];n&&await this.processFile(n)}handleDragOver(e){e.preventDefault(),this.isDragOver=!0}handleDragLeave(e){e.preventDefault(),this.isDragOver=!1}async handleDrop(e){var n,a;e.preventDefault(),this.isDragOver=!1;const o=(a=(n=e.dataTransfer)==null?void 0:n.files)==null?void 0:a[0];o&&await this.processFile(o)}async handleImport(){var e,o;if(!(!this.parsedResult||this.isImporting)){this.isImporting=!0,this.errorMessage="";try{const n=(e=g.currentHousehold)==null?void 0:e.id,a=(o=g.currentPet)==null?void 0:o.id;if(!n||!a)throw new Error("Please select or configure a household and pet before importing.");this.importProgress=`Converting ${this.parsedResult.summary.totalCount} events...`;const l=hl(this.parsedResult,n,a);this.importProgress=`Saving ${l.length} events to server...`;const d=await ft.importEvents(l);this.successMessage=g.t.importer.success(d.importedCount),await g.refreshEvents(),this.parsedResult=void 0}catch(n){this.errorMessage=n.message||"Import failed on server."}finally{this.isImporting=!1,this.importProgress=""}}}render(){var a;const e=g.t.importer,o=g.currentLocale==="ko",n=(a=this.parsedResult)==null?void 0:a.summary;return b`
      <div
        class="back-btn"
        @click=${()=>g.setActiveTab("settings")}
      >
        ‹ ${o?"설정":"Settings"}
      </div>
      <h2 class="page-title">${e.title}</h2>
      <p class="page-sub">${e.subtitle}</p>

      <label
        class="dropzone ${this.isDragOver?"dragover":""}"
        @dragover=${l=>this.handleDragOver(l)}
        @dragleave=${l=>this.handleDragLeave(l)}
        @drop=${l=>this.handleDrop(l)}
      >
        <div style="font-size: 42px;">📂</div>
        <div style="font-family: var(--font-heading); font-weight: 800; font-size: 16px;">
          ${e.dropText}
        </div>
        <input
          type="file"
          accept=".csv, .json, text/csv, application/json"
          style="display: none;"
          @change=${l=>this.handleFileSelect(l)}
        />
        <div class="select-btn">
          ${e.selectFile}
        </div>
      </label>

      ${this.errorMessage?b`<div class="msg-error">${this.errorMessage}</div>`:""}
      ${this.successMessage?b`<div class="msg-success">${this.successMessage}</div>`:""}

      ${n?b`
            <div class="preview-card">
              <div class="preview-header">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span>📋 ${e.dryRunTitle}</span>
                  <span class="format-badge"
                    >${n.sourceType==="csv"?"📄 CSV Report":"📦 DogNotes JSON"}</span
                  >
                </div>
                <span style="font-size: 13px; font-weight: 800; color: var(--color-coral);"
                  >${n.totalCount.toLocaleString()} items</span
                >
              </div>

              <div style="font-size: 13px; font-weight: 700;">
                🐾 ${e.targetPet}: <span style="font-weight: 900;">${n.petName}</span>
              </div>

              <div style="font-size: 12px; color: var(--color-muted); font-weight: 600;">
                📅 ${e.dateSpan}: ${n.earliestDate.split("T")[0]} →
                ${n.latestDate.split("T")[0]}
              </div>

              <div>
                <div class="section-subtitle">👤 Logged by (Mapped)</div>
                <div class="breakdown-row">
                  ${Object.entries(n.countsByUser).map(([l,d])=>b`
                      <div class="user-chip">@${l}: ${d.toLocaleString()}</div>
                    `)}
                </div>
              </div>

              <div>
                <div class="section-subtitle">🏷️ Event Breakdown</div>
                <div class="breakdown-row">
                  ${Object.entries(n.countsByType).map(([l,d])=>b`
                      <div class="breakdown-chip">${l}: ${d.toLocaleString()}</div>
                    `)}
                </div>
              </div>

              <button
                class="import-btn"
                @click=${()=>this.handleImport()}
                ?disabled=${this.isImporting}
              >
                ${this.isImporting?this.importProgress||e.importing:`🚀 ${e.confirmImport} (${n.totalCount.toLocaleString()})`}
              </button>
            </div>
          `:""}
    `}},pi.styles=At`
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
  `,pi);Re([E()],Pe.prototype,"parsedResult",void 0);Re([E()],Pe.prototype,"isImporting",void 0);Re([E()],Pe.prototype,"importProgress",void 0);Re([E()],Pe.prototype,"errorMessage",void 0);Re([E()],Pe.prototype,"successMessage",void 0);Re([E()],Pe.prototype,"isDragOver",void 0);Pe=Re([Mt("dooty-importer")],Pe);var re=function(h,e,o,n){var a=arguments.length,l=a<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,o):n,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,e,o,n);else for(var p=h.length-1;p>=0;p--)(d=h[p])&&(l=(a<3?d(l):a>3?d(e,o,l):d(e,o))||l);return a>3&&l&&Object.defineProperty(e,o,l),l},ui;let te=(ui=class extends Ft{constructor(){super(...arguments),this.open=!1,this.initialLocationName="",this.currentLocationName="",this.isLocating=!1,this.isGeocoding=!1,this.hasMovedMarker=!1,this.locationPresets=["Home / Indoor","Backyard","Park","Walk Route","Vet Clinic","Daycare"],this.locationPresetsKo=["우리집 / 실내","마당 / 배변패드","공원 / 산책로","단지 내 산책","동물병원","데이케어"]}updated(e){e.has("open")&&(this.open?(this.currentLat=this.initialLat,this.currentLng=this.initialLng,this.currentLocationName=this.initialLocationName||"",this.hasMovedMarker=!1,setTimeout(()=>{this.initOrUpdateMap()},80)):this.destroyMap())}disconnectedCallback(){super.disconnectedCallback(),this.destroyMap()}destroyMap(){this.map&&(this.map.remove(),this.map=void 0,this.marker=void 0)}initOrUpdateMap(){var p;const e=(p=this.renderRoot)==null?void 0:p.querySelector("#leaflet-map");if(!e)return;if(this.map){this.map.invalidateSize();return}const o=this.currentLat??37.5665,n=this.currentLng??126.978,a=this.currentLat&&this.currentLng?16:14;this.map=X.map(e,{zoomControl:!1,attributionControl:!1}).setView([o,n],a),X.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png",{maxZoom:19,subdomains:"abcd",updateWhenIdle:!0,updateWhenZooming:!1,keepBuffer:3}).addTo(this.map),X.control.zoom({position:"bottomright"}).addTo(this.map);const d=X.divIcon({className:"dooty-custom-leaflet-pin",html:`
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
    `,iconSize:[0,0]});this.currentLat&&this.currentLng?this.marker=X.marker([this.currentLat,this.currentLng],{icon:d,draggable:!0}).addTo(this.map):(this.marker=X.marker([o,n],{icon:d,draggable:!0}).addTo(this.map),this.fetchUserGPS(!1)),this.marker.on("dragend",f=>{const m=f.target.getLatLng();this.onPositionSelected(m.lat,m.lng)}),this.map.on("click",f=>{const{lat:m,lng:y}=f.latlng;this.marker&&this.marker.setLatLng([m,y]),this.onPositionSelected(m,y)}),setTimeout(()=>{var f;(f=this.map)==null||f.invalidateSize()},150)}onPositionSelected(e,o){this.currentLat=e,this.currentLng=o,this.hasMovedMarker=!0,this.requestUpdate(),this.geocodeTimeout&&window.clearTimeout(this.geocodeTimeout),this.geocodeTimeout=window.setTimeout(()=>{this.tryReverseGeocode(e,o)},400)}fetchUserGPS(e=!0){typeof navigator>"u"||!navigator.geolocation||(this.isLocating=!0,this.requestUpdate(),navigator.geolocation.getCurrentPosition(o=>{const n=o.coords.latitude,a=o.coords.longitude;this.isLocating=!1,this.currentLat=n,this.currentLng=a,this.map&&(this.map.flyTo([n,a],17,{animate:!0,duration:1}),this.marker&&this.marker.setLatLng([n,a])),(!this.currentLocationName||!this.hasMovedMarker)&&this.tryReverseGeocode(n,a),this.requestUpdate()},o=>{console.warn("Geolocation error in picker:",o),this.isLocating=!1,this.requestUpdate()},{enableHighAccuracy:!0,timeout:8e3}))}async tryReverseGeocode(e,o){var n,a,l,d,p,f,m,y;this.isGeocoding=!0,this.requestUpdate();try{const x=await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${e}&lon=${o}&zoom=18&addressdetails=1`,{headers:{Accept:"application/json"}});if(x.ok){const _=await x.json(),F=((n=_.address)==null?void 0:n.road)||((a=_.address)==null?void 0:a.pedestrian)||((l=_.address)==null?void 0:l.suburb)||((d=_.address)==null?void 0:d.neighbourhood),P=((p=_.address)==null?void 0:p.city)||((f=_.address)==null?void 0:f.town)||((m=_.address)==null?void 0:m.village)||((y=_.address)==null?void 0:y.county);if(F&&P)this.currentLocationName=`${F}, ${P}`;else if(F)this.currentLocationName=F;else if(_.display_name){const $=_.display_name.split(",");this.currentLocationName=$.slice(0,2).join(",").trim()}}}catch{}finally{this.isGeocoding=!1,this.requestUpdate()}}selectPreset(e){this.currentLocationName=e,this.requestUpdate()}handleSaveSpot(){if((this.currentLat===void 0||this.currentLng===void 0)&&this.map){const e=this.map.getCenter();this.currentLat=e.lat,this.currentLng=e.lng}this.dispatchEvent(new CustomEvent("spot-selected",{bubbles:!0,composed:!0,detail:{lat:this.currentLat,lng:this.currentLng,locationName:this.currentLocationName}})),this.handleClose()}handleClose(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}render(){if(!this.open)return null;const e=g.currentLocale==="ko",o=e?this.locationPresetsKo:this.locationPresets;return b`
      <!-- Inject Leaflet core CSS into Shadow DOM -->
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      />

      <div class="modal-backdrop" @click=${()=>this.handleClose()}>
        <div class="picker-window" @click=${n=>n.stopPropagation()}>
          <!-- Header -->
          <div class="picker-header">
            <div class="picker-title-group">
              <div class="picker-title">
                <span>🗺️</span>
                <span>${e?"지도에서 위치 찾기":"Find Spot on Map"}</span>
              </div>
              <div class="picker-sub">
                ${e?"지도를 탭하거나 핀을 드래그하여 정확한 위치를 지정하세요.":"Tap the map or drag the pin to pinpoint the exact location."}
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
              <span>${this.isLocating?e?"수신 중...":"Locating...":e?"내 위치":"My GPS"}</span>
            </button>

            <div class="map-hint-badge">
              ${e?"👇 지도를 탭하여 핀 이동":"👇 Tap anywhere to place pin"}
            </div>
          </div>

          <!-- Bottom Footer Details -->
          <div class="picker-footer">
            <!-- Address / Spot Name Box -->
            <div class="address-card">
              <div class="address-header-row">
                <span class="address-label">${e?"선택된 위치명":"Selected Spot"}</span>
                ${this.currentLat&&this.currentLng?b`
                      <span class="coords-tag">
                        ${this.currentLat.toFixed(4)}, ${this.currentLng.toFixed(4)}
                      </span>
                    `:null}
              </div>
              <input
                type="text"
                class="location-name-input"
                placeholder="${this.isGeocoding?e?"주소 확인 중...":"Resolving address...":e?"장소 이름을 입력하거나 칩을 선택하세요":"Enter place name or pick preset"}"
                .value=${this.currentLocationName}
                @input=${n=>this.currentLocationName=n.target.value}
              />
            </div>

            <!-- Quick Preset Chips -->
            <div class="presets-row">
              ${o.map(n=>b`
                  <div
                    class="preset-pill ${this.currentLocationName===n?"active":""}"
                    @click=${()=>this.selectPreset(n)}
                  >
                    ${n}
                  </div>
                `)}
            </div>

            <!-- Action Buttons -->
            <div class="action-buttons-row">
              <button class="btn-cancel" @click=${()=>this.handleClose()}>
                ${e?"취소":"Cancel"}
              </button>
              <button class="btn-save" @click=${()=>this.handleSaveSpot()}>
                <span>📍</span>
                <span>${e?"이 위치로 저장":"Save this Spot"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `}},ui.styles=At`
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
  `,ui);re([Vi({type:Boolean})],te.prototype,"open",void 0);re([Vi({type:Number})],te.prototype,"initialLat",void 0);re([Vi({type:Number})],te.prototype,"initialLng",void 0);re([Vi({type:String})],te.prototype,"initialLocationName",void 0);re([E()],te.prototype,"currentLat",void 0);re([E()],te.prototype,"currentLng",void 0);re([E()],te.prototype,"currentLocationName",void 0);re([E()],te.prototype,"isLocating",void 0);re([E()],te.prototype,"isGeocoding",void 0);re([E()],te.prototype,"hasMovedMarker",void 0);te=re([Mt("dooty-map-picker")],te);var it=function(h,e,o,n){var a=arguments.length,l=a<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,o):n,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,e,o,n);else for(var p=h.length-1;p>=0;p--)(d=h[p])&&(l=(a<3?d(l):a>3?d(e,o,l):d(e,o))||l);return a>3&&l&&Object.defineProperty(e,o,l),l},fi;let et=(fi=class extends Ft{constructor(){super(...arguments),this.selectedType=null,this.cons=4,this.size="M",this.mood="Zoomy",this.selectedMed="Apoquel",this.selectedMedDose="16 mg with food",this.customMedName="",this.weightKg=14.2,this.walkMin="30 min",this.walkKm="2.3 km",this.vetReason="Annual check-up",this.symptom="Itch / Scratch",this.portion="1 cup",this.photoUrl="",this.notes="",this.locationName="",this.lat=void 0,this.lng=void 0,this.isLocating=!1,this.showLocationPicker=!1,this.showMapPicker=!1,this.showTimePicker=!1,this.customTimestamp="",this.walkPetIds=[],this.weatherText="",this.isFetchingWeather=!1,this.isSaving=!1,this.startLat=void 0,this.startLng=void 0,this.startLocationName="",this.isLocatingStart=!1,this.endLat=void 0,this.endLng=void 0,this.endLocationName="",this.isLocatingEnd=!1,this.activeMapPickerTarget="single",this.wasOpen=!1,this.consNames=["hard pellets","lumpy log","cracked log","textbook — the dream","soft blobs","mushy","liquid"],this.consNamesKo=["단단한 토끼똥","울퉁불퉁한 변","약간 갈라진 변","완벽한 황금변 (최고)","무른 덩어리변","형태 없는 묽은변","설사/수분성 액체"],this.typeDefs=[{id:"poop",name:"Poop",nameKo:"응가",tag:"P",sub:"the main event",subKo:"주요 배변 활동",c:"#FFCE2E"},{id:"pee",name:"Pee",nameKo:"쉬야",tag:"U",sub:"quick mark",subKo:"배뇨 영역 표시",c:"#BFD0FF"},{id:"vomit",name:"Vomit",nameKo:"구토",tag:"V",sub:"we hope not",subKo:"소화 이상/토",c:"#FF9A3C"},{id:"medicine",name:"Medicine",nameKo:"약/영양제",tag:"M",sub:"3 on schedule",subKo:"투약 일정 관리",c:"#1FC99B"},{id:"weight",name:"Weight",nameKo:"몸무게",tag:"KG",sub:"last 14.2 kg",subKo:"체중 변화 기록",c:"#2B5BE8"},{id:"walk",name:"Walk",nameKo:"산책",tag:"W",sub:"2 already today",subKo:"야외 활동 & 코스",c:"#9EC6E8"},{id:"vet",name:"Vet visit",nameKo:"병원 진료",tag:"D",sub:"appointments",subKo:"검진 및 진료 예약",c:"#FFD15C"},{id:"symptom",name:"Symptom",nameKo:"증상 메모",tag:"S",sub:"itch, limp, mood",subKo:"가려움, 절뚝임 등",c:"#FF5A3C"}],this.medOptions=[{name:"Apoquel",dose:"16 mg with food"},{name:"Joint chew",dose:"1 chew, evening"},{name:"Flea & tick",dose:"topical, weekly"}],this.walkOptions=[{min:"15 min",minKo:"15분",km:"1.1 km"},{min:"30 min",minKo:"30분",km:"2.3 km"},{min:"45 min",minKo:"45분",km:"3.4 km"},{min:"1 hr",minKo:"1시간",km:"4.6 km"}],this.vetReasons=[{id:"Annual check-up",name:"Annual check-up",nameKo:"정기 검진"},{id:"Vaccination booster",name:"Vaccination booster",nameKo:"예방 접종"},{id:"Loose stool consult",name:"Loose stool consult",nameKo:"배변/설사 진료"},{id:"Dental scaling",name:"Dental scaling",nameKo:"치과/스케일링"},{id:"Medication renewal",name:"Medication renewal",nameKo:"처방약 재발급"},{id:"Follow-up exam",name:"Follow-up exam",nameKo:"재진/경과 관찰"}],this.symptomOptions=[{id:"Itch / Scratch",name:"Itch / Scratch",nameKo:"가려움 / 긁음"},{id:"Limping / Joint",name:"Limping / Joint",nameKo:"절뚝임 / 관절"},{id:"Lethargic / Low energy",name:"Lethargic / Low energy",nameKo:"기력 저하"},{id:"Coughing / Reverse sneeze",name:"Coughing / Reverse sneeze",nameKo:"기침 / 역재채기"},{id:"Loss of Appetite",name:"Loss of Appetite",nameKo:"식욕 부진"},{id:"Skin redness / Rash",name:"Skin redness / Rash",nameKo:"피부 발진 / 붉어짐"},{id:"Ear shaking",name:"Ear shaking",nameKo:"귀 털기 / 귓병"}],this.portionOptions=[{id:"0.5 cup",name:"0.5 cup",nameKo:"0.5 컵"},{id:"1.0 cup",name:"1.0 cup",nameKo:"1.0 컵"},{id:"1.5 cups",name:"1.5 cups",nameKo:"1.5 컵"},{id:"2.0 cups",name:"2.0 cups",nameKo:"2.0 컵"},{id:"Full bowl",name:"Full bowl",nameKo:"한 그릇 가득"},{id:"Special treats",name:"Special treats",nameKo:"특별 간식"}],this.moodOptions=Yr,this.locationPresets=["Home / Indoor","Backyard","Park","Walk Route","Vet Clinic","Daycare"],this.locationPresetsKo=["우리집 / 실내","마당 / 배변패드","공원 / 산책로","단지 내 산책","동물병원","데이케어"]}connectedCallback(){super.connectedCallback(),this.unsubscribe=g.subscribe(()=>{if(g.loggerModalOpen)if(this.wasOpen)g.loggerEventType&&this.selectedType!==g.loggerEventType&&!g.editingEvent&&(this.selectedType=g.loggerEventType);else{if(this.walkPetIds=g.currentPet?[g.currentPet.id]:[],g.editingEvent){const e=g.editingEvent,o=e.metadata||{};this.selectedType=e.eventType;let n=e.notes||"";const a=n.split(" · ");if(a.length>1){const l=a[a.length-1].trim();l!==o.mood&&l!==o.size&&l!==o.portion?n=l:n=""}else(n.startsWith("응가")||n.startsWith("쉬야")||n.startsWith("Type ")||n.startsWith("Pee")||n.startsWith("Vomit")||n.startsWith("구토")||n.startsWith("Weigh-in")||n.startsWith("체중")||n.startsWith("Walk")||n.startsWith("산책"))&&(n="");this.notes=n,this.photoUrl=o.photoUrl||"",this.locationName=o.locationName||"",this.lat=typeof e.latitude=="number"?e.latitude:void 0,this.lng=typeof e.longitude=="number"?e.longitude:void 0,this.weatherText=o.weather||"",this.customTimestamp=e.timestamp||new Date().toISOString(),o.consistency&&(this.cons=o.consistency),o.size&&(this.size=o.size),o.mood&&(this.mood=o.mood),o.medication&&(this.selectedMed=o.medication),o.dosage&&(this.selectedMedDose=o.dosage),o.weightKg&&(this.weightKg=o.weightKg),o.walkDuration&&(this.walkMin=o.walkDuration),o.walkDistance&&(this.walkKm=o.walkDistance),o.visitReason&&(this.vetReason=o.visitReason),o.symptom&&(this.symptom=o.symptom),o.portion&&(this.portion=o.portion),e.eventType==="walk"?(this.startLat=typeof o.startLat=="number"?o.startLat:typeof e.latitude=="number"?e.latitude:void 0,this.startLng=typeof o.startLng=="number"?o.startLng:typeof e.longitude=="number"?e.longitude:void 0,this.startLocationName=o.startLocationName||o.locationName||"",this.endLat=typeof o.endLat=="number"?o.endLat:void 0,this.endLng=typeof o.endLng=="number"?o.endLng:void 0,this.endLocationName=o.endLocationName||""):(this.startLat=void 0,this.startLng=void 0,this.startLocationName="",this.endLat=void 0,this.endLng=void 0,this.endLocationName=""),this.isLocating=!1,this.isLocatingStart=!1,this.isLocatingEnd=!1,this.activeMapPickerTarget="single",this.showLocationPicker=!1,this.showMapPicker=!1,this.showTimePicker=!1,this.isFetchingWeather=!1}else this.selectedType=g.loggerEventType||null,this.locationName="",this.lat=void 0,this.lng=void 0,this.startLat=void 0,this.startLng=void 0,this.startLocationName="",this.endLat=void 0,this.endLng=void 0,this.endLocationName="",this.isLocatingStart=!1,this.isLocatingEnd=!1,this.activeMapPickerTarget="single",this.notes="",this.photoUrl="",this.customMedName="",this.customTimestamp=new Date().toISOString(),this.isLocating=!1,this.showLocationPicker=!1,this.showMapPicker=!1,this.showTimePicker=!1,this.weatherText="",this.isFetchingWeather=!1,this.autoFetchWeather();this.wasOpen=!0}else this.selectedType=null,this.wasOpen=!1;this.requestUpdate()})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.unsubscribe)==null||e.call(this)}handleSelectType(e){this.selectedType=e,g.loggerEventType=e}handleBackToTypes(){this.selectedType=null,g.loggerEventType=null}triggerPhotoUpload(){this.fileInput||(this.fileInput=document.createElement("input"),this.fileInput.type="file",this.fileInput.accept="image/*",this.fileInput.style.display="none",document.body.appendChild(this.fileInput),this.fileInput.addEventListener("change",e=>{var n;const o=(n=e.target.files)==null?void 0:n[0];if(o){const a=new FileReader;a.onload=l=>{var d;this.photoUrl=(d=l.target)==null?void 0:d.result},a.readAsDataURL(o)}})),this.fileInput.click()}selectPreset(e){this.locationName=e,!this.lat&&typeof navigator<"u"&&navigator.geolocation&&navigator.geolocation.getCurrentPosition(o=>{this.lat=o.coords.latitude,this.lng=o.coords.longitude,this.requestUpdate()},()=>{},{timeout:5e3})}clearLocation(){this.locationName="",this.lat=void 0,this.lng=void 0,this.isLocating=!1}async fetchCurrentLocation(){if(typeof navigator>"u"||!navigator.geolocation){this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:g.currentLocale==="ko"?"위치 권한 필요":"GPS Unavailable",sub:g.currentLocale==="ko"?"브라우저에서 위치 정보 접근을 허용해주세요.":"Geolocation is not supported or permitted by your browser."}}));return}this.isLocating=!0,this.requestUpdate(),navigator.geolocation.getCurrentPosition(async e=>{this.lat=e.coords.latitude,this.lng=e.coords.longitude,this.isLocating=!1,this.locationName||(this.locationName=`${this.lat.toFixed(4)}, ${this.lng.toFixed(4)}`,this.tryReverseGeocode(this.lat,this.lng)),this.fetchWeather(this.lat,this.lng),this.requestUpdate(),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:g.currentLocale==="ko"?"GPS 위치 태그 완료":"GPS Location Tagged",sub:`${this.lat.toFixed(4)}, ${this.lng.toFixed(4)}`}}))},e=>{console.warn("Geolocation failed:",e),this.isLocating=!1,this.requestUpdate(),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:g.currentLocale==="ko"?"위치 확인 실패":"Location Tagging Failed",sub:e.message||(g.currentLocale==="ko"?"위치 정보를 가져올 수 없습니다.":"Could not retrieve GPS coordinates.")}}))},{enableHighAccuracy:!0,timeout:8e3})}autoFetchWeather(){typeof navigator>"u"||!navigator.geolocation||(this.isFetchingWeather=!0,this.weatherText="",this.requestUpdate(),navigator.geolocation.getCurrentPosition(e=>{this.fetchWeather(e.coords.latitude,e.coords.longitude)},()=>{this.isFetchingWeather=!1,this.weatherText="",this.requestUpdate()},{timeout:5e3}))}async fetchWeather(e,o){var n,a;this.isFetchingWeather=!0,this.requestUpdate();try{const l=`https://api.open-meteo.com/v1/forecast?latitude=${e}&longitude=${o}&current=temperature_2m,weather_code&temperature_unit=celsius`,d=await fetch(l);if(!d.ok)throw new Error("Weather API error");const p=await d.json(),f=Math.round(((n=p.current)==null?void 0:n.temperature_2m)??0),m=((a=p.current)==null?void 0:a.weather_code)??0,y=this.wmoCodeToDescription(m);this.weatherText=`${f}° ${y}`}catch(l){console.warn("Weather fetch failed:",l),this.weatherText=""}finally{this.isFetchingWeather=!1,this.requestUpdate()}}wmoCodeToDescription(e){const o=g.currentLocale==="ko",a={0:["☀️ clear","☀️ 맑음"],1:["🌤️ mostly clear","🌤️ 대체로 맑음"],2:["⛅ partly cloudy","⛅ 구름 조금"],3:["☁️ overcast","☁️ 흐림"],45:["🌫️ fog","🌫️ 안개"],48:["🌫️ rime fog","🌫️ 서리 안개"],51:["🌦️ light drizzle","🌦️ 가벼운 이슬비"],53:["🌦️ drizzle","🌦️ 이슬비"],55:["🌧️ heavy drizzle","🌧️ 강한 이슬비"],56:["🌧️ freezing drizzle","🌧️ 얼어붙는 이슬비"],57:["🌧️ heavy freezing drizzle","🌧️ 강한 결빙 이슬비"],61:["🌧️ light rain","🌧️ 약한 비"],63:["🌧️ rain","🌧️ 비"],65:["🌧️ heavy rain","🌧️ 강한 비"],66:["🌧️ freezing rain","🌧️ 얼어붙는 비"],67:["🌧️ heavy freezing rain","🌧️ 강한 결빙 비"],71:["🌨️ light snow","🌨️ 약한 눈"],73:["🌨️ snow","🌨️ 눈"],75:["❄️ heavy snow","❄️ 강한 눈"],77:["🌨️ snow grains","🌨️ 싸락눈"],80:["🌦️ light showers","🌦️ 약한 소나기"],81:["🌧️ showers","🌧️ 소나기"],82:["⛈️ heavy showers","⛈️ 강한 소나기"],85:["🌨️ light snow showers","🌨️ 약한 눈 소나기"],86:["❄️ heavy snow showers","❄️ 강한 눈 소나기"],95:["⛈️ thunderstorm","⛈️ 뇌우"],96:["⛈️ thunderstorm w/ hail","⛈️ 우박 동반 뇌우"],99:["⛈️ severe thunderstorm","⛈️ 강한 뇌우"]}[e];return a?o?a[1]:a[0]:o?"☁️ 알 수 없음":"☁️ unknown"}async tryReverseGeocode(e,o){var n,a,l,d,p,f,m,y;try{const x=await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${e}&lon=${o}&zoom=18&addressdetails=1`,{headers:{Accept:"application/json"}});if(x.ok){const _=await x.json(),F=((n=_.address)==null?void 0:n.road)||((a=_.address)==null?void 0:a.pedestrian)||((l=_.address)==null?void 0:l.suburb)||((d=_.address)==null?void 0:d.neighbourhood),P=((p=_.address)==null?void 0:p.city)||((f=_.address)==null?void 0:f.town)||((m=_.address)==null?void 0:m.village)||((y=_.address)==null?void 0:y.county);if(F&&P)this.locationName=`${F}, ${P}`;else if(F)this.locationName=F;else if(_.display_name){const $=_.display_name.split(",");this.locationName=$.slice(0,2).join(",").trim()}this.requestUpdate()}}catch{}}formatDisplayTime(e){const o=g.currentLocale==="ko",n=e||new Date().toISOString(),a=new Date(n);if(isNaN(a.getTime()))return{main:new Date().toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}).toLowerCase(),sub:o?"오늘 · 탭하여 변경":"Today · tap to edit"};const l=new Date,d=a.getFullYear()===l.getFullYear()&&a.getMonth()===l.getMonth()&&a.getDate()===l.getDate(),p=a.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}).toLowerCase();return d?{main:p,sub:o?"오늘 · 탭하여 변경":"Today · tap to edit"}:{main:`${o?`${a.getMonth()+1}월 ${a.getDate()}일`:a.toLocaleDateString([],{month:"short",day:"numeric"})}, ${p}`,sub:o?"지정된 일시 · 탭하여 변경":"Custom date · tap to edit"}}toDatetimeLocalValue(e){const o=e?new Date(e):new Date;if(isNaN(o.getTime()))return"";const n=o.getFullYear(),a=String(o.getMonth()+1).padStart(2,"0"),l=String(o.getDate()).padStart(2,"0"),d=String(o.getHours()).padStart(2,"0"),p=String(o.getMinutes()).padStart(2,"0");return`${n}-${a}-${l}T${d}:${p}`}handleCustomTimeInput(e){if(!e)this.customTimestamp=new Date().toISOString();else{const o=new Date(e);this.customTimestamp=isNaN(o.getTime())?new Date().toISOString():o.toISOString()}this.requestUpdate()}setQuickOffsetMinutes(e){const o=new Date(Date.now()-e*60*1e3);this.customTimestamp=o.toISOString(),this.requestUpdate()}setQuickOffsetDays(e){const o=new Date(Date.now()-e*24*60*60*1e3);this.customTimestamp=o.toISOString(),this.requestUpdate()}setNow(){this.customTimestamp=new Date().toISOString(),this.requestUpdate()}async handleSave(){var y,x,_,F,P;const e=g.currentLocale==="ko",o=this.selectedType||"poop",n=((y=g.currentPet)==null?void 0:y.name)||(e?"반려견":"Pet");let a="",l=e?"기록 완료!":"Logged it!",d="";const p=this.customTimestamp||(g.editingEvent?g.editingEvent.timestamp:new Date().toISOString()),f={timestamp:p,photoUrl:this.photoUrl||void 0,locationName:this.locationName||(this.lat?`${this.lat.toFixed(4)}, ${(x=this.lng)==null?void 0:x.toFixed(4)}`:void 0),weather:this.weatherText},m=e?Qr[this.mood]||this.mood:this.mood;if(o==="poop"){const $=e?this.consNamesKo[this.cons-1]:this.consNames[this.cons-1];a=e?`응가 ${this.cons}단계 (${$}) · ${this.size} · ${m}`:`Type ${this.cons} (${this.consNames[this.cons-1]}) · ${this.size} · ${this.mood}`,this.notes&&(a+=` · ${this.notes}`),f.consistency=this.cons,f.consistencyLabel=this.consNames[this.cons-1],f.size=this.size,f.mood=this.mood,l=e?"응가 기록 완료!":"Logged it!",d=e?`${n}의 배변 기록: ${this.cons}단계 · ${this.size}`:`${n}’s log: Type ${this.cons} · ${this.size}`}else if(o==="pee")a=e?`쉬야 · ${this.size} · ${m}`:`Pee · ${this.size} · ${this.mood}`,this.notes&&(a+=` · ${this.notes}`),f.size=this.size,f.mood=this.mood,l=e?"쉬야 완료!":"Marked!",d=e?"영역 표시 기록됨.":"Territory marked.";else if(o==="vomit")a=e?`구토 · ${this.cons}단계 · ${m}`:`Vomit · Type ${this.cons} · ${this.mood}`,this.notes&&(a+=` · ${this.notes}`),f.consistency=this.cons,f.consistencyLabel=this.consNames[this.cons-1],f.mood=this.mood,l=e?"구토 기록됨 & 주의 알림":"Logged and flagged",d=e?"24시간 내 반복 발생 시 알림을 드립니다.":"Two in 48h will alert you.";else if(o==="medicine"){const $=this.customMedName||this.selectedMed;a=`${$} (${this.selectedMedDose})`,this.notes&&(a+=` · ${this.notes}`),f.medication=$,f.dosage=this.selectedMedDose,l=e?"투약 기록 완료":`${$} given`,d=e?"다음 투약 일정에 반영됩니다.":"Next dose scheduled."}else if(o==="weight")a=e?`체중 측정: ${this.weightKg.toFixed(1)} kg`:`Weigh-in: ${this.weightKg.toFixed(1)} kg`,this.notes&&(a+=` · ${this.notes}`),f.weightKg=this.weightKg,l=e?"체중 저장됨":"Weigh-in saved",d=`${this.weightKg.toFixed(1)} kg · ${e?"체중 기록 완료":"recorded"}`;else if(o==="walk")a=e?`산책 · ${this.walkMin} (${this.walkKm}) · ${m}`:`Walk · ${this.walkMin} (${this.walkKm}) · ${this.mood}`,this.notes&&(a+=` · ${this.notes}`),f.walkDuration=this.walkMin,f.walkDistance=this.walkKm,f.mood=this.mood,f.startLat=this.startLat,f.startLng=this.startLng,f.startLocationName=this.startLocationName,f.endLat=this.endLat,f.endLng=this.endLng,f.endLocationName=this.endLocationName,this.startLat!==void 0&&this.startLng!==void 0&&(this.lat=this.startLat,this.lng=this.startLng,this.locationName||(this.locationName=this.startLocationName)),l=e?"산책 기록 완료":"Walk logged",d=`${this.walkMin} · ${this.walkKm} · ${e?"저장되었습니다!":"Saved successfully."}`;else if(o==="vet"){const $=e?((_=this.vetReasons.find(N=>N.id===this.vetReason))==null?void 0:_.nameKo)||this.vetReason:this.vetReason;a=e?`병원 진료: ${$}`:`Vet visit: ${this.vetReason}`,this.notes&&(a+=` · ${this.notes}`),f.visitReason=this.vetReason,l=e?"진료 기록 추가":"Visit added",d=e?"진료 내역 및 알림이 설정되었습니다.":"Reminder set."}else if(o==="symptom"){const $=e?((F=this.symptomOptions.find(N=>N.id===this.symptom))==null?void 0:F.nameKo)||this.symptom:this.symptom;a=e?`증상: ${$}`:`Symptom: ${this.symptom}`,this.notes&&(a+=` · ${this.notes}`),f.symptom=this.symptom,l=e?"증상 기록됨":"Symptom noted",d=e?"수의사 진료용 요약에 추가되었습니다.":"Added to vet-ready summary."}else if(o==="food"||o==="water"){const $=e?((P=this.portionOptions.find(N=>N.id===this.portion))==null?void 0:P.nameKo)||this.portion:this.portion;a=e?`식사: ${$}`:`Meal: ${this.portion}`,this.notes&&(a+=` · ${this.notes}`),f.portion=this.portion,l=e?"식사 기록 완료":"Meal recorded",d=`${$}`}if(!this.isSaving){this.isSaving=!0;try{g.editingEvent?(await g.updateEvent(g.editingEvent.id,o,a,f,this.lat,this.lng,p),l=e?"기록 수정 완료!":"Entry updated!",d=e?"수정사항이 저장되었습니다.":"Changes saved."):await g.logEvent(o,a,f,this.lat,this.lng,p),this.close(),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:l,sub:d}}))}catch($){console.error("Error saving event:",$)}finally{this.isSaving=!1}}}async handleDelete(){if(!g.editingEvent)return;const e=g.currentLocale==="ko",o=e?"정말 이 기록을 삭제하시겠습니까?":"Are you sure you want to delete this entry?";if(!window.confirm(o))return;const n=g.editingEvent.id;await g.deleteEvent(n),this.close(),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:e?"기록 삭제됨":"Entry deleted",sub:e?"기록이 정상적으로 삭제되었습니다.":"The log entry has been removed."}}))}openMapPickerFor(e){this.activeMapPickerTarget=e,this.showMapPicker=!0,this.requestUpdate()}async fetchStartGPS(){typeof navigator>"u"||!navigator.geolocation||(this.isLocatingStart=!0,this.requestUpdate(),navigator.geolocation.getCurrentPosition(async e=>{this.startLat=e.coords.latitude,this.startLng=e.coords.longitude,this.isLocatingStart=!1,this.startLocationName||(this.startLocationName=`${this.startLat.toFixed(4)}, ${this.startLng.toFixed(4)}`,this.tryReverseGeocodeForTarget(this.startLat,this.startLng,"start")),this.requestUpdate()},e=>{console.warn("Start Geolocation error:",e),this.isLocatingStart=!1,this.requestUpdate()},{enableHighAccuracy:!0,timeout:8e3}))}async fetchEndGPS(){typeof navigator>"u"||!navigator.geolocation||(this.isLocatingEnd=!0,this.requestUpdate(),navigator.geolocation.getCurrentPosition(async e=>{this.endLat=e.coords.latitude,this.endLng=e.coords.longitude,this.isLocatingEnd=!1,this.endLocationName||(this.endLocationName=`${this.endLat.toFixed(4)}, ${this.endLng.toFixed(4)}`,this.tryReverseGeocodeForTarget(this.endLat,this.endLng,"end")),this.requestUpdate()},e=>{console.warn("End Geolocation error:",e),this.isLocatingEnd=!1,this.requestUpdate()},{enableHighAccuracy:!0,timeout:8e3}))}async tryReverseGeocodeForTarget(e,o,n){var a,l,d,p,f,m,y,x;try{const _=await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${e}&lon=${o}&zoom=18&addressdetails=1`,{headers:{Accept:"application/json"}});if(_.ok){const F=await _.json(),P=((a=F.address)==null?void 0:a.road)||((l=F.address)==null?void 0:l.pedestrian)||((d=F.address)==null?void 0:d.suburb)||((p=F.address)==null?void 0:p.neighbourhood),$=((f=F.address)==null?void 0:f.city)||((m=F.address)==null?void 0:m.town)||((y=F.address)==null?void 0:y.village)||((x=F.address)==null?void 0:x.county),N=P&&$?`${P}, ${$}`:P||(F.display_name?F.display_name.split(",").slice(0,2).join(",").trim():"");N&&(n==="start"?this.startLocationName=N:n==="end"?this.endLocationName=N:this.locationName=N,this.requestUpdate())}}catch{}}handleSpotSelected(e){const o=e.detail.lat,n=e.detail.lng,a=e.detail.locationName||(o!==void 0&&n!==void 0?`${o.toFixed(4)}, ${n.toFixed(4)}`:"");this.activeMapPickerTarget==="start"?(this.startLat=o,this.startLng=n,this.startLocationName=a):this.activeMapPickerTarget==="end"?(this.endLat=o,this.endLng=n,this.endLocationName=a):(this.lat=o,this.lng=n,this.locationName=a,o!==void 0&&n!==void 0&&this.fetchWeather(o,n)),this.showMapPicker=!1,this.requestUpdate()}close(){this.selectedType=null,this.notes="",this.photoUrl="",this.customMedName="",this.locationName="",this.lat=void 0,this.lng=void 0,this.startLat=void 0,this.startLng=void 0,this.startLocationName="",this.endLat=void 0,this.endLng=void 0,this.endLocationName="",this.isLocatingStart=!1,this.isLocatingEnd=!1,this.activeMapPickerTarget="single",this.customTimestamp="",this.isLocating=!1,this.showLocationPicker=!1,this.showMapPicker=!1,this.showTimePicker=!1,g.closeLogger()}render(){var Z,j,rt,I;if(!g.loggerModalOpen)return null;const e=!this.selectedType,o=!!this.selectedType,n=g.currentLocale==="ko",a={poop:n?["배변 세부 기록","두 번 탭으로 간단하게"]:["A fine specimen","Two taps and you’re done"],pee:n?["영역 표시 업데이트","위치와 규모"]:["Territory update","Where and how long"],vomit:n?["소화 이상 기록","수의사 진료에 도움이 됩니다"]:["Sorry, buddy","Details help the vet"],medicine:n?["투약 완료","일정에 체크하세요"]:["Dose given","Tick it off the schedule"],weight:n?["체중 측정","주기적인 측정이 중요해요"]:["Weigh-in","Monthly is plenty"],vet:n?["병원 진료","진료 내용과 날짜"]:["Vet visit","Reason and date"],walk:n?["즐거운 야외 산책","얼마나 걸었나요?"]:["Out and about","How long were you gone?"],symptom:n?["이상 징후 기록","생생할 때 기록해두세요"]:["Something’s off","Describe it while it’s fresh"],food:n?["식사 및 사료","급여량과 종류"]:["Mealtime","Portion and food"]},l=!!g.editingEvent,d=l?n?["기록 수정하기","내용을 변경하거나 삭제할 수 있습니다"]:["Edit Log Entry","Update details or delete entry"]:this.selectedType?a[this.selectedType]||(n?["기록 세부사항","확인"]:["What happened?","Confirm details"]):n?["무슨 일이 있었나요?","종류를 선택하세요"]:["What happened?","Pick a type"],p=d[0],f=d[1],m=this.selectedType==="poop"||this.selectedType==="vomit",y=this.selectedType==="poop"||this.selectedType==="pee",x=this.selectedType==="weight",_=this.selectedType==="medicine",F=this.selectedType==="walk",P=this.selectedType==="vet",$=this.selectedType==="symptom",N=this.selectedType==="food"||this.selectedType==="water",R=this.selectedType==="poop"||this.selectedType==="pee"||this.selectedType==="vomit"||this.selectedType==="walk";return b`
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
                <div class="sheet-title">${p}</div>
                <div class="sheet-sub">${f}</div>
              </div>
              <div class="sheet-close-btn" @click=${()=>this.close()}>✕</div>
            </div>
          </div>

          <div class="sheet-scroll-content">
            ${e?b`
                  <div class="type-grid">
                    ${this.typeDefs.map(S=>b`
                        <div
                          class="type-card"
                          @click=${()=>this.handleSelectType(S.id)}
                        >
                          <div class="type-icon" style="background: ${S.c};">
                            ${S.tag}
                          </div>
                          <div>
                            <div class="type-card-name">${n?S.nameKo:S.name}</div>
                            <div class="type-card-sub">${n?S.subKo:S.sub}</div>
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
                        <div class="pill-label">${n?"시간":"Time"} ⏱️</div>
                        <div class="pill-val">
                          ${this.formatDisplayTime(this.customTimestamp).main}
                        </div>
                        <div class="pill-sub">
                          ${this.formatDisplayTime(this.customTimestamp).sub}
                        </div>
                      </div>
                      <div class="pill-info">
                        <div class="pill-label">${n?"상태 / 날씨":"Weather / GPS"}</div>
                        <div class="pill-val">${this.isFetchingWeather?n?"날씨 확인중…":"fetching…":this.weatherText||"—"}</div>
                        <div class="pill-sub">${this.weatherText?n?"실시간 날씨":"Live weather":n?"GPS 기반":"GPS synced"}</div>
                      </div>
                    </div>

                    <!-- Date & Time Picker Card -->
                    ${this.showTimePicker?b`
                          <div class="time-picker-card">
                            <div class="picker-header">
                              <span class="picker-title">${n?"일시 및 시간 변경":"Adjust Date & Time"}</span>
                              <button class="picker-close-btn" @click=${()=>this.showTimePicker=!1}>✕</button>
                            </div>

                            <div class="picker-section-lbl">${n?"빠른 시간 선택":"Quick Time"}</div>
                            <div class="location-chips-row">
                              <div class="location-chip" @click=${()=>this.setNow()}>
                                ⏱️ ${n?"지금":"Now"}
                              </div>
                              <div class="location-chip" @click=${()=>this.setQuickOffsetMinutes(15)}>
                                ${n?"15분 전":"15m ago"}
                              </div>
                              <div class="location-chip" @click=${()=>this.setQuickOffsetMinutes(30)}>
                                ${n?"30분 전":"30m ago"}
                              </div>
                              <div class="location-chip" @click=${()=>this.setQuickOffsetMinutes(60)}>
                                ${n?"1시간 전":"1h ago"}
                              </div>
                              <div class="location-chip" @click=${()=>this.setQuickOffsetDays(1)}>
                                ${n?"어제 이맘때":"Yesterday"}
                              </div>
                            </div>

                            <div class="picker-section-lbl">${n?"직접 날짜 & 시간 지정":"Exact Date & Time"}</div>
                            <div class="custom-loc-input-row">
                              <input
                                type="datetime-local"
                                class="custom-time-input"
                                .value=${this.toDatetimeLocalValue(this.customTimestamp)}
                                @input=${S=>this.handleCustomTimeInput(S.target.value)}
                              />
                            </div>
                          </div>
                        `:null}

                    <!-- 1. Consistency (Poop / Vomit) -->
                    ${m?b`
                          <div>
                            <div class="section-lbl">${n?"변 상태 / 형태":"Consistency"}</div>
                            <div class="section-sub">
                              Type ${this.cons} — ${n?this.consNamesKo[this.cons-1]:this.consNames[this.cons-1]}
                            </div>
                            <div class="cons-row">
                              ${[1,2,3,4,5,6,7].map(S=>b`
                                  <div
                                    class="cons-opt ${this.cons===S?"active":""}"
                                    @click=${()=>this.cons=S}
                                  >
                                    <div
                                      style="font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif); font-weight: 800; font-size: 15px; color: #17140F;"
                                    >
                                      ${S}
                                    </div>
                                    <div
                                      style="width: ${5+S*2.4}px; height: 5px; border-radius: 5px; background: #17140F;"
                                    ></div>
                                  </div>
                                `)}
                            </div>
                          </div>
                        `:null}

                    <!-- 2. Size (Poop / Pee) -->
                    ${y?b`
                          <div>
                            <div class="section-lbl" style="margin-bottom: 10px;">
                              ${n?"크기 / 양":"Size"}
                            </div>
                            <div class="size-row">
                              ${["S","M","L","XL"].map(S=>b`
                                  <div
                                    class="size-btn ${this.size===S?"active":""}"
                                    @click=${()=>this.size=S}
                                  >
                                    ${S}
                                  </div>
                                `)}
                            </div>
                          </div>
                        `:null}

                    <!-- 3. Weight Stepper (Weight) -->
                    ${x?b`
                          <div>
                            <div class="section-lbl" style="margin-bottom: 10px;">
                              ${n?"체중 측정":"Body Weight"}
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
                                  KG · ${n?"최근":"LAST"} 14.2 KG
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
                              ${n?"복용 약품":"Which one"}
                            </div>
                            <div class="med-list">
                              ${this.medOptions.map(S=>b`
                                  <div
                                    class="med-item ${this.selectedMed===S.name?"active":""}"
                                    @click=${()=>{this.selectedMed=S.name,this.selectedMedDose=S.dose}}
                                  >
                                    <div class="med-dot"></div>
                                    <div class="med-name">${S.name}</div>
                                    <div class="med-dose">${S.dose}</div>
                                  </div>
                                `)}
                            </div>
                          </div>
                        `:null}

                    <!-- 5. Walk (Live tracking & Quick logs & Editing) -->
                    ${F?b`
                          <div style="display: flex; flex-direction: column; gap: 14px;">
                            ${l?null:b`
                                  <!-- Start Live Walk Button -->
                                  <div
                                    class="start-walk-btn"
                                    @click=${()=>{g.closeLogger(),g.startLiveWalk(this.walkPetIds)}}
                                  >
                                    <div class="play-icon-circle">
                                      <div class="play-triangle"></div>
                                    </div>
                                    <div style="flex: 1; min-width: 0;">
                                      <div class="start-walk-title">${n?"지금 산책 시작":"Start walk now"}</div>
                                      <div class="start-walk-sub">${n?"실시간 GPS 지도 및 경로 기록":"Live GPS map and route tracking"}</div>
                                    </div>
                                  </div>

                                  <!-- Who's Coming Multi-Pet Selector -->
                                  ${g.pets.length>1?b`
                                        <div>
                                          <div class="section-lbl" style="margin-bottom: 9px;">
                                            ${n?"누가 가나요?":"Who's coming"}
                                          </div>
                                          <div class="who-chips-row">
                                            ${g.pets.map(S=>{const ct=this.walkPetIds.includes(S.id);return b`
                                                <div
                                                  class="who-pet-chip ${ct?"active":""}"
                                                  @click=${()=>{ct?this.walkPetIds.length>1&&(this.walkPetIds=this.walkPetIds.filter(A=>A!==S.id)):this.walkPetIds=[...this.walkPetIds,S.id]}}
                                                >
                                                  <div class="who-pet-avatar">${S.name.charAt(0).toUpperCase()}</div>
                                                  <div class="who-pet-name">${S.name}</div>
                                                  <div class="who-tick-circle">${ct?"✓":""}</div>
                                                </div>
                                              `})}
                                          </div>
                                        </div>
                                      `:null}

                                  <!-- Divider -->
                                  <div class="walk-or-divider">
                                    <div class="walk-or-line"></div>
                                    <div class="walk-or-text">
                                      ${n?"또는 산책 기록 직접 입력":"OR LOG / EDIT WALK DETAILS"}
                                    </div>
                                    <div class="walk-or-line"></div>
                                  </div>
                                `}

                            <!-- Walk Length: Presets & Custom Duration/Distance -->
                            <div>
                              <div class="section-lbl" style="margin-bottom: 8px;">
                                ${n?"산책 시간 & 거리":"Walk Length & Distance"}
                              </div>
                              <div class="walk-row">
                                ${this.walkOptions.map(S=>b`
                                    <div
                                      class="walk-btn ${this.walkMin===S.min?"active":""}"
                                      @click=${()=>{this.walkMin=S.min,this.walkKm=S.km}}
                                    >
                                      <div class="walk-min">${n?S.minKo:S.min}</div>
                                      <div class="walk-km">${S.km}</div>
                                    </div>
                                  `)}
                              </div>

                              <div class="walk-custom-inputs-row">
                                <div class="walk-input-box">
                                  <span class="walk-input-label">${n?"시간 (분/시간)":"Duration"}</span>
                                  <input
                                    type="text"
                                    class="walk-input-field"
                                    placeholder="30 min"
                                    .value=${this.walkMin}
                                    @input=${S=>this.walkMin=S.target.value}
                                  />
                                </div>
                                <div class="walk-input-box">
                                  <span class="walk-input-label">${n?"거리 (km)":"Distance"}</span>
                                  <input
                                    type="text"
                                    class="walk-input-field"
                                    placeholder="2.3 km"
                                    .value=${this.walkKm}
                                    @input=${S=>this.walkKm=S.target.value}
                                  />
                                </div>
                              </div>
                            </div>

                            <!-- Start GPS Point Card -->
                            <div class="walk-gps-card">
                              <div class="walk-gps-header">
                                <div class="walk-gps-title">
                                  <span>🟢</span>
                                  <span>${n?"출발 위치 (Start GPS)":"Start Point (GPS)"}</span>
                                </div>
                                ${typeof this.startLat=="number"&&typeof this.startLng=="number"?b`
                                      <span class="walk-coords-tag">
                                        ${this.startLat.toFixed(4)}, ${this.startLng.toFixed(4)}
                                      </span>
                                    `:null}
                              </div>

                              <input
                                type="text"
                                class="custom-loc-input"
                                placeholder="${n?"출발 장소명 (예: 집, 공원 입구)":"Start place name (e.g. Home, Park Gate)..."}"
                                .value=${this.startLocationName}
                                @input=${S=>this.startLocationName=S.target.value}
                              />

                              <div class="walk-gps-actions">
                                <button class="walk-map-btn" @click=${()=>this.openMapPickerFor("start")}>
                                  <span>🗺️</span>
                                  <span>${n?"지도에서 출발지 선택":"Pick Start on Map"}</span>
                                </button>
                                <button
                                  class="walk-gps-btn"
                                  @click=${()=>this.fetchStartGPS()}
                                  ?disabled=${this.isLocatingStart}
                                >
                                  <span>${this.isLocatingStart?"⏳":"🎯"}</span>
                                  <span>${this.isLocatingStart?n?"수신중":"GPS...":n?"내 위치":"GPS"}</span>
                                </button>
                                ${typeof this.startLat=="number"||this.startLocationName?b`
                                      <button
                                        class="gps-clear-btn"
                                        style="margin-left: 0;"
                                        @click=${()=>{this.startLat=void 0,this.startLng=void 0,this.startLocationName=""}}
                                      >
                                        ✕
                                      </button>
                                    `:null}
                              </div>
                            </div>

                            <!-- End GPS Point Card -->
                            <div class="walk-gps-card">
                              <div class="walk-gps-header">
                                <div class="walk-gps-title">
                                  <span>🏁</span>
                                  <span>${n?"도착 위치 (End GPS)":"End Point (GPS)"}</span>
                                </div>
                                ${typeof this.endLat=="number"&&typeof this.endLng=="number"?b`
                                      <span class="walk-coords-tag">
                                        ${this.endLat.toFixed(4)}, ${this.endLng.toFixed(4)}
                                      </span>
                                    `:null}
                              </div>

                              <input
                                type="text"
                                class="custom-loc-input"
                                placeholder="${n?"도착 장소명 (예: 카페, 집 도착)":"End place name (e.g. Cafe, Back home)..."}"
                                .value=${this.endLocationName}
                                @input=${S=>this.endLocationName=S.target.value}
                              />

                              <div class="walk-gps-actions">
                                <button class="walk-map-btn" @click=${()=>this.openMapPickerFor("end")}>
                                  <span>🗺️</span>
                                  <span>${n?"지도에서 도착지 선택":"Pick End on Map"}</span>
                                </button>
                                <button
                                  class="walk-gps-btn"
                                  @click=${()=>this.fetchEndGPS()}
                                  ?disabled=${this.isLocatingEnd}
                                >
                                  <span>${this.isLocatingEnd?"⏳":"🎯"}</span>
                                  <span>${this.isLocatingEnd?n?"수신중":"GPS...":n?"내 위치":"GPS"}</span>
                                </button>
                                ${typeof this.endLat=="number"||this.endLocationName?b`
                                      <button
                                        class="gps-clear-btn"
                                        style="margin-left: 0;"
                                        @click=${()=>{this.endLat=void 0,this.endLng=void 0,this.endLocationName=""}}
                                      >
                                        ✕
                                      </button>
                                    `:null}
                              </div>
                            </div>
                          </div>
                        `:null}

                    <!-- 6. Vet Visit Reason (Vet) -->
                    ${P?b`
                          <div>
                            <div class="section-lbl" style="margin-bottom: 10px;">
                              ${n?"진료 내용":"Visit Reason"}
                            </div>
                            <div class="wrap-pill-row">
                              ${this.vetReasons.map(S=>b`
                                  <div
                                    class="mood-pill ${this.vetReason===S.id?"active":""}"
                                    @click=${()=>this.vetReason=S.id}
                                  >
                                    ${n?S.nameKo:S.name}
                                  </div>
                                `)}
                            </div>
                          </div>
                        `:null}

                    <!-- 7. Symptom Tags (Symptom) -->
                    ${$?b`
                          <div>
                            <div class="section-lbl" style="margin-bottom: 10px;">
                              ${n?"관찰된 증상":"Symptom observed"}
                            </div>
                            <div class="wrap-pill-row">
                              ${this.symptomOptions.map(S=>b`
                                  <div
                                    class="mood-pill ${this.symptom===S.id?"active":""}"
                                    @click=${()=>this.symptom=S.id}
                                  >
                                    ${n?S.nameKo:S.name}
                                  </div>
                                `)}
                            </div>
                          </div>
                        `:null}

                    <!-- 8. Food Portion (Food/Water) -->
                    ${N?b`
                          <div>
                            <div class="section-lbl" style="margin-bottom: 10px;">
                              ${n?"급여량":"Portion"}
                            </div>
                            <div class="wrap-pill-row">
                              ${this.portionOptions.map(S=>b`
                                  <div
                                    class="mood-pill ${this.portion===S.id?"active":""}"
                                    @click=${()=>this.portion=S.id}
                                  >
                                    ${n?S.nameKo:S.name}
                                  </div>
                                `)}
                            </div>
                          </div>
                        `:null}

                    <!-- 9. Mood on Delivery (General / Potty) -->
                    ${R?b`
                          <div>
                            <div class="section-lbl" style="margin-bottom: 10px;">
                              ${n?"기분 & 태도":"Mood on delivery"}
                            </div>
                            <div class="wrap-pill-row">
                              ${this.moodOptions.map(S=>b`
                                  <div
                                    class="mood-pill ${this.mood===S.id?"active":""}"
                                    @click=${()=>this.mood=S.id}
                                  >
                                    ${n?S.nameKo:S.name}
                                  </div>
                                `)}
                            </div>
                          </div>
                        `:null}

                    <!-- Location & Logged By (Single location for non-walk events) -->
                    <div class="pill-row">
                      ${F?null:b`
                            <div
                              class="pill-info ${this.showLocationPicker?"active-picker":""}"
                              @click=${()=>this.showLocationPicker=!this.showLocationPicker}
                            >
                              <div class="pill-label">${n?"위치":"Location"} 📍</div>
                              <div class="pill-val" style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                                ${this.isLocating?n?"GPS 확인 중...":"Locating GPS...":this.locationName||(typeof this.lat=="number"&&typeof this.lng=="number"?`${this.lat.toFixed(4)}, ${this.lng.toFixed(4)}`:n?"위치 추가":"Add location")}
                              </div>
                              <div class="pill-sub">
                                ${typeof this.lat=="number"&&typeof this.lng=="number"?n?"GPS 연결됨 · 탭하여 변경":"GPS Tagged · tap to edit":this.locationName?n?"장소 지정됨 · 탭하여 변경":"Custom spot · tap to edit":n?"탭하여 GPS/장소 태그":"Tap to tag GPS/spot"}
                              </div>
                            </div>
                          `}
                      <div class="pill-info" style="${F?"flex: 1;":""}">
                        <div class="pill-label">${n?"기록자":"Logged by"}</div>
                        <div class="pill-val">
                          ${((Z=g.currentUser)==null?void 0:Z.displayName)||((I=(rt=(j=g.currentHousehold)==null?void 0:j.members)==null?void 0:rt[0])==null?void 0:I.displayName)||"Me"}
                        </div>
                        <div class="pill-sub">${n?"가족 구성원":"tap to change"}</div>
                      </div>
                    </div>

                    ${!F&&this.showLocationPicker?b`
                          <div class="location-picker-card">
                            <div class="picker-header">
                              <span class="picker-title">${n?"위치 태그 설정":"Attach Location"}</span>
                              <button class="picker-close-btn" @click=${()=>this.showLocationPicker=!1}>✕</button>
                            </div>

                            <div class="gps-btn-row">
                              <button
                                class="gps-action-btn ${typeof this.lat=="number"?"tagged":""}"
                                @click=${()=>this.fetchCurrentLocation()}
                                ?disabled=${this.isLocating}
                              >
                                <span>${this.isLocating?"⏳":typeof this.lat=="number"?"📍":"📡"}</span>
                                <span>
                                  ${this.isLocating?n?"GPS 위치 수신 중...":"Getting GPS...":typeof this.lat=="number"&&typeof this.lng=="number"?n?`GPS 연결됨 (${this.lat.toFixed(4)}, ${this.lng.toFixed(4)})`:`GPS Tagged (${this.lat.toFixed(4)}, ${this.lng.toFixed(4)})`:n?"현재 GPS 위치 태그하기":"Tag Current GPS"}
                                </span>
                              </button>
                              ${typeof this.lat=="number"||this.locationName?b`
                                    <button class="gps-clear-btn" @click=${()=>this.clearLocation()}>
                                      ${n?"초기화":"Clear"}
                                    </button>
                                  `:null}
                            </div>

                            <!-- Open Interactive Map Spot Picker -->
                            <button
                              class="map-picker-trigger-btn"
                              @click=${()=>this.openMapPickerFor("single")}
                            >
                              <span>🗺️</span>
                              <span>${n?"지도에서 핀 찍기 / 위치 찾기":"Find / Pin Spot on Map"}</span>
                            </button>

                            <div class="picker-section-lbl">${n?"자주 쓰는 장소":"Quick Spots"}</div>
                            <div class="location-chips-row">
                              ${(n?this.locationPresetsKo:this.locationPresets).map(S=>b`
                                  <div
                                    class="location-chip ${this.locationName===S?"active":""}"
                                    @click=${()=>this.selectPreset(S)}
                                  >
                                    ${S}
                                  </div>
                                `)}
                            </div>

                            <div class="custom-loc-input-row">
                              <input
                                type="text"
                                class="custom-loc-input"
                                placeholder="${n?"직접 장소명 입력 (예: 센트럴파크 잔디밭)":"Or type custom name (e.g. Elm St & 4th)..."}"
                                .value=${this.locationName}
                                @input=${S=>this.locationName=S.target.value}
                              />
                            </div>
                          </div>
                        `:null}

                    <!-- Photo & Notes -->
                    <div class="photo-notes-row">
                      <div class="photo-box" @click=${()=>this.triggerPhotoUpload()}>
                        ${this.photoUrl?b`<img src="${this.photoUrl}" alt="Photo" />`:b`
                              <div class="photo-plus">+</div>
                              <div class="photo-lbl">${n?"사진":"photo"}</div>
                            `}
                      </div>
                      <div class="notes-box">
                        <div class="pill-label">${n?"메모":"Notes"}</div>
                        <textarea
                          style="border: none; background: transparent; font-size: 13px; font-weight: 600; color: #17140F; margin-top: 5px; line-height: 1.4; resize: none; height: 100%; font-family: inherit; outline: none;"
                          placeholder="${n?"수의사에게 전할 참고사항 입력...":"Anything the vet would want to know…"}"
                          .value=${this.notes}
                          @input=${S=>this.notes=S.target.value}
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
                          title=${n?"기록 삭제":"Delete log"}
                        >
                          🗑️ ${n?"삭제":"Delete"}
                        </button>
                      `:null}
                  <div
                    class="log-submit-btn ${this.isSaving?"is-loading":""}"
                    style="flex: 1; ${this.isSaving?"pointer-events: none;":""}"
                    @click=${()=>this.handleSave()}
                  >
                    ${this.isSaving?b`
                          <div class="btn-spinner"></div>
                          <span>${l?n?"수정 저장 중...":"Saving...":n?"기록 중...":"Logging..."}</span>
                        `:l?n?"수정 완료!":"Save changes":n?"기록하기!":"Log it!"}
                  </div>
                </div>
              `:null}
        </div>

        <!-- Interactive Map Spot Picker Modal -->
        <dooty-map-picker
          .open=${this.showMapPicker}
          .initialLat=${this.activeMapPickerTarget==="start"?this.startLat:this.activeMapPickerTarget==="end"?this.endLat:this.lat}
          .initialLng=${this.activeMapPickerTarget==="start"?this.startLng:this.activeMapPickerTarget==="end"?this.endLng:this.lng}
          .initialLocationName=${this.activeMapPickerTarget==="start"?this.startLocationName:this.activeMapPickerTarget==="end"?this.endLocationName:this.locationName}
          @spot-selected=${S=>this.handleSpotSelected(S)}
          @close=${()=>this.showMapPicker=!1}
        ></dooty-map-picker>
      </div>
    `}},fi.styles=At`
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

    /* Walk GPS & Length Cards */
    .walk-gps-card {
      background: #FFF;
      border: 2.5px solid #17140F;
      border-radius: 18px;
      padding: 12px 14px;
      box-shadow: 3px 3px 0 #17140F;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .walk-gps-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .walk-gps-title {
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 14.5px;
      color: #17140F;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .walk-coords-tag {
      font-family: monospace;
      font-size: 11px;
      font-weight: 700;
      color: #2B5BE8;
      background: #E8EEFF;
      padding: 2px 7px;
      border-radius: 6px;
      border: 1px solid #17140F;
    }

    .walk-gps-actions {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .walk-map-btn {
      flex: 1;
      background: #FFCE2E;
      border: 2px solid #17140F;
      border-radius: 12px;
      padding: 8px 10px;
      font-family: inherit;
      font-weight: 800;
      font-size: 12.5px;
      color: #17140F;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      cursor: pointer;
      box-shadow: 2px 2px 0 #17140F;
      user-select: none;
      transition: all 0.08s ease;
    }

    .walk-map-btn:hover {
      filter: brightness(1.05);
      transform: translate(-1px, -1px);
      box-shadow: 3px 3px 0 #17140F;
    }

    .walk-map-btn:active {
      transform: translate(1px, 1px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .walk-gps-btn {
      background: #FFF;
      border: 2px solid #17140F;
      border-radius: 12px;
      padding: 8px 12px;
      font-family: inherit;
      font-weight: 800;
      font-size: 12px;
      color: #17140F;
      display: flex;
      align-items: center;
      gap: 5px;
      cursor: pointer;
      box-shadow: 2px 2px 0 #17140F;
      user-select: none;
      transition: all 0.08s ease;
    }

    .walk-gps-btn:active {
      transform: translate(1px, 1px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .walk-custom-inputs-row {
      display: flex;
      gap: 10px;
      margin-top: 4px;
    }

    .walk-input-box {
      flex: 1;
      background: #FFF;
      border: 2.5px solid #17140F;
      border-radius: 14px;
      padding: 8px 12px;
      box-shadow: 2px 2px 0 #17140F;
      display: flex;
      flex-direction: column;
      gap: 3px;
    }

    .walk-input-label {
      font-size: 9.5px;
      font-weight: 800;
      letter-spacing: 1px;
      color: #9A9080;
      text-transform: uppercase;
    }

    .walk-input-field {
      border: none;
      background: transparent;
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 15px;
      color: #17140F;
      outline: none;
      width: 100%;
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
  `,fi);it([E()],et.prototype,"selectedType",void 0);it([E()],et.prototype,"cons",void 0);it([E()],et.prototype,"size",void 0);it([E()],et.prototype,"mood",void 0);it([E()],et.prototype,"selectedMed",void 0);it([E()],et.prototype,"selectedMedDose",void 0);it([E()],et.prototype,"customMedName",void 0);it([E()],et.prototype,"weightKg",void 0);it([E()],et.prototype,"walkMin",void 0);it([E()],et.prototype,"walkKm",void 0);it([E()],et.prototype,"vetReason",void 0);it([E()],et.prototype,"symptom",void 0);it([E()],et.prototype,"portion",void 0);it([E()],et.prototype,"photoUrl",void 0);it([E()],et.prototype,"notes",void 0);it([E()],et.prototype,"locationName",void 0);it([E()],et.prototype,"lat",void 0);it([E()],et.prototype,"lng",void 0);it([E()],et.prototype,"isLocating",void 0);it([E()],et.prototype,"showLocationPicker",void 0);it([E()],et.prototype,"showMapPicker",void 0);it([E()],et.prototype,"showTimePicker",void 0);it([E()],et.prototype,"customTimestamp",void 0);it([E()],et.prototype,"walkPetIds",void 0);it([E()],et.prototype,"weatherText",void 0);it([E()],et.prototype,"isFetchingWeather",void 0);it([E()],et.prototype,"isSaving",void 0);it([E()],et.prototype,"startLat",void 0);it([E()],et.prototype,"startLng",void 0);it([E()],et.prototype,"startLocationName",void 0);it([E()],et.prototype,"isLocatingStart",void 0);it([E()],et.prototype,"endLat",void 0);it([E()],et.prototype,"endLng",void 0);it([E()],et.prototype,"endLocationName",void 0);it([E()],et.prototype,"isLocatingEnd",void 0);it([E()],et.prototype,"activeMapPickerTarget",void 0);et=it([Mt("dooty-sheet")],et);var fe=function(h,e,o,n){var a=arguments.length,l=a<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,o):n,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,e,o,n);else for(var p=h.length-1;p>=0;p--)(d=h[p])&&(l=(a<3?d(l):a>3?d(e,o,l):d(e,o))||l);return a>3&&l&&Object.defineProperty(e,o,l),l},gi;let ae=(gi=class extends Ft{constructor(){super(...arguments),this.previewUrl="",this.urlInput="",this.activeMode="upload",this.isProcessing=!1,this.errorMessage="",this.petName="",this.petBreed="",this.petBirthday="",this.petPresets=[{emoji:"🐶",bg:"#FFE485",label:"Golden"},{emoji:"🐕",bg:"#FF9E79",label:"Shiba"},{emoji:"🦮",bg:"#B8E1D9",label:"Lab"},{emoji:"🐩",bg:"#EAD5E6",label:"Poodle"},{emoji:"🐱",bg:"#FED7AA",label:"Cat"},{emoji:"🐈‍⬛",bg:"#CBD5E1",label:"Black Cat"},{emoji:"🐾",bg:"#D1FAE5",label:"Paws"},{emoji:"🦴",bg:"#FDE68A",label:"Bone"},{emoji:"🦊",bg:"#FDBA74",label:"Fox"},{emoji:"🐻",bg:"#E2E8F0",label:"Bear"},{emoji:"🐰",bg:"#FCE7F3",label:"Bunny"},{emoji:"🦁",bg:"#FEF08A",label:"Lion"}],this.userPresets=[{emoji:"🧑‍💻",bg:"#FFE485",label:"Dev"},{emoji:"👩‍🦰",bg:"#FF9E79",label:"Redhead"},{emoji:"👨‍🦱",bg:"#B8E1D9",label:"Curly"},{emoji:"🧔",bg:"#EAD5E6",label:"Beard"},{emoji:"👩‍🎨",bg:"#FED7AA",label:"Artist"},{emoji:"🧑‍🌾",bg:"#D1FAE5",label:"Gardener"},{emoji:"🦸",bg:"#FDE68A",label:"Hero"},{emoji:"🕶️",bg:"#CBD5E1",label:"Cool"},{emoji:"⭐",bg:"#FEF08A",label:"Star"},{emoji:"👑",bg:"#FCE7F3",label:"Crown"}]}connectedCallback(){super.connectedCallback(),this.unsubscribe=g.subscribe(()=>{if(g.photoModalOpen&&(this.previewUrl||(this.previewUrl=g.photoModalCurrentAvatar||""),g.photoModalTarget==="pet")){const e=g.currentPet;if(e&&(this.petName||(this.petName=e.name||""),this.petBreed||(this.petBreed=e.breed||""),!this.petBirthday&&e.birthday))try{this.petBirthday=new Date(e.birthday).toISOString().slice(0,10)}catch{this.petBirthday=e.birthday}}this.requestUpdate()})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.unsubscribe)==null||e.call(this)}handleClose(){this.previewUrl="",this.urlInput="",this.errorMessage="",this.petName="",this.petBreed="",this.petBirthday="",g.closePhotoModal()}triggerFileInput(){var o;const e=(o=this.shadowRoot)==null?void 0:o.querySelector("#fileInput");e==null||e.click()}setAgeInYears(e){const o=new Date;o.setFullYear(o.getFullYear()-e),this.petBirthday=o.toISOString().slice(0,10),this.requestUpdate()}async handleFileSelect(e){var a;const n=(a=e.target.files)==null?void 0:a[0];if(n){if(!n.type.startsWith("image/")){this.errorMessage="Please select a valid image file (PNG, JPG, WEBP).";return}this.isProcessing=!0,this.errorMessage="";try{const l=await this.resizeImage(n,400,400);this.previewUrl=l}catch(l){this.errorMessage="Failed to process image: "+(l.message||"Unknown error")}finally{this.isProcessing=!1}}}resizeImage(e,o,n){return new Promise((a,l)=>{const d=new FileReader;d.onload=p=>{var m;const f=new Image;f.onload=()=>{let y=f.width,x=f.height;const _=Math.min(y,x),F=(y-_)/2,P=(x-_)/2,$=document.createElement("canvas"),N=Math.min(o,_);$.width=N,$.height=N;const R=$.getContext("2d");if(!R){l(new Error("Canvas context not available"));return}R.drawImage(f,F,P,_,_,0,0,N,N),a($.toDataURL("image/jpeg",.88))},f.onerror=()=>l(new Error("Image failed to load")),f.src=(m=p.target)==null?void 0:m.result},d.onerror=()=>l(new Error("File reader failed")),d.readAsDataURL(e)})}handleSelectPreset(e){const o=`data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="${encodeURIComponent(e.bg)}"/><text x="50" y="65" font-size="54" text-anchor="middle">${e.emoji}</text></svg>`;this.previewUrl=o,this.errorMessage=""}handleApplyUrl(){if(!this.urlInput.trim()){this.errorMessage="Please enter an image URL.";return}this.previewUrl=this.urlInput.trim(),this.errorMessage=""}handleRemovePhoto(){this.previewUrl="",this.urlInput="",this.errorMessage=""}async handleSave(){var e,o,n,a;if(!this.isProcessing){this.isProcessing=!0;try{const l=g.currentLocale==="ko",d=g.photoModalTarget,p=g.photoModalTargetId,f=this.previewUrl;if(d==="pet"){const m=p||((e=g.currentPet)==null?void 0:e.id);m&&await g.updatePetProfile(m,{name:this.petName.trim()||((o=g.currentPet)==null?void 0:o.name)||"Pet",breed:this.petBreed.trim()||((n=g.currentPet)==null?void 0:n.breed)||"",birthday:this.petBirthday||((a=g.currentPet)==null?void 0:a.birthday)||"",avatarUrl:f})}else d==="user"?await g.updateUserAvatar(f):d==="member"&&p&&await g.updateMemberAvatar(p,f);this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:d==="pet"?l?`${this.petName||"반려견"} 프로필 저장됨`:`${this.petName||"Pet"} Profile Saved`:l?"사진 업데이트됨":"Photo Updated",sub:l?"변경사항이 성공적으로 적용되었습니다.":"Changes successfully saved."}})),this.handleClose()}catch(l){this.errorMessage="Failed to save: "+(l.message||"Unknown error")}finally{this.isProcessing=!1}}}render(){if(!g.photoModalOpen)return b``;const e=g.currentLocale==="ko",o=g.photoModalTarget,n=o==="pet"?this.petPresets:this.userPresets,a=g.photoModalTitle||(o==="pet"?e?"반려동물 정보 및 사진 수정":"Edit Pet Profile & Photo":e?"프로필 사진 변경":"Change Profile Photo");return b`
      <div class="modal-overlay" @click=${l=>l.target===l.currentTarget&&this.handleClose()}>
        <div class="modal-card">
          <!-- Header -->
          <div class="modal-header">
            <div class="modal-title">${a}</div>
            <button class="close-btn" @click=${this.handleClose}>✕</button>
          </div>

          <!-- Body -->
          <div class="modal-body">
            <!-- If editing Pet, show Name, Breed, and Birthday fields -->
            ${o==="pet"?b`
                  <div class="form-group">
                    <label class="field-label">${e?"반려견 이름":"Pet Name"}</label>
                    <input
                      type="text"
                      class="input-box"
                      placeholder="${e?"반려견 이름":"e.g. Jjols, Watson"}"
                      .value=${this.petName}
                      @input=${l=>this.petName=l.target.value}
                    />
                  </div>

                  <div class="form-group">
                    <label class="field-label">${e?"품종":"Breed"}</label>
                    <input
                      type="text"
                      class="input-box"
                      placeholder="${e?"예: 스푸들, 비글 믹스":"e.g. Spoodle, Beagle mix"}"
                      .value=${this.petBreed}
                      @input=${l=>this.petBreed=l.target.value}
                    />
                  </div>

                  <div class="form-group">
                    <label class="field-label">${e?"생년월일 (나이 계산)":"Birthday (for Age calculation)"}</label>
                    <input
                      type="date"
                      class="input-box"
                      .value=${this.petBirthday}
                      @input=${l=>this.petBirthday=l.target.value}
                    />
                    <div style="font-size: 10.5px; font-weight: 700; color: #7D7362; margin-top: 4px;">
                      ${e?"빠른 나이 선택:":"Quick Age Select:"}
                    </div>
                    <div class="age-chips-container">
                      ${[1,2,3,4,5,6,7,8,9,10].map(l=>b`
                          <div class="age-chip" @click=${()=>this.setAgeInYears(l)}>
                            ${e?`${l}살`:`${l} yr${l>1?"s":""}`}
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
              <div class="preview-label">${e?"프로필 사진 / 아바타":"Profile Photo / Avatar"}</div>
            </div>

            <!-- Error Banner -->
            ${this.errorMessage?b`<div class="error-msg">${this.errorMessage}</div>`:""}

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
            ${this.activeMode==="upload"?b`
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
            ${this.activeMode==="preset"?b`
                  <div class="preset-grid">
                    ${n.map(l=>b`
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
                      ${e?"미리보기 적용":"Preview URL"}
                    </button>
                  </div>
                `:""}

            <!-- Action Buttons -->
            <div class="modal-actions">
              <button class="btn-clear" @click=${this.handleClose}>
                ${e?"취소":"Cancel"}
              </button>
              <button class="btn-save" ?disabled=${this.isProcessing} @click=${this.handleSave} style="display:flex; align-items:center; justify-content:center; gap:8px;">
                ${this.isProcessing?b`<div class="btn-spinner" style="width:14px; height:14px; border-width:2px;"></div> <span>${e?"저장 중...":"Saving..."}</span>`:e?"저장하기":"Save Changes"}
              </button>
            </div>
          </div>
        </div>
      </div>
    `}},gi.styles=At`
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
  `,gi);fe([E()],ae.prototype,"unsubscribe",void 0);fe([E()],ae.prototype,"previewUrl",void 0);fe([E()],ae.prototype,"urlInput",void 0);fe([E()],ae.prototype,"activeMode",void 0);fe([E()],ae.prototype,"isProcessing",void 0);fe([E()],ae.prototype,"errorMessage",void 0);fe([E()],ae.prototype,"petName",void 0);fe([E()],ae.prototype,"petBreed",void 0);fe([E()],ae.prototype,"petBirthday",void 0);ae=fe([Mt("dooty-photo-modal")],ae);var Gl=function(h,e,o,n){var a=arguments.length,l=a<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,o):n,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,e,o,n);else for(var p=h.length-1;p>=0;p--)(d=h[p])&&(l=(a<3?d(l):a>3?d(e,o,l):d(e,o))||l);return a>3&&l&&Object.defineProperty(e,o,l),l},mi;let Qs=(mi=class extends Ft{connectedCallback(){super.connectedCallback(),this.unsubscribe=g.subscribe(()=>this.requestUpdate())}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.unsubscribe)==null||e.call(this)}render(){var a;if(!g.petSwitcherOpen)return null;const e=g.currentLocale==="ko",o=g.pets||[],n=(a=g.currentPet)==null?void 0:a.id;return b`
      <div class="modal-backdrop" @click=${()=>g.closePetSwitcher()}>
        <div class="modal-sheet" @click=${l=>l.stopPropagation()}>
          <!-- Header -->
          <div class="sheet-header">
            <div class="sheet-title-area">
              <div class="sheet-title">${e?"누구의 하루인가요?":"Whose day is it?"}</div>
              <div class="sheet-sub">
                ${e?"이름을 누르면 전환됩니다. PAGE를 누르면 프로필로 이동합니다.":"Tap a name to follow them. Tap PAGE for their file."}
              </div>
            </div>
            <div class="close-btn" @click=${()=>g.closePetSwitcher()}>&#10005;</div>
          </div>

          <!-- Pets List -->
          <div class="pets-list">
            ${o.map((l,d)=>{const p=l.id===n,f=l.name||"Pet",m=f.charAt(0).toUpperCase(),y=["#FFCE2E","#BFD0FF","#1FC99B","#E7BFFF","#FFB39A"],x=y[d%y.length],_=(g.events||[]).filter(P=>P.petId===l.id).length,F=(g.events||[]).filter(P=>{if(P.petId!==l.id)return!1;const $=new Date(P.timestamp),N=new Date;return $.getDate()===N.getDate()&&$.getMonth()===N.getMonth()&&$.getFullYear()===N.getFullYear()}).length;return b`
                <div class="pet-card ${p?"active":""}">
                  ${p?b`<div class="active-bar"></div>`:null}
                  <div
                    class="pet-card-main"
                    @click=${()=>{g.selectPetById(l.id)}}
                  >
                    <div class="pet-avatar-circle" style="background: ${x};">${m}</div>
                    <div class="pet-info">
                      <div class="name-row">
                        <div class="pet-name">${f}</div>
                        ${p?b`<div class="on-screen-tag">${e?"화면 표시 중":"ON SCREEN"}</div>`:null}
                      </div>
                      <div class="pet-today-line">
                        ${e?`오늘 ${F}건 · 총 ${_}건의 기록`:`${F} logs today · ${_} total`}
                      </div>
                      <div class="pet-meta-line">
                        ${l.breed||(e?"반려견":"Dog")} ${l.birthday?`· ${l.birthday}`:""}
                      </div>
                    </div>
                  </div>

                  <div
                    class="page-btn"
                    title=${e?`${f} 프로필 보기`:`View ${f}'s profile`}
                    @click=${P=>{P.stopPropagation(),g.selectPetById(l.id),g.closePetSwitcher(),g.setActiveTab("dog")}}
                  >
                    <div class="icon-dog-head">
                      <div class="dog-ear-l"></div>
                      <div class="dog-ear-r"></div>
                      <div class="dog-snout"></div>
                    </div>
                    <div class="page-label">${e?"프로필":"PAGE"}</div>
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
              <div class="add-pet-title">${e?"반려동물 추가":"Add a pet"}</div>
              <div class="add-pet-sub">${e?"이름, 품종, 사진":"Name, breed, and a photo"}</div>
            </div>
          </div>
        </div>
      </div>
    `}},mi.styles=At`
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
      align-items: center;
      animation: tb-scrim 0.2s ease both;
    }

    .modal-sheet {
      position: relative;
      background: #FFFBF2;
      border: 3px solid #17140F;
      border-bottom: none;
      border-radius: 30px 30px 0 0;
      padding: 18px 18px 34px;
      display: flex;
      flex-direction: column;
      gap: 13px;
      width: 100%;
      max-width: 480px;
      box-shadow: 0 -10px 32px rgba(23, 20, 15, 0.25);
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
  `,mi);Qs=Gl([Mt("dooty-pet-switcher")],Qs);var To=function(h,e,o,n){var a=arguments.length,l=a<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,o):n,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,e,o,n);else for(var p=h.length-1;p>=0;p--)(d=h[p])&&(l=(a<3?d(l):a>3?d(e,o,l):d(e,o))||l);return a>3&&l&&Object.defineProperty(e,o,l),l},vi;let Gi=(vi=class extends Ft{constructor(){super(...arguments),this.notes="",this.photoUrl="",this.isSaving=!1}connectedCallback(){super.connectedCallback(),this.unsubscribe=g.subscribe(()=>{this.requestUpdate(),this.syncMaps()})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.unsubscribe)==null||e.call(this),this.destroyLiveMap(),this.destroySummaryMap()}updated(e){super.updated(e),this.syncMaps()}syncMaps(){const e=g.walkView;e==="live"?(this.destroySummaryMap(),setTimeout(()=>this.initOrUpdateLiveMap(),50)):e==="summary"?(this.destroyLiveMap(),setTimeout(()=>this.initOrUpdateSummaryMap(),50)):(this.destroyLiveMap(),this.destroySummaryMap())}destroyLiveMap(){this.liveMap&&(this.liveMap.remove(),this.liveMap=void 0,this.livePolyline=void 0,this.livePolylineShadow=void 0,this.liveStartMarker=void 0,this.liveCurrentMarker=void 0)}destroySummaryMap(){this.summaryMap&&(this.summaryMap.remove(),this.summaryMap=void 0)}initOrUpdateLiveMap(){var d;const e=(d=this.renderRoot)==null?void 0:d.querySelector("#live-leaflet-map");if(!e)return;const o=g.activeWalk;if(!o)return;const n=o.route||[],a=o.currentLat??(n.length>0?n[n.length-1][0]:37.5665),l=o.currentLng??(n.length>0?n[n.length-1][1]:126.978);if(this.liveMap){if(this.liveMap.invalidateSize(),this.livePolyline&&this.livePolylineShadow&&(this.livePolyline.setLatLngs(n),this.livePolylineShadow.setLatLngs(n)),o.startLat!==void 0&&o.startLng!==void 0)if(this.liveStartMarker)this.liveStartMarker.setLatLng([o.startLat,o.startLng]);else{const f=X.divIcon({className:"dooty-live-start-pin",html:`
            <div style="transform: translate(-50%, -50%);">
              <div style="
                background: #FFCE2E;
                border: 3px solid #17140F;
                border-radius: 50%;
                width: 22px;
                height: 22px;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 2px 2px 0 #17140F;
                font-size: 11px;
                font-weight: 800;
                color: #17140F;
              ">
                S
              </div>
            </div>
          `,iconSize:[0,0]});this.liveStartMarker=X.marker([o.startLat,o.startLng],{icon:f}).addTo(this.liveMap)}this.liveCurrentMarker&&this.liveCurrentMarker.setLatLng([a,l]),o.currentLat!==void 0&&o.currentLng!==void 0&&this.liveMap.panTo([o.currentLat,o.currentLng],{animate:!0,duration:.8})}else{this.liveMap=X.map(e,{zoomControl:!1,attributionControl:!1}).setView([a,l],17),X.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png",{maxZoom:19,subdomains:"abcd"}).addTo(this.liveMap),this.livePolylineShadow=X.polyline(n,{color:"#17140F",weight:9,lineCap:"round",lineJoin:"round",opacity:.9}).addTo(this.liveMap),this.livePolyline=X.polyline(n,{color:"#FF5A3C",weight:5,lineCap:"round",lineJoin:"round",opacity:1}).addTo(this.liveMap);const f=X.divIcon({className:"dooty-live-start-pin",html:`
        <div style="transform: translate(-50%, -50%);">
          <div style="
            background: #FFCE2E;
            border: 3px solid #17140F;
            border-radius: 50%;
            width: 22px;
            height: 22px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 2px 2px 0 #17140F;
            font-size: 11px;
            font-weight: 800;
            color: #17140F;
          ">
            S
          </div>
        </div>
      `,iconSize:[0,0]});o.startLat!==void 0&&o.startLng!==void 0&&(this.liveStartMarker=X.marker([o.startLat,o.startLng],{icon:f}).addTo(this.liveMap));const y=X.divIcon({className:"dooty-live-current-pin",html:`
        <div style="position: relative; transform: translate(-50%, -50%); width: 28px; height: 28px; display: flex; align-items: center; justify-content: center;">
          <div style="
            position: absolute;
            width: 28px;
            height: 28px;
            border-radius: 50%;
            background: rgba(31, 201, 155, 0.4);
            animation: tb-ping 1.5s ease-out infinite;
          "></div>
          <div style="
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: #1FC99B;
            border: 3px solid #17140F;
            box-shadow: 2px 2px 0 #17140F;
            position: relative;
            z-index: 2;
          "></div>
        </div>
      `,iconSize:[0,0]});this.liveCurrentMarker=X.marker([a,l],{icon:y}).addTo(this.liveMap),setTimeout(()=>{var x;return(x=this.liveMap)==null?void 0:x.invalidateSize()},150)}}handleRecenterLive(){if(!this.liveMap||!g.activeWalk)return;const e=g.activeWalk,o=e.currentLat??(e.route.length>0?e.route[e.route.length-1][0]:void 0),n=e.currentLng??(e.route.length>0?e.route[e.route.length-1][1]:void 0);o!==void 0&&n!==void 0&&this.liveMap.flyTo([o,n],17,{animate:!0,duration:.8})}initOrUpdateSummaryMap(){var l;const e=(l=this.renderRoot)==null?void 0:l.querySelector("#summary-leaflet-map");if(!e)return;const o=g.walkSummaryData;if(!o)return;const n=o.route||[],a=o.startLat!==void 0&&o.startLng!==void 0?[o.startLat,o.startLng]:n.length>0?[n[0][0],n[0][1]]:[37.5665,126.978];if(this.summaryMap)this.summaryMap.invalidateSize();else{if(this.summaryMap=X.map(e,{zoomControl:!1,attributionControl:!1,dragging:!0,touchZoom:!0,scrollWheelZoom:!1}).setView(a,15),X.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png",{maxZoom:19,subdomains:"abcd"}).addTo(this.summaryMap),n.length>=2){X.polyline(n,{color:"#17140F",weight:8,lineCap:"round",lineJoin:"round",opacity:.9}).addTo(this.summaryMap);const f=X.polyline(n,{color:"#1FC99B",weight:4.5,lineCap:"round",lineJoin:"round",opacity:1}).addTo(this.summaryMap);this.summaryMap.fitBounds(f.getBounds(),{padding:[35,35]})}const d=o.startLat!==void 0&&o.startLng!==void 0?[o.startLat,o.startLng]:n.length>0?[n[0][0],n[0][1]]:void 0;if(d){const f=X.divIcon({className:"dooty-summary-start-pin",html:`
            <div style="transform: translate(-50%, -50%);">
              <div style="
                background: #FFCE2E;
                border: 2.5px solid #17140F;
                border-radius: 50%;
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 2px 2px 0 #17140F;
                font-size: 11px;
                font-weight: 800;
                color: #17140F;
              ">
                📍
              </div>
            </div>
          `,iconSize:[0,0]});X.marker(d,{icon:f}).addTo(this.summaryMap)}const p=o.endLat!==void 0&&o.endLng!==void 0?[o.endLat,o.endLng]:n.length>1?[n[n.length-1][0],n[n.length-1][1]]:void 0;if(p){const f=X.divIcon({className:"dooty-summary-end-pin",html:`
            <div style="transform: translate(-50%, -50%);">
              <div style="
                background: #FF5A3C;
                border: 2.5px solid #17140F;
                border-radius: 50%;
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 2px 2px 0 #17140F;
                font-size: 11px;
                font-weight: 800;
                color: #FFF;
              ">
                🏁
              </div>
            </div>
          `,iconSize:[0,0]});X.marker(p,{icon:f}).addTo(this.summaryMap)}setTimeout(()=>{var f;return(f=this.summaryMap)==null?void 0:f.invalidateSize()},150)}}formatSec(e){const o=Math.floor(e/60),n=e%60;return`${o}:${String(n).padStart(2,"0")}`}render(){var m;const e=g.currentLocale==="ko",o=g.activeWalk,n=g.walkView,a=g.getWalkSeconds(),l=this.formatSec(a),d=g.getWalkDistanceKm(),p=g.getWalkPace(),f=(o==null?void 0:o.pausedAt)!==null;return b`
      <!-- Inject Leaflet core CSS -->
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />

      <!-- 1. Floating Banner above Dock (Visible when walk is running in background) -->
      ${o&&n===null?b`
            <div class="walk-banner" @click=${()=>g.expandWalk()}>
              <div class="ping-wrap">
                <div class="ping-circle"></div>
                <div class="ping-dot"></div>
              </div>
              <div class="banner-label">${e?"실시간 산책":"LIVE WALK"}</div>
              <div style="flex: 1;"></div>
              <div class="banner-time">${l}</div>
              <div class="banner-divider"></div>
              <div class="banner-km">${d} km</div>
            </div>
          `:null}

      <!-- 2. Fullscreen Live Walk Screen -->
      ${o&&n==="live"?b`
            <div class="live-fullscreen">
              <!-- Top Real Leaflet Map Area with GPS Trace -->
              <div class="live-map-area">
                <div id="live-leaflet-map"></div>

                <div class="minimize-btn" @click=${()=>g.minimizeWalk()}>&#8595;</div>
                <div class="live-status-pill">
                  <div
                    style="width:9px; height:9px; border-radius:50%; background:#1FC99B; animation: tb-ping 1.5s ease-out infinite;"
                  ></div>
                  <div style="font-size:10px; font-weight:800; color:#FFF; letter-spacing:1.2px;">
                    ${e?"실시간 산책":"LIVE WALK"}
                  </div>
                </div>

                <button class="recenter-fab" @click=${()=>this.handleRecenterLive()}>
                  <span>🎯</span>
                  <span>${e?"내 위치":"Recenter"}</span>
                </button>
              </div>

              <!-- Bottom Controls Panel -->
              <div class="live-controls-panel">
                <div class="stat-row">
                  <div style="flex: 1; min-width: 0;">
                    <div style="font-size: 9.5px; font-weight: 800; letter-spacing: 1.3px; color: #9A9080; text-transform: uppercase;">
                      ${e?"경과 시간":"Elapsed Time"}
                    </div>
                    <div class="main-timer">${l}</div>
                  </div>
                  <div style="text-align: right; flex: none;">
                    <div style="font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif); font-weight: 800; font-size: 26px; color: #17140F; line-height: 1; letter-spacing: -1px;">
                      ${d}
                    </div>
                    <div style="font-size: 9.5px; font-weight: 800; letter-spacing: 1.2px; color: #9A9080;">
                      KM · ${p}/KM
                    </div>
                  </div>
                </div>

                <div class="btn-row">
                  <div class="pause-btn" @click=${()=>g.pauseLiveWalk()}>
                    ${f?e?"계속하기":"Resume":e?"일시정지":"Pause"}
                  </div>
                  <div class="end-btn" @click=${()=>g.endLiveWalk()}>
                    ${e?"산책 종료":"End walk"}
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
                    <div style="font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif); font-weight: 800; font-size: 23px; color: #17140F; letter-spacing: -0.8px; line-height: 1.1;">
                      ${e?"집에 도착하신 것 같아요":"Looks like you're home"}
                    </div>
                    <div style="font-size: 12.5px; font-weight: 700; color: #6A6152; margin-top: 2px;">
                      ${e?"지금 산책을 끝낼까요?":"We can end the walk now."}
                    </div>
                  </div>
                </div>

                <div style="background:#FFF; border:3px solid #17140F; border-radius:20px; padding:14px 16px; display:flex; align-items:center; gap:14px; box-shadow:3px 3px 0 #17140F;">
                  <div style="flex: 1;">
                    <div style="font-size:9.5px; font-weight:800; letter-spacing:1.2px; color:#9A9080; text-transform:uppercase;">
                      ${e?"소요 시간":"DURATION"}
                    </div>
                    <div style="font-family:var(--font-heading, 'Bricolage Grotesque', sans-serif); font-weight:800; font-size:22px; color:#17140F; letter-spacing:-0.8px; line-height:1.2;">
                      ${l}
                    </div>
                  </div>
                  <div style="width: 2.5px; align-self: stretch; background: #F0E7D3;"></div>
                  <div style="flex: 1;">
                    <div style="font-size:9.5px; font-weight:800; letter-spacing:1.2px; color:#9A9080; text-transform:uppercase;">
                      ${e?"거리":"DISTANCE"}
                    </div>
                    <div style="font-family:var(--font-heading, 'Bricolage Grotesque', sans-serif); font-weight:800; font-size:22px; color:#17140F; letter-spacing:-0.8px; line-height:1.2;">
                      ${d} km
                    </div>
                  </div>
                </div>

                <div class="btn-row">
                  <div class="pause-btn" style="flex: 1; width: auto;" @click=${()=>g.keepWalking()}>
                    ${e?"아직 걷는 중":"Still walking"}
                  </div>
                  <div
                    class="end-btn"
                    style="flex: 1; background: #1FC99B;"
                    @click=${()=>g.endLiveWalk()}
                  >
                    ${e?"네, 종료할게요":"Yes, end it"}
                  </div>
                </div>
              </div>
            </div>
          `:null}

      <!-- 4. Post Walk Summary View -->
      ${n==="summary"&&g.walkSummaryData?b`
            <div class="summary-fullscreen">
              <div class="summary-scroll">
                <div>
                  <div class="summary-title">
                    ${e?`수고했어요, ${g.walkSummaryData.petNames.join(" & ")}!`:`Good effort, ${g.walkSummaryData.petNames.join(" & ")}`}
                  </div>
                  <div class="summary-sub">
                    ${g.walkSummaryData.startTime} ~ ${g.walkSummaryData.endTime} ·
                    ${e?"저장하기 전에 확인해 주세요.":"check it over before saving."}
                  </div>
                </div>

                <!-- Real Leaflet Map Preview Box -->
                <div class="map-preview-box">
                  <div id="summary-leaflet-map"></div>
                </div>

                <!-- 3 KPI Tiles -->
                <div class="kpis-row">
                  <div class="kpi-tile" style="background: #FFCE2E;">
                    <div class="kpi-val">${Math.max(1,Math.round(g.walkSummaryData.durationSec/60))} min</div>
                    <div class="kpi-lbl">${e?"시간":"Duration"}</div>
                  </div>
                  <div class="kpi-tile" style="background: #1FC99B;">
                    <div class="kpi-val">${g.walkSummaryData.distanceKm} km</div>
                    <div class="kpi-lbl">${e?"거리":"Distance"}</div>
                  </div>
                  <div class="kpi-tile" style="background: #BFD0FF;">
                    <div class="kpi-val">${g.walkSummaryData.pace}</div>
                    <div class="kpi-lbl">${e?"평균 페이스":"Avg Pace"}</div>
                  </div>
                </div>

                <!-- Details & Notes Box -->
                <div class="details-box">
                  <div class="detail-item">
                    <div class="detail-lbl">${e?"참여":"WHO"}</div>
                    <div class="detail-val">${g.walkSummaryData.petNames.join(" & ")}</div>
                  </div>
                  ${g.walkSummaryData.startLocationName?b`
                        <div class="detail-item">
                          <div class="detail-lbl">${e?"출발지":"START"}</div>
                          <div class="detail-val">${g.walkSummaryData.startLocationName}</div>
                        </div>
                      `:null}
                  ${g.walkSummaryData.endLocationName?b`
                        <div class="detail-item">
                          <div class="detail-lbl">${e?"도착지":"END"}</div>
                          <div class="detail-val">${g.walkSummaryData.endLocationName}</div>
                        </div>
                      `:null}
                  <div class="detail-item">
                    <div class="detail-lbl">${e?"작성자":"LOGGED BY"}</div>
                    <div class="detail-val">${((m=g.currentUser)==null?void 0:m.displayName)||"Me"}</div>
                  </div>
                  <div style="padding: 14px 15px;">
                    <div style="font-size: 9.5px; font-weight: 800; letter-spacing: 1.2px; color: #9A9080; text-transform: uppercase;">
                      ${e?"메모":"NOTES"}
                    </div>
                    <input
                      type="text"
                      placeholder=${e?"산책 중 특이사항을 적어주세요...":"Met three dogs, had a blast..."}
                      .value=${this.notes}
                      @input=${y=>this.notes=y.target.value}
                      style="width:100%; border:none; background:none; font-size:14px; font-weight:700; color:#17140F; margin-top:5px; outline:none;"
                    />
                  </div>
                </div>

                <div class="discard-link" @click=${()=>g.discardLiveWalk()}>
                  ${e?"이 산책 기록 취소":"Discard this walk"}
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
                        <span>${e?"산책 저장 중...":"Saving walk..."}</span>
                      `:e?"산책 저장":"Save walk"}
                </div>
              </div>
            </div>
          `:null}
    `}async handleSave(){if(!this.isSaving){this.isSaving=!0;try{const e=g.currentLocale==="ko",o=g.walkSummaryData,n=(o==null?void 0:o.petNames.join(" & "))||(e?"반려견":"Pet"),a=o!=null&&o.distanceKm?`${o.distanceKm} km`:"Walk";await g.saveLiveWalk(this.notes,this.photoUrl),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:e?"산책 기록 완료!":"Walk saved!",sub:e?`${n}와(과) 함께한 산책 (${a})`:`${n}'s walk logged (${a})`}}))}catch(e){console.error("Failed to save walk:",e)}finally{this.isSaving=!1}}}},vi.styles=At`
    :host {
      display: contents;
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
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
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

    #live-leaflet-map {
      width: 100%;
      height: 100%;
      z-index: 1;
      background: #E5EAD9;
    }

    .minimize-btn {
      position: absolute;
      z-index: 500;
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
      z-index: 500;
      right: 16px;
      top: 58px;
      background: #17140F;
      border-radius: 13px;
      padding: 8px 12px;
      display: flex;
      align-items: center;
      gap: 7px;
      box-shadow: 2px 2px 0 rgba(0,0,0,0.2);
    }

    .recenter-fab {
      position: absolute;
      z-index: 500;
      right: 16px;
      bottom: 16px;
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
      transition: transform 0.08s ease, box-shadow 0.08s ease;
    }

    .recenter-fab:active {
      transform: translate(1px, 1px);
      box-shadow: 1px 1px 0 #17140F;
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
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
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
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
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
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
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
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
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
      height: 220px;
      border: 3px solid #17140F;
      border-radius: 22px;
      overflow: hidden;
      background: #E3E8D8;
      box-shadow: 4px 4px 0 #17140F;
    }

    #summary-leaflet-map {
      width: 100%;
      height: 100%;
      z-index: 1;
      background: #E5EAD9;
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
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
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

    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `,vi);To([E()],Gi.prototype,"notes",void 0);To([E()],Gi.prototype,"photoUrl",void 0);To([E()],Gi.prototype,"isSaving",void 0);Gi=To([Mt("dooty-walk")],Gi);var Ot=function(h,e,o,n){var a=arguments.length,l=a<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,o):n,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,e,o,n);else for(var p=h.length-1;p>=0;p--)(d=h[p])&&(l=(a<3?d(l):a>3?d(e,o,l):d(e,o))||l);return a>3&&l&&Object.defineProperty(e,o,l),l},xi;let zt=(xi=class extends Ft{constructor(){super(...arguments),this.view="signin",this.email="",this.password="",this.showPassword=!1,this.displayName="",this.userAvatar="",this.dogName="Nacho",this.dogBreed="",this.dogBirthday="",this.householdName="",this.dogAvatar="",this.setupSize="M",this.trackingPrefs={poop:!0,pee:!0,vomit:!0,meds:!0,weight:!0,walk:!0,vet:!1,symptom:!1},this.joinCode="",this.joinRole="Dan the walker",this.errorMessage="",this.isSubmitting=!1}connectedCallback(){super.connectedCallback(),this.unsubscribe=g.subscribe(()=>{this.view=g.authView,this.requestUpdate()})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.unsubscribe)==null||e.call(this)}setView(e){this.view=e,g.setAuthView(e),this.errorMessage=""}calculateStrength(e){const o=g.t.auth.signupStep1;return!e||e.length<6?{label:o.weak,width:"25%",color:"#FF5A3C"}:e.length>=10&&/[A-Z]/.test(e)&&/[0-9]/.test(e)?{label:o.strong,width:"100%",color:"#1FC99B"}:e.length>=8?{label:o.good,width:"65%",color:"#FFCE2E"}:{label:o.weak,width:"35%",color:"#FF5A3C"}}async handleLogin(e){var n;e&&e.preventDefault(),this.errorMessage="";const o=g.t.auth.errors;if(!this.email.trim()){this.errorMessage=o.emailRequired;return}if(!this.password){this.errorMessage=o.passwordRequired;return}this.isSubmitting=!0;try{await g.signIn({email:this.email.trim(),password:this.password}),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:g.currentLocale==="ko"?"환영합니다! 👋":"Welcome back! 👋",sub:((n=g.currentHousehold)==null?void 0:n.name)||"Household"}}))}catch(a){this.errorMessage=a.message||o.logInFailed}finally{this.isSubmitting=!1}}handleGoToStep2(e){e&&e.preventDefault(),this.errorMessage="";const o=g.t.auth.errors;if(!this.displayName.trim()){this.errorMessage=o.yourNameRequired;return}if(!this.email.trim()){this.errorMessage=o.emailRequired;return}if(!this.password||this.password.length<6){this.errorMessage=o.passwordTooShort;return}this.setView("dogsetup")}async handleFinishSetup(e){e&&e.preventDefault(),this.errorMessage="";const o=g.t.auth.errors;if(!this.dogName.trim()){this.errorMessage=o.petNameRequired;return}const n=this.householdName.trim()||`${this.dogName.trim()} Household`;this.isSubmitting=!0;try{await g.signUp({email:this.email.trim(),password:this.password,displayName:this.displayName.trim(),mode:"create",householdName:n,pet:{name:this.dogName.trim(),species:"dog",breed:this.dogBreed.trim(),birthday:this.dogBirthday,size:this.setupSize,avatarUrl:this.dogAvatar},trackingPreferences:this.trackingPrefs}),Object.entries(this.trackingPrefs).forEach(([a,l])=>{g.setTrackingPreference(a,l)}),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:g.currentLocale==="ko"?"준비 완료! 🎉":"All set! 🎉",sub:g.currentLocale==="ko"?"다음 번 산책 때 주황색 버튼을 눌러보세요.":"Tap the orange button the next time he goes."}}))}catch(a){this.errorMessage=a.message||o.signUpFailed}finally{this.isSubmitting=!1}}handleGoJoinDetails(e){e&&e.preventDefault(),this.errorMessage="";const o=g.t.auth.errors;if(!this.joinCode.trim()||this.joinCode.trim().length<4){this.errorMessage=o.inviteCodeRequired;return}this.setView("joindetails")}async handleJoinSubmit(e){var n;e&&e.preventDefault(),this.errorMessage="";const o=g.t.auth.errors;if(!this.displayName.trim()){this.errorMessage=o.yourNameRequired;return}if(!this.email.trim()){this.errorMessage=o.emailRequired;return}if(!this.password||this.password.length<6){this.errorMessage=o.passwordTooShort;return}this.isSubmitting=!0;try{await g.signUp({email:this.email.trim(),password:this.password,displayName:this.displayName.trim(),mode:"join",inviteCode:this.joinCode.trim().toUpperCase(),role:this.joinRole}),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:g.currentLocale==="ko"?`${this.joinRole}님, 환영합니다! 🎉`:`You're in, ${this.joinRole}! 🎉`,sub:((n=g.currentHousehold)==null?void 0:n.name)||"Household"}}))}catch(a){this.errorMessage=a.message||o.joinFailed}finally{this.isSubmitting=!1}}render(){const e=g.t.auth;if(this.view==="signin")return b`
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

          ${this.errorMessage?b`<div class="error-banner">⚠️ ${this.errorMessage}</div>`:null}

          <form class="card" @submit=${o=>this.handleLogin(o)}>
            <div>
              <label class="field-label">${e.emailLabel}</label>
              <input
                type="email"
                class="input-box"
                placeholder="${e.emailPlaceholder}"
                .value=${this.email}
                @input=${o=>this.email=o.target.value}
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
                  @input=${o=>this.password=o.target.value}
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
              ${this.isSubmitting?b`<span class="btn-spinner"></span> ${g.currentLocale==="ko"?"로그인 중...":"Logging in..."}`:e.logInBtn}
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
      `;if(this.view==="signup"){const o=e.signupStep1,n=this.calculateStrength(this.password);return b`
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

          <form class="card" @submit=${a=>this.handleGoToStep2(a)}>
            <div>
              <label class="field-label">${o.yourName}</label>
              <input
                type="text"
                class="input-box"
                placeholder="${o.yourNamePlaceholder}"
                .value=${this.displayName}
                @input=${a=>this.displayName=a.target.value}
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
                @input=${a=>this.email=a.target.value}
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
                  @input=${a=>this.password=a.target.value}
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
                    style="width: ${n.width}; background: ${n.color};"
                  ></div>
                </div>
                <div class="strength-text">${n.label}</div>
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
      `}if(this.view==="dogsetup"){const o=e.signupStep2,n=["S","M","L","XL"];return b`
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

          <form class="card" @submit=${a=>this.handleFinishSetup(a)}>
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
                  @input=${a=>this.dogName=a.target.value}
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
                @input=${a=>this.dogBreed=a.target.value}
              />
            </div>

            <div>
              <label class="field-label">${g.currentLocale==="ko"?"생일 또는 나이":"Birthday or Age"}</label>
              <input
                type="date"
                class="input-box"
                .value=${this.dogBirthday}
                @input=${a=>this.dogBirthday=a.target.value}
              />
              <div class="age-chips-row">
                ${[1,2,3,4,5,6,7,8].map(a=>b`
                    <div
                      class="age-chip"
                      @click=${()=>{const l=new Date;l.setFullYear(l.getFullYear()-a),this.dogBirthday=l.toISOString().slice(0,10)}}
                    >
                      ${g.currentLocale==="ko"?`${a}살`:`${a} yr${a>1?"s":""}`}
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
                @input=${a=>this.householdName=a.target.value}
              />
              <div style="font-size: 11px; font-weight: 600; color: #9A9080; margin-top: 6px; line-height: 1.4;">
                ${o.householdHelp}
              </div>
            </div>

            <div>
              <label class="field-label">${o.size}</label>
              <div class="size-grid">
                ${n.map(a=>{const l=o.sizes[a],d=this.setupSize===a;return b`
                    <div
                      class="size-tile ${d?"active":""}"
                      @click=${()=>this.setupSize=a}
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
                ${Object.entries(o.trackingOptions).map(([a,l])=>{const d=!!this.trackingPrefs[a];return b`
                    <div
                      class="track-chip ${d?"active":""}"
                      @click=${()=>{this.trackingPrefs={...this.trackingPrefs,[a]:!this.trackingPrefs[a]}}}
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
      `}if(this.view==="join"){const o=e.joinStep1,n=(this.joinCode.toUpperCase()+"      ").slice(0,6).split("");return b`
        <div class="view-join">
          <div class="back-btn" @click=${()=>this.setView("signin")}>
            ‹ ${o.back}
          </div>

          <div>
            <div class="section-headline">${o.title}</div>
            <div class="section-subtext-mint">${o.subtitle}</div>
          </div>

          ${this.errorMessage?b`<div class="error-banner">⚠️ ${this.errorMessage}</div>`:null}

          <form class="card" @submit=${a=>this.handleGoJoinDetails(a)}>
            <div style="font-size: 10.5px; font-weight: 800; letter-spacing: 1.4px; color: #9A9080; text-transform: uppercase; text-align: center;">
              ${o.enterCode}
            </div>

            <div class="code-boxes-row">
              ${n.map(a=>b`
                <div class="code-box ${a.trim()?"filled":""}">
                  ${a.trim()}
                </div>
              `)}
              <input
                type="text"
                maxlength="6"
                class="hidden-code-input"
                .value=${this.joinCode}
                @input=${a=>this.joinCode=a.target.value.toUpperCase()}
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
              ${o.perks.map(a=>b`
                <div class="perk-item">
                  <div class="perk-badge"></div>
                  <div style="font-size: 12.5px; font-weight: 600; color: #CFF0E6; line-height: 1.4; flex: 1;">
                    ${a}
                  </div>
                </div>
              `)}
            </div>
          </div>
        </div>
      `}if(this.view==="joindetails"){const o=e.joinStep2,n=[this.displayName||"Dan",`${this.displayName||"Dan"} the walker`,`${this.displayName?this.displayName+" W.":"Dan W."}`,"The walker"];return b`
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

          <form class="card" @submit=${a=>this.handleJoinSubmit(a)}>
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
                  @input=${a=>this.displayName=a.target.value}
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
                @input=${a=>this.email=a.target.value}
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
                  @input=${a=>this.password=a.target.value}
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
              <label class="field-label">${o.howTheySeeYou}</label>
              <div class="role-chips-row">
                ${n.map(a=>{const l=this.joinRole===a;return b`
                    <div
                      class="role-chip ${l?"active":""}"
                      @click=${()=>this.joinRole=a}
                    >
                      <span>${a}</span>
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
      `}return b``}},xi.styles=At`
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
  `,xi);Ot([E()],zt.prototype,"view",void 0);Ot([E()],zt.prototype,"email",void 0);Ot([E()],zt.prototype,"password",void 0);Ot([E()],zt.prototype,"showPassword",void 0);Ot([E()],zt.prototype,"displayName",void 0);Ot([E()],zt.prototype,"userAvatar",void 0);Ot([E()],zt.prototype,"dogName",void 0);Ot([E()],zt.prototype,"dogBreed",void 0);Ot([E()],zt.prototype,"dogBirthday",void 0);Ot([E()],zt.prototype,"householdName",void 0);Ot([E()],zt.prototype,"dogAvatar",void 0);Ot([E()],zt.prototype,"setupSize",void 0);Ot([E()],zt.prototype,"trackingPrefs",void 0);Ot([E()],zt.prototype,"joinCode",void 0);Ot([E()],zt.prototype,"joinRole",void 0);Ot([E()],zt.prototype,"errorMessage",void 0);Ot([E()],zt.prototype,"isSubmitting",void 0);zt=Ot([Mt("dooty-auth")],zt);var Yi=function(h,e,o,n){var a=arguments.length,l=a<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,o):n,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,e,o,n);else for(var p=h.length-1;p>=0;p--)(d=h[p])&&(l=(a<3?d(l):a>3?d(e,o,l):d(e,o))||l);return a>3&&l&&Object.defineProperty(e,o,l),l},bi;let ki=(bi=class extends Ft{constructor(){super(...arguments),this.name="",this.dose="",this.every=30,this.isClosing=!1}connectedCallback(){super.connectedCallback(),this.unsubscribe=g.subscribe(()=>this.requestUpdate())}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.unsubscribe)==null||e.call(this)}closeDrawer(){this.isClosing||(this.isClosing=!0,setTimeout(()=>{this.isClosing=!1,g.closeTreatmentsDrawer()},190))}handleGive(e){const o=g.giveTreatment(e);o.title&&this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:o})),this.closeDrawer()}handleDelete(e){const o=g.removeTreatment(e);o.title&&this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:o})),this.requestUpdate()}handleAdd(){if(!this.name.trim())return;const e=g.addTreatment({name:this.name,dose:this.dose,every:this.every});e.title&&this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:e})),this.name="",this.dose="",this.every=30,this.closeDrawer()}render(){if(!g.treatmentsDrawerOpen&&!this.isClosing)return null;const e=g.currentLocale==="ko",o=g.treatments.slice().sort((d,p)=>d.due-p.due),n=o.length,a=this.name.trim().length>0,l=[{name:e?"매주":"Weekly",value:7},{name:e?"매월":"Monthly",value:30},{name:e?"3개월마다":"Every 3 months",value:90},{name:e?"6개월마다":"Every 6 months",value:180},{name:e?"매년":"Yearly",value:365}];return b`
      <div
        class="modal-backdrop ${this.isClosing?"closing":""}"
        @click=${()=>this.closeDrawer()}
      >
        <div
          class="modal-sheet ${this.isClosing?"closing":""}"
          @click=${d=>d.stopPropagation()}
        >
          <!-- Drag Handle -->
          <div class="drag-handle"></div>

          <!-- Header -->
          <div class="sheet-header">
            <div class="header-info">
              <div class="sheet-title">
                ${e?"투약 및 예방 관리":"Treatments"}
              </div>
              <div class="sheet-sub">
                ${e?`반복 일정 ${n}건 등록됨`:`${n} ${n===1?"treatment":"treatments"} on a repeating schedule.`}
              </div>
            </div>
            <div class="close-btn" @click=${()=>this.closeDrawer()}>
              &#10005;
            </div>
          </div>

          <!-- Treatments List -->
          <div class="treatment-list">
            ${o.map(d=>{const p=g.getTreatmentSkin(d.due),f=g.formatTreatmentLeft(d.due),m=g.formatTreatmentDueDate(d.due),y=g.getTreatmentEveryLabel(d.every),x=d.name.trim().charAt(0).toUpperCase()||"M";return b`
                <div
                  class="treatment-card"
                  style="background: ${p.bg};"
                  @click=${()=>this.handleGive(d.id)}
                >
                  <div
                    class="card-chip ${p.anim!=="none"?"animated":""}"
                    style="background: ${p.chip};"
                  >
                    ${x}
                  </div>
                  <div class="card-body">
                    <div class="card-name" style="color: ${p.fg};">
                      ${d.name}
                    </div>
                    <div class="card-detail" style="color: ${p.sub};">
                      ${d.dose} · ${e?`${y}마다`:`every ${y}`}
                    </div>
                  </div>
                  <div class="card-right">
                    <div style="text-align: right;">
                      <div class="card-left-time" style="color: ${p.fg};">
                        ${f}
                      </div>
                      <div class="card-date" style="color: ${p.sub};">
                        ${m}
                      </div>
                    </div>
                    <button
                      class="card-del-btn"
                      style="color: ${p.fg};"
                      @click=${_=>{_.stopPropagation(),this.handleDelete(d.id)}}
                      title="${e?"일정 삭제":"Remove schedule"}"
                    >
                      &#10005;
                    </button>
                  </div>
                </div>
              `})}
          </div>

          <div class="hint-label">
            ${e?"탭하여 투약을 완료 상태로 기록하세요.":"Tap one to mark it given."}
          </div>

          <div class="divider"></div>

          <!-- Add Another Section -->
          <div>
            <div class="section-title">${e?"일정 추가":"Add another"}</div>
            <div class="input-group">
              <div class="input-box">
                <div class="input-label">${e?"약 / 치료 이름":"Name"}</div>
                <input
                  class="text-input"
                  type="text"
                  .value=${this.name}
                  @input=${d=>this.name=d.target.value}
                  placeholder="${e?"심장사상충약, 구충제 등":"Flea & tick"}"
                />
              </div>
              <div class="input-box">
                <div class="input-label">
                  ${e?"복용량 또는 브랜드":"Dose or brand"}
                </div>
                <input
                  class="text-input"
                  type="text"
                  .value=${this.dose}
                  @input=${d=>this.dose=d.target.value}
                  placeholder="${e?"선택 사항 (예: 1정, 바르는 약)":"optional"}"
                />
              </div>
            </div>
          </div>

          <!-- How Often Frequency -->
          <div>
            <div class="section-title">${e?"반복 주기":"How often"}</div>
            <div class="frequency-grid">
              ${l.map(d=>b`
                  <div
                    class="freq-pill ${this.every===d.value?"active":""}"
                    @click=${()=>this.every=d.value}
                  >
                    ${d.name}
                  </div>
                `)}
            </div>
          </div>

          <!-- Submit Button -->
          <div
            class="add-action-btn ${a?"ready":""}"
            @click=${()=>this.handleAdd()}
          >
            ${e?"일정 등록하기":"Add treatment"}
          </div>
        </div>
      </div>
    `}},bi.styles=At`
    :host {
      display: block;
    }

    .modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(23, 20, 15, 0.5);
      z-index: 195;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      animation: tb-scrim 0.24s ease-out both;
    }

    .modal-backdrop.closing {
      animation: tb-scrimout 0.19s ease-in both;
    }

    .modal-sheet {
      position: relative;
      background: #FFFBF2;
      border: 3px solid #17140F;
      border-bottom: none;
      border-radius: 30px 30px 0 0;
      padding: 18px 18px 28px;
      display: flex;
      flex-direction: column;
      gap: 14px;
      width: 100%;
      max-width: 480px;
      box-shadow: 0 -10px 32px rgba(23, 20, 15, 0.25);
      max-height: 88vh;
      overflow-y: auto;
      box-sizing: border-box;
      animation: tb-sheet 0.3s cubic-bezier(0.2, 0.85, 0.25, 1) both;
    }

    .modal-sheet.closing {
      animation: tb-sheetout 0.19s cubic-bezier(0.4, 0, 1, 1) both;
    }

    .drag-handle {
      width: 52px;
      height: 5px;
      border-radius: 5px;
      background: #17140F;
      margin: 0 auto;
      flex: none;
    }

    .sheet-header {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .header-info {
      flex: 1;
      min-width: 0;
    }

    .sheet-title {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 22px;
      color: #17140F;
      letter-spacing: -0.7px;
      line-height: 1.15;
    }

    .sheet-sub {
      font-size: 12px;
      font-weight: 600;
      color: #6A6152;
      margin-top: 1px;
    }

    .close-btn {
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
      transition: transform 0.13s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.13s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .close-btn:active {
      transform: translate(1px, 1px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .treatment-list {
      display: flex;
      flex-direction: column;
      gap: 9px;
    }

    .treatment-card {
      display: flex;
      align-items: center;
      gap: 11px;
      border: 3px solid #17140F;
      border-radius: 18px;
      padding: 11px 13px;
      cursor: pointer;
      box-shadow: 3px 3px 0 #17140F;
      user-select: none;
      transition: transform 0.13s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.13s cubic-bezier(0.23, 1, 0.32, 1), background-color 0.16s ease;
    }

    .treatment-card:hover {
      transform: translate(-1px, -1px);
      box-shadow: 5px 5px 0 #17140F;
    }

    .treatment-card:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .card-chip {
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

    .card-chip.animated {
      animation: tb-nudge 3s ease-in-out infinite;
    }

    .card-body {
      flex: 1;
      min-width: 0;
    }

    .card-name {
      font-size: 14px;
      font-weight: 800;
      line-height: 1.2;
    }

    .card-detail {
      font-size: 11.5px;
      font-weight: 600;
      margin-top: 1px;
      line-height: 1.2;
    }

    .card-right {
      flex: none;
      display: flex;
      align-items: center;
      gap: 9px;
    }

    .card-left-time {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 15px;
      line-height: 1;
      letter-spacing: -0.4px;
    }

    .card-date {
      font-size: 10.5px;
      font-weight: 700;
      margin-top: 3px;
    }

    .card-del-btn {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      border: 1.5px solid currentColor;
      opacity: 0.35;
      background: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
      font-weight: 800;
      cursor: pointer;
      flex: none;
      padding: 0;
      user-select: none;
      transition: opacity 0.15s ease, transform 0.13s ease;
    }

    .card-del-btn:hover {
      opacity: 0.95;
      transform: scale(1.15);
    }

    .hint-label {
      font-size: 11px;
      font-weight: 700;
      color: #9A9080;
      text-align: center;
    }

    .divider {
      height: 2.5px;
      background: #EFE6D2;
      border-radius: 3px;
    }

    .section-title {
      font-size: 14px;
      font-weight: 800;
      color: #17140F;
      margin-bottom: 10px;
    }

    .input-group {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .input-box {
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 16px;
      padding: 9px 13px;
      box-shadow: 2px 2px 0 #17140F;
    }

    .input-box:focus-within {
      border-color: #FF5A3C;
    }

    .input-label {
      font-size: 9.5px;
      font-weight: 800;
      letter-spacing: 1.2px;
      color: #9A9080;
      text-transform: uppercase;
      line-height: 1;
    }

    .text-input {
      width: 100%;
      border: 0;
      outline: 0;
      background: transparent;
      font-family: var(--font-body);
      font-size: 15px;
      font-weight: 800;
      color: #17140F;
      padding: 4px 0 0;
      box-sizing: border-box;
    }

    .frequency-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .freq-pill {
      border: 3px solid #17140F;
      border-radius: 15px;
      padding: 9px 13px;
      font-size: 12.5px;
      font-weight: 800;
      color: #17140F;
      cursor: pointer;
      user-select: none;
      transition: transform 0.13s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.13s cubic-bezier(0.23, 1, 0.32, 1), background-color 0.16s ease;
    }

    .freq-pill:active {
      transform: scale(0.965);
    }

    .freq-pill.active {
      background: #FFCE2E;
      box-shadow: 3px 3px 0 #17140F;
    }

    .freq-pill:not(.active) {
      background: #FFF;
      box-shadow: none;
    }

    .add-action-btn {
      border: 3px solid #17140F;
      border-radius: 20px;
      padding: 15px;
      text-align: center;
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 16px;
      color: #17140F;
      cursor: pointer;
      box-shadow: 4px 4px 0 #17140F;
      user-select: none;
      transition: transform 0.13s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.13s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.16s ease, background-color 0.16s ease;
    }

    .add-action-btn:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .add-action-btn.ready {
      background: #1FC99B;
      opacity: 1;
    }

    .add-action-btn:not(.ready) {
      background: #E8DFCB;
      opacity: 0.55;
      cursor: not-allowed;
    }

    @keyframes tb-sheet {
      0% { transform: translateY(100%); }
      100% { transform: translateY(0); }
    }

    @keyframes tb-sheetout {
      0% { transform: translateY(0); }
      100% { transform: translateY(100%); }
    }

    @keyframes tb-scrim {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }

    @keyframes tb-scrimout {
      0% { opacity: 1; }
      100% { opacity: 0; }
    }

    @keyframes tb-nudge {
      0%, 70%, 100% { transform: rotate(0) scale(1); }
      77% { transform: rotate(-6deg) scale(1.05); }
      85% { transform: rotate(6deg) scale(1.05); }
      93% { transform: rotate(-2deg) scale(1.01); }
    }
  `,bi);Yi([E()],ki.prototype,"name",void 0);Yi([E()],ki.prototype,"dose",void 0);Yi([E()],ki.prototype,"every",void 0);Yi([E()],ki.prototype,"isClosing",void 0);ki=Yi([Mt("dooty-treatments-drawer")],ki);var Co=function(h,e,o,n){var a=arguments.length,l=a<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,o):n,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,e,o,n);else for(var p=h.length-1;p>=0;p--)(d=h[p])&&(l=(a<3?d(l):a>3?d(e,o,l):d(e,o))||l);return a>3&&l&&Object.defineProperty(e,o,l),l},yi;let qi=(yi=class extends Ft{constructor(){super(...arguments),this.activeView="today",this.toast=null,this.burstCount=0}connectedCallback(){super.connectedCallback(),this.unsubscribe=g.subscribe(()=>{this.activeView=g.activeTab,this.requestUpdate()}),this.addEventListener("dooty-navigate",e=>{this.activeView=e.detail,g.activeTab=e.detail,this.requestUpdate()}),this.addEventListener("dooty-toast",e=>{this.showToast(e.detail.title,e.detail.sub)}),g.init()}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.unsubscribe)==null||e.call(this),this.toastTimer&&clearTimeout(this.toastTimer)}showToast(e,o){this.toastTimer&&clearTimeout(this.toastTimer),this.toast={title:e,sub:o},this.burstCount++,this.requestUpdate(),this.toastTimer=setTimeout(()=>{this.toast=null,this.requestUpdate()},3200)}render(){const e=g.isAuthenticated,o=e&&this.activeView!=="wrapped",n=["#FF5A3C","#FFCE2E","#2B5BE8","#1FC99B","#17140F"];return b`
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
          ${e?this.activeView==="today"?b`<dooty-home></dooty-home>`:this.activeView==="history"?b`<dooty-history></dooty-history>`:this.activeView==="analytics"?b`<dooty-numbers></dooty-numbers>`:this.activeView==="map"?b`<dooty-map></dooty-map>`:this.activeView==="dog"?b`<dooty-dog></dooty-dog>`:this.activeView==="deep"?b`<dooty-deep></dooty-deep>`:this.activeView==="wrapped"?b`<dooty-wrapped></dooty-wrapped>`:this.activeView==="settings"?b`<dooty-settings></dooty-settings>`:this.activeView==="invite"?b`<dooty-invite></dooty-invite>`:this.activeView==="import"?b`<dooty-importer></dooty-importer>`:b`<dooty-home></dooty-home>`:b`<dooty-auth></dooty-auth>`}
        </div>

        <!-- Live Walk Overlay & Floating Banner Suite -->
        ${e?b`<dooty-walk></dooty-walk>`:null}

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
                ${Array.from({length:26},(a,l)=>{const d=l/26*Math.PI*2,p=Math.round(Math.cos(d)*(120+l%4*40)),f=Math.round(Math.sin(d)*(120+l%4*40)-90),m=700+l%5*130;return b`
                    <div
                      class="confetti-particle"
                      style="
                        width: ${l%3?9:13}px;
                        height: ${l%3?9:13}px;
                        border-radius: ${l%2?"50%":"3px"};
                        background: ${n[l%5]};
                        --dx: ${p}px;
                        --dy: ${f}px;
                        animation: tb-burst ${m}ms cubic-bezier(.15,.7,.35,1) forwards;
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

        <!-- Treatments & Medicine Repeating Schedule Drawer -->
        <dooty-treatments-drawer></dooty-treatments-drawer>
      </div>
    `}},yi.styles=At`
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
  `,yi);Co([E()],qi.prototype,"activeView",void 0);Co([E()],qi.prototype,"toast",void 0);Co([E()],qi.prototype,"burstCount",void 0);qi=Co([Mt("dooty-app")],qi);const ql="modulepreload",Kl=function(h,e){return new URL(h,e).href},Xs={},Vl=function(e,o,n){let a=Promise.resolve();if(o&&o.length>0){let d=function(y){return Promise.all(y.map(x=>Promise.resolve(x).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};const p=document.getElementsByTagName("link"),f=document.querySelector("meta[property=csp-nonce]"),m=(f==null?void 0:f.nonce)||(f==null?void 0:f.getAttribute("nonce"));a=d(o.map(y=>{if(y=Kl(y,n),y in Xs)return;Xs[y]=!0;const x=y.endsWith(".css"),_=x?'[rel="stylesheet"]':"";if(!!n)for(let $=p.length-1;$>=0;$--){const N=p[$];if(N.href===y&&(!x||N.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${y}"]${_}`))return;const P=document.createElement("link");if(P.rel=x?"stylesheet":ql,x||(P.as="script"),P.crossOrigin="",P.href=y,m&&P.setAttribute("nonce",m),document.head.appendChild(P),x)return new Promise(($,N)=>{P.addEventListener("load",$),P.addEventListener("error",()=>N(new Error(`Unable to preload CSS for ${y}`)))})}))}function l(d){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=d,window.dispatchEvent(p),!p.defaultPrevented)throw d}return a.then(d=>{for(const p of d||[])p.status==="rejected"&&l(p.reason);return e().catch(l)})};function Jl(h={}){const{immediate:e=!1,onNeedRefresh:o,onOfflineReady:n,onRegistered:a,onRegisteredSW:l,onRegisterError:d}=h;let p,f;const m=async(x=!0)=>{await f};async function y(){if("serviceWorker"in navigator){if(p=await Vl(async()=>{const{Workbox:x}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:x}},[],import.meta.url).then(({Workbox:x})=>new x("./sw.js",{scope:"./",type:"classic"})).catch(x=>{d==null||d(x)}),!p)return;p.addEventListener("activated",x=>{(x.isUpdate||x.isExternal)&&window.location.reload()}),p.addEventListener("installed",x=>{x.isUpdate||n==null||n()}),p.register({immediate:e}).then(x=>{l?l("./sw.js",x):a==null||a(x)}).catch(x=>{d==null||d(x)})}}return f=y(),m}Jl({onNeedRefresh(){console.log("New app version available.")},onOfflineReady(){console.log("App ready to work offline.")}});
