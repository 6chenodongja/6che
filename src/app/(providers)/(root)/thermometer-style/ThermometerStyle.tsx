'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const outfits = {
  hot: ['/images.jpeg', '/muffler.png', '/images.jpeg', '/images.jpeg'],
  warm: ['/images.jpeg', '/images.jpeg', '/muffler.png', '/images.jpeg'],
  mild: ['/images.jpeg', '/images.jpeg', '/images.jpeg', '/muffler.png'],
  cool: ['/muffler.png', '/muffler.png', '/images.jpeg', '/images.jpeg'],
  chilly: ['/images.jpeg', '/muffler.png', '/muffler.png', '/images.jpeg'],
  cold: ['/images.jpeg', '/images.jpeg', '/muffler.png', '/muffler.png'],
  coldest: ['/muffler.png', '/muffler.png', '/muffler.png', '/muffler.png'],
};

const temperatureRanges = [
  { min: 28, label: 'hot', display: '28°C 이상' },
  { min: 23, label: 'warm', display: '27~23°C' },
  { min: 20, label: 'mild', display: '22~20°C' },
  { min: 17, label: 'cool', display: '19~17°C' },
  { min: 12, label: 'chilly', display: '16~12°C' },
  { min: 9, label: 'cold', display: '11~9°C' },
  { min: 4, label: 'coldest', display: '8~5°C' },
  { min: -Infinity, label: 'coldest', display: '4°C 이하' },
];

const ThermometerStyle = () => {
  const [temperatureIndex, setTemperatureIndex] = useState(4);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const controllerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const router = useRouter();

  const handleTemperatureChange = (newIndex: number) => {
    if (newIndex >= 0 && newIndex < temperatureRanges.length) {
      setTemperatureIndex(newIndex);
    }
  };

  const handleDrag = (e: React.MouseEvent | React.TouchEvent) => {
    if (!sliderRef.current || !isDragging) return;

    const sliderRect = sliderRef.current.getBoundingClientRect();
    const y = 'clientY' in e ? e.clientY : e.touches[0].clientY;
    const sliderHeight = sliderRect.height;
    const relativeY = y - sliderRect.top;
    const percentage = relativeY / sliderHeight;
    const newIndex = Math.round((temperatureRanges.length - 1) * percentage);

    handleTemperatureChange(newIndex);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    e.preventDefault();
    handleDrag(e);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDrag(e);
  };

  useEffect(() => {
    const handleMouseUpGlobal = () => {
      setIsDragging(false);
    };

    window.addEventListener('mouseup', handleMouseUpGlobal);
    window.addEventListener('touchend', handleMouseUpGlobal);

    return () => {
      window.removeEventListener('mouseup', handleMouseUpGlobal);
      window.removeEventListener('touchend', handleMouseUpGlobal);
    };
  }, []);

  const getOutfitsForTemperature = (tempIndex: number) => {
    const range = temperatureRanges[tempIndex];
    return range ? outfits[range.label] : outfits.coldest;
  };

  const currentOutfits = getOutfitsForTemperature(temperatureIndex) || [];

  const handleSurveyPage = () => {
    router.push('/surveypage');
  };

  return (
    <div className="max-w-sm mx-auto h-auto m-10">
      <div className="flex justify-center p-4">
        <h1 className="text-xl font-bold">기온 별 옷차림</h1>
      </div>
      <div className="flex justify-center mb-4">
        <div className="grid grid-cols-2 gap-2">
          {currentOutfits.map((src, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-lg flex items-center justify-center"
              style={{ width: '88px', height: '100px' }}
            >
              <Image
                src={src}
                alt={`Outfit ${index + 1}`}
                width={88}
                height={100}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center mb-4">
        <div
          ref={sliderRef}
          className="relative w-full h-16 flex-shrink-0 flex items-center justify-between"
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          <Image
            src="/thermometer-body.png"
            alt="Thermometer Body"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
          <div
            ref={controllerRef}
            className="absolute cursor-pointer bg-white rounded-md border-2 border-gray-300"
            style={{
              left: `${(temperatureIndex / (temperatureRanges.length - 1)) * 100}%`,
              transform: 'translateX(-50%)',
              width: '25px',
              height: '50px',
            }}
          />
        </div>
        <span className="block text-center mt-2 text-sm w-full whitespace-nowrap">
          {temperatureRanges[temperatureIndex].display}
        </span>
      </div>
      <div className="flex flex-col items-center w-full mt-4">
        <button className="w-full px-4 py-2 font-medium bg-black text-white mb-2 rounded-[8px]">
          온도에 맞는 스타일 보러가기
        </button>
        <button
          className="w-full px-4 py-2 border border-black bg-white rounded-[8px]"
          onClick={handleSurveyPage}
        >
          취향 코디 추천받기
        </button>
      </div>
    </div>
  );
};

export default ThermometerStyle;
