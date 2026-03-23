<template>
    <!-- принимаем класс извне -->
    <button :class="customClass" @click="openBooking">
      <slot>Забронировать</slot>
    </button>
  </template>

  <script setup>
  const props = defineProps({
    customClass: {
      type: String,
      default: ''
    }
  })

  const openBooking = () => {
    if (typeof window === 'undefined') return

    if (window.openBooking) {
      window.openBooking()
      return
    }

    window.dispatchEvent(new CustomEvent('lasnubes:open-booking'))
    console.warn('Bnovo widget ещё не готов, повторяем открытие через событие')
  }
  </script>
