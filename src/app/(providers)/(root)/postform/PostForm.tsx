// // "use client";

// // import React, { useState, useRef, useEffect } from "react";
// // import Image from "next/image";
// // import { useRouter } from "next/navigation";
// // import { supabase } from "../../../../supabase/client";
// // import { ExtendedPostInsert } from "../../../../../types/extended";
// // import WeatherDropdown from "./components/WeatherDropdown";

// // const PostFormPage = () => {
// //   const [images, setImages] = useState<File[]>([]);
// //   const [description, setDescription] = useState("");
// //   const [gender, setGender] = useState("");
// //   const [style, setStyle] = useState("");
// //   const [seasons, setSeasons] = useState<string[]>([]);
// //   const [locations, setLocations] = useState<string[]>([]);
// //   const [weatherIcon, setWeatherIcon] = useState<string | null>(null);
// //   const [temperature, setTemperature] = useState<string | null>(null);
// //   const [seasonError, setSeasonError] = useState(false);
// //   const [locationError, setLocationError] = useState(false);
// //   const [imageError, setImageError] = useState(false);

// //   const router = useRouter();
// //   const fileInputRef = useRef<HTMLInputElement | null>(null);

// //   useEffect(() => {
// //     let timer: NodeJS.Timeout;
// //     if (seasonError || locationError || imageError) {
// //       timer = setTimeout(() => {
// //         setSeasonError(false);
// //         setLocationError(false);
// //         setImageError(false);
// //       }, 1000);
// //     }
// //     return () => clearTimeout(timer);
// //   }, [seasonError, locationError, imageError]);

// //   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     if (e.target.files) {
// //       const filesArray = Array.from(e.target.files);
// //       if (images.length + filesArray.length > 3) {
// //         setImageError(true);
// //         return;
// //       }
// //       setImages((prevImages) => [...prevImages, ...filesArray]);
// //     }
// //   };

// //   const handleDescriptionChange = (
// //     e: React.ChangeEvent<HTMLTextAreaElement>
// //   ) => {
// //     const value = e.target.value;
// //     if (value.length <= 200) {
// //       setDescription(value);
// //     }
// //   };

// //   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// //     e.preventDefault();

// //     if (images.length === 0) {
// //       setImageError(true);
// //       return;
// //     }

// //     // 이미지 업로드
// //     const uploadedImageUrls: string[] = [];
// //     for (const image of images) {
// //       const { data, error } = await supabase.storage
// //         .from("images")
// //         .upload(`public/${image.name}`, image);

// //       if (error) {
// //         console.error("Error uploading image:", error);
// //         continue;
// //       }

// //       const imageUrl = supabase.storage.from("images").getPublicUrl(data.path)
// //         .data.publicUrl;
// //       uploadedImageUrls.push(imageUrl);
// //     }

// //     // 데이터 삽입
// //     const postData: ExtendedPostInsert = {
// //       user_id: "your-user-id",
// //       imageUrl: uploadedImageUrls.join(","),
// //       comment: description,
// //       created_at: new Date().toISOString(),
// //       like: 0,
// //       gender: gender,
// //       style: style,
// //       seasons: seasons.join(","),
// //       locations: locations.join(","),
// //       weather: `${weatherIcon} ${temperature}`,
// //     };

// //     const { error } = await supabase.from("posts").insert([postData]);

// //     if (error) {
// //       console.error("Error inserting data:", error);
// //     } else {
// //       console.log("Data inserted successfully");
// //       router.push("/app");
// //     }

// //     setImages([]);
// //     setDescription("");
// //     setGender("");
// //     setStyle("");
// //     setSeasons([]);
// //     setLocations([]);
// //   };

// //   const handleSeasonClick = (selectedSeason: string) => {
// //     setSeasons((prevSeasons) => {
// //       if (prevSeasons.includes(selectedSeason)) {
// //         return prevSeasons.filter((season) => season !== selectedSeason);
// //       } else if (prevSeasons.length < 2) {
// //         setSeasonError(false);
// //         return [...prevSeasons, selectedSeason];
// //       } else {
// //         setSeasonError(true);
// //         return prevSeasons;
// //       }
// //     });
// //   };

// //   const handleStyleClick = (selectedStyle: string) => {
// //     setStyle(selectedStyle);
// //   };

