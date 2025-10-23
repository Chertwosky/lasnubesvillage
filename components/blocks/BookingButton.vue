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
    if (window.openBooking) {
      window.openBooking()
    } else {
      console.warn("Bnovo widget ещё не готов")
    }
  }
  </script>
