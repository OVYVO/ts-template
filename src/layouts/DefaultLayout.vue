<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './widgets/AppHeader.vue'
</script>

<template>
  <div class="app-shell">
    <AppHeader />
    <main class="app-main">
      <RouterView />
    </main>
  </div>
</template>
