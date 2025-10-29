<template>
    <section class="rebate" id="stocks">
      <OrnamentTitle :fullbleed="true">Акции</OrnamentTitle>
      <p class="rebate__lead">Забронируйте домики Las Nubes Village с дополнительными бонусами и приятными подарками.</p>
      <div class="rebate__wrap">

        <!-- Левая стрелка -->
        <img
          v-if="currentIndex > 0"
          :src="Arrow"
          alt="Стрелка"
          class="rebate__wrap_arrow left"
          @click="prevSlide"
        />

        <!-- Контейнер слайдера -->
        <div class="rebate__wrap_view">
          <div
            class="rebate__wrap_inner"
            :style="{ transform: `translateX(-${currentIndex * (slideWidth + gap)}px)` }"
          >
            <article
              v-for="(item, index) in items"
              :key="index"
              class="rebate__wrap_block"
              :style="{ width: slideWidth + 'px' }"
            >
              <div class="rebate__badge">{{ item.label }}</div>
              <img :src="item.img" :alt="item.label" class="rebate__wrap_block_reel" draggable="false" />
              <h3 class="rebate__wrap_block_title">{{ item.title }}</h3>
              <p class="rebate__wrap_block_text">{{ item.text }}</p>
            </article>
          </div>
        </div>

        <!-- Правая стрелка -->
        <img
          v-if="currentIndex < maxIndex"
          :src="Arrow"
          alt="Стрелка"
          class="rebate__wrap_arrow right"
          @click="nextSlide"
        />
      </div>

      <!-- Облака -->
      <Cloud width="120px" top="-60px" left="6%" />
      <Cloud width="118px" top="0px" right="28%" />
      <Cloud width="118px" bottom="-21%" left="22%" />
      <Cloud width="96px" bottom="-23%" right="29%" flipped />
    </section>
  </template>

  <script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue'
  import Arrow from '@/assets/images/core/optionally/arrow.svg'
  import Burthday from '@/assets/images/core/rebate/burthday.svg'
  import Feedback from '@/assets/images/core/rebate/feedback.svg'
  import Bathhouse from '@/assets/images/core/rebate/bathhouse.svg'
  import Cloud from '@/components/blocks/Cloud.vue'

  const items = [
    {
      img: Burthday,
      label: '-15%',
      title: 'Праздничный заезд',
      text: 'В день рождения или годовщину свадьбы дарим скидку 15% и комплимент от Las Nubes Village.',
    },
    {
      img: Feedback,
      label: '-10%',
      title: 'Спасибо за отзыв',
      text: 'Оставьте отзыв на Яндекс.Картах и получите 10% скидку на следующий заезд.',
    },
    {
      img: Bathhouse,
      label: 'Баня',
      title: 'Прогрев на двоих',
      text: 'При бронировании от 3 дней — разовое бесплатное посещение бани или чана на выбор.',
    },
  ]

  const containerWidth = ref(1160)
  const visibleSlides = ref(3)
  const gap = 30

  const slideWidth = computed(() => {
    return (containerWidth.value - (visibleSlides.value - 1) * gap) / visibleSlides.value
  })

  const currentIndex = ref(0)
  const maxIndex = computed(() => items.length - visibleSlides.value)

  const nextSlide = () => {
    if (currentIndex.value < maxIndex.value) currentIndex.value++
  }
  const prevSlide = () => {
    if (currentIndex.value > 0) currentIndex.value--
  }

  const updateSlides = () => {
    const w = window.innerWidth
    containerWidth.value = Math.min(w * 0.9, 1160)

    if (w <= 800) {
      visibleSlides.value = 1
    } else if (w <= 1028) {
      visibleSlides.value = 2
    } else {
      visibleSlides.value = 3
    }

    if (currentIndex.value > maxIndex.value) currentIndex.value = maxIndex.value
  }

  onMounted(() => {
    updateSlides()
    window.addEventListener('resize', updateSlides)
  })
  onUnmounted(() => {
    window.removeEventListener('resize', updateSlides)
  })
  </script>

  <style scoped>
  :deep(.ornament-title) {
    color: #f0f4ff;
    font-family: var(--font-secondary);
    font-size: 48px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    text-align: center;
  }

  :deep(.ornament-title)::before,
  :deep(.ornament-title)::after {
    filter: brightness(0) invert(1);
    opacity: 0.45;
  }

  .rebate {
    margin: 80px auto 0;
    max-width: var(--container-width);
    padding: 0 20px;
    position: relative;
  }

  .rebate__lead {
    margin: 12px auto 40px;
    max-width: 720px;
    font-family: var(--font-main);
    font-size: var(--fontsize-medium);
    color: #f0f4ff;
    text-align: center;
  }

  .rebate__wrap {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    max-width: 1160px;
    margin: 0 auto;
  }

  .rebate__wrap_view {
    overflow: hidden;
    width: 100%;
  }

  .rebate__wrap_inner {
    display: flex;
    transition: transform 0.5s ease;
    gap: 30px;
  }

  .rebate__wrap_block {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 18px;
    padding: 28px 28px 34px;
    border-radius: 32px;
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 32px 64px rgba(66, 104, 182, 0.25);
    position: relative;
  }

  .rebate__badge {
    align-self: flex-start;
    padding: 6px 18px;
    border-radius: 999px;
    background: linear-gradient(135deg, #93baf8 0%, #7ca4e1 100%);
    color: #2c4c8e;
    font-family: var(--font-core);
    font-size: var(--fontsize-secondary);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .rebate__wrap_block_reel {
    width: 100%;
    height: 220px;
    border-radius: 24px;
    object-fit: cover;
  }

  .rebate__wrap_block_title {
    margin: 0;
    font-family: var(--font-secondary);
    font-size: 28px;
    color: #30519a;
    text-transform: uppercase;
  }

  .rebate__wrap_block_text {
    color: #3f5aa1;
    font-size: var(--fontsize-medium);
    font-family: var(--font-main);
    margin: 0;
  }

  .rebate__wrap_arrow {
    position: absolute;
    top: 45%;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 10;
    width: 52px;
  }

  .rebate__wrap_arrow.left {
    left: -16px;
    transform: rotate(180deg) translateY(50%);
  }

  .rebate__wrap_arrow.right {
    right: -16px;
  }

  @media (max-width: 1024px) {
    .rebate {
      padding: 0 16px;
    }

    .rebate__wrap_block {
      padding: 24px 24px 30px;
    }

    .rebate__wrap_block_reel {
      height: 200px;
    }
  }

  @media (max-width: 768px) {
    .rebate__wrap_arrow {
      width: 42px;
    }

    .rebate__wrap_block_title {
      font-size: 24px;
    }

    .rebate__wrap_block_text {
      font-size: var(--fontsize-primary);
    }
  }

  @media (max-width: 560px) {
    .rebate {
      padding: 0 12px;
    }

    .rebate__wrap {
      padding: 0 8px;
    }

    .rebate__wrap_arrow {
      display: none;
    }

    .rebate__wrap_block {
      padding: 24px 20px;
    }
  }
  </style>
