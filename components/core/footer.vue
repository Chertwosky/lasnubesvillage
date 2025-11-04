<template>
    <footer class="footer">
        <div class="footer__background text-overlay">
            <div class="footer__wrap">
                <div class="footer__wrap_column1">
                    <NuxtLink to="/">
                        <img :src="Logo" alt="Лого" class="footer__wrap_column1_reel" draggable="false" />
                    </NuxtLink>
                    <p class="footer__wrap_column1_text one">© Лас Нубес Вилледж рент. Все права защищены.</p>
                </div>
                <div class="footer__wrap_columns-2-3">
                    <div class="footer__wrap_column2">
                        <p class="footer__wrap_column2_title">Контакты</p>
                        <div class="footer__wrap_column2_info">
                            <a href="tel:+79224232070" class="footer__wrap_column2_link phone" draggable="false">+7 (922) 423-20-70</a>
                            <a href="mailto:lasnubesvillage@yandex.ru" class="footer__wrap_column2_link mail" draggable="false">lasnubesvillage@yandex.ru</a>
                        </div>
                        <p class="footer__wrap_column2_text more">Больше интересного в соцсетях</p>
                        <div class="footer__wrap_column2_social">
                            <a href="https://vk.com/club230694721"><img :src="Vk" alt="Вк" class="footer__wrap_column2_social_reel" draggable="false" /></a>
                            <!-- Правая стрелка  <a href="#"> <img :src="Youtube" alt="Ютуб" class="footer__wrap_column2_social_reел" draggable="false" /></a>-->
                            <a href="https://www.instagram.com/las.nubes.village/"><img :src="Rusgram" alt="Русграм" class="footer__wrap_column2_social_reel" draggable="false" /></a>
                        </div>
                        <div class="footer__wrap_column2_tg">
                            <a
                                href="https://t.me/lasnubesmsg"
                                target="_blank"
                                rel="noreferrer noopener"
                                class="footer__wrap_column2_link"
                            >
                                Написать в Telegram
                            </a>

                            <a
                                href="https://t.me/lasnubesvillage"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <img :src="Telegram" alt="Telegram" class="footer__wrap_column2_tg_reel" draggable="false" />
                            </a>
                        </div>

                        <div class="footer__wrap_column2_ws">
                            <a
                                href="https://wa.me/79224232070"
                                target="_blank"
                                rel="noreferrer noopener"
                                class="footer__wrap_column2_link"
                            >
                                Написать в WhatsApp
                            </a>

                            <a
                                href="https://wa.me/79224232070"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <img :src="WhatsApp" alt="WhatsApp" class="footer__wrap_column2_tg_reel" draggable="false" />
                            </a>
                        </div>
                        <!-- Правая стрелка
                        <div class="footer__wrap_column2_docs">
                            <NuxtLink to="#" class="footer__wrap_column2_link">Договор оферта</NuxtLink>
                            <NuxtLink to="#" class="footer__wrap_column2_link">Политика конфиденциальности</NuxtLink>
                        </div>-->
                    </div>
                    <div class="footer__wrap_column3">
                        <p class="footer__wrap_column3_title">Страницы</p>
                        <div class="footer__wrap_column3_list">
                            <NuxtLink to="/about" class="footer__wrap_column3_link" draggable="false">О нас</NuxtLink>
                            <NuxtLink to="/cottages" class="footer__wrap_column3_link" draggable="false">Коттеджи</NuxtLink>
                            <NuxtLink to="/services" class="footer__wrap_column3_link" draggable="false"> Наши услуги</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <img :src="FooterOrnament" alt="Декоративный орнамент" class="footer__ornament" draggable="false" />
        </div>
        <Cloud width="156px" top="0px" right="12%" />
        <Cloud width="170px" bottom="15%" right="25%" flipped />
    </footer>
</template>

<script setup>
import { resolveImage } from '@/utils/resolveImage'
import Cloud from '@/components/blocks/Cloud.vue'

const Logo = resolveImage('core/footer/logo')
const Vk = resolveImage('core/footer/Vk')
const Youtube = resolveImage('core/footer/Youtube')
const Rusgram = resolveImage('core/footer/Rusgram')
const Telegram = resolveImage('core/footer/Telegram')
const WhatsApp = resolveImage('core/footer/Whatsapp')
const FooterOrnament = resolveImage('core/footer/ornament')
</script>

<style scoped>
.footer {
    margin: var(--margin-section) auto 0 auto;
    max-width: var(--container-width);
    position: relative;
}

.footer a,
.footer {
    color: var(--white-color);
    text-decoration: none;
}

