<template>
  <div>
    <input type="text" v-model="phone">
    <p>{{ phoneOutput }}</p>
  </div>
</template>
<script setup>
const phone = ref('')
const splitToArray = (val) => val.split('')
const createPhoneNumber = (val = []) => {
  let areaCode = val.slice(0, 4).join('')
  let beforeNumber = val.slice(4, 7).join('')
  let afterNumbers = val.slice(7, 10).join('')
  return `(${areaCode}) ${beforeNumber} - ${afterNumbers}`
}
const phoneOutput = computed(() => createPhoneNumber(splitToArray(phone.value)))

</script>
<style scoped>
</style>
