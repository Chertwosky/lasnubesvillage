<template>
    <div class="page-wrapper">
        <AppHeader />

      <main class="page-content">
        <NuxtPage />
        <Err_404 />
      </main>
      <AppFooter />
    </div>
  </template>


<script setup>
import Err_404 from '~/components/blocks/err_404.vue';
import AppHeader from '@/components/core/header.vue'
  import AppFooter from '@/components/core/footer.vue'
  import '@/assets/styles/global.css'
</script>

<style scoped>

</style>
