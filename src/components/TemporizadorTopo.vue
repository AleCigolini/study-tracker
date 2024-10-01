<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <section>
            <CronometroTopo :tempo-em-segundos="tempoEmSegundos" />

            <BotaoTemporizador 
                @botaoClicado="iniciar" 
                :isCronometroRodando="isCronometroRodando" 
                textoDoBotao="Iniciar"
                nomeDoIcone="fa-play"
            />

            <BotaoTemporizador 
                @botaoClicado="finalizar" 
                :isCronometroRodando="!isCronometroRodando" 
                textoDoBotao="Parar"
                nomeDoIcone="fa-stop"
            />
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CronometroTopo from './CronometroTopo.vue';
import BotaoTemporizador from './BotaoTemporizador.vue';

export default defineComponent({
    name: "TemporizadorTopo",
    emits: ['aoTemporizadorFinalizar'],
    data() {
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
            isCronometroRodando: false
        }
    },
    methods: {
        iniciar() {
            this.isCronometroRodando = true;
            this.cronometro = setInterval(() => {
                this.tempoEmSegundos += 1;
            }, 1000);
        },

        finalizar() {
            this.isCronometroRodando = false;
            clearInterval(this.cronometro);
            this.$emit('aoTemporizadorFinalizar', this.tempoEmSegundos);
            this.tempoEmSegundos = 0;
        }
    },
    components: { CronometroTopo, BotaoTemporizador }
})
</script>