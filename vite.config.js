import { sveltekit } from '@sveltejs/kit/vite';
import transformPlugin from 'vite-plugin-transform'; // Look at me!

const rawTransform = {
	test: (path, query) => !!query.raw,
	transform: (src) => `export default ${JSON.stringify(src)}`
};

const config = {
	plugins: [
		sveltekit(),
		transformPlugin({
			rawTransform
		})
	]
};

export default config;
