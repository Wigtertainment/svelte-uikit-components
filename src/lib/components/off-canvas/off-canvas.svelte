<script lang="ts">
	import { onMount } from 'svelte';
	import UIkit from 'uikit';

	// Props mit TypeScript-Typen
	export let id: string = 'offcanvas-' + Math.random().toString(36).substr(2, 9);
	export let title: string = 'Menu';
	export let position: 'left' | 'right' = 'left';
	export let overlay: boolean = true;
	export let flip: boolean = false;
	export let mode: 'slide' | 'push' | 'reveal' = 'slide';
	export let isOpen: boolean = false;

	// Typ für UIkit Offcanvas-Instanz
	type OffcanvasInstance = {
		show: () => void;
		hide: () => void;
	};

	let offcanvas: OffcanvasInstance | null = null;

	onMount(() => {
		// Initialisiere Offcanvas
		const element = document.getElementById(id);
		if (element) {
			offcanvas = UIkit.offcanvas(element, {
				overlay,
				flip,
				mode,
			});

			// Sync initialen Zustand
			if (isOpen) offcanvas?.show();

			// Event Listener mit Typen
			UIkit.util.on(element, 'shown', () => {
				isOpen = true;
			});

			UIkit.util.on(element, 'hidden', () => {
				isOpen = false;
			});
		}
	});

	// Toggle-Funktion mit Type Annotation
	function toggle(): void {
		if (!offcanvas) return;
		isOpen ? offcanvas.hide() : offcanvas.show();
	}

	// Exportiere toggle für Elternkomponenten
	export { toggle };
</script>

<!-- Offcanvas Content -->
<div {id} class="uk-offcanvas" uk-offcanvas={`pos: ${position}; ${mode ? `mode: ${mode}` : ''}`}>
	<div class="uk-offcanvas-bar">
		<button class="uk-offcanvas-close" type="button" uk-close></button>
		<h3>{title}</h3>
		<slot></slot>
	</div>
</div>

<style>
	.uk-offcanvas-bar {
		background: #fff;
	}
</style>
