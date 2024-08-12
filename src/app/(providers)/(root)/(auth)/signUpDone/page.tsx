// 파일 경로: signUpDone/page.tsx
import React from 'react';
import Header from 'app/(providers)/(components)/Header';
import Footer from 'app/(providers)/(components)/Footer';
import SingUpDone from './_components/SingUpDone';
import BottomSheet from './_components/BottomSheet'; // 추가

function SignUpDonePage() {
  return (
    <main className="container bg-neutral-50 flex flex-col justify-center items-center w-full">
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
