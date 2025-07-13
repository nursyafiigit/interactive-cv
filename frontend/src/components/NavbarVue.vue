<template>
  <header
    :class="[
      'nav shadow-md sticky top-0 z-50 transition-transform duration-300',
      isHidden ? '-translate-y-full' : 'translate-y-0'
    ]"
  >
    <nav class="container mx-auto px-9 py-4 flex justify-between items-center">
      <div class="tex text-2xl font-bold text-white">Muhammad Nur Syafii</div>
      <ul class="flex space-x-6">
        <li>
          <a href="#profil" class="text-white hover:text-blue-500 transform hover:-translate-y-0.5 transition-all duration-300">
            Profil
          </a>
        </li>
        <li>
          <a href="#pendidikan" class="text-white hover:text-blue-500 transform hover:-translate-y-0.5 transition-all duration-300">
            Pendidikan
          </a>
        </li>
        <li>
          <a href="#skill" class="text-white hover:text-blue-500 transform hover:-translate-y-0.5 transition-all duration-300">
            Skill
          </a>
        </li>
        <li>
          <a href="#proyek" class="text-white hover:text-blue-500 transform hover:-translate-y-0.5 transition-all duration-300">
            Proyek
          </a>
        </li>
        <li>
          <a href="#kontak" class="text-white hover:text-blue-500 transform hover:-translate-y-0.5 transition-all duration-300">
            Kontak
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
<style scoped>
.container {
  max-width: 1350px;
  margin: 0 auto;
}
.nav {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  background: rgba(0, 50, 0, 0); /* hijau gelap transparan */
  backdrop-filter: blur(10px);     /* efek blur */
  -webkit-backdrop-filter: blur(10px); /* dukungan untuk Safari */
  
}
</style>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isHidden = ref(false)
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
