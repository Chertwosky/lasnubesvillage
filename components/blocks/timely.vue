<template>
  <section class="timely">
    <div class="timely__container">
      <img :src="CloudSvg" alt="Облако" class="timely__container-reel" draggable="false" />
      <div class="timely__container_block">
        <h3 class="timely__container_block-title">Упс…</h3>
        <p class="timely__container_block-text">
          Страница «о нас» в разработке. Скоро вас порадуем!
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
  margin: clamp(48px, 12vw, 128px) auto 0;
  position: relative;
  max-width: var(--container-width);
  padding: 0 clamp(16px, 6vw, 40px);
}

.timely__container {
  position: relative;
  width: 100%;
  max-width: clamp(320px, 80vw, 640px);
}

.timely__container-reel {
  width: 100%;
  height: auto;
  display: block;
}

.timely__container_block {
  position: absolute;
  inset: 50% auto auto 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: var(--black-color);
  padding: clamp(12px, 4vw, 28px);
  max-width: clamp(240px, 70%, 380px);
  backdrop-filter: blur(4px);
}

.timely__container_block-title {
  font-size: clamp(36px, 7vw, 64px);
  font-weight: var(--font-weight-normal);
  font-family: var(--font-secondary);
  margin: 0;
}

.timely__container_block-text {
  font-size: clamp(16px, 2.6vw, 22px);
  margin: clamp(12px, 2.6vw, 24px) auto;
  font-family: var(--font-main);
  line-height: 1.5;
}

.timely__container_block-btn {
  display: inline-flex;
  justify-content: center;
  padding: clamp(8px, 1.8vw, 14px) clamp(28px, 6vw, 56px);
  background: var(--green-color);
  color: var(--white-color);
  border-radius: var(--border-radius-container);
  text-decoration: none;
  font-weight: var(--font-weight-bold);
  font-family: var(--font-core);
  font-size: clamp(16px, 2.4vw, 20px);
  transition: transform 0.2s ease, background 0.2s ease;
}

.timely__container_block-btn:hover {
  transform: translateY(-2px);
}

@media (max-width: 640px) {
  .timely__container_block {
    max-width: 100%;
    padding: clamp(12px, 5vw, 24px);
  }
}

@media (max-width: 480px) {
  .timely__container_block-title {
    font-size: clamp(28px, 10vw, 40px);
  }

  .timely__container_block-btn {
    width: min(260px, 100%);
  }
}
</style>
