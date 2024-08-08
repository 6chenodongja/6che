import ListWeatherIcon from 'app/(providers)/(root)/(post)/list/_components/icons/ListWeatherIcon';
import Image from 'next/image';
import MyStyleLikeButton from './MyStyleLikeButton';

interface PostProps {
  post: {
    comment: string | null;
    created_at: string | null;
    gender: string | null;
    id: string;
    image_url: string | null;
    like: number | null;
    locations: string | null;
    seasons: string | null;
    style: string | null;
    user_id: string;
    weather: string | null;
  };
  isLiked: boolean;
  handleLike: (postId: string) => Promise<void>;
}

function MyStylePostItem({ post, isLiked, handleLike }: PostProps) {
  return (
    <div>
      <div key={post.id} className="relative w-[140px] object-cover">
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
