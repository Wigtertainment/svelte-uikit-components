<script lang="ts">
	let className: string = '';

	export { className as class };
	export let icon: string;
	export let ratio: number = 1;
	export let variant: 'default' | 'link' | 'button' | 'overlay' = 'default';
	export let href: string | undefined = undefined;
	export let label: string | undefined = undefined;
</script>

<svelte:element
	this={href === undefined ? 'span' : 'a'}
	{...$$restProps}
	{href}
	class={className}
	class:uk-icon-link={variant === 'link'}
	class:uk-icon-button={variant === 'button'}
	class:uk-icon-overlay={variant === 'overlay'}
	role={href === undefined && label ? 'img' : undefined}
	aria-label={label}
	aria-hidden={href === undefined && !label ? true : undefined}
	uk-icon={`icon: ${icon}; ratio: ${ratio}`}
	on:click />
