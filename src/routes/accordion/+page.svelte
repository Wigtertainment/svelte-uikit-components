<script lang="ts">
	import { HighlightSvelte } from "svelte-highlight";
	import {
		AccordionItem,
		Accordion,
		Tabset,
		Tab,
		TabContent,
	} from "$lib/index.js";
	import type { IShowcaseTableData } from "../shared/types.js";
	import ShowcaseOptEvents from "../shared/showcase-opt-events.svelte";

	let code = `
<Accordion collapsible={true}>
	<AccordionItem header="Item 1">Accordion Item 1 Content</AccordionItem>
	<AccordionItem header="Item 2">Accordion Item 2 Content</AccordionItem>
	<AccordionItem header="Item 3">Accordion Item 3 Content</AccordionItem>
</Accordion>
    `;

	let options: IShowcaseTableData[] = [
		{ name: "Accordion", isGroupHeader: true },
		{
			name: "collapsible",
			description: "All accordion items can be collapsed",
			type: "boolean",
			default: "false",
		},
		{
			name: "multiple",
			description:
				"Multiple content sections can be open at the same time",
			type: "boolean",
			default: "true",
		},
		{ name: "AccordionItem", isGroupHeader: true },
		{
			name: "header",
			description: "",
			type: "string",
			default: "",
		},
	];

	let events: IShowcaseTableData[] = [
		{
			name: "beforeshow",
			description: "-",
		},
		{
			name: "show",
			description: "-",
		},
		{
			name: "shown",
			description: "-",
		},
		{
			name: "beforehide",
			description: "-",
		},
		{
			name: "hide",
			description: "-",
		},
		{
			name: "hidden",
			description: "-",
		},
	];
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
				<AccordionItem header="Item 1">
					Accordion Item 1 Content
				</AccordionItem>
				<AccordionItem header="Item 2">
					Accordion Item 2 Content
				</AccordionItem>
				<AccordionItem header="Item 3">
					Accordion Item 3 Content
				</AccordionItem>
			</Accordion>
		</TabContent>
		<TabContent tabIdent="code">
			<HighlightSvelte {code} />
		</TabContent>
	</svelte:fragment>
</Tabset>
<ShowcaseOptEvents {options} {events} />
