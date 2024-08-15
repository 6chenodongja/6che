import React from 'react';

function DetailModal() {
  return (
    <div>
      {modalOpen && (
        <div className="flex inset-0 bg-black/20 z-50 fixed justify-center items-center ">
          <div className="flex flex-col background w-[273px] h-[455px] rounded-2xl box-shadow backdrop-filter p-2">
            <button
              onClick={clickModal}
              className="text-white w-fit ml-auto gap-2 p-2"
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
                {userPostImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={image}
                      alt={`이미지 ${index}`}
                      width={300}
                      height={100}
                      sizes="100vw"
                      className="h-[286px] object-cover rounded-lg"
                    />
                    <div className="absolute top-2 left-2 bg-white bg-opacity-50 p-1 m-1 text-sm rounded-lg font-bold">
                      {temperature}
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
                <span className="mt-[7px] text">카카오톡</span>
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
                      className="ml-[11px] object-cover"
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
                <span className="text">메일</span>
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
                <span className="mt-[7px] text">링크복사</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailModal;
