import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router'

import * as PrimerVue from '../lib/index';
import '../dist/style.css';

import 'vite-plugin-vuedoc/style.css'

const app = createApp(App);
app.use(router)
app.use(PrimerVue);

app.mount('#app');
