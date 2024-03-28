"use client";import e,{useRef as t,useDebugValue as n,createElement as r,useContext as o}from"react";var a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)};function s(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}function i(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}var c=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,l=i((function(e){return c.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),u="-ms-",p="-moz-",d="-webkit-",h="comm",f="rule",m="decl",g="@import",y="@keyframes",v="@layer",b=Math.abs,w=String.fromCharCode,_=Object.assign;function S(e){return e.trim()}function k(e,t){return(e=t.exec(e))?e[0]:e}function x(e,t,n){return e.replace(t,n)}function C(e,t,n){return e.indexOf(t,n)}function E(e,t){return 0|e.charCodeAt(t)}function A(e,t,n){return e.slice(t,n)}function P(e){return e.length}function N(e){return e.length}function O(e,t){return t.push(e),e}function I(e,t){return e.filter((function(e){return!k(e,t)}))}var R=1,T=1,$=0,D=0,j=0,z="";function M(e,t,n,r,o,a,s,i){return{value:e,root:t,parent:n,type:r,props:o,children:a,line:R,column:T,length:s,return:"",siblings:i}}function L(e,t){return _(M("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function F(e){for(;e.root;)e=L(e.root,{children:[e]});O(e,e.siblings)}function B(){return j=D>0?E(z,--D):0,T--,10===j&&(T=1,R--),j}function V(){return j=D<$?E(z,D++):0,T++,10===j&&(T=1,R++),j}function H(){return E(z,D)}function G(){return D}function Y(e,t){return A(z,e,t)}function W(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function q(e){return S(Y(D-1,K(91===e?e+2:40===e?e+1:e)))}function U(e){for(;(j=H())&&j<33;)V();return W(e)>2||W(j)>3?"":" "}function X(e,t){for(;--t&&V()&&!(j<48||j>102||j>57&&j<65||j>70&&j<97););return Y(e,G()+(t<6&&32==H()&&32==V()))}function K(e){for(;V();)switch(j){case e:return D;case 34:case 39:34!==e&&39!==e&&K(j);break;case 40:41===e&&K(e);break;case 92:V()}return D}function Z(e,t){for(;V()&&e+j!==57&&(e+j!==84||47!==H()););return"/*"+Y(t,D-1)+"*"+w(47===e?e:V())}function J(e){for(;!W(H());)V();return Y(e,D)}function Q(e){return function(e){return z="",e}(ee("",null,null,null,[""],e=function(e){return R=T=1,$=P(z=e),D=0,[]}(e),0,[0],e))}function ee(e,t,n,r,o,a,s,i,c){for(var l=0,u=0,p=s,d=0,h=0,f=0,m=1,g=1,y=1,v=0,_="",S=o,k=a,A=r,N=_;g;)switch(f=v,v=V()){case 40:if(108!=f&&58==E(N,p-1)){-1!=C(N+=x(q(v),"&","&\f"),"&\f",b(l?i[l-1]:0))&&(y=-1);break}case 34:case 39:case 91:N+=q(v);break;case 9:case 10:case 13:case 32:N+=U(f);break;case 92:N+=X(G()-1,7);continue;case 47:switch(H()){case 42:case 47:O(ne(Z(V(),G()),t,n,c),c);break;default:N+="/"}break;case 123*m:i[l++]=P(N)*y;case 125*m:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:-1==y&&(N=x(N,/\f/g,"")),h>0&&P(N)-p&&O(h>32?re(N+";",r,n,p-1,c):re(x(N," ","")+";",r,n,p-2,c),c);break;case 59:N+=";";default:if(O(A=te(N,t,n,l,u,o,i,_,S=[],k=[],p,a),a),123===v)if(0===u)ee(N,t,A,A,S,a,p,i,k);else switch(99===d&&110===E(N,3)?100:d){case 100:case 108:case 109:case 115:ee(e,A,A,r&&O(te(e,A,A,0,0,o,i,_,o,S=[],p,k),k),o,k,p,i,r?S:k);break;default:ee(N,A,A,A,[""],k,0,i,k)}}l=u=h=0,m=y=1,_=N="",p=s;break;case 58:p=1+P(N),h=f;default:if(m<1)if(123==v)--m;else if(125==v&&0==m++&&125==B())continue;switch(N+=w(v),v*m){case 38:y=u>0?1:(N+="\f",-1);break;case 44:i[l++]=(P(N)-1)*y,y=1;break;case 64:45===H()&&(N+=q(V())),d=H(),u=p=P(_=N+=J(G())),v++;break;case 45:45===f&&2==P(N)&&(m=0)}}return a}function te(e,t,n,r,o,a,s,i,c,l,u,p){for(var d=o-1,h=0===o?a:[""],m=N(h),g=0,y=0,v=0;g<r;++g)for(var w=0,_=A(e,d+1,d=b(y=s[g])),k=e;w<m;++w)(k=S(y>0?h[w]+" "+_:x(_,/&\f/g,h[w])))&&(c[v++]=k);return M(e,t,n,0===o?f:i,c,l,u,p)}function ne(e,t,n,r){return M(e,t,n,h,w(j),A(e,2,-2),0,r)}function re(e,t,n,r,o){return M(e,t,n,m,A(e,0,r),A(e,r+1,-1),r,o)}function oe(e,t,n){switch(function(e,t){return 45^E(e,0)?(((t<<2^E(e,0))<<2^E(e,1))<<2^E(e,2))<<2^E(e,3):0}(e,t)){case 5103:return d+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return d+e+e;case 4789:return p+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return d+e+p+e+u+e+e;case 5936:switch(E(e,t+11)){case 114:return d+e+u+x(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return d+e+u+x(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return d+e+u+x(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return d+e+u+e+e;case 6165:return d+e+u+"flex-"+e+e;case 5187:return d+e+x(e,/(\w+).+(:[^]+)/,d+"box-$1$2"+u+"flex-$1$2")+e;case 5443:return d+e+u+"flex-item-"+x(e,/flex-|-self/g,"")+(k(e,/flex-|baseline/)?"":u+"grid-row-"+x(e,/flex-|-self/g,""))+e;case 4675:return d+e+u+"flex-line-pack"+x(e,/align-content|flex-|-self/g,"")+e;case 5548:return d+e+u+x(e,"shrink","negative")+e;case 5292:return d+e+u+x(e,"basis","preferred-size")+e;case 6060:return d+"box-"+x(e,"-grow","")+d+e+u+x(e,"grow","positive")+e;case 4554:return d+x(e,/([^-])(transform)/g,"$1"+d+"$2")+e;case 6187:return x(x(x(e,/(zoom-|grab)/,d+"$1"),/(image-set)/,d+"$1"),e,"")+e;case 5495:case 3959:return x(e,/(image-set\([^]*)/,d+"$1$`$1");case 4968:return x(x(e,/(.+:)(flex-)?(.*)/,d+"box-pack:$3"+u+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+d+e+e;case 4200:if(!k(e,/flex-|baseline/))return u+"grid-column-align"+A(e,t)+e;break;case 2592:case 3360:return u+x(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,k(e.props,/grid-\w+-end/)}))?~C(e+(n=n[t].value),"span",0)?e:u+x(e,"-start","")+e+u+"grid-row-span:"+(~C(n,"span",0)?k(n,/\d+/):+k(n,/\d+/)-+k(e,/\d+/))+";":u+x(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return k(e.props,/grid-\w+-start/)}))?e:u+x(x(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return x(e,/(.+)-inline(.+)/,d+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(P(e)-1-t>6)switch(E(e,t+1)){case 109:if(45!==E(e,t+4))break;case 102:return x(e,/(.+:)(.+)-([^]+)/,"$1"+d+"$2-$3$1"+p+(108==E(e,t+3)?"$3":"$2-$3"))+e;case 115:return~C(e,"stretch",0)?oe(x(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return x(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,o,a,s,i){return u+n+":"+r+i+(o?u+n+"-span:"+(a?s:+s-+r)+i:"")+e}));case 4949:if(121===E(e,t+6))return x(e,":",":"+d)+e;break;case 6444:switch(E(e,45===E(e,14)?18:11)){case 120:return x(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+d+(45===E(e,14)?"inline-":"")+"box$3$1"+d+"$2$3$1"+u+"$2box$3")+e;case 100:return x(e,":",":"+u)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return x(e,"scroll-","scroll-snap-")+e}return e}function ae(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function se(e,t,n,r){switch(e.type){case v:if(e.children.length)break;case g:case m:return e.return=e.return||e.value;case h:return"";case y:return e.return=e.value+"{"+ae(e.children,r)+"}";case f:if(!P(e.value=e.props.join(",")))return""}return P(n=ae(e.children,r))?e.return=e.value+"{"+n+"}":""}function ie(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case m:return void(e.return=oe(e.value,e.length,n));case y:return ae([L(e,{value:x(e.value,"@","@"+d)})],r);case f:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(k(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":F(L(e,{props:[x(t,/:(read-\w+)/,":"+p+"$1")]})),F(L(e,{props:[t]})),_(e,{props:I(n,r)});break;case"::placeholder":F(L(e,{props:[x(t,/:(plac\w+)/,":"+d+"input-$1")]})),F(L(e,{props:[x(t,/:(plac\w+)/,":"+p+"$1")]})),F(L(e,{props:[x(t,/:(plac\w+)/,u+"input-$1")]})),F(L(e,{props:[t]})),_(e,{props:I(n,r)})}return""}))}}var ce={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},le="undefined"!=typeof process&&void 0!==process.env&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",ue="active",pe="data-styled-version",de="6.1.8",he="/*!sc*/\n",fe="undefined"!=typeof window&&"HTMLElement"in window,me=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:"production"!==process.env.NODE_ENV),ge=/invalid hook call/i,ye=new Set,ve=function(e,n){if("production"!==process.env.NODE_ENV){var r=n?' with the id of "'.concat(n,'"'):"",o="The component ".concat(e).concat(r," has been created dynamically.\n")+"You may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.",a=console.error;try{var i=!0;console.error=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];ge.test(e)?(i=!1,ye.delete(o)):a.apply(void 0,s([e],t,!1))},t(),i&&!ye.has(o)&&(console.warn(o),ye.add(o))}catch(e){ge.test(e.message)&&ye.delete(o)}finally{console.error=a}}},be=Object.freeze([]),we=Object.freeze({});var _e=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Se=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ke=/(^-|-$)/g;function xe(e){return e.replace(Se,"-").replace(ke,"")}var Ce=/(a)(d)/gi,Ee=52,Ae=function(e){return String.fromCharCode(e+(e>25?39:97))};function Pe(e){var t,n="";for(t=Math.abs(e);t>Ee;t=t/Ee|0)n=Ae(t%Ee)+n;return(Ae(t%Ee)+n).replace(Ce,"$1-$2")}var Ne,Oe=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Ie=function(e){return Oe(5381,e)};function Re(e){return"production"!==process.env.NODE_ENV&&"string"==typeof e&&e||e.displayName||e.name||"Component"}function Te(e){return"string"==typeof e&&("production"===process.env.NODE_ENV||e.charAt(0)===e.charAt(0).toLowerCase())}var $e="function"==typeof Symbol&&Symbol.for,De=$e?Symbol.for("react.memo"):60115,je=$e?Symbol.for("react.forward_ref"):60112,ze={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Me={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Le={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Fe=((Ne={})[je]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ne[De]=Le,Ne);function Be(e){return("type"in(t=e)&&t.type.$$typeof)===De?Le:"$$typeof"in e?Fe[e.$$typeof]:ze;var t}var Ve=Object.defineProperty,He=Object.getOwnPropertyNames,Ge=Object.getOwnPropertySymbols,Ye=Object.getOwnPropertyDescriptor,We=Object.getPrototypeOf,qe=Object.prototype;function Ue(e,t,n){if("string"!=typeof t){if(qe){var r=We(t);r&&r!==qe&&Ue(e,r,n)}var o=He(t);Ge&&(o=o.concat(Ge(t)));for(var a=Be(e),s=Be(t),i=0;i<o.length;++i){var c=o[i];if(!(c in Me||n&&n[c]||s&&c in s||a&&c in a)){var l=Ye(t,c);try{Ve(e,c,l)}catch(e){}}}}return e}function Xe(e){return"function"==typeof e}function Ke(e){return"object"==typeof e&&"styledComponentId"in e}function Ze(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Je(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Qe(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function et(e,t,n){if(void 0===n&&(n=!1),!n&&!Qe(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=et(e[r],t[r]);else if(Qe(t))for(var r in t)e[r]=et(e[r],t[r]);return e}function tt(e,t){Object.defineProperty(e,"toString",{value:t})}var nt="production"!==process.env.NODE_ENV?{1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n",18:"ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`"}:{};function rt(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=e[0],r=[],o=1,a=e.length;o<a;o+=1)r.push(e[o]);return r.forEach((function(e){n=n.replace(/%[a-z]/,e)})),n}function ot(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return"production"===process.env.NODE_ENV?new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):"")):new Error(rt.apply(void 0,s([nt[e]],t,!1)).trim())}var at=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)if((o<<=1)<0)throw ot(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var a=r;a<o;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(e+1),i=(a=0,t.length);a<i;a++)this.tag.insertRule(s,t[a])&&(this.groupSizes[e]++,s++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,a=r;a<o;a++)t+="".concat(this.tag.getRule(a)).concat(he);return t},e}(),st=new Map,it=new Map,ct=1,lt=function(e){if(st.has(e))return st.get(e);for(;it.has(ct);)ct++;var t=ct++;if("production"!==process.env.NODE_ENV&&((0|t)<0||t>1073741824))throw ot(16,"".concat(t));return st.set(e,t),it.set(t,e),t},ut=function(e,t){ct=t+1,st.set(e,t),it.set(t,e)},pt="style[".concat(le,"][").concat(pe,'="').concat(de,'"]'),dt=new RegExp("^".concat(le,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ht=function(e,t,n){for(var r,o=n.split(","),a=0,s=o.length;a<s;a++)(r=o[a])&&e.registerName(t,r)},ft=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(he),o=[],a=0,s=r.length;a<s;a++){var i=r[a].trim();if(i){var c=i.match(dt);if(c){var l=0|parseInt(c[1],10),u=c[2];0!==l&&(ut(u,l),ht(e,u,c[3]),e.getTag().insertRules(l,o)),o.length=0}else o.push(i)}}};var mt=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(le,"]")));return t[t.length-1]}(n),a=void 0!==o?o.nextSibling:null;r.setAttribute(le,ue),r.setAttribute(pe,de);var s="undefined"!=typeof __webpack_nonce__?__webpack_nonce__:null;return s&&r.setAttribute("nonce",s),n.insertBefore(r,a),r},gt=function(){function e(e){this.element=mt(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}throw ot(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),yt=function(){function e(e){this.element=mt(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),vt=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),bt=fe,wt={isServer:!fe,useCSSOMInjection:!me},_t=function(){function e(e,t,n){void 0===e&&(e=we),void 0===t&&(t={});var r=this;this.options=a(a({},wt),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&fe&&bt&&(bt=!1,function(e){for(var t=document.querySelectorAll(pt),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(le)!==ue&&(ft(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this)),tt(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=function(n){var o=function(e){return it.get(e)}(n);if(void 0===o)return"continue";var a=e.names.get(o),s=t.getGroup(n);if(void 0===a||0===s.length)return"continue";var i="".concat(le,".g").concat(n,'[id="').concat(o,'"]'),c="";void 0!==a&&a.forEach((function(e){e.length>0&&(c+="".concat(e,","))})),r+="".concat(s).concat(i,'{content:"').concat(c,'"}').concat(he)},a=0;a<n;a++)o(a);return r}(r)}))}return e.registerId=function(e){return lt(e)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(a(a({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new vt(n):t?new gt(n):new yt(n)}(this.options),new at(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(lt(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(lt(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(lt(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),St=/&/g,kt=/^\s*\/\/.*$/gm;function xt(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=xt(e.children,t)),e}))}var Ct=new _t,Et=function(e){var t,n,r,o=void 0===e?we:e,a=o.options,s=void 0===a?we:a,i=o.plugins,c=void 0===i?be:i,l=function(e,r,o){return o.startsWith(n)&&o.endsWith(n)&&o.replaceAll(n,"").length>0?".".concat(t):e},u=c.slice();u.push((function(e){e.type===f&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(St,n).replace(r,l))})),s.prefix&&u.push(ie),u.push(se);var p=function(e,o,a,i){void 0===o&&(o=""),void 0===a&&(a=""),void 0===i&&(i="&"),t=i,n=o,r=new RegExp("\\".concat(n,"\\b"),"g");var c=e.replace(kt,""),l=Q(a||o?"".concat(a," ").concat(o," { ").concat(c," }"):c);s.namespace&&(l=xt(l,s.namespace));var p,d=[];return ae(l,function(e){var t=N(e);return function(n,r,o,a){for(var s="",i=0;i<t;i++)s+=e[i](n,r,o,a)||"";return s}}(u.concat((p=function(e){return d.push(e)},function(e){e.root||(e=e.return)&&p(e)})))),d};return p.hash=c.length?c.reduce((function(e,t){return t.name||ot(15),Oe(e,t.name)}),5381).toString():"",p}(),At=e.createContext({shouldForwardProp:void 0,styleSheet:Ct,stylis:Et});function Pt(){return o(At)}At.Consumer,e.createContext(void 0);var Nt=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Et);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,tt(this,(function(){throw ot(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=Et),this.name+e.hash},e}(),Ot=function(e){return e>="A"&&e<="Z"};function It(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Ot(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Rt=function(e){return null==e||!1===e||""===e},Tt=function(e){var t,n,r=[];for(var o in e){var a=e[o];e.hasOwnProperty(o)&&!Rt(a)&&(Array.isArray(a)&&a.isCss||Xe(a)?r.push("".concat(It(o),":"),a,";"):Qe(a)?r.push.apply(r,s(s(["".concat(o," {")],Tt(a),!1),["}"],!1)):r.push("".concat(It(o),": ").concat((t=o,null==(n=a)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in ce||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function $t(e,t,n,r){if(Rt(e))return[];if(Ke(e))return[".".concat(e.styledComponentId)];if(Xe(e)){if(!Xe(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var o=e(t);return"production"===process.env.NODE_ENV||"object"!=typeof o||Array.isArray(o)||o instanceof Nt||Qe(o)||null===o||console.error("".concat(Re(e)," is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")),$t(o,t,n,r)}var a;return e instanceof Nt?n?(e.inject(n,r),[e.getName(r)]):[e]:Qe(e)?Tt(e):Array.isArray(e)?Array.prototype.concat.apply(be,e.map((function(e){return $t(e,t,n,r)}))):[e.toString()]}var Dt=Ie(de),jt=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic="production"===process.env.NODE_ENV&&(void 0===n||n.isStatic)&&function(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Xe(n)&&!Ke(n))return!1}return!0}(e),this.componentId=t,this.baseHash=Oe(Dt,t),this.baseStyle=n,_t.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Ze(r,this.staticRulesId);else{var o=Je($t(this.rules,e,t,n)),a=Pe(Oe(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,a)){var s=n(o,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,s)}r=Ze(r,a),this.staticRulesId=a}else{for(var i=Oe(this.baseHash,n.hash),c="",l=0;l<this.rules.length;l++){var u=this.rules[l];if("string"==typeof u)c+=u,"production"!==process.env.NODE_ENV&&(i=Oe(i,u));else if(u){var p=Je($t(u,e,t,n));i=Oe(i,p+l),c+=p}}if(c){var d=Pe(i>>>0);t.hasNameForId(this.componentId,d)||t.insertRules(this.componentId,d,n(c,".".concat(d),void 0,this.componentId)),r=Ze(r,d)}}return r},e}(),zt=e.createContext(void 0);zt.Consumer;var Mt={},Lt=new Set;function Ft(t,o,s){var i=Ke(t),c=t,u=!Te(t),p=o.attrs,d=void 0===p?be:p,h=o.componentId,f=void 0===h?function(e,t){var n="string"!=typeof e?"sc":xe(e);Mt[n]=(Mt[n]||0)+1;var r="".concat(n,"-").concat(function(e){return Pe(Ie(e)>>>0)}(de+n+Mt[n]));return t?"".concat(t,"-").concat(r):r}(o.displayName,o.parentComponentId):h,m=o.displayName,g=void 0===m?function(e){return Te(e)?"styled.".concat(e):"Styled(".concat(Re(e),")")}(t):m,y=o.displayName&&o.componentId?"".concat(xe(o.displayName),"-").concat(o.componentId):o.componentId||f,v=i&&c.attrs?c.attrs.concat(d).filter(Boolean):d,b=o.shouldForwardProp;if(i&&c.shouldForwardProp){var w=c.shouldForwardProp;if(o.shouldForwardProp){var _=o.shouldForwardProp;b=function(e,t){return w(e,t)&&_(e,t)}}else b=w}var S=new jt(s,y,i?c.componentStyle:void 0);function k(t,o){return function(t,o,s){var i=t.attrs,c=t.componentStyle,u=t.defaultProps,p=t.foldedComponentIds,d=t.styledComponentId,h=t.target,f=e.useContext(zt),m=Pt(),g=t.shouldForwardProp||m.shouldForwardProp;"production"!==process.env.NODE_ENV&&n(d);var y=function(e,t,n){return void 0===n&&(n=we),e.theme!==n.theme&&e.theme||t||n.theme}(o,f,u)||we,v=function(e,t,n){for(var r,o=a(a({},t),{className:void 0,theme:n}),s=0;s<e.length;s+=1){var i=Xe(r=e[s])?r(o):r;for(var c in i)o[c]="className"===c?Ze(o[c],i[c]):"style"===c?a(a({},o[c]),i[c]):i[c]}return t.className&&(o.className=Ze(o.className,t.className)),o}(i,o,y),b=v.as||h,w={};for(var _ in v)void 0===v[_]||"$"===_[0]||"as"===_||"theme"===_&&v.theme===y||("forwardedAs"===_?w.as=v.forwardedAs:g&&!g(_,b)||(w[_]=v[_],g||"development"!==process.env.NODE_ENV||l(_)||Lt.has(_)||!_e.has(b)||(Lt.add(_),console.warn('styled-components: it looks like an unknown prop "'.concat(_,'" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));var S=function(e,t){var r=Pt(),o=e.generateAndInjectStyles(t,r.styleSheet,r.stylis);return"production"!==process.env.NODE_ENV&&n(o),o}(c,v);"production"!==process.env.NODE_ENV&&t.warnTooManyClasses&&t.warnTooManyClasses(S);var k=Ze(p,d);return S&&(k+=" "+S),v.className&&(k+=" "+v.className),w[Te(b)&&!_e.has(b)?"class":"className"]=k,w.ref=s,r(b,w)}(x,t,o)}k.displayName=g;var x=e.forwardRef(k);return x.attrs=v,x.componentStyle=S,x.displayName=g,x.shouldForwardProp=b,x.foldedComponentIds=i?Ze(c.foldedComponentIds,c.styledComponentId):"",x.styledComponentId=y,x.target=i?c.target:t,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,o=t;r<o.length;r++)et(e,o[r],!0);return e}({},c.defaultProps,e):e}}),"production"!==process.env.NODE_ENV&&(ve(g,y),x.warnTooManyClasses=function(e,t){var n={},r=!1;return function(o){if(!r&&(n[o]=!0,Object.keys(n).length>=200)){var a=t?' with the id of "'.concat(t,'"'):"";console.warn("Over ".concat(200," classes were generated for component ").concat(e).concat(a,".\n")+"Consider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"),r=!0,n={}}}}(g,y)),tt(x,(function(){return".".concat(x.styledComponentId)})),u&&Ue(x,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function Bt(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Vt=function(e){return Object.assign(e,{isCss:!0})};function Ht(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Xe(e)||Qe(e))return Vt($t(Bt(be,s([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?$t(r):Vt($t(Bt(r,t)))}function Gt(e,t,n){if(void 0===n&&(n=we),!t)throw ot(1,t);var r=function(r){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,Ht.apply(void 0,s([r],o,!1)))};return r.attrs=function(r){return Gt(e,t,a(a({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return Gt(e,t,a(a({},n),r))},r}var Yt=function(e){return Gt(Ft,e)},Wt=Yt;_e.forEach((function(e){Wt[e]=Yt(e)})),"production"!==process.env.NODE_ENV&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native");var qt="__sc-".concat(le,"__");"production"!==process.env.NODE_ENV&&"test"!==process.env.NODE_ENV&&"undefined"!=typeof window&&(window[qt]||(window[qt]=0),1===window[qt]&&console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."),window[qt]+=1);const Ut={xsmall:320,small:360,medium:768,large:1024},Xt={"bp-xsmall":8,"bp-small":8,"bp-medium":8,"bp-large":8},Kt=Wt.div`
    display: flex;
    gap: ${e=>Xt["bp-xsmall"]*(e.spacing["bp-xsmall"]||0)}px;
    flex-direction: ${e=>e.direction.xsmall||"column"};

    ${e=>Object.entries(Ut).map((([t,n])=>{const r=`bp-${t}`;return`\n      @media (min-width: ${n}px) {\n        flex-direction: ${e.direction[t]||"column"};\n        gap: ${(e.spacing[r]||0)*(Xt[r]||0)}px;\n      }\n    `})).join("")}
`,Zt=({direction:t,spacing:n,children:r})=>e.createElement(Kt,{direction:t,spacing:n},r);var Jt={stack:"stack__foEop__0-0-23","direction-xsmall-column":"direction-xsmall-column__gSInW__0-0-23","direction-xsmall-row":"direction-xsmall-row__xbYKt__0-0-23","direction-small-column":"direction-small-column__w3qdN__0-0-23","direction-small-row":"direction-small-row__Fi83T__0-0-23","direction-medium-column":"direction-medium-column__uPpiH__0-0-23","direction-medium-row":"direction-medium-row__QXENi__0-0-23","direction-large-column":"direction-large-column__DOuNx__0-0-23","direction-large-row":"direction-large-row__nt-ew__0-0-23","gap-xsmall-1":"gap-xsmall-1__PH7ZL__0-0-23","gap-xsmall-2":"gap-xsmall-2__OF5nS__0-0-23","gap-xsmall-3":"gap-xsmall-3__KP-Pk__0-0-23","gap-xsmall-4":"gap-xsmall-4__J5ttC__0-0-23","gap-small-1":"gap-small-1__s7o8S__0-0-23","gap-small-2":"gap-small-2__nhKiB__0-0-23","gap-small-3":"gap-small-3__SKBDk__0-0-23","gap-small-4":"gap-small-4__ykzrO__0-0-23","gap-medium-1":"gap-medium-1__dN9up__0-0-23","gap-medium-2":"gap-medium-2__UMXHe__0-0-23","gap-medium-3":"gap-medium-3__OIV7e__0-0-23","gap-medium-4":"gap-medium-4__mfb2I__0-0-23","gap-large-1":"gap-large-1__3BTuu__0-0-23","gap-large-2":"gap-large-2__po1On__0-0-23","gap-large-3":"gap-large-3__fK1OL__0-0-23","gap-large-4":"gap-large-4__1-BZF__0-0-23"};const Qt=({direction:t={xsmall:"column",small:"column",medium:"column",large:"column"},gap:n={xsmall:1,small:1,medium:1,large:1},children:r})=>{const o=Object.entries(t).map((([e,t])=>Jt[`direction-${e}-${t}`])).join(" "),a=Object.entries(n).map((([e,t])=>Jt[`gap-${e}-${t}`])).join(" ");return e.createElement("div",{className:`${Jt.stack} ${o} ${a}`},r)};export{Zt as Stack,Qt as StackModule};
//# sourceMappingURL=index.js.map