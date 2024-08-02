'use client';

import React, {
  useState,
  useRef,
  useEffect,
  MouseEvent,
  TouchEvent,
} from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface OutfitImages {
  [key: string]: string[];
}

interface TemperatureRange {
  min: number;
  label: string;
  display: string;
}

const outfits: OutfitImages = {
  '28°C 이상': ['/민소매.png', '/반팔티.png', '/반바지.png', '/짧은치마.png'],
  '23°C - 27°C': [
    '/반팔티.png',
    '/얇은 셔츠.png',
    '/반바지.png',
    '/면바지.png',
  ],
  '20°C - 22°C': ['/블라우스.png', '/긴팔티.png', '/면바지.png', '/슬랙스.png'],
  '17°C - 19°C': ['/가디건.png', '/맨투맨.png', '/후드.png', '/긴바지.png'],
  '12°C - 16°C': ['/블라우스.png', '/긴팔티.png', '/면바지.png', '/슬랙스.png'],
  '9°C - 11°C': ['/블라우스.png', '/긴팔티.png', '/면바지.png', '/슬랙스.png'],
  '4°C - 8°C': ['/블라우스.png', '/긴팔티.png', '/면바지.png', '/슬랙스.png'],
  '4°C 이하': ['/블라우스.png', '/긴팔티.png', '/면바지.png', '/슬랙스.png'],
};

const defaultImages: string[] = [
  '/default-blue.png',
  '/default-yellow.png',
  '/default-yellow.png',
  '/default-blue.png',
];

const temperatureRanges: TemperatureRange[] = [
  { min: -Infinity, label: 'coldest', display: '4°C 이하' },
  { min: -Infinity, label: 'coldest', display: '4°C 이하' },
  { min: 4, label: 'coldest', display: '4°C - 8°C' },
  { min: 9, label: 'cold', display: '9°C - 11°C' },
  { min: 12, label: 'chilly', display: '12°C - 16°C' },
  { min: 17, label: 'cool', display: '17°C - 19°C' },
  { min: 20, label: 'mild', display: '20°C - 22°C' },
  { min: 23, label: 'warm', display: '23°C - 27°C' },
  { min: 28, label: 'hot', display: '28°C 이상' },
  { min: 28, label: 'hot', display: '28°C 이상' },
];

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
    const percentage = Math.min(Math.max(relativeX / sliderWidth, 0.1), 0.9);
    const newIndex = Math.round((temperatureRanges.length - 1) * percentage);

    handleTemperatureChange(newIndex);
  };

  const handleMouseDown = (e: MouseEvent | TouchEvent) => {
    setIsDragging(true);
    e.preventDefault();
  };

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

  const getOutfitsForTemperature = (tempDisplay: string): string[] => {
    const outfitKeys = Object.keys(outfits);
    const matchedKey = outfitKeys.find((key) => key === tempDisplay);
    return matchedKey ? outfits[matchedKey] : [];
  };

  const currentOutfits =
    temperatureIndex === Math.floor(temperatureRanges.length / 2) && initialView
      ? defaultImages
      : getOutfitsForTemperature(temperatureRanges[temperatureIndex].display);

  const handleSurveyPage = () => {
    router.push('/surveypage');
  };

  const noLabelImages = [
    '/default-blue.png',
    '/default-yellow.png',
    '/민소매.png',
    '/반팔티.png',
    '/반바지.png',
    '/짧은치마.png',
    '/얇은셔츠.png',
    '/면바지.png',
    '/블라우스.png',
    '/긴팔티.png',
    '/슬랙스.png',
  ];

  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center min-h-screen bg-[#f5f5f5]">
      <div className="flex flex-col items-center mt-4 mb-8">
        <h1 className="text-2xl font-bold mb-4">기온 별 옷차림</h1>
        <div className="relative">
          <div className="grid grid-cols-2 mb-6" style={{ gap: '0.1667rem' }}>
            {currentOutfits.map((src: string, index: number) => (
              <div key={index} className="relative">
                {!initialView && !noLabelImages.includes(src) && (
                  <span className="text-sm text-center mb-2"></span>
                )}
                <Image
                  src={src}
                  alt={`Outfit ${index + 1}`}
                  width={198}
                  height={225}
                  style={{ width: 'auto', height: 'auto' }}
                  priority
                />
              </div>
            ))}
          </div>
        </div>
        <div className="relative mb-4">
          <Image
            src="/temperature-box.svg"
            alt="Temperature Box"
            width={258}
            height={94.5}
            style={{ width: 'auto', height: 'auto' }}
            priority
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
          className="relative w-full mb-8"
          onMouseMove={handleDrag}
          onTouchMove={handleDrag}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          <Image
            src="/Thermometer.svg"
            alt="Thermometer Bar"
            width={411}
            height={63}
            style={{ width: 'auto', height: 'auto' }}
            priority
          />
          <div
            className="absolute"
            style={{
              left: initialView
                ? '50%'
                : `${(temperatureIndex / (temperatureRanges.length - 1)) * 100}%`,
              top: '50%',
              transform: 'translate(-50%, -50%) translateY(-10px)',
            }}
          >
            <div
              className="w-[34px] h-[77px] rounded-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100 flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.2)]"
              draggable="true"
              onDragStart={(e) => {
                setIsDragging(true);
                e.dataTransfer.effectAllowed = 'move';
              }}
              onDrag={(e) => {
                handleDrag(e);
              }}
              onDragEnd={(e) => {
                setIsDragging(false);
              }}
            ></div>
          </div>
        </div>
      </div>
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
