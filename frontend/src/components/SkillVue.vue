<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import lottie from "lottie-web";

// Lottie file imports
import mainAnimation from "/lottie/front.json";
import animHTML from "/lottie/html.json";
import animJS from "/lottie/js.json";
import animPython from "/lottie/python.json";

// Mapping file-name → imported animation
const animationMap = {
  "html.json": animHTML,
  "js.json": animJS,
  "python.json": animPython,
};

const skills = ref([]);

onMounted(async () => {
  try {
    // Fetch data from local JSON
    const response = await axios.get("/api/skills.json");
    skills.value = response.data;

    // Init main Lottie
    lottie.loadAnimation({
      container: document.getElementById("main-lottie"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: mainAnimation,
    });

    // Delay agar DOM render dahulu
    setTimeout(() => {
      skills.value.forEach((skill) => {
        const animData = animationMap[skill.animFile];
        if (animData) {
          lottie.loadAnimation({
            container: document.getElementById(skill.animId),
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: animData,
          });
        }
      });
    }, 300);
  } catch (error) {
    console.error("Gagal memuat data skill:", error);
  }
});
</script>

<template>
  <section class="skills-section py-20 font-sans min-h-screen">
    <div class="container mx-auto px-6">
      <div data-aos="fade-up" data-aos-duration="800">
        <h1 class="text-white text-4xl font-bold text-center mb-6">Skills</h1>
      </div>

      <div
        class="mx-auto mb-10"
        style="max-width: 500px"
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        <div id="main-lottie" style="height: 300px"></div>
      </div>

      <div
        class="text-center mb-10"
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="800"
      >
        <h4 class="text-white text-xl font-semibold mb-2">
          Apa yang Saya Bisa?
        </h4>
        <p class="text-white/80 max-w-3xl mx-auto">
          Dunia teknologi selalu berkembang, dan saya senang menjadi bagian dari
          perjalanan itu. Berikut beberapa skill yang saya kuasai:
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300"
          data-aos="zoom-in-up"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <div :id="skill.animId" class="lottie-box mb-4"></div>
          <h5 class="text-white text-xl font-bold">{{ skill.name }}</h5>
          <p class="text-white/60">{{ skill.level }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-section {
  background-image: url("../assets/background/wl3.png");
  background-size: cover;
  background-position: center;
}

.lottie-box {
  height: 200px;
}
</style>
