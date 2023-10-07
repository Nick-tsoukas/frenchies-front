<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <div class="container mx-auto">
    <div class="px-12 mt-12">
      <h2 class="mb-6 text-4xl bold">Get in touch</h2>
      <p>
        If you're interested in welcoming a rare French Bulldog puppy into your
        home, we're here to help! Please reach out via email on phone call for
        any questions
      </p>
      <div class="my-8 flex flex-col gap-8">
        <div class="flex items-center gap-4">
          <NuxtImg height="20" width="20" src="/phone.png" alt="" />
          <p>622-222-2222</p>
        </div>
        <div class="flex items-center gap-4">
          <NuxtImg height="20" width="20" src="/map.png" alt="" />
          <p>Aurora, IL</p>
        </div>
        <div class="flex items-center gap-4">
          <NuxtImg height="20" width="20" src="/email.png" alt="" />
          <p>puppies@houseoffrenchies.com</p>
        </div>
      </div>
    </div>
  </div>
</template>
