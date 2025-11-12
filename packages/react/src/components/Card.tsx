import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>((
  { className, ...props },
  ref
) => {
  const baseClasses = 'ark-card';

  return (
    <div
      className={`${baseClasses} ${className}`}
      ref={ref}
      {...props}
    />
  );
});

Card.displayName = 'Card';