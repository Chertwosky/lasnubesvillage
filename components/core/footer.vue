<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__brand">
        <NuxtLink to="/" class="footer__logo" draggable="false">
          <img
            :src="Logo"
            alt="Логотип Las Nubes Village"
            loading="lazy"
            decoding="async"
            draggable="false"
          />
        </NuxtLink>
        <p class="footer__text">© Лас Нубес Вилледж рент. Все права защищены.</p>
      </div>

      <div class="footer__contacts">
        <h2 class="footer__title">Контакты</h2>
        <div class="footer__contact-list">
          <a href="tel:+79224232070" class="footer__link" draggable="false">+7 (922) 423-20-70</a>
          <a href="mailto:lasnubesvillage@yandex.ru" class="footer__link" draggable="false">lasnubesvillage@yandex.ru</a>
        </div>
        <p class="footer__hint">Больше интересного в соцсетях</p>
        <div class="footer__social">
          <a href="https://vk.com/club230694721" target="_blank" rel="noreferrer noopener" aria-label="Мы во ВКонтакте">
            <img :src="Vk" alt="VK" loading="lazy" decoding="async" draggable="false" />
          </a>
          <a href="https://www.instagram.com/las.nubes.village/" target="_blank" rel="noreferrer noopener" aria-label="Мы в Rusgram">
            <img :src="Rusgram" alt="Rusgram" loading="lazy" decoding="async" draggable="false" />
          </a>
        </div>
        <div class="footer__messengers">
          <a
            href="https://t.me/lasnubesmsg"
            target="_blank"
            rel="noreferrer noopener"
            class="footer__button"
          >
            Написать в Telegram
          </a>
          <a
            href="https://wa.me/79224232070"
            target="_blank"
            rel="noreferrer noopener"
            class="footer__button"
          >
            Написать в WhatsApp
          </a>
        </div>
      </div>

      <div class="footer__links">
        <h2 class="footer__title">Страницы</h2>
        <NuxtLink to="/about" class="footer__link" draggable="false">О нас</NuxtLink>
        <NuxtLink to="/cottages" class="footer__link" draggable="false">Коттеджи</NuxtLink>
        <NuxtLink to="/services" class="footer__link" draggable="false">Наши услуги</NuxtLink>
      </div>
    </div>

    <Cloud width="156px" top="0" right="12%" />
    <Cloud width="170px" bottom="15%" right="25%" flipped />
  </footer>
</template>

<script setup>
import Logo from '@/assets/images/core/footer/logo.svg'
import Vk from '@/assets/images/core/footer/Vk.svg'
import Rusgram from '@/assets/images/core/footer/Rusgram.svg'
import Cloud from '@/components/blocks/Cloud.vue'
</script>

<style scoped>
.footer {
  margin: var(--margin-section) auto 0 auto;
  max-width: var(--container-width);
  padding: clamp(32px, 6vw, 60px) clamp(16px, 5vw, 32px) 120px;
  position: relative;
}

.footer a,
.footer {
  color: var(--white-color);
  text-decoration: none;
}

.footer__inner {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(24px, 4vw, 64px);
  align-items: start;
}

.footer__brand img {
  width: clamp(140px, 16vw, 220px);
  height: auto;
  display: block;
}

.footer__brand {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.footer__text {
  margin: 0;
  font-size: clamp(14px, 1.2vw, 16px);
  line-height: 150%;
  max-width: 220px;
}

.footer__title {
  font-size: clamp(22px, 2.3vw, 28px);
  font-family: var(--font-main);
  margin: 0 0 12px 0;
}

.footer__link {
  font-size: clamp(15px, 1.4vw, 18px);
  font-family: var(--font-core);
  line-height: 150%;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: color 0.2s ease;
}

.footer__link + .footer__link {
  margin-top: 8px;
}

.footer__link:hover,
.footer__link:focus-visible {
  color: #ffffffcc;
}

.footer__contact-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
}

.footer__hint {
  font-size: clamp(14px, 1.2vw, 16px);
  margin: 0 0 16px 0;
  font-family: var(--font-core);
}

.footer__social {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 16px;
}

.footer__social img {
  width: 36px;
  height: 36px;
}

.footer__messengers {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 18px;
  border-radius: var(--border-radius-container);
  border: 1px solid var(--white-color);
  font-size: clamp(15px, 1.4vw, 18px);
  font-family: var(--font-core);
  transition: background 0.2s ease, color 0.2s ease;
}

.footer__button:hover,
.footer__button:focus-visible {
  background: var(--white-color);
  color: var(--black-color);
}

.footer__links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

@media (max-width: 900px) {
  .footer__inner {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .footer {
    padding-bottom: 90px;
  }

  .footer__inner {
    grid-template-columns: 1fr;
  }

  .footer__brand,
  .footer__contacts,
  .footer__links {
    align-items: center;
    text-align: center;
  }

  .footer__text,
  .footer__hint {
    max-width: none;
  }

  .footer__social {
    justify-content: center;
  }

  .footer__messengers {
    width: 100%;
  }

  .footer__button {
    width: 100%;
  }
}
</style>
