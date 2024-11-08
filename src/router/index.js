import { createRouter, createWebHashHistory } from 'vue-router'
const Index = () => import('../views/Index.vue')
const CreatePhoneNumber = () => import('../views/pages/CreatePhoneNumber.vue')
const ReverseString = () => import('../views/pages/ReverseString.vue')
const CharacterCount = () => import('../views/pages/CharacterCount.vue')
const ArrayRemoveDuplicates = () => import('../views/pages/ArrayRemoveDuplicates.vue')
const PalindromeCheck = () => import('../views/pages/PalindromeCheck.vue')
const SumArray = () => import('../views/pages/SumArray.vue')
const mergeSortedArrays = () => import('../views/pages/mergeSortedArrays.vue')
const CharacterTypeDescription = () => import('../views/pages/CharacterTypeDescription.vue')


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Index,
    },
    // 1-5
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
    // 6-10
    {
      path: '/SumArray',
      component: SumArray
    },
    {
      path: '/mergeSortedArrays',
      component: mergeSortedArrays
    },
    {
      path: '/CharacterTypeDescription',
      component: CharacterTypeDescription
    },
  ]
})

export default router