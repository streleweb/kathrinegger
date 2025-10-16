import { configure } from 'quasar/wrappers';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import vue from '@vitejs/plugin-vue';

export default configure(() => ({
  framework: { plugins: ['Notify', 'Meta'] },
  boot: ['axios'],
  css: ['app.scss'],
  extras: ['material-icons'],

  // HERE WAS THE SSR BUILD ERROR, Apply Vite plugins for both client and SSR
  vitePlugins: [
    vue({ template: { transformAssetUrls } }),
    quasar()
  ],

  build: {
    target: {
      browser: ['es2020', 'chrome87', 'firefox78', 'safari13.1'],
      node: 'node22'
    },
    define: { global: 'globalThis' },
    ssr: { noExternal: [/quasar/] }
  },

  devServer: { open: true },
  ssr: { pwa: false, prodPort: 3000, middlewares: ['render'] }
}));
