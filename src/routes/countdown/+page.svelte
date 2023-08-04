<script lang="ts">
	import { HighlightSvelte } from 'svelte-highlight';
	import { Countdown, Tabset, Tab, TabContent } from '$lib/index.js';
	import ShowcaseOptEvents from '../shared/showcase-opt-events.svelte';

	let code = `
<Countdown date={new Date(\`${new Date().getFullYear() + 1}-1-1\`)} />
    `;
</script>

<h1>Countdown</h1>
<Tabset>
	<svelte:fragment slot="tabs">
		<Tab ident={'pre'} active={true}>Preview</Tab>
		<Tab ident={'code'}>Code</Tab>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<TabContent tabIdent="pre">
			<Countdown date={new Date(`${new Date().getFullYear() + 1}-1-1`)} />
		</TabContent>
		<TabContent tabIdent="code">
			<HighlightSvelte {code} />
		</TabContent>
	</svelte:fragment>
</Tabset>
<ShowcaseOptEvents />
