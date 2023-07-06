<script lang="ts">
	export let divider: boolean = false;
</script>

<dl class="uk-description-list" class:uk-description-list-divider={divider}>
	<slot />
</dl>
