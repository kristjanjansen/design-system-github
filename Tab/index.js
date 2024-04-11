"use client";import e,{useRef as t,useCallback as n,useEffect as r,useState as i,createContext as o,useContext as a}from"react";function s(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=s(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function l(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=s(e))&&(r&&(r+=" "),r+=t);return r}const d="undefined"!=typeof document?e.useLayoutEffect:()=>{};let u=new Map;function c(e,t){if(e===t)return e;let n=u.get(e);if(n)return n(t),t;let r=u.get(t);return r?(r(e),e):t}function f(...e){return(...t)=>{for(let n of e)"function"==typeof n&&n(...t)}}const p=e=>{var t;return null!==(t=null==e?void 0:e.ownerDocument)&&void 0!==t?t:document},v=e=>{if(e&&"window"in e&&e.window===e)return e;return p(e).defaultView||window};function g(){return e=/^Mac/i,"undefined"!=typeof window&&null!=window.navigator&&e.test((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.platform)||window.navigator.platform);var e,t}function m(){return e=/Android/i,"undefined"!=typeof window&&null!=window.navigator&&((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.brands.some((t=>e.test(t.brand))))||e.test(window.navigator.userAgent));var e,t}let _=new Map,h=new Set;function b(){if("undefined"==typeof window)return;function e(e){return"propertyName"in e}let t=n=>{if(!e(n)||!n.target)return;let r=_.get(n.target);if(r&&(r.delete(n.propertyName),0===r.size&&(n.target.removeEventListener("transitioncancel",t),_.delete(n.target)),0===_.size)){for(let e of h)e();h.clear()}};document.body.addEventListener("transitionrun",(n=>{if(!e(n)||!n.target)return;let r=_.get(n.target);r||(r=new Set,_.set(n.target,r),n.target.addEventListener("transitioncancel",t,{once:!0})),r.add(n.propertyName)})),document.body.addEventListener("transitionend",t)}"undefined"!=typeof document&&("loading"!==document.readyState?b():document.addEventListener("DOMContentLoaded",b));e.createContext({register:()=>{}}).displayName="PressResponderContext";class y{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(e,t){this.nativeEvent=t,this.target=t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget,this.bubbles=t.bubbles,this.cancelable=t.cancelable,this.defaultPrevented=t.defaultPrevented,this.eventPhase=t.eventPhase,this.isTrusted=t.isTrusted,this.timeStamp=t.timeStamp,this.type=e}}function E(e){let r=t({isFocused:!1,observer:null});d((()=>{const e=r.current;return()=>{e.observer&&(e.observer.disconnect(),e.observer=null)}}),[]);let i=function(e){const r=t(null);return d((()=>{r.current=e}),[e]),n(((...e)=>{const t=r.current;return null==t?void 0:t(...e)}),[])}((t=>{null==e||e(t)}));return n((e=>{if(e.target instanceof HTMLButtonElement||e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLSelectElement){r.current.isFocused=!0;let t=e.target,n=e=>{r.current.isFocused=!1,t.disabled&&i(new y("blur",e)),r.current.observer&&(r.current.observer.disconnect(),r.current.observer=null)};t.addEventListener("focusout",n,{once:!0}),r.current.observer=new MutationObserver((()=>{if(r.current.isFocused&&t.disabled){var e;null===(e=r.current.observer)||void 0===e||e.disconnect();let n=t===document.activeElement?null:document.activeElement;t.dispatchEvent(new FocusEvent("blur",{relatedTarget:n})),t.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:n}))}})),r.current.observer.observe(t,{attributes:!0,attributeFilter:["disabled"]})}}),[i])}let w=null,x=new Set,T=new Map,L=!1,F=!1;const M={Tab:!0,Escape:!0};function C(e,t){for(let n of x)n(e,t)}function P(e){L=!0,function(e){return!(e.metaKey||!g()&&e.altKey||e.ctrlKey||"Control"===e.key||"Shift"===e.key||"Meta"===e.key)}(e)&&(w="keyboard",C("keyboard",e))}function R(e){w="pointer","mousedown"!==e.type&&"pointerdown"!==e.type||(L=!0,C("pointer",e))}function S(e){var t;(0===(t=e).mozInputSource&&t.isTrusted||(m()&&t.pointerType?"click"===t.type&&1===t.buttons:0===t.detail&&!t.pointerType))&&(L=!0,w="virtual")}function N(e){e.target!==window&&e.target!==document&&(L||F||(w="virtual",C("virtual",e)),L=!1,F=!1)}function k(){L=!1,F=!0}function $(e){if("undefined"==typeof window||T.get(v(e)))return;const t=v(e),n=p(e);let r=t.HTMLElement.prototype.focus;t.HTMLElement.prototype.focus=function(){L=!0,r.apply(this,arguments)},n.addEventListener("keydown",P,!0),n.addEventListener("keyup",P,!0),n.addEventListener("click",S,!0),t.addEventListener("focus",N,!0),t.addEventListener("blur",k,!1),"undefined"!=typeof PointerEvent?(n.addEventListener("pointerdown",R,!0),n.addEventListener("pointermove",R,!0),n.addEventListener("pointerup",R,!0)):(n.addEventListener("mousedown",R,!0),n.addEventListener("mousemove",R,!0),n.addEventListener("mouseup",R,!0)),t.addEventListener("beforeunload",(()=>{A(e)}),{once:!0}),T.set(t,{focus:r})}const A=(e,t)=>{const n=v(e),r=p(e);t&&r.removeEventListener("DOMContentLoaded",t),T.has(n)&&(n.HTMLElement.prototype.focus=T.get(n).focus,r.removeEventListener("keydown",P,!0),r.removeEventListener("keyup",P,!0),r.removeEventListener("click",S,!0),n.removeEventListener("focus",N,!0),n.removeEventListener("blur",k,!1),"undefined"!=typeof PointerEvent?(r.removeEventListener("pointerdown",R,!0),r.removeEventListener("pointermove",R,!0),r.removeEventListener("pointerup",R,!0)):(r.removeEventListener("mousedown",R,!0),r.removeEventListener("mousemove",R,!0),r.removeEventListener("mouseup",R,!0)),T.delete(n))};function H(){return"pointer"!==w}"undefined"!=typeof document&&function(e){const t=p(e);let n;"loading"!==t.readyState?$(e):(n=()=>{$(e)},t.addEventListener("DOMContentLoaded",n))}();const D=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function W(e,t,n){$(),r((()=>{let t=(t,r)=>{(function(e,t,n){var r;const i="undefined"!=typeof window?v(null==n?void 0:n.target).HTMLInputElement:HTMLInputElement,o="undefined"!=typeof window?v(null==n?void 0:n.target).HTMLTextAreaElement:HTMLTextAreaElement,a="undefined"!=typeof window?v(null==n?void 0:n.target).HTMLElement:HTMLElement,s="undefined"!=typeof window?v(null==n?void 0:n.target).KeyboardEvent:KeyboardEvent;return!((e=e||(null==n?void 0:n.target)instanceof i&&!D.has(null==n||null===(r=n.target)||void 0===r?void 0:r.type)||(null==n?void 0:n.target)instanceof o||(null==n?void 0:n.target)instanceof a&&(null==n?void 0:n.target.isContentEditable))&&"keyboard"===t&&n instanceof s&&!M[n.key])})(!!(null==n?void 0:n.isTextInput),t,r)&&e(H())};return x.add(t),()=>{x.delete(t)}}),t)}function z(e,t){return!!e&&(!!t&&t.some((t=>t.contains(e))))}class I{get size(){return this.fastMap.size}getTreeNode(e){return this.fastMap.get(e)}addTreeNode(e,t,n){let r=this.fastMap.get(null!=t?t:null);if(!r)return;let i=new V({scopeRef:e});r.addChild(i),i.parent=r,this.fastMap.set(e,i),n&&(i.nodeToRestore=n)}addNode(e){this.fastMap.set(e.scopeRef,e)}removeTreeNode(e){if(null===e)return;let t=this.fastMap.get(e);if(!t)return;let n=t.parent;for(let e of this.traverse())e!==t&&t.nodeToRestore&&e.nodeToRestore&&t.scopeRef&&t.scopeRef.current&&z(e.nodeToRestore,t.scopeRef.current)&&(e.nodeToRestore=t.nodeToRestore);let r=t.children;n&&(n.removeChild(t),r.size>0&&r.forEach((e=>n&&n.addChild(e)))),this.fastMap.delete(t.scopeRef)}*traverse(e=this.root){if(null!=e.scopeRef&&(yield e),e.children.size>0)for(let t of e.children)yield*this.traverse(t)}clone(){var e;let t=new I;var n;for(let r of this.traverse())t.addTreeNode(r.scopeRef,null!==(n=null===(e=r.parent)||void 0===e?void 0:e.scopeRef)&&void 0!==n?n:null,r.nodeToRestore);return t}constructor(){this.fastMap=new Map,this.root=new V({scopeRef:null}),this.fastMap.set(null,this.root)}}class V{addChild(e){this.children.add(e),e.parent=this}removeChild(e){this.children.delete(e),e.parent=void 0}constructor(e){this.children=new Set,this.contain=!1,this.scopeRef=e.scopeRef}}function B(e={}){let{autoFocus:r=!1,isTextInput:o,within:a}=e,s=t({isFocused:!1,isFocusVisible:r||H()}),[l,d]=i(!1),[u,c]=i((()=>s.current.isFocused&&s.current.isFocusVisible)),f=n((()=>c(s.current.isFocused&&s.current.isFocusVisible)),[]),p=n((e=>{s.current.isFocused=e,d(e),f()}),[f]);W((e=>{s.current.isFocusVisible=e,f()}),[],{isTextInput:o});let{focusProps:v}=function(e){let{isDisabled:t,onFocus:r,onBlur:i,onFocusChange:o}=e;const a=n((e=>{if(e.target===e.currentTarget)return i&&i(e),o&&o(!1),!0}),[i,o]),s=E(a),l=n((e=>{e.target===e.currentTarget&&document.activeElement===e.target&&(r&&r(e),o&&o(!0),s(e))}),[o,r,s]);return{focusProps:{onFocus:!t&&(r||o||i)?l:void 0,onBlur:t||!i&&!o?void 0:a}}}({isDisabled:a,onFocusChange:p}),{focusWithinProps:g}=function(e){let{isDisabled:r,onBlurWithin:i,onFocusWithin:o,onFocusWithinChange:a}=e,s=t({isFocusWithin:!1}),l=n((e=>{s.current.isFocusWithin&&!e.currentTarget.contains(e.relatedTarget)&&(s.current.isFocusWithin=!1,i&&i(e),a&&a(!1))}),[i,a,s]),d=E(l),u=n((e=>{s.current.isFocusWithin||document.activeElement!==e.target||(o&&o(e),a&&a(!0),s.current.isFocusWithin=!0,d(e))}),[o,a,d]);return r?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:u,onBlur:l}}}({isDisabled:!a,onFocusWithinChange:p});return{isFocused:l,isFocusVisible:u,focusProps:a?g:v}}function O(t){let{children:n,focusClass:r,focusRingClass:i}=t,{isFocused:o,isFocusVisible:a,focusProps:s}=B(t),d=e.Children.only(n);return e.cloneElement(d,function(...e){let t={...e[0]};for(let n=1;n<e.length;n++){let r=e[n];for(let e in r){let n=t[e],i=r[e];"function"==typeof n&&"function"==typeof i&&"o"===e[0]&&"n"===e[1]&&e.charCodeAt(2)>=65&&e.charCodeAt(2)<=90?t[e]=f(n,i):"className"!==e&&"UNSAFE_className"!==e||"string"!=typeof n||"string"!=typeof i?"id"===e&&n&&i?t.id=c(n,i):t[e]=void 0!==i?i:n:t[e]=l(n,i)}}return t}(d.props,{...s,className:l({[r||""]:o,[i||""]:a})}))}new I;var j,K={exports:{}};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/j=K,function(){var e={}.hasOwnProperty;function t(){for(var n=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var o=typeof i;if("string"===o||"number"===o)n.push(i);else if(Array.isArray(i)){if(i.length){var a=t.apply(null,i);a&&n.push(a)}}else if("object"===o){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){n.push(i.toString());continue}for(var s in i)e.call(i,s)&&i[s]&&n.push(s)}}}return n.join(" ")}j.exports?(t.default=t,j.exports=t):window.classNames=t}();var X=K.exports;const J=o({activeTab:"",setActiveTab:e=>{}}),U=e=>({0:"var(--eds-spacing-none)",1:"var(--eds-spacing-small-1)",2:"var(--eds-spacing-small-2)",3:"var(--eds-spacing-small-3)",4:"var(--eds-spacing-small-4)",5:"var(--eds-spacing-small-5)",6:"var(--eds-spacing-medium-1)",7:"var(--eds-spacing-medium-2)",8:"var(--eds-spacing-medium-3)",9:"var(--eds-spacing-medium-4)",10:"var(--eds-spacing-medium-5)",11:"var(--eds-spacing-medium-6)",12:"var(--eds-spacing-medium-7)",13:"var(--eds-spacing-medium-8)",14:"var(--eds-spacing-large-1)",15:"var(--eds-spacing-large-2)",16:"var(--eds-spacing-large-3)",17:"var(--eds-spacing-large-4)",18:"var(--eds-spacing-large-5)"}[e]||"0px");var Y={"heading-h1":"heading-h1__00OVp__0-1-7","heading-h2":"heading-h2__uf8XO__0-1-7","heading-h3":"heading-h3__b58IP__0-1-7","heading-h4":"heading-h4__x0dIm__0-1-7","heading-h5":"heading-h5__dHW8C__0-1-7","heading-h6":"heading-h6__FSif0__0-1-7","heading-display":"heading-display__1B20E__0-1-7","heading-leadtext":"heading-leadtext__fbf5X__0-1-7","heading-subheadline":"heading-subheadline__xgXDJ__0-1-7","text-p-small":"text-p-small__U5YeB__0-1-7","text-p-default":"text-p-default__T3Gv7__0-1-7","text-p-large":"text-p-large__k4P5K__0-1-7","text-line-tiny":"text-line-tiny__IdKxY__0-1-7","text-line-small":"text-line-small__VDnxz__0-1-7","text-line-default":"text-line-default__HHLev__0-1-7","text-line-large":"text-line-large__zY6Xt__0-1-7","text-list-default":"text-list-default__9dn8h__0-1-7","label-tiny":"label-tiny__fwERw__0-1-7","label-small":"label-small__7hSFb__0-1-7","label-default":"label-default__TzEjW__0-1-7","label-large":"label-large__Xe0s7__0-1-7","text-italic":"text-italic__9j6-k__0-1-7","text-underline":"text-underline__-idVq__0-1-7","text-uppercase":"text-uppercase__zT285__0-1-7","text-400":"text-400__veahz__0-1-7","text-600":"text-600__SOu9h__0-1-7"};const q=({variant:t="p",size:n="default",italic:r=!1,underline:i=!1,weight:o="400",uppercase:a=!1,children:s,className:l,mt:d,mb:u,my:c,...f})=>{const p="p"===t?"p":"list"===t?"ul":"div",v=`\n        ${Y[`text-${t}-${n}`]}\n        ${l}\n        ${r?Y["text-italic"]:""}\n        ${i?Y["text-underline"]:""}\n        ${o?Y[`text-${o}`]:""}\n        ${a?Y["text-uppercase"]:""}\n    `,g=(({mt:e,mb:t,my:n})=>({marginTop:void 0!==e?U(e):void 0!==n?U(n):void 0,marginBottom:void 0!==t?U(t):void 0!==n?U(n):void 0}))({mt:d,mb:u,my:c});return e.createElement(p,{className:v,style:{...g},...f},s)},G=({id:t,size:n="default",children:r,italic:i=!1,underline:o=!1,weight:a="400",uppercase:s=!1,className:l,...d})=>{const u=`\n        ${Y[`label-${n}`]}\n        ${l}\n        ${i?Y["text-italic"]:""}\n        ${o?Y["text-underline"]:""}\n        ${a?Y[`text-${a}`]:""}\n        ${s?Y["text-uppercase"]:""}\n    `;return e.createElement("label",{id:t,className:u,...d},r)};var Q="tab__L6aUc__0-1-7",Z="tab__title__xFdjn__0-1-7",ee="tab__description__rAdoH__0-1-7",te="tab--active__FJWr0__0-1-7",ne="tab--focus__iR-aJ__0-1-7",re="tab--has-description__Lu3Mi__0-1-7";const ie=({label:t,description:n,id:r})=>{const{activeTab:i,setActiveTab:o}=a(J),s=i===r,l=X(Q,{[te]:s,[re]:n});return e.createElement(O,{focusRingClass:ne},e.createElement("button",{id:r,role:"tab","aria-controls":`${r}-panel`,"aria-selected":s,className:l,onClick:()=>{o(r)}},e.createElement(G,{className:Z,weight:"600"},t),n&&e.createElement(q,{variant:"line",weight:"400",className:ee},n)))};export{ie as Tab};
//# sourceMappingURL=index.js.map
