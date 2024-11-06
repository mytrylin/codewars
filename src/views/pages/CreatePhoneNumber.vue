<template>
  <Content
    :title="titleText"
    :description="descriptionText"
    :example="exampleText"
    :url="urlPath"
  >
    <input type="text" v-model="inputVal" maxlength="10">
    <div v-if="inputVal">{{ solution }}</div>
  </Content>
  <!-- <div>
    <h1>{{ titleText }}</h1>
    <section>
      <div class="pathe">
        <h3 class="title">Description</h3>
        <div>
          {{ descriptionText }}
        </div>
      </div>
    </section>
    <section>
      <div class="pathe">
        <h3 class="title">Example</h3>
        <div>
          {{ exampleText }}
        </div>
      </div>
    </section>
    <section>
      <div class="pathe">
        <h3 class="title">URL</h3>
        <div>
          <a :href="urlPath" target="_blank" class="url-link">{{ urlPath }}</a>
        </div>
      </div>
    </section>
    <section>
      <h3 class="title">Implementation</h3>
      <input type="text" v-model="inputVal" maxlength="10">
      <div v-if="inputVal">{{ solution }}</div>
    </section>
  </div> -->
</template>
<script setup>
import Content from '@/components/Content.vue'

const titleText = ref('Create Phone Number (codewars)')
const descriptionText = ref('編寫一個接受 10 個整數（0 到 9 之間）的陣列的函數，該函數以電話號碼的形式傳回這些數字的字串')
const exampleText = ref('reatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"')
const urlPath = ref('https://www.codewars.com/kata/525f50e3b73515a6db000b83')

const inputVal = ref('')

const solution = computed(() => {
  let val = inputVal.value.split('')
  return val.length ?
    `(${val.slice(0, 4).join('')}) -  ${val.slice(4, 7).join('')} - ${val.slice(7, 10).join('')}`
    : ``
})

</script>
<style scoped>
</style>
