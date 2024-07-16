<template>
  <div id="metodologia" class="flex flex-col items-center">
    <h1 class="text-4xl font-bold mb-4">Metodologia</h1>
    <p class="text-xl mb-8 text-center">
      Fazemos colheita de dados na rua, entrevistando pessoas com base no que o nosso cliente deseja saber.
    </p>
    <p class="text-xl mb-6 text-center">
      Nossas pesquisas são customizadas, ou seja, o cliente decide o que ele quer saber.
    </p>
    <ul class="list-disc text-xl mb-12 text-center">
      <li class="mb-4">
        Analisamos quem são os candidatos mais fortes no momento atual da pesquisa.
      </li>
      <li class="mb-4">
        Projetamos cenários entre alguns candidatos.
      </li>
      <li class="mb-4">
        Investigamos se o apoio de alguma personalidade pública ou do governo pode ajudar o candidato.
      </li>
      <li class="mb-4">
        Analisamos quem seria o melhor vice-prefeito.
      </li>
      <li class="mb-4">
        Verificamos se as redes sociais e qual meio de comunicação tem relevância.
      </li>
      <li class="mb-4">
        Entre outros critérios.
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MetodologiaView',
});
</script>

<style scoped>
</style>
