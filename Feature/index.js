"use client";import e from"react";const a=e=>({0:"var(--eds-spacing-none)",1:"var(--eds-spacing-small-1)",2:"var(--eds-spacing-small-2)",3:"var(--eds-spacing-small-3)",4:"var(--eds-spacing-small-4)",5:"var(--eds-spacing-small-5)",6:"var(--eds-spacing-medium-1)",7:"var(--eds-spacing-medium-2)",8:"var(--eds-spacing-medium-3)",9:"var(--eds-spacing-medium-4)",10:"var(--eds-spacing-medium-5)",11:"var(--eds-spacing-medium-6)",12:"var(--eds-spacing-medium-7)",13:"var(--eds-spacing-medium-8)",14:"var(--eds-spacing-large-1)",15:"var(--eds-spacing-large-2)",16:"var(--eds-spacing-large-3)",17:"var(--eds-spacing-large-4)",18:"var(--eds-spacing-large-5)"}[e]||"0px"),t=({mt:e,mb:t,my:_})=>({marginTop:void 0!==e?a(e):void 0!==_?a(_):void 0,marginBottom:void 0!==t?a(t):void 0!==_?a(_):void 0});var _={"heading-h1":"heading-h1__00OVp__0-1-28","heading-h2":"heading-h2__uf8XO__0-1-28","heading-h3":"heading-h3__b58IP__0-1-28","heading-h4":"heading-h4__x0dIm__0-1-28","heading-h5":"heading-h5__dHW8C__0-1-28","heading-h6":"heading-h6__FSif0__0-1-28","heading-display":"heading-display__1B20E__0-1-28","heading-leadtext":"heading-leadtext__fbf5X__0-1-28","heading-subheadline":"heading-subheadline__xgXDJ__0-1-28","text-p-small":"text-p-small__U5YeB__0-1-28","text-p-default":"text-p-default__T3Gv7__0-1-28","text-p-large":"text-p-large__k4P5K__0-1-28","text-line-tiny":"text-line-tiny__IdKxY__0-1-28","text-line-small":"text-line-small__VDnxz__0-1-28","text-line-default":"text-line-default__HHLev__0-1-28","text-line-large":"text-line-large__zY6Xt__0-1-28","text-list-default":"text-list-default__9dn8h__0-1-28","label-tiny":"label-tiny__fwERw__0-1-28","label-small":"label-small__7hSFb__0-1-28","label-default":"label-default__TzEjW__0-1-28","label-large":"label-large__Xe0s7__0-1-28","text-italic":"text-italic__9j6-k__0-1-28","text-underline":"text-underline__-idVq__0-1-28","text-uppercase":"text-uppercase__zT285__0-1-28","text-400":"text-400__veahz__0-1-28","text-600":"text-600__SOu9h__0-1-28"};const i=({id:a,variant:i,as:n,italic:l=!1,underline:s=!1,weight:d="600",uppercase:r=!1,children:c,className:m,mt:g,mb:h,my:p,...u})=>{const x=n||function(e){switch(e){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":case"p":case"ol":case"ul":return e;case"line":return"p";case"list":return"ol";default:return"div"}}(i),v=`\n        ${_[`heading-${i}`]}\n        ${m}\n        ${l?_["text-italic"]:""}\n        ${s?_["text-underline"]:""}\n        ${d?_[`text-${d}`]:""}\n        ${r?_["text-uppercase"]:""}\n    `,o=t({mt:g,mb:h,my:p});return e.createElement(x,{id:a,className:v,style:{...o},...u},c)},n=({variant:a="p",size:i="default",italic:n=!1,underline:l=!1,weight:s="400",uppercase:d=!1,children:r,className:c,mt:m,mb:g,my:h,...p})=>{const u="p"===a?"p":"list"===a?"ul":"div",x=`\n        ${_[`text-${a}-${i}`]}\n        ${c}\n        ${n?_["text-italic"]:""}\n        ${l?_["text-underline"]:""}\n        ${s?_[`text-${s}`]:""}\n        ${d?_["text-uppercase"]:""}\n    `,v=t({mt:m,mb:g,my:h});return e.createElement(u,{className:x,style:{...v},...p},r)};var l="base__dkHbT__0-1-28",s="icon__b67hs__0-1-28",d="content__ITnhW__0-1-28",r="title__dz-eh__0-1-28",c="description__YOZfZ__0-1-28";const m=({title:a,description:t,icon:_,...m})=>{const g=e.cloneElement(_,{className:s});return e.createElement("div",{className:l,...m},g,e.createElement("div",{className:d},e.createElement(i,{variant:"h5",className:r},a),e.createElement(n,{className:c},t)))};export{m as Feature};
//# sourceMappingURL=index.js.map
