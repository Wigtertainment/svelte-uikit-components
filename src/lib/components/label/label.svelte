<script lang="ts">
	let clazz: string = "";
	export { clazz as class };
	export let type: "default" | "success" | "warning" | "danger" = "default";
</script>

<span class={`uk-label ${"uk-label-" + type} ${clazz || ""}`}>
	<slot />
</span>
