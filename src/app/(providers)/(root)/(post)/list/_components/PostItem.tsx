import Image from 'next/image';
import Link from 'next/link';
import ListWeatherIcon from './icons/ListWeatherIcon';
import LikeButton from './LikeButton';
import ListNicknameIcon from './icons/ListNicknameIcon';
import ListLiveLikedIcon from './icons/ListLiveLikedIcon';
import { PostItemType } from '../../../../../../../types/post';

interface PostProps {
  post: PostItemType;
  isLiked: boolean;
  handleLike: (postId: string) => Promise<void>;
}

function PostItem({ post, isLiked, handleLike }: PostProps) {
  return (
    <div>
      <div key={post.id} className="relative w-[140px] object-cover">
        <Link href={`/detail/${post.id}`} className="w-[140px] h-[200px] block">
          {post.image_url && (
            <Image
              src={post.image_url.split(',')[0]}
              alt="alt"
              width={100}
              height={100}
              sizes="100"
              className="w-[140px] h-[200px] object-cover rounded-lg"
              priority
            />
          )}
          <div className="absolute top-2 left-2 list-icon-border inline-flex items-center gap-[2px] px-[4px] py-[1px] text-[#4D4D4D]">
            <div className="list-icon">
              <ListWeatherIcon />
            </div>
            26°
          </div>
        </Link>

        {/* 좋아요 부분 */}
        <LikeButton
          handleLike={handleLike}
          postId={post.id}
          isLiked={isLiked}
        />

        <div className="mt-2">
          <div className="text-sm">
            <span className="flex justify-between">
              {/* 날짜이모지와 닉네임  */}
              <span className="font-bold text-[14px] flex flex-row gap-[4px]">
                <div className="w-[20px] h-[20px] p-[1px] flex justify-center items-center icon">
                  <ListNicknameIcon />
                </div>
                {post.users?.nick_name}
              </span>
              <span className="flex flex-row text-[12px]  justify-center items-center">
                <ListLiveLikedIcon />
                {post.like}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
