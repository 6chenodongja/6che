'use client';

import Link from 'next/link';
import React, { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useTagStore } from '@/zustand/store/useTagStore';
import { useUserStore } from '@/zustand/store/useUserStore';
import { supabase } from '@/supabase/client';
import LoginModalProps from '@/components/Modal/LoginModal';

interface Post {
  id: string;
  image_url: string | null;
}

const ResultPage: React.FC = () => {
  const [likes, setLikes] = useState<string[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [isDesktop, setIsDesktop] = useState(false);
  const { gender, style, seasons, locations } = useTagStore();
  const { user } = useUserStore();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchPosts = useCallback(async () => {
    const { data: postList, error } = await supabase
      .from('posts')
      .select('id, image_url')
      .or(
        `gender.eq.${gender},style.eq.${style},seasons.in.(${seasons.join(',')}),locations.in.(${locations.join(',')})`,
      )
      .limit(isDesktop ? 6 : 4);

    if (error) {
      console.error('포스트 가져오기 에러:', error);
    } else if (postList) {
      const sanitizedPostList = postList.map((post) => ({
        id: post.id,
        image_url: post.image_url || '',
      }));

      setPosts(sanitizedPostList);
    }
  }, [gender, style, seasons, locations, isDesktop]);

  const fetchUserLikedPosts = useCallback(async () => {
    if (!user) return;

    const { data: likedPosts, error } = await supabase
      .from('post_likes')
      .select('post_id')
      .eq('user_id', user.id);

    if (error) {
      console.error('좋아요한 포스트 가져오기 에러:', error);
    } else {
      setLikes(likedPosts.map((like: { post_id: string }) => like.post_id));
    }
  }, [user]);

  useEffect(() => {
    fetchPosts();
    fetchUserLikedPosts();
  }, [fetchPosts, fetchUserLikedPosts]);

  const handleLikeClick = async (postId: string) => {
    if (!user) {
      setIsModalOpen(true);
      return;
    }

    const isLiked = likes.includes(postId);

    try {
      if (isLiked) {
        await supabase
          .from('post_likes')
          .delete()
          .eq('post_id', postId)
          .eq('user_id', user.id);

        setLikes((prevLikes) => prevLikes.filter((id) => id !== postId));
      } else {
        await supabase
          .from('post_likes')
          .insert({ post_id: postId, user_id: user.id });

        setLikes((prevLikes) => [...prevLikes, postId]);
      }
    } catch (error) {
      console.error('좋아요 상태 업데이트 에러:', error);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleBackClick = () => {
    router.back();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleImageClick = (postId: string) => {
    router.push(`/post/detail/${postId}`);
  };

  return (
    <div className="result-container">
      <div className="result-content">        
        <div className="flex-grow flex flex-col bg-#fafafa items-center justify-between w-full max-w-md mx-auto">
          <div className="w-full flex items-center bg-#fafafa justify-start mb-2 relative question-navigation">
            <button
              onClick={handleBackClick}
              className="text-xl font-medium text-black absolute left-2 back-button"
            >
              <Image
                src={'/images/icons/arrow_left.svg'}
                alt="뒤로가기"
                width={8}
                height={14}
              />
            </button>
          </div>
          <div
            className={`grid ${isDesktop ? 'grid-cols-3' : 'grid-cols-2'} gap-4 mb-4`}
          >
            {posts.map((post) => {
              const imageUrls = post.image_url?.split(',') || [];

              return (
                <div
                  key={post.id}
                  className="w-[142px] h-[200px] bg-gray-200 rounded-lg flex items-center justify-center relative"
                  onClick={() => handleImageClick(post.id)}
                >
                  {imageUrls.map((url, idx) => (
                    <Image
                      key={idx}
                      src={url.trim() || '/images/placeholder.png'}
                      alt={`Post ${post.id} - Image ${idx + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                      quality={100}
                    />
                  ))}
                  <button
                    className="absolute bottom-2 right-2 text-xl backdrop-filter: blur(2px)"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLikeClick(post.id);
                    }}
                  >
                    <img
                      src={
                        likes.includes(post.id)
                          ? '/images/icons/rhaert.png'
                          : '/images/icons/ghaert.png'
                      }
                      alt="Like button"
                      width={24}
                      height={24}
                      style={{
                        imageRendering: 'auto',
                        display: 'block',
                        borderRadius: '50%',
                      }}
                    />
                  </button>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col items-center">
            <h2
              className="text text-sm text-center"
              style={{
                color: 'var(--text, #4D4D4D)',
                fontFamily: 'Noto Sans KR',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '150%',
                letterSpacing: '-0.28px',
              }}
            >
              더 많은 코디를 보고싶다면
            </h2>
            <Link href="/list">
              <button
                className="w-72 h-[46px] next-btn start-button rounded-lg bg-[#121212] hover:bg-[rgba(94,176,255,0.80)] text-white"
                style={{
                  bottom: '50px',
                  display: 'flex',
                  width: '400px',
                  padding: '10px 40px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 'var(--sds-size-space-200)',
                  borderRadius: '10px',
                  background: 'var(--Black, #121212)',
                  color: 'var(--White, #FFF)',
                  fontFamily: '"Noto Sans KR"',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: '130%',
                  letterSpacing: '-0.32px',
                }}
              >
                코디 보러가기
              </button>
            </Link>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <LoginModalProps
          isOpen={isModalOpen}
          onConfirm={closeModal}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default ResultPage;
