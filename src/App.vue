<template>
  <div id="app">
    <NavBar />
    <Home />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './components/NavBar.vue';
import Home from './components/Home.vue';
import Footer from './components/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    NavBar,
    Home,
    Footer
  }
});
</script>

<style scoped>
</style>
