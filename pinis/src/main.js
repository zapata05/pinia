import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

createApp(App).mount('#app')

App.use(createPinia());
