import IProjeto from "@/interfaces/IProjeto";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { InjectionKey } from 'vue';
import { MutationEnum } from "./mutations.enum";
import INotificacao from "@/interfaces/INotificacao";
import { ActionEnum } from "./action.enum";
import http from "@/http";

interface Estado {
    projetos: IProjeto[],
    notificacoes: INotificacao[]
}

export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
    state: {
        projetos: [],
        notificacoes: []
    },
    mutations: {
        // SOMENTE MUTATIONS PODEM ALTERAR O ESTADO DE UM OBJETO
        [MutationEnum.ADICIONA_PROJETO](state, nomeDoProjeto: string) {
            const projeto: IProjeto = {
                id: new Date().toISOString(),
                nome: nomeDoProjeto
            }
            state.projetos.push(projeto);
        },
        [MutationEnum.ALTERA_PROJETO](state, projeto: IProjeto) {
            const index = state.projetos.findIndex(proj => proj.id == projeto.id)
            state.projetos[index] = projeto
        },
        [MutationEnum.EXCLUIR_PROJETO](state, idProjeto: string) {
            state.projetos = state.projetos.filter(proj => proj.id != idProjeto)
        },
        [MutationEnum.DEFINIR_PROJETO](state, projetos: IProjeto[]) {
            state.projetos = projetos
        },
        [MutationEnum.NOTIFICAR](state, novaNotificacao: INotificacao) {

            novaNotificacao.id = new Date().getTime()
            state.notificacoes.push(novaNotificacao)

            setTimeout(() => {
                state.notificacoes = state.notificacoes.filter(notificacao => notificacao.id != novaNotificacao.id)
            }, 3000)
        }
    },
    actions: {
        [ActionEnum.OBTER_PROJETOS] ({ commit }) {
            http.get('projetos')
            .then(response => commit(MutationEnum.DEFINIR_PROJETO, response.data))
        },
        [ActionEnum.CRIAR_PROJETO] (contexto, nomeDoProjeto: string) {
            return http.post('/projetos', {
                nome: nomeDoProjeto
            })
        },
        [ActionEnum.ATUALIZAR_PROJETO] (contexto, projeto: IProjeto) {
            return http.put(`/projetos/${projeto.id}`, projeto)
        },
        [ActionEnum.EXCLUIR_PROJETO] ({ commit }, idProjeto: number) {
            return http.delete(`/projetos/${idProjeto}`)
                .then(() => commit(MutationEnum.EXCLUIR_PROJETO, idProjeto))
        }
    }
});

export function useStore(): Store<Estado> {
    return vuexUseStore(key);
}