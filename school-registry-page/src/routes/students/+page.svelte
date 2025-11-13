<script lang="ts">
	import Form from '../../lib/components/Form.svelte';
	import type { StudentData } from '../../types/types';

	let student: StudentData = {
		firstName: '',
		lastName: '',
		class: '',
		age: 0
	};
</script>

<svelte:head>
	<title>Enroll a Student</title>
	<meta name="description" content="Students enrollment form" />
</svelte:head>

<div class="text-column">
	<h1>Enroll a Student</h1>
	<h4>
		Please enter the student's first and last name, alongside the class you would like to enroll
		them in. Press Submit to complete the registration.
	</h4>
	<Form data={student} />
</div>
