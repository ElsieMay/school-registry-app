<script lang="ts">
	import type { StudentData, TeacherData } from '../../types/types';
	import ButtonComponent from './ButtonComponent.svelte';
	import Modal from './Modal.svelte';
	import { addStudent, addTeacher } from '../../lib/stores/registry';
	import {
		validateAge,
		validateClass,
		validateField,
		validateName
	} from '../../lib/validators/validators';

	let isFormValid: boolean = false;
	let showModal: boolean = false;

	export let formType: 'student' | 'teacher';

	export let data: StudentData | TeacherData =
		formType === 'student'
			? { firstName: '', lastName: '', class: '', age: 0 }
			: { firstName: '', lastName: '', subject: '' };

	function resetForm() {
		data = data
	}

	function isStudent(data: StudentData | TeacherData): data is StudentData {
		return (data as StudentData).class !== undefined;
	}

	function submitForm(event: SubmitEvent) {
		event.preventDefault();
		if (isStudent(data)) {
			try {
				addStudent(data);
			} catch (error) {
				console.error(error);
				return;
			}
		} else {
			try {
				addTeacher(data);
			} catch (error) {
				console.error(error);
				return;
			}
		}
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
			return validateClass(data.class) && validateField(data.class) && validateAge(data.age);
		} else {
			return validateField(data.subject) && validateName(data.subject);
		}
	}

	$: isFormValid = validate(data);
</script>

<form on:submit={submitForm}>
	<div class="form-group w-full">
		<label for="firstName">First Name<span class="text-red-600">*</span></label>
		<input
			id="firstName"
			type="text"
			bind:value={data.firstName}
			placeholder="First Name"
			class="input"
			aria-required="true"
			aria-describedby="firstName-error"
		/>
		{#if (!validateName(data.firstName) || !validateField(data.firstName)) && data.firstName.length > 0}
			<p id="firstName-error" class="mt-1 text-sm text-red-600">Please enter a valid first name.</p>
		{/if}
		<label for="lastName">Last Name<span class="text-red-600">*</span></label>
		<input
			id="lastName"
			type="text"
			bind:value={data.lastName}
			placeholder="Last Name"
			class="input"
			aria-required="true"
			aria-describedby="lastName-error"
		/>
		{#if (!validateName(data.lastName) || !validateField(data.lastName)) && data.lastName.length > 0}
			<p id="lastName-error" class="mt-1 text-sm text-red-600">Please enter a valid last name.</p>
		{/if}
		{#if isStudent(data)}
			<label for="className">Class Name<span class="text-red-600">*</span></label>
			<input
				id="className"
				type="text"
				bind:value={data.class}
				placeholder="Class"
				class="input"
				aria-required="true"
				aria-describedby="className-error"
			/>
			{#if (!validateClass(data.class) || !validateField(data.class)) && data.class.length > 0}
				<p id="className-error" class="mt-1 text-sm text-red-600">Please enter a valid class.</p>
			{/if}
			<label for="age">Age<span class="text-red-600">*</span></label>
			<input
				id="age"
				type="number"
				bind:value={data.age}
				placeholder="Age"
				class="input"
				aria-required="true"
				aria-describedby="age-error"
			/>
			{#if !validateAge(data.age) && data.age > 0}
				<p id="age-error" class="mt-1 text-sm text-red-600">Please enter a valid age.</p>
			{/if}
		{:else}
			<label for="subject">Subject<span class="text-red-600">*</span></label>
			<input
				id="subject"
				type="text"
				bind:value={data.subject}
				placeholder="Subject"
				class="input"
				aria-required="true"
				aria-describedby="subject-error"
			/>
			{#if (!validateName(data.subject) || !validateField(data.subject)) && data.subject.length > 0}
				<p id="subject-error" class="mt-1 text-sm text-red-600">Please enter a valid subject.</p>
			{/if}
		{/if}
		<div class="button-container">
			<ButtonComponent symbol="Submit" isValid={isFormValid} />
		</div>
	</div>
</form>

{#if showModal}
	<Modal {showModal} />
{/if}

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
	label {
		font-size: 0.9rem;
		font-weight: 500;
		color: var(--color-text);
		margin-bottom: 0.25rem;
	}

	input {
		padding: 0.5rem;
		font-size: 1rem;
		border: 1px solid var(--color-bg-0);
		color: white;
		border-radius: 8px;
		background: rgba(0, 0, 0, 0.4);
		margin-bottom: 0.5rem;
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
