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
      <MyLikeHeader />
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
      <div></div>
    </div>
  );
}

export default MyListPage;
