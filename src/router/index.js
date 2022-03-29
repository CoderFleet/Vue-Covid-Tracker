import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Countries from '../views/Countries.vue'
import Country from '../views/Country.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/countries',
    name: 'countries',
    component: Countries
  },
  {
    path: '/countries/:id',
    name: 'country',
    component: Country
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
