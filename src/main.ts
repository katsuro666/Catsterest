import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { LoadingBar, Quasar } from 'quasar';

import './style.css';
import App from './App.vue';
import router from './router';

import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(Quasar, {
  plugins: {
    LoadingBar,
  },
  config: {
    loadingBar: { position: 'bottom', reverse: false, color: 'primary', size:'10px' },
  },
});
app.use(router);
app.mount('#app');
