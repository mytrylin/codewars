import { createRouter, createWebHashHistory } from 'vue-router'
const Index = () => import('../views/Index.vue')
const CreatePhoneNumber = () => import('../views/pages/CreatePhoneNumber.vue')
const ReverseString = () => import('../views/pages/ReverseString.vue')

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Index,
    },
    {
      path: '/CreatePhoneNumber',
      component: CreatePhoneNumber
    },
    {
      path: '/ReverseString',
      component: ReverseString
    },
  ]
})

export default router