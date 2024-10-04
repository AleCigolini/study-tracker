import { TipoNotificacaoEnum } from "@/store/tipo-notificacao.enum";

export default interface INotificacao {
    id: number,
    titulo: string,
    texto: string,
    tipo: TipoNotificacaoEnum
}