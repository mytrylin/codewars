<template>
  <h1>Algorithm Practice</h1>
  <section class="index-section">
    <div class="index-item"
      v-for="(item, index) in menuItems" :key="index"
    >
      <router-link :to="item.url" class="url-link">
        {{ item.pageName }}
      </router-link>
    </div>
    <!-- <div>
      <ul class="index-ul">
        <router-link v-for="(item, index) in menuItems"
          :key="index" :to="item.url" class="url-link index-item"
        >
          <li class="index-li">
            {{ item.pageName }}
          </li>
        </router-link>
      </ul>
    </div> -->
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
