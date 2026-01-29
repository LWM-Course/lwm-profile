import React from 'react';
import Link from 'next/link';

interface BaseButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
  className?: string;
}

type ButtonAsButton = BaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
};

type ButtonAsLink = BaseButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-bold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-brand-orange text-white hover:bg-orange-600 focus:ring-brand-orange',
    secondary: 'bg-brand-yellow text-gray-900 hover:bg-yellow-500 focus:ring-brand-yellow',
    outline: 'border-2 border-brand-orange text-brand-orange hover:bg-brand-orange-light focus:ring-brand-orange',
    ghost: 'text-gray-600 hover:bg-gray-100 hover:text-gray-900',
  };
  
  const sizes = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg',
  };

  const width = props.fullWidth ? 'w-full' : '';
  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${width} ${className}`;

  if (props.href) {
    const { href, ...linkProps } = props as ButtonAsLink;
    const isExternal = href.startsWith('http') || href.startsWith('mailto:');
    
    if (isExternal) {
      return (
        <a href={href} className={combinedClassName} {...linkProps}>
          {children}
        </a>
      );
    }
    
    return (
      <Link href={href} className={combinedClassName} {...(linkProps as any)}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={combinedClassName}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};
