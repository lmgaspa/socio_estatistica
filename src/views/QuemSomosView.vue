<template>
  <div id="quemsomos" class="text-center items-center pt-4 mt-4 px-4">
    <h1 class="text-2xl sm:text-4xl font-bold mb-4 text-blue-500 hover:text-blue-800 transition duration-300 cursor-default">Quem Somos</h1>
    <p class="text-lg sm:text-xl mb-8">
      A Sócio Estatística, foi fundada em 1992, com as seguintes diretrizes:
    </p>
    <ul class="list-disc text-lg sm:text-xl pl-6 mb-12 text-left mx-auto max-w-2xl">
      <li class="mb-4">
        <strong>Foco em Pesquisas:</strong> Realiza exclusivamente pesquisas de mercado e opinião, sem atuar em assessoria ou consultoria.
      </li>
      <li class="mb-4">
        <strong>Não Exclusividade:</strong> Não possui contratos de exclusividade. Em caso de conflito de interesses, especialmente em períodos eleitorais, prioriza o cliente regular.
      </li>
      <li class="mb-4">
        <strong>Anonimato Garantido:</strong> Assegura o anonimato dos entrevistados, utilizando dados apenas de forma agregada.
      </li>
      <li class="mb-4">
        <strong>Ética e Segurança:</strong> Observa o código de ética das empresas de pesquisa e evita questões que comprometam a integridade dos pesquisadores ou valores éticos.
      </li>
      <li class="mb-4">
        <strong>Compromisso com a Verdade:</strong> O compromisso principal é com a verdade refletida nas pesquisas.
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'QuemSomosView',
});
</script>

<style scoped>
</style>
