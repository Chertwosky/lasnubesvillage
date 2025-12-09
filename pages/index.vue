<template>
    <div>
      <main>
                            
<!-- Yandex.Metrika counter -->
<script type="text/javascript">
    (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=105754948', 'ym');

    ym(105754948, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/105754948" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->

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

  <style scoped>
  </style>
