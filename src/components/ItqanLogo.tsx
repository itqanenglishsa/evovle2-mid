import React from 'react';

interface ItqanLogoProps {
  className?: string;
  variant?: 'color' | 'white' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean; // تم الاحتفاظ بها لتتوافق مع باقي الملفات في حال تم استدعاؤها
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

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <img 
        src="/logo.png" 
        alt="شعار إتقان الإنجليزية - Itqan English" 
        className={`${sizeClasses} w-auto shrink-0 object-contain`} 
      />
    </div>
  );
};
