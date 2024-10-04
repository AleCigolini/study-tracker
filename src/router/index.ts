import FormularioView from "@/views/Projetos/FormularioView.vue";
import ProjetosListaView from "@/views/Projetos/ProjetosListaView.vue";
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
        component: ProjetosView,
        children: [
            {
                path: '',
                name: 'ProjetosListaView',
                component: ProjetosListaView
            },
            {
                path: 'novo',
                name: 'Novo projeto',
                component: FormularioView
            },
            {
                path: ':id',
                name: 'Editar projeto',
                component: FormularioView,
                props: true
            },
        ]
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router;