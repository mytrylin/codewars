<template>
  <div :class="['sidebar', { collapsed: isCollapsed }]">
    <button @click="toggleSidebar" class="effect-button toggle-button">
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
  { pageName: '反轉字串 (Reverse String)', icon: 'icon-user', url: '/ReverseString' },
  { pageName: 'Messages', icon: 'icon-messages' }
]
</script>


