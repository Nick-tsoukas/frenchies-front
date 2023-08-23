<script setup lang="ts">
useHead({
  script: ["https://identity.netlify.com/v1/netlify-identity-widget.js"],
});
const contentQuery = queryContent();
console.log(contentQuery);
</script>
<template>
  <div>
    home test h1
    <ContentDoc />
  </div>
</template>
