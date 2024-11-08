<template>
  <h1>Codewars & Algorithm Practice</h1>
  <section class="index-section">
    <router-link v-for="(item, index) in menuItems.slice(1)" :key="index"
      :to="item.url" class="url-link index-item">
      <div class="">
        <p>{{ index + 1 }}.{{ item.title }}</p>
      </div>
    </router-link>
  </section>
</template>
<script setup>
import { menuItems } from '@/common/constants/menuItems'

</script>
<style scoped>
section div:hover {
  box-sizing: border-box;
  box-shadow: 5px 5px 15px;
  transition: 1;
}
.index-section {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
}
.index-item {
  max-width: 250px;
  margin: 5px;
  font-size: 20px;
}

@media (max-width: 768px) {
  .index-item {
    max-width: 100%;
    width: 100%;
  }
}
</style>
