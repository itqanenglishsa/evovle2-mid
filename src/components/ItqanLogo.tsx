import React from 'react';

interface ItqanLogoProps {
  className?: string;
  variant?: 'color' | 'white' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const ItqanLogo: React.FC<ItqanLogoProps> = ({
  className = '',
  variant = 'color',
  size = 'md',
  showSubtitle = true
}) => {
  // Height presets based on brand guidelines (32px, 64px, 96px, 128px)
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10 sm:h-11',
    lg: 'h-14',
    xl: 'h-20'
  }[size];

  const primaryBlue = variant === 'white' ? '#FFFFFF' : '#214ecf';
  const accentLightBlue = variant === 'white' ? 'rgba(255,255,255,0.75)' : '#84a5f2';
  const textDark = variant === 'white' ? '#FFFFFF' : '#1e2433';
  const orangeDot = variant === 'white' ? '#fcded6' : '#ea9835';

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Brand Icon (Stylized Qaf / Loop with English E swirl) */}
      <svg
        className={`${sizeClasses} w-auto shrink-0 aspect-[1.15/1]`}
        viewBox="0 0 100 85"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="شعار إتقان الإنجليزية - Itqan English"
      >
        {/* Soft background glow / loop */}
        <path
          d="M38 12C20.3 12 6 26.3 6 44C6 61.7 20.3 76 38 76C46.8 76 54.8 72.4 60.6 66.6L48.2 54.2C45.6 56.8 42 58.4 38 58.4C30 58.4 23.6 52 23.6 44C23.6 36 30 29.6 38 29.6C46 29.6 52.4 36 52.4 44H69.9C69.9 26.3 55.7 12 38 12Z"
          fill={primaryBlue}
        />
        <path
          d="M58 24C52.5 16.5 44 12 38 12C20.3 12 6 26.3 6 44C6 52.8 9.6 60.8 15.4 66.6L27.8 54.2C25.2 51.6 23.6 48 23.6 44C23.6 36 30 29.6 38 29.6C44 29.6 49.2 33.3 51.5 38.6L64.5 28C62.8 26.5 60.5 25.1 58 24Z"
          fill={accentLightBlue}
          opacity="0.85"
        />
        {/* Accent dot on emblem */}
        <circle cx="82" cy="44" r="7" fill={orangeDot} />
      </svg>

      {/* Typography: إتقان / ENGLISH */}
      <div className="flex flex-col text-right">
        <div className="flex items-baseline gap-1">
          <span
            style={{ color: textDark, fontFamily: 'Almarai, sans-serif' }}
            className="font-extrabold text-xl sm:text-2xl leading-none tracking-tight"
          >
            إتقان
          </span>
          <span
            style={{ color: orangeDot }}
            className="text-lg sm:text-xl font-black leading-none"
          >
            .
          </span>
        </div>
        {showSubtitle && (
          <span
            style={{
              color: variant === 'white' ? 'rgba(255,255,255,0.85)' : '#214ecf',
              fontFamily: 'Garet, "Plus Jakarta Sans", sans-serif'
            }}
            className="text-[9px] sm:text-[10.5px] font-extrabold tracking-[0.22em] uppercase leading-none mt-0.5"
          >
            ENGLISH
          </span>
        )}
      </div>
    </div>
  );
};
