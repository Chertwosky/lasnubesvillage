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
        <label class="header__nav_select" aria-label="Выбор раздела сайта">
            <span class="header__nav_select-text">Меню</span>
            <select v-model="selectedMenu" @change="handleMenuChange" class="header__nav_select-control">
                <option disabled value="">Выберите раздел</option>
                <option
                    v-for="item in menuItems"
                    :key="item.value"
                    :value="item.value"
                >
                    {{ item.label }}
                </option>
            </select>
        </label>

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
import { ref, watch } from 'vue'
import { useRoute, useRouter } from '#imports'
import logo from '@/assets/images/core/header/logo.svg'
import phoneIcon from '@/assets/images/core/header/phone.svg'
import Telegram from '@/assets/images/core/header/Telegram.svg'
import BookingButton from '@/components/blocks/BookingButton.vue'

const menuItems = [
  { label: 'Коттеджи', value: '/cottages' },
  { label: 'Услуги', value: '/services' },
  { label: 'Акции', value: '/#stocks' },
  { label: 'О нас', value: '/about' },
]

const router = useRouter()
const route = useRoute()

const getInitialValue = (fullPath, hash) => {
  if (hash === '#stocks') {
    return '/#stocks'
  }

  const match = menuItems.find(item => item.value !== '/#stocks' && fullPath.startsWith(item.value))
  return match ? match.value : ''
}

const selectedMenu = ref(getInitialValue(route.fullPath, route.hash))

watch(
  () => [route.fullPath, route.hash],
  ([fullPath, hash]) => {
    selectedMenu.value = getInitialValue(fullPath, hash)
  }
)

const handleMenuChange = (event) => {
  const value = event?.target?.value || selectedMenu.value
  if (!value) return

  if (value === '/#stocks') {
    router.push({ path: '/', hash: '#stocks' })
    return
  }

  router.push(value)
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

.header__nav_select {
    display: none;
    flex-direction: column;
    margin-right: auto;
    font-family: var(--font-core);
    color: var(--white-color);
}

.header__nav_select-text {
    font-size: var(--fontsize-primary);
    margin-bottom: 6px;
}

.header__nav_select-control {
    appearance: none;
    background: rgba(12, 25, 51, 0.78);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 16px;
    color: var(--white-color);
    padding: 10px 36px 10px 14px;
    font-size: var(--fontsize-secondary);
    font-family: inherit;
    position: relative;
    background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none"><path d="M1 1.5L8 8.5L15 1.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
    background-repeat: no-repeat;
    background-position: right 14px center;
    background-size: 16px;
}

.header__nav_select-control:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.35);
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

@media (max-width:540px) {
    .header {
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
    }

    .header__nav {
        display: none;
    }

    .header__nav_select {
        display: flex;
        width: 100%;
    }

    .header__feed {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
    }

    .header__feed_social {
        flex-direction: row;
    }

    .header__feed_button {
        width: 100%;
        justify-content: center;
        font-size: var(--fontsize-secondary);
        padding: 10px 20px;
    }
}



</style>
