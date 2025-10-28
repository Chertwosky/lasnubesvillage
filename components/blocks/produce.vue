<template>
    <section class="produce">
        <div class="produce__wrap">
            <div class="produce__wrap_left">
                <img :src="People" alt="Дом" class="produce__wrap_left_reel" draggable="false" loading="lazy" />
                <ul class="produce__wrap_left_list">
                    <li>Душ и туалет в каждом доме</li>
                    <li>WIFI и SMART TV</li>
                    <li>Панорамные окна</li>
                    <li>Личная территория с беседками и барбекю зоной</li>
                    <li>Баня и персональные чаны</li>
                </ul>
            </div>

            <div class="produce__wrap_right">
                <img :src="Comfort" alt="Обстановка" class="produce__wrap_right_reel" draggable="false" loading="lazy" />
                <ul class="produce__wrap_right_list">
                    <li>Самостоятельное заселение и выселение с помощью электронного доступа - без участия персонала</li>
                    <li>Бытовая техника: от микроволновки и плиты до посудомоечной и стиральной машины</li>
                    <li>Приятные мелочи: бумажные полотенца, стиральный порошок, соль, сахар, чай и кофе, банные наборы, настольные игры</li>
                </ul>
                <BookingButton customClass="produce__btn">
  Забронировать
</BookingButton>
            </div>
        </div>
        <!-- Декоративные облака -->
        <Cloud width="156px" top="-70px" left="-30px" />
        <Cloud width="118px" top="-70px" right="98px" />
        <Cloud width="118px" bottom="39%" left="23%" />
        <Cloud width="118px" bottom="-5%" left="13%" />
        <Cloud width="161px" bottom="-30px" right="39px" />
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
  margin: var(--layout-section-gap) auto 0 auto;
  width: min(100%, var(--container-width));
  padding: 0 var(--layout-content-padding);
  position: relative;
  z-index: 0;
}

.produce__wrap {
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 1;
    gap: clamp(24px, 4vw, 56px);
    align-items: stretch;
}

.produce__wrap_left,
.produce__wrap_right,
.produce__btn,
.produce__wrap_left img,
.produce__wrap_right img,
.produce__wrap_left_list,
.produce__wrap_right_list {
  position: relative;
  z-index: 1;
}

.produce__wrap_left,
.produce__wrap_right {
    display: flex;
    flex-direction: column;
    gap: clamp(20px, 3vw, 32px);
}

.produce__wrap_right {
    max-width: clamp(320px, 55vw, 740px);
}

.produce__wrap_left {
    max-width: clamp(280px, 40vw, 400px);
}

.produce__wrap_left_reel,
.produce__wrap_right_reel {
    width: 100%;
    height: clamp(220px, 34vw, 320px);
    object-fit: cover;
    border-radius: 24px;
    box-shadow: 0 18px 42px rgba(0, 0, 0, 0.25);
}

.produce__btn {
    background-color: var(--green-color);
    text-transform: uppercase;
    color: var(--white-color);
    display: inline-flex;
    padding: clamp(10px, 1.6vw, 16px) clamp(18px, 3.2vw, 36px);
    border-radius: var(--border-radius-container);
    font-size: clamp(18px, 2.4vw, 28px);
    font-family: var(--font-secondary);
    line-height: 1;
    border: none;
    margin-left: clamp(0px, 4vw, 32px);
    margin-top: clamp(-12px, -2vw, -30px);
    cursor: pointer;
    align-self: flex-start;
    letter-spacing: 0.08em;
}

.produce__wrap_left_list,
.produce__wrap_right_list {
    font-size: clamp(16px, 1.5vw, 20px);
    color: var(--white-color);
    padding-left: clamp(16px, 3vw, 32px);
    font-family: var(--font-main);
    font-weight: 200;
    line-height: 1.6;
    margin: 0;
}

@media (max-width: 992px) {
  .produce__wrap {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .produce__wrap_left,
  .produce__wrap_right {
    align-items: center;
    max-width: 100%;
  }

  .produce__wrap_left_list,
  .produce__wrap_right_list {
    padding-left: 0;
  }

  .produce__btn {
    margin-left: 0;
  }
}

@media (max-width: 640px) {
  .produce {
    padding: 0 var(--layout-content-padding);
  }

  .produce__wrap_left_reel,
  .produce__wrap_right_reel {
    max-width: 320px;
    margin: 0 auto;
  }

  .produce__wrap_left_list,
  .produce__wrap_right_list {
    font-size: clamp(15px, 4vw, 18px);
  }

  .produce__btn {
    font-size: clamp(18px, 5vw, 22px);
    width: 100%;
    justify-content: center;
  }
}

</style>

