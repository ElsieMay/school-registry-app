<script lang="ts">
	import type { StudentData, TeacherData } from '../types/types';

	export let columns;
	export let data: StudentData[] | TeacherData[];
</script>

<table class="w-100 table-auto border-collapse lg:table-auto">
	<thead>
		<tr>
			{#each columns as column}
				<th>{column}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each data as row}
			<tr>
				{#each Object.values(row) as cell}
					<td contenteditable="true" bind:innerHTML={cell}></td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

<style>
	thead {
		background: rgba(0, 0, 0, 0.4);
	}
	table {
		border-radius: 8px;
		overflow: hidden;
		background: rgba(0, 0, 0, 0.24);
	}
	th,
	td {
		padding: 12px 16px;
		border-bottom: 1px solid var(--color-border);
		text-align: left;
		color: var(--color-text);
	}

	tbody tr:last-child td {
		border-bottom: none;
	}
</style>
