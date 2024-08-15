'use client';

import React from 'react';
import FindIdForm from './_components/FindIdForm';
import Header from 'app/(providers)/(components)/Header';
import Footer from 'app/(providers)/(components)/Footer';

function FindIdPage() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-50">
      <Header />
      <main className="flex-grow flex justify-center items-center w-full md:mt-[46px] md:mb-[199px]">
        <FindIdForm />
      </main>
      <Footer />
    </div>
  );
}

export default FindIdPage;
