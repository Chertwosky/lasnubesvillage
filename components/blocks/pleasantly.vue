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
                <img :src="Games" alt="Игры" class="pleasantly__wrap_img-reel" draggable="false" />
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
    margin: clamp(32px, 7vw, 70px) auto 0 auto;
    max-width: min(var(--container-width), 100%);
    position: relative;
    padding: clamp(48px, 10vw, 80px) var(--container-padding);
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
    gap: clamp(16px, 3vw, 28px);
}

.pleasantly__wrap_block_title,
.pleasantly__wrap_block_list {
color: var(--white-color);
}

.pleasantly__wrap_block_title {
    font-family: var(--font-secondary);
    font-size: clamp(30px, 4.5vw, 48px);
    margin: 0;
}
.pleasantly__wrap_block_list {
    list-style-type: none;
    margin: 0;
    font-size: clamp(18px, 1.4vw + 12px, 22px);
    padding-left: 0;
    line-height: 1.55;
    font-family: var(--font-main);
}

.pleasantly__wrap_block_btn {
    background-color: var(--green-color);
    text-transform: uppercase;
    color: var(--white-color);
    display: inline-flex;
    padding: clamp(12px, 2vw, 18px) clamp(24px, 4vw, 40px);
    border-radius: var(--border-radius-container);
    font-size: clamp(18px, 1.6vw + 12px, 24px);
    font-family: var(--font-secondary);
    line-height: 1.05;
    border: none;
    margin-top: clamp(8px, 2vw, 20px);
    cursor: pointer;
}

@media (max-width: 900px) {
    .pleasantly {
        padding: clamp(40px, 10vw, 60px) clamp(16px, 5vw, 24px);
    }

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
    .pleasantly {
        padding-inline: clamp(12px, 5vw, 20px);
    }

    .pleasantly__wrap_block_list {
        font-size: clamp(16px, 4vw, 20px);
    }

    .pleasantly__wrap_block_btn {
        width: 100%;
        max-width: 320px;
        justify-content: center;
    }
}
</style>
