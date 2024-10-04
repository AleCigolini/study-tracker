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
import useNotificador from '@/hooks/notificador'


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
        this.notificar(TipoNotificacaoEnum.SUCESSO, 'Novo projeto foi salvo', 'Prontinho ;) seu projeto já está disponível.')
        this.nomeDoProjeto = "";
        this.$router.push('/projetos')
      }
    },
  },
  setup() {
    const store = useStore();
    const { notificar } = useNotificador()
    return {
      store,
      notificar
    }
  }
})
</script>