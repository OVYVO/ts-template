<script setup lang="ts">
defineProps<{
  title: string
  description: string
  principles: string[]
}>()
</script>

<template>
  <section class="hero-card">
    <div class="hero-copy">
      <span class="eyebrow">Vue 3 + Vite + TypeScript</span>
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
    </div>

    <ul class="principle-list">
      <li v-for="principle in principles" :key="principle">
        {{ principle }}
      </li>
    </ul>
  </section>
</template>
