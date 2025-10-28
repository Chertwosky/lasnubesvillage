<template>
    <section class="optionally" id="optionally">
      <div class="optionally__wrap">
        <h3 class="optionally__wrap_title">Дополнительные услуги</h3>

        <div class="optionally__wrap_carousel" :style="{ width: containerWidth + 'px' }">
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

  // ширина контейнера и количество видимых карточек
  const containerWidth = ref(1160)
  const visibleSlides = ref(3)
  const gap = 20
  const slideWidth = computed(() =>
    (containerWidth.value - (visibleSlides.value - 1) * gap) / visibleSlides.value
  )

  const currentIndex = ref(0)
  const maxIndex = computed(() => Math.max(0, items.length - visibleSlides.value))

  const nextSlide = () => {
    if (currentIndex.value < maxIndex.value) currentIndex.value++
  }
  const prevSlide = () => {
    if (currentIndex.value > 0) currentIndex.value--
  }

  const updateSlides = () => {
    if (typeof window === 'undefined') return
    const w = window.innerWidth
    const width = Math.min(w * 0.9, 1160)
    containerWidth.value = Math.max(320, width)

    if (w <= 768) {
      visibleSlides.value = 1
    } else if (w <= 1024) {
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
  margin: clamp(32px, 7vw, 70px) auto 0 auto;
  max-width: min(var(--container-width), 100%);
  position: relative;
  padding: 0 var(--container-padding);
}

.optionally__wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(20px, 4vw, 36px);
}

.optionally__wrap_title {
  font-size: clamp(30px, 4.5vw, 48px);
  color: var(--white-color);
  font-family: var(--font-secondary);
  margin: 0;
  text-align: center;
}

.optionally__wrap_carousel {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: min(var(--container-width), 100%);
  overflow: hidden;
}

.optionally__wrap_carousel_view {
  overflow: hidden;
  width: 100%;
}

.optionally__wrap_carousel_inner {
  display: flex;
  transition: transform 0.5s ease;
  gap: clamp(16px, 3vw, 24px);
  padding-block: clamp(8px, 2vw, 16px);
}

.optionally__wrap_carousel_block {
  flex-shrink: 0;
  border-radius: var(--border-radius-container);
  display: flex;
  flex-direction: column;
  background: rgba(14, 32, 78, 0.35);
  overflow: hidden;
}

.optionally__wrap_carousel_block-reel {
  width: 100%;
  height: clamp(200px, 40vw, 260px);
  border-radius: var(--border-radius-container) var(--border-radius-container) 0 0;
  object-fit: cover;
}

.optionally__wrap_carousel_block_bot {
  background-color: rgba(18, 29, 60, 0.9);
  color: var(--white-color);
  font-size: clamp(18px, 1.4vw + 12px, 24px);
  padding: clamp(16px, 3vw, 24px);
  border-radius: 0 0 var(--border-radius-container) var(--border-radius-container);
  position: relative;
  width: 100%;
  box-sizing: border-box;
  min-height: clamp(110px, 22vw, 140px);
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
  font-weight: 300;
}

.optionally__wrap_carousel_block_bot-text:last-of-type {
  position: absolute;
  right: clamp(16px, 3vw, 24px);
  bottom: clamp(16px, 3vw, 28px);
}

.optionally__wrap_carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10;
  width: clamp(36px, 7vw, 60px);
  height: clamp(36px, 7vw, 60px);
}

.optionally__wrap_carousel-arrow.left {
  left: clamp(-12px, -1vw, 0px);
  transform: rotate(180deg) translateY(50%);
}

.optionally__wrap_carousel-arrow.right {
  right: clamp(-12px, -1vw, 0px);
}

.optionally__wrap_btn {
  background-color: var(--green-color);
  text-transform: uppercase;
  color: var(--white-color);
  padding: clamp(12px, 2vw, 18px) clamp(24px, 4vw, 40px);
  border-radius: var(--border-radius-container);
  font-size: clamp(18px, 1.6vw + 12px, 24px);
  font-family: var(--font-secondary);
  line-height: 1.05;
  border: none;
  margin-top: clamp(12px, 2vw, 24px);
  cursor: pointer;
  align-self: center;
}

@media (max-width: 640px) {
  .optionally {
    padding-inline: clamp(12px, 5vw, 20px);
  }

  .optionally__wrap_carousel_block_bot {
    font-size: clamp(16px, 4vw, 20px);
  }

  .optionally__wrap_btn {
    width: 100%;
    max-width: 320px;
  }
}
  </style>
