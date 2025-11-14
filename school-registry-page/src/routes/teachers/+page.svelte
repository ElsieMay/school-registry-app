<script lang="ts">
	import Form from '../../lib/components/Form.svelte';
	import type { TeacherData } from '../../types/types';

	let teacher: TeacherData = {
		firstName: '',
		lastName: '',
		subject: ''
	};
</script>

<svelte:head>
	<title>Register a Teacher</title>
	<meta name="description" content="Teacher registration form" />
</svelte:head>

<div class="text-column">
	<h1>Register a Teacher</h1>
	<h4>
		Please enter the teachers details you would like to register below. Press Submit to complete the
		registration.
	</h4>
	<Form data={teacher} />
</div>
