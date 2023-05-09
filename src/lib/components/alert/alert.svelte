<script lang="ts">
	import { onMount, createEventDispatcher } from "svelte";
	import { uuidv4 } from "../../shared/uuid.service.js";
	import UIkit from "uikit";

	const dispatch = createEventDispatcher();
	let id: string;
	export let showClose: boolean = false;
	export let animation: boolean = true;
	export let duration: number = 150;
	export let style: "primary" | "success" | "warning" | "danger" = "primary";

	function getId() {
		if (!id) id = uuidv4();
		return id;
	}

	onMount(async () => {
		init();
	});

	function init() {
		let uikitAlertEl = createElement();
		addEventListener(uikitAlertEl);
	}

	function createElement() {
		let selector = `[data-id='${getId()}']`;
		let element = document.querySelectorAll(selector);
		let uikitAlertEl = UIkit.alert(element, {
			animation: animation,
			duration: duration,
		});
		return uikitAlertEl;
	}

	function addEventListener(uikitAlertEl: any) {
		uikitAlertEl.$el.addEventListener("beforehide", (event: unknown) => {
			dispatch("beforehide", event);
		});
		uikitAlertEl.$el.addEventListener("hide", (event: unknown) => {
			dispatch("hide", event);
		});
	}
</script>

<div
	data-id={getId()}
	uk-alert
	class:uk-alert-primary={style === "primary"}
	class:uk-alert-success={style === "success"}
	class:uk-alert-warning={style === "warning"}
	class:uk-alert-danger={style === "danger"}
>
	{#if showClose}
		<a class="uk-alert-close" uk-close />
	{/if}
	<slot />
</div>
