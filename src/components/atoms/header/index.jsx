"use client"
import React, { useEffect, useRef, useState } from 'react';

const Header = ({ 
  text, 
  className = '', 
  align = 'left', 
  size = 'medium',
  variant = 'large', // 'large' for main headers, 'small' for tag headers, 'with-badge' for header with badge
  badge = null, // badge text to display above the main header
  // Optional dynamic style overrides (defaults preserve existing colors)
  titleClass = '',
  badgeClass = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Enhanced animation with multiple states
        if (entry.isIntersecting) {
          setIsAnimating(true);
          setTimeout(() => {
            setIsVisible(true);
            setIsAnimating(false);
          }, 150);
        } else {
          setIsAnimating(true);
          setTimeout(() => {
            setIsVisible(false);
            setIsAnimating(false);
          }, 100);
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
    small: 'text-[28px]',
    medium: 'text-[48px]'
  }[size] || 'text-[48px]';

  // Small header variant (tag/badge style)
  if (variant === 'small') {
    return (
      <div 
        ref={headerRef}
        className={`inline-block ${className} ${badgeClass || ''} transition-all duration-700 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0 scale-100 blur-0' 
            : isAnimating
            ? 'opacity-0 translate-y-12 scale-95 blur-sm'
            : 'opacity-0 translate-y-8 scale-95 blur-sm'
        }`}
        style={{
          width: '160px',
          height: '42px',
          borderRadius: '42px',
          border: '1px solid #0000004D',
          paddingTop: '15px',
          paddingRight: '20px',
          paddingBottom: '15px',
          paddingLeft: '20px',
          gap: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'transparent',
          opacity: 1,
          transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(32px) scale(0.95)',
          filter: isVisible ? 'blur(0px)' : 'blur(2px)',
          transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <span 
          className={`text-sm font-medium ${badgeClass} block w-full`}
          style={{
            fontFamily: 'var(--font-plus-jakarta-sans)',
            fontWeight: 500,
            lineHeight: '100%',
            letterSpacing: '0%',
            color: badgeClass ? undefined : '#ED1B24'
          }}
        >
          {text || 'Who We Are'}
        </span>
      </div>
    );
  }

  // Header with badge variant
  if (variant === 'with-badge') {
    return (
      <div 
        ref={headerRef}
        className={`${className} transition-all duration-700 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0 scale-100 blur-0' 
            : isAnimating
            ? 'opacity-0 translate-y-12 scale-95 blur-sm'
            : 'opacity-0 translate-y-8 scale-95 blur-sm'
        }`}
        style={{
          transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(32px) scale(0.95)',
          filter: isVisible ? 'blur(0px)' : 'blur(2px)',
          transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        {/* Badge */}
        {badge && (
          <div className={`mb-6 ${alignmentClass} ${badgeClass || ''}`}>
            <div 
              className={`inline-block ${badgeClass ? `border ${badgeClass}` : ''}`}
              style={{
                width: '160px',
                height: '42px',
                borderRadius: '42px',
                border: badgeClass ? undefined : '1px solid #0000004D',
                paddingTop: '15px',
                paddingRight: '20px',
                paddingBottom: '15px',
                paddingLeft: '20px',
                gap: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent'
              }}
            >
              <span 
                className={`text-sm font-medium ${badgeClass} block w-full text-center`}
                style={{
                  fontFamily: 'var(--font-plus-jakarta-sans)',
                  fontWeight: 500,
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: badgeClass ? undefined : '#ED1B24'
                }}
              >
                {badge}
              </span>
            </div>
          </div>
        )}

        {/* Main Title */}
        <h2 
          className={`font-bold ${sizeClasses} leading-tight tracking-tight ${alignmentClass} ${titleClass}`}
          style={{
            fontFamily: 'var(--font-plus-jakarta-sans)',
            fontWeight: 700,
            lineHeight: '100%',
            letterSpacing: '-1%',
            color: titleClass ? undefined : '#041926'
          }}
        >
          {text}
        </h2>
      </div>
    );
  }

  // Large header variant (main headings)
  return (
    <h1 
      ref={headerRef}
      className={`font-bold ${sizeClasses} leading-tight tracking-tight mb-8 ${alignmentClass} ${titleClass} ${className} transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100 blur-0' 
          : isAnimating
          ? 'opacity-0 translate-y-12 scale-95 blur-sm'
          : 'opacity-0 translate-y-8 scale-95 blur-sm'
      }`}
      style={{
        fontFamily: 'var(--font-plus-jakarta-sans)',
        fontWeight: 700,
        lineHeight: '100%',
        letterSpacing: '-1%',
        color: titleClass ? undefined : '#041926',
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(32px) scale(0.95)',
        filter: isVisible ? 'blur(0px)' : 'blur(2px)',
        transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      {text ? (
        <span className="block">
          {text}
        </span>
      ) : (
        <>
          <span className="block">
            Pioneering nepal-japan
          </span>
          <span className="block">
            skilled workforce solutions
          </span>
        </>
      )}
    </h1>
  );
};

export default Header;