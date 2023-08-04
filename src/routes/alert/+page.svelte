<script lang="ts">
	import { Alert, Tabset, Tab, TabContent } from '$lib/index.js';
	import { HighlightSvelte } from 'svelte-highlight';
	import type { IShowcaseTableData } from '../shared/types.js';
	import ShowcaseOptEvents from '../shared/showcase-opt-events.svelte';

	let code = `
<Alert showClose={false} animation={true} duration={150} style="danger">Danger Alert Content</Alert>
    `;

	let options: IShowcaseTableData[] = [
		{
			name: 'showClose',
			description: '-',
			type: 'boolean',
			default: 'false',
		},
		{
			name: 'animation',
			description: '-',
			type: 'boolean',
			default: 'true',
		},
		{
			name: 'duration',
			description: '-',
			type: 'number',
			default: '150',
		},
		{
			name: 'style',
			description: '-',
			type: "'primary' | 'success' | 'warning' | 'danger'",
			default: 'primary',
		},
	];

	let events: IShowcaseTableData[] = [
		{
			name: 'beforehide',
			description: '-',
		},
		{
			name: 'hide',
			description: '-',
		},
	];
</script>

<h1>Alert</h1>
<Tabset>
	<svelte:fragment slot="tabs">
		<Tab ident={'pre'} active={true}>Preview</Tab>
		<Tab ident={'code'}>Code</Tab>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<TabContent tabIdent="pre">
			<Alert showClose={false} animation={true} duration={150} style="primary">Primary Alert Content</Alert>
			<Alert showClose={false} animation={true} duration={150} style="success">Success Alert Content</Alert>
			<Alert showClose={false} animation={true} duration={150} style="warning">Warning Alert Content</Alert>
			<Alert showClose={false} animation={true} duration={150} style="danger">Danger Alert Content</Alert>
		</TabContent>
		<TabContent tabIdent="code">
			<HighlightSvelte {code} />
		</TabContent>
	</svelte:fragment>
</Tabset>
<ShowcaseOptEvents {options} {events} />
