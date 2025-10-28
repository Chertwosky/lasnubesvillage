<template>
    <section class="chan">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="chan__block"
        :id="item.id"
      >
        <div class="chan__block__left">
          <h3 class="chan__block__left_title">{{ item.title }}</h3>
          <img :src="item.img" alt="Баня" class="chan__block__left_reel" draggable="false" loading="lazy" />
          <BookingButton customClass="chan__block__left_btn">
            Забронировать
          </BookingButton>
        </div>

        <div class="chan__block__right">
          <p class="chan__block__right_text">
            <span class="chan__block__right_text-up">{{ item.upTitle }}</span>
            {{ item.text }}
          </p>
          <div class="chan__block__right_bot">
            <p class="chan__block__right_bot-text">{{ item.location }}</p>
            <p class="chan__block__right_bot-text">{{ item.beds }}</p>
            <div class="chan__block__right_bot_min">
              <img :src="Man" alt="Иконка гостей" class="chan__block__right_bot_min-reel" draggable="false" loading="lazy" />
              <p class="chan__block__right_bot_min-text">{{ item.guests }}</p>
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
  import chan from '@/assets/images/core/chan/chan.svg'
  import Man from '@/assets/images/core/chan/man.svg'
  import BookingButton from '@/components/blocks/BookingButton.vue'
    import Cloud from '@/components/blocks/Cloud.vue'

  const items = [
    {
      id: 'chan',
      title: 'Чаны',
      img: chan,
      upTitle: 'Персональный чан у дома',
      text: ' — неотъемлемая часть загородного отдыха. Индивидуальная баня- бочка есть у большинства наших коттеджей. Вам не придется далеко идти и ждать своей очереди. Наши бани-бочки электрические, вы можете затопить их самостоятельно в любой момент отдыха.',
      guests: 'до 6 мест',
    },
  ]
  </script>

<style scoped>

img.chan__block__left_reel {
    border-radius: 24px;
    width: clamp(260px, 40vw, 400px);
    height: clamp(220px, 32vw, 320px);
    object-fit: cover;
    box-shadow: 0 18px 42px rgba(0, 0, 0, 0.25);
}

.chan {
    margin: var(--layout-section-gap) auto 0 auto;
    width: min(100%, var(--container-width));
    padding: clamp(32px, 6vw, 48px) var(--layout-content-padding) 0 var(--layout-content-padding);
}
.chan__block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    gap: clamp(24px, 5vw, 56px);
}
.chan__block__left,
.chan__block__right {
    display: flex;
    flex-direction: column;
}
.chan__block__left {
    align-items: flex-end;
}
.chan__block__left_btn {
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
.chan__block__left_title {
    font-size: clamp(32px, 4.2vw, 52px);
    color: var(--white-color);
    font-family: var(--font-secondary);
    margin: 0 0 8px 0;
}
.chan__block__right_bot_min {
    display: flex;
    gap: 8px;
}
.chan__block__right_bot {
    margin-left: 20px;
    color: var(--faded-color);
    font-weight: 200;
    font-size: var(--fontsize-small);
    font-family: var(--font-core);
}
.chan__block__right_text {
    color: var(--white-color);
    font-size: clamp(18px, 2vw, 26px);
    max-width: clamp(320px, 50vw, 520px);
    line-height: 1.6;
    font-family: var(--font-main);
}
.chan__block__right_text-up {
    font-family: var(--font-secondary);
    font-size: clamp(24px, 3vw, 36px);
    text-transform: uppercase;
    letter-spacing: 0.08em;
}
.chan__block__right_bot-text:first-of-type {
    margin-bottom: 24px;
}

@media (max-width: 992px) {
    .chan__block {
        flex-direction: column;
        text-align: center;
    }

    .chan__block__left,
    .chan__block__right {
        align-items: center;
    }

    .chan__block__left_btn {
        align-self: center;
    }

    .chan__block__right_bot {
        margin-left: 0;
        display: flex;
        gap: 16px;
    }
}

@media (max-width: 640px) {
    .chan__block__left_btn {
        font-size: clamp(18px, 5vw, 22px);
        padding: 10px 24px;
    }

    .chan__block__right_text {
        font-size: clamp(16px, 4.5vw, 20px);
    }

    .chan__block__right_text-up {
        font-size: clamp(20px, 5.8vw, 28px);
    }
}
</style>
