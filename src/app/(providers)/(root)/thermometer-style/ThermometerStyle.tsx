// // // // // // 'use client';

// // // // // // import React, {
// // // // // //   useState,
// // // // // //   useRef,
// // // // // //   useEffect,
// // // // // //   MouseEvent,
// // // // // //   TouchEvent,
// // // // // // } from 'react';
// // // // // // import Image from 'next/image';
// // // // // // import { useRouter } from 'next/navigation';

// // // // // // // Outfit type definitions
// // // // // // interface OutfitImages {
// // // // // //   hot: string[];
// // // // // //   warm: string[];
// // // // // //   mild: string[];
// // // // // //   cool: string[];
// // // // // //   chilly: string[];
// // // // // //   cold: string[];
// // // // // //   coldest: string[];
// // // // // // }

// // // // // // // Temperature range type definitions
// // // // // // interface TemperatureRange {
// // // // // //   min: number;
// // // // // //   label: keyof OutfitImages;
// // // // // //   display: string;
// // // // // // }

// // // // // // // Outfit images
// // // // // // const outfits: OutfitImages = {
// // // // // //   hot: ['/반팔티.svg', '/반바지.svg', '/셔츠.svg', '/면바지.svg'],
// // // // // //   warm: ['/반팔티.svg', '/반바지.svg', '/셔츠.svg', '/면바지.svg'],
// // // // // //   mild: ['/반팔티.svg', '/반바지.svg', '/셔츠.svg', '/면바지.svg'],
// // // // // //   cool: ['/반팔티.svg', '/반바지.svg', '/셔츠.svg', '/면바지.svg'],
// // // // // //   chilly: ['/반팔티.svg', '/반바지.svg', '/셔츠.svg', '/면바지.svg'],
// // // // // //   cold: ['/반팔티.svg', '/반바지.svg', '/셔츠.svg', '/면바지.svg'],
// // // // // //   coldest: ['/반팔티.svg', '/반바지.svg', '/셔츠.svg', '/면바지.svg'],
// // // // // // };

// // // // // // // Default images
// // // // // // const defaultImages: string[] = [
// // // // // //   '/default-blue.png',
// // // // // //   '/default-yellow.png',
// // // // // //   '/default-yellow.png',
// // // // // //   '/default-blue.png',
// // // // // // ];

// // // // // // // Outfit labels
// // // // // // const outfitLabels: string[] = ['반팔티', '반바지', '얇은 셔츠', '면바지'];

// // // // // // // Temperature ranges
// // // // // // const temperatureRanges: TemperatureRange[] = [
// // // // // //   { min: 28, label: 'hot', display: '28°C 이상' },
// // // // // //   { min: 23, label: 'warm', display: '23°C - 27°C' },
// // // // // //   { min: 20, label: 'mild', display: '20°C - 22°C' },
// // // // // //   { min: 17, label: 'cool', display: '17°C - 19°C' },
// // // // // //   { min: 12, label: 'chilly', display: '12°C - 16°C' },
// // // // // //   { min: 9, label: 'cold', display: '9°C - 11°C' },
// // // // // //   { min: 4, label: 'coldest', display: '4°C - 8°C' },
// // // // // //   { min: -Infinity, label: 'coldest', display: '4°C 이하' },
// // // // // // ];

// // // // // // // Component definition
// // // // // // const ThermometerStyle: React.FC = () => {
// // // // // //   const [temperatureIndex, setTemperatureIndex] = useState<number>(
// // // // // //     Math.floor(temperatureRanges.length / 2),
// // // // // //   );
// // // // // //   const sliderRef = useRef<HTMLDivElement | null>(null);
// // // // // //   const [isDragging, setIsDragging] = useState<boolean>(false);
// // // // // //   const [initialView, setInitialView] = useState<boolean>(true);

// // // // // //   const router = useRouter();

// // // // // //   const handleTemperatureChange = (newIndex: number) => {
// // // // // //     if (newIndex >= 0 && newIndex < temperatureRanges.length) {
// // // // // //       setTemperatureIndex(newIndex);
// // // // // //       setInitialView(false);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleDrag = (e: MouseEvent | TouchEvent) => {
// // // // // //     if (!sliderRef.current || !isDragging) return;

// // // // // //     const sliderRect = sliderRef.current.getBoundingClientRect();
// // // // // //     const x = 'clientX' in e ? e.clientX : e.touches[0]?.clientX;
// // // // // //     if (x == null) return;

// // // // // //     const sliderWidth = sliderRect.width;
// // // // // //     const relativeX = x - sliderRect.left;
// // // // // //     const percentage = Math.min(Math.max(relativeX / sliderWidth, 0), 1); // Ensure percentage is between 0 and 1
// // // // // //     const newIndex = Math.round((temperatureRanges.length - 1) * percentage);

// // // // // //     handleTemperatureChange(newIndex);
// // // // // //   };

// // // // // //   const handleMouseDown = () => setIsDragging(true);
// // // // // //   const handleMouseUp = () => setIsDragging(false);

// // // // // //   useEffect(() => {
// // // // // //     const handleMouseUpGlobal = () => setIsDragging(false);

// // // // // //     window.addEventListener('mouseup', handleMouseUpGlobal);
// // // // // //     window.addEventListener('touchend', handleMouseUpGlobal);

// // // // // //     return () => {
// // // // // //       window.removeEventListener('mouseup', handleMouseUpGlobal);
// // // // // //       window.removeEventListener('touchend', handleMouseUpGlobal);
// // // // // //     };
// // // // // //   }, []);

// // // // // //   const getOutfitsForTemperature = (tempIndex: number): string[] => {
// // // // // //     const range = temperatureRanges[tempIndex];
// // // // // //     return outfits[range.label] || defaultImages;
// // // // // //   };

// // // // // //   const currentOutfits =
// // // // // //     temperatureIndex === Math.floor(temperatureRanges.length / 2) && initialView
// // // // // //       ? defaultImages
// // // // // //       : getOutfitsForTemperature(temperatureIndex);

