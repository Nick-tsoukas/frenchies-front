<script setup>
const dogs = ref({
  bruce: {
    name: "Bruce",
    gender: "Male",
    description:
      "Meet Bruce, the epitome of rare Frenchie charm. With his mesmerizing Blue Sable coat and soulful eyes, he exudes elegance and uniqueness. Playful, affectionate, and incredibly intelligent, he steals hearts with his endearing personality. This one-of-a-kind Frenchie, with his delightful quirks and unwavering loyalty, will undoubtedly become the center of your world.",
    images: ["hero.jpg", "dogheroalt.png", "hero.jpg"],
  },
  rabbit: {
    name: "rabbit",
    gender: "Male",
    description:
      "Introducing Rabbit, a rare Frenchie Bulldog with a personality as unique as his name. With his striking Lilac coat and captivating eyes, he effortlessly captures hearts. Playful, curious, and endlessly charming, Rabbit embodies the essence of rare Frenchie allure.",
    images: ["hero.jpg", "hero.jpg", "hero.jpg"],
  },
});
const images = ref(["hero.jpg", "hero.jpg", "hero.jpg"]);
</script>
<template>
  <div>
    <div>
      <NuxtImg class="h-[350px] md:h-auto" src="hero.jpg" alt="" />
    </div>
    <div class="container mx-auto px-6 py-8 md:px-0">
      <p class="font-bold text-lg mb-6">
        {{ dogs[$route.params.id].name }}
        <span class="text-md">({{ dogs[$route.params.id].gender }})</span>
      </p>
      <p>{{ dogs[$route.params.id].description }}</p>
    </div>
    <section>
      <div class="flex w-full justify-center my-8">
        <p class="text-divider w-[200px] text-xs">Gallery</p>
      </div>
      <carousel v-if="images" :items-to-show="1">
        <slide v-for="img in dogs[$route.params.id].images" :key="img">
          <NuxtImg :src="img" />
        </slide>

        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </section>
    <section>
      <div class="bg-white">
        <div class="mx-auto max-w-7xl sm:px-6 sm:py-32 lg:px-8">
          <div
            class="relative isolate overflow-hidden px-6 my-8 text-center sm:rounded-3xl sm:px-16"
          >
            <h2
              class="mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Have questions about our puppies?
            </h2>
            <p class="mx-auto mt-6 max-w-xl text-lg leading-8">
              Reach out and send us a messages. We are always happy to help find
              a pup for you
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <NuxtLink to="/contact">
                <Button text="Contact Us" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
