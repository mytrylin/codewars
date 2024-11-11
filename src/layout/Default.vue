<template>
  <div class="app-container">
    <Navigate />
    <div class="content">
      <RouterView />
    </div>
    <BackButton />
  </div>
</template>
<script setup>
import Navigate from '@/components/Navigate.vue'
import BackButton from '@/components/BackButton.vue'
</script>