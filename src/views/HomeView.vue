<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="content">
    <h1 class="page-title">hii, OwO wewcome UwU t-to my own w-website!!11</h1>
    <RouterLink to="/projects" class="btn">View pwojects</RouterLink>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.btn {
  background-color: var(--vt-c-black-soft);
  color: var(--color-text);
  box-shadow: 0 0 15px var(--vt-c-black-soft);
  font-weight: 500;
  padding: 14px;
  transition: all .3s ease;
}

.btn:hover {
  color: var(--color-accent);
  background-color: var(--vt-c-black-mute);
}

.btn:hover {
  scale: var(--logo-scale);
}

</style>