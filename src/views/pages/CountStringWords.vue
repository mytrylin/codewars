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
import Content from '@/components/Content.vue'

const title = ref('[Algorithm] 字串中的單詞計數 (Count the Number of Words in a String)')
const description = ref('寫一個函數計算字串中的單詞數')
const example = ref('console.log(countWords("Hello world! How are you?")); // 5')

const inputVal = ref('')
const solution = computed(() => {
  return inputVal.value.trim().split(/\s+/).length
})

const source =ref(`
  \`\`\`javascript
    function solution(A) { \n
      return A.trim().split(/\s+/).length \n
    }
  \`\`\`
`)
</script>
<style scoped>
</style>
