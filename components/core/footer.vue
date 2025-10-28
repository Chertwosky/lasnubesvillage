<template>
    <footer class="footer">
        <div class="footer__wrap">
            <div class="footer__wrap_column1">
               <NuxtLink to="/"><img :src="Logo" alt="Лого" class="footer__wrap_column1_reel" draggable="false" /></NuxtLink>
                <p class="footer__wrap_column1_text one">© Лас Нубес Вилледж рент. Все права защищены.</p>
            </div>
            <div class="footer__wrap_columns-2-3">
            <div class="footer__wrap_column2">
                <p class="footer__wrap_column2_title">Контакты</p>
                <div class="footer__wrap_column2_info">
                    <a  href="tel:+79224232070" class="footer__wrap_column2_link phone" draggable="false">+7 (922) 423-20-70</a>
                    <a  href="mailto:lasnubesvillage@yandex.ru" class="footer__wrap_column2_link mail" draggable="false">lasnubesvillage@yandex.ru</a>
                </div>
                <p class="footer__wrap_column2_text more">Больше интересного в соцсетях</p>
                <div class="footer__wrap_column2_social">
                    <a href="https://vk.com/club230694721"><img :src="Vk" alt="Вк" class="footer__wrap_column2_social_reel" draggable="false" /></a>
                        <!-- Правая стрелка  <a href="#"> <img :src="Youtube" alt="Ютуб" class="footer__wrap_column2_social_reel" draggable="false" /></a>-->
                    <a href="https://www.instagram.com/las.nubes.village/"><img :src="Rusgram" alt="Русграм" class="footer__wrap_column2_social_reel" draggable="false" /></a>
                </div>
                <div class="footer__wrap_column2_tg">
                    <a href="https://t.me/lasnubesmsg"
                        target="_blank"
                        rel="noreferrer noopener"
                        class="footer__wrap_column2_link">
                        Написать в Telegram
                    </a>

                    <a href="https://t.me/lasnubesvillage""
                        target="_blank"
                        rel="noreferrer noopener">
                        <img :src="Telegram" alt="Telegram" class="footer__wrap_column2_tg_reel" draggable="false" />
                    </a>
                </div>

                <div class="footer__wrap_column2_ws">
                    <a href="https://wa.me/79224232070"
                        target="_blank"
                        rel="noreferrer noopener"
                        class="footer__wrap_column2_link">
                        Написать в WhatsApp
                    </a>

                    <a href="https://wa.me/79224232070"
                        target="_blank"
                        rel="noreferrer noopener">
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
        <Cloud width="156px" top="0px" right="12%" />
        <Cloud width="170px" bottom="15%" right="25%" flipped/>
    </footer>
</template>

<script setup>
  import Logo from '@/assets/images/core/footer/logo.svg'
  import Vk from '@/assets/images/core/footer/Vk.svg'
  import Youtube from '@/assets/images/core/footer/Youtube.svg'
  import Rusgram from '@/assets/images/core/footer/Rusgram.svg'
  import Telegram from '@/assets/images/core/footer/Telegram.svg'
  import WhatsApp from '@/assets/images/core/footer/Whatsapp.svg'
     import Cloud from '@/components/blocks/Cloud.vue'
</script>

<style scoped>

.footer {
    margin: var(--margin-section) auto 0 auto;
    max-width: min(var(--container-width), 100%);
    padding: clamp(40px, 6vw, 80px) clamp(20px, 4vw, 40px) clamp(80px, 12vw, 140px);
    position: relative;
}

.footer a,
.footer {
    color: var(--white-color);
    text-decoration: none;
    font-family: var(--font-core);
}

.footer__wrap {
    display: grid;
    grid-template-columns: minmax(0, 0.95fr) repeat(2, minmax(0, 1fr));
    gap: clamp(24px, 4vw, 64px);
    align-items: start;
}

.footer__wrap_columns-2-3 {
    display: contents;
}

