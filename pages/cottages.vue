<template>
    <div>
       <main>
        <Heading />
        <Bungalos />
     </main>



     </div>
   </template>

<script setup>
import Bungalos from '~/components/blocks/bungalos.vue';
import Heading from '~/components/blocks/heading.vue';

useHead({
  title: 'Коттеджи A-frame. Адыгея | Las Nubes Village',
  meta: [
    {
      name: 'description',
      content: 'Посуточное бронирование домов A-frame  в Адыгее, поселок Каменомостский.'
    }
  ]
})
</script>


<style scoped>

</style>
