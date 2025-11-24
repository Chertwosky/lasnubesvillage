<template>
  <section class="bath" :style="{ '--bath-photo-h': photoHeight + 'px' }">
    <SectionBadge
      class="bath__badge"
      gradient="linear-gradient(90deg,#2f1e16 0%, #120805 100%)"
      align="right"
    >
      Баня
    </SectionBadge>
    <div
      v-for="(item, index) in items"
      :key="index"
      class="bath__block"
      :id="item.id"
    >
      <div class="bath__block__left" :style="{ width: containerWidth + 'px' }">
        <h3 class="bath__block__left_title">{{ item.title }}</h3>
        <div class="bath__carousel" :style="{ width: containerWidth + 'px' }">
          <img
            v-if="currentIndexes[item.id] > 0"
            :src="Arrow"
            alt="Стрелка"
            class="bath__carousel-arrow left"
            @click="prevSlide(item.id, item.photos.length)"
          />
          <div class="bath__carousel_view">
            <div class="bath__carousel_inner" :style="innerStyle(item.id)">
              <div
                v-for="(photo, pIndex) in item.photos"
                :key="pIndex"
                class="bath__carousel_slide"
                :style="{ width: slideWidth + 'px' }"
              >
                <img
                  :src="photo"
                  alt="Фото бани"
                  class="bath__carousel_img"
                  draggable="false"
                  @click="openLightbox(item.photos, pIndex)"
                />
              </div>
            </div>
          </div>
          <img
            v-if="currentIndexes[item.id] < item.photos.length - visibleSlides"
            :src="Arrow"
            alt="Стрелка"
            class="bath__carousel-arrow right"
            @click="nextSlide(item.id, item.photos.length)"
          />
        </div>
        <BookingButton customClass="bath__block__left_btn">
          Забронировать
        </BookingButton>
      </div>

      <div class="bath__block__right">
        <p class="bath__block__right_text text-overlay">
          <span class="bath__block__right_text-up">{{ item.upTitle }}</span>
          {{ item.text }}
        </p>
        <div class="bath__block__right_bot text-overlay">
          <p class="bath__block__right_bot-text">{{ item.location }}</p>
          <p class="bath__block__right_bot-text">{{ item.beds }}</p>
          <div class="bath__block__right_bot_min">
            <img
              :src="Man"
              alt="Иконка гостей"
              class="bath__block__right_bot_min-reel"
              draggable="false"
            />
            <p class="bath__block__right_bot_min-text">
              {{ item.guests }}
            </p>
          </div>
        </div>
      </div>
      <Cloud width="156px" top="-60px" left="-30px" />
      <Cloud width="118px" top="-45px" right="23%" />
      <Cloud width="118px" bottom="39%" left="23%" />
      <Cloud width="118px" bottom="-5%" left="13%" />
      <Cloud width="161px" bottom="-30px" right="39px" flipped />
    </div>

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
import { computed, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import { resolveImage } from '@/utils/resolveImage'
import BookingButton from '@/components/blocks/BookingButton.vue'
import Cloud from '@/components/blocks/Cloud.vue'
import SectionBadge from '@/components/ui/SectionBadge.vue'

const Arrow = resolveImage('core/partners/arrow')
const Man = resolveImage('core/bath/man')

// 🔥 Автоматически подхватываем ВСЕ фотки из папки core/bath
// Поддерживаем форматы: png, jpg, jpeg, webp
const bathImages = Object.entries(
  import.meta.glob('@/assets/images/core/bath/*.{png,jpg,jpeg,webp}', {
    eager: true,
  })
)
  // сортируем по пути (соответственно по имени файла) — алфавит
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
  // достаём url (для ассетов Vite обычно сразу даёт строку)
  .map(([, mod]) => (mod && mod.default) || mod)
  // если иконка man лежит в этой же папке — убираем её из галереи
  .filter((src) => src && !src.includes('man'))

if (!bathImages.length) {
  console.warn('[Bath] В папке core/bath не найдено ни одной картинки для галереи')
}

const photoHeight = ref(500)
const visibleSlides = 1
const containerWidth = ref(508)
const gap = 20
const slideWidth = computed(
  () =>
    containerWidth.value / visibleSlides -
    (gap * (visibleSlides - 1)) / visibleSlides
)

const items = [
  {
    id: 'bath',
    title: 'Баня',
    upTitle: 'Баня',
    text: ' — неотъемлемая часть загородного отдыха. Индивидуальная баня- бочка есть у большинства наших коттеджей. Вам не придется далеко идти и ждать своей очереди. Наши бани-бочки электрические, вы можете затопить их самостоятельно в любой момент отдыха.',
    location: 'Локации: Черемыкино, Новожилово',
    beds: '3 кровати, 1 диван',
    guests: 'до 6 гостей',
    photos: bathImages, // <-- тут весь список фоток из папки
  },
]

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

const getHorizontalPadding = () => {
  if (typeof window === 'undefined') return 0
  const rootStyles = getComputedStyle(document.documentElement)
  const padding = parseFloat(rootStyles.getPropertyValue('--container-padding')) || 0
  return padding * 2
}

const updateContainerWidth = () => {
  if (typeof window === 'undefined') return
  const width = Math.max(280, window.innerWidth - getHorizontalPadding())
  const base = Math.min(508, width)
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
.bath {
    margin: 50px auto 0 auto;
    max-width: var(--container-width);
    padding: 40px var(--container-padding) 0 var(--container-padding);
}

.bath__badge {
    margin-bottom: 36px;
}
.bath__block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin: 0 0 50px 0;
    gap: 40px;
}
.bath__block__left,
.bath__block__right {
    display: flex;
    flex-direction: column;
}
.bath__block__left {
    align-items: flex-end;
    max-width: 100%;
}
.bath__block__left_btn {
    background-color: var(--green-color);
    text-transform: uppercase;
    color: var(--white-color);
    display: flex;
    padding: 7px 20px 15px 20px;
    border-radius: var(--border-radius-container);
    font-size: 33px;
    font-family: var(--font-secondary);
    line-height: 100%;
    letter-spacing: 0;
    border: none;
    width: fit-content;
    margin-top: 10px;
    cursor: pointer;
}
.bath__block__left_title {
    font-size: calc(var(--fontsize-unusual)*2);
    color: var(--white-color);
    font-family: var(--font-secondary);
    margin: 0 0 8px 0;
    align-self: flex-end;
    text-align: right;
}
.bath__block__right_bot_min {
    display: flex;
    gap: 8px;
}
.bath__block__right_bot {
    margin-left: 20px;
    color: var(--faded-color);
    font-weight: 200;
    font-size: var(--fontsize-small);
    font-family: var(--font-core);
    padding: 18px 22px;
    display: flex;
    flex-direction: column;
    gap: 12px;
}
.bath__block__right_text {
    color: var(--white-color);
    font-size: var(--fontsize-unusual);
    max-width: 508px;
    line-height: 140%;
    font-family: var(--font-main);
    padding: 24px 28px;
}
.bath__block__right_text-up {
    font-family: var(--font-secondary);
    font-size: 36px;
    text-transform: uppercase;
}
.bath__block__right_bot-text:first-of-type {
    margin-bottom: 24px;
}

.bath__carousel { position: relative; display: flex; align-items: center; overflow: hidden; width: 100%; max-width: 100%; }
.bath__carousel_view { overflow: hidden; width: 100%; }
.bath__carousel_inner { display: flex; transition: transform 0.5s ease; }
.bath__carousel_slide { flex-shrink: 0; border-radius: 16px; overflow: hidden; }
.bath__carousel_img {
    width: 100%;
    height: var(--bath-photo-h, 500px);
    object-fit: cover;
    cursor: pointer;
    border-radius: 16px;
}
.bath__carousel-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 10;
    width: 60px;
    height: 60px;
}
.bath__carousel-arrow.left { left: 0; transform: rotate(180deg) translateY(50%); }
.bath__carousel-arrow.right { right: 0; }

