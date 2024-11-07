<template>
  <div>
    <h1>{{ props.info.title }}</h1>
    <section v-for="(item, index) in Object.keys(props.info).slice(1)">
      <h3 class="title">{{ wordToUpperCase(item) }}</h3>
      <div>
        <a v-if="item === 'url'" :href="props.info[item]" 
          target="_blank" class="url-link">{{ props.info[item] }}
        </a>
        <template v-else>{{ props.info[item] }}</template>
      </div>
    </section>
    <section>
      <h3 class="title">Implementation</h3>
      <slot name="implementation"></slot>
    </section>
    <section>
      <h3 class="title">Solution</h3>
      <Markdown :source="source"/>
    </section>
  </div>
</template>
<script setup>
import Markdown from 'vue3-markdown-it'

const props = defineProps({
  info: {
    type: Object,
    required: true,
    default: () => {
      return {
        title: '',
        description: '',
        example: '',
        url: ''
      }
    }
  },
  source: {
    type: String,
    required: true,
  }
})

const wordToUpperCase = (word) => {
  if (!word) return
  return word[0].toUpperCase() + word.slice(1)
}
</script>
