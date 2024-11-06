<template>
  <Content
    :title="titleText"
    :description="descriptionText"
    :example="exampleText"
  >
    <input type="text" v-model="inputVal" maxlength="10">
    <div v-if="solution">{{ solution }}</div>
  </Content>
</template>
<script setup>
// import Content from '../../components/Content.vue'; 
//在vite.config 改 resolve alias 為 @ 之後，可由./src底下開始map檔案路徑，不必再從相對路徑找檔案
import Content from '@/components/Content.vue'

const titleText = ref('反轉字串 (Reverse String) (algorithm)')
const descriptionText = ref('寫一個函數來反轉給定的字串')
const exampleText = ref('console.log(reverseString("hello")); // "olleh"')

const inputVal = ref('')
const solution = computed(() => inputVal.value.split('').reverse().join(''))

</script>
<style scoped>
</style>
