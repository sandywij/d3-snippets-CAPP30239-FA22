<script>
	import data from '$lib/links.json';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>D3 Snippets for CAPP30239 FA22</h1>

	<p>
		To request a snippet/demo, <a
			href="https://github.com/sandywij/d3-snippets-CAPP30239-FA22/issues/new"
			>create an issue on Github</a
		>.
	</p>

	<ul>
		Please include:
		<li>What you are trying to acheive,</li>
		<li>What you have tried or the issue you're running into,</li>
		<li>A link to your attempt</li>
	</ul>
</section>

<section>
	<h2>Snippets and Demos</h2>
	<p>Coming soon</p>
	<div class="row-wrap" />
</section>

<section>
	<h2>Helpful Resources</h2>
	<div class="row-wrap">
		{#each data.links as l}
			<a href={l.link}>
				<div class="box">
					<h3>{l.text}</h3>
					<p>{l.blurb}</p>
				</div>
			</a>
		{/each}
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		background-color: white;
		padding: 1em;
		margin: 1.5em;
	}

	h1 {
		width: 100%;
	}

	.row-wrap {
		flex-direction: row;
		flex-wrap: wrap;
	}

	.box {
		flex: 1 1 25%;
		padding: 1em;
		background-color: #d1f28b;
		color: #1a3b47;
	}

	a:has(div.box) {
		text-decoration: none;
	}

	.box:hover,
	a:focus > .box {
		color: #d1f28b;
		background-color: #1a3b47;
		font-weight: bold;
		box-shadow: 10px 10px 0 #d1f28b;
		transition-duration: 0.2s;
		transition-delay: 0.1s;
	}
</style>
