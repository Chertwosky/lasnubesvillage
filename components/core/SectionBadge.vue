<template>
  <div
    class="section-badge-wrapper"
    :class="{ 'section-badge-wrapper--right': props.align === 'right' }"
  >
    <component
      :is="props.tag"
      class="section-badge section-badge--fade"
      :class="{ 'section-badge--right': props.align === 'right' }"
      :style="badgeStyle"
    >
      <slot>{{ props.text }}</slot>
    </component>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  background: {
    type: String,
    default: '',
  },
  align: {
    type: String,
    default: 'left',
  },
  tag: {
    type: String,
    default: 'h2',
  },
})

const badgeStyle = computed(() =>
  props.background
    ? {
        '--badge-bg': props.background,
      }
    : undefined,
)
</script>

<style scoped>
.section-badge-wrapper {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.section-badge-wrapper--right {
  justify-content: flex-end;
}

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
  width: min(100%, var(--badge-min-w, 360px));
  min-height: var(--badge-min-h, 50px);
  box-sizing: border-box;
  margin: 0;
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

@media (max-width: 640px) {
  .section-badge {
    font-size: calc(var(--fontsize-unusual) * 1.4);
    padding: 12px 20px;
    border-radius: 16px 60px 0 16px;
  }
}
</style>
