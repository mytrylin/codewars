<template>
  <div>
    <h1>Create Phone Number</h1>
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
          <a :href="codewarsURL" target="_blank">{{ codewarsURL }}</a>
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
/* 整體樣式 */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #f4f4f4;
}

/* 標題樣式 */
h1 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
}

/* 區段樣式 */
section {
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* 小標題樣式 */
.title {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 10px;
}

/* 內文樣式 */
.pathe {
  line-height: 1.6;
  color: #666;
}

/* 輸入框樣式 */
input[type="text"] {
  padding: 10px;
  width: 100%;
  max-width: 300px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
}

/* 輸出電話號碼樣式 */
p {
  font-size: 1rem;
  margin-top: 15px;
  color: #333;
  font-weight: bold;
}

/* 說明文字的容器樣式 */
section div {
  background-color: #f9f9f9;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 0.9rem;
}
</style>
