import React from 'react';
import MyPageContent from './_components/MyPageContent';
import Header from 'app/(providers)/(components)/Header';
import Footer from 'app/(providers)/(components)/Footer';

const MyPage: React.FC = () => {
  return (
    <main className="">
      <Header />
      <div>
        <MyPageContent />
      </div>
      <Footer />
    </main>
  );
};

export default MyPage;
