import { createApp } from 'vue'
import App from './App.vue'
import { plugin, defaultConfig } from "@formkit/vue";
import "@formkit/themes/genesis";
import './index.css'

import router from './router'

createApp(App).use(plugin, defaultConfig).use(router).mount("#app");
