<template>
  <div>
    <h1>{{ props.title }}</h1>
    <section>
      <div class="pathe">
        <h3 class="title">Description</h3>
        <div>{{ props.description }}</div>
      </div>
    </section>
    <section>
      <div class="pathe">
        <h3 class="title">Example</h3>
        <div>{{ props.example }}</div>
      </div>
    </section>
    <section v-if="props.url">
      <div class="pathe">
        <h3 class="title">URL</h3>
        <div>
          <a :href="props.url" target="_blank" class="url-link">{{ props.url }}</a>
        </div>
      </div>
    </section>
    <section>
      <h3 class="title">Implementation</h3>
      <slot></slot>
    </section>
  </div>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  example: {
    type: String,
    default: ''
  },
  url: {
    type: String,
    default: ''
  }
})
</script>
