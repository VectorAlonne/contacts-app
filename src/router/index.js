import { createRouter, createWebHistory } from '@ionic/vue-router';

import WelcomeView from '../view/WelcomeView.vue';
const routes = [
  {
    path: '/welcome',
    component: WelcomeView
  },

  {
    path: '/login',
    component: () => import('../view/LoginView.vue')
  },

  {
    path: '/contacts',
    component: () => import('../view/ContactsView.vue')
  },

  {
    path: '/contacts-id',
    component: () => import('../view/ContactsId.vue')
  },

  {
    path: '/contacts-edit',
    component: () => import('../view/ContactsIdEdit.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
