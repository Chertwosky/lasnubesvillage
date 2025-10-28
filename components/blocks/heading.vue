<template>
    <section class="heading">
        <div class="heading__wrap">
            <div class="heading__wrap_block">
                <p class="heading__wrap_block_title"> Коттеджи A-frame</p>
                <p class="heading__wrap_block_sub"> </p>
                <p class="heading__wrap_block_name" @click="scrollTo('sunset')">
                A-frame SUNSET
                </p>
                <p class="heading__wrap_block_name" @click="scrollTo('ultramarine')">
                A-frame ULTRAMARINE
                </p>
                <p class="heading__wrap_block_name" @click="scrollTo('emerald')">
                A-frame EMERALD
                </p>
                <p class="heading__wrap_block_bot">LAS NUBES VILLAGE — посуточная аренда коттеджей</p>
            </div>
            <div class="heading__wrap_img">
                <img :src="House" alt="Дом" class="heading__wrap_img_reel" draggable="false" loading="lazy" />
            </div>
        </div>


    </section>
</template>

<script setup lang="ts">
import House from '@/assets/images/core/heading/house.svg'

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

</script>

<style scoped>

.heading {
    margin: var(--layout-section-gap) auto 0 auto;
    width: min(100%, var(--container-width));
    padding: 0 var(--layout-content-padding);
}

.heading__wrap {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: clamp(24px, 5vw, 56px);
    align-items: center;
}

.heading__wrap_block {
    display: flex;
    flex-direction: column;
    min-height: 522px;
}

.heading__wrap_block_title {
    font-size: clamp(32px, 4vw, 54px);
    color: var(--white-color);
    font-family: var(--font-secondary);
    letter-spacing: 0;
    max-width: 361px;
    margin: 0;
}

.heading__wrap_block_sub,
.heading__wrap_block_name {
    font-size: var(--fontsize-unusual);
    color: var(--white-color);
}

.heading__wrap_block_sub {
    font-family: var(--font-main);
}

.heading__wrap_block_name {
    font-family: var(--font-secondary);
    font-size: clamp(22px, 2.6vw, 34px);
    margin: 0 0 12px 0;
    cursor: pointer;
    letter-spacing: 0.06em;
}

.heading__wrap_block_bot {
    font-family: var(--font-secondary);
    color: var(--white-color);
    font-size: clamp(18px, 1.8vw, 24px);
    margin: clamp(40px, 8vw, 140px) 0 0 0;
    max-width: 540px;
    line-height: 1.5;
}

.heading__wrap_img {
    margin-top: 15px;
}

@media (max-width: 768px) {
    .heading__wrap {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .heading__wrap_block {
        align-items: center;
    }

    .heading__wrap_block_title {
        max-width: none;
    }

    .heading__wrap_block_bot {
        margin: 40px 0 0 0;
    }
}

@media (max-width: 540px) {
    .heading__wrap_block_name {
        font-size: clamp(20px, 6vw, 26px);
    }

    .heading__wrap_block_bot {
        font-size: clamp(16px, 4.5vw, 20px);
    }
}



</style>
