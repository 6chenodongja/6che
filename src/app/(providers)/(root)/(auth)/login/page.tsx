// 'use client';

// import Header from 'app/(providers)/(components)/Header';
// import LoginForm from './_components/LoginForm';
// import Footer from 'app/(providers)/(components)/Footer';

// function LoginPage() {
//   return (
//     <main className="flex flex-row justify-center container">
//       <div className="bg-[#FAFAFA] w-full h-auto ">
//         <Header />
//         <LoginForm />
//         <Footer />
//       </div>
//     </main>
//   );
// }

// export default LoginPage;

'use client';

import Header from 'app/(providers)/(components)/Header';
import LoginForm from './_components/LoginForm';
import Footer from 'app/(providers)/(components)/Footer';

function LoginPage() {
  return (
    <main className="container flex flex-col justify-between items-center w-full min-h-screen bg-neutral-50">
      <Header />
      <div className="flex-grow flex flex-col justify-center items-center w-full ">
        <LoginForm />
      </div>
      <Footer />
    </main>
  );
}

export default LoginPage;
