<template>
  <footer class="footer">
    <div class="footer__wrap">
      <div class="footer__wrap_column1">
        <NuxtLink to="/">
          <img :src="Logo" alt="Логотип Las Nubes Village" class="footer__wrap_column1_reel" draggable="false" />
        </NuxtLink>
        <p class="footer__wrap_column1_text one">© Лас Нубес Вилледж рент. Все права защищены.</p>
      </div>
      <div class="footer__wrap_columns-2-3">
        <div class="footer__wrap_column2">
          <p class="footer__wrap_column2_title">Контакты</p>
          <div class="footer__wrap_column2_info">
            <a href="tel:+79224232070" class="footer__wrap_column2_link phone" draggable="false">+7 (922) 423-20-70</a>
            <a href="mailto:lasnubesvillage@yandex.ru" class="footer__wrap_column2_link mail" draggable="false">lasnubesvillage@yandex.ru</a>
          </div>
          <p class="footer__wrap_column2_text more">Больше интересного в соцсетях</p>
          <div class="footer__wrap_column2_social">
            <a href="https://vk.com/club230694721" class="footer__social_link" draggable="false">
              <img :src="Vk" alt="Вконтакте" class="footer__wrap_column2_social_reel" draggable="false" />
            </a>
            <a href="https://www.instagram.com/las.nubes.village/" class="footer__social_link" draggable="false">
              <img :src="Rusgram" alt="Русграм" class="footer__wrap_column2_social_reel" draggable="false" />
            </a>
          </div>
          <div class="footer__wrap_column2_tg">
            <a
              href="https://t.me/lasnubesmsg"
              target="_blank"
              rel="noreferrer noopener"
              class="footer__wrap_column2_link button"
            >
              Написать в Telegram
            </a>
            <a href="https://t.me/lasnubesvillage" target="_blank" rel="noreferrer noopener" class="footer__wrap_column2_icon">
              <img :src="Telegram" alt="Telegram" class="footer__wrap_column2_tg_reel" draggable="false" />
            </a>
          </div>
          <div class="footer__wrap_column2_ws">
            <a
              href="https://wa.me/79224232070"
              target="_blank"
              rel="noreferrer noopener"
              class="footer__wrap_column2_link button"
            >
              Написать в WhatsApp
            </a>
            <a href="https://wa.me/79224232070" target="_blank" rel="noreferrer noopener" class="footer__wrap_column2_icon">
              <img :src="WhatsApp" alt="WhatsApp" class="footer__wrap_column2_tg_reel" draggable="false" />
            </a>
          </div>
        </div>
        <div class="footer__wrap_column3">
          <p class="footer__wrap_column3_title">Страницы</p>
          <div class="footer__wrap_column3_list">
            <NuxtLink to="/about" class="footer__wrap_column3_link" draggable="false">О нас</NuxtLink>
            <NuxtLink to="/cottages" class="footer__wrap_column3_link" draggable="false">Коттеджи</NuxtLink>
            <NuxtLink to="/services" class="footer__wrap_column3_link" draggable="false">Наши услуги</NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <Cloud width="156px" top="0px" right="12%" />
    <Cloud width="170px" bottom="15%" right="25%" flipped />
  </footer>
</template>

<script setup>
import Logo from '@/assets/images/core/footer/logo.svg'
import Vk from '@/assets/images/core/footer/Vk.svg'
import Rusgram from '@/assets/images/core/footer/Rusgram.svg'
import Telegram from '@/assets/images/core/footer/Telegram.svg'
import WhatsApp from '@/assets/images/core/footer/Whatsapp.svg'
import Cloud from '@/components/blocks/Cloud.vue'
</script>

<style scoped>
.footer {
  margin: clamp(60px, 10vw, 120px) auto 0;
  max-width: var(--container-width);
  padding: clamp(48px, 9vw, 128px) clamp(16px, 5vw, 40px) clamp(120px, 18vw, 160px);
  position: relative;
}

.footer,
.footer a {
  color: var(--white-color);
  text-decoration: none;
}

.footer__wrap {
  display: grid;
  grid-template-columns: minmax(220px, 0.9fr) minmax(320px, 1fr);
  gap: clamp(28px, 6vw, 96px);
  align-items: flex-start;
}

