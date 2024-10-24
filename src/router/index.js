import { createRouter, createWebHashHistory } from 'vue-router'
const Index = () => import('../views/Index.vue')

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Index,
    }
  ]
})

export default router