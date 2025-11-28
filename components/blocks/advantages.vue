<template>
    <section class="advantages">
        <SectionBadge
            class="advantages__badge"
            gradient="linear-gradient(90deg,#12304a 0%, #071529 100%)"
            align="center"
        >
            Наши преимущества
        </SectionBadge>

        <div class="advantages__slider">
            <button class="advantages__arrow" type="button" aria-label="Предыдущие преимущества" @click="scroll(-1)">
                <span>‹</span>
            </button>

            <div class="advantages__viewport" ref="viewport">
                <div class="advantages__track" ref="track">
                    <article v-for="perk in perks" :key="perk.title" class="advantages__card">
                        <div class="advantages__icon" :style="{ backgroundColor: perk.color }">
                            <span>{{ perk.icon }}</span>
                        </div>
                        <h3 class="advantages__title">{{ perk.title }}</h3>
                        <p class="advantages__text">{{ perk.description }}</p>
                    </article>
                </div>
            </div>

            <button class="advantages__arrow" type="button" aria-label="Следующие преимущества" @click="scroll(1)">
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

    const perks = [
        {
            title: 'Аренда авто',
            description: 'Новые JAC J7 2023 года с фиксированной ценой за сутки.',
            icon: '🚗',
            color: '#e8dbc8'
        },
        {
            title: 'Питомцы',
            description: 'Мы рады вашим хвостатым и полосатым гостям.',
            icon: '🐾',
            color: '#d0e8e4'
        },
        {
            title: 'Баня',
            description: 'Личная баня-бочка рядом с каждым коттеджем.',
            icon: '🔥',
            color: '#f2dfd7'
        },
        {
            title: 'Бытовая техника',
            description: 'От микроволновки и плиты до посудомоечной и стиральной машины.',
            icon: '🧺',
            color: '#dce5f4'
        },
        {
            title: 'Приятные мелочи',
            description: 'Банные наборы, порошок, соль, сахар, чай, кофе и настольные игры.',
            icon: '🎁',
            color: '#f7f0de'
        },
        {
            title: 'Без участия персонала',
            description: 'Самостоятельное заселение и выселение по электронному доступу.',
            icon: '🔑',
            color: '#e2d9ff'
        }
    ]

    const scroll = (direction) => {
        const container = viewport.value
        const sliderTrack = track.value

        if (!container || !sliderTrack) return

        const firstCard = sliderTrack.querySelector('.advantages__card')
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
.advantages {
    margin: 90px auto 0;
    max-width: var(--container-width);
    padding: 0 var(--container-padding);
}

.advantages__badge {
    margin-bottom: 36px;
    --badge-min-w: 270px;
}

.advantages__slider {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 16px;
}

.advantages__viewport {
    overflow: hidden;
}

.advantages__track {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: minmax(260px, 1fr);
    gap: 18px;
    padding: 6px 4px 12px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
}

.advantages__track::-webkit-scrollbar {
    display: none;
}

.advantages__card {
    background: var(--white-color);
    border-radius: var(--border-radius-container);
    box-shadow: 0 18px 45px rgba(8, 23, 52, 0.12);
    padding: 24px;
    display: grid;
    grid-template-rows: auto auto 1fr;
    gap: 12px;
    scroll-snap-align: start;
}

.advantages__icon {
    width: 56px;
    height: 56px;
    border-radius: 16px;
    display: grid;
    place-items: center;
    font-size: 26px;
    color: #3f3533;
}

.advantages__title {
    margin: 0;
    font-size: 20px;
    line-height: 1.3;
    font-family: var(--font-secondary);
    color: var(--black-color);
}

.advantages__text {
    margin: 0;
    font-size: var(--fontsize-medium);
    line-height: 1.4;
    color: #3f3533;
    font-family: var(--font-main);
}

.advantages__arrow {
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

.advantages__arrow:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 34px rgba(7, 21, 41, 0.28);
}

.advantages__arrow span {
    font-size: 22px;
    line-height: 1;
}

@media (max-width: 1024px) {
    .advantages {
        margin-top: 64px;
    }

    .advantages__slider {
        grid-template-columns: 1fr;
    }

    .advantages__arrow {
        order: 3;
        width: 40px;
        height: 40px;
    }

    .advantages__slider > .advantages__arrow:first-of-type {
        justify-self: start;
    }

    .advantages__slider > .advantages__arrow:last-of-type {
        justify-self: end;
    }

    .advantages__track {
        grid-auto-columns: minmax(240px, 1fr);
    }
}

@media (max-width: 640px) {
    .advantages {
        margin-top: 48px;
    }

    .advantages__badge {
        margin-bottom: 24px;
    }

    .advantages__track {
        grid-auto-columns: minmax(210px, 1fr);
        gap: 14px;
    }

    .advantages__card {
        padding: 20px;
        gap: 10px;
    }

    .advantages__title {
        font-size: 18px;
    }

    .advantages__text {
        font-size: var(--fontsize-secondary);
    }
}
</style>
