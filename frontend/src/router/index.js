import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import ChartsView from '../views/ChartsView.vue'
import AboutView from '../views/AboutView'
import DashboardView from '../views/DashboardView'
import DataHistoryView from '../views/DataHistoryView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path: '/charts',
    name: 'charts',
    component: ChartsView
  },
  {
    path: '/dataHistory',
    name: 'dataHistory',
    component: DataHistoryView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
