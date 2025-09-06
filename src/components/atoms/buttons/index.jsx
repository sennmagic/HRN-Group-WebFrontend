import React from 'react';

const LoadingSpinner = () => (
  <div className="w-4 h-4 border-2 border-transparent border-t-current rounded-full animate-spin" />
);

const Button = ({
  variant = 'primary',
  children,
  isLoading = false,
  disabled = false,
  className = '',
  onClick,
  textColor,
}) => {
  const baseClasses = [
    'rounded-[42px]',
    'flex items-center justify-center',
    'font-medium text-base leading-6',
    'cursor-pointer transition-all duration-200 ease-in-out',
    'border-none outline-none',
    'disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none',
    'hover:not(:disabled):-translate-y-0.5'
  ].join(' ');

  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-light hover:shadow-lg hover:shadow-primary/30',
    secondary: 'bg-secondary text-white hover:bg-secondary-dark hover:shadow-lg hover:shadow-secondary/30',
    outline: 'bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white',
    ghost: 'bg-transparent text-primary hover:bg-primary/10',
  };

  const handleClick = () => {
    if (disabled || isLoading) return;
    onClick?.();
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={{
        height: '57px',
        gap: '10px',
        opacity: 1,
        transform: 'rotate(0deg)',
        paddingTop: '22px',
        paddingRight: '28px',
        paddingBottom: '22px',
        paddingLeft: '28px',
        borderRadius: '42px',
        color: textColor || undefined
      }}
      disabled={disabled || isLoading}
    >
      {isLoading ? <LoadingSpinner /> : children}
    </button>
  );
};

export default Button;