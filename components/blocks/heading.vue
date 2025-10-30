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
                <div class="heading__wrap_block_names">
                    <p class="heading__wrap_block_name" @click="scrollTo('sunset')">
                    A-frame SUNSET
                    </p>
                    <p class="heading__wrap_block_name" @click="scrollTo('ultramarine')">
                    A-frame ULTRAMARINE
                    </p>
                    <p class="heading__wrap_block_name" @click="scrollTo('emerald')">
                    A-frame EMERALD
                    </p>
                </div>
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
    padding: 0 20px;
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
    gap: 24px;
    min-width: clamp(260px, 45vw, 420px);
}

.heading__wrap_block_names {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.heading__wrap_block_name {
    font-family: var(--font-secondary);
    font-size: var(--fontsize-large);
    margin: 0 0 10px 0;
    cursor: pointer;
    color: var(--white-color);
}

.heading__wrap_block_bot {
    font-family: var(--font-secondary);
    color: var(--white-color);
    font-size: var(--fontsize-medium);
    margin: 16px 0 0 0;
    max-width: 480px;
}

.heading__wrap_img {
    margin-top: 15px;
}

@media (max-width: 1028px) {
    .heading {
        width: 99vw;
    }
}

@media (max-width: 768px) {
    .heading__wrap {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .heading__wrap_block {
        align-items: center;
        width: 100%;
    }

    .heading__wrap_block_bot {
        margin: 32px 0 0 0;
    }
}

@media (max-width: 540px) {
    .heading {
        padding: 0 16px;
    }

    .heading__wrap_block_name {
        font-size: calc(var(--fontsize-large) * 0.9);
    }

    .heading__wrap_block_bot {
        font-size: var(--fontsize-primary);
    }
}



</style>
