<template>
  <nav class="bg-white p-4">
    <div class="container mx-auto flex items-center justify-between">
      <div class="flex items-center">
        <img src="@/assets/images/logo_socio.jpeg" alt="Logo" class="h-12 mr-4">
      </div>
      <div class="hidden lg:flex space-x-4">
        <a href="/" class="text-color2 hover:text-colorText_h1">HOME</a>
        <a href="#proposito" class="text-color2 hover:text-colorText_h1">NOSSO PROPÓSITO</a>
        <a href="#metodologia" class="text-color2 hover:text-colorText_h1">METODOLOGIA</a>
        <a href="#quemsomos" class="text-color2 hover:text-colorText_h1">QUEM SOMOS</a>
        <a href="#contato" class="text-color2 hover:text-colorText_h1">CONTATO</a>
      </div>
      <button @click="toggleMenu" class="lg:hidden text-color2">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
    <div v-if="isMenuOpen" class="lg:hidden bg-color2 text-center mt-2 space-y-2">
      <a href="/" class="block text-white py-2" @click="closeMenu">HOME</a>
      <a href="#proposito" class="block text-white py-2" @click="closeMenu">NOSSO PROPÓSITO</a>
      <a href="#metodologia" class="block text-white py-2" @click="closeMenu">METODOLOGIA</a>
      <a href="#quemsomos" class="block text-white py-2" @click="closeMenu">QUEM SOMOS</a>
      <a href="#contato" class="block text-white py-2" @click="closeMenu">CONTATO</a>
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

    function closeMenu() {
      isMenuOpen.value = false;
    }

    return {
      isMenuOpen,
      toggleMenu,
      closeMenu,
    };
  },
});
</script>

<style scoped>
</style>
