<template>
  <section class="skills-section py-20 font-sans min-h-screen overflow-x-hidden" id="skill">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Judul -->
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
        <SectionTitle title="MySkills" class="text-white font-poppins" />
      </div>

      <!-- Animasi utama -->
      <div
        class="animutama mx-auto mb-10 w-full max-w-[500px]"
        data-aos="zoom-in"
        data-aos-delay="200"
        data-aos-duration="800"
      >
        <div id="main-lottie" class="h-[300px] w-full"></div>
      </div>

      <!-- Penjelasan -->
      <div
        class="text-center mb-10 px-4"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="800"
      >
        <h4 class="apayang text-white font-poppins text-3xl sm:text-xl font-semibold mb-2">
          Apa yang Saya Bisa?
        </h4>
        <p class="desc text-white/80 max-w-3xl mx-auto text-base sm:text-lg">
          Dunia teknologi selalu berkembang, dan saya senang menjadi bagian dari perjalanan itu.
          Berikut beberapa skill yang saya kuasai:
        </p>
      </div>

      <!-- Grid Skill -->
      <div class="mx-auto max-w-[1220px] px-4">
        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          <div v-for="skill in skills" :key="skill.name " data-aos="zoom-in-up"
              data-aos-delay="400"
               data-aos-duration="800">
            <div
            class="card bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg"
              
            >
              <div :id="skill.animId" class="lottie-box mb-4 mx-auto w-full"></div>
              <h5 class="text-white font-poppins text-xl sm:text-2xl font-bold text-center">
                {{ skill.name }}
              </h5>
              <p class="text-white/60 text-center font-poppins text-sm sm:text-base">
                {{ skill.level }}
              </p>
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
import lottie from 'lottie-web'
import SectionTitle from './SectionTitle.vue'
import animationData from '../assets/lottie/front.json'
const skills = ref([])

onMounted(async () => {
  lottie.loadAnimation({
    container: document.getElementById('main-lottie'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: animationData,
  })
  try {
    const response = await axios.get('/api/skills')
    skills.value = response.data

    await nextTick()

    skills.value.forEach((skill) => {
      lottie.loadAnimation({
        container: document.getElementById(skill.animId),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: `/lottie/${skill.animFile}`,
      })
    })
  } catch (error) {
    console.error('Gagal memuat data skill:', error)
  }
})
</script>

<style scoped>
.skills-section {
  background-image: url('../assets/background/wl11.jpg');
  background-size: cover;
  background-position: center;
}
.lottie-box {
  height: 200px;
  max-width: 100%;
}
.card {
  transition: all 0.3s ease !important;
}
.card:hover {
  transform: translateY(-6px) !important;
}

@media (max-width: 768px) {
  .desc {
    font-size: 20px !important; /* Ukuran font deskripsi lebih kecil pada perangkat mobile */
    line-height: 29px;
  }
  .condes {
    max-width: 650px;
  }
  .apayang {
    font-size: 27px;
    margin-bottom: 22px;
  }
}

@media (max-width: 480px) {
  .desc {
    font-size: 13px !important; /* Ukuran font deskripsi lebih kecil pada perangkat mobile kecil */
    line-height: 19px;
  }
  .condes {
    max-width: 350px;
    margin-top: -15px;
  }
  .apayang {
    font-size: 18px;
    margin-bottom: 6px;
  }
  .animutama {
    max-width: 300px;
  }

  .card {
    transition: all 0.3s ease !important;
  }
  .card:hover {
    transform: translateY(-6px) !important;
  }
}
</style>
