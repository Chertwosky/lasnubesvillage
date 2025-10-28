<template>
  <section class="bungalos" :style="{ '--bung-photo-h': photoHeight + 'px' }">
    <div class="bungalos__wrap">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="bungalos__wrap_block"
        :id="item.id"
      >
        <!-- ЛЕВАЯ КОЛОНКА -->
        <div
          class="bungaloswrap_blockleft"
          :style="{ width: containerWidth + 'px' }"
        >
          <h3 class="bungaloswrap_blockleft_title">{{ item.title }}</h3>

          <!-- Слайдер -->
          <div class="bungalos__carousel" :style="{ width: containerWidth + 'px' }">
            <img
              v-if="currentIndexes[item.id] > 0"
              :src="Arrow"
              alt="Стрелка"
              class="bungalos__carousel-arrow left"
              @click="prevSlide(item.id, item.photos.length)"
            />
            <div class="bungalos__carousel_view">
              <div class="bungalos__carousel_inner" :style="innerStyle(item.id)">
                <div
                  v-for="(photo, pIndex) in item.photos"
                  :key="pIndex"
                  class="bungalos__carousel_slide"
                  :style="{ width: slideWidth + 'px' }"
                >
                  <img
                    :src="photo"
                    alt="Фото дома"
                    class="bungalos__carousel_img"
                    @click="openLightbox(item.photos, pIndex)"
                  />
                </div>
              </div>
            </div>
            <img
              v-if="currentIndexes[item.id] < item.photos.length - visibleSlides"
              :src="Arrow"
              alt="Стрелка"
              class="bungalos__carousel-arrow right"
              @click="nextSlide(item.id, item.photos.length)"
            />
          </div>

          <BookingButton customClass="bungaloswrap_blockleft_btn">
            Забронировать
          </BookingButton>
        </div>

        <!-- ПРАВАЯ КОЛОНКА -->
        <div class="bungaloswrap_blockright">
          <p class="bungaloswrap_blockright_text">
            <span class="bungaloswrap_blockright_text-up">{{ item.upTitle }}</span>
            {{ item.text }}
          </p>
          <div class="bungaloswrap_blockright_bot">
            <p class="bungaloswrap_blockright_bot-text">{{ item.location }}</p>
            <p class="bungaloswrap_blockright_bot-text">{{ item.beds }}</p>
            <div class="bungaloswrap_blockright_bot_min">
              <img :src="Man" alt="Иконка гостей" class="bungaloswrap_blockright_bot_min-reel" />
              <p class="bungaloswrap_blockright_bot_min-text">{{ item.guests }}</p>
            </div>
          </div>
        </div>

        <!-- ОБЛАКА -->
        <Cloud width="156px" top="-20px" left="-30px" />
        <Cloud width="118px" top="-35px" right="23%" />
        <Cloud width="118px" bottom="39%" left="23%" />
        <Cloud width="161px" bottom="-30px" right="39px" flipped />
      </div>
    </div>

    <!-- Лайтбокс -->
    <div v-if="lightbox.open" class="lightbox" @click.self="closeLightbox">
      <button class="lightbox__close" @click="closeLightbox">×</button>
      <img :src="currentPhoto" alt="Фото" class="lightbox__img" />
      <button v-if="lightbox.index > 0" class="lightbox__arrow left" @click="prevLightbox">‹</button>
      <button v-if="lightbox.index < lightbox.photos.length - 1" class="lightbox__arrow right" @click="nextLightbox">›</button>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref, computed, onMounted, onBeforeUnmount } from 'vue'
import Arrow from '@/assets/images/core/partners/arrow.svg'
import Man from '@/assets/images/core/bungalos/man.svg'
import BookingButton from '@/components/blocks/BookingButton.vue'
import Cloud from '@/components/blocks/Cloud.vue'
/* Настройка */
const photoHeight = ref(500)
const visibleSlides = 1
const containerWidth = ref(508)
const gap = 20
const slideWidth = computed(() =>
  containerWidth.value / visibleSlides - (gap * (visibleSlides - 1)) / visibleSlides
)

