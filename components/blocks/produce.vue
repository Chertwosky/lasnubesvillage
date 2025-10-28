<template>
    <section class="produce">
        <div class="produce__wrap">
            <div class="produce__wrap_left">
                <img :src="People" alt="Дом" class="produce__wrap_left_reel" draggable="false" />
                <ul class="produce__wrap_left_list">
                    <li>Душ и туалет в каждом доме</li>
                    <li>WIFI и SMART TV</li>
                    <li>Панорамные окна</li>
                    <li>Личная территория с беседками и барбекю зоной</li>
                    <li>Баня и персональные чаны</li>
                </ul>
            </div>

            <div class="produce__wrap_right">
                <img :src="Comfort" alt="Обстановка" class="produce__wrap_right_reel" draggable="false" />
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
  margin: var(--margin-section) auto 0 auto;
  max-width: var(--container-width);
  padding: 0 20px;
  position: relative;
  z-index: 0; /* секция сама "нулевой слой" */
}


.produce__wrap {
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 1; /* контент поверх облаков */
    gap: 40px;
}

.produce__wrap_left,
.produce__wrap_right,
.produce__btn,
.produce__wrap_left img,
.produce__wrap_right img,
.produce__wrap_left_list,
.produce__wrap_right_list {
  position: relative;
  z-index: 1; /* явно указываем, что текст/картинки сверху */
}

.produce__wrap_left,
.produce__wrap_right {
    display: flex;
    flex-direction: column;
    gap: calc(var(--gap-medium)*0.835);
}

.produce__wrap_right {
    max-width: 742px;
}

.produce__wrap_left {
    max-width: 363px;
}

.produce__wrap_left_reel img,
.produce__wrap_right_reel img {
    height: 273px;
}

.produce__btn {
    background-color: var(--green-color);
    text-transform: uppercase;
    color: var(--white-color);
    display: flex;
    padding: 7px 20px 13px 20px;
    border-radius: var(--border-radius-container);
    font-size: 33px;
    font-family: var(--font-secondary);
    line-height: 100%;
    letter-spacing: 0;
    border: none;
    width: fit-content;
    margin-left: 31px;
    margin-top: -30px;
    cursor: pointer;
}

.produce__wrap_left_list,
.produce__wrap_right_list {
    font-size: var(--fontsize-medium);
    color: var(--white-color);
    padding-left: 31px;
    font-family: var(--font-main);
    font-weight: 200;
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
    padding: 0 16px;
  }

  .produce__wrap_left_reel,
  .produce__wrap_right_reel {
    width: 100%;
    max-width: 320px;
    margin: 0 auto;
  }

  .produce__wrap_left_list,
  .produce__wrap_right_list {
    font-size: var(--fontsize-secondary);
  }

  .produce__btn {
    font-size: 20px;
    padding: 10px 24px;
  }
}

</style>
