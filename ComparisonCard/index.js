"use client";import e from"react";var a="card__7JSte__0-1-24";const t=({className:t,gridRowSpan:i,children:_})=>{const l={gridRow:`span ${i}`};return e.createElement("div",{className:`${a} ${t||""}`,style:l},_)};var i,_={exports:{}};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/i=_,function(){var e={}.hasOwnProperty;function a(){for(var t=[],i=0;i<arguments.length;i++){var _=arguments[i];if(_){var l=typeof _;if("string"===l||"number"===l)t.push(_);else if(Array.isArray(_)){if(_.length){var n=a.apply(null,_);n&&t.push(n)}}else if("object"===l){if(_.toString!==Object.prototype.toString&&!_.toString.toString().includes("[native code]")){t.push(_.toString());continue}for(var r in _)e.call(_,r)&&_[r]&&t.push(r)}}}return t.join(" ")}i.exports?(a.default=a,i.exports=a):window.classNames=a}();var l=_.exports,n="base__320fF__0-1-24",r="alternative__XuxUF__0-1-24";const s=({label:a,children:t,background:i="main"})=>{const _=l({[n]:!0,[r]:"alternative"===i});return e.createElement("div",{className:_,"aria-label":a},t)};var c="footer__bbK8h__0-1-24";const m=({children:a,className:t})=>e.createElement("div",{className:l(c,t)},a);var d={stack:"stack__foEop__0-1-24","direction-xsmall-column":"direction-xsmall-column__gSInW__0-1-24","direction-xsmall-row":"direction-xsmall-row__xbYKt__0-1-24","direction-small-column":"direction-small-column__w3qdN__0-1-24","direction-small-row":"direction-small-row__Fi83T__0-1-24","direction-medium-column":"direction-medium-column__uPpiH__0-1-24","direction-medium-row":"direction-medium-row__QXENi__0-1-24","direction-large-column":"direction-large-column__DOuNx__0-1-24","direction-large-row":"direction-large-row__nt-ew__0-1-24","gap-xsmall-1":"gap-xsmall-1__PH7ZL__0-1-24","gap-xsmall-2":"gap-xsmall-2__OF5nS__0-1-24","gap-xsmall-3":"gap-xsmall-3__KP-Pk__0-1-24","gap-xsmall-4":"gap-xsmall-4__J5ttC__0-1-24","gap-small-1":"gap-small-1__s7o8S__0-1-24","gap-small-2":"gap-small-2__nhKiB__0-1-24","gap-small-3":"gap-small-3__SKBDk__0-1-24","gap-small-4":"gap-small-4__ykzrO__0-1-24","gap-medium-1":"gap-medium-1__dN9up__0-1-24","gap-medium-2":"gap-medium-2__UMXHe__0-1-24","gap-medium-3":"gap-medium-3__OIV7e__0-1-24","gap-medium-4":"gap-medium-4__mfb2I__0-1-24","gap-large-1":"gap-large-1__3BTuu__0-1-24","gap-large-2":"gap-large-2__po1On__0-1-24","gap-large-3":"gap-large-3__fK1OL__0-1-24","gap-large-4":"gap-large-4__1-BZF__0-1-24"};const o=({direction:a={xsmall:"column",small:"column",medium:"column",large:"column"},gap:t={xsmall:1,small:1,medium:1,large:1},children:i})=>{const _=Object.entries(a).map((([e,a])=>d[`direction-${e}-${a}`])).join(" "),l=Object.entries(t).map((([e,a])=>d[`gap-${e}-${a}`])).join(" ");return e.createElement("div",{className:`${d.stack} ${_} ${l}`},i)},p=e=>({0:"var(--eds-spacing-none)",1:"var(--eds-spacing-small-1)",2:"var(--eds-spacing-small-2)",3:"var(--eds-spacing-small-3)",4:"var(--eds-spacing-small-4)",5:"var(--eds-spacing-small-5)",6:"var(--eds-spacing-medium-1)",7:"var(--eds-spacing-medium-2)",8:"var(--eds-spacing-medium-3)",9:"var(--eds-spacing-medium-4)",10:"var(--eds-spacing-medium-5)",11:"var(--eds-spacing-medium-6)",12:"var(--eds-spacing-medium-7)",13:"var(--eds-spacing-medium-8)",14:"var(--eds-spacing-large-1)",15:"var(--eds-spacing-large-2)",16:"var(--eds-spacing-large-3)",17:"var(--eds-spacing-large-4)",18:"var(--eds-spacing-large-5)"}[e]||"0px"),g=({mt:e,mb:a,my:t})=>({marginTop:void 0!==e?p(e):void 0!==t?p(t):void 0,marginBottom:void 0!==a?p(a):void 0!==t?p(t):void 0});var v={"heading-h1":"heading-h1__00OVp__0-1-24","heading-h2":"heading-h2__uf8XO__0-1-24","heading-h3":"heading-h3__b58IP__0-1-24","heading-h4":"heading-h4__x0dIm__0-1-24","heading-h5":"heading-h5__dHW8C__0-1-24","heading-h6":"heading-h6__FSif0__0-1-24","heading-display":"heading-display__1B20E__0-1-24","heading-leadtext":"heading-leadtext__fbf5X__0-1-24","heading-subheadline":"heading-subheadline__xgXDJ__0-1-24","text-p-small":"text-p-small__U5YeB__0-1-24","text-p-default":"text-p-default__T3Gv7__0-1-24","text-p-large":"text-p-large__k4P5K__0-1-24","text-line-tiny":"text-line-tiny__IdKxY__0-1-24","text-line-small":"text-line-small__VDnxz__0-1-24","text-line-default":"text-line-default__HHLev__0-1-24","text-line-large":"text-line-large__zY6Xt__0-1-24","text-list-default":"text-list-default__9dn8h__0-1-24","label-tiny":"label-tiny__fwERw__0-1-24","label-small":"label-small__7hSFb__0-1-24","label-default":"label-default__TzEjW__0-1-24","label-large":"label-large__Xe0s7__0-1-24","text-italic":"text-italic__9j6-k__0-1-24","text-underline":"text-underline__-idVq__0-1-24","text-uppercase":"text-uppercase__zT285__0-1-24","text-400":"text-400__veahz__0-1-24","text-600":"text-600__SOu9h__0-1-24"};const u=({id:a,variant:t,as:i,italic:_=!1,underline:l=!1,weight:n="600",uppercase:r=!1,children:s,className:c,mt:m,mb:d,my:o,...p})=>{const u=i||function(e){switch(e){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":case"p":case"ol":case"ul":return e;case"line":return"p";case"list":return"ol";default:return"div"}}(t),h=`\n        ${v[`heading-${t}`]}\n        ${c}\n        ${_?v["text-italic"]:""}\n        ${l?v["text-underline"]:""}\n        ${n?v[`text-${n}`]:""}\n        ${r?v["text-uppercase"]:""}\n    `,x=g({mt:m,mb:d,my:o});return e.createElement(u,{id:a,className:h,style:{...x},...p},s)},h=({variant:a="p",size:t="default",italic:i=!1,underline:_=!1,weight:l="400",uppercase:n=!1,children:r,className:s,mt:c,mb:m,my:d,...o})=>{const p="p"===a?"p":"list"===a?"ul":"div",u=`\n        ${v[`text-${a}-${t}`]}\n        ${s}\n        ${i?v["text-italic"]:""}\n        ${_?v["text-underline"]:""}\n        ${l?v[`text-${l}`]:""}\n        ${n?v["text-uppercase"]:""}\n    `,h=g({mt:c,mb:m,my:d});return e.createElement(p,{className:u,style:{...h},...o},r)};var x={header:"header__SJ4jK__0-1-24","header--service":"header--service__zK1oF__0-1-24",alternative:"alternative__mq4Fx__0-1-24",icon:"icon__0a6SJ__0-1-24",content:"content__Xr80z__0-1-24",overline:"overline__N70NJ__0-1-24",title:"title__q-Pzf__0-1-24",description:"description__5DGlO__0-1-24"};const E=({type:a,icon:t,overline:i,title:_,description:n,children:r,background:s="main"})=>{const c=l({[x["header--product"]]:"product"===a,[x["header--service"]]:"service"===a,[x.alternative]:"alternative"===s}),m=t&&e.cloneElement(t,{className:x.icon});return e.createElement("div",{className:`${x.header} ${c}`},m,e.createElement("div",{className:x.content},e.createElement(o,null,i&&e.createElement(u,{uppercase:!0,variant:"subheadline",className:x.overline},i),_&&e.createElement(u,{variant:"h5",className:x.title},_)),n&&e.createElement(h,{className:x.description,variant:"line",size:"small"},n),r))};var N="base__hewbd__0-1-24";const f=({label:a,children:t})=>e.createElement("div",{className:N,"aria-label":a},t);var y="offer__2ifE-__0-1-24",b="product__voe3n__0-1-24",w="service__N1y-k__0-1-24",$="description__5CE-g__0-1-24",z="upper__Z4uKl__0-1-24";const S=({type:a,title:t,description:i,infoHint:_})=>{const n=l({[b]:"product"===a,[w]:"service"===a});return e.createElement(e.Fragment,null,(t||i)&&e.createElement("div",{className:`${y} ${n}`},e.createElement("div",{className:z},e.createElement(h,{size:"small",weight:"600"},t),_),e.createElement(h,{variant:"line",size:"small",className:$},i)))};var O="base__uah8k__0-1-24",k="short__G86dO__0-1-24",P="title__R5VoL__0-1-24",F="value__NdSF3__0-1-24",K="long__FSLtq__0-1-24",T="container__wIZTw__0-1-24";const j=({type:a,title:t,value:i,infoHint:_})=>{const n=l({[O]:!0,[k]:"short"===a,[K]:"long"===a});return e.createElement("div",{className:n},e.createElement(h,{variant:"line",weight:"long"===a?"600":void 0,className:P},t),e.createElement("div",{className:T},e.createElement(h,{variant:"line",weight:"short"===a?"600":void 0,className:F},i),_))};var I="base__OeRFG__0-1-24",D="price_section__qY60t__0-1-24",H="primary__cL6PR__0-1-24",X="primary_value__VsRRU__0-1-24",B="price__dueWy__0-1-24",R="primary_prefix__VjZTn__0-1-24",V="primary_suffix__EBVBk__0-1-24",G="description__kQvlG__0-1-24",L="secondary__diuxV__0-1-24",q="tertiary__ML-A3__0-1-24",J="secondary_service__GowTT__0-1-24",Z="tertiary_service__NdX5I__0-1-24",Y="secondary_value__Io1DK__0-1-24",A="tertiary_price__PAF7z__0-1-24",U="column__z9-oK__0-1-24",W="tertiary_value__7RZv0__0-1-24",C="secondary_price__DOQav__0-1-24",M="link__Nkzih__0-1-24",Q="notification__joH6G__0-1-24",ee="upper__KyjDs__0-1-24",ae="notification_title__nNFMI__0-1-24";const te=({primary:a,primaryTitle:t,primaryPrefix:i,primaryPrice:_,primarySuffix:l,primaryDescription:n,secondary:r,secondaryTitle:s,secondaryInfoHint:c,secondaryPrefix:m,secondaryPrice:d,secondarySuffix:o,secondaryDescription:p,tertiary:g,tertiaryTitle:v,tertiaryInfoHint:x,tertiaryPrefix:E,tertiaryPrice:N,tertiarySuffix:f,tertiaryDescription:y,children:b,notificationTitle:w,notificationDescription:$,notificationInfoHint:z})=>e.createElement("div",{className:I},a&&e.createElement("div",{className:D},e.createElement("div",{className:H},t&&e.createElement(h,{variant:"line"},t),_&&e.createElement("div",{className:X},i&&e.createElement(h,{className:R,variant:"line",weight:"600"},i),e.createElement(u,{variant:"h4",className:B},_),l&&e.createElement(h,{className:V,variant:"line",weight:"600"},l)),n&&e.createElement(h,{variant:"line",...t||_?{size:"small"}:{weight:"600"},className:G},n)),r&&e.createElement("div",{className:L},e.createElement("div",{className:J},e.createElement("div",{className:`${Y} ${m||o?U:""}`},e.createElement(h,{variant:"line"},s),e.createElement("div",{className:C},m&&e.createElement(h,{variant:"line",weight:"600"},m),e.createElement(h,{className:B,variant:"line",weight:"600"},d),o&&e.createElement(h,{variant:"line",weight:"600"},o))),c),p&&e.createElement(h,{variant:"line",size:"small",className:G},p)),g&&e.createElement("div",{className:q},e.createElement("div",{className:Z},e.createElement("div",{className:`${W} ${E||f?U:""}`},e.createElement(h,{variant:"line"},v),e.createElement("div",{className:A},E&&e.createElement(h,{variant:"line",weight:"600"},E),e.createElement(h,{className:B,variant:"line",weight:"600"},N),f&&e.createElement(h,{variant:"line",weight:"600"},f)),x)),y&&e.createElement(h,{variant:"line",size:"small",className:G},y)),b&&e.createElement("div",{className:M},b)),(w||$)&&e.createElement("div",{className:Q},w&&e.createElement("div",{className:ee},e.createElement(h,{variant:"line",size:"small",weight:"600",className:ae},w),z),$&&e.createElement(h,{variant:"line",size:"small",className:G},$)));export{t as ComparisonCard,s as ComparisonCardDetails,m as ComparisonCardFooter,E as ComparisonCardHeader,f as ComparisonCardImages,S as ComparisonCardOffer,j as ComparisonCardParameter,te as ComparisonCardPrice};
//# sourceMappingURL=index.js.map
