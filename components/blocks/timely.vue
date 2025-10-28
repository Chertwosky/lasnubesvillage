<template>
    <section class="timely">
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
  justify-content: center;
  align-items: center;
  margin: clamp(32px, 7vw, 70px) auto 0 auto;
  position: relative;
  max-width: min(var(--container-width), 100%);
  padding: 0 var(--container-padding);
}

.timely__container {
  position: relative;
  width: 100%;
  max-width: clamp(320px, 80vw, 620px);
}

.timely__container-reel {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
  margin: 0 auto;
  border-radius: var(--border-radius-container);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
}

.timely__container_block {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: var(--black-color);
  padding: clamp(16px, 3vw, 28px);
  max-width: clamp(240px, 60vw, 340px);
  background: rgba(255, 255, 255, 0.75);
  border-radius: var(--border-radius-container);
  backdrop-filter: blur(6px);
}

.timely__container_block-title {
  font-size: clamp(48px, 8vw, 72px);
  font-weight: var(--font-weight-normal);
  font-family: var(--font-secondary);
  margin: 0;
}

.timely__container_block-text {
  font-size: clamp(16px, 1.4vw + 12px, 20px);
  margin: clamp(12px, 2vw, 20px) 0 clamp(20px, 3vw, 32px);
  font-family: var(--font-main);
  line-height: 1.5;
}

.timely__container_block-btn {
  display: inline-block;
  padding: clamp(10px, 2vw, 14px) clamp(26px, 4vw, 42px);
  background: var(--green-color);
  color: var(--white-color);
  border-radius: var(--border-radius-container);
  text-decoration: none;
  font-weight: var(--font-weight-bold);
  font-family: var(--font-core);
  font-size: clamp(16px, 1.2vw + 12px, 18px);
}

@media (max-width: 640px) {
  .timely {
    padding-inline: clamp(12px, 5vw, 18px);
  }

  .timely__container {
    max-width: 440px;
  }

  .timely__container_block-title {
    font-size: clamp(36px, 9vw, 52px);
  }
}
</style>
