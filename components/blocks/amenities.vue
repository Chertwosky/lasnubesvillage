<template>
    <section class="amenities">
        <div class="amenities__wrap">
            <div class="amenities__wrap_block">
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
                <p class="amenities__wrap_block_bot">LAS NUBES VILLAGE — посуточная аренда коттеджей</p>
            </div>
            <div class="amenities__wrap_img">
                <img :src="House" alt="Дом" class="amenities__wrap_img_reel" draggable="false" loading="lazy" />
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import House from '@/assets/images/core/amenities/house.svg'
const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
<style scoped>
.amenities {
    margin: var(--layout-section-gap) auto 0 auto;
    width: min(100%, var(--container-width));
    padding: 0 var(--layout-content-padding);
}
.amenities__wrap {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: clamp(24px, 5vw, 56px);
    align-items: center;
}
.amenities__wrap_block {
    display: flex;
    flex-direction: column;
    min-height: 522px;
}
.amenities__wrap_block_title {
    font-size: clamp(34px, 4.5vw, 58px);
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
    margin: 0 0 12px 0;
    cursor: pointer;
    font-size: clamp(22px, 2.8vw, 36px);
    letter-spacing: 0.06em;
}
.amenities__wrap_block_bot {
    font-family: var(--font-secondary);
    color: var(--white-color);
    font-size: clamp(18px, 1.8vw, 24px);
    max-width: 540px;
    margin: clamp(40px, 8vw, 140px) 0 0 0;
    line-height: 1.5;
}

.amenities__wrap_img {
    margin-top: 15px;
}

@media (max-width: 768px) {
    .amenities__wrap {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .amenities__wrap_block {
        align-items: center;
    }

    .amenities__wrap_block_bot {
        margin: 40px 0 0 0;
    }
}

@media (max-width: 540px) {
    .amenities__wrap_block_name {
        font-size: clamp(20px, 6vw, 26px);
    }

    .amenities__wrap_block_bot {
        font-size: clamp(16px, 4.5vw, 20px);
    }
}
</style>
