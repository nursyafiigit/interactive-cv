<script setup>
defineProps({ title: String });
</script>
<template>
<div class="mb-12 text-center">
<h2 class="text-4xl font-bold text-white-800">{{ title }}</h2>

<div class="garis w-24 h-1 mx-auto mt-4 rounded"></div>
</div>
</template>
<style scoped>
.garis {
    background-color: #e9c200;
}
</style>