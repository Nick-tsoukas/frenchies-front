<script setup>
const images = ref(["/dog1.jpeg", "/dog2.jpeg", "/dog3.jpeg"]);
</script>
<template>
  <div>
    <HeroSection class="relative" />
    <div class="px-6 sm:px-0 container mx-auto">
      <IntroSection />
      <section id="about" class="w-full mt-8">
        <p class="text-divider text-xs">About are rare breeds</p>

        <ul class="my-4">
          <p class="text-center font-bold my-4">Merle French Bulldog</p>

          <li class="flex gap-4 max-h-[120px] my-4 text-left">
            <img src="/dog1.jpeg" class="h-[100px] w-[150px]" alt="" />
            A stunning blend of blue and fawn hues, a rare and captivating
            choice
          </li>
          <p class="text-center font-bold my-4">Merle French Bulldog</p>
          <li class="flex gap-4 h-[120px] my-4 text-left">
            Known for their striking coat patterns, each Merle Frenchie is a
            unique masterpiece.
            <img src="/dog4.jpeg" class="h-[100px] w-[150px]" alt="" />
          </li>
          <p class="text-center font-bold my-4">Merle French Bulldog</p>
          <li class="flex gap-4 h-[120px] my-4 text-left">
            <img src="/dog3.jpeg" class="h-[100px] w-[150px]" alt="" />
            A rare gem with a chocolate base and captivating brindle markings.
          </li>
        </ul>
      </section>
      <div class="flex w-full justify-center my-8">
        <p class="text-divider w-[200px] text-xs">Gallery</p>
      </div>
      <carousel :items-to-show="1">
        <slide v-for="img in images" :key="img">
          <img :src="img" alt="" />
        </slide>

        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>

      <section class="my-6">
        <div class="flex w-full justify-center my-8">
          <p class="text-divider w-[200px] text-xs">Meet The Dogs</p>
        </div>
        <section id="dogs" class="flex flex-col gap-6">
          <DogCard
            dogName="bruce"
            image="/dog1.jpeg"
            desicription="Blue Sable French Bulldog: A stunning blend of blue and fawn hues, a
            rare and captivating choice"
          />
          <DogCard
            dogName="rabbit"
            image="/dog4.jpeg"
            desicription="Blue Sable French Bulldog: A stunning blend of blue and fawn hues, a
            rare and captivating choice"
          />
          <DogCard
            dogName="bruce"
            image="/dog3.jpeg"
            desicription="Blue Sable French Bulldog: A stunning blend of blue and fawn hues, a
            rare and captivating choice"
          />
        </section>
      </section>
    </div>
    <section class="container mx-auto mb-8 mt-12">
      <div class="flex w-full justify-center my-8">
        <p class="text-divider w-[200px] text-xs">Find Your Frenchie</p>
      </div>
      <div class="w-full flex justify-center mt-8">
        <p class="text-center text-lg mb-8 sm:text-xl w-[80vw]">
          Have any questions about our puppies, reach out to us and we are happy
          to help.
        </p>
      </div>
      <NuxtLink to="/contact">
        <Button text="contact us" />
      </NuxtLink>
    </section>
  </div>
</template>

<style scoped>
li {
  margin-bottom: 1em;
}
/* 🐞 codyhouse.co */
.text-divider {
  --text-divider-gap: 1rem;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.text-divider::before,
.text-divider::after {
  content: "";
  height: 1px;
  background-color: silver;
  flex-grow: 1;
}

.text-divider::before {
  margin-right: var(--text-divider-gap);
}

.text-divider::after {
  margin-left: var(--text-divider-gap);
}
</style>
