<script lang="ts">
	import type { INavItem } from "./nav.interfaces.js";
	import { createEventDispatcher } from "svelte";
	let dispatch = createEventDispatcher();

	export let items: INavItem[] = [];

	function itemClicked(ident: string) {
		dispatch("itemClicked", ident);
	}
</script>

<ul class="uk-nav uk-nav-default">
	{#each items as item}
		<li class:uk-active={item.active}>
			{#if item.href}
				<a href={item.href} on:click={() => itemClicked(item.ident)}>
					{item.text}
				</a>
			{:else}
				<a on:click={() => itemClicked(item.ident)}>{item.text}</a>
			{/if}
		</li>
	{/each}
</ul>
