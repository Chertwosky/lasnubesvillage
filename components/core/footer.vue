<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__column footer__brand">
        <NuxtLink to="/" class="footer__logo" draggable="false">
          <img :src="Logo" alt="Лого" draggable="false" />
        </NuxtLink>
        <p class="footer__text">© Лас Нубес Вилледж рент. Все права защищены.</p>
      </div>

      <div class="footer__column footer__contacts">
        <p class="footer__title">Контакты</p>
        <div class="footer__contact-links">
          <a href="tel:+79224232070" class="footer__link" draggable="false">+7 (922) 423-20-70</a>
          <a href="mailto:lasnubesvillage@yandex.ru" class="footer__link" draggable="false">lasnubesvillage@yandex.ru</a>
        </div>
        <p class="footer__note">Больше интересного в соцсетях</p>
        <div class="footer__social">
          <a href="https://vk.com/club230694721" target="_blank" rel="noreferrer noopener" draggable="false">
            <img :src="Vk" alt="ВКонтакте" />
          </a>
          <a href="https://www.instagram.com/las.nubes.village/" target="_blank" rel="noreferrer noopener" draggable="false">
            <img :src="Rusgram" alt="Русграм" />
          </a>
        </div>
        <div class="footer__messengers">
          <a
            href="https://t.me/lasnubesmsg"
            target="_blank"
            rel="noreferrer noopener"
            class="footer__messenger"
            draggable="false"
          >
            <span>Написать в Telegram</span>
            <img :src="Telegram" alt="Telegram" />
          </a>
          <a
            href="https://wa.me/79224232070"
            target="_blank"
            rel="noreferrer noopener"
            class="footer__messenger"
            draggable="false"
          >
            <span>Написать в WhatsApp</span>
            <img :src="WhatsApp" alt="WhatsApp" />
          </a>
        </div>
      </div>

      <div class="footer__column footer__links">
        <p class="footer__title">Страницы</p>
        <ul class="footer__list">
          <li><NuxtLink to="/about" class="footer__link" draggable="false">О нас</NuxtLink></li>
          <li><NuxtLink to="/cottages" class="footer__link" draggable="false">Коттеджи</NuxtLink></li>
          <li><NuxtLink to="/services" class="footer__link" draggable="false">Наши услуги</NuxtLink></li>
        </ul>
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
  position: relative;
  margin: var(--margin-section) auto 0 auto;
  max-width: var(--container-width);
  padding: clamp(32px, 6vw, 64px) var(--page-gutter) 140px;
  background: rgba(14, 39, 70, 0.85);
  border-radius: 32px 32px 0 0;
}

.footer__inner {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(28px, 4vw, 56px);
  align-items: start;
}

.footer__column {
  display: flex;
  flex-direction: column;
  gap: clamp(14px, 2vw, 22px);
}

.footer__brand {
  gap: clamp(18px, 2.5vw, 26px);
}

.footer__logo img {
  width: clamp(140px, 18vw, 220px);
  height: auto;
}

.footer__text {
  font-size: clamp(14px, 1.6vw, 16px);
  line-height: 1.5;
  max-width: 260px;
}

.footer__title {
  font-family: var(--font-secondary);
  font-size: clamp(20px, 2.6vw, 26px);
  margin: 0;
}

.footer__contact-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer__link {
  color: var(--white-color);
  font-size: clamp(15px, 1.8vw, 18px);
  font-family: var(--font-core);
  text-decoration: none;
}

.footer__note {
  font-size: clamp(14px, 1.6vw, 16px);
  margin-top: 6px;
}

.footer__social {
  display: flex;
  gap: 18px;
}

.footer__social img {
  width: 34px;
  height: 34px;
}

.footer__messengers {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer__messenger {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: var(--border-radius-container);
  text-decoration: none;
  color: var(--white-color);
  font-size: clamp(15px, 1.6vw, 17px);
  font-family: var(--font-core);
}

.footer__messenger img {
  width: 24px;
  height: 24px;
}

.footer__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.footer :deep(a:hover) {
  opacity: 0.8;
}

@media (max-width: 1024px) {
  .footer__inner {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .footer__brand {
    grid-column: span 2;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .footer__text {
    max-width: none;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: clamp(28px, 10vw, 48px) var(--page-gutter) 120px;
    border-radius: 24px 24px 0 0;
  }

  .footer__inner {
    grid-template-columns: 1fr;
  }

  .footer__brand {
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
  }

  .footer__contacts,
  .footer__links {
    width: 100%;
  }

  .footer__messenger {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .footer__social img {
    width: 30px;
    height: 30px;
  }

  .footer__messenger {
    padding: 10px 14px;
  }
}
</style>
