import { createRouter, createWebHashHistory } from 'vue-router'
const Index = () => import('../views/Index.vue')
const CreatePhoneNumber = () => import('../views/CreatePhoneNumber.vue')

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
    }
  ]
})

export default router