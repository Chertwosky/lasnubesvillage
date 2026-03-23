<template>
    <div>
        <main>
            <Heading />
            <section class="cottages-intro">
              <p class="cottages-intro__lead">Три авторских A-frame дома в горах Адыгеи</p>
              <h1 class="cottages-intro__title">Выберите настроение вашего отдыха</h1>
              <p class="cottages-intro__text">
                Каждый домик отличается атмосферой и интерьером, но в любом вас ждут панорамные виды,
                продуманная комплектация и комфорт до 6 гостей.
              </p>
            </section>
            <Bungalos />
            <Activities />
        </main>
    </div>
</template>

<script setup>
import Bungalos from '~/components/blocks/bungalos.vue';
import Heading from '~/components/blocks/heading.vue';
import Activities from '~/components/blocks/activities.vue';

useHead({
  title: 'Коттеджи A-frame. Адыгея | Las Nubes Village',
  meta: [
    {
      name: 'description',
      content: 'Три коттеджа A-frame в Адыгее: Сансет, Ультрамарин и Эмеральд. Комфортное размещение до 6 гостей и бронирование напрямую.'
    }
  ]
})
</script>


<style scoped>
.cottages-intro {
  max-width: var(--container-width);
  margin: 24px auto 0;
  padding: 0 var(--container-padding);
  text-align: center;
  color: var(--white-color);
}

.cottages-intro__lead {
  margin: 0;
  font-size: 16px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--faded-color);
}

.cottages-intro__title {
  margin: 8px 0 16px;
  font-family: var(--font-secondary);
  font-size: clamp(38px, 6vw, 64px);
  line-height: 0.95;
  text-transform: uppercase;
}

.cottages-intro__text {
  margin: 0 auto;
  max-width: 760px;
  font-size: clamp(16px, 2.1vw, 24px);
  line-height: 1.5;
}

@media (max-width: 768px) {
  .cottages-intro {
    margin-top: 18px;
    text-align: left;
  }

  .cottages-intro__title {
    line-height: 1.05;
  }

  .cottages-intro__text {
    margin: 0;
  }
}
</style>
