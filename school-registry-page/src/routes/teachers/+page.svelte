<script lang="ts">
	import Form from '../../components/Form.svelte';
	import type { TeacherData } from '../../types/types';

	let teacher: TeacherData = {
		firstName: '',
		lastName: '',
		subject: ''
	};
</script>

<svelte:head>
	<title>Enroll a Student</title>
	<meta name="description" content="Students enrollment form" />
</svelte:head>

<div class="text-column">
	<h1>Register a Teacher</h1>
	<h4>
		Please enter the teachers details you would like to register below. Press Submit to complete the
		registration.
	</h4>
	<Form data={teacher} />
</div>
