import { ref } from 'vue'

const STORAGE_KEY = 'wms-theme-dark'

function getInitialDark() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored === 'true'
  } catch {
    return false
  }
}

const isDark = ref(getInitialDark())

function applyTheme(dark) {
  const html = document.documentElement
  html.classList.toggle('dark-mode', dark)
  html.classList.toggle('dark', dark)
}

// Apply on load so no flash of wrong theme
applyTheme(isDark.value)

export function useTheme() {
  const setTheme = (dark) => {
    isDark.value = dark
    localStorage.setItem(STORAGE_KEY, dark)
    applyTheme(dark)
  }
  const toggleTheme = () => setTheme(!isDark.value)
  return {
    isDark,
    toggleTheme,
    setTheme,
  }
}
