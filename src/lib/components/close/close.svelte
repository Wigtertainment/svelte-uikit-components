<script lang="ts">
	let className: string = '';

	export { className as class };
	export let large: boolean = false;
	export let label: string = 'Close';
	export let disabled: boolean = false;
</script>

<button type="button" class={className} class:uk-close-large={large} aria-label={label} uk-close {disabled} on:click></button>
