<script lang="ts">
	import type { INavItem } from "./nav.interfaces.js";
	import { createEventDispatcher } from "svelte";
	import NavItem from "./nav-item.svelte";
	let dispatch = createEventDispatcher();

	export let items: INavItem[] = [];

	function itemClicked(ident: string) {
		dispatch("itemClicked", ident);
	}
</script>

<ul class="uk-nav-default" uk-nav>
	{#each items as item}
		<NavItem {item} on:itemClicked={(event) => itemClicked(event.detail)} />
	{/each}
</ul>
