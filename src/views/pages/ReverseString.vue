<template>
  <div>
    <h1>反轉字串 (Reverse String) (algorithm)</h1>
    <section>
      <div class="pathe">
        <h3 class="title">Description</h3>
        <div>
          寫一個函數來反轉給定的字串
        </div>
      </div>
    </section>
    <section>
      <div class="pathe">
        <h3 class="title">Example</h3>
        <div>
          console.log(reverseString("hello")); // "olleh"
        </div>
      </div>
    </section>
    <section>
      <h3 class="title">Implementation</h3>
      <input type="text" v-model="inputVal" maxlength="10">
      <div v-if="solution">{{ solution }}</div>
    </section>
  </div>
</template>
<script setup>
const inputVal = ref('')

const solution = computed(() => inputVal.value.split('').reverse().join(''))

</script>
<style scoped>
</style>
