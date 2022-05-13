import { createApp } from 'vue'
import App from './App.vue'
import { plugin, defaultConfig } from "@formkit/vue";
import "@formkit/themes/genesis";
import './index.css'
import { Tabs, Tab } from "vue3-tabs-component";

createApp(App)
  .use(plugin, defaultConfig)
  .component("tabs", Tabs)
  .component("tab", Tab)
  .mount("#app");
