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

const title = ref('[Algorithm] 陣列去重 (Remove Duplicates from an Array)')
const description = ref('寫一個函數，去除一個陣列中的重複值')
const example = ref('console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]')

const inputVal = ref('')
const solution = computed(() => [...new Set(inputVal.value)])

const source =ref(`
  \`\`\`javascript
    function solution(A) { \n
      return [...new Set(A)] \n
    }
  \`\`\`
`)
</script>
<style scoped>
</style>
