<script lang="ts">
	import { Label, Tabset, Tab, TabContent } from "$lib/index.js";
	import { HighlightSvelte } from "svelte-highlight";
	import type { IShowcaseTableData } from "../shared/types.js";
	import ShowcaseOptEvents from "../shared/showcase-opt-events.svelte";

	let code = `
<Label>Default</Label>
<Label type="success">Success</Label>
<Label type="warning">Warning</Label>
<Label type="danger">Danger</Label>
    `;

	let options: IShowcaseTableData[] = [
		{
			name: "type",
			description: "-",
			type: `'default' | 'success' | 'warning' | 'danger'`,
			default: "default",
		},
	];

	let events: IShowcaseTableData[] = [];
</script>

<h1>Label</h1>
<h3>Default</h3>
<Tabset>
	<svelte:fragment slot="tabs">
		<Tab ident={"pre"} active={true}>Preview</Tab>
		<Tab ident={"code"}>Code</Tab>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<TabContent tabIdent="pre">
			<Label>Default</Label>
			<Label type="success">Success</Label>
			<Label type="warning">Warning</Label>
			<Label type="danger">Danger</Label>
		</TabContent>
		<TabContent tabIdent="code">
			<HighlightSvelte {code} />
		</TabContent>
	</svelte:fragment>
</Tabset>
<ShowcaseOptEvents {options} {events} />
