<template>
    <footer class="footer">
        <div class="footer__inner">
            <div class="footer__brand">
                <NuxtLink to="/" class="footer__logo" draggable="false">
                    <img
                        :src="Logo"
                        alt="Логотип Las Nubes Village"
                        class="footer__logo_reel"
                        draggable="false"
                        loading="lazy"
                    />
                </NuxtLink>
                <p class="footer__copy">© Лас Нубес Вилледж рент. Все права защищены.</p>
            </div>

            <div class="footer__contacts">
                <p class="footer__title">Контакты</p>
                <div class="footer__contact_list">
                    <a href="tel:+79224232070" class="footer__link" draggable="false">+7 (922) 423-20-70</a>
                    <a href="mailto:lasnubesvillage@yandex.ru" class="footer__link" draggable="false">lasnubesvillage@yandex.ru</a>
                </div>
                <p class="footer__subtitle">Больше интересного в соцсетях</p>
                <div class="footer__socials">
                    <a href="https://vk.com/club230694721" target="_blank" rel="noreferrer noopener" aria-label="ВКонтакте">
                        <img :src="Vk" alt="ВКонтакте" class="footer__social" draggable="false" loading="lazy" />
                    </a>
                    <a href="https://www.instagram.com/las.nubes.village/" target="_blank" rel="noreferrer noopener" aria-label="Rusgram">
                        <img :src="Rusgram" alt="Русграм" class="footer__social" draggable="false" loading="lazy" />
                    </a>
                </div>
                <div class="footer__messengers">
                    <div class="footer__messenger">
                        <a
                            href="https://t.me/lasnubesmsg"
                            target="_blank"
                            rel="noreferrer noopener"
                            class="footer__cta"
                        >
                            Написать в Telegram
                        </a>
                        <a
                            href="https://t.me/lasnubesvillage"
                            target="_blank"
                            rel="noreferrer noopener"
                            class="footer__cta_icon"
                            aria-label="Открыть Telegram"
                        >
                            <img :src="Telegram" alt="Telegram" class="footer__cta_reel" draggable="false" loading="lazy" />
                        </a>
                    </div>
                    <div class="footer__messenger">
                        <a
                            href="https://wa.me/79224232070"
                            target="_blank"
                            rel="noreferrer noopener"
                            class="footer__cta"
                        >
                            Написать в WhatsApp
                        </a>
                        <a
                            href="https://wa.me/79224232070"
                            target="_blank"
                            rel="noreferrer noopener"
                            class="footer__cta_icon"
                            aria-label="Открыть WhatsApp"
                        >
                            <img :src="WhatsApp" alt="WhatsApp" class="footer__cta_reel" draggable="false" loading="lazy" />
                        </a>
                    </div>
                </div>
            </div>

            <div class="footer__nav">
                <p class="footer__title">Страницы</p>
                <nav class="footer__nav_list" aria-label="Ссылки сайта">
                    <NuxtLink to="/about" class="footer__link" draggable="false">О нас</NuxtLink>
                    <NuxtLink to="/cottages" class="footer__link" draggable="false">Коттеджи</NuxtLink>
                    <NuxtLink to="/services" class="footer__link" draggable="false">Наши услуги</NuxtLink>
                </nav>
            </div>
        </div>
        <Cloud width="156px" top="0px" right="12%" />
        <Cloud width="170px" bottom="15%" right="25%" flipped />
    </footer>
</template>

<script setup>
  import Logo from '@/assets/images/core/footer/logo.svg'
  import Vk from '@/assets/images/core/footer/Vk.svg'
  import Rusgram from '@/assets/images/core/footer/Rusgram.svg'
  import Telegram from '@/assets/images/core/footer/Telegram.svg'
  import WhatsApp from '@/assets/images/core/footer/Whatsapp.svg'
  import Cloud from '@/components/blocks/Cloud.vue'
</script>

<style scoped>
.footer {
    margin: var(--layout-section-gap) auto 0 auto;
    width: min(100%, var(--container-width));
    padding: clamp(32px, 6vw, 64px) var(--layout-content-padding) clamp(80px, 10vw, 140px);
    position: relative;
    color: var(--white-color);
}

.footer a {
    color: inherit;
    text-decoration: none;
}

.footer__inner {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: clamp(24px, 5vw, 48px);
    align-items: start;
}

.footer__brand {
    grid-column: span 4;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.footer__logo_reel {
    width: clamp(140px, 20vw, 200px);
    height: auto;
}

.footer__copy {
    margin: 0;
    font-size: clamp(14px, 1.1vw, 16px);
    max-width: 240px;
}

.footer__contacts {
    grid-column: span 5;
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.footer__title {
    font-family: var(--font-secondary);
    font-size: clamp(20px, 2vw, 28px);
    margin: 0;
}

.footer__subtitle {
    margin: 8px 0 0;
    font-size: clamp(14px, 1.2vw, 16px);
}

.footer__contact_list {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.footer__link {
    font-size: clamp(15px, 1.2vw, 18px);
}

.footer__socials {
    display: flex;
    gap: 20px;
    align-items: center;
}

.footer__social {
    width: 42px;
    height: 42px;
}

.footer__messengers {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.footer__messenger {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 12px;
    align-items: center;
}

.footer__cta {
    padding: 12px 18px;
    border-radius: var(--border-radius-container);
    border: 1px solid rgba(255, 255, 255, 0.4);
    text-align: center;
    font-size: clamp(14px, 1.2vw, 18px);
}

.footer__cta_icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: var(--border-radius-container);
    border: 1px solid rgba(255, 255, 255, 0.4);
}

.footer__cta_reel {
    width: 32px;
    height: 32px;
}

.footer__nav {
    grid-column: span 3;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.footer__nav_list {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

@media (max-width: 1024px) {
    .footer__inner {
        grid-template-columns: repeat(6, 1fr);
    }

    .footer__brand {
        grid-column: span 6;
    }

    .footer__contacts {
        grid-column: span 6;
    }

    .footer__nav {
        grid-column: span 6;
    }
}

@media (max-width: 640px) {
    .footer {
        padding-inline: var(--layout-content-padding);
    }

    .footer__inner {
        grid-template-columns: 1fr;
    }

    .footer__brand,
    .footer__contacts,
    .footer__nav {
        grid-column: span 1;
    }

    .footer__brand {
        align-items: center;
        text-align: center;
    }

    .footer__copy {
        max-width: none;
    }

    .footer__contacts {
        align-items: center;
        text-align: center;
    }

    .footer__contact_list,
    .footer__nav_list {
        align-items: center;
    }

    .footer__messenger {
        grid-template-columns: 1fr;
    }

    .footer__cta_icon {
        width: 100%;
    }
}

@media (max-width: 480px) {
    .footer {
        padding-bottom: clamp(72px, 14vw, 120px);
    }
}
</style>
