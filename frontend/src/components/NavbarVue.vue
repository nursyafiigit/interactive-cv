<template>
  <header
    :class="[
      'nav shadow-md sticky top-0 z-50 transition-transform duration-300',
      isHidden ? '-translate-y-full' : 'translate-y-0'
    ]"
  >
    <nav
      class="container-nav px-6 md:px-9 py-4 flex justify-between items-center"
      data-aos="fade-down"
      data-aos-duration="800"
    >
      <!-- Brand -->
      <div class="tex text-xl md:text-2xl font-bold font-poppins text-white">
        Muhammad Nur Syafii
      </div>

      <!-- Hamburger Button -->
      <button @click="menuOpen = !menuOpen" class="text-white md:hidden focus:outline-none">
        <svg
          v-if="!menuOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Menu Desktop -->
      <ul class="nap hidden md:flex space-x-6">
        <li><router-link to="/#profil" class="nav-link">Profile</router-link></li>
        <li><router-link to="/#pendidikan" class="nav-link">Education</router-link></li>
        <li><router-link to="/#skill" class="nav-link">Skills</router-link></li>
        <li><router-link to="/#proyek" class="nav-link">Projects</router-link></li>
        <li><router-link to="/#kontak" class="nav-link">Contact</router-link></li>
      </ul>
    </nav>

    <!-- Menu Mobile -->
    <div v-show="menuOpen" class="nap md:hidden bg-black/60 backdrop-blur-md px-6 py-4">
      <ul class="flex flex-col space-y-4">
        <li><router-link @click="menuOpen = false" to="/#profil" class="nav-link">Profil</router-link></li>
        <li><router-link @click="menuOpen = false" to="/#pendidikan" class="nav-link">Pendidikan</router-link></li>
        <li><router-link @click="menuOpen = false" to="/#skill" class="nav-link">Skill</router-link></li>
        <li><router-link @click="menuOpen = false" to="/#proyek" class="nav-link">Proyek</router-link></li>
        <li><router-link @click="menuOpen = false" to="/#kontak" class="nav-link">Kontak</router-link></li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router' // untuk gunakan <router-link>

const isHidden = ref(false)
const menuOpen = ref(false)
let lastScroll = window.scrollY

const handleScroll = () => {
  const currentScroll = window.scrollY
  isHidden.value = currentScroll > lastScroll && currentScroll > 50
  lastScroll = currentScroll
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.container-nav {
  max-width: 1300px;
  margin: 0 auto;
}

.nav {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  background: rgba(0, 50, 0, 0); /* transparan */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.nav-link {
  @apply text-white hover:text-yellow-400 transform hover:-translate-y-0.5 transition-all duration-300;
}

.nap {
  font-family: 'Poppins';
}
</style>
