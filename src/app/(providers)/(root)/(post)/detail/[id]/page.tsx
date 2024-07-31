'use client';
import { createClient } from '@/supabase/client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Tables } from '../../../../../../../types/supabase';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function PostDetail({
  params,
}: {
  params: { id: string; comment: string; locations: string };
}) {
  const [userList, setUserList] = useState<Tables<'users'>[]>([]);
  const [userComment, setUserComment] = useState<string>('');
  const [userImages, setUserImages] = useState<string[]>([]);
  const [userLocations, setUserLocations] = useState<string>('');
  const User = 'a184313d-fac7-4c5d-8ee3-89e367cfb86f';
  const supabase = createClient();

  // 유저 닉네임 가져오기
  const fetchUsers = async () => {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', User);

    if (error) {
      console.error(error);
    } else {
      setUserList(data);
    }
  };

  // 유저 이미지 가져오기
  const fetchUserImage = async () => {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('id', params.id)
      .single();

    if (error) {
      console.error(error);
    } else {
      setUserImages(data.image_url.split(','));
      setUserComment(data.comment);
      setUserLocations(data.locations);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchUserImage();
  }, []);

  return (
    <div>
      <div className="w-80 h-[1024px] relative overflow-hidden bg-white max-w-sw mx-auto">
        <div>
          <div className="w-72 h-[370px] absolute left-[15px] top-[170px] rounded-xl bg-[#d9d9d9]">
            <Swiper
              slidesPerView={1}
              pagination={{ clickable: true }}
              modules={[Pagination]}
            >
              {userImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={image}
                    alt={`이미지 ${index}`}
                    width={200}
                    height={100}
                    className="w-[300px] h-[370px] object-cover rounded-xl"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex flex-col justify-start items-start w-72 relative gap-2.5 mt-2">
              <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0">
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[5px]">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <rect
                      x={2}
                      y={2}
                      width={28}
                      height={28}
                      rx={4}
                      fill="white"
                      fillOpacity="0.6"
                    />
                    <path
                      d="M16.5145 16C14.2973 16 12.4998 14.7344 12.4998 13.1731C12.4998 11.6973 14.1059 10.4856 16.1545 10.3574C16.5616 8.91811 18.3655 7.83337 20.5292 7.83337C22.9929 7.83337 24.99 9.23966 24.99 10.9744C24.99 11.0008 24.9896 11.0271 24.9887 11.0533C26.5285 11.3319 27.6665 12.316 27.6665 13.4872C27.6665 14.875 26.0688 16 24.0979 16H16.5145Z"
                      fill="#B3B3B3"
                    />
                    <g filter="url(#filter0_bd_3033_4928)">
                      <path
                        d="M19.7744 24.1667C22.8445 24.1667 25.3333 22.1778 25.3333 19.7244C25.3333 17.4053 23.1094 15.5012 20.273 15.2997C19.7092 13.038 17.2115 11.3334 14.2156 11.3334C10.8044 11.3334 8.03913 13.5433 8.03913 16.2693C8.03913 16.3107 8.03977 16.3521 8.04105 16.3933C5.90891 16.8311 4.33325 18.3775 4.33325 20.218C4.33325 22.3988 6.54549 24.1667 9.27443 24.1667H19.7744Z"
                        fill="#CCCCCC"
                        fillOpacity="0.7"
                        shapeRendering="crispEdges"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_bd_3033_4928"
                        x="2.33325"
                        y="9.33337"
                        width={25}
                        height="16.8334"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feGaussianBlur
                          in="BackgroundImageFix"
                          stdDeviation={1}
                        />
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_3033_4928"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx="0.5" dy="-0.5" />
                        <feGaussianBlur stdDeviation="0.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="effect1_backgroundBlur_3033_4928"
                          result="effect2_dropShadow_3033_4928"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect2_dropShadow_3033_4928"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 text-lg font-medium text-left text-black">
                    닉네임
                  </p>
                </div>
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-0.5">
                    <svg
                      width={28}
                      height={28}
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-7 h-7 relative"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <g filter="url(#filter0_b_3115_6844)">
                        <g filter="url(#filter1_b_3115_6844)">
                          <path
                            d="M11.0449 21.807C10.8637 21.7072 10.6191 21.5687 10.3316 21.3963C9.76866 21.0587 8.98349 20.5566 8.16667 19.9268C7.38362 19.323 6.37347 18.4516 5.50743 17.3387C4.70629 16.3091 3.5 14.3976 3.5 11.8306C3.5 8.51841 6.11167 5.83337 9.33333 5.83337C11.2415 5.83337 12.9357 6.77534 14 8.23166C15.0643 6.77534 16.7585 5.83337 18.6667 5.83337C21.8883 5.83337 24.5 8.51841 24.5 11.8306C24.5 14.3976 23.2937 16.3091 22.4926 17.3387C21.6265 18.4516 20.6164 19.323 19.8333 19.9268C19.0165 20.5566 18.2313 21.0587 17.6684 21.3963C17.3809 21.5687 17.1363 21.7072 16.9551 21.807L15.8357 22.3852C14.6842 22.98 13.3158 22.98 12.1643 22.3852L11.0449 21.807Z"
                            fill="white"
                          />
                          <path
                            d="M11.0449 21.807C10.8637 21.7072 10.6191 21.5687 10.3316 21.3963C9.76866 21.0587 8.98349 20.5566 8.16667 19.9268C7.38362 19.323 6.37347 18.4516 5.50743 17.3387C4.70629 16.3091 3.5 14.3976 3.5 11.8306C3.5 8.51841 6.11167 5.83337 9.33333 5.83337C11.2415 5.83337 12.9357 6.77534 14 8.23166C15.0643 6.77534 16.7585 5.83337 18.6667 5.83337C21.8883 5.83337 24.5 8.51841 24.5 11.8306C24.5 14.3976 23.2937 16.3091 22.4926 17.3387C21.6265 18.4516 20.6164 19.323 19.8333 19.9268C19.0165 20.5566 18.2313 21.0587 17.6684 21.3963C17.3809 21.5687 17.1363 21.7072 16.9551 21.807L15.8357 22.3852C14.6842 22.98 13.3158 22.98 12.1643 22.3852L11.0449 21.807Z"
                            stroke="#121212"
                            strokeWidth={2}
                            strokeLinecap="round"
                          />
                        </g>
                      </g>
                      <defs>
                        <filter
                          id="filter0_b_3115_6844"
                          x={-20}
                          y={-20}
                          width={68}
                          height={68}
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity={0}
                            result="BackgroundImageFix"
                          />
                          <feGaussianBlur
                            in="BackgroundImageFix"
                            stdDeviation={10}
                          />
                          <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_3115_6844"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_backgroundBlur_3115_6844"
                            result="shape"
                          />
                        </filter>
                        <filter
                          id="filter1_b_3115_6844"
                          x="-1.5"
                          y="0.833374"
                          width={31}
                          height="26.9979"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity={0}
                            result="BackgroundImageFix"
                          />
                          <feGaussianBlur
                            in="BackgroundImageFix"
                            stdDeviation={2}
                          />
                          <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_3115_6844"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_backgroundBlur_3115_6844"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                    <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-black">
                      9999
                    </p>
                  </div>
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-8 h-8">
                    <div
                      className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 p-1 rounded-[1000px]"
                      style={{
                        filter: 'drop-shadow(0px 0px 4px rgba(0,0,0,0.08))',
                      }}
                    >
                      <svg
                        width={28}
                        height={28}
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M20.7083 5.25C19.9029 5.25 19.25 5.90292 19.25 6.70833C19.25 7.51375 19.9029 8.16667 20.7083 8.16667C21.5137 8.16667 22.1667 7.51375 22.1667 6.70833C22.1667 5.90292 21.5137 5.25 20.7083 5.25ZM17.5 6.70833C17.5 4.93642 18.9364 3.5 20.7083 3.5C22.4802 3.5 23.9167 4.93642 23.9167 6.70833C23.9167 8.48025 22.4802 9.91667 20.7083 9.91667C18.9364 9.91667 17.5 8.48025 17.5 6.70833ZM20.7083 19.25C19.9029 19.25 19.25 19.9029 19.25 20.7083C19.25 21.5137 19.9029 22.1667 20.7083 22.1667C21.5137 22.1667 22.1667 21.5137 22.1667 20.7083C22.1667 19.9029 21.5137 19.25 20.7083 19.25ZM17.5 20.7083C17.5 18.9364 18.9364 17.5 20.7083 17.5C22.4802 17.5 23.9167 18.9364 23.9167 20.7083C23.9167 22.4802 22.4802 23.9167 20.7083 23.9167C18.9364 23.9167 17.5 22.4802 17.5 20.7083ZM5.25 13.7083C5.25 12.9029 5.90292 12.25 6.70833 12.25C7.51375 12.25 8.16667 12.9029 8.16667 13.7083C8.16667 14.5137 7.51375 15.1667 6.70833 15.1667C5.90292 15.1667 5.25 14.5137 5.25 13.7083ZM6.70833 10.5C4.93642 10.5 3.5 11.9364 3.5 13.7083C3.5 15.4802 4.93642 16.9167 6.70833 16.9167C8.48025 16.9167 9.91667 15.4802 9.91667 13.7083C9.91667 11.9364 8.48025 10.5 6.70833 10.5ZM17.0852 8.51992C17.3733 9.09623 17.1397 9.79701 16.5634 10.0852L11.8967 12.4185C11.3204 12.7067 10.6197 12.4731 10.3315 11.8967C10.0433 11.3204 10.2769 10.6197 10.8533 10.3315L15.5199 7.99817C16.0962 7.71001 16.797 7.94361 17.0852 8.51992ZM11.8967 14.9982C11.3204 14.71 10.6197 14.9436 10.3315 15.5199C10.0433 16.0962 10.2769 16.797 10.8533 17.0852L15.5199 19.4185C16.0962 19.7067 16.797 19.4731 17.0852 18.8967C17.3733 18.3204 17.1397 17.6197 16.5634 17.3315L11.8967 14.9982Z"
                          fill="#121212"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <p className="self-stretch flex-grow-0 flex-shrink-0 w-72 text-base text-left text-black">
                글내용 글이 나오는 칸
              </p>
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-1">
                <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-black">
                  #봄
                </p>
                <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-black">
                  #카페
                </p>
                <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-black">
                  #스트릿패션
                </p>
                <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-black">
                  #스트릿패션
                </p>
                <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-black">
                  #스트릿패션
                </p>
                <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-black">
                  #스트릿패션
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
