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

const title = ref('[Algorithm] 隨機陣列排序 (Shuffle Array Sort)')
const description = ref('隨機打亂陣列中的元素順序')
const example = ref('console.log(shuffleArray([1, 2, 3, 4, 5])); // 隨機排序的陣列，例如 [3, 1, 5, 2, 4]')

const inputVal = ref('')
const solution = computed(() => {
  return inputVal.value.split('').sort(() => Math.random() - 0.5)
})

const source =ref(`
  \`\`\`javascript
    function solution(A) { \n
      return A.sort(() => Math.random() - 0.5) \n
    }
  \`\`\`
`)
</script>
<style scoped>
</style>
