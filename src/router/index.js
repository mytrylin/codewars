import { createRouter, createWebHashHistory } from 'vue-router'
const Index = () => import('../views/Index.vue')
const CreatePhoneNumber = () => import('../views/pages/CreatePhoneNumber.vue')
const ReverseString = () => import('../views/pages/ReverseString.vue')
const CharacterCount = () => import('../views/pages/CharacterCount.vue')
const ArrayRemoveDuplicates = () => import('../views/pages/ArrayRemoveDuplicates.vue')
const PalindromeCheck = () => import('../views/pages/PalindromeCheck.vue')
const SumArray = () => import('../views/pages/SumArray.vue')

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
    {
      path: '/CharacterCount',
      component: CharacterCount
    },
    {
      path: '/ArrayRemoveDuplicates',
      component: ArrayRemoveDuplicates
    },
    {
      path: '/PalindromeCheck',
      component: PalindromeCheck
    },
    {
      path: '/SumArray',
      component: SumArray
    },
  ]
})

export default router