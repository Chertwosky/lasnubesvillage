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
          <img :src="item.img" alt="Баня" class="chan__block__left_reel" draggable="false" loading="lazy" decoding="async" />
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
              <img :src="Man" alt="Иконка гостей" class="chan__block__right_bot_min-reel" draggable="false" loading="lazy" decoding="async" />
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

.chan {
    margin: 50px auto 0 auto;
    max-width: var(--container-width);
    padding: 40px clamp(16px, 5vw, 24px) 0;
}
.chan__block {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    gap: clamp(24px, 6vw, 56px);
}
.chan__block__left,
.chan__block__right {
    display: flex;
    flex-direction: column;
    gap: clamp(12px, 3vw, 24px);
}
.chan__block__left {
    align-items: flex-start;
}
.chan__block__left_btn {
    background-color: var(--green-color);
    text-transform: uppercase;
    color: var(--white-color);
    display: inline-flex;
    padding: 12px 32px;
    border-radius: var(--border-radius-container);
    font-size: clamp(20px, 2.3vw, 30px);
    font-family: var(--font-secondary);
    line-height: 1;
    border: none;
    margin-top: 8px;
    cursor: pointer;
}
.chan__block__left_title {
    font-size: clamp(32px, 4vw, 48px);
    color: var(--white-color);
    font-family: var(--font-secondary);
    margin: 0;
}
.chan__block__left_reel {
    border-radius: var(--border-radius-container);
    width: clamp(260px, 40vw, 480px);
    height: auto;
}
.chan__block__right_text {
    color: var(--white-color);
    font-size: clamp(18px, 2.2vw, 26px);
    max-width: 520px;
    line-height: 1.6;
    font-family: var(--font-main);
}
.chan__block__right_text-up {
    font-family: var(--font-secondary);
    font-size: clamp(26px, 3.2vw, 38px);
    text-transform: uppercase;
}
.chan__block__right_bot {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    color: var(--faded-color);
    font-size: clamp(14px, 1.5vw, 16px);
    font-family: var(--font-core);
}
.chan__block__right_bot_min {
    display: flex;
    gap: 8px;
    align-items: center;
}
.chan__block__right_bot_min-reel {
    width: 20px;
    height: 20px;
}

@media (max-width: 992px) {
    .chan {
        padding: 40px 16px 0;
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
        justify-content: center;
    }
}

@media (max-width: 640px) {
    .chan {
        padding: 32px 12px 0;
    }

    .chan__block__left_btn {
        font-size: 22px;
        padding: 10px 24px;
    }

    .chan__block__right_text {
        font-size: var(--fontsize-primary);
    }
}
</style>
```

Если нужно ещё что-то изменить — дай знать!