.footer__wrap_column1,
.footer__wrap_column2,
.footer__wrap_column3,
.footer__wrap_column3_list {
    display: flex;
    flex-direction: column;
    gap: clamp(12px, 1.6vw, 24px);
}

.footer__wrap_column1 {
    gap: clamp(20px, 2.5vw, 36px);
}

.footer__wrap_column1_reel {
    width: clamp(140px, 18vw, 220px);
    height: auto;
    object-fit: contain;
}

.footer__wrap_column1_text {
    margin: 0;
    font-size: clamp(14px, 1.4vw, 16px);
    line-height: 150%;
    max-width: 280px;
}

.footer__wrap_column2_title,
.footer__wrap_column3_title {
    font-family: var(--font-main);
    font-size: clamp(20px, 2vw, 26px);
    margin: 0;
}

.footer__wrap_column2_info {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.footer__wrap_column2_link,
.footer__wrap_column2_text,
.footer__wrap_column3_link,
.footer__wrap_column3_text {
    font-size: clamp(14px, 1.6vw, 18px);
    line-height: 150%;
}

.footer__wrap_column2_link {
    width: fit-content;
}

.footer__wrap_column2_link.phone {
    font-size: clamp(16px, 2vw, 20px);
    font-weight: var(--font-weight-medium);
}

.footer__wrap_column2_link.mail {
    margin-bottom: clamp(6px, 1vw, 12px);
}

.footer__wrap_column2_text.more {
  margin: clamp(8px, 1.5vw, 20px) 0 clamp(18px, 3vw, 36px);
}

.footer__wrap_column2_social {
    display: flex;
    gap: clamp(16px, 2vw, 28px);
}

.footer__wrap_column2_social_reel,
.footer__wrap_column2_tg_reel {
    width: clamp(32px, 3vw, 40px);
    height: clamp(32px, 3vw, 40px);
}

.footer__wrap_column2_tg,
.footer__wrap_column2_ws {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: clamp(12px, 2vw, 20px);
    padding: clamp(10px, 1.6vw, 16px) clamp(14px, 2.4vw, 22px);
    border: 1px solid var(--white-color);
    border-radius: var(--border-radius-container);
    max-width: 320px;
    background: rgba(0, 0, 0, 0.15);
}

.footer__wrap_column2_tg .footer__wrap_column2_link,
.footer__wrap_column2_ws .footer__wrap_column2_link {
    margin: 0;
    font-weight: var(--font-weight-medium);
}

.footer__wrap_column3_list {
    gap: clamp(12px, 1.5vw, 24px);
}

.footer__wrap_column3_link {
    text-decoration: none;
}

.footer__wrap_column3_link:hover,
.footer__wrap_column2_link:hover {
    opacity: 0.85;
}

@media (max-width: 992px) {
    .footer__wrap {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .footer__wrap_column1 {
        grid-column: 1 / -1;
        align-items: center;
        text-align: center;
    }

    .footer__wrap_column1_text {
        max-width: 360px;
    }

    .footer__wrap_column2,
    .footer__wrap_column3 {
        align-items: center;
        text-align: center;
    }

    .footer__wrap_column2_tg,
    .footer__wrap_column2_ws {
        margin: 0 auto;
    }

    .footer__wrap_column2_social {
        justify-content: center;
    }
}

@media (max-width: 640px) {
    .footer__wrap {
        grid-template-columns: 1fr;
    }

    .footer__wrap_column2,
    .footer__wrap_column3 {
        align-items: flex-start;
        text-align: left;
    }

    .footer__wrap_column2_tg,
    .footer__wrap_column2_ws {
        width: 100%;
        max-width: none;
    }

    .footer__wrap_column2_social {
        justify-content: flex-start;
    }
}

@media (max-width: 480px) {
    .footer {
        padding-inline: clamp(16px, 6vw, 20px);
    }

    .footer__wrap_column2_tg,
    .footer__wrap_column2_ws {
        flex-direction: row;
    }
}



</style>
