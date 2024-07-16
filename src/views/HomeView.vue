<template>
  <div>
    <section id="home" class="p-8">
      <h1 class="text-4xl font-bold mb-4">Home</h1>
      <!-- Conteúdo da Home -->
    </section>
    <PropositoView />
    <MetodologiaView />
    <QuemSomosView />
    <ContatoView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PropositoView from './PropositoView.vue';
import MetodologiaView from './MetodologiaView.vue';
import QuemSomosView from './QuemSomosView.vue';
import ContatoView from './ContatoView.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    PropositoView,
    MetodologiaView,
    QuemSomosView,
    ContatoView,
  },
});
</script>

<style scoped>
/* Estilos adicionais se necessário */
</style>
