<template>
    <section class="bath">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="bath__block"
        :id="item.id"
      >
        <div class="bath__block__left">
          <h3 class="bath__block__left_title">{{ item.title }}</h3>
          <img :src="item.img" alt="Баня" class="bath__block__left_reel" draggable="false" loading="lazy" />
          <BookingButton customClass="bath__block__left_btn">
            Забронировать
          </BookingButton>
        </div>

        <div class="bath__block__right">
          <p class="bath__block__right_text">
            <span class="bath__block__right_text-up">{{ item.upTitle }}</span>
            {{ item.text }}
          </p>
          <div class="bath__block__right_bot">
            <p class="bath__block__right_bot-text">{{ item.location }}</p>
            <p class="bath__block__right_bot-text">{{ item.beds }}</p>
            <div class="bath__block__right_bot_min">
              <img :src="Man" alt="Иконка гостей" class="bath__block__right_bot_min-reel" draggable="false" loading="lazy" />
              <p class="bath__block__right_bot_min-text">{{ item.guests }}</p>
            </div>
          </div>
        </div>
        <Cloud width="156px" top="-60px" left="-30px" />
        <Cloud width="118px" top="-45px" right="23%" />
        <Cloud width="118px" bottom="39%" left="23%" />
        <Cloud width="118px" bottom="-5%" left="13%" />
        <Cloud width="161px" bottom="-30px" right="39px" flipped />
      </div>
    </section>
  </template>

  <script setup>
  import Bath from '@/assets/images/core/bath/bath.svg'
  import Man from '@/assets/images/core/bath/man.svg'
  import BookingButton from '@/components/blocks/BookingButton.vue'
    import Cloud from '@/components/blocks/Cloud.vue'

  const items = [
    {
      id: 'bath',
      title: 'Баня',
      img: Bath,
      upTitle: 'Баня',
      text: ' — неотъемлемая часть загородного отдыха. Индивидуальная баня- бочка есть у большинства наших коттеджей. Вам не придется далеко идти и ждать своей очереди. Наши бани-бочки электрические, вы можете затопить их самостоятельно в любой момент отдыха.',
      location: 'Локации: Черемыкино, Новожилово',
      beds: '3 кровати, 1 диван',
      guests: 'до 6 гостей',
    },
  ]
  </script>

<style scoped>

img.bath__block__left_reel {
    border-radius: 24px;
    width: clamp(260px, 40vw, 400px);
    height: clamp(220px, 32vw, 320px);
    object-fit: cover;
    box-shadow: 0 18px 42px rgba(0, 0, 0, 0.25);
}

.bath {
    margin: var(--layout-section-gap) auto 0 auto;
    width: min(100%, var(--container-width));
    padding: clamp(32px, 6vw, 48px) var(--layout-content-padding) 0 var(--layout-content-padding);
}
.bath__block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin: 0 0 clamp(32px, 6vw, 60px) 0;
    gap: clamp(24px, 5vw, 56px);
}
.bath__block__left,
.bath__block__right {
    display: flex;
    flex-direction: column;
}
.bath__block__left {
    align-items: flex-end;
}
.bath__block__left_btn {
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
    margin-top: 12px;
    cursor: pointer;
    letter-spacing: 0.08em;
}
.bath__block__left_title {
    font-size: clamp(32px, 4.2vw, 52px);
    color: var(--white-color);
    font-family: var(--font-secondary);
    margin: 0 0 8px 0;
}
.bath__block__right_bot_min {
    display: flex;
    gap: 8px;
}
.bath__block__right_bot {
    margin-left: 20px;
    color: var(--faded-color);
    font-weight: 200;
    font-size: var(--fontsize-small);
    font-family: var(--font-core);
}
.bath__block__right_text {
    color: var(--white-color);
    font-size: clamp(18px, 2vw, 26px);
    max-width: clamp(320px, 50vw, 520px);
    line-height: 1.6;
    font-family: var(--font-main);
}
.bath__block__right_text-up {
    font-family: var(--font-secondary);
    font-size: clamp(24px, 3vw, 36px);
    text-transform: uppercase;
    letter-spacing: 0.08em;
}
.bath__block__right_bot-text:first-of-type {
    margin-bottom: 24px;
}

@media (max-width: 992px) {
    .bath__block {
        flex-direction: column;
        text-align: center;
    }

    .bath__block__left,
    .bath__block__right {
        align-items: center;
    }

    .bath__block__left_btn {
        align-self: center;
    }

    .bath__block__right_bot {
        margin-left: 0;
        display: flex;
        gap: 16px;
    }
}

@media (max-width: 640px) {
    .bath__block__left_btn {
        font-size: clamp(18px, 5vw, 22px);
        padding: 10px 24px;
    }

    .bath__block__right_text {
        font-size: clamp(16px, 4.5vw, 20px);
    }

    .bath__block__right_text-up {
        font-size: clamp(20px, 5.8vw, 28px);
    }
}
</style>
