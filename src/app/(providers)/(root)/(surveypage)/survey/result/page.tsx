'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { createClient } from '@/supabase/client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useTagStore } from '@/zustand/store/useTagStore';
import Header from '../../../../../(providers)/(components)/Header';
import Footer from '../../../../../(providers)/(components)/Footer';

interface Post {
  id: string;
  image_url: string;
}

const ResultPage: React.FC = () => {
  const [likes, setLikes] = useState(Array(4).fill(false));
  const [posts, setPosts] = useState<Post[]>([]);
  const { gender, style, seasons, locations } = useTagStore();
  const router = useRouter();

  useEffect(() => {
    if (gender && style && seasons.length > 0 && locations.length > 0) {
      fetchPosts(gender, style, seasons, locations);
    }
  }, [gender, style, seasons, locations]);

  const fetchPosts = async (
    gender: string,
    style: string,
    seasons: string[],
    locations: string[],
  ) => {
    const supabase = createClient();

    const { data, error } = await supabase
      .from('posts')
      .select('id, image_url')
      .or(
        `gender.eq.${gender},style.eq.${style},seasons.in.(${seasons.join(',')}),locations.in.(${locations.join(',')})`,
      )
      .limit(4);

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
    <div className="container bg-neutral-50 flex flex-col justify-center items-center w-full min-h-screen">
      <Header />
      <div
        className="flex-grow flex flex-col items-center justify-between w-full max-w-md mx-auto mt-7"
        style={{ height: '570px' }}
      >
        <div className="w-full flex items-center justify-start mb-2 relative">
          <button
            onClick={handleBackClick}
            className="text-xl font-medium text-black absolute left-2"
            style={{ right: 'initial', left: '11px' }}
          >
            <Image
              src={'/images/icons/arrow_left.svg'}
              alt="뒤로가기"
              width={8}
              height={8}
            />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {posts.map((post, index) => (
            <div
              key={post.id}
              className="w-[142px] h-[200px] bg-gray-200 rounded-lg flex items-center justify-center relative"
            >
              <Image
                src={post.image_url}
                alt={`Post ${post.id}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
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
          ))}
        </div>
        <div className="flex flex-col items-center space-y-1">
          <h2 className="text-sm text-center text-[#121212]">
            더 많은 코디를 보고싶다면
          </h2>
          <Link href="/list">
            <button className="w-72 h-[46px] rounded-lg bg-[#121212] hover:bg-[rgba(94,176,255,0.80)] text-white mt-2">
              게시글 보러가기
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResultPage;
