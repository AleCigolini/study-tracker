<template>
    <div class="box formulario">
        <div class="columns">
            <div class="column is-5" role="form" aria-label="Formulário para criação de uma nova tarefa">
                <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar?" v-model="descricao" />
            </div>
            <div class="column is-3">
                <div class="select">
                    <select v-model="idProjeto">
                        <option value="">Selecione o projeto</option>
                        <option :value="projeto.id" v-for="projeto in projetos" :key="projeto.id">
                            {{ projeto.nome }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="column">
                <TemporizadorTopo @aoTemporizadorFinalizar="finalizarTarefa" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import TemporizadorTopo from './TemporizadorTopo.vue';
import { useStore } from '@/store';

export default defineComponent({
    name: "FormularioTopo",
    emits: ['aoSalvarTarefa'],
    data() {
        return {
            descricao: '',
            idProjeto: ''
        }
    },
    methods: {
        finalizarTarefa(tempoDecorrido: number): void {
            this.$emit('aoSalvarTarefa', {
                duracaoEmSegundos: tempoDecorrido,
                descricao: this.descricao,
                projeto: this.projetos.find(proj => proj.id == this.idProjeto)
            })
            this.descricao = ''
        }
    },
    setup() {
        // BUSCAR A KEY CRIADA NA PASTA ./STORE/INDEX.TS
        const store = useStore()

        // BUSCAR OS PROJETOS DO ESTADO GLOBAL
        // ESTE RETORNO FARÁ COM QUE A VARIÁVEL FIQUE DISPONPÍVEL PARA SER USADA NO COMPONENTE
        return {
            projetos: computed(() => store.state.projetos)
        }
    },
    components: { TemporizadorTopo }
})
</script>

<style>
.formulario {
    color: var(--texto-primario);
    background-color: var(--bg-primario);
}
</style>