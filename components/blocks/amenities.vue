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
                <p class="amenities__wrap_block_sub">Чтобы разнообразить отдых</p>
                <div class="amenities__wrap_block_names">
                <p class="amenities__wrap_block_name" @click="scrollTo('bath')">
                    Баня
                </p>
                <p class="amenities__wrap_block_name" @click="scrollTo('optionally')">
                    Дополнительно
                </p>
                <p class="amenities__wrap_block_name" @click="scrollTo('pleasantly')">
                    Бесплатно
                </p>
                </div>
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
import SectionBadge from '@/components/ui/SectionBadge.vue'
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
    padding: 0 20px;
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
    gap: 24px;
    min-width: clamp(260px, 45vw, 420px);
}

.amenities__wrap_block_sub {
    font-family: var(--font-main);
}

.amenities__wrap_block_names {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.amenities__wrap_block_sub,
.amenities__wrap_block_name {
    font-size: var(--fontsize-unusual);
    color: var(--white-color);
}
.amenities__wrap_block_name {
    font-family: var(--font-secondary);
    margin: 0;
    cursor: pointer;
    font-size: 36px;
}
.amenities__wrap_block_bot {
    font-family: var(--font-secondary);
    color: var(--white-color);
    font-size: var(--fontsize-medium);
    max-width: 500px;
    margin: 16px 0 0 0;
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
        width: 100%;
    }

    .amenities__wrap_block_bot {
        margin: 32px 0 0 0;
    }
}

@media (max-width: 540px) {
    .amenities {
        padding: 0 16px;
    }

    .amenities__wrap_block_name {
        font-size: calc(var(--fontsize-large) * 0.9);
    }

    .amenities__wrap_block_bot {
        font-size: var(--fontsize-primary);
    }
}
</style>