// //   const handleLocationClick = (selectedLocation: string) => {
// //     setLocations((prevLocations) => {
// //       if (prevLocations.includes(selectedLocation)) {
// //         return prevLocations.filter(
// //           (location) => location !== selectedLocation
// //         );
// //       } else if (prevLocations.length < 2) {
// //         setLocationError(false);
// //         return [...prevLocations, selectedLocation];
// //       } else {
// //         setLocationError(true);
// //         return prevLocations;
// //       }
// //     });
// //   };

// //   const handleFileUploadClick = () => {
// //     if (fileInputRef.current) {
// //       fileInputRef.current.value = "";
// //       fileInputRef.current.click();
// //     }
// //   };

// //   return (
// //     <div className="max-w-sm mx-auto h-auto m-10">
// //       <form
// //         onSubmit={handleSubmit}
// //         className="flex flex-col w-full p-5 relative bg-white shadow-md rounded-lg"
// //       >
// //         <h2 className="text-xl font-bold mb-4">게시글 작성</h2>

// //         {/* 사진 업로드 섹션 */}
// //         <label className="mb-4 flex flex-col items-start">
// //           <div className="flex gap-2 overflow-x-auto">
// //             {images.map((image, index) => (
// //               <div key={index} className="w-24 h-32 p-1.5 flex-shrink-0">
// //                 <Image
// //                   src={URL.createObjectURL(image)}
// //                   alt={`Uploaded ${index}`}
// //                   width={96}
// //                   height={128}
// //                   className="w-full h-full object-cover border border-gray-300"
// //                 />
// //               </div>
// //             ))}
// //             <div
// //               onClick={handleFileUploadClick}
// //               className="w-24 h-32 bg-gray-200 flex justify-center items-center border border-gray-300 cursor-pointer flex-shrink-0"
// //             >
// //               {/* 숨겨진 파일 입력 요소 */}
// //               <input
// //                 type="file"
// //                 accept="image/*"
// //                 onChange={handleImageChange}
// //                 className="hidden"
// //                 ref={fileInputRef}
// //                 multiple
// //               />
// //               {/* + 버튼 */}
// //               <div className="text-4xl text-gray-500">+</div>
// //             </div>
// //           </div>
// //         </label>

// //         {imageError && (
// //           <div className="text-sm absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white py-2 px-4 w-80 rounded">
// //             최대 3개의 이미지만 업로드할 수 있습니다.
// //           </div>
// //         )}

// //         {/* 간단한 글 작성 섹션 */}
// //         <label className="mb-4">
// //           <div className="border-t border-gray-300 pt-2"></div>
// //           <textarea
// //             value={description}
// //             onChange={handleDescriptionChange}
// //             className="w-full h-24 p-2 mt-1 border-none border-b border-gray-300 placeholder-gray-400 resize-none"
// //             placeholder="착용한 #아이템 및 스타일을 소개해 주세요."
// //             maxLength={200}
// //             required
// //           />
// //           <div className="text-right mt-1 text-gray-600">
// //             {description.length}/200
// //           </div>
// //           <div className="border-b border-gray-300 pb-2"></div>
// //         </label>

// //         {/* 성별 선택 섹션 */}
// //         <label className="mb-4">
// //           <div className="font-bold">유형</div>

// //           <div className="flex gap-2 mt-1">
// //             {["남성", "여성", "선택 안함"].map((genderItem) => (
// //               <button
// //                 key={genderItem}
// //                 type="button"
// //                 onClick={() => setGender(genderItem)}
// //                 className={`px-4 py-2 border border-gray-300 cursor-pointer ${
// //                   gender === genderItem
// //                     ? "bg-black text-white"
// //                     : "bg-gray-200 text-black"
// //                 }`}
// //               >
// //                 {genderItem}
// //               </button>
// //             ))}
// //           </div>
// //         </label>

// //         {/* 날씨 선택 섹션 */}
// //         <label className="mb-4">
// //           <div className="font-semibold">날씨</div>
// //           <WeatherDropdown
// //             setWeatherIcon={setWeatherIcon}
// //             setTemperature={setTemperature}
// //           />
// //         </label>

// //         {/* 스타일 선택 섹션  */}
// //         <label className="mb-4">
// //           <div className="font-bold">스타일</div>

