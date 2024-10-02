<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro': isModoEscuro }">
    <div class="column is-one-quarter">
      <BarraLateral @ao-tema-alterado="alterarTema"/>
    </div>
    <div class="column is-three-quarter conteudo">
      <FormularioTopo @ao-salvar-tarefa="salvarTarefa"/>
      <div class="lista">
        <TarefaList 
          v-for="(tarefa, index) in tarefas" 
          :key="index"
          :tarefa="tarefa"
        />
        <BoxPadrao v-if="isListaVazia">
          Você não está muito produtivo hoje
        </BoxPadrao>
      </div>
    </div>
  </main>  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import FormularioTopo from './components/FormularioTopo.vue';
import TarefaList from './components/TarefaList.vue';
import ITarefa from './interfaces/ITarefa';
import BoxPadrao from './components/BoxPadrao.vue';

export default defineComponent({
  name: 'App',
  components: { BarraLateral, FormularioTopo, TarefaList, BoxPadrao },
  data() {
    return {
      tarefas: [] as ITarefa[],
      isModoEscuro: false
    }
  },
  computed: {
    isListaVazia(): boolean {
      return this.tarefas.length === 0;
    }
  },
  methods: {
    salvarTarefa(tarefa: ITarefa): void {
      this.tarefas.push(tarefa);
    },

    alterarTema(isModoEscuro: boolean): void {
      this.isModoEscuro = isModoEscuro;
    }
  }
});
</script>

<style scoped>
.lista {
  padding: 10px
}

main {
  --bg-primario: #ffffff;
  --texto-primario: #000000;
}

main.modo-escuro {
  --bg-primario: #2b2d42;
  --texto-primario: #dddddd;
}

.conteudo {
  background-color: var(--bg-primario);
}
</style>