.footer__wrap_columns-2-3 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: clamp(24px, 5vw, 72px);
}

.footer__wrap_column1,
.footer__wrap_column2,
.footer__wrap_column3,
.footer__wrap_column3_list {
  display: flex;
  flex-direction: column;
  gap: clamp(16px, 2vw, 28px);
}

.footer__wrap_column1 {
  gap: clamp(18px, 3vw, 32px);
}

.footer__wrap_column1_reel {
  width: clamp(140px, 22vw, 216px);
  height: auto;
  display: block;
}

.footer__wrap_column1_text,
.footer__wrap_column2_link,
.footer__wrap_column2_text,
.footer__wrap_column3_link {
  font-size: clamp(13px, 1.7vw, 16px);
  line-height: 1.5;
  font-family: var(--font-core);
  margin: 0;
}

.footer__wrap_column2_title,
.footer__wrap_column3_title {
  font-size: clamp(18px, 2.2vw, 24px);
  font-family: var(--font-secondary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0;
}

.footer__wrap_column2_info {
  display: flex;
  flex-direction: column;
  gap: clamp(10px, 1.6vw, 18px);
}

.footer__wrap_column2_text.more {
  margin: clamp(8px, 2vw, 16px) 0 0;
}

.footer__wrap_column2_social {
  display: flex;
  align-items: center;
  gap: clamp(16px, 3vw, 28px);
}

.footer__wrap_column2_social_reel {
  width: clamp(32px, 4vw, 40px);
  height: clamp(32px, 4vw, 40px);
}

.footer__wrap_column2_tg,
.footer__wrap_column2_ws {
  display: grid;
  grid-template-columns: minmax(180px, 1fr) auto;
  align-items: center;
  gap: clamp(12px, 3vw, 24px);
  width: min(320px, 100%);
}

.footer__wrap_column2_icon {
  display: grid;
  place-items: center;
  padding: 10px;
  border-radius: var(--border-radius-container);
  border: 1px solid rgba(255, 255, 255, 0.45);
  transition: background-color 0.2s ease;
}

.footer__wrap_column2_icon:hover {
  background-color: rgba(255, 255, 255, 0.12);
}

.footer__wrap_column2_tg_reel {
  width: clamp(28px, 3vw, 36px);
  height: clamp(28px, 3vw, 36px);
}

.footer__wrap_column2_link.button {
  padding: clamp(10px, 2vw, 14px) clamp(18px, 4vw, 28px);
  border-radius: var(--border-radius-container);
  border: 1px solid rgba(255, 255, 255, 0.45);
  transition: background-color 0.2s ease, color 0.2s ease;
}

.footer__wrap_column2_link.button:hover {
  background-color: var(--white-color);
  color: var(--green-color);
}

.footer__wrap_column3_list {
  gap: clamp(12px, 2vw, 18px);
}

.footer__wrap_column3_link {
  position: relative;
  font-family: var(--font-core);
  letter-spacing: 0.04em;
}

.footer__wrap_column3_link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 100%;
  height: 2px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.footer__wrap_column3_link:focus-visible::after,
.footer__wrap_column3_link:hover::after {
  transform: scaleX(1);
}

@media (max-width: 1024px) {
  .footer__wrap {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }

  .footer__wrap_column1 {
    align-items: flex-start;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: clamp(36px, 10vw, 72px) clamp(16px, 6vw, 32px) clamp(96px, 22vw, 140px);
  }

  .footer__wrap {
    gap: clamp(24px, 8vw, 40px);
  }

  .footer__wrap_column1,
  .footer__wrap_column2,
  .footer__wrap_column3 {
    align-items: center;
    text-align: center;
  }

  .footer__wrap_column2_tg,
  .footer__wrap_column2_ws {
    grid-template-columns: 1fr;
    justify-items: center;
  }

  .footer__wrap_column2_icon {
    width: 56px;
  }

  .footer__wrap_column2_link.button {
    width: min(280px, 100%);
  }
}

@media (max-width: 540px) {
  .footer__wrap {
    gap: clamp(20px, 9vw, 32px);
  }

  .footer__wrap_column1 {
    align-items: center;
  }

  .footer__wrap_column3_list {
    align-items: center;
  }
}
</style>
