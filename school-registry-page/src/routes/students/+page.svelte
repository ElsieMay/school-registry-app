<script lang="ts">
	import Form from '../../components/Form.svelte';
</script>

<svelte:head>
	<title>Enroll a Student</title>
	<meta name="description" content="Students enrollment form" />
</svelte:head>

<div class="text-column">
	<h1>Enroll a Student</h1>
	<p>
		Please enter the student's first and last name, alongside the class you would like to enroll
		them in. Press Submit to complete the registration.
	</p>
	<Form />
</div>
