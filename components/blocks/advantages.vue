<template>
    <section class="advantages">
        <SectionBadge
            class="advantages__badge"
            gradient="linear-gradient(90deg, #12304a 0%, #071529 100%)"
            align="center"
        >
            Наши преимущества
        </SectionBadge>

        <div class="advantages__carousel" :style="{ width: containerWidth + 'px' }">
            <img
                v-if="currentIndex > 0"
                :src="Arrow"
                alt="Предыдущий слайд"
                class="advantages__arrow advantages__arrow_left"
                @click="prevSlide"
                draggable="false"
            />

            <div class="advantages__viewport">
                <div
                    class="advantages__track"
                    :style="{ transform: `translateX(-${currentIndex * (slideWidth + gap)}px)` }"
                >
                    <article
                        v-for="(item, index) in items"
                        :key="index"
                        class="advantages__card"
                        :style="{ width: slideWidth + 'px' }"
                    >
                        <div class="advantages__image" :style="{ backgroundImage: `url(${item.img})` }" aria-hidden="true" />
                        <div class="advantages__content">
                            <h3 class="advantages__title">{{ item.title }}</h3>
                            <p class="advantages__description">{{ item.description }}</p>
                        </div>
                    </article>
                </div>
            </div>

            <img
                v-if="currentIndex < maxIndex"
                :src="Arrow"
                alt="Следующий слайд"
                class="advantages__arrow advantages__arrow_right"
                @click="nextSlide"
                draggable="false"
            />
        </div>
    </section>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { resolveImage } from '@/utils/resolveImage'
import SectionBadge from '@/components/ui/SectionBadge.vue'

const Arrow = resolveImage('core/optionally/arrow')

const items = [
    {
        title: 'Аренда авто',
        description: 'Новые JAC J7 2023 года. Фиксированная цена за сутки',
        img: 'https://static.tildacdn.com/tild3135-3432-4664-a238-646262336535/photo.png'
    },
    {
        title: 'Питомцы',
        description: 'Мы рады вашим хвостатым и полосатым.',
        img: 'https://static.tildacdn.com/tild6664-3531-4635-b664-313832356332/photo.png'
    },
    {
        title: 'Баня',
        description: 'Личная баня-бочка — находится рядом с вашим коттеджем',
        img: 'https://static.tildacdn.com/tild3265-3334-4537-b737-343239363131/photo.png'
    },
    {
        title: 'Бытовая техника',
        description: 'От микроволновки и плиты до посудомоечной и стиральной машины',
        img: 'https://static.tildacdn.com/tild3361-6435-4937-a361-383430656233/-.png'
    },
    {
        title: 'Приятные мелочи',
        description:
            'Бумажные полотенца, стиральный порошок, соль, сахар, чай и кофе, банные наборы, настольные игры',
        img: 'https://static.tildacdn.com/tild3264-3463-4831-b564-633161363665/detergent.png'
    },
    {
        title: 'Без участия персонала',
        description: 'Самостоятельное заселение и выселение с помощью электронного доступа',
        img: 'https://static.tildacdn.com/tild6662-3163-4933-a263-386461653532/digital-door2.png'
    }
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
    if (currentIndex.value < maxIndex.value) currentIndex.value++
}

const prevSlide = () => {
    if (currentIndex.value > 0) currentIndex.value--
}

const updateSlides = () => {
    if (typeof window === 'undefined') return
    const width = Math.min(window.innerWidth * 0.9, 1160)
    containerWidth.value = Math.max(320, width)

    if (width <= 640) {
        visibleSlides.value = 1
    } else if (width <= 960) {
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
  padding: 0 var(--container-padding) 20px;
}

.advantages__badge {
  margin-bottom: 32px;
  --badge-min-w: 265px;
}

.advantages__carousel {
  position: relative;
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 16px;
}

.advantages__viewport {
  overflow: hidden;
  width: 100%;
}

.advantages__track {
  display: flex;
  gap: 20px;
  transition: transform 0.45s ease;
}

.advantages__card {
  background: #fcf4e9;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 18px 45px rgba(8, 23, 52, 0.15);
  display: flex;
  flex-direction: column;
  min-height: 320px;
}

.advantages__image {
  width: 100%;
  height: 190px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.advantages__content {
  padding: 16px 18px 22px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
}

.advantages__title {
  margin: 0;
  font-size: 18px;
  line-height: 1.25;
  font-family: var(--font-secondary);
  font-weight: 600;
  color: #3f3533;
}

.advantages__description {
  margin: 0;
  font-size: 16px;
  line-height: 1.45;
  font-family: var(--font-main);
  font-weight: 400;
  color: #3f3533;
}

.advantages__arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  width: 48px;
  height: 48px;
  filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.25));
}

.advantages__arrow_left {
  left: -4px;
  transform: rotate(180deg) translateY(50%);
}

.advantages__arrow_right {
  right: -4px;
}

@media (max-width: 1024px) {
  .advantages__arrow {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 768px) {
  .advantages {
    margin-top: 40px;
  }

  .advantages__card {
    min-height: 300px;
  }

  .advantages__title {
    font-size: 17px;
  }

  .advantages__description {
    font-size: 15px;
  }
}

@media (max-width: 640px) {
  .advantages__carousel {
    gap: 10px;
  }

  .advantages__arrow {
    width: 32px;
    height: 32px;
  }
}
</style>
