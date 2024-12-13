<template>
  <Content
    :info="{
      title, description, example
    }"
    :source="source"
  >
    <template v-slot:implementation>
      <input type="number" v-model="inputVal" maxlength="30">
      <input type="number" v-model="inputVal2" maxlength="30">
      <div v-if="inputVal">
        <span v-for="(item, index) in solution">
          {{ item }}
          <span v-if="index+1 < solution.length">、</span>
        </span>
      </div>
    </template>
  </Content>
</template>
<script setup>
import Content from '@/components/Content.vue'

const title = ref('[tools] 產生6個號碼 (Get 6 Number)')
const description = ref('用月份日期產生6個1~49號碼')
const example = ref('console.log(sumArray([1, 2, 3, 4])); // 10')

const days = new Date()
const year = days.getFullYear()
const month = days.getMonth() + 1
const day = days.getDate()

const inputVal = ref(month)
const inputVal2 = ref(day)

const number1 = () => {
  return  Number(String(inputVal.value).substring(0, 1))
    + Number(String(inputVal.value).substring(1))
    + Number(String(inputVal2.value).substring(0, 1))
    + Number(String(inputVal2.value).substring(1))
}
const number2 = () => 49 - (18 + (inputVal.value + inputVal2.value)) + 2
const number3 = () => inputVal.value + inputVal2.value
const number4 = () => 49 - (18 + inputVal2.value) + 3
const number5 = () => 49 - (inputVal.value + inputVal2.value) + 2
const number6 = () => 49 - inputVal2.value + 1

const solution = computed(() => {
  return [number1(), number2(), number3(), number4(), number5(), number6()]
})

const source =ref(`
  \`\`\`javascript  \n
    const number1 = () => {  \n
      return  Number(String(inputVal.value).substring(0, 1))  \n
        + Number(String(inputVal.value).substring(1))  \n
        + Number(String(inputVal2.value).substring(0, 1))  \n
        + Number(String(inputVal2.value).substring(1))  \n
    }  \n
    const number2 = () => 49 - (18 + (inputVal.value + inputVal2.value)) + 2  \n
    const number3 = () => inputVal.value + inputVal2.value  \n
    const number4 = () => 49 - (18 + inputVal2.value) + 3  \n
    const number5 = () => 49 - (inputVal.value + inputVal2.value) + 2  \n
    const number6 = () => 49 - inputVal2.value + 1  \n
  \`\`\`
`)
</script>
<style scoped>
input {
  margin-right: 15px;
}
</style>
