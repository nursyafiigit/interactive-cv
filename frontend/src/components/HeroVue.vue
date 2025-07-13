<template>
  <section class="herow min-h-screen flex items-center justify-center ">
    <div id="profil" class="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
      <div class="md:w-1/2 mb-10 md:mb-0">
        <h1
          class="text-5xl font-bold text-black mb-4 animate-slide-in-left"
          style="animation-delay: 200ms"
        >
          Halo, Saya <span class="nama">Muhammad Nur Syafii</span>
        </h1>
        <p class="text-xl text-black mb-8 animate-slide-in-left" style="animation-delay: 400ms">
          Mahasiswa Teknik Informatika yang bersemangat dalam pengembangan web dan desain antarmuka.
        </p>

        <a
          href="#kontak"
          class="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue- 700 transition-colors duration-300 inline-block animate-slide-in-left"
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
  background-image: url('../assets/background/kame.jpg');
  background-size: cover;
  padding: 100px;

}
img {
  border-radius: 50%;
}
.nama {
  color: #aa1111; /* Warna biru */
  font-weight: bold;
}
</style>
