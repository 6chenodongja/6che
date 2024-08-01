'use client';

import React, {
  useState,
  useRef,
  useEffect,
  MouseEvent,
  TouchEvent,
} from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// Outfit type definitions
interface OutfitImages {
  hot: string[];
  warm: string[];
  mild: string[];
  cool: string[];
  chilly: string[];
  cold: string[];
  coldest: string[];
}

// Temperature range type definitions
interface TemperatureRange {
  min: number;
  label: keyof OutfitImages;
  display: string;
}

// Outfit images
const outfits: OutfitImages = {
  hot: ['/반팔티.svg', '/반바지.svg', '/셔츠.svg', '/면바지.svg'],
  warm: ['/반팔티.svg', '/반바지.svg', '/셔츠.svg', '/면바지.svg'],
  mild: ['/반팔티.svg', '/반바지.svg', '/셔츠.svg', '/면바지.svg'],
  cool: ['/반팔티.svg', '/반바지.svg', '/셔츠.svg', '/면바지.svg'],
  chilly: ['/반팔티.svg', '/반바지.svg', '/셔츠.svg', '/면바지.svg'],
  cold: ['/반팔티.svg', '/반바지.svg', '/셔츠.svg', '/면바지.svg'],
  coldest: ['/반팔티.svg', '/반바지.svg', '/셔츠.svg', '/면바지.svg'],
};

// Default images
const defaultImages: string[] = [
  '/default-b.svg',
  '/default-y.svg',
  '/default-y.svg',
  '/default-b.svg',
];

// Outfit labels
const outfitLabels: string[] = ['반팔티', '반바지', '얇은 셔츠', '면바지'];

// Temperature ranges
const temperatureRanges: TemperatureRange[] = [
  { min: 28, label: 'hot', display: '28°C 이상' },
  { min: 23, label: 'warm', display: '23°C - 27°C' },
  { min: 20, label: 'mild', display: '20°C - 22°C' },
  { min: 17, label: 'cool', display: '17°C - 19°C' },
  { min: 12, label: 'chilly', display: '12°C - 16°C' },
  { min: 9, label: 'cold', display: '9°C - 11°C' },
  { min: 4, label: 'coldest', display: '4°C - 8°C' },
  { min: -Infinity, label: 'coldest', display: '4°C 이하' },
];

// Component definition
const ThermometerStyle: React.FC = () => {
  const [temperatureIndex, setTemperatureIndex] = useState<number>(
    Math.floor(temperatureRanges.length / 2),
  );
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [initialView, setInitialView] = useState<boolean>(true);

  const router = useRouter();

  const handleTemperatureChange = (newIndex: number) => {
    if (newIndex >= 0 && newIndex < temperatureRanges.length) {
      setTemperatureIndex(newIndex);
      setInitialView(false);
    }
  };

  const handleDrag = (e: MouseEvent | TouchEvent) => {
    if (!sliderRef.current || !isDragging) return;

    const sliderRect = sliderRef.current.getBoundingClientRect();
    const x = 'clientX' in e ? e.clientX : e.touches[0]?.clientX;
    if (x == null) return;

    const sliderWidth = sliderRect.width;
    const relativeX = x - sliderRect.left;
    const percentage = relativeX / sliderWidth;
    const newIndex = Math.round((temperatureRanges.length - 1) * percentage);

    handleTemperatureChange(newIndex);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    const handleMouseUpGlobal = () => setIsDragging(false);

    window.addEventListener('mouseup', handleMouseUpGlobal);
    window.addEventListener('touchend', handleMouseUpGlobal);

    return () => {
      window.removeEventListener('mouseup', handleMouseUpGlobal);
      window.removeEventListener('touchend', handleMouseUpGlobal);
    };
  }, []);

  const getOutfitsForTemperature = (tempIndex: number): string[] => {
    const range = temperatureRanges[tempIndex];
    return outfits[range.label] || defaultImages;
  };

  const currentOutfits =
    temperatureIndex === Math.floor(temperatureRanges.length / 2) && initialView
      ? defaultImages
      : getOutfitsForTemperature(temperatureIndex);

  const handleSurveyPage = () => {
    router.push('/surveypage');
  };

  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center mt-4 mb-8">
        <h1 className="text-2xl font-bold mb-4">기온 별 옷차림</h1>
        <div className="relative">
          {temperatureIndex === 1 && !initialView && (
            <>
              <Image
                src="/weather-piece-Sun.svg"
                alt="Sun Icon"
                width={46}
                height={46}
                className="absolute -top-8 -left-8"
              />
              <Image
                src="/weather-piece-leaf.svg"
                alt="Leaf Icon"
                width={46}
                height={46}
                className="absolute -top-8 -right-8"
              />
            </>
          )}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {currentOutfits.map((src: string, index: number) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-2 p-4 w-24 h-32 bg-white shadow rounded-lg bg-opacity-40 backdrop-blur-lg border border-white relative"
              >
                {!initialView && (
                  <span className="text-center mb-2">
                    {outfitLabels[index]}
                  </span>
                )}
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
        <div className="relative mb-4">
          <Image
            src="/temperature-box.svg"
            alt="Temperature Box"
            width={172}
            height={63}
          />
          {initialView ? (
            <span className="absolute inset-0 flex items-center justify-center text-lg font-bold">
              ?
            </span>
          ) : (
            <span className="absolute inset-0 flex items-center justify-center text-lg font-bold">
              {temperatureRanges[temperatureIndex].display}
            </span>
          )}
        </div>
        <div
          ref={sliderRef}
          className="relative w-72 h-10 flex items-center justify-center mb-8"
          onMouseMove={handleDrag}
          onTouchMove={handleDrag}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          <Image
            src="/Thermometer.svg"
            alt="Thermometer Body"
            width={274}
            height={42}
            priority
          />
          <div
            className="absolute cursor-pointer"
            style={{
              left: initialView
                ? '50%'
                : `${(temperatureIndex / (temperatureRanges.length - 1)) * 100}%`,
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <Image
              src="/Thermometer-controller.svg"
              alt="Thermometer Controller"
              width={42}
              height={24.36}
              className="object-contain"
            />
          </div>
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2"
            onClick={() => handleTemperatureChange(temperatureIndex - 1)}
          >
            <Image
              src="/arrow_Left.svg"
              alt="Left Arrow"
              width={24}
              height={24}
            />
          </button>
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2"
            onClick={() => handleTemperatureChange(temperatureIndex + 1)}
          >
            <Image
              src="/arrow_Right.svg"
              alt="Right Arrow"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>

      {/* Buttons */}
      <div className="w-full px-4 mb-8">
        <button className="w-full px-4 py-2 mb-4 font-medium bg-black text-white rounded">
          온도에 맞는 스타일 보러가기
        </button>
        <button
          className="w-full px-4 py-2 border border-black bg-white rounded"
          onClick={handleSurveyPage}
        >
          취향 코디 추천받기
        </button>
      </div>
    </div>
  );
};

export default ThermometerStyle;
