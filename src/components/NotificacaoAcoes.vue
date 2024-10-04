<template>
    <div class="notificacoes">
    <article
      class="message"
      :class="contexto[notificacao.tipo]"
      v-for="notificacao in notificacoes"
      :key="notificacao.id"
    >
      <div class="message-header">{{ notificacao.titulo }}</div>
      <div class="message-body">
        {{ notificacao.texto }}
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store';
import { TipoNotificacaoEnum } from '@/store/tipo-notificacao.enum';
import { computed, defineComponent } from 'vue';


export default defineComponent({
    name: 'NotificacaoAcoes',
    data () {
    return {
      contexto: {
        [TipoNotificacaoEnum.SUCESSO]: 'is-success',
        [TipoNotificacaoEnum.ATENCAO]: 'is-warning',
        [TipoNotificacaoEnum.FALHA]: 'is-danger',
      }
    }
  },
  setup() {
    const store = useStore()
    
    return {
        notificacoes: computed(() => store.state.notificacoes)
    }
  }
})
</script>

<style scoped>
.notificacoes {
  position: absolute;
  right: 0;
  width: 300px;
  padding: 8px;
  z-index: 105;
}
</style>