<template>
    <section class="villages">
      <OrnamentTitle :fullbleed="true">A-frame</OrnamentTitle>
      <div class="villages__intro">
        <p class="villages__intro_text">
          Выберите дом с панорамными окнами, личной террасой и приватной зоной отдыха. Каждый A-frame создан, чтобы вы чувствовали себя в облаках.
        </p>
        <BookingButton customClass="villages__intro_btn">Забронировать</BookingButton>
      </div>
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
            <article
              v-for="(item, index) in items"
              :key="index"
              class="villages__wrap_block"
              :style="{ width: slideWidth + 'px' }"
            >
              <NuxtLink :to="{ path: '/cottages', hash: item.hash }" class="villages__wrap_link">
                <span class="villages__badge">A-frame</span>
                <img :src="item.img" alt="Домик" class="villages__wrap_block_reel" draggable="false" />
                <h3 class="villages__wrap_block_title">{{ item.title }}</h3>
                <p class="villages__wrap_block_desc">{{ item.description }}</p>
                <div class="villages__wrap_block_stats">
                  <span>{{ item.capacity }}</span>
                  <span>{{ item.area }}</span>
                  <span>{{ item.price }}</span>
                </div>
              </NuxtLink>
            </article>
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
      <Cloud width="156px" top="-70px" left="20%" />
      <Cloud width="118px" top="-40px" right="-6%" />
      <Cloud width="218px" bottom="42%" left="-8%" />
      <Cloud width="118px" bottom="-12%" left="18%" />
      <Cloud width="161px" bottom="-12%" right="-15%" flipped/>
    </section>
  </template>

  <script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue'
  import Arrow from '@/assets/images/core/optionally/arrow.svg'
  import Build1 from '@/assets/images/core/villages/home.svg'
  import Build2 from '@/assets/images/core/villages/home.svg'
  import Build3 from '@/assets/images/core/villages/home.svg'
  import Cloud from '@/components/blocks/Cloud.vue'
  import BookingButton from '@/components/blocks/BookingButton.vue'

  const items = [
    {
      img: Build1,
      title: 'SUNSET A-frame',
      hash: '#sunset',
      description: 'Дом с видом на закат и просторной террасой.',
      capacity: '2+2 гостя',
      area: '16 + 8 м²',
      price: 'от 10 000 ₽'
    },
    {
      img: Build2,
      title: 'ULTRAMARINE A-frame',
      hash: '#ultramarine',
      description: 'Яркий интерьер и приватная зона с чаном.',
      capacity: '2+2 гостя',
      area: '18 + 9 м²',
      price: 'от 10 500 ₽'
    },
    {
      img: Build3,
      title: 'EMERALD A-frame',
      hash: '#emerald',
      description: 'Уют в хвойном лесу и вечернее освещение.',
      capacity: '2+2 гостя',
      area: '18 + 9 м²',
      price: 'от 11 000 ₽'
    }
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
  :deep(.ornament-title) {
    color: #f0f4ff;
    font-family: var(--font-secondary);
    font-size: 48px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  :deep(.ornament-title)::before,
  :deep(.ornament-title)::after {
    filter: brightness(0) invert(1);
    opacity: 0.45;
  }

  .villages {
    margin: 80px auto 0;
    max-width: var(--container-width);
    padding: 0 20px;
    position: relative;
  }

  .villages__intro {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
    margin: 16px auto 40px;
    max-width: 960px;
  }

  .villages__intro_text {
    margin: 0;
    font-family: var(--font-main);
    font-size: var(--fontsize-medium);
    line-height: 1.5;
    color: #f0f4ff;
  }

  .villages__intro_btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 14px 44px;
    border-radius: 999px;
    background: linear-gradient(135deg, #50c57d 0%, #38a065 100%);
    color: var(--white-color);
    font-family: var(--font-secondary);
    font-size: 24px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .villages__intro_btn:hover {
    background: linear-gradient(135deg, #50c57d 0%, #38a065 100%) !important;
    color: var(--white-color) !important;
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
  }

  .villages__wrap_link {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 26px 28px 32px;
    border-radius: 36px;
    background: rgba(255, 255, 255, 0.92);
    box-shadow: 0 36px 72px rgba(61, 96, 170, 0.25);
    text-decoration: none;
    min-height: 100%;
    color: inherit;
    transition: transform 0.3s ease;
  }

  .villages__wrap_link:hover {
    transform: translateY(-8px);
  }

  .villages__badge {
    align-self: flex-start;
    padding: 6px 18px;
    border-radius: 999px;
    background: linear-gradient(135deg, #93baf8 0%, #7ca4e1 100%);
    color: #2c4c8e;
    font-family: var(--font-core);
    font-size: var(--fontsize-secondary);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .villages__wrap_block_reel {
    width: 100%;
    height: 320px;
    border-radius: 24px;
    object-fit: cover;
  }

  .villages__wrap_block_title {
    margin: 0;
    font-family: var(--font-secondary);
    font-size: 36px;
    color: #2d4f93;
    text-transform: uppercase;
  }

  .villages__wrap_block_desc {
    margin: 0;
    font-family: var(--font-main);
    font-size: var(--fontsize-medium);
    color: #3f5aa1;
  }

  .villages__wrap_block_stats {
    display: flex;
    gap: 12px;
    justify-content: space-between;
    font-family: var(--font-core);
    font-size: var(--fontsize-secondary);
    color: #27407a;
  }

  .villages__wrap_arrow {
    position: absolute;
    top: 45%;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 10;
    width: 52px;
  }

  .villages__wrap_arrow.left {
    left: -18px;
    transform: rotate(180deg) translateY(50%);
  }

  .villages__wrap_arrow.right {
    right: -18px;
  }

  @media (max-width: 1024px) {
    .villages {
      padding: 0 16px;
    }

    .villages__intro {
      flex-direction: column;
      text-align: center;
    }

    .villages__intro_btn {
      font-size: 20px;
      padding: 12px 32px;
    }

    .villages__wrap_block_reel {
      height: 280px;
    }
  }

  @media (max-width: 768px) {
    .villages__wrap_arrow {
      width: 42px;
    }

    .villages__wrap_block_title {
      font-size: 28px;
    }

    .villages__wrap_block_stats {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  @media (max-width: 560px) {
    .villages {
      padding: 0 12px;
    }

    .villages__wrap {
      padding: 0 8px;
    }

    .villages__wrap_link {
      padding: 22px 20px;
    }

    .villages__wrap_block_reel {
      height: 220px;
    }

    .villages__wrap_arrow {
      display: none;
    }
  }
  </style>
