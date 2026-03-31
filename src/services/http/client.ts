export interface RequestOptions extends RequestInit {
  baseUrl?: string
}

export async function http<T>(path: string, options: RequestOptions = {}) {
  const { baseUrl = "", headers, ...rest } = options
  const response = await fetch(`${baseUrl}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...headers
    },
    ...rest
  })

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  return (await response.json()) as T
}
