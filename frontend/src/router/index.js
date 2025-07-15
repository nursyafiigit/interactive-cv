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
        // Tunggu sampai DOM benar-benar siap
        setTimeout(() => {
          resolve({
            el: to.hash,
            behavior: 'smooth',
          })
        }, 200) // Delay 300ms cukup untuk render selesai
      })
    }

    if (savedPosition) {
      return savedPosition
    }

    return { top: 0 }
  },
})

export default router
