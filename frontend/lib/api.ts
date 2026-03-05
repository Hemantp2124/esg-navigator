import { toast } from 'sonner'

interface ApiResponse<T> {
  data?: T
  error?: string
}

export async function apiCall<T>(
  url: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      const errorMessage = errorData.detail || `HTTP ${response.status}: ${response.statusText}`
      toast.error(errorMessage)
      return { error: errorMessage }
    }

    const data = await response.json()
    return { data }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Network error'
    toast.error(errorMessage)
    return { error: errorMessage }
  }
}
