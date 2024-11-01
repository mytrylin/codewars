<template>
  <div>
    <h1>Create Phone Number (codewars)</h1>
    <section>
      <div class="pathe">
        <h3 class="title">Description</h3>
        <div>
          編寫一個接受 10 個整數（0 到 9 之間）的陣列的函數，該函數以電話號碼的形式傳回這些數字的字串
        </div>
      </div>
    </section>
    <section>
      <div class="pathe">
        <h3 class="title">Example</h3>
        <div>
          reatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
        </div>
      </div>
    </section>
    <section>
      <div class="pathe">
        <h3 class="title">URL</h3>
        <div>
          <a :href="codewarsURL" target="_blank" class="url-link">{{ codewarsURL }}</a>
        </div>
      </div>
    </section>
    <section>
      <h3 class="title">Implementation</h3>
      <input type="text" v-model="phone" maxlength="10">
      <div v-if="phone">{{ phoneOutput }}</div>
    </section>
  </div>
</template>
<script setup>
const urlBase = 'https://www.codewars.com/kata/'
const urlParam = '525f50e3b73515a6db000b83'
const codewarsURL = ref(urlBase+urlParam)
const phone = ref('')
const splitToArray = (val) => val.split('')
const createPhoneNumber = (val = []) => {
  return val.length ?
    `(${val.slice(0, 4).join('')}) -  ${val.slice(4, 7).join('')} - ${val.slice(7, 10).join('')}`
    : ``
}
const phoneOutput = computed(() => createPhoneNumber(splitToArray(phone.value)))


/**
 * TypeScript 版本中的 val 明確指定為 string[]，這樣能確保你傳入的值是字串陣列。
 * 函數回傳值類型指定為 string，使得型別更明確。
*/
// const createPhoneNumber = (val: string[] = []): string => 
//   `(${val.slice(0, 4).join('')}) ${val.slice(4, 7).join('')} - ${val.slice(7, 10).join('')
</script>
<style scoped>
</style>
