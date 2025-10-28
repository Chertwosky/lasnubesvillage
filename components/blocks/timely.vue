<template>
    <section class="timely">
      <div class="timely__container">
        <!-- Большое центральное облако -->
        <img :src="CloudSvg" alt="Дом" class="timely__container-reel" draggable="false" loading="lazy" decoding="async" />
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
  justify-content: center;
  align-items: center;
  margin: 50px auto 0 auto;
  position: relative;
  max-width: var(--container-width);
  padding: 0 clamp(16px, 5vw, 24px);
}
.timely__container {
  position: relative;
  width: 100%;
  max-width: 663px;
}
.timely__container-reel {
  width: 100%;
  height: clamp(320px, 58vw, 520px);
  object-fit: cover;
  display: block;
  margin: 0 auto;
  border-radius: var(--border-radius-container);
}
.timely__container_block {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: var(--black-color);
  padding: clamp(12px, 4vw, 24px);
  background: rgba(255, 255, 255, 0.85);
  border-radius: var(--border-radius-container);
  max-width: 90%;
}
.timely__container_block-title {
  font-size: clamp(32px, 6vw, 56px);
  font-weight: var(--font-weight-normal);
  font-family: var(--font-secondary);
  margin: 0;
}
.timely__container_block-text {
  font-size: clamp(16px, 2.4vw, 20px);
  margin: 12px 0 24px;
  font-family: var(--font-main);
  max-width: 320px;
  line-height: 1.5;
  margin-left: auto;
  margin-right: auto;
}
.timely__container_block-btn {
  display: inline-block;
  padding: 8px 48px;
  background: var(--green-color);
  color: var(--white-color);
  border-radius: var(--border-radius-container);
  text-decoration: none;
  font-weight: var(--font-weight-bold);
  transition: filter 0.2s ease;
  font-family: var(--font-core);
  font-size: clamp(16px, 2vw, 18px);
}
.timely__container_block-btn:hover,
.timely__container_block-btn:focus-visible {
  filter: brightness(1.05);
}

@media (max-width: 768px) {
  .timely__container_block {
    top: 50%;
  }
}

@media (max-width: 540px) {
  .timely__container {
    max-width: 420px;
  }

  .timely__container_block {
    padding: 16px;
  }

  .timely__container_block-btn {
    padding: 10px 32px;
  }
}
</style>
