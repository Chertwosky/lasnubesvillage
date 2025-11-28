<script setup>
import AppHeader from '@/components/core/header.vue'
import AppFooter from '@/components/core/footer.vue'
import BookingModal from '@/components/blocks/BookingModal.vue'
import RulesModal from '@/components/blocks/RulesModal.vue'
import PromoSlider from '@/components/blocks/PromoSlider.vue'
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

    <PromoSlider />
    <!-- модалка подключается глобально -->
    <BookingModal />
    <RulesModal />
  </div>
</template>

<style scoped>
</style>