// // // // // //   const handleSurveyPage = () => {
// // // // // //     router.push('/surveypage');
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center min-h-screen bg-[#f5f5f5]">
// // // // // //       <div className="flex flex-col items-center mt-8">
// // // // // //         <h1 className="text-2xl font-bold mb-4">기온 별 옷차림</h1>
// // // // // //         <div className="relative grid grid-cols-2 gap-6">
// // // // // //           {currentOutfits.map((src, index) => (
// // // // // //             <div
// // // // // //               key={index}
// // // // // //               className="flex flex-col items-center justify-center"
// // // // // //             >
// // // // // //               <div className="w-[88px] h-[100px] bg-white shadow-lg rounded-lg flex items-center justify-center relative">
// // // // // //                 <Image
// // // // // //                   src={src}
// // // // // //                   alt={`Outfit ${index + 1}`}
// // // // // //                   width={56}
// // // // // //                   height={54}
// // // // // //                   className="object-contain"
// // // // // //                 />
// // // // // //                 <span className="absolute bottom-2 text-center text-sm">
// // // // // //                   {outfitLabels[index]}
// // // // // //                 </span>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //         <div className="relative my-8">
// // // // // //           <Image
// // // // // //             src="/temperature-box.svg"
// // // // // //             alt="Temperature Box"
// // // // // //             width={172}
// // // // // //             height={63}
// // // // // //           />
// // // // // //           <span className="absolute inset-0 flex items-center justify-center text-lg font-bold">
// // // // // //             {initialView ? '?' : temperatureRanges[temperatureIndex].display}
// // // // // //           </span>
// // // // // //         </div>
// // // // // //         <div
// // // // // //           ref={sliderRef}
// // // // // //           className="relative w-full max-w-md h-10 flex items-center justify-center mb-8 overflow-hidden"
// // // // // //           onMouseMove={handleDrag}
// // // // // //           onTouchMove={handleDrag}
// // // // // //           onMouseDown={handleMouseDown}
// // // // // //           onTouchStart={handleMouseDown}
// // // // // //         >
// // // // // //           <Image
// // // // // //             src="/Thermometer.svg"
// // // // // //             alt="Thermometer Body"
// // // // // //             width={274}
// // // // // //             height={42}
// // // // // //             priority
// // // // // //           />
// // // // // //           <div
// // // // // //             className="absolute cursor-pointer"
// // // // // //             style={{
// // // // // //               left: initialView
// // // // // //                 ? '50%'
// // // // // //                 : `${(temperatureIndex / (temperatureRanges.length - 1)) * 100}%`,
// // // // // //               top: '50%',
// // // // // //               transform: 'translate(-50%, -50%)',
// // // // // //             }}
// // // // // //           >
// // // // // //             <Image
// // // // // //               src="/Thermometer-controller.svg"
// // // // // //               alt="Thermometer Controller"
// // // // // //               width={42}
// // // // // //               height={24.36}
// // // // // //               className="object-contain"
// // // // // //             />
// // // // // //           </div>
// // // // // //           <button
// // // // // //             className="absolute left-2 top-1/2 -translate-y-1/2"
// // // // // //             onClick={() => handleTemperatureChange(temperatureIndex - 1)}
// // // // // //           >
// // // // // //             <Image
// // // // // //               src="/arrow_Left.svg"
// // // // // //               alt="Left Arrow"
// // // // // //               width={24}
// // // // // //               height={24}
// // // // // //             />
// // // // // //           </button>
// // // // // //           <button
// // // // // //             className="absolute right-2 top-1/2 -translate-y-1/2"
// // // // // //             onClick={() => handleTemperatureChange(temperatureIndex + 1)}
// // // // // //           >
// // // // // //             <Image
// // // // // //               src="/arrow_Right.svg"
// // // // // //               alt="Right Arrow"
// // // // // //               width={24}
// // // // // //               height={24}
// // // // // //             />
// // // // // //           </button>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Buttons */}
// // // // // //       <div className="w-full px-4 mb-8">
// // // // // //         <button className="w-full px-4 py-2 mb-4 font-medium bg-black text-white rounded">
// // // // // //           온도에 맞는 스타일 보러가기
// // // // // //         </button>
// // // // // //         <button
// // // // // //           className="w-full px-4 py-2 border border-black bg-white rounded"
// // // // // //           onClick={handleSurveyPage}
// // // // // //         >
// // // // // //           취향 코디 추천받기
// // // // // //         </button>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default ThermometerStyle;

// // // // // 'use client';

// // // // // import React, {
// // // // //   useState,
// // // // //   useRef,
// // // // //   useEffect,
// // // // //   MouseEvent,
// // // // //   TouchEvent,
// // // // // } from 'react';
// // // // // import { useRouter } from 'next/navigation';
// // // // // import Image from 'next/image';

// // // // // // Outfit type definitions
// // // // // interface OutfitImages {
// // // // //   hot: string[];
// // // // //   warm: string[];
// // // // //   mild: string[];
// // // // //   cool: string[];
// // // // //   chilly: string[];
// // // // //   cold: string[];
// // // // //   coldest: string[];
// // // // // }

// // // // // // Temperature range type definitions
// // // // // interface TemperatureRange {
// // // // //   min: number;
// // // // //   label: keyof OutfitImages;
// // // // //   display: string;
// // // // // }

// // // // // // Outfit images
// // // // // const outfits: OutfitImages = {
// // // // //   hot: ['/반팔티.svg', '/반바지.svg', '/셔츠.svg', '/면바지.svg'],
// // // // //   warm: ['/반팔티.svg', '/반바지.svg', '/셔츠.svg', '/면바지.svg'],
// // // // //   mild: ['/반팔티.svg', '/반바지.svg', '/셔츠.svg', '/면바지.svg'],
// // // // //   cool: ['/반팔티.svg', '/반바지.svg', '/셔츠.svg', '/면바지.svg'],
// // // // //   chilly: ['/반팔티.svg', '/반바지.svg', '/셔츠.svg', '/면바지.svg'],
// // // // //   cold: ['/반팔티.svg', '/반바지.svg', '/셔츠.svg', '/면바지.svg'],
// // // // //   coldest: ['/반팔티.svg', '/반바지.svg', '/셔츠.svg', '/면바지.svg'],
// // // // // };

// // // // // // Default images
// // // // // const defaultImages: string[] = [
// // // // //   '/default-blue.png',
// // // // //   '/default-blue.png',
// // // // //   '/default-blue.png',
// // // // //   '/default-blue.png',
// // // // // ];

// // // // // // Outfit labels
// // // // // const outfitLabels: string[] = ['반팔티', '반바지', '얇은 셔츠', '면바지'];

// // // // // // Temperature ranges
// // // // // const temperatureRanges: TemperatureRange[] = [
// // // // //   { min: 28, label: 'hot', display: '28°C 이상' },
// // // // //   { min: 23, label: 'warm', display: '23°C - 27°C' },
// // // // //   { min: 20, label: 'mild', display: '20°C - 22°C' },
// // // // //   { min: 17, label: 'cool', display: '17°C - 19°C' },
// // // // //   { min: 12, label: 'chilly', display: '12°C - 16°C' },
// // // // //   { min: 9, label: 'cold', display: '9°C - 11°C' },
// // // // //   { min: 4, label: 'coldest', display: '4°C - 8°C' },
// // // // //   { min: -Infinity, label: 'coldest', display: '4°C 이하' },
// // // // // ];

// // // // // const ThermometerStyle: React.FC = () => {
// // // // //   const [temperatureIndex, setTemperatureIndex] = useState<number>(
// // // // //     Math.floor(temperatureRanges.length / 2),
// // // // //   );
// // // // //   const sliderRef = useRef<HTMLDivElement | null>(null);
// // // // //   const [isDragging, setIsDragging] = useState<boolean>(false);
// // // // //   const [initialView, setInitialView] = useState<boolean>(true);

// // // // //   const router = useRouter();

// // // // //   const handleTemperatureChange = (newIndex: number) => {
// // // // //     if (newIndex >= 0 && newIndex < temperatureRanges.length) {
// // // // //       setTemperatureIndex(newIndex);
// // // // //       setInitialView(false);
// // // // //     }
// // // // //   };

// // // // //   const handleDrag = (e: MouseEvent | TouchEvent) => {
// // // // //     if (!sliderRef.current || !isDragging) return;

// // // // //     const sliderRect = sliderRef.current.getBoundingClientRect();
// // // // //     const x = 'clientX' in e ? e.clientX : e.touches[0]?.clientX;
// // // // //     if (x == null) return;

// // // // //     const sliderWidth = sliderRect.width;
// // // // //     const relativeX = x - sliderRect.left;
// // // // //     const percentage = Math.min(Math.max(relativeX / sliderWidth, 0), 1);
// // // // //     const newIndex = Math.round((temperatureRanges.length - 1) * percentage);

// // // // //     handleTemperatureChange(newIndex);
// // // // //   };

// // // // //   const handleMouseDown = () => setIsDragging(true);
// // // // //   const handleMouseUp = () => setIsDragging(false);

// // // // //   useEffect(() => {
// // // // //     const handleMouseUpGlobal = () => setIsDragging(false);

// // // // //     window.addEventListener('mouseup', handleMouseUpGlobal);
// // // // //     window.addEventListener('touchend', handleMouseUpGlobal);

// // // // //     return () => {
// // // // //       window.removeEventListener('mouseup', handleMouseUpGlobal);
// // // // //       window.removeEventListener('touchend', handleMouseUpGlobal);
// // // // //     };
// // // // //   }, []);

// // // // //   const getOutfitsForTemperature = (tempIndex: number): string[] => {
// // // // //     const range = temperatureRanges[tempIndex];
// // // // //     return outfits[range.label] || defaultImages;
// // // // //   };

// // // // //   const currentOutfits =
// // // // //     temperatureIndex === Math.floor(temperatureRanges.length / 2) && initialView
// // // // //       ? defaultImages
// // // // //       : getOutfitsForTemperature(temperatureIndex);

// // // // //   const handleSurveyPage = () => {
// // // // //     router.push('/surveypage');
// // // // //   };

// // // // //   return (
// // // // //     <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center min-h-screen bg-[#f5f5f5]">
// // // // //       <div className="flex flex-col items-center mt-4 mb-8">
// // // // //         <h1 className="text-2xl font-bold mb-4">기온 별 옷차림</h1>
// // // // //         <div className="relative">
// // // // //           <div className="grid grid-cols-2 gap-4 mb-6">
// // // // //             {currentOutfits.map((src: string, index: number) => (
// // // // //               <div
// // // // //                 key={index}
// // // // //                 className="flex flex-col items-center justify-center gap-2 p-4 w-[164px] h-[162px] bg-white shadow rounded-lg bg-opacity-40 backdrop-blur-lg border border-white relative"
// // // // //               >
// // // // //                 {!initialView && (
// // // // //                   <span className="text-sm text-center mb-2">
// // // // //                     {outfitLabels[index]}
// // // // //                   </span>
// // // // //                 )}
// // // // //                 <Image
// // // // //                   src={src}
// // // // //                   alt={`Outfit ${index + 1}`}
// // // // //                   width={88}
// // // // //                   height={100}
// // // // //                 />
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //         <div className="relative mb-4">
// // // // //           <Image
// // // // //             src="/temperature-box.svg"
// // // // //             alt="Temperature Box"
// // // // //             width={172}
// // // // //             height={63}
// // // // //           />
// // // // //           {initialView ? (
// // // // //             <span className="absolute inset-0 flex items-center justify-center text-lg font-bold">
// // // // //               ?
// // // // //             </span>
// // // // //           ) : (
// // // // //             <span className="absolute inset-0 flex items-center justify-center text-lg font-bold">
// // // // //               {temperatureRanges[temperatureIndex].display}
// // // // //             </span>
// // // // //           )}
// // // // //         </div>
// // // // //         <div
// // // // //           ref={sliderRef}
// // // // //           className="relative w-72 h-10 flex items-center justify-center mb-8 overflow-hidden"
// // // // //           onMouseMove={handleDrag}
// // // // //           onTouchMove={handleDrag}
// // // // //           onMouseDown={handleMouseDown}
// // // // //           onTouchStart={handleMouseDown}
// // // // //         >
// // // // //           <Image
// // // // //             src="/Thermometer.svg"
// // // // //             alt="Thermometer Body"
// // // // //             width={274}
// // // // //             height={42}
// // // // //             priority
// // // // //           />
// // // // //           <div
// // // // //             className="absolute cursor-pointer"
// // // // //             style={{
// // // // //               left: initialView
// // // // //                 ? '50%'
// // // // //                 : `${(temperatureIndex / (temperatureRanges.length - 1)) * 100}%`,
// // // // //               top: '50%',
// // // // //               transform: 'translate(-50%, -50%)',
// // // // //             }}
// // // // //           >
// // // // //             <Image
// // // // //               src="/Thermometer-controller.svg"
// // // // //               alt="Thermometer Controller"
// // // // //               width={42}
// // // // //               height={24.36}
// // // // //               className="object-contain"
// // // // //             />
// // // // //           </div>
// // // // //           <button
// // // // //             className="absolute left-2 top-1/2 -translate-y-1/2"
// // // // //             onClick={() => handleTemperatureChange(temperatureIndex - 1)}
// // // // //           >
// // // // //             <Image
// // // // //               src="/arrow_Left.svg"
// // // // //               alt="Left Arrow"
// // // // //               width={24}
// // // // //               height={24}
// // // // //             />
// // // // //           </button>
// // // // //           <button
// // // // //             className="absolute right-2 top-1/2 -translate-y-1/2"
// // // // //             onClick={() => handleTemperatureChange(temperatureIndex + 1)}
// // // // //           >
// // // // //             <Image
// // // // //               src="/arrow_Right.svg"
// // // // //               alt="Right Arrow"
// // // // //               width={24}
// // // // //               height={24}
// // // // //             />
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Buttons */}
// // // // //       <div className="w-full px-4 mb-8">
// // // // //         <button className="w-full px-4 py-2 mb-4 font-medium bg-black text-white rounded">
// // // // //           온도에 맞는 스타일 보러가기
// // // // //         </button>
// // // // //         <button
// // // // //           className="w-full px-4 py-2 border border-black bg-white rounded"
// // // // //           onClick={handleSurveyPage}
// // // // //         >
// // // // //           취향 코디 추천받기
// // // // //         </button>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ThermometerStyle;

