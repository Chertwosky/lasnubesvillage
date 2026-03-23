<template>
  <div v-show="isOpen" class="modal-overlay" @click.self="close">
    <div class="modal">
      <button class="modal__close" @click="close">✖</button>
      <img :src="logo" alt="Логотип" class="modal__logo" draggable="false" />

      <Cloud width="120px" top="4%" left="10%" flipped class="cloud_modal" />
      <Cloud width="140px" top="14%" right="14%" flipped class="cloud_modal" />
      <Cloud width="130px" top="40%" right="2%" class="cloud_modal" />
      <Cloud width="130px" top="45%" left="5%" class="cloud_modal" />
      <Cloud width="160px" bottom="14%" right="10%" class="cloud_modal" />
      <Cloud width="170px" bottom="4%" right="65%" flipped class="cloud_modal" />

      <div id="_bn_widget_" class="bn-widget"></div>
      <p class="modal__hint">
        Если дальше нужных дат календарь не дает выбрать период, значит все дома уже заняты.
      </p>
      <h3 class="modal__title">LAS NUBES VILLAGE — посуточная аренда коттеджей</h3>
    </div>
  </div>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue'
import Cloud from '@/components/blocks/Cloud.vue'
import { resolveImage } from '@/utils/resolveImage'

const logo = resolveImage('core/header/logo')

const WIDGET_CONTAINER_ID = '_bn_widget_'
const BNOVO_SCRIPT_SRC = 'https://widget-7.staging.bnovo.ru/js/bnovo.staging.js'

const isOpen = ref(false)
let widgetInitPromise = null
let scriptLoadPromise = null

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

const clearWidgetContainer = () => {
  if (typeof document === 'undefined') return

  const container = document.getElementById(WIDGET_CONTAINER_ID)
  if (container) {
    container.innerHTML = ''
  }
}

const loadBnovoScript = () => {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('Bnovo widget can only be loaded in the browser'))
  }

  if (window.Bnovo_Widget) {
    return Promise.resolve(window.Bnovo_Widget)
  }

  if (scriptLoadPromise) {
    return scriptLoadPromise
  }

  scriptLoadPromise = new Promise((resolve, reject) => {
    const existingScript = document.querySelector('script[data-bnovo-widget="true"]')

    if (existingScript) {
      existingScript.addEventListener('load', () => resolve(window.Bnovo_Widget), { once: true })
      existingScript.addEventListener('error', () => reject(new Error('Failed to load Bnovo widget script')), { once: true })
      return
    }

    const script = document.createElement('script')
    script.src = BNOVO_SCRIPT_SRC
    script.async = true
    script.dataset.bnovoWidget = 'true'
    script.onload = () => resolve(window.Bnovo_Widget)
    script.onerror = () => reject(new Error('Failed to load Bnovo widget script'))
    document.head.appendChild(script)
  })

  return scriptLoadPromise
}

const initWidget = async () => {
  if (widgetInitPromise) {
    return widgetInitPromise
  }

  widgetInitPromise = loadBnovoScript().then(() => new Promise((resolve, reject) => {
    if (!window.Bnovo_Widget || typeof window.Bnovo_Widget.init !== 'function') {
      reject(new Error('Bnovo widget API is unavailable after script load'))
      return
    }

    window.Bnovo_Widget.init(() => {
      resolve(window.Bnovo_Widget)
    })
  }))

  return widgetInitPromise
}

const lockBodyScroll = () => {
  const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth
  document.body.style.overflow = 'hidden'
  document.body.style.paddingRight = `${scrollBarWidth}px`
}

const unlockBodyScroll = () => {
  document.body.style.overflow = ''
  document.body.style.paddingRight = ''
}

const open = async () => {
  isOpen.value = true
  lockBodyScroll()

  await nextTick()

  try {
    await initWidget()
    clearWidgetContainer()
    window.Bnovo_Widget.open(WIDGET_CONTAINER_ID, widgetConfig)
  } catch (error) {
    console.error('Не удалось открыть Bnovo widget', error)
    close()
  }
}

const close = () => {
  isOpen.value = false
  unlockBodyScroll()
  clearWidgetContainer()
}

onMounted(() => {
  loadBnovoScript().catch((error) => {
    console.error('Не удалось заранее загрузить Bnovo widget', error)
  })

  window.openBooking = open
})
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
}

.modal {
  background-color: var(--back-color);
  padding: 40px 30px 96px;
  border-radius: 16px;
  max-width: 800px;
  min-height: 640px;
  width: 90%;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: visible;
}

.bn-widget {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  margin: -10px auto 0 !important;
}

.modal__logo {
  width: 120px;
  margin: 0 auto;
}

.modal__hint {
  margin: 12px auto 0;
  max-width: 560px;
  color: var(--white-color);
  font-size: 14px;
  line-height: 1.45;
  text-align: center;
}

.modal__title {
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 24px;
  font-family: var(--font-secondary);
  font-size: 26px;
  text-align: center;
  color: var(--white-color);
}

.modal__close {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: transparent;
  font-size: 20px;
  cursor: pointer;
  color: var(--white-color);
}

.cloud {
  z-index: 0;
}

.cloud_modal {
  z-index: 0 !important;
}

@media (max-width: 768px) {
  .modal {
    min-height: 640px;
    padding: 32px 16px 88px;
  }

  .modal__hint {
    margin-top: 8px;
    font-size: 13px;
  }

  .modal__title {
    left: 16px;
    right: 16px;
    bottom: 16px;
    font-size: 20px;
  }
}
</style>
