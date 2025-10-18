import { configure } from 'quasar/wrappers';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import vue from '@vitejs/plugin-vue';

export default configure(() => ({
  framework: { plugins: ['Notify', 'Meta'] },
  boot: ['axios'],
  css: ['app.scss'],
  extras: ['material-icons'],

  vitePlugins: [
    vue({ template: { transformAssetUrls } }),
    quasar()
  ],

  build: {
    target: {
      browser: ['es2020', 'chrome87', 'firefox78', 'safari13.1']
    },
    define: { global: 'globalThis' }
  },

  devServer: { open: true },
  vueRouterMode: 'history'
}));
