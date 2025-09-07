import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


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
    <Link href="/" className={`flex items-center ${className} cursor-pointer`}>
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
    </Link>
  );
};

export default Logo;
