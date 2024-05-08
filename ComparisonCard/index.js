"use client";import e,{forwardRef as a}from"react";var t="card__7JSte__0-1-38";const i=({className:a,gridRowSpan:i,children:l})=>{const _={gridRow:`span ${i}`};return e.createElement("div",{className:`${t} ${a||""}`,style:_},l)};var l,_={exports:{}};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/l=_,function(){var e={}.hasOwnProperty;function a(){for(var t=[],i=0;i<arguments.length;i++){var l=arguments[i];if(l){var _=typeof l;if("string"===_||"number"===_)t.push(l);else if(Array.isArray(l)){if(l.length){var n=a.apply(null,l);n&&t.push(n)}}else if("object"===_){if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]")){t.push(l.toString());continue}for(var r in l)e.call(l,r)&&l[r]&&t.push(r)}}}return t.join(" ")}l.exports?(a.default=a,l.exports=a):window.classNames=a}();var n=_.exports,r="base__320fF__0-1-38",s="alternative__XuxUF__0-1-38";const c=({label:a,children:t,background:i="main"})=>{const l=n({[r]:!0,[s]:"alternative"===i});return e.createElement("div",{className:l,"aria-label":a},t)};var m="footer__bbK8h__0-1-38";const d=({children:a,className:t})=>e.createElement("div",{className:n(m,t)},a);var o={stack:"stack__foEop__0-1-38","direction-xsmall-column":"direction-xsmall-column__gSInW__0-1-38","direction-xsmall-row":"direction-xsmall-row__xbYKt__0-1-38","direction-small-column":"direction-small-column__w3qdN__0-1-38","direction-small-row":"direction-small-row__Fi83T__0-1-38","direction-medium-column":"direction-medium-column__uPpiH__0-1-38","direction-medium-row":"direction-medium-row__QXENi__0-1-38","direction-large-column":"direction-large-column__DOuNx__0-1-38","direction-large-row":"direction-large-row__nt-ew__0-1-38","gap-xsmall-1":"gap-xsmall-1__PH7ZL__0-1-38","gap-xsmall-2":"gap-xsmall-2__OF5nS__0-1-38","gap-xsmall-3":"gap-xsmall-3__KP-Pk__0-1-38","gap-xsmall-4":"gap-xsmall-4__J5ttC__0-1-38","gap-small-1":"gap-small-1__s7o8S__0-1-38","gap-small-2":"gap-small-2__nhKiB__0-1-38","gap-small-3":"gap-small-3__SKBDk__0-1-38","gap-small-4":"gap-small-4__ykzrO__0-1-38","gap-medium-1":"gap-medium-1__dN9up__0-1-38","gap-medium-2":"gap-medium-2__UMXHe__0-1-38","gap-medium-3":"gap-medium-3__OIV7e__0-1-38","gap-medium-4":"gap-medium-4__mfb2I__0-1-38","gap-large-1":"gap-large-1__3BTuu__0-1-38","gap-large-2":"gap-large-2__po1On__0-1-38","gap-large-3":"gap-large-3__fK1OL__0-1-38","gap-large-4":"gap-large-4__1-BZF__0-1-38"};const p=({direction:a={xsmall:"column",small:"column",medium:"column",large:"column"},gap:t={xsmall:1,small:1,medium:1,large:1},children:i})=>{const l=Object.entries(a).map((([e,a])=>o[`direction-${e}-${a}`])).join(" "),_=Object.entries(t).map((([e,a])=>o[`gap-${e}-${a}`])).join(" ");return e.createElement("div",{className:`${o.stack} ${l} ${_}`},i)},g=e=>({0:"var(--eds-spacing-none)",1:"var(--eds-spacing-small-1)",2:"var(--eds-spacing-small-2)",3:"var(--eds-spacing-small-3)",4:"var(--eds-spacing-small-4)",5:"var(--eds-spacing-small-5)",6:"var(--eds-spacing-medium-1)",7:"var(--eds-spacing-medium-2)",8:"var(--eds-spacing-medium-3)",9:"var(--eds-spacing-medium-4)",10:"var(--eds-spacing-medium-5)",11:"var(--eds-spacing-medium-6)",12:"var(--eds-spacing-medium-7)",13:"var(--eds-spacing-medium-8)",14:"var(--eds-spacing-large-1)",15:"var(--eds-spacing-large-2)",16:"var(--eds-spacing-large-3)",17:"var(--eds-spacing-large-4)",18:"var(--eds-spacing-large-5)"}[e]||"0px"),v=({mt:e,mb:a,my:t})=>({marginTop:void 0!==e?g(e):void 0!==t?g(t):void 0,marginBottom:void 0!==a?g(a):void 0!==t?g(t):void 0});function u(e){switch(e){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":case"p":case"ol":case"ul":return e;case"line":return"p";case"list":return"ol";default:return"div"}}var h={"heading-h1":"heading-h1__00OVp__0-1-38","heading-h2":"heading-h2__uf8XO__0-1-38","heading-h3":"heading-h3__b58IP__0-1-38","heading-h4":"heading-h4__x0dIm__0-1-38","heading-h5":"heading-h5__dHW8C__0-1-38","heading-h6":"heading-h6__FSif0__0-1-38","heading-display":"heading-display__1B20E__0-1-38","heading-leadtext":"heading-leadtext__fbf5X__0-1-38","heading-subheadline":"heading-subheadline__xgXDJ__0-1-38","text-p-small":"text-p-small__U5YeB__0-1-38","text-p-default":"text-p-default__T3Gv7__0-1-38","text-p-large":"text-p-large__k4P5K__0-1-38","text-line-tiny":"text-line-tiny__IdKxY__0-1-38","text-line-small":"text-line-small__VDnxz__0-1-38","text-line-default":"text-line-default__HHLev__0-1-38","text-line-large":"text-line-large__zY6Xt__0-1-38","text-list-default":"text-list-default__9dn8h__0-1-38","label-tiny":"label-tiny__fwERw__0-1-38","label-small":"label-small__7hSFb__0-1-38","label-default":"label-default__TzEjW__0-1-38","label-large":"label-large__Xe0s7__0-1-38","text-italic":"text-italic__9j6-k__0-1-38","text-underline":"text-underline__-idVq__0-1-38","text-uppercase":"text-uppercase__zT285__0-1-38","text-400":"text-400__veahz__0-1-38","text-600":"text-600__SOu9h__0-1-38"};const x=({id:a,variant:t,as:i,italic:l=!1,underline:_=!1,weight:n="600",uppercase:r=!1,children:s,className:c,dangerouslySetInnerHTML:m,mt:d,mb:o,my:p,...g})=>{const x=i||u(t),y=`\n        ${h[`heading-${t}`]}\n        ${c}\n        ${l?h["text-italic"]:""}\n        ${_?h["text-underline"]:""}\n        ${n?h[`text-${n}`]:""}\n        ${r?h["text-uppercase"]:""}\n    `,E=v({mt:d,mb:o,my:p});return m?e.createElement(x,{id:a,className:y,style:{...E},dangerouslySetInnerHTML:m,...g}):e.createElement(x,{id:a,className:y,style:{...E},...g},s)},y=({variant:a="p",as:t,size:i="default",italic:l=!1,underline:_=!1,weight:n="400",uppercase:r=!1,children:s,className:c,dangerouslySetInnerHTML:m,mt:d,mb:o,my:p,...g})=>{const x=t||u(a),y=`\n        ${h[`text-${a}-${i}`]}\n        ${c}\n        ${l?h["text-italic"]:""}\n        ${_?h["text-underline"]:""}\n        ${n?h[`text-${n}`]:""}\n        ${r?h["text-uppercase"]:""}\n    `,E=v({mt:d,mb:o,my:p});return m?e.createElement(x,{className:y,dangerouslySetInnerHTML:m,style:{...E},...g}):e.createElement(x,{className:y,style:{...E},...g},s)};var E={header:"header__SJ4jK__0-1-38","header--service":"header--service__zK1oF__0-1-38",alternative:"alternative__mq4Fx__0-1-38",icon:"icon__0a6SJ__0-1-38",content:"content__Xr80z__0-1-38",overline:"overline__N70NJ__0-1-38",title:"title__q-Pzf__0-1-38",description:"description__5DGlO__0-1-38"};const N=({type:a,icon:t,overline:i,title:l,description:_,children:r,background:s="main"})=>{const c=n({[E["header--product"]]:"product"===a,[E["header--service"]]:"service"===a,[E.alternative]:"alternative"===s}),m=t&&e.cloneElement(t,{className:E.icon});return e.createElement("div",{className:`${E.header} ${c}`},m,e.createElement("div",{className:E.content},e.createElement(p,null,i&&e.createElement(x,{uppercase:!0,variant:"subheadline",className:E.overline},i),l&&e.createElement(x,{variant:"h5",className:E.title},l)),_&&e.createElement(y,{className:E.description,variant:"line",size:"small"},_),r))};var f="base__hewbd__0-1-38";const b=({label:a,children:t})=>e.createElement("div",{className:f,"aria-label":a},t);var w="offer__2ifE-__0-1-38",$="product__voe3n__0-1-38",S="service__N1y-k__0-1-38",z="description__5CE-g__0-1-38",O="upper__Z4uKl__0-1-38";const T=a((({type:a,title:t,description:i,infoHint:l},_)=>{const r=n({[$]:"product"===a,[S]:"service"===a});return e.createElement(e.Fragment,null,(t||i)&&e.createElement("div",{className:`${w} ${r}`,ref:_},t&&e.createElement("div",{className:O},e.createElement(y,{size:"small",weight:"600"},t),l),i&&e.createElement(y,{variant:"line",size:"small",className:z},i)))}));T.displayName="ComparisonCardOffer";var I="base__uah8k__0-1-38",k="short__G86dO__0-1-38",H="title__R5VoL__0-1-38",P="value__NdSF3__0-1-38",F="long__FSLtq__0-1-38",K="container__wIZTw__0-1-38";const j=({type:a,title:t,value:i,infoHint:l})=>{const _=n({[I]:!0,[k]:"short"===a,[F]:"long"===a});return e.createElement("div",{className:_},e.createElement(y,{variant:"line",weight:"long"===a?"600":void 0,className:H},t),e.createElement("div",{className:K},e.createElement(y,{variant:"line",weight:"short"===a?"600":void 0,className:P},i),l))};var D="base__OeRFG__0-1-38",L="price_section__qY60t__0-1-38",X="primary__cL6PR__0-1-38",B="primary_value__VsRRU__0-1-38",R="price__dueWy__0-1-38",V="primary_prefix__VjZTn__0-1-38",G="primary_suffix__EBVBk__0-1-38",M="description__kQvlG__0-1-38",q="secondary__diuxV__0-1-38",J="tertiary__ML-A3__0-1-38",Z="secondary_service__GowTT__0-1-38",C="tertiary_service__NdX5I__0-1-38",Y="secondary_value__Io1DK__0-1-38",A="tertiary_price__PAF7z__0-1-38",U="column__z9-oK__0-1-38",W="tertiary_value__7RZv0__0-1-38",Q="secondary_price__DOQav__0-1-38",ee="link__Nkzih__0-1-38",ae="notification__joH6G__0-1-38",te="upper__KyjDs__0-1-38",ie="notification_title__nNFMI__0-1-38";const le=({primary:a,primaryTitle:t,primaryPrefix:i,primaryPrice:l,primarySuffix:_,primaryDescription:n,secondary:r,secondaryTitle:s,secondaryInfoHint:c,secondaryPrefix:m,secondaryPrice:d,secondarySuffix:o,secondaryDescription:p,tertiary:g,tertiaryTitle:v,tertiaryInfoHint:u,tertiaryPrefix:h,tertiaryPrice:E,tertiarySuffix:N,tertiaryDescription:f,children:b,notificationTitle:w,notificationDescription:$,notificationInfoHint:S})=>e.createElement("div",{className:D},a&&e.createElement("div",{className:L},e.createElement("div",{className:X},t&&e.createElement(y,{variant:"line"},t),l&&e.createElement("div",{className:B},i&&e.createElement(y,{className:V,variant:"line",weight:"600"},i),e.createElement(x,{variant:"h4",className:R},l),_&&e.createElement(y,{className:G,variant:"line",weight:"600"},_)),n&&e.createElement(y,{variant:"line",...t||l?{size:"small"}:{weight:"600"},className:M},n)),r&&e.createElement("div",{className:q},e.createElement("div",{className:Z},e.createElement("div",{className:`${Y} ${m||o?U:""}`},e.createElement(y,{variant:"line"},s),e.createElement("div",{className:Q},m&&e.createElement(y,{variant:"line",weight:"600"},m),e.createElement(y,{className:R,variant:"line",weight:"600"},d),o&&e.createElement(y,{variant:"line",weight:"600"},o))),c),p&&e.createElement(y,{variant:"line",size:"small",className:M},p)),g&&e.createElement("div",{className:J},e.createElement("div",{className:C},e.createElement("div",{className:`${W} ${h||N?U:""}`},e.createElement(y,{variant:"line"},v),e.createElement("div",{className:A},h&&e.createElement(y,{variant:"line",weight:"600"},h),e.createElement(y,{className:R,variant:"line",weight:"600"},E),N&&e.createElement(y,{variant:"line",weight:"600"},N))),u),f&&e.createElement(y,{variant:"line",size:"small",className:M},f)),b&&e.createElement("div",{className:ee},b)),(w||$)&&e.createElement("div",{className:ae},w&&e.createElement("div",{className:te},e.createElement(y,{variant:"line",size:"small",weight:"600",className:ie},w),S),$&&e.createElement(y,{variant:"line",size:"small",className:M},$)));export{i as ComparisonCard,c as ComparisonCardDetails,d as ComparisonCardFooter,N as ComparisonCardHeader,b as ComparisonCardImages,T as ComparisonCardOffer,j as ComparisonCardParameter,le as ComparisonCardPrice};
//# sourceMappingURL=index.js.map
