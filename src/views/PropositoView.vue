<template>
  <div id="proposito" class="text-center p-8">
    <img
      src="/src/assets/images/home2.png"
      alt="Imagem Home"
      class="w-full mb-4"
    />
    <div class="text-center p-8">
      <h1 class="text-4xl font-bold mb-4">
        NOTA DE ESCLARECIMENTO SOBRE AS ELEIÇÕES MUNICIPAIS DE 2024
      </h1>
      <p class="text-xl mb-6">
        A Sócio Estatistica não publica e não autoriza a divulgação da suas
        pesquisas, sem autorização e registro do TSE, não podendo ser
        responsabilizada judicialmente caso o cliente a divulgue sem o devido
        registro.
      </p>
      <p class="text-xl mb-6">
        Trabalhamos de acordo com a legislação eleitoral e só autorizamos
        pesquisas devidamente registradas.
      </p>
      <p class="text-xl mb-6">
        Caso saiba de alguma irregularidade, seja ela a divulgação de pesquisa
        sem registro ou pesquisas falsas (FAKE NEWS), entre em contato conosco pelo whatsapp (73)9999-9999 ou clicando no
        botão de DENÚNCIA logo abaixo.
      </p>
      <button class="bg-blue-500 text-white px-4 py-2 rounded">DENÚNCIA</button>
    </div>
    <h1 class="text-4xl font-bold mb-4">NOSSO PROPÓSITO</h1>
    <p class="text-3xl font-bold text-color1 mb-8">
      Trabalhamos com Pesquisas Políticas há 30 anos na região Cacaueira da
      Bahia.
    </p>
    <p class="text-xl mb-6">
      Somos a empresa com maior credibilidade no setor e na região, atendendo
      candidatos em toda a região Cacoeira. Cobrimos aproximadamente 40
      municípios, entre elas, Itabuna, Ilhéus, Camacã, Ipiau, entre outros.
    </p>
    <p class="text-xl mb-6">
      Temos como objetivo revelar o perfil do eleitor, investigar as intenções
      de voto, fazendo com que o mesmo tenha mais ferramentas para elaborar suas
      estratégias na campanha.
    </p>
    <div class="pb-10"></div>
    <div class="relative">
      <img
        src="/src/assets/images/folder.jpg"
        alt="Pessoas andando na rua"
        class="w-full max-sm:scale-150"
      />
      <div
        class="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
      >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PropositoView",
});
</script>

<style scoped>
</style>
