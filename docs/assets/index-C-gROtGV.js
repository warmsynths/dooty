(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function o(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(a){if(a.ep)return;a.ep=!0;const l=o(a);fetch(a.href,l)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bo=globalThis,Fn=bo.ShadowRoot&&(bo.ShadyCSS===void 0||bo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$n=Symbol(),Ts=new WeakMap;let ia=class{constructor(i,o,n){if(this._$cssResult$=!0,n!==$n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this.t=o}get styleSheet(){let i=this.o;const o=this.t;if(Fn&&i===void 0){const n=o!==void 0&&o.length===1;n&&(i=Ts.get(o)),i===void 0&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),n&&Ts.set(o,i))}return i}toString(){return this.cssText}};const Er=h=>new ia(typeof h=="string"?h:h+"",void 0,$n),At=(h,...i)=>{const o=h.length===1?h[0]:i.reduce((n,a,l)=>n+(d=>{if(d._$cssResult$===!0)return d.cssText;if(typeof d=="number")return d;throw Error("Value passed to 'css' function must be a 'css' function result: "+d+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+h[l+1],h[0]);return new ia(o,h,$n)},zr=(h,i)=>{if(Fn)h.adoptedStyleSheets=i.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet);else for(const o of i){const n=document.createElement("style"),a=bo.litNonce;a!==void 0&&n.setAttribute("nonce",a),n.textContent=o.cssText,h.appendChild(n)}},Cs=Fn?h=>h:h=>h instanceof CSSStyleSheet?(i=>{let o="";for(const n of i.cssRules)o+=n.cssText;return Er(o)})(h):h;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ar,defineProperty:Mr,getOwnPropertyDescriptor:Dr,getOwnPropertyNames:Nr,getOwnPropertySymbols:Br,getPrototypeOf:Ir}=Object,$e=globalThis,Es=$e.trustedTypes,Or=Es?Es.emptyScript:"",rn=$e.reactiveElementPolyfillSupport,Oi=(h,i)=>h,yo={toAttribute(h,i){switch(i){case Boolean:h=h?Or:null;break;case Object:case Array:h=h==null?h:JSON.stringify(h)}return h},fromAttribute(h,i){let o=h;switch(i){case Boolean:o=h!==null;break;case Number:o=h===null?null:Number(h);break;case Object:case Array:try{o=JSON.parse(h)}catch{o=null}}return o}},Pn=(h,i)=>!Ar(h,i),zs={attribute:!0,type:String,converter:yo,reflect:!1,useDefault:!1,hasChanged:Pn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),$e.litPropertyMetadata??($e.litPropertyMetadata=new WeakMap);let ei=class extends HTMLElement{static addInitializer(i){this._$Ei(),(this.l??(this.l=[])).push(i)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(i,o=zs){if(o.state&&(o.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(i)&&((o=Object.create(o)).wrapped=!0),this.elementProperties.set(i,o),!o.noAccessor){const n=Symbol(),a=this.getPropertyDescriptor(i,n,o);a!==void 0&&Mr(this.prototype,i,a)}}static getPropertyDescriptor(i,o,n){const{get:a,set:l}=Dr(this.prototype,i)??{get(){return this[o]},set(d){this[o]=d}};return{get:a,set(d){const p=a==null?void 0:a.call(this);l==null||l.call(this,d),this.requestUpdate(i,p,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(i){return this.elementProperties.get(i)??zs}static _$Ei(){if(this.hasOwnProperty(Oi("elementProperties")))return;const i=Ir(this);i.finalize(),i.l!==void 0&&(this.l=[...i.l]),this.elementProperties=new Map(i.elementProperties)}static finalize(){if(this.hasOwnProperty(Oi("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Oi("properties"))){const o=this.properties,n=[...Nr(o),...Br(o)];for(const a of n)this.createProperty(a,o[a])}const i=this[Symbol.metadata];if(i!==null){const o=litPropertyMetadata.get(i);if(o!==void 0)for(const[n,a]of o)this.elementProperties.set(n,a)}this._$Eh=new Map;for(const[o,n]of this.elementProperties){const a=this._$Eu(o,n);a!==void 0&&this._$Eh.set(a,o)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(i){const o=[];if(Array.isArray(i)){const n=new Set(i.flat(1/0).reverse());for(const a of n)o.unshift(Cs(a))}else i!==void 0&&o.push(Cs(i));return o}static _$Eu(i,o){const n=o.attribute;return n===!1?void 0:typeof n=="string"?n:typeof i=="string"?i.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var i;this._$ES=new Promise(o=>this.enableUpdating=o),this._$AL=new Map,this._$E_(),this.requestUpdate(),(i=this.constructor.l)==null||i.forEach(o=>o(this))}addController(i){var o;(this._$EO??(this._$EO=new Set)).add(i),this.renderRoot!==void 0&&this.isConnected&&((o=i.hostConnected)==null||o.call(i))}removeController(i){var o;(o=this._$EO)==null||o.delete(i)}_$E_(){const i=new Map,o=this.constructor.elementProperties;for(const n of o.keys())this.hasOwnProperty(n)&&(i.set(n,this[n]),delete this[n]);i.size>0&&(this._$Ep=i)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return zr(i,this.constructor.elementStyles),i}connectedCallback(){var i;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(i=this._$EO)==null||i.forEach(o=>{var n;return(n=o.hostConnected)==null?void 0:n.call(o)})}enableUpdating(i){}disconnectedCallback(){var i;(i=this._$EO)==null||i.forEach(o=>{var n;return(n=o.hostDisconnected)==null?void 0:n.call(o)})}attributeChangedCallback(i,o,n){this._$AK(i,n)}_$ET(i,o){var l;const n=this.constructor.elementProperties.get(i),a=this.constructor._$Eu(i,n);if(a!==void 0&&n.reflect===!0){const d=(((l=n.converter)==null?void 0:l.toAttribute)!==void 0?n.converter:yo).toAttribute(o,n.type);this._$Em=i,d==null?this.removeAttribute(a):this.setAttribute(a,d),this._$Em=null}}_$AK(i,o){var l,d;const n=this.constructor,a=n._$Eh.get(i);if(a!==void 0&&this._$Em!==a){const p=n.getPropertyOptions(a),f=typeof p.converter=="function"?{fromAttribute:p.converter}:((l=p.converter)==null?void 0:l.fromAttribute)!==void 0?p.converter:yo;this._$Em=a;const m=f.fromAttribute(o,p.type);this[a]=m??((d=this._$Ej)==null?void 0:d.get(a))??m,this._$Em=null}}requestUpdate(i,o,n,a=!1,l){var d;if(i!==void 0){const p=this.constructor;if(a===!1&&(l=this[i]),n??(n=p.getPropertyOptions(i)),!((n.hasChanged??Pn)(l,o)||n.useDefault&&n.reflect&&l===((d=this._$Ej)==null?void 0:d.get(i))&&!this.hasAttribute(p._$Eu(i,n))))return;this.C(i,o,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(i,o,{useDefault:n,reflect:a,wrapped:l},d){n&&!(this._$Ej??(this._$Ej=new Map)).has(i)&&(this._$Ej.set(i,d??o??this[i]),l!==!0||d!==void 0)||(this._$AL.has(i)||(this.hasUpdated||n||(o=void 0),this._$AL.set(i,o)),a===!0&&this._$Em!==i&&(this._$Eq??(this._$Eq=new Set)).add(i))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(o){Promise.reject(o)}const i=this.scheduleUpdate();return i!=null&&await i,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[l,d]of this._$Ep)this[l]=d;this._$Ep=void 0}const a=this.constructor.elementProperties;if(a.size>0)for(const[l,d]of a){const{wrapped:p}=d,f=this[l];p!==!0||this._$AL.has(l)||f===void 0||this.C(l,void 0,d,f)}}let i=!1;const o=this._$AL;try{i=this.shouldUpdate(o),i?(this.willUpdate(o),(n=this._$EO)==null||n.forEach(a=>{var l;return(l=a.hostUpdate)==null?void 0:l.call(a)}),this.update(o)):this._$EM()}catch(a){throw i=!1,this._$EM(),a}i&&this._$AE(o)}willUpdate(i){}_$AE(i){var o;(o=this._$EO)==null||o.forEach(n=>{var a;return(a=n.hostUpdated)==null?void 0:a.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(i)),this.updated(i)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(i){return!0}update(i){this._$Eq&&(this._$Eq=this._$Eq.forEach(o=>this._$ET(o,this[o]))),this._$EM()}updated(i){}firstUpdated(i){}};ei.elementStyles=[],ei.shadowRootOptions={mode:"open"},ei[Oi("elementProperties")]=new Map,ei[Oi("finalized")]=new Map,rn==null||rn({ReactiveElement:ei}),($e.reactiveElementVersions??($e.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ri=globalThis,As=h=>h,wo=Ri.trustedTypes,Ms=wo?wo.createPolicy("lit-html",{createHTML:h=>h}):void 0,oa="$lit$",Fe=`lit$${Math.random().toFixed(9).slice(2)}$`,na="?"+Fe,Rr=`<${na}>`,Oe=document,Wi=()=>Oe.createComment(""),ji=h=>h===null||typeof h!="object"&&typeof h!="function",Ln=Array.isArray,Wr=h=>Ln(h)||typeof(h==null?void 0:h[Symbol.iterator])=="function",ln=`[ 	
\f\r]`,Bi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ds=/-->/g,Ns=/>/g,Me=RegExp(`>|${ln}(?:([^\\s"'>=/]+)(${ln}*=${ln}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Bs=/'/g,Is=/"/g,sa=/^(?:script|style|textarea|title)$/i,jr=h=>(i,...o)=>({_$litType$:h,strings:i,values:o}),b=jr(1),wi=Symbol.for("lit-noChange"),It=Symbol.for("lit-nothing"),Os=new WeakMap,Ne=Oe.createTreeWalker(Oe,129);function aa(h,i){if(!Ln(h)||!h.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ms!==void 0?Ms.createHTML(i):i}const Hr=(h,i)=>{const o=h.length-1,n=[];let a,l=i===2?"<svg>":i===3?"<math>":"",d=Bi;for(let p=0;p<o;p++){const f=h[p];let m,y,x=-1,_=0;for(;_<f.length&&(d.lastIndex=_,y=d.exec(f),y!==null);)_=d.lastIndex,d===Bi?y[1]==="!--"?d=Ds:y[1]!==void 0?d=Ns:y[2]!==void 0?(sa.test(y[2])&&(a=RegExp("</"+y[2],"g")),d=Me):y[3]!==void 0&&(d=Me):d===Me?y[0]===">"?(d=a??Bi,x=-1):y[1]===void 0?x=-2:(x=d.lastIndex-y[2].length,m=y[1],d=y[3]===void 0?Me:y[3]==='"'?Is:Bs):d===Is||d===Bs?d=Me:d===Ds||d===Ns?d=Bi:(d=Me,a=void 0);const F=d===Me&&h[p+1].startsWith("/>")?" ":"";l+=d===Bi?f+Rr:x>=0?(n.push(m),f.slice(0,x)+oa+f.slice(x)+Fe+F):f+Fe+(x===-2?p:F)}return[aa(h,l+(h[o]||"<?>")+(i===2?"</svg>":i===3?"</math>":"")),n]};class Hi{constructor({strings:i,_$litType$:o},n){let a;this.parts=[];let l=0,d=0;const p=i.length-1,f=this.parts,[m,y]=Hr(i,o);if(this.el=Hi.createElement(m,n),Ne.currentNode=this.el.content,o===2||o===3){const x=this.el.content.firstChild;x.replaceWith(...x.childNodes)}for(;(a=Ne.nextNode())!==null&&f.length<p;){if(a.nodeType===1){if(a.hasAttributes())for(const x of a.getAttributeNames())if(x.endsWith(oa)){const _=y[d++],F=a.getAttribute(x).split(Fe),$=/([.?@])?(.*)/.exec(_);f.push({type:1,index:l,name:$[2],strings:F,ctor:$[1]==="."?Zr:$[1]==="?"?Gr:$[1]==="@"?qr:Po}),a.removeAttribute(x)}else x.startsWith(Fe)&&(f.push({type:6,index:l}),a.removeAttribute(x));if(sa.test(a.tagName)){const x=a.textContent.split(Fe),_=x.length-1;if(_>0){a.textContent=wo?wo.emptyScript:"";for(let F=0;F<_;F++)a.append(x[F],Wi()),Ne.nextNode(),f.push({type:2,index:++l});a.append(x[_],Wi())}}}else if(a.nodeType===8)if(a.data===na)f.push({type:2,index:l});else{let x=-1;for(;(x=a.data.indexOf(Fe,x+1))!==-1;)f.push({type:7,index:l}),x+=Fe.length-1}l++}}static createElement(i,o){const n=Oe.createElement("template");return n.innerHTML=i,n}}function _i(h,i,o=h,n){var d,p;if(i===wi)return i;let a=n!==void 0?(d=o._$Co)==null?void 0:d[n]:o._$Cl;const l=ji(i)?void 0:i._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((p=a==null?void 0:a._$AO)==null||p.call(a,!1),l===void 0?a=void 0:(a=new l(h),a._$AT(h,o,n)),n!==void 0?(o._$Co??(o._$Co=[]))[n]=a:o._$Cl=a),a!==void 0&&(i=_i(h,a._$AS(h,i.values),a,n)),i}class Ur{constructor(i,o){this._$AV=[],this._$AN=void 0,this._$AD=i,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(i){const{el:{content:o},parts:n}=this._$AD,a=((i==null?void 0:i.creationScope)??Oe).importNode(o,!0);Ne.currentNode=a;let l=Ne.nextNode(),d=0,p=0,f=n[0];for(;f!==void 0;){if(d===f.index){let m;f.type===2?m=new Ki(l,l.nextSibling,this,i):f.type===1?m=new f.ctor(l,f.name,f.strings,this,i):f.type===6&&(m=new Kr(l,this,i)),this._$AV.push(m),f=n[++p]}d!==(f==null?void 0:f.index)&&(l=Ne.nextNode(),d++)}return Ne.currentNode=Oe,a}p(i){let o=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(i,n,o),o+=n.strings.length-2):n._$AI(i[o])),o++}}class Ki{get _$AU(){var i;return((i=this._$AM)==null?void 0:i._$AU)??this._$Cv}constructor(i,o,n,a){this.type=2,this._$AH=It,this._$AN=void 0,this._$AA=i,this._$AB=o,this._$AM=n,this.options=a,this._$Cv=(a==null?void 0:a.isConnected)??!0}get parentNode(){let i=this._$AA.parentNode;const o=this._$AM;return o!==void 0&&(i==null?void 0:i.nodeType)===11&&(i=o.parentNode),i}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(i,o=this){i=_i(this,i,o),ji(i)?i===It||i==null||i===""?(this._$AH!==It&&this._$AR(),this._$AH=It):i!==this._$AH&&i!==wi&&this._(i):i._$litType$!==void 0?this.$(i):i.nodeType!==void 0?this.T(i):Wr(i)?this.k(i):this._(i)}O(i){return this._$AA.parentNode.insertBefore(i,this._$AB)}T(i){this._$AH!==i&&(this._$AR(),this._$AH=this.O(i))}_(i){this._$AH!==It&&ji(this._$AH)?this._$AA.nextSibling.data=i:this.T(Oe.createTextNode(i)),this._$AH=i}$(i){var l;const{values:o,_$litType$:n}=i,a=typeof n=="number"?this._$AC(i):(n.el===void 0&&(n.el=Hi.createElement(aa(n.h,n.h[0]),this.options)),n);if(((l=this._$AH)==null?void 0:l._$AD)===a)this._$AH.p(o);else{const d=new Ur(a,this),p=d.u(this.options);d.p(o),this.T(p),this._$AH=d}}_$AC(i){let o=Os.get(i.strings);return o===void 0&&Os.set(i.strings,o=new Hi(i)),o}k(i){Ln(this._$AH)||(this._$AH=[],this._$AR());const o=this._$AH;let n,a=0;for(const l of i)a===o.length?o.push(n=new Ki(this.O(Wi()),this.O(Wi()),this,this.options)):n=o[a],n._$AI(l),a++;a<o.length&&(this._$AR(n&&n._$AB.nextSibling,a),o.length=a)}_$AR(i=this._$AA.nextSibling,o){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,o);i!==this._$AB;){const a=As(i).nextSibling;As(i).remove(),i=a}}setConnected(i){var o;this._$AM===void 0&&(this._$Cv=i,(o=this._$AP)==null||o.call(this,i))}}class Po{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(i,o,n,a,l){this.type=1,this._$AH=It,this._$AN=void 0,this.element=i,this.name=o,this._$AM=a,this.options=l,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=It}_$AI(i,o=this,n,a){const l=this.strings;let d=!1;if(l===void 0)i=_i(this,i,o,0),d=!ji(i)||i!==this._$AH&&i!==wi,d&&(this._$AH=i);else{const p=i;let f,m;for(i=l[0],f=0;f<l.length-1;f++)m=_i(this,p[n+f],o,f),m===wi&&(m=this._$AH[f]),d||(d=!ji(m)||m!==this._$AH[f]),m===It?i=It:i!==It&&(i+=(m??"")+l[f+1]),this._$AH[f]=m}d&&!a&&this.j(i)}j(i){i===It?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,i??"")}}class Zr extends Po{constructor(){super(...arguments),this.type=3}j(i){this.element[this.name]=i===It?void 0:i}}let Gr=class extends Po{constructor(){super(...arguments),this.type=4}j(i){this.element.toggleAttribute(this.name,!!i&&i!==It)}};class qr extends Po{constructor(i,o,n,a,l){super(i,o,n,a,l),this.type=5}_$AI(i,o=this){if((i=_i(this,i,o,0)??It)===wi)return;const n=this._$AH,a=i===It&&n!==It||i.capture!==n.capture||i.once!==n.once||i.passive!==n.passive,l=i!==It&&(n===It||a);a&&this.element.removeEventListener(this.name,this,n),l&&this.element.addEventListener(this.name,this,i),this._$AH=i}handleEvent(i){var o;typeof this._$AH=="function"?this._$AH.call(((o=this.options)==null?void 0:o.host)??this.element,i):this._$AH.handleEvent(i)}}class Kr{constructor(i,o,n){this.element=i,this.type=6,this._$AN=void 0,this._$AM=o,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(i){_i(this,i)}}const dn=Ri.litHtmlPolyfillSupport;dn==null||dn(Hi,Ki),(Ri.litHtmlVersions??(Ri.litHtmlVersions=[])).push("3.3.3");const Vr=(h,i,o)=>{const n=(o==null?void 0:o.renderBefore)??i;let a=n._$litPart$;if(a===void 0){const l=(o==null?void 0:o.renderBefore)??null;n._$litPart$=a=new Ki(i.insertBefore(Wi(),l),l,void 0,o??{})}return a._$AI(h),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Be=globalThis;class Ft extends ei{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var o;const i=super.createRenderRoot();return(o=this.renderOptions).renderBefore??(o.renderBefore=i.firstChild),i}update(i){const o=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(i),this._$Do=Vr(o,this.renderRoot,this.renderOptions)}connectedCallback(){var i;super.connectedCallback(),(i=this._$Do)==null||i.setConnected(!0)}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this._$Do)==null||i.setConnected(!1)}render(){return wi}}var ea;Ft._$litElement$=!0,Ft.finalized=!0,(ea=Be.litElementHydrateSupport)==null||ea.call(Be,{LitElement:Ft});const cn=Be.litElementPolyfillSupport;cn==null||cn({LitElement:Ft});(Be.litElementVersions??(Be.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mt=h=>(i,o)=>{o!==void 0?o.addInitializer(()=>{customElements.define(h,i)}):customElements.define(h,i)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jr={attribute:!0,type:String,converter:yo,reflect:!1,hasChanged:Pn},Yr=(h=Jr,i,o)=>{const{kind:n,metadata:a}=o;let l=globalThis.litPropertyMetadata.get(a);if(l===void 0&&globalThis.litPropertyMetadata.set(a,l=new Map),n==="setter"&&((h=Object.create(h)).wrapped=!0),l.set(o.name,h),n==="accessor"){const{name:d}=o;return{set(p){const f=i.get.call(this);i.set.call(this,p),this.requestUpdate(d,f,h,!0,p)},init(p){return p!==void 0&&this.C(d,void 0,h,p),p}}}if(n==="setter"){const{name:d}=o;return function(p){const f=this[d];i.call(this,p),this.requestUpdate(d,f,h,!0,p)}}throw Error("Unsupported decorator location: "+n)};function Vi(h){return(i,o)=>typeof o=="object"?Yr(h,i,o):((n,a,l)=>{const d=a.hasOwnProperty(l);return a.constructor.createProperty(l,n),d?Object.getOwnPropertyDescriptor(a,l):void 0})(h,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function E(h){return Vi({...h,state:!0,attribute:!1})}const Qr=[{id:"Normal",name:"Normal",nameKo:"평소대로"},{id:"Energetic",name:"Energetic",nameKo:"활발함"},{id:"Tired",name:"Tired",nameKo:"피곤함"},{id:"Uncomfortable",name:"Uncomfortable",nameKo:"불편해 보임"}],Xr={Normal:"평소대로",Energetic:"활발함",Tired:"피곤함",Uncomfortable:"불편해 보임"},tl={en:{appName:"Dooty",tagline:"Track your pet’s daily potty, walks, meals, and health.",nav:{today:"Today",map:"Map",analytics:"Analytics",settings:"Settings",import:"Import"},events:{poop:{name:"Poop",action:"Log Poop",desc:"Bathroom break"},pee:{name:"Pee",action:"Log Pee",desc:"Bathroom break"},walk:{name:"Walk",action:"Log Walk",desc:"Outdoor exercise"},food:{name:"Food",action:"Log Food",desc:"Meals & kibble"},water:{name:"Water",action:"Log Water",desc:"Fresh hydration"},medicine:{name:"Medicine",action:"Log Medicine",desc:"Pills & treatments"},grooming:{name:"Grooming",action:"Log Grooming",desc:"Bath & brushing"},playing:{name:"Playing",action:"Log Play",desc:"Fetch & fun"},vomit:{name:"Vomit",action:"Log Vomit",desc:"Upset stomach"},weight:{name:"Weight",action:"Log Weight",desc:"Body mass tracking"},vet:{name:"Vet visit",action:"Log Vet Visit",desc:"Appointments & checkups"},symptom:{name:"Symptom",action:"Log Symptom",desc:"Health anomalies & issues"},nap:{name:"Nap / Sleep",action:"Log Nap",desc:"Sleep & rest"},training:{name:"Training",action:"Log Training",desc:"Commands & practice"}},streak:{badge:h=>`${h} DAY STREAK`,subtitle:"Keep logging daily to build your pet’s routine!"},home:{greeting:h=>`Hey, ${h}! 🐾`,vibeLine:"Ready for another great day together.",todayStats:"Today’s Log",quickLog:"Quick Log",recentActivity:"Recent Timeline",noEventsToday:"No logs yet today!",tapToLogFirst:"Tap any icon above to record your first entry.",offlineMode:"Offline Mode",pendingSync:h=>`${h} pending offline sync`},logger:{title:h=>`Log ${h}`,time:"Time of Event",notesPlaceholder:"Add optional details (e.g. consistency, brand, dosage)...",locationTag:"Location",addLocation:"Add GPS Coordinates",save:"Save Log",cancel:"Cancel",saving:"Saving...",loggedSuccess:h=>`${h} logged successfully!`},analytics:{title:"Pet Analytics & Habits",subtitle:"Understand your pet’s daily rhythm and health trends",clock24hTitle:"24-Hour Potty Clock",clock24hDesc:"Most frequent hours of the day for bathroom breaks",frequencyTitle:"Activity Breakdown",periods:{days7:"Last 7 Days",days30:"Last 30 Days",allTime:"All Time"},healthWatch:"Health Watch",vomitCount:h=>`${h} vomiting incidents recorded`,medCount:h=>`${h} medications administered`,daysNoPoop:h=>`${h} days without poop recorded`,streakTitle:"Consistency Streak",totalLogs:"Total Logged Events"},map:{title:"Potty & Walk Map",startWalk:"Start Walk",pauseWalk:"Pause Walk",resumeWalk:"Resume Walk",stopWalk:"Finish Walk",distance:"Distance",duration:"Duration",logPoopOnWalk:"💩 Poop Here",logPeeOnWalk:"💧 Pee Here",noLocationsYet:"No geo-tagged events yet. Start a walk or tag your next log!"},importer:{title:"Import History",subtitle:"From a spreadsheet, Notion, or another tracker",dropText:"Drop your CSV or JSON file here, or click to browse",selectFile:"Select File",dryRunTitle:"Import Preview (Dry-Run)",totalEvents:"Total Records Detected",targetPet:"Target Pet",dateSpan:"Date Span",confirmImport:"Import All Events",importing:"Importing records...",success:h=>`Successfully imported ${h} historical events!`},settings:{back:"Today",title:"Settings",signedInPlan:"Signed in · free plan",language:"Language",english:"English",korean:"한국어",household:"Household",householdCount:(h,i)=>`${h} ${h===1?"person":"people"} · ${i} ${i===1?"pet":"pets"}`,invite:"Invite",people:"People",inviteSomeone:"+ Invite someone",pets:"Pets",addPet:"+ Add a pet",nudges:"Nudges",walkReminders:"Walk reminders",walkRemindersSub:"Nudge me at the usual times",weeklyDigest:"Weekly digest",weeklyDigestSub:"Sunday night, one card",unusualGap:"Unusual gap alert",unusualGapSub:"If nothing for 20 hours",vetShare:"Share with my vet",vetShareSub:"Read-only link to the summary",yourData:"Your data",importCsv:"Import from CSV",importCsvSub:"From a spreadsheet, Notion, or another tracker",exportCsv:"Export all data (CSV)",exportCsvSub:"Everything, including photos",signOut:"Sign out",version:"Dooty v0.4 · installable PWA",logsUnit:"logs",activeHousehold:"Active Household",switchHousehold:"Switch Household",members:"Family Members",invitePartner:"Invite Partner / Roommate",inviteDesc:"Share this code so they can view and log for this pet from their phone:",copyCode:"Copy Invite Code",copied:"Copied!",joinHousehold:"Join Existing Household",joinAnotherHousehold:"+ Join Another Household",enterCode:"Enter 6-digit Invite Code",joinBtn:"Join Household",currentPet:"Pet Profile",syncStatus:"Cloud Sync Status",online:"Connected & Live",offline:"Offline (Queued locally)",signedOutSuccess:"Signed out. See you next walk!"},invite:{back:"Settings",title:"Invite to",subtitle:"Share the code below. It works once, then it's dead.",theyJoinAs:"They join as",roles:{full:{name:"Full member",sub:"Log, edit, see everything"},logOnly:{name:"Log only",sub:"Can add events, cannot see history"}},inviteCode:"Invite code",expiresIn7Days:"Expires in 7 days",copyCode:"Copy code",shareLink:"Share link",pending:"Pending",revoke:"Revoke",pendingHelp:"Anyone with the code can log events. Only you can rename the household or remove people.",codeCopied:"Code copied",codeCopiedSub:h=>`${h} · expires in 7 days`,inviteRevoked:"Invite revoked",inviteRevokedSub:h=>`${h} will no longer work.`},auth:{welcomeTitle:"Dooty",welcomeSubtitle:"Poop, pills and everything else. One tap, then get on with the walk.",tagline:"Simple, tactile pet habit tracking for your family.",tabLogIn:"Log In",tabSignUp:"Sign Up",emailLabel:"Email",emailPlaceholder:"sam@jellyfish.dog",passwordLabel:"Password",passwordPlaceholder:"••••••••",logInBtn:"Log in",loggingIn:"Logging in...",forgotPassword:"Forgot your password?",or:"OR",googleBtn:"Continue with Google",newHere:"New here?",makeAccount:"Make an account",gotInviteCode:"Got an invite code?",show:"Show",hide:"Hide",signupStep1:{back:"Back",stepCount:"1 / 2",title:"Let's get you set up",subtitle:"Takes about forty seconds. Faster than the average walk.",yourName:"Your name",yourNamePlaceholder:"Sam",email:"Email",emailPlaceholder:"sam@jellyfish.dog",password:"Password",passwordPlaceholder:"••••••••",weak:"Weak",good:"Good",strong:"Strong",nextTheDog:"Next: the dog",disclaimer:"By continuing you agree we will store an unreasonable amount of data about your dog’s bowels."},signupStep2:{back:"Back",stepCount:"2 / 2",title:"Who are we tracking?",subtitle:"You can add more dogs later. We will not judge you for it.",photo:"photo",name:"Name",namePlaceholder:"Nacho",householdName:"Household name",householdNamePlaceholder:"The Nacho Household",householdHelp:"Everyone you invite joins this household and can log for any pet in it.",size:"Size",sizes:{S:{label:"S",kg:"– 10kg"},M:{label:"M",kg:"10–20"},L:{label:"L",kg:"20–35"},XL:{label:"XL",kg:"35kg +"}},whatTrack:"What should we track?",trackingOptions:{poop:"Poop",pee:"Pee",vomit:"Vomit",meds:"Medicine",weight:"Weight",walk:"Walks",vet:"Vet visits",symptom:"Symptoms"},startTracking:"Start tracking",alreadyTracking:"Already tracking somewhere else?",importHistory:"Import your history"},joinStep1:{back:"Back",title:"Join a household",subtitle:"Whoever set it up can find the code in Settings, under People.",enterCode:"Enter the code",continueBtn:"Continue",perksTitle:"What you’ll be able to do",perks:["Log poops, walks, meds and everything else","See the streak, the map and the stats","Get the same reminders as everyone else"]},joinStep2:{back:"Code",codeAccepted:"Code accepted · joining",summarySubtitle:(h,i)=>`${h} · you'll be ${i}`,title:"Tell them who you are",subtitle:"Your name shows up next to every event you log, so pick what the household will recognise.",yourName:"Your name",yourNamePlaceholder:"Dan",email:"Email",emailPlaceholder:"dan@thewalks.co",password:"Password",passwordPlaceholder:"••••••••",howTheySeeYou:"How they’ll see you",joinHouseholdBtn:"Join the household",footerDisclaimer:"The owner will be told you joined. You can leave the household at any time."},signUpBtn:"Create Account",signingUp:"Creating account...",signUpModeCreate:"✨ Create New Household",signUpModeJoin:"🔑 Join with Invite Code",noAccountPrompt:"Don’t have an account? Sign Up",hasAccountPrompt:"Already have an account? Log In",ownerNameLabel:"Your Name",ownerNamePlaceholder:"e.g. Reynold",householdNameLabel:"Household Name",householdNamePlaceholder:"e.g. Happy Paws Family",petNameLabel:"Pet Name",petNamePlaceholder:"e.g. Jjols",speciesLabel:"Pet Type",speciesDog:"Dog 🐶",speciesCat:"Cat 🐱",speciesOther:"Other 🐾",breedLabel:"Breed (Optional)",breedPlaceholder:"e.g. Golden Retriever",inviteCodeLabel:"6-Digit Invite Code",inviteCodePlaceholder:"e.g. AB12CD",inviteCodeHint:"Ask your household owner to generate an invite code from their Settings > Family Members tab.",yourNameLabel:"Your Name",yourNamePlaceholder:"e.g. Alex, Sarah",yourRoleLabel:"Role / Relationship (Optional)",yourRolePlaceholder:"e.g. Partner, Mom, Dog Walker",errors:{emailRequired:"Please enter your email address",invalidEmail:"Please enter a valid email address",passwordRequired:"Please enter your password",passwordTooShort:"Password must be at least 6 characters",logInFailed:"Invalid email or password",signUpFailed:"Could not complete sign up. Please try again.",ownerNameRequired:"Please enter your name",householdNameRequired:"Please enter a household name",petNameRequired:"Please enter your pet’s name",inviteCodeRequired:"Please enter a 6-digit invite code",yourNameRequired:"Please enter your name",joinFailed:"Invalid invite code or server error",createFailed:"Failed to create household. Please check connection."}}},ko:{appName:"두티 (Dooty)",tagline:"반려견의 배변, 산책, 식사, 건강을 쉽고 재미있게 기록하세요.",nav:{today:"오늘",map:"지도",analytics:"통계",settings:"설정",import:"불러오기"},events:{poop:{name:"응가",action:"응가 기록",desc:"배변 활동"},pee:{name:"쉬야",action:"쉬야 기록",desc:"배뇨 활동"},walk:{name:"산책",action:"산책 기록",desc:"야외 산책"},food:{name:"밥/사료",action:"식사 기록",desc:"사료 및 간식"},water:{name:"물",action:"물 마심",desc:"수분 섭취"},medicine:{name:"약",action:"투약 기록",desc:"영양제 및 처방약"},grooming:{name:"목욕/미용",action:"목욕/미용",desc:"위생 케어"},playing:{name:"놀이",action:"놀이 기록",desc:"터그놀이 & 공놀이"},vomit:{name:"토/구토",action:"구토 기록",desc:"소화 이상"},weight:{name:"몸무게",action:"몸무게 기록",desc:"체중 변화 측정"},vet:{name:"병원 진료",action:"진료 기록",desc:"정기 검진 및 진료"},symptom:{name:"증상 메모",action:"증상 기록",desc:"이상 징후 기록"},nap:{name:"수면/낮잠",action:"낮잠 기록",desc:"수면 및 휴식"},training:{name:"훈련/교육",action:"훈련 기록",desc:"훈련 및 기본 교육"}},streak:{badge:h=>`${h}일 연속 기록 중!`,subtitle:"매일 꾸준히 기록해서 건강한 루틴을 만들어요!"},home:{greeting:h=>`안녕, ${h}! 🐾`,vibeLine:"오늘도 건강하고 행복한 하루 보내요.",todayStats:"오늘의 기록",quickLog:"빠른 기록",recentActivity:"최근 활동 타임라인",noEventsToday:"오늘 아직 등록된 기록이 없어요!",tapToLogFirst:"위 아이콘을 눌러 첫 번째 활동을 기록해보세요.",offlineMode:"오프라인 모드",pendingSync:h=>`${h}개 항목 동기화 대기 중`},logger:{title:h=>`${h} 기록하기`,time:"기록 시간",notesPlaceholder:"메모를 입력하세요 (변 상태, 사료량, 약 종류 등)...",locationTag:"위치 정보",addLocation:"현재 GPS 위치 추가",save:"저장하기",cancel:"취소",saving:"저장 중...",loggedSuccess:h=>`${h} 기록이 저장되었습니다!`},analytics:{title:"배변 및 활동 분석",subtitle:"반려견의 일일 생활 패턴과 건강 추이를 확인하세요",clock24hTitle:"24시간 배변 시계",clock24hDesc:"하루 중 가장 응가/쉬야를 많이 하는 시간대",frequencyTitle:"활동별 통계",periods:{days7:"최근 7일",days30:"최근 30일",allTime:"전체 기간"},healthWatch:"건강 모니터링",vomitCount:h=>`최근 구토 ${h}회 발생`,medCount:h=>`최근 투약 ${h}회 완료`,daysNoPoop:h=>`응가 미기록 ${h}일째`,streakTitle:"연속 기록 스트릭",totalLogs:"총 기록 건수"},map:{title:"배변 & 산책 지도",startWalk:"산책 시작",pauseWalk:"일시정지",resumeWalk:"산책 재개",stopWalk:"산책 종료",distance:"산책 거리",duration:"산책 시간",logPoopOnWalk:"💩 여기서 응가",logPeeOnWalk:"💧 여기서 쉬야",noLocationsYet:"위치 기록이 아직 없습니다. 산책을 시작하거나 위치를 태그해보세요!"},importer:{title:"데이터 불러오기",subtitle:"스프레드시트, 노션, 다른 트래커에서 데이터 이전",dropText:"CSV 또는 JSON 파일을 여기에 끌어다 놓거나 클릭하여 선택하세요",selectFile:"파일 선택",dryRunTitle:"가져오기 미리보기 (검증)",totalEvents:"총 감지된 기록 수",targetPet:"대상 반려견",dateSpan:"기록 기간",confirmImport:"데이터 일괄 가져오기",importing:"데이터를 가져오는 중...",success:h=>`${h}개의 과거 기록을 성공적으로 가져왔습니다!`},settings:{back:"오늘",title:"설정",signedInPlan:"로그인됨 · 무료 플랜",language:"언어",english:"English",korean:"한국어",household:"가족 공간",householdCount:(h,i)=>`${h}명 · 반려견 ${i}마리`,invite:"초대",people:"구성원",inviteSomeone:"+ 초대하기",pets:"반려동물",addPet:"+ 반려동물 추가",nudges:"알림 설정",walkReminders:"산책 알림",walkRemindersSub:"평소 산책 시간에 알려드려요",weeklyDigest:"주간 요약",weeklyDigestSub:"일요일 밤 한 장의 요약 카드",unusualGap:"이상 공백 알림",unusualGapSub:"20시간 동안 기록이 없으면 알림",vetShare:"수의사와 공유",vetShareSub:"수의사용 읽기 전용 요약 링크",yourData:"내 데이터",importCsv:"CSV에서 가져오기",importCsvSub:"스프레드시트, 노션, 다른 트래커에서 이전",exportCsv:"전체 데이터 내보내기 (CSV)",exportCsvSub:"사진을 포함한 모든 기록 다운로드",signOut:"로그아웃",version:"Dooty v0.4 · 설치형 PWA",logsUnit:"회",activeHousehold:"현재 가족 공간",switchHousehold:"가족 공간 변경",members:"참여 멤버",invitePartner:"가족/동거인 초대하기",inviteDesc:"이 초대 코드를 공유하면 가족도 함께 기록을 확인하고 추가할 수 있습니다:",copyCode:"초대 코드 복사",copied:"복사 완료!",joinHousehold:"기존 가족에 참여하기",joinAnotherHousehold:"+ 다른 가족 공간 참가하기",enterCode:"6자리 초대 코드 입력",joinBtn:"가족 참여",currentPet:"반려견 프로필",syncStatus:"클라우드 동기화 상태",online:"정상 연결됨",offline:"오프라인 (로컬 저장 중)",signedOutSuccess:"로그아웃되었습니다. 다음 산책 때 만나요!"},invite:{back:"설정",title:"초대하기",subtitle:"아래 코드를 공유하세요. 한 번 사용하면 만료됩니다.",theyJoinAs:"초대 권한",roles:{full:{name:"전체 멤버",sub:"기록, 수정, 전체 내역 확인 가능"},logOnly:{name:"기록 전용",sub:"기록 추가만 가능, 과거 내역 열람 불가"}},inviteCode:"초대 코드",expiresIn7Days:"7일 후 만료",copyCode:"코드 복사",shareLink:"링크 공유",pending:"대기 중인 초대",revoke:"취소",pendingHelp:"코드를 가진 사람은 누구나 기록할 수 있습니다. 가족 관리자만 이름을 바꾸거나 구성원을 삭제할 수 있습니다.",codeCopied:"코드 복사 완료",codeCopiedSub:h=>`${h} · 7일 후 만료`,inviteRevoked:"초대 취소됨",inviteRevokedSub:h=>`${h} 코드는 더 이상 사용할 수 없습니다.`},auth:{welcomeTitle:"Dooty",welcomeSubtitle:"응가, 약, 그 외 모든 것. 한 번만 누르고 산책을 계속하세요.",tagline:"직관적이고 재미있는 우리 가족 펫 다이어리",tabLogIn:"로그인",tabSignUp:"회원가입",emailLabel:"이메일",emailPlaceholder:"sam@jellyfish.dog",passwordLabel:"비밀번호",passwordPlaceholder:"••••••••",logInBtn:"로그인",loggingIn:"로그인 중...",forgotPassword:"비밀번호를 잊으셨나요?",or:"또는",googleBtn:"Google로 계속하기",newHere:"처음이신가요?",makeAccount:"계정 만들기",gotInviteCode:"초대 코드가 있나요?",show:"보기",hide:"숨기기",signupStep1:{back:"뒤로",stepCount:"1 / 2",title:"시작해 볼까요",subtitle:"40초쯤 걸립니다. 평균 산책보다 빠릅니다.",yourName:"이름",yourNamePlaceholder:"Sam",email:"이메일",emailPlaceholder:"sam@jellyfish.dog",password:"비밀번호",passwordPlaceholder:"••••••••",weak:"취약",good:"적정",strong:"안전",nextTheDog:"다음: 강아지",disclaimer:"계속 진행하면 강아지의 배변에 관한 상당한 양의 데이터를 저장하는 데 동의하게 됩니다."},signupStep2:{back:"뒤로",stepCount:"2 / 2",title:"누구를 추적할까요?",subtitle:"나중에 강아지를 더 추가할 수 있습니다.",photo:"사진",name:"이름",namePlaceholder:"나초 (Nacho)",householdName:"가족(Household) 이름",householdNamePlaceholder:"나초네 가족",householdHelp:"초대한 모든 사람이 이 가족에 합류하여 모든 반려동물에 대해 기록할 수 있습니다.",size:"크기",sizes:{S:{label:"S",kg:"– 10kg"},M:{label:"M",kg:"10–20"},L:{label:"L",kg:"20–35"},XL:{label:"XL",kg:"35kg +"}},whatTrack:"어떤 항목을 추적할까요?",trackingOptions:{poop:"응가",pee:"쉬야",vomit:"구토",meds:"약",weight:"체중",walk:"산책",vet:"병원 진료",symptom:"이상 증상"},startTracking:"추적 시작하기",alreadyTracking:"다른 곳에서 이미 추적 중이신가요?",importHistory:"기록 가져오기"},joinStep1:{back:"뒤로",title:"가족에 참여하기",subtitle:"설정한 사람은 설정의 구성원에서 코드를 찾을 수 있습니다.",enterCode:"코드 입력",continueBtn:"계속",perksTitle:"할 수 있는 일",perks:["응가, 산책, 약 및 기타 모든 활동 기록","연속 스트릭, 산책 지도, 통계 확인","가족 구성원과 동일한 실시간 알림 수신"]},joinStep2:{back:"코드",codeAccepted:"코드 승인됨 · 참여 중",summarySubtitle:(h,i)=>`${h} · 역할: ${i}`,title:"자신을 알려주세요",subtitle:"내가 기록한 모든 활동 옆에 내 이름이 표시되므로 가족이 알아볼 수 있는 이름을 선택하세요.",yourName:"이름",yourNamePlaceholder:"민지 (Dan)",email:"이메일",emailPlaceholder:"dan@thewalks.co",password:"비밀번호",passwordPlaceholder:"••••••••",howTheySeeYou:"가족에게 표시될 호칭",joinHouseholdBtn:"가족에 참여하기",footerDisclaimer:"가족 관리자에게 참여 알림이 전송됩니다. 언제든지 가족에서 나갈 수 있습니다."},signUpBtn:"회원가입 완료",signingUp:"가입 처리 중...",signUpModeCreate:"✨ 새 가족 공간 만들기",signUpModeJoin:"🔑 초대 코드로 참여하기",noAccountPrompt:"계정이 없으신가요? 회원가입",hasAccountPrompt:"이미 계정이 있으신가요? 로그인",ownerNameLabel:"보호자 이름",ownerNamePlaceholder:"예: 레이놀드",householdNameLabel:"가족(Household) 이름",householdNamePlaceholder:"예: 우리집 강아지네",petNameLabel:"반려동물 이름",petNamePlaceholder:"예: 쪼올스",speciesLabel:"종류",speciesDog:"강아지 🐶",speciesCat:"고양이 🐱",speciesOther:"기타 🐾",breedLabel:"품종 (선택)",breedPlaceholder:"예: 골든 리트리버",inviteCodeLabel:"6자리 초대 코드",inviteCodePlaceholder:"예: AB12CD",inviteCodeHint:"가족 관리자의 [설정 > 가족 멤버]에서 생성한 6자리 초대 코드를 입력하세요.",yourNameLabel:"내 이름",yourNamePlaceholder:"예: 민지, 준호",yourRoleLabel:"역할 / 호칭 (선택)",yourRolePlaceholder:"예: 엄마, 아빠, 산책도우미, 룸메이트",errors:{emailRequired:"이메일 주소를 입력해주세요",invalidEmail:"올바른 이메일 형식을 입력해주세요",passwordRequired:"비밀번호를 입력해주세요",passwordTooShort:"비밀번호는 6자 이상이어야 합니다",logInFailed:"이메일 또는 비밀번호가 올바르지 않습니다",signUpFailed:"회원가입에 실패했습니다. 다시 시도해주세요.",ownerNameRequired:"보호자 이름을 입력해주세요",householdNameRequired:"가족 이름을 입력해주세요",petNameRequired:"반려동물 이름을 입력해주세요",inviteCodeRequired:"6자리 초대 코드를 입력해주세요",yourNameRequired:"이름을 입력해주세요",joinFailed:"유효하지 않은 초대 코드이거나 서버 오류가 발생했습니다",createFailed:"가족 생성에 실패했습니다. 네트워크를 확인해주세요."}}}};function _o(h,i,o){if(!h)return o?`${{poop:"응가",pee:"쉬야",walk:"산책",food:"밥/사료",water:"물",medicine:"약/영양제",grooming:"목욕/미용",playing:"놀이",vomit:"구토",weight:"몸무게",vet:"병원 진료",symptom:"증상 메모",nap:"수면/낮잠",training:"훈련/교육"}[i]||i} · 기록됨`:`${i.toUpperCase()} · Logged`;if(o){let n=h;return n=n.replace(/\bNormal\b/g,"평소대로"),n=n.replace(/\bEnergetic\b/g,"활발함"),n=n.replace(/\bTired\b/g,"피곤함"),n=n.replace(/\bUncomfortable\b/g,"불편해 보임"),n=n.replace(/^Type\s+(\d+)/,"응가 $1단계"),n=n.replace(/^Pee\b/,"쉬야"),n=n.replace(/^Vomit\s+·\s+Type\s+(\d+)/,"구토 · $1단계"),n=n.replace(/^Vomit\b/,"구토"),n=n.replace(/^Walk\b/,"산책"),n=n.replace(/^Meal:\s*/,"식사: "),n=n.replace(/^Vet visit:\s*/,"병원 진료: "),n=n.replace(/^Symptom:\s*/,"증상: "),n=n.replace(/^Weigh-in:\s*/,"체중 측정: "),n=n.replace(/hard pellets/g,"단단한 토끼똥"),n=n.replace(/lumpy log/g,"울퉁불퉁한 변"),n=n.replace(/cracked log/g,"약간 갈라진 변"),n=n.replace(/textbook — the dream/g,"완벽한 황금변 (최고)"),n=n.replace(/soft blobs/g,"무른 덩어리변"),n=n.replace(/mushy/g,"형태 없는 묽은변"),n=n.replace(/liquid/g,"설사/수분성 액체"),n=n.replace(/Annual check-up/g,"정기 검진"),n=n.replace(/Vaccination booster/g,"예방 접종"),n=n.replace(/Loose stool consult/g,"배변/설사 진료"),n=n.replace(/Dental scaling/g,"치과/스케일링"),n=n.replace(/Medication renewal/g,"처방약 재발급"),n=n.replace(/Follow-up exam/g,"재진/경과 관찰"),n=n.replace(/Itch \/ Scratch/g,"가려움 / 긁음"),n=n.replace(/Limping \/ Joint/g,"절뚝임 / 관절"),n=n.replace(/Lethargic \/ Low energy/g,"기력 저하"),n=n.replace(/Coughing \/ Reverse sneeze/g,"기침 / 역재채기"),n=n.replace(/Loss of Appetite/g,"식욕 부진"),n=n.replace(/Skin redness \/ Rash/g,"피부 발진 / 붉어짐"),n=n.replace(/Ear shaking/g,"귀 털기 / 귓병"),n=n.replace(/0\.5 cup/g,"0.5 컵"),n=n.replace(/1\.0 cup/g,"1.0 컵"),n=n.replace(/1\.5 cups/g,"1.5 컵"),n=n.replace(/2\.0 cups/g,"2.0 컵"),n=n.replace(/Full bowl/g,"한 그릇 가득"),n=n.replace(/Special treats/g,"특별 간식"),n}else{let n=h;return n=n.replace(/평소대로/g,"Normal"),n=n.replace(/활발함/g,"Energetic"),n=n.replace(/피곤함/g,"Tired"),n=n.replace(/불편해 보임/g,"Uncomfortable"),n=n.replace(/^응가\s+(\d+)단계/,"Type $1"),n=n.replace(/^쉬야\b/,"Pee"),n=n.replace(/^구토\s+·\s+(\d+)단계/,"Vomit · Type $1"),n=n.replace(/^구토\b/,"Vomit"),n=n.replace(/^산책\b/,"Walk"),n=n.replace(/^식사:\s*/,"Meal: "),n=n.replace(/^병원 진료:\s*/,"Vet visit: "),n=n.replace(/^증상:\s*/,"Symptom: "),n=n.replace(/^체중 측정:\s*/,"Weigh-in: "),n=n.replace(/단단한 토끼똥/g,"hard pellets"),n=n.replace(/울퉁불퉁한 변/g,"lumpy log"),n=n.replace(/약간 갈라진 변/g,"cracked log"),n=n.replace(/완벽한 황금변 \(최고\)/g,"textbook — the dream"),n=n.replace(/무른 덩어리변/g,"soft blobs"),n=n.replace(/형태 없는 묽은변/g,"mushy"),n=n.replace(/설사\/수분성 액체/g,"liquid"),n}}function el(h){const i=[];let o=[],n="",a=!1;for(let l=0;l<h.length;l++){const d=h[l],p=h[l+1];a?d==='"'?p==='"'?(n+='"',l++):a=!1:n+=d:d==='"'?a=!0:d===","?(o.push(n),n=""):d==="\r"?(p===`
`&&l++,o.push(n),i.push(o),o=[],n=""):d===`
`?(o.push(n),i.push(o),o=[],n=""):n+=d}return(n.length>0||o.length>0)&&(o.push(n),i.push(o)),i}function Ji(h){const i=(h||"").trim(),o=i.toLowerCase();return o==="reynold"||o==="reynold ismail"||o==="reyn"?"reyn":o==="youngrok lee"||o==="youngrok"||o==="young lee"||o==="young"?"youngrok":i||"reyn"}function Sn(h){const i=(h||"").trim(),o=i.toLowerCase();return o==="watson"||o==="jjols"?"jjols":i||"jjols"}function il(h){switch((h||"").trim().toLowerCase()){case"poop":return"poop";case"pee":return"pee";case"walk":return"walk";case"food":case"treat":return"food";case"water":return"water";case"nap":case"sleep":case"play":case"playing":case"playpen":case"daycare":case"training":return"playing";case"medicine":case"medication":return"medicine";case"vomit":case"throwup":return"vomit";case"weight":case"weigh":return"weight";case"grooming":case"bath":case"teeth brushing":return"grooming";case"hospital":case"vet":case"clinic":case"doctor":return"vet";case"accident":return"pee";case"eat grass":case"temperature":case"crying":case"coughing":case"symptom":case"illness":case"scratch":return"symptom";default:return"playing"}}function ra(h,i){const o=(h||"").trim(),n=(i||"").trim();if(!o&&!n)return new Date().toISOString();if(o&&n){const a=`${o} ${n} UTC`,l=new Date(a);if(!isNaN(l.getTime()))return l.toISOString()}if(o){const a=new Date(o);if(!isNaN(a.getTime()))return a.toISOString()}return new Date().toISOString()}function ol(h){const i=el(h);if(i.length<2)throw new Error("CSV file is empty or missing data rows.");const o=i[0].map(p=>p.trim()),n={};o.forEach((p,f)=>{n[p.toLowerCase()]=f});const a=(p,f)=>{const m=n[f.toLowerCase()];if(m===void 0||m>=p.length)return"";let y=(p[m]||"").trim();return y.startsWith('"')&&y.endsWith('"')&&(y=y.slice(1,-1).trim()),y},l=(p,f)=>{const m=a(p,f);if(!m||m==="-"||m==="0"||m==="0.0")return;const y=parseFloat(m);return isNaN(y)?void 0:y},d=[];for(let p=1;p<i.length;p++){const f=i[p];if(f.length<=1&&(!f[0]||f[0].trim()===""))continue;const m=a(f,"Pet"),y=Sn(m),x=a(f,"Event_Type"),_=a(f,"Log_Date"),F=a(f,"Log_Time (UTC+00:00)")||a(f,"Log_Time"),$=a(f,"User_Name"),T=a(f,"Comment");if(!x&&!_&&!F)continue;const M={pet:y,eventType:x||"Unknown",logDate:_,logTime:F,userName:$||"reyn",comment:T||void 0,startDate:a(f,"Start_Date")||void 0,startTime:a(f,"Start_Time (UTC+00:00)")||a(f,"Start_Time")||void 0,endDate:a(f,"End_Date")||void 0,endTime:a(f,"End_Time (UTC+00:00)")||a(f,"End_Time")||void 0,duration:a(f,"Duration")||void 0,quantityNumber:l(f,"Quantity_Number"),quantityUnit:a(f,"Quantity_Unit")||void 0,temperatureC:l(f,"Temperature_(C)"),temperatureF:l(f,"Temperature_(F)"),weightKg:l(f,"Weight_(Kg)"),weightLbs:l(f,"Weight_(P)")||l(f,"Weight_(Lbs)"),medicineType:a(f,"Medicine_Type")||void 0,stoolQuality:a(f,"Stool_Quality")||void 0,vaccineName:a(f,"Vaccine_Name")||void 0,vaccineExpiration:a(f,"Vaccine_Expiration")||void 0,bloodGlucoseNumber:l(f,"Blood_Glucose_Number"),bloodGlucoseUnit:a(f,"Blood_Glucose_Unit")||void 0};d.push(M)}return d}function nl(h){if(h.length===0)return{sourceType:"csv",totalCount:0,petName:"Unknown",earliestDate:"",latestDate:"",countsByType:{},countsByUser:{},sampleItems:[]};const i={},o={},n={};let a="",l="";const d=[];for(let m=0;m<h.length;m++){const y=h[m],x=y.eventType||"Unknown";i[x]=(i[x]||0)+1;const _=Ji(y.userName);o[_]=(o[_]||0)+1;const F=Sn(y.pet);n[F]=(n[F]||0)+1;const $=ra(y.logDate,y.logTime);(!a||$<a)&&(a=$),(!l||$>l)&&(l=$),d.length<5&&d.push({timestamp:$,pet:F,eventType:y.eventType,user:_,note:y.comment})}let p="jjols",f=0;for(const[m,y]of Object.entries(n))y>f&&(f=y,p=m);return{sourceType:"csv",totalCount:h.length,petName:p,earliestDate:a,latestDate:l,countsByType:i,countsByUser:o,sampleItems:d}}function sl(h,i,o){return h.map(n=>{const a=il(n.eventType),l=Ji(n.userName),d=Sn(n.pet),p=ra(n.logDate,n.logTime),f={originalEvent:n.eventType,originalUserName:n.userName,originalPetName:n.pet,petName:d,source:"csv_import",importedAt:new Date().toISOString()},m=(n.eventType||"").trim().toLowerCase();return m==="nap"||m==="sleep"?f.subcategory="nap":m==="training"?f.subcategory="training":m==="bath"?f.subcategory="bath":m==="teeth brushing"?f.subcategory="teeth_brushing":m==="treat"?f.subcategory="treat":m==="hospital"?f.visitReason="Hospital":m==="accident"?f.isAccident=!0:m==="eat grass"?f.symptom="Eat grass":m==="temperature"?f.symptom="Temperature":m==="crying"?f.symptom="Crying":m==="coughing"?f.symptom="Coughing":m==="playpen"?f.locationName="Playpen":m==="daycare"&&(f.locationName="Daycare"),n.weightKg!==void 0&&(f.weightKg=n.weightKg),n.weightLbs!==void 0&&(f.weightLbs=n.weightLbs),n.temperatureC!==void 0&&(f.temperatureC=n.temperatureC),n.temperatureF!==void 0&&(f.temperatureF=n.temperatureF),n.medicineType&&(f.medication=n.medicineType),n.stoolQuality&&(f.stoolQuality=n.stoolQuality),n.vaccineName&&(f.vaccineName=n.vaccineName),n.vaccineExpiration&&(f.vaccineExpiration=n.vaccineExpiration),n.bloodGlucoseNumber!==void 0&&(f.bloodGlucoseNumber=n.bloodGlucoseNumber),n.bloodGlucoseUnit&&(f.bloodGlucoseUnit=n.bloodGlucoseUnit),n.duration&&n.duration!=="0"&&(f.duration=n.duration),n.quantityNumber!==void 0&&(f.quantityNumber=n.quantityNumber),n.quantityUnit&&(f.quantityUnit=n.quantityUnit),{householdId:i,petId:o,eventType:a,loggedByName:l,timestamp:p,notes:n.comment||"",metadata:f}})}const al={poop:"poop",pee:"pee",walk:"walk",food:"food",water:"water",medicine:"medicine",medication:"medicine",grooming:"grooming",playing:"playing",play:"playing",vomit:"vomit",throwup:"vomit",weight:"weight",weigh:"weight",vet:"vet",clinic:"vet",doctor:"vet",symptom:"symptom",illness:"symptom",scratch:"symptom"};function rl(h){const i=(h||"").trim().toLowerCase();return al[i]||"playing"}function ll(h){let i;try{i=JSON.parse(h)}catch{throw new Error("Invalid JSON format: Unable to parse file.")}if(!Array.isArray(i))throw new Error("Invalid DogNotes format: Root must be an array of event records.");const o=[];for(const n of i)n&&typeof n=="object"&&"Time"in n&&"Event"in n&&o.push({Time:String(n.Time||new Date().toISOString()),"Pet Name":String(n["Pet Name"]||"Pet"),Event:String(n.Event||""),Note:String(n.Note||""),"Logged by":String(n["Logged by"]||"Owner")});return o}function dl(h){if(h.length===0)return{totalCount:0,petName:"Unknown",earliestDate:"",latestDate:"",countsByType:{},sampleItems:[]};const i={};let o=h[0].Time,n=h[0].Time;const a={};for(const p of h){const f=p.Event||"Unknown";i[f]=(i[f]||0)+1;const m=p["Pet Name"]||"Pet";a[m]=(a[m]||0)+1,p.Time<o&&(o=p.Time),p.Time>n&&(n=p.Time)}let l="Pet",d=0;for(const[p,f]of Object.entries(a))f>d&&(d=f,l=p);return{totalCount:h.length,petName:l,earliestDate:o,latestDate:n,countsByType:i,sampleItems:h.slice(0,5)}}function cl(h,i,o){return h.map(n=>({householdId:i,petId:o,eventType:rl(n.Event),loggedByName:Ji(n["Logged by"]||"Owner"),timestamp:n.Time,notes:n.Note||"",metadata:{originalDogNotesEvent:n.Event,originalUserName:n["Logged by"]||"",importedAt:new Date().toISOString()}}))}function hl(h,i){const o=h.trim();if(i&&i.toLowerCase().endsWith(".json")||o.startsWith("[")||o.startsWith("{"))try{const a=ll(o),l=dl(a),d={},p=[];for(const m of a){const y=Ji(m["Logged by"]);d[y]=(d[y]||0)+1,p.length<5&&p.push({timestamp:m.Time,pet:m["Pet Name"],eventType:m.Event,user:y,note:m.Note})}const f={sourceType:"json",totalCount:l.totalCount,petName:l.petName,earliestDate:l.earliestDate,latestDate:l.latestDate,countsByType:l.countsByType,countsByUser:d,sampleItems:p};return{type:"json",rawItems:a,summary:f}}catch(a){if(i&&i.toLowerCase().endsWith(".json"))throw a}try{const a=ol(o),l=nl(a);return{type:"csv",rawItems:a,summary:l}}catch(a){throw new Error(`Failed to parse import file. Supported formats are CSV (e.g. report.csv) and DogNotes JSON. Detail: ${a.message}`)}}function pl(h,i,o){return h.type==="csv"?sl(h.rawItems,i,o):cl(h.rawItems,i,o).map(a=>({...a,loggedByName:Ji(a.loggedByName)}))}function ul(h,i){const o=Math.abs(h-i)%1440;return o>720?1440-o:o}function vo(h){const i=h.getHours(),o=h.getMinutes(),n=o===0?":00":`:${o.toString().padStart(2,"0")}`,a=i>=12?"pm":"am",l=i%12===0?12:i%12,d=`${l}${n} ${a}`,f=`${i>=12?"오후":"오전"} ${l}${n}`,m=`${l}${n}`,y=`${l}${n}`;return{en:d,ko:f,hmEn:m,hmKo:y}}function la(h,i,o=new Date){const n=o.getTime(),a=h.filter(D=>D.petId===i).map(D=>({...D,date:new Date(D.timestamp)})).filter(D=>!isNaN(D.date.getTime())).sort((D,K)=>D.date.getTime()-K.date.getTime()),l=a.filter(D=>D.eventType==="poop"),d=a.filter(D=>D.eventType==="food"),p=a.filter(D=>D.eventType==="walk");if(l.length===0)return{hasData:!1,predictedTimestamp:null,timeDisplay:"Log to predict",timeDisplayKo:"기록 대기 중",subtext:"Record events to unlock AI timing prediction.",subtextKo:"이벤트를 기록하면 다음 배변 시간을 예측합니다.",progressPercent:0,isOverdue:!1,isTomorrow:!1,confidence:"low",predictionReason:"cold_start"};const y=l[l.length-1].date.getTime(),_=Math.max(0,n-y)/(1e3*60*60),F=new Set;for(const D of l)F.add(D.date.toISOString().split("T")[0]);const $=Math.max(1,F.size),T=l.length/$,M=[];for(let D=1;D<l.length;D++){const K=(l[D].date.getTime()-l[D-1].date.getTime())/36e5;K>=.33&&K<=36&&M.push(K)}let B=12,Z=2;if(M.length>0){const D=[...M].sort((pt,Pt)=>pt-Pt);B=D[Math.floor(D.length*.5)];const K=D[Math.max(0,Math.floor(D.length*.1))];Z=Math.max(1.5,Math.min(3.5,K))}else T<=1.2?(B=24,Z=2.5):(B=Math.max(4,24/T),Z=Math.min(2.5,B*.25));const j=new Array(96).fill(0),rt=45,I=21;for(const D of l){const K=Math.max(0,(n-D.date.getTime())/864e5),pt=Math.max(.08,Math.exp(-Math.LN2*K/I)),Pt=D.date.getHours()*60+D.date.getMinutes();for(let Rt=0;Rt<96;Rt++){const Jt=Rt*15,de=ul(Jt,Pt),S=pt*Math.exp(-(de*de)/(2*rt*rt));j[Rt]+=S}}const P=Math.max(...j,.001),ct=[];for(let D=0;D<96;D++){const K=j[(D-1+96)%96],pt=j[D],Pt=j[(D+1)%96];if(pt>K&&pt>=Pt&&pt>=P*.25){const Rt=2*(2*pt-K-Pt),Jt=Rt>1e-6?(Pt-K)/Rt:0,S=(Math.round((D+Jt)*15)%1440+1440)%1440;ct.push({minuteOfDay:S,density:pt})}}ct.sort((D,K)=>D.minuteOfDay-K.minuteOfDay);const A=ct.length>0?ct.map(D=>D.minuteOfDay):l.length>0?[l[l.length-1].date.getHours()*60+l[l.length-1].date.getMinutes()]:[480],R=[];for(const D of l){const K=d.filter(pt=>pt.date.getTime()<D.date.getTime()&&D.date.getTime()-pt.date.getTime()<=126e5);if(K.length>0){const pt=K[K.length-1];R.push((D.date.getTime()-pt.date.getTime())/6e4)}}const mt=R.length>=2?Math.max(20,Math.min(75,Math.round(R.sort((D,K)=>D-K)[Math.floor(R.length/2)]))):35,Y=[];for(const D of l){const K=p.filter(pt=>z(pt.date,D.date,0,90));if(K.length>0){const pt=K[K.length-1];Y.push((D.date.getTime()-pt.date.getTime())/6e4)}}function z(D,K,pt,Pt){const Rt=(K.getTime()-D.getTime())/6e4;return Rt>=pt&&Rt<=Pt}const lt=Y.length>=2?Math.max(10,Math.min(45,Math.round(Y.sort((D,K)=>D-K)[Math.floor(Y.length/2)]))):15,G=d.filter(D=>D.date.getTime()>y),dt=G[G.length-1],nt=p.filter(D=>D.date.getTime()>y),$t=nt[nt.length-1],H=y+Z*36e5;let xt,W="routine_peak",st=!1,wt=!1,St=!1,vt=null;if($t&&(n-$t.date.getTime())/6e4<=90){const K=new Date($t.date.getTime()+lt*6e4);K.getTime()>=H-15*6e4&&(vt=K)}let it=null;if(dt&&(n-dt.date.getTime())/6e4<=210){const K=new Date(dt.date.getTime()+mt*6e4);K.getTime()>=H-15*6e4&&(it=K)}if(vt&&vt.getTime()>n-45*6e4)xt=vt,W="walk_boost",n>xt.getTime()+20*6e4&&(st=!0);else if(it&&it.getTime()>n-60*6e4)xt=it,W="meal_boost",n>xt.getTime()+30*6e4&&(st=!0);else{const D=new Date(o.getFullYear(),o.getMonth(),o.getDate(),0,0,0,0),K=new Date(o.getFullYear(),o.getMonth(),o.getDate()+1,0,0,0,0),pt=A.map(S=>new Date(D.getTime()+S*6e4)),Pt=A.map(S=>new Date(K.getTime()+S*6e4)),Rt=pt.find(S=>S.getTime()<=n&&n-S.getTime()<=2.5*36e5&&S.getTime()>=H-30*6e4),Jt=pt.find(S=>S.getTime()>n&&S.getTime()>=H),de=T>1.2&&_>B*1.35&&o.getHours()>=7&&o.getHours()<=22||T<=1.2&&_>=20&&o.getHours()>=14;if(Rt)xt=Rt,st=!0,W="overdue";else if(Jt)xt=Jt,W="routine_peak",pt.some(O=>O.getTime()<n&&n-O.getTime()>2.5*36e5)&&(St=!0);else if(de)if(st=!0,W="overdue",Pt[0]&&Pt[0].getTime()-n<=2*36e5)xt=Pt[0];else{const S=new Date(n+12e5);S.setMinutes(Math.round(S.getMinutes()/15)*15,0,0),xt=S}else wt=!0,xt=Pt[0],W="routine_peak",pt.some(O=>O.getTime()<n)&&(St=!0)}let J="low",Dt=30;l.length>=10?(J="high",Dt=15):l.length>=3?(J="medium",Dt=25):(J="low",Dt=45),(W==="walk_boost"||W==="meal_boost")&&(Dt=15);const Zt=new Date(xt.getTime()-Dt*6e4),Vt=new Date(xt.getTime()+Dt*6e4),Gt=vo(xt),be=vo(Zt),le=vo(Vt),Le=`${be.hmEn}–${le.en}`,We=`${be.hmKo}–${le.hmKo}`;let Se=wt?`Tomorrow ~${Gt.en} (${Le})`:`~${Gt.en} (${Le})`,ye=wt?`내일 ~${Gt.ko} (${We})`:`~${Gt.ko} (${We})`;st&&(Se=`Due now (~${Gt.en})`,ye=`곧 배변 예상 (~${Gt.ko})`);let qt="Regular routine peak window.",Ht="규칙적인 일과 시간대입니다.";if(st)qt=`Due anytime · ~${_.toFixed(1)}h since last poop.`,Ht=`배변 주기 경과 · 마지막 배변 후 ~${_.toFixed(1)}시간 경과.`;else if(W==="walk_boost")qt="Walk activity boost · High probability during or after walk.",Ht="산책 활동 반영 · 산책 중 또는 직후 배변 확률 높음.";else if(W==="meal_boost"&&dt){const D=vo(dt.date);qt=`Expected ~${mt}m after ${D.en} meal.`,Ht=`${D.ko} 식사 후 약 ${mt}분 내 예상.`}else St?(qt=wt?"Earlier routine windows passed · Next window tomorrow morning.":`Earlier routine window elapsed · Next expected ~${Gt.en}.`,Ht=wt?"오늘 루틴 시간 경과 · 내일 아침 예상 시간대입니다.":`이전 루틴 시간 경과 · 다음 예상 시간대 ~${Gt.ko}.`):wt?(qt="Next routine window tomorrow morning.",Ht="내일 아침 루틴 예상 시간대입니다."):l.length>=3&&(qt=`Routine peak based on ${l.length} recorded events.`,Ht=`기록 데이터 ${l.length}개 기반 루틴 분석.`);let ie=50;if(st)ie=95;else{const D=xt.getTime()-y;if(D>0){const K=n-y;ie=Math.round(K/D*100),ie=Math.max(5,Math.min(95,ie))}}const je=Math.max(0,(xt.getTime()-n)/(1e3*60*60));return{hasData:!0,predictedTimestamp:xt.toISOString(),windowStart:Zt.toISOString(),windowEnd:Vt.toISOString(),timeDisplay:Se,timeDisplayKo:ye,subtext:qt,subtextKo:Ht,progressPercent:ie,isOverdue:st,isTomorrow:wt,confidence:J,estimatedHoursRemaining:Math.round(je*10)/10,predictionReason:W}}function fl(h,i,o=new Date){const n=h.filter(I=>I.petId===i),a=Array.from({length:24},(I,P)=>({hour:P,poopCount:0,peeCount:0,totalCount:0})),l={poop:0,pee:0,walk:0,food:0,water:0,medicine:0,grooming:0,playing:0,vomit:0,weight:0,vet:0,symptom:0,nap:0,training:0},d={},p=new Map,f=new Set,m=new Date(o.getTime()-10080*60*1e3);let y=0,x=0,_=null;for(const I of n){const P=new Date(I.timestamp);if(isNaN(P.getTime()))continue;const ct=P.getHours(),A=P.toISOString().split("T")[0];f.add(A),a[ct]&&(a[ct].totalCount++,I.eventType==="poop"&&a[ct].poopCount++,I.eventType==="pee"&&a[ct].peeCount++),I.eventType in l&&l[I.eventType]++,(!d[I.eventType]||new Date(d[I.eventType].timestamp)<P)&&(d[I.eventType]=I),p.has(A)||p.set(A,{date:A,poop:0,pee:0,food:0,walk:0,medicine:0,vomit:0,other:0,total:0});const R=p.get(A);R.total++,I.eventType==="poop"?R.poop++:I.eventType==="pee"?R.pee++:I.eventType==="food"?R.food++:I.eventType==="walk"?R.walk++:I.eventType==="medicine"?R.medicine++:I.eventType==="vomit"?R.vomit++:R.other++,P>=m&&(I.eventType==="vomit"&&y++,I.eventType==="medicine"&&x++),I.eventType==="poop"&&(!_||P>_)&&(_=P)}const F=Array.from(f).sort();let $=0,T=0,M=0,B=null;for(const I of F){const P=new Date(I);if(!B)M=1;else{const ct=Math.round((P.getTime()-B.getTime())/864e5);ct===1?M++:ct>1&&(M=1)}M>T&&(T=M),B=P}if(F.length>0){const I=new Date(o).toISOString().split("T")[0],P=new Date(o.getTime()-1440*60*1e3).toISOString().split("T")[0],ct=F[F.length-1];ct===I||ct===P?$=M:$=0}let Z=0;_&&(Z=Math.max(0,Math.floor((o.getTime()-_.getTime())/(1440*60*1e3))));const j=Array.from(p.values()).sort((I,P)=>I.date.localeCompare(P.date)),rt=la(h,i,o);return{petId:i,currentStreakDays:$,longestStreakDays:T,totalEventsLogged:n.length,hourlyDistribution:a,dailyFrequencies:j,eventCountsByType:l,lastEventByType:d,nextPoopPrediction:rt,walkStats:{totalWalks:l.walk||0,totalDistanceMeters:0,avgWalkMinutes:25},healthAlerts:{vomitsLast7Days:y,medicinesLast7Days:x,daysWithoutPoop:Z}}}const mn=(h,i)=>i.some(o=>h instanceof o);let Rs,Ws;function gl(){return Rs||(Rs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ml(){return Ws||(Ws=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vn=new WeakMap,hn=new WeakMap,Lo=new WeakMap;function vl(h){const i=new Promise((o,n)=>{const a=()=>{h.removeEventListener("success",l),h.removeEventListener("error",d)},l=()=>{o(Ie(h.result)),a()},d=()=>{n(h.error),a()};h.addEventListener("success",l),h.addEventListener("error",d)});return Lo.set(i,h),i}function xl(h){if(vn.has(h))return;const i=new Promise((o,n)=>{const a=()=>{h.removeEventListener("complete",l),h.removeEventListener("error",d),h.removeEventListener("abort",d)},l=()=>{o(),a()},d=()=>{n(h.error||new DOMException("AbortError","AbortError")),a()};h.addEventListener("complete",l),h.addEventListener("error",d),h.addEventListener("abort",d)});vn.set(h,i)}let xn={get(h,i,o){if(h instanceof IDBTransaction){if(i==="done")return vn.get(h);if(i==="store")return o.objectStoreNames[1]?void 0:o.objectStore(o.objectStoreNames[0])}return Ie(h[i])},set(h,i,o){return h[i]=o,!0},has(h,i){return h instanceof IDBTransaction&&(i==="done"||i==="store")?!0:i in h}};function da(h){xn=h(xn)}function bl(h){return ml().includes(h)?function(...i){return h.apply(bn(this),i),Ie(this.request)}:function(...i){return Ie(h.apply(bn(this),i))}}function yl(h){return typeof h=="function"?bl(h):(h instanceof IDBTransaction&&xl(h),mn(h,gl())?new Proxy(h,xn):h)}function Ie(h){if(h instanceof IDBRequest)return vl(h);if(hn.has(h))return hn.get(h);const i=yl(h);return i!==h&&(hn.set(h,i),Lo.set(i,h)),i}const bn=h=>Lo.get(h);function wl(h,i,{blocked:o,upgrade:n,blocking:a,terminated:l}={}){const d=indexedDB.open(h,i),p=Ie(d);return n&&d.addEventListener("upgradeneeded",f=>{n(Ie(d.result),f.oldVersion,f.newVersion,Ie(d.transaction),f)}),o&&d.addEventListener("blocked",f=>o(f.oldVersion,f.newVersion,f)),p.then(f=>{l&&f.addEventListener("close",()=>l()),a&&f.addEventListener("versionchange",m=>a(m.oldVersion,m.newVersion,m))}).catch(()=>{}),p}const _l=["get","getKey","getAll","getAllKeys","count"],kl=["put","add","delete","clear"],pn=new Map;function js(h,i){if(!(h instanceof IDBDatabase&&!(i in h)&&typeof i=="string"))return;if(pn.get(i))return pn.get(i);const o=i.replace(/FromIndex$/,""),n=i!==o,a=kl.includes(o);if(!(o in(n?IDBIndex:IDBObjectStore).prototype)||!(a||_l.includes(o)))return;const l=async function(d,...p){const f=this.transaction(d,a?"readwrite":"readonly");let m=f.store;return n&&(m=m.index(p.shift())),(await Promise.all([m[o](...p),a&&f.done]))[0]};return pn.set(i,l),l}da(h=>({...h,get:(i,o,n)=>js(i,o)||h.get(i,o,n),has:(i,o)=>!!js(i,o)||h.has(i,o)}));const Fl=["continue","continuePrimaryKey","advance"],Hs={},yn=new WeakMap,ca=new WeakMap,$l={get(h,i){if(!Fl.includes(i))return h[i];let o=Hs[i];return o||(o=Hs[i]=function(...n){yn.set(this,ca.get(this)[i](...n))}),o}};async function*Pl(...h){let i=this;if(i instanceof IDBCursor||(i=await i.openCursor(...h)),!i)return;i=i;const o=new Proxy(i,$l);for(ca.set(o,i),Lo.set(o,bn(i));i;)yield o,i=await(yn.get(o)||i.continue()),yn.delete(o)}function Us(h,i){return i===Symbol.asyncIterator&&mn(h,[IDBIndex,IDBObjectStore,IDBCursor])||i==="iterate"&&mn(h,[IDBIndex,IDBObjectStore])}da(h=>({...h,get(i,o,n){return Us(i,o)?Pl:h.get(i,o,n)},has(i,o){return Us(i,o)||h.has(i,o)}}));const Ll="dooty-offline-db",Sl=1;let un=null;function ee(){return un||(un=wl(Ll,Sl,{upgrade(h){if(!h.objectStoreNames.contains("events")){const i=h.createObjectStore("events",{keyPath:"id"});i.createIndex("by-pet","petId"),i.createIndex("by-timestamp","timestamp")}h.objectStoreNames.contains("pending_events")||h.createObjectStore("pending_events",{keyPath:"localId"}),h.objectStoreNames.contains("meta")||h.createObjectStore("meta")}})),un}async function Xe(h){try{const o=(await ee()).transaction("events","readwrite");for(const n of h)await o.store.put(n);await o.done}catch(i){console.warn("Could not save events offline:",i)}}async function Kt(h,i){try{const o=await ee();let n=await o.getAllFromIndex("events","by-pet",h);const l=(await o.getAll("events")).filter(d=>d.petId!==h&&(d.isOfflinePending||d.id.startsWith("offline-")));if(l.length>0){const d=o.transaction("events","readwrite");for(const p of l)p.petId=h,await d.store.put(p),n.some(f=>f.id===p.id)||n.push(p);await d.done}return i!=null&&i.startDate,i!=null&&i.endDate,n.sort((d,p)=>new Date(p.timestamp).getTime()-new Date(d.timestamp).getTime()),i!=null&&i.limit&&i.limit>0,n}catch(o){return console.warn("Could not retrieve offline events:",o),[]}}async function Tl(h){try{return await(await ee()).get("meta",`last_sync_${h}`)||null}catch{return null}}async function Zs(h,i){try{await(await ee()).put("meta",i,`last_sync_${h}`)}catch(o){console.warn("Failed to set last sync timestamp:",o)}}async function Cl(h){try{await(await ee()).delete("meta",`last_sync_${h}`)}catch(i){console.warn("Failed to clear last sync timestamp:",i)}}async function Gs(h){const i="offline-"+Date.now()+"-"+Math.random().toString(36).substring(2,7);try{const o=await ee();await o.put("pending_events",{localId:i,dto:h,createdAt:new Date().toISOString()});const n={id:i,householdId:h.householdId,petId:h.petId,eventType:h.eventType,loggedByName:h.loggedByName||"Me",timestamp:h.timestamp,notes:h.notes,latitude:h.latitude,longitude:h.longitude,metadata:h.metadata,createdAt:new Date().toISOString(),isOfflinePending:!0,localId:i};await o.put("events",n)}catch(o){console.warn("Failed to enqueue pending offline event:",o)}return i}async function ha(){try{return await(await ee()).getAll("pending_events")}catch{return[]}}async function El(h){try{const i=await ee();await i.delete("pending_events",h),await i.delete("events",h)}catch(i){console.warn("Failed to remove pending event:",i)}}async function zl(h,i){try{const o=await ee();await o.delete("pending_events",h),await o.delete("events",h),await o.put("events",i)}catch(o){console.warn("Failed to replace pending event with server event:",o)}}async function ti(h,i,o,n){try{const a=await ee(),l=await a.getAll("pending_events");for(const d of l)if((!o||d.dto.petId===o)&&(!n||d.dto.householdId===n)){d.dto.petId=h,d.dto.householdId=i,await a.put("pending_events",d);const f=await a.get("events",d.localId);f&&(f.petId=h,f.householdId=i,await a.put("events",f))}}catch(a){console.warn("Failed to rekey pending events:",a)}}async function Al(h){try{const i=await ee();await i.delete("events",h),await i.delete("pending_events",h)}catch(i){console.warn("Failed to delete offline event:",i)}}async function qs(h){try{await(await ee()).put("events",h)}catch(i){console.warn("Failed to update offline event:",i)}}const fn={},Ml="https://watslog-bff.warmsynthsiloveyou.workers.dev/api";function Dl(){const h=fn==null?void 0:fn.VITE_API_URL;if(h)return h.replace(/\/+$/,"");if(typeof window<"u"){const i=window.location.hostname;if(i.endsWith("github.io")||!i.includes("localhost")&&!i.includes("127.0.0.1"))return Ml}return"/api"}const ut=Dl();let De=0;const wn=new Set;let xo=null;function gn(){const h=De;wn.forEach(i=>{try{i(h)}catch(o){console.error("API activity listener error:",o)}})}function Nl(h){return wn.add(h),h(De),()=>{wn.delete(h)}}async function gt(h,i){xo&&(clearTimeout(xo),xo=null),De++,gn();try{return await fetch(h,i)}finally{De=Math.max(0,De-1),De===0?xo=setTimeout(()=>{De===0&&gn()},250):gn()}}function yt(){const h={"Content-Type":"application/json"},i=localStorage.getItem("dooty_auth_token");return i&&(h.Authorization=`Bearer ${i}`),h}class ft{static async signUp(i){const o=await gt(`${ut}/auth/signup`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!o.ok){const n=await o.json().catch(()=>({}));throw new Error(n.error||"Failed to sign up")}return o.json()}static async signIn(i){const o=await gt(`${ut}/auth/signin`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!o.ok){const n=await o.json().catch(()=>({}));throw new Error(n.error||"Invalid email or password")}return o.json()}static async getMe(){const i=await gt(`${ut}/auth/me`,{headers:yt()});if(!i.ok)throw new Error("Unauthorized");return i.json()}static async joinAuthenticated(i,o){const n=await gt(`${ut}/households/join-authenticated`,{method:"POST",headers:yt(),body:JSON.stringify({code:i,role:o})});if(!n.ok){const a=await n.json().catch(()=>({}));throw new Error(a.error||"Failed to join household")}return n.json()}static async claimHousehold(i,o){const n=await gt(`${ut}/households/claim`,{method:"POST",headers:yt(),body:JSON.stringify({householdId:i,role:o})});if(!n.ok){const a=await n.json().catch(()=>({}));throw new Error(a.error||"Failed to claim household")}return n.json()}static async createHousehold(i){const o=await gt(`${ut}/households`,{method:"POST",headers:yt(),body:JSON.stringify(i)});if(!o.ok){const n=await o.json().catch(()=>({}));throw new Error(n.error||"Failed to create household")}return o.json()}static async getHousehold(i){const o=await gt(`${ut}/households/${i}`,{headers:yt()});if(!o.ok)throw new Error("Failed to fetch household");return o.json()}static async removeMember(i,o){if(!(await gt(`${ut}/households/${i}/members/${o}`,{method:"DELETE",headers:yt()})).ok)throw new Error("Failed to remove member")}static async createInviteCode(i){const o=await gt(`${ut}/households/${i}/invites`,{method:"POST",headers:yt()});if(!o.ok)throw new Error("Failed to create invite code");return o.json()}static async joinHousehold(i,o,n){const a=await gt(`${ut}/households/join`,{method:"POST",headers:yt(),body:JSON.stringify({code:i,displayName:o,role:n})});if(!a.ok){const l=await a.json().catch(()=>({}));throw new Error(l.error||"Failed to join household")}return a.json()}static async getPets(i){const o=await gt(`${ut}/households/${i}/pets`,{headers:yt()});if(!o.ok)throw new Error("Failed to fetch pets");return o.json()}static async updatePet(i,o){const n=await gt(`${ut}/pets/${i}`,{method:"PATCH",headers:yt(),body:JSON.stringify(o)});if(!n.ok)throw new Error("Failed to update pet");return n.json()}static async updateMember(i,o,n){const a=await gt(`${ut}/households/${i}/members/${o}`,{method:"PATCH",headers:yt(),body:JSON.stringify(n)});if(!a.ok)throw new Error("Failed to update member");return a.json()}static async getEvents(i,o){if(!navigator.onLine)return Kt(i);try{const n=typeof o=="number"?{limit:o}:o||{},a=new URLSearchParams;n.limit&&a.set("limit",n.limit.toString()),n.offset&&a.set("offset",n.offset.toString()),n.since&&a.set("since",n.since),n.startDate&&a.set("startDate",n.startDate),n.endDate&&a.set("endDate",n.endDate);const l=a.toString(),d=l?`${ut}/pets/${i}/events?${l}`:`${ut}/pets/${i}/events`,p=await gt(d,{headers:yt()});if(!p.ok)throw new Error("Failed to fetch events from server");const f=await p.json();return await Xe(f),f}catch{return Kt(i)}}static async syncEvents(i,o){if(!navigator.onLine)return Kt(i);try{const n=await Tl(i),a=new Date().toISOString();if(n){const l=await this.getEvents(i,{since:n,limit:1e3});return l&&l.length>0&&await Xe(l),await Zs(i,a),Kt(i)}else{const l=new Date(Date.now()-7776e6).toISOString(),d=await this.getEvents(i,{startDate:l,limit:500});return d&&d.length>0&&(await Xe(d),o==null||o(d.length)),await Zs(i,a),this.backfillOlderEvents(i,l,o).catch(p=>{console.warn("Background historical backfill error:",p)}),Kt(i)}}catch(n){return console.warn("Sync failed, using offline fallback:",n),Kt(i)}}static async backfillOlderEvents(i,o,n){if(navigator.onLine)try{let a=o,l=!0;const d=500;for(;l;){const p=await this.getEvents(i,{endDate:a,limit:d});if(!p||p.length===0){l=!1;break}if(await Xe(p),n==null||n(p.length),p.length<d)l=!1;else{const f=p[p.length-1];f&&f.timestamp&&f.timestamp!==a?a=f.timestamp:l=!1}}}catch(a){console.warn("Backfill chunk failed:",a)}}static async createEvent(i){if(!navigator.onLine){const o=await Gs(i);return{id:o,householdId:i.householdId,petId:i.petId,eventType:i.eventType,loggedByName:i.loggedByName||"Me",timestamp:i.timestamp,notes:i.notes,latitude:i.latitude,longitude:i.longitude,metadata:i.metadata,createdAt:new Date().toISOString(),isOfflinePending:!0,localId:o}}try{const o=await gt(`${ut}/events`,{method:"POST",headers:yt(),body:JSON.stringify(i)});if(!o.ok)throw new Error("Server returned error creating event");const n=await o.json();return await Xe([n]),n}catch(o){console.warn("Network request failed, falling back to offline queue:",o);const n=await Gs(i);return{id:n,householdId:i.householdId,petId:i.petId,eventType:i.eventType,loggedByName:i.loggedByName||"Me",timestamp:i.timestamp,notes:i.notes,latitude:i.latitude,longitude:i.longitude,metadata:i.metadata,createdAt:new Date().toISOString(),isOfflinePending:!0,localId:n}}}static async updateEvent(i,o){if(!navigator.onLine){const a=(await Kt("")).find(l=>l.id===i);if(a){const l={...a,...o,eventType:o.eventType??a.eventType,notes:o.notes!==void 0?o.notes:a.notes,latitude:o.latitude!==void 0?o.latitude??void 0:a.latitude,longitude:o.longitude!==void 0?o.longitude??void 0:a.longitude,metadata:o.metadata!==void 0?o.metadata:a.metadata};return await qs(l),l}}try{const n=await gt(`${ut}/events/${i}`,{method:"PATCH",headers:yt(),body:JSON.stringify(o)});if(!n.ok)throw new Error("Server returned error updating event");const a=await n.json();return await qs(a),a}catch(n){throw console.warn("Network update failed:",n),n}}static async deleteEvent(i){if(await Al(i),!!navigator.onLine)try{const o=await gt(`${ut}/events/${i}`,{method:"DELETE",headers:yt()});if(!o.ok&&o.status!==404)throw new Error("Server returned error deleting event")}catch(o){console.warn("Network delete warning:",o)}}static async flushOfflineQueue(){if(!navigator.onLine)return 0;const i=await ha();if(i.length===0)return 0;try{const o=i.map(a=>a.dto),n=await gt(`${ut}/events/batch-sync`,{method:"POST",headers:yt(),body:JSON.stringify({events:o})});if(n.ok){const l=(await n.json().catch(()=>({}))).events||[];for(let p=0;p<i.length;p++){const f=i[p],m=l[p];m?await zl(f.localId,m):await El(f.localId)}l.length>i.length&&await Xe(l.slice(i.length));const d=Array.from(new Set(i.map(p=>p.dto.petId)));for(const p of d)p&&await Cl(p);return i.length}}catch(o){console.warn("Failed to flush offline queue:",o)}return 0}static async importEvents(i){let n=0;for(let a=0;a<i.length;a+=500){const l=i.slice(a,a+500);let d=await gt(`${ut}/import/events`,{method:"POST",headers:yt(),body:JSON.stringify({events:l})});if(d.status===404&&(d=await gt(`${ut}/events/batch-sync`,{method:"POST",headers:yt(),body:JSON.stringify({events:l})})),!d.ok){const f=await d.json().catch(()=>({}));throw new Error(f.error||`Import batch failed (${d.status})`)}const p=await d.json();n+=p.importedCount||p.syncedCount||l.length}return{importedCount:n}}static async importDogNotes(i,o,n){const a=await gt(`${ut}/import/dognotes`,{method:"POST",headers:yt(),body:JSON.stringify({householdId:i,petId:o,items:n})});if(!a.ok)throw new Error("DogNotes import failed");return a.json()}static async getAnalytics(i,o){const n=new URLSearchParams;o!=null&&o.startDate&&n.set("startDate",o.startDate),o!=null&&o.endDate&&n.set("endDate",o.endDate);const a=n.toString(),l=a?`${ut}/pets/${i}/analytics?${a}`:`${ut}/pets/${i}/analytics`,d=await gt(l,{headers:yt()});if(!d.ok)throw new Error("Failed to fetch analytics");return d.json()}static async saveWalkRoute(i){const o=await gt(`${ut}/walks`,{method:"POST",headers:yt(),body:JSON.stringify(i)});if(!o.ok)throw new Error("Failed to save walk route");return o.json()}static async getWalkRoutes(i){const o=await gt(`${ut}/pets/${i}/walks`,{headers:yt()});if(!o.ok)throw new Error("Failed to fetch walk routes");return o.json()}static async getTreatmentSchedules(i){const o=await gt(`${ut}/pets/${i}/treatments`,{headers:yt()});if(!o.ok)throw new Error("Failed to fetch treatment schedules");return o.json()}static async createTreatmentSchedule(i,o){const n=await gt(`${ut}/pets/${i}/treatments`,{method:"POST",headers:yt(),body:JSON.stringify(o)});if(!n.ok)throw new Error("Failed to create treatment schedule");return n.json()}static async updateTreatmentSchedule(i,o){const n=await gt(`${ut}/treatments/${i}`,{method:"PATCH",headers:yt(),body:JSON.stringify(o)});if(!n.ok)throw new Error("Failed to update treatment schedule");return n.json()}static async deleteTreatmentSchedule(i){const o=await gt(`${ut}/treatments/${i}`,{method:"DELETE",headers:yt()});if(!o.ok)throw new Error("Failed to delete treatment schedule");return o.json()}}class Bl{constructor(){this.listeners=new Set,this.currentUser=null,this.currentHousehold=null,this.userHouseholds=[],this.currentPet=null,this.pets=[],this.events=[],this.activeTab="today",this.authView="signin",this.currentLocale="en",this.isOnline=navigator.onLine,this.pendingSyncCount=0,this.isSyncing=!1,this.isApiActive=!1,this.activeApiRequests=0,this.analyticsTimeRange="30d",this.userAvatar=localStorage.getItem("dooty_user_avatar")||"",this.track={poop:!0,pee:!0,vomit:!0,meds:!0,weight:!0,walk:!0,vet:!1,symptom:!1},this.nudges={push:!0,weekly:!0,gap:!0,vet:!1},this.pendingInvites=[],this.loggerModalOpen=!1,this.loggerEventType=null,this.editingEvent=null,this.photoModalOpen=!1,this.photoModalTarget="pet",this.photoModalTargetId="",this.photoModalCurrentAvatar="",this.photoModalTitle="",this.isLoading=!1,this.petSwitcherOpen=!1,this.treatmentsDrawerOpen=!1,this.treatments=[],this.historyMonthOffset=0,this.historySelectedDay=null,this.historyTypeFilters=[],this.historyMemberFilter="all",this.historySearchOpen=!1,this.historySearchQuery="",this.activeWalk=null,this.walkView=null,this.walkHomeAsk=!1,this.homeAsked=!1,this.walkSummaryData=null;const i=localStorage.getItem("dooty_locale");if(i&&(i==="en"||i==="ko"))this.currentLocale=i;else{const d=typeof navigator<"u"&&navigator.language||"";this.currentLocale=d.startsWith("ko")?"ko":"en"}typeof document<"u"&&(document.documentElement.lang=this.currentLocale,document.body.classList.toggle("lang-ko",this.currentLocale==="ko"));const o=localStorage.getItem("dooty_track_prefs");if(o)try{this.track={...this.track,...JSON.parse(o)}}catch(d){console.warn("Failed to parse track prefs:",d)}const n=localStorage.getItem("dooty_nudge_prefs");if(n)try{this.nudges={...this.nudges,...JSON.parse(n)}}catch(d){console.warn("Failed to parse nudge prefs:",d)}const a=localStorage.getItem("dooty_analytics_timerange");a&&["7d","30d","1y","all"].includes(a)&&(this.analyticsTimeRange=a);const l=localStorage.getItem("dooty_household_data");if(l)try{const d=JSON.parse(l);if(this.currentHousehold=d,this.pets=d.pets||[],this.pets.length>0){const p=localStorage.getItem("dooty_pet_id");this.currentPet=this.pets.find(f=>f.id===p)||this.pets[0],Kt(this.currentPet.id).then(f=>{f.length>0&&this.events.length===0&&(this.events=f,this.notify())})}this.loadPendingInvites(),this.loadTreatmentsForPet()}catch(d){console.warn("Failed to parse cached household data:",d)}window.addEventListener("online",()=>this.handleNetworkChange(!0)),window.addEventListener("offline",()=>this.handleNetworkChange(!1)),Nl(d=>{this.activeApiRequests=d,this.isApiActive=d>0,this.notify()})}subscribe(i){return this.listeners.add(i),()=>this.listeners.delete(i)}notify(){this.listeners.forEach(i=>i())}get t(){return tl[this.currentLocale]}setLocale(i){this.currentLocale=i,localStorage.setItem("dooty_locale",i),typeof document<"u"&&(document.documentElement.lang=i,document.body.classList.toggle("lang-ko",i==="ko")),this.notify()}setActiveTab(i){this.activeTab=i,this.notify()}openPetSwitcher(){this.petSwitcherOpen=!0,this.notify()}closePetSwitcher(){this.petSwitcherOpen=!1,this.notify()}selectPetById(i){const o=this.pets.find(n=>n.id===i);o&&(this.selectPet(o),this.closePetSwitcher())}openTreatmentsDrawer(){this.treatmentsDrawerOpen=!0,this.notify()}closeTreatmentsDrawer(){this.treatmentsDrawerOpen=!1,this.notify()}async loadTreatmentsForPet(i){var l;const o=i||((l=this.currentPet)==null?void 0:l.id)||"default",n=`dooty_treatments_${o}`,a=localStorage.getItem(n);if(a)try{const d=JSON.parse(a),p=new Date;p.setHours(0,0,0,0),this.treatments=d.map(f=>{if(f.nextDueAt){const m=new Date(f.nextDueAt);m.setHours(0,0,0,0);const y=Math.round((m.getTime()-p.getTime())/864e5);return{...f,due:y}}return f})}catch(d){console.warn("Failed to parse stored treatments:",d)}else{const d=new Date;d.setHours(0,0,0,0),this.treatments=[{id:"trt_flea_tick",petId:o,name:"Flea & tick",dose:"Bravecto spot-on",every:90,due:2,nextDueAt:new Date(d.getTime()+2*864e5).toISOString()},{id:"trt_heartworm",petId:o,name:"Heartworm",dose:"Milbemax chew",every:30,due:12,nextDueAt:new Date(d.getTime()+12*864e5).toISOString()},{id:"trt_dewormer",petId:o,name:"Dewormer",dose:"Panacur, 3 days",every:90,due:-3,nextDueAt:new Date(d.getTime()-3*864e5).toISOString()}],this.saveTreatments()}if(this.isAuthenticated&&o&&o!=="default")try{const d=await ft.getTreatmentSchedules(o);d&&d.length>0&&(this.treatments=d,this.saveTreatments(),this.notify())}catch(d){console.warn("Could not sync treatment schedules from cloud:",d)}}saveTreatments(){var n;const o=`dooty_treatments_${((n=this.currentPet)==null?void 0:n.id)||"default"}`;localStorage.setItem(o,JSON.stringify(this.treatments))}formatTreatmentLeft(i){const o=this.currentLocale==="ko";if(i<0){const n=Math.abs(i);return o?`${n}일 지남`:`${n} ${n===1?"day late":"days late"}`}return i===0?o?"오늘":"Today":i===1?o?"내일":"Tomorrow":o?`${i}일 후`:`in ${i} days`}formatTreatmentDueDate(i){const o=new Date;o.setDate(o.getDate()+i);const n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return this.currentLocale==="ko"?`${o.getMonth()+1}월 ${o.getDate()}일`:`${o.getDate()} ${n[o.getMonth()]}`}getTreatmentEveryLabel(i){const o=this.currentLocale==="ko";switch(i){case 7:return o?"1주일":"week";case 30:return o?"1개월":"month";case 90:return o?"3개월":"3 months";case 180:return o?"6개월":"6 months";case 365:return o?"1년":"year";default:return o?`${i}일`:`${i} days`}}getTreatmentSkin(i){const o=i<0,n=i>=0&&i<=3;return{bg:o?"#FF5A3C":n?"#FF9A3C":"#FFF",chip:o||n?"#FFF":"#BFD0FF",fg:o?"#FFF":"#17140F",sub:o?"rgba(255,255,255,0.82)":n?"#7A3F00":"#6A6152",anim:o?"tb-nudge 3s ease-in-out infinite":"none"}}getNextTreatment(){const i=this.currentLocale==="ko",o=this.treatments.slice().sort((a,l)=>a.due-l.due);if(o.length===0)return{item:null,name:i?"등록된 일정 없음":"Nothing scheduled",tag:"M",left:"—",date:i?"일정 추가":"add one",skin:{bg:"#FFFBF2",chip:"#E8DFCB",fg:"#17140F",sub:"#9A9080",anim:"none"}};const n=o[0];return{item:n,name:n.name,tag:n.name.trim().charAt(0).toUpperCase()||"M",left:this.formatTreatmentLeft(n.due),date:this.formatTreatmentDueDate(n.due),skin:this.getTreatmentSkin(n.due)}}giveTreatment(i){const o=this.currentLocale==="ko",n=this.treatments.find(p=>p.id===i);if(!n)return{title:"",sub:""};const a=new Date(Date.now()+n.every*864e5).toISOString();this.treatments=this.treatments.map(p=>p.id===i?{...p,due:p.every,lastGivenAt:new Date().toISOString(),nextDueAt:a}:p),this.saveTreatments(),this.currentHousehold&&this.currentPet&&this.logEvent("medicine",`${n.name}${n.dose?" · "+n.dose:""}`,{medication:n.name,dosage:n.dose,treatmentScheduleId:n.id}).catch(p=>console.warn("Could not auto-log treatment event:",p)),this.isAuthenticated&&ft.updateTreatmentSchedule(i,{nextDueAt:a,lastGivenAt:new Date().toISOString()}).catch(p=>console.warn("Could not sync treatment update to server:",p));const l=o?`${n.name} 투약 완료`:`${n.name} given`,d=o?`다음 예정일: ${this.formatTreatmentDueDate(n.every)}`:`Next one due ${this.formatTreatmentDueDate(n.every)}.`;return this.notify(),{title:l,sub:d}}addTreatment(i){var m;const o=this.currentLocale==="ko",n=i.name.trim();if(!n)return{title:"",sub:""};const a="trt_"+Date.now(),l=new Date(Date.now()+i.every*864e5).toISOString(),d={id:a,petId:(m=this.currentPet)==null?void 0:m.id,name:n,dose:i.dose.trim()||(o?"복용량 미입력":"no dose noted"),every:i.every,due:i.every,nextDueAt:l};this.treatments=[...this.treatments,d],this.saveTreatments(),this.isAuthenticated&&this.currentPet&&ft.createTreatmentSchedule(this.currentPet.id,{name:d.name,dose:d.dose,every:d.every,nextDueAt:d.nextDueAt}).then(y=>{y&&y.id&&(this.treatments=this.treatments.map(x=>x.id===a?y:x),this.saveTreatments(),this.notify())}).catch(y=>console.warn("Could not sync treatment creation to server:",y));const p=o?`${d.name} 추가됨`:`${d.name} added`,f=o?`첫 투약 예정일: ${this.formatTreatmentDueDate(i.every)}`:`First one due ${this.formatTreatmentDueDate(i.every)}.`;return this.notify(),{title:p,sub:f}}removeTreatment(i){const o=this.currentLocale==="ko",n=this.treatments.find(a=>a.id===i);return this.treatments=this.treatments.filter(a=>a.id!==i),this.saveTreatments(),this.isAuthenticated&&ft.deleteTreatmentSchedule(i).catch(a=>console.warn("Could not sync treatment deletion to server:",a)),this.notify(),{title:o?`${(n==null?void 0:n.name)||"일정"} 삭제됨`:`${(n==null?void 0:n.name)||"Treatment"} removed`,sub:o?"반복 일정에서 제외되었습니다.":"Removed from repeating schedule."}}setHistoryMonthOffset(i){this.historyMonthOffset=i,this.historySelectedDay=null,this.notify()}setHistorySelectedDay(i){this.historySelectedDay=i,this.notify()}toggleHistoryTypeFilter(i){this.historyTypeFilters.includes(i)?this.historyTypeFilters=this.historyTypeFilters.filter(o=>o!==i):this.historyTypeFilters=[...this.historyTypeFilters,i],this.notify()}setHistoryMemberFilter(i){this.historyMemberFilter=i,this.notify()}clearHistoryFilters(){this.historyTypeFilters=[],this.historyMemberFilter="all",this.historySearchQuery="",this.notify()}setHistorySearchOpen(i){this.historySearchOpen=i,this.notify()}setHistorySearchQuery(i){this.historySearchQuery=i,this.notify()}startLiveWalk(i){var n;this.walkTimerInterval&&clearInterval(this.walkTimerInterval),((n=this.activeWalk)==null?void 0:n.geoWatchId)!==void 0&&typeof navigator<"u"&&navigator.geolocation&&navigator.geolocation.clearWatch(this.activeWalk.geoWatchId);const o=i&&i.length>0?i:this.currentPet?[this.currentPet.id]:[];this.activeWalk={startTime:Date.now(),pausedTotal:0,pausedAt:null,route:[],petIds:o,distanceMeters:0},this.walkView="live",this.walkHomeAsk=!1,this.homeAsked=!1,this.walkSummaryData=null,typeof navigator<"u"&&navigator.geolocation&&(this.activeWalk.geoWatchId=navigator.geolocation.watchPosition(a=>{if(!this.activeWalk||this.activeWalk.pausedAt)return;const l=a.coords.latitude,d=a.coords.longitude;if(typeof l!="number"||typeof d!="number"||isNaN(l)||isNaN(d))return;const p=this.activeWalk.route;if(p.length===0)this.activeWalk.startLat=l,this.activeWalk.startLng=d,this.activeWalk.currentLat=l,this.activeWalk.currentLng=d,this.activeWalk.route=[[l,d]],this.tryReverseGeocodeForWalk(l,d,!0);else{const f=p[p.length-1],m=this.computeDistanceMeters(f[0],f[1],l,d);m>=1.5&&m<500&&(this.activeWalk.distanceMeters+=m,this.activeWalk.route=[...p,[l,d]]),this.activeWalk.currentLat=l,this.activeWalk.currentLng=d}this.notify()},a=>{console.warn("Live walk GPS tracking error:",a)},{enableHighAccuracy:!0,maximumAge:2e3,timeout:1e4})),this.notify(),this.walkTimerInterval=setInterval(()=>{if(!this.activeWalk||this.activeWalk.pausedAt)return;const a=this.getWalkSeconds();!this.homeAsked&&a>=120&&(this.walkHomeAsk=!0,this.homeAsked=!0),this.notify()},1e3)}computeDistanceMeters(i,o,n,a){const d=i*Math.PI/180,p=n*Math.PI/180,f=(n-i)*Math.PI/180,m=(a-o)*Math.PI/180,y=Math.sin(f/2)*Math.sin(f/2)+Math.cos(d)*Math.cos(p)*Math.sin(m/2)*Math.sin(m/2);return 6371e3*(2*Math.atan2(Math.sqrt(y),Math.sqrt(1-y)))}async tryReverseGeocodeForWalk(i,o,n){var a,l,d,p,f,m,y,x;try{const _=await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${i}&lon=${o}&zoom=18&addressdetails=1`,{headers:{Accept:"application/json"}});if(_.ok){const F=await _.json(),$=((a=F.address)==null?void 0:a.road)||((l=F.address)==null?void 0:l.pedestrian)||((d=F.address)==null?void 0:d.suburb)||((p=F.address)==null?void 0:p.neighbourhood),T=((f=F.address)==null?void 0:f.city)||((m=F.address)==null?void 0:m.town)||((y=F.address)==null?void 0:y.village)||((x=F.address)==null?void 0:x.county),M=$&&T?`${$}, ${T}`:$||(F.display_name?F.display_name.split(",").slice(0,2).join(",").trim():"");M&&this.activeWalk&&(n?this.activeWalk.startLocationName=M:this.activeWalk.endLocationName=M,this.notify())}}catch{}}getWalkSeconds(){if(!this.activeWalk)return 0;const i=Date.now(),o=this.activeWalk.pausedTotal+(this.activeWalk.pausedAt?i-this.activeWalk.pausedAt:0);return Math.max(0,Math.floor((i-this.activeWalk.startTime-o)/1e3))}getWalkDistanceKm(){return this.activeWalk&&this.activeWalk.distanceMeters>0?(this.activeWalk.distanceMeters/1e3).toFixed(2):(this.getWalkSeconds()/3600*4.8).toFixed(2)}getWalkPace(){const i=this.getWalkSeconds();if(i<20)return`9'40"`;const o=parseFloat(this.getWalkDistanceKm());if(o<=.01)return`9'40"`;const n=i/60/o;if(n>35)return`35'00"`;const a=Math.floor(n),l=Math.round((n-a)*60);return`${a}'${String(l).padStart(2,"0")}"`}pauseLiveWalk(){if(!this.activeWalk)return;const i=Date.now();this.activeWalk.pausedAt?(this.activeWalk.pausedTotal+=i-this.activeWalk.pausedAt,this.activeWalk.pausedAt=null):this.activeWalk.pausedAt=i,this.notify()}minimizeWalk(){this.walkView=null,this.notify()}expandWalk(){this.walkView="live",this.notify()}keepWalking(){this.walkHomeAsk=!1,this.notify()}endLiveWalk(){var y;if(this.walkTimerInterval&&clearInterval(this.walkTimerInterval),!this.activeWalk)return;this.activeWalk.geoWatchId!==void 0&&typeof navigator<"u"&&navigator.geolocation&&navigator.geolocation.clearWatch(this.activeWalk.geoWatchId);const i=this.getWalkSeconds(),o=parseFloat(this.getWalkDistanceKm()),n=this.getWalkPace(),a=this.activeWalk.petIds.map(x=>{var _;return(_=this.pets.find(F=>F.id===x))==null?void 0:_.name}).filter(Boolean),l=new Date(this.activeWalk.startTime),d=new Date,p=x=>x.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),f=this.activeWalk.currentLat??(this.activeWalk.route.length>0?this.activeWalk.route[this.activeWalk.route.length-1][0]:void 0),m=this.activeWalk.currentLng??(this.activeWalk.route.length>0?this.activeWalk.route[this.activeWalk.route.length-1][1]:void 0);this.activeWalk.endLat=f,this.activeWalk.endLng=m,f!==void 0&&m!==void 0&&!this.activeWalk.endLocationName&&this.tryReverseGeocodeForWalk(f,m,!1),this.walkSummaryData={durationSec:i,distanceKm:o,pace:n,route:this.activeWalk.route,petNames:a.length>0?a:[((y=this.currentPet)==null?void 0:y.name)||"Pet"],startTime:p(l),endTime:p(d),startLat:this.activeWalk.startLat,startLng:this.activeWalk.startLng,startLocationName:this.activeWalk.startLocationName,endLat:f,endLng:m,endLocationName:this.activeWalk.endLocationName},this.walkView="summary",this.walkHomeAsk=!1,this.notify()}async saveLiveWalk(i="",o=""){var d;if(!this.walkSummaryData)return;const n=this.walkSummaryData,a=Math.max(1,Math.round(n.durationSec/60))+" min",l=n.distanceKm+" km";((d=this.activeWalk)==null?void 0:d.geoWatchId)!==void 0&&typeof navigator<"u"&&navigator.geolocation&&navigator.geolocation.clearWatch(this.activeWalk.geoWatchId),await this.logEvent("walk",i||`Walk · ${a} · ${l}`,{walkDuration:a,walkDistance:l,photoUrl:o,petNames:n.petNames,startLat:n.startLat,startLng:n.startLng,startLocationName:n.startLocationName,endLat:n.endLat,endLng:n.endLng,endLocationName:n.endLocationName,route:n.route},n.startLat,n.startLng),this.activeWalk=null,this.walkView=null,this.walkSummaryData=null,this.walkHomeAsk=!1,this.homeAsked=!1,this.notify()}discardLiveWalk(){var i;this.walkTimerInterval&&clearInterval(this.walkTimerInterval),((i=this.activeWalk)==null?void 0:i.geoWatchId)!==void 0&&typeof navigator<"u"&&navigator.geolocation&&navigator.geolocation.clearWatch(this.activeWalk.geoWatchId),this.activeWalk=null,this.walkView=null,this.walkSummaryData=null,this.walkHomeAsk=!1,this.homeAsked=!1,this.notify()}setAuthView(i){this.authView=i,this.notify()}setTrackingPreference(i,o){this.track={...this.track,[i]:o},localStorage.setItem("dooty_track_prefs",JSON.stringify(this.track)),this.notify()}setNudgePreference(i,o){this.nudges={...this.nudges,[i]:o},localStorage.setItem("dooty_nudge_prefs",JSON.stringify(this.nudges)),this.notify()}setAnalyticsTimeRange(i){this.analyticsTimeRange=i,localStorage.setItem("dooty_analytics_timerange",i),this.notify()}openLogger(i){this.editingEvent=null,this.loggerEventType=i||null,this.loggerModalOpen=!0,this.notify()}openLoggerForEdit(i){this.editingEvent=i,this.loggerEventType=i.eventType,this.loggerModalOpen=!0,this.notify()}closeLogger(){this.loggerModalOpen=!1,this.loggerEventType=null,this.editingEvent=null,this.notify()}openPhotoModal(i){this.photoModalTarget=i.target,this.photoModalTargetId=i.targetId||"",this.photoModalCurrentAvatar=i.currentAvatar||"",this.photoModalTitle=i.title||"",this.photoModalOpen=!0,this.notify()}closePhotoModal(){this.photoModalOpen=!1,this.notify()}async updatePetAvatar(i,o){await this.updatePetProfile(i,{avatarUrl:o})}async updatePetProfile(i,o){if(this.currentPet&&this.currentPet.id===i&&(this.currentPet={...this.currentPet,...o}),this.pets=this.pets.map(n=>n.id===i?{...n,...o}:n),this.currentHousehold&&(this.currentHousehold={...this.currentHousehold,pets:this.pets},localStorage.setItem("dooty_household_data",JSON.stringify(this.currentHousehold))),o.avatarUrl!==void 0&&localStorage.setItem(`dooty_pet_avatar_${i}`,o.avatarUrl),this.notify(),navigator.onLine)try{await ft.updatePet(i,o)}catch(n){console.warn("Could not sync pet profile to server:",n)}}async updateUserAvatar(i){var o;if(this.userAvatar=i,localStorage.setItem("dooty_user_avatar",i),this.notify(),this.currentHousehold&&((o=this.currentHousehold.members)!=null&&o.length)){const n=this.currentHousehold.members[0];if(n&&(n.avatarUrl=i,navigator.onLine))try{await ft.updateMember(this.currentHousehold.id,n.id,{avatarUrl:i})}catch(a){console.warn("Could not sync member avatar to server:",a)}}}async updateMemberAvatar(i,o){if(this.currentHousehold&&this.currentHousehold.members){const n=this.currentHousehold.members.find(a=>a.id===i);if(n&&(n.avatarUrl=o,localStorage.setItem(`dooty_member_avatar_${i}`,o),this.notify(),navigator.onLine))try{await ft.updateMember(this.currentHousehold.id,i,{avatarUrl:o})}catch(a){console.warn("Could not sync member avatar to server:",a)}}}loadPendingInvites(){if(!this.currentHousehold)return;const i=localStorage.getItem(`dooty_pending_invites_${this.currentHousehold.id}`);if(i)try{this.pendingInvites=JSON.parse(i)}catch{this.pendingInvites=[]}else this.pendingInvites=[{code:"H3P8",role:"Log only",when:"sent to Dan · expires in 6 days",expiresAt:new Date(Date.now()+6*864e5).toISOString()},{code:"B9XT",role:"Full member",when:"unsent · expires in 7 days",expiresAt:new Date(Date.now()+7*864e5).toISOString()}],localStorage.setItem(`dooty_pending_invites_${this.currentHousehold.id}`,JSON.stringify(this.pendingInvites))}async createInvite(i="Full member"){let o="";if(this.currentHousehold){try{o=(await ft.createInviteCode(this.currentHousehold.id)).code}catch(a){console.warn("Could not generate invite code from server, creating locally:",a);const l="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";o=Array.from({length:6},()=>l.charAt(Math.floor(Math.random()*l.length))).join("")}const n={code:o,role:i,when:"just created · expires in 7 days",expiresAt:new Date(Date.now()+7*864e5).toISOString()};this.pendingInvites=[n,...this.pendingInvites],localStorage.setItem(`dooty_pending_invites_${this.currentHousehold.id}`,JSON.stringify(this.pendingInvites)),this.notify()}return o}async revokeInvite(i){this.currentHousehold&&(this.pendingInvites=this.pendingInvites.filter(o=>o.code!==i),localStorage.setItem(`dooty_pending_invites_${this.currentHousehold.id}`,JSON.stringify(this.pendingInvites)),this.notify())}exportEventsCsv(){var f;const i=((f=this.currentPet)==null?void 0:f.name)||"Pet",o=["Timestamp","Pet Name","Event Type","Logged By","Notes","Latitude","Longitude"],n=(this.events||[]).map(m=>[`"${m.timestamp||""}"`,`"${i}"`,`"${m.eventType||""}"`,`"${(m.loggedByName||"").replace(/"/g,'""')}"`,`"${(m.notes||"").replace(/"/g,'""')}"`,m.latitude!==void 0&&m.latitude!==null?m.latitude:"",m.longitude!==void 0&&m.longitude!==null?m.longitude:""]),a=[o.join(","),...n.map(m=>m.join(","))].join(`
`),l=new Blob([a],{type:"text/csv;charset=utf-8;"}),d=URL.createObjectURL(l),p=document.createElement("a");p.setAttribute("href",d),p.setAttribute("download",`dooty-${i.toLowerCase()}-events.csv`),document.body.appendChild(p),p.click(),document.body.removeChild(p),URL.revokeObjectURL(d)}exportFullBackupJson(){var f;const i={app:"Dooty",version:"1.0",exportedAt:new Date().toISOString(),household:this.currentHousehold,pets:this.pets,currentPet:this.currentPet,treatments:this.treatments,events:this.events},o=JSON.stringify(i,null,2),n=new Blob([o],{type:"application/json;charset=utf-8;"}),a=URL.createObjectURL(n),l=document.createElement("a");l.setAttribute("href",a);const d=new Date().toISOString().split("T")[0],p=(((f=this.currentPet)==null?void 0:f.name)||"dooty").toLowerCase();l.setAttribute("download",`dooty-${p}-backup-${d}.json`),document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(a)}async init(){var i,o;this.isLoading=!0,this.notify();try{if(typeof window<"u"){if(window.location.hash&&window.location.hash.includes("access_token=")){const a=window.location.hash.substring(1),d=new URLSearchParams(a).get("access_token");d&&(localStorage.setItem("dooty_auth_token",d),window.history.replaceState(null,"",window.location.pathname+window.location.search))}else if(window.location.search&&window.location.search.includes("access_token=")){const l=new URLSearchParams(window.location.search).get("access_token");l&&(localStorage.setItem("dooty_auth_token",l),window.history.replaceState(null,"",window.location.pathname))}}if(localStorage.getItem("dooty_auth_token"))try{const a=await ft.getMe();this.currentUser=a.user,this.userHouseholds=a.households||[],a.activeHousehold&&(this.currentHousehold=a.activeHousehold,localStorage.setItem("dooty_household_id",a.activeHousehold.id),localStorage.setItem("dooty_household_data",JSON.stringify(a.activeHousehold)))}catch(a){if(console.warn("Network sync for auth session failed, using cached session:",a),(i=a.message)!=null&&i.includes("Unauthorized")||(o=a.message)!=null&&o.includes("expired")){this.signOut();return}}else{const a=localStorage.getItem("dooty_household_id");if(a)try{const l=await ft.getHousehold(a);l&&(this.currentHousehold=l,localStorage.setItem("dooty_household_data",JSON.stringify(l)))}catch(l){console.warn("Network sync for household failed, using cached session:",l)}}if(this.currentHousehold){const a=this.currentHousehold.pets||await ft.getPets(this.currentHousehold.id);if(this.pets=a.map(l=>{const d=localStorage.getItem(`dooty_pet_avatar_${l.id}`);return{...l,avatarUrl:l.avatarUrl||d||""}}),this.currentHousehold.members&&(this.currentHousehold.members=this.currentHousehold.members.map(l=>{const d=localStorage.getItem(`dooty_member_avatar_${l.id}`);return{...l,avatarUrl:l.avatarUrl||d||(l.role==="owner"?this.userAvatar:"")}})),this.pets.length>0){const l=localStorage.getItem("dooty_pet_id");this.currentPet=this.pets.find(d=>d.id===l)||this.pets[0]}else this.currentPet=null;this.loadPendingInvites()}this.currentPet?(this.currentHousehold&&await ti(this.currentPet.id,this.currentHousehold.id),await ft.flushOfflineQueue(),await this.refreshEvents()):this.events=[],await this.checkPendingSync()}catch(n){console.warn("Init loaded with local fallback:",n)}finally{this.isLoading=!1,this.notify()}}async selectPet(i){this.currentPet=i,localStorage.setItem("dooty_pet_id",i.id),this.loadTreatmentsForPet(i.id),this.events=await Kt(i.id),this.notify(),this.syncEvents()}async selectHousehold(i){const o=this.userHouseholds.find(a=>a.id===i);if(!o)return;this.currentHousehold=o,localStorage.setItem("dooty_household_id",o.id),localStorage.setItem("dooty_household_data",JSON.stringify(o));const n=o.pets||await ft.getPets(o.id);this.pets=n,n.length>0?(this.currentPet=n[0],localStorage.setItem("dooty_pet_id",this.currentPet.id),await ti(this.currentPet.id,o.id),await ft.flushOfflineQueue(),this.events=await Kt(this.currentPet.id),this.syncEvents()):(this.currentPet=null,this.events=[]),this.loadPendingInvites(),this.notify()}async refreshEvents(){if(!this.currentPet){this.events=[],this.notify();return}this.events=await Kt(this.currentPet.id),this.notify(),await this.syncEvents()}async syncEvents(){var o,n;if(!this.currentPet)return;const i=this.currentPet.id;this.isSyncing=!0,this.notify();try{if(navigator.onLine){const l=await ft.flushOfflineQueue();await this.checkPendingSync(),l>0&&((o=this.currentPet)==null?void 0:o.id)===i&&(this.events=await Kt(i),this.notify())}const a=await ft.syncEvents(i,async()=>{var l;((l=this.currentPet)==null?void 0:l.id)===i&&(this.events=await Kt(i),this.notify())});((n=this.currentPet)==null?void 0:n.id)===i&&(this.events=a,this.notify())}catch(a){console.warn("Sync events warning:",a)}finally{this.isSyncing=!1,this.notify()}}async logEvent(i,o="",n,a,l,d){var m,y,x,_;if(!this.currentHousehold||!this.currentPet)return;const p=((m=this.currentUser)==null?void 0:m.displayName)||((x=(y=this.currentHousehold.members)==null?void 0:y[0])==null?void 0:x.displayName)||"Owner",f=await ft.createEvent({householdId:this.currentHousehold.id,petId:this.currentPet.id,eventType:i,loggedByName:p,loggedByUserId:(_=this.currentUser)==null?void 0:_.id,timestamp:d||new Date().toISOString(),notes:o,latitude:a,longitude:l,metadata:n||{}});this.events=[f,...this.events],await this.checkPendingSync(),this.notify()}async updateEvent(i,o,n="",a,l,d,p){const f={eventType:o,notes:n,metadata:a||{},latitude:l,longitude:d};p&&(f.timestamp=p);try{const m=await ft.updateEvent(i,f);this.events=this.events.map(y=>y.id===i?{...y,...m}:y)}catch{this.events=this.events.map(y=>y.id===i?{...y,eventType:o,notes:n,metadata:a||y.metadata,latitude:l!==void 0?l:y.latitude,longitude:d!==void 0?d:y.longitude,...p?{timestamp:p}:{}}:y)}this.notify()}async deleteEvent(i){try{await ft.deleteEvent(i)}catch(o){console.warn("Failed to delete event on backend:",o)}this.events=this.events.filter(o=>o.id!==i&&o.localId!==i),this.notify()}async handleNetworkChange(i){this.isOnline=i,i&&await ft.flushOfflineQueue()>0&&await this.refreshEvents(),await this.checkPendingSync(),this.notify()}get isAuthenticated(){return this.currentHousehold!==null}signOut(){localStorage.removeItem("dooty_auth_token"),localStorage.removeItem("dooty_household_id"),localStorage.removeItem("dooty_household_data"),localStorage.removeItem("dooty_pet_id"),localStorage.removeItem("dooty_user_avatar"),this.currentUser=null,this.currentHousehold=null,this.userHouseholds=[],this.currentPet=null,this.pets=[],this.events=[],this.userAvatar="",this.activeTab="today",this.authView="signin",this.notify()}async signUp(i){this.isLoading=!0,this.notify();try{!i.redirectTo&&typeof window<"u"&&(i.redirectTo=window.location.origin+window.location.pathname);const o=await ft.signUp(i);if(this.currentUser=o.user,this.currentHousehold=o.activeHousehold,this.userHouseholds=o.households||(o.activeHousehold?[o.activeHousehold]:[]),o.token&&localStorage.setItem("dooty_auth_token",o.token),o.activeHousehold){localStorage.setItem("dooty_household_id",o.activeHousehold.id),localStorage.setItem("dooty_household_data",JSON.stringify(o.activeHousehold));const n=o.activeHousehold.pets||[];this.pets=n,n.length>0?(this.currentPet=n[0],localStorage.setItem("dooty_pet_id",this.currentPet.id),await ti(this.currentPet.id,o.activeHousehold.id),await ft.flushOfflineQueue(),await this.refreshEvents()):this.currentPet=null,this.loadPendingInvites()}this.authView="signin"}finally{this.isLoading=!1,this.notify()}}async signIn(i){this.isLoading=!0,this.notify();try{const o=await ft.signIn(i);if(this.currentUser=o.user,this.currentHousehold=o.activeHousehold,this.userHouseholds=o.households||(o.activeHousehold?[o.activeHousehold]:[]),o.token&&localStorage.setItem("dooty_auth_token",o.token),o.activeHousehold){localStorage.setItem("dooty_household_id",o.activeHousehold.id),localStorage.setItem("dooty_household_data",JSON.stringify(o.activeHousehold));const n=o.activeHousehold.pets||[];this.pets=n,n.length>0?(this.currentPet=n[0],localStorage.setItem("dooty_pet_id",this.currentPet.id),await ti(this.currentPet.id,o.activeHousehold.id),await ft.flushOfflineQueue(),await this.refreshEvents()):this.currentPet=null,this.loadPendingInvites()}this.authView="signin"}finally{this.isLoading=!1,this.notify()}}async joinAuthenticated(i,o){this.isLoading=!0,this.notify();try{const n=await ft.joinAuthenticated(i,o);if(this.userHouseholds=n.households||[],n.activeHousehold){this.currentHousehold=n.activeHousehold,localStorage.setItem("dooty_household_id",n.activeHousehold.id),localStorage.setItem("dooty_household_data",JSON.stringify(n.activeHousehold));const a=n.activeHousehold.pets||[];this.pets=a,a.length>0&&(this.currentPet=a[0],localStorage.setItem("dooty_pet_id",this.currentPet.id),await ti(this.currentPet.id,n.activeHousehold.id),await ft.flushOfflineQueue(),await this.refreshEvents()),this.loadPendingInvites()}}finally{this.isLoading=!1,this.notify()}}async claimHousehold(i,o){this.isLoading=!0,this.notify();try{const n=await ft.claimHousehold(i,o);if(this.userHouseholds=n.households||[],n.activeHousehold){this.currentHousehold=n.activeHousehold,localStorage.setItem("dooty_household_id",n.activeHousehold.id),localStorage.setItem("dooty_household_data",JSON.stringify(n.activeHousehold));const a=n.activeHousehold.pets||[];this.pets=a,a.length>0&&(this.currentPet=a[0],localStorage.setItem("dooty_pet_id",this.currentPet.id),await ti(this.currentPet.id,n.activeHousehold.id),await ft.flushOfflineQueue(),await this.refreshEvents()),this.loadPendingInvites()}}finally{this.isLoading=!1,this.notify()}}async removeMember(i){if(this.currentHousehold){this.isLoading=!0,this.notify();try{await ft.removeMember(this.currentHousehold.id,i),this.currentHousehold.members=(this.currentHousehold.members||[]).filter(o=>o.id!==i),localStorage.setItem("dooty_household_data",JSON.stringify(this.currentHousehold))}finally{this.isLoading=!1,this.notify()}}}async checkPendingSync(){const i=await ha();this.pendingSyncCount=i.length,this.notify()}}const g=new Bl;var Il=function(h,i,o,n){var a=arguments.length,l=a<3?i:n===null?n=Object.getOwnPropertyDescriptor(i,o):n,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,i,o,n);else for(var p=h.length-1;p>=0;p--)(d=h[p])&&(l=(a<3?d(l):a>3?d(i,o,l):d(i,o))||l);return a>3&&l&&Object.defineProperty(i,o,l),l},ii;let Ks=(ii=class extends Ft{connectedCallback(){super.connectedCallback(),this.unsubscribe=g.subscribe(()=>this.requestUpdate())}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.unsubscribe)==null||i.call(this)}render(){const i=g.currentLocale==="ko",o=g.activeTab;return b`
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
  `,ii);Ks=Il([Mt("dooty-dock")],Ks);var pa=function(h,i,o,n){var a=arguments.length,l=a<3?i:n===null?n=Object.getOwnPropertyDescriptor(i,o):n,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,i,o,n);else for(var p=h.length-1;p>=0;p--)(d=h[p])&&(l=(a<3?d(l):a>3?d(i,o,l):d(i,o))||l);return a>3&&l&&Object.defineProperty(i,o,l),l},oi;let _n=(oi=class extends Ft{connectedCallback(){super.connectedCallback(),this.unsubscribe=g.subscribe(()=>this.requestUpdate())}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.unsubscribe)==null||i.call(this)}formatTime(i){const o=new Date(i);return isNaN(o.getTime())?"":o.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}).toLowerCase()}getEventVisuals(i){switch(i){case"poop":return{tag:"P",bg:"#FFCE2E"};case"pee":return{tag:"U",bg:"#BFD0FF"};case"walk":return{tag:"W",bg:"#9EC6E8"};case"medicine":return{tag:"M",bg:"#1FC99B"};case"vomit":return{tag:"V",bg:"#FF9A3C"};case"weight":return{tag:"KG",bg:"#2B5BE8"};case"vet":return{tag:"D",bg:"#FFD15C"};case"symptom":return{tag:"S",bg:"#FF5A3C"};case"food":return{tag:"F",bg:"#FFB800"};case"water":return{tag:"H",bg:"#60A5FA"};case"playing":return{tag:"T",bg:"#FBBF24"};case"grooming":return{tag:"G",bg:"#F472B6"};default:return{tag:"E",bg:"#FFCE2E"}}}render(){var mt,Y,z,lt;const i=g.currentLocale==="ko",o=((mt=g.currentPet)==null?void 0:mt.name)||(i?"반려견":"My Pet"),n=((Y=g.currentPet)==null?void 0:Y.id)||"",a=g.events||[],l=fl(a,n),d=a.length,p=new Date;p.setHours(0,0,0,0);const f=a.filter(G=>new Date(G.timestamp)>=p);let m=0;if(a.length>=2){const G=[...a].sort((dt,nt)=>new Date(dt.timestamp).getTime()-new Date(nt.timestamp).getTime());for(let dt=1;dt<G.length;dt++){const nt=(new Date(G[dt].timestamp).getTime()-new Date(G[dt-1].timestamp).getTime())/36e5;nt>m&&(m=nt)}}const y=new Date().getHours(),x=y<12?i?`좋은 아침, ${o}!`:`Morning, ${o}.`:y<18?i?`안녕, ${o}!`:`Hey ${o}!`:i?`좋은 저녁, ${o}!`:`Evening, ${o}.`,_=f.length===0?i?"오늘의 첫 기록을 시작해볼까요?":"Ready for today’s first log.":i?`오늘 ${f.length}번 완료.`:`${f.length} down today.`,F=l.currentStreakDays,$=l.nextPoopPrediction||la(a,n),T=i?$.timeDisplayKo:$.timeDisplay,M=i?$.subtextKo:$.subtext,B=$.progressPercent,Z=T.includes(" (")?T.split(" ("):[T],j=Z[0],rt=Z[1]?`(${Z[1]}`:null,I=Math.max(1,l.dailyFrequencies.length),P=d>0?(d/I).toFixed(1):"0.0",ct=(z=g.currentPet)==null?void 0:z.avatarUrl,A=(((lt=g.currentUser)==null?void 0:lt.displayName)||"S").charAt(0).toUpperCase(),R=g.getNextTreatment();return b`
      <!-- Top Header Row -->
      <div class="top-header-row">
        <div
          class="dog-avatar-btn"
          @click=${()=>g.openPetSwitcher()}
        >
          ${ct?b`<img src="${ct}" class="dog-avatar-img" alt="Pet" />`:b`<div>${i?`강아지
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
          ${A}
        </div>
      </div>


      <!-- Streak & Next Prediction Card -->
      <div class="prediction-card">
        <div class="streak-badge">
          ${i?`${F}일 연속`:`${F} DAY STREAK`}
        </div>
        <div class="pred-label">
          ${i?"다음은 아마도":"Next one, probably"}
        </div>
        <div class="pred-time">
          ${j}
          ${rt?b`<span class="pred-window-tag">${rt}</span>`:""}
        </div>
        <div class="pred-sub">${M}</div>
        <div class="pred-progress-bar">
          <div class="pred-progress-fill" style="width: ${B}%;"></div>
        </div>

        <!-- Next Medicine / Treatment Info Pill -->
        <div
          class="next-treatment-pill"
          style="background: ${R.skin.bg};"
          @click=${()=>g.openTreatmentsDrawer()}
        >
          <div
            class="treatment-pill-chip ${R.skin.anim!=="none"?"animated":""}"
            style="background: ${R.skin.chip};"
          >
            ${R.tag}
          </div>
          <div class="treatment-pill-body">
            <div
              class="treatment-pill-sub"
              style="color: ${R.skin.sub};"
            >
              ${i?"다음 투약 / 치료":"Next treatment"}
            </div>
            <div
              class="treatment-pill-name"
              style="color: ${R.skin.fg};"
            >
              ${R.name}
            </div>
          </div>
          <div class="treatment-pill-meta">
            <div
              class="treatment-pill-left"
              style="color: ${R.skin.fg};"
            >
              ${R.left}
            </div>
            <div
              class="treatment-pill-date"
              style="color: ${R.skin.sub};"
            >
              ${R.date}
            </div>
          </div>
          <div
            class="treatment-pill-arrow"
            style="color: ${R.skin.sub};"
          >
            &#8250;
          </div>
        </div>
      </div>

      <!-- 3 KPI Cards -->
      <div class="kpi-row">
        <div class="kpi-card" style="background: #FFF;">
          <div class="kpi-val" style="color: #17140F;">${P}</div>
          <div class="kpi-lbl" style="color: #6A6152;">${i?"일일 평균":"a day, avg"}</div>
        </div>
        <div class="kpi-card" style="background: #FFF;">
          <div class="kpi-val" style="color: #17140F;">
            ${m>0?`${Math.round(m)}h`:i?"기록 없음":"0h"}
          </div>
          <div class="kpi-lbl" style="color: #6A6152;">${i?"최대 공백":"longest gap"}</div>
        </div>
        <div class="kpi-card" style="background: #2B5BE8;">
          <div class="kpi-val" style="color: #FFF;">${d}</div>
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
        ${f.length>0?f.map(G=>{const{tag:dt,bg:nt}=this.getEventVisuals(G.eventType);return b`
                <div class="feed-card" @click=${()=>g.openLoggerForEdit(G)}>
                  <div class="feed-badge" style="background: ${nt};">${dt}</div>
                  <div class="feed-content">
                    <div class="feed-title">
                      ${_o(G.notes,G.eventType,i)}
                    </div>
                    <div class="feed-detail">
                      ${i?`기록자: ${G.loggedByName}`:`logged by ${G.loggedByName}`}
                    </div>
                  </div>
                  <div class="feed-time">${this.formatTime(G.timestamp)}</div>
                </div>
              `}):a.length>0?b`
              <!-- Recent fallback if no logs today -->
              <div style="font-size: 11px; font-weight: 800; color: #9A9080; text-transform: uppercase; margin-bottom: 4px;">
                ${i?"최근 기록":"Recent logs"}
              </div>
              ${a.slice(0,4).map(G=>{const{tag:dt,bg:nt}=this.getEventVisuals(G.eventType);return b`
                  <div class="feed-card" @click=${()=>g.openLoggerForEdit(G)}>
                    <div class="feed-badge" style="background: ${nt};">${dt}</div>
                    <div class="feed-content">
                      <div class="feed-title">
                        ${_o(G.notes,G.eventType,i)}
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
                <div style="font-family: var(--font-heading-sm); font-weight: var(--font-weight-heading-sm); font-size: 16px; color: #17140F;">
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
            ${i?`올해 ${d}번, 기록을 확인하세요.`:`${d} logs so far. Tap to view records.`}
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
      font-family: var(--font-heading-sm);
      font-weight: var(--font-weight-heading-sm);
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
      font-family: var(--font-heading-sm);
      font-weight: var(--font-weight-heading-sm);
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
      font-family: var(--font-heading-sm);
      font-weight: var(--font-weight-heading-sm);
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
      font-family: var(--font-heading-sm);
      font-weight: var(--font-weight-heading-sm);
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
  `,oi);pa([E()],_n.prototype,"unsubscribe",void 0);_n=pa([Mt("dooty-home")],_n);var Tn=function(h,i,o,n){var a=arguments.length,l=a<3?i:n===null?n=Object.getOwnPropertyDescriptor(i,o):n,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,i,o,n);else for(var p=h.length-1;p>=0;p--)(d=h[p])&&(l=(a<3?d(l):a>3?d(i,o,l):d(i,o))||l);return a>3&&l&&Object.defineProperty(i,o,l),l},ni;let ko=(ni=class extends Ft{constructor(){super(...arguments),this.searchSheetOpen=!1,this.searchQuery=""}connectedCallback(){super.connectedCallback(),this.unsubscribe=g.subscribe(()=>this.requestUpdate())}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.unsubscribe)==null||i.call(this)}getTypeColor(i){switch(i){case"poop":return"#FFCE2E";case"pee":return"#BFD0FF";case"medicine":case"meds":return"#1FC99B";case"walk":return"#9EC6E8";case"weight":return"#FFB39A";case"vomit":return"#FF9F9F";case"vet":return"#FFEAA0";default:return"#E3D8BE"}}getTypeTag(i,o){switch(i){case"poop":return o?"응가":"P";case"pee":return o?"쉬야":"U";case"medicine":case"meds":return o?"약":"M";case"walk":return o?"산책":"W";case"weight":return o?"체중":"K";case"vomit":return o?"구토":"V";case"vet":return o?"병원":"H";default:return o?"기록":"E"}}getTypeName(i,o){switch(i){case"poop":return o?"응가":"Poop";case"pee":return o?"쉬야":"Pee";case"medicine":case"meds":return o?"약":"Meds";case"walk":return o?"산책":"Walk";case"weight":return o?"체중":"Weight";case"vomit":return o?"구토":"Vomit";case"vet":return o?"병원":"Vet";default:return o?"기타":"Other"}}getEventsForDay(i,o,n){return(g.events||[]).filter(a=>{const l=new Date(a.timestamp);return!(l.getFullYear()!==i||l.getMonth()!==o||l.getDate()!==n||g.historyTypeFilters.length>0&&!g.historyTypeFilters.some(p=>p==="meds"||p==="medicine"?a.eventType==="medicine":a.eventType===p)||g.historyMemberFilter!=="all"&&(a.loggedByName||"Me")!==g.historyMemberFilter)})}render(){var mt,Y;const i=g.currentLocale==="ko",o=g.currentPet,n=(o==null?void 0:o.name)||(i?"반려견":"Pet"),a=n.charAt(0).toUpperCase(),l=(((mt=g.currentUser)==null?void 0:mt.displayName)||"S").charAt(0).toUpperCase(),d=new Date,p=new Date(d.getFullYear(),d.getMonth()+g.historyMonthOffset,1),f=p.getFullYear(),m=p.getMonth(),y=["January","February","March","April","May","June","July","August","September","October","November","December"],_=i?`${f}년 ${["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"][m]}`:`${y[m]} ${f}`,F=new Date(f,m+1,0).getDate(),$=(new Date(f,m,1).getDay()+6)%7,T=g.historyMonthOffset===0,M=d.getDate(),B=(g.events||[]).filter(z=>{const lt=new Date(z.timestamp);return lt.getFullYear()===f&&lt.getMonth()===m}).length,Z=["poop","pee","meds","walk","weight","vomit"],j=Array.from(new Set((((Y=g.currentHousehold)==null?void 0:Y.members)||[]).map(z=>z.displayName).concat(["Me"]))),rt=g.historyTypeFilters.length>0||g.historyMemberFilter!=="all"||this.searchQuery!=="",I=g.historySelectedDay,P=I!==null?this.getEventsForDay(f,m,I):[],ct=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],A=["일요일","월요일","화요일","수요일","목요일","금요일","토요일"];let R="";if(I!==null){const z=new Date(f,m,I),lt=ct[z.getDay()],G=A[z.getDay()];R=i?`${m+1}월 ${I}일 ${G}`:`${lt} ${I} ${y[m].substring(0,3)}`}return b`
      <div class="history-container">
        <!-- Top Bar -->
        <div class="top-bar">
          <div class="title-area">
            <div class="main-title">${i?"기록":"The record"}</div>
            <div class="sub-title">${i?`${_}에 ${B}건`:`${B} logs in ${_}`}</div>
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
            ${this.searchQuery?`"${this.searchQuery}"`:i?"메모 및 캡션 검색":"Search notes & photo captions..."}
          </div>
          ${rt?b`
                <div
                  class="clear-badge"
                  @click=${z=>{z.stopPropagation(),this.searchQuery="",g.clearHistoryFilters()}}
                >
                  ${i?"초기화":"CLEAR"}
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
                <div class="chip-label">${this.getTypeName(z,i)}</div>
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
              class="cal-nav-btn ${T?"disabled":""}"
              @click=${()=>{T||g.setHistoryMonthOffset(g.historyMonthOffset+1)}}
            >
              &#8250;
            </div>
          </div>

          <!-- Day of Week Names (M T W T F S S) -->
          <div class="day-names-row">
            ${(i?["월","화","수","목","금","토","일"]:["M","T","W","T","F","S","S"]).map(z=>b`<div class="day-name">${z}</div>`)}
          </div>

          <!-- 7-Column Days Grid -->
          <div class="cal-grid">
            <!-- Empty offset cells -->
            ${Array.from({length:$},()=>b`<div class="cal-cell empty"></div>`)}
            <!-- Month days -->
            ${Array.from({length:F},(z,lt)=>{const G=lt+1,dt=this.getEventsForDay(f,m,G),nt=T&&G===M,$t=I===G,H=dt.slice(0,3).map(xt=>this.getTypeColor(xt.eventType));return b`
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
        ${I!==null&&P.length>0?b`
              <div class="day-detail-card">
                <div class="day-detail-header">
                  <div style="flex: 1; min-width: 0;">
                    <div class="day-detail-title">${R}</div>
                    <div class="day-detail-sub">
                      ${i?`${P.length}건의 기록`:`${P.length} events logged`}
                    </div>
                  </div>
                  <div class="close-btn" @click=${()=>g.setHistorySelectedDay(null)}>
                    &#10005;
                  </div>
                </div>

                <div style="display: flex; flex-direction: column; gap: 8px;">
                  ${P.map(z=>{const G=new Date(z.timestamp).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),dt=this.getTypeTag(z.eventType,i),nt=this.getTypeColor(z.eventType),$t=z.metadata||{};let H=z.notes||"";return z.eventType==="poop"?H=`Type ${$t.consistency||4} · ${$t.size||"M"} · ${$t.mood||"Normal"}`:z.eventType==="medicine"?H=`${$t.medication||"Medication"} · ${$t.dosage||"1 dose"}`:z.eventType==="walk"&&(H=`${$t.walkDuration||"30 min"} · ${$t.walkDistance||"2.0 km"}`),b`
                      <div class="event-row" @click=${()=>g.openLoggerForEdit(z)}>
                        <div class="event-tag-badge" style="background: ${nt};">${dt}</div>
                        <div class="event-body">
                          <div class="event-title">${z.notes||this.getTypeName(z.eventType,i)}</div>
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
            `:I!==null&&P.length===0?b`
              <div class="empty-day-card">
                <div class="empty-day-title">${R}</div>
                <div class="empty-day-sub">${i?"기록이 없습니다. 수상하군요.":"Nothing logged. Suspicious."}</div>
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
                            ${this.getTypeTag(z.eventType,i)}
                          </div>
                          <div class="event-body">
                            <div class="event-title">${z.notes||this.getTypeName(z.eventType,i)}</div>
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
      font-family: var(--font-heading-sm);
      font-weight: var(--font-weight-heading-sm);
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
      font-family: var(--font-heading-sm);
      font-weight: var(--font-weight-heading-sm);
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
      font-family: var(--font-heading-sm);
      font-weight: var(--font-weight-heading-sm);
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
  `,ni);Tn([E()],ko.prototype,"searchSheetOpen",void 0);Tn([E()],ko.prototype,"searchQuery",void 0);ko=Tn([Mt("dooty-history")],ko);var ua=function(h,i,o,n){var a=arguments.length,l=a<3?i:n===null?n=Object.getOwnPropertyDescriptor(i,o):n,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,i,o,n);else for(var p=h.length-1;p>=0;p--)(d=h[p])&&(l=(a<3?d(l):a>3?d(i,o,l):d(i,o))||l);return a>3&&l&&Object.defineProperty(i,o,l),l},si;let kn=(si=class extends Ft{connectedCallback(){super.connectedCallback(),this.unsubscribe=g.subscribe(()=>this.requestUpdate())}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.unsubscribe)==null||i.call(this)}render(){const i=g.currentLocale==="ko",o=g.analyticsTimeRange||"30d",n=g.events||[];let a=n;const l=Date.now();if(o==="7d"){const S=l-6048e5;a=n.filter(O=>new Date(O.timestamp).getTime()>=S)}else if(o==="30d"){const S=l-2592e6;a=n.filter(O=>new Date(O.timestamp).getTime()>=S)}else if(o==="1y"){const S=l-31536e6;a=n.filter(O=>new Date(O.timestamp).getTime()>=S)}const d=a,p=d.length,f=["MON","TUE","WED","THU","FRI","SAT","SUN"],m=["월","화","수","목","금","토","일"],y=Array.from({length:7},()=>Array(24).fill(0)),x=Array(24).fill(0);let _=Date.now();d.forEach(S=>{const O=new Date(S.timestamp),_t=O.getTime();if(!isNaN(_t)){_t<_&&(_=_t);const Et=(O.getDay()+6)%7,Nt=O.getHours();y[Et][Nt]++,x[Nt]++}});let F=1;y.forEach(S=>{S.forEach(O=>{O>F&&(F=O)})});const $=f.map((S,O)=>({day:i?m[O]:S,cells:Array.from({length:24},(_t,Et)=>{const Nt=y[O][Et],oe=F>0?Nt/F:0,we=Nt===0?"#FFF":oe<.25?"#FFE9A8":oe<.55?"#FFCE2E":oe<.8?"#FF9A3C":"#FF5A3C",He=Nt===0?"#E6DDC8":"#17140F",zo=Et===0?"12 am":Et<12?`${Et} am`:Et===12?"12 pm":`${Et-12} pm`;return{bg:we,brd:He,count:Nt,hourLabel:zo,dayLabel:i?m[O]:S}})}));let T=7,M=0;x.forEach((S,O)=>{S>M&&(M=S,T=O)});const B=(S,O)=>{const _t=(S+1)%24;if(O){const Et=S<12?`오전 ${S===0?12:S}`:`오후 ${S===12?12:S-12}`,Nt=_t<12?`${_t===0?12:_t}`:`${_t===12?12:_t-12}`;return`${Et}:00–${Nt}:00`}else{const Et=Nt=>{const oe=Nt<12?"am":"pm";return`${Nt%12===0?12:Nt%12}:00 ${oe}`};return`${Et(S)}–${Et(_t)}`}};let Z=1/0,j=1;for(let S=0;S<24;S++){const O=x[S]+x[(S+1)%24]+x[(S+2)%24];O<Z&&(Z=O,j=S)}const rt=B(T,!1),I=B(T,!0),P=Z===0?`He has never gone between ${j%12||12} and ${(j+3)%12||12} ${j<12?"am":"pm"}. Respect.`:`Quietest around ${B(j,!1)}.`,ct=Z===0?`새벽 ${j}시에서 ${(j+3)%24}시 사이에는 한 번도 없었습니다. 존경.`:`가장 한산한 시간대는 ${B(j,!0)}입니다.`,A=new Date(_),R=["January","February","March","April","May","June","July","August","September","October","November","December"],mt=p>0?`${R[A.getMonth()]} ${A.getFullYear()}`:"March 2021",Y=p>0?`${A.getFullYear()}년 ${A.getMonth()+1}월`:"2021년 3월",z=new Date(Date.now()-336*60*60*1e3),lt=d.filter(S=>S.eventType==="poop"&&new Date(S.timestamp)>=z),G=lt.filter(S=>(S.notes||"").toLowerCase().includes("4")||(S.notes||"").toLowerCase().includes("textbook")).length,dt=lt.length>0?Math.round(G/lt.length*100):(p>0,82);let nt=0;const $t=d.filter(S=>S.eventType==="poop");if($t.length>=2){const S=[...$t].sort((O,_t)=>new Date(O.timestamp).getTime()-new Date(_t.timestamp).getTime());for(let O=1;O<S.length;O++){const _t=(new Date(S[O].timestamp).getTime()-new Date(S[O-1].timestamp).getTime())/36e5;_t>nt&&(nt=_t)}}const H=new Date(Date.now()-10080*60*1e3),xt=d.filter(S=>S.eventType==="vomit"&&new Date(S.timestamp)>=H).length,W=Array(12).fill(0),st=Date.now();d.forEach(S=>{const O=Math.floor((st-new Date(S.timestamp).getTime())/6048e5);O>=0&&O<12&&W[11-O]++});const wt=Math.max(1,...W),St=W.map((S,O)=>{const _t=S===0?8:Math.round(S/wt*88)+8;return{h:`${p>0?_t:[42,58,48,70,65,82,54,76,88,72,60,96][O]}px`,bg:O===11?"#FF5A3C":"#FFCE2E",l:`W${O+1}`}}),vt=d.filter(S=>S.eventType==="walk").length,it=d.filter(S=>S.eventType==="poop").length;d.filter(S=>S.eventType==="pee").length;const J=Math.max(1,Math.round(it*.18+(p>0?0:412))),Dt=Math.max(1.42,Number((vt*1.8).toFixed(2))),Zt=[{v:p>0?`${J} kg`:"412 kg",l:i?"누적 배변량":"career tonnage",bg:"#FFCE2E",sub:"#7A5C00",rot:"-2deg"},{v:p>0?`${Dt} km`:"1.42 km",l:i?"총 산책 거리":"end to end",bg:"#1FC99B",sub:"#0A5A45",rot:"1.5deg"},{v:nt>0?`${Math.round(nt)} h`:"31 h",l:i?"최장 공백":"longest drought",bg:"#FFF",sub:"#6A6152",rot:"-1deg"},{v:p>0?`${it} logs`:"62%",l:i?"동네 정복률":"block conquered",bg:"#FF5A3C",sub:"#7A1E0C",rot:"2deg"}],Vt=p>0?p/24:1,be=x.slice(6,12).reduce((S,O)=>S+O,0)/6,le=p>0?Math.round((be-Vt)/Vt*100):25,We=x.slice(12,18).reduce((S,O)=>S+O,0)/6,Se=p>0?Math.round((We-Vt)/Vt*100):10,ye=y[5].reduce((S,O)=>S+O,0)+y[6].reduce((S,O)=>S+O,0),qt=p-ye,Ht=ye/2,ie=qt/5,je=ie>0&&p>0?Math.round((Ht-ie)/ie*100):p>0?0:14,K=(x[21]+x[22]+x[23]+x[0]+x[1]+x[2]+x[3]+x[4]+x[5])/9,pt=p>0?Math.round((K-Vt)/Vt*100):-65,Pt=(S,O,_t)=>{const Et=O>=0,Nt=Math.abs(O),oe=Math.min(48,Math.max(3,Math.round(Nt/100*48))),we=Et?"50%":`${50-oe}%`,He=O===0?"0%":`${Et?"+":"−"}${Nt}%`;return{l:S,v:He,left:we,w:`${oe}%`,bg:_t}},Rt=[Pt(i?"오전 6–12시":"Morning (6–12)",le,"#FF9A3C"),Pt(i?"오후 12–18시":"Afternoon (12–18)",Se,"#1FC99B"),Pt(i?"주말 (토·일)":"Weekends",je,"#FF5A3C"),Pt(i?"심야 21–6시":"Night (21–6)",pt,"#9EC6E8")],Jt=o==="7d"?i?"7일":"7 DAYS":o==="30d"?i?"30일":"30 DAYS":o==="1y"?i?"1년":"1 YEAR":i?"전체":"ALL TIME",de=o==="7d"?i?`지난 7일간 ${p.toLocaleString()}건`:`${p.toLocaleString()} logs in last 7 days`:o==="30d"?i?`지난 30일간 ${p.toLocaleString()}건`:`${p.toLocaleString()} logs in last 30 days`:o==="1y"?i?`지난 1년간 ${p.toLocaleString()}건`:`${p.toLocaleString()} logs in last year`:i?p>0?`${Y}부터 ${p.toLocaleString()}건`:"2021년 3월부터 1,204건":p>0?`${p.toLocaleString()} logs since ${mt}`:"1,204 logs since March 2021";return b`
      <div class="page-header">
        <div class="page-title">${i?"숫자들":"The numbers"}</div>
        <div class="page-sub">${de}</div>
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
          ${$.map(S=>b`
              <div class="heat-row">
                <div class="heat-day-lbl">${S.day}</div>
                <div class="heat-cells">
                  ${S.cells.map(O=>b`
                      <div
                        class="heat-cell"
                        style="background: ${O.bg}; border: 1px solid ${O.brd};"
                        title="${O.dayLabel} ${O.hourLabel}: ${O.count} ${O.count===1?"event":"events"}"
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
          ${i?b`가장 많은 시간은 <strong style="color: #17140F;">${I}</strong>. ${ct}`:b`Peak is <strong style="color: #17140F;">${rt}</strong>. ${P}`}
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
            <div class="gut-score-lbl">${i?"장":"GUT"}</div>
          </div>
        </div>
        <div style="flex: 1; min-width: 0;">
          <div style="font-family: var(--font-heading); font-weight: 800; font-size: 18px; color: #17140F; letter-spacing: -0.4px;">
            ${i?"탄탄합니다, 말 그대로.":"Solid. Literally."}
          </div>
          <div style="font-size: 12px; font-weight: 600; color: #0A5A45; line-height: 1.4; margin-top: 3px;">
            ${i?`${dt}%의 날이 완벽한 4단계. 눌러서 자세히 보기.`:`Perfect 4s on ${dt}% of days. Tap for the full breakdown.`}
          </div>
          ${xt>0?b`
                <div class="flag-badge">
                  ${i?`주의 ${xt}건`:`${xt} FLAG`}
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
          ${St.map(S=>b`
              <div
                style="flex: 1; display: flex; flex-direction: column; justify-content: flex-end; align-items: center; gap: 5px; height: 100%;"
              >
                <div
                  style="width: 100%; border-radius: 6px 6px 3px 3px; border: 2px solid #17140F; box-sizing: border-box; background: ${S.bg}; height: ${S.h};"
                ></div>
                <div style="font-size: 7.5px; font-weight: 800; color: #B5AB99;">${S.l}</div>
              </div>
            `)}
        </div>
      </div>

      <!-- Trophy Case -->
      <div class="trophy-case">
        <div class="trophy-title">${i?"트로피 보관함":"Trophy case"}</div>
        <div class="trophy-grid">
          ${Zt.map(S=>b`
              <div
                class="trophy-item"
                style="background: ${S.bg}; transform: rotate(${S.rot});"
              >
                <div class="trophy-val">${S.v}</div>
                <div class="trophy-sub" style="color: ${S.sub};">${S.l}</div>
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
          ${Rt.map(S=>b`
              <div class="corr-row">
                <div class="corr-lbl">${S.l}</div>
                <div class="corr-bar-track">
                  <div class="corr-center-line"></div>
                  <div
                    style="position: absolute; top: 0; bottom: 0; background: ${S.bg}; left: ${S.left}; width: ${S.w};"
                  ></div>
                </div>
                <div class="corr-val">${S.v}</div>
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
      font-family: var(--font-heading-sm);
      font-weight: var(--font-weight-heading-sm);
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
  `,si);ua([E()],kn.prototype,"unsubscribe",void 0);kn=ua([Mt("dooty-numbers")],kn);function Ol(h){return h&&h.__esModule&&Object.prototype.hasOwnProperty.call(h,"default")?h.default:h}var Ii={exports:{}};/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */var Rl=Ii.exports,Vs;function Wl(){return Vs||(Vs=1,(function(h,i){(function(o,n){n(i)})(Rl,(function(o){var n="1.9.4";function a(t){var e,s,r,c;for(s=1,r=arguments.length;s<r;s++){c=arguments[s];for(e in c)t[e]=c[e]}return t}var l=Object.create||(function(){function t(){}return function(e){return t.prototype=e,new t}})();function d(t,e){var s=Array.prototype.slice;if(t.bind)return t.bind.apply(t,s.call(arguments,1));var r=s.call(arguments,2);return function(){return t.apply(e,r.length?r.concat(s.call(arguments)):arguments)}}var p=0;function f(t){return"_leaflet_id"in t||(t._leaflet_id=++p),t._leaflet_id}function m(t,e,s){var r,c,u,v;return v=function(){r=!1,c&&(u.apply(s,c),c=!1)},u=function(){r?c=arguments:(t.apply(s,arguments),setTimeout(v,e),r=!0)},u}function y(t,e,s){var r=e[1],c=e[0],u=r-c;return t===r&&s?t:((t-c)%u+u)%u+c}function x(){return!1}function _(t,e){if(e===!1)return t;var s=Math.pow(10,e===void 0?6:e);return Math.round(t*s)/s}function F(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function $(t){return F(t).split(/\s+/)}function T(t,e){Object.prototype.hasOwnProperty.call(t,"options")||(t.options=t.options?l(t.options):{});for(var s in e)t.options[s]=e[s];return t.options}function M(t,e,s){var r=[];for(var c in t)r.push(encodeURIComponent(s?c.toUpperCase():c)+"="+encodeURIComponent(t[c]));return(!e||e.indexOf("?")===-1?"?":"&")+r.join("&")}var B=/\{ *([\w_ -]+) *\}/g;function Z(t,e){return t.replace(B,function(s,r){var c=e[r];if(c===void 0)throw new Error("No value provided for variable "+s);return typeof c=="function"&&(c=c(e)),c})}var j=Array.isArray||function(t){return Object.prototype.toString.call(t)==="[object Array]"};function rt(t,e){for(var s=0;s<t.length;s++)if(t[s]===e)return s;return-1}var I="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function P(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}var ct=0;function A(t){var e=+new Date,s=Math.max(0,16-(e-ct));return ct=e+s,window.setTimeout(t,s)}var R=window.requestAnimationFrame||P("RequestAnimationFrame")||A,mt=window.cancelAnimationFrame||P("CancelAnimationFrame")||P("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)};function Y(t,e,s){if(s&&R===A)t.call(e);else return R.call(window,d(t,e))}function z(t){t&&mt.call(window,t)}var lt={__proto__:null,extend:a,create:l,bind:d,get lastId(){return p},stamp:f,throttle:m,wrapNum:y,falseFn:x,formatNum:_,trim:F,splitWords:$,setOptions:T,getParamString:M,template:Z,isArray:j,indexOf:rt,emptyImageUrl:I,requestFn:R,cancelFn:mt,requestAnimFrame:Y,cancelAnimFrame:z};function G(){}G.extend=function(t){var e=function(){T(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},s=e.__super__=this.prototype,r=l(s);r.constructor=e,e.prototype=r;for(var c in this)Object.prototype.hasOwnProperty.call(this,c)&&c!=="prototype"&&c!=="__super__"&&(e[c]=this[c]);return t.statics&&a(e,t.statics),t.includes&&(dt(t.includes),a.apply(null,[r].concat(t.includes))),a(r,t),delete r.statics,delete r.includes,r.options&&(r.options=s.options?l(s.options):{},a(r.options,t.options)),r._initHooks=[],r.callInitHooks=function(){if(!this._initHooksCalled){s.callInitHooks&&s.callInitHooks.call(this),this._initHooksCalled=!0;for(var u=0,v=r._initHooks.length;u<v;u++)r._initHooks[u].call(this)}},e},G.include=function(t){var e=this.prototype.options;return a(this.prototype,t),t.options&&(this.prototype.options=e,this.mergeOptions(t.options)),this},G.mergeOptions=function(t){return a(this.prototype.options,t),this},G.addInitHook=function(t){var e=Array.prototype.slice.call(arguments,1),s=typeof t=="function"?t:function(){this[t].apply(this,e)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(s),this};function dt(t){if(!(typeof L>"u"||!L||!L.Mixin)){t=j(t)?t:[t];for(var e=0;e<t.length;e++)t[e]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var nt={on:function(t,e,s){if(typeof t=="object")for(var r in t)this._on(r,t[r],e);else{t=$(t);for(var c=0,u=t.length;c<u;c++)this._on(t[c],e,s)}return this},off:function(t,e,s){if(!arguments.length)delete this._events;else if(typeof t=="object")for(var r in t)this._off(r,t[r],e);else{t=$(t);for(var c=arguments.length===1,u=0,v=t.length;u<v;u++)c?this._off(t[u]):this._off(t[u],e,s)}return this},_on:function(t,e,s,r){if(typeof e!="function"){console.warn("wrong listener type: "+typeof e);return}if(this._listens(t,e,s)===!1){s===this&&(s=void 0);var c={fn:e,ctx:s};r&&(c.once=!0),this._events=this._events||{},this._events[t]=this._events[t]||[],this._events[t].push(c)}},_off:function(t,e,s){var r,c,u;if(this._events&&(r=this._events[t],!!r)){if(arguments.length===1){if(this._firingCount)for(c=0,u=r.length;c<u;c++)r[c].fn=x;delete this._events[t];return}if(typeof e!="function"){console.warn("wrong listener type: "+typeof e);return}var v=this._listens(t,e,s);if(v!==!1){var w=r[v];this._firingCount&&(w.fn=x,this._events[t]=r=r.slice()),r.splice(v,1)}}},fire:function(t,e,s){if(!this.listens(t,s))return this;var r=a({},e,{type:t,target:this,sourceTarget:e&&e.sourceTarget||this});if(this._events){var c=this._events[t];if(c){this._firingCount=this._firingCount+1||1;for(var u=0,v=c.length;u<v;u++){var w=c[u],k=w.fn;w.once&&this.off(t,k,w.ctx),k.call(w.ctx||this,r)}this._firingCount--}}return s&&this._propagateEvent(r),this},listens:function(t,e,s,r){typeof t!="string"&&console.warn('"string" type argument expected');var c=e;typeof e!="function"&&(r=!!e,c=void 0,s=void 0);var u=this._events&&this._events[t];if(u&&u.length&&this._listens(t,c,s)!==!1)return!0;if(r){for(var v in this._eventParents)if(this._eventParents[v].listens(t,e,s,r))return!0}return!1},_listens:function(t,e,s){if(!this._events)return!1;var r=this._events[t]||[];if(!e)return!!r.length;s===this&&(s=void 0);for(var c=0,u=r.length;c<u;c++)if(r[c].fn===e&&r[c].ctx===s)return c;return!1},once:function(t,e,s){if(typeof t=="object")for(var r in t)this._on(r,t[r],e,!0);else{t=$(t);for(var c=0,u=t.length;c<u;c++)this._on(t[c],e,s,!0)}return this},addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[f(t)]=t,this},removeEventParent:function(t){return this._eventParents&&delete this._eventParents[f(t)],this},_propagateEvent:function(t){for(var e in this._eventParents)this._eventParents[e].fire(t.type,a({layer:t.target,propagatedFrom:t.target},t),!0)}};nt.addEventListener=nt.on,nt.removeEventListener=nt.clearAllEventListeners=nt.off,nt.addOneTimeEventListener=nt.once,nt.fireEvent=nt.fire,nt.hasEventListeners=nt.listens;var $t=G.extend(nt);function H(t,e,s){this.x=s?Math.round(t):t,this.y=s?Math.round(e):e}var xt=Math.trunc||function(t){return t>0?Math.floor(t):Math.ceil(t)};H.prototype={clone:function(){return new H(this.x,this.y)},add:function(t){return this.clone()._add(W(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(W(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},scaleBy:function(t){return new H(this.x*t.x,this.y*t.y)},unscaleBy:function(t){return new H(this.x/t.x,this.y/t.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=xt(this.x),this.y=xt(this.y),this},distanceTo:function(t){t=W(t);var e=t.x-this.x,s=t.y-this.y;return Math.sqrt(e*e+s*s)},equals:function(t){return t=W(t),t.x===this.x&&t.y===this.y},contains:function(t){return t=W(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+_(this.x)+", "+_(this.y)+")"}};function W(t,e,s){return t instanceof H?t:j(t)?new H(t[0],t[1]):t==null?t:typeof t=="object"&&"x"in t&&"y"in t?new H(t.x,t.y):new H(t,e,s)}function st(t,e){if(t)for(var s=e?[t,e]:t,r=0,c=s.length;r<c;r++)this.extend(s[r])}st.prototype={extend:function(t){var e,s;if(!t)return this;if(t instanceof H||typeof t[0]=="number"||"x"in t)e=s=W(t);else if(t=wt(t),e=t.min,s=t.max,!e||!s)return this;return!this.min&&!this.max?(this.min=e.clone(),this.max=s.clone()):(this.min.x=Math.min(e.x,this.min.x),this.max.x=Math.max(s.x,this.max.x),this.min.y=Math.min(e.y,this.min.y),this.max.y=Math.max(s.y,this.max.y)),this},getCenter:function(t){return W((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return W(this.min.x,this.max.y)},getTopRight:function(){return W(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var e,s;return typeof t[0]=="number"||t instanceof H?t=W(t):t=wt(t),t instanceof st?(e=t.min,s=t.max):e=s=t,e.x>=this.min.x&&s.x<=this.max.x&&e.y>=this.min.y&&s.y<=this.max.y},intersects:function(t){t=wt(t);var e=this.min,s=this.max,r=t.min,c=t.max,u=c.x>=e.x&&r.x<=s.x,v=c.y>=e.y&&r.y<=s.y;return u&&v},overlaps:function(t){t=wt(t);var e=this.min,s=this.max,r=t.min,c=t.max,u=c.x>e.x&&r.x<s.x,v=c.y>e.y&&r.y<s.y;return u&&v},isValid:function(){return!!(this.min&&this.max)},pad:function(t){var e=this.min,s=this.max,r=Math.abs(e.x-s.x)*t,c=Math.abs(e.y-s.y)*t;return wt(W(e.x-r,e.y-c),W(s.x+r,s.y+c))},equals:function(t){return t?(t=wt(t),this.min.equals(t.getTopLeft())&&this.max.equals(t.getBottomRight())):!1}};function wt(t,e){return!t||t instanceof st?t:new st(t,e)}function St(t,e){if(t)for(var s=e?[t,e]:t,r=0,c=s.length;r<c;r++)this.extend(s[r])}St.prototype={extend:function(t){var e=this._southWest,s=this._northEast,r,c;if(t instanceof it)r=t,c=t;else if(t instanceof St){if(r=t._southWest,c=t._northEast,!r||!c)return this}else return t?this.extend(J(t)||vt(t)):this;return!e&&!s?(this._southWest=new it(r.lat,r.lng),this._northEast=new it(c.lat,c.lng)):(e.lat=Math.min(r.lat,e.lat),e.lng=Math.min(r.lng,e.lng),s.lat=Math.max(c.lat,s.lat),s.lng=Math.max(c.lng,s.lng)),this},pad:function(t){var e=this._southWest,s=this._northEast,r=Math.abs(e.lat-s.lat)*t,c=Math.abs(e.lng-s.lng)*t;return new St(new it(e.lat-r,e.lng-c),new it(s.lat+r,s.lng+c))},getCenter:function(){return new it((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new it(this.getNorth(),this.getWest())},getSouthEast:function(){return new it(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){typeof t[0]=="number"||t instanceof it||"lat"in t?t=J(t):t=vt(t);var e=this._southWest,s=this._northEast,r,c;return t instanceof St?(r=t.getSouthWest(),c=t.getNorthEast()):r=c=t,r.lat>=e.lat&&c.lat<=s.lat&&r.lng>=e.lng&&c.lng<=s.lng},intersects:function(t){t=vt(t);var e=this._southWest,s=this._northEast,r=t.getSouthWest(),c=t.getNorthEast(),u=c.lat>=e.lat&&r.lat<=s.lat,v=c.lng>=e.lng&&r.lng<=s.lng;return u&&v},overlaps:function(t){t=vt(t);var e=this._southWest,s=this._northEast,r=t.getSouthWest(),c=t.getNorthEast(),u=c.lat>e.lat&&r.lat<s.lat,v=c.lng>e.lng&&r.lng<s.lng;return u&&v},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t,e){return t?(t=vt(t),this._southWest.equals(t.getSouthWest(),e)&&this._northEast.equals(t.getNorthEast(),e)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function vt(t,e){return t instanceof St?t:new St(t,e)}function it(t,e,s){if(isNaN(t)||isNaN(e))throw new Error("Invalid LatLng object: ("+t+", "+e+")");this.lat=+t,this.lng=+e,s!==void 0&&(this.alt=+s)}it.prototype={equals:function(t,e){if(!t)return!1;t=J(t);var s=Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng));return s<=(e===void 0?1e-9:e)},toString:function(t){return"LatLng("+_(this.lat,t)+", "+_(this.lng,t)+")"},distanceTo:function(t){return Zt.distance(this,J(t))},wrap:function(){return Zt.wrapLatLng(this)},toBounds:function(t){var e=180*t/40075017,s=e/Math.cos(Math.PI/180*this.lat);return vt([this.lat-e,this.lng-s],[this.lat+e,this.lng+s])},clone:function(){return new it(this.lat,this.lng,this.alt)}};function J(t,e,s){return t instanceof it?t:j(t)&&typeof t[0]!="object"?t.length===3?new it(t[0],t[1],t[2]):t.length===2?new it(t[0],t[1]):null:t==null?t:typeof t=="object"&&"lat"in t?new it(t.lat,"lng"in t?t.lng:t.lon,t.alt):e===void 0?null:new it(t,e,s)}var Dt={latLngToPoint:function(t,e){var s=this.projection.project(t),r=this.scale(e);return this.transformation._transform(s,r)},pointToLatLng:function(t,e){var s=this.scale(e),r=this.transformation.untransform(t,s);return this.projection.unproject(r)},project:function(t){return this.projection.project(t)},unproject:function(t){return this.projection.unproject(t)},scale:function(t){return 256*Math.pow(2,t)},zoom:function(t){return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){if(this.infinite)return null;var e=this.projection.bounds,s=this.scale(t),r=this.transformation.transform(e.min,s),c=this.transformation.transform(e.max,s);return new st(r,c)},infinite:!1,wrapLatLng:function(t){var e=this.wrapLng?y(t.lng,this.wrapLng,!0):t.lng,s=this.wrapLat?y(t.lat,this.wrapLat,!0):t.lat,r=t.alt;return new it(s,e,r)},wrapLatLngBounds:function(t){var e=t.getCenter(),s=this.wrapLatLng(e),r=e.lat-s.lat,c=e.lng-s.lng;if(r===0&&c===0)return t;var u=t.getSouthWest(),v=t.getNorthEast(),w=new it(u.lat-r,u.lng-c),k=new it(v.lat-r,v.lng-c);return new St(w,k)}},Zt=a({},Dt,{wrapLng:[-180,180],R:6371e3,distance:function(t,e){var s=Math.PI/180,r=t.lat*s,c=e.lat*s,u=Math.sin((e.lat-t.lat)*s/2),v=Math.sin((e.lng-t.lng)*s/2),w=u*u+Math.cos(r)*Math.cos(c)*v*v,k=2*Math.atan2(Math.sqrt(w),Math.sqrt(1-w));return this.R*k}}),Vt=6378137,Gt={R:Vt,MAX_LATITUDE:85.0511287798,project:function(t){var e=Math.PI/180,s=this.MAX_LATITUDE,r=Math.max(Math.min(s,t.lat),-s),c=Math.sin(r*e);return new H(this.R*t.lng*e,this.R*Math.log((1+c)/(1-c))/2)},unproject:function(t){var e=180/Math.PI;return new it((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*e,t.x*e/this.R)},bounds:(function(){var t=Vt*Math.PI;return new st([-t,-t],[t,t])})()};function be(t,e,s,r){if(j(t)){this._a=t[0],this._b=t[1],this._c=t[2],this._d=t[3];return}this._a=t,this._b=e,this._c=s,this._d=r}be.prototype={transform:function(t,e){return this._transform(t.clone(),e)},_transform:function(t,e){return e=e||1,t.x=e*(this._a*t.x+this._b),t.y=e*(this._c*t.y+this._d),t},untransform:function(t,e){return e=e||1,new H((t.x/e-this._b)/this._a,(t.y/e-this._d)/this._c)}};function le(t,e,s,r){return new be(t,e,s,r)}var Le=a({},Zt,{code:"EPSG:3857",projection:Gt,transformation:(function(){var t=.5/(Math.PI*Gt.R);return le(t,.5,-t,.5)})()}),We=a({},Le,{code:"EPSG:900913"});function Se(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function ye(t,e){var s="",r,c,u,v,w,k;for(r=0,u=t.length;r<u;r++){for(w=t[r],c=0,v=w.length;c<v;c++)k=w[c],s+=(c?"L":"M")+k.x+" "+k.y;s+=e?U.svg?"z":"x":""}return s||"M0 0"}var qt=document.documentElement.style,Ht="ActiveXObject"in window,ie=Ht&&!document.addEventListener,je="msLaunchUri"in navigator&&!("documentMode"in document),D=ce("webkit"),K=ce("android"),pt=ce("android 2")||ce("android 3"),Pt=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),Rt=K&&ce("Google")&&Pt<537&&!("AudioNode"in window),Jt=!!window.opera,de=!je&&ce("chrome"),S=ce("gecko")&&!D&&!Jt&&!Ht,O=!de&&ce("safari"),_t=ce("phantom"),Et="OTransition"in qt,Nt=navigator.platform.indexOf("Win")===0,oe=Ht&&"transition"in qt,we="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!pt,He="MozPerspective"in qt,zo=!window.L_DISABLE_3D&&(oe||we||He)&&!Et&&!_t,Fi=typeof orientation<"u"||ce("mobile"),fa=Fi&&D,ga=Fi&&we,En=!window.PointerEvent&&window.MSPointerEvent,zn=!!(window.PointerEvent||En),An="ontouchstart"in window||!!window.TouchEvent,ma=!window.L_NO_TOUCH&&(An||zn),va=Fi&&Jt,xa=Fi&&S,ba=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,ya=(function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassiveEventSupport",x,e),window.removeEventListener("testPassiveEventSupport",x,e)}catch{}return t})(),wa=(function(){return!!document.createElement("canvas").getContext})(),Ao=!!(document.createElementNS&&Se("svg").createSVGRect),_a=!!Ao&&(function(){var t=document.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"})(),ka=!Ao&&(function(){try{var t=document.createElement("div");t.innerHTML='<v:shape adj="1"/>';var e=t.firstChild;return e.style.behavior="url(#default#VML)",e&&typeof e.adj=="object"}catch{return!1}})(),Fa=navigator.platform.indexOf("Mac")===0,$a=navigator.platform.indexOf("Linux")===0;function ce(t){return navigator.userAgent.toLowerCase().indexOf(t)>=0}var U={ie:Ht,ielt9:ie,edge:je,webkit:D,android:K,android23:pt,androidStock:Rt,opera:Jt,chrome:de,gecko:S,safari:O,phantom:_t,opera12:Et,win:Nt,ie3d:oe,webkit3d:we,gecko3d:He,any3d:zo,mobile:Fi,mobileWebkit:fa,mobileWebkit3d:ga,msPointer:En,pointer:zn,touch:ma,touchNative:An,mobileOpera:va,mobileGecko:xa,retina:ba,passiveEvents:ya,canvas:wa,svg:Ao,vml:ka,inlineSvg:_a,mac:Fa,linux:$a},Mn=U.msPointer?"MSPointerDown":"pointerdown",Dn=U.msPointer?"MSPointerMove":"pointermove",Nn=U.msPointer?"MSPointerUp":"pointerup",Bn=U.msPointer?"MSPointerCancel":"pointercancel",Mo={touchstart:Mn,touchmove:Dn,touchend:Nn,touchcancel:Bn},In={touchstart:Ea,touchmove:Qi,touchend:Qi,touchcancel:Qi},Ue={},On=!1;function Pa(t,e,s){return e==="touchstart"&&Ca(),In[e]?(s=In[e].bind(this,s),t.addEventListener(Mo[e],s,!1),s):(console.warn("wrong event specified:",e),x)}function La(t,e,s){if(!Mo[e]){console.warn("wrong event specified:",e);return}t.removeEventListener(Mo[e],s,!1)}function Sa(t){Ue[t.pointerId]=t}function Ta(t){Ue[t.pointerId]&&(Ue[t.pointerId]=t)}function Rn(t){delete Ue[t.pointerId]}function Ca(){On||(document.addEventListener(Mn,Sa,!0),document.addEventListener(Dn,Ta,!0),document.addEventListener(Nn,Rn,!0),document.addEventListener(Bn,Rn,!0),On=!0)}function Qi(t,e){if(e.pointerType!==(e.MSPOINTER_TYPE_MOUSE||"mouse")){e.touches=[];for(var s in Ue)e.touches.push(Ue[s]);e.changedTouches=[e],t(e)}}function Ea(t,e){e.MSPOINTER_TYPE_TOUCH&&e.pointerType===e.MSPOINTER_TYPE_TOUCH&&Wt(e),Qi(t,e)}function za(t){var e={},s,r;for(r in t)s=t[r],e[r]=s&&s.bind?s.bind(t):s;return t=e,e.type="dblclick",e.detail=2,e.isTrusted=!1,e._simulated=!0,e}var Aa=200;function Ma(t,e){t.addEventListener("dblclick",e);var s=0,r;function c(u){if(u.detail!==1){r=u.detail;return}if(!(u.pointerType==="mouse"||u.sourceCapabilities&&!u.sourceCapabilities.firesTouchEvents)){var v=Zn(u);if(!(v.some(function(k){return k instanceof HTMLLabelElement&&k.attributes.for})&&!v.some(function(k){return k instanceof HTMLInputElement||k instanceof HTMLSelectElement}))){var w=Date.now();w-s<=Aa?(r++,r===2&&e(za(u))):r=1,s=w}}}return t.addEventListener("click",c),{dblclick:e,simDblclick:c}}function Da(t,e){t.removeEventListener("dblclick",e.dblclick),t.removeEventListener("click",e.simDblclick)}var Do=eo(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),$i=eo(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),Wn=$i==="webkitTransition"||$i==="OTransition"?$i+"End":"transitionend";function jn(t){return typeof t=="string"?document.getElementById(t):t}function Pi(t,e){var s=t.style[e]||t.currentStyle&&t.currentStyle[e];if((!s||s==="auto")&&document.defaultView){var r=document.defaultView.getComputedStyle(t,null);s=r?r[e]:null}return s==="auto"?null:s}function ht(t,e,s){var r=document.createElement(t);return r.className=e||"",s&&s.appendChild(r),r}function kt(t){var e=t.parentNode;e&&e.removeChild(t)}function Xi(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function Ze(t){var e=t.parentNode;e&&e.lastChild!==t&&e.appendChild(t)}function Ge(t){var e=t.parentNode;e&&e.firstChild!==t&&e.insertBefore(t,e.firstChild)}function No(t,e){if(t.classList!==void 0)return t.classList.contains(e);var s=to(t);return s.length>0&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(s)}function Q(t,e){if(t.classList!==void 0)for(var s=$(e),r=0,c=s.length;r<c;r++)t.classList.add(s[r]);else if(!No(t,e)){var u=to(t);Bo(t,(u?u+" ":"")+e)}}function Lt(t,e){t.classList!==void 0?t.classList.remove(e):Bo(t,F((" "+to(t)+" ").replace(" "+e+" "," ")))}function Bo(t,e){t.className.baseVal===void 0?t.className=e:t.className.baseVal=e}function to(t){return t.correspondingElement&&(t=t.correspondingElement),t.className.baseVal===void 0?t.className:t.className.baseVal}function Yt(t,e){"opacity"in t.style?t.style.opacity=e:"filter"in t.style&&Na(t,e)}function Na(t,e){var s=!1,r="DXImageTransform.Microsoft.Alpha";try{s=t.filters.item(r)}catch{if(e===1)return}e=Math.round(e*100),s?(s.Enabled=e!==100,s.Opacity=e):t.style.filter+=" progid:"+r+"(opacity="+e+")"}function eo(t){for(var e=document.documentElement.style,s=0;s<t.length;s++)if(t[s]in e)return t[s];return!1}function Te(t,e,s){var r=e||new H(0,0);t.style[Do]=(U.ie3d?"translate("+r.x+"px,"+r.y+"px)":"translate3d("+r.x+"px,"+r.y+"px,0)")+(s?" scale("+s+")":"")}function Tt(t,e){t._leaflet_pos=e,U.any3d?Te(t,e):(t.style.left=e.x+"px",t.style.top=e.y+"px")}function Ce(t){return t._leaflet_pos||new H(0,0)}var Li,Si,Io;if("onselectstart"in document)Li=function(){V(window,"selectstart",Wt)},Si=function(){bt(window,"selectstart",Wt)};else{var Ti=eo(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Li=function(){if(Ti){var t=document.documentElement.style;Io=t[Ti],t[Ti]="none"}},Si=function(){Ti&&(document.documentElement.style[Ti]=Io,Io=void 0)}}function Oo(){V(window,"dragstart",Wt)}function Ro(){bt(window,"dragstart",Wt)}var io,Wo;function jo(t){for(;t.tabIndex===-1;)t=t.parentNode;t.style&&(oo(),io=t,Wo=t.style.outlineStyle,t.style.outlineStyle="none",V(window,"keydown",oo))}function oo(){io&&(io.style.outlineStyle=Wo,io=void 0,Wo=void 0,bt(window,"keydown",oo))}function Hn(t){do t=t.parentNode;while((!t.offsetWidth||!t.offsetHeight)&&t!==document.body);return t}function Ho(t){var e=t.getBoundingClientRect();return{x:e.width/t.offsetWidth||1,y:e.height/t.offsetHeight||1,boundingClientRect:e}}var Ba={__proto__:null,TRANSFORM:Do,TRANSITION:$i,TRANSITION_END:Wn,get:jn,getStyle:Pi,create:ht,remove:kt,empty:Xi,toFront:Ze,toBack:Ge,hasClass:No,addClass:Q,removeClass:Lt,setClass:Bo,getClass:to,setOpacity:Yt,testProp:eo,setTransform:Te,setPosition:Tt,getPosition:Ce,get disableTextSelection(){return Li},get enableTextSelection(){return Si},disableImageDrag:Oo,enableImageDrag:Ro,preventOutline:jo,restoreOutline:oo,getSizedParentNode:Hn,getScale:Ho};function V(t,e,s,r){if(e&&typeof e=="object")for(var c in e)Zo(t,c,e[c],s);else{e=$(e);for(var u=0,v=e.length;u<v;u++)Zo(t,e[u],s,r)}return this}var he="_leaflet_events";function bt(t,e,s,r){if(arguments.length===1)Un(t),delete t[he];else if(e&&typeof e=="object")for(var c in e)Go(t,c,e[c],s);else if(e=$(e),arguments.length===2)Un(t,function(w){return rt(e,w)!==-1});else for(var u=0,v=e.length;u<v;u++)Go(t,e[u],s,r);return this}function Un(t,e){for(var s in t[he]){var r=s.split(/\d/)[0];(!e||e(r))&&Go(t,r,null,null,s)}}var Uo={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function Zo(t,e,s,r){var c=e+f(s)+(r?"_"+f(r):"");if(t[he]&&t[he][c])return this;var u=function(w){return s.call(r||t,w||window.event)},v=u;!U.touchNative&&U.pointer&&e.indexOf("touch")===0?u=Pa(t,e,u):U.touch&&e==="dblclick"?u=Ma(t,u):"addEventListener"in t?e==="touchstart"||e==="touchmove"||e==="wheel"||e==="mousewheel"?t.addEventListener(Uo[e]||e,u,U.passiveEvents?{passive:!1}:!1):e==="mouseenter"||e==="mouseleave"?(u=function(w){w=w||window.event,Ko(t,w)&&v(w)},t.addEventListener(Uo[e],u,!1)):t.addEventListener(e,v,!1):t.attachEvent("on"+e,u),t[he]=t[he]||{},t[he][c]=u}function Go(t,e,s,r,c){c=c||e+f(s)+(r?"_"+f(r):"");var u=t[he]&&t[he][c];if(!u)return this;!U.touchNative&&U.pointer&&e.indexOf("touch")===0?La(t,e,u):U.touch&&e==="dblclick"?Da(t,u):"removeEventListener"in t?t.removeEventListener(Uo[e]||e,u,!1):t.detachEvent("on"+e,u),t[he][c]=null}function Ee(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,this}function qo(t){return Zo(t,"wheel",Ee),this}function Ci(t){return V(t,"mousedown touchstart dblclick contextmenu",Ee),t._leaflet_disable_click=!0,this}function Wt(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}function ze(t){return Wt(t),Ee(t),this}function Zn(t){if(t.composedPath)return t.composedPath();for(var e=[],s=t.target;s;)e.push(s),s=s.parentNode;return e}function Gn(t,e){if(!e)return new H(t.clientX,t.clientY);var s=Ho(e),r=s.boundingClientRect;return new H((t.clientX-r.left)/s.x-e.clientLeft,(t.clientY-r.top)/s.y-e.clientTop)}var Ia=U.linux&&U.chrome?window.devicePixelRatio:U.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function qn(t){return U.edge?t.wheelDeltaY/2:t.deltaY&&t.deltaMode===0?-t.deltaY/Ia:t.deltaY&&t.deltaMode===1?-t.deltaY*20:t.deltaY&&t.deltaMode===2?-t.deltaY*60:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?-t.detail*20:t.detail?t.detail/-32765*60:0}function Ko(t,e){var s=e.relatedTarget;if(!s)return!0;try{for(;s&&s!==t;)s=s.parentNode}catch{return!1}return s!==t}var Oa={__proto__:null,on:V,off:bt,stopPropagation:Ee,disableScrollPropagation:qo,disableClickPropagation:Ci,preventDefault:Wt,stop:ze,getPropagationPath:Zn,getMousePosition:Gn,getWheelDelta:qn,isExternalTarget:Ko,addListener:V,removeListener:bt},Kn=$t.extend({run:function(t,e,s,r){this.stop(),this._el=t,this._inProgress=!0,this._duration=s||.25,this._easeOutPower=1/Math.max(r||.5,.2),this._startPos=Ce(t),this._offset=e.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=Y(this._animate,this),this._step()},_step:function(t){var e=+new Date-this._startTime,s=this._duration*1e3;e<s?this._runFrame(this._easeOut(e/s),t):(this._runFrame(1),this._complete())},_runFrame:function(t,e){var s=this._startPos.add(this._offset.multiplyBy(t));e&&s._round(),Tt(this._el,s),this.fire("step")},_complete:function(){z(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),at=$t.extend({options:{crs:Le,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(t,e){e=T(this,e),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(t),this._initLayout(),this._onResize=d(this._onResize,this),this._initEvents(),e.maxBounds&&this.setMaxBounds(e.maxBounds),e.zoom!==void 0&&(this._zoom=this._limitZoom(e.zoom)),e.center&&e.zoom!==void 0&&this.setView(J(e.center),e.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=$i&&U.any3d&&!U.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),V(this._proxy,Wn,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(t,e,s){if(e=e===void 0?this._zoom:this._limitZoom(e),t=this._limitCenter(J(t),e,this.options.maxBounds),s=s||{},this._stop(),this._loaded&&!s.reset&&s!==!0){s.animate!==void 0&&(s.zoom=a({animate:s.animate},s.zoom),s.pan=a({animate:s.animate,duration:s.duration},s.pan));var r=this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,s.zoom):this._tryAnimatedPan(t,s.pan);if(r)return clearTimeout(this._sizeTimer),this}return this._resetView(t,e,s.pan&&s.pan.noMoveStart),this},setZoom:function(t,e){return this._loaded?this.setView(this.getCenter(),t,{zoom:e}):(this._zoom=t,this)},zoomIn:function(t,e){return t=t||(U.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+t,e)},zoomOut:function(t,e){return t=t||(U.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-t,e)},setZoomAround:function(t,e,s){var r=this.getZoomScale(e),c=this.getSize().divideBy(2),u=t instanceof H?t:this.latLngToContainerPoint(t),v=u.subtract(c).multiplyBy(1-1/r),w=this.containerPointToLatLng(c.add(v));return this.setView(w,e,{zoom:s})},_getBoundsCenterZoom:function(t,e){e=e||{},t=t.getBounds?t.getBounds():vt(t);var s=W(e.paddingTopLeft||e.padding||[0,0]),r=W(e.paddingBottomRight||e.padding||[0,0]),c=this.getBoundsZoom(t,!1,s.add(r));if(c=typeof e.maxZoom=="number"?Math.min(e.maxZoom,c):c,c===1/0)return{center:t.getCenter(),zoom:c};var u=r.subtract(s).divideBy(2),v=this.project(t.getSouthWest(),c),w=this.project(t.getNorthEast(),c),k=this.unproject(v.add(w).divideBy(2).add(u),c);return{center:k,zoom:c}},fitBounds:function(t,e){if(t=vt(t),!t.isValid())throw new Error("Bounds are not valid.");var s=this._getBoundsCenterZoom(t,e);return this.setView(s.center,s.zoom,e)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,e){return this.setView(t,this._zoom,{pan:e})},panBy:function(t,e){if(t=W(t).round(),e=e||{},!t.x&&!t.y)return this.fire("moveend");if(e.animate!==!0&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Kn,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),e.noMoveStart||this.fire("movestart"),e.animate!==!1){Q(this._mapPane,"leaflet-pan-anim");var s=this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane,s,e.duration||.25,e.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},flyTo:function(t,e,s){if(s=s||{},s.animate===!1||!U.any3d)return this.setView(t,e,s);this._stop();var r=this.project(this.getCenter()),c=this.project(t),u=this.getSize(),v=this._zoom;t=J(t),e=e===void 0?v:e;var w=Math.max(u.x,u.y),k=w*this.getZoomScale(v,e),C=c.distanceTo(r)||1,N=1.42,q=N*N;function X(Ct){var mo=Ct?-1:1,Lr=Ct?k:w,Sr=k*k-w*w+mo*q*q*C*C,Tr=2*Lr*q*C,an=Sr/Tr,Ss=Math.sqrt(an*an+1)-an,Cr=Ss<1e-9?-18:Math.log(Ss);return Cr}function jt(Ct){return(Math.exp(Ct)-Math.exp(-Ct))/2}function Bt(Ct){return(Math.exp(Ct)+Math.exp(-Ct))/2}function Xt(Ct){return jt(Ct)/Bt(Ct)}var Ut=X(0);function Qe(Ct){return w*(Bt(Ut)/Bt(Ut+N*Ct))}function kr(Ct){return w*(Bt(Ut)*Xt(Ut+N*Ct)-jt(Ut))/q}function Fr(Ct){return 1-Math.pow(1-Ct,1.5)}var $r=Date.now(),Ps=(X(1)-Ut)/N,Pr=s.duration?1e3*s.duration:1e3*Ps*.8;function Ls(){var Ct=(Date.now()-$r)/Pr,mo=Fr(Ct)*Ps;Ct<=1?(this._flyToFrame=Y(Ls,this),this._move(this.unproject(r.add(c.subtract(r).multiplyBy(kr(mo)/C)),v),this.getScaleZoom(w/Qe(mo),v),{flyTo:!0})):this._move(t,e)._moveEnd(!0)}return this._moveStart(!0,s.noMoveStart),Ls.call(this),this},flyToBounds:function(t,e){var s=this._getBoundsCenterZoom(t,e);return this.flyTo(s.center,s.zoom,e)},setMaxBounds:function(t){return t=vt(t),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),t.isValid()?(this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(t){var e=this.options.minZoom;return this.options.minZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(t):this},setMaxZoom:function(t){var e=this.options.maxZoom;return this.options.maxZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(t):this},panInsideBounds:function(t,e){this._enforcingBounds=!0;var s=this.getCenter(),r=this._limitCenter(s,this._zoom,vt(t));return s.equals(r)||this.panTo(r,e),this._enforcingBounds=!1,this},panInside:function(t,e){e=e||{};var s=W(e.paddingTopLeft||e.padding||[0,0]),r=W(e.paddingBottomRight||e.padding||[0,0]),c=this.project(this.getCenter()),u=this.project(t),v=this.getPixelBounds(),w=wt([v.min.add(s),v.max.subtract(r)]),k=w.getSize();if(!w.contains(u)){this._enforcingBounds=!0;var C=u.subtract(w.getCenter()),N=w.extend(u).getSize().subtract(k);c.x+=C.x<0?-N.x:N.x,c.y+=C.y<0?-N.y:N.y,this.panTo(this.unproject(c),e),this._enforcingBounds=!1}return this},invalidateSize:function(t){if(!this._loaded)return this;t=a({animate:!1,pan:!0},t===!0?{animate:!0}:t);var e=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var s=this.getSize(),r=e.divideBy(2).round(),c=s.divideBy(2).round(),u=r.subtract(c);return!u.x&&!u.y?this:(t.animate&&t.pan?this.panBy(u):(t.pan&&this._rawPanBy(u),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(d(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:e,newSize:s}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(t){if(t=this._locateOptions=a({timeout:1e4,watch:!1},t),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var e=d(this._handleGeolocationResponse,this),s=d(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(e,s,t):navigator.geolocation.getCurrentPosition(e,s,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){if(this._container._leaflet_id){var e=t.code,s=t.message||(e===1?"permission denied":e===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:e,message:"Geolocation error: "+s+"."})}},_handleGeolocationResponse:function(t){if(this._container._leaflet_id){var e=t.coords.latitude,s=t.coords.longitude,r=new it(e,s),c=r.toBounds(t.coords.accuracy*2),u=this._locateOptions;if(u.setView){var v=this.getBoundsZoom(c);this.setView(r,u.maxZoom?Math.min(v,u.maxZoom):v)}var w={latlng:r,bounds:c,timestamp:t.timestamp};for(var k in t.coords)typeof t.coords[k]=="number"&&(w[k]=t.coords[k]);this.fire("locationfound",w)}},addHandler:function(t,e){if(!e)return this;var s=this[t]=new e(this);return this._handlers.push(s),this.options[t]&&s.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),kt(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(z(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var t;for(t in this._layers)this._layers[t].remove();for(t in this._panes)kt(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(t,e){var s="leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),r=ht("div",s,e||this._mapPane);return t&&(this._panes[t]=r),r},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds(),e=this.unproject(t.getBottomLeft()),s=this.unproject(t.getTopRight());return new St(e,s)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,e,s){t=vt(t),s=W(s||[0,0]);var r=this.getZoom()||0,c=this.getMinZoom(),u=this.getMaxZoom(),v=t.getNorthWest(),w=t.getSouthEast(),k=this.getSize().subtract(s),C=wt(this.project(w,r),this.project(v,r)).getSize(),N=U.any3d?this.options.zoomSnap:1,q=k.x/C.x,X=k.y/C.y,jt=e?Math.max(q,X):Math.min(q,X);return r=this.getScaleZoom(jt,r),N&&(r=Math.round(r/(N/100))*(N/100),r=e?Math.ceil(r/N)*N:Math.floor(r/N)*N),Math.max(c,Math.min(u,r))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new H(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(t,e){var s=this._getTopLeftPoint(t,e);return new st(s,s.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(t===void 0?this.getZoom():t)},getPane:function(t){return typeof t=="string"?this._panes[t]:t},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t,e){var s=this.options.crs;return e=e===void 0?this._zoom:e,s.scale(t)/s.scale(e)},getScaleZoom:function(t,e){var s=this.options.crs;e=e===void 0?this._zoom:e;var r=s.zoom(t*s.scale(e));return isNaN(r)?1/0:r},project:function(t,e){return e=e===void 0?this._zoom:e,this.options.crs.latLngToPoint(J(t),e)},unproject:function(t,e){return e=e===void 0?this._zoom:e,this.options.crs.pointToLatLng(W(t),e)},layerPointToLatLng:function(t){var e=W(t).add(this.getPixelOrigin());return this.unproject(e)},latLngToLayerPoint:function(t){var e=this.project(J(t))._round();return e._subtract(this.getPixelOrigin())},wrapLatLng:function(t){return this.options.crs.wrapLatLng(J(t))},wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(vt(t))},distance:function(t,e){return this.options.crs.distance(J(t),J(e))},containerPointToLayerPoint:function(t){return W(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return W(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var e=this.containerPointToLayerPoint(W(t));return this.layerPointToLatLng(e)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(J(t)))},mouseEventToContainerPoint:function(t){return Gn(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var e=this._container=jn(t);if(e){if(e._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");V(e,"scroll",this._onScroll,this),this._containerId=f(e)},_initLayout:function(){var t=this._container;this._fadeAnimated=this.options.fadeAnimation&&U.any3d,Q(t,"leaflet-container"+(U.touch?" leaflet-touch":"")+(U.retina?" leaflet-retina":"")+(U.ielt9?" leaflet-oldie":"")+(U.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var e=Pi(t,"position");e!=="absolute"&&e!=="relative"&&e!=="fixed"&&e!=="sticky"&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),Tt(this._mapPane,new H(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(Q(t.markerPane,"leaflet-zoom-hide"),Q(t.shadowPane,"leaflet-zoom-hide"))},_resetView:function(t,e,s){Tt(this._mapPane,new H(0,0));var r=!this._loaded;this._loaded=!0,e=this._limitZoom(e),this.fire("viewprereset");var c=this._zoom!==e;this._moveStart(c,s)._move(t,e)._moveEnd(c),this.fire("viewreset"),r&&this.fire("load")},_moveStart:function(t,e){return t&&this.fire("zoomstart"),e||this.fire("movestart"),this},_move:function(t,e,s,r){e===void 0&&(e=this._zoom);var c=this._zoom!==e;return this._zoom=e,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),r?s&&s.pinch&&this.fire("zoom",s):((c||s&&s.pinch)&&this.fire("zoom",s),this.fire("move",s)),this},_moveEnd:function(t){return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return z(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){Tt(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(t){this._targets={},this._targets[f(this._container)]=this;var e=t?bt:V;e(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&e(window,"resize",this._onResize,this),U.any3d&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){z(this._resizeRequest),this._resizeRequest=Y(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,e){for(var s=[],r,c=e==="mouseout"||e==="mouseover",u=t.target||t.srcElement,v=!1;u;){if(r=this._targets[f(u)],r&&(e==="click"||e==="preclick")&&this._draggableMoved(r)){v=!0;break}if(r&&r.listens(e,!0)&&(c&&!Ko(u,t)||(s.push(r),c))||u===this._container)break;u=u.parentNode}return!s.length&&!v&&!c&&this.listens(e,!0)&&(s=[this]),s},_isClickDisabled:function(t){for(;t&&t!==this._container;){if(t._leaflet_disable_click)return!0;t=t.parentNode}},_handleDOMEvent:function(t){var e=t.target||t.srcElement;if(!(!this._loaded||e._leaflet_disable_events||t.type==="click"&&this._isClickDisabled(e))){var s=t.type;s==="mousedown"&&jo(e),this._fireDOMEvent(t,s)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,e,s){if(t.type==="click"){var r=a({},t);r.type="preclick",this._fireDOMEvent(r,r.type,s)}var c=this._findEventTargets(t,e);if(s){for(var u=[],v=0;v<s.length;v++)s[v].listens(e,!0)&&u.push(s[v]);c=u.concat(c)}if(c.length){e==="contextmenu"&&Wt(t);var w=c[0],k={originalEvent:t};if(t.type!=="keypress"&&t.type!=="keydown"&&t.type!=="keyup"){var C=w.getLatLng&&(!w._radius||w._radius<=10);k.containerPoint=C?this.latLngToContainerPoint(w.getLatLng()):this.mouseEventToContainerPoint(t),k.layerPoint=this.containerPointToLayerPoint(k.containerPoint),k.latlng=C?w.getLatLng():this.layerPointToLatLng(k.layerPoint)}for(v=0;v<c.length;v++)if(c[v].fire(e,k,!0),k.originalEvent._stopped||c[v].options.bubblingMouseEvents===!1&&rt(this._mouseEvents,e)!==-1)return}},_draggableMoved:function(t){return t=t.dragging&&t.dragging.enabled()?t:this,t.dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,e=this._handlers.length;t<e;t++)this._handlers[t].disable()},whenReady:function(t,e){return this._loaded?t.call(e||this,{target:this}):this.on("load",t,e),this},_getMapPanePos:function(){return Ce(this._mapPane)||new H(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,e){var s=t&&e!==void 0?this._getNewPixelOrigin(t,e):this.getPixelOrigin();return s.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,e){var s=this.getSize()._divideBy(2);return this.project(t,e)._subtract(s)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,e,s){var r=this._getNewPixelOrigin(s,e);return this.project(t,e)._subtract(r)},_latLngBoundsToNewLayerBounds:function(t,e,s){var r=this._getNewPixelOrigin(s,e);return wt([this.project(t.getSouthWest(),e)._subtract(r),this.project(t.getNorthWest(),e)._subtract(r),this.project(t.getSouthEast(),e)._subtract(r),this.project(t.getNorthEast(),e)._subtract(r)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,e,s){if(!s)return t;var r=this.project(t,e),c=this.getSize().divideBy(2),u=new st(r.subtract(c),r.add(c)),v=this._getBoundsOffset(u,s,e);return Math.abs(v.x)<=1&&Math.abs(v.y)<=1?t:this.unproject(r.add(v),e)},_limitOffset:function(t,e){if(!e)return t;var s=this.getPixelBounds(),r=new st(s.min.add(t),s.max.add(t));return t.add(this._getBoundsOffset(r,e))},_getBoundsOffset:function(t,e,s){var r=wt(this.project(e.getNorthEast(),s),this.project(e.getSouthWest(),s)),c=r.min.subtract(t.min),u=r.max.subtract(t.max),v=this._rebound(c.x,-u.x),w=this._rebound(c.y,-u.y);return new H(v,w)},_rebound:function(t,e){return t+e>0?Math.round(t-e)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(e))},_limitZoom:function(t){var e=this.getMinZoom(),s=this.getMaxZoom(),r=U.any3d?this.options.zoomSnap:1;return r&&(t=Math.round(t/r)*r),Math.max(e,Math.min(s,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){Lt(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,e){var s=this._getCenterOffset(t)._trunc();return(e&&e.animate)!==!0&&!this.getSize().contains(s)?!1:(this.panBy(s,e),!0)},_createAnimProxy:function(){var t=this._proxy=ht("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(e){var s=Do,r=this._proxy.style[s];Te(this._proxy,this.project(e.center,e.zoom),this.getZoomScale(e.zoom,1)),r===this._proxy.style[s]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){kt(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var t=this.getCenter(),e=this.getZoom();Te(this._proxy,this.project(t,e),this.getZoomScale(e,1))},_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,e,s){if(this._animatingZoom)return!0;if(s=s||{},!this._zoomAnimated||s.animate===!1||this._nothingToAnimate()||Math.abs(e-this._zoom)>this.options.zoomAnimationThreshold)return!1;var r=this.getZoomScale(e),c=this._getCenterOffset(t)._divideBy(1-1/r);return s.animate!==!0&&!this.getSize().contains(c)?!1:(Y(function(){this._moveStart(!0,s.noMoveStart||!1)._animateZoom(t,e,!0)},this),!0)},_animateZoom:function(t,e,s,r){this._mapPane&&(s&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=e,Q(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:t,zoom:e,noUpdate:r}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(d(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&Lt(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function Ra(t,e){return new at(t,e)}var ne=G.extend({options:{position:"topright"},initialize:function(t){T(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var e=this._map;return e&&e.removeControl(this),this.options.position=t,e&&e.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t;var e=this._container=this.onAdd(t),s=this.getPosition(),r=t._controlCorners[s];return Q(e,"leaflet-control"),s.indexOf("bottom")!==-1?r.insertBefore(e,r.firstChild):r.appendChild(e),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(kt(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(t){this._map&&t&&t.screenX>0&&t.screenY>0&&this._map.getContainer().focus()}}),Ei=function(t){return new ne(t)};at.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){var t=this._controlCorners={},e="leaflet-",s=this._controlContainer=ht("div",e+"control-container",this._container);function r(c,u){var v=e+c+" "+e+u;t[c+u]=ht("div",v,s)}r("top","left"),r("top","right"),r("bottom","left"),r("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)kt(this._controlCorners[t]);kt(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Vn=ne.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(t,e,s,r){return s<r?-1:r<s?1:0}},initialize:function(t,e,s){T(this,s),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var r in t)this._addLayer(t[r],r);for(r in e)this._addLayer(e[r],r,!0)},onAdd:function(t){this._initLayout(),this._update(),this._map=t,t.on("zoomend",this._checkDisabledLayers,this);for(var e=0;e<this._layers.length;e++)this._layers[e].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){return ne.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(t,e){return this._addLayer(t,e),this._map?this._update():this},addOverlay:function(t,e){return this._addLayer(t,e,!0),this._map?this._update():this},removeLayer:function(t){t.off("add remove",this._onLayerChange,this);var e=this._getLayer(f(t));return e&&this._layers.splice(this._layers.indexOf(e),1),this._map?this._update():this},expand:function(){Q(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._section.clientHeight?(Q(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=t+"px"):Lt(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return Lt(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",e=this._container=ht("div",t),s=this.options.collapsed;e.setAttribute("aria-haspopup",!0),Ci(e),qo(e);var r=this._section=ht("section",t+"-list");s&&(this._map.on("click",this.collapse,this),V(e,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var c=this._layersLink=ht("a",t+"-toggle",e);c.href="#",c.title="Layers",c.setAttribute("role","button"),V(c,{keydown:function(u){u.keyCode===13&&this._expandSafely()},click:function(u){Wt(u),this._expandSafely()}},this),s||this.expand(),this._baseLayersList=ht("div",t+"-base",r),this._separator=ht("div",t+"-separator",r),this._overlaysList=ht("div",t+"-overlays",r),e.appendChild(r)},_getLayer:function(t){for(var e=0;e<this._layers.length;e++)if(this._layers[e]&&f(this._layers[e].layer)===t)return this._layers[e]},_addLayer:function(t,e,s){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:e,overlay:s}),this.options.sortLayers&&this._layers.sort(d(function(r,c){return this.options.sortFunction(r.layer,c.layer,r.name,c.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;Xi(this._baseLayersList),Xi(this._overlaysList),this._layerControlInputs=[];var t,e,s,r,c=0;for(s=0;s<this._layers.length;s++)r=this._layers[s],this._addItem(r),e=e||r.overlay,t=t||!r.overlay,c+=r.overlay?0:1;return this.options.hideSingleBase&&(t=t&&c>1,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=e&&t?"":"none",this},_onLayerChange:function(t){this._handlingClick||this._update();var e=this._getLayer(f(t.target)),s=e.overlay?t.type==="add"?"overlayadd":"overlayremove":t.type==="add"?"baselayerchange":null;s&&this._map.fire(s,e)},_createRadioElement:function(t,e){var s='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(e?' checked="checked"':"")+"/>",r=document.createElement("div");return r.innerHTML=s,r.firstChild},_addItem:function(t){var e=document.createElement("label"),s=this._map.hasLayer(t.layer),r;t.overlay?(r=document.createElement("input"),r.type="checkbox",r.className="leaflet-control-layers-selector",r.defaultChecked=s):r=this._createRadioElement("leaflet-base-layers_"+f(this),s),this._layerControlInputs.push(r),r.layerId=f(t.layer),V(r,"click",this._onInputClick,this);var c=document.createElement("span");c.innerHTML=" "+t.name;var u=document.createElement("span");e.appendChild(u),u.appendChild(r),u.appendChild(c);var v=t.overlay?this._overlaysList:this._baseLayersList;return v.appendChild(e),this._checkDisabledLayers(),e},_onInputClick:function(){if(!this._preventClick){var t=this._layerControlInputs,e,s,r=[],c=[];this._handlingClick=!0;for(var u=t.length-1;u>=0;u--)e=t[u],s=this._getLayer(e.layerId).layer,e.checked?r.push(s):e.checked||c.push(s);for(u=0;u<c.length;u++)this._map.hasLayer(c[u])&&this._map.removeLayer(c[u]);for(u=0;u<r.length;u++)this._map.hasLayer(r[u])||this._map.addLayer(r[u]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var t=this._layerControlInputs,e,s,r=this._map.getZoom(),c=t.length-1;c>=0;c--)e=t[c],s=this._getLayer(e.layerId).layer,e.disabled=s.options.minZoom!==void 0&&r<s.options.minZoom||s.options.maxZoom!==void 0&&r>s.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var t=this._section;this._preventClick=!0,V(t,"click",Wt),this.expand();var e=this;setTimeout(function(){bt(t,"click",Wt),e._preventClick=!1})}}),Wa=function(t,e,s){return new Vn(t,e,s)},Vo=ne.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(t){var e="leaflet-control-zoom",s=ht("div",e+" leaflet-bar"),r=this.options;return this._zoomInButton=this._createButton(r.zoomInText,r.zoomInTitle,e+"-in",s,this._zoomIn),this._zoomOutButton=this._createButton(r.zoomOutText,r.zoomOutTitle,e+"-out",s,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),s},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,e,s,r,c){var u=ht("a",s,r);return u.innerHTML=t,u.href="#",u.title=e,u.setAttribute("role","button"),u.setAttribute("aria-label",e),Ci(u),V(u,"click",ze),V(u,"click",c,this),V(u,"click",this._refocusOnMap,this),u},_updateDisabled:function(){var t=this._map,e="leaflet-disabled";Lt(this._zoomInButton,e),Lt(this._zoomOutButton,e),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||t._zoom===t.getMinZoom())&&(Q(this._zoomOutButton,e),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||t._zoom===t.getMaxZoom())&&(Q(this._zoomInButton,e),this._zoomInButton.setAttribute("aria-disabled","true"))}});at.mergeOptions({zoomControl:!0}),at.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new Vo,this.addControl(this.zoomControl))});var ja=function(t){return new Vo(t)},Jn=ne.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(t){var e="leaflet-control-scale",s=ht("div",e),r=this.options;return this._addScales(r,e+"-line",s),t.on(r.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),s},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,e,s){t.metric&&(this._mScale=ht("div",e,s)),t.imperial&&(this._iScale=ht("div",e,s))},_update:function(){var t=this._map,e=t.getSize().y/2,s=t.distance(t.containerPointToLatLng([0,e]),t.containerPointToLatLng([this.options.maxWidth,e]));this._updateScales(s)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var e=this._getRoundNum(t),s=e<1e3?e+" m":e/1e3+" km";this._updateScale(this._mScale,s,e/t)},_updateImperial:function(t){var e=t*3.2808399,s,r,c;e>5280?(s=e/5280,r=this._getRoundNum(s),this._updateScale(this._iScale,r+" mi",r/s)):(c=this._getRoundNum(e),this._updateScale(this._iScale,c+" ft",c/e))},_updateScale:function(t,e,s){t.style.width=Math.round(this.options.maxWidth*s)+"px",t.innerHTML=e},_getRoundNum:function(t){var e=Math.pow(10,(Math.floor(t)+"").length-1),s=t/e;return s=s>=10?10:s>=5?5:s>=3?3:s>=2?2:1,e*s}}),Ha=function(t){return new Jn(t)},Ua='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',Jo=ne.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(U.inlineSvg?Ua+" ":"")+"Leaflet</a>"},initialize:function(t){T(this,t),this._attributions={}},onAdd:function(t){t.attributionControl=this,this._container=ht("div","leaflet-control-attribution"),Ci(this._container);for(var e in t._layers)t._layers[e].getAttribution&&this.addAttribution(t._layers[e].getAttribution());return this._update(),t.on("layeradd",this._addAttribution,this),this._container},onRemove:function(t){t.off("layeradd",this._addAttribution,this)},_addAttribution:function(t){t.layer.getAttribution&&(this.addAttribution(t.layer.getAttribution()),t.layer.once("remove",function(){this.removeAttribution(t.layer.getAttribution())},this))},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):this},removeAttribution:function(t){return t?(this._attributions[t]&&(this._attributions[t]--,this._update()),this):this},_update:function(){if(this._map){var t=[];for(var e in this._attributions)this._attributions[e]&&t.push(e);var s=[];this.options.prefix&&s.push(this.options.prefix),t.length&&s.push(t.join(", ")),this._container.innerHTML=s.join(' <span aria-hidden="true">|</span> ')}}});at.mergeOptions({attributionControl:!0}),at.addInitHook(function(){this.options.attributionControl&&new Jo().addTo(this)});var Za=function(t){return new Jo(t)};ne.Layers=Vn,ne.Zoom=Vo,ne.Scale=Jn,ne.Attribution=Jo,Ei.layers=Wa,Ei.zoom=ja,Ei.scale=Ha,Ei.attribution=Za;var pe=G.extend({initialize:function(t){this._map=t},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});pe.addTo=function(t,e){return t.addHandler(e,this),this};var Ga={Events:nt},Yn=U.touch?"touchstart mousedown":"mousedown",_e=$t.extend({options:{clickTolerance:3},initialize:function(t,e,s,r){T(this,r),this._element=t,this._dragStartTarget=e||t,this._preventOutline=s},enable:function(){this._enabled||(V(this._dragStartTarget,Yn,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(_e._dragging===this&&this.finishDrag(!0),bt(this._dragStartTarget,Yn,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){if(this._enabled&&(this._moved=!1,!No(this._element,"leaflet-zoom-anim"))){if(t.touches&&t.touches.length!==1){_e._dragging===this&&this.finishDrag();return}if(!(_e._dragging||t.shiftKey||t.which!==1&&t.button!==1&&!t.touches)&&(_e._dragging=this,this._preventOutline&&jo(this._element),Oo(),Li(),!this._moving)){this.fire("down");var e=t.touches?t.touches[0]:t,s=Hn(this._element);this._startPoint=new H(e.clientX,e.clientY),this._startPos=Ce(this._element),this._parentScale=Ho(s);var r=t.type==="mousedown";V(document,r?"mousemove":"touchmove",this._onMove,this),V(document,r?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(t){if(this._enabled){if(t.touches&&t.touches.length>1){this._moved=!0;return}var e=t.touches&&t.touches.length===1?t.touches[0]:t,s=new H(e.clientX,e.clientY)._subtract(this._startPoint);!s.x&&!s.y||Math.abs(s.x)+Math.abs(s.y)<this.options.clickTolerance||(s.x/=this._parentScale.x,s.y/=this._parentScale.y,Wt(t),this._moved||(this.fire("dragstart"),this._moved=!0,Q(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),Q(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(s),this._moving=!0,this._lastEvent=t,this._updatePosition())}},_updatePosition:function(){var t={originalEvent:this._lastEvent};this.fire("predrag",t),Tt(this._element,this._newPos),this.fire("drag",t)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(t){Lt(document.body,"leaflet-dragging"),this._lastTarget&&(Lt(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),bt(document,"mousemove touchmove",this._onMove,this),bt(document,"mouseup touchend touchcancel",this._onUp,this),Ro(),Si();var e=this._moved&&this._moving;this._moving=!1,_e._dragging=!1,e&&this.fire("dragend",{noInertia:t,distance:this._newPos.distanceTo(this._startPos)})}});function Qn(t,e,s){var r,c=[1,4,2,8],u,v,w,k,C,N,q,X;for(u=0,N=t.length;u<N;u++)t[u]._code=Ae(t[u],e);for(w=0;w<4;w++){for(q=c[w],r=[],u=0,N=t.length,v=N-1;u<N;v=u++)k=t[u],C=t[v],k._code&q?C._code&q||(X=no(C,k,q,e,s),X._code=Ae(X,e),r.push(X)):(C._code&q&&(X=no(C,k,q,e,s),X._code=Ae(X,e),r.push(X)),r.push(k));t=r}return t}function Xn(t,e){var s,r,c,u,v,w,k,C,N;if(!t||t.length===0)throw new Error("latlngs not passed");Qt(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var q=J([0,0]),X=vt(t),jt=X.getNorthWest().distanceTo(X.getSouthWest())*X.getNorthEast().distanceTo(X.getNorthWest());jt<1700&&(q=Yo(t));var Bt=t.length,Xt=[];for(s=0;s<Bt;s++){var Ut=J(t[s]);Xt.push(e.project(J([Ut.lat-q.lat,Ut.lng-q.lng])))}for(w=k=C=0,s=0,r=Bt-1;s<Bt;r=s++)c=Xt[s],u=Xt[r],v=c.y*u.x-u.y*c.x,k+=(c.x+u.x)*v,C+=(c.y+u.y)*v,w+=v*3;w===0?N=Xt[0]:N=[k/w,C/w];var Qe=e.unproject(W(N));return J([Qe.lat+q.lat,Qe.lng+q.lng])}function Yo(t){for(var e=0,s=0,r=0,c=0;c<t.length;c++){var u=J(t[c]);e+=u.lat,s+=u.lng,r++}return J([e/r,s/r])}var qa={__proto__:null,clipPolygon:Qn,polygonCenter:Xn,centroid:Yo};function ts(t,e){if(!e||!t.length)return t.slice();var s=e*e;return t=Ja(t,s),t=Va(t,s),t}function es(t,e,s){return Math.sqrt(zi(t,e,s,!0))}function Ka(t,e,s){return zi(t,e,s)}function Va(t,e){var s=t.length,r=typeof Uint8Array<"u"?Uint8Array:Array,c=new r(s);c[0]=c[s-1]=1,Qo(t,c,e,0,s-1);var u,v=[];for(u=0;u<s;u++)c[u]&&v.push(t[u]);return v}function Qo(t,e,s,r,c){var u=0,v,w,k;for(w=r+1;w<=c-1;w++)k=zi(t[w],t[r],t[c],!0),k>u&&(v=w,u=k);u>s&&(e[v]=1,Qo(t,e,s,r,v),Qo(t,e,s,v,c))}function Ja(t,e){for(var s=[t[0]],r=1,c=0,u=t.length;r<u;r++)Ya(t[r],t[c])>e&&(s.push(t[r]),c=r);return c<u-1&&s.push(t[u-1]),s}var is;function os(t,e,s,r,c){var u=r?is:Ae(t,s),v=Ae(e,s),w,k,C;for(is=v;;){if(!(u|v))return[t,e];if(u&v)return!1;w=u||v,k=no(t,e,w,s,c),C=Ae(k,s),w===u?(t=k,u=C):(e=k,v=C)}}function no(t,e,s,r,c){var u=e.x-t.x,v=e.y-t.y,w=r.min,k=r.max,C,N;return s&8?(C=t.x+u*(k.y-t.y)/v,N=k.y):s&4?(C=t.x+u*(w.y-t.y)/v,N=w.y):s&2?(C=k.x,N=t.y+v*(k.x-t.x)/u):s&1&&(C=w.x,N=t.y+v*(w.x-t.x)/u),new H(C,N,c)}function Ae(t,e){var s=0;return t.x<e.min.x?s|=1:t.x>e.max.x&&(s|=2),t.y<e.min.y?s|=4:t.y>e.max.y&&(s|=8),s}function Ya(t,e){var s=e.x-t.x,r=e.y-t.y;return s*s+r*r}function zi(t,e,s,r){var c=e.x,u=e.y,v=s.x-c,w=s.y-u,k=v*v+w*w,C;return k>0&&(C=((t.x-c)*v+(t.y-u)*w)/k,C>1?(c=s.x,u=s.y):C>0&&(c+=v*C,u+=w*C)),v=t.x-c,w=t.y-u,r?v*v+w*w:new H(c,u)}function Qt(t){return!j(t[0])||typeof t[0][0]!="object"&&typeof t[0][0]<"u"}function ns(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),Qt(t)}function ss(t,e){var s,r,c,u,v,w,k,C;if(!t||t.length===0)throw new Error("latlngs not passed");Qt(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var N=J([0,0]),q=vt(t),X=q.getNorthWest().distanceTo(q.getSouthWest())*q.getNorthEast().distanceTo(q.getNorthWest());X<1700&&(N=Yo(t));var jt=t.length,Bt=[];for(s=0;s<jt;s++){var Xt=J(t[s]);Bt.push(e.project(J([Xt.lat-N.lat,Xt.lng-N.lng])))}for(s=0,r=0;s<jt-1;s++)r+=Bt[s].distanceTo(Bt[s+1])/2;if(r===0)C=Bt[0];else for(s=0,u=0;s<jt-1;s++)if(v=Bt[s],w=Bt[s+1],c=v.distanceTo(w),u+=c,u>r){k=(u-r)/c,C=[w.x-k*(w.x-v.x),w.y-k*(w.y-v.y)];break}var Ut=e.unproject(W(C));return J([Ut.lat+N.lat,Ut.lng+N.lng])}var Qa={__proto__:null,simplify:ts,pointToSegmentDistance:es,closestPointOnSegment:Ka,clipSegment:os,_getEdgeIntersection:no,_getBitCode:Ae,_sqClosestPointOnSegment:zi,isFlat:Qt,_flat:ns,polylineCenter:ss},Xo={project:function(t){return new H(t.lng,t.lat)},unproject:function(t){return new it(t.y,t.x)},bounds:new st([-180,-90],[180,90])},tn={R:6378137,R_MINOR:6356752314245179e-9,bounds:new st([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(t){var e=Math.PI/180,s=this.R,r=t.lat*e,c=this.R_MINOR/s,u=Math.sqrt(1-c*c),v=u*Math.sin(r),w=Math.tan(Math.PI/4-r/2)/Math.pow((1-v)/(1+v),u/2);return r=-s*Math.log(Math.max(w,1e-10)),new H(t.lng*e*s,r)},unproject:function(t){for(var e=180/Math.PI,s=this.R,r=this.R_MINOR/s,c=Math.sqrt(1-r*r),u=Math.exp(-t.y/s),v=Math.PI/2-2*Math.atan(u),w=0,k=.1,C;w<15&&Math.abs(k)>1e-7;w++)C=c*Math.sin(v),C=Math.pow((1-C)/(1+C),c/2),k=Math.PI/2-2*Math.atan(u*C)-v,v+=k;return new it(v*e,t.x*e/s)}},Xa={__proto__:null,LonLat:Xo,Mercator:tn,SphericalMercator:Gt},tr=a({},Zt,{code:"EPSG:3395",projection:tn,transformation:(function(){var t=.5/(Math.PI*tn.R);return le(t,.5,-t,.5)})()}),as=a({},Zt,{code:"EPSG:4326",projection:Xo,transformation:le(1/180,1,-1/180,.5)}),er=a({},Dt,{projection:Xo,transformation:le(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,e){var s=e.lng-t.lng,r=e.lat-t.lat;return Math.sqrt(s*s+r*r)},infinite:!0});Dt.Earth=Zt,Dt.EPSG3395=tr,Dt.EPSG3857=Le,Dt.EPSG900913=We,Dt.EPSG4326=as,Dt.Simple=er;var se=$t.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(t){return t.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(t){return t&&t.removeLayer(this),this},getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[f(t)]=this,this},removeInteractiveTarget:function(t){return delete this._map._targets[f(t)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var e=t.target;if(e.hasLayer(this)){if(this._map=e,this._zoomAnimated=e._zoomAnimated,this.getEvents){var s=this.getEvents();e.on(s,this),this.once("remove",function(){e.off(s,this)},this)}this.onAdd(e),this.fire("add"),e.fire("layeradd",{layer:this})}}});at.include({addLayer:function(t){if(!t._layerAdd)throw new Error("The provided object is not a Layer.");var e=f(t);return this._layers[e]?this:(this._layers[e]=t,t._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t),this)},removeLayer:function(t){var e=f(t);return this._layers[e]?(this._loaded&&t.onRemove(this),delete this._layers[e],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null,this):this},hasLayer:function(t){return f(t)in this._layers},eachLayer:function(t,e){for(var s in this._layers)t.call(e,this._layers[s]);return this},_addLayers:function(t){t=t?j(t)?t:[t]:[];for(var e=0,s=t.length;e<s;e++)this.addLayer(t[e])},_addZoomLimit:function(t){(!isNaN(t.options.maxZoom)||!isNaN(t.options.minZoom))&&(this._zoomBoundLayers[f(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){var e=f(t);this._zoomBoundLayers[e]&&(delete this._zoomBoundLayers[e],this._updateZoomLevels())},_updateZoomLevels:function(){var t=1/0,e=-1/0,s=this._getZoomSpan();for(var r in this._zoomBoundLayers){var c=this._zoomBoundLayers[r].options;t=c.minZoom===void 0?t:Math.min(t,c.minZoom),e=c.maxZoom===void 0?e:Math.max(e,c.maxZoom)}this._layersMaxZoom=e===-1/0?void 0:e,this._layersMinZoom=t===1/0?void 0:t,s!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var qe=se.extend({initialize:function(t,e){T(this,e),this._layers={};var s,r;if(t)for(s=0,r=t.length;s<r;s++)this.addLayer(t[s])},addLayer:function(t){var e=this.getLayerId(t);return this._layers[e]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var e=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[e]&&this._map.removeLayer(this._layers[e]),delete this._layers[e],this},hasLayer:function(t){var e=typeof t=="number"?t:this.getLayerId(t);return e in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(t){var e=Array.prototype.slice.call(arguments,1),s,r;for(s in this._layers)r=this._layers[s],r[t]&&r[t].apply(r,e);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},eachLayer:function(t,e){for(var s in this._layers)t.call(e,this._layers[s]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return f(t)}}),ir=function(t,e){return new qe(t,e)},ge=qe.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),qe.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),qe.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new St;for(var e in this._layers){var s=this._layers[e];t.extend(s.getBounds?s.getBounds():s.getLatLng())}return t}}),or=function(t,e){return new ge(t,e)},Ke=G.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(t){T(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,e){var s=this._getIconUrl(t);if(!s){if(t==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var r=this._createImg(s,e&&e.tagName==="IMG"?e:null);return this._setIconStyles(r,t),(this.options.crossOrigin||this.options.crossOrigin==="")&&(r.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),r},_setIconStyles:function(t,e){var s=this.options,r=s[e+"Size"];typeof r=="number"&&(r=[r,r]);var c=W(r),u=W(e==="shadow"&&s.shadowAnchor||s.iconAnchor||c&&c.divideBy(2,!0));t.className="leaflet-marker-"+e+" "+(s.className||""),u&&(t.style.marginLeft=-u.x+"px",t.style.marginTop=-u.y+"px"),c&&(t.style.width=c.x+"px",t.style.height=c.y+"px")},_createImg:function(t,e){return e=e||document.createElement("img"),e.src=t,e},_getIconUrl:function(t){return U.retina&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}});function nr(t){return new Ke(t)}var Ai=Ke.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){return typeof Ai.imagePath!="string"&&(Ai.imagePath=this._detectIconPath()),(this.options.imagePath||Ai.imagePath)+Ke.prototype._getIconUrl.call(this,t)},_stripUrl:function(t){var e=function(s,r,c){var u=r.exec(s);return u&&u[c]};return t=e(t,/^url\((['"])?(.+)\1\)$/,2),t&&e(t,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var t=ht("div","leaflet-default-icon-path",document.body),e=Pi(t,"background-image")||Pi(t,"backgroundImage");if(document.body.removeChild(t),e=this._stripUrl(e),e)return e;var s=document.querySelector('link[href$="leaflet.css"]');return s?s.href.substring(0,s.href.length-11-1):""}}),rs=pe.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new _e(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),Q(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&Lt(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var e=this._marker,s=e._map,r=this._marker.options.autoPanSpeed,c=this._marker.options.autoPanPadding,u=Ce(e._icon),v=s.getPixelBounds(),w=s.getPixelOrigin(),k=wt(v.min._subtract(w).add(c),v.max._subtract(w).subtract(c));if(!k.contains(u)){var C=W((Math.max(k.max.x,u.x)-k.max.x)/(v.max.x-k.max.x)-(Math.min(k.min.x,u.x)-k.min.x)/(v.min.x-k.min.x),(Math.max(k.max.y,u.y)-k.max.y)/(v.max.y-k.max.y)-(Math.min(k.min.y,u.y)-k.min.y)/(v.min.y-k.min.y)).multiplyBy(r);s.panBy(C,{animate:!1}),this._draggable._newPos._add(C),this._draggable._startPos._add(C),Tt(e._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=Y(this._adjustPan.bind(this,t))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&(z(this._panRequest),this._panRequest=Y(this._adjustPan.bind(this,t)))},_onDrag:function(t){var e=this._marker,s=e._shadow,r=Ce(e._icon),c=e._map.layerPointToLatLng(r);s&&Tt(s,r),e._latlng=c,t.latlng=c,t.oldLatLng=this._oldLatLng,e.fire("move",t).fire("drag",t)},_onDragEnd:function(t){z(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),so=se.extend({options:{icon:new Ai,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(t,e){T(this,e),this._latlng=J(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(t){var e=this._latlng;return this._latlng=J(t),this.update(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},getIcon:function(){return this.options.icon},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,e="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),s=t.icon.createIcon(this._icon),r=!1;s!==this._icon&&(this._icon&&this._removeIcon(),r=!0,t.title&&(s.title=t.title),s.tagName==="IMG"&&(s.alt=t.alt||"")),Q(s,e),t.keyboard&&(s.tabIndex="0",s.setAttribute("role","button")),this._icon=s,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&V(s,"focus",this._panOnFocus,this);var c=t.icon.createShadow(this._shadow),u=!1;c!==this._shadow&&(this._removeShadow(),u=!0),c&&(Q(c,e),c.alt=""),this._shadow=c,t.opacity<1&&this._updateOpacity(),r&&this.getPane().appendChild(this._icon),this._initInteraction(),c&&u&&this.getPane(t.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&bt(this._icon,"focus",this._panOnFocus,this),kt(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&kt(this._shadow),this._shadow=null},_setPos:function(t){this._icon&&Tt(this._icon,t),this._shadow&&Tt(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon&&(this._icon.style.zIndex=this._zIndex+t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(e)},_initInteraction:function(){if(this.options.interactive&&(Q(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),rs)){var t=this.options.draggable;this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new rs(this),t&&this.dragging.enable()}},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;this._icon&&Yt(this._icon,t),this._shadow&&Yt(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var t=this._map;if(t){var e=this.options.icon.options,s=e.iconSize?W(e.iconSize):W(0,0),r=e.iconAnchor?W(e.iconAnchor):W(0,0);t.panInside(this._latlng,{paddingTopLeft:r,paddingBottomRight:s.subtract(r)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function sr(t,e){return new so(t,e)}var ke=se.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(t){this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(t){return T(this,t),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&t&&Object.prototype.hasOwnProperty.call(t,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),ao=ke.extend({options:{fill:!0,radius:10},initialize:function(t,e){T(this,e),this._latlng=J(t),this._radius=this.options.radius},setLatLng:function(t){var e=this._latlng;return this._latlng=J(t),this.redraw(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius},setStyle:function(t){var e=t&&t.radius||this._radius;return ke.prototype.setStyle.call(this,t),this.setRadius(e),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,e=this._radiusY||t,s=this._clickTolerance(),r=[t+s,e+s];this._pxBounds=new st(this._point.subtract(r),this._point.add(r))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function ar(t,e){return new ao(t,e)}var en=ao.extend({initialize:function(t,e,s){if(typeof e=="number"&&(e=a({},s,{radius:e})),T(this,e),this._latlng=J(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(t){return this._mRadius=t,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new St(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:ke.prototype.setStyle,_project:function(){var t=this._latlng.lng,e=this._latlng.lat,s=this._map,r=s.options.crs;if(r.distance===Zt.distance){var c=Math.PI/180,u=this._mRadius/Zt.R/c,v=s.project([e+u,t]),w=s.project([e-u,t]),k=v.add(w).divideBy(2),C=s.unproject(k).lat,N=Math.acos((Math.cos(u*c)-Math.sin(e*c)*Math.sin(C*c))/(Math.cos(e*c)*Math.cos(C*c)))/c;(isNaN(N)||N===0)&&(N=u/Math.cos(Math.PI/180*e)),this._point=k.subtract(s.getPixelOrigin()),this._radius=isNaN(N)?0:k.x-s.project([C,t-N]).x,this._radiusY=k.y-v.y}else{var q=r.unproject(r.project(this._latlng).subtract([this._mRadius,0]));this._point=s.latLngToLayerPoint(this._latlng),this._radius=this._point.x-s.latLngToLayerPoint(q).x}this._updateBounds()}});function rr(t,e,s){return new en(t,e,s)}var me=ke.extend({options:{smoothFactor:1,noClip:!1},initialize:function(t,e){T(this,e),this._setLatLngs(t)},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(t){for(var e=1/0,s=null,r=zi,c,u,v=0,w=this._parts.length;v<w;v++)for(var k=this._parts[v],C=1,N=k.length;C<N;C++){c=k[C-1],u=k[C];var q=r(t,c,u,!0);q<e&&(e=q,s=r(t,c,u))}return s&&(s.distance=Math.sqrt(e)),s},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return ss(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(t,e){return e=e||this._defaultShape(),t=J(t),e.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new St,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return Qt(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(t){for(var e=[],s=Qt(t),r=0,c=t.length;r<c;r++)s?(e[r]=J(t[r]),this._bounds.extend(e[r])):e[r]=this._convertLatLngs(t[r]);return e},_project:function(){var t=new st;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t),this._bounds.isValid()&&t.isValid()&&(this._rawPxBounds=t,this._updateBounds())},_updateBounds:function(){var t=this._clickTolerance(),e=new H(t,t);this._rawPxBounds&&(this._pxBounds=new st([this._rawPxBounds.min.subtract(e),this._rawPxBounds.max.add(e)]))},_projectLatlngs:function(t,e,s){var r=t[0]instanceof it,c=t.length,u,v;if(r){for(v=[],u=0;u<c;u++)v[u]=this._map.latLngToLayerPoint(t[u]),s.extend(v[u]);e.push(v)}else for(u=0;u<c;u++)this._projectLatlngs(t[u],e,s)},_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}var e=this._parts,s,r,c,u,v,w,k;for(s=0,c=0,u=this._rings.length;s<u;s++)for(k=this._rings[s],r=0,v=k.length;r<v-1;r++)w=os(k[r],k[r+1],t,r,!0),w&&(e[c]=e[c]||[],e[c].push(w[0]),(w[1]!==k[r+1]||r===v-2)&&(e[c].push(w[1]),c++))}},_simplifyPoints:function(){for(var t=this._parts,e=this.options.smoothFactor,s=0,r=t.length;s<r;s++)t[s]=ts(t[s],e)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(t,e){var s,r,c,u,v,w,k=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(s=0,u=this._parts.length;s<u;s++)for(w=this._parts[s],r=0,v=w.length,c=v-1;r<v;c=r++)if(!(!e&&r===0)&&es(t,w[c],w[r])<=k)return!0;return!1}});function lr(t,e){return new me(t,e)}me._flat=ns;var Ve=me.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Xn(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(t){var e=me.prototype._convertLatLngs.call(this,t),s=e.length;return s>=2&&e[0]instanceof it&&e[0].equals(e[s-1])&&e.pop(),e},_setLatLngs:function(t){me.prototype._setLatLngs.call(this,t),Qt(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return Qt(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var t=this._renderer._bounds,e=this.options.weight,s=new H(e,e);if(t=new st(t.min.subtract(s),t.max.add(s)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}for(var r=0,c=this._rings.length,u;r<c;r++)u=Qn(this._rings[r],t,!0),u.length&&this._parts.push(u)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(t){var e=!1,s,r,c,u,v,w,k,C;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(u=0,k=this._parts.length;u<k;u++)for(s=this._parts[u],v=0,C=s.length,w=C-1;v<C;w=v++)r=s[v],c=s[w],r.y>t.y!=c.y>t.y&&t.x<(c.x-r.x)*(t.y-r.y)/(c.y-r.y)+r.x&&(e=!e);return e||me.prototype._containsPoint.call(this,t,!0)}});function dr(t,e){return new Ve(t,e)}var ve=ge.extend({initialize:function(t,e){T(this,e),this._layers={},t&&this.addData(t)},addData:function(t){var e=j(t)?t:t.features,s,r,c;if(e){for(s=0,r=e.length;s<r;s++)c=e[s],(c.geometries||c.geometry||c.features||c.coordinates)&&this.addData(c);return this}var u=this.options;if(u.filter&&!u.filter(t))return this;var v=ro(t,u);return v?(v.feature=ho(t),v.defaultOptions=v.options,this.resetStyle(v),u.onEachFeature&&u.onEachFeature(t,v),this.addLayer(v)):this},resetStyle:function(t){return t===void 0?this.eachLayer(this.resetStyle,this):(t.options=a({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this)},setStyle:function(t){return this.eachLayer(function(e){this._setLayerStyle(e,t)},this)},_setLayerStyle:function(t,e){t.setStyle&&(typeof e=="function"&&(e=e(t.feature)),t.setStyle(e))}});function ro(t,e){var s=t.type==="Feature"?t.geometry:t,r=s?s.coordinates:null,c=[],u=e&&e.pointToLayer,v=e&&e.coordsToLatLng||on,w,k,C,N;if(!r&&!s)return null;switch(s.type){case"Point":return w=v(r),ls(u,t,w,e);case"MultiPoint":for(C=0,N=r.length;C<N;C++)w=v(r[C]),c.push(ls(u,t,w,e));return new ge(c);case"LineString":case"MultiLineString":return k=lo(r,s.type==="LineString"?0:1,v),new me(k,e);case"Polygon":case"MultiPolygon":return k=lo(r,s.type==="Polygon"?1:2,v),new Ve(k,e);case"GeometryCollection":for(C=0,N=s.geometries.length;C<N;C++){var q=ro({geometry:s.geometries[C],type:"Feature",properties:t.properties},e);q&&c.push(q)}return new ge(c);case"FeatureCollection":for(C=0,N=s.features.length;C<N;C++){var X=ro(s.features[C],e);X&&c.push(X)}return new ge(c);default:throw new Error("Invalid GeoJSON object.")}}function ls(t,e,s,r){return t?t(e,s):new so(s,r&&r.markersInheritOptions&&r)}function on(t){return new it(t[1],t[0],t[2])}function lo(t,e,s){for(var r=[],c=0,u=t.length,v;c<u;c++)v=e?lo(t[c],e-1,s):(s||on)(t[c]),r.push(v);return r}function nn(t,e){return t=J(t),t.alt!==void 0?[_(t.lng,e),_(t.lat,e),_(t.alt,e)]:[_(t.lng,e),_(t.lat,e)]}function co(t,e,s,r){for(var c=[],u=0,v=t.length;u<v;u++)c.push(e?co(t[u],Qt(t[u])?0:e-1,s,r):nn(t[u],r));return!e&&s&&c.length>0&&c.push(c[0].slice()),c}function Je(t,e){return t.feature?a({},t.feature,{geometry:e}):ho(e)}function ho(t){return t.type==="Feature"||t.type==="FeatureCollection"?t:{type:"Feature",properties:{},geometry:t}}var sn={toGeoJSON:function(t){return Je(this,{type:"Point",coordinates:nn(this.getLatLng(),t)})}};so.include(sn),en.include(sn),ao.include(sn),me.include({toGeoJSON:function(t){var e=!Qt(this._latlngs),s=co(this._latlngs,e?1:0,!1,t);return Je(this,{type:(e?"Multi":"")+"LineString",coordinates:s})}}),Ve.include({toGeoJSON:function(t){var e=!Qt(this._latlngs),s=e&&!Qt(this._latlngs[0]),r=co(this._latlngs,s?2:e?1:0,!0,t);return e||(r=[r]),Je(this,{type:(s?"Multi":"")+"Polygon",coordinates:r})}}),qe.include({toMultiPoint:function(t){var e=[];return this.eachLayer(function(s){e.push(s.toGeoJSON(t).geometry.coordinates)}),Je(this,{type:"MultiPoint",coordinates:e})},toGeoJSON:function(t){var e=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(e==="MultiPoint")return this.toMultiPoint(t);var s=e==="GeometryCollection",r=[];return this.eachLayer(function(c){if(c.toGeoJSON){var u=c.toGeoJSON(t);if(s)r.push(u.geometry);else{var v=ho(u);v.type==="FeatureCollection"?r.push.apply(r,v.features):r.push(v)}}}),s?Je(this,{geometries:r,type:"GeometryCollection"}):{type:"FeatureCollection",features:r}}});function ds(t,e){return new ve(t,e)}var cr=ds,po=se.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(t,e,s){this._url=t,this._bounds=vt(e),T(this,s)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(Q(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){kt(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},bringToFront:function(){return this._map&&Ze(this._image),this},bringToBack:function(){return this._map&&Ge(this._image),this},setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},setBounds:function(t){return this._bounds=vt(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var t=this._url.tagName==="IMG",e=this._image=t?this._url:ht("img");if(Q(e,"leaflet-image-layer"),this._zoomAnimated&&Q(e,"leaflet-zoom-animated"),this.options.className&&Q(e,this.options.className),e.onselectstart=x,e.onmousemove=x,e.onload=d(this.fire,this,"load"),e.onerror=d(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(e.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t){this._url=e.src;return}e.src=this._url,e.alt=this.options.alt},_animateZoom:function(t){var e=this._map.getZoomScale(t.zoom),s=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;Te(this._image,s,e)},_reset:function(){var t=this._image,e=new st(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),s=e.getSize();Tt(t,e.min),t.style.width=s.x+"px",t.style.height=s.y+"px"},_updateOpacity:function(){Yt(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)},getCenter:function(){return this._bounds.getCenter()}}),hr=function(t,e,s){return new po(t,e,s)},cs=po.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var t=this._url.tagName==="VIDEO",e=this._image=t?this._url:ht("video");if(Q(e,"leaflet-image-layer"),this._zoomAnimated&&Q(e,"leaflet-zoom-animated"),this.options.className&&Q(e,this.options.className),e.onselectstart=x,e.onmousemove=x,e.onloadeddata=d(this.fire,this,"load"),t){for(var s=e.getElementsByTagName("source"),r=[],c=0;c<s.length;c++)r.push(s[c].src);this._url=s.length>0?r:[e.src];return}j(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(e.style,"objectFit")&&(e.style.objectFit="fill"),e.autoplay=!!this.options.autoplay,e.loop=!!this.options.loop,e.muted=!!this.options.muted,e.playsInline=!!this.options.playsInline;for(var u=0;u<this._url.length;u++){var v=ht("source");v.src=this._url[u],e.appendChild(v)}}});function pr(t,e,s){return new cs(t,e,s)}var hs=po.extend({_initImage:function(){var t=this._image=this._url;Q(t,"leaflet-image-layer"),this._zoomAnimated&&Q(t,"leaflet-zoom-animated"),this.options.className&&Q(t,this.options.className),t.onselectstart=x,t.onmousemove=x}});function ur(t,e,s){return new hs(t,e,s)}var ue=se.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(t,e){t&&(t instanceof it||j(t))?(this._latlng=J(t),T(this,e)):(T(this,t),this._source=e),this.options.content&&(this._content=this.options.content)},openOn:function(t){return t=arguments.length?t:this._source._map,t.hasLayer(this)||t.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(t){return this._map?this.close():(arguments.length?this._source=t:t=this._source,this._prepareOpen(),this.openOn(t._map)),this},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&Yt(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&Yt(this._container,1),this.bringToFront(),this.options.interactive&&(Q(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(t){t._fadeAnimated?(Yt(this._container,0),this._removeTimeout=setTimeout(d(kt,void 0,this._container),200)):kt(this._container),this.options.interactive&&(Lt(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=J(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&Ze(this._container),this},bringToBack:function(){return this._map&&Ge(this._container),this},_prepareOpen:function(t){var e=this._source;if(!e._map)return!1;if(e instanceof ge){e=null;var s=this._source._layers;for(var r in s)if(s[r]._map){e=s[r];break}if(!e)return!1;this._source=e}if(!t)if(e.getCenter)t=e.getCenter();else if(e.getLatLng)t=e.getLatLng();else if(e.getBounds)t=e.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(t),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var t=this._contentNode,e=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof e=="string")t.innerHTML=e;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(e)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),e=W(this.options.offset),s=this._getAnchor();this._zoomAnimated?Tt(this._container,t.add(s)):e=e.add(t).add(s);var r=this._containerBottom=-e.y,c=this._containerLeft=-Math.round(this._containerWidth/2)+e.x;this._container.style.bottom=r+"px",this._container.style.left=c+"px"}},_getAnchor:function(){return[0,0]}});at.include({_initOverlay:function(t,e,s,r){var c=e;return c instanceof t||(c=new t(r).setContent(e)),s&&c.setLatLng(s),c}}),se.include({_initOverlay:function(t,e,s,r){var c=s;return c instanceof t?(T(c,r),c._source=this):(c=e&&!r?e:new t(r,this),c.setContent(s)),c}});var uo=ue.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(t){return t=arguments.length?t:this._source._map,!t.hasLayer(this)&&t._popup&&t._popup.options.autoClose&&t.removeLayer(t._popup),t._popup=this,ue.prototype.openOn.call(this,t)},onAdd:function(t){ue.prototype.onAdd.call(this,t),t.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof ke||this._source.on("preclick",Ee))},onRemove:function(t){ue.prototype.onRemove.call(this,t),t.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof ke||this._source.off("preclick",Ee))},getEvents:function(){var t=ue.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this.close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_initLayout:function(){var t="leaflet-popup",e=this._container=ht("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),s=this._wrapper=ht("div",t+"-content-wrapper",e);if(this._contentNode=ht("div",t+"-content",s),Ci(e),qo(this._contentNode),V(e,"contextmenu",Ee),this._tipContainer=ht("div",t+"-tip-container",e),this._tip=ht("div",t+"-tip",this._tipContainer),this.options.closeButton){var r=this._closeButton=ht("a",t+"-close-button",e);r.setAttribute("role","button"),r.setAttribute("aria-label","Close popup"),r.href="#close",r.innerHTML='<span aria-hidden="true">&#215;</span>',V(r,"click",function(c){Wt(c),this.close()},this)}},_updateLayout:function(){var t=this._contentNode,e=t.style;e.width="",e.whiteSpace="nowrap";var s=t.offsetWidth;s=Math.min(s,this.options.maxWidth),s=Math.max(s,this.options.minWidth),e.width=s+1+"px",e.whiteSpace="",e.height="";var r=t.offsetHeight,c=this.options.maxHeight,u="leaflet-popup-scrolled";c&&r>c?(e.height=c+"px",Q(t,u)):Lt(t,u),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),s=this._getAnchor();Tt(this._container,e.add(s))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var t=this._map,e=parseInt(Pi(this._container,"marginBottom"),10)||0,s=this._container.offsetHeight+e,r=this._containerWidth,c=new H(this._containerLeft,-s-this._containerBottom);c._add(Ce(this._container));var u=t.layerPointToContainerPoint(c),v=W(this.options.autoPanPadding),w=W(this.options.autoPanPaddingTopLeft||v),k=W(this.options.autoPanPaddingBottomRight||v),C=t.getSize(),N=0,q=0;u.x+r+k.x>C.x&&(N=u.x+r-C.x+k.x),u.x-N-w.x<0&&(N=u.x-w.x),u.y+s+k.y>C.y&&(q=u.y+s-C.y+k.y),u.y-q-w.y<0&&(q=u.y-w.y),(N||q)&&(this.options.keepInView&&(this._autopanning=!0),t.fire("autopanstart").panBy([N,q]))}},_getAnchor:function(){return W(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),fr=function(t,e){return new uo(t,e)};at.mergeOptions({closePopupOnClick:!0}),at.include({openPopup:function(t,e,s){return this._initOverlay(uo,t,e,s).openOn(this),this},closePopup:function(t){return t=arguments.length?t:this._popup,t&&t.close(),this}}),se.include({bindPopup:function(t,e){return this._popup=this._initOverlay(uo,this._popup,t,e),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(t){return this._popup&&(this instanceof ge||(this._popup._source=this),this._popup._prepareOpen(t||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},getPopup:function(){return this._popup},_openPopup:function(t){if(!(!this._popup||!this._map)){ze(t);var e=t.layer||t.target;if(this._popup._source===e&&!(e instanceof ke)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(t.latlng);return}this._popup._source=e,this.openPopup(t.latlng)}},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){t.originalEvent.keyCode===13&&this._openPopup(t)}});var fo=ue.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(t){ue.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(t){ue.prototype.onRemove.call(this,t),t.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var t=ue.prototype.getEvents.call(this);return this.options.permanent||(t.preclick=this.close),t},_initLayout:function(){var t="leaflet-tooltip",e=t+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=ht("div",e),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+f(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var e,s,r=this._map,c=this._container,u=r.latLngToContainerPoint(r.getCenter()),v=r.layerPointToContainerPoint(t),w=this.options.direction,k=c.offsetWidth,C=c.offsetHeight,N=W(this.options.offset),q=this._getAnchor();w==="top"?(e=k/2,s=C):w==="bottom"?(e=k/2,s=0):w==="center"?(e=k/2,s=C/2):w==="right"?(e=0,s=C/2):w==="left"?(e=k,s=C/2):v.x<u.x?(w="right",e=0,s=C/2):(w="left",e=k+(N.x+q.x)*2,s=C/2),t=t.subtract(W(e,s,!0)).add(N).add(q),Lt(c,"leaflet-tooltip-right"),Lt(c,"leaflet-tooltip-left"),Lt(c,"leaflet-tooltip-top"),Lt(c,"leaflet-tooltip-bottom"),Q(c,"leaflet-tooltip-"+w),Tt(c,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&Yt(this._container,t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(e)},_getAnchor:function(){return W(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),gr=function(t,e){return new fo(t,e)};at.include({openTooltip:function(t,e,s){return this._initOverlay(fo,t,e,s).openOn(this),this},closeTooltip:function(t){return t.close(),this}}),se.include({bindTooltip:function(t,e){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(fo,this._tooltip,t,e),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){if(!(!t&&this._tooltipHandlersAdded)){var e=t?"off":"on",s={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?s.add=this._openTooltip:(s.mouseover=this._openTooltip,s.mouseout=this.closeTooltip,s.click=this._openTooltip,this._map?this._addFocusListeners():s.add=this._addFocusListeners),this._tooltip.options.sticky&&(s.mousemove=this._moveTooltip),this[e](s),this._tooltipHandlersAdded=!t}},openTooltip:function(t){return this._tooltip&&(this instanceof ge||(this._tooltip._source=this),this._tooltip._prepareOpen(t)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(t){var e=typeof t.getElement=="function"&&t.getElement();e&&(V(e,"focus",function(){this._tooltip._source=t,this.openTooltip()},this),V(e,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(t){var e=typeof t.getElement=="function"&&t.getElement();e&&e.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(t){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var e=this;this._map.once("moveend",function(){e._openOnceFlag=!1,e._openTooltip(t)});return}this._tooltip._source=t.layer||t.target,this.openTooltip(this._tooltip.options.sticky?t.latlng:void 0)}},_moveTooltip:function(t){var e=t.latlng,s,r;this._tooltip.options.sticky&&t.originalEvent&&(s=this._map.mouseEventToContainerPoint(t.originalEvent),r=this._map.containerPointToLayerPoint(s),e=this._map.layerPointToLatLng(r)),this._tooltip.setLatLng(e)}});var ps=Ke.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var e=t&&t.tagName==="DIV"?t:document.createElement("div"),s=this.options;if(s.html instanceof Element?(Xi(e),e.appendChild(s.html)):e.innerHTML=s.html!==!1?s.html:"",s.bgPos){var r=W(s.bgPos);e.style.backgroundPosition=-r.x+"px "+-r.y+"px"}return this._setIconStyles(e,"icon"),e},createShadow:function(){return null}});function mr(t){return new ps(t)}Ke.Default=Ai;var Mi=se.extend({options:{tileSize:256,opacity:1,updateWhenIdle:U.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(t){T(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),kt(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(Ze(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(Ge(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var t=this._clampZoom(this._map.getZoom());t!==this._tileZoom&&(this._tileZoom=t,this._updateLevels()),this._update()}return this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=m(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},createTile:function(){return document.createElement("div")},getTileSize:function(){var t=this.options.tileSize;return t instanceof H?t:new H(t,t)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var e=this.getPane().children,s=-t(-1/0,1/0),r=0,c=e.length,u;r<c;r++)u=e[r].style.zIndex,e[r]!==this._container&&u&&(s=t(s,+u));isFinite(s)&&(this.options.zIndex=s+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!U.ielt9){Yt(this._container,this.options.opacity);var t=+new Date,e=!1,s=!1;for(var r in this._tiles){var c=this._tiles[r];if(!(!c.current||!c.loaded)){var u=Math.min(1,(t-c.loaded)/200);Yt(c.el,u),u<1?e=!0:(c.active?s=!0:this._onOpaqueTile(c),c.active=!0)}}s&&!this._noPrune&&this._pruneTiles(),e&&(z(this._fadeFrame),this._fadeFrame=Y(this._updateOpacity,this))}},_onOpaqueTile:x,_initContainer:function(){this._container||(this._container=ht("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,e=this.options.maxZoom;if(t!==void 0){for(var s in this._levels)s=Number(s),this._levels[s].el.children.length||s===t?(this._levels[s].el.style.zIndex=e-Math.abs(t-s),this._onUpdateLevel(s)):(kt(this._levels[s].el),this._removeTilesAtZoom(s),this._onRemoveLevel(s),delete this._levels[s]);var r=this._levels[t],c=this._map;return r||(r=this._levels[t]={},r.el=ht("div","leaflet-tile-container leaflet-zoom-animated",this._container),r.el.style.zIndex=e,r.origin=c.project(c.unproject(c.getPixelOrigin()),t).round(),r.zoom=t,this._setZoomTransform(r,c.getCenter(),c.getZoom()),x(r.el.offsetWidth),this._onCreateLevel(r)),this._level=r,r}},_onUpdateLevel:x,_onRemoveLevel:x,_onCreateLevel:x,_pruneTiles:function(){if(this._map){var t,e,s=this._map.getZoom();if(s>this.options.maxZoom||s<this.options.minZoom){this._removeAllTiles();return}for(t in this._tiles)e=this._tiles[t],e.retain=e.current;for(t in this._tiles)if(e=this._tiles[t],e.current&&!e.active){var r=e.coords;this._retainParent(r.x,r.y,r.z,r.z-5)||this._retainChildren(r.x,r.y,r.z,r.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}},_removeTilesAtZoom:function(t){for(var e in this._tiles)this._tiles[e].coords.z===t&&this._removeTile(e)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)kt(this._levels[t].el),this._onRemoveLevel(Number(t)),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,e,s,r){var c=Math.floor(t/2),u=Math.floor(e/2),v=s-1,w=new H(+c,+u);w.z=+v;var k=this._tileCoordsToKey(w),C=this._tiles[k];return C&&C.active?(C.retain=!0,!0):(C&&C.loaded&&(C.retain=!0),v>r?this._retainParent(c,u,v,r):!1)},_retainChildren:function(t,e,s,r){for(var c=2*t;c<2*t+2;c++)for(var u=2*e;u<2*e+2;u++){var v=new H(c,u);v.z=s+1;var w=this._tileCoordsToKey(v),k=this._tiles[w];if(k&&k.active){k.retain=!0;continue}else k&&k.loaded&&(k.retain=!0);s+1<r&&this._retainChildren(c,u,s+1,r)}},_resetView:function(t){var e=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),e,e)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var e=this.options;return e.minNativeZoom!==void 0&&t<e.minNativeZoom?e.minNativeZoom:e.maxNativeZoom!==void 0&&e.maxNativeZoom<t?e.maxNativeZoom:t},_setView:function(t,e,s,r){var c=Math.round(e);this.options.maxZoom!==void 0&&c>this.options.maxZoom||this.options.minZoom!==void 0&&c<this.options.minZoom?c=void 0:c=this._clampZoom(c);var u=this.options.updateWhenZooming&&c!==this._tileZoom;(!r||u)&&(this._tileZoom=c,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),c!==void 0&&this._update(t),s||this._pruneTiles(),this._noPrune=!!s),this._setZoomTransforms(t,e)},_setZoomTransforms:function(t,e){for(var s in this._levels)this._setZoomTransform(this._levels[s],t,e)},_setZoomTransform:function(t,e,s){var r=this._map.getZoomScale(s,t.zoom),c=t.origin.multiplyBy(r).subtract(this._map._getNewPixelOrigin(e,s)).round();U.any3d?Te(t.el,c,r):Tt(t.el,c)},_resetGrid:function(){var t=this._map,e=t.options.crs,s=this._tileSize=this.getTileSize(),r=this._tileZoom,c=this._map.getPixelWorldBounds(this._tileZoom);c&&(this._globalTileRange=this._pxBoundsToTileRange(c)),this._wrapX=e.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,e.wrapLng[0]],r).x/s.x),Math.ceil(t.project([0,e.wrapLng[1]],r).x/s.y)],this._wrapY=e.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([e.wrapLat[0],0],r).y/s.x),Math.ceil(t.project([e.wrapLat[1],0],r).y/s.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(t){var e=this._map,s=e._animatingZoom?Math.max(e._animateToZoom,e.getZoom()):e.getZoom(),r=e.getZoomScale(s,this._tileZoom),c=e.project(t,this._tileZoom).floor(),u=e.getSize().divideBy(r*2);return new st(c.subtract(u),c.add(u))},_update:function(t){var e=this._map;if(e){var s=this._clampZoom(e.getZoom());if(t===void 0&&(t=e.getCenter()),this._tileZoom!==void 0){var r=this._getTiledPixelBounds(t),c=this._pxBoundsToTileRange(r),u=c.getCenter(),v=[],w=this.options.keepBuffer,k=new st(c.getBottomLeft().subtract([w,-w]),c.getTopRight().add([w,-w]));if(!(isFinite(c.min.x)&&isFinite(c.min.y)&&isFinite(c.max.x)&&isFinite(c.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var C in this._tiles){var N=this._tiles[C].coords;(N.z!==this._tileZoom||!k.contains(new H(N.x,N.y)))&&(this._tiles[C].current=!1)}if(Math.abs(s-this._tileZoom)>1){this._setView(t,s);return}for(var q=c.min.y;q<=c.max.y;q++)for(var X=c.min.x;X<=c.max.x;X++){var jt=new H(X,q);if(jt.z=this._tileZoom,!!this._isValidTile(jt)){var Bt=this._tiles[this._tileCoordsToKey(jt)];Bt?Bt.current=!0:v.push(jt)}}if(v.sort(function(Ut,Qe){return Ut.distanceTo(u)-Qe.distanceTo(u)}),v.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var Xt=document.createDocumentFragment();for(X=0;X<v.length;X++)this._addTile(v[X],Xt);this._level.el.appendChild(Xt)}}}},_isValidTile:function(t){var e=this._map.options.crs;if(!e.infinite){var s=this._globalTileRange;if(!e.wrapLng&&(t.x<s.min.x||t.x>s.max.x)||!e.wrapLat&&(t.y<s.min.y||t.y>s.max.y))return!1}if(!this.options.bounds)return!0;var r=this._tileCoordsToBounds(t);return vt(this.options.bounds).overlaps(r)},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var e=this._map,s=this.getTileSize(),r=t.scaleBy(s),c=r.add(s),u=e.unproject(r,t.z),v=e.unproject(c,t.z);return[u,v]},_tileCoordsToBounds:function(t){var e=this._tileCoordsToNwSe(t),s=new St(e[0],e[1]);return this.options.noWrap||(s=this._map.wrapLatLngBounds(s)),s},_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},_keyToTileCoords:function(t){var e=t.split(":"),s=new H(+e[0],+e[1]);return s.z=+e[2],s},_removeTile:function(t){var e=this._tiles[t];e&&(kt(e.el),delete this._tiles[t],this.fire("tileunload",{tile:e.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){Q(t,"leaflet-tile");var e=this.getTileSize();t.style.width=e.x+"px",t.style.height=e.y+"px",t.onselectstart=x,t.onmousemove=x,U.ielt9&&this.options.opacity<1&&Yt(t,this.options.opacity)},_addTile:function(t,e){var s=this._getTilePos(t),r=this._tileCoordsToKey(t),c=this.createTile(this._wrapCoords(t),d(this._tileReady,this,t));this._initTile(c),this.createTile.length<2&&Y(d(this._tileReady,this,t,null,c)),Tt(c,s),this._tiles[r]={el:c,coords:t,current:!0},e.appendChild(c),this.fire("tileloadstart",{tile:c,coords:t})},_tileReady:function(t,e,s){e&&this.fire("tileerror",{error:e,tile:s,coords:t});var r=this._tileCoordsToKey(t);s=this._tiles[r],s&&(s.loaded=+new Date,this._map._fadeAnimated?(Yt(s.el,0),z(this._fadeFrame),this._fadeFrame=Y(this._updateOpacity,this)):(s.active=!0,this._pruneTiles()),e||(Q(s.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:s.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),U.ielt9||!this._map._fadeAnimated?Y(this._pruneTiles,this):setTimeout(d(this._pruneTiles,this),250)))},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var e=new H(this._wrapX?y(t.x,this._wrapX):t.x,this._wrapY?y(t.y,this._wrapY):t.y);return e.z=t.z,e},_pxBoundsToTileRange:function(t){var e=this.getTileSize();return new st(t.min.unscaleBy(e).floor(),t.max.unscaleBy(e).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}});function vr(t){return new Mi(t)}var Ye=Mi.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(t,e){this._url=t,e=T(this,e),e.detectRetina&&U.retina&&e.maxZoom>0?(e.tileSize=Math.floor(e.tileSize/2),e.zoomReverse?(e.zoomOffset--,e.minZoom=Math.min(e.maxZoom,e.minZoom+1)):(e.zoomOffset++,e.maxZoom=Math.max(e.minZoom,e.maxZoom-1)),e.minZoom=Math.max(0,e.minZoom)):e.zoomReverse?e.minZoom=Math.min(e.maxZoom,e.minZoom):e.maxZoom=Math.max(e.minZoom,e.maxZoom),typeof e.subdomains=="string"&&(e.subdomains=e.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(t,e){return this._url===t&&e===void 0&&(e=!0),this._url=t,e||this.redraw(),this},createTile:function(t,e){var s=document.createElement("img");return V(s,"load",d(this._tileOnLoad,this,e,s)),V(s,"error",d(this._tileOnError,this,e,s)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(s.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(s.referrerPolicy=this.options.referrerPolicy),s.alt="",s.src=this.getTileUrl(t),s},getTileUrl:function(t){var e={r:U.retina?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var s=this._globalTileRange.max.y-t.y;this.options.tms&&(e.y=s),e["-y"]=s}return Z(this._url,a(e,this.options))},_tileOnLoad:function(t,e){U.ielt9?setTimeout(d(t,this,null,e),0):t(null,e)},_tileOnError:function(t,e,s){var r=this.options.errorTileUrl;r&&e.getAttribute("src")!==r&&(e.src=r),t(s,e)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,e=this.options.maxZoom,s=this.options.zoomReverse,r=this.options.zoomOffset;return s&&(t=e-t),t+r},_getSubdomain:function(t){var e=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[e]},_abortLoading:function(){var t,e;for(t in this._tiles)if(this._tiles[t].coords.z!==this._tileZoom&&(e=this._tiles[t].el,e.onload=x,e.onerror=x,!e.complete)){e.src=I;var s=this._tiles[t].coords;kt(e),delete this._tiles[t],this.fire("tileabort",{tile:e,coords:s})}},_removeTile:function(t){var e=this._tiles[t];if(e)return e.el.setAttribute("src",I),Mi.prototype._removeTile.call(this,t)},_tileReady:function(t,e,s){if(!(!this._map||s&&s.getAttribute("src")===I))return Mi.prototype._tileReady.call(this,t,e,s)}});function us(t,e){return new Ye(t,e)}var fs=Ye.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(t,e){this._url=t;var s=a({},this.defaultWmsParams);for(var r in e)r in this.options||(s[r]=e[r]);e=T(this,e);var c=e.detectRetina&&U.retina?2:1,u=this.getTileSize();s.width=u.x*c,s.height=u.y*c,this.wmsParams=s},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var e=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[e]=this._crs.code,Ye.prototype.onAdd.call(this,t)},getTileUrl:function(t){var e=this._tileCoordsToNwSe(t),s=this._crs,r=wt(s.project(e[0]),s.project(e[1])),c=r.min,u=r.max,v=(this._wmsVersion>=1.3&&this._crs===as?[c.y,c.x,u.y,u.x]:[c.x,c.y,u.x,u.y]).join(","),w=Ye.prototype.getTileUrl.call(this,t);return w+M(this.wmsParams,w,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+v},setParams:function(t,e){return a(this.wmsParams,t),e||this.redraw(),this}});function xr(t,e){return new fs(t,e)}Ye.WMS=fs,us.wms=xr;var xe=se.extend({options:{padding:.1},initialize:function(t){T(this,t),f(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),Q(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,e){var s=this._map.getZoomScale(e,this._zoom),r=this._map.getSize().multiplyBy(.5+this.options.padding),c=this._map.project(this._center,e),u=r.multiplyBy(-s).add(c).subtract(this._map._getNewPixelOrigin(t,e));U.any3d?Te(this._container,u,s):Tt(this._container,u)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var t in this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){var t=this.options.padding,e=this._map.getSize(),s=this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();this._bounds=new st(s,s.add(e.multiplyBy(1+t*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),gs=xe.extend({options:{tolerance:0},getEvents:function(){var t=xe.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){xe.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");V(t,"mousemove",this._onMouseMove,this),V(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),V(t,"mouseout",this._handleMouseOut,this),t._leaflet_disable_events=!0,this._ctx=t.getContext("2d")},_destroyContainer:function(){z(this._redrawRequest),delete this._ctx,kt(this._container),bt(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var t;this._redrawBounds=null;for(var e in this._layers)t=this._layers[e],t._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){xe.prototype._update.call(this);var t=this._bounds,e=this._container,s=t.getSize(),r=U.retina?2:1;Tt(e,t.min),e.width=r*s.x,e.height=r*s.y,e.style.width=s.x+"px",e.style.height=s.y+"px",U.retina&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire("update")}},_reset:function(){xe.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t),this._layers[f(t)]=t;var e=t._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=e),this._drawLast=e,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var e=t._order,s=e.next,r=e.prev;s?s.prev=r:this._drawLast=r,r?r.next=s:this._drawFirst=s,delete t._order,delete this._layers[f(t)],this._requestRedraw(t)},_updatePath:function(t){this._extendRedrawBounds(t),t._project(),t._update(),this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if(typeof t.options.dashArray=="string"){var e=t.options.dashArray.split(/[, ]+/),s=[],r,c;for(c=0;c<e.length;c++){if(r=Number(e[c]),isNaN(r))return;s.push(r)}t.options._dashArray=s}else t.options._dashArray=t.options.dashArray},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||Y(this._redraw,this))},_extendRedrawBounds:function(t){if(t._pxBounds){var e=(t.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new st,this._redrawBounds.extend(t._pxBounds.min.subtract([e,e])),this._redrawBounds.extend(t._pxBounds.max.add([e,e]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t=this._redrawBounds;if(t){var e=t.getSize();this._ctx.clearRect(t.min.x,t.min.y,e.x,e.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var t,e=this._redrawBounds;if(this._ctx.save(),e){var s=e.getSize();this._ctx.beginPath(),this._ctx.rect(e.min.x,e.min.y,s.x,s.y),this._ctx.clip()}this._drawing=!0;for(var r=this._drawFirst;r;r=r.next)t=r.layer,(!e||t._pxBounds&&t._pxBounds.intersects(e))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,e){if(this._drawing){var s,r,c,u,v=t._parts,w=v.length,k=this._ctx;if(w){for(k.beginPath(),s=0;s<w;s++){for(r=0,c=v[s].length;r<c;r++)u=v[s][r],k[r?"lineTo":"moveTo"](u.x,u.y);e&&k.closePath()}this._fillStroke(k,t)}}},_updateCircle:function(t){if(!(!this._drawing||t._empty())){var e=t._point,s=this._ctx,r=Math.max(Math.round(t._radius),1),c=(Math.max(Math.round(t._radiusY),1)||r)/r;c!==1&&(s.save(),s.scale(1,c)),s.beginPath(),s.arc(e.x,e.y/c,r,0,Math.PI*2,!1),c!==1&&s.restore(),this._fillStroke(s,t)}},_fillStroke:function(t,e){var s=e.options;s.fill&&(t.globalAlpha=s.fillOpacity,t.fillStyle=s.fillColor||s.color,t.fill(s.fillRule||"evenodd")),s.stroke&&s.weight!==0&&(t.setLineDash&&t.setLineDash(e.options&&e.options._dashArray||[]),t.globalAlpha=s.opacity,t.lineWidth=s.weight,t.strokeStyle=s.color,t.lineCap=s.lineCap,t.lineJoin=s.lineJoin,t.stroke())},_onClick:function(t){for(var e=this._map.mouseEventToLayerPoint(t),s,r,c=this._drawFirst;c;c=c.next)s=c.layer,s.options.interactive&&s._containsPoint(e)&&(!(t.type==="click"||t.type==="preclick")||!this._map._draggableMoved(s))&&(r=s);this._fireEvent(r?[r]:!1,t)},_onMouseMove:function(t){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var e=this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t,e)}},_handleMouseOut:function(t){var e=this._hoveredLayer;e&&(Lt(this._container,"leaflet-interactive"),this._fireEvent([e],t,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(t,e){if(!this._mouseHoverThrottled){for(var s,r,c=this._drawFirst;c;c=c.next)s=c.layer,s.options.interactive&&s._containsPoint(e)&&(r=s);r!==this._hoveredLayer&&(this._handleMouseOut(t),r&&(Q(this._container,"leaflet-interactive"),this._fireEvent([r],t,"mouseover"),this._hoveredLayer=r)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,t),this._mouseHoverThrottled=!0,setTimeout(d(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(t,e,s){this._map._fireDOMEvent(e,s||e.type,t)},_bringToFront:function(t){var e=t._order;if(e){var s=e.next,r=e.prev;if(s)s.prev=r;else return;r?r.next=s:s&&(this._drawFirst=s),e.prev=this._drawLast,this._drawLast.next=e,e.next=null,this._drawLast=e,this._requestRedraw(t)}},_bringToBack:function(t){var e=t._order;if(e){var s=e.next,r=e.prev;if(r)r.next=s;else return;s?s.prev=r:r&&(this._drawLast=r),e.prev=null,e.next=this._drawFirst,this._drawFirst.prev=e,this._drawFirst=e,this._requestRedraw(t)}}});function ms(t){return U.canvas?new gs(t):null}var Di=(function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch{}return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}})(),br={_initContainer:function(){this._container=ht("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(xe.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var e=t._container=Di("shape");Q(e,"leaflet-vml-shape "+(this.options.className||"")),e.coordsize="1 1",t._path=Di("path"),e.appendChild(t._path),this._updateStyle(t),this._layers[f(t)]=t},_addPath:function(t){var e=t._container;this._container.appendChild(e),t.options.interactive&&t.addInteractiveTarget(e)},_removePath:function(t){var e=t._container;kt(e),t.removeInteractiveTarget(e),delete this._layers[f(t)]},_updateStyle:function(t){var e=t._stroke,s=t._fill,r=t.options,c=t._container;c.stroked=!!r.stroke,c.filled=!!r.fill,r.stroke?(e||(e=t._stroke=Di("stroke")),c.appendChild(e),e.weight=r.weight+"px",e.color=r.color,e.opacity=r.opacity,r.dashArray?e.dashStyle=j(r.dashArray)?r.dashArray.join(" "):r.dashArray.replace(/( *, *)/g," "):e.dashStyle="",e.endcap=r.lineCap.replace("butt","flat"),e.joinstyle=r.lineJoin):e&&(c.removeChild(e),t._stroke=null),r.fill?(s||(s=t._fill=Di("fill")),c.appendChild(s),s.color=r.fillColor||r.color,s.opacity=r.fillOpacity):s&&(c.removeChild(s),t._fill=null)},_updateCircle:function(t){var e=t._point.round(),s=Math.round(t._radius),r=Math.round(t._radiusY||s);this._setPath(t,t._empty()?"M0 0":"AL "+e.x+","+e.y+" "+s+","+r+" 0,"+65535*360)},_setPath:function(t,e){t._path.v=e},_bringToFront:function(t){Ze(t._container)},_bringToBack:function(t){Ge(t._container)}},go=U.vml?Di:Se,Ni=xe.extend({_initContainer:function(){this._container=go("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=go("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){kt(this._container),bt(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){xe.prototype._update.call(this);var t=this._bounds,e=t.getSize(),s=this._container;(!this._svgSize||!this._svgSize.equals(e))&&(this._svgSize=e,s.setAttribute("width",e.x),s.setAttribute("height",e.y)),Tt(s,t.min),s.setAttribute("viewBox",[t.min.x,t.min.y,e.x,e.y].join(" ")),this.fire("update")}},_initPath:function(t){var e=t._path=go("path");t.options.className&&Q(e,t.options.className),t.options.interactive&&Q(e,"leaflet-interactive"),this._updateStyle(t),this._layers[f(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){kt(t._path),t.removeInteractiveTarget(t._path),delete this._layers[f(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var e=t._path,s=t.options;e&&(s.stroke?(e.setAttribute("stroke",s.color),e.setAttribute("stroke-opacity",s.opacity),e.setAttribute("stroke-width",s.weight),e.setAttribute("stroke-linecap",s.lineCap),e.setAttribute("stroke-linejoin",s.lineJoin),s.dashArray?e.setAttribute("stroke-dasharray",s.dashArray):e.removeAttribute("stroke-dasharray"),s.dashOffset?e.setAttribute("stroke-dashoffset",s.dashOffset):e.removeAttribute("stroke-dashoffset")):e.setAttribute("stroke","none"),s.fill?(e.setAttribute("fill",s.fillColor||s.color),e.setAttribute("fill-opacity",s.fillOpacity),e.setAttribute("fill-rule",s.fillRule||"evenodd")):e.setAttribute("fill","none"))},_updatePoly:function(t,e){this._setPath(t,ye(t._parts,e))},_updateCircle:function(t){var e=t._point,s=Math.max(Math.round(t._radius),1),r=Math.max(Math.round(t._radiusY),1)||s,c="a"+s+","+r+" 0 1,0 ",u=t._empty()?"M0 0":"M"+(e.x-s)+","+e.y+c+s*2+",0 "+c+-s*2+",0 ";this._setPath(t,u)},_setPath:function(t,e){t._path.setAttribute("d",e)},_bringToFront:function(t){Ze(t._path)},_bringToBack:function(t){Ge(t._path)}});U.vml&&Ni.include(br);function vs(t){return U.svg||U.vml?new Ni(t):null}at.include({getRenderer:function(t){var e=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer;return e||(e=this._renderer=this._createRenderer()),this.hasLayer(e)||this.addLayer(e),e},_getPaneRenderer:function(t){if(t==="overlayPane"||t===void 0)return!1;var e=this._paneRenderers[t];return e===void 0&&(e=this._createRenderer({pane:t}),this._paneRenderers[t]=e),e},_createRenderer:function(t){return this.options.preferCanvas&&ms(t)||vs(t)}});var xs=Ve.extend({initialize:function(t,e){Ve.prototype.initialize.call(this,this._boundsToLatLngs(t),e)},setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return t=vt(t),[t.getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});function yr(t,e){return new xs(t,e)}Ni.create=go,Ni.pointsToPath=ye,ve.geometryToLayer=ro,ve.coordsToLatLng=on,ve.coordsToLatLngs=lo,ve.latLngToCoords=nn,ve.latLngsToCoords=co,ve.getFeature=Je,ve.asFeature=ho,at.mergeOptions({boxZoom:!0});var bs=pe.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){V(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){bt(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){kt(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||t.which!==1&&t.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Li(),Oo(),this._startPoint=this._map.mouseEventToContainerPoint(t),V(document,{contextmenu:ze,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=ht("div","leaflet-zoom-box",this._container),Q(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var e=new st(this._point,this._startPoint),s=e.getSize();Tt(this._box,e.min),this._box.style.width=s.x+"px",this._box.style.height=s.y+"px"},_finish:function(){this._moved&&(kt(this._box),Lt(this._container,"leaflet-crosshair")),Si(),Ro(),bt(document,{contextmenu:ze,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){if(!(t.which!==1&&t.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(d(this._resetState,this),0);var e=new St(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(e).fire("boxzoomend",{boxZoomBounds:e})}},_onKeyDown:function(t){t.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});at.addInitHook("addHandler","boxZoom",bs),at.mergeOptions({doubleClickZoom:!0});var ys=pe.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var e=this._map,s=e.getZoom(),r=e.options.zoomDelta,c=t.originalEvent.shiftKey?s-r:s+r;e.options.doubleClickZoom==="center"?e.setZoom(c):e.setZoomAround(t.containerPoint,c)}});at.addInitHook("addHandler","doubleClickZoom",ys),at.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var ws=pe.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new _e(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}Q(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){Lt(this._map._container,"leaflet-grab"),Lt(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t=this._map;if(t._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var e=vt(this._map.options.maxBounds);this._offsetLimit=wt(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){if(this._map.options.inertia){var e=this._lastTime=+new Date,s=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(s),this._times.push(e),this._prunePositions(e)}this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){for(;this._positions.length>1&&t-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),e=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=e.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,e){return t-(t-e)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var t=this._draggable._newPos.subtract(this._draggable._startPos),e=this._offsetLimit;t.x<e.min.x&&(t.x=this._viscousLimit(t.x,e.min.x)),t.y<e.min.y&&(t.y=this._viscousLimit(t.y,e.min.y)),t.x>e.max.x&&(t.x=this._viscousLimit(t.x,e.max.x)),t.y>e.max.y&&(t.y=this._viscousLimit(t.y,e.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},_onPreDragWrap:function(){var t=this._worldWidth,e=Math.round(t/2),s=this._initialWorldOffset,r=this._draggable._newPos.x,c=(r-e+s)%t+e-s,u=(r+e+s)%t-e-s,v=Math.abs(c+s)<Math.abs(u+s)?c:u;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=v},_onDragEnd:function(t){var e=this._map,s=e.options,r=!s.inertia||t.noInertia||this._times.length<2;if(e.fire("dragend",t),r)e.fire("moveend");else{this._prunePositions(+new Date);var c=this._lastPos.subtract(this._positions[0]),u=(this._lastTime-this._times[0])/1e3,v=s.easeLinearity,w=c.multiplyBy(v/u),k=w.distanceTo([0,0]),C=Math.min(s.inertiaMaxSpeed,k),N=w.multiplyBy(C/k),q=C/(s.inertiaDeceleration*v),X=N.multiplyBy(-q/2).round();!X.x&&!X.y?e.fire("moveend"):(X=e._limitOffset(X,e.options.maxBounds),Y(function(){e.panBy(X,{duration:q,easeLinearity:v,noMoveStart:!0,animate:!0})}))}}});at.addInitHook("addHandler","dragging",ws),at.mergeOptions({keyboard:!0,keyboardPanDelta:80});var _s=pe.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),V(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),bt(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var t=document.body,e=document.documentElement,s=t.scrollTop||e.scrollTop,r=t.scrollLeft||e.scrollLeft;this._map._container.focus(),window.scrollTo(r,s)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){var e=this._panKeys={},s=this.keyCodes,r,c;for(r=0,c=s.left.length;r<c;r++)e[s.left[r]]=[-1*t,0];for(r=0,c=s.right.length;r<c;r++)e[s.right[r]]=[t,0];for(r=0,c=s.down.length;r<c;r++)e[s.down[r]]=[0,t];for(r=0,c=s.up.length;r<c;r++)e[s.up[r]]=[0,-1*t]},_setZoomDelta:function(t){var e=this._zoomKeys={},s=this.keyCodes,r,c;for(r=0,c=s.zoomIn.length;r<c;r++)e[s.zoomIn[r]]=t;for(r=0,c=s.zoomOut.length;r<c;r++)e[s.zoomOut[r]]=-t},_addHooks:function(){V(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){bt(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var e=t.keyCode,s=this._map,r;if(e in this._panKeys){if(!s._panAnim||!s._panAnim._inProgress)if(r=this._panKeys[e],t.shiftKey&&(r=W(r).multiplyBy(3)),s.options.maxBounds&&(r=s._limitOffset(W(r),s.options.maxBounds)),s.options.worldCopyJump){var c=s.wrapLatLng(s.unproject(s.project(s.getCenter()).add(r)));s.panTo(c)}else s.panBy(r)}else if(e in this._zoomKeys)s.setZoom(s.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[e]);else if(e===27&&s._popup&&s._popup.options.closeOnEscapeKey)s.closePopup();else return;ze(t)}}});at.addInitHook("addHandler","keyboard",_s),at.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var ks=pe.extend({addHooks:function(){V(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){bt(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var e=qn(t),s=this._map.options.wheelDebounceTime;this._delta+=e,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var r=Math.max(s-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(d(this._performZoom,this),r),ze(t)},_performZoom:function(){var t=this._map,e=t.getZoom(),s=this._map.options.zoomSnap||0;t._stop();var r=this._delta/(this._map.options.wheelPxPerZoomLevel*4),c=4*Math.log(2/(1+Math.exp(-Math.abs(r))))/Math.LN2,u=s?Math.ceil(c/s)*s:c,v=t._limitZoom(e+(this._delta>0?u:-u))-e;this._delta=0,this._startTime=null,v&&(t.options.scrollWheelZoom==="center"?t.setZoom(e+v):t.setZoomAround(this._lastMousePos,e+v))}});at.addInitHook("addHandler","scrollWheelZoom",ks);var wr=600;at.mergeOptions({tapHold:U.touchNative&&U.safari&&U.mobile,tapTolerance:15});var Fs=pe.extend({addHooks:function(){V(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){bt(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(clearTimeout(this._holdTimeout),t.touches.length===1){var e=t.touches[0];this._startPos=this._newPos=new H(e.clientX,e.clientY),this._holdTimeout=setTimeout(d(function(){this._cancel(),this._isTapValid()&&(V(document,"touchend",Wt),V(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",e))},this),wr),V(document,"touchend touchcancel contextmenu",this._cancel,this),V(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function t(){bt(document,"touchend",Wt),bt(document,"touchend touchcancel",t)},_cancel:function(){clearTimeout(this._holdTimeout),bt(document,"touchend touchcancel contextmenu",this._cancel,this),bt(document,"touchmove",this._onMove,this)},_onMove:function(t){var e=t.touches[0];this._newPos=new H(e.clientX,e.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(t,e){var s=new MouseEvent(t,{bubbles:!0,cancelable:!0,view:window,screenX:e.screenX,screenY:e.screenY,clientX:e.clientX,clientY:e.clientY});s._simulated=!0,e.target.dispatchEvent(s)}});at.addInitHook("addHandler","tapHold",Fs),at.mergeOptions({touchZoom:U.touch,bounceAtZoomLimits:!0});var $s=pe.extend({addHooks:function(){Q(this._map._container,"leaflet-touch-zoom"),V(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){Lt(this._map._container,"leaflet-touch-zoom"),bt(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var e=this._map;if(!(!t.touches||t.touches.length!==2||e._animatingZoom||this._zooming)){var s=e.mouseEventToContainerPoint(t.touches[0]),r=e.mouseEventToContainerPoint(t.touches[1]);this._centerPoint=e.getSize()._divideBy(2),this._startLatLng=e.containerPointToLatLng(this._centerPoint),e.options.touchZoom!=="center"&&(this._pinchStartLatLng=e.containerPointToLatLng(s.add(r)._divideBy(2))),this._startDist=s.distanceTo(r),this._startZoom=e.getZoom(),this._moved=!1,this._zooming=!0,e._stop(),V(document,"touchmove",this._onTouchMove,this),V(document,"touchend touchcancel",this._onTouchEnd,this),Wt(t)}},_onTouchMove:function(t){if(!(!t.touches||t.touches.length!==2||!this._zooming)){var e=this._map,s=e.mouseEventToContainerPoint(t.touches[0]),r=e.mouseEventToContainerPoint(t.touches[1]),c=s.distanceTo(r)/this._startDist;if(this._zoom=e.getScaleZoom(c,this._startZoom),!e.options.bounceAtZoomLimits&&(this._zoom<e.getMinZoom()&&c<1||this._zoom>e.getMaxZoom()&&c>1)&&(this._zoom=e._limitZoom(this._zoom)),e.options.touchZoom==="center"){if(this._center=this._startLatLng,c===1)return}else{var u=s._add(r)._divideBy(2)._subtract(this._centerPoint);if(c===1&&u.x===0&&u.y===0)return;this._center=e.unproject(e.project(this._pinchStartLatLng,this._zoom).subtract(u),this._zoom)}this._moved||(e._moveStart(!0,!1),this._moved=!0),z(this._animRequest);var v=d(e._move,e,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=Y(v,this,!0),Wt(t)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,z(this._animRequest),bt(document,"touchmove",this._onTouchMove,this),bt(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});at.addInitHook("addHandler","touchZoom",$s),at.BoxZoom=bs,at.DoubleClickZoom=ys,at.Drag=ws,at.Keyboard=_s,at.ScrollWheelZoom=ks,at.TapHold=Fs,at.TouchZoom=$s,o.Bounds=st,o.Browser=U,o.CRS=Dt,o.Canvas=gs,o.Circle=en,o.CircleMarker=ao,o.Class=G,o.Control=ne,o.DivIcon=ps,o.DivOverlay=ue,o.DomEvent=Oa,o.DomUtil=Ba,o.Draggable=_e,o.Evented=$t,o.FeatureGroup=ge,o.GeoJSON=ve,o.GridLayer=Mi,o.Handler=pe,o.Icon=Ke,o.ImageOverlay=po,o.LatLng=it,o.LatLngBounds=St,o.Layer=se,o.LayerGroup=qe,o.LineUtil=Qa,o.Map=at,o.Marker=so,o.Mixin=Ga,o.Path=ke,o.Point=H,o.PolyUtil=qa,o.Polygon=Ve,o.Polyline=me,o.Popup=uo,o.PosAnimation=Kn,o.Projection=Xa,o.Rectangle=xs,o.Renderer=xe,o.SVG=Ni,o.SVGOverlay=hs,o.TileLayer=Ye,o.Tooltip=fo,o.Transformation=be,o.Util=lt,o.VideoOverlay=cs,o.bind=d,o.bounds=wt,o.canvas=ms,o.circle=rr,o.circleMarker=ar,o.control=Ei,o.divIcon=mr,o.extend=a,o.featureGroup=or,o.geoJSON=ds,o.geoJson=cr,o.gridLayer=vr,o.icon=nr,o.imageOverlay=hr,o.latLng=J,o.latLngBounds=vt,o.layerGroup=ir,o.map=Ra,o.marker=sr,o.point=W,o.polygon=dr,o.polyline=lr,o.popup=fr,o.rectangle=yr,o.setOptions=T,o.stamp=f,o.svg=vs,o.svgOverlay=ur,o.tileLayer=us,o.tooltip=gr,o.transformation=le,o.version=n,o.videoOverlay=pr;var _r=window.L;o.noConflict=function(){return window.L=_r,this},window.L=o}))})(Ii,Ii.exports)),Ii.exports}var jl=Wl();const ot=Ol(jl);function Fo(h={}){const i="".trim()||"",o=i?`https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png?key=${i}`:"https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png";return ot.tileLayer(o,{maxZoom:19,attribution:'&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',...h})}var So=function(h,i,o,n){var a=arguments.length,l=a<3?i:n===null?n=Object.getOwnPropertyDescriptor(i,o):n,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,i,o,n);else for(var p=h.length-1;p>=0;p--)(d=h[p])&&(l=(a<3?d(l):a>3?d(i,o,l):d(i,o))||l);return a>3&&l&&Object.defineProperty(i,o,l),l};function Hl(h){if(h.length<=2)return h;const i=[...h].sort((l,d)=>l[0]===d[0]?l[1]-d[1]:l[0]-d[0]),o=(l,d,p)=>(d[0]-l[0])*(p[1]-l[1])-(d[1]-l[1])*(p[0]-l[0]),n=[];for(const l of i){for(;n.length>=2&&o(n[n.length-2],n[n.length-1],l)<=0;)n.pop();n.push(l)}const a=[];for(let l=i.length-1;l>=0;l--){const d=i[l];for(;a.length>=2&&o(a[a.length-2],a[a.length-1],d)<=0;)a.pop();a.push(d)}return a.pop(),n.pop(),n.concat(a)}var ai;let Ui=(ai=class extends Ft{constructor(){super(...arguments),this.activeFilter="all",this.isLocating=!1,this.markerMap=new Map}connectedCallback(){super.connectedCallback(),this.unsubscribe=g.subscribe(()=>{this.requestUpdate(),this.updateMapLayers()})}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.unsubscribe)==null||i.call(this),this.destroyMap()}firstUpdated(i){super.firstUpdated(i),setTimeout(()=>{this.initMap()},60)}updated(i){super.updated(i),i.has("activeFilter")&&this.updateMapLayers(),this.map&&setTimeout(()=>{var o;return(o=this.map)==null?void 0:o.invalidateSize()},50)}destroyMap(){this.map&&(this.map.remove(),this.map=void 0,this.markersLayer=void 0,this.trailsLayer=void 0,this.territoryLayer=void 0,this.markerMap.clear())}getGeoEvents(){return(g.events||[]).filter(o=>typeof o.latitude=="number"&&typeof o.longitude=="number")}getFilteredEvents(){const i=this.getGeoEvents();return this.activeFilter==="all"?i:i.filter(o=>o.eventType===this.activeFilter)}initMap(){var l;const i=(l=this.renderRoot)==null?void 0:l.querySelector("#leaflet-map");if(!i||this.map)return;const o=this.getGeoEvents();let n=[37.5665,126.978],a=13;o.length>0&&(n=[o[0].latitude,o[0].longitude],a=15),this.map=ot.map(i,{zoomControl:!1,attributionControl:!1}).setView(n,a),Fo().addTo(this.map),ot.control.zoom({position:"bottomright"}).addTo(this.map),this.territoryLayer=ot.layerGroup().addTo(this.map),this.trailsLayer=ot.layerGroup().addTo(this.map),this.markersLayer=ot.layerGroup().addTo(this.map),this.updateMapLayers(o.length>1),setTimeout(()=>{var d;(d=this.map)==null||d.invalidateSize()},150)}updateMapLayers(i=!1){var f;if(!this.map||!this.markersLayer||!this.trailsLayer||!this.territoryLayer)return;this.markersLayer.clearLayers(),this.trailsLayer.clearLayers(),this.territoryLayer.clearLayers(),this.markerMap.clear();const o=this.getFilteredEvents(),n=this.getGeoEvents(),a=g.currentLocale==="ko",l=((f=g.currentPet)==null?void 0:f.name)||(a?"우리 댕댕이":"Pet");if(n.length>=3){const m=n.map(x=>[x.latitude,x.longitude]),y=Hl(m);if(y.length>=3){const x=ot.polygon(y,{color:"#17140F",weight:2.5,dashArray:"6, 8",fillColor:"#1FC99B",fillOpacity:.16});x.bindPopup(`
          <div style="font-family: 'Bricolage Grotesque', sans-serif; font-size: 13px; font-weight: 800; color: #17140F; text-align: center; padding: 4px 6px;">
            🐾 <strong>${l}</strong>'s ${a?"영역":"Territory"}
            <div style="font-size: 10.5px; color: #6A6152; font-weight: 600; margin-top: 2px;">
              ${n.length} ${a?"개의 기록 지점":"tagged spots"}
            </div>
          </div>
        `),this.territoryLayer.addLayer(x)}}const d=[...n].sort((m,y)=>new Date(m.timestamp).getTime()-new Date(y.timestamp).getTime()).map(m=>[m.latitude,m.longitude]);if(d.length>=2){const m=ot.polyline(d,{color:"#17140F",weight:5.5,opacity:.85,lineCap:"round",lineJoin:"round"}),y=ot.polyline(d,{color:"#FF5A3C",weight:3,dashArray:"5, 6",opacity:1,lineCap:"round"});this.trailsLayer.addLayer(m),this.trailsLayer.addLayer(y)}const p=ot.latLngBounds([]);o.forEach(m=>{var I;const y=m.latitude,x=m.longitude;p.extend([y,x]);const _=m.eventType==="poop"?"💩":m.eventType==="pee"?"💧":m.eventType==="walk"?"🐾":"📍",$=`
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
      `,T=ot.divIcon({className:"dooty-map-marker-icon",html:$,iconSize:[0,0]}),M=ot.marker([y,x],{icon:T}),B=((I=m.metadata)==null?void 0:I.locationName)||(m.notes?_o(m.notes,m.eventType,a):`${y.toFixed(4)}, ${x.toFixed(4)}`),Z=new Date(m.timestamp).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),j=new Date(m.timestamp).toLocaleDateString(),rt=`
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
            ${B}
          </div>
          <div style="font-size: 10.5px; color: #9A9080; font-weight: 600;">
            ${y.toFixed(5)}, ${x.toFixed(5)} · ${m.loggedByName||"Owner"}
          </div>
        </div>
      `;M.bindPopup(rt),M.on("click",()=>{this.selectedEventId=m.id,this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:`${m.eventType.toUpperCase()} · ${B}`,sub:`${y.toFixed(4)}, ${x.toFixed(4)} · ${m.loggedByName}`}}))}),this.markersLayer.addLayer(M),this.markerMap.set(m.id,M)}),i&&p.isValid()&&this.map.fitBounds(p,{padding:[40,40],maxZoom:17})}handleLocateMe(){if(!navigator.geolocation||!this.map){alert("Geolocation is not supported by your browser");return}this.isLocating=!0,navigator.geolocation.getCurrentPosition(i=>{if(this.isLocating=!1,!this.map)return;const o=i.coords.latitude,n=i.coords.longitude,a=i.coords.accuracy;this.userMarker&&this.map.removeLayer(this.userMarker),this.userAccuracyCircle&&this.map.removeLayer(this.userAccuracyCircle),this.userAccuracyCircle=ot.circle([o,n],{radius:Math.min(a,200),color:"#2B5BE8",weight:1.5,fillColor:"#2B5BE8",fillOpacity:.12}).addTo(this.map),this.userMarker=ot.circleMarker([o,n],{radius:8,color:"#FFF",weight:2.5,fillColor:"#2B5BE8",fillOpacity:1}).addTo(this.map),this.map.flyTo([o,n],16,{duration:1.2})},i=>{this.isLocating=!1,console.warn("Geolocation failed:",i)},{enableHighAccuracy:!0,timeout:8e3})}handleFitAll(){if(!this.map)return;const i=this.getGeoEvents();if(i.length===0)return;const o=ot.latLngBounds(i.map(n=>[n.latitude,n.longitude]));this.map.fitBounds(o,{padding:[40,40],maxZoom:17})}handleSpotClick(i){if(this.selectedEventId=i.id,!this.map||i.latitude===void 0||i.longitude===void 0)return;this.map.flyTo([i.latitude,i.longitude],17,{duration:1});const o=this.markerMap.get(i.id);o&&setTimeout(()=>o.openPopup(),400)}render(){const i=g.currentLocale==="ko",o=this.getGeoEvents(),n=this.getFilteredEvents(),a=o.filter(p=>p.eventType==="poop").length,l=o.filter(p=>p.eventType==="pee").length,d=o.filter(p=>p.eventType==="walk").length;return b`
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
              💩 ${i?"응가":"Poop"} (${a})
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
              🐾 ${i?"산책":"Walk"} (${d})
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
          <div class="spots-count-badge">${n.length} ${i?"개":"items"}</div>
        </div>

        <div class="spots-list">
          ${n.length>0?n.slice(0,10).map((p,f)=>{var x,_,F;const m=this.selectedEventId===p.id,y=((x=p.metadata)==null?void 0:x.locationName)||(p.notes?_o(p.notes,p.eventType,i):`${p.eventType.toUpperCase()} at GPS spot`);return b`
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
  `,ai);So([E()],Ui.prototype,"activeFilter",void 0);So([E()],Ui.prototype,"isLocating",void 0);So([E()],Ui.prototype,"selectedEventId",void 0);Ui=So([Mt("dooty-map")],Ui);var Cn=function(h,i,o,n){var a=arguments.length,l=a<3?i:n===null?n=Object.getOwnPropertyDescriptor(i,o):n,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,i,o,n);else for(var p=h.length-1;p>=0;p--)(d=h[p])&&(l=(a<3?d(l):a>3?d(i,o,l):d(i,o))||l);return a>3&&l&&Object.defineProperty(i,o,l),l},ri;let $o=(ri=class extends Ft{constructor(){super(...arguments),this.medDone={0:!0,1:!1,2:!1},this.uncheckState={}}connectedCallback(){super.connectedCallback(),this.unsubscribe=g.subscribe(()=>this.requestUpdate())}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.unsubscribe)==null||i.call(this)}toggleMedChecked(i){this.uncheckState={...this.uncheckState,[i]:!this.uncheckState[i]}}renderWeightChart(i){const o=(g.events||[]).filter(B=>{var Z;return B.eventType==="weight"&&((Z=B.metadata)==null?void 0:Z.weightKg)}).sort((B,Z)=>new Date(B.timestamp).getTime()-new Date(Z.timestamp).getTime());if(o.length===0)return b`
        <div style="padding: 16px 0; text-align: center;">
          <div style="font-size: 28px; margin-bottom: 6px;">⚖️</div>
          <div style="font-size: 14px; font-weight: 800; color: #17140F;">
            ${i?"등록된 체중 기록이 없습니다":"No weigh-ins recorded yet"}
          </div>
          <div style="font-size: 12px; font-weight: 600; color: #6A6152; margin-top: 4px; line-height: 1.4;">
            ${i?"하단 + 버튼을 눌러 첫 몸무게를 기록해보세요.":"Tap the orange + button below to log your pet’s weight."}
          </div>
        </div>
      `;const n=o.map(B=>{var I;const Z=new Date(B.timestamp),j=Z.toLocaleDateString([],{month:"short"}),rt=Z.getFullYear().toString().slice(-2);return{weight:Number(((I=B.metadata)==null?void 0:I.weightKg)||parseFloat(B.notes||"0")||0),dateLabel:`${j} '${rt}`}}),a=n.map(B=>B.weight),l=Math.min(...a),p=Math.max(...a)-l||1,f=320,m=110,y=22,_=m-y-24,F=n.map((B,Z)=>{const j=n.length===1?f/2:16+Z/(n.length-1)*(f-32),rt=n.length===1?y+_/2:y+_-(B.weight-l)/p*_;return{x:j,y:rt,...B}}),$=F.map((B,Z)=>`${Z===0?"M":"L"} ${B.x.toFixed(1)} ${B.y.toFixed(1)}`).join(" "),T=F[F.length-1],M=T.weight-F[0].weight;return b`
      <div class="weight-stat-row">
        <div>
          <span class="weight-current-val">${T.weight.toFixed(1)} kg</span>
          ${F.length>1?b`
                <span style="font-size: 11px; font-weight: 800; color: ${M>=0?"#1FC99B":"#FF5A3C"}; margin-left: 6px;">
                  ${M>=0?"+":""}${M.toFixed(1)} kg
                </span>
              `:null}
        </div>
        <div class="weight-current-date">
          ${i?`최근 측정: ${T.dateLabel}`:`Latest: ${T.dateLabel}`}
        </div>
      </div>

      <div style="height: 110px; width: 100%; position: relative;">
        <svg viewBox="0 0 ${f} ${m}" style="width: 100%; height: 100%; overflow: visible;">
          <!-- Grid lines -->
          <line x1="12" y1="${y+_}" x2="${f-12}" y2="${y+_}" stroke="#E8DFCE" stroke-width="1.5" stroke-dasharray="4,4" />
          <line x1="12" y1="${y}" x2="${f-12}" y2="${y}" stroke="#E8DFCE" stroke-width="1.5" stroke-dasharray="4,4" />

          <!-- Path -->
          ${F.length>1?b`<path d="${$}" fill="none" stroke="#17140F" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round" />`:null}

          <!-- Data Points with Actual Weights -->
          ${F.map((B,Z)=>{const j=Z===F.length-1;return b`
              <circle
                cx="${B.x}"
                cy="${B.y}"
                r="${j?6:4.5}"
                fill="${j?"#FF5A3C":"#FFCE2E"}"
                stroke="#17140F"
                stroke-width="2.5"
              />
              <rect
                x="${B.x-17}"
                y="${B.y-19}"
                width="34"
                height="14"
                rx="4"
                fill="#17140F"
              />
              <text
                x="${B.x}"
                y="${B.y-9}"
                font-size="8.5"
                font-weight="800"
                font-family="sans-serif"
                fill="#FFFFFF"
                text-anchor="middle"
              >
                ${B.weight.toFixed(1)}k
              </text>
            `})}
        </svg>
      </div>

      <div style="display: flex; justify-content: space-between; margin-top: 6px; font-size: 9.5px; font-weight: 800; color: #8A7F68; letter-spacing: 0.5px;">
        ${F.map(B=>b`<span>${B.dateLabel}</span>`)}
      </div>
    `}render(){var I,P,ct;const i=g.currentLocale==="ko",o=g.currentPet,n=(o==null?void 0:o.name)||(i?"반려견":"My Pet");let a="";if(o!=null&&o.birthday){const A=new Date(o.birthday),R=new Date;if(!isNaN(A.getTime())){const mt=(R.getFullYear()-A.getFullYear())*12+(R.getMonth()-A.getMonth());if(mt>=12){const Y=Math.floor(mt/12);a=i?`${Y}살`:`${Y} yr${Y>1?"s":""}`}else mt>0?a=i?`${mt}개월`:`${mt} mo${mt>1?"s":""}`:a=i?"신생":"puppy"}}a||(a=i?"5살":"5 yrs");const l=(g.events||[]).filter(A=>{var R;return A.eventType==="weight"&&(((R=A.metadata)==null?void 0:R.weightKg)||A.notes)}).sort((A,R)=>new Date(R.timestamp).getTime()-new Date(A.timestamp).getTime());let d=14.2;if(l.length>0){const A=l.find(R=>{var Y;return Number(((Y=R.metadata)==null?void 0:Y.weightKg)||parseFloat(R.notes||"0")||0)>0});A&&(d=Number(((I=A.metadata)==null?void 0:I.weightKg)||parseFloat(A.notes||"0")||14.2))}const p=i?`${d.toFixed(1)}kg`:`${d.toFixed(1)} kg`,m=`${(o==null?void 0:o.breed)||(i?"비글 믹스":"Beagle mix")} · ${a} · ${p}`,y=new Date;y.setMonth(y.getMonth()-6);const x=(g.events||[]).filter(A=>A.eventType!=="medicine"?!1:new Date(A.timestamp)>=y).sort((A,R)=>new Date(R.timestamp).getTime()-new Date(A.timestamp).getTime()),_=[],F=new Set;for(const A of x){const R=(((P=A.metadata)==null?void 0:P.medication)||A.notes||"").trim().toLowerCase(),mt=Math.floor(new Date(A.timestamp).getTime()/(600*1e3)),Y=`${R}_${mt}`;F.has(Y)||(F.add(Y),_.push(A))}const $=[{id:"def-med-1",title:"Apoquel",sub:`16 mg with food · ${i?"기록자":"Logged by"} Sam`,dateStr:"24 Aug 2026, 8:05 am"},{id:"def-med-2",title:"Joint chew",sub:`1 chew, evening · ${i?"기록자":"Logged by"} Sam`,dateStr:"24 Aug 2026, 6:15 pm"},{id:"def-med-3",title:"Flea & tick prevention",sub:`Topical treatment · ${i?"기록자":"Logged by"} Sam`,dateStr:"18 Aug 2026, 10:00 am"}],T=_.length>0?_.map(A=>{var G,dt;const R=new Date(A.timestamp),mt=`${R.toLocaleDateString([],{day:"numeric",month:"short",year:"numeric"})}, ${R.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}).toLowerCase()}`,Y=((G=A.metadata)==null?void 0:G.medication)||A.notes||(i?"약/영양제":"Medicine"),z=[];(dt=A.metadata)!=null&&dt.dosage&&z.push(A.metadata.dosage),A.notes&&A.notes.trim().toLowerCase()!==Y.trim().toLowerCase()&&z.push(A.notes.trim()),A.loggedByName&&z.push(`${i?"기록자":"Logged by"} ${A.loggedByName}`);const lt=z.join(" · ");return{id:A.id,title:Y,sub:lt,dateStr:mt}}):$,M=(g.events||[]).filter(A=>A.eventType==="vet").sort((A,R)=>new Date(R.timestamp).getTime()-new Date(A.timestamp).getTime()),B=[{date:"12 Jun 2024",title:"Annual check-up",note:"Weight up 0.4 kg. Teeth good. Apoquel renewed."},{date:"03 Aug 2025",title:"Loose stool consult",note:"Likely new treat brand. Bland diet 5 days."},{date:"19 Aug 2026",title:"Follow-up call",note:"Resolved. Back to normal food."}],Z=M.length>0?M.map(A=>({date:new Date(A.timestamp).toLocaleDateString([],{day:"numeric",month:"short",year:"numeric"}),title:A.notes||(i?"정기 진료":"Vet Consultation"),note:`${i?"기록자":"Logged by"}: ${A.loggedByName}`})):B,j=o==null?void 0:o.avatarUrl,rt=(((ct=g.currentUser)==null?void 0:ct.displayName)||"S").charAt(0).toUpperCase();return b`
      <!-- Top Navigation Bar -->
      <div class="top-bar-row">
        <div class="back-btn" @click=${()=>g.setActiveTab("today")}>
          <span>‹</span>
          <span>${i?"오늘":"Today"}</span>
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
          @click=${()=>g.openPhotoModal({target:"pet",targetId:o==null?void 0:o.id,currentAvatar:j,title:i?`${n} 사진 변경`:`Change ${n}'s Photo`})}
        >
          <div class="dog-pic-avatar">
            ${j?b`<img src="${j}" class="dog-pic-img" alt="${n}" />`:b`<div>${i?`반려견
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
          ${T.map(A=>{const R=!this.uncheckState[A.id];return b`
              <div class="med-row">
                <div
                  class="med-check"
                  style="background: ${R?"#1FC99B":"#FFF"};"
                  @click=${()=>this.toggleMedChecked(A.id)}
                  title="${R?"Marked as completed":"Click to check"}"
                >
                  ${R?"✓":""}
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
      font-family: var(--font-heading-sm);
      font-weight: var(--font-weight-heading-sm);
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
      font-family: var(--font-heading-sm);
      font-weight: var(--font-weight-heading-sm);
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
      font-family: var(--font-heading-sm);
      font-weight: var(--font-weight-heading-sm);
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
  `,ri);Cn([E()],$o.prototype,"medDone",void 0);Cn([E()],$o.prototype,"uncheckState",void 0);$o=Cn([Mt("dooty-dog")],$o);var Ul=function(h,i,o,n){var a=arguments.length,l=a<3?i:n===null?n=Object.getOwnPropertyDescriptor(i,o):n,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,i,o,n);else for(var p=h.length-1;p>=0;p--)(d=h[p])&&(l=(a<3?d(l):a>3?d(i,o,l):d(i,o))||l);return a>3&&l&&Object.defineProperty(i,o,l),l},li;let Js=(li=class extends Ft{constructor(){super(...arguments),this.distNames=["Pellets","Lumpy","Cracked","Textbook","Soft blobs","Mushy","Liquid"],this.distCol=["#E3D8BE","#E3D8BE","#FFE9A8","#1FC99B","#FFCE2E","#FF9A3C","#FF5A3C"]}render(){const i=g.currentLocale==="ko",o=g.events||[],n=o.length,a=new Date(Date.now()-336*60*60*1e3),l=o.filter(_=>_.eventType==="poop"&&new Date(_.timestamp)>=a),d=[0,0,0,0,0,0,0];l.forEach(_=>{const F=(_.notes||"").match(/Type\s*([1-7])/i)||(_.notes||"").match(/([1-7])/);if(F){const $=parseInt(F[1],10);$>=1&&$<=7&&d[$-1]++}else d[3]++});const p=d.reduce((_,F)=>_+F,0),f=d.map(_=>p>0?Math.round(_/p*100):0),m=d[3],y=p>0?Math.round(m/p*100):n>0?100:0,x=o.filter(_=>(_.eventType==="vomit"||(_.notes||"").toLowerCase().includes("loose")||(_.notes||"").toLowerCase().includes("diarrhea"))&&new Date(_.timestamp)>=a);return b`
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
          <div class="score-num">${n>0?y:"-"}</div>
          <div class="score-trend">${n>0?i?"14일 분석":"14-day rolling":i?"기록 대기 중":"No logs yet"}</div>
        </div>
        <div style="font-size: 12.5px; font-weight: 600; color: #6A6152;">
          ${p>0?i?`최근 14일 동안 ${p}건의 배변이 분석되었습니다.`:`${p} potty logs analyzed over the last 14 days.`:i?"배변을 기록하면 이상적인 형태(4단계) 비율이 산출됩니다.":"Log potty events to calculate consistency quality rating."}
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
          ${this.distNames.map((_,F)=>{const $=f[F],T=this.distCol[F];return b`
              <div class="spread-row">
                <div class="spread-num" style="background: ${T};">${F+1}</div>
                <div style="width: 66px; font-size: 11.5px; font-weight: 700; color: #6A6152; flex: none;">
                  ${_}
                </div>
                <div class="spread-track">
                  <div style="height: 100%; background: ${T}; width: ${Math.max($>0?4:0,$)}%;"></div>
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
  `,li);Js=Ul([Mt("dooty-deep")],Js);var Zl=function(h,i,o,n){var a=arguments.length,l=a<3?i:n===null?n=Object.getOwnPropertyDescriptor(i,o):n,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,i,o,n);else for(var p=h.length-1;p>=0;p--)(d=h[p])&&(l=(a<3?d(l):a>3?d(i,o,l):d(i,o))||l);return a>3&&l&&Object.defineProperty(i,o,l),l},di;let Ys=(di=class extends Ft{render(){var F;const i=g.currentLocale==="ko",o=g.events||[],n=o.length;(F=g.currentPet)!=null&&F.id;const a=o.filter($=>$.eventType==="poop"),l=o.filter($=>$.eventType==="walk"),d=Array(24).fill(0);o.forEach($=>{const T=new Date($.timestamp);isNaN(T.getTime())||d[T.getHours()]++});let p=7,f=0;d.forEach(($,T)=>{$>f&&(f=$,p=T)});const m=f>0?`${p>12?p-12:p||12}:00 ${p>=12?"pm":"am"}`:i?"기록 없음":"No data yet",y=new Set;o.forEach($=>{const T=new Date($.timestamp);isNaN(T.getTime())||y.add(`${T.getFullYear()}-${T.getMonth()+1}-${T.getDate()}`)});const x=y.size,_=[{k:i?"총 배출량":"Total output",v:i?`${a.length}회`:`${a.length} poops`,sub:i?`총 ${n}건의 이벤트가 등록되었습니다.`:`${n} total logged events recorded so far.`,bg:"#FFCE2E",fg:"#17140F",label:"#7A5C00",shadow:"#FF5A3C",rot:"-1.2deg"},{k:i?"황금 시간대":"Your golden hour",v:m,sub:i?"가장 많은 활동이 기록된 주요 시간대입니다.":"Most frequent hour of daily activity.",bg:"#FFFBF2",fg:"#17140F",label:"#6A6152",shadow:"#2B5BE8",rot:"0.9deg"},{k:i?"산책 세션":"Walk sessions",v:i?`${l.length}회`:`${l.length} walks`,sub:i?"반려견과 함께한 야외 산책 기록입니다.":"Outdoor exercise recorded with your pet.",bg:"#1FC99B",fg:"#17140F",label:"#0A5A45",shadow:"#FFCE2E",rot:"-0.7deg"},{k:i?"돌봄 기록 일수":"Days active",v:i?`${x}일`:`${x} days`,sub:i?"반려견의 건강한 일상을 함께 기록한 날들입니다.":"Days dedicated to tracking your pet’s wellbeing.",bg:"#FF5A3C",fg:"#FFF",label:"#FFE3DC",shadow:"#FFCE2E",rot:"1.1deg"}];return b`
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
  `,di);Ys=Zl([Mt("dooty-wrapped")],Ys);var Gl=function(h,i,o,n){var a=arguments.length,l=a<3?i:n===null?n=Object.getOwnPropertyDescriptor(i,o):n,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,i,o,n);else for(var p=h.length-1;p>=0;p--)(d=h[p])&&(l=(a<3?d(l):a>3?d(i,o,l):d(i,o))||l);return a>3&&l&&Object.defineProperty(i,o,l),l},ci;let Qs=(ci=class extends Ft{connectedCallback(){super.connectedCallback(),this.unsubscribe=g.subscribe(()=>this.requestUpdate())}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.unsubscribe)==null||i.call(this)}setLanguage(i){g.setLocale(i),i==="ko"?document.body.classList.add("lang-ko"):document.body.classList.remove("lang-ko")}handleExportCsv(){g.t.settings,g.exportEventsCsv(),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:g.currentLocale==="ko"?"CSV 내보내기 완료":"CSV Export Complete",sub:g.currentLocale==="ko"?"모든 기록이 다운로드되었습니다.":"All event logs saved to your device."}}))}handleExportJson(){g.exportFullBackupJson(),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:g.currentLocale==="ko"?"전체 백업 다운로드 완료":"Full Backup Downloaded",sub:g.currentLocale==="ko"?"반려동물, 기록, 산책 및 투약 일정이 JSON으로 저장되었습니다.":"Complete JSON backup saved to your device."}}))}handleSignOut(){g.signOut(),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:g.currentLocale==="ko"?"로그아웃되었습니다":"Signed out",sub:g.currentLocale==="ko"?"다음에 또 만나요!":"See you on the next walk!"}}))}render(){var m,y;const i=g.currentLocale==="ko",o=g.t.settings,n=g.currentUser,a=g.currentHousehold,l=(a==null?void 0:a.members)||[{id:"1",displayName:(n==null?void 0:n.displayName)||"Sam (you)",role:"owner",avatarUrl:g.userAvatar},{id:"2",displayName:"Priya",role:"member",avatarUrl:""},{id:"3",displayName:"Dan the walker",role:"member",avatarUrl:""}],d=((m=g.pets)==null?void 0:m.length)>0?g.pets:g.currentPet?[g.currentPet]:[{id:"p1",name:"Nacho",breed:"Beagle mix · 5 yrs · 14.2 kg",species:"dog",householdId:(a==null?void 0:a.id)||"1",avatarUrl:"",birthday:"",createdAt:new Date().toISOString()}],p=((y=g.events)==null?void 0:y.length)||1204,f=((n==null?void 0:n.displayName)||"Sam").split(" ").map(x=>x[0]).join("").toUpperCase().slice(0,2);return b`
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
            ${l.map((x,_)=>{const F=["#FFCE2E","#1FC99B","#BFD0FF","#FF9A3C"],$=(x.displayName||"Member")[0].toUpperCase(),T=Math.round(_===0?p*.75:p*.2);return b`
                <div class="list-row">
                  <div
                    class="member-avatar"
                    style="background: ${F[_%F.length]};"
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
                    ${T} ${o.logsUnit}
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
                    ${(()=>{var B;if(x.breed&&x.breed.includes("·"))return x.breed;let _="";if(x.birthday){const Z=new Date(x.birthday),j=new Date;if(!isNaN(Z.getTime())){const rt=(j.getFullYear()-Z.getFullYear())*12+(j.getMonth()-Z.getMonth());if(rt>=12){const I=Math.floor(rt/12);_=i?`${I}살`:`${I} yr${I>1?"s":""}`}else rt>0&&(_=i?`${rt}개월`:`${rt} mo${rt>1?"s":""}`)}}_||(_=i?"5살":"5 yrs");const F=x.breed||(i?"비글 믹스":"Beagle mix"),$=(g.events||[]).filter(Z=>{var j;return Z.eventType==="weight"&&(((j=Z.metadata)==null?void 0:j.weightKg)||Z.notes)}).sort((Z,j)=>new Date(j.timestamp).getTime()-new Date(Z.timestamp).getTime()),T=$.length>0?Number(((B=$[0].metadata)==null?void 0:B.weightKg)||parseFloat($[0].notes||"0")||14.2):14.2,M=i?`${T.toFixed(1)}kg`:`${T.toFixed(1)} kg`;return`${F} · ${_} · ${M}`})()}
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
                  ${i?"전체 데이터 백업 (JSON)":"Full Backup (JSON)"}
                </div>
                <div style="font-size: 11.5px; font-weight: 600; color: #6A6152; margin-top: 1px; line-height: 1.35;">
                  ${i?"반려동물, 기록, 산책 GPS 및 투약 일정 전체를 백업합니다.":"Download complete backup of pets, logs, walks & schedules."}
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
  `,ci);Qs=Gl([Mt("dooty-settings")],Qs);var To=function(h,i,o,n){var a=arguments.length,l=a<3?i:n===null?n=Object.getOwnPropertyDescriptor(i,o):n,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,i,o,n);else for(var p=h.length-1;p>=0;p--)(d=h[p])&&(l=(a<3?d(l):a>3?d(i,o,l):d(i,o))||l);return a>3&&l&&Object.defineProperty(i,o,l),l},hi;let Zi=(hi=class extends Ft{constructor(){super(...arguments),this.selectedRole="Full member",this.currentCode="K7M4Q9",this.isGenerating=!1}connectedCallback(){super.connectedCallback(),this.unsubscribe=g.subscribe(()=>this.requestUpdate()),this.generateNewCode()}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.unsubscribe)==null||i.call(this)}async generateNewCode(){this.isGenerating=!0;try{const i=await g.createInvite(this.selectedRole);i&&(this.currentCode=i)}finally{this.isGenerating=!1}}handleCopy(){const i=g.t.invite;navigator.clipboard&&navigator.clipboard.writeText(this.currentCode),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:i.codeCopied,sub:i.codeCopiedSub(this.currentCode)}}))}handleShare(){var o;g.t.invite;const i=`Join my household "${((o=g.currentHousehold)==null?void 0:o.name)||"Dooty"}" with invite code: ${this.currentCode}`;navigator.share?navigator.share({title:"Dooty Invite",text:i,url:window.location.origin}).catch(()=>this.handleCopy()):this.handleCopy()}async handleRevoke(i){const o=g.t.invite;await g.revokeInvite(i),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:o.inviteRevoked,sub:o.inviteRevokedSub(i)}}))}render(){var l;const i=g.t.invite,o=((l=g.currentHousehold)==null?void 0:l.name)||"Household",n=(this.currentCode+"      ").slice(0,6).split(""),a=g.pendingInvites||[];return b`
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
            ${n.map(d=>b`
              <div class="code-char-box">${d.trim()}</div>
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
  `,hi);To([E()],Zi.prototype,"selectedRole",void 0);To([E()],Zi.prototype,"currentCode",void 0);To([E()],Zi.prototype,"isGenerating",void 0);Zi=To([Mt("dooty-invite")],Zi);var Re=function(h,i,o,n){var a=arguments.length,l=a<3?i:n===null?n=Object.getOwnPropertyDescriptor(i,o):n,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,i,o,n);else for(var p=h.length-1;p>=0;p--)(d=h[p])&&(l=(a<3?d(l):a>3?d(i,o,l):d(i,o))||l);return a>3&&l&&Object.defineProperty(i,o,l),l},pi;let Pe=(pi=class extends Ft{constructor(){super(...arguments),this.isImporting=!1,this.importProgress="",this.errorMessage="",this.successMessage="",this.isDragOver=!1}async processFile(i){this.errorMessage="",this.successMessage="";try{const o=await i.text(),n=hl(o,i.name);this.parsedResult=n}catch(o){this.errorMessage=o.message||"Failed to read and parse import file.",this.parsedResult=void 0}}async handleFileSelect(i){var a;const n=(a=i.target.files)==null?void 0:a[0];n&&await this.processFile(n)}handleDragOver(i){i.preventDefault(),this.isDragOver=!0}handleDragLeave(i){i.preventDefault(),this.isDragOver=!1}async handleDrop(i){var n,a;i.preventDefault(),this.isDragOver=!1;const o=(a=(n=i.dataTransfer)==null?void 0:n.files)==null?void 0:a[0];o&&await this.processFile(o)}async handleImport(){var i,o;if(!(!this.parsedResult||this.isImporting)){this.isImporting=!0,this.errorMessage="";try{const n=(i=g.currentHousehold)==null?void 0:i.id,a=(o=g.currentPet)==null?void 0:o.id;if(!n||!a)throw new Error("Please select or configure a household and pet before importing.");this.importProgress=`Converting ${this.parsedResult.summary.totalCount} events...`;const l=pl(this.parsedResult,n,a);this.importProgress=`Saving ${l.length} events to server...`;const d=await ft.importEvents(l);this.successMessage=g.t.importer.success(d.importedCount),await g.refreshEvents(),this.parsedResult=void 0}catch(n){this.errorMessage=n.message||"Import failed on server."}finally{this.isImporting=!1,this.importProgress=""}}}render(){var a;const i=g.t.importer,o=g.currentLocale==="ko",n=(a=this.parsedResult)==null?void 0:a.summary;return b`
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
        <div style="font-family: var(--font-heading-sm); font-weight: var(--font-weight-heading-sm); font-size: 16px;">
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

      ${n?b`
            <div class="preview-card">
              <div class="preview-header">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span>📋 ${i.dryRunTitle}</span>
                  <span class="format-badge"
                    >${n.sourceType==="csv"?"📄 CSV Report":"📦 DogNotes JSON"}</span
                  >
                </div>
                <span style="font-size: 13px; font-weight: 800; color: var(--color-coral);"
                  >${n.totalCount.toLocaleString()} items</span
                >
              </div>

              <div style="font-size: 13px; font-weight: 700;">
                🐾 ${i.targetPet}: <span style="font-weight: 900;">${n.petName}</span>
              </div>

              <div style="font-size: 12px; color: var(--color-muted); font-weight: 600;">
                📅 ${i.dateSpan}: ${n.earliestDate.split("T")[0]} →
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
                ${this.isImporting?this.importProgress||i.importing:`🚀 ${i.confirmImport} (${n.totalCount.toLocaleString()})`}
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
      font-family: var(--font-heading-sm);
      font-weight: var(--font-weight-heading-sm);
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
      font-family: var(--font-heading-sm);
      font-weight: var(--font-weight-heading-sm);
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
  `,pi);Re([E()],Pe.prototype,"parsedResult",void 0);Re([E()],Pe.prototype,"isImporting",void 0);Re([E()],Pe.prototype,"importProgress",void 0);Re([E()],Pe.prototype,"errorMessage",void 0);Re([E()],Pe.prototype,"successMessage",void 0);Re([E()],Pe.prototype,"isDragOver",void 0);Pe=Re([Mt("dooty-importer")],Pe);var re=function(h,i,o,n){var a=arguments.length,l=a<3?i:n===null?n=Object.getOwnPropertyDescriptor(i,o):n,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,i,o,n);else for(var p=h.length-1;p>=0;p--)(d=h[p])&&(l=(a<3?d(l):a>3?d(i,o,l):d(i,o))||l);return a>3&&l&&Object.defineProperty(i,o,l),l},ui;let te=(ui=class extends Ft{constructor(){super(...arguments),this.open=!1,this.initialLocationName="",this.currentLocationName="",this.isLocating=!1,this.isGeocoding=!1,this.hasMovedMarker=!1,this.locationPresets=["Home / Indoor","Backyard","Park","Walk Route","Vet Clinic","Daycare"],this.locationPresetsKo=["우리집 / 실내","마당 / 배변패드","공원 / 산책로","단지 내 산책","동물병원","데이케어"]}updated(i){i.has("open")&&(this.open?(this.currentLat=this.initialLat,this.currentLng=this.initialLng,this.currentLocationName=this.initialLocationName||"",this.hasMovedMarker=!1,setTimeout(()=>{this.initOrUpdateMap()},80)):this.destroyMap())}disconnectedCallback(){super.disconnectedCallback(),this.destroyMap()}destroyMap(){this.map&&(this.map.remove(),this.map=void 0,this.marker=void 0)}initOrUpdateMap(){var p;const i=(p=this.renderRoot)==null?void 0:p.querySelector("#leaflet-map");if(!i)return;if(this.map){this.map.invalidateSize();return}const o=this.currentLat??37.5665,n=this.currentLng??126.978,a=this.currentLat&&this.currentLng?16:14;this.map=ot.map(i,{zoomControl:!1,attributionControl:!1}).setView([o,n],a),Fo({updateWhenIdle:!0,updateWhenZooming:!1,keepBuffer:3}).addTo(this.map),ot.control.zoom({position:"bottomright"}).addTo(this.map);const d=ot.divIcon({className:"dooty-custom-leaflet-pin",html:`
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
    `,iconSize:[0,0]});this.currentLat&&this.currentLng?this.marker=ot.marker([this.currentLat,this.currentLng],{icon:d,draggable:!0}).addTo(this.map):(this.marker=ot.marker([o,n],{icon:d,draggable:!0}).addTo(this.map),this.fetchUserGPS(!1)),this.marker.on("dragend",f=>{const m=f.target.getLatLng();this.onPositionSelected(m.lat,m.lng)}),this.map.on("click",f=>{const{lat:m,lng:y}=f.latlng;this.marker&&this.marker.setLatLng([m,y]),this.onPositionSelected(m,y)}),setTimeout(()=>{var f;(f=this.map)==null||f.invalidateSize()},150)}onPositionSelected(i,o){this.currentLat=i,this.currentLng=o,this.hasMovedMarker=!0,this.requestUpdate(),this.geocodeTimeout&&window.clearTimeout(this.geocodeTimeout),this.geocodeTimeout=window.setTimeout(()=>{this.tryReverseGeocode(i,o)},400)}fetchUserGPS(i=!0){typeof navigator>"u"||!navigator.geolocation||(this.isLocating=!0,this.requestUpdate(),navigator.geolocation.getCurrentPosition(o=>{const n=o.coords.latitude,a=o.coords.longitude;this.isLocating=!1,this.currentLat=n,this.currentLng=a,this.map&&(this.map.flyTo([n,a],17,{animate:!0,duration:1}),this.marker&&this.marker.setLatLng([n,a])),(!this.currentLocationName||!this.hasMovedMarker)&&this.tryReverseGeocode(n,a),this.requestUpdate()},o=>{console.warn("Geolocation error in picker:",o),this.isLocating=!1,this.requestUpdate()},{enableHighAccuracy:!0,timeout:8e3}))}async tryReverseGeocode(i,o){var n,a,l,d,p,f,m,y;this.isGeocoding=!0,this.requestUpdate();try{const x=await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${i}&lon=${o}&zoom=18&addressdetails=1`,{headers:{Accept:"application/json"}});if(x.ok){const _=await x.json(),F=((n=_.address)==null?void 0:n.road)||((a=_.address)==null?void 0:a.pedestrian)||((l=_.address)==null?void 0:l.suburb)||((d=_.address)==null?void 0:d.neighbourhood),$=((p=_.address)==null?void 0:p.city)||((f=_.address)==null?void 0:f.town)||((m=_.address)==null?void 0:m.village)||((y=_.address)==null?void 0:y.county);if(F&&$)this.currentLocationName=`${F}, ${$}`;else if(F)this.currentLocationName=F;else if(_.display_name){const T=_.display_name.split(",");this.currentLocationName=T.slice(0,2).join(",").trim()}}}catch{}finally{this.isGeocoding=!1,this.requestUpdate()}}selectPreset(i){this.currentLocationName=i,this.requestUpdate()}handleSaveSpot(){if((this.currentLat===void 0||this.currentLng===void 0)&&this.map){const i=this.map.getCenter();this.currentLat=i.lat,this.currentLng=i.lng}this.dispatchEvent(new CustomEvent("spot-selected",{bubbles:!0,composed:!0,detail:{lat:this.currentLat,lng:this.currentLng,locationName:this.currentLocationName}})),this.handleClose()}handleClose(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}render(){if(!this.open)return null;const i=g.currentLocale==="ko",o=i?this.locationPresetsKo:this.locationPresets;return b`
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
  `,ui);re([Vi({type:Boolean})],te.prototype,"open",void 0);re([Vi({type:Number})],te.prototype,"initialLat",void 0);re([Vi({type:Number})],te.prototype,"initialLng",void 0);re([Vi({type:String})],te.prototype,"initialLocationName",void 0);re([E()],te.prototype,"currentLat",void 0);re([E()],te.prototype,"currentLng",void 0);re([E()],te.prototype,"currentLocationName",void 0);re([E()],te.prototype,"isLocating",void 0);re([E()],te.prototype,"isGeocoding",void 0);re([E()],te.prototype,"hasMovedMarker",void 0);te=re([Mt("dooty-map-picker")],te);var et=function(h,i,o,n){var a=arguments.length,l=a<3?i:n===null?n=Object.getOwnPropertyDescriptor(i,o):n,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,i,o,n);else for(var p=h.length-1;p>=0;p--)(d=h[p])&&(l=(a<3?d(l):a>3?d(i,o,l):d(i,o))||l);return a>3&&l&&Object.defineProperty(i,o,l),l},fi;let tt=(fi=class extends Ft{constructor(){super(...arguments),this.selectedType=null,this.cons=4,this.size="M",this.mood="Normal",this.selectedMed="Apoquel",this.selectedMedDose="16 mg with food",this.customMedName="",this.weightKg=14.2,this.walkMin="30 min",this.walkKm="2.3 km",this.vetReason="Annual check-up",this.symptom="Itch / Scratch",this.portion="1 cup",this.photoUrl="",this.notes="",this.locationName="",this.lat=void 0,this.lng=void 0,this.isLocating=!1,this.showLocationPicker=!1,this.showMapPicker=!1,this.showTimePicker=!1,this.customTimestamp="",this.walkPetIds=[],this.weatherText="",this.isFetchingWeather=!1,this.isSaving=!1,this.startLat=void 0,this.startLng=void 0,this.startLocationName="",this.isLocatingStart=!1,this.endLat=void 0,this.endLng=void 0,this.endLocationName="",this.isLocatingEnd=!1,this.activeMapPickerTarget="single",this.wasOpen=!1,this.consNames=["hard pellets","lumpy log","cracked log","textbook — the dream","soft blobs","mushy","liquid"],this.consNamesKo=["단단한 토끼똥","울퉁불퉁한 변","약간 갈라진 변","완벽한 황금변 (최고)","무른 덩어리변","형태 없는 묽은변","설사/수분성 액체"],this.typeDefs=[{id:"poop",name:"Poop",nameKo:"응가",tag:"P",sub:"the main event",subKo:"주요 배변 활동",c:"#FFCE2E"},{id:"pee",name:"Pee",nameKo:"쉬야",tag:"U",sub:"quick mark",subKo:"배뇨 영역 표시",c:"#BFD0FF"},{id:"vomit",name:"Vomit",nameKo:"구토",tag:"V",sub:"we hope not",subKo:"소화 이상/토",c:"#FF9A3C"},{id:"medicine",name:"Medicine",nameKo:"약/영양제",tag:"M",sub:"3 on schedule",subKo:"투약 일정 관리",c:"#1FC99B"},{id:"weight",name:"Weight",nameKo:"몸무게",tag:"KG",sub:"last 14.2 kg",subKo:"체중 변화 기록",c:"#2B5BE8"},{id:"walk",name:"Walk",nameKo:"산책",tag:"W",sub:"2 already today",subKo:"야외 활동 & 코스",c:"#9EC6E8"},{id:"vet",name:"Vet visit",nameKo:"병원 진료",tag:"D",sub:"appointments",subKo:"검진 및 진료 예약",c:"#FFD15C"},{id:"symptom",name:"Symptom",nameKo:"증상 메모",tag:"S",sub:"itch, limp, mood",subKo:"가려움, 절뚝임 등",c:"#FF5A3C"}],this.medOptions=[{name:"Apoquel",dose:"16 mg with food"},{name:"Joint chew",dose:"1 chew, evening"},{name:"Flea & tick",dose:"topical, weekly"}],this.walkOptions=[{min:"15 min",minKo:"15분",km:"1.1 km"},{min:"30 min",minKo:"30분",km:"2.3 km"},{min:"45 min",minKo:"45분",km:"3.4 km"},{min:"1 hr",minKo:"1시간",km:"4.6 km"}],this.vetReasons=[{id:"Annual check-up",name:"Annual check-up",nameKo:"정기 검진"},{id:"Vaccination booster",name:"Vaccination booster",nameKo:"예방 접종"},{id:"Loose stool consult",name:"Loose stool consult",nameKo:"배변/설사 진료"},{id:"Dental scaling",name:"Dental scaling",nameKo:"치과/스케일링"},{id:"Medication renewal",name:"Medication renewal",nameKo:"처방약 재발급"},{id:"Follow-up exam",name:"Follow-up exam",nameKo:"재진/경과 관찰"}],this.symptomOptions=[{id:"Itch / Scratch",name:"Itch / Scratch",nameKo:"가려움 / 긁음"},{id:"Limping / Joint",name:"Limping / Joint",nameKo:"절뚝임 / 관절"},{id:"Lethargic / Low energy",name:"Lethargic / Low energy",nameKo:"기력 저하"},{id:"Coughing / Reverse sneeze",name:"Coughing / Reverse sneeze",nameKo:"기침 / 역재채기"},{id:"Loss of Appetite",name:"Loss of Appetite",nameKo:"식욕 부진"},{id:"Skin redness / Rash",name:"Skin redness / Rash",nameKo:"피부 발진 / 붉어짐"},{id:"Ear shaking",name:"Ear shaking",nameKo:"귀 털기 / 귓병"}],this.portionOptions=[{id:"0.5 cup",name:"0.5 cup",nameKo:"0.5 컵"},{id:"1.0 cup",name:"1.0 cup",nameKo:"1.0 컵"},{id:"1.5 cups",name:"1.5 cups",nameKo:"1.5 컵"},{id:"2.0 cups",name:"2.0 cups",nameKo:"2.0 컵"},{id:"Full bowl",name:"Full bowl",nameKo:"한 그릇 가득"},{id:"Special treats",name:"Special treats",nameKo:"특별 간식"}],this.moodOptions=Qr,this.quickTypes=["poop","pee","vomit","medicine"],this.quickLogging=!1,this.locationPresets=["Home / Indoor","Backyard","Park","Walk Route","Vet Clinic","Daycare"],this.locationPresetsKo=["우리집 / 실내","마당 / 배변패드","공원 / 산책로","단지 내 산책","동물병원","데이케어"]}connectedCallback(){super.connectedCallback(),this.unsubscribe=g.subscribe(()=>{if(g.loggerModalOpen)if(this.wasOpen)g.loggerEventType&&this.selectedType!==g.loggerEventType&&!g.editingEvent&&(this.selectedType=g.loggerEventType);else{if(this.walkPetIds=g.currentPet?[g.currentPet.id]:[],g.editingEvent){const i=g.editingEvent,o=i.metadata||{};this.selectedType=i.eventType;let n=i.notes||"";const a=n.split(" · ");if(a.length>1){const l=a[a.length-1].trim();l!==o.mood&&l!==o.size&&l!==o.portion?n=l:n=""}else(n.startsWith("응가")||n.startsWith("쉬야")||n.startsWith("Type ")||n.startsWith("Pee")||n.startsWith("Vomit")||n.startsWith("구토")||n.startsWith("Weigh-in")||n.startsWith("체중")||n.startsWith("Walk")||n.startsWith("산책"))&&(n="");this.notes=n,this.photoUrl=o.photoUrl||"",this.locationName=o.locationName||"",this.lat=typeof i.latitude=="number"?i.latitude:void 0,this.lng=typeof i.longitude=="number"?i.longitude:void 0,this.weatherText=o.weather||"",this.customTimestamp=i.timestamp||new Date().toISOString(),o.consistency&&(this.cons=o.consistency),o.size&&(this.size=o.size),o.mood&&(this.mood=o.mood),o.medication&&(this.selectedMed=o.medication),o.dosage&&(this.selectedMedDose=o.dosage),o.weightKg&&(this.weightKg=o.weightKg),o.walkDuration&&(this.walkMin=o.walkDuration),o.walkDistance&&(this.walkKm=o.walkDistance),o.visitReason&&(this.vetReason=o.visitReason),o.symptom&&(this.symptom=o.symptom),o.portion&&(this.portion=o.portion),i.eventType==="walk"?(this.startLat=typeof o.startLat=="number"?o.startLat:typeof i.latitude=="number"?i.latitude:void 0,this.startLng=typeof o.startLng=="number"?o.startLng:typeof i.longitude=="number"?i.longitude:void 0,this.startLocationName=o.startLocationName||o.locationName||"",this.endLat=typeof o.endLat=="number"?o.endLat:void 0,this.endLng=typeof o.endLng=="number"?o.endLng:void 0,this.endLocationName=o.endLocationName||""):(this.startLat=void 0,this.startLng=void 0,this.startLocationName="",this.endLat=void 0,this.endLng=void 0,this.endLocationName=""),this.isLocating=!1,this.isLocatingStart=!1,this.isLocatingEnd=!1,this.activeMapPickerTarget="single",this.showLocationPicker=!1,this.showMapPicker=!1,this.showTimePicker=!1,this.isFetchingWeather=!1}else this.selectedType=g.loggerEventType||null,this.locationName="",this.lat=void 0,this.lng=void 0,this.startLat=void 0,this.startLng=void 0,this.startLocationName="",this.endLat=void 0,this.endLng=void 0,this.endLocationName="",this.isLocatingStart=!1,this.isLocatingEnd=!1,this.activeMapPickerTarget="single",this.notes="",this.photoUrl="",this.customMedName="",this.customTimestamp=new Date().toISOString(),this.isLocating=!1,this.showLocationPicker=!1,this.showMapPicker=!1,this.showTimePicker=!1,this.weatherText="",this.isFetchingWeather=!1,this.autoFetchWeather();this.wasOpen=!0}else this.selectedType=null,this.wasOpen=!1;this.requestUpdate()})}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.unsubscribe)==null||i.call(this)}handleSelectType(i){if(!g.editingEvent&&this.quickTypes.includes(i)){this.quickLogType(i);return}this.selectedType=i,g.loggerEventType=i}handleBackToTypes(){this.selectedType=null,g.loggerEventType=null}async quickLogType(i){if(!(this.quickLogging||this.isSaving)){this.quickLogging=!0,g.closeLogger();try{await this.quickFetchLocation(),await this.handleSave(i)}finally{this.quickLogging=!1}}}quickFetchLocation(){return typeof navigator>"u"||!navigator.geolocation||this.lat!==void 0&&this.lng!==void 0?Promise.resolve():new Promise(i=>{let o=!1;const n=()=>{o||(o=!0,i())},a=setTimeout(n,3e3);navigator.geolocation.getCurrentPosition(l=>{clearTimeout(a),this.lat=l.coords.latitude,this.lng=l.coords.longitude,this.locationName||(this.locationName=`${this.lat.toFixed(4)}, ${this.lng.toFixed(4)}`,this.tryReverseGeocode(this.lat,this.lng)),n()},()=>{clearTimeout(a),n()},{enableHighAccuracy:!0,timeout:3e3})})}triggerPhotoUpload(){this.fileInput||(this.fileInput=document.createElement("input"),this.fileInput.type="file",this.fileInput.accept="image/*",this.fileInput.style.display="none",document.body.appendChild(this.fileInput),this.fileInput.addEventListener("change",i=>{var n;const o=(n=i.target.files)==null?void 0:n[0];if(o){const a=new FileReader;a.onload=l=>{var d;this.photoUrl=(d=l.target)==null?void 0:d.result},a.readAsDataURL(o)}})),this.fileInput.click()}selectPreset(i){this.locationName=i,!this.lat&&typeof navigator<"u"&&navigator.geolocation&&navigator.geolocation.getCurrentPosition(o=>{this.lat=o.coords.latitude,this.lng=o.coords.longitude,this.requestUpdate()},()=>{},{timeout:5e3})}clearLocation(){this.locationName="",this.lat=void 0,this.lng=void 0,this.isLocating=!1}async fetchCurrentLocation(){if(typeof navigator>"u"||!navigator.geolocation){this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:g.currentLocale==="ko"?"위치 권한 필요":"GPS Unavailable",sub:g.currentLocale==="ko"?"브라우저에서 위치 정보 접근을 허용해주세요.":"Geolocation is not supported or permitted by your browser."}}));return}this.isLocating=!0,this.requestUpdate(),navigator.geolocation.getCurrentPosition(async i=>{this.lat=i.coords.latitude,this.lng=i.coords.longitude,this.isLocating=!1,this.locationName||(this.locationName=`${this.lat.toFixed(4)}, ${this.lng.toFixed(4)}`,this.tryReverseGeocode(this.lat,this.lng)),this.fetchWeather(this.lat,this.lng),this.requestUpdate(),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:g.currentLocale==="ko"?"GPS 위치 태그 완료":"GPS Location Tagged",sub:`${this.lat.toFixed(4)}, ${this.lng.toFixed(4)}`}}))},i=>{console.warn("Geolocation failed:",i),this.isLocating=!1,this.requestUpdate(),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:g.currentLocale==="ko"?"위치 확인 실패":"Location Tagging Failed",sub:i.message||(g.currentLocale==="ko"?"위치 정보를 가져올 수 없습니다.":"Could not retrieve GPS coordinates.")}}))},{enableHighAccuracy:!0,timeout:8e3})}autoFetchWeather(){typeof navigator>"u"||!navigator.geolocation||(this.isFetchingWeather=!0,this.weatherText="",this.requestUpdate(),navigator.geolocation.getCurrentPosition(i=>{this.fetchWeather(i.coords.latitude,i.coords.longitude)},()=>{this.isFetchingWeather=!1,this.weatherText="",this.requestUpdate()},{timeout:5e3}))}async fetchWeather(i,o){var n,a;this.isFetchingWeather=!0,this.requestUpdate();try{const l=`https://api.open-meteo.com/v1/forecast?latitude=${i}&longitude=${o}&current=temperature_2m,weather_code&temperature_unit=celsius`,d=await fetch(l);if(!d.ok)throw new Error("Weather API error");const p=await d.json(),f=Math.round(((n=p.current)==null?void 0:n.temperature_2m)??0),m=((a=p.current)==null?void 0:a.weather_code)??0,y=this.wmoCodeToDescription(m);this.weatherText=`${f}° ${y}`}catch(l){console.warn("Weather fetch failed:",l),this.weatherText=""}finally{this.isFetchingWeather=!1,this.requestUpdate()}}wmoCodeToDescription(i){const o=g.currentLocale==="ko",a={0:["☀️ clear","☀️ 맑음"],1:["🌤️ mostly clear","🌤️ 대체로 맑음"],2:["⛅ partly cloudy","⛅ 구름 조금"],3:["☁️ overcast","☁️ 흐림"],45:["🌫️ fog","🌫️ 안개"],48:["🌫️ rime fog","🌫️ 서리 안개"],51:["🌦️ light drizzle","🌦️ 가벼운 이슬비"],53:["🌦️ drizzle","🌦️ 이슬비"],55:["🌧️ heavy drizzle","🌧️ 강한 이슬비"],56:["🌧️ freezing drizzle","🌧️ 얼어붙는 이슬비"],57:["🌧️ heavy freezing drizzle","🌧️ 강한 결빙 이슬비"],61:["🌧️ light rain","🌧️ 약한 비"],63:["🌧️ rain","🌧️ 비"],65:["🌧️ heavy rain","🌧️ 강한 비"],66:["🌧️ freezing rain","🌧️ 얼어붙는 비"],67:["🌧️ heavy freezing rain","🌧️ 강한 결빙 비"],71:["🌨️ light snow","🌨️ 약한 눈"],73:["🌨️ snow","🌨️ 눈"],75:["❄️ heavy snow","❄️ 강한 눈"],77:["🌨️ snow grains","🌨️ 싸락눈"],80:["🌦️ light showers","🌦️ 약한 소나기"],81:["🌧️ showers","🌧️ 소나기"],82:["⛈️ heavy showers","⛈️ 강한 소나기"],85:["🌨️ light snow showers","🌨️ 약한 눈 소나기"],86:["❄️ heavy snow showers","❄️ 강한 눈 소나기"],95:["⛈️ thunderstorm","⛈️ 뇌우"],96:["⛈️ thunderstorm w/ hail","⛈️ 우박 동반 뇌우"],99:["⛈️ severe thunderstorm","⛈️ 강한 뇌우"]}[i];return a?o?a[1]:a[0]:o?"☁️ 알 수 없음":"☁️ unknown"}async tryReverseGeocode(i,o){var n,a,l,d,p,f,m,y;try{const x=await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${i}&lon=${o}&zoom=18&addressdetails=1`,{headers:{Accept:"application/json"}});if(x.ok){const _=await x.json(),F=((n=_.address)==null?void 0:n.road)||((a=_.address)==null?void 0:a.pedestrian)||((l=_.address)==null?void 0:l.suburb)||((d=_.address)==null?void 0:d.neighbourhood),$=((p=_.address)==null?void 0:p.city)||((f=_.address)==null?void 0:f.town)||((m=_.address)==null?void 0:m.village)||((y=_.address)==null?void 0:y.county);if(F&&$)this.locationName=`${F}, ${$}`;else if(F)this.locationName=F;else if(_.display_name){const T=_.display_name.split(",");this.locationName=T.slice(0,2).join(",").trim()}this.requestUpdate()}}catch{}}formatDisplayTime(i){const o=g.currentLocale==="ko",n=i||new Date().toISOString(),a=new Date(n);if(isNaN(a.getTime()))return{main:new Date().toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}).toLowerCase(),sub:o?"오늘 · 탭하여 변경":"Today · tap to edit"};const l=new Date,d=a.getFullYear()===l.getFullYear()&&a.getMonth()===l.getMonth()&&a.getDate()===l.getDate(),p=a.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}).toLowerCase();return d?{main:p,sub:o?"오늘 · 탭하여 변경":"Today · tap to edit"}:{main:`${o?`${a.getMonth()+1}월 ${a.getDate()}일`:a.toLocaleDateString([],{month:"short",day:"numeric"})}, ${p}`,sub:o?"지정된 일시 · 탭하여 변경":"Custom date · tap to edit"}}toDatetimeLocalValue(i){const o=i?new Date(i):new Date;if(isNaN(o.getTime()))return"";const n=o.getFullYear(),a=String(o.getMonth()+1).padStart(2,"0"),l=String(o.getDate()).padStart(2,"0"),d=String(o.getHours()).padStart(2,"0"),p=String(o.getMinutes()).padStart(2,"0");return`${n}-${a}-${l}T${d}:${p}`}handleCustomTimeInput(i){if(!i)this.customTimestamp=new Date().toISOString();else{const o=new Date(i);this.customTimestamp=isNaN(o.getTime())?new Date().toISOString():o.toISOString()}this.requestUpdate()}setQuickOffsetMinutes(i){const o=new Date(Date.now()-i*60*1e3);this.customTimestamp=o.toISOString(),this.requestUpdate()}setQuickOffsetDays(i){const o=new Date(Date.now()-i*24*60*60*1e3);this.customTimestamp=o.toISOString(),this.requestUpdate()}setNow(){this.customTimestamp=new Date().toISOString(),this.requestUpdate()}async handleSave(i){var x,_,F,$,T;const o=g.currentLocale==="ko",n=i||this.selectedType||"poop",a=((x=g.currentPet)==null?void 0:x.name)||(o?"반려견":"Pet");let l="",d=o?"기록 완료!":"Logged it!",p="";const f=this.customTimestamp||(g.editingEvent?g.editingEvent.timestamp:new Date().toISOString()),m={timestamp:f,photoUrl:this.photoUrl||void 0,locationName:this.locationName||(this.lat?`${this.lat.toFixed(4)}, ${(_=this.lng)==null?void 0:_.toFixed(4)}`:void 0),weather:this.weatherText},y=o?Xr[this.mood]||this.mood:this.mood;if(n==="poop"){const M=o?this.consNamesKo[this.cons-1]:this.consNames[this.cons-1];l=o?`응가 ${this.cons}단계 (${M}) · ${this.size} · ${y}`:`Type ${this.cons} (${this.consNames[this.cons-1]}) · ${this.size} · ${this.mood}`,this.notes&&(l+=` · ${this.notes}`),m.consistency=this.cons,m.consistencyLabel=this.consNames[this.cons-1],m.size=this.size,m.mood=this.mood,d=o?"응가 기록 완료!":"Logged it!",p=o?`${a}의 배변 기록: ${this.cons}단계 · ${this.size}`:`${a}’s log: Type ${this.cons} · ${this.size}`}else if(n==="pee")l=o?`쉬야 · ${this.size} · ${y}`:`Pee · ${this.size} · ${this.mood}`,this.notes&&(l+=` · ${this.notes}`),m.size=this.size,m.mood=this.mood,d=o?"쉬야 완료!":"Marked!",p=o?"영역 표시 기록됨.":"Territory marked.";else if(n==="vomit")l=o?`구토 · ${this.cons}단계 · ${y}`:`Vomit · Type ${this.cons} · ${this.mood}`,this.notes&&(l+=` · ${this.notes}`),m.consistency=this.cons,m.consistencyLabel=this.consNames[this.cons-1],m.mood=this.mood,d=o?"구토 기록됨 & 주의 알림":"Logged and flagged",p=o?"24시간 내 반복 발생 시 알림을 드립니다.":"Two in 48h will alert you.";else if(n==="medicine"){const M=this.customMedName||this.selectedMed;l=`${M} (${this.selectedMedDose})`,this.notes&&(l+=` · ${this.notes}`),m.medication=M,m.dosage=this.selectedMedDose,d=o?"투약 기록 완료":`${M} given`,p=o?"다음 투약 일정에 반영됩니다.":"Next dose scheduled."}else if(n==="weight")l=o?`체중 측정: ${this.weightKg.toFixed(1)} kg`:`Weigh-in: ${this.weightKg.toFixed(1)} kg`,this.notes&&(l+=` · ${this.notes}`),m.weightKg=this.weightKg,d=o?"체중 저장됨":"Weigh-in saved",p=`${this.weightKg.toFixed(1)} kg · ${o?"체중 기록 완료":"recorded"}`;else if(n==="walk")l=o?`산책 · ${this.walkMin} (${this.walkKm}) · ${y}`:`Walk · ${this.walkMin} (${this.walkKm}) · ${this.mood}`,this.notes&&(l+=` · ${this.notes}`),m.walkDuration=this.walkMin,m.walkDistance=this.walkKm,m.mood=this.mood,m.startLat=this.startLat,m.startLng=this.startLng,m.startLocationName=this.startLocationName,m.endLat=this.endLat,m.endLng=this.endLng,m.endLocationName=this.endLocationName,this.startLat!==void 0&&this.startLng!==void 0&&(this.lat=this.startLat,this.lng=this.startLng,this.locationName||(this.locationName=this.startLocationName)),d=o?"산책 기록 완료":"Walk logged",p=`${this.walkMin} · ${this.walkKm} · ${o?"저장되었습니다!":"Saved successfully."}`;else if(n==="vet"){const M=o?((F=this.vetReasons.find(B=>B.id===this.vetReason))==null?void 0:F.nameKo)||this.vetReason:this.vetReason;l=o?`병원 진료: ${M}`:`Vet visit: ${this.vetReason}`,this.notes&&(l+=` · ${this.notes}`),m.visitReason=this.vetReason,d=o?"진료 기록 추가":"Visit added",p=o?"진료 내역 및 알림이 설정되었습니다.":"Reminder set."}else if(n==="symptom"){const M=o?(($=this.symptomOptions.find(B=>B.id===this.symptom))==null?void 0:$.nameKo)||this.symptom:this.symptom;l=o?`증상: ${M}`:`Symptom: ${this.symptom}`,this.notes&&(l+=` · ${this.notes}`),m.symptom=this.symptom,d=o?"증상 기록됨":"Symptom noted",p=o?"수의사 진료용 요약에 추가되었습니다.":"Added to vet-ready summary."}else if(n==="food"||n==="water"){const M=o?((T=this.portionOptions.find(B=>B.id===this.portion))==null?void 0:T.nameKo)||this.portion:this.portion;l=o?`식사: ${M}`:`Meal: ${this.portion}`,this.notes&&(l+=` · ${this.notes}`),m.portion=this.portion,d=o?"식사 기록 완료":"Meal recorded",p=`${M}`}if(!this.isSaving){this.isSaving=!0;try{g.editingEvent?(await g.updateEvent(g.editingEvent.id,n,l,m,this.lat,this.lng,f),d=o?"기록 수정 완료!":"Entry updated!",p=o?"수정사항이 저장되었습니다.":"Changes saved."):await g.logEvent(n,l,m,this.lat,this.lng,f),this.close(),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:d,sub:p}}))}catch(M){console.error("Error saving event:",M)}finally{this.isSaving=!1}}}async handleDelete(){if(!g.editingEvent)return;const i=g.currentLocale==="ko",o=i?"정말 이 기록을 삭제하시겠습니까?":"Are you sure you want to delete this entry?";if(!window.confirm(o))return;const n=g.editingEvent.id;await g.deleteEvent(n),this.close(),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:i?"기록 삭제됨":"Entry deleted",sub:i?"기록이 정상적으로 삭제되었습니다.":"The log entry has been removed."}}))}openMapPickerFor(i){this.activeMapPickerTarget=i,this.showMapPicker=!0,this.requestUpdate()}async fetchStartGPS(){typeof navigator>"u"||!navigator.geolocation||(this.isLocatingStart=!0,this.requestUpdate(),navigator.geolocation.getCurrentPosition(async i=>{this.startLat=i.coords.latitude,this.startLng=i.coords.longitude,this.isLocatingStart=!1,this.startLocationName||(this.startLocationName=`${this.startLat.toFixed(4)}, ${this.startLng.toFixed(4)}`,this.tryReverseGeocodeForTarget(this.startLat,this.startLng,"start")),this.requestUpdate()},i=>{console.warn("Start Geolocation error:",i),this.isLocatingStart=!1,this.requestUpdate()},{enableHighAccuracy:!0,timeout:8e3}))}async fetchEndGPS(){typeof navigator>"u"||!navigator.geolocation||(this.isLocatingEnd=!0,this.requestUpdate(),navigator.geolocation.getCurrentPosition(async i=>{this.endLat=i.coords.latitude,this.endLng=i.coords.longitude,this.isLocatingEnd=!1,this.endLocationName||(this.endLocationName=`${this.endLat.toFixed(4)}, ${this.endLng.toFixed(4)}`,this.tryReverseGeocodeForTarget(this.endLat,this.endLng,"end")),this.requestUpdate()},i=>{console.warn("End Geolocation error:",i),this.isLocatingEnd=!1,this.requestUpdate()},{enableHighAccuracy:!0,timeout:8e3}))}async tryReverseGeocodeForTarget(i,o,n){var a,l,d,p,f,m,y,x;try{const _=await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${i}&lon=${o}&zoom=18&addressdetails=1`,{headers:{Accept:"application/json"}});if(_.ok){const F=await _.json(),$=((a=F.address)==null?void 0:a.road)||((l=F.address)==null?void 0:l.pedestrian)||((d=F.address)==null?void 0:d.suburb)||((p=F.address)==null?void 0:p.neighbourhood),T=((f=F.address)==null?void 0:f.city)||((m=F.address)==null?void 0:m.town)||((y=F.address)==null?void 0:y.village)||((x=F.address)==null?void 0:x.county),M=$&&T?`${$}, ${T}`:$||(F.display_name?F.display_name.split(",").slice(0,2).join(",").trim():"");M&&(n==="start"?this.startLocationName=M:n==="end"?this.endLocationName=M:this.locationName=M,this.requestUpdate())}}catch{}}handleSpotSelected(i){const o=i.detail.lat,n=i.detail.lng,a=i.detail.locationName||(o!==void 0&&n!==void 0?`${o.toFixed(4)}, ${n.toFixed(4)}`:"");this.activeMapPickerTarget==="start"?(this.startLat=o,this.startLng=n,this.startLocationName=a):this.activeMapPickerTarget==="end"?(this.endLat=o,this.endLng=n,this.endLocationName=a):(this.lat=o,this.lng=n,this.locationName=a,o!==void 0&&n!==void 0&&this.fetchWeather(o,n)),this.showMapPicker=!1,this.requestUpdate()}close(){this.selectedType=null,this.notes="",this.photoUrl="",this.customMedName="",this.locationName="",this.lat=void 0,this.lng=void 0,this.startLat=void 0,this.startLng=void 0,this.startLocationName="",this.endLat=void 0,this.endLng=void 0,this.endLocationName="",this.isLocatingStart=!1,this.isLocatingEnd=!1,this.activeMapPickerTarget="single",this.customTimestamp="",this.isLocating=!1,this.showLocationPicker=!1,this.showMapPicker=!1,this.showTimePicker=!1,g.closeLogger()}render(){var Z,j,rt,I;if(!g.loggerModalOpen)return null;const i=!this.selectedType,o=!!this.selectedType,n=g.currentLocale==="ko",a={poop:n?["배변 세부 기록","두 번 탭으로 간단하게"]:["A fine specimen","Two taps and you’re done"],pee:n?["영역 표시 업데이트","위치와 규모"]:["Territory update","Where and how long"],vomit:n?["소화 이상 기록","수의사 진료에 도움이 됩니다"]:["Sorry, buddy","Details help the vet"],medicine:n?["투약 완료","일정에 체크하세요"]:["Dose given","Tick it off the schedule"],weight:n?["체중 측정","주기적인 측정이 중요해요"]:["Weigh-in","Monthly is plenty"],vet:n?["병원 진료","진료 내용과 날짜"]:["Vet visit","Reason and date"],walk:n?["즐거운 야외 산책","얼마나 걸었나요?"]:["Out and about","How long were you gone?"],symptom:n?["이상 징후 기록","생생할 때 기록해두세요"]:["Something’s off","Describe it while it’s fresh"],food:n?["식사 및 사료","급여량과 종류"]:["Mealtime","Portion and food"]},l=!!g.editingEvent,d=l?n?["기록 수정하기","내용을 변경하거나 삭제할 수 있습니다"]:["Edit Log Entry","Update details or delete entry"]:this.selectedType?a[this.selectedType]||(n?["기록 세부사항","확인"]:["What happened?","Confirm details"]):n?["무슨 일이 있었나요?","종류를 선택하세요"]:["What happened?","Pick a type"],p=d[0],f=d[1],m=this.selectedType==="poop"||this.selectedType==="vomit",y=this.selectedType==="poop"||this.selectedType==="pee",x=this.selectedType==="weight",_=this.selectedType==="medicine",F=this.selectedType==="walk",$=this.selectedType==="vet",T=this.selectedType==="symptom",M=this.selectedType==="food"||this.selectedType==="water",B=this.selectedType==="poop"||this.selectedType==="pee"||this.selectedType==="vomit"||this.selectedType==="walk";return b`
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
            ${i?b`
                  <div class="type-grid">
                    ${this.typeDefs.map(P=>b`
                        <div
                          class="type-card"
                          @click=${()=>this.handleSelectType(P.id)}
                        >
                          <div class="type-icon" style="background: ${P.c};">
                            ${P.tag}
                          </div>
                          <div>
                            <div class="type-card-name">${n?P.nameKo:P.name}</div>
                            <div class="type-card-sub">${n?P.subKo:P.sub}</div>
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
                                @input=${P=>this.handleCustomTimeInput(P.target.value)}
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
                              ${[1,2,3,4,5,6,7].map(P=>b`
                                  <div
                                    class="cons-opt ${this.cons===P?"active":""}"
                                    @click=${()=>this.cons=P}
                                  >
                                    <div
                                      style="font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif); font-weight: 800; font-size: 15px; color: #17140F;"
                                    >
                                      ${P}
                                    </div>
                                    <div
                                      style="width: ${5+P*2.4}px; height: 5px; border-radius: 5px; background: #17140F;"
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
                              ${["S","M","L","XL"].map(P=>b`
                                  <div
                                    class="size-btn ${this.size===P?"active":""}"
                                    @click=${()=>this.size=P}
                                  >
                                    ${P}
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
                              ${this.medOptions.map(P=>b`
                                  <div
                                    class="med-item ${this.selectedMed===P.name?"active":""}"
                                    @click=${()=>{this.selectedMed=P.name,this.selectedMedDose=P.dose}}
                                  >
                                    <div class="med-dot"></div>
                                    <div class="med-name">${P.name}</div>
                                    <div class="med-dose">${P.dose}</div>
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
                                            ${g.pets.map(P=>{const ct=this.walkPetIds.includes(P.id);return b`
                                                <div
                                                  class="who-pet-chip ${ct?"active":""}"
                                                  @click=${()=>{ct?this.walkPetIds.length>1&&(this.walkPetIds=this.walkPetIds.filter(A=>A!==P.id)):this.walkPetIds=[...this.walkPetIds,P.id]}}
                                                >
                                                  <div class="who-pet-avatar">${P.name.charAt(0).toUpperCase()}</div>
                                                  <div class="who-pet-name">${P.name}</div>
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
                                ${this.walkOptions.map(P=>b`
                                    <div
                                      class="walk-btn ${this.walkMin===P.min?"active":""}"
                                      @click=${()=>{this.walkMin=P.min,this.walkKm=P.km}}
                                    >
                                      <div class="walk-min">${n?P.minKo:P.min}</div>
                                      <div class="walk-km">${P.km}</div>
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
                                    @input=${P=>this.walkMin=P.target.value}
                                  />
                                </div>
                                <div class="walk-input-box">
                                  <span class="walk-input-label">${n?"거리 (km)":"Distance"}</span>
                                  <input
                                    type="text"
                                    class="walk-input-field"
                                    placeholder="2.3 km"
                                    .value=${this.walkKm}
                                    @input=${P=>this.walkKm=P.target.value}
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
                                @input=${P=>this.startLocationName=P.target.value}
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
                                @input=${P=>this.endLocationName=P.target.value}
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
                    ${$?b`
                          <div>
                            <div class="section-lbl" style="margin-bottom: 10px;">
                              ${n?"진료 내용":"Visit Reason"}
                            </div>
                            <div class="wrap-pill-row">
                              ${this.vetReasons.map(P=>b`
                                  <div
                                    class="mood-pill ${this.vetReason===P.id?"active":""}"
                                    @click=${()=>this.vetReason=P.id}
                                  >
                                    ${n?P.nameKo:P.name}
                                  </div>
                                `)}
                            </div>
                          </div>
                        `:null}

                    <!-- 7. Symptom Tags (Symptom) -->
                    ${T?b`
                          <div>
                            <div class="section-lbl" style="margin-bottom: 10px;">
                              ${n?"관찰된 증상":"Symptom observed"}
                            </div>
                            <div class="wrap-pill-row">
                              ${this.symptomOptions.map(P=>b`
                                  <div
                                    class="mood-pill ${this.symptom===P.id?"active":""}"
                                    @click=${()=>this.symptom=P.id}
                                  >
                                    ${n?P.nameKo:P.name}
                                  </div>
                                `)}
                            </div>
                          </div>
                        `:null}

                    <!-- 8. Food Portion (Food/Water) -->
                    ${M?b`
                          <div>
                            <div class="section-lbl" style="margin-bottom: 10px;">
                              ${n?"급여량":"Portion"}
                            </div>
                            <div class="wrap-pill-row">
                              ${this.portionOptions.map(P=>b`
                                  <div
                                    class="mood-pill ${this.portion===P.id?"active":""}"
                                    @click=${()=>this.portion=P.id}
                                  >
                                    ${n?P.nameKo:P.name}
                                  </div>
                                `)}
                            </div>
                          </div>
                        `:null}

                    <!-- 9. Mood on Delivery (General / Potty) -->
                    ${B?b`
                          <div>
                            <div class="section-lbl" style="margin-bottom: 10px;">
                              ${n?"기분 & 태도":"Mood on delivery"}
                            </div>
                            <div class="wrap-pill-row">
                              ${this.moodOptions.map(P=>b`
                                  <div
                                    class="mood-pill ${this.mood===P.id?"active":""}"
                                    @click=${()=>this.mood=P.id}
                                  >
                                    ${n?P.nameKo:P.name}
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
                              ${(n?this.locationPresetsKo:this.locationPresets).map(P=>b`
                                  <div
                                    class="location-chip ${this.locationName===P?"active":""}"
                                    @click=${()=>this.selectPreset(P)}
                                  >
                                    ${P}
                                  </div>
                                `)}
                            </div>

                            <div class="custom-loc-input-row">
                              <input
                                type="text"
                                class="custom-loc-input"
                                placeholder="${n?"직접 장소명 입력 (예: 센트럴파크 잔디밭)":"Or type custom name (e.g. Elm St & 4th)..."}"
                                .value=${this.locationName}
                                @input=${P=>this.locationName=P.target.value}
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
                          @input=${P=>this.notes=P.target.value}
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
          @spot-selected=${P=>this.handleSpotSelected(P)}
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
  `,fi);et([E()],tt.prototype,"selectedType",void 0);et([E()],tt.prototype,"cons",void 0);et([E()],tt.prototype,"size",void 0);et([E()],tt.prototype,"mood",void 0);et([E()],tt.prototype,"selectedMed",void 0);et([E()],tt.prototype,"selectedMedDose",void 0);et([E()],tt.prototype,"customMedName",void 0);et([E()],tt.prototype,"weightKg",void 0);et([E()],tt.prototype,"walkMin",void 0);et([E()],tt.prototype,"walkKm",void 0);et([E()],tt.prototype,"vetReason",void 0);et([E()],tt.prototype,"symptom",void 0);et([E()],tt.prototype,"portion",void 0);et([E()],tt.prototype,"photoUrl",void 0);et([E()],tt.prototype,"notes",void 0);et([E()],tt.prototype,"locationName",void 0);et([E()],tt.prototype,"lat",void 0);et([E()],tt.prototype,"lng",void 0);et([E()],tt.prototype,"isLocating",void 0);et([E()],tt.prototype,"showLocationPicker",void 0);et([E()],tt.prototype,"showMapPicker",void 0);et([E()],tt.prototype,"showTimePicker",void 0);et([E()],tt.prototype,"customTimestamp",void 0);et([E()],tt.prototype,"walkPetIds",void 0);et([E()],tt.prototype,"weatherText",void 0);et([E()],tt.prototype,"isFetchingWeather",void 0);et([E()],tt.prototype,"isSaving",void 0);et([E()],tt.prototype,"startLat",void 0);et([E()],tt.prototype,"startLng",void 0);et([E()],tt.prototype,"startLocationName",void 0);et([E()],tt.prototype,"isLocatingStart",void 0);et([E()],tt.prototype,"endLat",void 0);et([E()],tt.prototype,"endLng",void 0);et([E()],tt.prototype,"endLocationName",void 0);et([E()],tt.prototype,"isLocatingEnd",void 0);et([E()],tt.prototype,"activeMapPickerTarget",void 0);tt=et([Mt("dooty-sheet")],tt);var fe=function(h,i,o,n){var a=arguments.length,l=a<3?i:n===null?n=Object.getOwnPropertyDescriptor(i,o):n,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,i,o,n);else for(var p=h.length-1;p>=0;p--)(d=h[p])&&(l=(a<3?d(l):a>3?d(i,o,l):d(i,o))||l);return a>3&&l&&Object.defineProperty(i,o,l),l},gi;let ae=(gi=class extends Ft{constructor(){super(...arguments),this.previewUrl="",this.urlInput="",this.activeMode="upload",this.isProcessing=!1,this.errorMessage="",this.petName="",this.petBreed="",this.petBirthday="",this.petPresets=[{emoji:"🐶",bg:"#FFE485",label:"Golden"},{emoji:"🐕",bg:"#FF9E79",label:"Shiba"},{emoji:"🦮",bg:"#B8E1D9",label:"Lab"},{emoji:"🐩",bg:"#EAD5E6",label:"Poodle"},{emoji:"🐱",bg:"#FED7AA",label:"Cat"},{emoji:"🐈‍⬛",bg:"#CBD5E1",label:"Black Cat"},{emoji:"🐾",bg:"#D1FAE5",label:"Paws"},{emoji:"🦴",bg:"#FDE68A",label:"Bone"},{emoji:"🦊",bg:"#FDBA74",label:"Fox"},{emoji:"🐻",bg:"#E2E8F0",label:"Bear"},{emoji:"🐰",bg:"#FCE7F3",label:"Bunny"},{emoji:"🦁",bg:"#FEF08A",label:"Lion"}],this.userPresets=[{emoji:"🧑‍💻",bg:"#FFE485",label:"Dev"},{emoji:"👩‍🦰",bg:"#FF9E79",label:"Redhead"},{emoji:"👨‍🦱",bg:"#B8E1D9",label:"Curly"},{emoji:"🧔",bg:"#EAD5E6",label:"Beard"},{emoji:"👩‍🎨",bg:"#FED7AA",label:"Artist"},{emoji:"🧑‍🌾",bg:"#D1FAE5",label:"Gardener"},{emoji:"🦸",bg:"#FDE68A",label:"Hero"},{emoji:"🕶️",bg:"#CBD5E1",label:"Cool"},{emoji:"⭐",bg:"#FEF08A",label:"Star"},{emoji:"👑",bg:"#FCE7F3",label:"Crown"}]}connectedCallback(){super.connectedCallback(),this.unsubscribe=g.subscribe(()=>{if(g.photoModalOpen&&(this.previewUrl||(this.previewUrl=g.photoModalCurrentAvatar||""),g.photoModalTarget==="pet")){const i=g.currentPet;if(i&&(this.petName||(this.petName=i.name||""),this.petBreed||(this.petBreed=i.breed||""),!this.petBirthday&&i.birthday))try{this.petBirthday=new Date(i.birthday).toISOString().slice(0,10)}catch{this.petBirthday=i.birthday}}this.requestUpdate()})}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.unsubscribe)==null||i.call(this)}handleClose(){this.previewUrl="",this.urlInput="",this.errorMessage="",this.petName="",this.petBreed="",this.petBirthday="",g.closePhotoModal()}triggerFileInput(){var o;const i=(o=this.shadowRoot)==null?void 0:o.querySelector("#fileInput");i==null||i.click()}setAgeInYears(i){const o=new Date;o.setFullYear(o.getFullYear()-i),this.petBirthday=o.toISOString().slice(0,10),this.requestUpdate()}async handleFileSelect(i){var a;const n=(a=i.target.files)==null?void 0:a[0];if(n){if(!n.type.startsWith("image/")){this.errorMessage="Please select a valid image file (PNG, JPG, WEBP).";return}this.isProcessing=!0,this.errorMessage="";try{const l=await this.resizeImage(n,400,400);this.previewUrl=l}catch(l){this.errorMessage="Failed to process image: "+(l.message||"Unknown error")}finally{this.isProcessing=!1}}}resizeImage(i,o,n){return new Promise((a,l)=>{const d=new FileReader;d.onload=p=>{var m;const f=new Image;f.onload=()=>{let y=f.width,x=f.height;const _=Math.min(y,x),F=(y-_)/2,$=(x-_)/2,T=document.createElement("canvas"),M=Math.min(o,_);T.width=M,T.height=M;const B=T.getContext("2d");if(!B){l(new Error("Canvas context not available"));return}B.drawImage(f,F,$,_,_,0,0,M,M),a(T.toDataURL("image/jpeg",.88))},f.onerror=()=>l(new Error("Image failed to load")),f.src=(m=p.target)==null?void 0:m.result},d.onerror=()=>l(new Error("File reader failed")),d.readAsDataURL(i)})}handleSelectPreset(i){const o=`data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="${encodeURIComponent(i.bg)}"/><text x="50" y="65" font-size="54" text-anchor="middle">${i.emoji}</text></svg>`;this.previewUrl=o,this.errorMessage=""}handleApplyUrl(){if(!this.urlInput.trim()){this.errorMessage="Please enter an image URL.";return}this.previewUrl=this.urlInput.trim(),this.errorMessage=""}handleRemovePhoto(){this.previewUrl="",this.urlInput="",this.errorMessage=""}async handleSave(){var i,o,n,a;if(!this.isProcessing){this.isProcessing=!0;try{const l=g.currentLocale==="ko",d=g.photoModalTarget,p=g.photoModalTargetId,f=this.previewUrl;if(d==="pet"){const m=p||((i=g.currentPet)==null?void 0:i.id);m&&await g.updatePetProfile(m,{name:this.petName.trim()||((o=g.currentPet)==null?void 0:o.name)||"Pet",breed:this.petBreed.trim()||((n=g.currentPet)==null?void 0:n.breed)||"",birthday:this.petBirthday||((a=g.currentPet)==null?void 0:a.birthday)||"",avatarUrl:f})}else d==="user"?await g.updateUserAvatar(f):d==="member"&&p&&await g.updateMemberAvatar(p,f);this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:d==="pet"?l?`${this.petName||"반려견"} 프로필 저장됨`:`${this.petName||"Pet"} Profile Saved`:l?"사진 업데이트됨":"Photo Updated",sub:l?"변경사항이 성공적으로 적용되었습니다.":"Changes successfully saved."}})),this.handleClose()}catch(l){this.errorMessage="Failed to save: "+(l.message||"Unknown error")}finally{this.isProcessing=!1}}}render(){if(!g.photoModalOpen)return b``;const i=g.currentLocale==="ko",o=g.photoModalTarget,n=o==="pet"?this.petPresets:this.userPresets,a=g.photoModalTitle||(o==="pet"?i?"반려동물 정보 및 사진 수정":"Edit Pet Profile & Photo":i?"프로필 사진 변경":"Change Profile Photo");return b`
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
  `,gi);fe([E()],ae.prototype,"unsubscribe",void 0);fe([E()],ae.prototype,"previewUrl",void 0);fe([E()],ae.prototype,"urlInput",void 0);fe([E()],ae.prototype,"activeMode",void 0);fe([E()],ae.prototype,"isProcessing",void 0);fe([E()],ae.prototype,"errorMessage",void 0);fe([E()],ae.prototype,"petName",void 0);fe([E()],ae.prototype,"petBreed",void 0);fe([E()],ae.prototype,"petBirthday",void 0);ae=fe([Mt("dooty-photo-modal")],ae);var ql=function(h,i,o,n){var a=arguments.length,l=a<3?i:n===null?n=Object.getOwnPropertyDescriptor(i,o):n,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,i,o,n);else for(var p=h.length-1;p>=0;p--)(d=h[p])&&(l=(a<3?d(l):a>3?d(i,o,l):d(i,o))||l);return a>3&&l&&Object.defineProperty(i,o,l),l},mi;let Xs=(mi=class extends Ft{connectedCallback(){super.connectedCallback(),this.unsubscribe=g.subscribe(()=>this.requestUpdate())}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.unsubscribe)==null||i.call(this)}render(){var a;if(!g.petSwitcherOpen)return null;const i=g.currentLocale==="ko",o=g.pets||[],n=(a=g.currentPet)==null?void 0:a.id;return b`
      <div class="modal-backdrop" @click=${()=>g.closePetSwitcher()}>
        <div class="modal-sheet" @click=${l=>l.stopPropagation()}>
          <!-- Header -->
          <div class="sheet-header">
            <div class="sheet-title-area">
              <div class="sheet-title">${i?"누구의 하루인가요?":"Whose day is it?"}</div>
              <div class="sheet-sub">
                ${i?"이름을 누르면 전환됩니다. 프로필을 누르면 상세 정보로 이동합니다.":"Tap a name to follow them. Tap PAGE for their file."}
              </div>
            </div>
            <div class="close-btn" @click=${()=>g.closePetSwitcher()}>&#10005;</div>
          </div>

          <!-- Pets List -->
          <div class="pets-list">
            ${o.map((l,d)=>{const p=l.id===n,f=l.name||"Pet",m=f.charAt(0).toUpperCase(),y=["#FFCE2E","#BFD0FF","#1FC99B","#E7BFFF","#FFB39A"],x=y[d%y.length],_=(g.events||[]).filter($=>$.petId===l.id).length,F=(g.events||[]).filter($=>{if($.petId!==l.id)return!1;const T=new Date($.timestamp),M=new Date;return T.getDate()===M.getDate()&&T.getMonth()===M.getMonth()&&T.getFullYear()===M.getFullYear()}).length;return b`
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
                        ${p?b`<div class="on-screen-tag">${i?"화면 표시 중":"ON SCREEN"}</div>`:null}
                      </div>
                      <div class="pet-today-line">
                        ${i?`오늘 ${F}건 · 총 ${_}건의 기록`:`${F} logs today · ${_} total`}
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
      font-family: var(--font-heading-sm);
      font-weight: var(--font-weight-heading-sm);
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
  `,mi);Xs=ql([Mt("dooty-pet-switcher")],Xs);var Co=function(h,i,o,n){var a=arguments.length,l=a<3?i:n===null?n=Object.getOwnPropertyDescriptor(i,o):n,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,i,o,n);else for(var p=h.length-1;p>=0;p--)(d=h[p])&&(l=(a<3?d(l):a>3?d(i,o,l):d(i,o))||l);return a>3&&l&&Object.defineProperty(i,o,l),l},vi;let Gi=(vi=class extends Ft{constructor(){super(...arguments),this.notes="",this.photoUrl="",this.isSaving=!1}connectedCallback(){super.connectedCallback(),this.unsubscribe=g.subscribe(()=>{this.requestUpdate(),this.syncMaps()})}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.unsubscribe)==null||i.call(this),this.destroyLiveMap(),this.destroySummaryMap()}updated(i){super.updated(i),this.syncMaps()}syncMaps(){const i=g.walkView;i==="live"?(this.destroySummaryMap(),setTimeout(()=>this.initOrUpdateLiveMap(),50)):i==="summary"?(this.destroyLiveMap(),setTimeout(()=>this.initOrUpdateSummaryMap(),50)):(this.destroyLiveMap(),this.destroySummaryMap())}destroyLiveMap(){this.liveMap&&(this.liveMap.remove(),this.liveMap=void 0,this.livePolyline=void 0,this.livePolylineShadow=void 0,this.liveStartMarker=void 0,this.liveCurrentMarker=void 0)}destroySummaryMap(){this.summaryMap&&(this.summaryMap.remove(),this.summaryMap=void 0)}initOrUpdateLiveMap(){var d;const i=(d=this.renderRoot)==null?void 0:d.querySelector("#live-leaflet-map");if(!i)return;const o=g.activeWalk;if(!o)return;const n=o.route||[],a=o.currentLat??(n.length>0?n[n.length-1][0]:37.5665),l=o.currentLng??(n.length>0?n[n.length-1][1]:126.978);if(this.liveMap){if(this.liveMap.invalidateSize(),this.livePolyline&&this.livePolylineShadow&&(this.livePolyline.setLatLngs(n),this.livePolylineShadow.setLatLngs(n)),o.startLat!==void 0&&o.startLng!==void 0)if(this.liveStartMarker)this.liveStartMarker.setLatLng([o.startLat,o.startLng]);else{const f=ot.divIcon({className:"dooty-live-start-pin",html:`
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
          `,iconSize:[0,0]});this.liveStartMarker=ot.marker([o.startLat,o.startLng],{icon:f}).addTo(this.liveMap)}this.liveCurrentMarker&&this.liveCurrentMarker.setLatLng([a,l]),o.currentLat!==void 0&&o.currentLng!==void 0&&this.liveMap.panTo([o.currentLat,o.currentLng],{animate:!0,duration:.8})}else{this.liveMap=ot.map(i,{zoomControl:!1,attributionControl:!1}).setView([a,l],17),Fo().addTo(this.liveMap),this.livePolylineShadow=ot.polyline(n,{color:"#17140F",weight:9,lineCap:"round",lineJoin:"round",opacity:.9}).addTo(this.liveMap),this.livePolyline=ot.polyline(n,{color:"#FF5A3C",weight:5,lineCap:"round",lineJoin:"round",opacity:1}).addTo(this.liveMap);const f=ot.divIcon({className:"dooty-live-start-pin",html:`
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
      `,iconSize:[0,0]});o.startLat!==void 0&&o.startLng!==void 0&&(this.liveStartMarker=ot.marker([o.startLat,o.startLng],{icon:f}).addTo(this.liveMap));const y=ot.divIcon({className:"dooty-live-current-pin",html:`
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
      `,iconSize:[0,0]});this.liveCurrentMarker=ot.marker([a,l],{icon:y}).addTo(this.liveMap),setTimeout(()=>{var x;return(x=this.liveMap)==null?void 0:x.invalidateSize()},150)}}handleRecenterLive(){if(!this.liveMap||!g.activeWalk)return;const i=g.activeWalk,o=i.currentLat??(i.route.length>0?i.route[i.route.length-1][0]:void 0),n=i.currentLng??(i.route.length>0?i.route[i.route.length-1][1]:void 0);o!==void 0&&n!==void 0&&this.liveMap.flyTo([o,n],17,{animate:!0,duration:.8})}initOrUpdateSummaryMap(){var l;const i=(l=this.renderRoot)==null?void 0:l.querySelector("#summary-leaflet-map");if(!i)return;const o=g.walkSummaryData;if(!o)return;const n=o.route||[],a=o.startLat!==void 0&&o.startLng!==void 0?[o.startLat,o.startLng]:n.length>0?[n[0][0],n[0][1]]:[37.5665,126.978];if(this.summaryMap)this.summaryMap.invalidateSize();else{if(this.summaryMap=ot.map(i,{zoomControl:!1,attributionControl:!1,dragging:!0,touchZoom:!0,scrollWheelZoom:!1}).setView(a,15),Fo().addTo(this.summaryMap),n.length>=2){ot.polyline(n,{color:"#17140F",weight:8,lineCap:"round",lineJoin:"round",opacity:.9}).addTo(this.summaryMap);const f=ot.polyline(n,{color:"#1FC99B",weight:4.5,lineCap:"round",lineJoin:"round",opacity:1}).addTo(this.summaryMap);this.summaryMap.fitBounds(f.getBounds(),{padding:[35,35]})}const d=o.startLat!==void 0&&o.startLng!==void 0?[o.startLat,o.startLng]:n.length>0?[n[0][0],n[0][1]]:void 0;if(d){const f=ot.divIcon({className:"dooty-summary-start-pin",html:`
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
          `,iconSize:[0,0]});ot.marker(d,{icon:f}).addTo(this.summaryMap)}const p=o.endLat!==void 0&&o.endLng!==void 0?[o.endLat,o.endLng]:n.length>1?[n[n.length-1][0],n[n.length-1][1]]:void 0;if(p){const f=ot.divIcon({className:"dooty-summary-end-pin",html:`
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
          `,iconSize:[0,0]});ot.marker(p,{icon:f}).addTo(this.summaryMap)}setTimeout(()=>{var f;return(f=this.summaryMap)==null?void 0:f.invalidateSize()},150)}}formatSec(i){const o=Math.floor(i/60),n=i%60;return`${o}:${String(n).padStart(2,"0")}`}render(){var m;const i=g.currentLocale==="ko",o=g.activeWalk,n=g.walkView,a=g.getWalkSeconds(),l=this.formatSec(a),d=g.getWalkDistanceKm(),p=g.getWalkPace(),f=(o==null?void 0:o.pausedAt)!==null;return b`
      <!-- Inject Leaflet core CSS -->
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />

      <!-- 1. Floating Banner above Dock (Visible when walk is running in background) -->
      ${o&&n===null?b`
            <div class="walk-banner" @click=${()=>g.expandWalk()}>
              <div class="ping-wrap">
                <div class="ping-circle"></div>
                <div class="ping-dot"></div>
              </div>
              <div class="banner-label">${i?"실시간 산책":"LIVE WALK"}</div>
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
                    ${i?"실시간 산책":"LIVE WALK"}
                  </div>
                </div>

                <button class="recenter-fab" @click=${()=>this.handleRecenterLive()}>
                  <span>🎯</span>
                  <span>${i?"내 위치":"Recenter"}</span>
                </button>
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
                    <div style="font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif); font-weight: 800; font-size: 23px; color: #17140F; letter-spacing: -0.8px; line-height: 1.1;">
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
                    <div style="font-family:var(--font-heading, 'Bricolage Grotesque', sans-serif); font-weight:800; font-size:22px; color:#17140F; letter-spacing:-0.8px; line-height:1.2;">
                      ${l}
                    </div>
                  </div>
                  <div style="width: 2.5px; align-self: stretch; background: #F0E7D3;"></div>
                  <div style="flex: 1;">
                    <div style="font-size:9.5px; font-weight:800; letter-spacing:1.2px; color:#9A9080; text-transform:uppercase;">
                      ${i?"거리":"DISTANCE"}
                    </div>
                    <div style="font-family:var(--font-heading, 'Bricolage Grotesque', sans-serif); font-weight:800; font-size:22px; color:#17140F; letter-spacing:-0.8px; line-height:1.2;">
                      ${d} km
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
      ${n==="summary"&&g.walkSummaryData?b`
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

                <!-- Real Leaflet Map Preview Box -->
                <div class="map-preview-box">
                  <div id="summary-leaflet-map"></div>
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
                  ${g.walkSummaryData.startLocationName?b`
                        <div class="detail-item">
                          <div class="detail-lbl">${i?"출발지":"START"}</div>
                          <div class="detail-val">${g.walkSummaryData.startLocationName}</div>
                        </div>
                      `:null}
                  ${g.walkSummaryData.endLocationName?b`
                        <div class="detail-item">
                          <div class="detail-lbl">${i?"도착지":"END"}</div>
                          <div class="detail-val">${g.walkSummaryData.endLocationName}</div>
                        </div>
                      `:null}
                  <div class="detail-item">
                    <div class="detail-lbl">${i?"작성자":"LOGGED BY"}</div>
                    <div class="detail-val">${((m=g.currentUser)==null?void 0:m.displayName)||"Me"}</div>
                  </div>
                  <div style="padding: 14px 15px;">
                    <div style="font-size: 9.5px; font-weight: 800; letter-spacing: 1.2px; color: #9A9080; text-transform: uppercase;">
                      ${i?"메모":"NOTES"}
                    </div>
                    <input
                      type="text"
                      placeholder=${i?"산책 중 특이사항을 적어주세요...":"Met three dogs, had a blast..."}
                      .value=${this.notes}
                      @input=${y=>this.notes=y.target.value}
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
    `}async handleSave(){if(!this.isSaving){this.isSaving=!0;try{const i=g.currentLocale==="ko",o=g.walkSummaryData,n=(o==null?void 0:o.petNames.join(" & "))||(i?"반려견":"Pet"),a=o!=null&&o.distanceKm?`${o.distanceKm} km`:"Walk";await g.saveLiveWalk(this.notes,this.photoUrl),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:i?"산책 기록 완료!":"Walk saved!",sub:i?`${n}와(과) 함께한 산책 (${a})`:`${n}'s walk logged (${a})`}}))}catch(i){console.error("Failed to save walk:",i)}finally{this.isSaving=!1}}}},vi.styles=At`
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
  `,vi);Co([E()],Gi.prototype,"notes",void 0);Co([E()],Gi.prototype,"photoUrl",void 0);Co([E()],Gi.prototype,"isSaving",void 0);Gi=Co([Mt("dooty-walk")],Gi);var Ot=function(h,i,o,n){var a=arguments.length,l=a<3?i:n===null?n=Object.getOwnPropertyDescriptor(i,o):n,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,i,o,n);else for(var p=h.length-1;p>=0;p--)(d=h[p])&&(l=(a<3?d(l):a>3?d(i,o,l):d(i,o))||l);return a>3&&l&&Object.defineProperty(i,o,l),l},xi;let zt=(xi=class extends Ft{constructor(){super(...arguments),this.view="signin",this.email="",this.password="",this.showPassword=!1,this.displayName="",this.userAvatar="",this.dogName="Nacho",this.dogBreed="",this.dogBirthday="",this.householdName="",this.dogAvatar="",this.setupSize="M",this.trackingPrefs={poop:!0,pee:!0,vomit:!0,meds:!0,weight:!0,walk:!0,vet:!1,symptom:!1},this.joinCode="",this.joinRole="Dan the walker",this.errorMessage="",this.isSubmitting=!1}connectedCallback(){super.connectedCallback(),this.unsubscribe=g.subscribe(()=>{this.view=g.authView,this.requestUpdate()})}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.unsubscribe)==null||i.call(this)}setView(i){this.view=i,g.setAuthView(i),this.errorMessage=""}calculateStrength(i){const o=g.t.auth.signupStep1;return!i||i.length<6?{label:o.weak,width:"25%",color:"#FF5A3C"}:i.length>=10&&/[A-Z]/.test(i)&&/[0-9]/.test(i)?{label:o.strong,width:"100%",color:"#1FC99B"}:i.length>=8?{label:o.good,width:"65%",color:"#FFCE2E"}:{label:o.weak,width:"35%",color:"#FF5A3C"}}async handleLogin(i){var n;i&&i.preventDefault(),this.errorMessage="";const o=g.t.auth.errors;if(!this.email.trim()){this.errorMessage=o.emailRequired;return}if(!this.password){this.errorMessage=o.passwordRequired;return}this.isSubmitting=!0;try{await g.signIn({email:this.email.trim(),password:this.password}),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:g.currentLocale==="ko"?"환영합니다! 👋":"Welcome back! 👋",sub:((n=g.currentHousehold)==null?void 0:n.name)||"Household"}}))}catch(a){this.errorMessage=a.message||o.logInFailed}finally{this.isSubmitting=!1}}handleGoToStep2(i){i&&i.preventDefault(),this.errorMessage="";const o=g.t.auth.errors;if(!this.displayName.trim()){this.errorMessage=o.yourNameRequired;return}if(!this.email.trim()){this.errorMessage=o.emailRequired;return}if(!this.password||this.password.length<6){this.errorMessage=o.passwordTooShort;return}this.setView("dogsetup")}async handleFinishSetup(i){i&&i.preventDefault(),this.errorMessage="";const o=g.t.auth.errors;if(!this.dogName.trim()){this.errorMessage=o.petNameRequired;return}const n=this.householdName.trim()||`${this.dogName.trim()} Household`;this.isSubmitting=!0;try{await g.signUp({email:this.email.trim(),password:this.password,displayName:this.displayName.trim(),mode:"create",householdName:n,pet:{name:this.dogName.trim(),species:"dog",breed:this.dogBreed.trim(),birthday:this.dogBirthday,size:this.setupSize,avatarUrl:this.dogAvatar},trackingPreferences:this.trackingPrefs}),Object.entries(this.trackingPrefs).forEach(([a,l])=>{g.setTrackingPreference(a,l)}),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:g.currentLocale==="ko"?"준비 완료! 🎉":"All set! 🎉",sub:g.currentLocale==="ko"?"다음 번 산책 때 주황색 버튼을 눌러보세요.":"Tap the orange button the next time he goes."}}))}catch(a){this.errorMessage=a.message||o.signUpFailed}finally{this.isSubmitting=!1}}handleGoJoinDetails(i){i&&i.preventDefault(),this.errorMessage="";const o=g.t.auth.errors;if(!this.joinCode.trim()||this.joinCode.trim().length<4){this.errorMessage=o.inviteCodeRequired;return}this.setView("joindetails")}async handleJoinSubmit(i){var n;i&&i.preventDefault(),this.errorMessage="";const o=g.t.auth.errors;if(!this.displayName.trim()){this.errorMessage=o.yourNameRequired;return}if(!this.email.trim()){this.errorMessage=o.emailRequired;return}if(!this.password||this.password.length<6){this.errorMessage=o.passwordTooShort;return}this.isSubmitting=!0;try{await g.signUp({email:this.email.trim(),password:this.password,displayName:this.displayName.trim(),mode:"join",inviteCode:this.joinCode.trim().toUpperCase(),role:this.joinRole}),this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:{title:g.currentLocale==="ko"?`${this.joinRole}님, 환영합니다! 🎉`:`You're in, ${this.joinRole}! 🎉`,sub:((n=g.currentHousehold)==null?void 0:n.name)||"Household"}}))}catch(a){this.errorMessage=a.message||o.joinFailed}finally{this.isSubmitting=!1}}render(){const i=g.t.auth;if(this.view==="signin")return b`
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
      `;if(this.view==="signup"){const o=i.signupStep1,n=this.calculateStrength(this.password);return b`
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
                  ${this.showPassword?i.hide:i.show}
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
      `}if(this.view==="dogsetup"){const o=i.signupStep2,n=["S","M","L","XL"];return b`
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
      `}if(this.view==="join"){const o=i.joinStep1,n=(this.joinCode.toUpperCase()+"      ").slice(0,6).split("");return b`
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
      `}if(this.view==="joindetails"){const o=i.joinStep2,n=[this.displayName||"Dan",`${this.displayName||"Dan"} the walker`,`${this.displayName?this.displayName+" W.":"Dan W."}`,"The walker"];return b`
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
                  ${this.showPassword?i.hide:i.show}
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
  `,xi);Ot([E()],zt.prototype,"view",void 0);Ot([E()],zt.prototype,"email",void 0);Ot([E()],zt.prototype,"password",void 0);Ot([E()],zt.prototype,"showPassword",void 0);Ot([E()],zt.prototype,"displayName",void 0);Ot([E()],zt.prototype,"userAvatar",void 0);Ot([E()],zt.prototype,"dogName",void 0);Ot([E()],zt.prototype,"dogBreed",void 0);Ot([E()],zt.prototype,"dogBirthday",void 0);Ot([E()],zt.prototype,"householdName",void 0);Ot([E()],zt.prototype,"dogAvatar",void 0);Ot([E()],zt.prototype,"setupSize",void 0);Ot([E()],zt.prototype,"trackingPrefs",void 0);Ot([E()],zt.prototype,"joinCode",void 0);Ot([E()],zt.prototype,"joinRole",void 0);Ot([E()],zt.prototype,"errorMessage",void 0);Ot([E()],zt.prototype,"isSubmitting",void 0);zt=Ot([Mt("dooty-auth")],zt);var Yi=function(h,i,o,n){var a=arguments.length,l=a<3?i:n===null?n=Object.getOwnPropertyDescriptor(i,o):n,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,i,o,n);else for(var p=h.length-1;p>=0;p--)(d=h[p])&&(l=(a<3?d(l):a>3?d(i,o,l):d(i,o))||l);return a>3&&l&&Object.defineProperty(i,o,l),l},bi;let ki=(bi=class extends Ft{constructor(){super(...arguments),this.name="",this.dose="",this.every=30,this.isClosing=!1}connectedCallback(){super.connectedCallback(),this.unsubscribe=g.subscribe(()=>this.requestUpdate())}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.unsubscribe)==null||i.call(this)}closeDrawer(){this.isClosing||(this.isClosing=!0,setTimeout(()=>{this.isClosing=!1,g.closeTreatmentsDrawer()},190))}handleGive(i){const o=g.giveTreatment(i);o.title&&this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:o})),this.closeDrawer()}handleDelete(i){const o=g.removeTreatment(i);o.title&&this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:o})),this.requestUpdate()}handleAdd(){if(!this.name.trim())return;const i=g.addTreatment({name:this.name,dose:this.dose,every:this.every});i.title&&this.dispatchEvent(new CustomEvent("dooty-toast",{bubbles:!0,composed:!0,detail:i})),this.name="",this.dose="",this.every=30,this.closeDrawer()}render(){if(!g.treatmentsDrawerOpen&&!this.isClosing)return null;const i=g.currentLocale==="ko",o=g.treatments.slice().sort((d,p)=>d.due-p.due),n=o.length,a=this.name.trim().length>0,l=[{name:i?"매주":"Weekly",value:7},{name:i?"매월":"Monthly",value:30},{name:i?"3개월마다":"Every 3 months",value:90},{name:i?"6개월마다":"Every 6 months",value:180},{name:i?"매년":"Yearly",value:365}];return b`
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
                ${i?"투약 및 예방 관리":"Treatments"}
              </div>
              <div class="sheet-sub">
                ${i?`반복 일정 ${n}건 등록됨`:`${n} ${n===1?"treatment":"treatments"} on a repeating schedule.`}
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
                      ${d.dose} · ${i?`${y}마다`:`every ${y}`}
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
                      title="${i?"일정 삭제":"Remove schedule"}"
                    >
                      &#10005;
                    </button>
                  </div>
                </div>
              `})}
          </div>

          <div class="hint-label">
            ${i?"탭하여 투약을 완료 상태로 기록하세요.":"Tap one to mark it given."}
          </div>

          <div class="divider"></div>

          <!-- Add Another Section -->
          <div>
            <div class="section-title">${i?"일정 추가":"Add another"}</div>
            <div class="input-group">
              <div class="input-box">
                <div class="input-label">${i?"약 / 치료 이름":"Name"}</div>
                <input
                  class="text-input"
                  type="text"
                  .value=${this.name}
                  @input=${d=>this.name=d.target.value}
                  placeholder="${i?"심장사상충약, 구충제 등":"Flea & tick"}"
                />
              </div>
              <div class="input-box">
                <div class="input-label">
                  ${i?"복용량 또는 브랜드":"Dose or brand"}
                </div>
                <input
                  class="text-input"
                  type="text"
                  .value=${this.dose}
                  @input=${d=>this.dose=d.target.value}
                  placeholder="${i?"선택 사항 (예: 1정, 바르는 약)":"optional"}"
                />
              </div>
            </div>
          </div>

          <!-- How Often Frequency -->
          <div>
            <div class="section-title">${i?"반복 주기":"How often"}</div>
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
            ${i?"일정 등록하기":"Add treatment"}
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
      font-family: var(--font-heading-sm);
      font-weight: var(--font-weight-heading-sm);
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
      font-family: var(--font-heading-sm);
      font-weight: var(--font-weight-heading-sm);
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
      font-family: var(--font-heading-sm);
      font-weight: var(--font-weight-heading-sm);
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
  `,bi);Yi([E()],ki.prototype,"name",void 0);Yi([E()],ki.prototype,"dose",void 0);Yi([E()],ki.prototype,"every",void 0);Yi([E()],ki.prototype,"isClosing",void 0);ki=Yi([Mt("dooty-treatments-drawer")],ki);var Eo=function(h,i,o,n){var a=arguments.length,l=a<3?i:n===null?n=Object.getOwnPropertyDescriptor(i,o):n,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(h,i,o,n);else for(var p=h.length-1;p>=0;p--)(d=h[p])&&(l=(a<3?d(l):a>3?d(i,o,l):d(i,o))||l);return a>3&&l&&Object.defineProperty(i,o,l),l},yi;let qi=(yi=class extends Ft{constructor(){super(...arguments),this.activeView="today",this.toast=null,this.burstCount=0}connectedCallback(){super.connectedCallback(),this.unsubscribe=g.subscribe(()=>{this.activeView=g.activeTab,this.requestUpdate()}),this.addEventListener("dooty-navigate",i=>{this.activeView=i.detail,g.activeTab=i.detail,this.requestUpdate()}),this.addEventListener("dooty-toast",i=>{this.showToast(i.detail.title,i.detail.sub)}),g.init()}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.unsubscribe)==null||i.call(this),this.toastTimer&&clearTimeout(this.toastTimer)}showToast(i,o){this.toastTimer&&clearTimeout(this.toastTimer),this.toast={title:i,sub:o},this.burstCount++,this.requestUpdate(),this.toastTimer=setTimeout(()=>{this.toast=null,this.requestUpdate()},3200)}render(){const i=g.isAuthenticated,o=i&&this.activeView!=="wrapped",n=["#FF5A3C","#FFCE2E","#2B5BE8","#1FC99B","#17140F"];return b`
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
      font-family: var(--font-heading-sm);
      font-weight: var(--font-weight-heading-sm);
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
  `,yi);Eo([E()],qi.prototype,"activeView",void 0);Eo([E()],qi.prototype,"toast",void 0);Eo([E()],qi.prototype,"burstCount",void 0);qi=Eo([Mt("dooty-app")],qi);const Kl="modulepreload",Vl=function(h,i){return new URL(h,i).href},ta={},Jl=function(i,o,n){let a=Promise.resolve();if(o&&o.length>0){let d=function(y){return Promise.all(y.map(x=>Promise.resolve(x).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};const p=document.getElementsByTagName("link"),f=document.querySelector("meta[property=csp-nonce]"),m=(f==null?void 0:f.nonce)||(f==null?void 0:f.getAttribute("nonce"));a=d(o.map(y=>{if(y=Vl(y,n),y in ta)return;ta[y]=!0;const x=y.endsWith(".css"),_=x?'[rel="stylesheet"]':"";if(!!n)for(let T=p.length-1;T>=0;T--){const M=p[T];if(M.href===y&&(!x||M.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${y}"]${_}`))return;const $=document.createElement("link");if($.rel=x?"stylesheet":Kl,x||($.as="script"),$.crossOrigin="",$.href=y,m&&$.setAttribute("nonce",m),document.head.appendChild($),x)return new Promise((T,M)=>{$.addEventListener("load",T),$.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${y}`)))})}))}function l(d){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=d,window.dispatchEvent(p),!p.defaultPrevented)throw d}return a.then(d=>{for(const p of d||[])p.status==="rejected"&&l(p.reason);return i().catch(l)})};function Yl(h={}){const{immediate:i=!1,onNeedRefresh:o,onOfflineReady:n,onRegistered:a,onRegisteredSW:l,onRegisterError:d}=h;let p,f;const m=async(x=!0)=>{await f};async function y(){if("serviceWorker"in navigator){if(p=await Jl(async()=>{const{Workbox:x}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:x}},[],import.meta.url).then(({Workbox:x})=>new x("./sw.js",{scope:"./",type:"classic"})).catch(x=>{d==null||d(x)}),!p)return;p.addEventListener("activated",x=>{(x.isUpdate||x.isExternal)&&window.location.reload()}),p.addEventListener("installed",x=>{x.isUpdate||n==null||n()}),p.register({immediate:i}).then(x=>{l?l("./sw.js",x):a==null||a(x)}).catch(x=>{d==null||d(x)})}}return f=y(),m}Yl({onNeedRefresh(){console.log("New app version available.")},onOfflineReady(){console.log("App ready to work offline.")}});
