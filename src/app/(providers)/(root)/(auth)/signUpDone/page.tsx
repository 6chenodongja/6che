// 파일 경로: signUpDone/page.tsx
import React from 'react';
import Header from 'app/(providers)/(components)/Header';
import Footer from 'app/(providers)/(components)/Footer';
import SingUpDone from './_components/SingUpDone';
import BottomSheet from './_components/BottomSheet'; // 추가

function SignUpDonePage() {
  return (
    <main className="container flex flex-col justify-between items-center w-full min-h-screen bg-neutral-50">
      <Header />
      <div className="flex-grow flex flex-col justify-center items-center w-full">
        <SingUpDone />
        <BottomSheet />
      </div>
      <Footer />
    </main>
  );
}

export default SignUpDonePage;
