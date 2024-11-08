<template>
  <Content
    :info="{
      title, description, example
    }"
    :source="source"
  >
    <template v-slot:implementation>
      <input type="text" v-model="inputVal" maxlength="30"><br>
      <input type="text" v-model="inputVal2" maxlength="30">
      <div v-if="inputVal">{{ solution }}</div>
    </template>
  </Content>
</template>
<script setup>
import Content from '@/components/Content.vue'

const title = ref('[Algorithm] 合併兩個已排序的陣列 (merge Sorted Arrays)')
const description = ref('寫一個函數來合併兩個已經排序的陣列，並保持合併後的陣列有序')
const example = ref('console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]')

const inputVal = ref('')
const inputVal2 = ref('')
const solution = computed(() => {
  // let arr1 = [...new Set(inputVal.value.split(''))]
  // let arr2 = [...new Set(inputVal2.value.split(''))]
  let arr1 = inputVal.value.split('')
  let arr2 = inputVal2.value.split('')
  let mergeArray = []
  let i = 0, j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergeArray.push(arr1[i])
      i++
    } else {
      mergeArray.push(arr2[j])
      j++
    }
  }
  return mergeArray.concat(arr1.slice(i)).concat(arr2.slice(j))
  // return [...new Set(mergeArray.concat(arr1.slice(i)).concat(arr2.slice(j)))]
})
/**
 * concat() 可將陣列做連結
 * slice() 將陣列內容切出一部份，不會改變原始陣列，參數1取陣列起始key位置，參數2取陣列結尾位置 (選填，不填則取到陣列結尾)
 * push() 直接修改陣列，並回傳一個新的長度，concat() 不修改原陣列，回傳合併後的新陣列長度
 */

const source =ref(`
  \`\`\`javascript
    function solution(A, B) { \n
      let mergeArray = [] \n
      let i = 0, j = 0; \n
      while (i < A.length && j < B.length) { \n
        if (A[i] < B[j]) { \n
          mergeArray.push(A[i]) \n
          i++ \n
        } else { \n
          mergeArray.push(B[j]) \n
          j++ \n
        } \n
      } \n
    }
  \`\`\`
`)
</script>
<style scoped>
</style>
