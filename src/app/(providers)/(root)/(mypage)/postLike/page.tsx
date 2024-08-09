'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from 'app/(providers)/(components)/Footer';
import { supabase } from '@/supabase/client';
import { useUserStore } from '@/zustand/store/useUserStore';
import Header from 'app/(providers)/(components)/Header';
import MyStyleHeader from '../myStyle/_components/MyStyleHeader';
import { postLikedItem } from '../../../../../../types/post';
import MyListPage from './_components/MyListPage';

const PostLike = () => {
  const [posts, setPosts] = useState<postLikedItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useUserStore();

  // 좋아요 한 게시물을 가져오는 함수
  const fetchLikedPosts = async () => {
    if (!user) return;
    try {
      setIsLoading(true);
      const { data } = await supabase
        .from('post_likes')
        .select('*, posts(*, users(*)) ')
        .eq('user_id', user?.id);

      if (!data) {
        return;
      }
      setPosts(data);
    } catch (error) {
      console.error('좋아요 한 게시물을 가져오는 함수:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLikedPosts();
  }, [user]);

  return (
    <div className="container">
      {!isLoading && posts.length === 0 ? (
        <div>
          <Header />
          <MyStyleHeader />
          <div className="mt-[60px] mr-[50px] ml-[42px]">
            <Image
              src={'/myLikePage.png'}
              alt="myListPage"
              width={288} // 원본 이미지의 실제 너비를 여기에 설정
              height={147} // 원본 이미지의 실제 높이를 여기에 설정
              layout="intrinsic" // 레이아웃을 고정 크기로 설정
              objectFit="cover" // 이미지를 요소에 꽉 차게 설정
              quality={100} // 이미지 품질을 최대화
            />
          </div>
          <div className="text-[#4D4D4D] font-KR mt-[46px] ml-[53px] mr-[52px] flex justify-center w-[215px] gap-0 whitespace-nowrap">
            아직 좋아요를 한 스타일이 없어요
          </div>

          <Link href={'/list'}>
            <button className="myPage-style-button myPage-style-text flex justify-center items-center mx-auto p-3 rounded-lg mt-[111px]">
              스타일 보러 가기
            </button>
          </Link>
          <div className="mt-[156px]">
            <Footer />
          </div>
        </div>
      ) : (
        <MyListPage posts={posts} setPosts={setPosts} />
      )}
    </div>
  );
};

export default PostLike;