// // // // 'use client';

// // // // import React, {
// // // //   useState,
// // // //   useRef,
// // // //   useEffect,
// // // //   MouseEvent,
// // // //   TouchEvent,
// // // // } from 'react';
// // // // import { useRouter } from 'next/navigation';
// // // // import Image from 'next/image';

// // // // // Outfit type definitions
// // // // interface OutfitImages {
// // // //   hot: string[];
// // // //   warm: string[];
// // // //   mild: string[];
// // // //   cool: string[];
// // // //   chilly: string[];
// // // //   cold: string[];
// // // //   coldest: string[];
// // // // }

// // // // // Temperature range type definitions
// // // // interface TemperatureRange {
// // // //   min: number;
// // // //   label: keyof OutfitImages;
// // // //   display: string;
// // // // }

// // // // // Outfit images
// // // // const outfits: OutfitImages = {
// // // //   hot: ['/반팔티.svg', '/반바지.svg', '/셔츠.svg', '/면바지.svg'],
// // // //   warm: ['/반팔티.svg', '/반바지.svg', '/셔츠.svg', '/면바지.svg'],
// // // //   mild: ['/반팔티.svg', '/반바지.svg', '/셔츠.svg', '/면바지.svg'],
// // // //   cool: ['/반팔티.svg', '/반바지.svg', '/셔츠.svg', '/면바지.svg'],
// // // //   chilly: ['/반팔티.svg', '/반바지.svg', '/셔츠.svg', '/면바지.svg'],
// // // //   cold: ['/반팔티.svg', '/반바지.svg', '/셔츠.svg', '/면바지.svg'],
// // // //   coldest: ['/반팔티.svg', '/반바지.svg', '/셔츠.svg', '/면바지.svg'],
// // // // };

