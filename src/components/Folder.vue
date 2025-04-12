<template>
  <div class="text-center p-4">
    <picture>
      <source srcset="@/assets/images/home2.wepb" type="image/webp" width="1200" height="600">
      <img
        src="@/assets/images/home2.wepb"
        sizes="(max-width: 600px) 600px, (max-width: 1200px) 1200px, 1800px"
        alt="Imagem Home"
        class="w-full mb-4"
      />
    </picture>
    <div
      class="absolute bottom-0 right-0 p-2 bg-black bg-opacity-50 text-white text-xs opacity-0 hover:opacity-100 transition-opacity duration-300"
    >
      <a
        href="https://br.freepik.com/fotos-gratis/pessoas-de-negocios-que-discutem-os-resultados-do-trabalho-em-equipe-bem-sucedido_1211592.htm#from_view=detail_alsolike"
        target="_blank"
      >
        Imagem de ijeab no Freepik
      </a>
    </div>
  </div>
</template>
  
  <script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Folder",
});
</script>
  
  <style scoped>
</style>
  