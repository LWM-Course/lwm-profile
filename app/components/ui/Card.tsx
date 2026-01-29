import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  overflow?: 'hidden' | 'visible';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  padding = 'md',
  overflow = 'hidden',
}) => {
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const overflows = {
    hidden: 'overflow-hidden',
    visible: 'overflow-visible',
  };

  return (
    <div className={`bg-white rounded-2xl shadow-lg border border-gray-100 ${overflows[overflow]} ${paddings[padding]} ${className}`}>
      {children}
    </div>
  );
};
