## svelte-uikit-components

<p align="center">
  <a href="https://svelte-uikit.wigtertainment.com">
    <img src="./static/svelte-uikit-no-bg.png" alt="Svelte UiKit Components Logo" width="200" height="185">
  </a>
</p>

### Demo and Documentation
[Demo](https://svelte-uikit.wigtertainment.com)

### Installation
`npm i svelte-uikit-components`

### Setup
Now you only need to import uikit.css inside your global css file

`@import "../../node_modules/uikit/dist/css/uikit.min.css";`

### Support
| Version | Svelte Version | UiKit Version |
|---------|----------------|---------------|
| 0.16.0 | 4.2.1 | 3.17.0 |
| 0.8.0 - 0.15.0 | 4.0.1 | 3.16.15 |
| 0.7.0 | 3.54.0 | 3.16.15 |

### Example Usages

#### Button

```typescript
<script>
	import { Button } from "svelte-uikit-components";
</script>

<Button label="Click Me" style="danger">
```
