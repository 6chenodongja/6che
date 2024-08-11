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

interface OutfitImages {
  [key: string]: string[];
}

interface TemperatureRange {
  min: number;
  label: string;
  display: string;
}

const outfits: OutfitImages = {
  '28° 이상': [
    '/images/Weather2/sleeveless.svg',
    '/images/Weather2/short_sleeve_t_shirt.svg',
    '/images/Weather2/shorts.svg',
    '/images/Weather2/short_skirt.svg',
    '/images/Weather2/linen_clothes.svg',
    '/images/Weather2/Box1.svg',
    '/images/Weather2/Box2.svg',
    '/images/Weather2/Box3.svg',
  ],
  '23° - 27°': [
    '/images/Weather2/short_sleeve_t_shirt.svg',
    '/images/Weather2/shorts.svg',
    '/images/Weather2/thin_shirt.svg',
    '/images/Weather2/cotton_pants.svg',
  ],
  '20° - 22°': [
    '/images/Weather2/Long_sleeve_t_shirt.svg',
    '/images/Weather2/blouse.svg',
    '/images/Weather2/slacks.svg',
    '/images/Weather2/cotton_pants.svg',
  ],
  '17° - 19°': [
    '/images/Weather2/Cardigan.svg',
    '/images/Weather2/man_to_man.svg',
    '/images/Weather2/Hood.svg',
    '/images/Weather2/hose.svg',
  ],
  '12° - 16°': [
    '/images/Weather2/Cardigan.svg',
    '/images/Weather2/knit.svg',
    '/images/Weather2/jacket.svg',
    '/images/Weather2/denim_jacket.svg',
    '/images/Weather2/jeans.svg',
    '/images/Weather2/Box1.svg',
    '/images/Weather2/Box2.svg',
    '/images/Weather2/Box3.svg',
  ],
  '9° - 11°': [
    '/images/Weather2/jumper.svg',
    '/images/Weather2/nocturnal.svg',
    '/images/Weather2/trench_coat.svg',
    '/images/Weather2/brushed_pants.svg',
  ],
  '5° - 8°': [
    '/images/Weather2/wool_coat.svg',
    '/images/Weather2/heattech.svg',
    '/images/Weather2/leather_clothes.svg',
    '/images/Weather2/brushed.svg',
  ],
  '4° 이하': [
    '/images/Weather2/padding.svg',
    '/images/Weather2/thick_coat.svg',
    '/images/Weather2/muffler.svg',
    '/images/Weather2/Gloves.svg',
  ],
};

const defaultImages: string[] = [
  '/images/Weather2/default-blue.svg',
  '/images/Weather2/default-yellow.svg',
  '/images/Weather2/default-yellow.svg',
  '/images/Weather2/default-blue.svg',
];

