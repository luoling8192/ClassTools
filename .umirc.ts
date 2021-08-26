import { defineConfig } from 'umi';
import routes from './src/config/routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routes,
  fastRefresh: {},
  mfsu: {},
  history: { type: 'hash' },
});
