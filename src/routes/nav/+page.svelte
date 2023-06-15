<script lang="ts">
	import { HighlightSvelte } from "svelte-highlight";
	import { Nav, type INavItem, Tabset, Tab, TabContent } from "$lib/index.js";
	import ShowcaseOptEvents from "../shared/showcase-opt-events.svelte";

	let items: INavItem[] = [
		{ ident: "", text: "Menu", isHeader: true },
		{ ident: "1", text: "Item 1" },
		{ ident: "2", text: "Item 2" },
		{ ident: "3", text: "Item 3", externel: true },
	];

	function navigate(event: CustomEvent<string>) {
		alert(`Navigate to Item ${event.detail}`);
	}

	let code = `
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
    `;
</script>

<h1>Nav</h1>
<Tabset>
	<svelte:fragment slot="tabs">
		<Tab ident={"pre"} active={true}>Preview</Tab>
		<Tab ident={"code"}>Code</Tab>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<TabContent tabIdent="pre">
			<Nav {items} on:itemClicked={navigate} />
		</TabContent>
		<TabContent tabIdent="code">
			<HighlightSvelte {code} />
		</TabContent>
	</svelte:fragment>
</Tabset>
<ShowcaseOptEvents />
