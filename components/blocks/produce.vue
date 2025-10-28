<template>
  <section class="produce">
    <div class="produce__wrap">
      <div class="produce__wrap_left">
        <img :src="People" alt="Гости в доме" class="produce__wrap_left_reel" draggable="false" />
        <ul class="produce__wrap_left_list">
          <li>Душ и туалет в каждом доме</li>
          <li>WIFI и SMART TV</li>
          <li>Панорамные окна</li>
          <li>Личная территория с беседками и барбекю-зоной</li>
          <li>Баня и персональные чаны</li>
        </ul>
      </div>

      <div class="produce__wrap_right">
        <img :src="Comfort" alt="Интерьер коттеджа" class="produce__wrap_right_reel" draggable="false" />
        <ul class="produce__wrap_right_list">
          <li>Самостоятельное заселение и выселение с помощью электронного доступа без участия персонала</li>
          <li>Бытовая техника: от микроволновки и плиты до посудомоечной и стиральной машины</li>
          <li>Приятные мелочи: бумажные полотенца, стиральный порошок, соль, сахар, чай и кофе, банные наборы, настольные игры</li>
        </ul>
        <BookingButton customClass="produce__btn">
          Забронировать
        </BookingButton>
      </div>
    </div>
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
  margin: clamp(48px, 10vw, 120px) auto 0;
  max-width: var(--container-width);
  padding: 0 clamp(16px, 5vw, 40px);
  position: relative;
  z-index: 0;
}

.produce__wrap {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: clamp(28px, 6vw, 72px);
  position: relative;
  z-index: 1;
}

.produce__wrap_left,
.produce__wrap_right {
  display: flex;
  flex-direction: column;
  gap: clamp(18px, 3vw, 32px);
  flex: 1 1 320px;
}

.produce__wrap_left {
  max-width: 360px;
}

.produce__wrap_right {
  max-width: 640px;
}

.produce__wrap_left_reel,
.produce__wrap_right_reel {
  width: min(100%, 360px);
  height: auto;
  margin: 0 auto;
  display: block;
}

.produce__wrap_left_list,
.produce__wrap_right_list {
  font-size: clamp(16px, 1.8vw, 20px);
  color: var(--white-color);
  padding-left: clamp(18px, 3vw, 32px);
  font-family: var(--font-main);
  font-weight: 200;
  line-height: 1.55;
  display: grid;
  gap: clamp(10px, 1.8vw, 18px);
  margin: 0;
}

.produce__wrap_right_list {
  max-width: 100%;
}

.produce__btn {
  background-color: var(--green-color);
  text-transform: uppercase;
  color: var(--white-color);
  display: inline-flex;
  padding: clamp(12px, 2vw, 16px) clamp(24px, 4vw, 40px);
  border-radius: var(--border-radius-container);
  font-size: clamp(18px, 2.8vw, 26px);
  font-family: var(--font-secondary);
  line-height: 1.1;
  letter-spacing: 0.02em;
  border: none;
  width: fit-content;
  margin-left: clamp(8px, 2vw, 24px);
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.produce__btn:hover {
  transform: translateY(-2px);
}

@media (max-width: 960px) {
  .produce__wrap {
    justify-content: center;
  }

  .produce__wrap_left,
  .produce__wrap_right {
    align-items: center;
    text-align: center;
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
  .produce__wrap_left_reel,
  .produce__wrap_right_reel {
    max-width: 280px;
  }

  .produce__wrap_left_list,
  .produce__wrap_right_list {
    font-size: clamp(15px, 3.8vw, 18px);
  }

  .produce__btn {
    width: min(280px, 100%);
    justify-content: center;
  }
}
</style>
