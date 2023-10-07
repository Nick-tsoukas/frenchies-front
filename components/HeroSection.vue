<template>
  <section class="flex items-center justify-center h-auto w-full">
    <!-- <div class="w-[100vw] h-full background"></div> -->

    <img class="h-[350px] md:h-auto" src="hero.jpg" alt="" />
    <section class="absolute">
      <p class="text-center text-white text-3xl header_font">
        Discover Rare Frenchie Bulldogs
      </p>
      <p class="text-center text-white font-light mt-8">
        Where Elegance Meets Rarity
      </p>
    </section>
  </section>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&family=Nunito+Sans:opsz,wght@6..12,500;6..12,600;6..12,700;6..12,800;6..12,900&family=Playfair+Display:wght@500&family=Young+Serif&display=swap");

.header_font {
  font-family: "Young Serif", serif;
}
.t_shad {
  text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.5);
}
.background {
  background-image: url("/hero.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
}
</style>
