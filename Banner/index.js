"use client";import e from"react";var a,t={exports:{}};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/a=t,function(){var e={}.hasOwnProperty;function t(){for(var a=[],n=0;n<arguments.length;n++){var l=arguments[n];if(l){var i=typeof l;if("string"===i||"number"===i)a.push(l);else if(Array.isArray(l)){if(l.length){var s=t.apply(null,l);s&&a.push(s)}}else if("object"===i){if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]")){a.push(l.toString());continue}for(var _ in l)e.call(l,_)&&l[_]&&a.push(_)}}}return a.join(" ")}a.exports?(t.default=t,a.exports=t):window.classNames=t}();var n=t.exports,l="base__fB-Cc__0-1-34";const i=({children:a,className:t})=>e.createElement("div",{className:n(l,t)},a),s=e=>({0:"var(--eds-spacing-none)",1:"var(--eds-spacing-small-1)",2:"var(--eds-spacing-small-2)",3:"var(--eds-spacing-small-3)",4:"var(--eds-spacing-small-4)",5:"var(--eds-spacing-small-5)",6:"var(--eds-spacing-medium-1)",7:"var(--eds-spacing-medium-2)",8:"var(--eds-spacing-medium-3)",9:"var(--eds-spacing-medium-4)",10:"var(--eds-spacing-medium-5)",11:"var(--eds-spacing-medium-6)",12:"var(--eds-spacing-medium-7)",13:"var(--eds-spacing-medium-8)",14:"var(--eds-spacing-large-1)",15:"var(--eds-spacing-large-2)",16:"var(--eds-spacing-large-3)",17:"var(--eds-spacing-large-4)",18:"var(--eds-spacing-large-5)"}[e]||"0px"),_=({mt:e,mb:a,my:t})=>({marginTop:void 0!==e?s(e):void 0!==t?s(t):void 0,marginBottom:void 0!==a?s(a):void 0!==t?s(t):void 0});var r={"heading-h1":"heading-h1__00OVp__0-1-34","heading-h2":"heading-h2__uf8XO__0-1-34","heading-h3":"heading-h3__b58IP__0-1-34","heading-h4":"heading-h4__x0dIm__0-1-34","heading-h5":"heading-h5__dHW8C__0-1-34","heading-h6":"heading-h6__FSif0__0-1-34","heading-display":"heading-display__1B20E__0-1-34","heading-leadtext":"heading-leadtext__fbf5X__0-1-34","heading-subheadline":"heading-subheadline__xgXDJ__0-1-34","text-p-small":"text-p-small__U5YeB__0-1-34","text-p-default":"text-p-default__T3Gv7__0-1-34","text-p-large":"text-p-large__k4P5K__0-1-34","text-line-tiny":"text-line-tiny__IdKxY__0-1-34","text-line-small":"text-line-small__VDnxz__0-1-34","text-line-default":"text-line-default__HHLev__0-1-34","text-line-large":"text-line-large__zY6Xt__0-1-34","text-list-default":"text-list-default__9dn8h__0-1-34","label-tiny":"label-tiny__fwERw__0-1-34","label-small":"label-small__7hSFb__0-1-34","label-default":"label-default__TzEjW__0-1-34","label-large":"label-large__Xe0s7__0-1-34","text-italic":"text-italic__9j6-k__0-1-34","text-underline":"text-underline__-idVq__0-1-34","text-uppercase":"text-uppercase__zT285__0-1-34","text-400":"text-400__veahz__0-1-34","text-600":"text-600__SOu9h__0-1-34"};const c=({id:a,variant:t,as:n,italic:l=!1,underline:i=!1,weight:s="600",uppercase:c=!1,children:d,className:m,dangerouslySetInnerHTML:g,mt:p,mb:u,my:h,...o})=>{const v=n||function(e){switch(e){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":case"p":case"ol":case"ul":return e;case"line":return"p";case"list":return"ol";default:return"div"}}(t),x=`\n        ${r[`heading-${t}`]}\n        ${m}\n        ${l?r["text-italic"]:""}\n        ${i?r["text-underline"]:""}\n        ${s?r[`text-${s}`]:""}\n        ${c?r["text-uppercase"]:""}\n    `,f=_({mt:p,mb:u,my:h});return g?e.createElement(v,{id:a,className:x,style:{...f},dangerouslySetInnerHTML:g,...o}):e.createElement(v,{id:a,className:x,style:{...f},...o},d)},d=({variant:a="p",size:t="default",italic:n=!1,underline:l=!1,weight:i="400",uppercase:s=!1,children:c,className:d,dangerouslySetInnerHTML:m,mt:g,mb:p,my:u,...h})=>{const o="p"===a?"p":"list"===a?"ul":"div",v=`\n        ${r[`text-${a}-${t}`]}\n        ${d}\n        ${n?r["text-italic"]:""}\n        ${l?r["text-underline"]:""}\n        ${i?r[`text-${i}`]:""}\n        ${s?r["text-uppercase"]:""}\n    `,x=_({mt:g,mb:p,my:u});return m?e.createElement(o,{className:v,dangerouslySetInnerHTML:m,style:{...x},...h}):e.createElement(o,{className:v,style:{...x},...h},c)};var m="base__gqqKh__0-1-34",g="inverted__yRn3l__0-1-34",p="accent__fT-PI__0-1-34",u="icon__G4b1z__0-1-34",h="inner__T4i2k__0-1-34",o="column__1aT0a__0-1-34",v="title__4p5YU__0-1-34",x="description__O68OD__0-1-34",f="content__blfYI__0-1-34";const y=({title:a,description:t,icon:l,inverted:s,accent:_,className:r,children:y,layout:b,...$})=>{const N=l?e.cloneElement(l,{className:u}):null;return e.createElement("div",{className:n(m,r,{[g]:s,[p]:_}),...$},e.createElement(i,null,e.createElement("div",{className:n(h,{[o]:"column"===b})},l&&N,e.createElement("div",{className:f},e.createElement(c,{variant:"h5",className:v},a),t&&e.createElement(d,{className:x},t)),y)))};export{y as Banner};
//# sourceMappingURL=index.js.map
