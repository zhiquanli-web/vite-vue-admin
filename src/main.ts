import { createApp } from 'vue';
import 'normalize.css';
import 'uno.css';

import './assets/styles/style.css';
import store from './store';
import router from './router';
import { setupMock } from './mock';

import App from './App.vue';

if (import.meta.env.MODE === 'mock') {
  setupMock();
}

createApp(App).use(router).use(store).mount('#app');
