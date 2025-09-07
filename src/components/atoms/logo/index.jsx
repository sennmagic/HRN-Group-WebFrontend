import React from 'react';
import Image from 'next/image';


const Logo = ({ 
  size = 'md', 
  showText = true, 
  className = '' 
}) => {
  const sizeClasses = {
    sm: { image: 'w-20 h-10', text: 'text-lg' },
    md: { image: 'w-[130px] h-[70px]', text: 'text-xl' },
    lg: { image: 'w-[150px] h-[76px]', text: 'text-2xl' }
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`flex items-center ${className}`}>
      <div className={`${currentSize.image} relative mr-3`}>
        <Image
          src="/logo.png"
          alt="HRN Group Logo"
          fill
          className="object-contain"
        />
      </div>
      {showText && (
        <div className={`${currentSize.text} font-bold`}>
          <span className="text-secondary">HR</span>
          <span className="text-primary">N</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
