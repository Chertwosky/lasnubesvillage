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
                <img :src="House" alt="Дом" class="amenities__wrap_img_reel" draggable="false" loading="lazy" decoding="async" />
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
    margin: 50px auto 0 auto;
    max-width: var(--container-width);
    padding: 0 clamp(16px, 5vw, 24px);
}
.amenities__wrap {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: clamp(24px, 5vw, 56px);
    align-items: flex-start;
}
.amenities__wrap_block {
    display: flex;
    flex-direction: column;
    gap: clamp(12px, 3vw, 24px);
}
.amenities__wrap_block_title {
    font-size: clamp(34px, 4.5vw, 60px);
    color: var(--white-color);
    font-family: var(--font-secondary);
    letter-spacing: 0;
    max-width: 420px;
    margin: 0;
}

.amenities__wrap_block_sub {
    font-family: var(--font-main);
    font-size: clamp(22px, 3vw, 30px);
    color: var(--white-color);
}

.amenities__wrap_block_name {
    font-family: var(--font-secondary);
    margin: 0;
    cursor: pointer;
    font-size: clamp(26px, 3.2vw, 40px);
    transition: color 0.2s ease;
}

.amenities__wrap_block_name:hover,
.amenities__wrap_block_name:focus-visible {
    color: #ffffffcc;
}

.amenities__wrap_block_bot {
    font-family: var(--font-secondary);
    color: var(--white-color);
    font-size: clamp(18px, 2.2vw, 24px);
    max-width: 540px;
    margin: clamp(32px, 6vw, 80px) 0 0 0;
}

.amenities__wrap_img_reel {
    width: clamp(220px, 36vw, 420px);
    height: auto;
}

@media (max-width: 900px) {
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
    .amenities__wrap_block_bot {
        font-size: var(--fontsize-primary);
    }
}
</style>