.footer__background {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: clamp(32px, 5vw, 56px) clamp(24px, 6vw, 64px) clamp(96px, 12vw, 133px);
    background: rgba(8, 12, 28, 0.7);
    border-radius: 18px;
    backdrop-filter: blur(4px);
}

.footer__wrap {
    display: flex;
    gap: 85px;
}

.footer__wrap_columns-2-3 {
    flex-direction: row;
    display: flex;
    gap: 70px;
}

.footer__ornament {
    display: block;
    width: 100%;
    max-width: 100%;
    margin-top: 48px;
}

.footer__wrap_column1_reel {
    width: 216px;
    height: 301px;
    object-fit: cover;
    display: block;
    margin-left: -6px;
}

.footer__wrap_column1,
.footer__wrap_column2,
.footer__wrap_column3,
.footer__wrap_column3_list {
    display: flex;
    flex-direction: column;
}

.footer__wrap_column2_social {
    display: flex;
    gap: 27px;
}

.footer__wrap_column2_info {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.footer__wrap_column1_link,
.footer__wrap_column1_text,
.footer__wrap_column2_link,
.footer__wrap_column2_text,
.footer__wrap_column3_link,
.footer__wrap_column3_text {
    font-size: 14px;
    font-weight: 400;
    line-height: 140%;
    font-family: var(--font-core);
}

.footer__wrap_column2_text p,
.footer__wrap_column1_text p,
.footer__wrap_column3_text p {
    margin: 0;
}

.footer__wrap_column2_text.more {
    margin: 0 0 40px 0;
}

.footer__wrap_column2_docs {
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin-top: 24px;
}

.footer__wrap_column2_docs a {
    text-decoration: underline;
}

.footer__wrap_column3_list {
    gap: 18px;
}

.footer__wrap_column2_title,
.footer__wrap_column3_title {
    font-size: 22px;
    font-family: var(--font-main);
}

.footer__wrap_column2_tg .footer__wrap_column2_link,
.footer__wrap_column2_ws .footer__wrap_column2_link {
    padding: 10px 17px;
    background-color: transparent;
    border-radius: var(--border-radius-container);
    border: 1px solid var(--white-color);
    cursor: pointer;
}

.footer__wrap_column2_tg {
    margin-top: 27px;
}

.footer__wrap_column2_ws {
    margin-top: 6px;
}

.footer__wrap_column2_tg button p,
.footer__wrap_column2_ws .footer__wrap_column2_link {
    margin: 0;
}

.footer__wrap_column2_ws,
.footer__wrap_column2_tg {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 250px;
}

.footer__wrap_column1_text.one {
    margin-bottom: 0;
}

.footer__wrap_column2_link.phone {
    margin: 0;
}

.footer__wrap_column2_link.mail {
    margin: 0 0 13px 0;
}

.footer__wrap_column1 .footer__wrap_column1_text {
    margin: 0;
    max-width: 200px;
}

.footer__wrap_column1 {
    justify-content: space-between;
}

@media (max-width: 1280px) {
    .footer {
        width: 100vw;
    }
}

@media (max-width: 1024px) {
    .footer {
        width: 99vw;
    }

    .footer__background {
        padding: 40px 32px 104px;
    }

    .cloud:first-of-type {
        top: 30% !important;
        right: 6% !important;
    }
}

@media (max-width: 768px) {
    .footer__background {
        padding: 32px 24px 96px;
    }

    .cloud:first-of-type {
        top: 73% !important;
        right: 1% !important;
    }

    .cloud:last-of-type {
        top: -9% !important;
        left: 6% !important;
    }
}

@media (max-width: 540px) {
    .footer__background {
        padding: 28px 20px 72px;
    }

    .footer__wrap {
        flex-direction: column;
        align-items: center; /* центрируем первую колонку */
        gap: 30px;
    }

    .footer__wrap_column1 {
        order: 1;
        align-items: center;
        text-align: center;
    }

    /* Контейнер для 2-й и 3-й колонок */
    .footer__wrap_columns-2-3 {
        display: flex;
        gap: 40px;
        justify-content: center;
        width: 100%;
        order: 2;
    }

    .footer__wrap_column2,
    .footer__wrap_column3 {
        min-width: 0;
    }

    .cloud:first-of-type {
        top: 73% !important;
        right: 6% !important;
    }

    .cloud:last-of-type {
        top: 19% !important;
        left: 6% !important;
    }
}

@media (max-width: 400px) {
    .cloud:first-of-type {
        top: 83% !important;
        right: 6% !important;
    }
}
</style>
