"use client";import e from"react";const a=e=>({0:"var(--eds-spacing-none)",1:"var(--eds-spacing-small-1)",2:"var(--eds-spacing-small-2)",3:"var(--eds-spacing-small-3)",4:"var(--eds-spacing-small-4)",5:"var(--eds-spacing-small-5)",6:"var(--eds-spacing-medium-1)",7:"var(--eds-spacing-medium-2)",8:"var(--eds-spacing-medium-3)",9:"var(--eds-spacing-medium-4)",10:"var(--eds-spacing-medium-5)",11:"var(--eds-spacing-medium-6)",12:"var(--eds-spacing-medium-7)",13:"var(--eds-spacing-medium-8)",14:"var(--eds-spacing-large-1)",15:"var(--eds-spacing-large-2)",16:"var(--eds-spacing-large-3)",17:"var(--eds-spacing-large-4)",18:"var(--eds-spacing-large-5)"}[e]||"0px"),t=({mt:e,mb:t,my:n})=>({marginTop:void 0!==e?a(e):void 0!==n?a(n):void 0,marginBottom:void 0!==t?a(t):void 0!==n?a(n):void 0});function n(e){switch(e){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":case"p":case"ol":case"ul":return e;case"line":return"p";case"list":return"ol";default:return"div"}}var l={"heading-h1":"heading-h1__00OVp__0-1-37","heading-h2":"heading-h2__uf8XO__0-1-37","heading-h3":"heading-h3__b58IP__0-1-37","heading-h4":"heading-h4__x0dIm__0-1-37","heading-h5":"heading-h5__dHW8C__0-1-37","heading-h6":"heading-h6__FSif0__0-1-37","heading-display":"heading-display__1B20E__0-1-37","heading-leadtext":"heading-leadtext__fbf5X__0-1-37","heading-subheadline":"heading-subheadline__xgXDJ__0-1-37","text-p-small":"text-p-small__U5YeB__0-1-37","text-p-default":"text-p-default__T3Gv7__0-1-37","text-p-large":"text-p-large__k4P5K__0-1-37","text-line-tiny":"text-line-tiny__IdKxY__0-1-37","text-line-small":"text-line-small__VDnxz__0-1-37","text-line-default":"text-line-default__HHLev__0-1-37","text-line-large":"text-line-large__zY6Xt__0-1-37","text-list-default":"text-list-default__9dn8h__0-1-37","label-tiny":"label-tiny__fwERw__0-1-37","label-small":"label-small__7hSFb__0-1-37","label-default":"label-default__TzEjW__0-1-37","label-large":"label-large__Xe0s7__0-1-37","text-italic":"text-italic__9j6-k__0-1-37","text-underline":"text-underline__-idVq__0-1-37","text-uppercase":"text-uppercase__zT285__0-1-37","text-400":"text-400__veahz__0-1-37","text-600":"text-600__SOu9h__0-1-37"};const _=({id:a,variant:_,as:i,italic:s=!1,underline:d=!1,weight:r="600",uppercase:c=!1,children:m,className:g,dangerouslySetInnerHTML:h,mt:p,mb:u,my:x,...v})=>{const o=i||n(_),b=`\n        ${l[`heading-${_}`]}\n        ${g}\n        ${s?l["text-italic"]:""}\n        ${d?l["text-underline"]:""}\n        ${r?l[`text-${r}`]:""}\n        ${c?l["text-uppercase"]:""}\n    `,y=t({mt:p,mb:u,my:x});return h?e.createElement(o,{id:a,className:b,style:{...y},dangerouslySetInnerHTML:h,...v}):e.createElement(o,{id:a,className:b,style:{...y},...v},m)},i=({variant:a="p",as:_,size:i="default",italic:s=!1,underline:d=!1,weight:r="400",uppercase:c=!1,children:m,className:g,dangerouslySetInnerHTML:h,mt:p,mb:u,my:x,...v})=>{const o=_||n(a),b=`\n        ${l[`text-${a}-${i}`]}\n        ${g}\n        ${s?l["text-italic"]:""}\n        ${d?l["text-underline"]:""}\n        ${r?l[`text-${r}`]:""}\n        ${c?l["text-uppercase"]:""}\n    `,y=t({mt:p,mb:u,my:x});return h?e.createElement(o,{className:b,dangerouslySetInnerHTML:h,style:{...y},...v}):e.createElement(o,{className:b,style:{...y},...v},m)};var s="base__dkHbT__0-1-37",d="icon__b67hs__0-1-37",r="content__ITnhW__0-1-37",c="title__dz-eh__0-1-37",m="description__YOZfZ__0-1-37";const g=({title:a,description:t,icon:n,...l})=>{const g=n?e.cloneElement(n,{className:d}):null;return e.createElement("div",{className:s,...l},n&&g,e.createElement("div",{className:r},e.createElement(_,{variant:"h5",className:c},a),e.createElement(i,{className:m},t)))};export{g as Feature};
//# sourceMappingURL=index.js.map
