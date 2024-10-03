import ProjetosView from "@/views/ProjetosView.vue";
import TarefasView from "@/views/TarefasView.vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'TarefasView',
        component: TarefasView
    },
    {
        path: '/projetos',
        name: 'ProjetosView',
        component: ProjetosView
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router;