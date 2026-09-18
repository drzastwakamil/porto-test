import { reactive, computed } from 'vue'

const STORAGE_KEY = 'porto-weekend:favorites'

function loadFavorites(): Set<string> {
  if (typeof window === 'undefined') return new Set()
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? new Set(JSON.parse(raw)) : new Set()
  } catch {
    return new Set()
  }
}

function persist(favorites: Set<string>) {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...favorites]))
  } catch {
    // storage unavailable (private mode / full) — state stays in memory only
  }
}

const favorites = reactive(loadFavorites())

export function useFavorites() {
  const favoriteCount = computed(() => favorites.size)

  function isFavorite(id: string) {
    return favorites.has(id)
  }

  function toggle(id: string) {
    if (favorites.has(id)) favorites.delete(id)
    else favorites.add(id)
    persist(favorites)
  }

  return { isFavorite, toggle, favoriteCount }
}
