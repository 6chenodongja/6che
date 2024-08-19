import Image from 'next/image';
import { postLikedItem } from '../../../../../../../types/post';
import ListWeatherIcon from 'app/(providers)/(root)/(post)/list/_components/icons/ListWeatherIcon';
import ListNicknameIcon from 'app/(providers)/(root)/(post)/list/_components/icons/ListNicknameIcon';
import ListLiveLikedIcon from 'app/(providers)/(root)/(post)/list/_components/icons/ListLiveLikedIcon';
import MyLikeButton from './MyLikeButton';

interface PostProps {
  post: postLikedItem;
  isLiked: boolean;
  handleLike: (postId: string) => Promise<void>;
}

function MyListPostItem({ post, isLiked, handleLike }: PostProps) {
  const nickname = post.posts?.users?.nick_name || '';
  return (
    <div>
      <div
        key={post.id}
        className="relative w-[140px] object-cover md:w-[234px]"
      >
        {post.posts?.image_url && (
          <Image
            src={post.posts.image_url.split(',')[0]}
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

        {/* 좋아요 부분 */}
        <MyLikeButton
          handleLike={handleLike}
          postId={post.post_id}
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
                <span
                  className="overflow-hidden whitespace-nowrap text-ellipsis"
                  style={{
                    maxWidth: '100px',
                  }}
                >
                  {nickname.length > 6
                    ? `${nickname.slice(0, 6)}...`
                    : nickname}
                </span>
              </span>
              <span className="flex flex-row text-[12px]  justify-center items-center">
                <ListLiveLikedIcon />
                {post.posts?.like}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyListPostItem;
