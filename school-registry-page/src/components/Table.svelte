<script lang="ts">
	import type { StudentData, TeacherData } from '../types/types';

	export let columns;
	export let data: StudentData[] | TeacherData[];
</script>

<div class="table">
	<table>
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
</div>

<style>
	tr td:focus {
		background: #eee;
	}
</style>
