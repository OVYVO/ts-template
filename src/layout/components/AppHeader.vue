<script setup lang="ts">
import { APP_NAVIGATION, APP_TITLE } from "@/constants/app"
</script>

<template>
  <header class="app-header">
    <RouterLink class="brand" to="/">
      <span class="brand-mark">V</span>
      <div>
        <p class="brand-title">{{ APP_TITLE }}</p>
        <p class="brand-subtitle">app + shared + modules</p>
      </div>
    </RouterLink>

    <nav class="nav">
      <RouterLink v-for="item in APP_NAVIGATION" :key="item.to" class="nav-link" :to="item.to">
        {{ item.label }}
      </RouterLink>
    </nav>
  </header>
</template>
