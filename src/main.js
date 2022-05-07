import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import fastClick from "fastclick";
import "./assets/reset.css";
import "./assets/border.css";
import "./assets/iconfont.css";
import SwiperClass /* swiper modules... */ from "swiper";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css";
SwiperClass.use([
    /* swiper modules... */
    // Pagination,
]);

fastClick.attach(document.body);
createApp(App).config.globalProperties.$axios = axios;
createApp(App).use(router).use(VueAwesomeSwiper).use(store).mount("#app");