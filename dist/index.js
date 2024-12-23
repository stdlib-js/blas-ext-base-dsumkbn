"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=o(function(C,m){
var d=require('@stdlib/math-base-special-abs/dist');function l(e,r,i,j){var a,s,u,t,n,v;if(e<=0)return 0;if(s=j,i===0)return e*r[s];for(a=0,n=0,v=0;v<e;v++)u=r[s],t=a+u,d(a)>=d(u)?n+=a-t+u:n+=u-t+a,a=t,s+=i;return a+n}m.exports=l
});var b=o(function(D,c){
var R=require('@stdlib/strided-base-stride2offset/dist'),_=q();function E(e,r,i){return _(e,r,i,R(e,i))}c.exports=E
});var k=o(function(F,y){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=b(),g=q();O(p,"ndarray",g);y.exports=p
});var h=require("path").join,w=require('@stdlib/utils-try-require/dist'),z=require('@stdlib/assert-is-error/dist'),A=k(),f,x=w(h(__dirname,"./native.js"));z(x)?f=A:f=x;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
