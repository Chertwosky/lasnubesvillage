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
            title: 'Индивидуальный дворик',
            description: 'Патио с отдельным входом, беседка с мини-кухней и мангальная зона.',
            icon: '🏡',
            color: '#e8dbc8'
        },
        {
            title: 'Персональный банный чан',
            description: 'Банный чан у террасы вашего дома.',
            icon: '♨️',
            color: '#d0e8e4'
        },
        {
            title: 'Панорамные виды на горы',
            description: 'Панорамное остекление с видом на горы из любой точки дома.',
            icon: '🌄',
            color: '#f2dfd7'
        },
        {
            title: 'Верхняя видовая терраса',
            description: 'Просторная терраса на втором этаже с удобными креслами и обзорным видом.',
            icon: '🪑',
            color: '#dce5f4'
        },
        {
            title: 'Русская баня на дровах',
            description: 'Топится дровами. Парная на 6 человек, душ, обливочное ведро.',
            icon: '🧖‍♂️',
            color: '#f7f0de'
        },
        {
            title: 'Бытовая техника',
            description: 'Плита, духовой шкаф, микроволновка, холодильник, посудомоечная машина, чайник.',
            icon: '🍳',
            color: '#e2d9ff'
        },
        {
            title: 'Приятные мелочи',
            description: '2 smart TV, Wi-Fi, горный чай, сахар, соль, масло, приправы, наборы личной гигиены, белоснежные полотенца, капсулы для посудомойки, стол, сервированный красивой посудой, шампура, решетка, казан.',
            icon: '🎁',
            color: '#f3e6ff'
        },
        {
            title: 'Локация',
            description: '600 метров до красивейшего каньона Мишоко.',
            icon: '📍',
            color: '#d8f0ff'
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
    position: relative;
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
    grid-auto-columns: minmax(360px, 1fr);
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
        grid-auto-columns: minmax(320px, 1fr);
    }
}

@media (max-width: 640px) {
    .advantages {
        margin-top: 48px;
    }

    .advantages__badge {
        margin-bottom: 24px;
    }

    .advantages__slider {
        padding: 0 36px;
    }

    .advantages__track {
        grid-auto-columns: minmax(230px, 1fr);
        gap: 14px;
    }

    .advantages__card {
        padding: 20px;
        gap: 10px;
    }

    .advantages__title {
        font-size: 20px;
    }

    .advantages__text {
        font-size: var(--fontsize-secondary);
    }

    .advantages__arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 38px;
        height: 38px;
    }

    .advantages__arrow:first-of-type {
        left: 0;
        transform: translateY(-50%) rotate(0deg);
    }

    .advantages__arrow:last-of-type {
        right: 0;
    }

    .advantages__arrow:hover {
        transform: translateY(-50%);
    }
}
</style>
