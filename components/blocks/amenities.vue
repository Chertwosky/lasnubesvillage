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
    margin: 33px auto 0 auto;
    max-width: var(--container-width);
    padding: 0 24px;
    box-sizing: border-box;
}
.amenities__wrap {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: var(--gap-big);
}
.amenities__wrap_block {
    display: flex;
    flex-direction: column;
    min-height: 522px;
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
    margin: 120px 0 0 0;
}

.amenities__wrap_img {
    margin-top: 15px;
}

@media (max-width: 1024px) {
    .amenities {
        padding: 0 32px;
    }

    .amenities__wrap_block_name {
        font-size: 30px;
    }
}

@media (max-width: 768px) {
    .amenities {
        padding: 0 20px;
    }

    .amenities__wrap {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .amenities__wrap_block {
        min-height: auto;
        align-items: center;
    }

    .amenities__wrap_block_title {
        font-size: 36px;
    }

    .amenities__wrap_block_sub,
    .amenities__wrap_block_name,
    .amenities__wrap_block_bot {
        font-size: var(--fontsize-secondary);
    }

    .amenities__wrap_block_bot {
        margin: 40px 0 0 0;
    }

    .amenities__wrap_img_reel {
        width: min(360px, 90vw);
    }
}

@media (max-width: 480px) {
    .amenities {
        padding: 0 16px;
    }

    .amenities__wrap_block_title {
        font-size: 30px;
    }

    .amenities__wrap_block_name {
        font-size: 24px;
    }
}
</style>
