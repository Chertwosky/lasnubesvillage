<template>
    <!-- принимаем класс извне -->
    <button :class="customClass" type="button" @click="handleClick">
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

  const emit = defineEmits(['click'])

  const handleClick = (event) => {
    emit('click', event)
    if (window.openBooking) {
      window.openBooking()
    } else {
      console.warn("Bnovo widget ещё не готов")
    }
  }
  </script>
