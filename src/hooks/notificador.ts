import { ActionEnum } from "@/store/action.enum"
import { TipoNotificacaoEnum } from "@/store/tipo-notificacao.enum"
import { store } from '@/store'

// CRIANDO UM HOOK PARA REAPROVEITAMENTO DE CÓDIGO
// TANTO ELE COMO MIXINS PODEM SER USADOS PARA ISSO, ANALISAR SEMPRE O CENÁRIO PARA SABER QUAL ESCOLHER
type Notificador = {
    notificar: (tipo: TipoNotificacaoEnum, titulo: string, texto: string) => void
}

export default () : Notificador => {

    const notificar = (tipo: TipoNotificacaoEnum, titulo: string, texto: string) : void => {
        store.commit(ActionEnum.NOTIFICAR, {
            titulo,
            texto,
            tipo
        })
    }

    return {
        notificar
    }

}