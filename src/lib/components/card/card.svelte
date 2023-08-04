<script lang="ts">
	let clazz: string = '';
	export { clazz as class };
	export let hover: boolean = true;
	export let size: 'small' | 'default' | 'large' = 'default';
	export let style: 'default' | 'primary' | 'secondary' = 'default';
</script>

<div
	class={`uk-card uk-card-default ${clazz || ''}`}
	class:uk-card-hover={hover}
	class:uk-card-small={size === 'small'}
	class:uk-card-large={size === 'large'}
	class:uk-card-default={style === 'default'}
	class:uk-card-primary={style === 'primary'}
	class:uk-card-secondary={style === 'secondary'}>
	<slot />
</div>
