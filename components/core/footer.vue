<template>
  <footer class="footer">
    <div class="footer__wrap">
      <div class="footer__column footer__brand">
        <NuxtLink to="/" class="footer__logo" draggable="false">
          <img
            :src="Logo"
            alt="Лас Нубес Вилледж"
            class="footer__logo_image"
            draggable="false"
            loading="lazy"
            decoding="async"
          />
        </NuxtLink>
        <p class="footer__copyright">© Лас Нубес Вилледж рент. Все права защищены.</p>
      </div>

      <div class="footer__column">
        <p class="footer__title">Контакты</p>
        <div class="footer__contact">
          <a href="tel:+79224232070" class="footer__link" draggable="false">+7 (922) 423-20-70</a>
          <a href="mailto:lasnubesvillage@yandex.ru" class="footer__link" draggable="false">
            lasnubesvillage@yandex.ru
          </a>
        </div>
        <p class="footer__subtitle">Больше интересного в соцсетях</p>
        <div class="footer__social">
          <a href="https://vk.com/club230694721" target="_blank" rel="noreferrer noopener">
            <img :src="Vk" alt="ВКонтакте" class="footer__social_icon" draggable="false" loading="lazy" decoding="async" />
          </a>
          <a href="https://www.instagram.com/las.nubes.village/" target="_blank" rel="noreferrer noopener">
            <img :src="Rusgram" alt="Русграм" class="footer__social_icon" draggable="false" loading="lazy" decoding="async" />
          </a>
        </div>
        <div class="footer__messengers">
          <a
            href="https://t.me/lasnubesmsg"
            target="_blank"
            rel="noreferrer noopener"
            class="footer__messenger_link"
          >
            Написать в Telegram
          </a>
          <a href="https://t.me/lasnubesvillage" target="_blank" rel="noreferrer noopener" class="footer__messenger_icon">
            <img :src="Telegram" alt="Telegram" loading="lazy" decoding="async" />
          </a>
        </div>
        <div class="footer__messengers">
          <a
            href="https://wa.me/79224232070"
            target="_blank"
            rel="noreferrer noopener"
            class="footer__messenger_link"
          >
            Написать в WhatsApp
          </a>
          <a href="https://wa.me/79224232070" target="_blank" rel="noreferrer noopener" class="footer__messenger_icon">
            <img :src="WhatsApp" alt="WhatsApp" loading="lazy" decoding="async" />
          </a>
        </div>
      </div>

      <div class="footer__column">
        <p class="footer__title">Страницы</p>
        <div class="footer__pages">
          <NuxtLink to="/about" class="footer__link" draggable="false">О нас</NuxtLink>
          <NuxtLink to="/cottages" class="footer__link" draggable="false">Коттеджи</NuxtLink>
          <NuxtLink to="/services" class="footer__link" draggable="false">Наши услуги</NuxtLink>
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
  margin: var(--margin-section) auto 0 auto;
  max-width: var(--container-width);
  padding: 0 20px 120px;
  position: relative;
}

.footer a,
.footer {
  color: var(--white-color);
  text-decoration: none;
}

.footer__wrap {
  display: grid;
  gap: clamp(24px, 4vw, 64px);
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  align-items: flex-start;
}

.footer__column {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer__brand {
  gap: 20px;
}

.footer__logo_image {
  width: clamp(140px, 18vw, 220px);
  height: auto;
}

.footer__copyright {
  font-size: var(--fontsize-secondary);
  margin: 0;
  max-width: 240px;
}

.footer__title {
  font-family: var(--font-main);
  font-size: var(--fontsize-large);
  margin: 0;
}

.footer__subtitle {
  font-family: var(--font-core);
  font-size: var(--fontsize-secondary);
  margin: 12px 0 0 0;
}

.footer__contact {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer__link {
  font-size: var(--fontsize-secondary);
}

.footer__social {
  display: flex;
  align-items: center;
  gap: 18px;
}

.footer__social_icon {
  width: 36px;
  height: 36px;
}

.footer__messengers {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 8px;
}

.footer__messenger_link {
  padding: 10px 16px;
  border-radius: var(--border-radius-container);
  border: 1px solid rgba(255, 255, 255, 0.3);
  font-size: var(--fontsize-secondary);
}

.footer__messenger_icon img {
  width: 32px;
  height: 32px;
}

.footer__pages {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

@media (max-width: 1024px) {
  .footer {
    padding-bottom: 96px;
  }
}

@media (max-width: 720px) {
  .footer {
    padding: 0 16px 80px;
  }

  .footer__wrap {
    gap: 32px;
  }

  .footer__brand,
  .footer__column {
    align-items: flex-start;
    text-align: left;
  }
}

@media (max-width: 520px) {
  .footer__wrap {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .footer__column,
  .footer__brand {
    align-items: center;
  }

  .footer__messengers {
    justify-content: center;
  }

  .footer__contact,
  .footer__pages {
    align-items: center;
  }
}
</style>
