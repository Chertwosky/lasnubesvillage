<template>
    <header class="header">
        <div class="header__inner">
            <a href="/" class="header_click" draggable="false">
            <img :src="logo" alt="Логотип" class="header_logo" draggable="false" />
            </a>
            <nav class="header__nav">
                <NuxtLink to="/cottages" class="header__wrap_link" draggable="false">Коттеджи</NuxtLink>
                <NuxtLink to="/services" class="header__wrap_link" draggable="false">Услуги</NuxtLink>
                <NuxtLink :to="{ path: '/', hash: '#stocks' }" class="header__wrap_link" draggable="false">Акции</NuxtLink>
                <NuxtLink to="/about" class="header__wrap_link" draggable="false">О нас</NuxtLink>
            </nav>

            <div class="header__feed">
                <a href="tel:+79224232070" class="header__feed_call" draggable="false">+7 (922) 423-20-70</a>
                <div class="header__feed_social">
                    <a
                    href="https://t.me/lasnubesvillage"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Открыть Telegram"
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
                    aria-label="Написать в WhatsApp"
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
</script>

<style scoped>
  .header {
    padding: 24px 20px 12px;
  }

  .header__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    max-width: var(--container-width);
    margin: 0 auto;
    padding: 16px 32px;
    background: rgba(255, 255, 255, 0.82);
    border-radius: 999px;
    box-shadow: 0 24px 60px rgba(66, 102, 168, 0.22);
    backdrop-filter: blur(10px);
  }

.header__nav,
.header__feed {
    display: flex;
    gap: 28px;
    font-family: var(--font-core);
    color: var(--faded-color);
    align-items: center;
}

.header__nav {
    margin-right: auto;
}

.header__feed_social {
    display: flex;
    gap: 10px;
}

.header__feed_social a {
    display: inline-flex;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    background: rgba(64, 91, 165, 0.08);
}

.header__feed_social_reel {
    width: 20px;
    height: 20px;
}

.header__nav a,
.header__feed_call {
    text-decoration: none;
    font-size: var(--fontsize-secondary);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-weight: 600;
    color: #405ba5;
}

.header_click {
    display: flex;
    align-items: center;
}

.header__feed_call {
    align-self: center;
    white-space: nowrap;
}

.header__feed_button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
  background: linear-gradient(135deg, #50c57d 0%, #3aa365 100%);
  color: var(--white-color);
  font-size: var(--fontsize-secondary);
  border-radius: 999px;
  border: none;
  cursor: pointer;
  font-family: var(--font-secondary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.header__feed_button:hover {
  background: linear-gradient(135deg, #50c57d 0%, #3aa365 100%) !important;
  color: var(--white-color) !important;
}

.header_logo {
    width: 92px;
    height: 126px;
    object-fit: contain;
}

@media (max-width: 1100px) {
    .header__inner {
        padding: 16px 24px;
        gap: 20px;
    }

    .header__nav,
    .header__feed {
        gap: 20px;
    }
}

@media (max-width: 900px) {
    .header__inner {
        flex-wrap: wrap;
        border-radius: 32px;
        row-gap: 16px;
    }

    .header__nav {
        order: 3;
        width: 100%;
        justify-content: center;
        flex-wrap: wrap;
        gap: 16px 24px;
    }

    .header__feed {
        margin-left: auto;
        gap: 16px;
    }
}

@media (max-width: 640px) {
    .header {
        padding: 16px;
    }

    .header__inner {
        flex-direction: column;
        align-items: stretch;
        text-align: center;
    }

    .header__nav {
        order: 2;
    }

    .header__feed {
        order: 3;
        flex-direction: column;
        justify-content: center;
    }

    .header__feed_social {
        justify-content: center;
    }

    .header__feed_button {
        width: 100%;
        justify-content: center;
        padding: 12px 20px;
    }

    .header_logo {
        margin: 0 auto;
    }
}



</style>
