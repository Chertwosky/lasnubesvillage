<template>
  <section class="timely">
    <div class="timely__container">
      <img :src="CloudSvg" alt="Дом" class="timely__container-reel" draggable="false" />
      <div class="timely__container_block">
        <h3 class="timely__container_block-title">Упс..</h3>
        <p class="timely__container_block-text">
          Страница "о нас" в разработке. Скоро вас порадуем!
        </p>
        <NuxtLink to="/" class="timely__container_block-btn">На главную</NuxtLink>
      </div>
    </div>
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
  padding: 0 var(--page-gutter);
}
.timely__container {
  position: relative;
  width: 100%;
  max-width: 640px;
}
.timely__container-reel {
  width: 100%;
  height: clamp(320px, 60vw, 520px);
  object-fit: cover;
  display: block;
  border-radius: 32px;
}
.timely__container_block {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: var(--black-color);
  padding: clamp(16px, 4vw, 32px);
  background: rgba(255, 255, 255, 0.82);
  border-radius: var(--border-radius-container);
  max-width: min(90%, 360px);
}
.timely__container_block-title {
  font-size: clamp(32px, 8vw, 56px);
  font-weight: var(--font-weight-normal);
  font-family: var(--font-secondary);
  margin: 0;
}
.timely__container_block-text {
  font-size: clamp(16px, 3.6vw, 20px);
  margin: clamp(8px, 3vw, 20px) 0;
  font-family: var(--font-main);
  line-height: 1.4;
}
.timely__container_block-btn {
  display: inline-flex;
  justify-content: center;
  padding: 10px 42px;
  background: var(--green-color);
  color: var(--white-color);
  border-radius: var(--border-radius-container);
  text-decoration: none;
  font-weight: var(--font-weight-bold);
  font-family: var(--font-core);
  font-size: clamp(16px, 3.5vw, 18px);
}

@media (max-width: 768px) {
  .timely {
    padding: 0 var(--page-gutter);
  }

  .timely__container_block {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .timely__container_block {
    padding: clamp(16px, 6vw, 24px);
  }

  .timely__container_block-btn {
    width: 100%;
  }
}
</style>
