<script lang="ts">
	import { afterUpdate, createEventDispatcher, onMount } from 'svelte';
	import UIkit from 'uikit';
	import type { DropbarAnimation, DropbarDirection, DropbarMode, DropbarPosition, DropbarStretch } from './types.js';

	type DropbarEventName = 'toggle' | 'beforeshow' | 'show' | 'shown' | 'beforehide' | 'hide' | 'hidden' | 'stack';
	type DropInstance = {
		show: () => void;
		hide: (delay?: boolean) => void;
		$destroy?: () => void;
	};

	const dispatch = createEventDispatcher<Record<DropbarEventName, Event>>();
	const eventNames: DropbarEventName[] = ['toggle', 'beforeshow', 'show', 'shown', 'beforehide', 'hide', 'hidden', 'stack'];

	export let direction: DropbarDirection = 'top';
	export let large: boolean = false;
	export let mode: DropbarMode = 'click, hover';
	export let position: DropbarPosition | undefined = undefined;
	export let stretch: DropbarStretch | undefined = undefined;
	export let toggleSelector: string = '- *';
	export let target: boolean | string = false;
	export let boundary: string | false = false;
	export let animation: DropbarAnimation = 'uk-animation-fade';
	export let animateOut: boolean = false;
	export let duration: number = 200;
	export let delayShow: number = 0;
	export let delayHide: number = 800;
	export let offset: number = 0;
	export let flip: boolean = true;
	export let shift: boolean = true;
	export let autoUpdate: boolean = true;
	export let inset: boolean = false;
	export let bgScroll: boolean = true;
	export let closeOnScroll: boolean = false;
	export let container: boolean | string = false;
	export let className: string = '';

	let element: HTMLDivElement;
	let instance: DropInstance | null = null;
	let mounted = false;
	let initializedOptions = '';

	$: resolvedPosition = position ?? getDefaultPosition(direction);
	$: resolvedStretch = stretch ?? getDefaultStretch(direction);
	$: options = {
		toggle: toggleSelector,
		pos: resolvedPosition,
		stretch: resolvedStretch,
		mode,
		target,
		boundary,
		animation,
		animateOut,
		duration,
		delayShow,
		delayHide,
		offset,
		flip,
		shift,
		autoUpdate,
		inset,
		bgScroll,
		closeOnScroll,
		container,
	};
	$: serializedOptions = JSON.stringify(options);
	$: classes = ['uk-dropbar', `uk-dropbar-${direction}`, large && 'uk-dropbar-large', className].filter(Boolean).join(' ');

	function getDefaultPosition(value: DropbarDirection): DropbarPosition {
		switch (value) {
			case 'bottom':
				return 'top-left';
			case 'left':
				return 'left-top';
			case 'right':
				return 'right-top';
			default:
				return 'bottom-left';
		}
	}

	function getDefaultStretch(value: DropbarDirection): DropbarStretch {
		return value === 'left' || value === 'right' ? 'y' : 'x';
	}

	function forwardEvent(event: Event): void {
		if (!dispatch(event.type as DropbarEventName, event)) {
			event.preventDefault();
		}
	}

	function destroy(): void {
		for (const eventName of eventNames) {
			element?.removeEventListener(eventName, forwardEvent);
		}

		instance?.$destroy?.();
		instance = null;
	}

	function initialize(): void {
		destroy();
		instance = UIkit.drop(element, options) as DropInstance;

		for (const eventName of eventNames) {
			element.addEventListener(eventName, forwardEvent);
		}

		initializedOptions = serializedOptions;
	}

	onMount(() => {
		mounted = true;
		initialize();

		return () => {
			mounted = false;
			destroy();
		};
	});

	afterUpdate(() => {
		if (mounted && serializedOptions !== initializedOptions) {
			initialize();
		}
	});

	export function show(): void {
		instance?.show();
	}

	export function hide(delay: boolean = true): void {
		instance?.hide(delay);
	}
</script>

<slot name="toggle" />
<div bind:this={element} class={classes} {...$$restProps}>
	<slot />
</div>
