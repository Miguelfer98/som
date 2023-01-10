import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { router } from "./router/index";
import "../src/assets/tailwind.css";

const pinia = createPinia();

const aplication = createApp(App);
aplication.use(router);
aplication.use(pinia);
aplication.use(VueSweetalert2);

aplication.mount("#app");
