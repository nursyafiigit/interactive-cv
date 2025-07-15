<script setup>
import { ref, onMounted } from 'vue'

import 'aos/dist/aos.css' // Mengimpor CSS AOS

const displayText = ref('')
const phrase = 'Welcome' // Kata yang akan diketik
const typingSpeed = 100 // Kecepatan mengetik
const pauseDelay = 5000 // Waktu jeda setelah mengetik selesai
const currentIndex = ref(0) // Indeks karakter yang sedang diketik

let typeTimeout

const typeEffect = () => {
  const currentLength = displayText.value.length

  if (currentLength < phrase.length) {
    displayText.value = phrase.substring(0, currentLength + 1)
    typeTimeout = setTimeout(typeEffect, typingSpeed) // Lanjutkan mengetik
  } else {
    // Setelah selesai mengetik, tunggu beberapa detik sebelum menghapus dan mengulang
    setTimeout(() => {
      displayText.value = '' // Hapus teks
      typeEffect() // Mulai mengetik lagi
    }, pauseDelay)
  }
}

onMounted(() => {
  typeEffect() // Mulai animasi typing saat komponen dimuat
})
</script>

<template>
  <section class="landing min-h-screen min-w-full">
    <div class="container flex flex-col justify-center items-center min-h-screen">
      <div class="max-w-7xl">
        <h1
          class="ha1 text-white typing"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          {{ displayText }}
        </h1>
      </div>
      <div
        class="max-w-3xl mt-8"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        <p class="desc text-white text-center">
          Terima kasih telah mengunjungi website portofolio saya. Jika Anda ingin tahu lebih banyak
          atau berkonsultasi lebih lanjut, silakan hubungi saya.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.landing {
  background-image: url('../assets/background/wl2.jpg');
  background-size: cover;
  background-position: center;
  overflow-x: hidden !important;
  overflow-y: hidden !important;
  min-width: 100% !important;
}

.ha1 {
  font-size: 100px;
  font-family: 'Poppins';
  font-weight: 600;
  color: #e9c200;
  white-space: nowrap; /* Menghindari pemenggalan kata */
  overflow: hidden; /* Menyembunyikan teks yang belum muncul */
}

/* Animasi kedipan kursor setelah mengetik */
@keyframes blink {
  0%,
  100% {
    border-color: transparent;
  }
  50% {
    border-color: #ffffff; /* Kursor akan berkedip */
  }
}

/* Efek mengetik dengan kursor berkedip setelah mengetik */
.typing {
  display: inline-block;
  border-right: 3px solid #ffffff;
  height: 1.2em; /* Menyesuaikan tinggi kursor dengan teks */
  animation: blink 0.6s step-end infinite; /* Kecepatan kedipan lebih cepat */
  vertical-align: bottom; /* Menjaga kursor sejajar dengan bagian bawah teks */
}

.desc {
  font-size: 1.25rem; /* Ukuran font untuk deskripsi */
}

.container {
  padding-bottom: 3rem; /* Menambahkan padding bawah agar elemen tidak terlalu rapat ke bagian bawah */
}

/* Media Queries untuk Responsivitas */
@media (max-width: 768px) {
  .ha1 {
    font-size: 60px; /* Ukuran font lebih kecil pada perangkat mobile */
  }
  .desc {
    font-size: 1rem; /* Ukuran font deskripsi lebih kecil pada perangkat mobile */
  }
}

@media (max-width: 480px) {
  .ha1 {
    font-size: 40px; /* Ukuran font lebih kecil pada perangkat mobile kecil */
  }
  .desc {
    font-size: 0.875rem; /* Ukuran font deskripsi lebih kecil pada perangkat mobile kecil */
  }
}
</style>
