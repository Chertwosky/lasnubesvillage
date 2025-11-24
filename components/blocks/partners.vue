<template>
  <section class="partners" id="Partners">
    <SectionBadge
      class="partners__badge"
      gradient="linear-gradient(90deg,#2a315b 0%, #0d1330 100%)"
      align="right"
    >
      Партнёры
    </SectionBadge>
    <div class="partners__wrap">
      <h3 class="partners__wrap_title text-overlay"> Партнеры </h3>

      <!-- 👇 общий контейнер для слайдера и кнопки -->
      <div class="partners__wrap_carousel-container">
        <div class="partners__wrap_carousel" ref="carouselRef">
          <!-- Стрелка влево -->
          <img
            v-if="currentIndex > 0"
            :src="Arrow"
            alt="Стрелка"
            class="partners__wrap_carousel-arrow left"
            @click="prevSlide"
          />

          <!-- Контейнер со слайдами -->
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
                />
                <div class="partners__wrap_carousel_block_bot">
                  <p class="partners__wrap_carousel_block_bot-text">
                    {{ item.title }}
                  </p>
                  <p class="partners__wrap_carousel_block_bot-text">
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
            class="partners__wrap_carousel-arrow right"
            @click="nextSlide"
          />
        </div>

        <!-- Кнопка теперь внутри контейнера -->
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
import { resolveImage } from '@/utils/resolveImage'
import BookingButton from '@/components/blocks/BookingButton.vue'
import Cloud from '@/components/blocks/Cloud.vue'
import SectionBadge from '@/components/ui/SectionBadge.vue'

const Arrow = resolveImage('core/partners/arrow')
const Grill = resolveImage('core/partners/grill')
const Curd = resolveImage('core/partners/curd')
const Vat = resolveImage('core/partners/vat')
const Flowers = resolveImage('core/partners/flowers')

const items = [
  { img: Vat, title: 'Джиппинг', price: 'от 2 000 ₽/чел.' },
  { img: Curd, title: 'Конные прогулки', price: 'от 1 500 ₽/чел.' },
  { img: Grill, title: 'Рафтинг', price: 'от 1700 ₽/чел.' },
  { img: Flowers, title: 'Цветы', price: 'от 3000 ₽' },
]

const containerWidth = ref(320)
const visibleSlides = ref(1)
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

const carouselRef = ref(null)

const updateSlides = () => {
  if (typeof window === 'undefined') return
  const viewportWidth = window.innerWidth
  const measuredWidth = carouselRef.value?.clientWidth || viewportWidth - 32
  const safeWidth = Math.min(measuredWidth, 1160)
  containerWidth.value = Math.max(280, safeWidth)

  visibleSlides.value = 1

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
  padding: 0 var(--container-padding) 60px;
}

.partners__badge {
  margin-bottom: 32px;
}

.partners__wrap {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.partners__wrap_title {
  font-size: 48px;
  color: var(--white-color);
  font-family: var(--font-secondary);
  margin: 0 0 26px 0;
  padding: 18px 24px;
}

/* 👇 новый контейнер */
.partners__wrap_carousel-container {
  width: 100%;
  max-width: 1160px; /* ширина слайдера */
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* кнопка теперь прижата к левому краю */
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
  border-radius: 16px;
  display: flex;
  flex-direction: column;
}

.partners__wrap_carousel_block-reel {
  width: 100%;
  height: 237px;
  border-radius: 16px 16px 0 0;
  object-fit: cover;
}

.partners__wrap_carousel_block_bot {
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

.partners__wrap_carousel_block_bot::before {
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

.partners__wrap_carousel_block_bot-text {
  margin: 0;
  font-family: var(--font-core);
  font-weight: 200;
}

.partners__wrap_carousel_block_bot-text:last-of-type {
  position: absolute;
  right: 20px;
  bottom: 36px;
}

.partners__wrap_carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10;
}

.partners__wrap_carousel-arrow.left {
  left: 0;
  transform: rotate(180deg) translateY(50%);
}

.partners__wrap_carousel-arrow.right {
  right: 0;
}

.partners__wrap_btn {
  background-color: var(--green-color);
  text-transform: uppercase;
  color: var(--white-color);
  padding: 7px 20px 15px 20px;
  border-radius: var(--border-radius-container);
  font-size: 33px;
  font-family: var(--font-secondary);
  line-height: 100%;
  border: none;
  margin-top: 20px;
  cursor: pointer;
}

@media (max-width: 1024px) {
  .partners {
    padding: 0 var(--container-padding);
  }

  .partners__wrap_title {
    text-align: left;
    padding: 18px 20px;
  }

  .partners__wrap_carousel-container {
    align-items: flex-start;
  }

  .partners__wrap_btn {
    align-self: flex-start;
  }

  .partners__wrap_carousel-arrow {
    width: 48px;
  }
}

@media (max-width: 640px) {
  .partners {
    padding: 0 var(--container-padding);
  }

  .partners__wrap_carousel_block-reel {
    height: 200px;
  }

  .partners__wrap_carousel_block_bot {
    font-size: var(--fontsize-primary);
    min-height: 120px;
  }

  .partners__wrap_carousel_block_bot-text:last-of-type {
    bottom: 24px;
  }

  .partners__wrap_btn {
    font-size: 22px;
    padding: 10px 24px;
    width: 100%;
    text-align: center;
  }

  .partners__wrap_carousel-arrow {
    width: 36px;
  }

  .partners__wrap_title {
    font-size: 32px;
    padding: 16px 18px;
    text-align: left;
  }
}
</style>
