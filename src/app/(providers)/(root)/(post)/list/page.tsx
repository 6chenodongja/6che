'use client';
import React, {
  useState,
  useEffect,
  ChangeEvent,
  KeyboardEvent,
  useCallback,
} from 'react';
import { supabase } from '@/supabase/client';
import Image from 'next/image';
import Link from 'next/link';
import ListHeader from './_components/ListHeader';
import ListSelects from './_components/ListSelect';
import ScrollButtons from './_components/ScrollButtons';
import _ from 'lodash';
import { useUserStore } from '@/zustand/store/useUserStore';
import { Tables } from '../../../../../../types/supabase';

function PostList() {
  const [liked, setLiked] = useState<{ [key: string]: boolean }>({});
  const [posts, setPosts] = useState<Tables<'posts'>[]>([]);
  const [users, setUsers] = useState<Tables<'users'>[]>([]);
  const [latest, setLatest] = useState('latest');
  const [filteredPosts, setFilteredPosts] = useState<Tables<'posts'>[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string[];
  }>({});
  const [selectedTab, setSelectedTab] = useState<string>('유형');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchInput, setSearchInput] = useState<string>('');
  const [showSearchDropdown, setShowSearchDropdown] = useState<boolean>(false);

  const User = useUserStore();

  const handleLike = useCallback(
    async (postId: string, userId: string) => {
      try {
        const isLiked = liked[postId];

        if (isLiked) {
          await supabase
            .from('post_likes')
            .delete()
            .eq('post_id', postId)
            .eq('user_id', userId);

          const { data: postData, error: postFetchError } = await supabase
            .from('posts')
            .select('like')
            .eq('id', postId)
            .single();

          if (postFetchError) {
            console.log(
              '해당 포스트의 좋아요 수 가져오기 오류',
              postFetchError,
            );
          }
          const newLikeCount = (postData?.like || 0) - 1;
          await supabase
            .from('posts')
            .update({ like: newLikeCount })
            .eq('id', postId);

          setPosts((prevPosts) =>
            prevPosts.map((post) =>
              post.id === postId ? { ...post, like: newLikeCount } : post,
            ),
          );
        } else {
          await supabase
            .from('post_likes')
            .insert({ post_id: postId, user_id: userId });

          const { data: postData, error: postFetchError } = await supabase
            .from('posts')
            .select('like')
            .eq('id', postId)
            .single();

          if (postFetchError) {
            console.log(
              '해당 포스트의 좋아요 수 가져오기 실패..',
              postFetchError,
            );
          }
          const newLikeCount = (postData?.like || 0) + 1;
          await supabase
            .from('posts')
            .update({ like: newLikeCount })
            .eq('id', postId);

          setPosts((prevPosts) =>
            prevPosts.map((post) =>
              post.id === postId ? { ...post, like: newLikeCount } : post,
            ),
          );
        }

        setLiked((prevLiked) => ({
          ...prevLiked,
          [postId]: !isLiked,
        }));
      } catch (error) {
        console.error(error);
      }
    },
    [liked],
  );

  const debouncedHandleLike = _.debounce(handleLike, 500);

  const fetchUsers = useCallback(async () => {
    const { data } = await supabase.from('users').select('*').eq('id', User);
    if (data) {
      setUsers(data);
    }
  }, [User]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const getNickName = useCallback(
    (userId: string) => {
      const user = users.find((user) => user.id === userId);
      return user ? user.nick_name : 'Unknown';
    },
    [users],
  );

  const fetchPosts = useCallback(async (order: string) => {
    const orderColumn = order === 'latest' ? 'created_at' : 'like';
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order(orderColumn, { ascending: false });

    if (error) {
      console.error(error);
    } else {
      setPosts(data);
      setFilteredPosts(data);
    }
  }, []);

  useEffect(() => {
    fetchPosts(latest);
  }, [latest, fetchPosts]);

  const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setLatest(e.target.value);
  };

  const filterPosts = useCallback(() => {
    let filtered: Tables<'posts'>[] = [...posts];

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

    if (searchTerm) {
      filtered = filtered.filter((post) => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        const locations = Array.isArray(post.locations)
          ? post.locations
          : (post.locations ?? '').split(',');
        const seasons = Array.isArray(post.seasons)
          ? post.seasons
          : (post.seasons ?? '').split(',');
        const style = Array.isArray(post.style)
          ? post.style
          : (post.style ?? '').split(',');
        return (
          (post.gender ?? '').toLowerCase().includes(lowerCaseSearchTerm) ||
          locations.some((loc) =>
            loc.toLowerCase().includes(lowerCaseSearchTerm),
          ) ||
          seasons.some((season) =>
            season.toLowerCase().includes(lowerCaseSearchTerm),
          ) ||
          style.some((style) =>
            style.toLowerCase().includes(lowerCaseSearchTerm),
          )
        );
      });
    }

    setFilteredPosts(filtered.length > 0 ? filtered : posts);
  }, [selectedOptions, searchTerm, posts]);

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
      console.log('Selected options:', newOptions);
      return newOptions;
    });
  };

  const handleSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSearchTerm(searchInput);
      filterPosts();
      setShowSearchDropdown(false); // 드롭다운 닫기
    }
  };

  const handleSearchClick = () => {
    setShowSearchDropdown((prev) => !prev);
  };

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  console.log(User);

  return (
    <div className="max-w-sm mx-auto h-auto">
      <ListHeader />
      <div className="mt-6">
        <ListSelects
          handleSortChange={handleSortChange}
          selectedOptions={selectedOptions}
          handleOptionClick={handleOptionClick}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          searchTerm={searchInput}
          setSearchTerm={handleSearchInputChange}
          handleSearch={handleSearch}
          showSearchDropdown={showSearchDropdown}
          handleSearchClick={handleSearchClick}
        />
      </div>

      <div className="flex justify-start items-center">
        {Object.entries(selectedOptions).map(([key, options]) =>
          options.map((option) => (
            <div
              key={`${key}-${option}`}
              className="mr-2 mb-2 px-2 py-1 bg-black text-white rounded"
            >
              {option}
            </div>
          )),
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {filteredPosts.map((post) => (
          <div key={post.id} className="relative">
            <Link href={`/detail/${post.id}`}>
              {post.image_url && (
                <Image
                  src={post.image_url.split(',')[0]}
                  alt="alt"
                  width={200}
                  height={100}
                  className="w-[140px] h-[200px] object-cover rounded-lg"
                  priority
                />
              )}
              <div className="absolute top-2 left-2 bg-white bg-opacity-50 p-[4px] rounded text-[#4D4D4D]">
                ☀️ 26°
              </div>
            </Link>

            {/* 좋아요 부분 */}
            <div
              className={`absolute bottom-6 right-8  bg-opacity-50 p-1 m-1 text-sm rounded-lg cursor-pointer  ${
                liked[post.id] ? 'text-red-500' : ''
              }`}
              onClick={() => debouncedHandleLike(post.id, post.user_id)}
            >
              {liked[post.id] ? (
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=" relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g filter="url(#filter0_b_2350_1039)">
                    <path
                      d="M9.46702 18.6916C9.31172 18.6061 9.1021 18.4874 8.85564 18.3396C8.37314 18.0502 7.70013 17.6199 7 17.0801C6.32882 16.5625 5.46297 15.8156 4.72066 14.8617C4.03396 13.9792 3 12.3407 3 10.1404C3 7.30146 5.23858 5 8 5C9.6356 5 11.0878 5.8074 12 7.05568C12.9122 5.8074 14.3644 5 16 5C18.7614 5 21 7.30146 21 10.1404C21 12.3407 19.966 13.9792 19.2793 14.8617C18.537 15.8156 17.6712 16.5625 17 17.0801C16.2999 17.6199 15.6269 18.0502 15.1444 18.3396C14.8979 18.4874 14.6883 18.6061 14.533 18.6916L13.8357 19.0518C12.6842 19.6466 11.3158 19.6466 10.1643 19.0518L9.46702 18.6916Z"
                      fill="#FF4732"
                      fillOpacity="0.85"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_b_2350_1039"
                      x={1}
                      y={3}
                      width={22}
                      height="18.4978"
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
                        result="effect1_backgroundBlur_2350_1039"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_2350_1039"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              ) : (
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-6 relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g filter="url(#filter0_b_2350_1040)">
                    <path
                      d="M9.46702 18.6916C9.31172 18.6061 9.1021 18.4874 8.85564 18.3396C8.37314 18.0502 7.70013 17.6199 7 17.0801C6.32882 16.5625 5.46297 15.8156 4.72066 14.8617C4.03396 13.9792 3 12.3407 3 10.1404C3 7.30146 5.23858 5 8 5C9.6356 5 11.0878 5.8074 12 7.05568C12.9122 5.8074 14.3644 5 16 5C18.7614 5 21 7.30146 21 10.1404C21 12.3407 19.966 13.9792 19.2793 14.8617C18.537 15.8156 17.6712 16.5625 17 17.0801C16.2999 17.6199 15.6269 18.0502 15.1444 18.3396C14.8979 18.4874 14.6883 18.6061 14.533 18.6916L13.8357 19.0518C12.6842 19.6466 11.3158 19.6466 10.1643 19.0518L9.46702 18.6916Z"
                      fill="#CCCCCC"
                      fillOpacity="0.7"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_b_2350_1040"
                      x={-1}
                      y={1}
                      width={26}
                      height="22.4978"
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
                        result="effect1_backgroundBlur_2350_1040"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_2350_1040"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              )}
            </div>
            <div className="mt-2">
              <div className="text-sm">
                <span className="flex justify-start">
                  {/* 날짜이모지와 닉네임  */}
                  <span className="font-bold text-[14px] flex flex-row">
                    <div className="w-[20px] h-[20px] p-[1px] flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="12"
                        viewBox="0 0 16 12"
                        fill="none"
                      >
                        <path
                          d="M8.33088 5.5C6.9055 5.5 5.75 4.68636 5.75 3.68269C5.75 2.73395 6.78248 1.95501 8.09942 1.87259C8.36115 0.947331 9.52081 0.25 10.9118 0.25C12.4955 0.25 13.7794 1.15404 13.7794 2.26923C13.7794 2.28619 13.7791 2.3031 13.7785 2.31996C14.7684 2.49907 15.5 3.13169 15.5 3.88462C15.5 4.77677 14.4729 5.5 13.2059 5.5H8.33088Z"
                          fill="#B3B3B3"
                        />
                        <g filter="url(#filter0_bd_4322_3812)">
                          <path
                            d="M10.4265 10.75C12.4001 10.75 14 9.47143 14 7.89423C14 6.40335 12.5704 5.17931 10.747 5.04979C10.3846 3.59581 8.77888 2.5 6.85294 2.5C4.66005 2.5 2.88235 3.92063 2.88235 5.67308C2.88235 5.69973 2.88276 5.7263 2.88358 5.7528C1.51292 6.03425 0.5 7.02836 0.5 8.21154C0.5 9.61349 1.92215 10.75 3.67647 10.75H10.4265Z"
                            fill="#CCCCCC"
                            fillOpacity="0.7"
                            shapeRendering="crispEdges"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_bd_4322_3812"
                            x="-1.5"
                            y="0.5"
                            width="17.5"
                            height="12.25"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            />
                            <feGaussianBlur
                              in="BackgroundImageFix"
                              stdDeviation="1"
                            />
                            <feComposite
                              in2="SourceAlpha"
                              operator="in"
                              result="effect1_backgroundBlur_4322_3812"
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
                              in2="effect1_backgroundBlur_4322_3812"
                              result="effect2_dropShadow_4322_3812"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect2_dropShadow_4322_3812"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                    {getNickName(post.user_id)}
                  </span>
                  <span className="flex flex-row text-[12px] ml-[30px]">
                    <svg
                      width={16}
                      height={17}
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <g filter="url(#filter0_b_2959_4387)">
                        <path
                          d="M6.31135 12.961C6.20782 12.904 6.06807 12.8249 5.90376 12.7263C5.58209 12.5334 5.13342 12.2465 4.66667 11.8866C4.21921 11.5416 3.64198 11.0437 3.1471 10.4077C2.68931 9.81938 2 8.72707 2 7.26022C2 5.36756 3.49238 3.83325 5.33333 3.83325C6.42373 3.83325 7.39185 4.37152 8 5.2037C8.60815 4.37152 9.57627 3.83325 10.6667 3.83325C12.5076 3.83325 14 5.36756 14 7.26022C14 8.72707 13.3107 9.81938 12.8529 10.4077C12.358 11.0437 11.7808 11.5416 11.3333 11.8866C10.8666 12.2465 10.4179 12.5334 10.0962 12.7263C9.93193 12.8249 9.79218 12.904 9.68865 12.961C8.62937 13.5082 7.37063 13.5082 6.31135 12.961Z"
                          fill="#121212"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_b_2959_4387"
                          x={0}
                          y="1.83325"
                          width={16}
                          height="13.5381"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity={0}
                            result="BackgroundImageFix"
                          />
                          <feGaussianBlur
                            in="BackgroundImageFix"
                            stdDeviation={1}
                          />
                          <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_2959_4387"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_backgroundBlur_2959_4387"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                    {post.like}
                  </span>
                </span>
              </div>
            </div>
          </div>
        ))}
        <ScrollButtons />
      </div>
    </div>
  );
}

export default PostList;
