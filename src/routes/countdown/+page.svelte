<script lang="ts">
	import Highlight from "svelte-highlight";
	import typescript from "svelte-highlight/languages/typescript";
	import { Countdown, Tabset, Tab, TabContent } from "$lib/index.js";

	let code = `
<Countdown date={new Date(\`${new Date().getFullYear() + 1}-1-1\`)} />
    `;
</script>

<h1>Countdown</h1>
<Tabset>
	<svelte:fragment slot="tabs">
		<Tab ident={"pre"} active={true}>Preview</Tab>
		<Tab ident={"code"}>Code</Tab>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<TabContent tabIdent="pre">
			<Countdown date={new Date(`${new Date().getFullYear() + 1}-1-1`)} />
		</TabContent>
		<TabContent tabIdent="code">
			<Highlight language={typescript} {code} />
		</TabContent>
	</svelte:fragment>
</Tabset>
