<template>
  <header class="header">
    <a href="/" class="header_click" draggable="false">
      <img :src="logo" alt="Логотип" class="header_logo" draggable="false" />
    </a>

    <button
      type="button"
      class="header__menu"
      @click="toggleMenu"
      :aria-expanded="isMenuOpen"
      aria-controls="main-navigation"
    >
      <span class="header__menu_label">Меню</span>
      <span class="header__menu_icon" aria-hidden="true"></span>
    </button>

    <nav
      id="main-navigation"
      class="header__nav"
      :class="{ 'header__nav--open': isMenuOpen }"
    >
      <NuxtLink to="/cottages" class="header__wrap_link" draggable="false" @click="closeMenu">Коттеджи</NuxtLink>
      <NuxtLink to="/services" class="header__wrap_link" draggable="false" @click="closeMenu">Услуги</NuxtLink>
      <NuxtLink :to="{ path: '/', hash: '#stocks' }" class="header__wrap_link" draggable="false" @click="closeMenu">Акции</NuxtLink>
      <NuxtLink to="/about" class="header__wrap_link" draggable="false" @click="closeMenu">О нас</NuxtLink>
    </nav>

    <div class="header__feed">
      <a href="tel:+79224232070" class="header__feed_call" draggable="false">+7 (922) 423-20-70</a>
      <div class="header__feed_social">
        <a
          href="https://t.me/lasnubesvillage"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            :src="Telegram"
            alt="Telegram"
            class="header__feed_social_reel"
            draggable="false"
          />
        </a>
        <a
          href="https://wa.me/79224232070"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            :src="phoneIcon"
            alt="WhatsApp"
            class="header__feed_social_reel"
            draggable="false"
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
import { onBeforeUnmount, onMounted, ref } from 'vue'
import logo from '@/assets/images/core/header/logo.svg'
import phoneIcon from '@/assets/images/core/header/phone.svg'
import Telegram from '@/assets/images/core/header/Telegram.svg'
import BookingButton from '@/components/blocks/BookingButton.vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleResize = () => {
  if (window.innerWidth >= 960) {
    closeMenu()
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: clamp(12px, 2vw, 28px);
  padding: clamp(12px, 2.8vw, 28px) clamp(16px, 4vw, 40px);
  max-width: var(--container-width);
  margin: 0 auto;
}

.header__nav,
.header__feed {
  display: flex;
  gap: clamp(12px, 2.2vw, var(--gap-medium));
  font-family: var(--font-core);
  color: var(--faded-color);
  align-items: center;
}

.header__nav {
  justify-content: center;
  flex: 1 1 320px;
  order: 2;
  transition: max-height 0.3s ease, opacity 0.3s ease;
}

.header__nav a,
.header__feed_call {
  text-decoration: none;
  font-size: clamp(14px, 1.7vw, 18px);
  line-height: 1.4;
  color: var(--white-color);
  font-weight: var(--font-weight-medium);
}

.header__wrap_link {
  position: relative;
}

.header__wrap_link::after {
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

.header__wrap_link:focus-visible::after,
.header__wrap_link:hover::after {
  transform: scaleX(1);
}

.header__feed_call {
  transition: opacity 0.2s ease;
}

.header__feed_social {
  display: flex;
  align-items: center;
  gap: clamp(6px, 1.2vw, 14px);
}

.header__feed_social_reel {
  width: clamp(22px, 2.8vw, 32px);
  height: clamp(22px, 2.8vw, 32px);
}

.header_click {
  margin-right: clamp(12px, 3vw, 44px);
}

.header__feed {
  order: 3;
}

.header__feed_button {
  padding: clamp(10px, 1.8vw, 14px) clamp(20px, 4vw, 44px);
  background-color: var(--green-color);
  color: var(--white-color);
  font-size: clamp(15px, 1.8vw, 18px);
  border-radius: var(--border-radius-container);
  border: none;
  cursor: pointer;
  font-family: var(--font-core);
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.header__feed_button:hover {
  transform: translateY(-1px);
}

.header_logo {
  object-fit: contain;
  width: clamp(72px, 7vw, 108px);
  height: auto;
  display: block;
  margin-left: -2px;
}

.header__menu {
  display: none;
  align-items: center;
  gap: 12px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.45);
  border-radius: var(--border-radius-container);
  color: var(--white-color);
  font-family: var(--font-core);
  font-size: clamp(14px, 1.8vw, 18px);
  padding: 8px 18px;
  cursor: pointer;
  order: 2;
}

.header__menu_label {
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.header__menu_icon {
  position: relative;
  width: 18px;
  height: 2px;
  background-color: currentColor;
}

.header__menu_icon::before,
.header__menu_icon::after {
  content: '';
  position: absolute;
  left: 0;
  width: 18px;
  height: 2px;
  background-color: currentColor;
  transition: transform 0.3s ease;
}

.header__menu_icon::before {
  transform: translateY(-6px);
}

.header__menu_icon::after {
  transform: translateY(6px);
}

.header__menu[aria-expanded='true'] .header__menu_icon {
  background-color: transparent;
}

.header__menu[aria-expanded='true'] .header__menu_icon::before {
  transform: rotate(45deg);
}

.header__menu[aria-expanded='true'] .header__menu_icon::after {
  transform: rotate(-45deg);
}

@media (max-width: 1080px) {
  .header__feed {
    flex: 1 1 100%;
    justify-content: flex-end;
    gap: clamp(12px, 2.2vw, 24px);
  }
}

@media (max-width: 960px) {
  .header {
    padding: clamp(12px, 4vw, 24px) clamp(16px, 5vw, 32px);
  }

  .header__menu {
    display: flex;
  }

  .header__nav {
    flex: 1 1 100%;
    width: 100%;
    order: 3;
    flex-direction: column;
    align-items: center;
    gap: clamp(12px, 2.6vw, 24px);
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    pointer-events: none;
  }

  .header__nav--open {
    max-height: 340px;
    opacity: 1;
    pointer-events: auto;
  }

  .header__feed {
    order: 4;
    flex: 1 1 100%;
    justify-content: center;
    flex-wrap: wrap;
    gap: clamp(12px, 3vw, 24px);
  }

  .header__feed_call {
    width: 100%;
    text-align: center;
  }

  .header__feed_social {
    order: 3;
    width: 100%;
    justify-content: center;
  }

  .header__feed_button {
    width: min(280px, 100%);
    justify-content: center;
  }
}

@media (max-width: 640px) {
  .header {
    justify-content: center;
  }

  .header_click {
    margin-right: 0;
  }
}

@media (max-width: 420px) {
  .header__menu {
    width: 100%;
    justify-content: center;
  }

  .header__nav--open {
    padding-bottom: 12px;
  }
}
</style>
