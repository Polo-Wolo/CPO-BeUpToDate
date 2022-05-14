import { createApp, h } from "vue";
import App from "./App.vue";
import { plugin, defaultConfig } from "@formkit/vue";
import "@formkit/themes/genesis";
import "./index.css";

// const app = createApp({
//   render: () => h(App),
// });

// app.use(plugin, defaultConfig);
// app.$mount("#app");

createApp(App).use(plugin, defaultConfig).mount("#app");
