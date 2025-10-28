<template>
    <section class="rebate" id="stocks">
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
            <div
              v-for="(item, index) in items"
              :key="index"
              class="rebate__wrap_block"
              :style="{ width: slideWidth + 'px' }"
            >
              <div class="rebate__wrap_block_rct">
                <p>{{ item.label }}</p>
              </div>
              <img :src="item.img" :alt="item.label" class="rebate__wrap_block_reel" draggable="false" />
              <span class="rebate__wrap_block_text">{{ item.text }}</span>
            </div>
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
      label: '-10%',
      text: 'В день рождения или годовщину свадьбы дарим скидку 15%',
    },
    {
      img: Feedback,
      label: '-10%',
      text: 'За отзывы на яндекс картах дарим 10% скидку на следующий заезд',
    },
    {
      img: Bathhouse,
      label: 'Баня',
      text: 'При бронировании от 3 дней предоставляется разовое бесплатное посещение бани',
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
  .rebate {
    margin: clamp(32px, 7vw, 70px) auto 0 auto;
    max-width: min(var(--container-width), 100%);
    padding: 0 var(--container-padding);
    position: relative;
  }

  .rebate__wrap {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    margin: 0 auto;
  }

  .rebate__wrap_view {
    overflow: hidden;
    width: 100%;
  }

  .rebate__wrap_inner {
    display: flex;
    transition: transform 0.5s ease;
    gap: clamp(18px, 4vw, 32px);
    padding-block: clamp(8px, 2vw, 16px);
  }

  .rebate__wrap_block {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: clamp(12px, 2vw, 20px);
    position: relative;
    background: rgba(14, 32, 78, 0.35);
    border-radius: var(--border-radius-container);
    overflow: hidden;
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.25);
  }

  .rebate__wrap_block_rct {
    position: absolute;
    top: clamp(10px, 2vw, 16px);
    left: clamp(10px, 2vw, 16px);
    padding: 6px 16px;
    background-color: var(--green-color);
    min-width: 86px;
    border-radius: var(--border-radius-container);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }

  .rebate__wrap_block_rct p {
    color: var(--white-color);
    font-size: clamp(14px, 1.6vw, 18px);
    text-transform: uppercase;
    margin: 0;
    font-family: var(--font-core);
    letter-spacing: 0.6px;
  }

  .rebate__wrap_block_reel {
    width: 100%;
    height: clamp(200px, 40vw, 260px);
    object-fit: cover;
  }

  .rebate__wrap_block_text {
    color: var(--white-color);
    font-size: clamp(18px, 1.6vw + 12px, 24px);
    text-align: left;
    font-family: var(--font-main);
    line-height: 1.45;
    padding: 0 clamp(18px, 3vw, 28px) clamp(18px, 3vw, 28px);
  }

  .rebate__wrap_arrow {
    position: absolute;
    top: 45%;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 10;
    width: clamp(36px, 7vw, 60px);
    height: clamp(36px, 7vw, 60px);
  }

  .rebate__wrap_arrow.left {
    left: clamp(-12px, -1vw, 0px);
    transform: rotate(180deg) translateY(50%);
  }

  .rebate__wrap_arrow.right {
    right: clamp(-12px, -1vw, 0px);
  }

  @media (max-width: 768px) {
    .rebate {
      text-align: center;
    }

    .rebate__wrap_block_text {
      text-align: center;
    }
  }

  @media (max-width: 540px) {
    .rebate {
      padding-inline: clamp(12px, 5vw, 20px);
    }

    .rebate__wrap_block {
      gap: clamp(8px, 4vw, 16px);
    }

    .rebate__wrap_block_text {
      font-size: clamp(16px, 4vw, 20px);
    }
  }
  </style>
