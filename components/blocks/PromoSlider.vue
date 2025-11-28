<template>
  <transition name="promo-overlay">
    <aside
      v-if="isDesktop && isVisible"
      class="promo-slider"
      role="dialog"
      aria-label="Специальные предложения"
    >
      <button
        type="button"
        class="promo-slider__close"
        aria-label="Закрыть предложения"
        @click="close"
      >
        ✕
      </button>

      <div class="promo-slider__body">
        <div class="promo-slider__visual">
          <div class="promo-slider__track" :style="trackStyle">
            <article
              v-for="(slide, index) in slides"
              :key="slide.title"
              class="promo-slider__slide"
              :aria-hidden="index !== currentIndex"
            >
              <img :src="slide.img" :alt="slide.title" class="promo-slider__image" draggable="false" />
            </article>
          </div>
        </div>

        <div class="promo-slider__content">
          <p class="promo-slider__label">{{ slides[currentIndex].label }}</p>
          <h4 class="promo-slider__title">{{ slides[currentIndex].title }}</h4>
          <p class="promo-slider__text">{{ slides[currentIndex].text }}</p>
          <p v-if="slides[currentIndex].description" class="promo-slider__description">
            {{ slides[currentIndex].description }}
          </p>

          <BookingButton customClass="promo-slider__button">
            Забронировать
          </BookingButton>

          <div class="promo-slider__controls" role="group" aria-label="Навигация по акциям">
            <button
              class="promo-slider__arrow"
              type="button"
              aria-label="Предыдущее предложение"
              @click="prevSlide"
            >
              ‹
            </button>

            <div class="promo-slider__dots" role="tablist">
              <button
                v-for="(slide, index) in slides"
                :key="slide.title + index"
                class="promo-slider__dot"
                :class="{ 'promo-slider__dot--active': currentIndex === index }"
                :aria-label="`Показать предложение ${index + 1}`"
                :aria-pressed="currentIndex === index"
                @click="goToSlide(index)"
              />
            </div>

            <button
              class="promo-slider__arrow"
              type="button"
              aria-label="Следующее предложение"
              @click="nextSlide"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </aside>
  </transition>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { resolveImage } from '@/utils/resolveImage'
import BookingButton from '@/components/blocks/BookingButton.vue'

const slides = [
  {
    title: 'Скидка 10% в день рождения или годовщину',
    text: 'Скидка действует за 5 дней до и 5 дней после важной даты.',
    description: 'Сообщите оператору о событии при бронировании, чтобы зафиксировать выгоду.',
    label: '-10%',
    img: resolveImage('core/rebate/hold'),
  },
  {
    title: '10% скидка за честный отзыв',
    text: 'Поделитесь впечатлением на Яндекс.Картах и получите выгоду на следующий приезд.',
    description: 'Скидка активируется после размещения отзыва и действует на будущие брони.',
    label: '-10%',
    img: resolveImage('core/rebate/feedback'),
  },
  {
    title: 'Бесплатное посещение бани',
    text: 'При бронировании от трёх ночей дарим сеанс русской бани.',
    description: 'Предложение действует при предварительном бронировании и подтверждении дат.',
    label: 'Баня',
    img: resolveImage('core/rebate/bathhouse'),
  },
]

const DELAY_MS = 20000
const AUTO_SLIDE_MS = 7000
const DESKTOP_QUERY = '(min-width: 1024px)'

const currentIndex = ref(0)
const isVisible = ref(false)
const isDesktop = ref(false)
const hasClosed = ref(false)
let showTimer: ReturnType<typeof setTimeout> | null = null
let autoTimer: ReturnType<typeof setInterval> | null = null
let mediaQuery: MediaQueryList | null = null

const trackStyle = computed(() => ({
  transform: `translateX(-${currentIndex.value * 100}%)`,
}))

const stopAutoSlide = () => {
  if (autoTimer) {
    clearInterval(autoTimer)
    autoTimer = null
  }
}

const startAutoSlide = () => {
  stopAutoSlide()
  if (slides.length > 1) {
    autoTimer = setInterval(() => nextSlide(), AUTO_SLIDE_MS)
  }
}

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length
}

const goToSlide = (index: number) => {
  currentIndex.value = index
  startAutoSlide()
}

const close = () => {
  isVisible.value = false
  hasClosed.value = true
  stopAutoSlide()
}

