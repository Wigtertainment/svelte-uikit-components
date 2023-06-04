<script lang="ts">
	import { HighlightSvelte } from "svelte-highlight";
	import { Button, Tabset, Tab, TabContent } from "$lib/index.js";
	import ShowcaseOptEvents from "../shared/showcase-opt-events.svelte";

	let code = `
<Button label="Click" />
    `;
</script>

<h1>Button</h1>
<Tabset>
	<svelte:fragment slot="tabs">
		<Tab ident={"pre"} active={true}>Preview</Tab>
		<Tab ident={"code"}>Code</Tab>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<TabContent tabIdent="pre">
			<Button label="Click" />
		</TabContent>
		<TabContent tabIdent="code">
			<HighlightSvelte {code} />
		</TabContent>
	</svelte:fragment>
</Tabset>
<ShowcaseOptEvents />
