import '../src/assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
import AOS from 'aos'
import 'aos/dist/aos.css'


AOS.init({
  duration: 800, 
})


app.use(router)

app.mount('#app')
