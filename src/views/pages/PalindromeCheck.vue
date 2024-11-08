<template>
  <Content
    :info="{
      title, description, example
    }"
    :source="source"
  >
    <template v-slot:implementation>
      <input type="text" v-model="inputVal" maxlength="20">
      <div v-if="inputVal">{{ solution }}</div>
    </template>
  </Content>
</template>
<script setup>
import Content from '@/components/Content.vue'

const title = ref('[Algorithm] 迴文檢查 (Palindrome Check)')
const description = ref('寫一個函數檢查一個字串是否為迴文（正反讀都一樣的字串）')
const example = ref(`console.log(isPalindrome("hello")); // false \n
  console.log(isPalindrome("madam")); // true
`)

const inputVal = ref('')
const solution = computed(() => inputVal.value === inputVal.value.split('').reverse().join(''))

const source =ref(`
  \`\`\`javascript
    function solution(A) { \n
      return A === A.split('').reverse().join('') \n
    }
  \`\`\`
`)
</script>
<style scoped>
</style>
