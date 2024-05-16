"use client";import e,{useRef as t,useMemo as n,useEffect as r,useCallback as i,useState as o,useContext as a,createContext as s,forwardRef as l}from"react";function u(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=u(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function c(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=u(e))&&(r&&(r+=" "),r+=t);return r}const d="undefined"!=typeof document?e.useLayoutEffect:()=>{};function p(e){const n=t(null);return d((()=>{n.current=e}),[e]),i(((...e)=>{const t=n.current;return null==t?void 0:t(...e)}),[])}let g=new Map;function v(e,t){if(e===t)return e;let n=g.get(e);if(n)return n(t),t;let r=g.get(t);return r?(r(e),e):t}function f(...e){return(...t)=>{for(let n of e)"function"==typeof n&&n(...t)}}const m=e=>{var t;return null!==(t=null==e?void 0:e.ownerDocument)&&void 0!==t?t:document},h=e=>{if(e&&"window"in e&&e.window===e)return e;return m(e).defaultView||window};function _(...e){let t={...e[0]};for(let n=1;n<e.length;n++){let r=e[n];for(let e in r){let n=t[e],i=r[e];"function"==typeof n&&"function"==typeof i&&"o"===e[0]&&"n"===e[1]&&e.charCodeAt(2)>=65&&e.charCodeAt(2)<=90?t[e]=f(n,i):"className"!==e&&"UNSAFE_className"!==e||"string"!=typeof n||"string"!=typeof i?"id"===e&&n&&i?t.id=v(n,i):t[e]=void 0!==i?i:n:t[e]=c(n,i)}}return t}const y=new Set(["id"]),T=new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]),E=new Set(["href","target","rel","download","ping","referrerPolicy"]),b=/^(data-.*)$/;function w(e){if(function(){if(null==P){P=!1;try{document.createElement("div").focus({get preventScroll(){return P=!0,!0}})}catch(e){}}return P}())e.focus({preventScroll:!0});else{let t=function(e){let t=e.parentNode,n=[],r=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==r;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;r instanceof HTMLElement&&n.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft});return n}(e);e.focus(),function(e){for(let{element:t,scrollTop:n,scrollLeft:r}of e)t.scrollTop=n,t.scrollLeft=r}(t)}}let P=null;function x(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.brands.some((t=>e.test(t.brand))))||e.test(window.navigator.userAgent))}function L(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&e.test((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.platform)||window.navigator.platform)}function M(){return L(/^Mac/i)}function S(){return L(/^iPad/i)||M()&&navigator.maxTouchPoints>1}function k(){return L(/^iPhone/i)||S()}function K(){return x(/AppleWebKit/i)&&!x(/Chrome/i)}function F(){return x(/Android/i)}function O(e,t,n=!0){var r,i;let{metaKey:o,ctrlKey:a,altKey:s,shiftKey:l}=t;x(/Firefox/i)&&(null===(i=window.event)||void 0===i||null===(r=i.type)||void 0===r?void 0:r.startsWith("key"))&&"_blank"===e.target&&(M()?o=!0:a=!0);let u=K()&&M()&&!S()?new KeyboardEvent("keydown",{keyIdentifier:"Enter",metaKey:o,ctrlKey:a,altKey:s,shiftKey:l}):new MouseEvent("click",{metaKey:o,ctrlKey:a,altKey:s,shiftKey:l,bubbles:!0,cancelable:!0});O.isOpening=n,w(e),e.dispatchEvent(u),O.isOpening=!1}O.isOpening=!1;let D=new Map,I=new Set;function C(){if("undefined"==typeof window)return;function e(e){return"propertyName"in e}let t=n=>{if(!e(n)||!n.target)return;let r=D.get(n.target);if(r&&(r.delete(n.propertyName),0===r.size&&(n.target.removeEventListener("transitioncancel",t),D.delete(n.target)),0===D.size)){for(let e of I)e();I.clear()}};document.body.addEventListener("transitionrun",(n=>{if(!e(n)||!n.target)return;let r=D.get(n.target);r||(r=new Set,D.set(n.target,r),n.target.addEventListener("transitioncancel",t,{once:!0})),r.add(n.propertyName)})),document.body.addEventListener("transitionend",t)}function H(e){requestAnimationFrame((()=>{0===D.size?e():I.add(e)}))}function N(e,t){d((()=>{if(e&&e.ref&&t)return e.ref.current=t.current,()=>{e.ref&&(e.ref.current=null)}}))}function V(e){return!(0!==e.mozInputSource||!e.isTrusted)||(F()&&e.pointerType?"click"===e.type&&1===e.buttons:0===e.detail&&!e.pointerType)}function A(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function R(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}function $(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,A(e,t,"set"),n),n}"undefined"!=typeof document&&("loading"!==document.readyState?C():document.addEventListener("DOMContentLoaded",C));let W="default",B="",z=new WeakMap;function j(e){if(k()){if("default"===W){const t=m(e);B=t.documentElement.style.webkitUserSelect,t.documentElement.style.webkitUserSelect="none"}W="disabled"}else(e instanceof HTMLElement||e instanceof SVGElement)&&(z.set(e,e.style.userSelect),e.style.userSelect="none")}function U(e){if(k()){if("disabled"!==W)return;W="restoring",setTimeout((()=>{H((()=>{if("restoring"===W){const t=m(e);"none"===t.documentElement.style.webkitUserSelect&&(t.documentElement.style.webkitUserSelect=B||""),B="",W="default"}}))}),300)}else if((e instanceof HTMLElement||e instanceof SVGElement)&&e&&z.has(e)){let t=z.get(e);"none"===e.style.userSelect&&(e.style.userSelect=t),""===e.getAttribute("style")&&e.removeAttribute("style"),z.delete(e)}}const X=e.createContext({register:()=>{}});X.displayName="PressResponderContext";var G=new WeakMap;class Y{continuePropagation(){$(this,G,!1)}get shouldStopPropagation(){return function(e,t){return t.get?t.get.call(e):t.value}(e=this,A(e,G,"get"));var e}constructor(e,t,n){R(this,G,{writable:!0,value:void 0}),$(this,G,!0),this.type=e,this.pointerType=t,this.target=n.currentTarget,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.ctrlKey=n.ctrlKey,this.altKey=n.altKey}}const q=Symbol("linkClicked");function J(e){let{onPress:s,onPressChange:l,onPressStart:u,onPressEnd:c,onPressUp:d,isDisabled:g,isPressed:v,preventFocusOnPress:y,shouldCancelOnPointerExit:T,allowTextSelectionOnPress:E,ref:b,...P}=function(e){let t=a(X);if(t){let{register:n,...r}=t;e=_(r,e),n()}return N(t,e.ref),e}(e),[x,L]=o(!1),S=t({isPressed:!1,ignoreEmulatedMouseEvents:!1,ignoreClickAfterPress:!1,didFirePressStart:!1,isTriggeringEvent:!1,activePointerId:null,target:null,isOverTarget:!1,pointerType:null}),{addGlobalListener:k,removeAllGlobalListeners:K}=function(){let e=t(new Map),n=i(((t,n,r,i)=>{let o=(null==i?void 0:i.once)?(...t)=>{e.current.delete(r),r(...t)}:r;e.current.set(r,{type:n,eventTarget:t,fn:o,options:i}),t.addEventListener(n,r,i)}),[]),o=i(((t,n,r,i)=>{var o;let a=(null===(o=e.current.get(r))||void 0===o?void 0:o.fn)||r;t.removeEventListener(n,a,i),e.current.delete(r)}),[]),a=i((()=>{e.current.forEach(((e,t)=>{o(e.eventTarget,e.type,t,e.options)}))}),[o]);return r((()=>a),[a]),{addGlobalListener:n,removeGlobalListener:o,removeAllGlobalListeners:a}}(),D=p(((e,t)=>{let n=S.current;if(g||n.didFirePressStart)return!1;let r=!0;if(n.isTriggeringEvent=!0,u){let n=new Y("pressstart",t,e);u(n),r=n.shouldStopPropagation}return l&&l(!0),n.isTriggeringEvent=!1,n.didFirePressStart=!0,L(!0),r})),I=p(((e,t,n=!0)=>{let r=S.current;if(!r.didFirePressStart)return!1;r.ignoreClickAfterPress=!0,r.didFirePressStart=!1,r.isTriggeringEvent=!0;let i=!0;if(c){let n=new Y("pressend",t,e);c(n),i=n.shouldStopPropagation}if(l&&l(!1),L(!1),s&&n&&!g){let n=new Y("press",t,e);s(n),i&&(i=n.shouldStopPropagation)}return r.isTriggeringEvent=!1,i})),C=p(((e,t)=>{let n=S.current;if(g)return!1;if(d){n.isTriggeringEvent=!0;let r=new Y("pressup",t,e);return d(r),n.isTriggeringEvent=!1,r.shouldStopPropagation}return!0})),H=p((e=>{let t=S.current;t.isPressed&&t.target&&(t.isOverTarget&&null!=t.pointerType&&I(te(t.target,e),t.pointerType,!1),t.isPressed=!1,t.isOverTarget=!1,t.activePointerId=null,t.pointerType=null,K(),E||U(t.target))})),A=p((e=>{T&&H(e)})),R=n((()=>{let e=S.current,t={onKeyDown(t){if(Z(t.nativeEvent,t.currentTarget)&&t.currentTarget.contains(t.target)){var r;ie(t.target,t.key)&&t.preventDefault();let i=!0;if(!e.isPressed&&!t.repeat){e.target=t.currentTarget,e.isPressed=!0,i=D(t,"keyboard");let r=t.currentTarget,o=t=>{Z(t,r)&&!t.repeat&&r.contains(t.target)&&e.target&&C(te(e.target,t),"keyboard")};k(m(t.currentTarget),"keyup",f(o,n),!0)}i&&t.stopPropagation(),t.metaKey&&M()&&(null===(r=e.metaKeyEvents)||void 0===r||r.set(t.key,t.nativeEvent))}else"Meta"===t.key&&(e.metaKeyEvents=new Map)},onClick(t){if((!t||t.currentTarget.contains(t.target))&&t&&0===t.button&&!e.isTriggeringEvent&&!O.isOpening){let n=!0;if(g&&t.preventDefault(),!e.ignoreClickAfterPress&&!e.ignoreEmulatedMouseEvents&&!e.isPressed&&("virtual"===e.pointerType||V(t.nativeEvent))){g||y||w(t.currentTarget);let e=D(t,"virtual"),r=C(t,"virtual"),i=I(t,"virtual");n=e&&r&&i}e.ignoreEmulatedMouseEvents=!1,e.ignoreClickAfterPress=!1,n&&t.stopPropagation()}}},n=t=>{var n;if(e.isPressed&&e.target&&Z(t,e.target)){var r;ie(t.target,t.key)&&t.preventDefault();let n=t.target;I(te(e.target,t),"keyboard",e.target.contains(n)),K(),"Enter"!==t.key&&Q(e.target)&&e.target.contains(n)&&!t[q]&&(t[q]=!0,O(e.target,t,!1)),e.isPressed=!1,null===(r=e.metaKeyEvents)||void 0===r||r.delete(t.key)}else if("Meta"===t.key&&(null===(n=e.metaKeyEvents)||void 0===n?void 0:n.size)){var i;let t=e.metaKeyEvents;e.metaKeyEvents=void 0;for(let n of t.values())null===(i=e.target)||void 0===i||i.dispatchEvent(new KeyboardEvent("keyup",n))}};if("undefined"!=typeof PointerEvent){t.onPointerDown=t=>{if(0!==t.button||!t.currentTarget.contains(t.target))return;if(o=t.nativeEvent,!F()&&0===o.width&&0===o.height||1===o.width&&1===o.height&&0===o.pressure&&0===o.detail&&"mouse"===o.pointerType)return void(e.pointerType="virtual");var o;re(t.currentTarget)&&t.preventDefault(),e.pointerType=t.pointerType;let a=!0;e.isPressed||(e.isPressed=!0,e.isOverTarget=!0,e.activePointerId=t.pointerId,e.target=t.currentTarget,g||y||w(t.currentTarget),E||j(e.target),a=D(t,e.pointerType),k(m(t.currentTarget),"pointermove",n,!1),k(m(t.currentTarget),"pointerup",r,!1),k(m(t.currentTarget),"pointercancel",i,!1)),a&&t.stopPropagation()},t.onMouseDown=e=>{e.currentTarget.contains(e.target)&&0===e.button&&(re(e.currentTarget)&&e.preventDefault(),e.stopPropagation())},t.onPointerUp=t=>{t.currentTarget.contains(t.target)&&"virtual"!==e.pointerType&&0===t.button&&ne(t,t.currentTarget)&&C(t,e.pointerType||t.pointerType)};let n=t=>{t.pointerId===e.activePointerId&&(e.target&&ne(t,e.target)?e.isOverTarget||null==e.pointerType||(e.isOverTarget=!0,D(te(e.target,t),e.pointerType)):e.target&&e.isOverTarget&&null!=e.pointerType&&(e.isOverTarget=!1,I(te(e.target,t),e.pointerType,!1),A(t)))},r=t=>{t.pointerId===e.activePointerId&&e.isPressed&&0===t.button&&e.target&&(ne(t,e.target)&&null!=e.pointerType?I(te(e.target,t),e.pointerType):e.isOverTarget&&null!=e.pointerType&&I(te(e.target,t),e.pointerType,!1),e.isPressed=!1,e.isOverTarget=!1,e.activePointerId=null,e.pointerType=null,K(),E||U(e.target))},i=e=>{H(e)};t.onDragStart=e=>{e.currentTarget.contains(e.target)&&H(e)}}else{t.onMouseDown=t=>{if(0!==t.button||!t.currentTarget.contains(t.target))return;if(re(t.currentTarget)&&t.preventDefault(),e.ignoreEmulatedMouseEvents)return void t.stopPropagation();e.isPressed=!0,e.isOverTarget=!0,e.target=t.currentTarget,e.pointerType=V(t.nativeEvent)?"virtual":"mouse",g||y||w(t.currentTarget),D(t,e.pointerType)&&t.stopPropagation(),k(m(t.currentTarget),"mouseup",n,!1)},t.onMouseEnter=t=>{if(!t.currentTarget.contains(t.target))return;let n=!0;e.isPressed&&!e.ignoreEmulatedMouseEvents&&null!=e.pointerType&&(e.isOverTarget=!0,n=D(t,e.pointerType)),n&&t.stopPropagation()},t.onMouseLeave=t=>{if(!t.currentTarget.contains(t.target))return;let n=!0;e.isPressed&&!e.ignoreEmulatedMouseEvents&&null!=e.pointerType&&(e.isOverTarget=!1,n=I(t,e.pointerType,!1),A(t)),n&&t.stopPropagation()},t.onMouseUp=t=>{t.currentTarget.contains(t.target)&&(e.ignoreEmulatedMouseEvents||0!==t.button||C(t,e.pointerType||"mouse"))};let n=t=>{0===t.button&&(e.isPressed=!1,K(),e.ignoreEmulatedMouseEvents?e.ignoreEmulatedMouseEvents=!1:(e.target&&ne(t,e.target)&&null!=e.pointerType?I(te(e.target,t),e.pointerType):e.target&&e.isOverTarget&&null!=e.pointerType&&I(te(e.target,t),e.pointerType,!1),e.isOverTarget=!1))};t.onTouchStart=t=>{if(!t.currentTarget.contains(t.target))return;let n=function(e){const{targetTouches:t}=e;return t.length>0?t[0]:null}(t.nativeEvent);n&&(e.activePointerId=n.identifier,e.ignoreEmulatedMouseEvents=!0,e.isOverTarget=!0,e.isPressed=!0,e.target=t.currentTarget,e.pointerType="touch",g||y||w(t.currentTarget),E||j(e.target),D(t,e.pointerType)&&t.stopPropagation(),k(h(t.currentTarget),"scroll",r,!0))},t.onTouchMove=t=>{if(!t.currentTarget.contains(t.target))return;if(!e.isPressed)return void t.stopPropagation();let n=ee(t.nativeEvent,e.activePointerId),r=!0;n&&ne(n,t.currentTarget)?e.isOverTarget||null==e.pointerType||(e.isOverTarget=!0,r=D(t,e.pointerType)):e.isOverTarget&&null!=e.pointerType&&(e.isOverTarget=!1,r=I(t,e.pointerType,!1),A(t)),r&&t.stopPropagation()},t.onTouchEnd=t=>{if(!t.currentTarget.contains(t.target))return;if(!e.isPressed)return void t.stopPropagation();let n=ee(t.nativeEvent,e.activePointerId),r=!0;n&&ne(n,t.currentTarget)&&null!=e.pointerType?(C(t,e.pointerType),r=I(t,e.pointerType)):e.isOverTarget&&null!=e.pointerType&&(r=I(t,e.pointerType,!1)),r&&t.stopPropagation(),e.isPressed=!1,e.activePointerId=null,e.isOverTarget=!1,e.ignoreEmulatedMouseEvents=!0,e.target&&!E&&U(e.target),K()},t.onTouchCancel=t=>{t.currentTarget.contains(t.target)&&(t.stopPropagation(),e.isPressed&&H(t))};let r=t=>{e.isPressed&&t.target.contains(e.target)&&H({currentTarget:e.target,shiftKey:!1,ctrlKey:!1,metaKey:!1,altKey:!1})};t.onDragStart=e=>{e.currentTarget.contains(e.target)&&H(e)}}return t}),[k,g,y,K,E,H,A,I,D,C]);return r((()=>()=>{var e;E||U(null!==(e=S.current.target)&&void 0!==e?e:void 0)}),[E]),{isPressed:v||x,pressProps:_(P,R)}}function Q(e){return"A"===e.tagName&&e.hasAttribute("href")}function Z(e,t){const{key:n,code:r}=e,i=t,o=i.getAttribute("role");return!("Enter"!==n&&" "!==n&&"Spacebar"!==n&&"Space"!==r||i instanceof h(i).HTMLInputElement&&!ae(i,n)||i instanceof h(i).HTMLTextAreaElement||i.isContentEditable||("link"===o||!o&&Q(i))&&"Enter"!==n)}function ee(e,t){const n=e.changedTouches;for(let e=0;e<n.length;e++){const r=n[e];if(r.identifier===t)return r}return null}function te(e,t){return{currentTarget:e,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,altKey:t.altKey}}function ne(e,t){let n=t.getBoundingClientRect(),r=function(e){let t=0,n=0;return void 0!==e.width?t=e.width/2:void 0!==e.radiusX&&(t=e.radiusX),void 0!==e.height?n=e.height/2:void 0!==e.radiusY&&(n=e.radiusY),{top:e.clientY-n,right:e.clientX+t,bottom:e.clientY+n,left:e.clientX-t}}(e);return o=r,!((i=n).left>o.right||o.left>i.right||i.top>o.bottom||o.top>i.bottom);var i,o}function re(e){return!(e instanceof HTMLElement&&e.hasAttribute("draggable"))}function ie(e,t){return e instanceof HTMLInputElement?!ae(e,t):e instanceof HTMLButtonElement?"submit"!==e.type&&"reset"!==e.type:!Q(e)}const oe=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function ae(e,t){return"checkbox"===e.type||"radio"===e.type?" "===t:oe.has(e.type)}class se{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(e,t){this.nativeEvent=t,this.target=t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget,this.bubbles=t.bubbles,this.cancelable=t.cancelable,this.defaultPrevented=t.defaultPrevented,this.eventPhase=t.eventPhase,this.isTrusted=t.isTrusted,this.timeStamp=t.timeStamp,this.type=e}}function le(e){let n=t({isFocused:!1,observer:null});d((()=>{const e=n.current;return()=>{e.observer&&(e.observer.disconnect(),e.observer=null)}}),[]);let r=p((t=>{null==e||e(t)}));return i((e=>{if(e.target instanceof HTMLButtonElement||e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLSelectElement){n.current.isFocused=!0;let t=e.target,i=e=>{n.current.isFocused=!1,t.disabled&&r(new se("blur",e)),n.current.observer&&(n.current.observer.disconnect(),n.current.observer=null)};t.addEventListener("focusout",i,{once:!0}),n.current.observer=new MutationObserver((()=>{if(n.current.isFocused&&t.disabled){var e;null===(e=n.current.observer)||void 0===e||e.disconnect();let r=t===document.activeElement?null:document.activeElement;t.dispatchEvent(new FocusEvent("blur",{relatedTarget:r})),t.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:r}))}})),n.current.observer.observe(t,{attributes:!0,attributeFilter:["disabled"]})}}),[r])}function ue(e){let{isDisabled:t,onFocus:n,onBlur:r,onFocusChange:o}=e;const a=i((e=>{if(e.target===e.currentTarget)return r&&r(e),o&&o(!1),!0}),[r,o]),s=le(a),l=i((e=>{e.target===e.currentTarget&&document.activeElement===e.target&&(n&&n(e),o&&o(!0),s(e))}),[o,n,s]);return{focusProps:{onFocus:!t&&(n||o||r)?l:void 0,onBlur:t||!r&&!o?void 0:a}}}let ce=null,de=new Set,pe=new Map,ge=!1,ve=!1;const fe={Tab:!0,Escape:!0};function me(e,t){for(let n of de)n(e,t)}function he(e){ge=!0,function(e){return!(e.metaKey||!M()&&e.altKey||e.ctrlKey||"Control"===e.key||"Shift"===e.key||"Meta"===e.key)}(e)&&(ce="keyboard",me("keyboard",e))}function _e(e){ce="pointer","mousedown"!==e.type&&"pointerdown"!==e.type||(ge=!0,me("pointer",e))}function ye(e){V(e)&&(ge=!0,ce="virtual")}function Te(e){e.target!==window&&e.target!==document&&(ge||ve||(ce="virtual",me("virtual",e)),ge=!1,ve=!1)}function Ee(){ge=!1,ve=!0}function be(e){if("undefined"==typeof window||pe.get(h(e)))return;const t=h(e),n=m(e);let r=t.HTMLElement.prototype.focus;t.HTMLElement.prototype.focus=function(){ge=!0,r.apply(this,arguments)},n.addEventListener("keydown",he,!0),n.addEventListener("keyup",he,!0),n.addEventListener("click",ye,!0),t.addEventListener("focus",Te,!0),t.addEventListener("blur",Ee,!1),"undefined"!=typeof PointerEvent?(n.addEventListener("pointerdown",_e,!0),n.addEventListener("pointermove",_e,!0),n.addEventListener("pointerup",_e,!0)):(n.addEventListener("mousedown",_e,!0),n.addEventListener("mousemove",_e,!0),n.addEventListener("mouseup",_e,!0)),t.addEventListener("beforeunload",(()=>{we(e)}),{once:!0}),pe.set(t,{focus:r})}const we=(e,t)=>{const n=h(e),r=m(e);t&&r.removeEventListener("DOMContentLoaded",t),pe.has(n)&&(n.HTMLElement.prototype.focus=pe.get(n).focus,r.removeEventListener("keydown",he,!0),r.removeEventListener("keyup",he,!0),r.removeEventListener("click",ye,!0),n.removeEventListener("focus",Te,!0),n.removeEventListener("blur",Ee,!1),"undefined"!=typeof PointerEvent?(r.removeEventListener("pointerdown",_e,!0),r.removeEventListener("pointermove",_e,!0),r.removeEventListener("pointerup",_e,!0)):(r.removeEventListener("mousedown",_e,!0),r.removeEventListener("mousemove",_e,!0),r.removeEventListener("mouseup",_e,!0)),pe.delete(n))};function Pe(){return"pointer"!==ce}"undefined"!=typeof document&&function(e){const t=m(e);let n;"loading"!==t.readyState?be(e):(n=()=>{be(e)},t.addEventListener("DOMContentLoaded",n))}();const xe=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function Le(e,t,n){be(),r((()=>{let t=(t,r)=>{(function(e,t,n){var r;const i="undefined"!=typeof window?h(null==n?void 0:n.target).HTMLInputElement:HTMLInputElement,o="undefined"!=typeof window?h(null==n?void 0:n.target).HTMLTextAreaElement:HTMLTextAreaElement,a="undefined"!=typeof window?h(null==n?void 0:n.target).HTMLElement:HTMLElement,s="undefined"!=typeof window?h(null==n?void 0:n.target).KeyboardEvent:KeyboardEvent;return!((e=e||(null==n?void 0:n.target)instanceof i&&!xe.has(null==n||null===(r=n.target)||void 0===r?void 0:r.type)||(null==n?void 0:n.target)instanceof o||(null==n?void 0:n.target)instanceof a&&(null==n?void 0:n.target.isContentEditable))&&"keyboard"===t&&n instanceof s&&!fe[n.key])})(!!(null==n?void 0:n.isTextInput),t,r)&&e(Pe())};return de.add(t),()=>{de.delete(t)}}),t)}function Me(e){let{isDisabled:n,onBlurWithin:r,onFocusWithin:o,onFocusWithinChange:a}=e,s=t({isFocusWithin:!1}),l=i((e=>{s.current.isFocusWithin&&!e.currentTarget.contains(e.relatedTarget)&&(s.current.isFocusWithin=!1,r&&r(e),a&&a(!1))}),[r,a,s]),u=le(l),c=i((e=>{s.current.isFocusWithin||document.activeElement!==e.target||(o&&o(e),a&&a(!0),s.current.isFocusWithin=!0,u(e))}),[o,a,u]);return n?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:c,onBlur:l}}}function Se(e){if(!e)return;let t=!0;return n=>{let r={...n,preventDefault(){n.preventDefault()},isDefaultPrevented:()=>n.isDefaultPrevented(),stopPropagation(){console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")},continuePropagation(){t=!1}};e(r),t&&n.stopPropagation()}}function ke(e){const t=m(e);if("virtual"===ce){let n=t.activeElement;H((()=>{t.activeElement===n&&e.isConnected&&w(e)}))}else w(e)}function Ke(e,t){return!!e&&(!!t&&t.some((t=>t.contains(e))))}class Fe{get size(){return this.fastMap.size}getTreeNode(e){return this.fastMap.get(e)}addTreeNode(e,t,n){let r=this.fastMap.get(null!=t?t:null);if(!r)return;let i=new Oe({scopeRef:e});r.addChild(i),i.parent=r,this.fastMap.set(e,i),n&&(i.nodeToRestore=n)}addNode(e){this.fastMap.set(e.scopeRef,e)}removeTreeNode(e){if(null===e)return;let t=this.fastMap.get(e);if(!t)return;let n=t.parent;for(let e of this.traverse())e!==t&&t.nodeToRestore&&e.nodeToRestore&&t.scopeRef&&t.scopeRef.current&&Ke(e.nodeToRestore,t.scopeRef.current)&&(e.nodeToRestore=t.nodeToRestore);let r=t.children;n&&(n.removeChild(t),r.size>0&&r.forEach((e=>n&&n.addChild(e)))),this.fastMap.delete(t.scopeRef)}*traverse(e=this.root){if(null!=e.scopeRef&&(yield e),e.children.size>0)for(let t of e.children)yield*this.traverse(t)}clone(){var e;let t=new Fe;var n;for(let r of this.traverse())t.addTreeNode(r.scopeRef,null!==(n=null===(e=r.parent)||void 0===e?void 0:e.scopeRef)&&void 0!==n?n:null,r.nodeToRestore);return t}constructor(){this.fastMap=new Map,this.root=new Oe({scopeRef:null}),this.fastMap.set(null,this.root)}}class Oe{addChild(e){this.children.add(e),e.parent=this}removeChild(e){this.children.delete(e),e.parent=void 0}constructor(e){this.children=new Set,this.contain=!1,this.scopeRef=e.scopeRef}}new Fe;let De=e.createContext(null);function Ie(e,n){let{focusProps:i}=ue(e),{keyboardProps:o}=function(e){return{keyboardProps:e.isDisabled?{}:{onKeyDown:Se(e.onKeyDown),onKeyUp:Se(e.onKeyUp)}}}(e),s=_(i,o),l=function(e){let t=a(De)||{};N(t,e);let{ref:n,...r}=t;return r}(n),u=e.isDisabled?{}:l,c=t(e.autoFocus);return r((()=>{c.current&&n.current&&ke(n.current),c.current=!1}),[n]),{focusableProps:_({...s,tabIndex:e.excludeFromTabOrder&&!e.isDisabled?-1:void 0},u)}}function Ce(e,t,n){let{validationBehavior:i,focus:o}=e;d((()=>{if("native"===i&&(null==n?void 0:n.current)){let r=t.realtimeValidation.isInvalid?t.realtimeValidation.validationErrors.join(" ")||"Invalid value.":"";n.current.setCustomValidity(r),n.current.hasAttribute("title")||(n.current.title=""),t.realtimeValidation.isInvalid||t.updateValidation({isInvalid:!(e=n.current).validity.valid,validationDetails:He(e),validationErrors:e.validationMessage?[e.validationMessage]:[]})}var e}));let a=p((()=>{t.resetValidation()})),s=p((e=>{var r;t.displayValidation.isInvalid||t.commitValidation();let i=null==n||null===(r=n.current)||void 0===r?void 0:r.form;var a,s;!e.defaultPrevented&&n&&i&&function(e){for(let t=0;t<e.elements.length;t++){let n=e.elements[t];if(!n.validity.valid)return n}return null}(i)===n.current&&(o?o():null===(a=n.current)||void 0===a||a.focus(),ce=s="keyboard",me(s,null));e.preventDefault()})),l=p((()=>{t.commitValidation()}));r((()=>{let e=null==n?void 0:n.current;if(!e)return;let t=e.form;return e.addEventListener("invalid",s),e.addEventListener("change",l),null==t||t.addEventListener("reset",a),()=>{e.removeEventListener("invalid",s),e.removeEventListener("change",l),null==t||t.removeEventListener("reset",a)}}),[n,s,l,a,i])}function He(e){let t=e.validity;return{badInput:t.badInput,customError:t.customError,patternMismatch:t.patternMismatch,rangeOverflow:t.rangeOverflow,rangeUnderflow:t.rangeUnderflow,stepMismatch:t.stepMismatch,tooLong:t.tooLong,tooShort:t.tooShort,typeMismatch:t.typeMismatch,valueMissing:t.valueMissing,valid:t.valid}}const Ne={border:0,clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"};function Ve(t){let{children:r,elementType:i="div",isFocusable:a,style:s,...l}=t,{visuallyHiddenProps:u}=function(e={}){let{style:t,isFocusable:r}=e,[i,a]=o(!1),{focusWithinProps:s}=Me({isDisabled:!r,onFocusWithinChange:e=>a(e)});return{visuallyHiddenProps:{...s,style:n((()=>i?t:t?{...Ne,...t}:Ne),[i])}}}(t);return e.createElement(i,_(l,u),r)}var Ae,Re={exports:{}};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/Ae=Re,function(){var e={}.hasOwnProperty;function t(){for(var n=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var o=typeof i;if("string"===o||"number"===o)n.push(i);else if(Array.isArray(i)){if(i.length){var a=t.apply(null,i);a&&n.push(a)}}else if("object"===o){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){n.push(i.toString());continue}for(var s in i)e.call(i,s)&&i[s]&&n.push(s)}}}return n.join(" ")}Ae.exports?(t.default=t,Ae.exports=t):window.classNames=t}();var $e=Re.exports;const We=new WeakMap;function Be(e,n,i){const{value:o,children:a,"aria-label":s,"aria-labelledby":l}=e,u=e.isDisabled||n.isDisabled;null!=a||(null!=s||null!=l)||console.warn("If you do not provide children, you must specify an aria-label for accessibility");const c=n.selectedValue===o,{pressProps:d,isPressed:g}=J({isDisabled:u}),{pressProps:v,isPressed:f}=J({isDisabled:u,onPress(){n.setSelectedValue(o)}}),{focusableProps:m}=Ie(_(e,{onFocus:()=>n.setLastFocusedValue(o)}),i),h=_(d,m),w=function(e,t={}){let{labelable:n,isLink:r,propNames:i}=t,o={};for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&(y.has(t)||n&&T.has(t)||r&&E.has(t)||(null==i?void 0:i.has(t))||b.test(t))&&(o[t]=e[t]);return o}(e,{labelable:!0});let P=-1;null!=n.selectedValue?n.selectedValue===o&&(P=0):n.lastFocusedValue!==o&&null!=n.lastFocusedValue||(P=0),u&&(P=void 0);const{name:x,descriptionId:L,errorMessageId:M,validationBehavior:S}=We.get(n);return function(e,n,i){let o=t(n),a=p((()=>{i&&i(o.current)}));r((()=>{var t;let n=null==e||null===(t=e.current)||void 0===t?void 0:t.form;return null==n||n.addEventListener("reset",a),()=>{null==n||n.removeEventListener("reset",a)}}),[e,a])}(i,n.selectedValue,n.setSelectedValue),Ce({validationBehavior:S},n,i),{labelProps:_(v,{onClick:e=>e.preventDefault()}),inputProps:_(w,{...h,type:"radio",name:x,tabIndex:P,disabled:u,required:n.isRequired&&"native"===S,checked:c,value:o,onChange:e=>{e.stopPropagation(),n.setSelectedValue(o)},"aria-describedby":[e["aria-describedby"],n.isInvalid?M:null,L].filter(Boolean).join(" ")||void 0}),isDisabled:u,isSelected:c,isPressed:g||f}}var ze={stack:"stack__foEop__0-1-40","direction-xsmall-column":"direction-xsmall-column__gSInW__0-1-40","direction-xsmall-row":"direction-xsmall-row__xbYKt__0-1-40","direction-small-column":"direction-small-column__w3qdN__0-1-40","direction-small-row":"direction-small-row__Fi83T__0-1-40","direction-medium-column":"direction-medium-column__uPpiH__0-1-40","direction-medium-row":"direction-medium-row__QXENi__0-1-40","direction-large-column":"direction-large-column__DOuNx__0-1-40","direction-large-row":"direction-large-row__nt-ew__0-1-40","gap-xsmall-1":"gap-xsmall-1__PH7ZL__0-1-40","gap-xsmall-2":"gap-xsmall-2__OF5nS__0-1-40","gap-xsmall-3":"gap-xsmall-3__KP-Pk__0-1-40","gap-xsmall-4":"gap-xsmall-4__J5ttC__0-1-40","gap-small-1":"gap-small-1__s7o8S__0-1-40","gap-small-2":"gap-small-2__nhKiB__0-1-40","gap-small-3":"gap-small-3__SKBDk__0-1-40","gap-small-4":"gap-small-4__ykzrO__0-1-40","gap-medium-1":"gap-medium-1__dN9up__0-1-40","gap-medium-2":"gap-medium-2__UMXHe__0-1-40","gap-medium-3":"gap-medium-3__OIV7e__0-1-40","gap-medium-4":"gap-medium-4__mfb2I__0-1-40","gap-large-1":"gap-large-1__3BTuu__0-1-40","gap-large-2":"gap-large-2__po1On__0-1-40","gap-large-3":"gap-large-3__fK1OL__0-1-40","gap-large-4":"gap-large-4__1-BZF__0-1-40"};const je=({direction:t={xsmall:"column",small:"column",medium:"column",large:"column"},gap:n={xsmall:1,small:1,medium:1,large:1},children:r})=>{const i=Object.entries(t).map((([e,t])=>ze[`direction-${e}-${t}`])).join(" "),o=Object.entries(n).map((([e,t])=>ze[`gap-${e}-${t}`])).join(" ");return e.createElement("div",{className:`${ze.stack} ${i} ${o}`},r)},Ue=e=>({0:"var(--eds-spacing-none)",1:"var(--eds-spacing-small-1)",2:"var(--eds-spacing-small-2)",3:"var(--eds-spacing-small-3)",4:"var(--eds-spacing-small-4)",5:"var(--eds-spacing-small-5)",6:"var(--eds-spacing-medium-1)",7:"var(--eds-spacing-medium-2)",8:"var(--eds-spacing-medium-3)",9:"var(--eds-spacing-medium-4)",10:"var(--eds-spacing-medium-5)",11:"var(--eds-spacing-medium-6)",12:"var(--eds-spacing-medium-7)",13:"var(--eds-spacing-medium-8)",14:"var(--eds-spacing-large-1)",15:"var(--eds-spacing-large-2)",16:"var(--eds-spacing-large-3)",17:"var(--eds-spacing-large-4)",18:"var(--eds-spacing-large-5)"}[e]||"0px");var Xe={"heading-h1":"heading-h1__00OVp__0-1-40","heading-h2":"heading-h2__uf8XO__0-1-40","heading-h3":"heading-h3__b58IP__0-1-40","heading-h4":"heading-h4__x0dIm__0-1-40","heading-h5":"heading-h5__dHW8C__0-1-40","heading-h6":"heading-h6__FSif0__0-1-40","heading-display":"heading-display__1B20E__0-1-40","heading-leadtext":"heading-leadtext__fbf5X__0-1-40","heading-subheadline":"heading-subheadline__xgXDJ__0-1-40","text-p-small":"text-p-small__U5YeB__0-1-40","text-p-default":"text-p-default__T3Gv7__0-1-40","text-p-large":"text-p-large__k4P5K__0-1-40","text-line-tiny":"text-line-tiny__IdKxY__0-1-40","text-line-small":"text-line-small__VDnxz__0-1-40","text-line-default":"text-line-default__HHLev__0-1-40","text-line-large":"text-line-large__zY6Xt__0-1-40","text-list-default":"text-list-default__9dn8h__0-1-40","label-tiny":"label-tiny__fwERw__0-1-40","label-small":"label-small__7hSFb__0-1-40","label-default":"label-default__TzEjW__0-1-40","label-large":"label-large__Xe0s7__0-1-40","text-italic":"text-italic__9j6-k__0-1-40","text-underline":"text-underline__-idVq__0-1-40","text-uppercase":"text-uppercase__zT285__0-1-40","text-400":"text-400__veahz__0-1-40","text-600":"text-600__SOu9h__0-1-40"};const Ge=({variant:t="p",as:n,size:r="default",italic:i=!1,underline:o=!1,weight:a="400",uppercase:s=!1,children:l,className:u,dangerouslySetInnerHTML:c,mt:d,mb:p,my:g,...v})=>{const f=n||function(e){switch(e){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":case"p":case"ol":case"ul":return e;case"line":return"p";case"list":return"ol";default:return"div"}}(t),m=`\n        ${Xe[`text-${t}-${r}`]}\n        ${u}\n        ${i?Xe["text-italic"]:""}\n        ${o?Xe["text-underline"]:""}\n        ${a?Xe[`text-${a}`]:""}\n        ${s?Xe["text-uppercase"]:""}\n    `,h=(({mt:e,mb:t,my:n})=>({marginTop:void 0!==e?Ue(e):void 0!==n?Ue(n):void 0,marginBottom:void 0!==t?Ue(t):void 0!==n?Ue(n):void 0}))({mt:d,mb:p,my:g});return c?e.createElement(f,{className:m,dangerouslySetInnerHTML:c,style:{...h},...v}):e.createElement(f,{className:m,style:{...h},...v},l)},Ye=({id:t,size:n="default",children:r,italic:i=!1,underline:o=!1,weight:a="400",uppercase:s=!1,className:l,...u})=>{const c=`\n        ${Xe[`label-${n}`]}\n        ${l}\n        ${i?Xe["text-italic"]:""}\n        ${o?Xe["text-underline"]:""}\n        ${a?Xe[`text-${a}`]:""}\n        ${s?Xe["text-uppercase"]:""}\n    `;return e.createElement("label",{id:t,className:c,...u},r)},qe=s(null);var Je={choice:"choice__Qk-z2__0-1-40",row:"row__BGm8Q__0-1-40",column:"column__GP92f__0-1-40",complex:"complex__GyE1-__0-1-40",choice__title:"choice__title__BAcYr__0-1-40",simple:"simple__oZej8__0-1-40",choice__content:"choice__content__kXaJ9__0-1-40",choice__description:"choice__description__MoEXz__0-1-40",choice__indicator:"choice__indicator__9u-43__0-1-40",choice__icon:"choice__icon__9MgeD__0-1-40","choice--pressed":"choice--pressed__FIYlk__0-1-40","choice--selected":"choice--selected__QLaJv__0-1-40","choice--focused":"choice--focused__cORUH__0-1-40","choice--invalid":"choice--invalid__h-ieb__0-1-40"};const Qe=l(((r,s)=>{const l=function(e){const r=t(null);return n((()=>({get current(){return r.current},set current(t){r.current=t,"function"==typeof e?e(t):e&&(e.current=t)}})),[e])}(s),u=t(null),c=l||u,{children:d,label:p,description:g,choiceType:v="simple",layout:f="row"}=r,m=a(qe),{inputProps:h,isSelected:y,isPressed:T,labelProps:E}=Be(r,m,c),{isFocusVisible:b,focusProps:w}=function(e={}){let{autoFocus:n=!1,isTextInput:r,within:a}=e,s=t({isFocused:!1,isFocusVisible:n||Pe()}),[l,u]=o(!1),[c,d]=o((()=>s.current.isFocused&&s.current.isFocusVisible)),p=i((()=>d(s.current.isFocused&&s.current.isFocusVisible)),[]),g=i((e=>{s.current.isFocused=e,u(e),p()}),[p]);Le((e=>{s.current.isFocusVisible=e,p()}),[],{isTextInput:r});let{focusProps:v}=ue({isDisabled:a,onFocusChange:g}),{focusWithinProps:f}=Me({isDisabled:!a,onFocusWithinChange:g});return{isFocused:l,isFocusVisible:c,focusProps:a?f:v}}(),P=$e(Je.choice,{[Je["choice--pressed"]]:T,[Je["choice--selected"]]:y,[Je["choice--focused"]]:b,[Je["choice--invalid"]]:m?.isInvalid}),x=$e({[Je.column]:"column"===f,[Je.row]:"row"===f,[Je.simple]:"simple"===v,[Je.complex]:"complex"===v});return e.createElement(Ye,{className:$e(P,x),...E},e.createElement("span",{className:Je.choice__indicator,"aria-hidden":"true"},e.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",className:Je.choice__icon},e.createElement("circle",{cx:"8",cy:"8",r:"5"}))),e.createElement(Ve,null,e.createElement("input",{..._(h,w),ref:c})),e.createElement("div",{className:Je.choice__content},e.createElement(je,null,"simple"===v?e.createElement("div",{className:Je.choice__title},p):e.createElement(e.Fragment,null,e.createElement("div",{className:Je.choice__title},p),g&&e.createElement(Ge,{variant:"line",size:"small",weight:"400",className:Je.choice__description},g),d&&e.createElement("div",null,d)))))}));Qe.displayName="Choice";export{Qe as Choice};
//# sourceMappingURL=index.js.map
