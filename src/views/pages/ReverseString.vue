<template>
  <div>
    <h1>{{ titleText }}</h1>
    <section>
      <div class="pathe">
        <h3 class="title">Description</h3>
        <div>{{ descriptionText }}</div>
      </div>
    </section>
    <section>
      <div class="pathe">
        <h3 class="title">Example</h3>
        <div>{{ exampleText }}</div>
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
const titleText = ref('反轉字串 (Reverse String) (algorithm)')
const descriptionText = ref('寫一個函數來反轉給定的字串')
const exampleText = ref('console.log(reverseString("hello")); // "olleh"')

const inputVal = ref('')

const solution = computed(() => inputVal.value.split('').reverse().join(''))

</script>
<style scoped>
</style>
