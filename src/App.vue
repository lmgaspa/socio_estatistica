<template>
  <div id="app">
    <NavBar />
    <HomeView />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './components/NavBar.vue';
import HomeView from './views/HomeView.vue';
import Footer from './components/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    NavBar,
    HomeView,
    Footer
  }
});
</script>

<style scoped>
</style>
