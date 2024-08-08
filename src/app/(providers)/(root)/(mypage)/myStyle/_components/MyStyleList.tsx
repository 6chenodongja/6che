'use client';
import React, { useCallback, SetStateAction, Dispatch } from 'react';
import { supabase } from '@/supabase/client';
import _ from 'lodash';
import Header from 'app/(providers)/(components)/Header';
import Footer from 'app/(providers)/(components)/Footer';
import MyStyleSelect from './MyStyleSelect';
import MyStyleHeader from './MyStyleHeader';
import MyStylePostItem from './MyStylePostItem';
import { useUserStore } from '@/zustand/store/useUserStore';

interface PostProps {
  posts: {
    comment: string | null;
    created_at: string | null;
    gender: string | null;
    id: string;
    image_url: string | null;
    like: number | null;
    locations: string | null;
    seasons: string | null;
    style: string | null;
    user_id: string;
    weather: string | null;
  }[];
  setPosts: Dispatch<
    SetStateAction<
      {
        comment: string | null;
        created_at: string | null;
        gender: string | null;
        id: string;
        image_url: string | null;
        like: number | null;
        locations: string | null;
        seasons: string | null;
        style: string | null;
        user_id: string;
        weather: string | null;
      }[]
    >
  >;
}

function MyStyleList({ posts, setPosts }: PostProps) {
  const { user } = useUserStore();

  const likedPosts = posts;
  const setLikedPosts = setPosts;

  const handleLike = useCallback(
    async (postId: string) => {
      if (!user) return;

      const isLiked = likedPosts.some(
        (likedPost) => likedPost.user_id === user.id,
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
              post.user_id === user.id ? { ...post, like: newLikeCount } : post,
            ),
          );
          setLikedPosts((prev) =>
            prev.filter((post) => post.user_id === user.id),
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
              post.user_id === user.id ? { ...post, like: newLikeCount } : post,
            ),
          );
          setLikedPosts((prev) =>
            prev.filter((post) => post.user_id !== user.id),
          );
        }
      } catch (error) {
        console.error(error);
      }
    },
    [user, likedPosts, setLikedPosts, setPosts],
  );

  return (
    <div className="container mx-auto h-auto bg-[#FAFAFA]">
      <Header />
      <MyStyleHeader />
      <MyStyleSelect />
      <div className="grid grid-cols-2 gap-y-2 gap-x-2 w-[288px] mx-auto">
        {likedPosts.map((post) => {
          return (
            <MyStylePostItem
              key={post.id}
              post={post}
              handleLike={handleLike}
              isLiked={likedPosts.some(
                (likedPost) => likedPost.user_id !== user?.id,
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
