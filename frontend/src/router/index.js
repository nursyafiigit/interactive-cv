import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormContact from '../components/FormContact.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/formcontact',
    name: 'formcontact',
    component: FormContact,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return new Promise((resolve) => {
        const waitForHomeView = () => {
          // Setelah event dideteksi, scroll ke elemen dengan anchor
          resolve({
            el: to.hash,
            behavior: 'smooth',
          })
          window.removeEventListener('homeview-mounted', waitForHomeView)
        }

        // Tambahkan listener dan timeout fallback (jika event tidak pernah dikirim)
        window.addEventListener('homeview-mounted', waitForHomeView)

        // Fallback: scroll tetap dilakukan setelah 1 detik jika event tidak muncul
        setTimeout(() => {
          resolve({
            el: to.hash,
            behavior: 'smooth',
          })
          window.removeEventListener('homeview-mounted', waitForHomeView)
        }, 1000)
      })
    }

    if (savedPosition) {
      return savedPosition
    }

    return { top: 0 }
  },
})


export default router
