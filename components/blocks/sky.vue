<template>
    <section class="sky">
        <img :src="Sky" alt="Небо" class="sky__reel" draggable="false" loading="lazy" decoding="async" />
        <div class="sky__overlay"></div>
        <div class="sky__wrap">
          <div class="sky__wrap_block">
            <img :src="Logo" alt="Лого" class="sky__wrap_block_reel" draggable="false" loading="lazy" decoding="async" />
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
    overflow: hidden;
  }

  .sky__reel {
    width: 100%;
    max-height: 620px;
    height: clamp(320px, 60vw, 620px);
    object-fit: cover;
    display: block;
  }

  .sky__overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, rgba(0, 11, 38, 0.7) 0%, rgba(0, 11, 38, 0.2) 60%, rgba(0, 0, 0, 0) 100%);
    pointer-events: none;
  }

  .sky__wrap {
    position: absolute;
    inset: 0;
    max-width: var(--container-width);
    margin: 0 auto;
    padding: clamp(24px, 8vw, 80px);
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .sky__wrap_block {
    display: flex;
    align-items: center;
    gap: clamp(16px, 4vw, 48px);
  }

  .sky__wrap_block_reel {
    width: clamp(140px, 16vw, 280px);
    height: auto;
  }

  .sky__wrap_block_text {
    font-family: var(--font-secondary);
    font-size: clamp(26px, 4vw, 54px);
    line-height: 1.2;
    color: var(--white-color);
    max-width: 360px;
  }

  @media (max-width: 900px) {
    .sky__wrap {
      justify-content: center;
      text-align: center;
    }

    .sky__wrap_block {
      flex-direction: column;
    }

    .sky__overlay {
      background: linear-gradient(0deg, rgba(0, 11, 38, 0.6) 0%, rgba(0, 0, 0, 0) 65%);
    }
  }

  @media (max-width: 540px) {
    .sky {
      margin-top: 30px;
    }

    .sky__wrap {
      padding: 32px 20px;
      justify-content: center;
    }

    .sky__wrap_block_text {
      font-size: clamp(22px, 6vw, 32px);
    }
  }


  </style>
