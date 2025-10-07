import React, { useEffect, useRef, useState } from 'react';

const InfoHeader = ({ 
  text, 
  className = '', 
  align = 'left', 
  size = 'medium',
  variant = 'default', // default, accent, muted
  titleClass = '',
  borderClass = 'border-primary/20'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), 100);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  // Get alignment class
  const alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }[align] || 'text-left';

  // Get size classes
  const sizeClasses = {
    small: 'text-[20px]',
    medium: 'text-[32px]',
    large: 'text-[40px]'
  }[size] || 'text-[32px]';

  // Get variant classes
  const variantClasses = {
    default: 'text-gray-800',
    accent: 'text-blue-600',
    muted: 'text-gray-600'
  }[variant] || 'text-gray-800';

  return (
    <h2 
      ref={headerRef}
      className={`font-semibold ${sizeClasses} leading-tight tracking-tight mb-6 ${alignmentClass} ${variantClasses} ${titleClass} ${className} transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-8 scale-95'
      }`}
      style={{
        fontFamily: 'var(--font-plus-jakarta-sans)',
        fontWeight: 600,
        lineHeight: '120%',
        letterSpacing: '-0.5%'
      }}
    >
      {text}
    </h2>
  );
};

export default InfoHeader;