// // // // // Default images
// // // // const defaultImages: string[] = [
// // // //   '/default-blue.png',
// // // //   '/default-blue.png',
// // // //   '/default-blue.png',
// // // //   '/default-blue.png',
// // // // ];

// // // // // Outfit labels
// // // // const outfitLabels: string[] = ['반팔티', '반바지', '얇은 셔츠', '면바지'];

// // // // // Temperature ranges
// // // // const temperatureRanges: TemperatureRange[] = [
// // // //   { min: 28, label: 'hot', display: '28°C 이상' },
// // // //   { min: 23, label: 'warm', display: '23°C - 27°C' },
// // // //   { min: 20, label: 'mild', display: '20°C - 22°C' },
// // // //   { min: 17, label: 'cool', display: '17°C - 19°C' },
// // // //   { min: 12, label: 'chilly', display: '12°C - 16°C' },
// // // //   { min: 9, label: 'cold', display: '9°C - 11°C' },
// // // //   { min: 4, label: 'coldest', display: '4°C - 8°C' },
// // // //   { min: -Infinity, label: 'coldest', display: '4°C 이하' },
// // // // ];

// // // // const ThermometerStyle: React.FC = () => {
// // // //   const [temperatureIndex, setTemperatureIndex] = useState<number>(
// // // //     Math.floor(temperatureRanges.length / 2),
// // // //   );
// // // //   const sliderRef = useRef<HTMLDivElement | null>(null);
// // // //   const [isDragging, setIsDragging] = useState<boolean>(false);
// // // //   const [initialView, setInitialView] = useState<boolean>(true);

// // // //   const router = useRouter();

// // // //   const handleTemperatureChange = (newIndex: number) => {
// // // //     if (newIndex >= 0 && newIndex < temperatureRanges.length) {
// // // //       setTemperatureIndex(newIndex);
// // // //       setInitialView(false);
// // // //     }
// // // //   };

// // // //   const handleDrag = (e: MouseEvent | TouchEvent) => {
// // // //     if (!sliderRef.current || !isDragging) return;

// // // //     const sliderRect = sliderRef.current.getBoundingClientRect();
// // // //     const x = 'clientX' in e ? e.clientX : e.touches[0]?.clientX;
// // // //     if (x == null) return;

// // // //     const sliderWidth = sliderRect.width;
// // // //     const relativeX = x - sliderRect.left;
// // // //     const percentage = Math.min(Math.max(relativeX / sliderWidth, 0), 1);
// // // //     const newIndex = Math.round((temperatureRanges.length - 1) * percentage);

// // // //     handleTemperatureChange(newIndex);
// // // //   };

// // // //   const handleMouseDown = () => setIsDragging(true);
// // // //   const handleMouseUp = () => setIsDragging(false);

// // // //   useEffect(() => {
// // // //     const handleMouseUpGlobal = () => setIsDragging(false);

// // // //     window.addEventListener('mouseup', handleMouseUpGlobal);
// // // //     window.addEventListener('touchend', handleMouseUpGlobal);

// // // //     return () => {
// // // //       window.removeEventListener('mouseup', handleMouseUpGlobal);
// // // //       window.removeEventListener('touchend', handleMouseUpGlobal);
// // // //     };
// // // //   }, []);

// // // //   const getOutfitsForTemperature = (tempIndex: number): string[] => {
// // // //     const range = temperatureRanges[tempIndex];
// // // //     return outfits[range.label] || defaultImages;
// // // //   };

// // // //   const currentOutfits =
// // // //     temperatureIndex === Math.floor(temperatureRanges.length / 2) && initialView
// // // //       ? defaultImages
// // // //       : getOutfitsForTemperature(temperatureIndex);

// // // //   const handleSurveyPage = () => {
// // // //     router.push('/surveypage');
// // // //   };

// // // //   return (
// // // //     <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center min-h-screen bg-[#f5f5f5]">
// // // //       <div className="flex flex-col items-center mt-4 mb-8">
// // // //         <h1 className="text-2xl font-bold mb-4">기온 별 옷차림</h1>
// // // //         <div className="relative">
// // // //           <div className="grid grid-cols-2 gap-4 mb-6">
// // // //             {currentOutfits.map((src: string, index: number) => (
// // // //               <div
// // // //                 key={index}
// // // //                 className="flex flex-col items-center justify-center gap-2 p-4 w-[132px] h-[150px] bg-white shadow rounded-lg bg-opacity-40 backdrop-blur-lg border border-white relative"
// // // //               >
// // // //                 {!initialView && (
// // // //                   <span className="text-sm text-center mb-2">
// // // //                     {outfitLabels[index]}
// // // //                   </span>
// // // //                 )}
// // // //                 <Image
// // // //                   src={src}
// // // //                   alt={`Outfit ${index + 1}`}
// // // //                   width={88}
// // // //                   height={100}
// // // //                 />
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //         <div className="relative mb-4">
// // // //           <Image
// // // //             src="/temperature-box.svg"
// // // //             alt="Temperature Box"
// // // //             width={172}
// // // //             height={63}
// // // //           />
// // // //           {initialView ? (
// // // //             <span className="absolute inset-0 flex items-center justify-center text-lg font-bold">
// // // //               ?
// // // //             </span>
// // // //           ) : (
// // // //             <span className="absolute inset-0 flex items-center justify-center text-lg font-bold">
// // // //               {temperatureRanges[temperatureIndex].display}
// // // //             </span>
// // // //           )}
// // // //         </div>
// // // //         <div
// // // //           ref={sliderRef}
// // // //           className="relative w-72 h-10 flex items-center justify-center mb-8 overflow-hidden"
// // // //           onMouseMove={handleDrag}
// // // //           onTouchMove={handleDrag}
// // // //           onMouseDown={handleMouseDown}
// // // //           onTouchStart={handleMouseDown}
// // // //         >
// // // //           <Image
// // // //             src="/Thermometer.svg"
// // // //             alt="Thermometer Body"
// // // //             width={411}
// // // //             height={63}
// // // //             priority
// // // //           />
// // // //           <div
// // // //             className="absolute cursor-pointer"
// // // //             style={{
// // // //               left: initialView
// // // //                 ? '50%'
// // // //                 : `${(temperatureIndex / (temperatureRanges.length - 1)) * 100}%`,
// // // //               top: '50%',
// // // //               transform: 'translate(-50%, -50%)',
// // // //             }}
// // // //           >
// // // //             <Image
// // // //               src="/Thermometer-controller.svg"
// // // //               alt="Thermometer Controller"
// // // //               width={42}
// // // //               height={24.36}
// // // //               className="object-contain"
// // // //             />
// // // //           </div>
// // // //           <button
// // // //             className="absolute left-2 top-1/2 -translate-y-1/2"
// // // //             onClick={() => handleTemperatureChange(temperatureIndex - 1)}
// // // //           >
// // // //             <Image
// // // //               src="/arrow_Left.svg"
// // // //               alt="Left Arrow"
// // // //               width={24}
// // // //               height={24}
// // // //             />
// // // //           </button>
// // // //           <button
// // // //             className="absolute right-2 top-1/2 -translate-y-1/2"
// // // //             onClick={() => handleTemperatureChange(temperatureIndex + 1)}
// // // //           >
// // // //             <Image
// // // //               src="/arrow_Right.svg"
// // // //               alt="Right Arrow"
// // // //               width={24}
// // // //               height={24}
// // // //             />
// // // //           </button>
// // // //         </div>
// // // //       </div>

