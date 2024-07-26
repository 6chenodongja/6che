'use client';

import { createClient } from '@/supabase/client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Tables } from '../../../../../../types/supabase';

function PostList() {
  const [liked, setLiked] = useState<{ [key: string]: boolean }>({});
  const [post, setPost] = useState<Tables<'posts'>[]>([]);

  const User = 'a184313d-fac7-4c5d-8ee3-89e367cfb86f';
  const supabase = createClient();

  const handleLike = async (postId: string, userId: string) => {
    try {
      const isLiked = liked[postId];

      if (isLiked) {
        // 좋아요 취소
        await supabase
          .from('post_likes')
          .delete()
          .eq('post_id', postId)
          .eq('user_id', userId);

        console.log('postId =>', postId);
        console.log('userId =>', userId);

        const { data: postData, error: postFetchError } = await supabase
          .from('posts')
          .select('like')
          .eq('id', postId)
          .single();

        if (postFetchError) {
          console.log('해당 포스트의 좋아요 수 가져오기 오류', postFetchError);
        }
        //좋아요 마이너스
        const newLikeCount = (postData?.like || 0) - 1;
        await supabase
          .from('posts')
          .update({ like: newLikeCount })
          .eq('id', postId);

        setPost((prevPosts) =>
          prevPosts.map((post) =>
            post.id === postId ? { ...post, like: newLikeCount } : post,
          ),
        );
      } else {
        // 좋아요 추가
        await supabase
          .from('post_likes')
          .insert({ post_id: postId, user_id: User });

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
        //좋아요 플러스
        const newLikeCount = (postData?.like || 0) + 1;
        await supabase
          .from('posts')
          .update({ like: newLikeCount })
          .eq('id', postId);

        setPost((prevPosts) =>
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
  };
  // 포스트 리스트 가져오기
  const fetchPostList = async () => {
    const { data: postList, error } = await supabase
      .from('posts')
      .select('*')
      .eq('user_id', User); // User바꾸기

    if (error) {
      console.error(error);
      return;
    }

    setPost(postList);
  };

  useEffect(() => {
    fetchPostList();
  }, []);

  return (
    <div className="max-w-sm mx-auto h-auto m-10">
      <div>
        <div className="text-[30px] font-bold">코디</div>
        <p>날씨에 맞는 스타일링</p>
      </div>
      <div className="mt-20">
        <Link href={'/detail'} className="border border-black p-2 rounded-lg">
          코디 등록 ➕
        </Link>
        <span className="flex justify-end">
          <select className="mr-2">
            <option>최신 순</option>
            <option>날짜 순</option>
          </select>
          <select>
            <option>남자</option>
            <option>여자</option>
          </select>
        </span>
      </div>
      <div className="grid grid-cols-2 mt-4 gap-4">
        {post.map((post) => (
          <div key={post.id}>
            <div className="relative">
              <Image
                src={post.image_url}
                alt="alt"
                width={200}
                height={100}
                priority
              />
              <div className="absolute top-0 left-0 bg-white bg-opacity-50 p-1 m-1 text-sm rounded-lg font-bold">
                ☀️ 26℃
              </div>
              <div
                className={`absolute bottom-0 right-0 bg-white bg-opacity-50 p-1 m-1 text-sm rounded-lg cursor-pointer ${
                  liked[post.id] ? 'text-red-500' : ''
                }`}
                onClick={() => handleLike(post.id, post.user_id)}
              >
                {liked[post.id] ? '❤️' : '🤍'}
              </div>
            </div>
            <div className="mt-2">
              <div className="font-bold"></div>
              <div className="text-sm">
                <div className="font-bold text-[20px]">닉네임</div>
                <div className="truncate">{post.comment}</div>
                <div className="flex justify-between">
                  <span>{post.created_at?.split('T')[0]}</span>
                  <span>❤️{post.like}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostList;
