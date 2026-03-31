import { ref, watch } from 'vue'
import {
  getLocalStorageBoolean,
  setLocalStorageBoolean,
} from '@/services/storage/local-storage'

const STORAGE_KEY = 'ts-template:show-advanced-structure'

export function useHomePreferences() {
  const showAdvancedStructure = ref(
    getLocalStorageBoolean(STORAGE_KEY, true),
  )

  watch(showAdvancedStructure, (value) => {
    setLocalStorageBoolean(STORAGE_KEY, value)
  })

  function toggleAdvancedStructure() {
    showAdvancedStructure.value = !showAdvancedStructure.value
  }

  return {
    showAdvancedStructure,
    toggleAdvancedStructure,
  }
}
