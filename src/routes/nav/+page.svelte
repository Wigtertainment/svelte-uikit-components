<script lang="ts">
	import Highlight from "svelte-highlight";
	import typescript from "svelte-highlight/languages/typescript";
	import Nav from "$lib/components/nav/nav.svelte";
	import type { INavItem } from "../../lib/index.js";

	let items: INavItem[] = [
		{ ident: "", text: "Menu", isHeader: true },
		{ ident: "1", text: "Item 1" },
		{ ident: "2", text: "Item 2" },
		{ ident: "3", text: "Item 3" },
	];

	function navigate(event: CustomEvent<string>) {
		alert(`Navigate to Item ${event.detail}`);
	}

    let code = `
        <script lang="ts">
            let items: INavItem[] = [
                { ident: "", text: "Menu", isHeader: true },
                { ident: "1", text: "Item 1" },
                { ident: "2", text: "Item 2" },
                { ident: "3", text: "Item 3" },
            ];

            function navigate(event: CustomEvent<string>) {
                alert(\`Navigate to Item \${event.detail}\`);
            } 
        <\/script>
        
        <Nav {items} on:itemClicked={navigate} />
    `;
</script>

<h1>Nav</h1>
<Nav {items} on:itemClicked={navigate} />

<Highlight language={typescript} {code} />
