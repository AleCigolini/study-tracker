import { TipoNotificacaoEnum } from "@/store/tipo-notificacao.enum"
import { store } from '@/store'
import { ActionEnum } from "@/store/action.enum"

// DEVEMOS TER CUIDADO AO UTILIZAR MIXIN VISTO QUE PODEMOS TER COLISÃO DE MÉTODOS
export const notificacaoMixin = {
    methods: {
        notificar(tipo: TipoNotificacaoEnum, titulo: string, texto: string) : void {
            store.commit(ActionEnum.NOTIFICAR, {
                titulo,
                texto,
                tipo
            })
        }
    }
}