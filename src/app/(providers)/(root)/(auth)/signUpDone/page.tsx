// 파일 경로: signUpDone/page.tsx
import React from 'react';
import Header from 'app/(providers)/(components)/Header';
import Footer from 'app/(providers)/(components)/Footer';
import SingUpDone from './_components/SingUpDone';
import BottomSheet from './_components/BottomSheet'; // 추가

function SignUpDonePage() {
  return (
    <main className="flex flex-col justify-center container min-h-screen">
      <div className="bg-[#FAFAFA] w-full">
        <Header />
        <SingUpDone />
        <BottomSheet />
        <Footer />
      </div>
    </main>
  );
}

export default SignUpDonePage;
