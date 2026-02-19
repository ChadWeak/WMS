<template>
  <header class="navbar">
    <div class="navbar-left">
      <button
        type="button"
        class="navbar-toggle"
        aria-label="Toggle sidebar"
        @click="$emit('toggle-sidebar')"
      >
        <span class="navbar-toggle-bar"></span>
        <span class="navbar-toggle-bar"></span>
        <span class="navbar-toggle-bar"></span>
      </button>
    </div>
    <div class="navbar-right">
      <button type="button" class="btn-icon" @click="toggleTheme">
        {{ isDark ? 'Light Mode' : 'Dark Mode' }}
      </button>
      <span class="navbar-user">{{ authStore.getUser?.name ?? 'User' }}</span>
      <button type="button" class="btn" @click="handleLogout">Logout</button>
    </div>
  </header>
</template>

<script setup>
import { useAuthStore } from '../stores/auth.js'
import { useRouter } from 'vue-router'
import { useTheme } from '../Composables/useTheme.js'

const { isDark, toggleTheme } = useTheme()

const authStore = useAuthStore()
const router = useRouter()

defineEmits(['toggle-sidebar'])

const handleLogout = () => {
  authStore.logout()
  router.push({ name: 'login' })
}
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3.5rem;
  padding: 0 1rem;
  background: var(--navbar-bg, #fff);
  border-bottom: 1px solid var(--navbar-border, #e5e7eb);
  flex-shrink: 0;
}
.navbar-left,
.navbar-right {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.navbar-toggle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 2.25rem;
  height: 2.25rem;
  padding: 0.25rem;
  background: transparent;
  border: 1px solid var(--navbar-border, #e5e7eb);
  border-radius: 6px;
  cursor: pointer;
}
.navbar-toggle:hover {
  background: var(--navbar-hover, #f3f4f6);
}
.navbar-toggle-bar {
  display: block;
  height: 2px;
  background: var(--navbar-fg, #374151);
  border-radius: 1px;
}
.btn {
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  background: #fff;
  cursor: pointer;
}
.btn:hover {
  background: #f9fafb;
}
.btn-icon {
  padding: 0.25rem 0.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.25rem;
}
.navbar-user {
  font-size: 0.875rem;
  color: var(--navbar-fg, #374151);
}
</style>
