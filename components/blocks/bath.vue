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
          <img :src="item.img" alt="Баня" class="bath__block__left_reel" draggable="false" />
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
              <img :src="Man" alt="Иконка гостей" class="bath__block__right_bot_min-reel" draggable="false" />
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
    border-radius: var(--border-radius-container);
}

.bath {
    margin: clamp(32px, 7vw, 70px) auto 0 auto;
    max-width: min(var(--container-width), 100%);
    padding: clamp(32px, 6vw, 48px) var(--container-padding) 0 var(--container-padding);
}

.bath__block {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
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
    gap: clamp(16px, 3vw, 28px);
}

.bath__block__left_btn {
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

.bath__block__left_title {
    font-size: clamp(26px, 4vw, 40px);
    color: var(--white-color);
    font-family: var(--font-secondary);
    margin: 0;
}

.bath__block__right {
    gap: clamp(18px, 3vw, 32px);
    max-width: 520px;
}

.bath__block__right_bot_min {
    display: flex;
    gap: 8px;
    align-items: center;
}

.bath__block__right_bot_min-reel {
    width: 22px;
    height: 22px;
}

.bath__block__right_bot {
    margin-left: clamp(12px, 2vw, 24px);
    color: var(--faded-color);
    font-weight: 200;
    font-size: clamp(14px, 1.2vw + 10px, 18px);
    font-family: var(--font-core);
    display: flex;
    flex-wrap: wrap;
    gap: clamp(12px, 2vw, 20px);
}

.bath__block__right_text {
    color: var(--white-color);
    font-size: clamp(18px, 1.4vw + 12px, 24px);
    max-width: 508px;
    line-height: 1.55;
    font-family: var(--font-main);
}

.bath__block__right_text-up {
    font-family: var(--font-secondary);
    font-size: clamp(24px, 3.4vw, 34px);
    text-transform: uppercase;
    display: block;
    margin-bottom: clamp(6px, 1.4vw, 12px);
}

.bath__block__right_bot-text:first-of-type {
    margin-bottom: clamp(12px, 3vw, 20px);
}

@media (max-width: 992px) {
    .bath {
        padding-inline: clamp(16px, 5vw, 24px);
    }

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
        justify-content: center;
    }
}

@media (max-width: 640px) {
    .bath {
        padding-inline: clamp(12px, 5vw, 20px);
    }

    .bath__block__right_text {
        font-size: clamp(16px, 4vw, 20px);
    }

    .bath__block__left_btn {
        width: 100%;
        max-width: 320px;
        justify-content: center;
    }
}
</style>
```

Если нужно ещё что-то изменить — дай знать!
