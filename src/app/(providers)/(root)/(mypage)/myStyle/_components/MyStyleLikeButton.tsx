import LikeIcon from 'app/(providers)/(root)/(post)/list/_components/icons/LikeIcon';
import NotLikeIcon from 'app/(providers)/(root)/(post)/list/_components/icons/NotLikeIcon';
import _ from 'lodash';

interface PostProps {
  postId: string;
  handleLike: (postId: string) => Promise<void>;
  isLiked: boolean;
}

function MyStyleLikeButton({ handleLike, postId, isLiked }: PostProps) {
  const debouncedHandleLike = _.debounce(handleLike, 500);

  console.log(isLiked);

  return (
    <button
      className={`absolute bottom-0 right-0  bg-opacity-50 p-1 m-1 text-sm rounded-lg cursor-pointer  ${
        isLiked ? 'text-red-500' : ''
      }`}
      onClick={() => debouncedHandleLike(postId)}
    >
      {isLiked ? <LikeIcon /> : <NotLikeIcon />}
    </button>
  );
}

export default MyStyleLikeButton;
