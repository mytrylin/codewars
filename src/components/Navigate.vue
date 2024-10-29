<template>
  <div :class="['sidebar', { collapsed: isCollapsed }]">
    <button @click="toggleSidebar" class="btn-56 toggle-button">
      {{ isCollapsed ? '>' : '<' }}
    </button>
    <ul class="menu">
      <li v-for="(item, index) in menuItems" :key="index" class="menu-item">
        <i :class="item.icon"></i>
        <RouterLink :to="item.url">
          <span>{{ item.pageName }}</span>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

const isCollapsed = ref(false)
const toggleSidebar = () => (isCollapsed.value = !isCollapsed.value)

const menuItems = [
  { pageName: 'Home', icon: 'icon-home', url: '/' },
  { pageName: 'CreatePhoneNumber', icon: 'icon-settings', url: '/CreatePhoneNumber' },
  { pageName: 'Profile', icon: 'icon-user' },
  { pageName: 'Messages', icon: 'icon-messages' }
]
</script>


