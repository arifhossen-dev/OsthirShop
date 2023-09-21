import { createApp } from 'vue'
import { createRouter,createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import routes from './route/route'

const router = createRouter({
  history:createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
