'use client';

import React from 'react';
import FindIdForm from './_components/FindIdForm';

function FindIdPage() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-50">
      <main className="flex-grow flex justify-center items-center w-full md:mt-[46px] md:mb-[199px]">
        <FindIdForm />
      </main>
    </div>
  );
}

export default FindIdPage;
