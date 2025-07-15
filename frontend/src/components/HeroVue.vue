<template>
  <section class="herow min-h-screen flex items-center justify-center">
    <div
      id="profil"
      class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row items-center gap-y-12 md:gap-x-12"
    >
      <!-- Bagian Kiri -->
      <div class="md:w-1/2 text-left order-2 md:order-1">
        <h1
          class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-9"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Halo, Saya <span class="nama">Muhammad Nur Syafii</span>
        </h1>
        <p
          class="desc text-base sm:text-lg md:text-xl text-white mb-8"
          data-aos="fade-right"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          Saya seorang IT Developer yang memiliki hasrat mendalam terhadap teknologi dan
          pengembangan perangkat lunak. Sejak awal saya tertarik dengan dunia pemrograman, saya
          telah berkomitmen untuk terus belajar, berinovasi, dan memberikan solusi teknologi yang
          dapat mempermudah kehidupan serta meningkatkan efisiensi.
        </p>
        <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
          <a href="#kontak" class="contact-button"> Hubungi Saya </a>
        </div>
      </div>

      <!-- Bagian Kanan -->
      <div
        class="md:w-1/2 flex justify-end order-1 md:order-2"
        data-aos="fade-left"
        data-aos-delay="300"
        data-aos-duration="1000"
      >
        <img
          src="/image/aku.jpg"
          alt="Foto Profil"
          class="w-40 sm:w-52 md:w-72 lg:w-[320px] max-w-full rounded-full object-cover"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.herow {
  background-image: url('../assets/background/wl55.jpg');
  background-size: cover;
  background-position: center;
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
  transition: all 0.4s ease !important;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.contact-button:hover {
  background-color: #000000;
  color: #e9c200;
  transform: translateY(-5px) !important;
  box-shadow: 0px 6px 16px rgba(249, 186, 14, 0.374);
}

.nama {
  color: #e9c200;
  font-weight: bold;
}
</style>
