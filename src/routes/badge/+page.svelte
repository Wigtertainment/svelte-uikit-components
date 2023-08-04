<script lang="ts">
	import { Badge, Tabset, Tab, TabContent } from '$lib/index.js';
	import { HighlightSvelte } from 'svelte-highlight';
	import type { IShowcaseTableData } from '../shared/types.js';
	import ShowcaseOptEvents from '../shared/showcase-opt-events.svelte';

	let code = `<Badge>1</Badge>`;

	let options: IShowcaseTableData[] = [];

	let events: IShowcaseTableData[] = [];
</script>

<h1>Badge</h1>
<Tabset>
	<svelte:fragment slot="tabs">
		<Tab ident={'pre'} active={true}>Preview</Tab>
		<Tab ident={'code'}>Code</Tab>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<TabContent tabIdent="pre">
			<Badge>1</Badge>
			<Badge>100</Badge>
		</TabContent>
		<TabContent tabIdent="code">
			<HighlightSvelte {code} />
		</TabContent>
	</svelte:fragment>
</Tabset>
<ShowcaseOptEvents {options} {events} />
