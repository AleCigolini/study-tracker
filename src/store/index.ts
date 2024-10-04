import IProjeto from "@/interfaces/IProjeto";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { InjectionKey } from 'vue';
import { ActionEnum } from "./action.enum";

interface Estado {
    projetos: IProjeto[]
}

export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
    state: {
        projetos: []
    },
    mutations: {
        [ActionEnum.ADICIONA_PROJETO](state, nomeDoProjeto: string) {
            const projeto: IProjeto = {
                id: new Date().toISOString(),
                nome: nomeDoProjeto
            }
            state.projetos.push(projeto);
        },
        [ActionEnum.ALTERA_PROJETO](state, projeto: IProjeto) {
            const index = state.projetos.findIndex(proj => proj.id == projeto.id)
            state.projetos[index] = projeto
        },
        [ActionEnum.EXCLUIR_PROJETO](state, idProjeto: string) {
            state.projetos = state.projetos.filter(proj => proj.id != idProjeto)
        },
    }
});

export function useStore(): Store<Estado> {
    return vuexUseStore(key);
}