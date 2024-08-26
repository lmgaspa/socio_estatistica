<template>
  <div class="flex flex-col items-center p-8 mt-8 bg-gray-100">
    <h1 class="text-3xl font-bold mb-4">Nossa localização</h1>
    <div class="map-container">
      <iframe
        class="w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1564.7464816744787!2d-39.27252228834893!3d-14.788955719079748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x739aa6767884ad9%3A0x3fcf92f4d168ac58!2sEdificil%20Atlanta%20Center!5e0!3m2!1sen!2sbr!4v1699969303986!5m2!1sen!2sbr"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MapComponent',
};
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 500px;
}
</style>
