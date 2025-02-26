import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'

import Dashboard from '@/components/Dashboard'
import DashboardHome from '@/pages/Home'

import store from './store'

import '@/assets/css/tailwind.css'


Vue.config.productionTip = false

Vue.use(Router)

const routes = [
  { path: '/', redirect: '/dashboard' }, // Redirect to Dashboard
  { path: '/dashboard', component: () => import('@/pages/Dashboard.vue') }, // Dashboard page
  { path: '/course', component: Dashboard, children: [
      { path: '/', redirect: { name: 'DashboardHome' } }, // Course dashboard
      { path: 'home', name: 'DashboardHome', component: DashboardHome }, // Course dashboard
      { path: 'lecture-1', component: () => import('@/pages/Lecture1.vue') }, // Lecture page
      { path: 'quiz-1', component: () => import('@/pages/Quiz1.vue') } // Quiz page
    ]
  }
];


const router = new Router({
  mode: 'history',
  routes
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

