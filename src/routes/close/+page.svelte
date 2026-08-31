<script lang="ts">
	import { Close, Tabset, Tab, TabContent } from '$lib/index.js';
	import { HighlightSvelte } from 'svelte-highlight';
	import type { IShowcaseTableData } from '../shared/types.js';
	import ShowcaseOptEvents from '../shared/showcase-opt-events.svelte';

	let code = `
<Close />
    `;

	let codeLarge = `
<Close large />
    `;

	let options: IShowcaseTableData[] = [
		{
			name: 'large',
			description: 'Displays the large UIkit close icon.',
			type: 'boolean',
			default: 'false',
		},
		{
			name: 'label',
			description: 'Accessible label for the close button.',
			type: 'string',
			default: 'Close',
		},
		{
			name: 'disabled',
			description: 'Disables the close button.',
			type: 'boolean',
			default: 'false',
		},
		{
			name: 'class',
			description: 'Additional classes, for example uk-alert-close or uk-modal-close-default.',
			type: 'string',
			default: '',
		},
	];

	let events: IShowcaseTableData[] = [
		{
			name: 'click',
			description: 'Emitted when the close button is clicked.',
			type: 'MouseEvent',
			default: '-',
		},
	];
</script>

<h1>Close</h1>
<h3>Default</h3>
<Tabset>
	<svelte:fragment slot="tabs">
		<Tab ident={'default-preview'} active={true}>Preview</Tab>
		<Tab ident={'default-code'}>Code</Tab>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<TabContent tabIdent="default-preview">
			<Close />
		</TabContent>
		<TabContent tabIdent="default-code">
			<HighlightSvelte {code} />
		</TabContent>
	</svelte:fragment>
</Tabset>

<h3>Large</h3>
<Tabset>
	<svelte:fragment slot="tabs">
		<Tab ident={'large-preview'} active={true}>Preview</Tab>
		<Tab ident={'large-code'}>Code</Tab>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<TabContent tabIdent="large-preview">
			<Close large />
		</TabContent>
		<TabContent tabIdent="large-code">
			<HighlightSvelte code={codeLarge} />
		</TabContent>
	</svelte:fragment>
</Tabset>

<ShowcaseOptEvents {options} {events} />
