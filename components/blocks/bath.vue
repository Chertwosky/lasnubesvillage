<template>
    <section class="bath">
      <SectionBadge
        class="bath__badge"
        gradient="linear-gradient(90deg,#2f1e16 0%, #120805 100%)"
        align="right"
      >
        Баня
      </SectionBadge>
      <div
        v-for="(item, index) in items"
        :key="index"
        class="bath__block"
        :id="item.id"
      >
        <div class="bath__block__left">
          <img :src="item.img" alt="Баня" class="bath__block__left_reel" draggable="false" />
          <BookingButton customClass="bath__block__left_btn">
            Забронировать
          </BookingButton>
        </div>

        <div class="bath__block__right">
          <p class="bath__block__right_text text-overlay">
            <span class="bath__block__right_text-up">{{ item.upTitle }}</span>
            {{ item.text }}
          </p>
          <div class="bath__block__right_bot text-overlay text-overlay--compact">
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
  import SectionBadge from '@/components/ui/SectionBadge.vue'

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
    border-radius: 16px;
}

.bath {
    margin: 50px auto 0 auto;
    max-width: var(--container-width);
    padding: 40px 20px 0 20px;
}

.bath__badge {
    margin-bottom: 36px;
}
.bath__block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin: 0 0 50px 0;
    gap: 40px;
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
    display: flex;
    padding: 7px 20px 15px 20px;
    border-radius: var(--border-radius-container);
    font-size: 33px;
    font-family: var(--font-secondary);
    line-height: 100%;
    letter-spacing: 0;
    border: none;
    width: fit-content;
    margin-top: 10px;
    cursor: pointer;
}
.bath__block__right_bot_min {
    display: flex;
    gap: 8px;
}
.bath__block__right_bot {
    margin-left: 0;
    color: var(--faded-color);
    font-weight: 200;
    font-size: var(--fontsize-small);
    font-family: var(--font-core);
    display: grid;
    gap: 10px;
}
.bath__block__right {
    gap: 16px;
}
.bath__block__right_text {
    color: var(--white-color);
    font-size: var(--fontsize-unusual);
    max-width: 508px;
    line-height: 140%;
    font-family: var(--font-main);
}
.bath__block__right_text-up {
    font-family: var(--font-secondary);
    font-size: 36px;
    text-transform: uppercase;
}
.bath__block__right_bot-text,
.bath__block__right_bot_min-text {
    margin: 0;
    color: var(--white-color);
    font-family: var(--font-secondary);
    font-size: var(--fontsize-secondary);
}
.bath__block__right_bot-text:first-of-type {
    margin-bottom: 24px;
}

@media (max-width: 992px) {
    .bath {
        padding: 40px 16px 0 16px;
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
        width: 100%;
    }
}

@media (max-width: 640px) {
    .bath {
        padding: 32px 12px 0 12px;
    }

    .bath__block__left_btn {
        font-size: 22px;
        padding: 10px 24px;
    }

    .bath__block__right_text {
        font-size: var(--fontsize-primary);
    }

    .bath__block__right_text-up {
        font-size: calc(var(--fontsize-unusual) * 1.2);
    }
}
</style>
