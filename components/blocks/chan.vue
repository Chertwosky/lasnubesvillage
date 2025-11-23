<template>
    <section class="chan">
      <SectionBadge
        class="chan__badge"
        gradient="linear-gradient(90deg,#2a1731 0%, #0d0716 100%)"
        align="right"
      >
        Чаны
      </SectionBadge>
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
          <p class="chan__block__right_text text-overlay">
            <span class="chan__block__right_text-up">{{ item.upTitle }}</span>
            {{ item.text }}
          </p>
          <div class="chan__block__right_bot text-overlay">
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
  import { resolveImage } from '@/utils/resolveImage'
  import BookingButton from '@/components/blocks/BookingButton.vue'
  import Cloud from '@/components/blocks/Cloud.vue'
  import SectionBadge from '@/components/ui/SectionBadge.vue'

  const chan = resolveImage('core/chan/chan')
  const Man = resolveImage('core/chan/man')

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
    margin: 50px auto 0 auto;
    max-width: var(--container-width);
    padding: 40px var(--container-padding) 0 var(--container-padding);
}

.chan__badge {
    margin-bottom: 36px;
}
.chan__block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    gap: 40px;
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
.chan__block__left_title {
    font-size: calc(var(--fontsize-unusual)*2);
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
    padding: 18px 22px;
    display: flex;
    flex-direction: column;
    gap: 12px;
}
.chan__block__right_text {
    color: var(--white-color);
    font-size: var(--fontsize-unusual);
    max-width: 508px;
    line-height: 140%;
    font-family: var(--font-main);
    padding: 24px 28px;
}
.chan__block__right_text-up {
    font-family: var(--font-secondary);
    font-size: 36px;
    text-transform: uppercase;
}
.chan__block__right_bot-text:first-of-type {
    margin-bottom: 24px;
}

@media (max-width: 992px) {
    .chan {
        padding: 40px var(--container-padding) 0 var(--container-padding);
    }

    .chan__block {
        flex-direction: column;
        text-align: left;
    }

    .chan__block__left,
    .chan__block__right {
        align-items: flex-start;
    }

    .chan__block__left_btn {
        align-self: flex-start;
    }

    .chan__block__right_bot {
        margin-left: 0;
        display: flex;
        gap: 16px;
        align-items: flex-start;
        text-align: left;
    }
}

@media (max-width: 640px) {
    .chan {
        padding: 32px var(--container-padding) 0 var(--container-padding);
    }

    .chan__block__left_btn {
        font-size: 24px;
        padding: 12px 24px;
        width: 100%;
        justify-content: center;
    }

    .chan__block__right_text {
        font-size: var(--fontsize-primary);
        padding: 18px 20px;
    }

    .chan__block__right_text-up {
        font-size: calc(var(--fontsize-unusual) * 1.2);
    }
}
</style>
