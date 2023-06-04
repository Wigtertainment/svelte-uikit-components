<script lang="ts">
	export let divider: boolean = false;
	export let striped: boolean = false;
	export let hover: boolean = false;
	export let justify: boolean = false;
	export let responsive: boolean = false;
	export let size: "default" | "small" | "large" = "default";
</script>

<table
	class="uk-table"
	class:uk-table-responsive={responsive}
	class:uk-table-justify={justify}
	class:uk-table-divider={divider}
	class:uk-table-striped={striped}
	class:uk-table-hover={hover}
	class:uk-table-large={size === "large"}
	class:uk-table-small={size === "small"}
>
	<slot />
</table>
