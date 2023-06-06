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
		CardMedia,
	} from "$lib/index.js";
	import ShowcaseOptEvents from "../shared/showcase-opt-events.svelte";
	import type { IShowcaseTableData } from "../shared/types.js";

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

	let cardWithMediaCode = `
<Card>
	<CardMedia>
		<img
			alt="Card Media Cat"
			src="https://nypost.com/wp-content/uploads/sites/2/2022/07/Cat-feature.jpg"
		/>
	</CardMedia>
	<CardHeader>
		<h1>Header</h1>
	</CardHeader>
	<CardContent>Card Content</CardContent>
	<CardFooter>
		<Button label="Action" />
	</CardFooter>
</Card>
	`;

	const options: IShowcaseTableData[] = [
		{ name: "Card", isGroupHeader: true },
		{ name: "hover", description: "", default: "true", type: "boolean" },
		{
			name: "size",
			description: "",
			default: "default",
			type: "'small' | 'default' | 'large'",
		},
		{
			name: "style",
			description: "",
			default: "default",
			type: "'default' | 'primary' | 'secondary'",
		},
		{ name: "CardMedia", isGroupHeader: true },
		{
			name: "position",
			description: "",
			default: "top",
			type: "'top' | 'bottom' | 'left' | 'right'",
		},
	];
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
<h1>Card with Media</h1>
<Tabset>
	<svelte:fragment slot="tabs">
		<Tab ident={"pre"} active={true}>Preview</Tab>
		<Tab ident={"code"}>Code</Tab>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<TabContent tabIdent="pre">
			<Card>
				<CardMedia>
					<img
						alt="Card Media Cat"
						src="https://nypost.com/wp-content/uploads/sites/2/2022/07/Cat-feature.jpg"
					/>
				</CardMedia>
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
			<HighlightSvelte code={cardWithMediaCode} />
		</TabContent>
	</svelte:fragment>
</Tabset>
<ShowcaseOptEvents {options} />
