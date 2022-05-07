import { createRouter, createWebHashHistory } from "vue-router";
import TravelHome from "../pages/home/Home.vue";
import TravelCity from "@/pages/city/TravelCity.vue";
import RecommendDetail from "@/pages/detail/RecommendDetail.vue";

const routes = [{
        path: "/",
        name: "home",
        component: TravelHome,
    },

    {
        path: "/city",
        name: "city",
        component: TravelCity,
    },
    {
        path: "/detail/:id",
        name: "detail",
        component: RecommendDetail,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // console.log(to); // to：要进入的目标路由对象，到哪里去
        // console.log(from); // from：离开的路由对象，哪里来
        // console.log(savedPosition);
        return { top: 0 };
    },
});

export default router;