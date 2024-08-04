'use client';

import React from 'react';
import PostFormPage from './PostForm';
import Header from 'app/(providers)/(components)/Header';
import Footer from 'app/(providers)/(components)/Footer';

function Page() {
  return (
    <div>
      <Header />
      <main>
        <PostFormPage />
      </main>
      <Footer />
    </div>
  );
}

export default Page;
