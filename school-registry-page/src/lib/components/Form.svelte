<script lang="ts">
	import type { StudentData, TeacherData } from '../../types/types';
	import ButtonComponent from './ButtonComponent.svelte';
	import Modal from './Modal.svelte';
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
	let showModal: boolean = false;

	function getInitialData(): StudentData | TeacherData {
		return isStudent(data)
			? { firstName: '', lastName: '', class: '', age: 0 }
			: { firstName: '', lastName: '', subject: '' };
	}

	function resetForm() {
		data = getInitialData();
	}

	function submitForm(event: SubmitEvent) {
		event.preventDefault();
		console.log(data, 'submitted data');

		if (isStudent(data)) {
			addStudent(data);
		} else {
			addTeacher(data);
		}

		// Clear form after successful submission
		resetForm();
		showModal = true;
	}

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
			return validateField(data.subject) && validateName(data.subject);
		}
	}

	$: isFormValid = validate(data);
</script>

<form on:submit={submitForm}>
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
		{#if (!validateName(data.firstName) || !validateField(data.firstName)) && data.firstName.length > 0}
			<p id="firstName-error" class="mt-1 text-sm text-red-600">Please enter a valid first name.</p>
		{/if}
		<input
			type="text"
			bind:value={data.lastName}
			placeholder="Last Name"
			required
			class="input"
			aria-required="true"
			aria-describedby="lastName-error"
		/>
		{#if (!validateName(data.lastName) || !validateField(data.lastName)) && data.lastName.length > 0}
			<p id="lastName-error" class="mt-1 text-sm text-red-600">Please enter a valid last name.</p>
		{/if}
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
			{#if (!validateClass(data.class) || !validateField(data.class)) && data.class.length > 0}
				<p id="className-error" class="mt-1 text-sm text-red-600">Please enter a valid class.</p>
			{/if}
			<input
				type="number"
				bind:value={data.age}
				placeholder="Age"
				required
				class="input"
				aria-required="true"
				aria-describedby="age-error"
			/>
			{#if !validateAge(data.age) && data.age > 0}
				<p id="age-error" class="mt-1 text-sm text-red-600">Please enter a valid age.</p>
			{/if}
		{:else}<input
				type="text"
				bind:value={data.subject}
				placeholder="Subject"
				required
				class="input"
				aria-required="true"
				aria-describedby="subject-error"
			/>
			{#if (!validateName(data.subject) || !validateField(data.subject)) && data.subject.length > 0}
				<p id="subject-error" class="mt-1 text-sm text-red-600">Please enter a valid email.</p>
			{/if}
		{/if}
		<div class="button-container">
			<ButtonComponent symbol="Submit" isValid={isFormValid} />
		</div>
		{#if showModal}
			<Modal {showModal} />
		{/if}
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
