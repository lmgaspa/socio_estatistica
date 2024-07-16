<template>
  <nav class="bg-color1 p-4">
    <div class="container mx-auto flex items-center justify-between">
      <div class="flex items-center">
        <img src="@/assets/images/logo_socio.jpeg" alt="Logo" class="h-8 mr-4">
      </div>
      <div class="hidden lg:flex space-x-4">
        <router-link to="/" class="text-white hover:text-gray-300">HOME</router-link>
        <router-link to="#proposito" class="text-white hover:text-gray-300">NOSSO PROPÓSITO</router-link>
        <router-link to="#metodologia" class="text-white hover:text-gray-300">METODOLOGIA</router-link>
        <router-link to="#quem-somos" class="text-white hover:text-gray-300">QUEM SOMOS</router-link>
        <router-link to="#contato" class="text-white hover:text-gray-300">CONTATO</router-link>
      </div>
      <button @click="toggleMenu" class="lg:hidden text-white">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
    <div v-if="isMenuOpen" class="lg:hidden text-center mt-2 space-y-2">
      <router-link to="/" class="block text-white py-2">HOME</router-link>
      <router-link to="#proposito" class="block text-white py-2">NOSSO PROPÓSITO</router-link>
      <router-link to="#metodologia" class="block text-white py-2">METODOLOGIA</router-link>
      <router-link to="#quem-somos" class="block text-white py-2">QUEM SOMOS</router-link>
      <router-link to="#contato" class="block text-white py-2">CONTATO</router-link>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'NavBar',
  setup() {
    const isMenuOpen = ref(false);

    function toggleMenu() {
      isMenuOpen.value = !isMenuOpen.value;
    }

    return {
      isMenuOpen,
      toggleMenu,
    };
  },
});
</script>

<style scoped>
</style>
