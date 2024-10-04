<template>
  <section>
    <form @submit.prevent="salvar">
      <div class="field">
        <label for="nomeDoProjeto" class="label"> Nome do Projeto </label>
        <input type="text" class="input" v-model="nomeDoProjeto" id="nomeDoProjeto" />
      </div>
      <div class="field">
        <button class="button" type="submit">Salvar</button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { useStore } from '@/store';
import { defineComponent } from 'vue';
import { ActionEnum } from '@/store/action.enum';
import { TipoNotificacaoEnum } from '@/store/tipo-notificacao.enum';


export default defineComponent({
  name: 'FormularioView',
  props: {
    id: { type: String }
  },
  mounted() {
    if (this.id) {
      const projeto = this.store.state.projetos.find(proj => proj.id == this.id);
      this.nomeDoProjeto = projeto?.nome || '';
    }
  },
  data() {
    return {
      nomeDoProjeto: ""
    };
  },
  methods: {
    salvar() {
      if (this.id) {
        this.store.commit(ActionEnum.ALTERA_PROJETO, {
          id: this.id,
          nome: this.nomeDoProjeto
        })
        this.$router.push('/projetos')
      } else {
        this.store.commit(ActionEnum.ADICIONA_PROJETO, this.nomeDoProjeto);
        this.store.commit(ActionEnum.NOTIFICAR, {
          titulo: 'Novo projeto foi salvo',
          texto: 'Prontinho ;) seu projeto já está disponível.',
          tipo: TipoNotificacaoEnum.SUCESSO
        })
        this.nomeDoProjeto = "";
        this.$router.push('/projetos')
      }
    },
  },
  setup() {
    const store = useStore();
    return {
      store
    }
  }
})
</script>