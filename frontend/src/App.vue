<template>
  <div class="app-root">
    <RouterView />
  </div>
</template>

<script></script>

<style scoped></style>

<style>
/* Global dark mode – layout uses var(--navbar-*, --sidebar-*) */
html.dark-mode {
  --navbar-bg: #1f2937;
  --navbar-border: #374151;
  --navbar-hover: #374151;
  --navbar-fg: #f3f4f6;
  --sidebar-bg: #111827;
  --sidebar-border: #374151;
  --sidebar-fg: #f9fafb;
  --sidebar-link: #d1d5db;
  --sidebar-link-active: #fff;
  --sidebar-hover: #374151;
  --sidebar-active-bg: #374151;
}
html.dark-mode .app-root,
html.dark-mode body {
  background: #111827;
  color: #f3f4f6;
}
html.dark-mode .btn {
  background: #374151;
  color: #f3f4f6;
  border-color: #4b5563;
}
html.dark-mode .btn:hover {
  background: #4b5563;
}
</style>
