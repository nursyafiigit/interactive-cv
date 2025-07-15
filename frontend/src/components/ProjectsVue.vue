<template>
  <section id="proyek" class="pro py-20 min-h-screen font-sans overflow-x-hidden overflow-y-auto">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Judul -->
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
        class="text-white text-center"
      >
        <SectionTitle title="MyProjects" />
      </div>
      <div class="max-w-screen flex justify-center items-center">
        <p class="desc text-white text-center max-w-3xl">
          Lihat berbagai proyek yang telah saya kerjakan, masing-masing mencerminkan dedikasi saya
          terhadap kualitas, inovasi, dan penyelesaian masalah yang efektif dalam berbagai industri.
        </p>
      </div>

      <!-- Grid proyek -->
      <div v-for="(project, index) in projects" :key="project.title" class="project-card">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-[1220px] mx-auto"
          :data-aos="getAOS(index)"
          :data-aos-delay="index * 200"
          data-aos-duration="800"
        >
          <img
            :src="project.image"
            alt="Gambar Proyek"
            class="w-full h-48 sm:h-56 md:h-60 object-cover rounded-t-lg"
          />

          <div class="p-4 sm:p-6 flex flex-col justify-between">
            <h3
              class="text-xl sm:text-2xl font-bold text-white mb-2"
              data-aos="zoom-in"
              :data-aos-delay="index * 250"
              data-aos-duration="700"
            >
              {{ project.title }}
            </h3>

            <p
              class="text-sm sm:text-base text-white/80 mb-4 leading-relaxed"
              data-aos="fade"
              :data-aos-delay="index * 250"
            >
              {{ project.description }}
            </p>
            <!-- Teknologi dan Link berada di bagian bawah -->
            <div class="mt-auto">
              <!-- Teknologi -->
              <div class="mb-4 flex flex-wrap gap-2">
                <span
                  v-for="t in project.tech"
                  :key="t"
                  class="inline-block bg-white/20 text-white text-xs sm:text-sm font-semibold px-2.5 py-0.5 rounded-full"
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
                class="text-yellow-300 font-semibold hover:underline text-sm sm:text-base"
                data-aos="fade-up"
                :data-aos-delay="index * 300"
              >
                Lihat Detail &rarr;
              </a>
            </div>
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
import AOS from 'aos'
import 'aos/dist/aos.css'

const projects = ref([])

onMounted(async () => {
  AOS.init({
    duration: 1000, // Set the global duration for AOS animations
    delay: 100, // Optional: set a global delay for all AOS animations
  })
  try {
    const response = await axios.get('/api/projects')
    projects.value = response.data
  } catch (error) {
    console.error(error)
  }
})

// Function to determine AOS effect based on column position in the grid
const getAOS = (index) => {
  // Modifikasi AOS berdasarkan posisi dalam grid
  if (index % 3 === 0) {
    return 'fade-left' // Card tengah
  } else if (index % 3 === 1) {
    return 'fade-up' // Card kiri
  } else {
    return 'fade-right' // Card kanan
  }
}
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
  border-radius: 18px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease !important;
  display: flex;
  flex-direction: column;
  height: auto; /* Remove height: 100% */
}

.project-card:hover {
  transform: translateY(-6px) !important;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
}

.project-card .p-4 {
  flex-grow: 1;
}

.project-card .mt-auto {
  margin-top: auto;
}
</style>
