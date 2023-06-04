<script lang="ts">
	import { Tab, TabContent, Tabset } from "$lib/index.js";
	import ShowcaseTable from "./showcase-table.svelte";
	import type { IShowcaseTableData } from "./types.js";

	export let options: IShowcaseTableData[] = [];
	export let events: IShowcaseTableData[] = [];
</script>

<h1>Options & Events</h1>
<Tabset>
	<svelte:fragment slot="tabs">
		<Tab ident={"opt"} active={true}>Component Options</Tab>
		<Tab ident={"events"}>Events</Tab>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<TabContent tabIdent="opt">
			<ShowcaseTable title="Component options" data={options} />
		</TabContent>
		<TabContent tabIdent="events">
			<ShowcaseTable events={true} title="Events" data={events} />
		</TabContent>
	</svelte:fragment>
</Tabset>
