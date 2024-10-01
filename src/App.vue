<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>
    <div class="column is-three-quarter">
      <FormularioTopo />
    </div>
  </main>  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import FormularioTopo from './components/FormularioTopo.vue';

export default defineComponent({
  name: 'App',
  components: { BarraLateral, FormularioTopo }
});
</script>

<style>

</style>
