<script lang="ts">
	import { onMount } from 'svelte';
	import UIkit from 'uikit';

	export let value: number = 0;
	export let max: number = 100;
	export let id: string = 'progress-' + Math.random().toString(36).substring(2, 9);

	function updateProgress(newValue: number): void {
		value = Math.max(0, Math.min(newValue, max));
		const element = document.getElementById(id);
		if (element) {
			UIkit.util.attr(element, 'value', value);
		}
	}

	$: updateProgress(value);

	onMount(() => {
		updateProgress(value);
	});
</script>

<progress {id} class="uk-progress" {value} {max}> </progress>
