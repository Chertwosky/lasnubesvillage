<template>
  <h2
    class="section-badge section-badge--fade"
    :class="badgeClasses"
    :style="badgeStyle"
  >
    <slot>{{ text }}</slot>
  </h2>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  gradient: {
    type: String,
    default: '',
  },
  align: {
    type: String as () => 'left' | 'center' | 'right',
    default: 'center',
  },
})

const badgeStyle = computed(() => ({
  ...(props.gradient ? { '--badge-bg': props.gradient } : {}),
}))

const badgeClasses = computed(() => ({
  'section-badge--right': props.align === 'right',
  'section-badge--left': props.align === 'left',
  'section-badge--center': props.align === 'center',
}))
</script>
