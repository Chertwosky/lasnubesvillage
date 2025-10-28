<template>
  <section class="partners" id="Partners">
    <div class="partners__wrap">
      <h3 class="partners__wrap_title">Партнеры</h3>

      <div class="partners__wrap_carousel-container">
        <div class="partners__wrap_carousel" :style="{ width: containerWidth + 'px' }">
          <img
            v-if="currentIndex > 0"
            :src="Arrow"
            alt="Стрелка"
            class="partners__wrap_carousel-arrow left"
            @click="prevSlide"
            loading="lazy"
            decoding="async"
          />

          <div class="partners__wrap_carousel_view">
            <div
              class="partners__wrap_carousel_inner"
              :style="{ transform: `translateX(-${currentIndex * (slideWidth + gap)}px)` }"
            >
              <div
                v-for="(item, index) in items"
                :key="index"
                class="partners__wrap_carousel_block"
                :style="{ width: slideWidth + 'px' }"
              >
                <img
                  :src="item.img"
                  :alt="item.title"
                  class="partners__wrap_carousel_block-reel"
                  draggable="false"
                  loading="lazy"
                  decoding="async"
                />
                <div class="partners__wrap_carousel_block_bot">
                  <p class="partners__wrap_carousel_block_text">{{ item.title }}</p>
                  <p class="partners__wrap_carousel_block_text">{{ item.price }}</p>
                </div>
              </div>
            </div>
          </div>

          <img
            v-if="currentIndex < maxIndex"
            :src="Arrow"
            alt="Стрелка"
            class="partners__wrap_carousel-arrow right"
            @click="nextSlide"
            loading="lazy"
            decoding="async"
          />
        </div>

        <BookingButton customClass="partners__wrap_btn">
          Забронировать
        </BookingButton>
      </div>
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
import Arrow from '@/assets/images/core/partners/arrow.svg'
import Grill from '@/assets/images/core/partners/grill.svg'
import Curd from '@/assets/images/core/partners/curd.svg'
import Vat from '@/assets/images/core/partners/vat.svg'
import BookingButton from '@/components/blocks/BookingButton.vue'
import Cloud from '@/components/blocks/Cloud.vue'

const items = [
  { img: Vat, title: 'Чаны', price: '5 000 ₽/1 использование' },
  { img: Curd, title: 'Аренда ватрушки', price: '400 ₽/2 часа' },
  { img: Grill, title: 'Для мангала', price: '500 ₽/ч' },
  { img: Grill, title: 'Для мангала XL', price: '700 ₽/ч' },
]

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
.partners {
  margin: 50px auto 0 auto;
  max-width: var(--container-width);
  position: relative;
  padding: 0 20px;
}

.partners__wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.partners__wrap_title {
  font-size: clamp(2rem, 1.6rem + 1.2vw, 3rem);
  color: var(--white-color);
  font-family: var(--font-secondary);
  margin: 0;
  text-align: center;
}

.partners__wrap_carousel-container {
  width: 100%;
  max-width: 1160px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 20px;
}

.partners__wrap_carousel {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  overflow: hidden;
}

.partners__wrap_carousel_view {
  overflow: hidden;
  width: 100%;
}

.partners__wrap_carousel_inner {
  display: flex;
  transition: transform 0.5s ease;
  gap: 20px;
}

.partners__wrap_carousel_block {
  flex-shrink: 0;
  border-radius: var(--border-radius-container);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: rgba(11, 25, 52, 0.78);
  backdrop-filter: blur(6px);
}

.partners__wrap_carousel_block-reel {
  width: 100%;
  height: clamp(200px, 32vw, 240px);
  object-fit: cover;
}

.partners__wrap_carousel_block_bot {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 18px;
  color: var(--white-color);
  font-size: var(--fontsize-unusual);
  font-family: var(--font-secondary);
}

.partners__wrap_carousel_block_text {
  margin: 0;
  font-family: var(--font-core);
  font-weight: 300;
}

.partners__wrap_carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10;
  width: 52px;
}

.partners__wrap_carousel-arrow.left {
  left: 0;
  transform: rotate(180deg) translateY(50%);
}

.partners__wrap_carousel-arrow.right {
  right: 0;
}

.partners__wrap_btn {
  align-self: center;
  padding: 10px 40px;
  font-size: var(--fontsize-unusual);
}

@media (max-width: 900px) {
  .partners__wrap_carousel_block_bot {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}

@media (max-width: 768px) {
  .partners {
    padding: 0 16px;
  }

  .partners__wrap_carousel-arrow {
    width: 44px;
  }
}

@media (max-width: 540px) {
  .partners__wrap_carousel_block-reel {
    height: clamp(180px, 60vw, 220px);
  }

  .partners__wrap_btn {
    width: 100%;
    text-align: center;
  }
}
</style>
