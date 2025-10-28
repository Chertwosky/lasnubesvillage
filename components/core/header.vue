<template>
    <header class="header" :class="{ 'header--menu-open': isMenuOpen }">
        <div class="header__brand">
          <a href="/" class="header__logo-link" draggable="false" @click="closeMenu">
            <img :src="logo" alt="Логотип" class="header__logo" draggable="false" />
          </a>

          <button
            type="button"
            class="header__menu-toggle"
            @click="toggleMenu"
            aria-label="Меню"
            :aria-expanded="isMenuOpen.toString()"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div class="header__links" :class="{ 'header__links--open': isMenuOpen }">
          <nav class="header__nav">
              <NuxtLink href="/cottages" class="header__wrap_link" draggable="false" @click="closeMenu">Коттеджи</NuxtLink>
              <NuxtLink href="/services" class="header__wrap_link" draggable="false" @click="closeMenu">Услуги</NuxtLink>
              <NuxtLink :to="{ path: '/', hash: '#stocks' }" class="header__wrap_link" draggable="false" @click="closeMenu">Акции</NuxtLink>
              <NuxtLink href="/about" class="header__wrap_link" draggable="false" @click="closeMenu">О нас</NuxtLink>
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
        </div>

    </header>
</template>

<script setup>
import logo from '@/assets/images/core/header/logo.svg'
import phoneIcon from '@/assets/images/core/header/phone.svg'
import Telegram from '@/assets/images/core/header/Telegram.svg'
import BookingButton from '@/components/blocks/BookingButton.vue'

import { onBeforeUnmount, onMounted, ref } from 'vue'

const openBooking = () => {
  if (window.Bnovo_Widget) {
    window.Bnovo_Widget.open('_bn_widget_', {
      type: "vertical",
      uid: "817121e0-85f0-452d-b0b2-265ca9a568c3",
      lang: "ru",
      width: "300",
      background: "#ffffff",
      border_radius: "16",
      font_type: "Nunito sans",
      btn_background: "#46BE78",
      btn_background_over: "#2e9e5d",
      btn_textcolor: "#FFFFFF",
      btn_textover: "#FFFFFF"
    })
  } else {
    console.warn("Bnovo_Widget еще не загружен")
  }
}

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleResize = () => {
  if (window.innerWidth >= 960) {
    isMenuOpen.value = false
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
    gap: clamp(16px, 2vw, 32px);
    padding: clamp(16px, 2vw, 28px) clamp(20px, 4vw, 40px);
    max-width: min(var(--container-width), 100%);
    margin: 0 auto;
    position: relative;
  }

  .header__brand {
    display: flex;
    align-items: center;
    gap: clamp(16px, 3vw, 32px);
    flex: 1 1 auto;
  }

  .header__logo-link {
    display: inline-flex;
    align-items: center;
  }

  .header__logo {
    width: clamp(72px, 7vw, 108px);
    height: auto;
    display: block;
  }

  .header__menu-toggle {
    display: none;
    background: transparent;
    border: none;
    padding: 8px;
    border-radius: var(--border-radius-menu);
    cursor: pointer;
    transition: background-color var(--transition-dur-small);
  }

  .header__menu-toggle span {
    display: block;
    width: 28px;
    height: 3px;
    background-color: var(--white-color);
    border-radius: 3px;
    transition: transform var(--transition-dur-small), opacity var(--transition-dur-small);
  }

  .header__menu-toggle span + span {
    margin-top: 6px;
  }

  .header--menu-open .header__menu-toggle span:nth-child(1) {
    transform: translateY(9px) rotate(45deg);
  }

  .header--menu-open .header__menu-toggle span:nth-child(2) {
    opacity: 0;
  }

  .header--menu-open .header__menu-toggle span:nth-child(3) {
    transform: translateY(-9px) rotate(-45deg);
  }

  .header__links {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: clamp(20px, 3vw, 48px);
  }

  .header__nav {
    display: flex;
    align-items: center;
    gap: clamp(16px, 3vw, 36px);
    font-family: var(--font-core);
  }

  .header__nav a,
  .header__feed_call {
    text-decoration: none;
    font-size: clamp(16px, 1.2vw + 12px, 18px);
    color: var(--white-color);
  }

  .header__feed {
    display: flex;
    align-items: center;
    gap: clamp(12px, 2vw, 24px);
    font-family: var(--font-core);
  }

  .header__feed_social {
    display: flex;
    gap: 10px;
  }

  .header__feed_social_reel {
    width: 32px;
    height: 32px;
  }

  .header__feed_button {
    padding: clamp(10px, 1.5vw, 14px) clamp(22px, 3vw, 36px);
    background-color: var(--green-color);
    color: var(--white-color);
    font-size: clamp(16px, 1.2vw + 12px, 18px);
    border-radius: var(--border-radius-container);
    border: none;
    cursor: pointer;
    font-family: var(--font-core);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  @media (max-width: 1100px) {
    .header {
      flex-wrap: wrap;
      justify-content: center;
    }

    .header__links {
      flex: 1 1 100%;
      justify-content: center;
      flex-wrap: wrap;
    }

    .header__feed {
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  @media (max-width: 960px) {
    .header {
      flex-direction: column;
      align-items: stretch;
      padding-inline: clamp(16px, 4vw, 24px);
    }

    .header__brand {
      justify-content: space-between;
    }

    .header__menu-toggle {
      display: inline-flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 4px;
    }

    .header__links {
      display: none;
      flex-direction: column;
      align-items: stretch;
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(8px);
      border-radius: var(--border-radius-container);
      padding: 20px clamp(16px, 4vw, 28px);
      margin-top: 12px;
      gap: 24px;
    }

    .header__links--open {
      display: flex;
    }

    .header__nav {
      flex-direction: column;
      align-items: stretch;
      gap: 12px;
    }

    .header__nav a {
      font-size: clamp(18px, 2vw + 12px, 22px);
      padding: 10px 0;
      text-align: left;
    }

    .header__feed {
      flex-direction: column;
      align-items: stretch;
    }

    .header__feed_call {
      font-size: clamp(18px, 2vw + 12px, 22px);
    }

    .header__feed_social {
      justify-content: flex-start;
    }

    .header__feed_button {
      width: 100%;
      text-align: center;
    }
  }

  @media (max-width: 540px) {
    .header__links {
      padding: 16px;
    }

    .header__feed_social {
      gap: 14px;
    }

    .header__feed_social_reel {
      width: 28px;
      height: 28px;
    }
  }
</style>
