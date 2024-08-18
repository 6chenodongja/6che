// 'use client';

// import React from 'react';
// import ThermometerStyle from './ThermometerStyle';

// function Page() {
//   return (
//     <div className="container bg-neutral-50 flex flex-col justify-center  items-center w-full min-h-screen">
//       <main className="container bg-neutral-50 flex flex-col justify-center  items-center w-full min-h-screen">
//         <ThermometerStyle />
//       </main>
//     </div>
//   );
// }

// export default Page;

'use client';

import React from 'react';
import ThermometerStyle from './ThermometerStyle';

function Page() {
  return (
    <div
      className={`container flex flex-col justify-center items-center w-full min-h-screen ${typeof window !== 'undefined' && window.innerWidth <= 768 ? '' : 'bg-white'}`}
    >
      <main
        className={`container flex flex-col justify-center items-center w-full min-h-screen ${typeof window !== 'undefined' && window.innerWidth >= 769 ? '' : 'bg-neutral-50'}`}
      >
        <ThermometerStyle />
      </main>
    </div>
  );
}

export default Page;
