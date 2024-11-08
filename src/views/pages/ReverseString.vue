<template>
  <Content
    :info="{
      title, description, example
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
// import Content from '../../components/Content.vue'; 
//在vite.config 改 resolve alias 為 @ 之後，可由./src底下開始map檔案路徑，不必再從相對路徑找檔案
import Content from '@/components/Content.vue'

const title = ref('[Algorithm] 反轉字串 (Reverse String)')
const description = ref('寫一個函數來反轉給定的字串')
const example = ref('console.log(reverseString("hello")); // "olleh"')

const inputVal = ref('')
const solution = computed(() => inputVal.value.split('').reverse().join(''))

const source =ref(`
  \`\`\`javascript
    function solution(A) { \n
      return A.split('').reverse().join('') \n
    }
  \`\`\`
`)
</script>
<style scoped>
</style>
