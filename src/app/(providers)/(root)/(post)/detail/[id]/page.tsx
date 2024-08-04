'use client';
import { createClient } from '@/supabase/client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';
import 'swiper/swiper-bundle.css';
import { useUserStore } from '@/zustand/store/useUserStore';
import { Tables } from '../../../../../../../types/supabase';

function PostDetail({
  params,
}: {
  params: { id: string; comment: string; locations: string; like: number };
}) {
  const [userList, setUserList] = useState<Tables<'users'>[]>([]);
  const [userComment, setUserComment] = useState<string[]>([]);
  const [userImages, setUserImages] = useState<string[]>([]);
  const [userLocations, setUserLocations] = useState<string[]>([]);
  const [userLiked, setUserLiked] = useState<number[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [userNickName, setUserNickName] = useState<Tables<'posts'>[]>([]);

  const User = useUserStore();
  const supabase = createClient();

  // 유저 닉네임 가져오기
  const fetchUserNickname = async () => {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', params.id);

    if (error) {
      console.error(error);
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
    } else if (data && data.image_url) {
      setUserImages(data.image_url.split(','));
    } else {
      setUserImages([]);
    }
  };

  // 유저 코멘트 가져오기
  const fetchUserLocations = async () => {
    const { data, error } = await supabase
      .from('posts')
      .select('comment')
      .eq('id', params.id)
      .single();

    if (error) {
      console.error(error);
    } else {
      setUserComment(data.comment ? [data.comment] : []);
    }
  };
  // 유저 카테고리 가져오기
  const fetchUserComment = async () => {
    const { data, error } = await supabase
      .from('posts')
      .select('locations')
      .eq('id', params.id)
      .single();

    if (error) {
      console.error(error);
    } else {
      setUserLocations(
        data.locations
          ? data.locations.split(',').map((location) => ` #${location}`)
          : [],
      );
    }
  };

  //유저 좋아요 수 가져오기
  const fetchUserLiked = async () => {
    const { data, error } = await supabase
      .from('posts')
      .select('like')
      .eq('id', params.id)
      .single();

    if (error) {
      console.error(error);
    } else {
      setUserLiked([data.like ?? 0]);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchUserNickname();
      await fetchUserImage();
      await fetchUserComment();
      await fetchUserLocations();
      await fetchUserLiked();
    };

    fetchData();
  }, [params.id]);

  //공유 팝업 모달
  const clickModal = () => setModalOpen(!modalOpen);

  //해당 페이지 링크 복사
  const copyURL = async () => {
    let currentUrl = window.document.location.href;

    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(currentUrl);
        alert('클립보드에 복사되었습니다');
      } catch (err) {
        console.error('클립보드 복사 실패:', err);
      }
    } else {
      let t = document.createElement('textarea');
      document.body.appendChild(t);
      t.value = currentUrl;
      t.select();
      document.execCommand('copy');
      document.body.removeChild(t);
      alert('클립보드에 복사되었습니다');
    }
  };

  // 카카오 공유
  const handleShearToKakao = () => {
    const { Kakao, location } = window;
    Kakao.Share.sendScrap({
      requestUrl: location.href,
    });
  };

  //유저 게시물 삭제
  const deletePost = async () => {
    try {
      await supabase
        .from('posts')
        .delete()
        .eq('id', params.id)
        .eq('user_id', User);
    } catch {
      alert('게시물이 삭제되었습니다.');
    }
  };
  console.log(User.user?.nickname);

  return (
    <div>
      <div className="w-80 h-[747px] relative overflow-hidden bg-[#FAFAFA] max-w-sw mx-auto">
        <div>
          <header className="mt-2 ml-3 flex">
            <Link
              href={'/list'}
              className="w-[42px] flex justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.8351 7.49831C21.3884 8.05155 21.3884 8.94853 20.8351 9.50178L13.3369 17L20.8351 24.4983C21.3884 25.0515 21.3884 25.9485 20.8351 26.5018C20.2819 27.055 19.3849 27.055 18.8317 26.5018L10.3317 18.0018C9.77844 17.4485 9.77844 16.5515 10.3317 15.9983L18.8317 7.49831C19.3849 6.94506 20.2819 6.94506 20.8351 7.49831Z"
                  fill="#121212"
                />
              </svg>
            </Link>
            <div className="flex flex-row ml-auto gap-1">
              <button
                onClick={deletePost}
                className="flex justify-center items-center bg-[#FF4732]/85 text-white rounded-xl px-[10px] py-[8px]"
              >
                삭제
              </button>
              <button className="flex  justify-center items-center bg-[#121212] text-white mr-4 rounded-xl px-[10px] py-[8px]">
                수정
              </button>
            </div>
          </header>
          <Swiper
            slidesPerView={1}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            loop={true}
          >
            {userImages.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={image}
                  alt={`이미지 ${index}`}
                  width={200}
                  height={100}
                  className="w-[288px] h-[412px] object-cover rounded-xl m-4 "
                />
                <div className="absolute top-6 left-6 bg-white bg-opacity-50 p-1 m-1 text-sm rounded-lg font-bold">
                  ☀️ 26°
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex flex-col justify-start items-start w-72 relative gap-2.5 mt-2 m-4">
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
                <div>
                  {/* 유저 닉네임 */}
                  {userList.map((user) => {
                    return (
                      <div key={user.id}>
                        <p className="flex-grow-0 flex-shrink-0 text-lg font-medium text-left text-black">
                          gkgk
                        </p>
                      </div>
                    );
                  })}
                </div>
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
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
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
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
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
                    {userLiked}
                  </p>
                </div>
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-8 h-8">
                  <div
                    className="flex justify-center items-center flex-grow-0 flex-shrink-0 overflow-hidden gap-2 p-1 rounded-[1000px]"
                    style={{
                      filter: 'drop-shadow(0px 0px 4px rgba(0,0,0,0.08))',
                    }}
                  >
                    <button onClick={clickModal}>
                      <svg
                        width={28}
                        height={28}
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-grow-0 flex-shrink-0 w-6 h-6"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M20.7083 5.25C19.9029 5.25 19.25 5.90292 19.25 6.70833C19.25 7.51375 19.9029 8.16667 20.7083 8.16667C21.5137 8.16667 22.1667 7.51375 22.1667 6.70833C22.1667 5.90292 21.5137 5.25 20.7083 5.25ZM17.5 6.70833C17.5 4.93642 18.9364 3.5 20.7083 3.5C22.4802 3.5 23.9167 4.93642 23.9167 6.70833C23.9167 8.48025 22.4802 9.91667 20.7083 9.91667C18.9364 9.91667 17.5 8.48025 17.5 6.70833ZM20.7083 19.25C19.9029 19.25 19.25 19.9029 19.25 20.7083C19.25 21.5137 19.9029 22.1667 20.7083 22.1667C21.5137 22.1667 22.1667 21.5137 22.1667 20.7083C22.1667 19.9029 21.5137 19.25 20.7083 19.25ZM17.5 20.7083C17.5 18.9364 18.9364 17.5 20.7083 17.5C22.4802 17.5 23.9167 18.9364 23.9167 20.7083C23.9167 22.4802 22.4802 23.9167 20.7083 23.9167C18.9364 23.9167 17.5 22.4802 17.5 20.7083ZM5.25 13.7083C5.25 12.9029 5.90292 12.25 6.70833 12.25C7.51375 12.25 8.16667 12.9029 8.16667 13.7083C8.16667 14.5137 7.51375 15.1667 6.70833 15.1667C5.90292 15.1667 5.25 14.5137 5.25 13.7083ZM6.70833 10.5C4.93642 10.5 3.5 11.9364 3.5 13.7083C3.5 15.4802 4.93642 16.9167 6.70833 16.9167C8.48025 16.9167 9.91667 15.4802 9.91667 13.7083C9.91667 11.9364 8.48025 10.5 6.70833 10.5ZM17.0852 8.51992C17.3733 9.09623 17.1397 9.79701 16.5634 10.0852L11.8967 12.4185C11.3204 12.7067 10.6197 12.4731 10.3315 11.8967C10.0433 11.3204 10.2769 10.6197 10.8533 10.3315L15.5199 7.99817C16.0962 7.71001 16.797 7.94361 17.0852 8.51992ZM11.8967 14.9982C11.3204 14.71 10.6197 14.9436 10.3315 15.5199C10.0433 16.0962 10.2769 16.797 10.8533 17.0852L15.5199 19.4185C16.0962 19.7067 16.797 19.4731 17.0852 18.8967C17.3733 18.3204 17.1397 17.6197 16.5634 17.3315L11.8967 14.9982Z"
                          fill="#121212"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-72 text-base text-left text-black">
              {userComment}
            </p>
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-1">
              <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-black">
                {userLocations}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 모달 부분 */}

      {modalOpen && (
        <div className="flex inset-0 bg-black/10 z-50 fixed justify-center items-center ">
          <div className="flex flex-col background w-[273px] h-[455px] rounded-2xl box-shadow backdrop-filter">
            <button
              onClick={clickModal}
              className="text-white p-2 w-fit ml-auto gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.1481 4.85186C5.79012 4.49388 5.20972 4.49388 4.85174 4.85186C4.49376 5.20984 4.49376 5.79024 4.85174 6.14822L9.70356 11L4.85174 15.8519C4.49376 16.2098 4.49376 16.7902 4.85174 17.1482C5.20972 17.5062 5.79012 17.5062 6.1481 17.1482L10.9999 12.2964L15.8517 17.1482C16.2097 17.5062 16.7901 17.5062 17.1481 17.1482C17.5061 16.7902 17.5061 16.2098 17.1481 15.8519L12.2963 11L17.1481 6.14822C17.5061 5.79024 17.5061 5.20984 17.1481 4.85186C16.7901 4.49388 16.2097 4.49388 15.8517 4.85186L10.9999 9.70368L6.1481 4.85186Z"
                  fill="#121212"
                />
              </svg>
            </button>
            <div className="mx-10 bg-white rounded-lg h-[286px] overflow-auto">
              <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                loop={true}
              >
                {userImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={image}
                      alt={`이미지 ${index}`}
                      width={300}
                      height={100}
                      className="h-[286px] object-cover rounded-lg"
                    />
                    <div className="absolute top-2 left-2 bg-white bg-opacity-50 p-1 m-1 text-sm rounded-lg font-bold">
                      ☀️ 26°
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            {/* 카카오톡 공유*/}
            <div className="flex justify-around items-center px-[25px] mt-5">
              <div className="flex flex-col items-center">
                <button
                  onClick={handleShearToKakao}
                  className="w-10 h-10 bg-[#FFD65E]/80 text-white rounded-full middle-box-shadow middle-backdrop-filter"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="22"
                    viewBox="0 0 24 22"
                    fill="none"
                    className="ml-[8px]"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.0001 2.89148C7.05577 2.89148 3.04297 5.89919 3.04297 9.59834C3.04297 11.906 4.59255 13.9198 6.95724 15.1471L5.963 18.6647C5.94424 18.7347 5.9481 18.8085 5.97406 18.8763C6.00002 18.9441 6.04685 19.0026 6.10825 19.044C6.16966 19.0853 6.24271 19.1076 6.31761 19.1078C6.39251 19.108 6.46567 19.0861 6.52729 19.045L10.8805 16.2533C11.2477 16.2533 11.6239 16.3138 12.0001 16.3138C16.9444 16.3138 20.9572 13.3061 20.9572 9.59834C20.9572 5.89055 16.9444 2.89148 12.0001 2.89148Z"
                      fill="#121212"
                    />
                  </svg>
                </button>
                <span className=" mt-1 text">카카오톡</span>
              </div>

              {/* 이메일 공유*/}
              <div className="flex flex-col items-center">
                <Link href={'/form'}>
                  <button className="w-10 h-10 bg-[#121212] text-white rounded-full middle-box-shadow middle-backdrop-filter">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      fill="none"
                      className="ml-[11px]"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.75 3.41663C0.75 1.89784 1.98122 0.666626 3.5 0.666626H14.5C16.0188 0.666626 17.25 1.89784 17.25 3.41663V12.5833C17.25 14.1021 16.0188 15.3333 14.5 15.3333H3.5C1.98122 15.3333 0.75 14.1021 0.75 12.5833V3.41663ZM3.5 2.49996C2.99374 2.49996 2.58333 2.91037 2.58333 3.41663V12.5833C2.58333 13.0896 2.99374 13.5 3.5 13.5H14.5C15.0063 13.5 15.4167 13.0896 15.4167 12.5833V3.41663C15.4167 2.91037 15.0063 2.49996 14.5 2.49996H3.5Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.976818 2.81305C1.31019 2.43205 1.88931 2.39344 2.27031 2.72682L9.00001 8.61531L15.7297 2.72682C16.1107 2.39344 16.6898 2.43205 17.0232 2.81305C17.3566 3.19405 17.318 3.77317 16.937 4.10654L10.2073 9.99503C9.51605 10.5998 8.48396 10.5998 7.79275 9.99503L1.06305 4.10654C0.68205 3.77317 0.643442 3.19405 0.976818 2.81305Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </Link>
                <span className=" mt-1 text">메일</span>
              </div>

              {/* 링크복사 */}
              <div className="flex flex-col items-center justify-center">
                <button
                  onClick={copyURL}
                  className="w-10 h-10 bg-white text-white rounded-full middle-box-shadow middle-backdrop-filter"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="21"
                    viewBox="0 0 18 21"
                    fill="none"
                    className="ml-[11px]"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.4275 3.20841C11.2354 1.94276 8.43224 2.69386 7.16659 4.88603L6.70825 5.67989L8.29597 6.59655L8.7543 5.8027C9.51369 4.48739 11.1956 4.03674 12.5109 4.79613C13.8262 5.55552 14.2768 7.23739 13.5174 8.5527L12.6008 10.1404C11.8414 11.4557 10.1595 11.9064 8.8442 11.147L7.92753 12.7347C10.1197 14.0003 12.9228 13.2493 14.1885 11.0571L15.1052 9.46936C16.3708 7.27719 15.6197 4.47407 13.4275 3.20841Z"
                      fill="#121212"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.2193 8.76542C8.02711 7.49977 5.22399 8.25086 3.95833 10.443L3.04167 12.0308C1.77601 14.2229 2.52711 17.026 4.71928 18.2917C6.91146 19.5574 9.71458 18.8063 10.9802 16.6141L11.8969 15.0264L10.3092 14.1097L9.39252 15.6974C8.63313 17.0127 6.95125 17.4634 5.63595 16.704C4.32065 15.9446 3.86999 14.2627 4.62938 12.9474L5.54605 11.3597C6.30544 10.0444 7.98731 9.59374 9.30262 10.3531L10.2193 8.76542Z"
                      fill="#121212"
                    />
                    <path
                      d="M9.17967 12.3991C8.92654 12.8376 8.36592 12.9878 7.92748 12.7346C7.48905 12.4815 7.33883 11.9209 7.59196 11.4825C7.84509 11.044 8.40571 10.8938 8.84415 11.1469C9.28258 11.4001 9.4328 11.9607 9.17967 12.3991Z"
                      fill="#121212"
                    />
                    <path
                      d="M10.5547 10.0177C10.3015 10.4561 9.74092 10.6063 9.30248 10.3532C8.86405 10.1 8.71383 9.53942 8.96696 9.10099C9.22009 8.66255 9.78071 8.51233 10.2191 8.76546C10.6576 9.01859 10.8078 9.57922 10.5547 10.0177Z"
                      fill="#121212"
                    />
                    <path
                      d="M11.8967 15.0263C11.6436 15.4648 11.083 15.615 10.6445 15.3618C10.2061 15.1087 10.0559 14.5481 10.309 14.1097C10.5621 13.6712 11.1228 13.521 11.5612 13.7741C11.9996 14.0273 12.1498 14.5879 11.8967 15.0263Z"
                      fill="#121212"
                    />
                    <path
                      d="M8.29588 6.59651C8.04275 7.03494 7.48213 7.18516 7.04369 6.93203C6.60526 6.6789 6.45504 6.11828 6.70817 5.67984C6.9613 5.24141 7.52193 5.09119 7.96036 5.34432C8.3988 5.59745 8.54901 6.15807 8.29588 6.59651Z"
                      fill="#121212"
                    />
                  </svg>
                </button>
                <span className="mt-1 text">링크복사</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default PostDetail;
