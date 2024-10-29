<template>
  <div class="app-container">
    <Navigate />
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>
<script setup>
import Navigate from '@/components/Navigate.vue';
</script>