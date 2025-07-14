<template>
  <section
    id="pendidikan"
    class="edu py-20 bg-gradient-to-r from-blue-100 via-blue-50 to-green-100 min-h-screen font-sans"
  >
    <div class="container mx-auto px-6">
      <!-- Section Title -->
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
        <SectionTitle title="Education History" class="text-white" />
      </div>

      <!-- Paragraf deskripsi -->
      <div
        class="max-w-3xl mx-auto text-white text-center mt-6 mb-12"
        data-aos="fade-up"
        data-aos-delay="600"
        data-aos-duration="800"
      >
        <p class="text-white/90 leading-relaxed">
          Sebagai seorang IT Developer, perjalanan pendidikan saya telah memberikan dasar yang kuat
          untuk memahami dan menguasai teknologi informasi serta pengembangan perangkat lunak. Berikut
          adalah beberapa pencapaian pendidikan yang telah membentuk keahlian saya di bidang ini:
        </p>
      </div>

      <!-- Timeline pendidikan -->
      <div class="relative">
        <div
          data-aos="fade-in"
          data-aos-duration="800"
          data-aos-delay="600"
          class="absolute h-full border-r-2 border-gray-300"
          style="left: 50%"
        ></div>

        <div
          v-for="(edu, index) in educationHistory"
          :key="edu.id"
          class="mb-8 flex justify-between items-center w-full"
        >
          <!-- GENAP -->
          <div v-if="index % 2 === 0" class="w-full flex">
            <div class="w-1/2 pr-8 flex justify-end">
              <a
                :href="edu.link"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="200"
                class="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300 flex items-center gap-4 max-w-md hover:scale-105"
              >
                <img :src="edu.logo" class="w-16 h-16 object-contain" />
                <div class="text-right">
                  <p class="text-sm font-semibold text-yellow-500 mb-1">
                    {{ edu.period }}
                  </p>
                  <h3 class="text-2xl font-bold text-white mb-1">
                    {{ edu.institution }}
                  </h3>
                  <p class="text-white/80">{{ edu.major }}</p>
                </div>
              </a>
            </div>
            <div class="w-1/2 flex justify-start">
              <div
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="400"
                class="w-4 h-4 bulet rounded-full z-10"
              ></div>
            </div>
          </div>

          <!-- GANJIL -->
          <div v-else class="w-full flex">
            <div class="w-1/2 flex justify-end">
              <div
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="400"
                class="w-4 h-4 bulet rounded-full z-10"
              ></div>
            </div>
            <div class="w-1/2 pl-8 flex justify-start">
              <a
                :href="edu.link"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="200"
                class="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300 flex items-center gap-4 max-w-md hover:scale-105"
              >
                <img :src="edu.logo" class="w-16 h-16 object-contain" />
                <div class="text-right">
                  <p class="text-sm font-semibold text-yellow-500 mb-1">
                    {{ edu.period }}
                  </p>
                  <h3 class="text-2xl font-bold text-white mb-1">
                    {{ edu.institution }}
                  </h3>
                  <p class="text-white/80">{{ edu.major }}</p>
                </div>
              </a>
            </div>
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
    //const response = await axios.get('/api/education')
    educationHistory.value = response.data
  } catch (error) {
    console.error(error)
  }
})
</script>

<style scoped>
.edu {
  background-image: url('../assets/background/wl7.jpg');
  background-size:cover;
  background-position: center;
}
.bulet {
  background-color: #e9c200;
}
</style>
