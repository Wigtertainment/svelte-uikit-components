<script lang="ts">
	import { HighlightSvelte } from "svelte-highlight";
	import { Button, Tabset, Tab, TabContent } from "$lib/index.js";
	import ShowcaseOptEvents from "../shared/showcase-opt-events.svelte";
	import type { IShowcaseTableData } from "../shared/types.js";

	let code = `
<Button label="Click" on:click={buttonClicked} />
    `;

	function buttonClicked() {
		alert("Button clicked");
	}

	const options: IShowcaseTableData[] = [
		{
			name: "label",
			description: "",
			type: "string",
			default: "",
		},
		{
			name: "disabled",
			description: "",
			type: "boolean",
			default: "false",
		},
		{
			name: "style",
			description: "",
			type: "'default' | 'primary' | 'secondary' | 'danger' | 'text' | 'link'",
			default: "default",
		},
		{
			name: "size",
			description: "Make the button smaller or larger",
			type: "'small' | 'default' | 'large'",
			default: "default",
		},
		{
			name: "width",
			description: "The button will take up full width",
			type: "'default' | 'full'",
			default: "default",
		},
	];

	const events: IShowcaseTableData[] = [
		{
			name: "on:click",
			description: "",
		},
	];
</script>

<h1>Button</h1>
<Tabset>
	<svelte:fragment slot="tabs">
		<Tab ident={"pre"} active={true}>Preview</Tab>
		<Tab ident={"code"}>Code</Tab>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<TabContent tabIdent="pre">
			<Button label="Click" on:click={buttonClicked} />
		</TabContent>
		<TabContent tabIdent="code">
			<HighlightSvelte {code} />
		</TabContent>
	</svelte:fragment>
</Tabset>
<ShowcaseOptEvents {options} {events} />
