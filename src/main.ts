import { createApp } from "vue";

import App from "./App.vue";
import "./style.css";

import router from "./router";
import stores from "./stores";
import i18n from "./i18n";

const app = createApp(App);
app.use(router);
app.use(stores);
app.use(i18n);
app.mount("#app");
