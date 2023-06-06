<script lang="ts">
	import type { INavItem } from "./nav.interfaces.js";
	import { createEventDispatcher } from "svelte";
	let dispatch = createEventDispatcher();

	export let item: INavItem;

	function itemClicked(ident: string) {
		dispatch("itemClicked", ident);
	}
</script>

{#if item.isHeader}
	<li class="uk-nav-header">
		{item.text}
	</li>
{:else}
	<li
		class:uk-active={item.active}
		class:uk-parent={item.children?.length && item.children?.length > 0}
	>
		{#if item.children && item.children.length > 0}
			<a href="#">{item.text} <span uk-nav-parent-icon /></a>
			<ul class="uk-nav-sub">
				{#each item.children as child}
					<svelte:self item={child} />
				{/each}
			</ul>
		{:else if item.href}
			<a href={item.href} on:click={() => itemClicked(item.ident)}>
				{item.text}
			</a>
		{:else}
			<a on:click={() => itemClicked(item.ident)}>{item.text}</a>
		{/if}
	</li>
{/if}
