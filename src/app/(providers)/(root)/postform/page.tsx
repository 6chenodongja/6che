'use client';

import React from 'react';
import PostForm from './PostForm';

function PostFormPage() {
  return (
    <div className="bg-[#fafafa] flex flex-col justify-center items-center w-full min-h-screen p-0 m-0">
      <main className="bg-[#fafafa] flex flex-col justify-center items-center w-full min-h-screen p-0 m-0">
        <PostForm />
      </main>
    </div>
  );
}

export default PostFormPage;
