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
                <img :src="House" alt="Дом" class="heading__wrap_img_reel" draggable="false" loading="lazy" decoding="async" />
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
    margin: 50px auto 0 auto;
    max-width: var(--container-width);
    padding: 0 clamp(16px, 5vw, 24px);
}

.heading__wrap {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: clamp(24px, 5vw, 56px);
    align-items: flex-start;
}

.heading__wrap_block {
    display: flex;
    flex-direction: column;
    gap: clamp(12px, 3vw, 24px);
}

.heading__wrap_block_title {
    font-size: clamp(32px, 4vw, 52px);
    color: var(--white-color);
    font-family: var(--font-secondary);
    letter-spacing: 0;
    max-width: 420px;
    margin: 0;
}

.heading__wrap_block_sub,
.heading__wrap_block_name {
    font-size: clamp(22px, 3vw, 32px);
    color: var(--white-color);
}

.heading__wrap_block_sub {
    font-family: var(--font-main);
}

.heading__wrap_block_name {
    font-family: var(--font-secondary);
    margin: 0 0 10px 0;
    cursor: pointer;
    transition: color 0.2s ease;
}

.heading__wrap_block_name:hover,
.heading__wrap_block_name:focus-visible {
    color: #ffffffcc;
}

.heading__wrap_block_bot {
    font-family: var(--font-secondary);
    color: var(--white-color);
    font-size: clamp(18px, 2.1vw, 24px);
    max-width: 520px;
    margin: clamp(32px, 6vw, 80px) 0 0 0;
}

.heading__wrap_img_reel {
    width: clamp(220px, 36vw, 420px);
    height: auto;
}

@media (max-width: 900px) {
    .heading__wrap {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .heading__wrap_block {
        align-items: center;
    }

    .heading__wrap_block_bot {
        margin-top: 40px;
    }
}

@media (max-width: 540px) {
    .heading__wrap_block_name {
        font-size: clamp(20px, 5vw, 26px);
    }

    .heading__wrap_block_bot {
        font-size: var(--fontsize-primary);
    }
}



</style>
