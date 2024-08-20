import React from 'react';
import SingUpDone from './_components/SingUpDone';
import BottomSheet from './_components/BottomSheet';
import ProfileSelect from './_components/ProfileSelect';

function SignUpDonePage() {
  return (
    <main className="w-full h-auto pt-[100px] pb-[200px] min-h-screen bg-neutral-50 px-4 md:px-0">
      <div className="relative flex flex-col justify-between w-full h-full md:w-[480px] md:h-[724px] md:bg-white md:shadow-boxShadowPc md:rounded-3xl md:p-10 md:mx-auto">
        <SingUpDone />
      </div>
      <BottomSheet />
    </main>
  );
}

export default SignUpDonePage;
