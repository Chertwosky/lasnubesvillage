<template>
  <section class="advantages">
    <SectionBadge
      class="advantages__badge"
      gradient="linear-gradient(90deg,#12304a 0%, #071529 100%)"
      align="left"
    >
      Наши преимущества
    </SectionBadge>

    <div class="advantages__content">
      <p class="advantages__lead">
        Всё, что делает отдых в Las Nubes Village удобным и расслабленным, собрано в одном месте.
      </p>

      <div class="advantages__carousel" :style="{ width: containerWidth + 'px' }">
        <button
          v-if="currentIndex > 0"
          type="button"
          class="advantages__arrow advantages__arrow--left"
          aria-label="Предыдущие преимущества"
          @click="prevSlide"
        >
          <span aria-hidden="true">‹</span>
        </button>

        <div class="advantages__carousel_view">
          <div
            class="advantages__carousel_inner"
            :style="{ transform: `translateX(-${currentIndex * (slideWidth + gap)}px)` }"
          >
            <article
              v-for="(item, index) in items"
              :key="index"
              class="advantages__card"
              :style="{ width: slideWidth + 'px' }"
            >
              <div class="advantages__card_imgwrap">
                <img :src="item.img" :alt="item.title" class="advantages__card_img" draggable="false" />
              </div>
              <div class="advantages__card_body">
                <h3 class="advantages__card_title">{{ item.title }}</h3>
                <p class="advantages__card_text">{{ item.description }}</p>
              </div>
            </article>
          </div>
        </div>

        <button
          v-if="currentIndex < maxIndex"
          type="button"
          class="advantages__arrow advantages__arrow--right"
          aria-label="Следующие преимущества"
          @click="nextSlide"
        >
          <span aria-hidden="true">›</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { resolveImage } from '@/utils/resolveImage'
import SectionBadge from '@/components/ui/SectionBadge.vue'

const items = [
  {
    title: 'Аренда авто',
    description: 'Новые JAC J7 2023 года. Фиксированная цена за сутки.',
    img: resolveImage('core/advantages/car'),
  },
  {
    title: 'Питомцы',
    description: 'Мы рады вашим хвостатым и полосатым гостям.',
    img: resolveImage('core/advantages/pets'),
  },
  {
    title: 'Баня',
    description: 'Личная баня-бочка находится прямо рядом с коттеджем.',
    img: resolveImage('core/advantages/sauna'),
  },
  {
    title: 'Бытовая техника',
    description: 'От микроволновки и плиты до посудомоечной и стиральной машины.',
    img: resolveImage('core/advantages/appliances'),
  },
  {
    title: 'Приятные мелочи',
    description: 'Полотенца, порошок, соль, сахар, чай, кофе, банные наборы и настольные игры.',
    img: resolveImage('core/advantages/gifts'),
  },
  {
    title: 'Без участия персонала',
    description: 'Самостоятельное заселение и выселение с помощью электронного доступа.',
    img: resolveImage('core/advantages/contactless'),
  },
]

const containerWidth = ref(1160)
const visibleSlides = ref(3)
const gap = 20
const slideWidth = computed(
  () => (containerWidth.value - (visibleSlides.value - 1) * gap) / visibleSlides.value
)

const currentIndex = ref(0)
const maxIndex = computed(() => Math.max(0, items.length - visibleSlides.value))

const nextSlide = () => {
  if (currentIndex.value < maxIndex.value) currentIndex.value += 1
}

const prevSlide = () => {
  if (currentIndex.value > 0) currentIndex.value -= 1
}

const updateSlides = () => {
  if (typeof window === 'undefined') return
  const width = Math.min(window.innerWidth * 0.9, 1160)
  containerWidth.value = Math.max(320, width)

  if (width <= 640) {
    visibleSlides.value = 1
  } else if (width <= 980) {
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
.advantages {
  margin: 60px auto 0 auto;
  max-width: var(--container-width);
  padding: 0 var(--container-padding) 60px;
}

.advantages__badge {
  margin-bottom: 28px;
  --badge-min-w: 260px;
}

.advantages__content {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.advantages__lead {
  margin: 0;
  max-width: 820px;
  color: var(--white-color);
  font-size: var(--fontsize-primary);
  line-height: 1.5;
  font-family: var(--font-core);
}

.advantages__carousel {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1160px;
  overflow: hidden;
}

.advantages__carousel_view {
  width: 100%;
  overflow: hidden;
}

.advantages__carousel_inner {
  display: flex;
  gap: 20px;
  transition: transform 0.45s ease;
}

.advantages__card {
  flex-shrink: 0;
  background: #fcf4e9;
  border-radius: 18px;
  box-shadow: 0 16px 32px rgba(7, 21, 41, 0.18);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.advantages__card_imgwrap {
  background: linear-gradient(135deg, #f7efe2 0%, #efe3d3 100%);
  padding: 16px;
}

.advantages__card_img {
  width: 100%;
  height: 180px;
  object-fit: contain;
  display: block;
}

.advantages__card_body {
  padding: 16px 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.advantages__card_title {
  margin: 0;
  font-size: 20px;
  font-family: var(--font-secondary);
  color: #3f3533;
}

.advantages__card_text {
  margin: 0;
  font-size: 16px;
  line-height: 1.4;
  color: #3f3533;
  font-family: var(--font-main);
  font-weight: 400;
}

.advantages__arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background: #3f3533;
  color: #e8dbc8;
  font-size: 28px;
  cursor: pointer;
  display: grid;
  place-items: center;
  box-shadow: 0 8px 18px rgba(7, 21, 41, 0.2);
}

.advantages__arrow--left {
  left: 0;
}

.advantages__arrow--right {
  right: 0;
}

@media (max-width: 1024px) {
  .advantages {
    padding: 0 var(--container-padding) 40px;
  }

  .advantages__badge {
    --badge-min-w: 220px;
  }

  .advantages__card_img {
    height: 160px;
  }
}

@media (max-width: 768px) {
  .advantages__lead {
    font-size: var(--fontsize-secondary);
  }

  .advantages__arrow {
    width: 38px;
    height: 38px;
    font-size: 24px;
  }
}

@media (max-width: 640px) {
  .advantages {
    padding: 0 var(--container-padding) 32px;
  }

  .advantages__carousel {
    gap: 12px;
  }

  .advantages__card_img {
    height: 150px;
  }

  .advantages__card_body {
    gap: 8px;
  }
}
</style>
