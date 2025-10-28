<template>
  <section class="rebate" id="stocks">
    <div class="rebate__wrap">
      <img
        v-if="currentIndex > 0"
        :src="Arrow"
        alt="Предыдущий слайд"
        class="rebate__wrap_arrow left"
        @click="prevSlide"
      />

      <div class="rebate__wrap_view">
        <div
          class="rebate__wrap_inner"
          :style="{ transform: `translateX(-${currentIndex * (slideWidth + gap)}px)`, gap: gap + 'px' }"
        >
          <div
            v-for="(item, index) in items"
            :key="index"
            class="rebate__wrap_block"
            :style="{ width: slideWidth + 'px' }"
          >
            <div class="rebate__wrap_block_rct">
              <p>{{ item.label }}</p>
            </div>
            <img :src="item.img" :alt="item.label" class="rebate__wrap_block_reel" draggable="false" />
            <span class="rebate__wrap_block_text">{{ item.text }}</span>
          </div>
        </div>
      </div>

      <img
        v-if="currentIndex < maxIndex"
        :src="Arrow"
        alt="Следующий слайд"
        class="rebate__wrap_arrow right"
        @click="nextSlide"
      />
    </div>

    <Cloud width="120px" top="-60px" left="6%" />
    <Cloud width="118px" top="0px" right="28%" />
    <Cloud width="118px" bottom="-21%" left="22%" />
    <Cloud width="96px" bottom="-23%" right="29%" flipped />
  </section>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import Arrow from '@/assets/images/core/optionally/arrow.svg'
import Burthday from '@/assets/images/core/rebate/burthday.svg'
import Feedback from '@/assets/images/core/rebate/feedback.svg'
import Bathhouse from '@/assets/images/core/rebate/bathhouse.svg'
import Cloud from '@/components/blocks/Cloud.vue'

const items = [
  {
    img: Burthday,
    label: '-10%',
    text: 'В день рождения или годовщину свадьбы дарим скидку 15%',
  },
  {
    img: Feedback,
    label: '-10%',
    text: 'За отзывы на яндекс картах дарим 10% скидку на следующий заезд',
  },
  {
    img: Bathhouse,
    label: 'Баня',
    text: 'При бронировании от 3 дней предоставляется разовое бесплатное посещение бани',
  },
]

const containerWidth = ref(1160)
const visibleSlides = ref(3)
const gap = ref(30)

const slideWidth = computed(() => {
  return (containerWidth.value - (visibleSlides.value - 1) * gap.value) / visibleSlides.value
})

const currentIndex = ref(0)
const maxIndex = computed(() => Math.max(items.length - visibleSlides.value, 0))

const nextSlide = () => {
  if (currentIndex.value < maxIndex.value) currentIndex.value++
}
const prevSlide = () => {
  if (currentIndex.value > 0) currentIndex.value--
}

const updateSlides = () => {
  const w = window.innerWidth
  containerWidth.value = Math.min(Math.max(w - 48, 320), 1160)

  if (w <= 640) {
    visibleSlides.value = 1
    gap.value = 16
  } else if (w <= 1028) {
    visibleSlides.value = 2
    gap.value = 24
  } else {
    visibleSlides.value = 3
    gap.value = 30
  }

  if (currentIndex.value > maxIndex.value) currentIndex.value = maxIndex.value
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
.rebate {
  margin: clamp(48px, 10vw, 120px) auto 0;
  max-width: var(--container-width);
  padding: 0 clamp(16px, 5vw, 40px);
  position: relative;
}

.rebate__wrap {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
}

.rebate__wrap_view {
  overflow: hidden;
  width: 100%;
}

.rebate__wrap_inner {
  display: flex;
  transition: transform 0.5s ease;
  align-items: stretch;
}

.rebate__wrap_block {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: clamp(12px, 2vw, 20px);
  position: relative;
  padding-top: clamp(10px, 2vw, 16px);
}

.rebate__wrap_block_rct {
  position: absolute;
  top: clamp(8px, 1.6vw, 16px);
  left: clamp(8px, 1.6vw, 16px);
  width: fit-content;
  min-width: 86px;
  background-color: var(--green-color);
  border-radius: var(--border-radius-container) 0;
  align-items: center;
  display: flex;
  justify-content: center;
  padding: clamp(6px, 1.4vw, 10px) clamp(12px, 2.2vw, 18px);
  z-index: 1;
}

.rebate__wrap_block_rct p {
  color: var(--white-color);
  font-size: clamp(15px, 2vw, 20px);
  text-transform: uppercase;
  margin: 0;
  font-family: var(--font-core);
}

.rebate__wrap_block_reel {
  width: 100%;
  height: clamp(200px, 32vw, 320px);
  border-radius: var(--border-radius-container) var(--border-radius-container) 0 0;
  object-fit: cover;
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.12);
}

.rebate__wrap_block_text {
  color: var(--white-color);
  font-size: clamp(18px, 2.8vw, 24px);
  text-align: left;
  font-family: var(--font-main);
  line-height: 1.5;
  min-height: clamp(96px, 16vw, 140px);
}

.rebate__wrap_arrow {
  position: absolute;
  top: 45%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10;
  width: clamp(34px, 6vw, 52px);
  transition: transform 0.2s ease;
}

.rebate__wrap_arrow:hover {
  transform: translateY(-50%) scale(1.05);
}

.rebate__wrap_arrow.left {
  left: clamp(-12px, -2vw, 0px);
  transform: rotate(180deg) translateY(50%);
}

.rebate__wrap_arrow.left:hover {
  transform: rotate(180deg) translateY(50%) scale(1.05);
}

.rebate__wrap_arrow.right {
  right: clamp(-12px, -2vw, 0px);
}

@media (max-width: 768px) {
  .rebate {
    padding: 0 clamp(12px, 6vw, 24px);
  }

  .rebate__wrap_block_text {
    text-align: center;
  }

  .rebate__wrap_arrow {
    width: clamp(30px, 8vw, 44px);
  }
}

@media (max-width: 640px) {
  .rebate__wrap_arrow {
    width: clamp(28px, 10vw, 40px);
  }

  .rebate__wrap_arrow.left,
  .rebate__wrap_arrow.right {
    position: static;
    transform: none;
  }

  .rebate__wrap {
    flex-direction: column;
    gap: clamp(16px, 5vw, 24px);
  }

  .rebate__wrap_arrow:hover,
  .rebate__wrap_arrow.left:hover {
    transform: none;
  }

  .rebate__wrap_block_text {
    min-height: auto;
  }
}
</style>
