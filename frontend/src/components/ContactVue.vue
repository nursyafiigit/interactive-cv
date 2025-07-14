<script setup>
import SectionTitle from './SectionTitle.vue'
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer id="kontak" class=" text-white">
    <div class="container mx-auto px-6 text-center">
      <!-- Section title -->
      <div data-aos="fade-up" data-aos-duration="800">
        <SectionTitle title="Hubungi Saya" />
      </div>

      <!-- Deskripsi -->
      <p
        class="text-xl text-white mb-8"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="800"
      >
        Jangan ragu untuk terhubung atau bertanya.
      </p>

      <!-- Tombol Email -->
      <a
        href="mailto:nursyafii@gmail.com"
        class="email-button"
        data-aos="zoom-in"
        data-aos-delay="400"
        data-aos-duration="700"
      >
        Kirim Email
      </a>

      <!-- Link Sosial dengan Logo -->
      <div
        class="flex justify-center space-x-6 mb-8"
        data-aos="fade-up"
        data-aos-delay="600"
        data-aos-duration="800"
      >
        <a
          href="https://github.com/nursyafiigit"
          target="_blank"
          rel="noopener noreferrer"
          class="icon-link"
        >
          <img src="/icons/git.png" alt="GitHub" class="icon" />
        </a>
        <a
          href="https://id.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="icon-link"
        >
          <img src="/icons/linkedin.png" alt="LinkedIn" class="icon" />
        </a>
        <a
          href="https://www.instagram.com/mhmmdn_s/"
          target="_blank"
          rel="noopener noreferrer"
          class="icon-link"
        >
          <img src="/icons/social.png" alt="LinkedIn" class="icon" />
        </a>
      </div>
      <!-- Rectangle blur transparan -->
    </div>
    <!-- Footer Bar Full Width -->
    <div
      class="w-full bg-white/10 backdrop-blur-md border-white/20 text-white text-center py-5 text-sm mt-16"
    >
      &copy; {{ currentYear }} Muhammad Nur Syafii. Universitas Amikom Yogyakarta.
    </div>
  </footer>
</template>

<style scoped>
#kontak {
  background-image: url('../assets/background/wl14.jpg');
  background-size: cover;
  padding-top: 60px;
}
.email-button {
  background-color: #e9c200;
  display: inline-block;
  margin-bottom: 3rem;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  color: #000000;
  transition: all 0.4s ease !important;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.email-button:hover {
  background-color: #000000; /* biru gelap */
  color: #e9c200;
  transform: translateY(-5px) !important;
  box-shadow: 0px 6px 16px rgba(249, 186, 14, 0.374);
}

.icon-link {
  display: inline-block;
  transition: transform 0.3s ease;
}
.icon-link:hover {
  transform: translateY(-5px);
}
.icon {
  width: 40px;
  height: 40px;
  object-fit: contain;
  aspect-ratio: 1/1;
  border-radius: 50%;
  padding: 4px;
  background-color: rgb(0, 0, 0);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.icon-link:hover .icon {
  filter: brightness(1.2);
  transform: scale(1.1);
}
</style>
