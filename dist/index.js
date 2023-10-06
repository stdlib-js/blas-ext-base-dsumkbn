"use strict";var o=function(e,a){return function(){return a||e((a={exports:{}}).exports,a),a.exports}};var b=o(function(B,c){
var m=require('@stdlib/math-base-special-abs/dist');function R(e,a,t){var i,r,v,u,n,s;if(e<=0)return 0;if(e===1||t===0)return a[0];for(t<0?r=(1-e)*t:r=0,i=0,n=0,s=0;s<e;s++)v=a[r],u=i+v,m(i)>=m(v)?n+=i-u+v:n+=v-u+i,i=u,r+=t;return i+n}c.exports=R
});var d=o(function(C,p){
var l=require('@stdlib/math-base-special-abs/dist');function _(e,a,t,i){var r,v,u,n,s,f;if(e<=0)return 0;if(e===1||t===0)return a[i];for(v=i,r=0,s=0,f=0;f<e;f++)u=a[v],n=r+u,l(r)>=l(u)?s+=r-n+u:s+=u-n+r,r=n,v+=t;return r+s}p.exports=_
});var y=o(function(D,x){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=b(),O=d();E(k,"ndarray",O);x.exports=k
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=y(),q,j=h(g(__dirname,"./native.js"));w(j)?q=z:q=j;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