/* Автоподгрузка фото */
const toArray = (obj) => Object.values(obj)
const sunsetPhotos = import.meta.glob('@/assets/images/core/bungalos/sunset/*.{jpg,jpeg,png,svg}', { eager: true, import: 'default' })
const ultramarinePhotos = import.meta.glob('@/assets/images/core/bungalos/ultramarine/*.{jpg,jpeg,png,svg}', { eager: true, import: 'default' })
const emeraldPhotos = import.meta.glob('@/assets/images/core/bungalos/emerald/*.{jpg,jpeg,png,svg}', { eager: true, import: 'default' })

const items = [
  { id: 'sunset', title: 'SUNSET A-frame', upTitle: '"Las nubes village"', text: ' — турбаза, расположенная в Адыгее...', location: 'Каменомостский', beds: '2 кровати, 1 диван', guests: 'до 6 гостей (из них 2 доп. места)', photos: toArray(sunsetPhotos) },
  { id: 'ultramarine', title: 'ULTRAMARINE A-frame', upTitle: '"Las nubes village"', text: ' — турбаза, расположенная в Адыгее...', location: 'Каменомостский', beds: '2 кровати, 1 диван', guests: 'до 6 гостей (из них 2 доп. места)', photos: toArray(ultramarinePhotos) },
  { id: 'emerald', title: 'EMERALD A-frame', upTitle: '"Las nubes village"', text: ' — турбаза, расположенная в Адыгее...', location: 'Каменомостский', beds: '2 кровати, 1 диван', guests: 'до 6 гостей (из них 2 доп. места)', photos: toArray(emeraldPhotos) },
]

/* Слайдер */
const currentIndexes = reactive(Object.fromEntries(items.map(it => [it.id, 0])))
const innerStyle = (id) => {
  const offset = currentIndexes[id] * (slideWidth.value + gap)
  return { transform: 'translateX(-' + offset + 'px)', gap: gap + 'px' }
}
const nextSlide = (id, length) => { if (currentIndexes[id] < length - visibleSlides) currentIndexes[id]++ }
const prevSlide = (id, length) => { if (currentIndexes[id] > 0) currentIndexes[id]-- }

/* Лайтбокс */
const lightbox = reactive({ open: false, photos: [], index: 0 })
const currentPhoto = computed(() => lightbox.photos[lightbox.index])
const openLightbox = (photos, index) => { lightbox.open = true; lightbox.photos = photos; lightbox.index = index }
const closeLightbox = () => { lightbox.open = false; lightbox.photos = []; lightbox.index = 0 }
const nextLightbox = () => { if (lightbox.index < lightbox.photos.length - 1) lightbox.index++ }
const prevLightbox = () => { if (lightbox.index > 0) lightbox.index-- }

const updateContainerWidth = () => {
  if (typeof window === 'undefined') return
  const width = window.innerWidth
  const base = Math.min(508, width * 0.9)
  containerWidth.value = Math.max(280, base)

  if (width <= 480) {
    photoHeight.value = 300
  } else if (width <= 640) {
    photoHeight.value = 340
  } else if (width <= 768) {
    photoHeight.value = 420
  } else {
    photoHeight.value = 500
  }
}

/* Закрытие по ESC */
const onKey = (e) => { if (e.key === 'Escape') closeLightbox() }
onMounted(() => {
  document.addEventListener('keydown', onKey)
  updateContainerWidth()
  window.addEventListener('resize', updateContainerWidth)
})
onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKey)
  window.removeEventListener('resize', updateContainerWidth)
})
</script>

<style scoped>
.bungalos {
  margin: clamp(32px, 7vw, 70px) auto 0 auto;
  max-width: min(var(--container-width), 100%);
  padding: 0 var(--container-padding);
}

.bungalos__wrap {
  display: flex;
  flex-direction: column;
  gap: clamp(40px, 7vw, 80px);
}

.bungalos__wrap_block {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: clamp(24px, 5vw, 56px);
}

.bungaloswrap_blockleft {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 520px;
  gap: clamp(16px, 3vw, 28px);
}

.bungaloswrap_blockleft_title {
  font-family: var(--font-secondary);
  font-size: clamp(26px, 4vw, 40px);
  color: var(--white-color);
  margin: 0;
  align-self: flex-end;
  text-align: right;
  line-height: 1.15;
}

