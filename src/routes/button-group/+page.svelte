<script lang="ts">
	import Highlight from "svelte-highlight";
	import typescript from "svelte-highlight/languages/typescript";
	import { Button, ButtonGroup, Tabset, Tab, TabContent } from "$lib/index.js";

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
		<Tab ident={"pre"} active={true}>Preview</Tab>
		<Tab ident={"code"}>Code</Tab>
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
			<Highlight language={typescript} {code} />
		</TabContent>
	</svelte:fragment>
</Tabset>
