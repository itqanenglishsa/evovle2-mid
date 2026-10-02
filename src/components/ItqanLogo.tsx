import React from 'react';
import logo from '../../logo.png';

interface ItqanLogoProps {
  className?: string;
  variant?: 'color' | 'white' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const ItqanLogo: React.FC<ItqanLogoProps> = ({
  className = '',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10 sm:h-11',
    lg: 'h-14',
    xl: 'h-20',
  }[size];

  return (
    <div
      className={'inline-flex items-center gap-2.5 select-none ' + className}
    >
      <img
        src={logo}
        alt="Itqan English"
        className={sizeClasses + ' w-auto object-contain'}
      />
    </div>
  );
};
