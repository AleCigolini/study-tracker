<template>
    <BoxPadrao>
        <div class="columns">
            <div class="column is-4">
                {{ tarefa?.descricao || 'Tarefa sem descrição' }}
            </div>
            <div class="column is-3">
                {{ tarefa?.projeto?.nome || 'Sem projeto' }}
            </div>
            <div class="column">
                <CronometroTopo :tempo-em-segundos="tarefa?.duracaoEmSegundos" />
            </div>
        </div>
    </BoxPadrao>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import CronometroTopo from './CronometroTopo.vue';
import ITarefa from '@/interfaces/ITarefa';
import BoxPadrao from './BoxPadrao.vue';


export default defineComponent({
    name: "TarefaList",
    components: { CronometroTopo, BoxPadrao },
    props: {
        tarefa: { type: Object as PropType<ITarefa>, required: true }
    }
})
</script>