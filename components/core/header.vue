<template>
    <header class="header" :class="{ 'header--menu-open': isMenuOpen }">
        <NuxtLink to="/" class="header__brand" draggable="false" @click="closeMenu">
          <img :src="logo" alt="Логотип" class="header__logo" draggable="false" loading="lazy" />
        </NuxtLink>

        <button
          class="header__toggle"
          type="button"
          @click="toggleMenu"
          :aria-expanded="isMenuOpen.toString()"
          aria-controls="main-navigation"
          aria-label="Меню"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div class="header__menu" :class="{ 'is-open': isMenuOpen }" id="main-navigation">
          <nav class="header__nav">
            <NuxtLink to="/cottages" class="header__link" draggable="false">Коттеджи</NuxtLink>
            <NuxtLink to="/services" class="header__link" draggable="false">Услуги</NuxtLink>
            <NuxtLink :to="{ path: '/', hash: '#stocks' }" class="header__link" draggable="false">Акции</NuxtLink>
            <NuxtLink to="/about" class="header__link" draggable="false">О нас</NuxtLink>
          </nav>

          <div class="header__feed">
            <a href="tel:+79224232070" class="header__phone" draggable="false">+7 (922) 423-20-70</a>
            <div class="header__socials">
                <a
                  href="https://t.me/lasnubesvillage"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="header__social"
                >
                  <img
                    :src="Telegram"
                    alt="Telegram"
                    class="header__social_icon"
                    draggable="false"
                    loading="lazy"
                  />
                </a>
                <a
                  href="https://wa.me/79224232070"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="header__social"
                >
                  <img
                    :src="phoneIcon"
                    alt="WhatsApp"
                    class="header__social_icon"
                    draggable="false"
                    loading="lazy"
                  />
                </a>
            </div>
            <BookingButton customClass="header__button">
              Забронировать
            </BookingButton>
          </div>
        </div>

        <div v-if="isMenuOpen" class="header__overlay" @click="closeMenu" />
    </header>
</template>

<script setup>
import logo from '@/assets/images/core/header/logo.svg'
import phoneIcon from '@/assets/images/core/header/phone.svg'
import Telegram from '@/assets/images/core/header/Telegram.svg'
import BookingButton from '@/components/blocks/BookingButton.vue'

import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useRoute } from '#imports'

const isMenuOpen = ref(false)

const closeMenu = () => {
  isMenuOpen.value = false
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
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

const route = useRoute()

watch(() => route.fullPath, closeMenu)
</script>

<style scoped>
  .header {
    position: sticky;
    top: 0;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: clamp(16px, 4vw, 48px);
    padding: clamp(16px, 3vw, 28px) var(--layout-content-padding);
    margin: 0 auto;
    width: min(100%, var(--container-width));
    background: linear-gradient(135deg, rgba(9, 30, 66, 0.96), rgba(31, 64, 129, 0.92));
    backdrop-filter: blur(10px);
    border-radius: clamp(12px, 2vw, 28px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
  }

  .header__brand {
    display: inline-flex;
    align-items: center;
  }

  .header__logo {
    width: clamp(60px, 7vw, 96px);
    height: auto;
  }

  .header__toggle {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 48px;
    height: 48px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.12);
    border: 1px solid rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }

  .header__toggle span {
    height: 2px;
    width: 60%;
    background: var(--white-color);
    margin: 0 auto;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  .header--menu-open .header__toggle span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }

  .header--menu-open .header__toggle span:nth-child(2) {
    opacity: 0;
  }

  .header--menu-open .header__toggle span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }

  .header__menu {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: clamp(24px, 5vw, 64px);
    width: 100%;
  }

  .header__nav {
    display: flex;
    align-items: center;
    gap: clamp(16px, 4vw, 56px);
  }

  .header__link {
    font-size: clamp(16px, 1.2vw, 20px);
    font-family: var(--font-core);
    color: var(--white-color);
    text-decoration: none;
  }

  .header__feed {
    display: flex;
    align-items: center;
    gap: clamp(16px, 3vw, 40px);
  }

  .header__phone {
    color: var(--white-color);
    font-size: clamp(16px, 1.4vw, 22px);
    text-decoration: none;
    white-space: nowrap;
  }

  .header__socials {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .header__social_icon {
    width: 36px;
    height: 36px;
  }

  .header__button {
    padding: 12px 28px;
    background-color: var(--green-color);
    color: var(--white-color);
    font-size: clamp(16px, 1.3vw, 20px);
    border-radius: var(--border-radius-container);
    border: none;
    cursor: pointer;
    font-family: var(--font-core);
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .header__overlay {
    position: fixed;
    inset: 0;
    background: rgba(5, 12, 35, 0.6);
    z-index: -1;
  }

  @media (max-width: 1100px) {
    .header {
      border-radius: clamp(12px, 2vw, 20px);
    }

    .header__menu {
      gap: clamp(16px, 4vw, 32px);
    }
  }

  @media (max-width: 960px) {
    .header {
      position: sticky;
      top: 16px;
      border-radius: 24px;
    }

    .header__toggle {
      display: inline-flex;
    }

    .header__menu {
      position: fixed;
      left: 50%;
      top: calc(var(--layout-header-height) + 12px);
      transform: translate(-50%, -10px);
      background: rgba(9, 30, 66, 0.95);
      backdrop-filter: blur(18px);
      border-radius: 28px;
      flex-direction: column;
      align-items: stretch;
      gap: clamp(16px, 5vw, 28px);
      padding: clamp(24px, 6vw, 40px);
      width: min(420px, calc(100% - 2 * var(--layout-content-padding)));
      max-height: calc(100vh - var(--layout-header-height) - 32px);
      overflow-y: auto;
      box-shadow: 0 24px 48px rgba(0, 0, 0, 0.35);
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transition: opacity 0.25s ease, transform 0.25s ease;
    }

    .header__menu.is-open {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
      transform: translate(-50%, 0);
    }

    .header__nav {
      flex-direction: column;
      align-items: stretch;
      gap: 12px;
    }

    .header__link {
      font-size: 18px;
      padding: 10px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.16);
    }

    .header__link:last-child {
      border-bottom: none;
    }

    .header__feed {
      flex-direction: column;
      align-items: stretch;
      gap: 18px;
    }

    .header__phone {
      font-size: 20px;
      text-align: center;
    }

    .header__socials {
      justify-content: center;
      gap: 16px;
    }

    .header__button {
      width: 100%;
      font-size: 18px;
    }
  }

  @media (max-width: 560px) {
    .header {
      padding: clamp(12px, 4vw, 20px) var(--layout-content-padding);
    }

    .header__menu {
      width: calc(100% - 2 * var(--layout-content-padding));
      border-radius: 22px;
    }

    .header__logo {
      width: clamp(56px, 10vw, 72px);
    }
  }
</style>
