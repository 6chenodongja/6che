import React from 'react';
import MyPageContent from './_components/MyPageContent';
import Header from 'app/(providers)/(components)/Header';
import Footer from 'app/(providers)/(components)/Footer';

const MyPage: React.FC = () => {
  return (
    <main className="container flex flex-col justify-between items-center w-full bg-neutral-50">
      <Header />
      <div className="flex-grow flex flex-col justify-center items-center w-full">
        <MyPageContent />
      </div>
      <Footer />
    </main>
  );
};

export default MyPage;
