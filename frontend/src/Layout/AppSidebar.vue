<template>
  <aside class="sidebar">
    <div class="logo">WMS</div>
    <nav class="sidebar-nav">
      <RouterLink to="/dashboard">Dashboard</RouterLink>
      <RouterLink to="/products">Products</RouterLink>
      <RouterLink to="/inventory">Inventory</RouterLink>
      <RouterLink to="/branches">Branches</RouterLink>
      <RouterLink to="/employees">Employees</RouterLink>
      <RouterLink to="/suppliers">Suppliers</RouterLink>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 14rem;
  flex-shrink: 0;
  background: var(--sidebar-bg, #f9fafb);
  border-right: 1px solid var(--sidebar-border, #e5e7eb);
  padding: 1rem 0;
  transition: width 0.2s ease, margin 0.2s ease;
}
.sidebar--collapsed {
  width: 0;
  min-width: 0;
  overflow: hidden;
  padding: 0;
  border-right-width: 0;
}
.logo {
  padding: 0 1rem 1rem;
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--sidebar-fg, #111827);
  white-space: nowrap;
}
.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.sidebar-nav a {
  padding: 0.5rem 1rem;
  color: var(--sidebar-link, #374151);
  text-decoration: none;
  border-radius: 0 6px 6px 0;
  white-space: nowrap;
}
.sidebar-nav a:hover {
  background: var(--sidebar-hover, #f3f4f6);
  color: var(--sidebar-link-active, #111827);
}
.sidebar-nav a.router-link-active {
  background: var(--sidebar-active-bg, #e5e7eb);
  color: var(--sidebar-link-active, #111827);
  font-weight: 500;
}
</style>
