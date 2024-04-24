"use client";import e,{useRef as t,useMemo as n,useContext as r,useCallback as i,createContext as o,useEffect as s,useState as a,forwardRef as l}from"react";function u(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=u(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function c(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=u(e))&&(r&&(r+=" "),r+=t);return r}const d="undefined"!=typeof document?e.useLayoutEffect:()=>{};function p(e){const n=t(null);return d((()=>{n.current=e}),[e]),i(((...e)=>{const t=n.current;return null==t?void 0:t(...e)}),[])}let f=new Map;function g(e,t){if(e===t)return e;let n=f.get(e);if(n)return n(t),t;let r=f.get(t);return r?(r(e),e):t}function v(...e){return(...t)=>{for(let n of e)"function"==typeof n&&n(...t)}}const y=e=>{var t;return null!==(t=null==e?void 0:e.ownerDocument)&&void 0!==t?t:document},T=e=>{if(e&&"window"in e&&e.window===e)return e;return y(e).defaultView||window};function h(...e){let t={...e[0]};for(let n=1;n<e.length;n++){let r=e[n];for(let e in r){let n=t[e],i=r[e];"function"==typeof n&&"function"==typeof i&&"o"===e[0]&&"n"===e[1]&&e.charCodeAt(2)>=65&&e.charCodeAt(2)<=90?t[e]=v(n,i):"className"!==e&&"UNSAFE_className"!==e||"string"!=typeof n||"string"!=typeof i?"id"===e&&n&&i?t.id=g(n,i):t[e]=void 0!==i?i:n:t[e]=c(n,i)}}return t}const m=new Set(["id"]),E=new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]),b=new Set(["href","target","rel","download","ping","referrerPolicy"]),P=/^(data-.*)$/;function w(e){if(function(){if(null==L){L=!1;try{document.createElement("div").focus({get preventScroll(){return L=!0,!0}})}catch(e){}}return L}())e.focus({preventScroll:!0});else{let t=function(e){let t=e.parentNode,n=[],r=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==r;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;r instanceof HTMLElement&&n.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft});return n}(e);e.focus(),function(e){for(let{element:t,scrollTop:n,scrollLeft:r}of e)t.scrollTop=n,t.scrollLeft=r}(t)}}let L=null;function k(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.brands.some((t=>e.test(t.brand))))||e.test(window.navigator.userAgent))}function M(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&e.test((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.platform)||window.navigator.platform)}function K(){return M(/^Mac/i)}function S(){return M(/^iPad/i)||K()&&navigator.maxTouchPoints>1}function A(){return M(/^iPhone/i)||S()}function F(){return k(/AppleWebKit/i)&&!k(/Chrome/i)}function C(){return k(/Android/i)}const D=o({isNative:!0,open:function(e,t){!function(e,t){if(e instanceof HTMLAnchorElement)t(e);else if(e.hasAttribute("data-href")){let n=document.createElement("a");n.href=e.getAttribute("data-href"),e.hasAttribute("data-target")&&(n.target=e.getAttribute("data-target")),e.hasAttribute("data-rel")&&(n.rel=e.getAttribute("data-rel")),e.hasAttribute("data-download")&&(n.download=e.getAttribute("data-download")),e.hasAttribute("data-ping")&&(n.ping=e.getAttribute("data-ping")),e.hasAttribute("data-referrer-policy")&&(n.referrerPolicy=e.getAttribute("data-referrer-policy")),e.appendChild(n),t(n),e.removeChild(n)}}(e,(e=>O(e,t)))}});function O(e,t,n=!0){var r,i;let{metaKey:o,ctrlKey:s,altKey:a,shiftKey:l}=t;k(/Firefox/i)&&(null===(i=window.event)||void 0===i||null===(r=i.type)||void 0===r?void 0:r.startsWith("key"))&&"_blank"===e.target&&(K()?o=!0:s=!0);let u=F()&&K()&&!S()?new KeyboardEvent("keydown",{keyIdentifier:"Enter",metaKey:o,ctrlKey:s,altKey:a,shiftKey:l}):new MouseEvent("click",{metaKey:o,ctrlKey:s,altKey:a,shiftKey:l,bubbles:!0,cancelable:!0});O.isOpening=n,w(e),e.dispatchEvent(u),O.isOpening=!1}O.isOpening=!1;let _=new Map,x=new Set;function H(){if("undefined"==typeof window)return;function e(e){return"propertyName"in e}let t=n=>{if(!e(n)||!n.target)return;let r=_.get(n.target);if(r&&(r.delete(n.propertyName),0===r.size&&(n.target.removeEventListener("transitioncancel",t),_.delete(n.target)),0===_.size)){for(let e of x)e();x.clear()}};document.body.addEventListener("transitionrun",(n=>{if(!e(n)||!n.target)return;let r=_.get(n.target);r||(r=new Set,_.set(n.target,r),n.target.addEventListener("transitioncancel",t,{once:!0})),r.add(n.propertyName)})),document.body.addEventListener("transitionend",t)}function I(e){requestAnimationFrame((()=>{0===_.size?e():x.add(e)}))}function N(e,t){d((()=>{if(e&&e.ref&&t)return e.ref.current=t.current,()=>{e.ref&&(e.ref.current=null)}}))}function R(e){return!(0!==e.mozInputSource||!e.isTrusted)||(C()&&e.pointerType?"click"===e.type&&1===e.buttons:0===e.detail&&!e.pointerType)}function W(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function z(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}function U(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,W(e,t,"set"),n),n}"undefined"!=typeof document&&("loading"!==document.readyState?H():document.addEventListener("DOMContentLoaded",H));let V="default",B="",G=new WeakMap;function j(e){if(A()){if("default"===V){const t=y(e);B=t.documentElement.style.webkitUserSelect,t.documentElement.style.webkitUserSelect="none"}V="disabled"}else(e instanceof HTMLElement||e instanceof SVGElement)&&(G.set(e,e.style.userSelect),e.style.userSelect="none")}function Y(e){if(A()){if("disabled"!==V)return;V="restoring",setTimeout((()=>{I((()=>{if("restoring"===V){const t=y(e);"none"===t.documentElement.style.webkitUserSelect&&(t.documentElement.style.webkitUserSelect=B||""),B="",V="default"}}))}),300)}else if((e instanceof HTMLElement||e instanceof SVGElement)&&e&&G.has(e)){let t=G.get(e);"none"===e.style.userSelect&&(e.style.userSelect=t),""===e.getAttribute("style")&&e.removeAttribute("style"),G.delete(e)}}const X=e.createContext({register:()=>{}});X.displayName="PressResponderContext";var $=new WeakMap;class q{continuePropagation(){U(this,$,!1)}get shouldStopPropagation(){return function(e,t){return t.get?t.get.call(e):t.value}(e=this,W(e,$,"get"));var e}constructor(e,t,n){z(this,$,{writable:!0,value:void 0}),U(this,$,!0),this.type=e,this.pointerType=t,this.target=n.currentTarget,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.ctrlKey=n.ctrlKey,this.altKey=n.altKey}}const J=Symbol("linkClicked");function Z(e){let{onPress:o,onPressChange:l,onPressStart:u,onPressEnd:c,onPressUp:d,isDisabled:f,isPressed:g,preventFocusOnPress:m,shouldCancelOnPointerExit:E,allowTextSelectionOnPress:b,ref:P,...L}=function(e){let t=r(X);if(t){let{register:n,...r}=t;e=h(r,e),n()}return N(t,e.ref),e}(e),[k,M]=a(!1),S=t({isPressed:!1,ignoreEmulatedMouseEvents:!1,ignoreClickAfterPress:!1,didFirePressStart:!1,isTriggeringEvent:!1,activePointerId:null,target:null,isOverTarget:!1,pointerType:null}),{addGlobalListener:A,removeAllGlobalListeners:F}=function(){let e=t(new Map),n=i(((t,n,r,i)=>{let o=(null==i?void 0:i.once)?(...t)=>{e.current.delete(r),r(...t)}:r;e.current.set(r,{type:n,eventTarget:t,fn:o,options:i}),t.addEventListener(n,r,i)}),[]),r=i(((t,n,r,i)=>{var o;let s=(null===(o=e.current.get(r))||void 0===o?void 0:o.fn)||r;t.removeEventListener(n,s,i),e.current.delete(r)}),[]),o=i((()=>{e.current.forEach(((e,t)=>{r(e.eventTarget,e.type,t,e.options)}))}),[r]);return s((()=>o),[o]),{addGlobalListener:n,removeGlobalListener:r,removeAllGlobalListeners:o}}(),D=p(((e,t)=>{let n=S.current;if(f||n.didFirePressStart)return!1;let r=!0;if(n.isTriggeringEvent=!0,u){let n=new q("pressstart",t,e);u(n),r=n.shouldStopPropagation}return l&&l(!0),n.isTriggeringEvent=!1,n.didFirePressStart=!0,M(!0),r})),_=p(((e,t,n=!0)=>{let r=S.current;if(!r.didFirePressStart)return!1;r.ignoreClickAfterPress=!0,r.didFirePressStart=!1,r.isTriggeringEvent=!0;let i=!0;if(c){let n=new q("pressend",t,e);c(n),i=n.shouldStopPropagation}if(l&&l(!1),M(!1),o&&n&&!f){let n=new q("press",t,e);o(n),i&&(i=n.shouldStopPropagation)}return r.isTriggeringEvent=!1,i})),x=p(((e,t)=>{let n=S.current;if(f)return!1;if(d){n.isTriggeringEvent=!0;let r=new q("pressup",t,e);return d(r),n.isTriggeringEvent=!1,r.shouldStopPropagation}return!0})),H=p((e=>{let t=S.current;t.isPressed&&t.target&&(t.isOverTarget&&null!=t.pointerType&&_(ne(t.target,e),t.pointerType,!1),t.isPressed=!1,t.isOverTarget=!1,t.activePointerId=null,t.pointerType=null,F(),b||Y(t.target))})),I=p((e=>{E&&H(e)})),W=n((()=>{let e=S.current,t={onKeyDown(t){if(ee(t.nativeEvent,t.currentTarget)&&t.currentTarget.contains(t.target)){var r;oe(t.target,t.key)&&t.preventDefault();let i=!0;if(!e.isPressed&&!t.repeat){e.target=t.currentTarget,e.isPressed=!0,i=D(t,"keyboard");let r=t.currentTarget,o=t=>{ee(t,r)&&!t.repeat&&r.contains(t.target)&&e.target&&x(ne(e.target,t),"keyboard")};A(y(t.currentTarget),"keyup",v(o,n),!0)}i&&t.stopPropagation(),t.metaKey&&K()&&(null===(r=e.metaKeyEvents)||void 0===r||r.set(t.key,t.nativeEvent))}else"Meta"===t.key&&(e.metaKeyEvents=new Map)},onClick(t){if((!t||t.currentTarget.contains(t.target))&&t&&0===t.button&&!e.isTriggeringEvent&&!O.isOpening){let n=!0;if(f&&t.preventDefault(),!e.ignoreClickAfterPress&&!e.ignoreEmulatedMouseEvents&&!e.isPressed&&("virtual"===e.pointerType||R(t.nativeEvent))){f||m||w(t.currentTarget);let e=D(t,"virtual"),r=x(t,"virtual"),i=_(t,"virtual");n=e&&r&&i}e.ignoreEmulatedMouseEvents=!1,e.ignoreClickAfterPress=!1,n&&t.stopPropagation()}}},n=t=>{var n;if(e.isPressed&&e.target&&ee(t,e.target)){var r;oe(t.target,t.key)&&t.preventDefault();let n=t.target;_(ne(e.target,t),"keyboard",e.target.contains(n)),F(),"Enter"!==t.key&&Q(e.target)&&e.target.contains(n)&&!t[J]&&(t[J]=!0,O(e.target,t,!1)),e.isPressed=!1,null===(r=e.metaKeyEvents)||void 0===r||r.delete(t.key)}else if("Meta"===t.key&&(null===(n=e.metaKeyEvents)||void 0===n?void 0:n.size)){var i;let t=e.metaKeyEvents;e.metaKeyEvents=void 0;for(let n of t.values())null===(i=e.target)||void 0===i||i.dispatchEvent(new KeyboardEvent("keyup",n))}};if("undefined"!=typeof PointerEvent){t.onPointerDown=t=>{if(0!==t.button||!t.currentTarget.contains(t.target))return;if(o=t.nativeEvent,!C()&&0===o.width&&0===o.height||1===o.width&&1===o.height&&0===o.pressure&&0===o.detail&&"mouse"===o.pointerType)return void(e.pointerType="virtual");var o;ie(t.currentTarget)&&t.preventDefault(),e.pointerType=t.pointerType;let s=!0;e.isPressed||(e.isPressed=!0,e.isOverTarget=!0,e.activePointerId=t.pointerId,e.target=t.currentTarget,f||m||w(t.currentTarget),b||j(e.target),s=D(t,e.pointerType),A(y(t.currentTarget),"pointermove",n,!1),A(y(t.currentTarget),"pointerup",r,!1),A(y(t.currentTarget),"pointercancel",i,!1)),s&&t.stopPropagation()},t.onMouseDown=e=>{e.currentTarget.contains(e.target)&&0===e.button&&(ie(e.currentTarget)&&e.preventDefault(),e.stopPropagation())},t.onPointerUp=t=>{t.currentTarget.contains(t.target)&&"virtual"!==e.pointerType&&0===t.button&&re(t,t.currentTarget)&&x(t,e.pointerType||t.pointerType)};let n=t=>{t.pointerId===e.activePointerId&&(e.target&&re(t,e.target)?e.isOverTarget||null==e.pointerType||(e.isOverTarget=!0,D(ne(e.target,t),e.pointerType)):e.target&&e.isOverTarget&&null!=e.pointerType&&(e.isOverTarget=!1,_(ne(e.target,t),e.pointerType,!1),I(t)))},r=t=>{t.pointerId===e.activePointerId&&e.isPressed&&0===t.button&&e.target&&(re(t,e.target)&&null!=e.pointerType?_(ne(e.target,t),e.pointerType):e.isOverTarget&&null!=e.pointerType&&_(ne(e.target,t),e.pointerType,!1),e.isPressed=!1,e.isOverTarget=!1,e.activePointerId=null,e.pointerType=null,F(),b||Y(e.target))},i=e=>{H(e)};t.onDragStart=e=>{e.currentTarget.contains(e.target)&&H(e)}}else{t.onMouseDown=t=>{if(0!==t.button||!t.currentTarget.contains(t.target))return;if(ie(t.currentTarget)&&t.preventDefault(),e.ignoreEmulatedMouseEvents)return void t.stopPropagation();e.isPressed=!0,e.isOverTarget=!0,e.target=t.currentTarget,e.pointerType=R(t.nativeEvent)?"virtual":"mouse",f||m||w(t.currentTarget),D(t,e.pointerType)&&t.stopPropagation(),A(y(t.currentTarget),"mouseup",n,!1)},t.onMouseEnter=t=>{if(!t.currentTarget.contains(t.target))return;let n=!0;e.isPressed&&!e.ignoreEmulatedMouseEvents&&null!=e.pointerType&&(e.isOverTarget=!0,n=D(t,e.pointerType)),n&&t.stopPropagation()},t.onMouseLeave=t=>{if(!t.currentTarget.contains(t.target))return;let n=!0;e.isPressed&&!e.ignoreEmulatedMouseEvents&&null!=e.pointerType&&(e.isOverTarget=!1,n=_(t,e.pointerType,!1),I(t)),n&&t.stopPropagation()},t.onMouseUp=t=>{t.currentTarget.contains(t.target)&&(e.ignoreEmulatedMouseEvents||0!==t.button||x(t,e.pointerType||"mouse"))};let n=t=>{0===t.button&&(e.isPressed=!1,F(),e.ignoreEmulatedMouseEvents?e.ignoreEmulatedMouseEvents=!1:(e.target&&re(t,e.target)&&null!=e.pointerType?_(ne(e.target,t),e.pointerType):e.target&&e.isOverTarget&&null!=e.pointerType&&_(ne(e.target,t),e.pointerType,!1),e.isOverTarget=!1))};t.onTouchStart=t=>{if(!t.currentTarget.contains(t.target))return;let n=function(e){const{targetTouches:t}=e;return t.length>0?t[0]:null}(t.nativeEvent);n&&(e.activePointerId=n.identifier,e.ignoreEmulatedMouseEvents=!0,e.isOverTarget=!0,e.isPressed=!0,e.target=t.currentTarget,e.pointerType="touch",f||m||w(t.currentTarget),b||j(e.target),D(t,e.pointerType)&&t.stopPropagation(),A(T(t.currentTarget),"scroll",r,!0))},t.onTouchMove=t=>{if(!t.currentTarget.contains(t.target))return;if(!e.isPressed)return void t.stopPropagation();let n=te(t.nativeEvent,e.activePointerId),r=!0;n&&re(n,t.currentTarget)?e.isOverTarget||null==e.pointerType||(e.isOverTarget=!0,r=D(t,e.pointerType)):e.isOverTarget&&null!=e.pointerType&&(e.isOverTarget=!1,r=_(t,e.pointerType,!1),I(t)),r&&t.stopPropagation()},t.onTouchEnd=t=>{if(!t.currentTarget.contains(t.target))return;if(!e.isPressed)return void t.stopPropagation();let n=te(t.nativeEvent,e.activePointerId),r=!0;n&&re(n,t.currentTarget)&&null!=e.pointerType?(x(t,e.pointerType),r=_(t,e.pointerType)):e.isOverTarget&&null!=e.pointerType&&(r=_(t,e.pointerType,!1)),r&&t.stopPropagation(),e.isPressed=!1,e.activePointerId=null,e.isOverTarget=!1,e.ignoreEmulatedMouseEvents=!0,e.target&&!b&&Y(e.target),F()},t.onTouchCancel=t=>{t.currentTarget.contains(t.target)&&(t.stopPropagation(),e.isPressed&&H(t))};let r=t=>{e.isPressed&&t.target.contains(e.target)&&H({currentTarget:e.target,shiftKey:!1,ctrlKey:!1,metaKey:!1,altKey:!1})};t.onDragStart=e=>{e.currentTarget.contains(e.target)&&H(e)}}return t}),[A,f,m,F,b,H,I,_,D,x]);return s((()=>()=>{var e;b||Y(null!==(e=S.current.target)&&void 0!==e?e:void 0)}),[b]),{isPressed:g||k,pressProps:h(L,W)}}function Q(e){return"A"===e.tagName&&e.hasAttribute("href")}function ee(e,t){const{key:n,code:r}=e,i=t,o=i.getAttribute("role");return!("Enter"!==n&&" "!==n&&"Spacebar"!==n&&"Space"!==r||i instanceof T(i).HTMLInputElement&&!ae(i,n)||i instanceof T(i).HTMLTextAreaElement||i.isContentEditable||("link"===o||!o&&Q(i))&&"Enter"!==n)}function te(e,t){const n=e.changedTouches;for(let e=0;e<n.length;e++){const r=n[e];if(r.identifier===t)return r}return null}function ne(e,t){return{currentTarget:e,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,altKey:t.altKey}}function re(e,t){let n=t.getBoundingClientRect(),r=function(e){let t=0,n=0;return void 0!==e.width?t=e.width/2:void 0!==e.radiusX&&(t=e.radiusX),void 0!==e.height?n=e.height/2:void 0!==e.radiusY&&(n=e.radiusY),{top:e.clientY-n,right:e.clientX+t,bottom:e.clientY+n,left:e.clientX-t}}(e);return o=r,!((i=n).left>o.right||o.left>i.right||i.top>o.bottom||o.top>i.bottom);var i,o}function ie(e){return!(e instanceof HTMLElement&&e.hasAttribute("draggable"))}function oe(e,t){return e instanceof HTMLInputElement?!ae(e,t):e instanceof HTMLButtonElement?"submit"!==e.type&&"reset"!==e.type:!Q(e)}const se=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function ae(e,t){return"checkbox"===e.type||"radio"===e.type?" "===t:se.has(e.type)}class le{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(e,t){this.nativeEvent=t,this.target=t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget,this.bubbles=t.bubbles,this.cancelable=t.cancelable,this.defaultPrevented=t.defaultPrevented,this.eventPhase=t.eventPhase,this.isTrusted=t.isTrusted,this.timeStamp=t.timeStamp,this.type=e}}function ue(e){let n=t({isFocused:!1,observer:null});d((()=>{const e=n.current;return()=>{e.observer&&(e.observer.disconnect(),e.observer=null)}}),[]);let r=p((t=>{null==e||e(t)}));return i((e=>{if(e.target instanceof HTMLButtonElement||e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLSelectElement){n.current.isFocused=!0;let t=e.target,i=e=>{n.current.isFocused=!1,t.disabled&&r(new le("blur",e)),n.current.observer&&(n.current.observer.disconnect(),n.current.observer=null)};t.addEventListener("focusout",i,{once:!0}),n.current.observer=new MutationObserver((()=>{if(n.current.isFocused&&t.disabled){var e;null===(e=n.current.observer)||void 0===e||e.disconnect();let r=t===document.activeElement?null:document.activeElement;t.dispatchEvent(new FocusEvent("blur",{relatedTarget:r})),t.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:r}))}})),n.current.observer.observe(t,{attributes:!0,attributeFilter:["disabled"]})}}),[r])}function ce(e){let{isDisabled:t,onFocus:n,onBlur:r,onFocusChange:o}=e;const s=i((e=>{if(e.target===e.currentTarget)return r&&r(e),o&&o(!1),!0}),[r,o]),a=ue(s),l=i((e=>{e.target===e.currentTarget&&document.activeElement===e.target&&(n&&n(e),o&&o(!0),a(e))}),[o,n,a]);return{focusProps:{onFocus:!t&&(n||o||r)?l:void 0,onBlur:t||!r&&!o?void 0:s}}}let de=null,pe=new Set,fe=new Map,ge=!1,ve=!1;const ye={Tab:!0,Escape:!0};function Te(e,t){for(let n of pe)n(e,t)}function he(e){ge=!0,function(e){return!(e.metaKey||!K()&&e.altKey||e.ctrlKey||"Control"===e.key||"Shift"===e.key||"Meta"===e.key)}(e)&&(de="keyboard",Te("keyboard",e))}function me(e){de="pointer","mousedown"!==e.type&&"pointerdown"!==e.type||(ge=!0,Te("pointer",e))}function Ee(e){R(e)&&(ge=!0,de="virtual")}function be(e){e.target!==window&&e.target!==document&&(ge||ve||(de="virtual",Te("virtual",e)),ge=!1,ve=!1)}function Pe(){ge=!1,ve=!0}function we(e){if("undefined"==typeof window||fe.get(T(e)))return;const t=T(e),n=y(e);let r=t.HTMLElement.prototype.focus;t.HTMLElement.prototype.focus=function(){ge=!0,r.apply(this,arguments)},n.addEventListener("keydown",he,!0),n.addEventListener("keyup",he,!0),n.addEventListener("click",Ee,!0),t.addEventListener("focus",be,!0),t.addEventListener("blur",Pe,!1),"undefined"!=typeof PointerEvent?(n.addEventListener("pointerdown",me,!0),n.addEventListener("pointermove",me,!0),n.addEventListener("pointerup",me,!0)):(n.addEventListener("mousedown",me,!0),n.addEventListener("mousemove",me,!0),n.addEventListener("mouseup",me,!0)),t.addEventListener("beforeunload",(()=>{Le(e)}),{once:!0}),fe.set(t,{focus:r})}const Le=(e,t)=>{const n=T(e),r=y(e);t&&r.removeEventListener("DOMContentLoaded",t),fe.has(n)&&(n.HTMLElement.prototype.focus=fe.get(n).focus,r.removeEventListener("keydown",he,!0),r.removeEventListener("keyup",he,!0),r.removeEventListener("click",Ee,!0),n.removeEventListener("focus",be,!0),n.removeEventListener("blur",Pe,!1),"undefined"!=typeof PointerEvent?(r.removeEventListener("pointerdown",me,!0),r.removeEventListener("pointermove",me,!0),r.removeEventListener("pointerup",me,!0)):(r.removeEventListener("mousedown",me,!0),r.removeEventListener("mousemove",me,!0),r.removeEventListener("mouseup",me,!0)),fe.delete(n))};function ke(){return"pointer"!==de}"undefined"!=typeof document&&function(e){const t=y(e);let n;"loading"!==t.readyState?we(e):(n=()=>{we(e)},t.addEventListener("DOMContentLoaded",n))}();const Me=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function Ke(e,t,n){we(),s((()=>{let t=(t,r)=>{(function(e,t,n){var r;const i="undefined"!=typeof window?T(null==n?void 0:n.target).HTMLInputElement:HTMLInputElement,o="undefined"!=typeof window?T(null==n?void 0:n.target).HTMLTextAreaElement:HTMLTextAreaElement,s="undefined"!=typeof window?T(null==n?void 0:n.target).HTMLElement:HTMLElement,a="undefined"!=typeof window?T(null==n?void 0:n.target).KeyboardEvent:KeyboardEvent;return!((e=e||(null==n?void 0:n.target)instanceof i&&!Me.has(null==n||null===(r=n.target)||void 0===r?void 0:r.type)||(null==n?void 0:n.target)instanceof o||(null==n?void 0:n.target)instanceof s&&(null==n?void 0:n.target.isContentEditable))&&"keyboard"===t&&n instanceof a&&!ye[n.key])})(!!(null==n?void 0:n.isTextInput),t,r)&&e(ke())};return pe.add(t),()=>{pe.delete(t)}}),t)}function Se(e){if(!e)return;let t=!0;return n=>{let r={...n,preventDefault(){n.preventDefault()},isDefaultPrevented:()=>n.isDefaultPrevented(),stopPropagation(){console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")},continuePropagation(){t=!1}};e(r),t&&n.stopPropagation()}}function Ae(e){const t=y(e);if("virtual"===de){let n=t.activeElement;I((()=>{t.activeElement===n&&e.isConnected&&w(e)}))}else w(e)}function Fe(e,t){return!!e&&(!!t&&t.some((t=>t.contains(e))))}class Ce{get size(){return this.fastMap.size}getTreeNode(e){return this.fastMap.get(e)}addTreeNode(e,t,n){let r=this.fastMap.get(null!=t?t:null);if(!r)return;let i=new De({scopeRef:e});r.addChild(i),i.parent=r,this.fastMap.set(e,i),n&&(i.nodeToRestore=n)}addNode(e){this.fastMap.set(e.scopeRef,e)}removeTreeNode(e){if(null===e)return;let t=this.fastMap.get(e);if(!t)return;let n=t.parent;for(let e of this.traverse())e!==t&&t.nodeToRestore&&e.nodeToRestore&&t.scopeRef&&t.scopeRef.current&&Fe(e.nodeToRestore,t.scopeRef.current)&&(e.nodeToRestore=t.nodeToRestore);let r=t.children;n&&(n.removeChild(t),r.size>0&&r.forEach((e=>n&&n.addChild(e)))),this.fastMap.delete(t.scopeRef)}*traverse(e=this.root){if(null!=e.scopeRef&&(yield e),e.children.size>0)for(let t of e.children)yield*this.traverse(t)}clone(){var e;let t=new Ce;var n;for(let r of this.traverse())t.addTreeNode(r.scopeRef,null!==(n=null===(e=r.parent)||void 0===e?void 0:e.scopeRef)&&void 0!==n?n:null,r.nodeToRestore);return t}constructor(){this.fastMap=new Map,this.root=new De({scopeRef:null}),this.fastMap.set(null,this.root)}}class De{addChild(e){this.children.add(e),e.parent=this}removeChild(e){this.children.delete(e),e.parent=void 0}constructor(e){this.children=new Set,this.contain=!1,this.scopeRef=e.scopeRef}}function Oe(e={}){let{autoFocus:n=!1,isTextInput:r,within:o}=e,s=t({isFocused:!1,isFocusVisible:n||ke()}),[l,u]=a(!1),[c,d]=a((()=>s.current.isFocused&&s.current.isFocusVisible)),p=i((()=>d(s.current.isFocused&&s.current.isFocusVisible)),[]),f=i((e=>{s.current.isFocused=e,u(e),p()}),[p]);Ke((e=>{s.current.isFocusVisible=e,p()}),[],{isTextInput:r});let{focusProps:g}=ce({isDisabled:o,onFocusChange:f}),{focusWithinProps:v}=function(e){let{isDisabled:n,onBlurWithin:r,onFocusWithin:o,onFocusWithinChange:s}=e,a=t({isFocusWithin:!1}),l=i((e=>{a.current.isFocusWithin&&!e.currentTarget.contains(e.relatedTarget)&&(a.current.isFocusWithin=!1,r&&r(e),s&&s(!1))}),[r,s,a]),u=ue(l),c=i((e=>{a.current.isFocusWithin||document.activeElement!==e.target||(o&&o(e),s&&s(!0),a.current.isFocusWithin=!0,u(e))}),[o,s,u]);return n?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:c,onBlur:l}}}({isDisabled:!o,onFocusWithinChange:f});return{isFocused:l,isFocusVisible:c,focusProps:o?v:g}}new Ce;let _e=e.createContext(null);function xe(e,n){let{focusProps:i}=ce(e),{keyboardProps:o}=function(e){return{keyboardProps:e.isDisabled?{}:{onKeyDown:Se(e.onKeyDown),onKeyUp:Se(e.onKeyUp)}}}(e),a=h(i,o),l=function(e){let t=r(_e)||{};N(t,e);let{ref:n,...i}=t;return i}(n),u=e.isDisabled?{}:l,c=t(e.autoFocus);return s((()=>{c.current&&n.current&&Ae(n.current),c.current=!1}),[n]),{focusableProps:h({...a,tabIndex:e.excludeFromTabOrder&&!e.isDisabled?-1:void 0},u)}}function He(e,t){let{elementType:n="a",onPress:i,onPressStart:o,onPressEnd:s,onClick:a,isDisabled:l,...u}=e,c={};"a"!==n&&(c={role:"link",tabIndex:l?void 0:0});let{focusableProps:d}=xe(e,t),{pressProps:p,isPressed:f}=Z({onPress:i,onPressStart:o,onPressEnd:s,isDisabled:l,ref:t}),g=function(e,t={}){let{labelable:n,isLink:r,propNames:i}=t,o={};for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&(m.has(t)||n&&E.has(t)||r&&b.has(t)||(null==i?void 0:i.has(t))||P.test(t))&&(o[t]=e[t]);return o}(u,{labelable:!0,isLink:"a"===n}),v=h(d,p),y=r(D);return{isPressed:f,linkProps:h(g,{...v,...c,"aria-disabled":l||void 0,"aria-current":e["aria-current"],onClick:e=>{var t;null===(t=p.onClick)||void 0===t||t.call(p,e),a&&(a(e),console.warn("onClick is deprecated, please use onPress")),!y.isNative&&e.currentTarget instanceof HTMLAnchorElement&&e.currentTarget.href&&!e.isDefaultPrevented()&&function(e,t){let n=e.getAttribute("target");return!(n&&"_self"!==n||e.origin!==location.origin||e.hasAttribute("download")||t.metaKey||t.ctrlKey||t.altKey||t.shiftKey)}(e.currentTarget,e)&&(e.preventDefault(),y.open(e.currentTarget,e))}})}}var Ie,Ne={exports:{}};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/Ie=Ne,function(){var e={}.hasOwnProperty;function t(){for(var n=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var o=typeof i;if("string"===o||"number"===o)n.push(i);else if(Array.isArray(i)){if(i.length){var s=t.apply(null,i);s&&n.push(s)}}else if("object"===o){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){n.push(i.toString());continue}for(var a in i)e.call(i,a)&&i[a]&&n.push(a)}}}return n.join(" ")}Ie.exports?(t.default=t,Ie.exports=t):window.classNames=t}();var Re=Ne.exports,We={link:"link__p5pAJ__0-1-19",link__text:"link__text__4K-s1__0-1-19","link--sm":"link--sm__92fY9__0-1-19","link--md":"link--md__roMx4__0-1-19","link--lg":"link--lg__P-9ZA__0-1-19","focus-ring":"focus-ring__IcaNw__0-1-19"};const ze=l(((r,i)=>{const o=function(e){const r=t(null);return n((()=>({get current(){return r.current},set current(t){r.current=t,"function"==typeof e?e(t):e&&(e.current=t)}})),[e])}(i),s=t(null),a=o||s,{className:l,children:u,href:c,target:d,size:p="md"}=r,{linkProps:f}=He(r,a),{focusProps:g,isFocusVisible:v}=Oe(),y=Re(We.link,We[`link--${p}`],l,{[We["focus-ring"]]:v});return e.createElement("a",{...h(f,g),className:y,ref:a,href:c,target:d},e.createElement("span",{className:We.link__text},u))}));ze.displayName="Link";export{ze as Link};
//# sourceMappingURL=index.js.map
