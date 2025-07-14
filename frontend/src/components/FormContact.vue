<template>
  <section id="contact" class="h-screen flex items-center justify-center bg-gray-900 py-20 overflow-hidden">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <!-- Judul (Section Title) -->
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" class="mb-6">
        <SectionTitle title="Contact Me" class="text-white text-xl sm:text-2xl md:text-4xl" />
      </div>

      <div class="flex flex-col lg:flex-row w-full max-w-7xl justify-center items-center">
        <!-- Form Kontak (Kiri) -->
        <div class="w-full lg:w-1/2 bg-black-30 bg-opacity-30 backdrop-blur-md p-8 rounded-lg shadow-lg mb-8 lg:mb-0" data-aos="fade-up" data-aos-duration="1000">
          <form @submit.prevent="submitForm">
            <!-- Name -->
            <div class="mb-4" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
              <label for="name" class="block text-sm font-medium text-white">Nama</label>
              <input
                v-model="form.name"
                type="text"
                id="name"
                placeholder="Masukkan nama anda"
                class="w-full mt-1 p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <!-- Email -->
            <div class="mb-4" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
              <label for="email" class="block text-sm font-medium text-white">Email</label>
              <input
                v-model="form.email"
                type="email"
                id="email"
                placeholder="Masukkan email anda"
                class="w-full mt-1 p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <!-- Message -->
            <div class="mb-6" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
              <label for="message" class="block text-sm font-medium text-white">Pesan</label>
              <textarea
                v-model="form.message"
                id="message"
                placeholder="Tulisakan pesan disini"
                rows="4"
                class="w-full mt-1 p-2 border border-gray-300 rounded-md"
                required
              ></textarea>
            </div>

            <!-- Submit Button -->
            <div data-aos="zoom-in-up" data-aos-delay="700" data-aos-duration="800">
              <button
                type="submit"
                class="contact-button w-full"
              >
                Kirim
              </button>
            </div>
          </form>
        </div>

        <!-- Lottie Animation (Kanan) -->
        <div class="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center items-center" data-aos="zoom-in" data-aos-duration="1000">
          <div id="lottie" style="max-width: 450px; margin: auto; padding-top: 10px;"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'

import SectionTitle from './SectionTitle.vue'
import lottie from 'lottie-web'
import animationData from '../assets/lottie/orang.json'

onMounted(() => {
  lottie.loadAnimation({
    container: document.getElementById('lottie'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: animationData,
  })
})

// Form state
const form = ref({
  name: '',
  email: '',
  message: '',
})

// Submit form handler
const submitForm = () => {
  // Handle form submission logic
  alert(
    `Form Submitted!\nName: ${form.value.name}\nEmail: ${form.value.email}\nMessage: ${form.value.message}`,
  )
  // Optionally clear form after submission
  form.value.name = ''
  form.value.email = ''
  form.value.message = ''
}
</script>

<style scoped>
#contact {
  background-image: url('../assets/background/wl14.jpg'); /* Ganti dengan gambar yang sesuai */
  background-size: cover;
  background-position: center;
}

.contact-button {
  background-color: #e9c200;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  color: #000000;
  transition: all 0.4s ease !important;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.contact-button:hover {
  background-color: #000000;
  color: #e9c200;
  transform: translateY(-5px) !important;
  box-shadow: 0px 6px 16px rgba(249, 186, 14, 0.374);
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style>
