<script lang="ts">
	import { HighlightSvelte } from "svelte-highlight";
	import { Tab, Tabset, TabContent } from "$lib/index.js";
	import ShowcaseOptEvents from "../shared/showcase-opt-events.svelte";

	let code = `
<Tabset>
	<svelte:fragment slot="tabs">
		<Tab ident={"1"} active={true}>Tab 1</Tab>
		<Tab ident={"2"}>Tab 2</Tab>
		<Tab ident={"3"}>Tab 3</Tab>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<TabContent tabIdent={"1"}>Content of Tab 1</TabContent>
		<TabContent tabIdent={"2"}>Content of Tab 2</TabContent>
		<TabContent tabIdent={"3"}>Content of Tab 3</TabContent>
	</svelte:fragment>
</Tabset>
    `;
</script>

<h1>Tab</h1>

<Tabset>
	<svelte:fragment slot="tabs">
		<Tab ident={"pre"} active={true}>Preview</Tab>
		<Tab ident={"code"}>Code</Tab>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<TabContent tabIdent={"pre"}>
			<Tabset>
				<svelte:fragment slot="tabs">
					<Tab ident={"1"} active={true}>Tab 1</Tab>
					<Tab ident={"2"}>Tab 2</Tab>
					<Tab ident={"3"}>Tab 3</Tab>
				</svelte:fragment>
				<svelte:fragment slot="content">
					<TabContent tabIdent={"1"}>Content of Tab 1</TabContent>
					<TabContent tabIdent={"2"}>Content of Tab 2</TabContent>
					<TabContent tabIdent={"3"}>Content of Tab 3</TabContent>
				</svelte:fragment>
			</Tabset>
		</TabContent>
		<TabContent tabIdent={"code"}><HighlightSvelte {code} /></TabContent>
	</svelte:fragment>
</Tabset>
<ShowcaseOptEvents />
