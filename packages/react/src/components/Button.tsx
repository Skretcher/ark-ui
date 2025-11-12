import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((
  { className, variant = 'primary', ...props },
  ref
) => {
  const baseClasses = 'ark-button';
  const variantClasses = {
    primary: 'ark-button-primary',
    secondary: 'ark-button-secondary',
    success: 'ark-button-success',
    danger: 'ark-button-danger',
    warning: 'ark-button-warning',
    info: 'ark-button-info',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = 'Button';