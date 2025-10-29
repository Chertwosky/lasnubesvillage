<template>
    <section class="sky">
        <img :src="Sky" alt="Небо" class="sky__reel" draggable="false" />
        <div class="sky__wrap">
            <SectionBadge
                label="Las Nubes Village"
                gradient="linear-gradient(90deg, rgba(12, 18, 42, 0.85) 0%, rgba(32, 48, 102, 0.85) 100%)"
            />
            <div class="sky__wrap_block">
                <img :src="Logo" alt="Лого" class="sky__wrap_block_reel" draggable="false" />
                <span class="sky__wrap_block_text">Там, где горы встречают облака</span>
            </div>
        </div>
    </section>
  </template>

  <script setup>
  import Sky from '@/assets/images/core/sky/sky.svg'
  import Logo from '@/assets/images/core/sky/logo.svg'
  import SectionBadge from '@/components/core/SectionBadge.vue'
  </script>

  <style scoped>

  .sky {
    position: relative;
    margin: 36px 0 0 0;
  }

  .sky__reel {
    width: 100%;
    max-height: 620px;
    object-fit: cover;
    display: block;
  }

  .sky__wrap {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 32px;
    max-width: var(--container-width);
    width: 100%;
    margin: 0 auto;
    padding: clamp(24px, 6vw, 60px) clamp(20px, 6vw, 80px);
    box-sizing: border-box;
  }

  .sky__wrap_block {
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: flex-start;
  }

  .sky__wrap_block_reel {
    width: clamp(140px, 18vw, 220px);
  }

  .sky__wrap_block_text {
    font-family: var(--font-secondary);
    font-size: clamp(32px, 4.5vw, 60px);
    color: var(--white-color);
    line-height: 1.1;
    text-transform: uppercase;
    max-width: 440px;
    letter-spacing: var(--letter-spacing-minus);
  }

  @media (max-width: 1024px) {
    .sky {
      margin-top: 24px;
    }

    .sky__wrap {
      padding: clamp(20px, 8vw, 48px) clamp(20px, 8vw, 60px);
      gap: 24px;
    }
  }

  @media (max-width: 768px) {
    .sky__wrap {
      align-items: flex-start;
      padding-bottom: 36px;
      gap: 20px;
    }

    .sky__wrap_block {
      gap: 16px;
    }

    .sky__wrap_block_text {
      font-size: clamp(26px, 6vw, 42px);
      max-width: 320px;
    }
  }

  @media (max-width: 540px) {
    .sky__reel {
      max-height: 440px;
    }

    .sky__wrap {
      padding: 16px 16px 28px;
    }

    .sky__wrap_block_reel {
      width: 120px;
    }

    .sky__wrap_block_text {
      font-size: clamp(22px, 7vw, 34px);
      letter-spacing: 0;
    }
  }


  </style>
