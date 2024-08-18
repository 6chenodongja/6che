import Image from 'next/image';
import Link from 'next/link';
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
  // weather에서 아이콘과 온도 분리
  const weatherData = post.weather ? post.weather.split(' ') : [];
  const weatherIcon = weatherData[0] || '';
  let temperature = weatherData[1] || '';

  // 온도에서 '°C' 또는 'C'를 제거하고 '°'만 남김
  temperature = temperature.replace('°C', '°').replace('C', '°');

  // 만약 temperature가 범위 형태라면 평균값 계산
  if (temperature.includes('-')) {
    const [minTemp, maxTemp] = temperature
      .split('-')
      .map((t) => parseInt(t.replace('°', '').trim(), 10));
    temperature = `${Math.round((minTemp + maxTemp) / 2)}°`;
  } else if (temperature && !temperature.includes('°')) {
    temperature = `${temperature}°`;
  }

  // 닉네임 안전하게 처리
  const nickname = post.users?.nick_name || '';

  return (
    <div>
      <div
        key={post.id}
        className="relative w-[140px] object-cover lg:w-[188px]"
      >
        <Link
          href={`/detail/${post.id}`}
          className="w-[140px] h-[230px] block lg:w-[188px] lg:h-[300px]"
        >
          {post.image_url && (
            <Image
              src={post.image_url.split(',')[0]}
              alt="alt"
              width={100}
              height={100}
              sizes="100vw"
              className="w-[140px] h-[230px] object-cover rounded-lg lg:w-[188px] lg:h-[300px]"
              priority
            />
          )}
          <div className="absolute top-2 left-2 list-icon-border inline-flex items-center gap-[2px] px-[4px] py-[0.5px] text-[#4D4D4D]">
            {weatherIcon && weatherIcon !== 'undefined' && (
              <div className="list-icon">
                <Image
                  src={weatherIcon}
                  alt="Weather Icon"
                  width={16}
                  height={16}
                />
              </div>
            )}
            {temperature && <span>{temperature}</span>}
          </div>
        </Link>

        {/* 좋아요 부분 */}
        <LikeButton
          handleLike={handleLike}
          postId={post.id}
          isLiked={isLiked}
        />

        <div className="mt-0.5">
          <div className="text-sm">
            <span className="flex justify-between">
              {/* 날짜이모지와 닉네임  */}
              <span className="font-bold text-[14px] flex flex-row gap-[4px]">
                <div className="w-[20px] h-[20px] p-[1px] flex justify-center items-center">
                  <ListNicknameIcon />
                </div>
                <span
                  className="overflow-hidden whitespace-nowrap text-ellipsis"
                  style={{ maxWidth: '100px' }}
                >
                  {nickname.length > 6
                    ? `${nickname.slice(0, 6)}...`
                    : nickname}
                </span>
              </span>
              <span className="flex flex-row text-[12px] justify-center items-center">
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
