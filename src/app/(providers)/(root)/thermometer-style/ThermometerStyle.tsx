"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import Header from "../../(components)/Header";

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
  const [temperature, setTemperature] = useState("18°C");
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const controllerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const router = useRouter();

  const handleTemperatureChange = (newTemperature: number) => {
    const range = temperatureRanges.find(
      (range) => newTemperature >= range.min
    );
    if (range) {
      setTemperature(range.display);
    }
  };

  const handleDrag = (e: React.MouseEvent | React.TouchEvent) => {
    if (!sliderRef.current || !isDragging) return;

    const sliderRect = sliderRef.current.getBoundingClientRect();
    const y = "clientY" in e ? e.clientY : e.touches[0].clientY;
    const sliderHeight = sliderRect.height;
    const relativeY = y - sliderRect.top;
    const percentage = 1 - relativeY / sliderHeight;
    const newTemperature = Math.round(percentage * 24 + 4);

    handleTemperatureChange(newTemperature);
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

  const getOutfitsForTemperature = (temp: string) => {
    const range = temperatureRanges.find((range) => range.display === temp);
    return range ? outfits[range.label] : outfits.coldest;
  };

  const currentOutfits = getOutfitsForTemperature(temperature) || [];

  const handleSurveyPage = () => {
    router.push("/surveypage");
  };

  return (
    <div>
      {/* <Header /> */}
      <div className="max-w-sm mx-auto h-auto m-10">
        <h1 className="text-2xl font-bold mb-4">기온별 옷차림</h1>
        <p className="mb-4">기온에 따라 다른 옷차림을 확인해보세요.</p>
        <div className="flex items-center mb-4">
          <div
            ref={sliderRef}
            className="relative h-64 w-10 flex-shrink-0"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
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
              className="absolute w-full cursor-pointer bg-white rounded-full border-2 border-gray-300"
              style={{
                top: `${100 - ((parseInt(temperature) - 4) / 24) * 100}%`,
                transform: "translateY(-50%)",
                width: "40px",
                height: "40px",
              }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleMouseDown}
            />
          </div>
          <span className="ml-2 text-sm w-20 text-center whitespace-nowrap">
            {temperature}
          </span>
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
    </div>
  );
};

export default ThermometerStyle;
