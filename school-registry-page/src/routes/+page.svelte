<script lang="ts">
	import Table from '../components/Table.svelte';
	// import school from '../lib/images/school.jpg';
	import type { StudentData, TeacherData } from '../types/types';

	export const students: StudentData[] = [
		{ firstName: 'John', lastName: 'Name', class: '2A', age: 7 },
		{ firstName: 'Sarah', lastName: 'Name', class: '3B', age: 8 },
		{ firstName: 'Afshin', lastName: 'Name', class: '6H', age: 11 }
	];

	export const teachers: TeacherData[] = [
		{ firstName: 'John', lastName: 'Name', subject: 'Math' },
		{ firstName: 'Sarah', lastName: 'Name', subject: 'English' },
		{ firstName: 'Afshin', lastName: 'Name', subject: 'Science' }
	];

	export let studentTableTitles = ['First Name', 'Last Name', 'Class', 'Age'];
	export let teacherTableTitles = ['First Name', 'Last Name', 'Subject'];
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
			<Table data={students} columns={studentTableTitles} />
		</div>
		<div class="teachers">
			<h2>Current Teachers:</h2>
			<Table data={teachers} columns={teacherTableTitles} />
		</div>
	</div>
</div>

<style>
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
