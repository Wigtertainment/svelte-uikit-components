import{S as G,i as C,s as I,C as q,k as T,l as H,m as P,h as l,n as E,b as g,G as S,I as z,J as A,g as u,d as m,q as w,a as b,y as c,r as v,c as d,z as p,F as D,A as i,B as _,K as k}from"../chunks/index.e4cce1ec.js";import{T as F,a as h,b as y,H as J,t as K}from"../chunks/tab-content.fce9f9c6.js";import{B}from"../chunks/button.50a6a7d3.js";function V(o){let e,s;const n=o[1].default,a=q(n,o,o[0],null);return{c(){e=T("div"),a&&a.c(),this.h()},l(t){e=H(t,"DIV",{class:!0});var r=P(e);a&&a.l(r),r.forEach(l),this.h()},h(){E(e,"class","uk-button-group")},m(t,r){g(t,e,r),a&&a.m(e,null),s=!0},p(t,[r]){a&&a.p&&(!s||r&1)&&S(a,n,t,t[0],s?A(n,t[0],r,null):z(t[0]),null)},i(t){s||(u(a,t),s=!0)},o(t){m(a,t),s=!1},d(t){t&&l(e),a&&a.d(t)}}}function j(o,e,s){let{$$slots:n={},$$scope:a}=e;return o.$$set=t=>{"$$scope"in t&&s(0,a=t.$$scope)},[a,n]}class L extends G{constructor(e){super(),C(this,e,j,V,I,{})}}function M(o){let e;return{c(){e=w("Preview")},l(s){e=v(s,"Preview")},m(s,n){g(s,e,n)},d(s){s&&l(e)}}}function N(o){let e;return{c(){e=w("Code")},l(s){e=v(s,"Code")},m(s,n){g(s,e,n)},d(s){s&&l(e)}}}function O(o){let e,s,n,a;return e=new h({props:{ident:"pre",active:!0,$$slots:{default:[M]},$$scope:{ctx:o}}}),n=new h({props:{ident:"code",$$slots:{default:[N]},$$scope:{ctx:o}}}),{c(){c(e.$$.fragment),s=b(),c(n.$$.fragment)},l(t){p(e.$$.fragment,t),s=d(t),p(n.$$.fragment,t)},m(t,r){i(e,t,r),g(t,s,r),i(n,t,r),a=!0},p(t,r){const $={};r&2&&($.$$scope={dirty:r,ctx:t}),e.$set($);const f={};r&2&&(f.$$scope={dirty:r,ctx:t}),n.$set(f)},i(t){a||(u(e.$$.fragment,t),u(n.$$.fragment,t),a=!0)},o(t){m(e.$$.fragment,t),m(n.$$.fragment,t),a=!1},d(t){_(e,t),t&&l(s),_(n,t)}}}function Q(o){let e,s,n,a,t,r;return e=new B({props:{label:"Button 1",style:"default"}}),n=new B({props:{label:"Button 2",style:"primary"}}),t=new B({props:{label:"Button 3",style:"danger"}}),{c(){c(e.$$.fragment),s=b(),c(n.$$.fragment),a=b(),c(t.$$.fragment)},l($){p(e.$$.fragment,$),s=d($),p(n.$$.fragment,$),a=d($),p(t.$$.fragment,$)},m($,f){i(e,$,f),g($,s,f),i(n,$,f),g($,a,f),i(t,$,f),r=!0},p:k,i($){r||(u(e.$$.fragment,$),u(n.$$.fragment,$),u(t.$$.fragment,$),r=!0)},o($){m(e.$$.fragment,$),m(n.$$.fragment,$),m(t.$$.fragment,$),r=!1},d($){_(e,$),$&&l(s),_(n,$),$&&l(a),_(t,$)}}}function R(o){let e,s;return e=new L({props:{$$slots:{default:[Q]},$$scope:{ctx:o}}}),{c(){c(e.$$.fragment)},l(n){p(e.$$.fragment,n)},m(n,a){i(e,n,a),s=!0},p(n,a){const t={};a&2&&(t.$$scope={dirty:a,ctx:n}),e.$set(t)},i(n){s||(u(e.$$.fragment,n),s=!0)},o(n){m(e.$$.fragment,n),s=!1},d(n){_(e,n)}}}function U(o){let e,s;return e=new J({props:{language:K,code:o[0]}}),{c(){c(e.$$.fragment)},l(n){p(e.$$.fragment,n)},m(n,a){i(e,n,a),s=!0},p:k,i(n){s||(u(e.$$.fragment,n),s=!0)},o(n){m(e.$$.fragment,n),s=!1},d(n){_(e,n)}}}function W(o){let e,s,n,a;return e=new y({props:{tabIdent:"pre",$$slots:{default:[R]},$$scope:{ctx:o}}}),n=new y({props:{tabIdent:"code",$$slots:{default:[U]},$$scope:{ctx:o}}}),{c(){c(e.$$.fragment),s=b(),c(n.$$.fragment)},l(t){p(e.$$.fragment,t),s=d(t),p(n.$$.fragment,t)},m(t,r){i(e,t,r),g(t,s,r),i(n,t,r),a=!0},p(t,r){const $={};r&2&&($.$$scope={dirty:r,ctx:t}),e.$set($);const f={};r&2&&(f.$$scope={dirty:r,ctx:t}),n.$set(f)},i(t){a||(u(e.$$.fragment,t),u(n.$$.fragment,t),a=!0)},o(t){m(e.$$.fragment,t),m(n.$$.fragment,t),a=!1},d(t){_(e,t),t&&l(s),_(n,t)}}}function X(o){let e,s,n,a,t;return a=new F({props:{$$slots:{content:[W],tabs:[O]},$$scope:{ctx:o}}}),{c(){e=T("h1"),s=w("ButtonGroup"),n=b(),c(a.$$.fragment)},l(r){e=H(r,"H1",{});var $=P(e);s=v($,"ButtonGroup"),$.forEach(l),n=d(r),p(a.$$.fragment,r)},m(r,$){g(r,e,$),D(e,s),g(r,n,$),i(a,r,$),t=!0},p(r,[$]){const f={};$&2&&(f.$$scope={dirty:$,ctx:r}),a.$set(f)},i(r){t||(u(a.$$.fragment,r),t=!0)},o(r){m(a.$$.fragment,r),t=!1},d(r){r&&l(e),r&&l(n),_(a,r)}}}function Y(o){return[`
<ButtonGroup>
	<Button label="Button 1" style="default" />
	<Button label="Button 2" style="primary" />
	<Button label="Button 3" style="danger" />
</ButtonGroup>
    `]}class et extends G{constructor(e){super(),C(this,e,Y,X,I,{})}}export{et as component};