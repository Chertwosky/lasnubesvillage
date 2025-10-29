<template>
  <h2
    class="section-badge"
    :class="[`section-badge--${align}`, { 'section-badge--fade': fade }]"
    :style="badgeStyle"
  >
    <slot />
  </h2>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue'

const props = withDefaults(
  defineProps<{
    align?: 'left' | 'center' | 'right'
    fade?: boolean
    background?: string
    padRight?: string
    minWidth?: string
    minHeight?: string
  }>(),
  {
    align: 'center',
    fade: true,
    background: '#111',
    padRight: '80px',
    minWidth: '360px',
    minHeight: '50px',
  }
)

const badgeStyle = computed(() => ({
  '--badge-bg': props.background,
  '--badge-pad-right': props.align === 'right' ? props.padRight : undefined,
  '--badge-min-w': props.minWidth,
  '--badge-min-h': props.minHeight,
}))

const { align, fade } = toRefs(props)
</script>

<style scoped>
.section-badge {
  background: var(--badge-bg, #111);
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 28px;
  border-radius: 18px 90px 0 18px;
  font-family: var(--font-secondary);
  font-size: calc(var(--fontsize-unusual) * 2);
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  position: relative;
  overflow: hidden;
  min-width: var(--badge-min-w, 360px);
  min-height: var(--badge-min-h, 50px);
  box-sizing: border-box;
}

.section-badge--left {
  justify-content: flex-start;
}

.section-badge--center {
  justify-content: center;
}

.section-badge--right {
  justify-content: flex-end;
  padding-right: var(--badge-pad-right, 80px);
}

.section-badge.section-badge--fade {
  -webkit-mask-image: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.35) 10%,
    rgba(0, 0, 0, 0.7) 18%,
    rgba(0, 0, 0, 1) 28%
  );
  mask-image: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.2) 20%,
    rgba(0, 0, 0, 0.8) 35%,
    rgba(0, 0, 0, 1) 50%
  );
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}
</style>
