<template>
    <button class="button" @click="acaoTemporizador" :disabled="isCronometroRodando">
        <span class="icon">
            <i class="fas" :class="nomeDoIcone"></i>
        </span>
        <span>{{ textoDoBotao }}</span>
    </button>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
    name: "BotaoTemporizador",
    emits: ['botaoClicado'],
    props: {
        isCronometroRodando: { type: Boolean, required: true },
        nomeDoIcone: { type: String, required: true },
        textoDoBotao: { type: String, required: true },
    },
    methods: {
        acaoTemporizador(): void {
            this.$emit('botaoClicado');
        }
    }
})
</script>