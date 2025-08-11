<script lang="ts">
	import { Tabset, Tab, TabContent, Progress } from '$lib/index.js';
	import { HighlightSvelte } from 'svelte-highlight';
	import type { IShowcaseTableData } from '../shared/types.js';
	import ShowcaseOptEvents from '../shared/showcase-opt-events.svelte';

	let progress = 50;

	let code = `
<Progress bind:value={progress} />
    `;

	let options: IShowcaseTableData[] = [
		{
			name: 'value',
			description: '-',
			type: `'number'`,
			default: '0',
		},
		{
			name: 'max',
			description: '-',
			type: `'number'`,
			default: '100',
		},
	];

	let events: IShowcaseTableData[] = [];
</script>

<h1>Progress</h1>
<h3>Default</h3>
<Tabset>
	<svelte:fragment slot="tabs">
		<Tab ident={'pre'} active={true}>Preview</Tab>
		<Tab ident={'code'}>Code</Tab>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<TabContent tabIdent="pre">
			<Progress bind:value={progress} />
		</TabContent>
		<TabContent tabIdent="code">
			<HighlightSvelte {code} />
		</TabContent>
	</svelte:fragment>
</Tabset>
<ShowcaseOptEvents {options} {events} />
