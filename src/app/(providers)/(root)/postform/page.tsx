'use client';

import React from 'react';
import PostForm from './PostForm';
import Header from 'app/(providers)/(components)/Header';
import Footer from 'app/(providers)/(components)/Footer';

function PostFormPage() {
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 769);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-[#fafafa] flex flex-col justify-center items-center w-full min-h-screen p-0 m-0">
      {isDesktop && <Header />}

      <main className="bg-[#fafafa] flex flex-col justify-center items-center w-full min-h-screen p-0 m-0">
        <PostForm />
      </main>

      {isDesktop && <Footer />}
    </div>
  );
}

export default PostFormPage;
