"use client";import e from"react";var a,l={exports:{}};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/a=l,function(){var e={}.hasOwnProperty;function l(){for(var a=[],_=0;_<arguments.length;_++){var t=arguments[_];if(t){var i=typeof t;if("string"===i||"number"===i)a.push(t);else if(Array.isArray(t)){if(t.length){var n=l.apply(null,t);n&&a.push(n)}}else if("object"===i){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){a.push(t.toString());continue}for(var s in t)e.call(t,s)&&t[s]&&a.push(s)}}}return a.join(" ")}a.exports?(l.default=l,a.exports=l):window.classNames=l}();var _=l.exports,t="base__fB-Cc__0-1-19";const i=({children:a,className:l})=>e.createElement("div",{className:_(t,l)},a);var n={stack:"stack__foEop__0-1-19","direction-xsmall-column":"direction-xsmall-column__gSInW__0-1-19","direction-xsmall-row":"direction-xsmall-row__xbYKt__0-1-19","direction-small-column":"direction-small-column__w3qdN__0-1-19","direction-small-row":"direction-small-row__Fi83T__0-1-19","direction-medium-column":"direction-medium-column__uPpiH__0-1-19","direction-medium-row":"direction-medium-row__QXENi__0-1-19","direction-large-column":"direction-large-column__DOuNx__0-1-19","direction-large-row":"direction-large-row__nt-ew__0-1-19","gap-xsmall-1":"gap-xsmall-1__PH7ZL__0-1-19","gap-xsmall-2":"gap-xsmall-2__OF5nS__0-1-19","gap-xsmall-3":"gap-xsmall-3__KP-Pk__0-1-19","gap-xsmall-4":"gap-xsmall-4__J5ttC__0-1-19","gap-small-1":"gap-small-1__s7o8S__0-1-19","gap-small-2":"gap-small-2__nhKiB__0-1-19","gap-small-3":"gap-small-3__SKBDk__0-1-19","gap-small-4":"gap-small-4__ykzrO__0-1-19","gap-medium-1":"gap-medium-1__dN9up__0-1-19","gap-medium-2":"gap-medium-2__UMXHe__0-1-19","gap-medium-3":"gap-medium-3__OIV7e__0-1-19","gap-medium-4":"gap-medium-4__mfb2I__0-1-19","gap-large-1":"gap-large-1__3BTuu__0-1-19","gap-large-2":"gap-large-2__po1On__0-1-19","gap-large-3":"gap-large-3__fK1OL__0-1-19","gap-large-4":"gap-large-4__1-BZF__0-1-19"};const s=({direction:a={xsmall:"column",small:"column",medium:"column",large:"column"},gap:l={xsmall:1,small:1,medium:1,large:1},children:_})=>{const t=Object.entries(a).map((([e,a])=>n[`direction-${e}-${a}`])).join(" "),i=Object.entries(l).map((([e,a])=>n[`gap-${e}-${a}`])).join(" ");return e.createElement("div",{className:`${n.stack} ${t} ${i}`},_)},r=e=>({0:"var(--eds-spacing-none)",1:"var(--eds-spacing-small-1)",2:"var(--eds-spacing-small-2)",3:"var(--eds-spacing-small-3)",4:"var(--eds-spacing-small-4)",5:"var(--eds-spacing-small-5)",6:"var(--eds-spacing-medium-1)",7:"var(--eds-spacing-medium-2)",8:"var(--eds-spacing-medium-3)",9:"var(--eds-spacing-medium-4)",10:"var(--eds-spacing-medium-5)",11:"var(--eds-spacing-medium-6)",12:"var(--eds-spacing-medium-7)",13:"var(--eds-spacing-medium-8)",14:"var(--eds-spacing-large-1)",15:"var(--eds-spacing-large-2)",16:"var(--eds-spacing-large-3)",17:"var(--eds-spacing-large-4)",18:"var(--eds-spacing-large-5)"}[e]||"0px"),m=({mt:e,mb:a,my:l})=>({marginTop:void 0!==e?r(e):void 0!==l?r(l):void 0,marginBottom:void 0!==a?r(a):void 0!==l?r(l):void 0});var c={"heading-h1":"heading-h1__00OVp__0-1-19","heading-h2":"heading-h2__uf8XO__0-1-19","heading-h3":"heading-h3__b58IP__0-1-19","heading-h4":"heading-h4__x0dIm__0-1-19","heading-h5":"heading-h5__dHW8C__0-1-19","heading-h6":"heading-h6__FSif0__0-1-19","heading-display":"heading-display__1B20E__0-1-19","heading-leadtext":"heading-leadtext__fbf5X__0-1-19","heading-subheadline":"heading-subheadline__xgXDJ__0-1-19","text-p-small":"text-p-small__U5YeB__0-1-19","text-p-default":"text-p-default__T3Gv7__0-1-19","text-p-large":"text-p-large__k4P5K__0-1-19","text-line-tiny":"text-line-tiny__IdKxY__0-1-19","text-line-small":"text-line-small__VDnxz__0-1-19","text-line-default":"text-line-default__HHLev__0-1-19","text-line-large":"text-line-large__zY6Xt__0-1-19","text-list-default":"text-list-default__9dn8h__0-1-19","label-tiny":"label-tiny__fwERw__0-1-19","label-small":"label-small__7hSFb__0-1-19","label-default":"label-default__TzEjW__0-1-19","label-large":"label-large__Xe0s7__0-1-19","text-italic":"text-italic__9j6-k__0-1-19","text-underline":"text-underline__-idVq__0-1-19","text-uppercase":"text-uppercase__zT285__0-1-19","text-400":"text-400__veahz__0-1-19","text-600":"text-600__SOu9h__0-1-19"};const d=({id:a,variant:l,as:_,italic:t=!1,underline:i=!1,weight:n="600",uppercase:s=!1,children:r,className:d,mt:g,mb:p,my:o,...u})=>{const x=_||function(e){switch(e){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":case"p":case"ol":case"ul":return e;case"line":return"p";case"list":return"ol";default:return"div"}}(l),h=`\n        ${c[`heading-${l}`]}\n        ${d}\n        ${t?c["text-italic"]:""}\n        ${i?c["text-underline"]:""}\n        ${n?c[`text-${n}`]:""}\n        ${s?c["text-uppercase"]:""}\n    `,v=m({mt:g,mb:p,my:o});return e.createElement(x,{id:a,className:h,style:{...v},...u},r)},g=({variant:a="p",size:l="default",italic:_=!1,underline:t=!1,weight:i="400",uppercase:n=!1,children:s,className:r,mt:d,mb:g,my:p,...o})=>{const u="p"===a?"p":"list"===a?"ul":"div",x=`\n        ${c[`text-${a}-${l}`]}\n        ${r}\n        ${_?c["text-italic"]:""}\n        ${t?c["text-underline"]:""}\n        ${i?c[`text-${i}`]:""}\n        ${n?c["text-uppercase"]:""}\n    `,h=m({mt:d,mb:g,my:p});return e.createElement(u,{className:x,style:{...h},...o},s)};var p="base__Gu8zK__0-1-19",o="image__zbTzc__0-1-19",u="mask__96kCh__0-1-19",x="container__ET8Ab__0-1-19",h="inner__ku6zl__0-1-19",v="title__9YKQt__0-1-19",f="description__GioB1__0-1-19";const b=({image:a,heading:l,description:_,children:t,...n})=>{const{className:r,...m}=n,c="string"==typeof a;return e.createElement("section",{className:p,style:{backgroundImage:`url(${c?a:""})`},...m},!c&&a,e.createElement("div",{className:u},e.createElement(i,{className:x},e.createElement("div",{className:h},e.createElement(s,{gap:{xsmall:2}},e.createElement(d,{variant:"h1",className:v},l),e.createElement(g,{className:f},_),t)))))},$=({children:a})=>e.createElement(s,{direction:{xsmall:"row"},gap:{xsmall:2}},a),y=({children:a})=>e.createElement("div",{className:o},a);export{b as Hero,$ as HeroActions,y as HeroImage};
//# sourceMappingURL=index.js.map
