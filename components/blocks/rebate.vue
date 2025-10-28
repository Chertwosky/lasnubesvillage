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
    margin: 50px auto 0 auto;
    max-width: var(--container-width);
    padding: 50px 20px 0 20px;
    position: relative;
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
    gap: 9px;
    position: relative;
  }

  .rebate__wrap_block_rct {
    position: absolute;
    top: 0;
    left: 0;
    width: fit-content;
    height: 46px;
    background-color: var(--green-color);
    min-width: 86px;
    border-radius: var(--border-radius-container) 0;
    align-items: center;
    display: flex;
    justify-content: center;
    z-index: 1;
  }

  .rebate__wrap_block_rct p {
    color: var(--white-color);
    font-size: var(--fontsize-medium);
    text-transform: uppercase;
    margin: 0;
    font-family: var(--font-core);
  }

  .rebate__wrap_block_reel {
    width: 100%;
    height: 221px;
    border-radius: var(--border-radius-container) var(--border-radius-container) 0 0;
    object-fit: cover;
  }

  .rebate__wrap_block_text {
    color: var(--white-color);
    font-size: var(--fontsize-unusual);
    text-align: left;
    font-family: var(--font-main);
    max-width: 350px;
  }

  .rebate__wrap_arrow {
    position: absolute;
    top: 45%;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 10;
  }

  .rebate__wrap_arrow.left {
    left: 2.5%;
    transform: rotate(180deg) translateY(50%);
  }

  .rebate__wrap_arrow.right {
    right: 0%;
  }

  @media (max-width: 768px) {
    .rebate {
      padding: 50px 16px 0 16px;
    }

    .rebate__wrap_block_rct {
      height: 36px;
      min-width: 72px;
    }

    .rebate__wrap_block_rct p {
      font-size: var(--fontsize-secondary);
    }

    .rebate__wrap_block_reel {
      height: 160px;
    }

    .rebate__wrap_block_text {
      font-size: var(--fontsize-primary);
      text-align: center;
      max-width: 100%;
    }

    .rebate__wrap_arrow {
      width: 44px;
    }
  }

  @media (max-width: 540px) {
    .rebate__wrap {
      padding: 0 8px;
    }

    .rebate__wrap_block_rct {
      height: 32px;
    }

    .rebate__wrap_block_reel {
      height: 140px;
    }

    .rebate__wrap_block_text {
      font-size: var(--fontsize-secondary);
      text-align: center;
    }

    .rebate__wrap_arrow {
      width: 32px;
    }
  }
  </style>
