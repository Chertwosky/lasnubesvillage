<template>
    <header class="header">
        <a href="/" class="header_click" draggable="false">
          <img :src="logo" alt="Логотип" class="header_logo" draggable="false" />
        </a>
        <nav class="header__nav">
            <NuxtLink href="/cottages" class="header__wrap_link" draggable="false">Коттеджи</NuxtLink>
            <NuxtLink href="/services" class="header__wrap_link" draggable="false">Услуги</NuxtLink>
            <NuxtLink :to="{ path: '/', hash: '#stocks' }" class="header__wrap_link" draggable="false">Акции</NuxtLink>
            <NuxtLink href="/about" class="header__wrap_link" draggable="false">О нас</NuxtLink>
        </nav>

        <div class="header__nav-select">
          <select
            class="header__select"
            :value="selectedNav"
            aria-label="Навигация по разделам"
            @change="onSelectChange"
          >
            <option value="">Меню</option>
            <option v-for="item in navItems" :key="item.value" :value="item.value">
              {{ item.label }}
            </option>
          </select>
        </div>

        <div class="header__feed">
            <a href="tel:+79224232070" class="header__feed_call" draggable="false">+7 (922) 423-20-70</a>
            <div class="header__feed_social">
                <a href="https://t.me/lasnubesvillage""
                target="_blank"
                rel="noreferrer noopener">
                <img
                    :src="Telegram"
                    alt="Telegram"
                    class="header__feed_social_reel"
                    draggable="false"
                />
                </a>
                <a href="https://wa.me/79224232070"
                target="_blank"
                rel="noreferrer noopener">
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
import { computed } from 'vue'
import { useRoute, useRouter } from '#imports'
import logo from '@/assets/images/core/header/logo.svg'
import phoneIcon from '@/assets/images/core/header/phone.svg'
import Telegram from '@/assets/images/core/header/Telegram.svg'
import BookingButton from '@/components/blocks/BookingButton.vue'

const navItems = [
  { label: 'Коттеджи', value: '/cottages' },
  { label: 'Услуги', value: '/services' },
  { label: 'Акции', value: '/#stocks' },
  { label: 'О нас', value: '/about' },
]

const route = useRoute()
const router = useRouter()

const selectedNav = computed(() => {
  if (route.path === '/cottages') return '/cottages'
  if (route.path === '/services') return '/services'
  if (route.path === '/about') return '/about'
  if (route.path === '/' && route.hash === '#stocks') return '/#stocks'
  return ''
})

const onSelectChange = (event) => {
  const value = event.target.value
  if (!value) return

  if (value === '/#stocks') {
    router.push({ path: '/', hash: '#stocks' })
  } else {
    router.push(value)
  }
}
</script>

<style scoped>
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--padding-classic) 20px;
    max-width: var(--container-width);
    margin: 0 auto;
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

.header__nav-select {
    display: none;
    margin-right: auto;
}

.header__select {
    appearance: none;
    border: none;
    border-radius: var(--border-radius-container);
    background: rgba(8, 23, 52, 0.75);
    color: var(--white-color);
    font-family: var(--font-core);
    font-size: var(--fontsize-secondary);
    padding: 10px 44px 10px 16px;
    position: relative;
    cursor: pointer;
    box-shadow: 0 12px 32px rgba(2, 7, 20, 0.35);
}

.header__select:focus-visible {
    outline: 2px solid var(--green-color);
    outline-offset: 2px;
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
    width: 100px;
    width: 79px;
    height: 108px;
    -o-object-fit: cover;
    object-fit: cover;
    display: block;
    /* margin: 0 auto; */
    margin-left: -2px;
}

@media (max-width:1280px) {
    .header {
        width: 100vw;
    }
}

@media (max-width:1024px) {
    .header {
        width: 99vw;
    }
}


@media (max-width:800px) {
    .header {
        width: 100%;
        padding: var(--padding-classic) 16px;
    }

    .header__nav {
        display: none;
    }

    .header__nav-select {
        display: block;
        margin-right: auto;
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

    .header__nav a,
    .header__feed_call {
        font-size: var(--fontsize-primary);
    }



    .header_click {
        margin-right: 15px;
    }
}

@media (max-width:540px) {
    .header {
        flex-wrap: wrap;
        gap: 12px;
    }

    .header__nav-select {
        width: 100%;
        order: 3;
    }

    .header__select {
        width: 100%;
    }

    .header__feed {
        flex-direction: row;
        justify-content: flex-end;
        gap: 12px;
        width: 100%;
        order: 4;
    }

    .header__feed_social {
        flex-direction: row;
    }

    .header__nav {
        flex-wrap: wrap;
        flex-direction: row;
        max-width: 151px;
        align-items: center;
        align-self: center;
        margin: 0 auto;
    }

    .header {
        justify-content: space-around;
    }

    .header__feed_button {
        font-size: var(--fontsize-secondary);
        padding: 8px 18px;
    }
}



</style>
