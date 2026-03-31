<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import BaseButton from '@/components/base/BaseButton.vue'
import EmptyState from '@/components/common/EmptyState.vue'
import { APP_DESCRIPTION, APP_TITLE } from '@/constants/app'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import { getHomeSummary } from '@/modules/home/api/getHomeSummary'
import HomeHero from '@/modules/home/components/HomeHero.vue'
import ProjectStructureCard from '@/modules/home/components/ProjectStructureCard.vue'
import { useHomePreferences } from '@/modules/home/hooks/useHomePreferences'
import type { HomeSummary } from '@/modules/home/types/home'

const summary = ref<HomeSummary | null>(null)
const { showAdvancedStructure, toggleAdvancedStructure } = useHomePreferences()

const visibleGroups = computed(() => {
  if (!summary.value) {
    return []
  }

  return showAdvancedStructure.value
    ? summary.value.groups
    : summary.value.groups.slice(0, 2)
})

useDocumentTitle(APP_TITLE)

onMounted(async () => {
  summary.value = await getHomeSummary()
})
</script>

<template>
  <section class="page-section">
    <HomeHero
      :title="APP_TITLE"
      :description="APP_DESCRIPTION"
      :principles="summary?.principles ?? []"
    />
  </section>

  <section id="structure" class="page-section">
    <div class="section-heading">
      <div>
        <span class="eyebrow">目录结构</span>
        <h2>从模板直接进入可维护的开发骨架</h2>
      </div>

      <BaseButton variant="secondary" @click="toggleAdvancedStructure">
        {{ showAdvancedStructure ? '收起模块细节' : '展开模块细节' }}
      </BaseButton>
    </div>

    <div v-if="summary" class="structure-grid">
      <ProjectStructureCard
        v-for="group in visibleGroups"
        :key="group.title"
        :group="group"
      />
    </div>

    <EmptyState
      v-else
      title="正在准备目录说明"
      description="目录分组、职责边界和模块示例会在这里展示。"
    />
  </section>

  <section class="page-section">
    <div class="section-heading">
      <div>
        <span class="eyebrow">边界对照</span>
        <h2>各文件夹应该放什么，不应该放什么</h2>
      </div>
    </div>

    <div v-if="summary" class="boundary-table-wrapper">
      <table class="boundary-table">
        <thead>
          <tr>
            <th>目录</th>
            <th>核心职责</th>
            <th>适合放</th>
            <th>不建议放</th>
            <th>当前示例</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in summary.boundaries" :key="item.directory">
            <td>
              <code>{{ item.directory }}</code>
            </td>
            <td>{{ item.responsibility }}</td>
            <td>{{ item.suitableFor }}</td>
            <td>{{ item.avoidFor }}</td>
            <td>
              <code>{{ item.example }}</code>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <section class="page-section">
    <div class="section-heading">
      <div>
        <span class="eyebrow">易混淆对照</span>
        <h2>`constants`、`types`、`utils`、`hooks` 应该怎么区分</h2>
      </div>
    </div>

    <div v-if="summary" class="boundary-table-wrapper">
      <table class="boundary-table comparison-table">
        <thead>
          <tr>
            <th>目录</th>
            <th>本质</th>
            <th>适合放</th>
            <th>不建议放</th>
            <th>当前示例</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in summary.comparisons" :key="item.directory">
            <td>
              <code>{{ item.directory }}</code>
            </td>
            <td>{{ item.essence }}</td>
            <td>{{ item.suitableFor }}</td>
            <td>{{ item.avoidFor }}</td>
            <td>
              <code>{{ item.example }}</code>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
