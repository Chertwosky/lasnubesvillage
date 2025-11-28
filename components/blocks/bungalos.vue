<template>
  <section class="bungalos" :style="{ '--bung-photo-h': photoHeight + 'px' }">
    <div class="bungalos__wrap">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="bungalos__wrap_block"
        :id="item.id"
      >
        <SectionBadge
          class="bungalos__item-badge"
          :gradient="item.badgeGradient"
        >
          {{ item.badge || item.title }}
        </SectionBadge>

        <!-- ЛЕВАЯ КОЛОНКА -->
        <div class="bungalos__content">
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
            <p class="bungaloswrap_blockright_text text-overlay">
              <span class="bungaloswrap_blockright_text-up">{{ item.upTitle }}</span>
              {{ item.text }}
            </p>
            <div class="bungaloswrap_blockright_bot text-overlay">
              <p class="bungaloswrap_blockright_bot-text">{{ item.location }}</p>
              <p class="bungaloswrap_blockright_bot-text">{{ item.beds }}</p>
              <div class="bungaloswrap_blockright_bot_min">
                <img
                  :src="Man"
                  alt="Иконка гостей"
                  class="bungaloswrap_blockright_bot_min-reel"
                />
                <p class="bungaloswrap_blockright_bot_min-text">{{ item.guests }}</p>
              </div>
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
      <div class="lightbox__frame">
        <div class="lightbox__viewport">
          <img :src="currentPhoto" alt="Фото" class="lightbox__img" />
        </div>
        <button
          v-if="lightbox.index > 0"
          class="lightbox__arrow left"
          @click="prevLightbox"
        >
          ‹
        </button>
        <button
          v-if="lightbox.index < lightbox.photos.length - 1"
          class="lightbox__arrow right"
          @click="nextLightbox"
        >
          ›
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { resolveImage } from '@/utils/resolveImage'
import BookingButton from '@/components/blocks/BookingButton.vue'
import Cloud from '@/components/blocks/Cloud.vue'
import SectionBadge from '@/components/ui/SectionBadge.vue'

const Arrow = resolveImage('core/partners/arrow')
const Man = resolveImage('core/bungalos/man')

const photoHeight = ref(500)
const visibleSlides = 1
const containerWidth = ref(508)
const gap = 20
const slideWidth = computed(
  () =>
    containerWidth.value / visibleSlides -
    (gap * (visibleSlides - 1)) / visibleSlides
)

/* Автоподгрузка фото */
const toArray = (obj) => Object.values(obj)
const sunsetPhotos = import.meta.glob(
  '@/assets/images/core/bungalos/sunset/*.{jpg,jpeg,png,svg,webp,avif,gif,bmp,ico}',
  { eager: true, import: 'default' }
)
const ultramarinePhotos = import.meta.glob(
  '@/assets/images/core/bungalos/ultramarine/*.{jpg,jpeg,png,svg,webp,avif,gif,bmp,ico}',
  { eager: true, import: 'default' }
)
const emeraldPhotos = import.meta.glob(
  '@/assets/images/core/bungalos/emerald/*.{jpg,jpeg,png,svg,webp,avif,gif,bmp,ico}',
  { eager: true, import: 'default' }
)

