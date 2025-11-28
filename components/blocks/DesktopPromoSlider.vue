<template>
  <Transition name="promo-slider">
    <aside
      v-if="isVisible"
      class="promo-slider"
      aria-label="Актуальные акции"
      @mouseenter="stopAutoSlide"
      @mouseleave="startAutoSlide"
    >
      <button class="promo-slider__close" type="button" aria-label="Закрыть" @click="close">
        ✖
      </button>

      <div class="promo-slider__content">
        <div class="promo-slider__image-wrapper">
          <span class="promo-slider__badge">Акция</span>
          <img :src="currentSlide.img" :alt="currentSlide.title" class="promo-slider__image" loading="lazy" />
        </div>

        <div class="promo-slider__info">
          <p class="promo-slider__label">{{ currentSlide.label }}</p>
          <h4 class="promo-slider__title">{{ currentSlide.title }}</h4>
          <p class="promo-slider__text">{{ currentSlide.text }}</p>

          <BookingButton customClass="promo-slider__button">
            Забронировать
          </BookingButton>

          <div class="promo-slider__controls" role="group" aria-label="Переключение акций">
            <button class="promo-slider__arrow" type="button" aria-label="Предыдущая акция" @click="prevSlide">
              ‹
            </button>
            <div class="promo-slider__dots" role="tablist">
              <button
                v-for="(slide, index) in slides"
                :key="slide.title"
                type="button"
                :class="['promo-slider__dot', { 'promo-slider__dot--active': index === activeIndex }]"
                :aria-label="`Показать акцию ${index + 1}`"
                :aria-pressed="index === activeIndex"
                @click="goToSlide(index)"
              ></button>
            </div>
            <button class="promo-slider__arrow" type="button" aria-label="Следующая акция" @click="nextSlide">
              ›
            </button>
          </div>
        </div>
      </div>
    </aside>
  </Transition>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import BookingButton from '@/components/blocks/BookingButton.vue'
import { resolveImage } from '@/utils/resolveImage'

const slides = [
  {
    img: resolveImage('core/rebate/hold'),
    label: '-10%',
    title: 'Скидка в особые даты',
    text: 'Дарим 10% скидку в день рождения или годовщину свадьбы.',
  },
  {
    img: resolveImage('core/rebate/feedback'),
    label: '-10%',
    title: 'Скидка за отзыв',
    text: 'Оставьте отзыв на Яндекс.Картах и получите 10% на следующий заезд.',
  },
  {
    img: resolveImage('core/rebate/bathhouse'),
    label: 'Баня',
    title: 'Бесплатная баня',
    text: 'Бесплатное посещение бани при бронировании от трёх ночей.',
  },
]

const activeIndex = ref(0)
const isVisible = ref(false)
const isDismissed = ref(false)
const isDesktop = ref(false)

let showTimerId = null
let autoSlideId = null

const currentSlide = computed(() => slides[activeIndex.value])

const clearShowTimer = () => {
  if (showTimerId) {
    clearTimeout(showTimerId)
    showTimerId = null
  }
}

const stopAutoSlide = () => {
  if (autoSlideId) {
    clearInterval(autoSlideId)
    autoSlideId = null
  }
}

const startAutoSlide = () => {
  if (!isVisible.value) return

  stopAutoSlide()
  autoSlideId = window.setInterval(() => {
    nextSlide()
  }, 7000)
}

const nextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % slides.length
  startAutoSlide()
}

const prevSlide = () => {
  activeIndex.value = (activeIndex.value - 1 + slides.length) % slides.length
  startAutoSlide()
}

const goToSlide = (index) => {
  activeIndex.value = index
  startAutoSlide()
}

const close = () => {
  isVisible.value = false
  isDismissed.value = true
  stopAutoSlide()
  clearShowTimer()
}

const showSlider = () => {
  if (isDismissed.value || !isDesktop.value) return

  isVisible.value = true
  startAutoSlide()
}

const scheduleShow = () => {
  clearShowTimer()

  if (isDismissed.value || !isDesktop.value) return

  showTimerId = window.setTimeout(() => {
    showSlider()
  }, 20000)
}

const updateDesktopState = () => {
  isDesktop.value = window.innerWidth >= 1024

  if (!isDesktop.value) {
    isVisible.value = false
    stopAutoSlide()
    clearShowTimer()
  } else if (!isVisible.value && !isDismissed.value) {
    scheduleShow()
  }
}

onMounted(() => {
  updateDesktopState()
  scheduleShow()
  window.addEventListener('resize', updateDesktopState)
})

onBeforeUnmount(() => {
  stopAutoSlide()
  clearShowTimer()
  window.removeEventListener('resize', updateDesktopState)
})
</script>

<style scoped>
.promo-slider {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 420px;
  max-width: calc(100% - 48px);
  z-index: 90000;
  color: var(--white-color);
}

.promo-slider__content {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 18px;
  background: rgba(10, 35, 82, 0.95);
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 18px 45px rgba(8, 23, 52, 0.35);
  padding: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.promo-slider__image-wrapper {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  min-height: 180px;
}

.promo-slider__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.promo-slider__badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background: var(--green-color);
  color: var(--white-color);
  padding: 6px 12px;
  border-radius: 12px;
  font-weight: 700;
  font-family: var(--font-secondary);
  font-size: 14px;
  letter-spacing: 0.5px;
}

.promo-slider__info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.promo-slider__label {
  margin: 0;
  color: var(--green-color);
  font-weight: 700;
  font-size: 16px;
}

.promo-slider__title {
  margin: 0;
  font-size: 20px;
  line-height: 1.3;
  font-family: var(--font-secondary);
}

.promo-slider__text {
  margin: 0;
  font-size: 15px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.92);
}

.promo-slider__button {
  margin-top: 4px;
  background-color: var(--green-color);
  color: var(--white-color);
  border: none;
  border-radius: 12px;
  padding: 12px 18px;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.promo-slider__button:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

.promo-slider__controls {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: auto;
}

.promo-slider__arrow {
  background: rgba(255, 255, 255, 0.1);
  color: var(--white-color);
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.promo-slider__arrow:hover {
  background: rgba(255, 255, 255, 0.18);
}

.promo-slider__dots {
  display: flex;
  align-items: center;
  gap: 8px;
}

.promo-slider__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.6);
  background: transparent;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
}

.promo-slider__dot--active {
  background: var(--green-color);
  transform: scale(1.05);
  border-color: var(--green-color);
}

.promo-slider__close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(10, 35, 82, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: var(--white-color);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 2;
  font-size: 16px;
  line-height: 1;
}

.promo-slider__close:hover {
  background: rgba(255, 255, 255, 0.1);
}

.promo-slider-enter-active,
.promo-slider-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.promo-slider-enter-from,
.promo-slider-leave-to {
  opacity: 0;
  transform: translateY(12px);
}

@media (max-width: 1023px) {
  .promo-slider {
    display: none;
  }
}
</style>
