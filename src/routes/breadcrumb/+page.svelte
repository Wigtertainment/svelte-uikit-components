<script lang="ts">
	import { Breadcrumb, BreadcrumbItem, Tabset, Tab, TabContent } from '$lib/index.js';
	import { HighlightSvelte } from 'svelte-highlight';
	import type { IShowcaseTableData } from '../shared/types.js';
	import ShowcaseOptEvents from '../shared/showcase-opt-events.svelte';

	let items: BreadcrumbItem[] = [
		{ ident: '1', text: 'First Page' },
		{ ident: '2', text: 'Second Page' },
		{ ident: '3', text: 'Last Page' },
	];
	function itemClicked(event: CustomEvent<BreadcrumbItem>) {
		alert(`Page "${event.detail.text}" clicked!`);
	}

	let code = `
<script lang="ts">
	import { Breadcrumb, BreadcrumbItem } from 'svelte-uikit-components';

	let items: BreadcrumbItem[] = [
		{ ident: '1', text: 'First Page' },
		{ ident: '2', text: 'Second Page' },
		{ ident: '3', text: 'Last Page' },
	];

	function itemClicked(event: CustomEvent<BreadcrumbItem>) {
		alert(\`Page "\${event.detail.text}" clicked!\`);
	}
<\/script>

<Breadcrumb {items} on:itemClicked={(event) => itemClicked(event)} />
	`;

	let options: IShowcaseTableData[] = [
		{ name: 'items', description: '-', default: '[]', type: 'BreadcrumbItem[]' },
		{ isGroupHeader: true, name: 'Accessibility' },
		{ name: 'ariaLabel', description: '-', default: 'Breadcrumb', type: 'string' },
	];

	let events: IShowcaseTableData[] = [{ name: 'on:itemClicked', type: 'BreadcrumbItem' }];
</script>

<h1>Breadcrumb</h1>
<Tabset>
	<svelte:fragment slot="tabs">
		<Tab ident={'pre'} active={true}>Preview</Tab>
		<Tab ident={'code'}>Code</Tab>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<TabContent tabIdent="pre">
			<Breadcrumb {items} on:itemClicked={(event) => itemClicked(event)} />
		</TabContent>
		<TabContent tabIdent="code">
			<HighlightSvelte {code} />
		</TabContent>
	</svelte:fragment>
</Tabset>
<ShowcaseOptEvents {options} {events} />
