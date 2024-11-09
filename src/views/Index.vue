<template>
  <h1>Codewars & Algorithm</h1>
  <h2>All List</h2>
  <section class="index-section">
    <router-link v-for="(item, index) in menuItems.slice(1)" :key="index"
      :to="item.url" class="url-link index-item">
      <div class="">
        <p>{{ index + 1 }}.{{ item.title }}</p>
      </div>
    </router-link>
  </section>
  <template v-for="(groups, category) in groupsMenu" :key="category">
    <h2>{{ category }}</h2>
    <section class="index-section">
      <router-link v-for="(item, index) in groups" :key="index"
        :to="item.url" class="url-link index-item">
        <div class="">
          <p>{{ index + 1 }}.{{ item.title }}</p>
        </div>
      </router-link>
    </section>
  </template>
</template>
<script setup>
import { menuItems } from '@/common/constants/menuItems'

const groupsMenu = computed(() => {
  return menuItems.slice(1).reduce((groups, item) => {
    if (!groups[item.category]) {
      groups[item.category] = []
    }

    groups[item.category].push(item)
    return groups
  }, {})
})

</script>
<style scoped>
section div {
  min-height: 80px;
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
.index-item:hover {
  box-sizing: border-box;
  box-shadow: 5px 5px 15px;
  transition: 1;
}

@media (max-width: 768px) {
  .index-item {
    max-width: 100%;
    width: 100%;
  }
}
</style>
