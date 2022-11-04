<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<span style="font-size: 24px;"><a href="/">D3-Snippets</a></span>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>

			<li>
				<a href="https://github.com/sandywij/d3-snippets-CAPP30239-FA22/issues/new"
					>File a request</a
				>
			</li>
		</ul>
	</nav>
</header>

<style>
	nav {
		display: flex;
		height: 5rem;
		justify-content: space-between;
		align-items: center;
		margin: none;
	}

	nav ul {
		list-style: none;
	}

	nav ul li {
		display: inline-block;
		margin-right: 20px;
		cursor: pointer;
	}

	nav [aria-current='page'] {
		color: #363636;
		border-bottom: 0.25em solid #444;
	}

	a {
		text-decoration: none;
	}
</style>
