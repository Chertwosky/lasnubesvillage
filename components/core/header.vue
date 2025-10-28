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
    .header__nav,
    .header__feed {
        flex-direction: column;
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
