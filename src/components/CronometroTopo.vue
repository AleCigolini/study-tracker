<template>
    <section>
        <strong class="display">{{ tempoDecorrido }}</strong>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "CronometroTopo",
    props: {
        tempoEmSegundos: { type: Number, required: true, default: 0 }
    },
    // COMPUTED É UTILIZADO PARA VARIÁVEIS DINÂMICAS - MUDAM DE VALOR DEVIDO ALGUMA CONDIÇÃO
    computed: {
        tempoDecorrido(): string {
            return new Date(this.tempoEmSegundos * 1000).toISOString().substring(11, 19);
        }
    },
})
</script>

<style scoped>
.display {
    color: var(--texto-primario);
}
</style>