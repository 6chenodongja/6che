'use client';

import React from 'react';
import PostForm from './PostForm';

function PostFormPage() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-50">
      <div className="hidden md:block w-full"></div>
      <main className="flex-grow flex justify-center items-center w-full md:my-[46px]">
        <PostForm />
      </main>
      <div className="hidden md:block w-full"></div>
    </div>
  );
}

export default PostFormPage;
