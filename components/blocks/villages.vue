<template>
    <section class="villages">
      <SectionBadge
        class="villages__badge"
        gradient="linear-gradient(90deg,#0e0b27 0%, #0a0820 100%)"
        align="right"
      >
        А-фреймы
      </SectionBadge>
      <div class="villages__intro text-overlay">
        <h3 class="villages__intro_title">Домики с панорамными окнами</h3>
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

      <Cloud width="156px" top="80px" left="36%" />
      <Cloud width="118px" top="170px" right="12%" />
      <Cloud width="218px" bottom="32%" left="-4%" />
      <Cloud width="118px" bottom="-10%" left="20%" />
      <Cloud width="161px" bottom="-12%" right="-8%" flipped />
    </section>
  </template>

  <script setup>
  import BookingButton from '@/components/blocks/BookingButton.vue'
  import Cloud from '@/components/blocks/Cloud.vue'
  import SectionBadge from '@/components/ui/SectionBadge.vue'

  const galleryImages = import.meta.glob(
    '@/assets/images/core/bungalos/**/*.{png,jpeg,jpg,webp}',
    {
      eager: true,
      import: 'default',
    },
  )

  const getFirstImage = (folderName) =>
    Object.entries(galleryImages)
      .filter(([path]) => path.includes(`/bungalos/${folderName}/`))
      .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
      .map(([, src]) => src)[0]

  const cards = [
    {
      title: 'А-фрейм «Сансет»',
      hash: '#sunset',
      img: getFirstImage('sunset'),
      features: ['Панорамные окна и звёздное небо', 'До 6 гостей', 'Уютная терраса с мангалом'],
    },
    {
      title: 'А-фрейм «Ультрамарин»',
      hash: '#ultramarine',
      img: getFirstImage('ultramarine'),
      features: ['Вид на горы', '2 спальни и гостиная', 'Собственная баня-бочка'],
    },
    {
      title: 'А-фрейм «Эмеральд»',
      hash: '#emerald',
      img: getFirstImage('emerald'),
      features: ['Просторная терраса', 'До 6 гостей', 'Светлая кухня-гостиная'],
    },
  ]
  </script>

  <style scoped>
  .villages {
    margin: 0px auto 0 auto;
    max-width: var(--container-width);
    padding: 0 var(--container-padding) 80px;
    position: relative;
  }

  .villages__badge {
    margin-bottom: 40px;
    --badge-min-w: 240px;
  }

  .villages__intro {
    margin-bottom: 48px;
    text-align: left;
    padding: 24px 28px;
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
      padding: 0 var(--container-padding) 72px;
    }

    .villages-card__image img {
      height: 280px;
    }

    .villages__cta {
      font-size: 26px;
      padding: 10px 28px 14px;
    }

    .villages__intro {
      padding: 20px 22px;
    }
  }

  @media (max-width: 768px) {
    .villages__intro_title {
      font-size: calc(var(--fontsize-large) * 1.2);
    }

    .villages-card__body {
      padding: 20px;
    }

    .villages__intro {
      text-align: left;
      padding: 18px 20px;
    }
  }

  @media (max-width: 540px) {
    .villages {
      padding: 0 var(--container-padding) 60px;
    }

    .villages-card__image img {
      height: 240px;
    }

    .villages__cta {
      font-size: 22px;
      padding: 10px 22px;
      width: 100%;
      justify-content: center;
      text-align: center;
      align-items: center;
    }
  }
  </style>
