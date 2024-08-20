import React from 'react';
import MyPageContent from './_components/MyPageContent';

const MyPage: React.FC = () => {
  return (
    <main className="flex justify-center w-full min-h-screen h-auto bg-neutral-50 pt-[80px] pb-[199px]">
      <MyPageContent />
    </main>
  );
};

export default MyPage;
