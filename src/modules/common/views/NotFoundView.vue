<script setup lang="ts">
import { useRouter } from 'vue-router'
import BaseButton from '@/components/customComp/BaseButton.vue'
import EmptyState from '@/components/businessCopm/EmptyState.vue'
import { APP_TITLE } from '@/constants/app'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

const router = useRouter()

useDocumentTitle(`页面未找到 - ${APP_TITLE}`)
</script>

<template>
  <div class="page-section">
    <EmptyState
      title="页面不存在"
      description="你访问的页面没有匹配到路由，可以先回到项目首页。"
    >
      <BaseButton @click="router.push('/')">返回首页</BaseButton>
    </EmptyState>
  </div>
</template>
