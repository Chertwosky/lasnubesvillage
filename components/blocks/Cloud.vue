<template>
    <img
      :src="cloud"
      alt="cloud"
      class="cloud"
      :style="styleObject"
      draggable="false"
    />
  </template>

  <script setup>
  import cloud from '@/assets/images/core/cloud/cloud.svg'
  import { computed } from 'vue'

  const props = defineProps({
    width: { type: String, default: '150px' },
    top: { type: String, default: 'auto' },
    left: { type: String, default: 'auto' },
    right: { type: String, default: 'auto' },
    bottom: { type: String, default: 'auto' },
    flipped: { type: Boolean, default: false } // 👈 новый проп
  })

  const styleObject = computed(() => ({
    position: 'absolute',
    width: props.width,
    top: props.top,
    left: props.left,
    right: props.right,
    bottom: props.bottom,
    pointerEvents: 'none',
    zIndex: -1,
    transform: props.flipped ? 'scaleX(-1)' : 'none' // 👈 зеркалим
  }))
  </script>

  <style scoped>
  .cloud {
    user-select: none;
    display: block;
    position: absolute;
    z-index: -1;
  }
  </style>
