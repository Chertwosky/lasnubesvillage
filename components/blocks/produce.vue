<template>
    <section class="produce">
        <div class="produce__wrap">
            <div class="produce__wrap_left">
                <img :src="People" alt="Дом" class="produce__wrap_left_reel" draggable="false" loading="lazy" decoding="async" />
                <ul class="produce__wrap_left_list">
                    <li>Душ и туалет в каждом доме</li>
                    <li>WIFI и SMART TV</li>
                    <li>Панорамные окна</li>
                    <li>Личная территория с беседками и барбекю зоной</li>
                    <li>Баня и персональные чаны</li>
                </ul>
            </div>

            <div class="produce__wrap_right">
                <img :src="Comfort" alt="Обстановка" class="produce__wrap_right_reel" draggable="false" loading="lazy" decoding="async" />
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
  margin: 50px auto 0 auto;
  max-width: var(--container-width);
  padding: 0 clamp(16px, 5vw, 24px);
  position: relative;
  z-index: 0;
}

.produce__wrap {
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  gap: clamp(24px, 5vw, 56px);
  align-items: flex-start;
}

.produce__wrap_left,
.produce__wrap_right {
  display: flex;
  flex-direction: column;
  gap: clamp(16px, 3vw, 32px);
  position: relative;
  z-index: 1;
}

.produce__wrap_left {
  max-width: 360px;
}

.produce__wrap_right {
  max-width: 720px;
}

.produce__wrap_left_reel,
.produce__wrap_right_reel {
  width: 100%;
  max-width: 360px;
  height: auto;
  border-radius: var(--border-radius-container);
}

.produce__wrap_left_list,
.produce__wrap_right_list {
  font-size: clamp(17px, 1.6vw, 20px);
  color: var(--white-color);
  padding-left: 24px;
  font-family: var(--font-main);
  font-weight: 300;
  line-height: 1.6;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.produce__wrap_left_list li,
.produce__wrap_right_list li {
  text-align: left;
}

.produce__btn {
  background-color: var(--green-color);
  text-transform: uppercase;
  color: var(--white-color);
  display: inline-flex;
  padding: 12px 32px;
  border-radius: var(--border-radius-container);
  font-size: clamp(18px, 2vw, 28px);
  font-family: var(--font-secondary);
  line-height: 1;
  border: none;
  margin-left: 0;
  cursor: pointer;
  align-self: flex-start;
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
    align-items: center;
  }

  .produce__wrap_left_list li,
  .produce__wrap_right_list li {
    text-align: center;
  }

  .produce__btn {
    align-self: center;
  }
}

@media (max-width: 640px) {
  .produce__wrap_left_reel,
  .produce__wrap_right_reel {
    max-width: 300px;
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
