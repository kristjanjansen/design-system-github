"use client";import e,{useState as t,useRef as n,useEffect as r,useCallback as i,useMemo as o,useContext as a,createContext as l,forwardRef as s}from"react";function u(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=u(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function c(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=u(e))&&(r&&(r+=" "),r+=t);return r}const d="undefined"!=typeof document?e.useLayoutEffect:()=>{};function p(e){const t=n(null);return d((()=>{t.current=e}),[e]),i(((...e)=>{const n=t.current;return null==n?void 0:n(...e)}),[])}let v=new Map;function g(e,t){if(e===t)return e;let n=v.get(e);if(n)return n(t),t;let r=v.get(t);return r?(r(e),e):t}function f(...e){return(...t)=>{for(let n of e)"function"==typeof n&&n(...t)}}const m=e=>{var t;return null!==(t=null==e?void 0:e.ownerDocument)&&void 0!==t?t:document},h=e=>{if(e&&"window"in e&&e.window===e)return e;return m(e).defaultView||window};function _(...e){let t={...e[0]};for(let n=1;n<e.length;n++){let r=e[n];for(let e in r){let n=t[e],i=r[e];"function"==typeof n&&"function"==typeof i&&"o"===e[0]&&"n"===e[1]&&e.charCodeAt(2)>=65&&e.charCodeAt(2)<=90?t[e]=f(n,i):"className"!==e&&"UNSAFE_className"!==e||"string"!=typeof n||"string"!=typeof i?"id"===e&&n&&i?t.id=g(n,i):t[e]=void 0!==i?i:n:t[e]=c(n,i)}}return t}const y=new Set(["id"]),T=new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]),b=new Set(["href","target","rel","download","ping","referrerPolicy"]),E=/^(data-.*)$/;function w(e){if(function(){if(null==P){P=!1;try{document.createElement("div").focus({get preventScroll(){return P=!0,!0}})}catch(e){}}return P}())e.focus({preventScroll:!0});else{let t=function(e){let t=e.parentNode,n=[],r=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==r;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;r instanceof HTMLElement&&n.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft});return n}(e);e.focus(),function(e){for(let{element:t,scrollTop:n,scrollLeft:r}of e)t.scrollTop=n,t.scrollLeft=r}(t)}}let P=null;function x(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.brands.some((t=>e.test(t.brand))))||e.test(window.navigator.userAgent))}function L(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&e.test((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.platform)||window.navigator.platform)}function S(){return L(/^Mac/i)}function M(){return L(/^iPad/i)||S()&&navigator.maxTouchPoints>1}function k(){return L(/^iPhone/i)||M()}function K(){return x(/AppleWebKit/i)&&!x(/Chrome/i)}function O(){return x(/Android/i)}function D(e,t,n=!0){var r,i;let{metaKey:o,ctrlKey:a,altKey:l,shiftKey:s}=t;x(/Firefox/i)&&(null===(i=window.event)||void 0===i||null===(r=i.type)||void 0===r?void 0:r.startsWith("key"))&&"_blank"===e.target&&(S()?o=!0:a=!0);let u=K()&&S()&&!M()?new KeyboardEvent("keydown",{keyIdentifier:"Enter",metaKey:o,ctrlKey:a,altKey:l,shiftKey:s}):new MouseEvent("click",{metaKey:o,ctrlKey:a,altKey:l,shiftKey:s,bubbles:!0,cancelable:!0});D.isOpening=n,w(e),e.dispatchEvent(u),D.isOpening=!1}D.isOpening=!1;let F=new Map,I=new Set;function C(){if("undefined"==typeof window)return;function e(e){return"propertyName"in e}let t=n=>{if(!e(n)||!n.target)return;let r=F.get(n.target);if(r&&(r.delete(n.propertyName),0===r.size&&(n.target.removeEventListener("transitioncancel",t),F.delete(n.target)),0===F.size)){for(let e of I)e();I.clear()}};document.body.addEventListener("transitionrun",(n=>{if(!e(n)||!n.target)return;let r=F.get(n.target);r||(r=new Set,F.set(n.target,r),n.target.addEventListener("transitioncancel",t,{once:!0})),r.add(n.propertyName)})),document.body.addEventListener("transitionend",t)}function V(e){requestAnimationFrame((()=>{0===F.size?e():I.add(e)}))}function N(e,t){d((()=>{if(e&&e.ref&&t)return e.ref.current=t.current,()=>{e.ref&&(e.ref.current=null)}}))}function A(e){return!(0!==e.mozInputSource||!e.isTrusted)||(O()&&e.pointerType?"click"===e.type&&1===e.buttons:0===e.detail&&!e.pointerType)}function R(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function H(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}function $(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,R(e,t,"set"),n),n}"undefined"!=typeof document&&("loading"!==document.readyState?C():document.addEventListener("DOMContentLoaded",C));let W="default",B="",z=new WeakMap;function j(e){if(k()){if("default"===W){const t=m(e);B=t.documentElement.style.webkitUserSelect,t.documentElement.style.webkitUserSelect="none"}W="disabled"}else(e instanceof HTMLElement||e instanceof SVGElement)&&(z.set(e,e.style.userSelect),e.style.userSelect="none")}function U(e){if(k()){if("disabled"!==W)return;W="restoring",setTimeout((()=>{V((()=>{if("restoring"===W){const t=m(e);"none"===t.documentElement.style.webkitUserSelect&&(t.documentElement.style.webkitUserSelect=B||""),B="",W="default"}}))}),300)}else if((e instanceof HTMLElement||e instanceof SVGElement)&&e&&z.has(e)){let t=z.get(e);"none"===e.style.userSelect&&(e.style.userSelect=t),""===e.getAttribute("style")&&e.removeAttribute("style"),z.delete(e)}}const X=e.createContext({register:()=>{}});X.displayName="PressResponderContext";var Y=new WeakMap;class G{continuePropagation(){$(this,Y,!1)}get shouldStopPropagation(){return function(e,t){return t.get?t.get.call(e):t.value}(e=this,R(e,Y,"get"));var e}constructor(e,t,n){H(this,Y,{writable:!0,value:void 0}),$(this,Y,!0),this.type=e,this.pointerType=t,this.target=n.currentTarget,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.ctrlKey=n.ctrlKey,this.altKey=n.altKey}}const q=Symbol("linkClicked");function J(e){let{onPress:l,onPressChange:s,onPressStart:u,onPressEnd:c,onPressUp:d,isDisabled:v,isPressed:g,preventFocusOnPress:y,shouldCancelOnPointerExit:T,allowTextSelectionOnPress:b,ref:E,...P}=function(e){let t=a(X);if(t){let{register:n,...r}=t;e=_(r,e),n()}return N(t,e.ref),e}(e),[x,L]=t(!1),M=n({isPressed:!1,ignoreEmulatedMouseEvents:!1,ignoreClickAfterPress:!1,didFirePressStart:!1,isTriggeringEvent:!1,activePointerId:null,target:null,isOverTarget:!1,pointerType:null}),{addGlobalListener:k,removeAllGlobalListeners:K}=function(){let e=n(new Map),t=i(((t,n,r,i)=>{let o=(null==i?void 0:i.once)?(...t)=>{e.current.delete(r),r(...t)}:r;e.current.set(r,{type:n,eventTarget:t,fn:o,options:i}),t.addEventListener(n,r,i)}),[]),o=i(((t,n,r,i)=>{var o;let a=(null===(o=e.current.get(r))||void 0===o?void 0:o.fn)||r;t.removeEventListener(n,a,i),e.current.delete(r)}),[]),a=i((()=>{e.current.forEach(((e,t)=>{o(e.eventTarget,e.type,t,e.options)}))}),[o]);return r((()=>a),[a]),{addGlobalListener:t,removeGlobalListener:o,removeAllGlobalListeners:a}}(),F=p(((e,t)=>{let n=M.current;if(v||n.didFirePressStart)return!1;let r=!0;if(n.isTriggeringEvent=!0,u){let n=new G("pressstart",t,e);u(n),r=n.shouldStopPropagation}return s&&s(!0),n.isTriggeringEvent=!1,n.didFirePressStart=!0,L(!0),r})),I=p(((e,t,n=!0)=>{let r=M.current;if(!r.didFirePressStart)return!1;r.ignoreClickAfterPress=!0,r.didFirePressStart=!1,r.isTriggeringEvent=!0;let i=!0;if(c){let n=new G("pressend",t,e);c(n),i=n.shouldStopPropagation}if(s&&s(!1),L(!1),l&&n&&!v){let n=new G("press",t,e);l(n),i&&(i=n.shouldStopPropagation)}return r.isTriggeringEvent=!1,i})),C=p(((e,t)=>{let n=M.current;if(v)return!1;if(d){n.isTriggeringEvent=!0;let r=new G("pressup",t,e);return d(r),n.isTriggeringEvent=!1,r.shouldStopPropagation}return!0})),V=p((e=>{let t=M.current;t.isPressed&&t.target&&(t.isOverTarget&&null!=t.pointerType&&I(te(t.target,e),t.pointerType,!1),t.isPressed=!1,t.isOverTarget=!1,t.activePointerId=null,t.pointerType=null,K(),b||U(t.target))})),R=p((e=>{T&&V(e)})),H=o((()=>{let e=M.current,t={onKeyDown(t){if(Z(t.nativeEvent,t.currentTarget)&&t.currentTarget.contains(t.target)){var r;ie(t.target,t.key)&&t.preventDefault();let i=!0;if(!e.isPressed&&!t.repeat){e.target=t.currentTarget,e.isPressed=!0,i=F(t,"keyboard");let r=t.currentTarget,o=t=>{Z(t,r)&&!t.repeat&&r.contains(t.target)&&e.target&&C(te(e.target,t),"keyboard")};k(m(t.currentTarget),"keyup",f(o,n),!0)}i&&t.stopPropagation(),t.metaKey&&S()&&(null===(r=e.metaKeyEvents)||void 0===r||r.set(t.key,t.nativeEvent))}else"Meta"===t.key&&(e.metaKeyEvents=new Map)},onClick(t){if((!t||t.currentTarget.contains(t.target))&&t&&0===t.button&&!e.isTriggeringEvent&&!D.isOpening){let n=!0;if(v&&t.preventDefault(),!e.ignoreClickAfterPress&&!e.ignoreEmulatedMouseEvents&&!e.isPressed&&("virtual"===e.pointerType||A(t.nativeEvent))){v||y||w(t.currentTarget);let e=F(t,"virtual"),r=C(t,"virtual"),i=I(t,"virtual");n=e&&r&&i}e.ignoreEmulatedMouseEvents=!1,e.ignoreClickAfterPress=!1,n&&t.stopPropagation()}}},n=t=>{var n;if(e.isPressed&&e.target&&Z(t,e.target)){var r;ie(t.target,t.key)&&t.preventDefault();let n=t.target;I(te(e.target,t),"keyboard",e.target.contains(n)),K(),"Enter"!==t.key&&Q(e.target)&&e.target.contains(n)&&!t[q]&&(t[q]=!0,D(e.target,t,!1)),e.isPressed=!1,null===(r=e.metaKeyEvents)||void 0===r||r.delete(t.key)}else if("Meta"===t.key&&(null===(n=e.metaKeyEvents)||void 0===n?void 0:n.size)){var i;let t=e.metaKeyEvents;e.metaKeyEvents=void 0;for(let n of t.values())null===(i=e.target)||void 0===i||i.dispatchEvent(new KeyboardEvent("keyup",n))}};if("undefined"!=typeof PointerEvent){t.onPointerDown=t=>{if(0!==t.button||!t.currentTarget.contains(t.target))return;if(o=t.nativeEvent,!O()&&0===o.width&&0===o.height||1===o.width&&1===o.height&&0===o.pressure&&0===o.detail&&"mouse"===o.pointerType)return void(e.pointerType="virtual");var o;re(t.currentTarget)&&t.preventDefault(),e.pointerType=t.pointerType;let a=!0;e.isPressed||(e.isPressed=!0,e.isOverTarget=!0,e.activePointerId=t.pointerId,e.target=t.currentTarget,v||y||w(t.currentTarget),b||j(e.target),a=F(t,e.pointerType),k(m(t.currentTarget),"pointermove",n,!1),k(m(t.currentTarget),"pointerup",r,!1),k(m(t.currentTarget),"pointercancel",i,!1)),a&&t.stopPropagation()},t.onMouseDown=e=>{e.currentTarget.contains(e.target)&&0===e.button&&(re(e.currentTarget)&&e.preventDefault(),e.stopPropagation())},t.onPointerUp=t=>{t.currentTarget.contains(t.target)&&"virtual"!==e.pointerType&&0===t.button&&ne(t,t.currentTarget)&&C(t,e.pointerType||t.pointerType)};let n=t=>{t.pointerId===e.activePointerId&&(e.target&&ne(t,e.target)?e.isOverTarget||null==e.pointerType||(e.isOverTarget=!0,F(te(e.target,t),e.pointerType)):e.target&&e.isOverTarget&&null!=e.pointerType&&(e.isOverTarget=!1,I(te(e.target,t),e.pointerType,!1),R(t)))},r=t=>{t.pointerId===e.activePointerId&&e.isPressed&&0===t.button&&e.target&&(ne(t,e.target)&&null!=e.pointerType?I(te(e.target,t),e.pointerType):e.isOverTarget&&null!=e.pointerType&&I(te(e.target,t),e.pointerType,!1),e.isPressed=!1,e.isOverTarget=!1,e.activePointerId=null,e.pointerType=null,K(),b||U(e.target))},i=e=>{V(e)};t.onDragStart=e=>{e.currentTarget.contains(e.target)&&V(e)}}else{t.onMouseDown=t=>{if(0!==t.button||!t.currentTarget.contains(t.target))return;if(re(t.currentTarget)&&t.preventDefault(),e.ignoreEmulatedMouseEvents)return void t.stopPropagation();e.isPressed=!0,e.isOverTarget=!0,e.target=t.currentTarget,e.pointerType=A(t.nativeEvent)?"virtual":"mouse",v||y||w(t.currentTarget),F(t,e.pointerType)&&t.stopPropagation(),k(m(t.currentTarget),"mouseup",n,!1)},t.onMouseEnter=t=>{if(!t.currentTarget.contains(t.target))return;let n=!0;e.isPressed&&!e.ignoreEmulatedMouseEvents&&null!=e.pointerType&&(e.isOverTarget=!0,n=F(t,e.pointerType)),n&&t.stopPropagation()},t.onMouseLeave=t=>{if(!t.currentTarget.contains(t.target))return;let n=!0;e.isPressed&&!e.ignoreEmulatedMouseEvents&&null!=e.pointerType&&(e.isOverTarget=!1,n=I(t,e.pointerType,!1),R(t)),n&&t.stopPropagation()},t.onMouseUp=t=>{t.currentTarget.contains(t.target)&&(e.ignoreEmulatedMouseEvents||0!==t.button||C(t,e.pointerType||"mouse"))};let n=t=>{0===t.button&&(e.isPressed=!1,K(),e.ignoreEmulatedMouseEvents?e.ignoreEmulatedMouseEvents=!1:(e.target&&ne(t,e.target)&&null!=e.pointerType?I(te(e.target,t),e.pointerType):e.target&&e.isOverTarget&&null!=e.pointerType&&I(te(e.target,t),e.pointerType,!1),e.isOverTarget=!1))};t.onTouchStart=t=>{if(!t.currentTarget.contains(t.target))return;let n=function(e){const{targetTouches:t}=e;return t.length>0?t[0]:null}(t.nativeEvent);n&&(e.activePointerId=n.identifier,e.ignoreEmulatedMouseEvents=!0,e.isOverTarget=!0,e.isPressed=!0,e.target=t.currentTarget,e.pointerType="touch",v||y||w(t.currentTarget),b||j(e.target),F(t,e.pointerType)&&t.stopPropagation(),k(h(t.currentTarget),"scroll",r,!0))},t.onTouchMove=t=>{if(!t.currentTarget.contains(t.target))return;if(!e.isPressed)return void t.stopPropagation();let n=ee(t.nativeEvent,e.activePointerId),r=!0;n&&ne(n,t.currentTarget)?e.isOverTarget||null==e.pointerType||(e.isOverTarget=!0,r=F(t,e.pointerType)):e.isOverTarget&&null!=e.pointerType&&(e.isOverTarget=!1,r=I(t,e.pointerType,!1),R(t)),r&&t.stopPropagation()},t.onTouchEnd=t=>{if(!t.currentTarget.contains(t.target))return;if(!e.isPressed)return void t.stopPropagation();let n=ee(t.nativeEvent,e.activePointerId),r=!0;n&&ne(n,t.currentTarget)&&null!=e.pointerType?(C(t,e.pointerType),r=I(t,e.pointerType)):e.isOverTarget&&null!=e.pointerType&&(r=I(t,e.pointerType,!1)),r&&t.stopPropagation(),e.isPressed=!1,e.activePointerId=null,e.isOverTarget=!1,e.ignoreEmulatedMouseEvents=!0,e.target&&!b&&U(e.target),K()},t.onTouchCancel=t=>{t.currentTarget.contains(t.target)&&(t.stopPropagation(),e.isPressed&&V(t))};let r=t=>{e.isPressed&&t.target.contains(e.target)&&V({currentTarget:e.target,shiftKey:!1,ctrlKey:!1,metaKey:!1,altKey:!1})};t.onDragStart=e=>{e.currentTarget.contains(e.target)&&V(e)}}return t}),[k,v,y,K,b,V,R,I,F,C]);return r((()=>()=>{var e;b||U(null!==(e=M.current.target)&&void 0!==e?e:void 0)}),[b]),{isPressed:g||x,pressProps:_(P,H)}}function Q(e){return"A"===e.tagName&&e.hasAttribute("href")}function Z(e,t){const{key:n,code:r}=e,i=t,o=i.getAttribute("role");return!("Enter"!==n&&" "!==n&&"Spacebar"!==n&&"Space"!==r||i instanceof h(i).HTMLInputElement&&!ae(i,n)||i instanceof h(i).HTMLTextAreaElement||i.isContentEditable||("link"===o||!o&&Q(i))&&"Enter"!==n)}function ee(e,t){const n=e.changedTouches;for(let e=0;e<n.length;e++){const r=n[e];if(r.identifier===t)return r}return null}function te(e,t){return{currentTarget:e,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,altKey:t.altKey}}function ne(e,t){let n=t.getBoundingClientRect(),r=function(e){let t=0,n=0;return void 0!==e.width?t=e.width/2:void 0!==e.radiusX&&(t=e.radiusX),void 0!==e.height?n=e.height/2:void 0!==e.radiusY&&(n=e.radiusY),{top:e.clientY-n,right:e.clientX+t,bottom:e.clientY+n,left:e.clientX-t}}(e);return o=r,!((i=n).left>o.right||o.left>i.right||i.top>o.bottom||o.top>i.bottom);var i,o}function re(e){return!(e instanceof HTMLElement&&e.hasAttribute("draggable"))}function ie(e,t){return e instanceof HTMLInputElement?!ae(e,t):e instanceof HTMLButtonElement?"submit"!==e.type&&"reset"!==e.type:!Q(e)}const oe=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function ae(e,t){return"checkbox"===e.type||"radio"===e.type?" "===t:oe.has(e.type)}class le{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(e,t){this.nativeEvent=t,this.target=t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget,this.bubbles=t.bubbles,this.cancelable=t.cancelable,this.defaultPrevented=t.defaultPrevented,this.eventPhase=t.eventPhase,this.isTrusted=t.isTrusted,this.timeStamp=t.timeStamp,this.type=e}}function se(e){let t=n({isFocused:!1,observer:null});d((()=>{const e=t.current;return()=>{e.observer&&(e.observer.disconnect(),e.observer=null)}}),[]);let r=p((t=>{null==e||e(t)}));return i((e=>{if(e.target instanceof HTMLButtonElement||e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLSelectElement){t.current.isFocused=!0;let n=e.target,i=e=>{t.current.isFocused=!1,n.disabled&&r(new le("blur",e)),t.current.observer&&(t.current.observer.disconnect(),t.current.observer=null)};n.addEventListener("focusout",i,{once:!0}),t.current.observer=new MutationObserver((()=>{if(t.current.isFocused&&n.disabled){var e;null===(e=t.current.observer)||void 0===e||e.disconnect();let r=n===document.activeElement?null:document.activeElement;n.dispatchEvent(new FocusEvent("blur",{relatedTarget:r})),n.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:r}))}})),t.current.observer.observe(n,{attributes:!0,attributeFilter:["disabled"]})}}),[r])}function ue(e){let{isDisabled:t,onFocus:n,onBlur:r,onFocusChange:o}=e;const a=i((e=>{if(e.target===e.currentTarget)return r&&r(e),o&&o(!1),!0}),[r,o]),l=se(a),s=i((e=>{e.target===e.currentTarget&&document.activeElement===e.target&&(n&&n(e),o&&o(!0),l(e))}),[o,n,l]);return{focusProps:{onFocus:!t&&(n||o||r)?s:void 0,onBlur:t||!r&&!o?void 0:a}}}let ce=null,de=new Set,pe=new Map,ve=!1,ge=!1;const fe={Tab:!0,Escape:!0};function me(e,t){for(let n of de)n(e,t)}function he(e){ve=!0,function(e){return!(e.metaKey||!S()&&e.altKey||e.ctrlKey||"Control"===e.key||"Shift"===e.key||"Meta"===e.key)}(e)&&(ce="keyboard",me("keyboard",e))}function _e(e){ce="pointer","mousedown"!==e.type&&"pointerdown"!==e.type||(ve=!0,me("pointer",e))}function ye(e){A(e)&&(ve=!0,ce="virtual")}function Te(e){e.target!==window&&e.target!==document&&(ve||ge||(ce="virtual",me("virtual",e)),ve=!1,ge=!1)}function be(){ve=!1,ge=!0}function Ee(e){if("undefined"==typeof window||pe.get(h(e)))return;const t=h(e),n=m(e);let r=t.HTMLElement.prototype.focus;t.HTMLElement.prototype.focus=function(){ve=!0,r.apply(this,arguments)},n.addEventListener("keydown",he,!0),n.addEventListener("keyup",he,!0),n.addEventListener("click",ye,!0),t.addEventListener("focus",Te,!0),t.addEventListener("blur",be,!1),"undefined"!=typeof PointerEvent?(n.addEventListener("pointerdown",_e,!0),n.addEventListener("pointermove",_e,!0),n.addEventListener("pointerup",_e,!0)):(n.addEventListener("mousedown",_e,!0),n.addEventListener("mousemove",_e,!0),n.addEventListener("mouseup",_e,!0)),t.addEventListener("beforeunload",(()=>{we(e)}),{once:!0}),pe.set(t,{focus:r})}const we=(e,t)=>{const n=h(e),r=m(e);t&&r.removeEventListener("DOMContentLoaded",t),pe.has(n)&&(n.HTMLElement.prototype.focus=pe.get(n).focus,r.removeEventListener("keydown",he,!0),r.removeEventListener("keyup",he,!0),r.removeEventListener("click",ye,!0),n.removeEventListener("focus",Te,!0),n.removeEventListener("blur",be,!1),"undefined"!=typeof PointerEvent?(r.removeEventListener("pointerdown",_e,!0),r.removeEventListener("pointermove",_e,!0),r.removeEventListener("pointerup",_e,!0)):(r.removeEventListener("mousedown",_e,!0),r.removeEventListener("mousemove",_e,!0),r.removeEventListener("mouseup",_e,!0)),pe.delete(n))};function Pe(){return"pointer"!==ce}"undefined"!=typeof document&&function(e){const t=m(e);let n;"loading"!==t.readyState?Ee(e):(n=()=>{Ee(e)},t.addEventListener("DOMContentLoaded",n))}();const xe=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function Le(e,t,n){Ee(),r((()=>{let t=(t,r)=>{(function(e,t,n){var r;const i="undefined"!=typeof window?h(null==n?void 0:n.target).HTMLInputElement:HTMLInputElement,o="undefined"!=typeof window?h(null==n?void 0:n.target).HTMLTextAreaElement:HTMLTextAreaElement,a="undefined"!=typeof window?h(null==n?void 0:n.target).HTMLElement:HTMLElement,l="undefined"!=typeof window?h(null==n?void 0:n.target).KeyboardEvent:KeyboardEvent;return!((e=e||(null==n?void 0:n.target)instanceof i&&!xe.has(null==n||null===(r=n.target)||void 0===r?void 0:r.type)||(null==n?void 0:n.target)instanceof o||(null==n?void 0:n.target)instanceof a&&(null==n?void 0:n.target.isContentEditable))&&"keyboard"===t&&n instanceof l&&!fe[n.key])})(!!(null==n?void 0:n.isTextInput),t,r)&&e(Pe())};return de.add(t),()=>{de.delete(t)}}),t)}function Se(e){let{isDisabled:t,onBlurWithin:r,onFocusWithin:o,onFocusWithinChange:a}=e,l=n({isFocusWithin:!1}),s=i((e=>{l.current.isFocusWithin&&!e.currentTarget.contains(e.relatedTarget)&&(l.current.isFocusWithin=!1,r&&r(e),a&&a(!1))}),[r,a,l]),u=se(s),c=i((e=>{l.current.isFocusWithin||document.activeElement!==e.target||(o&&o(e),a&&a(!0),l.current.isFocusWithin=!0,u(e))}),[o,a,u]);return t?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:c,onBlur:s}}}function Me(e){if(!e)return;let t=!0;return n=>{let r={...n,preventDefault(){n.preventDefault()},isDefaultPrevented:()=>n.isDefaultPrevented(),stopPropagation(){console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")},continuePropagation(){t=!1}};e(r),t&&n.stopPropagation()}}function ke(e){const t=m(e);if("virtual"===ce){let n=t.activeElement;V((()=>{t.activeElement===n&&e.isConnected&&w(e)}))}else w(e)}function Ke(e,t){return!!e&&(!!t&&t.some((t=>t.contains(e))))}class Oe{get size(){return this.fastMap.size}getTreeNode(e){return this.fastMap.get(e)}addTreeNode(e,t,n){let r=this.fastMap.get(null!=t?t:null);if(!r)return;let i=new De({scopeRef:e});r.addChild(i),i.parent=r,this.fastMap.set(e,i),n&&(i.nodeToRestore=n)}addNode(e){this.fastMap.set(e.scopeRef,e)}removeTreeNode(e){if(null===e)return;let t=this.fastMap.get(e);if(!t)return;let n=t.parent;for(let e of this.traverse())e!==t&&t.nodeToRestore&&e.nodeToRestore&&t.scopeRef&&t.scopeRef.current&&Ke(e.nodeToRestore,t.scopeRef.current)&&(e.nodeToRestore=t.nodeToRestore);let r=t.children;n&&(n.removeChild(t),r.size>0&&r.forEach((e=>n&&n.addChild(e)))),this.fastMap.delete(t.scopeRef)}*traverse(e=this.root){if(null!=e.scopeRef&&(yield e),e.children.size>0)for(let t of e.children)yield*this.traverse(t)}clone(){var e;let t=new Oe;var n;for(let r of this.traverse())t.addTreeNode(r.scopeRef,null!==(n=null===(e=r.parent)||void 0===e?void 0:e.scopeRef)&&void 0!==n?n:null,r.nodeToRestore);return t}constructor(){this.fastMap=new Map,this.root=new De({scopeRef:null}),this.fastMap.set(null,this.root)}}class De{addChild(e){this.children.add(e),e.parent=this}removeChild(e){this.children.delete(e),e.parent=void 0}constructor(e){this.children=new Set,this.contain=!1,this.scopeRef=e.scopeRef}}new Oe;let Fe=e.createContext(null);function Ie(e,t){let{focusProps:i}=ue(e),{keyboardProps:o}=function(e){return{keyboardProps:e.isDisabled?{}:{onKeyDown:Me(e.onKeyDown),onKeyUp:Me(e.onKeyUp)}}}(e),l=_(i,o),s=function(e){let t=a(Fe)||{};N(t,e);let{ref:n,...r}=t;return r}(t),u=e.isDisabled?{}:s,c=n(e.autoFocus);return r((()=>{c.current&&t.current&&ke(t.current),c.current=!1}),[t]),{focusableProps:_({...l,tabIndex:e.excludeFromTabOrder&&!e.isDisabled?-1:void 0},u)}}function Ce(e,t,n){let{validationBehavior:i,focus:o}=e;d((()=>{if("native"===i&&(null==n?void 0:n.current)){let r=t.realtimeValidation.isInvalid?t.realtimeValidation.validationErrors.join(" ")||"Invalid value.":"";n.current.setCustomValidity(r),n.current.hasAttribute("title")||(n.current.title=""),t.realtimeValidation.isInvalid||t.updateValidation({isInvalid:!(e=n.current).validity.valid,validationDetails:Ve(e),validationErrors:e.validationMessage?[e.validationMessage]:[]})}var e}));let a=p((()=>{t.resetValidation()})),l=p((e=>{var r;t.displayValidation.isInvalid||t.commitValidation();let i=null==n||null===(r=n.current)||void 0===r?void 0:r.form;var a,l;!e.defaultPrevented&&n&&i&&function(e){for(let t=0;t<e.elements.length;t++){let n=e.elements[t];if(!n.validity.valid)return n}return null}(i)===n.current&&(o?o():null===(a=n.current)||void 0===a||a.focus(),ce=l="keyboard",me(l,null));e.preventDefault()})),s=p((()=>{t.commitValidation()}));r((()=>{let e=null==n?void 0:n.current;if(!e)return;let t=e.form;return e.addEventListener("invalid",l),e.addEventListener("change",s),null==t||t.addEventListener("reset",a),()=>{e.removeEventListener("invalid",l),e.removeEventListener("change",s),null==t||t.removeEventListener("reset",a)}}),[n,l,s,a,i])}function Ve(e){let t=e.validity;return{badInput:t.badInput,customError:t.customError,patternMismatch:t.patternMismatch,rangeOverflow:t.rangeOverflow,rangeUnderflow:t.rangeUnderflow,stepMismatch:t.stepMismatch,tooLong:t.tooLong,tooShort:t.tooShort,typeMismatch:t.typeMismatch,valueMissing:t.valueMissing,valid:t.valid}}const Ne={badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},Ae={...Ne,customError:!0,valid:!1},Re={isInvalid:!1,validationDetails:Ne,validationErrors:[]},He=l({}),$e="__formValidationState"+Date.now();function We(e){if(e[$e]){let{realtimeValidation:t,displayValidation:n,updateValidation:r,resetValidation:i,commitValidation:o}=e[$e];return{realtimeValidation:t,displayValidation:n,updateValidation:r,resetValidation:i,commitValidation:o}}return function(e){let{isInvalid:i,validationState:l,name:s,value:u,builtinValidation:c,validate:d,validationBehavior:p="aria"}=e;l&&(i||(i="invalid"===l));let v=i?{isInvalid:!0,validationErrors:[],validationDetails:Ae}:null,g=o((()=>ze(function(e,t){if("function"==typeof e){let n=e(t);if(n&&"boolean"!=typeof n)return Be(n)}return[]}(d,u))),[d,u]);(null==c?void 0:c.validationDetails.valid)&&(c=null);let f=a(He),m=o((()=>s?Array.isArray(s)?s.flatMap((e=>Be(f[e]))):Be(f[s]):[]),[f,s]),[h,_]=t(f),[y,T]=t(!1);f!==h&&(_(f),T(!1));let b=o((()=>ze(y?[]:m)),[y,m]),E=n(Re),[w,P]=t(Re),x=n(Re),L=()=>{if(!S)return;M(!1);let e=g||c||E.current;je(e,x.current)||(x.current=e,P(e))},[S,M]=t(!1);return r(L),{realtimeValidation:v||b||g||c||Re,displayValidation:"native"===p?v||b||w:v||b||g||c||w,updateValidation(e){"aria"!==p||je(w,e)?E.current=e:P(e)},resetValidation(){let e=Re;je(e,x.current)||(x.current=e,P(e)),"native"===p&&M(!1),T(!0)},commitValidation(){"native"===p&&M(!0),T(!0)}}}(e)}function Be(e){return e?Array.isArray(e)?e:[e]:[]}function ze(e){return e.length?{isInvalid:!0,validationErrors:e,validationDetails:Ae}:null}function je(e,t){return e===t||e&&t&&e.isInvalid===t.isInvalid&&e.validationErrors.length===t.validationErrors.length&&e.validationErrors.every(((e,n)=>e===t.validationErrors[n]))&&Object.entries(e.validationDetails).every((([e,n])=>t.validationDetails[e]===n))}function Ue(e,t,i){let{isDisabled:o=!1,isReadOnly:a=!1,value:l,name:s,children:u,"aria-label":c,"aria-labelledby":d,validationState:v="valid",isInvalid:g}=e;null!=u||(null!=c||null!=d)||console.warn("If you do not provide children, you must specify an aria-label for accessibility");let{pressProps:f,isPressed:m}=J({isDisabled:o}),{pressProps:h,isPressed:w}=J({isDisabled:o||a,onPress(){t.toggle()}}),{focusableProps:P}=Ie(e,i),x=_(f,P),L=function(e,t={}){let{labelable:n,isLink:r,propNames:i}=t,o={};for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&(y.has(t)||n&&T.has(t)||r&&b.has(t)||(null==i?void 0:i.has(t))||E.test(t))&&(o[t]=e[t]);return o}(e,{labelable:!0});return function(e,t,i){let o=n(t),a=p((()=>{i&&i(o.current)}));r((()=>{var t;let n=null==e||null===(t=e.current)||void 0===t?void 0:t.form;return null==n||n.addEventListener("reset",a),()=>{null==n||n.removeEventListener("reset",a)}}),[e,a])}(i,t.isSelected,t.setSelected),{labelProps:_(h,{onClick:e=>e.preventDefault()}),inputProps:_(L,{"aria-invalid":g||"invalid"===v||void 0,"aria-errormessage":e["aria-errormessage"],"aria-controls":e["aria-controls"],"aria-readonly":a||void 0,onChange:e=>{e.stopPropagation(),t.setSelected(e.target.checked)},disabled:o,...null==l?{}:{value:l},name:s,type:"checkbox",...x}),isSelected:t.isSelected,isPressed:m||w,isDisabled:o,isReadOnly:a,isInvalid:g||"invalid"===v}}function Xe(e={}){let{isReadOnly:o}=e,[a,l]=function(e,o,a){let[l,s]=t(e||o),u=n(void 0!==e),c=void 0!==e;r((()=>{let e=u.current;e!==c&&console.warn(`WARN: A component changed from ${e?"controlled":"uncontrolled"} to ${c?"controlled":"uncontrolled"}.`),u.current=c}),[c]);let d=c?e:l,p=i(((e,...t)=>{let n=(e,...t)=>{a&&(Object.is(d,e)||a(e,...t)),c||(d=e)};"function"==typeof e?(console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"),s(((r,...i)=>{let o=e(c?d:r,...i);return n(o,...t),c?r:o}))):(c||s(e),n(e,...t))}),[c,d,a]);return[d,p]}(e.isSelected,e.defaultSelected||!1,e.onChange);return{isSelected:a,setSelected:function(e){o||l(e)},toggle:function(){o||l(!a)}}}const Ye={border:0,clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"};function Ge(n){let{children:r,elementType:i="div",isFocusable:a,style:l,...s}=n,{visuallyHiddenProps:u}=function(e={}){let{style:n,isFocusable:r}=e,[i,a]=t(!1),{focusWithinProps:l}=Se({isDisabled:!r,onFocusWithinChange:e=>a(e)});return{visuallyHiddenProps:{...l,style:o((()=>i?n:n?{...Ye,...n}:Ye),[i])}}}(n);return e.createElement(i,_(s,u),r)}var qe,Je={exports:{}};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/qe=Je,function(){var e={}.hasOwnProperty;function t(){for(var n=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var o=typeof i;if("string"===o||"number"===o)n.push(i);else if(Array.isArray(i)){if(i.length){var a=t.apply(null,i);a&&n.push(a)}}else if("object"===o){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){n.push(i.toString());continue}for(var l in i)e.call(i,l)&&i[l]&&n.push(l)}}}return n.join(" ")}qe.exports?(t.default=t,qe.exports=t):window.classNames=t}();var Qe=Je.exports,Ze={stack:"stack__foEop__0-1-24","direction-xsmall-column":"direction-xsmall-column__gSInW__0-1-24","direction-xsmall-row":"direction-xsmall-row__xbYKt__0-1-24","direction-small-column":"direction-small-column__w3qdN__0-1-24","direction-small-row":"direction-small-row__Fi83T__0-1-24","direction-medium-column":"direction-medium-column__uPpiH__0-1-24","direction-medium-row":"direction-medium-row__QXENi__0-1-24","direction-large-column":"direction-large-column__DOuNx__0-1-24","direction-large-row":"direction-large-row__nt-ew__0-1-24","gap-xsmall-1":"gap-xsmall-1__PH7ZL__0-1-24","gap-xsmall-2":"gap-xsmall-2__OF5nS__0-1-24","gap-xsmall-3":"gap-xsmall-3__KP-Pk__0-1-24","gap-xsmall-4":"gap-xsmall-4__J5ttC__0-1-24","gap-small-1":"gap-small-1__s7o8S__0-1-24","gap-small-2":"gap-small-2__nhKiB__0-1-24","gap-small-3":"gap-small-3__SKBDk__0-1-24","gap-small-4":"gap-small-4__ykzrO__0-1-24","gap-medium-1":"gap-medium-1__dN9up__0-1-24","gap-medium-2":"gap-medium-2__UMXHe__0-1-24","gap-medium-3":"gap-medium-3__OIV7e__0-1-24","gap-medium-4":"gap-medium-4__mfb2I__0-1-24","gap-large-1":"gap-large-1__3BTuu__0-1-24","gap-large-2":"gap-large-2__po1On__0-1-24","gap-large-3":"gap-large-3__fK1OL__0-1-24","gap-large-4":"gap-large-4__1-BZF__0-1-24"};const et=({direction:t={xsmall:"column",small:"column",medium:"column",large:"column"},gap:n={xsmall:1,small:1,medium:1,large:1},children:r})=>{const i=Object.entries(t).map((([e,t])=>Ze[`direction-${e}-${t}`])).join(" "),o=Object.entries(n).map((([e,t])=>Ze[`gap-${e}-${t}`])).join(" ");return e.createElement("div",{className:`${Ze.stack} ${i} ${o}`},r)},tt=e=>({0:"var(--eds-spacing-none)",1:"var(--eds-spacing-small-1)",2:"var(--eds-spacing-small-2)",3:"var(--eds-spacing-small-3)",4:"var(--eds-spacing-small-4)",5:"var(--eds-spacing-small-5)",6:"var(--eds-spacing-medium-1)",7:"var(--eds-spacing-medium-2)",8:"var(--eds-spacing-medium-3)",9:"var(--eds-spacing-medium-4)",10:"var(--eds-spacing-medium-5)",11:"var(--eds-spacing-medium-6)",12:"var(--eds-spacing-medium-7)",13:"var(--eds-spacing-medium-8)",14:"var(--eds-spacing-large-1)",15:"var(--eds-spacing-large-2)",16:"var(--eds-spacing-large-3)",17:"var(--eds-spacing-large-4)",18:"var(--eds-spacing-large-5)"}[e]||"0px");var nt={"heading-h1":"heading-h1__00OVp__0-1-24","heading-h2":"heading-h2__uf8XO__0-1-24","heading-h3":"heading-h3__b58IP__0-1-24","heading-h4":"heading-h4__x0dIm__0-1-24","heading-h5":"heading-h5__dHW8C__0-1-24","heading-h6":"heading-h6__FSif0__0-1-24","heading-display":"heading-display__1B20E__0-1-24","heading-leadtext":"heading-leadtext__fbf5X__0-1-24","heading-subheadline":"heading-subheadline__xgXDJ__0-1-24","text-p-small":"text-p-small__U5YeB__0-1-24","text-p-default":"text-p-default__T3Gv7__0-1-24","text-p-large":"text-p-large__k4P5K__0-1-24","text-line-tiny":"text-line-tiny__IdKxY__0-1-24","text-line-small":"text-line-small__VDnxz__0-1-24","text-line-default":"text-line-default__HHLev__0-1-24","text-line-large":"text-line-large__zY6Xt__0-1-24","text-list-default":"text-list-default__9dn8h__0-1-24","label-tiny":"label-tiny__fwERw__0-1-24","label-small":"label-small__7hSFb__0-1-24","label-default":"label-default__TzEjW__0-1-24","label-large":"label-large__Xe0s7__0-1-24","text-italic":"text-italic__9j6-k__0-1-24","text-underline":"text-underline__-idVq__0-1-24","text-uppercase":"text-uppercase__zT285__0-1-24","text-400":"text-400__veahz__0-1-24","text-600":"text-600__SOu9h__0-1-24"};const rt=({variant:t="p",size:n="default",italic:r=!1,underline:i=!1,weight:o="400",uppercase:a=!1,children:l,className:s,mt:u,mb:c,my:d,...p})=>{const v="p"===t?"p":"list"===t?"ul":"div",g=`\n        ${nt[`text-${t}-${n}`]}\n        ${s}\n        ${r?nt["text-italic"]:""}\n        ${i?nt["text-underline"]:""}\n        ${o?nt[`text-${o}`]:""}\n        ${a?nt["text-uppercase"]:""}\n    `,f=(({mt:e,mb:t,my:n})=>({marginTop:void 0!==e?tt(e):void 0!==n?tt(n):void 0,marginBottom:void 0!==t?tt(t):void 0!==n?tt(n):void 0}))({mt:u,mb:c,my:d});return e.createElement(v,{className:g,style:{...f},...p},l)},it=({id:t,size:n="default",children:r,italic:i=!1,underline:o=!1,weight:a="400",uppercase:l=!1,className:s,...u})=>{const c=`\n        ${nt[`label-${n}`]}\n        ${s}\n        ${i?nt["text-italic"]:""}\n        ${o?nt["text-underline"]:""}\n        ${a?nt[`text-${a}`]:""}\n        ${l?nt["text-uppercase"]:""}\n    `;return e.createElement("label",{id:t,className:c,...u},r)};var ot={choice:"choice__KMBpQ__0-1-24",label:"label__rdK6o__0-1-24",row:"row__KK7BC__0-1-24","custom-content":"custom-content__K1-TL__0-1-24",column:"column__FXKoR__0-1-24",choice__title:"choice__title__NFaiJ__0-1-24",choice__content:"choice__content__BjtRo__0-1-24",choice__description:"choice__description__cdsJX__0-1-24",choice__indicator:"choice__indicator__QxowO__0-1-24",choice__icon:"choice__icon__koRRZ__0-1-24","choice--pressed":"choice--pressed__KnJZC__0-1-24","choice--selected":"choice--selected__ROYJ5__0-1-24","choice--focused":"choice--focused__fqosa__0-1-24","choice--invalid":"choice--invalid__HmQed__0-1-24"};const at=s(((a,l)=>{const s=function(e){const t=n(null);return o((()=>({get current(){return t.current},set current(n){t.current=n,"function"==typeof e?e(n):e&&(e.current=n)}})),[e])}(l),u=n(null),c=s||u,{children:d,label:p,description:v,layout:g="row"}=a,f=Xe(a),{isSelected:m}=f,{inputProps:h,isPressed:y,isInvalid:T,labelProps:b}=function(e,t,n){let i=We({...e,value:t.isSelected}),{isInvalid:o,validationErrors:a,validationDetails:l}=i.displayValidation,{labelProps:s,inputProps:u,isSelected:c,isPressed:d,isDisabled:p,isReadOnly:v}=Ue({...e,isInvalid:o},t,n);Ce(e,i,n);let{isIndeterminate:g,isRequired:f,validationBehavior:m="aria"}=e;return r((()=>{n.current&&(n.current.indeterminate=!!g)})),{labelProps:s,inputProps:{...u,checked:c,"aria-required":f&&"aria"===m||void 0,required:f&&"native"===m},isSelected:c,isPressed:d,isDisabled:p,isReadOnly:v,isInvalid:o,validationErrors:a,validationDetails:l}}(a,f,c),{isFocusVisible:E,focusProps:w}=function(e={}){let{autoFocus:r=!1,isTextInput:o,within:a}=e,l=n({isFocused:!1,isFocusVisible:r||Pe()}),[s,u]=t(!1),[c,d]=t((()=>l.current.isFocused&&l.current.isFocusVisible)),p=i((()=>d(l.current.isFocused&&l.current.isFocusVisible)),[]),v=i((e=>{l.current.isFocused=e,u(e),p()}),[p]);Le((e=>{l.current.isFocusVisible=e,p()}),[],{isTextInput:o});let{focusProps:g}=ue({isDisabled:a,onFocusChange:v}),{focusWithinProps:f}=Se({isDisabled:!a,onFocusWithinChange:v});return{isFocused:s,isFocusVisible:c,focusProps:a?f:g}}(),P=Qe(ot.choice,{[ot["choice--pressed"]]:y,[ot["choice--selected"]]:m,[ot["choice--focused"]]:E,[ot["choice--invalid"]]:T}),x=Qe({[ot.column]:"column"===g,[ot.row]:"row"===g});return e.createElement("div",{className:Qe(P,x)},e.createElement(it,{className:ot.label,...b},e.createElement("span",{className:ot.choice__indicator,"aria-hidden":"true"},e.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",className:ot.choice__icon},e.createElement("circle",{cx:"8",cy:"8",r:"5"}))),e.createElement(Ge,null,e.createElement("input",{..._(h,w),ref:c})),e.createElement("div",{className:ot.choice__content},e.createElement(et,null,e.createElement("div",{className:ot.choice__title},p),v&&e.createElement(rt,{variant:"line",size:"small",weight:"400",className:ot.choice__description},v)))),d&&e.createElement("div",{className:ot["custom-content"]},d))}));at.displayName="ChoiceToggle";export{at as ChoiceToggle};
//# sourceMappingURL=index.js.map
