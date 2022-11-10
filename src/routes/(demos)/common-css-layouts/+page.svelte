<script>
	import viz from '$lib/viz.js';

	const lorem = `
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
			et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. Sed
			turpis tincidunt id aliquet risus feugiat. Leo duis ut diam quam nulla porttitor massa id neque.
			Et tortor consequat id porta nibh venenatis cras. Tincidunt augue interdum velit euismod. Facilisis
			mauris sit amet massa vitae tortor condimentum. Fermentum leo vel orci porta non pulvinar. Aliquam
			ultrices sagittis orci a. Id neque aliquam vestibulum morbi blandit cursus risus at ultrices. Cum
			sociis natoque penatibus et. Sed turpis tincidunt id aliquet risus feugiat in. Pharetra et ultrices
			neque ornare aenean euismod. Auctor urna nunc id cursus metus. Amet venenatis urna cursus eget
			nunc scelerisque viverra. Et tortor consequat id porta nibh. Massa enim nec dui nunc mattis enim.
	`;
</script>

<h1>Common CSS Layouts</h1>

<section class="section-container">
	<div class="text-container">
		<h2>
			<a
				href="https://gist.github.com/sandywij/2664308d19844fd74233b457e4690577#file-style-css-L20-L32"
				>Sticky CSS Snippet 🔗</a
			>
		</h2>

		<p>
			This layout is great when you have a lot to say, a large detailed chart, and you want your
			readers to be able to refer to your chart while reading through the text.
		</p>

		<div style="text-decoration:line-through;">
			<h2>Start of placeholder text to show effect</h2>

			<p>
				{lorem}
			</p>

			<h2>Wow so much to say</h2>

			<p>
				{lorem}
			</p>
		</div>
	</div>

	<div id="chart1" class="chart">
		{@html viz}
	</div>
</section>

<section class="section-container">
	<div id="chart2" class="chart">
		{#each Array.from({ length: 6 }, (v, i) => i) as item}
			<div>
				{@html viz}
			</div>
		{/each}
	</div>
	<div class="text-container">
		<h2>
			<a
				href="https://gist.github.com/sandywij/2664308d19844fd74233b457e4690577#file-style-css-L33-L45"
				>Wrap CSS Snippet 🔗</a
			>
		</h2>

		<p>This layout uses flex-wrap so that multiple SVGs will wrap around nicely.</p>
	</div>
</section>

<section class="section-container wrap-around side-by-side">
	<div id="chart3" class="chart">
		{#each Array.from({ length: 4 }, (v, i) => i) as item}
			{@html viz}
		{/each}
	</div>
	<div class="text-container">
		<h2>
			<a
				href="https://gist.github.com/sandywij/2664308d19844fd74233b457e4690577#file-style-css-L46-L64"
				>Sticky CSS Snippet 🔗</a
			>
		</h2>
		<p>You can combine the two different classes and styles too!</p>

		<div style="text-decoration:line-through;">
			<h2>Start of placeholder text to show effect</h2>

			<p>
				{lorem}
			</p>
		</div>

		<h2>
			<a
				href="https://gist.github.com/sandywij/2664308d19844fd74233b457e4690577#file-style-css-L46-L64"
				>Sticky CSS Snippet 🔗</a
			>
		</h2>

		<p>You can combine the two different classes and styles too!</p>
	</div>
</section>

<style>
	.section-container {
		width: 100%;
		max-width: 1200px;
		margin: 40px auto;
		border: 1px solid black;
	}

	.section-container > .chart,
	.section-container > .text-container {
		width: 50%;
		box-sizing: border-box;
	}

	.chart,
	.text-container {
		padding: 36px;
	}

	/* Position Sticky Demo */

	:has(#chart1) {
		display: flex;
		align-items: flex-start;
	}

	#chart1 {
		width: 90%;
		position: sticky;
		top: 0;
	}

	/* Flex-Wrap Demo */

	#chart2 {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	#chart2 > * {
		margin: 10px;
	}

	/* Flex-Wrap + Position Sticky Demo */

	:has(#chart3) {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	#chart3 {
		top: 0;
		width: 100%;
		height: 50vh;

		display: flex;
		flex-direction: row;
		position: sticky;

		background-color: white;
	}
</style>
