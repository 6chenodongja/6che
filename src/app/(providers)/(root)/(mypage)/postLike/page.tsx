'use client';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from 'app/(providers)/(components)/Footer';
import { supabase } from '@/supabase/client';
import { useUserStore } from '@/zustand/store/useUserStore';
import Header from 'app/(providers)/(components)/Header';
import { postLikedItem } from '../../../../../../types/post';
import MyListPage from './_components/MyListPage';
import { useCallback } from 'react';
import MyNotStyleHeader from '../myStyle/_components/MyNotStyleHeader';

const PostLike = () => {
  const [posts, setPosts] = useState<postLikedItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useUserStore();

  const fetchLikedPosts = useCallback(async () => {
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
  }, [user]);

  useEffect(() => {
    fetchLikedPosts();
  }, [user, fetchLikedPosts]);

  return (
    <AnimatePresence>
      <motion.div
        key="postLikePage"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          {!isLoading && posts.length === 0 ? (
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
                />
              </div>
              <div className="text-[#4D4D4D] font-KR mt-[46px] ml-[53px] mr-[52px] flex justify-center w-[215px] gap-0 tracking-[-1.8px]">
                아직 좋아요를 한 스타일이 없어요
              </div>
              {/* ! */}
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
      </motion.div>
    </AnimatePresence>
  );
};

export default PostLike;
