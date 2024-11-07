<template>
  <Content
    :info="{
      title, description, example
    }"
    :source="source"
  >
    <template v-slot:implementation>
      <input type="text" v-model="inputVal" maxlength="40">
      <div v-if="solution">{{ solution }}</div>
    </template>
  </Content>
</template>
<script setup>
import Content from '@/components/Content.vue'

const title = ref('[Algorithm] 計算字串中的字元出現次數 (Character Count)')
const description = ref('寫一個函數，輸入一個字串，返回每個字元出現的次數')
const example = ref('console.log(charCount("hello")); // { h: 1, e: 1, l: 2, o: 1 }')

const inputVal = ref('')
const solution = computed(() => {
  let charCount = {}
  inputVal.value.split('').forEach(char => {  charCount[char] = ( charCount[char] || 0) + 1})
  // for (let char of inputVal.value) {
  //   charCount[char] = ( charCount[char] || 0) + 1
  // }
  return charCount
})

const source =ref(`
  // example 1:\n
  \`\`\`javascript
    function solution(A) { \n
      let charCount = {} \n
      for (let char of inputVal.value) { \n
        charCount[char] = ( charCount[char] || 0) + 1 \n
      } \n
      return charCount \n
    } \n
  \`\`\`
  // example 2:\n
  \`\`\`javascript
    function solution(A) { \n
      let charCount = {} \n
      A.split('').forEach(char => charCount[char] = ( charCount[char] || 0) + 1 ) \n
      return charCount \n
    } \n
  \`\`\`
`)
</script>
<style scoped>
</style>
