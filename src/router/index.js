import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Work from "@/views/Work.vue";
import Zork from "@/views/Zork.vue";
import CodeServer from "@/views/CodeServer.vue";
import Resume from "@/views/Resume.vue";

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
    },
    {
        path: "/resume",
        name: "Resume",
        component: Resume,
    },
];

const router = createRouter({
    mode: 'history',
    history: createWebHistory(),
    routes,
});

export default router;
