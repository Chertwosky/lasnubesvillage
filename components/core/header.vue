<template>
  <header class="header">
    <div class="header__brand">
      <NuxtLink to="/" class="header__logo-link" draggable="false">
        <img
          :src="logo"
          alt="Логотип Las Nubes Village"
          class="header__logo"
          draggable="false"
          loading="lazy"
          decoding="async"
        />
      </NuxtLink>
      <button
        class="header__toggle"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-controls="main-navigation"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span class="header__toggle_bar"></span>
        <span class="header__toggle_bar"></span>
        <span class="header__toggle_bar"></span>
      </button>
    </div>

    <nav
      id="main-navigation"
      :class="['header__nav', { 'header__nav--open': isMenuOpen }]"
    >
      <NuxtLink to="/cottages" class="header__link" draggable="false">Коттеджи</NuxtLink>
      <NuxtLink to="/services" class="header__link" draggable="false">Услуги</NuxtLink>
      <NuxtLink :to="{ path: '/', hash: '#stocks' }" class="header__link" draggable="false">Акции</NuxtLink>
      <NuxtLink to="/about" class="header__link" draggable="false">О нас</NuxtLink>
    </nav>

    <div :class="['header__feed', { 'header__feed--stacked': isMenuOpen }]">
      <a href="tel:+79224232070" class="header__feed_call" draggable="false">+7 (922) 423-20-70</a>
      <div class="header__feed_social">
        <a
          href="https://t.me/lasnubesvillage"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Las Nubes Village в Telegram"
        >
          <img
            :src="Telegram"
            alt="Telegram"
            class="header__feed_social_reel"
            draggable="false"
            loading="lazy"
            decoding="async"
          />
        </a>
        <a
          href="https://wa.me/79224232070"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Написать в WhatsApp"
        >
          <img
            :src="phoneIcon"
            alt="WhatsApp"
            class="header__feed_social_reel"
            draggable="false"
            loading="lazy"
            decoding="async"
          />
        </a>
      </div>
      <BookingButton customClass="header__feed_button">
        Забронировать
      </BookingButton>
    </div>
  </header>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import logo from '@/assets/images/core/header/logo.svg'
import phoneIcon from '@/assets/images/core/header/phone.svg'
import Telegram from '@/assets/images/core/header/Telegram.svg'
import BookingButton from '@/components/blocks/BookingButton.vue'

const isMenuOpen = ref(false)
const route = useRoute()

watch(
  () => route.fullPath,
  () => {
    isMenuOpen.value = false
  }
)
</script>

<style scoped>
.header {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 20px clamp(16px, 5vw, 28px);
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: clamp(16px, 4vw, 40px);
}

.header__brand {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: clamp(16px, 3vw, 32px);
}

.header__logo {
  width: clamp(64px, 7vw, 96px);
  height: auto;
  display: block;
}

.header__toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 8px;
  border-radius: var(--border-radius-small);
  border: 1px solid rgba(255, 255, 255, 0.4);
  background: rgba(9, 21, 53, 0.2);
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.header__toggle:focus-visible,
.header__toggle:hover {
  background: rgba(9, 21, 53, 0.4);
  border-color: rgba(255, 255, 255, 0.7);
}

.header__toggle_bar {
  width: 22px;
  height: 2px;
  background: var(--white-color);
}

.header__nav,
.header__feed {
  display: flex;
  align-items: center;
  gap: clamp(18px, 3vw, 36px);
  font-family: var(--font-core);
  color: var(--white-color);
}

.header__nav {
  justify-content: center;
}

.header__link,
.header__feed_call {
  text-decoration: none;
  font-size: clamp(15px, 1.4vw, 18px);
  color: inherit;
  transition: color 0.2s ease;
}

.header__link:hover,
.header__feed_call:hover,
.header__link:focus-visible,
.header__feed_call:focus-visible {
  color: #ffffffcc;
}

.header__feed {
  justify-content: flex-end;
}

.header__feed--stacked {
  width: 100%;
}

.header__feed_social {
  display: flex;
  align-items: center;
  gap: 12px;
}

.header__feed_social_reel {
  width: 32px;
  height: 32px;
}

.header__feed_button {
  padding: 12px 30px;
  background-color: var(--green-color);
  color: var(--white-color);
  font-size: clamp(15px, 1.4vw, 18px);
  border-radius: var(--border-radius-container);
  border: none;
  cursor: pointer;
  font-family: var(--font-core);
  transition: filter 0.2s ease;
}

.header__feed_button:hover,
.header__feed_button:focus-visible {
  filter: brightness(1.1);
}

@media (max-width: 1200px) {
  .header {
    grid-template-columns: auto 1fr;
    grid-template-areas:
      'brand feed'
      'nav nav';
    align-items: start;
  }

  .header__brand {
    grid-area: brand;
  }

  .header__nav {
    grid-area: nav;
    justify-content: flex-start;
  }

  .header__feed {
    grid-area: feed;
    justify-content: flex-end;
  }
}

@media (max-width: 1024px) {
  .header {
    grid-template-columns: 1fr;
    grid-template-areas:
      'brand'
      'feed';
    gap: 12px;
  }

  .header__toggle {
    display: inline-flex;
  }

  .header__nav {
    display: none;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    background: rgba(9, 21, 53, 0.92);
    backdrop-filter: blur(8px);
    border-radius: var(--border-radius-container);
    padding: 18px 20px;
    margin-top: 8px;
    border: 1px solid rgba(255, 255, 255, 0.14);
  }

  .header__nav--open {
    display: flex;
    animation: headerFade 0.22s ease;
  }

  .header__link {
    width: 100%;
    padding: 8px 0;
  }

  .header__feed {
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 16px;
    background: rgba(9, 21, 53, 0.55);
    border-radius: var(--border-radius-container);
    padding: 16px 20px;
  }
}

@media (max-width: 640px) {
  .header {
    padding: 16px;
  }

  .header__feed {
    flex-direction: column;
    align-items: stretch;
    text-align: center;
    gap: 12px;
  }

  .header__feed_social {
    justify-content: center;
  }

  .header__feed_button {
    width: 100%;
  }
}

@media (max-width: 420px) {
  .header__logo {
    width: 56px;
  }
}

@keyframes headerFade {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
