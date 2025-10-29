<template>
  <h2
    class="section-badge"
    :class="[`section-badge--${align}`, { 'section-badge--fade': fade }]"
    :style="{ '--badge-bg': gradient }"
  >
    <slot>{{ label }}</slot>
  </h2>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'

const props = withDefaults(
  defineProps<{
    label?: string
    gradient?: string
    align?: 'left' | 'center' | 'right'
    fade?: boolean
  }>(),
  {
    label: '',
    gradient: 'linear-gradient(90deg, #0e0b27 0%, #0a0820 100%)',
    align: 'left',
    fade: true,
  }
)

const { label, gradient, align, fade } = toRefs(props)
</script>

<style scoped>
.section-badge {
  --badge-bg: linear-gradient(90deg, #0e0b27 0%, #0a0820 100%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 10px 28px 12px;
  margin: 0 0 28px 0;
  border-radius: 999px;
  background: var(--badge-bg);
  color: var(--white-color);
  font-family: var(--font-secondary);
  font-size: calc(var(--fontsize-unusual) * 1.05);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  line-height: 1;
  position: relative;
  overflow: hidden;
}

.section-badge--left {
  margin-right: auto;
}

.section-badge--center {
  margin-left: auto;
  margin-right: auto;
}

.section-badge--right {
  margin-left: auto;
}

.section-badge--fade::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(110deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0));
  mix-blend-mode: screen;
  pointer-events: none;
}

@media (max-width: 640px) {
  .section-badge {
    font-size: calc(var(--fontsize-unusual) * 0.85);
    padding: 8px 22px 10px;
    letter-spacing: 0.08em;
  }
}
</style>
