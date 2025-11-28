<template>
    <section class="pleasantly" id="pleasantly">
        <SectionBadge
            class="pleasantly__badge"
            gradient="linear-gradient(90deg,#1c3f3a 0%, #08211c 100%)"
            align="right"
        >
            Бесплатно
        </SectionBadge>
        <div class="pleasantly__wrap">
            <div class="pleasantly__wrap_block text-overlay">
                <h3 class="pleasantly__wrap_block_title">Бесплатные услуги</h3>
                <ul class="pleasantly__wrap_block_list">
                    <li>— Шампуни, тапочки</li>
                    <li>— Зубные наборы, гели для душа </li>
                    <li>— Приветсвенный чай и кофе</li>
                     </ul>
                <BookingButton customClass="pleasantly__wrap_block_btn">
                    Забронировать
                </BookingButton>
            </div>
            <div class="pleasantly__wrap_img">
                <img :src="Games" alt="Игры" class="pleasantly__wrap_img-reel" draggable="false" />
            </div>
        </div>
        <Cloud width="156px" top="20%" left="-30px" />
        <Cloud width="161px" bottom="-39px" right="19%" />
        <Cloud width="118px" bottom="-5%" left="13%" />
    </section>
</template>

<script setup>
import { resolveImage } from '@/utils/resolveImage'
import BookingButton from '@/components/blocks/BookingButton.vue'
import Cloud from '@/components/blocks/Cloud.vue'
import SectionBadge from '@/components/ui/SectionBadge.vue'

const Games = resolveImage('core/pleasantly/games')
</script>

<style scoped>

.pleasantly {
    margin: 0px auto 0 auto;
    max-width: var(--container-width);
    position: relative;
    padding: 80px var(--container-padding);
    display: none
}

.pleasantly__badge {
    margin-bottom: 10px;
    --badge-min-w: 270px;
}

.pleasantly__wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
}

.pleasantly__wrap_block {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 24px 28px;
}

.pleasantly__wrap_block_title,
.pleasantly__wrap_block_list {
    color: var(--white-color);
}

.pleasantly__wrap_block_title {
    font-family: var(--font-secondary);
    font-size: 48px;
    margin: 0 0 20px 0;
}
.pleasantly__wrap_block_list {
    list-style-type: none;
    margin-top: 0;
    font-size: 20px;
    padding-left: 0;
    line-height: 140%;
    font-family: var(--font-main);
}

.pleasantly__wrap_block_btn {
    background-color: var(--green-color);
    text-transform: uppercase;
    color: var(--white-color);
    display: flex;
    padding: 7px 20px 9px 20px;
    border-radius: var(--border-radius-container);
    font-size: 33px;
    font-family: var(--font-secondary);
    line-height: 100%;
    letter-spacing: 0;
    border: none;
    width: fit-content;
    margin-top: 10px;
    cursor: pointer;
}

@media (max-width: 900px) {
    .pleasantly {
        padding: 60px var(--container-padding);
    }

    .pleasantly__wrap {
        flex-direction: column;
        text-align: left;
    }

    .pleasantly__wrap_block {
        align-items: flex-start;
        padding: 20px 24px;
    }

    .pleasantly__wrap_block_btn {
        align-self: flex-start;
    }
}

@media (max-width: 640px) {
    .pleasantly {
        padding: 48px var(--container-padding);
    }

    .pleasantly__wrap_block_title {
        font-size: 36px;
    }

    .pleasantly__wrap_block_list {
        font-size: var(--fontsize-primary);
    }

    .pleasantly__wrap_block {
        padding: 18px 20px;
    }

    .pleasantly__wrap_block_btn {
        font-size: 24px;
        padding: 10px 24px;
        width: 100%;
        text-align: center;
        justify-content: center;
        align-items: center;
    }
}


</style>
