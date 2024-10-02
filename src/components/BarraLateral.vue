<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="Imagem do Study Tracker">
    </h1>
    <button class="button" @click="alterarTema">{{ textoBotao }}</button>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "BarraLateral",
  emits: ['aoTemaAlterado'],
  data() {
    return {
      isModoEscuro: false
    }
  },
  methods: {
    alterarTema(): void {
      this.isModoEscuro = !this.isModoEscuro;
      this.$emit('aoTemaAlterado', this.isModoEscuro);
    }
  },
  computed: {
    textoBotao() {
      if (this.isModoEscuro) {
        return 'Desativar modo escuro'
      }
      return 'Ativar modo escuro'
    }
  }
})
</script>

<style scoped>
header {
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
  text-align: center
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>