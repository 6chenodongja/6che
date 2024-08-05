function PostLike() {
  return (
    <div className="container h-[2125px] relative overflow-hidden bg-neutral-50 m-auto">
      <div className="flex flex-col justify-start items-start w-80 h-[595px] absolute left-0 top-[1530px] gap-3 px-6 pt-[60px] pb-20 bg-white">
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2 pr-9 pt-5"></div>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-40 relative gap-2.5 py-4">
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-40 text-sm font-medium text-left text-[#4d4d4d]">
            날씨
          </p>
          <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
            <p className="flex-grow w-40 text-sm font-medium text-left text-[#4d4d4d]">
              스타일
            </p>
          </div>
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-40 text-sm font-medium text-left text-[#4d4d4d]">
            기온 별 옷차림
          </p>
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-40 text-sm font-medium text-left text-[#4d4d4d]">
            취향 코디
          </p>
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-40 relative gap-1.5">
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2 pb-0.5">
              <p className="flex-grow w-40 text-sm font-medium text-left text-[#4d4d4d]">
                마이페이지
              </p>
            </div>
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-40 opacity-70 text-xs text-left text-[#4d4d4d]">
              좋아요한 게시글
            </p>
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-40 opacity-70 text-xs text-left text-[#4d4d4d]">
              내가 쓴 게시글
            </p>
          </div>
        </div>
        <div className="self-stretch flex-grow-0 flex-shrink-0 h-0.5 bg-[#e6e6e6]/60" />
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2 py-4">
          <div className="flex justify-start items-end flex-grow-0 flex-shrink-0 relative gap-1">
            <div className="flex justify-start items-center absolute left-2.5 top-2.5 gap-0.5 px-1 py-px rounded bg-white/50 border border-white/60">
              <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#4d4d4d]">
                26°
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 px-1">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
              <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#333]">
                닉네임
              </p>
            </div>
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative">
              <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#333]">
                999+
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
          <div className="flex-grow-0 flex-shrink-0 w-[140px] h-[200px] relative overflow-hidden rounded-lg bg-[url('/image.png')] bg-cover bg-no-repeat bg-center">
            <div className="flex justify-start items-center absolute left-2.5 top-2.5 gap-0.5 px-1 py-px rounded bg-white/50 border border-white/60">
              <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#4d4d4d]">
                26°
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 px-1">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
              <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#333]">
                닉네임
              </p>
            </div>
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative">
              <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#333]">
                999+
              </p>
            </div>
          </div>
        </div>
        {/* 필요한 경우 추가적인 이미지 섹션 반복 */}
      </div>
      <div className="w-80 h-[50px] absolute left-0 top-32">
        <div className="flex justify-center items-start w-[75px] absolute left-3.5 top-2">
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-1 px-1 py-1.5 rounded-lg">
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#4d4d4d]">
              최신순
            </p>
          </div>
        </div>
        <div className="flex justify-start items-center absolute left-[276px] top-[9px]">
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-8 h-8">
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 p-1 rounded-[1000px]"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center w-72 absolute left-4 top-[72px] px-4 py-1 rounded-2xl bg-white border-t-0 border-r-0 border-b border-l-0 border-white/60">
        <p className="flex-grow w-[216px] text-base font-medium text-left text-[#4d4d4d]">
          좋아요한 스타일
        </p>
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-10 h-10">
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 p-2 rounded-[1000px]"></div>
        </div>
      </div>
      <div className="flex justify-center items-center w-[46px] h-[46px] absolute left-[250px] top-[2015px] overflow-hidden gap-2 p-3.5 rounded-[1000px] bg-white/80 backdrop-blur-sm"></div>
      <div className="w-80 h-14 absolute left-0 top-0 overflow-hidden bg-white/80 backdrop-blur-[10px]">
        <div className="flex justify-center items-center absolute left-2.5 top-2 overflow-hidden gap-2 p-2 rounded-[1000px]"></div>
        <div className="flex justify-end items-center w-20 absolute left-[230px] top-2">
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 p-2"></div>
        </div>
      </div>
    </div>
  );
}

export default PostLike;
