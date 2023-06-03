<script lang="ts">
	import Highlight from "svelte-highlight";
	import typescript from "svelte-highlight/languages/typescript";
	import { AccordionItem, Accordion, Tabset, Tab, TabContent } from "$lib/index.js";

	let code = `
<Accordion collapsible={true}>
	<AccordionItem header="TEST">DAS ist nur ein TEST</AccordionItem>
	<AccordionItem header="TEST 1">DAS ist nur ein TEST 1</AccordionItem>
	<AccordionItem header="TEST 2">DAS ist nur ein TEST 2</AccordionItem>
</Accordion>
    `;
</script>

<h1>Accordion</h1>
<Tabset>
	<svelte:fragment slot="tabs">
		<Tab ident={"pre"} active={true}>Preview</Tab>
		<Tab ident={"code"}>Code</Tab>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<TabContent tabIdent="pre">
			<Accordion collapsible={true}>
				<AccordionItem header="TEST">
					DAS ist nur ein TEST
				</AccordionItem>
				<AccordionItem header="TEST 1">
					DAS ist nur ein TEST 1
				</AccordionItem>
				<AccordionItem header="TEST 2">
					DAS ist nur ein TEST 2
				</AccordionItem>
			</Accordion>
		</TabContent>
		<TabContent tabIdent="code">
			<Highlight language={typescript} {code} />
		</TabContent>
	</svelte:fragment>
</Tabset>
