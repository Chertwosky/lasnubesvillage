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
                <img :src="House" alt="Дом" class="amenities__wrap_img_reel" draggable="false" />
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
    margin: clamp(32px, 7vw, 70px) auto 0 auto;
    max-width: min(var(--container-width), 100%);
    padding: 0 var(--container-padding);
}
.amenities__wrap {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: clamp(24px, 4vw, 48px);
    align-items: flex-start;
}
.amenities__wrap_block {
    display: flex;
    flex-direction: column;
    gap: clamp(12px, 2vw, 20px);
}
.amenities__wrap_block_title {
    font-size: clamp(30px, 4.5vw, 48px);
    color: var(--white-color);
    font-family: var(--font-secondary);
    letter-spacing: 0.5px;
    max-width: 420px;
    margin: 0;
}

.amenities__wrap_block_sub,
.amenities__wrap_block_name {
    font-size: clamp(20px, 2.6vw, 30px);
    color: var(--white-color);
}
.amenities__wrap_block_sub {
    font-family: var(--font-main);
}
.amenities__wrap_block_name {
    font-family: var(--font-secondary);
    margin: 0;
    cursor: pointer;
    transition: opacity var(--transition-dur-small);
}
.amenities__wrap_block_name:hover {
    opacity: 0.85;
}
.amenities__wrap_block_bot {
    font-family: var(--font-secondary);
    color: var(--white-color);
    font-size: clamp(18px, 1.6vw + 12px, 24px);
    max-width: 520px;
    margin-top: clamp(24px, 6vw, 56px);
    line-height: 1.45;
}

.amenities__wrap_img {
    flex: 1 1 45%;
    display: flex;
    justify-content: center;
}

.amenities__wrap_img_reel {
    width: min(100%, 520px);
    height: auto;
}

@media (max-width: 900px) {
    .amenities__wrap {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .amenities__wrap_block_bot {
        margin-top: clamp(24px, 6vw, 48px);
    }
}

@media (max-width: 540px) {
    .amenities {
        padding-inline: clamp(12px, 5vw, 20px);
    }

    .amenities__wrap_block_name {
        font-size: clamp(20px, 4.5vw, 28px);
    }
}
</style>
