<template>
    <section class="amenities">
        <SectionBadge
            class="amenities__badge"
            gradient="linear-gradient(90deg,#1d274b 0%, #0a0f24 100%)"
            align="right"
        >
            Услуги
        </SectionBadge>
        <div class="amenities__wrap">
            <div class="amenities__wrap_block text-overlay">
                <p class="amenities__wrap_block_title">Наши услуги</p>
                <p class="amenities__wrap_block_sub">Чтобы разнообразить отдых</p>

                <p class="amenities__wrap_block_name" @click="scrollTo('bath')">
                    Баня
                </p>
                <p class="amenities__wrap_block_name" @click="scrollTo('optionally')">
                    Дополнительно
                </p>
                <p class="amenities__wrap_block_name" @click="scrollTo('pleasantly')">
                    Бесплатно
                </p>

                <p class="amenities__wrap_block_bot">
                    LAS NUBES VILLAGE — посуточная аренда коттеджей
                </p>
            </div>

            <div class="amenities__wrap_img">
                <img
                    :src="House"
                    alt="Дом"
                    class="amenities__wrap_img_reel"
                    draggable="false"
                />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { resolveImage } from '@/utils/resolveImage'
import SectionBadge from '@/components/ui/SectionBadge.vue'

const House = resolveImage('core/amenities/house')

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.amenities {
    margin: 50px auto 0 auto;
    max-width: var(--container-width);
    padding: 0 var(--container-padding);
}

.amenities__badge {
    margin-bottom: 32px;
}

.amenities__wrap {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 40px;
}

.amenities__wrap_block {
    display: flex;
    flex-direction: column;
    min-height: 410px;
    gap: 12px;
    padding: 24px 28px;
}

.amenities__wrap_block_title {
    font-size: calc(var(--fontsize-large)*2);
    color: var(--white-color);
    font-family: var(--font-secondary);
    letter-spacing: 0;
    max-width: 361px;
    margin: 0;
}

.amenities__wrap_block_sub {
    font-family: var(--font-main);
}

.amenities__wrap_block_sub,
.amenities__wrap_block_name {
    font-size: var(--fontsize-unusual);
    color: var(--white-color);
}

.amenities__wrap_block_name {
    font-family: var(--font-secondary);
    margin: 0 0 10px 0;
    cursor: pointer;
    font-size: 36px;
}

.amenities__wrap_block_bot {
    font-family: var(--font-secondary);
    color: var(--white-color);
    font-size: var(--fontsize-medium);
    max-width: 500px;
    margin: 40px 0 0 0;
}

/* Картинка на ПК — стандартно */
.amenities__wrap_img {
    margin-top: 15px;
}

.amenities__wrap_img_reel {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    border-radius: 16px;
}

/* ================================
   📱 Мобильная версия (<768px)
   ================================ */
@media (max-width: 768px) {
    .amenities__wrap {
        flex-direction: column;
        align-items: stretch;
        text-align: left;
    }

    .amenities__wrap_block {
        align-items: flex-start;
        padding: 20px 22px;
    }

    .amenities__wrap_block_bot {
        margin: 40px 0 0 0;
    }

    /* Картинка: всегда влезает в экран — с отступом 20px */
    .amenities__wrap_img {
        width: calc(100% - 40px); /* 20px слева + 20px справа */
        margin: 20px auto 0 auto; /* центрирование */
    }

    .amenities__wrap_img_reel {
        width: 100%;
        max-width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 16px;
    }
}

/* доп. тюнинг очень маленьких экранов */
@media (max-width: 540px) {
    .amenities {
        padding: 0 var(--container-padding);
    }

    .amenities__wrap_block_name {
        font-size: calc(var(--fontsize-large) * 0.9);
    }

    .amenities__wrap_block {
        padding: 18px 20px;
    }

    .amenities__wrap_block_bot {
        font-size: var(--fontsize-primary);
    }
}
</style>
