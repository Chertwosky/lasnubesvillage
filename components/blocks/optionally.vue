<template>
    <section class="optionally" id="optionally">
      <div class="optionally__wrap">
        <h3 class="optionally__wrap_title">Дополнительные услуги</h3>

        <div class="optionally__wrap_carousel" :style="{ maxWidth: containerWidth + 'px' }">
          <!-- Стрелка влево -->
          <img
            v-if="currentIndex > 0"
            :src="Arrow"
            alt="Стрелка"
            class="optionally__wrap_carousel-arrow left"
            @click="prevSlide"
          />

          <!-- Контейнер со слайдами -->
          <div class="optionally__wrap_carousel_view">
            <div
              class="optionally__wrap_carousel_inner"
              :style="{ transform: `translateX(-${currentIndex * (slideWidth + gap)}px)` }"
            >
              <div
                v-for="(item, index) in items"
                :key="index"
                class="optionally__wrap_carousel_block"
                :style="{ width: slideWidth + 'px' }"
              >
                <img
                  :src="item.img"
                  :alt="item.title"
                  class="optionally__wrap_carousel_block-reel"
                  draggable="false"
                />
                <div class="optionally__wrap_carousel_block_bot">
                  <p class="optionally__wrap_carousel_block_bot-text">
                    {{ item.title }}
                  </p>
                  <p class="optionally__wrap_carousel_block_bot-text">
                    {{ item.price }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Стрелка вправо -->
          <img
            v-if="currentIndex < maxIndex"
            :src="Arrow"
            alt="Стрелка"
            class="optionally__wrap_carousel-arrow right"
            @click="nextSlide"
          />
        </div>
        <BookingButton customClass="optionally__wrap_btn">
            Забронировать
        </BookingButton>
      </div>
      <Cloud width="156px" top="-20px" left="-30px" />
        <Cloud width="118px" top="-35px" right="15%" />
        <Cloud width="118px" bottom="39%" left="23%" />
        <Cloud width="118px" bottom="-5%" left="7%" />
        <Cloud width="161px" bottom="-30px" right="9%" flipped />
    </section>
  </template>

  <script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue'
  import Arrow from '@/assets/images/core/optionally/arrow.svg'
  import Grill from '@/assets/images/core/optionally/grill.svg'
  import Curd from '@/assets/images/core/optionally/curd.svg'
  import Vat from '@/assets/images/core/optionally/vat.svg'
  import BookingButton from '@/components/blocks/BookingButton.vue'
  import Cloud from '@/components/blocks/Cloud.vue'

  const items = [
    { img: Vat, title: 'Чаны', price: '5 000 ₽/1 использование' },
    { img: Curd, title: 'Аренда ватрушки', price: '400 ₽/2 часа' },
    { img: Grill, title: 'Для мангала', price: '500 ₽/ч' },
    { img: Grill, title: 'Для мангала XL', price: '700 ₽/ч' },
  ]

  const gap = 20
  const containerWidth = ref(1160)
  const visibleSlides = ref(3)

  const slideWidth = computed(() => {
    return (containerWidth.value - (visibleSlides.value - 1) * gap) / visibleSlides.value
  })

  const currentIndex = ref(0)
  const maxIndex = computed(() => Math.max(items.length - visibleSlides.value, 0))

  const nextSlide = () => {
    if (currentIndex.value < maxIndex.value) currentIndex.value++
  }

  const prevSlide = () => {
    if (currentIndex.value > 0) currentIndex.value--
  }

  const updateSlides = () => {
    const w = window.innerWidth
    containerWidth.value = Math.min(1160, Math.round(w * 0.9))

    if (w <= 640) {
      visibleSlides.value = 1
    } else if (w <= 960) {
      visibleSlides.value = 2
    } else {
      visibleSlides.value = 3
    }

    if (currentIndex.value > maxIndex.value) {
      currentIndex.value = maxIndex.value
    }
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
  .optionally {
    margin: 80px auto 0 auto;
    max-width: var(--container-width);
    position: relative;
    padding: 0 24px;
    box-sizing: border-box;
  }

  .optionally__wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .optionally__wrap_title {
    font-size: 48px;
    color: var(--white-color);
    font-family: var(--font-secondary);
    margin: 0 0 26px 0;
    text-align: center;
  }

  .optionally__wrap_carousel {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .optionally__wrap_carousel_view {
    overflow: hidden;
    width: 100%;
  }

  .optionally__wrap_carousel_inner {
    display: flex;
    transition: transform 0.5s ease;
    gap: 20px;
  }

  .optionally__wrap_carousel_block {
    flex-shrink: 0;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
  }

  .optionally__wrap_carousel_block-reel {
    width: 100%;
    height: 237px;
    border-radius: 16px 16px 0 0;
    object-fit: cover;
  }

  .optionally__wrap_carousel_block_bot {
    background-color: #121d3c;
    color: var(--white-color);
    font-size: 24px;
    padding: 16px 20px;
    border-radius: 0 0 16px 16px;
    position: relative;
    width: 100%;
    box-sizing: border-box;
    height: 127px;
    overflow: hidden;
  }

  .optionally__wrap_carousel_block_bot::before {
    content: "";
    position: absolute;
    top: -40px;
    left: 0;
    right: 0;
    height: 40px;
    background: linear-gradient(
      to bottom,
      rgba(18, 29, 60, 0) 0%,
      rgba(18, 29, 60, 1) 100%
    );
  }

  .optionally__wrap_carousel_block_bot-text {
    margin: 0;
    font-family: var(--font-core);
    font-weight: 200;
  }

  .optionally__wrap_carousel_block_bot-text:last-of-type {
    position: absolute;
    right: 20px;
    bottom: 36px;
  }

  .optionally__wrap_carousel-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 10;
  }

  .optionally__wrap_carousel-arrow.left {
    left: 0;
    transform: rotate(180deg) translateY(50%);
  }

  .optionally__wrap_carousel-arrow.right {
    right: 0;
  }

  .optionally__wrap_btn {
    background-color: var(--green-color);
    text-transform: uppercase;
    color: var(--white-color);
    padding: 7px 20px 9px 20px;
    border-radius: var(--border-radius-container);
    font-size: 33px;
    font-family: var(--font-secondary);
    line-height: 100%;
    border: none;
    margin-top: 20px;
    cursor: pointer;
    align-self: flex-start;
  }

  @media (max-width: 1024px) {
    .optionally {
      padding: 0 32px;
    }

    .optionally__wrap_carousel_block_bot {
      font-size: var(--fontsize-medium);
    }
  }

  @media (max-width: 768px) {
    .optionally {
      padding: 0 20px;
    }

    .optionally__wrap_title {
      font-size: 36px;
    }

    .optionally__wrap_btn {
      font-size: 24px;
      padding: 10px 24px;
      align-self: center;
    }

    .optionally__wrap_carousel_block_bot {
      height: auto;
      padding: 16px;
    }

    .optionally__wrap_carousel_block_bot-text:last-of-type {
      position: static;
      margin-top: 12px;
    }

    .optionally__wrap_carousel-arrow {
      width: 32px;
    }
  }

  @media (max-width: 480px) {
    .optionally {
      padding: 0 16px;
    }

    .optionally__wrap_btn {
      width: 100%;
      justify-content: center;
      display: flex;
      align-self: center;
    }
  }
  </style>
