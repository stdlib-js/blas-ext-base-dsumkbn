// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.2-esm/index.mjs";function s(e,r,s,n){var i,d,a,m,o,f;if(e<=0)return 0;if(d=n,0===s)return e*r[d];for(i=0,o=0,f=0;f<e;f++)m=i+(a=r[d]),t(i)>=t(a)?o+=i-m+a:o+=a-m+i,i=m,d+=s;return i+o}function n(e,t,n){return s(e,t,n,r(e,n))}e(n,"ndarray",s);export{n as default,s as ndarray};
//# sourceMappingURL=index.mjs.map
