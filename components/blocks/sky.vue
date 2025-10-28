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
  margin: clamp(24px, 6vw, 60px) 0 0 0;
  min-height: clamp(260px, 55vw, 540px);
  display: grid;
  place-items: center;
  overflow: hidden;
  border-radius: clamp(16px, 3vw, 28px);
}

.sky::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(8, 20, 51, 0.05) 0%, rgba(8, 20, 51, 0.55) 100%);
  z-index: 1;
}

.sky__reel {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.sky__wrap {
  position: absolute;
  inset: 0;
  max-width: min(var(--container-width), 100%);
  margin: 0 auto;
  padding: clamp(20px, 6vw, 60px) var(--container-padding);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 2;
}

.sky__wrap_block {
  display: flex;
  align-items: center;
  gap: clamp(16px, 4vw, 40px);
  padding: clamp(14px, 3vw, 32px) clamp(18px, 5vw, 42px);
  border-radius: var(--border-radius-container);
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(6px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.sky__wrap_block_reel {
  width: clamp(120px, 18vw, 220px);
  height: auto;
}

.sky__wrap_block_text {
  font-family: var(--font-secondary);
  font-size: clamp(20px, 4vw, 42px);
  color: var(--white-color);
  max-width: clamp(220px, 40vw, 380px);
  line-height: 1.25;
}

@media (max-width: 768px) {
  .sky__wrap {
    justify-content: center;
  }

  .sky__wrap_block {
    flex-direction: column;
    text-align: center;
  }

  .sky__wrap_block_text {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .sky__wrap_block_reel {
    width: clamp(90px, 24vw, 140px);
  }
}
</style>