// // // //       {/* Buttons */}
// // // //       <div className="w-full px-4 mb-8">
// // // //         <button className="w-full px-4 py-2 mb-4 font-medium bg-black text-white rounded">
// // // //           온도에 맞는 스타일 보러가기
// // // //         </button>
// // // //         <button
// // // //           className="w-full px-4 py-2 border border-black bg-white rounded"
// // // //           onClick={handleSurveyPage}
// // // //         >
// // // //           취향 코디 추천받기
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ThermometerStyle;

// // // 'use client';

// // // import React, {
// // //   useState,
// // //   useRef,
// // //   useEffect,
// // //   MouseEvent,
// // //   TouchEvent,
// // // } from 'react';
// // // import { useRouter } from 'next/navigation';
// // // import Image from 'next/image';

// // // // Outfit type definitions
// // // interface OutfitImages {
// // //   hot: string[];
// // //   warm: string[];
// // //   mild: string[];
// // //   cool: string[];
// // //   chilly: string[];
// // //   cold: string[];
// // //   coldest: string[];
// // // }

// // // // Temperature range type definitions
// // // interface TemperatureRange {
// // //   min: number;
// // //   label: keyof OutfitImages;
// // //   display: string;
// // // }

// // // // Outfit images
// // // const outfits: OutfitImages = {
// // //   hot: ['/반팔티.svg', '/반바지.svg', '/셔츠.svg', '/면바지.svg'],
// // //   warm: ['/반팔티.svg', '/반바지.svg', '/셔츠.svg', '/면바지.svg'],
// // //   mild: ['/반팔티.svg', '/반바지.svg', '/셔츠.svg', '/면바지.svg'],
// // //   cool: ['/반팔티.svg', '/반바지.svg', '/셔츠.svg', '/면바지.svg'],
// // //   chilly: ['/반팔티.svg', '/반바지.svg', '/셔츠.svg', '/면바지.svg'],
// // //   cold: ['/반팔티.svg', '/반바지.svg', '/셔츠.svg', '/면바지.svg'],
// // //   coldest: ['/반팔티.svg', '/반바지.svg', '/셔츠.svg', '/면바지.svg'],
// // // };

// // // // Default images
// // // const defaultImages: string[] = [
// // //   '/default-blue.png',
// // //   '/default-blue.png',
// // //   '/default-blue.png',
// // //   '/default-blue.png',
// // // ];

// // // // Outfit labels
// // // const outfitLabels: string[] = ['반팔티', '반바지', '얇은 셔츠', '면바지'];

// // // // Temperature ranges
// // // const temperatureRanges: TemperatureRange[] = [
// // //   { min: 28, label: 'hot', display: '28°C 이상' },
// // //   { min: 23, label: 'warm', display: '23°C - 27°C' },
// // //   { min: 20, label: 'mild', display: '20°C - 22°C' },
// // //   { min: 17, label: 'cool', display: '17°C - 19°C' },
// // //   { min: 12, label: 'chilly', display: '12°C - 16°C' },
// // //   { min: 9, label: 'cold', display: '9°C - 11°C' },
// // //   { min: 4, label: 'coldest', display: '4°C - 8°C' },
// // //   { min: -Infinity, label: 'coldest', display: '4°C 이하' },
// // // ];

// // // const ThermometerStyle: React.FC = () => {
// // //   const [temperatureIndex, setTemperatureIndex] = useState<number>(
// // //     Math.floor(temperatureRanges.length / 2),
// // //   );
// // //   const sliderRef = useRef<HTMLDivElement | null>(null);
// // //   const [isDragging, setIsDragging] = useState<boolean>(false);
// // //   const [initialView, setInitialView] = useState<boolean>(true);

// // //   const router = useRouter();

// // //   const handleTemperatureChange = (newIndex: number) => {
// // //     if (newIndex >= 0 && newIndex < temperatureRanges.length) {
// // //       setTemperatureIndex(newIndex);
// // //       setInitialView(false);
// // //     }
// // //   };

// // //   const handleDrag = (e: MouseEvent | TouchEvent) => {
// // //     if (!sliderRef.current || !isDragging) return;

// // //     const sliderRect = sliderRef.current.getBoundingClientRect();
// // //     const x = 'clientX' in e ? e.clientX : e.touches[0]?.clientX;
// // //     if (x == null) return;

// // //     const sliderWidth = sliderRect.width;
// // //     const relativeX = x - sliderRect.left;
// // //     const percentage = Math.min(Math.max(relativeX / sliderWidth, 0), 1);
// // //     const newIndex = Math.round((temperatureRanges.length - 1) * percentage);

// // //     handleTemperatureChange(newIndex);
// // //   };

// // //   const handleMouseDown = () => setIsDragging(true);
// // //   const handleMouseUp = () => setIsDragging(false);

// // //   useEffect(() => {
// // //     const handleMouseUpGlobal = () => setIsDragging(false);

// // //     window.addEventListener('mouseup', handleMouseUpGlobal);
// // //     window.addEventListener('touchend', handleMouseUpGlobal);

// // //     return () => {
// // //       window.removeEventListener('mouseup', handleMouseUpGlobal);
// // //       window.removeEventListener('touchend', handleMouseUpGlobal);
// // //     };
// // //   }, []);

// // //   const getOutfitsForTemperature = (tempIndex: number): string[] => {
// // //     const range = temperatureRanges[tempIndex];
// // //     return outfits[range.label] || defaultImages;
// // //   };

// // //   const currentOutfits =
// // //     temperatureIndex === Math.floor(temperatureRanges.length / 2) && initialView
// // //       ? defaultImages
// // //       : getOutfitsForTemperature(temperatureIndex);

// // //   const handleSurveyPage = () => {
// // //     router.push('/surveypage');
// // //   };

