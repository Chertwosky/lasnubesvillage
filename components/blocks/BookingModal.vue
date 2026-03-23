<template>
    <div id="_bn_widget_preload" class="bn-widget bn-widget--preload" aria-hidden="true"></div>
    <div v-show="isOpen" class="modal-overlay" @click.self="close">
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
        <div class="modal__footer">
          <p class="modal__hint">Если дальше нужных дат календарь не дает выбрать период, значит все дома на эти даты уже забронированы.</p>
          <h3 class="modal__title"> LAS NUBES VILLAGE — посуточная аренда коттеджей </h3>
        </div>
      </div>
    </div>
  </template>

  <script setup>
  import { ref, onMounted, nextTick } from 'vue'
  import { resolveImage } from '@/utils/resolveImage'
  import Cloud from '@/components/blocks/Cloud.vue' // 👈 твой компонент облака

  const logo = resolveImage('core/header/logo')

  const WIDGET_CONTAINER_ID = '_bn_widget_'
  const PRELOAD_CONTAINER_ID = '_bn_widget_preload'
  const BNOVO_SCRIPT_ID = 'bnovo-widget-script'
  const BNOVO_SCRIPT_SRC = 'https://widget.reservationsteps.ru/js/bnovo.js'

  const isOpen = ref(false)
  const widgetReady = ref(false)
  let resolveWidgetReady
  const createWidgetReadyPromise = () => new Promise((resolve) => { resolveWidgetReady = resolve })
  let widgetReadyPromise = createWidgetReadyPromise()

  const widgetConfig = {
    type: 'vertical',
    uid: '817121e0-85f0-452d-b0b2-265ca9a568c3',
    lang: 'ru',
    width: '300',
    width_mobile: '300',
    background: '#85AEE2',
    background_mobile: '#ffffff',
    bg_alpha: '100',
    bg_alpha_mobile: '100',
    border_color_mobile: '#C6CAD3',
    padding: '24',
    padding_mobile: '24',
    border_radius: '16',
    button_font_size: '14',
    button_height: '42',
    font_type: 'georgia',
    title: 'Забронировать',
    title_color: '#FFFFFF',
    title_color_mobile: '#242742',
    title_size: '28',
    title_size_mobile: '22',
    inp_color: '#000000',
    inp_bordhover: '#dedfe3',
    inp_bordcolor: '#BCBCBC',
    inp_alpha: '100',
    btn_background: '#46BE78',
    btn_background_over: '#FFFFFF',
    btn_textcolor: '#FFFFFF',
    btn_textover: '#46BE78',
    btn_bordcolor: '#46BE78',
    btn_bordhover: '#46BE78',
    min_age: '0',
    max_age: '17',
    adults_default: '1',
    cancel_color: '#FFFFFF',
    switch_mobiles_width: '800',
  }

  const markWidgetReady = () => {
    if (!widgetReady.value) {
      widgetReady.value = true
      resolveWidgetReady?.()
    }
  }

  const preloadWidget = () => {
    if (window.Bnovo_Widget && typeof window.Bnovo_Widget.open === 'function') {
      window.Bnovo_Widget.open(PRELOAD_CONTAINER_ID, widgetConfig)
    }
  }

  const clearContainerById = (id) => {
    if (typeof document === 'undefined') return

    const container = document.getElementById(id)
    if (container) {
      container.innerHTML = ''
    }
  }

  const clearWidgetContainer = () => {
    clearContainerById(WIDGET_CONTAINER_ID)
  }

  const resetWidgetState = () => {
    widgetReady.value = false
    widgetReadyPromise = createWidgetReadyPromise()
    clearContainerById(WIDGET_CONTAINER_ID)
    clearContainerById(PRELOAD_CONTAINER_ID)
  }

  const loadBnovoScript = () => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return

    if (window.Bnovo_Widget) return

    const existingScript = document.getElementById(BNOVO_SCRIPT_ID)
    if (existingScript) return

    const script = document.createElement('script')
    script.id = BNOVO_SCRIPT_ID
    script.src = BNOVO_SCRIPT_SRC
    script.async = true
    document.head.appendChild(script)
  }

  const ensureWidgetLoaded = () => {
    if (typeof window === 'undefined' || widgetReady.value) return

    if (window.Bnovo_Widget && typeof window.Bnovo_Widget.init === 'function') {
      window.Bnovo_Widget.init(() => {
        preloadWidget()
        markWidgetReady()
      })
      return
    }

    loadBnovoScript()
    setTimeout(ensureWidgetLoaded, 300)
  }

  const waitForWidget = async () => {
    if (!widgetReady.value) {
      await widgetReadyPromise
    }
  }

  const open = async () => {
    ensureWidgetLoaded()
    await waitForWidget()

    isOpen.value = true

    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = scrollBarWidth + 'px'

    await nextTick()

    if (window.Bnovo_Widget && typeof window.Bnovo_Widget.open === 'function') {
      clearWidgetContainer()
      window.Bnovo_Widget.open(WIDGET_CONTAINER_ID, widgetConfig)
    }
  }

  const close = () => {
    isOpen.value = false
    document.body.style.overflow = ''
    document.body.style.paddingRight = ''

    resetWidgetState()
    ensureWidgetLoaded()
  }

  onMounted(async () => {
    await nextTick()
    ensureWidgetLoaded()
    window.openBooking = open
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

.bn-widget--preload {
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
}


.modal__logo {
    width: 120px;
    margin: 0 auto;
}

  .modal__footer {
    position: absolute;
    right: 20px;
    bottom: 16px;
    left: 20px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 14px 18px;
    border-radius: 18px;
    background: rgba(58, 86, 128, 0.84);
    backdrop-filter: blur(8px);
    box-shadow: 0 10px 30px rgba(18, 30, 56, 0.22);
    pointer-events: none;
  }

  .modal__hint {
    max-width: 540px;
    margin: 0;
    color: rgba(255, 255, 255, 0.96);
    font-size: 14px;
    line-height: 1.45;
    text-align: center;
    text-wrap: balance;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.18);
  }

  .modal__title {
    margin: 0;
    font-family: var(--font-secondary);
    font-size: 24px;
    line-height: 1.15;
    text-align: center;
    color: var(--white-color);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.18);
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

  @media (max-width: 768px) {
    .modal__footer {
      right: 12px;
      bottom: 12px;
      left: 12px;
      gap: 8px;
      padding: 12px 14px;
    }

    .modal__hint {
      font-size: 12px;
      line-height: 1.4;
    }

    .modal__title {
      font-size: 18px;
    }
  }
  </style>