const temperatureRanges: TemperatureRange[] = [
  { min: -Infinity, label: 'coldest', display: '4° 이하' },
  { min: -Infinity, label: 'coldest', display: '4° 이하' },
  { min: -Infinity, label: 'coldest', display: '4° 이하' },
  { min: -Infinity, label: 'coldest', display: '4° 이하' },
  { min: 4, label: 'coldest', display: '5° - 8°' },
  { min: 9, label: 'cold', display: '9° - 11°' },
  { min: 12, label: 'chilly', display: '12° - 16°' },
  { min: 17, label: 'cool', display: '17° - 19°' },
  { min: 20, label: 'mild', display: '20° - 22°' },
  { min: 23, label: 'warm', display: '23° - 27°' },
  { min: 28, label: 'hot', display: '28° 이상' },
  { min: 28, label: 'hot', display: '28° 이상' },
  { min: 28, label: 'hot', display: '28° 이상' },
  { min: 28, label: 'hot', display: '28° 이상' },
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
      setCurrentOutfitIndex(0);
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

  const handleLeftClick = () => {
    if (temperatureIndex > 0) {
      handleTemperatureChange(temperatureIndex - 1);
    }
  };

  const handleRightClick = () => {
    if (temperatureIndex < temperatureRanges.length - 1) {
      handleTemperatureChange(temperatureIndex + 1);
    }
  };

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
    <div className="w-full max-w-md mx-auto flex flex-col min-h-screen bg-[#FFFFF]">
      <div className="flex flex-col items-center mt-5 mb-8">
        <div className="relative mb-4 mt-10" style={{ marginTop: '-40px' }}>
          <Image
            src="/images/Thermometer/temperature-box.svg"
            alt="Temperature Box"
            width={146}
            height={48}
            sizes="100vw"
            priority
          />
          {initialView ? (
            <span className="absolute inset-0 flex items-center justify-center text-lg font-bold">
              ?
            </span>
          ) : (
            <span className="absolute inset-0 flex items-center justify-center temperature-display">
              {temperatureRanges[temperatureIndex].display}
            </span>
          )}
        </div>

        <div className="relative w-full grid grid-cols-2 px-[15px] py-[25px] ml-[9px]">
          {currentOutfits
            .slice(currentOutfitIndex, currentOutfitIndex + 4)
            .map((src: string, index: number) => (
              <div
                key={index}
                className={`relative ${
                  index % 2 === 0 ? 'col-start-1' : 'col-start-4'
                } w-[159px] h-[140px]`}
              >
                <Image
                  src={src}
                  alt={`Outfit ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          {/* 왼쪽 버튼 */}
          {currentOutfitIndex > 0 && (
            <button
              className="absolute left-[1px] top-[49%] transform -translate-y-1/2 flex items-start opacity-[var(--sds-size-stroke-border)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] backdrop-filter backdrop-blur-[2px] rounded-full z-10"
              onClick={handlePrev}
              style={{ padding: 0, border: 'none', background: 'transparent' }}
            >
              <Image
                src="/images/Thermometer/skip(512h-png).png"
                alt="Prev"
                width={32}
                height={32}
                sizes="100vw"
                className="transform rotate-180"
              />
            </button>
          )}
          {/* 오른쪽 버튼 */}
          {currentOutfitIndex + 4 < currentOutfits.length && (
            <button
              className="absolute right-[9px] top-[48%] transform -translate-y-1/2 flex items-start opacity-[var(--sds-size-stroke-border)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] backdrop-filter backdrop-blur-[2px] rounded-full z-10"
              onClick={handleNext}
              style={{ padding: 0, border: 'none', background: 'transparent' }}
            >
              <Image
                src="/images/Thermometer/skip(512h-png).png"
                alt="Next"
                width={32}
                height={32}
                sizes="100vw"
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
        {/* 왼쪽 버튼 */}
        <button
          className="absolute left-[35px] top-[41.5%] transform -translate-y-1/2 flex items-center justify-center z-10"
          onClick={handleLeftClick}
          style={{ padding: 0, border: 'none', background: 'transparent' }}
        >
          <Image
            src="/images/Weather2/Lbtn.svg"
            alt="Left Button"
            width={30}
            height={22}
            sizes="100vw"
          />
        </button>

        <Image
          src="/images/Thermometer/Thermometer.png"
          alt="Thermometer Bar"
          width={411}
          height={63}
          sizes="100vw"
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
            className="w-[28px] h-[63px] rounded-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100 flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.2)]"
            style={{ backdropFilter: 'blur(5px)' }}
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

        {/* 오른쪽 버튼 */}
        <button
          className="absolute right-[35px] top-[41.5%] transform -translate-y-1/2 flex items-center justify-center z-10"
          onClick={handleRightClick}
          style={{ padding: 0, border: 'none', background: 'transparent' }}
        >
          <Image
            src="/images/Weather2/Rbtn.svg"
            alt="Right Button"
            width={30}
            height={22}
            sizes="100vw"
          />
        </button>
      </div>

      <div className="w-full px-4 mb-8">
        <Link href="/list">
          <button className="w-full px-4 py-2 mb-4 text-base bg-black text-white rounded-lg button-style">
            온도에 맞는 코디 보러가기
          </button>
        </Link>
        <Link href="/survey">
          <button className="w-full px-4 py-2 border-2 border-black bg-white rounded-lg text-base button-style">
            취향 코디 추천받기
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ThermometerStyle;
