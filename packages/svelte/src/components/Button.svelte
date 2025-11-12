<script>
  export let variant = 'primary';
  let className = '';
  export { className as class };

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

<button class="{`${baseClasses} ${variantClasses[variant]} ${className}`}" on:click>
  <slot />
</button>
