<template>
  <div class="app-layout">
    <AppSidebar :class="{ 'sidebar--collapsed': !sidebarOpen }" />
    <div class="main-content">
      <AppNavbar @toggle-sidebar="sidebarOpen = !sidebarOpen" />
      <div class="page-content">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppSidebar from './AppSidebar.vue'
import AppNavbar from './AppNavbar.vue'

const sidebarOpen = ref(true)
</script>

<style scoped>
.app-layout {
  display: flex;
  min-height: 100vh;
}
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}
.page-content {
  flex: 1;
  padding: 1rem;
}
</style>
