<template>
    <section class="sky">
        <img :src="Sky" alt="Небо" class="sky__reel" draggable="false" />
        <div class="sky__wrap">
        <SectionBadge
          class="sky__badge"
          gradient="linear-gradient(90deg,#040213 0%, #0c1240 100%)"
          pad-right="48px"
        >
          Las Nubes Village
        </SectionBadge>
        <div class="sky__wrap_block">
            <span class="sky__wrap_block_text text-overlay">Там, где горы встречают облака</span>
        </div>
    </div>
    </section>
  </template>

  <script setup>
  import { resolveImage } from '@/utils/resolveImage'
  import SectionBadge from '@/components/ui/SectionBadge.vue'

  const Sky = resolveImage('core/sky/sky')
  const Logo = resolveImage('core/sky/logo')
  </script>

  <style scoped>

  .sky {
    position: relative;
    margin: 0px 0 0 0;
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
    align-items: flex-start;
    justify-content: flex-start;
    max-width: var(--container-width);
    width: 100%;
    margin: 0 auto;
    padding: 0 var(--container-padding);
    box-sizing: border-box;
    flex-direction: column;
    gap: 32px;
    padding-top: clamp(380px, 12vw, 160px);
  }

  .sky__badge {
    margin: 0;
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
    display: inline-block;
    font-family: var(--font-secondary);
    font-size: clamp(32px, 4.5vw, 60px);
    color: var(--white-color);
    line-height: 1.1;
    text-transform: uppercase;
    max-width: 440px;
    letter-spacing: var(--letter-spacing-minus);
    padding: 20px 28px;
}

  @media (max-width: 1024px) {
    .sky {
      margin-top: 24px;
    }

    .sky__wrap {
      padding-inline: var(--container-padding);
      gap: 24px;
    }
  }

  @media (max-width: 768px) {
    .sky__wrap {
      align-items: flex-start;
      padding-bottom: 36px;
    }

    .sky__wrap_block {
      gap: 16px;
    }

    .sky__wrap_block_text {
      font-size: clamp(26px, 6vw, 42px);
      max-width: 320px;
      padding: 16px 22px;
    }
  }

  @media (max-width: 540px) {
    .sky__reel {
      max-height: 440px;
    }

    .sky__wrap {
      padding: 0 var(--container-padding) 28px;
      gap: 20px;
    }

    .sky__wrap_block_reel {
      width: 120px;
    }

    .sky__wrap_block_text {
      font-size: clamp(22px, 7vw, 34px);
      letter-spacing: 0;
      padding: 14px 18px;
       margin-top: 40px; /* можешь менять под нужную высоту */
    }
      }


  </style>
