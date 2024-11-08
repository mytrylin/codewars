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

const title = ref('[Codility] 字元類型描述函數 (Character type description function)')
const description = ref('判斷第一個字為何種字元 (digit代表數字、upper代表大寫字母、lower代表小寫字母、other代表其他)')
const example = ref('console.log(CharacterTypeDescription(1)); // Digit')

const inputVal = ref('')
const solution = computed(() => {
  if (inputVal.value === 0) return 'Other'

  const oneChar = inputVal.value[0]

  if (/[0-9]/.test(oneChar)) {
    return 'Digit'
  } else if (/[a-z]/.test(oneChar)) {
    return 'Lower'
  } else if (/[A-Z]/.test(oneChar)) {
    return 'Upper'
  } else {
    return 'Other'
  }
})

const source =ref(`
  \`\`\`javascript
    function solution(A) { \n
      if (/[0-9]/.test(A)) { \n
        return 'Digit' \n
      } else if (/[a-z]/.test(A)) { \n
        return 'Lower' \n
      } else if (/[A-Z]/.test(A)) { \n
        return 'Upper' \n
      } else { \n
        return 'Other' \n
      }
    }
  \`\`\`
`)
</script>
<style scoped>
</style>
