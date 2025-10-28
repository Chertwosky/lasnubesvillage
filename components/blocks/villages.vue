<template>
    <section class="villages">
      <OrnamentTitle :fullbleed="true">Название</OrnamentTitle>
      <div class="villages__wrap">

        <!-- Левая стрелка -->
        <img
          v-if="currentIndex > 0"
          :src="Arrow"
          alt="Стрелка"
          class="villages__wrap_arrow left"
          @click="prevSlide"
        />

        <!-- Контейнер слайдера -->
        <div class="villages__wrap_view">
          <div
            class="villages__wrap_inner"
            :style="{ transform: `translateX(-${currentIndex * (slideWidth + gap)}px)` }"
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

        <!-- Правая стрелка -->
        <img
          v-if="currentIndex < maxIndex"
          :src="Arrow"
          alt="Стрелка"
          class="villages__wrap_arrow right"
          @click="nextSlide"
        />

      </div>

      <!-- Декоративные облака -->
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
  const gap = 30

  const slideWidth = computed(() => {
    return (containerWidth.value - (visibleSlides.value - 1) * gap) / visibleSlides.value
  })

  const currentIndex = ref(0)
  const maxIndex = computed(() => items.length - visibleSlides.value)

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
    } else if (w <= 1028) {
      visibleSlides.value = 2
    } else {
      visibleSlides.value = 3
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
    padding: 0 20px;
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
    gap: 30px;
  }

  .villages__wrap_block {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 11px;
  }

  .villages__wrap_block_reel {
    width: 100%;
    height: 458px;
    border-radius: 16px;
    object-fit: cover;
  }

  .villages__wrap_block_title {
    font-family: var(--font-secondary);
    color: var(--white-color);
    font-size: calc(var(--fontsize-unusual) * 2);
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
  }

  .villages__wrap_arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 10;
  }

  .villages__wrap_arrow.left {
    left: 0;
    transform: rotate(180deg) translateY(50%);
  }

  .villages__wrap_arrow.right {
    right: 0;
  }

  @media (max-width: 768px) {
    .villages {
      padding: 0 16px;
    }

    .villages__wrap_block_reel {
      height: 320px;
    }

    .villages__wrap_block_title {
      font-size: calc(var(--fontsize-unusual) * 1.4);
    }

    .villages__wrap_arrow {
      width: 44px;
    }
  }

  @media (max-width: 540px) {
    .villages__wrap {
      padding: 0 8px;
    }

    .villages__wrap_block_reel {
      height: 240px;
    }

    .villages__wrap_arrow {
      width: 36px;
    }
  }
  </style>
