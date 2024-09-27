<template>
  <div id="proposito" class="text-center p-8 px-4">
    <h1
      class="text-2xl sm:text-4xl font-bold mb-4 items-center text-blue-500 hover:text-blue-800 transition duration-300 cursor-default"
    >
      NOTA DE AVISO SOBRE AS ELEIÇÕES MUNICIPAIS DE 2024
    </h1>
    <p class="text-lg sm:text-xl mb-6">
      A Sócio Estatística não publica e não autoriza a divulgação das suas
      pesquisas, sem autorização e registro do TSE, não podendo ser
      responsabilizada judicialmente caso o cliente a divulgue sem o devido
      registro.
    </p>
    <p class="text-lg sm:text-xl mb-6">
      Trabalhamos de acordo com a legislação eleitoral e só autorizamos
      pesquisas devidamente registradas.
    </p>
    <p class="text-lg sm:text-xl mb-6">
      Caso saiba de alguma irregularidade, seja ela a divulgação de pesquisa sem
      registro ou pesquisas falsas (FAKE NEWS), entre em contato conosco pelo
      e-mail: sociop@gmail.com ou clicando no botão de DENÚNCIA logo abaixo.
    </p>
    <button
      @click="openDenunciaForm"
      class="bg-blue-500 hover:bg-blue-800 transition duration-300 cursor-pointer text-white px-4 py-2 rounded"
    >
      DENÚNCIA
    </button>
  </div>
  <div class="text-center p-8 px-4">
    <h1
      class="text-2xl sm:text-4xl font-bold mb-4 items-center text-blue-500 hover:text-blue-800 transition duration-300 cursor-default"
    >
    NOTA DE ESCLARECIMENTO SOBRE FAKE NEWS EM UBAITABA</h1>
    <p class="text-lg sm:text-xl mb-6">
      A Sócio Estatística Pesquisa e Consultoria Ltda e Instituto Gasparetto
      Pesquisas, comunica que <strong>não tem nenhuma pesquisa registrada concernente ao
      processo eleitoral do município de UBAITABA</strong>, e que <strong>somente autoriza
      divulgação de pesquisa eleitoral, única e exclusivamente após o devido
      registro na Justiça Eleitoral.</strong>
    </p>
    <p class="text-lg sm:text-xl mb-6">
      Nesse sentido, quaisquer resultados eleitorais atribuídos ao Instituto em
      qualquer município, <strong>sem o devido registro na Justiça Eleitoral, não tem
      autorização e não avalizamos</strong>.
    </p>
    <p class="text-lg sm:text-xl mb-6">
      No momento, os resultados eleitorais referentes a UBAITABA, que circulam
      nas Redes sociais neste município, utilizando a logomarca da SÓCIO
      ESTATÍSTICA, são inverídicos.
    </p>
    <p class="text-lg sm:text-xl mb-6">
    <strong>São FAKE NEWS.</strong> Não correspondem á realidade. Absolutamente falsos.
    </p>
    <p class="text-lg sm:text-xl mb-6">
      Atenciosamente
      <br /><br />
      Agenor Gasparetto-Sociólogo/GPE Pesquisas<br /><br />
      Alda Alves Pereira- Bacharel em Políticas Públicas/Sócio Estatística<br /><br />
      Itabuna, 27 de setembro de 2024.
    </p>
  </div>
  <div class="text-center px-4">
    <h1
      class="text-2xl sm:text-4xl font-bold mb-4 text-blue-500 hover:text-blue-800 transition duration-300 cursor-default"
    >
      NOSSO PROPÓSITO
    </h1>
    <p class="text-lg sm:text-3xl font-bold text-color1 mb-8">
      Trabalhamos com Pesquisas Políticas há 30 anos na região Cacaueira da
      Bahia.
    </p>
    <p class="text-lg sm:text-xl mb-6">
      Somos uma empresa de pesquisas eleitorais, atuante desde 1992, atendendo
      candidatos em toda a região Cacaueira. Cobrimos aproximadamente 40
      municípios, entre elas, Itabuna, Ilhéus, Camacã, Ipiau, entre outros.
    </p>
    <p class="text-lg sm:text-xl mb-6">
      Temos como objetivo revelar o perfil do eleitor, investigar as intenções
      de voto, fazendo com que o candidato tenha mais ferramentas para elaborar
      suas estratégias na campanha.
    </p>
    <div class="pb-10"></div>
    <div class="relative">
      <picture>
        <source srcset="@/assets/images/folder.webp" type="image/webp" />
        <img
          src="/src/assets/images/folder.jpg"
          alt="Pessoas andando na rua"
          class="w-full max-sm:scale-150"
        />
      </picture>
      <div
        class="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
      ></div>
    </div>
    <div class="max-sm:pb-8"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PropositoView",
  methods: {
    openDenunciaForm() {
      window.open(
        "https://docs.google.com/forms/d/e/1FAIpQLSc5LXpCfVYrcSd2mVoNokkwrCxT3YD9Ux7HT4_naDiTmOTpjw/viewform?usp=sf_link",
        "_blank"
      );
    },
  },
});
</script>

<style scoped>
</style>
