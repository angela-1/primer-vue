import { createApp } from 'vue';
import App from './App.vue';

import PrimerVue from '../dist/@angela-1/primer-vue.es';

// console.log('ve', PrimerVue);
// import { PrButton } from '../packages/button';
import '../dist/style.css';
import '@primer/css/index.scss';

const app = createApp(App);
console.log('ap', app);

// app.use(PrimerVue);
PrimerVue.install(app);
// app.component(PrButton.name, PrButton);

app.mount('#app');
