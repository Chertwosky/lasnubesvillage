<template>
  <component
    :is="tag"
    class="section-badge section-badge--fade"
    :class="{ 'section-badge--right': align === 'right', 'section-badge--center': align === 'center' }"
    :style="badgeStyle"
  >
    <slot>{{ text }}</slot>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type Align = 'left' | 'center' | 'right'

type Tag = 'h2' | 'h3' | 'div'

const props = withDefaults(
  defineProps<{
    text?: string
    gradient?: string
    align?: Align
    tag?: Tag
  }>(),
  {
    text: '',
    gradient: '',
    align: 'left',
    tag: 'h2'
  }
)

const badgeStyle = computed(() =>
  props.gradient
    ? { '--badge-bg': props.gradient }
    : undefined
)
</script>
