<template>
    <section class="pleasantly" id="pleasantly">
        <div class="pleasantly__wrap">
            <div class="pleasantly__wrap_block">
                <h3 class="pleasantly__wrap_block_title">Бесплатные услуги</h3>
                <ul class="pleasantly__wrap_block_list">
                    <li>— Настольные игры от Gaga Games и КвизПлиз</li>
                    <li>— Зубные наборы, гели для душа, шампуни, тапочки</li>
                    <li>— Приветсвенный чай и кофе</li>
                    <li>— Березовый банный веник при бронировании бани</li>
                    <li>— Детские раскраски</li>
                </ul>
                <BookingButton customClass="pleasantly__wrap_block_btn">
            Забронировать
        </BookingButton>
            </div>
            <div class="pleasantly__wrap_img">
                <img :src="Games" alt="Игры" class="pleasantly__wrap_img-reel" draggable="false" loading="lazy" />
            </div>
        </div>
        <Cloud width="156px" top="-10%" left="-30px" />
        <Cloud width="161px" bottom="-39px" right="19%" />
        <Cloud width="118px" bottom="-5%" left="13%" />
    </section>
</template>

<script setup>
import Games from '@/assets/images/core/pleasantly/games.svg'
  import BookingButton from '@/components/blocks/BookingButton.vue'
        import Cloud from '@/components/blocks/Cloud.vue'
</script>

<style scoped>

.pleasantly {
    margin: var(--layout-section-gap) auto 0 auto;
    width: min(100%, var(--container-width));
    position: relative;
    padding: clamp(48px, 8vw, 96px) var(--layout-content-padding);
}

.pleasantly__wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: clamp(24px, 5vw, 56px);
}

.pleasantly__wrap_block {
    display: flex;
    flex-direction: column;
}

.pleasantly__wrap_block_title,
.pleasantly__wrap_block_list {
color: var(--white-color);
}

.pleasantly__wrap_block_title {
    font-family: var(--font-secondary);
    font-size: clamp(32px, 4.6vw, 56px);
    margin: 0 0 20px 0;
    letter-spacing: 0.08em;
}
.pleasantly__wrap_block_list {
    list-style-type: none;
    margin-top: 0;
    font-size: clamp(16px, 1.8vw, 22px);
    padding-left: 0;
    line-height: 1.6;
    font-family: var(--font-main);
}

.pleasantly__wrap_block_btn {
    background-color: var(--green-color);
    text-transform: uppercase;
    color: var(--white-color);
    display: inline-flex;
    padding: clamp(10px, 1.6vw, 16px) clamp(20px, 3.2vw, 40px);
    border-radius: var(--border-radius-container);
    font-size: clamp(20px, 2.6vw, 30px);
    font-family: var(--font-secondary);
    line-height: 1;
    border: none;
    width: fit-content;
    margin-top: 16px;
    cursor: pointer;
    letter-spacing: 0.08em;
}

@media (max-width: 900px) {
    .pleasantly__wrap {
        flex-direction: column;
        text-align: center;
    }

    .pleasantly__wrap_block {
        align-items: center;
    }

    .pleasantly__wrap_block_btn {
        align-self: center;
    }
}

@media (max-width: 640px) {
    .pleasantly__wrap_block_title {
        font-size: clamp(28px, 7vw, 40px);
    }

    .pleasantly__wrap_block_list {
        font-size: clamp(16px, 4.5vw, 20px);
    }

    .pleasantly__wrap_block_btn {
        font-size: clamp(18px, 5vw, 22px);
        padding: 10px 24px;
        width: 100%;
        justify-content: center;
    }
}


</style>
