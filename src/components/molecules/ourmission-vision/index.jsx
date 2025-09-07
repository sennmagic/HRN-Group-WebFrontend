import React from 'react';

const OurMissionVision = () => {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl p-8 md:p-12" style={{ backgroundColor: '#DFF1FF' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Side - Text Content */}
            <div className="space-y-8">
              {/* Mission Section */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Our mission
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To empower nepali youth through world-class training, language education, and ethical placement in japan's professional landscape—ensuring long-term success, cultural adaptation, and personal growth.
                </p>
              </div>

              {/* Divider Line */}
              <div className="w-full h-px bg-gray-300"></div>

              {/* Vision Section */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Our vision
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To empower nepali youth through world-class training, language education, and ethical placement in japan's professional landscape ensuring long-term success, cultural adaptation, and personal growth.
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md h-96 bg-gray-200 rounded-xl overflow-hidden">
                {/* Placeholder for the light bulb image */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 mx-auto mb-4 bg-yellow-400 rounded-full flex items-center justify-center">
                      <svg className="w-12 h-12 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M11 3a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0V6h1a1 1 0 100-2h-1V3zM8 12a1 1 0 100 2h4a1 1 0 100-2H8z" />
                      </svg>
                    </div>
                    <p className="text-sm opacity-75">Light Bulb Concept</p>
                    <p className="text-xs opacity-50 mt-2">Innovation & Growth</p>
                  </div>
                </div>
                
                {/* Overlay graphics representing charts and data */}
                <div className="absolute top-4 right-4 w-16 h-16 opacity-20">
                  <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
                    <path d="M3 13h2v8H3v-8zm4-6h2v14H7V7zm4-4h2v18h-2V3zm4 8h2v10h-2V11z"/>
                  </svg>
                </div>
                <div className="absolute bottom-4 left-4 w-12 h-12 opacity-20">
                  <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMissionVision;
