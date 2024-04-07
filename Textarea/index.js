"use client";import e,{useState as t,useRef as n,useEffect as r,useCallback as i,useContext as a,useMemo as o,createContext as l,forwardRef as s}from"react";const u={prefix:String(Math.round(1e10*Math.random())),current:0},d=e.createContext(u),c=e.createContext(!1);let p=Boolean("undefined"!=typeof window&&window.document&&window.document.createElement),v=new WeakMap;const f="function"==typeof e.useId?function(n){let r=e.useId(),[i]=t("function"==typeof e.useSyncExternalStore?e.useSyncExternalStore(g,m,_):a(c)),o=i||"test"===process.env.NODE_ENV?"react-aria":`react-aria${u.prefix}`;return n||`${o}-${r}`}:function(t){let r=a(d);r!==u||p||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let i=function(t=!1){let r=a(d),i=n(null);if(null===i.current&&!t){var o,l;let t=null===(l=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)||void 0===l||null===(o=l.ReactCurrentOwner)||void 0===o?void 0:o.current;if(t){let e=v.get(t);null==e?v.set(t,{id:r.current,state:t.memoizedState}):t.memoizedState!==e.state&&(r.current=e.id,v.delete(t))}i.current=++r.current}return i.current}(!!t),o=r===u&&"test"===process.env.NODE_ENV?"react-aria":`react-aria${r.prefix}`;return t||`${o}-${i}`};function m(){return!1}function _(){return!0}function g(e){return()=>{}}function h(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=h(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function b(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=h(e))&&(r&&(r+=" "),r+=t);return r}const y="undefined"!=typeof document?e.useLayoutEffect:()=>{};function E(e){const t=n(null);return y((()=>{t.current=e}),[e]),i(((...e)=>{const n=t.current;return null==n?void 0:n(...e)}),[])}let w=Boolean("undefined"!=typeof window&&window.document&&window.document.createElement),x=new Map;function L(e){let[a,o]=t(e),l=n(null),s=f(a),u=i((e=>{l.current=e}),[]);return w&&x.set(s,u),y((()=>{let e=s;return()=>{x.delete(e)}}),[s]),r((()=>{let e=l.current;e&&(l.current=null,o(e))})),s}function T(e,t){if(e===t)return e;let n=x.get(e);if(n)return n(t),t;let r=x.get(t);return r?(r(e),e):t}function P(e=[]){let r=L(),[a,o]=function(e){let[r,i]=t(e),a=n(null),o=E((()=>{if(!a.current)return;let e=a.current.next();e.done?a.current=null:r===e.value?o():i(e.value)}));y((()=>{a.current&&o()}));let l=E((e=>{a.current=e(r),o()}));return[r,l]}(r),l=i((()=>{o((function*(){yield r,yield document.getElementById(r)?r:void 0}))}),[r,o]);return y(l,[r,l,...e]),a}function M(...e){return(...t)=>{for(let n of e)"function"==typeof n&&n(...t)}}const S=e=>{var t;return null!==(t=null==e?void 0:e.ownerDocument)&&void 0!==t?t:document},I=e=>{if(e&&"window"in e&&e.window===e)return e;return S(e).defaultView||window};function C(...e){let t={...e[0]};for(let n=1;n<e.length;n++){let r=e[n];for(let e in r){let n=t[e],i=r[e];"function"==typeof n&&"function"==typeof i&&"o"===e[0]&&"n"===e[1]&&e.charCodeAt(2)>=65&&e.charCodeAt(2)<=90?t[e]=M(n,i):"className"!==e&&"UNSAFE_className"!==e||"string"!=typeof n||"string"!=typeof i?"id"===e&&n&&i?t.id=T(n,i):t[e]=void 0!==i?i:n:t[e]=b(n,i)}}return t}const F=new Set(["id"]),D=new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]),V=new Set(["href","target","rel","download","ping","referrerPolicy"]),N=/^(data-.*)$/;function O(e){if(function(){if(null==$){$=!1;try{document.createElement("div").focus({get preventScroll(){return $=!0,!0}})}catch(e){}}return $}())e.focus({preventScroll:!0});else{let t=function(e){let t=e.parentNode,n=[],r=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==r;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;r instanceof HTMLElement&&n.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft});return n}(e);e.focus(),function(e){for(let{element:t,scrollTop:n,scrollLeft:r}of e)t.scrollTop=n,t.scrollLeft=r}(t)}}let $=null;function R(){return e=/^Mac/i,"undefined"!=typeof window&&null!=window.navigator&&e.test((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.platform)||window.navigator.platform);var e,t}function k(){return e=/Android/i,"undefined"!=typeof window&&null!=window.navigator&&((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.brands.some((t=>e.test(t.brand))))||e.test(window.navigator.userAgent));var e,t}let B=new Map,A=new Set;function H(){if("undefined"==typeof window)return;function e(e){return"propertyName"in e}let t=n=>{if(!e(n)||!n.target)return;let r=B.get(n.target);if(r&&(r.delete(n.propertyName),0===r.size&&(n.target.removeEventListener("transitioncancel",t),B.delete(n.target)),0===B.size)){for(let e of A)e();A.clear()}};document.body.addEventListener("transitionrun",(n=>{if(!e(n)||!n.target)return;let r=B.get(n.target);r||(r=new Set,B.set(n.target,r),n.target.addEventListener("transitioncancel",t,{once:!0})),r.add(n.propertyName)})),document.body.addEventListener("transitionend",t)}"undefined"!=typeof document&&("loading"!==document.readyState?H():document.addEventListener("DOMContentLoaded",H));e.createContext({register:()=>{}}).displayName="PressResponderContext";class z{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(e,t){this.nativeEvent=t,this.target=t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget,this.bubbles=t.bubbles,this.cancelable=t.cancelable,this.defaultPrevented=t.defaultPrevented,this.eventPhase=t.eventPhase,this.isTrusted=t.isTrusted,this.timeStamp=t.timeStamp,this.type=e}}function W(e){let t=n({isFocused:!1,observer:null});y((()=>{const e=t.current;return()=>{e.observer&&(e.observer.disconnect(),e.observer=null)}}),[]);let r=E((t=>{null==e||e(t)}));return i((e=>{if(e.target instanceof HTMLButtonElement||e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLSelectElement){t.current.isFocused=!0;let n=e.target,i=e=>{t.current.isFocused=!1,n.disabled&&r(new z("blur",e)),t.current.observer&&(t.current.observer.disconnect(),t.current.observer=null)};n.addEventListener("focusout",i,{once:!0}),t.current.observer=new MutationObserver((()=>{if(t.current.isFocused&&n.disabled){var e;null===(e=t.current.observer)||void 0===e||e.disconnect();let r=n===document.activeElement?null:document.activeElement;n.dispatchEvent(new FocusEvent("blur",{relatedTarget:r})),n.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:r}))}})),t.current.observer.observe(n,{attributes:!0,attributeFilter:["disabled"]})}}),[r])}function j(e){let{isDisabled:t,onFocus:n,onBlur:r,onFocusChange:a}=e;const o=i((e=>{if(e.target===e.currentTarget)return r&&r(e),a&&a(!1),!0}),[r,a]),l=W(o),s=i((e=>{e.target===e.currentTarget&&document.activeElement===e.target&&(n&&n(e),a&&a(!0),l(e))}),[a,n,l]);return{focusProps:{onFocus:!t&&(n||a||r)?s:void 0,onBlur:t||!r&&!a?void 0:o}}}let K=null,U=new Set,X=new Map,q=!1,Y=!1;const G={Tab:!0,Escape:!0};function Z(e,t){for(let n of U)n(e,t)}function J(e){q=!0,function(e){return!(e.metaKey||!R()&&e.altKey||e.ctrlKey||"Control"===e.key||"Shift"===e.key||"Meta"===e.key)}(e)&&(K="keyboard",Z("keyboard",e))}function Q(e){K="pointer","mousedown"!==e.type&&"pointerdown"!==e.type||(q=!0,Z("pointer",e))}function ee(e){var t;(0===(t=e).mozInputSource&&t.isTrusted||(k()&&t.pointerType?"click"===t.type&&1===t.buttons:0===t.detail&&!t.pointerType))&&(q=!0,K="virtual")}function te(e){e.target!==window&&e.target!==document&&(q||Y||(K="virtual",Z("virtual",e)),q=!1,Y=!1)}function ne(){q=!1,Y=!0}function re(e){if("undefined"==typeof window||X.get(I(e)))return;const t=I(e),n=S(e);let r=t.HTMLElement.prototype.focus;t.HTMLElement.prototype.focus=function(){q=!0,r.apply(this,arguments)},n.addEventListener("keydown",J,!0),n.addEventListener("keyup",J,!0),n.addEventListener("click",ee,!0),t.addEventListener("focus",te,!0),t.addEventListener("blur",ne,!1),"undefined"!=typeof PointerEvent?(n.addEventListener("pointerdown",Q,!0),n.addEventListener("pointermove",Q,!0),n.addEventListener("pointerup",Q,!0)):(n.addEventListener("mousedown",Q,!0),n.addEventListener("mousemove",Q,!0),n.addEventListener("mouseup",Q,!0)),t.addEventListener("beforeunload",(()=>{ie(e)}),{once:!0}),X.set(t,{focus:r})}const ie=(e,t)=>{const n=I(e),r=S(e);t&&r.removeEventListener("DOMContentLoaded",t),X.has(n)&&(n.HTMLElement.prototype.focus=X.get(n).focus,r.removeEventListener("keydown",J,!0),r.removeEventListener("keyup",J,!0),r.removeEventListener("click",ee,!0),n.removeEventListener("focus",te,!0),n.removeEventListener("blur",ne,!1),"undefined"!=typeof PointerEvent?(r.removeEventListener("pointerdown",Q,!0),r.removeEventListener("pointermove",Q,!0),r.removeEventListener("pointerup",Q,!0)):(r.removeEventListener("mousedown",Q,!0),r.removeEventListener("mousemove",Q,!0),r.removeEventListener("mouseup",Q,!0)),X.delete(n))};function ae(){return"pointer"!==K}"undefined"!=typeof document&&function(e){const t=S(e);let n;"loading"!==t.readyState?re(e):(n=()=>{re(e)},t.addEventListener("DOMContentLoaded",n))}();const oe=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function le(e,t,n){re(),r((()=>{let t=(t,r)=>{(function(e,t,n){var r;const i="undefined"!=typeof window?I(null==n?void 0:n.target).HTMLInputElement:HTMLInputElement,a="undefined"!=typeof window?I(null==n?void 0:n.target).HTMLTextAreaElement:HTMLTextAreaElement,o="undefined"!=typeof window?I(null==n?void 0:n.target).HTMLElement:HTMLElement,l="undefined"!=typeof window?I(null==n?void 0:n.target).KeyboardEvent:KeyboardEvent;return!((e=e||(null==n?void 0:n.target)instanceof i&&!oe.has(null==n||null===(r=n.target)||void 0===r?void 0:r.type)||(null==n?void 0:n.target)instanceof a||(null==n?void 0:n.target)instanceof o&&(null==n?void 0:n.target.isContentEditable))&&"keyboard"===t&&n instanceof l&&!G[n.key])})(!!(null==n?void 0:n.isTextInput),t,r)&&e(ae())};return U.add(t),()=>{U.delete(t)}}),t)}function se(e){if(!e)return;let t=!0;return n=>{let r={...n,preventDefault(){n.preventDefault()},isDefaultPrevented:()=>n.isDefaultPrevented(),stopPropagation(){console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")},continuePropagation(){t=!1}};e(r),t&&n.stopPropagation()}}function ue(e){const t=S(e);if("virtual"===K){let r=t.activeElement;n=()=>{t.activeElement===r&&e.isConnected&&O(e)},requestAnimationFrame((()=>{0===B.size?n():A.add(n)}))}else O(e);var n}function de(e,t){return!!e&&(!!t&&t.some((t=>t.contains(e))))}class ce{get size(){return this.fastMap.size}getTreeNode(e){return this.fastMap.get(e)}addTreeNode(e,t,n){let r=this.fastMap.get(null!=t?t:null);if(!r)return;let i=new pe({scopeRef:e});r.addChild(i),i.parent=r,this.fastMap.set(e,i),n&&(i.nodeToRestore=n)}addNode(e){this.fastMap.set(e.scopeRef,e)}removeTreeNode(e){if(null===e)return;let t=this.fastMap.get(e);if(!t)return;let n=t.parent;for(let e of this.traverse())e!==t&&t.nodeToRestore&&e.nodeToRestore&&t.scopeRef&&t.scopeRef.current&&de(e.nodeToRestore,t.scopeRef.current)&&(e.nodeToRestore=t.nodeToRestore);let r=t.children;n&&(n.removeChild(t),r.size>0&&r.forEach((e=>n&&n.addChild(e)))),this.fastMap.delete(t.scopeRef)}*traverse(e=this.root){if(null!=e.scopeRef&&(yield e),e.children.size>0)for(let t of e.children)yield*this.traverse(t)}clone(){var e;let t=new ce;var n;for(let r of this.traverse())t.addTreeNode(r.scopeRef,null!==(n=null===(e=r.parent)||void 0===e?void 0:e.scopeRef)&&void 0!==n?n:null,r.nodeToRestore);return t}constructor(){this.fastMap=new Map,this.root=new pe({scopeRef:null}),this.fastMap.set(null,this.root)}}class pe{addChild(e){this.children.add(e),e.parent=this}removeChild(e){this.children.delete(e),e.parent=void 0}constructor(e){this.children=new Set,this.contain=!1,this.scopeRef=e.scopeRef}}function ve(e={}){let{autoFocus:r=!1,isTextInput:a,within:o}=e,l=n({isFocused:!1,isFocusVisible:r||ae()}),[s,u]=t(!1),[d,c]=t((()=>l.current.isFocused&&l.current.isFocusVisible)),p=i((()=>c(l.current.isFocused&&l.current.isFocusVisible)),[]),v=i((e=>{l.current.isFocused=e,u(e),p()}),[p]);le((e=>{l.current.isFocusVisible=e,p()}),[],{isTextInput:a});let{focusProps:f}=j({isDisabled:o,onFocusChange:v}),{focusWithinProps:m}=function(e){let{isDisabled:t,onBlurWithin:r,onFocusWithin:a,onFocusWithinChange:o}=e,l=n({isFocusWithin:!1}),s=i((e=>{l.current.isFocusWithin&&!e.currentTarget.contains(e.relatedTarget)&&(l.current.isFocusWithin=!1,r&&r(e),o&&o(!1))}),[r,o,l]),u=W(s),d=i((e=>{l.current.isFocusWithin||document.activeElement!==e.target||(a&&a(e),o&&o(!0),l.current.isFocusWithin=!0,u(e))}),[a,o,u]);return t?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:d,onBlur:s}}}({isDisabled:!o,onFocusWithinChange:v});return{isFocused:s,isFocusVisible:d,focusProps:o?m:f}}new ce;let fe=e.createContext(null);function me(e){let t=a(fe)||{};!function(e,t){y((()=>{if(e&&e.ref&&t)return e.ref.current=t.current,()=>{e.ref&&(e.ref.current=null)}}))}(t,e);let{ref:n,...r}=t;return r}function _e(e,t){let{focusProps:i}=j(e),{keyboardProps:a}=function(e){return{keyboardProps:e.isDisabled?{}:{onKeyDown:se(e.onKeyDown),onKeyUp:se(e.onKeyUp)}}}(e),o=C(i,a),l=me(t),s=e.isDisabled?{}:l,u=n(e.autoFocus);return r((()=>{u.current&&t.current&&ue(t.current),u.current=!1}),[t]),{focusableProps:C({...o,tabIndex:e.excludeFromTabOrder&&!e.isDisabled?-1:void 0},s)}}function ge(e,t,n){let{validationBehavior:i,focus:a}=e;y((()=>{if("native"===i&&(null==n?void 0:n.current)){let r=t.realtimeValidation.isInvalid?t.realtimeValidation.validationErrors.join(" ")||"Invalid value.":"";n.current.setCustomValidity(r),n.current.hasAttribute("title")||(n.current.title=""),t.realtimeValidation.isInvalid||t.updateValidation({isInvalid:!(e=n.current).validity.valid,validationDetails:he(e),validationErrors:e.validationMessage?[e.validationMessage]:[]})}var e}));let o=E((()=>{t.resetValidation()})),l=E((e=>{var r;t.displayValidation.isInvalid||t.commitValidation();let i=null==n||null===(r=n.current)||void 0===r?void 0:r.form;var o,l;!e.defaultPrevented&&n&&i&&function(e){for(let t=0;t<e.elements.length;t++){let n=e.elements[t];if(!n.validity.valid)return n}return null}(i)===n.current&&(a?a():null===(o=n.current)||void 0===o||o.focus(),K=l="keyboard",Z(l,null));e.preventDefault()})),s=E((()=>{t.commitValidation()}));r((()=>{let e=null==n?void 0:n.current;if(!e)return;let t=e.form;return e.addEventListener("invalid",l),e.addEventListener("change",s),null==t||t.addEventListener("reset",o),()=>{e.removeEventListener("invalid",l),e.removeEventListener("change",s),null==t||t.removeEventListener("reset",o)}}),[n,l,s,o,i])}function he(e){let t=e.validity;return{badInput:t.badInput,customError:t.customError,patternMismatch:t.patternMismatch,rangeOverflow:t.rangeOverflow,rangeUnderflow:t.rangeUnderflow,stepMismatch:t.stepMismatch,tooLong:t.tooLong,tooShort:t.tooShort,typeMismatch:t.typeMismatch,valueMissing:t.valueMissing,valid:t.valid}}const be={badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},ye={...be,customError:!0,valid:!1},Ee={isInvalid:!1,validationDetails:be,validationErrors:[]},we=l({}),xe="__formValidationState"+Date.now();function Le(e){if(e[xe]){let{realtimeValidation:t,displayValidation:n,updateValidation:r,resetValidation:i,commitValidation:a}=e[xe];return{realtimeValidation:t,displayValidation:n,updateValidation:r,resetValidation:i,commitValidation:a}}return function(e){let{isInvalid:i,validationState:l,name:s,value:u,builtinValidation:d,validate:c,validationBehavior:p="aria"}=e;l&&(i||(i="invalid"===l));let v=i?{isInvalid:!0,validationErrors:[],validationDetails:ye}:null,f=o((()=>Pe(function(e,t){if("function"==typeof e){let n=e(t);if(n&&"boolean"!=typeof n)return Te(n)}return[]}(c,u))),[c,u]);(null==d?void 0:d.validationDetails.valid)&&(d=null);let m=a(we),_=o((()=>s?Array.isArray(s)?s.flatMap((e=>Te(m[e]))):Te(m[s]):[]),[m,s]),[g,h]=t(m),[b,y]=t(!1);m!==g&&(h(m),y(!1));let E=o((()=>Pe(b?[]:_)),[b,_]),w=n(Ee),[x,L]=t(Ee),T=n(Ee),P=()=>{if(!M)return;S(!1);let e=f||d||w.current;Me(e,T.current)||(T.current=e,L(e))},[M,S]=t(!1);return r(P),{realtimeValidation:v||E||f||d||Ee,displayValidation:"native"===p?v||E||x:v||E||f||d||x,updateValidation(e){"aria"!==p||Me(x,e)?w.current=e:L(e)},resetValidation(){let e=Ee;Me(e,T.current)||(T.current=e,L(e)),"native"===p&&S(!1),y(!0)},commitValidation(){"native"===p&&S(!0),y(!0)}}}(e)}function Te(e){return e?Array.isArray(e)?e:[e]:[]}function Pe(e){return e.length?{isInvalid:!0,validationErrors:e,validationDetails:ye}:null}function Me(e,t){return e===t||e&&t&&e.isInvalid===t.isInvalid&&e.validationErrors.length===t.validationErrors.length&&e.validationErrors.every(((e,n)=>e===t.validationErrors[n]))&&Object.entries(e.validationDetails).every((([e,n])=>t.validationDetails[e]===n))}function Se(e){let{id:t,label:n,"aria-labelledby":r,"aria-label":i,labelElementType:a="label"}=e;t=L(t);let o=L(),l={};n?(r=r?`${o} ${r}`:o,l={id:o,htmlFor:"label"===a?t:void 0}):r||i||console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility");let s=function(e,t){let{id:n,"aria-label":r,"aria-labelledby":i}=e;if(n=L(n),i&&r){let e=new Set([n,...i.trim().split(/\s+/)]);i=[...e].join(" ")}else i&&(i=i.trim().split(/\s+/).join(" "));return r||i||!t||(r=t),{id:n,"aria-label":r,"aria-labelledby":i}}({id:t,"aria-label":i,"aria-labelledby":r});return{labelProps:l,fieldProps:s}}function Ie(e,a){let{inputElementType:o="input",isDisabled:l=!1,isRequired:s=!1,isReadOnly:u=!1,type:d="text",validationBehavior:c="aria"}=e,[p,v]=function(e,a,o){let[l,s]=t(e||a),u=n(void 0!==e),d=void 0!==e;r((()=>{let e=u.current;e!==d&&console.warn(`WARN: A component changed from ${e?"controlled":"uncontrolled"} to ${d?"controlled":"uncontrolled"}.`),u.current=d}),[d]);let c=d?e:l,p=i(((e,...t)=>{let n=(e,...t)=>{o&&(Object.is(c,e)||o(e,...t)),d||(c=e)};"function"==typeof e?(console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"),s(((r,...i)=>{let a=e(d?c:r,...i);return n(a,...t),d?r:a}))):(d||s(e),n(e,...t))}),[d,c,o]);return[c,p]}(e.value,e.defaultValue||"",e.onChange),{focusableProps:f}=_e(e,a),m=Le({...e,value:p}),{isInvalid:_,validationErrors:g,validationDetails:h}=m.displayValidation,{labelProps:b,fieldProps:y,descriptionProps:w,errorMessageProps:x}=function(e){let{description:t,errorMessage:n,isInvalid:r,validationState:i}=e,{labelProps:a,fieldProps:o}=Se(e),l=P([Boolean(t),Boolean(n),r,i]),s=P([Boolean(t),Boolean(n),r,i]);return o=C(o,{"aria-describedby":[l,s,e["aria-describedby"]].filter(Boolean).join(" ")||void 0}),{labelProps:a,fieldProps:o,descriptionProps:{id:l},errorMessageProps:{id:s}}}({...e,isInvalid:_,errorMessage:e.errorMessage||g}),L=function(e,t={}){let{labelable:n,isLink:r,propNames:i}=t,a={};for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&(F.has(t)||n&&D.has(t)||r&&V.has(t)||(null==i?void 0:i.has(t))||N.test(t))&&(a[t]=e[t]);return a}(e,{labelable:!0});const T={type:d,pattern:e.pattern};return function(e,t,i){let a=n(t),o=E((()=>{i&&i(a.current)}));r((()=>{var t;let n=null==e||null===(t=e.current)||void 0===t?void 0:t.form;return null==n||n.addEventListener("reset",o),()=>{null==n||n.removeEventListener("reset",o)}}),[e,o])}(a,p,v),ge(e,m,a),r((()=>{if(a.current instanceof I(a.current).HTMLTextAreaElement){let e=a.current;Object.defineProperty(e,"defaultValue",{get:()=>e.value,set:()=>{},configurable:!0})}}),[a]),{labelProps:b,inputProps:C(L,"input"===o&&T,{disabled:l,readOnly:u,required:s&&"native"===c,"aria-required":s&&"aria"===c||void 0,"aria-invalid":_||void 0,"aria-errormessage":e["aria-errormessage"],"aria-activedescendant":e["aria-activedescendant"],"aria-autocomplete":e["aria-autocomplete"],"aria-haspopup":e["aria-haspopup"],value:p,onChange:e=>v(e.target.value),autoComplete:e.autoComplete,autoCapitalize:e.autoCapitalize,maxLength:e.maxLength,minLength:e.minLength,name:e.name,placeholder:e.placeholder,inputMode:e.inputMode,onCopy:e.onCopy,onCut:e.onCut,onPaste:e.onPaste,onCompositionEnd:e.onCompositionEnd,onCompositionStart:e.onCompositionStart,onCompositionUpdate:e.onCompositionUpdate,onSelect:e.onSelect,onBeforeInput:e.onBeforeInput,onInput:e.onInput,...f,...y}),descriptionProps:w,errorMessageProps:x,isInvalid:_,validationErrors:g,validationDetails:h}}var Ce,Fe={exports:{}};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/Ce=Fe,function(){var e={}.hasOwnProperty;function t(){for(var n=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var a=typeof i;if("string"===a||"number"===a)n.push(i);else if(Array.isArray(i)){if(i.length){var o=t.apply(null,i);o&&n.push(o)}}else if("object"===a){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){n.push(i.toString());continue}for(var l in i)e.call(i,l)&&i[l]&&n.push(l)}}}return n.join(" ")}Ce.exports?(t.default=t,Ce.exports=t):window.classNames=t}();var De=Fe.exports,Ve={stack:"stack__foEop__0-1-4","direction-xsmall-column":"direction-xsmall-column__gSInW__0-1-4","direction-xsmall-row":"direction-xsmall-row__xbYKt__0-1-4","direction-small-column":"direction-small-column__w3qdN__0-1-4","direction-small-row":"direction-small-row__Fi83T__0-1-4","direction-medium-column":"direction-medium-column__uPpiH__0-1-4","direction-medium-row":"direction-medium-row__QXENi__0-1-4","direction-large-column":"direction-large-column__DOuNx__0-1-4","direction-large-row":"direction-large-row__nt-ew__0-1-4","gap-xsmall-1":"gap-xsmall-1__PH7ZL__0-1-4","gap-xsmall-2":"gap-xsmall-2__OF5nS__0-1-4","gap-xsmall-3":"gap-xsmall-3__KP-Pk__0-1-4","gap-xsmall-4":"gap-xsmall-4__J5ttC__0-1-4","gap-small-1":"gap-small-1__s7o8S__0-1-4","gap-small-2":"gap-small-2__nhKiB__0-1-4","gap-small-3":"gap-small-3__SKBDk__0-1-4","gap-small-4":"gap-small-4__ykzrO__0-1-4","gap-medium-1":"gap-medium-1__dN9up__0-1-4","gap-medium-2":"gap-medium-2__UMXHe__0-1-4","gap-medium-3":"gap-medium-3__OIV7e__0-1-4","gap-medium-4":"gap-medium-4__mfb2I__0-1-4","gap-large-1":"gap-large-1__3BTuu__0-1-4","gap-large-2":"gap-large-2__po1On__0-1-4","gap-large-3":"gap-large-3__fK1OL__0-1-4","gap-large-4":"gap-large-4__1-BZF__0-1-4"};const Ne=({direction:t={xsmall:"column",small:"column",medium:"column",large:"column"},gap:n={xsmall:1,small:1,medium:1,large:1},children:r})=>{const i=Object.entries(t).map((([e,t])=>Ve[`direction-${e}-${t}`])).join(" "),a=Object.entries(n).map((([e,t])=>Ve[`gap-${e}-${t}`])).join(" ");return e.createElement("div",{className:`${Ve.stack} ${i} ${a}`},r)},Oe=e=>({0:"var(--eds-spacing-none)",1:"var(--eds-spacing-small-1)",2:"var(--eds-spacing-small-2)",3:"var(--eds-spacing-small-3)",4:"var(--eds-spacing-small-4)",5:"var(--eds-spacing-small-5)",6:"var(--eds-spacing-medium-1)",7:"var(--eds-spacing-medium-2)",8:"var(--eds-spacing-medium-3)",9:"var(--eds-spacing-medium-4)",10:"var(--eds-spacing-medium-5)",11:"var(--eds-spacing-medium-6)",12:"var(--eds-spacing-medium-7)",13:"var(--eds-spacing-medium-8)",14:"var(--eds-spacing-large-1)",15:"var(--eds-spacing-large-2)",16:"var(--eds-spacing-large-3)",17:"var(--eds-spacing-large-4)",18:"var(--eds-spacing-large-5)"}[e]||"0px");var $e={"heading-h1":"heading-h1__00OVp__0-1-4","heading-h2":"heading-h2__uf8XO__0-1-4","heading-h3":"heading-h3__b58IP__0-1-4","heading-h4":"heading-h4__x0dIm__0-1-4","heading-h5":"heading-h5__dHW8C__0-1-4","heading-h6":"heading-h6__FSif0__0-1-4","heading-display":"heading-display__1B20E__0-1-4","heading-leadtext":"heading-leadtext__fbf5X__0-1-4","heading-subheadline":"heading-subheadline__xgXDJ__0-1-4","text-p-small":"text-p-small__U5YeB__0-1-4","text-p-default":"text-p-default__T3Gv7__0-1-4","text-p-large":"text-p-large__k4P5K__0-1-4","text-line-tiny":"text-line-tiny__IdKxY__0-1-4","text-line-small":"text-line-small__VDnxz__0-1-4","text-line-default":"text-line-default__HHLev__0-1-4","text-line-large":"text-line-large__zY6Xt__0-1-4","text-list-default":"text-list-default__9dn8h__0-1-4","label-tiny":"label-tiny__fwERw__0-1-4","label-small":"label-small__7hSFb__0-1-4","label-default":"label-default__TzEjW__0-1-4","label-large":"label-large__Xe0s7__0-1-4","text-italic":"text-italic__9j6-k__0-1-4","text-underline":"text-underline__-idVq__0-1-4","text-uppercase":"text-uppercase__zT285__0-1-4","text-400":"text-400__veahz__0-1-4","text-600":"text-600__SOu9h__0-1-4"};const Re=({variant:t="p",size:n="default",italic:r=!1,underline:i=!1,weight:a="400",uppercase:o=!1,children:l,className:s,mt:u,mb:d,my:c,...p})=>{const v="p"===t?"p":"list"===t?"ul":"div",f=`\n        ${$e[`text-${t}-${n}`]}\n        ${s}\n        ${r?$e["text-italic"]:""}\n        ${i?$e["text-underline"]:""}\n        ${a?$e[`text-${a}`]:""}\n        ${o?$e["text-uppercase"]:""}\n    `,m=(({mt:e,mb:t,my:n})=>({marginTop:void 0!==e?Oe(e):void 0!==n?Oe(n):void 0,marginBottom:void 0!==t?Oe(t):void 0!==n?Oe(n):void 0}))({mt:u,mb:d,my:c});return e.createElement(v,{className:f,style:{...m},...p},l)},ke=({id:t,size:n="default",children:r,italic:i=!1,underline:a=!1,weight:o="400",uppercase:l=!1,className:s,...u})=>{const d=`\n        ${$e[`label-${n}`]}\n        ${s}\n        ${i?$e["text-italic"]:""}\n        ${a?$e["text-underline"]:""}\n        ${o?$e[`text-${o}`]:""}\n        ${l?$e["text-uppercase"]:""}\n    `;return e.createElement("label",{id:t,className:d,...u},r)};var Be="label__container__tIjqr__0-1-4",Ae="label__GCM0x__0-1-4",He="label__suffix__bUA9l__0-1-4",ze="label__suffix-separator__N-hP-__0-1-4",We="textarea__Ey8LX__0-1-4",je="textarea--invalid__1ZCD7__0-1-4",Ke="textarea--focused__xIkmi__0-1-4",Ue="messages__description--regular__H26dj__0-1-4",Xe="messages__description--warning__cS7LV__0-1-4",qe="messages__error__9zO-Q__0-1-4";const Ye=s(((t,r)=>{const i=function(e){const t=n(null);return o((()=>({get current(){return t.current},set current(n){t.current=n,"function"==typeof e?e(n):e&&(e.current=n)}})),[e])}(r),a=n(null),l=i||a,{labelProps:s,inputProps:u,descriptionProps:d,errorMessageProps:c,validationErrors:p,isInvalid:v}=Ie({...t,inputElementType:"textarea"},l),{isFocusVisible:f,focusProps:m}=ve({isTextInput:!0}),{label:_,description:g,errorMessage:h,validationBehavior:b,descriptionSeverity:y="regular",labelSuffix:E,tooltipTrigger:w,rows:x,title:L}=t,T="native"===b?p.join(" "):h,P=T||g,M=De(We,{[Ke]:f,[je]:v}),S=De({[Ue]:"regular"===y,[Xe]:"warning"===y});return e.createElement(Ne,null,_&&e.createElement("div",{className:Be},e.createElement(ke,{weight:"600",className:Ae,...s},_,E&&e.createElement(e.Fragment,null,e.createElement("span",{className:ze}),e.createElement(Re,{variant:"line",italic:!0,size:"small",className:He},E))),w),e.createElement("textarea",{...C(u,m),className:M,ref:l,rows:x,title:L}),P&&e.createElement(Ne,null,v&&T&&e.createElement("div",{...c,className:qe},e.createElement(Re,{variant:"line",size:"small"},T)),g&&e.createElement("div",{...d,className:S},e.createElement(Re,{variant:"line",size:"small"},g))))}));Ye.displayName="Textarea";export{Ye as Textarea};
//# sourceMappingURL=index.js.map
