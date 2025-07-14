<template>
  <section
    id="proyek"
    class="pro py-20 min-h-screen font-sans"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Judul -->
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="100"
        class="text-white text-center"
      >
        <SectionTitle title="MyProjects" />
      </div>

      <!-- Grid proyek -->
      <div class="grid md:grid-cols-2 gap-8 mt-12 max-w-7xl mx-auto">
        <div
          v-for="(project, index) in projects"
          :key="project.title"
          class="project-card"
          :data-aos="index % 2 === 0 ? 'fade-up-right' : 'fade-up-left'"
          data-aos-duration="800"
          :data-aos-delay="index * 200"
        >
          <img
            :src="project.image"
            alt="Gambar Proyek"
            class="w-full h-56 object-cover rounded-t-lg"
          />

          <div class="p-6">
            <h3
              class="text-2xl font-bold text-white mb-2"
              data-aos="zoom-in"
              :data-aos-delay="index * 250"
              data-aos-duration="700"
            >
              {{ project.title }}
            </h3>
            <p
              class="text-white/80 mb-4"
              data-aos="fade"
              :data-aos-delay="index * 250"
            >
              {{ project.description }}
            </p>

            <!-- Teknologi -->
            <div class="mb-4">
              <span
                v-for="t in project.tech"
                :key="t"
                class="inline-block bg-white/20 text-white text-sm font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full"
                data-aos="zoom-in"
                :data-aos-delay="index * 250"
              >
                {{ t }}
              </span>
            </div>

            <!-- Link -->
            <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="text-yellow-300 font-semibold hover:underline"
              data-aos="fade-up"
              :data-aos-delay="index * 300"
            >
              Lihat Detail &rarr;
            </a>
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
    const response = await axios.get('/api/projects')
    projects.value = response.data
  } catch (error) {
    console.error(error)
  }
})
</script>

<style scoped>
.pro {
  background-image: url('../assets/background/wl6.jpg');
  background-size: cover;
  background-position: center;
}

.project-card {
  background-color: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease !important;
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
}
</style>

