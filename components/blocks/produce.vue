<template>
  <section class="produce">
    <div class="produce__wrap">
      <div class="produce__column">
        <img :src="People" alt="Дом" class="produce__image" draggable="false" />
        <ul class="produce__list">
          <li>Душ и туалет в каждом доме</li>
          <li>WIFI и SMART TV</li>
          <li>Панорамные окна</li>
          <li>Личная территория с беседками и барбекю зоной</li>
          <li>Баня и персональные чаны</li>
        </ul>
      </div>

      <div class="produce__column produce__column--accent">
        <img :src="Comfort" alt="Обстановка" class="produce__image" draggable="false" />
        <ul class="produce__list">
          <li>Самостоятельное заселение и выселение с помощью электронного доступа — без участия персонала</li>
          <li>Бытовая техника: от микроволновки и плиты до посудомоечной и стиральной машины</li>
          <li>Приятные мелочи: бумажные полотенца, стиральный порошок, соль, сахар, чай и кофе, банные наборы, настольные игры</li>
        </ul>
        <BookingButton customClass="produce__button">Забронировать</BookingButton>
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
  position: relative;
  margin: 50px auto 0 auto;
  max-width: var(--container-width);
  padding: 0 var(--page-gutter);
}

.produce__wrap {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(28px, 6vw, 64px);
  position: relative;
  z-index: 1;
}

.produce__column {
  display: flex;
  flex-direction: column;
  gap: clamp(20px, 4vw, 32px);
}

.produce__column--accent {
  gap: clamp(20px, 4vw, 40px);
}

.produce__image {
  width: 100%;
  height: auto;
  border-radius: var(--border-radius-container);
  object-fit: cover;
}

.produce__list {
  margin: 0;
  padding-left: clamp(18px, 4vw, 32px);
  display: flex;
  flex-direction: column;
  gap: clamp(12px, 2.4vw, 18px);
  font-size: clamp(16px, 2vw, 20px);
  color: var(--white-color);
  font-family: var(--font-main);
  font-weight: 300;
  line-height: 1.45;
}

.produce__list li::marker {
  color: var(--green-color);
}

.produce__button {
  align-self: flex-start;
  background-color: var(--green-color);
  color: var(--white-color);
  font-family: var(--font-secondary);
  font-size: clamp(20px, 3vw, 28px);
  padding: 12px 28px;
  border-radius: var(--border-radius-container);
  border: none;
  text-transform: uppercase;
  cursor: pointer;
}

@media (max-width: 992px) {
  .produce__wrap {
    grid-template-columns: 1fr;
  }

  .produce__column {
    align-items: center;
    text-align: left;
  }

  .produce__list {
    padding-left: 20px;
    width: 100%;
  }

  .produce__button {
    align-self: stretch;
    text-align: center;
  }
}

@media (max-width: 540px) {
  .produce {
    padding: 0 var(--page-gutter);
  }

  .produce__list {
    font-size: clamp(15px, 4vw, 18px);
  }

  .produce__button {
    font-size: clamp(18px, 5vw, 24px);
    padding: 12px;
  }
}
</style>