// // //   return (
// // //     <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center min-h-screen bg-[#f5f5f5]">
// // //       <div className="flex flex-col items-center mt-4 mb-8">
// // //         <h1 className="text-2xl font-bold mb-4">기온 별 옷차림</h1>
// // //         <div className="relative">
// // //           <div className="grid grid-cols-2 gap-4 mb-6">
// // //             {currentOutfits.map((src: string, index: number) => (
// // //               <div
// // //                 key={index}
// // //                 className="flex flex-col items-center justify-center gap-2 p-4 w-[132px] h-[150px] bg-white shadow rounded-lg bg-opacity-40 backdrop-blur-lg border border-white relative"
// // //               >
// // //                 {!initialView && (
// // //                   <span className="text-sm text-center mb-2">
// // //                     {outfitLabels[index]}
// // //                   </span>
// // //                 )}
// // //                 <Image
// // //                   src={src}
// // //                   alt={`Outfit ${index + 1}`}
// // //                   width={132}
// // //                   height={150}
// // //                 />
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //         <div className="relative mb-4">
// // //           <Image
// // //             src="/temperature-box.svg"
// // //             alt="Temperature Box"
// // //             width={172}
// // //             height={63}
// // //           />
// // //           {initialView ? (
// // //             <span className="absolute inset-0 flex items-center justify-center text-lg font-bold">
// // //               ?
// // //             </span>
// // //           ) : (
// // //             <span className="absolute inset-0 flex items-center justify-center text-lg font-bold">
// // //               {temperatureRanges[temperatureIndex].display}
// // //             </span>
// // //           )}
// // //         </div>
// // //         <div
// // //           ref={sliderRef}
// // //           className="relative w-[411px] h-[63px] flex items-center justify-center mb-8 overflow-hidden"
// // //           onMouseMove={handleDrag}
// // //           onTouchMove={handleDrag}
// // //           onMouseDown={handleMouseDown}
// // //           onTouchStart={handleMouseDown}
// // //         >
// // //           <Image
// // //             src="/Thermometer.svg"
// // //             alt="Thermometer Body"
// // //             width={411}
// // //             height={63}
// // //             priority
// // //           />
// // //           <div
// // //             className="absolute cursor-pointer"
// // //             style={{
// // //               left: initialView
// // //                 ? '50%'
// // //                 : `${(temperatureIndex / (temperatureRanges.length - 1)) * 100}%`,
// // //               top: '50%',
// // //               transform: 'translate(-50%, -50%)',
// // //             }}
// // //           >
// // //             <Image
// // //               src="/Thermometer-controller.svg"
// // //               alt="Thermometer Controller"
// // //               width={42}
// // //               height={24.36}
// // //               className="object-contain"
// // //             />
// // //           </div>
// // //           <Image
// // //             src="/Rectangle 97.svg"
// // //             alt="Background Rectangle"
// // //             width={206}
// // //             height={86.25}
// // //             className="absolute inset-0"
// // //             style={{ transform: 'translate(-50%, -50%)' }}
// // //           />
// // //           <button
// // //             className="absolute left-2 top-1/2 -translate-y-1/2"
// // //             onClick={() => handleTemperatureChange(temperatureIndex - 1)}
// // //           >
// // //             <Image
// // //               src="/arrow_Left.svg"
// // //               alt="Left Arrow"
// // //               width={24}
// // //               height={24}
// // //             />
// // //           </button>
// // //           <button
// // //             className="absolute right-2 top-1/2 -translate-y-1/2"
// // //             onClick={() => handleTemperatureChange(temperatureIndex + 1)}
// // //           >
// // //             <Image
// // //               src="/arrow_Right.svg"
// // //               alt="Right Arrow"
// // //               width={24}
// // //               height={24}
// // //             />
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {/* Buttons */}
// // //       <div className="w-full px-4 mb-8">
// // //         <button className="w-full px-4 py-2 mb-4 font-medium bg-black text-white rounded">
// // //           온도에 맞는 스타일 보러가기
// // //         </button>
// // //         <button
// // //           className="w-full px-4 py-2 border border-black bg-white rounded"
// // //           onClick={handleSurveyPage}
// // //         >
// // //           취향 코디 추천받기
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ThermometerStyle;

// // 'use client';

// // import React, {
// //   useState,
// //   useRef,
// //   useEffect,
// //   MouseEvent,
// //   TouchEvent,
// // } from 'react';
// // import { useRouter } from 'next/navigation';
// // import Image from 'next/image';

// // // Outfit type definitions
// // interface OutfitImages {
// //   hot: string[];
// //   warm: string[];
// //   mild: string[];
// //   cool: string[];
// //   chilly: string[];
// //   cold: string[];
// //   coldest: string[];
// // }

// // // Temperature range type definitions
// // interface TemperatureRange {
// //   min: number;
// //   label: keyof OutfitImages;
// //   display: string;
// // }

// // // Outfit images
// // const outfits: OutfitImages = {
// //   hot: ['/반팔티.svg', '/반바지.svg', '/셔츠.svg', '/면바지.svg'],
// //   warm: ['/반팔티.svg', '/반바지.svg', '/셔츠.svg', '/면바지.svg'],
// //   mild: ['/반팔티.svg', '/반바지.svg', '/셔츠.svg', '/면바지.svg'],
// //   cool: ['/반팔티.svg', '/반바지.svg', '/셔츠.svg', '/면바지.svg'],
// //   chilly: ['/반팔티.svg', '/반바지.svg', '/셔츠.svg', '/면바지.svg'],
// //   cold: ['/반팔티.svg', '/반바지.svg', '/셔츠.svg', '/면바지.svg'],
// //   coldest: ['/반팔티.svg', '/반바지.svg', '/셔츠.svg', '/면바지.svg'],
// // };

// // // Default images
// // const defaultImages: string[] = [
// //   '/default-blue.png',
// //   '/default-blue.png',
// //   '/default-blue.png',
// //   '/default-blue.png',
// // ];

// // // Outfit labels
// // const outfitLabels: string[] = ['반팔티', '반바지', '얇은 셔츠', '면바지'];

// // // Temperature ranges
// // const temperatureRanges: TemperatureRange[] = [
// //   { min: 28, label: 'hot', display: '28°C 이상' },
// //   { min: 23, label: 'warm', display: '23°C - 27°C' },
// //   { min: 20, label: 'mild', display: '20°C - 22°C' },
// //   { min: 17, label: 'cool', display: '17°C - 19°C' },
// //   { min: 12, label: 'chilly', display: '12°C - 16°C' },
// //   { min: 9, label: 'cold', display: '9°C - 11°C' },
// //   { min: 4, label: 'coldest', display: '4°C - 8°C' },
// //   { min: -Infinity, label: 'coldest', display: '4°C 이하' },
// // ];

// // const ThermometerStyle: React.FC = () => {
// //   const [temperatureIndex, setTemperatureIndex] = useState<number>(
// //     Math.floor(temperatureRanges.length / 2),
// //   );
// //   const sliderRef = useRef<HTMLDivElement | null>(null);
// //   const [isDragging, setIsDragging] = useState<boolean>(false);
// //   const [initialView, setInitialView] = useState<boolean>(true);

// //   const router = useRouter();

// //   const handleTemperatureChange = (newIndex: number) => {
// //     if (newIndex >= 0 && newIndex < temperatureRanges.length) {
// //       setTemperatureIndex(newIndex);
// //       setInitialView(false);
// //     }
// //   };

// //   const handleDrag = (e: MouseEvent | TouchEvent) => {
// //     if (!sliderRef.current || !isDragging) return;

// //     const sliderRect = sliderRef.current.getBoundingClientRect();
// //     const x = 'clientX' in e ? e.clientX : e.touches[0]?.clientX;
// //     if (x == null) return;

// //     const sliderWidth = sliderRect.width;
// //     const relativeX = x - sliderRect.left;
// //     const percentage = Math.min(Math.max(relativeX / sliderWidth, 0), 1);
// //     const newIndex = Math.round((temperatureRanges.length - 1) * percentage);

// //     handleTemperatureChange(newIndex);
// //   };

// //   const handleMouseDown = () => setIsDragging(true);
// //   const handleMouseUp = () => setIsDragging(false);

