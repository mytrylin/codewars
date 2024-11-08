<template>
  <h1>Algorithm Practice</h1>
  <section class="index-section">
    <router-link v-for="(item, index) in menuItems" :key="index"
      :to="item.url" class="url-link">
      <div class="index-item">
        {{ item.pageName }}
      </div>
    </router-link>
  </section>
</template>
<script setup>
import { menuItems } from '@/common/constants/menuItems'

</script>
<style scoped>
.index-section {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
}
.index-item {
  min-width: 250px;
  margin: 5px;
  font-size: 20px;
}
</style>
