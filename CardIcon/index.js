"use client";import e,{useRef as t,useMemo as n,useCallback as r,useEffect as i,useState as o,useContext as a,forwardRef as s}from"react";var l="base__bKnql__0-1-3";const u=({className:t,children:n})=>e.createElement("div",{className:`${l} ${t||""}`},n);var c="base__ym4Ti__0-1-3";const d=({children:t})=>e.createElement("div",{className:c},t);var p,g={exports:{}};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/p=g,function(){var e={}.hasOwnProperty;function t(){for(var n=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var o=typeof i;if("string"===o||"number"===o)n.push(i);else if(Array.isArray(i)){if(i.length){var a=t.apply(null,i);a&&n.push(a)}}else if("object"===o){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){n.push(i.toString());continue}for(var s in i)e.call(i,s)&&i[s]&&n.push(s)}}}return n.join(" ")}p.exports?(t.default=t,p.exports=t):window.classNames=t}();var v=g.exports,f="base__xQc03__0-1-3",m="grow__6FXF4__0-1-3";const h=({children:t,grow:n})=>e.createElement("div",{className:v(f,{[m]:n})},t);var y="base__QLfUP__0-1-3",T="gapSmall__7Ek-k__0-1-3",b="center__zbSlm__0-1-3";const E=({children:t,align:n,gap:r="medium"})=>e.createElement("div",{className:v(y,{[b]:"center"===n,[T]:"small"===r})},t);var _={};const P=({className:t,children:n})=>e.createElement("footer",{className:v(_.base,t)},n),w=e=>({0:"var(--eds-spacing-none)",1:"var(--eds-spacing-small-1)",2:"var(--eds-spacing-small-2)",3:"var(--eds-spacing-small-3)",4:"var(--eds-spacing-small-4)",5:"var(--eds-spacing-small-5)",6:"var(--eds-spacing-medium-1)",7:"var(--eds-spacing-medium-2)",8:"var(--eds-spacing-medium-3)",9:"var(--eds-spacing-medium-4)",10:"var(--eds-spacing-medium-5)",11:"var(--eds-spacing-medium-6)",12:"var(--eds-spacing-medium-7)",13:"var(--eds-spacing-medium-8)",14:"var(--eds-spacing-large-1)",15:"var(--eds-spacing-large-2)",16:"var(--eds-spacing-large-3)",17:"var(--eds-spacing-large-4)",18:"var(--eds-spacing-large-5)"}[e]||"0px"),x=({mt:e,mb:t,my:n})=>({marginTop:void 0!==e?w(e):void 0!==n?w(n):void 0,marginBottom:void 0!==t?w(t):void 0!==n?w(n):void 0});var L={"heading-h1":"heading-h1__00OVp__0-1-3","heading-h2":"heading-h2__uf8XO__0-1-3","heading-h3":"heading-h3__b58IP__0-1-3","heading-h4":"heading-h4__x0dIm__0-1-3","heading-h5":"heading-h5__dHW8C__0-1-3","heading-h6":"heading-h6__FSif0__0-1-3","heading-display":"heading-display__1B20E__0-1-3","heading-leadtext":"heading-leadtext__fbf5X__0-1-3","heading-subheadline":"heading-subheadline__xgXDJ__0-1-3","text-p-small":"text-p-small__U5YeB__0-1-3","text-p-default":"text-p-default__T3Gv7__0-1-3","text-p-large":"text-p-large__k4P5K__0-1-3","text-line-tiny":"text-line-tiny__IdKxY__0-1-3","text-line-small":"text-line-small__VDnxz__0-1-3","text-line-default":"text-line-default__HHLev__0-1-3","text-line-large":"text-line-large__zY6Xt__0-1-3","text-list-default":"text-list-default__9dn8h__0-1-3","label-tiny":"label-tiny__fwERw__0-1-3","label-small":"label-small__7hSFb__0-1-3","label-default":"label-default__TzEjW__0-1-3","label-large":"label-large__Xe0s7__0-1-3","text-italic":"text-italic__9j6-k__0-1-3","text-underline":"text-underline__-idVq__0-1-3","text-uppercase":"text-uppercase__zT285__0-1-3","text-400":"text-400__veahz__0-1-3","text-600":"text-600__SOu9h__0-1-3"};const M=({id:t,variant:n,as:r,italic:i=!1,underline:o=!1,weight:a="600",uppercase:s=!1,children:l,className:u,mt:c,mb:d,my:p,...g})=>{const v=r||function(e){switch(e){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":case"p":case"ol":case"ul":return e;case"line":return"p";case"list":return"ol";default:return"div"}}(n),f=`\n        ${L[`heading-${n}`]}\n        ${u}\n        ${i?L["text-italic"]:""}\n        ${o?L["text-underline"]:""}\n        ${a?L[`text-${a}`]:""}\n        ${s?L["text-uppercase"]:""}\n    `,m=x({mt:c,mb:d,my:p});return e.createElement(v,{id:t,className:f,style:{...m},...g},l)},S=({variant:t="p",size:n="default",italic:r=!1,underline:i=!1,weight:o="400",uppercase:a=!1,children:s,className:l,mt:u,mb:c,my:d,...p})=>{const g="p"===t?"p":"list"===t?"ul":"div",v=`\n        ${L[`text-${t}-${n}`]}\n        ${l}\n        ${r?L["text-italic"]:""}\n        ${i?L["text-underline"]:""}\n        ${o?L[`text-${o}`]:""}\n        ${a?L["text-uppercase"]:""}\n    `,f=x({mt:u,mb:c,my:d});return e.createElement(g,{className:v,style:{...f},...p},s)};var k="base__2qX17__0-1-3";const K=({className:t,title:n,...r})=>e.createElement(M,{variant:"h5",className:v(k,t),...r},n);var F="base__XXFx4__0-1-3",O="date__fJsOL__0-1-3";const N=({title:t,className:n,date:r,children:i})=>e.createElement("header",{className:`${F} ${n||""}`},i,e.createElement(K,{title:t}),r&&e.createElement(S,{variant:"line",size:"small"},e.createElement("time",{className:O,dateTime:r},r)));function C(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=C(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function D(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=C(e))&&(r&&(r+=" "),r+=t);return r}const I="undefined"!=typeof document?e.useLayoutEffect:()=>{};function A(e){const n=t(null);return I((()=>{n.current=e}),[e]),r(((...e)=>{const t=n.current;return null==t?void 0:t(...e)}),[])}let H=new Map;function R(e,t){if(e===t)return e;let n=H.get(e);if(n)return n(t),t;let r=H.get(t);return r?(r(e),e):t}function $(...e){return(...t)=>{for(let n of e)"function"==typeof n&&n(...t)}}const W=e=>{var t;return null!==(t=null==e?void 0:e.ownerDocument)&&void 0!==t?t:document},z=e=>{if(e&&"window"in e&&e.window===e)return e;return W(e).defaultView||window};function U(...e){let t={...e[0]};for(let n=1;n<e.length;n++){let r=e[n];for(let e in r){let n=t[e],i=r[e];"function"==typeof n&&"function"==typeof i&&"o"===e[0]&&"n"===e[1]&&e.charCodeAt(2)>=65&&e.charCodeAt(2)<=90?t[e]=$(n,i):"className"!==e&&"UNSAFE_className"!==e||"string"!=typeof n||"string"!=typeof i?"id"===e&&n&&i?t.id=R(n,i):t[e]=void 0!==i?i:n:t[e]=D(n,i)}}return t}const X=new Set(["id"]),V=new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]),B=new Set(["href","target","rel","download","ping","referrerPolicy"]),j=/^(data-.*)$/;function G(e){if(function(){if(null==Y){Y=!1;try{document.createElement("div").focus({get preventScroll(){return Y=!0,!0}})}catch(e){}}return Y}())e.focus({preventScroll:!0});else{let t=function(e){let t=e.parentNode,n=[],r=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==r;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;r instanceof HTMLElement&&n.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft});return n}(e);e.focus(),function(e){for(let{element:t,scrollTop:n,scrollLeft:r}of e)t.scrollTop=n,t.scrollLeft=r}(t)}}let Y=null;function q(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.brands.some((t=>e.test(t.brand))))||e.test(window.navigator.userAgent))}function J(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&e.test((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.platform)||window.navigator.platform)}function Q(){return J(/^Mac/i)}function Z(){return J(/^iPad/i)||Q()&&navigator.maxTouchPoints>1}function ee(){return J(/^iPhone/i)||Z()}function te(){return q(/AppleWebKit/i)&&!q(/Chrome/i)}function ne(){return q(/Android/i)}function re(e,t,n=!0){var r,i;let{metaKey:o,ctrlKey:a,altKey:s,shiftKey:l}=t;q(/Firefox/i)&&(null===(i=window.event)||void 0===i||null===(r=i.type)||void 0===r?void 0:r.startsWith("key"))&&"_blank"===e.target&&(Q()?o=!0:a=!0);let u=te()&&Q()&&!Z()?new KeyboardEvent("keydown",{keyIdentifier:"Enter",metaKey:o,ctrlKey:a,altKey:s,shiftKey:l}):new MouseEvent("click",{metaKey:o,ctrlKey:a,altKey:s,shiftKey:l,bubbles:!0,cancelable:!0});re.isOpening=n,G(e),e.dispatchEvent(u),re.isOpening=!1}re.isOpening=!1;let ie=new Map,oe=new Set;function ae(){if("undefined"==typeof window)return;function e(e){return"propertyName"in e}let t=n=>{if(!e(n)||!n.target)return;let r=ie.get(n.target);if(r&&(r.delete(n.propertyName),0===r.size&&(n.target.removeEventListener("transitioncancel",t),ie.delete(n.target)),0===ie.size)){for(let e of oe)e();oe.clear()}};document.body.addEventListener("transitionrun",(n=>{if(!e(n)||!n.target)return;let r=ie.get(n.target);r||(r=new Set,ie.set(n.target,r),n.target.addEventListener("transitioncancel",t,{once:!0})),r.add(n.propertyName)})),document.body.addEventListener("transitionend",t)}function se(e){requestAnimationFrame((()=>{0===ie.size?e():oe.add(e)}))}function le(e,t){I((()=>{if(e&&e.ref&&t)return e.ref.current=t.current,()=>{e.ref&&(e.ref.current=null)}}))}function ue(e){return!(0!==e.mozInputSource||!e.isTrusted)||(ne()&&e.pointerType?"click"===e.type&&1===e.buttons:0===e.detail&&!e.pointerType)}function ce(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function de(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}function pe(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,ce(e,t,"set"),n),n}"undefined"!=typeof document&&("loading"!==document.readyState?ae():document.addEventListener("DOMContentLoaded",ae));let ge="default",ve="",fe=new WeakMap;function me(e){if(ee()){if("default"===ge){const t=W(e);ve=t.documentElement.style.webkitUserSelect,t.documentElement.style.webkitUserSelect="none"}ge="disabled"}else(e instanceof HTMLElement||e instanceof SVGElement)&&(fe.set(e,e.style.userSelect),e.style.userSelect="none")}function he(e){if(ee()){if("disabled"!==ge)return;ge="restoring",setTimeout((()=>{se((()=>{if("restoring"===ge){const t=W(e);"none"===t.documentElement.style.webkitUserSelect&&(t.documentElement.style.webkitUserSelect=ve||""),ve="",ge="default"}}))}),300)}else if((e instanceof HTMLElement||e instanceof SVGElement)&&e&&fe.has(e)){let t=fe.get(e);"none"===e.style.userSelect&&(e.style.userSelect=t),""===e.getAttribute("style")&&e.removeAttribute("style"),fe.delete(e)}}const ye=e.createContext({register:()=>{}});ye.displayName="PressResponderContext";var Te=new WeakMap;class be{continuePropagation(){pe(this,Te,!1)}get shouldStopPropagation(){return function(e,t){return t.get?t.get.call(e):t.value}(e=this,ce(e,Te,"get"));var e}constructor(e,t,n){de(this,Te,{writable:!0,value:void 0}),pe(this,Te,!0),this.type=e,this.pointerType=t,this.target=n.currentTarget,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.ctrlKey=n.ctrlKey,this.altKey=n.altKey}}const Ee=Symbol("linkClicked");function _e(e){let{onPress:s,onPressChange:l,onPressStart:u,onPressEnd:c,onPressUp:d,isDisabled:p,isPressed:g,preventFocusOnPress:v,shouldCancelOnPointerExit:f,allowTextSelectionOnPress:m,ref:h,...y}=function(e){let t=a(ye);if(t){let{register:n,...r}=t;e=U(r,e),n()}return le(t,e.ref),e}(e),[T,b]=o(!1),E=t({isPressed:!1,ignoreEmulatedMouseEvents:!1,ignoreClickAfterPress:!1,didFirePressStart:!1,isTriggeringEvent:!1,activePointerId:null,target:null,isOverTarget:!1,pointerType:null}),{addGlobalListener:_,removeAllGlobalListeners:P}=function(){let e=t(new Map),n=r(((t,n,r,i)=>{let o=(null==i?void 0:i.once)?(...t)=>{e.current.delete(r),r(...t)}:r;e.current.set(r,{type:n,eventTarget:t,fn:o,options:i}),t.addEventListener(n,r,i)}),[]),o=r(((t,n,r,i)=>{var o;let a=(null===(o=e.current.get(r))||void 0===o?void 0:o.fn)||r;t.removeEventListener(n,a,i),e.current.delete(r)}),[]),a=r((()=>{e.current.forEach(((e,t)=>{o(e.eventTarget,e.type,t,e.options)}))}),[o]);return i((()=>a),[a]),{addGlobalListener:n,removeGlobalListener:o,removeAllGlobalListeners:a}}(),w=A(((e,t)=>{let n=E.current;if(p||n.didFirePressStart)return!1;let r=!0;if(n.isTriggeringEvent=!0,u){let n=new be("pressstart",t,e);u(n),r=n.shouldStopPropagation}return l&&l(!0),n.isTriggeringEvent=!1,n.didFirePressStart=!0,b(!0),r})),x=A(((e,t,n=!0)=>{let r=E.current;if(!r.didFirePressStart)return!1;r.ignoreClickAfterPress=!0,r.didFirePressStart=!1,r.isTriggeringEvent=!0;let i=!0;if(c){let n=new be("pressend",t,e);c(n),i=n.shouldStopPropagation}if(l&&l(!1),b(!1),s&&n&&!p){let n=new be("press",t,e);s(n),i&&(i=n.shouldStopPropagation)}return r.isTriggeringEvent=!1,i})),L=A(((e,t)=>{let n=E.current;if(p)return!1;if(d){n.isTriggeringEvent=!0;let r=new be("pressup",t,e);return d(r),n.isTriggeringEvent=!1,r.shouldStopPropagation}return!0})),M=A((e=>{let t=E.current;t.isPressed&&t.target&&(t.isOverTarget&&null!=t.pointerType&&x(Le(t.target,e),t.pointerType,!1),t.isPressed=!1,t.isOverTarget=!1,t.activePointerId=null,t.pointerType=null,P(),m||he(t.target))})),S=A((e=>{f&&M(e)})),k=n((()=>{let e=E.current,t={onKeyDown(t){if(we(t.nativeEvent,t.currentTarget)&&t.currentTarget.contains(t.target)){var r;ke(t.target,t.key)&&t.preventDefault();let i=!0;if(!e.isPressed&&!t.repeat){e.target=t.currentTarget,e.isPressed=!0,i=w(t,"keyboard");let r=t.currentTarget,o=t=>{we(t,r)&&!t.repeat&&r.contains(t.target)&&e.target&&L(Le(e.target,t),"keyboard")};_(W(t.currentTarget),"keyup",$(o,n),!0)}i&&t.stopPropagation(),t.metaKey&&Q()&&(null===(r=e.metaKeyEvents)||void 0===r||r.set(t.key,t.nativeEvent))}else"Meta"===t.key&&(e.metaKeyEvents=new Map)},onClick(t){if((!t||t.currentTarget.contains(t.target))&&t&&0===t.button&&!e.isTriggeringEvent&&!re.isOpening){let n=!0;if(p&&t.preventDefault(),!e.ignoreClickAfterPress&&!e.ignoreEmulatedMouseEvents&&!e.isPressed&&("virtual"===e.pointerType||ue(t.nativeEvent))){p||v||G(t.currentTarget);let e=w(t,"virtual"),r=L(t,"virtual"),i=x(t,"virtual");n=e&&r&&i}e.ignoreEmulatedMouseEvents=!1,e.ignoreClickAfterPress=!1,n&&t.stopPropagation()}}},n=t=>{var n;if(e.isPressed&&e.target&&we(t,e.target)){var r;ke(t.target,t.key)&&t.preventDefault();let n=t.target;x(Le(e.target,t),"keyboard",e.target.contains(n)),P(),"Enter"!==t.key&&Pe(e.target)&&e.target.contains(n)&&!t[Ee]&&(t[Ee]=!0,re(e.target,t,!1)),e.isPressed=!1,null===(r=e.metaKeyEvents)||void 0===r||r.delete(t.key)}else if("Meta"===t.key&&(null===(n=e.metaKeyEvents)||void 0===n?void 0:n.size)){var i;let t=e.metaKeyEvents;e.metaKeyEvents=void 0;for(let n of t.values())null===(i=e.target)||void 0===i||i.dispatchEvent(new KeyboardEvent("keyup",n))}};if("undefined"!=typeof PointerEvent){t.onPointerDown=t=>{if(0!==t.button||!t.currentTarget.contains(t.target))return;if(o=t.nativeEvent,!ne()&&0===o.width&&0===o.height||1===o.width&&1===o.height&&0===o.pressure&&0===o.detail&&"mouse"===o.pointerType)return void(e.pointerType="virtual");var o;Se(t.currentTarget)&&t.preventDefault(),e.pointerType=t.pointerType;let a=!0;e.isPressed||(e.isPressed=!0,e.isOverTarget=!0,e.activePointerId=t.pointerId,e.target=t.currentTarget,p||v||G(t.currentTarget),m||me(e.target),a=w(t,e.pointerType),_(W(t.currentTarget),"pointermove",n,!1),_(W(t.currentTarget),"pointerup",r,!1),_(W(t.currentTarget),"pointercancel",i,!1)),a&&t.stopPropagation()},t.onMouseDown=e=>{e.currentTarget.contains(e.target)&&0===e.button&&(Se(e.currentTarget)&&e.preventDefault(),e.stopPropagation())},t.onPointerUp=t=>{t.currentTarget.contains(t.target)&&"virtual"!==e.pointerType&&0===t.button&&Me(t,t.currentTarget)&&L(t,e.pointerType||t.pointerType)};let n=t=>{t.pointerId===e.activePointerId&&(e.target&&Me(t,e.target)?e.isOverTarget||null==e.pointerType||(e.isOverTarget=!0,w(Le(e.target,t),e.pointerType)):e.target&&e.isOverTarget&&null!=e.pointerType&&(e.isOverTarget=!1,x(Le(e.target,t),e.pointerType,!1),S(t)))},r=t=>{t.pointerId===e.activePointerId&&e.isPressed&&0===t.button&&e.target&&(Me(t,e.target)&&null!=e.pointerType?x(Le(e.target,t),e.pointerType):e.isOverTarget&&null!=e.pointerType&&x(Le(e.target,t),e.pointerType,!1),e.isPressed=!1,e.isOverTarget=!1,e.activePointerId=null,e.pointerType=null,P(),m||he(e.target))},i=e=>{M(e)};t.onDragStart=e=>{e.currentTarget.contains(e.target)&&M(e)}}else{t.onMouseDown=t=>{if(0!==t.button||!t.currentTarget.contains(t.target))return;if(Se(t.currentTarget)&&t.preventDefault(),e.ignoreEmulatedMouseEvents)return void t.stopPropagation();e.isPressed=!0,e.isOverTarget=!0,e.target=t.currentTarget,e.pointerType=ue(t.nativeEvent)?"virtual":"mouse",p||v||G(t.currentTarget),w(t,e.pointerType)&&t.stopPropagation(),_(W(t.currentTarget),"mouseup",n,!1)},t.onMouseEnter=t=>{if(!t.currentTarget.contains(t.target))return;let n=!0;e.isPressed&&!e.ignoreEmulatedMouseEvents&&null!=e.pointerType&&(e.isOverTarget=!0,n=w(t,e.pointerType)),n&&t.stopPropagation()},t.onMouseLeave=t=>{if(!t.currentTarget.contains(t.target))return;let n=!0;e.isPressed&&!e.ignoreEmulatedMouseEvents&&null!=e.pointerType&&(e.isOverTarget=!1,n=x(t,e.pointerType,!1),S(t)),n&&t.stopPropagation()},t.onMouseUp=t=>{t.currentTarget.contains(t.target)&&(e.ignoreEmulatedMouseEvents||0!==t.button||L(t,e.pointerType||"mouse"))};let n=t=>{0===t.button&&(e.isPressed=!1,P(),e.ignoreEmulatedMouseEvents?e.ignoreEmulatedMouseEvents=!1:(e.target&&Me(t,e.target)&&null!=e.pointerType?x(Le(e.target,t),e.pointerType):e.target&&e.isOverTarget&&null!=e.pointerType&&x(Le(e.target,t),e.pointerType,!1),e.isOverTarget=!1))};t.onTouchStart=t=>{if(!t.currentTarget.contains(t.target))return;let n=function(e){const{targetTouches:t}=e;return t.length>0?t[0]:null}(t.nativeEvent);n&&(e.activePointerId=n.identifier,e.ignoreEmulatedMouseEvents=!0,e.isOverTarget=!0,e.isPressed=!0,e.target=t.currentTarget,e.pointerType="touch",p||v||G(t.currentTarget),m||me(e.target),w(t,e.pointerType)&&t.stopPropagation(),_(z(t.currentTarget),"scroll",r,!0))},t.onTouchMove=t=>{if(!t.currentTarget.contains(t.target))return;if(!e.isPressed)return void t.stopPropagation();let n=xe(t.nativeEvent,e.activePointerId),r=!0;n&&Me(n,t.currentTarget)?e.isOverTarget||null==e.pointerType||(e.isOverTarget=!0,r=w(t,e.pointerType)):e.isOverTarget&&null!=e.pointerType&&(e.isOverTarget=!1,r=x(t,e.pointerType,!1),S(t)),r&&t.stopPropagation()},t.onTouchEnd=t=>{if(!t.currentTarget.contains(t.target))return;if(!e.isPressed)return void t.stopPropagation();let n=xe(t.nativeEvent,e.activePointerId),r=!0;n&&Me(n,t.currentTarget)&&null!=e.pointerType?(L(t,e.pointerType),r=x(t,e.pointerType)):e.isOverTarget&&null!=e.pointerType&&(r=x(t,e.pointerType,!1)),r&&t.stopPropagation(),e.isPressed=!1,e.activePointerId=null,e.isOverTarget=!1,e.ignoreEmulatedMouseEvents=!0,e.target&&!m&&he(e.target),P()},t.onTouchCancel=t=>{t.currentTarget.contains(t.target)&&(t.stopPropagation(),e.isPressed&&M(t))};let r=t=>{e.isPressed&&t.target.contains(e.target)&&M({currentTarget:e.target,shiftKey:!1,ctrlKey:!1,metaKey:!1,altKey:!1})};t.onDragStart=e=>{e.currentTarget.contains(e.target)&&M(e)}}return t}),[_,p,v,P,m,M,S,x,w,L]);return i((()=>()=>{var e;m||he(null!==(e=E.current.target)&&void 0!==e?e:void 0)}),[m]),{isPressed:g||T,pressProps:U(y,k)}}function Pe(e){return"A"===e.tagName&&e.hasAttribute("href")}function we(e,t){const{key:n,code:r}=e,i=t,o=i.getAttribute("role");return!("Enter"!==n&&" "!==n&&"Spacebar"!==n&&"Space"!==r||i instanceof z(i).HTMLInputElement&&!Fe(i,n)||i instanceof z(i).HTMLTextAreaElement||i.isContentEditable||("link"===o||!o&&Pe(i))&&"Enter"!==n)}function xe(e,t){const n=e.changedTouches;for(let e=0;e<n.length;e++){const r=n[e];if(r.identifier===t)return r}return null}function Le(e,t){return{currentTarget:e,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,altKey:t.altKey}}function Me(e,t){let n=t.getBoundingClientRect(),r=function(e){let t=0,n=0;return void 0!==e.width?t=e.width/2:void 0!==e.radiusX&&(t=e.radiusX),void 0!==e.height?n=e.height/2:void 0!==e.radiusY&&(n=e.radiusY),{top:e.clientY-n,right:e.clientX+t,bottom:e.clientY+n,left:e.clientX-t}}(e);return o=r,!((i=n).left>o.right||o.left>i.right||i.top>o.bottom||o.top>i.bottom);var i,o}function Se(e){return!(e instanceof HTMLElement&&e.hasAttribute("draggable"))}function ke(e,t){return e instanceof HTMLInputElement?!Fe(e,t):e instanceof HTMLButtonElement?"submit"!==e.type&&"reset"!==e.type:!Pe(e)}const Ke=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function Fe(e,t){return"checkbox"===e.type||"radio"===e.type?" "===t:Ke.has(e.type)}class Oe{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(e,t){this.nativeEvent=t,this.target=t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget,this.bubbles=t.bubbles,this.cancelable=t.cancelable,this.defaultPrevented=t.defaultPrevented,this.eventPhase=t.eventPhase,this.isTrusted=t.isTrusted,this.timeStamp=t.timeStamp,this.type=e}}function Ne(e){let n=t({isFocused:!1,observer:null});I((()=>{const e=n.current;return()=>{e.observer&&(e.observer.disconnect(),e.observer=null)}}),[]);let i=A((t=>{null==e||e(t)}));return r((e=>{if(e.target instanceof HTMLButtonElement||e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLSelectElement){n.current.isFocused=!0;let t=e.target,r=e=>{n.current.isFocused=!1,t.disabled&&i(new Oe("blur",e)),n.current.observer&&(n.current.observer.disconnect(),n.current.observer=null)};t.addEventListener("focusout",r,{once:!0}),n.current.observer=new MutationObserver((()=>{if(n.current.isFocused&&t.disabled){var e;null===(e=n.current.observer)||void 0===e||e.disconnect();let r=t===document.activeElement?null:document.activeElement;t.dispatchEvent(new FocusEvent("blur",{relatedTarget:r})),t.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:r}))}})),n.current.observer.observe(t,{attributes:!0,attributeFilter:["disabled"]})}}),[i])}function Ce(e){let{isDisabled:t,onFocus:n,onBlur:i,onFocusChange:o}=e;const a=r((e=>{if(e.target===e.currentTarget)return i&&i(e),o&&o(!1),!0}),[i,o]),s=Ne(a),l=r((e=>{e.target===e.currentTarget&&document.activeElement===e.target&&(n&&n(e),o&&o(!0),s(e))}),[o,n,s]);return{focusProps:{onFocus:!t&&(n||o||i)?l:void 0,onBlur:t||!i&&!o?void 0:a}}}let De=null,Ie=new Set,Ae=new Map,He=!1,Re=!1;const $e={Tab:!0,Escape:!0};function We(e,t){for(let n of Ie)n(e,t)}function ze(e){He=!0,function(e){return!(e.metaKey||!Q()&&e.altKey||e.ctrlKey||"Control"===e.key||"Shift"===e.key||"Meta"===e.key)}(e)&&(De="keyboard",We("keyboard",e))}function Ue(e){De="pointer","mousedown"!==e.type&&"pointerdown"!==e.type||(He=!0,We("pointer",e))}function Xe(e){ue(e)&&(He=!0,De="virtual")}function Ve(e){e.target!==window&&e.target!==document&&(He||Re||(De="virtual",We("virtual",e)),He=!1,Re=!1)}function Be(){He=!1,Re=!0}function je(e){if("undefined"==typeof window||Ae.get(z(e)))return;const t=z(e),n=W(e);let r=t.HTMLElement.prototype.focus;t.HTMLElement.prototype.focus=function(){He=!0,r.apply(this,arguments)},n.addEventListener("keydown",ze,!0),n.addEventListener("keyup",ze,!0),n.addEventListener("click",Xe,!0),t.addEventListener("focus",Ve,!0),t.addEventListener("blur",Be,!1),"undefined"!=typeof PointerEvent?(n.addEventListener("pointerdown",Ue,!0),n.addEventListener("pointermove",Ue,!0),n.addEventListener("pointerup",Ue,!0)):(n.addEventListener("mousedown",Ue,!0),n.addEventListener("mousemove",Ue,!0),n.addEventListener("mouseup",Ue,!0)),t.addEventListener("beforeunload",(()=>{Ge(e)}),{once:!0}),Ae.set(t,{focus:r})}const Ge=(e,t)=>{const n=z(e),r=W(e);t&&r.removeEventListener("DOMContentLoaded",t),Ae.has(n)&&(n.HTMLElement.prototype.focus=Ae.get(n).focus,r.removeEventListener("keydown",ze,!0),r.removeEventListener("keyup",ze,!0),r.removeEventListener("click",Xe,!0),n.removeEventListener("focus",Ve,!0),n.removeEventListener("blur",Be,!1),"undefined"!=typeof PointerEvent?(r.removeEventListener("pointerdown",Ue,!0),r.removeEventListener("pointermove",Ue,!0),r.removeEventListener("pointerup",Ue,!0)):(r.removeEventListener("mousedown",Ue,!0),r.removeEventListener("mousemove",Ue,!0),r.removeEventListener("mouseup",Ue,!0)),Ae.delete(n))};function Ye(){return"pointer"!==De}"undefined"!=typeof document&&function(e){const t=W(e);let n;"loading"!==t.readyState?je(e):(n=()=>{je(e)},t.addEventListener("DOMContentLoaded",n))}();const qe=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function Je(e,t,n){je(),i((()=>{let t=(t,r)=>{(function(e,t,n){var r;const i="undefined"!=typeof window?z(null==n?void 0:n.target).HTMLInputElement:HTMLInputElement,o="undefined"!=typeof window?z(null==n?void 0:n.target).HTMLTextAreaElement:HTMLTextAreaElement,a="undefined"!=typeof window?z(null==n?void 0:n.target).HTMLElement:HTMLElement,s="undefined"!=typeof window?z(null==n?void 0:n.target).KeyboardEvent:KeyboardEvent;return!((e=e||(null==n?void 0:n.target)instanceof i&&!qe.has(null==n||null===(r=n.target)||void 0===r?void 0:r.type)||(null==n?void 0:n.target)instanceof o||(null==n?void 0:n.target)instanceof a&&(null==n?void 0:n.target.isContentEditable))&&"keyboard"===t&&n instanceof s&&!$e[n.key])})(!!(null==n?void 0:n.isTextInput),t,r)&&e(Ye())};return Ie.add(t),()=>{Ie.delete(t)}}),t)}function Qe(e){if(!e)return;let t=!0;return n=>{let r={...n,preventDefault(){n.preventDefault()},isDefaultPrevented:()=>n.isDefaultPrevented(),stopPropagation(){console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")},continuePropagation(){t=!1}};e(r),t&&n.stopPropagation()}}function Ze(e){const t=W(e);if("virtual"===De){let n=t.activeElement;se((()=>{t.activeElement===n&&e.isConnected&&G(e)}))}else G(e)}function et(e,t){return!!e&&(!!t&&t.some((t=>t.contains(e))))}class tt{get size(){return this.fastMap.size}getTreeNode(e){return this.fastMap.get(e)}addTreeNode(e,t,n){let r=this.fastMap.get(null!=t?t:null);if(!r)return;let i=new nt({scopeRef:e});r.addChild(i),i.parent=r,this.fastMap.set(e,i),n&&(i.nodeToRestore=n)}addNode(e){this.fastMap.set(e.scopeRef,e)}removeTreeNode(e){if(null===e)return;let t=this.fastMap.get(e);if(!t)return;let n=t.parent;for(let e of this.traverse())e!==t&&t.nodeToRestore&&e.nodeToRestore&&t.scopeRef&&t.scopeRef.current&&et(e.nodeToRestore,t.scopeRef.current)&&(e.nodeToRestore=t.nodeToRestore);let r=t.children;n&&(n.removeChild(t),r.size>0&&r.forEach((e=>n&&n.addChild(e)))),this.fastMap.delete(t.scopeRef)}*traverse(e=this.root){if(null!=e.scopeRef&&(yield e),e.children.size>0)for(let t of e.children)yield*this.traverse(t)}clone(){var e;let t=new tt;var n;for(let r of this.traverse())t.addTreeNode(r.scopeRef,null!==(n=null===(e=r.parent)||void 0===e?void 0:e.scopeRef)&&void 0!==n?n:null,r.nodeToRestore);return t}constructor(){this.fastMap=new Map,this.root=new nt({scopeRef:null}),this.fastMap.set(null,this.root)}}class nt{addChild(e){this.children.add(e),e.parent=this}removeChild(e){this.children.delete(e),e.parent=void 0}constructor(e){this.children=new Set,this.contain=!1,this.scopeRef=e.scopeRef}}function rt(e={}){let{autoFocus:n=!1,isTextInput:i,within:a}=e,s=t({isFocused:!1,isFocusVisible:n||Ye()}),[l,u]=o(!1),[c,d]=o((()=>s.current.isFocused&&s.current.isFocusVisible)),p=r((()=>d(s.current.isFocused&&s.current.isFocusVisible)),[]),g=r((e=>{s.current.isFocused=e,u(e),p()}),[p]);Je((e=>{s.current.isFocusVisible=e,p()}),[],{isTextInput:i});let{focusProps:v}=Ce({isDisabled:a,onFocusChange:g}),{focusWithinProps:f}=function(e){let{isDisabled:n,onBlurWithin:i,onFocusWithin:o,onFocusWithinChange:a}=e,s=t({isFocusWithin:!1}),l=r((e=>{s.current.isFocusWithin&&!e.currentTarget.contains(e.relatedTarget)&&(s.current.isFocusWithin=!1,i&&i(e),a&&a(!1))}),[i,a,s]),u=Ne(l),c=r((e=>{s.current.isFocusWithin||document.activeElement!==e.target||(o&&o(e),a&&a(!0),s.current.isFocusWithin=!0,u(e))}),[o,a,u]);return n?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:c,onBlur:l}}}({isDisabled:!a,onFocusWithinChange:g});return{isFocused:l,isFocusVisible:c,focusProps:a?f:v}}new tt;let it=e.createContext(null);function ot(e,n){let{focusProps:r}=Ce(e),{keyboardProps:o}=function(e){return{keyboardProps:e.isDisabled?{}:{onKeyDown:Qe(e.onKeyDown),onKeyUp:Qe(e.onKeyUp)}}}(e),s=U(r,o),l=function(e){let t=a(it)||{};le(t,e);let{ref:n,...r}=t;return r}(n),u=e.isDisabled?{}:l,c=t(e.autoFocus);return i((()=>{c.current&&n.current&&Ze(n.current),c.current=!1}),[n]),{focusableProps:U({...s,tabIndex:e.excludeFromTabOrder&&!e.isDisabled?-1:void 0},u)}}function at(e,t){let n,{elementType:r="button",isDisabled:i,onPress:o,onPressStart:a,onPressEnd:s,onPressUp:l,onPressChange:u,preventFocusOnPress:c,allowFocusWhenDisabled:d,onClick:p,href:g,target:v,rel:f,type:m="button"}=e;n="button"===r?{type:m,disabled:i}:{role:"button",tabIndex:i?void 0:0,href:"a"===r&&i?void 0:g,target:"a"===r?v:void 0,type:"input"===r?m:void 0,disabled:"input"===r?i:void 0,"aria-disabled":i&&"input"!==r?i:void 0,rel:"a"===r?f:void 0};let{pressProps:h,isPressed:y}=_e({onPressStart:a,onPressEnd:s,onPressChange:u,onPress:o,onPressUp:l,isDisabled:i,preventFocusOnPress:c,ref:t}),{focusableProps:T}=ot(e,t);d&&(T.tabIndex=i?-1:T.tabIndex);let b=U(T,h,function(e,t={}){let{labelable:n,isLink:r,propNames:i}=t,o={};for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&(X.has(t)||n&&V.has(t)||r&&B.has(t)||(null==i?void 0:i.has(t))||j.test(t))&&(o[t]=e[t]);return o}(e,{labelable:!0}));return{isPressed:y,buttonProps:U(n,b,{"aria-haspopup":e["aria-haspopup"],"aria-expanded":e["aria-expanded"],"aria-controls":e["aria-controls"],"aria-pressed":e["aria-pressed"],onClick:e=>{p&&(p(e),console.warn("onClick is deprecated, please use onPress"))}})}}var st="base__Oc6n-__0-1-3",lt="focus-ring__zSD0-__0-1-3";s(((r,i)=>{const{children:o,className:a}=r,s=function(e){const r=t(null);return n((()=>({get current(){return r.current},set current(t){r.current=t,"function"==typeof e?e(t):e&&(e.current=t)}})),[e])}(i),l=t(null),u=s||l,{buttonProps:c}=at(r,u),{isFocusVisible:d,focusProps:p}=rt(),g=v(st,a,{[lt]:d}),f=U(c,p);return e.createElement("button",{...f,ref:u,className:g},e.createElement(S,{variant:"line",size:"small"},o))})).displayName="CardTag";var ut={base:"base__rjRhe__0-1-3"};const ct=({className:t,text:n,variant:r="descriptive",...i})=>e.createElement(S,{className:v(ut.base,t,{[ut.supportive]:"supportive"===r}),...i},n);var dt="base__yN-p-__0-1-3";const pt=({className:t,children:n})=>e.createElement("div",{className:v(dt,t)},n);var gt="footer__0wClb__0-1-3";const vt=({title:t,description:n,icon:r,actions:i,className:o="",grow:a=!1})=>e.createElement(u,{className:o},e.createElement(E,{gap:"small"},e.createElement(N,{title:t},e.createElement(pt,null,r)),e.createElement(h,{grow:a},e.createElement(ct,{text:n})),i&&e.createElement(P,{className:gt},e.createElement(d,null,i))));export{vt as CardIcon};
//# sourceMappingURL=index.js.map
