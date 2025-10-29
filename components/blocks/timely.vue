<template>
    <section class="timely">
      <h2
        class="section-badge section-badge--fade"
        style="--badge-bg: linear-gradient(90deg, #1b0638 0%, #5b31a3 100%); --badge-min-w: 320px;"
      >
        О нас
      </h2>
      <div class="timely__container">
        <!-- Большое центральное облако -->
        <img :src="CloudSvg" alt="Дом" class="timely__container-reel" draggable="false" />
        <!-- Контент -->
        <div class="timely__container_block">
          <h3 class="timely__container_block-title">Упс..</h3>
          <p class="timely__container_block-text">
           Страница "о нас" в разработке. Скоро вас порадуем!
          </p>
          <NuxtLink to="/" class="timely__container_block-btn">На главную</NuxtLink>
        </div>
      </div>
         <!-- Декоративные облака -->
         <Cloud width="156px" top="0px" left="20px" />
        <Cloud width="118px" top="-30px" right="98px" />
        <Cloud width="118px" bottom="0px" left="166px" />
        <Cloud width="161px" bottom="-30px" right="39px" />
    </section>
  </template>
  <script setup>
  import CloudSvg from '@/assets/images/core/error/cloud.svg'
  import Cloud from '@/components/blocks/Cloud.vue'
  </script>
<style scoped>
.timely {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 50px auto 0 auto;
  position: relative;
  max-width: var(--container-width);
  padding: 0 20px;
  gap: 32px;
}
.timely__container {
  position: relative;
  width: 100%;
  max-width: 663px; /* фиксированный размер */
  align-self: center;
}
.timely__container-reel {
  width: 100%;
  height: 500px;       /* задаём высоту */
  object-fit: cover;   /* обрезает картинку, сохраняя пропорции */
  display: block;
  margin: 0 auto;
}
.timely__container_block {
  position: absolute;
  top: 43%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: var(--black-color);
  padding: 1rem;
}
.timely__container_block-title {
  font-size: calc(var(--fontsize-large)*4);
  font-weight: var(--font-weight-normal);
  font-family: var(--font-secondary);
  margin: 0;
}
.timely__container_block-text {
  font-size: var(--fontsize-medium);
  margin: 11px 0 21px;
  font-family: var(--font-main);
  max-width: 294px;
  line-height: var(--fontheight-main);
}
.timely__container_block-btn {
  display: inline-block;
  padding: 4px 58px;
  background: var(--green-color);
  color: var(--white-color);
  border-radius: var(--border-radius-container);
  text-decoration: none;
  font-weight: var(--font-weight-bold);
  transition: background 0.2s ease;
  font-family: var(--font-core);
}
.timely__container_block-btn:hover {
  background: #2980b9;
}

@media (max-width: 768px) {
  .timely {
    padding: 0 16px;
  }

  .timely__container-reel {
    height: auto;
  }

  .timely__container_block {
    top: 45%;
  }

  .timely__container_block-title {
    font-size: calc(var(--fontsize-large) * 2.4);
  }

  .timely__container_block-text {
    font-size: var(--fontsize-primary);
  }
}

@media (max-width: 540px) {
  .timely {
    padding: 0 12px;
  }

  .timely__container {
    max-width: 420px;
  }

  .timely__container_block {
    top: 48%;
  }

  .timely__container_block-title {
    font-size: calc(var(--fontsize-large) * 1.6);
  }

  .timely__container_block-text {
    font-size: var(--fontsize-secondary);
  }

  .timely__container_block-btn {
    padding: 6px 32px;
    font-size: var(--fontsize-primary);
  }
}
</style>
