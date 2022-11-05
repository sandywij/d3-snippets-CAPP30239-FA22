<script>
	import { onMount } from 'svelte';

	import Code from '$lib/Code.svelte';
	import data from '$lib/sample_data.json';

	let container;

	let svg;
	let code;

	onMount(async () => {
		const promise = await fetch('snippets/symbols.js');
		code = await promise.text();

		document.body.append();

		code = code + "document.getElementById('svg-container').appendChild(chart);";

		svg = chart(data);
		container.appendChild(svg);
	});
</script>

<svelte:head>
	<script src="snippets/symbols.js"></script>
</svelte:head>

<h1>Adding Symbols to Scatter Plot</h1>

<div class="page-container">
	<div id="code" class="container">
		{#if code}
			<Code value={code} />
		{/if}
	</div>
	<div bind:this={container} id="svg-container" class="container" />
</div>

<style>
	.page-container {
		display: flex;
		width: 100%;
	}

	.container {
		padding: 1rem;
		width: 50%;
	}

	#code {
		max-height: 80vh;
		overflow: scroll;
	}
</style>
