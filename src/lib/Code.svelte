<script>
	import CodeMirror from 'svelte-codemirror-editor';
	import { javascript } from '@codemirror/lang-javascript';
	import { oneDark } from '@codemirror/theme-one-dark';

	export let value;
</script>

<CodeMirror bind:value lang={javascript()} theme={oneDark} />

<style>
	:global(.codemirror-wrapper) {
		max-height: 80vh;
		overflow: scroll;
	}
</style>
