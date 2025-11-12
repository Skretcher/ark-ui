import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>((
  { className, ...props },
  ref
) => {
  const baseClasses = 'ark-input';

  return (
    <input
      className={`${baseClasses} ${className}`}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = 'Input';