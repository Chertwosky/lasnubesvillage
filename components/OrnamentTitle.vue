
<script setup lang="ts">
defineProps<{ fullbleed?: boolean }>();
</script>

<template>
  <h2 :class="['ornament-title', fullbleed ? 'fullbleed-title' : '']">
    <span><slot /></span>
  </h2>
</template>
