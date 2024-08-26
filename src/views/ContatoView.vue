<template>
  <div id="contato" class="flex flex-col sm:flex-row">
    <div class="flex-1 relative hidden lg:block">
      <picture>
        <source srcset="@/assets/images/contato.webp" type="image/webp" />
        <img
          src="/src/assets/images/contato.webp"
          alt="Descrição da imagem"
          class="w-full h-full object-cover"
        />
      </picture>
      <div
        class="absolute bottom-0 right-0 p-2 bg-black bg-opacity-50 text-white text-xs opacity-0 hover:opacity-100 transition-opacity duration-300"
      >
        <a
          href="https://br.freepik.com/fotos-gratis/closeup-de-mulher-assinando-documento-e-segurando-smartphone_3295446.htm#fromView=search&page=1&position=19&uuid=5866a727-3339-4942-8e42-994efb16eddf"
          target="_blank"
        >
          Imagem de katemangostar no Freepik
        </a>
      </div>
    </div>
    <div class="flex-1 flex items-center justify-center bg-color3 p-8">
      <form
        class="w-full bg-white p-4 rounded shadow-md"
        @submit.prevent="sendEmail"
      >
        <h2
          class="text-3xl font-bold mb-4 text-center hover:text-blue-800 transition duration-300 cursor-default"
        >
          PRONTO PARA SOLICITAR UM ORÇAMENTO?
        </h2>
        <p
          class="text-center font-bold mb-6 hover:text-blue-800 transition duration-300 cursor-default"
        >
          PREENCHA O FORMULÁRIO E ENTRAREMOS EM CONTATO.
        </p>
        <div class="mb-4">
          <label class="block text-black text-md font-bold mb-2" for="name">
            Nome*
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Seu nome"
            v-model="form.name"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block text-black text-md font-bold mb-2" for="email">
            E-mail*
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Seu e-mail"
            v-model="form.email"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block text-black text-md font-bold mb-2" for="title">
            Título*
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Título"
            v-model="form.title"
            required
          />
        </div>
        <div class="mb-6">
          <label class="block text-black text-md font-bold mb-2" for="message">
            Sua Mensagem*
          </label>
          <textarea
            class="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows="8"
            placeholder="Escreva sua mensagem aqui..."
            v-model="form.message"
            required
          ></textarea>
        </div>
        <div class="flex items-center justify-center">
          <button
            class="bg-color1 hover:bg-blue-800 transition duration-300 cursor-pointer text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            ENVIAR MENSAGEM
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import emailjs from "emailjs-com";

export default defineComponent({
  name: "ContatoView",
  setup() {
    const form = ref({
      name: "",
      email: "",
      title: "",
      message: "",
    });

    const sendEmail = () => {
      const templateParams = {
        from_name: form.value.name,
        from_email: form.value.email,
        subject: form.value.title,
        message: form.value.message,
      };

      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          templateParams,
          import.meta.env.VITE_EMAILJS_USER_ID
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            alert("Mensagem enviada com sucesso!!!");
          },
          (error) => {
            console.log("FAILED...", error);
            alert("Falha ao enviar a mensagem. Tente novamente mais tarde.");
          }
        );
    };

    return {
      form,
      sendEmail,
    };
  },
});
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 500px;
}
</style>