"use client";import e,{useContext as t,useState as n,useRef as r,useEffect as o,useCallback as i,useMemo as l}from"react";import s from"react-dom";function a(e,t=-1/0,n=1/0){return Math.min(Math.max(e,t),n)}String(Math.round(1e10*Math.random()));const c=e.createContext(!1);Boolean("undefined"!=typeof window&&window.document&&window.document.createElement),new WeakMap;function u(){return!1}function d(){return!0}function f(e){return()=>{}}function p(){return"function"==typeof e.useSyncExternalStore?e.useSyncExternalStore(f,u,d):t(c)}function m(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=m(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function v(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=m(e))&&(r&&(r+=" "),r+=t);return r}e.useId;const h="undefined"!=typeof document?e.useLayoutEffect:()=>{};function g(e){const t=r(null);return h((()=>{t.current=e}),[e]),i(((...e)=>{const n=t.current;return null==n?void 0:n(...e)}),[])}let E=new Map;function w(e,t){if(e===t)return e;let n=E.get(e);if(n)return n(t),t;let r=E.get(t);return r?(r(e),e):t}function b(...e){return(...t)=>{for(let n of e)"function"==typeof n&&n(...t)}}const y=e=>{var t;return null!==(t=null==e?void 0:e.ownerDocument)&&void 0!==t?t:document},L=e=>{if(e&&"window"in e&&e.window===e)return e;return y(e).defaultView||window};function T(...e){let t={...e[0]};for(let n=1;n<e.length;n++){let r=e[n];for(let e in r){let n=t[e],o=r[e];"function"==typeof n&&"function"==typeof o&&"o"===e[0]&&"n"===e[1]&&e.charCodeAt(2)>=65&&e.charCodeAt(2)<=90?t[e]=b(n,o):"className"!==e&&"UNSAFE_className"!==e||"string"!=typeof n||"string"!=typeof o?"id"===e&&n&&o?t.id=w(n,o):t[e]=void 0!==o?o:n:t[e]=v(n,o)}}return t}function N(e){if(function(){if(null==R){R=!1;try{document.createElement("div").focus({get preventScroll(){return R=!0,!0}})}catch(e){}}return R}())e.focus({preventScroll:!0});else{let t=function(e){let t=e.parentNode,n=[],r=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==r;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;r instanceof HTMLElement&&n.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft});return n}(e);e.focus(),function(e){for(let{element:t,scrollTop:n,scrollLeft:r}of e)t.scrollTop=n,t.scrollLeft=r}(t)}}let R=null;function x(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.brands.some((t=>e.test(t.brand))))||e.test(window.navigator.userAgent))}function S(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&e.test((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.platform)||window.navigator.platform)}function M(){return S(/^Mac/i)}function P(){return S(/^iPhone/i)||S(/^iPad/i)||M()&&navigator.maxTouchPoints>1}function C(){return x(/AppleWebKit/i)&&!x(/Chrome/i)}let F=new Map,O=new Set;function D(){if("undefined"==typeof window)return;function e(e){return"propertyName"in e}let t=n=>{if(!e(n)||!n.target)return;let r=F.get(n.target);if(r&&(r.delete(n.propertyName),0===r.size&&(n.target.removeEventListener("transitioncancel",t),F.delete(n.target)),0===F.size)){for(let e of O)e();O.clear()}};document.body.addEventListener("transitionrun",(n=>{if(!e(n)||!n.target)return;let r=F.get(n.target);r||(r=new Set,F.set(n.target,r),n.target.addEventListener("transitioncancel",t,{once:!0})),r.add(n.propertyName)})),document.body.addEventListener("transitionend",t)}function H(e){const{ref:t,onResize:n}=e;o((()=>{let e=null==t?void 0:t.current;if(e){if(void 0===window.ResizeObserver)return window.addEventListener("resize",n,!1),()=>{window.removeEventListener("resize",n,!1)};{const t=new window.ResizeObserver((e=>{e.length&&n()}));return t.observe(e),()=>{e&&t.unobserve(e)}}}}),[n,t])}function A(e,t){let n=e;for(I(n,t)&&(n=n.parentElement);n&&!I(n,t);)n=n.parentElement;return n||document.scrollingElement||document.documentElement}function I(e,t){let n=window.getComputedStyle(e),r=/(auto|scroll)/.test(n.overflow+n.overflowX+n.overflowY);return r&&t&&(r=e.scrollHeight!==e.clientHeight||e.scrollWidth!==e.clientWidth),r}function W(e){return!(0!==e.mozInputSource||!e.isTrusted)||(x(/Android/i)&&e.pointerType?"click"===e.type&&1===e.buttons:0===e.detail&&!e.pointerType)}"undefined"!=typeof document&&("loading"!==document.readyState?D():document.addEventListener("DOMContentLoaded",D));const k=e.createContext({register:()=>{}});function z({children:t}){let n=l((()=>({register:()=>{}})),[]);return e.createElement(k.Provider,{value:n},t)}k.displayName="PressResponderContext";class B{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(e,t){this.nativeEvent=t,this.target=t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget,this.bubbles=t.bubbles,this.cancelable=t.cancelable,this.defaultPrevented=t.defaultPrevented,this.eventPhase=t.eventPhase,this.isTrusted=t.isTrusted,this.timeStamp=t.timeStamp,this.type=e}}let K=null,_=new Set,q=new Map,Y=!1,V=!1;function U(e,t){for(let n of _)n(e,t)}function j(e){Y=!0,function(e){return!(e.metaKey||!M()&&e.altKey||e.ctrlKey||"Control"===e.key||"Shift"===e.key||"Meta"===e.key)}(e)&&(K="keyboard",U("keyboard",e))}function J(e){K="pointer","mousedown"!==e.type&&"pointerdown"!==e.type||(Y=!0,U("pointer",e))}function X(e){W(e)&&(Y=!0,K="virtual")}function $(e){e.target!==window&&e.target!==document&&(Y||V||(K="virtual",U("virtual",e)),Y=!1,V=!1)}function G(){Y=!1,V=!0}function Q(e){if("undefined"==typeof window||q.get(L(e)))return;const t=L(e),n=y(e);let r=t.HTMLElement.prototype.focus;t.HTMLElement.prototype.focus=function(){Y=!0,r.apply(this,arguments)},n.addEventListener("keydown",j,!0),n.addEventListener("keyup",j,!0),n.addEventListener("click",X,!0),t.addEventListener("focus",$,!0),t.addEventListener("blur",G,!1),"undefined"!=typeof PointerEvent?(n.addEventListener("pointerdown",J,!0),n.addEventListener("pointermove",J,!0),n.addEventListener("pointerup",J,!0)):(n.addEventListener("mousedown",J,!0),n.addEventListener("mousemove",J,!0),n.addEventListener("mouseup",J,!0)),t.addEventListener("beforeunload",(()=>{Z(e)}),{once:!0}),q.set(t,{focus:r})}const Z=(e,t)=>{const n=L(e),r=y(e);t&&r.removeEventListener("DOMContentLoaded",t),q.has(n)&&(n.HTMLElement.prototype.focus=q.get(n).focus,r.removeEventListener("keydown",j,!0),r.removeEventListener("keyup",j,!0),r.removeEventListener("click",X,!0),n.removeEventListener("focus",$,!0),n.removeEventListener("blur",G,!1),"undefined"!=typeof PointerEvent?(r.removeEventListener("pointerdown",J,!0),r.removeEventListener("pointermove",J,!0),r.removeEventListener("pointerup",J,!0)):(r.removeEventListener("mousedown",J,!0),r.removeEventListener("mousemove",J,!0),r.removeEventListener("mouseup",J,!0)),q.delete(n))};function ee(e){let{isDisabled:t,onBlurWithin:n,onFocusWithin:o,onFocusWithinChange:l}=e,s=r({isFocusWithin:!1}),a=i((e=>{s.current.isFocusWithin&&!e.currentTarget.contains(e.relatedTarget)&&(s.current.isFocusWithin=!1,n&&n(e),l&&l(!1))}),[n,l,s]),c=function(e){let t=r({isFocused:!1,observer:null});h((()=>{const e=t.current;return()=>{e.observer&&(e.observer.disconnect(),e.observer=null)}}),[]);let n=g((t=>{null==e||e(t)}));return i((e=>{if(e.target instanceof HTMLButtonElement||e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLSelectElement){t.current.isFocused=!0;let r=e.target,o=e=>{t.current.isFocused=!1,r.disabled&&n(new B("blur",e)),t.current.observer&&(t.current.observer.disconnect(),t.current.observer=null)};r.addEventListener("focusout",o,{once:!0}),t.current.observer=new MutationObserver((()=>{if(t.current.isFocused&&r.disabled){var e;null===(e=t.current.observer)||void 0===e||e.disconnect();let n=r===document.activeElement?null:document.activeElement;r.dispatchEvent(new FocusEvent("blur",{relatedTarget:n})),r.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:n}))}})),t.current.observer.observe(r,{attributes:!0,attributeFilter:["disabled"]})}}),[n])}(a),u=i((e=>{s.current.isFocusWithin||document.activeElement!==e.target||(o&&o(e),l&&l(!0),s.current.isFocusWithin=!0,c(e))}),[o,l,c]);return t?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:u,onBlur:a}}}function te(e,t){if(e.button>0)return!1;if(e.target){const t=e.target.ownerDocument;if(!t||!t.documentElement.contains(e.target))return!1;if(e.target.closest("[data-react-aria-top-layer]"))return!1}return t.current&&!t.current.contains(e.target)}function ne(e){const t=y(e);if("virtual"===K){let r=t.activeElement;n=()=>{t.activeElement===r&&e.isConnected&&N(e)},requestAnimationFrame((()=>{0===F.size?n():O.add(n)}))}else N(e);var n}function re(e,t){return"#comment"!==e.nodeName&&function(e){const t=L(e);if(!(e instanceof t.HTMLElement||e instanceof t.SVGElement))return!1;let{display:n,visibility:r}=e.style,o="none"!==n&&"hidden"!==r&&"collapse"!==r;if(o){const{getComputedStyle:t}=e.ownerDocument.defaultView;let{display:n,visibility:r}=t(e);o="none"!==n&&"hidden"!==r&&"collapse"!==r}return o}(e)&&function(e,t){return!e.hasAttribute("hidden")&&("DETAILS"!==e.nodeName||!t||"SUMMARY"===t.nodeName||e.hasAttribute("open"))}(e,t)&&(!e.parentElement||re(e.parentElement,e))}"undefined"!=typeof document&&function(e){const t=y(e);let n;"loading"!==t.readyState?Q(e):(n=()=>{Q(e)},t.addEventListener("DOMContentLoaded",n))}();const oe=e.createContext(null);let ie=null;function le(n){let{children:i,contain:s,restoreFocus:a,autoFocus:c}=n,u=r(null),d=r(null),f=r([]),{parentNode:p}=t(oe)||{},m=l((()=>new be({scopeRef:f})),[f]);h((()=>{let e=p||ye.root;if(ye.getTreeNode(e.scopeRef)&&ie&&!ve(ie,e.scopeRef)){let t=ye.getTreeNode(ie);t&&(e=t)}e.addChild(m),ye.addNode(m)}),[m,p]),h((()=>{let e=ye.getTreeNode(f);e&&(e.contain=!!s)}),[s]),h((()=>{var e;let t=null===(e=u.current)||void 0===e?void 0:e.nextSibling,n=[];for(;t&&t!==d.current;)n.push(t),t=t.nextSibling;f.current=n}),[i]),function(e,t,n){h((()=>{if(t||n)return;let r=e.current;const o=y(r?r[0]:void 0);let i=t=>{let n=t.target;pe(n,e.current)?ie=e:fe(n)||(ie=null)};return o.addEventListener("focusin",i,!1),null==r||r.forEach((e=>e.addEventListener("focusin",i,!1))),()=>{o.removeEventListener("focusin",i,!1),null==r||r.forEach((e=>e.removeEventListener("focusin",i,!1)))}}),[e,t,n])}(f,a,s),function(e,t){let n=r(),o=r();h((()=>{let r=e.current;if(!t)return void(o.current&&(cancelAnimationFrame(o.current),o.current=void 0));const i=y(r?r[0]:void 0);let l=t=>{if("Tab"!==t.key||t.altKey||t.ctrlKey||t.metaKey||!de(e))return;let n=i.activeElement,r=e.current;if(!r||!pe(n,r))return;let o=Ee(ue(r),{tabbable:!0},r);if(!n)return;o.currentNode=n;let l=t.shiftKey?o.previousNode():o.nextNode();l||(o.currentNode=t.shiftKey?r[r.length-1].nextElementSibling:r[0].previousElementSibling,l=t.shiftKey?o.previousNode():o.nextNode()),t.preventDefault(),l&&he(l,!0)},s=t=>{ie&&!ve(ie,e)||!pe(t.target,e.current)?de(e)&&!me(t.target,e)?n.current?n.current.focus():ie&&ie.current&&ge(ie.current):de(e)&&(n.current=t.target):(ie=e,n.current=t.target)},a=t=>{o.current&&cancelAnimationFrame(o.current),o.current=requestAnimationFrame((()=>{var r;i.activeElement&&de(e)&&!me(i.activeElement,e)&&(ie=e,i.body.contains(t.target)?(n.current=t.target,null===(r=n.current)||void 0===r||r.focus()):ie.current&&ge(ie.current))}))};return i.addEventListener("keydown",l,!1),i.addEventListener("focusin",s,!1),null==r||r.forEach((e=>e.addEventListener("focusin",s,!1))),null==r||r.forEach((e=>e.addEventListener("focusout",a,!1))),()=>{i.removeEventListener("keydown",l,!1),i.removeEventListener("focusin",s,!1),null==r||r.forEach((e=>e.removeEventListener("focusin",s,!1))),null==r||r.forEach((e=>e.removeEventListener("focusout",a,!1)))}}),[e,t]),h((()=>()=>{o.current&&cancelAnimationFrame(o.current)}),[o])}(f,s),function(e,t,n){const o=r("undefined"!=typeof document?y(e.current?e.current[0]:void 0).activeElement:null);h((()=>{let r=e.current;const o=y(r?r[0]:void 0);if(!t||n)return;let i=()=>{ie&&!ve(ie,e)||!pe(o.activeElement,e.current)||(ie=e)};return o.addEventListener("focusin",i,!1),null==r||r.forEach((e=>e.addEventListener("focusin",i,!1))),()=>{o.removeEventListener("focusin",i,!1),null==r||r.forEach((e=>e.removeEventListener("focusin",i,!1)))}}),[e,n]),h((()=>{const r=y(e.current?e.current[0]:void 0);if(!t)return;let o=t=>{if("Tab"!==t.key||t.altKey||t.ctrlKey||t.metaKey||!de(e))return;let n=r.activeElement;if(!pe(n,e.current))return;let o=ye.getTreeNode(e);if(!o)return;let i=o.nodeToRestore,l=Ee(r.body,{tabbable:!0});l.currentNode=n;let s=t.shiftKey?l.previousNode():l.nextNode();if(i&&r.body.contains(i)&&i!==r.body||(i=void 0,o.nodeToRestore=void 0),(!s||!pe(s,e.current))&&i){l.currentNode=i;do{s=t.shiftKey?l.previousNode():l.nextNode()}while(pe(s,e.current));t.preventDefault(),t.stopPropagation(),s?he(s,!0):fe(i)?he(i,!0):n.blur()}};return n||r.addEventListener("keydown",o,!0),()=>{n||r.removeEventListener("keydown",o,!0)}}),[e,t,n]),h((()=>{const n=y(e.current?e.current[0]:void 0);if(!t)return;let r=ye.getTreeNode(e);var i;return r?(r.nodeToRestore=null!==(i=o.current)&&void 0!==i?i:void 0,()=>{let r=ye.getTreeNode(e);if(!r)return;let o=r.nodeToRestore;if(t&&o&&(pe(n.activeElement,e.current)||n.activeElement===n.body&&function(e){let t=ye.getTreeNode(ie);for(;t&&t.scopeRef!==e;){if(t.nodeToRestore)return!1;t=t.parent}return(null==t?void 0:t.scopeRef)===e}(e))){let t=ye.clone();requestAnimationFrame((()=>{if(n.activeElement===n.body){let n=t.getTreeNode(e);for(;n;){if(n.nodeToRestore&&n.nodeToRestore.isConnected)return void he(n.nodeToRestore);n=n.parent}for(n=t.getTreeNode(e);n;){if(n.scopeRef&&n.scopeRef.current&&ye.getTreeNode(n.scopeRef))return void ge(n.scopeRef.current,!0);n=n.parent}}}))}}):void 0}),[e,t])}(f,a,s),function(t,n){const r=e.useRef(n);o((()=>{if(r.current){ie=t;!pe(y(t.current?t.current[0]:void 0).activeElement,ie.current)&&t.current&&ge(t.current)}r.current=!1}),[t])}(f,c),o((()=>{const e=y(f.current?f.current[0]:void 0).activeElement;let t=null;if(pe(e,f.current)){for(let n of ye.traverse())n.scopeRef&&pe(e,n.scopeRef.current)&&(t=n);t===ye.getTreeNode(f)&&(ie=t.scopeRef)}}),[f]),h((()=>()=>{var e,t,n;let r=null!==(n=null===(t=ye.getTreeNode(f))||void 0===t||null===(e=t.parent)||void 0===e?void 0:e.scopeRef)&&void 0!==n?n:null;f!==ie&&!ve(f,ie)||r&&!ye.getTreeNode(r)||(ie=r),ye.removeTreeNode(f)}),[f]);let v=l((()=>function(e){return{focusNext(t={}){let n=e.current,{from:r,tabbable:o,wrap:i,accept:l}=t,s=r||y(n[0]).activeElement,a=n[0].previousElementSibling,c=Ee(ue(n),{tabbable:o,accept:l},n);c.currentNode=pe(s,n)?s:a;let u=c.nextNode();return!u&&i&&(c.currentNode=a,u=c.nextNode()),u&&he(u,!0),u},focusPrevious(t={}){let n=e.current,{from:r,tabbable:o,wrap:i,accept:l}=t,s=r||y(n[0]).activeElement,a=n[n.length-1].nextElementSibling,c=Ee(ue(n),{tabbable:o,accept:l},n);c.currentNode=pe(s,n)?s:a;let u=c.previousNode();return!u&&i&&(c.currentNode=a,u=c.previousNode()),u&&he(u,!0),u},focusFirst(t={}){let n=e.current,{tabbable:r,accept:o}=t,i=Ee(ue(n),{tabbable:r,accept:o},n);i.currentNode=n[0].previousElementSibling;let l=i.nextNode();return l&&he(l,!0),l},focusLast(t={}){let n=e.current,{tabbable:r,accept:o}=t,i=Ee(ue(n),{tabbable:r,accept:o},n);i.currentNode=n[n.length-1].nextElementSibling;let l=i.previousNode();return l&&he(l,!0),l}}}(f)),[]),g=l((()=>({focusManager:v,parentNode:m})),[m,v]);return e.createElement(oe.Provider,{value:g},e.createElement("span",{"data-focus-scope-start":!0,hidden:!0,ref:u}),i,e.createElement("span",{"data-focus-scope-end":!0,hidden:!0,ref:d}))}const se=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"],ae=se.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])";se.push('[tabindex]:not([tabindex="-1"]):not([disabled])');const ce=se.join(':not([hidden]):not([tabindex="-1"]),');function ue(e){return e[0].parentElement}function de(e){let t=ye.getTreeNode(ie);for(;t&&t.scopeRef!==e;){if(t.contain)return!1;t=t.parent}return!0}function fe(e){return me(e)}function pe(e,t){return!!e&&(!!t&&t.some((t=>t.contains(e))))}function me(e,t=null){if(e instanceof Element&&e.closest("[data-react-aria-top-layer]"))return!0;for(let{scopeRef:n}of ye.traverse(ye.getTreeNode(t)))if(n&&pe(e,n.current))return!0;return!1}function ve(e,t){var n;let r=null===(n=ye.getTreeNode(t))||void 0===n?void 0:n.parent;for(;r;){if(r.scopeRef===e)return!0;r=r.parent}return!1}function he(e,t=!1){if(null==e||t){if(null!=e)try{e.focus()}catch(e){}}else try{ne(e)}catch(e){}}function ge(e,t=!0){let n=e[0].previousElementSibling,r=ue(e),o=Ee(r,{tabbable:t},e);o.currentNode=n;let i=o.nextNode();t&&!i&&(r=ue(e),o=Ee(r,{tabbable:!1},e),o.currentNode=n,i=o.nextNode()),he(i)}function Ee(e,t,n){let r=(null==t?void 0:t.tabbable)?ce:ae,o=y(e).createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode(e){var o;return(null==t||null===(o=t.from)||void 0===o?void 0:o.contains(e))?NodeFilter.FILTER_REJECT:!e.matches(r)||!re(e)||n&&!pe(e,n)||(null==t?void 0:t.accept)&&!t.accept(e)?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT}});return(null==t?void 0:t.from)&&(o.currentNode=t.from),o}class we{get size(){return this.fastMap.size}getTreeNode(e){return this.fastMap.get(e)}addTreeNode(e,t,n){let r=this.fastMap.get(null!=t?t:null);if(!r)return;let o=new be({scopeRef:e});r.addChild(o),o.parent=r,this.fastMap.set(e,o),n&&(o.nodeToRestore=n)}addNode(e){this.fastMap.set(e.scopeRef,e)}removeTreeNode(e){if(null===e)return;let t=this.fastMap.get(e);if(!t)return;let n=t.parent;for(let e of this.traverse())e!==t&&t.nodeToRestore&&e.nodeToRestore&&t.scopeRef&&t.scopeRef.current&&pe(e.nodeToRestore,t.scopeRef.current)&&(e.nodeToRestore=t.nodeToRestore);let r=t.children;n&&(n.removeChild(t),r.size>0&&r.forEach((e=>n&&n.addChild(e)))),this.fastMap.delete(t.scopeRef)}*traverse(e=this.root){if(null!=e.scopeRef&&(yield e),e.children.size>0)for(let t of e.children)yield*this.traverse(t)}clone(){var e;let t=new we;var n;for(let r of this.traverse())t.addTreeNode(r.scopeRef,null!==(n=null===(e=r.parent)||void 0===e?void 0:e.scopeRef)&&void 0!==n?n:null,r.nodeToRestore);return t}constructor(){this.fastMap=new Map,this.root=new be({scopeRef:null}),this.fastMap.set(null,this.root)}}class be{addChild(e){this.children.add(e),e.parent=this}removeChild(e){this.children.delete(e),e.parent=void 0}constructor(e){this.children=new Set,this.contain=!1,this.scopeRef=e.scopeRef}}let ye=new we;const Le=new Set(["Arab","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),Te=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);function Ne(e){if(Intl.Locale){let t=new Intl.Locale(e).maximize(),n="function"==typeof t.getTextInfo?t.getTextInfo():t.textInfo;if(n)return"rtl"===n.direction;if(t.script)return Le.has(t.script)}let t=e.split("-")[0];return Te.has(t)}const Re=Symbol.for("react-aria.i18n.locale");function xe(){let e="undefined"!=typeof window&&window[Re]||"undefined"!=typeof navigator&&(navigator.language||navigator.userLanguage)||"en-US";try{Intl.DateTimeFormat.supportedLocalesOf([e])}catch(t){e="en-US"}return{locale:e,direction:Ne(e)?"rtl":"ltr"}}let Se=xe(),Me=new Set;function Pe(){Se=xe();for(let e of Me)e(Se)}const Ce=e.createContext(null);function Fe(){let e=function(){let e=p(),[t,r]=n(Se);return o((()=>(0===Me.size&&window.addEventListener("languagechange",Pe),Me.add(r),()=>{Me.delete(r),0===Me.size&&window.removeEventListener("languagechange",Pe)})),[]),e?{locale:"en-US",direction:"ltr"}:t}();return t(Ce)||e}const Oe={top:"top",bottom:"top",left:"left",right:"left"},De={top:"bottom",bottom:"top",left:"right",right:"left"},He={top:"left",left:"top"},Ae={top:"height",left:"width"},Ie={width:"totalWidth",height:"totalHeight"},We={};let ke="undefined"!=typeof document&&window.visualViewport;function ze(e){let t=0,n=0,r=0,o=0,i=0,l=0,s={},a=(null==ke?void 0:ke.scale)>1;if("BODY"===e.tagName){let a=document.documentElement;var c,u;r=a.clientWidth,o=a.clientHeight,t=null!==(c=null==ke?void 0:ke.width)&&void 0!==c?c:r,n=null!==(u=null==ke?void 0:ke.height)&&void 0!==u?u:o,s.top=a.scrollTop||e.scrollTop,s.left=a.scrollLeft||e.scrollLeft,ke&&(i=ke.offsetTop,l=ke.offsetLeft)}else({width:t,height:n,top:i,left:l}=Ue(e)),s.top=e.scrollTop,s.left=e.scrollLeft,r=t,o=n;return C()&&("BODY"===e.tagName||"HTML"===e.tagName)&&a&&(s.top=0,s.left=0,i=ke.pageTop,l=ke.pageLeft),{width:t,height:n,totalWidth:r,totalHeight:o,scroll:s,top:i,left:l}}function Be(e,t,n,r,o,i,l){let s=o.scroll[e],a=r[Ae[e]],c=r.scroll[Oe[e]]+i,u=a+r.scroll[Oe[e]]-i,d=t-s+l[e]-r[Oe[e]],f=t-s+n+l[e]-r[Oe[e]];return d<c?c-d:f>u?Math.max(u-f,c-d):0}function Ke(e){if(We[e])return We[e];let[t,n]=e.split(" "),r=Oe[t]||"right",o=He[r];Oe[n]||(n="center");let i=Ae[r],l=Ae[o];return We[e]={placement:t,crossPlacement:n,axis:r,crossAxis:o,size:i,crossSize:l},We[e]}function _e(e,t,n,r,o,i,l,s,c,u){let{placement:d,crossPlacement:f,axis:p,crossAxis:m,size:v,crossSize:h}=r,g={};g[m]=e[m],"center"===f?g[m]+=(e[h]-n[h])/2:f!==m&&(g[m]+=e[h]-n[h]),g[m]+=i;const E=e[m]-n[h]+c+u,w=e[m]+e[h]-c-u;if(g[m]=a(g[m],E,w),d===p){const n=s?l[v]:t[Ie[v]];g[De[p]]=Math.floor(n-e[p]+o)}else g[p]=Math.floor(e[p]+e[v]+o);return g}function qe(e,t,n,r,o,i){let{placement:l,axis:s,size:a}=i;return l===s?Math.max(0,n[s]-e[s]-e.scroll[s]+t[s]-r[s]-r[De[s]]-o):Math.max(0,e[a]+e[s]+e.scroll[s]-t[s]-n[s]-n[a]-r[s]-r[De[s]]-o)}function Ye(e,t,n,r,o,i,l,s,c,u,d,f,p,m,v,h){let g=Ke(e),{size:E,crossAxis:w,crossSize:b,placement:y,crossPlacement:L}=g,T=_e(t,s,n,g,d,f,u,p,v,h),N=d,R=qe(s,u,t,o,i+d,g);if(l&&r[E]>R){let e=Ke(`${De[y]} ${L}`),r=_e(t,s,n,e,d,f,u,p,v,h);qe(s,u,t,o,i+d,e)>R&&(g=e,T=r,N=d)}let x="bottom";"top"===g.axis?"top"===g.placement?x="top":"bottom"===g.placement&&(x="bottom"):"top"===g.crossAxis&&("top"===g.crossPlacement?x="bottom":"bottom"===g.crossPlacement&&(x="top"));let S=Be(w,T[w],n[b],s,c,i,u);T[w]+=S;let M=function(e,t,n,r,o,i,l,s){const a=r?n.height:t[Ie.height];let c=null!=e.top?n.top+e.top:n.top+(a-e.bottom-l),u="top"!==s?Math.max(0,t.height+t.top+t.scroll.top-c-(o.top+o.bottom+i)):Math.max(0,c+l-(t.top+t.scroll.top)-(o.top+o.bottom+i));return Math.min(t.height-2*i,u)}(T,s,u,p,o,i,n.height,x);m&&m<M&&(M=m),n.height=Math.min(n.height,M),T=_e(t,s,n,g,N,f,u,p,v,h),S=Be(w,T[w],n[b],s,c,i,u),T[w]+=S;let P={},C=t[w]+.5*t[b]-n[w];const F=v/2+h,O=n[b]-v/2-h,D=a(C,t[w]-n[w]+v/2,t[w]+t[b]-n[w]-v/2);return P[w]=a(D,F,O),{position:T,maxHeight:M,arrowOffsetLeft:P.left,arrowOffsetTop:P.top,placement:g.placement}}function Ve(e){let{placement:t,targetNode:n,overlayNode:r,scrollNode:o,padding:i,shouldFlip:l,boundaryElement:s,offset:a,crossOffset:c,maxHeight:u,arrowSize:d=0,arrowBoundaryOffset:f=0}=e,p=r instanceof HTMLElement?function(e){let t=e.offsetParent;t&&t===document.body&&"static"===window.getComputedStyle(t).position&&!Je(t)&&(t=document.documentElement);if(null==t)for(t=e.parentElement;t&&!Je(t);)t=t.parentElement;return t||document.documentElement}(r):document.documentElement,m=p===document.documentElement;const v=window.getComputedStyle(p).position;let h=!!v&&"static"!==v,g=m?Ue(n):je(n,p);if(!m){let{marginTop:e,marginLeft:t}=window.getComputedStyle(n);g.top+=parseInt(e,10)||0,g.left+=parseInt(t,10)||0}let E=Ue(r),w=function(e){let t=window.getComputedStyle(e);return{top:parseInt(t.marginTop,10)||0,bottom:parseInt(t.marginBottom,10)||0,left:parseInt(t.marginLeft,10)||0,right:parseInt(t.marginRight,10)||0}}(r);E.width+=w.left+w.right,E.height+=w.top+w.bottom;let b={top:(y=o).scrollTop,left:y.scrollLeft,width:y.scrollWidth,height:y.scrollHeight};var y;let L=ze(s),T=ze(p),N="BODY"===s.tagName?Ue(p):je(p,s);return"HTML"===p.tagName&&"BODY"===s.tagName&&(T.scroll.top=0,T.scroll.left=0),Ye(t,g,E,b,w,i,l,L,T,N,a,c,h,u,d,f)}function Ue(e){let{top:t,left:n,width:r,height:o}=e.getBoundingClientRect(),{scrollTop:i,scrollLeft:l,clientTop:s,clientLeft:a}=document.documentElement;return{top:t+i-s,left:n+l-a,width:r,height:o}}function je(e,t){let n,r=window.getComputedStyle(e);if("fixed"===r.position){let{top:t,left:r,width:o,height:i}=e.getBoundingClientRect();n={top:t,left:r,width:o,height:i}}else{n=Ue(e);let r=Ue(t),o=window.getComputedStyle(t);r.top+=(parseInt(o.borderTopWidth,10)||0)-t.scrollTop,r.left+=(parseInt(o.borderLeftWidth,10)||0)-t.scrollLeft,n.top-=r.top,n.left-=r.left}return n.top-=parseInt(r.marginTop,10)||0,n.left-=parseInt(r.marginLeft,10)||0,n}function Je(e){let t=window.getComputedStyle(e);return"none"!==t.transform||/transform|perspective/.test(t.willChange)||"none"!==t.filter||"paint"===t.contain||"backdropFilter"in t&&"none"!==t.backdropFilter||"WebkitBackdropFilter"in t&&"none"!==t.WebkitBackdropFilter}const Xe=new WeakMap;let $e="undefined"!=typeof document&&window.visualViewport;function Ge(e){let{direction:t}=Fe(),{arrowSize:l=0,targetRef:s,overlayRef:a,scrollRef:c=a,placement:u="bottom",containerPadding:d=12,shouldFlip:f=!0,boundaryElement:p=("undefined"!=typeof document?document.body:null),offset:m=0,crossOffset:v=0,shouldUpdatePosition:g=!0,isOpen:E=!0,onClose:w,maxHeight:b,arrowBoundaryOffset:y=0}=e,[L,T]=n({position:{},arrowOffsetLeft:void 0,arrowOffsetTop:void 0,maxHeight:void 0,placement:void 0}),N=[g,u,a.current,s.current,c.current,d,f,p,m,v,E,t,b,y,l],R=r(null==$e?void 0:$e.scale);o((()=>{E&&(R.current=null==$e?void 0:$e.scale)}),[E]);let x=i((()=>{if(!(!1!==g&&E&&a.current&&s.current&&c.current&&p))return;if((null==$e?void 0:$e.scale)!==R.current)return;!b&&a.current&&(a.current.style.maxHeight="none");let e=Ve({placement:Qe(u,t),overlayNode:a.current,targetNode:s.current,scrollNode:c.current,padding:d,shouldFlip:f,boundaryElement:p,offset:m,crossOffset:v,maxHeight:b,arrowSize:l,arrowBoundaryOffset:y});Object.keys(e.position).forEach((t=>a.current.style[t]=e.position[t]+"px")),a.current.style.maxHeight=null!=e.maxHeight?e.maxHeight+"px":void 0,T(e)}),N);var S;h(x,N),h((()=>(window.addEventListener("resize",S,!1),()=>{window.removeEventListener("resize",S,!1)})),[S=x]),H({ref:a,onResize:x});let M=r(!1);h((()=>{let e,t=()=>{M.current=!0,clearTimeout(e),e=setTimeout((()=>{M.current=!1}),500),x()},n=()=>{M.current&&t()};return null==$e||$e.addEventListener("resize",t),null==$e||$e.addEventListener("scroll",n),()=>{null==$e||$e.removeEventListener("resize",t),null==$e||$e.removeEventListener("scroll",n)}}),[x]);let P=i((()=>{M.current||w()}),[w,M]);return function(e){let{triggerRef:t,isOpen:n,onClose:r}=e;o((()=>{if(!n||null===r)return;let e=e=>{let n=e.target;if(!t.current||n instanceof Node&&!n.contains(t.current))return;let o=r||Xe.get(t.current);o&&o()};return window.addEventListener("scroll",e,!0),()=>{window.removeEventListener("scroll",e,!0)}}),[n,r,t])}({triggerRef:s,isOpen:E,onClose:w&&P}),{overlayProps:{style:{position:"absolute",zIndex:1e5,...L.position,maxHeight:L.maxHeight}},placement:L.placement,arrowProps:{"aria-hidden":"true",role:"presentation",style:{left:L.arrowOffsetLeft,top:L.arrowOffsetTop}},updatePosition:x}}function Qe(e,t){return"rtl"===t?e.replace("start","right").replace("end","left"):e.replace("start","left").replace("end","right")}const Ze=[];function et(e,t){let{onClose:n,shouldCloseOnBlur:i,isOpen:l,isDismissable:s=!1,isKeyboardDismissDisabled:a=!1,shouldCloseOnInteractOutside:c}=e;o((()=>(l&&Ze.push(t),()=>{let e=Ze.indexOf(t);e>=0&&Ze.splice(e,1)})),[l,t]);let u=()=>{Ze[Ze.length-1]===t&&n&&n()};!function(e){let{ref:t,onInteractOutside:n,isDisabled:i,onInteractOutsideStart:l}=e,s=r({isPointerDown:!1,ignoreEmulatedMouseEvents:!1}),a=g((e=>{n&&te(e,t)&&(l&&l(e),s.current.isPointerDown=!0)})),c=g((e=>{n&&n(e)}));o((()=>{let e=s.current;if(i)return;const n=t.current,r=y(n);if("undefined"!=typeof PointerEvent){let n=n=>{e.isPointerDown&&te(n,t)&&c(n),e.isPointerDown=!1};return r.addEventListener("pointerdown",a,!0),r.addEventListener("pointerup",n,!0),()=>{r.removeEventListener("pointerdown",a,!0),r.removeEventListener("pointerup",n,!0)}}{let n=n=>{e.ignoreEmulatedMouseEvents?e.ignoreEmulatedMouseEvents=!1:e.isPointerDown&&te(n,t)&&c(n),e.isPointerDown=!1},o=n=>{e.ignoreEmulatedMouseEvents=!0,e.isPointerDown&&te(n,t)&&c(n),e.isPointerDown=!1};return r.addEventListener("mousedown",a,!0),r.addEventListener("mouseup",n,!0),r.addEventListener("touchstart",a,!0),r.addEventListener("touchend",o,!0),()=>{r.removeEventListener("mousedown",a,!0),r.removeEventListener("mouseup",n,!0),r.removeEventListener("touchstart",a,!0),r.removeEventListener("touchend",o,!0)}}}),[t,i,a,c])}({ref:t,onInteractOutside:s&&l?e=>{c&&!c(e.target)||(Ze[Ze.length-1]===t&&(e.stopPropagation(),e.preventDefault()),u())}:null,onInteractOutsideStart:e=>{c&&!c(e.target)||Ze[Ze.length-1]===t&&(e.stopPropagation(),e.preventDefault())}});let{focusWithinProps:d}=ee({isDisabled:!i,onBlurWithin:e=>{e.relatedTarget&&!me(e.relatedTarget,ie)&&(c&&!c(e.relatedTarget)||n())}});return{overlayProps:{onKeyDown:e=>{"Escape"!==e.key||a||(e.stopPropagation(),e.preventDefault(),u())},...d},underlayProps:{onPointerDown:e=>{e.target===e.currentTarget&&e.preventDefault()}}}}const tt="undefined"!=typeof document&&window.visualViewport,nt=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);let rt,ot=0;function it(e={}){let{isDisabled:t}=e;h((()=>{if(!t)return ot++,1===ot&&(rt=P()?function(){let e,t,n=t=>{e&&e!==document.documentElement&&e!==document.body?e.scrollHeight===e.clientHeight&&e.scrollWidth===e.clientWidth&&t.preventDefault():t.preventDefault()},r=e=>{let n=e.target;ct(n)&&n!==document.activeElement&&(e.preventDefault(),l(),n.style.transform="translateY(-2000px)",n.focus(),requestAnimationFrame((()=>{n.style.transform=""}))),t&&t()},o=e=>{let t=e.target;ct(t)&&(l(),t.style.transform="translateY(-2000px)",requestAnimationFrame((()=>{t.style.transform="",tt&&(tt.height<window.innerHeight?requestAnimationFrame((()=>{at(t)})):tt.addEventListener("resize",(()=>at(t)),{once:!0}))})))},i=null,l=()=>{if(i)return;let e=()=>{window.scrollTo(0,0)},t=window.pageXOffset,n=window.pageYOffset;i=b(st(window,"scroll",e),lt(document.documentElement,"paddingRight",window.innerWidth-document.documentElement.clientWidth+"px"),lt(document.documentElement,"overflow","hidden"),lt(document.body,"marginTop",`-${n}px`),(()=>{window.scrollTo(t,n)})),window.scrollTo(0,0)},s=b(st(document,"touchstart",(n=>{e=A(n.target,!0),e===document.documentElement&&e===document.body||e instanceof HTMLElement&&"auto"===window.getComputedStyle(e).overscrollBehavior&&(t=lt(e,"overscrollBehavior","contain"))}),{passive:!1,capture:!0}),st(document,"touchmove",n,{passive:!1,capture:!0}),st(document,"touchend",r,{passive:!1,capture:!0}),st(document,"focus",o,!0));return()=>{null==t||t(),null==i||i(),s()}}():b(lt(document.documentElement,"paddingRight",window.innerWidth-document.documentElement.clientWidth+"px"),lt(document.documentElement,"overflow","hidden"))),()=>{ot--,0===ot&&rt()}}),[t])}function lt(e,t,n){let r=e.style[t];return e.style[t]=n,()=>{e.style[t]=r}}function st(e,t,n,r){return e.addEventListener(t,n,r),()=>{e.removeEventListener(t,n,r)}}function at(e){let t=document.scrollingElement||document.documentElement;for(;e&&e!==t;){let t=A(e);if(t!==document.documentElement&&t!==document.body&&t!==e){let n=t.getBoundingClientRect().top,r=e.getBoundingClientRect().top;r>n+e.clientHeight&&(t.scrollTop+=r-n)}e=t.parentElement}}function ct(e){return e instanceof HTMLInputElement&&!nt.has(e.type)||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}let ut=new WeakMap,dt=[];function ft(e,t){let{triggerRef:n,popoverRef:r,isNonModal:o,isKeyboardDismissDisabled:i,shouldCloseOnInteractOutside:l,...s}=e,{overlayProps:a,underlayProps:c}=et({isOpen:t.isOpen,onClose:t.close,shouldCloseOnBlur:!0,isDismissable:!o,isKeyboardDismissDisabled:i,shouldCloseOnInteractOutside:l},r),{overlayProps:u,arrowProps:d,placement:f}=Ge({...s,targetRef:n,overlayRef:r,isOpen:t.isOpen,onClose:o?t.close:null});return it({isDisabled:o||!t.isOpen}),h((()=>{if(t.isOpen&&!o&&r.current)return function(e,t=document.body){let n=new Set(e),r=new Set,o=e=>{for(let t of e.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]"))n.add(t);let t=e=>{if(n.has(e)||r.has(e.parentElement)&&"row"!==e.parentElement.getAttribute("role"))return NodeFilter.FILTER_REJECT;for(let t of n)if(e.contains(t))return NodeFilter.FILTER_SKIP;return NodeFilter.FILTER_ACCEPT},o=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:t}),l=t(e);if(l===NodeFilter.FILTER_ACCEPT&&i(e),l!==NodeFilter.FILTER_REJECT){let e=o.nextNode();for(;null!=e;)i(e),e=o.nextNode()}},i=e=>{var t;let n=null!==(t=ut.get(e))&&void 0!==t?t:0;"true"===e.getAttribute("aria-hidden")&&0===n||(0===n&&e.setAttribute("aria-hidden","true"),r.add(e),ut.set(e,n+1))};dt.length&&dt[dt.length-1].disconnect(),o(t);let l=new MutationObserver((e=>{for(let t of e)if("childList"===t.type&&0!==t.addedNodes.length&&![...n,...r].some((e=>e.contains(t.target)))){for(let e of t.removedNodes)e instanceof Element&&(n.delete(e),r.delete(e));for(let e of t.addedNodes)!(e instanceof HTMLElement||e instanceof SVGElement)||"true"!==e.dataset.liveAnnouncer&&"true"!==e.dataset.reactAriaTopLayer?e instanceof Element&&o(e):n.add(e)}}));l.observe(t,{childList:!0,subtree:!0});let s={observe(){l.observe(t,{childList:!0,subtree:!0})},disconnect(){l.disconnect()}};return dt.push(s),()=>{l.disconnect();for(let e of r){let t=ut.get(e);1===t?(e.removeAttribute("aria-hidden"),ut.delete(e)):ut.set(e,t-1)}s===dt[dt.length-1]?(dt.pop(),dt.length&&dt[dt.length-1].observe()):dt.splice(dt.indexOf(s),1)}}([r.current])}),[o,t.isOpen,r]),{popoverProps:T(a,u),arrowProps:d,underlayProps:c,placement:f}}const pt=e.createContext(null);function mt(t){let r=p(),{portalContainer:o=(r?null:document.body),isExiting:i}=t,[a,c]=n(!1),u=l((()=>({contain:a,setContain:c})),[a,c]);if(!o)return null;let d=t.children;return t.disableFocusManagement||(d=e.createElement(le,{restoreFocus:!0,contain:a&&!i},d)),d=e.createElement(pt.Provider,{value:u},e.createElement(z,null,d)),s.createPortal(d,o)}var vt="underlay__OHKXx__0-1-35";const ht=({state:t,children:n,className:o,portalContainer:i,...l})=>{const{popoverRef:s,isNonModal:a}=l,c=r(null),u=s||c,{popoverProps:d,underlayProps:f}=ft({...l,popoverRef:u},t);return e.createElement(mt,{portalContainer:i||void 0},!a&&e.createElement("div",{...f,className:vt}),e.createElement("div",{...d,className:o,ref:u},n))};export{ht as Popover};
//# sourceMappingURL=index.js.map
