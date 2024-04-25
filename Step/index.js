"use client";import e from"react";var t,a={exports:{}};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/t=a,function(){var e={}.hasOwnProperty;function a(){for(var t=[],i=0;i<arguments.length;i++){var n=arguments[i];if(n){var _=typeof n;if("string"===_||"number"===_)t.push(n);else if(Array.isArray(n)){if(n.length){var l=a.apply(null,n);l&&t.push(l)}}else if("object"===_){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){t.push(n.toString());continue}for(var s in n)e.call(n,s)&&n[s]&&t.push(s)}}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):window.classNames=a}();var i=a.exports;const n=e=>({0:"var(--eds-spacing-none)",1:"var(--eds-spacing-small-1)",2:"var(--eds-spacing-small-2)",3:"var(--eds-spacing-small-3)",4:"var(--eds-spacing-small-4)",5:"var(--eds-spacing-small-5)",6:"var(--eds-spacing-medium-1)",7:"var(--eds-spacing-medium-2)",8:"var(--eds-spacing-medium-3)",9:"var(--eds-spacing-medium-4)",10:"var(--eds-spacing-medium-5)",11:"var(--eds-spacing-medium-6)",12:"var(--eds-spacing-medium-7)",13:"var(--eds-spacing-medium-8)",14:"var(--eds-spacing-large-1)",15:"var(--eds-spacing-large-2)",16:"var(--eds-spacing-large-3)",17:"var(--eds-spacing-large-4)",18:"var(--eds-spacing-large-5)"}[e]||"0px"),_=({mt:e,mb:t,my:a})=>({marginTop:void 0!==e?n(e):void 0!==a?n(a):void 0,marginBottom:void 0!==t?n(t):void 0!==a?n(a):void 0});var l={"heading-h1":"heading-h1__00OVp__0-1-23","heading-h2":"heading-h2__uf8XO__0-1-23","heading-h3":"heading-h3__b58IP__0-1-23","heading-h4":"heading-h4__x0dIm__0-1-23","heading-h5":"heading-h5__dHW8C__0-1-23","heading-h6":"heading-h6__FSif0__0-1-23","heading-display":"heading-display__1B20E__0-1-23","heading-leadtext":"heading-leadtext__fbf5X__0-1-23","heading-subheadline":"heading-subheadline__xgXDJ__0-1-23","text-p-small":"text-p-small__U5YeB__0-1-23","text-p-default":"text-p-default__T3Gv7__0-1-23","text-p-large":"text-p-large__k4P5K__0-1-23","text-line-tiny":"text-line-tiny__IdKxY__0-1-23","text-line-small":"text-line-small__VDnxz__0-1-23","text-line-default":"text-line-default__HHLev__0-1-23","text-line-large":"text-line-large__zY6Xt__0-1-23","text-list-default":"text-list-default__9dn8h__0-1-23","label-tiny":"label-tiny__fwERw__0-1-23","label-small":"label-small__7hSFb__0-1-23","label-default":"label-default__TzEjW__0-1-23","label-large":"label-large__Xe0s7__0-1-23","text-italic":"text-italic__9j6-k__0-1-23","text-underline":"text-underline__-idVq__0-1-23","text-uppercase":"text-uppercase__zT285__0-1-23","text-400":"text-400__veahz__0-1-23","text-600":"text-600__SOu9h__0-1-23"};const s=({id:t,variant:a,as:i,italic:n=!1,underline:s=!1,weight:r="600",uppercase:d=!1,children:c,className:p,mt:m,mb:g,my:h,...u})=>{const v=i||function(e){switch(e){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":case"p":case"ol":case"ul":return e;case"line":return"p";case"list":return"ol";default:return"div"}}(a),x=`\n        ${l[`heading-${a}`]}\n        ${p}\n        ${n?l["text-italic"]:""}\n        ${s?l["text-underline"]:""}\n        ${r?l[`text-${r}`]:""}\n        ${d?l["text-uppercase"]:""}\n    `,o=_({mt:m,mb:g,my:h});return e.createElement(v,{id:t,className:x,style:{...o},...u},c)},r=({variant:t="p",size:a="default",italic:i=!1,underline:n=!1,weight:s="400",uppercase:r=!1,children:d,className:c,mt:p,mb:m,my:g,...h})=>{const u="p"===t?"p":"list"===t?"ul":"div",v=`\n        ${l[`text-${t}-${a}`]}\n        ${c}\n        ${i?l["text-italic"]:""}\n        ${n?l["text-underline"]:""}\n        ${s?l[`text-${s}`]:""}\n        ${r?l["text-uppercase"]:""}\n    `,x=_({mt:p,mb:m,my:g});return e.createElement(u,{className:v,style:{...x},...h},d)};var d="step__5Dirm__0-1-23",c="step__index-container__XPdE0__0-1-23",p="step__index__smt1H__0-1-23",m="step__title__0h-yH__0-1-23",g="step__description__7nrVj__0-1-23",h="step__content-container__b2l6g__0-1-23",u="step--inverted__F24Xr__0-1-23";const v=({index:t,title:a,description:n,children:_,inverted:l,titleAs:v="h4"})=>{const x=i(d,{[u]:l});return e.createElement("li",{className:x},e.createElement("div",{className:c},e.createElement("div",{className:p},e.createElement(r,{size:"large",weight:"600",variant:"line"},t+1))),e.createElement("div",{className:h},e.createElement(s,{variant:"h4",as:v,className:m},a),n&&e.createElement(r,{weight:"400",variant:"p",className:g},n),_))};export{v as Step};
//# sourceMappingURL=index.js.map
