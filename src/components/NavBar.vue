<template>
  <nav class="bg-white p-4">
    <div class="container mx-auto flex items-center justify-between">
      <div class="flex items-center">
        <picture>
          <source srcset="@/assets/images/logo_socio.webp" type="image/webp" />
          <img
            src="@/assets/images/logo_socio.jpeg"
            alt="Logo"
            class="h-20 mr-4"
          />
        </picture>
      </div>
      <div class="hidden lg:flex space-x-4">
        <router-link
          to="/"
          class="text-color2 hover:text-blue-800 transition duration-300 cursor-pointer"
          >HOME</router-link
        >
        <router-link
          to="/proposito"
          class="text-color2 hover:text-blue-800 transition duration-300 cursor-pointer"
          >NOSSO PROPÓSITO</router-link
        >
        <router-link
          to="/metodologia"
          class="text-color2 hover:text-blue-800 transition duration-300 cursor-pointer"
          >METODOLOGIA</router-link
        >
        <router-link
          to="/quemsomos"
          class="text-color2 hover:text-blue-800 transition duration-300 cursor-pointer"
          >QUEM SOMOS</router-link
        >
        <router-link
          to="/contato"
          class="text-color2 hover:text-blue-800 transition duration-300 cursor-pointer"
          >CONTATO</router-link
        >
      </div>
      <button @click="toggleMenu" class="lg:hidden text-color2">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
    </div>
    <div
      v-if="isMenuOpen"
      class="lg:hidden bg-color2 text-center mt-2 space-y-2"
    >
      <router-link to="/" class="block text-white py-2" @click="closeMenu"
        >HOME</router-link
      >
      <router-link
        to="/proposito"
        class="block text-white py-2"
        @click="closeMenu"
        >NOSSO PROPÓSITO</router-link
      >
      <router-link
        to="/metodologia"
        class="block text-white py-2"
        @click="closeMenu"
        >METODOLOGIA</router-link
      >
      <router-link
        to="/quemsomos"
        class="block text-white py-2"
        @click="closeMenu"
        >QUEM SOMOS</router-link
      >
      <router-link
        to="/contato"
        class="block text-white py-2"
        @click="closeMenu"
        >CONTATO</router-link
      >
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "NavBar",
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