const items = [
  {
    id: 'sunset',
    badge: 'А-Фрейм Сансет',
    badgeGradient: 'linear-gradient(90deg,#1d254d 0%, #fb9062 10%, #fb9062 100%)',
    upTitle: 'А-фрейм «Сансет»',
    text: ' — просторный светлый коттедж в солнечных тонах с панорамными окнами и вторым светом. Две спальни с двухместными кроватями, кухня-гостиная с раскладным диваном. Бесплатный wi-fi и два Smart TV, водяное отопление, теплый пол в санузле и кондиционер. Питьевая вода с фильтром, чайник, заварник, сахар и горный чай, холодильник, плита, микроволновка, духовой шкаф, посудомоечная машина, вся кухонная утварь и приборы. Гостям подготовлены тапочки, полотенца, белоснежное сатиновое белье, ортопедические матрасы, фен и косметические наборы.',
    location: 'Вид на горы и поселок',
    beds: '2 спальни с двухместными кроватями, раскладной диван',
    guests: 'до 6 гостей',
    photos: toArray(sunsetPhotos),
  },
  {
    id: 'ultramarine',
    badge: 'А-Фрейм Ультрамарин',
    badgeGradient: 'linear-gradient(90deg,#0e2c5c 0%, #060a18 100%)',
    upTitle: 'А-фрейм «Ультрамарин»',
    text: ' — просторный уютный коттедж с синими акцентами, панорамными окнами и вторым светом. Две спальни с двухместными кроватями и кухня-гостиная с раскладным диваном. Бесплатный wi-fi и два Smart TV, водяное отопление, теплый пол в санузле и кондиционер. Питьевая вода с фильтром, чайник, заварник, сахар и горный чай, полноценный набор техники: холодильник, плита, микроволновка, духовой шкаф и посудомоечная машина, а также вся необходимая утварь и приборы. Для комфорта гостей — удобные тапочки, полотенца, белоснежное сатиновое постельное белье, ортопедические матрасы, фен и косметические наборы.',
    location: 'Вид на горы и поселок',
    beds: '2 спальни с двухместными кроватями, раскладной диван',
    guests: 'до 6 гостей',
    photos: toArray(ultramarinePhotos),
  },
  {
    id: 'emerald',
    badge: 'А-Фрейм Эмеральд',
    badgeGradient: 'linear-gradient(90deg,#114633 0%, #07140f 100%)',
    upTitle: 'А-фрейм «Эмеральд»',
    text: ' — просторный уютный коттедж с изумрудными акцентами, панорамными окнами и вторым светом. Две спальни с двухместными кроватями и кухня-гостиная с раскладным диваном. Бесплатный wi-fi и два Smart TV, водяное отопление, теплый пол в санузле и кондиционер. Питьевая вода «серебрянка» и фильтр, чайник, заварник, сахар и горный чай, полный набор техники: холодильник, плита, микроволновая печь, духовой шкаф, посудомоечная машина и весь комплект кухонной утвари. В коттедже ждут удобные тапочки, полотенца, белоснежное сатиновое белье, ортопедические матрасы, фен и косметические наборы.',
    location: 'Вид на горы, поселок и ущелье Мишоко',
    beds: '2 спальни с двухместными кроватями, раскладной диван',
    guests: 'до 6 гостей',
    photos: toArray(emeraldPhotos),
  },
]

/* Слайдер */
const currentIndexes = reactive(
  Object.fromEntries(items.map((it) => [it.id, 0]))
)

const innerStyle = (id) => {
  const offset = currentIndexes[id] * (slideWidth.value + gap)
  return { transform: 'translateX(-' + offset + 'px)', gap: gap + 'px' }
}
const nextSlide = (id, length) => {
  if (currentIndexes[id] < length - visibleSlides) currentIndexes[id]++
}
const prevSlide = (id, length) => {
  if (currentIndexes[id] > 0) currentIndexes[id]--
}

/* Лайтбокс */
const lightbox = reactive({ open: false, photos: [], index: 0 })
const currentPhoto = computed(() => lightbox.photos[lightbox.index])

const openLightbox = (photos, index) => {
  lightbox.open = true
  lightbox.photos = photos
  lightbox.index = index
}
const closeLightbox = () => {
  lightbox.open = false
  lightbox.photos = []
  lightbox.index = 0
}
const nextLightbox = () => {
  if (lightbox.index < lightbox.photos.length - 1) lightbox.index++
}
const prevLightbox = () => {
  if (lightbox.index > 0) lightbox.index--
}

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
const onKey = (e) => {
  if (e.key === 'Escape') closeLightbox()
}
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
  margin: 50px auto 0 auto;
  max-width: var(--container-width);
  padding: 0 var(--container-padding) 60px;
  position: relative;
}

.bungalos__wrap {
  display: flex;
  flex-direction: column;
  gap: 80px;
}

.bungalos__wrap_block {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.bungalos__item-badge {
  align-self: flex-start;
  --badge-min-w: 1040px;
}

.bungalos__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
}

/* Левая колонка */
.bungaloswrap_blockleft {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 508px;
}

.bungaloswrap_blockleft_title {
  font-family: var(--font-secondary);
  font-size: calc(var(--fontsize-unusual) * 2);
  color: var(--white-color);
  margin: 0 0 8px 0;
  align-self: flex-end;
  text-align: right;
}

.bungaloswrap_blockleft_btn {
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
  align-self: flex-start;
}

/* Правая колонка — основной текст */
.bungaloswrap_blockright_text {
  color: var(--white-color);
  font-size: var(--fontsize-unusual);
  max-width: 508px;
  font-family: var(--font-main);
  padding: 24px 28px;
  line-height: 1.5;
}

.bungaloswrap_blockright_text-up {
  font-family: var(--font-secondary);
  font-size: 36px;
  text-transform: uppercase;
  display: block;
  margin-bottom: 8px;
}

