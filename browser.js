// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e,t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__;function f(e){return Math.abs(e)}function c(e,t,r){var n,o,i,a,u,l;if(e<=0)return 0;if(1===e||0===r)return t[0];for(o=r<0?(1-e)*r:0,n=0,u=0,l=0;l<e;l++)a=n+(i=t[o]),f(n)>=f(i)?u+=n-a+i:u+=i-a+n,n=a,o+=r;return n+u}return e=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var f,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(u.call(e,t)||l.call(e,t)?(f=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=f):e[t]=r.value),_="get"in r,p="set"in r,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,t,r.get),p&&a&&a.call(e,t,r.set),e},e(c,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,t,r,n){var o,i,a,u,l,c;if(e<=0)return 0;if(1===e||0===r)return t[n];for(i=n,o=0,l=0,c=0;c<e;c++)u=o+(a=t[i]),f(o)>=f(a)?l+=o-u+a:l+=a-u+o,o=u,i+=r;return o+l}}),c},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).dsumkbn=t();
//# sourceMappingURL=browser.js.map
