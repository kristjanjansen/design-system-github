"use client";import e,{useContext as t,useState as r,useRef as n,useMemo as i,useCallback as o,createContext as a,useEffect as s,forwardRef as u,Children as l,cloneElement as c}from"react";var d;d={breadcrumbs:"عناصر الواجهة"};var f;f={breadcrumbs:"Трохи хляб"};var p;p={breadcrumbs:"Popis cesty"};var g;g={breadcrumbs:"Brødkrummer"};var v;v={breadcrumbs:"Breadcrumbs"};var b;b={breadcrumbs:"Πλοηγήσεις breadcrumb"};var m;m={breadcrumbs:"Breadcrumbs"};var y;y={breadcrumbs:"Migas de pan"};var h;h={breadcrumbs:"Lingiread"};var T;T={breadcrumbs:"Navigointilinkit"};var E;E={breadcrumbs:"Chemin de navigation"};var w;w={breadcrumbs:"שבילי ניווט"};var P;P={breadcrumbs:"Navigacijski putovi"};var L;L={breadcrumbs:"Morzsamenü"};var S;S={breadcrumbs:"Breadcrumb"};var k;k={breadcrumbs:"パンくずリスト"};var M;M={breadcrumbs:"탐색 표시"};var K;K={breadcrumbs:"Naršymo kelias"};var F;F={breadcrumbs:"Atpakaļceļi"};var C;C={breadcrumbs:"Navigasjonsstier"};var _;_={breadcrumbs:"Broodkruimels"};var A;A={breadcrumbs:"Struktura nawigacyjna"};var D;D={breadcrumbs:"Caminho detalhado"};var I;I={breadcrumbs:"Categorias"};var O;O={breadcrumbs:"Miez de pâine"};var N;N={breadcrumbs:"Навигация"};var x;x={breadcrumbs:"Navigačné prvky Breadcrumbs"};var R;R={breadcrumbs:"Drobtine"};var H;H={breadcrumbs:"Putanje navigacije"};var z;z={breadcrumbs:"Sökvägar"};var W;W={breadcrumbs:"İçerik haritaları"};var U;U={breadcrumbs:"Навігаційна стежка"};var B;B={breadcrumbs:"导航栏"};var j;j={breadcrumbs:"導覽列"};String(Math.round(1e10*Math.random()));const G=e.createContext(!1);Boolean("undefined"!=typeof window&&window.document&&window.document.createElement),new WeakMap;function V(){return!1}function X(){return!0}function Y(e){return()=>{}}function $(){return"function"==typeof e.useSyncExternalStore?e.useSyncExternalStore(Y,V,X):t(G)}function q(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(r=q(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function J(){for(var e,t,r=0,n="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=q(e))&&(n&&(n+=" "),n+=t);return n}e.useId;const Z="undefined"!=typeof document?e.useLayoutEffect:()=>{};function Q(e){const t=n(null);return Z((()=>{t.current=e}),[e]),o(((...e)=>{const r=t.current;return null==r?void 0:r(...e)}),[])}let ee=new Map;function te(e,t){if(e===t)return e;let r=ee.get(e);if(r)return r(t),t;let n=ee.get(t);return n?(n(e),e):t}function re(...e){return(...t)=>{for(let r of e)"function"==typeof r&&r(...t)}}const ne=e=>{var t;return null!==(t=null==e?void 0:e.ownerDocument)&&void 0!==t?t:document},ie=e=>{if(e&&"window"in e&&e.window===e)return e;return ne(e).defaultView||window};function oe(...e){let t={...e[0]};for(let r=1;r<e.length;r++){let n=e[r];for(let e in n){let r=t[e],i=n[e];"function"==typeof r&&"function"==typeof i&&"o"===e[0]&&"n"===e[1]&&e.charCodeAt(2)>=65&&e.charCodeAt(2)<=90?t[e]=re(r,i):"className"!==e&&"UNSAFE_className"!==e||"string"!=typeof r||"string"!=typeof i?"id"===e&&r&&i?t.id=te(r,i):t[e]=void 0!==i?i:r:t[e]=J(r,i)}}return t}const ae=new Set(["id"]),se=new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]),ue=new Set(["href","target","rel","download","ping","referrerPolicy"]),le=/^(data-.*)$/;function ce(e,t={}){let{labelable:r,isLink:n,propNames:i}=t,o={};for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&(ae.has(t)||r&&se.has(t)||n&&ue.has(t)||(null==i?void 0:i.has(t))||le.test(t))&&(o[t]=e[t]);return o}function de(e){if(function(){if(null==fe){fe=!1;try{document.createElement("div").focus({get preventScroll(){return fe=!0,!0}})}catch(e){}}return fe}())e.focus({preventScroll:!0});else{let t=function(e){let t=e.parentNode,r=[],n=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==n;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&r.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;n instanceof HTMLElement&&r.push({element:n,scrollTop:n.scrollTop,scrollLeft:n.scrollLeft});return r}(e);e.focus(),function(e){for(let{element:t,scrollTop:r,scrollLeft:n}of e)t.scrollTop=r,t.scrollLeft=n}(t)}}let fe=null;function pe(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.brands.some((t=>e.test(t.brand))))||e.test(window.navigator.userAgent))}function ge(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&e.test((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.platform)||window.navigator.platform)}function ve(){return ge(/^Mac/i)}function be(){return ge(/^iPad/i)||ve()&&navigator.maxTouchPoints>1}function me(){return ge(/^iPhone/i)||be()}function ye(){return pe(/AppleWebKit/i)&&!pe(/Chrome/i)}function he(){return pe(/Android/i)}const Te=a({isNative:!0,open:function(e,t){!function(e,t){if(e instanceof HTMLAnchorElement)t(e);else if(e.hasAttribute("data-href")){let r=document.createElement("a");r.href=e.getAttribute("data-href"),e.hasAttribute("data-target")&&(r.target=e.getAttribute("data-target")),e.hasAttribute("data-rel")&&(r.rel=e.getAttribute("data-rel")),e.hasAttribute("data-download")&&(r.download=e.getAttribute("data-download")),e.hasAttribute("data-ping")&&(r.ping=e.getAttribute("data-ping")),e.hasAttribute("data-referrer-policy")&&(r.referrerPolicy=e.getAttribute("data-referrer-policy")),e.appendChild(r),t(r),e.removeChild(r)}}(e,(e=>Ee(e,t)))}});function Ee(e,t,r=!0){var n,i;let{metaKey:o,ctrlKey:a,altKey:s,shiftKey:u}=t;pe(/Firefox/i)&&(null===(i=window.event)||void 0===i||null===(n=i.type)||void 0===n?void 0:n.startsWith("key"))&&"_blank"===e.target&&(ve()?o=!0:a=!0);let l=ye()&&ve()&&!be()?new KeyboardEvent("keydown",{keyIdentifier:"Enter",metaKey:o,ctrlKey:a,altKey:s,shiftKey:u}):new MouseEvent("click",{metaKey:o,ctrlKey:a,altKey:s,shiftKey:u,bubbles:!0,cancelable:!0});Ee.isOpening=r,de(e),e.dispatchEvent(l),Ee.isOpening=!1}Ee.isOpening=!1;let we=new Map,Pe=new Set;function Le(){if("undefined"==typeof window)return;function e(e){return"propertyName"in e}let t=r=>{if(!e(r)||!r.target)return;let n=we.get(r.target);if(n&&(n.delete(r.propertyName),0===n.size&&(r.target.removeEventListener("transitioncancel",t),we.delete(r.target)),0===we.size)){for(let e of Pe)e();Pe.clear()}};document.body.addEventListener("transitionrun",(r=>{if(!e(r)||!r.target)return;let n=we.get(r.target);n||(n=new Set,we.set(r.target,n),r.target.addEventListener("transitioncancel",t,{once:!0})),n.add(r.propertyName)})),document.body.addEventListener("transitionend",t)}function Se(e){requestAnimationFrame((()=>{0===we.size?e():Pe.add(e)}))}function ke(e,t){Z((()=>{if(e&&e.ref&&t)return e.ref.current=t.current,()=>{e.ref&&(e.ref.current=null)}}))}function Me(e){return!(0!==e.mozInputSource||!e.isTrusted)||(he()&&e.pointerType?"click"===e.type&&1===e.buttons:0===e.detail&&!e.pointerType)}function Ke(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}function Fe(e,t,r){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,r)}function Ce(e,t,r){return function(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=r}}(e,Ke(e,t,"set"),r),r}"undefined"!=typeof document&&("loading"!==document.readyState?Le():document.addEventListener("DOMContentLoaded",Le));let _e="default",Ae="",De=new WeakMap;function Ie(e){if(me()){if("default"===_e){const t=ne(e);Ae=t.documentElement.style.webkitUserSelect,t.documentElement.style.webkitUserSelect="none"}_e="disabled"}else(e instanceof HTMLElement||e instanceof SVGElement)&&(De.set(e,e.style.userSelect),e.style.userSelect="none")}function Oe(e){if(me()){if("disabled"!==_e)return;_e="restoring",setTimeout((()=>{Se((()=>{if("restoring"===_e){const t=ne(e);"none"===t.documentElement.style.webkitUserSelect&&(t.documentElement.style.webkitUserSelect=Ae||""),Ae="",_e="default"}}))}),300)}else if((e instanceof HTMLElement||e instanceof SVGElement)&&e&&De.has(e)){let t=De.get(e);"none"===e.style.userSelect&&(e.style.userSelect=t),""===e.getAttribute("style")&&e.removeAttribute("style"),De.delete(e)}}const Ne=e.createContext({register:()=>{}});Ne.displayName="PressResponderContext";var xe=new WeakMap;class Re{continuePropagation(){Ce(this,xe,!1)}get shouldStopPropagation(){return function(e,t){return t.get?t.get.call(e):t.value}(e=this,Ke(e,xe,"get"));var e}constructor(e,t,r){Fe(this,xe,{writable:!0,value:void 0}),Ce(this,xe,!0),this.type=e,this.pointerType=t,this.target=r.currentTarget,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.ctrlKey=r.ctrlKey,this.altKey=r.altKey}}const He=Symbol("linkClicked");function ze(e){let{onPress:a,onPressChange:u,onPressStart:l,onPressEnd:c,onPressUp:d,isDisabled:f,isPressed:p,preventFocusOnPress:g,shouldCancelOnPointerExit:v,allowTextSelectionOnPress:b,ref:m,...y}=function(e){let r=t(Ne);if(r){let{register:t,...n}=r;e=oe(n,e),t()}return ke(r,e.ref),e}(e),[h,T]=r(!1),E=n({isPressed:!1,ignoreEmulatedMouseEvents:!1,ignoreClickAfterPress:!1,didFirePressStart:!1,isTriggeringEvent:!1,activePointerId:null,target:null,isOverTarget:!1,pointerType:null}),{addGlobalListener:w,removeAllGlobalListeners:P}=function(){let e=n(new Map),t=o(((t,r,n,i)=>{let o=(null==i?void 0:i.once)?(...t)=>{e.current.delete(n),n(...t)}:n;e.current.set(n,{type:r,eventTarget:t,fn:o,options:i}),t.addEventListener(r,n,i)}),[]),r=o(((t,r,n,i)=>{var o;let a=(null===(o=e.current.get(n))||void 0===o?void 0:o.fn)||n;t.removeEventListener(r,a,i),e.current.delete(n)}),[]),i=o((()=>{e.current.forEach(((e,t)=>{r(e.eventTarget,e.type,t,e.options)}))}),[r]);return s((()=>i),[i]),{addGlobalListener:t,removeGlobalListener:r,removeAllGlobalListeners:i}}(),L=Q(((e,t)=>{let r=E.current;if(f||r.didFirePressStart)return!1;let n=!0;if(r.isTriggeringEvent=!0,l){let r=new Re("pressstart",t,e);l(r),n=r.shouldStopPropagation}return u&&u(!0),r.isTriggeringEvent=!1,r.didFirePressStart=!0,T(!0),n})),S=Q(((e,t,r=!0)=>{let n=E.current;if(!n.didFirePressStart)return!1;n.ignoreClickAfterPress=!0,n.didFirePressStart=!1,n.isTriggeringEvent=!0;let i=!0;if(c){let r=new Re("pressend",t,e);c(r),i=r.shouldStopPropagation}if(u&&u(!1),T(!1),a&&r&&!f){let r=new Re("press",t,e);a(r),i&&(i=r.shouldStopPropagation)}return n.isTriggeringEvent=!1,i})),k=Q(((e,t)=>{let r=E.current;if(f)return!1;if(d){r.isTriggeringEvent=!0;let n=new Re("pressup",t,e);return d(n),r.isTriggeringEvent=!1,n.shouldStopPropagation}return!0})),M=Q((e=>{let t=E.current;t.isPressed&&t.target&&(t.isOverTarget&&null!=t.pointerType&&S(je(t.target,e),t.pointerType,!1),t.isPressed=!1,t.isOverTarget=!1,t.activePointerId=null,t.pointerType=null,P(),b||Oe(t.target))})),K=Q((e=>{v&&M(e)})),F=i((()=>{let e=E.current,t={onKeyDown(t){if(Ue(t.nativeEvent,t.currentTarget)&&t.currentTarget.contains(t.target)){var n;Xe(t.target,t.key)&&t.preventDefault();let i=!0;if(!e.isPressed&&!t.repeat){e.target=t.currentTarget,e.isPressed=!0,i=L(t,"keyboard");let n=t.currentTarget,o=t=>{Ue(t,n)&&!t.repeat&&n.contains(t.target)&&e.target&&k(je(e.target,t),"keyboard")};w(ne(t.currentTarget),"keyup",re(o,r),!0)}i&&t.stopPropagation(),t.metaKey&&ve()&&(null===(n=e.metaKeyEvents)||void 0===n||n.set(t.key,t.nativeEvent))}else"Meta"===t.key&&(e.metaKeyEvents=new Map)},onClick(t){if((!t||t.currentTarget.contains(t.target))&&t&&0===t.button&&!e.isTriggeringEvent&&!Ee.isOpening){let r=!0;if(f&&t.preventDefault(),!e.ignoreClickAfterPress&&!e.ignoreEmulatedMouseEvents&&!e.isPressed&&("virtual"===e.pointerType||Me(t.nativeEvent))){f||g||de(t.currentTarget);let e=L(t,"virtual"),n=k(t,"virtual"),i=S(t,"virtual");r=e&&n&&i}e.ignoreEmulatedMouseEvents=!1,e.ignoreClickAfterPress=!1,r&&t.stopPropagation()}}},r=t=>{var r;if(e.isPressed&&e.target&&Ue(t,e.target)){var n;Xe(t.target,t.key)&&t.preventDefault();let r=t.target;S(je(e.target,t),"keyboard",e.target.contains(r)),P(),"Enter"!==t.key&&We(e.target)&&e.target.contains(r)&&!t[He]&&(t[He]=!0,Ee(e.target,t,!1)),e.isPressed=!1,null===(n=e.metaKeyEvents)||void 0===n||n.delete(t.key)}else if("Meta"===t.key&&(null===(r=e.metaKeyEvents)||void 0===r?void 0:r.size)){var i;let t=e.metaKeyEvents;e.metaKeyEvents=void 0;for(let r of t.values())null===(i=e.target)||void 0===i||i.dispatchEvent(new KeyboardEvent("keyup",r))}};if("undefined"!=typeof PointerEvent){t.onPointerDown=t=>{if(0!==t.button||!t.currentTarget.contains(t.target))return;if(o=t.nativeEvent,!he()&&0===o.width&&0===o.height||1===o.width&&1===o.height&&0===o.pressure&&0===o.detail&&"mouse"===o.pointerType)return void(e.pointerType="virtual");var o;Ve(t.currentTarget)&&t.preventDefault(),e.pointerType=t.pointerType;let a=!0;e.isPressed||(e.isPressed=!0,e.isOverTarget=!0,e.activePointerId=t.pointerId,e.target=t.currentTarget,f||g||de(t.currentTarget),b||Ie(e.target),a=L(t,e.pointerType),w(ne(t.currentTarget),"pointermove",r,!1),w(ne(t.currentTarget),"pointerup",n,!1),w(ne(t.currentTarget),"pointercancel",i,!1)),a&&t.stopPropagation()},t.onMouseDown=e=>{e.currentTarget.contains(e.target)&&0===e.button&&(Ve(e.currentTarget)&&e.preventDefault(),e.stopPropagation())},t.onPointerUp=t=>{t.currentTarget.contains(t.target)&&"virtual"!==e.pointerType&&0===t.button&&Ge(t,t.currentTarget)&&k(t,e.pointerType||t.pointerType)};let r=t=>{t.pointerId===e.activePointerId&&(e.target&&Ge(t,e.target)?e.isOverTarget||null==e.pointerType||(e.isOverTarget=!0,L(je(e.target,t),e.pointerType)):e.target&&e.isOverTarget&&null!=e.pointerType&&(e.isOverTarget=!1,S(je(e.target,t),e.pointerType,!1),K(t)))},n=t=>{t.pointerId===e.activePointerId&&e.isPressed&&0===t.button&&e.target&&(Ge(t,e.target)&&null!=e.pointerType?S(je(e.target,t),e.pointerType):e.isOverTarget&&null!=e.pointerType&&S(je(e.target,t),e.pointerType,!1),e.isPressed=!1,e.isOverTarget=!1,e.activePointerId=null,e.pointerType=null,P(),b||Oe(e.target))},i=e=>{M(e)};t.onDragStart=e=>{e.currentTarget.contains(e.target)&&M(e)}}else{t.onMouseDown=t=>{if(0!==t.button||!t.currentTarget.contains(t.target))return;if(Ve(t.currentTarget)&&t.preventDefault(),e.ignoreEmulatedMouseEvents)return void t.stopPropagation();e.isPressed=!0,e.isOverTarget=!0,e.target=t.currentTarget,e.pointerType=Me(t.nativeEvent)?"virtual":"mouse",f||g||de(t.currentTarget),L(t,e.pointerType)&&t.stopPropagation(),w(ne(t.currentTarget),"mouseup",r,!1)},t.onMouseEnter=t=>{if(!t.currentTarget.contains(t.target))return;let r=!0;e.isPressed&&!e.ignoreEmulatedMouseEvents&&null!=e.pointerType&&(e.isOverTarget=!0,r=L(t,e.pointerType)),r&&t.stopPropagation()},t.onMouseLeave=t=>{if(!t.currentTarget.contains(t.target))return;let r=!0;e.isPressed&&!e.ignoreEmulatedMouseEvents&&null!=e.pointerType&&(e.isOverTarget=!1,r=S(t,e.pointerType,!1),K(t)),r&&t.stopPropagation()},t.onMouseUp=t=>{t.currentTarget.contains(t.target)&&(e.ignoreEmulatedMouseEvents||0!==t.button||k(t,e.pointerType||"mouse"))};let r=t=>{0===t.button&&(e.isPressed=!1,P(),e.ignoreEmulatedMouseEvents?e.ignoreEmulatedMouseEvents=!1:(e.target&&Ge(t,e.target)&&null!=e.pointerType?S(je(e.target,t),e.pointerType):e.target&&e.isOverTarget&&null!=e.pointerType&&S(je(e.target,t),e.pointerType,!1),e.isOverTarget=!1))};t.onTouchStart=t=>{if(!t.currentTarget.contains(t.target))return;let r=function(e){const{targetTouches:t}=e;return t.length>0?t[0]:null}(t.nativeEvent);r&&(e.activePointerId=r.identifier,e.ignoreEmulatedMouseEvents=!0,e.isOverTarget=!0,e.isPressed=!0,e.target=t.currentTarget,e.pointerType="touch",f||g||de(t.currentTarget),b||Ie(e.target),L(t,e.pointerType)&&t.stopPropagation(),w(ie(t.currentTarget),"scroll",n,!0))},t.onTouchMove=t=>{if(!t.currentTarget.contains(t.target))return;if(!e.isPressed)return void t.stopPropagation();let r=Be(t.nativeEvent,e.activePointerId),n=!0;r&&Ge(r,t.currentTarget)?e.isOverTarget||null==e.pointerType||(e.isOverTarget=!0,n=L(t,e.pointerType)):e.isOverTarget&&null!=e.pointerType&&(e.isOverTarget=!1,n=S(t,e.pointerType,!1),K(t)),n&&t.stopPropagation()},t.onTouchEnd=t=>{if(!t.currentTarget.contains(t.target))return;if(!e.isPressed)return void t.stopPropagation();let r=Be(t.nativeEvent,e.activePointerId),n=!0;r&&Ge(r,t.currentTarget)&&null!=e.pointerType?(k(t,e.pointerType),n=S(t,e.pointerType)):e.isOverTarget&&null!=e.pointerType&&(n=S(t,e.pointerType,!1)),n&&t.stopPropagation(),e.isPressed=!1,e.activePointerId=null,e.isOverTarget=!1,e.ignoreEmulatedMouseEvents=!0,e.target&&!b&&Oe(e.target),P()},t.onTouchCancel=t=>{t.currentTarget.contains(t.target)&&(t.stopPropagation(),e.isPressed&&M(t))};let n=t=>{e.isPressed&&t.target.contains(e.target)&&M({currentTarget:e.target,shiftKey:!1,ctrlKey:!1,metaKey:!1,altKey:!1})};t.onDragStart=e=>{e.currentTarget.contains(e.target)&&M(e)}}return t}),[w,f,g,P,b,M,K,S,L,k]);return s((()=>()=>{var e;b||Oe(null!==(e=E.current.target)&&void 0!==e?e:void 0)}),[b]),{isPressed:p||h,pressProps:oe(y,F)}}function We(e){return"A"===e.tagName&&e.hasAttribute("href")}function Ue(e,t){const{key:r,code:n}=e,i=t,o=i.getAttribute("role");return!("Enter"!==r&&" "!==r&&"Spacebar"!==r&&"Space"!==n||i instanceof ie(i).HTMLInputElement&&!$e(i,r)||i instanceof ie(i).HTMLTextAreaElement||i.isContentEditable||("link"===o||!o&&We(i))&&"Enter"!==r)}function Be(e,t){const r=e.changedTouches;for(let e=0;e<r.length;e++){const n=r[e];if(n.identifier===t)return n}return null}function je(e,t){return{currentTarget:e,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,altKey:t.altKey}}function Ge(e,t){let r=t.getBoundingClientRect(),n=function(e){let t=0,r=0;return void 0!==e.width?t=e.width/2:void 0!==e.radiusX&&(t=e.radiusX),void 0!==e.height?r=e.height/2:void 0!==e.radiusY&&(r=e.radiusY),{top:e.clientY-r,right:e.clientX+t,bottom:e.clientY+r,left:e.clientX-t}}(e);return o=n,!((i=r).left>o.right||o.left>i.right||i.top>o.bottom||o.top>i.bottom);var i,o}function Ve(e){return!(e instanceof HTMLElement&&e.hasAttribute("draggable"))}function Xe(e,t){return e instanceof HTMLInputElement?!$e(e,t):e instanceof HTMLButtonElement?"submit"!==e.type&&"reset"!==e.type:!We(e)}const Ye=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function $e(e,t){return"checkbox"===e.type||"radio"===e.type?" "===t:Ye.has(e.type)}class qe{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(e,t){this.nativeEvent=t,this.target=t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget,this.bubbles=t.bubbles,this.cancelable=t.cancelable,this.defaultPrevented=t.defaultPrevented,this.eventPhase=t.eventPhase,this.isTrusted=t.isTrusted,this.timeStamp=t.timeStamp,this.type=e}}function Je(e){let t=n({isFocused:!1,observer:null});Z((()=>{const e=t.current;return()=>{e.observer&&(e.observer.disconnect(),e.observer=null)}}),[]);let r=Q((t=>{null==e||e(t)}));return o((e=>{if(e.target instanceof HTMLButtonElement||e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLSelectElement){t.current.isFocused=!0;let n=e.target,i=e=>{t.current.isFocused=!1,n.disabled&&r(new qe("blur",e)),t.current.observer&&(t.current.observer.disconnect(),t.current.observer=null)};n.addEventListener("focusout",i,{once:!0}),t.current.observer=new MutationObserver((()=>{if(t.current.isFocused&&n.disabled){var e;null===(e=t.current.observer)||void 0===e||e.disconnect();let r=n===document.activeElement?null:document.activeElement;n.dispatchEvent(new FocusEvent("blur",{relatedTarget:r})),n.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:r}))}})),t.current.observer.observe(n,{attributes:!0,attributeFilter:["disabled"]})}}),[r])}function Ze(e){let{isDisabled:t,onFocus:r,onBlur:n,onFocusChange:i}=e;const a=o((e=>{if(e.target===e.currentTarget)return n&&n(e),i&&i(!1),!0}),[n,i]),s=Je(a),u=o((e=>{e.target===e.currentTarget&&document.activeElement===e.target&&(r&&r(e),i&&i(!0),s(e))}),[i,r,s]);return{focusProps:{onFocus:!t&&(r||i||n)?u:void 0,onBlur:t||!n&&!i?void 0:a}}}let Qe=null,et=new Set,tt=new Map,rt=!1,nt=!1;const it={Tab:!0,Escape:!0};function ot(e,t){for(let r of et)r(e,t)}function at(e){rt=!0,function(e){return!(e.metaKey||!ve()&&e.altKey||e.ctrlKey||"Control"===e.key||"Shift"===e.key||"Meta"===e.key)}(e)&&(Qe="keyboard",ot("keyboard",e))}function st(e){Qe="pointer","mousedown"!==e.type&&"pointerdown"!==e.type||(rt=!0,ot("pointer",e))}function ut(e){Me(e)&&(rt=!0,Qe="virtual")}function lt(e){e.target!==window&&e.target!==document&&(rt||nt||(Qe="virtual",ot("virtual",e)),rt=!1,nt=!1)}function ct(){rt=!1,nt=!0}function dt(e){if("undefined"==typeof window||tt.get(ie(e)))return;const t=ie(e),r=ne(e);let n=t.HTMLElement.prototype.focus;t.HTMLElement.prototype.focus=function(){rt=!0,n.apply(this,arguments)},r.addEventListener("keydown",at,!0),r.addEventListener("keyup",at,!0),r.addEventListener("click",ut,!0),t.addEventListener("focus",lt,!0),t.addEventListener("blur",ct,!1),"undefined"!=typeof PointerEvent?(r.addEventListener("pointerdown",st,!0),r.addEventListener("pointermove",st,!0),r.addEventListener("pointerup",st,!0)):(r.addEventListener("mousedown",st,!0),r.addEventListener("mousemove",st,!0),r.addEventListener("mouseup",st,!0)),t.addEventListener("beforeunload",(()=>{ft(e)}),{once:!0}),tt.set(t,{focus:n})}const ft=(e,t)=>{const r=ie(e),n=ne(e);t&&n.removeEventListener("DOMContentLoaded",t),tt.has(r)&&(r.HTMLElement.prototype.focus=tt.get(r).focus,n.removeEventListener("keydown",at,!0),n.removeEventListener("keyup",at,!0),n.removeEventListener("click",ut,!0),r.removeEventListener("focus",lt,!0),r.removeEventListener("blur",ct,!1),"undefined"!=typeof PointerEvent?(n.removeEventListener("pointerdown",st,!0),n.removeEventListener("pointermove",st,!0),n.removeEventListener("pointerup",st,!0)):(n.removeEventListener("mousedown",st,!0),n.removeEventListener("mousemove",st,!0),n.removeEventListener("mouseup",st,!0)),tt.delete(r))};function pt(){return"pointer"!==Qe}"undefined"!=typeof document&&function(e){const t=ne(e);let r;"loading"!==t.readyState?dt(e):(r=()=>{dt(e)},t.addEventListener("DOMContentLoaded",r))}();const gt=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function vt(e,t,r){dt(),s((()=>{let t=(t,n)=>{(function(e,t,r){var n;const i="undefined"!=typeof window?ie(null==r?void 0:r.target).HTMLInputElement:HTMLInputElement,o="undefined"!=typeof window?ie(null==r?void 0:r.target).HTMLTextAreaElement:HTMLTextAreaElement,a="undefined"!=typeof window?ie(null==r?void 0:r.target).HTMLElement:HTMLElement,s="undefined"!=typeof window?ie(null==r?void 0:r.target).KeyboardEvent:KeyboardEvent;return!((e=e||(null==r?void 0:r.target)instanceof i&&!gt.has(null==r||null===(n=r.target)||void 0===n?void 0:n.type)||(null==r?void 0:r.target)instanceof o||(null==r?void 0:r.target)instanceof a&&(null==r?void 0:r.target.isContentEditable))&&"keyboard"===t&&r instanceof s&&!it[r.key])})(!!(null==r?void 0:r.isTextInput),t,n)&&e(pt())};return et.add(t),()=>{et.delete(t)}}),t)}function bt(e){if(!e)return;let t=!0;return r=>{let n={...r,preventDefault(){r.preventDefault()},isDefaultPrevented:()=>r.isDefaultPrevented(),stopPropagation(){console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")},continuePropagation(){t=!1}};e(n),t&&r.stopPropagation()}}function mt(e){const t=ne(e);if("virtual"===Qe){let r=t.activeElement;Se((()=>{t.activeElement===r&&e.isConnected&&de(e)}))}else de(e)}function yt(e,t){return!!e&&(!!t&&t.some((t=>t.contains(e))))}class ht{get size(){return this.fastMap.size}getTreeNode(e){return this.fastMap.get(e)}addTreeNode(e,t,r){let n=this.fastMap.get(null!=t?t:null);if(!n)return;let i=new Tt({scopeRef:e});n.addChild(i),i.parent=n,this.fastMap.set(e,i),r&&(i.nodeToRestore=r)}addNode(e){this.fastMap.set(e.scopeRef,e)}removeTreeNode(e){if(null===e)return;let t=this.fastMap.get(e);if(!t)return;let r=t.parent;for(let e of this.traverse())e!==t&&t.nodeToRestore&&e.nodeToRestore&&t.scopeRef&&t.scopeRef.current&&yt(e.nodeToRestore,t.scopeRef.current)&&(e.nodeToRestore=t.nodeToRestore);let n=t.children;r&&(r.removeChild(t),n.size>0&&n.forEach((e=>r&&r.addChild(e)))),this.fastMap.delete(t.scopeRef)}*traverse(e=this.root){if(null!=e.scopeRef&&(yield e),e.children.size>0)for(let t of e.children)yield*this.traverse(t)}clone(){var e;let t=new ht;var r;for(let n of this.traverse())t.addTreeNode(n.scopeRef,null!==(r=null===(e=n.parent)||void 0===e?void 0:e.scopeRef)&&void 0!==r?r:null,n.nodeToRestore);return t}constructor(){this.fastMap=new Map,this.root=new Tt({scopeRef:null}),this.fastMap.set(null,this.root)}}class Tt{addChild(e){this.children.add(e),e.parent=this}removeChild(e){this.children.delete(e),e.parent=void 0}constructor(e){this.children=new Set,this.contain=!1,this.scopeRef=e.scopeRef}}function Et(e={}){let{autoFocus:t=!1,isTextInput:i,within:a}=e,s=n({isFocused:!1,isFocusVisible:t||pt()}),[u,l]=r(!1),[c,d]=r((()=>s.current.isFocused&&s.current.isFocusVisible)),f=o((()=>d(s.current.isFocused&&s.current.isFocusVisible)),[]),p=o((e=>{s.current.isFocused=e,l(e),f()}),[f]);vt((e=>{s.current.isFocusVisible=e,f()}),[],{isTextInput:i});let{focusProps:g}=Ze({isDisabled:a,onFocusChange:p}),{focusWithinProps:v}=function(e){let{isDisabled:t,onBlurWithin:r,onFocusWithin:i,onFocusWithinChange:a}=e,s=n({isFocusWithin:!1}),u=o((e=>{s.current.isFocusWithin&&!e.currentTarget.contains(e.relatedTarget)&&(s.current.isFocusWithin=!1,r&&r(e),a&&a(!1))}),[r,a,s]),l=Je(u),c=o((e=>{s.current.isFocusWithin||document.activeElement!==e.target||(i&&i(e),a&&a(!0),s.current.isFocusWithin=!0,l(e))}),[i,a,l]);return t?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:c,onBlur:u}}}({isDisabled:!a,onFocusWithinChange:p});return{isFocused:u,isFocusVisible:c,focusProps:a?v:g}}new ht;let wt=e.createContext(null);function Pt(e,r){let{focusProps:i}=Ze(e),{keyboardProps:o}=function(e){return{keyboardProps:e.isDisabled?{}:{onKeyDown:bt(e.onKeyDown),onKeyUp:bt(e.onKeyUp)}}}(e),a=oe(i,o),u=function(e){let r=t(wt)||{};ke(r,e);let{ref:n,...i}=r;return i}(r),l=e.isDisabled?{}:u,c=n(e.autoFocus);return s((()=>{c.current&&r.current&&mt(r.current),c.current=!1}),[r]),{focusableProps:oe({...a,tabIndex:e.excludeFromTabOrder&&!e.isDisabled?-1:void 0},l)}}function Lt(e,r){let{elementType:n="a",onPress:i,onPressStart:o,onPressEnd:a,onClick:s,isDisabled:u,...l}=e,c={};"a"!==n&&(c={role:"link",tabIndex:u?void 0:0});let{focusableProps:d}=Pt(e,r),{pressProps:f,isPressed:p}=ze({onPress:i,onPressStart:o,onPressEnd:a,isDisabled:u,ref:r}),g=ce(l,{labelable:!0,isLink:"a"===n}),v=oe(d,f),b=t(Te);return{isPressed:p,linkProps:oe(g,{...v,...c,"aria-disabled":u||void 0,"aria-current":e["aria-current"],onClick:e=>{var t;null===(t=f.onClick)||void 0===t||t.call(f,e),s&&(s(e),console.warn("onClick is deprecated, please use onPress")),!b.isNative&&e.currentTarget instanceof HTMLAnchorElement&&e.currentTarget.href&&!e.isDefaultPrevented()&&function(e,t){let r=e.getAttribute("target");return!(r&&"_self"!==r||e.origin!==location.origin||e.hasAttribute("download")||t.metaKey||t.ctrlKey||t.altKey||t.shiftKey)}(e.currentTarget,e)&&(e.preventDefault(),b.open(e.currentTarget,e))}})}}const St=Symbol.for("react-aria.i18n.locale"),kt=Symbol.for("react-aria.i18n.strings");let Mt;class Kt{getStringForLocale(e,t){let r=this.getStringsForLocale(t)[e];if(!r)throw new Error(`Could not find intl message ${e} in ${t} locale`);return r}getStringsForLocale(e){let t=this.strings[e];return t||(t=function(e,t,r="en-US"){if(t[e])return t[e];let n=function(e){return Intl.Locale?new Intl.Locale(e).language:e.split("-")[0]}(e);if(t[n])return t[n];for(let e in t)if(e.startsWith(n+"-"))return t[e];return t[r]}(e,this.strings,this.defaultLocale),this.strings[e]=t),t}static getGlobalDictionaryForPackage(e){if("undefined"==typeof window)return null;let t=window[St];if(void 0===Mt){let e=window[kt];if(!e)return null;Mt={};for(let r in e)Mt[r]=new Kt({[t]:e[r]},t)}let r=null==Mt?void 0:Mt[e];if(!r)throw new Error(`Strings for package "${e}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);return r}constructor(e,t="en-US"){this.strings={...e},this.defaultLocale=t}}const Ft=new Map,Ct=new Map;class _t{format(e,t){let r=this.strings.getStringForLocale(e,this.locale);return"function"==typeof r?r(t,this):r}plural(e,t,r="cardinal"){let n=t["="+e];if(n)return"function"==typeof n?n():n;let i=this.locale+":"+r,o=Ft.get(i);return o||(o=new Intl.PluralRules(this.locale,{type:r}),Ft.set(i,o)),n=t[o.select(e)]||t.other,"function"==typeof n?n():n}number(e){let t=Ct.get(this.locale);return t||(t=new Intl.NumberFormat(this.locale),Ct.set(this.locale,t)),t.format(e)}select(e,t){let r=e[t]||e.other;return"function"==typeof r?r():r}constructor(e,t){this.locale=e,this.strings=t}}const At=new Set(["Arab","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),Dt=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);function It(e){if(Intl.Locale){let t=new Intl.Locale(e).maximize(),r="function"==typeof t.getTextInfo?t.getTextInfo():t.textInfo;if(r)return"rtl"===r.direction;if(t.script)return At.has(t.script)}let t=e.split("-")[0];return Dt.has(t)}const Ot=Symbol.for("react-aria.i18n.locale");function Nt(){let e="undefined"!=typeof window&&window[Ot]||"undefined"!=typeof navigator&&(navigator.language||navigator.userLanguage)||"en-US";try{Intl.DateTimeFormat.supportedLocalesOf([e])}catch(t){e="en-US"}return{locale:e,direction:It(e)?"rtl":"ltr"}}let xt=Nt(),Rt=new Set;function Ht(){xt=Nt();for(let e of Rt)e(xt)}const zt=e.createContext(null);function Wt(){let e=function(){let e=$(),[t,n]=r(xt);return s((()=>(0===Rt.size&&window.addEventListener("languagechange",Ht),Rt.add(n),()=>{Rt.delete(n),0===Rt.size&&window.removeEventListener("languagechange",Ht)})),[]),e?{locale:"en-US",direction:"ltr"}:t}();return t(zt)||e}const Ut=new WeakMap;function Bt(e,t){return t&&Kt.getGlobalDictionaryForPackage(t)||function(e){let t=Ut.get(e);return t||(t=new Kt(e),Ut.set(e,t)),t}(e)}function jt(e){return e&&e.__esModule?e.default:e}var Gt;function Vt(e){let{"aria-label":t,...r}=e,n=function(e,t){let{locale:r}=Wt(),n=Bt(e,t);return i((()=>new _t(r,n)),[r,n])}(jt(Gt),"@react-aria/breadcrumbs");return{navProps:{...ce(r,{labelable:!0}),"aria-label":t||n.format("breadcrumbs")}}}Gt={"ar-AE":d,"bg-BG":f,"cs-CZ":p,"da-DK":g,"de-DE":v,"el-GR":b,"en-US":m,"es-ES":y,"et-EE":h,"fi-FI":T,"fr-FR":E,"he-IL":w,"hr-HR":P,"hu-HU":L,"it-IT":S,"ja-JP":k,"ko-KR":M,"lt-LT":K,"lv-LV":F,"nb-NO":C,"nl-NL":_,"pl-PL":A,"pt-BR":D,"pt-PT":I,"ro-RO":O,"ru-RU":N,"sk-SK":x,"sl-SI":R,"sr-SP":H,"sv-SE":z,"tr-TR":W,"uk-UA":U,"zh-CN":B,"zh-TW":j};var Xt,Yt={exports:{}};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/Xt=Yt,function(){var e={}.hasOwnProperty;function t(){for(var r=[],n=0;n<arguments.length;n++){var i=arguments[n];if(i){var o=typeof i;if("string"===o||"number"===o)r.push(i);else if(Array.isArray(i)){if(i.length){var a=t.apply(null,i);a&&r.push(a)}}else if("object"===o){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){r.push(i.toString());continue}for(var s in i)e.call(i,s)&&i[s]&&r.push(s)}}}return r.join(" ")}Xt.exports?(t.default=t,Xt.exports=t):window.classNames=t}();var $t=Yt.exports,qt={breadcrumbs__list:"breadcrumbs__list__T-VX8__0-1-34","breadcrumb-item":"breadcrumb-item__njF7G__0-1-34","breadcrumb-item--focused":"breadcrumb-item--focused__zk7c8__0-1-34","breadcrumb-item__link":"breadcrumb-item__link__zCey1__0-1-34","breadcrumb-item__separator":"breadcrumb-item__separator__lu-P1__0-1-34","breadcrumb-item--current":"breadcrumb-item--current__JDNlu__0-1-34","breadcrumb-item--disabled":"breadcrumb-item--disabled__4-Lcl__0-1-34"};const Jt=u(((t,r)=>{const o=function(e){const t=n(null);return i((()=>({get current(){return t.current},set current(r){t.current=r,"function"==typeof e?e(r):e&&(e.current=r)}})),[e])}(r),a=n(null),s=o||a,{itemProps:u}=function(e,t){let{isCurrent:r,isDisabled:n,"aria-current":i,elementType:o="a",...a}=e,{linkProps:s}=Lt({isDisabled:n||r,elementType:o,...a},t),u={};return/^h[1-6]$/.test(o)||(u=s),r&&(u["aria-current"]=i||"page",u.tabIndex=e.autoFocus?-1:void 0),{itemProps:{"aria-disabled":n,...u}}}(t,s),{children:l,href:c,isCurrent:d,isDisabled:f,className:p}=t,{isFocusVisible:g,focusProps:v}=Et(),b=$t(qt["breadcrumb-item"],p,{[qt["breadcrumb-item--current"]]:d,[qt["breadcrumb-item--disabled"]]:f,[qt["breadcrumb-item--focused"]]:g});return e.createElement("li",{className:b},e.createElement("a",{...oe(u,v),className:qt["breadcrumb-item__link"],ref:s,href:c},l),!d&&e.createElement("span",{className:qt["breadcrumb-item__separator"],"aria-hidden":"true"},"/"))}));Jt.displayName="BreadcrumbItem";const Zt=t=>{const{navProps:r}=Vt(t),{children:n,className:i}=t,o=l.count(n);return e.createElement("nav",{...r,className:$t(qt.breadcrumbs,i)},e.createElement("ol",{className:qt.breadcrumbs__list},l.map(n,((e,t)=>c(e,{isCurrent:t===o-1})))))};export{Jt as BreadcrumbItem,Zt as Breadcrumbs};
//# sourceMappingURL=index.js.map
