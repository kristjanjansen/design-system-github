"use client";import e from"react";var a,t={exports:{}};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/a=t,function(){var e={}.hasOwnProperty;function t(){for(var a=[],n=0;n<arguments.length;n++){var i=arguments[n];if(i){var l=typeof i;if("string"===l||"number"===l)a.push(i);else if(Array.isArray(i)){if(i.length){var _=t.apply(null,i);_&&a.push(_)}}else if("object"===l){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){a.push(i.toString());continue}for(var s in i)e.call(i,s)&&i[s]&&a.push(s)}}}return a.join(" ")}a.exports?(t.default=t,a.exports=t):window.classNames=t}();var n=t.exports,i="base__fB-Cc__0-1-19";const l=({children:a,className:t})=>e.createElement("div",{className:n(i,t)},a),_=e=>({0:"var(--eds-spacing-none)",1:"var(--eds-spacing-small-1)",2:"var(--eds-spacing-small-2)",3:"var(--eds-spacing-small-3)",4:"var(--eds-spacing-small-4)",5:"var(--eds-spacing-small-5)",6:"var(--eds-spacing-medium-1)",7:"var(--eds-spacing-medium-2)",8:"var(--eds-spacing-medium-3)",9:"var(--eds-spacing-medium-4)",10:"var(--eds-spacing-medium-5)",11:"var(--eds-spacing-medium-6)",12:"var(--eds-spacing-medium-7)",13:"var(--eds-spacing-medium-8)",14:"var(--eds-spacing-large-1)",15:"var(--eds-spacing-large-2)",16:"var(--eds-spacing-large-3)",17:"var(--eds-spacing-large-4)",18:"var(--eds-spacing-large-5)"}[e]||"0px"),s=({mt:e,mb:a,my:t})=>({marginTop:void 0!==e?_(e):void 0!==t?_(t):void 0,marginBottom:void 0!==a?_(a):void 0!==t?_(t):void 0});var r={"heading-h1":"heading-h1__00OVp__0-1-19","heading-h2":"heading-h2__uf8XO__0-1-19","heading-h3":"heading-h3__b58IP__0-1-19","heading-h4":"heading-h4__x0dIm__0-1-19","heading-h5":"heading-h5__dHW8C__0-1-19","heading-h6":"heading-h6__FSif0__0-1-19","heading-display":"heading-display__1B20E__0-1-19","heading-leadtext":"heading-leadtext__fbf5X__0-1-19","heading-subheadline":"heading-subheadline__xgXDJ__0-1-19","text-p-small":"text-p-small__U5YeB__0-1-19","text-p-default":"text-p-default__T3Gv7__0-1-19","text-p-large":"text-p-large__k4P5K__0-1-19","text-line-tiny":"text-line-tiny__IdKxY__0-1-19","text-line-small":"text-line-small__VDnxz__0-1-19","text-line-default":"text-line-default__HHLev__0-1-19","text-line-large":"text-line-large__zY6Xt__0-1-19","text-list-default":"text-list-default__9dn8h__0-1-19","label-tiny":"label-tiny__fwERw__0-1-19","label-small":"label-small__7hSFb__0-1-19","label-default":"label-default__TzEjW__0-1-19","label-large":"label-large__Xe0s7__0-1-19","text-italic":"text-italic__9j6-k__0-1-19","text-underline":"text-underline__-idVq__0-1-19","text-uppercase":"text-uppercase__zT285__0-1-19","text-400":"text-400__veahz__0-1-19","text-600":"text-600__SOu9h__0-1-19"};const d=({id:a,variant:t,as:n,italic:i=!1,underline:l=!1,weight:_="600",uppercase:d=!1,children:c,className:m,mt:p,mb:g,my:u,...h})=>{const o=n||function(e){switch(e){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":case"p":case"ol":case"ul":return e;case"line":return"p";case"list":return"ol";default:return"div"}}(t),v=`\n        ${r[`heading-${t}`]}\n        ${m}\n        ${i?r["text-italic"]:""}\n        ${l?r["text-underline"]:""}\n        ${_?r[`text-${_}`]:""}\n        ${d?r["text-uppercase"]:""}\n    `,x=s({mt:p,mb:g,my:u});return e.createElement(o,{id:a,className:v,style:{...x},...h},c)},c=({variant:a="p",size:t="default",italic:n=!1,underline:i=!1,weight:l="400",uppercase:_=!1,children:d,className:c,mt:m,mb:p,my:g,...u})=>{const h="p"===a?"p":"list"===a?"ul":"div",o=`\n        ${r[`text-${a}-${t}`]}\n        ${c}\n        ${n?r["text-italic"]:""}\n        ${i?r["text-underline"]:""}\n        ${l?r[`text-${l}`]:""}\n        ${_?r["text-uppercase"]:""}\n    `,v=s({mt:m,mb:p,my:g});return e.createElement(h,{className:o,style:{...v},...u},d)};var m="base__gqqKh__0-1-19",p="inverted__yRn3l__0-1-19",g="icon__G4b1z__0-1-19",u="inner__T4i2k__0-1-19",h="column__1aT0a__0-1-19",o="title__4p5YU__0-1-19",v="description__O68OD__0-1-19",x="content__blfYI__0-1-19";const f=({title:a,description:t,icon:i,inverted:_,children:s,layout:r,...f})=>{const b=e.cloneElement(i,{className:g});return e.createElement("div",{className:n(m,{[p]:_}),...f},e.createElement(l,null,e.createElement("div",{className:n(u,{[h]:"column"===r})},i&&b,e.createElement("div",{className:x},e.createElement(d,{variant:"h5",className:o},a),t&&e.createElement(c,{className:v},t)),s)))};export{f as Banner};
//# sourceMappingURL=index.js.map
