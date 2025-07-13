<template>
  <section id="proyek" class="pro py-20 bg-gradient-to-r from-blue-100 via-blue-50 to-green-100 min-h-screen font-sans">
    <div class="container mx-auto px-6">
      <SectionTitle title="PROYEK" />
      <div class="grid md:grid-cols-2 gap-12">
        <div
          v-for="project in projects"
          :key="project.title"
          class="bg-gray-50 rounded-lg shadow-lg overflow-hidden"
        >
          <img :src="project.image" alt="Gambar Proyek" class="w-full h-56 object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-bold text-gray-800 mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 mb-4">{{ project.description }}</p>
            <div class="mb-4">
              <span
                v-for="t in project.tech"
                :key="t"
                class="inline-block bg-blue-100 text-blue-800 text-sm font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full"
                >{{ t }}</span
              >
            </div>
            
            <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-600 font semibold hover:underline"
              >Lihat Detail &rarr;</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'
const projects = ref([])
onMounted(async () => {
  try {
    const response = await axios.get('/api/projects');
    projects.value = response.data;
  } catch (error) {
    console.error(error);
  }
});

</script>

<style scoped>
.pro {
  background-image: url('../assets/background/bg5.png');
  background-size: cover;
}
</style>
