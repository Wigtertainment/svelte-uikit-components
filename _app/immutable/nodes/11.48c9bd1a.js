import{S as N,i as C,s as H,k as T,q as d,a as b,y as m,l as k,m as P,r as v,h as f,c as I,z as c,b as _,F as q,A as l,g as u,d as p,B as g,K as h}from"../chunks/index.e4cce1ec.js";import{T as E,a as x,b as w,H as M,t as S}from"../chunks/tab-content.fce9f9c6.js";import{N as z}from"../chunks/nav.2f31e9f3.js";function A($){let t;return{c(){t=d("Preview")},l(a){t=v(a,"Preview")},m(a,e){_(a,t,e)},d(a){a&&f(t)}}}function B($){let t;return{c(){t=d("Code")},l(a){t=v(a,"Code")},m(a,e){_(a,t,e)},d(a){a&&f(t)}}}function F($){let t,a,e,r;return t=new x({props:{ident:"pre",active:!0,$$slots:{default:[A]},$$scope:{ctx:$}}}),e=new x({props:{ident:"code",$$slots:{default:[B]},$$scope:{ctx:$}}}),{c(){m(t.$$.fragment),a=b(),m(e.$$.fragment)},l(n){c(t.$$.fragment,n),a=I(n),c(e.$$.fragment,n)},m(n,s){l(t,n,s),_(n,a,s),l(e,n,s),r=!0},p(n,s){const o={};s&4&&(o.$$scope={dirty:s,ctx:n}),t.$set(o);const i={};s&4&&(i.$$scope={dirty:s,ctx:n}),e.$set(i)},i(n){r||(u(t.$$.fragment,n),u(e.$$.fragment,n),r=!0)},o(n){p(t.$$.fragment,n),p(e.$$.fragment,n),r=!1},d(n){g(t,n),n&&f(a),g(e,n)}}}function K($){let t,a;return t=new z({props:{items:$[0]}}),t.$on("itemClicked",J),{c(){m(t.$$.fragment)},l(e){c(t.$$.fragment,e)},m(e,r){l(t,e,r),a=!0},p:h,i(e){a||(u(t.$$.fragment,e),a=!0)},o(e){p(t.$$.fragment,e),a=!1},d(e){g(t,e)}}}function j($){let t,a;return t=new M({props:{language:S,code:$[1]}}),{c(){m(t.$$.fragment)},l(e){c(t.$$.fragment,e)},m(e,r){l(t,e,r),a=!0},p:h,i(e){a||(u(t.$$.fragment,e),a=!0)},o(e){p(t.$$.fragment,e),a=!1},d(e){g(t,e)}}}function D($){let t,a,e,r;return t=new w({props:{tabIdent:"pre",$$slots:{default:[K]},$$scope:{ctx:$}}}),e=new w({props:{tabIdent:"code",$$slots:{default:[j]},$$scope:{ctx:$}}}),{c(){m(t.$$.fragment),a=b(),m(e.$$.fragment)},l(n){c(t.$$.fragment,n),a=I(n),c(e.$$.fragment,n)},m(n,s){l(t,n,s),_(n,a,s),l(e,n,s),r=!0},p(n,s){const o={};s&4&&(o.$$scope={dirty:s,ctx:n}),t.$set(o);const i={};s&4&&(i.$$scope={dirty:s,ctx:n}),e.$set(i)},i(n){r||(u(t.$$.fragment,n),u(e.$$.fragment,n),r=!0)},o(n){p(t.$$.fragment,n),p(e.$$.fragment,n),r=!1},d(n){g(t,n),n&&f(a),g(e,n)}}}function G($){let t,a,e,r,n;return r=new E({props:{$$slots:{content:[D],tabs:[F]},$$scope:{ctx:$}}}),{c(){t=T("h1"),a=d("Nav"),e=b(),m(r.$$.fragment)},l(s){t=k(s,"H1",{});var o=P(t);a=v(o,"Nav"),o.forEach(f),e=I(s),c(r.$$.fragment,s)},m(s,o){_(s,t,o),q(t,a),_(s,e,o),l(r,s,o),n=!0},p(s,[o]){const i={};o&4&&(i.$$scope={dirty:o,ctx:s}),r.$set(i)},i(s){n||(u(r.$$.fragment,s),n=!0)},o(s){p(r.$$.fragment,s),n=!1},d(s){s&&f(t),s&&f(e),g(r,s)}}}function J($){alert(`Navigate to Item ${$.detail}`)}function L($){return[[{ident:"",text:"Menu",isHeader:!0},{ident:"1",text:"Item 1"},{ident:"2",text:"Item 2"},{ident:"3",text:"Item 3"}],`
<script lang="ts">
	let items: INavItem[] = [
		{ ident: "", text: "Menu", isHeader: true },
		{ ident: "1", text: "Item 1" },
		{ ident: "2", text: "Item 2" },
		{ ident: "3", text: "Item 3" },
	];

	function navigate(event: CustomEvent<string>) {
		alert(\`Navigate to Item \${event.detail}\`);
	} 
<\/script>

<Nav {items} on:itemClicked={navigate} />
    `]}class U extends N{constructor(t){super(),C(this,t,L,G,H,{})}}export{U as component};
