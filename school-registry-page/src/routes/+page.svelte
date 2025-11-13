<script lang="ts">
	import Table from '../components/Table.svelte';
	import type { StudentData, TeacherData } from '../../types';

	export const students: StudentData[] = [
		{ firstName: 'John', lastName: 'Name', className: '2A', age: 7 },
		{ firstName: 'Sarah', lastName: 'Name', className: '3B', age: 8 },
		{ firstName: 'Afshin', lastName: 'Name', className: '6H', age: 11 }
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
	<p>Please see the students and teachers currently registered below...</p>
</div>

<div class="tables"></div>
<div class="students">
	<h2>Enrolled Students:</h2>
	<Table data={students} columns={studentTableTitles} />
</div>
<div class="teachers">
	<h2>Current Teachers:</h2>
	<Table data={teachers} columns={teacherTableTitles} />
</div>

<style>
	.text-column {
		max-width: 600px;
		margin: 0 auto 2rem auto;
		text-align: center;
	}
</style>
