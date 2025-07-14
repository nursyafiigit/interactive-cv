<script setup>
import SectionTitle from './SectionTitle.vue'
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer id="kontak" class="text-white pt-16">
    <div class="container mx-auto px-4 sm:px-6 text-center">
      <!-- Section title -->
      <div data-aos="fade-up" data-aos-duration="800">
        <SectionTitle title="Hubungi Saya" />
      </div>

      <!-- Deskripsi -->
      <p
        class="text-base sm:text-xl text-white mb-8 leading-relaxed"
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

      <!-- Link Sosial -->
      <div
        class="flex justify-center flex-wrap gap-6 mb-8 mt-6"
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
          <img src="/icons/social.png" alt="Instagram" class="icon" />
        </a>
      </div>
    </div>

    <!-- Footer Bar -->
    <div class="w-full bg-white/10 backdrop-blur-md border-t border-white/20 mt-16">
      <div class="container mx-auto px-4 sm:px-6 text-white text-center py-5 text-sm sm:text-base" >
        &copy; {{ currentYear }} Muhammad Nur Syafii. Universitas Amikom Yogyakarta.
      </div>
    </div>
  </footer>
</template>

<style scoped>
#kontak {
  background-image: url('../assets/background/wl14.jpg');
  background-size: cover;
  background-position: center;
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
  background-color: #000000;
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
