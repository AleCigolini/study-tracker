<template>
    <FormularioTopo @ao-salvar-tarefa="salvarTarefa" />
    <div class="lista">
        <TarefaList v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
        <BoxPadrao v-if="isListaVazia">
            Você não está muito produtivo hoje
        </BoxPadrao>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormularioTopo from '../components/FormularioTopo.vue';
import TarefaList from '../components/TarefaList.vue';
import ITarefa from '../interfaces/ITarefa';
import BoxPadrao from '../components/BoxPadrao.vue';

export default defineComponent({
    name: 'App',
    components: { FormularioTopo, TarefaList, BoxPadrao },
    data() {
        return {
            tarefas: [] as ITarefa[]
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
        }
    }
});
</script>