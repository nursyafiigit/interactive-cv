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
        let resolved = false

        const scrollToHash = () => {
          if (!resolved) {
            resolved = true
            resolve({
              el: to.hash,
              behavior: 'smooth',
            })
          }
        }

        // Dengarkan event saat HomeView sudah siap
        window.addEventListener('homeview-mounted', scrollToHash)

        // Fallback: tetap scroll kalau event tidak dikirim setelah 600ms
        setTimeout(scrollToHash, 200)
      })
    }

    if (savedPosition) return savedPosition
    return { top: 0 }
  },
})


export default router
