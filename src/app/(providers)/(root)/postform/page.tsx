'use client';

import React from 'react';
import PostFormPage from './PostForm';
import Header from 'app/(providers)/(components)/Header';
import Footer from 'app/(providers)/(components)/Footer';

function Page() {
  return (
    <div className="container bg-neutral-50 flex flex-col justify-center  items-center w-full min-h-screen">
      <Header />
      <main className="container bg-neutral-50 flex flex-col justify-center  items-center w-full min-h-screen">
        <PostFormPage />
      </main>
      <Footer />
    </div>
  );
}

export default Page;
