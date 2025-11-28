<template>
    <div v-if="isOpen" class="modal-overlay" @click.self="close">
        <div class="modal">
            <button class="modal__close" aria-label="Закрыть" @click="close">✖</button>
            <div class="modal__content">
                <h2 class="modal__title">УСЛОВИЯ ПРОЖИВАНИЯ В LAS NUBES VILLAGE</h2>

                <div class="modal__section times">
                    <p><strong>Заезд</strong> – 14:00</p>
                    <p><strong>Выезд</strong> – 12:00</p>
                </div>

                <div class="modal__section">
                    <h3>ПРОЖИВАЮЩИЙ В ГОСТЕВОМ ДОМЕ ОБЯЗАН:</h3>
                    <ul>
                        <li>соблюдать чистоту в A-frame;</li>
                        <li>обеспечить сохранность личной и коллективной безопасности;</li>
                        <li>соблюдать тишину в отеле в период с 23:00 до 07:00.</li>
                    </ul>
                </div>

                <div class="modal__section">
                    <h3>В LAS NUBES VILLAGE ЗАПРЕЩАЕТСЯ:</h3>
                    <ul>
                        <li>оставлять в доме посторонних, а также передавать им гостевую карту, ключи от A-frame;</li>
                        <li>
                            хранить легковоспламеняющиеся материалы, оружие, наркотические средства, определённые законодательством
                            РФ;
                        </li>
                        <li>принимать гостей на территории отеля, если их количество превышает общее количество проживающих в отеле;</li>
                        <li>курить в гостевых домах и на территории гостиничного комплекса.</li>
                    </ul>
                </div>

                <div class="modal__section">
                    <p>
                        При нарушении этих условий любым гостем может потребоваться выселить его (их) из дома. В таких случаях заранее
                        оплаченные гостем-нарушителем услуги не подлежат возврату.
                    </p>
                    <p>
                        В случае нарушения правил тишины, нахождения посторонних людей в доме, загрязнении дома, беседы свыше восьми
                        человек, штраф составляет 5000 рублей и выселение.
                    </p>
                    <p>Штраф за курение в номере 5000 рублей и выселение.</p>
                </div>

                <div class="modal__section">
                    <p>
                        Штраф за курение в номере 5000 рублей и выселение. Если вы согласны с правилами проживания, то добро
                        пожаловать в LAS NUBES VILLAGE!
                    </p>
                    <p>
                        Отель не несёт ответственности за вещи, оставленные в гостевом доме. Ограничение максимального количества мест,
                        согласно правилам проживания в доме — на каждого гостя предоставляется максимальное количество спальных мест,
                        указанное в описании услуги на сайте. В соответствии с пунктом 2 статьи 614 Гражданского кодекса РФ «Найматель
                        обязан своевременно вносить плату за пользование имуществом». На территории нашей гостиницы действует закон №
                        15-ФЗ от 23 февраля 2013 г. «Об охране здоровья граждан от воздействия окружающего табачного дыма и последствий
                        потребления табака».
                    </p>
                </div>

                <div class="modal__section notice">
                    <p>
                        Заказчик несет полную ответственность за безопасность себя, своих близких и детей, а также за свою жизнь и
                        здоровье.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const isOpen = ref(false)

const open = () => {
    isOpen.value = true
    document.body.style.overflow = 'hidden'
}

const close = () => {
    isOpen.value = false
    document.body.style.overflow = ''
}

onMounted(() => {
    window.openRulesModal = open
})

onBeforeUnmount(() => {
    if (window.openRulesModal === open) {
        delete window.openRulesModal
    }
})
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99999;
    padding: 16px;
}

.modal {
    position: relative;
    width: min(960px, 100%);
    max-height: 90vh;
    background: linear-gradient(180deg, #d9d9d9 0%, #f6f6f6 45%, #acb2c2 100%);
    border-radius: 20px;
    padding: clamp(20px, 4vw, 36px);
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

.modal__close {
    position: absolute;
    top: 14px;
    right: 14px;
    border: none;
    background: transparent;
    color: #2f3443;
    font-size: 20px;
    cursor: pointer;
}

.modal__content {
    max-height: 80vh;
    overflow-y: auto;
    padding-right: 8px;
}

.modal__title {
    text-align: center;
    font-family: var(--font-main);
    font-size: clamp(18px, 2.5vw, 24px);
    letter-spacing: 1.2px;
    color: #2f3443;
    margin: 0 0 16px;
}

.modal__section {
    margin-bottom: 18px;
    color: #2f3443;
    font-family: var(--font-main);
    line-height: 1.6;
}

.modal__section h3 {
    margin: 0 0 8px;
    font-size: 16px;
    letter-spacing: 0.5px;
}

.modal__section ul {
    margin: 0 0 8px 18px;
    padding: 0;
}

.modal__section li {
    margin-bottom: 6px;
}

.modal__section.times {
    display: flex;
    gap: 32px;
    justify-content: center;
    font-weight: 700;
    font-size: 15px;
}

.modal__section.notice {
    background: rgba(255, 255, 255, 0.6);
    border-radius: 12px;
    padding: 12px;
    text-align: center;
    font-weight: 600;
}

@media (max-width: 540px) {
    .modal__section.times {
        flex-direction: column;
        gap: 8px;
        align-items: center;
    }
}
</style>
