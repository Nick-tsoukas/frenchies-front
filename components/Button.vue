<script setup>
defineProps({
  text: {
    type: String,
    default: "About Us",
  },
});
</script>
<template>
  <div class="flex justify-center w-full">
    <div class="button_round w-[200px]">
      <p class="text-bold">{{ text }}</p>
    </div>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&family=Playfair+Display:wght@500&display=swap");
p {
  font-family: "Montserrat", sans-serif;
}
</style>
