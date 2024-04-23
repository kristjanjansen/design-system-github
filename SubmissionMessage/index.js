"use client";import e from"react";var a,t={exports:{}};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/a=t,function(){var e={}.hasOwnProperty;function t(){for(var a=[],n=0;n<arguments.length;n++){var i=arguments[n];if(i){var _=typeof i;if("string"===_||"number"===_)a.push(i);else if(Array.isArray(i)){if(i.length){var l=t.apply(null,i);l&&a.push(l)}}else if("object"===_){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){a.push(i.toString());continue}for(var s in i)e.call(i,s)&&i[s]&&a.push(s)}}}return a.join(" ")}a.exports?(t.default=t,a.exports=t):window.classNames=t}();var n=t.exports;const i=e=>({0:"var(--eds-spacing-none)",1:"var(--eds-spacing-small-1)",2:"var(--eds-spacing-small-2)",3:"var(--eds-spacing-small-3)",4:"var(--eds-spacing-small-4)",5:"var(--eds-spacing-small-5)",6:"var(--eds-spacing-medium-1)",7:"var(--eds-spacing-medium-2)",8:"var(--eds-spacing-medium-3)",9:"var(--eds-spacing-medium-4)",10:"var(--eds-spacing-medium-5)",11:"var(--eds-spacing-medium-6)",12:"var(--eds-spacing-medium-7)",13:"var(--eds-spacing-medium-8)",14:"var(--eds-spacing-large-1)",15:"var(--eds-spacing-large-2)",16:"var(--eds-spacing-large-3)",17:"var(--eds-spacing-large-4)",18:"var(--eds-spacing-large-5)"}[e]||"0px"),_=({mt:e,mb:a,my:t})=>({marginTop:void 0!==e?i(e):void 0!==t?i(t):void 0,marginBottom:void 0!==a?i(a):void 0!==t?i(t):void 0});var l={"heading-h1":"heading-h1__00OVp__0-1-13","heading-h2":"heading-h2__uf8XO__0-1-13","heading-h3":"heading-h3__b58IP__0-1-13","heading-h4":"heading-h4__x0dIm__0-1-13","heading-h5":"heading-h5__dHW8C__0-1-13","heading-h6":"heading-h6__FSif0__0-1-13","heading-display":"heading-display__1B20E__0-1-13","heading-leadtext":"heading-leadtext__fbf5X__0-1-13","heading-subheadline":"heading-subheadline__xgXDJ__0-1-13","text-p-small":"text-p-small__U5YeB__0-1-13","text-p-default":"text-p-default__T3Gv7__0-1-13","text-p-large":"text-p-large__k4P5K__0-1-13","text-line-tiny":"text-line-tiny__IdKxY__0-1-13","text-line-small":"text-line-small__VDnxz__0-1-13","text-line-default":"text-line-default__HHLev__0-1-13","text-line-large":"text-line-large__zY6Xt__0-1-13","text-list-default":"text-list-default__9dn8h__0-1-13","label-tiny":"label-tiny__fwERw__0-1-13","label-small":"label-small__7hSFb__0-1-13","label-default":"label-default__TzEjW__0-1-13","label-large":"label-large__Xe0s7__0-1-13","text-italic":"text-italic__9j6-k__0-1-13","text-underline":"text-underline__-idVq__0-1-13","text-uppercase":"text-uppercase__zT285__0-1-13","text-400":"text-400__veahz__0-1-13","text-600":"text-600__SOu9h__0-1-13"};const s=({id:a,variant:t,as:n,italic:i=!1,underline:s=!1,weight:r="600",uppercase:d=!1,children:c,className:m,mt:p,mb:g,my:u,...h})=>{const o=n||function(e){switch(e){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":case"p":case"ol":case"ul":return e;case"line":return"p";case"list":return"ol";default:return"div"}}(t),v=`\n        ${l[`heading-${t}`]}\n        ${m}\n        ${i?l["text-italic"]:""}\n        ${s?l["text-underline"]:""}\n        ${r?l[`text-${r}`]:""}\n        ${d?l["text-uppercase"]:""}\n    `,x=_({mt:p,mb:g,my:u});return e.createElement(o,{id:a,className:v,style:{...x},...h},c)},r=({variant:a="p",size:t="default",italic:n=!1,underline:i=!1,weight:s="400",uppercase:r=!1,children:d,className:c,mt:m,mb:p,my:g,...u})=>{const h="p"===a?"p":"list"===a?"ul":"div",o=`\n        ${l[`text-${a}-${t}`]}\n        ${c}\n        ${n?l["text-italic"]:""}\n        ${i?l["text-underline"]:""}\n        ${s?l[`text-${s}`]:""}\n        ${r?l["text-uppercase"]:""}\n    `,v=_({mt:m,mb:p,my:g});return e.createElement(h,{className:o,style:{...v},...u},d)};var d="base__YKE7D__0-1-13",c="base--alternative__OlqWT__0-1-13",m="icon__HtuvM__0-1-13",p="warning__pJYqY__0-1-13",g="inner__-Mw8Y__0-1-13",u="content__rKKAj__0-1-13",h="title__M7S5F__0-1-13",o="description__ufkOV__0-1-13";const v=({title:a,description:t,icon:i,children:_,background:l="main",warning:v,...x})=>{const f=e.cloneElement(i,{className:n(m,{[p]:v})});return e.createElement("div",{className:n(d,{[c]:"alternative"===l}),...x},i&&f,e.createElement("div",{className:g},e.createElement("div",{className:u},e.createElement(s,{variant:"h4",className:n(h,{[p]:v})},a),t&&e.createElement(r,{className:o},t)),_))};var x="base__dP04n__0-1-13";const f=({children:a})=>e.createElement("div",{className:x},a);export{v as SubmissionMessage,f as SubmissionMessageActions};
//# sourceMappingURL=index.js.map
