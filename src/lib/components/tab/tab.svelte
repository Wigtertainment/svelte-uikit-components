<script lang="ts">
	import { onMount, getContext } from "svelte";
	import {
		selectedTabStore,
		setSelectedTab,
		type ISelectedTabEvent,
	} from "./store.js";

	export let ident: string;
	export let active: boolean = false;
	export let disabled: boolean = false;

	let tabsetId: string = getContext("tabsetId");
	let selectedId: string;

	onMount(() => {
		if (active) selectTab();
		selectedTabStore.subscribe((event: ISelectedTabEvent) => {
			if (event.tabsetId === tabsetId) {
				selectedId = event.selectedId;
			}
		});
	});

	function selectTab() {
		setSelectedTab({ tabsetId: tabsetId, selectedId: ident });
	}
</script>

<li class:uk-active={active} class:uk-disabled={disabled} on:click={selectTab}>
	<a href="">
		<slot />
	</a>
</li>
