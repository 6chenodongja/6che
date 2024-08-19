'use client';

import React from 'react';
import ThermometerStyle from './ThermometerStyle';
import Header from 'app/(providers)/(components)/Header';
import Footer from 'app/(providers)/(components)/Footer';

function Page() {
  return (
    <div className="container bg-neutral-50 flex flex-col justify-center  items-center w-full min-h-screen">
      <main className="container bg-neutral-50 flex flex-col justify-center  items-center w-full min-h-screen">
        <ThermometerStyle />
      </main>
    </div>
  );
}

export default Page;
