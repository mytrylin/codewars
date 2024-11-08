<template>
  <router-link to="/" class="back-button">
    BACK
  </router-link>
</template>
<script setup>

</script>
<style scoped>
.back-button {
  color: #777;
  position: fixed;
  z-index: 111;
  right: 1vw;
  bottom: 10vh;
  background-color: #FFF;
  border-radius: 50px;
  padding: 33px 20px;
  border: 1px solid #f3f3f3;
}
.back-button:hover {
  color: #FFF;
  background-color: #333;
  border: 1px solid #bfbfbf;
  transition: all .3s ease;
}
@media (max-width: 768px) {
  .back-button {
    border-radius: 0;
    width: 100%;
    bottom: 0px;
    left: 0px;
    text-align: center;
    padding: 3vh 0;
    border: 0;
  }
}
</style>
