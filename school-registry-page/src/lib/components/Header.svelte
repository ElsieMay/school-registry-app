<script lang="ts">
	import { page } from '$app/state';
</script>

<header>
	<nav>
		<svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
			<path d="M0,0 L50,67 C75,100 75,100 100,100 L100,0 Z" />
		</svg>
		<ul>
			<li
				aria-current={page.url.pathname === '/' ? 'page' : undefined}
				class="text-center break-words"
			>
				<a href="/">School Registry</a>
			</li>
			<li
				aria-current={page.url.pathname === '/students' ? 'page' : undefined}
				class="text-center break-words"
			>
				<a href="/students">Enroll a Student</a>
			</li>
			<li
				aria-current={page.url.pathname === '/teachers' ? 'page' : undefined}
				class="text-center break-words"
			>
				<a href="/teachers">Register a Teacher</a>
			</li>
		</ul>
		<svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
			<path d="M100,0 L50,67 C25,100 25,100 0,100 L0,0 Z" />
		</svg>
	</nav>
</header>

<style>
	@media (max-width: 768px) {
		svg {
			width: 1em;
		}

		nav a {
			padding: 0 1rem;
			font-size: 0.7rem;
		}
	}

	@media (max-width: 480px) {
		svg {
			width: 0.5em;
		}

		nav a {
			padding: 0 0.5rem;
			font-size: 0.65rem;
		}
	}

	header {
		align-self: center;
	}

	nav {
		display: flex;
		--background: rgba(0, 0, 0, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 2rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
