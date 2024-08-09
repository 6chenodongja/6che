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
import Header from 'app/(providers)/(components)/Header';
import Footer from 'app/(providers)/(components)/Footer';
import { useUserStore } from '@/zustand/store/useUserStore';
import { PostItemType, postListLikedType } from '../../../../../../types/post';
import PostItem from './_components/PostItem';
import ScrollButtons from './_components/ScrollButtons';

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

  const { user } = useUserStore();

  // 포스트 리스트 가져오기
  const fetchPosts = useCallback(
    async (order: string) => {
      const orderColumn = order === 'latest' ? 'created_at' : 'like';
      const { data: postList, error } = await supabase
        .from('posts')
        .select('*,  users(*)')
        .order(orderColumn, { ascending: false });

      if (error) {
        console.error(error);
      } else {
        setPosts(postList);
        setFilteredPosts(postList);
      }
    },
    [user],
  );

  // post_likes 테이블에 좋아요 유저 정보
  const fetchUserLiked = async () => {
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
  };

  useEffect(() => {
    fetchPosts(latest);
    fetchUserLiked();
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
      if (!user) return;

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
            .insert({ post_id: postId, user_id: user.id });

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
    [likedPosts, user],
  );

  return (
    <div className="container mx-auto h-auto bg-[#FAFAFA]">
      <Header />
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

      <div className="flex justify-start items-center gap-[6px] ml-4">
        {Object.entries(selectedOptions).map(([key, options]) =>
          options.map((option) => (
            <div
              key={`${key}-${option}`}
              className=" mb-4 px-[10px] pt-[4px] pb-[6px] bg-black text-white rounded"
            >
              {option}
            </div>
          )),
        )}
      </div>
      <div className="grid grid-cols-2 gap-y-2.5 gap-x-2 w-[288px] mx-auto">
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
      <Footer />
    </div>
  );
}
export default PostList;
