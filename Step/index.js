"use client";import e from"react";var t,a={exports:{}};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/t=a,function(){var e={}.hasOwnProperty;function a(){for(var t=[],n=0;n<arguments.length;n++){var i=arguments[n];if(i){var s=typeof i;if("string"===s||"number"===s)t.push(i);else if(Array.isArray(i)){if(i.length){var l=a.apply(null,i);l&&t.push(l)}}else if("object"===s){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){t.push(i.toString());continue}for(var _ in i)e.call(i,_)&&i[_]&&t.push(_)}}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):window.classNames=a}();var n=a.exports;const i=e=>({0:"var(--eds-spacing-none)",1:"var(--eds-spacing-small-1)",2:"var(--eds-spacing-small-2)",3:"var(--eds-spacing-small-3)",4:"var(--eds-spacing-small-4)",5:"var(--eds-spacing-small-5)",6:"var(--eds-spacing-medium-1)",7:"var(--eds-spacing-medium-2)",8:"var(--eds-spacing-medium-3)",9:"var(--eds-spacing-medium-4)",10:"var(--eds-spacing-medium-5)",11:"var(--eds-spacing-medium-6)",12:"var(--eds-spacing-medium-7)",13:"var(--eds-spacing-medium-8)",14:"var(--eds-spacing-large-1)",15:"var(--eds-spacing-large-2)",16:"var(--eds-spacing-large-3)",17:"var(--eds-spacing-large-4)",18:"var(--eds-spacing-large-5)"}[e]||"0px"),s=({mt:e,mb:t,my:a})=>({marginTop:void 0!==e?i(e):void 0!==a?i(a):void 0,marginBottom:void 0!==t?i(t):void 0!==a?i(a):void 0});function l(e){switch(e){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":case"p":case"ol":case"ul":return e;case"line":return"p";case"list":return"ol";default:return"div"}}var _={"heading-h1":"heading-h1__00OVp__0-1-38","heading-h2":"heading-h2__uf8XO__0-1-38","heading-h3":"heading-h3__b58IP__0-1-38","heading-h4":"heading-h4__x0dIm__0-1-38","heading-h5":"heading-h5__dHW8C__0-1-38","heading-h6":"heading-h6__FSif0__0-1-38","heading-display":"heading-display__1B20E__0-1-38","heading-leadtext":"heading-leadtext__fbf5X__0-1-38","heading-subheadline":"heading-subheadline__xgXDJ__0-1-38","text-p-small":"text-p-small__U5YeB__0-1-38","text-p-default":"text-p-default__T3Gv7__0-1-38","text-p-large":"text-p-large__k4P5K__0-1-38","text-line-tiny":"text-line-tiny__IdKxY__0-1-38","text-line-small":"text-line-small__VDnxz__0-1-38","text-line-default":"text-line-default__HHLev__0-1-38","text-line-large":"text-line-large__zY6Xt__0-1-38","text-list-default":"text-list-default__9dn8h__0-1-38","label-tiny":"label-tiny__fwERw__0-1-38","label-small":"label-small__7hSFb__0-1-38","label-default":"label-default__TzEjW__0-1-38","label-large":"label-large__Xe0s7__0-1-38","text-italic":"text-italic__9j6-k__0-1-38","text-underline":"text-underline__-idVq__0-1-38","text-uppercase":"text-uppercase__zT285__0-1-38","text-400":"text-400__veahz__0-1-38","text-600":"text-600__SOu9h__0-1-38"};const r=({id:t,variant:a,as:n,italic:i=!1,underline:r=!1,weight:d="600",uppercase:c=!1,children:m,className:p,dangerouslySetInnerHTML:g,mt:h,mb:u,my:o,...v})=>{const x=n||l(a),f=`\n        ${_[`heading-${a}`]}\n        ${p}\n        ${i?_["text-italic"]:""}\n        ${r?_["text-underline"]:""}\n        ${d?_[`text-${d}`]:""}\n        ${c?_["text-uppercase"]:""}\n    `,y=s({mt:h,mb:u,my:o});return g?e.createElement(x,{id:t,className:f,style:{...y},dangerouslySetInnerHTML:g,...v}):e.createElement(x,{id:t,className:f,style:{...y},...v},m)},d=({variant:t="p",as:a,size:n="default",italic:i=!1,underline:r=!1,weight:d="400",uppercase:c=!1,children:m,className:p,dangerouslySetInnerHTML:g,mt:h,mb:u,my:o,...v})=>{const x=a||l(t),f=`\n        ${_[`text-${t}-${n}`]}\n        ${p}\n        ${i?_["text-italic"]:""}\n        ${r?_["text-underline"]:""}\n        ${d?_[`text-${d}`]:""}\n        ${c?_["text-uppercase"]:""}\n    `,y=s({mt:h,mb:u,my:o});return g?e.createElement(x,{className:f,dangerouslySetInnerHTML:g,style:{...y},...v}):e.createElement(x,{className:f,style:{...y},...v},m)};var c="step__5Dirm__0-1-38",m="step__index-container__XPdE0__0-1-38",p="step__index__smt1H__0-1-38",g="step__title__0h-yH__0-1-38",h="step__description__7nrVj__0-1-38",u="step__content-container__b2l6g__0-1-38",o="step--inverted__F24Xr__0-1-38";const v=({index:t,title:a,description:i,children:s,inverted:l,titleAs:_="h4"})=>{const v=n(c,{[o]:l});return e.createElement("li",{className:v},e.createElement("div",{className:m},e.createElement("div",{className:p},e.createElement(d,{size:"large",weight:"600",variant:"line"},t+1))),e.createElement("div",{className:u},a&&e.createElement(r,{variant:"h4",as:_,className:g},a),i&&e.createElement(d,{weight:"400",variant:"p",className:h},i),s))};export{v as Step};
//# sourceMappingURL=index.js.map
