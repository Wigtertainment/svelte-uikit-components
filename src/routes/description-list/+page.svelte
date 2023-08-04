<script lang="ts">
	import { DescriptionList, DescriptionListTitle, DescriptionListData, Tabset, Tab, TabContent } from '$lib/index.js';
	import { HighlightSvelte } from 'svelte-highlight';
	import type { IShowcaseTableData } from '../shared/types.js';
	import ShowcaseOptEvents from '../shared/showcase-opt-events.svelte';

	let code = `
<DescriptionList>
    <DescriptionListTitle>Description Title</DescriptionListTitle>
    <DescriptionListData>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna
        aliqua.
    </DescriptionListData>
</DescriptionList>
    `;

	let codeWithDivider = `
<DescriptionList divider={true}>
    <DescriptionListTitle>Description Title</DescriptionListTitle>
    <DescriptionListData>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna
        aliqua.
    </DescriptionListData>
    <DescriptionListTitle>Description Title</DescriptionListTitle>
    <DescriptionListData>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna
        aliqua.
    </DescriptionListData>
</DescriptionList>
    `;

	let options: IShowcaseTableData[] = [
		{
			name: 'divider',
			description: '-',
			type: 'boolean',
			default: 'false',
		},
	];

	let events: IShowcaseTableData[] = [];
</script>

<h1>Description List</h1>
<h3>Default</h3>
<Tabset>
	<svelte:fragment slot="tabs">
		<Tab ident={'pre'} active={true}>Preview</Tab>
		<Tab ident={'code'}>Code</Tab>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<TabContent tabIdent="pre">
			<DescriptionList>
				<DescriptionListTitle>Description Title</DescriptionListTitle>
				<DescriptionListData>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</DescriptionListData>
			</DescriptionList>
		</TabContent>
		<TabContent tabIdent="code">
			<HighlightSvelte {code} />
		</TabContent>
	</svelte:fragment>
</Tabset>
<h3>With Divider</h3>
<Tabset>
	<svelte:fragment slot="tabs">
		<Tab ident={'pre'} active={true}>Preview</Tab>
		<Tab ident={'code'}>Code</Tab>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<TabContent tabIdent="pre">
			<DescriptionList divider={true}>
				<DescriptionListTitle>Description Title</DescriptionListTitle>
				<DescriptionListData>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</DescriptionListData>
				<DescriptionListTitle>Description Title</DescriptionListTitle>
				<DescriptionListData>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</DescriptionListData>
			</DescriptionList>
		</TabContent>
		<TabContent tabIdent="code">
			<HighlightSvelte code={codeWithDivider} />
		</TabContent>
	</svelte:fragment>
</Tabset>
<ShowcaseOptEvents {options} {events} />
