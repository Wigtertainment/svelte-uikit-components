<script lang="ts">
	import { setContext } from 'svelte';
	import { uuidv4 } from '../../shared/uuid.service.js';

	export let position: 'left' | 'top' | 'right' | 'bottom' = 'top';
	let id: string;

	function getId() {
		if (!id) id = uuidv4();
		return id;
	}
	setContext('tabsetId', getId());
</script>

<ul class:uk-tab-left={position === 'left'} class:uk-tab-right={position === 'right'} class:uk-tab-bottom={position === 'bottom'} uk-tab>
	<slot name="tabs" />
</ul>

<slot name="content" />
