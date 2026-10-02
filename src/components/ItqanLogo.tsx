import React from 'react';

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
  // إعدادات الارتفاع المتوافقة مع الأحجام المختلفة
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10 sm:h-11',
    lg: 'h-14',
    xl: 'h-20'
  }[size];

  // استخدام import.meta.env.BASE_URL لضمان عمل المسار على GitHub Pages أو أي استضافة فرعية/رئيسية
  const logoSrc = `${import.meta.env.BASE_URL}logo.png`.replace(/\/+/g, '/');

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <img 
        src={logoSrc} 
        alt="شعار إتقان الإنجليزية - Itqan English" 
        className={`${sizeClasses} w-auto shrink-0 object-contain`} 
      />
    </div>
  );
};
