<template>
  <h2 class="section-badge section-badge--fade" :style="badgeVars">
    <slot />
  </h2>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  gradient: {
    type: String,
    default: ''
  },
  padRight: {
    type: String,
    default: ''
  },
  minWidth: {
    type: String,
    default: ''
  },
  minHeight: {
    type: String,
    default: ''
  }
})

const badgeVars = computed(() => ({
  ...(props.gradient ? { '--badge-bg': props.gradient } : {}),
  ...(props.padRight ? { '--badge-pad-right': props.padRight } : {}),
  ...(props.minWidth ? { '--badge-min-w': props.minWidth } : {}),
  ...(props.minHeight ? { '--badge-min-h': props.minHeight } : {})
}))
</script>

<style scoped>
.section-badge {
  margin: 0;
  background: var(--badge-bg, #111);
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  padding: 16px 28px;
  padding-right: var(--badge-pad-right, 40px);
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
  max-width: 100%;
  box-sizing: border-box;
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
