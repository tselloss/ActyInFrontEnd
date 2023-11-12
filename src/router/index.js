import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegistrationView from '../views/RegistrationView.vue'
import UserProfileView from '../views/UserProfileView.vue'
import MatchFormView from '../views/MatchFormView.vue'
import MainPageView from '../views/MainPageView.vue' // Corrected import

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegistrationView
  },
  {
    path: '/user',
    name: 'user',
    component: UserProfileView
  },
  {
    path: '/match',
    name: 'match',
    component: MatchFormView
  },
  {
    path: '/main',
    name: 'main',
    component: MainPageView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
