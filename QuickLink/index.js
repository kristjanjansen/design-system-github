"use client";import*as e from"react";import t,{useRef as n,useMemo as r,useContext as i,useCallback as o,createContext as a,useEffect as s,useState as l,forwardRef as u}from"react";function c(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=c(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function d(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=c(e))&&(r&&(r+=" "),r+=t);return r}const p="undefined"!=typeof document?t.useLayoutEffect:()=>{};function g(e){const t=n(null);return p((()=>{t.current=e}),[e]),o(((...e)=>{const n=t.current;return null==n?void 0:n(...e)}),[])}let f=new Map;function v(e,t){if(e===t)return e;let n=f.get(e);if(n)return n(t),t;let r=f.get(t);return r?(r(e),e):t}function m(...e){return(...t)=>{for(let n of e)"function"==typeof n&&n(...t)}}const h=e=>{var t;return null!==(t=null==e?void 0:e.ownerDocument)&&void 0!==t?t:document},y=e=>{if(e&&"window"in e&&e.window===e)return e;return h(e).defaultView||window};function T(...e){let t={...e[0]};for(let n=1;n<e.length;n++){let r=e[n];for(let e in r){let n=t[e],i=r[e];"function"==typeof n&&"function"==typeof i&&"o"===e[0]&&"n"===e[1]&&e.charCodeAt(2)>=65&&e.charCodeAt(2)<=90?t[e]=m(n,i):"className"!==e&&"UNSAFE_className"!==e||"string"!=typeof n||"string"!=typeof i?"id"===e&&n&&i?t.id=v(n,i):t[e]=void 0!==i?i:n:t[e]=d(n,i)}}return t}const b=new Set(["id"]),E=new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]),_=new Set(["href","target","rel","download","ping","referrerPolicy"]),w=/^(data-.*)$/;function P(e){if(function(){if(null==L){L=!1;try{document.createElement("div").focus({get preventScroll(){return L=!0,!0}})}catch(e){}}return L}())e.focus({preventScroll:!0});else{let t=function(e){let t=e.parentNode,n=[],r=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==r;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;r instanceof HTMLElement&&n.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft});return n}(e);e.focus(),function(e){for(let{element:t,scrollTop:n,scrollLeft:r}of e)t.scrollTop=n,t.scrollLeft=r}(t)}}let L=null;function x(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.brands.some((t=>e.test(t.brand))))||e.test(window.navigator.userAgent))}function M(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&e.test((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.platform)||window.navigator.platform)}function k(){return M(/^Mac/i)}function S(){return M(/^iPad/i)||k()&&navigator.maxTouchPoints>1}function K(){return M(/^iPhone/i)||S()}function F(){return x(/AppleWebKit/i)&&!x(/Chrome/i)}function A(){return x(/Android/i)}const C=a({isNative:!0,open:function(e,t){!function(e,t){if(e instanceof HTMLAnchorElement)t(e);else if(e.hasAttribute("data-href")){let n=document.createElement("a");n.href=e.getAttribute("data-href"),e.hasAttribute("data-target")&&(n.target=e.getAttribute("data-target")),e.hasAttribute("data-rel")&&(n.rel=e.getAttribute("data-rel")),e.hasAttribute("data-download")&&(n.download=e.getAttribute("data-download")),e.hasAttribute("data-ping")&&(n.ping=e.getAttribute("data-ping")),e.hasAttribute("data-referrer-policy")&&(n.referrerPolicy=e.getAttribute("data-referrer-policy")),e.appendChild(n),t(n),e.removeChild(n)}}(e,(e=>O(e,t)))}});function O(e,t,n=!0){var r,i;let{metaKey:o,ctrlKey:a,altKey:s,shiftKey:l}=t;x(/Firefox/i)&&(null===(i=window.event)||void 0===i||null===(r=i.type)||void 0===r?void 0:r.startsWith("key"))&&"_blank"===e.target&&(k()?o=!0:a=!0);let u=F()&&k()&&!S()?new KeyboardEvent("keydown",{keyIdentifier:"Enter",metaKey:o,ctrlKey:a,altKey:s,shiftKey:l}):new MouseEvent("click",{metaKey:o,ctrlKey:a,altKey:s,shiftKey:l,bubbles:!0,cancelable:!0});O.isOpening=n,P(e),e.dispatchEvent(u),O.isOpening=!1}O.isOpening=!1;let D=new Map,H=new Set;function N(){if("undefined"==typeof window)return;function e(e){return"propertyName"in e}let t=n=>{if(!e(n)||!n.target)return;let r=D.get(n.target);if(r&&(r.delete(n.propertyName),0===r.size&&(n.target.removeEventListener("transitioncancel",t),D.delete(n.target)),0===D.size)){for(let e of H)e();H.clear()}};document.body.addEventListener("transitionrun",(n=>{if(!e(n)||!n.target)return;let r=D.get(n.target);r||(r=new Set,D.set(n.target,r),n.target.addEventListener("transitioncancel",t,{once:!0})),r.add(n.propertyName)})),document.body.addEventListener("transitionend",t)}function I(e){requestAnimationFrame((()=>{0===D.size?e():H.add(e)}))}function R(e,t){p((()=>{if(e&&e.ref&&t)return e.ref.current=t.current,()=>{e.ref&&(e.ref.current=null)}}))}function W(e){return!(0!==e.mozInputSource||!e.isTrusted)||(A()&&e.pointerType?"click"===e.type&&1===e.buttons:0===e.detail&&!e.pointerType)}function $(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function z(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}function B(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,$(e,t,"set"),n),n}"undefined"!=typeof document&&("loading"!==document.readyState?N():document.addEventListener("DOMContentLoaded",N));let U="default",V="",Y=new WeakMap;function X(e){if(K()){if("default"===U){const t=h(e);V=t.documentElement.style.webkitUserSelect,t.documentElement.style.webkitUserSelect="none"}U="disabled"}else(e instanceof HTMLElement||e instanceof SVGElement)&&(Y.set(e,e.style.userSelect),e.style.userSelect="none")}function j(e){if(K()){if("disabled"!==U)return;U="restoring",setTimeout((()=>{I((()=>{if("restoring"===U){const t=h(e);"none"===t.documentElement.style.webkitUserSelect&&(t.documentElement.style.webkitUserSelect=V||""),V="",U="default"}}))}),300)}else if((e instanceof HTMLElement||e instanceof SVGElement)&&e&&Y.has(e)){let t=Y.get(e);"none"===e.style.userSelect&&(e.style.userSelect=t),""===e.getAttribute("style")&&e.removeAttribute("style"),Y.delete(e)}}const G=t.createContext({register:()=>{}});G.displayName="PressResponderContext";var q=new WeakMap;class J{continuePropagation(){B(this,q,!1)}get shouldStopPropagation(){return function(e,t){return t.get?t.get.call(e):t.value}(e=this,$(e,q,"get"));var e}constructor(e,t,n){z(this,q,{writable:!0,value:void 0}),B(this,q,!0),this.type=e,this.pointerType=t,this.target=n.currentTarget,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.ctrlKey=n.ctrlKey,this.altKey=n.altKey}}const Q=Symbol("linkClicked");function Z(e){let{onPress:t,onPressChange:a,onPressStart:u,onPressEnd:c,onPressUp:d,isDisabled:p,isPressed:f,preventFocusOnPress:v,shouldCancelOnPointerExit:b,allowTextSelectionOnPress:E,ref:_,...w}=function(e){let t=i(G);if(t){let{register:n,...r}=t;e=T(r,e),n()}return R(t,e.ref),e}(e),[L,x]=l(!1),M=n({isPressed:!1,ignoreEmulatedMouseEvents:!1,ignoreClickAfterPress:!1,didFirePressStart:!1,isTriggeringEvent:!1,activePointerId:null,target:null,isOverTarget:!1,pointerType:null}),{addGlobalListener:S,removeAllGlobalListeners:K}=function(){let e=n(new Map),t=o(((t,n,r,i)=>{let o=(null==i?void 0:i.once)?(...t)=>{e.current.delete(r),r(...t)}:r;e.current.set(r,{type:n,eventTarget:t,fn:o,options:i}),t.addEventListener(n,r,i)}),[]),r=o(((t,n,r,i)=>{var o;let a=(null===(o=e.current.get(r))||void 0===o?void 0:o.fn)||r;t.removeEventListener(n,a,i),e.current.delete(r)}),[]),i=o((()=>{e.current.forEach(((e,t)=>{r(e.eventTarget,e.type,t,e.options)}))}),[r]);return s((()=>i),[i]),{addGlobalListener:t,removeGlobalListener:r,removeAllGlobalListeners:i}}(),F=g(((e,t)=>{let n=M.current;if(p||n.didFirePressStart)return!1;let r=!0;if(n.isTriggeringEvent=!0,u){let n=new J("pressstart",t,e);u(n),r=n.shouldStopPropagation}return a&&a(!0),n.isTriggeringEvent=!1,n.didFirePressStart=!0,x(!0),r})),C=g(((e,n,r=!0)=>{let i=M.current;if(!i.didFirePressStart)return!1;i.ignoreClickAfterPress=!0,i.didFirePressStart=!1,i.isTriggeringEvent=!0;let o=!0;if(c){let t=new J("pressend",n,e);c(t),o=t.shouldStopPropagation}if(a&&a(!1),x(!1),t&&r&&!p){let r=new J("press",n,e);t(r),o&&(o=r.shouldStopPropagation)}return i.isTriggeringEvent=!1,o})),D=g(((e,t)=>{let n=M.current;if(p)return!1;if(d){n.isTriggeringEvent=!0;let r=new J("pressup",t,e);return d(r),n.isTriggeringEvent=!1,r.shouldStopPropagation}return!0})),H=g((e=>{let t=M.current;t.isPressed&&t.target&&(t.isOverTarget&&null!=t.pointerType&&C(re(t.target,e),t.pointerType,!1),t.isPressed=!1,t.isOverTarget=!1,t.activePointerId=null,t.pointerType=null,K(),E||j(t.target))})),N=g((e=>{b&&H(e)})),I=r((()=>{let e=M.current,t={onKeyDown(t){if(te(t.nativeEvent,t.currentTarget)&&t.currentTarget.contains(t.target)){var r;ae(t.target,t.key)&&t.preventDefault();let i=!0;if(!e.isPressed&&!t.repeat){e.target=t.currentTarget,e.isPressed=!0,i=F(t,"keyboard");let r=t.currentTarget,o=t=>{te(t,r)&&!t.repeat&&r.contains(t.target)&&e.target&&D(re(e.target,t),"keyboard")};S(h(t.currentTarget),"keyup",m(o,n),!0)}i&&t.stopPropagation(),t.metaKey&&k()&&(null===(r=e.metaKeyEvents)||void 0===r||r.set(t.key,t.nativeEvent))}else"Meta"===t.key&&(e.metaKeyEvents=new Map)},onClick(t){if((!t||t.currentTarget.contains(t.target))&&t&&0===t.button&&!e.isTriggeringEvent&&!O.isOpening){let n=!0;if(p&&t.preventDefault(),!e.ignoreClickAfterPress&&!e.ignoreEmulatedMouseEvents&&!e.isPressed&&("virtual"===e.pointerType||W(t.nativeEvent))){p||v||P(t.currentTarget);let e=F(t,"virtual"),r=D(t,"virtual"),i=C(t,"virtual");n=e&&r&&i}e.ignoreEmulatedMouseEvents=!1,e.ignoreClickAfterPress=!1,n&&t.stopPropagation()}}},n=t=>{var n;if(e.isPressed&&e.target&&te(t,e.target)){var r;ae(t.target,t.key)&&t.preventDefault();let n=t.target;C(re(e.target,t),"keyboard",e.target.contains(n)),K(),"Enter"!==t.key&&ee(e.target)&&e.target.contains(n)&&!t[Q]&&(t[Q]=!0,O(e.target,t,!1)),e.isPressed=!1,null===(r=e.metaKeyEvents)||void 0===r||r.delete(t.key)}else if("Meta"===t.key&&(null===(n=e.metaKeyEvents)||void 0===n?void 0:n.size)){var i;let t=e.metaKeyEvents;e.metaKeyEvents=void 0;for(let n of t.values())null===(i=e.target)||void 0===i||i.dispatchEvent(new KeyboardEvent("keyup",n))}};if("undefined"!=typeof PointerEvent){t.onPointerDown=t=>{if(0!==t.button||!t.currentTarget.contains(t.target))return;if(o=t.nativeEvent,!A()&&0===o.width&&0===o.height||1===o.width&&1===o.height&&0===o.pressure&&0===o.detail&&"mouse"===o.pointerType)return void(e.pointerType="virtual");var o;oe(t.currentTarget)&&t.preventDefault(),e.pointerType=t.pointerType;let a=!0;e.isPressed||(e.isPressed=!0,e.isOverTarget=!0,e.activePointerId=t.pointerId,e.target=t.currentTarget,p||v||P(t.currentTarget),E||X(e.target),a=F(t,e.pointerType),S(h(t.currentTarget),"pointermove",n,!1),S(h(t.currentTarget),"pointerup",r,!1),S(h(t.currentTarget),"pointercancel",i,!1)),a&&t.stopPropagation()},t.onMouseDown=e=>{e.currentTarget.contains(e.target)&&0===e.button&&(oe(e.currentTarget)&&e.preventDefault(),e.stopPropagation())},t.onPointerUp=t=>{t.currentTarget.contains(t.target)&&"virtual"!==e.pointerType&&0===t.button&&ie(t,t.currentTarget)&&D(t,e.pointerType||t.pointerType)};let n=t=>{t.pointerId===e.activePointerId&&(e.target&&ie(t,e.target)?e.isOverTarget||null==e.pointerType||(e.isOverTarget=!0,F(re(e.target,t),e.pointerType)):e.target&&e.isOverTarget&&null!=e.pointerType&&(e.isOverTarget=!1,C(re(e.target,t),e.pointerType,!1),N(t)))},r=t=>{t.pointerId===e.activePointerId&&e.isPressed&&0===t.button&&e.target&&(ie(t,e.target)&&null!=e.pointerType?C(re(e.target,t),e.pointerType):e.isOverTarget&&null!=e.pointerType&&C(re(e.target,t),e.pointerType,!1),e.isPressed=!1,e.isOverTarget=!1,e.activePointerId=null,e.pointerType=null,K(),E||j(e.target))},i=e=>{H(e)};t.onDragStart=e=>{e.currentTarget.contains(e.target)&&H(e)}}else{t.onMouseDown=t=>{if(0!==t.button||!t.currentTarget.contains(t.target))return;if(oe(t.currentTarget)&&t.preventDefault(),e.ignoreEmulatedMouseEvents)return void t.stopPropagation();e.isPressed=!0,e.isOverTarget=!0,e.target=t.currentTarget,e.pointerType=W(t.nativeEvent)?"virtual":"mouse",p||v||P(t.currentTarget),F(t,e.pointerType)&&t.stopPropagation(),S(h(t.currentTarget),"mouseup",n,!1)},t.onMouseEnter=t=>{if(!t.currentTarget.contains(t.target))return;let n=!0;e.isPressed&&!e.ignoreEmulatedMouseEvents&&null!=e.pointerType&&(e.isOverTarget=!0,n=F(t,e.pointerType)),n&&t.stopPropagation()},t.onMouseLeave=t=>{if(!t.currentTarget.contains(t.target))return;let n=!0;e.isPressed&&!e.ignoreEmulatedMouseEvents&&null!=e.pointerType&&(e.isOverTarget=!1,n=C(t,e.pointerType,!1),N(t)),n&&t.stopPropagation()},t.onMouseUp=t=>{t.currentTarget.contains(t.target)&&(e.ignoreEmulatedMouseEvents||0!==t.button||D(t,e.pointerType||"mouse"))};let n=t=>{0===t.button&&(e.isPressed=!1,K(),e.ignoreEmulatedMouseEvents?e.ignoreEmulatedMouseEvents=!1:(e.target&&ie(t,e.target)&&null!=e.pointerType?C(re(e.target,t),e.pointerType):e.target&&e.isOverTarget&&null!=e.pointerType&&C(re(e.target,t),e.pointerType,!1),e.isOverTarget=!1))};t.onTouchStart=t=>{if(!t.currentTarget.contains(t.target))return;let n=function(e){const{targetTouches:t}=e;return t.length>0?t[0]:null}(t.nativeEvent);n&&(e.activePointerId=n.identifier,e.ignoreEmulatedMouseEvents=!0,e.isOverTarget=!0,e.isPressed=!0,e.target=t.currentTarget,e.pointerType="touch",p||v||P(t.currentTarget),E||X(e.target),F(t,e.pointerType)&&t.stopPropagation(),S(y(t.currentTarget),"scroll",r,!0))},t.onTouchMove=t=>{if(!t.currentTarget.contains(t.target))return;if(!e.isPressed)return void t.stopPropagation();let n=ne(t.nativeEvent,e.activePointerId),r=!0;n&&ie(n,t.currentTarget)?e.isOverTarget||null==e.pointerType||(e.isOverTarget=!0,r=F(t,e.pointerType)):e.isOverTarget&&null!=e.pointerType&&(e.isOverTarget=!1,r=C(t,e.pointerType,!1),N(t)),r&&t.stopPropagation()},t.onTouchEnd=t=>{if(!t.currentTarget.contains(t.target))return;if(!e.isPressed)return void t.stopPropagation();let n=ne(t.nativeEvent,e.activePointerId),r=!0;n&&ie(n,t.currentTarget)&&null!=e.pointerType?(D(t,e.pointerType),r=C(t,e.pointerType)):e.isOverTarget&&null!=e.pointerType&&(r=C(t,e.pointerType,!1)),r&&t.stopPropagation(),e.isPressed=!1,e.activePointerId=null,e.isOverTarget=!1,e.ignoreEmulatedMouseEvents=!0,e.target&&!E&&j(e.target),K()},t.onTouchCancel=t=>{t.currentTarget.contains(t.target)&&(t.stopPropagation(),e.isPressed&&H(t))};let r=t=>{e.isPressed&&t.target.contains(e.target)&&H({currentTarget:e.target,shiftKey:!1,ctrlKey:!1,metaKey:!1,altKey:!1})};t.onDragStart=e=>{e.currentTarget.contains(e.target)&&H(e)}}return t}),[S,p,v,K,E,H,N,C,F,D]);return s((()=>()=>{var e;E||j(null!==(e=M.current.target)&&void 0!==e?e:void 0)}),[E]),{isPressed:f||L,pressProps:T(w,I)}}function ee(e){return"A"===e.tagName&&e.hasAttribute("href")}function te(e,t){const{key:n,code:r}=e,i=t,o=i.getAttribute("role");return!("Enter"!==n&&" "!==n&&"Spacebar"!==n&&"Space"!==r||i instanceof y(i).HTMLInputElement&&!le(i,n)||i instanceof y(i).HTMLTextAreaElement||i.isContentEditable||("link"===o||!o&&ee(i))&&"Enter"!==n)}function ne(e,t){const n=e.changedTouches;for(let e=0;e<n.length;e++){const r=n[e];if(r.identifier===t)return r}return null}function re(e,t){return{currentTarget:e,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,altKey:t.altKey}}function ie(e,t){let n=t.getBoundingClientRect(),r=function(e){let t=0,n=0;return void 0!==e.width?t=e.width/2:void 0!==e.radiusX&&(t=e.radiusX),void 0!==e.height?n=e.height/2:void 0!==e.radiusY&&(n=e.radiusY),{top:e.clientY-n,right:e.clientX+t,bottom:e.clientY+n,left:e.clientX-t}}(e);return o=r,!((i=n).left>o.right||o.left>i.right||i.top>o.bottom||o.top>i.bottom);var i,o}function oe(e){return!(e instanceof HTMLElement&&e.hasAttribute("draggable"))}function ae(e,t){return e instanceof HTMLInputElement?!le(e,t):e instanceof HTMLButtonElement?"submit"!==e.type&&"reset"!==e.type:!ee(e)}const se=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function le(e,t){return"checkbox"===e.type||"radio"===e.type?" "===t:se.has(e.type)}class ue{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(e,t){this.nativeEvent=t,this.target=t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget,this.bubbles=t.bubbles,this.cancelable=t.cancelable,this.defaultPrevented=t.defaultPrevented,this.eventPhase=t.eventPhase,this.isTrusted=t.isTrusted,this.timeStamp=t.timeStamp,this.type=e}}function ce(e){let t=n({isFocused:!1,observer:null});p((()=>{const e=t.current;return()=>{e.observer&&(e.observer.disconnect(),e.observer=null)}}),[]);let r=g((t=>{null==e||e(t)}));return o((e=>{if(e.target instanceof HTMLButtonElement||e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLSelectElement){t.current.isFocused=!0;let n=e.target,i=e=>{t.current.isFocused=!1,n.disabled&&r(new ue("blur",e)),t.current.observer&&(t.current.observer.disconnect(),t.current.observer=null)};n.addEventListener("focusout",i,{once:!0}),t.current.observer=new MutationObserver((()=>{if(t.current.isFocused&&n.disabled){var e;null===(e=t.current.observer)||void 0===e||e.disconnect();let r=n===document.activeElement?null:document.activeElement;n.dispatchEvent(new FocusEvent("blur",{relatedTarget:r})),n.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:r}))}})),t.current.observer.observe(n,{attributes:!0,attributeFilter:["disabled"]})}}),[r])}function de(e){let{isDisabled:t,onFocus:n,onBlur:r,onFocusChange:i}=e;const a=o((e=>{if(e.target===e.currentTarget)return r&&r(e),i&&i(!1),!0}),[r,i]),s=ce(a),l=o((e=>{e.target===e.currentTarget&&document.activeElement===e.target&&(n&&n(e),i&&i(!0),s(e))}),[i,n,s]);return{focusProps:{onFocus:!t&&(n||i||r)?l:void 0,onBlur:t||!r&&!i?void 0:a}}}let pe=null,ge=new Set,fe=new Map,ve=!1,me=!1;const he={Tab:!0,Escape:!0};function ye(e,t){for(let n of ge)n(e,t)}function Te(e){ve=!0,function(e){return!(e.metaKey||!k()&&e.altKey||e.ctrlKey||"Control"===e.key||"Shift"===e.key||"Meta"===e.key)}(e)&&(pe="keyboard",ye("keyboard",e))}function be(e){pe="pointer","mousedown"!==e.type&&"pointerdown"!==e.type||(ve=!0,ye("pointer",e))}function Ee(e){W(e)&&(ve=!0,pe="virtual")}function _e(e){e.target!==window&&e.target!==document&&(ve||me||(pe="virtual",ye("virtual",e)),ve=!1,me=!1)}function we(){ve=!1,me=!0}function Pe(e){if("undefined"==typeof window||fe.get(y(e)))return;const t=y(e),n=h(e);let r=t.HTMLElement.prototype.focus;t.HTMLElement.prototype.focus=function(){ve=!0,r.apply(this,arguments)},n.addEventListener("keydown",Te,!0),n.addEventListener("keyup",Te,!0),n.addEventListener("click",Ee,!0),t.addEventListener("focus",_e,!0),t.addEventListener("blur",we,!1),"undefined"!=typeof PointerEvent?(n.addEventListener("pointerdown",be,!0),n.addEventListener("pointermove",be,!0),n.addEventListener("pointerup",be,!0)):(n.addEventListener("mousedown",be,!0),n.addEventListener("mousemove",be,!0),n.addEventListener("mouseup",be,!0)),t.addEventListener("beforeunload",(()=>{Le(e)}),{once:!0}),fe.set(t,{focus:r})}const Le=(e,t)=>{const n=y(e),r=h(e);t&&r.removeEventListener("DOMContentLoaded",t),fe.has(n)&&(n.HTMLElement.prototype.focus=fe.get(n).focus,r.removeEventListener("keydown",Te,!0),r.removeEventListener("keyup",Te,!0),r.removeEventListener("click",Ee,!0),n.removeEventListener("focus",_e,!0),n.removeEventListener("blur",we,!1),"undefined"!=typeof PointerEvent?(r.removeEventListener("pointerdown",be,!0),r.removeEventListener("pointermove",be,!0),r.removeEventListener("pointerup",be,!0)):(r.removeEventListener("mousedown",be,!0),r.removeEventListener("mousemove",be,!0),r.removeEventListener("mouseup",be,!0)),fe.delete(n))};function xe(){return"pointer"!==pe}"undefined"!=typeof document&&function(e){const t=h(e);let n;"loading"!==t.readyState?Pe(e):(n=()=>{Pe(e)},t.addEventListener("DOMContentLoaded",n))}();const Me=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function ke(e,t,n){Pe(),s((()=>{let t=(t,r)=>{(function(e,t,n){var r;const i="undefined"!=typeof window?y(null==n?void 0:n.target).HTMLInputElement:HTMLInputElement,o="undefined"!=typeof window?y(null==n?void 0:n.target).HTMLTextAreaElement:HTMLTextAreaElement,a="undefined"!=typeof window?y(null==n?void 0:n.target).HTMLElement:HTMLElement,s="undefined"!=typeof window?y(null==n?void 0:n.target).KeyboardEvent:KeyboardEvent;return!((e=e||(null==n?void 0:n.target)instanceof i&&!Me.has(null==n||null===(r=n.target)||void 0===r?void 0:r.type)||(null==n?void 0:n.target)instanceof o||(null==n?void 0:n.target)instanceof a&&(null==n?void 0:n.target.isContentEditable))&&"keyboard"===t&&n instanceof s&&!he[n.key])})(!!(null==n?void 0:n.isTextInput),t,r)&&e(xe())};return ge.add(t),()=>{ge.delete(t)}}),t)}function Se(e){if(!e)return;let t=!0;return n=>{let r={...n,preventDefault(){n.preventDefault()},isDefaultPrevented:()=>n.isDefaultPrevented(),stopPropagation(){console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")},continuePropagation(){t=!1}};e(r),t&&n.stopPropagation()}}function Ke(e){const t=h(e);if("virtual"===pe){let n=t.activeElement;I((()=>{t.activeElement===n&&e.isConnected&&P(e)}))}else P(e)}function Fe(e,t){return!!e&&(!!t&&t.some((t=>t.contains(e))))}class Ae{get size(){return this.fastMap.size}getTreeNode(e){return this.fastMap.get(e)}addTreeNode(e,t,n){let r=this.fastMap.get(null!=t?t:null);if(!r)return;let i=new Ce({scopeRef:e});r.addChild(i),i.parent=r,this.fastMap.set(e,i),n&&(i.nodeToRestore=n)}addNode(e){this.fastMap.set(e.scopeRef,e)}removeTreeNode(e){if(null===e)return;let t=this.fastMap.get(e);if(!t)return;let n=t.parent;for(let e of this.traverse())e!==t&&t.nodeToRestore&&e.nodeToRestore&&t.scopeRef&&t.scopeRef.current&&Fe(e.nodeToRestore,t.scopeRef.current)&&(e.nodeToRestore=t.nodeToRestore);let r=t.children;n&&(n.removeChild(t),r.size>0&&r.forEach((e=>n&&n.addChild(e)))),this.fastMap.delete(t.scopeRef)}*traverse(e=this.root){if(null!=e.scopeRef&&(yield e),e.children.size>0)for(let t of e.children)yield*this.traverse(t)}clone(){var e;let t=new Ae;var n;for(let r of this.traverse())t.addTreeNode(r.scopeRef,null!==(n=null===(e=r.parent)||void 0===e?void 0:e.scopeRef)&&void 0!==n?n:null,r.nodeToRestore);return t}constructor(){this.fastMap=new Map,this.root=new Ce({scopeRef:null}),this.fastMap.set(null,this.root)}}class Ce{addChild(e){this.children.add(e),e.parent=this}removeChild(e){this.children.delete(e),e.parent=void 0}constructor(e){this.children=new Set,this.contain=!1,this.scopeRef=e.scopeRef}}function Oe(e={}){let{autoFocus:t=!1,isTextInput:r,within:i}=e,a=n({isFocused:!1,isFocusVisible:t||xe()}),[s,u]=l(!1),[c,d]=l((()=>a.current.isFocused&&a.current.isFocusVisible)),p=o((()=>d(a.current.isFocused&&a.current.isFocusVisible)),[]),g=o((e=>{a.current.isFocused=e,u(e),p()}),[p]);ke((e=>{a.current.isFocusVisible=e,p()}),[],{isTextInput:r});let{focusProps:f}=de({isDisabled:i,onFocusChange:g}),{focusWithinProps:v}=function(e){let{isDisabled:t,onBlurWithin:r,onFocusWithin:i,onFocusWithinChange:a}=e,s=n({isFocusWithin:!1}),l=o((e=>{s.current.isFocusWithin&&!e.currentTarget.contains(e.relatedTarget)&&(s.current.isFocusWithin=!1,r&&r(e),a&&a(!1))}),[r,a,s]),u=ce(l),c=o((e=>{s.current.isFocusWithin||document.activeElement!==e.target||(i&&i(e),a&&a(!0),s.current.isFocusWithin=!0,u(e))}),[i,a,u]);return t?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:c,onBlur:l}}}({isDisabled:!i,onFocusWithinChange:g});return{isFocused:s,isFocusVisible:c,focusProps:i?v:f}}new Ae;let De=t.createContext(null);function He(e,t){let{focusProps:r}=de(e),{keyboardProps:o}=function(e){return{keyboardProps:e.isDisabled?{}:{onKeyDown:Se(e.onKeyDown),onKeyUp:Se(e.onKeyUp)}}}(e),a=T(r,o),l=function(e){let t=i(De)||{};R(t,e);let{ref:n,...r}=t;return r}(t),u=e.isDisabled?{}:l,c=n(e.autoFocus);return s((()=>{c.current&&t.current&&Ke(t.current),c.current=!1}),[t]),{focusableProps:T({...a,tabIndex:e.excludeFromTabOrder&&!e.isDisabled?-1:void 0},u)}}function Ne(e,t){let{elementType:n="a",onPress:r,onPressStart:o,onPressEnd:a,onClick:s,isDisabled:l,...u}=e,c={};"a"!==n&&(c={role:"link",tabIndex:l?void 0:0});let{focusableProps:d}=He(e,t),{pressProps:p,isPressed:g}=Z({onPress:r,onPressStart:o,onPressEnd:a,isDisabled:l,ref:t}),f=function(e,t={}){let{labelable:n,isLink:r,propNames:i}=t,o={};for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&(b.has(t)||n&&E.has(t)||r&&_.has(t)||(null==i?void 0:i.has(t))||w.test(t))&&(o[t]=e[t]);return o}(u,{labelable:!0,isLink:"a"===n}),v=T(d,p),m=i(C);return{isPressed:g,linkProps:T(f,{...v,...c,"aria-disabled":l||void 0,"aria-current":e["aria-current"],onClick:e=>{var t;null===(t=p.onClick)||void 0===t||t.call(p,e),s&&(s(e),console.warn("onClick is deprecated, please use onPress")),!m.isNative&&e.currentTarget instanceof HTMLAnchorElement&&e.currentTarget.href&&!e.isDefaultPrevented()&&function(e,t){let n=e.getAttribute("target");return!(n&&"_self"!==n||e.origin!==location.origin||e.hasAttribute("download")||t.metaKey||t.ctrlKey||t.altKey||t.shiftKey)}(e.currentTarget,e)&&(e.preventDefault(),m.open(e.currentTarget,e))}})}}var Ie,Re={exports:{}};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/Ie=Re,function(){var e={}.hasOwnProperty;function t(){for(var n=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var o=typeof i;if("string"===o||"number"===o)n.push(i);else if(Array.isArray(i)){if(i.length){var a=t.apply(null,i);a&&n.push(a)}}else if("object"===o){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){n.push(i.toString());continue}for(var s in i)e.call(i,s)&&i[s]&&n.push(s)}}}return n.join(" ")}Ie.exports?(t.default=t,Ie.exports=t):window.classNames=t}();var We=Re.exports,$e={icon:"icon__ytOkq__0-1-34","icon--white":"icon--white__uY-bp__0-1-34","icon--primary":"icon--primary__jt3hh__0-1-34","icon--xs":"icon--xs__h9RS5__0-1-34","icon--sm":"icon--sm__-aRKu__0-1-34","icon--md":"icon--md__YmrCk__0-1-34","icon--lg":"icon--lg__-Ia-7__0-1-34","icon--xl":"icon--xl__F69Yf__0-1-34","icon--2xl":"icon--2xl__8CeF8__0-1-34","icon--3xl":"icon--3xl__U0X2t__0-1-34"};function ze({size:e,color:n,className:r,children:i,...o}){return t.createElement("svg",{...o,className:We(r,$e.icon,{[$e[`icon--${e}`]]:e,[$e[`icon--${n}`]]:n})},i)}function Be(t){return e.createElement(ze,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...t},e.createElement("path",{d:"M10.94.94a1.49 1.49 0 0 0 0 2.12l7.44 7.44H2a1.5 1.5 0 0 0 0 3h16.38l-7.44 7.44a1.5 1.5 0 0 0 2.12 2.12l10-10a1.5 1.5 0 0 0 0-2.12l-10-10a1.49 1.49 0 0 0-2.12 0Z"}))}const Ue=e=>({0:"var(--eds-spacing-none)",1:"var(--eds-spacing-small-1)",2:"var(--eds-spacing-small-2)",3:"var(--eds-spacing-small-3)",4:"var(--eds-spacing-small-4)",5:"var(--eds-spacing-small-5)",6:"var(--eds-spacing-medium-1)",7:"var(--eds-spacing-medium-2)",8:"var(--eds-spacing-medium-3)",9:"var(--eds-spacing-medium-4)",10:"var(--eds-spacing-medium-5)",11:"var(--eds-spacing-medium-6)",12:"var(--eds-spacing-medium-7)",13:"var(--eds-spacing-medium-8)",14:"var(--eds-spacing-large-1)",15:"var(--eds-spacing-large-2)",16:"var(--eds-spacing-large-3)",17:"var(--eds-spacing-large-4)",18:"var(--eds-spacing-large-5)"}[e]||"0px"),Ve=({mt:e,mb:t,my:n})=>({marginTop:void 0!==e?Ue(e):void 0!==n?Ue(n):void 0,marginBottom:void 0!==t?Ue(t):void 0!==n?Ue(n):void 0});var Ye={"heading-h1":"heading-h1__00OVp__0-1-34","heading-h2":"heading-h2__uf8XO__0-1-34","heading-h3":"heading-h3__b58IP__0-1-34","heading-h4":"heading-h4__x0dIm__0-1-34","heading-h5":"heading-h5__dHW8C__0-1-34","heading-h6":"heading-h6__FSif0__0-1-34","heading-display":"heading-display__1B20E__0-1-34","heading-leadtext":"heading-leadtext__fbf5X__0-1-34","heading-subheadline":"heading-subheadline__xgXDJ__0-1-34","text-p-small":"text-p-small__U5YeB__0-1-34","text-p-default":"text-p-default__T3Gv7__0-1-34","text-p-large":"text-p-large__k4P5K__0-1-34","text-line-tiny":"text-line-tiny__IdKxY__0-1-34","text-line-small":"text-line-small__VDnxz__0-1-34","text-line-default":"text-line-default__HHLev__0-1-34","text-line-large":"text-line-large__zY6Xt__0-1-34","text-list-default":"text-list-default__9dn8h__0-1-34","label-tiny":"label-tiny__fwERw__0-1-34","label-small":"label-small__7hSFb__0-1-34","label-default":"label-default__TzEjW__0-1-34","label-large":"label-large__Xe0s7__0-1-34","text-italic":"text-italic__9j6-k__0-1-34","text-underline":"text-underline__-idVq__0-1-34","text-uppercase":"text-uppercase__zT285__0-1-34","text-400":"text-400__veahz__0-1-34","text-600":"text-600__SOu9h__0-1-34"};const Xe=({id:e,variant:n,as:r,italic:i=!1,underline:o=!1,weight:a="600",uppercase:s=!1,children:l,className:u,dangerouslySetInnerHTML:c,mt:d,mb:p,my:g,...f})=>{const v=r||function(e){switch(e){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":case"p":case"ol":case"ul":return e;case"line":return"p";case"list":return"ol";default:return"div"}}(n),m=`\n        ${Ye[`heading-${n}`]}\n        ${u}\n        ${i?Ye["text-italic"]:""}\n        ${o?Ye["text-underline"]:""}\n        ${a?Ye[`text-${a}`]:""}\n        ${s?Ye["text-uppercase"]:""}\n    `,h=Ve({mt:d,mb:p,my:g});return c?t.createElement(v,{id:e,className:m,style:{...h},dangerouslySetInnerHTML:c,...f}):t.createElement(v,{id:e,className:m,style:{...h},...f},l)},je=({variant:e="p",size:n="default",italic:r=!1,underline:i=!1,weight:o="400",uppercase:a=!1,children:s,className:l,dangerouslySetInnerHTML:u,mt:c,mb:d,my:p,...g})=>{const f="p"===e?"p":"list"===e?"ul":"div",v=`\n        ${Ye[`text-${e}-${n}`]}\n        ${l}\n        ${r?Ye["text-italic"]:""}\n        ${i?Ye["text-underline"]:""}\n        ${o?Ye[`text-${o}`]:""}\n        ${a?Ye["text-uppercase"]:""}\n    `,m=Ve({mt:c,mb:d,my:p});return u?t.createElement(f,{className:v,dangerouslySetInnerHTML:u,style:{...m},...g}):t.createElement(f,{className:v,style:{...m},...g},s)};var Ge={base:"base__WTg8p__0-1-34","focus-ring":"focus-ring__CWd8z__0-1-34",header:"header__L8xhw__0-1-34",description:"description__pB5XY__0-1-34",icon:"icon__h1mNR__0-1-34"};const qe=u(((e,i)=>{const o=function(e){const t=n(null);return r((()=>({get current(){return t.current},set current(n){t.current=n,"function"==typeof e?e(n):e&&(e.current=n)}})),[e])}(i),a=n(null),s=o||a,{title:l,description:u,href:c,target:d,className:p}=e,{linkProps:g}=Ne(e,s),{focusProps:f,isFocusVisible:v}=Oe();return t.createElement("a",{className:We(Ge.base,p,{[Ge["focus-ring"]]:v}),...T(g,f),ref:s,href:c,target:d},t.createElement("div",{className:Ge.header},t.createElement(Xe,{variant:"h5"},l),t.createElement("div",{className:Ge.icon},t.createElement(Be,{"aria-hidden":"true"}))),t.createElement("div",{className:Ge.description},t.createElement(je,null,u)))}));qe.displayName="QuickLink";export{qe as QuickLink};
//# sourceMappingURL=index.js.map
