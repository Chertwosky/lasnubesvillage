<template>
  <h2
    class="section-badge"
    :class="[
      `section-badge--${props.variant}`,
      `section-badge--${props.align}`,
      { 'section-badge--normal-case': !props.uppercase }
    ]"
    :style="{ '--badge-bg': props.gradient }"
  >
    <slot />
  </h2>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'

const props = withDefaults(
  defineProps<{
    gradient?: string
    variant?: 'fade' | 'solid'
    align?: 'left' | 'center' | 'right'
    uppercase?: boolean
  }>(),
  {
    gradient: 'linear-gradient(90deg, #0e0b27 0%, #0a0820 100%)',
    variant: 'fade',
    align: 'left',
    uppercase: true,
  }
)
</script>

<style scoped>
.section-badge {
  --badge-bg: linear-gradient(90deg, #0e0b27 0%, #0a0820 100%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 12px 30px;
  border-radius: 999px;
  background: var(--badge-bg);
  color: var(--white-color);
  font-family: var(--font-secondary);
  font-size: calc(var(--fontsize-unusual) * 1.1);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  margin: 0;
  position: relative;
  box-shadow: 0 18px 36px rgba(8, 23, 52, 0.45);
}

.section-badge--fade::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(255, 255, 255, 0) 55%
  );
  pointer-events: none;
}

.section-badge--solid::after {
  display: none;
}

.section-badge--left {
  margin-right: auto;
}

.section-badge--center {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.section-badge--right {
  margin-left: auto;
}

.section-badge--normal-case {
  text-transform: none;
  letter-spacing: 0.08em;
}

@media (max-width: 640px) {
  .section-badge {
    font-size: calc(var(--fontsize-unusual) * 0.9);
    padding: 10px 24px;
    letter-spacing: 0.12em;
  }
}
</style>
