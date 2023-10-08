<script setup>
defineProps({
  dogName: {
    type: String,
    default: "Frenchie",
  },
  gender: {
    type: String,
    default: "Male",
  },
  image: {
    type: String,
    default: "/dog1.jpeg",
  },
});
</script>
<template>
  <div class="border-1 border black">
    <div>
      <img :src="image" alt="" />
    </div>
    <div class="px-4 py-2">
      <div class="flex gap-2 items-center">
        <p class="bold text-lg">{{ dogName }},</p>
        <p class="bold text-lg">{{ gender }}</p>
      </div>
      <div class="my-6">
        <p>
          Blue Sable French Bulldog: A stunning blend of blue and fawn hues, a
          rare and captivating choice
        </p>
      </div>
      <div class="h-full">
        <div class="pb-6">
          <NuxtLink
            class="bg-[#303036] text-white px-6 py-3 rounded-md"
            :to="`/dogs/${dogName}`"
          >
            View Profile</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.button_round {
  appearance: none;
  background-color: #303036;
  border: 2px solid #1a1a1a;
  border-radius: 10px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 60px;
  min-width: 0;
  outline: none;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: transform;
}

.button_round:disabled {
  pointer-events: none;
}

.button_round:hover {
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

.button_round:active {
  box-shadow: none;
  transform: translateY(0);
}
</style>
