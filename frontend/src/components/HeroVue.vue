<template>
  <section class="herow min-h-screen flex items-center justify-center ">
    <div id="profil" class="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
      <div class="md:w-1/2 mb-10 md:mb-0">
        <h1
          class="text-5xl font-bold text-white mb-4 animate-slide-in-left"
          style="animation-delay: 200ms"
        >
          Halo, Saya <span class="nama">Muhammad Nur Syafii</span>
        </h1>
        <p class="text-xl text-white mb-8 animate-slide-in-left" style="animation-delay: 400ms">
          Mahasiswa Teknik Informatika yang bersemangat dalam pengembangan web dan desain antarmuka.
        </p>

        <a
  href="#kontak"
  class="contact-button animate-slide-in-left"
  style="animation-delay: 600ms"
>
  Hubungi Saya
</a>

      </div>
      <div class="md:w-1/2 flex justify-center animate-slide-in-right">
        <img src='/image/aku.jpg' alt="" style="width: 400px" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.herow {
  background-image: url('../assets/background/wl5.jpg');
  background-size: cover;
  padding: 100px;

}
img {
  border-radius: 50%;
}
.contact-button {
  background-color: #e9c200;
  display: inline-block;
  margin-bottom: 3rem;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  color: #000000;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.contact-button:hover {
  background-color: #1e3a8a; /* biru gelap */
  color: #ffffff;
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

/* Animasi slide dari kiri */
@keyframes slide-in-left {
  0% {
    transform: translateX(-50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.animate-slide-in-left {
  animation: slide-in-left 0.7s ease forwards;
}

.nama {
  color: #e9c200; /* Warna biru */
  font-weight: bold;
}
</style>
