<script lang="ts">
	import { onMount, getContext } from "svelte";
	import { selectedTabStore, type ISelectedTabEvent } from "./store.js";

	export let tabIdent: string;
	let selectedId: string;
	let tabsetId: string = getContext("tabsetId");

	onMount(() => {
		selectedTabStore.subscribe((event: ISelectedTabEvent) => {
			if (event.tabsetId === tabsetId) {
				selectedId = event.selectedId;
			}
		});
	});
</script>

{#if tabIdent === selectedId}
	<slot />
{/if}
