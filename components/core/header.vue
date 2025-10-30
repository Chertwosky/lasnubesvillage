<template>
  <header class="header" :class="{ 'header--menu-open': isMenuOpen }">
    <a href="/" class="header_click" draggable="false">
      <img :src="logo" alt="Логотип" class="header_logo" draggable="false" />
    </a>

    <button
      class="header__menu-toggle"
      type="button"
      @click="toggleMenu"
      :aria-expanded="isMenuOpen"
      aria-controls="main-navigation"
      :aria-label="isMenuOpen ? 'Закрыть меню' : 'Открыть меню'"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <nav id="main-navigation" class="header__nav" :class="{ 'header__nav--open': isMenuOpen }">
      <NuxtLink
        v-for="item in menuItems"
        :key="item.label"
        :to="item.to"
        class="header__wrap_link"
        draggable="false"
        @click="closeMenu"
      >
        {{ item.label }}
      </NuxtLink>
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

    <transition name="header-fade">
      <div v-if="isMenuOpen" class="header__overlay" @click="closeMenu"></div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useRoute } from 'vue-router'
import logo from '@/assets/images/core/header/logo.svg'
import phoneIcon from '@/assets/images/core/header/phone.svg'
import Telegram from '@/assets/images/core/header/Telegram.svg'
import BookingButton from '@/components/blocks/BookingButton.vue'

type MenuLink = string | { path: string; hash?: string }

type MenuItem = {
  label: string
  to: MenuLink
}

const menuItems: MenuItem[] = [
  { label: 'Коттеджи', to: '/cottages' },
  { label: 'Услуги', to: '/services' },
  { label: 'Акции', to: { path: '/', hash: '#stocks' } },
  { label: 'О нас', to: '/about' },
]

const isMenuOpen = ref(false)

const closeMenu = () => {
  isMenuOpen.value = false
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const handleResize = () => {
  if (window.innerWidth > 800) {
    closeMenu()
  }
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closeMenu()
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('keydown', handleKeydown)
})

const route = useRoute()

watch(() => route.fullPath, closeMenu)
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-classic) 20px;
  max-width: var(--container-width);
  margin: 0 auto;
  position: relative;
  z-index: 10;
  gap: 24px;
}

.header_click {
  margin-right: 44px;
  display: inline-flex;
}

.header_logo {
  object-fit: cover;
  width: 79px;
  height: 108px;
  display: block;
  margin-left: -2px;
}

.header__nav,
.header__feed {
  display: flex;
  gap: var(--gap-medium);
  font-family: var(--font-core);
  color: var(--faded-color);
}

.header__nav {
  margin-right: auto;
  align-items: center;
}

.header__wrap_link,
.header__feed_call {
  text-decoration: none;
  font-size: var(--fontsize-secondary);
  color: #ffffff;
}

.header__feed {
  align-items: center;
}

.header__feed_social {
  display: flex;
  gap: 6px;
}

.header__feed_button {
  padding: var(--padding-tiny) var(--padding-semi-large);
  background-color: var(--green-color);
  color: var(--white-color);
  font-size: var(--fontsize-secondary);
  border-radius: var(--border-radius-container);
  border: none;
  cursor: pointer;
  font-family: var(--font-core);
}

.header__menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid rgba(198, 210, 241, 0.35);
  background: rgba(7, 13, 34, 0.65);
  cursor: pointer;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  z-index: 13;
}

.header__menu-toggle span {
  display: block;
  width: 100%;
  height: 2px;
  background: #ffffff;
  border-radius: 2px;
}

.header__overlay {
  position: fixed;
  inset: 0;
  background: rgba(4, 6, 16, 0.6);
  z-index: 11;
}

.header-fade-enter-active,
.header-fade-leave-active {
  transition: opacity 0.2s ease;
}

.header-fade-enter-from,
.header-fade-leave-to {
  opacity: 0;
}

@media (max-width: 1280px) {
  .header {
    width: 100vw;
  }
}

@media (max-width: 1024px) {
  .header {
    width: 99vw;
  }
}

@media (max-width: 800px) {
  .header {
    width: 100%;
    padding: var(--padding-classic) 16px;
    gap: 16px;
  }

  .header__menu-toggle {
    display: flex;
  }

  .header__nav {
    position: absolute;
    top: 100%;
    left: 16px;
    right: 16px;
    display: none;
    flex-direction: column;
    align-items: stretch;
    margin: 0;
    padding: 16px;
    gap: 12px;
    background: rgba(7, 13, 34, 0.96);
    border-radius: 20px;
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.35);
    z-index: 12;
  }

  .header__nav--open {
    display: flex;
  }

  .header__wrap_link {
    font-size: var(--fontsize-primary);
  }

  .header_click {
    margin-right: 15px;
  }

  .header__feed_social {
    flex-direction: column;
  }

  .header__feed_button {
    max-width: 180px;
    display: flex;
    justify-content: center;
    padding: 10px 20px;
    height: fit-content;
  }
}

@media (max-width: 540px) {
  .header {
    justify-content: space-between;
    gap: 12px;
  }

  .header__feed {
    gap: 12px;
  }

  .header__feed_social {
    flex-direction: row;
  }

  .header__feed_button {
    font-size: var(--fontsize-secondary);
    padding: 8px 18px;
  }
}
</style>
