<template>
    <section class="activities">
        <SectionBadge
            class="activities__badge"
            gradient="linear-gradient(90deg,#12304a 0%, #071529 100%)"
            align="center"
        >
            Чем заняться рядом
        </SectionBadge>

        <div class="activities__slider">
            <button class="activities__arrow" type="button" aria-label="Предыдущие активности" @click="scroll(-1)">
                <span>‹</span>
            </button>

            <div class="activities__viewport" ref="viewport">
                <div class="activities__track" ref="track">
                    <article v-for="activity in activities" :key="activity.title" class="activities__card">
                        <div class="activities__icon" :style="{ backgroundColor: activity.color }">
                            <span>{{ activity.icon }}</span>
                        </div>
                        <h3 class="activities__title">{{ activity.title }}</h3>
                        <p class="activities__text">{{ activity.description }}</p>
                    </article>
                </div>
            </div>

            <button class="activities__arrow" type="button" aria-label="Следующие активности" @click="scroll(1)">
                <span>›</span>
            </button>
        </div>
    </section>
</template>

<script setup>
    import { ref } from 'vue'
    import SectionBadge from '@/components/ui/SectionBadge.vue'

    const viewport = ref(null)
    const track = ref(null)

    const activities = [
        {
            title: 'Расслабляйтесь в банном чане',
            description: 'Банный чан под звездным небом прямо на территории.',
            icon: '♨️',
            color: '#d0e8e4'
        },
        {
            title: 'Русская баня на дровах',
            description: 'Пар с ароматными вениками и заботой о здоровье.',
            icon: '🧖‍♀️',
            color: '#f7f0de'
        },
        {
            title: 'Кулинарные вечера у мангала',
            description: 'Готовьте ваши любимые блюда на свежем воздухе.',
            icon: '🍢',
            color: '#e2d9ff'
        },
        {
            title: 'Мечты на видовой террасе',
            description: 'Отдыхайте на верхней террасе с видом на горы.',
            icon: '🌄',
            color: '#f2dfd7'
        },
        {
            title: 'Фотографии для соцсетей',
            description: 'На территории множество уголков для красивых кадров.',
            icon: '📸',
            color: '#f3e6ff'
        },
        {
            title: 'Пешая прогулка к водопаду',
            description: 'Дойдите до водопада «Наковальня» в ущелье Мишоко.',
            icon: '💧',
            color: '#d8f0ff'
        },
        {
            title: 'Экстрим-парк Мишоко',
            description: 'Полетайте на зиплайне, пройдите «Тропу героев» или качайтесь на «Небесных качелях».',
            icon: '🪂',
            color: '#e8dbc8'
        },
        {
            title: 'Джиппинг и квадроциклы',
            description: 'Поездки к водопадам, гротам и скале «Чертов палец».',
            icon: '🛻',
            color: '#dce5f4'
        },
        {
            title: 'Рафтинг по реке Белая',
            description: 'Получите порцию адреналина на сплаве.',
            icon: '🚣‍♂️',
            color: '#e6f7ff'
        },
        {
            title: 'Конные прогулки',
            description: 'Катайтесь на лошадях вдоль ущелья Мишоко и по живописным маршрутам.',
            icon: '🐎',
            color: '#ffe9d6'
        }
    ]

    const scroll = (direction) => {
        const container = viewport.value
        const sliderTrack = track.value

        if (!container || !sliderTrack) return

        const firstCard = sliderTrack.querySelector('.activities__card')
        const styles = getComputedStyle(sliderTrack)
        const gap = Number.parseFloat(styles.columnGap || styles.gap || '0')
        const step = (firstCard?.getBoundingClientRect().width || container.clientWidth) + gap

        sliderTrack.scrollBy({
            left: direction * step,
            behavior: 'smooth'
        })
    }
</script>

<style scoped>
.activities {
    margin: 90px auto 0;
    max-width: var(--container-width);
    padding: 0 var(--container-padding);
}

.activities__badge {
    margin-bottom: 36px;
    --badge-min-w: 270px;
}

.activities__slider {
    position: relative;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 16px;
}

.activities__viewport {
    overflow: hidden;
}

.activities__track {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: minmax(360px, 1fr);
    gap: 18px;
    padding: 6px 4px 12px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
}

.activities__track::-webkit-scrollbar {
    display: none;
}

.activities__card {
    background: var(--white-color);
    border-radius: var(--border-radius-container);
    box-shadow: 0 18px 45px rgba(8, 23, 52, 0.12);
    padding: 24px;
    display: grid;
    grid-template-rows: auto auto 1fr;
    gap: 12px;
    scroll-snap-align: start;
}

.activities__icon {
    width: 56px;
    height: 56px;
    border-radius: 16px;
    display: grid;
    place-items: center;
    font-size: 26px;
    color: #3f3533;
}

.activities__title {
    margin: 0;
    font-size: 20px;
    line-height: 1.3;
    font-family: var(--font-secondary);
    color: var(--black-color);
}

.activities__text {
    margin: 0;
    font-size: var(--fontsize-medium);
    line-height: 1.4;
    color: #3f3533;
    font-family: var(--font-main);
}

.activities__arrow {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: none;
    background: #3f3533;
    color: #e8dbc8;
    display: grid;
    place-items: center;
    cursor: pointer;
    box-shadow: 0 10px 28px rgba(7, 21, 41, 0.2);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.activities__arrow:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 34px rgba(7, 21, 41, 0.28);
}

.activities__arrow span {
    font-size: 22px;
    line-height: 1;
}

@media (max-width: 1024px) {
    .activities {
        margin-top: 64px;
    }

    .activities__slider {
        grid-template-columns: 1fr;
    }

    .activities__arrow {
        order: 3;
        width: 40px;
        height: 40px;
    }

    .activities__slider > .activities__arrow:first-of-type {
        justify-self: start;
    }

    .activities__slider > .activities__arrow:last-of-type {
        justify-self: end;
    }

    .activities__track {
        grid-auto-columns: minmax(320px, 1fr);
    }
}

@media (max-width: 640px) {
    .activities {
        margin-top: 48px;
    }

    .activities__badge {
        margin-bottom: 24px;
    }

    .activities__slider {
        padding: 0 36px;
    }

    .activities__track {
        grid-auto-columns: minmax(230px, 1fr);
        gap: 14px;
    }

    .activities__card {
        padding: 20px;
        gap: 10px;
    }

    .activities__title {
        font-size: 20px;
    }

    .activities__text {
        font-size: var(--fontsize-secondary);
    }

    .activities__arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 38px;
        height: 38px;
    }

    .activities__arrow:first-of-type {
        left: 0;
        transform: translateY(-50%);
    }

    .activities__arrow:last-of-type {
        right: 0;
    }

    .activities__arrow:hover {
        transform: translateY(-50%);
    }
}
</style>
