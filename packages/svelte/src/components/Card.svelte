<script>
  let className = '';
  export { className as class };

  const baseClasses = 'ark-card';
</script>

<div class="{`${baseClasses} ${className}`}">
  <slot />
</div>