.bungaloswrap_blockleft_btn {
  background-color: var(--green-color);
  text-transform: uppercase;
  color: var(--white-color);
  padding: clamp(12px, 2vw, 18px) clamp(24px, 4vw, 40px);
  border-radius: var(--border-radius-container);
  font-size: clamp(18px, 1.6vw + 12px, 24px);
  font-family: var(--font-secondary);
  line-height: 1.05;
  border: none;
  margin-top: clamp(12px, 2vw, 20px);
  cursor: pointer;
  align-self: flex-start;
}

.bungaloswrap_blockright {
  display: flex;
  flex-direction: column;
  gap: clamp(18px, 3vw, 32px);
  max-width: 520px;
}

.bungaloswrap_blockright_text {
  color: var(--white-color);
  font-size: clamp(18px, 1.4vw + 12px, 24px);
  font-family: var(--font-main);
  line-height: 1.55;
}

.bungaloswrap_blockright_text-up {
  font-family: var(--font-secondary);
  font-size: clamp(24px, 3.4vw, 34px);
  text-transform: uppercase;
  display: block;
  margin-bottom: clamp(6px, 1.4vw, 12px);
}

.bungaloswrap_blockright_bot {
  display: flex;
  flex-wrap: wrap;
  gap: clamp(12px, 2vw, 20px);
  color: var(--faded-color);
  font-size: clamp(14px, 1.2vw + 10px, 18px);
  font-family: var(--font-core);
}

.bungaloswrap_blockright_bot_min {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.bungaloswrap_blockright_bot_min-reel {
  width: 22px;
  height: 22px;
}

/* Слайдер */
.bungalos__carousel {
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 100%;
}

.bungalos__carousel_view {
  overflow: hidden;
  width: 100%;
}

.bungalos__carousel_inner {
  display: flex;
  transition: transform 0.5s ease;
  gap: clamp(16px, 3vw, 24px);
}

.bungalos__carousel_slide {
  flex-shrink: 0;
  border-radius: var(--border-radius-container);
  overflow: hidden;
}

.bungalos__carousel_img {
  width: 100%;
  height: var(--bung-photo-h, 500px);
  object-fit: cover;
  cursor: pointer;
  border-radius: var(--border-radius-container);
}

.bungalos__carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10;
  width: clamp(40px, 6vw, 60px);
  height: clamp(40px, 6vw, 60px);
}

.bungalos__carousel-arrow.left {
  left: clamp(-10px, -1vw, 0px);
  transform: rotate(180deg) translateY(50%);
}

.bungalos__carousel-arrow.right {
  right: clamp(-10px, -1vw, 0px);
}

/* Лайтбокс */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
}

.lightbox__img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 12px;
}

.lightbox__close {
  position: fixed;
  top: 14px;
  right: 18px;
  font-size: 40px;
  color: #fff;
  background: transparent;
  border: none;
  cursor: pointer;
}

.lightbox__arrow {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  font-size: clamp(32px, 6vw, 48px);
  color: #fff;
  background: transparent;
  border: none;
  cursor: pointer;
}

.lightbox__arrow.left {
  left: 20px;
}

.lightbox__arrow.right {
  right: 20px;
}

@media (max-width: 992px) {
  .bungalos__wrap_block {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .bungaloswrap_blockleft,
  .bungaloswrap_blockright {
    align-items: center;
    max-width: 100%;
  }

  .bungaloswrap_blockleft_title {
    align-self: center;
    text-align: center;
  }

  .bungaloswrap_blockleft_btn {
    align-self: center;
  }

  .bungaloswrap_blockright_bot {
    justify-content: center;
  }
}

@media (max-width: 640px) {
  .bungalos {
    padding-inline: clamp(12px, 5vw, 20px);
  }

  .bungaloswrap_blockleft_title {
    font-size: clamp(24px, 5vw, 32px);
  }

  .bungaloswrap_blockright_text {
    font-size: clamp(16px, 4vw, 20px);
  }

  .bungaloswrap_blockleft_btn {
    width: 100%;
    max-width: 320px;
    text-align: center;
  }

  .bungalos__carousel-arrow {
    width: clamp(32px, 8vw, 44px);
    height: clamp(32px, 8vw, 44px);
  }
}
</style>