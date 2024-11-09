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
// 待續

const title = ref('[Algorithm] 群組化物件陣列 (Group Array of Objects by Property)')
const description = ref('寫一個函數根據指定的屬性將物件陣列分組')
const example = ref('console.log(groupBy(items, "type"))')

const inputVal = ref('')
const solution = computed(() => {
  return inputVal.value.split('').reduce((sum, cur) => sum + parseInt(cur), 0)
})

const source =ref(`
  \`\`\`javascript
    function solution(A) { \n
      let val = A.split('') \n
      return val.reduce((sum, cur) => sum + parseInt(cur), 0) \n
    }
  \`\`\`
`)
</script>
<style scoped>
</style>
