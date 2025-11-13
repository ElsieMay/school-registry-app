<script lang="ts">
	import type { StudentData, TeacherData } from '../types/types';
	import ButtonComponent from './ButtonComponent.svelte';
	export let data: StudentData | TeacherData = {
		firstName: '',
		lastName: '',
		class: '',
		age: 0,
		subject: ''
	};

	function isStudent(data: StudentData | TeacherData): data is StudentData {
		return 'class' in data && 'age' in data;
	}

	function isTeacher(data: StudentData | TeacherData): data is TeacherData {
		return 'subject' in data;
	}

	let isFormInvalid: boolean;

	function submitForm(event: SubmitEvent) {
		event.preventDefault();
		console.log(data, 'hellow world');
	}

	// function validateForm() {
	// 	if (isStudent(data)) {
	// 		console.log('Validating student data');
	// 		return !!data.firstName && !!data.lastName && !!data.class && !!data.age;
	// 	} else {
	// 		console.log('Validating teacher data');
	// 		return !!data.firstName && !!data.lastName && !!data.subject;
	// 	}
	// }

	function validateField(value: string | number) {
		return value !== '' && value !== null && value !== undefined && value !== 0;
	}

	$: isFormInvalid = validateForm();
</script>

<form method="POST" action="?/register" on:submit={submitForm}>
	<div class="form-group w-full">
		<input
			type="text"
			bind:value={data.firstName}
			placeholder="First Name"
			required
			class="input"
		/>
		<input type="text" bind:value={data.lastName} placeholder="Last Name" required class="input" />
		{#if isStudent(data)}
			<input type="text" bind:value={data.class} placeholder="Class" required class="input" />
			<input type="text" bind:value={data.age} placeholder="Age" required class="input" />
		{:else}<input
				type="text"
				bind:value={data.subject}
				placeholder="Subject"
				required
				class="input"
			/>{/if}
		<div class="button-container">
			<ButtonComponent symbol="Submit" isValid={isFormInvalid} />
		</div>
	</div>
</form>

<style>
	form {
		display: flex;
		justify-content: center;
		background: rgba(0, 0, 0, 0.24);
		border-radius: 16px;
		overflow: hidden;
	}
	.form-group {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 40px;
	}
	/* label {
		font-weight: bold;
	} */
	input {
		padding: 0.5rem;
		font-size: 1rem;
		border: 1px solid var(--color-bg-0);
		color: white;
		border-radius: 8px;
		background: rgba(0, 0, 0, 0.4);
	}
	input:focus {
		outline: none;
		border: 1px solid var(--color-bg-0);
	}
	.button-container {
		display: flex;
		justify-content: center;
		margin: 24px 0 0 0;
	}
</style>
