'use client';
import ListWeatherIcon from 'app/(providers)/(root)/(post)/list/_components/icons/ListWeatherIcon';
import Image from 'next/image';
import MyStyleLikeButton from './MyStyleLikeButton';
import { Tables } from '../../../../../../../types/supabase';
import { ChangeEvent } from 'react';

interface PostProps {
  post: Tables<'posts'>;
  isLiked: boolean;
  handleLike: (postId: string) => Promise<void>;
  checkItems: string[];
  fetchUserPostDelete: () => Promise<void>;
  checkItemsHandler: (postId: string, isChecked: boolean) => void;
  isChecked: boolean;
}

function MyStylePostItem({
  post,
  isLiked,
  handleLike,
  checkItemsHandler,
  isChecked,
}: PostProps) {
  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    checkItemsHandler(post.id, e.target.checked);
  };

  return (
    <div>
      <div
        key={post.id}
        className="relative w-[140px] object-cover md:w-[234px]"
      >
        {post.image_url && (
          <Image
            src={post.image_url.split(',')[0]}
            alt="alt"
            width={100}
            height={100}
            sizes="100"
            className="w-[140px] h-[200px] object-cover rounded-lg md:w-[234px] md:h-[389px]"
            priority
          />
        )}
        <div className="absolute top-2 left-2 list-icon-border inline-flex items-center gap-[2px] px-[4px] py-[1px] text-[#4D4D4D]">
          <div className="list-icon">
            <ListWeatherIcon />
          </div>
          26°
        </div>
        <div className="absolute top-2 right-[10px]">
          <input type="checkbox" checked={isChecked} onChange={handleCheck} />
        </div>

        {/* 좋아요 부분 */}
        <MyStyleLikeButton
          handleLike={handleLike}
          postId={post.id}
          isLiked={isLiked}
        />
      </div>
    </div>
  );
}

export default MyStylePostItem;
