'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from 'app/(providers)/(components)/Footer';
import { supabase } from '@/supabase/client';
import { useUserStore } from '@/zustand/store/useUserStore';
import Header from 'app/(providers)/(components)/Header';
import { postLikedItem } from '../../../../../../types/post';
import MyListPage from './_components/MyListPage';
import MyNotStyleHeader from '../myStyle/_components/MyNotStyleHeader';

const PostLike = () => {
  const [posts, setPosts] = useState<postLikedItem[]>([]);
  const { user } = useUserStore();

  useEffect(() => {
    const fetchLikedPosts = async () => {
      if (!user) return;
      try {
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
      }
    };
    fetchLikedPosts();
  }, [user]);

  return (
    <div className="notPostLike-container mx-auto">
      {posts.length === 0 ? (
        <div>
          <Header />
          <MyNotStyleHeader />
          <div className="mt-[60px] mr-[50px] ml-[42px]">
            <Image
              src={'/myLikePage.png'}
              alt="myListPage"
              width={288}
              height={147}
              layout="intrinsic"
              objectFit="cover"
              quality={100}
              className="mx-auto"
            />
          </div>
          <div className="text-[#4D4D4D] font-KR mt-[46px] ml-[53px] mr-[52px] flex justify-center gap-0 tracking-[-1.8px]">
            아직 좋아요를 한 스타일이 없어요
          </div>
          <Link href={'/list'}>
            <button className="myPage-style-text myStyle-button flex justify-center items-center mx-auto p-3 rounded-lg mt-[50px] w-[232px] hover:bg-[#5EB0FF] transition-colors duration-300">
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
