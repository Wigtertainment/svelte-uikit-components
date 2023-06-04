<script lang="ts">
	import { HighlightSvelte } from "svelte-highlight";
	import {
		Button,
		Card,
		CardHeader,
		CardFooter,
		CardContent,
		Tabset,
		Tab,
		TabContent,
	} from "$lib/index.js";
	import ShowcaseOptEvents from "../shared/showcase-opt-events.svelte";

	let code = `
<Card>
	<CardHeader>
		<h1>Header</h1>
	</CardHeader>
	<CardContent>Card Content</CardContent>
	<CardFooter>
		<Button label="Action" />
	</CardFooter>
</Card>
    `;
</script>

<h1>Card</h1>
<Tabset>
	<svelte:fragment slot="tabs">
		<Tab ident={"pre"} active={true}>Preview</Tab>
		<Tab ident={"code"}>Code</Tab>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<TabContent tabIdent="pre">
			<Card>
				<CardHeader>
					<h1>Header</h1>
				</CardHeader>
				<CardContent>Card Content</CardContent>
				<CardFooter>
					<Button label="Action" />
				</CardFooter>
			</Card>
		</TabContent>
		<TabContent tabIdent="code">
			<HighlightSvelte {code} />
		</TabContent>
	</svelte:fragment>
</Tabset>
<ShowcaseOptEvents />
