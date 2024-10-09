import { TipoNotificacaoEnum } from "@/store/tipo-notificacao.enum"
import { store } from '@/store'
import { MutationEnum } from "@/store/mutations.enum"

// DEVEMOS TER CUIDADO AO UTILIZAR MIXIN VISTO QUE PODEMOS TER COLISÃO DE MÉTODOS
export const notificacaoMixin = {
    methods: {
        notificar(tipo: TipoNotificacaoEnum, titulo: string, texto: string) : void {
            store.commit(MutationEnum.NOTIFICAR, {
                titulo,
                texto,
                tipo
            })
        }
    }
}