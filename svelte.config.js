import adapter from '@sveltejs/adapter-static';
const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
      fallback: null,
      precompress: false,
      strict: false
    }),
    paths: {
      base: ''
    },
    appDir: 'internal',
    trailingSlash: 'always'
  }
};

export default config;