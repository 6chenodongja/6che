'use client';
import React, {
  useCallback,
  SetStateAction,
  Dispatch,
  useState,
  ChangeEvent,
} from 'react';
import { supabase } from '@/supabase/client';
import _ from 'lodash';
import Header from 'app/(providers)/(components)/Header';
import Footer from 'app/(providers)/(components)/Footer';
import MyStyleHeader from './MyStyleHeader';
import MyStylePostItem from './MyStylePostItem';
import { useUserStore } from '@/zustand/store/useUserStore';
import { Tables } from '../../../../../../../types/supabase';
import { postListLikedType } from '../../../../../../../types/post';
import MyStyleSelect from './MyStyleSelet';
import Link from 'next/link';

interface PostProps {
  posts: Tables<'posts'>[];
  setPosts: Dispatch<SetStateAction<Tables<'posts'>[]>>;
  likedPosts: postListLikedType[];
  setLikedPosts: Dispatch<SetStateAction<postListLikedType[]>>;
}

function MyStyleList({
  posts,
  setPosts,
  setLikedPosts,
  likedPosts,
}: PostProps) {
  const { user } = useUserStore();

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
    [user, likedPosts, setPosts, setLikedPosts],
  );

  // 개별 체크
  const [checkItems, setCheckItems] = useState<string[]>([]); // setcheckItmes로 전체 체크

  const checkItemsHandler = (postId: string, isChecked: boolean) => {
    if (isChecked) {
      setCheckItems((prev) => [...prev, postId]);
    } else {
      setCheckItems((prev) => prev.filter((id) => id !== postId));
    }
  };

  const fetchUserPostDelete = async () => {
    if (!user || checkItems.length === 0) return;

    const { error } = await supabase
      .from('posts')
      .delete()
      .in('id', checkItems);

    if (error) {
      console.error('내가 올린 포스트 삭제 에러:', error);
    } else {
      setCheckItems(
        (prevPosts) => prevPosts.filter((id) => !checkItems.includes(id)), // checkItems 배열 안에 없는 애들만 필터링
      );
      setCheckItems([]);
    }
  };

  // all체크 하는 로직
  const allCheckHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setCheckItems(posts.map((item) => item.id));
    } else {
      setCheckItems([]);
    }
  };

  //myStylePage 포스트 삭제
  const handlePostDelete = async () => {
    await fetchUserPostDelete();
    setPosts((prev) => prev.filter((item) => !checkItems.includes(item.id)));
    setCheckItems([]);
  };

  return (
    <div className="notPostLike-container min-w-[320px] max-w-[768px] md:min-w-[768px] md:max-w-[1920px] mx-auto bg-[#FAFAFA] md:h-[1721px]">
      <div className="block md:hidden">
        <MyStyleHeader />

        <MyStyleSelect
          allCheckHandler={allCheckHandler}
          fetchUserPostDelete={fetchUserPostDelete}
          checkItems={checkItems}
          setCheckItems={setCheckItems}
          handlePostDelete={handlePostDelete}
        />

        <div className="grid grid-cols-2 gap-y-2 gap-x-2 w-[288px] mx-auto">
          {posts.map((post) => {
            return (
              <MyStylePostItem
                key={post.id}
                post={post}
                handleLike={handleLike}
                isLiked={likedPosts.some(
                  (likedPost) => likedPost.post_id === post.id, // some는 2차원 적으로 객체의배열 에서만 사용
                )}
                checkItemsHandler={checkItemsHandler}
                fetchUserPostDelete={fetchUserPostDelete}
                checkItems={checkItems}
                isChecked={checkItems.includes(post.id)} // includes는 1차원 적 string, number에서만 사용
              />
            );
          })}
        </div>
      </div>

      {/* 768이상 해상도 디자인 */}
      <div className="hidden md:flex">
        <div
          className="md:w-[220px] md:h-[170px] md:px-[8xp] md:py-[16px] md:flex md:flex-col ml-[200px] md:rounded-[12px] md:opacity-50 md:gap-[4px] md:mt-[20px] md:justify-around"
          style={{
            boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.05)',
          }}
        >
          <Link href={'/mypage'}>
            <p className="flex px-[16px] items-center self-stretch font-KR text-[14px] font-normal leading-[18.2px] -tracking-[0.28]">
              마이페이지
            </p>
          </Link>
          <Link href={'/postLike'}>
            <p className="flex px-[16px] items-center self-stretch font-semibold">
              좋아요한 코디
            </p>
          </Link>
          <p className="flex px-[16px] items-center self-stretch text-[16px] flex-row justify-between text-[#298CFF] font-bold">
            내 코디
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
                d="M8.51849 4.85149C8.87647 4.49351 9.45687 4.49351 9.81485 4.85149L15.3148 10.3515C15.6728 10.7095 15.6728 11.2899 15.3148 11.6479L9.81485 17.1479C9.45687 17.5058 8.87647 17.5058 8.51849 17.1479C8.1605 16.7899 8.1605 16.2095 8.51849 15.8515L13.3703 10.9997L8.51849 6.14786C8.1605 5.78988 8.1605 5.20947 8.51849 4.85149Z"
                fill="#298CFF"
                fill-opacity="0.8"
              />
            </svg>
          </p>
        </div>
        <div className="flex flex-col">
          <MyStyleSelect
            allCheckHandler={allCheckHandler}
            fetchUserPostDelete={fetchUserPostDelete}
            checkItems={checkItems}
            setCheckItems={setCheckItems}
            handlePostDelete={handlePostDelete}
          />

          <div className="grid grid-cols-2 gap-y-2 gap-x-2 w-[288px] mx-auto">
            {posts.map((post) => {
              return (
                <MyStylePostItem
                  key={post.id}
                  post={post}
                  handleLike={handleLike}
                  isLiked={likedPosts.some(
                    (likedPost) => likedPost.post_id === post.id, // some는 2차원 적으로 객체의배열 에서만 사용
                  )}
                  checkItemsHandler={checkItemsHandler}
                  fetchUserPostDelete={fetchUserPostDelete}
                  checkItems={checkItems}
                  isChecked={checkItems.includes(post.id)} // includes는 1차원 적 string, number에서만 사용
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyStyleList;
