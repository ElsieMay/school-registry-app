<script lang="ts">
	// import type { Actions } from '@sveltejs/kit';
	import type { StudentData, TeacherData } from '../../types/types';
	import ButtonComponent from './ButtonComponent.svelte';
	import { addStudent, addTeacher } from '$lib/stores/registry';
	import {
		validateAge,
		validateClass,
		validateField,
		validateName
	} from '$lib/validators/validators';
	export let data: StudentData | TeacherData = {
		firstName: '',
		lastName: '',
		class: '',
		age: 0
	};

	function isStudent(data: StudentData | TeacherData): data is StudentData {
		return (data as StudentData).class !== undefined;
	}

	let isFormValid: boolean = false;

	function submitForm(event: SubmitEvent) {
		event.preventDefault();
		console.log(data, 'hellow world');

		if (isStudent(data)) {
			addStudent(data);
		} else {
			addTeacher(data);
		}
		// TODO: Show success message and reset form
	}

	// export const actions: Actions = {
	// 	register: async ({ request }) => {
	// 		const data = await request.formData();
	// 		// Process registration
	// 		return { success: true };
	// 	}
	// };

	function validate(data: StudentData | TeacherData) {
		if (
			!validateName(data.firstName) ||
			!validateField(data.firstName) ||
			!validateName(data.lastName) ||
			!validateField(data.lastName)
		) {
			return false;
		} else if (isStudent(data)) {
			console.log('validating student');
			return validateClass(data.class) && validateField(data.class) && validateAge(data.age);
		} else {
			return validateName(data.subject);
		}
	}

	$: isFormValid = validate(data);
</script>

<form method="POST" action="?/register" on:submit={submitForm}>
	<div class="form-group w-full">
		<input
			type="text"
			bind:value={data.firstName}
			placeholder="First Name"
			required
			class="input"
			aria-required="true"
			aria-describedby="firstName-error"
		/>
		<input
			type="text"
			bind:value={data.lastName}
			placeholder="Last Name"
			required
			class="input"
			aria-required="true"
			aria-describedby="lastName-error"
		/>
		{#if isStudent(data)}
			<input
				type="text"
				bind:value={data.class}
				placeholder="Class"
				required
				class="input"
				aria-required="true"
				aria-describedby="className-error"
			/>
			<input
				type="number"
				bind:value={data.age}
				placeholder="Age"
				required
				class="input"
				aria-required="true"
				aria-describedby="age-error"
			/>
		{:else}<input
				type="text"
				bind:value={data.subject}
				placeholder="Subject"
				required
				class="input"
				aria-required="true"
				aria-describedby="subject-error"
			/>{/if}
		<div class="button-container">
			<ButtonComponent symbol="Submit" isValid={isFormValid} />
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
