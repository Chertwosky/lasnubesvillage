<template>
  <section class="amenities">
    <div class="amenities__wrap">
      <div class="amenities__block">
        <p class="amenities__title">Наши услуги</p>
        <p class="amenities__subtitle">Чтобы разнообразить отдых</p>
        <p class="amenities__link" @click="scrollTo('bath')">Баня</p>
        <p class="amenities__link" @click="scrollTo('optionally')">Дополнительно</p>
        <p class="amenities__link" @click="scrollTo('pleasantly')">Бесплатно</p>
        <p class="amenities__description">LAS NUBES VILLAGE — посуточная аренда коттеджей</p>
      </div>
      <div class="amenities__image">
        <img :src="House" alt="Дом" draggable="false" />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import House from '@/assets/images/core/amenities/house.svg'
const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
<style scoped>
.amenities {
  margin: 50px auto 0 auto;
  max-width: var(--container-width);
  padding: 0 var(--page-gutter);
}

.amenities__wrap {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(28px, 6vw, 64px);
  align-items: center;
}

.amenities__block {
  display: flex;
  flex-direction: column;
  gap: clamp(12px, 2.8vw, 24px);
}

.amenities__title {
  font-size: clamp(38px, 6vw, 68px);
  color: var(--white-color);
  font-family: var(--font-secondary);
  margin: 0;
}

.amenities__subtitle {
  font-family: var(--font-main);
  font-size: clamp(18px, 3vw, 24px);
  color: var(--white-color);
}

.amenities__link {
  font-family: var(--font-secondary);
  font-size: clamp(24px, 4vw, 38px);
  color: var(--white-color);
  margin: 0;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.amenities__link:hover {
  opacity: 0.75;
}

.amenities__description {
  font-family: var(--font-secondary);
  color: var(--white-color);
  font-size: clamp(18px, 2.6vw, 24px);
  max-width: 520px;
  margin-top: clamp(18px, 4vw, 36px);
}

.amenities__image img {
  width: 100%;
  max-width: 520px;
  height: auto;
  display: block;
}

@media (max-width: 768px) {
  .amenities__wrap {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .amenities__block {
    align-items: center;
  }

  .amenities__description {
    margin-top: clamp(16px, 6vw, 24px);
  }

  .amenities__image {
    display: flex;
    justify-content: center;
  }
}
</style>
