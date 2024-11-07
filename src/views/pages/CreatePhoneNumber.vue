<template>
  <Content
    :info="{
      title, description, example, url
    }"
    :source="source"
  >
    <template v-slot:implementation>
      <input type="text" v-model="inputVal" maxlength="10">
      <div v-if="inputVal">{{ solution }}</div>
    </template>
  </Content>
</template>
<script setup>
import Content from '@/components/Content.vue'

const title = ref('[Codewars] Create Phone Number')
const description = ref('編寫一個接受 10 個整數（0 到 9 之間）的陣列的函數，該函數以電話號碼的形式傳回這些數字的字串')
const example = ref('reatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"')
const url = ref('https://www.codewars.com/kata/525f50e3b73515a6db000b83')

const inputVal = ref('')
const solution = computed(() => {
  let val = inputVal.value.split('')
  return val.length ?
    `(${val.slice(0, 4).join('')}) -  ${val.slice(4, 7).join('')} - ${val.slice(7, 10).join('')}`
    : ``
})

const source =ref(`
  \`\`\`javascript
    function solution(A) { \n
      let val = A.split('') \n
      return val.length? \n
      \`(\${val.slice(0, 4).join('')}) -  \${val.slice(4, 7).join('')} - \${val.slice(7, 10).join('')}\` \n
    }
  \`\`\`
`)

</script>
<style scoped>
</style>
