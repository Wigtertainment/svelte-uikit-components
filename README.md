## svelte-uikit-components

[![Netlify Status](https://api.netlify.com/api/v1/badges/f3d02818-f9b6-4c02-b0ed-be131f458efe/deploy-status)](https://app.netlify.com/sites/creative-cobbler-34b5cf/deploys)

<p align="center">
  <a href="https://svelte-uikit.wigtertainment.com">
    <img src="./static/svelte-uikit-no-bg.png" alt="Svelte UiKit Components Logo" width="200" height="185">
  </a>
</p>

### Demo and Documentation

[Demo](https://svelte-uikit.wigtertainment.com)

### UIkit Component Coverage

Coverage is compared against the 81 components in the current [UIkit documentation](https://getuikit.com/docs/introduction).

- ✅ **Implemented and documented:** 22
- ⚠️ **Implemented without a showcase page:** 1 (`Table`)
- ❌ **Not implemented:** 58
- **Overall wrapper coverage:** 23 / 81 (28.4%)

`ButtonGroup` is included in the `Button` row because UIkit documents it as a Button variation rather than a separate component. `Tooltip` is exposed as a Svelte action instead of a component.

| UIkit component | Svelte export | Showcase | Status |
| --- | --- | --- | :---: |
| [Accordion](https://getuikit.com/docs/accordion) | `Accordion`, `AccordionItem` | [Demo](https://svelte-uikit.wigtertainment.com/accordion) | ✅ |
| [Alert](https://getuikit.com/docs/alert) | `Alert` | [Demo](https://svelte-uikit.wigtertainment.com/alert) | ✅ |
| [Align](https://getuikit.com/docs/align) | — | — | ❌ |
| [Animation](https://getuikit.com/docs/animation) | — | — | ❌ |
| [Article](https://getuikit.com/docs/article) | `Article`, `ArticleTitle`, `ArticleMeta` | [Demo](https://svelte-uikit.wigtertainment.com/article) | ✅ |
| [Background](https://getuikit.com/docs/background) | — | — | ❌ |
| [Badge](https://getuikit.com/docs/badge) | `Badge` | [Demo](https://svelte-uikit.wigtertainment.com/badge) | ✅ |
| [Base](https://getuikit.com/docs/base) | — | — | ❌ |
| [Breadcrumb](https://getuikit.com/docs/breadcrumb) | `Breadcrumb`, `BreadcrumbItem` | [Demo](https://svelte-uikit.wigtertainment.com/breadcrumb) | ✅ |
| [Button](https://getuikit.com/docs/button) | `Button`, `ButtonGroup` | [Button](https://svelte-uikit.wigtertainment.com/button), [Button Group](https://svelte-uikit.wigtertainment.com/button-group) | ✅ |
| [Card](https://getuikit.com/docs/card) | `Card`, `CardMedia`, `CardHeader`, `CardContent`, `CardFooter` | [Demo](https://svelte-uikit.wigtertainment.com/card) | ✅ |
| [Close](https://getuikit.com/docs/close) | — | — | ❌ |
| [Column](https://getuikit.com/docs/column) | — | — | ❌ |
| [Comment](https://getuikit.com/docs/comment) | `Comment`, `CommentAvatar`, `CommentBody`, `CommentHeader`, `CommentMetaList`, `CommentTitle` | [Demo](https://svelte-uikit.wigtertainment.com/comment) | ✅ |
| [Container](https://getuikit.com/docs/container) | — | — | ❌ |
| [Countdown](https://getuikit.com/docs/countdown) | `Countdown` | [Demo](https://svelte-uikit.wigtertainment.com/countdown) | ✅ |
| [Cover](https://getuikit.com/docs/cover) | — | — | ❌ |
| [Description List](https://getuikit.com/docs/description-list) | `DescriptionList`, `DescriptionListTitle`, `DescriptionListData` | [Demo](https://svelte-uikit.wigtertainment.com/description-list) | ✅ |
| [Divider](https://getuikit.com/docs/divider) | — | — | ❌ |
| [Dotnav](https://getuikit.com/docs/dotnav) | — | — | ❌ |
| [Drop](https://getuikit.com/docs/drop) | — | — | ❌ |
| [Dropbar](https://getuikit.com/docs/dropbar) | — | — | ❌ |
| [Dropdown](https://getuikit.com/docs/dropdown) | `DropDown` | [Demo](https://svelte-uikit.wigtertainment.com/dropdown) | ✅ |
| [Dropnav](https://getuikit.com/docs/dropnav) | — | — | ❌ |
| [Filter](https://getuikit.com/docs/filter) | — | — | ❌ |
| [Flex](https://getuikit.com/docs/flex) | — | — | ❌ |
| [Form](https://getuikit.com/docs/form) | — | — | ❌ |
| [Grid](https://getuikit.com/docs/grid) | — | — | ❌ |
| [Heading](https://getuikit.com/docs/heading) | `Heading` | [Demo](https://svelte-uikit.wigtertainment.com/heading) | ✅ |
| [Height](https://getuikit.com/docs/height) | — | — | ❌ |
| [Icon](https://getuikit.com/docs/icon) | — | — | ❌ |
| [Iconnav](https://getuikit.com/docs/iconnav) | — | — | ❌ |
| [Image](https://getuikit.com/docs/image) | — | — | ❌ |
| [Inverse](https://getuikit.com/docs/inverse) | — | — | ❌ |
| [Label](https://getuikit.com/docs/label) | `Label` | [Demo](https://svelte-uikit.wigtertainment.com/label) | ✅ |
| [Leader](https://getuikit.com/docs/leader) | — | — | ❌ |
| [Lightbox](https://getuikit.com/docs/lightbox) | — | — | ❌ |
| [Link](https://getuikit.com/docs/link) | — | — | ❌ |
| [List](https://getuikit.com/docs/list) | — | — | ❌ |
| [Margin](https://getuikit.com/docs/margin) | — | — | ❌ |
| [Marker](https://getuikit.com/docs/marker) | — | — | ❌ |
| [Modal](https://getuikit.com/docs/modal) | — | — | ❌ |
| [Nav](https://getuikit.com/docs/nav) | `Nav`, `NavItem` | [Demo](https://svelte-uikit.wigtertainment.com/nav) | ✅ |
| [Navbar](https://getuikit.com/docs/navbar) | — | — | ❌ |
| [Notification](https://getuikit.com/docs/notification) | — | — | ❌ |
| [Off-canvas](https://getuikit.com/docs/offcanvas) | `OffCanvas` | [Demo](https://svelte-uikit.wigtertainment.com/off-canvas) | ✅ |
| [Overlay](https://getuikit.com/docs/overlay) | — | — | ❌ |
| [Padding](https://getuikit.com/docs/padding) | — | — | ❌ |
| [Pagination](https://getuikit.com/docs/pagination) | — | — | ❌ |
| [Parallax](https://getuikit.com/docs/parallax) | — | — | ❌ |
| [Placeholder](https://getuikit.com/docs/placeholder) | — | — | ❌ |
| [Position](https://getuikit.com/docs/position) | — | — | ❌ |
| [Print](https://getuikit.com/docs/print) | — | — | ❌ |
| [Progress](https://getuikit.com/docs/progress) | `Progress` | [Demo](https://svelte-uikit.wigtertainment.com/progress) | ✅ |
| [Scroll](https://getuikit.com/docs/scroll) | — | — | ❌ |
| [Scrollspy](https://getuikit.com/docs/scrollspy) | — | — | ❌ |
| [Search](https://getuikit.com/docs/search) | — | — | ❌ |
| [Section](https://getuikit.com/docs/section) | `Section` | [Demo](https://svelte-uikit.wigtertainment.com/section) | ✅ |
| [Slidenav](https://getuikit.com/docs/slidenav) | — | — | ❌ |
| [Slider](https://getuikit.com/docs/slider) | — | — | ❌ |
| [Slideshow](https://getuikit.com/docs/slideshow) | — | — | ❌ |
| [Sortable](https://getuikit.com/docs/sortable) | — | — | ❌ |
| [Spinner](https://getuikit.com/docs/spinner) | `Spinner` | [Demo](https://svelte-uikit.wigtertainment.com/spinner) | ✅ |
| [Sticky](https://getuikit.com/docs/sticky) | — | — | ❌ |
| [Subnav](https://getuikit.com/docs/subnav) | — | — | ❌ |
| [SVG](https://getuikit.com/docs/svg) | — | — | ❌ |
| [Switcher](https://getuikit.com/docs/switcher) | — | — | ❌ |
| [Tab](https://getuikit.com/docs/tab) | `Tab`, `TabContent`, `Tabset` | [Demo](https://svelte-uikit.wigtertainment.com/tab) | ✅ |
| [Table](https://getuikit.com/docs/table) | `Table` | — | ⚠️ |
| [Text](https://getuikit.com/docs/text) | `Text` | [Demo](https://svelte-uikit.wigtertainment.com/text) | ✅ |
| [Thumbnav](https://getuikit.com/docs/thumbnav) | — | — | ❌ |
| [Tile](https://getuikit.com/docs/tile) | — | — | ❌ |
| [Toggle](https://getuikit.com/docs/toggle) | — | — | ❌ |
| [Tooltip](https://getuikit.com/docs/tooltip) | `tooltip` action, `TooltipOptions` | [Demo](https://svelte-uikit.wigtertainment.com/tooltip-action) | ✅ |
| [Totop](https://getuikit.com/docs/totop) | `Totop` | [Demo](https://svelte-uikit.wigtertainment.com/totop) | ✅ |
| [Transition](https://getuikit.com/docs/transition) | — | — | ❌ |
| [Upload](https://getuikit.com/docs/upload) | — | — | ❌ |
| [Utility](https://getuikit.com/docs/utility) | — | — | ❌ |
| [Video](https://getuikit.com/docs/video) | — | — | ❌ |
| [Visibility](https://getuikit.com/docs/visibility) | — | — | ❌ |
| [Width](https://getuikit.com/docs/width) | — | — | ❌ |

### Installation

`npm i svelte-uikit-components`

### Setup

Now you only need to import uikit.css inside your global css file

`@import "../../node_modules/uikit/dist/css/uikit.min.css";`

### Support

| Version        | Svelte Version | UiKit Version |
| -------------- | -------------- | ------------- |
| 0.21.1         | ^5.38.0        | ^3.25.13      |
| 0.20.0         | 5.38.0         | 3.23.11       |
| 0.19.0         | 4.2.14         | 3.23.0        |
| 0.18.0         | 4.2.14         | 3.21.13       |
| 0.17.1         | 4.2.14         | 3.19.4        |
| 0.16.0         | 4.2.3          | 3.17.8        |
| 0.8.0 - 0.15.0 | 4.0.1          | 3.16.15       |
| 0.7.0          | 3.54.0         | 3.16.15       |

### Example Usages

#### Button

```typescript
<script>
	import { Button } from "svelte-uikit-components";
</script>

<Button label="Click Me" style="danger">
```
