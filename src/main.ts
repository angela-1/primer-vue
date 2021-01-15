import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router'

import * as PrimerVue from '../dist/@angela-1/primer-vue.es';
import '../dist/style.css';

const app = createApp(App);
app.use(router)
app.use(PrimerVue);
// PrimerVue.install(app);

app.mount('#app');
