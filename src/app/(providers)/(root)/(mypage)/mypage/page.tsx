import React from 'react';
import MyPageContent from './_components/MyPageContent';

const MyPage: React.FC = () => {
  return (
    <main className="flex justify-center items-center w-full min-h-screen bg-neutral-50">
      <div className="flex justify-center items-center w-full">
        <MyPageContent />
      </div>
    </main>
  );
};

export default MyPage;
