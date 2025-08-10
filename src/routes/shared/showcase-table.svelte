<script lang="ts">
	import { Table } from '$lib/index.js';
	import type { IShowcaseTableData } from './types.js';
	export let title: string;
	export let data: IShowcaseTableData[] = [];
	export let events: boolean = false;
</script>

<h3>{title}</h3>
<div class="uk-overflow-auto">
	<Table>
		<thead>
			<tr>
				<th>Name</th>
				<th class="uk-table-expand">Description</th>
				{#if !events}
					<th>Type</th>
					<th>Default</th>
				{/if}
			</tr>
		</thead>
		<tbody>
			{#each data as row}
				<tr>
					{#if row.isGroupHeader}
						<td colspan={events ? 2 : 4}><strong>{row.name}</strong></td>
					{:else}
						<td><code>{row.name}</code></td>
						<td>{row.description}</td>
						{#if !events}
							<td><code>{row.type}</code></td>
							<td><code>{row.default}</code></td>
						{/if}
					{/if}
				</tr>
			{/each}
			{#if data?.length === 0}
				<tr>
					<td colspan={events ? 2 : 4}>
						No {events ? 'Events' : 'Component Options'}
					</td>
				</tr>
			{/if}
		</tbody>
	</Table>
</div>
