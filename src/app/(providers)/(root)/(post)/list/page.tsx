'use client';

import { createClient } from '@/supabase/client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Tables } from '../../../../../../types/supabase';
import ListHeader from './_components/ListHeader';
import ListSelects from './_components/ListSelect';
import ScrollButtons from './_components/ScrollButtons';
import _ from 'lodash';

function PostList() {
  const [liked, setLiked] = useState<{ [key: string]: boolean }>({});
  const [post, setPost] = useState<Tables<'posts'>[]>([]);
  const [users, setUsers] = useState<Tables<'users'>[]>([]);
  const [latest, setLatest] = useState('latest');

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

        const { data: postData, error: postFetchError } = await supabase
          .from('posts')
          .select('like')
          .eq('id', postId)
          .single();

        if (postFetchError) {
          console.log('해당 포스트의 좋아요 수 가져오기 오류', postFetchError);
        }
        // 좋아요 마이너스
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
        // 좋아요 플러스
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

  const debouncedHandleLike = _.debounce(handleLike, 500);

  // 유저 닉네임 가져오기
  const fetchUsers = async () => {
    const { data } = await supabase.from('users').select('*').eq('id', User);

    if (data) {
      setUsers(data);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const getNickName = (userId: string) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.nick_name : 'Unknown';
  };

  // 포스트 리스트와 최신순과 좋아요순으로 정렬
  const fetchPosts = async (order: string) => {
    const orderColumn = order === 'latest' ? 'created_at' : 'like';
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('user_id', User)
      .order(orderColumn, { ascending: false });

    if (error) {
      console.error(error);
    } else {
      setPost(data);
    }
  };

  useEffect(() => {
    fetchPosts(latest);
  }, [latest]);

  console.log(latest);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLatest(e.target.value);
  };

  return (
    <div className="max-w-sm mx-auto h-auto">
      <ListHeader />
      <div className="mt-6">
        <ListSelects handleSortChange={handleSortChange} />
      </div>

      <div className="grid grid-cols-2 m-4 gap-2">
        {post.map((post) => (
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
              <div className="absolute top-4 bg-white bg-opacity-50 p-1 m-1 text-sm rounded-lg font-bold">
                ☀️ 26℃
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
                  className="w-6 h-6 relative"
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
              <div className="font-bold"></div>
              <div className="text-sm">
                <span className="flex justify-start">
                  <span className="font-bold text-[14px]">
                    {getNickName(post.user_id)}
                  </span>
                  <span className="flex flex-row text-[12px] ml-[24px]">
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
