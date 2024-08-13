'use client';
import Image from 'next/image';
import Header from 'app/(providers)/(components)/Header';
import Link from 'next/link';
import Footer from 'app/(providers)/(components)/Footer';
import MyStyleList from './_components/MyStyleList';
import { supabase } from '@/supabase/client';
import { useEffect, useState, useCallback } from 'react';
import { useUserStore } from '@/zustand/store/useUserStore';
import { Tables } from '../../../../../../types/supabase';
import { postListLikedType } from '../../../../../../types/post';
import MyNotStyleHeader from './_components/MyNotStyleHeader';
import { AnimatePresence, motion } from 'framer-motion';

function MyStylePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<Tables<'posts'>[]>([]);
  const [likedPosts, setLikedPosts] = useState<postListLikedType[]>([]);
  const { user } = useUserStore();

  //내가 올린 게시물 가져오기
  const fetchMyPosts = useCallback(async () => {
    if (!user) return;
    try {
      const { data } = await supabase
        .from('posts')
        .select('*')
        .eq('user_id', user?.id);

      if (!data) {
        return;
      }
      setPosts(data);
    } catch (error) {
      console.error('내가 올린 게시물 가져오기 오류:', error);
    } finally {
      setIsLoading(false);
    }
  }, [user]);

  // post_likes 테이블에 좋아요 유저 정보
  const fetchUserLiked = useCallback(async () => {
    if (!user) return;

    const { data: isLikes, error } = await supabase
      .from('post_likes')
      .select('post_id')
      .eq('user_id', user?.id);

    if (error) {
      console.error('좋아요 누른 유저가 없다:', error);
    } else {
      setLikedPosts(isLikes);
    }
  }, [user]);

  useEffect(() => {
    fetchMyPosts();
    fetchUserLiked();
  }, [user, fetchMyPosts, fetchUserLiked]);

  return (
    <AnimatePresence>
      <motion.div
        key="myStylePage"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{ duration: 0.5 }}
        className="container"
      >
        {!isLoading && posts.length === 0 ? (
          <div>
            <Header />
            <MyNotStyleHeader />
            <div className="mt-[60px] mr-[50px] ml-[42px]">
              <Image
                src={'/myStylePage.png'}
                alt="myListPage"
                width={200}
                height={100}
                sizes="100vw"
                className="h-[220px] w-[238px]"
              />
            </div>
            <div className="text-[#4D4D4D] font-KR text-base font-medium leading-6 tracking-[-0.80px] ml-[69px] mr-[68px] ">
              아직 등록한 코디가 없어요
            </div>
            <Link href={'/postform'}>
              <button className="myPage-style-text myStyle-button mx-auto h-[49px] rounded-lg mt-[26px] hover:bg-[#5EB0FF] transition-colors duration-200">
                코디 등록하기
              </button>
            </Link>
            <div className="mt-[156px]">
              <Footer />
            </div>
          </div>
        ) : (
          <MyStyleList
            posts={posts}
            setPosts={setPosts}
            likedPosts={likedPosts}
            setLikedPosts={setLikedPosts}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
}

export default MyStylePage;
