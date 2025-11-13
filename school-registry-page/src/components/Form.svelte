<script lang="ts">
	import { enhance } from '$app/forms';
	import ButtonComponent from './ButtonComponent.svelte';

	function update(event: MouseEvent) {
		event.preventDefault();
		console.log('helloe');
		const key = (event.target as HTMLButtonElement).getAttribute('data-key');
	}
</script>

<form
	method="post"
	action="?/enter"
	use:enhance={() => {
		return ({ update }) => {
			update({ reset: false });
		};
	}}
>
	<div class="form-group">
		<label for="firstName">First Name:</label>
		<input type="text" id="firstName" name="firstName" required />
		<label for="lastName">Last Name:</label>
		<input type="text" id="lastName" name="lastName" required />
		<label for="className">Class Name:</label>
		<input type="text" id="className" name="className" required />
		<label for="lastName">Age:</label>
		<input type="text" id="age" name="age" required />
		<div class="button-container">
			<ButtonComponent on:click={update} symbol={'Submit'}></ButtonComponent>
		</div>
	</div>
</form>

<style>
	form {
		display: flex;
		justify-content: center;
	}
	.form-group {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		width: 300px;
	}
	label {
		font-weight: bold;
	}
	input {
		padding: 0.5rem;
		font-size: 1rem;
		border: 1px solid #ccc;
	}
</style>
