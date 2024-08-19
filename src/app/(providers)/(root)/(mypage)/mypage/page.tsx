import React from 'react';
import MyPageContent from './_components/MyPageContent';

const MyPage: React.FC = () => {
  return (
    <main className="flex justify-center w-full min-h-screen pt-[88px] h-auto bg-neutral-50">
      <MyPageContent />
    </main>
  );
};

export default MyPage;
