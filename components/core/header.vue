<template>
  <header class="header">
    <div class="header__inner">
      <NuxtLink to="/" class="header__logo" aria-label="На главную" draggable="false">
        <img :src="logo" alt="Логотип" draggable="false" />
      </NuxtLink>

      <button
        :class="['header__burger', { 'header__burger--active': isMenuOpen }]"
        type="button"
        :aria-expanded="isMenuOpen.toString()"
        aria-controls="site-navigation"
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav
        id="site-navigation"
        class="header__nav"
        :class="{ 'header__nav--open': isMenuOpen }"
      >
        <ul class="header__nav_links">
          <li v-for="link in navLinks" :key="link.label" class="header__nav_item">
            <NuxtLink :to="link.to" class="header__nav_link" draggable="false" @click="closeMenu">
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>

        <div class="header__contact">
          <a href="tel:+79224232070" class="header__contact_phone" draggable="false" @click="closeMenu">
            +7 (922) 423-20-70
          </a>
          <div class="header__social">
            <a
              href="https://t.me/lasnubesvillage"
              target="_blank"
              rel="noreferrer noopener"
              class="header__social_link"
              draggable="false"
            >
              <img :src="Telegram" alt="Telegram" class="header__social_icon" draggable="false" />
            </a>
            <a
              href="https://wa.me/79224232070"
              target="_blank"
              rel="noreferrer noopener"
              class="header__social_link"
              draggable="false"
            >
              <img :src="phoneIcon" alt="WhatsApp" class="header__social_icon" draggable="false" />
            </a>
          </div>
          <div class="header__book-wrapper" @click="closeMenu">
            <BookingButton customClass="header__book">
              Забронировать
            </BookingButton>
          </div>
        </div>
      </nav>
    </div>
    <div v-if="isMenuOpen" class="header__overlay" @click="closeMenu" />
  </header>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import logo from '@/assets/images/core/header/logo.svg'
import phoneIcon from '@/assets/images/core/header/phone.svg'
import Telegram from '@/assets/images/core/header/Telegram.svg'
import BookingButton from '@/components/blocks/BookingButton.vue'

const navLinks = [
  { to: '/cottages', label: 'Коттеджи' },
  { to: '/services', label: 'Услуги' },
  { to: { path: '/', hash: '#stocks' }, label: 'Акции' },
  { to: '/about', label: 'О нас' }
]

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
const closeMenu = () => {
  isMenuOpen.value = false
}

const route = useRoute()
watch(
  () => route.fullPath,
  () => {
    isMenuOpen.value = false
  }
)

const handleResize = () => {
  if (typeof window === 'undefined') {
    return
  }

  if (window.innerWidth >= 1024) {
    isMenuOpen.value = false
  }
}

const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    closeMenu()
  }
}

watch(isMenuOpen, (open) => {
  if (!process.client) return
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  if (!process.client) return
  handleResize()
  window.addEventListener('resize', handleResize)
  document.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  if (!process.client) return
  window.removeEventListener('resize', handleResize)
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(14, 39, 70, 0.8);
  backdrop-filter: blur(12px);
}

.header__inner {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 18px var(--page-gutter);
  display: flex;
  align-items: center;
  gap: clamp(24px, 4vw, 64px);
}

.header__logo {
  display: inline-flex;
  align-items: center;
}

.header__logo img {
  width: clamp(68px, 7vw, 96px);
  height: auto;
}

.header__burger {
  display: none;
  width: 44px;
  height: 44px;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 8px;
  border-radius: 10px;
  transition: background 0.2s ease;
}

.header__burger span {
  display: block;
  height: 2px;
  width: 100%;
  background: var(--white-color);
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.header__burger span + span {
  margin-top: 6px;
}

.header__burger--active span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.header__burger--active span:nth-child(2) {
  opacity: 0;
}

.header__burger--active span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

.header__nav {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: clamp(24px, 5vw, 72px);
}

.header__nav_links {
  display: flex;
  align-items: center;
  gap: clamp(18px, 3vw, 48px);
  list-style: none;
  padding: 0;
  margin: 0;
}

.header__nav_link {
  font-size: clamp(15px, 1.4vw, 18px);
  font-family: var(--font-core);
  font-weight: 500;
  color: var(--white-color);
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.header__nav_link:hover,
.header__nav_link:focus-visible {
  opacity: 0.75;
}

.header__contact {
  display: flex;
  align-items: center;
  gap: clamp(16px, 2.5vw, 36px);
}

.header__contact_phone {
  font-size: clamp(15px, 1.3vw, 18px);
  color: var(--white-color);
  text-decoration: none;
  font-family: var(--font-core);
  font-weight: 600;
}

.header__social {
  display: flex;
  gap: 12px;
}

.header__social_link {
  display: inline-flex;
}

.header__social_icon {
  width: 28px;
  height: 28px;
}

.header__book-wrapper {
  display: inline-flex;
}

.header__book {
  padding: 10px 24px;
  background: var(--green-color);
  color: var(--white-color);
  font-family: var(--font-core);
  font-weight: 600;
  font-size: clamp(15px, 1.4vw, 18px);
  border-radius: var(--border-radius-container);
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.header__book:hover {
  transform: translateY(-1px);
}

.header__overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 900;
}

@media (max-width: 1180px) {
  .header__inner {
    gap: clamp(18px, 4vw, 40px);
  }

  .header__contact {
    gap: clamp(14px, 3vw, 28px);
  }
}

@media (max-width: 1023px) {
  .header__burger {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
  }

  .header__nav {
    position: fixed;
    left: 0;
    right: 0;
    top: 88px;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    padding: 28px var(--page-gutter) 40px;
    background: rgba(14, 39, 70, 0.96);
    transform: translateY(-16px);
    opacity: 0;
    pointer-events: none;
    transition: transform 0.3s ease, opacity 0.3s ease;
    z-index: 950;
    border-radius: 0 0 24px 24px;
  }

  .header__nav--open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .header__nav_links {
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
    width: 100%;
  }

  .header__contact {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    width: 100%;
  }

  .header__contact_phone {
    font-size: 18px;
  }

  .header__book {
    width: 100%;
    justify-content: center;
    text-align: center;
  }
}

@media (max-width: 640px) {
  .header__inner {
    padding: 14px var(--page-gutter);
  }

  .header__nav {
    top: 72px;
  }

  .header__contact_phone {
    font-size: 17px;
  }

  .header__book {
    font-size: 17px;
    padding: 12px;
  }
}
</style>
