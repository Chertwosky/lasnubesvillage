<template>
  <header class="header">
    <a href="/" class="header__logo" draggable="false">
      <img
        :src="logo"
        alt="Логотип"
        class="header__logo_image"
        draggable="false"
        loading="eager"
        decoding="async"
      />
    </a>

    <button
      class="header__toggle"
      type="button"
      aria-label="Меню"
      :aria-expanded="isMenuOpen"
      @click="toggleMenu"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <div class="header__menu" :class="{ 'is-open': isMenuOpen }">
      <nav class="header__nav">
        <NuxtLink href="/cottages" class="header__link" draggable="false" @click="closeMenu">
          Коттеджи
        </NuxtLink>
        <NuxtLink href="/services" class="header__link" draggable="false" @click="closeMenu">
          Услуги
        </NuxtLink>
        <NuxtLink :to="{ path: '/', hash: '#stocks' }" class="header__link" draggable="false" @click="closeMenu">
          Акции
        </NuxtLink>
        <NuxtLink href="/about" class="header__link" draggable="false" @click="closeMenu">
          О нас
        </NuxtLink>
      </nav>

      <div class="header__feed">
        <a href="tel:+79224232070" class="header__feed_call" draggable="false" @click="closeMenu">
          +7 (922) 423-20-70
        </a>
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
              loading="lazy"
              decoding="async"
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
              loading="lazy"
              decoding="async"
            />
          </a>
        </div>
        <BookingButton customClass="header__feed_button" @click="closeMenu">
          Забронировать
        </BookingButton>
      </div>
    </div>

    <div class="header__overlay" :class="{ 'is-open': isMenuOpen }" @click="closeMenu"></div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import logo from '@/assets/images/core/header/logo.svg'
import phoneIcon from '@/assets/images/core/header/phone.svg'
import Telegram from '@/assets/images/core/header/Telegram.svg'
import BookingButton from '@/components/blocks/BookingButton.vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.documentElement.classList.toggle('no-scroll', isMenuOpen.value)
}

const closeMenu = () => {
  if (!isMenuOpen.value) return
  isMenuOpen.value = false
  document.documentElement.classList.remove('no-scroll')
}

const handleResize = () => {
  if (window.innerWidth >= 1024 && isMenuOpen.value) {
    closeMenu()
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  document.documentElement.classList.remove('no-scroll')
})
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap-medium);
  padding: var(--padding-classic) 20px;
  margin: 0 auto;
  max-width: var(--container-width);
  width: 100%;
  backdrop-filter: blur(8px);
}

.header__logo {
  flex-shrink: 0;
}

.header__logo_image {
  width: clamp(70px, 8vw, 96px);
  height: auto;
}

.header__menu {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: clamp(20px, 3vw, 48px);
  flex: 1;
}

.header__nav {
  display: flex;
  align-items: center;
  gap: clamp(16px, 2.5vw, 40px);
}

.header__link {
  font-family: var(--font-core);
  font-size: var(--fontsize-secondary);
  text-decoration: none;
  color: var(--white-color);
  transition: opacity 0.2s ease;
}

.header__link:hover {
  opacity: 0.75;
}

.header__feed {
  display: flex;
  align-items: center;
  gap: clamp(16px, 2vw, 32px);
  font-family: var(--font-core);
}

.header__feed_call {
  font-size: var(--fontsize-secondary);
  text-decoration: none;
  color: var(--white-color);
  white-space: nowrap;
}

.header__feed_social {
  display: flex;
  align-items: center;
  gap: 10px;
}

.header__feed_social_reel {
  width: 28px;
  height: 28px;
}

.header__feed_button {
  padding: clamp(10px, 1.6vw, 14px) clamp(20px, 3.6vw, 32px);
  background-color: var(--green-color);
  color: var(--white-color);
  font-size: var(--fontsize-secondary);
  border-radius: var(--border-radius-container);
  border: none;
  cursor: pointer;
  font-family: var(--font-core);
  transition: background-color 0.2s ease, color 0.2s ease;
}

.header__toggle {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
}

.header__toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background-color: var(--white-color);
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.header__overlay {
  display: none;
}

@media (max-width: 1200px) {
  .header {
    padding: var(--padding-classic) 16px;
  }
}

@media (max-width: 1023px) {
  .header {
    position: fixed;
    left: 0;
    right: 0;
    padding: 14px 18px;
    background: rgba(17, 34, 60, 0.9);
  }

  .header__menu {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 28px;
    padding: 32px 28px;
    width: min(320px, 85vw);
    background: rgba(14, 24, 42, 0.97);
    transform: translateX(100%);
    transition: transform 0.3s ease;
  }

  .header__menu.is-open {
    transform: translateX(0);
  }

  .header__nav {
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
  }

  .header__link {
    font-size: var(--fontsize-medium);
  }

  .header__feed {
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
    width: 100%;
  }

  .header__feed_social {
    gap: 14px;
  }

  .header__toggle {
    display: flex;
  }

  .header__overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.35);
    backdrop-filter: blur(2px);
    display: block;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease;
  }

  .header__overlay.is-open {
    opacity: 1;
    visibility: visible;
  }
}
</style>
