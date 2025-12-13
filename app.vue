<script setup>
import AppHeader from '@/components/core/header.vue'
import AppFooter from '@/components/core/footer.vue'
import BookingModal from '@/components/blocks/BookingModal.vue'
import RulesModal from '@/components/blocks/RulesModal.vue'
import PromoSlider from '@/components/blocks/PromoSlider.vue'
import '@/assets/styles/global.css'
import { useHead } from '#imports'

const YM_ID = 105754948

useHead({
  script: [
    // Bnovo
    {
      src: '//widget.reservationsteps.ru/js/bnovo.js',
      defer: true
    },

    // Yandex.Metrika
    {
      key: 'yandex-metrika-init',
      type: 'text/javascript',
      innerHTML: `
        (function(m,e,t,r,i,k,a){
          m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}
          m[i].l=1*new Date()
          for (var j = 0; j < document.scripts.length; j++) {
            if (document.scripts[j].src === r) { return }
          }
          k=e.createElement(t)
          a=e.getElementsByTagName(t)[0]
          k.async=1
          k.src=r
          a.parentNode.insertBefore(k,a)
        })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym')

        ym(${YM_ID}, 'init', {
          ssr: true,
          webvisor: true,
          clickmap: true,
          ecommerce: 'dataLayer',
          accurateTrackBounce: true,
          trackLinks: true
        })
      `
    }
  ],
  noscript: [
    {
      key: 'yandex-metrika-noscript',
      children: '<div><img src="https://mc.yandex.ru/watch/105754948" style="position:absolute; left:-9999px;" alt="" /></div>'
    }
  ],
  // чтобы Nuxt не вырезал innerHTML
  __dangerouslyDisableSanitizersByTagID: {
    'yandex-metrika-init': ['innerHTML'],
    'yandex-metrika-noscript': ['innerHTML']
  }
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
    <BookingModal />
    <RulesModal />
  </div>
</template>

<style scoped>
</style>
