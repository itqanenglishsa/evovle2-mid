import React from 'react';
// استيراد الصورة من مجلد src/assets/ - تأكد من صحة المسار بناءً على مكان ملف الشعار لديك
import logoImage from '../assets/logo.png';

interface ItqanLogoProps {
  className?: string;
  variant?: 'color' | 'white' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const ItqanLogo: React.FC<ItqanLogoProps> = ({
  className = '',
  size = 'md',
  // showSubtitle لم تعد مستخدمة في الشعار الجديد ولكن تم تركها لتجنب أخطاء الاستدعاء في ملفات أخرى
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
        // استخدام المتغير المستورد بدلاً من المسار الثابت
        src={logoImage} 
        alt="شعار إتقان الإنجليزية - Itqan English" 
        className={`${sizeClasses} w-auto shrink-0 object-contain`} 
      />
    </div>
  );
};
