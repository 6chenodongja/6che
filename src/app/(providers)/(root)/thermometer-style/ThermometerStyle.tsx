
"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const outfits = {
  hot: ["/images.jpeg", "/muffler.png", "/images.jpeg", "/images.jpeg"],
  warm: ["/images.jpeg", "/images.jpeg", "/muffler.png", "/images.jpeg"],
  mild: ["/images.jpeg", "/images.jpeg", "/images.jpeg", "/muffler.png"],
  cool: ["/muffler.png", "/muffler.png", "/images.jpeg", "/images.jpeg"],
  chilly: ["/images.jpeg", "/muffler.png", "/muffler.png", "/images.jpeg"],
  cold: ["/images.jpeg", "/images.jpeg", "/muffler.png", "/muffler.png"],
  coldest: ["/muffler.png", "/muffler.png", "/muffler.png", "/muffler.png"],
};

const temperatureRanges = [
  { min: 28, label: "hot", display: "28°C 이상" },
  { min: 23, label: "warm", display: "27~23°C" },
  { min: 20, label: "mild", display: "22~20°C" },
  { min: 17, label: "cool", display: "19~17°C" },
  { min: 12, label: "chilly", display: "16~12°C" },
  { min: 9, label: "cold", display: "11~9°C" },
  { min: 4, label: "coldest", display: "8~5°C" },
  { min: -Infinity, label: "coldest", display: "4°C 이하" },
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
    const y = "clientY" in e ? e.clientY : e.touches[0].clientY;
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

    window.addEventListener("mouseup", handleMouseUpGlobal);
    window.addEventListener("touchend", handleMouseUpGlobal);

    return () => {
      window.removeEventListener("mouseup", handleMouseUpGlobal);
      window.removeEventListener("touchend", handleMouseUpGlobal);
    };
  }, []);

  const getOutfitsForTemperature = (tempIndex: number) => {
    const range = temperatureRanges[tempIndex];
    return range ? outfits[range.label] : outfits.coldest;
  };

  const currentOutfits = getOutfitsForTemperature(temperatureIndex) || [];

  const handleSurveyPage = () => {
    router.push("/surveypage");
  };

  return (
    <div className="max-w-sm mx-auto h-auto m-10">
      <h1 className="text-2xl font-bold mb-4">기온별 옷차림</h1>
      <p className="mb-4">기온에 따라 다른 옷차림을 확인해보세요.</p>
      <div className="flex items-center">
        <div className="flex flex-col items-center mr-4">
          <button
            className="bg-transparent mb-2"
            onClick={() => handleTemperatureChange(temperatureIndex - 1)}
          >
            ▲
          </button>
          <div
            ref={sliderRef}
            className="relative h-64 w-10 flex-shrink-0 flex flex-col items-center justify-between"
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
                top: `${(temperatureIndex / (temperatureRanges.length - 1)) * 100}%`,
                transform: "translateY(-50%)",
                width: "50px",
                height: "25px",
              }}
            />
          </div>
          <button
            className="bg-transparent mt-2"
            onClick={() => handleTemperatureChange(temperatureIndex + 1)}
          >
            ▼
          </button>
        </div>
        <div className="flex flex-col items-center">
          <span className="block text-center mb-2 text-sm w-full whitespace-nowrap">
            {temperatureRanges[temperatureIndex].display}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4 ml-4">
          {currentOutfits.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Outfit ${index + 1}`}
              width={100}
              height={100}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center w-full mt-4">
        <button className="w-full px-4 py-2 bg-gray-200 rounded mb-2">
          코디 보러가기
        </button>
        <button
          className="w-full px-4 py-2 bg-gray-200 rounded"
          onClick={handleSurveyPage}
        >
          내 취향 코디 추천받기
        </button>
      </div>
    </div>
  );
};

export default ThermometerStyle;
