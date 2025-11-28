<template>
  <section class="optionally" id="optionally">
    <SectionBadge
      class="optionally__badge"
      gradient="linear-gradient(90deg, #061222 0%, #061222 100%)"
      align="right"
    >
      Удобства
    </SectionBadge>

    <div class="optionally__wrap">
      <!-- контейнер как в partners -->
      <div class="optionally__wrap_carousel-container">
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
                  <p
                    class="optionally__wrap_carousel_block_bot-text optionally__wrap_carousel_block_bot-text--title"
                  >
                    {{ item.title }}
                  </p>
                  <p
                    class="optionally__wrap_carousel_block_bot-text optionally__wrap_carousel_block_bot-text--description"
                  >
                    {{ item.description }}
                  </p>
                  <p
                    class="optionally__wrap_carousel_block_bot-text optionally__wrap_carousel_block_bot-text--price"
                  >
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
    </div>

    <Cloud width="156px" top="180px" left="-30px" />
    <Cloud width="118px" top="120px" right="15%" />
    <Cloud width="118px" bottom="39%" left="33%" />
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

const Arrow = resolveImage('core/optionally/arrow')
const Grill = resolveImage('core/optionally/grill')
const Napch = resolveImage('core/optionally/napch')
const Hld = resolveImage('core/optionally/hld')
const Banya = resolveImage('core/optionally/Banya')

const items = [
  {
    img: Napch,
    title: 'Трансфер',
    price: 'от 4000 ₽ за услугу',
    description: 'Организуем встречу гостей из аэропорта или ж/д вокзала.',
  },
  {
    img: Grill,
    title: 'Вязанка дров',
    price: '450 рублей',
    description: 'Готовый запас дров для камина или мангала.',
  },
  {
    img: Hld,
    title: 'Пачка углей',
    price: '350 рублей',
    description: 'Уголь для мангала, чтобы быстро разжечь огонь.',
  },
  {
    img: Grill,
    title: 'Жидкость для розжига',
    price: '150 рублей',
    description: 'Удобная жидкость для быстрого розжига углей.',
  },
  {
    img: Banya,
    title: 'Банный веник',
    price: 'от 350 рублей',
    description: 'Веник для комфортного посещения бани.',
  },
  {
    img: Napch,
    title: 'Аренда колонки «Алиса»',
    price: '500 рублей сутки',
    description: 'Колонка для музыки и умных подсказок во время отдыха.',
  },
]

// ширина контейнера и количество видимых карточек
const containerWidth = ref(1160)
const visibleSlides = ref(3)
const gap = 20
const slideWidth = computed(
  () =>
    (containerWidth.value - (visibleSlides.value - 1) * gap) /
    visibleSlides.value
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
  margin: 50px auto 0 auto;
  max-width: var(--container-width);
  position: relative;
  padding: 0 var(--container-padding) 10px;
}

.optionally__badge {
  margin-bottom: 32px;
  --badge-min-w: 245px;
}

.optionally__wrap {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

/* как в partners */
.optionally__wrap_carousel-container {
  width: 100%;
  max-width: 1160px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.optionally__wrap_carousel {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  overflow: hidden;
}

.optionally__wrap_carousel_view {
  overflow: hidden;
  width: 100%;
}

.optionally__wrap_carousel_inner {
  display: flex;
  transition: transform 0.5s ease;
  gap: 20px;
}

.optionally__wrap_carousel_block {
  flex-shrink: 0;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
}

.optionally__wrap_carousel_block-reel {
  width: 100%;
  height: 237px;
  border-radius: 16px 16px 0 0;
  object-fit: cover;
}

.optionally__wrap_carousel_block_bot {
  background-color: #121d3c;
  color: var(--white-color);
  font-size: 24px;
  padding: 16px 20px;
  border-radius: 0 0 16px 16px;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

/* заголовок как в partners */
.optionally__wrap_carousel_block_bot-text {
  margin: 0;
  font-family: var(--font-core);
  font-weight: 200;
  position: relative;
  z-index: 1;
}

.optionally__wrap_carousel_block_bot-text--title {
  font-family: var(--font-secondary);
  font-size: 32px;
  font-weight: 400;
  margin-bottom: 4px;
}

.optionally__wrap_carousel_block_bot-text--description {
  font-size: 16px;
  line-height: 1.4;
  opacity: 0.9;
  max-width: 80%;
}

.optionally__wrap_carousel_block_bot-text--price {
  font-weight: 600;
  margin-top: auto; /* цена прижимается вниз, как в партнёрах */
}

.optionally__wrap_carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10;
}

.optionally__wrap_carousel-arrow.left {
  left: 0;
  transform: rotate(180deg) translateY(50%);
}

.optionally__wrap_carousel-arrow.right {
  right: 0;
}

.optionally__wrap_btn {
  background-color: var(--green-color);
  text-transform: uppercase;
  color: var(--white-color);
  padding: 7px 20px 9px 20px;
  border-radius: var(--border-radius-container);
  font-size: 33px;
  font-family: var(--font-secondary);
  line-height: 100%;
  border: none;
  margin-top: 20px;
  cursor: pointer;
  align-self: flex-start;
}

@media (max-width: 1024px) {
  .optionally {
    padding: 0 var(--container-padding);
  }

  /* как в partners — уменьшаем заголовок на планшетах */
  .optionally__wrap_carousel_block_bot-text--title {
    font-size: 22px;
  }

  .optionally__wrap_btn {
    align-self: flex-start;
  }

  .optionally__wrap_carousel-arrow {
    width: 48px;
  }
}

@media (max-width: 640px) {
  .optionally {
    padding: 0 var(--container-padding);
  }

  .optionally__wrap_carousel_block-reel {
    height: 200px;
  }

  .optionally__wrap_carousel_block_bot {
    font-size: var(--fontsize-primary);
  }

  .optionally__wrap_btn {
    font-size: 24px;
    padding: 10px 24px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .optionally__wrap_carousel-arrow {
    width: 36px;
  }
}
</style>
