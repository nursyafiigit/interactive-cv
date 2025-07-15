import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormContact from '../components/FormContact.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/formcontact', name: 'formcontact', component: FormContact },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // Optional: no scrollBehavior, since handled manually
})

export default router
