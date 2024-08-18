'use client';
import React, { useCallback } from 'react';
import _ from 'lodash';
import { postLikedItem } from '../../../../../../../types/post';
import { supabase } from '@/supabase/client';
import { useUserStore } from '@/zustand/store/useUserStore';
import MyListPostItem from './MyListPostItem';
import ScrollButtons from 'app/(providers)/(root)/(post)/list/_components/ScrollButtons';
import MySelectPage from './MySelectPage';
import MyLikeHeader from './MyLikeHeader';
import Link from 'next/link';

interface PostsProps {
  posts: postLikedItem[];
  setPosts: React.Dispatch<React.SetStateAction<postLikedItem[]>>;
}

function MyListPage({ posts, setPosts }: PostsProps) {
  const { user } = useUserStore();

  const likedPosts = posts;
  const setLikedPosts = setPosts;

  const handleLike = useCallback(
    async (postId: string) => {
      if (!user) {
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
            return;
          }

          const newLikeCount = (postData?.like || 0) - 1;
          await supabase
            .from('posts')
            .update({ like: newLikeCount })
            .eq('id', postId);

          setPosts((prevPosts) =>
            prevPosts.map((post) =>
              post.post_id === postId ? { ...post, like: newLikeCount } : post,
            ),
          );
          setLikedPosts((prev) =>
            prev.filter((post) => post.post_id !== postId),
          );
        }
      } catch (error) {
        console.error('좋아요 처리 중 오류 발생:', error);
      }
    },
    [likedPosts, user, setLikedPosts, setPosts],
  );

  return (
    <div className="min-w-[320px] max-w-[768px] md:min-w-[768px] md:max-w-[1920px] mx-auto bg-[#FAFAFA]">
      <div className="flex justify-center flex-col md:hidden">
        <div className="flex justify-center md:hidden">
          <MyLikeHeader />
        </div>
        <MySelectPage />
        <div className="grid grid-cols-2 gap-y-2 gap-x-2 w-[288px] mx-auto">
          {posts.map((post) => (
            <MyListPostItem
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

      {/* 768이상 해상도 디자인 */}
      <div className="hidden md:flex">
        <div>
          <div
            className="md:w-[220px] md:h-[170px] md:px-[8xp] md:py-[16px] md:flex md:flex-col md:rounded-[12px] md:opacity-50 md:gap-[4px] md:mt-[20px] md:justify-around md:ml-[200px]"
            style={{
              boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.05)',
            }}
          >
            <Link href={'/mypage'}>
              <p className="flex px-[16px] items-center self-stretch font-KR text-[14px] font-normal leading-[18.2px] -tracking-[0.28]">
                마이페이지
              </p>
            </Link>
            <p className="flex px-[16px] items-center self-stretch flex-row justify-between">
              좋아요한 코디
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
                  fill="#121212"
                  fill-opacity="0.8"
                />
              </svg>
            </p>
            <Link href={'/myStyle'}>
              <p className="flex px-[16px] items-center self-stretch text-[16px] font-semibold">
                내 코디
              </p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <MySelectPage />
          <div className="grid grid-cols-2 gap-y-2 gap-x-2 w-[288px] mx-auto">
            {posts.map((post) => (
              <MyListPostItem
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
      </div>
    </div>
  );
}

export default MyListPage;
