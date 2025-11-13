<script>
	export let symbol;
	export let isValid = false;
</script>

<button on:click disabled={!isValid}>
	{symbol}
</button>

<style>
	button {
		border: none;
		padding: 0.5rem 2rem;
		font-size: 1.2rem;
		border-radius: 1rem;
		transition: all 250ms;
		box-shadow:
			0px 3px 3px rgba(0, 0, 0, 0.25),
			inset 0px -2px 3px rgba(0, 0, 0, 0.25);
		width: 50%;
		background-color: var(--color-theme-2);
	}
	button:hover {
		cursor: pointer;
		transform: scale(0.975);
		box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
	}
	button:disabled {
		background-color: var(--color-bg-2);
		cursor: not-allowed;
		box-shadow: none;
		transform: none;
		color: var(--color-bg-1);
	}
</style>
