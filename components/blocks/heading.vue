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
                <img :src="House" alt="Дом" class="heading__wrap_img_reel" draggable="false" />
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
    margin: clamp(32px, 7vw, 70px) auto 0 auto;
    max-width: min(var(--container-width), 100%);
    padding: 0 var(--container-padding);
}

.heading__wrap {
    display: flex;
    justify-content: space-between;
    gap: clamp(24px, 4vw, 48px);
    align-items: flex-start;
}

.heading__wrap_block {
    display: flex;
    flex-direction: column;
    gap: clamp(12px, 2vw, 20px);
}

.heading__wrap_block_title {
    font-size: clamp(28px, 4vw, 46px);
    color: var(--white-color);
    font-family: var(--font-secondary);
    letter-spacing: 0.5px;
    max-width: 420px;
    margin: 0;
}

.heading__wrap_block_sub,
.heading__wrap_block_name {
    font-size: clamp(20px, 2.6vw, 30px);
    color: var(--white-color);
}

.heading__wrap_block_sub {
    font-family: var(--font-main);
}

.heading__wrap_block_name {
    font-family: var(--font-secondary);
    font-size: clamp(22px, 3vw, 34px);
    margin: 0;
    cursor: pointer;
    transition: opacity var(--transition-dur-small);
}

.heading__wrap_block_name:hover {
    opacity: 0.85;
}

.heading__wrap_block_bot {
    font-family: var(--font-secondary);
    color: var(--white-color);
    font-size: clamp(18px, 1.6vw + 12px, 24px);
    margin-top: clamp(24px, 6vw, 56px);
    max-width: 520px;
    line-height: 1.45;
}

.heading__wrap_img {
    flex: 1 1 45%;
    display: flex;
    justify-content: center;
}

.heading__wrap_img_reel {
    width: min(100%, 520px);
    height: auto;
}

@media (max-width: 900px) {
    .heading__wrap {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .heading__wrap_block_bot {
        margin-top: clamp(24px, 6vw, 48px);
    }
}

@media (max-width: 540px) {
    .heading {
        padding-inline: clamp(12px, 5vw, 20px);
    }

    .heading__wrap_block_name {
        font-size: clamp(20px, 4.5vw, 28px);
    }
}



</style>
