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
          <img :src="item.img" alt="Баня" class="chan__block__left_reel" draggable="false" />
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
              <img :src="Man" alt="Иконка гостей" class="chan__block__right_bot_min-reel" draggable="false" />
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
    border-radius: 16px;
}

.chan {
    margin: clamp(32px, 7vw, 70px) auto 0 auto;
    max-width: min(var(--container-width), 100%);
    padding: clamp(32px, 6vw, 48px) var(--container-padding) 0 var(--container-padding);
}
.chan__block {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
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
    gap: clamp(16px, 3vw, 28px);
}
.chan__block__left_btn {
    background-color: var(--green-color);
    text-transform: uppercase;
    color: var(--white-color);
    display: inline-flex;
    padding: clamp(12px, 2vw, 18px) clamp(24px, 4vw, 40px);
    border-radius: var(--border-radius-container);
    font-size: clamp(18px, 1.6vw + 12px, 24px);
    font-family: var(--font-secondary);
    line-height: 1.05;
    border: none;
    margin-top: clamp(12px, 2vw, 20px);
    cursor: pointer;
    align-self: flex-start;
}
.chan__block__left_title {
    font-size: clamp(26px, 4vw, 40px);
    color: var(--white-color);
    font-family: var(--font-secondary);
    margin: 0;
}
.chan__block__right {
    gap: clamp(18px, 3vw, 32px);
    max-width: 520px;
}
.chan__block__right_bot_min {
    display: flex;
    gap: 8px;
    align-items: center;
}
.chan__block__right_bot_min-reel {
    width: 22px;
    height: 22px;
}
.chan__block__right_bot {
    margin-left: clamp(12px, 2vw, 24px);
    color: var(--faded-color);
    font-weight: 200;
    font-size: clamp(14px, 1.2vw + 10px, 18px);
    font-family: var(--font-core);
    display: flex;
    flex-wrap: wrap;
    gap: clamp(12px, 2vw, 20px);
}
.chan__block__right_text {
    color: var(--white-color);
    font-size: clamp(18px, 1.4vw + 12px, 24px);
    max-width: 508px;
    line-height: 1.55;
    font-family: var(--font-main);
}
.chan__block__right_text-up {
    font-family: var(--font-secondary);
    font-size: clamp(24px, 3.4vw, 34px);
    text-transform: uppercase;
    display: block;
    margin-bottom: clamp(6px, 1.4vw, 12px);
}
.chan__block__right_bot-text:first-of-type {
    margin-bottom: clamp(12px, 3vw, 20px);
}

@media (max-width: 992px) {
    .chan {
        padding-inline: clamp(16px, 5vw, 24px);
    }

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
        justify-content: center;
    }
}

@media (max-width: 640px) {
    .chan {
        padding-inline: clamp(12px, 5vw, 20px);
    }

    .chan__block__right_text {
        font-size: clamp(16px, 4vw, 20px);
    }

    .chan__block__left_btn {
        width: 100%;
        max-width: 320px;
        justify-content: center;
    }
}
</style>
```

Если нужно ещё что-то изменить — дай знать!
