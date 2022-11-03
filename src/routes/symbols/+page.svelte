<script>
	import { onMount } from 'svelte';

	import Code from '$lib/Code.svelte';
	import data from '$lib/sample_data.json';

	let container;

	let svg;
	let promise;

	onMount(() => {
		promise = fetch('snippets/symbols.js').then((x) => x.text());

		svg = chart(data);

		container.appendChild(svg);
	});
</script>

<svelte:head>
	<script src="snippets/symbols.js"></script>
</svelte:head>

<h1>Adding Symbols to Scatter Plot</h1>

<div class="page-container">
	<div class="code">
		{#await promise then data}
			<Code value={data + 'chart(data)'} />
		{/await}
	</div>
	<div bind:this={container} class="svg-container" />
</div>

<style>
	.page-container {
		display: flex;
		width: 100%;
	}

	.code {
		max-width: 50%;
		max-height: 80vh;
		overflow: scroll;
	}
</style>
