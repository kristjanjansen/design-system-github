"use client";import e from"react";var a,l={exports:{}};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/a=l,function(){var e={}.hasOwnProperty;function l(){for(var a=[],t=0;t<arguments.length;t++){var _=arguments[t];if(_){var i=typeof _;if("string"===i||"number"===i)a.push(_);else if(Array.isArray(_)){if(_.length){var n=l.apply(null,_);n&&a.push(n)}}else if("object"===i){if(_.toString!==Object.prototype.toString&&!_.toString.toString().includes("[native code]")){a.push(_.toString());continue}for(var s in _)e.call(_,s)&&_[s]&&a.push(s)}}}return a.join(" ")}a.exports?(l.default=l,a.exports=l):window.classNames=l}();var t=l.exports,_="base__fB-Cc__0-1-37";const i=({children:a,className:l})=>e.createElement("div",{className:t(_,l)},a);var n={stack:"stack__foEop__0-1-37","direction-xsmall-column":"direction-xsmall-column__gSInW__0-1-37","direction-xsmall-row":"direction-xsmall-row__xbYKt__0-1-37","direction-small-column":"direction-small-column__w3qdN__0-1-37","direction-small-row":"direction-small-row__Fi83T__0-1-37","direction-medium-column":"direction-medium-column__uPpiH__0-1-37","direction-medium-row":"direction-medium-row__QXENi__0-1-37","direction-large-column":"direction-large-column__DOuNx__0-1-37","direction-large-row":"direction-large-row__nt-ew__0-1-37","gap-xsmall-1":"gap-xsmall-1__PH7ZL__0-1-37","gap-xsmall-2":"gap-xsmall-2__OF5nS__0-1-37","gap-xsmall-3":"gap-xsmall-3__KP-Pk__0-1-37","gap-xsmall-4":"gap-xsmall-4__J5ttC__0-1-37","gap-small-1":"gap-small-1__s7o8S__0-1-37","gap-small-2":"gap-small-2__nhKiB__0-1-37","gap-small-3":"gap-small-3__SKBDk__0-1-37","gap-small-4":"gap-small-4__ykzrO__0-1-37","gap-medium-1":"gap-medium-1__dN9up__0-1-37","gap-medium-2":"gap-medium-2__UMXHe__0-1-37","gap-medium-3":"gap-medium-3__OIV7e__0-1-37","gap-medium-4":"gap-medium-4__mfb2I__0-1-37","gap-large-1":"gap-large-1__3BTuu__0-1-37","gap-large-2":"gap-large-2__po1On__0-1-37","gap-large-3":"gap-large-3__fK1OL__0-1-37","gap-large-4":"gap-large-4__1-BZF__0-1-37"};const s=({direction:a={xsmall:"column",small:"column",medium:"column",large:"column"},gap:l={xsmall:1,small:1,medium:1,large:1},children:t})=>{const _=Object.entries(a).map((([e,a])=>n[`direction-${e}-${a}`])).join(" "),i=Object.entries(l).map((([e,a])=>n[`gap-${e}-${a}`])).join(" ");return e.createElement("div",{className:`${n.stack} ${_} ${i}`},t)},r=e=>({0:"var(--eds-spacing-none)",1:"var(--eds-spacing-small-1)",2:"var(--eds-spacing-small-2)",3:"var(--eds-spacing-small-3)",4:"var(--eds-spacing-small-4)",5:"var(--eds-spacing-small-5)",6:"var(--eds-spacing-medium-1)",7:"var(--eds-spacing-medium-2)",8:"var(--eds-spacing-medium-3)",9:"var(--eds-spacing-medium-4)",10:"var(--eds-spacing-medium-5)",11:"var(--eds-spacing-medium-6)",12:"var(--eds-spacing-medium-7)",13:"var(--eds-spacing-medium-8)",14:"var(--eds-spacing-large-1)",15:"var(--eds-spacing-large-2)",16:"var(--eds-spacing-large-3)",17:"var(--eds-spacing-large-4)",18:"var(--eds-spacing-large-5)"}[e]||"0px"),m=({mt:e,mb:a,my:l})=>({marginTop:void 0!==e?r(e):void 0!==l?r(l):void 0,marginBottom:void 0!==a?r(a):void 0!==l?r(l):void 0});function c(e){switch(e){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":case"p":case"ol":case"ul":return e;case"line":return"p";case"list":return"ol";default:return"div"}}var d={"heading-h1":"heading-h1__00OVp__0-1-37","heading-h2":"heading-h2__uf8XO__0-1-37","heading-h3":"heading-h3__b58IP__0-1-37","heading-h4":"heading-h4__x0dIm__0-1-37","heading-h5":"heading-h5__dHW8C__0-1-37","heading-h6":"heading-h6__FSif0__0-1-37","heading-display":"heading-display__1B20E__0-1-37","heading-leadtext":"heading-leadtext__fbf5X__0-1-37","heading-subheadline":"heading-subheadline__xgXDJ__0-1-37","text-p-small":"text-p-small__U5YeB__0-1-37","text-p-default":"text-p-default__T3Gv7__0-1-37","text-p-large":"text-p-large__k4P5K__0-1-37","text-line-tiny":"text-line-tiny__IdKxY__0-1-37","text-line-small":"text-line-small__VDnxz__0-1-37","text-line-default":"text-line-default__HHLev__0-1-37","text-line-large":"text-line-large__zY6Xt__0-1-37","text-list-default":"text-list-default__9dn8h__0-1-37","label-tiny":"label-tiny__fwERw__0-1-37","label-small":"label-small__7hSFb__0-1-37","label-default":"label-default__TzEjW__0-1-37","label-large":"label-large__Xe0s7__0-1-37","text-italic":"text-italic__9j6-k__0-1-37","text-underline":"text-underline__-idVq__0-1-37","text-uppercase":"text-uppercase__zT285__0-1-37","text-400":"text-400__veahz__0-1-37","text-600":"text-600__SOu9h__0-1-37"};const g=({id:a,variant:l,as:t,italic:_=!1,underline:i=!1,weight:n="600",uppercase:s=!1,children:r,className:g,dangerouslySetInnerHTML:p,mt:o,mb:u,my:x,...h})=>{const v=t||c(l),f=`\n        ${d[`heading-${l}`]}\n        ${g}\n        ${_?d["text-italic"]:""}\n        ${i?d["text-underline"]:""}\n        ${n?d[`text-${n}`]:""}\n        ${s?d["text-uppercase"]:""}\n    `,b=m({mt:o,mb:u,my:x});return p?e.createElement(v,{id:a,className:f,style:{...b},dangerouslySetInnerHTML:p,...h}):e.createElement(v,{id:a,className:f,style:{...b},...h},r)},p=({variant:a="p",as:l,size:t="default",italic:_=!1,underline:i=!1,weight:n="400",uppercase:s=!1,children:r,className:g,dangerouslySetInnerHTML:p,mt:o,mb:u,my:x,...h})=>{const v=l||c(a),f=`\n        ${d[`text-${a}-${t}`]}\n        ${g}\n        ${_?d["text-italic"]:""}\n        ${i?d["text-underline"]:""}\n        ${n?d[`text-${n}`]:""}\n        ${s?d["text-uppercase"]:""}\n    `,b=m({mt:o,mb:u,my:x});return p?e.createElement(v,{className:f,dangerouslySetInnerHTML:p,style:{...b},...h}):e.createElement(v,{className:f,style:{...b},...h},r)};var o="base__Gu8zK__0-1-37",u="image__zbTzc__0-1-37",x="mask__96kCh__0-1-37",h="container__ET8Ab__0-1-37",v="inner__ku6zl__0-1-37",f="title__9YKQt__0-1-37",b="description__GioB1__0-1-37";const y=({image:a,heading:l,description:_,children:n,...r})=>{const{className:m,...c}=r,d="string"==typeof a;return e.createElement("section",{className:o,style:{backgroundImage:`url(${d?a:""})`},...c},!d&&a,e.createElement("div",{className:x},e.createElement(i,{className:h},e.createElement("div",{className:t(v,m)},e.createElement(s,{gap:{xsmall:2}},e.createElement(g,{variant:"h1",className:f},l),e.createElement(p,{className:b},_),n)))))},$=({children:a})=>e.createElement(s,{direction:{xsmall:"row"},gap:{xsmall:2}},a),N=({children:a})=>e.createElement("div",{className:u},a);export{y as Hero,$ as HeroActions,N as HeroImage};
//# sourceMappingURL=index.js.map
