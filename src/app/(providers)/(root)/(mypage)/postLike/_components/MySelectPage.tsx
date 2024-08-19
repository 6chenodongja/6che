'use client';
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { Tables } from '../../../../../../../types/supabase';
import { supabase } from '@/supabase/client';
import MyLikeFilter from './MyLikeFilter';
import { PostItemType } from '../../../../../../../types/post';

function MySelectPage() {
  const [posts, setPosts] = useState<PostItemType[]>([]);
  const [latest, setLatest] = useState('latest');
  const [filteredPosts, setFilteredPosts] = useState<PostItemType[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string[];
  }>({});
  const [selectedTab, setSelectedTab] = useState<string>('유형');

  // 포스트 리스트 가져오기
  const fetchPosts = useCallback(async (order: string) => {
    const orderColumn = order === 'latest' ? 'created_at' : 'like';
    const { data: postList, error } = await supabase
      .from('posts')
      .select('*, users(*)')
      .order(orderColumn, { ascending: false });

    if (error) {
      console.error(error);
    } else {
      setPosts(postList);
      setFilteredPosts(postList);
    }
  }, []);

  useEffect(() => {
    fetchPosts(latest);
  }, [latest, fetchPosts]);

  const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setLatest(e.target.value);
  };

  const filterPosts = useCallback(() => {
    let filtered: PostItemType[] = [...posts];

    Object.keys(selectedOptions).forEach((key) => {
      if (selectedOptions[key].length > 0) {
        if (key === '유형') {
          filtered = filtered.filter((post) =>
            selectedOptions[key].includes(post.gender ?? ''),
          );
        } else if (key === '날씨') {
          filtered = filtered.filter((post) =>
            selectedOptions[key].some((option) =>
              (post.weather ?? '').includes(option),
            ),
          );
        } else if (key === '계절') {
          filtered = filtered.filter((post) =>
            selectedOptions[key].some((option) =>
              (post.seasons ?? '').includes(option),
            ),
          );
        } else if (key === '스타일') {
          filtered = filtered.filter((post) =>
            selectedOptions[key].some((option) =>
              (post.style ?? '').includes(option),
            ),
          );
        } else if (key === '장소') {
          filtered = filtered.filter((post) => {
            const locations = Array.isArray(post.locations)
              ? post.locations
              : (post.locations ?? '').split(',');
            return selectedOptions[key].some((option) =>
              locations.includes(option),
            );
          });
        }
      }
    });

    setFilteredPosts(filtered.length > 0 ? filtered : posts);
  }, [selectedOptions, posts]);

  useEffect(() => {
    filterPosts();
  }, [selectedOptions, posts, filterPosts]);

  const handleOptionClick = (option: string) => {
    setSelectedOptions((prevOptions) => {
      const newOptions = { ...prevOptions };
      if (!newOptions[selectedTab]) {
        newOptions[selectedTab] = [];
      }
      if (newOptions[selectedTab].includes(option)) {
        newOptions[selectedTab] = newOptions[selectedTab].filter(
          (item) => item !== option,
        );
      } else {
        newOptions[selectedTab].push(option);
      }
      return newOptions;
    });
  };

  //버튼 삭제 로직
  const handleOptionRemove = (key: string, option: string) => {
    setSelectedOptions((prevOptions) => {
      const newOptions = { ...prevOptions };
      newOptions[key] = newOptions[key].filter((item) => item !== option);
      if (newOptions[key].length === 0) {
        delete newOptions[key];
      }
      return newOptions;
    });
  };

  return (
    <div>
      <div className="mt-7 md:mt-3">
        <MyLikeFilter
          handleSortChange={handleSortChange}
          selectedOptions={selectedOptions}
          handleOptionClick={handleOptionClick}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </div>

      <div className="max-w-[288px] mx-auto">
        <div className="flex justify-start items-center gap-[6px] flex-wrap">
          {Object.entries(selectedOptions).map(([key, options]) =>
            options.map((option) => (
              <div
                key={`${key}-${option}`}
                className="mb-[12px] flex items-center h-[32px] gap-[4px] rounded-xl bg-[#121212] text-white px-[12px] pt-[4px] pb-[6px] text-[14px] font-KR font-normal leading-[1.5px] tracking-[-0.28px]"
              >
                {option}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  className="flex justify-center items-center w-[16px] h-[16px] cursor-pointer"
                  onClick={() => handleOptionRemove(key, option)}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.47132 4.02864C4.21097 3.76829 3.78886 3.76829 3.52851 4.02864C3.26816 4.28899 3.26816 4.7111 3.52851 4.97145L7.05711 8.50004L3.52851 12.0286C3.26816 12.289 3.26816 12.7111 3.52851 12.9714C3.78886 13.2318 4.21097 13.2318 4.47132 12.9714L7.99992 9.44285L11.5285 12.9714C11.7889 13.2318 12.211 13.2318 12.4713 12.9714C12.7317 12.7111 12.7317 12.289 12.4713 12.0286L8.94273 8.50004L12.4713 4.97145C12.7317 4.7111 12.7317 4.28899 12.4713 4.02864C12.211 3.76829 11.7889 3.76829 11.5285 4.02864L7.99992 7.55723L4.47132 4.02864Z"
                    fill="#B3B3B3"
                  />
                </svg>
              </div>
            )),
          )}
        </div>
      </div>
    </div>
  );
}

export default MySelectPage;
