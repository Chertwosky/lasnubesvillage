<template>
    <section class="produce">
        <div class="produce__grid">
            <article class="produce__card">
                <div class="produce__image">
                    <img :src="People" alt="Дом" class="produce__image_reel" draggable="false" />
                </div>
                <ul class="produce__list">
                    <li>Душ и туалет в каждом доме</li>
                    <li>WIFI и SMART TV</li>
                    <li>Панорамные окна</li>
                    <li>Личная территория с беседками и барбекю зоной</li>
                    <li>Баня и персональные чаны</li>
                </ul>
            </article>

            <article class="produce__card produce__card--accent">
                <div class="produce__image">
                    <img :src="Comfort" alt="Уют" class="produce__image_reel" draggable="false" />
                </div>
                <ul class="produce__list">
                    <li>Самостоятельное заселение и выселение с помощью электронного доступа</li>
                    <li>Полная бытовая техника: от посудомоечной машины до стиральной</li>
                    <li>Приятные мелочи: полотенца, чай, кофе, настольные игры</li>
                </ul>
                <BookingButton customClass="produce__btn">
      Забронировать
    </BookingButton>
            </article>
        </div>
        <Cloud width="156px" top="-80px" left="-30px" />
        <Cloud width="140px" top="-90px" right="14%" />
        <Cloud width="160px" bottom="-36px" left="8%" />
        <Cloud width="130px" bottom="-46px" right="8%" />
    </section>

</template>

<script setup>
    import People from '@/assets/images/core/produce/people.svg'
    import Comfort from '@/assets/images/core/produce/comfort.svg'
    import Cloud from '@/components/blocks/Cloud.vue'
    import BookingButton from '@/components/blocks/BookingButton.vue'
</script>

<style scoped>

.produce {
  margin: 72px auto 0;
  max-width: var(--container-width);
  padding: 0 20px;
  position: relative;
}

.produce__grid {
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 36px;
    z-index: 1;
}

.produce__card {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 26px;
    padding: 36px 38px 40px;
    border-radius: 40px;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 40px 80px rgba(70, 104, 173, 0.25);
    backdrop-filter: blur(6px);
}

.produce__card--accent {
    background: rgba(255, 255, 255, 0.95);
}

.produce__image {
    display: flex;
    justify-content: center;
}

.produce__image_reel {
    max-width: 100%;
    height: auto;
}

.produce__list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
    font-family: var(--font-main);
    font-size: var(--fontsize-medium);
    color: #35518d;
}

.produce__list li {
    position: relative;
    padding-left: 34px;
}

.produce__list li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 6px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: linear-gradient(135deg, #7aa5e6 0%, #93c4ff 100%);
    box-shadow: 0 6px 12px rgba(122, 165, 230, 0.5);
}

.produce__btn {
    align-self: flex-start;
    margin-top: 8px;
    padding: 12px 40px;
    border-radius: 999px;
    background: linear-gradient(135deg, #50c57d 0%, #38a065 100%);
    font-size: 28px;
    font-family: var(--font-secondary);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--white-color);
}

.produce__btn:hover {
    background: linear-gradient(135deg, #50c57d 0%, #38a065 100%) !important;
    color: var(--white-color) !important;
}

@media (max-width: 1024px) {
    .produce {
        padding: 0 16px;
    }

    .produce__grid {
        gap: 24px;
    }

    .produce__card {
        padding: 28px 32px;
    }

    .produce__btn {
        font-size: 24px;
        padding: 12px 32px;
    }
}

@media (max-width: 760px) {
    .produce__grid {
        grid-template-columns: 1fr;
    }

    .produce__card {
        text-align: center;
    }

    .produce__btn {
        align-self: center;
    }

    .produce__list li {
        padding-left: 0;
    }

    .produce__list li::before {
        display: none;
    }
}

@media (max-width: 520px) {
    .produce {
        padding: 0 12px;
    }

    .produce__card {
        padding: 24px 20px;
        border-radius: 28px;
    }

    .produce__btn {
        font-size: 18px;
        padding: 10px 24px;
    }
}

</style>
