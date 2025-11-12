<template>
  <input :class="`${baseClasses} ${className}`" />
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  className: {
    type: String,
    default: '',
  },
});

const baseClasses = 'ark-input';
</script>
