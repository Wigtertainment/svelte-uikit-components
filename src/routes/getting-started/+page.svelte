<script lang="ts">
	import Highlight from "svelte-highlight";
	import markdown from "svelte-highlight/languages/markdown";
    import css from "svelte-highlight/languages/css";

	let code = `
<script>
	import { Button } from "svelte-uikit-components";
<\/script>

<Button label="Click Me" style="danger">
    `;
</script>

<h3>Installation</h3>
<Highlight language={markdown} code={'npm i svelte-uikit-components'} />
<h3>Setup</h3>
<p>Now you only need to import uikit.css inside your global css file</p>
<Highlight language={css} code={'@import "../../node_modules/uikit/dist/css/uikit.min.css";'} />
<h3>Example Usages</h3>
<h4>Button</h4>
<Highlight language={markdown} {code} />
