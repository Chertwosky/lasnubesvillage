<template>
    <section class="pleasantly" id="pleasantly">
        <div class="pleasantly__wrap">
            <div class="pleasantly__wrap_block">
                <SectionBadge
                  class="pleasantly__badge"
                  text="Бесплатные услуги"
                  background="linear-gradient(90deg, #253660 0%, #141d39 100%)"
                />
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
import SectionBadge from '@/components/core/SectionBadge.vue'
</script>

<style scoped>

.pleasantly {
    margin: 50px auto 0 auto;
    max-width: var(--container-width);
    position: relative;
    padding: 80px 20px;
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
    align-items: flex-start;
}

.pleasantly__badge,
.pleasantly__wrap_block_list {
color: var(--white-color);
}

.pleasantly__badge {
    margin: 0 0 24px 0;
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
        padding: 60px 16px;
    }

    .pleasantly__wrap {
        flex-direction: column;
        text-align: left;
    }

    .pleasantly__wrap_block {
        align-items: flex-start;
    }

    .pleasantly__wrap_block_btn {
        align-self: center;
    }
}

@media (max-width: 640px) {
    .pleasantly {
        padding: 48px 12px;
    }

    .pleasantly__wrap_block_list {
        font-size: var(--fontsize-primary);
    }

    .pleasantly__wrap_block_btn {
        font-size: 22px;
        padding: 10px 24px;
    }
}


</style>
