<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import SectionTitle from './SectionTitle.vue'

const currentYear = new Date().getFullYear()
const showFooterBar = ref(false)

const handleScroll = () => {
  const scrollTop = window.scrollY
  const windowHeight = window.innerHeight
  const fullHeight = document.documentElement.scrollHeight

  if (scrollTop + windowHeight >= fullHeight - 10) {
    showFooterBar.value = true
  } else {
    showFooterBar.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <footer id="kontak" class="text-white pt-16">
    <div class="container mx-auto px-4 sm:px-6 text-center">
      <!-- Section title -->
      <div data-aos="fade-up" data-aos-duration="800">
        <SectionTitle title="Hubungi Saya" class="font-poppins"/>
      </div>

      <!-- Deskripsi -->
      <p
        class="desc text-base sm:text-xl text-white mb-8 leading-relaxed"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        Jangan ragu untuk terhubung atau bertanya.
      </p>

      <!-- Tombol Email -->

      <div data-aos="zoom-in" data-aos-delay="100" data-aos-duration="800">
        <router-link to="/formcontact">
          <a class="email-button font-poppins text-base"> Kirim Email </a>
        </router-link>
      </div>

      <!-- Link Sosial -->
      <div
        class="conlog flex justify-center flex-wrap gap-6 mt-6"
        data-aos="fade-up"
        data-aos-delay="50"
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

    <!-- Footer Bar: ini harus tetap di dalam elemen footer -->
    <!-- Spacer agar halaman bisa di-scroll -->
    <div class="space"></div>

    <!-- Footer Bar Pop-up -->
    <transition name="fade-up">
      <div
        v-show="showFooterBar"
        class="w-full fixed bottom-0 left-0 bg-black/10 backdrop-blur-md z-50"
      >
        <div
          class="container mx-auto px-4 sm:px-6 text-white text-center py-5 text-xxs sm:text-base font-poppins"
        >
          &copy; {{ currentYear }} Muhammad Nur Syafii. Universitas Amikom Yogyakarta.
        </div>
      </div>
    </transition>
  </footer>
</template>

<style scoped>
#kontak {
  background-image: url('../assets/background/wl6.jpg');
  background-size: cover;
  background-position: right;
}

.space {
  height: 120px;
}
/* Fade-up animation */
.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.6s ease;
}
.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(100%);
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

@media (max-width: 1024px) and (min-width: 768px) {
  
  .desc {
    font-size: 20px !important; /* Ukuran font deskripsi lebih kecil pada perangkat mobile */
    line-height: 29px;
    margin-top: -20px;
  }
  .email-button {
    margin-bottom:10px ;
  }

  .conlog {
    margin-bottom:-33px ;
  }
 
}

@media (max-width: 767px) {
  
  .desc {
    font-size: 14px !important; /* Ukuran font deskripsi lebih kecil pada perangkat mobile kecil */
    line-height: 19px;
    margin-top: -22px;
  }

   .email-button {
    margin-bottom:10px ;
  }

  .conlog {
    margin-bottom:-33px ;
  }
}
</style>
