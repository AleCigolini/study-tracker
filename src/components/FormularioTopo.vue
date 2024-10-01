<template>
    <div class="box">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa">
                <input 
                    type="text" 
                    class="input" 
                    placeholder="Qual tarefa você deseja iniciar?" 
                    v-model="descricao"
                />
            </div>
            <div class="column">
                <TemporizadorTopo @aoTemporizadorFinalizar="finalizarTarefa" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TemporizadorTopo from './TemporizadorTopo.vue';

export default defineComponent({
    name: "FormularioTopo",
    data() {
        return {
            descricao: ''
        }
    },
    methods: {
        finalizarTarefa(tempoEmSegundos: number): void {
            console.log(tempoEmSegundos);
            console.log(this.descricao);
        }
    },
    components: { TemporizadorTopo }
})
</script>