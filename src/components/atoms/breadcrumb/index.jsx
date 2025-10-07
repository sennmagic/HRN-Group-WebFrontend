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
      className={`min-w-fit max-w-max h-[44px] rounded-[42px] border border-primary/20 bg-white/90 backdrop-blur-sm px-4 flex items-center shadow-sm ${className}`}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-1 text-sm whitespace-nowrap">
        {breadcrumbItems.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="w-3 h-3 text-primary/60 mx-1 flex-shrink-0" />
            )}
            <Link
              href={item.href}
              className={`flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors whitespace-nowrap ${
                index === breadcrumbItems.length - 1 ? 'text-primary font-semibold' : ''
              }`}
            >
              {item.icon && <item.icon className="w-3 h-3 flex-shrink-0" />}
              <span className="whitespace-nowrap">{item.label}</span>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );

  if (withContainer) {
    return (
      <div 
        className="w-full h-[449px] flex items-center justify-center"
        style={{
          background: 'linear-gradient(103.03deg, #79D2FF 2.47%, #EFF9FF 99.65%)'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* Breadcrumb */}
          <div className={`mb-8 flex ${alignmentClass}`}>
            {breadcrumbNav}
          </div>
          
          {/* Title */}
          {title && (
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              {title}
            </h1>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`max-w-7xl mx-auto px-4 flex ${alignmentClass}`}>
      {breadcrumbNav}
    </div>
  );
};

export default Breadcrumb;
