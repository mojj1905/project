import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import axios from 'axios'



const app = createApp(App)
app.config.globalProperties.axios = axios
app.use(router)
app.use(store)
app.mount('#app')
