import { onMounted, watchEffect } from 'vue'

export function useDocumentTitle(title: string) {
  onMounted(() => {
    document.title = title
  })

  watchEffect(() => {
    document.title = title
  })
}
