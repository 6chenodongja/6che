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
  { min: 28, label: 'hot', display: '28° 이상' },
  { min: 23, label: 'warm', display: '23° - 27°' },
  { min: 20, label: 'mild', display: '20° - 22°' },
  { min: 17, label: 'cool', display: '17° - 19°' },
  { min: 12, label: 'chilly', display: '12° - 16°' },
  { min: 9, label: 'cold', display: '9° - 11°' },
  { min: 4, label: 'colder', display: '5° - 8°' },
  { min: -Infinity, label: 'coldest', display: '4° 이하' },
];

const ThermometerStyle: React.FC = () => {
  const [temperatureIndex, setTemperatureIndex] = useState<number>(
    Math.floor(temperatureRanges.length / 2),
  );
  const [currentOutfitIndex, setCurrentOutfitIndex] = useState<number>(0);
  const [prevTemperatureIndex, setPrevTemperatureIndex] =
    useState<number>(temperatureIndex);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [initialView, setInitialView] = useState<boolean>(true);
  const [animationsEnabled, setAnimationsEnabled] = useState<boolean>(false); // 애니메이션 활성화 상태
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const handleRef = useRef<HTMLDivElement | null>(null);
  const textContainerRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const handleTemperatureChange = (newIndex: number) => {
    if (newIndex >= 0 && newIndex < temperatureRanges.length) {
      setPrevTemperatureIndex(temperatureIndex);
      setTemperatureIndex(newIndex);
      setInitialView(false);
      setCurrentOutfitIndex(0);
      setAnimationsEnabled(true); // 핸들 이동 시 애니메이션 활성화
    }
  };

  const calculatePosition = (index: number, thermometerWidth: number) => {
    const positions = [
      0.21, // 28° 이상
      0.3, // 23° - 27°
      0.4, // 20° - 22°
      0.5, // 17° - 19°
      0.6, // 12° - 16°
      0.7, // 9° - 11°
      0.75, // 5° - 8°
      0.79, // 4° 이하
    ];
    return positions[index] * thermometerWidth;
  };

  const handleDrag = (e: MouseEvent | TouchEvent) => {
    if (!sliderRef.current || !handleRef.current || !isDragging) return;

    const sliderRect = sliderRef.current.getBoundingClientRect();
    const handleWidth = handleRef.current.offsetWidth;

    const thermometerPadding = 0; // 구역의 비율에 맞게 조정
    const thermometerWidth =
      sliderRect.width - handleWidth - 2 * thermometerPadding;

    let x =
      'clientX' in e
        ? e.clientX - sliderRect.left
        : e.touches[0]?.clientX - sliderRect.left;

    // x 좌표를 제한된 범위 내로 조정
    x = Math.max(0, Math.min(x, thermometerWidth));

    // 비율에 맞게 핸들의 위치 계산
    const segmentWidth = thermometerWidth / (temperatureRanges.length - 1);
    const newIndex = Math.round((x - thermometerPadding) / segmentWidth);
    const left =
      calculatePosition(newIndex, thermometerWidth) + thermometerPadding;

    handleRef.current.style.left = `${left}px`;
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

  useEffect(() => {
    // 슬라이더와 핸들이 렌더링된 후 핸들의 초기 위치를 온도에 맞춰 설정
    if (sliderRef.current && handleRef.current) {
      const sliderRect = sliderRef.current.getBoundingClientRect();
      const handleWidth = handleRef.current.offsetWidth;

      const thermometerPadding = 0; // 구역의 비율에 맞게 조정
      const thermometerWidth =
        sliderRect.width - handleWidth - 2 * thermometerPadding;

      const initialLeft = calculatePosition(temperatureIndex, thermometerWidth);
      handleRef.current.style.left = `${initialLeft}px`;

      if (initialView) {
        handleRef.current.style.transition = 'none';
        handleRef.current.style.left = `${(sliderRect.width - handleWidth) / 2}px`;
      }
    }
  }, [temperatureIndex, initialView]);

  useEffect(() => {
    if (textContainerRef.current) {
      const direction = prevTemperatureIndex < temperatureIndex ? 1 : -1;
      textContainerRef.current.style.transform = `translateX(${direction * 100}%)`;
      textContainerRef.current.style.transition = animationsEnabled
        ? 'transform 0.3s ease'
        : 'none';

      const timer = setTimeout(() => {
        if (textContainerRef.current) {
          textContainerRef.current.style.transition = 'none';
          textContainerRef.current.style.transform = 'translateX(0)';
        }
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [temperatureIndex, prevTemperatureIndex, animationsEnabled]);

  const getOutfitsForTemperature = (tempDisplay: string): string[] => {
    const outfitKeys = Object.keys(outfits);
    const matchedKey = outfitKeys.find((key) => key === tempDisplay);
    return matchedKey ? outfits[matchedKey] : [];
  };

  const currentOutfits =
    initialView && temperatureIndex === Math.floor(temperatureRanges.length / 2)
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
        <div
          className="relative mb-4 mt-10 temperature-display-container"
          style={{
            marginTop: '-40px',
            overflow: 'hidden', // 슬라이드 애니메이션을 위한 overflow 숨김
          }}
        >
          <Image
            src="/images/Thermometer/temperature-box.svg"
            alt="Temperature Box"
            width={146}
            height={48}
            sizes="100vw"
            priority
          />
          <div
            ref={textContainerRef}
            className="absolute inset-0 flex items-center justify-center text-lg font-bold temperature-display-text"
          >
            {initialView ? '?' : temperatureRanges[temperatureIndex].display}
          </div>
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
          priority
        />

        <div
          ref={handleRef}
          className="absolute handle"
          style={{
            left: `${(sliderRef.current?.getBoundingClientRect().width || 0) / 10}px`,
            top: '50%',
            transform: 'translate(-0%, -50%) translateY(-10px)',
            transition: animationsEnabled ? 'left 0.2s' : 'none', // 애니메이션 제어
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
