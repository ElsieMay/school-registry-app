<script lang="ts">
	import Table from '$lib/components/Table.svelte';
	import type { RegistryData } from '../types/types';
	export let data: RegistryData;
	let studentTableTitles = ['First Name', 'Last Name', 'Class', 'Age'];
	let teacherTableTitles = ['First Name', 'Last Name', 'Subject'];
</script>

<svelte:head>
	<title>Welcome to our school!</title>
	<meta name="description" content="Students enrollment form" />
</svelte:head>

<div class="text-column">
	<h1>Welcome to our school!</h1>
	<h4>Please see the students and teachers currently registered below...</h4>
	<div class="sub-content">
		<div class="students">
			<h2>Enrolled Students:</h2>
			<Table data={data.students} columns={studentTableTitles} />
		</div>
		<div class="teachers">
			<h2>Current Teachers:</h2>
			<Table data={data.teachers} columns={teacherTableTitles} />
		</div>
	</div>
</div>

<style>
	@media (max-width: 768px) {
		.sub-content {
			flex-direction: column;
			gap: 2rem;
		}

		.students,
		.teachers {
			margin: 0;
		}
	}
	.text-column {
		max-width: 600px;
		margin: 0 auto 2rem auto;
		text-align: center;
	}

	.sub-content {
		display: flex;
		flex-direction: row;
		align-self: center;
	}

	.students,
	.teachers {
		margin: 0 2rem;
		flex: 1;
		align-items: center;
	}
</style>
