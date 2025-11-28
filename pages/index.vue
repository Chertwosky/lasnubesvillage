<template>
    <div>
      <main class="home-main">
        <Sky />
        <Produce />
        <Advantages />
        <Villages />
        <Rebate />
        <YandexWidgets />
      </main>
    </div>
  </template>

  <script setup>
  import Produce from '~/components/blocks/produce.vue';
  import Advantages from '~/components/blocks/advantages.vue';
  import Sky from '~/components/blocks/sky.vue';
  import Villages from '~/components/blocks/villages.vue';
  import Rebate from '~/components/blocks/rebate.vue';
  import YandexWidgets from '~/components/blocks/yandex-widgets.vue';

  useHead({
    title: 'Посуточная аренда гостевых домов в Адыгее | Las Nubes Village',
    meta: [
      {
        name: 'description',
        content: 'Посуточное бронирование домов A-frame  в Адыгее, поселок Каменомостский.'
      },
      // опционально — мета для соцсетей
      { property: 'og:title', content: 'Посуточная аренда гостевых домов в Адыгее | Las Nubes Village' },
      { property: 'og:description', content: 'Посуточное бронирование домов A-frame  в Адыгее, поселок Каменомостский.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://lasnubesvillage.ru/' },
      { name: 'twitter:card', content: 'summary_large_image' }
    ],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          "name": "Las Nubes Village",
          "description": "Посуточное бронирование домов A-frame  в Адыгее, поселок Каменомостский.",
          "image": "https://lasnubesvillage.ru/preview.jpg",
          "url": "https://lasnubesvillage.ru",
          "telephone": "+7-922-423-20-70",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Каменомостский",
            "addressRegion": "Адыгея",
            "addressCountry": "RU"
          },
          "priceRange": "5000-10000 RUB"
        })
      }
    ]
  })
  </script>

  <style>
  .home-main > * {
    margin: 20px 0;
  }
  </style>
