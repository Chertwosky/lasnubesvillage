<template>
  <section class="villages">
    <OrnamentTitle :fullbleed="true">Название</OrnamentTitle>
    <div class="villages__wrap">
      <img
        v-if="currentIndex > 0"
        :src="Arrow"
        alt="Предыдущий слайд"
        class="villages__wrap_arrow left"
        @click="prevSlide"
      />

      <div class="villages__wrap_view">
        <div
          class="villages__wrap_inner"
          :style="{ transform: `translateX(-${currentIndex * (slideWidth + gap)}px)`, gap: gap + 'px' }"
        >
          <div
            v-for="(item, index) in items"
            :key="index"
            class="villages__wrap_block"
            :style="{ width: slideWidth + 'px' }"
          >
            <NuxtLink :to="{ path: '/cottages', hash: item.hash }">
              <img :src="item.img" alt="Домик" class="villages__wrap_block_reel" draggable="false" />
            </NuxtLink>
            <NuxtLink :to="{ path: '/cottages', hash: item.hash }" class="villages__wrap_block_title">
              <span>{{ item.title }}</span>
            </NuxtLink>
          </div>
        </div>
      </div>

      <img
        v-if="currentIndex < maxIndex"
        :src="Arrow"
        alt="Следующий слайд"
        class="villages__wrap_arrow right"
        @click="nextSlide"
      />
    </div>

    <Cloud width="156px" top="-70px" left="27%" />
    <Cloud width="118px" top="-40px" right="-4%" />
    <Cloud width="218px" bottom="39%" left="-6%" />
    <Cloud width="118px" bottom="-15%" left="27%" />
    <Cloud width="161px" bottom="-15%" right="-13%" flipped />
  </section>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import Arrow from '@/assets/images/core/optionally/arrow.svg'
import Build1 from '@/assets/images/core/villages/home.svg'
import Build2 from '@/assets/images/core/villages/home.svg'
import Build3 from '@/assets/images/core/villages/home.svg'
import Cloud from '@/components/blocks/Cloud.vue'
import OrnamentTitle from '@/components/OrnamentTitle.vue'

const items = [
  { img: Build1, title: 'SUNSET A-frame', hash: '#sunset' },
  { img: Build2, title: 'ULTRAMARINE A-frame', hash: '#ultramarine' },
  { img: Build3, title: 'EMERALD A-frame', hash: '#emerald' },
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
.villages {
  margin: clamp(48px, 10vw, 120px) auto 0;
  max-width: var(--container-width);
  padding: 0 clamp(16px, 5vw, 40px);
  position: relative;
}

.villages__wrap {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
}

.villages__wrap_view {
  overflow: hidden;
  width: 100%;
}

.villages__wrap_inner {
  display: flex;
  transition: transform 0.5s ease;
  align-items: stretch;
}

.villages__wrap_block {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: clamp(12px, 2vw, 20px);
  align-items: center;
}

.villages__wrap_block_reel {
  width: 100%;
  height: clamp(240px, 38vw, 440px);
  border-radius: var(--border-radius-container);
  object-fit: cover;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.12);
}

.villages__wrap_block_title {
  font-family: var(--font-secondary);
  color: var(--white-color);
  font-size: clamp(20px, 4vw, 42px);
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.08em;
}

.villages__wrap_arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10;
  width: clamp(34px, 6vw, 52px);
  transition: transform 0.2s ease;
}

.villages__wrap_arrow:hover {
  transform: translateY(-50%) scale(1.05);
}

.villages__wrap_arrow.left {
  left: clamp(-12px, -2vw, 0px);
  transform: rotate(180deg) translateY(50%);
}

.villages__wrap_arrow.left:hover {
  transform: rotate(180deg) translateY(50%) scale(1.05);
}

.villages__wrap_arrow.right {
  right: clamp(-12px, -2vw, 0px);
}

@media (max-width: 768px) {
  .villages {
    padding: 0 clamp(12px, 6vw, 24px);
  }

  .villages__wrap_arrow {
    width: clamp(30px, 8vw, 44px);
  }
}

@media (max-width: 640px) {
  .villages__wrap_arrow {
    width: clamp(28px, 10vw, 40px);
  }

  .villages__wrap_arrow.left,
  .villages__wrap_arrow.right {
    position: static;
    transform: none;
  }

  .villages__wrap {
    flex-direction: column;
    gap: clamp(16px, 5vw, 24px);
  }

  .villages__wrap_arrow:hover,
  .villages__wrap_arrow.left:hover {
    transform: none;
  }
}
</style>
