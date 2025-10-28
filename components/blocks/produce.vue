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
  margin: clamp(32px, 7vw, 70px) auto 0 auto;
  max-width: min(var(--container-width), 100%);
  padding: 0 var(--container-padding);
  position: relative;
  z-index: 0;
}

.produce__wrap {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: clamp(24px, 4vw, 48px);
  align-items: start;
}

.produce__wrap_left,
.produce__wrap_right {
  display: flex;
  flex-direction: column;
  gap: clamp(18px, 3vw, 36px);
}

.produce__wrap_left_reel,
.produce__wrap_right_reel {
  width: min(100%, 420px);
  height: auto;
  border-radius: var(--border-radius-container);
  object-fit: cover;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
}

.produce__wrap_left_list,
.produce__wrap_right_list {
  font-size: clamp(16px, 1.4vw + 10px, 20px);
  color: var(--white-color);
  padding-left: clamp(18px, 2vw, 28px);
  font-family: var(--font-main);
  font-weight: 300;
  line-height: 1.55;
}

.produce__wrap_left_list li,
.produce__wrap_right_list li {
  margin-bottom: clamp(8px, 2vw, 16px);
}

.produce__btn {
  background-color: var(--green-color);
  text-transform: uppercase;
  color: var(--white-color);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: clamp(12px, 2vw, 16px) clamp(24px, 4vw, 44px);
  border-radius: var(--border-radius-container);
  font-size: clamp(18px, 1.6vw + 12px, 26px);
  font-family: var(--font-secondary);
  line-height: 1;
  letter-spacing: 0.5px;
  border: none;
  cursor: pointer;
  margin-top: clamp(8px, 2vw, 24px);
}

@media (max-width: 768px) {
  .produce {
    text-align: center;
  }

  .produce__wrap {
    justify-items: center;
  }

  .produce__wrap_left_list,
  .produce__wrap_right_list {
    padding-left: 0;
    text-align: left;
  }

  .produce__btn {
    width: 100%;
    max-width: 320px;
  }
}

@media (max-width: 480px) {
  .produce {
    padding-inline: clamp(12px, 5vw, 18px);
  }

  .produce__wrap_left_list,
  .produce__wrap_right_list {
    font-size: clamp(15px, 4vw, 18px);
  }
}

</style>
