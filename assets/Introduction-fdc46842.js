import{r as m,M as h}from"./index-afe06e85.js";import{u as c}from"./index-8b7f29a0.js";import"./iframe-b9bf481e.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-1a79a776.js";import"./index-356e4a49.js";var d={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g=m,x=Symbol.for("react.element"),f=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,j=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k={key:!0,ref:!0,__self:!0,__source:!0};function p(t,s,n){var r,o={},a=null,l=null;n!==void 0&&(a=""+n),s.key!==void 0&&(a=""+s.key),s.ref!==void 0&&(l=s.ref);for(r in s)u.call(s,r)&&!k.hasOwnProperty(r)&&(o[r]=s[r]);if(t&&t.defaultProps)for(r in s=t.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:x,type:t,key:a,ref:l,props:o,_owner:j.current}}i.Fragment=f;i.jsx=p;i.jsxs=p;d.exports=i;var e=d.exports;const b=""+new URL("code-brackets-9ef6443e.svg",import.meta.url).href,y=""+new URL("colors-ac9401f3.svg",import.meta.url).href,w=""+new URL("comments-f15a6837.svg",import.meta.url).href,v=""+new URL("direction-94a9917f.svg",import.meta.url).href,_=""+new URL("flow-275142c6.svg",import.meta.url).href,N=""+new URL("plugin-57148314.svg",import.meta.url).href,R=""+new URL("repo-fb4ece47.svg",import.meta.url).href,S=""+new URL("stackalt-2ad81543.svg",import.meta.url).href;function B(t={}){const{wrapper:s}=Object.assign({},c(),t.components);return s?e.jsx(s,Object.assign({},t,{children:e.jsx(n,{})})):n();function n(){const r=Object.assign({h1:"h1",p:"p",strong:"strong",code:"code",a:"a"},c(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"Example/Introduction"}),`
`,e.jsx("style",{children:`
    .subheading {
      --mediumdark: '#999999';
      font-weight: 700;
      font-size: 13px;
      color: #999;
      letter-spacing: 6px;
      line-height: 24px;
      text-transform: uppercase;
      margin-bottom: 12px;
      margin-top: 40px;
    }

    .link-list {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      row-gap: 10px;
    }

    @media (min-width: 620px) {
      .link-list {
        row-gap: 20px;
        column-gap: 20px;
        grid-template-columns: 1fr 1fr;
      }
    }

    @media all and (-ms-high-contrast:none) {
    .link-list {
        display: -ms-grid;
        -ms-grid-columns: 1fr 1fr;
        -ms-grid-rows: 1fr 1fr;
      }
    }

    .link-item {
      display: block;
      padding: 20px;
      border: 1px solid #00000010;
      border-radius: 5px;
      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
      color: #333333;
      display: flex;
      align-items: flex-start;
    }

    .link-item:hover {
      border-color: #1EA7FD50;
      transform: translate3d(0, -3px, 0);
      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
    }

    .link-item:active {
      border-color: #1EA7FD;
      transform: translate3d(0, 0, 0);
    }

    .link-item strong {
      font-weight: 700;
      display: block;
      margin-bottom: 2px;
    }

    .link-item img {
      height: 40px;
      width: 40px;
      margin-right: 15px;
      flex: none;
    }

    .link-item span,
    .link-item p {
      margin: 0;
      font-size: 14px;
      line-height: 20px;
    }

    .tip {
      display: inline-block;
      border-radius: 1em;
      font-size: 11px;
      line-height: 12px;
      font-weight: 700;
      background: #E7FDD8;
      color: #66BF3C;
      padding: 4px 12px;
      margin-right: 10px;
      vertical-align: top;
    }

    .tip-wrapper {
      font-size: 13px;
      line-height: 20px;
      margin-top: 40px;
      margin-bottom: 40px;
    }

    .tip-wrapper code {
      font-size: 12px;
      display: inline-block;
    }
  `}),`
`,e.jsx(r.h1,{id:"welcome-to-storybook",children:"Welcome to Storybook"}),`
`,e.jsxs(r.p,{children:[`Storybook helps you build UI components in isolation from your app's business logic, data, and context.
That makes it easy to develop hard-to-reach states. Save these UI states as `,e.jsx(r.strong,{children:"stories"})," to revisit during development, testing, or QA."]}),`
`,e.jsxs(r.p,{children:[`Browse example stories now by navigating to them in the sidebar.
View their code in the `,e.jsx(r.code,{children:"stories"}),` directory to learn how they work.
We recommend building UIs with a `,e.jsx(r.a,{href:"https://componentdriven.org",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsx(r.strong,{children:"component-driven"})})," process starting with atomic components and ending with pages."]}),`
`,e.jsx("div",{className:"subheading",children:"Configure"}),`
`,e.jsxs("div",{className:"link-list",children:[e.jsxs("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank",children:[e.jsx("img",{src:N,alt:"plugin"}),e.jsx("span",{children:e.jsxs(r.p,{children:[e.jsx("strong",{children:"Presets for popular tools"}),`
Easy setup for TypeScript, SCSS and more.`]})})]}),e.jsxs("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank",children:[e.jsx("img",{src:S,alt:"Build"}),e.jsx("span",{children:e.jsxs(r.p,{children:[e.jsx("strong",{children:"Build configuration"}),`
How to customize webpack and Babel`]})})]}),e.jsxs("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank",children:[e.jsx("img",{src:y,alt:"colors"}),e.jsx("span",{children:e.jsxs(r.p,{children:[e.jsx("strong",{children:"Styling"}),`
How to load and configure CSS libraries`]})})]}),e.jsxs("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank",children:[e.jsx("img",{src:_,alt:"flow"}),e.jsx("span",{children:e.jsxs(r.p,{children:[e.jsx("strong",{children:"Data"}),`
Providers and mocking for data libraries`]})})]})]}),`
`,e.jsx("div",{className:"subheading",children:"Learn"}),`
`,e.jsxs("div",{className:"link-list",children:[e.jsxs("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank",children:[e.jsx("img",{src:R,alt:"repo"}),e.jsx("span",{children:e.jsxs(r.p,{children:[e.jsx("strong",{children:"Storybook documentation"}),`
Configure, customize, and extend`]})})]}),e.jsxs("a",{className:"link-item",href:"https://storybook.js.org/tutorials/",target:"_blank",children:[e.jsx("img",{src:v,alt:"direction"}),e.jsx("span",{children:e.jsxs(r.p,{children:[e.jsx("strong",{children:"In-depth guides"}),`
Best practices from leading teams`]})})]}),e.jsxs("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank",children:[e.jsx("img",{src:b,alt:"code"}),e.jsx("span",{children:e.jsxs(r.p,{children:[e.jsx("strong",{children:"GitHub project"}),`
View the source and add issues`]})})]}),e.jsxs("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank",children:[e.jsx("img",{src:w,alt:"comments"}),e.jsx("span",{children:e.jsxs(r.p,{children:[e.jsx("strong",{children:"Discord chat"}),`
Chat with maintainers and the community`]})})]})]}),`
`,e.jsx("div",{className:"tip-wrapper",children:e.jsxs(r.p,{children:[e.jsx("span",{className:"tip",children:"Tip"}),"Edit the Markdown in"," ",`
`,e.jsx("code",{children:"stories/Introduction.stories.mdx"})]})})]})}}export{B as default};
//# sourceMappingURL=Introduction-fdc46842.js.map
