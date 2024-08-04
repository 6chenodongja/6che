import React, { useState, ChangeEvent, KeyboardEvent } from 'react';

interface ListSelectsProps {
  handleSortChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  selectedOptions: { [key: string]: string[] };
  handleOptionClick: (option: string) => void;
  selectedTab: string;
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
  searchTerm: string;
  setSearchTerm: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSearch: (e: KeyboardEvent<HTMLInputElement>) => void;
  showSearchDropdown: boolean;
  handleSearchClick: () => void;
}

function ListSelects({
  handleSortChange,
  selectedOptions,
  handleOptionClick,
  selectedTab,
  setSelectedTab,
  searchTerm,
  setSearchTerm,
  handleSearch,
  showSearchDropdown,
  handleSearchClick,
}: ListSelectsProps) {
  const [isFilterOn, setIsFilterOn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleFilterClick = () => {
    setIsFilterOn((prev) => !prev);
    setShowDropdown((prev) => !prev);
    if (showSearchDropdown) {
      handleSearchClick();
    }
  };

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <div className="relative z-10">
      <div className="w-full h-[50px] relative">
        <div className="flex justify-center items-start w-[75px] absolute left-3.5 top-2">
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden px-1 py-1.5 rounded-lg ml-2">
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#121212]">
              <select onChange={handleSortChange} className="bg-[#FAFAFA]">
                <option value="latest">최신순</option>
                <option value="likes">좋아요순</option>
              </select>
            </p>
          </div>
        </div>
        <div className="flex justify-start items-center absolute left-[300px] top-[9px]">
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-8 h-8">
            <button
              className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 p-1 rounded-[1000px]"
              style={{ filter: 'drop-shadow(0px 0px 4px rgba(0,0,0,0.08))' }}
              onClick={handleFilterClick}
            >
              {isFilterOn ? (
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
                    d="M15.5833 3.66667C15.5833 3.16041 15.1729 2.75 14.6667 2.75C14.1604 2.75 13.75 3.16041 13.75 3.66667V10.0833C13.75 10.5896 14.1604 11 14.6667 11C15.1729 11 15.5833 10.5896 15.5833 10.0833V3.66667ZM8.25 18.3333C8.25 18.8396 7.83959 19.25 7.33333 19.25C6.82707 19.25 6.41667 18.8396 6.41667 18.3333V11.9167C6.41667 11.4104 6.82707 11 7.33333 11C7.83959 11 8.25 11.4104 8.25 11.9167V18.3333ZM14.6667 12.6042C14.0338 12.6042 13.5208 13.1172 13.5208 13.75C13.5208 14.3828 14.0338 14.8958 14.6667 14.8958C15.2995 14.8958 15.8125 14.3828 15.8125 13.75C15.8125 13.1172 15.2995 12.6042 14.6667 12.6042ZM12.1458 13.75C12.1458 12.3578 13.2744 11.2292 14.6667 11.2292C16.0589 11.2292 17.1875 12.3578 17.1875 13.75C17.1875 15.1422 16.0589 16.2708 14.6667 16.2708C13.2744 16.2708 12.1458 15.1422 12.1458 13.75ZM6.1875 8.25C6.1875 8.88283 6.70051 9.39583 7.33333 9.39583C7.96616 9.39583 8.47917 8.88283 8.47917 8.25C8.47917 7.61717 7.96616 7.10417 7.33333 7.10417C6.70051 7.10417 6.1875 7.61717 6.1875 8.25ZM7.33333 10.7708C5.94112 10.7708 4.8125 9.64222 4.8125 8.25C4.8125 6.85778 5.94112 5.72917 7.33333 5.72917C8.72555 5.72917 9.85417 6.85778 9.85417 8.25C9.85417 9.64222 8.72555 10.7708 7.33333 10.7708ZM14.6667 16.5C15.1729 16.5 15.5833 16.9104 15.5833 17.4167V18.3333C15.5833 18.8396 15.1729 19.25 14.6667 19.25C14.1604 19.25 13.75 18.8396 13.75 18.3333V17.4167C13.75 16.9104 14.1604 16.5 14.6667 16.5ZM9.25 5.58333C9.25 6.08959 8.83959 6.5 8.33333 6.5C7.82707 6.5 7.41667 6.08959 7.41667 5.58333V4.66667C7.41667 4.16041 7.82707 3.75 8.33333 3.75C8.83959 3.75 9.25 4.16041 9.25 4.66667V5.58333Z"
                    fill="#5EB0FF"
                    fillOpacity="0.8"
                  />
                </svg>
              ) : (
                <svg
                  width={32}
                  height={32}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.5833 4.66667C16.5833 4.16041 16.1729 3.75 15.6667 3.75C15.1604 3.75 14.75 4.16041 14.75 4.66667V11.0833C14.75 11.5896 15.1604 12 15.6667 12C16.1729 12 16.5833 11.5896 16.5833 11.0833V4.66667ZM9.25 19.3333C9.25 19.8396 8.83959 20.25 8.33333 20.25C7.82707 20.25 7.41667 19.8396 7.41667 19.3333V12.9167C7.41667 12.4104 7.82707 12 8.33333 12C8.83959 12 9.25 12.4104 9.25 12.9167V19.3333ZM15.6667 13.6042C15.0338 13.6042 14.5208 14.1172 14.5208 14.75C14.5208 15.3828 15.0338 15.8958 15.6667 15.8958C16.2995 15.8958 16.8125 15.3828 16.8125 14.75C16.8125 14.1172 16.2995 13.6042 15.6667 13.6042ZM13.1458 14.75C13.1458 13.3578 14.2744 12.2292 15.6667 12.2292C17.0589 12.2292 18.1875 13.3578 18.1875 14.75C18.1875 16.1422 17.0589 17.2708 15.6667 17.2708C14.2744 17.2708 13.1458 16.1422 13.1458 14.75ZM7.1875 9.25C7.1875 9.88283 7.70051 10.39583 8.33333 10.39583C8.96616 10.39583 9.47917 9.88283 9.47917 8.25C9.47917 7.61717 8.96616 7.10417 8.33333 7.10417C7.70051 7.10417 7.1875 7.61717 7.1875 8.25ZM8.33333 11.7708C6.94112 11.7708 5.8125 10.64222 5.8125 9.25C5.8125 6.85778 6.94112 5.72917 8.33333 5.72917C9.72555 5.72917 10.8542 6.85778 10.8542 9.25C10.8542 10.64222 9.72555 11.7708 8.33333 11.7708ZM15.6667 17.5C16.1729 17.5 16.5833 17.9104 16.5833 18.4167V19.3333C16.5833 19.8396 16.1729 20.25 15.6667 20.25C15.1604 20.25 14.75 19.8396 14.75 19.3333V18.4167C14.75 17.9104 15.1604 17.5 15.6667 17.5ZM9.25 5.58333C9.25 6.08959 8.83959 6.5 8.33333 6.5C7.82707 6.5 7.41667 6.08959 7.41667 5.58333V4.66667C7.41667 4.16041 7.82707 3.75 8.33333 3.75C8.83959 3.75 9.25 4.16041 9.25 4.66667V5.58333Z"
                    fill="#121212"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-8 h-8">
            <button
              className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 p-1 rounded-[1000px]"
              style={{ filter: 'drop-shadow(0px 0px 4px rgba(0,0,0,0.08))' }}
              onClick={handleSearchClick}
            >
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.58333 10.1667C5.58333 7.63536 7.63536 5.58333 10.1667 5.58333C12.698 5.58333 14.75 7.63536 14.75 10.1667C14.75 12.698 12.698 14.75 10.1667 14.75C7.63536 14.75 5.58333 12.698 5.58333 10.1667ZM10.1667 3.75C6.62284 3.75 3.75 6.62284 3.75 10.1667C3.75 13.7105 6.62284 16.5833 10.1667 16.5833C13.7105 16.5833 16.5833 13.7105 16.5833 10.1667C16.5833 6.62284 13.7105 3.75 10.1667 3.75ZM16.3148 15.0185C15.9569 14.6605 15.3765 14.6605 15.0185 15.0185C14.6605 15.3765 14.6605 15.9569 15.0185 16.3148L18.6852 19.9815C19.0431 20.3395 19.6235 20.3395 19.9815 19.9815C20.3395 19.6235 20.3395 19.0431 19.9815 18.6852L16.3148 15.0185Z"
                  fill="#121212"
                />
              </svg>
            </button>
          </div>
        </div>
        {showDropdown && (
          <div className="absolute w-[288px] h-[165px] bg-white rounded-lg border border-opacity-50 top-[50px] left-3.5 flex flex-col items-start p-2 z-20">
            <div className="flex flex-wrap gap-1 border-b border-gray-300 pb-1 mb-2">
              {['유형', '날씨', '계절', '스타일', '장소'].map((item) => (
                <button
                  key={item}
                  className={`w-[50px] h-[33px] flex justify-center items-center rounded-lg text-[#121212] relative ${
                    selectedTab === item ? 'font-bold' : ''
                  }`}
                  onClick={() => handleTabClick(item)}
                >
                  {item}
                  {selectedTab === item && (
                    <span className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 h-0.5 w-10 bg-black" />
                  )}
                </button>
              ))}
            </div>
            <div>
              {selectedTab === '유형' && (
                <div className="flex flex-wrap gap-1">
                  {['남성', '여성', '선택 안함'].map((option) => (
                    <button
                      key={option}
                      onClick={() => handleOptionClick(option)}
                      className={`flex justify-center items-center rounded-lg ${
                        selectedOptions['유형']?.includes(option)
                          ? 'bg-[#121212] text-white'
                          : 'bg-[#E6E6E699] text-[#121212]'
                      } ${
                        option === '선택 안함'
                          ? 'w-[74px] h-[32px]'
                          : 'w-[46px] h-[32px]'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div>
              {selectedTab === '날씨' && (
                <div className="flex flex-wrap gap-1">
                  {['맑음', '흐림', '비', '눈'].map((option) => (
                    <button
                      key={option}
                      onClick={() => handleOptionClick(option)}
                      className={`flex justify-center items-center rounded-lg ${
                        selectedOptions['날씨']?.includes(option)
                          ? 'bg-[#121212] text-white'
                          : 'bg-[#E6E6E699] text-[#121212]'
                      } ${'w-[59px] h-[32px]'}`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div>
              {selectedTab === '계절' && (
                <div className="flex flex-wrap gap-1">
                  {['봄', '여름', '가을', '겨울'].map((option) => (
                    <button
                      key={option}
                      onClick={() => handleOptionClick(option)}
                      className={`flex justify-center items-center rounded-lg ${
                        selectedOptions['계절']?.includes(option)
                          ? 'bg-[#121212] text-white'
                          : 'bg-[#E6E6E699] text-[#121212]'
                      } ${'w-[59px] h-[32px]'}`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div>
              {selectedTab === '스타일' && (
                <div className="flex flex-wrap gap-1">
                  {[
                    '미니멀',
                    '아메카지',
                    '시티보이',
                    '캐주얼',
                    '비즈니스캐주얼',
                    '스포츠',
                    '빈티지',
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => handleOptionClick(option)}
                      className={`flex justify-center items-center rounded-lg ${
                        selectedOptions['스타일']?.includes(option)
                          ? 'bg-[#121212] text-white'
                          : 'bg-[#E6E6E699] text-[#121212]'
                      } ${
                        option === '비즈니스캐주얼'
                          ? 'w-[120px] h-[32px]'
                          : option === '아메카지' || option === '시티보이'
                            ? 'w-[80px] h-[32px]'
                            : 'w-[59px] h-[32px]'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div>
              {selectedTab === '장소' && (
                <div className="flex flex-wrap gap-1">
                  {[
                    '데이트',
                    '캠퍼스',
                    '카페',
                    '출근',
                    '결혼식',
                    '바다',
                    '여행',
                    '데일리',
                    '소개팅',
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => handleOptionClick(option)}
                      className={`flex justify-center items-center rounded-lg ${
                        selectedOptions['장소']?.includes(option)
                          ? 'bg-[#121212] text-white'
                          : 'bg-[#E6E6E699] text-[#121212]'
                      } ${'w-[59px] h-[32px]'}`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
        {showSearchDropdown && (
          <div className="absolute w-[310px] p-4 top-[50px] left-3.5 bg-white rounded-lg border border-opacity-50 shadow-md backdrop-blur-sm">
            <div className="flex items-center justify-left mb-2">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.58333 10.1667C5.58333 7.63536 7.63536 5.58333 10.1667 5.58333C12.698 5.58333 14.75 7.63536 14.75 10.1667C14.75 12.698 12.698 14.75 10.1667 14.75C7.63536 14.75 5.58333 12.698 5.58333 10.1667ZM10.1667 3.75C6.62284 3.75 3.75 6.62284 3.75 10.1667C3.75 13.7105 6.62284 16.5833 10.1667 16.5833C13.7105 16.5833 16.5833 13.7105 16.5833 10.1667C16.5833 6.62284 13.7105 3.75 10.1667 3.75ZM16.3148 15.0185C15.9569 14.6605 15.3765 14.6605 15.0185 15.0185C14.6605 15.3765 14.6605 15.9569 15.0185 16.3148L18.6852 19.9815C19.0431 20.3395 19.6235 20.3395 19.9815 19.9815C20.3395 19.6235 20.3395 19.0431 19.9815 18.6852L16.3148 15.0185Z"
                  fill="#121212"
                />
              </svg>
              <input
                type="text"
                placeholder="원하는 스타일을 검색해보세요"
                className="ml-2 text-[#121212] outline-none w-full"
                value={searchTerm}
                onChange={setSearchTerm} // Call the input change handler
                onKeyDown={handleSearch}
              />
            </div>
            <div className="border-b border-black mb-2"></div>
            <div className="flex flex-wrap gap-2">
              {['#봄패션', '#스트릿패션', '#데이트', '#야외'].map((tag) => (
                <span key={tag} className="text-[#121212]">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex justify-end mt-2"></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ListSelects;
