<template>
    <div>
       <main>
        <Amenities />
        <Chan />
        <Bath />
        <Partners />
        <Optionally />
        <Pleasantly />
     </main>



     </div>
   </template>

<script setup>
import Amenities from '~/components/blocks/amenities.vue';
import Chan from '~/components/blocks/chan.vue';
import Bath from '~/components/blocks/bath.vue';
import Partners from '~/components/blocks/partners.vue';
import Optionally from '~/components/blocks/optionally.vue';
import Pleasantly from '~/components/blocks/pleasantly.vue';

useHead({
  title: 'Дополнительные услуги для отдыха в Адыгее | Las Nubes Village',
  meta: [
    {
      name: 'description',
      content: 'Разнообразьте свой отдых дополнив его нашими услугами и услугами наших партнеров. Посуточное бронирование домов A-frame  в Адыгее, поселок Каменомостский.'
    }
  ]
})
</script>


<style scoped>

</style>
