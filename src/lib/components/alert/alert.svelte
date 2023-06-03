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
	let uikitAlertEl: any;
	let mounted: boolean = false;

	function getId() {
		if (!id) id = uuidv4();
		return id;
	}

	onMount(async () => {
		init();
		mounted = true;
	});

	function init() {
		createElement();
		addEventListener();
	}

	function createElement() {
		let selector = `[data-id='${getId()}']`;
		let element = document.querySelectorAll(selector);
		uikitAlertEl = UIkit.alert(element, {
			animation: animation,
			duration: duration,
		});
	}

	function addEventListener() {
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
