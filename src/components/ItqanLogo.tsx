import React from 'react';
import logoImage from '../assets/logo.png'; // تأكد أن ملف logo.png موجود داخل مجلد src/assets/

interface ItqanLogoProps {
  className?: string;
  variant?: 'color' | 'white' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean; // تم الاحتفاظ بها لتتوافق مع بقية الملفات في مشروعك
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
        src={logoImage} 
        alt="شعار إتقان الإنجليزية - Itqan English" 
        className={`${sizeClasses} w-auto shrink-0 object-contain`} 
      />
    </div>
  );
};
