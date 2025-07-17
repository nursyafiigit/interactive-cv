<template>
  <section
    id="pendidikan"
    class="edu py-20 bg-gradient-to-r from-blue-100 via-blue-50 to-green-100 min-h-screen font-sans overflow-x-hidden"
  >
    <div class="container mx-auto px-4 sm:px-6">
      <!-- Section Title -->
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
        <SectionTitle title="Education History" class="text-white font-poppins" />
      </div>

      <!-- Deskripsi -->
      <div
        class="condes max-w-3xl mx-auto text-white text-center mt-6 mb-12"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="800"
      >
        <p class="desc text-white/90 leading-relaxed">
          Sebagai seorang IT Developer, perjalanan pendidikan saya telah memberikan dasar yang kuat
          untuk memahami dan menguasai teknologi informasi serta pengembangan perangkat lunak
        </p>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Garis tengah hanya muncul di desktop -->
        <div
          class="hidden md:block absolute h-full border-r-2 border-white left-1/2 transform -translate-x-1/2"
          data-aos="fade-in"
          data-aos-duration="800"
          data-aos-delay="400"
        ></div>

        <!-- Loop riwayat pendidikan -->
        <div v-for="(edu, index) in educationHistory" :key="edu.id" class="mb-10 w-full px-4">
          <!-- Desktop: layout kiri-kanan -->
          <div v-if="index % 2 === 0" class="hidden md:flex justify-between items-center">
            <div class="w-1/2 pr-8 flex justify-end" data-aos="fade-right"
                data-aos-duration="800">
              <a
                :href="edu.link"
                target="_blank"
                rel="noopener noreferrer"
                class="card max-w-md"
                
              >
                <img :src="edu.logo" class="w-16 h-16 object-contain" />
                <div class="text-right">
                  <p
                    class="text-sm sm:text-xs md:text-sm font-poppins font-semibold text-yellow-500 mb-1"
                  >
                    {{ edu.period }}
                  </p>
                  <h3
                    class="text-xl sm:text-base md:text-lg font-bold font-poppins text-white mb-1"
                  >
                    {{ edu.institution }}
                  </h3>
                  <p class="text-white/80 font-poppins text-sm sm:text-xs md:text-sm">
                    {{ edu.major }}
                  </p>
                </div>
              </a>
            </div>
            <div class="w-1/2 flex justify-start">
              <!-- Bulet hanya muncul di desktop -->
              <div
                class="w-4 h-4 bulet rounded-full z-10 hidden md:block"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="500"
              ></div>
            </div>
          </div>

          <div v-else class="hidden md:flex justify-between items-center">
            <div class="w-1/2 flex justify-end">
              <!-- Bulet hanya muncul di desktop -->
              <div
                class="w-4 h-4 bulet rounded-full z-10 hidden md:block"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="500"

              ></div>
            </div>
            <div class="w-1/2 pl-8 flex justify-start" data-aos="fade-left"
                data-aos-duration="800">
              <a
                :href="edu.link"
                target="_blank"
                rel="noopener noreferrer"
                class="card max-w-md"
                
              >
                <img :src="edu.logo" class="w-16 h-16 object-contain" />
                <div class="text-right">
                  <p class="text-sm sm:text-xs md:text-sm font-semibold text-yellow-500 mb-1">
                    {{ edu.period }}
                  </p>
                  <h3 class="text-xl sm:text-lg md:text-2xl font-bold text-white mb-1">
                    {{ edu.institution }}
                  </h3>
                  <p class="text-white/80 sm:text-xs font-poppins md:text-sm">{{ edu.major }}</p>
                </div>
              </a>
            </div>
          </div>

          <!-- Mobile: layout vertikal -->
          <div class="md:hidden flex flex-col items-center gap-4">
            <!-- Bulet tidak muncul di mobile -->
            <div class="w-4 h-4 bulet rounded-full z-10 hidden md:block"></div>
            <a
              :href="edu.link"
              target="_blank"
              rel="noopener noreferrer"
              class="card w-full max-w-sm text-left"
              data-aos="fade-up"
            >
              <img :src="edu.logo" class="w-16 h-16 object-contain" />
              <div>
                <p
                  class="text-sm sm:text-xs md:text-sm font-poppins font-semibold text-yellow-500 mb-1"
                >
                  {{ edu.period }}
                </p>
                <h3 class="text-xl sm:text-lg md:text-2xl font-bold font-poppins text-white mb-1">
                  {{ edu.institution }}
                </h3>
                <p class="text-white/80 sm:text-xs md:text-sm font-poppins">{{ edu.major }}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import SectionTitle from './SectionTitle.vue'

const educationHistory = ref([])

onMounted(async () => {
  try {
    const response = await axios.get('/api/education')
    educationHistory.value = response.data
  } catch (error) {
    console.error(error)
  }
})
</script>

<style scoped>
.edu {
  background-image: url('../assets/background/wl55.jpg');
  background-size: cover;
  background-position: center;
}
.bulet {
  background-color: #e9c200;
}
.card {
  background-color: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease !important;
}

.card:hover {
  transform: translateY(-6px) !important;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25) !important;
}

/* Media Queries untuk Responsivitas */
@media (max-width: 768px) {
  .desc {
    font-size: 19px !important; /* Ukuran font deskripsi lebih kecil pada perangkat mobile */
    line-height: 29px;
  }
  .condes {
    max-width: 650px;
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
  .card {
    background-color: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    padding: 1.3rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease !important;
  }
  .card:hover {
    transform: translateY(-6px) !important;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25) !important;
  }
}
</style>
