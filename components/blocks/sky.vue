<template>
  <section class="sky">
    <img :src="Sky" alt="Небо" class="sky__reel" draggable="false" />
    <div class="sky__wrap">
      <div class="sky__wrap_block">
        <img :src="Logo" alt="Логотип Las Nubes Village" class="sky__wrap_block_reel" draggable="false" />
        <span class="sky__wrap_block_text">Там, где горы встречают облака</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import Sky from '@/assets/images/core/sky/sky.svg'
import Logo from '@/assets/images/core/sky/logo.svg'
</script>

<style scoped>
.sky {
  position: relative;
  margin: clamp(40px, 8vw, 96px) 0 0;
  width: 100%;
}

.sky__reel {
  width: 100%;
  height: clamp(320px, 60vw, 640px);
  object-fit: cover;
  display: block;
}

.sky__wrap {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: var(--container-width);
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
  padding: clamp(16px, 5vw, 48px);
  pointer-events: none;
}

.sky__wrap_block {
  display: flex;
  align-items: center;
  gap: clamp(16px, 4vw, 36px);
  background: rgba(0, 0, 0, 0.35);
  border-radius: var(--border-radius-container);
  padding: clamp(16px, 3.5vw, 40px);
  backdrop-filter: blur(6px);
  pointer-events: auto;
}

.sky__wrap_block_reel {
  width: clamp(90px, 14vw, 220px);
  height: auto;
}

.sky__wrap_block_text {
  font-family: var(--font-secondary);
  font-size: clamp(22px, 6vw, 54px);
  color: var(--white-color);
  max-width: clamp(220px, 40vw, 360px);
  line-height: 1.15;
}

@media (max-width: 960px) {
  .sky__wrap {
    justify-content: center;
    padding: clamp(20px, 8vw, 40px);
  }

  .sky__wrap_block {
    text-align: center;
  }
}

@media (max-width: 640px) {
  .sky__wrap_block {
    flex-direction: column;
    gap: clamp(12px, 6vw, 20px);
  }

  .sky__wrap_block_text {
    font-size: clamp(18px, 7vw, 32px);
  }
}
</style>
