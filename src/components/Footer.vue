<template>
  <footer class="p-4 bg-color1 text-white text-center">
    <h1 class="text-3xl font-bold mb-4 hover:text-blue-800 transition duration-300 cursor-default">Entre em contato conosco</h1>
    <div class="flex items-center justify-center space-x-2 hover:text-blue-800 transition duration-300 cursor-default">
      <font-awesome-icon :icon="['fas', 'phone']" class="w-6 h-6" />
      <p>(73) 3212-1229</p>
    </div>
    <a href="mailto:sociop@gmail.com" class="flex items-center justify-center space-x-2 mt-2 hover:text-blue-800 transition duration-300 cursor-pointer">
      <font-awesome-icon :icon="['fas', 'envelope']" class="w-6 h-6" />
      <p>sociop@gmail.com</p>
    </a>
    <a href="https://wa.me/+5573988698660" target="_blank" class="flex items-center justify-center space-x-2 mt-2 hover:text-blue-800 transition duration-300 cursor-pointer">
      <font-awesome-icon :icon="['fab', 'whatsapp']" class="w-6 h-6" />
      <p>(73) 98869-8660</p>
    </a>
    <p class="mt-4 hover:text-blue-800 transition duration-300 cursor-default">Endereço: Rua Francisco Ribeiro Jr., 198, Sala 606 - Centro, Itabuna - BA.</p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Footer',
});
</script>

<style scoped>
</style>
