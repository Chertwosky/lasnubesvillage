<template>
    <div v-if="isOpen" class="modal-overlay" @click.self="close">
      <div class="modal">
        <button class="modal__close" @click="close">✖</button>
        <img :src="logo" alt="Логотип" class="modal__logo" draggable="false" />

        <!-- Облака -->
        <Cloud width="120px" top="4%" left="10%" flipped class="cloud_modal"/>
        <Cloud width="140px" top="14%" right="14%" flipped class="cloud_modal"/>
        <Cloud width="130px" top="40%" right="2%" class="cloud_modal"/>
        <Cloud width="130px" top="45%" left="5%" class="cloud_modal"/>
        <Cloud width="160px" bottom="14%" right="10%" class="cloud_modal"/>
        <Cloud width="170px" bottom="4%" right="65%" flipped class="cloud_modal"/>

        <!-- Контейнер под виджет -->
        <div id="_bn_widget_" class="bn-widget"></div>
        <h3 class="modal__title"> LAS NUBES VILLAGE — посуточная аренда коттеджей </h3>
      </div>
    </div>
  </template>

  <script setup>
  import { ref, onMounted, nextTick } from 'vue'
  import logo from '@/assets/images/core/header/logo.svg'
  import Cloud from '@/components/blocks/Cloud.vue' // 👈 твой компонент облака

  const isOpen = ref(false)
  const widgetReady = ref(false)
  let widgetInitPromise = null

  const initWidget = () => {
    if (typeof window === 'undefined') return Promise.resolve()
    if (widgetReady.value) return Promise.resolve()
    if (widgetInitPromise) return widgetInitPromise

    widgetInitPromise = new Promise((resolve) => {
      const tryInit = () => {
        if (window.Bnovo_Widget && typeof window.Bnovo_Widget.init === 'function') {
          window.Bnovo_Widget.init(() => {
            widgetReady.value = true
            resolve()
          })
        } else {
          setTimeout(tryInit, 50)
        }
      }

      tryInit()
    })

    return widgetInitPromise
  }

  const open = async () => {
    isOpen.value = true

    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = scrollBarWidth + 'px'

    const widgetPromise = initWidget()

    await nextTick()

    await widgetPromise

    if (window.Bnovo_Widget && widgetReady.value) {
      window.Bnovo_Widget.open('_bn_widget_', {
        type: "vertical",
        uid: "817121e0-85f0-452d-b0b2-265ca9a568c3",
        lang: "ru",
        width: "300",
        width_mobile: "300",
        background: "#85AEE2",
        background_mobile: "#ffffff",
        bg_alpha: "100",
        bg_alpha_mobile: "100",
        border_color_mobile: "#C6CAD3",
        padding: "24",
        padding_mobile: "24",
        border_radius: "16",
        button_font_size: "14",
        button_height: "42",
        font_type: "georgia",
        title: "Забронировать",
        title_color: "#FFFFFF",
        title_color_mobile: "#242742",
        title_size: "28",
        title_size_mobile: "22",
        inp_color: "#000000",
        inp_bordhover: "#dedfe3",
        inp_bordcolor: "#BCBCBC",
        inp_alpha: "100",
        btn_background: "#46BE78",
        btn_background_over: "#FFFFFF",
        btn_textcolor: "#FFFFFF",
        btn_textover: "#46BE78",
        btn_bordcolor: "#46BE78",
        btn_bordhover: "#46BE78",
        min_age: "0",
        max_age: "17",
        adults_default: "1",
        cancel_color: "#FFFFFF",
        switch_mobiles_width: "800",
      })
    }
  }

  const close = () => {
    isOpen.value = false
    document.body.style.overflow = ''
    document.body.style.paddingRight = ''
  }

  onMounted(() => {
    window.openBooking = open
    initWidget()
  })
  </script>

  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0,0,0,0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99999;
  }

  .modal {
  background-color: var(--back-color);
  padding: 40px 30px;
  border-radius: 16px;
  max-width: 800px;
  height: 640px;       /* фиксированная высота */
  width: 90%;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: visible;   /* 👈 позволяем выпадающим спискам */
}

.bn-widget {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  margin:  -10px auto 0 auto !important;  /* 👈 убираем скролл и не обрезаем */
}


.modal__logo {
    width: 120px;
    margin: 0 auto;
}


  .modal__title {
    font-family: var(--font-secondary);
    font-size: 26px;
    text-align: center;
    color: var(--white-color);
    bottom: 2%;
    right: 2%;
   position: absolute;
  }

  .modal__close {
    position: absolute;
    top: 10px; right: 10px;
    border: none;
    background: transparent;
    font-size: 20px;
    cursor: pointer;
    color: var(--white-color);
  }




  .cloud {
    z-index: 0; /* облака под виджетом */
  }

  .cloud_modal {
    z-index: 0 !important;
  }
  </style>
