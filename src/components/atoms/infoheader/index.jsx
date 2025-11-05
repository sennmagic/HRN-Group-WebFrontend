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
    // Check if mobile or reduced motion preferred
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // If mobile or reduced motion, show immediately
    if (isMobile || prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    // Check if element is already in viewport on mount
    const checkInitialVisibility = () => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        if (isInViewport) {
          setIsVisible(true);
          return true;
        }
      }
      return false;
    };

    // If already visible, don't set up observer
    if (checkInitialVisibility()) {
      return;
    }

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

    // Fallback: ensure visibility after a delay if observer doesn't fire
    const fallbackTimeout = setTimeout(() => {
      if (!isVisible && headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 2) {
          setIsVisible(true);
        }
      }
    }, 1000);

    return () => {
      clearTimeout(fallbackTimeout);
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
