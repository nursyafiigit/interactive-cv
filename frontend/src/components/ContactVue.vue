<script setup>
import SectionTitle from './SectionTitle.vue'
</script>

<template>
  <footer id="kontak" class="py-20 bg-gray-800 text-white">
    <div class="container mx-auto px-6 text-center">
      <!-- Section title dengan AOS -->
      <div data-aos="fade-up" data-aos-duration="800">
        <SectionTitle title="Hubungi Saya" />
      </div>

      <!-- Paragraf intro -->
      <p
        class="text-xl text-gray-300 mb-8"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="800"
      >
        Jangan ragu untuk terhubung atau bertanya.
      </p>

      <!-- Tombol email -->
      <a
  href="mailto:nursyafii@gmail.com"
  class="email-button"
  data-aos="zoom-in"
  data-aos-delay="400"
  data-aos-duration="700"
>
  Kirim Email
</a>



      <!-- Link sosial -->
      <div
        class="flex justify-center space-x-6 mb-8"
        data-aos="fade-up"
        data-aos-delay="600"
        data-aos-duration="800"
      >
        <a
          href="https://github.com/nursyafiigit"
          target="_blank"
          class="text-gray-400 hover:text-white transition-colors duration-300"
        >
          GitHub
        </a>
        <a
          href="https://id.linkedin.com/"
          target="_blank"
          class="text-gray-400 hover:text-white transition-colors duration-300"
        >
          LinkedIn
        </a>
      </div>

      <!-- Hak cipta -->
      <p
        class="text-gray-500"
        data-aos="fade-in"
        data-aos-delay="800"
        data-aos-duration="1000"
      >
        &copy; {{ new Date().getFullYear() }} Muhammad Nur Syafii. Universitas Amikom Yogyakarta.
      </p>
    </div>
  </footer>
</template>

<style scoped>
.email-button {
  display: inline-block;
  margin-bottom: 3rem;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  color: #000000;
  background-color: #e9c200;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.email-button:hover {
  background-color: #000000;
  color: #ffffff;
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}
</style>
