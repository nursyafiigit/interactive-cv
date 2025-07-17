<template>
  <section id="proyek" class="pro py-20 min-h-screen font-sans overflow-hidden">
    <div class="container flex flex-col justify-center items-center mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Judul -->
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="100"
        class="text-white text-center"
      >
        <SectionTitle title="MyProjects" class="font-poppins" />
      </div>
      <div
        class="condes max-w-screen flex justify-center items-center"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="300"
      >
        <p class="desc text-white text-center max-w-3xl">
          Lihat berbagai proyek yang telah saya kerjakan, masing-masing mencerminkan dedikasi saya
          terhadap kualitas, inovasi, dan penyelesaian masalah yang efektif dalam berbagai industri.
        </p>
      </div>

      <!-- Grid proyek -->
      <div
        class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8 mt-12 max-w-[1220px] mx-auto"
      >
        <div
          v-for="(project, index) in projects"
          :key="project.title"
          :data-aos="getAOS(index)"
          :data-aos-delay="getDelay(index)"
          data-aos-duration="800"
          class="project-card"
        >
          <img
            :src="project.image"
            alt="Gambar Proyek"
            class="gambar w-full h-48 object-cover rounded-t-lg"
          />

          <div class="p-4 sm:p-6 flex flex-col justify-between">
            <h3
              class="ha3 text-xl font-poppins font-bold text-white mb-2"
              data-aos="zoom-in"
              :data-aos-delay="index * 250"
              data-aos-duration="700"
            >
              {{ project.title }}
            </h3>

            <p
              class="desc text-sm font-poppins sm:text-base text-white/80 mb-4 leading-relaxed"
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
                  class="tech inline-block bg-white/20 font-poppins text-white text-xs sm:text-sm font-semibold px-2.5 py-0.5 rounded-full"
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
                class="text-yellow-300 font-poppins font-semibold hover:underline text-sm sm:text-base"
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
import { ref, onMounted, nextTick } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const projects = ref([])

onMounted(async () => {
  try {
    const response = await axios.get('/api/projects')
    projects.value = response.data

    // Tunggu render selesai
    await nextTick()

    // Barulah AOS diinit / refresh setelah semua elemen muncul
    AOS.init({
      duration: 800,
    })
    AOS.refresh() // Pastikan AOS mendeteksi semua elemen v-for
  } catch (error) {
    console.error(error)
  }
})

// Function to determine AOS effect based on column position in the grid
const getAOS = (index) => {
  if (index % 3 === 0) {
    return 'fade-left'
  } else if (index % 3 === 1) {
    return 'fade-up'
  } else {
    return 'fade-right'
  }
}

const getDelay = (index) => {
  if (index % 3 === 0) {
    return 600
  } else if (index % 3 === 1) {
    return 100
  } else {
    return 600
  }
}
</script>

<style scoped>
.pro {
  background-image: url('../assets/background/wl14.jpg');
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
  transition: transform 0.3s ease;

  display: flex;
  flex-direction: column;
  height: 100%; /* Set height to 100% for consistent card height */
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
}

.project-card .p-4 {
  flex-grow: 1;
}

.project-card .mt-auto {
  margin-top: auto;
}

/* Optional: Set a minimum height for consistent card height */
.project-card {
  min-height: 300px; /* You can adjust this to whatever height you want */
}

@media (max-width: 1024px) and (min-width: 768px) {
  .desc {
    font-size: 16px !important; /* Ukuran font deskripsi lebih kecil pada perangkat mobile */
    line-height: 22px;
  }
  .condes {
    max-width: 650px;
  }
}

@media (max-width: 767px) {
  .desc {
    font-size: 13px !important; /* Ukuran font deskripsi lebih kecil pada perangkat mobile kecil */
    line-height: 20px;
  }
  .condes {
    max-width: 360px;
    margin-top: -15px;
  }
  .gambar {
    height: 200px;
  }
}
</style>
