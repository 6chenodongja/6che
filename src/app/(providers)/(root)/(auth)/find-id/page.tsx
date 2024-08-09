'use client';

import React from 'react';
import FindIdForm from './_components/FindIdForm';
import Header from 'app/(providers)/(components)/Header';
import Footer from 'app/(providers)/(components)/Footer';

function FindIdPage() {
  return (
    <div className="container flex flex-col justify-between items-center w-full min-h-screen bg-neutral-50">
      <Header />
      <main className="flex-grow flex flex-col justify-center items-center w-full">
        <FindIdForm />
      </main>
      <Footer />
    </div>
  );
}

export default FindIdPage;
