<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { BreadcrumbItem } from './types.js';

	const dispatcher = createEventDispatcher();

	export let ariaLabel: string = 'Breadcrumb';
	export let items: BreadcrumbItem[] = [];

	function itemClicked(item: BreadcrumbItem) {
		dispatcher('itemClicked', item);
	}
</script>

<nav aria-label={ariaLabel}>
	<ul class="uk-breadcrumb">
		{#each items as item, index}
			{#if index === items.length - 1}
				<li>
					<span>
						{item.text}
					</span>
				</li>
			{:else}
				<li><a href="#" on:click={() => itemClicked(item)} class:uk-disabled={item.disabled}>{item.text}</a></li>
			{/if}
		{/each}
	</ul>
</nav>
