<template>
  <div :class="`${baseClasses} ${className}`">
    <slot />
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  className: {
    type: String,
    default: '',
  },
});

const baseClasses = 'ark-card';
</script>
