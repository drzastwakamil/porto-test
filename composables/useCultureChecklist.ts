import { reactive, computed } from 'vue'

const STORAGE_KEY = 'porto-weekend:culture-checked'

function loadChecked(): Set<string> {
  if (typeof window === 'undefined') return new Set()
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? new Set(JSON.parse(raw)) : new Set()
  } catch {
    return new Set()
  }
}

function persist(checked: Set<string>) {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...checked]))
  } catch {
    // storage unavailable (private mode / full) — state stays in memory only
  }
}

const checked = reactive(loadChecked())

export function useCultureChecklist() {
  const checkedCount = computed(() => checked.size)

  function isChecked(id: string) {
    return checked.has(id)
  }

  function toggle(id: string) {
    if (checked.has(id)) checked.delete(id)
    else checked.add(id)
    persist(checked)
  }

  return { isChecked, toggle, checkedCount }
}
