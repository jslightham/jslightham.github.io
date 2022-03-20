import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Work from "@/views/Work.vue";
import Zork from "@/views/Zork.vue";
import CodeServer from "@/views/CodeServer.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/work",
        name: "Work",
        component: Work,
    },
    {
        path: "/zork",
        name: "Zork",
        component: Zork,
    },
    {
        path: "/codeserver",
        name: "CodeServer",
        component: CodeServer,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;