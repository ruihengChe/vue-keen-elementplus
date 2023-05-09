import { createApp } from "vue";
import { createPinia } from 'pinia';
import App from "./App.vue";

import router from "./router";
import store from "./store";
import "./common/base.css";
import "normalize.css";

createApp(App).use(store).use(createPinia()).use(router).mount("#app");
