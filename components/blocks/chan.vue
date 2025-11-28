<template>
  <section class="chan" :style="{ '--chan-photo-h': photoHeight + 'px' }">
    <SectionBadge
      class="chan__badge"
      gradient="linear-gradient(90deg,#2a1731 0%, #0d0716 100%)"
      align="right"
    >
      Чаны
    </SectionBadge>
    <div
      v-for="(item, index) in items"
      :key="index"
      class="chan__block"
      :id="item.id"
    >
      <div class="chan__block__left" :style="{ width: containerWidth + 'px' }">
        <h3 class="chan__block__left_title">{{ item.title }}</h3>
        <div class="chan__carousel" :style="{ width: containerWidth + 'px' }">
          <img
            v-if="currentIndexes[item.id] > 0"
            :src="Arrow"
            alt="Стрелка"
            class="chan__carousel-arrow left"
            @click="prevSlide(item.id, item.photos.length)"
          />
          <div class="chan__carousel_view">
            <div class="chan__carousel_inner" :style="innerStyle(item.id)">
              <div
                v-for="(photo, pIndex) in item.photos"
                :key="pIndex"
                class="chan__carousel_slide"
                :style="{ width: slideWidth + 'px' }"
              >
                <img
                  :src="photo"
                  alt="Фото чана"
                  class="chan__carousel_img"
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
            class="chan__carousel-arrow right"
            @click="nextSlide(item.id, item.photos.length)"
          />
        </div>
        <BookingButton customClass="chan__block__left_btn">
          Забронировать
        </BookingButton>
      </div>

      <div class="chan__block__right">
        <p class="chan__block__right_text text-overlay">
          <span class="chan__block__right_text-up">{{ item.upTitle }}</span>
          {{ item.text }}
        </p>
        <div class="chan__block__right_bot text-overlay">
          <p class="chan__block__right_bot-text">{{ item.location }}</p>
          <p class="chan__block__right_bot-text">{{ item.beds }}</p>
          <div class="chan__block__right_bot_min">
            <img
              :src="Man"
              alt="Иконка гостей"
              class="chan__block__right_bot_min-reel"
              draggable="false"
            />
            <p class="chan__block__right_bot_min-text">{{ item.guests }}</p>
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

// Стрелка и иконка гостя — обычные статичные картинки
const Arrow = resolveImage('core/partners/arrow')
const Man = resolveImage('core/chan/man')

// 🔥 Автоматически подхватываем ВСЕ фотки из папки core/chan
// Поддерживаем форматы: png, jpg, jpeg, webp
const chanImages = Object.entries(
  import.meta.glob('@/assets/images/core/chan/*.{png,jpg,jpeg,webp}', {
    eager: true,
  })
)
  // сортируем по пути (а значит по имени файла) — алфавит
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
  // достаём сам src (default-экспорт модуля)
  .map(([, mod]) => (mod && mod.default) || mod)
  // если нужно убрать man.png / man.jpg из галереи — фильтруем по имени
  .filter((src) => src && !src.includes('man'))

// ⚠️ На всякий случай: если картинок нет, чтобы не упасть
if (!chanImages.length) {
  console.warn('[Chan] В папке core/chan не найдено ни одной картинки для галереи')
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
    id: 'chan',
    upTitle: 'Банный чан',
    text: ' — чан у террасы дома, который мы подготовим только для вас. Вмещает до 6 человек, разогрев занимает около 3 часов, парение без ограничений по времени. Рядом кран-гидрант для регулировки температуры. Стоимость от 6500 ₽, доступны программы: ароматная пихта с цитрусами, эвкалипт, травяные мешочки или розовые лепестки (летом).',
    location: 'Расположение: у террасы дома',
    beds: 'Подготовка: ~3 часа, пользование до утра, 6500 руб. за услугу',
    guests: 'До 6 человек',
    photos: chanImages, // <-- сюда подставляется весь массив фоток из папки
  },
]

// Текущий индекс слайда по id блока
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

// Лайтбокс
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

// Респонсив по ширине окна
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
.chan {
    margin: 50px auto 0 auto;
    max-width: var(--container-width);
    padding: 40px var(--container-padding) 0 var(--container-padding);
}

