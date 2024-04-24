"use client";import*as e from"react";import t,{useContext as n,useState as r,useRef as i,useCallback as o,useEffect as a,useMemo as s,createContext as l}from"react";const u={prefix:String(Math.round(1e10*Math.random())),current:0},c=t.createContext(u),d=t.createContext(!1);let p=Boolean("undefined"!=typeof window&&window.document&&window.document.createElement),g=new WeakMap;const f="function"==typeof t.useId?function(e){let i=t.useId(),[o]=r("function"==typeof t.useSyncExternalStore?t.useSyncExternalStore(h,v,m):n(d)),a=o||"test"===process.env.NODE_ENV?"react-aria":`react-aria${u.prefix}`;return e||`${a}-${i}`}:function(e){let r=n(c);r!==u||p||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let o=function(e=!1){let r=n(c),o=i(null);if(null===o.current&&!e){var a,s;let e=null===(s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)||void 0===s||null===(a=s.ReactCurrentOwner)||void 0===a?void 0:a.current;if(e){let t=g.get(e);null==t?g.set(e,{id:r.current,state:e.memoizedState}):e.memoizedState!==t.state&&(r.current=t.id,g.delete(e))}o.current=++r.current}return o.current}(!!e),a=r===u&&"test"===process.env.NODE_ENV?"react-aria":`react-aria${r.prefix}`;return e||`${a}-${o}`};function v(){return!1}function m(){return!0}function h(e){return()=>{}}function y(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=y(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function _(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=y(e))&&(r&&(r+=" "),r+=t);return r}const T="undefined"!=typeof document?t.useLayoutEffect:()=>{};function E(e){const t=i(null);return T((()=>{t.current=e}),[e]),o(((...e)=>{const n=t.current;return null==n?void 0:n(...e)}),[])}let b=Boolean("undefined"!=typeof window&&window.document&&window.document.createElement),w=new Map;function P(e){let[t,n]=r(e),s=i(null),l=f(t),u=o((e=>{s.current=e}),[]);return b&&w.set(l,u),T((()=>{let e=l;return()=>{w.delete(e)}}),[l]),a((()=>{let e=s.current;e&&(s.current=null,n(e))})),l}function x(e,t){if(e===t)return e;let n=w.get(e);if(n)return n(t),t;let r=w.get(t);return r?(r(e),e):t}function L(...e){return(...t)=>{for(let n of e)"function"==typeof n&&n(...t)}}const S=e=>{var t;return null!==(t=null==e?void 0:e.ownerDocument)&&void 0!==t?t:document},M=e=>{if(e&&"window"in e&&e.window===e)return e;return S(e).defaultView||window};function k(...e){let t={...e[0]};for(let n=1;n<e.length;n++){let r=e[n];for(let e in r){let n=t[e],i=r[e];"function"==typeof n&&"function"==typeof i&&"o"===e[0]&&"n"===e[1]&&e.charCodeAt(2)>=65&&e.charCodeAt(2)<=90?t[e]=L(n,i):"className"!==e&&"UNSAFE_className"!==e||"string"!=typeof n||"string"!=typeof i?"id"===e&&n&&i?t.id=x(n,i):t[e]=void 0!==i?i:n:t[e]=_(n,i)}}return t}function K(e){if(function(){if(null==F){F=!1;try{document.createElement("div").focus({get preventScroll(){return F=!0,!0}})}catch(e){}}return F}())e.focus({preventScroll:!0});else{let t=function(e){let t=e.parentNode,n=[],r=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==r;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;r instanceof HTMLElement&&n.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft});return n}(e);e.focus(),function(e){for(let{element:t,scrollTop:n,scrollLeft:r}of e)t.scrollTop=n,t.scrollLeft=r}(t)}}let F=null;function O(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.brands.some((t=>e.test(t.brand))))||e.test(window.navigator.userAgent))}function C(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&e.test((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.platform)||window.navigator.platform)}function N(){return C(/^Mac/i)}function A(){return C(/^iPad/i)||N()&&navigator.maxTouchPoints>1}function D(){return C(/^iPhone/i)||A()}function I(){return O(/AppleWebKit/i)&&!O(/Chrome/i)}function R(){return O(/Android/i)}function H(e,t,n=!0){var r,i;let{metaKey:o,ctrlKey:a,altKey:s,shiftKey:l}=t;O(/Firefox/i)&&(null===(i=window.event)||void 0===i||null===(r=i.type)||void 0===r?void 0:r.startsWith("key"))&&"_blank"===e.target&&(N()?o=!0:a=!0);let u=I()&&N()&&!A()?new KeyboardEvent("keydown",{keyIdentifier:"Enter",metaKey:o,ctrlKey:a,altKey:s,shiftKey:l}):new MouseEvent("click",{metaKey:o,ctrlKey:a,altKey:s,shiftKey:l,bubbles:!0,cancelable:!0});H.isOpening=n,K(e),e.dispatchEvent(u),H.isOpening=!1}H.isOpening=!1;let W=new Map,z=new Set;function B(){if("undefined"==typeof window)return;function e(e){return"propertyName"in e}let t=n=>{if(!e(n)||!n.target)return;let r=W.get(n.target);if(r&&(r.delete(n.propertyName),0===r.size&&(n.target.removeEventListener("transitioncancel",t),W.delete(n.target)),0===W.size)){for(let e of z)e();z.clear()}};document.body.addEventListener("transitionrun",(n=>{if(!e(n)||!n.target)return;let r=W.get(n.target);r||(r=new Set,W.set(n.target,r),n.target.addEventListener("transitioncancel",t,{once:!0})),r.add(n.propertyName)})),document.body.addEventListener("transitionend",t)}function $(e){return!(0!==e.mozInputSource||!e.isTrusted)||(R()&&e.pointerType?"click"===e.type&&1===e.buttons:0===e.detail&&!e.pointerType)}function V(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function U(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}function X(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,V(e,t,"set"),n),n}"undefined"!=typeof document&&("loading"!==document.readyState?B():document.addEventListener("DOMContentLoaded",B));let Y="default",j="",G=new WeakMap;function q(e){if(D()){if("default"===Y){const t=S(e);j=t.documentElement.style.webkitUserSelect,t.documentElement.style.webkitUserSelect="none"}Y="disabled"}else(e instanceof HTMLElement||e instanceof SVGElement)&&(G.set(e,e.style.userSelect),e.style.userSelect="none")}function Z(e){if(D()){if("disabled"!==Y)return;Y="restoring",setTimeout((()=>{var t;t=()=>{if("restoring"===Y){const t=S(e);"none"===t.documentElement.style.webkitUserSelect&&(t.documentElement.style.webkitUserSelect=j||""),j="",Y="default"}},requestAnimationFrame((()=>{0===W.size?t():z.add(t)}))}),300)}else if((e instanceof HTMLElement||e instanceof SVGElement)&&e&&G.has(e)){let t=G.get(e);"none"===e.style.userSelect&&(e.style.userSelect=t),""===e.getAttribute("style")&&e.removeAttribute("style"),G.delete(e)}}const J=t.createContext({register:()=>{}});function Q(e){let t=n(J);if(t){let{register:n,...r}=t;e=k(r,e),n()}return function(e,t){T((()=>{if(e&&e.ref&&t)return e.ref.current=t.current,()=>{e.ref&&(e.ref.current=null)}}))}(t,e.ref),e}J.displayName="PressResponderContext";var ee=new WeakMap;class te{continuePropagation(){X(this,ee,!1)}get shouldStopPropagation(){return function(e,t){return t.get?t.get.call(e):t.value}(e=this,V(e,ee,"get"));var e}constructor(e,t,n){U(this,ee,{writable:!0,value:void 0}),X(this,ee,!0),this.type=e,this.pointerType=t,this.target=n.currentTarget,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.ctrlKey=n.ctrlKey,this.altKey=n.altKey}}const ne=Symbol("linkClicked");function re(e){let{onPress:t,onPressChange:n,onPressStart:l,onPressEnd:u,onPressUp:c,isDisabled:d,isPressed:p,preventFocusOnPress:g,shouldCancelOnPointerExit:f,allowTextSelectionOnPress:v,ref:m,...h}=Q(e),[y,_]=r(!1),T=i({isPressed:!1,ignoreEmulatedMouseEvents:!1,ignoreClickAfterPress:!1,didFirePressStart:!1,isTriggeringEvent:!1,activePointerId:null,target:null,isOverTarget:!1,pointerType:null}),{addGlobalListener:b,removeAllGlobalListeners:w}=function(){let e=i(new Map),t=o(((t,n,r,i)=>{let o=(null==i?void 0:i.once)?(...t)=>{e.current.delete(r),r(...t)}:r;e.current.set(r,{type:n,eventTarget:t,fn:o,options:i}),t.addEventListener(n,r,i)}),[]),n=o(((t,n,r,i)=>{var o;let a=(null===(o=e.current.get(r))||void 0===o?void 0:o.fn)||r;t.removeEventListener(n,a,i),e.current.delete(r)}),[]),r=o((()=>{e.current.forEach(((e,t)=>{n(e.eventTarget,e.type,t,e.options)}))}),[n]);return a((()=>r),[r]),{addGlobalListener:t,removeGlobalListener:n,removeAllGlobalListeners:r}}(),P=E(((e,t)=>{let r=T.current;if(d||r.didFirePressStart)return!1;let i=!0;if(r.isTriggeringEvent=!0,l){let n=new te("pressstart",t,e);l(n),i=n.shouldStopPropagation}return n&&n(!0),r.isTriggeringEvent=!1,r.didFirePressStart=!0,_(!0),i})),x=E(((e,r,i=!0)=>{let o=T.current;if(!o.didFirePressStart)return!1;o.ignoreClickAfterPress=!0,o.didFirePressStart=!1,o.isTriggeringEvent=!0;let a=!0;if(u){let t=new te("pressend",r,e);u(t),a=t.shouldStopPropagation}if(n&&n(!1),_(!1),t&&i&&!d){let n=new te("press",r,e);t(n),a&&(a=n.shouldStopPropagation)}return o.isTriggeringEvent=!1,a})),F=E(((e,t)=>{let n=T.current;if(d)return!1;if(c){n.isTriggeringEvent=!0;let r=new te("pressup",t,e);return c(r),n.isTriggeringEvent=!1,r.shouldStopPropagation}return!0})),O=E((e=>{let t=T.current;t.isPressed&&t.target&&(t.isOverTarget&&null!=t.pointerType&&x(se(t.target,e),t.pointerType,!1),t.isPressed=!1,t.isOverTarget=!1,t.activePointerId=null,t.pointerType=null,w(),v||Z(t.target))})),C=E((e=>{f&&O(e)})),A=s((()=>{let e=T.current,t={onKeyDown(t){if(oe(t.nativeEvent,t.currentTarget)&&t.currentTarget.contains(t.target)){var r;ce(t.target,t.key)&&t.preventDefault();let i=!0;if(!e.isPressed&&!t.repeat){e.target=t.currentTarget,e.isPressed=!0,i=P(t,"keyboard");let r=t.currentTarget,o=t=>{oe(t,r)&&!t.repeat&&r.contains(t.target)&&e.target&&F(se(e.target,t),"keyboard")};b(S(t.currentTarget),"keyup",L(o,n),!0)}i&&t.stopPropagation(),t.metaKey&&N()&&(null===(r=e.metaKeyEvents)||void 0===r||r.set(t.key,t.nativeEvent))}else"Meta"===t.key&&(e.metaKeyEvents=new Map)},onClick(t){if((!t||t.currentTarget.contains(t.target))&&t&&0===t.button&&!e.isTriggeringEvent&&!H.isOpening){let n=!0;if(d&&t.preventDefault(),!e.ignoreClickAfterPress&&!e.ignoreEmulatedMouseEvents&&!e.isPressed&&("virtual"===e.pointerType||$(t.nativeEvent))){d||g||K(t.currentTarget);let e=P(t,"virtual"),r=F(t,"virtual"),i=x(t,"virtual");n=e&&r&&i}e.ignoreEmulatedMouseEvents=!1,e.ignoreClickAfterPress=!1,n&&t.stopPropagation()}}},n=t=>{var n;if(e.isPressed&&e.target&&oe(t,e.target)){var r;ce(t.target,t.key)&&t.preventDefault();let n=t.target;x(se(e.target,t),"keyboard",e.target.contains(n)),w(),"Enter"!==t.key&&ie(e.target)&&e.target.contains(n)&&!t[ne]&&(t[ne]=!0,H(e.target,t,!1)),e.isPressed=!1,null===(r=e.metaKeyEvents)||void 0===r||r.delete(t.key)}else if("Meta"===t.key&&(null===(n=e.metaKeyEvents)||void 0===n?void 0:n.size)){var i;let t=e.metaKeyEvents;e.metaKeyEvents=void 0;for(let n of t.values())null===(i=e.target)||void 0===i||i.dispatchEvent(new KeyboardEvent("keyup",n))}};if("undefined"!=typeof PointerEvent){t.onPointerDown=t=>{if(0!==t.button||!t.currentTarget.contains(t.target))return;if(o=t.nativeEvent,!R()&&0===o.width&&0===o.height||1===o.width&&1===o.height&&0===o.pressure&&0===o.detail&&"mouse"===o.pointerType)return void(e.pointerType="virtual");var o;ue(t.currentTarget)&&t.preventDefault(),e.pointerType=t.pointerType;let a=!0;e.isPressed||(e.isPressed=!0,e.isOverTarget=!0,e.activePointerId=t.pointerId,e.target=t.currentTarget,d||g||K(t.currentTarget),v||q(e.target),a=P(t,e.pointerType),b(S(t.currentTarget),"pointermove",n,!1),b(S(t.currentTarget),"pointerup",r,!1),b(S(t.currentTarget),"pointercancel",i,!1)),a&&t.stopPropagation()},t.onMouseDown=e=>{e.currentTarget.contains(e.target)&&0===e.button&&(ue(e.currentTarget)&&e.preventDefault(),e.stopPropagation())},t.onPointerUp=t=>{t.currentTarget.contains(t.target)&&"virtual"!==e.pointerType&&0===t.button&&le(t,t.currentTarget)&&F(t,e.pointerType||t.pointerType)};let n=t=>{t.pointerId===e.activePointerId&&(e.target&&le(t,e.target)?e.isOverTarget||null==e.pointerType||(e.isOverTarget=!0,P(se(e.target,t),e.pointerType)):e.target&&e.isOverTarget&&null!=e.pointerType&&(e.isOverTarget=!1,x(se(e.target,t),e.pointerType,!1),C(t)))},r=t=>{t.pointerId===e.activePointerId&&e.isPressed&&0===t.button&&e.target&&(le(t,e.target)&&null!=e.pointerType?x(se(e.target,t),e.pointerType):e.isOverTarget&&null!=e.pointerType&&x(se(e.target,t),e.pointerType,!1),e.isPressed=!1,e.isOverTarget=!1,e.activePointerId=null,e.pointerType=null,w(),v||Z(e.target))},i=e=>{O(e)};t.onDragStart=e=>{e.currentTarget.contains(e.target)&&O(e)}}else{t.onMouseDown=t=>{if(0!==t.button||!t.currentTarget.contains(t.target))return;if(ue(t.currentTarget)&&t.preventDefault(),e.ignoreEmulatedMouseEvents)return void t.stopPropagation();e.isPressed=!0,e.isOverTarget=!0,e.target=t.currentTarget,e.pointerType=$(t.nativeEvent)?"virtual":"mouse",d||g||K(t.currentTarget),P(t,e.pointerType)&&t.stopPropagation(),b(S(t.currentTarget),"mouseup",n,!1)},t.onMouseEnter=t=>{if(!t.currentTarget.contains(t.target))return;let n=!0;e.isPressed&&!e.ignoreEmulatedMouseEvents&&null!=e.pointerType&&(e.isOverTarget=!0,n=P(t,e.pointerType)),n&&t.stopPropagation()},t.onMouseLeave=t=>{if(!t.currentTarget.contains(t.target))return;let n=!0;e.isPressed&&!e.ignoreEmulatedMouseEvents&&null!=e.pointerType&&(e.isOverTarget=!1,n=x(t,e.pointerType,!1),C(t)),n&&t.stopPropagation()},t.onMouseUp=t=>{t.currentTarget.contains(t.target)&&(e.ignoreEmulatedMouseEvents||0!==t.button||F(t,e.pointerType||"mouse"))};let n=t=>{0===t.button&&(e.isPressed=!1,w(),e.ignoreEmulatedMouseEvents?e.ignoreEmulatedMouseEvents=!1:(e.target&&le(t,e.target)&&null!=e.pointerType?x(se(e.target,t),e.pointerType):e.target&&e.isOverTarget&&null!=e.pointerType&&x(se(e.target,t),e.pointerType,!1),e.isOverTarget=!1))};t.onTouchStart=t=>{if(!t.currentTarget.contains(t.target))return;let n=function(e){const{targetTouches:t}=e;return t.length>0?t[0]:null}(t.nativeEvent);n&&(e.activePointerId=n.identifier,e.ignoreEmulatedMouseEvents=!0,e.isOverTarget=!0,e.isPressed=!0,e.target=t.currentTarget,e.pointerType="touch",d||g||K(t.currentTarget),v||q(e.target),P(t,e.pointerType)&&t.stopPropagation(),b(M(t.currentTarget),"scroll",r,!0))},t.onTouchMove=t=>{if(!t.currentTarget.contains(t.target))return;if(!e.isPressed)return void t.stopPropagation();let n=ae(t.nativeEvent,e.activePointerId),r=!0;n&&le(n,t.currentTarget)?e.isOverTarget||null==e.pointerType||(e.isOverTarget=!0,r=P(t,e.pointerType)):e.isOverTarget&&null!=e.pointerType&&(e.isOverTarget=!1,r=x(t,e.pointerType,!1),C(t)),r&&t.stopPropagation()},t.onTouchEnd=t=>{if(!t.currentTarget.contains(t.target))return;if(!e.isPressed)return void t.stopPropagation();let n=ae(t.nativeEvent,e.activePointerId),r=!0;n&&le(n,t.currentTarget)&&null!=e.pointerType?(F(t,e.pointerType),r=x(t,e.pointerType)):e.isOverTarget&&null!=e.pointerType&&(r=x(t,e.pointerType,!1)),r&&t.stopPropagation(),e.isPressed=!1,e.activePointerId=null,e.isOverTarget=!1,e.ignoreEmulatedMouseEvents=!0,e.target&&!v&&Z(e.target),w()},t.onTouchCancel=t=>{t.currentTarget.contains(t.target)&&(t.stopPropagation(),e.isPressed&&O(t))};let r=t=>{e.isPressed&&t.target.contains(e.target)&&O({currentTarget:e.target,shiftKey:!1,ctrlKey:!1,metaKey:!1,altKey:!1})};t.onDragStart=e=>{e.currentTarget.contains(e.target)&&O(e)}}return t}),[b,d,g,w,v,O,C,x,P,F]);return a((()=>()=>{var e;v||Z(null!==(e=T.current.target)&&void 0!==e?e:void 0)}),[v]),{isPressed:p||y,pressProps:k(h,A)}}function ie(e){return"A"===e.tagName&&e.hasAttribute("href")}function oe(e,t){const{key:n,code:r}=e,i=t,o=i.getAttribute("role");return!("Enter"!==n&&" "!==n&&"Spacebar"!==n&&"Space"!==r||i instanceof M(i).HTMLInputElement&&!pe(i,n)||i instanceof M(i).HTMLTextAreaElement||i.isContentEditable||("link"===o||!o&&ie(i))&&"Enter"!==n)}function ae(e,t){const n=e.changedTouches;for(let e=0;e<n.length;e++){const r=n[e];if(r.identifier===t)return r}return null}function se(e,t){return{currentTarget:e,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,altKey:t.altKey}}function le(e,t){let n=t.getBoundingClientRect(),r=function(e){let t=0,n=0;return void 0!==e.width?t=e.width/2:void 0!==e.radiusX&&(t=e.radiusX),void 0!==e.height?n=e.height/2:void 0!==e.radiusY&&(n=e.radiusY),{top:e.clientY-n,right:e.clientX+t,bottom:e.clientY+n,left:e.clientX-t}}(e);return o=r,!((i=n).left>o.right||o.left>i.right||i.top>o.bottom||o.top>i.bottom);var i,o}function ue(e){return!(e instanceof HTMLElement&&e.hasAttribute("draggable"))}function ce(e,t){return e instanceof HTMLInputElement?!pe(e,t):e instanceof HTMLButtonElement?"submit"!==e.type&&"reset"!==e.type:!ie(e)}const de=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function pe(e,t){return"checkbox"===e.type||"radio"===e.type?" "===t:de.has(e.type)}class ge{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(e,t){this.nativeEvent=t,this.target=t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget,this.bubbles=t.bubbles,this.cancelable=t.cancelable,this.defaultPrevented=t.defaultPrevented,this.eventPhase=t.eventPhase,this.isTrusted=t.isTrusted,this.timeStamp=t.timeStamp,this.type=e}}function fe(e){let t=i({isFocused:!1,observer:null});T((()=>{const e=t.current;return()=>{e.observer&&(e.observer.disconnect(),e.observer=null)}}),[]);let n=E((t=>{null==e||e(t)}));return o((e=>{if(e.target instanceof HTMLButtonElement||e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLSelectElement){t.current.isFocused=!0;let r=e.target,i=e=>{t.current.isFocused=!1,r.disabled&&n(new ge("blur",e)),t.current.observer&&(t.current.observer.disconnect(),t.current.observer=null)};r.addEventListener("focusout",i,{once:!0}),t.current.observer=new MutationObserver((()=>{if(t.current.isFocused&&r.disabled){var e;null===(e=t.current.observer)||void 0===e||e.disconnect();let n=r===document.activeElement?null:document.activeElement;r.dispatchEvent(new FocusEvent("blur",{relatedTarget:n})),r.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:n}))}})),t.current.observer.observe(r,{attributes:!0,attributeFilter:["disabled"]})}}),[n])}let ve=null,me=new Set,he=new Map,ye=!1,_e=!1;const Te={Tab:!0,Escape:!0};function Ee(e,t){for(let n of me)n(e,t)}function be(e){ye=!0,function(e){return!(e.metaKey||!N()&&e.altKey||e.ctrlKey||"Control"===e.key||"Shift"===e.key||"Meta"===e.key)}(e)&&(ve="keyboard",Ee("keyboard",e))}function we(e){ve="pointer","mousedown"!==e.type&&"pointerdown"!==e.type||(ye=!0,Ee("pointer",e))}function Pe(e){$(e)&&(ye=!0,ve="virtual")}function xe(e){e.target!==window&&e.target!==document&&(ye||_e||(ve="virtual",Ee("virtual",e)),ye=!1,_e=!1)}function Le(){ye=!1,_e=!0}function Se(e){if("undefined"==typeof window||he.get(M(e)))return;const t=M(e),n=S(e);let r=t.HTMLElement.prototype.focus;t.HTMLElement.prototype.focus=function(){ye=!0,r.apply(this,arguments)},n.addEventListener("keydown",be,!0),n.addEventListener("keyup",be,!0),n.addEventListener("click",Pe,!0),t.addEventListener("focus",xe,!0),t.addEventListener("blur",Le,!1),"undefined"!=typeof PointerEvent?(n.addEventListener("pointerdown",we,!0),n.addEventListener("pointermove",we,!0),n.addEventListener("pointerup",we,!0)):(n.addEventListener("mousedown",we,!0),n.addEventListener("mousemove",we,!0),n.addEventListener("mouseup",we,!0)),t.addEventListener("beforeunload",(()=>{Me(e)}),{once:!0}),he.set(t,{focus:r})}const Me=(e,t)=>{const n=M(e),r=S(e);t&&r.removeEventListener("DOMContentLoaded",t),he.has(n)&&(n.HTMLElement.prototype.focus=he.get(n).focus,r.removeEventListener("keydown",be,!0),r.removeEventListener("keyup",be,!0),r.removeEventListener("click",Pe,!0),n.removeEventListener("focus",xe,!0),n.removeEventListener("blur",Le,!1),"undefined"!=typeof PointerEvent?(r.removeEventListener("pointerdown",we,!0),r.removeEventListener("pointermove",we,!0),r.removeEventListener("pointerup",we,!0)):(r.removeEventListener("mousedown",we,!0),r.removeEventListener("mousemove",we,!0),r.removeEventListener("mouseup",we,!0)),he.delete(n))};function ke(){return"pointer"!==ve}"undefined"!=typeof document&&function(e){const t=S(e);let n;"loading"!==t.readyState?Se(e):(n=()=>{Se(e)},t.addEventListener("DOMContentLoaded",n))}();const Ke=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function Fe(e,t,n){Se(),a((()=>{let t=(t,r)=>{(function(e,t,n){var r;const i="undefined"!=typeof window?M(null==n?void 0:n.target).HTMLInputElement:HTMLInputElement,o="undefined"!=typeof window?M(null==n?void 0:n.target).HTMLTextAreaElement:HTMLTextAreaElement,a="undefined"!=typeof window?M(null==n?void 0:n.target).HTMLElement:HTMLElement,s="undefined"!=typeof window?M(null==n?void 0:n.target).KeyboardEvent:KeyboardEvent;return!((e=e||(null==n?void 0:n.target)instanceof i&&!Ke.has(null==n||null===(r=n.target)||void 0===r?void 0:r.type)||(null==n?void 0:n.target)instanceof o||(null==n?void 0:n.target)instanceof a&&(null==n?void 0:n.target.isContentEditable))&&"keyboard"===t&&n instanceof s&&!Te[n.key])})(!!(null==n?void 0:n.isTextInput),t,r)&&e(ke())};return me.add(t),()=>{me.delete(t)}}),t)}function Oe(e,t){return!!e&&(!!t&&t.some((t=>t.contains(e))))}class Ce{get size(){return this.fastMap.size}getTreeNode(e){return this.fastMap.get(e)}addTreeNode(e,t,n){let r=this.fastMap.get(null!=t?t:null);if(!r)return;let i=new Ne({scopeRef:e});r.addChild(i),i.parent=r,this.fastMap.set(e,i),n&&(i.nodeToRestore=n)}addNode(e){this.fastMap.set(e.scopeRef,e)}removeTreeNode(e){if(null===e)return;let t=this.fastMap.get(e);if(!t)return;let n=t.parent;for(let e of this.traverse())e!==t&&t.nodeToRestore&&e.nodeToRestore&&t.scopeRef&&t.scopeRef.current&&Oe(e.nodeToRestore,t.scopeRef.current)&&(e.nodeToRestore=t.nodeToRestore);let r=t.children;n&&(n.removeChild(t),r.size>0&&r.forEach((e=>n&&n.addChild(e)))),this.fastMap.delete(t.scopeRef)}*traverse(e=this.root){if(null!=e.scopeRef&&(yield e),e.children.size>0)for(let t of e.children)yield*this.traverse(t)}clone(){var e;let t=new Ce;var n;for(let r of this.traverse())t.addTreeNode(r.scopeRef,null!==(n=null===(e=r.parent)||void 0===e?void 0:e.scopeRef)&&void 0!==n?n:null,r.nodeToRestore);return t}constructor(){this.fastMap=new Map,this.root=new Ne({scopeRef:null}),this.fastMap.set(null,this.root)}}class Ne{addChild(e){this.children.add(e),e.parent=this}removeChild(e){this.children.delete(e),e.parent=void 0}constructor(e){this.children=new Set,this.contain=!1,this.scopeRef=e.scopeRef}}function Ae(e={}){let{autoFocus:t=!1,isTextInput:n,within:a}=e,s=i({isFocused:!1,isFocusVisible:t||ke()}),[l,u]=r(!1),[c,d]=r((()=>s.current.isFocused&&s.current.isFocusVisible)),p=o((()=>d(s.current.isFocused&&s.current.isFocusVisible)),[]),g=o((e=>{s.current.isFocused=e,u(e),p()}),[p]);Fe((e=>{s.current.isFocusVisible=e,p()}),[],{isTextInput:n});let{focusProps:f}=function(e){let{isDisabled:t,onFocus:n,onBlur:r,onFocusChange:i}=e;const a=o((e=>{if(e.target===e.currentTarget)return r&&r(e),i&&i(!1),!0}),[r,i]),s=fe(a),l=o((e=>{e.target===e.currentTarget&&document.activeElement===e.target&&(n&&n(e),i&&i(!0),s(e))}),[i,n,s]);return{focusProps:{onFocus:!t&&(n||i||r)?l:void 0,onBlur:t||!r&&!i?void 0:a}}}({isDisabled:a,onFocusChange:g}),{focusWithinProps:v}=function(e){let{isDisabled:t,onBlurWithin:n,onFocusWithin:r,onFocusWithinChange:a}=e,s=i({isFocusWithin:!1}),l=o((e=>{s.current.isFocusWithin&&!e.currentTarget.contains(e.relatedTarget)&&(s.current.isFocusWithin=!1,n&&n(e),a&&a(!1))}),[n,a,s]),u=fe(l),c=o((e=>{s.current.isFocusWithin||document.activeElement!==e.target||(r&&r(e),a&&a(!0),s.current.isFocusWithin=!0,u(e))}),[r,a,u]);return t?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:c,onBlur:l}}}({isDisabled:!a,onFocusWithinChange:g});return{isFocused:l,isFocusVisible:c,focusProps:a?v:f}}new Ce;var De,Ie={exports:{}};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/De=Ie,function(){var e={}.hasOwnProperty;function t(){for(var n=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var o=typeof i;if("string"===o||"number"===o)n.push(i);else if(Array.isArray(i)){if(i.length){var a=t.apply(null,i);a&&n.push(a)}}else if("object"===o){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){n.push(i.toString());continue}for(var s in i)e.call(i,s)&&i[s]&&n.push(s)}}}return n.join(" ")}De.exports?(t.default=t,De.exports=t):window.classNames=t}();var Re=Ie.exports,He="accordion__j9KCZ__0-1-19",We="accordion__header__a--uB__0-1-19",ze="accordion__button__CHNQw__0-1-19",Be="accordion__button--open__k1i-j__0-1-19",$e="accordion__button--focused__TP0iN__0-1-19",Ve="accordion__icon__pe5E8__0-1-19",Ue="accordion__icon--rotate__8p3Bu__0-1-19",Xe="accordion__panel__moSqR__0-1-19",Ye="accordion__panel--closed__4gFUg__0-1-19",je="accordion__panel-wrapper__nX7-q__0-1-19";const Ge=l(null);var qe={icon:"icon__ytOkq__0-1-19","icon--white":"icon--white__uY-bp__0-1-19","icon--primary":"icon--primary__jt3hh__0-1-19","icon--xs":"icon--xs__h9RS5__0-1-19","icon--sm":"icon--sm__-aRKu__0-1-19","icon--md":"icon--md__YmrCk__0-1-19","icon--lg":"icon--lg__-Ia-7__0-1-19","icon--xl":"icon--xl__F69Yf__0-1-19","icon--2xl":"icon--2xl__8CeF8__0-1-19","icon--3xl":"icon--3xl__U0X2t__0-1-19"};function Ze({size:e,color:n,className:r,children:i,...o}){return t.createElement("svg",{...o,className:Re(r,qe.icon,{[qe[`icon--${e}`]]:e,[qe[`icon--${n}`]]:n})},i)}function Je(t){return e.createElement(Ze,{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...t},e.createElement("path",{d:"M23 5.91a1.49 1.49 0 0 0-2.12 0l-9 9-8.8-8.84A1.5 1.5 0 0 0 1 8.19l9.9 9.9a1.5 1.5 0 0 0 2.12 0L23 8a1.49 1.49 0 0 0 0-2.09Z"}))}const Qe=e=>({0:"var(--eds-spacing-none)",1:"var(--eds-spacing-small-1)",2:"var(--eds-spacing-small-2)",3:"var(--eds-spacing-small-3)",4:"var(--eds-spacing-small-4)",5:"var(--eds-spacing-small-5)",6:"var(--eds-spacing-medium-1)",7:"var(--eds-spacing-medium-2)",8:"var(--eds-spacing-medium-3)",9:"var(--eds-spacing-medium-4)",10:"var(--eds-spacing-medium-5)",11:"var(--eds-spacing-medium-6)",12:"var(--eds-spacing-medium-7)",13:"var(--eds-spacing-medium-8)",14:"var(--eds-spacing-large-1)",15:"var(--eds-spacing-large-2)",16:"var(--eds-spacing-large-3)",17:"var(--eds-spacing-large-4)",18:"var(--eds-spacing-large-5)"}[e]||"0px");var et={"heading-h1":"heading-h1__00OVp__0-1-19","heading-h2":"heading-h2__uf8XO__0-1-19","heading-h3":"heading-h3__b58IP__0-1-19","heading-h4":"heading-h4__x0dIm__0-1-19","heading-h5":"heading-h5__dHW8C__0-1-19","heading-h6":"heading-h6__FSif0__0-1-19","heading-display":"heading-display__1B20E__0-1-19","heading-leadtext":"heading-leadtext__fbf5X__0-1-19","heading-subheadline":"heading-subheadline__xgXDJ__0-1-19","text-p-small":"text-p-small__U5YeB__0-1-19","text-p-default":"text-p-default__T3Gv7__0-1-19","text-p-large":"text-p-large__k4P5K__0-1-19","text-line-tiny":"text-line-tiny__IdKxY__0-1-19","text-line-small":"text-line-small__VDnxz__0-1-19","text-line-default":"text-line-default__HHLev__0-1-19","text-line-large":"text-line-large__zY6Xt__0-1-19","text-list-default":"text-list-default__9dn8h__0-1-19","label-tiny":"label-tiny__fwERw__0-1-19","label-small":"label-small__7hSFb__0-1-19","label-default":"label-default__TzEjW__0-1-19","label-large":"label-large__Xe0s7__0-1-19","text-italic":"text-italic__9j6-k__0-1-19","text-underline":"text-underline__-idVq__0-1-19","text-uppercase":"text-uppercase__zT285__0-1-19","text-400":"text-400__veahz__0-1-19","text-600":"text-600__SOu9h__0-1-19"};const tt=({id:e,variant:n,as:r,italic:i=!1,underline:o=!1,weight:a="600",uppercase:s=!1,children:l,className:u,mt:c,mb:d,my:p,...g})=>{const f=r||function(e){switch(e){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":case"p":case"ol":case"ul":return e;case"line":return"p";case"list":return"ol";default:return"div"}}(n),v=`\n        ${et[`heading-${n}`]}\n        ${u}\n        ${i?et["text-italic"]:""}\n        ${o?et["text-underline"]:""}\n        ${a?et[`text-${a}`]:""}\n        ${s?et["text-uppercase"]:""}\n    `,m=(({mt:e,mb:t,my:n})=>({marginTop:void 0!==e?Qe(e):void 0!==n?Qe(n):void 0,marginBottom:void 0!==t?Qe(t):void 0!==n?Qe(n):void 0}))({mt:c,mb:d,my:p});return t.createElement(f,{id:e,className:v,style:{...m},...g},l)},nt=e=>{const o=n(Ge),{mode:s,selectedKeys:l,setSelectedKeys:u}=o??{},{id:c="",title:d,isOpen:p,children:g,className:f,"aria-label":v,"aria-labelledby":m,"aria-describedby":h}=e,y=i(null),_=i(null),{isFocusVisible:T,focusProps:E}=Ae(),[b,w]=r(p),[x,L]=r(0),S=P(),M=P();a((()=>{o&&(l?.includes(c)&&w(!0),!l?.includes(c)&&w(!1))}),[o]);const{pressProps:K}=re({onPress:()=>{o?("single"===s&&(l?.includes(c)&&(u([]),w(!1)),!l?.includes(c)&&(u([c]),w(!0))),"multiple"===s&&(l?.includes(c)&&(w(!1),u((e=>e.filter((e=>e!==c))))),!l?.includes(c)&&(w(!0),u((e=>[...e,c]))))):w((e=>!e))}});a((()=>{if(y.current){y.current.querySelectorAll('a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])').forEach((e=>{e.setAttribute("tabindex",b?"0":"-1")}))}}),[b]),a((()=>{const e=_.current;if(!e)return;L(e.scrollHeight);const t=new ResizeObserver((e=>{L(e[0].target.scrollHeight)}));return t.observe(e),()=>{t.unobserve(e)}}),[_]);const F=Re(He,f),O=Re(ze,{[Be]:b,[$e]:T}),C=Re(Ve,{[Ue]:b}),N=Re(Xe,{[Ye]:!b});return t.createElement("div",{className:F},t.createElement(tt,{variant:"h5",as:"h3",className:We},t.createElement("button",{...k(E,K),id:S,className:O,"aria-expanded":b,"aria-controls":M,"aria-label":v,"aria-labelledby":m,"aria-describedby":h},t.createElement("span",{className:C},t.createElement(Je,{"aria-hidden":!0})),d)),t.createElement("div",{role:"region",id:M,className:N,ref:y,style:b?{height:x}:{height:0},"aria-labelledby":S,"aria-hidden":!b},t.createElement("div",{className:je,ref:_},g)))};export{nt as Accordion};
//# sourceMappingURL=index.js.map
