<script lang="ts">
	import { Tabset, Tab, TabContent, OffCanvas, Button } from '$lib/index.js';
	import { HighlightSvelte } from 'svelte-highlight';
	import type { IShowcaseTableData } from '../shared/types.js';
	import ShowcaseOptEvents from '../shared/showcase-opt-events.svelte';

	let code = `
<Button on:click={() => offCanvas!.toggle()}>Toggle Off-Canvas</Button>

<OffCanvas bind:this={offCanvas} title="Navigation" position="right" mode="push">
	<ul class="uk-nav uk-nav-default">
		<li><a href="#">Home</a></li>
		<li><a href="#">About</a></li>
		<li><a href="#">Contact</a></li>
	</ul>
</OffCanvas>
    `;

	let options: IShowcaseTableData[] = [
		{
			name: 'title',
			description: '-',
			type: `'string'`,
			default: 'Menu',
		},
		{
			name: 'position',
			description: '-',
			type: `'left' | 'right'`,
			default: 'left',
		},
		{
			name: 'overlay',
			description: '-',
			type: `'boolean'`,
			default: 'true',
		},
		{
			name: 'flip',
			description: '-',
			type: `'boolean'`,
			default: 'false',
		},
		{
			name: 'mode',
			description: '-',
			type: `'slide' | 'push' | 'reveal'`,
			default: 'slide',
		},
		{
			name: 'isOpen',
			description: '-',
			type: `'boolean'`,
			default: 'false',
		},
	];

	let offCanvas;

	let events: IShowcaseTableData[] = [];
</script>

<h1>Off-Canvas</h1>
<h3>Default</h3>
<Tabset>
	<svelte:fragment slot="tabs">
		<Tab ident={'pre'} active={true}>Preview</Tab>
		<Tab ident={'code'}>Code</Tab>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<TabContent tabIdent="pre">
			<Button on:click={() => offCanvas!.toggle()}>Toggle Off-Canvas</Button>
			<OffCanvas bind:this={offCanvas}>
				<ul class="uk-nav uk-nav-default">
					<li><a href="#">Home</a></li>
					<li><a href="#">About</a></li>
					<li><a href="#">Contact</a></li>
				</ul>
			</OffCanvas>
		</TabContent>
		<TabContent tabIdent="code">
			<HighlightSvelte {code} />
		</TabContent>
	</svelte:fragment>
</Tabset>
<ShowcaseOptEvents {options} {events} />
