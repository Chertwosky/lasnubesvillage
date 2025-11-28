<template>
    <div v-if="isOpen" class="modal-overlay" @click.self="close">
        <div class="modal">
            <button class="modal__close" aria-label="Закрыть" @click="close">✖</button>
            <div class="modal__content">
                <h2 class="modal__title">УСЛОВИЯ ПРОЖИВАНИЯ В LAS NUBES VILLAGE</h2>

                <div class="modal__section times">
                    <p><strong>Регистрация гостей</strong> – с 15:00 (по паспорту или иному удостоверению личности)</p>
                    <p><strong>Выезд</strong> – до 12:00 по местному времени</p>
                </div>

                <div class="modal__section">
                    <h3>ОПЛАТА И БРОНИРОВАНИЕ</h3>
                    <ul>
                        <li>Полная оплата за проживание производится перед заселением.</li>
                        <li>При бронировании необходимо внести предоплату 10&nbsp;000 ₽ (залог возвращается после уборки дома при выезде).</li>
                    </ul>
                </div>

                <div class="modal__section">
                    <h3>ОТМЕНА И ИЗМЕНЕНИЕ БРОНИ</h3>
                    <ul>
                        <li>Отмена более чем за 15 дней — предоплата возвращается полностью.</li>
                        <li>Отмена менее чем за 15 дней — предоплата удерживается полностью.</li>
                        <li>При отказе от проживания или сокращении срока после заселения удерживается стоимость понесённых расходов, но не менее чем за 1 сутки.</li>
                    </ul>
                </div>

                <div class="modal__section">
                    <h3>ПРОЖИВАЮЩИЙ ОБЯЗАН</h3>
                    <ul>
                        <li>Соблюдать правила пожарной безопасности и безопасности при использовании банного чана.</li>
                        <li>Курить (включая кальян и устройства на углях или открытом огне) только в беседке.</li>
                        <li>При выходе выключать электроприборы, закрывать окна и двери.</li>
                        <li>Соблюдать тишину с 23:00 до 08:00.</li>
                        <li>Уважительно относиться к персоналу и другим гостям, следить за детьми и сохранностью своего имущества.</li>
                        <li>Бережно относиться к имуществу комплекса и компенсировать ущерб по рыночной стоимости при повреждениях.</li>
                    </ul>
                </div>

                <div class="modal__section">
                    <h3>РАЗМЕЩЕНИЕ ГОСТЕЙ И ЖИВОТНЫХ</h3>
                    <ul>
                        <li>Ответственность за безопасность детей несут родители или опекуны.</li>
                        <li>Размещение с животными до 8 кг возможно по предварительной договорённости за дополнительную плату 1&nbsp;000 ₽/сутки.</li>
                    </ul>
                </div>

                <div class="modal__section">
                    <h3>ГОСТЯМ ЗАПРЕЩЕНО</h3>
                    <ul>
                        <li>Выбрасывать мусор в неположенных местах.</li>
                        <li>Разводить костры вне специально отведённых зон.</li>
                        <li>Курить, зажигать свечи и разводить огонь в домах или оставлять источники открытого огня без присмотра.</li>
                        <li>Использовать пиротехнику, стрелять из огнестрельного, охотничьего и пневматического оружия.</li>
                        <li>Самостоятельно передвигать архитектурные конструкции или повреждать деревья, кустарники и зелёные насаждения.</li>
                        <li>Допускать на территорию коттеджа посторонних лиц, не проживающих в нём.</li>
                        <li>Слушать громко музыку и шуметь, нарушая покой других гостей.</li>
                    </ul>
                </div>

                <div class="modal__section">
                    <h3>ШТРАФЫ И ОТВЕТСТВЕННОСТЬ</h3>
                    <ul>
                        <li>При нарушении правил тишины, нахождении посторонних, загрязнении дома или вечеринках свыше восьми человек — штраф 5&nbsp;000 ₽ и выселение.</li>
                        <li>Штраф за курение в номере — 5&nbsp;000 ₽ и выселение.</li>
                        <li>Если гость проливает вино или оставляет трудновыводимые пятна, оплачиваются услуги клининговой компании.</li>
                    </ul>
                    <p>
                        В случае нарушения правил гостя могут выселить без возврата ранее оплаченных услуг. Ограничение по количеству гостей соответствует числу спальных мест в описании услуги.
                    </p>
                </div>

                <div class="modal__section">
                    <h3>ОТКАЗ ОТ ОТВЕТСТВЕННОСТИ</h3>
                    <p>Администрация не несёт ответственность за сохранность автотранспорта, утрату личного имущества, противоправные действия других гостей, а также несчастные случаи и травмы по вине гостя.</p>
                    <p>При бронировании гость обязан ознакомиться с настоящими правилами и подтвердить согласие.</p>
                </div>

                <div class="modal__section notice">
                    <p>Заказчик несёт полную ответственность за безопасность себя, своих близких и детей, а также за свою жизнь и здоровье.</p>
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
    font-size: clamp(20px, 2.7vw, 26px);
    letter-spacing: 1.2px;
    color: #2f3443;
    margin: 0 0 16px;
}

.modal__section {
    margin-bottom: 18px;
    color: #2f3443;
    font-family: var(--font-main);
    line-height: 1.6;
    font-size: 18px;
}

.modal__section h3 {
    margin: 0 0 8px;
    font-size: 18px;
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
    font-size: 17px;
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
