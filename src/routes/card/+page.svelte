<script lang="ts">
	import Highlight from "svelte-highlight";
	import typescript from "svelte-highlight/languages/typescript";
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
			<Highlight language={typescript} {code} />
		</TabContent>
	</svelte:fragment>
</Tabset>
