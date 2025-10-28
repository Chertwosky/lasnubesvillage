<template>
  <section class="sky">
    <div class="sky__media">
      <img :src="Sky" alt="Небо" class="sky__image" draggable="false" />
      <div class="sky__content">
        <img :src="Logo" alt="Лого" class="sky__logo" draggable="false" />
        <span class="sky__tagline">Там, где горы встречают облака</span>
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
  margin: 50px auto 0 auto;
  padding: 0 var(--page-gutter);
}

.sky__media {
  position: relative;
  border-radius: 32px;
  overflow: hidden;
  max-width: 1280px;
  margin: 0 auto;
}

.sky__image {
  width: 100%;
  height: clamp(320px, 55vw, 620px);
  object-fit: cover;
  display: block;
}

.sky__content {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: clamp(24px, 7vw, 80px);
  gap: clamp(12px, 2vw, 24px);
  background: linear-gradient(90deg, rgba(0, 16, 37, 0.1) 0%, rgba(0, 16, 37, 0.45) 55%, rgba(0, 16, 37, 0.6) 100%);
}

.sky__logo {
  width: clamp(120px, 18vw, 260px);
  height: auto;
}

.sky__tagline {
  font-family: var(--font-secondary);
  font-size: clamp(22px, 3vw, 48px);
  color: var(--white-color);
  max-width: clamp(240px, 30vw, 420px);
  text-align: right;
  line-height: 1.2;
}

@media (max-width: 900px) {
  .sky__content {
    align-items: flex-start;
    text-align: left;
    background: linear-gradient(90deg, rgba(0, 16, 37, 0.65) 0%, rgba(0, 16, 37, 0.5) 45%, rgba(0, 16, 37, 0.3) 100%);
  }

  .sky__tagline {
    text-align: left;
  }
}

@media (max-width: 640px) {
  .sky {
    padding: 0 var(--page-gutter);
  }

  .sky__media {
    border-radius: 24px;
  }

  .sky__content {
    padding: clamp(20px, 10vw, 48px);
    align-items: flex-start;
  }

  .sky__logo {
    width: clamp(90px, 24vw, 180px);
  }

  .sky__tagline {
    font-size: clamp(20px, 6vw, 32px);
    max-width: 100%;
  }
}
</style>
