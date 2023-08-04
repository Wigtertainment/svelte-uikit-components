<script lang="ts">
	import type { DropDownAnimation, DropDownMode, DropDownPadding, DropDownPosition } from './types.js';

	export let position: DropDownPosition = 'default';
	export let mode: DropDownMode = 'hover';
	export let padding: DropDownPadding = 'default';
	export let animation: DropDownAnimation = undefined;
	export let animationOut: boolean | undefined = undefined;
	export let animationDuration: number | undefined = undefined;
	export let offset: number | undefined = undefined;

	function getOptions(): string {
		let result: string = '';
		if (mode === 'click') {
			result = result + 'mode: click;';
		}
		if (position !== 'default') {
			result = result + `pos: ${position};`;
		}
		if (offset !== undefined) {
			result = result + `offset: ${offset};`;
		}
		if (animation !== undefined) {
			result = result + `animation: ${animation};`;
		}
		if (animationOut !== undefined) {
			result = result + `animate-out: ${animationOut};`;
		}
		if (animationDuration !== undefined) {
			result = result + `duration: ${animationDuration};`;
		}
		return result;
	}
</script>

<slot name="button" />
<div class:uk-dropdown-large={padding === 'large'} uk-dropdown={getOptions()}>
	<slot />
</div>
