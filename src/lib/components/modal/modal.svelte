<script lang="ts">
	import { afterUpdate, createEventDispatcher, onMount } from 'svelte';
	import UIkit from 'uikit';
	import Close from '../close/close.svelte';

	type ModalEventName = 'beforeshow' | 'show' | 'shown' | 'beforehide' | 'hide' | 'hidden';
	type ModalInstance = {
		show: () => Promise<boolean>;
		hide: () => Promise<boolean>;
		$destroy: () => void;
		target?: HTMLElement | null;
	};

	const dispatch = createEventDispatcher<Record<ModalEventName, Event>>();
	const eventNames: ModalEventName[] = ['beforeshow', 'show', 'shown', 'beforehide', 'hide', 'hidden'];
	let className: string = '';

	export { className as class };
	export let id: string | undefined = undefined;
	export let isOpen: boolean = false;
	export let title: string = '';
	export let label: string | undefined = undefined;
	export let showClose: boolean = true;
	export let closeLabel: string = 'Close';
	export let size: 'default' | 'container' | 'full' = 'default';
	export let centered: boolean = false;
	export let escClose: boolean = true;
	export let bgClose: boolean = true;
	export let stack: boolean = false;

	let element: HTMLDivElement;
	let dialog: HTMLDivElement;
	let instance: ModalInstance | null = null;
	let visible = false;
	let displayed = false;
	let lastOpen = false;
	let pendingShow = false;
	let initializedOptions = '';

	$: options = { escClose, bgClose, stack, container: false };
	$: serializedOptions = JSON.stringify(options);

	function handleEvent(event: Event): void {
		if (event.target !== element) return;
		if (event instanceof CustomEvent && event.detail?.[0] && event.detail[0] !== instance) {
			event.preventDefault();
			event.stopImmediatePropagation();
			return;
		}

		const name = event.type as ModalEventName;
		// UIkit can retry opening after another dialog finishes closing.
		if (name === 'beforeshow' && ((pendingShow && !lastOpen) || visible)) {
			pendingShow = false;
			event.preventDefault();
			event.stopImmediatePropagation();
			return;
		}
		if (name === 'show') {
			pendingShow = false;
			displayed = true;
			isOpen = lastOpen = visible = true;
		}
		if (name === 'hide') isOpen = lastOpen = visible = false;
		// Keep centered dialogs displayed until their closing transition completes.
		if (name === 'hidden') {
			displayed = false;
			restoreStackFocus(instance?.target);
		}
		if (name === 'shown' && (!element.contains(document.activeElement) || document.activeElement === element)) {
			dialog.focus({ preventScroll: true });
		}

		if (!dispatch(name, event, { cancelable: name === 'beforeshow' || name === 'beforehide' }) || event.defaultPrevented) {
			event.preventDefault();
			event.stopImmediatePropagation();
			if (name === 'beforeshow') pendingShow = false;
			isOpen = lastOpen = element.classList.contains('uk-open');
		}
	}

	function handleToggle(): void {
		pendingShow = false;
	}

	function restoreStackFocus(target: HTMLElement | null | undefined): void {
		queueMicrotask(() => {
			if (target?.isConnected && target.closest('.uk-modal.uk-open')) target.focus({ preventScroll: true });
		});
	}

	async function setOpen(open: boolean): Promise<boolean> {
		const current = instance;
		if (!current) return false;
		if (element.classList.contains('uk-open') === open) return true;
		if (open) {
			pendingShow = true;
			if (document.activeElement instanceof HTMLElement && !element.contains(document.activeElement)) {
				current.target = document.activeElement;
			}
		}

		return open ? current.show() : current.hide();
	}

	function destroy(): void {
		for (const name of eventNames) element.removeEventListener(name, handleEvent, true);
		element.removeEventListener('toggle', handleToggle, true);
		const current = instance;
		instance = null;
		const target = current?.target;
		current?.$destroy();
		restoreStackFocus(target);
		visible = false;
		displayed = false;
		pendingShow = false;
	}

	function initialize(): void {
		const target = instance?.target;
		destroy();
		// Capture before UIkit changes its active-modal list so events can be cancelled safely.
		for (const name of eventNames) element.addEventListener(name, handleEvent, true);
		element.addEventListener('toggle', handleToggle, true);
		instance = UIkit.modal(element, options) as ModalInstance;
		instance.target = target;
		initializedOptions = serializedOptions;
		lastOpen = isOpen;
		void setOpen(isOpen);
	}

	onMount(() => {
		initialize();
		return destroy;
	});

	afterUpdate(() => {
		if (!instance) return;
		if (serializedOptions !== initializedOptions) initialize();
		if (isOpen !== lastOpen) {
			lastOpen = isOpen;
			void setOpen(isOpen);
		}
	});

	export function show(): Promise<boolean> {
		isOpen = lastOpen = true;
		return setOpen(true);
	}

	export function hide(): Promise<boolean> {
		isOpen = lastOpen = false;
		return setOpen(false);
	}

	export function toggle(): Promise<boolean> {
		return isOpen ? hide() : show();
	}
</script>

<div
	bind:this={element}
	{...$$restProps}
	{id}
	class="uk-modal {className}"
	class:uk-open={visible}
	class:uk-flex={displayed && centered}
	style:display={displayed ? (centered ? 'flex' : 'block') : undefined}
	class:uk-modal-container={size === 'container'}
	class:uk-modal-full={size === 'full'}
	class:uk-flex-top={centered}>
	<div
		bind:this={dialog}
		class="uk-modal-dialog"
		class:uk-margin-auto-vertical={centered}
		role="dialog"
		aria-modal="true"
		aria-label={label || title || 'Dialog'}
		tabindex="-1">
		{#if showClose && !($$slots.header || title)}
			<Close class={size === 'full' ? 'uk-modal-close-full' : 'uk-modal-close-default'} large={size === 'full'} label={closeLabel} />
		{/if}
		{#if $$slots.header || title}
			<div class="uk-modal-header">
				<div class="modal-header-content uk-margin-remove-last-child">
					<slot name="header"><h2 class="uk-modal-title">{title}</h2></slot>
				</div>
				{#if showClose}
					<Close class="uk-modal-close-default" large={size === 'full'} label={closeLabel} />
				{/if}
			</div>
		{/if}
		<div class="uk-modal-body"><slot /></div>
		{#if $$slots.footer}
			<div class="uk-modal-footer"><slot name="footer" /></div>
		{/if}
	</div>
</div>

<style>
	.uk-modal-header {
		display: flex;
		align-items: center;
		gap: 20px;
	}

	.modal-header-content {
		flex: 1;
		min-width: 0;
	}

	.uk-modal-header :global(.uk-modal-close-default) {
		position: static;
		flex: none;
	}
</style>
