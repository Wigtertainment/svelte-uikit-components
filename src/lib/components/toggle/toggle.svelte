<script lang="ts">
	import { afterUpdate, createEventDispatcher, onMount } from 'svelte';
	import UIkit from 'uikit';
	import type { ToggleAnimation, ToggleMedia, ToggleMode } from './types.js';

	type ToggleEventName = 'beforeshow' | 'show' | 'shown' | 'beforehide' | 'hide' | 'hidden';
	type ToggleInstance = {
		target?: Element[];
		toggle: () => void | Promise<void>;
		$destroy?: () => void;
	};

	const dispatch = createEventDispatcher<Record<ToggleEventName, Event>>();
	const eventNames: ToggleEventName[] = ['beforeshow', 'show', 'shown', 'beforehide', 'hide', 'hidden'];

	export let target: string | undefined = undefined;
	export let mode: ToggleMode = 'click';
	export let cls: string | false = false;
	export let media: ToggleMedia = false;
	export let animation: ToggleAnimation = false;
	export let duration: number = 200;
	export let queued: boolean = true;
	export let label: string = '';
	export let disabled: boolean = false;
	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let ariaExpanded: boolean | undefined = undefined;

	let element: HTMLButtonElement;
	let instance: ToggleInstance | null = null;
	let mounted = false;
	let initializedOptions = '';
	let eventTargets: Element[] = [];

	$: options = { target: target || false, mode, cls, media, animation, duration, queued };
	$: serializedOptions = JSON.stringify(options);

	function forwardEvent(event: Event): void {
		if (!dispatch(event.type as ToggleEventName, event)) {
			event.preventDefault();
		}
	}

	function destroy(): void {
		for (const eventTarget of eventTargets) {
			for (const eventName of eventNames) {
				eventTarget.removeEventListener(eventName, forwardEvent);
			}
		}

		eventTargets = [];
		instance?.$destroy?.();
		instance = null;
	}

	function initialize(): void {
		destroy();
		instance = UIkit.toggle(element, options) as ToggleInstance;
		eventTargets = Array.from(instance.target ?? []);

		for (const eventTarget of eventTargets) {
			for (const eventName of eventNames) {
				eventTarget.addEventListener(eventName, forwardEvent);
			}
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

	export async function toggle(): Promise<void> {
		await instance?.toggle();
	}
</script>

<button bind:this={element} {type} {disabled} aria-expanded={ariaExpanded} {...$$restProps} on:click on:focus on:blur on:keydown>
	{#if label}
		{label}
	{:else}
		<slot />
	{/if}
</button>
