<template>
  <footer class="p-4 bg-color1 text-white text-center">
    <div class="flex items-center justify-center space-x-2">
      <font-awesome-icon :icon="['fas', 'phone']" class="w-6 h-6" />
      <p>(73) 3212-1229</p>
    </div>
    <div class="flex items-center justify-center space-x-2 mt-2">
      <font-awesome-icon :icon="['fas', 'envelope']" class="w-6 h-6" />
      <p>sociop@gmail.com</p>
    </div>
    <div class="flex items-center justify-center space-x-2 mt-2">
      <font-awesome-icon :icon="['fab', 'whatsapp']" class="w-6 h-6" />
      <p>(73) 98869-8660</p>
    </div>
    <p class="mt-4">Endereço: Rua Francisco Ribeiro Jr., 198, Sala 606 - Centro, Itabuna - BA.</p>
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
