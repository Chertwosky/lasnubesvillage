<script setup>
import AppHeader from '@/components/core/header.vue'
import AppFooter from '@/components/core/footer.vue'
import BookingModal from '@/components/blocks/BookingModal.vue'
import '@/assets/styles/global.css'
import { useHead } from '#imports'

// Скрипт bnovo грузим один раз
useHead({
  script: [
    { src: '//widget.reservationsteps.ru/js/bnovo.js', defer: true }
  ]
})
</script>

<template>
  <div class="page-wrapper">
    <AppHeader />

    <main class="page-content">
      <NuxtPage />
    </main>

    <AppFooter />

    <!-- модалка подключается глобально -->
    <BookingModal />
  </div>
</template>

<style scoped>
.page-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.page-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--section-gap);
  padding-bottom: var(--section-gap);
}
</style>
