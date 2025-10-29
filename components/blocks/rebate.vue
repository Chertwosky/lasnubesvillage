<template>
    <section class="rebate" id="stocks">
      <div class="rebate__intro">
        <SectionBadge
          label="Акции"
          align="center"
          gradient="linear-gradient(90deg, rgba(80, 27, 71, 0.95) 0%, rgba(159, 47, 115, 0.95) 100%)"
        />
        <h2 class="rebate__intro_title">Выгодные предложения для гостей</h2>
      </div>

      <div class="rebate__cards">
        <article v-for="(item, index) in items" :key="index" class="rebate-card">
          <div class="rebate-card__badge">{{ item.label }}</div>
          <img :src="item.img" :alt="item.label" class="rebate-card__image" draggable="false" />
          <p class="rebate-card__text">{{ item.text }}</p>
        </article>
      </div>

      <Cloud width="120px" top="-60px" left="6%" />
      <Cloud width="118px" top="0px" right="28%" />
      <Cloud width="118px" bottom="-21%" left="22%" />
      <Cloud width="96px" bottom="-23%" right="29%" flipped />
    </section>
  </template>

  <script setup>
  import Cloud from '@/components/blocks/Cloud.vue'
  import SectionBadge from '@/components/core/SectionBadge.vue'
  import Burthday from '@/assets/images/core/rebate/burthday.svg'
  import Feedback from '@/assets/images/core/rebate/feedback.svg'
  import Bathhouse from '@/assets/images/core/rebate/bathhouse.svg'

  const items = [
    {
      img: Burthday,
      label: '-10%',
      text: 'Скидка 10% в день рождения или годовщину свадьбы',
    },
    {
      img: Feedback,
      label: '-10%',
      text: 'Дарим 10% скидку на следующий заезд за отзыв на Яндекс.Картах',
    },
    {
      img: Bathhouse,
      label: 'Баня',
      text: 'Бесплатное посещение бани при бронировании от трёх ночей',
    },
  ]
  </script>

  <style scoped>
  .rebate {
    margin: 60px auto 0 auto;
    max-width: var(--container-width);
    padding: 0 20px 80px;
    position: relative;
  }

  .rebate__intro {
    text-align: center;
    margin-bottom: 48px;
  }

  .rebate__intro_title {
    margin: 0;
    color: var(--white-color);
    font-size: calc(var(--fontsize-large) * 1.3);
    font-family: var(--font-secondary);
  }

  .rebate__cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    position: relative;
    z-index: 1;
  }

  .rebate-card {
    position: relative;
    background: rgba(10, 35, 82, 0.9);
    border-radius: 24px;
    padding-bottom: 24px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-shadow: 0 18px 45px rgba(8, 23, 52, 0.35);
  }

  .rebate-card__badge {
    position: absolute;
    top: 0;
    left: 0;
    margin: 20px 0 0 20px;
    min-width: 88px;
    height: 46px;
    background-color: var(--green-color);
    border-radius: var(--border-radius-container) 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white-color);
    font-size: var(--fontsize-medium);
    text-transform: uppercase;
    font-family: var(--font-secondary);
    z-index: 2;
    pointer-events: none;
  }

  .rebate-card__image {
    width: 100%;
    height: 220px;
    object-fit: cover;
  }

  .rebate-card__text {
    margin: 24px 24px 0;
    color: var(--white-color);
    font-size: var(--fontsize-unusual);
    font-family: var(--font-main);
    line-height: 1.35;
  }

  @media (max-width: 1024px) {
    .rebate {
      padding: 0 16px 72px;
    }

    .rebate-card__badge {
      margin-left: 16px;
      margin-top: 16px;
    }

    .rebate-card__image {
      height: 200px;
    }
  }

  @media (max-width: 640px) {
    .rebate {
      padding: 0 12px 60px;
    }

    .rebate-card__badge {
      height: 36px;
      min-width: 72px;
      font-size: var(--fontsize-secondary);
    }

    .rebate-card__image {
      height: 180px;
    }

    .rebate-card__text {
      font-size: var(--fontsize-primary);
      margin: 20px;
      text-align: center;
    }
  }
  </style>