// //           <div className="flex gap-2 mt-1 overflow-x-auto">
// //             {[
// //               "미니멀",
// //               "아메카지",
// //               "시티보이",
// //               "캐주얼",
// //               "비즈니스캐주얼",
// //               "스포츠",
// //               "빈티지",
// //             ].map((styleItem) => (
// //               <div key={styleItem} className="flex-shrink-0">
// //                 <button
// //                   type="button"
// //                   onClick={() => handleStyleClick(styleItem)}
// //                   className={`px-4 py-2 border border-gray-300 cursor-pointer ${
// //                     style === styleItem
// //                       ? "bg-black text-white"
// //                       : "bg-gray-200 text-black"
// //                   }`}
// //                 >
// //                   {styleItem}
// //                 </button>
// //               </div>
// //             ))}
// //           </div>
// //         </label>

// //         {/* 계절 선택 섹션 추가 */}
// //         <label className="mb-4">
// //           <div className="flex items-center">
// //             <div className="font-bold">계절</div>
// //             <div className="text-sm text-gray-400 ml-2">
// //               최대 2개까지 선택 가능
// //             </div>
// //           </div>
// //           <div className="flex gap-2 mt-1">
// //             {["봄", "여름", "가을", "겨울"].map((seasonItem) => (
// //               <button
// //                 key={seasonItem}
// //                 type="button"
// //                 onClick={() => handleSeasonClick(seasonItem)}
// //                 className={`px-4 py-2 border border-gray-300 cursor-pointer ${
// //                   seasons.includes(seasonItem)
// //                     ? "bg-black text-white"
// //                     : "bg-gray-200 text-black"
// //                 }`}
// //               >
// //                 {seasonItem}
// //               </button>
// //             ))}
// //           </div>
// //         </label>

// //         {/* 장소/상황 선택 섹션  */}
// //         <label className="mb-4">
// //           <div className="flex items-center">
// //             <div className="font-semibold">장소/상황</div>
// //             <div className="text-sm text-gray-400 ml-2">
// //               최대 2개까지 선택 가능
// //             </div>
// //           </div>
// //           <div className="flex gap-2 mt-1 overflow-x-auto">
// //             {[
// //               "데이트",
// //               "캠퍼스",
// //               "카페",
// //               "출근",
// //               "결혼식",
// //               "바다",
// //               "여행",
// //               "데일리",
// //             ].map((locationItem) => (
// //               <div key={locationItem} className="flex-shrink-0">
// //                 <button
// //                   type="button"
// //                   onClick={() => handleLocationClick(locationItem)}
// //                   className={`px-4 py-2 border border-gray-300 cursor-pointer ${
// //                     locations.includes(locationItem)
// //                       ? "bg-black text-white"
// //                       : "bg-gray-200 text-black"
// //                   }`}
// //                 >
// //                   {locationItem}
// //                 </button>
// //               </div>
// //             ))}
// //           </div>
// //         </label>

// //         {seasonError && (
// //           <div className="text-sm absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white py-2 px-4 w-80 rounded">
// //             계절 정보는 최대 2개까지 입력 가능합니다.
// //           </div>
// //         )}
// //         {locationError && (
// //           <div className="text-sm absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white py-2 px-4 w-80 rounded">
// //             장소/상황 정보는 최대 2개까지 입력 가능합니다.
// //           </div>
// //         )}
// //         {imageError && (
// //           <div className="text-sm absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white py-2 px-4 w-80 rounded">
// //             최대 3개의 이미지만 업로드할 수 있습니다.
// //           </div>
// //         )}

// //         <button
// //           type="submit"
// //           className="px-4 py-2 bg-black text-white cursor-pointer"
// //         >
// //           작성
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default PostFormPage;




// 7/28 20:05
'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../../supabase/client';
import { ExtendedPostInsert } from '../../../../../types/extended';
import WeatherDropdown from './components/WeatherDropdown';

