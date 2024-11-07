<template>
  <div :class="['sidebar', { collapsed: isCollapsed }]">
    <button @click="toggleSidebar" class="effect-button toggle-button">
      {{ isCollapsed ? '>' : '<' }}
    </button>
    <ul class="menu">
      <RouterLink v-for="(item, index) in menuItems" :key="index"
        :to="item.url" 
      >
        <li class="menu-item">
          <i :class="item.icon"></i>
          <span>{{ item.pageName }}</span>
        </li>
      </RouterLink>
    </ul>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { menuItems } from '@/common/constants/menuItems'

const isCollapsed = ref(false)
const toggleSidebar = () => (isCollapsed.value = !isCollapsed.value)

</script>


