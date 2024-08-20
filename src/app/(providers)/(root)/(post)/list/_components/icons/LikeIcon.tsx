import Image from 'next/image';

const LikeIcon = () => {
  return (
    <Image
      src="/images/LikeButton/LikeIconButton.png"
      alt="notLikeButton"
      width={28}
      height={28}
      sizes="100vw"
    />
  );
};

export default LikeIcon;
