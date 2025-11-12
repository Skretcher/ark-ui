<template>
  <button :class="`${baseClasses} ${variantClasses[variant]} ${className}`">
    <slot />
  </button>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'success', 'danger', 'warning', 'info'].includes(value),
  },
  className: {
    type: String,
    default: '',
  },
});

const baseClasses = 'ark-button';
const variantClasses = {
  primary: 'ark-button-primary',
  secondary: 'ark-button-secondary',
  success: 'ark-button-success',
  danger: 'ark-button-danger',
  warning: 'ark-button-warning',
  info: 'ark-button-info',
};
</script>
