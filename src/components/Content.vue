<template>
  <div>
    <h1>{{ props.title }}</h1>
    <section v-for="(item, index) in Object.keys(props).slice(1)">
      <div class="pathe">
        <h3 class="title">{{ wordToUpperCase(item) }}</h3>
        <div>
          <a v-if="item === 'url'" :href="props[item]" 
            target="_blank" class="url-link">{{ props[item] }}
          </a>
          <template v-else>{{ props[item] }}</template>
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
const wordToUpperCase = (word) => {
  if (!word) return
  return word[0].toUpperCase() + word.slice(1)
}
</script>
