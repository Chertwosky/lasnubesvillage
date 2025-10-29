<template>
    <section class="sky">
        <img :src="Sky" alt="Небо" class="sky__background" draggable="false" />
        <div class="sky__content">
            <div class="sky__card">
                <img :src="Logo" alt="Las Nubes Village" class="sky__card_logo" draggable="false" />
                <p class="sky__card_text">Там, где горы встречают облака</p>
            </div>
        </div>
        <Cloud width="210px" bottom="-40px" left="6%" />
        <Cloud width="180px" bottom="-65px" right="4%" flipped />
    </section>
  </template>

  <script setup>
  import Sky from '@/assets/images/core/sky/sky.svg'
  import Logo from '@/assets/images/core/sky/logo.svg'
  import Cloud from '@/components/blocks/Cloud.vue'
  </script>

  <style scoped>

  .sky {
    position: relative;
    margin: 12px auto 0;
    padding: 0 20px;
  }

  .sky__background {
    width: 100%;
    max-width: 1360px;
    max-height: 620px;
    height: auto;
    object-fit: cover;
    border-radius: 48px;
    display: block;
    margin: 0 auto;
    box-shadow: 0 50px 90px rgba(70, 104, 173, 0.32);
  }

  .sky__content {
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    pointer-events: none;
  }

  .sky__card {
    pointer-events: auto;
    display: flex;
    align-items: center;
    gap: 32px;
    margin-top: clamp(160px, 32vw, 260px);
    padding: 28px 48px;
    border-radius: 42px;
    background: linear-gradient(135deg, rgba(74, 104, 190, 0.92) 0%, rgba(132, 92, 194, 0.92) 100%);
    box-shadow: 0 30px 60px rgba(53, 78, 143, 0.35);
  }

  .sky__card_logo {
    width: clamp(82px, 12vw, 136px);
    height: auto;
  }

  .sky__card_text {
    margin: 0;
    font-family: var(--font-secondary);
    font-size: clamp(28px, 4vw, 54px);
    line-height: 1.1;
    color: var(--white-color);
    max-width: 420px;
    text-transform: uppercase;
  }

@media (max-width: 1024px) {
    .sky {
        padding: 0 16px;
    }

    .sky__card {
        margin-top: clamp(120px, 36vw, 220px);
        padding: 22px 32px;
        gap: 24px;
    }
}

@media (max-width: 768px) {
    .sky__card {
        flex-direction: column;
        text-align: center;
        border-radius: 32px;
    }

    .sky__card_text {
        max-width: 100%;
    }
}

@media (max-width: 560px) {
    .sky {
        padding: 0 12px;
    }

    .sky__card {
        margin-top: clamp(80px, 48vw, 180px);
        padding: 18px 22px;
    }
}

  </style>
