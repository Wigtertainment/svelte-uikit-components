import{S as h,i as g,s as w,k as y,l as z,m as B,h as b,n as q,N as o,b as d,v as C,d as k,f as N,g as c,C as S,G as T,I as E,J as G,q as I,r as J,u as K,K as m}from"./index.e4cce1ec.js";function O(s){let e;const n=s[5].default,t=S(n,s,s[4],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,f){t&&t.m(l,f),e=!0},p(l,f){t&&t.p&&(!e||f&16)&&T(t,n,l,l[4],e?G(n,l[4],f,null):E(l[4]),null)},i(l){e||(c(t,l),e=!0)},o(l){k(t,l),e=!1},d(l){t&&t.d(l)}}}function U(s){let e;return{c(){e=I(s[0])},l(n){e=J(n,s[0])},m(n,t){d(n,e,t)},p(n,t){t&1&&K(e,n[0])},i:m,o:m,d(n){n&&b(e)}}}function j(s){let e,n,t,l;const f=[U,O],i=[];function r(a,u){return a[0]?0:1}return n=r(s),t=i[n]=f[n](s),{c(){e=y("button"),t.c(),this.h()},l(a){e=z(a,"BUTTON",{class:!0});var u=B(e);t.l(u),u.forEach(b),this.h()},h(){q(e,"class","uk-button"),o(e,"uk-button-default",s[1]==="default"),o(e,"uk-button-primary",s[1]==="primary"),o(e,"uk-button-secondary",s[1]==="secondary"),o(e,"uk-button-danger",s[1]==="danger"),o(e,"uk-button-text",s[1]==="text"),o(e,"uk-button-link",s[1]==="link"),o(e,"uk-button-small",s[2]==="small"),o(e,"uk-button-large",s[2]==="large"),o(e,"uk-width-1-1",s[3]==="full")},m(a,u){d(a,e,u),i[n].m(e,null),l=!0},p(a,[u]){let _=n;n=r(a),n===_?i[n].p(a,u):(C(),k(i[_],1,1,()=>{i[_]=null}),N(),t=i[n],t?t.p(a,u):(t=i[n]=f[n](a),t.c()),c(t,1),t.m(e,null)),(!l||u&2)&&o(e,"uk-button-default",a[1]==="default"),(!l||u&2)&&o(e,"uk-button-primary",a[1]==="primary"),(!l||u&2)&&o(e,"uk-button-secondary",a[1]==="secondary"),(!l||u&2)&&o(e,"uk-button-danger",a[1]==="danger"),(!l||u&2)&&o(e,"uk-button-text",a[1]==="text"),(!l||u&2)&&o(e,"uk-button-link",a[1]==="link"),(!l||u&4)&&o(e,"uk-button-small",a[2]==="small"),(!l||u&4)&&o(e,"uk-button-large",a[2]==="large"),(!l||u&8)&&o(e,"uk-width-1-1",a[3]==="full")},i(a){l||(c(t),l=!0)},o(a){k(t),l=!1},d(a){a&&b(e),i[n].d()}}}function v(s,e,n){let{$$slots:t={},$$scope:l}=e,{label:f=""}=e,{style:i="default"}=e,{size:r="small"}=e,{width:a="default"}=e;return s.$$set=u=>{"label"in u&&n(0,f=u.label),"style"in u&&n(1,i=u.style),"size"in u&&n(2,r=u.size),"width"in u&&n(3,a=u.width),"$$scope"in u&&n(4,l=u.$$scope)},[f,i,r,a,l,t]}class D extends h{constructor(e){super(),g(this,e,v,j,w,{label:0,style:1,size:2,width:3})}}export{D as B};
