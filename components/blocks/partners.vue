<template>
  <section class="partners" id="partners">
    <SectionBadge
      class="partners__badge"
      gradient="linear-gradient(90deg,#2a315b 0%, #0d1330 100%)"
      align="right"
    >
      Партнёры
    </SectionBadge>

    <div class="partners__wrap">
      <div class="partners__wrap_carousel-container">
        <div class="partners__wrap_carousel" :style="{ width: containerWidth + 'px' }">
          <img
            v-if="currentIndex > 0"
            :src="Arrow"
            alt="Стрелка"
            class="partners__wrap_carousel-arrow left"
            @click="prevSlide"
          />

          <div class="partners__wrap_carousel_view">
            <div
              class="partners__wrap_carousel_inner"
              :style="{ transform: `translateX(-${currentIndex * (slideWidth + gap)}px)` }"
            >
              <div
                v-for="(item, index) in items"
                :key="index"
                class="partners__wrap_carousel_block"
                :style="{ width: slideWidth + 'px' }"
              >
                <img
                  :src="item.img"
                  :alt="item.title"
                  class="partners__wrap_carousel_block-reel"
                  draggable="false"
                />
                <div class="partners__wrap_carousel_block_bot">
                  <p class="partners__wrap_carousel_block_bot-text partners__wrap_carousel_block_bot-text--title">
                    {{ item.title }}
                  </p>
                  <p class="partners__wrap_carousel_block_bot-text partners__wrap_carousel_block_bot-text--description">
                    {{ item.description }}
                  </p>
                  <p
                    v-if="item.price"
                    class="partners__wrap_carousel_block_bot-text partners__wrap_carousel_block_bot-text--price"
                  >
                    {{ item.price }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <img
            v-if="currentIndex < maxIndex"
            :src="Arrow"
            alt="Стрелка"
            class="partners__wrap_carousel-arrow right"
            @click="nextSlide"
          />
        </div>

        <BookingButton customClass="partners__wrap_btn">
          Забронировать
        </BookingButton>
      </div>

      <div class="partners__purchases">
        
        <div class="partners__purchases_grid">
          <div
            v-for="item in purchaseItems"
            :key="item.title"
            class="partners__purchases_card"
          >
            <p class="partners__purchases_card-title">{{ item.title }}</p>
            <p class="partners__purchases_card-price">{{ item.price }}</p>
            <p class="partners__purchases_card-desc">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <Cloud width="156px" top="-20px" left="-30px" />
    <Cloud width="118px" top="-35px" right="15%" />
    <Cloud width="118px" bottom="39%" left="23%" />
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

const Arrow = resolveImage('core/partners/arrow')
const Grill = resolveImage('core/partners/grill')
const Curd = resolveImage('core/partners/curd')
const Vat = resolveImage('core/partners/vat')
const Flowers = resolveImage('core/partners/flowers')

const items = [
  {
    img: Vat,
    title: 'Конные прогулки',
    description: 'Конный клуб в 50 метрах от наших коттеджей.',
  },
  {
    img: Curd,
    title: 'Джиппинг',
    description:
      'Возможность посетить самые труднодоступные красоты. Заберут от дома и привезут обратно.',
  },
  {
    img: Grill,
    title: 'Рафтинг',
    description: 'Организуем сплав как для двоих, так и для большой компании.',
  },
  {
    img: Flowers,
    title: 'Экскурсии',
    description:
      'Организуем экскурсии к главным достопримечательностям горной Адыгеи с опытным гидом.',
    price: 'от 4000 ₽ за услугу',
  },
  {
    img: Grill,
    title: 'Доставка завтрака',
    description:
      'Доставка вкусного и эстетичного завтрака из популярного кафе с авторской кухней.',
  },
  {
    img: Flowers,
    title: 'Букет к важному событию',
    description: 'Мы позаботимся о доставке букета к вашему важному событию.',
  },
]



// слайдер
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
.partners {
  margin: 50px auto 0 auto;
  max-width: var(--container-width);
  position: relative;
  padding: 0 var(--container-padding) 10px;
}

.partners__badge {
  margin-bottom: 32px;
  --badge-min-w: 245px;
}

.partners__wrap {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.partners__wrap_carousel-container {
  width: 100%;
  max-width: 1160px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.partners__wrap_carousel {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  overflow: hidden;
}

.partners__wrap_carousel_view {
  overflow: hidden;
  width: 100%;
}

.partners__wrap_carousel_inner {
  display: flex;
  transition: transform 0.5s ease;
  gap: 20px;
}

.partners__wrap_carousel_block {
  flex-shrink: 0;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
}

.partners__wrap_carousel_block-reel {
  width: 100%;
  height: 237px;
  border-radius: 16px 16px 0 0;
  object-fit: cover;
}

.partners__wrap_carousel_block_bot {
  background-color: #121d3c;
  color: var(--white-color);
  font-size: 20px;
  padding: 18px 20px 20px;
  border-radius: 0 0 16px 16px;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 150px; /* выравнивает высоту по самой заполненной карточке (подберёшь число под дизайн) */
}

.partners__wrap_carousel_block_bot-text {
  margin: 0;
  font-family: var(--font-core);
  font-weight: 300;
  line-height: 1.4;
}

.partners__wrap_carousel_block_bot-text--title {
  font-family: var(--font-secondary);
  font-size: 32px;
  font-weight: 400;
}

.partners__wrap_carousel_block_bot-text--description {
  font-size: 18px;
  opacity: 0.9;
}

.partners__wrap_carousel_block_bot-text--price {
  font-weight: 600;
  margin-top: auto; /* цена всегда прижимается вниз */
  font-size: 26px; /* как в "Удобствах" */
}

.partners__wrap_carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10;
}

.partners__wrap_carousel-arrow.left {
  left: 0;
  transform: rotate(180deg) translateY(50%);
}

.partners__wrap_carousel-arrow.right {
  right: 0;
}

.partners__wrap_btn {
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
}

.partners__purchases {
  margin-top: 36px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.partners__purchases_title {
  font-family: var(--font-secondary);
  font-size: 32px;
  color: var(--white-color);
  margin: 0;
}

.partners__purchases_grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
}

.partners__purchases_card {
  background: #0d1330;
  border-radius: 16px;
  padding: 16px;
  color: var(--white-color);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.partners__purchases_card-title {
  font-family: var(--font-secondary);
  font-size: 22px;
  margin: 0;
}

.partners__purchases_card-price {
  font-family: var(--font-core);
  margin: 0;
  font-weight: 600;
  font-size: 18px;
}

.partners__purchases_card-desc {
  font-family: var(--font-core);
  margin: 0;
  font-weight: 300;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.85);
  font-size: 17px;
}

@media (max-width: 1024px) {
  .partners {
    padding: 0 var(--container-padding);
  }

  .partners__wrap_carousel_block_bot {
    font-size: 18px;
  }

  .partners__wrap_carousel_block_bot-text--title {
    font-size: 22px;
  }

  .partners__wrap_carousel_block_bot-text--description {
    font-size: 16px;
  }

  .partners__wrap_carousel_block_bot-text--price {
    font-size: 24px;
  }

  .partners__wrap_carousel-container {
    align-items: flex-start;
  }

  .partners__wrap_btn {
    align-self: flex-start;
  }

  .partners__wrap_carousel-arrow {
    width: 48px;
  }

  .partners__purchases_card-title {
    font-size: 20px;
  }

  .partners__purchases_card-price {
    font-size: 16px;
  }

  .partners__purchases_card-desc {
    font-size: 16px;
  }
}

@media (max-width: 640px) {
  .partners {
    padding: 0 var(--container-padding);
  }

  .partners__wrap_carousel_block-reel {
    height: 200px;
  }

  .partners__wrap_carousel_block_bot {
    font-size: var(--fontsize-primary);
    min-height: 140px;
  }

  .partners__wrap_btn {
    font-size: 24px;
    padding: 10px 24px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .partners__wrap_carousel-arrow {
    width: 36px;
  }
}
</style>
