<script>
	export let symbol;
</script>

<button on:click style="background-color: #a64065">
	{symbol}
</button>

<style>
	button {
		border: none;
		padding: 0.5rem 2rem;
		color: #fff;
		font-size: 1.5rem;
		border-radius: 1rem;
		transition: all 250ms;
		box-shadow:
			0px 3px 3px rgba(0, 0, 0, 0.25),
			inset 0px -2px 3px rgba(0, 0, 0, 0.25);
	}
	button:hover {
		cursor: pointer;
		transform: scale(0.975);
		box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
	}
</style>
