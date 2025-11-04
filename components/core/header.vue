<template>
  <header class="header">
    <a href="/" class="header_click" draggable="false">
      <img :src="logo" alt="Логотип" class="header_logo" draggable="false" />
    </a>

    <button
      class="header__menu-toggle"
      type="button"
      aria-label="Меню"
      @click="isMenuOpen = !isMenuOpen"
    >
      <span :class="{ 'header__menu-toggle_line--open': isMenuOpen }"></span>
    </button>

    <nav class="header__nav" :class="{ 'header__nav--open': isMenuOpen }">
      <NuxtLink
        v-for="item in menuItems"
        :key="item.label"
        :to="item.to"
        class="header__wrap_link"
        draggable="false"
        @click="isMenuOpen = false"
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

    <transition name="header__mobile-fade">
      <div
        v-if="isMenuOpen"
        class="header__mobile-backdrop"
        @click="isMenuOpen = false"
      />
    </transition>
  </header>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { resolveImage } from '@/utils/resolveImage'
import BookingButton from '@/components/blocks/BookingButton.vue'

const logo = resolveImage('core/header/logo')
const phoneIcon = resolveImage('core/header/phone')
const Telegram = resolveImage('core/header/Telegram')

const menuItems = [
  { label: 'Коттеджи', to: '/cottages' },
  { label: 'Услуги', to: '/services' },
  { label: 'Акции', to: { path: '/', hash: '#stocks' } },
  { label: 'О нас', to: '/about' },
]

const isMenuOpen = ref(false)

const closeOnDesktop = () => {
  if (window.innerWidth > 540) {
    isMenuOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', closeOnDesktop)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', closeOnDesktop)
})
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
  z-index: 20;
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
}

.header__menu-toggle {
  display: none;
  background: rgba(10, 16, 34, 0.72);
  border: none;
  border-radius: 12px;
  width: 46px;
  height: 46px;
  align-items: center;
  justify-content: center;
  padding: 0;
  cursor: pointer;
  position: relative;
}

.header__menu-toggle span,
.header__menu-toggle span::before,
.header__menu-toggle span::after {
  display: block;
  position: absolute;
  width: 22px;
  height: 2px;
  background: var(--white-color);
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
  content: '';
}

.header__menu-toggle span::before {
  transform: translateY(-6px);
}

.header__menu-toggle span::after {
  transform: translateY(6px);
}

.header__menu-toggle_line--open {
  background: transparent;
}

.header__menu-toggle_line--open::before {
  transform: rotate(45deg);
}

.header__menu-toggle_line--open::after {
  transform: rotate(-45deg);
}

.header__feed_social {
  display: flex;
  gap: 6px;
}

.header__nav a,
.header__feed_call {
  text-decoration: none;
  font-size: var(--fontsize-secondary);
  color: #ffffff;
}

.header_click {
  margin-right: 44px;
}

.header__feed_call {
  align-self: center;
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

.header_logo {
  object-fit: cover;
  width: 79px;
  height: 108px;
  margin-left: -2px;
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
  }

  .header__feed_button {
    max-width: 180px;
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 10px 20px;
    height: fit-content;
  }

  .header__feed {
    align-items: center;
  }

  .header__feed_social {
    flex-direction: column;
  }

  .header__nav,
  .header__feed {
    gap: 15px;
  }

  .header__nav a,
  .header__feed_call {
    font-size: var(--fontsize-primary);
  }

  .header_click {
    margin-right: 15px;
  }
}

@media (max-width: 540px) {
  .header {
    padding-inline: 16px;
  }

  .header__menu-toggle {
    display: inline-flex;
    margin-right: 16px;
  }

  .header__nav {
    position: absolute;
    top: calc(100% + 12px);
    left: 16px;
    right: 16px;
    flex-direction: column;
    align-items: stretch;
    background: rgba(6, 10, 24, 0.92);
    border-radius: 16px;
    padding: 18px;
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.35);
    transform: translateY(-12px);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease, transform 0.3s ease;
    gap: 12px;
    z-index: -1;
  }

  .header__nav--open {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }

  .header__wrap_link {
    padding: 12px 16px;
    border-radius: 12px;
    background: rgba(14, 20, 46, 0.9);
    text-align: center;
  }

  .header__feed {
    flex-direction: column;
    gap: 12px;
  }

  .header__feed_social {
    flex-direction: row;
  }

  .header__mobile-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    z-index: -2;
  }

  .header__mobile-fade-enter-active,
  .header__mobile-fade-leave-active {
    transition: opacity 0.3s ease;
  }

  .header__mobile-fade-enter-from,
  .header__mobile-fade-leave-to {
    opacity: 0;
  }
}
</style>