const scheduleShow = () => {
  if (showTimer) {
    clearTimeout(showTimer)
    showTimer = null
  }

  if (hasClosed.value || !isDesktop.value) return

  showTimer = setTimeout(() => {
    if (!hasClosed.value && isDesktop.value) {
      isVisible.value = true
      startAutoSlide()
    }
  }, DELAY_MS)
}

const updateDesktopState = () => {
  if (!mediaQuery) return

  isDesktop.value = mediaQuery.matches

  if (!isDesktop.value) {
    isVisible.value = false
    stopAutoSlide()
    if (showTimer) {
      clearTimeout(showTimer)
      showTimer = null
    }
  } else if (!hasClosed.value && !isVisible.value) {
    scheduleShow()
  }
}

onMounted(() => {
  if (typeof window === 'undefined') return

  mediaQuery = window.matchMedia(DESKTOP_QUERY)
  mediaQuery.addEventListener('change', updateDesktopState)

  isDesktop.value = mediaQuery.matches
  scheduleShow()
})

onBeforeUnmount(() => {
  stopAutoSlide()

  if (showTimer) {
    clearTimeout(showTimer)
  }

  mediaQuery?.removeEventListener('change', updateDesktopState)
})
</script>

<style scoped>
.promo-overlay-enter-from,
.promo-overlay-leave-to {
  opacity: 0;
  transform: translateX(-16px);
}

.promo-overlay-enter-active,
.promo-overlay-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.promo-slider {
  position: fixed;
  bottom: 28px;
  left: 28px;
  width: 520px;
  max-width: 90vw;
  background: rgba(10, 23, 52, 0.92);
  border-radius: 20px;
  box-shadow: 0 18px 45px rgba(8, 23, 52, 0.4);
  overflow: hidden;
  z-index: 80;
  color: var(--white-color);
  backdrop-filter: blur(8px);
}

.promo-slider__body {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 0;
}

.promo-slider__visual {
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.06);
}

.promo-slider__track {
  display: flex;
  transition: transform 0.4s ease;
  height: 100%;
}

.promo-slider__slide {
  min-width: 100%;
  display: flex;
  align-items: stretch;
}

.promo-slider__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.promo-slider__content {
  padding: 22px 22px 18px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
}

.promo-slider__label {
  margin: 0;
  font-size: var(--fontsize-secondary);
  color: #c4d9ff;
  letter-spacing: 0.5px;
}

.promo-slider__title {
  margin: 0;
  font-family: var(--font-secondary);
  font-size: 22px;
  line-height: 1.2;
}

.promo-slider__text {
  margin: 0;
  font-size: 15px;
  line-height: 1.45;
  opacity: 0.92;
}

.promo-slider__description {
  margin: 0;
  font-size: 13px;
  line-height: 1.3;
  color: #dbe6ff;
  opacity: 0.9;
}

.promo-slider__button {
  align-self: flex-start;
  padding: 10px 18px;
  border-radius: 12px;
  background: var(--green-color);
  color: var(--white-color);
  font-family: var(--font-core);
  font-size: 15px;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
}

.promo-slider__button:hover {
  background: #3aa46a;
  transform: translateY(-1px);
}

.promo-slider__controls {
  margin-top: 6px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.promo-slider__arrow {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: var(--white-color);
  width: 36px;
  height: 36px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 20px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.promo-slider__arrow:hover {
  background: rgba(255, 255, 255, 0.16);
  border-color: rgba(255, 255, 255, 0.3);
}

.promo-slider__dots {
  display: flex;
  gap: 8px;
}

.promo-slider__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  border: none;
  cursor: pointer;
  padding: 0;
  transition: background 0.2s ease, transform 0.2s ease;
}

.promo-slider__dot--active {
  background: var(--green-color);
  transform: scale(1.1);
}

.promo-slider__close {
  position: absolute;
  top: 10px;
  right: 12px;
  background: rgba(0, 0, 0, 0.3);
  border: none;
  color: var(--white-color);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 2;
  font-size: 16px;
  transition: background 0.2s ease;
}

.promo-slider__close:hover {
  background: rgba(0, 0, 0, 0.45);
}

@media (max-width: 1279px) {
  .promo-slider {
    width: 480px;
  }

  .promo-slider__body {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