.chan__badge {
    margin-bottom: 36px;
    --badge-min-w: 380px;
}
.chan__block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    gap: 40px;
}
.chan__block__left,
.chan__block__right {
    display: flex;
    flex-direction: column;
}
.chan__block__left {
    align-items: flex-end;
}
.chan__block__left_btn {
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
.chan__block__left_title {
    font-size: calc(var(--fontsize-unusual)*2);
    color: var(--white-color);
    font-family: var(--font-secondary);
    margin: 0 0 8px 0;
    align-self: flex-end;
    text-align: right;
}
.chan__block__right_bot_min {
    display: flex;
    gap: 8px;
}
.chan__block__right_bot {
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
.chan__block__right_text {
    color: var(--white-color);
    font-size: var(--fontsize-unusual);
    max-width: 508px;
    line-height: 140%;
    font-family: var(--font-main);
    padding: 24px 28px;
}
.chan__block__right_text-up {
    font-family: var(--font-secondary);
    font-size: 36px;
    text-transform: uppercase;
}
.chan__block__right_bot-text:first-of-type {
    margin-bottom: 24px;
}

.chan__carousel { position: relative; display: flex; align-items: center; overflow: hidden; width: 100%; }
.chan__carousel_view { overflow: hidden; width: 100%; }
.chan__carousel_inner { display: flex; transition: transform 0.5s ease; }
.chan__carousel_slide { flex-shrink: 0; border-radius: 16px; overflow: hidden; }
.chan__carousel_img {
    width: 100%;
    height: var(--chan-photo-h, 500px);
    object-fit: cover;
    cursor: pointer;
    border-radius: 16px;
}
.chan__carousel-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 10;
    width: 60px;
    height: 60px;
}
.chan__carousel-arrow.left { left: 0; transform: rotate(180deg) translateY(50%); }
.chan__carousel-arrow.right { right: 0; }

.lightbox { position: fixed; inset: 0; background: rgba(0,0,0,.85); display: grid; place-items: center; z-index: 9999; padding: clamp(20px, 4vw, 30px); box-sizing: border-box; }
.lightbox__frame { position: relative; width: min(1200px, calc(100vw - clamp(40px, 8vw, 60px))); max-width: calc(100vw - clamp(40px, 8vw, 60px)); height: min(90vh, calc(100vh - clamp(40px, 8vw, 60px))); max-height: calc(100vh - clamp(40px, 8vw, 60px)); display: flex; align-items: center; justify-content: center; box-sizing: border-box; }
.lightbox__viewport { width: 100%; max-width: 100%; height: 100%; max-height: 100%; overflow: auto; display: flex; align-items: center; justify-content: center; margin: 0 auto; -webkit-overflow-scrolling: touch; touch-action: pan-x pan-y pinch-zoom; overscroll-behavior: contain; box-sizing: border-box; }
.lightbox__img { display: block; width: 100%; max-width: 100%; height: auto; max-height: 100%; border-radius: 12px; object-fit: contain; margin: 0 auto; }
.lightbox__close { position: fixed; top: 14px; right: 18px; font-size: 40px; color: #fff; background: transparent; border: none; cursor: pointer; }
.lightbox__arrow { position: absolute; top: 50%; transform: translateY(-50%); font-size: 60px; color: #fff; background: transparent; border: none; cursor: pointer; padding: 6px; line-height: 1; display: flex; align-items: center; justify-content: center; }
.lightbox__arrow.left { left: 6px; }
.lightbox__arrow.right { right: 6px; }

@media (max-width: 992px) {
    .chan {
        padding: 40px var(--container-padding) 0 var(--container-padding);
    }

    .chan__block {
        flex-direction: column;
        text-align: left;
    }

    .chan__block__left,
    .chan__block__right {
        align-items: flex-start;
        max-width: 100%;
    }

    .chan__block__left_title {
        align-self: flex-start;
        text-align: left;
    }

    .chan__block__left_btn {
        align-self: flex-start;
    }

    .chan__block__right_bot {
        margin-left: 0;
        display: flex;
        gap: 16px;
        align-items: flex-start;
        text-align: left;
    }

    .chan__carousel-arrow {
        width: 48px;
        height: 48px;
    }
}

@media (max-width: 640px) {
    .chan {
        padding: 32px var(--container-padding) 0 var(--container-padding);
    }

    .chan__block__left_btn {
        font-size: 24px;
        padding: 10px 24px;
        width: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .chan__block__right_text {
        font-size: var(--fontsize-primary);
        padding: 18px 20px;
    }

    .chan__block__right_text-up {
        font-size: calc(var(--fontsize-unusual) * 1.2);
    }

    .chan__carousel-arrow {
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
