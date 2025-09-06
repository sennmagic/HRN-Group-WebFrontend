import React from 'react';

const TextHeader = ({ 
  text, 
  specialWordsIndices = "0", 
  align = "left", 
  className = "", 
  width = 300 
}) => {
  // Parse special words indices (comma-separated string)
  const specialIndices = specialWordsIndices.split(',').map(idx => parseInt(idx.trim()));
  
  // Split text into words
  const words = text.split(' ');
  
  // Get alignment class
  const alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }[align] || 'text-left';

  return (
    <h2 
      className={`text-2xl md:text-3xl font-bold text-gray-800 ${alignmentClass} ${className}`}
      style={{ width: `${width}px`, maxWidth: '100%' }}
    >
      {words.map((word, index) => (
        <span key={index}>
          {specialIndices.includes(index) ? (
            <span className="text-blue-600">{word}</span>
          ) : (
            word
          )}
          {index < words.length - 1 && ' '}
        </span>
      ))}
    </h2>
  );
};

export default TextHeader;
