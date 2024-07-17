<template>
  <div id="app">
    <NavBar />
    <HomeView />
    <MapComponent />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './components/NavBar.vue';
import HomeView from './views/HomeView.vue';
import Footer from './components/Footer.vue';
import MapComponent from './components/MapComponent.vue';

export default defineComponent({
  name: 'App',
  components: {
    NavBar,
    HomeView,
    Footer,
    MapComponent
  }
});
</script>

<style scoped>
</style>
