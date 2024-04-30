"use client";import e from"react";var a,t={exports:{}};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/a=t,function(){var e={}.hasOwnProperty;function t(){for(var a=[],n=0;n<arguments.length;n++){var i=arguments[n];if(i){var l=typeof i;if("string"===l||"number"===l)a.push(i);else if(Array.isArray(i)){if(i.length){var s=t.apply(null,i);s&&a.push(s)}}else if("object"===l){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){a.push(i.toString());continue}for(var _ in i)e.call(i,_)&&i[_]&&a.push(_)}}}return a.join(" ")}a.exports?(t.default=t,a.exports=t):window.classNames=t}();var n=t.exports,i="base__fB-Cc__0-1-30";const l=({children:a,className:t})=>e.createElement("div",{className:n(i,t)},a);var s="base__YX-1h__0-1-30",_="base--alternative__vIB5J__0-1-30",r="inner__5R1VQ__0-1-30";const d=({children:a,className:t,background:i="main",...d})=>e.createElement("section",{className:n(s,t,{[_]:"alternative"===i}),...d},e.createElement(l,null,e.createElement("div",{className:r},a))),c=e=>({0:"var(--eds-spacing-none)",1:"var(--eds-spacing-small-1)",2:"var(--eds-spacing-small-2)",3:"var(--eds-spacing-small-3)",4:"var(--eds-spacing-small-4)",5:"var(--eds-spacing-small-5)",6:"var(--eds-spacing-medium-1)",7:"var(--eds-spacing-medium-2)",8:"var(--eds-spacing-medium-3)",9:"var(--eds-spacing-medium-4)",10:"var(--eds-spacing-medium-5)",11:"var(--eds-spacing-medium-6)",12:"var(--eds-spacing-medium-7)",13:"var(--eds-spacing-medium-8)",14:"var(--eds-spacing-large-1)",15:"var(--eds-spacing-large-2)",16:"var(--eds-spacing-large-3)",17:"var(--eds-spacing-large-4)",18:"var(--eds-spacing-large-5)"}[e]||"0px");var m={"heading-h1":"heading-h1__00OVp__0-1-30","heading-h2":"heading-h2__uf8XO__0-1-30","heading-h3":"heading-h3__b58IP__0-1-30","heading-h4":"heading-h4__x0dIm__0-1-30","heading-h5":"heading-h5__dHW8C__0-1-30","heading-h6":"heading-h6__FSif0__0-1-30","heading-display":"heading-display__1B20E__0-1-30","heading-leadtext":"heading-leadtext__fbf5X__0-1-30","heading-subheadline":"heading-subheadline__xgXDJ__0-1-30","text-p-small":"text-p-small__U5YeB__0-1-30","text-p-default":"text-p-default__T3Gv7__0-1-30","text-p-large":"text-p-large__k4P5K__0-1-30","text-line-tiny":"text-line-tiny__IdKxY__0-1-30","text-line-small":"text-line-small__VDnxz__0-1-30","text-line-default":"text-line-default__HHLev__0-1-30","text-line-large":"text-line-large__zY6Xt__0-1-30","text-list-default":"text-list-default__9dn8h__0-1-30","label-tiny":"label-tiny__fwERw__0-1-30","label-small":"label-small__7hSFb__0-1-30","label-default":"label-default__TzEjW__0-1-30","label-large":"label-large__Xe0s7__0-1-30","text-italic":"text-italic__9j6-k__0-1-30","text-underline":"text-underline__-idVq__0-1-30","text-uppercase":"text-uppercase__zT285__0-1-30","text-400":"text-400__veahz__0-1-30","text-600":"text-600__SOu9h__0-1-30"};const g=({id:a,variant:t,as:n,italic:i=!1,underline:l=!1,weight:s="600",uppercase:_=!1,children:r,className:d,mt:g,mb:h,my:p,...u})=>{const v=n||function(e){switch(e){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":case"p":case"ol":case"ul":return e;case"line":return"p";case"list":return"ol";default:return"div"}}(t),o=`\n        ${m[`heading-${t}`]}\n        ${d}\n        ${i?m["text-italic"]:""}\n        ${l?m["text-underline"]:""}\n        ${s?m[`text-${s}`]:""}\n        ${_?m["text-uppercase"]:""}\n    `,x=(({mt:e,mb:a,my:t})=>({marginTop:void 0!==e?c(e):void 0!==t?c(t):void 0,marginBottom:void 0!==a?c(a):void 0!==t?c(t):void 0}))({mt:g,mb:h,my:p});return e.createElement(v,{id:a,className:o,style:{...x},...u},r)};var h="base__lIZYS__0-1-30";const p=({className:a,title:t,...i})=>e.createElement(g,{variant:"h1",className:n(h,a),...i},t),u=({className:a,children:t,...n})=>e.createElement("div",{className:a,...n},t);var v="base__gqffI__0-1-30";const o=({className:a,text:t,...i})=>e.createElement(g,{variant:"leadtext",className:n(v,a),...i},t);export{d as PageTitle,p as PageTitleHeader,u as PageTitleNav,o as PageTitleText};
//# sourceMappingURL=index.js.map
