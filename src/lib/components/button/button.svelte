<script lang="ts">
	import { createEventDispatcher } from "svelte";

	export let text: string = "";
	export let style:
		| "default"
		| "primary"
		| "secondary"
		| "danger"
		| "text"
		| "link" = "default";
	export let size: "small" | "large" = "small";
	export let width: "deafult" | "full" = "default";

	const dispatch = createEventDispatcher();

	function onClick(event) {
		dispatch("click", event);
	}
</script>

<button
	class="uk-button"
	class:uk-button-default={style === "default"}
	class:uk-button-primary={style === "primary"}
	class:uk-button-secondary={style === "secondary"}
	class:uk-button-danger={style === "danger"}
	class:uk-button-text={style === "text"}
	class:uk-button-link={style === "link"}
	class:uk-button-small={size === "small"}
	class:uk-button-large={size === "large"}
	class:uk-width-1-1={width === "full"}
	on:click={onClick}
>
	{text}
</button>
