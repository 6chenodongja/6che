import React from 'react';
import SingUpDone from './_components/SingUpDone';
import BottomSheet from './_components/BottomSheet';

function SignUpDonePage() {
  return (
    <main className="flex justify-center items-center w-full min-h-screen bg-neutral-50">
      <div className="flex justify-center items-center w-full">
        <SingUpDone />
        <BottomSheet />
      </div>
    </main>
  );
}

export default SignUpDonePage;
