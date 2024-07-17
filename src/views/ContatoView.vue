<template>
<div id="contato" class="flex h-screen flex-col sm:flex-row">
  <div class="flex-1 relative hidden lg:block">
    <img src="/src/assets/images/contato.jpg" alt="Descrição da imagem" class="w-full h-full object-cover">
    <div class="absolute bottom-0 right-0 p-2 bg-black bg-opacity-50 text-white text-xs opacity-0 hover:opacity-100 transition-opacity duration-300">
      <a href="https://br.freepik.com/fotos-gratis/closeup-de-mulher-assinando-documento-e-segurando-smartphone_3295446.htm#fromView=search&page=1&position=19&uuid=5866a727-3339-4942-8e42-994efb16eddf" target="_blank">
        Imagem de katemangostar no Freepik
      </a>
    </div>
    </div>
    <div class="flex-1 flex items-center justify-center bg-pink-900 p-8">
      <form class="w-full bg-white p-4 rounded shadow-md">
        <h2 class="text-3xl font-bold mb-4 text-center">PRONTO PARA SOLICITAR UM ORÇAMENTO?</h2>
        <p class="text-center font-bold mb-6">PREENCHA O FORMULÁRIO E ENTRAREMOS EM CONTATO.</p>
        <div class="mb-4">
          <label class="block text-black text-md font-bold mb-2" for="name">
            Nome*
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Seu nome">
        </div>
        <div class="mb-4">
          <label class="block text-black text-md font-bold mb-2" for="email">
            E-mail*
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Seu e-mail">
        </div>
        <div class="mb-4">
          <label class="block text-black text-md font-bold mb-2" for="title">
            Título*
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Título">
        </div>
        <div class="mb-6">
          <label class="block text-black text-md font-bold mb-2" for="message">
            Sua Mensagem*
          </label>
          <textarea class="shadow appearance-none border rounded w-full py-12 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="message" rows="4" placeholder="Escreva sua mensagem aqui..."></textarea>
        </div>
        <div class="flex items-center justify-center">
          <button class="bg-color1 hover:bg-colorText_h1 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            ENVIAR MENSAGEM
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ContatoView',
});
</script>

<style scoped>
</style>
