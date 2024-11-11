<template>
  <Content
    :info="{
      title, description, example
    }"
    :source="source"
  >
    <template v-slot:implementation>
      <input type="text" v-model="inputVal" maxlength="30"><br>
      <textarea v-model="inputVal2"></textarea>
      <div v-if="inputVal2 && inputVal">{{ solution }}</div>
    </template>
  </Content>
</template>
<script setup>
import Content from '@/components/Content.vue'
import { menuItems } from '@/common/constants/menuItems'

const title = ref('[Algorithm] 群組化物件陣列 (Group Array of Objects by Property)')
const description = ref('寫一個函數根據指定的屬性將物件陣列分組')
const example = ref('console.log(groupBy(items, "type"))')

const inputVal = ref('')
const menuItemsVal = ref(menuItems.slice(1))
menuItemsVal.value.forEach(item => item.url = '')
const inputVal2 = ref(JSON.stringify(menuItemsVal.value, null, 2))

const solution = computed(() => {
  return menuItemsVal.value.reduce((groups, item) => {
    if (!groups[item.category]) {
      groups[inputVal.value] = []
    } 
    groups[inputVal.value].push(item)    
    return groups
  }, {})
  // return inputVal2.value
})

watch(inputVal2, (nVal) => {
  try {
    menuItems.value = JSON.parse(nVal)
  } catch (error) {
    console.log(error)
  }
})

const source =ref(`
  \`\`\`javascript
    function solution(A, category) { \n
      return A.reduce((groups, item) => { \n
        if (!groups[item.category]) { \n
          groups[category] = [] \n
        }  \n
        groups[category].push(item) \n
        return groups \n
      }, {}) \n
    }
  \`\`\`
`)
</script>
<style scoped>
</style>
