import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb = ({ 
  items = [],
  className = '',
  showHome = true,
  title = '',
  withContainer = false,
  alignmentClass = 'justify-center'
}) => {
  const breadcrumbItems = showHome 
    ? [{ label: 'Home', href: '/', icon: Home }, ...items]
    : items;

  const breadcrumbNav = (
    <nav 
      className={`min-w-fit max-w-full h-auto min-h-[44px] rounded-[42px] border border-primary/20 bg-white/90 backdrop-blur-sm px-2 sm:px-4 py-2 sm:py-0 flex items-center shadow-sm ${className}`}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center flex-wrap gap-x-1 gap-y-1 sm:space-x-1 sm:gap-y-0 text-xs sm:text-sm">
        {breadcrumbItems.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="w-3 h-3 text-primary/60 mx-0.5 sm:mx-1 flex-shrink-0" />
            )}
            <Link
              href={item.href}
              className={`flex items-center space-x-0.5 sm:space-x-1 text-gray-700 hover:text-primary transition-colors ${
                index === breadcrumbItems.length - 1 ? 'text-primary font-semibold' : ''
              }`}
            >
              {item.icon && <item.icon className="w-3 h-3 flex-shrink-0" />}
              <span className="break-words sm:whitespace-nowrap">{item.label}</span>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );

  if (withContainer) {
    return (
      <div 
        className="w-full min-h-[300px] sm:h-[400px] md:h-[449px] flex items-center justify-center py-8 sm:py-0"
        style={{
          background: 'linear-gradient(103.03deg, #79D2FF 2.47%, #EFF9FF 99.65%)'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          {/* Breadcrumb */}
          <div className={`mb-6 sm:mb-8 flex ${alignmentClass} overflow-x-auto pb-2 sm:pb-0`}>
            {breadcrumbNav}
          </div>
          
          {/* Title */}
          {title && (
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight px-2 sm:px-0">
              {title}
            </h1>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex ${alignmentClass} overflow-x-auto pb-2 sm:pb-0`}>
      {breadcrumbNav}
    </div>
  );
};

export default Breadcrumb;
