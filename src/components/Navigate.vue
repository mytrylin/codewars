<template>
  <div :class="['sidebar', { collapsed: isCollapsed }]">
    <button @click="toggleSidebar" class="btn-56 toggle-button">
      {{ isCollapsed ? '>' : '<' }}
    </button>
    <ul class="menu">
      <li v-for="(item, index) in menuItems" :key="index" class="menu-item">
        <i :class="item.icon"></i>
        <span v-if="!isCollapsed">{{ item.label }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isCollapsed = ref(false);
const toggleSidebar = () => (isCollapsed.value = !isCollapsed.value);

const menuItems = [
  { label: 'Home', icon: 'icon-home' },
  { label: 'Settings', icon: 'icon-settings' },
  { label: 'Profile', icon: 'icon-user' },
  { label: 'Messages', icon: 'icon-messages' }
];
</script>


