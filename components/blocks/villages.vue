<template>
    <section class="villages">
      <div class="villages__intro">
        <SectionBadge
          class="villages__badge"
          text="A-frame"
          background="linear-gradient(90deg, #0e0b27 0%, #0a0820 100%)"
        />
        <h2 class="villages__intro_title">Домики с панорамными окнами</h2>
        <p class="villages__intro_text">Выберите дом и познакомьтесь с его атмосферой поближе.</p>
      </div>

      <div class="villages__cards">
        <article
          v-for="card in cards"
          :key="card.title"
          class="villages-card"
        >
          <NuxtLink :to="{ path: '/cottages', hash: card.hash }" class="villages-card__image">
            <img :src="card.img" :alt="card.title" draggable="false" />
          </NuxtLink>
          <div class="villages-card__body">
            <NuxtLink :to="{ path: '/cottages', hash: card.hash }" class="villages-card__title">
              {{ card.title }}
            </NuxtLink>
            <ul class="villages-card__list">
              <li v-for="feature in card.features" :key="feature">{{ feature }}</li>
            </ul>
          </div>
        </article>
      </div>

      <BookingButton customClass="villages__cta">
        Забронировать
      </BookingButton>

      <Cloud width="156px" top="-70px" left="6%" />
      <Cloud width="118px" top="-40px" right="12%" />
      <Cloud width="218px" bottom="32%" left="-4%" />
      <Cloud width="118px" bottom="-10%" left="20%" />
      <Cloud width="161px" bottom="-12%" right="-8%" flipped />
    </section>
  </template>

  <script setup>
  import BookingButton from '@/components/blocks/BookingButton.vue'
  import Cloud from '@/components/blocks/Cloud.vue'
  import SectionBadge from '@/components/core/SectionBadge.vue'
  import SunsetCover from '@/assets/images/core/bungalos/sunset/f37cff56-8dc0-48b1-b924-805859b0349a.jpeg'
  import UltramarineCover from '@/assets/images/core/bungalos/ultramarine/239e530e-6494-423c-be71-bc5f34b144f5.jpeg'
  import EmeraldCover from '@/assets/images/core/bungalos/emerald/028865db-5e35-4f49-a589-c85b1a735da7.jpeg'

  const cards = [
    {
      title: 'SUNSET A-frame',
      hash: '#sunset',
      img: SunsetCover,
      features: ['Панорамные окна и звёздное небо', 'До 6 гостей', 'Уютная терраса с мангалом'],
    },
    {
      title: 'ULTRAMARINE A-frame',
      hash: '#ultramarine',
      img: UltramarineCover,
      features: ['Вид на горы', '2 спальни и гостиная', 'Собственная баня-бочка'],
    },
    {
      title: 'EMERALD A-frame',
      hash: '#emerald',
      img: EmeraldCover,
      features: ['Просторная терраса', 'До 6 гостей', 'Светлая кухня-гостиная'],
    },
  ]
  </script>

  <style scoped>
  .villages {
    margin: 60px auto 0 auto;
    max-width: var(--container-width);
    padding: 0 20px 80px;
    position: relative;
  }

  .villages__intro {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    margin-bottom: 48px;
    gap: 20px;
  }

  .villages__badge {
    margin-bottom: 8px;
  }

  .villages__intro_title {
    margin: 0 0 12px 0;
    color: var(--white-color);
    font-size: calc(var(--fontsize-large) * 1.5);
    font-family: var(--font-secondary);
  }

  .villages__intro_text {
    margin: 0;
    font-size: var(--fontsize-medium);
    color: var(--faded-color);
    font-family: var(--font-main);
  }

  .villages__cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    position: relative;
    z-index: 1;
  }

  .villages-card {
    background: rgba(10, 35, 82, 0.85);
    border-radius: 24px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: 0 18px 45px rgba(8, 23, 52, 0.35);
  }

  .villages-card__image {
    display: block;
    line-height: 0;
  }

  .villages-card__image img {
    width: 100%;
    height: 320px;
    object-fit: cover;
  }

  .villages-card__body {
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .villages-card__title {
    font-family: var(--font-secondary);
    font-size: calc(var(--fontsize-unusual) * 1.3);
    text-transform: uppercase;
    color: var(--white-color);
    text-decoration: none;
    margin: 0;
  }

  .villages-card__list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: var(--faded-color);
    font-family: var(--font-main);
    font-size: var(--fontsize-primary);
  }

  .villages-card__list li {
    position: relative;
    padding-left: 18px;
  }

  .villages-card__list li::before {
    content: '';
    position: absolute;
    top: 7px;
    left: 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--green-color);
  }

  .villages__cta {
    background-color: var(--green-color);
    text-transform: uppercase;
    color: var(--white-color);
    padding: 10px 36px 16px;
    border-radius: var(--border-radius-container);
    font-size: 32px;
    font-family: var(--font-secondary);
    line-height: 1;
    border: none;
    cursor: pointer;
    margin: 48px auto 0;
    display: inline-flex;
  }

  @media (max-width: 1024px) {
    .villages {
      padding: 0 16px 72px;
    }

    .villages-card__image img {
      height: 280px;
    }

    .villages__cta {
      font-size: 26px;
      padding: 10px 28px 14px;
    }
  }

  @media (max-width: 768px) {
    .villages__intro_title {
      font-size: calc(var(--fontsize-large) * 1.2);
    }

    .villages-card__body {
      padding: 20px;
    }
  }

  @media (max-width: 540px) {
    .villages {
      padding: 0 12px 60px;
    }

    .villages-card__image img {
      height: 240px;
    }

    .villages__cta {
      font-size: 20px;
      padding: 10px 22px;
    }
  }
  </style>
