<script lang="ts">
	import { Heading, Tabset, Tab, TabContent } from '$lib/index.js';
	import { HighlightSvelte } from 'svelte-highlight';
	import ShowcaseOptEvents from '../shared/showcase-opt-events.svelte';
	import type { IShowcaseTableData } from '../shared/types.js';

	let code = `
<Heading size="small">small heading</Heading>
<Heading size="medium">medium heading</Heading>
<Heading size="large">large heading</Heading>
<Heading size="xlarge">xlarge heading</Heading>
<Heading size="2xlarge">2xlarge heading</Heading>
    `;

	let codeDivider = `
<Heading divider={true}>Header with divider</Heading>
    `;

	let codeBullet = `
<Heading bullet={true}>Header with bullet</Heading>
    `;

	let codeLine = `
<Heading line="line-right">Header line rigth</Heading>
<Heading line="line-center">Header line center</Heading>
<Heading line="line-left">Header line left</Heading>
    `;

	let options: IShowcaseTableData[] = [
		{
			name: 'size',
			description: '-',
			type: `'small' | 'medium' | 'large' | 'xlarge' | '2xlarge' | undefined`,
			default: 'undefined',
		},
		{
			name: 'divider',
			description: '-',
			type: 'boolean',
			default: 'false',
		},
		{
			name: 'bullet',
			description: '-',
			type: 'boolean',
			default: 'false',
		},
		{
			name: 'line',
			description: '-',
			type: `'line-right' | 'line-center' | 'line-left' | undefined`,
			default: 'undefined',
		},
	];

	let events: IShowcaseTableData[] = [];
</script>

<h1>Heading</h1>
<h3>Size</h3>
<Tabset>
	<svelte:fragment slot="tabs">
		<Tab ident={'pre'} active={true}>Preview</Tab>
		<Tab ident={'code'}>Code</Tab>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<TabContent tabIdent="pre">
			<Heading size="small">small heading</Heading>
			<Heading size="medium">medium heading</Heading>
			<Heading size="large">large heading</Heading>
			<Heading size="xlarge">xlarge heading</Heading>
			<Heading size="2xlarge">2xlarge heading</Heading>
		</TabContent>
		<TabContent tabIdent="code">
			<HighlightSvelte {code} />
		</TabContent>
	</svelte:fragment>
</Tabset>

<h3>Divider</h3>
<Tabset>
	<svelte:fragment slot="tabs">
		<Tab ident={'pre'} active={true}>Preview</Tab>
		<Tab ident={'code'}>Code</Tab>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<TabContent tabIdent="pre">
			<Heading divider={true}>Header with divider</Heading>
		</TabContent>
		<TabContent tabIdent="code">
			<HighlightSvelte code={codeDivider} />
		</TabContent>
	</svelte:fragment>
</Tabset>

<h3>Bullet</h3>
<Tabset>
	<svelte:fragment slot="tabs">
		<Tab ident={'pre'} active={true}>Preview</Tab>
		<Tab ident={'code'}>Code</Tab>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<TabContent tabIdent="pre">
			<Heading bullet={true}>Header with bullet</Heading>
		</TabContent>
		<TabContent tabIdent="code">
			<HighlightSvelte code={codeBullet} />
		</TabContent>
	</svelte:fragment>
</Tabset>

<h3>Line</h3>
<Tabset>
	<svelte:fragment slot="tabs">
		<Tab ident={'pre'} active={true}>Preview</Tab>
		<Tab ident={'code'}>Code</Tab>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<TabContent tabIdent="pre">
			<Heading line="line-right">Header line rigth</Heading>
			<Heading line="line-center">Header line center</Heading>
			<Heading line="line-left">Header line left</Heading>
		</TabContent>
		<TabContent tabIdent="code">
			<HighlightSvelte code={codeLine} />
		</TabContent>
	</svelte:fragment>
</Tabset>
<ShowcaseOptEvents {options} {events} />
