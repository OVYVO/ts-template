<script setup lang="ts">
import type { StructureGroup } from '@/modules/home/types/home'
import { formatDirectoryCount } from '@/utils/formatters'

defineProps<{
  group: StructureGroup
}>()
</script>

<template>
  <article class="structure-card">
    <div class="structure-card__header">
      <div>
        <p class="structure-card__eyebrow">{{ group.title }}</p>
        <h2>{{ group.purpose }}</h2>
      </div>
      <span class="structure-card__count">
        {{ formatDirectoryCount(group.items.length) }}
      </span>
    </div>

    <ul class="structure-list">
      <li v-for="item in group.items" :key="item.name">
        <code>{{ item.name }}</code>
        <p>{{ item.description }}</p>
      </li>
    </ul>
  </article>
</template>
