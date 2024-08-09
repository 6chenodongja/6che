'use client';
import React, { useCallback, SetStateAction, Dispatch } from 'react';
import { supabase } from '@/supabase/client';
import _ from 'lodash';
import Header from 'app/(providers)/(components)/Header';
import Footer from 'app/(providers)/(components)/Footer';
import MyStyleHeader from './MyStyleHeader';
import MyStylePostItem from './MyStylePostItem';
import { useUserStore } from '@/zustand/store/useUserStore';
import MySelectPage from '../../postLike/_components/MySelectPage';
import { Tables } from '../../../../../../../types/supabase';
import { postListLikedType } from '../../../../../../../types/post';

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

  return (
    <div className="container mx-auto bg-[#FAFAFA]">
      <Header />
      <MyStyleHeader />
      <MySelectPage />
      <div className="grid grid-cols-2 gap-y-2 gap-x-2 w-[288px] mx-auto">
        {posts.map((post) => {
          return (
            <MyStylePostItem
              key={post.id}
              post={post}
              handleLike={handleLike}
              isLiked={likedPosts.some(
                (likedPost) => likedPost.post_id === post.id,
              )}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default MyStyleList;
