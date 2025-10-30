<template>
    <section class="heading">
        <SectionBadge
            class="heading__badge"
            gradient="linear-gradient(90deg,#181f4d 0%, #0b0d26 100%)"
            align="right"
        >
            Коттеджи
        </SectionBadge>
        <div class="heading__wrap">
            <div class="heading__wrap_block text-overlay">
                <p class="heading__wrap_block_title">Коттеджи A-frame</p>
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
import SectionBadge from '@/components/ui/SectionBadge.vue'

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
    padding: 0 var(--container-padding);
}

.heading__badge {
    margin-bottom: 32px;
}

.heading__wrap {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 40px;
}

.heading__wrap_block {
    display: flex;
    flex-direction: column;
    min-height: 522px;
    gap: 12px;
    padding: 24px 28px;
}

.heading__wrap_block_title {
    font-size: calc(var(--fontsize-large)*1.7);
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
    font-size: var(--fontsize-large);
    margin: 0 0 10px 0;
    cursor: pointer;
}

.heading__wrap_block_bot {
    font-family: var(--font-secondary);
    color: var(--white-color);
    font-size: var(--fontsize-medium);
    margin: 40px 0 0 0;
    max-width: 500px;
}

.heading__wrap_img {
    margin-top: 15px;
}

@media (max-width: 768px) {
    .heading__wrap {
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
    }

    .heading__wrap_block {
        align-items: flex-start;
        padding: 20px 22px;
    }

    .heading__wrap_block_title {
        max-width: none;
    }

    .heading__wrap_block_bot {
        margin: 40px 0 0 0;
    }
}

@media (max-width: 540px) {
    .heading {
        padding: 0 var(--container-padding);
    }

    .heading__wrap_block_name {
        font-size: calc(var(--fontsize-large) * 0.9);
    }

    .heading__wrap_block_bot {
        font-size: var(--fontsize-primary);
    }

    .heading__wrap_block {
        padding: 18px 20px;
    }
}



</style>