// //   useEffect(() => {
// //     const handleMouseUpGlobal = () => setIsDragging(false);

// //     window.addEventListener('mouseup', handleMouseUpGlobal);
// //     window.addEventListener('touchend', handleMouseUpGlobal);

// //     return () => {
// //       window.removeEventListener('mouseup', handleMouseUpGlobal);
// //       window.removeEventListener('touchend', handleMouseUpGlobal);
// //     };
// //   }, []);

// //   const getOutfitsForTemperature = (tempIndex: number): string[] => {
// //     const range = temperatureRanges[tempIndex];
// //     return outfits[range.label] || defaultImages;
// //   };

// //   const currentOutfits =
// //     temperatureIndex === Math.floor(temperatureRanges.length / 2) && initialView
// //       ? defaultImages
// //       : getOutfitsForTemperature(temperatureIndex);

// //   const handleSurveyPage = () => {
// //     router.push('/surveypage');
// //   };

// //   return (
// //     <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center min-h-screen bg-[#f5f5f5]">
// //       <div className="flex flex-col items-center mt-4 mb-8">
// //         <h1 className="text-2xl font-bold mb-4">기온 별 옷차림</h1>
// //         <div className="relative">
// //           <div className="grid grid-cols-2 gap-4 mb-6">
// //             {currentOutfits.map((src: string, index: number) => (
// //               <div
// //                 key={index}
// //                 className="flex flex-col items-center justify-center gap-2 p-4 w-[132px] h-[150px] bg-white shadow rounded-lg bg-opacity-40 backdrop-blur-lg border border-white relative"
// //               >
// //                 {!initialView && (
// //                   <span className="text-sm text-center mb-2">
// //                     {outfitLabels[index]}
// //                   </span>
// //                 )}
// //                 <Image
// //                   src={src}
// //                   alt={`Outfit ${index + 1}`}
// //                   width={132}
// //                   height={150}
// //                 />
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //         <div className="relative mb-4">
// //           <Image
// //             src="/temperature-box.svg"
// //             alt="Temperature Box"
// //             width={172}
// //             height={63}
// //           />
// //           {initialView ? (
// //             <span className="absolute inset-0 flex items-center justify-center text-lg font-bold">
// //               ?
// //             </span>
// //           ) : (
// //             <span className="absolute inset-0 flex items-center justify-center text-lg font-bold">
// //               {temperatureRanges[temperatureIndex].display}
// //             </span>
// //           )}
// //         </div>
// //         <div
// //           ref={sliderRef}
// //           className="relative w-[411px] h-[63px] flex items-center justify-center mb-8 overflow-hidden"
// //           onMouseMove={handleDrag}
// //           onTouchMove={handleDrag}
// //           onMouseDown={handleMouseDown}
// //           onTouchStart={handleMouseDown}
// //         >
// //           <Image
// //             src="/Thermometer.svg"
// //             alt="Thermometer Body"
// //             width={411}
// //             height={63}
// //             priority
// //           />
// //           <div
// //             className="absolute cursor-pointer"
// //             style={{
// //               left: initialView
// //                 ? '50%'
// //                 : `${(temperatureIndex / (temperatureRanges.length - 1)) * 100}%`,
// //               top: '50%',
// //               transform: 'translate(-50%, -50%)',
// //             }}
// //           >
// //             <Image
// //               src="/Thermometer-controller.svg"
// //               alt="Thermometer Controller"
// //               width={63}
// //               height={36.54}
// //               className="object-contain"
// //             />
// //           </div>
// //           <button
// //             className="absolute left-2 top-1/2 -translate-y-1/2"
// //             onClick={() => handleTemperatureChange(temperatureIndex - 1)}
// //           >
// //             <Image
// //               src="/arrow_Left.svg"
// //               alt="Left Arrow"
// //               width={24}
// //               height={24}
// //             />
// //           </button>
// //           <button
// //             className="absolute right-2 top-1/2 -translate-y-1/2"
// //             onClick={() => handleTemperatureChange(temperatureIndex + 1)}
// //           >
// //             <Image
// //               src="/arrow_Right.svg"
// //               alt="Right Arrow"
// //               width={24}
// //               height={24}
// //             />
// //           </button>
// //         </div>
// //       </div>

// //       {/* Buttons */}
// //       <div className="w-full px-4 mb-8">
// //         <button className="w-full px-4 py-2 mb-4 font-medium bg-black text-white rounded">
// //           온도에 맞는 스타일 보러가기
// //         </button>
// //         <button
// //           className="w-full px-4 py-2 border border-black bg-white rounded"
// //           onClick={handleSurveyPage}
// //         >
// //           취향 코디 추천받기
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ThermometerStyle;

// 'use client';

// import React, {
//   useState,
//   useRef,
//   useEffect,
//   MouseEvent,
//   TouchEvent,
// } from 'react';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';

// // Outfit type definitions
// interface OutfitImages {
//   hot: string[];
//   warm: string[];
//   mild: string[];
//   cool: string[];
//   chilly: string[];
//   cold: string[];
//   coldest: string[];
// }

// // Temperature range type definitions
// interface TemperatureRange {
//   min: number;
//   label: keyof OutfitImages;
//   display: string;
// }

// // Outfit images
// const outfits: OutfitImages = {
//   hot: ['/반팔티.svg', '/반바지.svg', '/셔츠.svg', '/면바지.svg'],
//   warm: ['/반팔티.svg', '/반바지.svg', '/셔츠.svg', '/면바지.svg'],
//   mild: ['/반팔티.svg', '/반바지.svg', '/셔츠.svg', '/면바지.svg'],
//   cool: ['/반팔티.svg', '/반바지.svg', '/셔츠.svg', '/면바지.svg'],
//   chilly: ['/반팔티.svg', '/반바지.svg', '/셔츠.svg', '/면바지.svg'],
//   cold: ['/반팔티.svg', '/반바지.svg', '/셔츠.svg', '/면바지.svg'],
//   coldest: ['/반팔티.svg', '/반바지.svg', '/셔츠.svg', '/면바지.svg'],
// };

// // Default images
// const defaultImages: string[] = [
//   '/default-blue.png',
//   '/default-yellow.png',
//   '/default-yellow.png',
//   '/default-blue.png',
// ];

// // Outfit labels
// const outfitLabels: string[] = ['반팔티', '반바지', '얇은 셔츠', '면바지'];

// // Temperature ranges
// const temperatureRanges: TemperatureRange[] = [
//   { min: 28, label: 'hot', display: '28°C 이상' },
//   { min: 23, label: 'warm', display: '23°C - 27°C' },
//   { min: 20, label: 'mild', display: '20°C - 22°C' },
//   { min: 17, label: 'cool', display: '17°C - 19°C' },
//   { min: 12, label: 'chilly', display: '12°C - 16°C' },
//   { min: 9, label: 'cold', display: '9°C - 11°C' },
//   { min: 4, label: 'coldest', display: '4°C - 8°C' },
//   { min: -Infinity, label: 'coldest', display: '4°C 이하' },
// ];

// const ThermometerStyle: React.FC = () => {
//   const [temperatureIndex, setTemperatureIndex] = useState<number>(
//     Math.floor(temperatureRanges.length / 2),
//   );
//   const sliderRef = useRef<HTMLDivElement | null>(null);
//   const [isDragging, setIsDragging] = useState<boolean>(false);
//   const [initialView, setInitialView] = useState<boolean>(true);
//   const router = useRouter();

