<script lang="ts">
	import { Button } from '$lib/index.js';
	import { goto } from '$app/navigation';

	function navigate() {
		goto('/getting-started');
	}
</script>

<h1>Welcome to svelte-uikit-components</h1>
<p>Svelte Component Library for the UIkit framework</p>
<Button label={'GETTING STARTED'} style={'primary'} on:click={navigate} />

<div style="padding: 20px;" />
