"use client";import e from"react";var r,t={exports:{}};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/r=t,function(){var e={}.hasOwnProperty;function t(){for(var r=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var o=typeof a;if("string"===o||"number"===o)r.push(a);else if(Array.isArray(a)){if(a.length){var s=t.apply(null,a);s&&r.push(s)}}else if("object"===o){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){r.push(a.toString());continue}for(var i in a)e.call(a,i)&&a[i]&&r.push(i)}}}return r.join(" ")}r.exports?(t.default=t,r.exports=t):window.classNames=t}();var n=t.exports,a="base__hZDp9__0-1-34",o="unordered__CcfjF__0-1-34",s="ordered__s7DuQ__0-1-34",i="inverted__52WRY__0-1-34";const l=({format:r,children:t,inverted:l,className:c})=>{const u="ordered"===r?"ol":"ul",d="ordered"===r?s:o;return e.createElement(u,{className:n(a,d,c,{[i]:l})},t)},c=({children:r,className:t,dangerouslySetInnerHTML:n})=>n?e.createElement("li",{className:t,dangerouslySetInnerHTML:n}):e.createElement("li",{className:t},r);export{l as List,c as ListItem};
//# sourceMappingURL=index.js.map
