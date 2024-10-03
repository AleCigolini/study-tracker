<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro': isModoEscuro }">
    <div class="column is-one-quarter">
      <BarraLateral @ao-tema-alterado="alterarTema"/>
    </div>
    <div class="column is-three-quarter conteudo">
      <!-- O ROUTER-VIEW RENDERIZA CONFORME COMPONENTES INSERIDOS EM CADA ROTA -->
       <router-view></router-view>
    </div>
  </main>  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';

export default defineComponent({
  name: 'App',
  components: { BarraLateral },
  data() {
    return {
      isModoEscuro: false
    }
  },
  methods: {
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
