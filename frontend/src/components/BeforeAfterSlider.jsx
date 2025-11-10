import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BeforeAfterSlider = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e) => {
    if (e.buttons === 1) { // Only when mouse button is pressed
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleClick = (e) => {
    handleMove(e.clientX);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl select-none"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onClick={handleClick}
    >
      {/* Before Image */}
      <div className="absolute inset-0">
        <img
          src={beforeImage}
          alt="Before"
          className="w-full h-full object-cover"
          draggable="false"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F2B35]/80 via-transparent to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-2">
            <span className="text-white font-bold text-base">Before</span>
          </div>
        </div>
      </div>

      {/* After Image */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={afterImage}
          alt="After"
          className="w-full h-full object-cover"
          draggable="false"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F2B35]/80 via-transparent to-transparent"></div>
        <div className="absolute bottom-4 right-4">
          <div className="bg-white backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
            <span className="text-[#1F2B35] font-bold text-base">After</span>
          </div>
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute inset-y-0 w-1 bg-white cursor-ew-resize z-10 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center pointer-events-auto cursor-ew-resize">
          <ChevronLeft className="h-5 w-5 text-[#1F2B35] absolute left-1" />
          <ChevronRight className="h-5 w-5 text-[#1F2B35] absolute right-1" />
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;