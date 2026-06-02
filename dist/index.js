"use strict";var o=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var q=o(function(D,b){
var c=require('@stdlib/math-base-special-abs/dist');function R(i,r,t,x){var e,f,u,a,n,v,s;if(i<=0)return 0;if(u=x,t===0)return i*r[u];if(a=r[u],u+=t,e=a,e===0)for(s=1;s<i;s++){if(a=r[u],a!==0){f=!0;break}e+=a,u+=t}else f=!0,s=1;for(v=0;s<i;s++)a=r[u],n=e+a,c(e)>=c(a)?v+=e-n+a:v+=a-n+e,e=n,u+=t;return f?e+v:e}b.exports=R
});var k=o(function(F,d){
var _=require('@stdlib/strided-base-stride2offset/dist'),g=q();function E(i,r,t){return g(i,r,t,_(i,t))}d.exports=E
});var y=o(function(G,p){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=k(),h=q();O(l,"ndarray",h);p.exports=l
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=y(),m,j=z(w(__dirname,"./native.js"));A(j)?m=B:m=j;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
