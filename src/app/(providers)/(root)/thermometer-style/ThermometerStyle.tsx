'use client';

import Link from 'next/link';
import React, {
  useState,
  useRef,
  useEffect,
  MouseEvent,
  TouchEvent,
} from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

interface OutfitImages {
  [key: string]: string[];
}

interface TemperatureRange {
  min: number;
  label: string;
  display: string;
}

const outfits: OutfitImages = {
  '28°C 이상': [
    '/images/Weather2/sleeveless.svg',
    '/images/Weather2/short_sleeve_t_shirt.svg',
    '/images/Weather2/shorts.svg',
    '/images/Weather2/short_skirt.svg',
    '/images/Weather2/linen_clothes.svg'
  ], // figma 민소매 ~ 린넨 옷
  '23°C - 27°C': [
    '/images/Weather2/short_sleeve_t_shirt.svg',
    '/images/Weather2/shorts.svg',
    '/images/Weather2/thin_shirt.svg',
    '/images/Weather2/cotton_pants.svg',
  ], // figma 반팔티 ~ 면바지
  '20°C - 22°C': [
    '/images/Weather2/Long_sleeve_t_shirt.svg',
    '/images/Weather2/blouse.svg',
    '/images/Weather2/slacks.svg',
    '/images/Weather2/cotton_pants.svg'
  ], // figma 긴팔 티 ~ 면바지
  '17°C - 19°C': [
    '/images/Weather2/Cardigan.svg',
    '/images/Weather2/man_to_man.svg',
    '/images/Weather2/Hood.svg',
    '/images/Weather2/hose.svg'
  ], // figma 가디건 ~ 긴 바지
  '12°C - 16°C': [
    '/images/Weather2/Cardigan.svg',
    '/images/Weather2/neat.svg',
    '/images/Weather2/jacket.svg',
    '/images/Weather2/denim_jacket.svg',
    '/images/Weather2/jeans.svg'
  ], // figma 가디건 ~ 청바지
  '9°C - 11°C': [
    '/images/Weather2/jumper.svg',
    '/images/Weather2/nocturnal.svg',
    '/images/Weather2/trench_coat.svg',
    '/images/Weather2/brushed_pants.svg'
  ], // figma 점퍼 ~ 기모바지
  '5°C - 8°C': [
    '/images/Weather2/wool_coat.svg',
    '/images/Weather2/heattech.svg',
    '/images/Weather2/leather_clothes.svg',
    '/images/Weather2/brushed.svg'
  ], 
  '4°C 이하': [
    '/images/Weather2/padding.png',
    '/images/Weather2/thick_coat.png',
    '/images/Weather2/muffler.png',
    '/images/Weather2/gloves.png',
  ],
};

const defaultImages: string[] = [
  '/images/Thermometer/default-blue.png',
  '/images/Thermometer/default-yellow.png',
  '/images/Thermometer/default-yellow.png',
  '/images/Thermometer/default-blue.png',
];

const temperatureRanges: TemperatureRange[] = [
  { min: -Infinity, label: 'coldest', display: '4°C 이하' },
  { min: -Infinity, label: 'coldest', display: '4°C 이하' },
  { min: -Infinity, label: 'coldest', display: '4°C 이하' },
  { min: -Infinity, label: 'coldest', display: '4°C 이하' },
  { min: 4, label: 'coldest', display: '5°C - 8°C' },
  { min: 9, label: 'cold', display: '9°C - 11°C' },
  { min: 12, label: 'chilly', display: '12°C - 16°C' },
  { min: 17, label: 'cool', display: '17°C - 19°C' },
  { min: 20, label: 'mild', display: '20°C - 22°C' },
  { min: 23, label: 'warm', display: '23°C - 27°C' },
  { min: 28, label: 'hot', display: '28°C 이상' },
  { min: 28, label: 'hot', display: '28°C 이상' },
  { min: 28, label: 'hot', display: '28°C 이상' },
  { min: 28, label: 'hot', display: '28°C 이상' },
];

