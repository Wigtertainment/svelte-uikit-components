<script lang="ts">
	export let style: 'default' | 'muted' | 'primary' | 'secondary' = 'default';
	export let size: 'xsmall' | 'small' | 'large' | 'xlarge' = 'small';
	export let preserveColor: boolean = false;
	export let removePadding: boolean = false;
	export let overlap: boolean = false;
</script>

<div
	class="uk-section"
	class:uk-section-overlap={overlap === true}
	class:uk-section-default={style === 'default'}
	class:uk-section-muted={style === 'muted'}
	class:uk-section-primary={style === 'primary'}
	class:uk-section-secondary={style === 'secondary'}
	class:uk-section-xsmall={size === 'xsmall'}
	class:uk-section-small={size === 'small'}
	class:uk-section-large={size === 'large'}
	class:uk-section-xlarge={size === 'xlarge'}
	class:uk-padding-remove-vertical={removePadding === true}
	class:uk-preserve-color={preserveColor === true}>
	<div class="uk-container">
		<slot />
	</div>
</div>
