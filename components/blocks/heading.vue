<template>
  <section class="heading">
    <div class="heading__wrap">
      <div class="heading__block">
        <p class="heading__title">Коттеджи A-frame</p>
        <p class="heading__subtitle"></p>
        <p class="heading__link" @click="scrollTo('sunset')">A-frame SUNSET</p>
        <p class="heading__link" @click="scrollTo('ultramarine')">A-frame ULTRAMARINE</p>
        <p class="heading__link" @click="scrollTo('emerald')">A-frame EMERALD</p>
        <p class="heading__description">LAS NUBES VILLAGE — посуточная аренда коттеджей</p>
      </div>
      <div class="heading__image">
        <img :src="House" alt="Дом" draggable="false" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import House from '@/assets/images/core/heading/house.svg'

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.heading {
  margin: 50px auto 0 auto;
  max-width: var(--container-width);
  padding: 0 var(--page-gutter);
}

.heading__wrap {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(28px, 6vw, 64px);
  align-items: center;
}

.heading__block {
  display: flex;
  flex-direction: column;
  gap: clamp(12px, 2.8vw, 24px);
}

.heading__title {
  font-size: clamp(36px, 6vw, 64px);
  color: var(--white-color);
  font-family: var(--font-secondary);
  margin: 0;
}

.heading__subtitle {
  font-family: var(--font-main);
  font-size: clamp(18px, 3vw, 24px);
  color: var(--white-color);
}

.heading__link {
  font-family: var(--font-secondary);
  font-size: clamp(24px, 4vw, 40px);
  color: var(--white-color);
  margin: 0;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.heading__link:hover {
  opacity: 0.75;
}

.heading__description {
  font-family: var(--font-secondary);
  color: var(--white-color);
  font-size: clamp(18px, 2.6vw, 24px);
  max-width: 520px;
  margin-top: clamp(18px, 4vw, 36px);
}

.heading__image img {
  width: 100%;
  max-width: 520px;
  height: auto;
  display: block;
}

@media (max-width: 768px) {
  .heading__wrap {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .heading__block {
    align-items: center;
  }

  .heading__description {
    margin-top: clamp(16px, 6vw, 24px);
  }

  .heading__image {
    display: flex;
    justify-content: center;
  }
}
</style>