const ThermometerStyle: React.FC = () => {
  const [temperatureIndex, setTemperatureIndex] = useState<number>(
    Math.floor(temperatureRanges.length / 2),
  );
  const [currentOutfitIndex, setCurrentOutfitIndex] = useState<number>(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [initialView, setInitialView] = useState<boolean>(true);
  const router = useRouter();

  const handleTemperatureChange = (newIndex: number) => {
    if (newIndex >= 0 && newIndex < temperatureRanges.length) {
      setTemperatureIndex(newIndex);
      setInitialView(false);
      setCurrentOutfitIndex(0); // 온도가 변경될 때마다 초기화
    }
  };

  const handleDrag = (e: MouseEvent | TouchEvent) => {
    if (!sliderRef.current || !isDragging) return;

    const sliderRect = sliderRef.current.getBoundingClientRect();
    const x = 'clientX' in e ? e.clientX : e.touches[0]?.clientX;
    if (x == null) return;

    const sliderWidth = sliderRect.width;
    const relativeX = x - sliderRect.left;
    const percentage = Math.min(Math.max(relativeX / sliderWidth, 0.25), 0.75);
    const newIndex = Math.round((temperatureRanges.length - 1) * percentage);

    handleTemperatureChange(newIndex);
  };

  const handleMouseDown = (e: MouseEvent | TouchEvent) => {
    setIsDragging(true);
    e.preventDefault();
  };

  // const handleMouseUp = () => setIsDragging(false);

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

  const handleNext = () => {
    setCurrentOutfitIndex((prevIndex) => prevIndex + 4);
  };

  const handlePrev = () => {
    setCurrentOutfitIndex((prevIndex) => prevIndex - 4);
  };

  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center min-h-screen bg-[#f5f5f5]">
      <div className="flex flex-col items-center mt-[42px] mb-8">
        <div className="relative mb-4 mt-10" style={{ marginTop: '-8px' }}>
          <Image
            src="/images/Thermometer/temperature-box.svg"
            alt="Temperature Box"
            width={258}
            height={94.5}
            sizes="100vw"
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
        <div className="relative" style={{ minHeight: '323px' }}>
          <div className="grid grid-cols-2 mb-6 gap-2">
            {currentOutfits
              .slice(currentOutfitIndex, currentOutfitIndex + 4)
              .map((src: string, index: number) => (
                <div key={index} className="relative">
                  <Image
                    src={src}
                    alt={`Outfit ${index + 1}`}
                    width={106}
                    height={118}
                    // sizes="100vh"
                    style={{ width: 'auto', height: 'auto' }}
                    priority
                  />
                </div>
              ))}
          </div>
          <div className="flex justify-between w-full">
            {currentOutfitIndex > 0 && (
              <button
                className="absolute left-[-25px] top-[150px] transform -translate-y-1/2"
                onClick={handlePrev}
              >
                <Image
                  src="/images/Thermometer/skip(512h-png).png"
                  alt="Prev"
                  width={32}
                  height={32}
                  sizes="100vw"
                  className="transform rotate-180  drop-shadow-lg"
                />
              </button>
            )}
            {currentOutfitIndex + 4 < currentOutfits.length && (
              <button
                className="absolute right-[-25px] top-[150px] transform -translate-y-1/2"
                onClick={handleNext}
              >
                <Image
                  src="/images/Thermometer/skip(512h-png).png"
                  alt="Next"
                  width={32}
                  height={32}
                  sizes="100vw"
                  // className=" blur-2 "
                />
              </button>
            )}
          </div>
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
            src="/images/Thermometer/Thermometer.png"
            alt="Thermometer Bar"
            width={411}
            height={63}
            sizes="100vw"
            style={{ width: 'auto', height: 'auto' }}
            priority
          />

          {/* 온도계 위 controller 아이콘 */}
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
        <Link href="/list">
          <button className="w-full px-4 py-2 mb-4 text-base bg-black text-white rounded-lg">
            온도에 맞는 스타일 보러가기
          </button>
        </Link>
        <Link href="/survey">
          <button className="w-full px-4 py-2 border-2 border-black bg-white rounded-lg text-base">
            취향 코디 추천받기
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ThermometerStyle;
