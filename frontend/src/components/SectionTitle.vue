<script setup>
defineProps({ title: String });
</script>

<template>
  <div class="mb-12 text-center px-4">
    <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
      {{ title }}
    </h2>
    <div class="garis w-20 sm:w-24 h-1 mx-auto mt-4 rounded"></div>
  </div>
</template>

<style scoped>
.garis {
  background-color: #e9c200;
}
</style>
