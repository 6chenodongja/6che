'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { createClient } from '@/supabase/client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useTagStore } from '@/zustand/store/useTagStore';

interface Post {
  id: string;
  image_url: string;
}

const ResultPage: React.FC = () => {
  const [likes, setLikes] = useState(Array(6).fill(false)); // 최대 6개의 항목
  const [posts, setPosts] = useState<Post[]>([]);
  const [isDesktop, setIsDesktop] = useState(false); // 768px 이상 여부 감지
  const { gender, style, seasons, locations } = useTagStore();
  const router = useRouter();

  // 화면 크기 감지
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize(); // 초기 값 설정
    window.addEventListener('resize', handleResize); // 화면 크기 변경 시 이벤트 처리
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // 화면 크기에 따라 가져올 포스트 수 설정
  useEffect(() => {
    if (gender && style && seasons.length > 0 && locations.length > 0) {
      fetchPosts(gender, style, seasons, locations, isDesktop ? 6 : 4);
    }
  }, [gender, style, seasons, locations, isDesktop]);

  // 포스트 가져오기 함수
  const fetchPosts = async (
    gender: string,
    style: string,
    seasons: string[],
    locations: string[],
    limit: number,
  ) => {
    const supabase = createClient();

    const { data, error } = await supabase
      .from('posts')
      .select('id, image_url')
      .or(
        `gender.eq.${gender},style.eq.${style},seasons.in.(${seasons.join(',')}),locations.in.(${locations.join(',')})`,
      )
      .limit(limit); // limit 값으로 가져올 포스트 수를 설정

    if (error) {
      console.error('Error fetching posts:', error);
    } else if (
      data &&
      Array.isArray(data) &&
      data.every((post) => 'id' in post && 'image_url' in post)
    ) {
      setPosts(data as Post[]);
    } else {
      console.error('Data format is incorrect:', data);
    }
  };

  const handleLikeClick = (index: number) => {
    const newLikes = [...likes];
    newLikes[index] = !newLikes[index];
    setLikes(newLikes);
  };

  const handleBackClick = () => {
    router.back();
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
                height={8}
              />
            </button>
          </div>
          <div
            className={`grid ${isDesktop ? 'grid-cols-3' : 'grid-cols-2'} gap-4 mb-4`}
          >
            {posts.map((post, index) => {
              const imageUrls = post.image_url.split(',');

              return (
                <div
                  key={post.id}
                  className="w-[142px] h-[200px] bg-gray-200 rounded-lg flex items-center justify-center relative"
                >
                  {imageUrls.map((url, imgIndex) => (
                    <Image
                      key={imgIndex}
                      src={url}
                      alt={`Post ${post.id} - Image ${imgIndex + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                      quality={100}
                    />
                  ))}
                  <button
                    className="absolute bottom-2 right-2 text-xl backdrop-filter: blur(2px)"
                    onClick={() => handleLikeClick(index)}
                  >
                    <Image
                      src={
                        likes[index]
                          ? '/images/icons/redhaert.svg'
                          : '/images/icons/whitehaert.svg'
                      }
                      alt="Like button"
                      width={24}
                      height={24}
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
                  width: '400px', // 너비를 100%로 설정하여 전체 화면을 차지하게 설정
                  padding: '10px 40px', // 상하 여백을 20px로 설정하고, 좌우 여백도 40px로 증가
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
    </div>
  );
};

export default ResultPage;
