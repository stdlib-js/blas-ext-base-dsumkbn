// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.1.0-esm/index.mjs";function n(r,n,t){var s,i,a,d,f,o;if(r<=0)return 0;if(1===r||0===t)return n[0];for(i=t<0?(1-r)*t:0,s=0,f=0,o=0;o<r;o++)d=s+(a=n[i]),e(s)>=e(a)?f+=s-d+a:f+=a-d+s,s=d,i+=t;return s+f}function t(r,n,t,s){var i,a,d,f,o,u;if(r<=0)return 0;if(1===r||0===t)return n[s];for(a=s,i=0,o=0,u=0;u<r;u++)f=i+(d=n[a]),e(i)>=e(d)?o+=i-f+d:o+=d-f+i,i=f,a+=t;return i+o}r(n,"ndarray",t);export{n as default,t as ndarray};
//# sourceMappingURL=index.mjs.map
