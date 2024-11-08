<template>
  <div>
    <div class="sidebar" :class="{ expanded: isExpanded }">
      <div class="toggle-button" @click="toggleSidebar">
        &#9776;
      </div>
      <ul class="menu" :class="{ 'expanded-menu': isExpanded }">
        <RouterLink v-for="(item, index) in menuItems" :key="index"
          :to="item.url" @click="toggleSidebar"
        >
          <li class="menu-item">
            <i :class="item.icon"></i>
            <span>{{ item.pageName }}</span>
          </li>
        </RouterLink>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { menuItems } from '@/common/constants/menuItems'

const isExpanded = ref(false)
const toggleSidebar = () => isExpanded.value = !isExpanded.value

</script>

