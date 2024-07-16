<template>
  <div>
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
</style>
