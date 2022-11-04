import adapter from '@sveltejs/adapter-static';
/** @type {import('@sveltejs/kit').Config} */

const dev = 'production' === 'development';

const config = {
	kit: {
		adapter: adapter(),
		paths: {}
	}
};

export default config;
