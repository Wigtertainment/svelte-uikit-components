<script lang="ts">
	import { onMount, createEventDispatcher } from "svelte";
	import { uuidv4 } from "../../shared/uuid.service.js";
	import UIkit from "uikit";

	const dispatch = createEventDispatcher();
	let uikitAccordionEl: any;
	let id: string;

	export let collapsible: boolean = false;
	export let multiple: boolean = true;

	onMount(async () => {
		let selector = `[data-id='${getId()}']`;
		let element = document.querySelectorAll(selector);
		uikitAccordionEl = UIkit.accordion(element, {});
		uikitAccordionEl.$el.addEventListener("beforeshow", (event: any) => {
			dispatch("beforeshow", event);
		});
		uikitAccordionEl.$el.addEventListener("show", (event: any) => {
			dispatch("show", event);
		});
		uikitAccordionEl.$el.addEventListener("shown", (event: any) => {
			dispatch("shown", event);
		});
		uikitAccordionEl.$el.addEventListener("beforehide", (event: any) => {
			dispatch("beforehide", event);
		});
		uikitAccordionEl.$el.addEventListener("hide", (event: any) => {
			dispatch("hide", event);
		});
		uikitAccordionEl.$el.addEventListener("hide", (event: any) => {
			dispatch("hidden", event);
		});
	});

	function getId() {
		if (!id) id = uuidv4();
		return id;
	}

	function getOpt(): string {
		return `collapsible:${collapsible};multiple:${multiple}`;
	}

	export function toggle(index: number, animate: boolean) {
		uikitAccordionEl.toggle(index, animate);
	}
</script>

<ul data-id={getId()} uk-accordion={getOpt()}>
	<slot />
</ul>
