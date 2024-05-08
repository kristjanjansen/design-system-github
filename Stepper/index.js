"use client";import*as e from"react";import t from"react";var _,l={exports:{}};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/_=l,function(){var e={}.hasOwnProperty;function t(){for(var _=[],l=0;l<arguments.length;l++){var p=arguments[l];if(p){var a=typeof p;if("string"===a||"number"===a)_.push(p);else if(Array.isArray(p)){if(p.length){var r=t.apply(null,p);r&&_.push(r)}}else if("object"===a){if(p.toString!==Object.prototype.toString&&!p.toString.toString().includes("[native code]")){_.push(p.toString());continue}for(var s in p)e.call(p,s)&&p[s]&&_.push(s)}}}return _.join(" ")}_.exports?(t.default=t,_.exports=t):window.classNames=t}();var p=l.exports,a={icon:"icon__ytOkq__0-1-38","icon--white":"icon--white__uY-bp__0-1-38","icon--primary":"icon--primary__jt3hh__0-1-38","icon--xs":"icon--xs__h9RS5__0-1-38","icon--sm":"icon--sm__-aRKu__0-1-38","icon--md":"icon--md__YmrCk__0-1-38","icon--lg":"icon--lg__-Ia-7__0-1-38","icon--xl":"icon--xl__F69Yf__0-1-38","icon--2xl":"icon--2xl__8CeF8__0-1-38","icon--3xl":"icon--3xl__U0X2t__0-1-38"};function r({size:e,color:_,className:l,children:r,...s}){return t.createElement("svg",{...s,className:p(l,a.icon,{[a[`icon--${e}`]]:e,[a[`icon--${_}`]]:_})},r)}function s(t){return e.createElement(r,{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 128 128",...t},e.createElement("path",{d:"M52.07 102.24a2 2 0 0 1-1.56-.74l-35-43.07a2 2 0 1 1 3.1-2.52l33.45 41.16 57.32-70.57a2 2 0 1 1 3.1 2.52L53.62 101.5a2 2 0 0 1-1.55.74Z"}))}var n={"heading-h1":"heading-h1__00OVp__0-1-38","heading-h2":"heading-h2__uf8XO__0-1-38","heading-h3":"heading-h3__b58IP__0-1-38","heading-h4":"heading-h4__x0dIm__0-1-38","heading-h5":"heading-h5__dHW8C__0-1-38","heading-h6":"heading-h6__FSif0__0-1-38","heading-display":"heading-display__1B20E__0-1-38","heading-leadtext":"heading-leadtext__fbf5X__0-1-38","heading-subheadline":"heading-subheadline__xgXDJ__0-1-38","text-p-small":"text-p-small__U5YeB__0-1-38","text-p-default":"text-p-default__T3Gv7__0-1-38","text-p-large":"text-p-large__k4P5K__0-1-38","text-line-tiny":"text-line-tiny__IdKxY__0-1-38","text-line-small":"text-line-small__VDnxz__0-1-38","text-line-default":"text-line-default__HHLev__0-1-38","text-line-large":"text-line-large__zY6Xt__0-1-38","text-list-default":"text-list-default__9dn8h__0-1-38","label-tiny":"label-tiny__fwERw__0-1-38","label-small":"label-small__7hSFb__0-1-38","label-default":"label-default__TzEjW__0-1-38","label-large":"label-large__Xe0s7__0-1-38","text-italic":"text-italic__9j6-k__0-1-38","text-underline":"text-underline__-idVq__0-1-38","text-uppercase":"text-uppercase__zT285__0-1-38","text-400":"text-400__veahz__0-1-38","text-600":"text-600__SOu9h__0-1-38"};const i=({id:e,size:_="default",children:l,italic:p=!1,underline:a=!1,weight:r="400",uppercase:s=!1,className:i,...c})=>{const o=`\n        ${n[`label-${_}`]}\n        ${i}\n        ${p?n["text-italic"]:""}\n        ${a?n["text-underline"]:""}\n        ${r?n[`text-${r}`]:""}\n        ${s?n["text-uppercase"]:""}\n    `;return t.createElement("label",{id:e,className:o,...c},l)};var c={base:"base__9stND__0-1-38",stepper:"stepper__u9EgD__0-1-38",stepper__label:"stepper__label__HCukQ__0-1-38","stepper__label-current":"stepper__label-current__CQFBe__0-1-38","stepper__label-current-text":"stepper__label-current-text__JMP0f__0-1-38","stepper__label-next":"stepper__label-next__PGScH__0-1-38","stepper__step-line":"stepper__step-line__SpUhj__0-1-38",stepper__step:"stepper__step__Osqls__0-1-38","stepper__step-icon":"stepper__step-icon__JPBrl__0-1-38","stepper__step-content":"stepper__step-content__hQlWe__0-1-38","stepper__step-indicator":"stepper__step-indicator__MeELg__0-1-38","stepper__step-label":"stepper__step-label__c8kBV__0-1-38","stepper__step--current-indicator":"stepper__step--current-indicator__ZIYRg__0-1-38","stepper__step--current-label":"stepper__step--current-label__RZwB3__0-1-38","stepper__step--upcoming-indicator":"stepper__step--upcoming-indicator__R6-FW__0-1-38","stepper__step--upcoming-label":"stepper__step--upcoming-label__jvpMG__0-1-38","stepper__step--complete-line":"stepper__step--complete-line__QJ72P__0-1-38","stepper__step--complete-indicator":"stepper__step--complete-indicator__eFeZb__0-1-38","stepper__step--complete-label":"stepper__step--complete-label__w1rEe__0-1-38"};const o=({children:e,status:_,className:l,...a})=>t.createElement("li",{className:p(c.stepper__step,c[`stepper__step--${_}`],l),"aria-current":"current"===_,...a},t.createElement("div",{className:p(c["stepper__step-line"],c[`stepper__step--${_}-line`])}),t.createElement("div",{className:c["stepper__step-content"]},t.createElement("div",{className:p(c["stepper__step-indicator"],c[`stepper__step--${_}-indicator`])},"complete"===_&&t.createElement(s,{"aria-hidden":"true",className:c["stepper__step-icon"]})),e&&t.createElement(i,{className:p(c["stepper__step-label"],c[`stepper__step--${_}-label`]),weight:"600"},e))),d=({children:e,className:_,currentStepTitle:l,currentStepLabel:a,nextStepTitle:r,nextStepLabel:s,...n})=>{const i=l&&a,o=r&&s;return t.createElement("div",{className:c.base},t.createElement("ol",{className:p(c.stepper,_),...n},e),(i||o)&&t.createElement("div",{className:c.stepper__label},i&&t.createElement("div",{className:c["stepper__label-current"]},l,":"," ",t.createElement("span",{className:c["stepper__label-current-text"]},a)),o&&t.createElement("div",{className:c["stepper__label-next"]},r,": ",s)))};export{o as ProcessStep,d as Stepper};
//# sourceMappingURL=index.js.map
