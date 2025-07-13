<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'

const projects = ref([])

onMounted(async () => {
  try {
    const response = await axios.get('https://your-backend.up.railway.app/api/projects')
    // mapping data agar cocok dengan frontend
    projects.value = response.data.map(item => ({
      id: item.id,
      title: item.title || item.name, // fallback jika ada
      description: item.description,
      year: item.year,
      image: item.image || '', // kosongkan jika tidak ada field
      tech: item.technologies || [], // di backend: technologies
      link: item.link || '#', // kosongkan jika tidak ada
    }))
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <section id="proyek" class="py-20 bg-white min-h-screen flex items-center justify-center">
    <div class="container mx-auto px-6">
      <SectionTitle title="Proyek Unggulan" />
      <div class="grid md:grid-cols-2 gap-12">
        <div
          v-for="project in projects"
          :key="project.id"
          class="bg-gray-50 rounded-lg shadow-lg overflow-hidden"
        >
          <!-- Gambar project, fallback gambar default jika kosong -->
          <img
            :src="project.image || 'https://via.placeholder.com/600x200?text=No+Image'"
            alt="Project Image"
            class="w-full h-56 object-cover"
          />

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
              class="text-blue-600 font-semibold hover:underline"
              >Lihat Detail &rarr;</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#proyek {
  background-image: url('../assets/background/bg5.png');
  background-size: cover;
}

.container {
  max-width: 1300px;
  margin: 0 auto;
}
</style>
