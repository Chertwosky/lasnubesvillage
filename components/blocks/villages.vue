<template>
    <section class="villages">
      <OrnamentTitle :fullbleed="true">Название</OrnamentTitle>
      <div class="villages__wrap">

        <img
          v-if="currentIndex > 0"
          :src="Arrow"
          alt="Стрелка"
          class="villages__wrap_arrow left"
          @click="prevSlide"
        />

        <div class="villages__wrap_view">
          <div
            class="villages__wrap_inner"
            :style="{ transform: `translateX(-${currentIndex * (slideWidth + sliderGap)}px)`, gap: sliderGap + 'px' }"
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
          alt="Стрелка"
          class="villages__wrap_arrow right"
          @click="nextSlide"
        />

      </div>

      <Cloud width="156px" top="-70px" left="27%" />
      <Cloud width="118px" top="-40px" right="-4%" />
      <Cloud width="218px" bottom="39%" left="-6%" />
      <Cloud width="118px" bottom="-15%" left="27%" />
      <Cloud width="161px" bottom="-15%" right="-13%" flipped/>
    </section>
  </template>

  <script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue'
  import Arrow from '@/assets/images/core/optionally/arrow.svg'
  import Build1 from '@/assets/images/core/villages/home.svg'
  import Build2 from '@/assets/images/core/villages/home.svg'
  import Build3 from '@/assets/images/core/villages/home.svg'
  import Cloud from '@/components/blocks/Cloud.vue'

  const items = [
    { img: Build1, title: 'SUNSET A-frame', hash: '#sunset' },
    { img: Build2, title: 'ULTRAMARINE A-frame', hash: '#ultramarine' },
    { img: Build3, title: 'EMERALD A-frame', hash: '#emerald' },
  ]

  const containerWidth = ref(1160)
  const visibleSlides = ref(3)
  const sliderGap = ref(30)

  const slideWidth = computed(() => {
    return (containerWidth.value - (visibleSlides.value - 1) * sliderGap.value) / visibleSlides.value
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
    containerWidth.value = Math.min(w * 0.9, 1160)

    if (w <= 800) {
      visibleSlides.value = 1
      sliderGap.value = 16
    } else if (w <= 1028) {
      visibleSlides.value = 2
      sliderGap.value = 24
    } else {
      visibleSlides.value = 3
      sliderGap.value = 30
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
    margin: 50px auto 0 auto;
    max-width: var(--container-width);
    padding: 0 var(--page-gutter);
    position: relative;
  }

  .villages__wrap {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    max-width: 1160px;
    margin: 0 auto;
    gap: clamp(12px, 3vw, 24px);
  }

  .villages__wrap_view {
    overflow: hidden;
    width: 100%;
  }

  .villages__wrap_inner {
    display: flex;
    transition: transform 0.5s ease;
  }

  .villages__wrap_block {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 11px;
  }

  .villages__wrap_block_reel {
    width: 100%;
    height: clamp(240px, 32vw, 420px);
    border-radius: 24px;
    object-fit: cover;
  }

  .villages__wrap_block_title {
    font-family: var(--font-secondary);
    color: var(--white-color);
    font-size: clamp(22px, 3vw, 34px);
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
  }

  .villages__wrap_arrow {
    position: relative;
    cursor: pointer;
    z-index: 10;
    width: clamp(42px, 5vw, 56px);
    flex-shrink: 0;
  }

  .villages__wrap_arrow.left {
    transform: rotate(180deg);
  }

  @media (max-width: 768px) {
    .villages__wrap {
      padding: 0;
    }

    .villages__wrap_block_reel {
      height: clamp(220px, 60vw, 340px);
    }

    .villages__wrap_block_title {
      font-size: clamp(18px, 5vw, 28px);
    }
  }

  @media (max-width: 540px) {
    .villages__wrap_arrow {
      width: 40px;
    }
  }
  </style>
