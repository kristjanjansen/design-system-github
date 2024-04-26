"use client";import e,{useContext as t,useState as n,useRef as r,useCallback as i,useEffect as a,useMemo as o,createContext as s,forwardRef as l}from"react";const u={prefix:String(Math.round(1e10*Math.random())),current:0},d=e.createContext(u),c=e.createContext(!1);let p=Boolean("undefined"!=typeof window&&window.document&&window.document.createElement),g=new WeakMap;const v="function"==typeof e.useId?function(r){let i=e.useId(),[a]=n("function"==typeof e.useSyncExternalStore?e.useSyncExternalStore(_,f,m):t(c)),o=a||"test"===process.env.NODE_ENV?"react-aria":`react-aria${u.prefix}`;return r||`${o}-${i}`}:function(n){let i=t(d);i!==u||p||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let a=function(n=!1){let i=t(d),a=r(null);if(null===a.current&&!n){var o,s;let t=null===(s=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)||void 0===s||null===(o=s.ReactCurrentOwner)||void 0===o?void 0:o.current;if(t){let e=g.get(t);null==e?g.set(t,{id:i.current,state:t.memoizedState}):t.memoizedState!==e.state&&(i.current=e.id,g.delete(t))}a.current=++i.current}return a.current}(!!n),o=i===u&&"test"===process.env.NODE_ENV?"react-aria":`react-aria${i.prefix}`;return n||`${o}-${a}`};function f(){return!1}function m(){return!0}function _(e){return()=>{}}function h(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=h(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function y(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=h(e))&&(r&&(r+=" "),r+=t);return r}const T="undefined"!=typeof document?e.useLayoutEffect:()=>{};function E(e){const t=r(null);return T((()=>{t.current=e}),[e]),i(((...e)=>{const n=t.current;return null==n?void 0:n(...e)}),[])}let b=Boolean("undefined"!=typeof window&&window.document&&window.document.createElement),w=new Map;function P(e,t){if(e===t)return e;let n=w.get(e);if(n)return n(t),t;let r=w.get(t);return r?(r(e),e):t}function x(...e){return(...t)=>{for(let n of e)"function"==typeof n&&n(...t)}}const L=e=>{var t;return null!==(t=null==e?void 0:e.ownerDocument)&&void 0!==t?t:document},M=e=>{if(e&&"window"in e&&e.window===e)return e;return L(e).defaultView||window};function S(...e){let t={...e[0]};for(let n=1;n<e.length;n++){let r=e[n];for(let e in r){let n=t[e],i=r[e];"function"==typeof n&&"function"==typeof i&&"o"===e[0]&&"n"===e[1]&&e.charCodeAt(2)>=65&&e.charCodeAt(2)<=90?t[e]=x(n,i):"className"!==e&&"UNSAFE_className"!==e||"string"!=typeof n||"string"!=typeof i?"id"===e&&n&&i?t.id=P(n,i):t[e]=void 0!==i?i:n:t[e]=y(n,i)}}return t}const k=new Set(["id"]),K=new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]),F=new Set(["href","target","rel","download","ping","referrerPolicy"]),O=/^(data-.*)$/;function D(e){if(function(){if(null==I){I=!1;try{document.createElement("div").focus({get preventScroll(){return I=!0,!0}})}catch(e){}}return I}())e.focus({preventScroll:!0});else{let t=function(e){let t=e.parentNode,n=[],r=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==r;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;r instanceof HTMLElement&&n.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft});return n}(e);e.focus(),function(e){for(let{element:t,scrollTop:n,scrollLeft:r}of e)t.scrollTop=n,t.scrollLeft=r}(t)}}let I=null;function N(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.brands.some((t=>e.test(t.brand))))||e.test(window.navigator.userAgent))}function C(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&e.test((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.platform)||window.navigator.platform)}function V(){return C(/^Mac/i)}function H(){return C(/^iPad/i)||V()&&navigator.maxTouchPoints>1}function R(){return C(/^iPhone/i)||H()}function $(){return N(/AppleWebKit/i)&&!N(/Chrome/i)}function A(){return N(/Android/i)}function W(e,t,n=!0){var r,i;let{metaKey:a,ctrlKey:o,altKey:s,shiftKey:l}=t;N(/Firefox/i)&&(null===(i=window.event)||void 0===i||null===(r=i.type)||void 0===r?void 0:r.startsWith("key"))&&"_blank"===e.target&&(V()?a=!0:o=!0);let u=$()&&V()&&!H()?new KeyboardEvent("keydown",{keyIdentifier:"Enter",metaKey:a,ctrlKey:o,altKey:s,shiftKey:l}):new MouseEvent("click",{metaKey:a,ctrlKey:o,altKey:s,shiftKey:l,bubbles:!0,cancelable:!0});W.isOpening=n,D(e),e.dispatchEvent(u),W.isOpening=!1}W.isOpening=!1;let B=new Map,z=new Set;function U(){if("undefined"==typeof window)return;function e(e){return"propertyName"in e}let t=n=>{if(!e(n)||!n.target)return;let r=B.get(n.target);if(r&&(r.delete(n.propertyName),0===r.size&&(n.target.removeEventListener("transitioncancel",t),B.delete(n.target)),0===B.size)){for(let e of z)e();z.clear()}};document.body.addEventListener("transitionrun",(n=>{if(!e(n)||!n.target)return;let r=B.get(n.target);r||(r=new Set,B.set(n.target,r),n.target.addEventListener("transitioncancel",t,{once:!0})),r.add(n.propertyName)})),document.body.addEventListener("transitionend",t)}function j(e){requestAnimationFrame((()=>{0===B.size?e():z.add(e)}))}function X(e,t){T((()=>{if(e&&e.ref&&t)return e.ref.current=t.current,()=>{e.ref&&(e.ref.current=null)}}))}function G(e){return!(0!==e.mozInputSource||!e.isTrusted)||(A()&&e.pointerType?"click"===e.type&&1===e.buttons:0===e.detail&&!e.pointerType)}function Y(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function q(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}function J(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,Y(e,t,"set"),n),n}"undefined"!=typeof document&&("loading"!==document.readyState?U():document.addEventListener("DOMContentLoaded",U));let Z="default",Q="",ee=new WeakMap;function te(e){if(R()){if("default"===Z){const t=L(e);Q=t.documentElement.style.webkitUserSelect,t.documentElement.style.webkitUserSelect="none"}Z="disabled"}else(e instanceof HTMLElement||e instanceof SVGElement)&&(ee.set(e,e.style.userSelect),e.style.userSelect="none")}function ne(e){if(R()){if("disabled"!==Z)return;Z="restoring",setTimeout((()=>{j((()=>{if("restoring"===Z){const t=L(e);"none"===t.documentElement.style.webkitUserSelect&&(t.documentElement.style.webkitUserSelect=Q||""),Q="",Z="default"}}))}),300)}else if((e instanceof HTMLElement||e instanceof SVGElement)&&e&&ee.has(e)){let t=ee.get(e);"none"===e.style.userSelect&&(e.style.userSelect=t),""===e.getAttribute("style")&&e.removeAttribute("style"),ee.delete(e)}}const re=e.createContext({register:()=>{}});re.displayName="PressResponderContext";var ie=new WeakMap;class ae{continuePropagation(){J(this,ie,!1)}get shouldStopPropagation(){return function(e,t){return t.get?t.get.call(e):t.value}(e=this,Y(e,ie,"get"));var e}constructor(e,t,n){q(this,ie,{writable:!0,value:void 0}),J(this,ie,!0),this.type=e,this.pointerType=t,this.target=n.currentTarget,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.ctrlKey=n.ctrlKey,this.altKey=n.altKey}}const oe=Symbol("linkClicked");function se(e){let{onPress:s,onPressChange:l,onPressStart:u,onPressEnd:d,onPressUp:c,isDisabled:p,isPressed:g,preventFocusOnPress:v,shouldCancelOnPointerExit:f,allowTextSelectionOnPress:m,ref:_,...h}=function(e){let n=t(re);if(n){let{register:t,...r}=n;e=S(r,e),t()}return X(n,e.ref),e}(e),[y,T]=n(!1),b=r({isPressed:!1,ignoreEmulatedMouseEvents:!1,ignoreClickAfterPress:!1,didFirePressStart:!1,isTriggeringEvent:!1,activePointerId:null,target:null,isOverTarget:!1,pointerType:null}),{addGlobalListener:w,removeAllGlobalListeners:P}=function(){let e=r(new Map),t=i(((t,n,r,i)=>{let a=(null==i?void 0:i.once)?(...t)=>{e.current.delete(r),r(...t)}:r;e.current.set(r,{type:n,eventTarget:t,fn:a,options:i}),t.addEventListener(n,r,i)}),[]),n=i(((t,n,r,i)=>{var a;let o=(null===(a=e.current.get(r))||void 0===a?void 0:a.fn)||r;t.removeEventListener(n,o,i),e.current.delete(r)}),[]),o=i((()=>{e.current.forEach(((e,t)=>{n(e.eventTarget,e.type,t,e.options)}))}),[n]);return a((()=>o),[o]),{addGlobalListener:t,removeGlobalListener:n,removeAllGlobalListeners:o}}(),k=E(((e,t)=>{let n=b.current;if(p||n.didFirePressStart)return!1;let r=!0;if(n.isTriggeringEvent=!0,u){let n=new ae("pressstart",t,e);u(n),r=n.shouldStopPropagation}return l&&l(!0),n.isTriggeringEvent=!1,n.didFirePressStart=!0,T(!0),r})),K=E(((e,t,n=!0)=>{let r=b.current;if(!r.didFirePressStart)return!1;r.ignoreClickAfterPress=!0,r.didFirePressStart=!1,r.isTriggeringEvent=!0;let i=!0;if(d){let n=new ae("pressend",t,e);d(n),i=n.shouldStopPropagation}if(l&&l(!1),T(!1),s&&n&&!p){let n=new ae("press",t,e);s(n),i&&(i=n.shouldStopPropagation)}return r.isTriggeringEvent=!1,i})),F=E(((e,t)=>{let n=b.current;if(p)return!1;if(c){n.isTriggeringEvent=!0;let r=new ae("pressup",t,e);return c(r),n.isTriggeringEvent=!1,r.shouldStopPropagation}return!0})),O=E((e=>{let t=b.current;t.isPressed&&t.target&&(t.isOverTarget&&null!=t.pointerType&&K(ce(t.target,e),t.pointerType,!1),t.isPressed=!1,t.isOverTarget=!1,t.activePointerId=null,t.pointerType=null,P(),m||ne(t.target))})),I=E((e=>{f&&O(e)})),N=o((()=>{let e=b.current,t={onKeyDown(t){if(ue(t.nativeEvent,t.currentTarget)&&t.currentTarget.contains(t.target)){var r;ve(t.target,t.key)&&t.preventDefault();let i=!0;if(!e.isPressed&&!t.repeat){e.target=t.currentTarget,e.isPressed=!0,i=k(t,"keyboard");let r=t.currentTarget,a=t=>{ue(t,r)&&!t.repeat&&r.contains(t.target)&&e.target&&F(ce(e.target,t),"keyboard")};w(L(t.currentTarget),"keyup",x(a,n),!0)}i&&t.stopPropagation(),t.metaKey&&V()&&(null===(r=e.metaKeyEvents)||void 0===r||r.set(t.key,t.nativeEvent))}else"Meta"===t.key&&(e.metaKeyEvents=new Map)},onClick(t){if((!t||t.currentTarget.contains(t.target))&&t&&0===t.button&&!e.isTriggeringEvent&&!W.isOpening){let n=!0;if(p&&t.preventDefault(),!e.ignoreClickAfterPress&&!e.ignoreEmulatedMouseEvents&&!e.isPressed&&("virtual"===e.pointerType||G(t.nativeEvent))){p||v||D(t.currentTarget);let e=k(t,"virtual"),r=F(t,"virtual"),i=K(t,"virtual");n=e&&r&&i}e.ignoreEmulatedMouseEvents=!1,e.ignoreClickAfterPress=!1,n&&t.stopPropagation()}}},n=t=>{var n;if(e.isPressed&&e.target&&ue(t,e.target)){var r;ve(t.target,t.key)&&t.preventDefault();let n=t.target;K(ce(e.target,t),"keyboard",e.target.contains(n)),P(),"Enter"!==t.key&&le(e.target)&&e.target.contains(n)&&!t[oe]&&(t[oe]=!0,W(e.target,t,!1)),e.isPressed=!1,null===(r=e.metaKeyEvents)||void 0===r||r.delete(t.key)}else if("Meta"===t.key&&(null===(n=e.metaKeyEvents)||void 0===n?void 0:n.size)){var i;let t=e.metaKeyEvents;e.metaKeyEvents=void 0;for(let n of t.values())null===(i=e.target)||void 0===i||i.dispatchEvent(new KeyboardEvent("keyup",n))}};if("undefined"!=typeof PointerEvent){t.onPointerDown=t=>{if(0!==t.button||!t.currentTarget.contains(t.target))return;if(a=t.nativeEvent,!A()&&0===a.width&&0===a.height||1===a.width&&1===a.height&&0===a.pressure&&0===a.detail&&"mouse"===a.pointerType)return void(e.pointerType="virtual");var a;ge(t.currentTarget)&&t.preventDefault(),e.pointerType=t.pointerType;let o=!0;e.isPressed||(e.isPressed=!0,e.isOverTarget=!0,e.activePointerId=t.pointerId,e.target=t.currentTarget,p||v||D(t.currentTarget),m||te(e.target),o=k(t,e.pointerType),w(L(t.currentTarget),"pointermove",n,!1),w(L(t.currentTarget),"pointerup",r,!1),w(L(t.currentTarget),"pointercancel",i,!1)),o&&t.stopPropagation()},t.onMouseDown=e=>{e.currentTarget.contains(e.target)&&0===e.button&&(ge(e.currentTarget)&&e.preventDefault(),e.stopPropagation())},t.onPointerUp=t=>{t.currentTarget.contains(t.target)&&"virtual"!==e.pointerType&&0===t.button&&pe(t,t.currentTarget)&&F(t,e.pointerType||t.pointerType)};let n=t=>{t.pointerId===e.activePointerId&&(e.target&&pe(t,e.target)?e.isOverTarget||null==e.pointerType||(e.isOverTarget=!0,k(ce(e.target,t),e.pointerType)):e.target&&e.isOverTarget&&null!=e.pointerType&&(e.isOverTarget=!1,K(ce(e.target,t),e.pointerType,!1),I(t)))},r=t=>{t.pointerId===e.activePointerId&&e.isPressed&&0===t.button&&e.target&&(pe(t,e.target)&&null!=e.pointerType?K(ce(e.target,t),e.pointerType):e.isOverTarget&&null!=e.pointerType&&K(ce(e.target,t),e.pointerType,!1),e.isPressed=!1,e.isOverTarget=!1,e.activePointerId=null,e.pointerType=null,P(),m||ne(e.target))},i=e=>{O(e)};t.onDragStart=e=>{e.currentTarget.contains(e.target)&&O(e)}}else{t.onMouseDown=t=>{if(0!==t.button||!t.currentTarget.contains(t.target))return;if(ge(t.currentTarget)&&t.preventDefault(),e.ignoreEmulatedMouseEvents)return void t.stopPropagation();e.isPressed=!0,e.isOverTarget=!0,e.target=t.currentTarget,e.pointerType=G(t.nativeEvent)?"virtual":"mouse",p||v||D(t.currentTarget),k(t,e.pointerType)&&t.stopPropagation(),w(L(t.currentTarget),"mouseup",n,!1)},t.onMouseEnter=t=>{if(!t.currentTarget.contains(t.target))return;let n=!0;e.isPressed&&!e.ignoreEmulatedMouseEvents&&null!=e.pointerType&&(e.isOverTarget=!0,n=k(t,e.pointerType)),n&&t.stopPropagation()},t.onMouseLeave=t=>{if(!t.currentTarget.contains(t.target))return;let n=!0;e.isPressed&&!e.ignoreEmulatedMouseEvents&&null!=e.pointerType&&(e.isOverTarget=!1,n=K(t,e.pointerType,!1),I(t)),n&&t.stopPropagation()},t.onMouseUp=t=>{t.currentTarget.contains(t.target)&&(e.ignoreEmulatedMouseEvents||0!==t.button||F(t,e.pointerType||"mouse"))};let n=t=>{0===t.button&&(e.isPressed=!1,P(),e.ignoreEmulatedMouseEvents?e.ignoreEmulatedMouseEvents=!1:(e.target&&pe(t,e.target)&&null!=e.pointerType?K(ce(e.target,t),e.pointerType):e.target&&e.isOverTarget&&null!=e.pointerType&&K(ce(e.target,t),e.pointerType,!1),e.isOverTarget=!1))};t.onTouchStart=t=>{if(!t.currentTarget.contains(t.target))return;let n=function(e){const{targetTouches:t}=e;return t.length>0?t[0]:null}(t.nativeEvent);n&&(e.activePointerId=n.identifier,e.ignoreEmulatedMouseEvents=!0,e.isOverTarget=!0,e.isPressed=!0,e.target=t.currentTarget,e.pointerType="touch",p||v||D(t.currentTarget),m||te(e.target),k(t,e.pointerType)&&t.stopPropagation(),w(M(t.currentTarget),"scroll",r,!0))},t.onTouchMove=t=>{if(!t.currentTarget.contains(t.target))return;if(!e.isPressed)return void t.stopPropagation();let n=de(t.nativeEvent,e.activePointerId),r=!0;n&&pe(n,t.currentTarget)?e.isOverTarget||null==e.pointerType||(e.isOverTarget=!0,r=k(t,e.pointerType)):e.isOverTarget&&null!=e.pointerType&&(e.isOverTarget=!1,r=K(t,e.pointerType,!1),I(t)),r&&t.stopPropagation()},t.onTouchEnd=t=>{if(!t.currentTarget.contains(t.target))return;if(!e.isPressed)return void t.stopPropagation();let n=de(t.nativeEvent,e.activePointerId),r=!0;n&&pe(n,t.currentTarget)&&null!=e.pointerType?(F(t,e.pointerType),r=K(t,e.pointerType)):e.isOverTarget&&null!=e.pointerType&&(r=K(t,e.pointerType,!1)),r&&t.stopPropagation(),e.isPressed=!1,e.activePointerId=null,e.isOverTarget=!1,e.ignoreEmulatedMouseEvents=!0,e.target&&!m&&ne(e.target),P()},t.onTouchCancel=t=>{t.currentTarget.contains(t.target)&&(t.stopPropagation(),e.isPressed&&O(t))};let r=t=>{e.isPressed&&t.target.contains(e.target)&&O({currentTarget:e.target,shiftKey:!1,ctrlKey:!1,metaKey:!1,altKey:!1})};t.onDragStart=e=>{e.currentTarget.contains(e.target)&&O(e)}}return t}),[w,p,v,P,m,O,I,K,k,F]);return a((()=>()=>{var e;m||ne(null!==(e=b.current.target)&&void 0!==e?e:void 0)}),[m]),{isPressed:g||y,pressProps:S(h,N)}}function le(e){return"A"===e.tagName&&e.hasAttribute("href")}function ue(e,t){const{key:n,code:r}=e,i=t,a=i.getAttribute("role");return!("Enter"!==n&&" "!==n&&"Spacebar"!==n&&"Space"!==r||i instanceof M(i).HTMLInputElement&&!me(i,n)||i instanceof M(i).HTMLTextAreaElement||i.isContentEditable||("link"===a||!a&&le(i))&&"Enter"!==n)}function de(e,t){const n=e.changedTouches;for(let e=0;e<n.length;e++){const r=n[e];if(r.identifier===t)return r}return null}function ce(e,t){return{currentTarget:e,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,altKey:t.altKey}}function pe(e,t){let n=t.getBoundingClientRect(),r=function(e){let t=0,n=0;return void 0!==e.width?t=e.width/2:void 0!==e.radiusX&&(t=e.radiusX),void 0!==e.height?n=e.height/2:void 0!==e.radiusY&&(n=e.radiusY),{top:e.clientY-n,right:e.clientX+t,bottom:e.clientY+n,left:e.clientX-t}}(e);return a=r,!((i=n).left>a.right||a.left>i.right||i.top>a.bottom||a.top>i.bottom);var i,a}function ge(e){return!(e instanceof HTMLElement&&e.hasAttribute("draggable"))}function ve(e,t){return e instanceof HTMLInputElement?!me(e,t):e instanceof HTMLButtonElement?"submit"!==e.type&&"reset"!==e.type:!le(e)}const fe=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function me(e,t){return"checkbox"===e.type||"radio"===e.type?" "===t:fe.has(e.type)}class _e{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(e,t){this.nativeEvent=t,this.target=t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget,this.bubbles=t.bubbles,this.cancelable=t.cancelable,this.defaultPrevented=t.defaultPrevented,this.eventPhase=t.eventPhase,this.isTrusted=t.isTrusted,this.timeStamp=t.timeStamp,this.type=e}}function he(e){let t=r({isFocused:!1,observer:null});T((()=>{const e=t.current;return()=>{e.observer&&(e.observer.disconnect(),e.observer=null)}}),[]);let n=E((t=>{null==e||e(t)}));return i((e=>{if(e.target instanceof HTMLButtonElement||e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLSelectElement){t.current.isFocused=!0;let r=e.target,i=e=>{t.current.isFocused=!1,r.disabled&&n(new _e("blur",e)),t.current.observer&&(t.current.observer.disconnect(),t.current.observer=null)};r.addEventListener("focusout",i,{once:!0}),t.current.observer=new MutationObserver((()=>{if(t.current.isFocused&&r.disabled){var e;null===(e=t.current.observer)||void 0===e||e.disconnect();let n=r===document.activeElement?null:document.activeElement;r.dispatchEvent(new FocusEvent("blur",{relatedTarget:n})),r.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:n}))}})),t.current.observer.observe(r,{attributes:!0,attributeFilter:["disabled"]})}}),[n])}function ye(e){let{isDisabled:t,onFocus:n,onBlur:r,onFocusChange:a}=e;const o=i((e=>{if(e.target===e.currentTarget)return r&&r(e),a&&a(!1),!0}),[r,a]),s=he(o),l=i((e=>{e.target===e.currentTarget&&document.activeElement===e.target&&(n&&n(e),a&&a(!0),s(e))}),[a,n,s]);return{focusProps:{onFocus:!t&&(n||a||r)?l:void 0,onBlur:t||!r&&!a?void 0:o}}}let Te=null,Ee=new Set,be=new Map,we=!1,Pe=!1;const xe={Tab:!0,Escape:!0};function Le(e,t){for(let n of Ee)n(e,t)}function Me(e){we=!0,function(e){return!(e.metaKey||!V()&&e.altKey||e.ctrlKey||"Control"===e.key||"Shift"===e.key||"Meta"===e.key)}(e)&&(Te="keyboard",Le("keyboard",e))}function Se(e){Te="pointer","mousedown"!==e.type&&"pointerdown"!==e.type||(we=!0,Le("pointer",e))}function ke(e){G(e)&&(we=!0,Te="virtual")}function Ke(e){e.target!==window&&e.target!==document&&(we||Pe||(Te="virtual",Le("virtual",e)),we=!1,Pe=!1)}function Fe(){we=!1,Pe=!0}function Oe(e){if("undefined"==typeof window||be.get(M(e)))return;const t=M(e),n=L(e);let r=t.HTMLElement.prototype.focus;t.HTMLElement.prototype.focus=function(){we=!0,r.apply(this,arguments)},n.addEventListener("keydown",Me,!0),n.addEventListener("keyup",Me,!0),n.addEventListener("click",ke,!0),t.addEventListener("focus",Ke,!0),t.addEventListener("blur",Fe,!1),"undefined"!=typeof PointerEvent?(n.addEventListener("pointerdown",Se,!0),n.addEventListener("pointermove",Se,!0),n.addEventListener("pointerup",Se,!0)):(n.addEventListener("mousedown",Se,!0),n.addEventListener("mousemove",Se,!0),n.addEventListener("mouseup",Se,!0)),t.addEventListener("beforeunload",(()=>{De(e)}),{once:!0}),be.set(t,{focus:r})}const De=(e,t)=>{const n=M(e),r=L(e);t&&r.removeEventListener("DOMContentLoaded",t),be.has(n)&&(n.HTMLElement.prototype.focus=be.get(n).focus,r.removeEventListener("keydown",Me,!0),r.removeEventListener("keyup",Me,!0),r.removeEventListener("click",ke,!0),n.removeEventListener("focus",Ke,!0),n.removeEventListener("blur",Fe,!1),"undefined"!=typeof PointerEvent?(r.removeEventListener("pointerdown",Se,!0),r.removeEventListener("pointermove",Se,!0),r.removeEventListener("pointerup",Se,!0)):(r.removeEventListener("mousedown",Se,!0),r.removeEventListener("mousemove",Se,!0),r.removeEventListener("mouseup",Se,!0)),be.delete(n))};function Ie(){return"pointer"!==Te}"undefined"!=typeof document&&function(e){const t=L(e);let n;"loading"!==t.readyState?Oe(e):(n=()=>{Oe(e)},t.addEventListener("DOMContentLoaded",n))}();const Ne=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function Ce(e,t,n){Oe(),a((()=>{let t=(t,r)=>{(function(e,t,n){var r;const i="undefined"!=typeof window?M(null==n?void 0:n.target).HTMLInputElement:HTMLInputElement,a="undefined"!=typeof window?M(null==n?void 0:n.target).HTMLTextAreaElement:HTMLTextAreaElement,o="undefined"!=typeof window?M(null==n?void 0:n.target).HTMLElement:HTMLElement,s="undefined"!=typeof window?M(null==n?void 0:n.target).KeyboardEvent:KeyboardEvent;return!((e=e||(null==n?void 0:n.target)instanceof i&&!Ne.has(null==n||null===(r=n.target)||void 0===r?void 0:r.type)||(null==n?void 0:n.target)instanceof a||(null==n?void 0:n.target)instanceof o&&(null==n?void 0:n.target.isContentEditable))&&"keyboard"===t&&n instanceof s&&!xe[n.key])})(!!(null==n?void 0:n.isTextInput),t,r)&&e(Ie())};return Ee.add(t),()=>{Ee.delete(t)}}),t)}function Ve(e){let{isDisabled:t,onBlurWithin:n,onFocusWithin:a,onFocusWithinChange:o}=e,s=r({isFocusWithin:!1}),l=i((e=>{s.current.isFocusWithin&&!e.currentTarget.contains(e.relatedTarget)&&(s.current.isFocusWithin=!1,n&&n(e),o&&o(!1))}),[n,o,s]),u=he(l),d=i((e=>{s.current.isFocusWithin||document.activeElement!==e.target||(a&&a(e),o&&o(!0),s.current.isFocusWithin=!0,u(e))}),[a,o,u]);return t?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:d,onBlur:l}}}function He(e){if(!e)return;let t=!0;return n=>{let r={...n,preventDefault(){n.preventDefault()},isDefaultPrevented:()=>n.isDefaultPrevented(),stopPropagation(){console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")},continuePropagation(){t=!1}};e(r),t&&n.stopPropagation()}}function Re(e){const t=L(e);if("virtual"===Te){let n=t.activeElement;j((()=>{t.activeElement===n&&e.isConnected&&D(e)}))}else D(e)}function $e(e,t){return!!e&&(!!t&&t.some((t=>t.contains(e))))}class Ae{get size(){return this.fastMap.size}getTreeNode(e){return this.fastMap.get(e)}addTreeNode(e,t,n){let r=this.fastMap.get(null!=t?t:null);if(!r)return;let i=new We({scopeRef:e});r.addChild(i),i.parent=r,this.fastMap.set(e,i),n&&(i.nodeToRestore=n)}addNode(e){this.fastMap.set(e.scopeRef,e)}removeTreeNode(e){if(null===e)return;let t=this.fastMap.get(e);if(!t)return;let n=t.parent;for(let e of this.traverse())e!==t&&t.nodeToRestore&&e.nodeToRestore&&t.scopeRef&&t.scopeRef.current&&$e(e.nodeToRestore,t.scopeRef.current)&&(e.nodeToRestore=t.nodeToRestore);let r=t.children;n&&(n.removeChild(t),r.size>0&&r.forEach((e=>n&&n.addChild(e)))),this.fastMap.delete(t.scopeRef)}*traverse(e=this.root){if(null!=e.scopeRef&&(yield e),e.children.size>0)for(let t of e.children)yield*this.traverse(t)}clone(){var e;let t=new Ae;var n;for(let r of this.traverse())t.addTreeNode(r.scopeRef,null!==(n=null===(e=r.parent)||void 0===e?void 0:e.scopeRef)&&void 0!==n?n:null,r.nodeToRestore);return t}constructor(){this.fastMap=new Map,this.root=new We({scopeRef:null}),this.fastMap.set(null,this.root)}}class We{addChild(e){this.children.add(e),e.parent=this}removeChild(e){this.children.delete(e),e.parent=void 0}constructor(e){this.children=new Set,this.contain=!1,this.scopeRef=e.scopeRef}}new Ae;let Be=e.createContext(null);function ze(e,n){let{focusProps:i}=ye(e),{keyboardProps:o}=function(e){return{keyboardProps:e.isDisabled?{}:{onKeyDown:He(e.onKeyDown),onKeyUp:He(e.onKeyUp)}}}(e),s=S(i,o),l=function(e){let n=t(Be)||{};X(n,e);let{ref:r,...i}=n;return i}(n),u=e.isDisabled?{}:l,d=r(e.autoFocus);return a((()=>{d.current&&n.current&&Re(n.current),d.current=!1}),[n]),{focusableProps:S({...s,tabIndex:e.excludeFromTabOrder&&!e.isDisabled?-1:void 0},u)}}function Ue(e,t,n){let{validationBehavior:r,focus:i}=e;T((()=>{if("native"===r&&(null==n?void 0:n.current)){let r=t.realtimeValidation.isInvalid?t.realtimeValidation.validationErrors.join(" ")||"Invalid value.":"";n.current.setCustomValidity(r),n.current.hasAttribute("title")||(n.current.title=""),t.realtimeValidation.isInvalid||t.updateValidation({isInvalid:!(e=n.current).validity.valid,validationDetails:je(e),validationErrors:e.validationMessage?[e.validationMessage]:[]})}var e}));let o=E((()=>{t.resetValidation()})),s=E((e=>{var r;t.displayValidation.isInvalid||t.commitValidation();let a=null==n||null===(r=n.current)||void 0===r?void 0:r.form;var o,s;!e.defaultPrevented&&n&&a&&function(e){for(let t=0;t<e.elements.length;t++){let n=e.elements[t];if(!n.validity.valid)return n}return null}(a)===n.current&&(i?i():null===(o=n.current)||void 0===o||o.focus(),Te=s="keyboard",Le(s,null));e.preventDefault()})),l=E((()=>{t.commitValidation()}));a((()=>{let e=null==n?void 0:n.current;if(!e)return;let t=e.form;return e.addEventListener("invalid",s),e.addEventListener("change",l),null==t||t.addEventListener("reset",o),()=>{e.removeEventListener("invalid",s),e.removeEventListener("change",l),null==t||t.removeEventListener("reset",o)}}),[n,s,l,o,r])}function je(e){let t=e.validity;return{badInput:t.badInput,customError:t.customError,patternMismatch:t.patternMismatch,rangeOverflow:t.rangeOverflow,rangeUnderflow:t.rangeUnderflow,stepMismatch:t.stepMismatch,tooLong:t.tooLong,tooShort:t.tooShort,typeMismatch:t.typeMismatch,valueMissing:t.valueMissing,valid:t.valid}}const Xe={border:0,clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"};function Ge(t){let{children:r,elementType:i="div",isFocusable:a,style:s,...l}=t,{visuallyHiddenProps:u}=function(e={}){let{style:t,isFocusable:r}=e,[i,a]=n(!1),{focusWithinProps:s}=Ve({isDisabled:!r,onFocusWithinChange:e=>a(e)});return{visuallyHiddenProps:{...s,style:o((()=>i?t:t?{...Xe,...t}:Xe),[i])}}}(t);return e.createElement(i,S(l,u),r)}var Ye,qe={exports:{}};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/Ye=qe,function(){var e={}.hasOwnProperty;function t(){for(var n=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var a=typeof i;if("string"===a||"number"===a)n.push(i);else if(Array.isArray(i)){if(i.length){var o=t.apply(null,i);o&&n.push(o)}}else if("object"===a){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){n.push(i.toString());continue}for(var s in i)e.call(i,s)&&i[s]&&n.push(s)}}}return n.join(" ")}Ye.exports?(t.default=t,Ye.exports=t):window.classNames=t}();var Je=qe.exports;const Ze=new WeakMap;function Qe(e,t,n){const{value:i,children:o,"aria-label":s,"aria-labelledby":l}=e,u=e.isDisabled||t.isDisabled;null!=o||(null!=s||null!=l)||console.warn("If you do not provide children, you must specify an aria-label for accessibility");const d=t.selectedValue===i,{pressProps:c,isPressed:p}=se({isDisabled:u}),{pressProps:g,isPressed:v}=se({isDisabled:u,onPress(){t.setSelectedValue(i)}}),{focusableProps:f}=ze(S(e,{onFocus:()=>t.setLastFocusedValue(i)}),n),m=S(c,f),_=function(e,t={}){let{labelable:n,isLink:r,propNames:i}=t,a={};for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&(k.has(t)||n&&K.has(t)||r&&F.has(t)||(null==i?void 0:i.has(t))||O.test(t))&&(a[t]=e[t]);return a}(e,{labelable:!0});let h=-1;null!=t.selectedValue?t.selectedValue===i&&(h=0):t.lastFocusedValue!==i&&null!=t.lastFocusedValue||(h=0),u&&(h=void 0);const{name:y,descriptionId:T,errorMessageId:b,validationBehavior:w}=Ze.get(t);return function(e,t,n){let i=r(t),o=E((()=>{n&&n(i.current)}));a((()=>{var t;let n=null==e||null===(t=e.current)||void 0===t?void 0:t.form;return null==n||n.addEventListener("reset",o),()=>{null==n||n.removeEventListener("reset",o)}}),[e,o])}(n,t.selectedValue,t.setSelectedValue),Ue({validationBehavior:w},t,n),{labelProps:S(g,{onClick:e=>e.preventDefault()}),inputProps:S(_,{...m,type:"radio",name:y,tabIndex:h,disabled:u,required:t.isRequired&&"native"===w,checked:d,value:i,onChange:e=>{e.stopPropagation(),t.setSelectedValue(i)},"aria-describedby":[e["aria-describedby"],t.isInvalid?b:null,T].filter(Boolean).join(" ")||void 0}),isDisabled:u,isSelected:d,isPressed:p||v}}var et={stack:"stack__foEop__0-1-24","direction-xsmall-column":"direction-xsmall-column__gSInW__0-1-24","direction-xsmall-row":"direction-xsmall-row__xbYKt__0-1-24","direction-small-column":"direction-small-column__w3qdN__0-1-24","direction-small-row":"direction-small-row__Fi83T__0-1-24","direction-medium-column":"direction-medium-column__uPpiH__0-1-24","direction-medium-row":"direction-medium-row__QXENi__0-1-24","direction-large-column":"direction-large-column__DOuNx__0-1-24","direction-large-row":"direction-large-row__nt-ew__0-1-24","gap-xsmall-1":"gap-xsmall-1__PH7ZL__0-1-24","gap-xsmall-2":"gap-xsmall-2__OF5nS__0-1-24","gap-xsmall-3":"gap-xsmall-3__KP-Pk__0-1-24","gap-xsmall-4":"gap-xsmall-4__J5ttC__0-1-24","gap-small-1":"gap-small-1__s7o8S__0-1-24","gap-small-2":"gap-small-2__nhKiB__0-1-24","gap-small-3":"gap-small-3__SKBDk__0-1-24","gap-small-4":"gap-small-4__ykzrO__0-1-24","gap-medium-1":"gap-medium-1__dN9up__0-1-24","gap-medium-2":"gap-medium-2__UMXHe__0-1-24","gap-medium-3":"gap-medium-3__OIV7e__0-1-24","gap-medium-4":"gap-medium-4__mfb2I__0-1-24","gap-large-1":"gap-large-1__3BTuu__0-1-24","gap-large-2":"gap-large-2__po1On__0-1-24","gap-large-3":"gap-large-3__fK1OL__0-1-24","gap-large-4":"gap-large-4__1-BZF__0-1-24"};const tt=({direction:t={xsmall:"column",small:"column",medium:"column",large:"column"},gap:n={xsmall:1,small:1,medium:1,large:1},children:r})=>{const i=Object.entries(t).map((([e,t])=>et[`direction-${e}-${t}`])).join(" "),a=Object.entries(n).map((([e,t])=>et[`gap-${e}-${t}`])).join(" ");return e.createElement("div",{className:`${et.stack} ${i} ${a}`},r)},nt=e=>({0:"var(--eds-spacing-none)",1:"var(--eds-spacing-small-1)",2:"var(--eds-spacing-small-2)",3:"var(--eds-spacing-small-3)",4:"var(--eds-spacing-small-4)",5:"var(--eds-spacing-small-5)",6:"var(--eds-spacing-medium-1)",7:"var(--eds-spacing-medium-2)",8:"var(--eds-spacing-medium-3)",9:"var(--eds-spacing-medium-4)",10:"var(--eds-spacing-medium-5)",11:"var(--eds-spacing-medium-6)",12:"var(--eds-spacing-medium-7)",13:"var(--eds-spacing-medium-8)",14:"var(--eds-spacing-large-1)",15:"var(--eds-spacing-large-2)",16:"var(--eds-spacing-large-3)",17:"var(--eds-spacing-large-4)",18:"var(--eds-spacing-large-5)"}[e]||"0px");var rt={"heading-h1":"heading-h1__00OVp__0-1-24","heading-h2":"heading-h2__uf8XO__0-1-24","heading-h3":"heading-h3__b58IP__0-1-24","heading-h4":"heading-h4__x0dIm__0-1-24","heading-h5":"heading-h5__dHW8C__0-1-24","heading-h6":"heading-h6__FSif0__0-1-24","heading-display":"heading-display__1B20E__0-1-24","heading-leadtext":"heading-leadtext__fbf5X__0-1-24","heading-subheadline":"heading-subheadline__xgXDJ__0-1-24","text-p-small":"text-p-small__U5YeB__0-1-24","text-p-default":"text-p-default__T3Gv7__0-1-24","text-p-large":"text-p-large__k4P5K__0-1-24","text-line-tiny":"text-line-tiny__IdKxY__0-1-24","text-line-small":"text-line-small__VDnxz__0-1-24","text-line-default":"text-line-default__HHLev__0-1-24","text-line-large":"text-line-large__zY6Xt__0-1-24","text-list-default":"text-list-default__9dn8h__0-1-24","label-tiny":"label-tiny__fwERw__0-1-24","label-small":"label-small__7hSFb__0-1-24","label-default":"label-default__TzEjW__0-1-24","label-large":"label-large__Xe0s7__0-1-24","text-italic":"text-italic__9j6-k__0-1-24","text-underline":"text-underline__-idVq__0-1-24","text-uppercase":"text-uppercase__zT285__0-1-24","text-400":"text-400__veahz__0-1-24","text-600":"text-600__SOu9h__0-1-24"};const it=({variant:t="p",size:n="default",italic:r=!1,underline:i=!1,weight:a="400",uppercase:o=!1,children:s,className:l,mt:u,mb:d,my:c,...p})=>{const g="p"===t?"p":"list"===t?"ul":"div",v=`\n        ${rt[`text-${t}-${n}`]}\n        ${l}\n        ${r?rt["text-italic"]:""}\n        ${i?rt["text-underline"]:""}\n        ${a?rt[`text-${a}`]:""}\n        ${o?rt["text-uppercase"]:""}\n    `,f=(({mt:e,mb:t,my:n})=>({marginTop:void 0!==e?nt(e):void 0!==n?nt(n):void 0,marginBottom:void 0!==t?nt(t):void 0!==n?nt(n):void 0}))({mt:u,mb:d,my:c});return e.createElement(g,{className:v,style:{...f},...p},s)},at=({id:t,size:n="default",children:r,italic:i=!1,underline:a=!1,weight:o="400",uppercase:s=!1,className:l,...u})=>{const d=`\n        ${rt[`label-${n}`]}\n        ${l}\n        ${i?rt["text-italic"]:""}\n        ${a?rt["text-underline"]:""}\n        ${o?rt[`text-${o}`]:""}\n        ${s?rt["text-uppercase"]:""}\n    `;return e.createElement("label",{id:t,className:d,...u},r)},ot=s(null);var st={radio:"radio__BBMoz__0-1-24",radio__label:"radio__label__HdkNu__0-1-24",radio__title:"radio__title__Txxtn__0-1-24",radio__indicator:"radio__indicator__WNRRJ__0-1-24",radio__icon:"radio__icon__qVAHs__0-1-24",radio__suffix:"radio__suffix__-X198__0-1-24","radio__suffix-separator":"radio__suffix-separator__ovrW0__0-1-24","radio--pressed":"radio--pressed__wxjo2__0-1-24","radio--selected":"radio--selected__TD2Gh__0-1-24","radio--focused":"radio--focused__JP9dG__0-1-24","radio--invalid":"radio--invalid__5GkMN__0-1-24",messages:"messages__boZEQ__0-1-24","messages__description--regular":"messages__description--regular__Y11l3__0-1-24","messages__description--warning":"messages__description--warning__T7U8l__0-1-24"};const lt=l(((s,l)=>{const u=function(e){const t=r(null);return o((()=>({get current(){return t.current},set current(n){t.current=n,"function"==typeof e?e(n):e&&(e.current=n)}})),[e])}(l),d=r(null),c=u||d,{children:p,description:g,descriptionSeverity:f="regular",suffix:m,tooltipTrigger:_}=s,h=t(ot),{inputProps:y,isSelected:E,isPressed:P,labelProps:x}=Qe(s,h,c),{isFocusVisible:L,focusProps:M}=function(e={}){let{autoFocus:t=!1,isTextInput:a,within:o}=e,s=r({isFocused:!1,isFocusVisible:t||Ie()}),[l,u]=n(!1),[d,c]=n((()=>s.current.isFocused&&s.current.isFocusVisible)),p=i((()=>c(s.current.isFocused&&s.current.isFocusVisible)),[]),g=i((e=>{s.current.isFocused=e,u(e),p()}),[p]);Ce((e=>{s.current.isFocusVisible=e,p()}),[],{isTextInput:a});let{focusProps:v}=ye({isDisabled:o,onFocusChange:g}),{focusWithinProps:f}=Ve({isDisabled:!o,onFocusWithinChange:g});return{isFocused:l,isFocusVisible:d,focusProps:o?f:v}}(),k=function(e){let[t,o]=n(e),s=r(null),l=v(t),u=i((e=>{s.current=e}),[]);return b&&w.set(l,u),T((()=>{let e=l;return()=>{w.delete(e)}}),[l]),a((()=>{let e=s.current;e&&(s.current=null,o(e))})),l}(),K=Je(st.radio,{[st["radio--pressed"]]:P,[st["radio--selected"]]:E,[st["radio--focused"]]:L,[st["radio--invalid"]]:h?.isInvalid}),F=Je({[st["messages__description--regular"]]:"regular"===f,[st["messages__description--warning"]]:"warning"===f}),{"aria-describedby":O,...D}=y;return e.createElement(tt,null,e.createElement(at,{className:K,...x},e.createElement(Ge,null,e.createElement("input",{...S(D,M),ref:c,"aria-describedby":`${k} ${O}`})),e.createElement("span",{className:st.radio__indicator,"aria-hidden":"true"},e.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",className:st.radio__icon},e.createElement("circle",{cx:"8",cy:"8",r:"5"}))),e.createElement("div",{className:st.radio__label},e.createElement("span",{className:st.radio__title},p),m&&e.createElement(e.Fragment,null,e.createElement("span",{className:st["radio__suffix-separator"]}),e.createElement(it,{variant:"line",italic:!0,size:"small",className:st.radio__suffix},m))),_),g&&e.createElement("div",{className:st.messages},e.createElement(it,{variant:"line",size:"small",id:k,className:F},g)))}));lt.displayName="Radio";export{lt as Radio};
//# sourceMappingURL=index.js.map
