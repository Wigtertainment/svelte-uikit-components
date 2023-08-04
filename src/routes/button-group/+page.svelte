<script lang="ts">
	import { HighlightSvelte } from 'svelte-highlight';
	import { Button, ButtonGroup, Tabset, Tab, TabContent } from '$lib/index.js';
	import ShowcaseOptEvents from '../shared/showcase-opt-events.svelte';

	let code = `
<ButtonGroup>
	<Button label="Button 1" style="default" />
	<Button label="Button 2" style="primary" />
	<Button label="Button 3" style="danger" />
</ButtonGroup>
    `;
</script>

<h1>ButtonGroup</h1>
<Tabset>
	<svelte:fragment slot="tabs">
		<Tab ident={'pre'} active={true}>Preview</Tab>
		<Tab ident={'code'}>Code</Tab>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<TabContent tabIdent="pre">
			<ButtonGroup>
				<Button label="Button 1" style="default" />
				<Button label="Button 2" style="primary" />
				<Button label="Button 3" style="danger" />
			</ButtonGroup>
		</TabContent>
		<TabContent tabIdent="code">
			<HighlightSvelte {code} />
		</TabContent>
	</svelte:fragment>
</Tabset>
<ShowcaseOptEvents />