const PostFormPage = () => {
  const [images, setImages] = useState<File[]>([]);
  const [description, setDescription] = useState('');
  const [gender, setGender] = useState('');
  const [style, setStyle] = useState<string[]>([]);
  const [seasons, setSeasons] = useState<string[]>([]);
  const [locations, setLocations] = useState<string[]>([]);
  const [weatherIcon, setWeatherIcon] = useState<string | null>(null);
  const [temperature, setTemperature] = useState<string | null>(null);
  const [seasonError, setSeasonError] = useState(false);
  const [styleError, setStyleError] = useState(false);
  const [locationError, setLocationError] = useState(false);
  const [imageError, setImageError] = useState(false);

  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    let seasonTimer: NodeJS.Timeout;
    if (seasonError) {
      seasonTimer = setTimeout(() => {
        setSeasonError(false);
      }, 1000);
    }

    let styleTimer: NodeJS.Timeout;
    if (styleError) {
      styleTimer = setTimeout(() => {
        setStyleError(false);
      }, 1000);
    }

    let locationTimer: NodeJS.Timeout;
    if (locationError) {
      locationTimer = setTimeout(() => {
        setLocationError(false);
      }, 1000);
    }

    let imageTimer: NodeJS.Timeout;
    if (imageError) {
      imageTimer = setTimeout(() => {
        setImageError(false);
      }, 1000);
    }

    return () => {
      clearTimeout(seasonTimer);
      clearTimeout(styleTimer);
      clearTimeout(locationTimer);
      clearTimeout(imageTimer);
    };
  }, [seasonError, styleError, locationError, imageError]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      if (images.length + filesArray.length > 3) {
        setImageError(true);
        return;
      }
      setImages((prevImages) => [...prevImages, ...filesArray]);
    }
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= 200) {
      setDescription(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (images.length === 0) {
      setImageError(true);
      return;
    }

    // 이미지 업로드
    const uploadedImageUrls: string[] = [];
    for (const image of images) {
      const uniqueFileName = `${Date.now()}_${image.name}`;
      const { data, error } = await supabase.storage
        .from('images')
        .upload(`public/${uniqueFileName}`, image);

      if (error) {
        console.error('Error uploading image:', error);
        continue;
      }

      const imageUrl = supabase.storage.from('images').getPublicUrl(data.path).data.publicUrl;
      uploadedImageUrls.push(imageUrl);
    }

    // 데이터 삽입
    const postData: ExtendedPostInsert = {
      user_id: 'a184313d-fac7-4c5d-8ee3-89e367cfb86f', // 실제 UUID 값 사용
      image_url: uploadedImageUrls.join(','),
      comment: description,
      created_at: new Date().toISOString(),
      like: 0,
      gender: gender,
      style: style.join(','), // 문자열 배열을 문자열로 변환
      seasons: seasons.join(','), // 문자열 배열을 문자열로 변환
      locations: locations.join(','), // 문자열 배열을 문자열로 변환
      //weather: `${weatherIcon} ${temperature}`,
    };

    const { error } = await supabase.from('posts').insert([postData]);

    if (error) {
      console.error('Error inserting data:', error);
    } else {
      console.log('Data inserted successfully');
      router.push('/list');
    }

    setImages([]);
    setDescription('');
    setGender('');
    setStyle([]);
    setSeasons([]);
    setLocations([]);
  };

  const handleSeasonClick = (selectedSeason: string) => {
    setSeasons((prevSeasons) => {
      if (prevSeasons.includes(selectedSeason)) {
        return prevSeasons.filter((season) => season !== selectedSeason);
      } else if (prevSeasons.length < 2) {
        setSeasonError(false);
        return [...prevSeasons, selectedSeason];
      } else {
        setSeasonError(true);
        return prevSeasons;
      }
    });
  };

  const handleStyleClick = (selectedStyle: string) => {
    setStyle((prevStyles) => {
      if (prevStyles.includes(selectedStyle)) {
        return prevStyles.filter((style) => style !== selectedStyle);
      } else if (prevStyles.length < 2) {
        setStyleError(false);
        return [...prevStyles, selectedStyle];
      } else {
        setStyleError(true);
        return prevStyles;
      }
    });
  };

  const handleLocationClick = (selectedLocation: string) => {
    setLocations((prevLocations) => {
      if (prevLocations.includes(selectedLocation)) {
        return prevLocations.filter((location) => location !== selectedLocation);
      } else if (prevLocations.length < 2) {
        setLocationError(false);
        return [...prevLocations, selectedLocation];
      } else {
        setLocationError(true);
        return prevLocations;
      }
    });
  };

  const handleFileUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      fileInputRef.current.click();
    }
  };

  const buttonClass = (selected: boolean) =>
    `px-2 py-0.5 border cursor-pointer rounded ${
      selected ? 'border-2 border-black' : 'border-gray-300'
    } text-black bg-white`;

  return (
    <div className="max-w-sm mx-auto h-auto m-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full sm:w-96 p-5 border border-gray-300 relative"
      >
        <h2 className="text-xl font-bold mb-4">게시글 작성</h2>

        {/* 사진 업로드 섹션 */}
        <label className="mb-4 flex flex-col items-start">
          <div className="flex gap-2 overflow-x-auto">
            {images.map((image, index) => (
              <div key={index} className="w-24 h-32 p-1.5 flex-shrink-0">
                <Image
                  src={URL.createObjectURL(image)}
                  alt={`Uploaded ${index}`}
                  width={96}
                  height={128}
                  className="w-full h-full object-cover border border-gray-300"
                />
              </div>
            ))}
            <div
              onClick={handleFileUploadClick}
              className="w-24 h-32 bg-gray-200 flex justify-center items-center border border-gray-300 cursor-pointer flex-shrink-0"
            >
              {/* 숨겨진 파일 입력 요소 */}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                ref={fileInputRef}
                multiple
              />
              {/* + 버튼 */}
              <div className="text-4xl text-gray-500">+</div>
            </div>
          </div>
        </label>

        {imageError && (
          <div className="text-sm absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white py-2 px-4 w-80 rounded">
            최대 3개의 이미지만 업로드할 수 있습니다.
          </div>
        )}

        {/* 간단한 글 작성 섹션 */}
        <label className="mb-4">
          <div className="border-t border-gray-300 pt-2"></div>
          <textarea
            value={description}
            onChange={handleDescriptionChange}
            className="w-full h-24 p-2 mt-1 border-none border-b border-gray-300 placeholder-gray-400 resize-none"
            placeholder="착용한 #아이템 및 스타일을 소개해 주세요."
            maxLength={200}
            required
          />
          <div className="text-right mt-1 text-gray-600">
            {description.length}/200
          </div>
          <div className="border-b border-gray-300 pb-2"></div>
        </label>

        {/* 성별 선택 섹션 */}
        <label className="mb-8">
          <div className="font-bold">유형</div>

          <div className="flex gap-2 mt-1">
            {['남성', '여성', '선택 안함'].map((genderItem) => (
              <button
                key={genderItem}
                type="button"
                onClick={() => setGender(genderItem)}
                className={buttonClass(gender === genderItem)}
              >
                {genderItem}
              </button>
            ))}
          </div>
        </label>

        {/* 날씨 선택 섹션 */}
        <label className="mb-8">
          <div className="font-semibold">날씨</div>
          <WeatherDropdown setWeatherIcon={setWeatherIcon} setTemperature={setTemperature} />
        </label>

        {/* 계절 선택 섹션 */}
        <label className="mb-8">
          <div className="font-semibold">계절</div>
          <div className="flex flex-wrap gap-2 mt-1">
            {['봄', '여름', '가을', '겨울'].map((season) => (
              <button
                key={season}
                type="button"
                onClick={() => handleSeasonClick(season)}
                className={buttonClass(seasons.includes(season))}
              >
                {season}
              </button>
            ))}
          </div>
          {seasonError && (
            <div className="text-red-500 text-sm mt-1">
              최대 2개의 계절을 선택할 수 있습니다.
            </div>
          )}
        </label>

        {/* 스타일 선택 섹션 */}
        <label className="mb-8">
          <div className="font-semibold">스타일</div>
          <div className="flex flex-wrap gap-2 mt-1">
            {['캐주얼','스트릿','걸리시','미니멀','스포티','시크','시티보이','로맨틱','고프코어','워크웨어','레트로','클래식','프레피','에스닉','리조트'].map((styleItem) => (
              <button
                key={styleItem}
                type="button"
                onClick={() => handleStyleClick(styleItem)}
                className={buttonClass(style.includes(styleItem))}
              >
                {styleItem}
              </button>
            ))}
          </div>
          {styleError && (
            <div className="text-red-500 text-sm mt-1">
              최대 2개의 스타일을 선택할 수 있습니다.
            </div>
          )}
        </label>

        {/* 장소 선택 섹션 */}
        <label className="mb-8">
          <div className="font-semibold">장소</div>
          <div className="flex flex-wrap gap-2 mt-1">
            {['데일리','데이트','캠퍼스','여행','캠핑','카페','피크닉','테니스','페스티벌','바다','등산','러닝','소개팅','요가'].map((location) => (
              <button
                key={location}
                type="button"
                onClick={() => handleLocationClick(location)}
                className={buttonClass(locations.includes(location))}
              >
                {location}
              </button>
            ))}
          </div>
          {locationError && (
            <div className="text-red-500 text-sm mt-1">
              최대 2개의 장소를 선택할 수 있습니다.
            </div>
          )}
        </label>

        <button
          type="submit"
          className="bg-gray-950 text-white py-2 rounded mt-8"
        >
          작성 완료
        </button>
      </form>
    </div>
  );
};

export default PostFormPage;
