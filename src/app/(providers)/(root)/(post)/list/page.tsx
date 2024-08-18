'use client';
import React, {
  useState,
  useEffect,
  ChangeEvent,
  KeyboardEvent,
  useCallback,
} from 'react';
import { supabase } from '@/supabase/client';
import ListHeader from './_components/ListHeader';
import ListSelects from './_components/ListSelect';
import _ from 'lodash';
import { useUserStore } from '@/zustand/store/useUserStore';
import { PostItemType, postListLikedType } from '../../../../../../types/post';
import PostItem from './_components/PostItem';
import ScrollButtons from './_components/ScrollButtons';
import { useRouter } from 'next/navigation';

function PostList() {
  const [likedPosts, setLikedPosts] = useState<postListLikedType[]>([]);
  const [posts, setPosts] = useState<PostItemType[]>([]);
  const [latest, setLatest] = useState('latest');
  const [filteredPosts, setFilteredPosts] = useState<PostItemType[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string[];
  }>({});
  const [selectedTab, setSelectedTab] = useState<string>('유형');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchInput, setSearchInput] = useState<string>('');
  const [showSearchDropdown, setShowSearchDropdown] = useState<boolean>(false);
  const router = useRouter();

  const { user } = useUserStore();

  // 포스트 리스트 가져오기
  const fetchPosts = useCallback(
    async (order: string) => {
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
    },
    [], // 'user'를 의존성 배열에서 제거했습니다.
  );

  // post_likes 테이블에 좋아요 유저 정보
  const fetchUserLiked = useCallback(async () => {
    if (!user) return;

    const { data: isLikes, error } = await supabase
      .from('post_likes')
      .select('post_id')
      .eq('user_id', user?.id);

    if (error) {
      console.error('좋아요 누른 유저가 없다:', error);
    } else {
      setLikedPosts(isLikes);
    }
  }, [user]); // user를 의존성 배열에 추가

  useEffect(() => {
    fetchPosts(latest);
    fetchUserLiked(); // 'fetchUserLiked'를 의존성 배열에 추가했습니다.
  }, [latest, fetchPosts, fetchUserLiked]);

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
      console.log('Selected options:', newOptions); // newOptions가 2개가 동시에 찍힌다 그래서 클릭이 안되는 것 처럼 보인다.
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

  const handleLike = useCallback(
    async (postId: string) => {
      if (!user) {
        alert('로그인이 되어있지 않습니다');
        router.replace('/login');
        return;
      }

      const isLiked = likedPosts.some(
        (likedPost) => likedPost.post_id === postId,
      );

      try {
        if (isLiked) {
          await supabase
            .from('post_likes')
            .delete()
            .eq('post_id', postId)
            .eq('user_id', user?.id);

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
          setLikedPosts((prev) =>
            prev.filter((post) => post.post_id !== postId),
          );
        } else {
          await supabase
            .from('post_likes')
            .insert({ post_id: postId, user_id: user?.id });

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
          setLikedPosts((prev) => [...prev, { post_id: postId }]);
        }
      } catch (error) {
        console.error(error);
      }
    },
    [likedPosts, user, router],
  );

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
    <div className="list-container h-auto bg-[#FAFAFA]">
      <ListHeader />
      <div>
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

      <div className="mx-[16px]">
        <div className="list-header flex justify-start items-center gap-[6px] flex-wrap mx-auto ">
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
      <div className="list-grid gap-y-2.5 gap-x-2 w-[288px] mx-auto md:gap-x-[20px]">
        {filteredPosts.map((post) => (
          <PostItem
            post={post}
            key={post.id}
            isLiked={likedPosts.some(
              (likedPost) => likedPost.post_id === post.id,
            )}
            handleLike={handleLike}
          />
        ))}
        <ScrollButtons />
      </div>
    </div>
  );
}
export default PostList;
