<template>
    <section class="sky">
        <img
          :src="Sky"
          alt="Небо"
          class="sky__reel"
          draggable="false"
          loading="lazy"
          decoding="async"
        />
        <div class="sky__wrap">
        <div class="sky__wrap_block">
            <img
              :src="Logo"
              alt="Лого"
              class="sky__wrap_block_reel"
              draggable="false"
              loading="lazy"
              decoding="async"
            />
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
    margin: 50px 0 0 0;
  }

  .sky__wrap {
    position: absolute;
    inset: 0;
    max-width: var(--container-width);
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: clamp(16px, 4vw, 80px);
  }

  .sky__reel {
    width: 100%;
    max-height: 620px;
    object-fit: cover;
    display: block;
  }

  .sky__wrap_block {
    display: flex;
    align-items: center;
    gap: clamp(16px, 4vw, 40px);
    background: linear-gradient(118deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0));
    padding: clamp(18px, 3vw, 36px);
    border-radius: var(--border-radius-large);
  }

  .sky__wrap_block_reel {
    width: clamp(120px, 16vw, 260px);
    height: auto;
  }

  .sky__wrap_block_text {
    font-family: var(--font-secondary);
    font-size: clamp(1.75rem, 1.2rem + 2vw, 3rem);
    color: var(--white-color);
    max-width: 380px;
    line-height: 1.2;
  }

@media (max-width: 900px) {
  .sky__wrap {
    justify-content: center;
  }

  .sky__wrap_block {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 600px) {
  .sky {
    margin-top: 24px;
  }

  .sky__wrap {
    padding: 24px;
  }

  .sky__wrap_block_text {
    font-size: clamp(1.5rem, 1.2rem + 3vw, 2.2rem);
  }
}

  </style>
