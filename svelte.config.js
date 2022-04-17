import sveltePreprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-static';

export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'dist',
			assets: 'dist',
			fallback: null,
			precompress: false
    }),
    prerender: {
			default: true
		}
  },
}
