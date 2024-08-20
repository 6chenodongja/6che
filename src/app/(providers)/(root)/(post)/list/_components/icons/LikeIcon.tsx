import Image from 'next/image';

const LikeIcon = () => {
  return (
    <Image
      src="/images/LikeButton/LikeIconbutton.png"
      alt="notLikeButton"
      width={28}
      height={28}
      sizes="100vw"
    />
  );
};

export default LikeIcon;
