"use client";import e from"react";var t,o={exports:{}};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/t=o,function(){var e={}.hasOwnProperty;function o(){for(var t=[],n=0;n<arguments.length;n++){var c=arguments[n];if(c){var r=typeof c;if("string"===r||"number"===r)t.push(c);else if(Array.isArray(c)){if(c.length){var s=o.apply(null,c);s&&t.push(s)}}else if("object"===r){if(c.toString!==Object.prototype.toString&&!c.toString.toString().includes("[native code]")){t.push(c.toString());continue}for(var a in c)e.call(c,a)&&c[a]&&t.push(a)}}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):window.classNames=o}();var n=o.exports,c="base__fB-Cc__0-1-40";const r=({children:t,className:o})=>e.createElement("div",{className:n(c,o)},t);var s={base:"base__SGHrj__0-1-40","base--alternative":"base--alternative__1DOEw__0-1-40","two-column-section":"two-column-section__YlHhk__0-1-40","content-column":"content-column__Fqcjs__0-1-40","image-column":"image-column__I-8eS__0-1-40","two-column-section--row":"two-column-section--row__4w9Dg__0-1-40","two-column-section--row-reverse":"two-column-section--row-reverse__5RIDm__0-1-40","two-column-section--half":"two-column-section--half__k0gbI__0-1-40","two-column-section--imageTwoThirds":"two-column-section--imageTwoThirds__dkl0r__0-1-40","two-column-section--contentTwoThirds":"two-column-section--contentTwoThirds__Y352F__0-1-40"};const a=({children:t,direction:o="row",layout:c="half",background:a,...l})=>{const{className:i,...m}=l;return e.createElement("section",{className:n(s.base,i,{[s["base--alternative"]]:"alternative"===a}),...m},e.createElement(r,null,e.createElement("div",{className:n(s["two-column-section"],s[`two-column-section--${o}`],s[`two-column-section--${c}`])},t)))},l=({children:t})=>e.createElement("div",{className:n(s["image-column"])},t),i=({children:t})=>e.createElement("div",{className:n(s["content-column"])},t);export{a as ImageSection,i as ImageSectionContent,l as ImageSectionImage};
//# sourceMappingURL=index.js.map