//   const handleTemperatureChange = (newIndex: number) => {
//     if (newIndex >= 0 && newIndex < temperatureRanges.length) {
//       setTemperatureIndex(newIndex);
//       setInitialView(false);
//     }
//   };

//   const handleDrag = (e: MouseEvent | TouchEvent) => {
//     if (!sliderRef.current || !isDragging) return;

//     const sliderRect = sliderRef.current.getBoundingClientRect();
//     const x = 'clientX' in e ? e.clientX : e.touches[0]?.clientX;
//     if (x == null) return;

//     const sliderWidth = sliderRect.width;
//     const relativeX = x - sliderRect.left;
//     const percentage = Math.min(Math.max(relativeX / sliderWidth, 0), 1); // Ensure percentage is between 0 and 1
//     const newIndex = Math.round((temperatureRanges.length - 1) * percentage);

//     handleTemperatureChange(newIndex);
//   };

//   const handleMouseDown = () => setIsDragging(true);
//   const handleMouseUp = () => setIsDragging(false);

//   useEffect(() => {
//     const handleMouseUpGlobal = () => setIsDragging(false);

//     window.addEventListener('mouseup', handleMouseUpGlobal);
//     window.addEventListener('touchend', handleMouseUpGlobal);

//     return () => {
//       window.removeEventListener('mouseup', handleMouseUpGlobal);
//       window.removeEventListener('touchend', handleMouseUpGlobal);
//     };
//   }, []);

//   const getOutfitsForTemperature = (tempIndex: number): string[] => {
//     const range = temperatureRanges[tempIndex];
//     return outfits[range.label] || defaultImages;
//   };

//   const currentOutfits =
//     temperatureIndex === Math.floor(temperatureRanges.length / 2) && initialView
//       ? defaultImages
//       : getOutfitsForTemperature(temperatureIndex);

//   const handleSurveyPage = () => {
//     router.push('/surveypage');
//   };

//   return (
//     <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center min-h-screen bg-[#f5f5f5]">
//       <div className="flex flex-col items-center mt-4 mb-8">
//         <h1 className="text-2xl font-bold mb-4">기온 별 옷차림</h1>
//         <div className="relative">
//           <div className="grid grid-cols-2 gap-4 mb-6">
//             {currentOutfits.map((src: string, index: number) => (
//               <div
//                 key={index}
//                 className="flex flex-col items-center justify-center gap-2 p-4 w-[132px] h-[150px] bg-white shadow rounded-lg bg-opacity-40 backdrop-blur-lg border border-white relative"
//               >
//                 {!initialView && (
//                   <span className="text-sm text-center mb-2">
//                     {outfitLabels[index]}
//                   </span>
//                 )}
//                 <Image
//                   src={src}
//                   alt={`Outfit ${index + 1}`}
//                   width={88}
//                   height={100}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="relative mb-4">
//           <Image
//             src="/temperature-box.svg"
//             alt="Temperature Box"
//             width={258}
//             height={94.5}
//           />
//           {initialView ? (
//             <span className="absolute inset-0 flex items-center justify-center text-lg font-bold">
//               ?
//             </span>
//           ) : (
//             <span className="absolute inset-0 flex items-center justify-center text-lg font-bold">
//               {temperatureRanges[temperatureIndex].display}
//             </span>
//           )}
//         </div>
//         <div
//           ref={sliderRef}
//           className="relative w-[411px] h-[63px] flex items-center justify-center mb-8 overflow-hidden"
//           onMouseMove={handleDrag}
//           onTouchMove={handleDrag}
//           onMouseDown={handleMouseDown}
//           onTouchStart={handleMouseDown}
//         >
//           <Image
//             src="/thermometer-bar.svg"
//             alt="Thermometer Bar"
//             layout="fill"
//             objectFit="cover"
//             className="absolute inset-0 z-10"
//           />
//           <div
//             className="absolute w-[36px] h-[301.395px] left-0 right-0 mx-auto z-20"
//             style={{ top: 'calc(50% - 150.6975px)' }} // Centering the element
//           >
//             <Image
//               src="/Thermometer-rainbow.svg"
//               alt="Thermometer Rainbow"
//               width={36}
//               height={301.395}
//               layout="intrinsic"
//               objectFit="contain"
//             />
//           </div>
//           <div
//             className="absolute cursor-pointer z-30"
//             style={{
//               left: initialView
//                 ? '50%'
//                 : `${(temperatureIndex / (temperatureRanges.length - 1)) * 100}%`,
//               top: '50%',
//               transform: 'translate(-50%, -50%)',
//             }}
//           >
//             <Image
//               src="/thermometer-controller.svg"
//               alt="Thermometer Controller"
//               width={63}
//               height={36.54}
//               className="object-contain"
//             />
//           </div>
//         </div>
//       </div>
//       <div className="w-full px-4 mb-8">
//         <button className="w-full px-4 py-2 mb-4 font-medium bg-black text-white rounded">
//           온도에 맞는 스타일 보러가기
//         </button>
//         <button
//           className="w-full px-4 py-2 border border-black bg-white rounded"
//           onClick={handleSurveyPage}
//         >
//           취향 코디 추천받기
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ThermometerStyle;

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
  '/default-blue.png',
  '/default-yellow.png',
  '/default-yellow.png',
  '/default-blue.png',
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
    const percentage = Math.min(Math.max(relativeX / sliderWidth, 0), 1); // Ensure percentage is between 0 and 1
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
    <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center min-h-screen bg-[#f5f5f5]">
      <div className="flex flex-col items-center mt-4 mb-8">
        <h1 className="text-2xl font-bold mb-4">기온 별 옷차림</h1>
        <div className="relative">
          <div className="grid grid-cols-2 gap-4 mb-6">
            {currentOutfits.map((src: string, index: number) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-2 p-4 w-[132px] h-[150px] bg-white shadow rounded-lg bg-opacity-40 backdrop-blur-lg border border-white relative"
              >
                {!initialView && (
                  <span className="text-sm text-center mb-2">
                    {outfitLabels[index]}
                  </span>
                )}
                <Image
                  src={src}
                  alt={`Outfit ${index + 1}`}
                  width={132}
                  height={150}
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
          className="relative w-[411px] h-[63px] flex items-center justify-center mb-8 overflow-hidden"
          onMouseMove={handleDrag}
          onTouchMove={handleDrag}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          <Image
            src="/thermometer-bar.svg"
            alt="Thermometer Bar"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-10"
          />
          <div
            className="absolute w-[36px] h-[301.395px] left-0 right-0 mx-auto z-20"
            style={{ top: 'calc(50% - 150.6975px)' }} // Centering the element
          >
            <Image
              src="/Thermometer-rainbow.svg"
              alt="Thermometer Rainbow"
              width={36}
              height={301.395}
              layout="intrinsic"
              objectFit="contain"
            />
          </div>
          <div
            className="absolute cursor-pointer z-30"
            style={{
              left: initialView
                ? '50%'
                : `${(temperatureIndex / (temperatureRanges.length - 1)) * 100}%`,
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <Image
              src="/thermometer-controller.svg"
              alt="Thermometer Controller"
              width={63}
              height={36.54}
              className="object-contain"
            />
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
