<template>
  <footer class="p-4 bg-color1 text-white text-center mt-auto">
    <div class="flex items-center justify-center space-x-2">
      <font-awesome-icon :icon="['fab', 'whatsapp']" class="w-6 h-6" />
      <p>(73) 9999-9999</p>
    </div>
    <p>Endereço: Rua Francisco Ribeiro Jr., 198, Sala 606 - Centro, Itabuna - BA.</p>
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