/* Доп. блок (location / beds / guests) — ТУТ МЕНЯЛИ */
.bungaloswrap_blockright_bot {
  margin-left: 0;
  color: var(--faded-color);
  font-size: 16px;       /* увеличили шрифт */
  line-height: 1.35;     /* чуть плотнее строки */
  font-family: var(--font-core);
  padding: 18px 24px;
  display: flex;
  flex-direction: column;
  gap: 6px;              /* уменьшили расстояние между пунктами */
}

.bungaloswrap_blockright_bot-text {
  margin: 0;             /* убрали лишние отступы у p */
}

.bungaloswrap_blockright_bot_min {
  display: flex;
  gap: 6px;
  align-items: center;
}

.bungaloswrap_blockright_bot_min-text {
  margin: 0;
  font-size: 16px;
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
}

.bungalos__carousel_slide {
  flex-shrink: 0;
  border-radius: 16px;
  overflow: hidden;
}

.bungalos__carousel_img {
  width: 100%;
  height: var(--bung-photo-h, 500px);
  object-fit: cover;
  cursor: pointer;
  border-radius: 16px;
}

.bungalos__carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10;
  width: 60px;
  height: 60px;
}

.bungalos__carousel-arrow.left {
  left: 0;
  transform: rotate(180deg) translateY(50%);
}

.bungalos__carousel-arrow.right {
  right: 0;
}

/* Лайтбокс */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.85);
  display: grid;
  place-items: center;
  z-index: 9999;
  padding: clamp(20px, 4vw, 30px);
  box-sizing: border-box;
}

.lightbox__frame {
  position: relative;
  width: min(1200px, calc(100vw - clamp(40px, 8vw, 60px)));
  max-width: calc(100vw - clamp(40px, 8vw, 60px));
  height: min(90vh, calc(100vh - clamp(40px, 8vw, 60px)));
  max-height: calc(100vh - clamp(40px, 8vw, 60px));
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}

.lightbox__viewport {
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-x pan-y pinch-zoom;
  overscroll-behavior: contain;
  box-sizing: border-box;
}

.lightbox__img {
  display: block;
  width: 100%;
  max-width: 100%;
  height: auto;
  max-height: 100%;
  border-radius: 12px;
  object-fit: contain;
  margin: 0 auto;
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
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 60px;
  color: #fff;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 6px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox__arrow.left {
  left: 6px;
}

.lightbox__arrow.right {
  right: 6px;
}

@media (max-width: 992px) {
  .bungalos {
    padding: 0 var(--container-padding);
  }

  .bungalos__wrap_block {
    flex-direction: column;
    align-items: stretch;
    text-align: left;
  }

  .bungalos__content {
    flex-direction: column;
    align-items: stretch;
    gap: 24px;
  }

  .bungaloswrap_blockleft,
  .bungaloswrap_blockright {
    align-items: flex-start;
    max-width: 100%;
  }

  .bungaloswrap_blockleft_title {
    align-self: flex-start;
    text-align: left;
  }

  .bungaloswrap_blockleft_btn {
    align-self: flex-start;
  }

  .bungaloswrap_blockright_text {
    max-width: 100%;
    padding: 20px 22px;
  }

  .bungaloswrap_blockright_bot {
    margin-left: 0;
    gap: 10px;
    text-align: left;
  }

  .bungalos__carousel-arrow {
    width: 48px;
    height: 48px;
  }
}

@media (max-width: 640px) {
  .bungalos {
    padding: 0 var(--container-padding);
  }

  .bungaloswrap_blockleft_title {
    font-size: calc(var(--fontsize-unusual) * 1.5);
  }

  .bungaloswrap_blockright_text {
    font-size: var(--fontsize-primary);
    padding: 16px 18px;
    margin: 0;
  }

  .bungaloswrap_blockleft_btn {
    font-size: 24px;
    padding: 10px 24px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bungalos__carousel-arrow {
    width: 36px;
    height: 36px;
  }

  .bungaloswrap_blockright_text-up {
    font-size: calc(var(--fontsize-unusual) * 1.2);
    margin: 0 0 6px 0;
  }

  .bungalos__item-badge {
    align-self: flex-start;
  }

  .lightbox {
    padding: 20px;
  }

  .lightbox__frame {
    width: calc(100vw - 40px);
    max-width: calc(100vw - 40px);
    height: calc(100vh - 40px);
    max-height: calc(100vh - 40px);
  }

  .lightbox__img {
    width: 100%;
    height: auto;
    max-height: 100%;
  }
}
</style>
