export function getLocalStorageBoolean(key: string, fallback: boolean) {
  const value = window.localStorage.getItem(key)

  if (value === null) {
    return fallback
  }

  return value === "true"
}

export function setLocalStorageBoolean(key: string, value: boolean) {
  window.localStorage.setItem(key, String(value))
}
