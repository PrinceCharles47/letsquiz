import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Dashboard from '../views/Dashboard.vue'
import CreateQuiz from '../views/CreateQuiz.vue'
import TakeQuiz from '../views/TakeQuiz.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/create-quiz',
    name: 'create quiz',
    component: CreateQuiz
  },
  {
    path: '/take-quiz',
    name: 'take quiz',
    component: TakeQuiz
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
