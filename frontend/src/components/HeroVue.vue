<template>
  <section class="herow min-h-screen flex items-center justify-center overflow-x-hidden">
    <div
      id="profil"
      class="container mx-auto px-4 sm:px-6 py-20 flex flex-col-reverse md:flex-row items-center"
    >
      <!-- Bagian Kiri -->
      <div class="w-full md:w-1/2 mt-10 md:mt-0 text-center md:text-left px-2">
        <h1
          class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Halo, Saya <span class="nama">Muhammad Nur Syafii</span>
        </h1>
        <p
          class="text-base sm:text-lg md:text-xl text-white mb-8"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          Saya seorang IT Developer yang memiliki hasrat mendalam terhadap teknologi dan
          pengembangan perangkat lunak. Sejak awal saya tertarik dengan dunia pemrograman, saya
          telah berkomitmen untuk terus belajar, berinovasi, dan memberikan solusi teknologi yang
          dapat mempermudah kehidupan serta meningkatkan efisiensi.
        </p>

        <a
          href="#kontak"
          class="contact-button"
          data-aos="zoom-in-up"
          data-aos-delay="400"
          data-aos-duration="800"
        >
          Hubungi Saya
        </a>
      </div>

      <!-- Bagian Kanan -->
      <div
        class="w-full md:w-1/2 flex justify-center"
        data-aos="fade-left"
        data-aos-delay="300"
        data-aos-duration="1000"
      >
        <img
          src="/image/aku.jpg"
          alt="Foto Profil"
          class="w-40 sm:w-52 md:w-72 lg:w-[320px] max-w-full rounded-full"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.herow {
  background-image: url("../assets/background/wl5.jpg");
  background-size: cover;
  background-position: center;
  padding: 2rem;
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
