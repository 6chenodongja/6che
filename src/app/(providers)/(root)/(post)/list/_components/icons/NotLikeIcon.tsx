import Image from 'next/image';

const NotLikeIcon = () => {
  return (
    <Image
      src="/images/LikeButton/NotLikeIconButton.png"
      alt="notLikeButton"
      width={28}
      height={28}
      sizes="100vw"
    />
  );
};

export default NotLikeIcon;
