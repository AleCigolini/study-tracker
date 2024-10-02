<template>
    <div class="box has-text-weight-bold">
        <!-- Este componente possibilita que o Vue renderize o que desejamos colocar aqui dentro através de outro componente -->
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({})
</script>

<style scoped>
.box {
    background: #FAF0CA;
}
</style>