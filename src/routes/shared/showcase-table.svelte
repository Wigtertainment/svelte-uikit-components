<script lang="ts">
	import { Table } from "$lib/index.js";
	import type { IShowcaseTableData } from "./types.js";
	export let title: string;
	export let data: IShowcaseTableData[] = [];
	export let events: boolean = false;
</script>

<h2>{title}</h2>
<Table>
	<thead>
		<tr>
			<th>Name</th>
			<th>Description</th>
			{#if !events}
				<th>Type</th>
				<th>Default</th>
			{/if}
		</tr>
	</thead>
	<tbody>
		{#each data as row}
			<tr>
				<td><code>{row.name}</code></td>
				<td>{row.description}</td>
				{#if !events}
					<td><code>{row.type}</code></td>
					<td><code>{row.default}</code></td>
				{/if}
			</tr>
		{/each}
	</tbody>
</Table>
