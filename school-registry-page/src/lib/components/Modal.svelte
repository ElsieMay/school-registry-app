<script lang="ts">
	import ButtonComponent from './ButtonComponent.svelte';
	import { fade, scale } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	let { showModal = $bindable() } = $props<{ showModal?: boolean }>();

	let dialog: HTMLDialogElement | null | undefined = $state();

	$effect(() => {
		if (showModal && dialog) {
			dialog.showModal();
		} else if (!showModal && dialog) {
			dialog.close();
		}
	});

	function closeModal() {
		showModal = false;
	}

	import { goto } from '$app/navigation';
	function onPress(e: PointerEvent): void {
		goto('/');
	}
</script>

{#if showModal}
	<div
		class="modal-backdrop"
		transition:fade={{ duration: 300, easing: cubicOut }}
		onclick={closeModal}
		onkeydown={(e) => e.key === 'Escape' && closeModal()}
		role="button"
		tabindex="-1"
		aria-label="Close modal"
	>
		<div
			class="modal"
			transition:scale={{ duration: 300, easing: cubicOut, start: 0.7 }}
			onclick={(e) => e.stopPropagation()}
			onkeydown={(e) => e.key === 'Escape' && closeModal()}
			role="dialog"
			aria-modal="true"
			tabindex="-1"
		>
			<div class="content">
				<h4>
					Thank you for registering for our school community!<br />We're happy to have you.<br /><br
					/>Click the button below to return to the homepage.
				</h4>
				<button class="close-button" onclick={closeModal} aria-label="Close modal">×</button>
			</div>
			<div class="button-container">
				<ButtonComponent symbol="Return Home" isValid={true} on:click={onPress} />
			</div>
		</div>
	</div>
{/if}

<style>
	.modal-backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
	}

	.modal {
		border: none;
		border-radius: 8px;
		max-width: 90%;
		max-height: 90dvh;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		background: rgba(0, 0, 0, 0.4);
		backdrop-filter: blur(10px);
		color: white;
		margin: 0;
		overflow-y: auto;
		padding: 1em;
	}

	@media (max-width: 768px) {
		.modal {
			max-width: 95%;
			max-height: 95dvh;
			margin: 1rem;
		}
	}

	@media (max-width: 480px) {
		.modal {
			max-width: 98%;
			margin: 0.5rem;
			border-radius: 4px;
		}
	}

	.content {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
	}

	.close-button {
		color: white;
		padding-right: 8px;
		padding-left: 8px;
		font-size: 1.5rem;
		cursor: pointer;
		border-radius: 8px;
		transition: background-color 0.2s;
	}

	.close-button:hover {
		background-color: var(--color-bg-2);
	}

	.button-container {
		display: flex;
		justify-content: center;
		margin: 20px 0 24px 0;
	}
</style>
