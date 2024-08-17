'use client';

import React from 'react';
import ThermometerStyle from './ThermometerStyle';

function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-50">
      <div className="hidden md:block w-full"></div>
      <main className="flex-grow flex justify-center items-center w-full md:mt-[46px] md:mb-[199px]">
        <ThermometerStyle />
      </main>
      <div className="hidden md:block w-full"></div>
    </div>
  );
}

export default Page;
