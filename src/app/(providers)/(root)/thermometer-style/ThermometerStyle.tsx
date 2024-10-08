'use client';

import React, {
  useState,
  useRef,
  useEffect,
  MouseEvent,
  TouchEvent,
} from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Outfit {
  imageSrc?: string;
  label: string;
}

interface TemperatureRange {
  min: number;
  label: string;
  display: string;
}

const outfits: { [key: string]: Outfit[] } = {
  '28° 이상': [
    { imageSrc: '/images/Weather2/sleeveless.svg', label: '민소매' },
    { imageSrc: '/images/Weather2/short_sleeve_t-shirt.svg', label: '반팔티' },
    { imageSrc: '/images/Weather2/shorts.svg', label: '반바지' },
    { imageSrc: '/images/Weather2/short_skirt.svg', label: '짧은 치마' },
    { imageSrc: '/images/Weather2/linen.svg', label: '린넨 옷' },
    { label: '' }, // 빈 div
    { label: '' }, // 빈 div
    { label: '' }, // 빈 div
  ],
  '23° - 27°': [
    { imageSrc: '/images/Weather2/short_sleeve_t-shirt.svg', label: '반팔티' },
    { imageSrc: '/images/Weather2/shorts.svg', label: '반바지' },
    { imageSrc: '/images/Weather2/thin_shirt.svg', label: '얇은 셔츠' },
    { imageSrc: '/images/Weather2/cotton_pants.svg', label: '면바지' },
  ],
  '20° - 22°': [
    { imageSrc: '/images/Weather2/long_sleeve_tee.svg', label: '긴팔 티' },
    { imageSrc: '/images/Weather2/blouse.svg', label: '블라우스' },
    { imageSrc: '/images/Weather2/slacks.svg', label: '슬랙스' },
    { imageSrc: '/images/Weather2/cotton_pants.svg', label: '면바지' },
  ],
  '17° - 19°': [
    { imageSrc: '/images/Weather2/Cardigan.svg', label: '가디건' },
    { imageSrc: '/images/Weather2/man_to_man.svg', label: '맨투맨' },
    { imageSrc: '/images/Weather2/Hood.svg', label: '후드' },
    { imageSrc: '/images/Weather2/hose.svg', label: '긴 바지' },
  ],
  '12° - 16°': [
    { imageSrc: '/images/Weather2/Cardigan.svg', label: '가디건' },
    { imageSrc: '/images/Weather2/knit.svg', label: '니트' },
    { imageSrc: '/images/Weather2/jacket.svg', label: '자켓' },
    { imageSrc: '/images/Weather2/denim_jacket.svg', label: '청자켓' },
    { imageSrc: '/images/Weather2/jeans.svg', label: '청바지' },
    { label: '' }, // 빈 div
    { label: '' }, // 빈 div
    { label: '' }, // 빈 div
  ],
  '9° - 11°': [
    { imageSrc: '/images/Weather2/jumper.svg', label: '점퍼' },
    { imageSrc: '/images/Weather2/nocturnal.svg', label: '야상' },
    { imageSrc: '/images/Weather2/trench_coat.svg', label: '트렌치코트' },
    { imageSrc: '/images/Weather2/brushed_pants.svg', label: '기모바지' },
  ],
  '5° - 8°': [
    { imageSrc: '/images/Weather2/wool_coat.svg', label: '울 코트' },
    { imageSrc: '/images/Weather2/heattech.svg', label: '히트텍' },
    { imageSrc: '/images/Weather2/leather_clothes.svg', label: '가죽 옷' },
    { imageSrc: '/images/Weather2/brushed.svg', label: '기모' },
  ],
  '4° 이하': [
    { imageSrc: '/images/Weather2/padding.svg', label: '패딩' },
    { imageSrc: '/images/Weather2/thick_coat.svg', label: '두꺼운 코트' },
    { imageSrc: '/images/Weather2/muffler.svg', label: '머플러' },
    { imageSrc: '/images/Weather2/Gloves.svg', label: '장갑' },
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
  const [animationsEnabled, setAnimationsEnabled] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const handleRef = useRef<HTMLDivElement | null>(null);
  const textContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateSize = () => {
      setIsDesktop(window.innerWidth >= 769);
    };

    window.addEventListener('resize', updateSize);
    updateSize(); // 초기화 시 창 크기를 반영
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const handleTemperatureChange = (newIndex: number) => {
    if (newIndex >= 0 && newIndex < temperatureRanges.length) {
      setPrevTemperatureIndex(temperatureIndex);
      setTemperatureIndex(newIndex);
      setInitialView(false);
      setCurrentOutfitIndex(0);
      setAnimationsEnabled(true);
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

    const thermometerPadding = 0;
    const thermometerWidth =
      sliderRect.width - handleWidth - 2 * thermometerPadding;

    let x =
      'clientX' in e
        ? e.clientX - sliderRect.left
        : e.touches[0]?.clientX - sliderRect.left;

    x = Math.max(0, Math.min(x, thermometerWidth));

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
    if (sliderRef.current && handleRef.current) {
      const sliderRect = sliderRef.current.getBoundingClientRect();
      const handleWidth = handleRef.current.offsetWidth;

      const thermometerPadding = 0;
      const thermometerWidth =
        sliderRect.width - handleWidth - 2 * thermometerPadding;

      const initialLeft = calculatePosition(temperatureIndex, thermometerWidth);
      handleRef.current.style.left = `${initialLeft}px`;

      if (initialView) {
        handleRef.current.style.transition = 'none';
        handleRef.current.style.left = `${
          (sliderRect.width - handleWidth) / 2
        }px`;
      }
    }
  }, [temperatureIndex, initialView]);

  useEffect(() => {
    if (textContainerRef.current) {
      textContainerRef.current.style.transform = 'translateX(0)';
      textContainerRef.current.style.transition = 'none';
    }
  }, [temperatureIndex]);

  const currentOutfits =
    initialView && temperatureIndex === Math.floor(temperatureRanges.length / 2)
      ? defaultImages.map((src) => ({ imageSrc: src, label: '' }))
      : outfits[temperatureRanges[temperatureIndex].display] || [];

  const handleNext = () => {
    setCurrentOutfitIndex((prevIndex) => prevIndex + 4);
  };

  const handlePrev = () => {
    setCurrentOutfitIndex((prevIndex) => prevIndex - 4);
  };

  return (
    <div
      className={`w-full max-w-md mx-auto flex flex-col min-h-screen ${
        isDesktop ? '' : 'bg-neutral-50'
      }`}
    >
      <div className="flex flex-col items-center mt-5 mb-8">
        <div
          className="relative mb-4 mt-10 temperature-display-container"
          style={{
            marginTop: '-40px',
            overflow: 'hidden',
          }}
        >
          <div
            className={`${
              isDesktop ? 'w-[219px] h-[72px]' : 'w-[146px] h-[48px]'
            } relative bg-white rounded-3xl shadow-inner`}
            style={{
              boxShadow:
                'inset 0px -1.5px 3px rgba(0, 0, 0, 0.02), inset 0px 0px 30px rgba(0, 0, 0, 0.08), inset 0px 3px 6px rgba(0, 0, 0, 0.06)',
            }}
          >
            <div
              className={`absolute inset-0 flex items-center justify-center ${
                isDesktop ? 'text-2xl' : 'text-lg'
              } font-bold`}
            >
              {initialView ? '?' : temperatureRanges[temperatureIndex].display}
            </div>
          </div>
        </div>

        <div className="relative w-full h-auto md:w-[412px] md:h-[400px] grid grid-cols-2 gap-[8px] md:gap-[14px] px-[40px] py-[25px]">
          {currentOutfits
            .slice(currentOutfitIndex, currentOutfitIndex + 4)
            .map((outfit, index) => (
              <div
                key={index}
                className={`relative w-[115px] h-[130px] md:w-[159px] md:h-[177px] bg-white/40 rounded-2xl shadow border border-white backdrop-blur-[20px] flex items-center justify-center`}
              >
                {outfit.imageSrc ? (
                  <div className="flex items-center justify-center">
                    <Image
                      src={outfit.imageSrc}
                      alt={outfit.label}
                      width={isDesktop ? 100 : 54} // 769px 이상일 때는 100px, 이하일 때는 54px
                      height={isDesktop ? 100 : 56} // 769px 이상일 때는 100px, 이하일 때는 56px
                      style={{
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                ) : (
                  <div className="w-full h-full"></div> // 빈 div
                )}
                <div className="absolute top-0 left-0.8 w-full text-center pt-2">
                  <span
                    className="text-sm font-medium md:text-[18px]"
                    style={{
                      fontFamily: 'Noto Sans KR',
                      letterSpacing: '-0.24px',
                      fontWeight: 600,
                      fontStyle: 'normal',
                      color: 'var(--Box-text, rgba(18, 18, 18, 0.70))',
                    }}
                  >
                    {outfit.label}
                  </span>
                </div>
              </div>
            ))}

          {currentOutfitIndex > 0 && (
            <button
              className="absolute left-[8px] top-[50%] transform -translate-y-1/2 flex items-start opacity-[var(--sds-size-stroke-border)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] backdrop-filter backdrop-blur-[2px] rounded-full z-10"
              onClick={handlePrev}
              style={{
                padding: 0,
                border: 'none',
                background: 'transparent',
                boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.10)',
                backdropFilter: 'blur(2px)',
              }}
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
          {currentOutfitIndex + 4 < currentOutfits.length && (
            <button
              className="absolute right-[9px] top-[50%] transform -translate-y-1/2 flex items-start opacity-[var(--sds-size-stroke-border)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] backdrop-filter backdrop-blur-[2px] rounded-full z-10"
              onClick={handleNext}
              style={{
                padding: 0,
                border: 'none',
                boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.15)',
                backdropFilter: 'blur(4px)',
                opacity: 1,
              }}
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
        <button
          className="absolute left-[35px] top-[41.5%] transform -translate-y-1/2 flex items-center justify-center z-1"
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
          width={isDesktop ? 411 : 411}
          height={isDesktop ? 63 : 62}
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
            transition: animationsEnabled ? 'left 0.2s' : 'none',
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

        <button
          className="absolute right-[35px] top-[41.5%] transform -translate-y-1/2 flex items-center justify-center z-1"
          onClick={handleRightClick}
          style={{ padding: 0, border: 'none', background: 'transparent' }}
        >
          <Image
            src="/images/Weather2/Rbtn.svg"
            alt="Right Button"
            width={30}
            height={20}
            sizes="100vw"
          />
        </button>
      </div>

      <div className="w-full flex flex-col items-center mb-8">
        <Link href={'/list'}>
          <button className="w-full md:w-[335px] md:h-[49px] md:text-[16px] px-4 py-2 mb-4 text-base bg-black text-white rounded-lg button-style hover:bg-[rgba(94,176,255,0.80)] active:bg-[#73AEE7]">
            온도에 맞는 스타일
          </button>
        </Link>
        <Link href={'/survey'}>
          <button className="w-full md:w-[335px] md:h-[49px] md:text-[16px] px-4 py-2 border-2 border-black bg-white rounded-lg text-base button-style hover:border-[rgba(255,214,94,0.80)] hover:bg-[#FFF7D4] active:bg-[#E9E2C2] active:border-[rgba(255,214,94,0.80)]">
            취향 코디 추천받기
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ThermometerStyle;
