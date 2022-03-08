import { createApp } from 'vue'
import App from './App.vue'
import { plugin, defaultConfig } from "@formkit/vue";
import "@formkit/themes/genesis";
import './index.css'

createApp(App).use(plugin, defaultConfig).mount("#app");
