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
    <div className="container mx-auto bg-[#FAFAFA]">
      <Header />
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
      <Footer />
    </div>
  );
}

export default MyStyleList;
