<template>
  <Content
    :info="{
      title, description, example
    }"
    :source="source"
  >
    <template v-slot:implementation>
      <input type="text" v-model="inputVal" maxlength="30">
      <div v-if="inputVal">{{ solution }}</div>
    </template>
  </Content>
</template>
<script setup>
// import Content from '../../components/Content.vue'; 
//在vite.config 改 resolve alias 為 @ 之後，可由./src底下開始map檔案路徑，不必再從相對路徑找檔案
import Content from '@/components/Content.vue'

const title = ref('[Algorithm] 數組的元素之和 (Sum of Array Elements)')
const description = ref('寫一個函數來計算數組中所有元素的和')
const example = ref('console.log(sumArray([1, 2, 3, 4])); // 10')

const inputVal = ref('')
const solution = computed(() => {
  return inputVal.value.split('').reduce((sum, cur) => sum + parseInt(cur), 0)
})

const source =ref(`
  \`\`\`javascript
    function solution(A) { \n
      let val = String(A).split('') \n
      return val.reduce((sum, cur) => sum + parseInt(cur), 0) \n
    }
  \`\`\`
`)
</script>
<style scoped>
</style>
