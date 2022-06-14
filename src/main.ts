import { createApp, App } from "vue";
import { createPinia } from "pinia";
import AppMain from "./App.vue";
import router from "./router";
// Global style
import "./global.styl";

const app: App = createApp(AppMain);

app.use(createPinia);
app.use(router);

app.mount("#app");
