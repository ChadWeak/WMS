import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css'

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.use(PrimeVue)

app.mount('#app')
