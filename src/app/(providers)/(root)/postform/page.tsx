// 'use client';

// import React from 'react';
// import PostForm from './PostForm';

// function PostFormPage() {
//   const [isDesktop, setIsDesktop] = React.useState(false);

//   React.useEffect(() => {
//     const handleResize = () => {
//       setIsDesktop(window.innerWidth >= 769);
//     };

//     handleResize();

//     window.addEventListener('resize', handleResize);

//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <div className="bg-[#fafafa] flex flex-col justify-center items-center w-full min-h-screen p-0 m-0">
//       {/* {isDesktop && } */}

//       <main className="bg-[#fafafa] flex flex-col justify-center items-center w-full min-h-screen p-0 m-0">
//         <PostForm />
//       </main>

//       {/* {isDesktop && } */}
//     </div>
//   );
// }

// export default PostFormPage;

'use client';

import React from 'react';
import PostForm from './PostForm';

function PostFormPage() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-50">
      <div className="hidden md:block w-full"></div>
      <main className="flex-grow flex justify-center items-center w-full md:mt-[46px] md:mb-[199px]">
        <PostForm />
      </main>
      <div className="hidden md:block w-full"></div>
    </div>
  );
}

export default PostFormPage;