.lightbox { position: fixed; inset: 0; background: rgba(0,0,0,.85); display: grid; place-items: center; z-index: 9999; padding: clamp(20px, 4vw, 30px); box-sizing: border-box; }
.lightbox__frame { position: relative; width: min(1200px, calc(100vw - clamp(40px, 8vw, 60px))); max-width: calc(100vw - clamp(40px, 8vw, 60px)); height: min(90vh, calc(100vh - clamp(40px, 8vw, 60px))); max-height: calc(100vh - clamp(40px, 8vw, 60px)); display: flex; align-items: center; justify-content: center; box-sizing: border-box; }
.lightbox__viewport { width: 100%; max-width: 100%; height: 100%; max-height: 100%; overflow: auto; display: flex; align-items: center; justify-content: center; margin: 0 auto; -webkit-overflow-scrolling: touch; touch-action: pan-x pan-y pinch-zoom; overscroll-behavior: contain; box-sizing: border-box; }
.lightbox__img { display: block; width: 100%; max-width: 100%; height: auto; max-height: 100%; border-radius: 12px; object-fit: contain; margin: 0 auto; }
.lightbox__close { position: fixed; top: 14px; right: 18px; font-size: 40px; color: #fff; background: transparent; border: none; cursor: pointer; }
.lightbox__arrow { position: absolute; top: 50%; transform: translateY(-50%); font-size: 60px; color: #fff; background: transparent; border: none; cursor: pointer; padding: 6px; line-height: 1; display: flex; align-items: center; justify-content: center; }
.lightbox__arrow.left { left: 6px; }
.lightbox__arrow.right { right: 6px; }

@media (max-width: 992px) {
    .bath {
        padding: 40px var(--container-padding) 0 var(--container-padding);
    }

    .bath__block {
        flex-direction: column;
        text-align: left;
    }

    .bath__block__left,
    .bath__block__right {
        align-items: flex-start;
        max-width: 100%;
    }

    .bath__block__left_title {
        align-self: flex-start;
        text-align: left;
    }

    .bath__block__left_btn {
        align-self: flex-start;
    }

    .bath__block__right_bot {
        margin-left: 0;
        display: flex;
        gap: 16px;
        align-items: flex-start;
        text-align: left;
    }

    .bath__carousel-arrow {
        width: 48px;
        height: 48px;
    }
}

@media (max-width: 640px) {
    .bath {
        padding: 32px var(--container-padding) 0 var(--container-padding);
    }

    .bath__block__left_btn {
        font-size: 22px;
        padding: 10px 24px;
        width: 100%;
        text-align: center;
    }

    .bath__block__right_text {
        font-size: var(--fontsize-primary);
        padding: 18px 20px;
    }

    .bath__block__right_text-up {
        font-size: calc(var(--fontsize-unusual) * 1.2);
    }

    .bath__carousel-arrow {
        width: 36px;
        height: 36px;
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
