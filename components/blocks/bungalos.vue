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
          gradient="linear-gradient(90deg,#101537 0%, #060714 100%)"
          align="left"
        >
          {{ item.title }}
        </SectionBadge>
        <div class="bungalos__columns">
          <!-- ЛЕВАЯ КОЛОНКА -->
          <div
            class="bungaloswrap_blockleft"
            :style="{ width: containerWidth + 'px' }"
          >

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
          <div class="bungaloswrap_blockright text-overlay text-overlay--block">
            <p class="bungaloswrap_blockright_text">
              <span class="bungaloswrap_blockright_text-up">{{ item.upTitle }}</span>
              {{ item.text }}
            </p>
            <div class="bungaloswrap_blockright_bot text-overlay text-overlay--list">
              <p class="bungaloswrap_blockright_bot-text">{{ item.location }}</p>
              <p class="bungaloswrap_blockright_bot-text">{{ item.beds }}</p>
              <div class="bungaloswrap_blockright_bot_min">
                <img :src="Man" alt="Иконка гостей" class="bungaloswrap_blockright_bot_min-reel" />
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
  import SectionBadge from '@/components/ui/SectionBadge.vue'
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
  margin: 50px auto 0 auto;
  max-width: var(--container-width);
  padding: 0 20px 60px;
  position: relative;
}

.bungalos__wrap {
  display: flex;
  flex-direction: column;
  gap: 80px; /* любое нужное значение */
}
.bungalos__wrap_block {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.bungalos__item-badge {
  align-self: flex-start;
}

.bungalos__columns {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
}

/* Левая колонка */
.bungaloswrap_blockleft { align-items: flex-end; display: flex; flex-direction: column; width: 100%; max-width: 508px; }
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



/* Правая колонка */
.bungaloswrap_blockright { width: 100%; max-width: 508px; box-sizing: border-box; }
.bungaloswrap_blockright_text { color: var(--white-color); font-size: var(--fontsize-unusual); max-width: 100%; font-family: var(--font-main); }
.bungaloswrap_blockright_text-up { font-family: var(--font-secondary); font-size: 36px; text-transform: uppercase; }
.bungaloswrap_blockright_bot_min { display: flex; gap: 8px; }
.bungaloswrap_blockright_bot {
  margin: 20px 0 0;
  color: var(--faded-color);
  font-size: var(--fontsize-small);
  font-family: var(--font-core);
  display: flex;
  flex-direction: column;
  gap: 10px;
}
/* Слайдер */
.bungalos__carousel { position: relative; display: flex; align-items: center; overflow: hidden; width: 100%; }
.bungalos__carousel_view { overflow: hidden; width: 100%; }
.bungalos__carousel_inner { display: flex; transition: transform 0.5s ease; }
.bungalos__carousel_slide { flex-shrink: 0; border-radius: 16px; overflow: hidden; }
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
.bungalos__carousel-arrow.left { left: 0; transform: rotate(180deg) translateY(50%); }
.bungalos__carousel-arrow.right { right: 0; }

/* Лайтбокс */
.lightbox { position: fixed; inset: 0; background: rgba(0,0,0,.85); display: flex; align-items: center; justify-content: center; z-index: 9999; padding: 20px; }
.lightbox__img { max-width: 100%; max-height: 100%; border-radius: 12px; }
.lightbox__close { position: fixed; top: 14px; right: 18px; font-size: 40px; color: #fff; background: transparent; border: none; cursor: pointer; }
.lightbox__arrow { position: fixed; top: 50%; transform: translateY(-50%); font-size: 60px; color: #fff; background: transparent; border: none; cursor: pointer; }
.lightbox__arrow.left { left: 20px; }
.lightbox__arrow.right { right: 20px; }

@media (max-width: 992px) {
  .bungalos { padding: 0 16px; }

  .bungalos__wrap_block {
    align-items: stretch;
    text-align: center;
  }

  .bungalos__item-badge {
    align-self: center;
  }

  .bungalos__columns {
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }

  .bungaloswrap_blockleft,
  .bungaloswrap_blockright {
    align-items: center;
    max-width: 100%;
  }

  .bungaloswrap_blockleft_btn {
    align-self: center;
  }

  .bungaloswrap_blockright_text {
    max-width: 100%;
    text-align: left;
  }

  .bungaloswrap_blockright_bot { align-items: flex-start; }

  .bungalos__carousel-arrow {
    width: 48px;
    height: 48px;
  }
}

@media (max-width: 640px) {
  .bungalos { padding: 0 12px; }

  .bungaloswrap_blockright_text {
    font-size: var(--fontsize-primary);
    text-align: left;
  }

  .bungaloswrap_blockleft_btn {
    font-size: 22px;
    padding: 10px 24px;
  }

  .bungalos__carousel-arrow {
    width: 36px;
    height: 36px;
  }

  .bungaloswrap_blockright_text-up {
    font-size: calc(var(--fontsize-unusual) * 1.2);
  }
}
</style>